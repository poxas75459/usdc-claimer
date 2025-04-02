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
    "5AbLJAxEL6TpEf8q5LGnmtMfmLwVoTPkYCzwe4veVCmadcUJbGTS4DAuJVLgTa7hnKVwvukU7BWqMRgBYuXFc5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVbWPKEhAWzargQKeL7qb385KECSYs7LzPUSU7LR1G4139JR6FLTtRSE6FU9gS2SaHZmmmELi1dfcHaB4jLkwyJ",
  "key1": "4hqTMoyde4Z7taThNwEzGVwiTdiokM4ssoN5XTed8sBqSferam1tetN7C3t8c3bfhJcFsoSt5ci92XoyNZLAhrhz",
  "key2": "3ZZzvBdx5XjTco8ZcE3GH9znx49GBduatG4qkFgBSYuYWbMyb3gPqEGpBam2fWaHiFaqvknagSbxD7xCetTcxp5G",
  "key3": "n4FwxCiWNagov3gnFemC13tkPPXKxspkdKN8owaU36ssrLrP1q53eqxgkp83vgP3GCjuXPXdAEp3NhaUScgx1wJ",
  "key4": "2ebe5kNo1BY2DS7Sjfh94vM5vyqqPQpeXh7eKjiUMYGDtbdSAPgZ6CMWATPT5YD11fBo1K1Kc15VUfXopEuDx8uJ",
  "key5": "7sFwi7Z7bH27Zgii6yGN2rU59tD99BgegBBba9rtho6btoZqGqJFC9HNfYkX3vpzMYWhQbSacNUZZ1gRDkjooaK",
  "key6": "tKeUCEM6ZtQNpW8EkrSwJsmgp6RwtuRr6mY9k5gPVmrrADZbEyLue1JMNukHMFgpMyUvdoJTHW9rUS7xdeRRbp7",
  "key7": "3kUvAUQFLKU81jrfnR5joUTjQ7G6q3uCcqzYpwWfXtJVxqm2eoxstt7K6A62n4zuPG3gP8g71akyww3e1yh55XXN",
  "key8": "MHMTniRe6hrzMYziS6BWUhXT5BfR8NhKbBkKXArYMyvdrv9yNvidjaLZ71BmyNvXQhvMUESh7Av3YpbtuBxXJHR",
  "key9": "2ZhJDTbgqWqqS4zT25a2re75UMTAfAifjX5oxF1vdFjCnJnizkp21FUZKCLrHysqZVoq1dgtbckoUzHP7nTRpGtQ",
  "key10": "RUR1mcEdLeFyS6jut1JZvdMmCnC1LMCTN5eL7A75dwQbNqJrfaj6iWDPghxFTUg5K3Z1VqXkfZr3oeg6a5xHg4s",
  "key11": "2vZwJ57qCJYe95NdyDxYQALddS94Vd2sXe7eequvfG4B33RjKkvH8FiABeH934uCjaK4ehRKAjY4qLZuMtbdokk4",
  "key12": "478ZTrjfSteYEA5Kki19ze3VQWrciGBczRckEmtc1Ugzm76kZ7ZKGxSSUjpSvd1zfAyDkqR1Uq9MqiSu5tJZNCwX",
  "key13": "2vvNhbDQ7bEx4LBJNW2JUeANM6btzP5TUbjCgywmKeaJMTkRbpRivfSj4d43Ls9b8WrMNn48p3uYihjBmdpQ1KCF",
  "key14": "2wnyCeJj99ZnY9spZAQ8E5Ap9pYcjRLvLmqNTGHRHuXAcuUBpW3L1LHnTzwybFBqVJMUejAfTNX2NbqxHCdq9si9",
  "key15": "2iqDbvK4E5KhMuFPCxppg2wSX8DM4RNi3RuXpJjaRJ9DGmnQZDXaDjqxyt3BLBRRnJWvbSvm1MQHR5sx8bWu4vPP",
  "key16": "2BjeToKpSYFBikEy4Y5P68TDQq3sJv9nctofMzLK7NiBQuhx8btdYKSsygS3RgfF2vsXkY5kj2X5wzzLg2wCgwTW",
  "key17": "4FzcryyfoMqT1HK3vweh4WszXFpScdAyMsv3c7qRYTpaz1f3XxdYty8LndbNWRziKRFY3BuuMup5cQW9YToMWeFx",
  "key18": "2AgQtM8y2WR6KgZBgZ2NguCRcZTvyCNqnzUQYGab1EeyHhSPxZLALzDnkxPaPZ6XidHjyNUW2A1aJZkictZQSwu2",
  "key19": "4KkxS75aqMmpdk89jaSuN9F6j99y3TeSgk4yu5oM7G6T7KGXfKtZGqpdmf1m3ych5ktEfh3zrvD7AEFWFxWYWwuP",
  "key20": "3ajqg5XxjK3RfbfaNb1Q8ELqUbyHnSuxcKT8HdSLDjwFiusUEgVrvrZWHpRCM7Fv7tPbEPac1U2x3Nt4mDcvM2Nn",
  "key21": "4rwRAbc7NEDNmUAuMSJFXVaHYzw5B7qVpnNxJannvCRxdZwqq6KS8faVaB3VLE3LYDdt8Cu8nSQUXsxyCJ9vhwt1",
  "key22": "5Ti4Nt6cj1maDz7dERWxJENB5mLh1WxbFJK96ZVDZcyWtHqkiLUqUb6MZG33tCZR5WsDHc7sP26Ryrg4wbShU4aE",
  "key23": "2nSUL6R8ZFa8AL5NA5xdwcnEANkdQm71iczHdZBKSRyD4u3AoP2xXQxZMJX3R5jDPRoKkEoqoRTuJZSrivxfHbeY",
  "key24": "2k2v4FB23PTmue7T7GL2BrdV8PH1emHdjSxpkpu7eoRgFD7upBMH4UmNKWYH8j5r4gaA9QaMcmZaMCK7x4PYei2M",
  "key25": "4NdK9LDLC8swBaZWV2c8BUC1uj5DGzNyNN9METV7pAjF1Jc1gmX5YQGmc4kgnKpD7XYJu6SAkvUEWxU9fVnSAKvj",
  "key26": "2nMyosyjYZsW81GJJbS5Dtxdow5s9mpBuHZPvxK5evvkGAwyRh7y5RwHSF4DdwY29wxu844WDBWLBkDsasPXFBtx"
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
