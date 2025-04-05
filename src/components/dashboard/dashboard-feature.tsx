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
    "57yjGoHxP9qiQsMZyWh8g5ptcR2Vf1yAem6JDpofFC5pfhGcA8Uzaf8EXzji4kPYEMWz9UFt7pbqm1Cq8VDD8nnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LY1mcMCrVhxWsM6XboyaP7TgNg3EJPWReAJAm7UZ59V96MdPY3ottSsimmMf9h2d3FCDsuTB17VQncheRYkV23",
  "key1": "4sGGz3arVAJLXWzGj4kieCFrkeSQLZwafPgYrBFzG6DogfC6Cv6idkbmqqqyCr6K1eeaaW67yuRrqJE8jkuHtkDM",
  "key2": "31vhW4T9b3S66RUfMdiKTPigFpmWLuwzSzUfDp3LPVRruje2hz4xYvaR79275msNepUDABnvwyrYtxkimvGbDX9s",
  "key3": "5hV2Z9Yh7FFkugyNGc6PJoXePDZL7Q8FFrfGxaESgieopQw8DrvdLYXxeRJxMBy5ZdLibVEYg2uQUvhkE1eBqbZr",
  "key4": "2xqKbvjTVTeGwG3fmS49hAjLoTjB7kU4mHw1T3MSvDs5zvPYUQZAKteKDW7zZkgZnBv6qL12oym499Z3u3Xdy8oY",
  "key5": "3fwow9aXv49jr3tqCPkE6fvsPTv3tiHiesugim8483XzSmhR2Nyokje6Yzk6bbkm3vB8jxLZdsPyd91PsgRiURgu",
  "key6": "4hECmV1BRUiKhP5qVftksbCW5N7ERaSJkK74kq6F3UbrENBHLf7mJmUm93YcA5FS9R2mhZ7AakXKicrLSzKsnApW",
  "key7": "3Rg769bZ2sUj4WK481C6YbLPEyQ8aPvKopMXmLNLwWSnPxeiuH8kK4WHm2pyCiPSLv7XqpuTBBJ8JhvWMGJfnnU",
  "key8": "67jS5N6KyReptNpbxAPecWALTHjZyRMzG2teWsjdi7p2rVR8iJVvK7F2SWSaYTJD3e8Ctw67fwfdv4fx2aCq7k71",
  "key9": "3JHLh3HdKBqpnpeMNX5FtUnXs8Ngsh9W8nvMPGvRcH25GbdSsE4AMXYAPzuYDyR6djXSwWk7vpbgMsYptJndLALg",
  "key10": "2RUkfsexnQWDWqGH6vwse8Dk8YHREg4juvfs7NNXcgF1MZA4VuYkpsLTMZTaVVtdZ9rucSnEsjnFBmJXgcvt1rC1",
  "key11": "2rj5yJqfs9sAvdhPmkYoUnFMH9h1KWbr9KZjsuDgf34gxnYRGjCiVZbGvkt3iXjQSVMnasGr6XT46QD4zyu6DUcg",
  "key12": "wLoYF1Bn7V7pfyqYxxaYzbNALPKfkh2gn6cLUuAAVurLVP2vCf81RQkxL8o5QGPoNFSaQRJaGMDQtSaxbeQgSDn",
  "key13": "3X2VuWd5u3sGUxM5dCNrR71ozZKuqeK1X3G3yx6v1kw71UPxQem2smuybQi5DA13Q9C1Gi9ayvyVYHFBumJ92Gaf",
  "key14": "EyaEJhqvo5sZLJ7ksRfW2BmhsbMjca2eayXkHdt9cK1najAVriyhb2kDezcNNBA5xX8Btwe2zsvteL6YXZkBR82",
  "key15": "3Eic3WwQGPmYJXjbmSPsKBx3hBFSubkCqAfWxjtwKyhVcuFD9VZhX6PT2yPgRgY7n8fAUg9LK5w2TbuhDQuGLYgc",
  "key16": "yfT5dkK4teEnRUWWmPt51mZiGAt5E3s2U3RrASzGfw7rGWHEi96wsov39mkwLQ9uTX1zevR5pmB9ebmUR1TrvwV",
  "key17": "2DxmJJvEw3NAayVJUWAm1YS6nEVx9B3c8cQ6zyasePpxuGpFre1Eto8gLE6E4vf9DUZHDqrrfP2tWfQmejJ9T5Br",
  "key18": "2oyMa5h67ihm1KBtNypnQtBwcVKqwnLDxEq8bJkSJrqpy7M5dwEdpuj3UyzJGCF9J8wYkxFMw8tpDMez1ZPtcvTy",
  "key19": "4RQW2hX42ih4oJu6sBRRU1UeCJw1TKZ4GumdWotF4v8bemccF7vuTF56MzJvcacoTvSUWr3kA3HPgXtLkgyXJvNr",
  "key20": "25mB7EPMrgN5TkjRdiCdjhJrDNCYR8z8saaUHXQhw2dkPyQNHEvV21bKQ56ZEj91nj6sEjE3YfySh4ZXjzomBRis",
  "key21": "4deEpuaQZHRtmisopw73fxwSBXm8aErf1C5QZx36mF6aMZaUceGXBZeY8Yff5Yi6UP3pUnn7up8jJ8NDLmFWTZQh",
  "key22": "4tppgC4CmDd4bhx3BedifNaeGZPQ1GF3WzwjyCpC1Ygo1S9QMpyoZo3CQpynefu8dvsAvAJLwStghGN8EXuoJ2t9",
  "key23": "3dTpTBXXNMGvD12qDX4jFByoqzgRVU6cVr1xQKGcdBmj2eDXn7aPML4Neu13xY6oMudnKovUAgP3HZmFzPLkzUai",
  "key24": "2Wwa3fxEcM2a44T66AVYHEaqi4JqyH3PDktraz1YuRe7U4dK8PCuBQx4RwM9HH2YJ34TofZXCEPfyNw64NcCr2ez",
  "key25": "2ca6pDiL7abj45PaZ98oopFfiZvrtXZJfa3dojhSLBxjenpyBjGxLZUGSVxTcfbFpd6LmwmgKYPpJiikRLAZvQcC"
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
