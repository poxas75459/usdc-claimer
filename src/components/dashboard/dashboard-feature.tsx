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
    "5uWCgMCHyywc26FyS72KX8UdTWARkjrbjia9cVJQzxUAk6Tp5Ucbv1FNR3bVYayvg6xwo8TeTWDG83Pb4FharGFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pF7VwHCHqvkA4NcyWz5r6Rxr6SbAHMNqiNhqtnZ994TEL9tMxccW8FFKnX9DMRo8dAzbVHUivgCJxJkjSMDRDAo",
  "key1": "3MZh3UGVnVEwxaJeci5GxA2CMtiwpr8HNcfhj2Y26GosYTm7k3h4Lsy85jxBx85GZuSzYdFUn3zZdtTrx4TmZtFW",
  "key2": "4Yfzq1WKauzUovUDqoSohAie4i9jyZJ5ETR2fA1K4Y8sVCavJyeMVedGUNCQPU5XPEq4yHaHR5Qdt3KHosSHpWbC",
  "key3": "4cHtd6Wn8cpZfMbiUhTgnkW4ovYo1kyCScHJvtqaXeLcwLvNg12Lt6pd1gPrsVvLeptNXhmFJ4DbRnUnPywY1Trc",
  "key4": "2kEBLTMRSNTRe9mSwELHwE5dtvtiSM6sUYrpuC8pDVbCVFhhx6p6xg3D71ZJ15g87RoBHaNNWBVJ51nP8JAxwDsN",
  "key5": "3LrgCxczyk7P6y1MbSyrzTVU3EXoZtGuwWzB3EhQVpEZ6fa8vunFUVPMYBM1kqtgFAj8xWdUoYNKBoyoFm2uSpmE",
  "key6": "2ekLYetMHuwH5ukSWRZ3B83kyc3Sh6kthxjvQ84N5ddet7RZwKEub3cVENsj5UPtvBNENKqm3nJgaJPnj4UWx9NS",
  "key7": "5zUrW9avzALesTvm8B34ASZXipPR6bN1rJWhDYH3DFBn9vmucBN5j1akPzaSGwdCpNUYusdUS4c4PNbo5AAJFJUn",
  "key8": "2unQbvgybiJudyQadsuWM7YqbkW5QNdaifEP66t67jwcCEdQncuoj646hQ7FTnCd6BkfN3x9iLnaYpFDvQV4xBpV",
  "key9": "55sptpRqbycPRG5WYPfqWPqr5vhRXfwP5zT6M1JJqDiu8rZbUvxNcstZpMtJL7QvwT8BzjTbZoBFvRjuYJT1k1Ei",
  "key10": "2bUv3EnnzLsLiKvArw4jVuRtt5JgnHtdhLvT6rAYTNXoaJAZ8eoyzrdbqqobuoxSfqqryd7QfyXXp531KHpe4sMx",
  "key11": "5Y1y3skSHpmy99DB6vKUzV361Z5nH4HJPn9M74ifX3WhcjFXsFHwkU3eg2BPMFgq9aGFf3X7HzVo3zJsb46UtwN",
  "key12": "4bcV7jcp5fSA6ZJaCqYhsvy2EfMKe2DaQoUUeTG2pdr2un5EfVVWmLgKGpkb4Nzk66ks6R8Tvs83rNgq8yyKyjJT",
  "key13": "5JANFA1Zh36NQC1hiQBFPJKNdHdLUGW9P967HK8o3otqGMLfNXpfz1m6r2YjDp6UFEEmrKnitTwdVzD9PzcpRjni",
  "key14": "5JgJozE2jsNcGUtCjwVLKcZZ2gZcauamzrijwaR8Frqsq7g8w7qzkVn8Qdh9wuU2nJhEasPSU2Sg7r6QXfeZLT3U",
  "key15": "23RVvagsWaE81cCc7vdf8W3s3egEJLJbUmPdox8vm85cmbsbDa37NaKEUwLNBdzHHZTG8jE7riWM3RwV1W93trj3",
  "key16": "5rtGvQqJ4AYgYv6puYUBDTe5k6wCN2am1oZjxWbcDSwAo2uo3S8QvHMQhGdVUgCb1oZHwPWcy9VAzTE8pXtWddHb",
  "key17": "M44J5cReyGmUv7VdhZgQ46tdi1iVVSGQD8xAEZbYTTb2oJUBhhc2CgUyTJo6zYsGZHJTbCZRbZmZKSFy5pNUWVy",
  "key18": "4Fqmr2UpQLyXcBuM1PaZzH2CbQcQwoahTj711UwgAWzp2bSF32rfREM8DneexQeH3K2cdcUNjRYFg8p48YQBw6tv",
  "key19": "Ux2YGi9cTcyjK86vf1Mp3uRgs5br75XWx2gbzFDc7g1mJSkeBA7F2MXQ7XYuSiafRwUCturbaYGfNpZ8J1pobeb",
  "key20": "5Dx8VSgcNruvFBYP8A1KTaAbGoiD97nN5v3oWv8M5yM3BtCYM6xyqsMTVD11HR9xGSewJHnypiNpkDipnmu8wCY",
  "key21": "3hf3LWcrVHsiq7FGYqFwUVk2ZKHt4Pzrit3UgthS8ZP8zrjqGBGKZVssQdRKdPxeWXgU8ADrDhYfoVtWRiyEPB8X",
  "key22": "3SBKW5sPAVfAqd33kwpUt2o2tSEMxwqmeBWeQo9jUBYTiZMXf8QpfzHaMNNou48NkMjWxn9TdVxypukUhodS4paU",
  "key23": "esogDUn1ChH9sBfDzzm1HjL7boasLACf2jibCH6eHYYxkaonQz3ia5fQEQFAvVpnA5K5uZwnQb6zVRp7zNHqd6r",
  "key24": "4nQF6pvrenG9GrXt3x3U1b2XoTg3bipUukMStn41SnrZLWkjDTcBNHGqkLt7XEE9XMKUUvojpK6YKrUBnfk74PVL",
  "key25": "2reXTiRJjD9BzKZqp7zT5ei8JGm1RdwW9MoS2XrmCiHr7t46i3GJqdiKoTagb7uVbWLd3WLpqQtoJCk43TpwXQbi",
  "key26": "5BCqAbDzUvMvWfc2rW8fXidgUrPLQfxRwXAgvdV47wqtWPwTHGKiXQk96j6noJKytt1qv6ybiFHyebCosaU67EbE",
  "key27": "ViuUQmgK6AwR419KXS6XFsqx2uxzBnsKD9piSaTCLCBbUbpHPAQXs9U1JMkJHmq4yj32mizPE5vQHwncyCkwjYB",
  "key28": "y7prZHrDG29Ju6XfMs6tjr2WdpSTSCTx1MsQK6eDfakiNs22q8XM7QnRzHabviFcn4mpZ1C2hFNrTVBQFs4bUQ2",
  "key29": "5PuFKR9ubqZU9eiymB46mUdJjcVgzpfrMQGfkDUf55EGEBNaVcE9LRTMdPkmtq4xKSgGVdjNazP3KzqxzXGakomB",
  "key30": "2xFv4ZNT9rMd2jPJG11ko9jyZD4ZYs732N6ujXYoRZWUJJUHuiT8NZsscoaQsjnQG9rmaempv4uciBLFkamMpXUm",
  "key31": "Z4KJCHbviryovAe8sWxs9aqPHv4LEaKTcDA51edputuZZBaVh15RKPeAtqtyF2rfCyqdwWQxcPQJzgbrxF16zA8",
  "key32": "61f77oDqzjemCsSDvPQjGisVFEkau1vS9m17FJQm2fJy5VrCh5rRpANYDMWWunVLT9ZTPAkNrSMP6MBg3GxPQ9xf",
  "key33": "4gqzfBLZv76JscZyd1GgcTLHWJ7NKr4nUAwa1BbGqqvGvFvCKwacvuJxt6HDnx3dZkrr46bUE6PtXEcK8Nn2kgin",
  "key34": "4Dnis23pVvDgjYVf9UxcmrWDESKdoHUqiKWwdxWnFp9fgR1imbYZ99HzFhLuH3QdHSqweQJc4aAC5Qn5d2n8jCwJ",
  "key35": "bhvMwWw4x1iU8AE1Gju2EuuY3tZFHD3qVt8VEMnyELcQ1iqewoJJgBbHEeQowyi9whPUC8ByeiuJ2ycE1kf3nDK",
  "key36": "NVzSvM5jgv2kqNjkiadQm7vpoaNU17LNc7G68bUzUpPTTzwDE1t6nytdT91fKuuJx1gRoC3Edu5VHL6bh4tSsxs",
  "key37": "2KbdAGxCwwy8Uckz5yq7M5cgvkRdYbMjcBUcnz5md1dmvZtdFoEvYaH9EVMT32daegXNoQnmJyXR7Q4heffJNR5o",
  "key38": "3EWfoZbBCQ3z8wHB5LkeWV4xmBNT8VvuhDkoj4XJDoB4bnF8J6zQXqxvdXxtuuw2q9X6gbg9jUyj1YDX1wRzvvfP",
  "key39": "62wYYH771HY2vd99ghfEMgyGvU5wkTxNDz1pqve1kD1xVkgEWZcymi9e69Lz4KbdmZfVLtLEz2vPmTxrGkLXq8H8",
  "key40": "5biawUZjPNWpd6YADuwpSVGEqchHanV7bE579UbyCVxybH3b1Qt6fauAyzQyNUENBFvzbmwyaPsBJH6UY4cMKr78",
  "key41": "5U7E3bp3Mx18mRxXwXbNt998VhfnoiTSXGWoF1UF6rrNXMzVmdbqPyZ9rmXbbfLuN9hVfWkfDAZeRTMxxd1WPMqZ",
  "key42": "FL4RDH8onYH9J5MGTGEXadmouQw5zFEoZhyhm1ksVmT25R1qdXkQr65cngS9nPmo7mFGKYtMHX4CxCvfSRXV7ZJ",
  "key43": "YXV73kZZkPytzMXsW9mbd2V8nt6CsuCjrF2vjFhR51AqkXvfPudmuNKFTU1A1F6YzxoBDW35CBaryN7TML9G1fd"
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
