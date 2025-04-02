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
    "2V6ii3gEyZtnjvzj28iKHUDTkEU8Wk9BRhfsDEif9EAPnvWTQXaXpyiRSkk3rxLyNRiju25z6ZJqtyVmJ4wTrMAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rnPW6dt477zdF6qNh8MZt2NtM1iTrg3MjkoSE3cJ2rPQBa2Ztcti3TDxL7wPn5UXPTEuof2rhPGHVYJABPvq5g1",
  "key1": "4CNfzTwGKyQiwg4ND1nMHyyJy8qzi6qLzJ5KdSfRjiPdusxeLZygJm1kjWYYW735EgEBkWdsmK7JNBA7t3adbV6q",
  "key2": "4Qur6tvQyX5W8NTqUVvwbMzWpNdWe6tgNcanneqwF13kajAwyN5Big1PwnTUvDiDJHZCRewxt2a6qe8GsQaaxf3q",
  "key3": "4NLdb7AyLCogWsV6gZWj8nhy8byuLNhJ674v4jftMDwiKBDoZ3erJLdqMCKzYtQieViHHingVGf7irSRNXg3q2hD",
  "key4": "pYbo2iesnjURbwgacicuoFQAJDsmrn1ACZGhuqxs9qvHrtaU81wy1EYSQaaDqrN8nsBumwpvkyphngTzmEShGC3",
  "key5": "4WTcYGt1VNy8mdETE7sT5mGXtBmK3oW2rmCyBkWwcMcAuW3qm67TDQHSHUbLtQT54LvjrKRyR7KDrGUCxZVqdVgL",
  "key6": "5VZhsG1ubxV4RFYugXktsT9LhE3j2kCXowVnTTCVEJjSt4fvVvMUEv9HFyHPVWzt8Ccr1FZn3552WEksSuwRvmd",
  "key7": "H2SLuzbBe2GfdPezQKUc2Q3Bu16YB4cE2g2uax1ncErXcVZk9FZdWwGMWwpXowWUz6aovrcsyMcnp3CCq9d2cVN",
  "key8": "obKtifAmdsDDSYdHQ9JArEm4JvE6nygyP3FdvPVu91pymdQKWXzsjMhU17ajVmsCAznd1kAQRAkAV5cuz6DAzgA",
  "key9": "3emJyjG4gQHGpPNmKNjwwUcN3asBFyPDMpshs1Y5PQ8b3nwiQbcGhsJphqQmHuR4LK4et5amTtwPHokerY142uDs",
  "key10": "4RGTALXwTQunDSUqqtKQ9NBJM47AMwK6ycn6xDLZKmxTuRe3p1ymWT1bHfNssLAP881G9iKMzJuKk9pKmhpQoX2F",
  "key11": "5bdX9q7dH53aMzjoTDFCzsxj219ayRoGAwgm9tJkPJqgAS3Etxv7Ued13yahxyCoWd5i9KX3Fakv8LZSwBMj6XAU",
  "key12": "4go8ydpnQiDmDAKTYSP9TrEFiexAv1mPeUvwcY2W2aWN8qMxRxw78UXuuSaVE6dXis3nYJK6dRFCdKMiqvxn1Zmi",
  "key13": "ojsfGMZxcNEP7FCoBG41ZWYqXbpxrMFa36uCrBjthWFojbH1yBdE8fBydDn4b4L3y37CLtQWyKtw4e2xcegNhuU",
  "key14": "24iPkDv5GagxsXzM2x19zuUJTrxF2a4YWZVY11wnrfhbqtbqepWZkRoGT923akx14cNw39TQiRRUSKkNnvptQf2C",
  "key15": "5GVabik5EDUs8w1Ns9zz4HYs3kZxPHHzGkR3VTmAENyHHwdpygV4WPVh9hNKAsPRnP2Hh7T1sz8kES713qx1j5rN",
  "key16": "2EidxLSEcAb9WdbZHQTXDRGQSoptv8CG23tF1awnJjzZKQZ9mBcxtGhxuf9DqmXnT8uZ2pXSYnRmJDwzVht9vghg",
  "key17": "3TQeqv9DU6RucQfMkdkQtbbA8ysZmctxnoQfZQff9zaatGvtgpUEBforZyY7RPU9LHjzHfKPkh8hhVUwcqiYKfKV",
  "key18": "4FS2wZSSWX9GPT8bg6a8VM1G1J3UXV8y5PzFjSStKvFd3YEEYhh53BMFxdv2ahciwAUMN3uH54v17Lu6zzb76Nj9",
  "key19": "3kcbpso7iMftiyuwrrGhxkwT2B3pxHMa172hnbiLTkdNmJyKtfxw9EY4qhcCH4fS8i2qong5tjdK6qbyL95CyqLi",
  "key20": "5jgSmQCmXyKY2kdrU7kmfwoZg3XvW52mEsB3kFpBdWXTrkWGs6DhUPNWdrKDoSkBYXsWDvR2GNWNkcLJ6Wezzbd3",
  "key21": "55V5X8EwvEyKaGd8HaLMHHkKTdfY8G6qXDXu7TniRt5tFXTK3Zcu5ST4WEjVn8RD9n9v2DshTaNLCd1hHhqhgBNC",
  "key22": "N2h7NgcT6jV9vC82aerhG12qjQ8Aq1cmUMeQWd47piY3B9yCQgWwAS1wLyobWCqeGGdJTqK3B4qK9BvGzXeqH3p",
  "key23": "63reBiN2P17VmqVg8URynGNvvGgrFmeAb32koXzo3XKT75x1rG6QFUFhg3TJN2MZKXGGKJcVFgZ5gKnSv8wDd5y4",
  "key24": "5G4umZuo75Kuu5cAkWFyRQ9KiKtMSBuDMhboVEN4PvpfgZnhM1cyYwmcwSzqbHNitCbp1FX1mzkqDbxtmNXt6Aei",
  "key25": "gqXAzejoeDCJ1aqU2HhY3atFMfkdoFn2KXxx79gbjgLvRsG4hLYJ7nWutXZvh4FAELMxQRoMvYXFJpg4vhdEkYw",
  "key26": "23KUjgn4GM3rEpqhguC2mnNTyLjqPnpuoa94zzEgeNf3PB8QkBPd22g7BdMHcSA9xwkFSUpuE4b6cXVy7cWYyuvK",
  "key27": "fdSkLnF25TgPQxituZSKBYZLQBJneQib2NKvMSDTubib8Q2K2LvZK4TpSqMBc3diqAXVnGu4LEYkDbhoHM5rFnv",
  "key28": "8oVyedP9X3xUxhtXBKqv3bDige7RidzjyW5yQsERaVwHxk8jXBspHX4hu6RQhNeXSEPAegmL79SNB3oF5nzFk9M",
  "key29": "3kKKM66TKSeNop94omme8hdwADf1FmcDZdiwm9WawDDYxBpxT7wLLEomMmgmpTyK32VmuvPcC87uNoFhLNSQDGQo",
  "key30": "tZWNQyAFFa3TchRxfMFsVqH6SwChm9r61BoWBYPFnEo2RA4VBSK22h38zfs3x5fK1H1a8ZyhbeZh5AARbbcA1xK",
  "key31": "28pCr4KiB95f6wc63sYMadRcqJ84Z2mTtJLYwfssRP6FRfbJF6hNDKpsq64Qjhs325sLkqh4xgoqHtMb6m9ZAPTB",
  "key32": "4Te1Wp3tMyksheYiLCHipRcogMnifzbF7NhtmifDKSmxvyESNSNGkDXmJicczAExp8xL31g7KBYHfaSFF28pyyR7",
  "key33": "WuPaThsXY7cDauwb4Xsp4T8sinJnewejoYcJu1H1obRA7bm4dxgjHrFbpB8NKnLGCBjKoTm7d9kLVrsF1oGxF9m",
  "key34": "4VxTUuQNJiyNuaqBVJPKYQKx24hdq3AhhjyfT8gCWYaF7dGpQ3Y5fz8pcp5LB4wwBM6XF6cnCykLh9HGw9mjpEDZ",
  "key35": "p7iNY4rU7wZ65PqjzDrkx3m4dHtVAFYGj8mLzaK13EWLQHjMN3RugS2ZV7Qpd1cyQWaojcWCUb6J21fx769B2id",
  "key36": "4T6SLuSVTejj8McLfPURiV39AsM5EZWFf5V2dgyv188iTcSQxjyffNZNLGFHkvqgbxWJ5Ame1wpFf8mfrA2KmXtR",
  "key37": "25ioPxtSu2KXbAUHJYtvT9GkwjKuowhPir2FAobfTdKNyNYihXyyaA1z66vSFmZGBgRKg27jn9oG5woBVY7Wh8Ys",
  "key38": "Jz9TYZVpWMYoAzNSPn1BczHfAGMGigV8pUtbDtTBR5gXuYmcSvSbfDuRD8kLkpmFta2SWmnXY9mJSNWUSWqSaoy",
  "key39": "3qhe2FSmH5a3bnFiT7Kz77QYXkJVUkZvn1wqZpHwnCU9VDYsQng3z2CtPn3RuiN6uobCMBNYf8biqzZP9k5qF1jC",
  "key40": "T2YtBPQ4zS37gtBBQtfqM4TLpb7YXyaFXW6p69CtriGqHgqnasguKE9UrjpjnhFAgicaab9oxiSMonEoPYbwJux",
  "key41": "4wZVVCiW4znPYVes9mTao733gdxeLFa7UcEt8Y2fEMHdMiQZzmENB4d1gx1hwXP9GtJNDQm2cQvxpVPRQV8PTH4z",
  "key42": "7hmHTidnXH1WogXtqazfoEoYzPcRhPsfeFJatyyMdqZCH2oF2R4WJzcuzT4Q8VSLpwhx8eE26staSkycDfiKZ1U"
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
