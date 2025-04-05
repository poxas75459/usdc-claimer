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
    "2P3CsQZKmY6bRdsJGLzE11ZNzRZWZkbdUPJUNRM3EGNsWvjjNFLeKAMsP2hLfYBFwuBAYyHgXt4hcnf8sqV2eFTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3pKWn33xXEdzuBaJikLJYh66mTZpR6QqVph2it8jhJL3ChKAaXHniJKo21ZQf6dZLSraWzAXoPA6xDFUc2SwCT",
  "key1": "4JucU5rsEP9o2ofoitsPAPtMbKMN7saRpWhyGJWnCRqiRKMX1PbyUxL8Db32yVV1SQceVfnqqjBW3PqfAJSiX5UA",
  "key2": "2LRBuVZM6TDMH3tZE6wtd7ZPLiqam55X4jXNgSmebyV6ZjrhpwEKdxirGGakqifbYAaXpv7gsuJwzYJYA87fEfWq",
  "key3": "TyBUgbzKnWiCom1pgfQpCCVHdhxi2rPWSNUTWDF5CT55hT7dzx22hVzqnjyGYgRYxaRFgbBSFHNKSGymBABAPAD",
  "key4": "gcYWdijUh1ero5VE7vVhVhjtV7Mk2xumeEtwVH2bmgmifMnPAuU1RXHRbwx1XuEBEXJZ1xMKPGr1GWoaVQiQWk3",
  "key5": "5nHyadSAj2gj3hksVmkFahW78RLFMHPwvF9pfpjZ4EMvowzvNmGwyeFdUf7wAuAjKmS8gtcxGwHEfxR9RA7iLEhk",
  "key6": "5kNVJq6uVCp2idTeFdRSdmhF17HPjqhcGp6AZMKu462S5PnScCo1pCpiEJcbm4h9F2sRiAGAHLFbjez5xv3gHevt",
  "key7": "2AGYBhhoTJaDBwrUcZvuErwenkb7E5yuMDzC45YD5MM5oUYPc1efEkJxy1yECKGspPRCHpfrTLc35tWfmDcNXjy1",
  "key8": "2nZiDcZrvo12W3iQn6UfRhre4JYAqU4d2uv1Vhw9VnPpBB6WDq5YHAVzhsEZuu39QzSycs6ncBKCHReMWJ8rLzp4",
  "key9": "zrR9py2gdC6g3DF2SP4DxGCd6hcSjiewrRFXaCnapyT7gigbzTqHAjGmfyxL2WYLv5RTiRbjkip2y71BcN8zAPz",
  "key10": "589Vmxfek3vFYQJzFapjwe1weq8HBFmWUoxaQRVvAXY4RZH7KsahEUYd8YCUqPoPX1DviffKZLR51Lzk6Tvffrnk",
  "key11": "4B1Sgk56G7ardei5zjuZW5YXArwQcTZBN6djNesdfvsBbZwAxQu4eTqh2A6imA5xR7owu5ECDnB4FywpU8Jq7Svw",
  "key12": "34dN1qUpvwewtWXtQChPHFUcfjLc3VNdMFyGrSVEC7Kb1RiJhpHQezbiWPSbhodqKpMp87Tb8cqEo4T17N632nkX",
  "key13": "4JUvRnNtwMayd9PhQWAhEJmZDcsPox3BrynkamJWgx6hCX3WJAzepZNwASVfU7suaoyVfvTp6nzBZWFPWBBhXFEm",
  "key14": "3PV2dz4c3QZbaRotListSfUch1qFLqbjLnaWYqc3W8Meex47wSmkKNxQnYMqKNHUKxxcdmXnuz9FvGk8jnP8objK",
  "key15": "3j1cVXkfyg3DyM6mRbV5rxSJeZ8kHEqoCCU8JnfwJAHRrH3vCWNBamgZViqKLfebd5gjo8iDdMn1k5jwe5XzHTqR",
  "key16": "3zj7R5EA3JuJWavSe9ysQ37n5pWr9ZZxGVsXemfowtourwTvDCNLjr6WU9RfEN3y6pjgccAqUBZKego9U8UHrMuY",
  "key17": "NoomRwVGM7J5daEXuaNYuU5CyV8nwmPmcbAJG7Xx2Ww8EfFehGLb9xzJQDVubEw7GSssgids1ymbrCG6MvLGR6H",
  "key18": "5LCgerV29JFXonNNcJP81YmyN39JGSJc542aXgYJXhn9dqGhxoXjdoxGmdXf3dRvM3z9ofMBF1vTD5rKXoDpLg2t",
  "key19": "47ahWFUpJ3ey3nR2wVRkHXCBB7BbHLKiXjWf7tt51afwo3kt1KZ2QTqgpw2ah3eweTtr6Say6CWofmEHiWAnSVZ8",
  "key20": "2X7YDNHpQWpep77LYHYNQ9oYuVCwzyu9bmbNeaQmG5kFcYcJMv8iBWVxuxfnAnsmZ4yMf4ANwFKpP1nJZXkHviSm",
  "key21": "pgMao7HynGazrnGyDGuN2MPgu1wC2KTCnwh3YBsbJTrSnB1z5cJdz2zgb8PMDgBAjx3XryrmBh56udg7DYySDo3",
  "key22": "2S4b2xsGsooADCcpw5a3drjRKAc4sQEXsfUcxz7DuoAe7dTHyLNBXC2xffpS1RPfHbx3cs48QqPxLJxUbJcPQW5D",
  "key23": "5cn2SjjrDnQdifRaKzkggaYG81wmLHc2qAEoWpG9jWdYMXjKvk9J8gpKXkTgdYHRFCVD5bJWpWmCEuf7FWZWEzTT",
  "key24": "MyJimPhmUHsDeFB6z7zTwtk5WNoYH5oXR2LDcfiCLjcXSttRJGCEmc1p86jirrPAaSzWDsKP1aP5iqBkeJNa4dJ",
  "key25": "5pEAx1s3a7AaManURD8UTbHAZapjY3vBphC9XQBBVwGAwFb3NajrE1q2xcTss4cDUT846n28b5xAjk7pG4FroEUg",
  "key26": "5ignmFmJRMpx1egWrMUqJy1Vtq1PScnNXvq9NKfQscmmR9H1mtUHNEPJUJEtJujfTMPkYtZyrLzPyFcF97xY7iGL",
  "key27": "45hB7DWKNzwxQ53ei3pVevjnVuEcKQ9WNQSa6fNGh1DPLH6TYBwW1KkuUkjd9suxZsGRDFLYNVXLF17HZriJmMS1",
  "key28": "4ABwDWF9bmaNGWG3RFMhyAHh8VE9myYHTMLmsTCBQxU1x22BnUeRnJSm8zEXwVfNmAeScgUkDcZGzhbzEssVNpKm",
  "key29": "RyucKHS3T68xBXP4mrGXoLNJA3hhnGNqoy4a5J6gHkSathX7fSUeTtdMqv1YS4tqM9MBmVqGx35dq7kytN16dTs",
  "key30": "4ws2B7pUp9HzoHDYMqNKZGdRE9qSZWbtvVWPFHWYhndvdESHocmESSQPi7oW7xrZCSbzb9cVoYTWWLQdWTug46r7",
  "key31": "5Z6Uja7GMr1bC5SJziCXUbm5CCjDCmgRBcUF143mB5UrHbNupunWWuQ6R9NVHbTw3YsCsCwCF2vNAmCFFcUJcuDr",
  "key32": "2xDryeasDUc1s84TtbvnVy286NVvo7KWrq8fxLdvDUNiLnWGBG81RT2q9XFq5UFWTrMGpq8Nnk36pXERsMrZ21sL",
  "key33": "Xy7fTVxCZGqfZgRTu6ERprccwmLBz4h22xhgxK38Q7xGNMaAmZWzqQpEzcLq2TgVDBH6Ljw93ghrs17QyKpcHzk",
  "key34": "4D1qRWajYn8RE2uAvgwf1HFFG8wfDPCpUbDsn79vX5V8mJMQ6K4yo9qshMr5RZ5Vx4kq5UaCowKu9mRFepqCvwkn",
  "key35": "3AMqtsGrPNeggeg35DThqT8xTnJYenSrAVfRtP2SvoDkgXPmnawLTmpQyUysSL2PTyKJUqbxi2BvqVrT3qbvG3ef",
  "key36": "5gdSYHESXx9AHJDGxTt4SD2TM1ZW2SxNbvdB6abWoKZntqA5nDxEyf4SV9ZoTD8zvkSuHNKBEFN9i8qjQx6rf319",
  "key37": "2VR7QLpC9BGpTpwKd6vpwasqagvhzAWuHHjCg9cdYSVnyqZqnzgJn8xBqcrhZ9mNNagJKRNiFxcqWjKtna6rUSnS",
  "key38": "3gCapCbQBvjdZB9PBPCo97rhkKat6vJB43fx5UvKiGx2wySv2hsqDWYya4KUBnECcbs6Y4XTeNEBRcMg7qQWdUpY",
  "key39": "8chQq39T7T3oBzXC4MQDJJFJn5cR9sgQ6qytnNkUD8mSnNHd54kfzuvr4CcFvLRWNhJeVQtu5KaJpCAfdLePrt6",
  "key40": "3JJA4G4ivNTgXKAp6NgYc3zW4grRqrP1P3WeBDJPoM4wkY8CfEBvrLXf7JWo2Ku2YJae3FAQHQJgmaP7cLBrgTwN",
  "key41": "5Sr3zrGFmmaetub6pa8oVbsRNXq3FdCJm3jU9fXmrUCqNin4xb1uVEYuEyrsJeSQRJxkJ91YJnEeB1u1vGb2p8yS",
  "key42": "38yihAizj14Jd3qPJeYbXRgjhqb1xEdEwRZKwAJXY8mi6g86ez9gsqF814ryqJFwBcJDEPzE3Qva4j8NHx2cpdhQ",
  "key43": "4LZNwddx1f17HGfLWjFUpHLCTdswHA6c6PAVmchGdTKgya8AcVwsLZNmBeonPBgwnyMUjQ1eCA6rRQ8RHmSRnt9F",
  "key44": "3JPGwoo9URxdD5VKtCMFWAaPxzPkHtppL4VGRmRqFHorPEkhyNk7Ry4zGL9ywvaQGuGh9XcLanE8irpWkk7KqGMD",
  "key45": "54aanAW4gsuH6T98EGYmKG1E8thQqHSqFebGz9WFcQ5dDDg6EFD52SDMDH7SeUotztZC2yM11HGJiwXWkfFGUS1t"
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
