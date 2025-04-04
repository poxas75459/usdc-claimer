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
    "9Mv4gjWsyCScL5P8sfx1xQr1EW4Mrb8wqQbeRahRhji2Gcqu7589AVssT4Pfbn7C9jzq9oGgQjiP1seGRBbuxA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdxY6bLvvRR8yVLhx8XwiNVjLrK9YeXeQWqrVVfQPoXzByPKXxcKtQagUTyybF8cBYvknNzYorjcr6vrrycz8HX",
  "key1": "vrYD9MRARxQ6j24WT9JG1y2dT8YLzCc5WH7j5NCw5FMEyCGyPETReJcKNncWbNU5JAgxkNQrKpvGmnf3wK5mNrj",
  "key2": "3zqhKd3TNt5hGMTV8kZT44yd2cvkSSVv4WTD1MrNoJTMZCUFnHpGDGnhTBSHxaPyhNM2T1h5EyiB32L4qyeUq2ZQ",
  "key3": "66tLkvjvsfELKYQnLAT7GnWADgGTwGtimTMHXKfKY4VRHDE7Q4pru4WvULAd37AAVDffh9CMMiF836JmW7bSzM4G",
  "key4": "w2RmQHi2jETG6S2qJtdUt2SLgKBsiH4UPeRZrAU4bVXi4MEbhxxXYjZwwYiSgKGsDHmLE1ujcgvEnMubiCP8Ww3",
  "key5": "5co6wto2DgAAdjhH81tQwfVqZbtwrggn2FPkkBJ78vyMhdgsca7EmJyEYkhHCaYoLmJtroAyEfJRPYMRyq6KAn4F",
  "key6": "2THfCciyUPAnfy8RwmKHjwuumtmEZjTH8Eo2peWo22Qt1K1wkmmHymfYVsrzZXZaq9q5HMnDT4Gpizp9wu3FMU6C",
  "key7": "65yfeLigufRdg4c6GDa7EGMeXrqU2XZZrNM5cMPvdcWzEhT8KbbSSRWVuY5cAdwVyHC4YxshkJ3hiNfDuFVXu5gq",
  "key8": "33aBS8aMdEqsT8UU4vzZ9engpUvWTr52Jf7rWeq4PKVcarcPJPS8E3sx5C4f1dATRG5zE8DFu749G1rkH5o2MDDb",
  "key9": "4Qb6GLfXw8pQxZeKMM63k8wEzPcip33SXWDbNQNPecc9hJKoVpKXwTXmnM9yQs2tekGrZP9PbyxStQZzzxcNNMEj",
  "key10": "2CxFZRT2iAfvwi9ArAgsi9DgjxCMztgFiXiAB2nDXcLfVw8n3H5e65rCmJkiEqoxuMVAL1PNYbW5d21SJYyqeeqx",
  "key11": "3kHDkmjt8tuajAxWP2Rc1A7tatXaMJPQxxHSdpbq4rkicCLUdnSLo3rvEjhsQoVExX5gCPev3dYVihWbDXhnjz46",
  "key12": "62NkzkpoPzokyyuNCenSVQSxgb247XF1TtM1BYRRpU8qiXzbibTSKdDXCGhkw61uUrYp5yTeFJo5GeL1SMzLrM81",
  "key13": "4yJPZReM16gAJR62DKMWJ8VJDLGujxb4jcJwC9gnXADY5zjuQ5aGydstbYpB1F2mGZWoAAatKjoWsfHKHSknqS9t",
  "key14": "3fY6BKNoLXrshUVArupJtauwwrJNarjiLcBRB7tfNULJ1mCmkqfNBKSbryWLHLJDqyrBT7snDpobdc4J4ov9uhTj",
  "key15": "5Kcz1DEa6NCxEq62DkVVDrpgsNjfgD88ndDD44rmWL3gmcHvVzADWusuyUDy4hYz6F585ASzAFZX37tHQZeJiJhX",
  "key16": "3fP8bdadWhLF3Tgjuv6p53CPNFwq4Kmz68eMW5roQWrWVLBRGGGKWzV3DAaVF87S2VYV1nvWvTfZNJQd7zWUVNHw",
  "key17": "QiLbUW37FyzjD8sqQDT3b3uAzWpPgyi5xHZkmr4jXjQa6cTLSPSZBoFK44iBKWfyGpyG78Qixq2XN2E9U6onpAy",
  "key18": "2zjwyiRNoMdpxekJSX39kxS1wmnr5kuhP81n9m1JrinqS1oksaEbi3c9NharmsCuKG7wW8pp8t72Y5MXmkygruWP",
  "key19": "cC5espEk3D7dMFtjcXVwc39vi83GEjijDgP4NaUnzpga1qb4pdSDogLfBSJojov5L8bubE8PrwSzzSGgPGy8pQ2",
  "key20": "BFQmrZAQEqZdbn5kumyLLy9yyuZcWENMUmdJn2hvN74y3Teyg8gT8zffMPNH3rbgDxDdAHGz5L8nxhxpDp2SQ5E",
  "key21": "65AMsLchHPLTFV3dj3EtcJjt8LWU55sdKmBjvifhCApaXNz621zisTxcpHfA1APs6e9Lb667UYPEED3bAEWBQo5T",
  "key22": "8SDovoAMeHy5k2G7YpYNCPYwHby5Qeb9heHwUd2XFewR5Ywk7EUSAaJieTimaGuVZonm138Te38Db3t2h3cTrCK",
  "key23": "5HwS1nu8fpyV4MfrMUnU1Uad9ZRAz624bPUKumJPLewwDggFKLvDkPBS3aGgobDVTijiu1nKG65SCer5KMaXdWkT",
  "key24": "5uAym9Xu3RsQjnzxgN41RC86aMCfUp7hmpb2TEbHMVz9VyRf9Cj2G92ByYUXCq7jzfyRNAWFhCHYwJZ5fLc3esdG",
  "key25": "2uBRzczRj8o4XHYi1bWNnQhUqXtGGaQC5ZGMz1Gsgr7xqwrrkM3i4v3aS3RRShDzUvQ4Dc64WZzu924dM2inBGB6",
  "key26": "3TzcmP1FkMsf4pbjiZjwZKdZxWSXx8BE8wYYKSFHVDUn8iNvoFxkk15K82Jh7EtEg7But91Naswj85aaTKxBfRBZ",
  "key27": "619JR5UUyKygA3Bb7QA1jJ5j9scTPcEh6uZESEy5SCpZqzNkTF1tJRVh7xpjW6zkdJfS4FBhXaMCyhCTnQZrwG8b",
  "key28": "295BKyzFprPgtw9C583rawVsUuu1Fa2dFo6ixcNAbusG3ujAe8mR5buo517k8ag9GBodaXWdeWKGNBKYxjL7RkSj",
  "key29": "63Gaeu86xYs5LbDVhHYRyXz5pZVhfqkaAy7o9wvjbzBc8ttEPygTEaTPj7nswE1fTpALHvpSDrvh5rs4WfuZyCZD",
  "key30": "eEzC2kfcPnoKREAjHZN5akvLhGnoBeYEVrgpqcZkZ3oRbpERV6zUT5TWj8srT2uvVpkjdnJNJFGx4jd5VLAvHAG"
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
