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
    "5sXR1MA9TMuPE3mBW7RSo98L1FkGP34i48GJgZ81XfC2GGUhvmTGE1GuTed9JSzeYmE9pYbWFYDDcoJdxCiGh3BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aww9DxrA1h7fcfDutyPJhg6jG1dSWrNeGsPLNK9A43ocTGCwsLmQpGapPjEqNePMH3k2HBEhaFPVCEFWSaRq88p",
  "key1": "4AxKrL7XPBBZeyD7R7QkyjLCr5VEpB3JMvXeDCu4xoy4u1NkcY5MQCcgUgPhzCDyW1g5wUav2qvuBZQ6pwrhWc3a",
  "key2": "4X5uPaTGvq2zVtkh6MmFuvYWhKMui2VtsFo9FxbmDo6AoWpKn2GF57LJkF2eTyzqvLzd4W7TezPvDu8xjmQLpcyG",
  "key3": "4FPGS8QptvkkqLqLeymR9ea4okYosJb86JMAHKPTPcwNXujQUcoLqVoCZfBeZ7STL9B2i2VZqqG3AmpnhRwtQvpT",
  "key4": "2nXSCunN9wU86vUZ7EZLoBYmcZVxtNa5xHGcUivSEEm9FiCGCWyQeAkjoWPkLooZqrcGTwHW9ETtYJMyqmVzpEBJ",
  "key5": "3xabesjoESohcXPyD4isBN7faDBB3K53ZUtdFNK5QmmnRmiZN7fLRqgDdw7tHDuhzLBvJREqKcnrFV1vvCNPTyMa",
  "key6": "4W19FS53uPbihRNvhJ4E6pihnLcVYgHtqNQeXxbp63Hhcn526dpt1RELQ8WGG3wxATL2npiJ5WJPYq5UbXt8D7L7",
  "key7": "2dZFa5Mbgxojz7MzDd3Rv5GNePAEnCEjjH33a1YW4Ki1D7oHvY94UKVpkqrybLagNYe25m7LfsgHNr8WTyZ6TF6g",
  "key8": "524Z72p8kTu7KgakoM6g7TQXGUra8hG23FME1RgZji5TEQMbMeYFHuVT5SmM99Rab3KFXToUDtbyWx6dcR1pA8aG",
  "key9": "4gdyioCcCsidmitNrjAr62p1scrV5KS6rSyZ8MkJuggCBSdT5mvrzNq6cg1smHQPt462T8URnDburghhQFeEoqKk",
  "key10": "5VDmSDH2hd2jqoCGCk8rocfb5A7knCnvkE7j9hqvWVtw3MYq5g1HummwFXgQoKLAigtfjDE1FxpQMKe3mjSEWTse",
  "key11": "5juUBHDJdghXSqDqPbfeRxmBMFXZjTQguYoprFfPkmG6JDCVGc6CeSMUGJyZAhnZqDaozT2CAgRr7Mr65rTa2csw",
  "key12": "3ncHuCcUV2mmhznsinrKqfFDjoZ8Qv4M9SPgjR1vbcnFyfXWfgEcEBzqW6Cs537V3hrsjY9dgxrePH2EN7jnTT41",
  "key13": "5WCxEn3iujar2hWJojkwbe5YTfH1n4wfy651Em3FPXoaGRomAJpqy7PMPnFX9Ym7Mi1UWx2a26o3XQfF7EGHMuVR",
  "key14": "3Dd5X7Tjwj35fAZszrh5Zsz9N5JBJ625P7gVPZW1tZVjGZRhVSD45AnEip7dAxuQekTpbJkXCiztw8jpHzmuqWmc",
  "key15": "5GbLtxYS4cw1Qj4jXMbb44RAy1yRks196h3r1wKmEspwKaSXW8Rpx7AePWfjKb2GYqDAmikSiwpjxjk8AFGKBnEy",
  "key16": "5J63bpGjVsPmc4yJ7XgpHbLLxLjQG8TxKssNqvq6gSca91sndSibSTrtYdPhtsczmK2aNTCiEjHdRv6NN3gX3yi2",
  "key17": "3UfKhMEkHQe2xQfHQQAUZoyUgkG9VxHTVMsYJ7RUN7heRwkYzNEQuxH7wZ4e5s7HUQ1ozKbqnUC59S8VaFYneZLT",
  "key18": "3LBZpCeGAtqdE2Fr7yX4RQWXzW24objR9erLXe7Tmgxgm7ysc6jDvCbMQvGe51YmipogiuN79vQ2eS9NSCjuoRK5",
  "key19": "3wUD7YxVdV2nuC84fabRgkj3VuV3LiXh9v5bdjZr165GYiFaA9wpUFj1Gr5Kwv24zJh7L3XfEbKGn6mAPkmp9jot",
  "key20": "zgf3YkWqWgSBy5Bd4y8ewDM3tB3vZVa3FwbtoQ1wTAMb8s3NLhXVG6jdBYohAzaPMtLTStXmbzgKwoEPh7E5vEq",
  "key21": "5pgticdHKKf8BxuKm6HJEabG6BYG8wb9ujqH1RtLsmoczPK1h16HkqE1D41FjzoS4AqUjnAaJtAsX5XsuS4wkZk9",
  "key22": "ft9Xca98cDTsfF5ufd3MKR8i5dR4gi9xXyrfxGBmp4QVL4QUGTe1T2ffFhsXkBHtdehAXme5ageJmeWzjTWmQna",
  "key23": "4UnjaGktwTzu1CjZmzSU8f7ZYfreNpe4SpN35X3c1JTuPZJRTRZm676CiKfTzq79KmeLdAxmyTGQMvEkp4UNdBGT",
  "key24": "4fLQspUtmmxGRonD921JzkJHrcBxgLZ1bVKHndH7i1GVgvCx7FLdLGjQQhevsoyFmmr62xVM79aNJxUP3FsPArFC",
  "key25": "rDA95gWCWeCawgzwybVH8uUHAshXei7L8oswTgziDKag8mirmWDi6saiaKD1gmGxF2xafZaWMtQ9ALZw6D2j2TJ",
  "key26": "5JezfumnqdpUeMNqWH41G5wTtgRHRidKMxrDiWDfXscHFVMxML8uNLqiLEQsUodHczRq1aWcfy6DUKaPCfkbGaoF",
  "key27": "5nb3WCAK1pyGmgXNMoZBibj5AU4SB1VcytkLHbuYerVm6gbRRGKNcYyoLSQehBhySxizTB1GLC62iEejAfPyBiGC",
  "key28": "eF6xr2Fg5YtDGgyUwE2KoJmZZHmA6rguvKJ5c9apV6vgArGgb3tXwdaaYdeTqDyihASkWxAtyYF6TGLfXYHZdmc",
  "key29": "2ZPDDfCTCSD61bmYmeTG8EPCPsboAB1SVjxcLXsJ2ao6rodD4CdNcscojbaYDQRQfPBRyNebfvsiD3LCuxHTzikq",
  "key30": "5xqjGyBLDmgiUBT4bBnrQvRuUFuYm7wUmv8NS9pHtMARJ1Ac35qsnJdR2FkkH5XRsPAFynM3qJKQ3M7Uc9oPDDDk",
  "key31": "Z4UquziD5yzWwoRDygULSkq5XAh1P1MnP1CzhopFZRq3s3cWczUB8oxmDe3f133miCB5yRJ9mARbzApTGFU3PJ7",
  "key32": "5xRWe1RA4H4RMker17qiCHosWsjyoHwNnfbn5A2QWvujjp8QvMta4dBe321nnRZ9knuDGQHVKoyWr6ktaQ7ELfM2",
  "key33": "3PjT9Sth4p8QT7d3cx9s4Mjbhvn34GQswQXYmt4cau4N1hEsfwDdhHbw97rCuD2PeteLEGrXxpmWgJwtwZAyNnaU",
  "key34": "5QkLKesBjN5MXgXzPt5Eg3AiLFUAMdddmKsX9XQy2i73rhFF4TiFnFxRZbKYk4xRB6d9rF6vgbWHNTwKBsVHYrMp",
  "key35": "4vT9zqb6xEAmhKM2X8duDfpNjEP1cNrobEq1NApDqqzLj2qWF6iQVjRZ95JR7MjKg8ev3bsppRdXYTzufCk4yXff",
  "key36": "3QkP8qFDnWsb5gvCyDhRKPPyYtNwdzeZszJz8mEK66HMATy1p5J4kT5CYjRW1YJC7zbzUNnnUjF9kmoynYknuSBN",
  "key37": "5VvyGvMeaDJoQ7sryTsWbW8dTNwfAw8tMRu6ThHMwmBQ8jKvJ3YLGQZCxPuBQcsJKpKvkJT2xCh3xCWKnLoguSw4",
  "key38": "4ATvgNGUigvQRXxWcQZ6sWAsXJBh76JSTfgsR83qcgqnUipJShQCbEy1oh9A7SuzLrXJge6aNs5CjaB1pent55CS",
  "key39": "2KoKFwaLrAzrn1NMXnc3QDLQRfShV5ESYP4EPqWoQBTydjaHtYAwoqTTE2YjTGgZ8ms7noukLeaYB2jaaXkouCcw",
  "key40": "5KzZ8RdtxDxf414MqgzQKBAC1jWvFiufWLnwxLhRJ8Z7hEDDJgwaH9FTSwY7v3KgJEbappYYwd6hwRVLtknqVU6b",
  "key41": "zsaraj4eRG5nA4gmUVdfH5kMihQaZzcRn6t9GHe1fcsdSkBDUzKuVWDKokNxaTKEraZ4g5Lq9KacPJG2CZ3AKNj",
  "key42": "541SMvMtj4144bYjAv6y5tS559W9YX1bqncNgFKxwsWQCvQuguqd99ckTNuwwUEZhq5npyKrBPHZ4MbTMKJM2ZT8",
  "key43": "4c5nG4FaSEZ5wKTs4HbiXTTvQWYsJwfN4hVZ6nbjJqzw4y1prE6LntAYot9WTqx1kTvbC5Jjv9QreHyuyRKJQ1fe",
  "key44": "44NHwFEZHDGnLYABWiwdSW8aA9w3vjjLiPRhXypCxxuREZzSg65oiksEtwBKxzSitqtZ8tNnU5U5Fb9N7to9qg7h",
  "key45": "4W5E1Kvsm6BouUUSFzzxfdjTPjm1Kd2Eh84p782udjBy58G8dDkUQ4D7Rr7GBm1UNqT24xCQ9BMtatgrsn9Zn9jQ"
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
