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
    "618GWrnLrawuYUMnSYNQ1rUykmmGF1YpA5AojgPBK1riNHMUHfY5EJ3L83GXyi3oVJAGvsuAnC2HH89Wwh7HjVeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKznT5oi62FbMQ17yoah6ta3moXqBu55b3mHegUSbVH6Hj2SfNSDUT8mXmp8BPmWLsEkRqnmXZUH2RUsrjVWWBe",
  "key1": "5NzfV7SL9SqDQ2nZebHLSfjU4241HnLy8sfGQUL1dpCCorpWUmjEceBczT34pqRv8s8iDVtN8Q7YBzQBQhA71aV4",
  "key2": "4iuWhqE9EyAPFjY2jC7UkvzNNx2uZyDmXkJWVg9gQWe7iAt3YwmXyprjxsfSngDX3jUnLLi87RYBrt79HwfMe1fd",
  "key3": "4m7Crz3oVMKNu2fQQ7aV3XD9MEDSzBSP8soMYX57GsiXZjpNkBLa9Vsrbyu9QytwuWLVUhYE6N8fSzRotX6gFENj",
  "key4": "3Mnioecv3SnJTQ45q3U2MoNv6Cy31qkaaQ6wq7WjuLWEAkDarV9MaqZb7wRDpPWxreQxcdWkbjkusfHk9ueTRbeQ",
  "key5": "4AW5dtTZDgdtWHmK8YkcmvZby2hdmXSRg5XN2hMArrTxfdc3GNyvhyFM7yg8skkpPmQytxeMcpVmv11jaeCCuq4D",
  "key6": "4sNpnkRipG5KHifZmqUMmXgMVMfWzAn9149woDGKAPaUyRTLAYWEZXBoMkMdwBN9yth2NDHYcUdtfXR6rLqw2XR4",
  "key7": "4nXTZrrucD8iE3BKKFJrooU2TBGv2gCbn2ZKPAAAhgLwAsw88nLG95gqSX6pD92dS4XPHFTMjptKmz7xCDdBmtn3",
  "key8": "53oo2m8cywReNLESRxcVmh3JS2PoTyBXv8t935fPuZjTBZYHtWcj1D4TTYuwgVeUW47ndtjbMPaQbxMhbShzyPCg",
  "key9": "5EPDc7JWoAVxbs3uRX4HTvTZVaUnj5zdqbKLVHMFDdGucaHpSpnmxqEfBYiyDzysEktM8iVjDEDboA258ZVVdVha",
  "key10": "tGzDjepGmdmeVPCVETemwTdi7PbaYbj55RCqk2vnfMBPm3MdrxnahbtfaAt1veRpYdk3ED79Bt5fnTcmsYz5NiA",
  "key11": "2G7QqKpjC2xtguHxkdDE34xcNfyHdtrwsUf1cTyBRtdY35VoLa2NPeUPmfqBocssWxTWNU4XmiAGdzVVgPceWPVj",
  "key12": "5R6wLUyvnsRMgDRJWrwN5MJK7eBQXPeWqC3syUDY2Yk4qnYMYKyBaS3FxmeVgi5agjvib8uTMkemR4mvkdKANfVN",
  "key13": "22Vee9RLGiAHr1LLyY74DBbYvDHdjv9KR7S4ALXu54EVwRzxxaCK4rKiR8CvYy37qcDfoauiWTjn37SXsEKPihjA",
  "key14": "4Heb81orz7MvdSFTQBYRRszj3AQS7BmjZ5EgPeRCxX1zwdPHk9rCbZaJn6DXfzUnhvgEfriCtuvFd2iG7ogyy9vN",
  "key15": "UyMPhCpyevipQYaoUhQLufQQWTSbwG6EAtGeeBGy7toasdMQcSZYwi263ShDt4dskZj4YHciXHeEhtYvvF5XsYM",
  "key16": "3WSSJS4CUzPVSZ7dG2eZNgDdnUZuvsFwQD7qG9itS1XsdzAJxJn9ujHcHj8hAwHKVhNdig9f9cU1VtETAmwMYYDG",
  "key17": "4BpLS5thmnHj35P7Wo5rJbptg6Qcc1m36xdmc2vF7N4NFTp8ErnX757CZK69zvL5UyuZemVPh9CBrrbfz2gzKc8h",
  "key18": "65xLJGx8L59q6t4RBxHdpD1eLhfZiiswAiVe9WSdut99fYKKN9TgUs26N3n5MeXPDd8qnbjNpfkU4fjbb5iFVZrk",
  "key19": "5wgRHBD7ikr9V2mmyKeAmJ3aVEFrpwizwZ44U8v5bdiDHhF9xiJNZTPr75FpvZ6UubuW7MBzDDd1jEUHof7C1n4b",
  "key20": "4muksTpYL4h4V18rancu6PKn4MjktbQLdh3WitrbMNSnGm2ATuGmu4xXS1TWGgTU2aAzyuGNXgbtKTySNZZAYBMf",
  "key21": "62AGPzXnGZVaSyxZLY28B8t7WTDzn5S6uRLrienfVVhiUstJGcb67xDoN6o5MtTZ8KesYo5BLZhyz9jT5UEkFq5v",
  "key22": "2LrK3wEmmq2p9wGuVRTTGNE5eZbnqdQtZt1oFTCQDQCyMPMriiG8ZWLdX3gceLFnfzD8pa8aUay7qHjLgGgxKf4A",
  "key23": "5RZiENMo6UGnCVL4XbtABdiCFoxrw3ssfeZcUzEdFGRTd7Yyb8o3h5kaCU6uRC7fNA5nJGUKfgP97x1JXSx5jVoX",
  "key24": "3yE6w6DyfUvds2VqDp2jawnGXJmKMkJiNWQiHckLnnsZuXSGgVP4zk6CaGMZTjMmmiBncMEzP6a1Y1KbxB3GpDY9",
  "key25": "4j1pHRuNq1sTeefJ1HmHZnwr7FR5CSYBsNqnQw8FSs7wUzN7fK3prH68Z3w3qBJ11JZvAy1a194jyFwihSvH43CF",
  "key26": "3LYJzaDiQB4z5JhnEuBrsLnb7CM1KiZqoHKAw33YD4bAypfHVkcsd4bx8Wp7h4ak2FAVyG4bpX4Ua2P1ifC6aaDu",
  "key27": "3MPwKeG68VjTL2255F8yVfmmsSzSqAvzRVZatp99iQjvawtc5iE4tCnDfpgXqrq61FSZtuZ6obb6Mohi2q6oVc3G"
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
