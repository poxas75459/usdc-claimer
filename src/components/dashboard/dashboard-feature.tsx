/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3soHNXXc2QUuegXnKHyu71qSZx1LepAA8ZDiqdXKyrVwDfxmeQgME8XcSTSwXbwCGNRWBNp3At25NZFuPEt4om8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQURHsmJ4noN97TmmirAMaFfrRU4JpYJTyAUbDwmo3EqHTD6h4EHDDQoYn2JEZ6LSs56wf9TTvQcHZjBFWLb5qA",
  "key1": "2R6KKER7YhGtDSm7UnUeTo6yF13SeXyT6yFtyJJA6eXvHHiYctDGc9DovusNTewiGZk9r1ngof6CWaQb7uEpj6eX",
  "key2": "2nYduB6qULGZqjvnvz7KmRZKVpXwz2ZQr9ZSh5obCGXnVyzdNhcLhvjeYXxJhjtCYdBT7RPQtMDdSs5ZF2Bsqspx",
  "key3": "VY49pepZPtmvPALwvARUYk27PQpZDKHee1AqmMAvhWcjo6KtXqDYJmTEgqe6C3tzMt2nwqP4zY8ojz2gvgyr6Vt",
  "key4": "4JLaSEk9eMYtZ8XD59YTYgk2BJ9WvNSaGjH4cJfDbPSsCU9xnQBno2qX3scvgxXho5Q68LXJkaj5b6Rocsw4esFu",
  "key5": "5rVcD95yNSyzTX6koGepJgX78jwdA6Zd5NXNf1gMeXH2Crusv14rGbQx8gaewqqyVQQiwcXNCbWFqvVXESPaCLEg",
  "key6": "66gGkvYQ3U4HuLtutccuPASmtW1wEZLWsgzsUwhcStRqDiwQ9AVTGrfFPue5r41KnR3g88FhnXVeE4mK1gKRMwAU",
  "key7": "3WGsKRNhDdfj4MDzaZniuayTTkbkrFB5TXwDeDzcrYiBJ3nR2Y442zbNFYALqPC4nKLdSYS6fZJE9Xvq3tZhBt9e",
  "key8": "hRuATjp7KbwwbjnchVC3xNSa1PTVvYhX6XrqKSjG87mXxFcsPSJZ5hjbjP4ckGqDNCCBHfJDEVVQakxYBxvTfTd",
  "key9": "5zUunYBgJZxBJJK4grg7o1pwbtnLwWWrswChpLQ7ra5manBokR1CRThvkw9jfwde9qt76SF8rnLYM687gxrksR2",
  "key10": "4Mos3xsp7YKrGWkdXqjxJMNMDtchvM9MdrDXkHodniqUtiR3hiPYvU4HqeJjdHFWFPBhM3ghzasCLJZzK2VHL95",
  "key11": "3gGi3fjrsAhCkPvmuAE3NZz8s2AM5kKHZKtqoamZnA4wuMJqdgWhZFDGGR8s2r3Jk6hxkgoTC2M9zRrtCfx8g1Vc",
  "key12": "VQCiAi7ipnrEiHazu6irdLv5i8DiF6883RtxFvP8H8T3uNzynP1VyWYVYogJeCmWNzeLmhaGGPWTKKwzUJjrs7J",
  "key13": "vC6YbYAgmEyUaL8xhwD4odKnqhH1LcWfJz29UHiWSSohuxdfyQAzuuKaaaYMT4mokC9e2gBfkniYcgrALnhxDWd",
  "key14": "BDHCrrxsbdsg1mmiZ46JisSC97Vz1pLfi3uj6PM6tzdG9FLTBahd7Hibd6dNq5KwSNiguD88L5CPGihLpMjVW2Z",
  "key15": "485TVLPokmp275YYxspaatV4txw4nwwdh8gULt19Mfk7ggqrwQJwyZYeUcQAMapfbyCJAAbrPkuFDkwHBqgYdvpG",
  "key16": "PxJZkWJ9uWShRUXSkUk3Fgvg9TwEfWtkJUVK7zKVSE6pdvUXwdp13ZMhEMAtiZmRRsbgmjtFzgiCV1GeN8c5HeH",
  "key17": "QMHgjwSqFNCFLLiEFSAPfFRu7vbUc5Jf7wtYVZhSVRjg5eLxunECsVF7y8KXrssZaC9wqoU4eqT3ZsN3thMKTUp",
  "key18": "3exFk6DdNU2xvwDC1Z18FdLqaAXQdrfegn9g6SBp9qxzd3zDZDix6SKu9XKbMzeDPWziRVLzSjv2Wxy3zVHztBcq",
  "key19": "32XFhUMECBuoKq9mG9DbPHyveH5oSjCwhrCZRzfTLb4RunfnEuk1TFMTv8PBLSUVtwYcbvhkBzP9ozzDvwk87D2E",
  "key20": "TKQhJrPvSS3dgik3TyFBtk2gouMroh1Yxyzx5AfGkd6ENdUJZCSm8mYQu8mZPCihoQYhA2d7v7sbWjLgYq33hrM",
  "key21": "3TU3zyycN88JdzpH29kjgP27yaxyQqRjx7DtqCgwU9fftf22j8PvMQAgkdvBCriGqggPemx5J8wmagXff3sriwG8",
  "key22": "5tbGrA9MZVghBWEoLEKyJiLUSbNF7V4GNy3CyTDhqEn462vSq1JbsaWqQrYfXKCFN2YaCVQ1LHBFzst7Adf4xdnQ",
  "key23": "iQgBqE9SBWncwpnTNagLaqSkCZTuygNRvkW3C53pakK6QFWa42FsMYqzUx2Xg8fPZyMFaSpuYw3iMnr6LKeHpPW",
  "key24": "4b9iF4agosgZxCHJw4swg5V563x224cyiomJDKGePtrJiZ6grdpRhhRZ3VWcK9AxCjcfFVKzXWGVoEz5auqE7fXt",
  "key25": "4j3adtPMqfbz5DM5o24voPa1onFBQ1bbcN7PZ7w6YUdCZ2HBzokRuLziNQvb3EYxsVq8z562aT9r1RmeLVZtqLKS",
  "key26": "5MfcbyuqjvNuAGNpigiaKdRfY6FgVjf9mL3RhdoyE9mwop69mWHQbe8GcRzhrGwWcgq4tdCEPm1DgSLys4eAjH82",
  "key27": "AeyjdPh6zpUv3ggoPT1Wk7SNKpSwim8X56EtcFHk1qT2HBDB5bhdZRxWSfPkXdnN7yQvcxhJfcqBdRGyFotZU13",
  "key28": "4aTUmBhWiMQDiojs8tWGP2qJ6Zvw4Xzyp8y7h9ArCdBvMrVjdarc7fVZxbvZjwCQX7Sf8xmtLazA8dM8pncnRjqy",
  "key29": "2UYGdwWbTESjwfcpr6gCoP5FYZaBhCyoKnkaLywK12fGz2QFSXsJHDtWoFfUNdcAPHxfac3rS8oHteXFcSNp4uMh",
  "key30": "5RsQ2AA9mqSxS8hHN6mg5mhtUMCy7KtFsji3xqk11f3XafUhAfvASuVc7duX6QKFkTHwYqwYj1qnnisbbwoaKtxi",
  "key31": "4gjao8qEdQSVGJc8zsATbfQmkMG5UUzPRrQDoyf77FNGuygDjUexPbzzK8P3xAqjyt3isXqqYoQ2TeAsxkhcW1n8",
  "key32": "ZsFx7ZvAzmQPttgKraeUPp1Mii7UFRbz3daVhKQiGHamR2Z3UKdmwJdZAVqCh1CEh5mJY5hEXkeqqZRN1QMFsiE",
  "key33": "5Hp2L1pE8vyvEho46Q8r3Wn4q9eTpnumoTMGSNdyNTgd1fn6tAzEmKLG8XX6cooCj13Z9zJaifT5rZ9Xrrj6ZNpa",
  "key34": "4xTNKygR82N5PPQacjqB8UMWRQostSFQz6AtBoegLtVZtEU14cu2bcjfjC5FmnBPDcJ1LTWybb2Vobg3nYEsSmQ8",
  "key35": "4ht8G2Zh49TXigohkusZyiusjfhbB6shmkctxowYBjaZNnBduaueRes4bDTCmTB6NuWjgei2XEp98r5yN4urCerb",
  "key36": "5bDT8x63r7wnNNxRWgLGttVJ4e6EsYoDkmyozn67WuzcvSKeXvSHeg39gkSHP3hBUAzAQLovatQBfUhdzociNDQN",
  "key37": "5BvmfaAkUGn1YpFp1UKWBv5mZUWLmTTxNogSGQYSZmbbkatC3DL4z55HvziwFuYixF8CnYnNQZ5gHYLW3V1N14o6",
  "key38": "2ba8EYR7JHV2p9JWhwGunU9zZsF43a3pP84Ux5opg1sMhTcJ8V5av4QK9qoxrkwsL1Xy73wmbfeefAz2mHvN5WN1",
  "key39": "4fwDQmzFkyXs2DN4nrQhb6NcxMxQzF3mXTGucnm8BNEFNnfXsGADkeBzECnwtEa9jxA7NJwVPRAgG1ut6v6etdJo"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
