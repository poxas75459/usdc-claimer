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
    "2Z9P97WSS8oBqdPcWsuHFEYub9SFtBvkisKvAerGD8pFn1xCBgFmSSVVSJZq5U3ZRm89yzeRo64og8y9Rj6CS312"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1CeEoU1t1KNxg7zmGpkzN8dMnnRdNdMbhVbydFaiU5EDa25q2pKNXmZBSunqH214Z8WvtYQtzNdvS5PRpmRcZJ",
  "key1": "VxkhExnsZ8K4V8h7w4fnnFpjWqDcDho4UgrZ5SgL9LJwYL3u5StFao22w9guCwYLAM66HiUrFBbxkdrJbPuJA4R",
  "key2": "5wwAmXM6STZGTs92EPojYxnm2L7C5tDzNCRJmH9CYA24AyCH6zAVzKYFCnisjpfLxyDUVyLmMu1wYwe82U72jchx",
  "key3": "3BAPxy1bRdm2hQviu1jsiiyp9tyoC6DttQTjuf7FX7S6CxBDCxKd2hVXw6rEUBTefoLeAzeCkhmETSrSGCBEBc36",
  "key4": "m1gZkedDFVjE5S5CwB8PT1RKFqWUCwQSQxzqJgsRTVSnghXSfXAVXRsJySafKUdbEyqQHgZm5kiopAYtGTrtR1r",
  "key5": "3aFpccGrX3F1bAdrHZAW9AEtYrVF5Zwueq5yacfkz1PLUVBRVYyaTMaC9F3mzqzh15TdZQLzYTqR2g9RihrpVzCy",
  "key6": "4yFLWT1p84vJZ8G8d4hwders2s6QLWiu1VuQnzconkUpo6LMmXToXFKZ9CUMu5nQu9MfkxpzNN72epo2VbUd4TRo",
  "key7": "21dnSbV7xco46yXqyqQ8u5K18qfv5TqecSrw1QdNnRDJP4yuUtqfoxjVEAfFTcXBtzJkmHUJVskqx5V4qDNXC5sD",
  "key8": "5YBSgSR52HtMW75m9FCnjZQ2tqZJt2ikxxX6YsLsJUcWQv9i3tTH6BpdRxsh2V9v2s2Jb9madAVauMMj86rQAhxF",
  "key9": "49UuDjyqdR4rzCtP3pUwFTPU85xm4X6JFE4VyFjpmdx8TdGP6FmdqSQp7wxv9x2Mz6HqxLLgbzLMVdSaoiZseuga",
  "key10": "3GfzWh8mAqCMzP6VMXg2iADS1bawYZDE6THgDVV2aZuhHAufjXTo5dhp7n7hAsVv9BcTrCJA8s3SRq1QvEo1MovD",
  "key11": "5CjG3RJjY6UbfgN4PqcjB942gGG4bG1WPutyW9c3YUTKEKubZqPhYSQKL6fd5KebxrTHyoVH9PgA8Zm4vvtVTXMz",
  "key12": "DjgHZh1VbRc8y8Z7NF4mMU3BnhgCDwrMgJegfptdTzF58EP5djxLUXeRj6s3MKogNVp4vpbQamthDP3ggjZaJ1W",
  "key13": "FTBKeEiKLfEJaozXxJCW8opR669SqvFgsLtCJSzYyyeUts3GLHEVZU1LD3a56wCH1KmGRHZdweLvR6emezJnVup",
  "key14": "22PQEaKAgmhdw3w5JuzHVK3eKELPory4KQLAzBFEg9w5C5r9tphRDE8RBke7q9fHbxVQuzn4WX8VyZu45bMnGBwR",
  "key15": "5ViX3zhRKcdqrxLoci8wWPk2rzgUuziUKjxBt8AVc9zZqtADqmFo2TbMPKUtztsKKFgqyRMNWc94ptpeYAX5aRq8",
  "key16": "3jC7LR9F8tgqZCREqZ7gxnQ9o3TH6vuTEz6Xx94tZSZD8Stdh4vbmurAZuc2oAUaZyx3zRXC1nud9PSjGqW5gZ3G",
  "key17": "2n6FALwYAm1AQdepyurEEocmwuabyaUrJ3GRF6XoVRLsNJrabRUjiBnNCRv6CFGLc35zY7psbVrHPABmCM6z6Hrr",
  "key18": "6fyepVokgL91px56vuEsDQZ5TfrXL1NuEvtnpztKM82FDz5GBjRFCyyUvPWNDzpZGRRmywF4ncn9qWxv16pmA65",
  "key19": "4BXcWzYag38kYtTtudzaT4pk3fHqiTMvycDP5Y3DBWZpC376wtBCerGjfANMfkiiBn8FhRPGDX2Co8ehVrGpHvvR",
  "key20": "5H88M7hJDrp171udmSSkHGwkVCvGYYtDQzFDa374j3Lye1c25mrEKuJ8YLm6GPyPBh7izdTprwvePzDNSrGoTJWM",
  "key21": "3FWJY69EeN3Tqb3fhKK9YJjPLKkECLjJVF14zqmEjgVhDmUoY5E1f4jrroNHsiVL7SxD9YQRPPz5geH9mhWyWahY",
  "key22": "47Efmsw4G8faC7AAMLR7mtHKPL52CMbm9a7ov6ghncEaAUbh6YpkrGoecFbuqjYAo1kvtt8qdJ5RdqBSnfRHtUiw",
  "key23": "2zWs9m99MZm3qcD8Ep83Er7CoW6Y4FeWH4v1Ekz5TYxSXYBL3TssbQiHRw1snhaxPio79MFWDBdpCQry992fMi6R",
  "key24": "2BAATQBgKumZHjEs84ooHxVQ9VyCNYSet4z6wANV6Q5vc1gzJ7PF4VvtfGGPHUiz1BQb3C7qDUiwLxQ1SpHgJ1mP",
  "key25": "3521qWRKcMFodhLTmvTredgJhUpu3TtNebHvxr6xR7RA2ZUsUW11RfwfJvRrLLovVwESe9makB7DtLFywg4Zgers",
  "key26": "4Pk1a1icSyYS5UbKBon641F4tYXgNroCjj8yhemT4ShBYkP6xR4dqagXLzbyTabaJELCoZFMHyPT2YW4dzBHaPPX",
  "key27": "2ZjCZB4B2MdRe8vZPoDSUYczSzVZu1LvjVyxsW2HZSLUFXFZdHv8Vr97WV5T33yWLGvVe2pPWm7oEyvYeWfgtLLu",
  "key28": "3YcsMgNw4VZ2mioxR1q76Nr15mJz9Q2fBZ8UeiinYzbFLvCiMc9LMLDguZuK8DLJQiDHgosyZkgb12zajKMBmKiu",
  "key29": "63GHaAao5YoHAC4MS2oFvCa1kabb8g8QovAuftzUk6DsR45iXJU23uepvFmbBisF5bPMBLxjZdnQoRa2yUurnKM8",
  "key30": "H2hZkfkrecZKG2K1Ghatw6gw3fRNmJkmNgugk8Ytr76BxQQHojNF8EKV5h9EiRwX28EgYftUcb6LXgqJrR9jiPc",
  "key31": "43fpjqUQ5KUSP5dU7h5SVVWw9BFVKr2EZb4kHLfUMsdMtsoeReXkAtafo8iJ5V7SnxZpyWG9tZcZdkUStVedDUya",
  "key32": "61nHYirktdShwVDFmxp6xAD7Bi76p4C8926LL2MUwg7Sji9ehkSMSWqkt87wj3ELZQQhGT4nfqU7BQSV69dsE8ZP",
  "key33": "4oDX4oGkKtCA47Njab2BPgs51uA4WprTzsA4HSc3JKMnAr4imVP33wyMDcKCpPQwPXfVR9p7gfAWEayK8DW1zJdP",
  "key34": "5L66jTK5ZXcMaCcLWmeWRjfa3vNpbmxaT1wL8akn87dL3TB5zopvWgUtAS1AemR9scf4guUPZ7gphPYHqB8epo8X",
  "key35": "5mjZLLDpS9ZHcVFcoYHi9MPz6XRGMXdRFk1xBF1hu8UFjk49S2TkHcrX9xyx1s8UkbWMrJ6gwvfALDuczNq4gx1N",
  "key36": "22aXUpCHQaAhfFvUK2Pzn8P1HSnpN5c76nRRKaWnBLwBHkyKSxCdHxdKTGjQFbJQTRBbKPNYBruCQuxGkzHrW46V",
  "key37": "48AHDpFrw6YVRBs5Lt71wo1Nn1C298KZSd2zU8vq7u74D7k7UaN7awi6Po1BJxjiAZa8kX4qF3qxRbceoECvuUoK"
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
