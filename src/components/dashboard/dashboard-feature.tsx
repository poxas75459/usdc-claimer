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
    "iNAmGUTD8JJr58VQweccsBYTorxMr5aBHiHpadYBHeKf2J17UoNLex1Jz3db3kwY4A5NSJwsPvXKcHdKBRDEXoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YYqym676ZNLzxpTPEdn9JHuaXG1J7S9S82cPAWQrpbJ2FM1jD2KJZQUFYnAGW9hfbhhuKMWM6b8cvJmiUC7cBuY",
  "key1": "4v1egHRg3mhTjqFgp4dQkTQVthKZ1RUEXuWE5zfrwVcL3SGj9wPCojj7W6ku4Ubjz4EjKUjJqiLaNAu6n8qMWxrR",
  "key2": "3DDjpHaZLAK52PtDRAfx5VyuKZgReqAbBaEzUjNzEh6QFo6deQiCbKaagqiRtZqmEYd72p7k6VCbQXFi4U6HMvGE",
  "key3": "5zH9mvphhaaaMvJCV8badEHx6WvW1Xk4SnqHKmVYxkCwbcnVBzNuxdxNY5wxCse6BEw34BqeAFdX8wLCPfFr5uET",
  "key4": "2qvs3rd6J7XUDJs6Zcaab44K5xN8DBXQuEUnQrHpM566StHPBeQPAJ8k5sAfB18eWSN4b69gG4DjYqLWWJTGRqQ5",
  "key5": "5yc9WpZt7JTbwLRN2XQHmr9GaEh1FRj1yNy6kK4H22pSYt8myySC1ZXVni9XY3zyhKNE3H8J9HLEpisDUa8SGUD9",
  "key6": "331CHNBeSbQtvKbp1G3k2TsarjwMzp9QZkP16GeNAbLKHk4FYaBMHV4bUW9SbvuEyo2f3EViTARw3kBanf6azQpF",
  "key7": "3UogrjZzqN3TadMXtxZGKsQi8Tt8BGPS5wdRN8itY8uR5KeifQH3bF1KeD4HhUB52zpDmRRusiJtmxJU8cdRo4rR",
  "key8": "53WvdMcRbtcqgK3DKrmkayrSFZEMbpPgxjmYY9tEDZ9gptgD97mNkhRuEtBBq2uEoPoCJCU8f1HtYmDfBBg6u8zb",
  "key9": "35rTtc2DNqp548TpDjd3JU4zfwXY5EGDT8GnjEYJuD4Tyr1LYsctvhkXtxW1gZvPRt2gfE6Bt9hrxmFokcK12R5a",
  "key10": "5UfZMdmG1qXoG4apNc884faT2tBGBJ36mzkYHjWZj6VaQfzEgmchmx5NYwaTam5X2EG3E5wfU2fiXiAtNj7GQscb",
  "key11": "3WCUr4rVhEaKqDsGf5SJ8zDv4TA6E3UtrDttpiackBn6GFFERPZVMt5Apz2nuRtN7qvRnUp8jYPbnpUtt1tavvuK",
  "key12": "3uZco8xiGCChkx6dcj7aNFxz7MbWZTcer3bVuqjhkFLG7y3UntEDmEjmGGMFtjChnU9y7JQPLUPCeKwwCaxgH5QP",
  "key13": "5knERtDbH5itdCFj78qauNTh4E5w495EP2M8XvfH4diGcSMAGV37HiHXaYGjv2UqoNmEqvha9xpVmc4SzbqEmHSb",
  "key14": "4vsdxzATgLBPoYv4zvN7eqZZ9XY51VAA9HjPys9ouE13bGwZ8qiBESA1JN9BKJLB1kc7iBa2psZSheoMMkFtaAk",
  "key15": "2fwPZHnm3bdadTMNmqQe5cMJ9W5f4UrqdMaNdTTV5fPej323sBzYSQAQayADe9beDMehrsart2BmG7vxquc7vMxK",
  "key16": "1289bA51WYiFuEpnHcnWr7JbCvXEUirEtzGw4qS9E9F6R8zqBh75Xa2x5Gv7fXnwEmoWhScwKfkKSNSpYyTVkWzf",
  "key17": "3S11DC8ghgNAroETjhanKhPZTnh3vFck2tKNXWeC8ewc62GU1UsyVggYtkDyJYBStCKNuqe6bZXu6ZJ3u854J9LF",
  "key18": "5Bju68YNGgGepeFoqTXzgq9Jhv2GtouimtCRmVYRLBo2sGapn65LmERDrGGwJU7xonQm9gC6KqhBT3ZLGosTXUxM",
  "key19": "3HXQgzWdfWkkWGydnp19LYQPvNyQd4vpaCoqSpiLwrDHriAyT3mCNahwKBhbFEiLQpmoDAKCicPok6NJuKxFdAnY",
  "key20": "3dVXGVC4pJ2h64tKaXwFMgpCgWQHdFLmBCmZtYRaratDwD7FeZb9FMWZJucucRmJ99aT8Vawc4m2PCRCMAATavHX",
  "key21": "5qjx4sFKdXRCcV4v8qtHdY1oxTGSNnzu8nFuJ55kdDszQeSek1oLrQAZaRXFQxPMVN8Ph6MqJacsCFkSsMDH1hWh",
  "key22": "2B4dF4JERupaW898NXo5pd9XwnYYQXHARgJSW1JmnvNi9ro613R4Y8wTQZyp8czBPefFRtwJ9CDadTLiG8TSELiX",
  "key23": "2mWM8qDeTpvDbV1835eq7Vh84VfkdMxdoMftgLPNc3iRLUWyXYNmLJ3RtBguGamEA2K8doYV35T3yYAQKFX4ckmU",
  "key24": "5K8U7f9Q1nH3D4XCBp6SZfX9Gua2xwMBs1ekLK9EbzkwJqn4RZ8aWqhKuCWVSj5DN1Akt6qmuk3e3TL97TPjCEyy",
  "key25": "4aUA2ZQSmGpnxoN5USMVWY5rgx9jRNFSi5Lh6jv4X95HQF4FZrb7hwxdLzgNE4EdKTPWz2YfyGiY3VzrgaR8ijfV",
  "key26": "5GvxjWCNvsHnmie6YMNMkhxJumSiTPBqiA98fPXvtyMQEkicR8eQkDamyv6wHCRbhuccFn4PaNcvPB1YWEkmHewB",
  "key27": "4XEwU8AmpBvi4UwRGciYy5XCpVMEZbikJMr7q5KoSPcbt5n4JQWNNgzMEUPK6SFjFEBvfHQRsLB7ZRd7EwbphKZx",
  "key28": "36tbJ3gH5Yd4AnnzevbmReNXVa9HLtPR9fJpfZiHm4LRmviDrphcn198TEVTmAP6tiEkJo2braPjoNPBvpEr273W",
  "key29": "4xTGLysnc9aqvhbGD5s45Ent5SqeoUipCiCsuy6Q4wii2LR93d3LHjjeU8LHFSBrF4hRPDJhGhREr7EXrh1egT35",
  "key30": "63k1rZNDWVnVV1nENvfPQH5Kpi9LaGEzZUjfaH7aWNDYPoUrzoXdoY8Wx2rF2M96kb1nFiqNqDGe1RaWbFJfp9kW",
  "key31": "3VCAGHUwDeYaMNgMZf8KUSafDLAKQKt9Mm2kohrvHN2jeocU89pnj67pzN8UeG8HDzVku5YC56L1BBuNA8swNGa4",
  "key32": "4FsBnaT6uadcHGuqkdjSDoub7J3aEgFWXTa2D34xXB8aU7GyFPjoht7b4sQWE8YRX5aXgdee7K857kNpbJDMZu49",
  "key33": "7SarCJnrUJ5sjXzkAi1nFNuVnVHiktesK6gMVEswhSpHeye1pvD9ZP4x7TaihLa1dbQGnywTTgusPr4x9RTrGnN",
  "key34": "48sL5cdLAawLMR3qhgVNNgHGhhiqQC56KpewWFa3s31timNauAgKQr5oequ9879gG7gjpscvE4VC7H4VooYHCYFi",
  "key35": "2JoughiSn8sriRmjeAwxsRtUV9yATaHGoi7tA2cUEsordBApRGT93WpzD7bkcoy47yNZvLkpH2nmnUAzsWHrtuZ2",
  "key36": "2Q9d6RK2EJaiAewZCxkHK7GP39dsvGUgzDcjLj6gvkpmwyeo6LiSCkRvE7FEnNFxs9ejbQh8Qh8PoSt2VKJvo5vw",
  "key37": "2QrczSpefdoS85kNJCcJQqhKsCtiVuZEyfb71u6vdzxUSLkJEjrQAeXL3SCJFQLtnvg8s8T4gNDyR5nerafP5Ln9"
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
