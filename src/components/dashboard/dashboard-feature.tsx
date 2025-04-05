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
    "3MLBux6LtGrqGLuRr1HieVC5DjX26PEXRU6eAKe2qdCiBxDDj3wuSb9Gjtx6fw6kUR9r6S9NfS3tmggBHJ7uhxJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MNsonUVbDe3rmucyL6jZk6s1V3SUKsjNNQcanrh2LU7g5E5DAQ4ks15oE7EwnnT5SW4SFpKLuyfnq2ScKGe77NF",
  "key1": "3byS9JKMb8JU7Uk9AVoGDDCRzZPwwd8PPY4C3uTxn3ipudBjqwmt19becM9QW9cQU65f7dc9mexsizaMvDSXA22c",
  "key2": "4RQo4WNXYAptUQLapY9CZkqQearU4jsDcAWYRhfAJMJogRdNdv882cFDe2BPZNM6eNimgEGNBEnSVdNNDAxNJ3PR",
  "key3": "5XBYcSmGQDWmD1bG2XSi6cSEftovmQJ8GMbbYtPM2AUE46ESxwvTusnsjzRdu2AXAPwyosfBnTfX3G81NXzRnJrt",
  "key4": "4JQy35KWegW4NAdQkKjwGZQqNhVkr7RDSeRjG2Qx6duQVgT296YVZuZWBFNScBgMYRw3rXaGFabRnhrYEtqpd6Wt",
  "key5": "2t6DtqSvmAFfbHUBCihDxZcvN8uC48tZmy5JLkF3juW2c3rcMwB9nbJVGD1RCZQpxfiYq3xMUbJcCsZDCvrKaSpe",
  "key6": "541aH1zifnGKCtZKojdpftjUSB6nFLkYFwfT47tM3mKMPbYhk1L2d53BbwTZW4tZV9BqFPmtCLoZPPxL7FhU2y8Q",
  "key7": "2ZZPezqjHCpWX5Lc2UvM2d8oQg7EsFyeR6ji6Ri9VdF7gnvaQkERvHS17ACxeu7fBjoaxpV7LBMhEoCWH8ubVEmK",
  "key8": "4JWCyRPv5bJTMqH5SkjrXjTanVhV1zkvAGpozGkk8nGdgZQgZ7kVsrWQ8zbhwDtTu1i62NjBtrgfPvatiCDqAXD2",
  "key9": "2qq9Ba6aajfhYQ2hxtW5VsFVEgqghB2JNbexjKhYzW7RJ9zYnxDyqzB7GwL47X2C9jVafsKJxVFtDATXnxkDqnLn",
  "key10": "25zuQDFDeR3ADuhrEtoYT31Qt3GtQnHgBy8QChXVxEcr6TTB6ZCyH9SVzsGPn2WwVJaoruNjEPZpbvreLfenV4nB",
  "key11": "5egf6hFK1o3Ru7qVsJaLqh4Wr4U6Hc9rcPsWaBWSqydCz6hZFLKYzgG2orwdk4xvKTT5okrWt9wtS4PHq9dNCni9",
  "key12": "3NMp6cQXdJLAsc8Wv4qz98qDEC9J3f9d5wW1ncvUr39pEPUeHPt28PaVNX1nrfNv1vQG55TMHxxGLEQYExX2FZq6",
  "key13": "RFPstMGRQKW9BfaEe6Pq8ADGauEC64B4sDT3XgpBZUh5SpsifCp4GY49D2rbsVtjd2VfKiL1WXfoPjdS8wQDjiX",
  "key14": "G27x9K23VzXk1YuGQAQ8mtRfxxTHE4ACq9mXvrgTK5nc1N3C6XGJ5RwJ1XdUE6nTtsTfkQCeD7JMRFkPokSq3jv",
  "key15": "L6jCTMnWr1YPxwmwd9hwUBjFhjTsz2mTXrrtUuZo5QB1xpd5bxvAVb66JB9zwdZM6DRE2nfoahzBjVh6yrrRmNH",
  "key16": "4XRedNyCxxZRDjT1fC5gtm1RisymdYU9JDx5zRURnWGhwh1dhGVEY1db9jvzahgQxv1QbW6cLDbikaUoW9jSf5f7",
  "key17": "2LwJ5YUPjfiYZKdMHftTRqmCdMjZ7xnGVpYMw7RamPE3DzMhh9KnLVPM9bPxdaQHMQLKUnFWingFBtZYLNRhanWL",
  "key18": "3M8eW9bZBcCYxzgW7yfRFvD5d3dA4PPEKVKJn8jCquThTtANvJBM7NeRXPF7RM6RfVdPrtqtrMn3LWo153pJCKRZ",
  "key19": "5KGF6DNcHh5mRS12ysEqMmvjkmRtn2CVddKRq3Rsk4c6So8KzAYxgBiRrDGmoXkw6xSxd6RoUFavvV1qXfAJHCQi",
  "key20": "DDWUzh6rE3zeyji2sa5mxv4Uo7bYMoLT1dPTGEYCirtcoj9gry2VJE7qzerHgXewVbB4KsKzZQRjbF1XoPECdis",
  "key21": "4NeBUDsVH8djvxcbACaGKpkv5UomdNhkpzipyUaajZTuXKEq7qVcYVa8hynPZF5DXb4NneKxs34VJ25ugFZAGhB5",
  "key22": "2fMmg8ykrjwAELXxpRjKiHdfZmYWpfRox25zgEkfY7HfikZf2sJBn6HxVKEfCPu5Tka37CWrgD5rKXMbvBuEjqBg",
  "key23": "64dRC3AFZfyKwZaNDNHTwdqsn7C2kB8mN9LWAGL8FKK6Zn8GFxYcGC4Mb74TY59B6ts5TVhQKCEX8sqVsRDUfSuP",
  "key24": "66BRtTdYQVATSyNtAw79Vi9ivAszeDErBwzpTZkmAEooAZeVj7hApXNK9j2pAtbzkUJ9LNieC6xhjk4hxs4etqKq",
  "key25": "4AogSZPsDHzkqku323GaF2vwtrD2365w1avVMkf7CMMYtmcaWXn65pMsNUivSAP5KZ1hvWhWcR8NY146AagDp7GW",
  "key26": "5FBF85dC78ybSs8hK8YVEwbb4cFjQh91gEW9sunwrCn78Y4qwZx32RofSFEkKZoiNmbEvh2dcWioBtCQHibM7HS8",
  "key27": "T3X9vwjgk7o2WDZnWMo6mu3QKqB5YMrqTVijtxGmcuYKikRhtG4hsKxvPpb3mVYNWa7iZ6PbxHidrwqE91fdjZt",
  "key28": "3GMuv78D3e1eJDuUZjBZv6qNwXTZwPdEmao23yS5ptWvqYJDsqJYdjMxFqArriATMNwCibzXaURm3RjJ6TzmyeXj",
  "key29": "f9GK1FXwpVMbBF8yGdBn9LqqxV35q3e8UuNH8yH12WuNgsedemCt48nTZpX75Q4ZDACiEcP1DaVRYWAS3uwaiJV",
  "key30": "eTfKG1pkeseL6is5CKcSA1yRhqgcmLMiSrMotFk9AcJu1CAHAjNvZ2MMsCuStY62CXwcf4eKHmLVfgcoUcQfqgk",
  "key31": "3RJr9Yx8zukoaCPHEopfMcSKt8XC4djbMYnwjYpCHiYyaEWpzJvfT39SBzncwQkvp5QLQ3JkJgcaYzrLv3JLanWG",
  "key32": "5FmSEEJjHh9YbQPcsbKeCD838KG5amNkev5oBJCAgC6GhDvPTxGjeThV9ysApXr9JrnNbrYGDqE9z4y91ZGXEWJy",
  "key33": "2xUbww6aRXV5HdDzdZC6yyTiqeubiqGKry6vqbejjsQqLWTq5yT8ZjL9FeNc1gRrEGbsH2gf6SQ66aZLhvE48i7h",
  "key34": "3DQjj77fLQ2NynUWZQHwYYS7wB2WWUTpm4cH1zsQVyqxZGtGzwvoeLBASi6654MjreTRHLpYA5eE4LXxTSGAiUoz",
  "key35": "5CHYC2K13Jqno6LCNp6SK3XRCVMBdFH6VNA6HPahMgGJfvrGs4Tbp54rdmWVz72nxQ7eCdMjsj19UBb5V2mv3wpS",
  "key36": "5vPZkiaWRhhjwSUvCpdC76tcn876mx6pKNaeEuzHwEDK4WmPfujvNYuRnRikEH9z3LHbozkjrfzM1131UDEnZoDQ",
  "key37": "3TiQ956NncvC4uuyuMfLy1GfioXGd7n6DBqkUsJ3irUdCSVGbpFu7N5F3MED9FNo1DWT8wC2JrBD6JjqU8yBYKKf",
  "key38": "3RrzqUY4HdPmPvSm9mUvafywAzVpKoduwFAqeH7tPAbcuMKxTXTeeLrBvXm698vhX8dFF9G2FWaWGfqXeeVjnnSG",
  "key39": "4uQpzjitkHEkiigYN7sC7ErVnag69xN7q9vpjzhw2vdeYB78q4uX84haLPXsk5VbykYoXdprmCTywpmj1vXiqWZE",
  "key40": "2dhHqbRmdSQUT5iMhnq3KSN2M52aPU8VKandfY2B6taaKCHTUsB58CtuMpqpe6pJS1cXnrAdQZPSBpp3soW5TF9e",
  "key41": "2g7n8HA1riheW2wCRrn2FazVL7j24p3qyC9dd466VjFBAZdJrJjpULB9xDecAgUPTSxifgW82sGuFkNydfpMga9V",
  "key42": "jyd5baD4g6WYWmu43kgREjoA7apja9PWZzkteGo3uZVDJsqPhKbN7qK6F2mSWBoyiSA9mSLnbVwNpd9wYAeVK9q",
  "key43": "3WgxRbZnVj1vK7GJMa3X6Lgx6oXjrppXPrB9XowwfbqHwJCREmpc4xyGsKj8r7gipSXFYHDcCZTt6oe9FVvGhhHw",
  "key44": "79255wF1SvwavgH7R9pTQD1J2aSRWc8EHw2JsrTRgUya7HNPcuVVzQXa4vWXQ6yFk9qctJsLrW5zx8Y43XvBr1Z"
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
