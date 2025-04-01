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
    "4ZaJvj8SLUP8AGdEg7wkvWNC8tYRfaPZRkqD4rpS1xgNdmkSfTbqENWzGA65NrGkdNtQJwDz5oQjVK9FNXXDnwEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkMoHSoxezBvAFDFTQZEo6Wn8oLTEnm7uBaeUAgHvXzb7bPNJe9JQG21GB2GX44DxmR4KJJkmUm4kRqV2YkT5PJ",
  "key1": "4XVt3nnsiuuqZukQePVDQQzBQ1Nrsp2btc6uC3ZyTPfYjXVpYtyjL6rzJsSmUNuXRuNX8FSHdTnMh8BjaRUMD64n",
  "key2": "2C6ca6eQUNhLZp4B9t6SDMEUAEXLJKNBsKR1XtEgTMUU951e1v533M7osWNKgFAcSNmf8auF2HKyVXSKaKWZyuy3",
  "key3": "4XpkTcWU1Y87GrLACEAUm6Mf71FX4dLGKpAKyRsMD6cVfAuAwEGuB495y9DeGwuK95hpowxP5VGefk4EyCwEKniW",
  "key4": "xrESveHByZD7BZJDhVDmtS8jAxTs38G8NNUCgHGcmgewb2BzEf35CbEgr9GQQ7f4SHVtiwkMxQtSHY86z2o2pSj",
  "key5": "2FzRHXxequb5mdqjCkSCwEULKnbJCzyE1jx1vokabe6JaaDb1yFqzSae6PXTEY5PSNhGSxBqme28TzrdLQSCX6CC",
  "key6": "4YSE4HmMZZ7qnyCus5XqWSfTacZmNAoLPBxfHQyGeshonEuP5bmPUij8FzdyUh3d2mLcVmNd9bcpQvwEgCHpp3sp",
  "key7": "4kZdKwcUU4Kxs2XxuXtY33Sa4zWLwxdoB6YbLZuRC4SRH3iwXtTaVNWG7PKRAJkn4qnTsBovpFxsNkrvH1GjxqJP",
  "key8": "5f5g4yzLrLwpbqDf4bBsu8dv5PUw8iWSyRVieRP73TgV9DNeW6dBahWVBPEXujyikkSzjS7ATDXBAt8J1RggEb7S",
  "key9": "2zX8nH3J8KFV5wKPNrZwhSNhWDJwW6KXrkWTmkg8kg3MazLKGmULyRjyuhuyB2KohGrxtLfRFZGuV6posaenFnnA",
  "key10": "3TajVmNUs65gig1XqYmmVZCqDur6Dat3HkUyvLi7ES8wLQmHftWfYE2bkyMCtLmWLpGw95GWqQuYRkaTEohFYiPL",
  "key11": "5raX68X1mCrnVDXwRVS69h89vfBAiqzZjLCBtRQpYTtcSnY1qCfmpWBaguHXqmV6bFJsUdpvN1DpX4xfZq7upH11",
  "key12": "zrJ2Ji9PPRawXrapoS8zApPxsHchu44NRuNb35N8HRr5WfZ2eFxVksyAPbzbNpMhLrKV5f1AZnPQyzbRY5UwQyv",
  "key13": "2XTR2PdL8ZwRTpZ2oUdJvMjTroCb5adBLR5JvXZsZvNhkohYqowDKXKKY44yNMja32NxiA8eCQ3Uam9XARZ1r7kL",
  "key14": "3aGxYnFPZW8SSA1V11fppUdAZRLMiLctJHK6Pmmk4XRRaT5evNQA1F9pJeTxpZfT65DpwsD8wUQbawjNkerQBvDq",
  "key15": "5Fb7wWhX1UzQkMbfgoxHz6fgZMvQSpbfUapEJoi27JfsWMhRjCipzfdnffj5X64mnChedgRnzwJiATbF8Skn4Xwe",
  "key16": "61sutZzHKy1gvTk9bm9p15NSGaHSQQTWD7gY811qKvm7JYJ8M8sbJkGgNeZu88beNCKzVBL4b7kfQHb7Ba7C2pfH",
  "key17": "57hdo3yAbAd94bfxWzyjJTgjR83NC9fagEfPo6WW4cMH8Ct8tENa4c6Pc5VSuavpuQrYTvFsad6TGXUgfMdpJVT4",
  "key18": "5G5x57H3D87CHWZwRonWBevDEBS9pn6vMfPC5yQhUYA8cZ8t9WSczBWLwfGAgC83FWBC2Ch8Cwmw7wvVTyudce6X",
  "key19": "5cERmCHWmQN9RS3TYfD41n7xm5gpkKq5b1v9HbVwnuY3uonurNcs2tNLMnwYKBFDvazG4GSHu22AVXUqCd9WZ74z",
  "key20": "5dLFi9HrLcfLXjoSqCcrqzq7XMJP4Pg9nUd4YQFfLnnRVJZXBzLZCs5gNU4DRDpVhsk2Pp6Zp2SufH8fVj7nvAKD",
  "key21": "2wGs983Mqbaimsjpb8pGgRspzA8kayxW9qp6w3NmaTMDoPiGMD1ULJU5eirn2B4UiRvcxQ5YQ5kwxnPnhgf9N6LD",
  "key22": "3CVyDeTrsWanZrP21GEFswQbNRVpEWFioUY58W6ENjtBVQ52zkmRPMWVxeVvpKmt2fLKTg7GRtNAohDoExcuQ7Rg",
  "key23": "4r5WMa9R9BWGBvfYjDNethTA4AC3Kue15roJ3Aj95ZpoWgmava1vEpHDawA6ZwGnGCG2Wn6w69uP1pPwvkeNNpfb",
  "key24": "fanzLMLvUM9nbRbbFXYHgUBtvsmi5gMqT2B2euPXf9oMv9tGGosZq4agJMDjNWaQxeF5bp1SeskiMpfCzG8KUMN",
  "key25": "gLpLNwtrx6LrXpGktCiUEpvtRJyFWsaxAUzvxdFKKVvXzDhre2R1BtHRR2799aRrqrGwd76ymWmqTyZZxqAZMdE",
  "key26": "3p6rg9S5biDAYhXBgypw64G7cZ2DF8PxfoTxCZb6GVR2gzLRxNUYnsnRye8bGpbWfmyZsBqSpp4Niho7s9UoXW4v",
  "key27": "3vFkFnzcg8ueKsjdz3G7ds89r4saP2F5gxvNGgJjkTsjqdYzo3a5ywi2MnkQsxFa96uRxGj2MyzFabnLDN6wibf5",
  "key28": "fbPyvGzRKcUQoJWQMmQmdmU2xt43GkKQVz83MiBNbAKE2KzMjYoVKaEBDi5hwJ2WAT95eHCC9twJGWqr552b4Gi",
  "key29": "3GSRPC3zsUNTyeTq9VAH6niaokxNww1URQYAEkEDkgerpGdBobXdiEEuUDjcX1ANMxqHhQBN8dvtd4CfJJWQiajx",
  "key30": "3WyTHFSyfv6jKyvTiz1GPq7aMSihE4NQvqyoRMqNA8ne8m33m2KXtgPgRY4TukfBb41MUNqGsvmwPq8rNJYXHi9Q",
  "key31": "2wjr7RK8Z9QApikbK4z3CNuTsQwERsSjwSxVFHxrdjYrtwuw2MiW5S3RtwY2ph3Zq7LN31Y8e5Low3rUP1hf89Ug",
  "key32": "4QVDZ5LLTGHUQcyCjmgmrohQ5aCbSti2W74mwKs8RU4kdGsfgh6nuim4Tkt5eRJo7ApxpmfFPoqFNxSYKF5H55r4",
  "key33": "wUXwYZvq9hJCkTc87Z5JPRRoCD43Mg81eLfqPNsJCmX3arDApdHPA1VpZEuJiGZLRiLcvbDTwue645f6Q1rqdRH",
  "key34": "5YAw741AaKyFRcCKg5r8xhi82twCG7K4a9n6Zc3ZatBTprPNHHMgtMTZjTJyAKG8qjCgxcurGgJu9XgLPmj6GCfy",
  "key35": "5Vj28hQpvnvh6bCoQ3EgXYU4UhXjCiGcw4PmqrSMVEmWZHnM7yPYA7vDC2f3Fkd8pHJwQnSe2Bv5zicKy5hTxExS",
  "key36": "4s8MEviDAVR9YKz8QqQHfQkB7URztjsbdrWos7XKCzEnYYUxw9k8XDWRa6qeSKmPwQU4p4hpcsdBBKJEX35hbtkA",
  "key37": "5d6boRE4k31yUyLH7QZ2spmdJsfdzizxNitk5qJwGw5cJAWamZdiVpnuyynXDtm2PXTgpXoyWbBaKwzF76gJpP5V",
  "key38": "2miCBispUhFTp8RAtjjZjDD85JjyZYJevWbKag5B4u9ozi9dh6j1E8BDVsfMW9YbYWBvd3hvDK4rETYonTnyaET3",
  "key39": "5P6sJKpfyCnv8fZct3u3EVgaRhSX5BHA9jv5infUx9aaAj2pqJtXsVPrp5R3PmsKw3FLykU31QR9U7GSVi9ytEHB",
  "key40": "BZ57DtSHv1ooYFcKfqcr8K2uwbFWQT6bewUQ7YozxH1Kav2qW7wA1Bs3mUCwQ8PrLuqxNYSjJkbjVTjw47ZQ8Fm"
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
