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
    "2muzEmaHWUvKeeTHTCn7J19TuKP9ryimVdqgg8rx1sc9PhspCyH2KXxS1ZfJu21joGvraeC9zCBBMbRk19anBz3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oN4rcMtKxo28nvQrT883xzCmRYSdRzg3JZ77i1Exu4sE1CaRQaNMV41RGbw4mko8V3esSAySWvjWTYZpCsc4BUf",
  "key1": "5LskiQBo4iqU9TasDKM81Tqm7LxJ5vP2hBGXZ6MXpgA8RhYAKEySkpWaqmi8ajcjHn42B1TrPGbdJ8VvZYtsbKBc",
  "key2": "2WdTXVFEFcWHRiq413gkLcckTqJUFS3vUS5r6fiPuxkrdoeZ7za1ygyMxoyNDwezsbyHdZSjxsQmkDTMX5SfFUgP",
  "key3": "4GFxRkQEcuq6KmeEx3UzZ5JaUMcb6z7RZy4p58dCmJAYF8FpGAJmDska625m2G3QVEH2JwN9U6nKDTvva29ToLdJ",
  "key4": "2vxky6QsVNiEdUfcid1E3z4ZrTDfyvce2FoHEU66PZPkjc2qKvoajKqNkonsDxDG7LNedMmRQG1Lmq4xw8TW87SY",
  "key5": "HtKmyqrN9nkL3D1S6uL4VxSY1drtYUYxHB1RkG47ULupudzuz8RC4HBHb3ydXiyikznkA6koNtyRDCKQ3m27DhR",
  "key6": "5hS2dA875xZZBJSH21nHuv2hTJtnbxxnAyeKJy5wSupQdrtoNPPrqNdjpyCveRWjXPKAZ77rQ3k9HjAGkfC2ntLx",
  "key7": "2BXEU3aFWwThcAUyomiX3uEiHQwrFiuZy6P1NjdMWuBRq8ycv9S1vFgrEjWMgZCjZ2D6RKxRa1XA5dmetVB8gyWy",
  "key8": "3mgG5WnE42dkoKVXob7VeFTCCT4Q5Cjm7rNvbhyyNNTv8G3K2q5pzDtp1ytPtTVQ3ou5madticpwbHPBmmFHsP46",
  "key9": "4Z5AxjLCUf81LpygMM9vJfkfRK3wX3FJ5fdmPP3c16vtimbzZZgFS3LF8GhoqMxx6iShV6iQA5TMUFviaH8GSU6u",
  "key10": "65RsZacw9yP65ua412T3r8eCBeSRLMxF8PAJqnNnXZryq3ubrMoBYk4M6yyW7UQaTz4kQR249Nr5ejX7cT6fdRe4",
  "key11": "3TQaoPQ4yjdjPp1peBbLRCKTLjjjzq2ucMCywnFwX9ziSv7Tkivn5UpKRFskM4oepiHEK4Sr3Qrvn4wgay434nPh",
  "key12": "4YqJ69igkpwJtBUHgSePzobHYAqMdRdcmhF6TLrwQHpLym3YziLNqj6FS9cD9WCfGfuCjxoUbk8QxmWnGuBgMrUu",
  "key13": "DBme7Zmya5VLJomzyM9AyTH2Sbt8yAQ9HosbwNdBYPSTySQmutbSikzLpBFaLFhk4sS6NwGCkqV5Fs5yctJdGST",
  "key14": "5wHTrxVqS4VyjhjES1YKmA9CthysXEatPNcb4h76SAfkirGz5puZt2PcYvQ3KojPghN1MYSmjBuX6nEH4oHBMiSh",
  "key15": "35hoDdJD3YXLNv92FMEVJTSrGtQQR3vr3THxnXGyzWFZwiVT3M7nLpCpx8iAVkreCkSTQbB2AArix2GZMUx6yEAH",
  "key16": "4Nc9wrJQmZrb7Y5hWB8tVH5idDo5kKX6tQcXS6ZrGFyxA1EPGhWY2fdnBaxEr3jsz4J6DLFcPWcJKn2zcUUhHN9R",
  "key17": "4hPmpgKHP52iZC5gYzrZJaR6HuPYVaA56LvcDcCLG1i4mtG2bxrg8vuUA5QPNauU4N4uqb6Jjp8h5yjpeW17kMdz",
  "key18": "MZGqK66waEkJomSYGMew1XmoZD7L1kuQpoZ57eQuKbX9hUZuypcrP1FVHswgWGsbtPmWEWfW2BZVzEJX1VwatvJ",
  "key19": "4yGX3WMuNBPwxSUvPKDK7oxzdL1LeQaSkhHvNSZBiREwiaM29xLitpMQ8zrkC9rVwrf79nvUEePbkNkV1msUNByH",
  "key20": "TT8YNiecvEWJbUqaynevJG22ZHGMwU45Cw2x5C9JVyW4UtehQgHLC2B11n39avJN9Gg3QmBiTppiMAyPHAMfHgD",
  "key21": "4C9LgBNR6Evdvx64nZWaeYmSrFVGisQumthjJwLT7syP1RDPrM16qU347xNojKXQdFZ2eMwpdxsjm2zETcKNxKPa",
  "key22": "3FVCED2wgvSTZXuU8Smtg3J4Jn6jB1fZCFr9Q9kTNLCVn1nE7uYT2HFLEuMxneJJESMo6F3EU8iiEjxNP9qQnC3G",
  "key23": "4yGNyGbirv3DVFZbhUWcYDwh7hYb51MGyHvpusgyto2m54raQ42HxNL2UWtLfUWW64HKh8qQdcNgEFK2zRYrmE2p",
  "key24": "2rD9TJ7raQixpbS5Z66PCJ58ory2zijHjgJj1cDoykgyCEgohLMuG2anAQgJyrNertvNUqencAAgGAfMiioKSmBE",
  "key25": "35qbTMXAscPuo1Nw1XzHcAuxVRdNHott5AiV2Gg1QKVCTXJJhEuKcR1EUSH9LBnKAaRSAGoUM4CyYjZJnSCJTqYs",
  "key26": "4Qbe68C9dKtiJBV3pTc5tUwXG3qLFgqotHBXSP5nN6SjEAB9HBmmaEoAQLqNNL2ufKt9LifrsJf9rXHLGwJapTen",
  "key27": "AWzuFPnAJ1Qy9JzMgqQhccYUhcvqhPfhct7U8o8AJ17DU2hK6YXdqHmk4K3YJjBKcHRRJdAfDGniKCLYmB4zosj",
  "key28": "5MW8knxD4qzRTYytmuH8Y8vRiueqnLGVnUdYBxrfpswhyDQAzHu8urfPjMXty9LwTcQccnBmwWLQp3wTvDMpMqX3",
  "key29": "2cpFsAyLPhrP9m5FUEgnHb5B5SDD7fSjV2VHUTL2qseoxwnp8UGcwY9PrzCaNpuadWjjyRd2LFff35my6FKVHuNR",
  "key30": "abN9x2nc1KTUkhNYj6jRNeEkPrBNGrgArSGLaoNNFYdNaEPiofZbKy55X94DiM29PKJt1TGnt9TFfkGJjTvMsa3",
  "key31": "2cejgvpr5h4JKtQ8TgxJS2X8V292om6bvpku7Bkqew2fX4FekfxCCfbaAh8HL9i6Y2qybKYDxQp7sCywPej6kp5C",
  "key32": "3d2oEauovAtQmqeWWzuAwnjDEwsyw2nG2KnTRTsBH5q2QzQZpx5mT7p3EgaqFYPZrqHB56x3bg2UuT42f5ML7dLk",
  "key33": "5horBwuxcmZkzvnPWXoBpS2LswbkQDr4jfRFGGisxSFZDpxHPDa9duL18PhVysfLnoiR8hVKaskaYQ5eoCkZdTMs",
  "key34": "4ZpQoWreLGAnTQj7r2zioMHyNx4xC2hzcrvBP6K7ZEGeBgFmZHMVmv5mm8Nmc8RvParAiMakZ5aLTVghm2kGoFgJ",
  "key35": "5Topef67sP5K8BpdERoqt4NisQNDtXMcCnfb7fZyi596SRUo7nP8nNeCJUaHJNyWY6dNhroT6hCdkjdx75gBXC4E",
  "key36": "SJGFFTqbGUUVTfTVAnF4crambRdd4H61c2xrhVgkhVAZjDFvBAEdaafpriV2ytgPpRqxJEp1wAPtqYqMMBDefUP",
  "key37": "3YaWvzet7j8ZTmvMgRRUb6TEjq5TCFkhmLFKbnoNqQYpLDEt4VskTg3MNQYykG42mztDe8ZvUYBD1YeTFZGkUQoJ"
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
