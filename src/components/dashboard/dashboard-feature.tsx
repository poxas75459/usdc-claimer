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
    "5mDDyVy2wdRyiwHpuQG432m21Xd42LKxAPVZmDLYu4p4LU856uqyC7NkXC8u3yo94gLSgqrhDwbvpMDHyQAcScRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZiH2pgiFyDZCKdBd8rifzrJNFQfs1MFgU142Q21JrjqfBUmgsP59WWnF9mhvXHL5ZMKicipTp9tMHh91sY6BSUU",
  "key1": "4UuiMFkbPbXwCuQU2Sji8zhLZwgaiQrgTbbQps4JPYR5qFUdxmXqEb3jsieGmSApXKTR9CuT6tLiVEzEpU3a2zXT",
  "key2": "bKrcSBocJh1HhWFovAqBAcXv2weWc9AtZkYBhuL8xy6MG6ZvjNX3nDbQLaxxodN6paxkCtPmQK11ScFXqh2abuK",
  "key3": "zEfvqQyD2P8PycbkrDc3CYpaJxEH7jZ7mzJ46GZSE8jWcnpfbZKgKFTTFuob8tcXfM2KFxSN7nKr1EBz8reByDh",
  "key4": "tZfnBp1wdsBFRtNrE1dcgzxAKm472FDrdvxHP6c8L2N7LvTujQg99PT2aAdrf1DPh8huZUukke797WW3aopvuoy",
  "key5": "3e8wisYPhVSH47spre4F7QuwauCC939bCkoiL4SfFNvffMzSeY11pkbDpa5oKqezHzig6JbxnWY8jTMZDpRxKpMN",
  "key6": "2pp2QbeynWWeH1Sip7SXUmA1ramJWiMRB6doesxKqyRguNqX3xHbXoiFS5EsPsYZEQmZpPoT15EACxbw4ZSm2St9",
  "key7": "KsPWzps64ipqfBRawGg7kdLaXdeqTG89CYXp2dUAUL6T5FbcwqJa2QSENeR6jU9TTcjFeQ8SnLfAKRLMJBrYXDh",
  "key8": "jYRpzZ4kAsvG11c3d7DumD89pvD1svYuGhgpXUcf1qmktwnMZuc1EVwFBj1FHNsCH5xLqaMBe7Fww5E1eNZmNRv",
  "key9": "2cqmdCmhT4ZfEx51mGWrWbpCCD69kVTLhqZi4Lu4i5zggzmVc9ZazPkmmcVdGEDDzvgSqhq7JqyqgKFSQtLqQ9u2",
  "key10": "5iPsvqnJV3DKJgaMFQSDJDAFUS6BLNcGnryCZYEL8yrzVXVmw7KuE4zbonRYa2M1WTFHZpVknQeEoYbr2Gu6a6Eg",
  "key11": "4iR2xN9RJB3MknEwiWwifqqWJpLq4mj93RXLFTTfpSszka9QCRsXHYJSY9CvN2q9iBLTevMA7B3YiWtQRcVsnbGT",
  "key12": "wt33vWKdTGrSJhaVGfL9QEWVLj1Ky6pSZUH3Vta1auJiAkB117rkEv8i9GRrksRD8FyHwENet3FM874WUiGck7h",
  "key13": "2RC2ot81aHzBnEHJtEm7MJoriXjVeTBvbJTJw5k5tDdPMxxssVERRv33WtNH6UqZX2LHNw2vvRqcp9euXyrds1cj",
  "key14": "2UaRkTX7eoYP6RYK82Xw69X7xZC7bvdmbAEPVcmPbUtpJSj5AkFjkZhSLBxdeMpMtG5wkNginAkYFiELmHMvdxaV",
  "key15": "4X9eXSzLfpVrnQwZ2wKjj7hfiyZosEW9R3R5c96GGdmrCo9Un8GzT2KBzue7BUd6z6Uh9WxjjLeX2qqCmgNdw5BH",
  "key16": "4hoVp5wp1tQgYzH8vdss5JTnxoErzQxzpk1gxEnEeLDwRJu8ksktEjXK9Rccb2DphvAwd5BzLJYx947hk8gGKCUb",
  "key17": "xfPmPsQiFzEgvXMXBGHMqi8qJowcQ4GUMXYXgrRebrTHXRuLhJeS4cTk3bWHZidAjVd2uNkzV9VFdgwgHLnhE67",
  "key18": "5c25cR88M8Y8afc7ZbJx5JLGRCMHSwpKnkqjZ3qsiRDW2awZ3AeHtoC3Lo2Dity7eZ88e8hPxGQPLdRGakVtCUGk",
  "key19": "3cX6XbGfZUxC73GNTWMGDZoQuKmLhfQ97Lkj8nCKqoS2hmmNoBHzf24aC8rn3NRSnxgfXsVSqVqUf7NEeGDUEgQZ",
  "key20": "r278VtXaoo9921KrZFxHgq863jGiJSADusCnpteuAe78YBxpMP56J3PtffPcky4psAgV6eFyBRuTvhT3VqxquQU",
  "key21": "2f7JKKtBvm2S68mLzmxYnzPn5UmiJWYSukcPnLPjtn4iZ9aUvn8Z8SQN2AT22AKJBi41HGQo6U7hPVj6b5H8K2ue",
  "key22": "2DuKrP2hJhVJeTqp6dqbWJpxthktfbB9w9KBSWYQCrWDesNt6bE1VGZyg1Dzct5AjPBQvq28jkds7pR9phya8sVv",
  "key23": "4CvDuVYxPJH6kVLCgDXeDzhckCEMVVpVmEdcYh5KnySHhv84HwpyJ2LdYBWAed6rwDuo5hjr9T5hhwM3ftE9uLQN",
  "key24": "3hrMH6ZbbtcL7omLZ7TQoP9pBpdmZuY8iXBtRBufcVmTEyD7sXmTZp4ec62ffCpJpnFgCG1oggastZpzobhkJAAT",
  "key25": "2wggGiAXrm2t8Gj8zaNRYFQDhktc2ReAWRWEaNW956bib6ABoyBnihA7A4wW8hHSPbcNoebLhUE3VSFFxbVGnSMb",
  "key26": "5GQiCzkjb3iGuhZwZiPoyfuCsfFfTHhxPCoZwwmwgEGfmmSvjA4UhrDnMyWQYBD7g5tDLeo2qaVZN6uEGQFsJCFL",
  "key27": "2wnPUoVSVnyqMYL55RdZpnaJyeqxkUvAiMF9NgMvrgdAbZatccHipnpUj5yGNyacpJPrabuU5SiRKihRsCAS3tZd",
  "key28": "2nawutvQpZhbjsBEvpj3k4aF1oRpvgSDPWh6evDsqeQQiY9MnjYH3HvREBxMg5qcEtzXRVeqopYsbT3xRmr7ZEgF",
  "key29": "ByVT5pHaM7uSueqvHXAFwWLW3Akx8Dsv9LW5d13ybukMmZ29EdNWFSoWMFMeANi8HU5HGHyF9zyvBD5YML59aDy"
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
