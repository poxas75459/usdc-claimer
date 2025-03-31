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
    "3Dzj83YDgZfrwZTWnNXZptYCXoeJk5WrSbCMRh3tLN1614iCuJBRfr4hud33WGAdF4hLBuUr9N3VNYaULBBT21Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QEonfFAPjfVoy4hWcr2L5dqdUw9v8drEJQ4pGzzmpvdCKW4cTNb6es1FzjG13zvMtx1Sv6RYpWe2iK4nAifxnpQ",
  "key1": "5E8TQsFGUTyJxQp8DGCgoxHdqrsixTVkRecjkTCCpm5mytibsDtbHLLFkLT65Z1kysAX6nekLB3Y7ijhFfZtX1g2",
  "key2": "C7BBT34DFAxAfD88raaDd581EUAYgNhJJKNzkuk3yMAWDEJuJdrnU5BWXhnKR9AJVLNjZG2rSd1MKzuySnog8Wi",
  "key3": "3fvgjk7RCiUYPVf44LDXpHCZRHfrn18y74CdRQwoNX9zVPf4aHyVVekX2MQVzLvRwBWJ3bR4SSPXo3aH251QCzQP",
  "key4": "588Cs6E3f2HBG5iL3M9QrsyYNcjPCF5Nwf7LCMBKNbk3qe5QTtEfv6Rf5hkGpW9WXcRrh1w6sKhkqixkLKsSXcxh",
  "key5": "5WtbP2rjc6P533JbkHi5osuf13JYk8GACktNZSTF7KjjAWNdbrGJE9P4qoj8oZM63gFUVWhXBt569XEtLGdVfztS",
  "key6": "2iWR7EVMZrgPzeCzuQQAVzUEYsWwYK4z2aHAC1SUcsQAAbbNMAjutDfmtnuvQLmnDaD3bNih5c2wK8SZiYd8BTeu",
  "key7": "2yksYWTxTyr3ujH7s9uD9u2o4vYrnzDXeMbsr1fEsPsBKGrMDp7Dwgd5T5Gvze2NJrYnQc4uf3ApFcL5cRoVTLu7",
  "key8": "3fj7qwr4jPMq5SFdQzcW4cxANXpp7QtkPRX4exPftxsiZt2kTVnUtWBgZz7cRAsuNKEcKtX2NQgZguc3dqx5mR33",
  "key9": "4BpreoR8AeMhoq338JXWyY9z1GU8fogKXy4bE4CDVwpLF447iiv5n8o5BJ5JW8kxvu9sXmeLQkWcVHkYvtRHCc72",
  "key10": "4RXqRiZ4GdC4kCsig9BTcdngGe9ZGfo3uVptFRr2UHJJfoohnKECD5N2GXyEYvwaT6Hj8fV8Xhgu7SJxbNSdrQ8c",
  "key11": "5KA42SHYpawPgSwF4n1mSwRBTkgKr5rs45ZU8idazW5KsuWc7Mc4xswr3bCAuhxuC9mVMKVRnYJdnTC7YJgrn53G",
  "key12": "4mhA91Wdb1qSfBoFnPxgZPZ3AFT79f5bRYA5xLW5JYRLHQshnUuyJQaPaZCmYkGPSJM9iGdMfHNmC67vVgLpse1E",
  "key13": "3SBvVurikY9e8ZJmejJRfjgDvoMcaiHoW3AZDymMgZYuXqZEWDkENJsndqAhcu4SKJ1b9R6Qr6MbeArp8oi1Qh7G",
  "key14": "4VVSr1SbSp6oK5UbXrjq57TJxLYrQzcf31ApPMbAUccWDQpUZDM6iKoET6LcXU3NuDhA9Xkk3kHDD2rFETUPbdPB",
  "key15": "23Ydz1oWeiw7K7LAdSy3a8awNVstyw5MnwmU6cPDSCCRTHoeCdYp42e3ybxSYdSorjioXeCLGx3c8tYCpoNhnha2",
  "key16": "4Tafr9CG65UAvPwSbd2bgdKbvQ3XBzttNT51cDLa1iN7eiaW6HbPwN3Qa7NS63AkZY1MrSgRTjEERuf7tCsBLYCP",
  "key17": "2oUXrGqRmmEFN63oCP1SE8FUjwjcCY1uvKK1997AbpBxx1wtUp2ENX5G2ufrAhNdY9psAme5UUzs7jHBTbiC93Tb",
  "key18": "4LME6F7aAZVhTV4LzdST5qnk1DeqjUigHdmXUTwxCR2UUFatAyWPtbtHY5J9V14hJ8eZ9GnEeH2hR8cvD4fkTese",
  "key19": "5DcqDTBPPFW5D5UHChW1QmvACAyKgdTwDzNnv92cGzzTBwoSjiKdLCgpWJxRmkyoUQxDoSmBfZcctV14NFN6Rusb",
  "key20": "3R71iUZdB83yVPdGYTrQo4oQqgLXLGaovsF3znNkmhuBA9kviVU9mCeT6EMe7ATa88t12UWdHwctrj3fb3Xn7PPT",
  "key21": "2eh4x9qvDbZjnBo1s8ijYzE7JfMDoMG8MYP8q9eooV2aKoHzSimYNwvoR6bV9QVETFPrEVAXJMQhSs191ApCyXEF",
  "key22": "5tX9oDGKwHUFaq7saYhEGYn9a7CxWFEaXtebBMzvY8PbDuTzhQ71LnLNtWBddMx7RQ31V6q44xTfoRQu3TYe21qn",
  "key23": "2vKLMNUaYBi4CHFn77FjQttgnHsFjAgZpdVN8o3GzGxkt3qzTdqhnwHHYYGqmReX8ENGB2SUBs9yZY7HcQFJGzoQ",
  "key24": "3p2k51CiCAeFvY13eH8y6i8GXqLFMjBtF2nu35XtQEMGEeVEyyihpcdTj6W89wgiXKs9NUhfppygFZghZURtxvWe",
  "key25": "2nueu9ENQChtxhraT69Vk8HZayLFmW8B1QT8gtAGkt3rfPqeHL19aano9wgCvQikWAVLJwZjvBo2WoLQARB45LVh",
  "key26": "2xxr4jPE73TAmcgXusXaW2LwS6VK5JqeUnXpoM1ZWhN7xdeMACYrSwX2MhoAsRhGzugoyrTUK9Kyec4Nm5xiv1M3",
  "key27": "2FpCNgohR52nMSSRA94BJucZCVF5SZXJSrNogampk1tmz1RuvtmUigGbeS634f9dsJ9VpMpAWpKiDA1a3PDop3b",
  "key28": "3WzdFjrVoosa9NNhfbobTMUNfHECeo24RG9whAxioJXEUPVYVsEVipRZXqjfyp9LdQ1U5wuHH8TczZPrW2C8k5y",
  "key29": "3EiZVFoSYjfGKUDodMQn3Bo48LJVsFbnfGfnXo6V1nUPSaf4aoZJG87tBQwmr91FQcw5mv66kVTbfK2PDqMkE22k",
  "key30": "5hhtEDz4B4e3CTzQze1Jb2eWDjW3GmRWVgbWYywsH2cEcjawo94bkBeyHuf744EmcEW7JJRnrV3wzennztZruVGo",
  "key31": "49GsYYdZTDc4wjpFDeURf2tkDgLysUVrHqioA5o6HArWAEo6YZUjLLjcpcBwuP7XQa1AUbtW6FL1H1etVAv2vsVy",
  "key32": "2ohKxjuVksEkLsmq8MGdAQ2wo3EVkBbNrWxhrT7WX1ceDBPbCPWJZ49q6Qk4G5qKCQemuq4SnrEDa2DaRKQmFxRo",
  "key33": "23qvHPiUt74YgiZzGixto8yRrHxXvZAcwGERBWGnrxgnACd61kSbRFsqrSMjSDeqLT599guNGKdnNudNxpoVpUvH",
  "key34": "2VDejUr1fsYw6AFi9sewe8DV8mLvP6tKAr3tqdwzkWVKkBLr9EYq9deJNHJCkBovpqb7h6cmX4SxwzXH7nNMWwLH",
  "key35": "5akZr22iFHSCE3dKUytZ3FBcvyYDqvWQroUXEEiC3eJnZv6tBQHrxNKfkTfvnjoCU4aRP63zks73VhGMN8Xy9tTL",
  "key36": "bBMbPSETizkXRMcopGSbYudSqk5MH83i5kFeg11i5WHFPj83pVRFz4qXZbSW4JPMdYnyH6Z9sKWhqxZXMLCfq7R",
  "key37": "5kxHHVWV6HEXrPVHmv3T4mFAqxV1GXw6gAv32W7pNK5YzbviG7kh3FFeWP8BQqXKt8LrDxc9UiRSxuWiUNKFUXuR",
  "key38": "5etX4hjqstMqC8CvDwXTCD7Pz2dmb78ZxQtb6E8vN4uqKr73GeN4fmgvUk9bjup4hZdAJVWJPdT1yasPrUod2z9K",
  "key39": "5q1MJbLdZwexxFZoj7V8ypLB8tZ94vByvKSkRBpNF9BENKRjefG5hxdmSEwL491fbUab3U872kALBz6TfjdFfBd8",
  "key40": "3EzBMvDSAgMbrJSA5gHfEhWBTgDctyQpQBxgyenh45mgobBk6V33WoW18a6gZDyWzs6LkrG4TSeCKXtwtEi3Ru6k",
  "key41": "3PSjpkSnSaYWCSpXuA8c76FnnB11ryk57u7V29GVZeM5tAUe6yEiiWM8sw2DxKNK9qzGrdnQEHsvercdtaWFF28f",
  "key42": "5VXcSYnzNCDAd5wKcBuW7ZoLDLyKegPGe6nGHTvHoa8hsXchjXBx3wptgJjK7Dt86TczuiPQ5BQAr9fKMQS7q7XC",
  "key43": "4hD87DHLs46ewD4QvcYtFvQ8TZrrtdVbBb3hAfdHSqQtj8EkcidxHWj7LZRH4Y3pYuUvGeEaDp6AUx5aTHRqZRGu"
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
