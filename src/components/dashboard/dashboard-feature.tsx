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
    "2cWacVakPBTwZGop3unz1Cx4JcCxW12iQq2BAKJQqaRo2ZusHdNgwBnC92gEmFCceQECRZbsiiRSCseSXnuVx5AX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v18HQ7vzfyo7LtprigBoRHrzyyPzxGDF9hNQZcpNf4hRhxtuWUy6TH1aoJ8qpKWVVXZARrxaRDeYzHAVo4kPZq1",
  "key1": "3rARBthGZWmwjBwGYevtBttz4nPC3LdtRxa4HrqXGR4Q1z3zQytZ3N1EwfhLPoCwiQ2Ax8E1fejEtgfAQNvFnMbp",
  "key2": "4oGku37XD7XgduuKrrqRUSGadNS38ufiaS7rh3BVhGyXCpBqAawvNoRyVLTk7e3bdHRGRCiGz3iSfyaSK9pRL1YF",
  "key3": "5QcxLCCZuK7LoUHbwt1vxa5e3MUcHoHio9Hnm435npmZNET6zkZuXr33ih4jgsnLo9cCVBmDixY8QZYa5Jb5cgAK",
  "key4": "4wp91ka5Kq3kJHMmAa14cur9BxCJNBmh5NL2LWe9BiBMKt7JACt8U5UxnZZKKzPKVUGFuUSvGEfeZ6ftzmECjxSP",
  "key5": "4z7jmns1zJ6DBeyoahAgNM4BdiEyAfmQ7ZWpzhprqRN48B1VNGfrMHiT5hZRQDZMkDEgNYTkHe7RaVkyzpVGHVrV",
  "key6": "2F8dRf54UG9uoMQo99pgLajdCBY9WDzL9bLkqNfEvfV4kwXdYC9z6c4FQmPoKXkKb2oE5ZW9md9osKi6YNepGbBM",
  "key7": "5oacfjkmKFtTySFtkTPTX54xjR6k8qSk61RkoW7QdLai3z2HxaaLCsEJVscj1mnyAeTfB82ta5iEPkGeLEryvSfp",
  "key8": "3TGoDBqW1MC6vYyLi5dapHomALRWpsGaZYHqDGaZABMCErrhpAKKF3p83aSmukD7eo6i6CR9XD78RHg4d8DeXyhF",
  "key9": "4eMFtCKdNT81Lpypm1hXXgycbiBUhJGKZ5SaMYZA9Sd3U1NSSRd5sJS4ybzqwPY5mmfJcDPkH2QvNzEPSKv1E4uF",
  "key10": "3SRzvMg7qkAziJjMMFEXNqw3KxWKR7rZz6d4ynooATRkRM7RgLgJVuQUxj7xZyimWbnk7mZKaS8Nf7vHtAAVwKgm",
  "key11": "2XbegSWdjDtiVEXxwAvihi6Rhu7mKDMJzBmW7iJNeyzMK7wECKNJkkQDe9T8VXsNenehdwpXA1v7akwZfDn9qk56",
  "key12": "46tSzqPvTQXsdj4t38DFC4ZgQeKUuZsbNLfiBGcqf7RbNPDSdSrjukypRtXv6pkW9xKoy5otaTKPYRpVjEAV9g5a",
  "key13": "iZbuL6eoEXh8PmRXHmVXGpS6L4q8GA9h7U6rcwYcAr1k1Pr9PrE1LSbkjg3394MPjgFWGrfYvRM7jLmbioa8ZTB",
  "key14": "66F2DSywopLSYwdJAbB3fTJvf2wtxvEnxqxhjCvTyZ7tg4njJGiXXcxBW2KTFZzucBeCmyPrGKPdrnSUJs7gmRxp",
  "key15": "5MNaGHcRDQE8J7HZVaqicpNJ6ixLRjtKAXEPM4igCgC4ipFD9BTaNKaRpzVfDkvzmxsuRXsM8HCJDU8fKA5N6M55",
  "key16": "3yfwNhF9LDVHYtQaSNUKKiF7xzZh1Q8btKLv56hHVDMWPym2fprAwxHTtjFGTdCR7uptQAJR9u53xmd81XyCVES",
  "key17": "2CytrGHgsKjrDfkueWg6FY2RMu68vhd6cDr1vCKShuVxkSYaeaRmDuoDb3x8hG6WduUaWQhEvyWuycGZ4CT2iJg4",
  "key18": "4xLjTeWYHu77Mj8hB2Xq2xV9Mf46CjxstowTDoh6uMW5Yt1F1cVMi74VWw1t447ZMbKbTSqUrn3fqNkn8gar1QCM",
  "key19": "4LfMUXoeYu64oxAuSJiPAec2VHk76FpnHSpWDfDAk75zZjFbqvXwioAozxwkmi5ephUYTVzVh4R96H7V4Bn9oh67",
  "key20": "4Tkra73oomUZjJVx53xsoXxdRWkpPHVJ5AA3Rippw7Nf2qJNdM2LF6Nb9Ld495AB5K5ZssGKmE9iHZt3F575LT69",
  "key21": "5Lzjwn1pkeU6nCbJEXYNV6UofGTCpH2VFK2L6Y4cLLVcogqkrHg2Bttdu9UE2QQz6ASCaExM9DtNtkJJU9f2j5tb",
  "key22": "3AfYQhAQHhcW1gv5fmehRGEiZJhSwriS7C3JHwaD3S9BG6ViKR5FgzmcnyKFys714jsU5CUmLosgP7jgosDzSoVt",
  "key23": "3kHqSvanhy6r9MnU9cAx5KW7g9TUjHQFeX2THC1UzJB8oimHy4KBMfdtfDyo9BdCMJxuYq7RQESxdAq3vYBKUcnc",
  "key24": "Jz6i632R8zdCc6LXQQX1VjrhJFS9eppVcrcJTXWzdkmnQVAtMCbGAbpK4TkGrNanaxKRLp6sQVnv4krWWgeYZtE",
  "key25": "3efsP52ibvrB7hMYimawY5PdZbQpxSgnPjrUokvh4VteYKzst89soHDhwKAetdtGxHRRKuFE512YhnRoPpBoKQFL",
  "key26": "5tdM8L3ptfBYUYCGgJFxdy98ZRGS1KCn8XaszHyaN5cpkiTGy2JcWpysXnNfD2LCxf1drSzo7j1FJF4NBxThRvxg",
  "key27": "53xxX1moDb1p84j4PzwNosb9hPXLSx1GeAKQj7C5cGMNbubRDVV71xZQQ3gyF9b4wnmG7uiu1Y3jk7dbYmswFs5p",
  "key28": "59DrXnboDEm7WmQ47vB62NBSqWS1KgFgPF1Ji5fxV9zEmDg2GgiuJxXDqeuFxm6bf6i3nhA7EWthwSpaotrYn7Qz",
  "key29": "U2s4dZiUN47Ls5SSYu5xZeebnMwHAoJBhTqid871yqZA44z8heoYZLvMS7h9qPs5CdWZbSr7e5fSvqm3KGsiB6B",
  "key30": "5RFFMqkvkZ8mwK1gNoTzbSy6ADMtPaaHBtqpiDiYuGAkaRzB3zcUfh4jGn1V4AN7keYVwgL5DBtR7tMQZ5jotvzt",
  "key31": "3acwoXFX7TQnmSnPMPMqptpouXKpQmgnirLhZakzv2xPz3LZ7sHQxZiUqFuS1GbMCMXrcr4hY3mChHW5kAgqBnEk",
  "key32": "2yJLAscVqnZieYHNhBeFazz6uStxLV23fvvv8moD7Xpw38iFbQDEx9RxKiMB5cZU5kxbw4NzFoKoWPjLfoBJGwvV",
  "key33": "5biwyN6WWkHs5kmN5up6X6JY4ap3VhJu95bcsbQYcpDrTYzz3Umu4EHs9S6bcMAYx63Bn7GbvtGGCEZ94DQoj4cq",
  "key34": "2W8T4CxKQvwHoNrttAFs69Njhib6K21teNV2Ab4gH87Map7ha9HSxwhUX4KQnCLZhYmHZ1eQSdtzwXucMKScvp7X",
  "key35": "5giEGJFXwjiThCMkDaz9X9Dz9iD9d1hC2TxTa6mbn2SFgRXMbiBk1tkSDTzgpuLokJ4YbbikHn8W8W3kHgmcuCRp",
  "key36": "5jyJ5AaZkeS1iT2CUEzursBxsFPUwhuUh14hmtJKE75XgNLHvd3deipsBnZkfg7t1nXwe5zAyw1ayqG7aLZUm3i2",
  "key37": "FNSSfdDzP7dwMCxUpo5UhR3eNSGX9iqbNBj3k2kC7DqrCXUjZb2yXBVRpy2vPYBty3aYAabbbN9xnKWzGFBsJq7",
  "key38": "4oHthg7UETuKH9ofhCbypWR1WSj3yhFiYBN4Hrzp7CThp1mTHHhgQmHcpYBGW1bK4f4SUSQAqXZdEcuXtnso5R9t",
  "key39": "BRVLeKoL1gQK9wGaRdMBgeSMeN3VoQdqtwnmRyJmqc6YgsXjiDPP1UvUb4iYg2MhtnhwPW8YJtrjM1y5AaqVtCn",
  "key40": "5GGYJ3gB22oT5pK2BdJrLtaHwTz2nCjCBxCrm5PGrzcT97Hb3qSEQEd9XrPEmNe55hQoa4G4UqW9rcLdgt3m93w7",
  "key41": "h8SsumBLN4JzwWFn7uK69tVnmvaPpdkjzGYAq5sRLuVxgSC345PfBCfbDEVqyAjF1XH5E6p2Qgy2Qhn3yhMjKYg"
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
