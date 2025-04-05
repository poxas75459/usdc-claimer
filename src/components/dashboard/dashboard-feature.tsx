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
    "4PooQKk2VFKPCGtTcBV1PjFdMAZF9FtJtD7jB7JD4SdeU9eHFZHKKKgfCuo39MU7HjUfcr2Km62EgPRJpeUe1F3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HULAmFXQMaH4TepKrLqFYzsdLeKBfvEVornkmfPqGmVupwzfygDdRsfikrAtbTAxx9xz78zyGvNDAT1cBjnDeA",
  "key1": "jCu3H4NK4LbBgqm2qq3PQH7X2KwYrzR19KY5Gqq7KJ6Hk21DM5vo6uK7i9AmbV6tDdvCBbswfjtektaQ9w9Ni15",
  "key2": "U3AQLT4mWKLwWLfBXBbHvX2tCPS8yKVSwZJtGAvr67VoLyYGBkxDbTJVPtySBXKfvGgeRbfH9cHy6jWrZjW1ArP",
  "key3": "5rahJbBK8i4JqK9KULPrEaxnjEGxcBHC8v6dbEMtzpff7CSYBGek2Uegk5LSyicrTT1x47KW7jEXpnQkxDJn1sDu",
  "key4": "4nFWckkM1ZSAfLhBcqXn8CoPfrtGcmN2EvNTtTUGFn9J6B6AUt4DA9uUqibzsPKtxLwAdmTcKUnHWWYn5qrkTEr2",
  "key5": "2PbexToFF76tdXWTxQ6n7eY5bJRKnCQfST1mWj222mHnzvbzN4oRvDWsrQfVqqWYM374TV8Gq8pApuTY3Rc6khgt",
  "key6": "35EB89HfvbEHhvEf5RY7sx8j94T5xpGH8KinF7mZ2MiKjh2PN7Qz6oM983AbbvYBTtEgM9ZK16EQpth2zAUt2kUw",
  "key7": "2x5zyt7ENvpSxztq8gig5hzNAphsAAcSyrVEGkRZwtMVPajJ8p7ugEFNVHvnLWR3WTANWabEGWsLYqMc48qcMYuG",
  "key8": "3uKooCekFaNkDdM8RrpJczGvTvGoG8roTCYMtqwMUXJFzUzxz3bauhQywcqanxtVQGiE9KBt18ZkVEyV7TheYu5A",
  "key9": "23qw5p6b6nW52J9cYNc6kvAZnvw56wCVHpQ55d1hm6wyHxvAEEzgazruBTZnzCrve8gPdh2M37C31fZHvR1guSQM",
  "key10": "2DHMgEHC1L3J18SpYe3oc4kpwXRM3pKMd5bLudGxc4xHBfNPG278PTEUDtj2Xe3MXAsbe9ECdVA3kVS8WDCYGXKV",
  "key11": "5fGkdAEkeoVhNmEBdf4n9JdZSYE8StiSLfhrWMkczt24DX8FmhqLimVr1EDrBtQr4AP6BLu34GeL9D55aYcyz9nw",
  "key12": "2P3A5ukfkffXAUPSJgNUZ4u5HjXrX7hifgCQ8HMeoh4SdGte5PonwdwPhi4VjCVRrFkz26nUmSybAyNAm1DBhEuC",
  "key13": "5yoSZVEu89dmBRnzGTt4x7FtFAxXQTjJzn9ym4egqnpknojCXFozqJGzyfr2n4cDvPRewe5YUuTqMFYnDiy3fmHL",
  "key14": "3vHTVhzWHFcXFsN85tmTpjCo4H4bTZoce7ZPntBT1Ekvu6fUmiZ6RwuHrhJLH9BGDSQww8MLj7EQ7gkVRY6h2Ekm",
  "key15": "SzqGRVM7boGdLuXmpnP46FAfGfNrRPgeRfTy1rgff6GEbhHwbeGEvvpdukUtfBtebC8rEFBCRM3fsXwPpUhoLge",
  "key16": "2AQQVakwXvaA1MJd1zbJuAe8ujJqVb2v4dYXWsS43eLqEFWLsURX4nMpLRPuMtaqugnYpfx73e47oN7YzVw7sLXo",
  "key17": "6YUxmofR7mZ1oNwAEFYaMTLsecKMaMguDssUfbZvfYDS5RC9caRh78KiDbfaHhSSKDrM5CSGkWTj72ZuXMp2V7i",
  "key18": "23LBYPrme4J6P845JKqFTmYMyiceA4fXRW6TbEc8wQyt116ZYjkuxXaGVoNzZpowQRxnRKQDdCbkGZYgepsJDrPk",
  "key19": "2nAxY9sEAbUvzsYZreXmsbHczTn4RwBvWUbvL8Sv6KouTLdXQ3HTLSMXe98gc819pe9vueyToZwYkhNHtYqDAb7e",
  "key20": "XMKmH1j8ycX7u4DJCuJK23DALSgzowKkNULKjrjrrSahCiyE4sLhaaA2CLN2SNr4qchLjkizD7dv2sc81fyJ5jU",
  "key21": "23bxe8gAp3KUe2tc9eyN7bdGChYNRb4DbRTxuHUsVcNCnpYaLW25fCBTyhu8XyrnbgSbYgnimgREFgLzxqWP7oQt",
  "key22": "3AaZbcrRoArDFKkasvzaG9mUx88rC3RbNW8Zjue8yTze8KuDHQ754x28BiXsU69X4kVndWPRhjRgy7u84SRpejrP",
  "key23": "3HKWZdqyn4bBUQviSFEd6S4FmuAXDJ7HnDNrV3npfpQyC2qmN95co5yFfiowqe56nzzkMoFzJYrKEqZ5EsKcFuW1",
  "key24": "w9b9qcSc3MXsYU3cLB2QHwYaUpGRth1D4rEQLoPFVqxx7Ys5CBuCg7DtAo1BFuNGUexmv8W6Ksf17YY1vjjhv3q",
  "key25": "269FaY8PepMq34Puby2LGDck1ttHU2iBMegguJMm9USqw2xgWmzxPtEt7rLTyRZCncw4W7L7wodCjcgy9iDMqLzD",
  "key26": "45qioMUptDP96Sj7jEGLhf3x3fuW2vmYd5gSYoEi7eHvZmwH89kq67WWPVnGcB5AWyPjy9sTWF3xQsMmeAqPyGMA",
  "key27": "4uGeQhKNxFbf4J3DxtYsQNtPJT7YiyX6hnu1AwqQeAVWJ9ZT3hE3jUTAjXuBDDB1oJy5SW7kEawJX4R1jmFg2vU",
  "key28": "3CB63jJJfkKSbJbYiou4ahQMTvsCTr9VthNhEsgva62HbdDPFr5eGSj9rCVE5NmSPdUkua6GscAFT4KGk8Ah7iVd",
  "key29": "2JEKhRoLaqKaUBHWbMoUSwYakDpd94NehjT9v5fBG56863gJDyK2t48uVummm4GHkQERZ6jrP88gD8hYPgsNCk8J",
  "key30": "31wnrhjPWFsDzzwQFXukEE6t9b4ZyXfZKdbDFcjAefW3cttr8eo9zYsNZvK7HxhiC8FgU7dNQQXTS3PXqnsaYsSy",
  "key31": "5wqRpGJnDBCcER1fQGRNFNKcW33SnthVBMF3PEkw3MtExiSpi9sCgJ1nijghRhxa62vtBSsqLpDhDN9bv21jjA6e",
  "key32": "4Gbi3UKfUZP8dazCK5NdLh9abqPyT8JCSevjC1sax2GRXPNA6UgQcELFef8GU6FJHcVY9zbEUFCh8CnefajLdy5q",
  "key33": "3Nu2HtYyeLHrJB5696jbY5Be1S29pM6aso5zvuMDHDW68GrnQHMUV6ZiJBkDERGgTjKV5A174fHwWjLMiC7M4dLe",
  "key34": "3QTHRC5jsGQbzSz2DZQ6CZ7qFca2b7Ta6MrMnksXRGAU4kJphw8XexeFcaLSL5GXZRBJK5Mp8mDAjD5kFrMYR7Bs"
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
