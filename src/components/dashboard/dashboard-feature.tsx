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
    "3nRtwFkahGfCL3RYyhnEULoDsd5sQ79giyvQPR75SEaEFBPaXR341kzjUS9KTqFbmUbMi9DYXnpyXMKNRNtA8fZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GGjTEQfohUhDdh6q8uo44bLRnkNrxzfkyWWPNVSfBhrmyK7eqxxSeXdaRta4jf3hBfmn36B4iNq3HN75BZB7ZGY",
  "key1": "3TVXpUhNqMN3P7tK68zM8CEuJrWMwX6559zbmca9ULZURPAJKZ8zuym23gJMFpdAqgXt6Ap7nJYRjasTMV3bXDyt",
  "key2": "4JSxwtxjgtfXeoRKRwpf3YpSHGvPNUMVA9Z2Yptj3ETtrcRmnA3ujQS2YcprUaKPKzDets2ePG59kRuBnezjv6Ui",
  "key3": "2Xt1teZsWKW2u38v8TqgNM7S1Rp9maKhWGWhBeMEWnZGiPx4Jy5EkzVcLLwtZTzCYaurXX4G6U15i5ZzX2GwKTv5",
  "key4": "42dDeVz4a9Yb8dr8qwDGpJ69PRuunisBQPJWKdYkBQ21cQWpY54f4DF7tpbmzAKfRr2YFTKFZuL3KUajpDeDw8YQ",
  "key5": "4zqbhn2SyqWqDAKBX9dLxYe7kF1UpmdHNSfomRFjN4QTK2ursUpHKZdAmf8ZvBYfhupA1zVt14WUKpmuzJL8REKh",
  "key6": "4vubtftrNwxTghSUPfYEa43AXtBeNasVJKdXNm2Kt5aAF1rP6u7Xucv6pnFiBnox796v16n8uztC5rFYE5Dmaiz",
  "key7": "T2raoBcayCLLd9N7LsJxsU15wTy4JFPUoovoB7ooy8JJENJLAzQz63FNYwwzgVWG2cG2YBNvWP16QTmdTyz297t",
  "key8": "2rFYxou9sfprgFvks9in3rj9aBD61uBThbvzyuP1FiMGpk6o3DpDWFNPCbBGipGQsTVooH8EwLexnTcgadLQkNJL",
  "key9": "5265kCGUVKdHTviz4LsdBeD474CtRd3aeBd4Nbe89t6YwTFmvDTYuS553ds34umJv7s4VSAN3ZvRWtdyUmWxiJu9",
  "key10": "3pQq47ADtHZ2kxhHmY2cGbJdHtWqd1UAgaPaKfM741mf9jcaXtpcALXh4iqxXu5xQMi92GLeG8ne3NvFSmS4APeQ",
  "key11": "2P8JQ5yMUJidbUmPmtey9KQ82p1BmaZP2NbRq7VmQEbz9M2RnSV9kUK7k3DNwtUEUe2xnPXe1mGkR9D4Bdikj6w",
  "key12": "3FF4tjPe3VNsewzcyJqfE763Mix3ftkruxuBoTsvQ1rTzSoFDPjoDiW747ia9dZpo6PVpqv9CHdTrcZ7Fvm45gCx",
  "key13": "4RynsEbGF4AWnJZBTejbgQLG5LHfsWhRRG6iudQfYXywvpQnamcdKjuFkxJ1cw2mbc7gW56ZGApM83U8fz1euaQ8",
  "key14": "4gkYEkPQQTGgcAo6aVnne5RAGDgBxQvS89ehsajoNN4kuDVYLLXdBiY6jYdHA1tVKfEozTX11icDWmknvAAdacMX",
  "key15": "2WktHcVNN97TzVChdKpmkWCuP6EuX2MR1nUqsqufBajtGps5B4Q6rgWF6VbXWa5Ya1A6VWE8yiaWWQjdsNajSdio",
  "key16": "4UtMg1faHc1oCeowhaQqWB84PpFvMLiwMmTgeE65TUev7eJBJiLPiT9wCEq8Ki3SNMGiRknZdYBfzgPjfAsP8def",
  "key17": "4D1w4CCgSLRnwv4HQqpHqZguewa4hwc7NtwmnqL6XU9jfLyTKN1PaUS5v8jrxCpZPgEsJp5APCY8YpnfCQ2f9Q2T",
  "key18": "mPdQeh9GCku6WetFfDVCXPG3RVjh3QpRwH3HdDdan7PopxKEKKmZPghAGdVMsoW8JjXt6F9bdz9kZdE23A1jsZq",
  "key19": "tqePztxq9i9jrHc4pAH5AJcBzr3RxMLKXbenETG8Rz4RxANW2j6vMi5oKEP56dkbccZ1VXuKaPVq1dzBBVdkTSA",
  "key20": "2rVcZsc5iqp3JcsUT5Eqjr9WXHQCpns9N7Pu9TSHpP3D5QgNPoN3kx8zDx3W6tx51JeLzCb1BetDxzrCZ2DGBt7u",
  "key21": "3K8ct6EGyQ66NbZXdFp7kZWG8QaAx79WGXJ4JhQPGYhceXgnBd4Ns6xry4usxtMSY9c17gQUBrqtYJEJTkBaAak2",
  "key22": "4h8YQjMqYPJJPaaMg4W2k4u4NyhjVbhH5DokvTbSAsfkrdWYzurm1r66BiJbR2HKwPMYWkuwFtPX8dVgwEVh1rhb",
  "key23": "3yHBq4RKhaaZnpYkCLmZEvvGw8ELbWoic9pdViiQdrv6MXUuFwdvaBqWny7wb1xNKVuPFta2VVvhKJgouUFwiVMD",
  "key24": "4VK75HL89yk1wX8qfJj27JYWLhMpt9M35HA75WgPgQgh9sbVcTnigpY2nv5VRMXf3WaVLnBmRFkmCu7KMv5YHZkL",
  "key25": "5gKdxdCnjFUotRvEYVoMUD4daFMbvT8ZjN47Ab5PPNTadQD7Csy7VqsMANqpuAUYwqd2kwJRKrZXRtDzzYEypmGG",
  "key26": "4JginBxpynjpNdxYNeTXddrdsJpYS3uVwjAGqfRgtWDZTqSwHgCfbLp9CjSutLKuVxGJKbTPc775C5atxhmybu8k",
  "key27": "43RzmXGZPkf7hQX7nDk4cEQUe4ZskwFNJHpoK4m3fhvhs2P6bPTnXodYi2yrdpSZD3jCfVEAB3ereaJj4ZneqdSx",
  "key28": "NpPPXTi2zuy7CPTTtVBFkQMmY1ydTAWZ5wgWBH1ArTREjWqypjsmNCoc5j3DZwAbdjqA97FCW31fcjugFr53YNp",
  "key29": "28u1Nyt1TEgzf7hcWsPVNfBr2dZvJzpzQ36cHqUk6t4cVDSGGuxmM7mtYoz3owHJqsnz95pXKebEo3Gx6JQi5sTW",
  "key30": "4fPEc1jt6jfG5uDeAagK6QNZHxHvZV5Ff5tvHAkoHRd8Pc5omGRWV7Gp9fT8VTf48c2DJSa64eMsbUfHNaaw1SSi",
  "key31": "22cn7ADWsPj2ZATpFkaMeoQdQwnT7rmW2pQwdm62GyqEBwTNSJRhLAqVPkY8hq7CSsDr9yZbRGMgbqLMCs2deBqj"
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
