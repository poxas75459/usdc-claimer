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
    "2LTRFFpdGtXJASxUrN6aSeH6cpTFXq9RcMHtU6wAnkcoheLQNNKLD1HPz4ZvK12dP9W3TAogzGYqwB1KfJtLzqMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ps8kF41iDf8tXhUnFyEnEuACs6AptcZoLGWvk1V4gnq3xRgtgnKFvjT5mGkrVWcaAnsv3HveNhLT6TTQ8RNMf6T",
  "key1": "4ubbk8WAp7GrqcXefrKKxKAfCQfqaEaA3gmxj73BfdmoqpdceUP7A6qngMvSw7CgWfTGTzgAueFZmmBE9Sd7y47v",
  "key2": "4Vgrk1sNKdPXcvzQyXg36MVesZi6wGas66xVQcmP1nJEbcgyo1rMk7HYY7oV4oz8UcmTnE5jJHyjnaPaFhpeFkFe",
  "key3": "4HaEGAgNF9WhgCjx3AgDGwZeCJhJxSQYj252NQqkHYVNiG5goTR4kB6nT5oFrasbjznArA8XLMMCPSNHn8faY3VP",
  "key4": "pxE4GfYNqwJfythC98BCtuaLwoQAeBBJ2MGTMjoV8ud3d2p65fcTnZ9wvVBammQgFqkkFcbRF9Ck1UPERs59itC",
  "key5": "cEFy9R27XpcMYM98gH8vzi666xPv1pTndjUKfDvr7TB8V4FHn6n4MStgNwBch2uxCXGPP6LZ8AVmDYfXs9torTt",
  "key6": "4a5R4Nzp8SGEcS5P3rXCPgkvCVvsxBY2U8D9RM2XPjcwXafDmNN1rVq8VRPLkgHv5eBe5V2zf5YXPFKJ4z8UYvgr",
  "key7": "ej6G4hZykBitACzwjbdxdqNu9zkNTHqfnA3azN4YiKABj4Aaj8JS8jaZoccE9yVQYniv5as4uPa3kNxHBVLoUZy",
  "key8": "4cisRjBHEWRSm71ZFXj5sTSJjbk2tk8TmimUnq7ARSR2waQoNvCgM9bTFYgBwGdeNWMgSfVLfPSxFyjViD5dYQP9",
  "key9": "2QACrCunRYRULEGuszx7TGnxfX4y6wTqmZ5nPqCrTqNWQQgL1skwf4uAbF4ACWzUxzxsTcKdVXwom1iSgREeutoP",
  "key10": "5m9L1ms2oFCYy7o56kdJSXV8XUP7wo984JiVcq4UNT1wYP1GSB514DhHbYByWoPnhJUP5Sdw3Aexk5bmnomTscdS",
  "key11": "4tzU5XE4NUiwwVdu2MvwycdiiUUrymNcJSzekU44aNNMEd2v5HRfUpp1FbPj2oC4rFtUj8NWf5WyppkWK76DEcD6",
  "key12": "363KdC3ERMiyJmfRvz7vWBwQMeDhL9Qw1BSJUVAhxSRk3u3pPaE5noMwctszeSwp9nhbuR8sFk2XSgaSVv4KHiBT",
  "key13": "CJAmNfdq4eWXrUbQN3mgnry4r5XgkX9p9JXQvzddRpUL4NtVQEs5vMy34AWbZDcGiayjpgTjLnu7HDLtCoztHXV",
  "key14": "2VDYnuHyo43s3jgmRYGaoNJBcXCwSm2TDr7xRr37rPTgJS6rkkDTkenM3Q5gZEFoZy8STyqkUeLAXSAajCBDXf5g",
  "key15": "5uwh4RTW3tXj696LLpstN8VQExCRd11S7Erb8hkXYCo7pdcniz3WFYXXrDgNSEqW3Fm7Unx1SNGWpTV3Cjc37zKW",
  "key16": "2C7haUXhFFYMzB4ADGP9NwRUrJ8gh3xh942fDLZvT5NJTXraqwhTuGGRShXajM52m5uZ4TjPyhbv7wKQw1pRqrtp",
  "key17": "44s13vY9Rcof2sFNr265MjcibNk6ANCbokNcYif7VAo6TBQYfPVxkaPSivbXBmPd6bQ26DXECvegbDC2k3aXrMjM",
  "key18": "5agF1K7eqFZyceufX6qasHukNFvZSTRgHgZNAbv44S2YBQpmG8r4LADLmHk3LNpAdBABsmteR7vmZHG4Zt5k6YUa",
  "key19": "5vEv7We3utoEw6RfEF8KSj2UBkLz3z5Wf8AbjFuv5EtuBseD38Bx6AANdg2MDvnoAeqBY64k75XnR73L89qJVU5X",
  "key20": "4n2smzXfKXhBzAtQxFbrfMX3uDpWpU2hpAwN4ikgcxAJsdA1HDoUwGay1UBkfAyvpZYwV9yFHbaR8SSrMouoxLUY",
  "key21": "2hYBWDArqb5kvzKRuM18Gb2mM5CwxNRwiDK5aPfh53saaf8hZWzqcBFPsVUdWwkiwZw28ek7vfFMktHtgwoLwdNS",
  "key22": "4yRTnS69iK36URaD1zDhFVjoxayYsA3rFJLC2rKK7BnQ8XGsCaNvmwkV6A4g51cBACjR7WQ7rVJswyxkbLn4X9vp",
  "key23": "4imwiEjtyZb1u8rYRsuUirB7vMofBLHp9oBqZTBn3Xk1cFLfUeB8YyejyDkpdVjK3Smskw41iX9HnPEgRmXhfup2",
  "key24": "5kfzKAV28Rb2s15XHpy47vx1ARCiuwYxe8ps2GfyhZW9bwpfQyAcd6QENa6ea6N4zn3TxPocjEgvtBAVgc2rv2fb",
  "key25": "WUKqkpEd6q61N5uETzSyonP2R1s7Ho988XYHEtjyuVseFTU634xzGNaMjDRZmTX8TfaugzYCu7UVhrmz9Rk66VG"
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
