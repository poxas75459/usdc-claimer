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
    "2Z98K9caUVx2GRsPJcsEFkUYQPfKfXD4trKdAND9waS2LsTaN1koeeCna1C9cG6saEQQYfuHRs57j136UECzJKmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ht3goTmft434sZ4fmi6gDcGj8cn5m5dGmF8KNshnzmpNqeM5iFtmL737RJdhDjSWGLJGhFrLhethQxsnZ4jq5z8",
  "key1": "4iusuPBE5GG3u4uL5Cb8MejNYoqKwkHwxnZp16LmtT39AAyRE4eJkRfngrWvtY7DbZ7HNedcPjSnMg7Nyf8br99R",
  "key2": "2eA1JBHWkJk7f8CCKxp13SdBm6kPF6NYjJ8cSzJwySfLxAWzDeyYX4c8zYn2tBQhbLbUY4jhrfvPDzH9Kkenx7xU",
  "key3": "QCF4ooKaVy2i6fCDgBn5YUHycWrimuFU5m6FnLxer9Hz9JeMNzQunF7oU3biC5WBQAwpjaTdLWAeJJg3wcqXP7C",
  "key4": "4G3xJLqXW8TrwJPiGj2N1r43oPuMgJ3LMA1EgggTHk9UKBxcWeT4JvfiMK2xqCYUCQYAWCPxutNg2X9HrJygtKYh",
  "key5": "4gtJhLKQPn5b35sdrrYj9B39EEuSxxRbrc1yYyiQTEWq2bcf2heXsakCtqRsQ8Guyq5sWGt5tsDwMQBJnqrBB23J",
  "key6": "58EvPDedAUWfwZniD4CoLPuK8j2LJFZ1jJwUUTJoCzRsVkboC2fJKbJvRQ2ZxtrsxK9fEizkkHj3qZ8ghJWyy6La",
  "key7": "3xADu9B7n6oT4dmjsV63iRcpyTeHVBGUdZ5KZALw4ctkFNSNpbk31EqjNC8tVFpjkkpUD6HEzq5Nnen5u7egPur",
  "key8": "4amkkX5edzoJibggb1yWwB6shydRE3NNeHMx4Fuk6m7vhuoBTHLUEp1bj7j4xAZ6WxWMLJ9hqByTLj6XVYg2KzS",
  "key9": "2PpfTMtAnbHGiwps2XDJd5BXAywtnxjVpCYHYgDo9rTiSz9k9boHeaq1ZP4pCEjNkuP6WbfR5s8hZB3GagamkCPc",
  "key10": "3cVQ61CfW88zzbCj3jwCLpRDW1wSzNY68rtEfztQVchx3oymsHCUASQemHykFGYCqGoZjem2LqqZ1XSfXuZRJWWa",
  "key11": "4qTHWdpkpUboguTpHmRsKDkT81LWPYiuoCFVQHtzJA2rwh17RESEdGPjWf9MmctFYC12KPCEhbNwoNs14bLZDFED",
  "key12": "3vCDiqFUmdzMP7SKJ8chZWimzD4zMyoABaibYAT5PNmZuJy2445un7Ldjtjewjyc1DqbvZ9SWKBkmZKSfur2rA3k",
  "key13": "2TvnT8q5J2YyazDeAWR4MATKv2FXw81XAQqsevaTuXeMFaaSB114GS7bvKwqdpzKxyzXiXSr3cgV2SNuv61RFP9W",
  "key14": "4fHgoiCXj6PLAvmPvvo4JN5TkgKiotV4ND6MTSEwXpjqVUMjHGw9oogtT95Z92NzKp7JNnbZxVpF3RPSvogsKSyc",
  "key15": "3Y7XEq5m8wFhDTFyXftiaDoWyWJb4b3PKYHUF6tki5qAhRDXMmpn9AtcEKrdgDcVvB39noasRMxniCXFkTkUWMrJ",
  "key16": "5Ycc66nG1zePNUVKpKtGnvBwoG82dQiTyRoDXaa7bwyf9mDvWZ91bsYtMhdupSmMzHTpxBKYRgjgpnsDxupS3t6g",
  "key17": "iaCgG6EowNxLyy3HDMA6ua6gzEUerCt59kvpafjw8og7gGuNhTsVxaPNXwo2u9283ReCa9vGN9iGFrqR1gJwLsH",
  "key18": "3hEZV4yMiFzcRxPW9NQLEEQFX1Gj5Q9o1dNa8NnGMHp1aTRStkvkRvnroeWPvb4iNEMzvvh6CniwJqj9Lvz71dqz",
  "key19": "2GFqQJW91KqT6K3RWer5frz2pJj2hhhFzW29wrzBfu3BTWQU4SLSW6ghwm2TGMgDP7H6qeCs9YwnvVfyF1Zjyjuo",
  "key20": "3Y2s6S8tVU22a1mDKaztm8paXQ3Qi81BA96hqAdogYyUQfNCux7VQ11GHRGHKUZPRGURtAr4tp1f59kGyyq8qUqc",
  "key21": "2xy2mhLUHbbyqFfqNEGALe1quZtjUrdz9ABkxS7131rE8etHyzyo55mP6rwbNdCnz6Xpckymt6SwtnRwxG1v19wG",
  "key22": "63SeALAgW2kAv676GzbxhTNQWNVeEnQdxL5KDPPa7ARampVaKea7fyZRLH7rvrMot2MbXZwoLRAAd2KPmqM3dnzj",
  "key23": "5g4EpywUk3JSemjzXXRcXgUxPhVx8jcWsy4Z7VofMwcaUvsMwAWNFVeZrEAnVuVr9Mw1VVR6udPQuW5jdDsb2FFU",
  "key24": "28jpFz2qzwUNXE5v8iQ2DVLosT6m7M8SoEE22nB1MkaS2jSFbUxjQ1RTeTvqGhH8wfvX5pQxg4HbXfub1yWym1RS",
  "key25": "4zJAUnnp24uGHTzTo46skHAMLXfqc9mi5nBnSyPRzNjaLdrZ9hoxRUdt3QufrdU5WV7YNvvvnKjPfgx2n2HYtDKR",
  "key26": "5cDYxXFAYujtTcGv8ebABr7sFrodkcEKyVdiHPtGMfTrAQhmhC2rv2CsryuzpC3avV2MxX7ofFwzBQv4tzr516QB",
  "key27": "2hrzQQj5bonvJ384Vi3ZkYuqJqTyDGpEHYZZ2dq1j4GF2woYfWqxJwDE2QZCNjohRxD8BqmR7b8VFXQqLd92jZUj",
  "key28": "5CyG4vBn99aVBAsLsvepfG2SwkMwaEq76pGqsNNkWVyVKuGPafwMnZFXqCYRGGqKzxHJYGg6vxEVuyVgsWBqjb84",
  "key29": "22jm5hB8hziWQxL7Zv3Ugay8a955tzrm2tYZsWvN5HyLwepwEbS697VGq7Q842Dk1gmBaFrERUjXz9xwUJMSQomr",
  "key30": "3nZZaDdZcRzhAynpYE4VPckfpzTh5zZZzGbvu4oxAH1nXRRsmVJK5UuhxL61DNqqNRboQ7RpWpcydEDiKdoVon5d",
  "key31": "eWC4G38eJfDgL5DxDKgefcm7LBmSD93MPz7p6uKkvt65AxwCYMfLcyctpPA5gnn3mJPkWx8a4DRekFZPt8cZ4pU",
  "key32": "ypjUEBJQaNoFMm1pgQVHdHZE7m4h4EBnP6ismCdWK969RyjxZe9mRVsvSpRJ8ZL7cTf1qjJhpzPjKkEmXdLe8dt"
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
