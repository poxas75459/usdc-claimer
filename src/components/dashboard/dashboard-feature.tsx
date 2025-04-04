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
    "5xPJgHLAJ5wWGRwNWFPYTVkxB3LXo2LcB8ao6Ac35tSwEHamVUCX945ACa8ZF8gNR4EbXjXrS6dJoQ87CUjVxAMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zrtf5VbLs4HobA5bMq82x5xxD59esunce4h5a7Ymytjvq8jRZN5ZDEC1Admk3JZTwAqQQv5WDLtgTHDFG3cQLKU",
  "key1": "PSYE7hZvZU4Rp9cSStQuu9vKwdC3tx3725hyydkH7wR5yAVhY2QCuHS8ju8fme9aY2ki9dbkT8zSc21JUie2oxT",
  "key2": "2MpEa3d7DAsCUzhE1oYoTPQdbZXKenxNgmX2EJmxGJYemDs1LsAMRZYhsNQtjaGL9sBsGFMwcDQPB1tQpAHcQscR",
  "key3": "8mhkWeGqf5khpHrmYotQoH8GroS1rXWfdaghDL2MtGiZMeR5aDf4SxZtkRtzbT5d4jjqK45irgsWjvWp83tVhZA",
  "key4": "44H7eezAZsDumZVb3ainNEe6mhiTpbNNCTcC39J1EtFmUrs3FJnxXDa4SZtZe5kywPF9YY5KEUDsWfnJ2WaetnGV",
  "key5": "5NhzNnNnCGMqecAs4sPU32RBLtTex7vJrifQAuaZzL9GrUNMuGDbYGjTRvdWY4XUxpMgnsjEUyAeX9D254j6QY9Z",
  "key6": "5LsAusyuFowSGPPqJahyCDp1V3Q35MAo9VuEainRSRGW8g4sGmH5axSs1q1EtKKuU5Joahqe5HKykaRfxhviRPNC",
  "key7": "5v7NA8bWHfhgApf4q6VqaYpBK5NgoyLTUZZpqgi1xuNdGeY4W48P838SQCHQWcQpC4KXkMUQTFJWtdeb6QXkLoTN",
  "key8": "MRfHbVpFJet6aa9yQmVqWEaHrH79DnoQjToJHBP9GH7Kz9ZinXopok7TJeo6gPNgqqUDYXVpHs1xS7ULnEmuSeW",
  "key9": "5JJ3etMEtEd3jDngevKeNdyAumHwn2t3GatKkBRisbMHPTnVpfuwxuRbfyaUjFnTDEKKV2LgVZw9Kz56DJFojxA",
  "key10": "4ZzwmmXpSuSWiGLSo4qoEL2S2FLriQqmLLLuA1rn92XTmk5bZFk9XX6aCPLCMxaFpvZvmWHtrt8qfpYfk9CujsHG",
  "key11": "46mgMfWUyqNYVk44ihFUkYSRkoWXPospRXd97mjdU1rDmR8iw9dLyVzhB4PatE6nk5DGe7JwpQiaZmE2DuVLTJJ9",
  "key12": "2CMKcuSiYGw6mv6itBTEYdS3qhjYXa9fyHwJnUKrAs4iaw244igMPkGB9maheoYrvyDbwikbxsug4CckScEH9eRj",
  "key13": "2QXugdUFor2ss4wNuBfKx3vtRivBnggkbUknjvWQQmECoX8cuLeRfABPh1Gz9boNRa4Ab2N3endwiMLKZDzb6TQn",
  "key14": "5EaZHjVL8CGzNTyotHaXvLpV68cC3UKxKbfX2gCV68CgvFS3eUhBRrEXi15NyRNGQErHsssZNiZ6Sx66PnXoZPTp",
  "key15": "F7qUBg1xxesRyx26aTbYz1KVtihUKFqAN4J89JuNjjsfFP7iDFwKsbDy99WXWjETALHAsTw53eYDL9MPACxmM23",
  "key16": "2iRivdjpWqjRQHRJida6J5jep6Xwbgbmnmob37yskAbq9QYWEf1m3eS8DeKc7gGfDgs8xmQ3yJWAM9KfUduzURXh",
  "key17": "2N3gRw7pPomHgjdJk7kY7fwhX3xSBRhZcxB4nkhpQeXbCzWxxkydSjGuv4hsr7iW4yLADFs4pThzkavCZjkSjnh1",
  "key18": "3NmnT1n8mW6krhj3VXeVVGPybLyePkQd9D85Zp3XwDBabbp326D5Bwc2xUYfdyXs9NULrS1DRvuGyHFxi6UJCkaK",
  "key19": "2gG2zc6VZtCpMW1C3rqCCLJSpw6CGxtudM36MB6Uhr8Cw3ngCphQYnuLe9xJPJn8DeLSng6EpR3Nz9dCC1Zr3Q6B",
  "key20": "4VrVoF3Hfo5rFGko6fnucrn3iWyyv6YXouS3mKWatmTjf5xkuZjoVUetcypBb56DjFhh7x6L3rh2sMWkXk6SjBmL",
  "key21": "5UdUWRaXkmKQGwcL9iL9CXFqdq8jz44o2NeJ36K4H13KfevGEhEDo62ZwtNPMUmPoyq4WpiyY75jrqyyS8x1M9xt",
  "key22": "462G9VzAN1rhbh4Hg3XMteVMLHY9DtsAbdSk9wrpsKREkYcVFau64cPx5vzFjuZfi1Baf8hRQ8VVgZ1yX1NM56o9",
  "key23": "8bjc6D4Gv3v1cgH2ugQJHmFJc1vKZjwB9Jv7sbXpDq7Y1XDGhKL7uCHuiMGYvV2gajdfwLHJ8EhR94JbmdojnQJ",
  "key24": "4QzRDn78BLhdBJTrCCNEDBKMb9FYDYBA6if6Urxd6CHuG1S7Zhe4oWekLkBTNmXSGAsVq5hJk9uKc89UoiQTDaXG",
  "key25": "2CwqLaB8SN7cZ8mNVajTuNPUhdAJtPH4DabSFd8cS7L9Bmn7jfVxiA4pRmw89mDpkWfhQ5SwwkmwV9p1Lewe6oC9",
  "key26": "5grpTqRZ2tFByoJfXstj4XcWcZN5Dx85mmMv2WkfVRwpUKwzd3myg4HBRvB3nfZsJt45Zs9e2JQUGpq1dJyWmA75",
  "key27": "PZAVorJsk74wwmQsgto6ueDRRRWxJate6NNnBPs6k33RoC9Sr6LRFn11jHnZbF9d4H8j549WhcSZbbZYrefJzD1",
  "key28": "5muBG7YXFjG2hrgL1rr7uArW9Ykg5zZZg2r7jJmPTbbhZNyQ8droHRmCaYdK4AhLLGLwUKQ2prFCUEh4SFsUY3N9",
  "key29": "XJukGq6p4zAFwtvoNJegR7YzNFq1i9jpBmWHJyC9RsdMpFnBTi9XHCBQguV9AmCT4YvLBkp2E7PezSfJAhYSUg4",
  "key30": "4Haf7Ypg4vaPMALMjG2pEu83kVHMaAnPKbhL8rNUPuBRLG2a2T8iahXVNQYVC22RZtKJCYQDqrmM19xRrRFFMB1g",
  "key31": "ior8kAgNFRBDck6iurymX7XDJLHyMYsr698vHtHXHTSWAmx3Vf7aj4mx3iaE7YaVTQqwmdCVNGpk9Wt8AJoaf3Y",
  "key32": "2Ed8834GTfonKsCtwac8PbFWB4UzQhcYe8HAXpMJHTkTmWqhqkKiE6uzF7bdaz3F6doeWGuZx5xeXRdf7WkFyDeR",
  "key33": "24opVeadJfroMLwMYr5qUsHRtr5QJYU47ARrXELKrVeZtKqtTrvYwhGC3qUMn2YCs6TPSj5ma6UPLdGLSkYVUUSU",
  "key34": "5oAWm6rJ1djd87hYzFE6WuXdMQSxDfBVNoEiVvSA5hiRXdPzVQW6he4u3N4g5kmfkMNsCEHUM1z6iR4ZJspXF27",
  "key35": "3N2pk2V9m2ooBh6VyiijG1tLBuAH321hqKu3waJq6A2QYokwwuWvXCFvGBKuEmUk5oD8GugAJtxn75dRhYZUFVEX",
  "key36": "654UhLtA2Zq2MZyR9aW6s4VCRr4s1ZRG8eMnXJ7VGj3mEqVfetP7zVSEnpKbasMqxbRrXLGHMhqZVzndKANXrGGA",
  "key37": "5tsjzvXwfgETMfvgRgAh7f6FVh2gZXeZFpB4e6n4bM4LufQQ8cwCW67ZQG4ZK7LV7eYuGvWLxNzegc8cwVzYCgQx",
  "key38": "219z5aL19yiDpm35noaCdZxjrwevMunJ1Znzb5m7s3wvUgL3Gibgq6NtkoWDfEwpfqzZ6pXSUeP8tdj37iCjnfxV"
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
