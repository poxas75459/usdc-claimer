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
    "tuzjJSwMQhESKDHA725gwRGT1jX2WJHAYxR5M7q5wUM95oGy4zxbS7xfqrKniBzbQPCsajgSZkbEKJNLV1zvLtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDXrSdB6KfWFFwu4EUbPUfe98yhkGSbgZQYsPyV335u1uyVzfficyAP61uyZwUDwTNAVV5L4tH9w29LSsvY6LjN",
  "key1": "YM5bvw8x71StzAW2rB5eaVgo67VsmuMfskdrXBZ2S48wE2TnfN8ZvVWdv1NWvvjK31J9VpE34JqPy3SGhBb4aKE",
  "key2": "31XWnuJPBPmm4dW9r9AbUamf61qs7hovR9tohws5zF4WierrDQb65r2wBfoHipYXJsgFkeSfNr3YmdBUvbGuUpnX",
  "key3": "5WniG6dW9kEd2aKwZrBpsQuTZeP3wYy9yqU2ZNUDkpzHjC3ALwoZ1BrY3yju9Dm7KZzEGhPjpHM8bfRhmVovQsDM",
  "key4": "4RujVYDFmAcf35umVbUs28UX4gV6garVRHQB5zn4VEDDHUrv2KLzRkByHmW9QkWZwdmm9bTTnjiffqfPGwFUbnG7",
  "key5": "5Ssutc6vFavYYe8N1fcacm3VZTrt6MobgTSLZpTwjxh2NTkJKZL4XuKLLNt3nMbftSvD8djsgtY9kSVptNdCJf9P",
  "key6": "2XydMiwKTF5hhgDj6EyhXtBZpmHsRnXzJ2Zg9VPPFepYvhPE8THMnRPwBxis9CJohPNiiPJM2FBesprNMzbSLEP7",
  "key7": "2vwvQYaQWbnsiazZe69WtHuwagfwtqA6ucsy2p3F5QbCeissZv89prtFww4hPbQPzrV9ks8exCps9MHZnxtgX8Zj",
  "key8": "2NfF4EZ9MQerKj6nxvGQ3yoQwFGd3163ZK9ztFPU5WNecUwry5XthEqUfoZQHtS3Ye4s7tzVCen3t4uAhhmTGgN8",
  "key9": "5akPwLXnUQkBoUhGqtgxjp7eUFHDizn8WMqvmSuhsDgHVBB9H8QvkFKdd4QVoPkk8Mr6xdLS64vjmK1Y8rSjechM",
  "key10": "5iL27U5hTCuzxscTjNNJqvDeMni4J5DmGosxWQDmQM3VyFekgGkqGSAp5psYUc2jzjMzhddopqakMZJDsAdhg67H",
  "key11": "4fGNZSa65MKwzAHzTgpSD4vmNier8we7tDMEXekZjsRR1aYE6pCoqQC8ijNqZAgfPodKNyfh7p8mNvJSHmjAraEa",
  "key12": "3bgnfgWn4BLtND7Fgw3GJKCukJnZ1jjsfsZfDDH1AXWAfN1Sr9s5ugWJj4qQHYvNBQ1t2NefMjihWffVqM4xrwYy",
  "key13": "3afVmqKpVALc7aSA4DkPCqWzr9zbfFvq9FaH6FQW5SZm3xsysnZoXnZLBdGnwxPGE28yN2CPhcEvqCvSZA1wm3Pa",
  "key14": "ZDttN5rCuRXm3hiExnwvbc8g1xVAg1s8SMjMFxYU7jj4zDz5HukuXwU37z3YnVbAQLS9kXwPxi57TNZQUUDKLpj",
  "key15": "572SeGRp5iWU2KGtcqrSTR7jfgz2BB2hisaeuVoTBr32pEs2ibeXQJ21HB119wtbXGkXj1DdePGyRrEzuuBkCW95",
  "key16": "2dsDpmxeSHXfjPFKt7QupnU1kkKivya8wYDncvpJAvFjv7fwbwvJBLRxsVnrydAdj5YyFBzHbDrMcKrpenj72TbG",
  "key17": "3sG2NFusKXBnmnp3hsynDZ8x6GKeVKS5xftUAhHqzrrR4oyMAdX41HXAM3b2u2j3722wK9N6JSjP7519ERhcch6U",
  "key18": "38UspKsmNDHsLjPWupujXbYBj8E17jy4AVeqMD2Z7j3gJAaF2fjaHRMHaZryjnJ3LSKU6MVYg2HgMFe8g7u4CxVm",
  "key19": "3G5dSqZZJkNF3dre5qmeutMHQeK5GAx7ZkUwnRYyYvFnBMhnCNYCVVR14SCW2P39Xf7AYYuBE5umxjRQVofyJkRL",
  "key20": "5fiPFTxasSxnLy7DdMgyhuzxvVZEn5TqtfMfL1MsgBWb758eSqsMzrZFW26ijJ4ebqqNQV4pUrwFvLkrTRqkUkgU",
  "key21": "5LpShVKrkugEmefKxLEWV6jT8HWMwM5ZLDxu3x1EDBE2Mzu2Sty2mexG3XwPHESFTPJBX2eZU6e3a8gEu4ufU8Db",
  "key22": "5RPfNACANmzgMMXbrD9WM1yReDnNax2yKS84kAmUKLS8McKpRtHPFqWcna3ojGifNm9gnnwL66G4JtpoKTwE5F8S",
  "key23": "2j8Rx9Hy6AETfw6h6Wsi7Jx2JCCraX7bduyjhmRcmh5ua2RsrxPBaApBf6Y6nbNxruNkqh5jtUwtWu2CyaXGBREw",
  "key24": "F6iNrDcaM1Ravk7GJHaW7K36yuP59agqCm1RcHvEftRinrWQefKqBnpcvCNVh3WhxMyMgnwW6J3ePc2QvBVqN7x",
  "key25": "5VTpBdnmKzQx5GangMPHQNHpHNjjG6eAWsavZnUCJxbrZe57dpBVCqaS3RnR5cZTvLCGjfNw4u4oS1jcFryTxnWQ",
  "key26": "3iZUUbQjfsmwfqNKhWhd9NEdJwELr2drPZxUTThFGaXh1iNVGy9MZTUHCnQRY4ejACbHbwzb7Bm3S6KvVGjgR5xV",
  "key27": "31wjNDuse6wbax9G3ak6PLQo9L4gswx7EcLQyW1MnvAVafydG3urn7mvvZNxp73ZJFKgPtQq4Q2QQsDtXBrQokiD",
  "key28": "LFLobjoXq4U2ozFajqLzeHmBiyUVVi66AFpUhVFen8yzcJtvrx3UyuBKZe7Qn6tE2g6sLtQpZn9mv9QBFMxiA9y",
  "key29": "sFDuuXaipBaT7nLhaa5ie1ozhWfnxcaS4Kq8jihZPTCGc55oPaqycyZxoqeuzz7YJnisqmM3Jf93wXHtqkq8Mz1",
  "key30": "26odHKR8h1BWMMxLU9hum9oUL9xrVykWSrLqGnq9HqmbqZTdEq4b5ModExhua4JCXU4vuQMoPYzwb3b24yyzUUJj",
  "key31": "2XTygb686Habs8wVyGiBPbzorCKBN9CziMRBNG1X93YQ4aFLaq1EgBpftxVHCXz6Ybuz3PjBoSuC7fBWs1pX8XMS",
  "key32": "mEHLSmEFcfJyzJ1iqD2cvc6EyJ5AEfMb9ctAe6gcBNETdZXQEmLtW7EXbKWQWvewcNu9cP4VU8PgnrNAL2H52Di",
  "key33": "5LfSXdoYQh6TPbMbjKbR1AtVJWwdAnpahLAfLBEpdtxNo8MdqF6rFV4Pc4nQXmUQ8dJZwkNNcUsMJYMAWKb1edUR",
  "key34": "2Bj6PA7U32XQxcdhoBoVZ3Kc6ZHD7ki6hZj9FRxAA3LFCuLbJeZYpZecToTQEAj5SeoTtC4hdavE5sTd8zX3Sv4V",
  "key35": "Qs3SqCcsqpCSb7Acf6TSHmvzMxm6rrvHiyavm6YbSNxek21spNMUDeWbAbbEVy3qoL9Htup5CpqAbQUH1Dwy4KX"
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
