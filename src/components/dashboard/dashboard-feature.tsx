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
    "5qiF7sNqyAhVRv3RZ5VecGix96KicacAqY4L4cBvordEQDdHJ96UNtZqbBfDJX9wsBkqZPhhVYiPJBVRGFSgpdxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ggwUxZSq9QLMo8VCKJMdCWXZ4MMosr84DeZZUX4UJAE3oF9Hxf6cFQ5Ez55j6jByvLMngQNs9gJ769Y9zRTTCA7",
  "key1": "3rtN54aehDUdWTw4WKDAfukVtG33zgZbKWDNBZKqGbwtVvuAHoNRNUXyoJVxXnB9VoPfx3kZXPK2cCt4WuHpsiN2",
  "key2": "XpvE1y6YCYHfkdPNEWMCq8YS9AXPGSrw5N8b6puqJtsAAqSkpKW5cLUa5E7rJUhVgFmEuPn3VF8y7AoYZuJPXkz",
  "key3": "3AtnTL9zY5Yai6Mii9yMHeAFVPsdCFRCkEM4o6nrFUcFyRZb8nQiMWpL1pCM8w4nWaJv7a4fTh37fEcehD6S8ZWn",
  "key4": "3t8wGdhQTptTswfVsGQd2Dj4k3gT2FV279fwoSr46U7YMcvyf3iwmeoK3NjcnVDgiYnNmGbypyVw69cFYZ1Qvpir",
  "key5": "5LEXZYWo1kv29QEfmuWiWwSPUqNjqhefJc5hyfz27QhUqbMGWoZdfz5dm2sHFg3Gv2ia72FfJNiMceTrtK7QGibk",
  "key6": "5A63EFiAUg8SFcs1JP1aBVD9DvnFnDdNZqjkmmi8DshqNqio53EUZXS9vbyEwhZJPHqYPaWPoXJu4yQhbUwYqM8u",
  "key7": "hsXnk8R2W7cPF4kWRvkvkY7CPPGFpJZVdmDMDBpwGre9ACPfEJ13o2REnqJPswC2jqPGLK9aac2iF12F3WZgcS2",
  "key8": "zeL1kYBpVQ596P5WV5vwkVN4CXyW1qvZT3imc4WHpRfDoc38Tt3DCkscYKUh9zoYRqqPABkeaKt2jiaUXUodss6",
  "key9": "5nRT95SKMyPsKCx74qzx3iBjXkBpBxHWYbqCTCYkXmhs9F9wDci6ZooSxHvPnCUtxjNmsgWGkQdXuerUDt5zKVkp",
  "key10": "3sXCBtBHjdY4v2KLEnX9VSfZTthwqabL9QWUDe6jscHR4EUA4pYVByMoe1vGodCjoaejRZEYwaXXXrmzZZQZw47J",
  "key11": "4e8LQAPQMREpRZ9jtWDrR9rjoxULvmFsK2qrk9t6FuQiKhMe1WFDpNeLrcRUQNn197v1MSGUtDQCmqB7fae1uGEw",
  "key12": "Y9keNa7GRq7b6oLDqPLKq9TC9n4coBGBdDrQpWR3kfsivm18KSqAPYLErubBPU56ZUTRRTrUxdQpfm5Fcn8gGgn",
  "key13": "2M7YyFPoYAh47ExnYcWy1nMDm9GGo4S2ETfko2ysKrvgN2g53kKYJCYyNevyXtvV4U8B8U7awU7TUGExGot2mDid",
  "key14": "4H3qd1jV16JGC7LZQzdw8UA7dTJvWnfjb5zmZqAyF7PjroWcdLUFTKchXLeZF7tizdv6ywFSoHWDFSwiGhAsHCkt",
  "key15": "28tNa7Us5aQaEnYf5jsNa6qxvFnQNAyFTEbx2acZmxLcYGJPcwrafJY6JQtVdb9whuCnTMF7M3tCLPcJRwbrb5F4",
  "key16": "2tw7TdDGaj7TcTURncaPahzZWdyk9jf2Nr77S8AUzY19JuZFvh6BJSJWssSTAWarzgDW86v77SyhczcBEWr9sREB",
  "key17": "2VDTVyXwmRXn2kXAGUbBfZ6N3CZdKja74TMt521Nampgjom2HSwY6iR56fFpvnPMPgjfDB39owcMsRj2e9zwCkct",
  "key18": "4Vkz5nDVonLyR5cp14PZZY6Voq6qNzrYgYvuYv3oTnsvy4UJVtrgRmMZgJ1z2uAF5A5ydofAJdcZKpYFGtccWgbA",
  "key19": "3R93jzXTquQwbzKVCgeWr1o1C99zwZV7V3WqcCsaGRAnj97aodJRdnm7pnKS66iMuu3CPrmLYX5KLJKA7hqPzoNW",
  "key20": "2MaJKv2MTGHEYspyZHAUP2f3xktoa3HqP4HwXwZTNHnDz3b2BzHJbVfakRqYk2Dv2yRk8kkesBBWmBc6gBhSF72d",
  "key21": "58WgUw8dVPW6GEGdEYiFwrCFsY2RtXvA5aoAQ4vdp2qE6ystFJfkQwJkzVHTU67pXXQzm4rbPX5HVDqNnHJuwQ92",
  "key22": "55rAb8jey12RMarcVqWAPhQGuG7uCNRdBzgA9VQrr7MiHjmyDiSjW6CVncY4nfiGesWko339Pc2yxDgf1dX7DByJ",
  "key23": "PiNHtoALXDiic2wTnfdEntCzG9Q3LQVx7heGTvZHmnkeWWFkohCV88b53x4Lm9UoRJJK4q3ecSUBRNHS5rHL5tK",
  "key24": "3Lcmd2t7nPT4hYgGTCbSCh2dbN3Y9zE4YFNavLHWsw2NNT5v6EnWFiNM8Vy5iT1xC2SjD8ZonVejgjDQ3oKLuNWA",
  "key25": "3C79k3pYMMFE41tvx8gYN3xd55SWkYHMGTURVvvVF2T2vF8pobVsp6DVQevA3fvmEmapKE5DFDE3HyB7s7egA5fi",
  "key26": "2cqmgtu21SGvAgUhmb1WXGHGLBZfiNL35SiSuHvAusse3mqM8cnAqtZ5ow4WA916m5ad6RbAPujtRqGA3ZzAUpm4",
  "key27": "2A7XCW1Sz8XUwmxuqwnmmEV9TcBQGe97sHt6krbYk82Qc3YDLtz5FvZ2GJkahTXr5piQCoqMYD1pnqQFxrDCbLb8",
  "key28": "54Tci748YCR2QsyNqKAcx7dC2dxVUy8HqvYttBbkMkukcm6oZiWmRSFnkfDdmvPLzcJw2U7aRhuvB9aE6wwCxEud",
  "key29": "4Nnz7mJsuPNg25e57atLCD4tNGWXdzsVU7DQVmYQpLB8UHvzpre6HrP8wPUeFrJxLciiD1ct8q4JdvW7jn6M6tN8",
  "key30": "rY4isyA3TsQ2hVqobTPR6uAqtvEje594j5gtBbNTyqyvTS2nMPnbNEu5FNbxMz7X6eoCx49BBqJWvigyJ6RVRcv",
  "key31": "2BAjbhRp4MeoSGRemP8uiJR5pgbPAXX7k4VYvjaA2oxcATGBB4tdgBzQoK9pD4RBkmUvuainrq5yNbcAqC8WjiTh"
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
