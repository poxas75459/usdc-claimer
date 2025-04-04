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
    "oS4hTTZgCh5ThFTqKJVFhcfb8ShSfQd4Xq2SJdnPuGQCC6TQEzrbEPZnTqnc6ehFQ6nNFx8WpBm8QxCVDFPRXgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u5VoLKNB4L2FXHvYF6UiUmpEwHVVjAHwoNvxFAmrR6wvb6szYr63XkZmV4mu66cXCFRUVvmkd2Cdd9HGnjD7Fpv",
  "key1": "3gLFUZEPYBiPDckyCnxSWDb8Su9PYbbSh38rJYE5xFVUGSFnfGKGrk4qrfDtoJBTwVtXDBZkkEk2iWPps8pj7a4J",
  "key2": "qg46HBenAQ2ErFMf79ao5UVrttDEZvBU8DVdup6FsrbVKnKWh3HCUDVstEHFLFqGZNUd1SjToAs5gK5gkZY5oha",
  "key3": "c9QJZE8n7DHR7Ri5U6w2JdNCiSeCxoAxS6BRgRJhPADfVLP379nzbRTma1mF9tVtGxFTKVLsKrnrVin975Ev8MP",
  "key4": "1HdHsi33GzWXSweCr2a374TBENyy3D8bKV3rMaMyLLLB5TUqoSbEyhFPA1QM1rQJqkh9BAnZi1bs1vC13XM8tYJ",
  "key5": "4o6pogPWE6t363v7ZNvjhgJWvn5FUWJY8F6Fdd8vD9LjmkRQf1U3CG3EqhUTEeRN1TqMQADV1SvEt23Dkb9hkmYA",
  "key6": "CffTNcJQ54hz8kC1BYnNrJMXH2xLM3MvFWF39bjt8K1TKWXUTjkgg7B9HvTFAER5VeeUxwvVry8Zmm435trseYC",
  "key7": "5JrBabkrK6uczrgAjxKmeGYte9D1c7gpLe5A3i63nyU6eyNgbVqUN3gMBBDJ2kEeySr2s36JWXfzAPkxTnWsU6Ss",
  "key8": "2KKqcPrn2VrTDshjf2vy8pTec2YYUnuXVGw5cFP3Mcsbd1o5NML5RUaoVcWVSdk7atLkwmyPMz2CoCWE32hjGxQK",
  "key9": "4UDU1NntKuk9ZmftsMappUBY8jeSEiyqoHawTN5YV7UDdZsHGzkmRv1nXgY6baLPeyQqdPHy2tZSzzUysQhPL9rq",
  "key10": "C9MzdPiJVXMkWV2RDgRJJq43kd3aoMDAivdMQw7vnMsSoaw1wMrV6f59bDLfzvtLHMYgKLH14mobQeojsoTGp6i",
  "key11": "494EWfnweXpGd1t8SyWRYXPUK6KL1F97Fnc1BAYe1byTnw1Y571tcc7HhCbaoYh24LBwhUt1gqmoi1WyHPRh77AL",
  "key12": "4zGQ9nf78GWP2jjwL92gEzV6sEDy5wgMn9xzTiKrjUCVB6keHUGyr6xB3y9gGqAQQ26aWRkHABKwH8ihBHtqKcfZ",
  "key13": "3M96rSUZNqpf9J1ZaF8ogMd1FjmbJuEP7CqtGf2fwwjNhtLnyUE1BMGuCkyFxSbCRbBZFueUem1A73kAuZ238Xqr",
  "key14": "5pevzKoPk4uya39ET67wjBNxD6arVsN3CeVurB6ajbs4zoM7XkFCERL7qp1HbwfcAnUXEyyzpnHvktsRTa2UZ7qu",
  "key15": "4jXMCbTv9TCm9rqokBVhW1utE376XydCtz4Nsz7LmfQDSHp5UKCXgduWe11D7yq2eun5bgyumPsGs3G1rtZBEMyY",
  "key16": "YhLfJ8DNe9iBAke2nWv5SzSqbKZfDzWryrN4e9c914fLPHzLJtGQfgPX4VpekKzCucztA6zhgHMmkF3f64NDkEV",
  "key17": "hyJVZXTn5ydtF1fKFuyeBsFzxygmRnpNKkjwe3mWzhh3iFXfEwph1tKihtsYQcKnWhHVjVwHfqz2S4oZs2baV8R",
  "key18": "3n8BgyMqT3z5RRNnaBh7uf7UcCNpBvpJUGkthfhTj3dMxyYpsnbKBf9grKodsaN1y1scJiP7VnEGVBuujTBbVji",
  "key19": "63QdDeG9Xs3vCvJFBa5UaZA94mAaE8pWaFgHi4KE51NNdjqoR5ynYxPjzcWauj2HSQYVYH1CBL2reqTvPNRh59Jg",
  "key20": "59vvSBXCJ8fjRt9MPyaJ4ucMkD1ZwMbcAQF3KXshuMtz9eePg93PTC9SUomdUR73mo9B48waJfm11HgGZUyX7GvM",
  "key21": "jLYY8PWth4ireJR7mMBufKk2wGPVfRsDDmpeur4HAv3ZQmLo9S94eLutNQhuqUtT7Svz9JoRuEbjysruS4mMEPe",
  "key22": "5RtecvrKGpyS6bEeEPdYJvcx1UpTFhvEmomQGT38TCv6uLbgsAsfmCeZGDm1k6292SmoC6a6P57VPPtHMfZEE46x",
  "key23": "22YYkeRAFneYpzg62nVhmyvyN2eoEPnePgCSZWAmeACWiFKzwxu4DNyDx2nPk1GF5SpYsxyMBv5Cese8xaAfw72d",
  "key24": "vvXSa8aDjtVo5r5jtENw3wyYeJLnXRKL13Y2fvh1TKevf2dofdKPfzs6qqJndGThmS4hTp3Y8F2BNWkPnd3aXoc",
  "key25": "53ifLNzjANNUbsZBpinCcKUdc8XmkSiNJFub371kcE3ononBNpJz3TKcbtXDcprDj4xFf94xNhJCmCYRcv2qTwho",
  "key26": "3fePHUi54rYqvM5dtVgxUH4tra9Mm8fRRazsVSei59T8J5tx4PTr6VMbHySWMELxNTDqYLWxU3yXrPx9YYX2i9Ax",
  "key27": "2WqVJhTiacoxQ6q4QKugsvTTbGvszCi3bYpV49UX4RDLWHKtcjnr6YYsBUNrjqqmti5jcsgeJuqN65pGwEeqyvJy"
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
