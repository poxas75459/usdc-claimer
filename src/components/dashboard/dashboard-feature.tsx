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
    "KuQk7dqgdiMi2JgLJzWcnVtBijfHRjgBZsVkWt2wcWwgaBewRHK6J7tMaMVNjBfCpMS6WKyRGHMJ4NvBUDeWVtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JEvkLkpPfwmc9fJAvVJoLjmwYz3gvC7JPVW1Kco3v27KNyt1j34RVngJCHAA5wobdFeifUBigjF9kpR4JBAVW5N",
  "key1": "2aAybGEHEak6y3yMxGQSztCEPtCNw2M4ZxDbjanr3qkCDoYNoaDmF5Jen1eXEUvLtMV5Ee3WKF4UgbQKAFREGuEn",
  "key2": "RQ269UYqzfST2Jo1TCAvVV68wPPSwsLBe6dhXtFssUTYAiQFJcVeyzh6ZKPz2QWvEpmMuTRHsHpeUM7cQVkFPpd",
  "key3": "4kHy3SdR8GXS4nxgxdibmy9HtpzoeevSk3nhhJEAqdZgeLEokZFTydcTvHaGobBDqwid9GQsFqqwhjojuQYZMqGq",
  "key4": "5CeJGnYLoxcxZZyGfLoaMj3un9qGCynzT9udKmyaBZc8J8u68PpStDQW62LDB6ahxXEEFwmEqiivGLQfLrwmT1mu",
  "key5": "54HYnP9NjbesFAVuSDT5wDU26EMQ5HUP8bzMpFPwqbBN1ZdT2MpKHcxz4LYYQyqZaA9PdhqZRj4miL9T7xAGNpZ1",
  "key6": "273NXLQdso2BcQJcGURZGZJW3AchQzNTetkCn9hKP7Andyz5MTJw8QhEv1Tsdf33eWWZDPCS4gLNMeVnqPYLEw5E",
  "key7": "3DRYhzPp9429sBQevYRjoRUPqunhVAeFZXpiDDjLqvNZvZ7fQyzZGr1jSCEGxtdp5HmyeZ1oUqV8tgPpNXQ6K3qT",
  "key8": "4YJ7jjZXJMS38FkduJFvJoTujPsQRqnjPpebqdFaZFk4BpnMRkzPChiyKmYTwWZxXuWFCQ8JRX7LZnHcobGrNsPs",
  "key9": "4QHnEGqDaRxj6Wo2pbMR7TrnLtK26xrDBLmgNBSxMD39fQs8KG88EnJyBjsj3L9WADko1meN8UzBiBaGr77fME3d",
  "key10": "5AuVg678ZdwpvMF5CDTKLPKupzc8Dv3Rmrbpw2DsuuKmEc96Kvy1GJnCfRnVAEKxkEczKVA9vE5ioS6XPXsD3Kk9",
  "key11": "5NS2fvjdrRhNHZpgHu7Fndw6VBfYaUWGUbnuNoZb2LWZxiSf657S83grwsDM1hN74eJCUVZXZkVX7iacg1ZGQrDv",
  "key12": "4EKToPnKSG9wb66CUWwkqxAbbj8Pj9Mgk3jyuZezEMjehu4aka838VFJWrmWppGmEEkWMj2AkJiDVTZ7zFkZ5b3i",
  "key13": "4PLnkkMEE9iXyqv8tYU9TBpac9nHuwUjVE87JMoywYfMhtRrbqJtz8PugnjzdcLTNco9Gz7RFWy61TajW35pKD6B",
  "key14": "5rcpAebhdmKjRXPMwL8WuP5nodXXFg45Jvuyjb55K3n9ZkumfnVwSFeY7zxfu6vXCZqGgmo8B4WiaQfuDkBBo72e",
  "key15": "2xTg3zvyPT1KLzx8JWFJd3ToaVydbhs3yRdEBBteqyuVGWYXjqFU6wBnE31ni4ZgP1GDdLhhRQttz87mcRxLnQh6",
  "key16": "3LP7kfdZ1mZeLTZ2SxCoJgoxgYuA7LrDTq7YzYU8A4ZPpbLWhTePxauJSVkveLbW7LBRdx6gXPgWctLx7wKQoTgC",
  "key17": "2uPrL27N3gxPT9MTAi61KcQybfktZ4nhtFiN1QQGcX7byS9YbJx38UJoo7pK7G7wy4fFt1Ws5WkZpbkajaC7FKvY",
  "key18": "3WcKEEDc3XByey4Zd4qw26LczHXmEGf5DdxjsbYbjzaU8wtCBxiPYWNGksxLFSPJyGNXjapSwq6YiSFkV1Js6KLQ",
  "key19": "qW5kyQZ3y2tBvGXt9Svfm8XgzCLWGJefTnehtgm678Z3ea3jdEqcwSf1ssWqqht1fpAvMexhyyemXPqqC4rCUnY",
  "key20": "Hq9E1Lp2WAz3zqhCTScTo7uxgmZhSCSdYhf1nRnBN9WxLk8uPySLXP8xNt7ppRj5q2aEu8J2ud5rcuPtowPEMqp",
  "key21": "5zY64oGWCG3pBUCrr8RxrpG3xcvviVRgDQa2HpkpkRubDrZzNJrD91dDJXR5Cw2Ef3oiBarU3tWBaLWpUx4HGPQC",
  "key22": "4pmVKMh3CZxX4PXm5y9HPVyCMn3s11QmNcgemBiqA11LypsUVpDmTYwcgNjUxGfKdffqBNJLBb1As459hZ1ADTW8",
  "key23": "3ox4G5SQ1M5wsnxSsTpf7zZ5gUWByU4FasaS4r9Wjz9AmgTBZgLbJvWJcaTiJ5LwaSkRB31ML5NdoK6ecAB115Ny",
  "key24": "2LhKP74msJrrzAPSqH1dUHCjsK68xALt8rs5UhVkw31goWit7wqPJi9fBMW35773Db6rch2SNBj9FgPiZrsxPUqj",
  "key25": "PhjnFCTTHCvjG4p46Ysemfd2XQBbUZ9nxGXvzkfRuq3qKdqveq2zUCL5gKWwJMbeQjHKpWbgtP18GB2z2Kzrhkc",
  "key26": "649akqnw4zxoMAoZSFGbBfs4RvpU4KUhhbqnXKanHVv6GYKCzBQeiMunj3RhdAgEVbRvBE4tEjCyrRwEFv8zuBT6"
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
