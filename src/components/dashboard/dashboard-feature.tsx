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
    "Xgvn3t8gsNt3FGbUMYK2ysQRHn5z4QbcwQ4T3kVxNspGpdACgNguF46Wf96QznMg96g8bK4vQQYR3nbL8fCrEay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1JkXvA1J2kh16wZ2zooTUezW41V4YSdHhvky4FP8KTCkEECZLtzXQmJeBKVfqHouUuqdjnzATs5vKTefSDYofD",
  "key1": "5zyirKMHd7DB2ugySnFPaUbqgRxN8uaiZGZMcb4RzjBspcPnfWbjyU8nGWxdHEQoM16jvSyPbaThvYwjGqCb2ti8",
  "key2": "51DKQhicXBpmdnYYKRVpPxk1PqpKgmawU9yo6AAGWNDuR2z7fYf4CkvUHVC55cT7MC5PfcePmuHiDpKxY4kJ9A9T",
  "key3": "3CSwpuzB7cawSR1tcV6ArFQTHi4RtR3BuU52tzkMmsr6jgtnrwKmJtSfwypW19N9mQgtyjncK3gMcrWAfr8bVcsm",
  "key4": "2PiaUThMh1oBoEikHfrCYd6zts7VX3SBBy8bZtuEivapMWtJrwBfY5koLr6iwYoTun6KbPR6rwzDwQSU3LCLCDRt",
  "key5": "3NQWPzQHaxZqs2oGHdXGs4woPWCd25boCxvJovuhZB5vbPuifvcAfBWaEouzH4hicYsPdrYyUjoWfhnzaSKGdjyb",
  "key6": "2ibVPmUWjnxVu6PxVXpna6x9ADmCZp7bttkGJqQLiLGcdMMr5isgJxpWEiCy2WB7ueCVez8eNYCq1nnxoAq7sB9g",
  "key7": "5qQsStsL5Tvm17KQZwcM3pqFGd1inUhmN7mvtQFZgbbZQEyJaVZdss7Tzu9QwaJvrb9KYRawUbZH9WLUAHgxi1QX",
  "key8": "48bWhuVaGc9Em7shPuM1FefRh1iAYSfwwedy8FV6YyNjAMXhPaJy3uZhyRhpWdN7gtgJHjoHAeBGoRNT9nfnXAtp",
  "key9": "5Q5L8dqpv429kudM9u2SXA5E3shzbjh2orHyuTBfQHSqXFg1DEYAAxtfmtH1muW5YNhw38N3Lh7k5YPwK6Go9QxE",
  "key10": "5Eza3CvTMrPVbE9LYHSV7s4rTqwXoxgsutwCyNJ4M8xJUayJCkSFXu9SabjtMkwSpbSs4UtBNCDL7JXeaSKEJm2M",
  "key11": "obRyQNpXxvnGd1QTYrX7ABAuEKTtJJvFg29p7BuWPMbLCAtDSVr7h61MxQ9nrCD7MD2Vo6NTm4wA3jeUjVRUwGh",
  "key12": "WAyxfBRzYH7Zq7U6z6JsmpNp8PdsoCEVNVAKWRrsdejgsNDu1LxS8XuuWu9LoFQSdEDdoWGwwVBenyKfEL9Yxkv",
  "key13": "5XqWWNTDfA4MYU6GjyEHS2TNUtvPovA35ar4tBLGrUUPLHNWPuZaGKiasFHDfiFYzJj2XFQJfQmr8BcRBimV7ohE",
  "key14": "5g1YRJaYr4BzMMVH27mCa3ktm3X9XPjDs8GntNNxmFvCtnnN99iqmLT3vkSh5orLaZKVtyHPKVjh7QfZKmxyZ1PN",
  "key15": "5rTdNL9EhBJoAUht5PAMSCTL1DhjvzUMLdP7cALSg1i1RqUFYYkbFq2Cq4nUawb4J3PHWjZemxVhVSgKTByYn9uj",
  "key16": "2uPtUyTE9naV2ojGdgwKiwNjrrWpx18K1tZe3BJMc8wFshh1kk3deRyKuzyxXAiBSEtWmiYdf48zzaNwspMGRekY",
  "key17": "2LXuAPCrNJeaekvR4F7iTdrN7E12L9dviw26MZ1pyPdAX5Fz4mE2Pu8GamhBmTALQxRN7hjXrrdNR5a7i4weTfMX",
  "key18": "GKPfj5aDnc2DwWSPq3513vpVSPoBqNFa1E69p54nuXuXsbV5FWkT9ddceN67NvfQPwn9P2rbDcdRpfjG8KkYbuX",
  "key19": "iVupo7Xo82D44yJPwSQsG1WRtn3EuZYhyf9QQtR1zfCoKuW8MC6G8aXYaABiYnhpAkfK9XPStEJwgtgRX5Yhpvd",
  "key20": "4oYEed8kYTP6ApvEtnWGhj1aiCXTzZgRX9cSftDcJqQDmwQTJ1ZSTGyPHhzTtTi5gcUZ9VPdtPP9jtALspuuRVya",
  "key21": "45zPMEdsoGon9SQ1nnfaeetVQw3YgFCgPdAR5vWgG271irRaZDLkvBzMEqLoXav8PeGWvu7KBGFwmLQ4pgqMcYrF",
  "key22": "b3niruK4gzrkhYj7JnV6vbTffMZdGjVvShY8zkWJxXkEwAdAHQ4riLytYwnE4bKWbJK5NDuuk31SWtq5P58HRwU",
  "key23": "58ddtQLKWU9zgwFE2chSBoEHFxjqTyE5vKL9P8RcXAXcZTjXYnM14nsjLmpZgky2ndF851Ue2votaQpyYPajDsjB",
  "key24": "3eJUJ1MSChT9P1h6FXVQUxi2PCdYxw8EwSXZAL6qkxzPyarsU2Kzq37asGoxDbqivtS8G2THnPPfCc7xNfQNfCWb",
  "key25": "4TGhNSzb2C6mxW2weJD1wazXETaLA5kGhaEtwQAMhsbgDjyXwHvN5wxob8eM8batwcJcVLdWn9LoxD2sPZkP2Cd8",
  "key26": "2EAm4n6ZKifoCFJUgV8kVjUBmHR7mePmwMts7fNk2B1en1biqQCDCZ85p2KUrXDb26LEjXPFsr81ABErdHLSVJn8",
  "key27": "38fVB2KBFFuFUzRRdfhrFi75N1x47DpWtpej5tcKGggtcwtv9ERPovJqFsKNvQA4BDWHWpg1258QYs1ZkabNwCHi",
  "key28": "65Ma9znZmanuEPpjWDVFFKqQxoo63itpV7bScMafb82ZVd77S9DeqLAkN9jkMdvF9vmBSJTf6qZWfo1psgzqcngW",
  "key29": "E83zhZj2gVDqRxTDRc2KKgRdc2YMUqER8FPw2SVgSVQ7zEwdyMFD3AP6Cztjrmy6BdeR8KxpDvqTF3DXJgyNWxi",
  "key30": "2h5QiytXGo6QiLKJYxXc6hhy3n8drqkqB5DfKFBipv9FtfwwtfWDPBumiuuH8d7FBD2D5zBh3EfwDr3w3esj8GuP",
  "key31": "33y8ccUcXGQXybDP1HGXMvssM9owBr5hXJZGjB6A6PFpaxyXhvkmeXN4uuv4KHGCUadcWezrNSuvoCpxxHUJ5XSq",
  "key32": "XsKd6C8pNpPmEcuoK1zAi9tdaD3ssdQdrjzX145Vmv5KvFbnT9563DXimGmuyQCTgg833FqhMyWPNWd4ZDFs6dm"
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
