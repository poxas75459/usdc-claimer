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
    "47dTtAPr2cwejcpnYgmRch4B2h6aPsZAMmqJBP9jKd2BRLyoo9GKn6VmMRLpeHTer41RTo1VDkHbbvCMxKCykLAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDsa4LaMPNTS71r44bbPRAi2xzb1HD7NwcbQP9rhkhSfhHRM9eCLwByC66mu9XodJ3MTWmG14SrV8VYeywaBTJK",
  "key1": "5B9RcXTsXrx9rLdV6dtb3k6sFFdbydH63TqkTymAfnUGFg2Ry2fRxbEmVarg7D9FKzvXUjUKzG2ax8JPeKhvQ1A7",
  "key2": "2KA13i6agFmeG6bhD526TtPt97J3HxmimmZWze5GYsMmCpab5zBQdDiWjiePkqd45SCa4BeyyiTYNo6HLKGFb3sR",
  "key3": "2xtLspakTdJEZ8CyhPuVnpwzthGrig5Nz8cGfaw1LdxWExKkee4ZrYEnaM3ErhYi5PduWPqRhapoj3bEAHycogth",
  "key4": "5foo1ygakyjBGcvYWhae6ygrju8EvgcM2gMvSRJAm2PAZWbtv2XWK7atPho4kzoEQ7dnXZQqraCrFfMDPrR2SkxQ",
  "key5": "XvuYBeCLkv3WSwiu8K3M1kjqL6ECBJsGxfNoK1fo4EXMwFKcmG2a4bxqCH3Ym67d18MeFGojsoPHjkznwPhnK5Q",
  "key6": "4FtbT3ztkdbdDq89TLFzE3rEhxHYSwvN53RXUx5KdavDezNS3wdfN9mNgCLmTfjCXGHYTJjJmdQeT6vaLLKGE11M",
  "key7": "fw5Jn9FMPM4TsEKqqCQz35ij8X5hW72MbqPJ4s79MKei8MroJncomGvJJDuzpdoJyJ3HqMNh1t5orhXzCjrigyb",
  "key8": "4nBaCdJbhR9ic9CWqcS3MKwbkn2TmFznU8NttRrK6BLJhyQb4mhByeF8A6RJFoWXQEzAgUqkKDkgngMmfGYjKkr3",
  "key9": "3NvabFwH1sjAxoJVNVEsf3jEBYzAje2rHY4Kng9wiN9zmjb84PUD1DLD8iJCZicPXzeu119PRwYbB87JQgZgPS1t",
  "key10": "3MYDq5Xv49akUgF87GJyfrghYqqcPqQc2kpPsFBUR6R4H4ckgB6aB9qrH5E1cVZiDnydvorE6mkFBuEwcakYFPCe",
  "key11": "2sRa7DjbN91faogSfWwkYCXH75emyyw84fsCCTLgninhjm85Pmrx318xosb3RXjQUyMGLUcfkiAGib3yHUKjVm9B",
  "key12": "fPNF17dnF4TggvAVkiny5mpsjoyc9UjQxZLcLCMURnv3QHJAfEFbPWgd4xVVuhTD3Fm88Xpv3Kr8mRXFP8zBkUc",
  "key13": "3pHiFsSGU32aDYgtB726QbM1kZJ3fLJ4kCHRTdFAYPseqyahqeU78rMDPttkNQ3qxFGcZT15NDkuP9uR1ksnuYY2",
  "key14": "18YbCmYwDtbnpzLkKeMHh9ZXLJ7Au1Mif4VvTn8JdWPWSpzhcVPVZE24RxhVNGQxbZnrjQwdgV3VGeJ6xoi95Hq",
  "key15": "612CL5fTzCHsVDRj1KkxEBEZWpb21hMrVYPZFyzb2ApfARXtukJz8xwzfCgNHeFAwuudK18bP9j9XjEsmXAadPQX",
  "key16": "3de2NciMQTpRC6VMBVY6np7qrjdUbGezCkGt8ejLwV7r8YRwuP65gnPeAjFCWmCY72S9ejyHbBsJ51zH6SX5y7Nc",
  "key17": "35Q5tjPbnuuvZHcMuVGmLbxNfAD87okG3d29ErMpC2u5zULB1hUmwfh7nvo9Zoz4yQHKBxXHKmrCXUW5Ne7sTxvp",
  "key18": "3MCzRtTqnhUguiFsrqBRVKqncFPS763uaoX9dGsp6KV3SnwZ2j32kgr43okqbthZyjVuqTXX7KbtAHqMCw71QD7S",
  "key19": "5MCvNs1KCEzA6GC3pLMbwVtsiBq8tcwkJJGECuxLfRkiKqEsW3SjgXDBPa3YdgSogeAbXUn3Hi342qePdQQEEyYg",
  "key20": "5unubvBoU7mijdEANDXiPyM1So7Tbua14BjDLTfSLS9dqq2KtvNkdra5YWMa3caRnDU2PormopMRNxbZm2rku2Hk",
  "key21": "5hVCGABFuCZa8gWYw3UboCbR6f9RsVs1DunG76GWKb65mRi4MBLi7G55kqo4hzfk1sjd8Y1ih3vFC5Emz55eXCrx",
  "key22": "4R9b1go2bWbSKTH4p9qRkA6yrf4PuPCZbHEDUS8rfxHX7ZTyhR8a73U7yxgi186fZrKweGwv5xUjFeeptE8B9qP1",
  "key23": "5eVytZgLPJTtwQu9wRjKDL8BZTGY51hLV3Mtx6Ai5iqEtfUYHeZWnyPXubJTd5tHZGGeruLxLciKXARUxnATVjF",
  "key24": "4oSmZLHDhEg9wK4SdwLjZvru8QN3buPWRVKTXnZLyiF8xmB7oe99FAUzkFBZSsmyfnhMBGr6nTmXa7rDZaiQM2Za",
  "key25": "3rLEeS8bNU85qSd5q6ABUV4B1GEADkvGJbsVNfqv7amneC2LStJ5EwgmyFZjhoo12kMzTL1osHbUHN4DZnigNEPS",
  "key26": "3t88LoEjEgZEVP2He9yU5kLU6P3sEoXidLKWuuAXs3rtji4Bikz7A4d65o3DruuZrA28HeHuttxApzqYgkVL6Qt2",
  "key27": "4YPSDegPTnhBhVAaH6PDf6yQV5w3ZobWUKoBhtNk7cFZB5uknLgsjWSUQDxNLiLwqSArVhd138K59nMP54nktT6F"
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
