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
    "211yTyrYJRcb7n9ukTVhoN2DTQHsdgiZLT5zMKcZRHYFXEugQ99pfFpmvbS2jK4aLmWw62FTwh36AKhiiYoYP2hS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SksKAMWNbb2ydvGjZGqQZMbT8W3sEp338WHsHfD4SXbxVMGHFWJ4DwFJtB29ZkJMxHdNK5NxNkjiqbvsVDkMD9x",
  "key1": "37sWSvpeVEn7ZCKuoycActzf7vBAyBvusWu3buZGfWNry3wfomgaSLjGeEtkVu4UnY77reeKtxUQJweb4172QbdX",
  "key2": "5TkqkgH9Rx5Cd5PHU279tqe15D9FTgqdjNGxZFo7PSb7D3XZpfnz2gxDK1STzCatS7UPfbdu4nKP6V6fvWR8cmpQ",
  "key3": "2ndAUSH42ySUBbVT9MafLJXFJswpKQuRkTzZ9eysAfRdhNipDiwh2EazpxeRxqq49o1vkpjcMZsZRyJfULzSMNUs",
  "key4": "3t15it2txcq8VyZSEw9RseazTFoYWdWcbgvB6nvtGd65u2QKU6bc3oMEGnumJi4TQZ8oVJDtpGKHZdMbsUvdZXyf",
  "key5": "3fy6QdGeGskgZj7wkyH7vdGRNoEMeaz63tbKUuGfVgzr5fTkAtdGtJHKseeKPcxVXcqTE1QdGcvHwxNpZir8PwPN",
  "key6": "666h1W4Z1FjDen1vjc7eVyd2ZtHmRNVjdXFz22mCqXNmhXJ8XGeR75BNx9gZaseCcWRaiBnheW7gpBVh5iVLi5CA",
  "key7": "dw2Gh5u8qaxUsV8hmKY6BzAFuFSuyxwWUqTM9Ge95TmWdBSeSWrQ8CjjC41cmRznsXgcXSQAnR35vb3LmkSa252",
  "key8": "3CHM1YduoFakWGSyHBVQyQu2MSq1fwk3gyXUaLDMUQRRZ6KKvaJzntcZ9PDH2r7LqnyeKrHKDXaKQBi1qBniU7dR",
  "key9": "3k88if2f1v7pyB2YsnJPHfPcbZtmpKL8ygA8QDV5TfBBBg249QrNYf33sZma1DwKLLpupDsPuWHkSHXTDFej4auE",
  "key10": "4nMsDbCgDNJU9tpMTHqERY5zDrwzbuA3cAx4rCCMWMdSqGrpKRmzCsuTBTjsoo4xi5kPiZD6tjfoYCWn37dZUePH",
  "key11": "HEqs2RZXSaC7fqJT9FbGyBvvLj3rfe3MACTR9qLR99ZDd72YFReEVzeRjQu1YPLWyXjFC2XHbgaymBho6xT7Zju",
  "key12": "5npEU91hsdojhx45nUnr2TJLgMYDLbiFa8wwjrVY4PqfMkhXvGxhFuurctuU5a7YxGHv1pDqcsWYenHYn7AocWvG",
  "key13": "58WA8ejcfetuQ4KMPasipZ6M9pms8VfmVHyp48fbHeoSmdydtEnTPMmxNRVLSD7VwUyx7xnUBQk7ab3teEKvzqqD",
  "key14": "2fH5W9iZRR4UL6GL9TRhua4ooJ6EjhqtBq5YGgvkPD1WVvvdEMM2xurpCsZV7edLE6PQpPBgpRC9QNpQQBstuTux",
  "key15": "3iKMAoUN22wAiCtZhLdNTjrG8GZeH6ASDR4PhqPorYgFfZELn48S2VWvh13c2Hrnxs7RCZ1bQsdJwHQt8hr9ppUW",
  "key16": "4YgrriVPUXWTiUuwhZAufsitasuRzCtMjSx3FGEGUtKDRimp7pnP64XxFW9pw1HwDu5sPxJkB6ZnWJMFcNQDrBbP",
  "key17": "5WpRgCX8KpzEm2vBKNXaMwmNQmSKc7RntCRk95vZJ1QNPxicc7B2YSCJyVtR6yFcRLjYTo5wXvYC5DUeQ6LM9inY",
  "key18": "5uV71fnkwTcANboZsu8mhA56kDPs9MXHzf4hbqYzmT4JwkMuGjpMKswHk4zk4TL69iM72pFDHdSJE1RznCPjgbwi",
  "key19": "QjquxEKoUbJK3MPYra3KbPGUtFJUGxspt63PYEYzs8U5uiMwrs11GCBQZo69xq2KAU36mnJrPuWsShhTiKzEjvo",
  "key20": "522s815jrdW89GYbPcMTrYuueikg3wNijGTFkpwDxUCq2orBzshTEM7F6oj54U9zJJJ51yaUrfVPfou7ymAAn9v6",
  "key21": "3K6Q8jmfRegA4Hm3RGuiyaSn18RrjDgTT7fZtyWSG7wwHvDaAT4Y1mm4y3ddwekiHkmZaMChacrJw3FNmBd3HUQA",
  "key22": "gyAHSpTWzh4EvVxXKYJHDKZGWDJdqhrMAnM98gKNbFzScBE19DrWbZDpeLrA7ypUMDQcYueCdSZdF2kmwQipd8K",
  "key23": "2PSr7WxMxLmjnteLXToZPCMdvGPaezGcCdZQBGY8RCCFjp5Yui85mdUqiFRobkYeWADxiB9LWmGKyNPboL5qoh2g",
  "key24": "5CebyMiiZhwRA8EBpmpnqy3ioVoy6XFEacq4SeBhpBhaEGWs4NgxMbshRdS5BhocSDMmEPLxbHJdrJCeee5Sz2Dy",
  "key25": "4Tebyv1WJm4Cd2LA763Y1Ns1Wf11w5xPicuaLh4iigxxkB6GL6Q4tP1r8u3VhmatzKv8SjDtRjeGd7QueBPE7uHo",
  "key26": "5M1AucP38XTkVVeDSmy3K8QY6EfkyQ2mzffr9B27pvXAQUWvnbxdEMd1kWkw2iU1WVJr7XAD8U6gdhRbQozo3N5P",
  "key27": "39Ck1w85PsgzaH2Jenrt45hpiBurC46FqaZNbkkYiyzCL7fhtyHpG1gGAXAFVBEeQCJprW2bBgDd9cD5FhYTNct4",
  "key28": "rASgtvnGE5FpeLhPvLAu5qbjvxuc8PyuzHfULaCH4LjnXphED3PijwK6m3BqKbNvVTK98VypMQj4yDAh9CHvZeB",
  "key29": "5cbBtE6kKtQv1JXDvGr4h5YPd1LrUTLx6XFt84mBUp7ZwwbjRomWEXc4dqd242sesQfXvitSR3WG6micqPARzPnu"
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
