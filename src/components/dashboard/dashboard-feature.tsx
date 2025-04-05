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
    "5gw8nXiB2HNc21jvfcJ6XRvi4E2QZ91esUEB3quknyPZbBawdyYj3fuB4MpBEKEmcFobvRapf6x6YV66xM8TCF8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbJNHZ4pokpgYeRUGX3z4PwmwYhFGvgQcpz2wuRY98wcUx3RMqcpTZa6nw7hcUwhnze4t7C1we6o8Mwz85kYXxR",
  "key1": "2e9pby9NrdZhKNq276qYaC5R3CjE9qqURE87c9vrjsKhofbUULmP2RiNMjcJtVLgRvybrfJiM8c4uhkTCrLY5tb1",
  "key2": "5zyQ2xANRwrsmQu1QpPf2UYgE6rrjn5B49MjLVCefz1TSm7Ys4yQVGjzYJxSoU4sEURgn4dUi4evgZxyndpYzsu3",
  "key3": "2ACuShz39r1t3vL1NKjsNkcwkqcmmuuqLKBHN7c3JteYJsCc4nkrAxhd5fAhvm6ZAzt1VpSLu1pzBAm9BFxRAv1r",
  "key4": "2uhU9mGismpA5Q6bmfohkUesyfU6ms1xvuRi9GAVyAmxC6QzcZJeUKjrQc8QSA46ir5DKnayLu3Ftz8hjUMJXmfw",
  "key5": "5DfrnyobQx7d8khoMSm1vakSdoKTbRdMUyqTR3RwPrhdUrsjhJ7nVJwyy1BrsJi46ni2yhnsfZ8Qu2fXDHPgJFts",
  "key6": "5vNbv3Gf1QzSgS4ykhepTTD1CHPP16SnTAofxRYuetPQKfR5n3FYEQziBNHbYbQDKrm1RGi3bUYPkZpPfukZAgJ6",
  "key7": "3fMgxkCWuJ5MREgpLoYBmmUaKfCUdpvTAHvKdKCZQs5yrJn5G7viNc5pvCbX4QGUZY69bv1jQqqrFsds9w1u8Tif",
  "key8": "5BLnVTUfHqY1EQjyKPRXntf1bBRhM9UYZ7MCfm298opD1rgt3UbfsfQ9oSQ2q8ABcSahBKnKYC8cauhxRQjnJ68F",
  "key9": "4LhTjsUzg3FeqWoWESmjE1c1JJwds5CkEdRkU3xQAvhRvfCtqd7P7AJpt7f6RvPwstRqL1R12TuBsST6LRUQMBGH",
  "key10": "5485JEUEtEb5gkDqBonE6tEmZ2xVbxcE6nHeMxxCTW9EZGVHKfMCzJfS6iGtiuvZjAifMT66PLoSWbb1E9iR2YUe",
  "key11": "4upCigg9NJeHD23zWmPoeDDxZbyLu2mNbJGuTJtgcUAi1gwntrTEc4NokkMNwxRm6dYzyCYjGe7A5Cm4YkNmKGEd",
  "key12": "66rmbcbY1sTRH6eEi3qP3qs8v7JhNY1WWhGmkzf8YEGv6yADtoACqtkXk9jXGyyEE1MtHeghDECFBVfLDDSiT8mv",
  "key13": "pww38NRts8MqTra3e6DKEPdA71qTTxH83vMgDoQ6QVyVJXizdBwvXFBmgNcj4tA5x6s8pNb88Qj6sH1svD13zTj",
  "key14": "2rncdnG9TMfnjGd5ueAdAkiES7es3sjAf7cAGrYn8uVYbDdojiDnr4hGupJXTJBeiWzjoqus6QYeTboAQm5eoh9G",
  "key15": "1sX24YbL5SSRN7drgvuFGVqBYPMxLdVaeXdQ6My1k1zq3SwiZ7nSft8z47EPZQ6jbqCjxvHBcHXGQBHnT3cUXZx",
  "key16": "3bx8zsUvyWCgygEXqTjLh2VP1dBWYi9g7u9F3QXdh22ZZvB11Ayhw97STDh4VETs9aK7fs2roXD7E5RkAkVtbokk",
  "key17": "2XLT3jawEx9uiUYXzC8oEg6vLGUps8fK35dAX12ot8Aa46nPz2tiveTY5fzAHREzsgBEfzU6FWpp2bG1X7fdTyXx",
  "key18": "fCLvqjuYXmdeCvF1YQxt9TGFhyejvWeomCFwZdcHfEy9ZXfyLmDtX3fBP8zBYsfJ6QzbM73boHUKctBTrGaVMfa",
  "key19": "4S9W1jLfuX9kWUDFiVuEV6n6pYwKFBSD353L5xLyraaTmWHRn3ap5rXFgyoN5AMYf9HCfng5CZ9hWjwLKeoT8f92",
  "key20": "2WbeHdvq8KLPZusSXQZDnh5rQdJsaHfUgaje4AcsyXRrqE5ZYcfjZGBc5EEFdRNNj4uEYZ1oiKbMN9sUboWy1S75",
  "key21": "3iFixqGW3CdB9at1qmwiD9QRUaV35Q8JYsn9HXdvX4Pv5p5xpWFTi9RUFn1WHCkHQUiFyqoVCwtU6LNKJqAFvisu",
  "key22": "4vXJ2MqokP7bAmRgv2xtt8HpJwLkuWS8SSGeVRkMuLUkkeHebjWQXtHo6J82SvTozSJRzkVNU8dDJtcr8aq46TrN",
  "key23": "3SeKufwBA5WGp7RSeWmWKSs1JKJkiB22SHaG47TRUuYkL4FCf3Z7cgGeDdXYKkwd3YJt1DUYyse48MnxzsaSjNVG",
  "key24": "5yZxWDL2Bv43EEWyNiFLCUfPgEQznnosN6TRsALuaygm74qLcnB6wz1N3tKpxGGQWgeasg3bAkkMAfWLrjKEfceV",
  "key25": "5sD9zxq5aoGZdpb2zizakHsdgM5emtsGuKcXexuLevwsQwwfxWr1JSDCdos4PWh5pFw5soude8QE1Arto2gU23Qw",
  "key26": "4EospDtRCU349PdKN99tcGa1H1pq3FYsuAT1wN56wurpoR7FQu6pKzSwAd1u1831mv2yc9HCADz9u3fXV4Av8St1",
  "key27": "3SibrLM5fa6urHNmhHZs7B2deBF87n2SeKAAfieYdWMzNGPmhFC3BJMTMvB9xg2iyCr2yur88jfdjjgCRdJzM5r7",
  "key28": "3aMDvpZvZpNt5rgsy3sGxZqg9zpRNnXEgNyQLPfUwT2TYUqXe3p5mooynjZ8xbQFSC1wMNFCHXUyZAM5ieDB4bBA",
  "key29": "3W4Dp82HC7WsboE6KtwoAw73cqE1Afv1hd9ZMKvTtXLgMdx6PDtp8mkNRDhtVK9ukVCjcbhrX4wp3cttkcs59pxx",
  "key30": "3WaFhY5PoeSQVz9yo9FyFqbN8xsFVyVCqDR9ymnTQ3yN1N8ohTG2zdpUg42r8EWqkFhALVqPo5cGDq16Wrhu9vG4",
  "key31": "3jDJ5n9ntTSBLygffvQkDGBeTeSHDQcHyRaFKqAv45CARbyGeCs2BtNV4YTVwEXh242XgTKuLwQM9k885eXUUPf9",
  "key32": "5BtSE4sq7RvPBMdPRF5JAYMikjcqrWA36PoJUWE9NuG9zXidWRy3jUUwYnowEWjQxXJMhgpcQVhNJcfG5AJgxJM9",
  "key33": "4D8wkQE5Q8WsLPDV4sSgZuwnEAumUHMkuq153njD1SaRpfx3ra6HbZACfo9pLq85Z2ZPvLHCyPJVk5BUxXYomyL",
  "key34": "5fLjZAoG9xoR4uihbaRNjC1crsgXmsT3dhRGGV5ovEwEWaZpNvZjbzrRonHx8Wwn8q69WsQ4rCKH7d6tCBFCMVbH",
  "key35": "3GqmbDpvRcYtVCXVRP2qeUrQobLJghvUrxrucHMzhFcY46yTujW4d8Tvo13kJjYGoDKYMUew6xGMFSLkcy7V8fib",
  "key36": "5ZukpjMzQfhtUXChZdw9v6nBpz58gwkZf3LZBpcnQYkmYZbWj2B7MuT9qUNnWHXvx8f6qadWDzzkyym5Lfbjr82t",
  "key37": "4BL2v3S2KfNXrjgn9QvZ3tWXLjhMEj8FnbmGCsKE7ca6j8ygqGBjih4THGPDapRkqeSWaiUNBzczT2vv5kGHu2cj",
  "key38": "58VhvXV3gJcaGMoA5dM6bc2t9EKXrzCkjJfq8pEbLH6Kw1jYu8DZPAJPS1wmKtj63wWP62hHoPX3kBBPEAbZ1nas",
  "key39": "4oFZeVHr9cLTRP4XknfAQydy5t8Hox7Q4KJrak9TWVUNojXirnPNeg3NyrxYhu8CzdQdGgTE986AGjUm8Tk3Xy93",
  "key40": "2ynL2xpW1uPBPsWUTBS4MvWGdK4TvPEqrhkbky8L4cNcxWh9dBZBzpNcBN8Pa1d9XJNWDYt9LYkzsi7CnFVguDPH",
  "key41": "PCMEm8Tyx636hVv7Kk3Vm2VBkeLfqhvz588gUo3cQxpZsuUdddCZ7tG8WtH9J6Z4C7Mt5T7XNkohWs656K4GZZt",
  "key42": "ZhSGzLPwk1qD28NTm6bQKin7Up1PEcdMVTz6DQxX7wkNuy8WDQ9jxbY2xetwdzZD4GgkE8CWCxVNawZ9EaBvgCS",
  "key43": "4isdkMYJ25HU2LwnbhBuikJwbzoPhEoiJApQdZx13dHzVDs5nxnTmtxGt3dc1bC5SSW4rfZ6xvonsDWy72jJun7U",
  "key44": "22eYhC1vrxxAHak9VKTy8mSbTVocbiXiZe4A6T3dZUZxZyUSvJZcv2hJTkTukEn5hdaPJC9xBfni89i3Dm7H8vvR"
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
