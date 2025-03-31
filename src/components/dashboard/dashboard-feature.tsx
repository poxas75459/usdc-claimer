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
    "2rznmqNRbUe7tdgVDBFnBrEWeXx7YXRz2uYqr1AtyZeeGrjV46J5BnweRqayCJ34PkxNuLC34nwEHEt7rLhLGCz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CSRN8UuQhcPNH46KwMn9QwcJbaEY2Mrz1CymbtAyM9Sh7HiWfCzEQVxLDK8WbqibMFV1thoHGXF9AMSw9RcmF5v",
  "key1": "4HQoosxozDBiFpYyK3fFihrfj9GCK6ZAEyyyv4YBcFuTwefht6d7K9muBBU9CgSQUsyeAY5Rs9jehQJWi8khPvoq",
  "key2": "4SHzvRp7A7VsDKX7gs2dwbTopNuvY6K3ZAuDDarDQ6gnYUfKBBpKb2rRS5GGfGMf2gi7uz517MCTQQyQj4xpcvAL",
  "key3": "36EP4vMDeJWeiLgMkKZPCoxr43CUUi36DWVXtDAN64WbesMXZBWPogMsj4gTS38XuKxME5gZu7HgUJc6CWNb52Bj",
  "key4": "4B84gF15JJoaw8J6xDpMHcUgrUJAPpH6pPPWySWqcp2HqAvS1VAuK79SLHZ7CYgahmP7XpUkF8R6w62ACz3o2AYC",
  "key5": "2jmYSYjdGuzWFrvfzmD3g54Hqi2NPgWA2A4fLH3RMpRuGqBYUEA5wppJfvQR6v62wftgucK7LUEj5my1bMyUgvEN",
  "key6": "5MFwxn4WiGecpHRLs3EVujxaMRUxfS6UuxsFCmGFZDW82JXLomopJYennvFpDbxyPQQHziSHCV1VcbWafzne42ye",
  "key7": "3u15PGZFuL3CPp9uadc1Y6F8Z3NB6gqcHNbMG5Tqc2xurGP8ALXduccPWQ5brfmdFpdLrBE7SfsjT6YFPv2AvxRY",
  "key8": "2Jsuq4Jn76XHQ7nGnz4t2j6adxTYpeMbHvnuf29B1YFkMYdBwf4CdXQ3v6qE2GASoPSXfzTXhEB5B2F4cAHqa7EV",
  "key9": "2voo7yQRtugHVwDPicQsTQVswkg85NcWc6wjLhf2R3B9TiV5H71NyEUJeahgoNEfVEk25BvUbkQgCHmWJi81dWyH",
  "key10": "2mvVivwxRvfj2DAmYP15GdbnvuhcxgsR8mxwhKKrrF3V1jKHev85B9gY4URFXcFDmb3FxYb5bvZYdhHEMRPHY4su",
  "key11": "4ts1Sx1Q1Wx3VJ7FFAHwYBeUUtxsvrXiCKQWRkvjsrf7hpismsCH4SKYs1nmGL7buo8SeWWGGTd6uQ5L1u3GaMRW",
  "key12": "2EJqPWFsghTYLZ59WE9UQndGL1JzfaHyRhonsJfrTeEtHKVDquKawxbPAnE9wZd5es8QtVoZJcBZNQHy2j6JBrPQ",
  "key13": "5nYh2pmTX1tQjHhsPbf1hAFkCdHfGHGTScd2K3CoYEqEKq4vWTMpVNm5QUNh7mse2q3gVPAV4A6nC8NyexuKjJ7P",
  "key14": "3qCGbKxBNw37Q4SfByw6dkizhAkBqgYrhFcLGdbLjVyvitMDCFiKTAA16FJ1aXwSVWC5KJZ2m5qDACsMRXXLkNNx",
  "key15": "5PQm4u9DCSYYiUSWzpjp8oxB2xtSSN1uy8dvwY1jQycgiAcT8q5iskFpYUKMyWxC8XL4vwTCuAx4YCVj8az3qzkR",
  "key16": "2kTuDfpvgw1MA2ycjco1ucfQgFiuTq4U4mY9sntGu1SpwVXkXR6RfGnSUpYomEoZqc83ESC6scU94eLT67uasbE2",
  "key17": "573snzVUCn8Hnz2ujKa96njJDuC1nyq8ieWWSVFBGDnWePVbNHFsHkaJy3iiJWiXNtqyqYS1dQf7aeA5cNrSrdLG",
  "key18": "2N72KPAti53YJPJysmV9V4EtQWRRk3qj6H719sRR7fN29CUSD5uDwYV66CdhHWTsbxWsn1exshvePUd9a8G9tcLb",
  "key19": "2PrjCK5NfsGvn9UFidoVKJ2jDF3U5vpkmayrtpojS6ctYPDQbnPUUAFQVKmtQWB9Fy1KPV2LXvNNEauNX8zjPVUD",
  "key20": "mC9P6zo5qBKAx7NhNcxqwPzudvq1AbBk8E78vfBEghbqMBkqXt9tU1AdAV6sq9JdN7zDDaLbvALBuDUtkm3Ex3D",
  "key21": "SJXeWEbGn71QaJ4yemhuFXuqAa5GpcZZbESHmy7773Hav9ZW2DhBhds7e3Q273eDvFmXoJfuCRqW3qGqUnWTRhS",
  "key22": "2ns3YPRB4wd84QQLXiRSevm5aJa5PNfVqJqbi5EM6s2xKa6hQUS19WSJt1jAyiXPHRqnNFa3QusAUivUwYnzNm1Y",
  "key23": "2MRwx9MmQ2g9fHr3KCg7GnufgvynxegrenZNHgu6QS2Ast6ZStXMQr66qLSKjcMssGzXDYWhXDBNb2USAcgGvNtP",
  "key24": "57hk7QfkTqaZRqF8uRFA26z4yxfqC9jTiHgE8ATUkzmu9rbAyBTUphjsYMvYjSS4Q9wQxn1S9Kbwyrv4pcHNkxkf",
  "key25": "ix8oCWHPSuD5his7mfaDBuCHq5b5ZpBZPbXNMpzMYwgkqkc7dmCAsNnwMVSzDyPQbybNd835MRfkE8b23NTLE8j",
  "key26": "2HTVVUy3oNSr8EnbrdZ59pKank7FfyDEqGwaq2gGiKvjH2LiquiK6aaJk65BbePXKkKhbgwBB5AN4FAt9v3r7Hzu",
  "key27": "4xf8ttYkTrR1uiAdLoRgs6BH7G6CqztSCs5wSLCDvRSkdzkm4EdjZPXFLk3wwcVR4xK63etENSvofeeTNdDsJp99",
  "key28": "5WrGgZmsJ8PsLVpusNz4rsY83KtrRyU6vgQwim3eacigZ7z5x8WBSTGUzf6rFHV18NHnmjXfo81v1X6ygtFi6ePR",
  "key29": "4YfMzMiN7VXf7GkEkJNNgP4f8dKPiL2ibu35LW4tknhQEf2ms7xh2b8kSZ4BvYdGcAofme5iKkhevoUsvu7sf57r",
  "key30": "5g6vKMvdTdh3AWekoCK5b8gQxc5z32bx91qTKkswiHYNTufAvk6X2NnY2DaEc5Jf544Es1bxckSaQ8euMEdGv4uV",
  "key31": "3Vr15cztnQEC1grJ42KUaeFfP63PnNaA3chCpGQvMHXR8LxcQtdj6dN9uf4rWzqzCD6HA8irKPfcPr6pfuLbeb8j",
  "key32": "4Gr9riZWiHWFYzJeqxmH64Ng3g9bsXqLNaMjXQB71bpXXwvDQYB5gTcstZLyBujmVLay4uQWirdfzpKnxrfCtQpk",
  "key33": "4DXfDPfjBJAC7VnthhZ7tHahf5z6mEB6eTHwju3dacP6NUXg3s3uk5M19SpWpbRvdjJWjmAKm5ynpYV4XNrAuMVW",
  "key34": "5eB7BCvh3GnEgd1KWhseL1mrHJfZ6MQPTmV7eeaYHfgXYo8f7YHeBuYgkRcSoacWYx2CjDphDKd38pmZhFWujyAF",
  "key35": "3QmnCw56rD2pLBEBhj19HiUbqEu7w5bLUvftCeMW9hnkXfSsXiB1UfkgVQ2o21ynQyNMcZQMGdW8dGsJSgKFZQya",
  "key36": "5UmwR4GEyDQ1pudxE7dYvVLP7b3yzG8BN6Rh5fMyaD7UkMFa2UfC5oo3UVguP1N3RDP3h4k1rgdyrnyARQojbGRP",
  "key37": "5FjTgkm29x5s6VrMdfm3u2S7ittr378ofzX8NJaGeHyApobF6BjA9grsbD7rdc3CNNya1Vcz9L9ijB6KA6ZvsB1r",
  "key38": "4dnLjM32fnYGVUUcA8gZsePLiAHjjaSkqi693QSifpNu28jgUPXJ5tzgDhnbteiqGGHh2QV5UmiggRvY2756aCey",
  "key39": "veAYS9Qh78S4iF3wsvygLZmFVdDztv8FoyFwXuMaew5HbGCs3AY1bKTB6ai9hcvUWz52eijqf874upSF6mrfFt4",
  "key40": "9QU6hUK32MNuwavJxYmaQbpatVR9ke2ueYhfgTSaU43bRQ2KESGJUSiGkSeErR5gwUn2ME4JWmeyvaoYmr7ppVr"
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
