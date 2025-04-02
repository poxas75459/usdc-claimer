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
    "PMDxwp6JLJdTi8KfRcgNX29f3weAuJiGkNzK7d32THUPvBLBLL2QytTZ4WgebKqW8iUgsawYsFpHS7Y9YUH8dEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JF8ZgZvgMfWy5hPtk6sUSkEiYayArsh9ki23RfnvqGcX252cHbjChQMYNm4wCbRjDsV2QrgnPctGNLPYuvNZJ1D",
  "key1": "SPJxkz1Z3vmTJKuLDBXtVJMJaWw4RqnUSStgXGk8B4LFvYqKHEMQ7kDeDKvaG17SiHxcsjgwg4kkEmbpP3NvYeB",
  "key2": "2QWXDM52DWsoGnfFYbb8FMHNcNrMJqNzxHrUaLTXHbapM46H5mfyb2ef6RDomTgBSvKLjCopLPUns7QKaAiGKiUp",
  "key3": "53iQTRksVN3LLxtgmnAfv18sYLq57oSY7v7UUJsvNAkdNNQVrY7iQpMWYSxEbrnHrQiFXE3zFNoma93QdkcTsvYz",
  "key4": "2tWmBFHtYt89yRvFYwVADSciBhaGBdSafm1a5ZMSPiYNMHx12mKEyfP9XD6tv6xZAJda3H8JDBChRUnhKPnmz8Ww",
  "key5": "5kkcRomkEeTz4BbcxiByEwBVzbbHnXQ5wcwnmgH3NefGvSNqmgsFsBuXvMiXpxku6dY6s3trRrk43sbxMkwh3qzg",
  "key6": "5VnVc1XBY34whVFuSp57EvXxoWwo3rZ17DWJhxaybbAGgMsVpWHrM8gKHRnS1rNsuzVLqWpAJSxcYKy6UASKVZLq",
  "key7": "4xdP2AhpWg6PspkStsRuoBg1mYcKX8pHEdP7nMgdfPDEkqJRwJtETSF3wcKnbTPCtHxyArMQKz2rLiuDj7F9359N",
  "key8": "5N4fcFasKeNoNvLKcYKQMk8jad9J6KbvDDiyRZNeWD1Zjp7RQjCWdyQaVo9Pm1s7aiuDsp8dKXfXQiSdQiUwjPFc",
  "key9": "3SgGckL47CVztkuurtcdyrs6NCbn1W3hgbefUPGZ8RpE72TJxqhR3me39nvT2FP99Mjxz6szf9p5UF8uLb7qXzzs",
  "key10": "2hCdJUt8KXuxtqdbXiEALwnKX2oWNycffWHQhk2NReRgLsRXp4WJhVwnM7P2jfD6JEduBJDteqUjGYWFKpYWgqGx",
  "key11": "59JtAX3sM4mXBamihoi8g3bvU1Lu1uUi9kQtEMMjk2JMjeHw5KVZAkfY366pvgbvGJciUYf7RPNfYBoT31nzvVv3",
  "key12": "Zdy6bsKujupMiBjQjzgCsDacT24ihEoMDEoztc16UA9sE1u5xidxKjLG4D2y4fHKf6XD2U8YqQKZDNaR9tR4MJt",
  "key13": "5TUBW9YitvbidLP2eePanS1CHxntU5xCJEr7zuo6zrjFywMBr9nmjr2zJzVWe6UP6Ju7a4KxFrc8iExR9vxrrMuC",
  "key14": "2vRZW8YS6YzxnsrHkuMhWJ9xUS88ZbiM5joamrFN5oAT2F4SiTE6BEBgXQpMPSC883ZQkYWMq3VTwn75P3W6pJiB",
  "key15": "3aPHywCJQmuum1H4fo1XQyXYnpSyZnUez9iLfwLvSEJLyTyBsdtyubX1o4iYeE67W7N7hrX2ojBvDVMcrxVUer9s",
  "key16": "4ri3DeC5QRm4jE8bSBas2P7NgzXSwyQwnz9FU3oPqiv1rbmzyurmvaEGLDguHk1Hx8ghxaK3CniWBDwBE3P7VV9s",
  "key17": "3vT82VaUWhdMscNRRx3YKeRT1zShBSPaTBM3jNb8uCqPYTESxcLY8QeYuWwwFTomLBGgKd6ktuUNBFf4FzudwHcM",
  "key18": "2RNN5p5RviND2K8AR725xZ9a5qG5fx7yr8mJ3itwEt3jS98tVTDWmeygFWcV79wM3WUb5YmHkR7L3DyfWYkr7Fr1",
  "key19": "4251u1A9i9NQUQtArra6gSaUPwACtgU2h8UPWsTUUx4Et23QRg1ksEQK9vQomnEh97t8MCrcESMRjnkyGUyrBtqH",
  "key20": "2FqGqU6auumpsdYHefBaBo4g1JPijRAngJwNJsQg7gtrWcWnEHAJLGtMWaEFuHtr53ru6b6iEYjPzhB1cYwXMgy7",
  "key21": "3nJXhXP2RFSMeQvUoKGJiqYsntzzj1gchDumD2GAiSBTSxS27FiDshZamaaqcGXSjnZTAdfRCT5beTdTLUtmq4E2",
  "key22": "5s1rq7EjTtpnzzndwU314bYZ2wTkXs6yyWwrRgGQKRWd3HCFn61yyxTarcBjru2weDSwLWes6KLucdqxQFk2jZRF",
  "key23": "2SLMYTzAqG29DMpKiNRmotTnZc9mtdk1jF6uudWmDhCAWQQfkpErKjVeS57UAtqALjJsqGpH77d3hTXqc773dgdd",
  "key24": "3y3Gx66NFRPkNoZcGtSPNyxS7SVrEhJrVsTKK3sBKYjCi1xBfxr3ucPn7tNKzqzqtXSDCuM2cEpBU4T62yzRbPfE",
  "key25": "3UayCPJRVTExvBKHAZAz9dFPTTX7TKrCKaErnP59Bepr1xNfWn2mZcRY4re4a3iiw7xcqqqecb11JpxwcPEzRLTe",
  "key26": "5hKoqNAUvmnxxWqKYf8ry4kTk7mt6GEeuJWS7XDnLkzDZ5qmJNiGvZbSjQ74LsAFSM6breL6C2jDq7XP3tkoghXp",
  "key27": "3fFekekPcV8oxB9MXFWi5x9jxkiHJZsvcLMLqAaqxEwENfhU7XHASCUsvsveUY45ZNPK2aR5xMzzJCQmPYnSzX7U",
  "key28": "646FuACPZVaaAZu3K8bU9ACxqi2qf4pk2EFXYXzsPguG8h1D2taKniqfbtyiFpg5fet7zJMVzkpxWDyBJVMuAfeL",
  "key29": "3z1BNjHfVQftQjaALTVnoB8CvL2SJfvKLBA44Zx7fYVJ2WhHPnbVYWUo9hNsETqXQ6oeVUveYnTzmPrHF9gmvoAh",
  "key30": "127TZNYB9QeyrqXX6YRNbTJ5ZcVzzmwU8zNhAoTNRStU5qknVqvPNp5MadgR2kS4rWaMXYCjxJ2UzEweu7bYRxsN"
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
