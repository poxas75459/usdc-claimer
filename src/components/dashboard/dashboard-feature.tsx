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
    "2Q25kTNu7YRCXjNCFgGiG1wnk9ShiMjfnx8KSXZx5XjM1YcuSZQ4dwcbhey2APCGZmVWvHprYHtW4CywuaXNiyRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Teqfkr9Kq6oDKS7hQv8zsLULoT67JqSqjhs6QpM7zXkpavr59AFwG8qGnFc4f63GXWQK43EHxWzmfDQ9ptb8rEa",
  "key1": "5mNFSu4SiujYVDeN9dRLGLM95to3jkzeNhNJj2m4NJzQvND4o9CnfAwLNx22HTyzHa8iJSVoprgbcv6Eq3f7QunB",
  "key2": "5UcwFr31RjS38ySiX2THnzNedkTrFYWvFxn7bBXfxpULDQtQBgJLmbS7fbSmP6Ke3MjNtCVQe2FZxfpocVbgqfqW",
  "key3": "51xXSJVJ1vHQr8E7mi7FQtiAAu3ecwFCSFkfNrkagqZEQVNEffqTdfKrPjNnDbFuz3idGFo7xJ6KUiyLZ8Ds2RaT",
  "key4": "3V2BqdkhPK42f6NPXJUXsy6gVDh7hVGCPv7mBJa9wPJHHn7nd3iBxobQaTYkQFnX69fnW6q7YEJuT4682epAPeGt",
  "key5": "3NADb3aCUCHBJUaPMSDmwb7WXbipUFxXzPBJfPBmQfUsEW6myGs9bAZUMSTE7iiP8LdizRzuTM8mPfYqhhEcMV6e",
  "key6": "3yirmFZNRM315bqTj1FLGSYUz6WLHTY7CKPMLpNFoaWD1chZ4gHk46HUz95drye6W9tqbmorM2bQAHDH5ZS9iDrz",
  "key7": "4FMG1JwUGmbHuL53xEKivG5mk7L2rewJAEPtPLNQby4qALKd6B3ni9Go4qzqR3B75XpcSikrBF8qgNq7t3FfwhcV",
  "key8": "3eQwd11sps8ikBadNkhZySSoaWSA9htRN4sMKbTbcLa1nvnjC35XWgXkT8ZRYXPF5Fivy9dDjq6QRwvzBuP1DP8f",
  "key9": "cpiCMgQaLbc7AHW7iXEqWCAqMzhgFgNoPCcvCv9p1ufdhwmeRxMMHEVpfoD8t1PHbmrEQVhkUM9KipLHfkg1fhd",
  "key10": "2vwVa9B65yXfNMq64Hq9UczFzxZiXJRFxpYBvfs4SC7oaP3T8BQ3j6n1McxiwBxAX4yc4PusAYKYv2K9xFCAFM5z",
  "key11": "5c9pikMqrLFvpJJNgahbgiRevttvzGNW25yoojUUHRQMuXjDpqGa8KKxboZZCUkdXay1sRBkFmznW3BhJ3YVtQCC",
  "key12": "3VWB4AAsaTpibwXEYhZ2BtpRvhMapujTF7Wx5EbjLsFGJ5xAfqx81vZK8TkWLPBvStVLeyPX4qKUZe2EC8yhNKbZ",
  "key13": "79XaxwQvhGp3MbXCBcdQwBgyzqTd31fcS8ofBXJ3sEtrw79QT4FT88uXdi9RHZY5Wt5EXMS5cWTqj8UjU3PFa4Q",
  "key14": "2QEcz4478p4PqyvKz9h3XAi2AGujKV7kHsigWuRbBJrXETRWhY9tR1a4nFoL5vSc4859j7FMzDoMHBbZzYK5LmDt",
  "key15": "3K277XxBre7FDSqxRYGzBTi7HyMQxU75CBENfwSoUv7PVXSjARu2F6JBdh4Vq5NQyo8x4Hu1JksXF2pxwXrYFYse",
  "key16": "4LCMTDmSYx7fAc48rd92ZWtwRvcG6cqFtNWeygRjpphSe3tMZi5WcUd6WN3rD7BttP2DsxLK7wH86tRCLjVkivrh",
  "key17": "2jj3d6BvBrTnF3hTB2b586ZRRjP2mKN9db67wBLnVz7QkyEbCQgTsBx57iGRcnK31XKkuZoUaSjyHCYUFP4dgK1x",
  "key18": "2Wnsi3tHCfcPiye9TxTXoVPkgrZFE7DA17fLLdeF2wXimFEK4BrFzELzni2cQSCQTarspGLk7nZNxeFUMNcvm3CP",
  "key19": "4mTjgh79sXpyyZaFcruCAsY4L3iKVwpExYoGxywisGyQY46MrgJjvjwZg3J5GwVKTqfLveFBDH2FH39caBSyZVRF",
  "key20": "5QVPNHWF2RvYi9Aoksc4cA3hspWBX67c5FbXhJfPwmSvrJXQwSLeA9iBrC6Km1ickSsdrVn6GNyJU8EKK9faaQ2d",
  "key21": "3oU3tTGRfSJ4FEM4mLy9hnT39vebC3TSQGXrYFe72GQpBaAiTa8KnL53g4PZ4aRYFXoNmZn2Tpp9TdyDMGkchrHr",
  "key22": "5PfD9EDixmrjRYyhAs2mh6MzyxdvKV5YrZgVWmrZjYHZwtS2h7hZXr59x7sJ2Fw6xQXrSmAfGvhHGfKr7kaQwkSz",
  "key23": "3xqVEDfZBkM1zVEoU3n22Zue99YE9XtXFdA5nj9PgkwPDAwg4ztaAiBKkrQt4dF8ZTo9Q5EU4tFT2p5sxY9smeak",
  "key24": "3nsW8B6doAEFLkMkjfu6tvCq19AWKeERpUoNZkpqopVn9t2showBZXvx1yzgo5QbgdF3evdFixvs3idy35sP9rTZ",
  "key25": "4i1TxpNztQsJsi48xhenQgfgoxVsdBinQiSwBaujmd84Y37B5o8h7jYmGPj9QYqk1jyXgMJCSQNYy7yyZHHH9gqw",
  "key26": "4BUjCq3zinyEeaZLzgAL34BzMtkfPsomSe5eN6WW9RejYQ5DGVYpEA9aruhEsyG5DzzpFeQszbZRVboLuYjzE8Bv",
  "key27": "3o2N6KjrC6PGKc4LAJbn7roBS2NP5DDB5PoPq3Gq51g2DxSXNawuXBSnftKsGqeK59wcA52gh6U28AGFr5oHVCP2",
  "key28": "dtFxYoEehaYsp9tTq9xv4YAtnxJdo1d3KMoiKixLAiVYzoJnQLhRRUQo9cV3gnffjogPwj3H3P9kiqaZdhEic3N",
  "key29": "22avobXLfEvmGyDH9YRAwadESjL2fBTZNFEGynH18Y4FMgFpkGYf8o8NpAYXffhAhdZFLz4FzZCzC4VddSuiGRva",
  "key30": "5jzmqijpQP5yP8rd5ZdKVspMTMc48n3oAn8EiHMF1YS5wt1YNcF9jzrqbknGUKnP7XZ7JmTcJxfhT6sTmFU7wtJ4",
  "key31": "2dvQJi4GzsEFj5rzr7uhZea8Z6psy3BaGAs6qEQ8xtF3LcFrVFPiDZkxF2XRVQ4cXoCh8bEfP2m5nDE54Jz1imNw",
  "key32": "pEgjMCWDyTU37YQrsz23uAoAw7ci5KjqXhaUztCZZx7F5pqzzmJqChBAATemyxVNQ3toruqmYhS6BTvjChLgbaK",
  "key33": "gookn1Fq3MoSKaRdKoP4ZDdBRtigjpxKGcEfQkgUeetR1hWKyKLUHyQMpiLv7VEpFB8pj256waH9qrNtad5wboh",
  "key34": "Cv9MKHHvQCve1zJPfDQnFqCYKGzzT48kSc8HtkNsNkAqoL2pUjtkQmD2tcDsGEjS9JS6BintKDSCUR6mq99iNik",
  "key35": "48dpWWtPdwaWnn2fkcKLBgSXpF7ok7Wsexk3ACncBh5ensXsLsisrricETF2E14DUm8jwhZJYRMZYNZDukGnNYzo",
  "key36": "5ytPU8ZxtXEs1czyksu2461i8xcSSzTiNjr3uwoMPnJEuxjG9h1n8T6FEi4YusSjo2AZiufQWKNeanL4B9JjG955",
  "key37": "255FvTcg6UNr8TfE3iQTo3wUepyaZKATUGVrwsy1B1HwEvS8PYE5Fh541Ub5WpQaVvMkQDtbfESuUcLK98SqASi3"
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
