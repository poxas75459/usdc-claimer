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
    "2gLhD1remiL5JXn41di8aGVv2PjFVq24ZNRo5LMANip4YEPNvxRdk5zGPdQ4rUjt4FpTCmMLwx77mbEXZkk6mrxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qrs25S2xBJHxdBWUzPG1qoveRJ9r3mEQnqn7JqwiLZrgG9NisbBjgKG7Vgcb2i6krSpchB5AmYqnv9y5TdwnoZW",
  "key1": "tpN1NSrPphxX9TVuZPLy4CBpjzPvSqqTiapAGQyEbg1i6a1bvs4XWuDDvmAZHZ8isv7gzDbAW9XTdrfut9UFP8C",
  "key2": "3kjStM3oEQ5JGZSiW5rEys3xmsBZJ9FWzTSsB7xZZs8qHAy1XAisHCaY8aK1jguR4dnkSdFKnWXWFN7QTezSQ7zg",
  "key3": "4pMUawWmBzGHJpyGv2tt9EbRK3wo93rfxXdQidUkpUjTCngFWfNM5Frev1sF1LDAXoUkeS5zE4jEpdhnMR8QY8N3",
  "key4": "4oyZwSCpEjFNhXqRAWNVriHTupZxytPfkQHoYg7uc8p6owSWCYk4vHtHj3YQZzZMdBcoSvf6EmpPZpP4pE1KDCYA",
  "key5": "29QSK453gLrTA2EXmThysA2AJ8Qeaes53t4GZ4EDxeBvap8S4s9xoHgv1tEU3Dp1BbMUEabUhbMfEymXyZnbrFVa",
  "key6": "4NBfqfK7rCTJn961bNk4yUGYM4r6w5h6Ji3Es7rFwvzKKGqumygPyG4dNC7yHMfnKxTgpe6aZym9ML95E4HuY6u9",
  "key7": "49vreGsaZ7xeMujm6VgAtr5x4F4fnCe6RdF964nXyRBNzRTpzSE9tZFQWpYRFbdz7AHAiWpHiw37GcWKJheE8hcw",
  "key8": "wjxnSdRKNKNuANdByBg8cLNAqHMrfFbiYCKhxM1QJbKwgoE7Dn1KeqbC3v4meiVcZ9D1ifRmpesv1aH96e9JK7k",
  "key9": "4GTyTx6KLzTPn18Kyec2w7487e1a5ocCxpGgwqV51SNHCn53jA4rfMNWayghtJVnAHqoDpJ4AzQmQ7mFP6r6XcYo",
  "key10": "4zN15xeDg3SweDrh6Mi6doiJCejMph4cHk5PHfsaCrMzNKXSTifBoGSXSqmjDrwRZivmqZNRL7toyAW9pd8kiTmi",
  "key11": "u1YWJeqvz1SzMAun5t8DMwz4WLM8roXZGdc9vCBWrhJFGCeK92AXD6LLVdm49ifA1QBFPMpe5j2N3dSw9ygALTY",
  "key12": "4NTgxzVbLDAoDGcuQXvR8xXyE227ds1KrK96VYoMqA9P2YNwn9oc2DBdYdy8Xmn52PT9Czoyy2nKWm7gdZKjadEn",
  "key13": "UXfHRe247FC59m2rAfKi64PxVE5pVi73ndW3Er4F6NzNmwnTs9werxMvVxNrysRoAtjUB4imGN7JHVvcwE5PCqw",
  "key14": "5qKQJXCM4rZcjj6S82eht8RyPZV4YiVGox3yfw9BekBRMoyrUXXwsXJJ8efor7iCP1Z6wv8RAWmi9zxfZEoUxqwD",
  "key15": "3NSscymYF18SdPqhj67LS3taWLgS6QbWME9mmYMkiSDTq7BNpCMZTpXsDzCatm8UQ8hBbNuZQ5VkNwAhg1DLwv63",
  "key16": "2PexSL91uu3YxFtD6MNmv53t68p7nbcjcgvPuHhueqDBgkMzoM3FxRvJwjxnWT1MJywn12ANvBqUC9ZLUioUoKLP",
  "key17": "3sdtsHkwnaEEpYRqRwG6NLHoSpNiuas4oiVKPjiCezRGhS8gNWE3eb4hEybkaCjbtBx8QFDypSZXnQ4FSmZMhDcF",
  "key18": "r4NP5a83KnG4xJG2fDyizoA22B3HkKQunfTGFMLUrBjn2CoeYS29aAEVGYf6b78ritX5ameoJk6h7R1eSeFThwq",
  "key19": "5uTzvf7P8YuxvPtWqQ9JZ4dnWz9BXr7c3eB2TL5CetaBoeHR3gD6fjQsLhW7SxdtFxhFaa6VynpQsKn3oNdXQkSA",
  "key20": "3BNgkzzuJpvmwnFXdXdjWAYsGVEkZeyA2fnxPBvnn5z6M9usaDnBrEds33bZ48dvsWCMSZkFkqBsX6kQ7ppTjqui",
  "key21": "LeSUXpkUxwQEhie1wScJyN3UfntamNJGcGbTg8s492TeBUn2fVkKb1aYhJ9nXXLSE6YETWu3djgsJ6LwDaGMjJp",
  "key22": "2isdvruX32hDxybMCJG89Z2GxvcJRsarQk5JP7BTDtiDSCB3ADjLq1Ja8Y5Czet2fikBtxHda74XLpUnWR46um6t",
  "key23": "4RDn5SUAcyE8QernwRFXmQchqARdfAedLMcVKHWjL3jS9jmKpKabqVRszqd8cq8kD57RA2273U9mCLF3wBprz9hj",
  "key24": "6uvMktumpRzktnpcFBZDBt1VjJcinrwF13VN7bm7K2iR9Gt7LGiQWiX9saU2orhSB7MfCxi8WBAdnppAvHsx12K",
  "key25": "2GSLVLGREj86pkwfeDvuUzQeTRuiLwoKsFVSsQ2f4D2VRdcfk5N7BcZxi2wFDE4pzg16bTUVwV6tP67S9Gjq9MFa",
  "key26": "zM5XyhJqPwQUwD4gwPxKHnaKVzxYDqXdGsp1aseP7kPSokqumBg3WFZnxi2Bhxfjxcb3q2m5hf8iwgTjNBqgHvW",
  "key27": "5AJYML2rJRo5JyGD7bbWPYqBQYkjBxuTvdfmNWmFrPMtAj7xXahB3LPtoAHYLfswP3pSGeVmSn6xWmXMNAacxjBC",
  "key28": "24wjmQgk6KHeD7KPrYc86iqwUjHwxNe7gJQEQjJou8kEmDbzRFyUqSUx9wqkngMExyuhz4AmLusc4imKTshruZim",
  "key29": "2YZedtc2MkKbQR3jhW79TY2EKu4yg3Dr1W5x9LbP8Ki58hp7nZE4qfRijv5u6XEeJDEsyB8TmUQSYxANGhiR73cF",
  "key30": "3Y44Ruu8a98HJQzbxaWTFqcELxaQczqkDGDW2kzy92eA7fmKyJUBu5KXtKwANjjZNZ3WxCqL8SJRCSh5itBffgw1",
  "key31": "35axRD6SLc4qTr4iaAEnEXZJNXZPxMwQ7iFu9tH4XaMdzLt6W29e4oaHogA7BzC3ofzK8HsoB6WjTxqYZDrCgVyE",
  "key32": "5arEUyYaH7tcZhWYPusj8qGqApNgABAA2W5ENHsBhKeh8xkh9KgqM1yWxv1qP7oPRHnWRB1LDvWa2eo6qVou1z6S",
  "key33": "A99QPK5CZAK36YZLMGJhBbnJ2ZNDbzt5p9w8TLsxqpPSk7PuxNMsNLfGrERkzrYenrSR4MMNwFx2JuqeN95eqMd",
  "key34": "2BmrVvP9CXwGDWdkRTD58L96ePAVkzN6gUvqLULAfAX7EQ1moo5ByHx8Kutk4Ardgi2NXLDhczNjVrYu2oeQBTpt",
  "key35": "2LXHxkRvWmmCDCvbrbRzEE75j74arbKDoV4vTwH3ELAAsMxgXQgEiAQezTNwNErLqnsuhcgCsEHeAtnStT9ppA8N"
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
