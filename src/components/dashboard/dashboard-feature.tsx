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
    "2eLFq65QwP8ey7P869hSimAfAXXZBhtEEjwr3JG3pRoZaPexuY4SRW7kgHKrye8uTD6bNAaxXRm1BgruPK7SfLNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQTU6LY9uuHdACo39vTRvhocpWpjHbf3kp8YqoGWN4E4WWpHDYcXyp3aTpg2ed7txtphkfso1HXQziszuSGiT4z",
  "key1": "563JFSLeefk4ZfwM9GPRkBhaXxcgU7y1EaCnbWyjx8TFvqutvesgSwKqcne1AvFJ1yP5EmM5g8CkLQTVV6sWJtLW",
  "key2": "2j5m4DJko2d8Eyx7LavWvLPfX7Fbu9hhKmWPXqq4L5y7CedLnSuzXKMczP8uGreucqZdMH54nmruH68msnhnLfLc",
  "key3": "55pvc5n5fW9kk4K9VcWyAsduSkeQmtfSXnzioAqMGR1wvae7bb2c2JkWV5LJs8pdgbfqU4L91WSMUi4Dm9EGRRQv",
  "key4": "4gQh14CJUB6RWgXeWDapfiTNM2nCAjsrEJSJsL8vkM1TKk7rKdPDJGq1zm91FGF95MdwGUS8SNpdFTwTvhujvr6c",
  "key5": "2c7VjN5xPaM9mrps4BTcaxCttnLRyzmj9NCyMaE9vkDcEB7zFNq3u96fVwC7zzHbyAN1o8LtmmGS51oc4AZVx2dn",
  "key6": "QVKznRro4gT3dpxvvTJRd1rqR8vgt3CYeZFGk3zwkEnqp42szAZg9CyLP2CErZc2mfSXBF6VGQEiDQsGzbAQHU4",
  "key7": "4L6eX5YSk5zgi3Ah6Wjkfb8JUX8tkj2GQNpEQ3LJ1kBv8Kwv5nnRSmsQkiweeErekk4zN22URLUdvLvN8xRabLmn",
  "key8": "4xZFaVRhqBPzP9QLwAwwKzDqErRDjtgkALsB9eaKtEHgkZhxAp1GoKxivHhPGci1bDksmUttiyVACpWLEAC9e3Rj",
  "key9": "2yK6a7twL98FagCDQw9TVAeDSbyWHEq6CYhDgoDH1Wy7MC5V8o6fRa47bysLAYsJhUBDsBwrvFigVkcBtR7rLYvi",
  "key10": "5CKpWLg5hdJFBEHYhDxhMK5ti1fcdf1QM3Q9bTQh1m3B2zkkkqUmeSam9KxVFRJt5TKeSoZCytyjDgC8JUoTGeVL",
  "key11": "4C8Rb3kWPzzcHpPgWqa4R4vK8gLPQW78tPks452Ms3N4Lxa4QUKstBgejKntDCMFbkwZe5rRQhGqcQJcSe2JLsyX",
  "key12": "48R2aohVYF9L5YY42jj465VfCdXpp8EesFF9fW4bg5y5VVesYFEARgEjmRUBh1LC7QQRBEk34Pe6gbrQaSi4scBy",
  "key13": "y6wRse9Lmim9K3WeR6CYKras2uFgwqfrm6aW11EuxypiZjZsFZhtTSdqvXjD44QMoGgXzjzWApar3pfLF5ZhmFE",
  "key14": "3EYh1bmJo2Y84CPb66f61SE5ZyRAnFTojn9vyxG1CR37QLKpugNy6qNXAZUvajS4b1HekwH3yoTikGf42wgX6adp",
  "key15": "bZdwLrszvW789V2TWpAWypt7QeRwnSHhXpMDaEW3CqWMBiWgZjei1dQWhU5DW6TrAu7NFGcZRFWAFXcjFCjihRt",
  "key16": "2LFGjrZpjoCRK9kgUtASEPYY5MgxjhsbbXG7qL6qfm8gu76hdfPxr2azrSNLha8x5JFXwCdP8CEbzWpMeaUGzmGp",
  "key17": "4VGKjr6D7E7XLWKrnpLGbGV78pUURN67FdUDsurArArqLMj2guzcnNDn6mcB2cpdwk1KiB1ezfN3FbYAErSRdSX8",
  "key18": "5XqBdoAyCmpNshtxcSyHHzeBWzira4n5Xr1a5oymRFj3VYQparQjkkWrcifsqAiNaSkp5yLw6tqMzbjEwQQy2dgE",
  "key19": "3Xt5rryEBykBwnLuXnU9oAgiuLHhTV9EeCdDgd6Yk15W2TM9jpWtBxmG1RGfBHSFLkERU7SguoK1j1NWweTMC9DM",
  "key20": "51NAQ2FmiyD76isKxLnkJaKKrPzDhabuvgXnwL4dzWKFYJGocFf63XhrHkfAKhDMtJHvd1V7yvY2awb1U8qMQNip",
  "key21": "3tDii9ith2Mc5dSzyBsMvuQpSAeZccrmMMQZ4YFWTtAmWWx7SBuUcvwp9S7KqbJVRCQ6jqJQHoBKYFqiSZDJyJK6",
  "key22": "3HaHuqYLfurcNZMYmcHoJMai3WCZjn2dK88722dtPamRhRGL6z1jZYrDKpA9S98AwSJCCYzKAi2nXmGBFAw8TdpE",
  "key23": "5Qn1kC7rKuUMbrr7THopv33yPH6w5kteGuXesBdLa96J4xP9KH3wJZqhUySZisNz5Kk3ZJkGqbTWPwq9XcPTfZK6",
  "key24": "2NGjmh7vyqcmRrYbHW2NNNhG5cPYryNFXNEVKA1rTefNiKEdWxHQhaTbNvw4EyZe6QYWZWhWCGAdFSxGyc6dvTkL",
  "key25": "4o1mHhK7nyHUyg6xu4MT6jJZ43Fgbzwz3i5srdRcnhXa6zRy4ugTBM3zACKYBZeiMJTYDSZ1SBXeAWVz4SJoY4Eu",
  "key26": "5tkRtqBREkQ4PUU4GKqhg1WB8TFPhHw4zMbow53Mj3JstKveq1oBu2f8pBkF2semKomJghPWADEZYmrbt1Atgauj",
  "key27": "32cfe1q34636LRAQYxLFhw8HjyHLNxF396pKbEcsGtSsCDxgtPBMegrViGdD5QhvG7ZfZSjxi8KcANcwiBjBwTyA",
  "key28": "4XezhL9rJrgthPeX8hBsSVVAcdJg14NP3hYbGTYFGNRnm9agJYvJChBG46K1Am7fBCNhuRKQaNZEJJwTyfkAaafV",
  "key29": "5dDbXP2pQ4Ec45YTRa45jFRdXFXaQvaYgVwVA7Hk4H1vt8mHVA6n13RfFjLaj7UDG4zeuzUMjK5gJEEBGXRLz1XU",
  "key30": "4KhZCrqG3AGBKe3hFGHcz17NBqkrUMVgjEuVC13yLoDqk77hNMZS3CWpE4dPYp2zXWgWhntAa5jYE157zZhNzYju",
  "key31": "3kwvAsKExi6HkQ8UkSUDQZ5EpxxbyY8sZdAd9BCGAUfRSw1FDRgXYnKZZ68u8xskHFHkraesADZsomjYNh3L6Y6z",
  "key32": "38uQG17U6z3pQSeLHkNWi93a7yyhPkyGb27fzeSnfdUKLYywufxDfUyw9AAw1vb9NLJJ5jkuDdRNJ83HnDrdXUUN",
  "key33": "4mHZAS7tRSNfS7dGFg7YzNTz7FZLdtgUTGdg1PcV7TvKSc63xqmBjfFsosSy98y7ykCFQQtmn8taVceV7xJ5H79m",
  "key34": "33hiDep5pgivFFTrxsq4uaJA1BVZbW9dXzPtyJ3WwygyFnPndgNKRpQ9DczeT9yGRKLQ9zVhn2J11oAqSuNy2yHg",
  "key35": "5aD5UT3WZqABig3iyQdKrmJPjFbNPXmUDsVbU9q8gfhUSDLihN4iU6DCFwG5YcUjz6rBJmPxcM8VUBN4kBthbsfa",
  "key36": "J4mxKsq6FgsXcchMGb84prJX3pBWdpcA1tdJZxtwP6zy7D8ZLukgR2Ew7Eij5X4y5JWumb4FLyWejudxgNdVrex",
  "key37": "4pTrG3JCGJRBwiPTaYyHubT5ioNPUNmU7ZjtQBSB9xnSebPpqvTRUGWR2bpzgKKqSCyrAHAfzUYY1EaGZnC6jWSF",
  "key38": "49AZknb6EXJMLV4Bwkaa2QUBHciSq9kCALdShCvZRrZ7DqSJfCgXpnUfTYjAFW7mNGx3NJPyWt2W2aSYFZDd47iC",
  "key39": "2GSFKiQaH3NtQfW7erZtc8AFHnXc5yVBoTYz3npbBM5arqStRJ4Meo5gcGBhnVJJd35scSPeKWEZn8UVRs1NHzpp",
  "key40": "4pQgjQ7KeUcK5S63nmMzFrZag811DH5J651etvifHF3jzBnurpS9ejXTHmi883fX2irYj61jEod2Puy7MXpgbQkp",
  "key41": "4AwxFiJRdTwA8GBMewwfW3BbW2V6bprvGfYX6dVkoFLdoiw1CpWpyY6iyhAHDJafTDrR9kKt96gDEqwv9FDqmB9Q",
  "key42": "4QW51MQPHhDqaTGbhmvf1FWFTHCr4er2UuhKFKMjrFY7zvZQniNv1uECDf49pfdSvG1mhi84mzwSaPgXTH5Gh6r3",
  "key43": "39KtULHkgsByzqsJ7vjUFTzKkvxeYoxW55YTnUEGXLheyPpRy4FFUacNqrH5c8tJ5UiWaPYw9cBBx9cYdQoxQjVX",
  "key44": "5vAnR3LyhgZSGWn7RuMarJ62jCmLckYf14Pzg2ogYe9Lw9Bd9WdYWDPtovQ2xbFx8BcDsUbcXHBw2gVsPbJ85GB7",
  "key45": "4bYMJYFUo884SH2AjxRdLjW1sKM5AJK2iBHuAoE1vbQK6iegmUN8tZtTUVKjHbSmcAMYNMzHHYtMZdQKKvMqAPFK"
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
