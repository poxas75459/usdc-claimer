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
    "2EDc7zvbSJKJ7iKJv9MMJDxSnpA9ceZosL87H5ksq8rZhhTZGrnTZmDy5ar7ahZCqmQJbzWi73y5isdBWoe4j1wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YPb7eMYtveXVG6n7B12P8Tffe7WPj9qkASYdv7HpjrVGXBd2MSCisgidMwNuzsQuDmbLieobcB1jUST6rsq5fSp",
  "key1": "i9Fet88Rp8nCasjBK9SxqgZqP2xZ9DZUNeAno3SxYGCVXofPqWWjdmb76JgFfb3n9DsExQKk1RgHkFycBeyMRND",
  "key2": "5BZ23t1eaYs5ni98W2xyU8v9XbMBupWy72nFuBfmyV1Jwg12DFqwkgyg88yi8XD6EvP4jwZMmszHxeJpmLpeYPbG",
  "key3": "5bB8mgWBDM96HDs4m2HSHFa5mC3YhPFEBGmDqDqdxUteabPqsJx7mHqBzNJWE8HNkEXA5XRBkMvGbxqruytoCYeR",
  "key4": "2jU9D35SuxVDC7UXSAVXoAyYyeru5fi68qPFtKW3TDNxB3wPNkbnEbdgsQKEhMNgYfLgN7oLTgXepXita6PaHWRg",
  "key5": "5bzWzrJKuEU7uqL9QvegVmyobpKbm3hpWCsRvXW2Y9jPRDN51vVoEhFFggDN8Ddfhpbp9n7gL9W7MLhFj4FZq2hK",
  "key6": "2XptvYbAZNeuFmWbiEbS9KGDJ3NdQBxgLd9msKXesQUAEc4rhu9WpDhUEXxJNmyAqbnujXdQYw6Ythwe9VqCTv5W",
  "key7": "3gA3XRiQFJSWSBfXCZDZ3C9CeZT7LKtuzEUy3QkGBs85Yx9tbfLLLGuttS3jAf7apu4jDBJqksWH2Ac2b7iMCJ3S",
  "key8": "5TPAbSWo3ccTdKnMLFuAZSTSQWfpkhZHVfDJ6awDmr1Dxif5tiuZRvxQbqhoxyrNExnALV91KSTA8ZWN9YErY8jp",
  "key9": "jWxA6hx1ZVbaccwpPnDkXCNthBRqC8eVvRTscMQftkomLUACFSo2rzJ1BJ2ApAqKwXgVZ7zkmgZRE2ERCikAqSX",
  "key10": "EwZ26t5eH4CesErvcVwLsej42nkDkVdTohxfQGzVf6QUXFxL4ctYH9ZagYgDQ8CRbUBZYE5AyRnU1tmNDyeNkY3",
  "key11": "3uELtWgArHd4JgVKUFcxT5igp5kNKQ4gyHd41CypRwF1Ng8eNpdfukZRR3b1JszWinoALfBx6rQqsf9djW4CCgbC",
  "key12": "28mX1LX4G8FQRY8H7pLpAgDBpC4SZnFajTYKAvCHFuF71dx1gqy6Y5y4zMv9Jah4RNMCosC4QSdCpfBueSVDy5kD",
  "key13": "VXrYNQbmQW3bAGB6mDQN1Aypx4axpWpDhj2AzisQNZyYCK7UzQUh3taAVeHT6br7XgikxB4NrLYtn21AsuT42yU",
  "key14": "9zFgLhyyFLcqmzmbkEGDHSGerUovHFtb7SnmGMq5mLdvFZPATi5YTHhrZ2RmmRSXhpjfB9VZeY9fNrMU6L5AUbA",
  "key15": "35DBMLtx42cU5zBY8zX3waThr3QSMbkVyFYoNVjZjMcUkTLqrTNhRm6V9vrJpmqtqEqN3Ytq9ZiLSCv3CJ9Kk4R5",
  "key16": "v48CarX9enbvbY9eC3SLctyRVfwhekXSe7K7zfPwSRQwSKRnqM6waKJ7smdxyVa6uUVdxVEZrUqFk9ecnjwT57W",
  "key17": "3BjVbA7mmK8CMoJ1ajCgHZD612Mf13bivJjXweABYpsjj4wKyyzoGYnjo4QwjWJJUdu5jCETitbrM1APfmG3a9sf",
  "key18": "4uSXNvranzQLQi7SR9qXKV5a6QUWscrD7Gc1X1n4YdqpUbbzyFV5f2N6tEXXfay1CaV6GunD9RSGhGdVTEW7wM6d",
  "key19": "2czBTSPhRtYKAvqGLPrRGzi1HVPXi9yoQX8VDCciXWNHyGLw9DdR7fNYhq7iCXX7GUbRqvA1W3d1czydLPgucAqj",
  "key20": "4vwpvuqbGgsSm67jwBLYTVSpEQvN9ouJfm9HkXfw3L79c2ywJTAx9RG37unjpdCReY8kiu1Pyo6F8LaqoKRXafCV",
  "key21": "9hwCPH5TdMYgRWAumrkr6i6YYxuCDLt6SWssURRkxGALcrwvPt3Q7VgSMDoCt3m1PqzE7DTRFjTABrGWDeHxATF",
  "key22": "2EqZ1rHJ6YBemJBCuBqRoefUVzV88Ro4gjtPVLn41LwvUyudBf6XKr2zZZfMjaxNpcYE4UiRWM98HSoo6yhFnBwf",
  "key23": "3qTwRVBRyECo1Uv9JNN3XHfCYAYhLbygL7cHjwBbc9nPeFjVxu6hpq6AgMnSUWX2F5w5zuHynzioiJEBcxMPZhSg",
  "key24": "5khEqYs2QzsK3tux3Ss4GRWLA6xtdUeKDHXFnupdW9j96TfX2QQqyR3r1yZ1Pocc4BmBimtvc8qkFses9WuyRfc3",
  "key25": "5YkCC8pXy8nrNiA2NvVbHDKNdrLnW1gDxcniN327nWH1kyPAx4v27CGRoGkcPQFKGCKSPi3bkrvikXuDunPTnt3C",
  "key26": "2Tfh8Xe5Twoe3k53hMa81MYjKpyzUci5y1HL49qYci94jDqnhn4fMJgTmygf4cvg291fMAJSaj61f2Ce4oiZTFD7",
  "key27": "54KTBexQ1iinyJAdY3NkZmkDKyMPGChxVgxjGmRS8svSqp8CYmPQxsLqpoGwM1msLkXMiSo2LbJB8R1bVX7wZ13p",
  "key28": "DokZiEc3h2LMMxe1qQbp2N7UiGatweQpegRdKfJLjg9uQtXtW3Twzx5GkL2Z6jmHf6X7K8C15KAs9SYN5cQ83LT",
  "key29": "XBPTCGQ4qxFor6DdXy4pXgLs2wcDr7mMWFsEr4AvWPq1j6KXMfgckx34L6iXRpBqA8bt41dLJWuQGhMP7rf8LM6",
  "key30": "4REK8jmvVbkG1hLuC2sjPUSHZ5nxDYrRMbSxFxCwabNJAXexAzSEa5cErnqAaLer6a8JfuvTfCJHpg7N21625xrM",
  "key31": "65YCryuwT5oaX6pG539D95WSVmTa1fMzLYo1D6zqLzj83N5fzwpx86tQKVKumScQgU53FEDmBKRR9X4wGjautcoW",
  "key32": "oJmC85AMuJLszeh7tmQuTi6utNsm8ZqFLo9Aa11h5XDQtbFZLE1EB5PJKa8aFJrd7n6vvQ5YfA9fqGzygMiVHxR",
  "key33": "4shDSZD7U8ALNjbkHLUprkSK2vMehvpdK63jpe12XJd77B6d1j8BdaoexqNptGg9r5yGBAWnPF7ufFUGweD6kdjz",
  "key34": "2m3matwktbretNavqYgdwVR1Vj3SmTo96VNix5ctgN1RjRJu2bfq3dzHDd36RMeGnRoWMSVfxYWoHKZp5Sx7fnmn",
  "key35": "3f58QUqEMGEc9EC3ppmFpwyFaEAbW4voxN4RxN3Sw8fRFwHsZNAnkBahWNEcTdH4sne8efPT3Tbawg14xTFFjY9F",
  "key36": "2rZ8yrZ1M1NjnR22e9uhRKZkn3SPTa9ucDnvGkFqpx9EXhjypepWitM1hGRpMBZjPVEvByQZ7z2o9imWpMvnFz1Z",
  "key37": "4cX8hacsTNLzjXkYnFmwAHNGSXPyq4qSZW3n3RYRWktjbohQ68pKdtbv8JhfpETLQvAeiZXpYMb7LyS426uWDBTb",
  "key38": "2oZRaiBZzChsUXEEuPwE11F38CiJhvDoSvcg2ez8wPYDydG3h7FFEEyxmgiiU5AV6Sc1qmNFHUugAKQpBNEx3e4s",
  "key39": "3fmeYSmWRKysGxkBoUiY1ZdNBKGwpdychF6NQD8V6PsbWncjp85wCpLZ3kta8b96QzKU9Da4YbNabUXzHhXhXHY7",
  "key40": "32o3ZzszojaCMiQPLPhvmf3aaJ1qz4CLRxBvKmc384xisJDbm5Zdiu1ELPTxFvVLu6ZxwCD9dtQFfBhVM8v98ZKX",
  "key41": "5XUWRHieHtVBKH7a8u2UXLDi4eN6J8cYVFfmjwTa3fyUtQy7y22J1QDxSyyX1zQxgB7yZeoZLEGf1Fv3kQnCuD6w",
  "key42": "2MeZx638rkd3KrHuNSVXn2EKEf7sKL4spL4EywhyiUJiFwgc2ocwrzDLn4HU6JBTSUEmwFJ3CeHTeVknaPTRcCz4",
  "key43": "57ZChS7za638xFj3R7SBjvA2xN7rLTSFKorddqaEy4V8pr8Bo9W7inVxkWtX6EHiqwyHMdq428gNUPMLLqDSZkSP",
  "key44": "3CqXttke2mi9LoRyy6NvWzMWAmPnwExcVXTNRh5uHFy5UgtdVQfbCMyiG8ZKYJvYjcYZZk2xY7Qg6LPQr8tHBzVK"
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
