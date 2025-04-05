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
    "3gpdzJat3vAFTzbmbJFxSVLBu8QM9mvQE1Re3C5sjym4PYApfbYHBHmujFs53GnjkmpjkQRpkLzezRWmF2A5wY8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TgjurqR431Q6egXTgTzG6UEH5nd3VKhCsdQLR2BK57iKS2C5REEaybAf3aou1hpLgQ9o7qZrvEu4QCmzowBLAqG",
  "key1": "3mVdhcpJC4KEzjAiqYDxaSifYABwD41pzY2X3NDoxLzvC37f2WGidcYpPcbGg5Q7AxVYoetmEtFDoMo9CgdWVp8n",
  "key2": "5CySzntzRpAVo8N2yP5GmJ3dUHtmkox8cbMFVTYJuZ23HwvZX6EMPxGs3xjZTJaWBVYUpMgPiw2YSFqXZJ3Za3K1",
  "key3": "3ZAU3PKs8XB9QXhiYT7jRursC2URdtUsVeh1QNneQbktqZxdiwswFNZHaKKZPLBxNkqzHyPZctwSV9fXw6yUAjXR",
  "key4": "5VXsacs2KfbMDGbsnr3FUKy91To2zKuQBBTBvEJnXnPcP1vj2agoMR4NSKHHV2jKJfZQAGS2sNyAZNRzwyNHNihM",
  "key5": "2yAQh2KKAyVFQCr2Z5A2QjHSAmh4nCRdp4S49ktKFNAoUTNZ5YSAsAJhnavjXgdDAmrHjZCebwqG9pWEvDQNtyRp",
  "key6": "5U4qzZzrgnnPZuegGq1vStjVYmxAbjqF12ffhqgfoEB2jmBSUTjNvLm7jEBYakS1nZoQe1UDD7525EJBHpNDtPdz",
  "key7": "54WxA6n6gnm5Rpk7pAoCeocfEDGpna4AyXZuNvgS4fALkTdcYNNTUSyRpnmgKpCaDfvMbuSxdx38RRWDn5GTakaX",
  "key8": "4zJ8FVPhrDRdEsLEuw5jjqbbduo32aRz5iJGs4JKffSMVbB8GvpEFRczFona9JSTgNVqEBL6DgAgBWTdKJkYinBD",
  "key9": "4eFhEzVWhg2wco2TdbqkeU1hWC4kyKfiypmd3cEMWeFnpLcL1WWyCNaSogyShMSPzQyX9ttmZZbzbp5pYvVeBpzr",
  "key10": "3ftKvtB92xtjeE2PYHp9mEBzPnuF1FFXkYQMDgaKHVdiMQVddbtSYiUnXNLdMh1JsrtUtZUTU9swMYeNvnkNaekz",
  "key11": "47AAynP5D1mPxnU9ZmkTNbUMMkBX9qZCk6CcgYNux7m4s2qEvFFZzzQu2q2xjEMCV8dxk1Yv8TZB1oJDzoxYiXuV",
  "key12": "4asGttv6yqx6dGqqtYYruBqzGvBS5eJ48cjQLwHxdPVg7kPZAcEb41i9ze1CB2VHovYo3ofKSwrRWjaaFCCpkj6a",
  "key13": "ZxzeDMbvaHbBmx1fC8bBVwU6nY852EZzBo42pfTN64yBK6xLqT1QMrCArgmNqEJeTU3H7tRyGYnXaMUnFg63sXH",
  "key14": "2jRiht8zmMwZt1TfTvAB77wVL3DHeqa4fxt8wKFFpAm391863pNhRyFAHjd2Fg7pCxx6wsQucASDM86j6qV5ui12",
  "key15": "67oQjY6XxZ7yYdeTP4We7nUp4APE3WuqXUUhp9yMAtMmqRUybRP55weGJoF1n94CmFkKH2sbunCRUGcGGPJB3w8Y",
  "key16": "KECSBS3ZJ8s1w6NTGnZioYuaToHGoa7MzBqwQSAhzXcuqC3SiXwYQSFsjbkmfT9wjg6SSGDmwTqRgCjGefxqLPL",
  "key17": "2cHFLfKMs24fSvZznRhbWJ6h15jk1zLeySPYBCQVWAx2qtZ9JbfDRpUCDZQLxZpz3qRExaWbzZqmokFgq8Zgz6m",
  "key18": "L9zhCEsA6DZKjgRdckJVBHP7WS3rYhcdqbg3R1A5SXhmibakPWMgZPzvz62AfXdoWBKajkx72adgBLwbeSs67qj",
  "key19": "CHimEHG2iip5DKXurTimYzf57n7yZW2PekVdERFpuWKAUNkCQHgoS9bPwAeDbrDGm8b8gboPmgNAr35fKniimY8",
  "key20": "37xZAUuiUxrYHRQzoYGg2JMUe8AXE6uLadskD9gkdYE8a7PkeE4tK9ssfk8sBZdooXCC4XJcwCmViuiCkFMRoASf",
  "key21": "r99sdzLftirCHZYG4GfaCUWs1m6JRY66ajBNEoVdpifFFxfMDKXHJ4JF7PrNFnawG9ScEq5ToumatoEasXX1zJy",
  "key22": "isUspV35ZQ3Ee5RjQUuqZzR5K3sTfMiY231AWGfSN3XgRPgmfQmLpjSmqjVPTNiS9NEypBKLa6ra3ionSqRE3Qe",
  "key23": "PAKPHvKP6GM1NVd3dxQiQM2531T3dfdPMNUfeS7CduQY2M6T9HmBczLKTSg84ZSNPP9heEMmjquiprCPrSqkpuq",
  "key24": "4EQk8bK6f8sJj6YRqz6HiJMYhvm818ZY1oCcdCobN3MuTp4Cfq8G7UWcCgNCFDjozdoGaGbT7DsAxtK3cryQsA17",
  "key25": "64Vq813rKP84PSmypz9581bVRrWtz3H579ZLhEFo4JyYAWgCMN2w9cyQH2Ve5W93a3mMjQTmvwWByXoeXcPTTuZ",
  "key26": "4EduWyb4CK4Dy1XMH5XKLA6J3nfnX9CAGhHtZD8MxuVXTPueR8Mkxa6CeBAmXNqiFwgZ77FyGY5LDvgxiSEVHwYy",
  "key27": "5M4CmYWr4F9QmQsxvqUQoSc7QuXFNNNiQb4jn5UE9YeitbRBdeJea15qWHJ7JHiA7Skb1vMUuUcFnWdzbypZENr2",
  "key28": "5aXZheyvpxAfYXXZ9GBoStN4DkNcSaUFnp1BX8znDRYLumRkUadGTN81Aw6g5LYqwWnK4XjCqDGo4CMQDmY86p5b"
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
