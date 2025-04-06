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
    "62U1nMcYw2qqA8gqhunNxb1YYojwbdfqqYKFSxuEUSzfBARFvod8LirSzcGKUe118f6M2BRo2WMy8u4bshepQQaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TT7Y4VXcoHjLNV77QtZrqe8VEf7RhLWSgEuwTw4em1PvD3wx16WmVV7ezSkyeadX2y7o1zFTsGvs3Dp5et75uwU",
  "key1": "663G4nwFs8LAKMqP9LSh4vdSMN6EGSv685d6g73kVoLBz7W7XBKF8GEPjjRkf7yc6rNtRNNi6df5P5CmooVMD6E6",
  "key2": "c4E22FvUbmhQ4F3eXgApjczwwKMoP9aPAvPkptzMcFsgahUX5MRWnwUdRXP6YHvft6LVLK6g7qiwDNUgG4jL1Rn",
  "key3": "4BoS8ACwZfK5LbVS1ZNfMg3YSZqCCiR3aYvR6SPWig1mEM5EMfSuZV2VghGb33uUf9cGJpXDnRkNhY3tzQu4h7Xw",
  "key4": "2oeAozegfYFZuD15s7k4nYPM3LiX4bu1KH2mzXDkBqkzsLTwG96W376DUaFXyi8EStTdHFTBdsnDqiYCJRy3KQy7",
  "key5": "dKgDWp4KkDw4AzU17Caehgi29UKazb2d1iAjhqWYn3vbudJVC8f2fC9unbWfTh4Tmy4GvdLWyv2HX3xGspPd1UX",
  "key6": "bYS9CmaWMGRJU7kV3ayiSF71Tg1pSFL1fMtsHQDufkdrTGpcta9N1vp3b3XH6EtQC2pHjpHjpoWZswCSBsBNyKs",
  "key7": "3MKHHR4srnqmzcGp3xCo1Ncrmg6FaDXcPyhRjEAYH8jTCXaZNQxgZgXpV9y49Y8oXMcDaL4Vwp8cZPfnKqkuxph9",
  "key8": "4RHrqUUkMFk8RrhPH1br6cesC7Sz9KS3PSEsh5KJDz9rfmY9bK96DXegYKokSQVxWfjH8v4oQ5eKCNPN9fkCK9tU",
  "key9": "28wzHYS3GqvyXqZHQrDKDXfkyNTFDVCV28xVmYu7XqYRna6b1Shfjn8F66o5uzkTNL9VbDb1aoVbG1494xWZBFer",
  "key10": "2Kf47hK3tYGxX6NzwruSbQmdBcvr2iKHpy2gtXMXprGhGDnmRAGGdnEHt6L2VjZNKDDiEjTGDzxJ8CNBLf9mTZBK",
  "key11": "nvF27VsgeHoTBsc85YuZZUcyCEM2bsQkMb2xMrcS8sJJcu122XMKPgnW9PNZYk1MczEVq69EFku4zV1f7g8aSpP",
  "key12": "31vy2ZY4pfvWMQfhwxDiMqCyVb6ccPrPdn87MqVXF1fqfhbHTB3PwDz1QBb5dMH9WVoFXjBps1C8uHfCTPU46kz2",
  "key13": "3jcsscrqfhnUzqmxGQr9zYRpDcato7PfZ5sowmLoxTXPWYbNZqPHW3GazbNe6VwUBnL8vopANSsnfSWZPZAKmEo4",
  "key14": "5nroxPYNAh1mTp9WPtHxnBnsCYbSPouRaRXrGv6VsaBiNHdRhGboL79EhhZTmbbDcmCaWZTC17bqKV5xdgqED7d",
  "key15": "55QAtmakDNaUY7SS3qsjTwWyL38uoUFCkWFAgboo12kcm8xttsR3BeczETdnYYXvwdqyhmu5t9W7smj8xFruzG3y",
  "key16": "5hUBSUQQoYDs1yawX9YFZ6E433HyexLVhds4p1xjn3HSBG9z5HQkcyUiWspW6RuJRDTKpCsjnrwiVe2ehuFHeZ1r",
  "key17": "gB37tQThDhJSRtJ1TULdznbztqm4AGDs9XdKjGjJtugLDmE7MSmwefJnxBs1piRok9ksF4pecodfzbhnkSwfxb6",
  "key18": "4b2f17jsqSeW5YNH4LLp61iMor42ofiQEnR6AsDFSeHM5hzGgGN1D7dHtdSf1ayaKP8EHmFds3Nx8JzGN24sgRH7",
  "key19": "5aR9P2gHNhLePioTPje71g9TwMWVUkjJivqvztiucatxHTPr2wdYcThvCc68Te4H1uujonw4fYMC6NtLUwbrFBjs",
  "key20": "C1Pyo5jPs2U5mZU7yzjAFaVMvrbYZZzAaimyqJPtjtbvMNW6r6VnKzGtZKSRRBJBq7vs76nXHccdGHUGm6BvAxA",
  "key21": "27bwGUQzeabw4Di93PfNoRUM7JrBzdZpbTG5kLd59FfREF6zSfZTUit1LX2kxAkcKFHWA5naG7fMb1xDoPygNH8V",
  "key22": "2FNGZNXZuRVHGogetRSLzQiKVuHnNzJWSMc9xbSR6wvYWtChiQTMb5doYHk7nH2zsH9pTtkAcBePdRugiDuNShF3",
  "key23": "4EnHGer7zbVabpWn9XBvkSXwcmq9kncDDShYykwtdZtGH6USnurqbprZointwzm9qG2XNTg9mXBtHJeLSW7XXatq",
  "key24": "2ZJMTpfpGSL7TpCTbecUEEX5GfnNJLdRVVx3yGxDbsvgrViWytmjE5RVmHGQ2F5TL1eWujTqftHZgRgnQXq3XdC3",
  "key25": "4GKmL7hfJNEmgHwTXHARungq39Za3a67yDVuCrswfJyrpe5PjrgBxH9mRQCe9xJoXn9LA2jBKVYLZFfCcAu9FiWy",
  "key26": "3eYPSDGzTfWrqNupaYeSyEhStoEjSkFeB1o6hR9RL8EE4eNyU84QKKGa26h2PcQAxV6kd1XpdqA1hYUjYyeXK9xx",
  "key27": "5p2jBE8Ps6RP6mcpciN4JbK44dEG9Y37dxUAmFtFcztzVZ31P75kz1oFKtzVJ39fLbN4iBFBZBgfbWzkZeMh6Nrr",
  "key28": "HzGjMCVySFZJ6nq4nXKp2LDgiFSbmR9Vr94JRDKTAdEw6AnfgQDjyJFBkNrjbaiXAXk8nXNFooggDERk4PQqWus",
  "key29": "2z8U2PskhdA4WTx3Vc21yEEzbFLo4BohwMpDsBcJHVMZQaiJbSGU91iA5ta9KQCyd8qt6q4Tybi12h5Qz3dhJjUY",
  "key30": "5q3fQgb3FKTVEWVS6Yp3e8Uo2qn27ucKixYdBYERy7Q3FEDqNRfxdH8Z86y818MbdLuVjgYDY4FESmrYvN4uR5Z3",
  "key31": "22LMK8s5KCCKjLuQJ5JqGPh2gLwYPZXE7yzj5ZLeuNqeNrM7F4boAY4Q6DXygWEANbyFqCokGTepLneFjJXrzTc6",
  "key32": "5QuzheB9ZepwD9ek6gvYJt1JbUj7B29trgXjQwgRdHJPEtBuQ5WLuGomAutP35yxXPRsYpumQxE59DN6Rjf5GDRW",
  "key33": "2CkPZvoW52ZcQco4QRVWooYfTeLhzLB52hTATTj2im5LEumPNJmBJeJsj1aLyrhoyT8V679NLUKqv1v1DQwhJ2oa",
  "key34": "2MJWq6UzSxMPZCjVebqApAY6sXvKwCYbjQMXcRTmt4ASrvpS54uRohcRbsUNpNT1iAvEbFLkX62Xi8sV9V9i7Q2U",
  "key35": "5oSzDUeag56FerppeJuAgcrk1WKYrsqeiMMZTzNmg4zupkokfHoqYTq7wHnKCVSgD2LunV8yZQ7Fgn5MmYRdgRy5"
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
