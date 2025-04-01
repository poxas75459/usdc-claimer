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
    "3odxSXjKUbM5FXEELEeovTPYEqraYXdHLRuvPxfymEh5RmFef2QAKJ1YR2b9NnUue9k1BoeKajSboJN8isGZSYbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxAD1eDP1kbJnm7LNqGxPHBHzvuDXPfjSgpLuAgK2q9DKuq4QWxZPNEzvyziX5n5oauQEvDLsZrnayMzUBndJsD",
  "key1": "5PqHgpFdV95zBxToEEaVR7NUnhTPZbVsc1pZsxBFfpbKWNccYFdVFyJbq1joSRqj8UWJsgEjESmv2VbF3NZPmd5G",
  "key2": "59QHtPHDBxF2CjrUNmkv76kT3ixCgRp49irXNbEqZQvMcu2mY5syc3RqYceDj4RYJsBpzf82BMPn4NZaFv7CF8WG",
  "key3": "2r4guREmGbGExu4fuWaHrQ2SWCBrwC8DLYfxcSvsyM6PzLt9Zmi6kLgMsHBkimSiF25GeumSomreu7AtSjL3yBpV",
  "key4": "8pHwV86vBoGdeAXugUkViNZQG7Gyfw9CpDKKvUFYxUUWzuN9o4kjADENmgKpNu21GwjV73ZzdG5qY9yYhykTzTH",
  "key5": "3mZRkVn9EAs8VE4nx3pWUH5jycw6doUTYdiKXkoRMhNL1Eh1fgyMDHeM14A4uCWfHkSQuA9sfTrbZaq3iNpjuadq",
  "key6": "26yPrPneddvY1375JiVvQztDERnJtMian424L3XePAt95gRdxcEwF8rTAQojALmZQhGvuWVxptJt9DF6KvwhB4cS",
  "key7": "4kynvq498KntyXzGF74xRnGwMHe4QJSyS6J6CCqBxASBGEAez4g5HWefbU1DVxhirtUWgsuFPf5B3eqBruxf4ezB",
  "key8": "673PG7fNMn9gubQkPRKJpZAXmkcG6oyP14mkwwAfvGuzUnKAvdAFibyWqne9N4Kjh65jJEbXGxMazkzdS5q2T5ZH",
  "key9": "2pAN9YmXLNnVuRcrhBck7H6Gik4KueNhQpqmbDMhoRvyCnUrkoGdhPKgd8JmbH9ChBHnhUMtyaEGuAe1B32si6NB",
  "key10": "5MHBLmQyWdiAb6kequTL9Ridvjj1WHjrxig6xQYcN1eAaoF342m2PWKt1WbLUSXWQjDrzLWiAGMB6zwAGTbdRo2w",
  "key11": "2EKvdNqsLf9RrUUCDokGGXy1B4gZ1xz76SW9BXYm5Tu4Jye4WkDNw1X2TUCzoGFo8oNuH4Bg9bvUu8jFs9E1aEqk",
  "key12": "5haNGFCEWaCBbKZRgb2qLS1JF6qN5GVhq4FPDH4eSsv6mgmNvtWwG1vUdg1FLxPATYiHDLEbA9AKxigk1JVzwswS",
  "key13": "2XofTJakEEXoTMNARb2RYHHkPUzvKRDqkYzdRiBWVbeZ5f6cCZy8ZtfBUusCEYPhmawsk4AYHKz55uKKubdaVCaJ",
  "key14": "3rCgqnACwiP7tAg52oLVvbog6fgbKqsYBU3Di7PP682BBd7F6kYHrL6zcRLZvtCwpTANFaq18ww6gwBrqepVCNYH",
  "key15": "PG5qjXXRLXrKS67mYNQVB91y7z7zDWS28YoFBCN7w4uCrmE1kDAa2UwZGYNZFJdX1xzxVe2GWk4hmzmFpEv1u1i",
  "key16": "4LGAeru85qfT4tKQ8mgU3nXJU27tLaDrjFTHpJw1rMRkisYasufJU8SqWzgBoU4bykPo4veSsZYjsxsUipbRArvb",
  "key17": "4UrKZpjE1XZPrtEGx2ibA9axWarCeGWk9YcV2yCZbgxfeDKPazJLvbXacqWbzwzdWm2xTXeQyR5LfGRL4cEq9VK4",
  "key18": "a2daB9w6541PshcJnNd3Q21QCWoQycPjBvESuTTc92cNa2mgFtxYYJSiAvyUGwsiJWDB1sXvPz8GZK5QLocoqaQ",
  "key19": "4JM4HNEJp9M4keDuVDDvL6XMCnJjjK4cfXfmEPCKivwTg4dXGs2HUYULFEzqDLHUrGR3RvEahJaCFUu2peUfYdNA",
  "key20": "66G4NbuQtjwFZ9mqnrFNBdwkeis8SWoHURzBT4cr7fULRAnQ4gAJGSUPxxHRUHsaXawLVEc62pnXPfxb2BJ892b3",
  "key21": "4U6GieE8Hq8WgzDX1B82jWwqWnxfqv58EMcNUnBoeVnPHs5hPrj3VFSm2JiwaW1GUzRBpju2fXahiXqrPKJkgpSA",
  "key22": "67A4cZDiuxmis12Sh2Ko3Ys8cb2m1CKT1JCuTvtoCpLnirYgfNVxMexU5EPNz4Z9v6icNw5di3n2nT55swWBAMob",
  "key23": "ckjxyjWMTX6LX8SPdoessoFrannrXpNwJbG83Rqvx2fVfCS817hTQ4tvQ3vYNPQpgZ55knXbCH8uhQu9XkzgJ1t",
  "key24": "WsXtYgt67zKApF4mWWBpzkg1Ao1TTyJwuicpKuU2FEbK53nCdjRjj7xNRZsg4Bz4U7BwZKazvjg6iiz2qKbytRo",
  "key25": "412k1gq154xHVajQzY4KRNXJG5fdkQ9dUnYkyyguNvuYmRYWfWZ7e6HcizuNXdDXeU61sdvLucSWvrirw4YtcQvF",
  "key26": "5u58FY5eBLVAR2udRiyAQDSBCvDjLjJfZeV8UYPt7f9sNqvsPAoYyArasN45uaVX62ZryLW7TtKn3JjvNPgXP5aX",
  "key27": "5UAhL9ueVKeCtSVm2Pr7bn3zFhUEJmKqQ7ETGFMRNyDfkJ7ejtwkqdT8L2HSYqgnKAciDjs9pi5oUPpEYcAZ4TUw",
  "key28": "5a4UC2vhnmcw8CvN8xBEJhNqzN7LeEzBpjWAH9inDu3GRBTbfNNsoNm2YSucom4b2et64wNUpmB4SZsdbhyjPBdS",
  "key29": "2kYTnsbTWr45SQKCChC5Vmo5rhoX1hTXS3BAeeFnfBykhmQmn34znWB8jzihhPGC5B1XCcc3o2e4BhcfvTwFi6QB",
  "key30": "4mN2dT1wJotnpZWcsSUXTRvm8CeQaSvvyRN5nTr68RxJ2vqrdcNQWqx5iGvZU3eiY7MRtAFe6nmYGbWWdpjWsGqf",
  "key31": "A9uhFKjb3PZSB6tC84tZR9bypdhceWH3VSoMrM3GakyV2WsCZqND1KxK2rZk9woB8abcuaFPJoZHMSmVoJ6GEYg",
  "key32": "eskdyAh1bPEN9ifC7KnYutnRJRo9iE9ZFiG6w2heVpqsZp1gWKU11kwVBZzJhqZWmwBKBnFpxtUt7KjEAq86W6d",
  "key33": "S4T53sBi7VrPHsFBJFKofXDcNLyvzUYY8jS5iAkRwnKKdNPd5yeL3X6RYMMsCujFBdbiRd63sr48v7Eun8wpEXv",
  "key34": "62AizC3QPZE78jZfBd9Hren1ofTGTQZyCrshu2UiENJHZJcZXRoGTppDW7ewRLhbMo1i4C7UVNRifPduaYmgcP8o",
  "key35": "5dV9wfS1rsbN8MWyfj36eNASykGHreiBhE8hdpyLjakfiEYmPRABQwaoodL1w6zuzCVDkdE4E2egzXVmLBRVS58y",
  "key36": "57B9TcYw6cPZKW54F2DK2tv5QZxa2hR1ayQnioAtvoWScd86ZWxixq5mvvAD98uAxY5b5oYPyQjVktEZHX4UM7cz",
  "key37": "59fA2Q8vXHDqe5cgQPavB2z38nCNetjLCCJFT4Us6PfvaxfF1LXm24cqNAv7ysovhpYhpSqKWXwajiqbY75ZUve9",
  "key38": "5bHbCKEgRz4zQtdrC3WeMLNmYnEtLWoaiLZcDLZsBJ47QGffTnKPDwsYaqH2c4u2bvdXrD6cRvPkqJDDzUKvA6c3",
  "key39": "5qqczVRq3ZF7t7QZnvg9f7FZ2rT1JN1zNNuFoqkUE4kuvxVtxnJzqRcvK1FErWaq9vzFhCoUdgbnqMiYevQyGzec",
  "key40": "2tRfUr1Gfri8h8owxrKGn3JdVFTfXxNNgJL2YaiGXUcGM4q5NzSb1d6nGzLBES79NS8Rx9Awt7R42JYpCrhTBPe6",
  "key41": "4zzjLEga2ZCK1P91gKYUSXMc3dvBXVaV1dSY4GFktyxJuD9qEzeqNbzJdTzPNR7iTvCWGw1bg8KvxGUbkSXD4ksN",
  "key42": "3mWW8a2CyXbqb87nzFDbUyimdXEuqtMi8615LoS2MfETAgbrFGAAze5J2FeARTtG8X6iff1Es2SNrMU2DhtjhNNU",
  "key43": "4DmYoDteCPBaH986fT9VZYGDHaFzQYTSZNCXckppNBV3aJ8ZzeHBqn8Zgv8cMLJxo3Bndj2KhZyKD1obm4Yo4FyA",
  "key44": "3ZyBnMWjfAJ7yjmHxFtXK5R3xsVc2cWT9gzmkdu2dm6mrT2UZ5ANH6swwEdPBD25o6fi8sid42iEAKqmW1PdHGX7",
  "key45": "4AaFpD4VJVJab35WjPfZuzumsKU89poDo8ssSM6Cg9SpNhGSo62NEAU2We3ax86kCVgK4rKPasGFWLrAJR4GnBbH",
  "key46": "4XPTCyftNEcAHxBifXsQ1hqrhjmvaPBdA2XVpwBwtBe1Vr8XeZBooZnhEEb3uMQqV5xgahSG9sGejG5N9UmGcyog"
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
