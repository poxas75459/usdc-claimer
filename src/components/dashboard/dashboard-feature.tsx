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
    "3HqnkznGawXVoqXGSEpd7BsN1uWy8XqcgajN98UtC8PDroFZkyhJ4qJQpy5qAjWDhcnfHFiD4WAa9w4SuifEqdau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7pfgYsgQAv3vPguJxJuCBi4gBVTjyC7jhyH14kC4moNuergcZhLCLpoi3YwttK3fPugRNUsyhGDsc57yDMyYqM",
  "key1": "dHaPS9FzHh7zAhARd6rtQ5EWDkeGMrTeHJYvJHiHC97WEeiv3aPzvT9P8vFPup98dssWgsHkN2uTD8jRJzhGB2J",
  "key2": "g2YHMq5a3hHQCYwha8Sza3HWaH2vBgsyeV9K9D8LnumwGBpywAaTxRuYH6yurS1nSm1h1kJHMjYGJc6HrNHMv8x",
  "key3": "45588jgfWSMTo3Pyt6VhFCHNtHoT6rmmJNJMqZ3XcUbm7RbpS2GwAzf11tVWoaFsDJsVkv4C9bfveMSsoDRfUvyf",
  "key4": "2dfqer5b6fW35sV4vAGfneZ1LXRCx9F5srr6FHY3RxtyrztANNeLag83GtGZvVAEehGfMhrbnvAKJByf46jefYMQ",
  "key5": "2gFazsgXvchiUqg7nYv4Qxd8FKwYjfi8d3Rivm5Zeyx7WjCWA8N1YyySUqeXTcazJ4mzBzUYXrQDadmo1LoiGa5g",
  "key6": "592tkht9Nqj3HzX1jsKXDK83yqfvPj4cBvMzBynAP1KmCvNEvDiJ6g3eqMj4rvBMLUzG98VeHMS9CwxhvGs6ZoZ7",
  "key7": "VPKaD8szKBpYMAfyAE1U4muq7q8rUmCfmtJrQfnjJkGFEot5gwrGGMaB118uXDtea6zjqUEqybQqXENoWtAVf9K",
  "key8": "xiWvoVN5ESn96zPiBCw3rDcC6j4NBqLq9vYGbPtAv7791hWs6BdxmmJ4jDWCNkQKQz8GVWVMmJh2mrm2yHYsuH2",
  "key9": "2V5zuoyJQ63d8sevnE3v6KTCD8ZfELRuQ5HzgPzdE6rYGJSRWWF3DSFoEKrQrwN3AAy3buYgESe2TwiNwS8CJKd6",
  "key10": "5vpmvUizRxPQ9X47Bs89pS62h7PZ7sDm9euKJerxYe6mm6qncGfdywGC9kj7zL6EfhccMSiWx9vUqPiazPwF74pZ",
  "key11": "435NuFBRdPB1wFKnuh3NhRoroisLxTLF46PVojdmjfvAw3GQrib4ubYUgAtAibgeJ2YfLSvadK3J5cx7p3K6sqQm",
  "key12": "PVH6cNoxdQL14UQbmgkyybYivB3rFThGLE1utWj8YBz9YN4Trr6muHJWvgDc8Xu21Ccj3FvZngYaQ7C93chXAYy",
  "key13": "JFv57fJWQ4SwXNisEwwcraEqWKknHwP4jkVfd4LyC8eSPz6wbVKjJv9pVHztjTrAWQutEgtC2Lmuu72S2Yahjpd",
  "key14": "44VUfRerZcq4kcNNyFrAkPvvhM913epk1KedZRQtm12jw9H2Ctk4YwkmEVgxPCjdewPUfPcQqxeHqdvL1UjjPrt5",
  "key15": "Ah3aiZLfjKoKKQay1GV9rWhWRWVfDWQfx3xh6KUYn9svuG6Jj1DacL8egsU6xnck9LLL8JQt7f9P7cz5N52DFMy",
  "key16": "2bwVoFB6gfnZ8WPWs63XJS6cycZNTqBqSZ2AzCxW35q6Pk2Yp1WGGzVHkyyMZgcFS1QgsDm2UQt3Kr25tkz96CBR",
  "key17": "3epYmz17Luo5cF8boVy5XwaHcDJV43L5HaKvdD8Pr8KoAYruTccHnijbeAEadmjnTsE6CGgeRRR4LNuZF54PbmpT",
  "key18": "4BXMDCdNppjEW6PgyFL8n2G6qYfvj6EcbnJMxnFA7PC4WNfSD1rxg7xYYfWstKGoJqjqqL1MefbExfXKRSFzT7aG",
  "key19": "3VFvprWKJgwuBoFyZLgbcASXFRxMgCsnfQW2nuC1b7HsKzak9LpcsF5FiAUDcX5jnstx4bEKD1RBMa7VMvo4yzfd",
  "key20": "2NdxtC9PRd4T6dp3z7j5UK1Vuhv2pGT3g3dgZz9DiqvR8djuHrfztaEkdW7sG7myqsbRWDycNsGejFR9m6zFX1Nb",
  "key21": "3NhenxEGCDwdYRG5Jixsro2ED7F5gBQeoKArrDE8VBewqQU3hUvL1CUsmAF2MJYQiKcZXrKkGLBgiG1t4soQcQah",
  "key22": "3BkAgUraMaV63ABhDsECyqLjdqwHnL64igxkvtzCjz963Kb7hqSsSfLs336q6Bqwjb7dez6w7vdtoEWFX8Sad6o9",
  "key23": "3DVxwgeXgnQES1Q1H8269M6VVEnArYadnmphQdxKsE42vvwc4KYidHmriJctSkHLGQSKoNeHt9CBB9udPxGR8J19",
  "key24": "45L75ykApTRygAz3KCPdquhoFN8inRTk5PuKQDj7sX3Riq1Fym8MUxkv7B8NUCfMbBC3i35RiLbgKLDgcBTxeKqe",
  "key25": "53M3ubiFeA9SqTAbAm1nAozuSx5ZMv2576CvjJosgG6v8VJVx7GQjewghQCdj93fHZvQqgMz82wgc5UaGYdnTnws",
  "key26": "3vF6cjDXYmgoy1N1WacVrg7T7RqLtNZvBUd6nsSPfA4fFdZDqKoKH24carxyLf9YZn9w5TT3U935BV4hTVMcjizN",
  "key27": "vTQ41Dpax4x6b4NemGsTraGsGbfN45BGWdKALkoC94faKZayyX4Z3rTGz3jzudRehSXV6zFcPLfHR6uJAQpvNGa",
  "key28": "2ugbJsJWE334b6TEEjc9vJBqogAARznKeQN9kzYEJXtZr1xmonTR3F9xYFSv9HykJfJHJCMiyEV8HMSmQfm1LQoX",
  "key29": "3D6Nb6bQW6XNfyvLrK9yorkuLYx1dBN5Qigcs7ArC1UhoTo45GvAAYFza9yfZj3XbY8DG5bWjQ388y1WjFXtecFA",
  "key30": "3hHbY5LCpncYVotx9sbC2ptBBMU4s2bBja7NN6NU9pViVUxrd2zM4EMaYyH5FYkHRb5EyDwTEvYBiEAeSiqc76S2",
  "key31": "cDMxcU8SP8FQbG16X9DbzAVbmg83LG8BwqCqYxAUQ5riqEw881DwvG8d4cC79sDMYgeGX1LKdQhA2QjhsWRDELk",
  "key32": "4vNuBCnEsrZZ2jFDnuTQbXLpKzS1EBzXXMg2MoGQJLmxtCLb7xLweZXYag9uNWpy5g51bivvxwbLwvrzXWuKjqc9",
  "key33": "4w5PyTXr7SGocAo35RPZz7sBKnrDoPts8zJr8CeLMuo32qYkWDtNoUiecftk8HXkmBv1zDtBNaS6zgYY8A8rtHvu",
  "key34": "uux1MxwzuPJK9iJB1VeQg2DdGKZPZT7C6vcZzfqHepYesongoABGki7qGxrmY1jBkY3jqMzXVp1xoCnBWpWPvQL",
  "key35": "24nUW47jsNJF6cAUdJ4evSoPfDGTMJ3NDZPUNWp5c1aw6nVAbc4cmMP31X8LyPv1wPzT5DAHZKC6aqeemABmRDXa",
  "key36": "3D7LorM3zz8EF9Hci1ZBExufq9uczVr7xHkCw7fBq22u3JcdtcU2dJAdnm9fxDxRUJehCg3j5v8BQA3tDPQyvpYH",
  "key37": "3F1au58xFjFybKGxUgeTybdsagyJTpNuQAAU1DDPdLh5dTSgKzJ5aXBEjn8r8oFVzcNZtzq54PM2oUvhgDHqaaKL",
  "key38": "5jXDqP4mDA5KhjzcnxgVcv6vvdEbPKiGNHGaMxWMExS4rnRmqdtGaBqjiHGgFXhPKW38NwCLMzfKhBmdAZyjXkPn",
  "key39": "2eNgju9Vbhnj658p2qWcDez3EkZpLXBaQAn7T9igtj4L8Ry8qWsAD5bx8yScfBshk6ncxdcLdp7mTgC5s39egMng",
  "key40": "48aBAGwiULo4cCbiDjfhZev9X4i8kS1oWBiYqfTwKsmb5gdyKpsPkkrJKJhYeS863rhop4QHaKKCvug6j3sgFQP3",
  "key41": "3mHbfyX1BfaFBHZFiCnjXQaXPTUatCNYM4eSETM2G47hheUARmbbbMwGCXkparZQhSjY2f8HzbMmkrUaVeFofj1A",
  "key42": "3N6B6aWWWE5eSRqkScFzCMcibzq7TB1Y2sKPHoy3qAeGzhtjCgQvEpFc5Gfk9fn55auSaA4qNSNgi5bvUC1vuNTB",
  "key43": "3NMA39uKUXuRVVcvAomv3er8rthybvxyT7gRHskxrirZF53vpyUWc6KHWUw4oAXjPDPHpJ46nMFgzUp74rWwYRaT",
  "key44": "4SwNrD6WNLjugoMcQ3N25njur5pmqcP2BbpJo7tuPh6MghNjYkCdCSEQWUK1vbn7J9EaGWfgKNqcXUy6yZW7Vsht",
  "key45": "511wnpnd2C2Uy2huckDoMBjnuAJuUdYhF8a9SEEZYv8dNuKdNqwAf6Bq1a6fTaS2Bcyk2nPMjqEAiLLD98XyF8Wd"
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
