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
    "3PACumBKXzWDrY2YAXtVK2XpZywBtetrr3T9heuuBg7TdsgLrC9LGbUChbQFFVZkTEj5JhHdV5rHzsgBoL38TjpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABWzHo4MCxpNhhdLbj8Bre75cNXEv5z1Xyt3pbFoDh6jHvXmjK6oBMbPsfc4CAvLTPiupgwZk39dJpq6o4c7cK5",
  "key1": "2kqLunq4TXGvjR59QYAD6P6mYbyVuSAP7F8DSxGgtxbmDaEEzasDmb5MmcZVRoEwqVBj3nFWDzS5utP4a7fihWoR",
  "key2": "67q1KkyHRgY8MtZVsgs84KiKZMSeKNVLWWM8on7Es8eDgHYQWgSofug4vtCqUrZCjKEPKRR1Nam4ArsspDbkBcRS",
  "key3": "3onZLA6tuwsCtzDUJxL2Bar68Wg8XRddU4LeZ6BGg9q6RVdpdPmNuRUDMhDBm3SkSV7ueAzFv34xqmhjYLe8rNwN",
  "key4": "3ZiiBq9uVvfotPKa791ssb3YZHxvpuE4P9PReXUxC4ZN1p5X89qzhRzioJbPV6voKWcjkKjC8mgyJ1MgWs5TUpwh",
  "key5": "37yfwkZt8d6es6mnbsGy2shMpTWh5mJpfMzhyPszSF3ZbN5BgwXTsH8KoKFQm1TfTCV3XYNCWBeap5bFEMN52ztx",
  "key6": "3pB5ZtNjca6xLZeMPFtdMP4HgzA4HxMtQzhC2AdroMdbfpf188qWC28Y2EcZ4GwVVvLrsKSthp1Mc7ShhYFrJeJe",
  "key7": "4HtTJvcoZff3Ng5PQymnxT1PwzigcJaZnCriUxaKaVtQtsCR2zP5AWSDuQ3HdWB314zncXH89hgAH8gx4EX4yaSw",
  "key8": "5bHBf6UchLoGLumgB1nzci21zsHwynYSA94yFBmFd4jFwCxiE96SEAMgamch1wNdcQqLQcBR7p6gFuJrQBrexr8a",
  "key9": "3XumSqfSw25P31Ji6mRyaJFJNyoWWvFv9rqhxobDBsS4QpBkE5SXbkUpnY3aUfivuusop5yJgqwgKppDkaBtXmzy",
  "key10": "2vYDBbTHAxPN5gwp4MiGDW5H2KCzgYAd3Y3t8KeZsVSPmjuy1YLv1ZyCpxWTxfXDXZFqF2oqcqXat3Wxec2MVewj",
  "key11": "2ADEUGAbGG1utz8gqtURnibYiZs47j7dEWezTMH56YbWwqo4yxrWEQZc966pcRM8jZrDXhLRUGe74XUnusan9gN9",
  "key12": "4RMTNGdAWXzRaKQMzvbsbF2Ep3KYy3aoQmLeeVuLi2Qx8Spc6XrmJCyZcMrix2w8FbNkRykpXxuaNqfbTQTqmbyZ",
  "key13": "57meymnmPYTAGqShajxb1STznoisvBL555LzTw7GmG2wY12fCYNnduphdgHnVE8H8Lczygv3X6MNYxZax55hbxde",
  "key14": "k7Hc3fbxYi1sPcQ8uHV19mUGF1efPhpFN7gekyNirnWpzabYoPfuzFFQQsCzbB35kxSKz6JNicKCujKkJvHy58X",
  "key15": "1TuyL4PGkf3KBCowekDEnfbhdswX9QRqJL53SgG4GhPyMxe1viLE3tuNcuBwuedyPJJ8MvUtCfxXGJdAdgLrsyn",
  "key16": "3GMDCFhWPfT1kabbt2PwVVu3vcX6vb8iBdpkh3S4cahvYqZcoEq57aknBT3FEduh71PihjkQD1e9Z6a4LqWbrr3G",
  "key17": "2CzmX8QDCcefaUxxSJCz6o35CVBMVc8VdZaggmtW6xkP4m65mvQjGcoNVrhmTYRy2TjeG7VP69NqQEHszVYinMKz",
  "key18": "4dc3Dv86R1Ypo3cFbbayQtPUHgtQQnMmNTxsVa9nHae3DSnWiZ9snDAnnRbo8R3k8gxvMXKNxtPi6nRf1qnXJc2S",
  "key19": "NqhuUAeFU4J7zXbPGif1Mc4aa4NFUQTPhtF4xUtZEhkw16DQjRqtJhRHGR7DeM6Crvkqq7gUwGPJsJDQJPt4RNz",
  "key20": "4owiHYBTsu4AbfRNC5XQp1FrVV3mxby7CZyPfV1DTZczmfnwq6vmjdMvczmcoAHr5tASAw3EMpQe9hiTQHS8jpCf",
  "key21": "2z9ySPDXooWEnyVEdcH68Cwd6crAx5XMW6ds43HTy2bQfLxYYc9PbErGASbboGbHVGkHCKHMoEPb8A8j42qxxpqN",
  "key22": "cXQ5JoJY8tx8QuNsUnNstoQa9Yg8XeuoyRwWpL6TsaoGhYiyQRGUGGcALdGeQUbjN2VyqRkZGRfbEKYaCu62Sih",
  "key23": "2dLUu1JJFDgMTox2H4aAwY5CejRGYxQvg4x7mKzSZaTgHABiy8wk5owovS9KZ4G4aQwPps2FVfyF55YWTiy5wGYX",
  "key24": "2q1KYPmHvq4TrJ5jNGCGoMc9VBytYTC9QDskmCF28Av9xfjyGPV6n4EGz4YX78DAoDs54CJ2rh49n2ZWJdJkCuuu",
  "key25": "3hFYqc98mDd8wQLmHjzwpxRY1CcsePj9FrMavetq4zmD4oLSTjuxmb1U6ZPyzZeRQVnrjDRPLNdU54G6YTrFDW5W",
  "key26": "ittKLH4FX6bDcYqW1pn3VYx9UM72isJErBpVhmRXiW6Y25qiYyxST6SRKgGkU3vprsMHHVHYpn2nnCwQ4sywax6",
  "key27": "3AX6LXn8eRsZbHPdcwroqECCrkDijeaTKjyscZCLkdrCs7JaoKfeBNzceJghTiwAF6ZkhTe1Pc95vyyTVGgYUs99",
  "key28": "5icSNgmYzbYg7AQF4qjoQSQxJwm3ha3Mi8X9ETuHbCMZq69Rc8DJiYaLzxjo72umTfgZB2vi2JZmpjCSAXMiXUUM",
  "key29": "5bf1cd1mUtfCKJ2CdWeh5qYc8CtS4KRJKJaWJ8AnwWsqEkepyB82vznwgit5Fek6U1vfRAgagcKmtGaswMA8pGMA",
  "key30": "5RYXsRXp1r2qSC5LDGNfpSpre8qYthF9pAZPUomKrrrYZm6ufJFy4yiQxYYHaGdoauxgzn15aVUT7vGPmPgCcqLr",
  "key31": "4Aog5Xg2NRRfKWmmMhn3jnd3VypAeGzYKurGLpYncgj3rbRMoXgJ3wnLEsbVcvXbGTYjTzRP6rLcQP86fv1xQrn8"
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
