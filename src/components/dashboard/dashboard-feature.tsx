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
    "5qtPi455wYqtBCMwW29o3FMETJD2fMEGuw5c6yTk8pNZVrMi3HLNqeQgc2zyCGPiAsYYbGrVurVsxpr53GSdkvYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5meY9yVLYPzbqWxhro6N8wUHGeE5Yz5oqERf3vXq7kxWRVJBmBao6gmrNbrhWpQja1EJ8PoexMvoUZieX8m6rYuM",
  "key1": "58B4qc8FpqXe2qxSRAYy52wUBL6U335r9WEkrf8U89k5gLGhHEpVjrZ9J3JrGZBWxN3Cf7HmDsMGSeCF5MEH3c5Y",
  "key2": "33AEeNMCszqKomQne9mrxUmHwxqcv1aS3WRhG9926UocugzTvq6AmjwchfFEj3To3QRfEEVnsgyZDjXe4iCKMmva",
  "key3": "3wB1p9VxwUyGGF1H5JNRAGfaSmEZ2kERd9oes4jHf5SyAVrrkSXFMiTBGtsgvtQzkdX6a2Vwu5eV1PgbuZM3KYmt",
  "key4": "3rJpqL66m9F8L1U4N9AQ7pBWF4Bfxjvqk6QeVmg3ZPnYyDh6m3sfZGtwNUZ1rugLJWMtbd75aQ5aiBb8hLBrsTVA",
  "key5": "2BC842XuAbiUfzJct9kUtDFe91sQzBLcGocxCPCvV9oV5aQgcEjemU3mDzhncVwRpBtyearei3GujhPXtmSYfCMd",
  "key6": "4b9SHxGiTk3EPH8kS22oRqY9MVufa9nEwRnF6TM3FsgsCynHz6awZoc57bWAzVg9MzVzewoExSPwuY7Gi2JzwftN",
  "key7": "byhrH2wPr7yx5FVCpUD4cpSdpTs7vNYjk4VX4WrwTRSsrZHUEFA43qj2LA2phH8Se3shKj4r9NJy8kKAAE2t7KT",
  "key8": "4KrZQXaGGH2MoHiQUrV59yur3hpNLFgWHWCMhgcx2p8m5r5cqpEN2cSPXWBcYF4ZiwatiZhryBffXcs4LD4cxC6w",
  "key9": "zHMGrbpWrUH5PnPhkmhSRAE2wFREPCbMtscJHsZ6tB6wKmMvThaZZLA1MY3vTAwDLmbsz8NTCdxvxGS9SYYjtWR",
  "key10": "4htQhuFwymRVS7BYxYc9Wwvf6mhY47XqCBSoUvcNcUo47HyRsNVmSKbmvHMhk34jue1t1eK6RuNALxV2DJduMueg",
  "key11": "3sbF3wS3g9Jy24rSbHFQ84ydBH7T3iLnyPpLGfvztjf9WjVyb61nfLrHdpTnaWaWoy2pW9fwXB7xsSUYSMAttCcX",
  "key12": "2QdcHmmBKjAgJo9hg6NYE3r7k2PyJwJ7EM8of5XMT7VQ7nsUMnFQiPxbCHC7izw7U7SCSGnh91NHBYEJZvRSNQeU",
  "key13": "4cVbdrqtYj3NddHYrZSavMkZPnV7LYxukC7qKiCygVfcu9sftwxYGJTwf1YTLs9L5EB8szNFTkF2tvtW4T9xJw1x",
  "key14": "2acPdCPUmyMEucikahnFdFS4kStPDkXtwxk7nGcq9G6cgYSJ9znxaHq5zW8UzbBNVfXye7jeHvRkEDQt7BjBrEs6",
  "key15": "3zjLwzcCJeDksCsT3WRueGYYJE6qhwBacUnA2U1kFXmxKovZvXRqjsrHAo2a9NBAM7Wq2NK9Zjd2UVHs3wjMqtFj",
  "key16": "3vMvdWJY2TxPRCcAYtVnNV5Du6sG5Hp9Tr6rv537jnjpvYdGRyEqPpCrBF4vVgBxs6yBgHhWDqkThNisfUgyMQ2C",
  "key17": "xJrZd1dejmvHB2DoT3YZ24W2GCwArtALeUCkNVbzEt7HuaVXFat1YaHPjHzK9Kj44ij8iBEQ2Qdc34NpCPwe3F6",
  "key18": "3RpkGvJGupMUA5H5arZHcNihZsk3qhmcTJ7bF72KZsuYKdpmp2pGPVBB65gfMziJwF6Hc9b4k8up7mvTTpaXLTz8",
  "key19": "5VFPpCNPVWPnatUwGCAPq2pkGJvrKdfRmVxJLmMhbWPkMLB4jS8fVSKwE24uiFt23Yifq3NCFmrZ7UVYcbic6PYM",
  "key20": "52zLW3rJkQ8x5Kf2xAEEdGU9D7XHcBZDnsSehaQMuRdHtT58ATMA8exS3FNmf33cJ6QuBxsWBo8P4D3xA99mTSmk",
  "key21": "3SF1U6Dko8n8mFmMR985dAp23GSzKesm92Ur4KwE5jsxN8o83hbNckE6ELyFxJZ5tFwA3GBd3zFNXukqkx2we8Ms",
  "key22": "5T17woCSwaxo1Xc4B47cVfLeKyvC1eAvcNE6QgnhLnXkB7fyY1AUkNSgBKrh5e92asTgRYpC3aXa11AABWSBUA8T",
  "key23": "4u14EvH5cWamuW8SEDErby3CcCCQXAYCBWkc6cPShnAkh3CAh7gK8g1qTikVArHoGzbstgRTu2NC4o5reDiXNtMb",
  "key24": "4siVCxpjUYr26MTB4CyApqiFSCSEgFF6trcTuiVtbgTna4uNuSgEVSguaTpjkzEPcVJJCquScAD1koNJQ7e9iu3q",
  "key25": "5yXn1j8D6jZxiYPoF57YqnYpQ5mwgqNBFcQrobrV3cYemEQ11yAhDUVEBNEmueUHmy2tnJUWfaUnqTWazABanyk3",
  "key26": "2EtYN6HkX9BgzPoZZKR1u9NMHtnRFNMVGcjMRiJKmksFu5DxuKv5zgwzLVyu9ipKvKtPMuG1etdNpqPWccBP9uk4",
  "key27": "3K6zhorWZ1MuSmwpcBTiV7V7uZm9PgXV5Ly95ku8DmPd9JfoeJ64EDw2ZKDeU4jXoB4rna7W57CUMwU8aZAu2T7d",
  "key28": "2Rkt4qRTQtNSDE3HXc4U5gkAyHn4YdtbzGN1cDamtgfY7zd9GhVbcygepcraT4uQiJ4yi8vKZPuhTGdhvDErywHJ",
  "key29": "3M6AtYkXHoqnZqM5yR1kmYJXAtfhD5ietPKBzV1FEomgyTKzAN5D5BmgL1boLugfReubk1wyVV4TE2pnpMuadeZu",
  "key30": "46sgwYKMwiCcg6XqaxtDCRjWwzTw5zMFWLPHsSJuHGHGtQ9obn34FsJ7qKe6FdMBQgvTqxbTTyqGMadvGrjquAAa"
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
