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
    "2bZ6TY73rz6SwQ1RqzGjMU3d54eLT2H2Ebjb5RXbVEDRf6ZKwN1eTue1qf3QMaFefPJfzSjNfSK2htC1dKEPhj6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyVwJLBfKmGa2mYbSUgHGQ4KZv6iNn5neJ7PcB8pLsCgJgmAsD8B76YFb8U2dPKpJ2R9EL8io7qkFDmPVWzBXxg",
  "key1": "3v8LtMkbpCFydrJneg7QhppavMptnWNh2Eb4WtWYghtSLQAaNMvM2esWsm4xaRKufuKtGd7sfzgGi3cee84WNQua",
  "key2": "5ueCvLe7buz6UK2K3MUPrggUpZFxA83jTuyUJN4jAQqF5NSiyLZ5ocoBz5dhdoGKHAWn4jxD7t9dzWre4MWjBb7r",
  "key3": "4wMZy5NpjCsbz9hdRHWdbdiM5NPEWE7W1EYuCaqDvF4xsZC1Pc1pvhZCsa9duoYiz6jw67KbYafR5xJLcqdqfGy9",
  "key4": "2zuvXk8HGA77oqhK95m8UZ2hgU9PGTCrqFTfhtqopqHJWZYV3k9ktUXiMaQLfH7YhT4VWhZ3Khc9EaLWTfzZa2hs",
  "key5": "47mgKpE7sxyxXUDt1Y95QDaFFmat6jc4n8fraRPzjCD9kdvS7svtrQjy77MzRbCCHJHY3kFucSef2xGuWHxwqUkS",
  "key6": "2ihoUjtU8QsVZiLvVy6wcbdiSg2nYTWFmPor2EijSREz2y8HTuBK2oCLvwrUCBYk2whGE1NypRaWZdhkQeeziosR",
  "key7": "4p3n4SpFbsWxeHaQxMGBDBfb2DeUGiSnuNXbLXR6qUDHkinLLyCRsjQ4P9KoncoYV61MXpGE8q1o5RWDEegB79Ta",
  "key8": "3EagYDDWacgifVPw9213bPWjCaqSBeAZ1YHmuQ71ezYp2BRp3GJtK7xB9HNM4Yi1fHDfFVpPqzsABh4Uew8rjNtH",
  "key9": "3GyAuXJ1atZ8ZBSnE1pbq83serr3D9DFcFrwroK7wToVkM9CFg18NhXxCxeWYF5yfbZ3AMMAH1CCaLBFNudjhhgA",
  "key10": "wCyjzdxPygr1dczuZruNkdB4XN5s8fbGML5JoULFN2SDpyxw6F5BXhcEzQYGPk1j2KDRPy9MFA2puL1myRj2wMk",
  "key11": "46CfiZj6QCB5vs57vFP5x352soPPnyKEAzoeMntfR9L2XRoCpSScmMWhFd5tL6cXMdDCkSf4xGLh5rApBi2gi9Zg",
  "key12": "5JSXrCWMAy7MWBe7TRk9wZgdiS68efELHLpTV9YR6ihXVGr5uyuS2kKbkzY8rZG8WXP7ZTh2saKmfWKWnh9wWkaa",
  "key13": "2d5mMD77BaxKCa8czcoQyyMHvdiA8CR3TrYEN7fGAPMSFfhF18J1j3QN6D1Yot3DF9XJNYrb4p6hFYDRtJGH1d3n",
  "key14": "4WRh7g3NvDKEvX65KHHAM2ygBNK6o1LztjgddeksroRQ6kWW8nEpGYfjnHcLenjiZhfTkxx1yByk4V3hQFCpu3Cq",
  "key15": "5DNSxhXw1Dt9S6ADYnLHAQ4fYobKYBkv2z3EgDTNuWUDXqykP6aDHBjGnmgFMjU7NAQh6EvHYNJn7k2u5rWS2ddY",
  "key16": "2ZZY2u9ZGnvEjDRAud6KzNkCCpEfYpyuf9pxNqSYA4fzVXmaMUtNFKfBRP2F4HYTAXbK91c9Mwjja4tw53ZpbPoR",
  "key17": "2hU1zZgekpqLpUsgSyTXMhXXQuT1xAVYZQDVvqQpEwp7yDfLdmHMQeHepYaghET1b6v6rjzkG22FYufz6pdGDd2w",
  "key18": "5dVZC7Q8HJZBjLtcgdijsKbERD5BBmjCqvEjh4PRJ1Bvmc1FDnNwkzLLT7aPREhddwCe8F7HepPXdKf3JarhnANW",
  "key19": "3FkJPH2rjAw1YX1zGN3UTYcnNmthkLatQjkj2WQAMEVBo4GDAwfm9BqV8yByS4C1Z5yDzPSyzu48cnxT2C37AHRD",
  "key20": "cMVsa1r7Z9JWTDWP7wLQ9Sa917pfsWRQrMYG8GMs4ddEVrDzmTscZZcyH3BTQNog2p76uymnDLrKJCryzSc2AGi",
  "key21": "3VaRvUtcaeVZfp5HvNvw1VuLAZxzMFUvLzWFf3UwDk3LYKu92SNGXX4KY16eQEBASdMSJp4XSFSJwHEJMoiJnWks",
  "key22": "bixKi9zHyrLk76DMPqWvbuLv5zd9z4JJbm7CttCynmYrzenbqugxs6HktpKh3kBDdY8RNWVyWm3tc3CeYDbLZvT",
  "key23": "3G6e7eBo9abhR56xs68ydYmqU2W952ZZhjy55pQWjchB3QARi9kKDuc6yFh5pRV8uwAFgNK6WLYkJNqyc5Zsv1Fe",
  "key24": "ccriGXyP2rYGtsfMefTaNJvxupzwggvXMe4NwVPMVDwbBLgxSKguhT68Hh74vpvtHtg7vLEwBXyd9171yY3JkpS",
  "key25": "R4BLYyMobLXsEjyFEFjgeTSJ98brZKEyiQ5SbGZ9j4LxUDgkQV4vgmxg5AzK82Pms2QNCYVgJb7zQ1votvougq9",
  "key26": "5EiyjShLhyUjTQZAeyh1jEhgcUpe6bHZNppu4zYaybcvbzSFQGWNthWsDGg5eNjp9zhak1tdauJc9PQK2k9h3a6K",
  "key27": "3ZK4YQ7BpcqnFS9nBQAHkK8hhuWdodVHjUrPKyhmukg3txUJELWXTpzFNSkJLmYuu2CoHWncNv3Jb9a4eoJUQZP4",
  "key28": "YKDUUwHKbksfVqNBn3JxnbP1WdmEMDn38M2VtdgVwXHYMmzZuo6HLEfP6aLZyfhE6E27LTJZurqnCJ8iD4SKcZd",
  "key29": "4PRoYecPZAFHKngQUj3MjzCyAg1u9cHawTbMxxLquBKcpHbuWM2Hk6uwBEzqtYHrhvED4rRwcZT4Add1txNerXnk",
  "key30": "541kE9jrF3cAGD4aG9ahRFC76Tgk3fovVwP5EsJV7ebMtd2o12QTJYp9R3j8ZV2S4nzGG6p1Qx8W8T3CnyfHw8uU",
  "key31": "2sUfXE7xdNzp3FEewAMTMKuUPbptHKALXBWFgFVyoR9hzxxQrs9BTzZr8zzyJRY2PCXfP7C32kyRSxhyXz3actTg",
  "key32": "4tb8mprpeFW7bqp6e2Rs2pKgVo8NVec2t1N7vVG3LzyJGFeRBWHK7MyZ4x1jnwjYXVtymSvkiVFuRfWDcUUiS4vA",
  "key33": "2Sgkq6p6tGUYkVwNmLEu1NhRQhy4pNyf9dVzszH3s6fjVFCXY2QwPiUYmLMUj8QXFnVNuTupPGzj3Zmd6vNndFkL",
  "key34": "6V9zv86ZHwnCD2fDLU6SUufnQSTQBtdWe8me4yWPrdcgYCh731iVGkjmXyNtuUQF4jB7z4rp3RUS8WgxyawXaoL",
  "key35": "5nNgLcq9BbSrx7GFkFDdJ7HnCHekXXG49gwB6WcQUvxh4rx1PcV6gt9qzGPkUYcs2uC51RyFxbreim3hnqhdFg6L",
  "key36": "2rGCi9Dx83BovMG3T8PzWnkreoxWDReyVd6s7aeQTyCxuJrEjQEAhJNDBDDDgwpgnxtMiTV2mDxt5KEtEfMMMZ8N",
  "key37": "3itj94VKxcZgcZkwBD79dwH2ZRpq8tXf3ZPYMkAbUgtDoZbSjgaXZvKJUZ9J1tR5JsH8A8kvt5VbQ3H5B8oESTwa",
  "key38": "4msuTWuRZxKWgzQLRURS8MdmcrJ61tTQA4tuQh2HDirRZdXJMTmQxLuh8DnE2KxMR2sfeQqJuSVYygM8EgfeFgrJ",
  "key39": "5rsN71JyW2S378zdRU5t8u1Ams38esPAxt7StRUJT2jMAy2cnDTJnyoFpgaJSL7ur7qovz5m7ZDHLG9GMuDT4TJi",
  "key40": "mhaf9kbeUyABHLDZ6HgTXB8fyB3yuRbMG3ZyW3aUMPRRpqXVjVHHQVDy3EptBorrsRoDAZgZXBd6kzCCoeiUZRt",
  "key41": "hKJAuQD6QhjsuYjFbSgSqgfixYh3mtvZqnCatbnMaCRVaukvHnmKwcYqUp9nciWyPu9NnbBjcBmC4sb7QY26vTu",
  "key42": "4FDF3AjTMrJbEuaZEpwRdAxnMTwiNaYF9ZyjEEbZwjvejPtu8M6jRRJzHU1dbStpnp77P3FqfyZDiJcn4o5c51Fn",
  "key43": "NTN8pY4VGkaSoKRsSzJCzPQBz2GyH2iYbpqWNUnKdbYMrftc8MP7CimRwvTTDvR6QUhgVgASKQNePs8dF75pMhW",
  "key44": "39Rx7jaBtzr4swrteRXEAj3wrVxTqFruSKg1W5EmqhWFdA2Lw7LENXopwKNRwkuFAp6DswUE15yWmZfGqBaaQ39i",
  "key45": "2jfr5jGiwukcYY2jzKRhxTXCRoDjaJ1jbVbnptA341Lk5e57F5R4H4BPikYGbWoP7YZwhbfmgHKNCe5KySRxxBYZ",
  "key46": "zkDHRAjBL1xo37EYGYeDjeYRy8cgk5iPTUxNRp1TtnptDXtmUCqLzkbBpSFJ98WQxZHLw6BqkkfSpwxAuNPJirq"
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
