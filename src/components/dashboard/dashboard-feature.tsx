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
    "3TCUEUF6z6ec7KuGmDemxtRDigquPnyW7KWZhRMnzskSwU7EtyZWn8TGR63NQHUCFTYWhYCWCkAwiDBm6N77swn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i93k8sBbKeeCYzHerDtcGCyjUWet98Tg8VLEWLxXNDsfoovomKMrK6gSfiLE6BGmXyj2GqG4fM1yUETEhpsVHZJ",
  "key1": "5CZB9sn8bty65F5TLwaZr7mgf5BRBarkJ1HYZtnNrYPXJodEtzwAgnDP2k1MqQ3wzZJCbmB4mSTrR6gu7yMfvZPH",
  "key2": "4HyZccaV7hwJbjgAGAv1oRepLnSvf5oKFEzNfWqq5tgx8eLeT8Cbd73jfphwyptwToPhj8KMPw8htDy6SUuENHTm",
  "key3": "3NXhqU1KHkyWu6MSyaFnYq6694k1dof4YpxGmsBUF7UkYx68hNLezh73d7Z9ZGL2DPqbezQotJXEBZwoZZd8Rfv",
  "key4": "5fVN3t2atRBNEY24EKi9nUqGeT9gCYnEKrzWrEqd958hPoRuMXmzrNKC8yswVP73cZQwwiWSJDPNB4AigFNnoG3g",
  "key5": "57uKDQm6VrMmHbGUUQo6Bt8AygKvCrt2Dy4zqz3sGBqnWAcULTDdabLfdwUkSYhuh5ExYmUmMZtaY1QC9gskUc13",
  "key6": "2mkT4SRmiGNdgP6eP75wSBDLbH86YsZyrrjcrtVSfLVDiJuMgjovZPZZC9u836k7Rhb592hQwmrX1nsnzG9dJUzc",
  "key7": "5o1iVEQMX3v5Nq9SK1ncN74z4k4m2jbhbnNUtH84zkNP3KdY5vGmaC3QdJ6QEqFYF7QpxXXy6qv1QYnp6WyZoDdD",
  "key8": "5FSaFHXsegtZvLEyxQqMFJGQfuUByV3mhthU9cHfqyQmHdRhMmrHv3UeQvRtdV4ej1Cgy1TeibcbuhtY9UbBMpf",
  "key9": "5VvVCTWwUnqo4ZiFrkD4WQcSayZSrxAJDTYTT5QRGMqsSySWetEk1yh3zYSvXcgpvN4U1Er1Kj3CKWJoMDpcsr1x",
  "key10": "29sN78Hro4doBULQwMJfyrHqfxHPXVyHBA15nR5jXWHEwWMA7Y5Q1CBycL4ivpeMzTRi1GwhrSeyjhuTEJ4QjVGb",
  "key11": "PqZD49MQ2S36U8y6xKeCeiNugGaE6WF3kd5HCvNAmHSDvzRbVfaUzqotBc13dJjCM3FYfr6v8ffUCuudTKRRbJS",
  "key12": "3jqtRMtMytuH97FQKAuhWNZ5Ab1L31yNGT7BrszmYrNkrWPhnETuTwSrVvUt3pmBr4ieJNgcP7j3CxRhwRCJh9dJ",
  "key13": "9tXBmwG25xsYch8JJiFnvJ5R1uQAxgytLPpciSjj5ugnRB6DaURs2H9BN3cetzohdjdfc7LYmhDFrfphQRVGZQz",
  "key14": "2M6Ae4o3Apux19Fs48UNAPGPzq9duiGCuVSmzwZwMG366cTnoFYCTEdaAg7P4jpAbrQKEeiTV12e1BdGUahgEjDU",
  "key15": "4GFo57D1YynAemqPBRZWNh7MGcsjjc8WLcBv1BXKVsRx2kKjjAZRH9C2gJ1fZKfsdZAwUXsNeRFtFwDuq85ercJT",
  "key16": "3oX2isxTigU7m8jJ4GSgmH2powqogDTTNtmnR1fjnqGWduRwmZqQSv6Qoj19CHrbkuqNsHH4iz2nBv3fHafRyJtE",
  "key17": "5vCFs36Fb5gA3mwpw58pVtEG5bLEQFFk1aUVq9VB2W5JNHWzNP1nPmZy5gT8XEGwBNpKUUyavygg7ap29GMmHuWr",
  "key18": "61daD6kok2VMbKhbWZNFZ5fP1h9jnSjdeV81GNpSnz7ZoLcb3pN8jFcGRWsDQaAfqCHv2fKCw6zbh1jrEYih9umq",
  "key19": "26WavybyHMnQgoHgzEcMz8BA5GUsUfL7Quga7fU4i3EfiUpnVJHnBMSgzBaXvhE6ZMtcdKBQhPufxxu9Dvpu4sbz",
  "key20": "2uARmBCom6LR933gDkjDDjSsXvKFZRzK1WgDKWQoU2fi3cKu6HGpngemuKm6X4dv8b6Bso8quXsgZn4n4xLWbgnK",
  "key21": "61XgL6DXDycNP73sBwtBXsqfanyumdFsJrusv7wJAp7Nf4iB56GAcRPmdQK2aPHUdVuoT5pze12x6Sy9gJEyb3xZ",
  "key22": "3VZuWHcQky5Hof1qBqmbssYq68WH2keXuuZXrrVraJV9c6uurjrLv6GAU6iX1BdaE8pRSTaoJsywFmfC7Gxt2PJZ",
  "key23": "sV29VtEtkKntyhZVQYvHNqpfNwSfMsVwbGLmiWGBNk5sC3jnkZo5bu29y3PBNTPKG9YHkaKP5fvnBCHWoFAABQj",
  "key24": "28xiSbCWnvjQzZwjaFtMF2R3igbvL58LCi1jsiNo2YBZ8xAemTvQentQsDbr6csrufPgm1YzMPCgNK87H7HCtxMu",
  "key25": "5fxn8mz6cBcLjvfQ8p9sXxSAo4ALFvejeCW61bQRtFYxTBEGATC9bXEtQAKcmZsEDk1kdYtjCEs7Pwj646Wk6gZ3",
  "key26": "aGwM2pbRpW18KYZvqZPS1mWDE7oAagakXFCJA6fZdBL5KptBp7fG1XpGrfGb1yrpcd9pmye4qpZHssiBBg6b4PQ",
  "key27": "279W9UgoZEx3FKcUCBKTxzeSztXiBAufak3yyBe8bjPU39Jji4UjSGPCfFYEnPYZZaJHFw1ELxm4r1RQP2kc4zvk",
  "key28": "zPVbuuoG75v2pSo3mjAvwvT5PfZzSD4ioQm9E1aQ2HVB4933hje3zB1RA2XBvtedk5iBqmWiaVHcx5n7DzF3qqw",
  "key29": "5unsLMzU1Gz5BxA2g4eszep5xnGASnUfawbwe8EYWJbM7P22jjbieWY93ars7QTxC9xonGnY1P45FvAGV7TSvbZr",
  "key30": "2z7MeeXM6BiWdHzvK5ggbxXKHU8w3k4Ef8Wiir2iynpri8LwnvBENkdEucd4T14iVUuWzw5g2QsZLX7wtBVApAfq",
  "key31": "3yQFAs6DmcjEH88eiTcwufU57ru7L59sAAJ4sYgDAqE6hmyyQebEvUwU6SUnxcsqCyfreLtJCrV8EzJCcnVmjiTH",
  "key32": "5KEtGGRwRWxD5Y3aQjzkE2hpRGwatAzWgm7xYiZRu492GHVDGu2quvMwaqUrDSuiay3XMKcHPKr1QGa6Eizc9yT6",
  "key33": "yvfL213UbyKvUCJ4Gk7DZAJzV6jXQXeCE8aw7mSTFYf1HbkXE2C2n3CAReQDyBjBueTDmCfg2BKA7dKut59Y2T1",
  "key34": "2ZB1qLvXkpm8eQKLk9Lj8jGDHDejGoj6LAatU5ArYrrncs4jV7eFNoG3M2t4Qq9qZd3iJjKQ78nkLpuumcxeLE9V",
  "key35": "5WHyMWyoLzsywg3gAx67F3aFqnPJ3x4guvLam3B54hy2uZUbKrBnavZkW2DwC5Bpf9wemZyqpAxegcDox6d89hm6",
  "key36": "3uXAcKpS4hXgSNfDxMas7BdnVQXuv7JdMydJ5F1BRHBEPs9xr2URRWhc731hzL1GLMj64ECvQCQX3cm57wqDFo3P",
  "key37": "jMQQ346LgdwAZDExGKPHPmWRMqNoMFNf12TpmCreXQZDJjA2tLnGSpfqW86cUa3ZV54mstv93NbhoFaite8Md9z",
  "key38": "DNEuPNFWgtpv58jSyT6123MRuQRqPNUVmUB4RVEaucr74LJYHuZqebQSKwCrA8ncsJuWtjN1BDYfRMD7EScUaxJ",
  "key39": "4njp7gUFapBtrPXNbPDnmC7dmejKipdY4pZoJk9qMGbMeRzTrTaU7rctRs9vwdzRoexGHMmi2bEdRn8w1VjrLzqF",
  "key40": "2vdQo133qqfcY7EPSStS5gbHHmJ97nuJM1djAcHh6PE797naRgEW1BUbNbQr2t7TKootUL7mZTxjtyvjx6oMhRd3"
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
