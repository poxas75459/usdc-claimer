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
    "2MrvDyKeYoFc8puDCVhNxYQHeiTBY9LpKWYKS8V3LJSWC96JMP51BE8UxnjdkhFSEWoznkpnrdT5LCi9GgftcvSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gnNHdRCKHtXiSvdcyZqt1vLVCsw8Aj92xZphffbbCwzCrG7gCVy9AR1EcL7shvWkNbEPn3Wv4xgkDm1P8TFmWr",
  "key1": "4iwoaBZM6T4QYtjAQQ5z6hxPsoSMjqxKfPqtoQEcoAaAntXmoiGy3jFhdyHvBTddoA3TvWViGzY7gyFZrTQm8mPr",
  "key2": "PGTSxnLAJzza7uSFgFG1daRVH42qGZrmqEUm84YhCq9iQHfXsjjQwACbHZ9cfEAwm9bqzZTsFtvkyRjy2poskKb",
  "key3": "qvZ6DoQeMnrSBuZMcNjAr8Ec64pUjtpUn8n1jDF1DerGN13f1exiEnatm8MyoB87SvCne5V8fBGfuCuXxXC6tiT",
  "key4": "5KPa7G8LdeHB6rNCsoydEwKJri2Rn3Qwb2VUKbWkocVfKHS1sHEgXwXqx5C4gmLGejcuuXnzCvACZ5Bq1Fau6zsu",
  "key5": "4Y246R2yYQUevWHF3SVrTdh5uLsj1EWS5tqJQeP2sakD453JBP6bsy2EcpLC8kFL6x1coYpfHHsRMZi7355hR52k",
  "key6": "4D9VYtJ6Jr6yjKvx89u5xh1aCrZwRTxSQFa1W7yHKtcn5vJVDkSKAshnkFE5U6UqCZEquXuhUvosbzxMh7ssjxto",
  "key7": "3nM1FtE3p778XnaDch7PL73iajDs9Hcvwuj9QGUVB599mmrUjxWic1VJ7pCah7nPGPpkuW7ZMQVQC2gvqzsYMB8j",
  "key8": "4Do78jhMVhPF9gZHQykSUd59dct1WHT1ewHrrQNZTKsUmBXQyyqgMJkrX6BPzikKjJ5vWjECNSNpXuHzhXQ3aeSA",
  "key9": "49Vmab89QhuSKcuJbCRDdUEzc5KT2at2gty8AQkbfVE3dUycZFZVqWsSTaFWJYYtUAdAQ38Ugo1Yf3mhMHyP6LVV",
  "key10": "3ewVj6pLftH3TpqBU1iF6SbN9M8XPfWEcs7p6Ze1VxqJCKKiE6PsR5KEunRnffEF6zS1AcRPQQZa9cDHzYQwMoGR",
  "key11": "5ZyW9u4DkHaT46sacuVmydMaAULwKwYxvUEg2ZMpTp1ULft3BKzcAEhoK1xsMhaaasiBtV1FghFTToLzh8RzPYJw",
  "key12": "4xr8jrgbqmrdwxqbPuGdTf7Khdcpvfb4b57tsCkFmgBu1Tw1SJGfiTLTnBCsvaeVJ23S9dmikw8Tq8PADdDmDUKB",
  "key13": "4y5CPRXcB2wjR79xYaM3mZXE8zVisKbE1YWSL3JPchwALukqJmJUzjL8sCxHQdGPgHWtyKgtBPmcdpeYFpPVhFKi",
  "key14": "579d6aiXv2MQgpk2AoizPJP6P8J2p32UnTobT1CJFyTp9LtWWx2BESoDiztjRC9HGVYq2cbKsuNaobjs7NQomG3b",
  "key15": "4mcknBYT9bPVtGQs4vEfZDBGenYHG42DJJryAkE5GAdicdZEs7ue5aZr5cU1H17jEuvqL3vWAVKXUE2qcNyYVaLL",
  "key16": "3e3B96nGsnYD75CAcUbK3ohbC899i1r9jZ6pjVPyCgz9WtVckvAzkoE5kuNehxQ9dvS1NJY3jUNn38vw1KEB3ZRd",
  "key17": "4iQuWBsGKdy5yt47sAmS93jbCk6zKKZoTD94pbn5n99tZWsJ3bJGVPPwD9jbdEeKzEahiyEi4s4seUNXaHbXzPwQ",
  "key18": "23MwqqUd9dYK6W6BZbSge8AsdRiaw4i4NgZwXEfQ8i9C2JudTAvcSBfLoyzjsT2iVyH6v4R7CYten3TzT1gJV5V1",
  "key19": "5oBRmGAjJDEePQgfTNp8YtzuZYNXZnRJHQuDpq6tJvGnY7rYa4ioSamGssUgNGvp6GMHUQkeg8HCv1MhkmmkotTs",
  "key20": "2cCmcvpxrFkgPN3TkWM4iAoAeCQMizeySVqTSf27ZvoJqG5sSgTZfjhouENNEuaXk8XK46YtVYsuSYqzL7PUzkgj",
  "key21": "zCtLgbB7prGtwVHvBzGTUNxxip8Ur4MwJbPRMKoLMQBT7sDwh1tqKis8TYw3jYpBcsVySZ7bjCgLVun7R9YwNeW",
  "key22": "3oGP2nYdxLT7EWnVDhkgE7L6KD24MLM14ChjYWHGZrucjTQyBt31cLxceqUH6ykp26rLo4spvc64c7gHZ9rgAcrw",
  "key23": "uxcYmtrp253v5VdSbN529xrg9DrN3HisiJsWVEaYgJtpAdQVqQSWZCpnYxB6zcQvo4j5ohaxaQx28QiVCTXfUdS",
  "key24": "2nhk7NNthEHF3wjmKKGGFB89MFhFLfcrw5EEU6dZrRZNZ5cSv2bhTBHNoRZQU5BJ4b2F8moFMqpnX7Edakm82Kg8",
  "key25": "4tAjCiD61ECazdQYr2qY81CoGWdfA15eaBV8jyP2s7S9xo52A8Y3kKPZmTgpZMmrVENKb92o84n2T7ozQgsQy94A",
  "key26": "3hKfqPAca7attjyy4AwG3xFCs4WSsPS5eV5PEEUN1p9jMSPoe4nVp9L3RcETUuRCZZQ58CmHy6xWHwVeUQzK8feZ",
  "key27": "3BLb1cnttyMLRcyq3uivbWXDgiGFBCaa1zzEk4J5Rw5pmyDFXpg8shLXiqzbMwJX5D4L8PCCVmdJXkFCSnzrX1Bc",
  "key28": "5LADcwgHkcvbJ3a193XpvxGdVn5SoC1xzqfTb6wJqQxusBvbRZqvNKxZTQ2CoJDMmJ81b7c19FgbYvTSzHWSkEeM",
  "key29": "547JM73rUsREo6rRXS9BpCCS6pW2zk6oy8E8dmyrayL6XNqmgrq9T6TX52tK8RGQWVpWfDiKwCHKkyxsojxVgY7W",
  "key30": "wNFv7jqX2sG5yvuiWAQV5JbXSNj3v8uq2qG3HcwaVqH6jj9NbR2PcGSEnmBJnEJy2BBmZ2qgCNLzmYkaFx3iQBX",
  "key31": "5VygV13tj2UrHp26WWCRMUBtYDhCRYaM5uZWLusUZAXEnbwB2P2aeMgdhPVv66obhRRUdZSA3ptqtkfJ97Z7wNRQ",
  "key32": "MDoCUUiZVd7zTN41uEYVJV9x2druCErrp7pamm4x664rCySDj9GuJzEcDuursZz9HJscXAC2qarphGqN71oeQbL",
  "key33": "5bystQo4sSSZGUzA5vpYRdAtkmQyt4X5SdW45aeAPjUhb3iS79QunrRpxriEU5e8qAXv1x7PGFfSSTEn2HC6qNkN",
  "key34": "4r2ewMC4yCmks8jp6zeJK5ryne1LXYZW824zNqWqhJhESX5fgLCMCkDQXbB1Loo5UwVNocVGkfrdE8HeEH2tEDb9",
  "key35": "4bUcjrL8Wig57dvDg55ja4CN6GWZ7uqqEkrzaBY3aHYrxmSDAZBPyt8jmWerZxusYmjcg7RES2JyrH6EHBHwRpQC",
  "key36": "358tA1AQSFAmXAcnfTzrhifAK1LWKsA9ZVf59NPQ8S69qNuCoYmjeyydsvjN5sbGkp7hgDmUf23JMPaTF7XuucTd",
  "key37": "2Wrn5LwRbtC4Cbh9zBcwCgkh3jKRYdzL3nt5BUMFfcrTZA2JUnUEcPK2dWLZqpEi53RcoNDEP9CjjejTGKa17z5U"
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
