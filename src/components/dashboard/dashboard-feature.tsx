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
    "345RqpLBJ8Fqpuo6zvdWq32S8vvrPQQm3yVDtFs1oEBUkkJwkbpeLKoYd8ffTdKpdSX6dPvEWfmDmyt6ZUt5iWRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uudbY7ytYJygaajqDG9UEHKveHWxpm4dgFRS9Xz3xQzBBkeS8EHyy7khe9p6rG3uLPR6mYwfr5AFFaqMMR3rTBv",
  "key1": "5c7KNNmUjz9yQJS1qadvPppZHK3tn9Yx9g2RidaYkGyJbijJJeLH1xAFbX8xa7z9vSYpJ3rwJir42t2MuEQW91oe",
  "key2": "JCzx5VkVd6nmmpgXxYSoVzEoje3ghbMcH9zFMopMNzxxSfTmpH1DbaZnkdN1hbeYfEqLSjFCnRmTmEKbBNAusi8",
  "key3": "2FpA1hWPFEJW5kWuCpJN6GS2bp5PxEoHpLdEUvK96jsGGRoKsgkXcUaL3jrGKFr7gWbVyWq58yfDvhnm5zjTXPkH",
  "key4": "2apCZy7WdsbYbWkBTwr79s4GZcewngiJtkhQf7Dg6LoJyBeJQRRKL1MLKdLEh9hCaXAWrjaNhYE9VddxMTkjqmeT",
  "key5": "zS17togiWScEFVG3Ab5upjrB3TCJgyrUvK1n3NCZfrH2GY2cvX8rb3ru26qN96NrBqNhN7YHxf9VPW563wBtP3K",
  "key6": "3sX7t4rVttcQr5gv6ZMzYXrzNjLkF7Vf2WNoYNmaPeu1vmQ5tTvAwSobvx1yq2pWbEYqofBcQvpELVWo5aBgRMm3",
  "key7": "2CSTitteoojn6EzJ3vXwJCQkVwLnKR9y4YF3JupXuU23iwSiabNt4QCUCRJimA6K8m4BcCVHfeoRcRWaBYaPu6JH",
  "key8": "5cmJakCrRntD5XWLtwuiKcQX2TNwNC6RSwrueauRW5w3bhQhRrZ1xHgg6rL4oKxSqGsYTDupzNqDavqZu9WiAWX8",
  "key9": "3VBk1E5w2MVTveUTSygYuiz5LEvxiEXMV88t1t7NMSu3Xbhwc6K8ssAjTrqD6zZhzAGiaG75Sah9qsEEo84MxZMr",
  "key10": "sp1Ti3nsP4XstZJnw9PgpejoqxdbqFoeGRzEBMvQgrtZ5JJYdyWT4iNFxUaDKquZSaNqXxfchNfhkcFRe6rxp8V",
  "key11": "4RTmnLszV1DRT2w3TeueBDphsjt37cDWdsopxbu3b5qBHsem1wHHb9xZtG6yMUPHE3VMXi6MSVGvGfPwnrLpsAji",
  "key12": "25GBWpYpxhT5Tsync4w4MrT3q6wjLQsCAN3bQ1wXw3MhobisDf1JGZVjWoswK6HCzdF8EN7CddhhjKYNz75BG9XT",
  "key13": "V3KA4FuhRCtCgT3zWir3HLbknJZboNKMQFs2eJNzT4gLXzjM3cq8teA4Noj9AqFwgPGeGqJjwYbQ21q14MMdpEH",
  "key14": "4FUHEVS5StS4tXmqC2UHCLVm81TiFnm8ryBRUDAAc1iWcCSfATHTAd3iMhX4CrywDBzGh94VqGHsP4WebUwstFMV",
  "key15": "666t85roeR4Yfeq1jQxTbTpoUYAgdkJSKpTGtZ3Mf7GGsavfjnxEJVusa4qEvTnPFksR6jt1sfTRCqEqEYqQpaXR",
  "key16": "3E3WT8d1VypsyWaAw7YkAY4ypHEMS9Z7NXTGdHzfdCVVRb7v5ogKszar5oGV45XSKp9xoZdAckxmGx4tj3iccQYR",
  "key17": "2gj8f9VSxrSrnmpuKA85U3j5ubSSPFWemkeCYcA84fFDP4DF7XXM1cFUmnDwkKU8ebownUz5E5xAryGHAat3t7Dy",
  "key18": "3S4WoDcJuFSDgeBLRo8TbtxhQvUQJxTKji8qYLh4Awb3mNVTJn4XYgLoBZuLwkBNTVT6yUEAv6iXQbjENymZedJN",
  "key19": "2Y6Gj3fXBQzE4CUxhb5N7BgGBxtQGpM7x8duxGMjHmAfxeLjbcbR2ZqME5FfCDBoTmaZ3DDTrdpjGxTTYFu7F93K",
  "key20": "4TiaKea1TGxFYkXudS8DkjuoYKeaQ3te3CLro8hi4N3B8SbssALkkCQSrPyszCfd31aHqRVfE7hLoF2y5ajbQHYC",
  "key21": "3tSAXUNKbhi2PCdkmsfEDVaPEuVVKs6TZiTBw3oqCYdz8GXeF6dK4wSMLrHJF1jobE8X5DVCDqUdx6DDbpXuL3ni",
  "key22": "3tBNMmTi9hmNUYbY6QSveowkqFjGuumEjmm5JeKiVrbeGFPzTVRHmSNW8eukFvPyrWSsFcUS5kXU5fGce3zGBtDG",
  "key23": "3SA8GjdTnVMf7UVu4k8AQwsY4RkGUM2ySby78NbfYxBmCYvQJTsxKiTQ9YiR7yHrmxSpMYqZumrjPg52brsoiGV7",
  "key24": "5KFu1XUa6M2mFymm6yrj824bhAkHtgus5H1mCYNJXDqjyAp9JvP6PzCqTMPngFp1WFbnruDhZcw31k3TUEnsTpen",
  "key25": "3X5M3JKFCHbFLrT43ABtd7RYS4Yj7YEktTt9wT29wVX4f4mgDTzDKojC2MGU9vDGeWcHFoVRSt4ZXfDQAo9Hm7XG",
  "key26": "GCDKJdJ6GAQZpS9zeuxNus1SVwuV5cftd5qK6yjV7Qza4NCDrpd1aJcTXL1s6j4ATSkBmfCEQRYXaLCHa8MyN1B"
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
