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
    "2m21fKsVZAJPzh6XnTZn653uFrowZLnp75BBEWH1RL8x1WsPtUgVaJBX11ZPnT4xqPpdePxK1a8HTkKRBr59paTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tAAZZaCqQZnDqZ7AEof8UHa3N2n4dwP7XVBeufJAmtWLpPmZBUC82ibXHViFoPu4jnTU7nh4KyouvBVLG1x18Pg",
  "key1": "3gC29EQYKnQtZMpU9WZQQuDNgYWrggb2vXK3YrDsKfRjaXtVapfgT5iMn2PoQx1kLCYhguM6aAfjpSACDMtNSsbi",
  "key2": "2UAqJLhLrzBejeo9nug1Aa1wgAh7g4njiQbsBQzg6xCgS4W89iGCtiYhSCUi3kn7fLJYTBaaNsYFEMHNVdGYCXkL",
  "key3": "3odrTYJ7iSuAzLdCKM9dUv4z9kDcvne3dymWuxgfRyf9vv7fVrdTWrZUomPAALkNAkrqBt6bv9JZYHcwrb7rw4Ji",
  "key4": "2dnjMteyCEHYpNbznDFSBwHVFWtMwLvFTQdisNkGiupHiZCqpNV3CD2oMqedANdpdK4qynUcCFt6RfaHGgWf7QEq",
  "key5": "4Gq18MgExYjnrZfny4tmxBtqGwqH4NvNcZzCbk4Qq84jUg1QgKWz1JENiarE4nS2q2ixXNZVvX4ay7DUh435azUj",
  "key6": "wSNvFvNAVsJnyYtF83meJjSjXCzD5b1V2Ce4EnuFQEKbYJ4uvZTA2K9EBaSMi6d5f7nGZVRtShi23bqkB37ENdA",
  "key7": "2azYNQrow69a8XRuVoNf3twkLeBs9RCdDAUxz63McLT8QTEzA93ckagPr8MRRoKwBggm3aQ7omm4LbVLay7hXSkH",
  "key8": "5VcFrnurNXgKrKczoALmX9KJad7YB8axR4582LTTqvLkKkWwfSVM4nAoavoT7HsdRmeZqakoeaGY4VY4UGWY2vZw",
  "key9": "2DX5G2scePqDjzbuy4aHAJXkddmm3HfXVTcCZue3aM7wi8jG2vR4E5Xb2k5R2NKXPeMox1bqNPrzUooUM2mNUHzM",
  "key10": "4VWuZqYAPpu2TNPCR7Mzjs44FxJuCTKEAMJUdTUNFteUhM9MY9THQCf4ecedTn5QJL24rp1BZvPZRCgxuMTytj4P",
  "key11": "2qaHLWtrA7sBH8LnxhgrToPtVXXfeqPj2GE9cNKZJXRQyt9dZ844FwaMHZCmDyF2nbMGnozbJa9oh9TcTTvdDUvR",
  "key12": "3XTCSW4g1GwZ3g4zF5rPqH5AuiLUnpgJfYC7HegjbjKKwprFFuJYM5RnL1g5FJoa3oFBdteDEfqaTuwa1wotYmPY",
  "key13": "5MQXVQp9otNuUBYVetV6jhksysppSVaVnA7ZXuEa84ngtU2v1BUoxXhvTPpjhQmNy8PsYf7uy73Jkf2D2kMzRyyJ",
  "key14": "2yQWSjmdMUCGM8vcSbDanX1nnzXYaVhuND5U5wtcKrwBU1sGn3K4ynA8hekAdkh2es4a7f5PByTzcBJDmrLWtbaN",
  "key15": "SYnQt37HWJHhkh4eBNHziZur6V2Nh1ws1W7uBcecZmEZaduXJz86FKWVGzc7j7ZpMGTLyTctU2fUrq2MWrCkNP7",
  "key16": "3cwkDCTkcaVyYXEMorDYwKsnToPsuZwYnmrkTJRWVE7kG8DXqd6kR6WTmkku4YurdhoUJaBF9sFpF1BYQMLAcjkC",
  "key17": "3Cb4u8UpTSrat5EkxaXVWvSPm5uEqQCrarGqHdKPeEJumdYNCQENEjQDSP3QNidaJY9AJW4AebBiW4Y7bWBAockB",
  "key18": "2vUc8bTtBr6d2GPRwyEUxyuHCesNhhs9HPHLsAo1SASzSoaFZprLmS8p68YGCuAi2waRXbWvzn8mGsx4HQ6u429Y",
  "key19": "5Tyk8okou6ofv58USDPHBPFkKA9sYr98QKte1atuKWAKBc6SnrkH7Bwsr8bDNqs6SaMfW7FsvppVBEmHLNx2Py2b",
  "key20": "4uhKNEsLDifAGpi7Kt356jDss5wzNWN9RXn1qPV6N2pj5NdaXzPjZd4aijzopekSCthEYU4Gwi4kpwzqssskZu1a",
  "key21": "CorXv8aGe6RDg4oEQuHQoR59uM1vuDtcoszFH6CRJobHKVe825YwnxVpDRCsB4ft3fDxqrc1GNCJ8owgARq7cKg",
  "key22": "4iJUnyjscJE4DfrzUXSHtvQS1scTeqC4s5A2shXNXuMj7T4uFashRBM4VN354MnaZHZqGhypzWbRzk6Zfw325M6",
  "key23": "5YTTzbLTq1VpSXYyn6bEURfTYHVx2QsWdkB1sdPZSQt7WcRjxUZWKjXEf8Tphsj1VFRiAb4KsthotiFWMMKWx1pB",
  "key24": "8B6hN9TengvTsqLsVeBDHz5bRJCt59sSHFgigyyWKaBBF5SwBFhgepuFWEcvhcBG1Fjcnz9ZBn7kqu7yoPLeudD",
  "key25": "ve7bmYXwQuzHJVJLTn1wnryfbucri7ZaY8vKhP4Ys2gZHdZSYKz5wQJjfLPnoDLKFqeA6z8nmqUWK5zPfRpZ4dR",
  "key26": "peG3Q4y569vWxeivR5DDHXHBVCiF7KtmzTSMdpvXjcH6TipbQDbt1Lk3zZ6fHyJMncRV83fnUN6HW42b4zExnsA",
  "key27": "3v2sBdBAxZip4ui7foF7RPhoLj6pAtE9qbPgU82i1RnoBW39DE3Ku7Wptb1AHVUgMnbevvyH7DG2Q9rnJ8ZSNt6T",
  "key28": "3upfm6u2d2YD3bgMfcWS1cnTX3vJs39aYbaCGs98JVmYFTy5J3aD31tgVvYPdcRQ7eXvAzPwVC3fREivPxAWWCw4",
  "key29": "QUczesmCjb1MY4M4jhWG3Mue3MT5YdpTnCvoXzw1m1pxgeyDQhtDGN9Gv8aGokTbp171UZfTRNdc5FWSE7KGRiB",
  "key30": "2YW7XoAsvchaUaULzcfx3w9KWwJUzW8bM7mS7cv2X1rAyLov7JLJVD1kzTyyz12DUMvWuHpnJE8EGcZGGY1WMyeV",
  "key31": "65gPwRTW97GCPE2hnCi46Y5aepVrQyKJ4e3GQo3J2dt4TwsfPvhGGpJ6GepyceqgVKsz2RTn7QxEoEpjbjPsTf1e",
  "key32": "2PgYQkjqbkvZrQo83EDm7ZW9gA9xKD6fCBH64pMtuaWr4MDVu5pddN1BqEKtJdqr9FQ8q1cm8RZYYwhzRQoEX2v7",
  "key33": "3RBTXETYxFbCagVN49TcwzR1Pzj6G9k2Erigxpwx5HDdSxxd6hfdHP4KuE7XjjxVHsFc6sxkQ4Ho3BPmacRorTNS",
  "key34": "5ZibzCSDuhcxff87gLdocc4nxXLCsVcdzwT8AzenXdKN8NyFpxLGz2d8dnPKJDcX4k9b1tNC7tCWLZQJjPere6Zr",
  "key35": "2fadWDQQAcYqmHZ3QmdjeF5t4PXanEBPeT9kEsmBnTMkBpYaHVZCeF4V67r8L5XT9bCUXSwD2pYrRhW91gA7S2d1",
  "key36": "49Wx5QjKBwMm8dGEL796UdT9r245zgaGpsWQqr1bEaprtRmKzQCKdWECucxeFe9BFvK7uv412AdHPtRsf7gR1qAM",
  "key37": "47PY5taCeJNQEtG2mjCUicTCcvJGy3tFj7KBd2UZKa6nUHdAx5ZBFdvKbk2qmpsfrGs3B6sucscoH8prJAA5hWtW",
  "key38": "3EhKxATutAQLznKxgWudfLx3EpvcwCjmVrM1bbwgjR1sHAd3vGbgo4PzTVquPdXAXwLmTw18xBwGBVoLzHPxzE7S",
  "key39": "PL463JHGCwukfm1FReRaWr7GQcs2B1kfTvyq27NQ2PUt2NWVQ7WgGm7wQrHArQHNihiWCFggeEfKZMUUUu8D4m4",
  "key40": "5aEoPZAwGmDxRMps3WQxJ5ZwqSKi357gRGAZ62cuYomzq9Umj5TFxiJwPrRK4kuzpqASr8Zkv378YgzfXM9Q3ztk",
  "key41": "286Mc4RPQtQfeTAqc5FxRi7oarYSKbHTXiwgTE5aoZvpBQQx7MLhZ6t2tCNTGgCZe3vVouE7J9mzKi5MgxFd29h6",
  "key42": "2FF5HQb3MzvgcD2v9LAbihw7gHcqM74nSwytbRi3LC6FbZNiBqNqvUhS3ncboqgZVNy92q6iTB7JtJttokEg3Ltg",
  "key43": "avFgH6gtJTdY4dRwuWGbnzKMRb33smvUP42q5fW53a31sJGeeTuB68Tf6hTfLZKhDPPsip1NVF9m9JZLo5MrAzr",
  "key44": "iy4YR6W7c4SRMoJkqz4dzUS7ik3UYG1ksXe3r6FGGc6aSCvnxMjGifCvf12TYgTkmDEkLpHwhpv6aBVQ4UXncEL"
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
