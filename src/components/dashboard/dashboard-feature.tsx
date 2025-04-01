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
    "53qtjrvzcZij8snHCiR1My1eU7Rowvot4BCwWBSFP47G7Pq3N8TDwimyvgxaNM3tSw7cXyfviwgZMyuyfG4WGrwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZRKsMWh7vm9yKT6hWB1KyUnxU4gLC87gHh3WHFRL8RBVYCFAU9tmtsXnGA44Z2N6avzfxirQhp16o68vAxcLzzz",
  "key1": "41Z4JHL2n71qsWFRPukCA1cz8WTKwDQd6gRDSAqWYh4ws6PJvB4CAuMQprhuVi8syHxgvpAsvbeLYeniY9ss6nnz",
  "key2": "1QR8U7R5NMyHekndn3F91rQo5FVgfPrn6ydmrPfjp1MmFaXXSrMhFhALH6ZysnnJYkeJUzTfoVX3Lgr6zFCGtAh",
  "key3": "4gdTw2pjHZ89X2cGacHRshwecqsd7ss86MYQrgavdsFj5aetDyCrtSaAEBfPvJkKKxukth8mK2JkJ5kgB76F8Lhn",
  "key4": "53eu3zwiTNBeny2gWBxMqC9PQwpAF3Wowczi616Q5kjb9eUDxJKtZnrQjRueMRbZepxbKUjr8v8Q3xYNK5w1X2BK",
  "key5": "5drsEy8CXja6WznEHYRu9DbUr8QFymqSZoc4sLADyNXDrtcMDHxocvFaibVJRfouS3g9uAcqJJmnivh6aR126PrQ",
  "key6": "BtkDHbJPakPf7Rsd6rvSu2L8cd1DyZ4K2SYGuS6bGG8ygprpmbWs9bqn3yx9kgomHfSKZJaXYaNguHiY62H97d3",
  "key7": "66uYW3v5wuxbwWy5hGTmQVLbg8JsZkUguZrDTQSkD4vZNkRVS55TirePeU7NtbJE17A9L1TbrDwm2jJDKaX2HdmA",
  "key8": "bF3potUKzeYJvziUAZLsEtdeNRyw9MQRzZT6FFaT93eVkZqoFK1vLiUDSiJHHvUXW7M9G1Vv9o2ubTcAdvAusTg",
  "key9": "35uWNM3m6Cw16pSBKk4U9g6MbEtMSYDFwnmBY8HJSW6aKCLsRjEM4o7ZMWgGgjQbAV2T9XYRvteLufWBrqfkTP21",
  "key10": "2SCk59vPZnH21P95qnWJyHBjBH3ohPvnvXQUtEScYFC9PReBW97GQ2eYfBRFyYmX3xttEyfYvhkZpVfVPfwew2MN",
  "key11": "QoFeby6pBGxYXASPGyo28UXpQDEpNKLnHFQheFoTGm78thkcNWPMY6ZJGrL5nvaV2PmAyZMsaYkvpuP588MKFSu",
  "key12": "4a7k38ZBaFfsxyfqx1ncoSeKqeAKgyRb7CZ43zuWbutHhY2Kr8SPoe1ikqXv58CH5ac4hWozmn9hG6AUDfJF6Wre",
  "key13": "2TZV4Z7iZVBwnSRfxU43KS7gFBcAw9KyxZ6yckhdbZc7jt1ZnRBHEQYbQ5RUpzgPFEdVGgzbUPwT8NcX883EapEQ",
  "key14": "45N96psXTpDSUwc2HwSRGBHxTz55BpbmJNfYDHiWoEdmqJFN4UyVC3wtrf9BZmznQWfwjug4kQpHtvh2iyTz7n77",
  "key15": "2QPU8tTb3VBE4cP1b4JcHBCjE3nn2rQu4oNWHFbAJypdpLd6F3ZKjPveJDdyEFfpGvMK5qgomVUNEqGPpuXkBopd",
  "key16": "BcsrUPWrDkVRGUmWAPRaMj5PPAJYAkjDMNANPwqqoTL5mETBN7m1w8jNYJnhbjPSxAQdCxtzTzApeQqYZwLyUYT",
  "key17": "21upv9X3hSCcdgzrYtcPyXKrmDDyPxLqfthLQAToGkqLiAcD2SueuK4ksGcxnZfptKnyU3WXR3f2YrN4r3UwM4GG",
  "key18": "3uumzsJxqMFUCWHxG85oRVd6ba1ccb77uiPw3zkUp86jkgF3JqcWnHr4n4FXEpbAuokn8u1b1arwNVodAXjA6dxf",
  "key19": "PhYAqT9CDPsuMepfJJUNNKXSTG8jC2ad5Y1NWnwPaCdB4sr2TwuixZWNwEdjUtuz4x7eAmdGgQbwR33weqFVkZ6",
  "key20": "2o1HMJBaVtPKwnVB9b8P617chMzkSNKiXbmnsVhcF1rmBnv9G3K5EpckKsuibQDdbPdp9KzUCfRBNm6bFM1k6vZ1",
  "key21": "36iydgQjjfPSDG6EHyN3gFy4Jpe2ZwzxaGFx27GA91UBtakUDvJEx6RiDmtiw9MhPUeTS6SiwodBrs9V8QAwzHN1",
  "key22": "2oqGAMdYfaSzKe2GXom164fVvEJyuSWmrXDE5hVWanaFqNKGF9t16HnyE838E56EALkcuer18JLABzVFDBYgLsxq",
  "key23": "3KfuBdCsKYVd1bWCCHsyvw652ZCAcPZBYPNrHTMZu8cs6V6vCPriq3nwW8Nh8jbuz8h95BTJG2EoyJiNAtwDLjAU",
  "key24": "2cwnwZJDRqSmiJibTQRn5wYWGuYSbfgBe6QzDztgDUwAz51GAd4oo6nZSSP8LneuFhRGE1EhBgEtieztw7pmQgFK",
  "key25": "3gM87JT1z8N7vJ6W1GahWLXFdP9etwQvy2MUwxx4N5z1okTAJwFT5fvGcVpec6pJ473M9opzUf7mThoa4qRrok1U",
  "key26": "2A5Jr36AR1KjnJHqTVcygKMunPWpmexVAaK34omUV8RodttJvNFK6DUNEgeBj4xQCXUV5TK7AaakXQAHFKqdWTJd",
  "key27": "NJqRUMSHr7Zo3eY9CYC5GCzMb9u1onCCSDgVvUBuwURtuvZNHkTgoHqxbZssVv7gCQSs9SfHooMrNnZfSx42UV8",
  "key28": "4FDpcsp9reToc6cKtzvuvg7WvkAENEJnPPVYvThiCHRqN2vvzX2EENBSu1oGKWgSpVig8h4Ar7VzndmrLtp3VYAP",
  "key29": "2JWtPrN9CjQKYsAWSUDgiaSAFjEC52KKAThoSE6QWmrp58tiBTxVcfstJnZod6GfngCGJwgXPcjaEa3JuyxJuaT",
  "key30": "2Lv372WsVKQLxQL5riZXRDoJwNCxHaiJ1FT2GPPwRq7Za8WFfs6t9jR5VqE5iatqDmcHUfySc2dJ8D63N4dRcedS"
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
