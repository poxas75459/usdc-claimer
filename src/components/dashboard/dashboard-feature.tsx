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
    "5wtiWCJXRSGXKLq58NpjmuytqyqeQ62c9Tp48RGX2tpLd2TQDRqtPfLt7psEPvEqtHn9tiBtEqooWeFa2yzvkbds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KK3MbggkTjqXbSyTGSHvmEmdAb4o1ehL5GV6xgFZc7vMheLCpfgsj8vmvyQG4szYz81iQohZSSdXcJueHUKFPe",
  "key1": "46xR8t5XEszu79gfcFdfgbbTX9TiEPJZn5jqCnAE2xxGFjJ1bzxHeELFk3k9Yias9kAisZ2FNL9qeTXgZQtB2N6o",
  "key2": "2ogEuU3AbhqidQ68ibVPqKaNpCxwnvLYubDKyexX1rNb1ACXwBVkhCJg16xCEh8ssr3GNMG7FeJuc958qPV6BJoP",
  "key3": "5XfdngTncKxPn31YfnUfUcDHomYtKUprY2wTeY1w9RoAXRMD9r6CTC4KnrP6ZaPwFUh2jLVqRWJF6EoSpuvhwBXc",
  "key4": "5cY6sfvErbL69fcinMDpRoYR31uzkGaSFAcqAGSdo5JJuWdLyJ76Rwou3Ude147z3KwUnXpbppWRWDZTWfKxqLhc",
  "key5": "3255EdMdmGBu4BnWkuYZLwWSopYzhNFdUxtS1igBs1H1sEB4qNbnY5sYg9EdTw3yNfLv1axod1mrsYy6z2NNjPEA",
  "key6": "85QjM5BW14WTz7RZ5RTz9frmZdnYY7DJhR3TPZVRVAyoQDgdgaD5XtzU3ztL6p7c6QYD5HNa3nVkfQ6Nz83RuAX",
  "key7": "3aWXhed9Bhig9VjtMjqycpv2zMmcqCpcHQ1KTxifhYPg9j8S1HHdX7Dmx4PqsVSrXDoFp6qQzFBn6jgvtDXtBb47",
  "key8": "Jqs4FprsECQj9Rw1DfbbWKzMoyEkTYhcjKUaSyKBM4RCuhFH7LoJSPjTr7GuWdjsoea4FUJE3eDrAYDSo9tWm9F",
  "key9": "26S175sDvYmsXYKnf5bDPhhjknT9HK5usp2qCveHj1oU4nGC2YpcoaD7x7ZXTXKg69U8hqU7HZa9vw5MvefWo4Ng",
  "key10": "2Z2m335ouUrWmsh9GiJDQR3GiGvz8KR4j9aCX3MneS1QA65oF67ru97hV8cGSh47oHngtqE79hNeretNTRtc6LEN",
  "key11": "3bp8jMJFKecmgfXUhvDiQLmugcjKANpyCdjkMCqvYk7QBTR8B7gojswTowpeNGr8ZsNPWTzwjgququEYdcWMkUDL",
  "key12": "4yhoqrXBDSq8faAeNsdgmJ4ZBmdoYm1zqEfu4ohTKBEdftumTU9bvdKfm4J8BJZtw7v5MwT4X72zPmR1T5rLdAZE",
  "key13": "2nEQdUqCSxG3jtgDg8jq25TsgjKNFpSwUY9Cr23hN9NyQPgTq87soKjcqyuW3cnZjB2fatr7Y9kxQB5Wvq1xVAsu",
  "key14": "3FBaMhEVTurNTAC1xL18jgjvjtCg6iperA4uqhBny5gTpkBwCcxmc7XGLLviXxY3xLvpskNUd8TTR35SR5crRG74",
  "key15": "3fDbKWx2YuLkWhJQiQ5efuuj7xV8f9bKXsye9xXM9XrUT5tZyNJCyUM7Qquy2djqaXuRHgePo2whSnddQKq7mvMZ",
  "key16": "rLhTxaZCyYAXz9gqphFcT5G29Qb2jxMJRxJHvmSMWFKRMgcuCX8QMQ1smVYhhxypX1ogCQ1vQ4PCMpnPZ1FMkMJ",
  "key17": "4CB7yNv4sG2zL6ksNeRFwNXZBxpTE8JQch2VAMwN95UwwZ1z8S94EeA9R3zqwc9QEgMdwGXPD2b91E5tram7TDHg",
  "key18": "5GMFwYN61jMe42SYPsrmr77kRmckpV895Mj8PEuhgkT3QPJrdozSepsaiWyWFnaHCSipX1VoPMtbngXtCw1wYniD",
  "key19": "Xin9q2tdRqA2fFWgsbx7mAkesufDpuTPeqUL5C14B2WEcAFWbnKDS2uw334grhXypvKG88JuWwM2w1EQGTAATRJ",
  "key20": "4zgpibEVPQtHzDqhrFGtf6851jLBXxLWBy4ZAnrsLEaWXgUdBCBi9GXvTV4rpaA1xjMjLLu1NzZnDnTzU2zt1hq9",
  "key21": "4t7bPNH1qCfHHdnL1Xr6U5K4g7h28PURkga7YZyGQqvkNDWm3oZFCdVDcus9NmwUCdaofJNJ7HYanJ1rmdHj4WfB",
  "key22": "3VY2BQsuY6hA2qHctTQZ8Jp4FyKLsjfdUjFsoMcEcLTJTPoj12aKAMkHmsTh8XLoGihuSGxMqn1rnoUKJyQa9reo",
  "key23": "2oP31XYtkrXD3ZcrVzMsQ7WUuAMM2hxb4NQEQ9jcS66aiQwuSKPdF6H24PDLbJhonZtz32atXBPJNB4Z5YnG14uV",
  "key24": "4MUaky1MBXqw6AFpaSocwhU2EUJdgPvtfBJaEG5JJw3BhH5Cby6xsstcdJGzDBMs2LC7B5Muowk1cCw65YdHE4vB",
  "key25": "37YNrGbNMYoAZTgPuzYJymnSC9s3qRPjytT7QJ7egeNv78EK6dDpePJ8V6GU1fwipM1jae93nva3JvQCJULVgQhz",
  "key26": "3VdjiXicoRSANhpru3DwUyFEDPw3VmAcitV9X2x2VEjW4CSHCBzCuwGaRGRuVgGqQWzfu8r8DYwzQH9p7gUyxHHu",
  "key27": "7YUJiTdhKhBR7wqrGPaBvZ6XeK2Z2eGi3yF97p7WhqhjkeSM52hBgst2UaXZnqNTsJr22JETfgfnrLx7v8GU29j",
  "key28": "nLP4zf2tTFSZGfCryhDPYZL8MgbF23cYUgyCd6df5To5L6VsnudB7QkpCH5eYQZLnWzp5dZjLnSJDYK8RTxEnmy",
  "key29": "A7H1wDnVd5S2MEJMUPJv6bnaxBecoTvbMCkw7mY2v2NKaQviCnHWGtnbsdsV2MHDh6xrMDSismA2fFNUyaRMQ6Q",
  "key30": "H5DgG8tJPPdrBTN6VjhaK8fjoQTuAC6Zu4E87652g79JnV1XCxi9p64sAwC6UH5kochexDMNDFZJibyQGXRZzse",
  "key31": "5L29AgoMeEGgVaQuuEQ2C7M8ofjc67bW3ZvaqSoiRJ7cPp4o3EixVPNsPmcDkW8WJLDBAVzfrvnV4ExN57BL58Go",
  "key32": "38UESc9LVdpmDHf2gZSJMzBowfnbKPVAkPsgVWXFJ7TmQmqQrtQydn66aoPLfGG2oRpFUuUx5mfNRaSM9ehMfHh7",
  "key33": "2Zkw5kL56p1zPSB3mpnwmv8bmCKpMJrxDHh3Qw5Tu47PSLRSx5hDZ6eTgRdQjH25cJqjJHHwoqpNTG5Gdbuv8DVz",
  "key34": "5w13iPnr8uHf3A7wmWyMPEPar4dofLqzfmcaGZ3Pn6cZfZCeQwoWwGGXKpR5Xg5YM55eXMCSrzTupKRvSAuufswn",
  "key35": "5ZXiDdkf9R1SnsHJHcxAawAHMYGXEiFsD6rbVZwQCTy9VxjKgYguWdFUpFZZrQnEDoM41KZTTFba3eEp3fMayLES",
  "key36": "4mMb9K1ZTUPsdWxeDL5X9NnjCXtzuxXUkPnmjBoFsv9mrDxiSySLPGYi37FeZkeNvTP3WRSNoTJhtH9jtFNouwJb",
  "key37": "4m3ZMNcZkAwYfmwL6rDqEzCdoY3TRCF8JMKbhCAZJncytms6zLsHkN73t4aRWo2J4B77wVqKbmkSicDcDynd5CMY"
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
