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
    "5dAurdEVd4Gx7N1hAknkMzPbVLC7J7CwNYWjvZJPha1Af89rAWtegdt571hn1ZFAcRsdRuPqvFDeFrbA5GtVbwe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyAmWp3sBDu8kd6oSEv5GGjnEqcEpCmXgrHovM1dKAVY8rPdrSz5XaiHn75TmAx5DVn4B73JBpJ9jGAGsjEFZSG",
  "key1": "421wEBDiDhsLtxz7KCtYEKqxsfHF7yFZpn2DtMZHQvxT9kgrmxXPYWCiFapHAXrx7pPtzMw7ws7gLcYhMpyGRVjf",
  "key2": "5avPyecVJeg8u6NpmmuowxWb5tnguTgQQ5AUzyzRE3vRPZz7SofzeMW4UCsKJyZeydfKWAZDYMRsExLEBYYMx8kd",
  "key3": "4bnzZmn22NoBTxVaWkmiXaU3aZ6XAMLDo9thNnpKAMdihTAyRggLSEL6VzSZy6GwTmM5KVYuqLj619PTJP1J7LwW",
  "key4": "3HwvxogYxxcMrhFiafCTYfXmK6Vx2G6wsKPtMTnsEnUgLBHtSdhWmFJ7wuDpehqsrPc9aWbkchSukm4WGd6616Jp",
  "key5": "24XNZQmGuhc5PVjD6Kx3tX3U1WungG4r5zLBiG5uhPoPUSY8SDsLBgGxNGGMZ3A4TUwksJrScyHDrispbgwCBRwG",
  "key6": "4EYUe4xhYf4kGrzXAoGgK16yABVAXrXTLDokJZvx6TMA2VqUkSnnanbD4UMQF6TUXBN3zRYeDdJMKauyKachwBuf",
  "key7": "5zDRb6YbJT3XdTJc1L5Zt3zJTFBRk7SpGpWVNViw8aJsMyRNT5nGjH26yG43qHZ4uQWpBh96194ibuUQ59Tekiji",
  "key8": "M9m4dCw9aNBqRncAjpC5hunFF6tqNAWm2DAEdmw99bthUySjUC5oDe1nBAzyp193ozSJN4eNcNxQnMSdwTdsawr",
  "key9": "4vX93NzgLLczfrVZs74Q67dTycDbUBz18zCbHjYwX8aSuZ4A7q1ZBw1njAkKGuRWRJncTUw9yc3aqbPwzCfFA2Pt",
  "key10": "2Godni2cQ67Q5KA43jTNSu6qsbPHY8pXZ8PYDERuRCtChXpUaU6ft3qWfSgKH7PHjuycCUA2qkBNJfutBBAh2jZo",
  "key11": "5RA6q8gNBkWJqhbZ73P43h43DHLCJiXDnyvAedr4Yqd6dPHZ1totfiiCULLUAb3bEqQqHSFKnNjZtLGfR9dxqmFz",
  "key12": "5ui72xRXdGRFwTMLn5p4dzzEKjaEm4MKGGkAXdvZ86qweZ3WGD7VpJ9cAnPsA8KTdJSAEV6xAioRT5shNFoYAsfL",
  "key13": "3XQSepZhwAF4PcZP7WJj344PUeCtf2PvShzWYCdmiH28EVYSjU8TxKG2ZTwpaUgJfzxGs8iwfXcs7sexsgDGdTTR",
  "key14": "Y57DBpCoGfbLPMCxvfhGL99uHSQjkiRC1KRmPfra5LV4pYmXFaekC14iJY37d4rxHWTsrsL5apagHAvxrSeQx4f",
  "key15": "5K5Nki4868YFhaDLmmSV5h74toCHpWDg3ZdTBAks59N5vnb71QgAAiyAJauBEXi93BzmWJCuB1L6uLYukjkpognn",
  "key16": "fq2Z65uq66mfZyuSsDQuuGtuXRfgso4b5r2JfS1aXYVDa3t8iey34pus7g354oDTGyLeE238mb1V4XWYC2JGhdi",
  "key17": "2jVopEYot67EzoJq6VNa8YvG1oREu3kVJwGQbownV5JwH2twxjDRYV5ALt2PACQNvXnpyrZRWScxL7d8ZZ48SZBc",
  "key18": "2wawSfC3Nd1wQGJ6Nh8VNhnfo2sVPkA3VPVVrtC5XJueW3PJ2xiKhYqV6p2SfHbJiGzV9Yefp4HmcKtrKzxbcVe8",
  "key19": "5aiEeLmdH63utut46jU1axqPHLo7EQaQtoDbY9V9f7duDHzym7JefUuC7ZbNkSAiWvav5DdDkPYhsbmi1mPsWDBd",
  "key20": "3GRv1euJdjviybmUXPs6vQv1Bz3ZvgGoiQYaCxg8jYHFnrjtvtAf1kUT2Xv4dtZtDkefWeG2vaZSAcLgmDebUE61",
  "key21": "5nz1x4Jojn6PJXHmFAuBWPUeAqS3tybxRjoRQ5Y99MVgfxoz8RRffRhsViVntfBF3B3sY3fE8wPVVRRwRxgn6k5n",
  "key22": "4FkaEUzg96egTswATryisYqdkKNn1LWLBkmyuEUjBdYisyqjMkMnwU9Uj6EP6h6xhSRvLR6mkkA5gAg6Ve5xMbGA",
  "key23": "2ov9kCz3UUXgZbJq5uU9TFZpFARtPsXfUvAHSUmtupptT9DMhniKSpDhoVM5ZTvF9dNSF8yNPmMLxqfyU45ApLDG",
  "key24": "5ipHJxwGtjEAzZ98SdaXs6c8fgtr7xXPgVpvLPbNb924XjuxEq7QYcSaNETovFrgXZGvvcoAM3b5TjixS1KCaqtc",
  "key25": "5vARVgmPww4oUnfFmou75AWAY3KbioPwtpYuYS9o8a4frs9N4mKjoiPwv34YprmjEV24CNzsJKxKjWGwtuTsfanD",
  "key26": "3N6qAE59CV5iZCYe5dga2WZX4UyE3HbCzBSVcqC4wLphZXBstc6xLR96XDJRv8uHREPWURfZRaDvBQr2NtHTwUwB",
  "key27": "3PdLMo41aDvzx5cXEjCKRd4PJuEqWpf3Rg1ix1ZjYzkmdBoEFMz7Uh5XjyRz4pQGAcexTgFXMUedsBpSu11vwxtH",
  "key28": "2bpsGSK9PZxoYbAQYRFcG2BwTCPJm1gcdGzcLgDQdgBg99DF3CFsU9gwEBc3RVWVD2FmRACraL4btDNv2PXd6bmK",
  "key29": "oxhjXa5nDnQJYFqDL3KzXLzUYgyP1f5YFfFTM62pmdHqqHLSqGXcogoJmTwhdyHhmyUSjREVn5shsG7B9qDmQgr",
  "key30": "5auYvF6Cb52yCd3Lhs4gKA9TPMYeDESmwFyApcBCRKUXA5MNZkzACaqwzyJZH7ezzPzdndofkpMtjUDQBvXZ8sJh",
  "key31": "TgpJ5UYffRJxTBNn1Mszvfc3DdvEtBbDTiaCSaGSAFuyewfCe8LfAPvZyGtpgC69ywa164BbFztYBaLWW7LEK9H",
  "key32": "5pWMH2k7z3iine2RFbrtho6meoSKUHhR83uZPcDdYbqtteUbkJwYvuLXq9fGeisG5CRfqXbfVFyASDoJFmEa321b"
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
