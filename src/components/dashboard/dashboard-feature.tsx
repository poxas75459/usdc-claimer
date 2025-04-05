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
    "57Wban6w9NDHwGdyC4JrN7EcZQRcsqjmM9DhovXqBgrs2TKSqR7M39ufGeJUezteFRovPei3Jt3spyPQz3cWDoNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592xUp6cNpuguLLLekq1cpn8NaBapMT9scAY99Y8s7S1tsKFoz3TYiyPwAyCyGge8of9qTFDq6Bf3eKyngcssRcM",
  "key1": "2aHZzMqCMroBk4hYTxKLF94TJBqMu4uzLDBdH2G5ZnxQS7Zyn4sMjde7LUjAZj4DK4zRgyy4yFkQnJnjkG74uiW1",
  "key2": "FVqQwwQJqRSx3GofaqL4Y5s9gcbzhJxniDFr6YmnFejwYtWToTP1pBumZ4dADJ7Pj4N8vmGZ8voH7p6Cuc2gErj",
  "key3": "3bLpTMo8izUqUkzu9rDRyREFyiadtXpP9DGnntGxs3ycivCAkuMYMZRSmFBRq12aLbEkNeDt6KqwtSt1HiT9XDb2",
  "key4": "5pnTvsBGwr3GsWmHke3sfBEeCMDwxrEGxWaGqKSdZLag22rDEFfXxHTMwNTYGm2diZMur4pzagVhni1rEuxY3YK2",
  "key5": "2Yb7KuqxJZSDFNDb57tnFwpqe6ubrE4prAeM4oMgAevTZ9D3Kd2tp3Yi1txUHaatpq23LXFnqzFtAnTffjazSkCp",
  "key6": "3tZpWM8YFHQmaXwx31w2rpLNRMruzFNGLyukmevgodbSdobmXAGcv4CbAHdr61K7jJaStmyDgRr6MVd5Y3MVjEBL",
  "key7": "5u4fXKzi6En4udPEFnM8tH69v1MdjJiD3sbAzSRaSLFHpE5S2mrq85SvbaazbqKSX5VTcXinak5qLEEptpeHdFKX",
  "key8": "3kYNezJrYJEhcYmJSF3M8FzLGDQwyp1W2ZEWpjK9dRcCpJVUv2LZdiFCcNpnMtUkk67dPHQncKxxj3EWqQ7eTGAD",
  "key9": "A5effzHtvz8GTWhCRhfHEcsMqXxojv9T75Csdn8Gb6u4e1w1ejUa5N24G38NcDivafA7romiHZuQ3Ef7kcAVKbb",
  "key10": "4aNDSMgttF6fboNZgcunpScpTwpo7vyxZ5WPmPLrqPRjYTeVbWdktHex2mXFpQcRQ5LafgL4JogpyZoA5qdogXDZ",
  "key11": "25JLh2qniujnNdYUefzS7yy82sWpDzvnA96he6BnFEiwTacghqFDwPJZNec2y1Mj6KZm56msraioEZdfKa2zcH5a",
  "key12": "uqfdwDQrHC72A3AQK4AeNcfR8NsuJq5uRYvLWfjXNuj9MytJLTp4BJ5o9pMVPs9PdB62vv7vvs3WrVeeu8Rj2HK",
  "key13": "3fV5BCDXwzxnGktv7fCUBrK2vQ9yVB1YsPLHBwk183PFujxwFy8jvqUMGihouXBsRRXzhE6XehXvS2QcHzNXiXto",
  "key14": "XQj9zQXivVFyKNuPtapNjc1YLcewVuwZtmmajeRH1JHk5x5Ewq152zUp4bE4D5DQUS4HwpumJLRM6go2dtgo6rb",
  "key15": "2Xvo364QAa3R2L3aFS4zvhNVMoP7crXEPq3M8sUakb26cMQswa4fcqwp7KKDv9eXmcSEKN32QUVtznPj4VVxDGab",
  "key16": "5mXYQvuE8Q7i4a4a5z6Ckn5CSVcawv4TG3E2CyP7C3AER2yGAGTW7bsGRn5KL9hQkcGfjR8FrC6vp31Hk2fmT1NX",
  "key17": "3m8rFBGjrMzMfNVucFEbp7aqj91f8jGeGWjhRybiWz9GcscpDte5T6GHUkn8JvsteDtuYPGvj3Z5mLgG4JBrTkSj",
  "key18": "5WfJ1EG9Jb9FV9CEdGvGpG7iYBypR55EWfwJuZ3o1Qfb39kY55mfwhPAT5Km9aJaghy1xrSsjLavZLvN9oWryufW",
  "key19": "32YwxPyAkFUa3JvLn8mB5bSJxRVuwJHDxqNS4zQqbixmmppPsMvJwH2gSCfx29PgXxqMDytQCSGFT6oGfezNHGqA",
  "key20": "331kwCJzP9HanB3PAuUc1dvM5W1FajH8G6kZtQkBcwxwKFD6FcYv49z8vRLCeeT8WH6LvSsciwUVAhRf85nkAWqk",
  "key21": "43dFfb6e164MjPMmxDSWHRG1GeoQv37mKcaDc8UPBzQCf8tsRGV4fdvLXGCG3QfE99au2GnR7ckA62bB91XQoRQi",
  "key22": "3Astt5PxDTXb5Khz2dJC7Uk7Bg7oEEZD6vqkC3BGMCbLcyWsyLG77WcNtWro2nzSqTxR16AbbyJyUbrT6rmKXmzE",
  "key23": "41obEsKvLgbTQFDKoSoMMX7rJ34Q1CxLHhVoCYAggJo95AfgHUrgMJXdTwTC1kU3b6d5bxy4B17gVB2fd6KNKyzK",
  "key24": "4L3gRVLNmbnbdLAyqbwfUQQTqA7eBJRQmd6kaxS3sV3hE9og5MRUqqkbBytRNgWak3kwx79txhoP6MSNfRD8eC7a",
  "key25": "2cnmrmh4XjD7WfDNh3ETA8Z23t4QxcCm51oaimPYHcDCnjg6JPMhYUXMKpxMqLVGqwijLFZjDapp5jX459gL9zJY",
  "key26": "66M3MkdJbbEb8DkDwpbqPKuo6RuMip7EjeCTFGNeeKiLY9vjViXJd7C4aMcnSQaa5MHUjioL5iDuu6v1DcmbT6nE",
  "key27": "Lhx4ZEC7H7CGJQ3kCWkX75Z9aezZ993eQ2pM7zU9rSNFrvFRrkCNX2aZBJy8UXvHjQCMFfJPj1Whi61gtboDUav",
  "key28": "66TPJeNVouf3KZjhLXSJ1qPResANpSbnA4wxTXGGpXz1a3DvR7g1iTBbdSg5Hfcskaa2L4ToNBFnvAYYWoVRCdMn",
  "key29": "3Aewi5AubAgKZxY9FBxAxxxSKux7mVrdZK7ngxSqkaEst682D9fTi2VXpZmBfmpQs21db8KJ3BXXhntGPnRzARxj",
  "key30": "2Gsi3H3cpGwPiWbxQTwM1iRRb2sEDZvTBbJ9DTuDX9kuxXKpGm2wAvtzsjGJhxKMuhyQVYghX6FLR5cpq7ySa8tW",
  "key31": "5QUicddcFthFsvCTqdChDceVc8M7Cb6PTUFJEQ4tJ6PMikvNXrKcMKFNbpg1JykJ75Zx1BjKVv7VgkbxrF4BRZwo",
  "key32": "418jSgP64QGBcnbA3AkMKuwUw3fNsZ9t6g27TPLxc7keuakjt2LAzuRu5FZjForEpLRDvwuvbAQiZVrqCtmPbtJ9",
  "key33": "3ZPKoC33fJz3RWzXkBCntBavRFD1T47YjV3jXkemhCZbd8KvoXEZGPUTTMwGeGrQGJ8cP7w2zxmrVLq9VKCgZodU",
  "key34": "4yunBQJc34kQ2dZFTz6HDt23CMAzEGZhf6HcypE2grz2PA2TriEeoTBjGkHBo1UWMnWK27pPMQv3g67a3xoi1rfk",
  "key35": "5JQneUWEsvXEX4cX14gbXPbn8qABGR8iExzXq5AqNHmx5n9hrCPvC8XwfcFa2gzqS7RrZ4nojBHTnxczBKwiR2ty",
  "key36": "3KiyT5HUvzsdMdK8EBmb6ZevVso8tpRTaAqExdY9Pzm5bRrVNXBLzj1Fk7TwNDcfH29G1xePKuH8tZfHkg8ioia2",
  "key37": "2Fiu1hikAj3H968zPd5bnjyTH1nF4SEDkvqYtBXWRkhDQH1XUChM31hdk22gbR1ghEVAyBGCDWy6xBXuZcwTD9jB",
  "key38": "484rvNLEWUb6Kt9LombV8F37LrV6KyWMeYPnnoDxbMFrkutFdcjxWzME2TeD4pJVTrMxRYVNznJTst79Csb47sMK"
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
