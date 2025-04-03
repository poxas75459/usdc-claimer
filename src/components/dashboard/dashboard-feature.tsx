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
    "5uMJN2s9f7EzA1aooPEaEXMEdq5hBC6PWwYrwmQGaV1w9LuGYwfZ3eaKAs5btmmZDN42drbKpTzNWktzrGBUqauH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "555m4TKuuYeFNxngffPC3uwisFx9wQwDksTGnzpjMfbvhEvC6JMPzt4X1bzU7jZsvAomYaegf6DkoFGHRocsA3rN",
  "key1": "39HwxD4XXxSgdPbmMhWUPpiFramr3Gx7vWqPcydtQBu9YC1rBrzxn2WiryXD5DGMjrNRfz5pZPvwM7ErdYtkxZcm",
  "key2": "2tR6rE1kUquvEWWoZtWwsb8P3yXGZha9nJBrPxEDxXVjDoXrJUudMouMszDpXCxuADkQcjKcSaX1nsJjyEbtxf7q",
  "key3": "2n3X88b8W3d4LY31M12c92V37qF6bMmEMbx1ibCHEDP5Txu1hTS39CoHWBDCMj7Kqv9fvGtPhTY92Bx79dnhkYgx",
  "key4": "5DvvS5kKparGkp3kMoNv1EjVsksErbvGAM2RWYA72rHup8F68A7p7bzbmwPQuQtdBzTfUDSVJpiJkGwTEmir4ciX",
  "key5": "2dpsYfNqcSd4ZLMaRyuLXY2zAaxsi869ni3MjHLopWrAQhXYKDeiiYbstDYPuhj6qcsR33s4veX2wBxqZYapTfy",
  "key6": "RLv2qjxsHcYupvJZQRpEQGkDCwT99CHbWSjJkMC5remqoJWVYy96LXQagnoXwQSP7dT6iX5twWRDWreokJozT8Q",
  "key7": "5j74fKLwpwX62m1Sp6J7m6rvbCjs96EztqLNrJss7zM4Jc7orhWB6wEd6zsvgWhu8qLyQWVy3ZiTST7KtVXZwLE9",
  "key8": "J8qk1duge4XVERdxfr264D6DPVvFhgLw6Wa1DVuBEE8Bgb22EpuBJJELPbcyLsfSzo9nkmHav6Faf2i5TMXK2X7",
  "key9": "4S9RY4nbLi2EBxuWbBr9ytHsdfvksqco92hzq7T41FMFxDj6osyMTYhjAicsqH2SmoDo2QtbjTEmuJHcvWXtgoGS",
  "key10": "2tbwEyifzb3kHiVZZDknKui64vcPJDhGzMuskp63bHfjdgPouku7doTtHv77YpDi7dq8urEFrPokx9M8z52uJriW",
  "key11": "3SyNeS94pNKQZs3UnkWMNbVoR1cMpeGi6uo6xHCYAK2upqKLdAMH8eo9ghL9UQJrX6fS4Fsr4NTSLLLLDXrYJRxy",
  "key12": "eCEK6TWQXZX9wLTxmyZbszFRBkmiRLxi4uDzSFVES6KsYftVvirWNQznjnDhQu85x9gJqNNfDcqVMzj5qYuCeD7",
  "key13": "5YdXwtoRmvCcT9FNUvCjjTsbgodxNVKJVXJEEpvueLoganedkoqoa8BRo2knCbqmJCwJFAVakQoUxcKvovkAgrgw",
  "key14": "3AVH8im2BwXttrGLwnu9UEm3x38U1QB4wNjVZCRtY9aXKy7DRUpWVSPJXCEvyMhRdxFjGgGtYHhS7UVXVLmjRVkp",
  "key15": "2EGgPcePRUUdi47Gq5ZLoCZTKXoh1LcAbEwbyTxnFgwY2tWVXv3PndEnuiUsaD3pZ7teSxEvwSNjEwThs8XvARs",
  "key16": "4itimWTiW2amFyhN8Vftog5XhpDYmQ25g11JU4yNXZ3F9pjXAKXS9ZPhM5tmgeqmTCxZbA4krZ6Nvpqc8WgcFFGR",
  "key17": "3Y33idnScPam8SbrT8xfCRDrhJinZLtBpTKx2PJUGV1Dw5Jb8soBJGr6omoTNM45dYGztyNPzHeiYF2pzuuwRvKh",
  "key18": "5dCXSNJUpukLcKxLFGnFxaLY8uNz4Ddpbj6rLWZGMnbwMhL4a4dVZMiTJo8AahoC2ekyBPmZsvUZvLMZcrFQurWJ",
  "key19": "2TrEyRpH2JLuCgyRV621aXD5gj5NJ2FVC3gxXy9BpvDAMeMMy1UVVHYD5sMDHTHFDApDZvaGhyEGc2rRJaP219C5",
  "key20": "3SrVUVPXd5T5mUnuMUtf5jrJaRihE7MHcPZrzdPBYR1Z7LgJjcg4mXCpHYWMkfPkjbKUHGwgSaqCmXffreDbGmhz",
  "key21": "z1wTS9AWP6J5Ypu53GDueKioGg7zHUKhL7Rx2GBY2v7GXw5LKcnxHj4bnWVA4Zzz55SuHJcQd1VW8uReV82HbpJ",
  "key22": "5qtQXAyNwyULfsdJEW6yTsJfqjg6i8PHrSkuEjeQyqHfpAnK2zzx43Vkm9VjQncLeHBaFeHAVjzQ5NvMn4zAW3AH",
  "key23": "4WoifTrJmPRL2GhhnpksPbZx6yV6n4QQPhb9iuDBa7LvUrRQFVEkW735FA6JELpsVMVmoxhWgYnHgQjKJv15w47v",
  "key24": "4Tgu7AnzYGos5Uz3TKd2LGuJqj1WBvf6Sz96ULbCWNp4MXKUCe5KsynkKG6BCEzZNbFHB7cG3mjZGekRpGGXqRj5",
  "key25": "9uqrYVCbye7vzfkc9aeVRP18fMDG9dQuAY1cwWyZ57sMVz7YgnMBTz3FjHu7vUPjmcWhmC3HAknjm2F5eQ91yka",
  "key26": "4EESxjyQ55dcSQjXQ7TBYFnmg9oX4RQzWvs4RFhcCfRV73fYedo2r9z8s4agHV8QrSk3FwcYpJPCwAH39s89Cok6",
  "key27": "5DhtbthmTupBiYHQG2Cbc6C7yuTwkQGRicRF56prCFv2tZRZArEm5onpBzp9WQqVmxdkpvYF6BEJBfLU1h9WK8cr",
  "key28": "4XkDS5Xr6DVxCkjDqLA32AXAKbxjCZbtzbV3QY6wsP2QcUghm33tsxBG62me9K3yK3mxGe2dnPEUikSvEyPrtgDZ",
  "key29": "i3uQcL5X3TWYjBYBK8awZP8cqe9ne1uQNeo8Rao6uSZnzmZ191wE7c2X9tupwzdkD6b7hL1UmoG7CdwD3Gx6LBg",
  "key30": "T9iLnFGfiMg9USAPM4VPSQNUsBDF4azMsVezjMKTPnYZrXFHEJkMsyRER3tjy1QMz4aFG8XGshbKLif5Du2SrGm",
  "key31": "4bSAY5ykuJojzbfZmpVMycjJPkA3t3L1yHYLNH6zdRiaxBir2hT2r2pycvXCMpMr9YTMpwDYsMB46bww3fQR9Zsj"
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
