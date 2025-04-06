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
    "5SRifwJYSUsQd9Ez7USi89Ep64qeUHysmY7aorEXzrxExKVRLPQgiJeuR5DVXLQdRZA4JTqvuxySSasWgGnEtsf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZGJoXRgggK6XrFTBYcdcP7G2PZfgq9nr9TqYHyYcyWWqGZJDeyEY49bV5mzYUY1SUvhctDaCbsfp2BEucXSyF1N",
  "key1": "tbj7cEKxpNe7fS4YeEjTgzxAjH1myMY7Z2NLaTSgreVnnYvySxuqMNHTSMqCSZDL76F2ZGhsLapWTt3vKpBAzXg",
  "key2": "zi6dtzXuFkWnF734sQecgs4XcK5DnW2QjozZay1wigzFXhP9Lpe8VawR7HgzqNvo37sPZ7ntQuowdyW7Dt1EBUi",
  "key3": "26wjZiyj1K6tgf4BcMNGxyRBueremTcTVZWxPRbLnushrAGZaRQ6eNUjsTK3LW8gDUZLRtYCS7E7s9VnYHZG9EA7",
  "key4": "4JgfmVqFAvU37BPC8oCtLPonuxmSYe1xEy6Jw8rip14Dg5MUNDjrJXb94srkPHpzhyszDrxm6dKczCkHzTWpqbkW",
  "key5": "BruJTW9mTZM2jrWLofy2T89jdFxMdWntbmeYyhek28xcLsnFwpZQRcD5Ze452hacJYUWVa2HbqnGHZ7GmgqiCPA",
  "key6": "2HUkqpHXziaxwi2m4H5Cmv1rZL1RAtWYEb6JRTF2J8N1MBFyWvVJWFD5XnfJ2cjYfESwKnd6waAKNEcG4yYsh4sE",
  "key7": "3pmoAhM53KZwAFKvH2YiapaMbvuRtu4yk9dJ1ehuPiYk4c2xBYPhg88P6uzYdWfdABjoUeGFkgwv6UkvW4z84BmB",
  "key8": "5v3PunQdcJWHzNQrfKToWXKbn9aPZSoKcYD5kDzhgaymVErEArL99GSvnvukXRxF4R442y89LzxzrdqdZRJmLxf7",
  "key9": "4Bvgroj9Asb6GgJGsW42aXkk5Hi6ihE2WJFRTVQ8TALFE5R5K8xq6P1okMm5s4tGmSfK6wLoQKdVZqFKSWiQiZvc",
  "key10": "3LU3X5SLP9qTCMby7q3QJrFQSnviNKFBxE7WcKrYngqAancVb595hj9PKiAUb7AogJD91YXijY4thk9vxy28FtSr",
  "key11": "2NBG31MFaSfVDs6YP5mhi4VN5Gbt8QSjEBSZu9YNGmukP1hRkTNakto2CShhgVRvLgBqWxr9gQnLofiJPtfuPByx",
  "key12": "4hJxEhqUPi3TfgKKAYMBjyfUhFqoghZzagXLbYepaEVnxBHRjHNUnfy1CK47ik6Rbqrk2hRjukBRVFHfH1qsdWyk",
  "key13": "hJvYM5vhki1f55eVAaSGKKAhc3PostxsG8XUw3Xkxv92U3pzzXhAMsdPhV2ZsjpA2SjYjbmHEaCVEgtbED9E3o1",
  "key14": "4B3We2d7L7F45UdoExeEE3BScSFNBnAhAXqm6pn2V8BSxzw4Xh92eX4coa2G52t6QsXn2CFoXY7LxAqsaZ9vmVpH",
  "key15": "575yN8evMELYTsXd3fscuKbdi5D8RLaEbSvuJcdsuELnc7ZdargGrYZTEn4KZkHoEkRGpumNLiSzx2cQGHjKXabi",
  "key16": "3riHH3ZmT8U7GvjrbUYJwvVrJv9cHwevEYBgwPtbBBpj2ydtYygG6kL9ZbHWxdsQ2x121tZxMQSsa2X3zujXxUhD",
  "key17": "3t14UoaCiL7sPVqodjNtejkcPC2FpqzY9v1behVH8NeVekVq2crGHtxcXtCRCtr4rPM1fUzeXtVUceptRtyVXpg9",
  "key18": "4YfDrbtBKLrM4e15H5w6oQkzupTKat4ZvtwFLwLLPLxMDgU4ySQtVc8gU3LX2khAk2cC3G7RR9qPBjPQbfe7ejiW",
  "key19": "7ErDgq32ns1dLvorAtyRAckswscexuCva4HbGmYkqGz4cDKUcZkeucTXEJRcdzQZneBPzgD1QMP4qHVcbcrRnkc",
  "key20": "53B5fU9ruRMa2HrDoh6uaFdgyysezj6W47bG8DXFfxW9dFr7Uq1XuZA4VSFGawCVQUZfczXruZuFbBJHCoauziTX",
  "key21": "5Qiiecsp4DiT7i1J29tdT1s2yB7aQUiiMzxix41XKSF7UPX4vWnTkimXk8EKFxmM2STtF3CV4mUJw5WWWKc5tC91",
  "key22": "312EFtK6ShUon5HqmfDpU3eRH7SgV2yeEsALfEmgaKojVr2qeS5HSZ4UTrkuaCmAsBAryXHPunDtBGt6aG3YhSuN",
  "key23": "sWXSUeJZvw6LszuPATzdHeGHA5Er9d4gBW6FoxWxN6gMaa74Kv6pCGeJKVLy8hfv1MAg5E3GwFY8CkxK9VUSPbV",
  "key24": "2CiEzSFZm5vjGTxUuXBbha3QqDKMuwnMqLEeMFZTdHcMvw8CSRqZFCqTnLCkHWUbYpA9FEptT8QsPNNxwVpz11EH",
  "key25": "KP5denvt2Ho8DabkGYZMK91dvzoWvoFPo9ghHH5rpF6H3FXFpuuUHGDsQoUJCBy9sSfTVaxV81EQnDwMEJbQWpd",
  "key26": "SXj3mdP8p1QvHDFdhSNZKPdBNkCmaJrKq5N7gV1LYiFNyTUEVTwhfzodEQEHt3w2ZAtP5hvcj1SDPT1zLfZUG3o",
  "key27": "3ULSfcEQ8DvAMphD6zCHt2VzruHFLKrTw4etXBaJJ3uWkeYMCh9m9tGbScv7qETawsG2UDx4z3vMtJKLDe5xiYZZ",
  "key28": "3vz9w8Eko35v9sHnvnC7A11hi4e5ADTUAYSeQw3ziCdms92W29sB9KaWvbs1R1DKLbJksTmc95uxSwYXuxKVFJ8w",
  "key29": "57nvp3GVQcKCqBVtcUE7ro7RoywYPUpqs788Wrg7XDyfK1jfDnbBRsyLuFWvrSHYESGktgBFBzzwKEGBs9oy4277",
  "key30": "LtWnkzPosoD9dwFoP8GpmTb59hbAa6TUZPibFhoYXwqHE1KgRNPEJ4igpNAS1YBwgtTjk9kCsieGZWBDSnjrWqB",
  "key31": "5VA1KnTEttECoM3FqWhvcWh21kosiiwRCezA7dU4QnAyQuHFbTuHAiye59wuLALvQtMYCH43F424231feoVWYNv7",
  "key32": "3MEiaaQoJ4m7isX77u66PQcjZEohhoLk69tXoujWG6Vhz9eZZP7WtD9CEcNShMD5av7Mtn66xMZB1c7sLEqr8F2k",
  "key33": "5d4mmWiAg4RMcWJ4PyeXNf87fqWM8nN8GAnpcRQ6DBSM7pdzjZ3oyFfZwNoWpmY6b1FbKwXAtCY8mrhSAncotvr9",
  "key34": "3u2k4gMgC23v4HBwd36nwuh2LWJ4MgGF9YvmmLxe6WjXafeby51iu3R6pNWPt1tz11JWrzqoju7svq4u7Pjaekpx"
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
