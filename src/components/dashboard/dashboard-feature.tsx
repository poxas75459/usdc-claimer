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
    "9XBV5V4De5WufABAR2LfZD1rRwXcetCSBGZ5LVumwv7CRxSgaiWnSkeBvXyXhEjatrrZWhfKasH2xphb5m9SV4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFmfQexwzQ3hgPVgJcFZmtQNQRFCQvCrt2G3kQZBuEseuoko2tf4M6uodXwzDijoNg8vXkvLqufWuMFSQ9AkpgM",
  "key1": "4YCBAS7wCeybvq4EiEg12YZmTp2MeFVjFAS4TaSxyXGZq8Do2vV2Pgp1V4hiFKbnSY7cSjjxVeUj9UHd2B1WZeSS",
  "key2": "2G9roJPtda8tZNzf9B3oDu4tnouPwjMFwHjfaSDU8rUuUyRaW9tgaxwmF8zg1v8pF7H2jkDk98S3i5q7Zgv3MJGA",
  "key3": "2yDUYGdwUxtvq1tT7L4a5vFg5zLA97vWC1XdERkCQ8dtYwKEiAcMniQK5zuXSv4kta24SWphCt5Kiaybb9uTmBsQ",
  "key4": "5W8GWipy4hkGfsqHtnzxHcRtBtPzmgfgDMSwZgXWpLYRD8LEaD4BbNAedmEHND6rWVq4F5uAnHJdfMm9edfodcqJ",
  "key5": "2KpgsnyqxnDwoi1rikW3T84ZzntMPGMoCjwZTtciSpMrcXGY8HT4Yg1Xrw5nwGpLQ36JSk7UmR51CKZp31wKdoe7",
  "key6": "3cMbAqSQf65ZhE85HHGWDBD7HA5J6xNFWMtsVu4HSM7NSPJJkSLYMgtgTBy9RcJJqSPww4s9Dw6nELBsx4NsvdjE",
  "key7": "3ANq5n8S1wjjzZui1GKMWoAoiPZVEhkZJMkXP44AFsCJ9M8KbJAMz8ouu8EfWJu58vnCh9Dst5pPk5cneDGes21U",
  "key8": "2omFDuS5eVQugTcmhMCjVk5ckQvNH8M5UybBQFHe7eaPd7AoRM1TgtzDzFLuqXGfvoPkkmioT1enq9ymgjQreGXB",
  "key9": "5swvgzNxE1V9KmmzZ4thTxytfhmhWEF5KsbpDF1QL62quf6mXBws6yEFpQKvaPS23Qqy8trMWKeFYGoDJ5nvTtCr",
  "key10": "7dznBtsgb8a5DRGEEYMZQmf8f3Zd3wSdn6SYf5VBeMwgMQwVGF2jPYEXF9JhkJdG97ok6EJo5NyHQ1rQmL7bsxz",
  "key11": "46oPLawPk9Z8vGfwhVPBEKAybSvcBsTvBXZqtK12nmjECkPMY7mQA27mZz6c4kmdSCDUGHkF1ZNGrsVa6qvZri9Q",
  "key12": "3A43km2Lr1WuJVTeqewJrGc9U1t5MrJN8hWqLR31HpbnPPdv1BGavBF3D73mdRrAQJ7cmCBzhQ6r6bQMUthzC3yZ",
  "key13": "ppS53m1chK7XAinLzRvNtAqPmXukWgFkJAmNGqWWvJC6sC9onM6RxRrvpxLsWSRg41xF61JoM9fAiYynj1KevrT",
  "key14": "5UscaSVG4GRAbPKWUTfFx6xdNbYiPq9arGBkesUy5bAQsSDUWUdq19WnpicQhw9AsegR4H4UankMHqqLet5zxSNf",
  "key15": "WsDeyFonEVycTdpoTsaFPAu7avRNEEwduXTvmQ7Q41a1kzKGuHrWzGHDFNoNUPQSHS4tHJac1cU7DNfjv3VWWdD",
  "key16": "2uE2MsKhhzr3bkcfDMLAR7nUC1s5TnGeHx6MKqFpbyx9Gv3tbcRuyMTabEHEKhMVZrXK12HQnLenfLHURPN2W7Fs",
  "key17": "2ohLHFwxYGZeyQamf5MUYLCrng8y69uNsno7j66dxLtkA1pP5WW59KaCJUnauXqAjzr6egASqLmWtAz5EGVW15JH",
  "key18": "3da3qTzn2iYwNgCoCnS3XjDgpdQxiNYNF8R4cn44LoZGNFm5xJqga8bJhHp95jHcD1pRR6M2ywCQRXzMBG7dXbX9",
  "key19": "2DprS8AXVqfDfb8WGitgrRSJA6yQkDfyAgvWBRVXGBGv68CGmjEDGdimNK3zcYL6DEki2KSm5aB8YxUWyjLiAhAW",
  "key20": "34YdiQSNqb7mFRroimoaGjFYiGxau7STytKzoNDxBJaZBSUR4hjZ6KDUhb5uNzRQdLxetzyiwADg6RCdQVuLANbr",
  "key21": "5q1zKu8VTEESgeN9cfzWc2HWQJmA79XPaVJ7MVxupu4NCK8qqUQEikgM8VCdeVeJ6y6pZekaEfUYyGNwnnGVXbR2",
  "key22": "5M9Ppyhh6agJGK3kmZbrgjeAXjXvWu7TgEf3XXsw7dWDfpPRVjPMVDNVgjqfhPTzPg7SoaRoTvGwPKQoqbUpt6SG",
  "key23": "3RwwuHkdE4GJsrcbgLh6LVbDW32CkNHK6RKDEN8vREXiSfmwobk9CyrcJBLji6PK1F7xnw9Yyy52UywZLW2LJ4Yv",
  "key24": "5oHBi65VTYDaZY93HjLgfkV9Et1dcL1bTR3amQjooxJHR82cR7CFJYd8eSZfAxmTC6JXbEm3rRUsJLK8nGqBEDv2",
  "key25": "5HzEEBZaSionHZrRQNziWznDhheP7Kv1rvyhsUndGSJoeuoFkXgH62m7BXsXiz3r5j8pV8zo7aLE9YD5B9eKvYoD",
  "key26": "65GDTcEnRt7qwo1rNJKXeEy7pQzit7H47UoZRuru3AAvVGaGVuvZ3QHaw9HF4Y2NJbucE2WeViRURnjr8JcN3sCQ",
  "key27": "3takRxtGAW6TJAaA3EvHdTLWM9waGmG12qtsUZ67UGFS6hbEyvNEQ7zHQsiqht3PmHEohrTpSwiAQQ3oEhvwLKbH",
  "key28": "3Srk2jk7QWPr9UUqFFm5V8cSc1ycGtJfw3JGHgKDccnXMSmQeinZQdZCDFa1tBjFJbLfEpm27vc7xek4wWJa3haY",
  "key29": "4AcpW3u2mnkdrqYTDLt6RomwRstH5k8H5BoD9qr4bjFwichLEFSxx9sq9vfitNG1a4VqHZZrj5pSdN1QNArQitgi",
  "key30": "41azN12AaqYbzp9tA3vLQRzi2bxjumYNybeiLcY5wLZwJHfRxfDWRgMaMmESbS4MBvq7fNp3SDrdPc62P6Luignh",
  "key31": "5HMK7uHQGB1UPm1WXY1YmzYmhbrYCUcg6cpDQhnGefXzrjbytJMku2NiV5TwBa4JEuCwUohvcHQjfV97uWCMFHvL"
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
