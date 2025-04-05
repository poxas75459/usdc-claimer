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
    "4cGZuhQJo21tA8jWMz7uRrgMDzXdEXgn2oXJi8ybyq96nvhWN2WyrRqBUeqqhXqrhceabnLuvXXtNfCtpseiYWUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWU4fYNwvH4CKdjQxnEpCj7GuxAk8FEZuR1QwWrsyCq5FJepe2nAA86oTpnUgnGdsCmZZRVpsRBBKDLXME6aYb8",
  "key1": "2jDgF59kBZKPwxkAgV9rRUNBvsovz7YhhqziKzFLMSxQkTNwyTLPcqHmGNJCBZobE7nKUSRrn7L73m6RW5nb8pZe",
  "key2": "3XQ8qmJvvxFCKh4tPG8EWAVCpwSqw1ZvqEP2xsyZyWb38SYLk3LQ8zcsPsKDfMD6hXeRNgLxrd7Jp7p6dCibrXFH",
  "key3": "41ft5fwobkncY8tExu954nVDXspZ3jBnZjUxcLs5RquRtkbMgn9jQirqqyynJdJ53Tq2U17M8MeUx8PAaCuREmnD",
  "key4": "6A7rTXoJuknDvM1nzvCJSTQhWPnqsGCEKzaSWqx1ovxAqvm2WBESGnVGEVxT5PUH6knHBbdFB7aSF2jyxtpznRL",
  "key5": "3kDxYHue2LWiaKupV45Cv4mdHfjM23i7n9d6F9Qk3xSeXRGbkn97oPeL9nu2StDz6yX62CUsApU7grEh8s7bgNub",
  "key6": "52UD91W5BWAUxNAL88ySpjV5qkyssLemiJmfFTxurtvZUKuTmB7xAQ9ieHxcd3gqMuWdNRE6kEpEjPzswW7etYL",
  "key7": "2Tey9TzKaxzXfkHyGmKb7a5W1wVhQjqV9onQ5YDJY9rmZegh9RSJGrzPcV1DFoTeVBsdURV1eSXuH3ao4yCMXUsw",
  "key8": "5tyNqphvpuAvfNeV4X6yG7hGdRo5K5m2DSDm4JCEwHcw9mrDEsya1B1kL49g8CEgcxU6c9SHwrcXRNk4jLSCxzyY",
  "key9": "4rCp7WjhVA4dWUqBL31rGd8vBQWdVxYVnxYZfkYssSd8TZLftVDmcphLBwCZRyPmufP2A7ZCF9iHHPDvoxQBEaTq",
  "key10": "4sc8gPAdUiTE3KsskoLiaozReQxkHxoBC8N4EcDd57ZWPjpsWpE62MQcebTqef1Yz3xQkZb8gCJxD7nKpwd2LYXA",
  "key11": "4GTyp4BNoodUDvuDeREPCAwjZ7NmyJVLmDyqgiVk8TtMjStK3QdF9Nj8pbJpXXQozXmbzd2UYBYY3bXmZZ7j9KDM",
  "key12": "2MWxhMztVSMyJoB7hoDztGfKertxwq4nYs5M5p8fLnKrkJ92uAHdC4YMdmn3eFqrh1mzqdsbEPWbZeKGpE5QSb3K",
  "key13": "3avruq67pYceo3eY17ALP4akjkCSbeVPkNCCGKiCH2Xi9S5kbhrPL86zcfX7WPkiisWi1iHUs6DXeHJiVzGwxAzV",
  "key14": "4K25KvqpaWHZ4X6UjCYGEmsUhVJdY6FNGCoXz3SAVcXTZKsmMUB8gP21UBXnnRVF3qQV6MSg5K2GqXaMFUfMKReh",
  "key15": "3FjTaZiDSLDrhJLnuvCVjNNWzzpGUGyyJzgDfrBXY2yaVgYrcTKmMbpSjKfLt9b3mjbdonAFXY4XCmkkYCfCjrsV",
  "key16": "GBtV9MEVp95KZbpqCEa71nd4umx9LoRtiHe5MKWHfgsQ7ZsU3iZjXfAjEP4voihpdUKgUHT9vkUT321v2nedRQ8",
  "key17": "rT6gukz9gdBPJQrn8YDgu8X352YDwHTBEFq4iwvVxe6xRpTYYwtZa93K4SxwqQkZFDZVYmCayYaMr9TFHh5aQWr",
  "key18": "oaB6dzzfbPPXZPN6vpKSmLXLxRxoA4giQ4P7BQJwG4JQzKbdZCE3yF1PMznZvQXBFm8tEyqsGUszjvycWdmnNCC",
  "key19": "349aTHX2pXaGAzAfcTx1Q4RsE2RpFuczzve2gbYvrnDL9meeMWF3nTj9EJ5oZrRfeEpe2P54SaEkxitj2wGtMjXW",
  "key20": "4ysTgTsSRJL97n6mz5QcGi5VmW7VKBq825p6qDXp1vw7ZW2X4SBZbXx9ZBxuZ9MS3GJECMGUG6Q2xQcvHM3k9wiJ",
  "key21": "2KjnwKKvgxPiwWhvt3jiLDCrfjoDjYGzWMom3XoDFn8unaHSUeMqURRLqpfKBjDQ9EFqvLEZsKNn3FPKJwFj6c1Z",
  "key22": "3qnJ168MRoJ8C9QXAoQaPz4FQ5BQyXq3QnVLAo6zHBTAewAdBdoxjdyN5kxWcvV17tobP222QgFSFEAq7ateQJUX",
  "key23": "4jLEpZPwoaGSpDnzhFpNx3j2P5X4D9jyvLCfjiAyPacLgwRHtzKjCfJSUFF9CDj93TbMztqvSURwxQ3HijVDmADx",
  "key24": "wuPwgoQCBJmnLrUti2k62c95LeMqEJARAQeo8QTGEcmy64QTHoLjnnRsd5nDedE1saBiUQZrMUDFKc7oZYgJjQw",
  "key25": "3ixBDzqvYZmZnixPHBjKoHrvHWn5nJfKMDw8NU22CzD1Bvzq6dE4jwgBRfWDE4Sx5iXSyu5tRfBMhR4M18zpvfwu",
  "key26": "2Q1ocEqB9LtUNzDqDK9wnUHpa3UujE37HoaDyxUVwa68rYrhprzcQ25ezbTWeVWPaRsBnersfo7DcF3hut4hCs1m",
  "key27": "5tBxmZqZzV7YBAaRbPvxxMgZbjFrVhpNRe9pGRaYvNw83KMGLxjMUDucpTn1nZ4rqQ26vJTksRqG2ufhrPjvbatv",
  "key28": "3PmQwEu1CJBX8eZUppHvdmDuT1RU2KBYJo1QqDWUVEd7J5STiXypNWC345tt5jaR4TsuwCHhexZ8mTbtGXJVsxeG",
  "key29": "619xyHMKyi9SDN5gf2AwQLw2tz4gGpiVK9kkfx8XY4bL754uexDSPi3ur3SeZTiGBPZHRiDuuoJtE7RwRXCh96NE",
  "key30": "38bKwdtFCJNRBnTrtPwAS7dWTaRqGurpP98Cuzx6e1viLWAceXSMGCoLhK7eEfDWRk5D8y2JcMF4FBtuK8vReuoR",
  "key31": "3B98UDjfjSgHTTQgB4PJFQAJgbLutFV3rdCh5Uru2HuK6ULhwT4sGJ3FLtutp7KSNAP3KJU5hJArXS1VyGygRYi2",
  "key32": "52iT5jP9v7MU359cGqD8sKuHPhWt5k5WKuThzDPgvjgq7iW9TkA1z8EZRHeQeDSGFpxWucpBpQQWaUwUobezT4VK",
  "key33": "3TFQzeZJ1qBhr7z55YqJo6yrJgiPztoZ1AokPgDnfrYjDzAxtLmXrm3FmGyDTj7pQn1HQkantB8ZGK93K78DLsyY",
  "key34": "2AFgoAb7zds4ubXj2xYi4J9z2tZLeaqiFLRCFEW6UjFThPYUKH8kvPhuEEbbn29GDrJPkigD25CsavNAy2ckP8Y5",
  "key35": "42RAp31z8w2HeXPcVCnCjGk6UvchQfQ4ThDyWTfd5A6idugs4NrCuwApu4Dwx7q7ENSAE4TbQ9muz2ppoEitWVwp",
  "key36": "4b8seM9XkeKXF8pmdXws9xYwEXHBCFQ9x5VspSUFiR4v242GE1LHLD6ifAgCs4zjBKf22hP9VisD47SoimMw7YhQ",
  "key37": "4JNU7HjGG15oWNeWAQqa1yaxA6Gwmbrbvj24d2sPnrK8pmbNQD1JmvGgmaWR6nvNgSeWudYcfvTPgj3nuMmN8qPn",
  "key38": "47XC5dDk2NSYnrAwhKWepzEEnJJpFpZ8aRd5KrEEsswPD5aZSsSDKat5T6Nmj4E365FLMbkw7efwpuqMuNHrDtQY",
  "key39": "3fNRQ5DV6vBdPkmP93yx7SQVF3Qkfn5koVJzAEAxyJK3Kzy3QvyJSH7yjMP4YRWCT8tZHxNsbzgYutHLCufSHeCk",
  "key40": "4FZYLcsE85gRCqiWAB5Ns6VAzL9q2sqJM4AFndxMhNZtMySfYTwyugVjByecCYhPbF3eEwk3GX6768JBLVR2SL4a",
  "key41": "5jxAqAEnppnu6JCTD3W6hxmffhZaFPoTB7NhY8buQnmngYWi2uuXgWDxxG8AhVgid9Wac4irbvJuRNwA6EBhQwTN",
  "key42": "3UypqB34a3qVThouc5FhYdUaNn3c5hrJC82kqtg12ukfCZ4o4bDQxMYjxEKWbsCgoQfWqYQRHajWG8Cyd7yUSk1n"
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
