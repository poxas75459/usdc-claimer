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
    "5Spdw36wmmaNgF7B9Fb1pTbj6QrPC5yEGa2exTduHwQcvtBiUJhMS5Mm2khvMpFWTR34NUZGEjjfortxuDBee3dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PD9dyhN5pRDgfxuRj2RyPu7JFA7iPPYM6notcELywJNzStJ2JzW6LdcUctSrV3yGxyq6D11uYqYDa7vAebiFdJd",
  "key1": "4dVWpULrmkjiJ9hxVJVznADhUYoR9JUNb22iFLAr28sSixJ7KixpcyNRp7vnz8HiQwWiNGS6ekx3vMA2pf8h2noa",
  "key2": "3EtbVorkhatgonwrNxbBY7wqbjhxceYMUmHZ8KjSY1PQSGSCcPsPZw5tFgJVBJLwCGBcxyMzy5XeG4Bm9doMUZRb",
  "key3": "2Usj3fQfgBcRpdmv5zkpzEJY2V3ht5ACZ4jLJu637o8UMZvS5ZDBrgzMXfdHHdvaY4iGmPn2gWAcmWknyBzTB1sz",
  "key4": "3e3twPZSV9WXNK2MNtesD1wB3XFTooc4M4oZair4Vdq8V3z4cjS3j1VxMvaKjo62mdETq7sEQmWh47KXr1cUAdVm",
  "key5": "euMHhU9A8krSDgNbn223yQUuUgtc9ZEXi4yDDHK1NswF4ZT4Tm4dSYLBUYfpHMeY2juApCQMsezeyWgd3QSdYg6",
  "key6": "5dQ6WEhF1yEjKvAPEd4uVagHQrkTpTmPE3yGb2GU9ztfqVko6HD2cnBbr7XCsRRAxQPPcJTg1TfN9Xde1wG66ceU",
  "key7": "2VQnqNMgYXdnb5b5YKrU647HS3yTLXkxh4zNCEVbKThHWTzxu77adxAf13oUdTZo5wEw6G7W6S4chDFPEz717faz",
  "key8": "3NiRpWXsmZ6YUvWv49RwKBms43AbMYoZ2ZriURAFbfKsfKeUkHcebngav9AmsDnYLRguxfFC2DDy3DSkgFHj6m2g",
  "key9": "5Xd8CV2F913c2WcabSS3P3JoSBb5RaL5awpdu28XFPQj4HwqGK6HjzgxzT7DxCg5oQYX3ckzt8KoGMK1tUVtFT5S",
  "key10": "gYXMT5PrJZAMXBV8APNYQRuJ7iaHKuCsvfrxQXGuUgc9B6p2LiRHHiHm3P7woteVxFPZRwqfNe8kwE8gWBBCoA1",
  "key11": "25V8LT5XXUKagnXD7rLv3FvhrqTXRGzXxX6WW8jJBXTqXLQzzb7fLP2jg6eL2jKMQ53VoAwM9RGL4STHQftBxxra",
  "key12": "hKh7NAujW1Z8WNFpVUM3a8t1uA2jHTsspEthLRrozt4mtXzgT6u3sXmm7ceBcDgWPaDma2fgQKBvm2NkvYKQ11P",
  "key13": "2xuqT3txtwPHA56jdgmtborm7fA3aJNrk2gg7VYuC8FAFNiwH4AwfvPgfeUsTXUrKHMRBgU9QDY4c2xV5PixJzZZ",
  "key14": "3VqgJMeyCBMVLfhshUm7i8YxpiWd4w7uhgD66tQ2LCvqBnYzCYJfbTp33mPToz7STNYbvGedgBgfi6yd7HpqKzKL",
  "key15": "5okqnFEKSQRCsvzXmp5Ki2QQjeqMYXe6PdFf2WuDwqC5d8Ggorw6mA87KREoCDuEFdVkjG5e99hVUdHXVAFJv3Ja",
  "key16": "4awj9PdgzFwmxinn1Swb4ixeW9MSxTNja48cqNB67twHVgUfPkDUELNoRXjsHgp6BxaBkDR11aHegbuRnhYbzKEv",
  "key17": "AJuHhNKNDcLVVK6rGMGhrvcB8D8g5JG7DGXvgqqiiqgNKpvnETuodjsafHWwbpN4kymaEaftxgZdpQFy8Vgsxz7",
  "key18": "2EANvidF7LRj1VgmMoKgaL5a9aDTjgGArWXfGeeLJYBHfUSteoMKww2cL3pPnaZ6zSPTf6oKd21CPKgxQRGT5S2p",
  "key19": "3JsBLwgYiJTexEzWyt1Xm6bd23dBmYvKEAsM2q6JrpfURFixBezDFcapnw6UJPACmyPuDyFQd2SnQK6xP5qZN6hK",
  "key20": "63pYMtDeRyvizNAdhjq3kXX3A6dacY5bPZwAp9qfCo7wp5KZ3PaMUbyAEdSjwQVWpFKSS35ZvEMJj5UdVtsM1cHP",
  "key21": "2CtTEk2x8B2dnwAeRP6nAwVGR5N5DeERxX56qATXrunF5RDC3dofnyGsjVeL45pEgWhK986VHLkG4qqsfqjxzczn",
  "key22": "3G5HbrSB5qFVBzMz2axKAUj7BAoexvokdV5wPwXTWUDSLJ6pAW3gJsDtpNie2VoFFfEY38XEvAVJwPC1AVZTwzE5",
  "key23": "7JwJQqcSigyCvacyH73LrxQEYgSFk1vPmfV8Bgv4i2zfYaXExi9S4xEyRTqjgcWaxGKSHZqiWW2MH2K9pWeECyY",
  "key24": "5bTZt3dAXyJgjjHvqxjmJ2KBuJSpWYW8VtByDoeZRqgdjs8j9QU5fBeHaqnSbiFpEgEgzchhySDW62EMkYZrtGFN",
  "key25": "63oFtnXmABkeQ8Rbp7AKTjpLqu35dK32hSu868jXg8az6sAzbPxpbmHBsADGFxWBPpD3Vz7QD2CasTVaJsgZ4g9k",
  "key26": "4gQFuNGMkna9WSSPxCSYgoSdirrygfmYfUBVrtuxgYUQjhxTo6Z15QhGw9W7bm8TsUtJZGk81fojVgvbZSpBPipf",
  "key27": "82mhkbx2su1eFTGqXBsoA7VHqe5wexJB8Cv6AYf5cVTajhatnaqm5zQEZAyyBeCicejfzPGVmrkt7eZyVJZyF2s",
  "key28": "5k7d1vfesENB8fUf1HULBmFhfPAp8rZEr4ikprxcJtDGHcT8LPf5F9RRuNtASWMvVpXh3SxXN7ijnuDv7xGMME5v"
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
