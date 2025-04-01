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
    "5tsiyqtecWff4ntnCt463LuDhgZaszZWjJfGLpN7C2pktfqWdwDfq4f6qzWXdepR9mS1mrb59S4mXP4SAEPnem2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJJc4ju7GvKySXp27mfeXkvQsoW8SBTThGTjAtG31fg8sryR3Loo9zJ1akcsrztzsKsfyUL97ot1eu33sHx1EZM",
  "key1": "cuNZrUvL5rkoidjcnQCiw3QXGt1rv9iD1D7xX5wbr5CX5HQHtmxZds9xas8eD4ssW8VrBoQhBzKRBtpjDBtBhUC",
  "key2": "aM3YaiNTLnzxPdTtU18iwKEDoYBtNLCsvBqpeARWjh5FPzX18K7omV1tXSWF9L41WHQDSg8rvwf7Pmkvfk9uoo1",
  "key3": "3WfzAMgJreF7XWKo36msBn2BotnrERdeFTs1erb7BJTKoFyzcTvo74xCySUuLWw71aV12uV5JQAw4T1GSP3dYb4n",
  "key4": "jAUg8bieqSZxukSTapXsngySjAaXDFVWCHXQ1xGnhWLesHh94e6QB4dsLeoDY7hgc3X4mjJPgYypwFvNkxaxZKp",
  "key5": "47wZpgY6LrKvJRvkzBfXAhugbidFdr8qnWEUbGym5eHLMBdNYUGZAmYDfaHNJ4CXFv8zY55P8DiWSWVs4H5ESv6w",
  "key6": "2818ynjqS4cHEJhAhL1EHZNdq6K6ncd8TLEXFf3ajnKwRfcEH3BNwkPno8cV17AEAui2tUiZEoqQQdBj3AULwZCG",
  "key7": "5cjeAzCN6R2s8ZWWrSJjrz3DCCXsEEqemf6YUFwhXURQNMsPnJpRcUJU74WubMUGjqinmeBAfcucmYLCxYbxLffJ",
  "key8": "5o8YoHgEkJbY2mzPeDMZSixZLht2UChzgBSs87djarCbzGUykJKjGmacnh91MfDetCEj14aMTmtDxejJRYpgPRgX",
  "key9": "vKxhH55cbe3ZosYDktnpj3aroTkNrQtfP3iREn29m1YC8fiJo4WMrg1YuzMFzX9vBWZQb3SVhxymTTNpHMd827S",
  "key10": "5UZrheZ88L8EFHdGtvBJherF5rCRpbRLQA5ci4b2SMXfZD9xEC7aVDYxFwFSpCyZTrENj5g1MQ7v6TBuURp8pcjz",
  "key11": "3yQsp3Mng2aqEQ27YU8Rqz44PRKhDNb2qSSKPi4yN4achW6DKqjUvfKnstXuUefkmdNk5Tf3iqnBaZZzCbPVjDKC",
  "key12": "4mtECXLYgGtsk5rAiSBAwU1TWRH7jbBwpiQFNdezBpJypM92brfH6z8RYLgVcn3DHhPjxdnvXRo8sDaeAuHf3V6k",
  "key13": "56YcB1Ds4wsyQUHoFVJFTSkpScjbMT8vcaFvortYd15q6Uc2Q4tjrHdJTqSXKKvGnCJTFNVY7LaXkcA8g4gKu9pi",
  "key14": "ENoW1jjgV2XzXujsTrRNNknA7Qd8Qc5DLdSFTE1KxWNmjWcpq88YCJN1CMfAmrsTpi3V5RuvucRZxAb1aaUFz9n",
  "key15": "63nb7AGty9Wh2V7CkiQ6ZaoxF1RhgvxNnb7YSjs4yjsXMyvpJcaT7KzA1srsVWQZeSuMiS7MPt4sjCBTejPangYD",
  "key16": "3WkBQ8xfZyPqeDXuJyQDr4zJfX5YePo1ET85dcyF5WpbEy6vm1Jrp6nr5nix1GJQVtn47xv6KKL6wxJq6nigKKax",
  "key17": "Wi1FEs5oMDXkNRB5A4U1aWME5Bu7Rw73qj7wDpUXuJMgzL6qfXzT1EESVKMuKDFZy1QgHfJJfPw4Pf7v7xRDL4r",
  "key18": "Z573rcrAiZWMHyDfqGYWG3dwaUqUMTiDHDV1oBUpWBwfrQCtqSKE7RBCzPzBjEcZboiWgC1xF1io9QALG76JNhE",
  "key19": "38WHQj8ZXDk4o7ADVD2ha4QRxaMnKrdU4dwpWmvZDJLkjkJkGLH1fXAXtWVWMBkWFxQbBLWab89zbwmu9cqxoT4A",
  "key20": "3JJNnUGT3f78M5KGqKsB2jathuPquB3XkwMeqjoDmieE7b1wTAd1ZuEBCc31hGbMTWTzJ5s5H2Hc6znF5vzTfoMG",
  "key21": "5JgoshpSJWiBajngecXNqLdrwSb1GH1SBKBdwRoSamKhQgKo5B8KfMN6yQ8gjE1xoQCZMuCbR7NT2fGWqC9j4sbd",
  "key22": "3k2fRhDiqUma1R2LcvYD5EFyUuQ9x2BCXTN5Ak93xf9dBMNFDFB1LPshuEjmjgqaseeHB9CEd325VZZnFkSoZZAV",
  "key23": "UoAE8eYKVAAa1cyFXwBoY9ZZ9RUt794wsTAiLnMCrk6Co6FUghvuNxthoxvEyM88KYkVMSYZ9zKtekXrHCT5YrN",
  "key24": "5SEvRsfje4HGykvEHooqbxSBdgR4mkzXbZdDZrSijzuKN8Ci8pUJEHpN8C5DoCdnHY8Xa1Ktw2snrgGwWMdUgmKV",
  "key25": "2oM9fQrrBe84c5DPR5RL6xxQJETrPpZe8JrtHENgi9p3kW1nQk8TRxGnpn8558NWwdwa3dRGFB5SjQ95K5kscuWE",
  "key26": "4S1uACi22z1eZkLt9H6yKCMWWhzJ1NWRwUY25GsaqBCNYnXih7NS6asypu9Hzd9eCge2xLoJeSmcD4yKaHk8HDdo",
  "key27": "2Z6RUSwd2p4wpu51Ky5Zfjf1SZWzMtwtDHz8gbazag6bXP7yoHv5WCWcZUMRpLvpakR8MP3Vr38des5DwFa8cRBT",
  "key28": "3pa96gLmCVoDus3iwBqeMppXXJ4bca6KpB2DB5MDbBMPsiMwHZhGW3kWLoc5Yt8QuefGRFTpm3fW1HCXJMnxEhLu",
  "key29": "3VeNFUUnBcRYh7v8hJQtZ7y6ykNJb77qiC8mAVynAJ9eUTRdgoAjmf3EBjMV7yWVA7HevcaMNfatPfgDtM2u8yMn",
  "key30": "N3irTvfrrsbDeL1fGzdYPoxktbFTxsL4vHCtisVWJmZEdj5AmvuZWUt5cchLmeFVVcy7etnD3UPdpAXoW6bw8D4",
  "key31": "3k5LzEhpWwFm9ksNeJ9gYw8SNnW4DDuBQ6RcRdmVeDzhAhsk8uXWyLNyxueZS3WQf225Yxj7J3p4mHAD24A8zBeD",
  "key32": "29aSV3sZyZfm9VboE1g8SWpphLyfocicN7vb76CP24s7udSNDnC8FxpJePLFxT5Q8FJrMbMv7MpJqDHQvSZGYScu",
  "key33": "4NGvP4SUpY7RVRRQaeB1vAjiT6uDsAin8RZLApfgWkj7WYBiYgM1792kwa3QFCUZ6ozJ4UTpLSL1v2xLksQDAUFL",
  "key34": "49GFdQYosY2MWpsT4fqueMKp699FK67fXNGAmf1Be6X6FCUumvv8SD9yf4HRZQZpcxbxFGKCkYUgeFoKGgEeUKMC",
  "key35": "76s8M6UcEbfPFMAcnhAsk8xWX1r2cpB2EmrjuRt4RzRcs2zszmJ4y7CtkR9ApwCv2BS6pXzahHJhB1r3S6jSDfN",
  "key36": "4UQjp7Q3DFBJ2WT7CdyxRdjp23FKijCXPJJTp97W6ygZBJ7nkZHB5f1S8diGtsP5Ne6RCqcBTJoF4qn6n3sAiPRw",
  "key37": "5fPoJSCMB2xCYjEJ59U3qkysgzK9D2cq1oc9fbvJLdBGbPxtdT2Qo7j5f21mHwZxM5DjY9DDvD76QWFgkzA2JxQQ",
  "key38": "2bxFZvhZu3Jefs3xaJrZr4zHCSZcauX6789AdviLchyQyz227HF5LzMyHu2Vbpcqc3HxtUhwh5EDX61nQquKncoD",
  "key39": "5y5qttAvzB4qr7BE9rPQGh3hzwCtSeoXG2B7bgggv7mmYPvLRpE3pDguceehLaZi4Cd3SC7sWYp2nzxwuvc8FZB3",
  "key40": "5njaECpMcrBuBT9ZYBdqdWtZpDVhBE8W4Ueaf3kT4VRJnX5MxREFPokMGNfdaEMyUkRyjnVcwjQ3XSKkKsjAzn3M",
  "key41": "3cHjdBavXDMmaF4jviVYX33dBx87pk8FRSbewJxZt8SbELNzNo1md3AdDvkd3kj2shXYbrkhktcM5n9jHV9rqzRc",
  "key42": "N8pGr6txJwEMSE79uGGAoBXHnKyXFVAUTFsr3eGdwDBPRiapM3KYSiWXgWKBTEjhJ2Xyy4JbJEenECs3Sfrx9FK",
  "key43": "Rhr8HyKZS1bijpScxobVrMMij6JSB3qBd8z5xC4R3WgATvNqB6ASt5pbBy27tNEoeX5GUHZdSXXFPLTWaXh1Wh1",
  "key44": "4eRcKvd6nB6zDF5Xo1A7Mksbkaq4ZoPgTLimAA7U6ov1749E1RZmKcN43qDgqD6LQ6mxbDMnpGc5chwfwGG7xg7A",
  "key45": "3uZmVANttYJj2yBA3WaYmCc9ShKhSQhXEZTekWki7nZYcgwqN1uc8LE1sVpTPGrLgcHU8E9RKGBrXMHY1YYFdYjc",
  "key46": "5suHBmQVmxPgshGrfK19HgnQRmsxBbN4Vv9jXTjAriSnvSBURogVfd4VdZHwJCPCm4Ds1htnCWFrBarEmbkuy5yY"
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
