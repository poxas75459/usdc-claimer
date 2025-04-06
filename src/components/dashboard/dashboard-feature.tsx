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
    "37KF77q9m6EQzE2LZkSnr7Bun6j4nsULf8YJo1SMotgcQWaW5LNHPq9WiyiacdWJUKrUcafe8ybeffLWBoAF2LpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABHXV13LeHcZk3VeukFU9n5qMNZuN8z5NZsHw75V3NkbPsJpWN6BCppyL6GW5oMdJvAZUs4oQwcRs7GuEN31Gy6",
  "key1": "35AUxuoxG9eH6ajzMtiocJ3FRaHjdDctXQcnHJNnHecrumpvGFuD9NEqBkRLp9R8ZUj4rJTfHhH1MKHo9Yrsp5ET",
  "key2": "4dikrK6pVXun33PyMHRKw1d79iUDFSN9CRwhqgDrbCQyZWFQFQRrgTVv23bKU89kdPA5ovA9Bc9UJm6HJRctnnXY",
  "key3": "5AN2nAJ3CN3PreeuXNT7aKxjMyiZpGeL2t811oqzCQeafmYZZMzgV66j9Ey2p3jVwWKhVM6cw8C4VUKQ3BDhPqte",
  "key4": "2SMYFFsxUuGm2CeqCtDKg2MCjGg611r38fnCGb1Sih5xojLNSfzpQKfvRxRtTvRYCuyEwZRxs2XHoXxV6FnfhTCH",
  "key5": "37XFvxScufZfBVyiuHbyWdcVCqTEk2Bd7KZ5fkxaBdyp9LPbdmyRTjgNdt7EXxkhAcaoppr9js8gkDnJucUTowRi",
  "key6": "26kucFJataQvL8BzcHD7gshTNv22gXMQHs7QKM4MfgzB2QspUU6CdUVNWwugYn1wKnCmAihrE6dbnAjfapA2LUsB",
  "key7": "2uASf4vQgHaqu6mmMJVUbk5VTB1yorMDX6K9ecwsPgamYXw3DxPJQLLiVeivXwaVX4dw7QU6VefsyzxwtBkoz5r3",
  "key8": "27YFxfQHypNuFYDA6ELM8mjyYDgtSt4Gosxm7C8r7Gp7qE7HfvKWbwPTqM1gp3x969ZaR9u4AV7S4inygNQmfvbP",
  "key9": "3GSzE5QkFovaZ2jeZNw9T6KHGfgQ8AdXYpia5HuwK4yQxFG2kcvmrXqbKqJYcwuAYGn9ik4juTwi1bgJm7bAtqdW",
  "key10": "emuzhn4vzYFcqfJkGzUPqG4SajHTUkwh3nqbgq575o9WMNBYnsrfXEDCUqsUCvWLZNP1V8iLpabChJkGo4GSxT7",
  "key11": "4j2xwoPqH92Ytx3mMqo8RqzMBrwuXTfEENyjdWSzM5ZaUpUq19veBTGDPvnLE5F4BHv7rZx5XFX83fAn4Ek6EChi",
  "key12": "BsBS39zeL8pmY8PmEuEWqV6VgAJaQk2SQ7sD2j1mB2gNk6Y1NZpXe1HqNcipNy5S1AHgJBMNQfjDrdaRuF4rv1H",
  "key13": "5aXnHjjZCPhFrA2ywLjSNQw2sUmyW819rHzfXce4C9ZStAnGfkSkQfAg1k253F7LbixnPzhMGZNmHVQFJo1UHf3c",
  "key14": "53YpAqMVmX8yUnkAaouuDi81bbuGWAqp4NbiYzk3UqQxbZQEGpuhq5sXpr8eGkNPtzpsfCu7N12QLD3Q2caTG83F",
  "key15": "45YgJ533DJBkhVWBdb5mWCpXMAZqYrBUfU6hCwHL7uAwvUiEdiWW3bRFNvbAgamPryZHrfkEwBHGm84bRrJseCVg",
  "key16": "3CYTqDqVrfYTjr6SUc8xGk4t7ZnLZ2QC4SWeG668VBW8f7EUFctiyTCpmvFhvuWCMioW82TK9gdxe5Uvqm8xr9Ks",
  "key17": "2xvrKDHmvJECEGMueM9qMccB39cAtm2KF99Vy8Uw8FAD2DnYmZnMqzgJohYtwUy7AhPQ6HyPbw6fQrSmmKCZMpAn",
  "key18": "2QT8gLxFushTTxexoeZCm47iujeJVCnhkWa699eQ3m7XKAeAAVN3GddoZbQSHjLpaqSMz1QAzbSwFcxSLru5b4Xm",
  "key19": "3r5GUDb7vXcV4SGXTdS67rrZaGLCHXGD1MoJtemDdyaHhNaiUmfqHobzKAnvsUY8JKQEE59YpNDhM4bMogxyXQLp",
  "key20": "4Dp4p1zmJVXRtG8ejuroDFRnqn1vu3WnGPHQYiqAdnqhGTHDGBU7ecTmuwHsDgBXNk3VvyDXeaB4nqSyv3t3udnq",
  "key21": "2mBC7vLnYExPuUCZSE8aXpJ5atRufc1jhWYNxyM4BF3Px6Y8eNnKoPbdUvdJ43Rxpu4NSRjiAvvi5ryeVmoyZQEJ",
  "key22": "5uKxhT6mMLcdh6M5HDv4EFFQzNs9mKgaPowvSwczNYF5kBYRcnkYYdA4JEUEkjofyfaVs1pJ4YMkqACBEQTLzyBx",
  "key23": "9C861EeDVWuB9VYGxCYG8j3N32qCLEsVb1Jj9ZdQT29vRMi3HkvEEBsxsvhusR2a2sLAgWfi9hMQdHCeDQvsmGz",
  "key24": "BGJdSh26nj5NAgDL1Rty7FKo8DXJ7tk4QiBb532zsXL8cJmxxC2VYLNknWXfwURcNMvMfLzfu6qxtfauAqCfj9N",
  "key25": "4YUqCStsTAx3M4zmLfPM1Z4nkhYkuPscDKatntd7fbg3FLnHRZDEpM6BUrbdehyBbC3NzySUYFPjU6u5RhHm939P",
  "key26": "2eSoyQ2PnQxrPMk7CZoJQWpBpaz1UnAHBjNF9hBbjGfwiGHajjRk2xfF8LDfQdizLmiqUDUVSDCM9MCwtdrndVPy",
  "key27": "4TPzo6s6LUPDneW8MnfSVcRYi3U9hr4vtUqTHp7m927V6DSJ6MnFnfYKKdmQnw7d5AFnTzQKVqGyDgJW8a2heo85",
  "key28": "5SwQ6RHoKXLWQM2DciWN1Xq8jJFCuCr6pCbqqBGqBzwpwGT39Yv7wXnjnWbQnZfswqu2MJqbJE3nKgJdgm3otsNw",
  "key29": "2fsTNs9jJv5hp2yAcH6NVnPidjFNN9uGqFdynMNpnMAimvD8RmJWGqSsDxsEYKRTh7LfKLwuCF4zknCaf5g9C27o",
  "key30": "44A1KhLmpeG1qTtoMZt6vJFbVfBTD1izp3qWL5te2LdqjRUSSoTWUXVRSeHNU1AHPLrSBhSPG8w921e3bVgLPKwn",
  "key31": "58JPfDGudp5p8a64jt3N3MiwTzKGK64ggAZtEVzrXFpMoBBCo2D5a9hcFFZBiXgKDMyKCAeprR1QS7oj3JsAjAow",
  "key32": "yECJmyePRzPbjDjbec6Kp97vDgaQehBcvFL6VknmehRZW6tZUAjHCHW1yoPcRRG9EUQBQr5xqGNJdqJfXgaMdon",
  "key33": "4oPkbG39fBEaFn2nJ5m8T4J5EC1x5BQBuEQuJU3uScv9Fmq8oPxNRbMba882QVDM8x5ivmQdSfQqh6HPmt2RDE5T",
  "key34": "628hA1B71S2WbNJP9ssD6fEp2aT6kGunBYpAW6tAKDgVkkevNCigr2FB4imRBXWNAv3dWK3Zp7iT1qjRtSWb4y4N",
  "key35": "2KFXsKiA9wjEqEeQphwFY1EDr9qkJxZYHZu9Mxe8KW5wZ2zTAr9wMob7fXof4c59Vsve4L1FhwWMdwiMjHtcVC4g",
  "key36": "2g8MFahdBGdgMbnr7k1o5QLBiPELCGXxRuMaTtTyNfwgvHpGsiXZdbUKqdstEMqtLhKdLPwYcn84bMVFD6DSQSaK",
  "key37": "57fVHrXSHdTSbCYQKFZLtdE1bbYXxVcEwZR2h3rHT7QWmDxBMue1hkvBL1oYRvVhSKCoKzdecGND9p7vyryhPfym",
  "key38": "2VXRdHbtdwpYTM8C76HQfcnSpkdSX9svcEJHFRcqhk1KJz9oRdFsWK6C8M8vBfDiqrXXS1naVH6pL8Vdin3P6WWF",
  "key39": "3Ynxa3HCCKMnUtENE9xZseZpVVrA7LuxcqTqyPdhr9C4v4bvCUQNPN3qdo2xn2CPcxHYM1dZqDXw76sNuyNnrYCo",
  "key40": "31EUZf6YK6nbkhDf6q19j8zpKwR1eMCqSfsLvv6LLE8Nrea2sNueRbj7jrEjQwrWkAq8DFABY9vX1K6iL82iwHg9"
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
