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
    "4vQ3yohVUMhYLmjUyW8rrKi6vQYPBZkCn8CJCBAmnwantpPQ1GSm7gLfXxsWS8g7Jti12Qf41xnaBsFWavwzpgA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbrgvudWHHLhdhdFfwkB7dGuNB1gujo96LYAg1ty9NTrtWWV2JoDXoFQuKiKBkniCtihmwL1TbBXRXDywkZYcMM",
  "key1": "52RJUeemsao5FKKY9zwX1HAmwNhUpD81Uu6TTGLuRAANXcPjqQu8JqeKiHyEdLXkLgoPsHmXo5M8s5bePFDF6G1D",
  "key2": "2DDm1XDp6jqesFwxEqNvZHcAXEVw3aJsqHTL99rPzqRJVdXtgCcq5T59vaaHmNpVAiReZynds5NktP386LcorsNY",
  "key3": "4GWVuUYuBs8bE8gkTZjQDkj7tCFihXr11Sb29Z1WPBRYzmcNL1K8fwiBGm7cXP7XG66p2aSmuyxGNMa9RZcWdd71",
  "key4": "4z4kx4rYHKuqpbfT6VZcMzKrXV1mdRPufxAfvVDndv45WE8ebexdBq4GGeK5D4Q5zzREhVQELPCob7kgkRCbE9oc",
  "key5": "27jwhRbbweHhLxriNW8Du7JEsH4THaFxysDFf14KMnDGNkjSqhYe5xemHcK1WwhRZs5ukMkrrgLcndY4PQPZxquG",
  "key6": "4B2yamPMjFQM43yjVPaKRhrHoKMQEDSHvyByjXdE35Z1A5yMQhACnswj8Mpc2gppXAZfToaXQ6xki6bbX8jxAeTd",
  "key7": "4BjzjQSQ7dsbXZ38HhDxm2fpMDhBzXcPLuFXBu2PpiGHP976TtvpGBpwSU69XB36bKAnGLaA9c5MPMYxYnBUa8MW",
  "key8": "2KZbmvhJgmnbLS8dma1QkFcrVJzg62CbawUnbABwFtXLBNnWBmBBsn4Mq5ASruEvFBueZFmjk5pnQxnoT4txkz1Z",
  "key9": "2esAEScgTXHtg67MDwXb6fLLV3PsrFLtn4zVRNAkLX6sshnAzn2ntfGp9Dr3dSKtNoHbbF7vyr24RaYAQzQiTFv7",
  "key10": "3t2xtH6eLJtCDQuaKRmaHVWn6RfZpRPtoMXPeLHb9QJiJuncTnnNFq1t5aGwRAMqqiZyC7zSnSyJQ4Fjj1cKeDFr",
  "key11": "2ga8BwCuLYEQsoRNhXAhUGwaNqeNjDMA4SMhHhos6MxTdCYMQ4HLSBhJTZ8877pVuD78Tj1XHZshZggXqi8ZX9Ph",
  "key12": "4HnMgoyrJb28VWAFN1uiQvnV9TRc7jTvKssC2MN24oGFJtAb4SdyDh3uqPjkn6REpHWDFdT34x6w4d6QafSLUxZL",
  "key13": "5eU3stz5HKbnXmJuJQiuYZxRiiXNhiX1pYC4aYhgLJJVCXDLkZ5wJ2FQMsAMKdjtS6hExYU2quso2SXKLQPtiubw",
  "key14": "4sywaJk6aoM3FSQHiT1SbyC4ooAiy2RJaTe6QRQsGRPPHxqtujKXq3x4XsymLsHaaTikbqqLrEFAbnnxaDxZrL1",
  "key15": "5F5ZUxzgWCaU2FzKTgkRAthuNvde8W2J65bmfBaNV9zA2ipRXMbNAyFmMieBMvqZTtex5sqCY2iTuFZpUdzBPQgC",
  "key16": "5oR4rLMqgvggEUNcgV6mnaT4avZxALMVsK9iggwrWHYprruvfM9pC7PfoMFwzDhB4dXpPicHxXuxLTBbQ7oook5A",
  "key17": "GKV6fRhXF7hd8GWfgFne2B97ZdEThbJi2rxBnkVbJaLNcF8b5xMvvr8b1wnqHwrCWXN9uyxRXe4fAjZwZuTcoQ9",
  "key18": "hbdkzermnwek3yBaJj8NBXJqT9Au9x7L1q5JPBQX6146mNUnwZR3HTJmmr8dyehUQgQYeKSfkBXsaJuh3cE2N74",
  "key19": "3RAeyJn2E2VVGgKioiDPdg5sMpHijnMwQrySQjbB9a6KMQVktQevxxLVYWxk7usGB1ZPt8VVyBZfec9tCaV8DA7u",
  "key20": "CCsjw8k89Tn281CY8L2LwTV8RDXKaWcQvdV7QK5b31g7yvPPGREEt89mMZekiDRMWAhLZh7n95DwMPGTAS3j6Xo",
  "key21": "49jsL3WD5SZzy4YU2MBaJXcsyQyvNr4xSMoZVKiHd4eQ4S1g2B6Nuwb5ydi4NHnoDPRJUG2JbiRxPG5zNRj9Kimo",
  "key22": "2iA34ocGPtyzG9DAuE6cQFFVY97zNQeZkZzXp6KRAxDM2gKTtJEQXBsuw4ggGhdvWKpGWJx176ps35K6pcA3MWHP",
  "key23": "3FqLL39Wuiu1phQRHfAy7hfRR57PBZEhkL2w472pqDgRR8ffJDUfZh6xoaCP6uL6hnTXat7PapzvmwCS8DUA8sU7",
  "key24": "4caMtEzaSaqwaTaMspNb1EBB8gW5yrd5R8CXa95hpqGvMxPJ7pbmdR8mp6pjewupzEQt1QPZtUK5Z7imeU81LfRe",
  "key25": "33j2nS8gTj6jaLZZGCxB6oCz5PdnAxoX7rmD77R1FitxkbuAqp3veeE7Fy3L2p7KwwCwUyhTdtiSvBs6QsUskNLR",
  "key26": "KYfUvLoynnG8kK1JKczmQBHockB6VjPcaXvCwLuDatkXsVWqLzbvTQ8QnnNeTUgcm56uRt249bSabT2QGXmuptw",
  "key27": "65dvbnYVfAa8XA3jsFHFA8pTp46MNovBaMDBoJCWFUq7RjkcHzCSocpggBGMJ9Ko5cXYctBSrd5GhfABVLbXESmj",
  "key28": "2hR8q8mUEuENiQdfyzngwaWVowb6k2Rm2af1VD1SLgAu9xXxk8WGi6XPpwaSQx2fh8esiuc6G8cgPQS9UwoHonyN",
  "key29": "sUKKZuNTpG8UGsvwWZZRwmqsQKaNBVGkcTzbmBB7gFimWhy4evmowQb3FRmEJGer3ZXrzGPnAoL8fojrHAugYYx",
  "key30": "5uyQxJxSWbGdvj9dcna2v9uaPbWJuwmDT9y18Qwpvg3c3xMvS1cPJmAmMoGrFKfLdML8dCaxVA5B8ixKoraLAauM",
  "key31": "27nX3Z9MqirokCVyNtSqFAh3j7JjT8t4thjtKGcE4ptfr239Gtt7kZx8W6BXBoCCnrJkkMsDLSXC4hKVHwNb7aJc",
  "key32": "MZQZn1U9NmJMzZsQLUuPKu9bwfZifH8D8w4ZzMgmueWi5aF57zdBpmtRL2XDqUq4LALG9vTtZrZdFENxqEjcqeM",
  "key33": "3R7erfH1H5mb9zTvTDX8AT3bcG7i1DF1Efh5PzRsAeAbuRduAgauenLk39ayqZkUnCkQFkDXrnC8oRwaMZdrM74K",
  "key34": "2fZiPb6F3e9zXeB4y8NbS5jbAWtbynr7TXPqgDE2zHpkx6zKwrKRy2anbMssZzpuGNDxqCgFJmMN7yA3dqq6mtbo",
  "key35": "2WKZB4pihEbgqh986kkdPDnJe2j5u9HW3DRRKxNUvtGVkG1YT9GERGPrhNPb5JYNcTzgmQxaRVsAFnSksYJexHN5",
  "key36": "9AX2QyQG5c1zNp4gPiNFnJGNNj3UJxkdpoFjoCHC6N99yUNXQebdUj4QdJSnnjgpgWmQDXrdZ7UpaJKvLa82AYR",
  "key37": "2b7eBZDesKf7GhaggQqrSio14HxD9g34vzN9UTfFapTMnhdEJxpuNhRRrvUeZ5a17eVnuqsPZXxFbpaYtALMRUq1",
  "key38": "5PeJjeHKov3e1LjFcyL9F8F6bRghW3W3dqSu4uRkcmzfWrhKznGxDfU1sDb3VNNcqUuHM7i8CsgbXR4KjF8fKoMG",
  "key39": "5GYsZw3c5AKcFQmttkXsJkcBRieugqedxXnqZa5FakCVtNWwsPh7SQZ1KFvyTWSkVsCvzBskrWe5N5PQAHzQEZYp"
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
