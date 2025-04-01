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
    "2PDiAKBdrPYEMkc4VaFgYf3kHMj8DEbMHtyZtUD6eTxxpjEZGaDX8hXYPxxwgqieSDBnJTXJZ3nZPLpxntCGYEno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z7euekC9EykCeCxNSYHSjHPKCwz2bYknnWA6mCuSCJJBHBP7HFU9GA51XFdzvEA8GUcoyS9VHXUozs29t3okKUG",
  "key1": "4EtXxrHsWLU9UP7jdrZNRKxn44gbdMTsuarWfSNxdWc3pEovoaumDCmM8m6CaWxc8dgcjDo8icy2UhtGJ7veJwfG",
  "key2": "xz86PCDuLHzAE6MwdYtyNovNjPocqNffqkiQRqr4w9wfKnXQ8MSXe9xg138CAiMDxd15UGQVY57kWr9KkC9CqHT",
  "key3": "2rSJbHYkXYaSMJhTpGa24B2AnBzBBdVWvUt9MgdWqVLniJVWGM9YGWPXJcXHoWVB8fGCHPvbQuuUB3s8qhHwwqWB",
  "key4": "5PmjfySyZU3HtaVpEDXnBsHAGtJdqRSdVXwZUmN81yvbmCNYxLYKvgyaaMobusoUWn6HHiHyKT2aYcPDk7Jcq7p6",
  "key5": "EkWD8Xp5rkLedFHi98JaFrwZJKfDP1mvPPS2eWkyL7HkekukmYagk4cQfGrXDJCTjT4heAdjTEwMaQQYUQ8r1NQ",
  "key6": "4kMjgXHAdTWZtcNDd9rhYNQ5aBWT1VSXXRjfFKMBdx4GfhpnAVZJZw73HDHusJinq2tHaGP5SDDrFzYcicjiZTL1",
  "key7": "Y459uMF3Ci3kG3cNmCLiLZ7fRncm9Duk69KJx2B1P6y8MLsEmKVbxjYPjNHrdo4quC7nnn5DJHmB5UqF5Z5XEb3",
  "key8": "2cu2EENjdxJrzpTB6vLRJweVoN8Zzy8bb5Dxy6Kc1MNYB8u1e1NJhxwSmNda2DRwJd28DxyYdMPFCzWT338iSNdd",
  "key9": "3UC4maWUghUBsMKFtj8yGt2v53S5HJiRepZbLZSrPtn4TDoogy5kqpjrJjVaDc4wVvpkcxN2MrhQZ4QoL6uwuSfr",
  "key10": "4sGyu8omuE1FyWthggJyc6feCRZr5WpQNMMALpn9r92wrbM628ihTpKGHvsA86ybDYWToNbv2zd9vrpST3QYcMkt",
  "key11": "4Bs4TuGAoD2XqVQGZFiES67MFKyeFMPpJvCQEYKBPyZv4toouLkFp8pHVYRMGR8Ue59g7NfTeaqzWGH31e8zPHM9",
  "key12": "5g7N5yBLQZKy3S9Ui4PBuQiZvy1nvSusXSdkxTWJqB2WPJwTe7C7UYK2ZLKZ8GSXnaU4yCmqcRSPpSJrCRiCJUKU",
  "key13": "5RTdndbodc3rhhrtJC3sBqeUjGgPBWED3LNNoWHybG33UQcZPi4G4qRxXvGe5xxf81fix6GJHUCsbQwvhv3V5AuU",
  "key14": "4C3W8dkxA3riNjieERshF92DwHtjoCBAnCoWMs7gSRqVoHsZeF6ofADRCjtAVTg1HURL6tqfm9xqD8WyyaBVwB1K",
  "key15": "5WUTpzNSZZB7Czznt4mCr22UbogpS3yxR2xRtRPbjATTTxvL1fCNJFSR1hjraq4QQYZtEXEvB12KTn3AxdzRFy95",
  "key16": "23KKn73XcrxKsx17fBweyZTK3waRHEFC8fsriEGotyUNF7v62bhqm8J1AUFYsRWr4jubnh96yhXieewa65UwG4yQ",
  "key17": "2hNXBaTZ8TM6swoJ5F8GBV3uWr2b32K45VnHmWmEPxFpQ13HPe25D9KZ9C8VGAFpDcg7vjwdKRpC6pSHSynDZ4Cv",
  "key18": "YdLganGN7MP5WGuLbfZgCwHzyJYiW9MEfLo6EHmmd7zA7qtsC8Qxf2euCTZyMkHPosvyZM1U3dCuxReDeBe9qnV",
  "key19": "5gDW9CZ4T4FpkZQFDHF2nisU2uWSajpdh14sno21CXTXu8vRd14xyhcxMXubREGqmubBidVmib3uJ8tzzXT6Luzw",
  "key20": "2mi23cZjPCXBihiVAFbV2U4iJd2VpFgYKrNLArfoyaZTdgeKhaZS1d5hoopyux8hoaBHbU7zKLMUgRqTuaNh8gHf",
  "key21": "yJdzeRyN5HNgboYVjAc7kkyNFrJ516LfNgJV8pj9DbG8SAwnzwGfQZRiJxTaePgT7gAM8AQiz29wvMuiafduZFx",
  "key22": "4JUAbeJZZE7FJvzZbemNvDJmLBKU9FZD1boAbRfjpJeiBCXATB3opvqGPaxLX6HJvEbzsQrEmdKxtx63Gfnt2krT",
  "key23": "3k3qeBE1mESMEMkk5sQATE9DnSvTXeVAtqffRq7XoMgGF5ZotZyGNnsfk2jdU8kbNknE2M7W1AMY2a1i7uvYL9Ge",
  "key24": "4cKtwUkP4JbDjSdEzeo9KvHX1nDFZtpb481HCXLUkP4e3chhoG5J5qpxffHwxxioizEiVTdkXRwq2amFXFKK8SMr",
  "key25": "3jnrc8AMHfqHup3xfuRjc9L9MroSHXtNwc4V1kcFCkvFRZMyRxNvNNxMkyuiKoSbjtwf8fRDfqX3kimT1foZi7sZ",
  "key26": "2Anh36arGKQfmX7PjGNQiu96mzWW4vBoD4ge2ZmchAzPyd8ceT3TH8Dqu3HzznhjZjXGHJ9hRFBxsR76tBQWUZ3F",
  "key27": "5513CFTEbVsz7vPUCNnRVHgSCrRcjLoziZEeXXGaLo9ihTpysvw4Lpj7qMw3iG51pJuV6bLfxwTNbePV9yZGkRLC",
  "key28": "2hBYXemDQsC7JiqHTQcPj2eYVa5KsHQN6TyRzG2HrkHCk6uQWbvM3QYNKcqWauHY4zHsCiyXxPbJCcbhDdFQKuUr",
  "key29": "4heV3JjS6TVikLcWcKtbLFCLivMTqWzAUBEUE5LVdpS9kQ7MyDMLoTk6xnsZgRghxLq6imM7R5khYdT478efg3sG"
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
