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
    "2AQEi9EvRFziwPNTrF39DaFqg2JFz1u8mWaXkXMJ9JniA6fniEmTYEex7ggqG85dQAogCUzuXfnfKUoK9GKEAdiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJJ2vhB3SVPUU2cRWEHEXCRoPqCgR3MknvfzsvZKSF7Mhq5BLiHcH6rTc6mgra9ZDgVMhai48yXtpKDEqWiQQtz",
  "key1": "2JzC3fYbPzZAxHRRPeqCqq35A1SfBZJfgEprk5CotSv2MRauAE6PBjPLZn6LCv9fJHZxq8kppHoJEG4q8R8oP5uD",
  "key2": "4ukDacoqTRY7vfEHGEcdja6MqC9Mec65cw841kDf1LD1rr4JrUjeVfALCC3npT3Dd4zTnbHRmnTS9X1zquQDLV4R",
  "key3": "3amAWUPNMSZA1GikaJFB54x7WEhUrMHS2R2zZtb4FL8gfxqTSfhVUthUTdtRuFu5S2Gf21p6JFETYGz4f23ULnuW",
  "key4": "3LEUFwLceQJ7kAw7whNHZDifHfGsEwXZQyPQzvYwvCx22VYJ6ZbQSV2qaRVj6MUBnhNqhPee3syPSApns3kZxQqU",
  "key5": "x2xJ8CktntSXt1YvAFPWCk6CHme21kHMLc7WwFtQU8n92BQXJb99jx3CeFgpzW5Xa9K3jg75XAakdKqNC18zDMZ",
  "key6": "3mD7s626oeUDeC33WRa72jLMrcGfQFcFfmTWkXH9gELvnMfKCw6iRRKbLtNt7gYpBP9XUt1JzpzMAYy3buUXtdY1",
  "key7": "4HbDRf18AmY9iXfKpsNcbdBrwJvqkqhhpn6dse8dx5eop2NvFahzFrfoLYTpVJgSkY5khgei3CLaADxJGrfRGaJz",
  "key8": "5rfZGkahdeHokbjEQTm1tDfDCoaf9SJdDrosaVD2Uqhvp73Xtou1cwcEgP3CvuEu2m2EgESoRbRJmqUwsV1XtzWM",
  "key9": "2RRqFCVLDSCotbYYwJuz7xsdJi26WhXGF57XRXjRRxFzKvLFLwV983vxoHtTa7oGY94br911DQ8LEuoar1HpZf7B",
  "key10": "5RBcBzsM7EtUBav57qg4xj3TrmJQ9qHoSQz2Xej9AdMmdQ6d6kEM2h1iy7Jx2m5Mu3gJU8LfqV6ULC1N7oJSWPY4",
  "key11": "5FLvQxXgbG8xbV5LftHoSrGVrAXTbvi5fiLBSoMVf31SCup74XeaUGzrJyiTyDDHbsrSCMCXZngzhcE3YCdxoDFQ",
  "key12": "2s4ZbAa62dYQXdJ7FFFsHYauZkyw6h2g1UCJnihakEG8aBYosnXLeqR5ftiUBZYgqwJaDST48KfZfaPBnnnieRyg",
  "key13": "TMQa8eFD3MvhXqdnjzqJyFF6RFZkkuRwcsrbL3pXAduM3NU6Fc2fJBD7XsJLuSwSUXw7XAxEdv5aSbjEjXbLy1P",
  "key14": "58WHP3yLC3usybCKpjdDkCN6i8rZgpL6q7Q2cVxh7LUGeax6x291iuhdmS9dVH2B1zfhAroySQZ3ChGWf2y1xzJF",
  "key15": "65vi2mfhwhLg5tc5FhH8yjqtj9feoomjuvNQMwTr6rKWKkVihedo8NJq9Vvt58sYaLVrfGBGbyzxN5n51WhPUocc",
  "key16": "5tDSAXBz2vWca8V8NbBGF5vtuEzKXnkAoRD3KXGHCjrqECByLPLVUBKpyci6tCiqRifhhkivYT9F3Emm1NGDfnZ5",
  "key17": "vKcbhHWoRwo6C3aDPwSrwsmmHrdouHa3oiWyhaLkXgwa31YhDzU6tZFvGNwTos2BAcDp8dUBNKmhPKQbu4FSAqg",
  "key18": "2YvoBJcYvNDQzbzrpmpDBxpQxbQfmVMWDdEM6fczoTp5EYRfCepm9E26pDdZL57rcyQw4nNrHQb3benTS5t9HzmK",
  "key19": "2HNu86xQWCjawmfXgJPbY38sU3r4YjZPskpdLodKkVbULAb59TKWMwnf7URzPsDTxcgWH5d673BH5aSk3ojFZ4QM",
  "key20": "SdfxjYXRdWrq1f6Y2HFcosDyxNJeKTPfM6wwYS5GDBevkPF2PPrHivQzUtPoLAG6a8dSzzj5oVGY3cobsKPoZEX",
  "key21": "4jCgQRhRKyB47Mum7DwuxDMEW8Go1mNA5MKoiUfrfMu3NA51ks2638kRAXEXL9etwUspWzf2HmAmpQ49mz6M4RnD",
  "key22": "3FbZL1kJkZqFzY47i7aWuPkRtYUwUjxLUdwy2d6u1jzPKUt8JkTZLK5QSXouDBmAmkWP9MEW1StiYt8Fxehngch",
  "key23": "4WYRs9xkLC78q4BQknZThYygkKfCQcvM3U5o863z6dkkEP6dhwJkBgwWhzReTR3PCw8KkzWS32mVo6QkL314d2N2",
  "key24": "3gueWxvd1d44etVFePXbn7YtgWM5V9P4znkSRwCQ2yP6iqGJamssDm9uJau4Qtm2dYpjd7EeozxGi51VzYnG1EGs",
  "key25": "2Eo1U2j5k8sT9oF5a67tbsR9KR6EHPsj7sco84SkrgFrJ8KZAuPGkbfkjENPjt7B3R8LTHkKakLoKxuYh7MvEuRQ",
  "key26": "3gwbu1h5YiYW6u8UjxeSzc35FCpeUe84Fhr7dnMQEbR1RvmqmAaKkePvFhsJAhdiSMH85V8ERMbrKL99EZtb7k8u",
  "key27": "4Mocr8zArtCybYz8L8or9DJUuAgJGsgd7bkpWArmgpjmoDdQn4w9mFMA4Mza1dt7iV8Ym1KzbXQuxXroaSNLVRj6",
  "key28": "cBpZcwAD4YKmKUpd4j8jaBQ8LKMDqUbVw7zsjyVqYPx6FPBr5WhQa6DCxfnNGUrKvzuMjNDtRQPAt6Ju5jvzFsF",
  "key29": "4qUjSu1DwUTqjJRm7EvRYwAoEBaWP4mFytZkynaWrviKGqwXZi3Uidtf6YbJnRmY7oB8rjMyeDuCMwHS7XyRVPCn",
  "key30": "2TuCHWTqo1TKrJsSp4AczdFcWRDZXUQ11hawqUXE24y6tju7cnZeGTY3xerB5ve6nTma1oGNfz5RJ1KhVuatM6yo",
  "key31": "5NSUD18SWVW2SyFvDSox3p1eWhSfziVmch3j6suEE8tiPPbJ9UgvFCpsZKJ1mJuiPv38pfxypKFcjmMSNWxYKWXc",
  "key32": "5WTBMTg9o5FBrZGdNx6fHmp4qfTuCLQupdD76Xz4bQUQdgKDuzzVruQhbWJUebSgtZMvbPN74G2uhWbQtWZNpTmK",
  "key33": "P7MF4UKT8NmxRv5v3qhMFFHyoZGCrKBxwMThA8ewByH83Tn6H9S2w79A4qvf6BtPXkXeGNYtKpEVP7Ca9CJMrcN"
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
