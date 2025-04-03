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
    "3YGNTRcRASjEpDpcpKRcpdZqjK9vDzVNdGdpcT8kYodEseVtYqbQZrfBLhNjSVGaS4YHsNyS8Ek7aBCRNwQ6nBb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VqiecH4Gs4BQ5VwuT24j8H2AKd5hhAkimf6r3CL2jgjMcFbw1PvNVh5rRZTRpo5A2fphhocHaZUC6VcSGJDVw33",
  "key1": "5n2zDrtuxHy94ctuuQvTPst9uiLg3RNHRSLqyCBJjaz24GGzvsTZ8daGbeNRfDRE54sFhXBKecFAs7vH62aKe4ui",
  "key2": "2UNF6BytQk8dKcirquBT53F9UCzF7bLmRGyUuAVpqRufsTFMUXgvTK1XVPSEgrqRKy8gfBNojc6TSaEYVNkHR78X",
  "key3": "2TPxSvnGkk9cXBiobDtJFdYtVBPMiyQeEw2bv628NJgPu1rdPmwChPbDkix4bb9SVjDMgu6axr9WXEtQqmxGZK7k",
  "key4": "5TrRRUZS53UZ4WNCUHuNzP9ZKXiNfkbEDHvhZyL5tZzZf4V1JwrtQdJWRYmFua2WJoKsnRucvT4bAUKwMgWTKc2Z",
  "key5": "TLKMbH4ujBhdxYCsGu9DDxkBvNWyYkZyUQYQsn3zYBq5tprv92bbDbkMGP4LWCraYG5LHAD3N8sC3NtMDK5tyXS",
  "key6": "5CXodT7U1fCyZ449xNqnXS32JZ8nuoX82ETUjUYFoEhKHSCg7C4bDBnP65npV8xZvzESgQB751k1eZaaRwwNzwDK",
  "key7": "4sXQQN31Gt4PPJEBpPDCJ2MhmYhFeuhkpdgx8DnwFBCxgbmTYgqjLVZ7R7KEAzTN9c26hRwFzNyUYoiuom9k9r6i",
  "key8": "548EcfE5jqCpU8emJnK49sJmjoXwA7UoWnxLeaoK2zTfisoh87sJgFKGMPeCh61V3FWm7bQdFNgibrUDDTS6g9Au",
  "key9": "2f1zDYC95brW6tK2bWARPwf3M3VLU6CwGbC6yGPo6WkpQbnfEaWZbBm4faCHWgQgfzzBVTsrPSdGzJrwTSLSj7yV",
  "key10": "4NbboVpyZ2YLVsfA8DkEqbhEPdmfDarM1r3LpgnidaJ9NTxhsFBA2KLK8bmN3eEnwiL6H3yovZctap6jwdCmRkjt",
  "key11": "4LcqpmnWsDhDDRoyXzzfTXSEVMm5kY3gsRftjhXWefnQ94JuUcNJf7fDospbTRK6dwKSwLwmqwQwdhWz9dH8WA6e",
  "key12": "4pGq5aiJgDh2jRpLTswgupe3cDLB1G1oAzSNReTn4jUXq7SgkHnXhNEcG1gwrQRcXraG4gs58kGRHpwCM6xYmip6",
  "key13": "3q2fE3YiN7Po8TcJhqgi9c5Yte3rMD5YZAQLvDFxFcUMp4ctmqct81tBdHDFeoQuTpBrJVK1CD88D6wtYQPJwjuJ",
  "key14": "2wY7Foqn3DXNfy9ArC9B8XdDZmj8cVBrGU3hFuWCnw7VB6zvZXEMztPVJyJFAzW9ix2fE3Za8iNZwHGTgbEubnyU",
  "key15": "3LV7mc9bqHKziYCoAdSq3jnGM79gBZAEE5faJpv3LpVTK2j52p1LrZEQpKVCdrjUBxsNREp6hcMeSMjHZjiJEYP",
  "key16": "4LZhWyQ1cfPrWLzQMALHrUHGrVKb1hk9hxSENcoq4ny32AbjWGyjboEHbYV7J3Y7y2hwG5pNgZ9kf3mEX5K3v6Wi",
  "key17": "RFxiZTkQ34GSYMnZvL8Rs1NAktUNNkX5kN7f39BE6z34CXVN7ssnydobKBQJpH6YyrFx25Pn75CaDVVv59W8GHd",
  "key18": "3HE6yU8jkcWBqbsFN5rJKg8DJLpvGCskQJGW8kxzHSetNeGGT6mLh1By22sKvgDnBiR43adBdthDtuDq9h1eoR9G",
  "key19": "WvykcejYEJHAcRNyxLPh2CGDnPGarNdFe9FKYU62Wof4WvHyb2j52gukx9T8AEbFxLqfxRADxhQHk8Uh5yGuC7T",
  "key20": "h9s8gWvxPYYPTnvJcUDGcY2jSPK7GqDjVRu8GX8StNLFPXL4kaLmMa3dx4Cy22emJLxBbRnWSJSsstVHTJoLYZG",
  "key21": "tnCRMve9e2469FDwyZEXHsAF1e4vaa2gsxUN9VatLNXmNGxum9ujc9Jhs6aWNLSEkT6tfeN7iHBq7bx53YgpmNw",
  "key22": "3v9FpjGagQ9uZDcxbEU8N9466SHY717bjf2BB1dfNse2238K4LnNzULoAxHGNjNKBibg17nyYty3vi7oNGHWCzT5",
  "key23": "3GifQqeXZn8X5yZR7en8jWyS3WR5YWejKo6xvYqjd9Vp3RQmJRA4g6dyUmPRhTjVRhtxLuuY1nehwNroVXwY4vaP",
  "key24": "NBUYT6E3Ypoi4abiJKAmkEaQpkG6YC4eEhtDc2SoRzA1vwG9Xu3fK3k7MaYFLR2nWzGiUiDvuzaDJWeF5ogv6it",
  "key25": "4zxM5QovBGJHA5kP2ywTz4hRY9NjXH63YyMctnFhnsGyVi6kfDu2YQ1tU8PkkvurQsvyo5moBDYSFdig3ip5RmbE",
  "key26": "mozvHwmrj4BDFXP6UcAQKWCftjWETgcqTfoVG2UADFEV3w2CTsWSzn7mCatw5H63BapndTgDZTABPyYqSQfHzKC",
  "key27": "3wcCDP2PMKxYGqHmoioDXU3J7b28Sq2jNCextVirwKifkGowUKi57Gb7dwgFaaVWHyRzvqMd7v4bzB9NfjuixiyW",
  "key28": "3FAhTissrKZNyQu1kmikMBtSzQJzznfZk6oyVVLzPWsSUHFMv6B3DSwYrPywHQoWDn6iaoqrhAKeexJcvKebZMtf",
  "key29": "21KDEXKQ4CWtRX3c54MVWVcVoSu2szzYQs3bWrT8ekp28muDWBDg2pda9ZVHJ8W3LWuoQUvAAM1zo22JS9kDMjyu",
  "key30": "662A4h7FCrodA9hUxQ77F8n3TH1FWz2db1ddD7vLMoS7UtsJyKRQZnbLn1JxEhxqfXGKvhmrDJWKTR3W6syky2cS",
  "key31": "8euUR3ucgMdMeeq9qVzar8GvPRH4HDnw9VBqko8Cb9iWctg4fGhrHdcR5XdG3iYWznz1DKgK7sSVoZcAoYYHxmi",
  "key32": "4hScX26Jad91AmSzat8vs7pffj6MGUvYQRhQX52CK23cgHA5KdTLwT7s6PjiE7fsrFvpx6bdzLmqvDPhE2n7N4kR",
  "key33": "AkJB6qttcbEGEhQVPoSBfPdd7qZnFnbnbBv5PfBHQLmgQPFMZ8K7AhuUizjPoikuCR9o9Nw6va1yndKvh4NpNgx",
  "key34": "mDBPxqaAzLV72HK73zcUuDFfkaFh5WKT21jagwAUwsED82dRDCJ2dvczbqnqjz6Zrf2zskpFTqLdazvGHXCp11Q",
  "key35": "PJsXypGn2tsSNULqQiJ6BYmtQtwEPJwdBgyL29UCn4HkLSX13b1joC4DrQA7ALSU834rnKe8idKk5z7uSPYJmSu",
  "key36": "4E3cCMP9XLWfJJAoqLYnUNMtztSmrtzwBz5hobxTLkCiob8nWz1DojbaRUXMvrjkzjxFPnPyzvQPannXoBbJ2cmF",
  "key37": "DDe7NYq2dZMc9saGGMCoPc4hjeBdJVqikkc4Mi1YeW1S6YX2z2mGQ1Rbv6M42P5HyCSkf6jbY1xfcnASNiCmx7r",
  "key38": "Ty3nEdpxAcvXCf82PD6i3pgETL9izbXaVAKMy2tBYWmcULgBkx3WZUKTSmGx52tZgW6gsCLUUmWJnuBKAfAFzf6"
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
