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
    "25Xg3uTLDZVMx7TyzhSZgBhjySMNUd8Zfvhmy11JXQQAGE5NRs7pxcoy9mM1myAj1ngAkAbQ5tqrLmnhwRDKvf2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYazVRkprckFrapzLJTsVopkQgJwccnAhjJgewBF8TiBJivyVg6quUA5YSsYFeW4CzCZhFWACWsCEYgs8b7F9oq",
  "key1": "3eLTMHqGzoMzcia1mAkR7o13zKE7EUf7StBjZDvkkUAgX4hnBe1Hb9XST4TLYX9DXftmh9gZ6vDRBuDWadBPXpHJ",
  "key2": "2Po8yYTEpSowcTqyUvHiQWLYtUTt1c732ED89zpgc7AX9bVrfh4akcrPUE1ZWERtsxATTAs3hz8nrqSvNyxYJFEK",
  "key3": "28Fj9fngjJGRfDaH4JoNNp3THkGc8zsXGGoJwjZiJc4WTfPx7e9NToWRgdPsRKHD8erSuHCvuYMcX5z8ebhphpLC",
  "key4": "nFXUs9546Dpfn5fwQ9wQ8THqbjHo5g2frbN19se2AmP8jnE7NhW3GMMX2XbhvKrFmnzSBjzGuJFTwdRS4Qrotz5",
  "key5": "HJraxTSPkVj1D4VAvRWp5VzgUymHr9zDY1TGxCH2a6Xu5P6LGyuWKNbwPHzr2yDmL6TrJ78LaHhaXTbMb4YAYa9",
  "key6": "2vjnnK9rMfVidXkJyYUwux9j89T1WuT7Qhb3SRFSsMcUSZ7wMxBADna3MNy9Ba3p8mycpkq8wxc4CC4Pn4mFyEhv",
  "key7": "3Qj7h9jjHYFD159Wd53EnmaYmScuJ6NswVc9mw3Hug3jeCcDPV5kLUsTeo8cRtw5f3GKN4tXFcYg9g6Vy6MwGxUJ",
  "key8": "ncyTZrHQRYL4w7fUXaYf1fCFxKK3XkASQJXA7q3poqkCGyUhdWM373zRGYEFQeD2Mp98RQtkJNKQ84wKKujGg1P",
  "key9": "37nJvV1rP9dNng6RdPhe37qoHRxzi6F7YfGGVe5YMrezCiELxnXhUXksAX973bN1zNbUgz3i8thkN2dYrcf6tR3G",
  "key10": "57GrVzRweBmKEFLCUxeSMC5wAMAyBG2RDL6YWJuMRf5vPe6ZKtTJoUuR7UfWGz7wiM7r3NEogzHakQB5QtWGz7Qi",
  "key11": "4JX4s5bwpGqz9seDCJ9Rnr1YNVRgeyqVhyY6K7WuC4A8x2aQpQXZjYKDRcUhaszYPw2A5YTkdUJeJkmGX6Bhw7Zp",
  "key12": "58ADdN5gXnqZHnc8gnGYQPuic64YqdYASbwFEAxiEgkVeL83jRM7tVmg6Fv3zzwz9r3vhpKmiocByM8gUmwrkkgA",
  "key13": "48np2SB6SYbrsTnw754mpgvscyQv9EE3KnweDcs9cHJ9U32re68gdTxGvAXKZuuH97hGHxWZaCW1dfuQFgDDhPL1",
  "key14": "sAabFpTbJtEpRdCogTqcAueUmo1eCexGJZzVSjnnxDf3iV3eGuTEEgLJLE2jqamb2DLvRNVo8nTtfAa25SZmZNc",
  "key15": "43DMVtdkBTEcZMuFqZtq9LofdzgzacCUxh8pfMFLjkEBNkBFz6jdfHEMMQhvmuSwhzykqHW2184qygCYfZFYJyF5",
  "key16": "2PmZL5S5Xvprf7F4zGbTFGGrTbwoz9ATysJVDqRVHdGzE4ZELNq87Yvd44sG3jTSjt5Bce1Vi6Na8mj6jDq49iXC",
  "key17": "29rzzU2Gh9cLpSDbvQuiqjZBQxrwtLLnN67oqBNAMGJreFWhLZUzc9kTrm2QRKoZqe24s3f6Hjno54hhpuMK95Xh",
  "key18": "3k5Z1rPuYeVp1TxAPk1jtT6J5Xgp5JSeetkw9P3WQ69suJQJU7WcZYQH2Me2zKdzGYaDRWvx31Wz5j5WAdFxrCEt",
  "key19": "4xyjCsw7VuygKLnd79SQPdbz3hvH8FKcRMG8uEhYFZqXeZKAoqLz18UCviWvFy4bavC8ZC7LdWogEyPX1xfeRuMj",
  "key20": "38iBUZP6QD5zre8Jq8EzMHv3UiSihHpZeUur4v2NZadpBB4GQMG59EGA4Jv2e8zRYwDYAk5Q3KXoc227zXoMVFAj",
  "key21": "28AziZhi36JRxQ9iaKjqbFn8DSERu6LKsDCKpffQaNsjct7ejydoPGA9MW2ubTPNjgaWY5RDm8MpZ9dQ4fajFWT3",
  "key22": "CvLKKbBZxgmtQXW89VuqTPZNTdKnFj1aHMLZbghzjHYQm3RZbkvT1ad3qPePqCTv1oeYULpJvjM6ocTn29YGoRR",
  "key23": "2tDMfDLqbh6mxggbKvSLXqELE19zAt4NjW6zW41vQoGWQGxeeaQhf1hmjAPTQ1m8itReQ2N62uUEtxNP4dpdrCnd",
  "key24": "4bWCbod9i6rnfm86Ng1yYZKi6Sa54rHSzww6LEsgzyBKubPfCCpDKcd8EE6R8t2uTgUBsRmHV57G7UuGs7tL8ASu",
  "key25": "3P3r17aNwcBgtoA73irbkoKf7u53Yx3XUdt9UB6yJvfJDK2k8Jx4Ui5dLrj9wWkZ5z2xRtfvjuf5VXr4bkQTYHWR",
  "key26": "49aan1VakudFJrgSf4Gmooc9XiAd8LCzUBSsLSpd8GNTrXZGhkvx1Stn3iQCPJc3Xqfi5iEmKB97sHutKD5qEKDs"
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
