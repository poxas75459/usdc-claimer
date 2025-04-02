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
    "HVGmWBQjWu9R41cZhPzcubc2H56yUsWRMHEu4ts6iooAj7gsFLo1Z1dn6FSghWTikyBWSGaznmrCH5BcFFUkXTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JU8aj9syKQFAkTa2a2zgod38YDxMRnWPRCHXGrst1C5JzDQtftExZEpwTZo2BYLC4Nk5nbaAP2xivKjdstEy4h5",
  "key1": "3H4udPExqJaakxqWqynqDvkGhvMibyzw58WNgjC6ZD1AuFiZt3qqvhEfhAM1Qe1UbcLjChSB1J1Lqog8Nb6aGHHG",
  "key2": "mJQ84oB3vw7EtgZJjydQY7S3hGa6u3N3oLDvpHnJE4o23t47x7f4znZzKQQSEPD8Bp7DgWVMwKf56nY9bMr7GLD",
  "key3": "4k2ab5Qv6xDf5rv1gBBoKwVzWuVWKhP7fNFDAdD9HwGBfc7nXJezQ5iJJi4bWKhHGo8enw7PwmGiy1YAqHWRsZm7",
  "key4": "feMwiv78UWMewpMWWJoUerok51KMikGrYuFExW8oA5Y6VP7GxbBUpukxuHQDepNGjjS2jr5i59CJkCc1BRBBwdE",
  "key5": "3Xm8nrvVA2XRoPkYv6z7m2avr1PtmwNU59orbi9HHxZ2uvD4jYnt3mUEQEsx8Vu7n8jV6tHZ3BatYjSTwcaH11Ee",
  "key6": "52Rwk4oKYJbD3SpKAx3GcSphHiXacm7dk7ftZZEnj3meNmqEqpcfs5UAahSE2Dj6miifhkF3XNRcD5TE8YcQHm2M",
  "key7": "NGBk24iZRjpmvBD6JfF4svVd2Y4wwQJuWM8CesZuzsthUwtHHqhZpZ1XCSppWLrC1WrzBJUqTnob9wrie1SPz1W",
  "key8": "375fVAeFZdvLH4YY2o8F3fQkfaYkVTT1Sb4WQxX1Hyf4X2cbAJTFF9z5vTBwNzLzdQwrsYd5suLX8pCjg1thGJwd",
  "key9": "4oT358vtpAksAVUsohMHtNWhinKRm8KXN4RBZodwTC5DNNhLwq5LhxpgPrpsUtQsCwDbtfR3U19hCxZZoP9rAmVw",
  "key10": "3AKcBSF6w2mTSpBcNo4jX2YMeXjBT6yxEgzkxRuUonXToCeNKzHMXjFvDta6tJoaJJLR6JTtapbPMwgpUQs1gtcw",
  "key11": "vpsQEDCTnEMBWioctfZwgivapmNvtbUgdDsWCwoMis3B9Y36kFF8d7sQTsTv7FPfGPKeuYb9rPB7eKFGGvScS8e",
  "key12": "3mYbZQt2r9SBzevJRQ7cJJWGyFXbV8LgWLhzmWs88hbqjk8h3BkiNsC6YFQcZRJsA6eCkPYec3fQZ7pNxb7k5x2C",
  "key13": "2gvP5vcpJ4byHit4mJHCTjZ1jFvXBSSVUc3YVkqJm9US7iZ8ts2eyjHsbet99nu5KNHstxmNMocMvTKCbqwxebCc",
  "key14": "foJ23TmfFa8upM8BwdYc88k5UwBYej7pa8SZHQ5SDe7RmWx2Ftu1sqN5xCDg2yG34o1MhBtKAqqv5V1qgzjJteY",
  "key15": "5sDtsXYZwaffddkuZvqD2sLP5fpQMJt5Q8ySZAZZKdMjrfQa6GfN35uDhuY3M1Qjhz3TR5Erx1FvqFd3qY3uvxgq",
  "key16": "5Lk31YeDzLNAKSo92iWEEimb258TwByWgMy7AdG7Jria7vFEiptzYSUEx1ypcbnkseWHAvTpsWS4XucQRXZjYbtF",
  "key17": "94KZh7C2QxkfD3ZtzkDJB8xN4i56HXhMzm2AY1htqZ66wgvhvxz1DbGGDRSdaCzFqe6TZHvAcxKW1vHjWsnidTL",
  "key18": "2skn6v7LeoXkaqnsac47jVSqF4VhPWsdkGVS4EgtsftJNWRyLiJaf1wsAsWADxTG3LgiWGktTNmS3qhfXKsv5dZN",
  "key19": "2XncPZ3tVVVsdpKbu99eHp12JeDg5fGkk3fyHhAxZgp6UCoty85gGw6SKB7ynBLnJ6afJ5eQyM1yNscnLCiZmua8",
  "key20": "2ywKZUEyZH2Tp4Rx5t8BsmWC8v8kwWKb8ouwaRMZh27Bk6W3ekJWzLc8U3QyM6NyPg8LQDsGuNa7CfZNACjGw46Q",
  "key21": "4MpirTvGxcnVWZzjLBA2WFcGLfCFLiWsLomdPcbBFq5szkzGtYjxEcTFxQ55mzHQrbmUW5rHv575LSwyhfCpo5mv",
  "key22": "2MAHhaKPAPYdEgjTYrRSCmE6SUJEY2fa4MJvejre32hV7fBaTW1SdfWMpc3w7oBcZeFGTZgjSGxqWNebBCHx6fER",
  "key23": "543GCV3S6FdooMVR979AJevgZSjwQHGhT8T2rVzNmvAe1Zfbt2auh4knnxeZy4eYPS6GnQR6qBWHaDAGv1UQ3A1P",
  "key24": "2VnfHB9C6Xot1ahD2rq5fvBtNManwS2FEUmGCdQte4QCFuVBZ2Faksd6Ggio77aFX5GjXZZDs5xr4k4bfSkjK8Mg",
  "key25": "2pWyMQywZkHFdP8mCP2g3rM9XBmnoJmEXd7pY9tsy6u3db6HsFeKaCSBWEDwwBLhLMxHsQuxgYcZsebzZCWRSARi",
  "key26": "pdrejmhF1nDgU8Cb74S3BEfVni1JvnbgTKRKv3qn7PgNXiJtJ2iFKguafaKuFij3KyneQpUxUhCJWgbU4YQ44Tb",
  "key27": "muFWef8ujAzTtwrYgPRfrFQ5Ehe4GWi2M7QM9yQkR1U7yeRwJX4DkMkmX2yGfMsPpZRKMjHi34ryRYEX79H7iFP",
  "key28": "24q9KcxZqSuKaWYET6hayaFMJFPzHwSX9jKqnkhreNVspW6PzNH79CEKWfrdcis79tCP4NQqceekJ1rLNGatUFGk",
  "key29": "52pYn411Jy4jVqS8yrZaP4xAucamDSkHXTqkxNCD9kaUqjb5TZzVENWSJq8dzvyUXdxVcdqavRspQu9WbPizphdj",
  "key30": "5T517vg3FfXTqLEHTrpe7Lep68s4ERwRq48DhgpwHb2XWLPonexqgB9NSQtoTsYtv5VLLH8LVHfozdfKdgQ8qCTD",
  "key31": "tA4Zg92Uaf1uC5jqBoCVvuFYdopxerKvQP6N326FoG6PeEMaD2vFkFFUxEKwdoivMTbqJE3QyiBrFD2PteEKTU7",
  "key32": "dpPJAec4geo6gUXjmeggxxap7DvFkca656uQPg485WVz1ZcxDoevssxJWzefAcnJzeCRfoHuUXjftqnYhWLfPvh",
  "key33": "3PfPwzpF5XYZLuBhDyvEyTHpM4c4BUFjCxvjSVHScTAgVR9modY4D9h951WTXgLSfxZiNECw5QaAc6CvR1ZQJ457",
  "key34": "3xhL35k5sK9i8e66cTJYpsHh1nVFCpCxpdz3zpyKhr4JKNMHzU1fvUgJ9FmxVY4fdmJPtyGVbFaNdgQYoE1aPMTW",
  "key35": "4AssoPX96FSfZcQKtrC41BrFhSF4ZUTr5JBwZRXcjyrJkegfwaskxuPMfVGYJqxgJhxPBi1C8Fx98HPLpvz4bb5n",
  "key36": "eM1SDtBf4FopPVc6JTx69x4xUriqftDjm4juuusdWFVWEmzxd3P29pHNbpdoJkwn3cBdCZGMLZ91bduTsM6hk3g",
  "key37": "2v73wZ6Xd1kTZ5rEzSBGRUu7heCxMdLjN7277n5oPNYX9wkRYsr385WmdwZKttxFPMqRW6HYVPXw1hXdVHm6m4aD",
  "key38": "3iy4xcABpiZ3RUQbZeN3Hwh78TLfP1FPKkHDxeJU3YWeRPAdeWkQwP3ctTLMjNB2iiZrvoxHxafjJrCZL6Z5h99G",
  "key39": "42QB4N8ZWUXR4gedxTM9U2L4nfLXW1wH9rYswL4rhPuyeXNYXbtMjQ8HjytYmiUVMgksez3prQDikjW6oANP56sU",
  "key40": "tVrTpSugfj924S4inpJqWqDFpM8jBvbHyYYJgskKfCfUTpVnGrDCmPXoGPMcM4FKVVhhMFv2uFKEhdZDUWoauC2",
  "key41": "4qy2EmZXEpk71AmnQt7tbenSgcJZeD9utpofZrd1SzRsieRe3j5Rh6snQ38jWMDdzq9xM6qDGNFB3n7wjX1ut2su",
  "key42": "4iD6LVbGpYpyuNyZL2n7tSuLotcupxFb64NVKCCYC2yqMJmfa9E3XvWUZUuXwYZW5idu4zkDHNh2s4b42wXRDkhu",
  "key43": "2fPYZVdeTi2fPBVqxKSrr4drFLp38oJCX92SpiGTcZYcYycDWtLmC92NwRfob77hUrz8xwDDet8KwPikiaXL99Xb",
  "key44": "66xoEXYPuY6i7vqNrWrsxC7q7WMtdL3nRVNvv4uzbjGf3fT97EEUHpf4vG3hUPdw1kWcJ2u9iE3sUvzswxzNKYhL",
  "key45": "ymW55YxrvR3JRi8MRU51bVu4daxGaq8LywcuTpVUKwdyz1HYnmfe5kSZRT6ekDfbGu8CsgC2sEpKeErhT6eY8km",
  "key46": "7xvMHVLoqtq4bgTWoGddgaoVmwJ2x2p49gZBSVyZCC2QPmbKQXCi1NA6Y566GvC6dRm1KqZaanWZCYRXUjpKtsw",
  "key47": "2kTikRpJWmDDc4mrE12VCNGMGnQUQhMkiiVVTPkvDyL1HeDiHaAaRRj6F5xBn5XhGMj18uqppZow4u3u1BsM8bkY"
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
