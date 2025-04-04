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
    "3iEAYLnUE9zph5yAwvNeEWo5v6cmDoaY8Cs4yQxzF1My3P1qy8jfw6AfVAYABa4zWSBdnNW5hzCLgvrkxt6RVLVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58c6Y8GnggdnTsgjhHZP2V5qwdQCsXug67nAido9LP43YSjQE28Ev67u2wZ9eME7xKhgjM8xs3GJeuJEQMzwihR2",
  "key1": "5GnTcenQ3FCSkGiegcRJRnJbxzebVApoNtsi15JPRDnV8wQw5JRkfXbMNRtfqtCgZ7ZNntU45HtjRkvrwcmo32Vq",
  "key2": "3ixZpxDKd8gSN2n28MQBZJPo1btmi4TB2Jp3gX2NJH4pPxRPDPZKUjwxu4bXPMgZwQyQ8fCTa5P2skurxme3jH6E",
  "key3": "2oTGXyXn5tdy8nysT6Mr258HvWLBrVv3o38QHrJe3d1RrHhFkAP1r5Edk9zLVfTbAXBKLj7R8fLe3NqECxaSPKNh",
  "key4": "55Hgp6FvK6Yfjx9h9fF4bnfHG3axJfLhyh8Na6ipNpzwyt9QCfx3Rcrh39PPoaCrWgk6sEZdXFZsvDd8qM7dkFYj",
  "key5": "5mdLTrDHoEkyXfBPwyJ3fVX1XpYMxfvcgNCwsF3BR3aPnj9P2bCiLdtehZSByAvnNdMcS379rxCVxEJEkfqVzLoJ",
  "key6": "2kNv8zoR1LzLff5gsxsJFt1MovCzBmGkjhDU9iGaETmN1y1fwNNcx4wDiUv1VgktdRAAPedhBFGGG3waAuSSMDs7",
  "key7": "4LK8xm9UihorBzmuEmohMQPT5epYaAmppbeoHSMx4GYt1fb4rrqjnfqbMuSkD2iZc62JX2xLSkPAgTuGXc42RX8R",
  "key8": "4Y7z9jyc7fvUWNScDgAELcUbMWXDNHGZFrUs8y7hWVGCvzgN9kGUXEz7vjXJEmeroTYTPjc3zCLPD7QtYgPktC2Y",
  "key9": "YeHWSTSLgXeGHRDZoLoWeXm99sm6EkiojBTx7XSwxSYYLg3kMEny3KWqdhc7H8GJ3j451a1L4yhg11a4BxFo2UR",
  "key10": "2jVNweEpUKv1U4g5zoLWQELPbs4WqvgZDMVf3GnBecyvgnq9nTUXbfwA8sKweoeDeaDVFYKfJqtQhejoFQBn3zfx",
  "key11": "4vgraXiLNt9CrQ2iinWX9QX72cSjSxWRg4Qfdp2SL1xRuGQL9jB4AiJMNeZ1UwYWnHtJnUVk7nfM6AjHrDfbCCSE",
  "key12": "4W2Ewv9b4byTxNAbyX5BmMqLkyy5eHAcgxyyz6rNRPGUCawVKjdHFJufcdWyZaSngzxMotdsgDNMGRRuNW2YBm9a",
  "key13": "2DGARjxJ1bNAepxv3zZ4DWMuNAMFP8NNGdGDQBtwnwkSrfSMwRJVYHGNe8WDKGqHbQvwPA1JnP8gE7LJCBqmP8ed",
  "key14": "62aUbLQ3WQ2pxpS1om5ZApKMfzGBz1aAb2rQKivf6LdWGG6YV9gNPL5dwpE86Az47uZFfwBidf5bt8gtnJneJ6vr",
  "key15": "5bnrGRjpktRBGrWKaEuYgwRbWHXGBm8JHVFL812F3fQv7ynVm62853cTY9BaG5SgZjKDth7hu4eCuEvJuN1N6Ls5",
  "key16": "26qcddDzoYwFTUYrHAeMtVq6fPYT2PxCfVvUoytgQ1U5JFqZjyGWHnbMRgtG72KYm6WWKCy5pdBtspEp6G4Yrueh",
  "key17": "3RFGPZGPU2orJuonzBQMaH5j7Z7Deei6FaXJAdXw2qGsPyRAHg37hiqTGQwbNQhepZK8UhH9rMHcwbQCLxnCABKG",
  "key18": "HzHq5Mmxt8NFX9YwXh2vt8eb3mKq7UQXT2Mky7TkHhtdPVmM3JrCpJRJ9Gp8BfdcuiyuTaWz6HVgW8haG3HfuPt",
  "key19": "66hmPtCQgXx9RSgnTiV7USkUiqv8D4vsepu8qwoQBuYMyLnn9EJHA6QGPN8UeBHC35BEfTJ9yuSRHPwVoZDMoU8o",
  "key20": "3S6XazYCY7KX5GGNQBTKU6w3zWgokyjMdQedkVNEyUVKW1xj6Szq697K6zs7q2F8xRuzJQY2RSCFCQyW4LiPKJVd",
  "key21": "3C2PwMzB7P82j2SVc63rG6MweAUpGgiCYpD2JhBiecBZn8vAYV5bb1cAvKnKV4ThxG1Wk3Yo3iw1cYbgvWBbcUTm",
  "key22": "5kg9o1agwVWkzTdxfxSURL9GUBsX3pE97uUs9NtHFe6thnHymvaQACC3RsopdeEPQY8HSgxWM1r8gEt2wrm5BNBW",
  "key23": "5bzFUMVRDdsxnKGne7XKoZndaE3vdg4V9uZykyjiz3FkE5cnCUdPcZ1NpTEVb5zRj4EnxmD9xHchtyTGi2HXS82N",
  "key24": "59c9yicQsQ999yRdQoaoHwVo3hC6Rgz13ian7aVY3XaqNuU4AGyifdfKBnbizcG2S5gscidD8BULHjY8z66FmQQT",
  "key25": "3oUZUv6JymH9jmFiiuJ8YGDQMDoXNFwBg3G1RmyZMAVb6tK2spo7UeSzMeAxpmSbCtHFiRkhzsvj7G3N8wQpABLE",
  "key26": "2YNvuJioSDJMrwQnFvd2a9rC8X9EBnz8Z2tcRffv7PwKnEuungNshcoqhostsDrYseDrK3hbZz6qt5rNhGSmatM8",
  "key27": "3gU5dmyQQ8yaxppecgKkxDQ5Q6DDskHrMRSjy68kiAFhHAmCbDWbkyxXLcDwhrLQspG5ixiio6X56BsrAvFe29qd",
  "key28": "4bZEUoDrLAM7MgaMdTuegC1RNngCHg8hs4gPNFjCRgXqaagVWFkS8k45hAQs72fvnCAMWr1S3J4GeWukyCyBaKCt",
  "key29": "2V8nSgvp5LBhZU8M8HNeB1JRTha8xWZqXcURZTEnaHRPRjFgwd2JCsYmiKM8DND4FEKZW6N2xqZUNGLBxeMbUyv7",
  "key30": "2cSfKZEEAnhmkJU124g4MUdxgJVHjW53daUNFAp3e1DLLjbcjoT6BkxhEnb1G7U2aZj5N2wS3GCx1vDBgHn9eXk",
  "key31": "2mdMEgAvZTNrfqLWjXpiepYhtmHLgAV39yN52GwswBFMEk4ftZc6cunZR7LVDt8JM5xSKE8WJHsE6zHVNnEFokhL",
  "key32": "jf41f1oyvzvYio4W6fPVrDyLQrs7svYFNaK3nv1JxvwcFnXjPgddTAKjfEmJ5RmfFbBbH5rK7NdJpyTThEQy1JV",
  "key33": "5NfRm7SSqL9Rk9R8okpWZYeBjV3HjPLFV2NDb9J8zHJyDNYMkNfEym5oUoZCHQZp4Ba3Uxo9USJ2H2XJGvrsJhEs",
  "key34": "4B46e1gfNufk6hdBiPMGqDmaasK85jBXikn1bVD45fJJpFGH63KWZEw63swRVqGwQpJsEXpTaBRtBSDBpoPv6Pbv",
  "key35": "37CVzdTZkvSvTeGLVCFEaw2wxmy452GYcpoxd8gezQaNmVsHfjQLmwK4ccjycuoh9CTad2vbRJkrkuDfUgg5jTg7",
  "key36": "3x9oWyXhCDTrx5Fi8y7F9aBzg92y2FzRPEuqXZZJCMFNNrVTpVTuZnhWLp9vbVLgTx2yYqgWB4F4YS1yGfXpu1N3",
  "key37": "38iyL4TmJgRLmhw1U7wzZy1Uq4SQVRYf6os11PbCi4eusYw5e46uHRHRZefoWeJ7nveK3ZYBGivocjErKRasQdZh",
  "key38": "4SmALe8HJJhZEt4UcUPGL4u5efqpW4QBWcXHDYzi6ii8Wemrja1D3B2jin24teVsK7ubrKfcWUQwu2kN23VeHA1T"
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
