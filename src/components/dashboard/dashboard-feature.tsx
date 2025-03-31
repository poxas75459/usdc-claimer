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
    "5pqvCBXWfNBDJoqRJ7HV1L74cQgv31WSe3Yd7zxFJA3TuDHCeu8RR2MjH9VgnJDZKM3DC9kA9ay6jfNHiq7JW4iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eui1jyC5etEStWY7NymFtpCoxvaEyZRDgfWKWwR7nWibgqrvUC6nJiA7t3JhGqr8m6voV5bRVeCH6WGYtN9SAvY",
  "key1": "3XvvFffHZ2ZyENVoSepmQTEAMrZgwf82BWKsqreo67dLydAAaawDMpvHVPYNoNkpdJ2QLMzYTn7wfN52buh7x1zU",
  "key2": "33xCKUzwaSzwfuhi2jTR2cwsPdLimJuT125daurXv7hqY8CYJbQt9AoRNFTnsMgbn75h7tCNsMg6Y3wTJNE9rFsx",
  "key3": "5AotLtPXt9af1eUn5bTXpXnKYirhzP9fWHtPqaTJni37vggy6E9TYNs8hX85o24gYAYzZoWwX8MACtEDRsSC89gw",
  "key4": "58EZ62wxnYxyq22EstGK6ESoH96ymq2cn6y7aaySxAzDK3hJhTgBPMUPAs96CBJmKZHwoeoaRwHK6PdzFY7Mv8di",
  "key5": "2KTPgkGVg33EMAQX14UG3Wnee2Tjsfa8QfByYaFsifdXuCcY7rM6nK6FMmxjuTyT9iQnMCgHMdPFeoZw6Au5eqnq",
  "key6": "2BiGcMMkZDmJrhFmymF8UywVbTLzsSfRs2YTTbhJZKV71i5D9aAB4WzRF7MjTLYB6NJx7kDemv1tA9tg7MjruT7D",
  "key7": "5VeksXXgczM2h3wsAEnHQGQcooPsvsfDFc3mUv5CVQBAyrH9MgFewv9oCtkfo8ShMnV5dSXeTXM5hcNrBbCx8ENQ",
  "key8": "2QTsyVSEtzR4tj2EiUsH4gcPuE4xhDeaZgZDs4uJdrvbzDdubMJuYShSfX5q2e6QRqJfCqNcdsNaNna74sWU49Hf",
  "key9": "447vL9U2DemSmLdGYSVz1KdNQEtvSe4d6FkkfFE98HRvzwpUWXbqrqY7XmTVCg4ekbioxGXuYNHLaRAQ4CXGC2aG",
  "key10": "GrEGoCD717mvV5pzjo8uziNtD56XAJbfgFzo1kK6WqYPTvBiYhBFr1MUT7pfHRJuVAsgbM626EpEBofdhfSmSec",
  "key11": "5K53yNb1R5Ws7p5eA2wsttrN8YC1ThN8PWmwcGsTiX9yfGtXQAknj7S8SX7HZvGUQYaHbbMF3hAbr3KyJy1JWFGq",
  "key12": "3FfKkeXkYgpzhzwVnH1JN44mcERgnG48KzwVvSxbmEGpbvcKGqzbh8gVHJD6Pw56E7ipFPwbhMvTS435iAHYz2Gr",
  "key13": "5iHDny8fMDjHEn63adYyrMJpTEUE5kGnqJs2LxbCG9JvqDrnix6MBrAeGqPbMnKFQL9RejRCpUpPuQ1qD6NjfmpB",
  "key14": "5vkrvM7RVrRH5mAYD5zEudejEnzJSLY346W8QVyK2vMt6zwtVJpVpsfETw6vUJpUz18xhecJTHSXkUjnxG4bdUfE",
  "key15": "2V4sFSeRnCiFsDCTE9762i7i4zbfgT6yAZg2esP5sFCqLX6erspn5N73KyammZtpERbdba9E3RPEvqvkCkBXdkRB",
  "key16": "2U2fFS2KekE8d9JN43XgM4X44YSLFpRRfCnAgvtgcwE6CNmmVgNXu6D8niXGc9fFESNgXN65SSv7KY4mVmEJz9M",
  "key17": "3bzgx3ca7YWCr4smypGBbeABepTuTF7GmxYafJhTQS2UYCzWWQaBKau9H2qCBXX9ioDYovibch1UDBcbxuiGaSrd",
  "key18": "2TFaVaB96Dngrg9eDLJvLZXBRUmECTrAkmCkRabYuLt6Z518R1Cq42MC61oBcK2afeaH2DZunjKDrUSbXtyckMTL",
  "key19": "4PuZ2LezQ2bnxKGX9AoEXoLa9NacZqHMC9fpqbQcYYLoJUQfrdtZkwqQYJ9YrrYQkd5ePUbRab1z8xL5BjkpHeTE",
  "key20": "5pb8YJijy1jf8n3cxCzW9oy1XiRQ8HacJncxjpMhVVDTTW215FkbHk4anHRaKY9BMhoKhGSmzs5NerDkA2WcJpLo",
  "key21": "3UPaCPDYi1ErAF3Q7xBV9BgWUioZTyTMFfG68xx9XTLAnywtHsjZgvh4NWVEXPDXrDDRQxaGegjwyVosmd7K8Dbw",
  "key22": "2ZWkGr5V6CPgmU9pXb1uC1nXaDduHV5GHUKNVCT47SEvyYfwhZURe6KDZVa2VT6dA9U7QywaS9f3i8VTugnN2VNK",
  "key23": "4LKA7ZQTwztf2LdoZPgfZwehxGtFhPxG85MnaBKbDALvXpD5SJzWKkx6TeDe7mJxmvjQQK6NYu9pUaRwZpPg1ejJ",
  "key24": "5mE9dKjTfa99U1c1wBwpx8xa2wN7asmSJQf1Wwuk8fPXXYo2aGLY4asQC2Ui4PpHxUVF5Y53qjbSWi4tuZdD6vHn",
  "key25": "5nqkRuFeBufGjDgguuzq2ywnxAxbdLui8o8zTHwXGUeCRCFdYrHd8ggtumwxDTqurkpCPqbvfhpE6bb3sad4Y2GS",
  "key26": "3WQZPaxHyAwrYBTkieKkrfehgbbWnrxPpaph9wdmLg1tmD1q5DURj7sC3P9K94QVYTzBdS5Q5c9hdjoUSYATJCTG",
  "key27": "5EDJcnp4x9haeM6oe6tdyRMwvKoURmpDDV34Nx4WWMokCXNmF8XMKu2P14o7DAvdeSNp4tLqVUPd73Mao8cUa4gE",
  "key28": "xRWHDkDU7fbj4o8YZmDfVDkvUyoiYTS6WycVcwVb7gz8pQQ7z5Ms98LDDkDcNeQVFYbowF8B5MTSwFajjvGLgc6",
  "key29": "7AkTmhKTG6MyPpax2D1ESczreSo9DJyrqdDPGnfMmoS9JifcqZyDXHD9miY4aSsxQpnSqWGAqxhbkS6jWcaqm9M",
  "key30": "679xkCZ9n2XreS4PmVHvCYFbB9wz21JnyGUd76rzv9yTMXb1wF5JVALUjdmPQmMW997GbHAUgVwgjFsqQiNrKhmU",
  "key31": "3A6c3F5tpvW4JKNRkrWBZhLy6uBJg4KSmk4tZ71PKfUGqEup8mvcJ2puQbYkJF1V8BsJckUKg8Up9of6WxN2tUEN"
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
