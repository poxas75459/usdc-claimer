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
    "FxLo7fQWCffr93hQWADfXHwrHAChCXCUwiZJ2PZhejSeiWf7hmBAz6ukkLbSwJusd6PAC39vQ1vjNooxMsSrxQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YcVNKyjGjPv5meqBAvCyJtEaSqdLFoT1U7PFEroro9XdaSjvdTowUQDjWQEthprSwP8N7wcUs6GwSnTGugRZnne",
  "key1": "2FcT91E1SZuYYGxrpLvv1u3WV6RoguY2MhoGm7NyesyWTr1EEFsTLWLDhqCRGYGvX1fVTbe8wVS2HFxCLVTuiXtw",
  "key2": "5ZQ2wQ13cbwhJY2MCyKZyWazUaHcyS8c3tkfpwbFY9q6s58nVLAcYrksntmMtHyBhpyxnowV6WhfAWcp3KeWnFDQ",
  "key3": "3FLsKv6hHEqL6UjCbW3WGTBoX7giJjQuRN94gmzLkjicQErtXo4FJSHQdsMP6JsMkmBPRoJQKTNq69kwBd5zxCR8",
  "key4": "4Nw8dbdAer6RiQmSF5wnmMWSEJQhTh7JcTETg6HhXhwcNMoZJQLFkxVyjEDKPF5S2zMo9C8DtRXF6BAGtJTuERSu",
  "key5": "4iGzx35XrAmHBukmLKtFCLa37SDToDV4oLefQS7awnh28wEf4xBSy7BcrzAxgBfNvPrfNpgmePH9ERbVhgWAdWxG",
  "key6": "4aMXJ63v46p4TQ5zwEs7jJfmcwteXWsU6wHaDMPAnDkXSEpsDNAjQEMcMcnMBts2vzBkdjaRM7hfXeaiq1txoj3s",
  "key7": "3ci7Mu6sgAAtr9oDfi36StzcNEKs6dnforiarxPH39mrU77R8LpeHg7aUtV2ep526g4tRofaQgt7aRD4KHxvQJAe",
  "key8": "2Z2oVVCXn492J1Hgy278DzxEn8Da6gf4TtxWmAhpFm6xi2oT5L2HKVNYeBMr4gDi3doF4yHB1s4SfDhiQhFAdyU5",
  "key9": "5dPFhtDZ4pZvbhTDmFfYnSeQyFVPYsMTc6sSEm8jNTr4GKuhT1e4wU38Y5gFN1TUzg5cDYdnUJjQWF88mA5Veg9d",
  "key10": "5o6KSHE2xkXWsXR66qtx4k8zQ98JYP9TF4gpRq4j1d4rU7irFwLsqmUsjMzcdvo22XGVXpRzLYUqncUz8DMYdqiR",
  "key11": "3m65HSXW3GQwJveaNuKkyXh74WufrRL2rcpaaD2monN3p7FagBpSw9wPt7xJMW7gj7mCHp93XvVPWrn9PxYM4vEz",
  "key12": "4mCcjp1RNH6ijvwWUpy8SejM1uN3KQAc9LyMjGY17t9JkGTJQMFcsK2uXKa6Fg3rRf1bFXx17VTxtPp2U9d64B6m",
  "key13": "3ZQ3xXyjGb59ddWVAG5s5rhwbKGB3XPxmpebAEQYMuS294CQvtRQDks2eVAa2E6wKbr4Enct8DxzkrZLpSFX5ejv",
  "key14": "3ad5uAbcHnpsuPSfb4tgmnwjDjTfJEDLfM5Jf6XYPmnQ3zMqaAeaLGU9U2uf495hs1z5Mxri2bD5bsiWSfhvdEM6",
  "key15": "2pYu9SgMi1dmn5ZJPghJhQ7MdZ1iX35PpGPpBo8NgiAbwUqa2vWaz397V5QRxBDUsu7mTB8t653ozY67zVk83kqD",
  "key16": "3ZhsjqxvsinDrV72fqxqjUJ6GaFmw6mA36TC8G6hs88qVvwURNnRopUH7ayEELhkHb7mSMPR1bi4WA6mWc5EoHRd",
  "key17": "24PxKJ235E3pBzDfNjhR1CKakoDWUvbJGJUCJTyFLw82VDWxG2QGJhMAyJL6P7hYHsU8tqPvjpiKJ2crBxjADusr",
  "key18": "4rpS9rJqqvAciR1aGZ5ZqMKvraRsoV6bHtDEP1c6WWfvz1KXizNLZR4x4RD7d5C1QJMnMjX9A3XCTUL7T2PFNbsp",
  "key19": "5GpUmqRYLd9iGpTXgZ5ayMyE9xJs6TPygXfD3QmDe5ear1ZFuY4CshxZem9FbUZ2ZUBPRy6Ct9Aj3wCeay7Jj4cw",
  "key20": "2GdBZsYHqrYyufwVB4bHXo7HTHVvb54rcp67dDB6oYPNDiqFiWJYLr93LqJpWXeNeJZjR2unyeTJ7g8r3kFSpp3D",
  "key21": "3oxfyHHF7amLJUjfL6mvhsDFd9GkAyqVRCye5kEGNnG9zLzutH3JbViw1ipGgLdK5av4rYhwqWgvxFDJwLpDpXyJ",
  "key22": "5PtC9BdxuAhFwJzmV6JiV5QRUvzf5FyAMjT1prAXy3SCxjaFZxtX1DjHxGq7P8unRsG93woWSkUsWimq8YgzLCdc",
  "key23": "3nfaeg7uMVXwn35yDJpFK8QTXGjjn3ULgha83Qb6f2M4ZokocKadkuQqkKq2rL6TPgKtbSHk9gtvncit3a6Jb6VW",
  "key24": "3HXtFNf8UDYFSFAUEoLEGEHrKSqYHvJfkfRSqBXM2Ty9xjNBomWxXRqkAF5AXetumXryarn2Sh1PHBfMNsrksjtF",
  "key25": "gSXceNVocNkLeQkw75M5fYh9Ar12u1zKD9Zvhgyusko9qVCxNFmheJExzDz3DCY6gSCZPc3rtVSyL3x36okFpEg",
  "key26": "5FpodrFD5ABMk4v6wZACUEE2tEsLaEvDXxV3WHSw7ED126VZuuuMMKeq6rVs185mGUMWR9TVevFgYKb4VGx9SrW1",
  "key27": "5EM6tvehSNyRrtVqXzk7ZLxJuQyGeiwfbvYRobZDL4wVhQ5kTGnS8mwSxFyEbBrbaAQ5AVwmtqtqwenRe74VW8Mb",
  "key28": "25egAV3qKQjkN7qK476Fw13P9JZVTcLkkrumUWvjE12ZuAkyS8izRtcBQ794sXQ2jvmaLfwxhCjjDY8WgoxZsLHu",
  "key29": "5Dfhjk3XoFgVqomGBSwJa7J4ewu6r48roUs2z93jV7gHKsZ6gMKKKrnqP8FPP2h1GeuwiQFSNTpu7qSgDdvardSo",
  "key30": "49xW3h4vAkkCpU9k5sjqmGCN73a1reoJs2W2D9ZMV3ZExvWUF2yMeKbnC2pPHnubXzLcijXgKb9WLFNCbxwGtpaA",
  "key31": "36My1ramJPqkvzFomTxU1F7SekSUKEJvi8oVQvVLqNFYM1HAqxadfRM19481pkDXcLWyTaTZYs18pMxLrJ54uVGL",
  "key32": "GcQFpeNwpaHMsqcygLfYbvkS61vDJX9cKi8CtHMqfGk5r1Lp59xdfmDeLkwh4qHvmiqS7npg9unc8YVRi9bCwWU"
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
