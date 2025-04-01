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
    "2CvSJnCCUqtTeViC6bn46PYHvzuPjYsg5yrtcVcTnYRrLgwnQpmUyezdTj3yuaYpHK2Ena3KDhhUThjDhXs3zxfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFbySQ93qLnyLMrVtjNZ57SFqdpUtkvGCb9QddfYXbYpJRBHh6ojxr8gJhSaSVkQmXN7TX4HpfiWLfG1s8zjaZo",
  "key1": "4Sk9MpfWaTfNdQnrs1aMRWPQFi4YBKf4RrPEj7AvhnyvPknXGR6J34pLEb9WXumEu1STyA2gpChgP9WGhG5p2Hi3",
  "key2": "5DpWaHANtJmgtJhKnpbTXEfk2JndBqzh8P4YHiUisari4vsmfJ9jJf8PUS3UVgduWn8L3MTruuueAdoHxydaYMr9",
  "key3": "hkkBpJ5YLhe6gVwp3R6tTjZrWLDa1B3nDjfgY6mjZWdZYfioNg1qB67KHQUT9ot1vMgfbavypiJB6UFviJahCZV",
  "key4": "3a9ZuxNy95K17mgtADgJ1F2HyVKFEtnYCFxUKLXKaBEyRmGqXhxq5ikDSNXzyFpvaTDJRTd28v1rXnPuTKHHpYXa",
  "key5": "6JPvM9v9DnUbK5RDbsTQvN54GEVE3S2yPZCTyhYw8QwKySvX4zdMTCvbqS8uer9VoJFYdxs7fNNgLSsD5LmL4kW",
  "key6": "2BxYhKrEj2ZQEMHSYf4Q67PkqT2LuQGm3y1vUeR5yisubTx87ycDv7sr3b2seArNpEBvkJiCKXmF1pwxKwW2KCp3",
  "key7": "31W1eT6CUo4UyFdMS6U4yY6KVyXjdEhCLNf9nsweUPES4i2pR5FxWuzcrkKjuva3kve7J36ybCyHqh6EGReB1KBY",
  "key8": "2LeQRjDqmXvA51yZGgd3D1v7pivkhbGJjv1agX1xKPXeqVSbhsEVkLdFzcfBtwwYTRmLdNu57ijmYosfDFuLC9La",
  "key9": "5U769tz2jbqsw3zk7B4efYHxcXRUp9bHF8c91z8T3jByBGST6SBtsUXHG2dffw8yjEpeHRkxw47QhMAUQ7nVQSJM",
  "key10": "243tuq44j9tbcsfqcLzyxeLbm9Kh174CLkyfomf5tcAUfiCA8vyvbVRrqKLyXo8L85hPL8HhQfUQjU97X3UqUtyX",
  "key11": "5KUXEJLBJoE3eTdNbvChsUQtRPtbH7sgUDdEdZgrKY6bwLPY33CiT6TrTMQTxBPynXzBjDHuUiTsJBooRDTNRs3o",
  "key12": "5tg4zSq4f4Bpy7aQLnHeBhwWZ4jaPrM5CRRxFnYXoTXLU1HBMTC7gKVseygre61V1wfankRckZFeCt7mFFcTRzYC",
  "key13": "3uAtTqfkUBKxqCRP4FxzjFZkWZr1tXhvEeiwYE4CmW5JZsoSUtbXeBLiF7sm3eq83Mjxu5bivsjHr12Def1tTZsX",
  "key14": "32aRQGbC9BLGUmg3P8DXMz3hQRDSFNe6Ad61E1KwujsoSGeP8rtbEnDotzPU8Zm5ctzQAuNfkpvwXUodMjtioUEM",
  "key15": "UDeUnyt4jj12bLB9cszLiL77yiAFL1Ah5BZ9QS19VCxRT3BXfYx2DvVQ6KD5kgeLNXfpWrq4XK3LKwAbJDKVRyX",
  "key16": "5vZ8X6koypwvbzJ9Y7VcLFW2yNoAGdUQoYKH3ShyV7ofxaF96VUdXP1oKcKYT9N8LiLeSzR8MSgTZHqXF3NDV37R",
  "key17": "btJgeeuJJwNaY6RmKWv8WmyCN8RV8zjDP7Cnjz2H8gjhmPFkR8Q6ZE9V6VsKre8TUfhZ6ryzuJfqkxyNVagH1nu",
  "key18": "2SxUmyScEP18zUJiPJyF65vPmmjrTNpou512t9SQaZNQVLnhCBD24fBrjm7uyYL1bZavLDmdJEde2s6SSMNfuhNq",
  "key19": "3Q6h6yRvkEaysaqZiwke77kACvJRuPWRMhnCgoHcrp4MC3TaJFKxsryyPmfHsnLCT5TJR6iZZWP9vqjF7rGe8C8p",
  "key20": "3i3B4mRuMzKYCNUDWx7njmPm1wmG9221QxbQfysNuveDrMGmmMuNNasmu8JSWhDC3tuNtGUPrJcoTcSJ1w38hNx8",
  "key21": "4i1iCqqBCY7HA2xba1HKUF3Gp7SEmGEnQp9PVsGbaDaAy9BWxvPzayCmTiCpqYyAU2kRQuQWC7hFoKML7mZbqPuU",
  "key22": "ZhtqQeAbp2Mpse2FMigDnkKhC5WPKQ31jQLCBgLoHA9sogf3x59ZGhDWVjZHmtmxxm3qF4UTLD9wTLV2nwDppfB",
  "key23": "3Qg9bLqbuqZaMQWCXowA4qZiMA3qjxYZZrY54oX3rv7SRRrs1MQ5zF4UqPVjPKk8LtBBFTEa5i5rbeXAEa7CpCN",
  "key24": "7SQQARDefhAa35frJ3AFcRfz29awceim1Fa2Ub8JcsJFGUG3FE6CGZFy7evAdG4upNrsVWqokg1wxusxLbUZnLJ",
  "key25": "3tmpqeb9GmomvfP7J6jTv738JQHj3Vk7U9bAVu8fDZ5SLLH1D8trRAqjyxVeUWRyFVaTyJgQiUhSqcPrQEWqHr2J",
  "key26": "3NU2BZVMHKH5sHLGEyYtfGnTeb9xmwtRmFxfNkAyjS63znoYukKUiA1FqdqLeN5HzKUr4ju4E2P1mdNbvcEVaS4o",
  "key27": "3iAHUSXAGB1nHB3YASx4bpsF4SCqqZwjwP8FHy45k38gdBttk3PoSbMas26fxwhoCGznb8nGeTKgFUgJ9fyBjPYH",
  "key28": "5KF1UkyoyKcnBPABcQfVRCJAscWB24ENwJ6r3YLodKrVp1rVekeWF43SaJyJnVktCWvgJdVfseB5jU5wQaogGUbe",
  "key29": "5tphwyxLPofWaSGMYvc1QLApFAiMRNaqh5SgEN9BLXqoZk2MKp4ymWhe2GkzHUxNUR6ygaoqUxgkDztouReC2YMV",
  "key30": "53ZQJTF8Pi1wo3QwXdeFZo5cpE1DT64QuUbq2tY7CRsbGu9peDMmDeyymY8KxZfWsdtsLKN8Vxy5r1kbrExxVtrE",
  "key31": "3711WfmHpWuzUTqsDYUQtWZXM3BDoD2CoUaQUnbsagohoy6n71zXMWSKExp7WF5sYkNm4Gi3AhYQWJ96SsVPZYv2",
  "key32": "5dWF5ZEcz1hW7b8gJBVPyvqnPo2eoTAg4zHMXJVKLnH4YXksznGv4j3tAKdmYzkeo43voWhNLisuy8BYbNqMBg2m"
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
