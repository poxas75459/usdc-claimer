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
    "4zFFAXz2g5F6s3naebVuMFt4QfTn52pWUHeZmQzRV1V9gf2F4ENtPxDhrujrE6ehC2TdgZcb2oha4FXLqNmoRQWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MMMq3y4SdMkNoJP33DoodadEjcQDbR64kooTBeDZSYRy583DxTkVzjddKq9aVtXVkmQNQ54A37bnoyEpVdYHAW2",
  "key1": "4pvWaMnAbyP4K522TS7BhRUeBBH8WL9Gv8221Y3aiDQ9Acbb51ZwHJseq43D2LKpoZjzHWAs79LoYroDk5BxT2Vy",
  "key2": "5T7B42L89jJDYgeVWaGUqkAivYhoA383KQhv4DZLus92LMtWNYBxdgJGFKSeLx6uSn2GWiGyv6SfxRPK3vP2Z3iz",
  "key3": "TNsgCA9ZDXhXxGovjmay18H6Q8x1HcnPb9AnLxGZck1EdJWegD6nhArs6VDDoRoRiE74D7Gb2pDEeuah79hTP7s",
  "key4": "3226kCiJmA44BSoU7QqKAvNURPrjBGhaF7xjT7FVb2dxCCsFgoyp89WbwerYnY93rBtSjeLkxzHfmA3yS8xEp5kQ",
  "key5": "5zHXTpwdFo6u1XeFdf9cGrsSmGaB3onVp2EhAyvYPaMCAJrYuE2WjCJKaitARHi1Y8mWcNjZThF6LMDaLKBVGkra",
  "key6": "282KXtd3UooonGfSfRLE5U4tefW1ov6u7ykA2arpRubDqLeak5vKPJ8a1QtyNxwk64Zfn4LMUG3dFfSidootBUcb",
  "key7": "2f3HbxyzC2bm1RqSKximCpT3PozaXDbh32kVmZ8ewJi15WYeNKc5n9iy1N8Vd5zYWDPVkdqDeWvw8kgeByioTMkX",
  "key8": "4xh8Tjnw1ocwZHUpjDxW4eJRFtRdn9Aq8WhX8KBqEHuociKZasDpSymgmMJhxGdSXZuq6MPcdmtWLo4hk36Bntuy",
  "key9": "5tZVpP9xfmmSoGFPVf56JjCV9wYh5BYi4uyosTusCxZrviG7oUHeyNesjY1K26s32EndxpJjFW8emyWFXiAMrQFZ",
  "key10": "GtxZ7xJDnGQAUh9hvskxtyeP4XVP1zaB7trLvF2vPJjmQFkuDwHEHZm8QVFGxDRz5cSeqE2H22KMYxzJTCBKZL8",
  "key11": "4GPhCam1dgTJPQ4UrrrULoGAoAUrFSqKvvbW5o6sJk1FKgwQ61tb3J7F2QGPG16bQ6hxe7qmPpjArJRrpWy3YpQW",
  "key12": "5QpaK28RGqeA7ja6NLxA63FQ87dx4xzppUeQFfGKpbh5MY2nyMjbWHs4Y6FJRirUzpAi9ivncuEjDxFAAftr2G8w",
  "key13": "4WpPzWc9vXynzTAu6FWhqPieh5xzEMgV6KKuUou6bsimNbWpQ27GY1e6rWWTh5AK6hJdqgCqGeBsqfBvossUhbGb",
  "key14": "2h9AWFHcECrti9z5vU9gX24MZxkBP3yJbS9XpDuE3nKuy5n5PtoQHv5zMz7KhmSC9kjz6CEVLEsMH9wEoEmFrNfT",
  "key15": "5gucKzpZ8iCroe8CCto7WNwFuThSf9fJgxyhZ8wYN5JeMNNsJ4ynMMwUWes5XtwAB9qr1WNoSfc3nH21jfFGPqbq",
  "key16": "36jfgDjSdjqeXvbvzhwvE1iQPudPdtMvfQtKDFmRRosGxiG4pFXv1Mc59j3PyHnMmRX3jn5JBKMKAoQDqM9V1ndQ",
  "key17": "5XB7NkfTSuNzQUKvfv6M7ahPkoPNNZHmMFigLezsewAcNfFwGoD3JDH2dot7hfdjzCiAXzxkmQPkmfLEhnV1XgZQ",
  "key18": "4csKZHfbAFx7HjKyMvXhj5HsK6nhCHbJdMHeSwZkzUYMous9nYKEcTti7zCg4rbASg9U5ik7gfgQ3LBeYtJNX5gG",
  "key19": "3GxfgPARD4ysUXyzeEK5fT8AG4vtkU3XX6135oQ7GFJRcRW2844a3xZPX2S5u1ZasQgTiPZRTzK47p5XpyVWF8qs",
  "key20": "3u9UmPhNVyJvruJRhpKCDdYmXdWrJ4mkwf6fy8FthFbTdcvfgvQoc5kCqZQqX2B81XGFXFnNrwLXYqJPxXQbg2a8",
  "key21": "U8EB4iwFGhM74iYDYgLsuPj1GTeWYZ9JAnFmZ8HfEwZWJBznjeD6Rvn8Bo85jxAEMmDqKLe4RXUPu2PKkuFRq5K",
  "key22": "3tnFejbbafU5Sz8FYcVoofn7sUrmV8GyRWYqeNR4rvDw19soEoNhWVRHjuNfbjqxDZGX5eM1e4NkuVbw18uLKKQr",
  "key23": "3SuZAErvZi51ZhgpM6dxe4gtVB3EvNMraa3AamBWs8djsFUE6RQKHbXE1Tk84aU6G1KyzdUVDiAupG4Hzyis4r2Q",
  "key24": "2LTvEqwGHTdBucHRaDrw1wW6QPJuWQCPewiWQDFwnSWV8cntFjNigSs7jV2BQK9JPbNfy2zYdajbgxCHkamGByPT",
  "key25": "2aaxvL7cxDBW4RBM7WCMGwQeyqcSSRYfZCnHUoWiYCLkkYr3vnvs8CNsg744LzaPg6iDiv3pz3gGNEWjsAoj4vuo",
  "key26": "2tGo3xrfzprzUWdRabz4gJeZ1zGGtUz7rLr1pvFamsC4x3hMvM6vGcA3syiSALth2d3FS167JjVcxWbrymCz6rA8",
  "key27": "5DBXn2dabtpqyoa3Qdmtyofws3d9nLer5WRax5rfFM93RaUcSM2kADeecU1kopbj2v1R3BwM2qgQYVgg4kVj7DiU",
  "key28": "2JnmN4Fh2qoshmhCyXRRFmQ2zxropt6yYx1G36wa3ncww9PXM7QsmtxHPDsGxSMDuUj5xGpYUbrM6arkimYaGxf1",
  "key29": "54mRFewggiQ4dm3Q2YnmFWW98L1r9FvGD4pDCktuzyFjCWZbVvcJ7nRE2ZsDAL4bdzPrbPF7QH4xAT5eGYsWoXPH",
  "key30": "27x4HRfKRgSocymkcUndhLkkZBWtPXSV1Nfe9QVW9xMdLjLzEdonraX4tPrZzhB7FQwdfACvq7jZjLg5BpdA58oN",
  "key31": "5HYXW6qYz8QXd6AKF8GfiBeZ7SFMoTmCBQQ9Tj1uxTRxikeMu1zajmTL5uPsadTAsMP4ZgYCznP5SzpFoZ7F3V2j",
  "key32": "fdECPRH2oJAbUsNnjX6Ltq9gYNtpZDL9yV4iHWW4osMtU93rhJxKtgHTxTGow2H43JBupx9JzWFQbzJJAeJNNn1"
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
