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
    "2d7sY1gEtXpZKqmZ5XNuB3NdxJpgSjmGfeSQX2BMiARMKfKN4Ee4hKkPk2ruTTibduZ69kjqPtsX8jML7Sh2ZnU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RuoSUWurbiKCxjrLjxcY3nauxixeJeQVuE5a8y6Wtw5GkzEVrstRMkr9i4kB8H6JXYKbYkqhPGb1a3TvBnH9EcG",
  "key1": "J4aMUd859NG5QNmjdKgVgaUtpc3vUotfScebjpaEfEYkZvGqcn36T8S18woxozANZzpnc2B4xHWVGDLFKYGSEWS",
  "key2": "BDYQMXUwbYCyNiYyNnjL2azLPoLTLVSKvBKxvJxLA4hMyGqJYQsNH8UhqN7e6oDtGyxjAzb9pkMiYM43HhhrzNN",
  "key3": "3BAj1C3tPREgKQKWk9quNCSGRAmQcC5XAn5WSSLYA2vz8nbzKQMnsTDfcKNxa3PhGjtE4egXQNVgdbnqNtN6aTrg",
  "key4": "5fJdvSag1KbbgaEB3Z3J4LV1BHgf5ajxodF1BZyx2FJmiMmzJYMTxoB1vicVQvZZbVoQ3FytmDGxrmvcxDaBQHd4",
  "key5": "3Bwm7EnRGiN2Z4a8ZzHcQqbQDG5hUqwXRm3qzt48psUgWeXshXbPjYNzb11sGLzSjV5ZYmbo4f6aFJDrFF8cKn4X",
  "key6": "7LRaxckejiGBinggzDh5yQpXuoLAvJKccqmTeKpB2TztU1o1cgb2Vgeub29HMzWJq8jxei3xAj22J3wATftLasM",
  "key7": "5NVWR7SbU8VM6wv6r4nEwPZjBjWbMFqAc9ycwGFpNzBy2nAevYeTLUCE7svFhhScVrLitWzDbScU7Jrwj9qhJmKp",
  "key8": "65pBPwtuC3jDE6NLPewkHDPcvZoBYwzDADsbvRwRQbmTV7eQppnJXWU7Ko4CtvVPYtQnUK2dEAUj4vTM9tR9KB7U",
  "key9": "3a6pCTqQzzWufsC4Etfmtgt3G1Xao4t9Eh9rHPyPpVd5KB1G99tgvKBqWLLybiSARRLFUXXHb2oWYb6z4PUTXbJw",
  "key10": "2Ag6HhgPmw7cmCMwKEWziLdtraESujpsWaqEfxu5h9iijvXzHLjNfi7V9eWHavvzsiRzEj4nhn8ttEeEuEYuxLWH",
  "key11": "4jjiLEUVJZTV2yZMRQJZmSpvtcca3FaPtKXmAMeHGnXU4xqt1R7HJvPu9mZaxzLa2YdqK7H2jTadjd1xGzpWQyMN",
  "key12": "3nd88HkqnWyBN4MavBczPgjv26nhgNR1NN5Xxx1r1Wu8SdzANpvhcJz9yPuGMWpiYEFinBZFanzMxdGuA4Lok7VQ",
  "key13": "5K3V6eVtbpfk3srnp6roCyJxiGX4rihs29zVMD4o3oCyzcyWK8FM6DGHXuzEDFzvVnJ5BQWyf9uixK645yPtw5Y8",
  "key14": "AFB6wDpMHLedAVY17KTdgAuUKQZPRFWMzVMpxquFp2NmmG2ALV8DmJqqTrjVeAn8hjxRLoZhQsbuMYrVD1CVBZF",
  "key15": "5oHv65T21dkRG9h76ptyayfCHXDaVyxAQKjKmmiEsUMUGMKWQZQo83SV1Hp54tgCEzBoQnSfLqYC5oE9bvUaiDhu",
  "key16": "C6fScWxNS2Acvs32wS6WERZ5M78qAxDcSwvNPzxczsZqMVALd75vvFqKbw45x9cQWHNKLTnViQ94spKybQrKkyE",
  "key17": "Fm2z1AzBiaNVvptuKgsU5vHtjxoojgWPUuTFaCiKsEknchzvSY1xcgaS5kyHC4cNM1c6JcPjkwnPrNoGv2wBreY",
  "key18": "46acu4DNBETta6paBhPGn3k695vif8rvi9ZzqVaXUnbng383qMoCaGVzHxj3Dq1jrM8U7bewKU7TxdjZQcwHYukj",
  "key19": "5FppF6JRRYyv3DbUqzM9yNGhTH3A5d1XNevRPTJvsjBWKXhRAHB7LSTsFtReHYwzPFFQJepZbpqZu5MohTF2iZY5",
  "key20": "2gJQ3vxNv6xE25Rz8ZbaSjqqmNMeSu1inUmEbLXwWtifvWPy2dgp7gm8Kwi5Vt4FN5PoS3fz4MMKD79E9se9KZTH",
  "key21": "53Jd3LwcrEiFZPu1qnaDRYtCvV3L8fHJv1TqvkXyRM2awLjfucQbCSaJkWQ1gfzQoE5tYu9q5eSvodJKw1tiqo4j",
  "key22": "5EeT2ZzayYdoTmj25ikUPJZDeJUeZBfW3XMf2p9gs5GvT1MVGMHHQubmxqCfApDHYyzKbNt9KqfScZ85mp4BdRFL",
  "key23": "5GTWqk3XR5Sm5uXSKSRm5riMRrBg85vATwyQT3m6hJTj29H6wiHrvtzt6R9sZp5vZyGaSdmxqipXX3bcWLZRhqKK",
  "key24": "5AHyLSMwwmeAHHBMr5LovtmJgbY29doK5nvQMASedb93LyKkTyWfHZScMWBAm3CfDZuRw63myrtNcTMGzgbA2cLu",
  "key25": "5URrWVwoPm8kLEb6JTpUkyLkzDvJHjLuMe5F3zdFRWZgoxAJDjrtzhpaF1bT7dHQCjz4hMKuCwpoQ9r26r3oL9Rm",
  "key26": "4sjBUJ9EqpvTTJtgkHmPdknWkdfNsX9arLGSP2nrhCzAQjRhPJaVY3D9ty8JoVMTpgdt862YSbUaXNMj1FQQRcSR",
  "key27": "3gBZ2VKBBFWVBSGXEPy69gQQqwXNfAWVETNYrE2DZvQz5dzMig9mb7zpcH5Vqhep5Ve4fnNMQ9twhn3fe4bFRPhA",
  "key28": "gPYZJQWDPeyxUTWVyXZTegEiU7VXUMtAzZccL7HKomUvNHVQ6NtWkhESH32qZqDv28Vy79sFY1TeeDvhh2mp2wy",
  "key29": "3xfJHeKirLT1pXWyzbrKuuXLZVWChapaBrv3Fq4ebRCBkmn9mSNBEPbP8p9BfdrMeuF7wMiBbNHR3owv6gkWijzZ",
  "key30": "22MXEVaN6ArVREme2kdVv2UrMwi7pJbM92KU39FrWtbVemEd4PFu41YaCDzX8q9hCjQhEMChxDcjNRgmLqdkJiEs",
  "key31": "4fJVLVPkzASL3FVmLDzPt4ygwPw46f7hngF5V5PcxeizRsc2onP8ey4qLFr7VvPYPCzyMvJwMwXjhAfbYLCvYzzN",
  "key32": "5sKugcGkW7PG2MeMnzV9X5yF4rbLcXeJeVWtniJVic8ZDogiB5Y8e9rSFfe3gboxGsGZW3pDXimtxp6X7AUz6D8M",
  "key33": "4f5xjmHTBxiuUdghSx3i7oyYhLjJrHqG6QqC3GpmbaBiDcAL8ED1wdtyFpMTLkRp3DvtQj5V3wmSQYswPMjFcgXd",
  "key34": "5MHrcpDjbAzk13hnVa8CsnTb3aQX4gg5A3Vu7W84GufhDQ8tt7B9FwMMg59F7s5eh9SFhxrxeQJa8QLAUJz8MtV7",
  "key35": "4CNkARyCMHrAtMUBA8hVdjV6iLqMXQJp4iexupRuUGSyCME1qWJMU3kBwvro3BRkd4LjTqGuVgT3c9CWyVhtyzw6",
  "key36": "d8db4WXDPNkBWsuv5Np9163HvFaDDikvjmSNLUGUAdkCC15VM52UPJKwuGrNEk3p6b3VKRBBYC9kHcGuBZu98nZ",
  "key37": "4YiQAhXz9VKMiJmqotg5NnHQKx6qN1WpwDNzTzAdGx8Yq1frzTRCefEeGQXdM9GQpy4v5PgAN5TDStEX8dUzweJ7",
  "key38": "2JvSXRvvx6ATAYfS1X3uhPuzz5DDdzrw6D5m3P9YpvydKiEJJiw43i471ViwjdUZUPrthX8kDbDSrCtkBtpnBMjd",
  "key39": "5deKDLr9e3Jf2N8XVYAxCMk2sD2wqp26p7PjRZHuE7N8RsgKLMB9dcYHJ5htN8hpdkP1NZWFUnZsYcqw5yrSrQpc",
  "key40": "EH2ySo5xmMyA77eYGUqCoVBrqdMBamif5CKGUpTWvrxmFyybCt2qTBtjFMb8DBPHUmjCKVZ9cT65TgQ7u444gX1",
  "key41": "3zUuk7h3XTLaVVWB4kLMAYvD9QJDKSKCBYzium11coCrZtkAeKkQgoC4acNRvZmASGXjjQaGPNfBrDSjzAHBKs2b",
  "key42": "5cpCoNQ3CjQwGdtJ2rMmARHs8e78EWjBXSVDfX6vY2StrGCcBiGpTsypqBEijXVwPQveq74WLy77NXLN9sW5iv8t",
  "key43": "2ydEY7gyXTCJssY7n2DcxnHtJ4WPvRAjNRbg1Yyike5Y7TCBRpEFbYxMrFBtDNTnGYiC2e8S22dN1fvo1uK7Vd4T",
  "key44": "3QWx3XxB8GU2GWSdfRq4CmWYSSGozzKXgAnG3y9H1at1mVQfjDNsp9ajFWfPQ7w6ZdsKzFCktbHEWChY9gn9u958",
  "key45": "2RcUhQopTDbK7ZnFudHzZtar2jacfJY6XfMJsUk3BeiSqwGqo9A94z8BSdx7p1MgHH8tNmCV3WYf73osRUN793NY",
  "key46": "3Wcdsqny4NxxuuHKkRPPY78jjcm6Zmzze1RkVQ367YsKAFeAydhNw44sKC2bCCgdGqZuoTtKhdRGXd2t3Y955q51",
  "key47": "CMZgqzVqpkHqeN5zoXAEhZcdftcpgmyBGFUaAcDyY47dnyGWuX3NtTx2M1jadrEUSRwLu89T3wM4aLuvaZUhhtb",
  "key48": "vPVQkJuNoJWK8M5EQbEoaJefTghxzvjGSiCWfr48ZSaypsU3DyiJRaM5nWYWMP87zLwnC4WJTm8HgdcfGNEWEYx",
  "key49": "2Eug58zbF2kDK4yY87RBeNV6wnmhMAmnu1GzjLavK4t1KB5tFma6LBhvAdmgCqQdkqepsju7GSkdWPnRTL1BZyQP"
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
