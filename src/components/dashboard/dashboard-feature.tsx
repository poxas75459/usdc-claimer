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
    "8yvcQ6DipPSk3UxxvGNpMiaiXZgXcTeJNvYKVfbuUysbkMdLUgnMS6HowiyANfHDnkpb3FCPuKxbPmf3zm6JxP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kVByfBUZZZ9VhhnS3bri2awVxuNYcrJKGcR1CFUiqxsS5aw23AdfMxGasVCwuL5UEhPENpbq72sLqgqwUbLbfe",
  "key1": "3eNi3KKnkKR5EdTeEaZciic3VF27guRyysJk5mBTrqE37huCi5A21M94nq8fi1fU8szYNMwqZTktwckjkXoVtnJV",
  "key2": "3mtr3XEhXKZA39X1iqRBqTp3aUsijqdgznmDNagim6RLNV7HiC59QS4Zh97VhRXhjAQbHxKQyDjQMdHTSkeF5jqu",
  "key3": "4TbWTVS5hQqFptbSCPFNDH3mAzYy14ffQV24tovbWPn52PsCVuHVA8ADCJQw8udPJqhmMsgtd9VkjMKEjHD1hHbx",
  "key4": "38mbRNzsR1SzsRLe3Pkue2hbcAFZemYCz2ZZDWLTJKDJJdSbUd7RHnkzSiFMKdxJ1U9rNLwCv4X1rShXUYwNtukh",
  "key5": "432hZn9FMJLF3sgxZUFkz7JbM86DUzoQsuM9wPqUeZXXtbtbC8RMAt3qmcR4A3jTnayXEyzeeJkkzJrZUb65EmFp",
  "key6": "2sxP5LVg3sdp3n1SKjTppofxr3GZpEVCT7MD7czMgHY8geqKGoUEFYrFTzURj5mJXf4NoJ1EEjFbHvDeDPjYhMp3",
  "key7": "TJHspxR5GAXKQg54fmjuGcPu5hShpNzrCYK8fCV2yuY1eh4syL1V1yNXBz3kxS9nPg3Usa1tN8dvoNFDW5F52fw",
  "key8": "2PBcXFPcqVsVUjiNzC2oCTKn9WC5LeWoi9Zk8aYHQGmb4DqKrBXWPCms2ARFJHTi6m5F3DhWyPThLhVLnmNGSq1q",
  "key9": "5UstSxmwt7b64z92kJQ1VzS7rn7rZ7PQfMAxeadN3Q1AVVY5F6CxqdsCP8PqvVVP2YtHW3fi6kfwxK5Qu9wQMgRF",
  "key10": "4CcdpQsDEPSnQdwvSP57WtNdofCyDX9aQRubqU7qJXoCudzsuwkDEohfmRmtam5fu1Yc6pWGNTgtzknXWNjtKS2J",
  "key11": "4v8TeM9CXXLPyKgLYGPCLteSB8UWjA2KsYzy7yDVEAn8mvqgcnbttGgKPctKVB8ZmpZgJbQQC9PgQXq7VQbF32EA",
  "key12": "26rZekZGjpTyMHCir5q66rNF25ncEmZzd8tfAcXkWR6vB5L9H2MdsJFGnJmSzurWqd1HqNF2h8K4XETbz9gsvpHg",
  "key13": "2QHWrNxrDAYbUY6NLJTF27vZzXWdNFjTi3ntMivLoXBoSM11ZmTucNr8h53wBgDAiGmo2kV2FFE27UFSdx4uZ4ad",
  "key14": "2jh7dFJxJ934ykeuwWuZpyceT3GeQjmkTTmq9yBiPVEdsm2bTG8tHqYyhvWjsbvJqBHeFcyrP9XinQNjmnSgBXUE",
  "key15": "3q2MvWZiMzv1F5DEHbBbqBAKCdJsmRYuhK19idRH2VLsyDFAihHoRAuYPgAckhjroHynEZrmeYTsMtNKNWTzUuY7",
  "key16": "i2WcQ7Uud9tF8RaxMC6rLt1ZBAcXELdiwvJBCTtUzQ71Wxacfgvzjgni1YGFwr2EvksiHfvXZiaRrVidCNEjSs2",
  "key17": "65myepVNRzJAmQntwTHmrE94cDZwM9DZESryCkjzvCXSx9YTTGtY3STeBVa1Z5h18Kr933pWcFsipiDEBjX7SveA",
  "key18": "RCMDf1u2oXZ4FCcDeDNvKtdEMAp9QrDKCz3LZGEqp6Y4PiNynoet2hytiphCJPMJWxZ3wJSpRSo8JfNfMfnN1nm",
  "key19": "5Q5bmyA9H1JE7erGrAFypmZLaF1MjQeT5yLrUAJoVwMuy7z7AVqccpJFUqz94FGJ6M8zuGgAEaQV4bnBXNGry12d",
  "key20": "5V2P3Ke9m8wkV19zbtsfF2zjbycUUQSASWGQ5EcfrDcWV4xxi4GuChGgav1WjFj9EvanqKrvyBDKNZ6WTtmh6ETK",
  "key21": "2ZrB6ukcPs56a6bqb4mzwcwNLEWLGXRckNdH2UPTukygUCxMK9CLhYhEpno88osUG2odpRG3QQftTvg3uNL1PBoL",
  "key22": "5aX6PTEQVQgP8QrWrufhohjBMqEVZ4YkRMwCb2oYc1uMRLuHy7DET2a67xUjxJ71h8UwQoPWHNqW54DVLUH1LRSK",
  "key23": "mkysgDPNji8WvvLXG5LKNE95FF5KoKGKFDu3NQMmqLMXu3PoWGbufuFfoHrGQZcDVEqKtZSq3K5nFyHxEQgiDgv",
  "key24": "3jRx3sRw3HtueugtPsXkm7u83T2rewyt39XKaZWZjXeibV5JzsF4EqEruMYvcMSiLPXBkFTSq85dqTJoqJ5GPAzM",
  "key25": "3QEuq5u5itsfAi6c2pAwbXjQVwU2HNprnGkafSbHhVFykpCVPxnhFYGMAgwd9H4Eh94XugmkXvkz5NJ81ZbEyTK9",
  "key26": "2rtrU6kkMShqxkfSH8pvB44UdchcVjbbndSkLyco5iac2twKC3otiu6YH3MweoEMM2XaXrJK8Y8yXEwUHKifACNG",
  "key27": "5RYLysmmf6eGtjoPP2xeAUQBz9W1RDgkv5ewm4r6ZtAU4msNbQTbDWesTacTfy89e9WuKRCVdXWWkKi4uwLsZHwN"
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
