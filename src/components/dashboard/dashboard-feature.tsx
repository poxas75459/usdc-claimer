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
    "4v36nuEuSZmRsNKxEGbovr83DugKXGNor5u4pCwH2jvwUR8CaKpsq4LskfXrFdQtCmZbGFLu23XRdjGGa9P2XoZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnW3gAXLVdMzBPgVewnP5rSkhHdH9RkWnqYBguU7U4sYfXFC6vrLus7KLMZq4BYdn1GAxXfSwA37mGNNXHxBdKE",
  "key1": "59AV3TmwX1MBhqFVvkkhev2G2rin4dBbYx2VcDdvzixB8D2c68WDhZB7eWiGsUVCYB6mHcGsvW6aEwXVZXqM9Vv1",
  "key2": "2QiQpY2z82hSziGSguTPxdoKhe5P59FjvY32HggGYjnCUfZ2uhg7oHNWzHLpH5rG5erJy5T6wftNxKUxFGp2tBww",
  "key3": "4jHXx42wYvJjiJiwxt8WZErvf6vynCPQikYBd6wdrrwrszAf2CVGpNZMRVw4jgRZUS4NL1PGqM1ijmYJyxcDHaY9",
  "key4": "37q2nRopCgHRTTDoKEdgMBYmLtwNosjqX2LchCRuB2wdMZiXE1JUyr9VGPym4zwuch1CuzKtVVqV12YtEzY2d6re",
  "key5": "2qDX9c6H9KVhGGFPJthACGFs6PLkU18hmLv6YuZcGcKKmnU1LKXfZfGdn59qNxjCvQvWnCV8cviDeffDE2CoSZYR",
  "key6": "Um9Yd11TKZPMQjVncK5PnkxPtWzGwSJ6udVpaDgYEtMnaPjruVQ2mY5RU7SZBhXh2m5r8U1MRGpvxUCvjKbcZUm",
  "key7": "4zhLAGzmxeXNeNsqazpysLtQdFqvJ5qaEnj1sGwsxt1V2uxb2aZ5ydVEcZcsnVpifDVFRYYrxR4vLB5bHXTUp5AE",
  "key8": "62pCGGb5RyPXLcHfznTD25LbKLhBD5CHY6NanqMWBYBuU9ULCztLoQFFQUiN5JU4RPmjjFAj82hhVA5nX2VjSZo7",
  "key9": "57S31B15TvxruAP7KiBtGjBFi6bJUgHxAFfc864azZRX5FoE5Y7MPbD5hmDRAxwyCeXYoN85jcw9XPGh2GEJwPSg",
  "key10": "ciUsGrMVehmUX57jTuUbZBsgXRUQBSyvBje3QmZLfEXmBFwMrYpCA2f3ehu8rBdqVY9A1MKvrrLDMf9VVTBh1CZ",
  "key11": "g3wnSgVVfdaAbst5wi3exQ4gc68xWwiPuv8TqmEMtSBo3aDsLY7Wd4ctQigdMaLYTKgXAU1o6d2wPRapMqEbpXD",
  "key12": "vyVs1HSEYqp73zwjLM3zoW7nXJUUd42wPX24vnxHiWX1mMhovL37hez2P7ivfGHtAaU5pgRGXMKSGC5oTHRxFq7",
  "key13": "3oxC9NhRuDypaVCeJvHw29pPNjb2FvEp7cGhMynLd61E8PYZnLjVoBY58VeMssPDXSJ469ZqqiV8viLTLze7hqH3",
  "key14": "4VL1kArSKpS53bLQ4BBvTbAa4rqfR3ChZw585izmTvE1jKqptJNNMoRkkGnE86mhPdatd2h1M6AJRJYQpnDcEsyG",
  "key15": "57fdEknoci6zvqDfiB6wE9eb59FAsVv7HLntCVSturESn7JMmXp2tTLwxvobA3JbXmqoxoUWJg1QJjQYmg4KJyZK",
  "key16": "4c95JHb61vwJCRAwweMmVJbgy9UfsE7FQLu622VNyiu3hA4396HfqhqHJMEem57BtwVibcJ4B5cTNbFYyp2oJAiQ",
  "key17": "4zDSgQkNht1PKd26NykvCs2SEBbvgDtkzqwuMQ1zhG6W6wWfMP5ixYzm65LTgVEo5NFSaqnZkj2qZBrnNTkMGxBc",
  "key18": "j62CLJBjVoCNsfsz4bbqDC3rgcsRZ7aRtsREQeXPb6hi7dExVLadsziXvMbmXSfm6csdd4oCaEFQxseoyB5fUNF",
  "key19": "5NZtDGjsNCKEvtE4HmshiZisAgnFbgkemHcADz7dJNFWrhcfDuK2UBRe11nRvTYTnaJdddr1bQoM7Sf5sCBa5zMw",
  "key20": "53K2MmDTQZaSGv5nmR8tZ1oLhuSBNeBY5iMKbiexzF64dEGSn62xvp9NA5A3Noo7VpRnRjK5cndG2bPZEv5GtLLH",
  "key21": "4QwWLvJ4Y8iepmNW8NwHCR2GY6MGFRgBPjxoRrKbwaJ2bsj69QtBjEChDVT9ZoRdA79KJeYqpfxHu4eoaxtbTPeC",
  "key22": "3wbLGdRjTMq3J5MBSUyEH1u8Hw92KtarahNgXJKjAHnebbWAYo8NuXmERgVbSCAwkj3UYPQP7aosw76jk8BvryAA",
  "key23": "63d6TGJLxbzFWQGWaoJKxhp86SuNajScE67shJXALr2BYrVRvnTPww3hJM6PJXUryyEe8cwprcLSovho6o6inVAj",
  "key24": "25r2b7a9F5y6VuvWpeQzGm9YDST6kUZWAsXh6rfCGEkHNLH5xnmkbupNZnQbx3CBdiSg5cUnLqwav94xrNwgPptM",
  "key25": "59r1HuSCgXBFBAmT1tKQozeJHhKfMNiRXrqKbW7mAGPrZ5LeDE5dSoGhyE2EfRnN1iE1q58g7fCV4PqcupYFz9w3",
  "key26": "2k3DH1zH43xbdyTC98G31qaNgfLnzHDVuY2w7jXP3LnyrS8k65wZUpZXm3J7QNMdUAdMwxX5YxsFaMEngzLjjAiX",
  "key27": "2U3sYjUeJd6w3nFY4of9Anp5FcHc8cDZYNoo2Yc6QnnQk9SoCzaofhSmguaFoeZhsLVGFvdUZwDgiTzS8aPgHpEf",
  "key28": "4yfxnDGKgECg5EL9svJSd4gS4xQuyVNXZcpPy8XtMgZ5wAu8BGTs8EMpUpchhikMk44eis7ugaYyogJak8ZteuB1",
  "key29": "42SguVDJFRnc5qcVKEyVxmagwzyBagDtprjuJfAmbQCypWBtYgWgamnsyrBFpxspfNKwM1ahhVVa4QSRKRtCPhoU",
  "key30": "WG9BvphNdHRjPS4EaLhEXAqZA2zujuSiv93NifbBe8qWfxdBLpNyqvgJ1Kd1vReHaZ2rQkwhVQxLYtxLkBjPp7H",
  "key31": "31e1TnRhF3Th1p7RBf85iu2k1vfdhZ4qxVpVGp4S37ug79K5G57ow4Hqcz9Ekei9d4uFzZn4KuVbUzAduvWbsPdG",
  "key32": "giXmcWVySB5rCycJWRTawJR69mZNFZrzjwa3gjRB4RxLiLPwvfeQWd6phYdSoFfBEeqTjqne9YB9YiWB3hxTwGf",
  "key33": "4QWZfNnKnoFwjYLkLdA2njNihi63Csks7s38romU1mpE96kmsydukJZ1RDFf31Y3q57pykZqNzmi7ymPob2vE1vy",
  "key34": "x7uia2Y3hiUWAeN1oT9L6F2nVAsLRwUPAzJuyGJxXYWKWyF7wb8nCD8USQaNqT4ZVtPRBCsVpvTCu91uT6qR8jm",
  "key35": "5PXDnjDBEL4VVh3DnzgYZSPqcRxJr8hoogs8DBwaDX6DFj7faPQxqVvGzjzt2iEiJkwY3zuMwSykRmHqvahqurzL",
  "key36": "3XTH8pUHb7zwCsw7VjHKjdGMBfeAkR1nG4uAxtUZstyBVCC7unEHYbFmGzESY9brHkd1ni1EzY1parWggpu88C6T",
  "key37": "3wier14ysXL9a65YrecVDSGYeQrJK9JKVVffYiqUvhbJefDyxuQDGsUhohwtpUgBmggQiYK4SiSaVRbjLzhn5YxC",
  "key38": "HqM15oK5bdpG1TkQAuepQ2wcvQzywNiGoovQYDYgypEQdph8c1VXpHeY6jNbfND7bnyPzfAzTbiV7hPv1d2X9ga",
  "key39": "8RKd7WF9gt7znWMA2todibtYFyABDLmEAs8VShMhMHCYUtTo18R4WmucRxNvQv4njhMQiqRfCojeGeGcQHsU4EK",
  "key40": "5VXPRwCxKunXm9HQ3k6zjmbi592aj5THGNZDBq8ogPV9WdhX9EqRh41hodx8r3WYYJk6MrgRdRjjbcsri8NFjzRd",
  "key41": "3Z1VCZN9vKPZyXUaRwk6SqfDjfDvcSX9Q851vTUMC8GzYuRcKhyT942c4qtDFtFF4RiC7ncS3ea2FnBwRtLDYruA",
  "key42": "29doQq3dgF8mW3aUMYFCDXrSXHotMXgPQda72r6E1MmYH5htAg3gGg1HNc28vjdaUSd6835BhhNVdXYfmN9pQLEZ",
  "key43": "38muCcbCwDh76gbedU9rdcTSPrnZeChGmts1djuXF5ZzZJtRGeH2hNBJNoGrpKtE7qtXsNhisXXJSEowgWA1X5vp",
  "key44": "5beMrZkmhA9qY3yJqk76JJ7C8X2rRe38w5bX1Wb37MR7prU9P8D713iwgWyes9Sr2cU2iCSWUgb2cahipba3f6te"
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
