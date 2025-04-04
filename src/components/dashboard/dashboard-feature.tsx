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
    "FJP76u9c7ezt6JEg2VvyVQsmnfgAb5bbRKhMvyETFKFMRF9rS6XNE3BFLmNpMvnVXkLrnEFxLSDLxkYCkuwk76c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t1ZrAdqRMq8b9F5Fcbgbwr1nG1MgVYjuAptZ4ZabF3hheqeEzB1TApD3irkbgJxiVjfXugt63W365hXzE71VmLR",
  "key1": "5WqY6NsPXF4KwzizUqWWRkX4g9BXDon5zn4P2VKPUbuMmeD1mF5ZmxmXaSB68KyjYgc2drTxxxNhEdpLkaLCY2xd",
  "key2": "PbaykVzwY8hdAowsNN55jGJBgALwbLE8SG23pWz8DzB83QPT1LWpuxoBJJrbYoqQjwd81wUiVLGubXdEdtWjcJS",
  "key3": "2gBtng7v4JsPPFScc9XAhq61fAS7i4kvkgxepKsgjKco9cfd8ebcQP6KhL4kcruAgatzaJEZSejrMGvcrJfJWP26",
  "key4": "FG2J217tBg6bLM9K8Z6EwnE76XGNMwcH4LGAUAVHmUVRiL5JPaRvWLBpfTjfReyAYgMU9GhpsTNf9qs539CagAR",
  "key5": "D8ybmi56TB2DPh3E3xRy2zYPwguE6cp5J9UfeueMSKQSgGva5n3nVcnkJ6pnrcHhuP6MJ52uxnRnuXFH3D6rjMT",
  "key6": "4vfxBqJgL13g9XHazLiTdXVq94nPseTRVKD2tnPoZ8ZGX2RK6cr82Gof4gxxGZPghnPFCSfnarvXNZr48ZVRzK3C",
  "key7": "2m7VXN8GFJKWudzdfkCir4TnFfJzrV8VrtMgk3rGK7q4dTrred8zz2fGnqF82pvXyB8cSzezqHVwH8yZtebTRsgG",
  "key8": "3UhShvjfH5rM4bpUruhji7Wp9mwWRy6neHDuEoBQpBePaW3CuqvNCCWa833ecfEZWpwJUMKjFKvXMhRTEDfcUFMS",
  "key9": "3arU29bznW5T9MngHCDWmNWsK7YMNAEWyU1SoYJMSzsurdAsEurLvSzxaCySgov428WFqX1FgaMd8X1bDt799jqz",
  "key10": "3LGDmGvxfu2gQe9rodFsWJkVhQJEur3EBVjx5Crbu1SRMYFtbDM5NVqbFPno3LXxGnsYgAKUr3utW7TudaZXhPoK",
  "key11": "3U2hnkGCi2LzGTiw1dhwKnssrCBPHfJH2F4C2EtFhEsBYhhGxxVWhR4nFTB3GmPzLViVZNqkYby5k9vzPyc8PuiD",
  "key12": "4id1iEzXyNa7wWcRhMm6NQ4sh74QJsTocnynANNBJFuBQCwpa3DcJaoQ8G83tm1qhXHEE1hTFVs2Pj9DVgnDdAbe",
  "key13": "dYPciBPirHguPpvXU2WA9vjgHGY3eogYGRHnG8KCrCVv6jjEyaD77cUjhJCctLoAdRQGLWDjbZPUhRsSPQtiFgB",
  "key14": "HyxPdQtyP111qhHF8Kc4QieQjkZNz9JCLZjf33RjgWAWsSGsPQrZ2NHGQnv5mc1RZfyM53nDk78yZQ4WpCAeU21",
  "key15": "2s3QParP7G2LuSVPQe5X9FAJPXqgLzZChrJv765EVHYUvz5gPt6FNwRFnETD9kbWcGV4XCtuRzej3JUbC5vbqfC",
  "key16": "43jvUERYdVbifvDvauQMuwKuvCSaX734imLUWQaMqu7WXxcPyFJZSiCVuS3qgaHykMcoZhP1mR5TxrafGojJ4eGA",
  "key17": "56Lt8nkDvpK1fj7H1D83Ec1UzMe8p9Zc9mcrRsWQ7oDXPmYKETFRCuiyPSwEgZegVbSSrx7jFVrSBfrvfVNGb52e",
  "key18": "4H4vc3fR2GWXkKhSXEs1GSWdgV2jse2eQyV36a9BrEyZMrmkry1172qXmqtDt7sYUsPS2ofh2L4WUQmBpjKsx6D1",
  "key19": "28WQjxgyidrEuQadWFEXKpkXnwcYvpw6SwGVBhPhgx7oVKYy38i92GJEDYVU6QBnRgbDKP2eg1hfhquYBBGeYLSq",
  "key20": "3SKG4zj1nfKvgCY7jZmgmXdDHSocvo41Uk6RSkT2tFwzDW6wJwDG6aGe6RZ7wCkjsRRt7Yn1BkNyfYWJo5XQrfWA",
  "key21": "2kj3KkjvwmpvHRk4tfYbPyWKD5CBA2mrjX5ekoJpsMneG5DeiaXaoQWRbifyQZDAsbbQiPRXjAyjokiKEiiPD4gu",
  "key22": "L5tf7suPhscwsv7Wp2xz5ncMNaTiaES4fmqJeXyNTFWUxxtSjtrb8VTxS8ts5xVtzgnnAddpUNJLh6zhwUVRSU8",
  "key23": "4pPr73CJv4BLcw2Ruheu1DWhDAH6g7oVeiFuRDmqXvk4u5W8vQMfJd8SaK1c9Hwz3JVyHy34A38jQePTfRDnUzCd",
  "key24": "3ytiZ1xNhhxf16Ue6z3qGFiZpxhmQsrBX6mT7dH9gCzPH2fnHQPsw2HBfvskPL4BpZgo9daLJ3wHdACjFYZ46ZqD",
  "key25": "2f46TeBUYHoaCFFhtBHyFwAoV1Xnaa88hMVdCmrSWhKECLxM4ggFhG5R6u8U7Y9sassicGyPfaLu1ucQEcQqBeEt",
  "key26": "oBry6rKKTgARGYvza1VvGKw7b66wbkmndexhFxFwP5ByyGVnSsNCL2yAZUqocnXWcALsNZumwEnY2yxD5ddJPML"
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
