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
    "AB6kFKEvzQ3vABXEyxrUpvecJa4UUEos9zmn8XbjVdmtMA32juhqxetRWcNwUgBi2C6SbV6idb94ZmHKRxurjJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4t3VxNqzyoBUWsjD1qQgJRgvHpktzSQRNdZCe5jhjPw4bJLSLjM8DuAWiEQRUypic4Z9cfgDsTiokuyafxZv3A",
  "key1": "3wR6tpfUsqcaWbYQgWcRrRfQdnj9ahD4G9TPocMynezJ5Y8JYmKcszzCfv2mR8KG6RjHLyvDqueEboYG7yCR3gKg",
  "key2": "5PV51DkXyUWBbvQBer1357GzBGuZ2777TLMMPoh4acsmRfFsHYdNd5WGqgBCECPLKF7szr3YqNNnB2MmVbas3xvQ",
  "key3": "47ZUCMdL7YKQKas13Z3XagCYCj7Ug5H9H8K3LAzfYRfW8EXCRzNkzmgVbPL2MsLpvmvMGuWgLfTY9DGGGaRpwzL6",
  "key4": "AwdfMuy2P8Z7umbGqvfgrxG6qMAz3bwSZh7XstmPPMht5RiM2uuQUJD8LMFrWGh2yhoUzoQbZjtsdVTndcNyr8z",
  "key5": "MiNYoTZacT5jjQgCt3dN7Mzitb4wqVjJGzKivGsvbfjTEV1y7RCQWq6gqGMbTCnkwk4nvtSYeCJN2ArbqGSW6Df",
  "key6": "5E2SSQirEPHc6FwoSJJ2pjivG2ZGp2kYWTtJJNfKUr3jmcT88Hpa3iqC9WtNNMY1txhCjfRt8aa6ZPTSK4PdVeEF",
  "key7": "3wZWsn3yypCg4ESreQyJWzvoGes3sfXvyJzVRdFtgjcUV1qcbKcHaaXzoYsH5Lp3bKY9J1s1GWiCDaAEbqoWFYjo",
  "key8": "2WQdMAoWBMRCp9CCWeSjGMqAU9NctpgKbw1v3e55faQtnPx3BRgWq8J2SzCE8FMP3yQNsQhD85XEiNMLqWrETZCQ",
  "key9": "48jhrcADqWkQUUtHHkTxX98bMAHU7GnybrTHG3gctiDrpVhkWxgHfW6BAiPzi3MUaKufV7AoKkwagRZzyc5EnDvV",
  "key10": "3QvD9DAGdk9YArB6BJ3j64YC1Lru85PqgJHqhkMvLtAecZsjupAGjQjK3vW4WoZfgJD2KwadgjMCLWwKnqrZmuAK",
  "key11": "2oeVn8ZKA9XBPVdc8E5aR7daaCMYhC92GgaGj8os8vfWUwu8wrC3ijBLqJzC4fV3gqmSXHyZFqMQrGK34UfmXpEc",
  "key12": "5jGbE2tKTZMYkFtiuRBKy3EkBfFxy2KHPTbzKNgSdGH4nkDZBtuN8cuNb1VzFbkMP4h7GQJz4fxkzYnHJFBu9MP3",
  "key13": "2qCnhvAooVsKssq6u35FPRzziCZeqHZ2FrvEJ2XgWrs8pfH4NWTbzJi9QS6CbXY6sG7i8yvTyhkwrgQKFivnMc4u",
  "key14": "64AYDXsKakEA7HZsP61UNmbCXqvNUiQWnuEdfG5GKw8v6VwBDR1DcHMQzJe4ZAi5DfunpcmgXDJcH8wMTWC5nz82",
  "key15": "4Ec9HDiYW6hJbZ1h8MW9eyqV1VyJQuKpJUAFA3TGGHbY78Wsgnad5BPW9E6AXNTGaK3CiEm3EbcX5fdawq7zhjJn",
  "key16": "5hcFX7p3yiEZPvrX5v6X8AQtJYBnrv92wCxD29R2GmM91GkWP7sYpdVwXZKqrBGgkiVPFWejXHJkuLbk8zcfamin",
  "key17": "4aVVpM2JQXBHDGepqZym4qDg92ZsJJSmNmtisXqdb77Jhod49dBDYU7fmtMtEeJU7XRMtF2M6MkkNB29FG8PHwV8",
  "key18": "4177qHcXL1JYV3tBswALN2FEmQU8GzhPu1DAfqPqpFd7d7oKTBwvaLFEkTGKVhPMmWj3GZENHpZaUjZfmVfLJoFw",
  "key19": "2uh2aMMvC5RfSoNVfM4pJyUbEwX17CzjkhP3Epezk3XW6nuxsiKDSbjCoi8xzDVzeWDUqssZ4T3AuD5MaiRXHgXG",
  "key20": "fetj1A1RFMrX7Awo1SGyPc9xfUmyZAfmPfAGRTTPfhtDCrJXs4Akz721Y12hHKfXg71FYPBc84YmuE3q1ESQDCW",
  "key21": "3eNpnVQ9HqM6xkMp38g47SNsPnycLwqGC1exWMPuQCvGtFZAEaFgchxZhDacTWWCyCTDe6P6oYjJh2VeqokmBtVz",
  "key22": "31LUTUgQzKAPRpqTdsTNxzviYBT4TH8LBY9bhCBVAozf756JCDTCgJrScP8NNTsGbobA6LDd7YtX78W8gWZjDozG",
  "key23": "3ECAHAimWJcmCeiCknMSDB2N9Bc3tAn1aipxLy1HttUPi8n39FzrcvshsE6u4dfKjhfRYpqCAu1fGCpQgEijr7YG",
  "key24": "2yRoPPwLDn9j5WW4Zc3GZTJVhiW2EQiPfarPrv3yy6CDBqFhpbV2Kh4ndVkQJP6fkeoJ6tB3oYSZGZcr21akjTqT",
  "key25": "4LdbiSE5hhfZsYfKU1avGUxBoDXH1Y8tEMF9DnKgLjcD841We2w9CHRfsT31DKjwGnFUasShZE4xsagZUC1r3aj4",
  "key26": "VTzqZQVVbLikAB5NZXEEZJTHau7dYpd1iLbaxW5cTTo9GyTUsDrAvVtJSnwZRPkk4hKFtph4c3kmBJGimj1tdEa",
  "key27": "4ewhjoHho4K73hpDASL1yaZkScfEmjc2ULst2R5HcGGPrJrFshwQ7Vdq9nxyUgcYxt6aQ5Byh8ovPSjeeTxcaw8z",
  "key28": "4oi238j7sWFVBsqtGuLLk5b4PCc3ofUH9b6X2MuYBdHaDCbPiy5KozxCPVsMpqWpxa7Zim16u293FsBBCEMe3EVc",
  "key29": "5zNw9TDsnSwH4AWGKY5wSW62cF5FsJJxfjkzYFG1m6LrcqwPM4oFux7GgZzVbHREiVrjwkf8jaxV2jw5sS3gdGND"
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
