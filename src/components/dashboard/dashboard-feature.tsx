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
    "3aidsnfi8DtyLyEwfBQoR3mQrTicE5bXrS9EJXvT9AzEwHGHQa8Mi1K6zjsWfmK2F3BPu2i2pEbyEXefRgjy2jRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nHmRT62tg9wBLX3g1kohZUo9HbqBUrCJLyoZdNp2JTTzLzGKYyLmAxoJZZhnj5SrWr6dZZgkHTkHaUcHSErhih",
  "key1": "dqzpXo1uddyPHwvG48p3WC44Xq6egi68ps6ZEcSJ4sqS3YVf1THo153sM4QoeygSpwC166mndXhspHqaRskhVt4",
  "key2": "3g5qSfTn351kCsGvjJVWrjTDuv1ZB4s3stumfzzZhJCfhWy1YePHUFiz1misk65NSLhWCDYRzdu6Pxb7bvhVe1sY",
  "key3": "4UDYViMJwRfEc8W42FZbJRQ7gL1xpyLjnaXcUdXPs1J7vfYNYsvDbwKh34HbooLgGaapKTJP7rt7GwAfpwKWwDxW",
  "key4": "2HrZLfRmN2Sn7vLr5yab6j9N9Tqn2FAywFsAxRoQdcoN4uUTWtjqME2zHoSdSkHshbqXNgC27e9CJokrskCcYWo",
  "key5": "3waPzi5BRvNc77qcLuNqauR9UeyUumoaBebWXCxFkjtCgQy675ZRmJfYsMC3PTDyT1mtnc9FEjdHWErbsiqo1HTG",
  "key6": "5SWLwcedc3xbURa4wgPFLKBKa4hhaMECTb5H27EyidSAX9rtUAye2Ec38ggcH5V3FyAdyWaK9rhNfcQ8ACSPApjv",
  "key7": "3cKaatD9VZyTmVx7DFzYLcVPzdoA7ZYQfHqTUxcHEGdC5YHBQzeuiH1M6GuNvfLHzuwnKJLQTCubvyasWNFqkjaX",
  "key8": "SA7WzjeevDEUr9ZRLx1BHijScHsi4Vx37z9VDeFvRnA9iMPTAvQrDzeuLsDStHJEimihrrNq5s58Vvp1KL1jHhd",
  "key9": "jFWtFjY6Zp7UeiSm9zNQDKAba8c46T4pYBePZitnM8JnKyZeeVV5G59QRXnixCVGJksRhQR2kSdWdT3oqch8cox",
  "key10": "5eaeGMZKqugsFWfh9N11CqYS5DLpwgaB7RJPbMjFFobZQeHfscMFTPhsCZ2HHBGCafQv6exhCpquN2pvEp8XwH1m",
  "key11": "QV4Q82EzHsmUtBCQF86mAnzfcJeCN4NkzeM7txaex6onW4HkGxyG4EzxBrUTKfmCuXvnQFw9kw43fzaG2KTzWdq",
  "key12": "4zW7GEEHJ7XS25fr1bF66M4G34ziRxmPph2ZrqKKszvmfrPhr7y84GnfwoprDrW4ZBwg9fvmbUCaHSFJpNZQYje6",
  "key13": "2Zn1Fdm5ZEqfJ5wrapc1yvhee4ek84TSj4VwyaoLLS5JE9Qt9LmMz53oVf1mViBsaaJk7JYm2YyZqerm1JP5P3H3",
  "key14": "5uAkQocF64ykgrn4P7jV6CQccQmaQk79bfQiYuJNgsAoH1QQkPwfonecHs9TUPHkq5t94ZTXK4Q6fh3UE24aF2qe",
  "key15": "3HvSkxSujdYbw4q9JUifsuuGyZVZibvK7CRhZfEL46JCfMFMcMSo77qTQGo54jx64VhjpKS1oq2Xo4gb9xicGHbG",
  "key16": "Fo7vSEh7jUAQvT2fFX6WnCcsHAo8AE1EhiooJkQ7pWAgmsRDdP6EQWWtbwbmz9QhFB3vATeQAKZWAYZhZAt9h3V",
  "key17": "Ueh6WCNRfs3QyAr22nuKccUqEM9SM7RpkxScoPtdC9qu1vev728wsdoo286E9XGaG8M5dybUpYijoT4nRtt7gyb",
  "key18": "Lprj955cAqmGX2zsohCVhS1AK7FpCQqnP2RYgWb35wweRjNFA33jZ7ZkHU8q2bwg68XYMH43BNRG6uBBM4pB8FV",
  "key19": "3NJj1azwrrkNdvSy9SMGvivnyCqYyEpQvUwP7g9qdWB2K6nVz3ndgvhyXc8PznndNrKneyFce7QqX3uv31XvAa1z",
  "key20": "21wNvM3g2xNKXqNZej8DU9LNnH6xQHkEJUAhabtLpGD4c47UNTSTx5gVRDWULLGQSyTYYca7iFUFbiUS55jAKmtS",
  "key21": "4ZzYaX9Rc3qu3qU2EqVEGjPzMv29XiNcwmStPsgCmAJAgL3qc9xqqcBSP9KD22RnGfmaCMqckkeufAPUbsuoUkF6",
  "key22": "66mu9zywyK1ZXMGW4nq9GCbJQ7tQqt6Gx3kpVpVjkzqhAPzZKjoBbHhQn4o4y3wgga7HVRcMssM6ZvVzAYcXuGr6",
  "key23": "4xRh5KXCyRVbiFwQSLYS6XbyvWLmUXRNYpeQpW9Q4EEHPSmztQjRkkGUnUjT3koHiVWWvK3HY5FXPffZeeZmhJFr",
  "key24": "4Z1QzVQZ2rW7VeFtvBYpnxoCNrGfRGJLGd89pCnGAJ6eKkbvJSYGszTrNXwrcAHqtHcUouUMQz1sBTGkvF4oBbph",
  "key25": "5ofA6Bh5jwif9sFx11auWof9dmFZWi9xUczsRTP9BCoNWTTmTZX5NG7xeRgAdWAyefjmYM9cNHvwLF81vjMywJs1",
  "key26": "5eYtawAQyrAmbx57bMGM5ChHcjyTPS5F5ofY7QEaL7ZYXSNQhJ5vFTkuXqewoWJ7SdXt4f622WLqe7kbyeL24ovW",
  "key27": "2warTvRLxwEp2CWikD2484bDqZ8BcWbxsU6ju438vJYGa9yhEgsfktscVNcKbhLkFAyqz9yiS8hei7rqUsMDrESw",
  "key28": "5AiitPGDecYBvG7eQpSpKq6GD3ah1xQDJjwzs2HmrCE7c1eGPwbWNz93UFXah67UMmgcyUk4DXjD49kdKbWohjxF",
  "key29": "2af3vdnFD5XoEiikhptykhjws1HYavGMkHRQkUVk6m1j6uhGa11wo5VGrt9kYezZcWSrxioBihY851DKddQdXK9D",
  "key30": "4zCUYwuxsF4ZKYDEkKqatfwaAkTDtq92hDqt8bfjv6R32FL76TM5j2gfmpH7uhK8g1aXb6itRTeEjyZnmJSXfAjx",
  "key31": "45fk4VQARAt6Js1Hf19ztXDQ1AEMpGKLYPJNou6dEGQdRm9okzpSoKUGyngKHgh2DPtSTYM9k2XAtNSkKqAhagod",
  "key32": "4hG7Zb65ECpRtiiopServgq6kAJe3AaGoVjeqGQavvryveT7pi7tDsP4MM6QBJhkPDgk2yNuTWPopK4D9CYLYDYS",
  "key33": "4F78tA11MufZLGbCacP4z3aKQMohd6kZeHfhtD8FgfLUeKdYbwVqbk9hm88j2tBa2jdh946N5bm5YwTMh6DmBmMX",
  "key34": "2VUE1V8bX7BGQsHnyS4dx2fnPc58mfxqqk7pFSDhTyiEbofR6yizE2BewB865iDhMZoyGn7AGzniarYFJBu3TXev",
  "key35": "RX5obW9QbBmLkAi2Er9g3sYataRZQCXRRUfiWSyvWkPjT2UFyPzw5aw9zistqeqBEKmrmPt7sVDF7y3SjDZmf4H",
  "key36": "3J7iWx2LxDQH2EBqYMdUHZYw1s94hCiiEd154HxzU9C7PH3n345HxLSbmdA1NvmjfH5Wg1PgHtZXWb4QhNnLvfvQ"
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
