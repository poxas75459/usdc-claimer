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
    "389Wh7JNN9ptc7omnzx2jcbZUVRqqQJfAxpGGZs3fSbiCpwgd6i6TTttGPQBB5VAyiSiYHQdz6TRJTKVComLGyoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yA5iLSknJHEpaEUGfzxb9XdAhCEqdhhjLKNr8Te4Rg9uqaKZmJe2AQzsN9EyKLhcNEHrYkUDULZWnHEGMerjHQB",
  "key1": "468716zRdHXxKt4pKKrGULGVgD1NUpjAuynn9SAVix6DtkyPKbnrUzjBXCW4kSdpzA9cnVQavsGGTnPte3XVRQ6Q",
  "key2": "2UoZSTNrhXQbggUGtgZrYE6qUFT53jnA9ukXtzL3VEkZYqSCAoWDQghZDT5Q9LKJgSwGWmUZp4aMXK2t8DgkYZHg",
  "key3": "245oACbgtDt6ueMdYVxvPqSvnmo4rThbssPccUxSdwsJykoiys1GjGFRjUT9M9sS7i3KqQ8NDEJKqECvbEfJgCcv",
  "key4": "2phVCWKNp3st8uhFXGcXYZ3GWw9eyWhpvg14qbncSFxUiXL2U4yqShm4kywAntkcmS3fQGqFxY34wBR4BeDxb5C1",
  "key5": "3qVC5r8SRb7SS2daGm6FMMQU8ujBJsiSZTYSEfJqQ6wSwgMSgscms2RxVxrxyTUFEPzBAqXoJFycfGdad3WwZjFb",
  "key6": "GvtiXrmktHsxZSfAPy3pDwpDGkZXzSNSXt8cWkbB1hbKSYmNraRzRAKMex1A9sissPutBGv5unsy1dJZ9p7HwGb",
  "key7": "2kwHNMQxwi7SvL71RwT4QpnCCTv68PXqPW6hj7iwQzm75DBk1RJGMrfbTACYzTjuJeN8KHnzcCHqQiVd7ZaWoGCV",
  "key8": "DtXLWPbhnBVJk3R9FaDpXdwVdejN6r6WGx1oRmSDz37vg4Wsq4KTXKnkYwed2jrghTbe5fhmS5z2vmq2BND3TLU",
  "key9": "5MP18urKdRRxkb7LamrRoY9iSaJjK2VT8N1Yb7e7EvuZoWrgjhRC6QZuPNmAGGspc41VwKSin56JoKY5Vo94ibev",
  "key10": "5TbEgrSEp6XmgXkahri85qzZw5iWpyiygMxoothMJVAACFmfQoCKunjJhGL2TFSNsepG1LkJ1QFDSBbhfv1U5rHw",
  "key11": "5UxGZWWsCyzm5NDfB22bwwDyZVzJdXCZb4vLZgKG5YA139nRvuNANGDGHYhyXAMSK5bvewtyVwoJQV4d9VP5MdoH",
  "key12": "iZaA9WTMMTHb76PjHncKEguR17PpbKaCrQHZyJvesazCePa3mYKimUe2erB7jJp2vreRzMrJubUS8U2tzQHyb42",
  "key13": "5dQQiroePjz1iMqxV6vUsHRop8Re7w9V45F1X6B56GWUqpWRvhSzhwqyxGb16qCbprbPSHgXFM9Yha588f3aP7ek",
  "key14": "5ivUXLxNqmnk2AKriiGMWEfRPNBJqRykXjimboxRMy2nfxyhsBaCxFAmTP2SAo4d9sULXEuQZiWmcPYai1keEaM6",
  "key15": "wQ3UAY2teQfdSkTuzFqKKBi1kpe3sZroLrJ3p8QdKr3naXtSVthxraJAuNh6g4zMJXhrPKmb91EBapdtbYVhF6r",
  "key16": "2rjAhGbHTzjWqjsg2Dn9dvRbG5Dy7EmagR4LPc1naUqdp43RNzR1viaWYoycsasHd3SgWyHwC3kPuJMRK5hh54ye",
  "key17": "5G8LCf9pcm5EkMUd68w4UTukDVH1sVp7ZceyCUQW1LFMKwjxCSZkndqyziQkHXRY8CMpcFPn7zV9xQbS2TsMjq58",
  "key18": "2Ast9fb2Vvt1uENpKbo5cSnJCry8WWBsYL678i3orLqnC67r3M38LzymDyD2LokLnuRLbjN5iYjjBPJ4fTAmShX5",
  "key19": "45vfKUdBwkNg8ijdhv2zkpCqLD5yeM41h9CrX8wgCX1pyWTHSrxfBLF49r9HQ8MWmM5w2Y6chqfWkBt9dvmJPuhf",
  "key20": "3edQPLUxUm8wQ4DrLkipvuJEQwv6rn5nFBpVRekwiEi2NMuCRhfTSaMfJaFN297KDe16u4Zy69rPRxVxMnrypGJV",
  "key21": "sQ4pRdRmE8HkKJx2NpK5QLHuHdVD6eRt8coum1NtJjnqJHPdgM99d9nNzx6iJ3XbY2sLgmWGPQsfAnSb3gso8mk",
  "key22": "67Y6q3DrH6nDBwAfwE7sWsbxWBbBfomXetGWMc3Kzakd3bogETx2w3XqDdjUjApoXG54gf4zniV3Tkd3XVdqKZ2g",
  "key23": "67KTUGeUBq9xJdgZoe2bbm5nJgbL7bGf7uR83ysKfkqwY4wbKqgErSy2b5MwhuSaqRddH5DR1L1BCNAvXB4rBvW8",
  "key24": "4xHfCvdzui6Sf9qmt51EnYNdGVEzeCrUaaG4zw5d9niJHYYVM9s9jpraUfkYgFnzzutqn8rQVacF2BA3ykMnEZ2b",
  "key25": "3MF9krep5MVAJejEuVpRebTgTqfuyVAtveSibZQBbtCrntSho13189tYWrL6QjQemhACfmRAY11Axs5tyLxMXmED",
  "key26": "2wHg7fonenZgCXib5pYBp69rBm828wSh5yqTEfzKGNMLBByyz8jXxK1wtCioFK7XC8Sj7QLXX3JjknFU52U5zC2E",
  "key27": "3FTDjmsicgeJodKrQDWZm67J6akFP338HtGZ8qxC5ZbYsjdyDpXPGhCLsoWtETCYY9FrwB6njP13o6VFoKgyLnVB",
  "key28": "3RAiNfU9Sj9Z5445YBxwpnAANREPUByoakVWnQL4ZPhokGqvSwFAqRL3Tg7Ecs3ZTDEAQp4KmPcS2ai7WhjoSVoV",
  "key29": "5kH6xG8dqnm9FmFHKEGALyQ77LRwAtyTXsUTLqUNx7pV9yUy4BfJjqu95aDP4jaZEPdh8CFKH4dfMhs6vQQgzkFe",
  "key30": "356dqDo4RSLSuVZC36kUF3VpaMh6wTR1k1wqvim7YrvHUpB4o7FQjRhcgw4so2h7wD9eFP3hNMBVkkkFbKfQr9PU",
  "key31": "66gvT8DescsKJPJgUM1BURZu8DK5VpeMi27e2qUANkRUgQov1hG1kKDJT8E3fiEM1fpn8nsVojDTuSzs2LBCrbu2",
  "key32": "3PddgNZwDGPUGXB7eizvGxZjeURvnF8PHNoS7LzmftvuKUrX1YcKx9a5Uouf27jH124dbHFJ1MhEb6ViCoamAzj9",
  "key33": "22zLg6RYXAqhx2bm1zosgHp5FQ3BbsyG1VvFRRj2DsrnTne5sLngUVRwqBbRTh3aXxij1GdLnW5yri2tJP4oP5bP",
  "key34": "YtoG56Fp4Tn8mwWb1WjKJmWziA8VjNUU1YcQeBt99d5NGGgwYnu3QTbjRzT99EromWLQJDbN9jw7UpNa5gGvHXk",
  "key35": "3uWj1prtQAJxA7X3Vh6jqYt5Xg1AE5y8CgYhMFAmzBWxvJ9gRiT2sQE4J8emAinTAqav8zSBjZfybu6L5dCjDdeR",
  "key36": "47mMCvZ7NKHxDe72aNeC9ZsAs1kpJZzxR9BP3oQMef1KWGNU22cfJNNVz3oMNffkfSXPVu3jcbwvRjXvgNU88tD8",
  "key37": "2HDJmQXn4VhtoCGRFVpWPW8VDz8wWVhgXbTFJC7mBJdb6QaeSHjcRwaa3LVpgS1uFvrzYCMpr28gAVa16tWAcjqk",
  "key38": "614KyyP5RPSjuieeB3zdPK3mvQ8M5x38Ri5vbBWwXkrrK8kZqvB7FAyDn1gxZAuWdrWmStzHn8UELoDdYrgVJRMc",
  "key39": "5djC5d2VA9uS5vWYpcXVaCHdTvEF5FJZ87seJs93n36cW9fzhn9X5ndciJkis2ceyrbV7KuiHbULKsoxrQGbVs9G",
  "key40": "bogmDGSG6QvGc8TAmHpCKaSZn6Yikpgk41W2eDc8eGDniEG8mg5fLh2xkaRpXMfkjaqLwxuV3qu5T3NspTM7qnw",
  "key41": "2tBoxuNryZvH6Ky577rcv3bEjywMaBcXhDyXqt7is7eqegsMZjwL8Xk1aXp55pPx3GpF3Hb6HUik8NDdxzW3s66F",
  "key42": "3qb6te3B3FLQhJbWwMnrNMGRmENBcEAuQCJXr8AGUZoYhhiZcNbtDdyxJoRYEYkppuNTyn6GZqDbnSRYEgMKXYeJ",
  "key43": "46j6qiYqgcDb3P7Voa3wR5xXrcUA65CKfQhZZ72MmAWww2CC62MbMccMpu7aoFyXKue1M5j8xu61TLXbDTUhke8R",
  "key44": "38pDQ2otMS4BEMyAM7PZQdVaWQ62nY7tckQAJeScnxvq77uYahToe5edRcSKH3ycUETxaW8KhqP2bAz6hXirfrJ7",
  "key45": "2g2CZuEggdmmT665u6sDpnfvb2hrP1ksM2Vgu6m38qgNsphahXcDq1npui727B3ZCiXH8qGMxMfRsq6xCvwNktX4",
  "key46": "66yChZdbkzVa6ECwZdgtUbaeDpisUi51JnM6VHZxYAtY4vaEGmu2tzFYUVCYcJENbZGYPyiKgpZm2RtfQTVTUMqz",
  "key47": "2kpGhT7NgDkKqcSsWFQ687HXgTgN1Zwyn6NLwvf1pNjwtYHbwjbMrcPWkatf7X188gCVL5LjuqBJe8bKGp4kXmet",
  "key48": "55bqG49jyZg3Y733bMVMHFSSCTGi8QQeszYvBGp8cjGumBSjdaG6gRPshHhAxjrtY9htBb1ihKJ2KyKDg6NBuusX",
  "key49": "52jzBuJvCBDFAFmZ6iviedVtc6g6byQZY6hQaQbm7G89oYSheen1JwzJ4z3eDJZui8NhP1LMif1Y31mtz4vyX56x"
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
