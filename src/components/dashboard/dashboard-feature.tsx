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
    "3DDc7AoVNWRLPuP7FX9CGV7DjpHfKfDQsfWvYuz1ex9S5Wt7sdAnzAC7zVRo9NukrA9bAgoz1KbKrNUxWYL6gCX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JyCsDjddMkhZphqVDgDe8Sr61Eyys8kX1uRRa8YVmLkVxykPGgvM5kYjxBcf3eyMWBK25p51pnPPrzk63DQZVma",
  "key1": "6799GuEnAB9uWUgJ9KrdxrDrgWfikk2oiihXyG12XPFvzJyBGMzER6Ghue1cbYpeoZGwCsVSoJyK59oEdS88yPQX",
  "key2": "TKP2CcedHKsX89T1gc2MtrBkupfAK9TubXB3WRw1PHtwrWzR8mtXmPUvArW9FegTsXrapGQFSYxcMjQnhpdS4Fy",
  "key3": "3E4da5TtvyEWvrngisJeStUh28LUawurqLY8SqxFzEn3zzmRdjKoBdN54si9uFQ8FkuNye1oYBtFBqEBd4yDZ5bM",
  "key4": "2YV2Va64nGQuVt6ezCc4RuktBJ3QBwW1edxnWtkV3pKwiDQc48V66Vqtuvp8xxBkZqeam3HgdZhfGZWLPgCrZjz1",
  "key5": "4n3bRCK5ReA7oR6bPNqzXPsnoudoCA5Q4BDJbQoRax8msGLuwC8KgN2S7FAXysG5FqAS9azzqaS2ttLi7xozMawB",
  "key6": "2REbY7gkYdMtEeAn8gBBjyRFXP8a9KnWjGMh78XkKE7JGTFdGJMi7JgdX77182RQhx4zNRrRzkQXkqhwWYdV4nJY",
  "key7": "2wQa7HtDmY4T7y6nxJhzA5wkGypHoUzxXgYc6b7auno1Wh5hyCkcCR5MPz4xafaL2CwGEPnB5YFy7TbAEUAP5J4U",
  "key8": "4YqpxFZoHx2SHj55EZwgjVNyTpSKDNftswMMCjZKS9A4rYT648atyEEX5VLrh4nGq65oHJ87PUhWxP4G6HX1o2xy",
  "key9": "5menyhZq98ZM6Nj724Y5rBEfrB5GZfH4V1SLMUGUy1tNhLht1L7RvPPs191KiUH9WdZotjAsF4rwyA69NA4nvpKV",
  "key10": "5bg3fcKB5KEPSWcEGo91ZqNAEw2eS5sVhVkh9kvuJ6jRCGiqB3kojmoRmy5MsnG4XwQSwo1vfchVZ68KFMDtBhU7",
  "key11": "2zY7DPBw6nuZ3h2vvF8WJ7vE35u8PguupvaHwgcEB48CUhQoCeFSJrfKMgnFK2BypPtixWzYCxqysWWzqAko76MN",
  "key12": "HKA3fHHquFrJe26zBPmMhG6JpwRbeghLAgWYTvL2UcMW4zVQktHkFDydM4g4iR2sC2FRM7j2AhkLjXAUs5kMie4",
  "key13": "4pz1rJiqPqqfmvendpscs3bcJ3g32UcxgZpNMEpCbsQKpqgcdBeXja5XHDRX4izrbQ3NmGDAkuHH7WW4qKctHpAU",
  "key14": "bUfUsGWcRXBMewTon6ESiFCDSnpfQrzo2FA5LmSpYZ8kYRaznepxEkcip5Ez3zJzArMnLt2h6adAzDSCUnNtva5",
  "key15": "3AnnXhSWguptDrxZNm9uytR1p2C7mGJhcEsJPSZhyunJndDJyoongqh48dGHth7GyK79JaTczsLkGmfRYCj7zAYD",
  "key16": "38yvzC7spM5wRCKwxAiqDrQ4DWmssCuBhKmFNhrSjC5qMihAnRPZzweut3MFDTuC4PL5aJoYYpTz5mF2WKDYPwK8",
  "key17": "4QzMG2Xhm7YDqDNhXfFRqyMggP2ZxM2fooZmMH678PRCiJAxAU13e3KJLnXMX1hyiA8JbBn4qeHF7icsKthUV6Gg",
  "key18": "5pHjQTC8kZ88FnLwzSRDSMwKZXoqPQBW1eoy986SiJ1ZvZKByJASsBW94F25AsWBmhuLyzx4ve4wyEzcFUUxcrX",
  "key19": "STMEyo97HeLD3SZq1ei1nYk8JweYHsEXgWNxnqDNHMJQ8pvQcRQSi683h8iXHH2EpZedg4caFuDmUEVCbziT8QR",
  "key20": "3u3neQBUWTQruSt4KWJieL7F3rsnSkycvmW9fdpNxvESv1qrhrnWeTNN4QnADsNBMQsj7MBgQfeHC8cM9cRefjRp",
  "key21": "pDg1fJZyDtDfNVXS8gGgPkyLDQtkpNyUH9K7gM3xdvmgEdZdY5iLNiS4cvTNTto8JCX8r2Ui59KaTSP9V6gu9oM",
  "key22": "5dMpdhAfYRbkeaMLXNRqMSLwgoM18Tqsrz5hQbaAwAs7xhxVVgnVxtpPCR4yjdx4CwN8ahr9vSW5j9JFTDa3VQYh",
  "key23": "rDm7FLXiqYgeei9gYnLHVmmuCJJiDbJ5THjsc1DCY4JAxeKLv3XU5urz6qqum7VgEaSe8KdW6pc3VK3cujAbTHE",
  "key24": "49zMBNGVyAFrW1MKh3b2XfeAkgwKqe3MAmPMVFgjJScV93etFEXDJeGZzDEDCgGhKKhTWXL2fQaeUotu6wq5UE5h",
  "key25": "4jgmKMv4eL7UyeyXGYJgjPLknRoMUSaaMagU1Rb9Kp1LF5bjBtkwTrQVb3QcM1Fwcw8DUW8U9tpjYjLajGwecSco",
  "key26": "Wez2dnyHnfPA17iRV4nPCqcG6PU1RGCUVVYRUoaXgmRqBLzzYPeH6hNDXD2nPNz2VsvXZHNPiQNAFR2kKSBWhd8",
  "key27": "24xpmikAnLsuKD7r9LEPZxmio8vcGuNzfrbmyU42942DUL67UydytcQad82TuoS2Q4uvdTLsZzVpkG2Ejg1cPPdR",
  "key28": "5hqocMq257bwT23czk2jjQfvCUepbu54WX8ZtpTxbCUhYyb6Scsjgpd9HeztDtWpqbTxARaQneqUVZCqDRnakCEn",
  "key29": "wQJpXwSSpNf2AW93Cqu6Dqe8To3HpYpenA8rrEMjdu6j983xahVj6HJcThdsyEMUM1s2J5r9H2PepGgrQrks7gZ",
  "key30": "3j1JoitAdqUGxsKhH52Pg1Bi62vcTSCeX5eXvrUaKjL9XvpMeNoRsZVWP1ckSx8ShY4iPoC1cPNAmFQezzU4BfCQ"
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
