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
    "5kenbuGid6BSqeTYqfP6cqNASsydwoj4cr7JqSbecdzesvHDEnZhyDpiun2sY7WVFaYAHNhjdQPkKHd6JGC7zhiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqZ47kQZwStYDKLhGa5zEKK6qcW2zTQbbKrgT2FHSZ96SqR4v1V3aWMsNmj2QR8op5hZNdBJSsVdeih2iZxDjEw",
  "key1": "3w76v1sE1EwnFYK9vFg6KXe1TZCxG7dMTSzmFwsoaafqXbAaSLUnLq38ewXJqkwDHnD9xEeShEmF8GDK9hEcRw1Q",
  "key2": "z4BsGMhPm7dKTSQfvKVXnKteJ7GfYNvWxVPx8BtdyqSrqda7S9onuUxY8Lk3fmzMqzv41sHJKYhNXbp4a4C9yKp",
  "key3": "4aDGLoTnoytVXgJ3ex1aHXxgDeaF9uYWUR6qHQpCPmTsVc6Um2zQ7zQaCMeycGHGHwU8hoKikpxKDsy8b98dy4xR",
  "key4": "21uJTCHBq58sdA8DP4VwAe7yZEGYf92qpjXEkG2arvZEsZkMJDGPPiJt57SkBPGEADNuMN4ecc1LeV2Za7V4RiKx",
  "key5": "39WviRCkA4T7fKmatnqJhMZvRRyC17GzLS4ggrELp59m7axm6ytNKo3hHLUwHC363Ah7kDxG7PUS3d7pogAbJme9",
  "key6": "3PBXPXQCEUgC6UwHUmsKaydTnjU4g4LP51fWa9X84uibGqQmmq5XksGA37pME9NULtmRa46fVUEAxgzfy3wusXzR",
  "key7": "46ZX37riJ38HLzMh1kjBonABjCEz7HN1BwCfEEgZe2JdWRLDmixpsSBEbHSaFVuQL6CDBMkJmHKi2MgHDFfsGcFC",
  "key8": "VfH2Sr7Z3MsQifzCZ9y7mVcAzLdoxP442yFWJgv7ETka4thuDzMmGwAigQGwVKErWBToS2xJ1PeNGMCkfdyLXWP",
  "key9": "3U5DCRef7KKnyk8cLPRMPYaRGyKS4G1bVBV5Ss9sabhW7kB4UjJuTUkeJVENgmsHCqxgp2eTkjUECzhSSRGpNqeN",
  "key10": "33e11KPphEV1HBPYDy4mBbCnDHYxDKwAhgEBdcH3ribE64opBbDLb1cAdbpnSRecsjF25NA4yEpKYuuMQipwNbBS",
  "key11": "5fGUc1w1GSVxm3DVtQ66BctwrrKTTG44i8zr14hUyB92GFbjRu7yFtr3d3rR78GMSHAi2ALYtbbuW8JvVdhyBtre",
  "key12": "5ZXQxFB5m4bJ76LHPNzWq1n7RgTxjwTHT2e4SqE28nrS7Yw2xejrfvnHraY65DJvzNvvAyzN7Mqi2WyWZgFtHeUr",
  "key13": "3gjfmMFyY1in526veoR7qxLDLJQEUXXNqzhCtQHguKkRSwc1CBnRqUnDZTUSJ27DfK8hba6Th6skf1vtSipkPxvZ",
  "key14": "8HMgKoAxKgy9PRM6v9cy68ZdiSGLYzTSLukkCiUcnF9ycfodYE66PNbAwJRKPunkCqjWdAD1NsPPvvyJLzof74T",
  "key15": "5xoypkBXiZURPQ8FiExTTiTnXccuYXvtJbiXLCwQ4iPz6UAsn4jcSjLLNHoPVKW2572Fu6FVcKW7158H9feFfMTm",
  "key16": "3mPcuLL1j6MWnkFvbHtHPqeGHNbMKXmFzzXg2h5FvVz5mXh2M1xrX2c4UV6A7odrmkQZbDbXgvMGUMu4TU5WGhco",
  "key17": "3p9yUAAbz7vLBLk9DQGx3jhxjHxzRGVG9myfDiLxiGAxfz2TRA2oeeACAcp4g4HoM24HyFwUfoYtscwbXSPCD2JW",
  "key18": "3KXGzsSb47SmGxuZTRkaD4rk3GHVyTg1Ugq4n26UUQSvYKLPSG8vt1rd45oykQRQs9ct6x1mKfeVtn8mBqnjMcbU",
  "key19": "SULe28vu5JVy8JAcRmRWyCqbxh3XAajivN6nw31ox5nnZK2kmVYWuEvrxUq3i9GanguEYztqWPCd6t47gmDNWpZ",
  "key20": "5P18WJCU6uWwe4QAoWcvTya9jnkZtoitgZfksg9xVfPhTNFs7HgAYnQo68z1Ai34z94nLcmRguVd726yrTTeJ25P",
  "key21": "3zojYrc7Utsw3BZuDMUYhvKctBxo3gt9eduSvnJy687NXwfuhNjhpUNF3Am5gkP2noYHasodqk14hs9qWT8a9Wof",
  "key22": "2KtxcnwQu5d2X5gtKFP6uGY7dtHRprjVxWsNHV4jJCz8ohzFuPdpJP74MR8q9osNq8C6FNTP2Ba98icbsxNkDeWK",
  "key23": "5AfTf1x4xVozv3dA9RYam5qJqpGV4QccMskiSs8avuUzEYwS4f77RCfuQ1TAxM9T4WxEkatkLpWwgCgUUJbVkyzZ",
  "key24": "2SaN4iwMEQDM4ys4zoYKE27o44qjhNzEKCoZQcZQ2mk6ZsgEjb7nBEK4iB3tUtphQaAVQsDZ2yW3N9NRC3viD8U1",
  "key25": "5hxLzZGg4gA1a88drWBcSE7ueAwCPcdCELT6PbQ81VPmoMiVzUKWMNNj8uJrwFqH7r4KT8UZHwbbond1nawUs1w1",
  "key26": "48LB2m7VKT3Mxwsv2vRKZdkq8sgJqsTZPay8mwDHdKw1NhJ2oLvgveLeUAu3zSQm2tuV9YkXmMs1kkELTG4G3c4B",
  "key27": "HaMCsFNVYCvy34TZd5rnw4ems4jBqsogyzWbhq6MsnHXcSACpFUCSK9tjUtSWdVE94SGRtACrmPDFpBt2VNzfSs",
  "key28": "3sMZQNZBbpwgQWWUPx5p9eELfUitSdt8tfNdXTSb8qgzs8FuLpy5GmKiXEbbVhHTR8QTuyBEA8HRUXHpG8hodnKm",
  "key29": "4TW8iyLUigPpZJKDCmZz9LuJHA7uRunZA9vvKS7SmGFscE899EJFNSNmbWXk51sVUoEe4mc8HqpMtzLtk41mmwjx",
  "key30": "2zRyDSfJw693EY1uosrea4bkwiifDTNvBmBDK9Q87ktAQj1c3qiavtFGLkdmSBTVS1VCmgJkJyE3vtXHx92vTw2n",
  "key31": "4vJR9wGVaaETzLsZQLAt5fNny1EsRrFaUZFWqGSHXBbV4NZif9VCGeEvQsa3MeHxXxoi1kBM8MSi2AhY3tVusNxe",
  "key32": "a1dFbUdBNE4Ujd5w7gnEyXgkM4pB3Z5P7YFar6pm2e1xZ3oXeBzXT2uuaEKkKGmrDRNkUgfoFqebg4b7vBmgSyj",
  "key33": "2oeSY2sTjrMR413HUB4Tkfd5hN7bK1BecGNmuumsoAJ7k7J2wqviMLoLobhZtmf1w1M7TLJ4c5sX1TVkRoHQ3sbY",
  "key34": "38P6Q4d8i3EVbruz37V9Xay9pMBpq46s1hNouML5EC54pDoMdaPVavKKtwBruFQSpbVPceTBdtZLszTES68Cq9YJ",
  "key35": "4PvzJhoBu5xZi6YNy1aZtbHXbserj3rzCvVEAHaSuPKHX8BBcr7xZeRt9dbGjtNQJ1o5VUvdTbXgzqHcugQQJ8xP",
  "key36": "NW4XVfWGqMmZib6cKfhjxDYUkv3CwayyPgDn4mZLitd7x25yEaCm8zKXXvEo4eNmppSsHayrSMVRbhBrgWmEuUT",
  "key37": "3gfaJhMmqL1dZ6vxPCWSrGFKabaBRZTZtJph4Wn6Y5tkL93fW4QJnAYbaCmDwdps7kiUBJxXq6R3NhAPuuH3kFvj",
  "key38": "2jVs9R6j2i8njAWL57qTXQf8bqdGTGF4dCRYi1duDZPWgPLbicEkd2n36EUA6uUnhWm3Qiyp3A1FsJ7YAVxw6yTm",
  "key39": "35JyonYGDGqTUDNCWUGkQWKj8uSCdmweeLrXesE2aqsrbJbmaDovvoACFodX2zDCXjZ4oo9GrAihQimNUuRAm6yF"
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
