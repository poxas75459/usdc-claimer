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
    "2yTGTtmp256QN4nD9b6kZLRsdPp9x5MQn5jCbwMaEc9nWG9nkJrdK7eq6YuQxxbpF7sXkyAE3fZAM1hrNvFJrNuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4FudYdrTNoXz5TWhcqaKYod8MQiEdmhoxiF3GWhQatSufmFQEfzNM4ZSSibrq6MfXGgRvZ1XRJ1woRaWiYruCt",
  "key1": "3iJkn5cvToV8cbjUXNrgu9Hmcvdfq6iARgCb1VXEzf7BEqukCfFF91z4nFZMEE4QWHuEcgrenG8eBA51756Wg1De",
  "key2": "4ww3Htw48GKfGXxuBubLzvUPmfVZXetGHZCRPjEBV8vjp5EXkgRUbPT9GGEHeQs4UWAmb6Lp13sJzDazvW7cvr2s",
  "key3": "12AEcJGHNTDpTXdbwKymdq8QkJkNdFtmtFJ674CKyFuJWHG5cHb2bywppUzbn5Xx9Fs6yJ6mfysUkxc2yP1G25zd",
  "key4": "49QnXaFo2SRhpZBs3qCgzH12363K7fatPKeu7p4686WjWx2B7cNMA6tdLya79HeX81ghWG6hTKicPSv2PgwSdwmD",
  "key5": "3JW9LVtwZ1waraornnAREnaAksNbz3s7ZoAo1pJsa9jqQrxvQwZm7U56E4XMbVN9zWMPDXvmxHr8CZu84kcsWURG",
  "key6": "4QbyfEyFppPrBuLdyNnBNYxrwMpcoJJAYp1MZEegvSNWshmvDPXd8EsYHybiZKuabENZ4QiCpmc9fc7LWQs5cBik",
  "key7": "2HGKVqTBGpQxGgrQyATcMnrQq26wM5YB4UygtL388j3aiqNM3b3oXjU3sWn4AW2VDh4bNsnABXSBobGG2p2fByvP",
  "key8": "3FSGTqZGteGqU5P8GGqm3oeop1BJUDV2AuYwLjLMBgZoLKQvWzwyEKDE9pLv8aDszougtvkSPofMUJLZPT4x8DiQ",
  "key9": "4bP2ovBephQXdFQU8RUbyFxNkX6V96sdXfDoRMMxnDY81aMP54kPcYVxDLCyvUSGURdTCy21oxpC87rdbM5ixFcf",
  "key10": "3smUpg243gp1YdRoWevDk1pM284ZtRaqWyFVojRcHnN5aWRbPkeBNNaKH7VKou6ZkPJMLVnRAAwsBbw3sisravix",
  "key11": "5JTpBKvMrBq2oxap6uoMjYFxMQzVVULr8xtrDjueBUTKhDxXCpKYiR5TcAcMoWtU67vhN4N9uz5Lber4CB4PcoCA",
  "key12": "3XgjASF18Xp7kixCCupSAJkdBc1h8DbPNmTnQLK2G49its83oAyuuhgVi7fif4kwv1BRjGk2b12RjtjFCNkCYyi4",
  "key13": "5tyzH75bads7y7NwecdZ381iBMnYvj3hbCTGRkHAYTYp4rKpFEDs2rj6kpDdQVDAxByeuhqRwH5EEqfQDst5VGDo",
  "key14": "5gSjZVVBGCUgtwZkHpegq8Nks9bcUhNxHaXXHzJeP8X4yrdbrnDBBThq4mBMNdrKWjcb5WHJYxbKPjP7uijJoUx8",
  "key15": "55xwSG6ViLJpDWCivCHMerWPz33y6sqsVifA9MpDVyAaKyRXiPLuT8nxE54WG7WRFsQkQQTXivnbZVK34DVMKCUB",
  "key16": "4jrhieMtxTar75Zw1uHMTMahLo6eM4qE4YogjB4qmGPFhLJZYyzBKDBMgNmjPsMzwfHehkxLt9dkL3F4fNaMSe5t",
  "key17": "3nFBfBkvr8hudppiD6n4YUPJCjtLxiJgF7e9nD9XAYv9yrC1DLVTDtn9jv1xJvYSbZZyGnby7f2dDcZvURLpj2EN",
  "key18": "w2a7pVbiChSDKYdYKDKDTwVGn14qMtRfaQw83bqzLP56BFTQe7CYupMknTwjDPk76zWqYfmjNWyjrbXYF1heRvr",
  "key19": "227uCdaUz23MpFGwtJ84JEp13aMEB8t3t94YpRZyj3QPsY8Qys4nDt6g5P2RF4BW9HQrJxqNw3F9t8xSmqBuJ7Zm",
  "key20": "4rVBxBpNQt5DfccDVsrQJsee7ar8PfawybPeyayPLUX2jpfj1pNjhvJJBk85NMxKKpXp6h4Lk4zxBYKLycEYtTbn",
  "key21": "2FJ5RRXLxRWCAg3dGrKh2BJ11jjXJNZFGHPBokpL7zvodkWEAKjktJ15CrF52Xsoy9H4NXVKEqtqKBK54MyU1FTR",
  "key22": "Lr6rXRQKZhev7kXxtvgxqcFMkdYrYyE6YAQ8BPKFN6oYuErCuB8woioQvedmN8z7hCAHZY2TP11eVXfT5bzmd3z",
  "key23": "2B4FZYEXQfhZfx9K8heK4CL281VD2PeJ1Wkzn5tnvRVLH7BdcAdy5J3Ldhr7i4cUhGPUdpZoikt7bWUWMoL27MzW",
  "key24": "5NvVzXpd6zy5rFYzax5kRhWvt5ka6BuZsV7EtsM43GUaN4iTrLBPvDJf72YU39hKZ77cX2aZGVN4wdgQEnWmyYDu",
  "key25": "2XbThEdnaDYKirQNPVxzomF1ahGJj76g6P53NCk8NP6c5jRWc3V2Wg2EQHux2VbtquoCu5MK56LNwJP43zsNRitj",
  "key26": "2eHnUKDHf65UXQCqNfrxyDQNFPtqNnpFKgwqxQXWCgG5S4heww76nodHni5m7BgVcU4Ruh4Zi4h8Gk8eBbx2W7S3",
  "key27": "41QVMkNjzQPCfMviXpV5RxTKiptFomsmWRfVdTdgxRTFWfjFev9t9T8tAuRL4Ff2F6Wyd1npbp4bjVww1NUFdkPP",
  "key28": "2kM9Mi3FddNjekJLSjtEbPwiz2C17Ew1nkczYEBXiumtjoAq2jXPLEGi6Kg5vCx31sNnbUzLkgnB9pzv85aUfbzJ"
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
