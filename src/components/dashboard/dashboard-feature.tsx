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
    "z2rUXi8t75zQnLRMBH45s8gTMNoTrfZuY8Ka6RbBdMaLjqEgNTrXmhmdhwehHYuiioyUDKCXD2sxTPeWxqKKd24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdH6Wf9dxSTB9ty9LX5h4jbjVVxMy3viQnP7wnvC46kKB7K7tHGbCZ8eriHJLZQaVLBXfngYjwznoFqPzn9XFd3",
  "key1": "4QDxL7YREtvcDzEwdsXgHw71AzzZGKKFCcinc85HHjSbB4mDcopgVQEJMydijCf3bkDNCoFngoFbEg9w2Y18yNpd",
  "key2": "W4umPeCzmtyuSG7CzBAq8pPhKaHMjpaRhFeJc24nGstYXdsa24hPMqxJ3yuu5PTE5eTpHATrd2b4PCsN7nDYB6o",
  "key3": "63pYB9QbmS7AdCC5rnDEuRJZtciGAZqqbkH95Rp7Kyenw3xX8YtSPTYjQAnPyRdhCcwJsQ2DF7yWmUExbQzYWihS",
  "key4": "4wfqnBkDrfPaj7KwNqkrJfGD1naWJ8M6DZvF8VksF1JeXokC15J3gMxN8YFs6tdZf2qRvFv4QJ5SSq9AqziHCFX1",
  "key5": "5jsREiKfjCfzK842tDsBcpvB6ieVpursyCahuQBaJoGaVuyzVahmiwPox4uN6L5RHmyx8f5NAwspa96NWCRqkyna",
  "key6": "33DviQqcjH1Dj6uniVfUaVpTnapejnhVPANZFN7XscubCtkvyK9pmQG41VMpv69bmy85pxs2tUeD9YCFpJmLaiaJ",
  "key7": "2y4PTGNszXDU6PBi1411fxQV386mNpRQAB7TBDMVc3McwWyCnBMeT4fgwT9vX5GDMNy2PiziM4HpDNRKEXSGTtvL",
  "key8": "3fmKr72Z8TPnFcAHqUVab4u14shHVbmCD9PFpTux3vLJAuSa593CCHaykymwnhL8eHNgHSZPYmei95SjRFkyBgy5",
  "key9": "3d5dA1EGiHYeUKLsTJ1AJoExXGunft2FTKNAM5r6Nv7wwgPKruQvoPY4CkNUWm6RVqnr5fYpVGSeVfiUD6UJ35sW",
  "key10": "4PGNZU98GhGoduJfKbyAKGwQhywBHxa1NG8Bgs3ynVdrC8aLNn7zbeq9Z5DkF7cf3s18n3PToKmcKK13BU4BZEkZ",
  "key11": "2ChG7n6UC7KzaP1SYWc6C3DhnHDXAPwNNq7gSopoKjmnjVrpm9p2n7yeqWtmx6AMBgFNxh66Yt9fW1LnFfXBa3VC",
  "key12": "5EukWNuU6qbV131aY1NTna2MyHWRTqgpk6cxMZ9XRwY5JLVKRJDhKC31D93jRe9C9S7kLCiNPbYNin81eU8QKvb8",
  "key13": "5VQDwGG4xdsDwv3LbviDKKRxf8mJaev8JuDaiR1TP7bptVdHWYqdm3eW2qhzaDWJ5pJNMBzQHtJNfqbBMG8Gu9QD",
  "key14": "55mQpxtuaMmsUtFUCFbimyPc4gSSNuGLyp25iQ59ws6u7TMKLV137aXLFXdPXMdAyHMjFYR8W4uecX86sHbgaW2q",
  "key15": "27TctpMP8Gcu7mbWaXx6S6oGiSFaZeBeoYTh9cn6W4JWcfLJEoAjUW7ZgVRPVji4dhdFYY4h8Fbw5RYYWMaik8J2",
  "key16": "3DuhfcQv4cJaUDB5A2a6b32ZwyxvpeRV14Gg6E2LxScvw1GmLbhbS6gXihmHDpsKUbC3ozz5DVTxYXLsQY1zGEKa",
  "key17": "5kn3aCeR4SPYTGPrgiKFpu1URa1W55r8f5oLvVMe48L7w96iAPFWgpRKGvt4XYbrUZYzbHyuzpMqeEEtWvVZ4sU",
  "key18": "251TED5rD3pb3YZPD9s7QbtWuLYTEU8U6fbCNQKZA4CdcmY3eMjPhxfjYB3HPkyct2BAEPjtswEqHpfuXg5YxVig",
  "key19": "3xePmE7ebn8MV9ELpM9q6VV8aG2XMhhNRitHtLM29dV9DdejT2Ve4bCUiB9KYLKWVYTbPuZsfWemYKK8KdMdx18U",
  "key20": "rSHoBhNYij2QLzSa8cGu4uzk5oVns8TqqsELCjqmLuYQSsZ1W3RoHwyB9MTDidXfvJpDwDee1pLb3SkyLjM4sCt",
  "key21": "3DubFmsWPwQ7Erv2e1GbvCgyJ1tPwTfpcGjF1Ba8mdfaC5hDFWAhkrthqHM2JLPETHp8tyxUiwiQuKzjMwW19hG2",
  "key22": "3qcFCGLDrRZqTNxBzXa9QjLVzabiyTdFMkXN5Br9HsJgUDoy3v7qULHwmb14tdq7obqn6HUMgZ7JjHucYCv2Saps",
  "key23": "5VuLkikF9LScT3Pvyz5Z6Hv3U9Det2HME5qkvQAbqCj9gaHE9bi8JbWS2KMDRWduk6mWTtgVj2qhPh6AsGhBbvSR",
  "key24": "5bbkUShAq1nJUrGsKg95m2dmSUCo7gnerYzTVeaBoCf4N8UzbaWgctpKSLSzx8k7T2Y4NaP1mYLP3yyziwfgoqfb",
  "key25": "3v8PyAte6M3evmCTi21goEd1RhxkUtmubvCEfSuVHDEhYnDtdZcJgnDDnZfE1fNpzRRmf2zAriYKZtCdczoSQBZ4",
  "key26": "2wtm3UwBQVi2oCYtfayZo9MQbEStVTcR4kz8NhCYX88FmoxV85FribuvgPDhANYEBoiJ34ojwEuMVE4XkbEXLa5M",
  "key27": "5iSojZb4xThUSHpHQF5AmXFeZH2MwWw2fADLEqGyBEUYLYJNRFEV6H4ZdDgBPD5U4AR4AxYpK8Ac6GNMztyTGysA",
  "key28": "zybqtArQ7Wq5G7pRW4sEM39kmbaEiD84m5EesEy7r2Go1h28B2yCf3RGaKFRPxFjYAhp1JRfXb7MAyPSiGsZiPY",
  "key29": "4WJ5dN2Bimx8zUgdwWwJUAiqHyK25H86ZvUQjDEDeW1tjG8rjCmsPjM6iR662orwxKwrdb51dc82CLuukiQAoKe9",
  "key30": "61RwKwRkcJmqFsgGwVqAdpGrspstDYYvAuHPby7kLBHYrL3GcYXmPb5bZxWioMyWv3Bi93eruaymsbUgr1R1RTF2",
  "key31": "5ugvk5wbCZmQjnQWofCbCCgfLbj2NuHFSVTjaef8bSxyUwxmWw6EDpSs71iddbLEE8XGWHn8nt91PiGm18D4w614",
  "key32": "3Q2UBH9eKtYkxj1rR39gM43mvExJEZWu1CKG6GFo1wvxWMLnesAZQ4NykR1NG91hyFtXMAN7KLVMKkbz9RF3WVRb",
  "key33": "3KGpzNEp7xYcFsHEW7kxxRcRdVRNVTcaff61i2s3XmGuXyfcyiUyiWuA1mDTzqUVgcMWzWW4QSTAbgC8jsCLtpKA",
  "key34": "4it1AFZic2gG7bL5xjx9hm33CLoLLBomy3KAKBYWRE7sFRFZTUQLxQJHNF9VNz9kEMVF4hryTVZsuo1cM3aa4ykQ",
  "key35": "3X8wH8NKfwGFiT9VWhn6npJMSAu8XrnTCXy9xydtELdrdjgJsKJ95Q8baGcU36WiBtBWMJifr3v5Zya79bbT9KUH",
  "key36": "2hxZfSFKZUvivy9XVQ6AGAu8uAoU2Jj6J1psZioDm4FQ2Qfjh5AzZoL6aijmNEFihME2JerntSjUzKy1jN7AdYN9",
  "key37": "3mraU2fcemwZ29CVM5yaU5tNapk4mJw6pMUFEEd8bsCgy9W9wQbbLGTqz1EthgqTB4ETZxoc2BVJhVx2WJEbjjJk",
  "key38": "2q3ZSDNpPf14UnQdkPchXSa3XLPA9nXsAnXptKHxB1YT4o3CR6iJ97XgSU3DAXos2MQEjY1SbEJ6pJJjK5YLzWRT",
  "key39": "4yW87h7WuTVjrQVdyG6RHtotHxDnvhKbhyRg1bs6cuLAGVJmh5hHRV88GEwESCxhXDiUSndScp1jLdSHRQLPDxMT",
  "key40": "4XtpD6oQAgiF9NzMr7p1UHT6N9rfhqQuHHxEbDA8xQ5Zzk4MtDy3K6wathGnrZSxa1vKUDq8pthJnBkyUYmmeqzV",
  "key41": "pkvLCEW3rYpfCNQ5XGtZ851BFH9GEQo7WFX9PE9zeHFSNTLYavuNs27DBQsWsQSsxMqEkFJJYHWMfHFZ2KfRHgH",
  "key42": "3JAM9dfD6mNCXbyRdGWPe5RSteyG36zQyfC2RCJDBhtXW37BWTXhhMMbgjSUQPpgnPoG4mdc1qsLf6T7eKbNRCWB",
  "key43": "2BDCU742QuFFeay87BP4XyodXEHfaGRFtNYQWyuwAoeMmUqh4YGK8WH48aPeFNkMHixPNsSiocwxb7cz8UvL6jMS",
  "key44": "44zK3nBcLp9wDxmywCQozyEtY3b2ctkanTCfks9oDemUNF3BKkPayEKxj9rS3kz6mUDSWmSniM698Q1NZo6sGEGV",
  "key45": "3bYFkUUMds4vcxe77xwD2kL9Ww68xuWyjwiKfKyJTEq8S8MCb5n9dm6rKR9YbEDqoCGJTmqZWmVux9oEx8YvtBMM",
  "key46": "2ccJswuoxug9BwSayQJhMV91MB6wcy3hPaacyQVU2eWwRi8RifjGk6yBqVT18bgpkPWRuFLs7G62VRonwbwhgATx",
  "key47": "eiEiucrYpczcemDB6dNnag8ZqxYBGhTS677EnHZXzUzNPggWy8P5AFixs5AKW2cdpHGVfYfFSDdT7FPMDByFHb1",
  "key48": "3vZeuGHgMRTw39h6NcPF64r78AjQmy73B9Vh7sUwS5SCyceuTXKAz3bGi1SKo8XyEmjRfGGhY8yLrPtfYiCvvdgR"
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
