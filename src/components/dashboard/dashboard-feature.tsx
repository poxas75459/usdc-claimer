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
    "4aG3B3Bgv8qsFKtt6n3oSumBDZr27F5DhoZwYhjwzoRQJHsWMXKCocoRUo3HmrNRyb8VJt7MWW27Ff3sovHGHqeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lzfm7KgNfRK4VWEeyxoiJAofL9kSivKUoGN2deDfWRCSm8nKD1f2QZH7AgkNnh58BifEqquACpvpJG3sVpYgDGe",
  "key1": "2AcVQM1yj9pqL6HcXEJWvSj89ug3WkhUJH5N2ZBmDCDD5YaffVD9RqsUMCkthmxP1wKsG1Ji1GSVgF9R51gRj8Cd",
  "key2": "2xS9KfRohW9RS6fbcqRPXvXoyMr5PorKFfP9gxZUQPJqg1rYtJSXk96ina1DqqjVtfvGsyYncoGCpxqdVnpzeTYK",
  "key3": "4ff1fP15FWnN2zC2P8HdTvcnB6zfkimPy57oESVbPdSd5r2Z4QLvcbH1VqiiFRs3vPh6hPrMy4yBEN369Rb5sWoE",
  "key4": "4VDmc6HJnBZYPQYyPG9p7QthTV72y57WLUBAZnCCPYSaY7Urc61LcRwhTa6fjoKzfDadfWHJ8hrrFaJLVw17iqKk",
  "key5": "3dhDasMSmAFosW4pa37AhM7GmYcj1ysJHd9zQWqcrWmPpwTeLmfHi6d8iDqTQnQ2Qvo28gR2URyzdyhXvRFkzSeh",
  "key6": "bpEy88GNfpASUegfhkkbKr68ogDz8weZffJhjEoUTpzrm8u6CDS2MzvKrgA3dQYLaJEdn7Kx3QDD2iAVvXRQEsb",
  "key7": "46n8AZez3RS66RkjVUUFmRUM1Z16XkVfUoATauNUqJyYSmZpG7QgRe8JDif77sJD3D9HcNpHMjnjPrwCpJMzZiXH",
  "key8": "ovddJz2PZViR93zRASDhfDAGFVknDHPNANvZEJfNxekCuwMzaHQXnmoz6R2FVqRNMfZGvkpgipxa7NNZD5Sdeg7",
  "key9": "5ibxSTQYo3BxadG7fgrTCoF8roNuNm8GgPSX6pLHX7vYNjoq9Mu3NbhDQDWVZ55u4xK7QGGUEcQAF8irNLXmkRef",
  "key10": "FVJGQxeuGvSjhNJaZKH3Bu89wfvfGMxa8jMZ5NurfvfarC2wfrHpQbWCvJBsTTiv7HYNyHaKKDSgZYKLynhscqk",
  "key11": "EEuxTqzCMwo4BntREKNKhYWVdWpf2ZR3NHrq9H3EkXeHeSxyanXXSFmEPoFTLCxeyb8svYAjTdaugbbiAXiFcP1",
  "key12": "2D8QkB9YEubtGTMjSJjGV9tAZv8vLib4pkDP7dQfZbD3V5rTURTcojLPR9Ly5ZDmqyGFdYFcYHvj3VNE3FQAUBnH",
  "key13": "4U2ybqCY9eEa4okSQKTYgjvgsqHAh5rkUYNDni1WZd53PhmXUjXMnozU4M6fymEnLV29efcUAh7ThCeEUD5q48t2",
  "key14": "3z2h8C6acvnNSnkJUytpbW3shzbVQ67SEYcsscvaQE8CiH45r8PyGFxZh5E8XyRAPEw37A61bJBFd7AkCaVP99da",
  "key15": "3bbp2GYYKwyimc4yaYju8jKgRJrqQeDcQ7tVTbxt5cLbqA1ZGbSMsrYYQ1idoanL18QtEHMUffPmRtTLK2LX3hfe",
  "key16": "2AahFBD9UBT7NP1wbgepXXj4NU7uF9Y7qime6wd5oSav91KfFu4HAvQpSfHJcG7uzfLYoAfaE1dQjFXNCjFaQN8Z",
  "key17": "5b2taurT7LrBwvWmpxF1prX3RgcCyxbM5REgiJ1QM8FbAuttdH66fqNcUYex75CPpdG2BZfvkKnCg6Knmhwd7E4s",
  "key18": "3z8PhcmSeQNHEHoYFgPZHSih1LpCLYb4JJc728QkTfphKU2YDVCAvyL5f6H1rkSF5TjJzyB3qJCknQRqyMnVCUv4",
  "key19": "2z1wYw5rV4tnTsahoNzFcFnHUuAFD4s4gehjBBs5Zp6UfSg3Wkb5japWyPpvNSBJ9ke3hk9MiikcTCnzaLB1FTij",
  "key20": "3G5mLzGUMnQPwKDXESV2KRbq9gMwxFgXQTpQdHQLZ7ihBLeQt17TuLBrYr98dAKbfgHEVRSKS7PTDwJPpz6wFC8M",
  "key21": "1V1d26hKXYPhXDTaMm5NkzGniVSCqAqor9RwTx45vyDA7sBsELqABMhBKFvAznPp9YF2VzjNbeSs6zfnhdrGQD8",
  "key22": "moSGD29RZbLtKvT4sEhwA4WjqYSgH1eogHp6e4NsruBsBaq4wKvYjHdQDXa9qXGjzogB8QpqcZiq7ezDmHCyjpH",
  "key23": "G5fuZDtfwb6kx448WT28uXKYRJ23d3WSPdmHq4W1RyS1SUSgAmMVGonx2CwGWdKPdSYygSPPjNPBVZaATqyRuiT",
  "key24": "44Qfip5r4vUMd6kH6oR5eRSMen8Nc3uDiHqpNBWhbnngtisiPV3xYZADukxiTNGg5e5azgQFEdaBpfNqBtgpifeM",
  "key25": "qtW47e9t3xJhAxc9uJ3hpAPbRhf4ppQfHvCxgNYfSsk7w14YzRScEWPEvjgFYphP9bkqhipk3ny3dK9Ky9otpmE",
  "key26": "4QPUUAifMrGUb628c2hak5FFtLm5kXp8TjNRKF97TmWqQwHFf1gQm4ZZy6RDPYrycu4YwZPdWNUBbVoQQQUuVX77",
  "key27": "3aDyEcYaZPUddUn8mhjxUop5hKsgfyCYcdeDMpkLpVHd9UkcP1nXwBR8bW5zsuW6UydPemX959jmTMyCcvcSVpDZ",
  "key28": "23YH3U8f4HD9BPCg7DmnEF7LG22LdFk38f9Vcb9WfGQKHfAcWGsWueW7Eu18rmuuSz858f6QzbipGZm1YS5yL7ve",
  "key29": "4cYhdWQia7mRNo7e3zKojpoc2s4GzgpK8w1UBQNDUVnyKpXYCYM8W7fZcPd6XBK6BgUxRZPmuE21RUeZCBS4ruXK",
  "key30": "2PoYTWJSMWLgxxRbFZCeGbgVKig9aEva3PfC56AJYboWavbgcdy9EwpWaByDHmUoGTf7ezPRV6BArJEyXZNuzKPd",
  "key31": "31yrPYs7uEiBmDvCAFxjZNScdvS1CJqwfEsV9Ho6ZKuE2QpVejXrKZWhAAxqUc5jPZYJLXrceAWaXYDVXeEboa3Y",
  "key32": "5M3mEtKYpSZp4JjF8UxrSLKPALyK9LPketpiPTgJhyZ19dUNPdg59zJpCM2sDTLPEJFNbvhT2RHgqXe1yv7ASEj8",
  "key33": "61H3KLwW84FYqoqAJ75boxfYRkXyG5KJcd5pSejjqNa3BaHJn7Kn8qQcNah4CHoHPv4r6ZKeqFbwKsJBUKi8v9YC",
  "key34": "42wUL4wdC58GPPaDRBQBdHj2cDBK7AV5SEdSKnmj71eLXtk78H9nmuENv1GLHm2EgZ3Gv9fw7xNTg4SrqCt2kZAn",
  "key35": "3YYXq7Se2L7you6XrcQ6YMhcKT7LjDks9UT5Qj7WVWqHbRp3VtsFDoyXcF9WBZDX17atvbGGKmC6pe5mqzkNwKdA",
  "key36": "6VVzxCqwaEYV5JatkCg7rPyTQBBK4r6tWckFnaZdhCXxaVH577QRB7cD63C7KPGwAoUdC1V58T3NLiJLEpELLiR",
  "key37": "Kd7hovj3NAZbX4LQBZZqFuvBnPBhU9SYVdvRMfzdMjod47NNvUakyfn5VN1gaQuMT3XW6yWgx4e8D7HX1XdYg8Q",
  "key38": "4ivmDwuNuQ4ax8ARgdamabHzxxXoPVkn5fam8NBuX8fAcivpbmsk6TX6LQ4RmuMrnpqPCkNtzTULvPHTmqe4Zshq",
  "key39": "3f7h3WcWfaMLLsurZNcjmkQa1FqGTKZs5TrEUH5zz76VpAJxAfiiYRDsVJsseAPGeXFRvNNTCcrGXqhzybK6v5LD",
  "key40": "2ydZYtvFdaKDvAuDJ2cofCJaVR6T5NqiSBSAcQRWm7D99oXS2SGN7fpEMACLQzootBAyanQD4CeoCwnGHuXLd6kU",
  "key41": "5zvia8cpV1QFueH23KZBJFunsa2v97yjijYKtg2RddCB7M3592ibnfTqnXGQhx1dpNCUD7aSG3VP7qPgWw3qXjFJ",
  "key42": "2pRvgVY2u8Cjq5gvmuJ9oszpUzyY4ycpay6aXJuNZbJs5Wm3N8jzxURiWWaoJ7aaKqPun5hM4zZcApTH3hedJS5M",
  "key43": "3PRvP8XqKmxjsmwQtGqPa5n1FibXXhF7PhQfwbPaMWjLckGxyAE5u5rmgGNLppiX62Av19Q5phHvrMt44heZnbhA",
  "key44": "4gheh2d3VkDkbixMBLDKEEtSm8LvGjcrJqDE6UJaNUhHWvPWeAgByDEztge5qpYkyEQHpBUoDfEfWgygRnzrjwuz",
  "key45": "4eNvAVCgHBZwDXrccoiL7RKnSY3XDYMBvBUzCwn3XZgtkKJaoJvhz9qxMATV8GXPuTzqV6M3VG8W8h2ENfJPamLP",
  "key46": "3r587biUNLZhPbqrLutsJF1XbvEmQuSG3TZHEWZfNsneGZ8KfXyKzviUbx5ZKVjqnDy5WzPfMawAMB7R8N4vW2cM",
  "key47": "2sbZQvEjbtmgmjnuzCRBoLtJBuivY5u8BFmrfGnFegSU7ei6UseabCH8RvWxRUJmXCSDScsB6jSzSfjzEPq6L2sv",
  "key48": "3Kc3yLknboXyKWeSHbMkFj4dmSrknWG2MLNCRuybYat6etqkcviJMmncpQK9PWHpSoZ5F2PTNyxmWBXHivECh53e"
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
