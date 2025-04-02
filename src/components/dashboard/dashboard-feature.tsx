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
    "5XivN986uNKBFnrzYNbf5vDVUHwn2CDSkSZ1JviAYCF9bmLNtz2CVBXX5LWGHdB9RdbN4oawsuATvEXMGvruVHxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qN8x1kkV7rGZDw7KPDRJ8zQb8HC4E9mXtzf5s11CxaTEAKbYg2q1LfWwt4TSFtyV937PNNALc6EB9871SnfjpNm",
  "key1": "2bimuaAQ7FB14w7mYQHMFKSt21KtucRyQmdfAhLQiJdpjEUsNkDeQumE6YBTAajxbFfy3FBcWiZDCLBxtSMw1axk",
  "key2": "4RXJqYETTLU1xHeHrx7s2gyih6G9uvTCaG8n3GMiCaEsEq4uQsdUsLGH1K5RZs3GvFPMzipAg2fmZdqu7QhMkb6L",
  "key3": "29KihtiSiqXJSVzmyjkUkU8mWfrecEBr84cmqvcCH9dHGffGaXZS7EviTaXqGAnN72QhVZKevwXVzbUgyZ1wUTv1",
  "key4": "R6U12HFF6Wq2Ddx1NwRTXAZuvg8pZb77MZyYK1BiewgWQSdYWwyc3J8wzhD4qoa9YQogpkibw2KBH5A9jo6AJxE",
  "key5": "5iMXA3RXTFK1Fwqk9tULh8fqUGhs9YJWrvw6BzQVZR6kR5Z3EkanSZTsmvff5eKqoQJJJgGwYaa41Ga5tFMngRoK",
  "key6": "2wNLPufQ4Mdrkxur2BSbf9XbedWkow6HU11NM9RK4FoK6PEq96yCTh7frPAv5VcXSbV1mnejJSQpp7bKwCav5nTy",
  "key7": "4nMZNRGX3iRM4Qprxqsg6CXAdEptEeKNRFC4W7THHZqCDEJ1jCoQiXeuiyHcQVFjcMfJ4Q5MZfjoBrqi8jzfpain",
  "key8": "5HCpjrzr6WGQcvDMDsfufAmmxY6z4m1Wa4a4q5TWQT2YwvTDfTb8gQdHPq6zBkAtGAJkTKBCmvdRFwnEWvnhHf4s",
  "key9": "2pKYz1tF8gMNZYoKWpZoSXWUs9Y4iBAU925M2soE1SfegvqSKudJxA3mvbniaJpHUDbYAiGjJNJUcekdz8qRkPch",
  "key10": "ux3Fjoc6u2nd5tugxhQwAYSFZ1TP2kCtf5Q5yaaT533Ex9ug1JQhw2CffVwFhqatZ8yvVz4QzSvegu1SAPPQLEQ",
  "key11": "47ky6WrT4T2zx4CybeKq63viVf9QL5gXqPVRYwcE8Mgzj9iAF2MZ8HsWUf5KobZswtq6ut3pTtvuQFLyQBjV47h",
  "key12": "6qu2ibNLW7tJXtne8TeHYmKmBG2Sqyczujjs1xMkcnfo7bCy3vxkJVB9EV3Vj3vcrSWW3tRit6teXpa2mEbzzuG",
  "key13": "36kCbt9tS5LV84v1kLtLNUxMP6PbBJnth1L5UeESNjBYvq7PaQ1543K89go7Tn1tzZZ5wn677mtqKhw6VSGbbsLD",
  "key14": "4qNEDugfdwMepPVskWc5Z2ghaQb2Apq2MSdP4URB7fuvTcRCnMdV96Uh2v6DAoy5EdCuXXBcTAkhTKobyrF499kx",
  "key15": "2QKxTqGemEZchTxti5QHofZF3BEe7M6vruvkt8Qq7rNbWWGQNN3pQtr6pXqYJX8cUUokprykNiPLzxwzCVUQrthd",
  "key16": "5Rfi3baXV6CGnU9hL7S1C4o5Xy95nM579gq6sdHetWFfFzDZrPvp549a9CMWZGSpdnVgNsxrtzajc7CxMMuhg3ti",
  "key17": "5Qno525zw4DMPDDA7XkUZJqeybdBYvjoDPwxtVDqQDvaKDWbwoMyzWU8nNibqDNBQ4zS87Cun6My53jJNgz5WXjP",
  "key18": "2iPULTvRsPNcMuVGb2deiBhpofEB3xbr24f9J3bRNozwfZom7Whuns4nUdcg1VRMzaDZbZVswZ2zyB6Nu25wM6Gu",
  "key19": "2AAeb6sbXbnKts1aDNyHisqVdCSByk2EoMijUJb6NKoDsUEN6NMZv7FefiDWJ9zit4TdXaGuXKt6jgykpZ8SZkrX",
  "key20": "2ZWE5sxxRrzfMTvBULhkDzi4pfrsd7C3zeSFTXSLaMh2EgU9x4WsTcR9j3bmdrkFQAXandeSP8J5pUyuwFvcTAYe",
  "key21": "3SyAjB85BS7yEt4heS7QaEqBStR2J76qknL3xUSvAxzAMKGyNfgEGzZp9u8ASkiP5Twh1V5BdoFJ1Uz8MhVf4Lth",
  "key22": "3DxxsEH3jCtoVfJADwC3eaao1xjkjhW4UuPVK6usn97JjBdPfixtCNxEhYhZMrV3pYkMCLZDY9G44CjWWgpkJNtY",
  "key23": "4yueuFhVvzWkSVixd6eHxQBf7nu4963jEXaZYMoD2buqiuY9KwPA4Ct1ava9P7tAySA12raM4r8LxALT9qVh81cH",
  "key24": "5rjoUmkXTi8iEeQv7wjyUttqsr9mTnLdniidmWBAm8ci1Xo1UZuaXnfpgyMu5vhqhBhu17c7Z3QFQ9yf1zxdvQc9",
  "key25": "GysuHVv2ax25LEVUVmP47buZCnrwZmfHtQTnkWYoTg8yWxcqoHCfiM7aUsTM7WaaL9VWyfUxMYtUBwLCrsV8Sct",
  "key26": "3iXxzUF4bfXESPjVRvvWnq9gSnVYGmKkuj95bW2zX7Ew1P1YFq8oaRzoPPjEfRdjydJGmGCjQWdB49hheFNNUA6n",
  "key27": "59oyGSewoqRzQY3GuktJkH274s87q4rXbKGrpVLU67qYSwCAAm1gdJUJ4wQMS4Y2PZpXZEG5z2MbKFifw4xosMS3",
  "key28": "2bzzvqbvMjS1rZgs5M6fBcZ1W6gtE8gxwER748e9JLQyWcdCJBbZihCkivSHbReLsjK7Q2gmv3qYXoK2Rezuw4Uo",
  "key29": "512EmJzT3uQsrTMj3Zx9vGAqyf9k9iWPS7xCtkaq4i5PsboMyAnFTrUU4dRL8JvHNnS6PQXqsKfmM7M4tcmTRABk",
  "key30": "n4NFkGDXxiwdA7589uXDEU6cFunzTbUaem7KTt9V3y2azBWUgGtcTEeTN1UqvSqXzvt7zrqb19RtYkrWHBPPinN",
  "key31": "62Mb3aUysqUWFWQ3C2imbxwp4kf9jvF6BEN5SCkk8PBJm93eMXtZyR9ncDU53FN4yS2hEZbmNBRgLt4JY1roCRrT",
  "key32": "Ha56FBXqof16vZ3dviuG4tLJPN7hdD8MBcr1oExtfoP1JtKsr8E8UkyuX6wbaqad4tYBB1Vs1U18TSxZkZF2Jx3",
  "key33": "2ueGTn6Dzyq4wSCiJKmSmAoGJ9jbApyfnL1roWzTGNRUsyhXwLT43pbHZWarWwGaW5FkQiz9SrQaNqFG7WtjToSC",
  "key34": "3b143SaxtYhKyL32Xa7bdfhxsroLVBBZRFumQ67uFfm8vMkTHy4ELUQjouw613YRBrQxLkGAPng62G7GAWhXPhw2",
  "key35": "5JsLGabdGLi1MAEyuXb5ATvHimVnjiQx2LptA4QaX81bDXsKJwQp6ndYZeEiuRUZpj4YbvLhesZCp7bEtBYaAdp7",
  "key36": "42VgxfStDXVfQ3UKBqh8BJqdgFopot1SK8d3QunG4wLfuYDEbM5LuwS1zbWvD35tPb8fPzTNpSMp969UQSysveCR",
  "key37": "3GPSMmaX7H8t7TdSEgi8vVTyNsyikpUnq9aABa6XnkMux37PLjfAbY2dj8GiFK9B3V3dry32EZGuaKt4KDpUHQN2",
  "key38": "2s8kCuzJesbdgg8n9JBwendDCAp14BR6YvnwLZxZKnGCG3GC3oE75Mb4WSopL1dpJgG23Qq956zM9pocRwa4McdS",
  "key39": "2WfN9UJKLQmp3QihG9CqGZ6davPsVpRBGkGdksW27h8VV1SKLE5FMVC8gonYbfh7AVmrbMra3B2r9zXAX6sRjzan",
  "key40": "JcFRMjNL2HEYk8PZ62792r3Z2B78Am75m4gK5epeS9G15LBZdHQjdZrS4yUVMRPKmSy8MWqtoTq4idJ1NSkeXTA",
  "key41": "BPHmiKHNPpbiEcZicphKsEaAsZBzky9Bv9DxPL3woyY29puuHrBvAntMXeQfUgxpxGLrWkotVaG3SCd87XhD94z",
  "key42": "42Gseksgg5yoLG46sckLDwJbRA7a3SCjA39YqB5wx24v8mRrvhT7otQsqnMcpUhX1d7isezoPimYsyu9kSMjLgjQ",
  "key43": "27xbTj36Z1H8Yx8mcfnCBdx8rMNcgdY1J7dZ45g4Nkv48FWAGfPNKhHtSqED9xeHH75v94wPDiyjH9SupSV11H95",
  "key44": "2adm1954ZHnMiWDQ76tisHE7AkXcFn3eBxUsSTB9Nv8Gj7g6u6nDpsJkiiDiSkysxoND1Pu6ujSiRMzfJdbuAAGe",
  "key45": "47AUmTzizuMxzNircW6wmpFAeG4HsFotNZQWG3HZGofHjHfECt99RM6iq7qWpzEXwUudnDFNKMJ3kXVvDT7g9b1d",
  "key46": "4yGdzQ5KxgwmnsaaKQpiZkegheENrLubPvfzhrKsB4Cnwdfo2Ua6mkLX8j4WPyZZCYKnY96JwY1TDRKjPktEyGJ1",
  "key47": "4E8aiTAVVCPahaw3ZaXUt497XzaKhSLpyRvgFsxwyKWH9PBK5Ui9CRdM8bL8qKCAksbDBKKdrZtSvKT8X95jRhbj"
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
