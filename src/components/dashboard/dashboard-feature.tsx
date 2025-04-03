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
    "2bKTw4uArRizLEQAhGN9XqQyDD6w3VNZE32XVuLMw564BPNuvYxFisg455MvSzbFxZT2fPVnNvgp4qGv5VgUwugD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QJFSjjVmudcGucSdAa8RxPbD1aiLSq1iGVmaWHGe1b5wMf17rWjZN1DboZLMafJ7vQtYrjkYigaAGbBimfi1qD",
  "key1": "5SmoarMNeUKECGFZBCKVvqQVWxTcEAvWc2coqF1UCBa94WcZx5ktA5ahid9u3ci46q3DFRRCszQLoVM8hjPek7Xh",
  "key2": "4oQP6AVvgP8GbQHiQBf7onbtMXcLMgDyJe57qXVJtsnNSjyn7UkhmT17m9igq5DygD2geS9tSyYbrdDvaorjZL9f",
  "key3": "2jAbvNBfjJ5oFEjUYYyHubpFS7NU5U38vq29kakYCmNkoYPLPGawv75U5RzgVCek7czhdqSYFrTw2489v3GuREmL",
  "key4": "2ENdo1djZ3WG4CRZmTX4LiUBA2qzdtkRWHLdoCosa5SLTYGSaA46NkobdCM5m4XwrGmwxLDaLZVL99Bo4NkvSJ7o",
  "key5": "54aBHdFvuCyqBgLjnoWRcx7TTqZVhM5tBoMbYqnau36FESfmGgks1oRWGkS6WxcAx5svxTW2s7kQVHK4FmxFogTo",
  "key6": "436Saq1YVaAPiSanmX3cncpdkrH48VrZ8VRfDyjb7ArttHh3EWqHhaMoncGj2hvGhhtjykNznQJVBSYuynMfW5s9",
  "key7": "2xkCBM2hPDfFoy9MkiHUyxRMSooRGyJRF9SH2VRgiZ3Erqbm1SFvt4kpQZq9WYyXC4xQvW2N6CgeeYQ4zrGbM15a",
  "key8": "5j2gwfhV1gx2uXmyYDEe9fghPnAmFs3GNzPyD4zEto8gwMcm2YRPVPa8QSCo2vD6L7YunFt9Y69x2yuiATiBHRJ1",
  "key9": "2x49qwgp2zQpScZnjBPeiJpd3mo47d16faQZJJVfNoaWVFuBkGPH8xQRfECPGBsbiZ3528pNuw8UUPjoEFLDtRGM",
  "key10": "5rsLECPDLUJuXzZQ2k91kwAYkbJvFvLiLLQNEjrDML84EbhSvdJKacRAkA6xa8BNaCKJVyqCBkwJ7KoHgX53N76m",
  "key11": "32mvX9nYyMc9zuozZGbJm2dF284XV3EncoUAVE4s8dYSmb4DH9USkNzYXhhXJtgbqvMSsMes3QH3jbLCtpNJgdt6",
  "key12": "2MvhzPborSpYymSF4aJ9wXH5CkHnL9MJdSBWxwGkxSf75eMvDyfBp7UQzsQLBi6qm72xTRKHdEahnmVEkC8q4knz",
  "key13": "57DjszukvQYXqJXyTfodFHck4J5AXr6JnMg9zAKrEASu2eGFmmdfHWKfXCkFinwW3aJumcoWY3uTLv6WFX5WPLr",
  "key14": "2KJKiv7XJdy8WBUGyL1G33zJ9BE2UGJHcezRGPoT86dyYYac18D2f2JSdL1SRXjjKmk179uSNaeWtqTGPBh2oTw3",
  "key15": "28ePG116DRQV9j2DAwFgnktGeGapm3yViaFU6Q7sFoJfNs7R1urNRsXk4M18SBYdnP1kuHBkVq2cgpfdyEyTZhh1",
  "key16": "3jZ8HBVeMCpswo3ZmeVvcFWNpfpmsqoyAUGmpCfuPN8Wt7fs9NECYW86ZPoJfr7mWNErJdbtFEeurjE9wZrHCyK4",
  "key17": "28ia16yMxpBXKL8wBdM2R3cUKFGWDPNfQF2vHzYXGzkEAZEiovSyPxPRYkiPeTNGhmgfV6DAkupsuNJtqG39fRnu",
  "key18": "318AbwuWYHPrdZHFbHGuV5hGygGEDUhctukz2o8cGR6t3LbQui6yszaXUFy84yDxC6RpTbQqB3VCDMiMbLzacNDX",
  "key19": "4xE3P4cdyTnbnnv3XPLApsFEmsvS2fNXtKLwjJSRV6D2DNVXitjSB5FtxYJV4ZiAKpKFUFz87JpSn1HQP3jYGeJy",
  "key20": "2puSMyriM3o4CDJHYFaXQuArAJ2fZ9tev5yUxqydbEpC3eE5AuPRB1WVcBEVGnajoZubfhG7qWhzpUJEUwUJ6xCD",
  "key21": "3xyxpNDutntJLpfGM9o6RoffFtzxJuxDirVbG8Vzfaox7eHwhT5NQsnQVoNrcnod7VRJN6LtFW6te2ZWLaw3gt9V",
  "key22": "3ZJMLEyrKLnEvwNnBw3Dj3xaTicwjQsSJ6a6YomL4LMcus6qjiV9S6giT9btehfuvmf5WshS519VRah2Kv3ZBKQ5",
  "key23": "61DxU45LKoT15VN4HrwjmRnZoipMn1yShcRV51DkjwyG5sqG2bHNyQjHVoP633ZzvwnA5Ay4z2QBV94bpumsZT9J",
  "key24": "F82YbLDdemgNXFAcKitmPFFNHgCR9sJe58uGsxoiCz4bXmbyyczXXUb6w9zbNvR46MyxFSo4TbEzP9Y3AzjsxZt",
  "key25": "268hzNae5XdzYqx3KvAseFyWDMWCbZBZSNDac8HBfjBDS5GRgxzHkdfXG7gtdn5hUUrTRT8RBCiqSNVsx8Ch4dm8",
  "key26": "2WAAqjQAYzM8pGnBqicyK1Vovg4CVAN3Ak6igCSGDipBPfgn87N1jWUk197Sfka1qQQev1JqF6ayKFcXnhyPD8eh",
  "key27": "2UDFFBqkVTXNpaQ9cKLoJ77C2SkDtxUdNZhrzQVEoM5o81i3qW8GQGSUW14wRgoeAgF5YXdkC7aKr7jxFVMDa3eR",
  "key28": "4EheMUtokohkVBAom9eHoSpEfcd6kkiSYgamfHgLDTsaoUVbiSQNfxcGyqE4yGRTxwY1xhGq8jw9pKRvQmcEQwrK",
  "key29": "TH7Lt1JhgYfpGrFLs9hVLonXU8iwFNHjbGuRQP7zaGu5zHpX6yh4bSQxCf7VabH7qxaBLUYkec2RZWdWBQGJMCT",
  "key30": "4Z7FzxsvgRqGBr8tE9y3dFMPqtiWZtYf4f8f8CzmkE7gEXNumbBqwPWFhusAX9Nn7xXXYSuY6Q4LWmXSwgeQCzwt",
  "key31": "3pXx61yhAUy3yKif6v4ernCwQrf5TXtHYZbaFhwMCRrkyEeVccA7yaK2JC7hQHxpmmr8quatw98GbZVXebPfwfXw",
  "key32": "595JgW3mEBBPvhALeimZPi3JCsjDE1DowoX5FHTSLvE8a1kaJ4oA3Xy8tk2oiRYvDi2Fxy2efEwgF1tqVz5wjB7T",
  "key33": "4VFtCjPG7kK3Kx6fP8dwfaUjEfZMxQfAJ8HEvwP2oDB4tqf1uXJka2GUAgvcsdQGGpMn15SVgPAYvP6Z6u1bCZ2c",
  "key34": "54D4mBrzZtSgw26AuS8Nt8EBwe9SC2uGWj6BvLDvCyqkXK8dTJzBRKokE9tSXzivB2c8cHb7rZeoyvqU1xstnkT7",
  "key35": "2dnxAdpgQA47Jf7YkiCjiy7Y9h2DCaFc3ETg9Bn3z1S9YAYYPhNAEx2QBhxtkaBBxzGzdDQoxChHXL6qupS2zPtR",
  "key36": "5bgLp55gmnUfZ7mz2WUKjvbaPxNgKXBMFMFaECK5YNQEbpL1taHmToMYSysk4bFiTAzHW3kwJrAzk7a3fJJipyy3",
  "key37": "9xRADbUEzC4nBpKxLzB26E1kr3HB9asfet6Gb4dRLGoJhXzfQPuPmwnh2L97h3arU7HuMCH1y8zM6CMephr3PDP",
  "key38": "p9DV8UPtWqSk2YqKKsKTLv8uuoNJXyfa9NLqujZPg6y19fsGTskWTyHiov1eVQj7WiYJkL8mHcEqXnyXvS99Ukj",
  "key39": "XNa5JywXDVutncfsPo91rmb3JowuUt6UGQEchcgmuYCA3WcyKbecmv6MnekTiGBCmjFabSgWEXYQYJukMd8hiuC",
  "key40": "qMkC3MmJvH7F2s86Kvrt38MFUX132G73rBa12QQX6qrF7jE8JmJJAdRd9U8otEEvnSM5ssg1CHMpUEtz6APgywr",
  "key41": "4zsdbcjApyhTXVYg7ZFP9ZsB61Tv2Epto48mc4Lsm6Td5HPoEuXzi4kFPzXqPRkj5BoCrbvoDPAcjPH5A55MkqJk",
  "key42": "XQZ7XbU6RmFb5VLoM4GCy3cYVTMyj3aXfpnp6tvKJiJYvdvkj7X5CqwizgXRoP4Q5FoWfhTa5vLk3xMPqLiGocD",
  "key43": "3d8uQHGsGtjgXi7kxG4qfCgjCa6ZzmshAydBatGzZeWNZv6SGgDneiazLWJoNJEptneiKS7BQZMQPaCeyXFSD7Yr",
  "key44": "3HFFE95XibGcrR2BHGUZKyeRWapV9TTEj5PyAQK1ybaEvvZ68tK59mjHySZ5CZsWHAc5wB7BWPCMfntpW9gCBsq8",
  "key45": "43aTaGqLkBwQCy1YPvSDfz1gAydTLVM3SPPbJ7ktnCt7LC1dh7m445sFajE38AQ83PGTitveEe4RdcEKVfF9FBaL",
  "key46": "2TViGiJWudqJRo1NmZi3DBMW1xTNehZ9Se4UDsdqXZuqgTg6YVfmVuYVf9E6nhPQ7THd66R6fybNTUa8vo3a4Ydd",
  "key47": "4HphTArdq385if6oYzpd6begE91sDFg95mLcfk1ypJz24Q8TBWufs8t1S6Da1XbhohDAwjVxf3urm7hvjneZJky7",
  "key48": "2g6CA2sioVCGRd17HiafyF4See2jgyLHSNjLRZuWrxD4Te5ATaQbDYzpgW97kpoa13pu6mqX1pVYQ82Qi1hokBHV",
  "key49": "4WSF8iYCDWfbFA54mRLZqfurqyf1R83CU1pJAgd9Hmy95KdavUc2uRVRonxGzqz7YaTujJGbScyYFeTGYTs4hK5C"
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
