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
    "4qWJv8CBs5wUQEsoALNjHwbmtmibGuzfxyQpthNEvZ1FTV5H5PrpTMhRrFnPtnEH2LRj4pxaRc3z1vk21p1Yv2xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nbfb7CGqZTDpck3SF71coBimsD74dGPrPB41WVRqPcVKusauNxcz8KQ6PcBb3PCEsnkcuC73ScvgR8QvAtcsX6g",
  "key1": "5gc6Fi4bYFJYHkxpgnPeb1aBpiBoXyEbDwAUM4tXXCAZfXwCbSDAT8n4EcsQUEbiZ6DStefiXDcMgT5HfokiiJqX",
  "key2": "5LtNLA1Rbf5RNx69QS1zS5hsVUhvrNjhsub3oaDky6VC5vgWzWdpF1D8xRom9uRde8nVvEJgVasz7CrjtVkRMfJq",
  "key3": "3m4WTgVk4CQEkPdBeARYnAuFbWFoTNXNZszWYrcitJAisSm44qenSeTCMyHmGaz7KWppq5agWyahD42FdXBYiGVy",
  "key4": "4DnY8KumwrGhTKbjPByWfHFrMKZhrY5A7GU3KADvwesMYah6dUh1Wq6TfeMxYbrw2LYKw2xpq93KPcnG5GTmk4oi",
  "key5": "h8Dv2kQTBk9rSpukCfwpmwpn7XKn5CRCKHzPofSSPgnbXMVGn5aCjGWYXq5Z3diR558vU2uws2h56RiTCf3Z2GY",
  "key6": "5fB9MuCkjXCC93iDHZQEVXbH2wfi6hAbHWVgf4BDuDv8o6HXeBSBhN88fDFDgrkoHNUbUYECcssKcxYpBY7npDu2",
  "key7": "W72ZWV8nfuAkEjZTAcX86SNDosdxvzzstNUfzcjEn9CzYBardsWwxZ2pGKwsQoGE1NgFf66qaDfFBo1v8gjXXRx",
  "key8": "2n6SShZb3iC7HsF3vND2zHojph1tzg9nU9C45o7Td3qAC1eTQopDXEaKDV878CDC95oyvKwGyjBwTFn8oXsbahs",
  "key9": "5P17yD9Gp3FP8dWwWFrerv8fzGKceLCdqDY2sjALTmxjJucDZF1DGqG89R5BdJfLXq3mWgQC8oxJLTTQzMbfX72L",
  "key10": "LqBYDFrsodEKBau85vaHKbdXZqVUGyNtkAGicWcS3dDF4C1Y7hT1tGi7aobMjHfpU7s4yHDRok3kCgF3Xn83RBE",
  "key11": "2ULXSA5Fj6tRR6831q5TfhZ8e733Buf8JFbLHggKPpbcwJBPbCNRtDR9v1j2xtHHTKKwuKrKoQE1DoLqYC6aaDiU",
  "key12": "4ERmQ3SQYj4FDevehpLqN3GSipNqX4d566oY6nKmgw9vnYhCpvJTAATPtpeKxjm73NDdL4qpU4sGyR7boCqu22fT",
  "key13": "3vvbQiNg8DBUA77CdgpTLsDa2BNphfvxKdqSzKeMjHMbiBrLMG1qmqrrjrnnNeZUjPWrRp5opu83AmhBkGGHHDjj",
  "key14": "2pTmu8m6NCm5G6onyVcfLrwKsUd7puQEc29yLEJL4uQM736Ht7RqvAPsEuBZbDutRUAJjNDLpEvNQpnW5tSFvv5d",
  "key15": "5SBGnwGdTSSRxZ9yk2dXnXUYLjG8uAtzJt3pAfLMTbx2mdwMeneCug4aTZzmrrbSUamjw3kJaywu6keZnnQ7ZotZ",
  "key16": "39CqffCXYRyyvLMcCBPbtYV9crCz7XLwPZotomAEFcRfKwiNSFReFhpNaJgBzKADS4K4ppQTdX828pycEEP8KWXw",
  "key17": "s2wBLKn5qs8dE6XNgpQjsJWhmhu4mvEAnpKVBDejZZEe8pxKkT2UmoCBavz4g9V9TwitoyBh8DAojWzrudzgbRq",
  "key18": "3qmewVJBMKkz26Q2VKcgCUkv58x1Jc27vfWJV4vNXDQh39h1pLwermcAYnf9QesgjhW3HdU4qpwa5LmvkLanmEpr",
  "key19": "3AHMYHe993EnJYaW6n3DS85L9wTyZZHufth3eQAWDwwPaqxTB1Nc1XyBL2yk3F5HokNQXDLu4iEj9HJi4dKVJeYD",
  "key20": "2nLspK4LdjNsMPRFobDMCHVQXF1gYDBUN4LrNa1REtj2H9vC9jk1aXGy96eUrqaRBd2d5s7Qz2CyU7GgPzw8sD4v",
  "key21": "4UviPe4nVnK2cLvTHjijkTj1Gr43rPpqK1BYakTPbJ9kzCme8u1cC86k3eAemn3gUQF9PBsmuwF18hiJghZeMJsc",
  "key22": "JDEFrRrXjqTE1tbegwxLPMRnjb7VyqLwwtMRDC2gBUrfSngoLiGXzCEtUWLJyFrav2zDogt7PmSMQivppKjcBJg",
  "key23": "4XcXVnsv9aXdA5XafZJ62nUeJeN5v7HvqavLnJrPiDg4brrJvWkMuWXagVdWuMMuMFeEjSnmf2JzWC5aiPrFCKN8",
  "key24": "5d29rjCbAAWmjsia62vwdjZthvgyiUvDLQSA4Vh9DugwCvjjb9BP9XYcHss2sLCXBvMn1ywWBryZqpBMWwKNAjKB",
  "key25": "51jUEhkiM8SJcQTx87qCoTd8p99jrFqXjQ8ybbKuedtz8QFCjGLa9PCWntwAdJPGaWh3k71mchDi286ZSzL5r3Sx",
  "key26": "49JHTYZwybQdJDPPRw4kETrwBcr4VhU5i3fe4skHXFhRuvYyywLQPQJLf4WGxt18CeTDFJEDLiLqKXp3iMdSYRom",
  "key27": "3Ut6xWU8TparGEDmiaNNLGJXgZMqiozBkdPTbGvxb7arwBin86snfdWjxP2gyk8yXELFaC4CkazD6KPPtdfjzwDZ",
  "key28": "nRUnDsakoREbWCqamZNVrqMwCGEyepY1ymh35ExvX3zUvvRks5Ei5rZ7SqZykxsT9pgcy9rDsQKHtfXYDyPtzLE",
  "key29": "3DQw1iQ8BURiGUayjFSpwyKvCwhudTPXA14XLiy6npExY4J4Ci5MmpykLBa91BkEJJLzqSrxxWkSFCUEGvSwpJ8P",
  "key30": "57xvrZgJsKuPuzwXv5R8QNs2FaWxjQbV6F7JBP8FqhMJPwxT9H9NYUjnTqPfaX7BEXYGPtc8i9Dr9zzM1a94zqpm",
  "key31": "4pJk3N6w3TMfn1ethM8nNia4w4Jz57B1hxeNguC4XgEtuw2EE3v9JN7Syu9hqGdikRdrXQwy6kVEgcqwjXkeN7oT",
  "key32": "2NPcs77VWkicsDzAKAGdyCQNCAs8s8UsQajJGTp2AqrXM5e5spa7bL6Lhwvt7Y52NH1ey5Hix4djUJqQxk5K2WSo",
  "key33": "zmPPkjdDD6Ndv8HZzmEDnoXSayvCyxvyozNQGXhpTaz2xzZLQCWCnxSmXbtp8owCjewTWmz73WeH7aaPUQMXSic",
  "key34": "613oUPaniGyos58vEKdesugvs2mvvw6gaV5SHFdLUXSuasrjswg2WNrHrsWL8uafyRPYceKxrNsDu71nryYctSip",
  "key35": "38pqkG7o9p8NTDzusPGKRndxzptC7rnDGXBoukviWAhmuFDXBh8Y6GzzsADxd9Ra3Koa3vmtWKD1CzoV38GpjV2H",
  "key36": "7y9fDMN3QoDL8n94qXPmpyGeU2QKzcBgsZx2wXYBbHsjmCskJHAbvEkCGA3QtwMehD4cN4GAF9ETyzP6C4yo5d7",
  "key37": "4A7PKtGDrRp7oaTwED2rFvW2fDCx1Jmoijs5b4U3xEroNQ4bMAwisw1VdkfckLfXrBDLTkcKs1CbTEvYbttwtHRk",
  "key38": "4JdfgcmMXqocfwyAv8sY9QovdcCpYg4mmmAAAHrQnaURCWxKuErahQ115hXWD7u6d3vT5TTZffhKadNr3rbHtGPn",
  "key39": "46eUBDVEuaPtmwZskDN7WCq8VYq71gtwsdNNKKXTaEC7T8cZBcNbHT8Q6uAVow1PsgVhigCAAp2QnhbpSTvwDj1",
  "key40": "5zGQ3PxWPVurwYSmd3YDa18J9E5VwNZXx7GFAxAkwaZtWCS4WANannkdh5KcN1p9gxtmdjmjHBdDW9PhEoNxG9h4",
  "key41": "5PKbGLtxiVS624FDxjQVJSFzZaPrNrkiH8XdnPxLmqXtboeFUoMkqzo8AcA4fsSDQEBQVFSbUqX1NpEbDG5NY2Bm",
  "key42": "2G2P2c7BmLrPhh56gVQ3a4WaJZTo7NotrWT4p1qKwVDc8hHGfYxjAFqv6UthnYVeM68b9xcSDUgNpL78eWmif4on",
  "key43": "5AYjscCBZjdVdUyK8QWped4zjTST7yjJiyVswW7knyshTAWVD4cEVwjrQ9jBf5Cmup2oBUFCWnzLDFnzM9dEFCz7",
  "key44": "2TTJEH3dXy4m3CqHULUHhPGuQt88zNcGQvUqLU4yb5odDoQ8JkWEVqvmXaKt4c4P2YXPfcGLJFQ1VU1ji7zvt7dA",
  "key45": "24s8BU4w7WCebzgkgrtecNKJv3xa12Samr1Jmb9JzBeuivoa6qTMgpSjvuXYZJHqpbr2NpXujGJiERyqeExfw8VL",
  "key46": "1B4sSJEV7jmTWDXVeAzFRCw2eAjMCh9Lad5fzvCivj2vhjMgbfFWwqyiB6UcWiQtym51BndqGgaQvEubni6wQfV",
  "key47": "4Qyh68GZfGnEoFW2v5m2QC6rjtuhNBv21N4qocLB3gX3eeBE9QnWNk6PT4Q4bJoK7XWg4rgC9CN5kdfvuq7SGk6P",
  "key48": "3rs2959SPVxNTFNLnYHyqCNfjXksUatvkQrddrcRuUg96bGJL4QqiKsEQhi3qCtvq3P77GZ87fHgSkDfQRsvvAGB",
  "key49": "jo6vLU1GVFtq432hUfwUzKD6fRrUffo7cny1Dbd3oe5ffdnYdPJYrQ5QjbnDMygFPNED31yr4zCiSmB19fzgVX9"
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
