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
    "64fTnrNyhAyQzqwpCv864ouXAeSucxXBKSAZqzE6dGn5pN6FdBeCXTVZB1fdbuH5cYixbQH2jnfpUaasohDEAUP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWxjVzLF2aFMvcqFDB9fq2rxKcGavj69KFj3gkZBxDJqGJByiFLrK2rEaqG1HccDhp7vZRdSM1C6ktM23yRQWBb",
  "key1": "4qaByHQoqzkNYcFE5Xv3p7HkD4KVJJeLJkSHUpvhoBMtNUUcqzxznmgEHcf675kMgBh57tgLs81AqtvkB2sxaZBf",
  "key2": "2nbwZUU69YdK4XkgdaZaHQeaKu14W6EzzchYhtkAijHbyLNEKjB13f6nBbBwqdpMEbKAsEC5HjpcaGGyapSFz2J1",
  "key3": "2eKaDiHC9Eek9XcUe5fXRzNyKcdK2DdsGDJ4YYkB1bVWQWbPfkwiTjt3oFSSkwgQJVCwZvXL9S17x22jm1RJpN5M",
  "key4": "4qNTUKuVen8cqdQzB2bm6JGRKq3Lupgm76pJx4Zn37UoNfLjiDHbmPHZ69h9L3tHApUtpm6sQatjzrRBYMJgu6tt",
  "key5": "5D3UDhP8fhgDUC5eCvmiNhNDATwSgWrDHodMDiGmZPsccPwRKddxx8qwvBdxR62geBdYH61WDBFg5LRaNGuvyrw4",
  "key6": "3UmLSQQeUf1MwV2gbpWpRFUKxH21Ah934ZuXz1LYxuDhrPJtcQLhqoY6Z1kC4nchcBN73n2eydgQepZp14LsU3Vr",
  "key7": "21K9Nusyq2wjYNWGyyx4EZ7jUkidLm8mY7QiZygFtbsnmfNd6CjinVsUCayPqxvCCpqXoe9hriyUGjFSZi93Zqj9",
  "key8": "4vN1brvz7zdo3xvLsFHMBPUgkPatJeK6n6nbEcRm69BabvvikPFucAtDCNAev48wuuUZ5pntZfwP4Qx3JeeUvQ94",
  "key9": "YuFob4Vtkdez5vJ7cuDaeeAsJwbapcP7RMQXMqxzx4THhEJdecoVCDaBhZX9tJTFmcMPSQGEw9eV3FubjmsNCsy",
  "key10": "3AfmNWSpSMLARejAUzXGXG7KxJUDJYGJqqqKj1hpTa4o5SN71SXp3LwfmR26spbvBdkYka4CgNBPsNLRL8Um46o4",
  "key11": "45hEF6z562JC3sxNDSS3ToeTkcsUNa7AxksrVEodoQenhKFhqLRVeL9rh92hhsHVpormrp9uoLY5GmNBw1DENo99",
  "key12": "48XPjCtc2GuJEqLzDJx6UWtS67855nP6nq76esnwVhzq5hWZrcs7fa3pkqaZNhQx1x7RMiMntU1F9az5zk2PsmS1",
  "key13": "2aHwKEBaPTRmM2Vefu2BrVCgBRUN4YsACzVTjhcs8JAu3tXAcuM3k8xpAxBFNzSribDz6jMRGQ6G4jshEUdwBtqH",
  "key14": "2MJosMXmK8foZHBvm65dJRXfT7XrPeBhv69m27NsYSGzbPMdfHWT8tLznXsBmNB71LmbP9oviyn8QQM5aDLfx9W2",
  "key15": "kd1EiqHdKFNSHRnUgMcAhv7DmH4bKJt3xYg5D2ummwB8u4EHGTXQ8VKi5tm3Km4MM4ZVaUD6cfx5SV2rpeP8Jg5",
  "key16": "3gt5C3qH2tTQ2V9BsXHYKyMKpKbwwZXpy8tHYJQ6JZwwmHRgErtxJVxeazFcQx1fHcChp2nrUSTWyJuU7dQZQMtY",
  "key17": "42o5sRobvtcZHHH5QuccsPucJVJMPyD3qS88hezz7Uxh4iK3yjMD8vzybdGX7HmTDNvSdHYhPco3R9pSt6SFzCnf",
  "key18": "3L4mMGRzb4hVq7YBckzuRHnkQ3E22KXCRa6fk5m2VT6TZd5XbWEM58GMQ9XAfM19XCH6bFVUpZ2trbJoag3Vrj5G",
  "key19": "31eBGwqQwgMhkyoDpRTozkpsoB3pnqWtndmqgAA2ojeexxsMGqfD71ZJCPtMGZAzPToTUYacmxubsdX51iUpotvy",
  "key20": "4P6VwsBySmseTdJVcPpZdGmYPiLcKUWacyDxSyon4XmgXR54RjFN13hjof5NLwJLL5uEENzNL1Qmc6q1S5JnSk9x",
  "key21": "4qrgNLDwhyQporhEx523YqJWtLj3CvGXLkbBkdDJVb1fx1FgCp1HPi8UCXthQeN7XwXN2a2bUycnh97AQTSPwVTk",
  "key22": "57dRKBAUhP1ZnFmjfciJA2uVSN7hZVFEQdm5BcVyMTtehKZnZMV2C8H8kYYG1G9UEhi2DyNRwbazrssXTmWAj51F",
  "key23": "VQ6NPZX6EyUVANSHaVxS9m1J6uDTQFBAwPdRx41Y2ew2fjtr2uWzo3qJ5DDNVwjxovcdgZDKmRpzapmdTYZPYFL",
  "key24": "kNis3oaUafHSDsNDqoNdqNDHiPRvEqUQnSsRXKXg1R6A9qaSf1abaFghBR4d56Xhm1bfXpeu5mA5gWv8f8af9uB",
  "key25": "36cWKHEV93HhLHWnxgpTTyWWkmszQUohcsWXfeFkDc2Dy3E2w3xH5YZKMaessL2YiXonqcBdKbqZHF8Z72awtXDN",
  "key26": "3LU9vnkYUVCzUshV6W1iNZibL7sCLybQjYDPxkvc47und5Xj5PjAurs3DAFWc1U2U67KveLmXxxg4VFyW8PFL3wd",
  "key27": "24b1GnWWAypwRVb45tp8bE6ixh9RPYGTAcVsqjkVfeWAtkQmeaz2LbcME89SwQ4kuFs2S179EHFKU6C51c7dSKFJ",
  "key28": "32BVKVsr4yoAg91uEqxUGZNjEuogveyWtsjUUZkgoMXFVpxYLd3zCwrZnCB4b5fY2aCQZmoG1AWg3rgrwdMigKtE",
  "key29": "3vjhAEH2Xz67mqdzg8i4GboU49knjMGKcpUtv24wKybs1mJqWdM4zzmuteD2CNCy2QwCtxo62953hzdYqN1tDezg",
  "key30": "3BSL3z98qmW9LH9rkwHWzxbvCJyQKFcrrL2MYQsFCmATZt7PaS5KdBWiewcDgsWHPb9d3zSeSqa8Dwi41LGXNSqB"
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
