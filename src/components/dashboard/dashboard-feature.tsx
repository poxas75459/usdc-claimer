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
    "2s3aGvrF9UuY7DhFh3o2LpZ2quuGGGDSY73P65UL1qX8P9nuwATVbEFzsdGAze1hXsEEoEJS5pt9xSbMs4f9vL6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNmoKJXFdNA5YaDzZvTzdEwTwirFv23KYnXRLjSiNcBD3YEkr8dMHtqzqzEg1Rcrt5bkeaemR6uEMF1acgHcSpS",
  "key1": "ij1yotNy7wyjk8aKy4FhYZajWmXe1dQwxcsFScpAzWcCrbdEBLjVVM9LB2eBVkR2fc5Z2WBc9DxR9sDxJ1PNnmw",
  "key2": "5Wp8on8NorASA4vGEspuPbaafxTLztMP3YBahUhReRtjJM7uT7tm1owoc28N8vVEzb7dzBRjHdbZhyqvLjdvdYVJ",
  "key3": "2WJW6X2n1hhkoTJjPrSJtmiwTsTmpP3wJcpukUwQ5VJJjqJm9o8BoUgUv2YDhQaFatpFBNvmNYA8cMwAAdZztpSN",
  "key4": "4YFtyu3ALCY3xRGxsXQthhnd7Qy1NweV8LacU8MssBmMQQN3BaFFSEE2aW9CjSDy3ryP6R77VtQnwqENaCjxVWrg",
  "key5": "2vnL47G56rJxFy1LmESZzeZw9Mfj1MqqzoGGfzU94QwzY87oH85ugiDG9xuePrWyNR1BV3hks5tU4XbqtGanekfv",
  "key6": "4PmuKb9ADXVdNo94yAUqhFoSbCHMr1zsgPGiFG44viRoZJwXozpEurnpnC5DmFe7zpTKEJi9d64gZQ8HhcN4yKBL",
  "key7": "4iHayAwXKEB9S8bD7oTcNR9S4xfzXKiH3KC4M54fnbBPsCaVP8ynsqvwBMbZkeDMnzFaeZcpJNPpybwL3PQbLVnj",
  "key8": "63yTzBCZdHXAujm4qvMVzN5PVUdzFKrLTGEP4XYw2ygmJSTsFzWwHgtYzpaTLSrpCtp6QhNGmynrt84QmRLSVCj5",
  "key9": "29Nz78VLMVuCADeFij1Fq1mK2iWLBNFJZuLNUyvsmJkbeQ8T4hsU45SsovdZmEfqWjtudqEyCPdGMLL8maAnK4DA",
  "key10": "5c1E29thPLGtCM2nmyGzTuRrds9fcxnCADBmyXfBGW6gNBqnZxdSVTwjqrpRHv4qvfHov4zgv8DELu9kEtmmqhGp",
  "key11": "2ELSAYQrUMHCETv967ZWn5rFJSCytXFpusRp6dXnV5CeCaiGdmiTxSrNkpxeobRmrq6c2AyYYTdbVPMvoPyzfx4C",
  "key12": "3JQCTYtXcUxvatPEidsX7QBDAPAyN4GzKro1W4cuPz85g7mUZ8ZZXwD9zN7SdPFcNeQotBTvCrV99KPWQ4qFbKSH",
  "key13": "5VBRy2GyXQd8RtQhmwRfb5gTUnfXDTBD2njvAXcebJ6SMWrJ8EkfS8K4okb9pCjN8xjUXaZX1p7MaNaHsHLhzGb4",
  "key14": "5d4XnYgQUJucCcSy6Eki9nDc8oci2afk2scgUdb9dzpjSmw4MjXjU3njgn1tzPWZEuH5C8UXiDajCkf9WdDKSsE7",
  "key15": "xFnubeJ8SV6abwCops8HgMyxgCfB9C85mxzSesWoRWS862zPYqJA9m9ox8EPVhT3rt9fRKC1FhF9BLwTVjJ7cLR",
  "key16": "5KWpDueC4sruXnrxd58EmS1LDCMY6JEyoW8VNN2koSWNY21j4btLj8tFHeZmVtyMZLTRgJPurDtXSxcJrtLFRWof",
  "key17": "47C18jtjyShnRKQGX1cyqAQnqNTEKHiw23LfNtqSTb6woSfNQgA5mh143xoeoPptEmHnnqSxWtzrfCSdDdLE6EpU",
  "key18": "5zy9Pop5dLs2qPtVdsqGnuW2BoQSD4mrEhrhBikNnVtDZH58rb8MAr3YjBR4kioDNWMLQCwatZNZDGcuvesSfDTH",
  "key19": "3u86RJN8her4PUYECZuN63oVeVQJxn9TnE4GY448ePu6XDysLgZvR9bdftNB8fegkpRYWqjcJ5Sm71zV7zeLaiqB",
  "key20": "5jTaW2zYMQwEMMe5qAqgVuVQV9wwhwVKVE3ZCiWMFV7H8YDZTc26Ev1au1CqgytWUKYXjbydFHe26WaAaLBdNF8j",
  "key21": "5tR1dVFjTPQU6G5DmYL2PzkJzSVxhLXtZbumMBKCyKH8MyHo9few9nmQVfgiFp5BN8b9W3kFhw5h5MXDycmQWWvj",
  "key22": "3i2AeFErbVxTz7cZ6vcfVq7XAgNb54xHGgHXUBQK5dvp1fn8YnSrp22jgn45qxwQX6tHHafnWH45u2vbrXsZ4L8j",
  "key23": "aFFhc5ze5u5iouvijiCYFGARSFGvtWCdu9yNQzbFXixNmA9sTzWu7wwaVVnGTzR37Xim6WaH1SvS2ohwYk8xnnW",
  "key24": "3ZCszfVkr9c28D5aRmLwBidoiNMhD52s7KYNU2AVE26FKuymb4zuqLKqE5kWZf8wENCTU4xy81VmptCRLDD6gADp",
  "key25": "2sRLWeiwhiXBVD9HCVaWT4EjwQ1Rv5P2GDiejruCM2JjSZPa4m3qh9fig6WfMD6Dz6WqzoNM1iEBhSabHoKeoi62",
  "key26": "3BS7GmziYpY56ZuKtHauiyWBbqripmfs9EVDDmtcLaDJM7csHxdYWpofn6HHvkm9zCWdzdG5KjDB9VNMTTQaeXpw"
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
