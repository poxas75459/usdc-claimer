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
    "Jk66tCeaho6a58XawYT9Mb3uXG4cwW8XWRNffvatSGV4fzbbTRxg7XN1M9NJPBaDxA9FCkNZ6ynnxQ5QDP2zXce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29t6JdWec5enEBnuzm4sXkZbfCXzDpgUn8o2wEM4pv4urY4RKcU5XQCiQUn4BbMBfBm9Fw8YiKb5wsUhreaWtp8o",
  "key1": "3eFYxpRpJCdokxrY6LBww527iMHMJZgjFqprnWeAakT6mUF92io99PRT2xXkZCM6i1f62n8HRs4zAej1vixPqQxZ",
  "key2": "3rXSS4qun5e8T9jxy7G8y6bzfLBc1h1E7SiHcc1km1ovg7wL2UpNJ9Pb49PFnoCvDQ16hryht7CTUCvQZyHoAp6S",
  "key3": "2qo8nWU1h1PubdxozHZC59SFsCRGwAHtYfVgbbyYZg2pkAGM1TssBjY2xrjehzRL9gnix83qwDof2ziY8uDg8ivF",
  "key4": "2KcUty82vvhTnFGwh5yAYtm34n566653iZBsPNg6kSagRAJFFeX3YvdyrEEcPWMSJUQe3WnhNCgppwFueTz6t93d",
  "key5": "DASrMxp3vbDdEzqusEFebZFN2bKEE3uHxnSUnvck6CAnrgNHdBdMvWVjbA2GN9EETNqRnBkBkvYjks83PuBnbo2",
  "key6": "4a3kheus2b5s2GjTWkCaA3gYpp35htAKwe9dUQgjtTVdxW8dwbQP6wkGiQgfX787R8wZaAJL7UdGDcM5CythibvJ",
  "key7": "2D6Kk3qYt659f8zmTHzL7NTTtfbQAit3UmYv8L4ooUdTjkfgLJtoUPJSPjaqHvJap2Y4xNYJexTEi4CHpen6GWSg",
  "key8": "3wdeQwxE2ZZe7n4cJ2AQUBmQo3y1n3P2M6wH85YpvgaTvBVTNtYRS6SAvpd6honT8GwNFcbf5MB4b4ZvVqzdNQtV",
  "key9": "4i6h8kDtQGgn5gkCDBu41PD7T3T5tqmJ7Wn31MFZUeWs2KiYXjD9wNY9JQaxoU5LJ1aRAPkiV4desyGP8w9nrtHb",
  "key10": "4FtfSEHn8WESGdfNmMxzhwmio2o1kCzjtNccjXom1ZnRYyXPcZDiGeocNsPTgB4YkMCqoY6RoPrw325aqagxfxTX",
  "key11": "471c3NE8XgDe9UyMg8Bh4KvgLdttREvwgzZZ9U15euaToCwi3pEzDjVz3FhhF7Gzyzy7UyY32QhiM33c3bLcX6it",
  "key12": "3WbnU2xL3PJpgiuYfjdcCBY4nU6rs3UdvwfQzjTF71GwMhSR5XbUzQBeZngiVA9MzNeEmAbBXg63AXzMN8x65TpK",
  "key13": "3yr3PcF9aG5mAAhHcdoxEgDVDwJVmdhMVGbadKi8TZh2wJyryqXPKPKSoSpN3NUdstQF4TFNZwEMygFEJBj3XUdz",
  "key14": "2Eovn22LXZDE77xW1FeRcwr6sPozp5mSJ3JCp9aPprWSFutQkR1TjeUGoJ7PYZ3cEQNCs3hGnGcJrWqxH7Ky9BmK",
  "key15": "2GZqGc1yvNNNnea3VGhw8BTLNiDzvoPCZgW9xUokGfCSxAH7ATr7jouihqLVQz1RhV4qaKsTKE8K4HUHGxgJ6Gc5",
  "key16": "4KangiU5sP3k2vKYsqqj1oCQTALN6GDTUyGLRxsSHENt9UL7bXrHewVE9ns8ubq3k12S3djoZPTADz4D8gRBb8v4",
  "key17": "42V7WPqDDWHD8PYBrv9H9u9ADz1ZmmemgbB6X6A1xag69nfzL9S2J3me8kYBdbAU9g6SovJtAckVoetTVCM5joWr",
  "key18": "4k7AH6DDF4thVF4cjgLpfUfWhaRwataJMWfhf3FhB1s2Xn2CxcXp8CjPzaQ5y2TzSvvzZizAbuX44ycFFU7rCjjF",
  "key19": "4tvniDd3vuRaCbJV2qw3MFdN9ioui9Aq5JChsooWTgKnMoHC3ZtcKLQHucrW51wyAjquMW5bpBa2s3tFFeTU6Tuw",
  "key20": "2fRgea1bwJb5YroXYj2WsvBfTV2LpQ3AnUvx6wyjSM4Pvf4nngbnTfBzwYf8FiYMnDMDJVJUiqmHPA9cGP7vaHYj",
  "key21": "ejeNDJSXna6fStpPnonT52LQLmACiipUmuHkytMb2orFzF2LWbDpLoGfjDxhpn6QLv9dbUoxBG9yAMe8FrwNGDv",
  "key22": "4pKh6QqJqZYVhE1FK4wxZX4V6emsTiRcndBhwxU5V69YNMxGSpfkPskP7jxTbZmh6tTbXdwnvpHXuEg8LBXe4f9s",
  "key23": "CWqSGHFFwavXUC5gTgUmDtYyemZFTwTaY9GAZ59MBg2nNTNyDwAjpDYRCQWAVBHF2tjheKkvhG3t2QUgtzDawjT",
  "key24": "2q1N6hvCni6sdhoXBSBt7Pn9BwbFbsaK273CHsqyiPHfYSDrYBRLuL5ZDekfQAR1LdChKxeXzQujuTouBdSvNJtR",
  "key25": "5xAdUwH82fFJEakyGpG4nUiRHiZSbDT25MSXQkcJmXv2ad1SnvwHkgFwM2b5No7T22EpUGtVVXLduQZ9YprqEEjV",
  "key26": "2g6KVncWyhoeHYC57ofasoB8Mv2jnwtV8dXDjzZZXCXHZ4tknyr3c3vhTBfKfgx2p8CM6C4nwmFP1pojmi51umVu",
  "key27": "4v3fD16Vs8DXyTXaoTYnKroNipQFeJfnYLwHeYmTdBq99jRHXRq46Tmgzih9DoxmuuvHrXe3JgAW4XYkEsgBHMro",
  "key28": "EmnKvHpaCW7GGNcMYfYmRd8FBuPpsuKNfiUyBxNiqQffT4LPdSiqnqNFH7kozAp1B3dZT6dyUXcjURGxrHH8Aa3",
  "key29": "2o9rN49QdgEbv8kQT6HXcJQvSJBspz17H19N4eJL6VXaF6ThwsiJdhuJFSqgQdRc4zGLXT4LBSSzikibKpKsVwVh",
  "key30": "4wVnb9XRrhYBizFCySxhEX6j5BTbNkrkVUMBWdHAm79er43qtFuj96xtZLGbaND6pQcHo86DR5S4QQ85vB3PdFi5",
  "key31": "33VtZnzE9sw4b7LnfWd7uXbWBSHbdFmZVbVmDpMp8T2JcU2HBwkXRk9u1p5ZFDn6treRpGkJFjXB59A9NH4E95Gd",
  "key32": "35nZqg9wudoNitgojRA6GKiukfUodY1d9rBFXkkSxRSpRg19upJUNUXEippauZBNcZckscP9ayg6A4ZeNoeSy8uD",
  "key33": "2ZN6ETmJ54tTdfeejXuaSf28vPeroFWZ9dvukuvp8YmYGELYZ5jW3QyKmEqsA8krqj75gYf6AMULnPWTiH6xwgm9",
  "key34": "3ZdYUF36uqD8hohntLyPEioL5RhETMvNVGTM19yaiqiSi1bTksMmpNBJbk9xMF5wH2XijBqQMzpJGo51b3jry8Z5",
  "key35": "5DGCwifrGMvamkhZUbteEerXJNuLqhHh6P34vMYCyjzCY6GpHXT66mjfSw7iGnucWRys4nVq6hrFx5ktJhignNY6",
  "key36": "2PrmGmtun4DiD5phnfvATVqTEv3W6J5ZMvgtgqBvxW9uck55pJWtTEKALXfEWeepPKHRXjZka1AfgDUkPxRs8V3T",
  "key37": "3Nx5YuBuYfWZ9tnKRD2Xf2ruHRpvCMNAFsttq6Dfp3D65br22k7J5nqnso4baQhB6Bjj5RxNhabn6rKHetHvWdVd",
  "key38": "3ZHo7ZAtJAfeVdhjVSdUNDfNgnesfwBd5Y8uK5aECMQyhgfUgoayH5MSWX2YLHb1S1mzmVu7LsAFrwqxL92RmZGQ",
  "key39": "3LFggWHC5JnfrbMcjgfzeiCv5nZSoVe2UHzvf7e5YwoZujwTJ8xaXUmnNRGo8H48CJM7yGyxHWirKy3ux79XvAYG"
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
