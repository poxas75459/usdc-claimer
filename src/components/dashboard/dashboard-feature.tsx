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
    "3z9SmyZ3UaYuA5XXNtZkppgmWJYV8c9mJNffghDzgdWu9VtCv9y7syM4rkQ2ANtY6EziGm2esbXpiEmQg3MAqRM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuBaWdz32E6U8xv6gUmSX4TqBV3piNww3cbuu8oJHqRXjonsmGh81tYhvYufDA3fHpZD1cZJvwXhpm2rXyG1hUA",
  "key1": "3PdKGn68qBaWF8U9RwpsZDavkdarNUFsofc9R58Fj143qs8cQiTvJVyVTDMfYWjrnWbTjAdLZ2vmAXJJmQBWf1zN",
  "key2": "4GMSZHZUCHcDf7VDrS3x1zzaQnxsW7FEb9zfvKtxRC1VL5V8L5bYmCED9MdM6oEyHAFuinJN54PrjV4KTA5rWbJi",
  "key3": "2DLvvFny9Y1nqabEnrQ5tVNAFRpu1S1PKRPQKv8K6kXHJnMuJ1eTCvmF2FFPr3HaU2MAHfq1E9N7msmRMcN95K8f",
  "key4": "2E8NUB89cjRVKCRU4ox4rjJ2GB68ghiwLEuRSECdpRN4zfMNYShkg1baHcsHCnoVMi4MEjVB7uLY5Zq14aDgziyt",
  "key5": "4DJqqCpK2FXfBZv6tSWwZ3kue7n17dNWqWtW9nv8SJ2Q5ea4SaicY95oeTs77xLPCVdSXmHJdJThS4cD3eHG2DDp",
  "key6": "3rQXWJLwG5YwL6BFuZsoCvnxDaNqbXxLEWthuFuUuGDHjeAt2xFepYSVdsXKnvMgr6wy87VHdZxTccxJ35R1LHyB",
  "key7": "3L6VwepepVCatY37antMFVqnhiuUAgLxEd9rL9izMZMqMYmcx76BwywHz9f8JQNneYdPhpE8B1ZMeJbiBkReMdud",
  "key8": "5w5iyY9F84w2xS99ZY8Diyas2oGqLKV9cqbdANM6Wh6Krqt2BCgQF3MdpYjoBoHeoBydwmoyKpLwLYj6qb7JDGbw",
  "key9": "3FugbkwTdmjzUAbjE12yE6dpoBo91HF2MxS1AYyb4EJyCf2LREMvs6EyGYkHzLqkfspgV7u6odg92GUL7E7nhqcD",
  "key10": "USX2WkWHW1M6BQC4g7rWnVReSY9bRxA4DZDpasiEyrrXYyXouGFixKU4Qy8tb1yEUL89MKKkjTkppn7ZfsmX9Ya",
  "key11": "5eqU5nJA6AqSw5pEkAwAMArhbpUGq9NiKZFfeRAUchpTkZmhKssGnyhoxTEwtrZG59p8apaEJUVtvfSzDRx9DKrw",
  "key12": "5grN6JaFZhhsiwGVyrrocfspC6AoqvUXUTD7YfYrp3iPzYZE4UdaqAoxW1zqNiri6n8dJvMFfgkHzUZR4eQiWaDX",
  "key13": "mrumJqv8hXoDMHq33jKPN2o5tB1MG8ZMe68xMfjX1NTTkDLgYtYTHveqCV13HW5hwZoVChWpY8Q9VHha12jVb9J",
  "key14": "2GfczaiT2LA6MGGsxP463ghA9dnWiV8dP1fFvcq8oyvQXfxWqFk1TefV8rHSE1MTrJDke2aJjAEW4mNhMSM4tvnE",
  "key15": "3vWtDMbwMAiwbRq2nmVnF99285gaYQztEYnUSWtaKx9TViZtafV8okcmYDCwmHZtwpUGEZHimZt7sW7uHM6TKRau",
  "key16": "3j3yzuvhb16uUqabPVPxuv1sqZNYe9fX7Eu1xGW2ZK16YyzSxU2LjZnLZ2H6u6MBzJrJcYJmoQUUEHLnX9tz79Z1",
  "key17": "5GtNZpcr7Gyj19rhLM7rXC91XWfmTWRacm7mX3vXMiQH72qCiGG8pDiyhZx7EJ85Wfm8f6JTWVNC4RCwvqYX4xkS",
  "key18": "3e7oEiu1uZzTb7HWgeL6FGHjCtWhMaMAMcrEyQkThEx7j58CGqEu9XsMrNFoHwqvb5LZTP58f6aBpEF95QiuS8cF",
  "key19": "5F874KHGrY5YEmzk9AjTTUgW9wscANWWEWtsdZu8yC9WiHXXVvUimNHZgJ11KukuyJz27jFRxybMFWvzDA3LLPNU",
  "key20": "2EEJjYcangU4pUJbd9s78ysLrijXPiniTBCHwEKhQFWkM1JkVKzpMVaEsXc9ndRFBDq71Bd2FGpxATca83QhUrzx",
  "key21": "3zGjSiVwUwqRmUa4yVy8Gvfte1tAiyfYgRjgzTi5wQR5nq5snqwcgrDDPDcDUoeGpT5wpSD3tErmVrFfpvDx3Kxh",
  "key22": "5FRD9EvcS2DVGddDku7NzamzwSmyWuMsapM111rmd4bJuJZPRpvnTZHGNDMi6R7rNXRYsnHZFWXfPoKkWXjn6oe8",
  "key23": "j1wmi1woNrEhhA3xPvyavwCP54fVo3FbqEyw92U4YsFQYWynHxuQPSUupV6tNv6mKVZ6GU7BPLmFUCCJUJEbY57",
  "key24": "2baQwFSRLNpietVTFK98WNkHjqwnb4HF3W3GCdzTWWys3swuXTAMrioJRK6ASZbFtriARp5whYtGdWfTbEDeMBrP",
  "key25": "2hmQfEf1we5jybqu7DSuE1sKuW7bH6Fo2sSVo8tyKZzEHfVG6Be9Lz94SJj312Vn1ZeBcefUzjxP4rB4TsHsz43P",
  "key26": "41x79hdS6JAnmF6ASbFGC2Cqp1uoqi21TAeeyHbMeqGgKa9HopvyEdHMjjAtmv2a8voXKtaduSQoodjJaZ1nJw6j",
  "key27": "2irVX8RurZx7W71Sf34KKTagRq39iCiiCBMQ73bNCbmSJwj1t4ModA8bneYGuBSZhpMCL6imawvW9kHiy7QsFDtX",
  "key28": "2VqyRSwbbrxbVDnCeCWGvYX1fcLqoiBPykYdixsb9qQrvaVgAVmgLj9GgPJHwbKH9cuYbTTUBPEUDLrQd8QABb1y",
  "key29": "4ayv389BtoYB3vdH9bRaGwqtzjPN1vk9SKuZcuWj97V8oMmLoCMqxkS8AACvPwRysSFHbAnbrZYmKkbebRka7oRJ",
  "key30": "mjraxf4g3YwK9qabVtYSJ3FRp3eofUBX5ws7a95VahQTVouXc4NRnDUKpKwiKnzx1Ko4VjPx7dkF75GiygUEoCo",
  "key31": "5Cz84LxwTRYbyuYZ85M17BgjG33wf9TmyuoxHCygxiZX3bbucCWEq3AyBdhmibfMPZrjcrj5GwVPTj3w1ZdQRFih",
  "key32": "2BG9zvVi3gwnMD7T2rHJVTbJgoLDCrK5U6F5RXWD8TALrNnyC7kwxMfHrJt3hh6zMqCmQRU9rXAPHacrpgt8px7c",
  "key33": "3Bh2CkUcNPmuYNGezJTC4jr6aEgE9S8soUhTBygdnW3Amvf67SwjgBPsPASSfHbScoBNDRhXeN9AabnGn9iCDZAg",
  "key34": "3XRXr1ZHqBKwBzYMFQb62yKowQ5FPEyotyXhU1yXESH7DySmRkCP3cmMvQumgTjevhLU6y4Ybtv77tzcngjEqCbg",
  "key35": "3Md1zLYjDmh8ZjUnVCNkvKs88hWhrypAtKf5Gf31T3XezDAp9CmWpA4ziKtTwhp2eBQkecqGJG5okbfYGA6BCF7j",
  "key36": "49Z1DbHxowRPiqNvpXWrm5qqKKKe3wQocbbcMherXkJQfb49LrDYBb7FezoPyyncGyhWVY9q8mRPN5YLPbFbuHvd",
  "key37": "2KL6JXTC6Qo84pgvavroDpHgeAkwnzNbBov8aBk5b6fM2g1MTYEd2pttF8e2rC64RkRvrz74iSrauqTnPbNwsiqa",
  "key38": "4FdrfVAeJ89EwS13C3iTK8qQniEiLkVdytHjwdQ2qsMc5NHJntKJomPuyLcoDrD8SsAdcbRzf5khYrJKabFEiHi5",
  "key39": "4LJzgtMFZ7S67Gro1gBdGQajXdZeCtPc4jz5sA66MecvimwnciXiDEMbgodgmLTjGaHUhF3CJnWECsZ7rxmHMbYv",
  "key40": "3pu1dWPZdRctzkVaGhrg82H3xifma2n9C1fiPj1k4rYNUpszDNP7ovUx9jsyN8qu9bdEkPeDMgbmwjGk4SiD5Vr1",
  "key41": "3ynxexRBUiUCoMT5fMyde3fEFjkyHXrCqCeAjgnWZxrpQVwfm6ArgNTBKyDBxnWiNZmPzAvc6G5uXfiMH9KTKsvQ",
  "key42": "5P1BiWe5VgQk759bZ8pFXfXJMKy4SGXLWWFPVQmy32DeR5SMEM8arvGYCC6bBDT8azZhEw4GqDp3foxLQbDWFWpS",
  "key43": "3HYYZqxKpEup2sviZZgKEpfE7W4anDdPZRDJA74iEGGCp3nApnbejvMHTU5prWBwB5ZSrV7bhnZ5RX9P84mHLULg",
  "key44": "3MD386ERYet38gmu5UV9eGAmXXooCoKGf511E1R24X1PX3Wsa96he4YhM9F1knun3ehPz6uotrM5mQa8YnxD37ne"
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
