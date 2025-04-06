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
    "3WGDcv8ujczQqP49SRASawtNyvdXjAr8KVQnNoxFAMNnFT1GwgZyMdMcNHpyTiRCsQj4mabbLYWHLp32hvAeP2SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAZLws9wDqeaBMLjowen7ksWDdGaN6w2SsFfXeiQYppr5TQNH9Z2BL11HZGu9wXCh5MdKLGMsozG12ocNonAZoY",
  "key1": "5uTLamN1HhVQGbM3yVEdhQHAGe1mepmLiqoyLbQphskmfccWbgQPnHfnSRqw3nuAYwWppzJagqx4Fsa2tMro1g8D",
  "key2": "2HcoCy5UCngew4GfFjZ62hTGQRKuP9cTHYes9zLu4EM9i6Bbseap3tLPZqVw4zdLakZZP849KVwNaPD3eBa9ER5x",
  "key3": "3oftHorMksiqrGeu32pLmoDHhZSwGqZYk5M95F68M6zL8ErQnP3teNRLqWvBqvBkoargYMfhGFDe4dWFGGvf2VJp",
  "key4": "Qs8c9XpG4KUVKbc1uc1nm8evE87dfW9CwLFFanzaPXTxZBBE6amvmrmmAvy4hVNmfm8dzgNvCiC6g7YgikH3YNv",
  "key5": "5zvcKimbkmjrurmhueJd8YidKTJQj4drMcmyf4fA6HevQvnwNL858wMBHZkVM89Ry1D8Zumf3tCemuB2FTRA52Sq",
  "key6": "5effDApT1d81r9xxCxXdLxfbk2ZXLe24QwV8UgjJV9jyGrASzCQeZ11pmY1t4WchMUTpaS6q2MUsGjG6qErtNnXW",
  "key7": "23qFNUtTbJ6ujoJ1yXrtFHnTAJggzh48jcZVd4mo8tF5uudejSdcTfAbN8iN1izy87CLnrTe6NByUPpqySA8HqTY",
  "key8": "3Ah8cveybDgaZe5z2tgPEznGamfUDQegiLGsK2BxEjnTt415jBxMsmnbpScy857YcvM6tJMH4DdMCGmykFhAhyYz",
  "key9": "5NBsz7Tgsje8tME2xJxtLryRRBB2jSnHKvEp4C9CYZgDiJdho9wMU7axZzLMwsKkeyVH8Lp3ypfLfaPNoFbWxXM5",
  "key10": "uKBgCARtf6tnwnFk4eLB2JFBSPz3CrZWa7Q5L6xjo7csP1UVeZPiTQqGTCM5DnKn6eELwwQybRFsvVjzWqoGTWN",
  "key11": "4o3m28h2BSRoMaFacFoLGvdJvGYMMtR2eS4DjZJGZ6mbyRoCUnESVgX9Qb7m1qsJNNhMNM2FEXYH5MNkBPJZ5sEB",
  "key12": "RJrikvmJ6E2qEZuDKhr5G4p4nLSApdvF5Sr6mevmpscky6AMABiB4nRR9H6aJgP3SP2oUM86JQDMDvN2q88Atrj",
  "key13": "2QdRuqgk6Q8vkHsKS3q4q8XhKyWF9DMJmHTAiy1qwnAEb6Bub2nd4XtFT9LDe7D2Kxp8QUqjkJP3bMXrzvW6hytJ",
  "key14": "3pAUtHVrY5MPiDD8reK1KGZRXMbNH767XXvfe5YCdzVad8JhQG8diugSW8u7QHzyn9RbrA8ZPAp6T4d551rDztt9",
  "key15": "2GkUspiPem8L6MVuMsG4HEnGHxy2QGpHwuDrBgognTEzYtDHYiCN6nt1dA8kFwrGovTGxwEJKesJn4QSzgFipjDu",
  "key16": "4kt49bbsGabuXGDP1NzxmxEjSn21u8gwrUv3qVsAovJs2NXCmH4Wgvby7oiuiir7Vb247t2GtXUwi1uUR35W3XM2",
  "key17": "6623hjfafWs6PKtmJNzhSHW1HwmdNeL1uwkFpF1uZTgv223onpkPhLQvCuiJVVeVT7nG3T7XRByK94T3C6SkZsz2",
  "key18": "qMJ5F5oeTpa18P12bWMj4391iTGUMmFmh8Wv4YeRtd64qZznHaUHGY87BKBtdU5V5ZxEKcK8VrkT3Ws9LGbqLvZ",
  "key19": "3ZTXdi2hHG4h6iTkLvpiWFwKZMH4U4HtQ7Bd5vkTeo8DTBHv9LtVutY5Fyb9Wh8H5TJ5x7KmX3GGYoFAGw6NFNer",
  "key20": "3Ah6deFS4UVkrcYfWWgaCHsUZtvD3B7Pq9bce97LPqSFoYUSd5WBFQW84sF9zxVoww894CfhnoWSSht5poHV8i1J",
  "key21": "3euXunvzmHFLBgeow1gt16G3VjL74rXo4jt97fWdxqrPeodKM6HG31jNouYBCwUHDaP3aHAYuxnG9AhizdNYVbKZ",
  "key22": "5eUnQ5C3XaUsRCW78iAvQkQzpmEepRNbVQEzNRnoVdEKDZwxDdzvmPLHGitbNSxpbETHTpMYghd2BU8qgEP2i3QF",
  "key23": "2DDfhMJQ3mwUnkxNfbNg86baomSKr94ShnsdDiXooy9n3tUsqqagdCNfVmpFHJa68TA4HMMdDkCkrTGfqK63GUNt",
  "key24": "31W1fyRNqzDzue6Gb7NcvbaqSieQQwnYYHMfwZaaMRw1UjEjgRYxmHd4AR2gr8bYpeYzrpidseYLmWEVaFy16dti",
  "key25": "WRckEtR9v68ngt5BFXdTox49Fzn1vohijSw3e9nySpQaUAEDb4hk23WfSJMM3iFRpWxFnfpdTrBuqHthPQwfqkh",
  "key26": "36YT28pBDtiAXDATn3aU2dFzAzJYwgavbz8sTadCTcBk2V9teVS26VogGeH9USMko4m5w4zH7rGwcGq2zGYXhakw",
  "key27": "2YDN6Hm7BNtwZb7z44nS3JNGwKWqkeYaowkT4p1Mrs3HHssRWrpUPABpaPWJ9NkqCGqVNbyzn7nqzMFcDMXMGXL7",
  "key28": "2XRD7uhjHoiqGYp4iAywwfMbEipezCV2RyLq8ifUzzn3pAnn8wj5TE8n3P5ikfFLw4tEMtPEWrrrNwJRC4oh6w3k",
  "key29": "3hniZcpvgHcTTCNz8UwbubUM87bwTsnogE7Dc7Qwg9uJ7otksX6kMn9NGmxxve6h8wtvxBVMbQJ7cYvNUQivDvkS",
  "key30": "4XUvuuoVMeyjzYy7UrHLaYXy1Xk5kNj9iWKg59XS86XsjLKsECqXApn156hPbLgbPMB5EMZ4rTQfR63poQ16d4fe",
  "key31": "4yM7pDFGHcuR1b8tga5g4rEcCnh9eXR6KS3vH6JsMiacWJ5c521Ar9NggihKnNYnQUWq2uadRyf3wxKyWCCkZooC",
  "key32": "64PcknWaWJ6cQr9SWxYjUuqppfshAnh5NdScxQWWf9Gerswh49NJUDtYqP2RESWW8FeBhj3A8WX3g843NVodpdrp",
  "key33": "2j1w33Hfea1vJLX1wyNKjMZgtow3FEKR47Cq1M7HXiqNtKco2RFtFpcgwnDYRQCbj4dwBt71Z8KZobdgoxdWe9gr",
  "key34": "4r1pokff4ZSniSYxPgUU4RBRHy21qwGs1oRgJWxVHcEPd9thvJp3LE3sk84fL4TZQv43AsNYz1G6TLaV3jgaJTzD",
  "key35": "SKqJQ44NW2YEqJAUf7v7JutafaDRC3Y6UJSsEyjwt7819cxhU1ceCsfu2HUHeZkW4tYshZP3C3iSZaSLmfotepi",
  "key36": "3er5t57YQCDSPoGHEw4E8k5in58nAgrLbJuuBguieCrD9EvGsptRtUeYAZrZde8RQVg3c3rGWzy8JRWFuG3MyFoN",
  "key37": "4aC1JDJEySCHkWEWLGqkjz7i9bJRvYAN6Shp795mBJT1nZNQvi6dzs2RSY7VC4bQ31iKqvL1vraDNVgukRD85oq9",
  "key38": "4vwWSDwM8ZCXVQwKEkiMAEvZkThseJE29J8XuLiHKsUjHwoCphvkzL7U4NXsm1yLrcdM9hbTpCLHCcYWSLLi3uvX",
  "key39": "5aYxiB7cStqFV6M2ovc9N7WavGy4DL1vKdG46Js33T9ry1AY5Bfzxa9SSQQLDDpT5sSrwKt7PUpjLfMW4gDZd9hA",
  "key40": "4kdir1Dq7hN87RdYZrSSuzguZNFY2Y3soRPSmESqxYvz8mB9isyxmXEgV7ivXZLfe42SNJas9rsivetFbVYq3EBU",
  "key41": "4jqX1CBY5sSZKVZmc9gqQY9K4WRomEaJzPuVA2bgxCnn1QfgP98XMwyEyi5CBQvVKao7k6CNWyqdAkvKxJh861vp"
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
