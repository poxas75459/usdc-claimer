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
    "33RgDejqDpD9PcESJkT78K5BeVMZfwNMssWwNCh46brKqJ5uprTmpwtj2JQDddTHG7zSPnKLJZKtHsfahJwE2ySn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGcBjckGoKfrReMke3qizU551AAGGZ87P3HzeeNJSb72G6cf8aYU78xE36WeHqbyw1t9Keo4L5jiiwoXbXLbteW",
  "key1": "5XGx1rvcg46qtF3RBQDfJRzYFCGabUfvGb7BEZ1rM3H8BVdggCZ8iKZPAL9uZ211AYmwUyau1sSaLRc2NdMFP4ox",
  "key2": "3XH4rnsog2QKVWRu7omtveVEhv76KXBvs4M9QntDf4UhHM3TRwu5v3WbxFRsyXY6AbCV45bzKmw34qjjhRYCW1vS",
  "key3": "3FvQbNsEdu16efLqfzk7NtRJVkP9PaoUoNspJW6vN96qoZyZde2eiWZ2CdKRC6rQWPV9HdH1dQsaCNDjTKLcHMnf",
  "key4": "5Vwk2QE7hzLGBgegyGcyt4xp41iRdFSwpYNCAYfBc2GSDtQBPryj9x8DoJpbbzmnDfMisBM4Q89gZ2r8wJa89WiL",
  "key5": "5gP14nZJoDyT6hWWMxGWzr946Ju9dJqEgcwVmyLGQSkdPeHdB4Wm36UHVBPWU1PxEjbDYF8WiHPyK6sLfykVQ4rP",
  "key6": "3GU3UCGmDUyWgewtoaBn6NmuAyxKwNUtv9siFkUmK6QGX1ZBacES6ro3e6xJmNwYRnr5Y1L8E6iFfRos7Hz5K69b",
  "key7": "2xGVPXhkqfT3zPoqgq6oD4w5nix2WjH6Uwyjrw1YWgNHosi2CMVMLdqdNCcQhan32Bht166BL6TfzDf6N6kGYU6B",
  "key8": "3xK2rpNwTHjRXse5bV6i3upxCUUyz9Ms1AWuy6fKm8tx9MHfkJ1GTjeWKFtbFFLU5345quxpBGGX6E39xudJH6VR",
  "key9": "3uTjk5R6N1PhFgP5gqWKQjVgn73sNLYYTUkeq9sGQgghB8a18ScE39WFAtU4cpDemBUwvKQx5b6gW3YqYZJerASM",
  "key10": "QGF9NKbDxeeuspfyvhexgi1n7cx2icXjZA8oLoCdzgMWG7pgpFrcnv9Hmv31qo1FHnWJYhL6V4q5w9abQADrKV5",
  "key11": "61HxwRvxjRt2EYkUY6ShKFfcDUNBcfWC2UYfxBtq6k3NDd9dxW96MNMLVbnVvftw1WhVXFQUsSkheh9tMFcddeCQ",
  "key12": "3Q95jrUCNPqF2XeB6dQ41btKieXzH3YGqDPgegqxoXtfCzXhtQcT8WivAPKKweUuv7yDc7ztMk8GsPRXVSSm1iMN",
  "key13": "3BLLMjtBbSWKGX9k7kLKEdhDYYGH7i8wCuddqDFCWVTxECBCW887ERQhTYHWRWQNWBs3C542LdgsoxsYUcDaM7ho",
  "key14": "2Mf3Nv7yExhsznRNtUQ8N1gKP5hV4wreVjhRQsM8YE1HfwDBRtP3dkQWzarxePbEwAuTBf3c59PKcWKz195KJ1Gk",
  "key15": "3jAvkbxjyPeMqkppzwych2ASHzsiHa8cVvXQCobRsaWajtEmdq63VKbbUitSqo2xmbjooaQwiEQD53yR8k6ZSEx6",
  "key16": "Bbtpydag6XaVrhZDFL9tRZ6brSk9KMaMwp6YrNzJz8GxxiPHWbUhJXfU2z7ChuanY8s9JoMbzWVjjm5B8LF6wQP",
  "key17": "5kFEtP5ok9zR3Gob94B6Vz64tuRYgViA5sHpqDZCtUp5kCSoZ9Hvip7mYEZuYwan3XvPeH7rSRzZN9zQJSysDo3k",
  "key18": "2GP37H9TjdpAgygAW93mjdkqk5M2cdYbDQqHgGobaCPp3oNYuaHzPXu2RtbVbhsLqvJKUMMWrwfKWUHUWLRvgk9t",
  "key19": "2yNEiXXMe6o1y8CNRrTaymHqn1MnjgS8WchtZywk1TSuT45vxRRJfrZjDDb4pSogcuvSF7RipHB7aZ4LfrpKpVpC",
  "key20": "3PfDQGXcxJ7LrDh4NAAuDdN7h8mFPfXd81WBTLuwr8qJbJL1cwd76RcryusWDEPSBrE4amePSmninDsE6JMttfNf",
  "key21": "4c8ig5jZEV4xFykHJegPACfi445hjVndKgtE2C4Z1XA58d2698A3wuazH7GLFiCmSepFw5fpyKB444Xb6mbBQjp1",
  "key22": "4cxcuzKr6km9wvZJahVAHzaUmX2pttL8ioGspzmpmTVKuejP2XajX445grXjNMboR2NCXuEiXzkDxEtysmNzZQ6o",
  "key23": "45epZoMnp6ffXpa4kfXmrFFGhoMuxy1eLHTjRw2RkC3CpkVcPuY8Xm5GMSQvBBkgtAusnJ6L8geJa2PhhYuCzEYG",
  "key24": "3PS2ZBNHKRHHSbkTpLPnyzAcY4WWCmAbXYrNcAaLfboCP1Gg6XYt9yebSa4x7tJXYtBnedYALRyViNWG8xuaUvPV",
  "key25": "2fZuDH6qqovr23S6voxYY3zoXYCgY63fCbv8XmC13dYZ5Bt63HqQhUuKmSA1EK5rFmaLQqofiNCAVCYvRdip6G49",
  "key26": "4GF728Tx62mmP5EuyoJUGKmdVA7Jq9cTjo2gEVRm9pTMMhHwiUcJHeA1QaM8vtBvmUeM5hopHjSBQVvfBVDAuFs2",
  "key27": "5gTYEooNxExW8QaA45HRq9NK3Bz9MUtXw6ueHJG3xqbkwezbXDEBWoBSoK8WNeTduMwcRCTyGmBu43MdJJxiTUof",
  "key28": "ZMcGGkEgtDo8MYSPjxrC1cD3PbBEibkxYDZCxFeF9Ef5eDyyiWn8qhT6TfCXsjUv7jDz64cFambjDTGPiKKoxLH",
  "key29": "3rCuLcwGRLZb4Y3bdeGizjBRi5MSQ9kyctNSbnAfZGhz7tkzqmzd3rhsdFcCrYNYsPkzLcm8ZEjP39EjXPwHPWrb",
  "key30": "3JGaLn3QghppxgcJ9goZnubvvHtmAP7ZmA2LdSkg528QeHfnYCCDLWLUfBfqcH6m74sLiZGLgvh6SCtCvemP3E4n",
  "key31": "2KHuShM38Bf5Yjd6XFZjJK1vifV24BWK19kyLUcZuRTy2fBLAFvFVzPtBMwoWC3eFYQXnAC1RmTy95gRtN5tfGDW",
  "key32": "47zic8nSxKD3PikXkbGC8qHuKV5h9gc1D5NLMiTwxgZLWvS4MSFvHaRtKPbNBoTaVcJP42612Z6ExZTqRfTRaPkB",
  "key33": "5wH3BhXBB1ycEZM8kq2xaDYcgZXCW7xYCEPMZ2VUfPNjD6tPptLRpgXWpbHixn7Au4WERcQMG8ciEvNXbdNNiR48",
  "key34": "28YW8XEgCMRqNAwf2wPV7LGicuceNjyH2KtuQ8t344RWYeao9U9hVGj52nFhfkxzjqQqS3TzoZDxMKPdhW3tk9TE",
  "key35": "5j4MPWRqHRAhL9GfBysAT2JZfhb5mbgEawtgR9AGwutqZrxxkL4qyX1XhgMytBKSMa3ZQynHjECPDWQGJVJ4x1B4",
  "key36": "4TvtQN91WfLt858rAYcJBqGDqQhdWndDc4gMVRiu1m2tpq4QsxA3vD8Z2hRMktXbKExMZxgbVSEdHnsaPb1QshSj",
  "key37": "s5Eff4tkcQmj9vzJLcRwMNXYzfPa1CsnAaLjmvwjwuowLXgiwYvGYoYpTaE2LVL85ZR14wFPz9A7Bs24BZrDctj"
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
