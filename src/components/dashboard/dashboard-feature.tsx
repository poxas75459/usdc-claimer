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
    "3r9wxraRJYAa9N3rcyT2fhjfjqmy7KyLViCVpAEqHhqj4f78jxPYoWoE8Ws3iBB7vaq4m4THvXLgtbdHNgdqxf76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhoLn4FYvMzsih1RcBXHiJQvLfFkyqAYVuERtiEnCDSGXZ6JeyAjgmPuxoCiqCD5PBRADV3ja6157dKJGWb2mCd",
  "key1": "5hCC3R8e7625JkPYKoicboLcTw1vUj7czciKYHotJXGooTPcGRP3SV6K9iNtSszXjawariVVAXM89vPsAov3piqT",
  "key2": "7JVtLmF3xByAtoHqKaLc3Ws2oZzUroLQ7uaaaWtASnAV1y85oBA2brho4yVFnk8VCcbJvPgD1vZUKU9ScLQkoTn",
  "key3": "2wBjs7YwCJ9WtMqkXqQpQ1MSfVY5TwCjMo1pRbrF9s9qHmREbjJovmEXmLVQRoH7kZdXqW36B6BpixA4kKacSUPu",
  "key4": "3iegcwdKsW19tN2HXTpXpznBHs2Z1o6NS3tAQaK1HcXiKXTSVhp46r3FidNjzn1syqowbj9JwtzNjrL3uqDA3RHR",
  "key5": "5SD6VdUgwxe5MmPUmMCqh8RZmr1uK3h1gBKDohgVhGtwQqy2aoQuXiUtKPQiKdusNuqnNJNda6Bi5C8z6tKpBRqp",
  "key6": "3tnABS25PZs645jfBunbondo6VfxWYsyUSX21vpyD1yZZEGRFike3BF5SxCY2nidFakgC8RxtfzbWEnk4PA76BMG",
  "key7": "raHQ9jJWJ1GbWb5SNeMTeesF2LdDjJfFgEQ2f14QWjbhUBKTdWQnyL58kmGFLPXDYuQvM5dCeE89waZUY7RzWkt",
  "key8": "4T9Faub13gb1TwmKC8WntUV1AnMqmSTJvTXinuGKPRFJBYoR7Q6DcwFi6YhMb5o6GQ2UnM8M4EKMrMaBwpSJD98M",
  "key9": "2p5syZX4YUjcpz6ECbiPk2Kg2tfmj82KXVY8XMEWKjHC7CTC4qneTYqtLat72d5eWNaQK6rjpZtvG1xBgQgopV3d",
  "key10": "5mz2PbvuououyXYRsuryYb547ne1Tb5ab2HPBE8dSzp4aCXf6hGdpDR6vnDZFxASCvdVZXARTELPsPufS1pkoQYg",
  "key11": "2fuV485vSJ2sDASG1etcHHDk3WjprN8UKi1pHViYwev6LPv2pfBPM6SM18EcXGwcn6EGvpN86i5FcnHH4WFUaueH",
  "key12": "4abq4kmnKFoTUwLNUowRYnWzVmjU2kDWnCGVSGnkLYQ5dMzeDEKNmPt5wuwVnWwrbALnUS46jRHWYACsTHGKDNno",
  "key13": "22oEuDKvz4dYcBeBnsYS1S8cx8uHnfSKqvMm7yGbvDbBHJETUT4o3vAsGBeRwSQDJ3diSFEVh81bhDbUcRcVyUcL",
  "key14": "4fWviimJUtqtXwDb6c7kfXnrjPgmZRSQgCGcVVi53uoTeQGyREDGG2XCm5C7NxbxgmS6LdqGXPyf2k49LXgQ8xEs",
  "key15": "5Lf3toDs8rhLAXcPNXXUyHgTQZzwFU3JPbrCdhy2xLczkEiHrdpbg6k3x9ey5kjPZhWqNCic94JH2GqUEYkydr9d",
  "key16": "3DXp4p17JjaMKRN4MsFRboccfEWMdqurYn8x2T3Zv5QtForh6rrb61mRRdpyvPJLN44XviSrBKZyd9Tg3HHGbeZJ",
  "key17": "26WegxHuanKJMcdw112mecELwUQEWESNG8wYEzmomXKVzy5psrU8KRjH6NNa3RRsE3sByh7poshwyCFNCW1XeA2W",
  "key18": "3D79K2P6dHFx6TnT3AywKgBspjrU7SEKZVRcgrMwW8MqcLpdoZg6FvvbWgwQsGRbu8DmmFWtBCMGPYzxGWn2Qo2k",
  "key19": "4vxQbw6AU7vkei6Yd3ahEPdhh7xjJjsmtvXJ2wvYdnSWxw4ZWJkg7NuX8nnZzMDdKWPmQny5xAsFUJzxHKFSPpWo",
  "key20": "4jExTzJFjvA3y3AmYW61dLz1d85W3jfhAduT7vU5EarfbTjJ9DAtQ4s6bqyQY2nkRK5nkkAxRwsnAhBPykWx9N4",
  "key21": "259Zk4TZSBtMREcbPC6oG5egWcnFGPRvB8f7gi5FeLKPt7uRktyUhmpqDaLqgdt6cdrqkkvBtLerJfFBd5sfL2p2",
  "key22": "4D2J4zbWrKVHEho8P9mpYv4pQFfMewxWsVL97xHviGcUCayVzBkVTyzW7PXPyaWSX4TwAjPUwDQQ77jXu6jyp8L8",
  "key23": "2REdCeD7vokjGDfYtSZ8aNBeos9hV8yiLzzbFuwKwYooiJjfnABNxjYRY8JjsNY7jZrw2KmXsXGWUpHXmf5nhyuN",
  "key24": "2rgXFKckqfn5DgzpUbiLbF15doM4A33CbQ4yZUEY4EpwdtFo59KqvjD1R85f5dFqUY9a2WciDxn5hdiRdE9urR1W",
  "key25": "4Led3ifjiFHhBtuB8EdevjpnjQ1gUabAhCcHyPDZuZZ9VMxZqhp6xtaLFRpQWF92bRu7RD3y6FH6YBgbG1LEH4K6",
  "key26": "4W2U5sfTK8eGWPGR8x3cnMzApNxmwtJ9FN8VLR46ubAdqnKK5SGPFhGyGWqtkdk6Zhe8FEyoVSK3aB5vMgXX7xAk",
  "key27": "3hjr4qG9DFHAwbXECLR261xtcD18MAA38K7RU3So9wThP1ydFNwqBUDyX7RzUxv6WeyKsgnAn1tAEM5S6pmtTueK",
  "key28": "3NLrSR1wLfEWkMJBX33Szdiz7MYo59EP5ZgvKcBKWz6WcfxAkz99QqrNsvZXfhgLETFPyWFxPfW1g67ZEC5AiJzP",
  "key29": "7n7ReEebpRKyuG87a364hmnzPFfqFV6ocTGHcHVgVWuQbLN6Ntj8hKHu5ueb7WZgg2YfChX6GwG7hjjUfpzgp5w",
  "key30": "2uq99wRvsxvyQ8GmiPmEcyCSmcJsaPmaXVdwypib7DxLRBQdEuScKn4jgBduiQhXunF1uUuyYDZacqvK3fbnaJsy",
  "key31": "5EfP3SYQvmgxmjcRngrR1MTmZmQfFB8vju9CqizgYjeJZjXqL5cpjie7jbapLA1GwCnMMgDYjnEA2CNd8ngHoaap",
  "key32": "HThFZDPvtfkyaikZ5wsVH9i8smGXSiG85eHGqwcub5ZcoHUhFVRgFh2TuwQaXDMwpD6qKJ2DUjZ2fwtWBqPW3zN",
  "key33": "xzJ3WAXxzbHoZC5FMs1Zt5nmYdXbYmJyap4h34gTyqX7ScqG4JBhuVLakkDMtVfA6CGaYaD9T2ZoXnLyNr76Jtq",
  "key34": "2RqXXGdaYWkqDXhh8PXs2pKUQoJfwDZUNkqL5xPrHLFohzWxeTUn8NHr16cTeLAYmzfhPs8nAg5ymHYPPC5xhJ15",
  "key35": "62EGE7kmq4wfbvCsZYXnL1Bx4ViF1xqzx25jqC36k46dfi7x1RGzjqTyqYkGrygBqnYWcWewt9aaLxk9th27i6T8",
  "key36": "3dQCdJhJH4PWB6b4KjPr7QKiVmCnTKME7ug1LMqLFpmwBfa2QTTmmWcfiRfWwQoHhkeXrj7zjNEiVxAcKPgvy4Uk",
  "key37": "4MqAHpVLRo8aLWsCXzXtd3hDiT6CpnQqSjDii7EykUXomrF5W8TGpVsi1RieW5aubD4aMdzJKQxpexSjcFR5NUZX",
  "key38": "3wYmVctCDxDfsGkyPPegRriGeU6967Jvf8m7Gnjo6PMgF4mR3pqQfuP5aSyKmgF3r3g5ANyVhSm74KVJYs7CSShR",
  "key39": "3ycHyECYeWXzpYjcX6C4Ex5nYsuCnXJouJf5C4T3EERN7tFuhQg8G2VmMUCV7eq6TLJTYCQbGCvKudwXFjsLrdcC",
  "key40": "4cZNHKFTuRdvGEFUKoEX3muBs1QMxuCmkrjHb99jFGZtaBVrzkCyBrcDSXrEc4xzvZeconY3qWJn9e9b3fjdBWmE",
  "key41": "2fgBWdTSXkpuocZ3H1usKVMXgnqTb8vNqPiyDVs16qHyU6h68ATHidHCkRiepJe74PvZ7nkW25KMcZwigQDWGXXh"
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
