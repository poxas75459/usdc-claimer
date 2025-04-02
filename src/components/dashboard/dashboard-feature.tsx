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
    "66DZYsa55XRsRKmX3R4rwce2Ms7bkUPQPxuFiuaiFSyTBaTGsP1iL7CrswnBU1gi8qBC797r6xFqoDR3AP8cxkBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iB1oSqju3Xi1mP2vr6geYEAvi1FjXnx2VJA6ka2qUNCgC1RFU8HhyveLmERx8cJP7sMmkWnPFxUaEMfi3TYdNjU",
  "key1": "4H5TemfQQ9gWzbYv5xM8JTssn4h5pCed4exbhVzbiaKC7YDdCSts4MLY5CCu53JNCiwf24uEFz5rQqqtgXDGBfmH",
  "key2": "5bFYmroHSkpbL153SgY7GVwbreg96JhupYGEpDRU7TmvH8LQPm6WWZFsxvmPk8e7R7F9BxCgVDYsBake6BVo22TG",
  "key3": "656LLa3v6wXMVDfQtBXUsRTq4titFvemXX8XzfkafutdhNmDwDbeZXj74YqqshzshraW12q6SaBgJPJsrFKijwdN",
  "key4": "29MasQVV4dTokcVGZTDgKYmx9YM5tyrFEF1z8ZppsyNC9xiURoAvjv3S7JMyNi6EBrySdMog9MpCoyyH15XrECa8",
  "key5": "2Sjhphp8VYbesSUYrSPuuzc2sA8skhUoqf39YX5PSnxhkXkxpXKmFApZnhsMZ7afvbBWa7ExobkVkXaavVWFgyVb",
  "key6": "3uUWntnLN1Xc3osMWqrkEPhewEojgc9MKw853UdE8FHEkjxmsxz5fsMFPPEjuqCBqEUT7mM2wcu6QSnXRYbHHnMv",
  "key7": "34QczLYbnS47Yux2Qf4AZn3dSfrJxVNPutboALHQpJ59TUNNQLjfCNimP7grRMuLf4hLn8hfqdV7a8eAdN6EYr4R",
  "key8": "djYgXjgMUUSo9HKxLmRi1DeXxrgThkJsi8s5ho9j2eM6dBjR3QGBCT4ujaF4Rkvyofif86Z2L2wnEfmSXsKVnRk",
  "key9": "471WdBx9L4ino1i6rcFMQv9TP1kNRenRouaDKGTPLS8yCqQ95K3AccvUYeWNoqUyi1W59h1djDpaa8mCDM7drgJW",
  "key10": "1idcLbvqRHtRxnMdJvLCxXKFWdoQMyPhzLvqv2XetEsTKAJMh421kMcVEm3ipS2kfH7Jm2HFocG4bxqD2SrsRyT",
  "key11": "36y8S7NPEPqbsTJx6YcnivZDMk25QjamGN2QDcDoXLNtyCAYaF57rJGdwAVp6EECBB26D8SLrkKvf12uyVtazVES",
  "key12": "y6BP5LgLqq7GfS8WWRyMQsebgZV2uNaBiX4HFZyvX1XdKduUH8NNCUQqpytRjNXKqdMnSxWxHzwLtChsHMLauPB",
  "key13": "3HoLqcqFE3Dqog89fjHsZtG3K9rqnr2JtNpsF5BuKzTUVfaUxA8hC5Psq6cY37UZxMBGDcQkoSV6EaPFNA3TvFqm",
  "key14": "4oaJ3XFDXeF7pi966uMBVafY1SbFRHPycaMnzBexuG64xG7v6qiV1KqTVw24DRtAWDxBKqg27ouaJAkWeqPrHFMU",
  "key15": "5NuVsbUNLEan8rrq2VYu5R6W2UAhoSsJLTDf32NoVsZs6rFJMqeGDn53un3EDU8gzSagKCET4YU9xGMCpqm13oQs",
  "key16": "FniXcShvCsPSv99FNWxXKmJe77HQnFfABNBYLC9rHN7PBbqJcTBEQobXjk7tQXg8JtETCqp27y29wuV5pfLnFJu",
  "key17": "2HtEeKEj6tmALmJxSjD911t9CZmYdcomaexo24GeGr893d3awRLSZqzbD491LYMk23QPvT71ucaKbyt7EfdkiQvf",
  "key18": "UyJ3tPovriWMd9PNKk4He54qn1BLFiRnBZsHddQciR6dNyzc4Cd1vtUJa22bQjURTBmTjqQU6RsjgC8L2vPbWr8",
  "key19": "3hi2Vssc3xZi7aPENyTnU9iYx8zMNqbayJu4gm3HsmhRFDFjiW847Te1MWnTDZt3FpvJZ7PUhSnEsx5bUU12iWnF",
  "key20": "47MZzPFE3eteC94chU4t75oXQjVwj7PMsASu9pwfYB1vAa3M9sQ339W2zQEJGVQpNZ7J5KpCgpwyLCoBimQuxUhu",
  "key21": "24a5o5WxyhFFWrmxZb5bdUa1816PxfXmYWb9XwyV2vtvhuqPW3umXyrxXVYHV1N7mmYb5VLSjwdhEwqguy4m61H1",
  "key22": "3QenDyfuHSPNT2yoUVFHkQNkmydpiNBqpWyTTGZPSY1Fuq4TARjKSMSBEVb81MRYoWsKrf4qNaiiSVqh3qn6JMc",
  "key23": "4FNefmCLEUe8rJ7noDV3qYppK2WrcfmcPVL334JqR3BzSHCMda7ir5AmHSwVTuHxirzyaQy2cBPqSqbk3hWR1fhp",
  "key24": "3NwTBp8M1eDLwsK2inqeftCpMqj1JgL2mCuzeDM81RVaRbhojpfFAhJmX1dWJFpCtXnXwyw75oBzMWQTmyWQkQYT",
  "key25": "5PoDuMDbrajzCbgx31Sdk59VZAZpXf98av5rwMrMLyakhgWxzvbhnn91E5hHGE42tWjDuZXv5ExZi1PxSqbE57Be",
  "key26": "x7A1VjQeQGFWANpTyvaVJEwK4fRuVaymcE2L6QUT66pvxAn4gE97rRaw3vFPRHuwse3vbUoL6wwXdKpc9tFsNNp",
  "key27": "3dnxH9FWu7iwQtFbYiXtkYRcjqMtvtDFSDBRsE3ZafFwsvZQag9nvzBBZ6vmUVku1rwcG7Gva1gKmQcKELBERAkz",
  "key28": "3a1Bv57iCCwittqYojtwXaXeihnB4fRpuEfHQq2tGVga4tr9QcrcLTJa3oaAqqPgqTBcuYmNs2RrCeE2gnGTMtoq",
  "key29": "rfeCE1g3B7Fd8WjN2KevTa5jcutWDNwUFi2dsq5dnsjyAEzsftk1ehfRcxszk2xTYptc6vx5nKWj46bV4KM5SqN",
  "key30": "2AcExafPoVAP8Edqa7r61Hav5sC1etzR3zWgdgELRqhL2qPThCyVF8vMc17BbZCWfDt8SngG7Xm7z8BEvHhv1TwZ",
  "key31": "2abuEBUxGfz92mvC8aRtQpczC6SkLEMeJ2xMxBQLyb8j2QeFhoBTiwsXsmBWi6LD5dxuS7ayhRTuqFbMruU5ZcCg",
  "key32": "3NyemA5f2d8UVqmj68BjcJJp7tE6RXDPCmfW7XqrZtkTieq6fYCmRFnbgvUdNNm9fjZY8QiqNTTM2PosKfrCNhe4",
  "key33": "2Pku2JQNK5FSzGYMN6X8pHQyBShoSoPSfQbUZMcZ37urb3aZ4UzfeTTEK7qvoAZ55Z2aRVcLcEQQJHoT3aXxBWYi",
  "key34": "545cVW6EeNedYwaAGN3odUf81JXnd7LBe7eHNsozsKAfCFeYpnXam3fUTNG6wMgYFCE4SZTqbDYLjfQUDe59rWYN",
  "key35": "5U2wmAxhf9qgu4GR3eYfaaHEJiD7CfzMXZQsgRFhUvg7bnji9bav6BiqBGg8u86zkRXhHY6opwzv5jo7a8QqEFGw",
  "key36": "2oSkL9vnx1yYeFicjzYRVNUaVUnbW7QCFt2sm1BKS3MHXqnJa76Vyqc92pm26SFG9yo84smmy9CW9XZUXhcz8wkK",
  "key37": "38gdfyZ6u6ijbDs8gr9vxASzSsfFoAhqSx8NH3ew4my4dGkFJps6PuVUkeTYwpbY7bht147e1K5U3ibfErmBJVyB",
  "key38": "3Hfrkv1KJ9iBJfZoGjv6poCRCdi7giyuk2vKTQGEqWp3t1787cd3Gz3jzfyc9oBSwx7Vbhmo2bx23KdADMnYw493",
  "key39": "22DQU7FQ3ieJkNmLK3mLgkaT1K7UHzxBLEEEpNs6cULoCLUsQF3X3Ei17qjLi1EbbEmc24ckGoQ9BKPBMUSi5s5n",
  "key40": "RdNxAV1AZnJUCQi1ATjqUhbBrG2m73vwiKnQ9mvT3yX7YRBWizjyJMXttQvbSWjjYuUoARpshARgHAQwiXe4EqB",
  "key41": "uQcFi4CE41Uy6kBjSG43G1DuYshXxyzKEsGwNZZZw4wKNLgrpgzaww2SqYTvJESgYqnqTmCMaMtE7xvq3GXnMyX",
  "key42": "5gJipb7oj3CbCdSX61VqvxtBpKqvXg38g2ZWT8yPq6ARijUTioJDPnd641Se8iwdArtshybiVK4hrGWQwFTKv2n1",
  "key43": "58dbNuvbkj8vo82BWXfvzepWRMMRiqt9AqHqJpydTN8aSTFRMiFVPLuQaQXRG1Hkg6syXmste1mGZ6a6jtzHZS4C"
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
