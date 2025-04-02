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
    "2odfb25mD7Q8WW9c7riPW2J8PyBJJooTyQm5QSRWBWSRFZKrMpaFLCopdgAKPcFmTGkM8q3eLEve1ZC3J4kPBdUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSofx1mBiXtewMg3UY5W7oXhK4CeV4eZfmK8afS4XNW43vD2ycC7WqCTew3fk8wrY837iFj6x8MwnCcMCzaMa8u",
  "key1": "5xGEbDPhSiHVj3qFiZjvp5t2Lw8XhqELBrhtpqeNS7gvvcgNGY8Q5KBrb3EJDP5ff3qX2CvukjjjXSR4J6QxnyTt",
  "key2": "ZzfwdwLPheXehhuUcPeQZhU96218SRbxXNEs7C3Rq3g4zBDXaerUGEzeNwDe4jZojFhnxvAvQ5zjW5tZddEyoHh",
  "key3": "2ReSW2kqtCbU3dyhUtfqeCfzGwfUehpRN5EhKC6YhZkaTBFYtVG6hvok3MJpdmDYq2rggW4o7FprCE23YsoEAPLM",
  "key4": "3VB3Lr8r8Jw97DFopprHc1jPjjoLpXK69B4SMJnWV1APuisyE4aGL9ugYtzFZPVtKwsGxNJcUuHRHAaHtyaVnPFd",
  "key5": "3W5KXS2W8ikQzpz8A17g3AcAZcETXNbPSURX3HuG9HdAg2AozN6bBbYPCjnNHmoCH6kigeoE4cnudFRaafWLBJFu",
  "key6": "4ezV8esvAamAcoVpxHxCQMGzHEo6C7Hgh3ZKr1upB8dy8cATdd8fvDqzrTfVpjFc1mDU2Dt66346MbHDBrMZFVhh",
  "key7": "32kyFrDTMxxjPUUpVPT7cbXPPdUDoNQTLyXrTNbekNyYQ8xFqhYKzGgXerzStNpVDDr8p6VGThtQWK9v2V9NdBLR",
  "key8": "528ZmTt8BGK1c6Ry4M7yBNtrCKqyqQzmRu2qnEcgN1J3pw4ztyfEc7j1nDKBKqdv4ycCPz6yTXZDsLnZkskfbGvz",
  "key9": "YsT96yCsDZupJwoXdJNxWqd7nEzhAdL94R1Ckc72po3r3xFP5CMFowaCtbCyVV5nneQVQF3wpfFo6tPNNKtCCcQ",
  "key10": "4Xj1w6GrfFvDQjRaThWdPzDv5yYJzyZfeo6unRn7jaate96UU1y9gU4dcmD78TL33RDVP8SDpdK2EiL3Z8sGrK6J",
  "key11": "42hCXu5HyhQ2cktToeqxQBHPURoLrH6TMcmzcLcj8GrxM4f7wGts3EwEbrQcURpjtbWim7c3uyBXMez81ny1k4JQ",
  "key12": "3LPXafBRA339ScdXET3XFYPukSmGb3YBsnzENTGngVC6yZ7CrQTpvfWLz37e4vafJC9dn9g1NcPgq7ufNYRm3E6E",
  "key13": "cHdXoBqmvjWd4TrgEYHpwQzQ8W8nwhU8WFHcd5xzio4wb51PLiJG4CxTDPTuoZESLk2nY7NcMky9XWj1VDWuYqe",
  "key14": "62GTLmAMNeANp4K6H5YgVCcJTX11vzBfAS7DE9S4mcxGgz1Pqqis8YftNzxEN9p1ftMwduqnhjyQbuQ6CwpzGuiU",
  "key15": "2HkNcgsgxUNx7eogDjDZzsnY9f4GiXg3v3LgsoPYJSThtUQymfFRMRBKvrc3CRdz9PaaRtngQpDe4PMMbbu1t1QC",
  "key16": "4kt9bB2UqRSRTRBHRj3kvUaqzoPpgrWwX3cWdotxfNqy9cPaBx7YXMe6sL3DWpy78Cgv3HVeCDEYZTvFjo76Rsvh",
  "key17": "3sV6WBSJbiSAaqvSbGxjrj4u2PnVxWWsitTbDc4oa43Xvv3yTmG6Z6RwuqCNE5q7AW5XTjHrWNthvRu35vLdrqe4",
  "key18": "31EZvJjbs1JR5Fpm11zqSJ2c493mvCukSyQwpg2xCDVR7djsEqRstQPnUx5qzX5MtJTKidoir5LyHgEmqJ5vBac",
  "key19": "49fN1fp1sKU1PaTu983zQWCaVizvmUQLGnc7p1UEZ8USEN2csPftte8YbxePN8axUcDdFXSNuoLeCT74Cb3m9uo1",
  "key20": "pxm11M83UNTzK83Rz28wicbbJRwdA5pcGEtzfb5PZ6g3ZCsyf6bTrogxR17v8a4EskeWgspkF8PqWxFheLLEDU6",
  "key21": "4K4rxFJK6KMUF1fER1i4YLMG3bLb5ENcfDFK2Rpjw2kGNHGbodrgjxQjcKRaFBuarR69FHaqH1h9JoM3Hhd7rs7x",
  "key22": "5QmysSUkNxV96VfMSn6UKM33uob21TG7BDUmQVwjCMSdZ33JSi3oTgZEfLVSqRrotyZdwXj7nEKJyBw36FFbvDyh",
  "key23": "3fUeGZfSppYdBFxfQvyeSKDMjYfmUChV2FffLF7UjZHUp2Qo3PFwmxpZs4o5EjJBeDwyPtfHpFUxjzJ78tFrVrS5",
  "key24": "RFL6REVTn6JNHDEShQvcvckTrVA9v2ckU1sAtKpfCh4CmniRsd6fBis62S93csFMukXc1UJ5vC8ue3XwWMfJt2R",
  "key25": "5wPgNqqzbkXVj5pQ3rUCP5fF7jSr1XRGY5RnmsF1nvhTavnnP6enNrh528NrCWRZauTRA5DB45Wq4Eyzk6m41CDm",
  "key26": "2vvyor75ivG2YNNGSm6Dc8Tpue6WGjPezaHmVvx1b52nae4ZbKVNbEyp6PTWx3tc95acGEgtUf8XNksmmmA5e2NB",
  "key27": "48wUmUtG9eK1DvdH3tC2ZxFTvXwv3R8648reiDHtCQpyrZZuiDAqHUR5oCRqZSjyA4vv8mHgVFWWEQKoXdxn3oqp",
  "key28": "3FMKnL3zVNwRzwqP8XRGNT1w4NkFRj7u78DWKwQmkQKZ8P9pQeNwCawL6rmEtWZiHgUBvkibmxNdQiEvkvrfcCne",
  "key29": "4aBat3FcLg11ppWQMFtvrsmgZoNUfuMfLZdj1rz1AcuyVM2TCdpvFnYok9sUzzG9e1WHaUHqJVgf8TgnPJpPSKcB",
  "key30": "39smA6pgaQNKhnyaQdHNaEkHzbd39xwZL7eYXGXbdNtCeiQTuA7Jm2bzyyMKF7MGgNkuGGXtLzNY5UiRm6Yxy3QT",
  "key31": "5sxKLmEo4PigBXMFtaqdPB5XRauaWfJATAhcVwH97YAwK7gqJqAoK9t1AoqaKt3SNUworwfQ1cjMon47JsVwf7os",
  "key32": "2AH1TmXyChjFjNd3gAH9rPqAcwYzdhbs8jQvLuC1QjqRnaNKqMLHwv2qwKp9htzaLoGx4x5vBUwozoqBBHjU2poY"
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
