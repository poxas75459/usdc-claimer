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
    "4qFZJGVQwQyoDeRXDTcZRnnpRfMom5EXKtAKMNtzJtpkaKiwtdRBZcuMbbNHpe5zqAqxi3tQoBSHvn2u9aadbV1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NPCG9swr9WrMCUJs3gcQc46bwxmH3H17iqBioKpRRwXPojo3uonKe4tvGvdgSFJCcxMmB3QAmsZ1ughbbZ6PSzq",
  "key1": "58bqTCgvcXB3ZUM8EnZecE6hJFEprxCNZDMoxVvHHx8XVcdNRzNwHyA4qmdSzK3H1BkQpu7Xvqqu2XSjG6SsLLki",
  "key2": "3zkgUvqgd6n8CnELj3FG9R1Xsf3i6BsyYc2X6LsSNRBYVUNzH2tM99RC6LbBPL56UDLZqcEjmyEkQmDHjXfis6Jf",
  "key3": "5GE32WGwUPHsTcCyQFtkUgEZLpvVhrdGJyFVtf4EJHCnkVcDAUVmBK8Bd671JXcRqQdv893c4ZWhkUNS4aE49HCf",
  "key4": "275jqAmD2wWbCm1iWzVpzomXq1rj93e4ZXJL6bwz7LpKi1iocDowBpGKGvibd21HNSJrDFiqozNZqz4MLscfrsDB",
  "key5": "4rjsgorhCezGcw8Cu2R2AAT86noZvnKcMJwDBJRnUDDpfcYDhgrRgCSatoqGVcySAL3zeMnX79rtg2r3eSiTGKn",
  "key6": "3Puus6X6HsLRba1PY37zxGdZ7ksx8oqXNv5vUPPm5TyUAvQDbeqhQSoytTfiLjetJgZsyVq4ceyb7HWh8WjiYR6g",
  "key7": "5z6Q3z6misxHqQWMEvyfyTLbpQzJCaUY56SfbS9Q3xmKiZNabrQuDL9yxNV3q6znb8NVZCYUyj9nDvzQeDHuNXAm",
  "key8": "4k2ND9YkkY3xqm1FrV3GPR6TTuwPrmfJSNtDAYuSs4MpRbJCVovyY4RfSHTm18yedgd3h2xGFwHFigZYkeH4wPnS",
  "key9": "4E8X6nMw6t7bVSz8QjK2D5czFkn9pt5wK5BvJoyD6kYsRR3N5jAnQc6tSL6aRVVxU3z2ocjQhvmaokchhpBpwBaM",
  "key10": "LwkyF51UhauhVKoVY26g6pcwLKThmDdgxuvaBY3Mxpn3TTp72TkKmyhcsXbbRq6uxwtD3jF4WCZEEDgqALPsHyT",
  "key11": "3RBiaQq8JCDAxPZBv8iteGfMamXU2Wthnk82bxmgL3SGXceNfuU6GMqYjfZciV93356u4kpj1uERFwXwpaDxsbju",
  "key12": "4Ep2Vd4o8tHprYN8e5pGd4Ku737h9pA9gMFPD3B54yrSsDPuFZ3X9Uqv3EoZFDhzSXKQPLwYu7HkgkRE1QBbLKux",
  "key13": "3AVaog3RMAeiknMt9RzdnioiAtRqfE2pWgAuQM15DWjyudb2vD7BKMXksUg3drLKaEtUwoqkZNjSeJudkHJrCTjn",
  "key14": "sYKkGqHbQveFJs4H8dWboXnuSyoqeKbNTv6Ami1Txm9QpmZotPK75AaraaMCS9w1xrRRmVbgkJzYvZjbdcHf8gC",
  "key15": "3kWE7aTibYwG7Q7CefgWQoFv4exjRYMkEPWK8m4CUytisHPBkyE7rmNDfn1DQUEnJuRtveqFG5hG7QV93oXBE2FG",
  "key16": "5zDDvSBTBBsy3xjybMa3i9qnJzcDgafs2LbhiicyXUeuJHeNLk2zD3vvoNbkcj96eToVtrFc8VtdZxzesdx9q8VH",
  "key17": "4bthQjexJsgpRRa2e3BDESvnPW5uqgKTEkmQVGSGRDJ9XKurMzrboBNeZS46cTDA9N2TX7yRsmJVLZKvtFN34SWp",
  "key18": "3k5snj4SLagBsNHTPqK6kyC9diUQH6JgcRCnimWBxvi4x6GJbhQJtjvEHxNKi2nAgbS3kQNTJxri9dwixLvfaRsF",
  "key19": "czQuZ4WvA8QM2vAHVK1sMUArXzzF1eLRYVH9t24FUrND5aLqBdqWcgTwde7D2ThFcBR6Xk3P2yooGTcjFGTomjj",
  "key20": "5pxCS2j5sFqDhqeCDVciAiUbU9rKUNWzsXBwTXfUP1oPkySh3TSCgeWZesUWstKhMbUzhdD9sZCjJLYxwqZZAHhs",
  "key21": "5gAgzK5PXPaeVWCyVrGc3JwbGtF1kmmPh4kr7iZXPmwYEmihJ4jaaAnmEzripHyncdykWGFnLmML2Nhu7rHnXUgs",
  "key22": "xk3JWiAZTGZXsy1LdJHyfGHxs1oMz34EXvJAm4bp786JV625k4P5gUvQuTZFNk5i4PXXeK5Sj2QqWwvNMANE4U2",
  "key23": "7WbVRUcUMnayX3kfcBMZFKqcYzVm7nr3TUVt9DdB3Uqug7sjQXYLfKbwV5Rsp8esWRC5LzZzsxD9GXp6RsdY8gj",
  "key24": "3xgLhjm9xri3WiLmDhsTKgQD1Xrwz15pBBcUkjrU6gJ2HnEDcLtxSiZzKzgo2TKMLGCZjN2eXPsZoG42LFyt5uoy",
  "key25": "2GUrdqzZ6oEA1KMJzkoH2oApJeVVCSM1DvjLVCBtSU82dzGsppUzvcoY9dcTABGaGU8ZUcQoGiJnFYf5KMDbc5TB",
  "key26": "2G1rfCqP1iPEZwwN45EL76P21weMitxXaXf13cGJuibKLUP9Ay3KvYLN9WpRv4U1h7AjSGdw9NWSCaP3CpwNv2TQ",
  "key27": "2kdmHRjSsDgcaFraoNVKHdEphbWu56LnNkKEGDekRQaib5HyrA1vgepBpUGJGrLXN44cLPgh2XnQegnHbTEZ6sDJ",
  "key28": "3CG63jtNHi2Dg3NXQEvYH6LPKtZJbdGTAh9KwPpwwZyjUTkVF7uhTb31hN1juvcswEqMcUAGU3aZQexa8Ga3uwVR",
  "key29": "3PTw8gMXzn5aDDvjzmPxYDkKHuDBk6AVsaB8sDEybHKTfGW5nTjVN2YcT1rCVTU4dquW8cBXNPDp9WPCQ3f7LTVw",
  "key30": "3kLLRgRJEmojaEaopkdof2GpRuFX8etk37MVC2Yun2vw9XSK35BTPk5hAq7NHQfoYfNY8c6P8tDwxeGydjZwZ6zs",
  "key31": "5y1NaHpvpsjRhWnfpUcu7o1EDEt4kzLMP2y69P2o4tXHvjScHtMu4y1TaSEKJifmEib5SZcTs31nJwLusbrsauD5",
  "key32": "3tBL87mQBsdqqCjnrafhVGKWEWhUoy7qwjkmerNGpzvmbghFBd38L5eTy3j49gqEm7ZshRPj9Vvo4ErDfSdxF1UV",
  "key33": "2ENeieKuXevCTKHWFqxzqHA91YqkZxQiNKevmaLjWRMx8QRQyk2sbFp7zTPYKoLdUUZKtBw38i7qBC5cNFYot8m4",
  "key34": "3cTrmQkZQbSKwzmPgb3cLiHrLeF3rXt21hDFR48yTCXuLx1zesELCFqkQacCZSGcwTtSXjvF2US9inSXJoLUgQHL",
  "key35": "221yAutHh5MwPnADJNL2BcqHT3eecjnk253kqPNxjkKXkZSKtPXGCgrhbYdKjyENzFkMBHR34yCgkVCzPrMQfook",
  "key36": "5Z4Jd3pvDv9wG4HTXnsVc4JP5owzVi44iEzub8un3JCkqJLoDEJX2aoZ9mgV4dpeMHrJm35Jirv1KkkwnVWtSGp4",
  "key37": "39bf8971cbhMAts3SE3UMcqDHhdHp2oUA98ZRZFAPGYhbebdtqoehgTUekpKA6LsyKHJNpz5qQpQBLxMkpPFz6xx",
  "key38": "5bkcs8Wite689DAj5gjnP54BzJcGREv7McktLnm1RLeFoRZKkc9yKCAaPcqgvhnu4zkqJPyX6FN2UsuG6gpskzim",
  "key39": "5NBUNpJPdowEJHMSbrbJUPucx5GrKYe76TZV9AB3BLDvD1bjNKaLmwnJyrK7XmXvxYWZuXqkgqePcTh1HZkhh1ww",
  "key40": "3pFiYCWg5yjexHyfop3EsaugW6FqV1dYw9koNYxMvuQmtytcgXebhc17xuEuAnSHVpvy8JizN9cjFbFR4WCfhug6",
  "key41": "rHPAwxEsnh2Td1mzy7SYFKSfcfy7cLaSxDpo9u1SjUQjbsAoaDKNcGFeST9yADckLpMCQDaEjRzBWGQ5t2ebVuA",
  "key42": "5zwytsGvVEytc8iCA27kVDnbUtuzxFK51iCaEA2UtN54aBKKNQEwHjqBR3nu7Z7hqSqGVc2EAvbC5dSvMxhGMQSY",
  "key43": "3EZHj2Sfm9MZuKDvnTTmrzrE3uwUA7Ak1nVAYss4iEgvT4uLNvTrUYt1w9ztnu2sYHk2cgNFSLfXHYWBzNgLkqxz",
  "key44": "2fSjfptApsVqdrHnFrvemSYv7YXAXQtPjPYWULhzviSwDknJ94NvYNBei8Cdoid62UeT9KZjKa8QQsMKs9D77Zdr",
  "key45": "2N2p89LCxAXGrEDX1QYnZA5gzsEZD6ZgLoiumC61s2wApu7qzfFK4C6343NXYZzpAneeFey3YRX1swXQk8mwVcwh",
  "key46": "2nkBJJinaPSNeBeTHdTWBNmtbiT2XxSGBNxiJUnqXpSLEiTejRNxUnNTKJAA8T7tN6yDmcjfnMi2FRRfDGSEenpD"
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
