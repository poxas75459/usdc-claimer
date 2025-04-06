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
    "4HayMRPcw3rdWhg9ScigtmKrvnr6ERZD9rSkBu3GbwkwzwpT51nhuH1R4nKMuAJ4WHFEwF45wthcXYsE1dACvXg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1RbLXndaX8RzwjQcYKRt5h7FnuP4bXxufRiquuNm32HKc7NWPynMLqyNeNkHnRUFh9Md1jyGJJy6qkvmivjDZ1",
  "key1": "25tdQSbCSMy5jTu98epT6VXejV9Lq2QiAdzyYjBHmFTKsj3VPYeb6zwBJRfs46vajgFStEPsduY55KDVfzqNrpbF",
  "key2": "NnrrN4C3s2iQVp6ajAdtrdFeM79yb5DW4EFtYq4ftDzgjBSECm26WgN9NoUTgz8aM4bT6jMpK7we7hDYu3RTNy5",
  "key3": "1gurKYASohvf1oFnYdET6VKux2PGmK4e4k3fWFbzap4sca9hB32oxWPVd4wrKQEszkVekuD1zzdo9ig79Lh1jVZ",
  "key4": "3wo6g92gZDEWrUVBYBt5DSb4UjYHtutPFBioQDn74MV4Tvpa1Wvh5ewASse33WaJfDabbuBDugtitaWBUHR3BSng",
  "key5": "67rZoewSmLqcfkjcvxtGKwRzCAmHZtfGv3qYwAi75Dvc2pgMpTgCAK3gGeo92SEUU6hrPn1624d3HpaTyxwZKUCk",
  "key6": "2EuoCU7SHjNwzKKxMx2Aa6v9FJXAKN4hETy6mWSVFmjsyxSJ83vdowkxqCSqEwvb3zYLABotNPgw4PtWsHuEfenu",
  "key7": "2L4Rh1JxmFu9Q5bD4Bh1wQBJTs3ajA39SUkhaKE8JJGhFZruZjtzvN2JFWeKxBcW6upsR6nGzEjNGRyCWgKv8rU4",
  "key8": "5hpwskEQd95JutX7AFxJwNb3oJK5yWLptJzmnMFJR9dVZWVc8ubokE54huWAq8RVwfJL5E1dA7LNBUkuqs2a5XHw",
  "key9": "62cN5iesa4uQxPa8QshetqffdNJQuTWoDjHbfyrLfdm8S4vvZT8howLJ4pe5njtHj4sLHsPcAuCjwCPhN3jsKPtf",
  "key10": "4t8Gs9rW9VqKV3fQK4G5hJAKcN3MtZpFtM1rY7XHqkj714Sqd8i51WVZDae5Rb8pyj5LqnaTMoijNnbmP8eH4MUy",
  "key11": "3YaAbPJs5NqBHvNhX1HTZ9hJmXKUcNnaU7n8GtaYb3KenKSg3nYTGtmP9Yui4qHskaHa346CbxoiPN6dWAUFt2xk",
  "key12": "tqhV1m85iKN1NTNZMphUxtxmtHzzszwMr5dRr8JxSpNcHM3mAJ64tSyHkuS19MWcWTjZGt1L8H72nSd5uif2q5f",
  "key13": "3vL4boUjudTqC7iRDt2LfaPktaXo32HV5JznS4yfw43hb55P59EfwoJf18pA9uYdq8xiZ8nfMcvrpZqPWR7w5PYL",
  "key14": "qCqQSKG571fhHG5VFKWJ5EsJcusA841JnfD6AdGmBCfZLfFuHVznTA3fZAdACDoiVDE6eAjLrkNgXh5s1swaEzf",
  "key15": "5Hi8f4sA3jwEypmrLS52AensPi93veubDPpAEwkn1yPGLbpagLa2rs72e75z2vbMzSDVQ2prPU73nJQd5UFsb8jy",
  "key16": "2KqbgRHE2TGzzGij7ENQoNxusGNE2qpCe9Tz1cyT4cFsYfpJL9AnNxXJaTWADJDYJNkmNvjeGKUdDWF15qUUBGxR",
  "key17": "gYUZDqXCdJNJoEcXGMr2Cn3Hx9nBX4SgLJJ25u5VXxmzPgGAfy8orFxRwEfD7FSyVtJP4gRVpUAHanDadNx47Ln",
  "key18": "4qNHwV9XiZs5er1txVwKa2JhDqUj3gKAHFJvMweS4etWoqyhLZhF1BjEs27NhmdFDH1RFUjYdk7AZ1tNc1212GyV",
  "key19": "3ZgMgiKqZNoF2pLyKLxq7QFmPScJ2AF9aHpZvURj4VBM7qf8cgJT3GFjYWTn4zzKjxCaQwjeXK3WCbJiUmMinEbB",
  "key20": "5H2geiQ8eeWcGgDm8FHWbon2xqin3yhXpVmthL3BcNpDsodmBXdo7nTro5beUMChgVzYR62qnnUXDyssjhDQXeNo",
  "key21": "3GPpe5ukDjVhmLhxLw5kg4hGURsZuXzt6byYzk6gzY6vaLNTHnKaCHsdgJtPZQSJTDgMigvUWhVusMTaWdUxZQiE",
  "key22": "679SC7ZqLFA5SgFPmU6oaGJR3XK7srMTxaanmKcDygxuLaAt8t6Adch6cA8rJwJaxnmvYoZZyhLmpRQZbgujpCN1",
  "key23": "2TFponFPYbprgxnX8HuP19reDjSsiSg8Pr6ZhDnyckTdGcSsetPL3MzW3WNKx18nXatKY7n2rZT7JewvTPdr7YCM",
  "key24": "xC5QbSj3C1RGndKVQjDKWEZufjcirvcEkHDpm3XxXfpS2bM5bUdzzVqjdAqbpacRBnc5PkBD8Q4L742sP89xfbG",
  "key25": "67NVg3QJB2jbPAhjWsDuz5aXd9UDDGVYUtCsHy3PthwY6uMW3k7r4mzq7azYxaD1cafeTiGkLYvTQYjgHstHH9AN",
  "key26": "2ViEuTYgL6nrxh357xtmBr5tkbQkSV5iipd7oQPXQDCPSP3VDHCiyh8mHHVRMfUhxQtjPoKKnkTgBF44Dup9zXzg",
  "key27": "2SLu9JPdNWN5XpsL4zdRMuw67XmnAz4wCBPYvW6WBhGJQUokbjY1V9XjVNnSTpeMA63BKT5CzU7b8BGezMhTqoAE",
  "key28": "3ky17wwbkgtmMyFTj79AmsyZk49fcUZp9sdppyaN98PE7kyqDiJzJ7i2px1xxKKJGYyn6VvKjSWeG7k1MUnxJbt4",
  "key29": "2uLkoVTbiA1xTvMfirTAuyTpaZhcAp9PLsNJXKybNwS2M557CZBmcfSrCji9CnhLNJ1tSQpbSnmfPYBWBdabEq9u",
  "key30": "4gNxo5GphwizjC6dCagEWt8UCRYcaRY9yk5a7LiS9cEAMsz569sNvE8MVoQ2nddN1Ycwi667marb5LAVrjifyN6j",
  "key31": "qjSP5rjvKaQGQbHrNJPiYb3mgrVDbB2SY6q1L76HGCRFSoVN48v3CfnRMaKSSHmsnLB4rXq4EZfmf3WBZjma14k",
  "key32": "4FZkpUfwhLCoNu1f5StEK9BEYU6S6q1zRpsXAxRkJth4WG8t5WzxcLQjWrEuNgayuzxTi9HKSD4a6sUeSdTeGPGN",
  "key33": "65fKroAp1kYo6EitBvad4rMjevw5ZkfvubTkvemnbUgt6Tr6S5ncCG4zAYWaAR4j7iUCkeApUfAodRMrXNLaxQSw",
  "key34": "2woABz5stG46dF1SXiv21qhwPKdLTzSGaZGBphMFuKX62eLZm2pbnW32PXBpbuYHiGH5qF4WgQatPUaXMyoGqbsh",
  "key35": "2Low4m4LrRMg3uGPugUEH17fR9KTS8MaXH4VH8R97jsUrfeAhBhSH2FqBkq2wcvSKnDHxwq6ZbFHX3XA7TLMAVTV",
  "key36": "brWoodMMUyeJQEQhKLhUUki81Dj7hNsvxVWyLkh8okAto5mXMCcnLo27mpcLbg2JeqPEdgUHFWW2UU4ddu7eAY8",
  "key37": "5KyR6tnr3L3AkDbbccP56PZJrXeLm8iMCR6Gfx1rHzFqRpM6JUsZSKyCBNYXUVLLWw3fpigkVgGXN3WoCnDM1PtJ"
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
