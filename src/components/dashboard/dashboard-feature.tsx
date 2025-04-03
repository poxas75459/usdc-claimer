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
    "2Noou5mnUQFPkxasJ5t257PRPfq2kCPxsB9WsiED2SdqCaBQLzwSypWxrZxAZzKfisEVqWM75G3SEBkMVroKwtkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hZs31Rr2rGSiwitWaYL2erWucdkU1ZTfuufnvzFcVckEYQQ8fc8G9gpaycfrFsCRqdvvRSDwFoeX783kaZnqQt",
  "key1": "2MuwXy16ZCa2MAQBnrhq6taeEJ1iMgAU1iN8rNMtMbPVkkSyW1vcyxTXzYn8gq8sRWW7z3oxs29i3tdJbjBt9cT7",
  "key2": "2NFxEwGwKD5nvWrjEb5UmGYS2zLLLJHxMgN2AVJ39k54YuQLrPMqV6YS7cgobGq1fAzam6FvgL27i69qPeXpRHSC",
  "key3": "4qojDLmBjB1qPPRseEi9ct7oCCUTi12wSfhN2bVnzZbXAY7S7Nnj4VKwRttHmRKZgS6UCVPYiHoUwrsG1sgh8fTZ",
  "key4": "2CDnga6QskuaZ1zSMYDwkD8sT6iPiam4BtENmokJD314d3bcStKCVQ942hSPpbGotH5Kpgk8io8k5GQJWJBydu1z",
  "key5": "5b541uwZsGxCrpzqe5RY1xNmiRTa1Dhm7jSEhFeGhLth6zx9QvF3i8GhyKC6BeEDHJ11nnJ9ymeaZa166U77MssP",
  "key6": "2XZjoKWT4DCMN6BWR43biMNRsA1MxcyTJEhxqpy1RyaSbmfzwX4Y9zdQgw1q1GERkZYXmdaC5xj9pUHxbxnVbJwW",
  "key7": "2mzXq8VXHAfF4Cm2jgGJ3gv9PruJTYrbj34XzvC1FbLq9CcHHaDUg66GJZ6bs5i4q53NQbMqscnojKjANJn5V6SB",
  "key8": "Y4Li7coLHCqk1fRnHhLm7cE6fiLjU8cTUvysWt54tALZFRhDnrVP1J6MHCGN5Zu29w5HQyycN9qHTAVWoAf85wq",
  "key9": "54fJnRor6TV1rXfC5ThpbDGY6ud3GPKgfvhAxJ8A4Mf6x3wpiv6zBnjd3CvTQDLoAC8JRZmbdKPWrP77gBBMnLdm",
  "key10": "UctUtZsLdyFYJQsGLAmsJo2Y9wJyK7DtzaKG9hVLWn2Wiy53x4UX5xj4ygmUZe4qQAuHAey1pWmrmu1i7KpcxfM",
  "key11": "WmUCFy5Fkg374Y3avPzsfSLD9Q135xz45boy6ug2VHYKTBfNz7DoozXwRp1hfcHLM7VwmWj6jdMB1LqM839tXUy",
  "key12": "7sQ8WYzGerm815n2KNLUHVcZ4eVzA8CNYMvKuiizAtGGT75iEcXhgNC1vesC1XmuNWJzqYrLx5EsJkihCQXVmkj",
  "key13": "5N3SbtMpWxYXwFk42MYHsjt9RzHY7kERUyA7gU5X9VvgeLveuztiFW7CTevx3hQQfCFCZPEPiNofcgPhMWxF2hWU",
  "key14": "2KACgW795arSXhUuggaetTQ4tGBVncvPuqN5LNKAA86BWQYB3kbRVoMGQjtEaQxNrFzdjuNGWFqvhm2PLBQEG88J",
  "key15": "3cHhamon3LrkWJVmefwfbyViPxQhKjjTGmUyJiKb1f3TbyhwWD8iPug2SZyTg78q64KJw5bzksrLxZWSCKdwNqMy",
  "key16": "2EudHpXGy38CXhvT9U7WT3vPWsfv3LyLAPfMuC6LMcfuffjAUc3qy15aTs1uoUJvcVhhpjzxdNKafqGa4f7KFPFR",
  "key17": "65HfZ9SVy93Z2KrNusamAPi3e334REBL8edaiJhSCV363KM4tjUe69NnR2meCNrzzusayi4zQMC9SvPZtz2Kzh8K",
  "key18": "KhYCZwnYvuoqP7HZMV47SJ18PRbCwKj2DxivTVdgZbUUa9U6zSdbFeqVSuqYw6s9srFSSUsk5Yn6fkKbrsykTf7",
  "key19": "211pYb4Kb5LZiSBPhTk4j2s5L4tsF3SREKWq6b343JYiyPQxzSMsXstvAjHes2vQH7WyCwe3jMYy17AfFqptt3hB",
  "key20": "qjeQyMu1mZ7hFEyXpqXxyCMTvfCE3AYGCuCXjeT9F4EGTnSLjiokH6YPApKzTtZM8yMY1bpcunb6iJpSnKAY619",
  "key21": "5vev3UJ1Zk1D8WsqAA4MmkhpmMg2bF6FfUcrb5ArHt1AEKjvzr5B1K8LF1uA96JxNccVxNbW4TF6NvCqpDqf55gF",
  "key22": "35wCTHM1NLuRkybJXXGwaMJm4j9uctbAxsy2BH1sC1PucaQkAZdkNQWD6zuMMgpeyjUf7Auj9amMSKr6CNkkZMam",
  "key23": "2cL4gj3HQSpGtUvcxXHBNVJWigoZ9F25ar3D1ECNyD984uYYRL7ZiHSznZ8NhB3dHcNCBSFG4P1WSC6Xw9VgA5k2",
  "key24": "55jVmK2CZey5eJfAXV3HY6W5eHNVLYJoajrUNb53CbNXFgNFdwZsLbGokA3cNwpsxZ2EAriZr8CG6835ZXXEzMzh",
  "key25": "5oZoiMX21rJ1air29GzvPuD6mTYNwnr6MY3kwjrjvshYK8eGU8Xk4bJ3gM3UUb4Ps1GoWn4RTx6dK9fLa6KHUuiM",
  "key26": "418RyabgecX7S5qhZ4WfjXzJceB4nGNYEWNjye1pBs6zTQk1MVuTECqZ5QaLMv5dq2c4jXMp5nuswdqRtWD5fkVW",
  "key27": "2HAyw4iji8oD8mEZRjymc4tqsHUtcpKCzSqegvsNohwVPSsjvMz13Kc6tUsQHHau5wjPdyyDdn4vCpoGdUkCJNhj",
  "key28": "2eogaQNFD95dAbNGLqV1gQX36VGF2s4XCziBe2TeLFHyRPkr4WM7YzjcSJuQud56Va5zwhbdWmy7e3rhesYcoC9e",
  "key29": "ryttjLFcYgcVySbnHgru1bHoe5qEc2BNHy3dUXiW33kdf9Znx7sapHaC2mfiEj66MtnF35XS5hW1pWHq1zWCdHs",
  "key30": "59SNbWnPFyTNk7SPMyLSt4qRRF4rxQfeCqPrudjkJD9YBo4yNE4zqrLiNXp1VQMCBsWJf47Vpvyxs7M56kq2nNW5",
  "key31": "2d6RofUQyCwtGJAByU6aKSvukrXeN8Wn5U9SfZvT5e5vTk8xq1kuJkDuxqWvYKSHU72dyugnGLmru6M6YhSBpNQ1",
  "key32": "5bbgnNWWz3QB7WwdmzpB2dnGcnFhnhup9zFjs3chmKNJbSfat5F1KtPACi35iVwjcnhQ7n51cDLShFYUXkbrHprY",
  "key33": "rXQyp39qXKmbpGgzPuR3eSazSVr65yC5JUnoM6e1VqrN7LwrV4dmLmjtVsWBDaYCiRPs7Uq4Zw9JgyhebYyndk9",
  "key34": "BqDNGUo4L9YxWcnzCj9rdBDYL4AjJyCsSD7vSGfpSZAgMWYW5srLZgUvXUiNqf7SxFsY2vAH27EbMuWYCKzVhr6",
  "key35": "Fhe13hwQL1PVRRVFLWSUfUPZcABBHU1A8WtVfbA5yZKtp2HwfPbD1jguo1Mf5ZG16759s74JjabZGkvKtHMoBhs",
  "key36": "2H5Uxb7kTHKNfvaxHvzQT4AxUsEiB9L2EzVm7vmuXzPDyySu1WWdj7rbayx7mBKYcnS2xt75kxYqkNwx4vQ13PzG",
  "key37": "5JGgnanpnx4ZnJ8wMwBXXgficGhdegYZkb7DTigQr45rvRmy61rpwBNSLYFCQzDstAs9PjUNMiiKwNf3ihGw5VrC",
  "key38": "3RKrsG56yS9rLGk1jDgCYfKP8spaWSbVPFgUY7fxJBeGrmDngpfhFNFgZtvt2ACKcD2mbLmY6f99WyaYCP6MuCkY",
  "key39": "3QxFa3FBt7YHojhzxmCQXVNqotcEcGzTyQueFxUPTD7w7YCgnwEknt5XESNZ6dM5oF5Hzvc6AFxaTB3EGsbJUrNu",
  "key40": "ecVEtmEbJB7shx7zMxv7A7Z9hx4RDU5YSskUi7gLYNs1kBNfcXTt1xKhsspWrsF2pVto3Tn9kNM8PyK7ssnbFMk",
  "key41": "5hgwrNyeU6KXYH32T8SFzmVfyJCKi45fwz8Yw1DwAfRKyivnwQ7PjP8hJDiLUfzQDBhTPsLz1kdthVQWAwH6gcRp",
  "key42": "31MShPsXFpwSghP6QWQVzFYVpNwaCRwZzixWQ8DUZ8KqqFugPKfz9UqQvKrutb7D47iPPvQAdhFm7VjJBJUBJYiV",
  "key43": "78JzRJFRtKaUiASeutLPqJBNci7vhecpnKAxbBzmQoTFJBWSCyHCSCt4QvMNvG8YNYFAo4xnqG1Ene1NQGzFFpg",
  "key44": "3Qfje9ae2WbcRA42iYd2LUbzFCrvcPGc4s7ust1zPQP9xzRCaUvLB2tGZFhNTMWp5eZcKme2h46wjd1JaRg9ghBr",
  "key45": "3LLv17EavTgp5HoBPcuw2q1g1kWQWzKPpeiw2TyAZJKuhWvi6TToZu9hQNdgGVtjSMMnqi23pPeYwXYTAjjMLwNi"
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
