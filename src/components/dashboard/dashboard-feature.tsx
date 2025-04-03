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
    "54GCFFFobTc3WafBNPgvxbnB6La1U9DbYMwd2Kvcxhvgk25wf9avHPjaEAcVDLWb9XcTj4SP9FGzcodiZ74LoFtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqPij2mcuJvc6rrfVLu6F62uWXUfGsu1jwGXQzZRUQrypns9H5tTUdtjYMpjUkf9pESY5K4BGLcHHdAQ5oVBHAZ",
  "key1": "4sxqRGVarzhT3s2321KLgzcf5Xq3oPXnJsKZ6TZrojsguqCpxkFCaeKR34hxfXFPARnHHEhXAxkP4ucxxTdr1an2",
  "key2": "5xCmAiPTqXUxg33F1jhZX2pppUJdr8pWzaJy2uTn2fYQDiujBq3XvAARV8S4wcBQnuZQpT39j3bhQzeH98AyQht7",
  "key3": "4nwoDis9AfYEc9mci1DKDYSTN3rbGagAXEkVcMnZ2GQqhq5pngziypytrJL9KwPMeb65tSzhUWztkMN4Kxfw9HdA",
  "key4": "5xHw6NgWzrax8JBEuoPcaBPhKnSRveB37ZGcC2D1Jb3PKKBUfzQtiYP89q8fjnLqwbtDE94vynDG6DC4uFYdyjUP",
  "key5": "2JpPdqkT9t5RwV16g1Gupvc4CmRehi2ZKkeCD3UJKkM2EjWbv9fk65Vk7GCuwRBb23gkVbwkyUzmGM6iXvysFKBk",
  "key6": "4h8kyj5FiX4T3QS4Sh3oMrhExJhZEhhkMPHbHGcPXq9kjEFCRw6JXbKYzYjEzWVHBbLwB82ciK2SohStDteC7iF9",
  "key7": "5XzNmFgYGMzKQa2dgmF7jEgATPJxXx1FEmvf8tsnzTmeGnTEg1uMVDKQstgw9Ga8zmYzv21VF6BDNz7v4T26XdgN",
  "key8": "2ssmhiKmtEwKYG4TNFpzXRrF4rSQ1UmjSTwUQt6STWUiUC496RpKPS69APJ9B9hWgZjf1iMuVt1PePUS11xafsR1",
  "key9": "4LgY3edPLr3Hvt2mgzJ3TW2coEK1qLhFMWo5nhUbgYkGUhD51unykhcZ3GdqM1MeVwm7bJDb37hbnZfdXmqfzwpE",
  "key10": "2RdeZ6MKe4a9GM7pKKHFKeSKPYuwG8T3xnCWUMRsLbCqjBYtM4mctQ2b3ydjZKG9ev4j38KFxSCqWa1kspPJGcqM",
  "key11": "3Zg338REN4zH1Yote9yiyYSXZSN7cFSm4ES39WxAPmf4a19aHJf3V7Dp5iJnHpXow8QsBCu63zs3eh45VNorQcG8",
  "key12": "3prqHzkbYVctkAAVHnYpibqkjycvPGo6xCaUTTojQEcCV4sBqFDWc72WSkhiVajF2yokkXd39makLriJ2oJwqQp",
  "key13": "3on419LXBDt6AdzuXNTMMTUbRtzaPshGHBD8EezSmvYpoPTSJSd2NFNcBK21SANNH37YLpRb9uPN9fYoftfS3Jof",
  "key14": "1hLR1rcLBxKd38BbbUxdLs37UxAAyJQNTRqk4XBk6GJXAKgqCYyx3c3ejnK6RhTzBAbD74bAkEWo9M5h8SVjc2g",
  "key15": "28ShsyisLkgvVPZqnNjb2642jwyHNm4Ysre31T4FRAjTKE9Z1rWXecA6rqa7CPwEz82W7mkd5iye4vFnAZzHyZdN",
  "key16": "318UZm9tUAYeGuxJYs8q1GEsiRJzcJaDCLWoj5Dsvguu5eNNp2ebqULnGXULwrTtdgmUH2EwfwepEQwmiSrUUZBj",
  "key17": "2ZTJnjpgYwJWSgcq6U3jRoKhz9ji2SSnkcAG9aeTFKuXMnmLBBZTVip2f2iweuL26VAGEFFHHex7z3oYq9M5e63a",
  "key18": "2v4gY2MzZfYqxRf6wBHWMpgAicas3fvGZYQz3ncutahNuycR6GMuE8454ZNdtiEz8LfEqiwg22dmBb9FLtd6C5HP",
  "key19": "22YbWBtrEnFP33773pEaUpt4Mcu6DwVv6aAznUYDfwSuaXwVpKBVum7zy4w2cTs1Lx7Y7HCHdZaRke3gfazQAPqX",
  "key20": "4WNg9VBsZmrKrvsVMn3mRUcHHFqF642W1UMw5LHVyjeuxr6RaeA91ZwD4iwM2W6ri5QhceLL591VvBVwkvtYAj8P",
  "key21": "4DfDWYd7Bxzm3SVFYDZ1cA5xBXbjr5U3r5rmvN4r2HnzTiW3rTSee51KsiJhs1Qwj1Qic9KHFUagArKft2WXNrhd",
  "key22": "51L5xCTfaSTCYxJ4c4iXnDAkjVjRahQaJxx4WEeDbyR2kawDPsJVyi1iBPsWk3Gc7NXnf1VkUqb8R4AQEbXroWw9",
  "key23": "4hXzCk8vZSJn5aSKguv4gbUeBYdrEPZcnEFEHZKJecfR3qCb882N6Nj5RD4FacWJPAPy2ZtwxSWUHWofw9BeGPxh",
  "key24": "3Ff7q2fVCmU1Eb4mnY19hM6KDDPLRYHkDUa5mDjQwXrndMSF4KDPk4Ga1EYsxC3WV6grKJqBSmYTPTTuzMeVqKwr",
  "key25": "28kKhMQ7amyfNgqvjfCbAeVB8EtEHk2MZqGvcAGFx6w2BYFq6AorZSo9nQG5AQCayVuUimThq2pMxbUafrvvUn46",
  "key26": "21uwSiDrdTavDjpJMqcYbiyTPxNU7Y24xDm9qfvGq66otquNmZQgPDXB7aGTKprP8QqN7P89FvmJrHfEpxjAruDT",
  "key27": "4tB8M9faJqnmNDXkcGy48yWMUig84Rr6d1hZGTX3Hc4Pta9fnHXVRAQxwzn14nLJYi2uS4ogrwKiCBFpVFKo3q2E",
  "key28": "43kSGnEgQ8J5k5U12bZncXevNUz7uoitHHziQzhQSLRooTsk2fowVSKjcZKYbDo93T3dtd48gEZJA892dRmR9Wzf",
  "key29": "4zxE3SD7X9YgU6kRtdydHpbfzNobXoMKKGWaSyqw1HMbcQ9r7XujrKbjMKfkW3qqrxApVPMzVYXaiAeEMHvDF4dU",
  "key30": "58Ue69Mwo8RDndzuas16euh7rWaEUKNZUtMJfgL9s3jp1XfErcKYnWgR7xRnsqMuwN7bhPwbeVvgZybt8dsLCez3",
  "key31": "5g28Ac7MQ71HXHLGpbU3Hjxj35WHCKWKNPcDYaUgh2xbvtzn1DjMNRYdq7tEyAbTAp7Uv4DfyQAHZjhX1BcYs164",
  "key32": "45KEVi2mrTk4Tcneh8osbkAkzh9ssJBBDHdCW9zzN5xB2RaJ5C5Gsh6moTqW4ffRLJnqzhCKDeWa7KgySj7ztq8A",
  "key33": "5vkTMtED6af4HzYHYSSJjjC5vigAYKwZbHcphjG28yuWuKKh3rRnq1o6bXU2XSdvgwqiiNRtpxmedavVYSE3jzee",
  "key34": "58VeuAohfdfAP3PfLpTFTtWu9LhcZFSRysmMGa3wvkg6Jeqm1Xh7CNJbfVwHmyGBikiav9Y58UfyQAfyXd5jzLox"
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
