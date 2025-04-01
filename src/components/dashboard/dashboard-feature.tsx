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
    "nuAzFSVgyQzN11TqYQiaDQZareNV6mWPoxqpoQfkKG5oiRGXPXHNLryZ9DpnTZW7dXepd378SWYzHabNDFCsCW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzDApot7R2b7YdJzf4RSrkTWvu8HWEMsb9S4Zc14SfSc4ZmV6RrXLg6k8Yuqv2eXP3c8uFfSGTyQwdkcqYNVhh8",
  "key1": "4othGrwTDjVCrUPm5sc4SSyQa9beHj6w9X7uNUB6bLT9pnGvDnbukRYAEzQcX6vVq58cjq6Gv3oCpJm61Xsf7pZq",
  "key2": "5e7UFFqUUKBKDVqAZKavBaBjURTFpm9YZTJjoM3dd8tYHWsfHgaNxU8LyuKLZ1tvSfDUpTqUogMtXZyP5awLjuTe",
  "key3": "iVBpgxoToYdzhhLCpDitGeHUTkXwbB4KMVrvifMTAJfCEHKTWg6LboT6GcVXTwW1sjtyEMWqyjg3ccEhxzaW2dq",
  "key4": "4QbrDoeLjiy5jBWiT8Us2oqdSpaF61atcJCBKMVgt232Mzt6DAuMmoKdBBdYRsuMrmgg98KzFWnVk5rfT5nBRS6Y",
  "key5": "3VFCNVwCEbVrJZwgvRTFQ6nwAg9pQL88KFLmjX1p5NoxbEQVZh4uHTRcfxTA8Y2Ew5iKsUxHQrosLPySkgRtwF5z",
  "key6": "3B7a5LAuGpaFa1kKDG9yUg4cnH6e6CDtJ5x9h4ujUXyaJwn9uLTygmTn8KTER7VaW37E5a4Uans3skQFTUX1osC6",
  "key7": "2xvz2kmhyzDVLwwHD3ZnHAQ1WdDowXtaNeTAzMSMWxwqty7i8dWnXvn4fXhit98DBDE1D9vUWtJBHKBf2bHhYhVb",
  "key8": "3rPMEVsKCRmGYvwSvW9kZLtapsjXssEomxC9R5GnVRoSCyMifohoHxMwsbWtMJmXCaiSiJZAzk3Wu972Spfkov77",
  "key9": "2fszgkBDLW6o9Sw2anV713mSxyZAQyJ1RuDM9gnPM8JAcMBNkh1jAP4RnPK51bkzPBYwCRYxEbYhWaXde8Ap18Tt",
  "key10": "5v2Dh3YA1smHNXtqn8fjv3rqs8xotEB87H6AxRPvbYRX7jjBsZRD2v51qBU7QZrjV9SepMNfSC6J71Zt9PxbK9DG",
  "key11": "52k7rt1pkwmPspDszPYYWugGqwf267W5g39hmbtrNn99hdoPqqjBSPaoA8graed4RW1o1S2r8ZcDkoYt69AUUNBq",
  "key12": "TBijDadPaZxMSNXH6YoKhxACc2Gyy61kwMqvkKjfeFG9CKQECDijonZSPJ79EJATPbBttWmjyxtDHybzz9FkjRp",
  "key13": "2Y5fyXS2ecxeS8uasvsTTUDBSsPUyCd7NFLdxSiud815QRMZDVYLd4ArHDhzGB6HNetcqZD12BS6AXF16xPUCkMZ",
  "key14": "XWA4ZYyrRf5zBe9f3kfH7GNCGwyaXC9LMBNk3LU71MehJEQdskyJDLQ5B967twNtDyjqz2xLhPAhPU86ZeNMLEy",
  "key15": "4sWfG6gekfYBY7TFbAJGYUEN5amZVkudBWb673bVZ9bxLBYJdJxatLkjVLdFE25ZaJPL3sEUioUzftxnAZ8vu7f2",
  "key16": "Xu2xWZfjGznDxP1EhGvow5bWQzCYTFXcT2MwkHkeaM1GizX915YnDqKeowKsxmMWVWAVkv9ao8yC7LHvQ3qbxvs",
  "key17": "1iuE8UZzM6owjfQvi5W9fCa4DDjogbv9qyT8RWaKtHbj2DgZL2ZPQiyLmKewp8zMePvM4SDKfQSwh7ZU7GLTbcM",
  "key18": "5B3vx6uUygLVPq4GzPT85dsVQsxhSYujN3Tc41hziygFLnrbmpgpcY4qYUoYoVg6rVscoR33i9Zdv5WjDhSU8WjZ",
  "key19": "yshpFusKLx3iTLBugcMFcaiyoupFBtGy1pYhc5rKLQ6n4SJZq95fTYRWY1DwLvEx95tHZBJN8ot3oHmeBWZ4kVh",
  "key20": "3mzDMmNjFtSkm7bWoSFW1FpghcqwDrHCnjm9Jk4Hrc87YvS7FSZUR2XEWkgCDoqUK5GtsjDd3nR6VKtb1iVe11XF",
  "key21": "5czRcjepEDNSfLrbU9MA6Yzu5BesfkN76qHQN5EMT26j3ujRwsH2ToHDswgpEeVH1b8MtyeDTqe23TY5U64acQMh",
  "key22": "45B7HPv1Aj52mwFai2NuffZNYeYW3S5tF7wzmvpWEDdpUR53zzJbJ1L1NsbeDVF71ekTriL69aS1PLc8sMPTLDqm",
  "key23": "1uhsnXzp8tw4WXDmNQN82MrrreLokR59k7V9qFu6S1tzRCzXFJVtkdQ62WTQJV41Kxf5gHNP7ferz9au7AyQeYu",
  "key24": "42GRio7mLGsAvUrvyP9PmaHMC1HPm4XJyNNuTpKgpodz4g1XvqM2UwmJnCLi5Fzgy8DJu7Ly5HkgZwYyr5rwLyv8",
  "key25": "55mtxiHcTgw6EL2aq7EZRKT2KmsNngKusi59q96xhVb4Ss4j1xbxSyUXECwFo6318p6KhS5ToPtGzEMCt7b8xuQ2"
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
