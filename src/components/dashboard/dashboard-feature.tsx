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
    "H7SnSuBEJECMgBU6AZ4FRnSJ5fp4oDXRpPg8fjDvhxcz35NMkSWgRizeScf7ZpSP2EfNENAuYu2qmGSjNSgsqtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QXeyETkWTQvPLVi85ky1qqMywPjLpjW2Lm5seZAJ36c9Rsgi2TadWBF51yYzm5gxrrpFkP1T8SYTAK4eSJyqwJJ",
  "key1": "5DJoJtnmB17Cv6a7gLzB5MibWWvWXt3tj4BnJDQ3RxM4gVfKB1NPx4h1mJjJMz9r5yRSUCdXvrwAZVwHCujR4Yai",
  "key2": "27AjprvZxFm8NPYPX5VUnEonnG8kfQsf9XB32FnxYJbasrnACCywrUGxj7DZvZKzSeADrBCKsDrQ3hAmDEupzJyM",
  "key3": "MaKzT89JVwBE1eHqLBYwzv3B4dgtj6RDS7vAjZNdJw4Gr22ZDScj7ag8wi2tzyPxJMpWkj2oFEUogz1jLgyaJEj",
  "key4": "41E63kfuju2PDdgPxMEUHMfB6jKQbK75LmGQ9P6MRNgzfRzSsa6kxn2eRreixKLN7nbL6NjHZXqHsBeGTbzySurZ",
  "key5": "4451sRa1mfzsmYep8pEZwbwCpb8CShwZiPe5fLjNVJ46YD5svGpYhnoET5bd9Jeygr5Q9JCdtZV3CEGQdaQb9qSZ",
  "key6": "3mfJhCQ1tgbZeReNm6jjzZFKnFmDTNBWNoWtBfFoZHoaGUdR56Kqjr2mKrTbQJMVCqJ6euuvHs3EcbWNT2K6TzWF",
  "key7": "4RyXdpku9hfciDRV8Bns4F1d9ujCCAfmbPuZQk2cUdWmeBPVq259jb1rPhncqVae7Dj1sheBohaU9obFiD73KELc",
  "key8": "51dvWCztGyi33iVNjDWpwBirBD4hPeJTjc7znLGAPNFnqcnwBy9adoX6DMEzaxxMJ27uP4Z6wfovkv8X1jrDMdUi",
  "key9": "3Q589WCuF665htSNrtj81kptXffe615hEParCEeRnuZ8kj8Kf1hParHei7jVDztWUdSRJBz1wd3RRmweeGUKk4qS",
  "key10": "5Jm2vUt4UzhJj5BnVs9HrYqN3msn281AuJAduCFvzAcDVzQQ4SqsqevE9JhgkFzEUbJbeARZH5fBAdHGPecK6KJj",
  "key11": "5UorCxovUPGgTvswKRDdUXqSA8eyLmWGUEiSRvirLcgRkoajMrRCPpByPsq4PYiJc1wT7M14ytU8X1oVCxwHUYn9",
  "key12": "boMytv3ZeuGvmkoVuT35KDnUVbRfKekeJUsqd2skeQfvanDSMiByGcSxS3qFjP9SYjBD8yG7vdRr5Xq6zPiz5wK",
  "key13": "2n4yAkfxpRXHofpyxuyfVRLjQFGZKiYuFaDVgTEVTJGRZU9v19ww32JkfzhWDQTUf9DUeXQ8Bg5KHamfSrW3otHL",
  "key14": "2bgsvV2TRG73YFeKTv9Jr9kD25HKggskU3wsQ8QWgXFUaZgyCrbZTWhErm1tRx8SVJoN7kmDTxvNe7ND4ytGaks6",
  "key15": "2T5vAZvTGuxeBiBCLG2Kk6HXP1Tm1tXgrfnV2pa4NyBkZPSSanLdG9msiJtiH2mqchfCZsM2Yf9Pe7GzLSzvQVLX",
  "key16": "2FDVG5B1A3wD9j59gRjdP8i3xfsH5syXc1bw1qWsq6ft12rZBBFFBZyxsPNWHghxk9qADZ6uidhhSAUu5mX1fxnq",
  "key17": "3xCspfmExcVARJGGAnkCz65ATcMiZkhZiMDunyr33rF3qvTUJ7kK2zhMdrc2hBt8NQh82eiCFSoHgZqBuCKmhQTb",
  "key18": "4EzNUkMzU7pkcHvUEf8e2Vwe8FWAyFc3fv4fBSXWf6NyZCBza1CtHgg2WDkrEi3zwG8RsoiCDEZwU8AdW2cHpu4q",
  "key19": "pmNFpAppMWtqFpfKSPfvJDDnGGWDU9dYzfMPpYvba7itvp8AJAo6pVwnM13dpbhAE7EYxabRh6R7antUWFZqqb8",
  "key20": "4fB41ZvVCn6Y6M5yhmkGLBfBHcezSETUrmbjQPASsbM2zr7TYL2u6dH268yhiU1KeANYVpaDfqdud3yZCYQ42hW6",
  "key21": "3431TjqX8ZpNKs18VJmAdQXPxSdgLrrct3XJ6RX3VFKECDtcLuGmW24EJRSaHeRdrkwvcVz267NPvLPCd2GTc2Li",
  "key22": "D4XA6hG1cFcdNFPqK8ycwrLquRwD7VPaMX1CK6dwHgzYUcy44xGYbeSmXQPdyjdhRTsH2i9e9YG5NdgxdeWNd7K",
  "key23": "34beucGZjHhyCLCzyuv8QfveA4AoJyStfxLcHHDA8EVst3Ao2YnJKdYpJfQsM6e3Y6gmcmNe5PDmUpBwEumGwQsw",
  "key24": "2muWfypvs9fENPzv5Tfs9GVfSYSEdi76d1nBe91PvU1cqMsNKrdi1doeEtfxdhrDmk2J3TX9QEA6SmRVQgUvF6JW",
  "key25": "2gfNFdAuszZjB1pcgMykzckLFWE4CMuFLvY2VtXLihnwVbDG7CmebvPZDPgzyPqoGXXPs5FS9otNaTecbkCathrB",
  "key26": "4qS8PJZMnYdZHEdTE5kiZoqsagPXNzKbUJfeurEWJmCeUBYGHcA7oeNkAVwtdDMAFuZneZH25MPLGJDppGbp2vX7",
  "key27": "8RH9Eryft1HdMKReegGhqc9Nu3nMrmkRk8q8ibx7aLHMGS416nUK4aFdR5vCiJe7QZgzZCC3EkXAxA4k6zdxdoW",
  "key28": "5JkSeCvnEzepdz46qsMTaFss1YQEPikhFvz3bs5gMiYxj7ZAoihgvDCcLNdsonpBJyq1VqDTzB45gqKUfEPrfc3u",
  "key29": "3aH1B7PEXaGJpnjeiBi8eqDuhZUAsknAaMKYiVYgKdFfWhMdT6Pbtt9bscPs2MJnibQXePhWmqizf7Y4mKgvw4pX",
  "key30": "5H3s3BQRbiqBR2D2YEb7FoseExzzC67p8nnPdDTH1SE8TCjXmfNPi4H9duoyJpheQDr1shzhKmtnfX7W6qFVFjZ5",
  "key31": "4ZAra8TiwyPqgP5RNthVonDKpiD27uSwJSHa1NxCE5JBSZ9kuHmwSLpe7evoAZhoEVy7nS9oDumdpSzgTgiQtAHX",
  "key32": "5WhKmAfo91h7RhQHP2qyrrmRGKKsCZxmD5hztvatLRsrfctqLzRRP6EDKfd8f9ej4uzocZUoFhs2LRZKd5bvzU7j",
  "key33": "27kBS6T51YCFzXqZaXC9QwRqsy9Vp8V937BoZPTo1drA2m4vsSEiMvUPEp1zkjfexBXVHYKxWp5Uji9S5P8h5UHF",
  "key34": "cgQynrHP1rkUYGdiFtgoPJetxMkieivLPwS5cWmtqWAw3kJZjYcH7K8PZEKDiSMfg8yP9p5UApVywQiqFhkq4Lq",
  "key35": "5QvC31pKecCFemrzsBLWqubEyPPjDEthh16TdHTSmx6G4Mz95i47GfT4HU61WNgj47w7zVhHGcuqTBuiVdTD4QdS",
  "key36": "fCLN7wfTJktEdMYK5LP7cjBey7W8sP8BF9osoUUgzuZkheEDfYfHioAio6XWJKeSbFwxEEtBGHRCtbXCNwixXtS",
  "key37": "4a1tTTMXwS8w5rdMCNqcZeD7Ynh7eQnTCMneuYedtU1s5UDjpWwcRCx2cawrw1FYSUA2e6nsDeZZuMtjbfVxLCWD",
  "key38": "28WFTKrBzxhomDmnM6jmGM9NuodbdLk4PK3ixFp3E3rWNgShrhMUUMbSHE9LCJDbYcYoNKieAJxgRPMbFJJjiSq1",
  "key39": "3XNr78uHsCPGhgokxdURrFcaM2zHz3UL3xUTEXZdwNwA8dEN6F1zbN3BMb4M3q1zYSq1vo3B6dzgq27FZ7jddAmY",
  "key40": "4sXrKt5AeeSgmAhZ3wqzLHmdG28kn6dpv67QRmgN71rTqrhd7rn1VSXNFbAu6D8s9nezS4NpgE6U9AiGgFZ55ZMi"
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
