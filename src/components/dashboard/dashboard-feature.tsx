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
    "4KJySSFTCjgbn5m6L6vaq6r14i6SgiYHNSzMMkpi3QeBcAMvfDFRBGzsL3RqfogAMiXMhCqcF8y3iRmNTt294KBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28qMocdLhocafi9DqvaXueBeHAL6JCJGbB38AkWhthQ5a1xBvhY2bDPDCobstBGRbi3jrkAW8kxfx5FcemxXdnCH",
  "key1": "3rqc4sB6CD9PTDhGFPGZabergxok9wKuKBeMnWP616KZykTFpFvutLp9JULuJStCjizLUkBEg3htrPnjqqUX4nGe",
  "key2": "53ykfRjqtb8qRqCHXyFvcjZUZRayoKWBXpkokLZggTZN6SgAJK8V1K2UbivmUdmQekoS6vKhn1NdTNHRZb9ruSPo",
  "key3": "2RvBXgRJWobxJxdbmenB5S6m3g2W6QMbaTnUowfpR6sk5YiwUcGPA4TXfMKZZV6VFB89Bpbg6KCXQBrx6WSZwCC7",
  "key4": "2jCi2U7VgQMc61qyisnsAUTVVfGx1NEFsREPDQEr6FJ22rATGShprQaLdqTvyDfcQJgsrNCV5wvDNtEttH8bYVC4",
  "key5": "34y6MQUksCH1nVFFR621ZaPDobHkqP35VsHjcFtrL5jMTdCRHsV7fBzGRuSsfWWdn2wLKGjmfEv8cWQukb7wbUBf",
  "key6": "3yPspob3NEkt8gFqsCoWTXH3kjw7XhQHFShA4sGeTGeVviK5dXG47pfxQoHCk9LyBBUMiRqhK6TBfe5j3WhPsnro",
  "key7": "4d1NnVyKdyV67tBEgJ5dbA4nC61MLh8NSiaa2J4bbFpJExJRjxnvnN2put6KcNyXDDg2Sdzych6GwFm48bGH46pF",
  "key8": "4v85QNthXGzjp1vK3REFT8GMUtw9n6EEx7E11CSczvwFyVVvPSmJdPrSzoYb8YH8P72s2FCJpMsV5pJvm3vGy9Ru",
  "key9": "3EFpCPXwqMChfexj8ThZMjaRjAVYvq7ZM2dA7nhGFvRARSrQdLn2337EaMeTaT8K7cF4vBo4E9TozjQ3gqbn5XxV",
  "key10": "35gipBuJWKipwB42xKRvQJ2xew9nwohcEi7zB7ubQcKRSVjiQM3Vn31PhJ8wtEyNrYmkxJrXXhHeyW4M1JXRPA69",
  "key11": "5xvJxR4gd7WF7B58Mc6bVrKnWqK6ESwtGzm627SaZB9PvJebVgBT1xUS26vdeKLCrDqvRp6TNsG2MWHsAryLYXec",
  "key12": "2EeXSEYA3iC9Raw5q5bx5dBtYCEPCMwLkPF47aWd4GTUkZ9fofzadi6p6nzLD6HLMAAS4FHFwQmj2SMP2dS3dhqU",
  "key13": "5aczJu4BcQ4pV1pqnA6K5Np9S6GY4zoJM3puL3MAJWk1DBncBJ7sTj85DHHVSrDxokGKEPNpVEY55861oXgszsxq",
  "key14": "3qGKh3Yzhgs7bJGmbvdXRvLNVFnpi3N7oSRYVgsDssvEX1bkrf1gmFm486RehcdGmNXJUkHecZdax3VnX1jtLbsj",
  "key15": "4PMh2j7uF8Gp3uvqbgESKNbQYC61tEJ9oVqH5vExK8UWGKDUC2zb8z6TpYAPyyotkXy3oN7Kma1TkGWc1KQSeaUR",
  "key16": "2bYHLggAhnKgXnXafdGTxrdGgVHn6D7PTCwr5ennuSHY7hg54XwqcDArtcGQf7U95sNqAKY9V8XsLnEgKBsjgjtc",
  "key17": "5m9nDCEkzM9oqKovZVbReNhx9ykAjZV31MjTig8wm9PrrS6HvVhqrQA769SDNmoPTHShqfp9MS9uqpU76SmGy6vb",
  "key18": "6ciTFPqoCBGKkVMEGNYh4pCZaNqRaXTtK2cM1BX2MLCaxD9RCgk2hPokeL5KAQPoXkAPDcqwrErqcs7FKRUx1vK",
  "key19": "5qwXmok6MV2aUoNkMmnSARW2oAMTAVVVVvuD4HDFiqfdXhniDKfkxFDne99KbrvVkksevvSS9ba5qe3zcVHxHHVk",
  "key20": "2HGw7jrfKrczcGL5dwfqFT5GvKs6LsNmP95w2sjtu6ebbZ5epMKDCfYpLL6hYdktPm8oEH8YprqKUZhgXzUVtUdX",
  "key21": "3HqBRNb7EqBLAEK2XmaoYq9jxb2t2Jy1MQm8NdbB8mQm6XBoTi4joxFnGhm7tbEHViHQGxem6XKree736hTn8Hzb",
  "key22": "TFExLJYNRuWsvrWfBJa1itWzw6c6SpNp5Uky4sorDLVP89SKhShBE4cBe7e3gyUoQaq6iVda9EogQedG6YYPnr6",
  "key23": "a4KMY9HZrRYj1zkeX9DWPZGeGsMcu29TmUZz74rr4GtuGtpKg2TPy5Pt9kBRxiv5Bd5LrjqRAJ7ady9ZyTNeuZo",
  "key24": "4CfV869dWrUrFT4EzuegThKuStLWnKiLwo5X1DDWkh3z4Mh5y7RRNEcY44a3PpT1z1xUfRWcsV2fthfKdRGuSrsP",
  "key25": "2M2yQCgATG57HMAzFBJ3zWpeHagk8yfWYs6SH5jmE5CpDEZ8dMxtdVvB9KjK5ATacVNj4A576JV3P4DfdS8Y2qA3",
  "key26": "3zN25k2nenq7ygtk7xcAHncJBD1tiTKPji3zD2nkJtDMtbGnu8gkPrYxHtgZ5j4UWJ4ymqXC8AAVQL8ZGw4nsuxm",
  "key27": "3N1vheAgdTBNCh1BfkQ5uRyy1Kp8U4zcTa8Y5mwyg7rCtr8aAD1DPdzvu4NU5dTPUtpF9LMzQFS8wzGtWaKwjKQG",
  "key28": "5ZvCgDCWu2GV49kv7iF3FNqwfL5TsdaqsadPmMAr7t9N8yB1aD8UfbrnYPXYJsZLdVLvPJPSyZHgDMKmnx9WgUSK"
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
