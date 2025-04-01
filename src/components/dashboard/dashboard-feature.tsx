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
    "37UVoP4eaZFXcGwNHevQEqSepsYHJ9194UrQNZoT6WUpcckMRd1xup16XkLguEyqfEZy27yqLQ13D1AbamFGHGdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azENA7MWPrv955Bt3Sq8tw1Y7QwXcc743MbPf6uftUXSC7Bua2PpkqW3WLigpQK4Ay9sWfmLoCiLfLzW8aydA85",
  "key1": "dxpJBnsQxg3hnDJwULg1ZSQpuTibJQ36oFyD8c8tSVjRxnf7i8jwRUAYGmvj9Cn7ANH1DntoCmqjRx4eTzTi9eP",
  "key2": "3hCFjqBT9TvEXtoEjEeaRzGzuomq4r8EerKjvySG6KTpneSV2RzrHC4z76RBUwinnMosb6w99UPVNCuewMbe4Qxy",
  "key3": "5CXvoRXAzShKbMVHWbnowzBq6PcCWtx81XeT1Y7QHpVvSND6EebkBGuLRQoqz3TMWnhTszpGjD2Zwiqv2AZrg5E9",
  "key4": "5ZpySBQrHJc8BWrEvDphj2MooMbayw4qTu7WvhU12ZCs73Dtson5b7dqe6RYsXDvJZwZCQHpsaEAv4dqC2HfLwZG",
  "key5": "5AACBdscwPU4HRPhGQUitB14JWCJYATtuGwCRJe6bj8vSuJJJFAQ6cfEA71rit83GBd8VxR8izUJAFrqXEFGyLcU",
  "key6": "M2wctsr64onRUpZyYUURV6LoGpv6hdN2uUSbMtPWhkT6LwHevXvn8seaEy6Rr2MBU7Z5hAuDFdh8698qwcDm6Ue",
  "key7": "2QChiHzgZtgGfXTbWToFuheRemSEEK13wMijoLkE1VukGiNivbVYLoPiHnThdGAued5XrTbtCCPSmWjioRZBLAi9",
  "key8": "2a2uK1pHPvmuGHH9FixuhGauScAprXgRBbk7DE3ZgRbTcbXkdf6yZQLdiB39RqW6twiTHx1RBXF6KBxtP5rZ5vJu",
  "key9": "31PMqBKLsAQTaxA8KA68YM7fKvR7C9cAuhX9Q2ijbEvBbdS7eCqDw6E3d4HALz7szymhqVugnJxEYVJmMtCLVnST",
  "key10": "3TWQBxVxijtQYQ75vb4wH6VkU6Lq349MppyBVLAvDwxn8iYwm25f2dHmPFXDQdJJjLjUhqSggTBcgxDTktqJ5u5c",
  "key11": "4nNb4mjXPgKxnegbm6xAt4xEvFyqaLTXvjgsNJa8bQ4CqEWmrnohnUraMd45jehs44sbEr3oB6j13ti1sCmnxufb",
  "key12": "2qMsoa8up8TJei4xxQoBRm8mRHVRLXcBjGZaj6YaUat98xeuHRW1T845WP7N9jhNCKDa8UMYU3zX76JpkVZ7X7cE",
  "key13": "3PgQ9XhfLoxMDAvUKf8UwtUJqCEZirSxJudKbvrrejTJFRx2iYeExUVRwoc7E1TEQ8nErEMdUiGjJKZuBw5rH5eE",
  "key14": "4ZEBRwS8cejZQUoLALzDmjAisKKFvhVtbCaXKD6Qxb7czCdCpM9aKduiYyu1zrAdFjN4wrETY1gyXCmsoL9bH1gr",
  "key15": "3UhhT2MpjwxHFyTTRKLULJhRZv1YSVQD4b9DoarBdcxRgwBTCWi7TnGRfSmZ1NnpzXmQ49atwNYgTPZmvcGAgbcB",
  "key16": "4DosaxowrN5qsRRuD3NMQweV5mq2Hz15cPBbqygXmSzVvqyJaqVnJ6xmJG6UthYhRaNtbphBnV2wYodti677ctdG",
  "key17": "5LtP6K4xXUdEmAzDEQEHgV8XUo8cnfP9zNeLzoabAaqwvJP8erpotwvR5UdVFduEFE3m64jpjrSbFfg71ppi95bv",
  "key18": "53TmsQxKuVi1wYpYGbq9yc4X1YF5T856MyEGowxfwUgzH3Fa4Um2wsdtiLKCw14nXR91EhJQ9mFDdp4Mcuf4RMM9",
  "key19": "5DuRSY2KTV58GDZ7DPZFdQtgx9micPfUwwS5jdGa38j4gQhFrW7bfL3DKiaKt31CKqu5LPg6tQqupCJz3huPJmfH",
  "key20": "bC1kjQ5ToBNKrwrJSSwSFdgHkpHUpXsWd2TTJ1nDcuyrDte3egQfqWHtemP8K4ow2Ss3Z77iEcqprPvNJcjwzB9",
  "key21": "61dUzHGZuzYqrFnggLXr98aSrDPXs7n9bHjfavPaYJjmbxC8jMCmVVwmAnxtHYqbghu66xT3NSASEuE75Dh7Ej4",
  "key22": "2mWTY9YSRqpvkwwLPpj8ABw7GjyE6M2P6oS5EabVPndB2fESemLoanfWco6c2ALC9Ksy2HThEqDgeoy1htwLsXTN",
  "key23": "2efAkHw6goouL5kPQ1tpVVkCdzc4gZnU9MYn5Hg5fnrmk8KiXR369ENaE6F8LS2aQRXGFoA9Pc4ZaXufyxRTJ1Fc",
  "key24": "2PJduGXqKRfq44ZUZEeSeNokzMVJsbHgqpqCFpYHqGAgXsH5NhAVs1D6bj8XyMZrfFJvGtPPaHoGp1qXgPwHLKUa",
  "key25": "2pYcu2fNqyTKBazoaPXV8VkSVT97XMG65MY1cg1PpUfQKQCqWnmNrCpUtnZkoGup4qXgefcPGk2TUYeUyw9Zhyc8",
  "key26": "3X56XzLb3gZeP2c13gv4NxZJRjq6RQ2jH3ykUX3AW6ZWZqqLn7TZsGQMjn17YKiNVY4Sc1x1ecdoJhAth3R9pDMk",
  "key27": "2L77gadkZbgQR3HAHeiizoE1Yy2PJ7i134h4RnyUHaLaCL5749nuNx9VkFXJDHCEnQbepzLwWwU9hfWpkU9HhGEo",
  "key28": "5JHuDmWE9jsr9PAyf4nGiygKGEraiXh2RWoz1VJ4vwgbvd1dScebsfw21aiT7iCuVNNUfJgQV4SHGjwec3Jw6yWo",
  "key29": "2v3LNb7cHhkg1xkZKUyxVn3LPupBC1ZJraAkubxdeoujM7af98ox113w2hV4v1BjSgUoxXdsXNAKm9WJMu8Azwy1",
  "key30": "3CpQXxUk5hNLS2ve1JiJ9yFtUCWYYkvjP5igQtRosseZkkTdJi31JRBo1kDRKNMgsni1G4bFET8ApjUputfVzAQB",
  "key31": "5FhJ94WfJrqfYPafsRFVxZoQBAuTptqKuDsEvRXgRLKPHg7ZY498AQpVybfpeu7UQC48H18gvvjhbwyecKaaaLQc",
  "key32": "461CKEyi1cdgJzFCxQrCxgntjYyga85pH1L1ZTgsaVhRijd1T2whyRFhcFodxAQ1ePDqc2pPr49L93zKKkfkodKz",
  "key33": "4a8QN5Mjc3obwJ9WtcP44dNvJxFxFDq4FFB7vcyh7aiAMm44ZVhMmdU9x5J3j2etAkQravNjcqL1H3GG1CX93FiT"
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
