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
    "QsWDAT6b6v84qd6GDHhLTaM1AyXbDgDTwugC4zjUD1hsmuFm1XxtCNxmiVhFZ1972SjnXYXeZBc98mtuo6qv8MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53R1WFfSx8Mr7eFCxw2XzSFSf2YBQZEpGjVt1f9dzccMUPKAvwcjibnofnvJri2J2wUrupyscCPWwnrirbdYhrEu",
  "key1": "44K2UqQbWnd4srKQoEYH5nsXva7Y1jDzuYCTYNLwrUrJ1SDJ9QpQWTXsVVyAA8toezqEu3osnryFKebtr2gJcuTf",
  "key2": "CgfKcnLo6SR5QQiKnrXpoVGGGvucN8K1VLUToFTMLoLEGizfnX5rhyw3ShKMTKoQZvjygcg1nCKWYQvbhmdVGUG",
  "key3": "2s8su2qaediTYjHWPT7kB3cg3dKNmsWSGD52tVwtchEjSyezGgFgNQuHFT4r6WK5eEVwo1Mz1UJY1B6rQMMAryeH",
  "key4": "59oFDc3gAprB7yA5TT1io4BQdGJs7UdTdJF8TCKHCBAGX3hFc4cz2gmoF2n3N5rDwbaoUXXxPWqDmPeJGi47d2AV",
  "key5": "61nXN1JXtYLjy3WeoRzPAH5syagGcip3HLWAbRvXkQ6Btqy8X5UfRHPoQ353LfntzQQSKspbYfaB8dQcsBESYGar",
  "key6": "67A2nExwHUshCVEtcPFPhYgScD1G7qsPvCainHKyGWZCkMca5iDsgFyAyELV8fSv1DN7fxcgRrQPFNdN2PAj8yB4",
  "key7": "4hySZ6WJbaJvX82scWr1GgbAWcfryqnxZWp2T8EojyCwL38UdzHGFsKKPauK91E5NKVu5VmNXedewJFRdVsgMTQv",
  "key8": "4WB8W6NZGbHH91SsyLaPFgt2oDGPH7jPE8rdA59sQTXyYrpp1ohTYG8U7fwLgGSNBq6LYSTWRkdJ32hJZ4Ln5tRz",
  "key9": "2iNLcGKhwSsefMUcByPHMv4zoAGDNsKdNQLsT1i81D79gKa1b8n1sWWJmizrBJGap7JT3M83ALJCoJFG3VUELiqb",
  "key10": "MTxs6xju1eSbebWeT81EKufKpK4vTT7qiaECbXBmgdSRUydTg6Ps1mL6YQKiKu2xErC7EshcU7uEyfk9Jyy15Qr",
  "key11": "2rSgrcq3PYNPMqy7k57swec6Jh8DzKdCTsdfd8dNk12C1ozuH6HPxTNoJ7Fa9445k59xuhGfSRGYKRD91gQuAow1",
  "key12": "34v4qsfWZQgSndAYpYSpYkZC8gL8ReuHDUFYt7QUEzysY6tRFnAk3cHtrHzDAww5URPJSgtqT5JC99ihUmPhH8FV",
  "key13": "5PviDyDyQMYkkt1KXwKQpTZdCDerbxqEZPXYvLzVVKSJrzdXpHEt1bipabY9cN19gNPqmYgpCFZJiQVa9sSVvEsp",
  "key14": "4SQLqEZG6zCY5yDqXtHAhVpPVNiiZYCFF2uFXzwy5nqknLXGPMsCTfcKkv2di1nPtaYYky4p9PT94ZZW4v9zHH8P",
  "key15": "51A1wVdL6pcf3co2cLeqoYHiQPqWSkCAKc2Aq3tRxmQi8faXcZofxKYjHYaBXr26B6gZiaRXcZUdP7dsTCmjpuyS",
  "key16": "ecbzxDp8RjvM49wwCVUnDSR65ZkJGbqYZSN28R3FA2RduWVoK4h6zyoLwCR5ncAJ8TthNWzwueR8AJnxUCwV8tr",
  "key17": "4XiS5McKWWxngFR3bxNhEiNJYfRntAPBjZoDLCwsVScR2WWRz3e3bnR7e7uy8tPR7VZbFyTUtrgdaszaUSsRnU3q",
  "key18": "41zZ7XCbU1aH4WMX66QrbHxZWH9mBtTZSUy5BCFUYq8NeZvSG4zxvsnymAW1tyCsPHUW2H1eeagFxNgLDC2YXczV",
  "key19": "4JvNiYVPLCTxpyhMLTLciETRfijSxcS3AVRSkaxegUk25cdzuxegnq95zPSX2KyinpBUEXu4Fiu2bCunxjecrwGF",
  "key20": "2PHFHjxGPYcpnRQRTfchZXzymsnwH3WRFXcfUwRnPNjzc7d3zob6WUKW4shYfQrPQZpjozLYQ5wZFMaz24CqF3Ky",
  "key21": "ZhMYY2ZWyuMnzr8k5BLL3ZL9ehXMzhSEiFqFCm76CZQseutLTWbz3CJgBtT4754dT2AW5vYL9c4xpEusuD8zk8Y",
  "key22": "3aA3CxQuuLfW4jctN118iSn6qYp9rbhU17FCNJe6LHWSb54QwB9ay82ZuGVMZC7ikHX4f58vLzGJc19MvvreqiEq",
  "key23": "2C7fieg3gkHmi6otze653pyDXY1mRjTRFCubfGJ4ewDvZvzJ6BSY5DPqh6Ux5VyqT39J62GU7Kf6PmgnfuxvLq5i",
  "key24": "5HijESkNGEhnNevbqZrjtL5EXhNFgVL9tymZqmnmtBo24jTr1qUxRJZWsKfvZfF1DheA1EzwThZ6yXJos83mV1yP",
  "key25": "5C7gXD7jCCZemHGPeFWZRieqRWUC5Wi8Uqmqe5c7hdugiFu5Rd5puLeNWVnnQknrEWo4sfd42wX2eAkCDREXKBCr",
  "key26": "5sAXEBrykmUpWMtqFeg1hkkLBWtckjup99k8dVm6kVafm1gEzBVFqyia7JHdghHoSUvZ7fRAfPVY9tTnQJpH8YnK",
  "key27": "4t2oV8SDGvAZKsUkL6S6riPe6W6CoqekVtqg2At46vrJtxL1C2F9fScVFC4hzxYGcgMdErWuDRmpBgHC8UitkYCC",
  "key28": "44XLtV9qm16C4hmbjEKGXd5k1BzHAbpuLuysMFmCV4PmjvnBQZExUS76ayVG4y4XqxLsEsLQERXM61f9kZ5Pd7bA",
  "key29": "obbors637iWg7gthYNuEjnpj6DkujpGUFLCC3eoHjsPYEqJGBZEcyNPLa2ZYdrwZEHhRDv4AzssaMCvCtg2mofS",
  "key30": "3D4Wk7nGMhkBvXRbiKejR8qzJfYRi45TD3dMYeh9eN4zmBm5mXoSBi1nhWaFW1Ap3KB2fEVajLXcswLxXsAu2N3w",
  "key31": "2yobC7DFeqnu8sbH46FH4tMX1qoVHwHhLUCh6ScCpHWz4XiAfqKoVveRF33sMfgZ9wnHzm4RHyYCQBPJ9N1JtDjp",
  "key32": "5VLLvkLzZCSBKAQhATQEHNnCTd4Wwhfynqv5VpPY9mg3eSJqC8HbGNjHLHa5upAJjDKzbekQDxvyRSfySquMm7rk",
  "key33": "4Q5rrGcwuGobjTwBctXKohATRSwHTyiaXMXNe5AkM6yb79mxXJWxNdCHL3y4e9F4HRn9C13r9HXfWkE7Wt2UXLM3",
  "key34": "2aoS4BpLxRXDZJHfzc9qAE72F6Kfxt31fegEM71AytkfYWFoJ97dHUikxwuy8DYSJv28R9bSJXZN9Z3vbqJPupLp",
  "key35": "Z5PxJXgRRzPm3sAcfVDP3yaHmh7CEHDjrYA8oSxApHF1qBdEoAY2uWWdSD6cprKojeToaovh9ArHni2sCLpgDYu",
  "key36": "2mpm6C1dUwD9d5bAsLvopMZxrskPA3ramoyPHXmHZZQWNMZKKa5TkjLCghbi6CUjcQj2Vyk2zv2DVbHzfkcyasxv",
  "key37": "36NXyXsusjUk1jZMCvd5WqYMipE3dntwMTnFYrjLVqSdhpKQubDYvU2TeHMzByQ6r5s3o7XRQbEVaqgTUbHgywRC"
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
