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
    "hXUG3a5DKrzYRhCCAiRJQSocpsnFinZgmwwDaKVDEyqV8CnQpjoPtWXvbgHA3d8KQAQoxFC42Xk8jSkZE5WECrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KzJnUhxHhVu2BtEoTmco2kqZQTSVv9cFqQWYLa79X3gDmwyav9jpMerCJTSby7FjcmriRJMJGUvZZAeLXGYGB3r",
  "key1": "4BJ7jY5G5ywvzPuJMDSm3VyyahugKSCZepG343KFRNkihTLbcyNK5ijvot5vCzvBKwM8smJUTbeQSYbdTKNZVpZ9",
  "key2": "46ELQMiBPxFdNn7QcWvUJhe23xxrPp6dync88vwFzrkFYJeGfCeTpc6CC6tKCE7PjHmoarZKCGgEcJaYJAsnJvx2",
  "key3": "52q7WbJGURtj5oZ1AvFYEzkRKU6j3GqyCiJyF3k7Ri6XHhyMiqmYRqu2Ar8FKXAFT1tU8TzpUevyqmc6K4f4rLpL",
  "key4": "X5kfgzXvyfD66B5ZyEKmeqbnwX9Y3HU1V2ZSYxXFVpCoTcvG68pbiEcCNobMKUs6AZuLWzLRioit1Yxpv9e4qQc",
  "key5": "2r86334QSdYDGpKv99Dkk8uYRimT1XuSaRKUemDe7zcJoggBUaAuE5eUHnje46TDmnVb4QsdnpPD7KBcgvyEp24o",
  "key6": "5s2JAyEpKgKTEjCTCmKLt5NVFUKoToEnMYN7UQ7HchAYLwj3nX37VBtKHkc6bMQ4A7v4je1evxvxdfWXCGW1M9CW",
  "key7": "57nJMrrLfR7FeDmPwHHP6UVoUXP7aiRwHpYt22waPqpBHudThDe2NAzVRosCba7GYz3PeqkiY3yN16hv2KeyYgB9",
  "key8": "4Xe8nbukWTvCy8eZCfZpiAUpZkfnxcNmGZKfmuAus4AESnrBARajfJtLoTsdJZ8TwT9FgraxXYm4XfRcgQnZWYvo",
  "key9": "QLK7QdQ6bdDW26DnNqFpWMdwur9bwGdbbrG6HGMqnSTztbHNzXCRtrW7fVuLeH8WxD4DzAnWYDw65hzAa7v27Ag",
  "key10": "uaSR41z7xw5yh7EjmXQECL9kuYd3cV43XfXUNGnyxg8EMShCHXPQ7ZoVCixXwaDEfCGLHuzbHsgRqpFDYSNhsvM",
  "key11": "5eu9rTPVcjk76qMGC1tqSwSMuNN7ao8vJrVkpMszDJ3UHfamDM2rGo4XYkTLJ6jYJFWTZSmyDpASR78sEjZ8xWrE",
  "key12": "5gfgjZqsb136FoF4dLYFdPN6kkWTeF2jxscV7Dognd7UeGHpz4djPoyvKRgD9vjMwSmqKKC61RYQ3RCPuucFb2h3",
  "key13": "7ZpDb4Kd8rdUVu6Xb71DKVxbvqvzRqQbFAR118tNDHV8GutXUnvmGdDgrDVd5H14NZHorGhhKzDb762UPwBQoEP",
  "key14": "2EiRgtphzNcuKmu3wDeESPhU3Ed49Yyyp47LfMbXfPrtvLTwpnh53QMrR17WHuuQ9mLreivoRZfjFSQQUywtkfgp",
  "key15": "3wLA4iGeECexZgMc9EFHXQq48CD5PknwwFVCpqsCBN98fxEuwGTUZbfCuykjkYG8x9tjzAR5LbC9YSqYyD2NfqUS",
  "key16": "66UxDjvWJcLSUUDpm78mk1XS6JqNv3W2rGr26Pqf6zaBgxeStXznx5Gh9aTggSaEwatdCDdkcpbkuKEY71RQzm9C",
  "key17": "5BnAoVRYLSV9cjHnsywoZfPoChPVMfZXbgyQwT8FVwmf5pU7fxgTcAp6Fdbsftuinaf79rtDu6xKR9gx5SR9g7g5",
  "key18": "2FXRByhBxrwvgUWcUddWgt3EjuimnvRV3HrJCGUQausrzeh3GcMmrRNCNtgHdteypRvcH2DTs9rnpoRbmDM1RN3v",
  "key19": "4A37vBcccZFwSFiQQtchDdkzsKt9risWjVUhuhHUZPvnwFgkvYtXrQt3R6biJYfWjacunttX7TyeVk49AbpUrBah",
  "key20": "4rRjPCE7BZAV7BCEwFGCpDfrV8PxL9p3nsMmKcBFEXGmo983zy2SXBz2dHVhDG5UnvkospYBnxfFJmU61GCGsj5j",
  "key21": "pE7g8SDBEFF5gj7PM5oz2K6J8Xnb6h4j4RfkPCGW1wybiLvfe5BSRuEcigp92cUfCJdLZeEL8tBVUzjGRV197vV",
  "key22": "V9BT942nWdGiRVX6MyujKgk3PoQyqujPKAM1uFNe1Ah8psCgZ43cApo6XTeEWq1mVFWQpGtutjQz1KxNzVsQXqW",
  "key23": "3q5uyJoNSnoLFG1CkSkPctSwXsNJBK8esJ9DNWyhe8qSikX35XMRydCWEAFAaYGKJe5FYcE73o4UsuN7vXstZjhB",
  "key24": "5XQfiamTVKTLTrrNWsnbNr4AbYzC7nF14ztVyoCrCLBPd9kFiS2nXowg3Y2c6btjp924YrJLFrHuYT3KvdbF3hfV",
  "key25": "5CMv3MPsq2neZek7xBALPbeuUaYKV8dJ6rKqmajcWSDDqRYahjmCoFp42ssmaM3vxFzW6x1pCpz4DLhUFaUPKA2U",
  "key26": "3KvQXz5dupcKK2NGU12z9qgKhbBSwXQknaMvagZvCaLZBmAJPp5eX4fb2nCHHUefZySh4jcZaPocMd9seWzYSmwe",
  "key27": "e8WfYm3VNwk6LPmjKcwPhy8qVpdANj8R623KNnUYCq1kJgTRPV4BTQhXww3X45HsEsfHSC6vBc5PwhtAdXZgZSq",
  "key28": "3zSzDHmtwZMHWhwh66syud9o1bAufhACbQh8x9gSDzR2718cSi9CTRjdTAVjceDny5xS68NUpAcrJwkuzDTStHF1"
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
