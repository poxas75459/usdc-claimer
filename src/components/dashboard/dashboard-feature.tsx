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
    "2fzEnSrZQBkMDmV8Wa5ectwQhPxgJbFs58ZNKd7PXMScUtRXe4XCgZeQPxzN8peRsCtidHqVDs9gJrmAwcqSxUty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWyyKmiXcTR1FLYygHxcJWoT6e9pe3inoCjezSFVCyWd71zWSqW3bSwvSAZjD8iV9fPutwzmEqWxcDKtZUMw5KJ",
  "key1": "5y7hJsnZMkg41K8H27RELiMMzaStYT4asFoSxxedcf8EWL21BFuqYwEBLndBNPt7L7D4GLjGwwv8LNRv3vajaR7n",
  "key2": "3tecHq996Y7x2GGc8H1z5E1S1pz5nr5V7dmAfJ6omfjyAQkgio8QzrwHbcGEi4BgkVJ1NN9fMrtzPsXUqxdu16xH",
  "key3": "awo5JsyyBVuKK6xqkjsbMd7R2eSpxfkAoLHMMJPfCCgBqw848M3UNM5Y9oMHSSKvoouq8jQAzyFrwB2pH9cC8Zm",
  "key4": "5rW8JG5PgoUJcSwjELrTRfSBvxGBeYYT8BZDem7L9amq8HKifJYTsPYCnEtZFKsYYjKf855id2TntauTGtNtyrbs",
  "key5": "5NsJPrjuD3JTQttPJq7DDoMpxGQ86Ef3MFz2MAFtoYT6Lt4ymW4DoXouvEFRPsPmGNxNw9k8Ztog1HJ5QLnLkt2P",
  "key6": "55eogsEHrTsVn1E9s3yhUzMGn2XWmUwwcuMfEa6xzRjxvVQaFjtfyc33qCpGViJLLVmNagfnXQJD1YJGR3VmYmR7",
  "key7": "5e4339GLfMuH79wY4SE8HZbR7A6C2RnB8Q5pNoUgDbkdmMNEPEQMuWZyMh1pkvFPMC5AHzgYaDx4qeHKeo9w9VmF",
  "key8": "4HUTAF88tV6qK6C62WCp8egaXEEcYNuT9wra4tTj3Q6VqEKWKeCwYzp85PFdFxSAdkr3iFj9btgcpysjjaDE4jX3",
  "key9": "4dYgs1GmbGNiqUKyM7ZY7sG3jzDSoqULuydimyEb6Zr5BdgxyZaogp9Vhw2Repw6Bk3TreZuCwtAYcv24NirVhX9",
  "key10": "3R5WmrwaqBJPcLwLwGctKhb19ZFCWStWYuGz9h7kFke1mwFgECoANiwcgm6bLMnwJUxi9Mv6EP8x9n29nfgEVNGA",
  "key11": "5kZQ5anqkphUP7gC7Dp89knXieCSbWupGyBa53iVBXQG4HitjtjUsxMKVp8GmMcyYjzrs5XNRUvoxsoK1JhpJiT3",
  "key12": "2SBjKq7APSqmCUxDd5UTBE2thM6oCw13t3an9XELYVJycXWXM4gLw9Ud9pSvjZrWhK8mcsTKnL94k1KiF5WuY2gb",
  "key13": "5SnXDzhcSnzReqfvUXCdsS93RFXdUFGURn3WQtmgS3TUu5nJetaLMmExtqezoJLt9nsRJzigy1vqSNff2rrWCfn4",
  "key14": "5SPDkfiZN3a8Ttv5a2bUbYgKy9uz8fM7jrn5QghWvrBtcV9s1fPREZSNzgSXJ2E6mPzcpkGF6TWneeW1j7nWcrXr",
  "key15": "4UYuuMFFUEed63Zr5spd84K4uN43cdkbziLgpwKo7PwSyyJrmbRDqjDX5TS6Z746ES2WLUQ73SCK7zkZZWoHq53h",
  "key16": "2rMcJiFA8X2vVsKTbDKNYY612Fd5b4TFWvAFv9fjZpjdD3812tFGY2uLkfg45Bc6BkA5vYXJgDMD2evpLkF2U5PZ",
  "key17": "WEB8bFyvbyJLPvZeYDKwSjtb6tot731cDtbhTeEg7f7zRun8hixBKKddcQ2MwH2EfYp78rgAeSuiKnHRx7LCdvx",
  "key18": "3ciUMtq4Q6o2ATs82YvXEAYAD89DsY5TjYQ6KpxYuUdziFMQZnqCb7czjVRhF73tU7tjPvCkjmrMY3yRjZqTxyFi",
  "key19": "NaAbxNoUUKMMo8ReaR9nciroAmV2a4YRqmYqeQqDunVFcQScDvezfUQ4azsWEZA8FSutnAsd1dsJePSP7ubSn2s",
  "key20": "3o6bRURU8EPhzY5Skucu3LR66oiEWSMWxHUrvx3jibe9XK4cbMaUH37J8UVzL8B6xfQUzcXcV8zz7FSY4T21pkTk",
  "key21": "2ocAzmrkv33GSJJzfJSdQReKgRRSj93vjbrScBtTiwqUWG8aNSxgJsYKYmnRwGiX8hX5XPFkbnYg75HtHwwN3KGE",
  "key22": "2d9NxqLsXBasZmHXejg6GEYGx3fKiRXygT5wbheobxVjJ52wf6tbfXDsCpb1VAnqihMK5xuc2FcbPCq8b2yCLxcy",
  "key23": "1ktiU4iVtTyPFDyv9Ry81NUac2LgUazPE9GtiftfbYJJhQTYsJAZGgMtAheK8bgeXBvvXo4rcsKzdEyStFyNfU3",
  "key24": "5ypLyo6PqgPoKpzdj9LX5pqD4Ge1kUiTqSu54kBYQVzjc6BsQH4MGw5oFtdeKPhfGsFPQzCySUUT8dGuvobbfsKm",
  "key25": "Wc9veLQXfNRrJgwK7EMnFyfsZbUZbTgw7jKmnzGyK4D8GQK1S6kAAkWz1ZzLAB8E3d4DceAmsYjjrQUfZMKeniM",
  "key26": "2vffJVzaCDVoZW4U8h12xhPppSoXK6zMvg2FusCWt1VYViavL1h8LMeARrPtJVpJXS2HfhtcdjJnruujhSSoAWDk",
  "key27": "zUeuZrcbUjURxB5up8Jwz4RqUct5dbxBgaYKaUT6xXx48nk7FBQATH6QQCNZsVtngn5PwP6n6wLAvcYzECsu76H",
  "key28": "4cbCypxvLfKJE4hh7gi4CojhsCPWoz9z64vchGifUV3Srkz9qRD6ttkYyFxSRUh76AzpGHvmmuPXm1e4bWQbKN3Q",
  "key29": "2cLSfg6CFZquXPhvPXVWzB4skArRFFxzY7yKocV6LwBUTQuvo78WniQC2QgmTLcg7JYr5xwkbcPwM3BNTwf6XaNB",
  "key30": "XYYw1zdyfCLHUZcCeoqcAqEZ3J3Fo8PfXfBr1fDupDqEnkw8Bj2Pz5m1etMx3twX2XAsfYPG6UQCT4g5UkM644Y",
  "key31": "2NfRLjipF7xVKyhb36Zv2xcciYk84owFgdAKvVkCoKhKMct8ZTfRsDGWf7HqmhAftv3aLsE88fiYc5ZXQu1u3vQi",
  "key32": "5UprzY2fmpUmBBFaYnWetrRTqvsaqmRSK5UGWfj6K3aFkEbApzuPgxfcf8qeM2jLKDWUnVjkKJprknmWDXgbwpEL",
  "key33": "4MWQKt4o8e2AgaugKsZYNGAxKc2ERWwNYVXWetsxD7QhXgEZBvXdCDWVWeoLhGjUetsb2EwHLjLjMFqLP7qQwgXp",
  "key34": "5SEEFFj8CVp4hyFFkGmuSaChFbSQ9dHFezZRfM6br23VPZYfcRdeXQAxmij5gSL4rJ3BskgjTcsRFEbpt21TZSGK",
  "key35": "2CYTgkuBuasgM1r1es1gEGQVw6JHdLprk6g5KnSAxkJRxodKnUJ11LHcvpFGCv2rsvc1xiz3mkVDcBWN2D8hUoFZ",
  "key36": "pwAHwbwoph4AxoGEVzfGeZBiBoqC4FVRJ6zeaqrQcv2ajeqMkVMGcgzeuosT3tiB1GT8wm3cnXSe7qXVgR24zaz",
  "key37": "1GKGv6pa1cyVwMVcLp5VxCgB8t8kg6SZWR128UBsZdtE55GsA2BMurAmshehe9wtCN9yBGYBGAfGodeqJHVh9eL",
  "key38": "59QLbqinZCFGJ4RtbnhWE1poq3CeCRoPWqeAPK6jjNUp4vWA95Vcabzqqe4eLzDwttKHXbXebhkrhC29ZGYxEsDs",
  "key39": "3AkizPGSeDneVSfSmpZ4zSvSKvxP8uY2T1GM68yhe2EHNGmSxUaDUBUoCuh6vSEttaGb4RsDQ65sWYwxuHcUdYxq",
  "key40": "24bBqv34MAJeSihzpUXtMsg8UkjoAeDgxH9JEd62iFtKWRNzSxDMevTamJsoYjVgmcPJPtGF8t64ibdb7516Bg6A",
  "key41": "LWz41NQyB3xAg2BrhK1kgeUU29Mea9uDhDysdvMmE8E6Cz6FmkQi9DABGgMSX98ZgRLQe9YrvrfiQxr9U9MRTwu",
  "key42": "2KTvzJ8N4yTVUj8Z7Mv1fVGgWY2eMJkycNLeWoyVvfjxb6duSpxHE6WiRJZBAogpicwX1GSu8ZtT1KNiVg16RmeZ",
  "key43": "5JU7BYptNj4j6U9exQH28cQRvzf4WBMFNB2AQoEf8bmZF13CNZaen2cYsbMirPqRxnkaBLhVvY4jZWCNkixpjwe5",
  "key44": "2bKcqA29uSHXYhAE95ALutPgScR5Y8QxwLPjxjqYSwy244GL4Vgrjn57ZtzbARMbnK3jqqfHp5JBkKxMaDVSeskn",
  "key45": "2ZaoGiYwhZnXDEijJgsJs8NtzxeS33B2w9UY6JNxDr5bKzNUH2u19Y6gR4sVN3uay4ZUFZs2FVeMTHxan6r7MTRf",
  "key46": "3scMpZ7ksprgbnw3gfAbkUSFadp4JNLRjWE6qRczgK6XvVcpgksF4oeRPXuarTHsQjraGDFhP3YXkbaqKNuPtCWW",
  "key47": "4DZzJXfYrphQkLkVSAMKqtvweSBDQsELF6THuVa2XJ8H5BRdjsnvYhGySvMEmjL9cU3jbkmUkyefAQMWeFAe98Ri",
  "key48": "3Cs71X6JS6YyCydHDDkTRqjHq7XbH8eRzpM8gQE2pQATUNhDqvLtAFD2RF3DRzMLQ9CR5BahinhUcW5ZGoRC1Wwm"
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
