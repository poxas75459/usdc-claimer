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
    "5jjLqDUyV2aNzky5S6TJX3mXByuveLsngA3CYwa2U97pMtApEQhe1jzywGsVw1ZsYSNRc4NrkbA9Nc9fVUhx8XwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26R3Wjf7xVcDKFJxdHDN9b6vQvcneaAJ9fpkrgYXc6ZfcgtU5T8HhrtJ8DeJyk73tj3PRA5eWP4rSHbg5iH1ege7",
  "key1": "2iLBfbxeWqcnouXuFiw9iG4DPKV4wD9mbyZEAvR7NobS4sw5N2V5gdbxBrCrCUdc95moNGcYC1yZsugDF4uaVXF2",
  "key2": "4sDju3fqJFpofS5yPmxwDTbA2v1H3tMCKox8sy5mq8EDFHoUVUNgnKTsCbdJUjnaVdtNVvNpL6DrGbkDbra9Ltar",
  "key3": "5YevdYBQDLRqKqomJegfa7Q67d2GQWovaF2oTQ7tydDALrSMLuYzT7D8WvmVxFWyiMedakLFVSJz7oEdvKFUrq18",
  "key4": "5BEfEtVWrV8aTxzaTx1b6BfvUhwVrav1HAQZa1QcVnWKuhp7kS9yH7UeqzWDauRTeZEuaw7aCF15SqLZT7PputBo",
  "key5": "iyt1DGzqkHPRQB1jcJJRQ6Q67TPs6p31NKMmSBBn7pw3CUiVZTWdDJ1kLeq1b5846UEEK3dohfMPBXwH9Sq9pRa",
  "key6": "4EAd5rGUpDuPwLGRWpHwqqxEJw9gbLsP8sk4PjpA9QcLNfLBTrtwEczYyLVDJ7A9uY656cAFiqHUpNbYkerqDwbJ",
  "key7": "37PL8pKyX6JwJDgLcikAM4aB6BU2rddHxRa44MhGp55dkaB3y9CSGLAXFrVgpAp7NQCJDiKMyvNsRxqCpgUUNWpY",
  "key8": "ZonMtMejZR5wo78bXdDW8QFzpqVX3DgtE5cinTnRwm2aVSJrJTaFSdBjk32FGs616tXJnFxy2Xm3fBoxGqmvGa5",
  "key9": "NaqosYWi4kq3gxx2onTNf4H8yYTZ5XjY6VFPcL2q8M4jYdEKAgX3byWj1ZhUdh8VM8ZCqAmFcT8XDwHLsEDfLoY",
  "key10": "2YKdAQfv96e9gg7XzgFJ6HPiXqbz7JVdZpbX9Hh6NEw4yB2i975PwFuybbv1V7yfEnGxaKonCKGmu8kbKMTzJX9z",
  "key11": "54zBNyWjbEjsMZEPxNReskisyfHUohnoem2gGRTtzbeJ9g9GmRHGfRm1ucurV9vtkAi415gFa2LSSW5uzWe22qKe",
  "key12": "oVMunZZiP7RxCgNtBbzuEPGHTdkWQrQAkgB9Zke6VWNKfsLgDMhZQbCfmsHp5jjXKPYfaTjPwQgT5XST2FuyGNY",
  "key13": "121i5Gem7fvRCudE9nUGgpwd1T2rec7J9U5in2GcQ99dfv41ihjyta4upWXs7n2wAtbK3cN5wfjigm9m2XQwVj4A",
  "key14": "4xRrrrxQ7z3ytW2gmgu6DwoKXdQswFYomXU1L34dbrXrsXJf2MWrKbKpGAr2943TcExBU7SXzQYMLwognebX4uha",
  "key15": "4VAPMKZ5hw2KnJBQyXKEAKL1zRuB8BV7uwjptJgX3wmNo6XVQMD9ZL6vh4Xaqdyz6tocYhWc1VJqAuNRyrBjDCss",
  "key16": "5cp6ckMswwrrJV2eHXZzM2YaDprR7YH1KKz9mwzjJfvAm41ANMLqhK3J1hXJiZ6SqLCPAGEXZk3MKmsYvEKCWvtp",
  "key17": "53BSEhM1dQ5RQxkmNXZ1hAk4DS7MtcbeTLnRG7nUDLbZSurefWBAz8caxKhopRHkfUFTMc9S2RGsabdHg9nbvKzJ",
  "key18": "2GoaYSEV5qcTC6Rwnv3NEDdSXrvXANyCfyJr1HzywWVn3B61jvqqYnywsXeyxe37NMygyBGc29rh6jrtShX8b5km",
  "key19": "gxAV21oPfpPU3xNAuisZxfNXqV3naz9TuRtJ2rVvo4BmJE7rZascNWLgyuRcmNisDQ7jMVpVK6hbpuMApwLrza7",
  "key20": "4C9wwLbCBrSMKq1eA3oWzAR7DWB29H8VZ6koddX5adYDV4Ggx6KFW81RxeKGrujYH7Hsw5TQTvpgEc58ofu1Mx1B",
  "key21": "5PuGHfPpXF8FY9xkxUwrEYXf1JhYz53hESm9R58vtrUxZf4ABMZiTkWJ7UN6MQHMvgk7H6AZqCaXQEfKVfCqUCKV",
  "key22": "hfJn7akYziWdF72khQfPdRNS4D7DZH1EpJp9avomQu29p5ksVrMnHfoon3HD5KqLDdBAEcZq5UXdkS2M6HZhoZc",
  "key23": "2DLXdJoH6Q98F5aTCa5xk8NwT37GR19yP8bGsksKegdoNkMqUbVQykXQB4omVJrRWGRPYbA3WqVrKgS8UU4iPpaJ",
  "key24": "2eNxzJfy6NuQhvJ3qcSHEzAUV6xXvcqpknw4MvNdqjuC2i81VVGk12y7GQ4siwkJqVANkttJwRLK8YgfeoSk4qnZ",
  "key25": "ca42FRYkYZFyP7J3dhBWigEFgGj1HSd4roFqhVKkARxiH3QihbDciAWjk7zEz5nEMSqCQJp7WNwqHZHHcp2RuFk",
  "key26": "5BueZ5xCcCKKEsT5m8Him4w3VVtRjwcpHmZ8oeMwZYQnfAmPSmXTfsi24FnDNESqQDLBEhEJFF4JkaRfud83cnBn",
  "key27": "64R1CkzNcznfo9TNMjxtJ3pT8sDWJK2zJwtF2HAVjzVWLXaukJLU6ncps2yLtoT5pwu6TY9VPphAk1HHz4LfPxnF",
  "key28": "4t4uhAJnUBmHPwqtDpFdWfhk1cZRu7V74dpF1Dt81YEE4m1t3S9HapoV6CLsK47Va1BLfbEAK532X86UusLa6jVq",
  "key29": "2JiQg5H4pC2AwJNnAZhy1E1kESFdmdzkUrAEApE1ziwbbBWSv4y4jpsowWPwJVfJBpNnUSvftEYPX3dH3UhocZs6",
  "key30": "5vLp8waCoEXoW57y7Bh2rF6iQvDb5dEkGYTb5cRSHJpoQQziCm7sCphBPrQ3TDMmMseauAjCrrKTnpD3rcWuFRpz"
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
