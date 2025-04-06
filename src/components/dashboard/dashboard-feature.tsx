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
    "5VEXCGJmBLg8vMcSEqoHb4TVwqCecSYXxrj6e2bRujmVXZNa2ENbaXanonoPyA6bqv8scb4h1Y1QDjrdnVNpLNdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eK1ZjqhKHJhfW1cbvVEuKMga1Rzg96wudyWpGhRXBQnSwb12TS1nohH5zNX6uZxYmieJGDgVHbJWh28UCskyvDc",
  "key1": "4LzgD9KBGpY7jod5kyxHv4Wqak7idmA4evkEZCDjb6WYqJebF9uLCqHsnvL69azCp9dm9VxMVgK7BknLKp2t3WJq",
  "key2": "4k8kRbCUVGb6U8GtbrNdFWWPDsJafNNNab382Qj4KZb7Ws5hREA26iZ8rwUbRyvkT8jrhtHTVzc5zimj6WyyQi64",
  "key3": "2dcTxQx6vgmQ8X8BG1hdxYCUCAwGWnTLwChdcTnDgKrxUAcwpNSawjFr87JuGDpdtNeqvrwzrroBzgf5QCCZKg3E",
  "key4": "4VuNZtDmuz1mcLFh5p61o8zn5sePwUb6uHi5pxQTZPwTs6WQrDtGbugTLopazX4qrpuvzLjEG64tikpASVXsXY4X",
  "key5": "4umofHqPctrqA2tPAEaDod8699Emdviv5eB4GrptpHPdoQH26yJN2wSABKvGRzmuov4aFDhyDqCnynW2U76WgbqG",
  "key6": "5LRynxR64M3vD9ukxcmkdCKzx25P8H7PdCoMSDWVuCDk53wWhHiXozUgGzAYAmwjXv6ZJkrQFCQ3MAiPcXSwyUZy",
  "key7": "euKgekMxMrhZfLHzXBfuAfySX6NwgFEZu5KBTDhoiQcVKek4jo1bdUD3E7TweDbUwaLFbYcVfxYBEtq92U21WzR",
  "key8": "4vjtok9AugQNuXSMMULMx4G1KHtUURcJszMwNLS39qp9NWn8XSALFpsm9ikUN75gpjKPLoTbKK8Y3cB5fqUfZZs4",
  "key9": "628LVN71o7FyymtUeE7pRdLqTi3grwHi2oR7DjtckfNJht2YgoCof7Fv95gA3FN5jbFS9CX8j3ihxKDPbyFPr5f6",
  "key10": "3Afh3KbRsShGBxQ6Z99oXJGU2diTMzYoYKqUbTrFJUYXgLRCMeqwwiEPbQrFXgm2PakwimiTSxHJ8bFCrCT68yxU",
  "key11": "NjFqgTYZJmJofn6NAcENatpt5Cb4BywGqrA9cWuo7Qni7F6AyceMrcpvNWuvAUcjHyDHvcHvyn6zHSFEKEiwHN7",
  "key12": "45aNgxqRvcevKxzeZpFiqxvBpkNJvdQ53JszQ4HBNTXBbG3JsGsj34ZSNAAag5zzFEwyNx9pMWNnLyaJDXcLg79d",
  "key13": "4Q9rR9aNtYvFkC5fDkS7PzojsnYnDFEzcx6ag71W96fyi6xPSzdUxGFtFwNo45baDkh4jQmpxyK7FjbmRb2qBLNH",
  "key14": "2cGyzATXSVuTv6sHLQsKvLEZVNeQSRK4nw9t8TE2EeaoBdPCF7feEcYu6Ghe2SzDZqQdEGZ3mn2CyESPLtTq6v2g",
  "key15": "q6SoFcxFmtqUAcuUMuP4kBam4qKHv2MJoEC7htYdMvwQyeSpSYSaZSoHz5uSugzBHSaVPXnMxtkaQERgwvxaGtj",
  "key16": "5xswXcjWRS6RT3AXephMrH13X1XjDPTEYyhVd1S2cJcP4j4fXpz3nGTNYSQsfqYm8EzpgtubGApyzmEDLzH7QCLK",
  "key17": "SYNyfQsTEgWL9YykCL884EiTsF2yPYchMaVvPKzrfqmi9aLcb1kHL4apQUsEcgySRTBtbUfs3K82jML3F52Qj9K",
  "key18": "Ezjavcy3spBLFNLfYkbur47KaUhQ2gwXY4oosBJGMcb3GK3CkBHwKAdCuhH3iydWg7dHTfdjRU9xE4mGhbRtxr7",
  "key19": "3QVeg3oG1RHTj9tnMiQJa1xdfHZxST674DvoG4KSPPyirMicK8iYNhEXaVxgkmsvdUJKJSutLG6akQJjXa8TGJ8n",
  "key20": "3mbynXz2MKFGh5K4qWbiSdM1exzD85XirmzBgMxX61nzQF6bt6kD2okghLQowRSVhvi4MdkhEtKpXn9gAMuEeHeJ",
  "key21": "3NCDLtotAaDAPw3eqXTBYfcaP3oWmvgUJWPfiSuZpHMBoxXipdHEv9mvGrVu7muiMyj2wNXyKWPFu37ctKQUHjhf",
  "key22": "4KFmRZqMySF9k6Yep8wteqct64ZmYC7u9K1ss5KVtRc19xJojS2zeopEG6Ru2mVVfM5DuxNqMCBfeL6L13v21NNb",
  "key23": "2sRGdyFW13PVRx79erfiR3rokUHqJydsiU7AuBh1xQzpqMB7YLJPRZf24quoy2zV31DyAPYe8Y8QCPsfvqAGQAgN",
  "key24": "3iXP6oK2NtG3pmwZgVwJqqQHzw5gArNfrhYPaakiVFAs8t2HLmTFWt21FiAKDfWEDbm7afGB2ye9h7PGqN4JH582",
  "key25": "4thcqJurKMHXYHp9TtsaEfoAYBQTyEP4yVzGkC4Z4jn6nto1SnXUqXXpGibmgPeih8u3jocWPcBEnSCUtaKsG3M7",
  "key26": "3rjP3x6VEdE3uxHNAoMP4WCvYpmJwtyi7PmSjon3TU9mwayiqVvsyneZTuqUNDjSvvShSCCg7aqShCb4TVyDDFnn",
  "key27": "eMCC8mCWbdrcj5epu9MExvDXi6BhD6iqByHoWeVyUSeWvQtUo6ExEWSUG88BnsvsBm7zSDGkVsPp3h1LDJUCV2J",
  "key28": "6qQECjh5MRjuwLzECxMqcSKTvU6XMSKBFQ8knq9Luimz3SssLVsEUjWUP4bLeuqaTs5nVQyCvZpj4XG6DGdxpeo",
  "key29": "2BkjNb5TRLX5tL6wP73orpxSFemCgHSHQYeHWLyq7Jnt5GPL5kUQCg5CmcqwVZdkwaDjKd5w9bGXhoH3c9EKawkH",
  "key30": "2sqXLHARKTLB4pZMnNnzaDYpKYKnWN1SCZid8VSP9ed36kFsU2b3EEYcwWzkJeUEtcVj39xtAkkze8PeEX7LbwcD",
  "key31": "5kw6bcG6mVaQCNzE4bSk5kSvozTLyz26Nd3mQpqwFJgjubm2WDxYG2Y8oQJSW6M4WcxB4qSqBzdzni5FuD9zEVbz",
  "key32": "66ficF51RrH2bLwJLwgoKSiixhQKtX7VzmC2tRcn6TnoeG117H2JPfbo8jCGjHnReSHGQoWNETK7pbguCDf5rH6d",
  "key33": "61ZFy9GVsL8cQthCCre2Bptnd2CGfmn4CrQxHFwRiJtnpsznaN24QoPKp3HkDXf1qetbzs85RACm6tG5hd6xiMdR",
  "key34": "4HT4HUUoydo6xiSfauSzDE5NFwhjGjwWQV1Vw4p1cs5A3X2CJ827BBNmpGGaBNFDq3uqBTz8ycYkuMhN3vn2aaXq",
  "key35": "5AchLQcJKFWsFmy5L2KSPiTut43x2TmCBYii4FQsaQLDNra5Me3qZ6DW68eEc3vTAPziX4sJry23EgDBbD1AEFNb",
  "key36": "3LQEijFUaBWfwAPAuBkPuTRqYX47qZm7pvq41sDEMuxL9RbXNPF9r6JeJLo9pujbEsykqQeUjH3d9dzFbAqWGZQN",
  "key37": "bkLTREhYQtskEbsRUacHjASVa1SnbovcB4FEv7e1t7Fk3mMBgTQRZx5hqnt6VAQwS8mXeUZWVogxhozji4QZfBb",
  "key38": "42Y4G6Z5Qp9McuuBRDPsEc23MnJDxnWDo8QWNz9m8niD4VBRu4W2FXCfbxXGUDH4bh7nuqp8WNeYuppG1B2pCiy",
  "key39": "2C2hNp2hbqFNungcBzVqE8x2UdxaVpqRHdyqzUemihFBUMwq9gk4yaPdx1ksUMewyxT9yw4kcxSjLrLoJqoaiqNC",
  "key40": "3mGiVoDbY1Cogescq2CjA8DnLK2QPCvh2jtHRKgmZNmaLubPL3y3yujReEngTzZzBiEobizzTVVUXmzJGMMgez84"
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
