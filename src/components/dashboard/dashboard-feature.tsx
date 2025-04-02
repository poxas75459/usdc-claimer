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
    "3NrPK8m6vUSvUTHkjMmK6849FPnVX5jntv8rfWRz8xfC835de7V8LE9qznhmVtWjZgKJ9ynyBnPNRM5eCwhvzBuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBYEx2X2QCuPs7D96DeXFfGhBo5u8cXzpAYdzJHTrem7GiqmeVZtsPK4YRzhJGcbUp5UQ3dDKSqUtaHcjVZKeJD",
  "key1": "5yMU1kr9wmLTWuanbXsqzAVccU1m24CmQjs2D56XXonzHEsB4PceGJtnqXTzZRpeeewLSLtGXyV45GZMFgewD7UL",
  "key2": "FznCFJR5gUDowM47wGnq1mi8BphD6PFMsJN1PKDMpb2bsDHD9Yt8cVxumFxhuvxLXKSpbbmwSLbTqwXimc1AEFu",
  "key3": "5cJ3MsdpYQuxyEYitAJnYtV1jYSAdDqNxtfoKNaZhpodB3ByGLCr62Yekj2wHMChYCD5sUPqeHGx3kVTpNCV2tQG",
  "key4": "M1HijywZyXQdHe9mtkRNFLWmikFKRwzMFkZa9P2AFtisUmqyrsGvJWPXofTrwjE1KD5U72ehYgXsKR8yd6D7BWn",
  "key5": "4xTGJusJSvGc4MQphJktDU9KvNDJpGNswR9CJAtMPcuTHjnENhjWqGPvdgWQa6LzV3wutKTkqKkZDvPN3FT1ekPz",
  "key6": "5DtzM5BTD1RfbUrafjbidPoPw7tWquFTr5yHm2zPuXWqS8Fw68MdjRjSTYaxMhF3XskbcweiJCR6Qvchzs31dWqM",
  "key7": "nmxtY1mDC8PYGgFgXDRRdvgb5rB5SukurC5p2b4aSMBBu1RVTSrKfbWHfPnn1J88EmtSttqasPdVMfnmmLsySSg",
  "key8": "hg47ja5CxNnyuP1ZyUbARxPydAzP9AgyTauBjy2RwDYxpU88y42P8R4UKc6VBnj1TMygV1Uy8F1B45UGcx1zR6F",
  "key9": "2KmMto8bSQhEvnw3xo7FAFuHU4Up5YotcGdSBKzkN7gTz6oMLe5tSXf8FHpQzLq8E2bQg1GiGpCVQpNBcb6JACVF",
  "key10": "uetwz5K4GJDSFuoJYxvWAECZhmkdV8QdKdjK9PxM6XK8yx6XRB9MdPca76dr2qDf4Y8VuG65KkXkL8DDNQq5acc",
  "key11": "25mpi9LBHsAKJcsWrjTmjPSQS57aGHQmgtqFbZyFE1Ey1oei45e17rUHZhNH3DKeDCYqzTNoa7jMR6wiNJwtSeEQ",
  "key12": "2JQXWZRdFKJnQB8ssiyhhrfutDyP5pCsgBD4rmiCptGpqwKfFgy3tFuwoB9WZ584c8j6mBDY7pNiDfuv6JsuXqAy",
  "key13": "2mCL5ijReWG9CqeNpGV2U9QRp8hDimn2NC77sTn53Gr1WW57PLoCVp6FNUKqWP2zYGFKJ1vBcd5fz5ZJtbPNg8AJ",
  "key14": "4tQPDCR9z2AUq3GryMzBBT5yxwKEo7SCVUNgYPAQwLbtfC2ohZcibdBwGJvi3cmH8fK2tHGgc75G5WKFATssbF9w",
  "key15": "4xZkPXXt1K397YMCQi7xSoBxp1BRnvGpJy8CW4VjTotrRXnjLKz5Pd1UyqS9dk7xrJKJ3J7ue7JCG87YWgKZsEHP",
  "key16": "2aai9E6oWUF6TQq1RyKfCGLhfS8CoWAXxgC6mQ7pvV7QSx6BFpta6t82UmPM68JoxV54mVVZsKduKgNazmrcmu5C",
  "key17": "5U6nqQ8nS1EQkHWCQipGvdGR4iXwazEnTWmFFuDGNatsGFoeC19N4sWiXmCQCNCA8VoF5R3VXMkes7F9tngUqFsA",
  "key18": "3dKhiNWhzpYVGu7aJE9c9eaLd2YzF2TFZjnFkQyKa3zx2qFCZKJ9ZFdZMJExbUmMb573KjuHESoDvzyPoTYhqtBR",
  "key19": "2AJCQ9cWw25ceLLXLZ8hECt8jpDbanoGYFh2wqr8CTEPS1g7fn3xisEfeTHeRKSm14PKFB5KJcHEuXcchPBwSq2q",
  "key20": "2DXcBKBtmZH4811mtGQKxYarqAojKmj9PeLQtDEEtHcz3n9oeaqnbWxwVK24EL7US9SXE9ic2oUVSPtTFhE7WPqe",
  "key21": "5K8aEiQxUpnNPEt8FMhtUNMJX7DXGmanNbppVitXrCbdrRo1CdEcXjd2RpnapcWqhUZyZRxN9ERSR4kNKWeJDLA1",
  "key22": "3nm3HBdYMN99FkUFnw5Utez2EXcF6AXHYftzH66wvKRWh4kJJ8NkyeY1Jein3eo4tUMMR41xDdgQPiSxJz3osj2B",
  "key23": "2zScdYAgbHcVYGJiPzQEVdczpjwckrYwKoq17Jkx88wGwUt9rgUwot5wJAEduD1JvLGvonW81LZTBnFjMYHkgqdw",
  "key24": "44mKbAoUYfky8ycAUjeGTuYa9omJ6tvDsCqhjDeSiQMh1vLmVrPNyU2LEPG2s9n6zgXyPeC4YUCn41kDNaSvLCDk",
  "key25": "67qvqvpztRnXybdMpcHnuNmALSmpTh5Mmv3wnZGEKKXddct4Y6oLbdtkQWy7TqLihoAw5tthDCMpTTkNeHqp1ZPa",
  "key26": "5EXguYJ3gBv1yuJwfkuPpmE31KaXP8Lf9RsPqwkwJxACFstLTeAdzbHcWqqX2rWwwbButonjr4f4fEAymsYo8nER",
  "key27": "4xSAsnUR4neMdzWxQWEMdp3GkfhVvXdogcEHYWBb9rY1EmSX392eoP2oyezZoaR77L3ySN5zBDctoZPr1EZdjeS2",
  "key28": "VSmgio6qwnUxJm9udFkhtCM3WqWMzehk4a8KnKqJi54DJA8fHJGv43iQsb32VRQVRdZFDP1kdYxMzMvB58G4T9j",
  "key29": "JkwR3zw3KP1xBj8oSiSoFvFhJqs34iULU5cMr7iM8N74kEVr96DMxLGbRz5FJCUGj4Ht2RPinTaALK2xkRxbHPZ",
  "key30": "Zba3XJotP8pPVLt86K2SrB2yqa5Hf1nKFSDNy2MQoTMainTJBuror8pSZjEh5u8DpN8SRX7b6sP1UjoMdz1cYcj",
  "key31": "4q18RPqbd42tSPeetGx5Sm5xWX3eaba39kTjFMi2UUWswkFxBxeznfFdERqUPag3G2BnwPbKor5CcrNtWNxnp3ow",
  "key32": "4ZNbXpz4GC3vzGPcDB75yn2p4haFb4WPzpzZcNqX6j3Vz1k3yarVSy9NREUiyxWHvey7F3LcDt5FxjmV1PRMWCXy",
  "key33": "5oRNQQKF2d7gR2v8kKCAkKWwiyAFwdbUQQtADZoDSvr2wniRwsxgK56vaexgrYAn6J3hTsx6rKic2d5FQFjT1UQs",
  "key34": "3UxjhUonBoSjnEkFjXZUaFeDhTEdsjgoAgwUHYqx6mVH9czFRVWATMvykwc8wbEY9kyUQu4osVmDBoPgjE2yhqnG",
  "key35": "3k3FxNGBFf9Saq5Soxkceqfd4GAJN3D3eDEot4ev2zWVnH46WBobaRUgtQ5JXaz7E9WkjoNvHz4R6tnb8tYPy3ma",
  "key36": "39oLWjZfWM7DMs4WkEUMWPbsggt1swuzwKp2QjXSHknd62UMKPeYf9o9tEwVnMWN9vZiecEphpGwJAAPn81Vrgtv",
  "key37": "2Xb4qQNT2oyW1Ed7uhbLtPmyPJJqcPTEMLCtVSNqN5g7ULD5QX6xP2n2PiRtmYBR29ozUvsgAiJ95dv4k3CGKc2x",
  "key38": "64JnaywU3CnvfnecEoCVWLZvCf14DoEvrrKtWmStzX5wJ66JMftpwTK46GwqSSm2Rg4etcSFBjLx7TcVp6BwgsK6",
  "key39": "5WcNX6iMazUaksAUoWcK1DZZu3k33pA2HBKeqKedtDgqSM5y3SsJaE7bBuSTPzH9cgaS5qYuQFQRhswP7mvimoht",
  "key40": "5G6FCAx7LBtmGrhCo1J9dGKkz6wj8yP8TveymSoB6Ektfnw7Vx3GnnSfnixFFZFP8zSW2aAHrdd8khKZe6K9wCQp",
  "key41": "66WbezhXC3c6HdFb4LkyGEX7WteoJigX3wCMph8rv8brWsUHmPEgLwLMjnRjuhKiE43rCmMBu1ouAXgJ4rksjuf9",
  "key42": "2YP4zFToEtXrsLwuiQ6GYthx5qv2iZw1FAhNEBNbQCpSRzrprqHAwyRZmZXY8ic2xRQRpYf3ewqaA12xBS4gEJh8",
  "key43": "2w838zBGGptqkr1CwFFJJdB1iK4DU6MEboA6Za4XtZNJQyWaHfe1zB5dH9YCd47zHC6maRTsfkxEcRDHu1d3if4z",
  "key44": "S2N8hDbEJG8FncGDhq8KGC5vT1THQW7BSsUqj9i7avwVYEi2xR8PVhEg1r2g8AHGMeqGFgRiYUVRMQveWLeBpN2",
  "key45": "4rKuyb24c5PGMbyXdTR5Kva29rtNTtHG4z836dXEBY9XUrfD4zZrWRkCxmZrYStY14crHjGUANPfDNfs1wLTyTnr",
  "key46": "VRc8aBDBiAtoAZidCoobRdiLqRxromwHUBJgKZKD2EkM9tU8m3dqGg5PVYSkU3R2CqQLpzSnLzPCTN9zNF4rKo8",
  "key47": "4NYBHQfznaP1oQzmTHuacZtUPyTNXHkpN3zXia5Fi1gcSdzQJKY6w9MFGg7yXj22W4bF1eadEPmmrzXmJ6md8bhT",
  "key48": "3bWw6gub4yaHh7GLHZjPBsT1XXQp5xxy5HXRPtPuAwqcyFqEfQanBzfnyLPv9Jf61RvUK9P9MccN1zUVxCQLFJtk",
  "key49": "4jnqJg2mDHZ8mZzzVFxWUzMHBwW6x7Az5pM3ngbYknT76uyaYwdPuVKXbdix6XgN6uYb573emYHgzCf7TyHKDoND"
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
