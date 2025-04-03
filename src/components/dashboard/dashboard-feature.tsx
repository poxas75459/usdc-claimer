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
    "4PJuvAcpyNzqF5CVag6z8YrrYots9KpLXMwGu4SyzEb6swV3YNBfYTy7dxCkBaXsfY9tXufBDTaNZsqux3Kde48m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dPqczNMqvHJjGmB4viVz8ab5jiLZ19AfWFiH1ggAAQL445dYvjeS3Bm1BAa3nMCD5GfMxfzYW1cLSgiMhRQcJYg",
  "key1": "58xaLtUWLW5RaUD2Z2eq5CtE7hJsXy2LH5BLsPJ7TNopW9s2TGYA4Bxfxxfuk1hY4x5yyRHhmYNBcv2sQH9z4NY5",
  "key2": "2bVY9Qpird7aiUp2SfSEzTGSairRu59nUwjdjQu6cbTBQta8BJAD5FHvQMee5YNKgMqPjiySNSgjmSpugE314e2k",
  "key3": "HNWXcjJYrMpWQmjVJTjtVQSSFA94JvsZUq9fFomDRdmzVkNEY59wjTD2T8STjbxui3aSWLQdb9EECZJp6D65nev",
  "key4": "374T76qRXkUyGuLAxT5RspomcDPKC4dxisqosA56RfGZsEYba8itVjJaGMAbuSajfJ6x93N3dbaEMyVhvJq31uXe",
  "key5": "3PrSJgDcYLqQ38wDiqTifFVAVL38JkQ2mBKUec67VB7bmW34Fa4XanLLrE4GJ645QuT7rueWVKXP6McdzN1QcQzz",
  "key6": "3tNNqpVzbcswZ3MaaDEmQcNUzkKxhMt7MaznhKEd9XQ9pBAoZwM7e8Q3gKEvov7fAy8D4NsfoKuAJh4kRWPQc61v",
  "key7": "3y9EX4nN1pX5ZS9nFSQkRvgYoYLQUMKGrPh7ve3EHddTU6rq3HXzB9bVXiYrco2UrGkfw4EFFbBx4tXrMPvZYzTn",
  "key8": "4xWKNuXDRHULaFeoVs2LviqjGgRbCjJVpznTiQEF15KBbgF4FNpev1y6W8uUr5LHmTS2NrpisahRce6kGuoxF3oX",
  "key9": "3hH8PR68uP8NymPGV32gZSpHkH1RPdg99KcCueguvz6JrLJ5iFLqXdgWXT2kbq4BouvumCpjdJqUBgHJ5GBCCYVR",
  "key10": "5xHG84zBsk8veBXBydVE2j2u3xj1xAfPvxzNSEc4eR5vjENbcgcXvbxRnFryK91dw1AaFxSeBCePCG2Zbxav5TyV",
  "key11": "5x92cC4DV2o7GE7HctCUkyp4ZXsMNrEH9JHq7U5xLxgN1ZV5oknqPP2tGCLSNWvqAjtPkNcFEoq5v6BoXH3Uuhp",
  "key12": "28qG8eTHCiPrZiognYxGFTGBFMyPF1AmL5J3obamcBrPBHASUG8HJb8yBadJ6CDZZh731vEppGZPTYkdRECZsSK5",
  "key13": "4qpg3EPXhcCiB58QBaxox4UQRpw6iGTB2G3miLuJ4wRs6xVF1j3QFyXPsQBPQaXxo2Kygfr2VqMrPT5jEYDqdBSK",
  "key14": "HFHTLN8sDPZuDh7h4Z9mJyYann9XAEkSUzPBrU7g98E86SJcih3J6DWMpe1s3H7h34i1Cv25RAQUEkqX34LB3J7",
  "key15": "3rjhM8FcDEW7zECXzffFZqTVcYbqyEzVz7bXd8QFkZjupvPVg76X3Xc73xNzt6TLvoi2RN74jqMHxtgDxYHAujGv",
  "key16": "3xJtAhZ9Yec33358V9YiCxy1gsZ7hiRCW8FYe38QXXpVyzNXX4baU2CePaXQmPfFRuLogiTiphWEP1Sm5K5Vv4zK",
  "key17": "dmZxy7tgNSD1SXDAvYtNMrB6U2XymM27ocBxnkApBH65FvGhjKHUNyx44cm1utnJNXQXpMfRtJnKwDKvayLxEij",
  "key18": "BNS3oe61UmMCqGoikZum9zMnUHvdG8XB7MeNfR47QK8vFSRqGKZ4z5ayzh3rVFoG3JvZwSZ9KdkRvfA3hnv2PbK",
  "key19": "5TTkRhM25QZcFdGrgQFJrPb9saWduNxGxqju8dArx2jefjxqmJ4sEK9MeUgsrRya2ciokjamEiSL6wbfw1bu2bRC",
  "key20": "64ZuPgtH3oR8D3r1DBejcPQsJexeMZXGrUuu8aZ9cVuvmJPgEZw3H9Ne3PFpHRTZaBfLKWZnLmybZp1VubRYNVR",
  "key21": "2VQRZzA4icqgtr2fiNfRWZV6nevWxQQASuiLMrs8tba8vDv7C71Gi5qMoSFmNfEsMNd479YDbyW88oduPnFJrtQG",
  "key22": "5Fux5QavyzuzRHNeaqpsmR1JRXxAPCnVuZH5ymVJyw83oT4ktmEHPUjeDZPNg5S2dKqWhnFD7TwYHtCuRErEnEne",
  "key23": "4imM2GPL7AQQuaT6UjMmaGg1QXKQQZftWC51cKoUrNJvezSY3rcomiCRVuXNqtv2wVcmps1ec25A9HDWq2tSwKFF",
  "key24": "5ncBBNomYaBaiwq8Aq9UvuHMQYDC4ZsiKA3CwxN2ShvRp5ZEX64ooKBucRquA3JGUJEdzvmao1N4VXznrnaTzz4K",
  "key25": "4JwW87ySTzwsoqxDyGmCaZn4nu4su4ebmrziqSHukF5dQymSWgD9hXmpWpYFVjCFHG8uFkA7sSYJ2Am3fbgUBHN5",
  "key26": "2v8e8nAmFDSz2apPshqdVBh3Vp5wLMbKqdihy4WxQ2M6X7KrohcCf4cxLcx6YHLXhN6VVzwXRaGWoHTVymp3LEtc",
  "key27": "oS3MvzGF1HTC8NMgeLBRw3uzzbt8BR3JkrqaZncGAqK14HfT6SLZgK4qWrrZ8BPE53vWcQbHD4gUCgQaYehAvyS",
  "key28": "3gYrn3527DBvwkorwymGYoDpKCd26xU79CCrMS8YDZmQ4gp5mAot6uuLSdhSsTRX5fHyfExSRBG1zrGrcVU8S9yQ",
  "key29": "5Rd3oHg6ixyP84gso1aFEfE1WL6K2dgAfagJKNqgx64UVAGW3UbwMuWBKzXxhSSwcAPsSseVJSgrU4m9VJce4vUf",
  "key30": "zhHB1mWNYtDZ9LVYNEdu9AK9CSJuK9fK6U6NAJfix4aJ9kHTb68M5bo19W7Frh45DvEAjjYiq3bstiMhcYALVFu",
  "key31": "3NuSkrJP2kx1hh4R5cRkziPR1FnMdTTpVsnpvQczUk1EQwZQ81kwRvJthKvsddD2dLYQyWpxmodawZxTwqFMMgHq",
  "key32": "4bz3fg7yvupwTXMR9273TGGseMxZabeUC9CVTr9spq5PhjrtM39Uj1cRRy4sT3nryjGQeQQfqhbHyvJYCu2Uwc83",
  "key33": "3THN6h1jdDSExrdueHxbxurED4vJWWab1EdanxZrJFgMRY8EVKCXQzf2ed2AkhtaXpHrDNNKkuiVp7nCYHZTRR7D",
  "key34": "jZQr6gcHWkpLJXDB4mb2XMDNSZb3gddboi39eShrEGwZ6TaG8ay9TYHRmGEWvqktBeNeBRUBwrB4sLrn3Bf2XDU",
  "key35": "41yvfmLbbkrD1P7W2rjvLsgvcpdXYRov6zafpamjz323TVjA1fwBki57X8y6bLcZLhrRQd3SA1nGbcKyE9H5J3X4",
  "key36": "5vwZM5LxvUf4chqGL936kwXi7XeFdBQciDX8Tt5c1U3ZEnx4CaagjngYppiFEHfoiv5UhAEZXVnKugVruni6kMKK",
  "key37": "1pEXv1sCZvCysktiqnAX5DqFgzWp7oCcx5GBc7YeFauwu2W1LQWSU3UWhJ68tNb9B8wKMYC8RToAshhaSUxGRe3"
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
