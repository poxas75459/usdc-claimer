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
    "33i893yAS6oro3UCEJzsyYW1VP7NxZARvMvDU6vxGiutHQZvUAtFcjYVE9tWqgxE9usmS722mhbhnFePaZkZNbFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5maZwxeXBSaS7VZoJMov2cbYzp1HpnA9bhNDYj1CTb6Wd9mzsm1GTHERCMVTrcGNctUzi4r3QzzFhEt1PuUgpr8J",
  "key1": "4t6CeCqSzwb8FTG3vX9jvYRpkQJoVXqVDKUUsBHjAuuTwaTBE3EzJtNWyB8RmcRp3Wwz3XMxGKEfuPy43aHHvX77",
  "key2": "uzAD48VFJCm7nCd8L3jxG9RhY3xjFTJr4dcf5GWS9UGVTEf7iZPRBHELzf378eqCiJhQ1Ew7D7Aa6Cvb8agfy89",
  "key3": "5fLswonqhxmorbem2nimWH4voVnoXm5Z55597pSn1q5Nfdm7AA8mv7QotztUuGZUgnazCu9zoYB1XqX7NtgonBgz",
  "key4": "KpFBDSpZr24VM1skvC6McSRX5JfCLJn2pD1LdXkZKiSqphUvqgogeHcnguyUv6w85XjhC218En4E9chDJPwhuG6",
  "key5": "3CK8bcLUv85eQ83DsnBy58MbKAigLGAeEtx1CjSGk5YNwqq234iAuNSc8g3MbP26bdWEEk9MvBkm2mUi6cpwxZj5",
  "key6": "2GR8phnBGRTaUULwp1CtkJmFGcNcnSXTEEMWRhyjsqjV8zAygadSYgmmTBM4PYvUvqiNzJZ4rfRVfUBz7DM4w45H",
  "key7": "3YM9j35Db3F7ZYgu5uYZ7AmUHEaTDZpZMXYQ1WqUH7qw6VU8FZePGMT4tAJsuUax8qzhDMz7KWnSh7LP8t1jNBBQ",
  "key8": "4EQV2Y69cgPjASyrzv3XceZPazPSYPrYEfFzfiKQj1nKwrSmKUFbXzqbaHg4zkyVpBsa9465WE42ykaJcMftj27X",
  "key9": "2fGGHfPoofJCQBs4s2Qj25qPVc7zCbgvq51qWbDbpXtA4JgbT5mTEjNDZN4aasRDnDnPPV9apbpzuk22KLTk3uSy",
  "key10": "67P3R3VV3uJRbgEKnfyF4m5TxqA9xznNd7xVZrBKb2cPvPk9Kma2fe5bws3njDzcoKRW71ARZZN4b2q6QzSbbSeP",
  "key11": "4CuagFe9KBtNUQntxENdBwA5o6wLJ2qmknUxCURNuHvej9vMWuNxnihucwPgKdu2wccGWbmZEYgG4y8RaKjDB4bb",
  "key12": "23wwXinQzHKmJnn61BHpFNj3ka2t7uf7ArKiS61YaV8C3DC239MiLPpQ95vRtCEgFfUMyRwruiiLwHvbnmZFcGMH",
  "key13": "3szKiKnHzNJ6twMvNUsZjpZCHwrqbQ7GvoiU1NYu2JKjcf5YBDMDUFHxwxBHCCL3YBhAE8Zc9141hPPB9cuDQfc7",
  "key14": "3KdA6HF4VQF2eoTnYccJCSBF7LrojG9iQKTzzmkP5dXZq1jn1qEKLCa13nKtA9WMFoT1izp7KCw1kkRCh6SrEsFZ",
  "key15": "3GMCDzEvDLk4vMgDUUcjbuLjHbSS4JHQzgqcqM6crhSruQjVYTEkd3LSC5etZHncRbZabcDoM79H8wdg7wCt9UJA",
  "key16": "2xvRPbeqgTe8fX1uFwnAnorZ5ZjtuffxVzmaSLcesw1ZSkLxwtQBYqBwswTidJ6KPbopC2Qb8XYf9rgEginxbPT4",
  "key17": "YTqEWiiids75uMTDnCj38rK6uLqR9zZD5afx7gAfbdMYEFY2qMNk492Snc6GV7EL61PcnHYrxZHhUBMy7vB5hnZ",
  "key18": "3iGhC6DBYHa7mE7mCTkw8Lg7WK7QCSSvc6cvEfJqafCHAHqGNNkCDZGVaf8nPHSrtY9RbcRUXoZbgpYGAZvSzqtC",
  "key19": "4JiWrn2wUEYD7PovqFSJmjMNpG5vF4TvDJHugaqPf3Gqw8sJabopNAyrXLdwhh4Jc9kidSC4DcaJK6oGga3fdC5Z",
  "key20": "2875sVsP41ztP7kZSk2Z1xYBfKFMXfpNK9JNYhQPHV5Vmdad1xjStXJo1WLa5rV2azk1MWzbTYP48iSTKw3ERE4s",
  "key21": "3oq497yNqzMad3mmQa38dgqGAFA1wiq6etWwdUFhtvKQfAKqE67fY19VJUKJBok21WZ1WnVc7FApahJKhSuG6Vaa",
  "key22": "4bQpFFsxWqngbh2L9HKNfqYMoVvQVJpwcszArGA7UsgvU92t6qZhXQNmBTca1y31KCgHuf79FLiv7Pg4aCwLJHDL",
  "key23": "3rAfQHXdhHMdGQ9kj1BbeVYU1JNZEJtAgYhi4UGuo5Rt5LTUtGgPSHVbMFXPArQ1pC1gKzYTxQzSgihadcbytNS9",
  "key24": "4ZhDFB91B7SJCUzURQPAaUH8MRD4E6RUPX9hrNAFsW3x6Jp9xNFifqAWPynTviYhyP3pwYqYdURjBSN3m9mwXhFj",
  "key25": "5qgqJd7T3PjZoTR2p2y7yp2nrupmSnWb2qWePVD5YsTUe7zGvFQi8vhdFNoNgHM3Mcd5VzCQ2UJYARWwaNKLbmtJ",
  "key26": "BbXHTnmTDD4tj2iBx1n6UTt7LmQriuuibZHdc7Gk5kWYxVvELymcCGHj6ajUdJmnJpWFaaH1KEdsKkqEEjE2MCM",
  "key27": "4noJd1pVBSpaJJ4uuVa9YzGT7U5h8rLsLmmL2E713zJXgQ3XRGxycom3Nn4o7rXJwSLzucWWs4h22RdiwigKFYX3",
  "key28": "UVCU4S7rRYCmMX9CNub11ksNjVCohHbpsvkNenEDuJQuZ27o1LvvoN17NothdFcJr8sAo6ksHvYoW3V3GrqGiWw",
  "key29": "3UC2p36eow3pk1tFmeT6Wj2cuZqi74odnTu5GTH6tj6aATQWHUMKU7zgg77RJEav86FXWKgPXcXEQTe7PW3ikE8B",
  "key30": "2rmVEtPozc6Ug4BiVL8uq8e4q47PmsSsgpb6g1xgyUMaCYwv3pXzk2CpkXWxWHhdmwXTcuJvVaeQaxwRT2jpjXqN",
  "key31": "2JoMmmvJ1oFFT5HU6ucXhq5uoS9vttekBxqxvaup8shbKKkiRfRmrcZpSRN9oL4yEjafJGjgjMTYKsXiLG2btnn1",
  "key32": "UDJQCHkgnNjPrd9w12Y5B4PUWwoWekq3tSER5Gj3ziEDDSAff9tobKG7Neo8xEXYBWmgGw3qFMRRLZs7y1W4W2U",
  "key33": "3bfDaTCMjJ4Y6R8dV3gFAZyjRiNoxBTSkiaY1i3AHxhM7aJuWxFu73QTzTLQyaeG6C7cdqfabxysPUsfnNv7Mntb",
  "key34": "2gtiqHoEm31rago7tuBbXEQMVwUEer7V6CZVi6i4c4z2GGXYRuuRduGkktswZJKjxB4Qr5uXwASKrGSWX89ggPma",
  "key35": "5tyzugKPmwZj1qdTrq41Ee8mDtpQcFjnsrRWqE3FTDGa9J2rmBsbmfyGMXo917xkdMmoJg6qhxxRR1we2HYXbpHd",
  "key36": "4etDJBRRjYGaUzXCt4FQTPECatJYvSY1nLPdo89DDLQBzHeLCQ335egSfdo4R4QEGhtBz5Jp99kaAtkv5Zp6kqgi",
  "key37": "dLS5ANjzZqN1qU22H2GnD6JRXtyha68e3ndrkp5Fn6iKc8pr63ovkZ3NFSzBFSUuPKnpPxaxkdgWzzfq8f8J631",
  "key38": "5sgWnagY9XfHLh8iUVexusMtpDN6vs2u7T1boMniYhBrg2oJmvx6P6Km7LJRnjscViVJbuRur16SPququ4tBkdZz",
  "key39": "2vydFAzqdZPLAjnYXYhopcfvufkF4QK9tTGuxbbWLhfVGAeXnLaibhqEBCqQgtwqiU5SnJyPKegPmKKfLJxUNFxN"
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
