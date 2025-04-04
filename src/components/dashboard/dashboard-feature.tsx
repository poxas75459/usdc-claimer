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
    "Z1NUrKDVBEos2R8qjNCaLZvLEXu7DGCzQ3uNUEQY7ptrp8zVAXxTmWzwdiBh7FHVFDzVEbzgGt2cN5vEtSizke7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEWC6BEYCb2xfSx7bbtWKwzRnM7K8LGeJJ4ZR2J6hieesbWj8JFHVxiRyjT7Nh8rmP3VE2ZbvYzC3ArPZUSCJtT",
  "key1": "2zXt5nbLQN1NtVN2wLoppjc7icyLEBvfBp6eeXcGnVfNn5v7LeaMxoKk9PZPcfzkTYA9vZoFnRSrnoKw9n7ttB6J",
  "key2": "5TK6QwiynKKgruGK7BUvyBJXtirTZfkjdN1A8TXhmihNPs3jQmNQ5fkzrGfk2GWvDemyx9i8bv7Br4JYjw5fFJGG",
  "key3": "yoZE792cpL3zsNja6jPdE7vqCwjaLFFg4Dod2paUsKwp7ij6pt7k7buvpYUBWUSz7DBVhJgqLdupsPxmgXUrgeE",
  "key4": "3gqCQyKQiCvZXzgUq3C6wQDHVwj4RGuggCDVvNeJ2NCnNLGSU9zUez31k9Nf8qMsnwtr9vVMiVXXa4hUDaLpf13i",
  "key5": "5kmv2Nd7rsNvqYDo3Bn7fUbx3v18e9ZonaFDfbZ5YgFaZ1jAohtap7pEEUCuN4b6FbiougTmx13EYbLMh5KtQF3i",
  "key6": "63RBjRFZTAFhvJBLxc6PJ5jHhvw7Rv2vuhtaykjZksjhhUN5XavjNBWDm6gdeRwP8ngMYYXvAJQY3eRenm82CiCu",
  "key7": "EAN47Xr6RDvHQLF1c9BomVHuE86Vo1SDGXMm2siZJjMM8YpF9yJbpPELRqbuot6D8JnLNhpRr5Pk9Ru6vmtHTLR",
  "key8": "zPT7fECDww3YG2RLJ6J5LcsPrzSrkzjAqSmQBPY5kDdFuCzE3ENzFhRPcM429Pv98wiiyKB4STEizTvbQDmAcvo",
  "key9": "42pwGVh7QzLsHQrxvnddKTdQ72Zcd1D6jAGE7fUiyXHTxhmBSb661KPefsdbUGVzbUJN6x3rqb4yZ61THjdVigYG",
  "key10": "56PSStGBBpFs4s8vBjybDKaBRnApJWhsSxZLFAXrKLrmyR9DyqLCswnFg5cbA6mffQ29UDboi8ZhcFdkTzHfK7Mf",
  "key11": "3HEWvTQzr2pYBSEvp7eCSxUtuaMQ4JZyRSZuSk6fSwucmpB9n2mYxuT8JZzJywkQYiKP3vXxiCorxn65cZqGHj7y",
  "key12": "3ptzN18ZzyqSht57xuoMYKSaaAmU8Nyk82BE1w3Rjiu41rSj1YC3bV8gAMm9oeRHtW3HEFFuEX7KWtGNTgwz5eLm",
  "key13": "3dCs15pkqFRmfCssJ29rUBeWewzS6RJmnnGfkmxeFph8M9Qf6Yb3fSACdrbgJzss1ZSoe5KtGVaCj6s58GGqzk58",
  "key14": "4MQTjKVMC6Q1skTDmA1KPPc9QR13G9LB3MydJFyti5iQGGi9wcSayTar95G3ExtdbjnSKsiuVb5SKLhGhkVa9jXg",
  "key15": "1sE5Rq7Zx55ucwxvLzR8CmUed4AWz8fxY5hGPgSDbhkWqhUww4hg9dSt9w85PyWj92Z2P25vktBc8DX7tdHHR55",
  "key16": "2tZ6tJZcRzVp5NXx8nVuJmmMWxjmTG699m9vZnHfuEtiyPP4KrRf1efBZRS3sDScyiEgj33UBvhy2QUc1cvAc5dz",
  "key17": "QxFHDFXFN68kWKi7fLuXiTf5joZoKBVW54wxdY9iyoa8Yis8cYHsDjFAN8bHHU4v32xZH5CB1sa9TJ9zcBraAZ4",
  "key18": "5AXGukQhtLubxtgmbjYWQWCW1YvgLegwwseyMRW2tJza4MYfcsy3jafC9zWYZBGseDc3veVt2uPSKaPmunS23FrW",
  "key19": "5fF6iMqEG8LHDE1EsW7DzUcSmKn97HsRToXU1QxJCr8EBxnokQyo3bXbszgLf4cNrtNWuq9VxjufgTMyag4pRFgM",
  "key20": "5pgSkYbX4MY3TW5TQ8PnSq3nziaFzHaSvmdzS9BZdFRgrnKudJ5jnVw1zRtC1gsZ1M59kXVfWv1JAU9LrQ8N9EDc",
  "key21": "4r1DMeSCk3LperQ9rTiUFPdJiysJSGe5uDZhQ1sqF9ucE1ki4WdqtXWSuNNrcVvQNXBpdDvHfe5yPeu4gUR3c6BB",
  "key22": "2v14PirgArUvpomrpzPZuNcV3mbbjg3peohvdXrLTDBXkX4SgroXz7s2vaqPjEFRbxNGpYvBE4tw1B4gP1S3DPxN",
  "key23": "21eckNWoa2us2yPQyLxXXWVcvoxbV7wvppMvWUsyxnWzDC7eUsFv29PEcuwcUiaMQAnYicip3tTehWDvDiersHLv",
  "key24": "3nPqWbpYxxqW81eiXZHPm5zcYKpZTb2VBdo3qPSiQSwHiWfCvh4dvFXsBEhMi5jXtFtpUZadkKREQtguR5vNV31W",
  "key25": "2WRHYGNxNksvHVE1NK3w4vNqmSbLaiqwwfdviour6q74Xf1kpi6sZMDe2rCKjYJQnA3powPDbCn1eqkUuJiwRwyW",
  "key26": "TXEfUdGKhwnoJJ2U3ssYSGxVanri36EmsRqyMTBvnGJHMQAnoyzwedQLU6VBc9ni9ivkvLEsYRx2BrP5uNres5F",
  "key27": "2Ha4xNivWWiKiH7Qy2u8KCRnKdZByjvjiB2pzRLg8Pn1AbyLc86opsQXs2zA6y2PrghLMLRHN4DYEPqkK5vgdzNJ",
  "key28": "Q5P4jwPRBj9rdFESkDpuE6A3gVDrqUmRnURpMS4qzm3ooeE1mPXpcUa6wViTGdnwwWBEAhzhcXVdGKZLvjfFDYW",
  "key29": "438wq7Lu1dwpwXkBGWeQC68bvR9khgwybsebK41LV7V2BCucVn3zA7tMRbxFkaAK6W7kzt5FNCADpxjYi8K5Z9BA",
  "key30": "2Lxk7zNYPv3nAVm8Jy9YhH5cFrkofqQCa3HVsXJEgsYzrjqgWQo9WFCJbjya36UEbJSV7UNgcS93cB8MKFwredA8",
  "key31": "2Y1VU3zBsdttcyhuVAcG4n2yfkRGaogz356JsJAMecbRbJbmjEVEcp94xmDc5bEH3ENRL73aPi3GwHD3Akcypmsr",
  "key32": "449Myste46mMsQawxKWUzWLqX69955dfYZHMcHr4dHrnYhBMMz2rfQuMS4bb3M1BuF5aPi912m9BvFJpeAULdBgX",
  "key33": "52CyTqNUE5zwnHuBniGURjjtruSvj59WvXL6opgUvnRj9MhPPPJVW6r4SC3YtZxfm39GuXdQkErpF7oMCpcXyQat",
  "key34": "5M52haE2UCzVqkWYHykY1Gmm8SjZvPTnajVxBwkFdqMSZ5mWmNXDuwWzNymJqc8JJX95Jcvifvipv9xt4Sa17TJi",
  "key35": "67PzLbW4uGrboeYocLUSCdiCcV2CJHGQsa99p7FThLhhthpD8jbVehhjVZ7y1ZCG5hQ5DcaqsQzUugQQ2Jf6TB1v"
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
