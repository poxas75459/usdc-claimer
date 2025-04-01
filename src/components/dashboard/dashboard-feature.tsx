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
    "RPE1TgH4h2zGPTjbCqNNTw9kerjFwSXamya3y6wTzeBRgMhbUwV2RMRhW9uCEVwJk6Hmd3PQTChvAF956cmrUM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y592F5eVj5FboTUxY2VWP5htcVGw9ghFUmb2ptSeyYHuNM6RRZazaL4eJShUtwTbCBcV8PEEhz3Yw4E4UcCUHSK",
  "key1": "RFLgJe2GLkXa8nLwdhojccYc5Bac5ukEFrU7RtH42v7Fkq4jSBHwjHn4uR3zw5Du7d4Mff4ozEm2cYvXBzmxabY",
  "key2": "2fihWL9fxYDf7dGhKgFMwAMTuGuE9CsYfcY8de3zKN6HBHMVDzmxQY1zpyqjuAxGUNiKanpr2UFcUAm6ak5V4Ee2",
  "key3": "4MEnNxhtMG6ZCyaiTfsnRebWQjuCHaBk7WXV72jgLcEMWvucQT4SLURpznYX4pcmtrq24VCSfxKfX2NkSu5uSGjr",
  "key4": "2FQyE5v3UHGZZJcExBaSebQWWFHwYQhUYB9rAf9ns5nXDTzt5D7Lhc7MJ8XY5Vv7KdcRK21M3JgLAiT7jDKGx8RA",
  "key5": "5y1iBw7eteYj4xorPt1oLZF751yWRN8YwagTsTtNhjGA6nAxywRSUbFabdTWh3VqPD4s4551mSA2SdgWtQjwVGgE",
  "key6": "5aYBiDNgorAEuTCVcTiHgUfivqdKeeLY9Ui7WkieDKu7QnRcyngpyBUY9FcHrwZGEXwdwmq9Sj1CSCFUrbDJT8mz",
  "key7": "4H7U4TeuPAfwCXuvFGGjkqksR2P6ianhXkX6BqScS1AdarUk3H7CdZFdLjdxZn8BExmM6Jipd1YsGXJnGQQGoU3V",
  "key8": "4wVwPZMoMUSboXRnQzrus9GczPdt4VASnLfj4QrWqLmTfRCUqcRANkDkh8rFvktsix3keUzZjrWVKTvatqKNPSHi",
  "key9": "5Qxst4Foz6jDnZht69FGjRXALGtsNSYxMeZbUG57MQzM7jFtYQCVfqrx91exUzWdRyFHSEWsWhRYRHJfBZwyg5T3",
  "key10": "32sL5uDYZW7D6mjvgSWApjMxcAB2Y1MewTLyg2bwkt9t4vgx53oBJ3uYXzGpNdHd9pvH1iTWc1GNMDAvuVL8RPAm",
  "key11": "4f7jBY42n9qeZXwwPmM8UJTCh5jHYNmt5EZxJ1TYttk5fsin2S61zQ5h3UNfrwjrP1KWTHB4sYwMbCtjkrsYV5M1",
  "key12": "32d3GTAoomugU6CKwG7po1JNaGASE7rQ8Vvyfd3tGRrxvWQYYoQLDc6GTdzXon2h8f7dBBoppWVsLG4BCeT9WBnJ",
  "key13": "5VikQBjnnGX2rC3sEMLrw6SbdBFZGoLTMLh2bM67ABnoqHnaBH1FjkhZfe5YAZrxYdXBzondzCghJ5fNQ9L8kD5i",
  "key14": "5TSn8m1XtYtnLQALc2fvZegNaNDzcxq3Cr33PmhY4hEx5AJeia6b59UoGSh1nJQY5jr5xtGZTFeKDfKEu9PX3Rx1",
  "key15": "hdXBBXYrbp9SDrzXY2aoDEKtxdeUxV6NiYqmsJcNv366nrdwVAMCzydwxHt1i2KpzrHcPbs3cVDSkJgVT4aCEEU",
  "key16": "5XXDJN1ghnSXedhVk8EMeo62H4BqySbHCCKxWcMSpgm89W5iwbLWxyVaxYZ62aHg6Ub6TGkUPnWkkUrNNzTKD61o",
  "key17": "5s6hjq4pBFgrjG9rP1xEjro1USMaJgs2ssFPrmLjazt7AQpC8XpKDLYhMqqUBS5ReX4ZHriKrdYqw44tDJ2qCW6i",
  "key18": "2ZzAN7jm5P3tPhtky3yGxWKASjU1QgPVVjYCVXaeyhAdZQs7hAXKytJuuqm2iSxjWaBC8ABwobErePLZsd1M8Jzg",
  "key19": "2QzsGamuVnurAiXHFg6Cds66AqeoajW6KxGF1tLQ2cDFT1oQGxqS1yfunvd4XDokQYivoL4tHeHJHUVyUp4Pq7Mn",
  "key20": "sJveQji849q8HkjZvte32fXVtXt1tcwYcSUQWm2WDvzogGgv4X3YAWQwcKi8rv7pwfB5JBbYXuJ1Wqb26sLp99S",
  "key21": "3VTaCUhFH5pnTSCbBa8KMxVnmHFNsP5a1kQxfoaUtBh3hHtwBV4rbimcftmHDNxsbtQobzrAHYoc2tXqcPKyZBSY",
  "key22": "zd8hHxijqBQUvbCFNB7jwQUTUrbtbpkt6HbMEj72Pssf9ArvxQP8syzvvd4B8sHdpwS56SRd8H6mvM28srEYzVa",
  "key23": "4Gybb1XbgbgKrjqLm8rAJyWEac12KsnjoBtSyEGB2evDCrFhGZfYEwTreEkZgmw61Nm2bGgzZ3nM6W8PTShKjrLi",
  "key24": "4GpbDUeaWsexhc72798sqdRcAK4WJUCSGSFq18fiQZy8A8miHA5SU4aGhFDyxwaQwrvUzXDyRYM6pagjB3wTAb2U",
  "key25": "2Eg3vksKvSpFHqzLHoJ8yCHJLDmMVQgtb66oJwPRbfwUUKjaHBVnEcSUs2BUPA4JsQWXZjvUJM8wwUyrbdA2kmyR",
  "key26": "61qyZqDr5qCPgvn72JaEmLNJExxuQe6WH5oMNCUSR4u3GoRG6UcEtcUSMms4QNBK7piWVacgRQTN85ZeKCrfdWiV"
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
