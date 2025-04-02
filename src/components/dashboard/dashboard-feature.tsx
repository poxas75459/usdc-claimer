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
    "2aQE1Mh6AdQaC5zMNtFRbJ29K3hCutnRPL9tWyqSnwXYLtwMbGu2a7aWVKsyixqfBMuk8YBaRjmAYiMaDysbjaMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eKF1wA75pcUTrgXuaQLmA6dhb1SYF9Lbo8bC4pthkg9WmyQBeF7CtZB1Sc5xHCLRr64bh6gFvVL3uZFYgTR5B9R",
  "key1": "5eX3mgcpBG1U61DHbojFWFEkMSvwyUspwPnkj1H7i43HB4wVLmgTcEX6LusPpEN85UVhAB5KSK35i5AjF1rc9SsV",
  "key2": "27Yvxcvy5sULWpJLJBU4XbQXm6b364p3WxwnM9BeLi7kWe6bEWzmpfirpnBNTdqRifuRztfp8HYWCEdz2hYL7zWG",
  "key3": "YUGkN5VP7T1e9ZMnaSF4GRzQF7WTySxtX7DR7378GF5teF6UJNeWbFpio1y4ZhVjdfGeQhG6KodT1bzrgnihqLR",
  "key4": "2eZWFbeafG84tjnog5iz11f38KvtdFXBFQCryKakFSx3Pz3hsNtmGkdvFYak8QWWoxk48g8ud5jAxQtyMKQfG12",
  "key5": "aqqVwGAJAsB6QiB1PkWFgKBSVnEvo3MmF6GrAQvacbsSjufWXwnzJHSQi1rHFf8zfpvFjkvLfV6o5BZQCGzmRF2",
  "key6": "3gYEF5FHE7wMQ2J93AHcvSXaGT4d6v1aoV14UYua4xwvDyPNCMmf8gmjJBv15hAgeWjNZsanqb4ZiowFtFjsYGUb",
  "key7": "k5ecMnudtCHWGsTdP6uCdrpZcCmqaXkQYgHbwve2yMCJdWnQu2pcVU5akZjnSCFTQLyFbsJ2r816mMgoRoi8bsT",
  "key8": "3TR25tacTaZVgf8dJXcqnVWq24R4tXRquMv4dSiv9htB6u9g1omjcAeyWdL11Z4wVBnN4cHpuWhTFmsE5voYymDz",
  "key9": "5JtHgLECyUHegaYTi8vzibXBFiaAKEEfAT2ydLWQ236yX9kwmAm3x3y8ZSiiCjeSaDaMPnsAY41bLwDroWutAbqX",
  "key10": "CY47is6jtEZ7UoPmeYx5ra3nMJHL77otbaFf1eJtzKnxKRQFWc8H4VQY7p9xTPQwMmCzDCD3GJfTFmqBXvnBCcR",
  "key11": "51NTvRuUWzUaT5XSETFNgoiMK8DXFs6TSoeKosptkmb1hG9ihQVUJuY5xNpp8u3Xt7jBk8ycYa4X68ER4tJrP8Fp",
  "key12": "4Df1AxG7xgyKFRZiVDpX9V296ahPz6nijza1Xcwmt7UFXn5x6qU4rHio5KS8FQuZyARXVRKULCKabv9cZKWvDH9z",
  "key13": "4ZMieZGRySQoSUmHRQRHSZ2m5JUR9rwYTHxQbvFNRU1v5HU9YxaBbHdiuYmjvhjHbEAybzipxe5QquX7T1DqhcWp",
  "key14": "3Bwic4AUErN3QirWK84vstspqFLZsrK5fyxAG17bW34DBt16jXjgpEaEfUrnKQgHvAyKDaS8SMPN79fXahBomYii",
  "key15": "4UWrybgvokNoGaQPzSN4WAGj96rJvdRrt8xPDxS1fMyZD8UfLujRmQXj3gGYP31GxFHHfzunECmBo8yfgMYXQ8u4",
  "key16": "3auXK14mL4PuBTe3tNgqEKvng2W6Ezr7BtfUqKV9SNuuLaGY1PyqrYPwgP7mX7gb3H8Ehd6rg7dTo8KThPRxCzuW",
  "key17": "5p6dsYVixtBS6g7VW6tqDwB5YKQyeuwyXN4jHb7iRzPy3cNczr8AfLbTSbvExt1dQ6cCNnyXYUz61pQc7Yyztgm7",
  "key18": "3GsQj2PEv75Ur35izZKV1t7V2pNLGNq15VYE2jsmbdXwVgZeVgBgkbF7JJ3mcq3m4T1QEgctf3XGtbAJRcB44bQw",
  "key19": "zpYf9PLLB1ayESg1UXqbuv8WKSudns4mteeNB88cNFAYqucKMc7EzLxS1zBAidYoVgm9sXvuW5EHR4pydUfdeLq",
  "key20": "5DdibtZ8eFSWLhsxzTUQYWsipge8dfLqJujbRvue8xACiGMwYyQYSvT7js2XExUNn9m814DDj4aqvEQY4pkU48HP",
  "key21": "3K5X3FFZfivHtPSEyrgLvoYcLN68jkfSkruKRtXwzKUZYgtS7C7auqfunmGYFefqt9k2zL8LetqqDJqVYbR6L2Ls",
  "key22": "65DwjbEKw5TyTnWuzv4LK9gdUFrUjsLxe434dCCykzo3Fg68DPa3ENJZRrtAeXJtQSgZVbYa9sWWAF5zAxL53VHu",
  "key23": "5fcKmZ4ZDQ8tLVL9MEzqSMF5tBK3gouMPxx67AmUEVmGNCxFqdk38rZ9xAA1G9LXgsFifJBffFzFEeej8LTviJpQ",
  "key24": "5TkcCf1e2v3THuSoS6EXXZ7FFjDutvgpQmeauwAhKBY83PfdR7ZYpSuG2qRrtRpLqBJ82s6mPXbm3WSFx5EEKcea",
  "key25": "5LZxVqCiB6E3uhiqUeATeNFZvn8TC8HWJTDGWHcrcJ1FWxBBiWJpmUWcL7xmCf6F6Dts1jzSLSLNtLw8HRShkbC8",
  "key26": "QcgpfpnaWUkQFhKY1Eg1UTMXbsW4CHtxH9kmtmjjs3iagyWMxkGkvfAKntf6d5fZX2PQa6SfPfLG44saLunPBrb",
  "key27": "45NBvw96RrGE6Dqd9q3ntBSHZWNJzJWyGPj1vtGNZuMHafJWNCRH5Lq2yhqCPR3Xhsmr8PpKuL8Dw6zTAEAmoi2T",
  "key28": "3FP1b5DaH4KKevieHsLp9qX2AJn7rNFmmLRWgjN4Z7adENSh7h8VyrkvP9RSAAKyLbH2Hcm9PndMMMrS2uEZKZwt",
  "key29": "3MFPAjCK8durfiCnNMjesTocx47MBqzZdVtCwT1a9seLf89pwHoYkUerqJWSuMT1TnHLxBN1nDXC2FfCyEecCFAC",
  "key30": "51Em7AHvpkmS5YErX6ToidjomQgX6jE5rVpFiSFW7V27KziBpv2Arsqk7RfcfAhvLSZgaDTdgVLHm4aWTmMFeVHN",
  "key31": "23BxdmahtNkWwUGjxuoM16cz5bvgTsPxaYuJfm8uLo3CSKCm4nfroch9G4751D31taD648ahqo7BoDsmtCig7AG8",
  "key32": "4mqfsccaurNKzqdBbaHLxkPtewieDRVwE6Mue8Py8mU6iAt3YcC2RNnHCcBns1fw2RnxmumSDwPC4f5iM2tc7mpa",
  "key33": "2R6Q5o9V6MJVZK9t5qbeaYSY5WR2gkRqEmm6ALKAKtMUebZJKAoZGoHciRKGhxp3jdKt7LQt6KKtHPMFAcM2ETd5"
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
