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
    "5pm4kVFXxVEfko8RXPWPwd4CFA6uxMkRw5PCwUTJ1VE9p5oKsW1jDuXdVUYnj1GqKAZQs4hYcgdHP3FoxgfSkV46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SqYzDwMfdXc2hJJo5a32TqG2cmbFKufajEgGpsxP3NkrhP6KM85JevttSh1St3Pc9vfKdqNh9hH1mSQHDgcXYNu",
  "key1": "3sQNwJPmR8UrT2sQCwEALtW1v1cFV19LxwGsXpFg3oxgHFW1zWW55UfQgRsxVRWvSLng6zxquapw3W2qjyFqn1SD",
  "key2": "5bnLUEQwefsuHmr4i1nhKpXnFH8jfiT5JSTnEWF5MK5hAqV1DPzrwnhs6LeftLPySqhkaAmZboyzJ3NBmW3h5fDZ",
  "key3": "4yYE5ai9i23Gjz8gPqx4F9t7VFTsqKVNLw1BeVDF4eUSsZYwZuSEuJWmmBvEpLGb9HW4QozYo4SYc63uAjYrCvZg",
  "key4": "5FjaswwGWDW1rUd9BfeDaL53z7Rc2YzXKa9wLwEfFqWqyvU7NKPTnjRtucb8D1STkEcySPSfRY2eZ2E7PTcK9YE7",
  "key5": "uTLsDtA8uCCh1epihJCVK9fFGy97re2QP5SVvsjTV98pcbK6sXUa9EqZG8KA8QLGqo8LVxuBAfRLctZQHDrD5c1",
  "key6": "5gkP277kCaVEvqduGLrD3Y54uSkNHrxSA63XZBWvfPekaYP7pFmNWM5vrPLMbVs2rixpwcXXBDwZ9B2xoeFLxrJm",
  "key7": "4dY5HJSRzLox1yzDNnEnG373GRwoczRahfJo9gBeMvDqBujgHpYoaJFwsJS9vXTV6DpRbNAzFqndHgC3oitSAStK",
  "key8": "srkR7Uo2Nw63DgRFzg5LhTw58WFQ5uWowKhsfFPdthK9KMQ6bcRNWyVsuNyPV1VMxdGw4VU6XpJwYwpK4iEVvLD",
  "key9": "a3g76oBwRLs2r3uqaqs7WBD3STgDRxk8AsVUNeNd4vnuZ5ombhjQ3kwtpwNGEtcPGEaQyJfokd8okNdd5rot47b",
  "key10": "5vq7uD79zuiYEMEG8uB83xsFDB19dFPpPFjVGMNdaNEssopdoNsr6pVYmjPhDkgKd7mi9yWdosGvZ4q7jSreDdPi",
  "key11": "66ktsx5Yk38GLy5M9pJXqT7djMXPqVWVGzxG7QhL7uBSKXsL2wNR9d2h1wxa3HA6YCQ4yom34nbHmAU5j6UhwgH2",
  "key12": "311kGPKQPez1b3z3azzDN7xLq38Z3eVhV3c67VcMwUvF6m1nEgAoru9sVMBh26ySrk9SZPip7oCj1Fvwg2hwqzVu",
  "key13": "hb5yeF5Q7WnQvz6B1ZcjmEE5TB3Gy4Fw7BC8yqbuk31AQncmQya4WPJrTkkvkk8DnSbbAZYthmsmrfSiHj1889B",
  "key14": "2sA1Y2ntJ1NHvhbfNBY9eHtvAwyKna15ErgwkauD52KixjAA7oTxGSHpwnDuKpN6rMfU7jMYqbaVGTBzcz3hkUMb",
  "key15": "4iZK4Lh89NeCJf5TrzYvYEBhko9pgS3z3LxjK22DXGNEXQC6n5ZrED2ZhJDeiHJoKHeLLPN3BFVVPRN4NJGvW17n",
  "key16": "4YXi4ycXiWRiWcAqKzPTRhp5b725NiibMiTvqfASY74YPAgLyao6MweETvXfiq3mNejyaNWK1WTfXduzs6yiWSJR",
  "key17": "2abm6gQo289FNRiB1ce4QDTK9u6boAn8MziBfYwLdVYXcRjgmX3hmwob9BHzYdhAczuQavAKawTWCDWf4M4kyMLx",
  "key18": "3xMZTh1DWc49pKZHCr8qEhQ3fDg6Ko1qLfo9ib3TJ4pfCpSbutxZyzVwYe3iorWzEKT5BCXRrh9kp5JRurro3ypn",
  "key19": "5EzdtRidajjeSeCYvnVnmB8tGP8Qrg77k3f5nnQJHbbVhQrdqtz46rJwRYECrbQKgkrUt7bPyrpFjMHLYRZiwzhU",
  "key20": "33vbrmJNh7mV2k3NtLny5RY89YQLZcn6RQmZ3p4KpLD1zDRqhgYXTiCWrW3Yujev5xsszieFuWc9V6voFdDJJNiu",
  "key21": "5daMLKc2yiFpgEEVbb8KKtf5L7o67cvpS5jJ2s4btJ5NXTZL6dAsX1gBxZT13JVJg1PePSEb42WUJmu4n5kk9Tip",
  "key22": "2ufKXJ5ZH79p6QHxidw2eQZgcLSDt32cJ5crv7xsy54sof3F2R8n45z56aQw3ZvhS8sd4GAwT6jGG7NFvxNqCHSF",
  "key23": "4e3maWUtbLaBqGtTbKf1Q5TD1RvoBzSYtBWLovahiLnQd6YdZjgZ2h3Yu3bdNH6GwQNZortPk6xr2exEnCbJMxuc",
  "key24": "5eJgNKCMgdyTmT4Kb1ZcYUgvx8fN7EXGNU6mJFD2fuy4Btnm7x11Yx8KU6mws2t6nE2QCDiMut1Ez3hsgFxDXfER",
  "key25": "2LuFKTpaH5FdwADET5DMGPg9ZhAmXoRevVkjKjBNSXAAiUuDd3W16xXX7gDWiBedqK1mkTBrT1jfHYf2tjHjzoim",
  "key26": "46KT7rmYzigdVbNRcMBjhVR9gnritvCfq1tKrcynMhKtVu1xb6TnB2NJi9M65kjufxWKyx5RpAQbm4RE2pd3PQ25",
  "key27": "3RWp99z3tQunfEz8ex8oVZBP1KrUd1sDqgu7XF4rdJHdiMKBWHYfzm5WPC1i9R92AiZUHBqWx1irCtKiacSVgbvr",
  "key28": "2XAb417ibhcVUJm8vywpMGAKq1mcCmQL8s9D79pKmisbqw85zCWSiX9cRtQZS4YsXsV5UE1CVZCCqN2QwLMjVczC",
  "key29": "3EwTstKf8V4ecJNZGfGgxdbq28egUaZ3ECWd5J5sje3kfCyitw7JypZ98TwrpcPXK8WHeC8UrKT7sbERn8RvDug2",
  "key30": "3JvcTNhtHTkERgDUaZn37cWoTeKLH7i812sGQpfbM7yqhrggRoeTEyKBscygetjUHUia5GUPudmERqpahdQe8hny",
  "key31": "4vwwHSCeaPj34ce2KPyf6b9o4xpXw55sCVBtL57rcQzyL4jzSUZxxeWbcQfvRh6P7KHwXmgYqF1wY8Z17DPwJNVh",
  "key32": "3ojXaxGSxLb73bzCzKcVNbzxNfS4X7KQhJyu7BjBm939Na3ewvYqdH6eqVsiNnEVevM2e7yAipLv5w1yAvyCbUJj",
  "key33": "i76vkgyKM7d5k5mGNKCMVv2jRwRucjFCubc1pxKQbjXBtWQtyNRB9Wrke28wzUSUXnkHbKXxLVKYgP9MWji17VA",
  "key34": "3Etb4TmGisMdtZCLsucSQrAxjXcgYHTtYGnp59PidMBYDs2UfzZMCfaGHUkJETyf4qD8awnpFZhsSyheik485K5h",
  "key35": "4hZorZ233ghGgDgB4MLaqVbb59qnYGywG2Mazx7p4kzq56HVc4C1SsvgEnKy2ZSqgoWBXyMrcrgqDqifSki1Gj4C",
  "key36": "8T2gYG7zikrRKSu7XH9tqYLtyVKpfzz5GpEQ2wxiw33vg4k1uDSW7wf7mPzVhxdPMqa7UXi2Y7SWH5h4oUi6NQz",
  "key37": "2h3xeJihPvjSjhyTTpjLapnFDSpeSt7ssMYpNRUCJvfjQWX4VKJmGzZNiKZFywLRDL339b4QRbPH7Nm9Pn8Ag2f6",
  "key38": "q8Gedp1cKsZp633eBH7aiYY4pEgJ4tc6Pc5bm5vEYBLo5e5NTgiNftdHS5SX4eACPrrojw1G8P6cCAyv98G8D8R",
  "key39": "4DtyzXg6j9HS2CWBaLpQoFbpUm6AQLpS3Wt17x2TyBfvFH46yffHbexLYAiuZRkk1iACTm4u3pYN9GGzSr7Tk1Rg",
  "key40": "4BFLH17smfjQwuwE1851nKu6o9DMRrHDLDjCWfi9o1mMq9JQZzU19piKkGRxi1QYju7kkkUx8zg6MuGhmbxYiGZt",
  "key41": "34zRvGfmNsJKP4qzbCJrm8u2xA9mMX8S31pCSG97CPcNGm8LD5hTrRvToqmrnMWXCK5ut9KqM3DaUDqUCpWoKAsP",
  "key42": "5EH8Zn1z1VXajukzGouFBPAY6LEbFQ9q9dGc12AkKAcBQtbHxJRQU4bMXwikQwr4fsPMU98RyhrEe8CWPhvqThGB"
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
