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
    "2uhWJBHkbgQ2ovUT3pLScq7We26kz44KYrwjc4BKkt3Vb6S3XVrbGMeMGdUCse3fU3n11is84EgERdJ7o23kjqtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sVUW6eYpME4zM9SrMZGauLL3owH8ZZMRjqQAE9TR2tUS58Xd2UJpktBatk3g1ctRUxoes2gsU7t1qDK9gBY8cr",
  "key1": "VKukkyveUWzByUQbTZMGWgnJZ8Zc3ZWcDpFJ4akzCseeA7RYk3HwGCr4aE1S6ewympiqc4e7voNvrCfbomgfMSe",
  "key2": "2cEM1oqKrEbxfQVii1W18BABNYd18RX7hsVbVpgAEDGpFBLexsFgbWXwNsspM69FxQdSd7jvVooobbqx2iaYskaD",
  "key3": "XvFrcJ6SECjKLNps35JVEKs1ekFhGLtzNXXbmZKA3Fo2yAVg1EGj5cn7EfgDZ3LKtr1z3zWCZChfhUL4tnCbwX7",
  "key4": "64jZ9NqEUcpKg5zuDwDYKoDGmPDD8j9D1GVfKiwqoCRbWSsC4qcHJ2TMQwmSdd2iPcM9JYJnVm5tTr2MBziK1SG9",
  "key5": "3CygNnyz6nmsdSdfaz1snxHQxSefkfXwubik397sXkj6SD5KgqdwSNRaKu2HdiizkoqezUUGF52JKA7uu6SGTBYL",
  "key6": "3GnJCnSbzFnGkbXQynGVBSAZxzjNF8U9UNjWRhXbUU5jYDo4X7sQaSFS76F4CUssgERuaionSN2kLYktJGHAoUsk",
  "key7": "3nVUuNxL2jYSQxZdvN5DkadfZYKG9wSodM1aVwjJwDut4Y4PRXYCz7pb4wNZLXEccFbTxxu98N4Psru1vpt18Bg8",
  "key8": "5zTPK23N7mTaWwkcyiZNGgULKfMSYewYbTjV6u6AuHxtbpzrtBvArET5Fru4H9bASNdhE1PW8y9CHY7kzXUQ6r9w",
  "key9": "1P5QdHCxamTaSnrA7gyEnVab2Bp9ca6LxSxaTyVRkJhzaFA4pVqDNuJKV8QFVqp9htLYpjXn6BzVzbUAREAVUmJ",
  "key10": "28EZy7fuKMhbfYj56qNTeycbpQqY6UnGgqrL9KwqYGRMPgEh8Wrb9k1kDwpms8J4WnkpbxevshSeCqPEFFsCrGcg",
  "key11": "4MmQVbLQycSgZLH92YKqkwkFc46LG8n4w4U7yQZChuSMkou2an13TF3xpQFfdV7Z3po3M5zU8DxypM4WxE35ezz3",
  "key12": "NkLSfmc8F42PKkoLZdgm3J5raU7xtp34XwPmV6PXc5NbJQTVRh7zJMvZYqg2aZDofihkWxBQwdeGCaWma3RTj7P",
  "key13": "63eRbFG26FqHZLipchEeM8EoM8sJKUqy2b3ndVhMdYm9z6xAHoiDnzsNUouWrAWYRNzMn2HnNL95PZ4HN3LcnoMW",
  "key14": "2WqoGGRN4fPkDjB5JivfDHwe37vPXCcDHahEL5zw1qHZRMq7NDuHR4F13ybfrx38tiwoDswuhKsrkVGLTqEYfN72",
  "key15": "49KCiPawCDgPREpaFALndVPrMDKVfCy12xjnjD69dV54EjfBwyyszCE64BfMK3FTD2hsXWQvudFJDufQ7n729EKc",
  "key16": "2JxnNWQn66eyhVMv6EdKvZWPzWiBXjQidJifgjVwAWRSFWGqxaTTfdvVvpkk9uHtE4ND5DZFU5dYNN6XkBcHdrg",
  "key17": "2UJKvwTocb3XhEbsprUcdRE7QvZTR8hcrtf7S9mqgSaY6i4yrGmhF48USUZL3n1zboq9ovCiVvjr9qCcw3UjPUzD",
  "key18": "4kw8MuwUR5u4uB4e5V1L22jk2xxMf4xokB6CXqnmgLSUKHLLDbBCj81RLxUAyRUtHPFyCNs69t7gMgBvd56uxs4P",
  "key19": "5QtQZ74BAGkuu7EodrWeYquQdot6RNjjQPDMnRSREWWtGevCANu821B1r6Mhbv22YiUGZczCirnmXemzMqAmuvpu",
  "key20": "2o2aLScnikNnTnEBPvASEsToeLtZZVaWHSFdQuug2bRgAhPA2Yo3A8kH8xuAdjq1etM7HKWzNpxYKtYh8LUc8DSA",
  "key21": "nLqe8RtehkrrYBPzN6KViHd7XMpQJm7kqAjBbV87PBjm6e5MQwTrLuASmxtuUyLZ81u2jWagjJnZg9f1js7genc",
  "key22": "fhKonJLXGjDq8PjtChj4N7nsgYMmzbvfAiTTTBXa56X4nYPdp2p24xvL2nmQKayToYgejR4BeitkZKDW371DDsR",
  "key23": "3PPR2swgT19n5i9JgDYxTazzNBdwMKmt7ZEf5YgokyJy5t7aN6Lo6dgt4eowR6k3j7u9VmHjwo5Myrwqje8Bvrnm",
  "key24": "4Jhg8kX7HndLCTQsc34RB5fWw2nCStoBy7taNVUrtwo77yTEQrkZoUWUR9v6r95K4Uk9cEQdEruKoEvVQ2dzujqc",
  "key25": "5mo62AxEpCtL3ZgaRnSMhsdqkztTo1Hsg4suKxsJUUYAfY42FT1cCFN8scdaijGEbB3NE9i6gKNVrKkZPTFsoMJn",
  "key26": "3ynePCYALw5G7yjVvLj1H81bDxR34Akf8UytFhBWvTGcdqEvHBtvrCAPuCG47Ew5g39Vc37gB44CFHFEirkPtEKo",
  "key27": "8B1dPKJtrawK8FtpuJzZjHcUvDZjHMMvA8qV51Kbz3qJSfTibsVJxjmNz5yE7NSaLngrHCFMxhcC9n1qxW6Ku24",
  "key28": "5oDi5i4E5yJ5vBFVbHU2DNFJ62Rha46ry7KGt1Hv3STn7A9xc1rAvp16sWbSENkqp61kyNZGZxjzwNYBiWxM7CjD",
  "key29": "5ca54A7VSsKxgvYhM7MqiQEbKz6CFjyzvjyDchvPbWxMz5Nr3q3HNXgovUh8KhBEZs4HHqcUHWMdQVQ53votCnuN",
  "key30": "4kxuyEXwUyg1t5tvzy2AnDfu4c8GaE4bP2DucyzJDibJpxDvCU7hbvqEzEk8wPBS6zmp2mHWKtAFKfhjd78ixQ4L",
  "key31": "rV4Ct74mYAPGgrbmkPemj2Q8B3PY84z9zG2DRPfGbN9SYmsz8LSKoJzZYh95azxF4e47u4QZWSamXYNFshTc2mc",
  "key32": "3VvWmsEGabwBstshVcHHpxUxz2W5tHJMcW2HpCCgm7PzSo72twMRhejuzmRs4rY9hs8tcUoDqVnzYZ6EGGusSRDy",
  "key33": "ssXguuRzxERwfAo6g84cCPipcjLLc3UC2HnpUoLeWEQ5r9oYBoN4U3nD5MSEEDP9QHhuaYbK5bBx2Jdvh3iZs9B",
  "key34": "LSGZitpV4DXAXPyX2ppHKpKBXKXy8PaqL2xswtSswDGwcXHeB4dUCr44WX9w9zmM72RogxD886u7nwbtYBHqieQ",
  "key35": "3nqSaAfoHmrzaNdXrihxti2Tcp5KUVRATyFLWzDMXWBzJYEE7TLMhrUs25MxQT4e6TUcc8j8EXmHkmi6J5tL7fVf",
  "key36": "5EwAtPmkjRYE3qkhFWjWoayBgZRowcggq9vEYAdKjQUqgBPStdRMhoce7eFX4B6r4xP2eh2gcSqf1WgenViuP8qc",
  "key37": "3oRhNgayR9df6jYKDhp1JN5hieVg7zxd9n3KXa3mms4FTMV55N94HxYxFnER91uLgQKs7yS5wQbEgShZJBDoXxGg",
  "key38": "36doKocgCAag35mk1HnjGPwR4HB8iN4MkveGvyFXYgdSovP2TFxEMrUysYb6v34J5f5EQXxYtNgFNyd97EkRb9uL",
  "key39": "39UqARbJAdytXcnQByeNFxRHCyncHSs2gXgRhVe9XyawmSy2VA9ftXwMnbFXYcw7YtnWJdTzH4iV2wgsXfS6Xbu2"
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
