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
    "2ZrAahi8hw6GfTrntTcKYMixxQYYeQVUaz1z2XkP37rtyuSRzvRfyCzMaYqzwYCRMZf4nTxymc2tzgqAuBwreCH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "673iUkkGaSKzMwPzka2u9ifQZTABAC8HsUumCXheDgVi43ZfbLCn6wq5oXTrZuxbCh2ukaQEyHTX3MbMN6XnWMBr",
  "key1": "5WiJi6irbucqjH5ewhoenvyxmuCkfNtkqCBQUcQW96AWzbfyyH4vwvLBqTzKHiFCbHJ1dxdzQx5YpSXHrqr9GzoW",
  "key2": "5iVBjA7NKsMLTeAdg7WGH3TewoA9vxmgLhSPQ6gv5GXDKQ2ozbnFBiH79QRxBAjzxMy2BERvkgXbdsnkvxRc6cL",
  "key3": "21F4zozzqmMx2K8o2t3XNpru6k1DkJBXxsVB3jw7acw74gWP6fNvCqc8M2VY8FvpPycaN1Ra4yXr2EV8z9XXdsv8",
  "key4": "3ngkfAYBUSopb9PatEPNuZy19AuETrV7koFJx8LrDR6iY5aT2rjQuSZdJJyph5nh6GAnrcE8Md6HtknncRsEppdd",
  "key5": "5oS2GfJw8PZ8k88aif34PKh3NzKMWzbzkDjXYSXbfxFRKk7bNDQRJ9mrdrcx7U4g8njuCFsYht25DJ3yXTL7pdJA",
  "key6": "2fKXqbR4ptNCrYNBjbSujftyXg4e5RzcLf1cfcioiZb5wMdJvhvKaqhJzPswThLqcW2L4t3KdQFjx4mJT9cjb5WC",
  "key7": "iN576YZKCeY31eeCHE6YA2enRhMGaRbUEJf2A2GKmtGwicTZGHYJjqbNj6UpCPgP6mwpGhdEwaeyg1sFXCQeRp2",
  "key8": "4jrwPC4FQurTeq3oNxe832gMNUvgnLJ6z3AqVJmWaxp5kRWUcFVLwmDZn1Z4JTCJgmKbLFxoiTiom9etZMSpuVTJ",
  "key9": "4C1bpKFYkKno9NwB2gExBGxCt9Lse3Hj8DuCbjYevgyfkfkYrGCPaC9MZsuXh9ys2kD2sQ34aQfAFfURoysf3D6G",
  "key10": "5XuoGxSsueHKcgDP1eBYPxz73uoWWaEc72ymcsAYvsS9mGgPxXkJTDRV3YyzzMLQVv4pBVGDMSjAoffqhmpVt9SN",
  "key11": "3HN9QQApe8AGiTLh9yGYWkYDgmnsFoXQ1E2VetC9Cs2UT7M49S3hCAsiqzsTDdYbfRV4kh91oqQBSjf7WVm5F1zr",
  "key12": "QwxsJsuh2wPLCgtmyw7iW1tgyHMVPUuP9Mhtx2XzFJQnj1zFMCE6nR5kBX7uWBkKXYuYEHpkoRCUr1ZFDiq99Pe",
  "key13": "5wpzB3qe6MNios3vm28TvAWqeuFkWcnhTAb91ho5rQh8yxgkimvZDEwxq3WQoNhZzjKM4DLmzadwA3wGyZdHsfBv",
  "key14": "5hgY8cTDzD2ZcgLGnUXV41dcCeD177n1Ap7QehfPrM6ZTciMLPyUxAe11Ts4xNQYfNPn8Gwzppfr5LV3DhoPybWD",
  "key15": "m3snQkbdacoVvPtRmmELtyfznnBH5PrK5vTX1ebFSp1rVGfTW12yiChxirxbb6Fp5Kf6T9XWkG4CR4WhuGpjCUW",
  "key16": "3nDVCHSWJyad24jEPxD1mSVgnkwdy2qKodNe8Kn7wJms83EtSzAKSq5d83kazur2EcMKR2CnmGEiSthPuM4osznD",
  "key17": "26eFBaAhtXTMFxu5iAHr5CXjwcYKQRTTaVXrvWyuwKYk1NpCQGRxwT6ytRRMbej7VAkAa1ghRWefFU5nMfdLovdR",
  "key18": "5kkff6arK3YjoAHWBVKyDUY1EU8LnWt7Q3vxiRANQY3bfBvdLhYxDrMefeGhE3h7xCK3McLXk9DofUWpKJ2WVFio",
  "key19": "5bYtnfjMWDsiCFG9EADSS311sF5uqMYjDMf541DcYpWFkoLVEB5s7SjsabbFWjgctMBvkVzWHDhWaTu5RycNZipT",
  "key20": "2ZXNgWbswyjrJQcZsZkVTwssTo459KSxpTB4tZho5bQa9rtjpivgpk9MbaP9bTYw6NY7kgVgCWiMS8Fp2Tihr2zC",
  "key21": "3t6vQgcvN3vWS8xdKFPZh7mAvS9R6UbxjiRw43bSot61DXvJGb7JomSkyFq31rwdukAd7T74CNVWiTWTfvG3qzQX",
  "key22": "4aYqQ5K5iL64RoN66ZnhKxzULAviFSKBECMyWyaM2JajAd64JgoFyGNmwZZWyTVES5b485zJzDvZ1JxfxiMgwbw1",
  "key23": "3vABHJP1oc4JAmCuQxwhZF8qWFfytaVNCLoWWDhBYG7C833pgewEB1x3ZKWpiSKLtGe4nWVgGSTPRBpyrHUm95Nq",
  "key24": "2XkeC2bARqupmC8SJLQ71eNmNpvu5adtGhXLfGdT6w6cHgnUyYbeYae2f61nEaz3EbfTcPniMSCe3fbHbWgwt7TK",
  "key25": "2cmSwgoLVKC7hEBqzc8RDiRhmNTMsVSdtVuiMiEaZ4HgT1RDohcYDfm96gh9aEYDcrM3fS2WDMgDUJdQ9do2NxRo",
  "key26": "58fhRJwrGmXpzP2GrhuLG4FXy3utJUrCJ825ygD8aik4qUXw1m7cxZES1AVnXRBU66K2Vsn2foBdCLPQ9SWB2wFj",
  "key27": "2ZjQKej9TQUXg9feL8csxFHWkALE3pweGM27sL9Z3pEBWc8AFG4fdgvspLbugz2jLk58rWrDDRGEY5yWZyVHUK6j",
  "key28": "FiVPELQnAV2TfRc4YUxhXzYERn7KxysUA6LdM41imbSwscasHLLGNvZeq7RxhGLjGzvkuJFt1JyBgEgmuZMuRMp",
  "key29": "2ik5GS8yBc6P3wmjo5FBR4nyMF4xTAtqqLo9qbsExxDQcTPL4q9MZ5yfQmzMnM2qNcsvGoteQZwisdp6cNVTnvcZ",
  "key30": "f3xdxamspYf3vn1fjWUuNN8gaTaUKCc4nbYkMLEJwBF9Q8YUucpBV2tp93iAcWwV8aziZkRHYT12Dqe3pvxKbFr",
  "key31": "ZpnzdVu9dV2cjf4uox8aPDCNccvLTLW9FFrjgRsUMHVxKVvxvXFkuKwYgSRDbxW6AvsNPdaBzDhkiKqQZam8fov",
  "key32": "TmdL6xpzCvNBfidAjKQYjxAq7XL9KrT5oARKKMaNs1pyBnbPWpLeRZFGPv3tMRKztBxQTXL6vfAwhZJxeLRKgR8",
  "key33": "5c6KtKhqpwifuycXHfjJRYVK4HtFnxzT5kJyDnehHUk8DrhoFPVtfEj2N5CBPkhjKmRwiUjKaj8SwVdKxPGZDJXc",
  "key34": "2RjYRNDHN866NbGpVED85HEHqAhqPK426riie8C1rf25aaGMuPcJBNXnycg3dFm43wEUnrFgA3W5KBnuW2k2FvUU",
  "key35": "2hbk6eJGmgYpJFprMkAyzATeqfYJUfMMCNBtnnRu577j3j5FKsyzGEYqX9eS7NxCxn9DFZE1PA5z88ku988BMXLz",
  "key36": "4dBNYMzbcMS6wk6fQAtwj6TSJtykovTKKh9bzN5VqB2dBamqGytpsgDF699M2gWvpsYSpmfKA96utF9u43oKLSMU",
  "key37": "3weMaRhAF4Fw2aguxb36adtDNbj2WPaAgAzktFLQbebhYirTgGFXHqkCWMVLwCxf3a36fZawnCEHEcNuCbDvHuXz",
  "key38": "bTwmkdN3jQC8vS4qZzvDXd5y4LRrkj6vqcomkpnU8sHSTp8Dqi3G5gubtm34CXefCQBirCVZeQZLWFHtBE5rxH2",
  "key39": "YRZBeU1yEo7UECfyKhEM8ckM6RqF8tVwAURQWeRSVKWx83eRxHJfFqsPPbsADFwG3tN2hRtDB2dZAFFt13Fodyc"
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
