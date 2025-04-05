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
    "3SdvnMVEkencSPGkrtqjmEeDcLuojp8Z7fZpabFnT8bXiZhijpSVR2h8FzrQuHpBjtgasKyhdJ1nCHXQPUTXLg8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uvE9xztcaFb1hxZ5eMWMWszLu6RTCC4sqgrpeVp1sTHaGc6WrDgUQgHxAkusCWotpw1Npv8LKC1kiEYycp5SUc",
  "key1": "Wo6Hv3fxm6d5Td7VvKxKykfLRRPij9HcXCK4VTUJzcCWeWVGYn1knL6H2avSY6j2hJ3C6A4iARZovrtAyuWn7QL",
  "key2": "RDR2dqMNAr4bE73zTDKPHDH1hbnKxcBUcaea3wCPNRnYPdeAsaorZXjDwfrY12t5PqJeeNQLuGodaoifFXCQLeX",
  "key3": "5rdYL6FydTy1vX9dcQVR83oRGivYsXxQkZYZNr73uDPKXugnDRjF5cCQZSMAR2TNaRwgtxw9YpWgCkMaWA7phaP2",
  "key4": "5f5qGTGx7nMJKcbDxbqTDJqDhBQHLrbgyHFctnBvvaeQ7o37PegbeTBzEUfixjrT2dFAaQtwFSY8JLB9fvdgDvGM",
  "key5": "3yrD66Nw25snTSy4mEvkp5hY2sQyM7htBWVMWpVRpUFpx2PAjNmK6983e7r6yBY5MFwBKYoCiNbqRQL3R1PS1Lim",
  "key6": "2E3tHpjfJRmy5brZ1LHDeVBLRzhnKH9NhhiDo2qkSAo6GdUvrH1ntDy4VZsA4piQt72rEJbrts1o68tDdfzVzq51",
  "key7": "5qhV7d3W2k8sozdCwvcUfDm5x1riHfai1PKzJxbzEuvxvMkasKAqTGsfkouZa8CRz5WhQPgTQs9dE6CUSBVot1gj",
  "key8": "5EZTJRcYRrEcZki2ygkT3yp7G2FwWU9KQgSNqFXSEc3VY22ps1ZM9noTrszE7X88v76pPsaY46CWLkSe1D6SgGx4",
  "key9": "34w8VW95W9DgX6QWUyQWWU41p9eS3bHpDgXJnExiqz2BZ6J54hJYCEzJ38R7Vp6JhqmALzWGpijaGHk4zgQnvGyt",
  "key10": "3W1EoAB2xuGrNxi8XKCg7u6Z9gcfeAxxf5JuBazQreuanmEWtH4sazqJxze1c9JFbxVye3yCZLXaL3QKFryDafrF",
  "key11": "2h7VfV7GK8nsLMxCpUetPg7KjY1kjEu8wqiFUz88DC9rVCRSCSKY7fPV13Zph71XXy9BeNGpRFBipa8gLnuhngV1",
  "key12": "5hjXeAGNTy1MzeE9naGwMKaGPUAYqCfRynpfN4gPFswzscuPnW6jmKH3qwugn8HVDr5WB6d6JzTcNNfb3v7AXfNj",
  "key13": "3u8Hm8DmF3LZa1vqPJGJbEpKubnKwVb2a6T3JJVgMLNSgRmr7FW7NoVEUtW8i6d5qTNPnNdRWX27ZSYJYwJwt4bT",
  "key14": "2FdaWi9Q9nhJNUSiQPjb8YvR3qX1aeeoZ1thuaSBPyAm7sB6WfoLAP6S5bQU45EU7ET5wT157wme1JUdVmty1p8X",
  "key15": "35QJjKGL1cSC1jsMEcL37aQ4zb5sodeWnQmA26UVZyPUyQDntMm8PQ45BgJyr4wY31Cz4HhXb8tbfGTVjLMTun7f",
  "key16": "2Wk14QGeqmeF1queFgLAA2ewsArH58vz4yjDT4ZEcM8Cf8rZN39gtUeDAdUuvPZvmgx7oSeLKj29ba3nkeXQyuvL",
  "key17": "5ybYiwBWqkTWaGWcSvxUWp3QFJKD412cdgGjHjqpd2jbykmXX7YzRbLqf4N3TMwyPXEVmi9wWj9hxH5ATTthNyqa",
  "key18": "T2k2tu4u8fs2S7gtdSMnePe2tFPoXC4bgFiictoZkuPRqawmfwgaryv6C98MyuEJ9iEWV46J618be8FTCydZtJQ",
  "key19": "57fhbzAndkzhhfybTwgkNQT3LLPAjqVZ9NrpemCNK87ZdmHj62KRhQTdj2xAwt8WkrispAawvL6Xf8HQDrc7w4uE",
  "key20": "5L9wHtcupCtViqBekWziTmJRkaoL5S6GYsV4LLDjTy7wEdXq5L7PSFVRqDPjemFsQfmQtTf6iAqkmBvbvS31fTrw",
  "key21": "3PgVqoCYt4dPZZVU67otFohvv6bdKxrAbhkT9hrC79MgjiARwwhYUQnAASq8M9ddXGv7z9t3VD8kEoiKYAQmFGHa",
  "key22": "3fmeak5Nr9unk76nn8HruWyVZHz8Fcd5LPP6z9KJ8KErbTKJRSG6EpUidkP3iMC3ev7ssqMzSz43BcEi1UtK5C8H",
  "key23": "46xLnJkfjgSBcKkwMArnhgLnCX9W38zBacyuErPYRnhQRWwgLLDWHQEvrPpiEH3u4rMmnrwDQ3TUno4ztuEJttqF",
  "key24": "5ffg3bu5sun8vP3ot9nUvNrMRRbXsFpMEf25Rher46zCdKiYrKmv1hFnPh9FJxTW1Xtnx6RBUYN1znjCG4gUYDhw",
  "key25": "G8CQYoaDhp8J2EJjLfCW95MTSf7oRscpXgFUYqdjuSSs73hCCX7e6osc6b7dvxNWgXEdGZWUriBkbqiCucYimbF",
  "key26": "2trs1XEEkKWV8fm7k5aagz9ZNAvpxiQXUMFrnDHkLSdsdGvLvqn2LKqq2dTAR4J3wEP55qtK9JNBXMDKqwbcuAJp",
  "key27": "2vKP5AFouzSa9Ev7HZQnVbEq8bVHUr1KxZSofwNw4zpxLtyHyXHQBRtu8UvJtbDEPLbtUUYmeEohNSn64Zj9UfMe",
  "key28": "5BPWxn1nqG6R9soY8B7Ay3ciSwU1z5c9QaNzgKw9B9cFpvveqwgWRfauZWetVaCPx4ziBr2i7u4UCFfTHx8qrN83",
  "key29": "tLPAKtCMuV23ERqWuG79J1VYSZ87bLbMwPxR8EfvMTgwMm13zFYXzm8Cm5jMxEkhxMs2irSuWyXZB1Rcx4og16u",
  "key30": "2yM1NmcFeW8p67K6gbanbD3AGR5Yfgk2akHgMXfAw2ehEWMRCwKdKZgmFt6r8zBzNYEDGQpabG4WYoxGYkQQu1qt",
  "key31": "4mA1LfZriYKQ1YTGRhpe9gEK5qMtQD9j2vcW5qXMreKtFe5JguBhQ9dX63ZxTjFuxYy7GT2nZcLuYmmeSZuXEQTg",
  "key32": "3LRyiLdcF4GUdEKTox8qnYft7CaGTnjPDjRaxt6eTpHJyHHGc8dZ6KDv8zgW1BoBbBNRRms1csYA9wHX87Q8DjSN",
  "key33": "5Yx4Csmh1kV3CuEKx3ZxUF8A47yZX3pbYr25d82nFaxnGcy9yUXLyo88i7idzYmKpzUfbgG6mwKEAb96NpCgnaMR",
  "key34": "49d1aHt62X2dnb8eLKnGaopVZNy6gZJuqqpKfAKtVU6RWopSNdQdVC8CP8LQvkRRWV74538p5kdo1d9JtDhSUPv",
  "key35": "38mJHp47KR4RDCunizsE5XakTRPsL1G8VFwigf3xNUrx8iJ8XJVZrVS2WoAsWupbY2UEQLpBtxzDSE7nuHCkebjK",
  "key36": "36FpbZBYJUoxrUehfbUDkvqQHKdY5AaErhps7U41BUnuxgFj5BB2anLsJwxsjEdRvjoBiyT1hyn8MVsDEJfszp38",
  "key37": "2gYR7PKha7N1joCJVcezGVPpuzDo3j2h9tCVwY5455nwKLRaZ8eUPkSYSSrg6Nq3iurVdp7gNb8J1Lnq4km8cMPS",
  "key38": "rCH2dVya9TNzn2yPEWS4M6AkHh7WWTqt8VTYWyN5anVFU4P21DGUrHNjSvruSQewjC4iNajaNAg4ZKGmNGeS2Sd",
  "key39": "nfyXAUwg69XMJ5wHE9DvGJUxpxzmK2MRrXyCCsnHvUCGtkRYV9n22uxhJP2gbNFxeCHjjmaWRgr2MBuTuWWGo12",
  "key40": "XXLY8imGmSgHyAuBcx42q4T1ZvBL7ndaK1Eebdhxm8aJS7VkTiAexowzhgPik3kCARUoughYwh1s2eNP5muqagX",
  "key41": "4ZRcyZgstmisYgBDZU4y19uhgCMkqvd81BR8CiHMQfGG5TEbo1q4h7B9wUPSChTfLpLmZNXD75M9eMykbGyGCS5K",
  "key42": "5HREnQvmcPku6DMcKp4BJM2BZNJKR6hQLsS3x9rcdqndEXLfj2Y6WmXSLZMZ3piXSU4WgfctUjsZv2bqWFZiRAir",
  "key43": "WBK3pzytJESPfFoYj3oi5TA5Wp6eJZNLeroCwUNEBCwFwv9yjUduT2JeZhcbc45fi3Fh3FWr3UQdfRR71WLFsU7",
  "key44": "5p3UshwrWGFNfRjZ5iMsgDpT6mhQVnrrJ7DG6YEy3W2Qva2gsMnv9t88TZ7Pj1X1ZTqPMNyL4nnWHU2u3frbe5ci",
  "key45": "4NcQZAeNLuwafHpYfoWfcZ4TFp3mFQ1MkxAa1WRkUVkiVHoPkUydj6fzdch8k1bHGDj6o9JuJ57hWGxVNCff3m7y",
  "key46": "3fDBMoBRwRCfxM97jN3Js3UHoY6f6pojRp19wAnuQkiUcrQsyUboYfLz3AAJrDkYiVPXSgf7drez5fUu6FkmutV2",
  "key47": "4QavEw42szQcTDaPKjHbF4DQygQQeqBneTK4gCNv5513oLd7TGCeu9Y9n2n8popyiv8RXxdbQj56PdeUgyANVXsA",
  "key48": "31vqZDcXhUzaeA1cR6f4j5LWptieVcwzbdHmW1fk9H1cNmW7nhWsFCdVJLtwisCVN6sMfGP5UDfENg7SqjxVrG8S"
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
