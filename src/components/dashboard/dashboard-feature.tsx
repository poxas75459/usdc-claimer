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
    "62wJd59TpzJYsULWUXKs3p4Bd4FzXp58XSzvnUHrTwt2QG186iEuhCVYFeKUdMz4uWUSJVfSFhodWXQsMvGpFfAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajUejvh8EBryv8ksoDQQUVoSgAFnHkjVEpUYGrUxJGuboFmXXjAkVWWCVTaZfFdEQ5xabJfwVrNUbCn5wAtckYC",
  "key1": "5LQK2pjoBBxgETC913ya4HrfvAqjMCpED9QghVaWiYQfKmTaXT4tV8TXmKvEFkRe46VVrr47CRpNi8yxtFex17XL",
  "key2": "szuQcrp2NtJiskYVZkBEkyuzo4PQB6juryBBJgpZgyN8Ecp5MpS54fEnJ5kmBGoP6w7uqLr7biaY2GNzesETvBt",
  "key3": "4Hk5s62oQ9zxwJ12S1v8XVH5rvdopF3wrPaj1VZXrvRZHJEaxTsgko4uDukoypurRLHMUcm91ZpWHtmGa8tUqda",
  "key4": "3DRrktwyNRg1zXiXRgjfqgBWmjXHTMCmbawvFnPaGdxVs1fRxphyCWsQeRVs85DnPXAcNmw6JwYPRz1BMpomo4bg",
  "key5": "2hm9rBz4i3DfDrndhbNbCDychpUTB4afBWEYUutVykXGhZwAHEi475PJdB14nGLZS9S7NtJd9QCSL2WXcEQMZPs6",
  "key6": "47JgQPMYAkneqNJN6XfEoMVGaBQkCuP8dJpCQPCzo8j3LeevuLmykmCxQ3qS6oouVsw4xuYpaskv7dFnd5wyUrRz",
  "key7": "2kdt7jX8wohWJaa4ZBafzsDuqcbEBjb6HtFENMc3qd3e4JzMcoTzA8dCTQ3bMtzWABuucf2Ck5yXPVbsccjopVYW",
  "key8": "4ZQXdPvyAksKc9LkP4rY41aHNpqHUVsaDuqnaHcLuAvRcTPUyp2suBcKppVBJquRWqbeVBrnLvmwsFzq9HDPTruB",
  "key9": "4rHmVLGwq5sts2Kw3HcVzpPeodVPrJUWHG4Shew9RGenPoL8LdDpFf6DGe5GVAwQ52VV1DSvsesVPkaq1raJ2upv",
  "key10": "aBiBWUUQbEt1bavSbxbvyApMV4D7eR6kkpRnNntR5wiTV6kRifRLXpJdFqUAfD1y1GryBgbLVzEpmtn9XRQy23H",
  "key11": "5He9pFNC4qRQLF1x7iBDSr5hKWyYuxo5NKXgMUaSisKVgP5r2dvPV73VbM2A3R124zZNeqSRvQ4PjtdPfeEDJcj",
  "key12": "5xypKpRPys3WDfUWwfYSigbfjBibipk1WjhVopoPsxbVap73tjj3sEsJHDSenubmBA2u4VwuE8bMgJVrwNgrAWvL",
  "key13": "3rG2BV2EmFEiASWfuzomBbG7fqvj5yqpUjgRJXcaBSZAU1z6fk7yHy5Bz6aK1fzQ3qdCptzDJDc89HkB2zuPazX",
  "key14": "4QYXE6djXdBJpavLgW3fEbqQiuqrGHTKGy2xJaQLnwDp17RXp2DVWpTMnUF44zLC7xKyomyJNeCFhkePBpjYSxSt",
  "key15": "4iETU53ifViix1uT3ohwuZtH65ewKU6PuLuMNcJLPqNpMSbdrnbyX2WTHdWC6WpcXMNpeFY2YcJAcbK2XFazTkmD",
  "key16": "zaWVKvRA6ksX7c1b3JqXMnYiuZbKa7SqEYmW9JHgCBATPNw3f1VdX3D4vygbbvCDWWczPU1iPJR1e4NFQkx6STu",
  "key17": "2ac5XhHojemvVZhdFcGLqzLgPt5VoWMh7q4E6Z3fw4haP8DPFKqXimiuoZ87mGZpzgggRZiXHnbqFtX4eurPFd7p",
  "key18": "5NukBkmahbsrpnLTV24ZsEEDL86NzkYZEgvEBHKGppVUQsEfdJB6LDYg71L1yfkeKS5H3yT3C1bFRMLVaDj22neo",
  "key19": "2tN8vMY2YnfiwyEDCnEBf2HgW9RquonCq56LUMkuUcSPeepnVQwjnf91FXExyHKFB6JhAMvmco1dLBHS19VU7bo",
  "key20": "4U4JozTK1SyV46GfcYN2kmyfFBpMGKvCoGvWJBKnpDK121GvhzMZvAqcFqyGdHCPYQHSV7N6a4w4m1c5z9UvTnYG",
  "key21": "283tRhypV37qHKx6BmW1UwUQWedgVKcAEgdbCY67LFUvLUBFWmNc2Dva3t9Qd3KKk6k2rvwoGzt4sh6wkXMxBVY6",
  "key22": "5YjV4DTpcbXDRHG9edqnMnXYv8NzFYEhMeXkV872eyCmXkyidGJs6LWFrTQRs6m7cacMr2msxuVdtbExbEVvfD31",
  "key23": "yzsUWM8J5btvLxwFXq48qmmjYfmV1jPqYs7B1EGAFzqvuSjyyoicVGCSCp7eQM63iZqadabkezWhe9uxe4tnsJZ",
  "key24": "2mjKpvL5uuBhfwJo3G283CWxp4pEf1PP9ZpkCEyL8FRsKGc4xUNz6gT3B6pxGtQNjWGZ2ES7vP29G8FGmvBkcnPx",
  "key25": "2GsVU9YH7PYmbRfVuCJLtK6stsj5xGDFUbSsjozoNSwV8xQeCHjxkeAMeS6Xpic2wrSYNxmcm6udHg2P3B9z5X4U",
  "key26": "2KybSKZwrDdftzRDihe4wQqx4ZXh4LuCJiUH6raMVKmcwdo5AXEp5Rt323HQUownQZugG8F2HDzo7JJBwnfkPj5z",
  "key27": "2VMWALFj2HVY7X2temyMn2MvMMAWddCn5ccdy3LfKZA6PbCUPnoZu5P2Wg7CNVsbp8ocJ6aVib8EdaF2UEH1P1Wy",
  "key28": "2om3fZPPNNwW4q2VXPjw73Ld2YNfAmbqrbqdUKEohfe7xjEYKooWxRBdJmEhqvSLrNZmrsFeU2HDym2xdECktErs",
  "key29": "AQwpUAeEKaN3zjR4E8WDWU9soKavada1FQL3CxQVv2y5hjH9bvpztKBWKMy6EsqjnwWgqmG7gwozeTwTUz3AWwg",
  "key30": "2fmrZpkPnzWkcRp9CrckJLLyd2NKinuwycYBPssoL4m1YXRnDg5VjtfQExSVryXzxwcWG377x4gPN43Fn1EVhNoR",
  "key31": "2uHcb97mB65u5zd1kBTMM7XExgNLCaKczXXWgC43fPnPUyjnevSjRMNoQxcnCB6xBf8gqDLUMQesySFGs4nFG2Ln",
  "key32": "3r4RPXUCgoYDxH5s4oJbETze15EfHV826fkHdNaSGVd6CEwbYTPudxp5UBz1Q7LqhAmJW4joDMtkWrkwj8atFmYi",
  "key33": "diXQiBhAdq2PzGJWmCEQY3VbN1LXZH5joNnJ65owVepWn8jueWf9Rt6zpE2xWfskhNLM193HGLvTnE5rbe1bzFF",
  "key34": "udmKMNYqHU8pbu5MHXJ9wvRYHnkurocjSG1bFcVK938kjnRKoAJJQUZXRc6ZbifrieSL3vZv58p92Nbg8XWJtLp",
  "key35": "5u2nUDJosVJahNSN3J5ZKW9q862itPmRryTnNTGv15Pxp6bJ4bGBy3BpWj5sRNW7tcnfJ3Wnyv5x9kun89oqxZXs",
  "key36": "P8JiLATsho5RBit5XLd1zarqrRMLEVBcSRgiPmrPYoERo3Nu7eAjrJGxifxTsBUouJg8x1dQ76yHprbPUvtMu7j",
  "key37": "5CiqqSvusrXFAtpHgKQeVXeZSWU7gvJqRnwjbCoB3QBXT22GttEopps7SftR5qkFVb7hHiLdUqfuBc4WX5YE4Xa9",
  "key38": "2NxodbBqkQjbBidEnxBYv7v5w8FwZJAJSvFvvoGnH7mnANZS4A4tQqJsCL6XietmPcDRAsW92mSSg7ee7hLDHFLb",
  "key39": "z4fkQz9CKxqMcfaddWD7GA5UbuH21LAXL2hwszhabCit7j3f15vfegDD3YvvwxR3z9JvQLPp3WGTTM286skQ3Zw",
  "key40": "3TmtAPzDrBtWdzrTccepnswubDu49YfwWQ5hogFdwU78j7x1DsJbvqaUxemXcUriievoFHipYNW74x1cBah62iJm",
  "key41": "361ZVms31ehwzgou2Ee33mitv811G9BZVokmZhgE34mGagRFXKHEGpUd78LcN1cPtpDHrx9QraEvtWCWU17KrZN3",
  "key42": "3TpmPnyyc2TU5bUmEjjXTh66yGZmWdf8UpkGwHti9hbCF2GrtePXaDeHMBqswJvJ9r98Bvjiuj9CJtRynBFmU93E",
  "key43": "4MV2i7Lh8P6sgfiGJErEM9fWzB4351FGC3RsBYYK1K3Q97LT4oagSRue1gG8VSYVA4viFLypoS23dk3TXTPeEAfw",
  "key44": "5HhD4cPV9ib5SD2Dv4SZfMJGmzt7w7RMyYQi293dUieEsMncthhprss2g9hX6nLyKhzFQ6CjWPGNQMHscdF2S7Er"
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
