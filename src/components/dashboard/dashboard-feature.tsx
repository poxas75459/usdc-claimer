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
    "4xSrcJmaSjy6PUtbDGJFV87VFvH2YfMN7injtH9qDemVvqoAHDsCdnnTke2979FWNoFtEG2DFJT3yYYnkDnF27zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxBqPGfgZ8BbHVVqLWzNBaBL7dgrdABLLfAz7fHMpUgR9P5CLa42h8iiehhmN7UiMx7V1KqiayhUjEDod2bmBDY",
  "key1": "5iacQEW6GTe4qvq2r9DTM2gmXQ7HC8kSL8u9LTDGfpeEz8sPJdSu7MRtn7jasdRLBxzNvy88EtXP9jGkLfdYsQGU",
  "key2": "dYF4km73UNTaz5cfn4Ksk3sXN8VH7SueBiFHyTQaG5DhDXBHQtGir1pgpSiJHFC1gC3ZCHFLMJEeEiq8TSXvwBG",
  "key3": "FxYLiP8QFLpG9utKPruXnTfGxc2e6q4fEtdeRCCqZLNcJ7mDem579DLzdeKVbZBKG9FJ41oML7Ujat44FUuRVHF",
  "key4": "5fNb8yaCYd3rRfpB61xrQFczDkM2cAynEmeveP8faGifVhJKEijgzrTQrBUhPoVBcaKF9sdTuKLh2TvYQuKmvZTB",
  "key5": "25QeJVWSJDzpCH6Q1xXcqUuLWk1divHVQ4tZWsHK8Eh2KjXkcHBEmj5uFU23pUQG7snaomefLK1xfaoizPJh3ETE",
  "key6": "2uCN1UT7tvXp9pbZUK46SNSyJ7xcfU2BT8xDRJUV2TyFFMHRA5Fhg3cWyB2skepqwofBfMcAEnTzVL8i8TFegCq6",
  "key7": "3QcyBuH85NEK96mhZmv3moYgNQnKN9rWwyLYkjwNxnkpyPYsTWjAzRojheou3y3K8ncWWAP1RcBriYMjwQfiWqnm",
  "key8": "44Axzp1fm9eu3tcQae3knmToeMVdhvaAMXjgBW8uJ7Vc3AzaNz7sfK1AeDRkdtcnG8pqP52FAqPyCkg2GE2Ybme5",
  "key9": "4vcJMsvWtDRab52knZNfZ7LXwV2EV9RYdxNMtRGXF5v6zoKJgDFMVoz3t8yHjBj1dJDuuY7GhfjSAbPpJndYuEuf",
  "key10": "61ZtbeZni5CmqqihLXsLzogZjFgtQ1bNQTDJAYPzDTLq5zamV1WgURZi4yGqzVagMArtsRpZqP8qnJfycEiucEji",
  "key11": "3cEWfk7bftvfduZ1zsp1b7xoegKTHtPYaWDZZQjd4UNvJi2PcmHB9ixdybaTyYBXGySNfJMGjt8WbTGLaBo5Bn6t",
  "key12": "AWF8ZcJqjHbzbjmsgtm2ayeqj77temvnviXtszcVZZTCL4Gix5n56R7L9taAwcfnZ3W5iN6ztpod8qvXnBwdTSx",
  "key13": "41vDzQPuJznyxxMK4CVGkwfnHRpCqMYtRxeTMCeySa4WEM15tjTg8mLdvGvNwaYCrzG85YSSXjjPzH5aep82euJ9",
  "key14": "2AEQmXMxpeXL1u7Tne1RciDnVSdpfj2FPC4jPfnCh48LoBtTYjXbBMJWSvXL3jk6LW7MaAhGixcLfhUFNZtyMr9R",
  "key15": "29dh9YVr7VCCoT3JxmRmQEDKmMf1PTzguXZY6kg8d5MCn9Jk3aFdZev6NR62M3T22tXjSpVtgi9j24nvL1GkEijS",
  "key16": "2KhjydWyrK4zErJQfzqVJutVC3XCkgw2GgaxnRzQD9Tu3YMyFBk1fvV8EY51wJeubeYy4Gywwxhi5LC2fWkBhHfs",
  "key17": "3pzNHXTvCvxwiv6HHzCQFdvUySLbBe3PfPTMq2XMh2mPfhM5pepVwupupp6EuPq2yXkVVwQKdR5RENrBZBzEH7kH",
  "key18": "2o7eZjinKoSj6jz5sy2uf7YgyvrvqUmwqdgJ1Q4eAdNt62zCrNeT8ZJ6JH1EZ7ESaHmneM94QidxuBWxRAwhhdF9",
  "key19": "62ud3zMJCkGrSzojBbtdyfEt1CEjDfmLAmCNoYN74ADMXbWwQHb7L8WRKrW8PJbYyesnfWDirFeP6oMxA8QQsHKB",
  "key20": "3UY91JQoFyqphY3cpnhHNkWe3oBaL3DqXfGfjMUNunjENg8p7itG4rNsHujuhtMVsYqXSVeQAeZYpNDUbFR1RZuH",
  "key21": "3evBZvUmubq6uV2WJBXhFnYAAXp43UudSJhEKA2Ls31Vq7RZKdYjsckq9fLqrabRaXPJUP1QmGyjgA2WrVvnXFWZ",
  "key22": "m2T3kUBTqRGwYRr4ACMQCr7wbt5Ardha7HXJaWR88Ga9ABgfb3HXMYjqz9JqoaARhnpTka9ARsVMkumuzmjNuNS",
  "key23": "TCoXw25SAB6G9sKo1afquNKX9Uw9Nri5EC5SyYaGQLuQHsJwB7Fg9yw4hCRUde4UTvtwY792nBRsvKZodmhBiBN",
  "key24": "66EZzs2VjJuH1Kyv81hFnvejiNTGoR2Dd4RpDffnrPHy4LZ62H9hZttJ4FyAvD8jdRjDzan1vMb4pG8sDp3b6BzD",
  "key25": "5mBPZHqVfB8gQz6W6Mi3XtPc5YbxgMKDSvYu41GwXSdyNR1Ps59Mv9LRZ4U2mGyaEqci9f892poDRouFsWY2EJz1",
  "key26": "4qUUJXwKAgro7F6cxuuzQzF1U1wy9GWWwMSnihsNP1EEqELKyDzaEq78jKRwsdk12bhh3HCNq1BeLeHc1ZwvtBTG",
  "key27": "424B5ozm2uibGE6ZJpQ6PFHcuwdQJeQX1LGCXSw6qpnBU5Zo5wLAcCJN28vTXnYERrkpNc3t3BcctEBZ2S3nqkZC",
  "key28": "vkT1YfTshKBhRJ3h8wqWR1QnzgeARpqWrdyE6Gg2B9Mp7gLTwrahskMVNPmowdHfzY4PoFzr4sLj1f7wWfbWjxa",
  "key29": "5Yv6LWwZfiiJtC4138UDxWbwtw6nJdBR6DpFwHoeAK2twE45aGERZNmrJmiZoykanpBEqC3nY1ZLDt9x9hMBJR2M",
  "key30": "3DehTdzstG2W5Mp16aZA18Vop2pH2gB5FeCuagNM5c355Y98U8JgzYL4f2UbzZtKLVwsdimbLZNRBm7xfgWKMH9N",
  "key31": "53n5xqkUNXnHixXVEardzG6mPSTnAc8i9UUj7t1ED6hP8yiYD3412Ek5QBzV86fJ183TqQCyPaNFJTJuk1FDnfpk",
  "key32": "rR2HfyB7kaZXoip9A5gDJ13pXifmnDTzif174pgJh86jVJPgaybHeYmqYpH7tF9cS3SmvxMAPfdMtUxgUgEadjP",
  "key33": "3riX3Y8XYNBR8kG4nzP4CVGByixYKHetVbAyqmMLQTgaS83dqRs3oQ6ncbwnZ1n9f4EcWLfvJcH5FdQefz2EmDQL",
  "key34": "V7UEJk8rhN5ZGFAQQdyWmkLsFSMVtx1G78ZjrRT2shxkU7urU7rsyRYpma3X67VrxDyL7f9u3NLJ4jFfpZQaWyW",
  "key35": "2BHrmZHpLgySt1BRjt4RFRm3mw6nV4rHskUJQAmpdP8N3Y8wTBQ82e5Js9vVMi3NAmBuv39kTwsxEVonT3MF4GAW",
  "key36": "Ka8N8C656fzuS5PuhoxdCdfSjAhfh6SxqRipWdPTYQbLwYx19F89kWDyXy3GQM2gcn3SdGYPntEoCEcdapiwPbY",
  "key37": "7sEizasqtiBETTeUbJrLtkQbzEUHnJNX7VS8BeULEyDmUDyqd9NR5nRgKF8cAL49QoKU9GrphEofn7Em6zeKJgZ",
  "key38": "36Abw5zz6Cm6rfPc5BUgyr9w1Pw2VnfuVUR3sUwFT6UjD3Rn5Y1XMxuUDGzuc8ZFYB6KXAXm7wY7jcsy5w5UVnag",
  "key39": "U3wgvXfptQuCvQKahUdJiydf87MS4tg3fkXp8WPfnyNtaigTQfyWzv5tShEcAU8ZWTi8QjNGmni4xCsporb3Xow",
  "key40": "5vVD7PBj5hPR2Nus8CuRVbHKPbJJSE47qkE9CCRDQnKoSUnD7yhvuveRrsXckDuhM5rvcZTHzGs93BxQU1uSAPBN",
  "key41": "2qcuJtqUBVEu3vwRETyLTLLPufRUeovHYu2CJc8DFUVg44LM8VswoPNp89hYuuNSQAxfwLU7c8prZggdVWswYuDA",
  "key42": "2x8E9VK5hamae5Mk6Au7ydVsynC4ykH7mkFiaywr8cD6NthpZSRHRtwH6uDZoApefBBoiEGmiUQFKE8acSPmr6Zp",
  "key43": "2JerNDYGhBqoEYud63upq6ACb4J9riSDW9Kj3GEhw7SwyTquwPjE3FynhUwYuY79JGGCp4SdYbqBnsbfgcDzJ3Js",
  "key44": "3r9v2aaKLYKDWi2Xxwad5JJM3UmzQptDCnoXnC5exUg1HxrfnpThrDHrxPJKit6qC5ZdLxK8pwuZXGsGMYKu4d7H",
  "key45": "57rGj9jgoNieCAaGoSqdTawpYfr89Ks4ZNX5fkGf4qBeEcwdh8B96pV1SHyAMu82acx73xDpcf4dJxenruaeRMSG",
  "key46": "5dAHVp1vcwM4MpQBcxgRRryZTbkUYzrebdK851FeMkq3PcusRjGXceDyQ5EbGLzdanS7wCV7vaHTQZfYs7tETLaC"
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
