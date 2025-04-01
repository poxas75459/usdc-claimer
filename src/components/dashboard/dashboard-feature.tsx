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
    "5YHDSGfnq6VdKhpGKYxD9xFfQRzaBKwRDgK7ro2DUkFcdjDLNKDFYVzaVmKhrcnZT5hWjUw6kLfsgRZumSQ3vSJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623Leup4wKUmkZvJ3JjNATaFqVPvSfA3R4vjFDqypZPLK2Lk5ddk1VtHMg4hsQBiWwbB3dueZyQknZhKuraoNFyn",
  "key1": "HwjWFonGndHmHnBAxGJFE3Dc2UR4XvAx8Kj3YUnDPv5tNeAzxmwFknbJzyeCkpYZgW6xqcYTduuYinHVM3RFmxs",
  "key2": "5UyQEihRSEmGJmtK2Sv4gNCrQZHBEBE9xfTv6gPDEpHG4WB1yajADrbT5wP3oodWvxvXHEb5grSGxHxSjnZXy9bS",
  "key3": "myQxXPS4duXsMiZxuw5vrgc4ERomtiaQfUvPas1py1erWJC2xGELDRusD3dG9M3PaaJ9sZ8ya5vuEJFHeT13Dhx",
  "key4": "jRjgdfNLfxWRfzydPjf3jPPYdfDEfXb8HRfdaVEpMEGv9r4oYT9ZdXz7TDUjYAkazsqmxhNFPtMWh8DA2cUEJH1",
  "key5": "yDozjKrHy5TFMhWUrszD3r68U4FmAkd1Z8WLty3UrpZZvzL3rrT7TBV4iYzNLhs41mmiMP551wFiPQ7gtktoZrQ",
  "key6": "4a4dv6fz9bqZDQn83AbqsjhcXv3W1STkP9Jbz6FTaQtpj2D2nhrQfNVzf38wDCQ6mbB3azo9HCvA1nHzLbG6juuS",
  "key7": "4mXfeNa6NBD142pZHETJoEeaTVBhwddSgvH4vZrYuKtxAAhfMqejbouzf1rK9FxJoDYDDeyNSdzsv3CDE2pebmCn",
  "key8": "5rd6RG2ttHsJTPsBCVZcNv68kNAqzumZj2Vq7okUobKdsJw9cDqXSX5BYS8QkNqvMMbKibuQFRDANigp9V7sMaer",
  "key9": "22cwXeanwZHhRken5MSgiQi7FhmxddKH2rGzVE5y4UPT3MvdgtbmxiT4WVHpczTHQpwrCAULE78piugjtieU96RG",
  "key10": "33gwBKEapKEEQuP3pkkrSm9iqQSw3YscEJQwX9bTKtMhXUAJ7mayTKmQq4Mwige65vs7iZJeCBfYHTBmLbM8YJb4",
  "key11": "616ypxDV3rAqvbqirx6CuP4Nz6PHEA9SjztAaQgoiDuHML2hVC8kB5mh5dTmX7iznLnBSopcUtt1AsP91Wz6P5ce",
  "key12": "4senBKa8zJ6XA7sSnC1r568F4xGotQ95pUUkbpYnNAaZo44DJGkhbKKm5R5ZFoLfox16UdxwDiR1xzJptwLuhdyV",
  "key13": "3uvMkUHnBAyK1ooGFowAU5geAsqA6sLR4ravcwZkRoHaRPHgtiMyiKrEGzMXmbiw3maXr9CDSheCmXtWJsF4j5Gd",
  "key14": "23ucSo23H51FvuDugGxbY1YWQhcq35y4WjKR88ESXmxPHf4gBE41sGZuq9GcBJX5md2d4p1cWqsL3hASd7AQPvXo",
  "key15": "2W96T9xTumGwpytmpfF5sDFEARXVB57WKEMvBQqB3QpFfg41e5JxAiTHEhxLDeaZUVGmwMHEE42TgkSs1Qe6hoMg",
  "key16": "5WZ1Y3eyWp3SCtiZH7UuDHDEHQP6wwq1dxLfuA15ivSxawPJ2wMJXjtGzaCxr5G6ukXDG9Cm3sBcpPLbMkBHVcec",
  "key17": "4RLLmudpq96eX3BSd9wz1P6zXEUzwC1MbT91ShA2ETZQoXmBqzCodoaW9NgLq3upGKfpKzpKXVHXATL2ZQVyeTfE",
  "key18": "4kb8UmfPw81f7iyrkuPSDfuJBd2asa5dLr4MFRrATJiYEm9M36zN61ipefpQsSRKi6sivPsshQX8dnvGWtFGhMLY",
  "key19": "6Qnqqy7c886LPJo1G9tqHTraZk5QabFpeXMU3XqxuEbR8Bn5JNpTcWrDUvG198KXzgtnof1PCkjBpLLAhCVkhnY",
  "key20": "5zJPJwaLetRZLWJc7SMqHYkKCsxnGrWYC7AL6gPhB3vYTaAxyaoLQAbEHvZUeFHYec23ZaUPYd53H8xNbkcybEn3",
  "key21": "3WtBMM9UASziuj4CcNExrFfmn6UMcnvDsUVzBKVW4KzZ5NShM8AqRzPkTf1MGD1qUdxAU5o36qBkkLRqsr8AEF7t",
  "key22": "3YrP153DRhBULynJuvMxrBk8AapvLLtjUzuZfek86jrYBopBgF5D29x9sZ53xcZSTVUrmC4f9j91C1XWWaXFZsPB",
  "key23": "NKibbPwW6x27ppmcDTFforC6ro594MaWzP8yC166N4JejCyKpGT1SSBfEjJfaSvGuLRx7kasPPPnHgtw79BatCU",
  "key24": "gMiDQmBk1Zi3v2BMD6jDo1vLWDG9xNYxjw1znUHUej5EXFnWi6cRdGW5bphGrBjhkwvoWuUBFhigSbWd8zSLgXu",
  "key25": "3weuDmysfju4yQH1jSNX3eYf6FfcNerVkmhEJKTufxctnc7xLeEqX49VjBkSpUY6WAk84ABymTMiyQ55vrfFaFPG",
  "key26": "4jRJsebJiDZ8QXLrMQLjGZQo3HgFfu21xBVxQMpRN9wjMPq4DFENSB7KAz6XUZMVEvxTQWvvBAMcCTr1wDZRJMY",
  "key27": "21fyDtBrPSaENt11ZyPyDVxJ1iPLnSzrqKJuyPvxKNbrWK36612giizNddXgNq3mcv3YEwRKXEgWxwk8mURSuorM",
  "key28": "faKf3gUNqUopRtd61g4ScD9KtvLLqpe7Bn13eyvUF2sHkmxAuJJTi7L95WrStr6hwnAhxr9e69P2ZNiDg5WLAq6",
  "key29": "1L1RrnNkJtJc5QTcQwPREjidtezXHPm96zT2mTscNNLk12z5Q7dwTHw3dsryJwwwsqKMmbotoZijgno2QFWDNo3",
  "key30": "4kQWLyffqkinrJ1qgoHoRXxyYdiuwnEXXmvkZnBXpaMwnbHVRbw9e2UJ4YsNPmy51V98xyDaVrbmxAFkpW7D8NuJ",
  "key31": "3Rsvxyj6R17YNJfb12FEnmg9pzTA4Zbq4bPeMRMZGo81qmcogRTJLRGY9vVTLHfVXqf5tnwP2VgSdUHxspbrvtN",
  "key32": "2NC2uQ4mbXzexGwzCBiEjdXAosLJA2zbkCDQychXJ9CUSx2yUaM5t1A1tx4fhmxHa5pyNmU8mLwgBPMMiPDqyWJD",
  "key33": "XYW3SW7csV5M4d56zUECxFMMHweb9BZig9uBXEuAS8ec4hzvzDY3w2yF5AYVARt35SPNkMqo447Q8KdU4TFDZqd",
  "key34": "2DFGg9ZwYWRhN2TFWUjjC4g46g2966qRGCKR6PiodarNVKxezWTYXE2onMznpuLSAnUu8spzq5thPLTNEA9yE7Um",
  "key35": "65JuHADWaXgP5xW4ZYNrmeXf7jEot59a9Bg8NqzbuYCbuJ8rtL6orMB6ZQH7rsnaHx6B1tmemzcrp3q2ET8LJAGz",
  "key36": "3StAVMKD4DBv5PDGG3UrRGchRqFJsX38ZtqBEN6Kw4MRoTH3TarYwSwh1ZqefHT2EvXw5u5qzFfw2JfmrPQrEgzn",
  "key37": "5ceG7noRzKqPbqYDZ3CMX4fkuXG2qHr9gRdjEhTKw3rwjsmicjFKFH76tizcKaW7PsMFRe7fH34PfvP6NJ4rcDha",
  "key38": "3nzDrRAQpE5EPB6xfNkcSdsJJbNJG8QiHj1Za2UPu859HLgYkVF1t18xjYMhWur7wKPWpNqKe2ngDbck1CjNbP7b",
  "key39": "5WEJ5AfaE1eLsDXDWvZRGBM3nvaoNh5L939NvbkAb9sn73JdsSbsvAu7ZMA6mUN4SybFWFp7gomKZBdaNRa6UzsS",
  "key40": "VoeehLqXZD9XfxfFnQLtye3349NKrrdKjYxRDAvQLRLgaFymm5Nnvpv4zkN1FKHyGaEFZeMZBCAm6BLiaawkRGN",
  "key41": "5vQYNuo9itSFtawfJWZ9VK6yNNYyAHXWCqgB7KumYPdyHWksq4P2YG3iuST1nkCAijZLYBBhYeqtDrhtaLs5KeCG",
  "key42": "3Vbi8yaKuvyPLEf6sYW8JTRQAU8Vmnq5KQhD3FFb7QVX8Z6vHGPvDikFD5QzusbgbDv8hDgd4KaY7coD5otdbqtw",
  "key43": "36RtAHwyxUpt7Ezeq5uFJDW8NofUcq2rRCB6NvVW7Hf9b8gMtjruazB2D4Byts8VibEDvj79mTPpDcm1KyR9jYiU",
  "key44": "5VNJXJtwVSAoLS35vBfgfM1M19pc1qQpStKXE7r8ydFqi7adY3DaYQQ96BXTpGbde3QwcpTJkkprbhYaiQdxd1Da"
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
