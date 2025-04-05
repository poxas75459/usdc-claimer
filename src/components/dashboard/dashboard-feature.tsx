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
    "r9XFVFDGjWmdavhN1nj1c3xJsvNMrhD1zCBLqqtDZBDMFuyC9DTXRkwuf24zdfnaix4vAtHBeVHVa9Y3Pejee9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wU1zrWqwPue4XwYWA3xf3nfr8K4ueN7UJaJad2xcnR6GtzbReWqbVva6E2xj6vWkwk9YWzqDzaJJLvh6dgf9CGZ",
  "key1": "5ZzUBesfXD2B3gY7XR3mJzENNKzabKRNFYzsvjW8FKqfyYajTnEb5WqHbuudMzxqXRvw8tGzx6HwrcynjAYbenDv",
  "key2": "21SjhqtCsBUhgC8DBcCtuDbHMd5eEWnuWFn65PDLZ3Dv5nJs2XhrRNQmLWMkY5c1G6JC9ij5z2fT5SHKFNVBdenY",
  "key3": "3trZxoQiNDTqqzaM4MJDw4fDzTHcq9BNwoaY9NjkjUpP2C2qPr6tyLEs7RQtfYfcrkXWcyqqNxvzwSFoN4bepyeS",
  "key4": "aACJSxEvu2ND5i7c4VeoKt9rJRS6tkjoFpRP3k3n9r6KZVTpDzJEdfwy5Wh8ijhC9QykjGfSEG13mLxaj5MhHyb",
  "key5": "4YVcWLXtFcZdCH9xfjLEx4FAsxet7gb5Ds8Kj8Gj9bohCsnXa2EGVdsjb9bcBm7X7gQXaB8pS6TM78LtkmrdgdSu",
  "key6": "pvqY1KaiGVDYBYFR2AcCqrt7z51P9AHiTKvvPH6Wn2uZQ2dKgftRXVG2XBeF2Fi9vc6GwTiAbj1QDpfnvnuTPDv",
  "key7": "ZaBLSrF3ABPJpVgLTooq1p911iTpW3zZvmJpx1nNzF9zQzrXgKyyhZHEu5VLAKiy2wBGfyz3Rm3NGXDqCLZrU9U",
  "key8": "LoHMSzBr9hLfqQzdSPGACWhUbLzZBTcEZkSRunYWsUdGU8FxibjSmgpZWBiB6Hj6R7oati2ja3yz8WYmTfugGvH",
  "key9": "4dtCKhtxGJKgnJCfRNKjLMH4c4LWZvVFWjrwSG8un8ymhP1WZ4NNy5EtD35ssiV3QoNRjUNNd1DgNbvr1mj5CgVx",
  "key10": "3MstM28RQEGt73nFGXC1CmKiKiGBbmRoYoMhQoVWCQVp1W4RV5Dn1DGSLum6DBUPja6kkbfZw6uUDXA65iZsv63E",
  "key11": "3tBVGweg4txZwg6bDFSAGMPPDExERTNtyzr3SCQKKMpJZAZXML2KuvBj7qd5y8atxzYYoVMVLCD5tX29p1t2j2vc",
  "key12": "4deaPXpt8baUBpsGf7uF2CA7Jkst3yJ6CHSrMaN9vKsERfHThceqYBUrzVp8Cc4jaF4p2qFFrym2kKeaSj4eRFh8",
  "key13": "2UvnkAnsQFcM8dTqzofu9HpVUD5KEj9q3N1oEetCuf7nEsFJHM7V6oiAF5JpqiM1iZKcW3x9SFWuGNrqVnX1ubNW",
  "key14": "4NAMG155WCw3wEhMYCNeKzm565LDLwft4KwfXiViB26UdVeBom7axdHMN9FeEJWCGWi3MCj6UX3jBSnitR7EonhS",
  "key15": "e4EPLz5iWCzyi1nwXwrn4Pyi5kZuNoCJ6ZHKDDkUXEH4DkbqKWFgZBwRFuABr4waLBnWQnFniXBrqJC5mkeCycV",
  "key16": "PabaJwyYzrF6Tyum3HvshtpBujQs8k7ATziyDgvUMRXv1GypsJzksKYwNbCz72F7HHa6UyiiFybD4AQ4dhmcESs",
  "key17": "3zTffpgGhXU1grihe4t9N2AGup727Eh1guJx1mX7rsEZWHVAVX1wHN4tfVKLV9gFDsTNTHkjxKhJoeNi5gb96qY1",
  "key18": "23G4MhSLQ5gqLB77qDV9tHGVptPtK1EPzt2vJQhLy7Cjx2vVUfChTAZdom8wuTYFkHE6YGVykH9AJdBVthWzxgUM",
  "key19": "5kYA1wEWvgmPJspRQnCbm48umVybeoVSQzA23gKngo8MaV3aP8vvuSkHKZ7Jud7BSgsgSf1ZR5NBjckzoEVwVwXH",
  "key20": "5C1h7Kq5S5kfZb2s8GnJzVVxzQusGzHFuyuSLvpfsKwPw79CyJYs67yAeTLvZGEdco5apN6LgwnR7Pcr3LFw6vzM",
  "key21": "3erU2Ja1sCZxqMtpeK1my9rwPqHEfZhdFsCZtJcjai1irW43gsoEjbP3yJ55yN8wFVQADBmAKoCFTFZ7DJqbze2R",
  "key22": "4Tc4WtAppdTw4tyCQxrd6TBKekmtBv1k6Kttro9YPEzbVEZJDMDDjBJFeRnf5JMiRcxvB9YiuTgkFcpcnt29iA6A",
  "key23": "4P7N5wgmgrKXN8Jud1vLq2gJKrGMwADmT2nahJNBgwJTrTxzKxwwZdGsdAP8dbbihQguRd2FCKqp7ovmXxXCUQGK",
  "key24": "vjEHrXcQXxnFdt5wdXN2pn4a1in7gGPeUxquqjxYK8JvbfAtUkDpv23jJGsRJK9hepjpA8Vqvu3HqPDrGdYznEA",
  "key25": "3G9UrqQgJePoWj1VCfHvc3GykmXQFgm81hZWRKYLT5rRrdoMqn3N4Rne1EaaP5FtmSPGnzdyLeAUjBNhKAYiuNax",
  "key26": "5D75Yzi7yn1Wp5NpHNvDsqyxUGJoqinFHf8D9fzEbT9iRfqYiRmx9LxPtVe9bDXgakSMF8SD3mJeSiyzJm4Td7ZG",
  "key27": "4znK8aH7UYBdEGEoNnuEqDrhSUGPyH1thxcPnvxMs3aL5ygWPFF7cgU7frbJkMmAcwBUwDjXYYDg6nrMntfcqiDx",
  "key28": "2aLSiXSpxcrs8632cR1GFKG4LVrNpYYxhWvmTM28oxNoxD28vumhXCSjXDdXoXNTzSPtxyJjtJhTZUGHHLSKLFBf",
  "key29": "4DM9asz4XGvKEEGqV59j1MS1EtSMaqVC3Bb7pB4GneWiNwKWaYGbc2hqqqYjATByBttqed8p9Azn1rSfa4QYbYBC",
  "key30": "444eA2PzkzRzM7UNyKGXQot4Mc2B6mePAN3GK4ZN56e8L4tsATHgGw83d4owYrk7fvsLi7t8yzG5U21dRS1kPQbw",
  "key31": "27P1VJCuEjCpQHTQwLKiwoQcuVLd5BWQVGhWcAvade7w2k7PuzSofWJuV7fi8QZbizPBNCc1BoirYpDqtmMCt5Q7",
  "key32": "3WmAdzuGzv2BjtDVDVypqavHX2r2MXRK9SDLXvv3zFVRoYEydVDqNMVxr6MTBkFAfckV1ACtNS6c5e5JvQM7qsow",
  "key33": "2Kbz8eVrgRF817W3XRwSS1EnjcSffbJPgAza2zQzFiJJjoEnw3CQnfVMkLj53fBcBiKyMvSVw39vPptuDSrr2pbG",
  "key34": "7psfGC6Fr5XAQ6vgb1Nshc9tSFvkVjaDpC2aeMufJmdgoXXVCxejX4XHebS3TrLw4jbQHLSwgUX3c8QH5LXhduh",
  "key35": "dqh55aH5hpQsGK2qM3AfTkecSTMnKd1f2D58FwQkP9oomyYcNwqN2McnUtQ9mfFn8eAAXhrdT4bUnPNbrBd8Nav",
  "key36": "5cCauPNQ5o6xG8bdHC85sTs78pfQYqyaTPe7UTKQo7hJmkqsDFizQskPuGmKgV5utaFmuzaGYbTiPfEZCTbexPSh",
  "key37": "5TXJSjqKKaLpDe1iMQwWGkVdcYe93Wa9kL7pcEtKTtvDNhToa7SrpbGbkvAE52JTV8kFsi4ArsNLnvsTnq8Bx7Yb",
  "key38": "3eC6AW7y5rnccbK3s4bevzY21eYHvYeX2TeYpQSLZvgXJFTHds7ihvqBGXwPQ5ju3hs5cdWr3Psr2KwTuncV4myc",
  "key39": "4TVbDHZDxbFygJzJB9of75mgeKDEsTHARmtR5u55aUyWrCQe6wGqP2ie3h4X86govHNEi6D5fkuX5x6icY4z1xUs",
  "key40": "4sCmLXrATP6weitdSdy3pt5shrDAfmno7c4TUuFHx4gUN3tbXibkn9mqHPYYndiW9gq7DDYBbQUVm8JgzZDS7WYX",
  "key41": "bGoiNvMUy29nEQZnGzpXRtBueuPPkMhAzN5euJPT1U4sqmjGGTABQyBKf1sGZHZ3Q9bRTgf2ywhmsVHk8BprAza",
  "key42": "2NrLFuhtUXd6pWicpwKcQdK75TVmJkRoJN7f8G2qrfenXfjtEc77cUAtuiVobYh1vJz6nAzhDBjbGNXoN1Mm2JWD",
  "key43": "3j9VeJnhYsdFFxPJP9BdhfVSCefS5iqXNFStAYPNvqmRYvLhhVUJUN38APePtgRg3SPSGRV3mGB6x7jeSx5hgqkE",
  "key44": "2AKUvvfioDBgtYgBZQ8f4tcQASYGBEYMdfCnA6u8xeYk1ScxNgzKxduu7PZqcc4Dwvb94N1ur36bhTb47GGgRpAf",
  "key45": "2U291csLBVmQ3dN6WdMvS7eJsxYqjQXGftsdGxCQjK5wiK9AhYHuNmUCcSZYQxernzDZURJ8oPa1XRRSkoXkSrk8",
  "key46": "2Vx4j4D8vhuP9xYa81y4rhriBewL1KwzL36anm6ffWkVCLhBBBPLzEDopJrzATM7uaiCf17s1B8qT6Uxy2qwaqn2",
  "key47": "3GFxuXLCmbZpyoQj6xXkR8xdasV577tL2aCxUkkECJyQdHWa26YkbgfcYgEzBgb7hAV9DAeBeNsr7ETztKV5krLP"
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
