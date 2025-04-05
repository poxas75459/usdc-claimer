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
    "9q7Eg6N9ATGW3SrDoyWq8op363Q2C5sND3QPfeLFoDD1RmiBAUPee483y3pirhB2Nhz8bJfiwYwQMmEnSGRYJWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fbf23TDEBgjv4GLFpX3BYKceuUbm2hsPS4T5gnetaAonCk1zj317RZpVmiyn7suyfPBDkzMjsSoNP6iWnu2adDV",
  "key1": "5ujpKSAGfqNTKo3Udd8GtoJWFUv6N7GaffMHVGthViyyfUPDKXnABrM7J1BvhzdFsCgWn9QbnmcxRhjxywzaRNrH",
  "key2": "4Et5hPsur139Yr3reUYZDEa3tWQeUNFqa7AR3dT5ruuDytpsA67nXxL1tNL9399ZNgTz9skjza9PKcFViKbB7iax",
  "key3": "bb6MHhA7MpYjEfxtCiLNgbgP1ovdP2MG9XVbYtxSdPEVGo41gCnVeYjYoXYdbcDZ8EZ86pFvPw1dQLahMqqqXjp",
  "key4": "4bvQiQmH4zJXg2UeRuYiiHtxNLRiPn6h3sJsGvtab6LZJ1HKqtth8nuEDfVm8cdTKsL2XsFYgpUjjxHZxVynCZP2",
  "key5": "4M2XBSdDgZPa3Q2zkMrBmsm5h6TCZdef9Txg3TpfWcEd3YL33STCz8vdf4CdDhT3pAAcmLAV6DBp1d5GvVE8swp3",
  "key6": "4it9FiVW4oJyVKMGf2C4Gi8DT4igVGkBR1tSeCcf7jZoSjpt7kzGwvpcRFYwX5ZWYno1PZo4EtNb4MMYm8Ms8iM7",
  "key7": "45oocAyRoHRevc4jUD1NBNd48JbxehCV5MYNJNYsbUu86XBhoytWAH8fsdENtVkyJrtbcKER8SrcpfzTArjwDEMS",
  "key8": "3SZV4CJYoaeVTLBNqyfSkhJvydmtJJypWHAzpXHZbrKh7xFZaj9FoQbyQzgBauaQ7D5YyqExeD2F8kehi78ScDaY",
  "key9": "BZ71st4i3ujC6DbfMm6z5Uk9qV7k5AGC1TAXnbN3zA4JfpnE6p5hgPDfcYmu838n1khP19Wdn49QajTMMXt2vKD",
  "key10": "5ETpUYGjkKEBpueEHUjqiSYKoSmJZpR5mXcLPVnsaksJ4ArDLMf4aRRMLEFCLrZXeDZVKamdBu6AJTHimkQGLfLb",
  "key11": "3ohETkpJgNRRgnv4kBhoGhLT9byKbcVmYiHuDd6DJpbV5mXByUBGimCa1WyJcBzk4eYLp2wnv56RFZoyJRaZXyfY",
  "key12": "5nuwaNaECC517tPF1o42CKqnmRrDnjJoFzdf4tRSHsv4BFBnPCpwGfKbRvPskSw55ZrrMsCWxU5FRxjFPqqLo2Sw",
  "key13": "3rXToAunYDTi9bHHh2RovD2f6fbtGevAfriF5fdvX833pRR9DeYwDNxSCUcRgJocWyLVWq9KVoHZNsu7mLBFsLiV",
  "key14": "2pYDaGm5182u6w5DFV6683pi6mgk1GM8MgKqhTNZ9sHXnNDbGjuDVR1vZEeCsfkgXk23migcKuvZ5kpUqxjcCo8q",
  "key15": "HPqJaJzCcgV2zYea9KbcrKYgmjsTDTigMNog52pGQcUSzWEdVxTdN6UpqMUPDJNyzuuxyo6dWcT1MdWSYNbNTVU",
  "key16": "53UVdAjPd3dJ2YksakeduYHK8KWT3Yx63Ya9YihRCzCUe5Y3hPgyZ4ai5aNF7fkzsa1ZnKEU8YmMQ8w3iCg7Pw3p",
  "key17": "21LUDj5Cp3Y5ovUftu5JaJZwdCXFNnUonVwxzAXE21mFBMDZWSJFmeVi8WK6T7fYu1k7QKCfDdZ42mYSJXVEC945",
  "key18": "3CBdrSvJ7xWBjL5QYa5JLgy8djuKrQoiSitLNyVmxuVVVEvSh2mR1pfYtN9VxnQK5yCs4Z9rXRyZKmWD5rw86Fo",
  "key19": "3ZKBh8SjqqgeWu95Ud2vp8rUZBg7SN1WMYWzERnzFyzPpcaqfbutbnU8SikaPmZbsCxKKr7pk7UhSHAZyfE6awzC",
  "key20": "3hXbghLjp3wcjhwAiTaU8sXNFyuNEh5SBPRbMaacaAu89pzexEX5rRtMjTmVoYcSaaAb4f1mPNy2GDVEUtCJW8zu",
  "key21": "1yj71ShrAanHPjxQNH6pQSJYou6zo3iyipdP1xPhKGyhHokNJSgnJDMs9wa6cEL2bQkXFE55TnKkZxCCvU5EDCF",
  "key22": "oLVogfdK8MufYUKjezaiY6AyFQJebpFK3VCRnRMT3iBQLNxsGzHXSF9V6H6HKGXfKTpXQLyFckgLCkdSERVJ4Pq",
  "key23": "3YnhvkjbpkTMog24E3Nu8TCngWz7zmkoD2yopREKkFNSSj5qeZ2mBdPa2FcfLJwVMjDVjKg5jjaNqHMZ43Bj5kDL",
  "key24": "4bRNvj45toBEhBAdDo3zBP6mktCJxzFmgyZfHPSbaefbxetzRctmtzrpRZhH94DxLr7wcMNyNnDbL6aPfDpLHHyg",
  "key25": "zQs5sKXz198JwAGs1KVJtpjjYhxvbcE68sHs8FgBZE8LCAMdcJy7e15iEePnaFYPTXngFS7SkZh6W13ETW4HyUa",
  "key26": "63xra9B4tPcE9oBE7NskNRpPz24F51sZ7tDLq8NQ16SqEUvyyGLH5Cqp5f7CswAbV5pb18kN12A8ENwFjQvzdqqk",
  "key27": "jruc5UsFo1YBKcCogfdWMZkZqTtE7EaNPKRieXHdovVwwSCZPX9KvyQku8D3whQifhMo5VCUpwguP33JHnuQvd6",
  "key28": "4aSgSn3xdHgXHtxrHGgYqA6Bs1T6UteBCf1HNuocN55Esg8KrsaSsCX9JGAwxQcSamHCZCuQDWHfaZLZfNpyrTn2",
  "key29": "2RFZKGhATEKV7HKzBrVZMM5XrAZdsH9RyKh45D2pA4bVGWwYvL2BLL9BztG6XNEn4BtLFzoxeJ1EDa7B1vo2S6C",
  "key30": "4YHYQrFZwEKrsHS4vzKeyBDVJvmiARTnfm5KFX1QdohngjUASuYWZGUevpzBWUJFWZaVEaQAr1c7RkGnHMowZPr",
  "key31": "2GbrW48LjLiR3T3J6eArHqhTnVq2BNaPPN6BmshQRKRW9Sx1aNyaC2wHnvDKNWDxZ6A7ChJvZSUBYoTd1PxEogV7",
  "key32": "3d2Xnet2FioLd6nYKG7sEH24DgvHxFk8Dyp8XosGBfH3QbVBrz86Y61e2dNUvSmo4985Udh319R72vx37PeXE7Qe",
  "key33": "2nCxWDhX1Q9dPGwHrz3KfwPkFQciarrd1sNR6oWh2ueB6vVJobF2MKgGgsLuqwoKM49NPrmHKiANmhsYd9GHAuPY",
  "key34": "3D3yxACLK6LbERAXZkxeZPxSGBXAXU6sGMeekSihGjYbE7DWfVZx5eR7NZazuGau7XM1FamcHsMvEUTLoVdRshNA",
  "key35": "28xtzaiyf7BDxmNCfUmu3zv5ip5FjfErhcytzeDgfA7H2poeoN4nHd3J7G1XS4mjKRPRC9EvLuTyxW3Sz8Kx2VvS",
  "key36": "4cJgP6pgToVmXipkyau981G93v6tD6JTXNnLqQeXW3QdYK78dP1at1c76YrF8fhkTqe1GbMvSM5wSAAbJ3vkQYbs",
  "key37": "2oJ6RWErdC9iHiEUrqBCeTy3gV4X8MV4KbigRnW8JM7se55QQQzpDnEdCR4xHcnUq5Nbnq8mZeitgythhk2L7wsJ",
  "key38": "2FDGH8jZFhFm4tn7A6NtMEuphcnpYK7GQ7oJA1ASR94H9BRa5rfYuayVvLR9puAXmxTnJh9o1u1Ceqhvr7Nd5JJ7",
  "key39": "3wye36MoJnxYSL1anNFLR1eaDAfVi5dxv1qWvWpEcrwPVBfQT8ah4XmE5YJ58Bx9HV6P8ynKAYee82yuog1spHv8",
  "key40": "2PQ94cxWQrwg4Ua3hETxeKGQi8U54uwgraG36AjuYfZDJEVE5QJQKu4T9k2Vm21kT3eqgejrY4QfWFkx5rPaA1Mc",
  "key41": "ghDvKxJqgW6fpM1mCfyYo9oQqs2wKX2Ebsn9a2bcc9UFC813vZFJGuc5vgvNxAoeR6gjdHj92ckUpEhTHRYCLTv",
  "key42": "2A4YLTSea7b36WKFgM5WFfYWx8CF26xfCsdJbEH4uXcN5inCgsTGmUyQR6xB9BdSidUNoNVmwWBsgoBB1odNbs9U"
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
