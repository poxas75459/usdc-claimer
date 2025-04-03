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
    "2Ric542UoYfKQD55445kaVtsetQ4DRwvF3zAT1U5Yk6VPNMLSkVqA98Lvk9trnjrbmQrbUvMPR2GiJ1gsL8rkAD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwkhaWpVwnqZC1qu1ACvttA6pzz8EaFvcVC71wSoFVFWxYox9qYDXeW16CipjGnL4GrVQVucXHzx4PoqYEQUywY",
  "key1": "5S1jfK24LXwCZdDUctNp4UNkK4WyJJ7bbsCATxgYcFzHkrjaH5o42UmJs93cHdWppk7YEQnw9X3ESVdKJT3MqVY1",
  "key2": "6sRwi1tjpre9wisrz7kZiV38AkTTkH8FxLjfeHukkhMVSYbyNzUoshmAa2bR5HETn9qEu5cL2oqYb815eqPPaV2",
  "key3": "5g4PrT2VwFb6UbumQLszdwhwEM3qfgxk6AUNeNTs2XmKdvBRWE3v1uXWVqH2mcBfmSmkEtMhx3aH9J3A2BXRq6gE",
  "key4": "5KsqYrd6VJevhHahxK7i8tKEmKhH6TNUEwKFU7xN7R3WGp4PLb1YFzfsMbKQtDuMxyV5ViYqBL3dCXF3yQUWFHpQ",
  "key5": "3UaTghRqgk8Zv5eGoLgiaAvBct48mQ6ZfomftC3gQLkGu4PEha1cDdUhWFSr3bE4Dg2nogtcHXnmLFDJHyQQ2Ro2",
  "key6": "hVybVRK6LkAiMRwkQGCQEBSxrGxii2MYcuZHrdtKNPxT8MgrnFFU7WYicf4NPefJQiEJTqRgcPHpAyVLhbLw1Ce",
  "key7": "2aWczfb6jWaZsRFRxH1aQyka6VeNkdXmFkkrYZ9Zaa1CSGhJ2VDXpZQK89okYMGnoraZFAgPavCjcrrhJjGJ6MGK",
  "key8": "4g6ej5XzzEuT4kmY4rxPG3DXStTYzeBXct7gTRYSQeNKEnsxE1Qh1MymjJFehzbHTr5DQ1MGz2zHQGnpGLEVYW92",
  "key9": "2EtqbfezPn1aM3JfcdVJdfNN6FLHvDYVtGzNVpcTm8uuycPtud7jD76QpN1i4P4HXPBedwwj4tvbnA7BKdjRFSds",
  "key10": "5VS4BpN9hv1EokUUVDBkHxtZ5KBMyp6PZmpRpdGxoqrj78rb9kppPoFDkTUZKKb7QBw2v6VeLhkhu45rjXcmebrY",
  "key11": "4Fndwwk6eQYPyVFvguyu6TNHUTgs5ChUVQBHeFZMN5fkafFTMuuzdpyKQbMoaX2vWhCsF6eVxJPYEwBxZSVAZn6h",
  "key12": "4uidGBfAVRm1zoxTRenGVtM6TsiwnBxdCzYRtGTnoV9JmMhh19SVFUsWQdmxbwJbre2sxYzWMsfUnqVvYp5pEJWi",
  "key13": "4CVV8JbHeYNVX84fBCEmuqo3LoRuiAWzmVVhqRdV64GGqMisZKVykKzG8pRZLPPt7HYsBF8vbi3rr5XGsnz581AD",
  "key14": "NSZYAn5TeBbY2ztG8Dk4MK4UZc1W4QMmk14Ks9y9P7GLBru5P4rjY1FwXjgRBKJSxrEBLCc5vZhaUJLfoeNS22M",
  "key15": "59syBDS4b76tZjDSHdrE5aZ2FC37W4Jtf1meU7TbeqYcpcpaAbT3xZz8VHVnFTt8Aepn9NdM1cX5raJsQEBGHipf",
  "key16": "uhK5V6fn2E4w4nc8hJriFYeExJfGaBWuZaNDgwNZ6MMjR6vR7w8tXEv3k9a2ejEAHDcyBiBt58Z2GqTHiE6SdjD",
  "key17": "4Nfq1whEbUGeqS549MaCVCV6gN6jrFEbpskrhLJNNeJR1ebnwLPV7PNB4AqqroohAnecHZWShk3s9W3yLZpm1rDH",
  "key18": "3Q863kVzHUG9Zrh5uD5Q6eBs4rBE6UsKqoYPtVX79Ntvd6rSMAHF34rnhcVVdi7jmine4v13hGEoBL3BuBM6Xydj",
  "key19": "46mt3gxFLEo5ZwDZtQpbgMaKgcXwdmjawy8wLfiFrMH5jos5q8TECq6XFhBrRSqogHd1ofz9Cz84dMPYfZVPUbZm",
  "key20": "46r2V6Dgag4SntDA2794j3UNwQNLTKdrUWx6E3v5ahUW74moaZ9icQDhFq4SUS9JN2xg4sUudL9vjqTt8aGwvLqu",
  "key21": "28vQWBW3CkUYpAuPvnkvSkcLesZjZthRh8QMHiqDmqq5otq9EEtonH4bFjcNKjjk5ZswtF6nesBt1Vs6QEsrz7Tx",
  "key22": "2NTNaRUp1pZ5HgbDvd6HgoyGS4GCGcqNsPNapHnr7VjwhZWxGktkZeWwL5PZormi5k3vB4KFKvFzvhzaA6HULg8N",
  "key23": "2nFXV3hwPKLohETSTatF5iHtPrZsTZaTT7h1EJgWn9zD8eV9Q92aB4EJyavaDxKpFU2StmNuGVz1SVkWnqS6VJKL",
  "key24": "2onBQNd9Uh6v1jg6rorXCBmZ9VE1gfPK5SGXrqCgmTL5fmUU3nwEfVMcC9ycZPaupNimsLwzRf3o34VG3EsWv23F",
  "key25": "crPEKrQqaeCixRjYWGrF45Rm8R7i9hyF5n53LUe3k4TPCMfvwyz2WuGjbCFrrLvp25V9gPfZyLADAvPy2ge5hsk",
  "key26": "Z7vykBwEAPTpynJKPq1dYJAJAczFfQz41bhDuiYSo6T22xN1m2RLVkv3Xsrxyctew5hWMQVmfPXCkSDUXVYkR3T",
  "key27": "62Qzy47wTXkBfvKpCDT52GVhQWBQXu71BHcRSn58iJY5zio13fDTrtkxe17sXnMW5ywgZ5qK6VhDLBeCiMRfJjFG",
  "key28": "4GuJfdHQwcUbMifHwLiLyXxa8u52aR4y6wqbjESFitsQcEkjwercCv6FGjhutLawggrCx1a2ixBLftA6DQtb8jpm",
  "key29": "BqT5bACSuUa49kcfjtgZtzdtYSqtEhU4JbHesnnRAv4KPPqG1zp4CZgf7dEpx6ArJtpLCaGZNwSs7Y9gPzn2UjB",
  "key30": "3FkiUxYsxYmbdFKKxx6xSHxL7bhxAPEHZuF5QuBcGc8NvvF7LBY6gd91pWkUxurqaif2TAvk1Gc1BXmGGg8UJfeP",
  "key31": "4Wc4c5NBgTQQTJFGuoCFWGtMK9YzNxZNUHicuHXaTK24Rf9XD8WgzVakG21p6TK15NafTxBJkDMEB3xy6etc1mHB",
  "key32": "2MpFcX478zHH5DZp4ZakscrLU3X2hwjCai6phhUAcQn4xojLa7ofHGcJ5SPHNZ1vkytMKtoH64DZ22CS1CSMmPbm",
  "key33": "447PCKSn96X6edXp2dz1wdMfzxVE6AmLP3zjGdYRvZbeo3d4b4AXmTUaefyBQvppw6uv3vkzxWByp3adkXNAwgRE",
  "key34": "5ZBuspxCndbZfodn8txm8CVxQzCBuNnV2dokNJr2p8LTDSHEEsWbvHVb7UnVqmP2qcW959h9fA1NrtaUVaoren6B",
  "key35": "jefLBuYEqLBDWcgeaFTCaoNMvMQNYcPU3CZCAeihjJSys2LYF4q7FfuoF6fagwuSLVDLaDbyLfLtTwF57MwzMcH",
  "key36": "cgNm13UnLKk1upK5uWjfzLaj3nRPUpjyRfdTth7WCb35TsNApswAK2KJzKTy5M2Y2dCQEQDrvEwexA4hjjeC9p7",
  "key37": "3xN5a9wMzLpJBz4oHyLfZBkajscWFnLj3vPwz7UeM6vnSu9y3CZV1FcHSTFnk9kHLK6YD6jYh5YNnu9TSHsZvbZB",
  "key38": "3AUaJhv1GTWJGySZBtdkKBLPqL3W2fYkSDyAb5q4kCCfTwZa6icZNNWfKLAjv7yKqe7ktCXJLLUGNS9KjXaP83u",
  "key39": "45SYFwjTT3xbyyaNy4tKoVzDnaPSe8xbLpxNuih77AvZyhj9LhvtCBAhgNfMR3dDQS7k73yrGZnmb13u3FXBT368",
  "key40": "3ufjB4iNiDPtmEkn8mM9n5yJLR9GE5fRUwooPsQitCAhpr84D9jHQypZ4YHhTYH9zN2qQqr16x6vbDPrAG34qgmR",
  "key41": "3eRBwsYQGjDyZCDXBf7Bmi5fYoUwftyXKgsAUFR4kZX2nju4dhbLaqeBBNjCHfpiheZRgFHd4su71h3jJmFdT32p",
  "key42": "39L9cYh8MGHQB94CN38DWbNU5Aozj2nc1W9kr2yxy3Ybd4MdVmAG7yuGQJZStTJ1H23Z9CS1gnQeM5fjtxLYLLob",
  "key43": "4FJxL1xZxCRVPVRgk32VSRsJktwVaEQG6tVtXAqiF2gqBxQJBshwXNMTCkBoPs3QFRY864KDYmP3rhmrJEJ5v6TN",
  "key44": "2naDqWrxNVDoD8odVi83UMsqnVEU2vh4QfriF48TgtN1ZAwmNXBCg3t5VaVCodFrk9jMCThj5zWsDeHU4pnMJf5Z"
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
