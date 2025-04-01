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
    "4PT7AmkaVSUyVDqZvgasBKvjjN1btNcTwPirvFuWANmDmtvooYsSCJm6it7HkoAKKXWrg4nsUbgv1pTHvuMJLBXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csFWTuxPtFDY8dr3R1wqFLVC5bJLma5URSM6P7XGb5n2hoYb1ChQQJLWqW7VAnjCcgqd2Z6PgD9MSeY9UYH1EaW",
  "key1": "2CYrREQiWdzUNzPkP337PQ9Pdi3W6zMBfwZNnG2ZXLX1SAw5LMTL9djfs2VeB9GcwHruLPjvoK4AkphVuHjD6vzG",
  "key2": "wNw3JiqKZy2P32i6s4RePW6TNf82M7HaQYNJTjdVSKkL1mJASRj2PcYQxtu4ji7WTVUqR4bjsKTNtgkJWQuLaYz",
  "key3": "2v3xxfAZPcBaKr4fW6dvgoFXezPNxYoii9Yuk2wTJFUDz9Z5mQ79iA1MqJQbc7YYT6QJVk3U5t1kUMrjnCJm1Bp9",
  "key4": "2VeX6jMA4aSkEYaTZaRV9eYDW8Yt6awHUdsQAncztDBSd31Vwk14FhYAWsnEKH1nEibDZ7Nx8XCuXuycTkfkNfF3",
  "key5": "2anmFP3Qw96HTDPcS8CWnqewowFyzPCUsGJF4wxFgPxd4JzRq55UHLLXPWRJ7QM4mUjVdFWAX19WF6EAR7gtxY9X",
  "key6": "j4RanMaWXynD6d5kYazv2fZ6QA4C1ic6Z4DrAH9BQ49tcf14rfmR8WM62um6Jj8KmTjU2ZqnfAcgLhxwLKHFh8B",
  "key7": "4qd95FzK8HoUUQJYNiVaBhVykc5c2Ayb7pq9QGDyBjNciZuzAqNURxeW4K5jABbvjCQYQsoLeGJUzxBemvQ4mXPc",
  "key8": "5AckVp94DGusSoEuudwcVjx7mvcfvc6fSihUHp4hgV5m9PgRG8Z8pqi1cfeX5LVZcydXkyCpLsdfyWV5aewpfVUr",
  "key9": "6V3bzRcYqZwoN1wjd62kP2kGPphTvxYv8UogMisMwm6eDbHiC5jRXZ8o1A1cwM4zTRVSjXyrHANvXdSeNKtqHga",
  "key10": "CjUVrQKw9kPnkfFtSqzk1A52hT6U41eTZggbF61EiK3y2x2rAqc1amBCxtJhfNQ6st6sjbtM2akAuBrv1oNYjvB",
  "key11": "63a8DHtkDdDoSHYMQpZCWTdJoQC76xcquPZARSRXasmhSEamijysGoETmEuFc5yNqf4BV3s5mPGsqB2Tezs3FHBH",
  "key12": "3iqLyeZYXDqAbd2f9LCprcZvn8G5pm4k8tm4W5nQbkWgiDECQVGpyqMZYpLyCWZ7Z6uB3bTSsX6B14jrHd41jCMo",
  "key13": "25ze5c9MbddwsPWXncsmFhobQtQt95LnYWwRAQhmwxG9v6APJsg6xKEiMAd6pM7cBU2xnjfQRioXHKy2QSzq9vDq",
  "key14": "44TjT73DpP9xLcGKqg8XsN1iZ4SXgY4bgV7EcqvPh7XgcVJ4eVzEFF8YbjLkBVcbNCTG2itpGP5UPuD6Sb5fb1bW",
  "key15": "3agzNfmsrXiaVxQGhU5Xj8fzZSH9ikDmMJWptWbA7sqtyVo61nAUTE7MFu5MoQCPvUfaUtvzmrWgs7nhWPUSvzVC",
  "key16": "4a9dEXUpL1cm6TVJKdHswKWbdWBWvNuh5wQEFUpajhZvBnfZeFcRwTdLFviQUydqEaXGcqnsAJjru6NUmwmEca8Z",
  "key17": "yzHndnf59UNfHUMiG4BKygfzq55WnR6kQCSdiSJ3ahuq3EVumrxZbf8vos6zS9qUQydXDzgMFtRkY73TpcSaWh2",
  "key18": "22fayBixjXXjGYvoqs8UVKo77PZ6td46CFt5tNt8sHqrzUK35uVbJfrypixYwiQeDoww7Ko3KGZpde2RJ1ZP86o3",
  "key19": "vxpxtn3hurWfurnBuN4v7nsAooFRAwckhcHh836XzQN4o8ZGqrrxB5n4Lh2e1fxP65rHuygkBXujbwncDLa1guG",
  "key20": "GnJeo8kE3SuHYTW2cepYJfUKbYWmX9PceLLGjHReq168td9VoCAc6ocTaLni8efzVvvBrQZijnSFUWTwXsaydzj",
  "key21": "21Lniunz6i7m1hK7FpUxyJ4uaZPQxH9ynw7kio49rT6SY5mQCcwaiG9C9LcZbDBuRGhbWCXA4JXcfih9QL4Jeycw",
  "key22": "37q4aAf1pRf3of8ceyPVAUnExs9SjzwEp9Fn27fhEEdxMpMQJ8GqoVqboFcM8T8u5mKP2aJa7nF3DuY592jAHezP",
  "key23": "5FoMCNqim2UMxeY9y3jyXL8xDCxi6inPhTn7tDzbMCDRMmFaviXdF3iiuUVcXv9qjJdQEc8e3XxAp69FfR2DjErG",
  "key24": "UxstKShghCv3CLiQCQjuvHmDyq4hJACAqrhGNQC7yMisbS9EoR2xZoQVoyTpGGC4ciiyCUs1CWygSh8cP7oJpXB",
  "key25": "375fLph5PpMhvTj53dxaL4nVeRyV9gUefJ1swJkYNjbkt98bzBfSsxDufyT9Hyts3781bWFPpC4HN6B7mQDjPKnJ",
  "key26": "5qTzhzrNVJ6SuzTYQyCB3tnngbKQ6T55BssDe3CYgFXK9LTmxV3sKbjqd6uJGPdHpsLsC8ozZAJw4274CLjbLYgZ",
  "key27": "2f8C3UW5BN5VvBS7gX8CbSEmAKgHUywdm8qPPeo3B1k2VhWQSgkQhJGMjETYBDaJ8P39GW6PW7HhoJNrX1APnBUj",
  "key28": "5WFGy6UdDZi5nM1Ajdf7FsAEELtY16BypzeFsdAg6UA5cP2N4wRoiSkP7fEG8BxruzG7nnGPC8MRjkPfjWEc1UWQ",
  "key29": "59NHorkEbnGXk1k4PgkbGXsWSuobRRPfLe5WNSbAcsD8WnsS7vVHcvbW337t23ZcVjetfbG1pMZ9CWiBKDsHEgsE",
  "key30": "37KoMUnNWmpNatunBD1kyRu1RoHgodgSycCpZaVr5VTaSCMeeK3ZoGC3GtFG6jRUtqNJ1k2Q1EaZunZC7Co4b7YJ",
  "key31": "2ktq3nYE4b6cvSUzt3TYDLio5mzPiSAZByUVYfDYXMoiunYpG4LyEWMZ329HMB2b4ucRL8QFjf8fD1fgW6kGprbv",
  "key32": "2YZG92s4G5Y8Pmi3sFjnWxVyABxh74VDKanSYpUYM2v49KVAci3w7xQEvDgrRZJELoRVFqagBKDLghVpouVobLk2",
  "key33": "4qJNryorpQXLCgXwyieessTUi6gBL1zR9HEG97pVB7KVbNDAeoyRFRrxgDBUoUTSnBqEa2XtvDM77JiKjuSq5CrW",
  "key34": "4mWMauyCS7dh83Un7DfFeEvtQG38kQSNSZWRud39t3LfwcF4RCH2rD1hP17T42ELyneLF6JemzVBaDHmThNkASzh",
  "key35": "voSBgt1CvXTwPpmsHQMXJyJXgA7yZnPXskSJFEU4cbxAyRvZpbSm3xaYVRCEcagMBrPjYDRJ56oknLGmbiGnQdo",
  "key36": "3JAJLMRx48sfWtoXs3jZ5Yks1NPW9QFWwWaJ5yyrcNbBy7GsgoirN9dX5H8gMakYTjxQ8AC9VX38uoDdBhQ6gwpm",
  "key37": "4EycLsyK1sakibJZhdqzHDAManXaoyhH8sfCn7SBZesnyf2yumdhM6fYWzSY5vek3tdkFgn9fYruYAAmQRzYdVkV",
  "key38": "61STRuyFHwgCVaaFCBHetTuurRrQYp3Fvg2HyVtDFd6Cd95yy164yp3wHmPT7JbxyX1KHwZmiyDM2qeLDYbcP7jL",
  "key39": "3acSMNBqzsFu4Jf4NKsqyBmxQCLRyvJHBBg4z6pqmGyscuNimBD51szRZVtcm25zNwo5gdmRENXJSVQEbTghqzqN",
  "key40": "4At7AdU7siKE18h2UtJvkV7agkm8oKgsvrHXuDsjAt8cyg66veoaLB6GPLiT4ioBbjDCdkEmFkyFQCRr93GKT5Xf",
  "key41": "2UbbbJYFsvKUw7tKRHvedTrTg1egqZv9LQnYSi22ce4XU626jwym7VNjRBccdCGz5is6M2FZhVhKDpmDhH51RyMo",
  "key42": "4ywcE9zcwaKHrBzvFtYUq5bZ1ekRreWLFnEv7CmbhXfwpkno3WjfHffEqeLVGsUKUi7wVHNedbzXc7YLrSWrmB7o",
  "key43": "3amj2F625FFqoN6gM1HVvf98eNBp4vfep4MxF3cWF66yJaed4BVz1RKikzS661cZx6nL3xXJQJthzD5UyFEVhg2F"
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
