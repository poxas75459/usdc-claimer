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
    "3UjKY7xsqdxAYzMVZBbmDUjnyipDTAsLGGs9GRoCqFPYtmttVqK1WNUcSfUryhjxF5Eq2qUjWrXzJmuobKya7T7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G31VuWu2sAz24pHiLhCWFSKsoffXZzFBbQWzSnjvrBNLa2MyEjrghEGNpGtgdjQmvWfksinyqQrgaN9gUBQgi7m",
  "key1": "4HQHeF2uhzun4LetX5nDJ9ARKVNXTaQsutHEy7Gk5HmCNrq5uJPtS6C2tg1vbWf2hyD38ax4ekmhRWkYjjgqxqv9",
  "key2": "bapoG9yCASTGmoKZX2VQyKMEh3uVgv6Qp6q8WWNwy8ctdSvhBkq7YjUtns2vodt4H8eHLNTMn8ESsznNhYJ6h22",
  "key3": "5LEMBjojcsWqXpC7wTfJKAFshiEKpx1ged1hNp38f56Q8tU9RvUacRvXZkc3DASqSDVJt7nDrYzDTyy5jhhjdzZ4",
  "key4": "5eWvDxiVFiY872pV1Cmrjwdf26zRXwewVo4GUjz41ACW2TnCjznCM8KUibsEvxGgKuRt6vcviU3ExQjADT8JVL9C",
  "key5": "3f8H1YZetjoKijivtGCBF6QMStDdREkUazXH8J8esSipon6ygSxFosYDvviM42hoWj6un5AWfp6fuQY6yjCvYXDq",
  "key6": "z9K6ZgmCqNGftUnAuW1m5LJMukPEyumpk8uTrJG66jsxhACgG2SJzC8QtnJTqFb4P39E9AY6wQEN61cJsyGyMXY",
  "key7": "4k2dxzhn5YobFrDp4z4Byc5F1QfHXqTgNRJELCxawWNy1w2tmc2a1utEiQo6fRxTsdWRgw6aEp6Z3kF1JxtG22ec",
  "key8": "3ePRifVsEUp8teK1vvovtgAccT7HPXbptvvDzbkgQREnZpLeDHvnK4mYN8MLcGBPuRuy81noq1dG9RSruGDnJtKY",
  "key9": "28x37YhZJ9CbJgFALsnDiyBjrZYnyfxhHTvGDm9Bps7q3xVezY25GLHDfHLwmE3UGuXLH1koGEVfYfhbiXa95DEk",
  "key10": "4z6Q73GjcJsnTHxCxc9ZsV8ZTeCKwA2xSS7ev8YRbFP2x8wxjax4rL1XyWxBV4w5iwY5xXCVFxb6bumQaqtYakFh",
  "key11": "2xVQuZYCX9d3ZvC23V3F6qgQmAezD7vp2miNSnxC37nzdCLfsXtyntCTFNyV15yQwiTP6rrszmmDeTnx12mnG9Q1",
  "key12": "giYTCLrcnryiDbNiUU6yYJJvUQXy5wsk6djCf8bFsJabvuYWuku2YxmuZjrme3wgvyVzd9kapehAnp56qwHnKKD",
  "key13": "4qZ446e6kteBqTziPhd99pCaxxuysGVNnDNLxAudKRBo8wCZaRGQanp1nm7gn5CQCKsFnHvAqRfb5N4gatFZoDqV",
  "key14": "2CZ6oJz9pWzC8kGcoYyof8LDedZLBKoot87cozx8enu8VroVvGybZLN1xTh8e4y5L2KP4M63RDP8z6Xm5rRuApvL",
  "key15": "2JrkNPvQAxqNDg72vSfXgAn1gtuS1QvqNXppYkfAXKST9ngx22GgvwirCgfeK7Qj8fq2VukFoGoxidxBNVDcA675",
  "key16": "5VjitojG86cEqWt8ZGcvBA4TwfA6u9TdwgCbcNTf2UfbnFJF42EdMH7EEawjNgfizTLfyyw34PeLMUDj75rj4x1n",
  "key17": "4pfHsDbkxkdvh8d6zHRVBz832KLGZLSvYsoagNARftetX9TsJ6VALw41kC9cDmiRcoXK2LaFSr7CATvSoDNGsojg",
  "key18": "2TuU7fWyDKKBq3pn47RJ11HFyn5bKVeY3wwYgHqmKKPixd2outqC6DRjnhqS4EWdTi4wygkgBbBCKtCKBZocghck",
  "key19": "bVRZmzzYoaD2a93fC4dFy9WEWB4RtrqsxJZLJMbZGXpVuJYrVSWs4bia7EsqMmyx3dVdNsb41vaR1FkfrNQMFqC",
  "key20": "4ApfFigjAcNBTpSRpLGoVx8o5QuoDsRKJkUWeAfLXvxf2YXseGX5hTXYP2P8133Bo8YkkUc19WeFwHyod7tAtLqW",
  "key21": "2C7r9bdsbNuWsroZQTDVZP5QPCwn3i4826z7cNDVCAKDdhdwSki349qMQYWxx1Q6x4VqdynpLJ1Tb8zUUB6bV94H",
  "key22": "4iMW6j7SaciJh5VcRh85DBobHqSBHvpSA6QEPsEBYe8jNcpsxTXywE7BMocJzDDzWv5Q1aibTqgUKXfqWRxEfeTx",
  "key23": "5yWf4cF7GkMZTGeWWxHGyhY92kt61ZqAMNYcoM8XiB5xQ6BUESAw9C18zW4piF6UznKdFdaFe8ienKaeWaDEcFSu",
  "key24": "23oniaZECjSd1BnGRQoGvdXp2SGrL87VMUZQDzKretxEAUthtWp4VLDcwn5wJhbjr3tF3pbY9N6mK3wvKrspiate",
  "key25": "4hgN5TaByWe7c4AhfACkgDVe6gPnseSitg7YyBcRVeDon82U9ZvduCLYdtdHST2oxzuHAn5Wken6rB22JYmoLHp8",
  "key26": "2cMBHVjQSMm2oMcJHZ29nPAAwyg21xUGjUDGNJ9GgWStHp5BjZ9satV142m1hMJ4qbUbyA8Tk3DhyAywVhf4oZ6V",
  "key27": "2G5D5rJBocnja6Yh3yLU8CFc6XXoSGH1pGCQnQHCBcpGWkNt97fxoUkvE7FfcR3bieH9FshDqrYKaCMU9ckjEhx4",
  "key28": "3nWhp9iWfbKj13WbJv1PwM2nfsS1mEpmyiRcbq8seVy8boxtFoWEV1vekf5VgoeMByNsxkbK5vxrLwyMFypvQWVz",
  "key29": "2UVXh1awAafJU92XBcgmapnXvMoUnmoG5fBQ1FZFaEAReVzv48jwUu8RpNaYN4h466ZpPh7P6kXysVPcL2TUFtdP",
  "key30": "mTF5urvWT9hifRjezjY817Qfa9PLzVRFg3PncBaspg3SbXxvqEeRcBNVYCmmbwuAkaPnCtmwFtkNokh2fcbo1fw"
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
