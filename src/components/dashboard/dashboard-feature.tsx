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
    "4CqZLu8exCWN2geECrQbtDGRRAdzQ6p6CGsiynCS4aaDs8xkdpncEF8DpHzqVpHDxUuCCt5xyR6gCSJetFr9sim9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHEQ8JrcnUMADWBaBqUrBsC8Y8ZYAy9MwRCNf6wALRcsow6uyZgPbDd7VaUCJQhUKhdBnFfJYeNMJfaAiYTc6sG",
  "key1": "5voB59JjczQ25HXP6peokKV1XJxvX4tvWy47ms9YuAXtQdRYmYwAR2i8Br14h6GTppisuGWxebyGFPg6zgoi6ytp",
  "key2": "EqBeewfN2MRBiK6osJzC4Pndx5YewAsLkCcWxZ46r14hjTcyhZ2C3p68dpAwa9ihkVgL6SGoN66rMzu1HZBGwLw",
  "key3": "5ip8v5Gf4o54ubWxDL1ZH1kdh8eHswtZgakAUGuQ964GKFrYoa1YUSegyQC2P1oAqJtUYXNp1LtAGs8BdtNTfzE3",
  "key4": "3AdwNtRNZHkZvZMp8oA1kxsdteVPhzCTa8buiLL1seepSQLrcSVyATEwc3tGHKBPbtxy3M6xiPAGEXSCtzTtF3mE",
  "key5": "3Ls1e6W1mk38Gf28yE51GK1Ce1PELDmNWXsYjFDGrBtwLDRwU3cHU7L3kwKVa8Rd9eZGTK8zQ3Snao4A2z9AM5X1",
  "key6": "2QvNHfSE2nk4s6zMVBQbiAkUPcLtfjdEGsNJz1QCFhpZsrhwahZTF35Vq3Cf6qKZw9taFBn1ct1tRWR1tT2s9qiD",
  "key7": "2ZEbFh6bBjCNkwPTpAUvQYJWFUvD7KsMuxP8FCjJmg3QtN6TQSPxL54gf5mjsZPd8KEUtb7fY9kpnbL2RNJ849AL",
  "key8": "4uKoXB9QmfkC2m3hkpELUCuaEgDTbBPvQxVVfNsEukbCau8Ev96ZkmbzAZWYUYdihfDnwDnSHN8rgkcVVoG5Zg7R",
  "key9": "4HNeN9xNHjQECpqsiCgvaVnSeF2imhG2ZuBBtKr4zKEwEFpBveo6th8e3PQ2kUFhQx378d8pLBjsmpKwKE4JKPPF",
  "key10": "5N8B8ewwgtoPBm4bthVJzUGrEdufB5MT3Q5mL5aJQEKK7yS74Hrt2uSvivBxXuFLLx5F4h5ifRXs5GqoW2hZhrKD",
  "key11": "3Dh4B65VgvwACwkNHj89fW29HpJSXKxb29Xc2zbxpNvH5UCFLzMT5CgvrgrGJxyrDLWDe1LRAm2kVLAa3uhWQ9Vd",
  "key12": "5deddhEZzH2rd9orCYBQhDYep6MJApbo7nCEfqqaSWBiykaxiRgU4K5LeZTSkk4ZAmcBefQc5J4Tjr6Mbh2zqwzh",
  "key13": "JMQ1Hnh1qLJgAfHJoKpT3rLEGpk1dFqH8XaoUzE6rsfnLS9o4m9hX8j9jxg7BDDi8dycJBxNbSFdf453gas1rTs",
  "key14": "5EVg1MkFvuLt5Cvq9b3Zr3vpoqkZqJfkDPWoB92Vsk1wYHozSuJgFKP9tJFgRRQTL6UuDzRWzoE9YG514aehyhcK",
  "key15": "5SrN52AUQg2jkK8UUU2RqRX26YF1yJfXU6MT2xhAySUtbkVVhtShk3tmUDgpKRZKvwpMMqBrJ4d9rUtfY7kfxiEV",
  "key16": "532LJ8L3JhvWyP2YFpEe8xM3joyZuEPSzJfoAJHWysgde5Sv1w3KijVr7TkV2xNsdBRWGwt43cZWjHqJPyuvhyFN",
  "key17": "4aU7YhU9eAWENrGNnCATu7WVX8K5wRXna8cazneeWJT6rBkPGLn5iKYj3Bpaji3KMNa6hCnBFZknkRSKPtPpWiND",
  "key18": "5eNLte3VT2s5f2tMVsjLYBBoj7uY22tvNGAzXDgHS37oh4Z2qLbBDFrWRhhZH3pXkfmyk5hAjoeiDyE1NTMara62",
  "key19": "pYt8AGSmyUGQ5ibj9UdpWBsaT37VFyh3dEt8NLziTNL9NPHsmJ5cbPEyB8Cjtio5suVWzceZVwun3g1MTtPxKjX",
  "key20": "RRLJPmMThHHgEPYgac6TUkLRctoNBMq3pwoFfJC7fDRCE5UDjV3fXr5nyMiBvfbtA8nLXWZxqpcEc1W3dkPrBQ5",
  "key21": "3x2DKLEoEcgeRPCv1uaEciJmzGYRsPFYahdvh6TeKqz1r7fxNqREfNwnMngAxyh5TsZkqjHgrSkAQLb9zXTpqYH",
  "key22": "4WapcbWJBALUfDUDJBzwXS4cX79XCwSHtvfVWAZbJenBs9Hq31XfeQ5kjz9P68NvnXnc9wj7iFWUSBPe4fFw98M5",
  "key23": "2KEu7PYxipy6aNZMLuy81gqW7sZWqQNEBZwjJD8G86Fy4cdaWC7YkDJQVGtD78tcHi5LP8VoNkcSNAyZJtbN9eNf",
  "key24": "Koo4Z44PnbpMdAxuf793Zs2Ru8U47aGieyVoj1kn6hUWzBe4DpXZBXcrbjLsAWzPYguAaMs6ZSGDmbCMvqfkoZ9",
  "key25": "qCzpB2aopzU9RBtYKF5H2Co4gxKhSN69oNuo2ogABUh4YkSMJeWnAw7raPtaa1jWdarYTpF44dYGyapmvpbGkBd",
  "key26": "5uv1Yr2fVVocGh4AutdNSzhdqGWqTH7haSfZwNjxxz3thaXfgpJuZsRLdAzBjE94xWgFJFLsueo5mkNgcWZ7Nacq",
  "key27": "5iBoyykBjGV2UdE5cLmGBAB44UCouVucoyD5rww5V2W5BtfgipWmWg6i1GCFd3tL6mKYU5sFYKpaMYDcUYN9f6sM",
  "key28": "5sESBNNC8f7nvgtf8XzGNY5urCs1Zb6YgaUMP8vBkDP8BXdZ8F82Upn3ToC5gvdvFfvRbTrymCmKqoGWLREVxFsx",
  "key29": "4CkzEeEHJnfwehS4AHkm4LzjpDobTj6hF7Noy6h6SbFW5SSq1qfzTRNy5T4w7Khr8wxLUFpJnaYgFtkukNSWHkq9",
  "key30": "328CBwPg1qewFchjHeAFABVPit4b7K77Pvzbjw7zpFkf5GTc5yTKSaEN2CgdPijeEyuX3L7yRLiS5TaAiFEq1zQX",
  "key31": "3MVTq5gi6U1rsX8igHmvkxyVFBHJmSfSFMPbAkzNFV1278GWfn3DdpAmUMPrHfg46JYRX9ot4pLg8nkz4u8XjQ7n",
  "key32": "5nGgFAaRfGZHPEPd34cmgr3FvAZRuXmmuLBZNZrCE6Qvc8V1YxaTTnu2pTGFbqPmjaSif3C9EZK1Fn2QYGqp2as",
  "key33": "2psdHEpi3spNw2bv76GRGExiEUUYULz86VfxveTpMDRJ8D7xHypeVdyUCPP4kqd5M2iPHpNju2SzfBAC5ErpjBzL",
  "key34": "AyrBTDKT4sYfbNnVx6X2eKokpi55XwxjVQXHnDTrt95K7Gcm95xzNEVWLm5JzUEpsXsREJaQnKG7pYFj1bPGAmR",
  "key35": "Dp6gnhADHWZzVrG2fJyQySmbar4NX1hv4mPH5BRvb1wPeWJ73Gk2G5dRkLpCtgE2axTJge5oiUnJhCyd1rqQqWW",
  "key36": "3FtqX26qEFkTW4Ftir7z89W9cTFYpc8DyKf1pddSRxg9XwUrAETptsvqNBozFHBSTVp3y6s9AqCkBZoy9jzeHdP7"
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
