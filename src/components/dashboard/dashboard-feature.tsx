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
    "qLE3pcVYqhtSBrGYMERUwzQSkHVPoQbyNW7GhiBxQ7NdLuibAm3YnJH2dgFWEbRu6oa21wdEMjVBSN35KWxwJbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJujvw3TNytYKsvaspGVTdsey6vC5XRdzX2s4NhdmL7BbdKWkjajyqDbVbdd1wWAr2xrPxKVzYndg7G2vC8MuU3",
  "key1": "28cMqZH9VycCq6onj8s42xTvR7emTByJ7GnT7WiWzjkADUseYr8QBTnXBvf85UxWtfPDKj4LtPKpuxvGcQtu7aMV",
  "key2": "5Boo6PWrbNANpgmQ1HdiQLifvG3mmgv37WTpmiy8oXnvxSiSdGK4Bvs9ENToyyxVVk8P94CfDa89cMckfHgVj2Uc",
  "key3": "2ktaGpScATmkaapjCb5t4foNapStB2H3AGyL9Nyp5Cvrf8FMkWY6i2cgT2gtcBHSGjf1VdQohUYn4xKdsTEGRbTG",
  "key4": "3r7Yek6vbZF8izA735F4QY6nvWeFCEiZsJUqafs5YWcXSY7BiymPHe46ZF3Z1QSHAhgF4aUQgcjFyeTCiHP3xqe6",
  "key5": "3dxWRPtdj5jXWwCcDT3K8kF68HDtSLPLbtyViEQeijBzqm5zxpkFEAzLaQpjeq6SzbWobgXUUQrk8HDyaMc81sWL",
  "key6": "3GSKBuJsyn4KsUpRguM3hEe5TjBTMgrqhkmDKYMHdbyAcdnwQj7UyJ5moWAE1wANA9k4bH2vuCbhBfBdTFHgFtUR",
  "key7": "2VLY6zEAjdUF43VEMFqRE25eJzGhUCUaAP7tiNWuY43TAx2tbLQX13cdA6mdqVFcHJSzbCKwV9qw1Wo4sfZugvaX",
  "key8": "5eQhG1yXmc3YKPUfKbZQL92DC8D4G69FSG67F4M6Ektc3Rm6YusLKfiSsoGkXdACDBNcV6KjKBEYMpDHtxFMp5GK",
  "key9": "kLQf1z8dn4pp1m568yxvgEHn7YxHSeGjNPSh5jG2Xpm43xC5sBfTL3VBGKc6aDdT5b6KNw7H7Dsc3jd69ko1qEF",
  "key10": "3Zfxmw4CmCWvK3MoGnvvNyyfEiLKi8imrk6oWEpeMXEZSTuyFA1T6F4gCtPpdhHb4zXDUGgo8TLDKANW1rd4Zo8s",
  "key11": "XxaUkSNFQRQNQCSSEroToTbEUSx7nBxWBDUedFqDzV87VaALd4t52nVsY6pPZeoRLeW3GyEv7ud6uHfAtL1bEAD",
  "key12": "5Q68VKNSYCUJYdHgqT6vb787m8iHrHzMgKhbhHFGVC8HFyHjuSEQWbCg7vyjeNhJNn1gwXeueiZBSQevQRbH8rua",
  "key13": "36fzAzTtRt5K39sGgTT1krBcT6XfrA7X15bDzL59UuhtCGR2tGgCUNKgwqR7ktAhYagBxor5pdAWKJ2KKyYy6kQ6",
  "key14": "56JrryNHYardomjU3vNahEhR4MNshpd1U7U44JCSFuJwm92PScNy56yRSWYraH4UeP1tyKNwn3Bt632avkYgWceY",
  "key15": "3czUhtxm9JzP2nbabTQcbmTTtqrC7kdARWf2XGTE9o7gkypqad4ggDEyUv8ZUuQ7yjYhD9Pp9TDRJXAet8GggLRj",
  "key16": "Q4At69vdNJVWNafNaFF4wtFSNtPhugeHEKizjqxwcamc6yrqPfnX57wATD4RX24iLceqe8LErf5j1c3JV54iz1w",
  "key17": "3KFHnuRG6CGeiFDC5izYkoC8h4E6cHTYJtD5tAkuA59MupknFyLk5BAowBDhjjBv5YcgHaNFHhMLqBmuZiM8dNVB",
  "key18": "aU78fbmXeZpphLCzmNhYPdKz7Upx6LGywBzbTV72AwMEdqbdrwoqsu9fsZpdZAT9yoq9oC3zQVPkZpcbed4S2aE",
  "key19": "3N14Ash32sw1EQuyE7VKwLfo7Yd1Cj1zUJhTQhaTpLLxK7q3EkDK2GyTjgwR6fg2xMV7LtMkwpmjTAqAYc4BCEiF",
  "key20": "2krso5MaZCHoDy4HP1SD7yG7AihadTwpU6h9FeXAb2wsui2Xfk5ajxZ8sy8o2Y2SrRfhnJEXw5WP3wgd2VnfWeq2",
  "key21": "4VFbyXey7WBiziiqtLp8zMN6525GfkqoqUA3GJHWddVXXbTFDohNBNbzaByJhK1VNo3fb6H2XuGkQFhwjYefACe2",
  "key22": "6hZh6ahhUu2FQQ2gLiwoWsU1x78LEmoBu39gvpRWq4BXtFeS6Qy7C1tXUm5zFwbptotTZYwcgEh1ZRejHuDo6GP",
  "key23": "2oPob1trS6Y4goP6KbR5HY3cMSMDR3gpM6sJoM2gpMLowuEqN967bDs6NKNgHXJfy8wLBwe8Nf2XVWF9SoFfZrnu",
  "key24": "5M7gJnetCjUY3ngoUy31bWFRc1Gsf8PVAgZ43xvx3LzYmMQC3GWTbnbxKMg4t7sJ5RQMppJ7ZzB8A3Z6HDcR2duJ",
  "key25": "jJmGgJ37Mc77X1L93HizZjzqKKf4TsgX1K2MVw1tXoRNqwcu2Z3V62dtVKgwn3APjtYHnRhD8hZepKxKqBnM8Gj",
  "key26": "5wbRdpvGfX6RYR5eJZnFSW66bJfHdCea2v4nqCscfSUMbdr46yA411shrdJXtb2pzpG3u4edCAM1aMYecxfLoKxg",
  "key27": "3sDGB1tpqMMLmUnisKJw7CygVkUQbRHQ6B36RM34E8CWZZJi6bxWbBQbVdnF7G3bXcaXiDVprbC9eMxU71a1RjE7",
  "key28": "5XrSpTCGswjqtXVPqg9tozzQcwgpvCWYbUdr16dPPuoXL2YdjTahL9SWT1DtiE2UxJRQEhW5nxVdkzLykPWccHxj",
  "key29": "5XHuEESB9CPCPfcYhfi43PKHC5fYKFxSwnXUwBD4FtcfAUooghHKyKBirBvoXnmkVWgW4ni25iKpN8k1aJF5XYU3",
  "key30": "jY7ZZp3rycvxF8UjHWBYeQ9kCdCcK83e1eQxNpWyJWyQjvwUZL3ETwyUTpK1xHoRvwLi5Eao19F7g8N1zggYAhB",
  "key31": "38y4a1ZjURTqej1JXcMcJbp4Gn2SmMvyN481oSTrEzE65ZNrEsx9uy2mYvr5vugwt22EBPfnN4X2NaVJHYCVYdAn",
  "key32": "5WN5DirRBpSnCHrvFjUqYDwyYJ1R1m3FzjTHSnhUUvWdSuyWEnFxJAZGDtmfdpAZxnKA9CCgbfaoL4awjde8YyK3",
  "key33": "4S6wWTZ9HeoKJZYvyJkg2LzD7NxAB47ZSg8H3XSUxMzpE1niM6rQFEH2HXsQSaUooMJ39n6f6QFG6AnPiDyYtf6A",
  "key34": "648AwVUPD856KahvmsnLhRgB1YVjV1jHX6tLL67R2VeF9gL3PdgJeuiraBRHhbY4f3chFQVqwxbxe4mfitEcUXsE",
  "key35": "3ysivJUffQAV9Y1GZb5i4W4DZCv4j5u8533M5JSRuiXKbq9aWLcar5t1TfqDZ9KZnRbuz8YfsV969HLz1JoRK6zs",
  "key36": "4E51EzRxm3c3LUyFge8emJ2jp6J3bbR3pMFXQ7zsztR56CpRWQfyxEse4dHF2bLa9d1kyqabh5wB8trbktX5vh6s",
  "key37": "epHfJRGh2s6gM7VJ7EzmF2iHH7v7GrHMLJLDpGWkYfPfS8tqKjdGLALTx4pQbHSPXRyGFGXp6oc2onyfQivKXsw",
  "key38": "i4gpDXpqAo3nkY8J62X5YXA1kZCLoXYpLZMSBB1iEGz8XSuruHsJwZ5PAmYVm34fRjcJfWNQziEBAD5CQRj1e5E",
  "key39": "kujzBHX2MvZCGJbLmgj6HH9S9JmGp4vMbM8G28ySYnNtCXG1qkxLV4mhoBZzB3mSusToQ3SY9tuwZPD1W8dJb3L",
  "key40": "XE1AHNAcyRtgyJthFs8Mj7wBCa23qC8ZCatZDB3XnX5yFUWSyZSgd9iJQ54JRWN5vpfpM7XRcnmciSV8x9muoKF",
  "key41": "2qMq4yzmawRBd3takdEK1g22xaccYEBSEQvf9AgA9cqbUMx8Fexyxm4auNi1sfMeQUFw8mDCC99bm3nBv9EbWvYW"
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
