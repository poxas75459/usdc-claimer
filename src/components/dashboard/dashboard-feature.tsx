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
    "5EMbGsAJdfLaw4K17La1AMXZZczRFd18bA3HSJY42Q9PVk7YMEW3QAYqxAhaEEsG5oHa4MhnzfKmZwF6SGLnPrmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zKkeJ52fFitGo8FJtsAyNfxy7p329TgMTQM1v6tJFJMN8HPZgCrf5vq3Utw2psyy6NGBtBR3N6cHTjiq8yD2ov",
  "key1": "5muvXXJAK3LsLLvFtHedc7rhcHYuPuojWEsQeKjopn4ThVzNqHFfxu1sxSvXPMq39WNC56nEAiDn6U56g25YubsN",
  "key2": "54r5xu7hLZf4g2BjvQLXxNegybnin5N4WCNdk7R5vr1SDznbQQcEm7f7ohVSrczrJswVtBPB9tASs3dhb2AhaUmh",
  "key3": "2eDaQpq493WzigEM61gehruc8WEsh7wzyQucdQqwH4TUoBcdY2Pp3DCmP6g6ecRk98iHEjqaDTZ7wt7FDixN54mW",
  "key4": "25wEe9Pm5cioGjExozVNtJYzKb45j8o8JeaoA4sBdAzBYWdQ52KLG6iqX9x589gP1BVvC1eBhiFMzahVFTwUHDTa",
  "key5": "2F5WuCpfLUY7ahBtdQ5DYEUzz2x1gK2JBZZ2uMRR4izRyoSoGWmhMKsgvdnfid3AWVDXskVz2Tki63Tf2vP2qAb4",
  "key6": "5w7qt6iGmbz9rNSpLZ3FsYbpGK34ZGKhpHxvLAPdcgXxxwiqSc2b77Df5xSokhmWL7bUTPwJfqh4XfoDwGPhe92B",
  "key7": "2acH4aYJ3LbZtkhw9oakEsmaF9dGmRny2vsuyCHXdMjtxexLZwGgkCYfemeUZGqmGnyAkhazhp85xJzii8rQF9f3",
  "key8": "2trUCwBmViZCPR3V77tsdtBXon81v17sJdPguvWFK7uNgP7QnbjMhNAiV9vxc2db86AsEtAAu9v5ZFSHiMjEyiev",
  "key9": "4VpqN7sedBsGRUhJiYK7mNajho4dMPVbgCVXwNQbH8PPxgHEKgK1YmLmkbnwMh55SFYdAPMBkPWqz3BXCo9h5Vij",
  "key10": "5eRaaxam99Eo2MZ9WdrchbJBnfAYQGBV7mzb9gRsoPC4DYkZ8qJNi2ojVcrnqY7JBWQcSeTPsJeqL7GRja3zpESj",
  "key11": "rdV8Y8UQ2kdhvdTrfxmJxpU9HAqy2N7Y5ayHiLH2dizVmRjJCqu75hyUSV1G34K3iqduPoj3JjCYhTQ6DzZewbC",
  "key12": "25PX2gyunsUswcnFMkyE4o8zm6t9eRWsB6JKhYfkkwVNsPRsugstsqEAe7jQGdP1druV9rE73qxTufGxL3prsqUv",
  "key13": "2dGrY1mKPP7oPfWN59utpY8haXDFaFutQXpUDg2a9jtdi33rmCYBKCLpVc4L4UXyFTaW3bcrHJ8Z6jseuATJ3C3g",
  "key14": "3hYYQud4A3LmwMTXbershVJ6uVjGQ4AxUocxApHUoaCWcTFSwrpoZstpCDCXL6fJ4an2GufAMArYZr98JQqpS1JU",
  "key15": "6dfY3Den7DBJFVRgAKNeX1Yh2exPAV5qtwrnCkPzgtnUdzjxDuysms5YM1wv64gQA5HedGuS58TJim9GzAECYoE",
  "key16": "3SUR5JMToBw87cmxYyea3hj7ahiwn1iDdp1tLtDySrrsEE1ardqPy8iPZERUAN32AN6URjnWWWTB9fp4MeT28qSY",
  "key17": "Pw3tGoKscoCPVxaAQDBkeU9c54Zuw5wLCcAaHXjPQYk7zkX9FaxFSsFs3nX3ZxBgS7ohZcqit5irXMpdHaHkUoZ",
  "key18": "5MWyruDXpR8Da48wqARHFdVk2KwBdfts9zrSYDibP1Syxb3xZ5mb9MvsDgEHLUbifrFPR7ueeafiSYJ7EaKbwWMU",
  "key19": "2ZATxPngbSxpAVjSob5oiHsBLbykLFPpN4xyFJ9gtwZq7XZZh3KQD7NoX9J3EGvA6uAqcfBTSkXjg1JoiSVnXBBp",
  "key20": "7b6Z8A3T33vU4KwZkuWeBkoexFTbJWSZbXzpoNy2KmzNgFvFreqmhFHkEnvfGm6iT21JZno4gTuzTJRnKWECMog",
  "key21": "4DwPmYFM5pdBn7TxQowwt9UJKH6YNmC16Az2DcsdC4p3CtrMyKJLNadRs9g73CzZ5CEArXWhQyEQbYpcwZeGr65x",
  "key22": "4fcfQ4N5kjTirf9De3GVvhSTnGsCBhgHbmhwVR9AMR2t7znpogWHLA3ZPB3fV4xvnJFX6rsCogxmru3tHKayyqHv",
  "key23": "q62hHtC4RzsUpH1k3NutPwacpexbmefU1JKM16FLE2jQhg6GjvsPVBKi5pg4xsBbEHEUin5JxZFHizRWPraCiZT",
  "key24": "4MzPNXPgAtV7ehz7PFgf8hYeNnaDUEWuQYCoi9dY5BE5s4VWALsyXirdMN9z6GJKqhPLuh5kox95GgkbxAmj1FSd",
  "key25": "4mDR6TLwMjYgDi4sd4AvVbju7AbUNMx8ncELGX5va1xBh2wgP8fqHCqQwdH2xNEAoChRcJymLa9rSaMxpxn2mp66",
  "key26": "ffrTE8qmLgizRG6tmY8rpsS7f2NUkhwUMYE2wPTPzTeEBcGTFWZA6NGHs3ipYSoDyHUvc6RsCGqmcYAmbE9CAzi",
  "key27": "gm7uND8c1mbH5EgPCEUKoToi3ft8en4gzzqf9Fv9niUGSNSWRxAcDVxcBVD79xEomSwBmD7e1FCQZAfLxJFqjyv",
  "key28": "4VEMEnKedaBFxkcRnBQcCP3vxSS2kiSpSSmM3w6BtM7hu3NBrMJWb1i9vyce6Vm5AfiF3kyW8NTSVHboqDfgtqz5",
  "key29": "5ZVzb74Y8mQAWLn9UuBxviMWbfchNKNmQMofhX71h6w7i5iYXoiTaxTiQroPakqGmDnozRkFBzxPcYRE5cggrxDp",
  "key30": "2VU92KgyGJGvw8XYsH86jh6FadJnqv7deXk7oSKaECKqHq6LDrYT8iFZgAQHojhiEQAZi5vi2pccsCCL2iVvUNTd",
  "key31": "4gLpwhRzvRLp3S4FEVs1GsdKxK5det88VYJ9npm3fDziKkWkxQoVdXwCy7BLoh2hqE8KyzXCSSkvr3LkjadRvSLL",
  "key32": "8dUcbpGaTPVKabdS5SSzk31MSNJG1wiF6tJZDKckDWi1X1fGQgYmJn7izDX1vTCWbecQAaGWRaws3chXxTo8qEx",
  "key33": "SEdZkjT2gNrTQLTE8XT6yVQ4rD5Thx1NfYNgRaJS3UnmEcyMeSTmubvkS7fx2WbjXZJiJvRub7EHDUhiVtgQY59",
  "key34": "6MU1h4DWkKcdMDC6MKsj1MPcgRdtVnw45v479XyoLypdWDccyGYa6h1f7gCFCkawUYbHA873iYiuFS2dFL2676J",
  "key35": "1r7qeuLUtzatYRVxH1vDHkbUvg6pzohKkd2jtjbk8ocLttFnxdXZ5KtFq8ctwG7KCR7uXnMjEL6bSYjsXzRnkkN",
  "key36": "25VePMnFhRcsfGkhZQEYfZVmVNH3jhc8VaTsM4LaXxQT7uLiG5UxTzN5KXix5Ap5yYQ1vxAUTqrJevqMdeSRwYzY",
  "key37": "tP7Q8fbNjx3fiVjmFXFbQ7BbH9pVidibuvW41p3ywKwi1Srq9vTcs2yHiRfJAsgk6SKGWi9W97if6fhz5yNVn9A",
  "key38": "5PkN3nBoEEVAoxh3TGhVwyhMvYM3JBVEA3mZ7PJtQG35K7SWygE6ppXoq4YgbGaYktWDEehZGGrJs7DPAtQMYETu",
  "key39": "rpq3rdq73szYL7PLxungYuG1qSYWRAodP9sRivtYB3MzqYcUVBtdMszF5Y9eB7HUPsNEVnCc6QMvUiXmVMqoZn2",
  "key40": "3ZK5naNDQ4FEJbYCzRwweXL5DjB61kZma6anKQKyoUSHfWGB9FPE5ixkk5ba6FRetRDijh4tqzSQzELupRqcTvT2",
  "key41": "4RiA4w6YuRzQePrw3C5Beb11MrjkCn7N6TZ4BXRQmXRhh5X3uPNpCUKVro8Ddtw7Phcaj9zTjgEYRuhSNEFBNCx2",
  "key42": "2Pxgp93uyRbMW4SXvnynw4NZmiwNRRCNLRjxfZVEF9HqqA8bZyoTsxNCSmXe6rvzJpk3ecensjL5d5XWMRNNCwgw",
  "key43": "5mbr7sNnS3a8t4XMt9DVuJTnF3bi9jaLyTsNfChbj3qtH3fma8Tq4DBY4eMC7SpxLJtDmNT8yLfc1vVXDKW3LUF7",
  "key44": "5w89i9ZPDHK9adszWwUbSmxp7j5At6EfQDgYQSZapgkecdoAGiB8Qu6QxFesTe8qr6HsqwMqmWDxYpjS51S1ATYk",
  "key45": "3ENqwsH55QK6cY4vL7jXQub6Sd4s4LFrd3a2jhEgQj886L5ZukSY8Xtbv1Gx3urzvkLnEoi2GtnffLKVVzEzwjd4",
  "key46": "5vrT7S1HtJpM5b1stgqAHK56sq9LGDLGuby2E1tsPxeUhfgYSgEPQzgbB9PndYjbkZxBHY2DSZtAEs1PhecBBTNk",
  "key47": "2tbKqHtfq398TK2jn7KfBsuWMSjH94YUzeq8RLhtwnBUzQ7gmtjJfQe5tWqobYtcunJfh5hRcFYGBipXHYUXCnQu",
  "key48": "3CwZB8toxyrq3cc14f2GhWmstCoEN21PphqMhkKnhfjPpVhN7MUe9kP7nFrAiz3YrVtLRWVDKFoPuW9jMJiAJNVR"
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
