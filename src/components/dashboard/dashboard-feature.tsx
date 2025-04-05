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
    "4ovNNQ7LMCMX1Gx2rVFyhGAAf5rbpn9VnCZCYLcPL8KjESjigS14P2mJfGnLcNBzdM8v6Hdn2vFVUeNt4jp3JCVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmftoYXHH8dcGPbzL43HV46KWgDcZepL4G1fLvdwoiCdwgTQAF8CqpmkdXSvVSNbvWmLrNii3MWdZ5ey6DreAJS",
  "key1": "3h5bNF5UkihWybDkoLswmve5197wRu2XN1z2Sdqqy93HFfgk3JQzRAcNySjUGVSA6gxxHCeR4Lgp7knMjW8AsVhT",
  "key2": "3Dbc79fzUrssQgc3bRLTtbd9FD6gPnqmMsrL83gCUKWkV3dNGVwo2f29yNGUb9WStRdVDs43vWCqSSmj3JW8JrmF",
  "key3": "sg5VKVpuBzdgiGp9igqnDUcEB7NAHzRdbpuFrqvLk1cEAKZg1gyX4UVzdU7RqhmwVEdcKcUZgPVnL2UhEANuwna",
  "key4": "2o7S17vo6MT3D87VLAumCX152XDZKpEhZn3LmUP8kdEmCSr1BmQ8fd6warHigCSpy1UJWFgyNJsRzNe3cw4rDDVB",
  "key5": "2TsMTcRFG3yWhFCE2MXCHSskmy2h9z1wiQQ1soJ1cky3gJwPoi5qb3iTJoAmcxx1FrfhV82LFK2Z8Dx8YHR2aSEv",
  "key6": "3SuAVuc9SgEztengtan5W9EqBW4sn2iJ7F4KXnkQdRTyfGED8hHpw2BZoAQBQ7KvWXvn28PDcgDztsgZnGUEKupH",
  "key7": "4wm9NjvG7nEAHCFbZo9o6HkaWtZwCrvaLURQXz3294eSuUxuPFpdaNRcB11VsXx3VSNZxwhxmbE9tpdmJvv4oPBo",
  "key8": "37QbeW8Yn1CQdxFdMGMUW8RPakp9jJXPKmCHvWF39o5cH2fESpSHz1ZtwAfH9LcW8LEoLVmQMBGTjVn6YFwDwHdF",
  "key9": "ZdoWAywppN7uWSL6odfsk19g4pC6iN8yuyQAYoK4MRD4jTqYS44aWcZLzHDJ186Xw6i8xYZJeS3VkSBXBzqvzni",
  "key10": "5uxB2iBR6MU23jQtRfADvo6TJB8pqy6RrpKT9NxJVqsRrtx2Ve4HzyDmdHCTh7kfN6HBaPbvsaNDTuScypNR6WPH",
  "key11": "PUdMuM8qmSrNvrest1sAE9nZ8HWJozDwK2dRu2SdtFwaoVvecRruo4zEUnNFLMjRESfmfgJdXNLxehn7EGfeEwZ",
  "key12": "4WAMsD7HfW8SugeXQ5zJjyiXYnMnay5NPaKN2EosJQ6ZbCrDw1CZCm8UvDrE8ScUftNEYidDLgfLAJagqRNWDsxX",
  "key13": "5v72MrUuFceNuA8zxhDJHR6Nm96KmvxefoC6FGgu6YFJRwqTUKfB4wkrm2jzyi4K6RV5cKTXvVGHTyRJ14QSKiLQ",
  "key14": "5wGVfwbAAPJCo6oJ4uduXAh21uwjK52afMzP5jD9oJzZ3G99iJUr1vKyDNrF4CZdSx1XRdLwLZCes2Lb74fvpcFe",
  "key15": "4KqEd1f1mUCseWfaszcL5Mmcef4g7nHvddqGvs6CCEGXsPJBErsemddV3X9b7GEZRxXf4gSBqhFSoJFCZ5Ek9NCs",
  "key16": "7H7N1FbjrqdKcBGDaqFi1VcrB73TwFbkyvBhyHwNC1oVp8A8MFbvZprLxxa28Dj4MDz6tiSUG1wrGk28W8j9pQD",
  "key17": "TcyZyKfsoN7VoF9d25oikX5ekRdKDVQnUikKNrJ24Sh8gzwbUVmrgsbCCbQyagKSHGq5kNbcrDX1wicmUJPPuUj",
  "key18": "2AHPxEzXnAXNkXFYBvD4CNzgJXrA987hkxQgSvyDAeJvAWwZZDDTXBx8iDk5rbhSDJ5knKK1Enw1rf3m2h1QZLfo",
  "key19": "3dmPbuxR78oniKoAoHyP9js3ijthEcd2EtiXy2nscXapwCA7XQmk7RMEXqCjCEYk5F8JmSQAPugb5v8cixy46Ggn",
  "key20": "4crp8JHkGwMKD43E6Pb8sd8uk5Y9zQVNDxLnq7W7TSSVdsQtuQ7zLEJKyLfdzkyU3dbErkqZoyKzSxNRvG4D3yhA",
  "key21": "28hGzZFUmEsncRzxxGmKswt2TcZpVdyMJeL2PcAhAEXM1eufbobt7HWeHs1anuqu59Dknzu82XvpcBUd369TtJta",
  "key22": "5AwyBjBpx8iVmUxecQ9eNhrSh86iP4y4XGf3u9sRdxxAwm7NZyr6KdEAYy4RMikYiXS4g6j9FdLbW7SniLLuBpx6",
  "key23": "4M6qpGVc8KHq3VHaTEptRU5L4rZfEDyCNJiqHSYuD7sckUmbj9affvP7VK7TCztbuhtTg1xvRyQDGFLVeLsXgpFL",
  "key24": "2VB8bPbYXzLtfVo3TSDySP2ifZvgT47DhsixryBPBpLKnd7BVpeLubQKEgpHdPwz6hYrG9bjUkqGvhiYYjMaqqL1",
  "key25": "xRgEjz8FgunmVDcPY7pNVjeNaSugdnx6JG8qUHRNyBzRYvTcjcWBEEng5vh7mdsnmiewE32sC7QWVoK2L3vp9AZ",
  "key26": "2QPo7SjGmopoUPhkkYnbL99PR9wcpt6kX2krv1f2C8ivjW4vXGKuvEXrxVUYP57NzE4irLtYxK9iowK2TQCpNVYS",
  "key27": "4DLhN9HaPMJYn3QJHEKEVmMNNf9WFMyGEDoiRa9TrfP3Bgnd4nAsXk5SHGzBkHZY2H1XVcM5WAV8y4ygpzKDbZ4C"
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
