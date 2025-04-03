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
    "4Pd7Wou1SYfiUbAX3D7PTTrUG8uZvMcuXH5Jt3CSQXCNv1UXF7nt8xhd3VcTFheLRgCJyziZzXAD8XCm3b1eo2zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYqBi6SEaE1hBRZAgXio48xAUkCNQXbWSZuZ3ttPnyE7b1cPqhY4z1zvzEY3N9HuzqcLoKFW3GHJtzD25PeXTFc",
  "key1": "3Uwhag1DyYokkhbG9bYVdcxXVLv8iStsSbzxyFfYL8vQgCzG4g1qwvCNqGX75ytmeT4TRqVTgJXN8vd11DViTm9T",
  "key2": "4RckhCizwam11ZXW5cwJ7GE6RNJhYkgEaFPVKZTYWpmf6zwfW3D5J9MTB48pJiSP7Hx9aC28MNaB8wwPewSUxdSh",
  "key3": "5mAyXaKxWTVANZ6JiMiXmTFACahzosFQvY4bTymmRe1c3dRqarBrgUeiNMGQtdvDWiM6x6dYYKhUPZ7rBmJtKucM",
  "key4": "59q23j8MnxhLdwUyvZ8Kiqx8etR1AcCrdbm2RHQPsGNyNtWixdSYBuC5RZC6X3zafAK72wx5XBo1gffXZG1tXqvB",
  "key5": "2qmEeLHki3xxAQnZLmha6ymWCrgj6YrBnDx7Unk8sWy79jgkP3ABqXKdNARLiTRScGeX1qmdbFZgQyuCjwNaoNUq",
  "key6": "4fPAK72PPWJqcDPPEETkQuo79g93AUqXdYPPqLpA6rpbB41EUSKa1DpGegmk7VFydxDRZpYtTS5wLioBMBQgUbEt",
  "key7": "3vW8WuVXbpdMK9JE7jW55pxQtoCXhCz1CroQ6GWcna1uYWGfbKDvDuMi7JPDH5xogBUyj1KRguiDkjJXSeW42EY9",
  "key8": "2C5PbPiLqtfVSk7ZbAxyJECNPcV2zNhTM41kdKcDsa5G2iP4GhRTvhdsRUg5134zksStwhANpfKqGH1gXzRamjAH",
  "key9": "4UPSm1qEkAeBurt6pZDYhUe7gW4jahdWfXJWeDtJXtwpAR37aCP4R1sStJNXdt5Md6FWLGzNYPUXGFejdaqGaAr9",
  "key10": "3aLJYvuTyzFQHXRCv4ZZdtvxu6gQK9ENY4pQJukN44PjLhufm1jBYnSdgjeJ1C7kCsYr2RbRWBt9pCmBkWjqLVyM",
  "key11": "69rKpEZnpQ8QCXwECwYwsykdNCekxWMpZF8bhijTzQo9JYzWhvaPTGaiY7r7BWkzHBjprJrN2c1UQX2Zu1fHAVe",
  "key12": "2cDA8zXdEhAEHEyy7Cau52BaNbFRXkMbrq2pLep59zqQ73KXE2Fr25DyTE9BhJ1kPRkWtXojgZAJztjAXb3aStzT",
  "key13": "34c7EE1SSw2wdfLGp6FAHJnYKvWubCn5GY9jpeY8z58CaGCSVg8ZLJamNYiuiQHfSjayjXFFahcUbn28XgnB2Vwq",
  "key14": "4gogHe7j55woJxe2fJh9jsrCiefzU2Xwnpgjo8pyaqGWmhWCpy3ddN2G15Zbi4hF8vjvnCK57ZeGRLqAF7npJqya",
  "key15": "2TWkdALLYZUzWNtg41GqtscSwtSYnYaZr7zx4hk4g3d1ZnRWdJQhZrSbKDeLuw6ks9rkfLbuTuMeomaeMMqiadax",
  "key16": "4woHgxST9fngYqptPxrpPywxBeYtUKt4jCMQ6JRienn1P7TsR4iZntuTkFetjyyZWKbaAkizUjtAsNxVwEKhffWu",
  "key17": "2Cx1BYvTnS3KYr3Pxd4sMAB9yYb3fcaXndtJ1QotKgkH9D4FP1tgYNuCbsdpYmMBgV7Ko6d5eAoctqRnwTx1XDk1",
  "key18": "3beF35MfHt2JMa6SfajGwMcB1ndMVpcePZNNsAPbetrAbcYmirtWVsMB1NgJjRqfNHNpdrk5jsJZp7taxkaBxnN5",
  "key19": "5kauV7UDLrWbndCK27m2pCU8QErt39UNLRhzeTpQqtq4JkdqroGtZD82ywjVuaYXGLGF3thaGKEd7dsg6qZfzAfE",
  "key20": "26ARcVgVDg39CpsFPQcigfLzrGfdjYtk1BRVyat9bqDHR13eppm95a3FFMB4ssj7Enb3NqbiTozyeTuxmJC76qd6",
  "key21": "24uyYGSmyCEvrAGrr26UwMm1STM3Aw26f9sU6UX7RpsGwA778X29kLSB9hqzKDPMgKJsyUtaroqqty4vcEE49L6h",
  "key22": "2nD8HHD3q5d9e4gzcMhuarsVb3D12wpJpaAHfXazic5852phErEKpCzRJiw1gFW8hGGcGcW8kQkhNtJ6UzKFtuw3",
  "key23": "4pWGcTjWLYm7JQ8xrSpAS1nQRJh42ELWu74SGG7QNbyj8Z2ycMtZSDX5WvUfcNHKzynHnVWs4zzy8koticmRRqcC",
  "key24": "4GYiQPnHhvpA5Ysi22cTW8LqHreQFUSgiBy4f8yL1ADSQCFmpS92JrtPQm7Td8EKR9BfKGz839oHBGvMGUfbFvHG",
  "key25": "32pNfYVCpqiY4pDrjNsvyEyrYMUXn3Nm85XniTuMuNjDBbH3ZVRPKAvBuja3z39f4xS3FpePRiR7P6fDL2CGtLEH",
  "key26": "4NsPFY9vsQz7cm2Yv78Ge4G8RRJhrbSrmKWQv516TtaEHHKoS1Y3hsSJxjhS9AnbV9n5Fdr8A8k4oXbv2mJuyVpe",
  "key27": "3BppBhCeMx7rfBd8F2xZggPXdZLVoa8NbbcjAaUswmKu7CxhucJQbHMLAmEn9n786CjFo6uQqJiTJXDtMDoUkt8p",
  "key28": "4hMHdHyN17Je3ukgLumU2MUjuHcbJam9qDAPXFcGR4ZA4YFniUD6GFVcTKJ4cqC3DgPG2a2TPjtVhKBkPqinkaPo",
  "key29": "3G9LsT7U2tujRg3feqd3fJdkppsE4HSoFm5Jkn5aAasbSgqR28APZbKuGCRh24tkJ5y2eD8UTywo3vn5VoTP9XTb",
  "key30": "2ATzhvQ9vDkpe1F2CCJyHKGJ1app79UiPK7t6QMJ7Gk1X6jBpntEWr5m8BoSYMhNfYHzWxZSFtLToi2aKG86YUyr",
  "key31": "2ymRBX5XCSfke1HxhhAbbmeyDo59enzwzJcujFXhBBGS9H5S3opr5HLMhPqP3rERdqk2p3CwTWHFj1WH7jQirECQ",
  "key32": "xGaGxwDKQykYfp7HaY92ebnJEtc9t4oY9uTPWRCBoEnrvAyZfAdkuH8gpxLDoGAivMo8u3KzJYBKXm3Tuc6zyxG",
  "key33": "3D3a8fQZzUadunv59mjaqo4nL3E9QVYAQGGJQ1f6wjaiduVgCAykTEYCNvyiy7SXJ5V496r7oKvVDke3uJMmDF8M",
  "key34": "2Njytb9q2yD9SBZsEuNXAforz24wPomThoRXKw7ZBsr6e1mVSnvdvWrqZjFwtpKn2MkBKShquwYqXfM1mQnvRSTC",
  "key35": "2ZsXYAvKeTeRfLwJHUwJSobeqqB5jqZNrxJu6BCxbCXWxkuWfiXfpS3QfHEG416iX1tTDz7sqKPzk33sAiRnoj8j",
  "key36": "49rDVUBYAmE4W9bNs4Ec3H9iEYtZhZ1oLFpJRY4AnvUnN1mXVYbNV1ivSDoSfZkqJv4DHtVaE3zzmvRkVihQzBqZ",
  "key37": "4zsXAs5REETqoNrT7BmTWhnAMEA62WQrbpS8NkSRyLfkbHoQKYYssNa4qVcWQaxL7zRxprocgrtSXnqvtQQHhd1S",
  "key38": "2YYFDm911aGSzNDreoEHWy2WawKvWjf4DXgyw8KdptrjXjhFBDMdG1XMC7fU4waAXTf3pkrszPX9njukeKbB4wbc",
  "key39": "4JtNotg1aQ69gzU2J94MLJ9rGVrxtcHVCGDGgbpYja9FXE27x4cx7kTMd5PrKk8eguLAB3GqwWirLY8gkckJ4nAZ"
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
