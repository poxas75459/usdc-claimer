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
    "5cnetuYHPrCYEwFB5LDcv7Ti2crR94rRkgvuE4zDovg85fQ2PjojwT6VFFQgEeVGKYPCadHk9uke5d6JSeEPzTUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WtGZ896h7xMn8TWY5LLT28GcTXoKXtjEgWv7Y57Wg161f1UV53Qi8dsz3tnQ8Hduh3AwA594FrrYzSmjKTK9sE2",
  "key1": "2dCxQ8xYbKP2uDvLoGyxq6ayrHmgCqByTAMCR73ik3HWERAnzFRDKYmScWY28ZEWmviRbhFDSkLwUASXNZ6f5gcq",
  "key2": "JwZVKVqim5muRSLxdNKhiCaT1LzVJETEkQXBspGWYPoUKjSSXRAfDPzjYiNAPggZd4MdbnPKswv5qjx33r55zDA",
  "key3": "2Px5ShmiKec7QgfYwq8EcUcX7UmUaLYJCMfcxqJN1wacCBFX3uYPqraaBW7BremkWBHinXQ3n3FYu4AfaGq1AtbF",
  "key4": "3ekqJeYuUwuA845ZL6U8i5xcqqghski2vbVUNL9vwYigFbcXcHmGZvVJXj8M1Vemg49vx886VU2sxWjSdQ9K5dbc",
  "key5": "47tA2NhBn3GDU7haWhgDzdrRDMbyNzyTyXtcKNs4i7ea9KRkxQco1eq1TxmDfpe16gLXsXYhzUxF3Uqg1hD6CX8Z",
  "key6": "95G4t1b1AjpaavhhPFi35Lfeq9AJf4Aj9G2E2TsAKUcLwJPtqnFDKndaKL3acd7P1GQZoRTbNQ1v2rykMgXjZht",
  "key7": "34mezZpdxVeYPscosQ6MZYQBZeyReW8WUfDK3kZq4XCgVyTmMLEWfMpSnkH4ABrGULYn7EoEAf115ZWWGzKGhYGE",
  "key8": "3kkE2BFZRcUpyfMMMzvcNk7G2vrFJmdY95BNXxNUt94szoJ95Cw4fq1nDVDnzxmFCAsVDeXsktKUC79Gia2zx8v3",
  "key9": "6656qErRU4dShxoqgvQ7EkqdpsYyUr3Bvfb3xCnLbmbk3MRo7SkhfLWFXB6uZH7KNCavuSDy3QAvrLPDrWbWjTRL",
  "key10": "5XJcSU2eyPhcnQUpyWCw5yA3Tw1kKcVE12jqrhvt5z9sMeVT8cNpSpzTF5UCGcCoWPpcEULCXyadtsy6MK6bX7qW",
  "key11": "25WTXH5A3QPoHZGzhyZiowDwRCbheTvgSLvFSYiXzpomomVQFUmwwxtfAzUZ6JHDpVVf4NEbzMLp9Wc2YgJmqT76",
  "key12": "M589HreuRra3tb8KS1wSNUEg3hcyXZSz6cA4muBuSASMzj31aLe1i42fuZUMTN5WVB6iPxg5RjHddcDBY42JDVJ",
  "key13": "jJCr3YxyHUfvgZUuLQHuQReu9UDFd9g1eoo7f6oXqCNoKdKwdD9VAD9NiVfKtQiQ9UWiWAZZbVzVW4J3aAmXXXV",
  "key14": "2BpgUwYqR6YH1svK54xmCg44Ggwjr9Fup3XvwtfiNeenUiejP4iSbVm5zjaUvdPmFhmSkYVZBLwVcdju7wPff7QN",
  "key15": "YbUVrFev1Uowyb7Yq6qKbLdrSbrLgqrC2b2kAXBNoxBhAzo17feNj7mSETdqXevXsSyvapi3Lisq1WQ7KSjH4v9",
  "key16": "5MchLfDwkMWc269j1U56gMSbXoEFhAhyf1ja59sNrr4WPU4n5sQoiYfuYvnX7xmRXBC4iNhUD9yo3E15MA7fNWxL",
  "key17": "NR3MBu7da79DAmcXhk1RYBQYWsag1foK8ntnPLmfC82drYKdPx94yfab1Uos8w42BLBxBHjan6bXSfd6i2GUpna",
  "key18": "ZXne4x1nwZi4FteTPw5vPPTWqyyXP5Ksr4WXZmp8xFuCwS4xVdyrrufFexcbUe7ve5MTyQj8HBR4XowSWqa9iQQ",
  "key19": "5zfp8vuJdkFZpsswN6J3LPSUY8U28AzgNbCfLWnCadtNaMeqPA7zkzUGxuCUBGCfHKdVrf9wwC425dYQs6sH7Yi7",
  "key20": "4UPfEi17gZdV2mXBkwHRk1i9yqiQ71kGP7F6hSWk3iTTu32DtscrZcVDeNVK2ATor6c9PY2RbV1rfyhqd8yX1bB6",
  "key21": "4By6BZv7WNchPo8Cshdt25PnS7aZoLPioKxYfh1CR9R5JQaHwcGzEiG7m1Rc5T76pvvBkuRydFhjjsBTS76Y3JZt",
  "key22": "3okLitB8h9S1gcS8F999QQfvJ5rG14fvFADt9vDc7J5HEpzsfnYyXn4FfQTQxUU7KFdxtRZkxcodji4m1wDbv1qc",
  "key23": "4VjcJkaGq5DvXU4AcWVcdNEMqPXYWiyuTkxZqv54ajr7bFs1pTaHzufLed585hn9AbctyrU2XBnpmj8eBr41grDR",
  "key24": "3mRgH6dcXAfjy7byJpKpSttGUP5fx7bJ4Xdk8HScGs9fWmSWnGh6JF17D5jdKvW7DUT4d6Uhb73ietfsxosv9Dux",
  "key25": "3iFRXXZYbqeWQ2SiBQGLAYnrz2YFYX74zdHu5zL6131gNaJXJ46bpPdLQv7VbdnDUuciK7SipcTkK8ahxDgNtQuA",
  "key26": "agR87DkmTi6HLfvqkx31RKS4BpMm2qHqQCvNKj5hNrpCVjw6jNzyiYdFvFChFV5nY4iY2tW97R2w1vtpseoyNr1",
  "key27": "5x9e38RynKnwkgegUpZmvqKznh61LQcjbciCJnFe3XegYuwojNGRxJa4q2ocNNa4nJ1YJcftNAHzu3Mf2u5rqkb5",
  "key28": "2gRL6eR1GYFF7m8dQRsmeSX1aEzpAazomtkeLX9MSha7Br9RMSZwSW1rxCu4TyyH5SVv6o969pFkSsLUEo25qeQB",
  "key29": "gVNr22xsU7YM4h9VhdaZXqNTrLGdKCmofzsHZf3bhfLTXYGcuW9HRPDpWLPPDi3Q17ZBM249DieXn5Cd9x9MuB9",
  "key30": "2134UfB5wC6VgCCFj1WDhzWWBNKH8SiEixSXBV9YK6rSXjf9AVEwZdmwnSHNqTXLkEyJBe42tyfq4pA8aSbtu6Fg",
  "key31": "643DLgemFgTzrJ8V9WVdTbfoJb56ssh48rmTuWLvpt6bZYLfoFrFMTgs3r3GBnCC2CoUUTghHF9rap4gngMZVP3o",
  "key32": "36ZxokXUVaucmpTf9tJFQ71nz77EgsPEsPB2riiSca7oK3W1mM5rk1dNztVXbtxverLWDjwGK9yiEAwnf3Hj5mu5",
  "key33": "2k6yb7UnyonqS4cVuxHJMsMQ5QzuB7QMphsPhdP97Szk7qS1A9qZP6G33wHFn8f2okD3VhAnNmAWv4aJRbqnLG7s",
  "key34": "5fkafPyt7kpNh6yZFiAoJaY1V9S1tcngCxp6AN24Qz4fvbBhUQ3NBFy94nnbQ3ZDk4d3cKTxpyQXGRENapwUZDi9",
  "key35": "2ewGgBYbjWNZu8h6ZMBhaHR4LP3fA4g2Zz7i1MSLibPfCq8CpLv6rBJL1KC1KhKZckoLmBkj3vUkjHVY5Thp1W1K",
  "key36": "62Zwkq6TCgn4RG4ddxGt9rVx5Mpz49YSu67grxTnKswd6pWceRRYr7kRCKjGL4aq2bp3mYqB7q9a5dZHVmj6FeEE"
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
