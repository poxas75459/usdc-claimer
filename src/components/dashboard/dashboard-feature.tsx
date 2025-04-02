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
    "QaVwyDWijVz7v8VS3SEvwvmPB8PfPF2aoQPhmQ3T8BE6QuWJDWUDr2nVbTcgR6Ko4RN5vfSZTu6Ao3iEWzSA14N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxCSfxoWdvbfeFaTdmaWcaBWZpjVHG2jrs1iKnRXvtT2xHAj1ioybhNow4V5zzGBdPXMQxFPZAyD332D2oGNTsK",
  "key1": "NiEBr7ycFZtS3W8sfZjoAmx4eigyD8GDt8KiZLAFfWttTvd2osY3ghvE6wjTBhemBEoEJTUW7qbrH9yBVsuBqtH",
  "key2": "5VGupSZaGgckw8RVLnrVBJKJdKBiN9MPkSBpvjSoKKdjZ7TrLPp9Z6TZZBYARsy86p1FWiGvHJFFaRof6kQu2Ygp",
  "key3": "XoMaBbdAcbYGGYyEAPWLD9yuzy4MFQwyyK7WyCBzyUnxVZrfLyVg693whmFvjkfSC27pkhuWp2PTuM7m2BR2VAr",
  "key4": "44F9fLMEGSWMcdfHAUcKJGuKvtDbvTLqR78SerrKgthwEp5zq8ZW9rvLrVyUEQP7Ry5wLtz38R6BAbfmw9pEHDgq",
  "key5": "38s9wWHXZU9QCPdmVMuXrps2r1bxsRA6LsEY52YAE2VJQaMyqAGD2JvZVDphL6NguWmjyPsg3DJA2DHtXawzo5wm",
  "key6": "32tyyTKsMJGecYTeWAwkAC2HLjRTLzNuoCJnEjk5i9u6SP84Xf79drU298mr5bf899getV9c8aGLaAsdTMasdbWc",
  "key7": "5kQHUWbEc8cnjocXgfEZCPvU7DcHC8usF36bxRfykq9rQa5zvXKW2vYR26J4mKLmwEtfxiLok8GUWxXCEmFfEB2E",
  "key8": "4vTR3ggahqj66vtKBpuWA9Nsu8PWGRvcJMtB6xrGDF9WxQPckUjFYdv2qGc6hGs9ER8oxbPh9S2m5MgpmbJqLf4C",
  "key9": "5JvvMvSsEgebw1z5yfytVqcBouwm4VzMZ76eB5JDnqT5dHgAJPLxKSfevYF3GfqavRsBTQLVdiTa3gnRjgkJtyP6",
  "key10": "3ow5KE8P8K9JFDdqQuPbD1VHDmp2okYUhxMQmu2k5sqFzcpAxFy2zp9k446Q3WdGNnpYy7MQbtDr58nmetw2osZ7",
  "key11": "2HxDZ8wAkHjwPbyq1ppnF7VjwkyVqADrkeybQmBNWNFQUidWXy7NRj8H5YixTNKjot7u2QUgFPM9ubyHSwkVonzh",
  "key12": "4ZkaZRUJX878drKWTUNTjLVa3XhQWdEkfgNQNg9Pkm53xSxRs9Em4fFMNd2jddhEyQEqgFZukKAomCLGmaVbRsbq",
  "key13": "4KAiQHdyCTqi2sH9ukAXCDEf5qgAPGVjgq2NjiaWHtp6wrWqGL4V7vqqrEtBPabqnvp6dukPtg8eTNGi6J3PNkkN",
  "key14": "45aoGzzq3BHC1yNGNVDdwgBUGPE2J29idByVqFjwvucMfa9BkrhWL1YGh5fRkjyVLr2v7gHfBQeNBAiXR6KbHUjv",
  "key15": "YbvVRhxyyeXe3btVSXvWEGGi3L87WiyTtjq7KnNiiHLnaRFsquivhFgRXp8kbkMyTj8nnWf3fU5rCkSkP6tSwP2",
  "key16": "5iZ4n8R6p5i4FvragwVFMaj4WzFZ8jt2npzKjvZJvHxJ2qMSoL4ESUeZm2pAdmDe5bPjDunKWNT6qGmUypCKa7jt",
  "key17": "3nKEA6mL4QZ2WgQJEPu64LwC8daCXgXnXnxhXCbsg87dyze3WsDYd4rBiPhgPCDd9akAf6PjGhBpsaFwqncdwQBs",
  "key18": "99pYqapFYmSNZLuRkQJLm6y9KVdDg39MBJAzENKacVao1Nj9TaLYvuvjrAGqzUxg17sceDQKibeSEJPvKprRBPE",
  "key19": "VNw2i1yeWg2bYufNx1S1av6A9fw8KrByUY1kivtarftYwUYjWRnZ3Z55W1Y4Hf5iNL2HX2pJtg3NJhf7oANGSjp",
  "key20": "4NuyR5FtH8HmJG2ji7epJAnVXtRFHUd3cFXa2CLtarvyFU2aSNWVeHpjfzEaduMN3qeHaV3FZ4qeiJEh9J4BwNN5",
  "key21": "5zfYSP3xG9FPZCAWRB7pci3eX63rrdxBuvHrJfKusKj94Sp5wW6tGMmzcf6rL6A4Pb1wYPebQaxfAYqRnGAk98ud",
  "key22": "5BCuvkRvGpNTaBUnDUm7mfQ79Ma1pKaSNT1bY4yJBHwnjFP1hzvp94faYojpNdycNwtnXLegMC3vDKkzbfgLVCGe",
  "key23": "JE9tWjE3k9xWjfqWTAdSNuo4STqUndtAfdiDrMYZMeQzp2bDgoLyg9bwJBvq7dG6HTcxG7xVY6N9hVWNPe83uqN",
  "key24": "3XAgoXVNNedCH41P6kKjKy7dW1Kok7dXtkBatQeSpiSK2YwzMdvoXkqNaJoJQZwQQyJqS5GAWZ2WryubbqprYkoS",
  "key25": "48uJrGD6pybQuvCaav1m41wJeXrtfQf28wKQr7ui821XwZBbBhkj1bjmL5amK5yENpqizCXGFMBpRka5PEPRZbed",
  "key26": "DjtCMckZ6BV1omAT66ZFkkAnDaxrofBcvwWYxrrFF31gpxDJKFJn8mPLTUgEzsno6Ype6KYsqj8URwedCYfKamm",
  "key27": "4nGXSWGjoWwmob8DHisnBeD7qUY39hWcHDxuxghmC6U6i425q4sNMS9B3yTkCDNGjoH7yoqQTLeBG3ZUriN5D5sD",
  "key28": "4zEq5u5LJ5enLzoJuFYx9ZKL14ygHMXKiyvztsuSL4AkB4zByWM4UZuzeHYsYUEfqHA87umvgz8VEANK2zixFNnD",
  "key29": "3BomT5QuasPeZk8KQKfj5MSgnJu6NknDmwvvpd3sFA36jcnUG4DouVrkCkRHrvVT2HpETEdc2hmjbDidzgD6Au84",
  "key30": "41s69EvdQHLa2a8MmmkprYzpAP4weKEARK4cruHB7Z7NoBCsZixVbDjPagV5zFH1U8aLNNnKPexrcdK8eYqb76c5",
  "key31": "5GkRX3niQ9D5oySSRgKkoyMiHFTxQtMBa29DkSE45ey2gTgdNipPb7TpEmx61o69XMVaXukqMTvW1xqpGqyxBi7S",
  "key32": "58terExMcGtxmBvKFmrAXeKNjV8PvzNSF3vs9gqCjZYqSd8gFEGqt7d5XcWZuANmQgvtUxJY87QYwZTNhQbbtu65",
  "key33": "3MWz5R2Xj2srnW6UpCfQBJvVqxqep9xM4TFjcJCxwwdh7qDnE7ozBMWJHFGTz87e3C9KTq2vKcN9dD8898v1xUfu",
  "key34": "sKxzpECFdnBVTyrM3KWxMLsHbSz8GEtDqnG1ZmkEK3KFtFZaqL9EMQHgdbB9VxaSTw1LRvX7vEc8rnyyCaMJhkQ"
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
