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
    "4Nw9W7xFMvXzQQ8FAbCzDNFcdUeKoSepfR1Ah7NyLDKN1QRuNuZUDvBFxCYa76xsi3b7D2AHv1XkiMhvrBd8dU2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JgL9fuV2L9KnCnpiyvsfVnizndGT2QQJZKcJ6HXTisBSSxXQUwxYWZut2nV1Ucp9VBUm7zroLHqMN2VcpgkMzj1",
  "key1": "5G5iue3MSnymUGBGrBkGNB5mdfdDCq95s68kFGA6CKvEhN73tJ9KvRTXduQ2W4e8vwRpzHywrGbaL4YtaAgdPQkD",
  "key2": "2nhau7q5kMDdv2AZzHcnniLH9be8FRgZssYBm64kTsnH8fPdA4GP8Y1oWthSG4MxxE9x3DWLJzkgNUk4aV9Sj86a",
  "key3": "2dFjbXHiNeD11z8ATXHk7DAwyYJcFRcPsMgXvD2VeNvuf1rSxbgXbr8K6DjodTDHPo3bXp7CpYkkQVRPkGfLPqbD",
  "key4": "2mkpiaezPknKDxkbpcVKgvBCvPgZ8HRxLy1m7VZwSTth1m6mN1Af6Mxx2ecH4Von52i1tg62BJXLotoR9ohqzVfE",
  "key5": "3B6yqdJEwXnBcavT4CrxXAn5ohrXUTdRF8CDDc11Kpe3wkhkoE5dGjyUZQ46e8N2nXrsnFj4xbi7vbB6Jn5RrUVc",
  "key6": "nzr2ETFSuajtQ3sPpFa7CTZRyoTB9c4zAnv2ukonipKwJzE8m8ShCfBzsnE2Mvxy1zA9RaKeYCccAPH6QwHEZdJ",
  "key7": "xvucSTWdiKRshQRwWYAKDGVoC3ahUtFHq3fEKCFAFS65gH8UyRsDHTeGjSWLsZK9R3EJAqxLPS8jECkbjNmzKJZ",
  "key8": "MA5HSxX3cfvFkMvcoQtJBLkZ5fVjfjPtH8xEpvRvaHCZo4GV9eSz8iRVhvbVKGy97KZTHhwjg2jhmRviKiWAVvD",
  "key9": "36CXhSieZ7qV8fTEeTGAmgq2HFpLE8U72y9Z7PBh3rfm57RusgPPdkWVSEau7C2q7guuky17VrHcRm3uwExwKG2c",
  "key10": "5FbvWDsDyKnxcGL6oAJknmMnJWLiupkJRdpdQPVWpZ9o7us6Sv7PwYDGw4YUahoZCV77g6s5p8vtG6jxEPN4G1pe",
  "key11": "3NxcuAQfmE8AtRz1YvSHgG4WNVXy1AQPD5AvyDA5CwzgcUcgr1AS7tTeVf6e4CTzh9KJce14xMhecrT9wfDQTJLV",
  "key12": "3eVUbFcVvFpgJBBDCFHXmxZTQMgkSQNYmG6qdnRWzMc982GewBrFF9wF3Eef8pG9dF9qskAmDLvMUuH4f4UQcsnV",
  "key13": "3LnCMofcpZmL3BJCEA3hVWpgTwyH7cT3fAbirUernVbVwjXyyakWkvC1K7Eizrq6M9rjQYfUjvyAHmoJUsPUGf6D",
  "key14": "fiX1Jp9ufrExwft5F2XuSwBK869jBgj4ytaTkCWBsDnodydE4HNMwUpAKTW2rjpKRE8hB7opb2ZxNqzEGr73ZhH",
  "key15": "2UKQ2DfagXvBxuAsZhGXqET6F9K4y6FSkfjuaXaAhK67NLFnAx3fK7717z81uD1Ud7qnzcqtoLhqRaj4Qhrb1bS8",
  "key16": "2wx7JFAwTeEvCt9wUT8E98wY2tKoiMEdgwHJ45kgreimdgmq3Cp4RT2vx4GhKhoiNhQytYEAakfyjnqC17KQyyZW",
  "key17": "2KHdNobyYPv7mpdmizh5zsiSXuHQb1SmZV3dc5dEJQtkR4Tr9UeopuibWkeh4gSp3rWhdgpkG6Dzns4JzcBcvyKU",
  "key18": "5YvuV45fAhDJ4Rwt4cYcsDv5iuCxENZVbbKQBuKQ39TQ5nds26PGGdQph5UtSFnp3Rm3avt25GPpEstY5SGN8rw8",
  "key19": "eFeYxe79SvbrMQ6sRrHrRc6G54LvjoourLsoRWAC3EZJhnG7k7ftt56E4sFRm2N4rfvRvCreofKdn8HjfGF2vAv",
  "key20": "3Q74EajZDwE27PyXUCNuyNWisGNNrAgrFVqFodhLhQmCx1LFQEWopL2RSiuQvxmYTeWqPPVA2LzsdEoKy4UW6QMQ",
  "key21": "359LYT9M5NmpFmjaNX6RTU24ktats2Chmff729e3YwxCz1npoCpD8NqSAPvdGvjhDDuwR2k7RHn4CvmiXcCNs3ve",
  "key22": "991XrCcB5xFHeff4LkPBnfUfSxYo1TamSxD9ob8EZp1XG5xzJDUykxB4CDLV43HHJfcHQsL1iriF9xwvnk1BGXt",
  "key23": "21atjXyTUdm8ixf9HDSZ8UjSBAbxNt5yQcYmE5aPWxp5j4WMQJhaTN7F1cuXw5afabThieTxxfsGNyNmCxSagTsf",
  "key24": "3bJksaWyCx31usX8dvYtGzpNrWvNNS3vPfvDAP4e47ZS72j86LfAKjNbW4JaDpW5K7HcHS7h3SEQrkZQX9pEKgYo",
  "key25": "3SMd6XbaKhPbwXxmeMFpfBp89x3Dbb6XUb1RRqF8CFy3enn1wKXg3LUTayJdoGt1ktHuUcFXEZBP8dk6i22QreEm",
  "key26": "ipwcbn1nVHG2Jsr6V7Q3aUuSpCCu3HqHD9qxBC8TJ7R2W18kwd4DBjH8HDrdwgg84eqQ6kRQ2Eoq8ApponGT9xx",
  "key27": "4AjiXrkomY5npRL4wTiYVpcRTC7PMpAXveoNMKBDgfA2kGt1hjDT7KGCjwUsPvgKCWSVrYe4m2rMGRp2aGmsE38U",
  "key28": "2wZsW6CjiNHcvs9rSsqjYwtgHSEkr9kLnxjiMp8ngMV4SadMvEC3LyzJmSt8vhaAJLxKj5RqDh2evEvD4sBLR968",
  "key29": "2UyULu2khZwhPb4f7dHzZUPGod3WTZEkhsBBvwwqo845LPy9GQNXgtp2bKPhZqnA89dbDUkThvc5omWtFeDd2ag",
  "key30": "kFQXyg3GQQZN9zskNr3ojgEyh16RP7JSVzkimwjggqdhvub9PxmzydELg59McLGnpD5EuEBhLXtG8dpfBcwLT3T",
  "key31": "5Aon9kxKT5djE1nSFmKnBV9tGfypQ6DM5pMctFPJC99fTwoNPG94xAUECWdwx6PqCzfp1kXspspuFfk24YitDrPV",
  "key32": "2RZsTPA7gB2x8dfK9VhqSM4U32WmdaiPbkfdF19ugdDyBnr6Fk7KvHCEygkz7sZFP4aRh6GUtwNMz13PLEZeyPj2",
  "key33": "4C3PRqAQdDdF7eVHfjrRAB9M9fejXpLkegoftFt7FZSZYEvnbxbbZtcyKSqKN8HsQLLp5BurD7WxJedKnEMy5yqk",
  "key34": "QkJiu7HRmRYcoYQgwtRfWtrebBk5Vuk8ru2GLtpDpZnXf51ofDQLxd8nnTY68wktRytnuMiFcEpwk5UiGTymSFp",
  "key35": "4nbBT14P3nA1GuBt7vTX8Csd7YqVLU7roHN8foyQf6SzXpg2M8ZqAUE2cQWTtX88PAhpVydQg5yoQH3GVu6kDEFr",
  "key36": "4TDdmNGXgn7qbKAPA5f39A9Td75n9WCSZEdj4x7NLTBhh8LhLCryHqb22UGDDyemy9YKk5MrUyyHZau6AB7fwyK9",
  "key37": "iu9HSn4gEuRZqfSRzyAXRWTV5PuzMrRfoUPZveQVcftJoeshSU64J3HdMZB35eUV6wX6sWGBve9xL3pyaXK9cUy",
  "key38": "4ztjJFUm3P5k1EJneViULNjvAp6ZgkAS4EcNdnUJF9i1cfBXCESMeaYh2Ehpzw9mbzz258GcXMKBMydNoAgdqAb3"
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
