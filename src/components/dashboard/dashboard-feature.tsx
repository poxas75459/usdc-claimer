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
    "4ofhZX5dBJRMkKyLEcJRto9ystceDVmg8BWRJ7DPZmCkuC4td3rrmSLuDxERa6SxTnU6mok25ZyeD6oqtvZ1kSGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zwMZfrCZeCt1LyVNQXk65iQL1R3LxUf22qzEsM7ZxZpX8hJbtjy9ycKVLAJp9MWHLpFNxv4nvfh3FBVJbBMaie",
  "key1": "65j2BKEmFFAAn81vtxMf1pNRsa6uUtp2hW1ZVZUNW6FSncpc56Gi75MsstxmmDfWzNU4DC2VS9Hpcifiq8v6Zzty",
  "key2": "3we7i1bHGmNKunNzmgeoDRvTwEM8Nko5WWpRrwERC7keTXM7zG6DU6rCUZJNBCNcAKeaakFVeqKtyiF6coVuDUmc",
  "key3": "2sW3jJLpxofK75PTvW5nCHHRDqx5yD418kpjKdgFnhmCFZ1Tf6fhfnpbhR9HCoUUpYtcRgbBATfw2Zt4sjyxeukx",
  "key4": "3zzp35eaN8v3vFJShHw7kNLPdgjHCX8LXBpr6E4UdMxPkrmETCPbeAUFvGSV4yaED1shF5mXkcMigvmWaeNW6Dea",
  "key5": "2LoLwMzedTcDDJ2ugj6qsqvdBp1c5xmZRsPxJzDH5NdPK4rq5UbJrDqU9TLidjGnUDkAiDUo5wYEnwVmfst2p1Mk",
  "key6": "5ZxmvKPxZT86pgdRhWUZfTZMtE5nJNkft2wahsmVauXmsSJDQZqsxXmiLrYDYVwnJBSXzguiQGngTfa5ucJkcZDr",
  "key7": "5CweXc3FHnsnNYftrMjNY4ovzwq3S4ejiM4VP5HJ32ZNMNiCtjeBaQn5ms3iQhbZXYzHEYZwpr6AVPzeKG3W2J3",
  "key8": "47Gg8eTV6zjqiWbJAdfMtx6Wy55iYW6ZV9MVd1MJEL33obG1S2yVv5CgnUm7ReosbmdBwxwid5j5VuskHAhuSfi5",
  "key9": "5VErZx74Ln7dbtRBmtK9YvZLYnFiGmoB4JUQ7gTuPHofX8LTCR7Wfsh1Mm8hiuZaqCk6ZVhqfHzk1kw7R96mRWhi",
  "key10": "kfZxUcVuSeqStqsKJXtiijfzLnPyGSaHppyEUG72GPQRuWYB8Vvzd59JNWacbi9khqRfZWhdPqutprkgn9ELMig",
  "key11": "4DXeTSAosdwXbkDrT6bnAM6xK1qizs6TNJ6CjagxqDLLk6NC89Q84y8Ln2BzvH6tHvTiV9LaU28RAsMwcUZofDg3",
  "key12": "5jM5SeEBcWkUSPUhAL2EVhbcntJgewoUHivNyB37CmtNCpzo6bRHtVwP741QRyUzNqqFeyxkFnG3njbp3P6UwmMR",
  "key13": "35J8MapSQd4v5iUeA7rhX9RYiM4uvWYwxsCGsMi87FxVktJCbDYDkz6JKBd3aEduseGLWk8jGbCKqfHqMd8uF9xy",
  "key14": "3H6ABGR8UGrvAhdh2SQSTorYPw77XmoMYWbiDwv7PPAVBzhFnqTaiUZJ9pEurRMcfwyteh2jCu7AH1kxAaTJA8SS",
  "key15": "vY8enuNP2fQKSoLNtBpcCSGtq42ZBeNDsvrpsyuHaoUKgQcUxTRHF9V5k712MtqJUc2mnsxqkMoWCPgRwzwyGfT",
  "key16": "bDtahgT9aqcVq3bQcwUTwdVMdTkNyw6xgkw2ym7ycPm7cTsYhNaL6hwPJLd24WyjspRokRQ4pF8DBHDvV7Q7Nbc",
  "key17": "5hXcB8MHJz1AVh8pmPsNXhMbp93c18hALPdcFkzmE9KFuhi9Dsmff2brtxJPyBWnyDg3MGNsNY2bUZPbeisEDqVX",
  "key18": "3uqb8YvWK8vjH9SRCiWP3w1cmuXyemjhz3uBjDMS7VTsuq4eCNWxPsggAPSTx5z8opq7PZMjxbb8aYf3QCFB12ov",
  "key19": "2fcLmPvpfkb7EtW6ATnEKXiyonoEPW3JH9XMCMHcGXEbLK236M7sTKvrv1AeLyDyvtqzDLGBohurkh6U946x5ko2",
  "key20": "xNHkGWwBK1jpc4SQgGBZBZQ3wC8PwFKiVyZoFt8FBRRTkSerMGiJ3q3NhqtamCX4uAurX3qPGs91t6Cx419etcB",
  "key21": "3df9GaF1yaidE2rc4yVG8bw68c9CSLwtEQLmU4PH7wsw7rszAkY287pMaph4Msy9fRnFeBFTE8KHz4uupsEbVwwk",
  "key22": "3v1KsMMVX1mSzR61gme49vEDCGWMUYen1cUB8eLspAFwQzgi9GK87LLJGPKq1mCJNuj1wgHWXTRYadTTWUSVsTU4",
  "key23": "4tSRNDy18GZYw4Hm4u89wsXYk9MdMSvCzD2BSevev6oeCyRb6ciijeaYtKsVF9pJ3bkPvkvdnrpkme4TDEafqtdX",
  "key24": "5mCMBQSMqiwbF26XP8agU3fir6f4w1rCdhHBSbSDrFDEMY1qJYwPejATVCcYccawgKduMbxj4AE4dLHAbYsrvoGN",
  "key25": "3UsEqbfJCgPQTWZmirDH167Vz9C4ajtN45zdyT28B1FHuMUJYjSVEXuG6SgLBr8JtM2seNU1bqAK3SghZ2WANxz3",
  "key26": "5EKUtue8pFw5F6jvLeNiDLke7PyC3VTj9UTXcE57a3vBBcvQ6X4TD6C5cQE7H6vqNxd5yYVEG9SxW9fYZJDgkJGa",
  "key27": "2vPcWkrK4PrKY9rsStRQYLuRZ3XRfVrdB7bDFieYNUSoXcNUVeGRn1FvgiQFu5HjmBu3Zi1iJAvr8nNGsPVSvFJC",
  "key28": "2gsi5Qg7Nvzt81sksFdQrCheMinxB6KWXZ74pUesKvDiHt6riMZbBdT5F3ABeKs7JbfQ49RTohgsWbaBtk89pWMn",
  "key29": "2hk92qDDYC6rBykuhmwBWPzc4xB3q1YSxHZRhuXBtjLo1ospY62vnHRebE7QbaUuecjrgz6RktHGgR1f5g44AY3e",
  "key30": "5HB813UjHMd2XJy7W9AHoFE2RWgzCq11yiQ8UaQ71bbeuH2WhZ3HsXrDhxfwPKkFv2jNYp8fiCKQyxdyzkEvNdXv",
  "key31": "4RHcDPfLfFxeVyiRZ8Lkr1TxibpxcLVEY7BdhgifSqqiR7ASw73aaWuQrStpiX9oYLd9R4KMzwe67eNY2bjabkwF",
  "key32": "GwYWA9KJNBqvq3xK3vnnckeVGAYVc7vfmhaaryHcVQFUB2ih3MD7g7NUZp8h1K2TAAqWACC19bHxLQe6q8Rmif8",
  "key33": "jy6ZWGEJjhY1HAKGx59Z5Nv8aL3wpbnRtUDvzyt5GcxxHqoESjdL6wZxp2w6gyQwXAPBaqN9UaVRirNJgPbQ5Rq",
  "key34": "38kFEszCAyx5Dio9aGarK23VaLXPSZHrNgEDmNNdNHeyB1DgxXJ2S2ZAwkdYowgQrz7VESP155q42DnYKQyW8bzw",
  "key35": "imizhJCYtDvPv8faRdozqow9M2mqzzuoqjbKiEeMZpMZDYhhkTcpdw6t9M3MixRcDkpTnwk2cB6JkExP5YYwLUp",
  "key36": "57eBFSFkFLowqEqfPNwem4NERYDHB1qrGq6G8Pzi6FipsHun2qnsFyhgT2KaRNT5ZdQZBeyNUGExVobv3aHm2hB",
  "key37": "2hLDZUv4XoTk5q4ojqjkZnQnNsWfBVdwRsRiuU3Z5quDc3WszDDXdYzt6TGAFjq4Kr9pqz9hAQLBtuuQYZTCBRHV",
  "key38": "3eYZ8hAD4bCs15VTK7KYXSPVArdCC7Va64J87HGVsDqVT1xMp4V7TMvVPBPooYuutJwQhRXMZSNMyHE6gWtgEiAR",
  "key39": "uKcGpMYFwnaZAXhTu25UpikDjzGqtT8873GJXxyfLqskaw1cQCjAkRJq3JcVXEBfrr3qCZ1YgceVJCfy5n7mjK9",
  "key40": "57JdkNpCAPbUYNV9wjftaTgnFptL2W4QginTBuMZNTDqUqM3hYEXTsKuWeQW8qSLQTsMrLjbbHWKSuEbFQwsD619",
  "key41": "5LbRvwr2nHbMcKuvJX8xfwZh4J5W7cEgakSimKNEuC9NuHtcZLh4Fv9dup57yiRrrWYQ779ENLKBf4Q7BSmkMukV",
  "key42": "25mQJaM2twrRn6zp7XVATXTRJVPLVa7DaLA2YCmHKAnnfVGYHvCrA1nGjAqiTsseiCfvZp4yxXJfMmViuEX12Exv",
  "key43": "NuHCPt9sHZ873Z9YtueVCAHngraSiNJh3kW5r2iivsLGAY3QHwXw9D2gA1Nur5vYpdejNFtsuxdv6y83qRgy2Gd",
  "key44": "4ynBqgugwwyjpRY7YjLJ6bmHsnsL7xPmYdu8oiQKWdgU1u4v9E8vWZY5AZQRLUNAMeqPse89AzHaZME2DhKKwQB9",
  "key45": "219BvxMmENbjPNpFz8dJnFY2SxkmjcSM9umu2HvgJXm72kyhdzu1EL2syWrcdyESnMk7HMJi13yG7jfYrnYi7eV9",
  "key46": "2UYZu9nm6SJAbhvL1XT8iaBrztDjewUHPBW81LbQgHohYpMTwZHkfeTvP5BEMduGtN88ucd9pNWAv7HmLTUxgKsC",
  "key47": "5G1McnSEKEvSiaNTctYLNeyd5ZJAtu3tij8B88UxG325Lp1tYjw5gv56hJTU13w1R8bnDWufxEVjuscQMsypHtL9"
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
