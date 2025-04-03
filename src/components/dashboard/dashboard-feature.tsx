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
    "3KpMLMgpQJ7BABcFButAXmu1dok2gJNFkYgdXAtLDQ9bmF5u1uk7c7FDwqW4WvM4pAkFfRvEjTkhEzvRd331Q6En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454uRBUsny6t5YdXUkpQqhqP1n8tkJACuwdSC99hQyhbqjSboAAUGAoVJmNdFddVVZEno8WDMWaGTqBwCoXkMrRc",
  "key1": "42J3RjGXxmAqzJkbuDAoSLmd4HzstYPvFj8NAtXmhCJ9Ei3g6iDxuzxkfSJ16yZQYJ8aKm9cGDxEBQqvqjmT2KRk",
  "key2": "4bDtapivuA5XekdTkLjAAZPrM6ZtGwzposJmWjtdfCtqH43uDnfzho5Fo4NfppS3BnP5C7FyQUs8V2xDE3MCMc8N",
  "key3": "3dEwu3kqC69G4Q9DhZiwGS9PcTUAhmp5sinLi2sJkWewCZRbNTEEYPtRf2NRRygAkdA6iCQgaBH7cB7C6N7GNxbS",
  "key4": "9keRzEQT4opZzh3cff3eGdZtMi8DDj2phBkJAKxhYTjqmKbB7WJYAHYis5m76mJjWf5NKu1gT1VvFS9uwXnrXtq",
  "key5": "2u5nWWuHKQGfjWGXSVkmVRQvHXjSABZ8esmjMpUmhr9ujbx6iP3SJs6H5B2Kxh9KSM6KzeB5gTP4v9nDvNQsYVJw",
  "key6": "5h5oo3iSj2stfTuZ2kNH9eioCC1KqtUqJLRsZmaMrNdb3KeKs31WMTV5zPbRqhhX7oQMpAFSA21MczKqoGC6bTiq",
  "key7": "nFDbYEEkxnQwyEjuRfeGkvbXT4SBKKsmEB4GXqTjkzPt1NEvhvm2sv3ZY9ZFSCFU8QUqrNtHKfQ53yFHHtG8eTa",
  "key8": "f9TitKbx483zWST6kuZqfTejRxtp7mN4suR5NkXkwbq6cZnkcrL63EDBniftZnt1zyGEn6GsvJqQ7xFyihvhJY9",
  "key9": "5ZKBFiCczK9W9KwHYcXs1yvhV2UXGkeLgnCAP8W8P31BvGzYQFcoHU6aaAjqV5j9g7FkVXP1XZpiGPezdTwseUAv",
  "key10": "6xkszfjJRmKPZBQyAcL3RuFc9e9GdC8iQ7NGEqnBb2E1Qg9evTmmj1eXRRGbW4spVAxr3yohMorLJGvw5bXPmoK",
  "key11": "adqSjbWGDn1bD7HiaDxLhdDYCMLR2HFJ83vswaFeg8oURykwoDKpYAiopkNtL5zbKXABvb6tFuMzoD2boSZG4Jk",
  "key12": "4gMdu19XLXj3AAT2K8rbFpqJd12A12cEFUCNsCbUa2msVhijFynbV56stMMHtuA1Rw3vug6EA9L18BWcy6pfPAP1",
  "key13": "2AMPe5zSAfCxK7cW3WmTAeZpV9BPN3SgoUSQFnhoKH2R4fKxghzHUUMo83SVEjeC4HxdbrcBUjbQ4M14UEv1hE5R",
  "key14": "5vVfFUvG6aFE9XHmx97aUXktwUzXtGfsPE4dJB9ARNd52TXmYXDmhGy1RbWoyJxnzozHy3R257WMSgViAVFGrhd",
  "key15": "3MGk67jHfcg5yQ49coSuCeBFWFx6fNbZUJBmMybn8ZFfXGY5Sz6mKnig94rtdSWQSEqjJN8KcAh3pUJ1LbMmYTXv",
  "key16": "VmhQR7TDBo4Cu4L6VFATefsCbTPVnmJ8vMBRjEuq2qSne1R67Y3bkrPG661kutyBa1sPJfPqHVkvWBT3dCWCRUZ",
  "key17": "34KwGaGDZaQyM5WrtwxkWYQVpyDxskeHP9exp9Hf2Ax3SYYCRB5hUTG5HNrdmF2t3ShE5hrTwUxYE2JbVmHDkDrx",
  "key18": "5WZQkq4SUKXGzf5EZd9CkxEvkH6Tv5YyHk5UgEud2jWpvkS4F7FT3WxYjkrBHgn4vQPsyTSY54un4fsXBqeXRyXT",
  "key19": "5XvJT1fRTu2D1ZHTGKZ78NqVnqcNbmy5AT4CDGjNRMb8dR3413rFNVUD5xAD9uGLJ1w155TWjaGNBR8ojGjG4mcY",
  "key20": "3tbwDZoyxcxA3czkAazFF24PC5nCJ4iDGbFmEWj1CBEMZkVckBWp2KEAUBiFNhBhvcnhzeGVTSA1rwGK818eiiJP",
  "key21": "272Edg4FT7rF5KbsUVQTW7ABa6326qD7QZkRxc9y9K2nqJ1Ws89rx1N2AxwciftXhq95xkJ86wnZap93Lfq8C4xZ",
  "key22": "22topKgyhJuGHECxHqH3LKoD3yRazu29N8WacUyfay6dq9yfK3xKiY2riuek9cGdJf1sDm8UWjHVy7WCVBDtGZFy",
  "key23": "GAo8YWaUT7YYutBbuiTitmUceBga2km9x1RhEanEAZzKttcNdwUJmZ6of5hqgXEWsmVsszWo1UVNBQcA5tB2937",
  "key24": "3s1BJX2FvkJpj6i1iLh2GrnUx5HHZRsNRKPUCVgMhVfGwZwd1VLMWryLPZ4zQoHxjtcWvsCNUtdR951ieFbmiEbQ",
  "key25": "2pfuykV2RY1qJ6Eyt8uKLXhzZHQiME8LcYf6saX4ghTS8YJADzQ2J3thB1qywtxMHsFmL9TLSo2w8MdQKd3ALxeT",
  "key26": "54zP7q8YA1tZVR5w8A4b42gE8n4HvZnvUWUybM3CwbYV83s8YYsAxyKhiduYAKHbrXRttmpDFyzeZ8aLuhWuEVz1",
  "key27": "36SzDsc6ZsUTUEaGoq31E8Qmv6mQETmqxA4JRy3nhZz7ipETpuXsoJDNMmt7KV9Ds1wCSDNx6dXMScjDjT5D7KcL",
  "key28": "3znULp4JojNfnh6XfZJLaDKKk9L1qUcmGKDLBCV6VPRVYPt5kKcos7rjzWXdVAz3aCDkDojaMbAN43VmmXpPgqWZ",
  "key29": "DMXRELyKuLsAMB4BqJDzVqtQfW1gbYgog1qy876uHDR9RBqnUXprts8UEMLNd9UPFsmSXHncBm3r2RjUfoAgrBk",
  "key30": "48HFDKu1Y2oJq7VmdQqZH9AyjniWtR1eypTBsbPQ83tzjZetWTGRLWLK9qURsdjhPBUZjJsTm23JXjyB9FdQWLtY",
  "key31": "4wheu6A2XrM4cfPdFuEQeF4SZHiyAZH4VPCQmLj6LmdbmGWZUUkm2WR5MMEreBqXtJK1TKFm48PcFasefnxgjA42",
  "key32": "3Co77uR1gaiVXS9HQ8mjenLPsFJVQY4VxTfoLy8UxWUsS4sXjxzRy3saoPbmyh6eQ3WARhqUh4mqDPDNVKtU2QPk",
  "key33": "9vWCxAJEAroYc1uiKs4854LWYjg16fmB8ivu8JDxZbLJz1F2bAZq9322CqCW2fCKbjVZrRxNjVo8ynzkCr9PiGz",
  "key34": "21agXZbf4L7Ug4yzK3VxD9L4wEMh2ntRA2a3RyhsvT37BHKF77E3PrponvPspop4DzgEEpHzXnZg4abAJDH5N8MW",
  "key35": "NtYeAcabzhWipzBJf1dZ9my1wBPWdrd8SEoGTGA4vs8iLsP8ptwerc54MMzAwphJNqVkuoBveqTZtyk8s5Hfc4T",
  "key36": "46rQQ4zhqw3SuxpNA2o8ye8eCyYk72NFTvzCCuT63bPvTAKAFfSRQV3FFQ31wYeZbYJHREuuWhKv8anUUt28b4mR"
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
