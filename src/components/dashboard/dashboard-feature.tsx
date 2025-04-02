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
    "4g4p8E5KVMUUyhTRDMU5nXxqAsLLQaTKTYrBwVNbxGYshPKx3PKzH5AQDcEecHDGvWXoZcbJFjKAbx4FU8CNXegw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59nhfVLmMbZD4jan1M48Sq8pdnbu8XCrKVRCbgPdKBqsQ8u7G2Jw2ZjgmfhVMqzyZT7EeHy8cxuG1Zje7KQBevMe",
  "key1": "3ZfiymQPb7b5zj9hMzQQSK2uSTNCSUdxScL8ahxwCTZdEe9YPHUBxvbYU7zvVwvLPL19WgLXdg8BevhPmtTYxwHE",
  "key2": "4HwSHdRBsoRfD7XmtJg1nAHQrupxUYWqht1wS77rkoLzfV1mHHSQPBYw7CRR97SrQzUE78nuf2a1PW3jtqHzydQv",
  "key3": "5ASF4HRL7bg2tZu5mfNzekoggvsBh4Ui2tAUPFq65MXbLbixHqqu1e9bih32mtbdQvUfSmsS7Vn5sQpyTqxLPZqs",
  "key4": "mz5kJkUw7Ho3Dj7fcwPa3exPEjRKPdLpaFvJssf9iaXB9ZUFkhJjkW3WySneofTR4KW4Yk7Hy5jrY2gz3uCFKMw",
  "key5": "2QLqXc5J8bLkRWMTK341ymF3fT7NG7focgAFZYFjiWGJkakEQL51FXdxX1AQYv1Qd7Qh11jnJVXbWWrSJxAhkLE6",
  "key6": "SViEWeJ9jnnFUibrDCPcoMEXdBuijSQ7YMSBSuShYGqFKwHQ1T7BWpbMxdkhXs1dqjYRZiYVgwx4tcXnZXXVW4L",
  "key7": "4e8yyAnCCPVnjcRqRWv9qHcM6DeZuCFwHNpbwg9tzGQbco1Tb4CfDMHSCBg29P2xJQhPnuub9zSV4ud5Li46CCiC",
  "key8": "4CpWh3sa4CBPxRGMX74fYLtKa5B1mZzTv8dYRf7AvnQ7EScCNucZt1UMaHB5ah44T7ikaB9kjm8w1f415z7bcChK",
  "key9": "3133eTkcgmDFb3s3D5KxXPDuQ87prwkWTBDbSgPehqC8wZZ6DNNSLwDAfi5X8HEd6dqQdoSEP1v81eooHaZE47cF",
  "key10": "4rSxSW99mZhdmq7jdn6xJWDGeP7d4e2gEHoQUtk5LjvFB2umqCoHgaEGRka6EUG7hMKNGQU7Yn2T1tDEj6HCTWvE",
  "key11": "3Wimj3AGHzCcMwvkGgGCccHKj7r6PoMbybAtVrosAsexN3PBSUL4T9hfMhjN8WvaLDEJ8ZZJp1dSfkWLM8V8rj4Q",
  "key12": "8Kgap2taTqsAyuEwE7obCVBLK4s9ryUdFLNEyZmBkXQpF4f7SfyFLgqwcFuACAtNANRAvN8CdVny8w7RgGK9F3d",
  "key13": "3SKdASXX83vyWH8u9wczG2KQ5xxZdS4XH8qfWsLrVgjo9hy6g7RPLVZCXfSQMC4AijaTMUULWsNZKA79qP1iphVb",
  "key14": "2kpWf85cmDcg4QUiziE6E1LfmL9dBnEBE5Wcr6facgoqhV668JLtpEUH59oCVvuNaCwQj8KGAC4f92NPB38qoGpA",
  "key15": "5iCphAgVp3YLAq3Ex7VWQQZR1SJxHQYCFPtSu14xEtgyZgtoJVr4dos6FArrZYrxCwGFiqprkot8ajGp1qhaTE9o",
  "key16": "3G1kpMCCgpLaEZEwJucyNjx3UTptNMH22xjuzDWiqsJiFKrUR4EaqPB7ThxVxbENfCEK6GA19Uaao9qDed3U5eGv",
  "key17": "4SuYGuoQmmZhE5MCCh6mpt5jtrWxrcSzv661MyUAqCpYsv4MW5a4MZKYhVj3o1AmcoKskvtNm5jWA2aFTGQcDSRi",
  "key18": "4dpq2fcg2J1WWZCAWvqjpbqd71yEL8k9ywwKx4yU6aep1SGd6MKfgdqZi71GnEr7LxtMDx2tU16eQBeRuqhXSt4J",
  "key19": "3Yvu2b38Vg8h7e49BBqpoDGMgR23RjRAg9G1GQXLwHuqVpREcs5T2tYG1oCZccdPCij6T9r1t7zjW9ijYabQ5n4H",
  "key20": "5n5FXSiza2WsF7E6UPpyvA6DD4YZG58Zc9ZsZr3RBkMb6djBRM4XSDeZdP75xsxW2C46jLbPqUbZZFBPqRVxhx5R",
  "key21": "wzQv4KXosZJA3VzatsNNertpPL2aabPWYTWjiRfWMaEXTE8nqGWXBLXshHpt9xxiLBUNJ9Thii6xFdmP9Z5SJdp",
  "key22": "3kkbMJieKzwEwmXqGt2TwTMrCFEM3UGQWJG6RtnjqjmyMzUdEkGUksHswnMEFcy4o1ExA8YHzuqnpmrZdbpiueiD",
  "key23": "4zt2FGng6JoDFJTdUS9dmfgq9cti82q5zxqYqmVe5j86coM2pXpeqCpKUTrDnXK8Tfw3VgEjfgzjR4pKJW9nqtuN",
  "key24": "MYwmhxC7vxk2QzKD1DfeLi2nUfVMSYoEJ1RRJD2oicgd5oLK811MYvQ8RMtocXesgovB2V44T6WngF95mE458BU",
  "key25": "5gSFvJDVWk8P5Uc61NDGRJyzmH1fbF2kYWJCBm5kYHCXph1ffKL4au9CFEp4KyTrcWPchCSiz95FrqT3fzv6g5fY",
  "key26": "5p7PgsN6bDLqQWxoTgJdpNcFm8wcECLYRittVvdWvZpVFeGbxD5VxjiDKFtF6R62hHvJaLxGCp9hwyK8BMGgW2Xi",
  "key27": "2Q7UTGzfs96Dyxc3tuySMUdLXPW5EdFW4VUYZu6SYdmQTts3f2XXvg8R7ooMvP6QJnzJC3pZTtra4A8GJBG7v9sx",
  "key28": "4Kre4cfkWDXjze8ZfCDrwtBW63kccX7PcdgdNsV1cgzskdqmNjppBg3yKSqcxVxA37mJxQGXHJGQPehzg9YWhBx6",
  "key29": "4gDei83Gu2G6GpY8M3wmt61Ggc8HSAuGTagVDA2QdzdvEUNhqmu8xxcwB91Q9YrwRudgfeLwxrXLEmtrLQ3CWD23"
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
