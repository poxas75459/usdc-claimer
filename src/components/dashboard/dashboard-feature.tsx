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
    "3dN8nbcbYyDfuhqjQafyZ47xGbHySGmEXu1oLQ8Q8JLYRUpQuY7erLbNFW3yMAFg1DLNr1sBVw8qXaL2qENbM7J6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PXJ3jWthLczV8otcbQCr91vT1MmcJXYjCcxEHjZQXUAK8VHBqu118UB2uUVmbiCGki9HdsDGsQF6pxEhUjvvy45",
  "key1": "4BmJuzH4Cw7Ej94X4BWThgD2pSxtwvjVZt15FwL1y5kCEtWVEaaBjYEkkTobSEHt61jNbYZHMLRm69pbRXokGrxh",
  "key2": "35zVKLF9RMwVukJsnoUDBAGmqzQVAE4Ji6qpVEdD5ATUsPVitPHU4BKKxFPbfeghYwZiai3RiuhmaUErGaYkHXXm",
  "key3": "2PxLjoSqJgcipZZt97gUF52cHHyj1z8gEFeW32Jb6umRDfAafBjaxTzwqhymMfXmp4PnCfxi3g9beXoC9yyPtCeE",
  "key4": "4nduiCZj2ZGdD2bFmVNpbbRHhdofERGfSgJMabx5itpfSk6RNDAKYSnDqThhmg38AnR3MvVAFqJf29p5w6pZK3Rz",
  "key5": "4Fz6CU1C8eZmryKx8Ep7Fa8zBdqvu2tNNBbP3LA8DTu5uo4FD8tzhEUVCCi66Y9kvC6AQzjvyvkgFqFQKy2n9A7W",
  "key6": "yrV5r1r87hKNuz4gGP3onrWMQbUPZkEKjAGsvGryCmGtsCZj4yqP3nPd3ruKfMTt7vVgrjy4EdjgPEKjsinoNzM",
  "key7": "3M2zfwR3g3RtXJkX5bCqPVjy3i4z67bShAzqeYBC7WNpndrK3cc6vnayBk49dRgfuV8SA6BpfKDXbdNJhYaxe8YU",
  "key8": "3KnD2MeSU29ShV2DdxBFpjhGUpdMQxDTK9DWozTCDo8ivPN5FjxSqbarZWcK4TTzjptfJzh3Ad4SNBDZBzUESB6R",
  "key9": "3gfTwczpszrk8HjBYHF3zKq5DgHJd6YvSxfu4jLVzVxmvnYFV8ibhvnpVoy6VSYYfKsGZbiU3Ho3adb35EYDU8nJ",
  "key10": "EaqDUZsS5KWBpHhSMvYXbkKgLFXkRkxbaQZanh7CYuv7SNe7xjTbzE8GiMNLyW6bXSLQ17ckLGvubUs7onqPrtM",
  "key11": "3qXVe44DuFuPHhbSiXFcuATpy7W9Y9kPCmrMMeVeK9pJ5LtTu7eNMLCf8vP9bACGuTHRAmYnoZ8MYBF4jR69wNdj",
  "key12": "FXrb5DHfyz6JC69WdTwUZobQuDo82dx9FTHUaUgNvyphXNCzmyoUqJ2bbvM5XGKpbRLvRvidVyHb4hyfMgoBG2E",
  "key13": "2PHuugokBA9ChJh5AZ4cbWK6ARSW4Rt4f8uKNen8wHiFdifcEwG6JKPty11gCVwMCUibyLtn8c3cWMiPs8XjuKrc",
  "key14": "bKAwdtPxMdfgsEduqyyzWvpJAUhujP2kCkLrT7UbGVQ1Ksf9bfvCaoYotb9pyoz5tfzZ6Mv4UFN6JrUnT2n55Z4",
  "key15": "3g3P5oiscWmSrebnsmXrdtDmYZkm3GJYKEQgN9sgT6SHkXmNTvyVWBUvK7QNcAgReB8aK8Pt7r1YqTaz3W7NtBNe",
  "key16": "2okJB6qcChKBzRnd8isvLLzUFUfuRo4c39ksHbdmgdUyMxwWvh66jzYathSdUnPWF66dm1KHWungnuZ1GL7f9SXc",
  "key17": "uwM4MiAasqf5e53PJWyg9MJYTi4XREEzKjLF3PGN1QFvPW46rMCqTShskgG8AZUm1rU2Q7GkSZb7XGhQ4L3J8Ss",
  "key18": "5zvmF2PS6wDcAVgrpDj4q45nCCZQH4nqaTZkNxptyqEMowGbGeWJEWjyaC4gX6x9gA7ewCCNyhdaAgM8a22x4KKe",
  "key19": "5dmcavLxoaugbJv33dE4EU3v496cQk9tdRMBmzHzuRswfirssTauK1FxYmY4HBbrzeY6NBnsA4jdXb2x3uekJQKd",
  "key20": "21ijBcwKqGitDYwXoRW1tz4Av8yR7fKEDSqRhxmHwQFe4vaa92VECZvaEv4TEwxwCHghcSHUwJDwW392ahwMXFyE",
  "key21": "jvawkyicThYAHyrgDfREgCUb56qVQzL8941zZQqkzMuAvUbN4kh7QJQccWG5wyCoVbsv5NWbwdEyASgwgzNCN6r",
  "key22": "cbnazrXn5m8s9hAigFbiAoCUMRpZH5TKwVUpuRhnfv58TUssG8sFi7tJwfRUPfVYSkqon4vCMV7XngEHWRUCUQb",
  "key23": "5A4EsevEmEZCuErGbQ5tx81tJqy4qJh9a3daXdXzn3AqF5XrGH7i4me2BoZVcSzRZ3pV2cGJDp3JaJwjEhrXKCtS",
  "key24": "4AW9suD26igM5fAesQsbQHKeH3wskFCYiXKAX17NfqVziez1BkH7uuzYjk4JMrB88PzEwouuwA4MCdGPgnZ43iqV",
  "key25": "2J9c9FGB7xmhvnPF6mBdJnkANT54Z9giiU9SqhvoJDG52zoGEoCZzR9LE8X6bZ14PJceGhZsY8oqtc5NJNiVbcWa",
  "key26": "5VD1GvrrMnxs2qDTWk6XthKWzMUMzMnp3tRmofm7dcWnW38xibFwfxhDktodMm7pCAqUCS4KGDxyLyit6vjiQxsR",
  "key27": "5XNBJrF6wASvS8C9A1nc9PiU9M1VHaLbKA33CMtwNJ1Ahy7mc66f2vXTUgBcYGpYHpoYxhGvkqT4RixamMS5Dm8w",
  "key28": "4tK65MBc5DEXLyknn4Ym7hna6PvgbDKyaZudZrzpcK9zZ6Brz7wo1kF1NFUXkVQRKdtrNATaXuqZwEe1jjTPK7cZ",
  "key29": "4LjK5eRQBj3oXLtUQjfSHC9a6FXCNHZ4iXz5K9o7De2EScEjFMARCcqtKvniGCM7s81gw1RHnirtqK35Fc4CXiY3",
  "key30": "2hcnewvuHGyEw11z2UNNrVsBQ9YUkPnqktznFFwQXvwYCq6mSoiE2ZZv3DUDPFAoScPJr25H4i4T41AxUzXJvk6f",
  "key31": "4Svy9E4kYFigx2vXCvfTipHtjinfW2pYUzWZ6RBd54y3TX8AsqogJJJvubAY47xHafudWHUYoqujp7cVdSPm9oTH",
  "key32": "3kjgokRa6sVKGuKkhtUXcnQYSGimp63CyV4hKD49G1UKVrN3vvcZJDQ4mNKym8UDcA743fnbb2yLMX7b6xuUDL9o",
  "key33": "5GEMEeD9jimYhpCRW9Y5FTP3uETRdANtGMovj4AUG3HWhSawifTNF5hsKDRJ5HG1cNXcLdkh3eH9FKNtMNvJeFNF",
  "key34": "6jyrChyYQsyJMg5KD3gyGtg9oC2qwZS7pQqkbpyBKF3VEf942Hof54MdS16VnSrJvsA35Prwcpr5nZ9HukDHvHD",
  "key35": "3sPm23dGi7A8WJczxyuBXmmPfcjLfnBWXyWgSv1WGCYgxQvEmZE6aDzBvq5CvqpzwDjcUqpT8zYPvuPoSpAUjYMp",
  "key36": "y6rJpzDF5y8r5uHAZuJgQcP65zcP83VQrFw2xMdoGVdhQWNxpLM1E6GcwSs3jDrybg9VotxP3SCPgSG98rDYzrS",
  "key37": "4swKDxqpPAN8Wr8csQyj6Lxwj37c56STSzD3CNNY5kmbm7WyhVw4rJc4DpiHbZpWPiBqgUuGEuvZhxiR5WDZaqb1",
  "key38": "5u8hLcKwDE2JE9UxdReeKoZRPKV8T2y75Q4DRRbqgXiiXpTtTVDrKtTe2JCuHdebxmZztqEwy7Z2135iFSYzV7h8",
  "key39": "2iyhjBUwhfZZsVAMnH8E4XkSPXDvQLH78PGz5faLRHhgtdRkAqxyQueV5y1QqL9ZSZdjkb7Jqf8aBWizipqvRqF",
  "key40": "47hZiqFyXABypcpkHaKxia2UXsy6SVy7degxn6RktADpK3mEBB2krh7g4Jz4YCKFfEgM8nLEkcSWddcyvnpksjmc",
  "key41": "3Wj8ShvNTnHaqqn16tJB776c7QgMPA1vAzWdS2a5hqHwBGf8yHE2fBoRyHePp4LXSAEF9dJ5oziu7LWw3EXgViwE",
  "key42": "uQ7iUr8LdDmcybkALnftVp5QRtKX882HHiQbeGewCBcZmidV6gxjfPLvUrZXrhp4KUz9giktrDy42m1heHrhahD",
  "key43": "2CP2ruNKi6PiTLsLm35NHGMyuS8AZZdHdRxrPHF6oajjvrbYqek1wjLFUsRsA9tqWt2k1rVCqQqGJya8sPqMMbU5",
  "key44": "2A4xagQ1GVJJ2BvJtCsXhyy7RcE6HncNiNAbJAk5b9aQDrq1jBeXF8psmtrq3TcuCLcXc5yBTrA3CnJqUwq1RAT1",
  "key45": "39UPqLkWqbGtG2hoFLWccGqQ9yNAeiRjEy48Bssy1uKXd3NY7ksRhbhAWML5FGcCmxfpkiNeRmo7GSpjeM7ySuG2",
  "key46": "27PhgdfKSvNKGEbaFDkNGQYyeCnUnviqNp9LeUscRTU1hsXNkuErKv57ereG25uYn68Cbrpxb1NryMrtLdyFZ444",
  "key47": "3Rn3r7KfWWZG6svvGuMs6BMrHP18giHcemCxeQpUmPc7tvDNbmHS5cicWooffvT2RCyQF5r2VCSgmuCbugz7QEei",
  "key48": "5sgScjvPQjdUWLJU2EyPKSnygWqdEz7Zr83mzt378RWf7Dk2iG87MDYpxuPFBgPMCu9sGUbQNm2GEHV4SMLd6rvK",
  "key49": "1WdhHSXQLUkowQHQeCSHjFKs7dhrwaZwP7BxkcG64uDLNpU6DCA2KkEBnhS2bF2rmbfamVRZ2RuxPGsnWtMvykq"
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
