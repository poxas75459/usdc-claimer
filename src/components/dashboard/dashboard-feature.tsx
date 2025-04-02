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
    "4ed72SrRy6hpBCSzG4nyFbJG7msLJ1ui7Spf8FFFLQqcsDdD5ea5CYnxRnxvkTFqGJDMUPgfhhJswwJb5D9VsUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBo8pFACFWiNrqapY3KB2f95YydywKviwj4PP7mYjKkWtiUJNG3x6xyBXb57VkkDkJ563uCGnVWhGhNYHkXw6xk",
  "key1": "5FBSpXtt1AwWiBqmF79MRvgRrc8zegGkx28RDix2yQQju1Phtsy8mKqkkxrXphuz2EKfEVKXwvU1NSRPNev6fr7P",
  "key2": "2sTjWAAVW1aCutHzREw9obgStwYiZFEgGdxgtKo3HJz2i9xy6vBeFowQA6fWuCLAYBNNyuTgtc9opLcwjYEEwYe3",
  "key3": "gFYHzceBDNehpN7JixAyA5JncbuW54YCYQZGb8dBkPgAyxDJk8TRmZTVdGRZvZTKujHLgyQZiukpzQAjkVtM9mV",
  "key4": "dRYR7EJzPaxxTFgGi5f9SmF2UsCRxZJkp1GAWUxice27HVCm78c7gGvvBDG7Q4pajskaNaLz8yY4yuNaPzXnbQ5",
  "key5": "5wmF4FUCSmNLWz9kbKnvwfta9MEUZvMaMNjK3nHWhKHZ3NLEcsWKzGoUfDEfjnbXjBJRqPs6NSmu5RY6eQ6po3AA",
  "key6": "2BPaoYxEnB2VgA78SKGV4zqUnEcCAUGvVzLjcieEo7gcdxdNfwPov3w54tMJyH413f646zTfoAdYdRf7gTvRVYRG",
  "key7": "24b3rZ5b8s8fYA9UsB96hstpwrZYDvqAnyqCrrf3aRsPRNw7Dir85oWe6dDxGnx68vLRcZMVVfeijGLEWFdDm2t1",
  "key8": "5fY9WeELBoivWozjZy4ctghY2gsNtJxxsSCPTKFxjNqibwoPRuEexJ6ucNhWFzBkYkyDsBLGeHjvJsLyA3wi7FxF",
  "key9": "5xdxKjGZaBuVPrSnFPN3egrr4gTnT1jQXnZkPoCsP2prdyeYhrSyEt3b9iB8qcNkX5hqkTvcbd7U1g8FxR3dso7T",
  "key10": "4RbdWspXaiSM44oDcBW9osMCdwdQH6FgUV1vwH5XX48w77ZFeZDodajzjesKd8xrc6GHeQ8LoU5UViwJPzQ1mVrp",
  "key11": "2XpCtKX2EyUQRX6fDc72oVY3uaCL1uF3H6C5CNPnvS8gFSpY2zNpZpdafHYxpdQuZaVRofKRTQu8ZQbdi6LJ8X3r",
  "key12": "48nJAtr3s4nKKD1K3vrjF3xHmRkaWwk3Rse5kvjjSnYreat9NVSJDCCC4DMD1vqMeu4p4BcxgqRpCZNzzjpVXmdT",
  "key13": "39QbsiMTFUYocEcW9vgzR4TiDLxyRVuSSpWF9hfYPecx3WHJLQig4oqJRHNaa5LZ38F2WEESDeW26irQ82xkDdMi",
  "key14": "3QAp96eHqSUwAeisPskGPjHyD16r6twmxrGH1LJDaRCKRDMJHxr1awjJeumm8pxx5RGrXBhZXbWB3EAwLYnCypZE",
  "key15": "4WZXr3bBeDxZhLqxagG7MVVjkQW2AWSwrUMKw1rJA4mhxdnKnVMVmHULGfBjBteqE11q4VYLNqEbBs3FSPbuUHYq",
  "key16": "3LpotoUTGnmGcNUcRkfkEgFxy7jsMLVfY9gof4w3BUsryRUSTwPHV78ABGMezjjYMK9PiWMtrBXL2voddsW9B99C",
  "key17": "4fa3ULscGT49JkemCcbTzwUYrnmPDV1QQG64Rkea8qZqjx12uWbWEAUU1UrsisX58pSZnEvFaFnscKRtHZehyhe3",
  "key18": "3eXzt3XChTcwg5oUt9pXsK6KRWNiYRiGVpXRK6ZAkSTY6aGU2EjTFNHGQ4mfXGwMR9m1Hq5wzbkHYv488pYmYGRS",
  "key19": "2UXgC9CQvVLA979CRCihWaYY6TUcb4ttTLcjFBWX9DHvKHqbXEdrgH9E8pzcL8o8LEKQaCWwunh7RoU54fb4AhSq",
  "key20": "23jqUnhKqrxRHtMzysM6EpEWspnoUeJboRm58GFpvLfoAQkmz5GxPMvxNtkvwMCcTYGrwr8Wwu6zUuECks7jEExa",
  "key21": "4wiHW6RX6cHU6sPUyCujeTL94wxPBeMJwyqqX3m1691MP59kCdDhGPr3xufHTbxmHGHfcBFdufFyw9zL2NXFnbCd",
  "key22": "A2dohFEFBYZyDfuquVtdHvaituyTh3PE3ioVVDeCNZFwtKewFvuwNNccvGFZz9yxXkFCbKzJSzJAmGEo8KpkJgX",
  "key23": "5MjC8SSPTLLiFSyBWEew7mLmJ2ESvb8J7CAhE3mhpoGmE6VerSSGNyyT6Fcsd1eGkpwQ2AhfDRDXmzRe4eux9BHk",
  "key24": "5tWFz9PaA64bpFPaY2d1JxwrLD2wUepEHqU1hs99a3zLHF6XTDfvPWpmAQE3A9QBKRKtMGBjqLaRYw2zmdDRaYki",
  "key25": "5Mn7ebarwUvstqUw9M8qgRWG8U5TCHobLXYjWrQ1Tf8Hyw1ky8cPvwPSXUYCdhp6mv1LRTeC3brsxrow9Z5Sbms1",
  "key26": "29hFfWhW52DD9xNxq4DLBpJeS8y6Yt8GArrEt47BBsAiwsmiQvvZZ8hbt613N9Dk4GTRJazbYohhCuG96yffoqzS",
  "key27": "4riKeeBu2A9Uz9k7Zz8jPnEwhTcXjkFCJTzaBBT7K5KeHgbGYj97mCRXWvTDUDrmbsSQxWCycBcGTe8jEuirTE81",
  "key28": "4EuxLq4fUfQ4swfXxozdLWy6CJUcDvdL7kNr7pESgkrtB9TGATR11GyjWbgJzfyy6QCEbRTzH9mkwmDct8GCAe6",
  "key29": "3Jdq8kwdCqox8PFbH6gK8q1fvQTQG8eHwmwozyBTNoLPeA9NTSQVrop35WeBPSAJ6ZVnnKUZGhL4D8fh3Qgt89ap",
  "key30": "2pQi81a1EP8SXo238LREf21UQXvRsZKCj8RoNRUvkjVhXKVR971Uq3HiFn8XyYKXxVubxbzeDnFf9n9ASfvugLrp"
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
