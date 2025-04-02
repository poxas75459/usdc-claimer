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
    "3brxwp1aH2PexuZTCCv15x2ZoJWYm4DLa3hSnvoxMrWU9yFqox3DdbhdSiDT3msgT5aZyd8EH2oNju5pq1uUaXJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MaYTGKLKz8ixsr3asAHf1TNxaQqX8aYio6vpDzgfuMWKBmwk297FSw5HdwcHqFdwgaSW234AsrAfTsZCy12XDJ1",
  "key1": "2RzSmrySqVMjbUfWUWXHa3GDgjQHKPUdsBcvV48hga17QFw13bNgvJPyvJv4aEbxhfJjueyPMVJC85JqAK9DC5vx",
  "key2": "3SZWLNb4A8QmBGFHt2apHB2KjvJ5DZPmnEQwXHHK5ASwenkaZvH3raWQCzgVbzotjRebh8GFUGsi1bn8zdaSWRoM",
  "key3": "3yQqhRTJkumBe4tqnS1tULn92yxRVrD9Dhpg8VJcaWW2xKGd6Laa89DyQgXjJrcmumtvLigwdHxK94LU7cNdmWdN",
  "key4": "65JjSPhEpmPCZfRsKXs2qML4deYM3j1jHtaRZrA1Lbq5npLgvPg7phkzMi2CbvPR7yt8vDsaDnof1eRt4JqJtLvB",
  "key5": "yXDQWj8AeAr3bV9n2azKDvg7WDgJ6bc77G6zjGLocSHRANYvwuv8EmdMY7UcZmvgaQiJsCcsbSezRAWag8md3Ub",
  "key6": "3q846HYEYN7dvD85CUmTwzhu1VzYdZMo9aPNCV1zt4UxPTKESJ2JHtjFogJDDgbuQeh1WHd4BLnp8qkj8ajLUjcw",
  "key7": "4SbFLLgLRgLsMU1meDujLevTZg6jEi77gw6PUfBcaMW7tM1F9MZqxsev79rNrYpRNhZp3xHMUnEhXnTLi19ZYnDA",
  "key8": "4ZAUvHVzyX2v55nHQc7SwtmEy9jZ62yibbRn6x2VvKuwDhiwkCVSV6RB3iXFixsTbE4SeravKWTKrmyi5PLqf9q9",
  "key9": "3QB35zp93Jh2DaoD2ppwcofhrs9rkNRf9vhADZxDYPsfJQnbcKrn9kLtieXNfwcDG1feM5BbMmHTdUiGCPGz3tgi",
  "key10": "4EjXPvaWfKnyJuos1E5Y36fk5Ud82StxiUqKk2vwg7kDqQSdL8nRfbxJouja5nB6zPmMcoQG7mfxg9Ugegn28egf",
  "key11": "4Tr3dzQYMaLHctcNvJUmGiD1vTuCvrW437PGc74u1c6uitKMxrUvLecAVPAfdXNsfiK3yVGzzU9wuGc5y7ZRtp1i",
  "key12": "43YszGpzKzGobkK1npAD4mvQs5wzQDaiJNSH8Lt9yH3zxEe8Wyd83UncZHUocb1NsZ9FZc4PtJhKir6axtJUv4gB",
  "key13": "5DiyM5wihjrb7CrE9SHf1VuNtN3VsuAubc1eAxGFdh8Fn7xw9ppqgZh4hSgWrkwarW23THGXWZ7WSQWs7LsmyPWq",
  "key14": "4xmACoRszyEEeqth4cw3dfcbrHRpKs3F1qVPwTbcfbeyEYTLvNyUfWbo4TyVtfyRrYNK18GS8n3GcSZYwQwQMT2B",
  "key15": "3gAm6KWXZfy8jpeRfd9UnZtFQS1eLbarLHn6emEXr9LiAwBy76cQYwYBgksN5T48YfoVMgoRWiW6dfacJumwPsEk",
  "key16": "4jWbpeUtbmuVJJ3PhavuQUuXbtfRTwcbearNYKTToYXgTNgw479idTEejur9b5odfHu4rDT88gv6myLnV8e8MwmK",
  "key17": "2m1KwoW2qvtrv64T8iSqWeBtLfoRju8tRAZG2bFhHd5FqVk8os3Q5fj34R7wZBxjQzYBZmqte2B45QHrJFHnu3Ek",
  "key18": "649XVBU7kmi6TvoFRjG1pBYW8Dd2ngzf62fzaPhLhpt31pgf2mvV7P6uv7C9zXJL76DJqDFLKo4dd2RZTx8K3b6M",
  "key19": "2YcBmwM3yxETtcJv4SFqGBPuxXind53LcJdSJSZWPaFs6pScvAcMWeCUK7CSFWVSeuSt25ZEuT86X3qfa2D8KJic",
  "key20": "igLwugMKJngi39nXM3PPCyCXiKpiTuddva9NLTYHrg1KKiHihwWKm1yi6fPReMK6ADdBtxptpvJ8oLgAWNWSgAz",
  "key21": "6634Aaxh9kEknoWcsJWCUThDEAbudEz7ipXbwwybmtY3Rq6pgTUe61Lbqe15Pmobguu3MCrAFe5UzrEp95BCeqBK",
  "key22": "3qef1YGLsG9QVzuFBiB26Pzz4D5gH7ECnutvk45rS2qXimPCiQGiMKdiYrG9U7U9etUF4YUnDQ2ZZYVy11UFSfuB",
  "key23": "2ZXKVPhRZbW3Hm4TvLZS4DbXQBusNz87HNSp5e9FHyzvqJY5sVE9NybtS4iw5pT4UpmBnRLMUD5rm5Naq2vZ8Avh",
  "key24": "3vqp6FuWJdAqQXFxYeQuzP3LMJ3TCy5i3N69Uh9kaFcyhDFMoin8pN924acjWSRrA59uYZrpPZSm5RiaU9oK4hgk",
  "key25": "5i57TrwQzQKMwuZ4GNbz7Kczo5AaYgTnSNrZyXEix5iHJV54bFDoXCF85uutpUJ3JiFc8zDrVGejtdVfRTi8ZhJw",
  "key26": "2CUD123vCz7gm48joPt58disdG4rQLUJsCPAKFgmgxzaShF6ezUmjmuUnFmuBV5Br6E1afkk4MzScDFgbzMYpNzj",
  "key27": "63Q2pdeM34BxoKe9TnmLUKDdSYBub6DTnhBDAd2ExkCPBeXssX9Z28furL46npEtWHer1RRCLPRDUFLEAxWSDnw6",
  "key28": "3s3LG1hBC9CNPAbZgarizqdYKPeheDEtvLdyEYBS44raL6HQmtncwFDciL3K2c6ojFRrWL6vfg7TYNPRxBkNoyXF",
  "key29": "2kaSWt9Utc22dQEuEs6DviQBysgHFy6BkNteZZ3HAZurM3xcqCzFpUfRPbGLaXrVN29mMan6zoTcs97E1fGiv2so",
  "key30": "3G2dzR9281dRMy5UqC5L4bNyGGLj2SV6kVDwfxMZsAxGE2z4vwjEfMauJbAwwk2dAgp3zmYPbhfhr3f1EF7rXFoS",
  "key31": "2Y5f9Rj8DhQg3hwPf9TXGudpKSvgCfbVLsQgNVEjDy62QDB3er7UwFQw2NXnWrovEvBtqzPH9TrYYSypZ36X2yv9",
  "key32": "BHDquhepdYmRjC2miEo4PmuPEuuComwVkCw5L1dqFASvoaotitQY6T35sz4Ag6uCVHL45pfLY64GGhGsxjr4qcR",
  "key33": "4EvVGPzaqgd1euzgz1e1QMzbcsWvz6zne81WueKqgJ16ezsJYjEovia4J9wmD9nujyRHUCjLPiDHi9JL1nHFggmP",
  "key34": "4HvcxnoZSLZeL4rjYqar42YiAhRonL5DXvfam81ZV2AvvC3FPWDdj8Rt9e7YfS5F3XpAdAtfyzVA5cResw1BMY9r",
  "key35": "5D8Wuf64zLZ8Wym6x8K44KKbPEzPsfUzX4v87LSru55oiMiMzArWLhiZkbgSLYYKTxQxpGfB9aW4d4Qxayaf2zDF",
  "key36": "397Ptq1mtNpQfAwP6WRJ59cEmGtS918TSSDmcN4mVHABWoPUs81Qj9oruLaEPGA3TXNkuaVi83p9XBgn8e5txBdM"
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
