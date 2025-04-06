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
    "39bXKcEHigtLhkxdFDkmqL2ft7TxfoiQwgzENUeN6NFCX6fukADevs7ymQT8CR6emaPY9tPXgc9SUQXoFLF4T4po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNav4GuwD6YJeP6CaGPfEWs715R8bTqa6oUp6vd3Ja36K7TaCYPTCkneBYsGZkF1SQiiqwueiKr5oJyo1GiJaf",
  "key1": "2hZnFWUj3ffmYp7YU9UV8bNzCJZ6gYRvn1ewnc79Bcn4KgjdVHTU1ZbnhTYk76D41ZnLzj25H913i8rYMuG8zBLA",
  "key2": "2Z83JKFgTjQK8WF6Cq57A1MidAKbGS6tsrzECJruESrf7fM4mEm71Qs71UpYgf4R3Tn2xjbioLouUH9oPgNifuGK",
  "key3": "5cszLc9Xn2k75x7rjhb6rUv3jnNskebMy6Yco7uVgR1rspnGpiBEuN4uJvXX81KWyb3KKKMeHUpeXWLyeS2Q9LdH",
  "key4": "krn5EH2YWnnJMFgdvu9H7b3gb3iZvfS3F1JJ7MJqGtkTmCzG9y8q9Yu5nsWthyLCCEtxbqF4hB1Q1VVxyQ6WYeH",
  "key5": "5xkM9KVQAE7VrLSsv1XS4N82y5Y7CnzBmNA71HR2h5s3f6sPr5EkzqA5XBJMCEtYLyEgKXbETus1DRU9sdFaHbpc",
  "key6": "Wkg37DwzNdW58WRU2omg4d8oCkpSSxqTDvvN8gs9Ci8eRJDsbni2gPrt7rbTk11PSe2WKXtoswqM7gHwr9AehFN",
  "key7": "5o7ntE16jm5iBYnK85z8GkajqniQeBg4MAjq5kQVrm5PBrx3JQyS3497nncY4RM9TzsjZEmhnnaHwX2nBrg3AjHp",
  "key8": "5ipGhaqDK6RS4iLp1sM9UWQWdeFLjZwb62e914DZU2uoPWyLwotj37cvmC4g1k6Y6YZjugvAwWxXYSGCgLyF7MrY",
  "key9": "Z32Rf6KQ2313VzNRqeB6HBu9MtGHhbUVzBwYgfm6PGh3z3jSSMDJ88JMqSDsMySk6MsEKcVrz7sAwXM2MgpZzND",
  "key10": "5WcB9azaeSHxBqEKb9nhp82WCMqRACjf5CwQDc5XFqeDAaCuZfyn75NJjf6PjRauPu7BSHN2uJED6U22GWw3vSGb",
  "key11": "3MX1BJF3pzZqURHVbxRu2GxRFLoWzC7FbLFdqqSKZHah7HLaDHvXc39NLUmYdnXox5Lv2DQ5szzALM2gZw7c4bwq",
  "key12": "5EFA6vjuqyU8takzhb5dThj7ERsw1kJVcuMM1bEimWKcU4C76xFLmNmzbTaDfvPLTHGy7ysf7tpvATwPaPydyd4F",
  "key13": "1Yo6U7UhjW8yHe5PFWVg43eXVkiL7aLDSwpiDpDBMgMFrzwqANV93rp69FL3qLSyG9BzqnbNfR3swC6q4W8nhkg",
  "key14": "5bMAvquneSEFHR4tHHzQXhYZf8tENFtq9ZyMdSwGndRgQEx2V8bhixYXhEj475aBMgBVr7E6tdaEcGUATU5XQKbM",
  "key15": "jukzxtoWX1yMwmEjjD6eV3mEdnu7fnjDJV7mca5qX2Vrmnsw4HtNGZxSeWRLqXyBcWQjzTW5koVRmNRbFo2aGd3",
  "key16": "35xwJfrADDNVMdmt16Jswv6tx5R3HHNLFh5aCYJgq7F71kfRFUT8DRQPqjYQWgZGzyNCqmnavxMmnxxtxiFkHuM",
  "key17": "61Zz1iyyK8QCQkMdaouYQaueVTc3d4vRRcv7ntYdufG7qLAGU2cCYNvyyf8QyEZ41MPfzGHrMJRMVSpn74sdPCFt",
  "key18": "9gt2HM82sDNDRjQYLXN7SfDgLUvUskUPQvLhDuSHad1MTVR45FzTFepWKjTvzrrgaXn9xyra3a7zrCWKPn5BNUi",
  "key19": "4sJj34eoZbq499YML4fhJUsJCkL7w6imYxc5coNw1vc7HJY1VHCbEfja4je9yWYEJpJH8oaBMqFVWJgrhHerZQ2P",
  "key20": "4z8QELKo8ZVszUV71HVPiGUYtjfgfusYCpaPFm2eTgbFcTAtYSWardQXuwVRRA3To3e4SV5nDKSh5qnACLZvxdnu",
  "key21": "AFYwohjvoqGXXM4D86WvvdrXm4tZPpaNr1hFMWNQyvx1pu4yLdmjs87xXe1g8J1oM6zxP7fnXDNfPQ4zbEwTBcE",
  "key22": "5sK4ATWTEcDNWK7d7mh73Y6oAJvFoMfnRAumr5ZGZ4d36nyf3rZ7fDhVnAfp1hk9b669n59kWbGi7uGWUUkFJKdq",
  "key23": "2fCAPynr1U3rzUJBgPKW9v5292NpB79zen2GzhpLVpUjKyXdimE12NedUSuVzXZTocfTB5f7Hi4vSuZden9zhVjL",
  "key24": "35W5QHT6akP6frpUevft8ZK72Y9y1BsVYPtqCJYuVhJP9mNE9UM46Gg8EPi7ccKncQaWh7gkW9Jp9YLaEuayLYg1",
  "key25": "454vFVUHLA3m8PsWGxEVGokn2TybXicfn35X7BfakAnygXMrsu2AoQAbmdqBoBM295dGpGqot3t5ybDMpKitnM7h",
  "key26": "3BZ8Z4HudwR2qB3ut56Y6TiXbJgV1UyUHfcDHm63vWNmoWJnWRWNj3b3H8HoG1qKkSnbXJK1GbQk6NJFRyLYFXzh",
  "key27": "22PJsivRMm9FAD1Z6XXGY1YvjyivB9aHazUNUj5bh2XxbA8J1AtDXR75JvhZajbxL6v4MNzR8GHdAFuN7GTijry3",
  "key28": "5MJ397V8aKM3Wqs4rDzRa65Ffr25bGUb1WopVcr5X4buvwHYxxXDtQm2LqyUNDZYTb6n6WopXLM7Cx2F9hehPAo8",
  "key29": "2oKdqEgBTsNafsDyNQH3TGqdJgpfVyqS5yLdFBMBzBsteUAriexEthEa26rrUYtAkxUwFiuWHobaPEzec9B3KV2c",
  "key30": "5gB4EhYSFRsWNpHE6kr1gof5cUuJUjwaJ5RZsAHd4EeVB23ZSp7xTtJeJfmdCAyJnNNFUB4vbBNa6cC2FCCiqVjv",
  "key31": "xqcdijoAyJNVWwhEsU6PXjW9LBMwxmQSWLXqJmCpqZW7LmzXUykGsV99F8PYSGzdhkXxymSRwJsG5YbLqNzCrdB",
  "key32": "24h4VeVhggK9onM4FZjQt9t24T2nioEZf3nphr3rondKRMAGGqFFomeQUwu9K2jA6u1z8NwgDChN5uZRKvi9hBVm",
  "key33": "2D8oP5xox4jeYrvaq7axSJex8MWZ8m5TkczQiK9BZdRFNFcD8tQ9xWC56xqKXHTnDqwvE3opSY2K6Vf7F4rZtu6c",
  "key34": "3kxvcBfx5LiersEqWHqHEpwfGQtSHEZenHr4ysTgYE8Wvp4xvyBiAcr8RTyFWchKAMrHn4P4X92dUD9fW3Mps7Jv",
  "key35": "3fW5dJ36zeyrBSFtQ4RKUxxLmbsGhMtmJVuCgLmfS91JSjvPpMn35hwRXQBEJmSRsRNWi6TWvNotHtcXdsKNd5oz",
  "key36": "beVX47e9dLTN1ntoBLrgMjRkW8yf3VJjqMzEJ1vMvYoBGPqn61H1x82PfcxEULZcayrm83QLLsGjhXhDqrBywQf",
  "key37": "3PcKyuu4m38AhtCYNVqu3Wy3QT9K3b1brhLzZtu39WtxDqJhiKasxzVRAEsvXtnYBE7ZZm4Hf32yaF6Yx16UW4G2",
  "key38": "3yyXdKL6gzgJY5k113YHddjpUHCR4Uw39woMrN9g8H6pL1tBztr5CDdQ8n8hghgmrxkZz8mTXJwVYHCABN6HH1JW"
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
