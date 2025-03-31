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
    "5joyA7kUuCqQ27GwGLfWK9T5sVUpSZUvsUQwZtgtJkqWaVLrRa1VQ64u1N3L4WUJLHbJF48433MZy6VTWygwBSTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QiUTGJ13QarZRkE1F7XzBUXXhqAL9edr5ni7ucoK7L5yPBfxmQpg3g5DL7uFfkiGgW6kWgFHWHK36hDJVenzywK",
  "key1": "3taHKyScq81svGjFji9N4DYw2RpWRuKo8kH4nfsnBXa6DPc3bQs7i4oY4qDcLccEJ97EPT8zf7fdrxLex823jevw",
  "key2": "5dqZKchbzwXnCfR87ySTkShCexEM49SMB1hnXmU53vKSy4dY5FCJ5mLeZncmDB7MxPiWuNqcrqMqrUmmRJSNM9bb",
  "key3": "5qqmezSivRxg48bBu6XZohfBzdCiw8pbhwssddXEWYAY4RSD4J2ZsRuRtZtC5rdYM6hHQb25xQzv6G4T5rn8mTJF",
  "key4": "55t7xrTPG8TAZTcFovNgULQr2MtfqV8ZbrSigGiQumk87jxx2XMZ7JLh6XPKbn7V3YuyoBP6rAfxS9yFJiuWcUkN",
  "key5": "5stiSDKnM4dyvz8NdnVnikHmgiZpL5vRYndtkzSauWisVXjZnQqhRhpsVb5s8GV8E1zM26aZ6TskaGTKs9HT8t4d",
  "key6": "3MyaaPBJJuJw5Ske6yHfmukYL99UQZJpMmH49imfgUBJQxfPSi8isxhzBoiBMyuUekqXYS8DAp5KsCfqdzHAZhTY",
  "key7": "5BSZ1wbL3mpiJ5qimdsDkSGcTJpqMswcoCTL42akchDjVSFtS8qbcwv5kjiCxkZLXKcopLnnpFZ964NMjazhkbGc",
  "key8": "2DSCC35oeEHajCKhuprPFwSHnjFDmufMM4nE2wvJo7BhCempUH27btJ8NqeR9ai6KvNUJemvaKS9icfHRY4XeP7A",
  "key9": "5iYpR6bL8y8xQvDKaWFuyV2EgDGiUtkvzv6xoAz2iSXEt7SKSDHuuncZwLAtPNn71BEyvh2FNo5qo76GEYVkHvCu",
  "key10": "5mkNszTMPxvmds2zneFqaTt8Gqc1i7syWnvTx8uUSGSAywxATqCU9FojgAoWiMY7Z84bvHXoVHvCBsXNsbY2iabb",
  "key11": "2ak1KsJuqQhpjUUupRdV3fnHkYUJQnHAaXKzw13TvM51VqXx7p58LKEz9QcPfcRBoaYCSoweGmbqzpoL2fwe9zyB",
  "key12": "hVo9asR5sDmqfu8m1kTPqERjzHfL2igFKc9Xn3WMGxBjbmj6G4qUCLdF1m3hrbvBKjktMePQ5oNxos6MdHWuGjh",
  "key13": "5mfwAJq7o24CjkNV33zvyTw441Zyd4skZMi8DqL5HLPZWbeEgfbE1iYizzqXo5fSGMQmg1Cvioz7FuVmRuBuwxQ4",
  "key14": "4jm5Kh7nQQHRYokEJr5asyrz9jxXUPAZeiLS5x7Cq9ciRZHfys5ZQkP7uJmi8wtVMuAj5Bn887xya9xLw27R1UR5",
  "key15": "5UNvSEJhfHzGtem3SKbaSLnhP3MhAqgmwk8kqJopgJkrcwtQQgjwj8mrJFNvARYT4V67deChfvPQdNmZ6bAK4CcF",
  "key16": "3Nz8tLuEW1mTWRYW1u7vCU5hkixYMzszQYkGoN8ni1EV64LYzExdeZcG8jmRUwxyc7ozsjcKvUFMDz7N2Xza5PEa",
  "key17": "5nf7peRLGSaUCoc9ySD39WNjQLrrBT9LeWbjkwYFq5YP2aezbXEGiusJgnfEHrUqrgNY8j2fKN5EjkueW9Fgp9io",
  "key18": "4QvH5X32BLxnkLcxFq5fpvQdiW3P7wAZVzv25yKMyvBbZarA7pPXB4j2Uvq7xCX2k8Z3APusZsbySft3jD3TCDqH",
  "key19": "3FXp6XtRADmFsHCNJb5LLLsx8jyWS8bid2Yj8jmuRauoYCAvXq1Px89phciJiyiKphb2hLRho1xM4ZnKLqjMHPbo",
  "key20": "3ULKTyny5Kgqy1R1JMX3VJcRfNzU23F7BQiPuQNnsTRjJVwpAnfT11ewsY2ifvAjkdQLg2Du8pRiRe7RHx2Tq7Jc",
  "key21": "2MdeJbWJeNCWTKUv1mgGEuu27W1LQcZuMB6765XxeXC88mNEve2f88kDuure7P9iwrjrnaKsGUvJWdtpGoZufVTv",
  "key22": "4sPrG8Yv2B8EtED75aZMDTsAQPb4ggzkAMAAW1EeAwBLcfwELhKW21LmUMKtuyHY1Wxu7D3gfavUaZdf7JLhGc9V",
  "key23": "4rn9B1gcP9aauj3eE3Fw1fn2ey1njcYd9cd3MbSjNKDCvyegd9wsxUP6E6YujvSz6UaYHNhNn8ktjYmhVsKa3jg",
  "key24": "3CyTc1w1Cg14LkC7Y1Yrm55ZxeZzZCgfREZXAqTEtjrK2W7eNj2pcrGsLwZm7SoCGhgq88it8MQAmrVTbDw2EHKB",
  "key25": "121M5RadiXzkyF4V1qDRgYcTZ1z74CTKc1S8wEa3TJRhT2wFVqYm7GzgsXgLNYJ9DTHAqAtbUK2tTmL9pyGAFQxV",
  "key26": "2EhHKCBHoZB4dNUa73KEiCA3tVgJ5THxdNs682TnbrzMFZdQ1DkDLwFxiVb1jUXZXStZZfPb39n1Nb5rrLGo6MQd",
  "key27": "2gh3UhwrhBo94vP7gmfhJN34NGZC1vRpEd3MzLque8SQq94JYkss1PVjNaZ7ZnfKWrozHxFgqJEAg7uJNPFAGAUS",
  "key28": "CFCsY2Tra1cufnafAveucNqrdSrPtXTqtwGDaFbnSuEzLeAYc3QjEsf5z59JWUnVpdbLnuEJpQdZoQBjG7G7xdN",
  "key29": "21DXRZskyQWJiQvYBXwWLYvtdU7wTKKKE3GZpwZdggof88U4EZDFMKzd1j9PDC8enggn6mTepLfZuAU23c19D321",
  "key30": "5W76mXCFcSPhZDJMSe2vLk7qgXf5tz31by5VED1DzJQrFKZKEQPyexup9U7eWy49zFM2iw26XiYMb8kbSvBmDZyQ",
  "key31": "3ZpZepVUus3utN7JdHedrT6ZiH2KjS4RuYsnqyNSmuZcrjAUUmV4M8k1hyqoJuUeCnRzRa91JYebxebGaCvh9j1U"
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
