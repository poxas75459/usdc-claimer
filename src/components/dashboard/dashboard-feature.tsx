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
    "PwnMP9rKhgh5zCCwiZBKBtr2PWAZKe2ynt2E3THH9SebhfrYMLmSQ7dL5egm2zMMWzjLbfNXrMBWEfvN1sgxQv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4govtACoS9AEZF7pMT1Yb554Hb37NJPz8TRKNphGcUwvWmaPttaivrSnzeBDXuB5pTuH3fNr3fmV6gjWpLXKeGcU",
  "key1": "34rMoCEHpQE2BVhWCWdpvryv3AiEYozseEyhHmWfbD52KMGavq2f9rYSv4KXA2Ye7DPLpZtCGjszXk5tsULGgyXK",
  "key2": "2UzbhJ8piHz24PPL1FDzVEep3y9155FJ1PS5UZY417ExQH35tQwZqNqru9KcuQs8KMP7kAX16R8mTCP1U5cfcaGA",
  "key3": "2KwYt7NZNN6pzBZ1SvdaXDYyZp5jZL5mqZ4f4zJWTvYt6NdNPZq6a4Z4FhDLNJqwZQhuJnv7mnJ4aFW8N1sFUFh",
  "key4": "2Av4Qo9JRJic8NpBAYwj9furMbKTThfDj6Xvj2QiQ2rzKHBDdoDoVXAKRmtbgFMPyLMGcwLP7DxYkNhTnho84Ywn",
  "key5": "2xJsKegZrki9MoQZf7kdL2CF8ZaGWqv1NBNNCxG34DsRtnkhBfuPZJNinSEiojAxdrDBVTrmdGsZxb5JrRFpQDB8",
  "key6": "2ZyRs2VNzV8Q7u1bKpGeesPckhqZ1zPPY9weYkZj7GNdCNagcP7VnsQaoEfTGqQFGcqsE469C4Tgddi8xRy9HLVx",
  "key7": "5EyhpyLtL4T2qG2D6wNBKQZZJiq6cMUMrt2e9kzjpc5Ue5pCgZ9uYUC8taViKScjSVMNtTNShvDJkVFoXBCSaUkU",
  "key8": "3hAvLyFS9poRGCu2yJjafsUXiLEVWRtZsJ4qKxoX28bK5Th7Z9WU4FBRTnVveS7AyDRd4ZuqkkGV3kg2Si41wWhu",
  "key9": "35yxDUwoKZ1EZxid8HNE79Z3Tiqe4HCfpsNiMeBTefhXwQejRxSCiDwsYgdVCwfoTDfZUvgAwMYfRsW4EoVQNDY5",
  "key10": "2bGudYZqnLry13xR1SHV8tVyW6UgGrwH4F9Gww9B3SaKfeCNEd7ZbhVb9CzcC3SMyEn3h7w8hbVcFbnHz9EtqPn7",
  "key11": "2QNR6F4DMPwHjWmnQ9a3QqPWmNjzDuGyM4ui9FsWszaFBnHviKnPNR2uMB5zaHRvxJwXABntoRspobjTmXB3QadC",
  "key12": "47KTYkJDEVs122GkjcLX3ATnEMRxACkTnrDZpn61haYFPgYRMBGSdnd8imDJawd5piGpadGtcV7rhcYskRJ6FEN1",
  "key13": "qQFm4exL8w8ZNaXWUWgCHLtF2nJtMkexhNQeR7DF1ZfjW1gs2Yu966xNsr4Kbshh1TjcxQBjH83h8iGTGoM55uT",
  "key14": "3ZcepqGA5WebCtUKKyR1xpwAsrDmp3gaMxWb6zkKZPBtMhyVDo4hG262ii4ugQ18YGqKS1LuC2vFNrwGpJk8s5ib",
  "key15": "dzkiBDuxiAcsAA5UnEzR4dSjpH4bDaXxbKw29QQ2aufDr5FAR19e4aC2RjJ33qwQS1RdFGWgJMsvEBo8sm9XAkw",
  "key16": "3onuGUfuLXyCuaZuosXnuYoQZs5R8iJd7vxREL4Zuev89yQ1dnRjJKWhpSiJep6sN6B8uKE8agD8XpgajJxiLSZK",
  "key17": "2ZS6TUrzX2fYjqbrm3M4EeRPKm6zcFG1KicMfvXPkggmxXBr5JH7Z1wNAevDqpUJF7vQ9VbyAjQ46LiX7CinQ3t",
  "key18": "4iHUy9FB9YfMbdM9pNrTBbRCqQ2yr1XGxRirdWNwdPz12vVrywiyGY8VppE1Hst7zMZXozfwuyBAfJjvpDeQcPdM",
  "key19": "3ge4m6UFRSXfYFRqSFQmPETddFiSWsJWLZMMndsMdnGkoj6x9JVX2ys7A3dD1oLb6hJWZU9SphGRtboi8KyhbVK8",
  "key20": "5n7jeYXuNQmrNKxSAu8XQj5YsFghTrJ9ppYqP2xn4CHJFwKT4YGyq7VyX6jbuJrfYvrfWYXPgH7iwUUXuBoBtXnm",
  "key21": "3WiAZ9tEVcF6Kt1qKBtYUUJLZ3CER34vfvUsckSM8NZJCnbWC6Xw4HLU6MEZeAxGWay5J7V8ZcvcRmLMyLjKSbax",
  "key22": "46RkLEKajCsrpsr9AqZ4kCLfUM8sqqkNi3ZeazE89BaqCRgdx2imzqawiVXAgkaFug18QKTs9wDq3n7XALNtmm6i",
  "key23": "3sHVZ22caVH1MBtp8EczFUcnoSTdaHWT3HCdT1N4uwewhRiqrUoWPy8v2nEs2yS5XsqbbjtfdNcVq1FEWMzm9BXF",
  "key24": "AgAxTHC6Z6VhT1qK9jBuzs4Cp57E8N1jRpma86K5sNTExxz3MQgVMXVRfLSxQpH3wwP1AaGigg4AmapFa5tKAwP",
  "key25": "3ZxQEgxQ2DZdMp6svjzZvnkPvx5ZXw8g8givQXQSw1m5jMXUzNEmfRSTf5FkqeEL1oQFqRAsBmCwADY8f9ACF9sq",
  "key26": "3ERiKAc7dHrZKMekzRmBEshYbv3prR89TjT9KpcuivC4yRyMUrGUnA89k7vpCNGGk8VNqeF42v81NLdoesBpn8Sa",
  "key27": "4JrVNMNds2sEfuURFXxsCEZTz9gqrka5XPdTU2GgAHU7rrgt3X3cJDitJM79fhXCPwWVvYPk4sqkymZA3d3nn9uv",
  "key28": "Bzg75vd7pnZuebqCesbAUGAoD6EexA7fX1ih3V3Kmf86HLnGDL7hE77L1b1dTGKuuvmRVFefN3EvGUgcA27TQ6U",
  "key29": "36xQnTiqhDMh54BcvMoH83h3bbSHx6ny24ERqzDJw537MczQzFqtYCwXnATEiLFBzKk36Xok3zcKZazVwDeL7QsB",
  "key30": "5huN7r7iD7UuBidNzHETdh2RXmxXCP3Dgh1oJzd558hR9s1PoUKMbw6sL9dtaLq1xgdfZy3TLxEhEpfWYp1GVPnS",
  "key31": "5m3xLYqckk7Mgrzh7onGrtwDFd4jF7iQuezTJxBqajrgTmaatbGuEad6pMCCE8deixDviLCiqUWHrnfuqbKaittj",
  "key32": "56qGEG3cLpe82ishuJa4YcjKFBttzqVs5mjREp4SASYbwABzfacApqn1gTu7CCiewKs8FG4W5mHC3PpThX7u8w5P",
  "key33": "2zLBksFEnBDWmSqkVH17i6kW5E5xZhjsmRfnKGqnNNuFJsTg9RefzRom83JCD7reHe42tsc1M2v3TEp6XM8jv2Df",
  "key34": "4h1hm499KyeEXHBxNbKCsrcw2hdRjksshW42GE1fGJtE8MuyW8rJFP727WBnbKCcdgvSM9icRWDLY2yanCLe13Re",
  "key35": "3igWBiTBKCrKMN7kckXdCm5EAUipWx2p2HNWTcbFY6fTjiRdUnEM6CiUVvxhaYE5PDaApkyHWVqE1feZmV5HnbPt",
  "key36": "2JhBZJBfVg6Z8MEUizdjCKQEwpWXv4aBx3D3Uxx9XPkZhqmFi3jgQAVGuWRiouSpVh46DQ1ds1iKzkHx6AGp2AoU",
  "key37": "1PpLnEs8pCo2rs6iBn65Mt29g4pPZsgv98cv13Zd5Mcj4TyqcpYAUWoPfSJZLr3cxdBJJRbYw4g8L1oZMmvi36e",
  "key38": "65WXGFSu6vBbDVFHuRpdV4bYqUksYD17DYpjoqNqi984VegEettsrV6zF2vde9SKTNjbLgHPXATgUAP9W9YU8hFs",
  "key39": "KGsAdeVfhGsrjPZNo7Fd5dFkiJxdmstk3sBWmTJ4PHCNjkVFP4vtCgizsU7FyjWWsUBn9favNYsaMhCrqGgKEZs",
  "key40": "2w3mJnS2K4vcentqQxnZJ5nWDNuux6YUbBNeRfbUqDMk8qrytvGdTVhpQe8dHdZac6ZGKnUYAYwWyaiub66AFj8o",
  "key41": "3qYPEjYAXCCLKctxPAEfCGv64BfHRMNxYS6Ae4ceNma8iaBquHv1HezweC6eJmor9fygq4aKv8AqoMa1tAmCuXs7",
  "key42": "44qiyZ2cGdqo2gM8bLnVwfm2FktezkG2ecLCvBb9cvtsLDPNyr7wWv2bgeNnkGJmL8QesFxZpNNYdzqEDkQTLtH1",
  "key43": "4HnsoZQkwxFUSp14ZmJRU9f25PYTv3TjUB4SeunLDjhgo3Xc8TUMESDy3YcXXQXHMRN7DBuxQZ4sNoCRukrBP3hY",
  "key44": "fZJAQiMezKASEigozAoJpnojUB2EKH2P7o9n7sYMqmSwSY8w9r7NcN6xJyno5dXvHi4eoBn5dAYgxoVNgN4TBaY"
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
