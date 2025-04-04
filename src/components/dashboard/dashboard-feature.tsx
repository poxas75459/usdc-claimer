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
    "4GNxpRB9x5UoHbWSHV92apuiFJWZiVKh7zWn4yX9AkrNzxz6Z8mjcEnniZoWxfMvUjb3zwZMdBhPDwtoUPS3bn9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lo1eAfVQuhfukZBGhdw1oxi8JBBWmUNRtwcURE7WHLzjFgsCtryor18B1Uafsiyb7DHv65QGsJtL46a1ND2DVkD",
  "key1": "4uFLy9q2Y5jVfq3wMKZpdFtm2DtWHsQ4mjk3zbNGNFgSNX1fkF1dfBMwB94SGkHHUf5w1ZjDBDHh4ZRxVg9ZS8BB",
  "key2": "45BuRyjmRjQ58CkNea1mURaJaQtqxp3Tk4ZtKWFqLuZ2RMKJZtJTPoGk7saqV58tuxMxdVv1Z2QAJGVFUtB7YwQG",
  "key3": "QLg9C5DSCgfYCydEnsPwTr39WRjdeBa4utnBkMosBVTfUu3U2xX2xhj3ve5cBCpZfDzW9ZJtN3Wdsnhkiot3C4Y",
  "key4": "4UMpPpmU4nR8iSFZTiySkQ2Z1qAAMV4hP46M9mkX85Y65gNmKTzFjTav7QALG8rc6SmvSvCW9tzPBvDAQDeKKFQE",
  "key5": "49np9gXdZdRTNC7YdVLWQSWKYB4jNTF8Pb8qeQq7w4Bhwa45mwy9tAocJZZRQQpxrXVNrxCpEaYqme394znJK1Qe",
  "key6": "5bYNYXGd4jbumXptVEVJ4cVMrd4S5daJHf3u8yWsKYw5vvG4gwmAeZ6woGzbyRxkUsRDwhYacRWSWS94rcaGfTTF",
  "key7": "yp6LPUyUE3eZVrXD56JerQcGvBDR7fB5CYfWwn9yFR4VLwXap3qgq72m9AXyJWB6peKXoYr5yFofE481qM8ktDY",
  "key8": "2BAzNgvJBcuHLxGwtwmJiQSwnRK5gVWhxpRokgzdsYeGVL3i7UjpGQ4DpdLJTNTGpTxjUpTRjMSVPmxcWYuBC34e",
  "key9": "3H7Py57eFYKA2wapMo31NheYhAsXMtWfN6RWQxi9tCm7GADSLbRLEAufkTojmWoMAn5DZk3cDKuvMKa66zf2ftbf",
  "key10": "5bL8jYbYX2aht2T1u4gB8Re5df8C63Y7seNBtshVmQgGm5jEsnHerKjYFVcMrp7mKixmSGPviy46M14J1FmPSSik",
  "key11": "4FXxjnCo1TCqc9isKN2THXr7FuHvPneH14d48nKm5XujEzYn7V1podWeeRwvmbCteuoSVPXt7tbkySoxom7by8Xe",
  "key12": "9CBo2XCb9qeZWEVcbBxroatjL8bCbP3JBNG1jrDjfswevG4Q68mrJCSd9sVqoBb2yy4PKrAvKcouNcXTdAL4yFV",
  "key13": "NN8uZDHdFPeA1dKSCmszd3AeE4sQwoLPH41KrACKWMxTu1uWYZiQqYVvBKWEem59gpUmkUGiByNCZQtb7WHQ4tH",
  "key14": "G8mSLrXM53Quty3pNUiDm9ANR6wdLW91qTv9DKN8DPdqdX8czMb9c7HkuDqZa2xrkLRKNgNKBL366SyybdxAhNE",
  "key15": "33dUr1RLgJxgWqZWqArcymAz4tYWWz9w6hXTtL93K3cq36fszEDC4weZGJ2yBh3uvwgTsAa47p8Ep8h3LABDnwZY",
  "key16": "5mdCRhiVvKsW31Dunf7UuHf53QR51uurAFauCxVBYUSzDLtoGdkuMZdvAa6R7VKyUPYbh5Pzeyj69LE6ZxdubbvG",
  "key17": "5iKMtyumBBj7iUQvmqxu9fjr8cXJC2euTECrCVWgF9xZ7See6wDCiDQPKXRDZhaBXSWSdgtYZvBQuScv3wP8TPtX",
  "key18": "9pqkmoXxFnJTYvoFq1EN4DwCj5TknWR8J2kTBqMkFtjhEGGkxNPAF5RcCo1SQSwPN6SUqQqipWMLsJJLX3eqyys",
  "key19": "5fcYAWJXEyePEy7MKCtCxFvyVMZyxCaoJNvipbtMy2RjY3h3YF17mq3CXfn3Vta5PRfed5VYuc9PxmZokX2qUJi3",
  "key20": "vhak22qM9Ce7updUsDrZbaNsaChHmh7sKYTYrf3B7hvkaxbp2W3Zjhk3rMCw1mDthfxieYaTnF7c8YBe3ThgVzt",
  "key21": "oUiWNo1jgySKMwH8DkS5TGHX7T5m5tXDVfXwu2fNxhfMc2VeQBqiokYeu6ecNvJU4dbLnnmZBoLACT8G2o2XR7M",
  "key22": "3e9zyJSiEgMmUy1twvLByCrXaPhYjsSic4Fth393YiPeT9NGuJ38gxNSQQygbLBiHtps7Wm8rn7JXkzjv4XzEphD",
  "key23": "5HaotecKMrG8nyPq8p6NuHorUEjD3wvv4fosSTGfsxKmr5xCYXq45wZBj4wHsKHABCzTzeyo9FbF4JiHWzM6HB7T",
  "key24": "49sGHkArsYiKJCsxfwFPeUBzGXt4FuzZKay1YxDm1PiEf6sNioV8LWwWTNoccdgU6ftBpJJCE59YCXt86bYTsoCq",
  "key25": "3cR7Dvu3fnq326zhViKvqYUa2bh1MmH1cnvxauvm6tGoGYjj4oR8VPeQZBDAGuchEYm3wYoGZ19tzWcP8saWLZgu",
  "key26": "5a75U9QJNVGL9pXZGZZRAt3wr7gVCr5zgSBZjZeJVevAPbKT6qTDzFCKqY3XV6pRvK9wA7XrXY8AR33hXCVak4tz",
  "key27": "64CVxn4hXJEWJitJ5HQfKoeBDF4T4cyetc4maZzByBghwYt1cTP7USuDpZQ5eFnqYPLZGANvw2HFbyjE7QhQXeDr",
  "key28": "3achSow6x3XWiz18TaijaEThvGvZnSpncoAw4Uo9VBjGxotcBCuhK6U7uxwrQCZwkmjDL5e3h4bidnazoBx9HNJY",
  "key29": "4hHQmzJQBxiMG7mDRB9Huw5kBwvujXCgzV2L2LD5cgAsaXjAjCEnUqQ6mZuEJnvE4r3k7oY4E7H8XidmRXMnbrXV",
  "key30": "58FHJMAMdp5oNo9dPiNBhk6DF6sKFXTYFCFUEYFf1dXLpjmyymwexmgRzmRa2sAuDMmkMKeToc77McGZZVmhpWAy",
  "key31": "3cUPMepuiBMJRSocFYAdvcoBuJRDM1MrCwNihEiTfXXtzytmbRGeFoEwVyWnvf6Kx1P85wrUE4Gn9jaqn2HswZwG",
  "key32": "29xeFGQxFEhxhmjL5fsAWmHsFHpyVJRxE9GHnV4NxwZ7ch1mvHPHGDiev6YJSofLvvNPwzwFRwbGSjBXfXWqDMtn",
  "key33": "ktptJWnVXRCqPm8JWBhix4MK4TcTRxxeRycWbrCSewjQio4SME6RGqNFYRMTiEpNJ66orJiWvLnGe2bgbzthjZ2",
  "key34": "2PmpYWhvmHWBR8Xpfmp6HT6W7oF5Xry8hn9d7WJyrgn9zxqatJwvPaAhWw4CMvUEGuBHbT7MmkBrvRsRctmZHqor",
  "key35": "5cCE4ytkReTGqpjgLdebubncMyCTVJ9E1ywTkp7nSxj77WXTSrJerCm9X2N6CvNNXrRG4jxuTAoCNNwAP9ecMw7t",
  "key36": "2rJgZM2h9EkVqP41uLfkRASxNCyY1yB4dfsoKCTNojS9LhMA1THShD5ih2wmfGCtgcPLNjpUjZmiJJ1HAyEfdLdM",
  "key37": "4BSWEH8JfY77nojqW8SAJzhNjDQqaUbwNGscX3qxMsV6HhNxL7n8e5xYBA9VeYAL9UL7hGPV5P1dt1fUezJnTqcr",
  "key38": "67LivBeesVNyeL91bVYXJZmXWfv68hBDr7ji1sFSZGXfJpWYcnjJCcHKxvmaUmezxJiCqgDGxAGQLgcMg8478btb",
  "key39": "4fosoA6hfeZMARACaSduaJUW39LuauHmusJbkasCRyNhQuxHAYmZZCnsvM4edtvzd2P59mssz7zfrAAiuwQu9Ny9",
  "key40": "2EbK2278oJL1ugMSRA1usYpfkNjQaAgyhYGuSVkHofAjMKEffTN4RToFSXMiD7npyjdMawrqBDjsDjfUV9Xpuaes",
  "key41": "64mYt9tWHuxk9FD6Ta5KL1wPatdRU84shrnTBURgFpexKa5DNgJPZ9THvXuScnY81yGexs2PNQYv7Gdvf7VJ3EX6"
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
