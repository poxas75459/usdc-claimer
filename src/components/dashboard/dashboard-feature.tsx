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
    "4ZMfERwSQDHsWGCWUCEm8H8WcnaMTpYNu8v3pEqbCg1zoSe5qV1pkjn5TKJ2fqDbatQmjVEsHSdiMGi6Cf5bjZ4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pB44KNMhpZtYJzhuYWT9cFj6tXd61uvUcRvZBngRyEx4JsH85NHvC4EbaYUH8rqL4nvWoySMJLhkuMVqneTsGU2",
  "key1": "4QRvTc8r72EMPTk8kk1CWehQASSdfpbxEU25N59DxEryBNH8ZaDcbS3nLMzSBjpsX7evTs4ajF3CxQzLQyEZG9Z8",
  "key2": "4i67uxNDCFgD9gwi1V3DcqXZgixmzpbp69WWcKsCNNd79JCJJQkeccy4Vp9DKaZ74icF169AzSrsoQDbkE8JSxCf",
  "key3": "22NbX3k1mrEkZwWBS7rUh8XXQStKDv4biQgi5TKbP6KNx9hw8fkVmyiMenDFe87RiXuu9JuvP7yZHxe4wJ9TucBd",
  "key4": "GpjrWp5w71J7fxwVSXKyjhtyEZ1JWithmzTtrN22Rby9AK8fewF62LDHh9wKGGUGjgUD7DNfXUPgVkJpTxupiwt",
  "key5": "2rBPfw97UUuyxjCVLMGPrtZVCNN4hSAsSbZAPuHoaPxQBhPFtbwPxswbx8M9Q9fQx56a6jPfCFx5znZriksLTXRC",
  "key6": "2aYRbEZszzML6jLjW86fGtWNnzmqbcroouxz1KtjfPHc1KEASjwWNw2AtjDU78RbnY3PqrrH92VxDiqFg9NRDgMt",
  "key7": "5MtSq7rnvXYQshwNSM3rYRbLLpyScPoKwcnd7ZECtAvMF3CrPDpLBbzsFbQwnjpRYrKftK5dGrc4QfeBznHe7hgS",
  "key8": "61uPmBkc2hx8wkyMwgw6ekbhaoSkC65b5zdHk9G1sxiQSLfTQ8C5zMBiQtLnw7GpF9fVcbT8bHMw1DwgWzgbsYFJ",
  "key9": "5vEj6UAdxgpThRwyLpUfesNQz1EUXPeRnE3XvYn29EzXC4mddRykGgkSGbFbHLCkvzKxDBBV2UkhpozvFN9v9WG2",
  "key10": "2L4y41euFqmJErPSooxw5rNnFWmMvXuqnSDKXXf6iC9f3yM7PzBse3rm5CKUGac62uAyjMGeA9csjtsFzdM8eUtA",
  "key11": "2c7aTGK55ABcxtHXqrkeTkK8AuWq7vksGmZhsHvnJjnLsmF6w2epxikojNgqRcvk7SSTyFdJhYtBGRkuKeWLBMk3",
  "key12": "3vTc6FHa3x3p86iQyhpt194zT28zgG7mn77DTd5ijs7RTj9bkNDfEEyMZc6d2r9aPwa1Vv6zb8P2fiFtVEqnC2KM",
  "key13": "2u7PqtYKwccRRDprYhPavvNoNTnNhafDeAaDtL33de4kfYKvghEuEjPAeDYNRQvfxUPF2rLi747wpV5C61EKiSry",
  "key14": "kBhNv8znJeie4aPPbyYtrhi2uuKhmibABPnbqjFeTsgF23YbJTX1PW3MNbJvDDF6czdDBMWP5wgPFEbZFwbFMCS",
  "key15": "5SnYn92RPqBdDbv6RL4UFquLngF1YyRKZRMkqznXBF9476i2hbWec9Fo2AKNuAQu6oN4v1nLbCkMs4TEbujrJh1o",
  "key16": "2L5JV8EDjx13QJPBgQrdukAqb4FVxQ49TTa6bmc8PTqP6FzvpSxJbSfgkrfSjdgAd6W8FjHjZp1gXu7ib8dS4dQ6",
  "key17": "2nhZvtyKb9YdhX2brpk2yVZkzyRHFpH2ubYXYrPwFxfgXVKPdKJGD4YkxyjGMuwbfdxvZsoBqrvuDDPyqVUZnWzK",
  "key18": "54jJiV17TPW5fxbQ5meo5AbLirCi6RLefh85ypa89LnL1R156dWWoAGMy3L5hA8mUorLtCVSmdw1xeCX9xJDdNED",
  "key19": "637WyKtmVjAXU7ZY8M9pNRfjrGqiY3aWFMisy71qHPEqFGvuBjs8gZC2en1uQJe6MWsWT5xSvDdys7aNAmxCgBNh",
  "key20": "3eVVKbEpac8V2r4Yh3VBkcq7CEbiYRDbiSkz8YY6aLDV2HvZU21gP3priAN5pJj1eY6RqQRzbj5N3TnTzQShhn4Q",
  "key21": "BHvrNNRXR2QC4bMvoMrq4ymxM4rvRCqsRCXnG8NEuZ3VrHfDNPT5pK6D7oJejmikkCTVJy8aWhv6rgcE5VQcDrA",
  "key22": "4ESNsqTgUp5XkqVafq5s1CEJgBaG1qNaA2AH7DttFCzWL2BqMdK4B9bEUeeSDjNEyxVH1AWVHh6SzymRURHAqSDu",
  "key23": "2EiHP1gtJ8SHS8Z4bN5tuysT3DFVQ4H2nLeu9a1pJMrDmzavLZMYwTizRavK7zBfygbaTyvqQTW4Md8vz7MufoNx",
  "key24": "5APLHg3m8RajPdRgXZU2Gnz2asqfeqHtbXF9J16ERZ8adWvnJpYwHW21iqGBJdjWxWn4X5ewY1JfNGzoi5BraW7T",
  "key25": "2z9YYNC7Pt4v6zb573wM7KkzbxrxBEiJY5XomjGDDaYtj73ArSkDsZ97E88K2rNGXi3fXLGsSKVYLjujrNP1TQvW",
  "key26": "3jhMTJnZErrcfnaz29WFBCP57d9VXNryGSAFweg1FVP68wctbnzZnMEMnLn7wncbrD4Bm2ZTM3y4BQNvsMJqowhF",
  "key27": "K3nrZNgKXdivHSZPXJaHocaUhemd6kekZ3gq3hKFjDrBBG9Xs24hQGfU9kZrgBSvob6HSRSsfLtQHkWsLdAf4To",
  "key28": "4SoWyz1BLdowCzZRKx7mXeQNMKYEPVaXDZCE7sqKtsj5gYkVHynLcbfp3PsSocdp6stK2Zv3v1amUHbdcQZWw2de",
  "key29": "46e4n6zVbHbQzh555aSANFGpQeAwkWnyuewa2M5dgsFP8rDpQTTSVnv1s4Qq7NqLasbZN7JLCWQrB3JmPiBVxCRi",
  "key30": "4gZtzrxcznTEpRpgpbQTaEvqYSq4p6uo3vxwcnwuquMSE55cmkey9cFEJXKWWTshqYmqvGEgJEZbqo3oFXJi8Bdu",
  "key31": "5HHrM4XNcpVfQWX6JM6D84BL6o51Ag3BpgTfnRX71M4sN32XMeRjvEKHBsoMRdRnvxZ1FMFgzsWpWYCDgeHvdVPy",
  "key32": "2dTimYizztEiuYvAw3VfA3h933ReuLBt69Ak3aKY4peP7RhQkd6hustioi99YGdoqoaPQprwfpu1cwVEdjPNLv1R",
  "key33": "jmG1arVz7PyvdNnFNdhqonwQWQ6Xff6VC36NjQLyo1SnkgRhYDJpuUjow3jcaXs7oNYeay9PANq4tcN9jNeJNvJ",
  "key34": "3JcHsPiZVZ6nxASEqoPkvmVifs6ZWYMx87GVZTEtVzHyNBVDdFcBD2vdrZvBizR1qERfE8L4wSW163fdF7TRUc5P",
  "key35": "5WXjehZrZM5FdMUxgcTUvy9P2ashpt5nUnCzuMqChj3vUzSv8CHoRq6sss7VELMZCSfrTW6VX9xD3KUKzNeNfFqV",
  "key36": "4vwJK8ovYxeZ9W4M8zH9ERFFSUmAXzQMzK9eSHKguGUTZ6T1dkcdWFDHXvTJtZpDZm174gDM1F9p4br13DaNXP6j",
  "key37": "2EeLaSTCcwkATQzb17H2erdHrT1SebiWJM6TWyUMkYEU9kUqA6ECuJGwKLumZa2VGrZ3Ce1omwzEk4Avc5QpeZFN",
  "key38": "4FP1zzDt6NhedXSt9xwWRVN6GgHCfefqb27dkqURqfeaUPxCKw7CEVxGtc4CCoyc3dpvxMiM51oAZtaDDrGVcMKY",
  "key39": "2PvAuKz24cHuqA5bCS2qZWyrnxzBvRKhq6wSTKCNn5BCi3bKL6WX7eGqKLDHdNKbMik7Ba1XQyvzxfcfKQPuezW5",
  "key40": "3vv2udHzCUavztt2ueXYx1mQSVWDmAzcy7domJzRzTVys28mqz3i313uatfyeHQ3gXj3aimLjHwY2aXTBwKp6mxg",
  "key41": "ZvMHeecdapRU9uuGN86pNxLSy8KTf88cAtSN41HB2hLtoVtvMHyCaYgDgxxX67nEoFrTDDZP7eJeLNQqGkmGeUf",
  "key42": "2xfQ7YVkGtj3o88rgnxGnQHjBwowKNATeSQK9ZE3WJx8v4FonnaFLu6FkPkuUVZNzxfDpHzZDkkyr1qjrNBooimT",
  "key43": "4guAj8eneoKR93FvjaDLSJkCDhnkut9NTSfUA92Ji5XVXUVspz3dhF8fbDvcLwGKRiRHbLWYaHyzhAraKM4ybT7K",
  "key44": "5PBMuGaGHH8YastF3Zb1XsoJmUVfF5usbXFT7TH1VCPgqgCgs78m7jokYV3aWQyacsnxogpUjGp435ccpEUw4h6k",
  "key45": "3G75g1uY6BX5B2WbFddREhK4wfm5dWZyTXjTfTfYE1CKKdW79egxrv9hVYy2rQicRE5dwtx8fTg4pYkUd5pUMHjW",
  "key46": "4qC4sJZMu99amRAzxKQzptqw5LvXboXfxG53BVtThnVYoYLupRiusfrehq7ciGee2XdeW6CDDxEL8iNDRqk2BgAv"
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
