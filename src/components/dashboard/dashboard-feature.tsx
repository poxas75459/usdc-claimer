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
    "3CGnrPitQJZ5LM28Zsp5URHpEamVCFGN6jkpVMvrBdMA22BjdaGdY9BgZW2A2pr5iWik22PsS1f3krVdSsMSBYMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42dXtRq99dEiYkNzYgpJT4YfMPHYNiJie6Q1AacYY9q9DBDtuABPVLYJXE13sdCvVNFTLneRAWXAchBEVMo3bcQF",
  "key1": "vhrvgoVcQriyoiKTk1YPctDaoctMAMBmS7kRd9GkH6vH2bH9HbqHHJccLtPqMZCEsu8bzzMsShKDUonxYou4wWL",
  "key2": "5Cvba5M3s9gUSfvN6LcVFKpTWfhFNrq4LBx9MdBD41VMfXkVDDUZRj4XyVoXHAdVG6KEcy6EcHPvvvS9VU7ZADay",
  "key3": "ZhkvN3RMjahS4oD9jEXgQJqcz6YnYA5dQwUccKPharYYkApNGWWPkX9XiatJEArGfhV5GihKCdHYVRSC1wv6qrE",
  "key4": "55fJDh5Pn3QiwjXGyE68x4TLLJKcv6Ag2kyafJh3EoCSaqQU7BqTs2sQnzQ2sBvLtDs6SFCFxwDwRYpUXjjetA4b",
  "key5": "3VdQ5TajQrLsNbZ5ahPjioRgj26npxqLDaxgnqExxvY6FX49GPD1w4owRLCUm7WfLL1KVfbWV7Y3pREYPupPz5R4",
  "key6": "2ggG6YTtncJG9DKDN2yy9PpzB8v7MYm4r3cCZKwUUAQqLvKaqGdJf27owcda55TaP1kzNCTvHe5fL6TnFBFrGqn9",
  "key7": "5mqgyJB4hsWavT6Fp2uhSxoQk4ZA9qTaFeEgdTny5ZhNLneixJJJh3ZTnJiykfTyLT5qUJFLUgktijojGF6G6eMD",
  "key8": "3W5Z1PqkkMb3n9vBPZLU7XtPQJNVvPKLTSfD3CY15KQhouLFVLU9ozsx4CLfPM5xdSGSghmtJ8rXkegzoenw2jG8",
  "key9": "4Kcsfqh7b5xNt1E6vG8bQ96AfQCgMZ9WPQcDZuVG3FNZsgnTZqWhS6sSs5RKZM7FTYhoaERftEALPhLFix3VMye4",
  "key10": "646uekzvUhhsVToa7smJWnRjwYTUXf6zMcx8N5wibUBRrLYbB3sGyy7g8pkxM5En2HLref9cNgKYXTLbE2ndX2BS",
  "key11": "4pG8wVzescDJWzAdHEa2exMYH2Rqq6d3cRwNQ6KB3ncD9pcCfEqN2xdYWJuR92jsxJojGv6LkatcJ7G3YifhBjVt",
  "key12": "5K445kpvuxyDW2EGeL5PZbafTAsPo5DYawgF2S4T5yD4fU1kp8bVXiZg3TXamqBKE6jGm6iV1mC1qFtrhQzSH78e",
  "key13": "5egv8Rpf6X2kvL95dJGPknhLVE49j68oTAvYUjzhAwMTgkBDGJbH7P6RVYTdvu7EtTwyA6d9wSyKWMmKA9CneHVi",
  "key14": "2ZQvy7WPLcDnGfXqy5dcrPZ9GMAs7fwRwFUD81K6mUj9W34QNbkHR97qXqs5jmesrfnZJQ7hWgsgtwRGXSnwyYGF",
  "key15": "TdP7NyQmyM969rgzsiquQdfqXxoUfNTTzeaHQNUYy15XWycjaTR1FC4eYGqgoinwwMgAzn8a2FWJMyBfVgxkG5y",
  "key16": "2HUr5zDJ1deS7y6pjCFa6PA91yik34UNMjMzLkCeppscYV851un9CFng1tWi4p1Ec5aT96C9ENF1zb91TbKTVkFt",
  "key17": "hESUkV1u6VbDCFhQdwS7Z5VmusfhE24finobqAVLMrnHfUFsfRMLNvqTZSPwjyppYrnAHEZkPwVrEMSZoRy2Gma",
  "key18": "4whRWz69MyQaeqXNJusbumB19P9H5ttaes3D5D8KPFimfBqN4xDHjuZXwHNTEZc17VX6di8dbbnPgtYMdAYbhzHY",
  "key19": "4b87LdqRhQvSB7u6R9corjpcEstpjbEfHs1jXZk49akbQDArhVWUcod5Qbx67eQB8xiENjFfE4JRQ4G2bh9oppss",
  "key20": "4YtvGVuwJZRA2HkPNmFCrsNPSKVecxCZSGzTBhYVpXiWoq9bfZwXZvXnVLvhF4Mzb5UjzEmWF7QZtkMmwsQB31E1",
  "key21": "5712PiM952avsDuf275w4NxTcgvEK7xq34A6BFZoC7r9wDKpph9UjmyvGSaNPg3MeHenxFUTnFPC2KBbPXDZhSrV",
  "key22": "8swQbyYrtStS4jfFhykgn9SWvxheVWChsZ9hCvCX33PbDVzZqgZMe8GuUz7Hp4MgJeRhfVoYWYxqQumB3RBqPhj",
  "key23": "4Vs4VZ6Q3iVcUFDwNWfLGhDaj7yU3nS5PvRttcWugtGHKXZc3RqvXpdapzKZBmRr4KZSub3ZQU3TnAqLpN9HhW3b",
  "key24": "3Xq8Fugh6Moa9xsFqjum7pMMPsWhyKvyGWgQEfgS37UesVCVHRNk6MvJ4ThPace7YXLKz4PpZcTk3qhAP4Gv9RC2",
  "key25": "TCmY9D2w3YfosCeCWoifg7vQTv1Sp37iHmCzLKxJpHpM1zaxYsmxWqimdYY8rR3oUXixepjNJDb7nNkD1pNDgbV",
  "key26": "3trHapVNTinzrZLDZ7vMNM7v56Anzyhg7t2wpS5Dik3sFCGKHaqdwHLy4ea3vHP9mS2LPmN1W7RQTPJgvXSJ5SMF",
  "key27": "3Z52vGB7UTtc5Mi8Ny4zcP7mb1ZZZ9Se3QdC8hRJu7p6rMnBp6jjN8iHxbzeNdJiQNxVnaKYtzKD1ngrieqmprnm",
  "key28": "66ThYrzdKs97z77Rh7AwQCX9MXSKgB8D8ffFdtWbKwiPPH28QMPYXBv5zmvPt2cK97X4s2LnEMw9tgg185axmmDN",
  "key29": "255A4yi6DVTS8t4ip3A7RqcnGC2qFwCkTPewsmRJPy3BDtdp4yQR3YnchGHRKtsF5cwnkgwZbxQ3VafvNbjw5wUR",
  "key30": "5MsnuGRzEPmsB2KAXQbwLqW4P7qZ396fgeanWEibbWW97KP3WfNtDePQwzxDeTTAY6vLhQfoqcFRyyoTDUsaHLDf",
  "key31": "2St6Z1M7PNv692fcwfcHxTbtGPxNMpmRgMwzKeXzLnD7XgCff5QUJVm4LDqu832sKW595rMHf7MAdwXmac2Dhzq2"
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
