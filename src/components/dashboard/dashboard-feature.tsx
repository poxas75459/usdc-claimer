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
    "PE6JF8cn5SaimkGKFjpzHarkNSRnpP3jpchznteZsCrRGFhvNYB3VeANt8NqPfPkiAgyopw9j6FDA8ZnZdHruMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxEYR1pswc2NsKTBGYEckHSr435Xd7ATeEVxZi4bBTpaCAzBz6jkELLMVbbnczhYMCpp7UaN4zWEQAAPBb5XZ11",
  "key1": "51dDahQYvMinqMa5ntjKjUbjxTEKc5dX3AiV5trBBJw1wjCUS9rXfLQkG9ighYSMjeBUknuZXCc9QwLKvQkdxNmN",
  "key2": "3e3PXReotUA1HBTX7YXNgDq9KHsqYTfrURQo2D6XVqyp2HZE74AjNJZQQgMmGV9duKixRGXAek23eoB4RtA7gBwX",
  "key3": "2tHmY1ZHksRCSGGjoj6MYVx16S6abxPLSpMTm3WKRthM1bVYByReqcjLKubDMwM7JKuLhThKQPporYU2X5PPLRs8",
  "key4": "5fwJ9swXnmAGm2Wwk7cofyUJuR6eiAsMtyYknyAiDMB4sWSjvM65MkK4KxqY11PcMmefLY9U79dsoWfudRowrafj",
  "key5": "zxLQeZQwj9mrhXM1giLCHFAYaiehjCnqdDVZCBTCdjzAxybEsokkLSt4nFUsyUvEsmZFQfQjfmiC2zuSoUA1nJw",
  "key6": "4dmXaVA23diTbrv5y6s7QrCWmry4LWQvd9YsaeptF9f6LtEog91DjBWG88D1vFWbSK9rXkfXfJ1KjNYrs9acbxQq",
  "key7": "2kATVPTkLB3YhVfMq5YBVgEsKnfHhT8HMMBCqXgtVH1mA5GmBBeWSBRCE8LHHR6UCHTiv45gADXqF41T2QMEcqCF",
  "key8": "4nPvHurJ96xuntBww93G4pAsXsjSFBX3q3ruJ9HhSFr6ArQfL4RdrYohRkY72jtFHeBoCSH1mTGhbUWx9ryTpiD",
  "key9": "3sJmHaWu2HCAU7aULNy8isfn7hfr1UdNbYVJBoF8ABfdSEPkUfwGpcoCwJrtEkxRoRs8as2FkXELjj8vEy3ba7Sa",
  "key10": "2UTbNfP7pvMRdEeQt6uKPpmquwHqm4vMsj32gxhph5Mgp569h9wMVL4jvgisxAXqstvR6ecAYcaKzW3TEJzgwBcW",
  "key11": "84wXx24PCbuxUjoN7cHvZcCR25sbQN9Hh3FDuCvBb5GoNWy7TyoUJ73hJVjQrLDVzrdTF8VGnC2dKCbQh6s1Z9u",
  "key12": "432G4qN894Pj3XFTmg3Y2S6Esr8gt5S1f5sS9hA57oiuRE2YdByPiUbTx2woU5ZiDWnHqSh2At5DLfYiZ3PeWPVT",
  "key13": "3SiiNEVUGY81g7uUB5FE4AVjR2V32VdoxEwZgtHrYctwD9nokd6nLtB3P783PaoJFGb89t2HVUgDhRiG5PFjpcub",
  "key14": "2dr76q27dcBXrSg1R9YDsRRx19tcyb3VaW2b4eVpJqVsvjdBX5231o6DZP8p6wXc5nryZHXaVR2PDnTfRcoy5PSZ",
  "key15": "2oXWVda6xSFXfJTf85eh1d87P7m8cB31Ekc3d6ouKbo5Lpck5rrbK3ASxbcPNUXc82tEypcY2sGD5mJDUHX12cSY",
  "key16": "2KrJDNsekSx2KA6MLiRfkMQnL371Wu7mb4fd3wHC2X5LcbhWJY58EfuKPx7YRyBG6ceJ8EdmxYy4mUi45mwFP3qW",
  "key17": "63jnzahzxBQrhqtDKWDQ8YbqC8WSJh2CSC42KsCQym4bLM5PXubnKpoU7HVxBcPgNkmz132Y5SF5DFjHF1tvKWy7",
  "key18": "25Ddx1hHdP9VYrTocyzHVE6U5LZHn7dQpypC3cBpFJpz8XMuEnM282NwAsvywHC7hNEYGGigMBvEAcPv4bUVMBHC",
  "key19": "5xa7LcJAd9F5LFt8uwYmAKDgajn8VCEatL7juY2YYHjtjPMDGgAsR4YubDbPnjGgEeFduJ2NMi81NUxgDmJ6RsMG",
  "key20": "5xU8e6286jSv6YmxW9GiY1uRDgGkcmXf3LVTzxNNmk9vLe2JTmPzuP1kXD1kCuyNVY65MccDLJCcVXg47tgSjEpG",
  "key21": "3FpaW5uc1CPcoKwpZEBFyv1x96ykyrHGJsbmSrEtzq8q4RhSHns4hk5eMhJkxgUCMjxMtPHrKQyABPt4XYycUQuZ",
  "key22": "fCJvMdwvrMMNiqjRDsD3h9UjcebiwfCzbvxJ1i58WfDtEYid8vC7L9B1c9cD2tqZSYnMKvqgAxbunZNQJDMrZ7L",
  "key23": "2z9FfUXb9u4HdmdLYt6S8i3HMHivq9VbNNfXRchaHGEEgyjcE4St74iFiVsBrzTtkwssiDx6snxioTUWa2VPqXP6",
  "key24": "3bYW2fqxSLdmSQ2dmqKEsnRMCB3neLHeXQhnJZf57HWxbMnV4J2b6JCaFfmg81kH1ru4BjTdVtSpLuhwTDhafVMW",
  "key25": "5zeQBnoGte4HZex98akyLGK1vZQZtDC49zFwQt1iNAFGMKdvKmezGGMmYyu7oD7fJoF3rLmy4gchRYrZjfJCE67J",
  "key26": "2f7By6XefKdB6TdMvdAnSqw1Uho2nVQcXpPEPijm6JT4fg7JSQnv9BhgZJ8iQxYEji7aWy5JsSyReRXiBGFXDZWy",
  "key27": "255inm9KuqUJANUoyJpQ8NKMhiJqdCpggZEj375iuzonLUa6Yd4fJBKHZDw9F6hr8FvT2ygWY916WRWYMJ3z61mN",
  "key28": "2o9AXugcR4kmUtjy3soqjbf3oY8LQ9cEmQ4ZUHEh3xxzTtJSC68hpZmKUeek59BqCzS2Boi3ayf61EVYkvw2GmZe",
  "key29": "3cK85qbM7NuWPWGXuStXcDg7mfEhcEDmAVfQSPQuaq2YCjKuz5e3UC2Dhz9YHsCbj18g3ftMUcyZcB15UoaH2Cuo"
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
