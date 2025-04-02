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
    "3rqMySWUqvtcrpb7fYWXB6RiYo4ufJ3nP2sLiWKEqsxKUaziWg4tgXqzNUqn9t5uAtei4GrZkGx3uKixfRcjhkrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBSw4AS3vqBRN7Br7pwWaos2TDwV7XSJ6CnfkvZvDEGwucDPNH2HKRfjUWHyj667MFqbP6JbPf3J6owtQb1oJco",
  "key1": "3G4jis6Rs9hcRt8huQfzvidR5Zxq87PBQTv1gNwGjxbeGdw68F5dUpn1v5oER2meEZE81LZK7PLFfyZQTg6heihu",
  "key2": "54882Db6HMRET12ExigaK2TYPAFkhvwxnZSDi8U8BK2tXSUaPNFACtcgbSMwntVr59B8MER7uQuaD4YY73MpcycS",
  "key3": "4jPoXbwNx8JHVrYJjTM7efMKWa1J44vQdVafn1AmcLnnPwU3L1se5mHc2LDBHFSg9xs1uQSpWLKbmohY2Kwhr6K5",
  "key4": "5bN3wAAVnpM8jkrfYCwvEQYxDEh9gbZTTq4XzQ49xnCPZcz1Ng9Lt9UnoAtsriGSWuEmvHD5Kz2Kx1xSAdSR59s3",
  "key5": "4d7KJpozX7dV4Yrn3QEDSSsAtNC3ppUWvE6PhVFtW76ENApdBXBjketJQVPRGNZ9JLCqdepuG1v5k9kN1igk7mAn",
  "key6": "37jUUTg7z2kRgnuT7paPzRXCj2HbETXz1eS26MW8KpKh4Q8QqNWcFWUEwy6E3BWAgTPPyfFqHn44xYEzVMb23ZvN",
  "key7": "HTYM6ryANwfdSU2Dm6rqcjjhXE4Nna762mMvW5aYAVfi4XgCR4FU8VSYdHWBHSpqCVNEBEdQasXXie8cZ9tqr6p",
  "key8": "3wSxRV8WZtxpnc2FqPm9YaBJhKgDVy4ZTpu6XXkZFFVHM3xCLLpmzJXYLb7g92JNTyGpnqSTbydHC89bsKfTBSjK",
  "key9": "4bQyrn61jyyDJFKvoYwrVKfed9XDbz2UXBuDQy4SfK4YjA4mepWipSNV2i96y5VpzH4Roy9cnGDjSMwVbGYdHYtQ",
  "key10": "3TdHYKwo4i7xm2AtJgVNhdgULiqLesoSC54qmz2t9NMbV3AEN4ir2BFjQ6ikuNmX5MZjtEKsVjPsqPcpeay8ZNcV",
  "key11": "2jvP81gMG7VTxLAfQNWyDercsfFZiD798YmWpDZvwxbuAjAmAQmWp6W3JjFDjaP3uiLon7sMoxFevpy7tfxivcoP",
  "key12": "4WgTmaE8q3VMrhipvJfKwoG8RPKFW67PF3XM38UhCLEUjdRZvDdwnmDx9KkrwezEgZQAZmm9drpdmqAduSwb86kC",
  "key13": "52UfgY7gCa7gH3oZodYRK6pRtP9f4Mv57DiMxF49TB5hrrj7KRm3tcAY3Z3x5XKDKU9ob7DrukNtHU6gpefzPXaM",
  "key14": "3ppVwdA3PAjbqAPSKKs1euKgWmnFNT5GmfwThoguvHpKZfF6x2iqqqUesasbyBFu5ichsFcFweJM1eEjXnLNKp8P",
  "key15": "3isdSz2cgjx5oz4ubNrvdv5cvrEZeGnxiDrKrsbeZsv2Kkch1kzWVoBSXrsjCUS5w9ecaD5MaQzuTHMU6Y31JkR5",
  "key16": "21ZkpMD17gCznRLdPJzYjU53BcRkXdvwaF2QpUFwMrtba9JSUGgGCPrQUvkWPqqpoZgyLLp3YpRb28iWs8LGN4aa",
  "key17": "3Sxgnjm6NHYtcSqNV1QmgoQ72ZLN3FQaL6QGH46kvGT4fgxzMjNR9RKfziUFvHVbLLmB9dYkLqfZaxThcxDM44zJ",
  "key18": "5Bv16uduHcoDHUVKnSAY5bGmZ3jQGmLzQAj2kUuLCd8jKRYoiMAtdMyPsAFA7wC3KDuYbs8JDi6FKRzJfD41WdrH",
  "key19": "32Wmx7dui8XD1ux9Fcnt74MiWxzyjXm4fze8ettxrzmt7M6os2wNXWnFite4Mhw4MNQ9RoMunxNyq16WEbyNPmzu",
  "key20": "Bh83v9ofunXWYKN2NSSKhU3SkL38w3Sc5BPNKTjZs3H1BnfDwprB3YEELGeBFc16uVAq86fJDzHSvmo3oRqrjzH",
  "key21": "3fD5qMaZEVydr3AHcNzW1vyLw3roDx1LEuSV77RuHrJVHY1nivCKCZ5zcNKpwgufxQCFaJjbLnshrhFb2SX3G8Uo",
  "key22": "5fPE8sr6UdEeJwBFjMgMMWLYTn1JW592Zpmzj7Kvwsvginv5FKJQ7qRoXt2tpZPhrSGuUukTQ61L4ojopu4UuNHc",
  "key23": "2ttZPFUxWAuyM4hJ16xX8mhELakgx1fDkRBw6E3aymfagMYdDc7E4i1uwwyJCSW1meemsLiaURaYsRz3AsqbhMrt",
  "key24": "2NXyckk4NhWh3ehvrGoJfrATTbFWDNtqBvgCvxokkXs2rtH7ATYeDcPkSzRFEbLxhwSbPhJAARin7Cu4Tsjz5EdN",
  "key25": "4fdLqdiVCADRHL91cJ7yQTtv6V7zfU8SYdPMWQAyWUcUGB6Fp7kSH1REN7XjfVo4ofNfqpSJQurW61HfmZWLbcU",
  "key26": "4vGzSGEY9nbZRrDS1WXooMCzrb8hUhk4VaNbbkYamB9wAQJYeNcVQg9oLJvmap4jgMh6src1GbHjALrBQ8sKsD2n",
  "key27": "5gZSX3fowT5hfdV1SS3LK7ha42wxXT1uMsZVhe9ctk76kLfW8wYXMFoR1GdQQPtVWNmrXRJUvD4uvxDadFNcsp6u",
  "key28": "61F884sm6mQeKjjQYXHGfXHRKxUgyvGaCKQE9MYsr1QvkMdwQtwgLLnpxp4wsoubXTefM5zCGVW7dovnXekpkecN",
  "key29": "35qn4ovSmT4JhXHGURrrWBUq4QDZ9HmBNfdmZAxGkv2RKBbaHh9cDc6MTT1epovvRPtELou5mvksGwaanbZuiYHY",
  "key30": "52CdADvjD7txc6TaBh2B7L9DzbaW7g2VvE1TtCYxxjs7w4pBCGqi4n9KVQyPUPKZM5jk6c4cTXuGwDioA2HWkNX4",
  "key31": "5BoKQFgh8TnXXo2jAHi5oFaiMhPLQCDbC3m2821khAkKKVNwfs8zBECHEK57wCagDBSe8JTnmWCATbyzYLRvNwab",
  "key32": "58r5oqq1wAzoyze3GithwWLbxZF3dbYTTkkTEH7bKquzDQPDBBdp5wvomVcRjtdm1QRWQchDUdyHCa9DgxMfdf5N",
  "key33": "398kLB9JcE1iiSmtjDBVdJYZmCY8AYX5HsbKD3X2mM9ZHmd3TLMKzKWZJAwbyf4yTuzUxm1KBgWsHjsaqw3DggdP",
  "key34": "4SQM33ssJTbCprnXePUFvVEeQy8Wgme34Dc7eXfu4zkYVH6PaEsZyuVYL7MwPMojJsaQJgB9kXuYH1m8mmK28K9d",
  "key35": "4Nt6wQcJy5j7UpwhZECEJAQku1YnwpyyupCjw2a3avnmkVitKyBqdWcz76Yen4MPtB92uYNayBU5FWBCw32FnPCg",
  "key36": "5oA5dGnRTgPXUcnFeA3LE48i6X8TrE9wqfx3GaqD1WD14pnLMynee2mAtYHxN1vi2k9VXgsrBpH6cBUwrGi8g1bd",
  "key37": "3K12Go1JAX4srxCzT9yovfG1s5siHAwop9aqXvWJSAqusV3kZJMj1UsNvqmTueofFpBzEazALpBH7amu3sMAPGyX",
  "key38": "5ivbhuZbGHTonS76nWaS4Axa3xPzdnEzMtshvibMpo2wW63CuzoaVEHVJ4xP1DWzvB8Xz2s5YxS7cB5h5bJKqSz5",
  "key39": "58eN8ejk2AJ1K17T1d5msLkAqaRsDZfhRY6EjPaRBfGLC3omtkBqGGoxoVtsBa6Mj1QRgy6QbmFzdkRpKTQKsNMQ",
  "key40": "2i2VRs8dnB3QZneHgbgm26SNVF9T3d5rK64P8aAStkiJX2W1c1bjh7mC3iJ1HyFAH5gW3hbgN1GEUf8QzfcjWVd2",
  "key41": "4B8GD3aAgx5tY82PiFp4BZkqp1zvm7mU3EEXmTdK7ozbYcryuKcC6XDe1qZoWQUAPLwpoB5oU4YrfbUj6V91iF6N",
  "key42": "Zcm1gy2wzrX5iG36DDXKjVgaFcFUse3iTSMW2oPLAjzfpgUwcqBGPs521pGL314JcxcRykdMQqaD9fAFNhF7V5k",
  "key43": "443BPM5zky9CavMwvy1oz2dn2N7qR7PJs3swwJdQGCktRBgh3MpJj2p6wnS9xW3u4J3P5ZS4XHBc4qomgAnktucv",
  "key44": "3mFGjmj6v9252x9vrLzBPN9tHu7ZSJpVW5pteg5N9uMwDGf1fP4Uwk2LTYXrN8tPzVyWiP4YzYwZZ4xjYPBXyrD6",
  "key45": "2hzzvcdvGfacdK8VJb6aPeb4b38qmNrMLsdFJdBPadRu6LJwttRmhjH72mnU7MaBeP6xEjG3yqYPt3QtoZeX8XeL"
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
