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
    "2CaixCabz5NHJWNbcn7GyNmBfcAbr4HDm3JRnWT2zymVt4iCrNrmzQGRDyqxgPKjQ9TkTGEskCcpQ9X9Xt2AE1hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5anMdPhzzb2uYVMcWeg89gkwKDoavw4Dx29KMUQzNMLRFYKm5USbbg25FkodSB4SoJWfH2fnW1UkbxQk27DDYN4u",
  "key1": "5mUSP71sm6RuBmZ8HWNec8is9Hox1G5z4488YE5Yz7hkeSbwhNiAWRKc6ajtsbLJRhYescjZwqinc4N2qfa8vGC7",
  "key2": "oB4bMNFcXRFLNazPVptPLpz1jdCFPUhWuQqqSuT8AE9B3HHwuSCwsjhrmLhxeiBGiBgoV3EdPY3nyURoDyJYoxW",
  "key3": "4aQS6z8UhTZDf4hKXVWA3u5ajLV5prr87bSQWjq4YSPKMTUiXQ2xMYzyaxeTV7iM4ZpQMk2gpaDHa9FvV8rD53zZ",
  "key4": "F3fapZoZ8xR6QaYCNw5p2LJgKu4VEdNgm3YHmKP94ZpN1W6DFtwhZL1e14EKt6Aah88xnoZ541VRKWeFqss3Vo7",
  "key5": "MHQEAHAsMQNjxoHMPrmPcNT956KknvZQr6TU6mv8kHaoPfxL8JpVtYoLSetFxYnLLCY8bzHEzbZ9ftxphJ7BqHG",
  "key6": "4Ene47pdJi5ot5Dr3SbSLwvwKapRJrsygkt8iHPGFDGBjpqhubzUNZWCThvGPLyRQCEnJXyMd4KvCNyCNXtqU3Df",
  "key7": "5m92ZRgU5F3iDUZKBG2YRW4C2VKHDtumGQAwbnxhqiWvncp33KKW6sCq9VYGfyq6vZsG8mtPFnVoJJBMC9ti5vJP",
  "key8": "41rqKYh4nL8ZK8cWFSMSKaBVvfha9qV4PH5qFGLp7f2rXTDVA8LcZtkYfL82ujFuBiukYSkLc45856ATuUpSwTTu",
  "key9": "2FKZSC622LQeSUufrYS144aXsGwKjBVpthW9zSEwP5rGsE9x5N8hEZq46FBBpizPbQUJMEguduCX4P4jfafniAJB",
  "key10": "2f1WbT1dH5x8zKAjC9Sa29memkQQEqwK2myjqbzncxAgjYESBxySP3SrpRinWECzp7Hk7rQVxzXswMkwyHLMRwvD",
  "key11": "2avrj4jjHHGC8hrScQKY4nCNe88jJmWVkzM8H4RRoSgRF8N5A4zcxkekPt5HXrVFAMHtsVzRGP2Zs2YkDLBZuRnX",
  "key12": "cRQzGcrFDCEMLZzdaDfLhy76yKLPVJnEtHRK9HmdTQSSZkDQ3ZdSEBgbwc5pHKFpAhUUyBZ7PmqvU7H1ETRnwo2",
  "key13": "3TGqVkKh254rgJ99FVhqkcS5MRGw9wi6pczR7rv71prDYD6Rz5gfm3VSQNx8h565zAp2yQJ7sn7iPdEH15DkubRX",
  "key14": "EonCEktvt27ejFPpyD7jeLwRgqV3kNe9JrA3xH8NioLmUGU66ZYtV32Din4T9Y1WiYT1bKp4LD6jbVKdfvLhLjU",
  "key15": "3ek7hKyi7RTwuMzjecKDznnMHbxijU7EkfUsDs1ZBDyGH3UbJxSA4nZCLuf4EdAbLbqJrEzP5mxyaLM3sTMdnxke",
  "key16": "2imSeNKc1nHF5wtZVawdaq2HVk1vJfrQb5Ui8b8tJ6WHZh5QWQiJ3VeuEUQgwjroCXpjCoYzwWZazaFzhKVKidca",
  "key17": "2Fcbx9QkesZAbvuZ9kgmLD8aBYy9sdypWcKDjDFvuD2tiLx5e8Jc17wWZBfDMubFfifBYgTi6t8k7n8Taont6vje",
  "key18": "VANzsdnRnmh4xpgqHQoXiTp5Wb8V2hm8nDFviVVgsiMqrduW1GrdPNBv8DGJsF41s3Gdd8J3Cd5Mj62ou97UnpP",
  "key19": "5W8QN7w3D3NWK7FkyFnXpEpqdmnktNYJrG1wKhN1r6QFHzwPPKLBT2z1eVyNaMUdCd5FpjQKJVDxswUFKmybBbtK",
  "key20": "4B5gycKQLdR66bQifDP2PhpphXStUed5EmbhXukjPWFNFUUrar3eJJQksYvmoVQiRgqhYibMqrBhx7aN5LKGsefc",
  "key21": "2BYJVVqzSX2anVfjANcxFDZUsY5uy4Sr5VQYV7PGWL4W5o8YPREWQsVBkb5UzqNrku9HsnVbC5Uaidj6rPKTi1oY",
  "key22": "ffnQrh78SwfzaQEKDpCtMuEfZ76BLRkP3eAk6c5A4jcYphCi816tXc88YuGoodqhsaVMgWN1jJ5wja6Lj3t4TNT",
  "key23": "546sEPoUMAH7u4NaRXUQ5EFkSzUWPnyDBFDoBxQGdAoNQC9jGSgBywsXvoCAtngHVCkkd7wLhExTaoHUMBUuhr4W",
  "key24": "2ykdshT7Cx3ibF3DQM8iUGTN38sB49vXYXqJXBfbwQwakVExr3CqCjtcvwode6F3vVkLRMeTiSezbDjr8GWcDjyv",
  "key25": "gor5oVh8P5GimJhNSbgni8j5ttBQunZwjqEcbyLW7z6KCyNhbLQ2ABBpjUyevzSPHDYdPv7iE9MQLpJupB6omDV",
  "key26": "5LHT6u5tk2CyAd9U1taQUk5Kj2NVniXKX3rVmH2inTeEFLKpmF9iJihiTEkmw5fuSJxeQAZxfH4R56zf1trB6odU",
  "key27": "4sVQCdetNbEpREtyX8dv8cvRhCVbzRjnAsim9UdcLT6KxcDR35R5nzWqQ6FGGZWdjfiFFR8JjrMsBb6batcSyDux",
  "key28": "3CgF29NUozdt2d7UwLiG3YngMuTng6c43NMeYDVEx9cEVRLcJwkcwyyJf7iw9LiHySgS4VFqZccoCqTkPr9QFAEE",
  "key29": "3pSNNXLD4ayLKspx4RWh34Lncax6vUv5XCThs8mJXxYjtqqeM6wiYBx29TrQ4bj8z6nqv1XQMp3yUB2dYi7rWKtP",
  "key30": "h1sbxPNFZgLkTSAU4oL5FM8uonjxcf1Gd1QosKmscFUSf4jvsSjuYdPyprjqeTxQWoAYiiBAWo1LJ18L3un8zf1",
  "key31": "5eGTGY6zmujA5z1PmbqUwZgMcuRUTWqiXnc5cwydZnEjWS61wLtiofVdswb41D5BYkpDF1Uhkt15ZijHrU3HbfHj"
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
