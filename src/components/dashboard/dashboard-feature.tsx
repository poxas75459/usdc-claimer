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
    "jTNCdQPnJHPmvnzjBDCSZTohpmcAm2F57UpUTykhDSv9Y89V3ahctK9AiRamPT59mjobeVdBcyB4nK2QWry8umo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGHwCstFee7CuRGAFvPxaK9D7avov2BbQWKkB4aoS2mmwKpawtb3XNeMTYsw2JXb8qSBGR194DmkM1WRrsJ2cbP",
  "key1": "2hyzqcJ5KMTz1td43TFfcZktYXHwoWELPxeZrbHu6U4uvibvSeRVHuzc8PWR2w6zXEKonRkK1MNmn6KQpwwqzKC4",
  "key2": "45TDgoEddegq3d9brJG9XAR3f4anqV6pqQqAUJDvbBpYQRdCxNBuQ9CbV9RRFEAkqr97wMpmfJawqo8KHCr26Uyg",
  "key3": "2vDw8un7JUV2w2xSmsGJxERa2UbwBtHti3wpNXwGnabZdC7wGFYUHQWymsteECFyYAmYvkLg6284bYuz2kajqaC2",
  "key4": "5yuhHUX4id6h81Q89FPjUFVxjNhYPtdS3VQWX2BYwth2LALmq6PjwP4SPYJ2tb7Cz6duBvqW36L5uM1QawZ7PrK5",
  "key5": "2d6JSpu2YFogMMJ5dnFRYwMaGeTPhT2qRTG6bm17LYsbzQJh8XzntC9a8geB8VmWEyDitSBBNdTt4ovu26DWbKGc",
  "key6": "5byorfd3EXKV9nBMZsnMHjpYLynjdJBJABdTiJH62Myexp2wxQzSQxSHajWR5RevknNLvLWSy5qXEEVa25q6Y2Re",
  "key7": "64GFs9Uun1iSbosi8XU6Tae5486VAK3sdSZPPtLJVHPnREphbdTrnRTP3m89HpqM1Zd2MdDuJaSHsf4KwwPiCXDj",
  "key8": "3TYPgk5WnC4XGTNvSr9XbyMy65t4uXr93phTTjv8ucCKipEEoHduf1CWCRKwhSvUC9NdYJczxXQS5pouP6oeFoQS",
  "key9": "43VxSoUZeJZTpnoxFvQecbi7ftGHZbBfHXe4w8WEvhW1hYdApKzHKPU3GgGznnwJxYiwY2mdS2rQyBVxf6h7ZUFJ",
  "key10": "4ZHRTxQctSkEEsVZ3bqxnrcNTbYP3RTWMqNQ6D8Po1RiRgmfAqDD9MoPbqSaTDmpXDjycUF7HkKQ9vBNdaX9mrYz",
  "key11": "2YETxHBxpmzEH1N2Gk483XDSqxufYhwXJs8H5TVYMpWS465naXzzcJbMCU4nZ8EaiU4jGaqRyeQn9PVaZSJmqKDP",
  "key12": "3gvxgoG5DqGmPjRKrVFijLSEd759FdSAHLnKXt5XMJ7Mxcb66RrqNX4MGahNEPbaNLyRaaWdk9GcVAPW1w7ptgNB",
  "key13": "x3vZ2nNJ4dBPTzVr6UJWY9pk7cXMZmszxnZ6reXNhXodSgKSAQivoraWZUUPQCwQTV94Vt6UqkGY3AtXNRx4DTb",
  "key14": "GewkLypUFhzfEwewUDm1X8ojc8r1NLFXLx1knG3SKVguwKWakoJHEm7h1Zz2sEQQZFutrD1jGfKwfB4mjyQ3kwg",
  "key15": "4Q4VSJccssRPAzwdeSMRzdqQZiHZQZS6vMCRCAG8pWx1xCnBst1NKPESn7DErAJA3uNiswzMREABMR3wTKWVK5WV",
  "key16": "4amrNsRAAiq19oZ398caniVmnCArc4LsmxBJfnxuhXhFYhU6abEcg5nQfTGPu8V9BG1ZSK2toJtsPtNT2Jcw6nMJ",
  "key17": "5VsFYadZ5eSwGQmeyaqu2MPRTBqJH1EfcvErkDG9XfU4sJoAuDTgqYGaodVfyvdj3DqhfPtanFBBLcWMimeF81hW",
  "key18": "3BjLx6JCN39NwuM2DcxR7MCMwGGvf3FK8NZZGf7DvAY6fHUMDS9RakhzrxGHv3rC86rBzgFFKfX1qdMjbTteJPPF",
  "key19": "2TzvJgRgAVzZMos4HW1KzKDHet9JtSiroqEVYWwpQ45CCr3Ct3Frrdc3Ui6G1pqaRZFhbBuksNoNkoxzG3zu7ipj",
  "key20": "A5KPN3rtGhzEQceoEkZUZLzLnSUBYtsqVXU6QPQrHEcXqWnUrEjAEAek5wMUGs5AvKwbVgLhA5HrcGApELAnQS8",
  "key21": "3UxcdXL7vynKBAD22NSyjNKj9U7BScauMwzmvP5FMRBRWiKoU6pWQXpXHJgjJiGn2bFae9zLxWn5eTKPbFHFHU84",
  "key22": "5mBteCJui9TqVTggAjRfVfAPKyZpCXKSQ6AnNRjn2SxybCrdE4bn1H6RaYwC87nT1qTHnD4CWRX5GWcTPXrC323F",
  "key23": "kHJF4eyLKhoXoQA8ui1EYDA6Hj8aVxMPHSV6CfJ9qhWsVX3nVFaBLuQnP6bmx5faq8mDZuyXa7o8JPEwo6q53Go",
  "key24": "4f5nDBTn5dpUdx7Fe2RwnppRcSsRTdCQMH9dmAQW8sxDKKunmnSJPRnp8sxAUoicm9UB1ieaUbWUCUMH9vqF5P5H",
  "key25": "3QouStRPeXsiMtrYowSeokgaLnbMgtuqfdxbM42nXx7b5Q6yVAF4Hvt1j4RqvvXmJZ7aXFcGQX9pGw4hHCCH6bp6",
  "key26": "22QR4smDeqJxXChMByk4hjxHV7KSLXoMnJRrQHVbNCii46BZ1SKzhBstsyaFa6WDP9Eit7jAvdDrtbLALyDd6L52",
  "key27": "3TUYuvXxzLgMf4mRn46kVDdfnQwQgGbCdKLgefP9aYArWAdLevU1GfyWvNArwibryPdBNj8maUo1GiPJrD1iUTqk",
  "key28": "35SGKNnQruP6L3ibcZga9REozVeCZ3E8kaTQLZeBVk9RpxHXZJiiSDZKqiDgYyeZCKdEMrC6KSPBZ7fJqRsv6zuF",
  "key29": "51eEPP1VFrwK325oYgwFJzP1bG8fzeg4Th62VaLDsy7qe3xQ84NRi3oQpYUqoos9PYnFMYd2i6afpg6d4XJQvPcr",
  "key30": "E3TgBgP6VDyxrTYwGE6vBekxhgLVGJVBJ6HoU1uZ9PsP4fDLz7wokMLTJezB3QKWSWmecjCX5YUzk82cNAn8VcT",
  "key31": "2NWJwfUywNenPJdar3ALVMbm5JoDTLJ6qR6AWCwGmL4EdWDnM42AgpsT2E9nyw9X6srccwQNiMXYUxJwxPeT6oBa",
  "key32": "4yLr1Z7pwa8rHrkAr83qEpazxVNvmJHmNVKDYYTG3kDLJ8hE1BFKNam7DYKRP25BxgutC45Rc6UzHWhz5mhbwX6m",
  "key33": "3oEP5jieKJrqaaAY4kHUeWrxcW1cHEij9y7EyL9aWppVfQY4VnGvefjxd5VmGY6KsyaVdoF3pU61Hfmkvvpupoch",
  "key34": "3djmY7fU68FccHLsEuEYxVtsZuhbtN1yRiYb4M2CwohgRt84TUYgQnSzdzR4gZUbRMBFzKSF12Ww3wdYGKTpHvLq",
  "key35": "3HWP91etjmPjzinTyyiPNJnHV2nFBxFi9D3o5zi2PmvSH56qegfEXeaKQzxY3GEoSEio9wWiMxt2GQ6Qi3rp2d9M",
  "key36": "3WfG8PddPmSiqHhskpo2pVReoRQUZaUVB46aksRoS5yihG7zuXxMgJ2wTXuXy3pu23k44amiXB6qZdsKuSg2DV19",
  "key37": "3MfuddQ16EXaLtp55JWL4QTQd3WetZYS6kpyXLJgAXdnyAtKymFGGadCpbyUMsB3UmNPuJp73PE5mh1nyGv1RaYN",
  "key38": "4m3sCWFfDd1zqRKFtXMhuFDR73cgQzcCov4t6ERcRmxRXc1pKSBXqX3nYbPCzARnLgaQyBbSGynn5qtcarSZsEvw",
  "key39": "5xfdDnsTrh3cnSxpKnF8AZjnsn8VQzjJD4cYWjuF9vKp8gqfnVsPssWJTXaxe3yU1RqKauviALpP7uNevRHZdUyU",
  "key40": "57WAxivwHqjq54aQFZy4hsxScPpnSzbKQv8XxKiJaxDnkjvabTZms3M4VNjS4YZfpqGsGyQXysiG7VFW1HyMeZ3M",
  "key41": "5kuumCa4yztTsecXL5Wjs3Zy2jjNHE3kVqcTEmLFQLYV4zxrWEXGTbgq6YTQ494JLxukoKKHJ6bHnhbuSSczz9Jv",
  "key42": "2GtME7meNozhEThkvwWEn1VoApQdJtaBcKGyxfXV6wPchJu4VHY4M7cFRoMUvdSAUSZEPkrbKRav9w3mmdAzLF6t",
  "key43": "3zsUv9gocPYPRNdyc9bEFikiwYSqMjdbT31CK7NG4HCXFVu2yvf61W7rvWQcowD5jid1TqaPLNekSA6LE2CYxthR",
  "key44": "P8g2uVA3UNrMWcKoZyYFWAS5kWE7LQwq5wUjmnLu17wMqNpFLorU1qb2baAAEw13A4mtTa8MA8qrBaXfzBfUHot",
  "key45": "2b3tQULwYuKDZzmY3o7JE5c9MKXQXuEJCJ1xDP1gfBAuiyJvAx4kLd7pd8TiGe5XiEXk7k1ZiPwUe7SibZXmxakK",
  "key46": "5WK4YFLopq8hmv74XtdDzVpNR4GLfAgm4HpW3JRgUySRnEKaA9K4inKkpFkCnQULnHfxfFYN35BmPQSYqtrbKhBK",
  "key47": "63gd6smkY9NULZ1GSNnvwdc5cWcoMoYHyJgoyKjbkkgTcA3gQK2aHVzzgKUog8ZP5beT2h7p2AffNRxf7sghJSoU",
  "key48": "RV3Dfd9nWvwYKdctoHTGNHpGFmS8oVzyJjEdbi35AZBNppiBHMctmujF2q6ypRkqxV8krZkyrWdgQVUMbbY1EWS",
  "key49": "5AARFSW1AEbv5bzWbQovZxVFGQu5hTZayDuJRzAcZxw1GcSu9tMQB3WRmrFY4cZDRhPSr5JBDLvj8C4UGrQuhWjp"
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
