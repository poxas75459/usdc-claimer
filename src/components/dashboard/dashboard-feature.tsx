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
    "3X9GXp8ShLc8TmjmQYXV9LcSwQSPbraJJHRnLEVfJLBzJohBHR2WAkXYsUsGxXdSyJuQAB4K9brQejB2nAHbe1BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ETkJBGv5GBkU6FSUoVFk75b2ugKmsJ7bGU5LKHaA8811rHViXcdyKvVDQZ6DauYuDTrbxSEHgraL93QiaStdWV2",
  "key1": "5HxRn2EoWCSCNSdY8E2GFh6He5qTJ6kY9pv2NoxdJY9oWkYK47GzrqjtkphYbFg5pZeDYpeBkkYhUQdL9DkcdwaJ",
  "key2": "3CMyuX7QkaLs3HURrhDb4n8fQzKMFLkNoJgFFX16nr9eYovHzqC7tNLRDks9ixz9FMsNSo6SMHS1mMngAyiiq7UD",
  "key3": "2kYPUymPpp8SS25XeqLViYvoG4cnmtzkH1siDh5DgVwxNTSA5fhKVHD69NYaHVk48uWffg8o21RHMC55wcR7Csb9",
  "key4": "4EwScBaEDDS8HFJ2hKQjRcAY819FqK2TN5gY6QgX4pMeUeC3z4dtCwdGLsRg4y5R8riTtjuK7Hxsf97EX3zP2mJL",
  "key5": "5L1weNiHZAvnEG3jU37D9ydHG4WFBEe6YKGUyRph6LFwRHFJpFrrGVQ1cWZpiqKjLWHNaegAbHCRRCkBm79EevQ4",
  "key6": "5gg96kahTH6xkfhkKfGoSp8wcwsRE4ZBoTXpeuCS7H77o9hddt4DifsW9NtiywnPP6yRJtRSGJdXddsozPXrRcpd",
  "key7": "2Se6exYw3bRu11ct6yYzjzxeux5GUAKRjVrJ1EZMY1bibEATzoxjeY4FHrrB9zAX7gnPyubwtMgEn5a7M6UdJM9z",
  "key8": "3kTBMTRW1VSw66ai3fQNcYT1qVXcw2gv6c1EqgXWPb2Hv8xNitish4J7cZjtUmophEQUnqBgYhCG8n7PfTg6Q4xc",
  "key9": "4J8C1HoNUzBPRjsbTJe3A8iyqcmezECiSGS3nFa6WbH4pv4QPEkCM6VogaFxQCUs28CnvPPUqXvwmrGRFdFAVwBx",
  "key10": "5Px1HsD6GKNAQaR7w2aMe4ZJGF6JuyoyRJSwgBAzneMDPzUYLxj2SJuwUjmJmo74LVxawUCrrzddPAeHPJBhjQ8z",
  "key11": "62gKd6mPh2TFnHzCh87utuiXMK1c6BnWZjAk9bJRTRG4gt6ftSnX5VgYZ53dS9Gh3tH1QiPWDgvUXgx7pQd6L1Ux",
  "key12": "271XbWD2oH3H9Yx53DB64FYapMjSU9i8QeepNbArGYiMN8axDgSF3GWimYTu4kV3nQ539H4iFYEvwGivecBbfd4o",
  "key13": "4f13We2SBckArRggsQb6yWmuVKJ58P3tg8o4KeMD3Cu3NyTd9XopALnT58XLjw4qUdrtPw8vAGHShQn4LXQUkwaP",
  "key14": "5WvXuYtHJp3eAkqf53MkLCEHnPpfh5CYksxRC51BAbPteTMEZSt9CvTBnSk1mUCzYPhmRgp7eZFCjS3XWJwtTUy6",
  "key15": "2JCvTD4ox5yhphtM5UsinoJ3zdpkTtrzPZuj3WUfyCdsenwXZ9qm7TooAuFxvMkCu5DqNcFuAK718mKjjMnweW5R",
  "key16": "3v6S3u9voz6dbS8nKf2q9HKfYZRK8etYwMPEvg5BZ11hCpuS3Wbwp4EbP9b6ZBB3TfPTxSvf8qemuPnv5UJBUuLB",
  "key17": "3eVYFntcMjtiAiZ1AbcAQfJiehjqUmHmkr7tH3JVcumSP7ovnb2FqmmXVBQ4Mq1PqTms3okW7665cE6yBQ8q2wSa",
  "key18": "3QeZqemNy2SKew5cJxoFtETRdA5zWi2cESfeinbfo5jiMGykJq2LbLQjWxtb3AQ67bmWDzPK3DvFWp7fmDDDt18P",
  "key19": "svEBL5vjEbsMei6p8gKKBjUMCnHicinHkxHBLQuz3yPLDrpxRFNDjW8zUshJ2k46yPp6TQmCFMHdF3PEbHcGL2Y",
  "key20": "4bJ3QbGZHpgydnAx9J7r4RgcfidVteHAVuDNmuxcmZ37H4pn67AFG4rPHbQsvvfUNi6ZmFzCu7fpHKuaC9xssSxY",
  "key21": "5bpoUmcg341jE91tHkKoiM1HPQJnNbKqxsCmZEpESzKN63zux9dxjZpsd645Eji59k2H3Tp8J7nZtH7MazkJcjpn",
  "key22": "4hAUkbFGczQL6uKPcbYthUmCxG8BYHzKUd45PEjJzp8FJCNRVnenznczjT4aSRQH6PugmfrNcWDgZGmFBLXxWuar",
  "key23": "3E5yZNzCsMShKu1Svg62WRoF5t6fNPwQ6ygaNu9wik8KDhRW2AYbc6vNXnu43X8gR4NJwixmMpejoAqiDYrhT5WS",
  "key24": "4FA3Xy75XNogTfAQg5TdnT1whBzpWCJNAkTdfuPoPrW5iSftiN1cABiVsnS8KiSkAKFgcDjARdc2Y3ePdusGWgVL",
  "key25": "3MQQiJMaXivMRdwCivNiWsPhUFkJm5TARYy7DWt7zy8hQvJ1rnAnjBvRfYJSozayQt8ymakvtjzVZpVjAWhGnNPj",
  "key26": "4tyVf3JkJzqxJ5igdtyC8gq4p1yXUxJ7Qy9DdQCpEEDLHbUkmCX9R5YkGgX8K6mp4MYZGNdkGYACqQZnxWLqvMeP",
  "key27": "58Y4TcAxZYJWN1Yj2ohfHeV6SjftvVZCYSi2xdchpJepvGNbtfghTDTEdRydqeSwt8B4J3Cx2Da2kQNSSfY9veZC",
  "key28": "xKZDRF8RMfYY8QgkMZsZnFzy6SaMdK2pHBgpBaGSKgURRf2TQTJU38Z1En1HKSVmGtqWMqYw4x1yC8dZ3xdBek7",
  "key29": "4n2TGuvVM3HooLKVx6EcLQ6Zxk7JA2WDVrAb4t7UDG8zAY4rgtVp5ZzdbujSdLzss6GQxtLBYWKSs3JtUtKzXvXW",
  "key30": "5KqWteHzdPzA9X3TBxRpYuqCBu4zhNzudgTzstMaSf6fTgzwTAuMPVBHfhauZPvAAhuvi2HdbXbtb97eDv3fY1ha",
  "key31": "2RWMuQcse1nNYA1F5hhymuKPdcqeY1RksZpzxtt88ziGKChy182xxcjYxrXX24ee4P5DGRC5VRrEwQ8ebjTtYAxJ",
  "key32": "37oDfk3ZwP5peXRzXuZfHF9tAUrkxskRPEvxvAYPWA55f8eX5GkU8vruWH2h1SD35mgaHC5SWktC5mBD3cFRyohK",
  "key33": "3S5N2zo97yuQBTdVzDHMonJ3bHaYeBuirjXMYDTHWVy2i41DpiY2cdPZ2TkDEwWZvFtAH9Grjp2TNbH6UT9UvBX1"
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
