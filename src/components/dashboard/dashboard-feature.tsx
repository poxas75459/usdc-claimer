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
    "4pbt2MudF8UvLHPj7yZUEPjx4K7NAGLxNmptSwaKw632dJjJzRnZ57Yh39RuTZt8NkUvhFiTnSk1rsVwkQWckQa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fd5TvzmGokZpbnrKzo9ZAZTNTH3Ykp7w6zttWXfbdikBMHAezrVx69wuu4C1ik5HGq4Y6pbkMgTNGDY79ZgY4fs",
  "key1": "2zuWRmDxbZhkXBTmPSArFSf7zvFx8vyTGyrLwk6XiR9ev2FZKgn2UGwZE8QqgR6FsSF44tQ3rQ53ECLQcBKqZ76b",
  "key2": "uKgKZFZ3mStBtbYYBY8GGxjtHHwGXdbynCSix3JYfGZi7MNySWoHrydVySgZPASHZv1vyQ38EXdCt8CdH6yj86x",
  "key3": "52i5xmQxUrmEczUw2Cjeokp3EiXW4QBiEjcc2v24x1fqf67rwuwpHAowaUvDqxJ8mno55h5rKn9rpZ9RHNjRTuu1",
  "key4": "4xhRGQy5Bvy3RvKX6VYnUch6TvpH7ZmpT93vU9BhBACgaurQ15Sg3B4CfPvVD8r9HWKUB4ApEAQ85VJYgiS5Hsqi",
  "key5": "otfVEZP8YzK53zVZJn34D7QpcibcJ6YQrUaCsutxhWjgP9nFLK9htSeR23nuon5X1xUL9RgPfvNNWc6HYMUCFBG",
  "key6": "YuNz9Lv8DtgZGK8xwQhjPG5RC68YozKaAhPGipAzG2CMWPTpDx94NE8bCJBb8kjebsMC8ru36o6By1rTsruo1Gk",
  "key7": "3PHucXbdPEvGzx6QCHt3FnzW6hCMjsiHp5iifU3oT13viM7ZF7Nr5EGZXkcReLmVGgRqabQU6WFy3deEFCjPdqwy",
  "key8": "Pw2hhy3dKhXtbDGBpbYAJ5VA6ezQgwCocWsKM6NLoX1xjvoZzvRSyRfsqMHQeYWcvG87u43WxNNovDbYLvurh4C",
  "key9": "4w9Cg1N79CUrNC743ey5n6q9PXAgQ9VxiyRNfWwXvaTWrNTpyDUpUdD2r8513hybgSw7QHhv7w7UQQm6DxEzzAiq",
  "key10": "4w8JRSMcBxRMa9z58F34LHXhsen2RxskJtVPb9Z4tAJzpi8ErrMrZXYQnkXAMzNHPKXVfxVo2fNaRJf22LELZK7G",
  "key11": "5wWdsNzUtYiVP6CnZaNFPujtMXhjCp7mmuqph2agZGyJDR6Hyzi1BX9uHJb4sHY5dxa9k9e4j6dSnv1twvU3pTRw",
  "key12": "5mJSCvHYqKhAJmbhqLKSTtmoQCpHkdpB5i7M8BwHitjLw3YxM2FwpYwXZnoMzfsdtacEppB2DKbbv6S2rgLvKBQW",
  "key13": "3887PMMPTwcLCgeFWUrUU3q2GPyrPK5g54pMfrHfmtJJcBLKBAWEtWQSQEv7XZyVy7anvoaACq5QhEfKMaJHoYKC",
  "key14": "5xN72fG39zyWBR2ZLgTGAbmX3c6svGyurur512QVAmo8qqmchF3SQ3omLj96S9anZe12uhf5SVDKBgi4CyY4Yf8J",
  "key15": "2ys5zCg3gNdxZXMHSLVHqJvotDQiktjB4Lx9iDkgy2DabnWAnqhNQ6YpmmU4Zgyy2XWRFQR5XYT8grvxibYRAytW",
  "key16": "2yNDEfPNivfaAQUiXasyDspERME1CbeRENkt5qqjUR9U635TkSUdAgtwV5ThhARQiHZTsBcp3iK7zj8FRM5p5nYA",
  "key17": "9gyopjq2PXCdjJPTfdcdCZGYtbVHthH9i2ckJCodfcp7m7GKuPxp2oesnBz12izQ9jyP32s84bZU9UPFo3Lm2p8",
  "key18": "28AUypazrxqRVY88YvbhAJMBDE9uXbcyMeWAXopMo5KTJwEBswKV4uvsLvYkKwMbWGWhSDtKth9by5Zm4tAgzPFq",
  "key19": "3HPvda8z8EVPB6GmMP5Gksb9QEUyLQm5MVYskLyAxZ7Jdbr7mUWGv68J3qm36aq7oC9YgJhYqTkztH45QJwGSjES",
  "key20": "5oU1uZ8M7TLKyjmC4kfpScmXs5vCYnMPgP6W3kHg8KgbW8BRUaCy5evNUhccDQA5MGccYUiCQV2rjKi3XPAgL8Ju",
  "key21": "2Q5m3XxTVfgYpvQ3RWm5LwSPJJf3pv9WYCXr7y23YMc6WXvZ7D31AmAnr1jx6xjkcq7HNVTroeFe3vY3qy4Ccyz4",
  "key22": "3umPorDvRnWUnMsmQf32z3HW5nv6HFicHMSeBUfLNyTXcSQnEEtjaQCmB6Uy7XDPkejLuHzPXaszHSJnk4Wio2jS",
  "key23": "5PR8vPL2Qpkm6CwUf5m4aYrxmrLEsHRk4Rr1dfCqVbzFMUfQrWMNbcDKX7LbiHrvPWqatLZsSkonZV4fgjgyX5Pc",
  "key24": "2sLNFXKfYNpmHSpouJMzqz64L2YSa2AqnYxQ2hAfi1QGF1fVzr7w4174k4i37s6SvNfewRKuFoDk35NiZyWNKCq7",
  "key25": "5tLJpYANQfCTbAVoBZAHkYoxVD7tsQZVX4uLiwHWdsRbjXGmeTyU978wo8Cvi2kBvsqF4PrLZCqptFn4wcgfg8RA",
  "key26": "SgYEW2rvX9R5nuNgjYvqnp7EnV4vvF94KhGGb4XkBZuuEdgXvEELJP6vkeYSywdaeQgN6WYiHtQ5hq5UbWR5Sgn",
  "key27": "53cHCk8F1X8F1Lmrnfa3F95dQSKqVEifMYQsohC5NNvTnRbJiKvwqJnQ1vHJcDQ4DiZVuoP1PDkgPK61N8MpZgMf",
  "key28": "LFttXcPkMCiUK5GbBYSucMoeU8BdQZqK4Gdka6CHw74ii4DvHmrdD1wBzP7JPTSbVVW76RzBVTZCyJLafYQz3ts",
  "key29": "AMC8RStjTq7MUjrWfw81ddSHFyCYGFL7WiUPyBNNQ6HjiW1djx72ZrxbhcsXZEQGJ6eZZp3jDJCqoC1EyHn5cro",
  "key30": "2tuCzP3azAsyX7mxD9FvbnLHeahkAQ1ciL2yy82AmBjBLKcnePXU4D849ZxiQNiyNBiqsoHDdadE6tZkmC2o8pWU",
  "key31": "3EwTKrr3X3Zh6XDVQdBjYkpj6q6VBqND8BxTDK13xmEXd3iy8jkXHvkxFmDqnicQwf2wu4bzSkUNGuQuv7QfCGCB",
  "key32": "12f9RbDVQNH88YVtzt5pic5bbBN7Acqrujfer2WzP2ewZXQkAyMkWLhn4T6pWuunAZHU57K3aKFvhndfMDeRFmP",
  "key33": "43mqeoXLa2vTRHUYbtxWuYD6XQYCPceMYa643utmrM3Xg6YiFLxR2tWm3deuhiN6ib135Z6xFECGZckMKQKZa6uR",
  "key34": "3r9JA4QamaQKERgmJkphWC5s4D1nnjvpZ6Qw1KnfHEh92WjchgQ7hfo12qraCCa7V7PKwc2JSjJjVpuj9Hru49Ji",
  "key35": "3ZEf2V3horCFy9gqiDfhvCPcnPuhrjK3syZwJLnSpRgCASBpgqton6T5TT6ocpdss9MJYVNaSuJXZudEwUTWdic8",
  "key36": "PrmFL7p8aBCWMS9BAvmFJKo2A88m5zVVfoU5oVnfULnLnz9182WmrRHH4Ww4RGxNBwYnLL6fky3fKGoLUdXNy5c",
  "key37": "4RUNRziWT4iiGZZGvVMRC4JDCoiN2xBcA4vGwRF8GQyH655av3WcJAGG1xrPbRdN3Bca4KJVk8AZKibfK7zgFb9u",
  "key38": "3CYknU5WapyFJakrWLXnwYRtdR5gD7KkqwgWHzQW5CfDjWTJgGHYdGopa14gJJBdvKKmL7Zp4A4aNef3jW4M88FM",
  "key39": "2wxcCV7JFHnAMPuzo5hBQwdDoxD1uAKjaHfh2McCxSFb1uqPmMwiaLtqjWdM2ydAdCuz1u9ZAhWL4cjjmr4GQpzd",
  "key40": "3saHkGpSU72DnpQkbznfiJ2hoNwTxzqLnRca68y6PJ7Ara2ZsuEUckZ22MiD3H5S6imdLKFBNf4Ua26bRRaN3yGE",
  "key41": "BvNCLMnA8WyEjYkbc9hBCL27BGpo29hTNgxpyxvdVT4r92q3rJGS2b248nLkRD1huaB3CZaxfgA5Umxr94FWDoT",
  "key42": "4G1mS3mQWSix6pgMpH8JEbpj7EsatXbEpVbnujfbiWVzWz37HgZWKBSyry8RkecvuiDy8mxeTn6nTHhyMB12bBfT",
  "key43": "2X24mEdvZmEBjsrwXu9bHs5p3f4cTXvY7k3M4TesmtC2LpprAnZVuWXzCfF589qF48MR3E7RqD3gD2nB59CK44UR"
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
