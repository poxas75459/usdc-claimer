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
    "RtBLpk8d4mAreztnfg31Z1UPq5cswGcowATQVL5vSYQwMYRbzyAxC3gMkis8G8wXcGTwxNinhWkkH3WCBnVZ1x6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lw8z9csFsTwFKddasdekVkQ87psW4rJ2JzdAKzdZJnDpDdhTvmmtHrp83r6x8Lt3M23g2EPJNp1g8dLLRbW1nfQ",
  "key1": "Y3FH4V6bJGFTkXE87PveUJnH3WbGQdYouV4jjTpbgj4EbAaYKtzeoeufC46gZVMWFiy4umakXUxsmP77f4KiXug",
  "key2": "YkZnChjZwHMD1JoauyXB5crwufne6u8oowRkvdt9uiCMctDHvHrJjT1SyFEBFgesEZS7L9j7y1PGkHvzVFhQCuD",
  "key3": "5TqsLocERveEZnc87mDYW7yEDJMt3amSb2bgPBco4gujNn9VLi85hfuYks1Gk5Cuyng7HMDFYZST333nHxuRajxr",
  "key4": "3xXjtEcE96XMavd5X23n56WiUAx9VVHJveDrGAABXe3AJ9y67FLv7Kga7PH36n1bJrqvDt4W4ytJn1R7YijxW78v",
  "key5": "3es9CKtwBQNFjZWGJy7fnt3L2fLbzBoB6bNDiNMvWL2nJ4XCENPV1ab4aRrvVNfVh3M2z4Mk3HcYoBYDfCL3asSY",
  "key6": "EqWjXW5rg4qahKo5dgcWLHQP8zkFDsvNqsiW4LAmHStB9honvNDxWU9dJdo7pT3VK1nHJwppiPGHUgDBxk7HkdA",
  "key7": "4FWMRUXRSz32ULSDvHvbU6UtwmM8hDeE55sz9qRRuivGJmHgBcA5Yytg47hEAX1K3RWgVZ6M98oYbyf3Auhu5xNu",
  "key8": "21ARyycPyG3DbaWMu7WEBjdsRn5sygSV5ht3j5FJMXRaxaz9d49rESKY8p3G91fvyycNCbHoY8sJUmiKvRTqQrFP",
  "key9": "2MU2JjKV6LGi5vDGrqX9XJwSUmVjuxWvYt6hqCRnrFFjLvdFSxUa6vka5UMFAM8hqUejieSs8X4uqmekJXMY1tor",
  "key10": "4FAjN425QaB2aduYXfxcX5EAzdzxuk91vMYof7FiBjDGW3D2aYYmu7F1rUirMLo9wCW8uqWuJ9RKDDUsRpuYz1mT",
  "key11": "3pFBSeyj95XeiaSdjpqgUf2J7XfSyhydH217HvSD1pxP3tX6Lx9iTge8GNX7P2VuUWrZ4hpjSQs1dTqUHdc1EtRM",
  "key12": "3pvxmWHCUYEGtZyq2gvpyucWEpnhFkwhu32T6reu46XEqdr8gSztpCM1FHCXkbCDZdZsQ8XPBoBRBoZcny1XsEno",
  "key13": "44Juekwv6Ss6xKubufveRZeZTS98wJxND4Lh4J7RPaQLLhHS9psDMGuvnTT8g3iftLUdyyGGfcBQBX7xYPTB8uno",
  "key14": "5jejbU1JyjJxEY79VCVwoj3gTU1VVib9RbstVXES7DCyN4bsKmhVtsXPQi7Snxgk5i3xCCqS72w8yTGyB5AhGF3v",
  "key15": "5jmtFxCSfg3HUpRdyxnQbuXrqECoygH6KwNN32xpvQogSSm3K5bG4T1NsE7kwB7ZPouq54WrR7MF553Fm6aPoo1z",
  "key16": "KCeap2ogDrmaZg76eqJTJqNXUCUGWXPkL1NfkPcoZLinpaWuE5424DXNVcLUuzjX7hyLb9hmbhbFnkJecC8XK7t",
  "key17": "4eC6L1323gMSjQWbpbvRGin5JNN96vPsumcf5FfMp8Jk8BaDz6JvwGC1HbiC7nDcBtNLC17itGpkgeCbRud8Us76",
  "key18": "53UzLfE2CioUyzGjHnQPQVZtATMZLA2GjoQSy7rfJ51ZCn9jtSPzmb4wGGhvpF4Z4dMagEW27d7t5nP9fYgaf9pR",
  "key19": "2DfvpA3xCpSRbEHdGFhTk1LqJDiRjxHnDvxVkDEDS1uoZQSY2i6DF3VEhPS7mz9c8jucmU1kWaGVdhf5nN4SJ7JN",
  "key20": "54Rv4FhZabD8mQ6w6ktpcA4iQSJZbgX3mNPdeGBtaVqkSU2NGpSS3UTPuRaSHo8emMkjGCfA49sa8PQDKQmnsYz3",
  "key21": "3gHTWQv9QFmZYB4x65pQq8rNM1TvHFki31GDfGBSuvU8pyewHm1pRRmf6k8TChkaVY3ZLDuua2qbEUiftT8vc49k",
  "key22": "4RjXMZ5gHJcYC8xqnQiK4Hc8oeDLyStKZZHtcv75Rhi69YVsZgSjd1W4jYS7hRuNo4Hhc2PG1s6CVMmQ3MRt3J8b",
  "key23": "TakLbPmTiKcaP9Biax7GQcD5ixktb7YcPEg3ziYS77Aj53PjaKxyiVSbfUJbEeBBenSgqy891kxrUeLpcWQANGz",
  "key24": "Sn69xq5FBUNC8BLW9BVm48zB9s3H7J2eU6jrSDB22FxrqjQTF4hn7XjVHBPrssitRqvNuHz4jQ6iAgTiSww2xqU",
  "key25": "2C131k78iqpw8Pq7pG45Dfp26NQsgzYtqZr7fTbj9X9VYm8mc5Gq3L22TEPUQeLjY4nJmGBLr2GGjf1jM3ue3qm8",
  "key26": "4KCkfRbfs3gSYjx3rzR9LCciw3fKLF3U6J4At9eQH74HEos9GmcGU6egKEutkxFu6vZh7huhCCvj6Q8eB7R7wfrB",
  "key27": "4Xwr9KEBTjwTkJYcTG6EHBL8oB8LsKp6JqhRUzyqf4BbLMfJKBQyKkGk7aMCFSoZTJ5o5LdnaRvTeco9ju3AqrhQ",
  "key28": "4aZNEZZjcmipWqx3x1GMF8FzTWYnneD8X54gZ7cJ6euyEbKB2qyJNXkDdAP6fWZwwA4NsthCsRmeDx6jYF4fYtm4",
  "key29": "5fY2HDjK25ET9VTF1gEBuFVHZtdeQ8aDYJnj5rSCSDJDBywYg8myui7D9ErciVMhs9HTww5NZTwAcorAN4sYy53H",
  "key30": "2c4P33Crihc18vcMnYiZLniAviGhX2vbChnmPmTK3wRdWYDADoxN3E8yW9oa6ufNcqpyYJEbft5TAdqeX7FgGVsd",
  "key31": "59LeQHP1YB1WEw7btek7pSYwpGvDn2KtFGvJxb3aJmMyimqk223px8UbBcrQCwnrXZsYdQoXp3fnzgoqaGP7zUEe",
  "key32": "5KzHUJNN62RB2i6ZCkxniVraYduWwd7xswCLodBhaENosQiJGxSAWMG2CFc1nTrikhnVniEP1YSCoqMzZNpf9p53",
  "key33": "xDGzHBRhj5S43MZG4Z7Z8TKC5FhiPZST1B1a7h9R6txEfmoJcPQVaor6ieEzJgNEMdV3SSJqVRfUeLcRLskfFB8"
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
