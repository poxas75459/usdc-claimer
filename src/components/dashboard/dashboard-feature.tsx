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
    "4rePpEpBitP6rTtausCJFX2kJj3px8tCXqwyanCAyNGcC3FzRL2kBo9Rrt6uHU5G8wZ4x5n6HULY7yphYwtYerWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDXHsTe6j1NJiahEJxUnuZHrXGG48G8ugc7p6X8coRq5wsza7fEPriPdv86CELy8MDmh5P2wP7CouhC96iiHPtc",
  "key1": "4EboKD8hBL2u7JvykKL7AhaKMUpA38njbefm6VupQWbUTZS92SwLmYszQT2cUQ3TT46ib45AycFr9vbkv3D4Umvk",
  "key2": "5A33ZZr6NPJdXSHdWVuCtbtct8jF1BLUpg1CUbDy4bo24JgZBPeK653f8fAMt2Wn8ozYyV7XXYQpyeYxuimMXne2",
  "key3": "3rpXQzHKKnBw72kgdEwKYN9p7BvR1TxMTu8rEHknNKAkK9bN6LTXPYxmKAmTZ7oQRtmH6QPhu55ZYfysupURtYEw",
  "key4": "5cRUxQ72SiHQRtMo9Hvvm9i5Sr3yDqJBUJ365U9mUGuPrPA3uG8fYcgysjsv7erUmPJ8aoDgaH4rciGLZUeCzMdh",
  "key5": "39epozVwtkVN6SxQz7EfxddAdqeVrfE4k1NGFPaCgF4fH6ZNRmM5pGeZKuGvMLjcp2WdATf3TrXaZktQfrtWEm3R",
  "key6": "2qNiWL7B9X38onWkRHgQQg6owFEntEGFqzneQSVypu1V8e9NPC1MerZ5Fx92knk4cSxuQFjHhnbR8mTZwoUbQq82",
  "key7": "E5aen57LAQXRr2GVJkzNpozs9KDhZ2DoMZjjyhFXoUkmRR6RBu1taKdfXuJ17iXyvNXzxLg8VpuUpYmpu4jGgAy",
  "key8": "3ywzxMsdxRfgK6kMivEw6w3urKP14DhCqReQJ6x8oV5UaanvaqczxpAU2cqqaMo9hTTNkUDaFSfxWiRPzwheAuu2",
  "key9": "2axpAKN1kN519vhjVBqMUSJEiyQ2hvQat8VdD6uVFHpcjznwfTySpcidJk3h4GrrgZzhbpLR4rYP2CoHpfCNVAQx",
  "key10": "doHuMxC1rLSvmNF9kwTrQVpkkpyMey3fUdyuU7sRx56nE5CKQVe3uvoy35gRhBFHPnXiYmVD47iffZDU3f8LJ7c",
  "key11": "2cjc8Byi8xJm3rVnVfZZbWzhB4MBL3SGZEExQnv8dZVCiMnhKj75tzsHVTBz5mpSkYKVh9nYc8qb4fx2f2ym2WnD",
  "key12": "4td9DCEkQrAGjk1bwuGCRLx56xkwupbJqmaBcJLdEmoHFBf8zSoWZNnef1B61UCxeVt5J1ALbCMQ9YAS1riJRzfo",
  "key13": "2GyenA3WENjkf4Zeju8Hu5hi4jCCwuyJSX57De4TdtHb1s8zwC6y2bHYhFVSGu6MqgkHZvHoaupMZd1iahJUsxeW",
  "key14": "4U7aD2PEeTr5oJFEGaWasoU2YqpiAoyCYqrpf8cFYfJMKaPf5MRnvhKzW8fPDkM95VBPXxsjnXRefwFY3Dh3qMUF",
  "key15": "PJ7nmtRpNh7atfsne8sNxBToHzTuRdYr9EYzP5bxDpxPeFVSXg38atH3eFpQ332uYSW14ueRy7YoHyRoT13kDM8",
  "key16": "3QuZHRvpd8QBLn1PXFWrSSfX2HzzpdjyNriPm2QyjiBWEZfhWofZ44PcQ23yVTz8a6dncxGVhrLZvcz7mpvTJLWJ",
  "key17": "4dHZcshyrjw5h1ZWHSxS3vvXTEkga4iSJiSFntsHwAJK8wTQTGY8FmzMYWRcQ3qbT2WyRezQhmPPtvVH8pxMtgHZ",
  "key18": "5mzd1BPAs2P5Rf3D1KzbQKAxDGuJ5oSZ3wDz8kYfvijQaU6wBdSjXvzWrh7TdEBjpZwNxHhmfLb4x8woKfqx4VkP",
  "key19": "Dae3dgNwYP2t2WkxmsjvR7cCZHeygEJzv25JzwjXSFhX3ZuQcf4ax2XghDFahnqTwqL6iLmfYZQDfWi4wmCC8Nm",
  "key20": "4HHmjvv89jVgiriC2XJUTNMBuFLAKi28qdXEgZRRAmcTU6HzrMg658WR5LkKRCF7VSv7eHsb6U9tDKWHMiVAcSjm",
  "key21": "3smDpyNjLuobgPXg7H3AZ4AnpSDvemHrTuqqYfTatd1oCYkV49WTnNoHi3UbZT5pxKwdJgLepUujpY6TZqCcuXXV",
  "key22": "2eZWKJasicXwAMYxyPJajz7YfgTieoUKkamfATQM2ciPZ3c2147E4MLe44QJshSGWvyfoEK968WRHgReKdqLJbMs",
  "key23": "B5HsoaUVkoNsPxe82xR9Uu6L59K9LsJ39cbvDxrnD5gJhb5fbR6DdjhT3LrUXnrPQTWoBFYrNrctj8A5e7BumgW",
  "key24": "32zsZ5YJdKKBJr7fAVsog95MfUQXXei5TEBWGJLkFbQnAeZBdMff6CjZfNiCNvgksyJiboMg2hRyRYNCc9kwSX2v",
  "key25": "4YhXAC6s5mtNUDhVRBfrmYBTjtxhWPZK2CRboVJrKV4kKWma3zjS8hK23XzJo8X2s3DZJBs7FSFhVo6YNmYeUjri",
  "key26": "RddozCpd3Fk6BGdbGJzaHdtZcwj7JiNfngsNCgPxMiqGZmF6MY5jgzyPMLwLzFJKZL9XWgeRLXp7cN1U8RscteL",
  "key27": "4oJxWB9u8cLGopRENQvNwNHNoQP9RQSma3wcwjo2oWxQy7EdWqWx7dFwc4AWKdYViDwNWzYiTqowcvmq1EF7K7mB",
  "key28": "hCERyeSdw9xzB39soviTyQ9hH4g8eyxD51oZnWdefdd9oiapnW859tmQFf5niRvojk8efbvK9HPMDywSxxhzmTi",
  "key29": "4GhXnnpvEq33HjLsoaanwzn87oXJpTuyBFdVkxjf9Ys2E7aYYavgMSiNovHnt91tsiujzpbtfKVcjjxZr68gN6sz",
  "key30": "27X9XRzHgwzxi6KEkGXgSdv64tasN6sjxkWfHLmNPGeYPE3qHHFZWftPbP4hXhmA7AnsfDkkkN1oDh5NeAwn7MeW",
  "key31": "26temavtwPBqFSVZHkUgYQBnB4t3bmQ3qqeJeBnN2G7hjLzEXYMq8eedkhiyhopUi185YvvTaQXHuDCFps79wjbu",
  "key32": "4GQmR1GeM7firMfom5GWFdLHKX4dWYzMft1o3qCJg52niFSzAJ8ekXUH1jepkJVmBSQmZtwrj46z5dTQ4sJ6dHZg",
  "key33": "4KpHrqBFmzcBikd1S8LB8GLmZRcYdpt73deUVuTRCieswTdhZWMrxXzs2rGgGGCJMBX1wpgUcieZigtFJzpMRoE5",
  "key34": "2NkghmMuhrRYqwgATuLVq1JFgWDNUgmBRbx44i7GThyPxKJkvUdU6QiYik7pyYNa4D5iLeGbxh5wk97vxDF8Vgec"
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
