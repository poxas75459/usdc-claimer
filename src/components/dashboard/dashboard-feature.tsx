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
    "3L8BpDfm8VCBSXQWoLRUAsMPF2d7YX3QJArFqhW9DXvzZFVqffEtYC1WyuuMgpagxhZZxitK841gXSdL3cWC4MHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wivhtBwSkJya9h5ysG2cTdRU1VtQFbQQsiV9zEahexztVcB6JehtrHw7X1BfbyzpKF7GK32LjeU52E2sjfAVph1",
  "key1": "2Ev6NT6uYRZeKcSCMzTBDCKxGYnP6dhatYLXDLJyaux3RUtUczfeocV6orCFB2vGeX8LRiGubWkQUZg4L4G88cUU",
  "key2": "4herqUNHzmCgRxcsKjwS64fvTSQry3z3kKHAqu4aWrvbdJ1GkYKA8MvV4S14HuxNkqiBpQNDKBrQdAUnFaATqb7t",
  "key3": "513d2xdbpxavZvKzs8K4QYwxYJjsmkLy6tx6RXvdoJhUTjqvs9Y9wF3AftCVj76RtCK37mzkRYx7iEx1QrCzgKqx",
  "key4": "4iiS2tRYBeQpHjGUyQQLPchdu8Ns7PJuBS2Sb3qS5d3BovsVF9AJuGNdNsEDU2PGjjnp2JqBSNTuhkfqkhaomiFM",
  "key5": "nP7tkhqnpGXG1sCtY1KqTKeetnYYCJkyCmd7ALZh7mfcABPun5VQvJkWgVN2jBb5VmYNU3h3itC9TE9Kadu758J",
  "key6": "5TPrdUvXTHzjsU719DVmEwHMX8Xwf3NwCxWrsWeoqP6TS57Ye6dk8wFrsCEuE9XRC99ZYiReZcJpJNjgcrtvS46s",
  "key7": "2oZugFh3GqjCGXry128AHTNdqjo6v2Wnwaw7f8rDHXZ74TJVhecYruXmPUm2V4jn2ztfv1W5aKt3eHZ1bRLe4PxY",
  "key8": "2bLgczw8GKKog3fQ35YmfJgTkyKMXm22Rx759FHhS83RLUZfG5ErVQsyz9xMAn61qgqsSkyAp1ZguCpqb6QgUvNY",
  "key9": "651HHWW67QvS3wdnwsUNVT2QQADJu3FaYmxDbtM2F4KyawCjCjb3D3qwGjemoPDAhDaNkfZpuDBbhHUziuHxL9mk",
  "key10": "BAekUDkDwjrK2kVYBaqnnig1Wji12DmRsSbPaw8k1uaK7BrpSPvckYsdBiwPocExvoYqC3x191V21Lgxj4eVbSA",
  "key11": "2cAKhQEkDRtsVbFMuVjvMp2Aqv3pkD8T4CnFp6JRpbEE9SydskjjhNAaLupE13zXgzZmFHTdiVNxbveeDLpYN4gv",
  "key12": "4rF3FzZ9d5jakgitu8AVk8cvJxreACE43VNWjwN9vFTf1gbqRgksNerpytsiYP3Uxt7q3LSfU2LFbTM3FwZiyKoF",
  "key13": "2F5PPzNrcixYxBZc5TZtMkyVrhyZ2X3sgYk5yxHiXEWbLhE91SRmnwH9vGaxywBWoAUvmwSCd1KceQ64Wbamg6V6",
  "key14": "3Sws5DKBdKj7zeMU2MwcGt9GXLmkZ6Mv1rsVmpyaQnEvRW46vNMmvrMMdzBjuCcqFmMp8WPXa8Gu8FDQRvFWUf3o",
  "key15": "2bSzq9PzAFNPYvVTwtSHaj4aZJwWcqw752TNAyX4smFZgibyLHXbyZkpw5YA32zU3wTPvnK6sM6XesFoaN7j2bHm",
  "key16": "BnFUBrtb9ytuAi4HFveHeH3nSsrZFMf4U66ahQoAPnV3SSV4LuqRwK885tGQGbaKELNNDyi8nn3iy9pojq6m4Wo",
  "key17": "2RoYoWMw6Ldq4MD8MbkMdACu2Jcw37RMJzcbsQnjNa1QHffmrBQ6WZXuH9DxqGZVkeTuC3SP2FU7YJcexbdr8GBr",
  "key18": "3x4eBQLXDF31U2YyKXYhS3CkhLi2SbeAmmu7MCn1TpKCpU1bdehzMuvz9HizCdfkzwqAaykkFx35RW3fwNPdZUDH",
  "key19": "66FmHCcdW7Z99GLUUU1tzEuA7PiKP5TH8whNp6Sxh3aaesxZGWeV7v1WZRTLuGUrtWSMMPpNkMDtqwb4haTnyFbN",
  "key20": "63eSPcYioEEp7Njg3KaTVCT8UVe783jQBYdDRrf8b77sGy7kLeqL7YbdeGjYMaLaFDgtjxvu2EgXNdbyHJYhDy5M",
  "key21": "3A9TJ1oWo1rGX3LZxQVj8KkFU37NvWAUPcZDKqrCB6sY7sX4s4XiPr1BmKN6bXhwpunKEZviU2X3Z2kTAT99RdB",
  "key22": "66PXybzZXTjaThkHr9GXGPsHXaV4GYtp8VhwWACk9xy1QJSJDDvS9JngMSHfQi7tekTSJupeV7HWoRXHuM1pQn6L",
  "key23": "35J9TuM88RKLLBPz1Bvj1wkKNQARyLAdK8paXmCDuWnKxbs1CHVhHzqpaGPdsgZp2MwDan2UVUoXNziubMM4jv6y",
  "key24": "4pDQmRPo2wrMzcKqhRR1X3Uf2m1qNzFU9feBpV91eTutyAvhEzHyaL4SZ2KxSPjeHGqH1SuXVRjcX7sJEqsiYbA7",
  "key25": "355czVAAyKXAsDoVndD1MffRPJss2UYucmB6xyVwjNqg797BRR28uTKSV4j6vqwRADZskipS8NDVswejqEmGGnfD",
  "key26": "H9Y1NdyXKUGVcDiaKdWw9B3Df7tKNqL4ao5CRTPwESMNphRuqTuNKpGW5RMncC56DezmBPugbCj6orCoLbfCxM4",
  "key27": "4CiWch4cR2pZapqCXZwrjAEae2c817dRP4fVEm3LHQphY3KEPHR57r3PcezvGCuLZXQ4u6JSa3YZbwrbDAQ45qpz",
  "key28": "3VWGntcUWQcL7akpeExgQCzw3Cgswpqsgxq3mf1Scf59imyEGFokUA3M9YEGVHH75vjd6MQHUDf1QdB1oA8N1bxe",
  "key29": "2ZLC7NxxXXSMAVnWfowgQr3iaBuyVMKWtidGeYJyA64HR6iksWopBS7bsKiVN1hCV3yCt3koRaZiAiodyE9qWyMX",
  "key30": "4ZR2ithLtLTUuyd2UvmZtS1v6i7FWWLm1wxSHeWrqneeqwudg56wdg5RXtbkKh9qwwySDcKmwxGLYzLFArzhEZhK",
  "key31": "2nZciAncTkkd9d9P9ZCaGsGEXXYYvG9pSqJYgzPP6CVVrSaYcL8H5j7nsimYhqcjgqheTbU2KfPxRGz3DsJybQTF",
  "key32": "4TC1VQCTh5BpqCWfp4uWRLqr2VsyXrmHwu2G55DtcYtPBpNyvVFZyzeq6s2CHfidEW1WhNDECKbPVpEDyDGs7nEt",
  "key33": "2skYEzAJa8g3uiqx8voq3gziw33uej9uM7JXDx8KH26uJ5KerNreHsoDqnCYXMH3yG7onjqpUaiK6PgLqBQbAcpq",
  "key34": "5ygM6BKpQAxy25kNdvYFHDS9bsSj39kV87FWVoUwYqV3EQ2JNpRighxwnfHr6AE9DAomQVx7PGVSZ5eafTSvEjHU",
  "key35": "3FchLEvWXNADGBfAivCGTtfMmbNTsAfFYYY3yUuawVs5UB1MwFtPv93u7tQRi68jLNbi9sx1HBzwh4sGqG1vYSB2",
  "key36": "21Hs6mL2ySrifnNggYVYg62G4vFEGQTwBLSaxYXQAn7Q3VaDbkB22aomasKZWJmkTL8ya4d7U5gqTRiYo4Er5W7t"
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
