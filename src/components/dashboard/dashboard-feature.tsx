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
    "3WxY33ejvWUgLN87URjzYrsPnj1b1PoFe4xjZsmQR9v2XyqnAJdPLxZh4nqWdAPwi4R9MeCygurMJ9yABptref9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p8GDQnNM2iFt3dxY3J5CtRyY3WmwXBCdPHyTSWGJNpxViN8NpDCoZfRHqCiLVhEAdCeGSsqANenqGMYAzNRhct2",
  "key1": "4pNiVGEBrEoCvzuXBfESS8nDxqjzGeSBgB4PEYxCqeQhYm8EmJ7KgNuedWgrqQASMMVC8rL49JL98vKM1Ds3xriD",
  "key2": "52UQRCGQKnoog3pyLLXmVTWkePQgmLK11pYpktFdCJ9HC73nTTQVfMZes6wcc4MEwazhnT99axKxZwfSM8ydpK79",
  "key3": "BF9mPFLWFBUyRufeYAwS2T6nC8w1qSGgT3nwiSU9MGewJM2EsTTLDCmU9zHir78NnF9MZo5mvFfoe9LGgmkPEqY",
  "key4": "2Wx8NzofFsfY6QL11MFyM6Lr73rpP8ZgY9uwnJVCB8K8JJC5NB7JrPDVB1GkRR5SQN5K6jCks51hF1tiExpXSDef",
  "key5": "5P7PdHvCqr8Z9qAo4LcchDb1FgCp8Sx7oh94jhyEfHzw7mgRxymQhU7dZiQraJsMbCpph9C8BtGibxL5bsqRoi4d",
  "key6": "2hW3i4Gxeft6DomPS912tz2v9rMzBUeeft6zw8iTvGcXv6XspgqrrPe1H2Fk5Z6Y24tUGeX5ZEMqSy1F7BydgEgE",
  "key7": "41ACKreNTPztg7SFS8RJHNCaqj1FVK2b9XroQFf2Jkc52zzeAcVRDmDX7s3ir3oq6FeFJexfzqwGCfdddDtmne29",
  "key8": "3uhDbU6AcYmw3coh1WFHYeFe5LV21BTQLHZK8gNFNtFaC3xyXQoPGJxmDBKJzGMUh5gVKipiKmkFKYXS3fpNkpur",
  "key9": "YSA1Lfzqbr5vGhXCd3pEQDFJWbMKomr7iwFmuwFwJJELks7gMHScvYhRfR3MYffhUUJ6kxgEcZ6f1FeL72Uj3F9",
  "key10": "5YbNBbptWoBnKYLh3fsz8Swh9K2zgdQKXMZZdusLkuKAyCydfTawHpo9RKM1K9yhuTJ2fTpt2DS5u2ev8CCjemCA",
  "key11": "5iv5LFLCqQDKL7PbwBpwRuxe1ZgrkcJRbPZrySWEwu31VYffexbppnVBX8bqb8V6GXLM9AVKf9sfWGrpfMcgTFjP",
  "key12": "2S3v8Ce2xT8db3JxbKdoNtZvJrCmTXkr5HNxSsCZ9uyrQAQYTcqbhe825ca48cKeKTyE3EPuDjePivMy88uqVyY5",
  "key13": "2pBRwDnQJB2dGmwPnqRTa3afy5EkwMENCxdxpARH8YapDXak3TfSWbYmZM3EC83ST8vfiZCZatuAnaZHQafCnFwV",
  "key14": "2ZLomRPT9tc9eRzSwKwdSsUMu5cjwopb7ssC6M6A1prtpZRm6b7QABS5h7Q1osshscPdim6RKueWTUuS2PTqEHTm",
  "key15": "4vbhb1TB3itZXvJxNaTb46vuRBFS592nviPRMBQc8KMKpN3aK5etuX3dFj5JRC45RjvoJmXhKs89TNYtQRu1FNxW",
  "key16": "42Wph6aNFMWbt2bFGA7crUnsQKwbvVU9TQF2VGU2FUAedfykotLxF6UFUUL6JeEcy1xnK8ztYk9wgYeH1bHoLtRQ",
  "key17": "4QHQ3DmEe1EkqKzBgEkoZjdWMdMuHcEcu1XtFgHWusoyPkKyXmd9BjgTio8TFC74nV6LyJuQpLxMy5XcUxPFYECJ",
  "key18": "3CGe23KevEq2qJQTHpTEbhagHf9yyaQQYmWeExxFCLe1jzky3G8SR1E9cw4H2tK9iMPi9eevqZ4Xq8ZhYrLSrCwQ",
  "key19": "ctMHdjx5TsTuYoeW5X1DhtdQLBuVtuiJ1mLTYrXjaEdnNppZjXixDUuk6m5Shh97baYgDqqpisjcPAtQjQjYvji",
  "key20": "cyUMVb3F75s3zqc3ehyuf49f8BW6Prg9y6mnm5nu5VZLELLMqAMuwhjwJaQF4wDypR1CJ4dVjKSw58BYryM1VwJ",
  "key21": "4RabFeocRsYp8AkD9Nkx96JSUXPTkQafxMMxd1BgErxZoFjLiDpS2Q4KtXdyQtrELrGyvMpqhLyEMR5Bw5WUAT4K",
  "key22": "jDPazYk9Vu29RErNKmvAJyzfZukKw4pUmb3WeqSMb6x5jDkeFkHv9rSH6y6AEUGa6u3LuXrmp9v1crCTN83pZSH",
  "key23": "625bB7rsVhmcZMzAYsw8W8qzdPcuxjn8cSnnywEihkApi8GYjMkkfT8uJGgTvr8CkuzqeBENJxwMdEZGgrgWQp7Z",
  "key24": "2cc2R95YsgNSxzdKghMHSAC1BMXnFcKiMa2Ja2zjywH6ezFbSuAw4435MXqPiBktNWbA52TQGYfQHDWZP3CkyJSs",
  "key25": "5NJ5NT6VrHfXrwXAYYg9hsg52fSawi47jGSFVsDEwsb47UERYbcy3rFtXn4mMgdbFFZkqGQC8rPPvW3ssYLSSBUF",
  "key26": "28AkecUJBokKhozy4MJNFjTnp7P4PGBWjLM3h3f2qDMjSTcAapTd9DLYRmCSue9LiD7CA3RKxrc6kCM4X4zJR5nM",
  "key27": "5159wqRSahtpxfZxQ7Sg6XhzNePsBAcDkuL8f3qdEnsTf1bSoBisANug3RbMhCCVkDG3nfGf1PHeV29PntdmLoRw",
  "key28": "8pQydVo91FbnCq2aU6UzxLRpKyfrPrGPqGULfvXBgVnTxesdTKN73LKYYp3im22si6T4wUUBdDYzpaybUEUwHUA",
  "key29": "pT4pEvp8nwKsSpW1YDFMwTdcR8RRdUBsrDbVTFcgRh5dUYAnpd9a86NfkETwszR3ec6qGGDWjibiFHtoyxdqfsn",
  "key30": "3TH5VsREvJJSpAQfQ5gnWY41nEk81mVVMNRCXiw1wnL5hBCz9B3UQH3fuV15MG6oA2fXDoPbmrnusJAjniX3rXon",
  "key31": "4TXApFHUXK9PfgNUtoGxtNuAkH1h5ouagxHK4t4saXWuQcvbNECZgtq6yCq8WmUynRcmvQmdaARjDDMCoQrDn1Xy",
  "key32": "3RMU5LCFPaF5tiyYZQF5gXebBmbaGWsBVqXdyh272gwg631XdhiEnKPexRHwUfnvAbfDoR3AVqdaWzeGyYLtUxsV",
  "key33": "32WWas3pbc9oDsLdSPiE8376Ng66syLdAFvrhFy6TaQ4x3wAitmgyYYYCTq6Gh9hL3137csWYJF5PHKWyEmgoVNh",
  "key34": "4Dphh3hNPdwDFn8wa8bgbgdaeoFoifxdcnbSJ5TJNqLg1G6JVGY5cccLkYEGkK1QHinLTx1oNXpjmwd31vM5Cdnr"
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
