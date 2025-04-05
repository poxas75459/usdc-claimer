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
    "5Q7p8YLkj1XqgzaGSmwMZGgxeu7JJ4ikuioeaNPpcze6qknUBLKmV7geZVVu78baptYvAgp4AiyZxSyvvmjQpVKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNXdQkYT8gUK4BvRoPU4Z3iubaekQScfVNqg426uyRHQ4qFojb7dWKXRFSpy6KL8iCxMD8uUbhM1os6G1None6Z",
  "key1": "3WuPxwBGLNRkU1uTuzALP3W2Hy3Vbh7yTGugif2B7E1BimZw2FY8snSRN8MA6yBJx8cs5kySqKChGUWgBvRDYvTR",
  "key2": "5pzJ3r8BTSmGwFcvQ2nwDVCoHFvhZ89ejxnnHpbw6dj6H7hHFVru5YowuK1qPpAL5wYNK3gi3QGWdcCMchAi7hJ8",
  "key3": "4Na7MAYJu4NAVtYsoYzVoLzxUUcB5uWx9etazhzpPAzF8uB5mQzskHGbqXHfTFPJLXWkpwno2BtX3ZivKj5S1E3U",
  "key4": "pyWzWdZ5zWnG2Nit3ZhCoViUirTPEEeEyJzFdr4TYCdnknii5Z6mrWHZHwDG8DL1LDorzQqEBdq2a1tVajt8e6U",
  "key5": "ANABCkNnY1RdDvenwy2DwPTXN4LJSpjrm6QuRrAbJ4iiDVscF2RjoBN9KmjkYg7Ce1CR2oUrECgZNBGKWxvSJ8D",
  "key6": "2Lgyty1zz1R74BC9bEQcFKx9W5uQcyknfkKNtsgoyHsLK8Jzz6M6zatrLcQi4DqRa5xE1AQnSPrqsVntuXrQuYj5",
  "key7": "3KcejdxkMMt8QU62eXDoZ6DKuovGEg55iCDwqAebXCesc77XGudgUCuHZphhizNx5oriY8XkEHd5a2Yzt46s7W9d",
  "key8": "5v3L3S2sw1B1zt7VjrqVWYQRAGJZ8oixTGkqG1TWV6gJ4mdkkNm4BTwbNjwnhWCEzuMyCLZmmX6bWfAurusXDqGd",
  "key9": "5ySmHzZPo25x6KpFG8HB2g5nVY3kDAJJYyt5fYDZYhyFHycZkH9zxp8Hsa1u7QQDBUK26oQEm8sYmhA4PehgNBhg",
  "key10": "ekZ15uZYbk6zHXZTm8dEjm7wVgqk4yUbhmmHrRf8KwXYrnk268nE9ormkNwDBUMjSgGfq6LewJw1Diz9zq9vhn3",
  "key11": "4R1YYvuGkWgHgvEVZrkAWNL791HjZdmxt737XgWyNtXX8etZHMURvmLaNNmMTszTJh71Ua5GFXduMEEVh8SbKqGA",
  "key12": "4Ym4uxQz6XrVPkVt6t7vWKGjpa4aZDRsK4PNTHb8ky9eoB2TNTq6TaBdN9o9AqwCymtkv6eSWum4KJqDT7ByqvNp",
  "key13": "2k9PU7EFR4nA2N3TQFtNDTHvz3nMwjrb7SiAev2uBco27mGoZtMsjJeY2Au21tyeUJCv2mUSmNnwx81kAqowGvLe",
  "key14": "4KxcTLfHWdcDWG9gu3UDrc2xkjqnvYDMCj4Mb55fM2cbzg3X49dqKRyhXHySxGeoAzcMU9M8FPRd966YKkL18KND",
  "key15": "3CefFES42Ggu7Tg9nq3TA7WEchsZ4JQLiFjJcGs6puv4ranRRMgjaATyQ22Cf1Y9F89HmMrvJCSSWAPKisGiUW37",
  "key16": "i83CMMiaSJv21ougFD4ccEenZXNb3pyMjgcZoUoXVB6zawuZ2mou6QKmAbMok592Cypd9k9VJ49dmQY6d7iY2GG",
  "key17": "5quv9onmNZwZbL8km8ejyh2QD1tvaEC6mrvbaeeD8Wb2chYFLxZyFD4EQCPPEMSDEYoNxYMZ3i9Tk5qMxHoTRxAZ",
  "key18": "3xavTeYpy1vW3kH7PjD5Cr8naqZbcewwy3z66V5aAqZQPz1LTtMSMQEXUgnq1BC5Z62LnCFUgNHBew1xvxFBdUTe",
  "key19": "4vjz56t3Mo961H8KcmyzUeodYAmvqYJYgEQTPRBq1UqUBrL8w52Wub8dnr1hqHcYfD3D1dQTg71zuhVsosVNPaFN",
  "key20": "4WyxSFZRUWoccGRXXnr1dURXXBsDiibS4wGdUSNTMAWvSpxb7pUoapE5Fe4y7ym9uHwVmSZ9H95GuW5sgDL9dp6z",
  "key21": "64p67YLEonnfLXdiS8fv2qJcAaiRNRWWtFgdMNb5cCZ3XiFoRshDYoPp2SneEXvJwe1v8dschfer4v7ncXDFs3MS",
  "key22": "LHuqoEkVjEyS6eSLRzWJNUCAjphRRwXP8DkJQRPFQSJNZBCXdpnaekHRCH42rKvk2yidr4AmHE2ff7ZTQmmvPB5",
  "key23": "4rJ3ecM1qBJvdnXsTs2nPuShsFPxPkTBoXfRKH4CccDgho8Si85XTfF9hSzr6NJcwUPf7ZuomA6pcgaiPycjTsd6",
  "key24": "2sBu9adNxsNoWyU5uCxLFY8VYHVQfy5TadsVvLTeHSZknwNQh7qYigfnzAESccVok2WG2PKnBDBXjFLMGx2b1LNK",
  "key25": "2i4dD4z1FJ333xUSdyjPytJqho3x9TTf6Td4DfQwnXQN1k8eMWJubgo2oPbkm6U8dns5LseDpoPLBjWNaDnLXna7"
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
