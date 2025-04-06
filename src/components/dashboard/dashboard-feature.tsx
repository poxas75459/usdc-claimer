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
    "4Zu9oGPqpqLuBFAsFtqmjbNU6SBVvsyvGx9EcKJb5mzi79w9kwHvcLm7mmW366cnt8vXjRN4SLfpMVEB7ggBW2CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26mD1bx1H6nx554kyf3zZCp3P8SJaTW8CEZ25gkHMENRcTT66dC7wsH6zgQj75GFeSymPe2auFagXqALZhXA9732",
  "key1": "5UDtt5G2ZrBybbW1N4KdQwDKLyvJKz2v3vHZjbepsiDpGz57JbsCA6vnnrX7VYoXhei298PsHWBKpcS5U1kDMPpy",
  "key2": "4MW8HPqRpQ14TqFsaTgRCpifZrQtu9e8PA9BDYoi11L8jU4fVkCPE6SGHaxM8a8DjAwhKiwM5hGFmQFZzYUqpiig",
  "key3": "2nVg599cpoUeJWvHCcyYZtU6gv43CXNZV9PZ32z5f37vGGWH5dPUwVMAEcr2Ab71fUjH6pPbHfJwVEBVqwKVTh73",
  "key4": "EJ9ASQbQnCcj9R35Fm3aE8EdfD9y1mRHRqv22BTvMExSR7mZZsPDU3LkXWfQttZ6ZoAsuocP3MbzyM3nhMCuSHR",
  "key5": "4eRbPbtLidK9VaFnawPaeGqim96vBsayAHCvcvKftFNvZnRXFE8UzJ5GxfAe9FeDmqt9Usm6ErfSpQTBQ8diAa2n",
  "key6": "2mVoJ3c8ufsFs4RnGpSizRrJkVbeHjmEVdoAP3janvH9gbpCsAGJ4kLq5dL4cJ2KCeRQyuAsQt5Cbe8a8iSjNpgk",
  "key7": "3FXZMWSs1sjNeTjYAnAdUwPT5YjRh83arWX6qDEDCisb4jvauR2vomgBumjnuBnitsDbcyHXCJMm86ZCqjEh8Mmy",
  "key8": "CB4fn3d4HHtnmrWjjSbSdiAmKkW7ruwLSAdLiymLKWZ7G2JqXv58ya2FddUjmLhhVcZYBVrJyyr9UApGsobr1Pp",
  "key9": "CjBfPPSAXZEmZaZojqLyuAYsYVjHH5UPv8wnciReHvTySwHZRzCMZM8nzjYZCsnmQbHo8owyMeCe42294TGrao2",
  "key10": "5gHsjZq9sKd6tt5AmbXkuCpKZKcte1gyUtqqPoBZrcJoKqnX61uVHGMttKXuSkzscudGWHrPMKKS3r2N1eqJQx56",
  "key11": "5dadU7XWBLr5B2d3oMNX7vjZ5gAb58y5hg4kNrqPTK5UPhyGTLB5XZjNjvZfZJbmFgZArTTTozyy5oMfdMpY2LkA",
  "key12": "2SiMLuYxUsYGwACH9UfmFVzzL9TpV7A2gCPQsunNNwveRWwM8Jstm9rix9tujsgea6WvKxMAkDZ15QNfsauAxQMX",
  "key13": "5GfJQcK1QBeF6fQ6HiUHUEfcUrj2EvAkRftA1LxP9J76sp17mbcmk7s3kc8neNsMszWLQcvKHSmRGbeUAHfjTsWs",
  "key14": "5V3JfoQmCW62sQPZmzNZKMnyS9iTXsHu2kspk6AQhU2fzsmjFqkppCr2nD7yhk342MmU3NUX215BhQ6XtsPcvPw6",
  "key15": "5FKLxnWzPjrzoCwV7ZxJ9RjsD5iCWCQZQqz5CUCmPm6eKW1w8CXR9mNrT3d7oyofutPCAS7uW2oK7EAKnjmk9Tu8",
  "key16": "4Wby7WBSn1qSsqN7PAu5SU8m5FNUcYtNmZHCr1QouZAtjsgidXJnTyXJiSoiHPATNqSUZ6euPHxDA9Zrvyg64dMs",
  "key17": "9aDgw46DnJkNwZrC8asGcGDpi3cT99sGsv1inz5zaKVNhkr69amTTovuj1pdW8s5EtSGX7Do1EUTAdbCWTZzkoH",
  "key18": "sGg4VbTFoZVNRN3vLRttWVNGYgbidB7szruL2si3Jx3Y9Fv3JqKwtk3DgMXDKQqCryL6os5Mr4b6rVAGrsX83Pd",
  "key19": "5sSFQgCJf7kmv1juvhvc2mZ7ora3bNk9k8fi5MGjfi31w7pHQ1mSjyVgJmfnNzQoYrwaM1vvuYivw17EEyfnpSu8",
  "key20": "53HXmUY9cSyPwwjuFkqCf9dvddnTKzEMj9nsXJ2G3X2YsZK4NBc5aF965j6dHK2584a6FEnmUvQVFJmvLuf3QW4y",
  "key21": "3Uaa7ZZTyBwzND8aA1vaFGX85uRo1XAsWEEUopUNu2Cdd3fjeFDE4kss9PY2guroiFoJXEkfb4Df5r5dCLg5bhb9",
  "key22": "47cBkBUpvRqGDW6egEyjutKUxMYgoJjMhxe5KHeZJ48gnKtApnSxMLFV72UG4TdohpB3BwK74BjoitEN6AJ4NSDG",
  "key23": "2PCwAMPrijwUMGvdBYpS1gi1uvSUFi3JjMft2jP4Hzs8FpP3KrsQHxFqBWMmbMvsmWSDKFzmPLLZKkWXJcBoDf6B",
  "key24": "3c4i861ccaPHDYzXXp9t1J4fZ7o4LCVkP7ZHbHR9HM4nSAzZ7wVeGa2TjUdL5YMtc1Ktdq2cmuVhpeZR8rq3QiWK",
  "key25": "CAz16Z2nX4HzDU4t2ZR1vStt7FizAZ3jaDW4zcwpb9iJFFJ1Vv5DzydNKfSFHbDpieiXqCHXt5qggCXDS8KnFf3",
  "key26": "4w5cM9eufJYPS8z1Ay4RLtnARDTZV7Dt5VpvrbFpUVkdN83biXBoPc2f315CeyQSWMDdyT7xvAhUrbzfytM5LV6W",
  "key27": "2HU1JYCfm8Yav1xQ7XgFZKb8sRefBELcMUjcQ1UokQg8qpiKQgtP91o51ueWXQZPv5eTaDryoRsyJegqn4nN6A6r",
  "key28": "5gzN5B2EvRaLmhey7era91aG4CQgg71LW6VSswN4eruopyZKJ3j8VR7hUNNUDpaUCnCk8oGRMbibrUMhotemV2Si",
  "key29": "mu8aNVhEKPV7smoTyvYLmcWG1JJcPzCCH3WRHzmzj7ZKZRCECj7TfQRrFVMy8rKfQT9cZLFatAPiXpUfGwmSme1",
  "key30": "5kdprthpq1B1CvwRmk7zSJvpStjqtNJYy7zu9EkMYNtDiCFatdY8HFtq7AzBng5sQBmPASVxs86THnCdW5pHSNNx",
  "key31": "5or9rYbDPa9WgY8LuY9ydcXzznp8gLwt5dLDCqTVwiJthpE2bniX6PE5d5Nfq7U8abwptVTMtrMtiQurAsDN3qkb",
  "key32": "4HsRJkNbpKFArGsxLAfEKhJbZxFHaMtWmaPMceEKfzAPKNzZp51HeBaDLn4uKYFAwjc4xbQapiEFpjhobXCQFsEB",
  "key33": "5PWiaGWHBGgSBFQPgrD9YztF5dj6H3hzer3FGp93mSdh89hKXKbkTP7jHUpJZcwxY5zic4YkNLYPY6qFYttrQg6T",
  "key34": "4RXcUjaeWZ7KzYLJ5woZRZ6qar4nqNpJucQEZ3xz5JzSi2vfcPfAqwZBptS69mpHxtG6w8QRJYtT94JkgX6in3Kx",
  "key35": "3NT8YDLAnzgJup1wgVAyNZNxuuFi2NTM3k2oxDbPrdNTmJjCorMVM7HZR5WBpKXEh9RXEm4aVEzoWn4fbVwAmmWf",
  "key36": "4YT7A4CUYdM5CYUVBN246QzTib4Vh9D9tLKMK1VGoDUGWDs1z7qzZ2JP9vZuzcCkL18akwiNptE7fXHE7x8giPTG",
  "key37": "2T6npJE2UPnvCzuCwqd6SZR8UPRobdJiQ7zrCwoxKWrwYVAkgxohexqyuCBZiW7aGd717cpNLtLve63TAkTEpv3p",
  "key38": "4eDo2hfdizVzHCxYfPuBqz5oYPLPRNbRq5U9LSPQ6H39FHad5jJy9PvBB9RwBZoMTUeahCXHP9uov14eeQovTMsB",
  "key39": "tUDzeX626a81K6BNiSB524CPksEGXtkQuK7KpJoaAfhYjepHYnZSuJ5bzMK4RHdHdkMtEYasMSs9Rc5Rv5ojPWh",
  "key40": "2SxDDTNJrKvEAtNzsrBshCegDz6oPZx6cg2wJTJKChuLaoLzZFshTikKvQaCBDjdzTLhiCCMmRxpkPAW7D5d9fby",
  "key41": "2eBAhaMiUY3zsxL6PgUwENUaeAgfBtnDE7S9SdsL3XbyKqeHrxqA76fJseYAZtbLW2HVbTH48oyNfwgPhJM72teD",
  "key42": "2tQb7QTzFTxChShVVrwF5PHUWJLxNzQM4YGHmPztcuwPgK7uw4AvBQNsCYuGZafr1QSbfaUjvbp5YbwSSEXbtPcz",
  "key43": "7VCdA167iY4ngYG9oJLKL5GwRGGahGS4NrREQF2CEW79Hy7LqbHWSVZZDRqtxEXv3nBxGAiEAU8wxkLb2nWZi9u",
  "key44": "W24XfmtQd3upVkJtjmKEFKJXMXXjJku8RSkcs2BWDmqDsJeZn58TyCFk7cGXbpCiCEfJXpZb4iRkNZ7LGHXy9gU",
  "key45": "2RdV5wSc3c7owhzjCEpty9onqE91jVMdHS26dQHibS7mNBYvbkCj699XpPF4sNntznipciso7RfJ2g18wr8tMgXx",
  "key46": "niKif2NkMchoukSoGb5JrWzxzq9fCtsMPsHygWdZrRfEbwmzRGQjphpD9uR6QF6ar1smjMQ7E74Vc2RzHJsTcXR",
  "key47": "3bpC7B3Yr2VQVMTAdXgKp1efHNVguMmxmP2EsuB8g1Vmn5ULLW9KjRZZiEfAZBzj6nwk5MXGMon68TfF3hRiM4Fx",
  "key48": "278vc6fMheyrPYf52JCsPYKZGUDcxk9K33F5jqhE68Jg12M4hRtbCdS6JdVX7NyFyyC8c2vRB6wCxuGspXkFecpE"
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
