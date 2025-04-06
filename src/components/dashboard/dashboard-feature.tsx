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
    "wE8bYP8WCPNRjdSmsh9LpiiT44qodLwTX3zkynSmptVRy6WqVTXPsbDvteuLNxfN46Hg7iHT1fbMfEUjnrfaUDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Q7UVeJ222iNrP5fR1LePxpAXUXrsYVz5u8XUEm2HHA9kgrPj28P9WAJbM4QATAA2eTAc4ZPJMLuW1pyRA7WHQk",
  "key1": "2ZiMEtQxgoA9p7RstY8eCg5LYJbX7Vz4GbZyqTn6kVdZxV25qKbxat42pKX2cyY3dTZQFaRhng5Z3rTy2xaxTiSG",
  "key2": "4TPBXWuJANNpfeAkKBUKKAZ6ijmAzmx6NsKwLLsHrrSj1WVaw6QuTh4tMyopNoB6nP2DAqv6MNMJwb8VJBdei8tb",
  "key3": "4ymw3BGskUX3wFNiKBvDAxqtQFFT5rnU1QvYeCXmbM9MfHaBBVQce9zxDSUga2FHkvBvN2xfsvWT2w7PhgjQZSMV",
  "key4": "46bQQSv3BYZRMs2WnQTDdsdEVRX4wvdVhfKbSzifWozyYkTgCcVw2eMBWtX8gg3irNYQqFCu5xNtzqmk1HzKf4HJ",
  "key5": "BDrTR3ygZ1ts17FnyUyMhL8dXZsr1sHpg4JRZCQ25f89br4b5vTvEGJzFJEfQhoYuENooJdNhPPgvtU9DoxRBoX",
  "key6": "4and15n4zWpjAMfjBS3HonscaAsnFmgXGJoxU1noztb2rT6akCdgLNw4qWjvisRWysuEmnDoDaUxfhy1KZf8W6j4",
  "key7": "5TcCVSYusLyFELLp9dapESDTMnL4XeeZjYt4S9VCyb1w9vJav9XqUwFxo27BGqisEVKoC2XDhRcv33xw8L8PjsoN",
  "key8": "5sqGAnAWoYZhvTDyz6SovmT8z8T7CZt1HEzCTbanpaZ1wZ5tAzqmwgBCbFyMbAp7ykNa3ydoPrhbxwdudFrSX1ck",
  "key9": "3zCpodrM84GWhSpXkqZo8M4NjXg9g5zvRUU2WNhLFd2Thw29yaPjZCZVPzcVWuDGSDV4JMoCVMjymxR53PMhtpde",
  "key10": "5UF8DnZLfyk6sFGr3JuHwKUfkvb5TAhFJC4rKxD8SvfgyMDcNnohXpomUmoAsbtrCTyNGpSVBcmT3Qqqh5HcAJUy",
  "key11": "4p7FuNzCjSmm1RgxnQS3RWPAsL8LiPCBhVdGQvT9rh5UdN7Q78ewroYunJWZp9r8DLnZgYzUwcCdSF6MwW7LjMEo",
  "key12": "hiGgLuRGqgaUSpdvBfd2XMHYbyxdZ4Hj7SF4L3zK72VoLVsKygSt3m2uRRQFVNvS6pCVrEMRqTXefVyUep8a6du",
  "key13": "4N5XGAZP2BiYZTNqmT7rWc6x4mSsauowmAGphDy9CbW1Hit5DWnygGh4HX1Y3fu2ZHhPD66mfp1a6dmgnCiJjDLX",
  "key14": "46egm8gkYtMETiYX6Y23jaTFqSgN1MESr17JeSmkyE8uGRGMzrDA2fE9tbxxVEbwec7txEqK8h3JddtxPLmdPcCS",
  "key15": "3fsGg9myW4iSXtTPqtJGVBSmwkAR9iHAEDkyApiYfYTGHKQsMDoY8sMKTDxVvzp2xsTNDqX3XWKCjxTGLEP1BmgN",
  "key16": "3x7MPfH36CagHo1P8RHPgi32V5rkpbMYmRBg7cZDrK4ciM49iUZJNaioPeekQT7j5b1Y1CyNN1BHVfzhdBJxTRAr",
  "key17": "2VW7nQAomAphtNCWLDDi46TYcpfsjNN6hhA6CEUV2txeqwWya8Nqqs788MH6WuQLnBoJ4kJnSjqGxzk3mHo15CZe",
  "key18": "26xkF4ATFYUoHagtLWisuyCDH1i56vwv1j1eVkHqszNRhgRzudK8S6Eiy4Gxe3HvV5CtYqp3mN4tm3EEkxWR3CDh",
  "key19": "3GPT8p1JfR2JxfdrGA2tnGQhcuYDt98ZdVBK95usBvJ33DBgZENg1JdmGPUpD27AJnNz9KLGxBsn4XoHbb24MneW",
  "key20": "4STTWA9wucuLMii2vFRXWtS7JxgBD6wesJJLrEeDQtnU1DjXdREw1JZThMjbS5YCewbqCezmu3q3SXXkai7JErxn",
  "key21": "5Xd3ezjsnGn4neCs2odWgVPqhnnu7dE1WvWVnGrrXz8TAhWL8pq7bW4wEFeTapVTrHyAuaYrwwgBrXM3ZAM9N1RH",
  "key22": "66fL1bxDiydzdGdbr7WfeSsPK6wzYPbgS1cFz7Rmeuxr2gAyQXgZovFyGE3KM9UupbeDpaTi5JbptHVyv9fDSJxo",
  "key23": "4tDs2T9njmuY3X6uVxwUkrTVf5iBn8mNFFnqw91DBuwjYai5v93uuYatWPSmbTQ7A7rJJjCzq1ccnQfCYH7oNGtX",
  "key24": "27373QRtPockaGj61yCenZ7WUzWdzSSVYCSWaCcrxvy6CctPucDVTRzR8Xf17bdyh6iL5zUKuYBNkhAVhEnyyx3F",
  "key25": "4uHyVS78FdQx3RJzmez1EeR3EbAD8K6APRK7BBmcGzfk3vMFLzQNGu9b2ZHHD2eA1Q17wnWKWpMpk7DCf3nbE7eQ",
  "key26": "cPA39MmHmGdCNFn1wk4qMWBiwRAEJ9NbNWoduvynunWqD4FTwHiCJMTzzKw2U42kNH4SPC1cbihW5RjSCzHj411",
  "key27": "bWL5V1S28FGEQQLUwUnAMHzm3iETbAqdW2hxSw53ViHnRjyYdwr7kKawVJEaWPtzvvU61U7EJ8CRF7Quug5SoY3",
  "key28": "2Eq7TLEq5T3QU8UdPChchKvSEFYAW9DJicR1ZB7AoH6S6GuRVNkuCsiYAMRkEgXw7UUDkz4WXCQgah6eVs2sg5Sp",
  "key29": "5LW41UGW9rhfK7cdyPuuy6BNaQ2tZwv6eGF3urV1oGhpULLYATbFPoax7QHw5r1ok3bXQnycgSaPdGJNXhgBsAz1",
  "key30": "5uqys5hFPFdErMsUkUT9pMAQzqnwxEqJvRxXss56ThWfQ649GCNBvLQaze4WbfzHAWHiAGgyJgMbRidPwgYgWnEg",
  "key31": "4KzUyMf1vzbzD5fary2txzMkD2kExMBCPst8VPRX6AAywDYnp53FdQcWD2PHPuZhrpNZcfw2UDT37U9zVXKgYm1M"
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
