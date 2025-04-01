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
    "5H8eUs2ot69DzwQHq7nPfNqts3ZTJUYdoQLc3Buy9TD3yVM5pGpDWUeDbFH7GCSqZCzfntnhoA9gutwpjCQyrfmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24cVwXy2gEWbivPtUpSd6ZLEZYBZbZ3atD9u4fs4ZCntV7D3ahXuMvmq5zJKdJXwz7NYcooR6w3YKqDgEAUKAwNh",
  "key1": "5mf8gbde5xnroY9WGTnt89fSHSMmjG5HKezYPxzU2i2MykNHENm4hzv8B58T8gkrHg871N2DrxBZ7QR28yW199V7",
  "key2": "2RKQLVvHjAx2RcLEg1adi3Po3fFqAweq9sbKs8JBUKNG4AH5LNHVbCXGn3mG5k7QxGEU2goDbL4tbqNMJ5YyRk5v",
  "key3": "3VLPLWVQzpYKFvfpKTBBiRSyQoyweVbkZGEmGtKTpNyvv4bm4hNprooMtGnjpgPsw3ZeYY3F52fSUMTFCW6NQAYB",
  "key4": "56zD2TBPfqNkVBF21CpmVfQkCgdBbaJdpios6zzZbtb6DLZ4jnEtQURp2LKg3eTFz4ruMYYyHQ2xDjsJtAjVRxgc",
  "key5": "amRZGCcnjxhVgmPshm2ChZkxN7nesj7KW1VDb4nWE6xHn2d2pomcPimEURvpfErEYcegdpX8csi3EgL6gWsLggk",
  "key6": "FRsRQ319iye37bMknsESicpGkwpAuq2eeYbSC1FFm4qAynh3L3arTeQzL6bEb3EGXpEWGELnHBvJvy21xPw5a4r",
  "key7": "2z9hVWbYNmaqA6TXD9zyRoNkRxr4trQDH61CNEr7VzwDpzE4yY1SMAGabVR6h9kmtp6MfvWFGKZLkLaLdosRy9U2",
  "key8": "58JNfhZiRPLUr3gutsDErRQNWDrnDvnTgxoWy1LKMorBPgQj5Ujoz8CGBwqJWR9ZizHC55jUzoxYqZVzEdXo9guD",
  "key9": "3SLg91b6iF6K1AYmc34TLxJEd1SYGktudwvN1ECDA926zAUBUb47es3g5rcJbFi4PMEKagMZYjPJr3p2qWsF3YAq",
  "key10": "5jcrk1Jf1yT3fLLoQWk1vwWsGcXnqozuePrPnM2ufwbmeDGkoZZt1JmwfU2Z3u2LqLt4UZyDSVBV8S7Z14zLxHhf",
  "key11": "3fqjNTmGX2Q8isqnnAx763dK7sSvdrYd9CXxTHBwLRA6Gnvt9w48hNHxU7pcvCqgQX4J6rdRFqfF33YKUQoW1pRF",
  "key12": "VteuVfTAteSFCKQR8wKtLRRDXxyhRUT8LxsgTDgVdoGfy38zCHUP3DxHsoWenJdBU6qkm34hbKKrKPTzkmTwybW",
  "key13": "5eHdS34UsJU2oH8k9KzvtneWf857gR446vpTCrCEmAjr84xdbmg3NLz1iUG5NcScxvpfgwRgnoHKAqjqAqGx65CL",
  "key14": "s6Wv2q1HKpH6evQv97ZZxKhzD47jvEzm3jsFLZm4uWgt1UtiZG9qdihQxrrBuPKXmweNPJovCaPmZTWnhj2rLuN",
  "key15": "36ZHMBZJsguQzpZUAiNkqjuUmotDC7osMLypbBsBCM8zhdrpavVFzGPAnVC33vz5timqq17nRpviN3hB7YfbHGQT",
  "key16": "sKbc4agM4c8zUeSf8cLDEJoe8BGFskGATGLYprjf12211Foc8bBBJxkYYWHQi3kaBc34YRvcL9Ty4nAuebCzc9W",
  "key17": "4kPzhvfcZpS1gx8Hb6gb9VazVMt6it4Hq1EHt8T8EWykZYnokowsmBSiKKeh2fDgxTURXEZFn2UxZbrfA8QYQPSS",
  "key18": "2U2Et26EejPCMgiynxWxDxb3FuejU7J9cQvE4FQDqgZGsKHqTuWxoqJzc8KKmfLN6F64CRrMDpa5Dqcg6rGu73qp",
  "key19": "5SuSaR5qVvHjoLgiKeFwGfSCQuaMWCZM6Fh9fkQfiFkxKUgFmBwZMWfAJBCZJBEoJbQWB7RS3hvY2Ftxkojny7Bs",
  "key20": "W8TCZEmkqLDZxvznYn9EXMW7LmrNrBhkpUzpPBFxCbXshTQiYNPpgMCmx3ZkSUMYDcX8pgDLec2mNSVSKxZoG5j",
  "key21": "5ksn9PTkbn7b8QuVsGc4Hw3HNR8rrM33by966mMpCKnDf3qfJ89ncPNtFUF2cS91DkMk3uvfMrWjBaaCKPZ6yG3k",
  "key22": "2gGmyvEE6mkS1vURRhFCMwb3Ga8wKYwekSEu8zMNEY7qRFXJG5x852zK5j1Zfbep1a83m3GWqZAUeGgLsbvKr874",
  "key23": "VxdYF4sefKZVLG9vPSQmrNzoFbnjTUpjGaGiPCSVWmRCSB5GY9jFvfPchRv3XDV2qSvZv2b2LdAaYmwu5SNH49L",
  "key24": "2ET8AJ5DbfT5NSgKgwPMjm2eqswEjzj63vqGM6Xp8SiYTw4j1y2bQJLF4ro2x8GpGoCWAn6WkVZyMFs279wks7yC",
  "key25": "5Rxt7Evxi151FCmymCJjLm4RnNVeyS4Q8S9Wy8SSk2iPNrmdKpip9ECnNCCPqprNvvk2LjjPuB4PsQboXyLdNeXh",
  "key26": "CgTsX8cZTVmMw6dpp6o3Q7G12RbrD5NndPsXGZC9uJXB4DNQGs9aub1ifvRoabm16bss2QeR1RUcYQ2da1CHhdy",
  "key27": "3nYZoQVZnaudG9hgbFzjR5EXj8qchKDmGRtR2nMpA1Fgd2Rqw5pNCzkGwCiEYL3S2crSSrqsPvo9AVwa4ofvG2ND",
  "key28": "3wQ899pv4PoH2pg2zqzNWc4ZBQDWSdREkqkT9nPznr85PSnD3JnY3ofxDfr7bfgQugybPj8M3LygdeNtDxFZNyKp",
  "key29": "39zaTV2K4z3mYtjxDqNLza9TXNjZp6LHdoLVFSFb7qhUnbH4KHxh8e5YCwZNfHb5Fu35esMYSfdBw3Q8y7HUCZ65",
  "key30": "26zDiV1Rbr4KhRMKxHCejdsYwYsTLLempqC96q3dThmJr9PogExvZNHYddU8xcJcDh9dDgQWrHuj4HQVvfDGXtVJ",
  "key31": "5eF7CoemSZHW27iJZYzjwgBB1t3D8HWPJogmirTXm1FQohvdj9scZ59DeRBibCwPnXqSYaJTrSpWok34gLEnhPvk",
  "key32": "4iLTqjssbwcQJjkveeqTut9MM2Dmw38upGgsn4zyhxZwRncvY9ETKmypACe6mRVR8hk6kh7ep7CRG8jaZeKQP49",
  "key33": "5vK35bU5LusRiZVqFNkn7StGMzWLnzubMEjGtEXMmkzuBgHKBpu2oeLZb5r2P2XJbMKpQdy3wTp9Qg1Xb2Frifj6",
  "key34": "216itCmq9JKbLLx6M871x4Dankr8UZbZEBUZeFM1VATs6HAcjA132q9Cd5wcSQ8uQeXu1zE2SHeJHyhcAFC76U8C",
  "key35": "4izpWeiqMYA5aeWAbnEj7xdSfenQjXikmfztVviU8TJL9UwccrayVoPvwkkyLbyNMCg6B83XL4XfVzbU4HHCryCc",
  "key36": "52Wy9xzkmFfJeyf8jWTyEWk4RaALz1W8XghbSW8WHVuQ1UtB22JqST9HwZ5M3aCPb4NYSTH7xQnY2nKdWgcr1hVA",
  "key37": "3KLdNhhne6pepLu3sY2DW8PoyN4vjGjbTKHF8QxsDM4nWk6yJqa9Zo56ovXHA3YFhrHff1FSU3pFX13DN58kNasn",
  "key38": "3RXTXDyJu16rJ2DZBtTbVtFGAWFqx44XjpL1nrpzuicQHPX8w93sJnHQCX3P1D1tpC2EYwsP6nx3tE9eGZaCkYuC",
  "key39": "djAftopr1GBecxZRPXyBSaPPyaE1egv7ygWtUKdckJSsz4t2aFrK1HCPUdjqWZo8qbhsZQBkPTaavQ8iLFqtJkC",
  "key40": "3WQkMm25NrWemEuUPBNCESSyARW3kyc7bZ86fAbwHk1HG1yHdGrmfsf7Qy9juHtT382SbvMpXysM3NiqoVboLqBp"
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
