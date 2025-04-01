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
    "48UwJ41mKBmfTEj5ic25YYj4WCdbvYK9owi6vYB282mTkswCTtLME27U31tkwg1mVtuKs3ERxAa89gRBrgM2fr1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rgE2WHS1fx6dutsMD8ShKkCZ7iYgF5tyVgeFpUzHVBVh1sxakme4WLSsQNxfueubHTL4gmJWo3S31ahwHCduB5e",
  "key1": "5QRmtttfmjtk1nSoxeGmma1ixvkP3CARSjvjuq7vxVLjVSZU2dzfJvySbia7WiZ8Bwiy8j4aqEEvdxNhheFLPb6S",
  "key2": "ZbasSMnZFgZYjzMy3A2GtNHGwJnH8HQzF1xiZpAJsda2tEB8XYTcyXkGtbMFJPJiAFFhFLBNCong632GJhGCLEV",
  "key3": "2UU5NhjBSLJURcuVGun2KiSxCf2oTxCJkoJ9rdxUwLwR2QC2oGGKvHyrMmcopgeu2C1YVptXyCtMYcjeavEamcGj",
  "key4": "3CGpqQc25ewb5sigzBGWrJhE3QNFbTLLZijQVvJYo42Btds5d1fb1rqtN245sdX32Lke6Qf9EB2ecwkrqbE9UdMS",
  "key5": "4mb5sheafWUeLdGUF3keYfkiQRs5VYVajh3g7EDsddKbnhL3Mg6YwzkhEEiKviWdGrKZ5eFoEAysTCppEY5mAKAw",
  "key6": "2Q99eetZSCRgFr4p8SYaTgNCKtYdDf6JMAGqk6tZRCryYQ2kPQBCgRnn7uK2oapVS5pShqHuM3Zs7wjJLuem7LAm",
  "key7": "3E3gFs5hokd5jcEQPNoVPjg4vm6gHARRUPuvTXks2y9F2vPnP2J8btDKtxBthjz28P9v8M1igJKpwxPv3yKnYriw",
  "key8": "44dq1irY24ud8sUsZd1cNfhmAEMpSMYPeszLcjuhe4dYypeC5qG62ZkY8qVc84pVRpyURhvA4ZvRwaLdRavsYAQT",
  "key9": "AoJaU36B65kp1YDxUKiF3QbDKNW5s7eWYWMHiN94HGsNA5KBnuhTghWq1YEq9d5XDqtbiQ3SRYuZBCRX9p64keW",
  "key10": "2sDBWfhMxsAXWrJadTCpYfRuQGB4iUDgyRi3FvKdREA2ifAbwBj59WhRjDXmVECUVsxD2Tq5HGnYkRzfCiY6Xh5p",
  "key11": "2ZqRKnicsnVJxF9AcXCbJH71gKeVEpB5RU8pfjpTz6WwoQ4TVAshFFKeSWGNyhBxUmHXvDwK3NAAfu8eGTa1ULQe",
  "key12": "4E37vyogERSeCAWavfRz8wrjQujxxqfKxL1sL8KTH9jfmvyDuKWfeJDXv3pcxZED4hzjqANnnnNAWqfw4ak49LdE",
  "key13": "4us6WXa5ccMCJEvLXPzuPZ4FPjmMAftA77YXB78b5M33cdGTb4SVBZtuHEKxHMGTRvpppdqMpvjyK9pr6bcz7RGx",
  "key14": "jGiBeXkNutntJZwi4pznbjxo2PRCQp66kEWuchBzbrkCD3McW5uVkeDGeoE7bi1PThdw2dsBdRDMZscmqDEJahy",
  "key15": "2sfkKPoDG8TsjMZsCsZFnwfGCWCaWxTn8PKVaQJqhrGmdq1H4wV9Mx4dB9ENMh8U9BH1D1Tr6NKGGjPhmS8RqdVD",
  "key16": "3yA6VS6Gf4xcofUNSAYGYfvG9a8JDPVZoNPCm6roy8h9V24DgMhzmotG4ua2yDysfT92k7azKZY5mumVnyGCxQjG",
  "key17": "3673qviBhXZuLVLfSoS5m8UFpQCmXgdAkZGGHmhboFM7wCBMDeMBxwvDNfj6TEYDdGEhTpo9zf9Pmk1jeBpYrssr",
  "key18": "cerukGQxM9qqXHXHRcBL4cqq4sLfiHrpbSvQRbustezPKbsL3hyRaPpayprWrpJHQrtx2UWAFbERqah2dfTYJTC",
  "key19": "3ZDHt3Sc1tvmrfi1whtWJoCZieTjKFA355Qz4ysGkKLBoEcjuLEnLCYHSPsh6kD6kDUjEqPBCSPTGrKqYCuNwwZx",
  "key20": "ufXE7BsEReam55qDjr7R8Y5dcfrxGkBhGtVh68AzJQajVH5JJWbpCz7YZv9faWCx77LsETsN3YDhxJoVZBNzHt9",
  "key21": "3JAmJPMGJHATs7pfdsnGdh6qKzKmWwZcGDKum9SQC6usHxakbDJ56m13gaB5wuMPsgmKRE7R8zfsJywD6Tef1VAk",
  "key22": "3JX45pkhPiprhLqTMdqr2vYdhqDUFPybbqiT1aJu8mFDeWsKgXBznEDYcciHHsPVV9dK9Nz3bvkVPoySSLbocR24",
  "key23": "5gmHynXWn2LADoHYg3pf2LFjHNvdaor7wQ4Ta4XefVqbSAvZDZHcVKE8zWygVMG46pAntjdGVZcmbpYv4HwCSPA3",
  "key24": "2BMBR8xCyShsS1MjoTvpKrFJNCnAJ9kqUBtAqiBu6jtnn8aiUTf1x3frJgWNo9SU4mEuELqaLMBNELTGGme6UoER",
  "key25": "3FHUc4wEu8XB3wranWTWYAQqj5cG7sPmCXBszU1QpbP3RSU2GDdFrh7j1cZEyTjiZ9vPvzUTVe8kRaFMrKH4CMmJ",
  "key26": "55WkfHfALc1wdtqwsbyuvW6AA4vtaChFebtH3fzmNtTXeZb6dr5568BvcahrXEkUiqnqVwEHX2TmpKrccX3VKTQs",
  "key27": "3SUdt7G2X9TWipoZbUTJX56Ej6iv1pJb3i3MpU1W4pRxdF5pHzm3vi5JB7u9qyMFGtYGu7AXs3tTBLyauTNTXW8t",
  "key28": "4FLsg4Tz6ePPGJgbtVKZgRvtmsEdZKX78c43WhfyAuEgKAu31N3vsXhkfPrzD9k9WJ8WPPdsW4XnqKtReWqievJ4",
  "key29": "5nihxfDoQoZ89Wst6qMbjQ6G7WzEG5Sb9taMv3mYnexgYz36VyvhssHDR29PvgNk9kviCYSG2rMhBgf7k2R8XeEF",
  "key30": "4uLfJx9YKZC3TBJ3oQdxTELvrJxGBQTY4KjaBubRUKeq3vnnFpYcQUHinybJzhM77o6tEwjghWN2qhyyAHrweYe9",
  "key31": "2Wb2PvqmUyaqrNugcHV2mtcP6NWd6HtVSzjr43qHVZvMG3EGFNuVGYDN9G74nEAPWRHJqSaQbbgSeAmRRUbvD2rp",
  "key32": "5UbuSf4itmEPdjVvQw4t8qyzvMbj6gUmAbrCy1NLzEJ3f2jM1oUXSk2NwkuXu7QgR65QvXvp2fHx2vSSX6NCD1Um"
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
