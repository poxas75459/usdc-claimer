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
    "48ANZqiGdRGRSHiXq4qKAP5xEhtdUyL2FWiveQxeHcYoc3ytPhSu6G6gWmefMbvikBHN2S6nVnTywpSa13gcVsWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RhVS2sQqxTyGDPMuKwFwk3yKjdegTn8rjKqf8WHbNEaPkYVPcac3px3nA4BWEXGNgwUUBEo9XEH2wfRVQSxyTgw",
  "key1": "5uWvDpLfii92hA3mRQb6JwTHwAscwYYhYuMwhMGxDTxQfyRdCfwXjJ7dduzAiFAf8YTe5WJHRxFWHVswvCkNFCHN",
  "key2": "UQ3nT5KUeYigp8EZCSK5YgsWeVagwNmhJHXuYX8Rfj8iMBJ4wd3uM3suCCkFiDoqDAqKcKVwyCduyCRnJi6CKYh",
  "key3": "4tHxAaq4cdVCgiUCS3acXrRhSZrpcLQZowGBjkeXzHpAqTkb6gb8y2CtLBXyivQKEioAorsmTu3f4aE6ABGZpRBf",
  "key4": "2AZmsL8CG4R8nsNmYNUcuNS5M9Fa6Xi9crsjCtC8pBVjdFhvYndn15WwqdAm8u6yKuBtrdHoXvAnzGEWDfLCUcx",
  "key5": "41Gx6ENj7t4x8di5uEsC9ADq53AySoJxGprTtY6poVYv7AE9qRRyU9Yp7WvAch2Z7VsX5YBdNm52cthr4Z6PUrWy",
  "key6": "4NtvQbvLE2jCfioXenz9C2oRgn5kvJNj7kuRXGXhhrkwytZMmKccVX1QCtrxBqfYeXBp9Aq8txDe3FGJppuLUBYy",
  "key7": "6ptqZJVGYJqYZUCsVvJYsNK4ww1i148eQ2fwbzEMUvFRny8uEQJJT7ZJab32Pzb8gqfQjQteVcEyf7Jc8pbRkUi",
  "key8": "4uwsqNniWCy9EtEzDxYZFH4gCrBAprNmf39Jm5betbKsVzzEKfGP1RNS991Nmmr3hWcNWiTHygbnJg99ESHrWgYW",
  "key9": "LpPyHBsD3XGULbWvhAiR4NtHXRMc3z9FGEU5SRQjYUhEmi4zyTXrDwLKXCwHbZwg3TJLT5vozCtKm1dUS9FWUgu",
  "key10": "2UygU7GZeXkAUKdiFjo1xggP4Vf7dcNSs5fGMdaTJtJfCwtoi8WUpvtkoDRYEPnEpx6h7the8qyANTU4t7FFU5fH",
  "key11": "2T389ofxaARHt2jKboHUAanCqnDXviaZBxCx5VzNj4eDQ7GFHRDSio1aRvSk3nknRC4UWxHNEG2dP4EWcEfgTUXF",
  "key12": "5DZJWTdcQ5iredYd3QQSHxMSKU2cneijJHq5i1NBKTsMk9wMK9AQ8yGR2pT7SczEa8uNpiRsCUKKeALDZzhZqDVE",
  "key13": "LDvmfRdG9N9BTkci6wbgiHtz6yVrxWFQvBGHNh4MGVnC8AWAAncpweCNRLDcuxa9BgGQQUFiQPsqqudTmJzqA7q",
  "key14": "tpBZ9ighdbiwzqrFTpaKJKRsZoyCMoPooqnRYsmwfpzB87fML1sRtKS3YFJtk56Sd66QgbVFwS5jECKc6m8R8Rz",
  "key15": "Giqtj1K9pPqkExhZPZ9uAguAUMckX4iJJHcLQWKCGqCNKud9fdTcPVNJV7MRMFAkXbdMBQrAZR4muuXyANaxJNw",
  "key16": "5msRyQe14NHcz7AiUifiW5S5VHijtjyFDB3uNQMbXUPsEBBTMmcru2yoiqrGqqxvVzbumXorrEbs1RodpA3kqzKZ",
  "key17": "3VJbnu8ibFDgt2mBTXnHrpPJKLUim3qJykxTF2U7eS5Zmk5MkxpwTimqjfBd1gCxQSiAiTRF6t8HYTZQNDY5iPrJ",
  "key18": "2QoMMRSZt3JP9z4jS3qDFLTTy2iZQAoAj7tzVA65ug2GjZhspopddXeLy2dCyVguXYxvzEz1JurySzxDhwwi7YzD",
  "key19": "2mrAAe4S2Q6odgtzzmuAoSFQrDbEai85V4yhSCV62hUpN89Sf4Vt1DkwEy2DHh4v9j3jitj3jJ2yLVHMM81QBhSN",
  "key20": "38Jk5BNhDhGCmzcKWqZQdEeEQbDpqJ8dfofjbcdNRzvjnB6G9UbsPiWPaSnNLCFYcxpz75Jfi1cKNRZ8a5E1AcdY",
  "key21": "3QQJN99awqyZgxNJ6E2XShiiYL5MQnKzf4XFTQPu8CqfqNUwnBt4wLEahLsUt4SKBbDKJssanMLcwWmimPi5wNF5",
  "key22": "3L9FVgaiqnYERNeqNWoxLRRKWQjgyS6u32CSAzeZwpBrLkwpH39WcLWiXaXGRmy1ohTxDSgc4UkSpJAtaomCQsjv",
  "key23": "jkM1LB7PmYFt3wie2ZxKP81xRSxcbrSL6Kqa7aedxtMETaAgDvxJd7SvZ4GAzRBygD9KS8pqTb3Q6Epaj3hRZm8",
  "key24": "4YEj3e82hMcfka22xi2qDqtw5rQSEKyGRp6mtD6g1mUZ7FH8exjvHsC2dpCWhjAq9nzaKUp5X584phj18GpmSvVQ",
  "key25": "cjzC1kS3srZ72WzdKcfiPpVAUo6M8QWGZDjxqsYirbVk8mgAKu84CjPWHqPeM8ZZeVRP6eWHQKJWEFkhxuEVVJb",
  "key26": "2e6MJ2jQk7QfR6drgBJhdEH2cL2XMT32hc2NKRLMzgxhfjJimDt68YmC7mYP55JEv3H9A1UXdwfK55a7uh78e9jv",
  "key27": "4hf55UZP9kua3kbRCcWFPibXqALzh2tkuU8RabnbiHuCzDZyQqXhsz7cSaDQPWtFvpWm1eAb6h7GAbf6JiEfoAsa",
  "key28": "5DH9wtrtBkE9n7J771uxBimu3pWKsyhq33Lr5XPa9QCShkkJNFNjqqnei7VC1ZfM3HN8TjPmiedkeiDLAVv96Fpg",
  "key29": "5vcTc2S9PKMTvayrZxCBe5SpnLVBgP71tNj9rLYWXdc8E6jgasm636DeuHprEmVr88VuCRuQPHjJ2VwrpBuEv5S1",
  "key30": "4UPNJ9QQK1SFajxCnt5br3S8yQSzxdaoYZoeTHwgBXbWxmwU7yg6tdkyksmhoGFaCGJjd7mDQcqkCEDsRy9AkgSq",
  "key31": "RTJTuwx153JvgfsxZCymXmMDtvpv8MPMk3y9f9STcjAP1YhX4SokNWqnSzTHK8kADrZE4y4Z8hyrU4eyFvwBtXa",
  "key32": "zLwZJCPDQ6HRQDhf395bytNFt6w49QEDNnuaDZQVMVcGBPdvgevPLJDpn7QbEZuJ1k9BdgPk89zR44dXEGKuQnr",
  "key33": "S1L9EVzCE3k2gvrYNruQ7JfWgeHJc8GmR7GzscYSsKhjbFeCwcbdn2C6Um2aRe1sXHJsMgfXQsWYmpPRZbumSe4",
  "key34": "5Egy9G7yvsmhMqztz3gXhxRfRLbZjxLztqDCvwbDoB4j7RQe3ucLpKqjuyCdSiNYcgDB5jBsERQPg5XFRgkYxJCT",
  "key35": "41gdWCTezsCUoxWNeyc33XPMHmk9B1BMwv4A7Vtmct4X47RvyAKhm3BWoqwaCaE1bnmNsMUmWp4qfnQ5rjvX4tP7",
  "key36": "jKw7iVAWu2Q1GSKaciT3x4X7aQGCA8rR9zvt9Lr6nxU7JcNLG1hLitNSuW2XVgNhKRqpNiafYo4BgkVRL6Sckbs",
  "key37": "5A9jw7CXdd3M2mvC44ihe9qs7gz7tzPzYz1CW6oGZCtkwJTYQiAWDpviXq6ySXAp6KXKYwgHdT6BHzrueKDmLTbs",
  "key38": "26B5vmDGyn7aFWJV819srTzVsbzEjPCedMtD2mPaPw7wX7ynXoSUBhkxA1vvgYJQCysfP7ho7iah5V61sWBs5eTT",
  "key39": "5ZcjXxr9chUgiKNymASP7P2RDa8vR5wpwjBsPho6C3HUc4tw6xa1EJXsy7iSSftPDBhyf8gyivu1WjFFkats7zjw",
  "key40": "5VM2EKUWznDhbPA8o33xDY9oBbdqSKg8rv2BuDoQDB5U9PNKFs2FBudWcQTDCxsAvq4xKVN6YLk8v4JHc1dC8ejg",
  "key41": "tdaoQ32jD98a4vfd84UmS4niRDy4myVa27rC4c9xNxDV1t1ex4kgmNN5oN4mCJCNQ2F8kUpuKCmSKQ2VVmve9E9",
  "key42": "3qy8v1EH6KdJ2AHEuzxCUAp7UtXpjC31AXmYxaDiQEDW1oHsFrrJmQxoWv23QivFQJ9jaPBgkiB1a7AZUw5nyvcG",
  "key43": "tjSkft34JXyJnvuhXv2vsiw5yu21ZVevPiE8KzNUgjH433pDwaeWDPdJgQeHsdpqSDTjeDofL1E8v1Q3qp9xQuz"
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
