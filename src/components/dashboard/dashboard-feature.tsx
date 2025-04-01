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
    "5zv1qzyJQREKokfmR1xHtKeCkiYEtJSaT4qZubcw2v5Nc9CRgumJp9nesjpt9Zr8EgLbniKML7jhXcADUFXsZn4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2si1yXcMwMDvKkUQuvvUDymy2gc24SN7AsAbpyD4XidrFU98f21TqwbvE3VHe3XHNxStwVzmrSPGohXeiTkzqSqr",
  "key1": "38pABASSJKGkqzLThCpDsCHfd2JM99u3FmNcGMcJQheSto9d45URUXFKTdFAqUpdr15hyPaPRvGmySEkDW69pf4Z",
  "key2": "56tzYC9gVaZYU2x1VDRVdmJbZ83NZC7WEVcjVXNEZQWXgE7uwfa5a414QTDwxFPoDWV5iajdpwoUEjaeeKrjpaLG",
  "key3": "28nijsba12B8wGJVWbhtSfWnzUoXkEkSbhvUJMRtbpknaZ1Pytgex7vqye5NDPpU8YrnpE6BHpyYhgocGN9NwarT",
  "key4": "5ytmHAt8DjhUzYgwB3oq2PXgyuveqztHDTquSPGhRsHCbhLzLzkmU3RAmMeGhia6neaQvpCqTtUBGjFzyyG7Xm3n",
  "key5": "4VnJTorh3M3BJGyMesng35Rn6oZbzhruAoZ1i1mr1ZZgLiva4yUg7nXi8SPZ1wtfBcg7JAjEhRZYstmYW2YJDxWg",
  "key6": "2HMBb8V9jB91xBjQwZ22jybjxU8Fe2XJmnX1cLE2aqBFzJiwd5rtzkQM2k7jUk7Eot8N6K7kiqp9YYykETGBvZE7",
  "key7": "2iv5gdwhK1P5XiVhRapRECDV3Jjvqwvy9kPUJiP8VqokGemHErHtK5EJM5fa1useRj24zUiXi8FZVxScQKcVUjri",
  "key8": "3Ty4oG8kmR2gqDjVNAE4F6aXaDQs4zwny6J8ey6DzxuKbGuPvv8HhLR4kX2wyVDsfRpDqyUwv5oqswjsdDUgcu6v",
  "key9": "4xu2UFmzePLr1PvngEA3HGw1VqEK51vzF5GV9czhZC1jaA8PbxzqafVTwj8Uexvwwdt5kR4U5tUsCNMuNoJ2EEfv",
  "key10": "4VCGeK21QZbUWPcsuiXEGz9CWwDLqs8G9wWEsvhHSzyBebGc8UoWVLzqcZQfsDVbBUEpikaV9gzsQqmfDfbbv1Qu",
  "key11": "65EmfcD9xbPFuh3uFk1X6z3Ffc3mZCx5W7jdKLDp6gdipAheA7kjri6hWCcWMTkh3vuQ63SCStxiHacVyCbBodZf",
  "key12": "42B2zxodo5z4TWrU8ASX8X9tP6ywSJvL3oWeLufnx4X2USK77NtFvvpfNUDQTx3YVDq2QneBBQz39WvUnqfNmFm8",
  "key13": "4bJi5ZjLWFPQP1NUddB3FYRFpEd82gjLFp3ov3jbTPAn6J8S4cgGrgxdZzccPV9B8c8k3qWMtuigMPCNovGzx8n1",
  "key14": "5W7abrNLSFhetVRSzR6aMm6EDMYL2ykjqi6KGqczD2ZCg8FoorWHRFpkSyEKvY5vs9QNoT7fUA3MUd5DACPF8fdj",
  "key15": "2cpmmas6QHDqssMss3cfUFcueKN7WNhiPFHiFBjyGAV6SbEMnBprgc3rjSjS523L4Dt24VgFxd5Yqd3fxgGVMcd9",
  "key16": "3t1wNNwZsvqjLjRPhDcvRChRTqsDrjezDhh3gXk1HTvouMeeZzdLsM13w6noYy2qHWBfMbJt24q6AvM81m83Kifm",
  "key17": "GpwVvGg6xFThJicDXSKaXFbZXAc7MaYWCEt1FQKP7jfWurav21cdUBB1QGCXHEEyhdSnm2dd1iT31DHBUKBb3Ev",
  "key18": "5QF7xRBoxaPQtXughTwcKxtVxvdvwFVtUppHiQ1UcxXrhWE8335fEUwwkKyMvN4xQn5cFpwd1Ly4HkKmxn4rqPct",
  "key19": "5RsPaS3zenpB6Dh7SKHXH5eXHVSb8BrRUAFQKbtCAd6FKTa6dkG2WfBDpggUNM4ktAa2ZgeAjSs9T6aJPj9PJi2K",
  "key20": "3RueiJJGETsUfhZPXp7VD2FxYG1pnuHQwWySVoW6sea5Cj55szfwsTVCUqaH6NPF9K28E3Q2qHdU1XL2UyadrCr",
  "key21": "56rpHTAdcxmY6LTJWCFDjHJbMWPZXAvKPoeW3B5bkKfmXpjNmwWRRATg9v9JDyjsAmsDbj3X355hTqmikYdeGS8P",
  "key22": "wgyMbXg8b9kkgjVFDtJhdgw6gBFPzqimrXZqD6YFYyDjCH6hLsYGNqpxUx8B31im28xAeLjQo8zSbW3h23ZjaqB",
  "key23": "47MENkuzuxCZtPFoKRidvauUWFZqqygb6nyPAqjeWbx2GeSifhXcvBVMLNpDjgyCzhD7VdeJn1YX1jKytwyLLwV1",
  "key24": "2BuDupHDZ6YJrTFPycCrn3azZ58aigUwjmdqEyD3z7TgViDN6dR4rLDbkzDNY4V2EKpsFLn79TmNperVaCU1dyWB",
  "key25": "6551WPPeGHRM1xUCX78Bx1y7tyPP1LAsqwFL28fnMqju5QSDhE3hbtk9jSissVoxDMLZSCkJcRoSYeSmKtV3ueXT",
  "key26": "3Bz6FcMPzJ4oQshzcg2rV7ccTCTHefmowgkUTH3CVrBKdF1P32ffhiWb6Bzz3zKxg4GMytMmX6Edq8DLGCuKh6XN",
  "key27": "5tHiJTiRwBaHBrrLiaU2V3gqDeQtjs5Xn9GrNskmXdZYgNxcFKnWxX24tqPDaZJqmM5myL1ijtrCqyCz5DqQLPCo",
  "key28": "5jdo1mABoSHmBqK1eCApiAxx5j7czMECm2yjYbQh42Y2soE2AbAc88pNkhcahUxj4TinwB12GZcDTVYBNBwEUs8H",
  "key29": "5hEQc3f1CgJVLsJb8oRqT9pbhNKoQQbhNhh14EbjY2uvhkmxhM4SUct4pTXsf3wqd9Tq9rT5iq366BzynGMykudx",
  "key30": "33f4gjjqZm5bD4j2y4u7cJ4rFPNGFq7fFWFqsv68A5hr3CfUeJx7DtHreC1VU5zSWk2SiNfnR44SN1cCNr4m6uUe",
  "key31": "1FqWZRarEz833pC88tDErToFQPYoFCh6PhdbemfwLhEqSBRQxFUZ8MMjApW2iQfmPpyZ4MKYusxLextq6V5iaGc",
  "key32": "4NhdmUt9NtyWkyvdgHyVcoFVHptzyTXi3wygeCiMw3HvoRH286NJgovJPcgLeQyYvb2Dm33dy9SndnMiszL54TWu",
  "key33": "67cjmeY8RhYdXDtsFobMqYW1fbnX2hwV9XuicaNSGSKzdhoDqhcxcmPxDsumm2g7oLTz7aFtBDqd3H5UdakFRzRF",
  "key34": "4DrYxJT29bCAFdsk5xkkbYBcDNzGeGvNSakVfRVkwoyx5JFh6CFxrjAAfVhRGJmQt4hA1caVst42bPTg1M9xbw4u",
  "key35": "52NC6MGrwMB45udaVD4BNEvKEohu62ruc9rs3wcsM9JH9AyKy8mtZEzQ2pyegScUmVuTkCK92t827QYcKJsz3WKY",
  "key36": "HW6Z4ivvdFheNoqfDnoZeTv3118uXFm2SbMbdew9Ythwtw7D85qzXBcm2RjeSrwdZmSD8THiQjzhwnwihrUCxR8",
  "key37": "51Qx56noX8NzHJr6BFEHyPnzieNb2wd78uzFgXffmeM5s1stTZSpybHRM9G4KsP3CkKdKyEnXojgtGXYpUusxdWF",
  "key38": "pkm1vDJB6nqScAns4DjrrKPZPeRwj2ctvSmNTKmeyuRYVP4JT5RmLKWQef1jCWUfZj2NaJDcBv7ySPwAX4C1Dwo",
  "key39": "43x7sNXC9NW1aVpNsqVAqR9nTr5modaX8KXPSaozq85gcXrUnmggTJZ8hQYfdbjV1MxZEC7T8XxqxpCAcz7Uo2eh",
  "key40": "4kWDSANJVQaWzfU2z443GyLqx9ahyYHpj17Q5xXQ8kb1oqH7mEd6kJTRPy3uiZJqunn8HSJu9f6aiYdpUGoictJL",
  "key41": "4BxPjPBXbUekUzFFirdB1GP3s9Zx5ZkVrvNZVc7Rk1He61aycNn1xJKd567NQwcFFWiKr68VarR44HnqHRFiz89L",
  "key42": "3spBLBmpkBSBfW14iNZ8aU7WaGk3WtsiHmPvpLD3rDGKh5Vh36Q7DGwomh6kFhViduT7gqXGXFFPPSwAQfRXUA62",
  "key43": "5Gvu7Ge3Q8s2q7vJRac3YRsw1astYzyenxrvBo7uRn4tH834STzVDpyzuf3wZrBEy3vea4cyb6fH89w8RcHy11yv",
  "key44": "24x4rDW95dNsNjHskcNCo3Z9ENLjJaH2NyAXmLGAmWwYDEm5yW8Rtbs9wmsaZECwjiLehEJgVU3a8uiLNgCySXWg",
  "key45": "5quNsLD2h1cqAGXNTxDXavGNGd4vc1uoLi44W2iTNy5aWeKQYDcz3vM6Uainn5GrG8LE76RT8Dek7oi1bXUKM2pd",
  "key46": "4Nr3j2S3rHXYZ6VX8JPxR9un3ZEJJY8wA5imPHue4BP9GWg1cmwgavmdb6ucQPYkv1xa3gsYVFzsQUg4wksMpXkC"
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
