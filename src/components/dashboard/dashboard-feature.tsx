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
    "3wNJfgBTP6ArB6zwzuTYy741yWszryVU6P7X9Wsua2jWVbTx3AmvZd4EwH1BUrRFNNrkjmP2TtYksvHpsCwE6Rfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46C83C6VxfiuLDedd4fsyr3qwkoCgbhxBtvRcAxBcKg4AZVmoRYWy5Li24MMtaYzdfwmbdggWM8wBkyr1VNsfi3T",
  "key1": "dm1oq5ca51aw7PC3wH8uKt8ymh5aeays34bwK2P2pb3hWKwYUvsRZxAAtj5R3UVKWREByFgvRjC51ViVFwdA6By",
  "key2": "5JXsnJ7saz2mApgBXEX9vazHC1XiiQ9Tn5648PvHFzkndkB7hbZszsGdLGVnVZhcgZ7wEjUMvcKzC8QY6g6W9eaW",
  "key3": "3bvmfSQpMurkhpEUagcJZGXbfduszeZkm2vUqEGvppoCLWzwcvaQ1ab3JVMQzTueD8jQUw32Hgcks21iKHiW9u3X",
  "key4": "4eNP9QHEhasKhKod8u81ShqmFyrfmfcCLSNL1zuvLXMVBaNdSz4XKApzEFw25e6tJfPogGRJQqUdcdjnk2wJ159e",
  "key5": "8boWdPj5c9wESeNGJSh9a3Y41Q1Dmx75rXC5vLwKQGFJrAU9h6hhtN5u2EGTeEzdUkJF7wWJwUuUZov4Z43Qcxb",
  "key6": "5hGeQi1uLpwY3gYh9xod39GnKDFvVXbvsc7q6mKWU2HFtGftFz3Dj4uDwjUWPKmDBiTYpV7Smg4vqtsLrkV3r69V",
  "key7": "2maANuvQ3m8XgxBbyBUJdHMv3SCu766r4KZ58HQE3X92hUbeyovSM5yBLySvXQoFyrZimNMhz8fhd5yzLw2GhNyt",
  "key8": "29FPNtFaP2981V15ebqoHjtPbPE5wvdEzh6obzBMD1futBrJPRw8rwUm7zdDa4g1eFezPZPFKGq7n8tzkhP4ddnU",
  "key9": "2U83DJkEX4m1cLSs6ZXsx81Z7T5yFhjCYBGe9mocLDKRWKaQsDa1JZJzCUPTpBGv4mTPVFay9ZF6x6FNLbHmmZkH",
  "key10": "3JFtpQVp1k2JbcJCJ7B6E5NC4ZMUneGYiQqEnGwoVWYMqeJuijoDwtsAqEAFKjgncPTm6MwDbv1dRq32oWAMVSHp",
  "key11": "3tJf3LJi3UY44JhHmU7DNC7RtdFW3H39KykmSeXGD2gWcscmohWxKT4P7bTk8A7xpD5b2ZbWW2jq77JwzR6VbCPP",
  "key12": "3TxhcuYiHAXzWuqvmkdeNu5gjFjJXtWFDnw6GnNt7gUmBHGtgmNDVqzZacKktr6Rs34JmB1Sude5LMvssgT2hio9",
  "key13": "64cJ3LMSELoDvotW898bdrbmn7HuLVba4bb6woNDHzBTrcRWP69vZoCPrMWJS898L6osmQe1Quqz4ZwQyRKznwkX",
  "key14": "2D13SWbCj3SonhGfM8HvUhYsQtfipZAmgSAnz3XHdhh7b8r8rNWgQdtd971RbbHS9ipW6yzeSKWTmXUL5AaaVH1F",
  "key15": "Y39CnMC3mPmHrci5Dgs7TK8tXfrS1johTzGL1iGH6aoxmXf52FrRcRL1ViH3uHUXbxfB7iC5dVWVbxSL8SXJqeG",
  "key16": "5qftxVZSQZM3FSVaSgsRpKuNqZDgVU49Nriwu57b8iegWAcMkKh726gKNRfvPos1LG7XkBHzzM74cZ422mLuXDHh",
  "key17": "3rykSDuwNYTQ2UwVkrYFqTfag3KSfnpj5nkikuBL1vt7drWHtZfdbCNMcPkJ6NMpytmDZCCqtVNVwMzwcmGWEXKn",
  "key18": "5rm95BrE9NqNteS5N8kVvcMHSQf3svgz6uBBcBHYrFs7SqV4UnmhFvqkeJGW1au73GbggKz6sgrtLpas5LPzMi28",
  "key19": "dhQTnoL1wvgAUiPZM4D3tjpvhTAa5svML8gRxnhPc1Hx5KVuAQhorZYDtkbxkwZVkoym4KrZsFNTVGZYiDs1BiF",
  "key20": "127wvcGVizBZHt47D4HTuknKctWvuqFDDNrXQkJwQjyeektL5kokDdqKngXY7HEdRkmgtB25epgLgXRVw97hWkK8",
  "key21": "VvJBuYgQEDDMTcP41JuJqQkWGKj8LLhWQnFzcaVLb7FJ8GfKFTpqeuy5jU4sd8Wiqd9yJpBJHQXnGYrDBdv1afu",
  "key22": "4eDGYTsmEUc5jtrJqFTPzhk891vnkKWkLj7exMZkoN8cmHH8YAoVhgs1z9KwtidxNyya8UwPSHTwaCpgdxab3RDf",
  "key23": "5EVqvNWUTqhBfGt6SrxmYm1PaKCSdPG5ovAuXQ8tY4B4odznZcVYSwTfj1XQU22Sofy1bYp3a2gaqpYYTQjKBm9h",
  "key24": "46fABjCA9J8zoz1DdQq5m59Tz9jASk5rbcWeMjGwvwxx6qytqicYg38uBKfCHLAKuft6kAHiTPDH2z9zmZ4pWsrg",
  "key25": "3x4hgP14uoA8eG4emZyG4ZrcjutrnKoxuvD7coMVCCLx3xrue3eTBTzC7hxSKoX2sJhRRFcy9DPJ6H1FUkH86vR6",
  "key26": "4GyYLjHxHBxUSxDtKXEJPqvDfje19kxrhg4S2SsdwUBY4uX2qhnmKk5AosEcNzrnjjtdP8j2AhTR6Hu2rcHJDzFL",
  "key27": "3taLDrHMJC26Ehu169C3cqzBkv45PkLVxtBfYEqTi9dSVqwQMtuCc7zgnWbM4sUHVWuynX7sLL8fNqfrdUujzA2T",
  "key28": "5HQKVJkpZYCmL8XAWmShPXKqGcwEBshJtAPmKjS3n5F7B1H2v4ZaWg7K89yxioHHyiodVrJSYGWA9iLtXm32pTUf",
  "key29": "5nrdiTyuT5KbfTAt4XZq6BQd8nz7fe5r2h5zxXYR21QjLWKbNf9VAvdacnbUGCHJHkEhRHjhbrquUkuC3avuxcPS",
  "key30": "2dB5uVaXFMnQQzjt8q7kifPuRDYrZV6VcSkDoXfFSjFX5MshsZRa3zvG7TcukmAp5jejhSeUZ8fbuJSQtbbf76jZ",
  "key31": "3SrPHWyzMnqffySa68KSn4DdtHXx88TkBVf3jiLHFP8y2u9NbwfMfSBDiHHmhw6UEXapdxeZQUWioEBJbNqEBu6L",
  "key32": "5kBu55R3et8gGz1yC1HDkVma6PivitQH1oPU5Y7DLQpkrj25ASNNduExaBRvQ4F7BT9tLRPTtEhdcM2h3ne1K837",
  "key33": "21ESK8cdgJHbQAG2ASJBqUPMgvmPCgKf6r8QaYJsC9q5MYS11vWx6mju3N7YkTbFxLWYEk87B3dbS9UWHC1agc9D",
  "key34": "2M8nHm1Qb2cfdREU55KzmabeWo7GxNRZSsR2XbEQL6YrAvyt8km8RJMYRNwmmGLTSRVNxaeyhfyn28xxuVnVA4wC",
  "key35": "5iBcKLgh9hSkdwu53VNx8kQ6H189nHV8EcLUVhGZQs76w6Nu9DLyGBvCtbaTrXVHpDcT3d6EwcFvX33YhGaCpUS4",
  "key36": "edomHjpsLtcPufaXWh6d97m7qx5wu1MzqWHDfxYTGhcUKH7KuNNr5ASfaJcoS42Ak3cUaVmtiEpd3hC8KuZwhBa",
  "key37": "53AHrNd3pJc9hQc7qJnnHuTyoMV6zGb3y4C396jVVZTJzQegXfZYY3AaN5iMM7wRey9bEgr9j1cKBQxARw5LNWZZ",
  "key38": "21RNmjWfSu6jcFkv3QDWNvXK3oxoZgVs4T9piv1PuwKMzHSLa3Mn9HNbbeosjsXVrztYvCnco7wgSkZ4RVJ22VPJ",
  "key39": "4TL8MDj1tSKQz2dJcLDbwQXAtGXPU2xWBWNvtWEpT3sxNzpit3sSsVvnXEnJMA5rnqJnY8ozH2PQmQB56PPmpgST",
  "key40": "3hYHnjhW9ozVzxG13hEfDsbu2ATWMazymKfZU7c5KP1Hjtkh7papThM4MKCr9iKE2Hrt1Tv3GwYkyuZ1BNtx9ywq",
  "key41": "3zykg43NdZA6DacJbRXXkZrKMUCeF5FavyRLggZdZq3a959zGAiLmL6yfuCsL85ATfeSQ6ua8SYzwAUyDvrGvYcD",
  "key42": "2tQzXB7y1gr8pBqqDgRymmG8befSKd7RYWfKKWecv1Xze1UpVgHh5TwEAm18hbKpALvuLRuMcdRwyDPSrPfFBggA",
  "key43": "4ndN5xuh7dvaCkw6gPpRSo17eaYnee2Lp2jeHkb4uLaKepbeLTpz76TmmwoiEsXyuqghnq5ZXaKfeyUc3gsombRe",
  "key44": "5jSJgDfW9HDqiZbwhmkzzWMoqyuWki94YnMd892b5v1AQ9vCq6wpHsnksnfKDa6g11tW5oACwpbLz3R2rqQ24jsJ",
  "key45": "K51nnhMsYBw7akRXdPi9sTPgPcWJoEmWFYU5Ap8qKTPGLMYQ2pGBrwPQLdTbrLRaRx55qftDySUkrjCrBDkr9Wo"
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
