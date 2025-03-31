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
    "5ppD3Qtjfe1yWjUAFRPT8gdctrcrKTiZoSnkh2v3HzdTvvWEdujAChWJ1ugXcrX3t7dV7HYVscgRzgfuuL1jTduR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9F99wkMTFxpCSpUqEufJZ3Nz5BEN3NewXyL7odNafniXprKUYLDYWni2X33xiVDNXz8G7VttD5VbboL9C2VjnA",
  "key1": "hj9gkYe8ujVjJUp54sJ8eaPTcJzgbFoK9RuC6SczXceGzmLH9nng2eGeVTGcZmQdcX1dL627tiAM2nxz1XZu9g1",
  "key2": "2g31muCA1o6hyehu96F45own2TcUSgjDSZFTk59f1NF5fghsuh2Yv5XHUNgFAnLbMeMg7iivmaST9JvmCzDMA6Q2",
  "key3": "tkNj2WEBNTPjfnsfuNNnZErbtRzwZY2h24vomny9wM1E9W7mjTv6YDPCXT1UWLXnKp6oN53kAEnyVbuPFCUgRt3",
  "key4": "97U4PejgmpVtCR25NyCUnZT3upR8wK6LfE7NhnUDCV4r5jdQeKjFewYak1UN1kECeB3yu2E3pebj6h3fSicYZ6A",
  "key5": "334Jx7vmcP8kABnH7cp1GpuR7WfWoACoqf5nZF5VJtJTXHP8NPqQrRMM3KDFrJjBQyT9iAmTTLNiMtzwPbcRq1Er",
  "key6": "29CMSiunZ7H8Yy8mWn3dQYaJviKRC3XiKS5RxVtLL5QrwBB9NgPdkJuqy4h7rHfeoSjYkdoFgpWomBg2W3DG7DWt",
  "key7": "211Qi9bkzURw4FaX61YPnBZsVe177V7sKrgiLKAmJH9ARkMaJvX3DoAnec8dDT74yuba9CoetrRHzySKGwN19czJ",
  "key8": "39n23XfyLWqu3ahSYatggYu6rS9YvFYofq8Ty6AswjVxU9ZfXXYVvAxZBuRjN8hwoMzTJ38BtKUxrBJ83p9duFVm",
  "key9": "4DByEB6pomJp4Vfx5h3TfFkyXrinVwpm5SfS7AJTH1G47FWveaHFmfp9msghJrx8fCP58dHvxTD6KhiBSF3Ehu6b",
  "key10": "2jGnDnTNUp1ikkGFDUAxkre7eVyFY2Lu9A9yBsiSAsts1mbkzTd9rSWpNYEoxcfc1Tw4dC5Lf9BwqzWgQ327xLzz",
  "key11": "2naQLtRmPmtccCH3d9xcc9MYx1cGEGEXNVd4byiJmPBt6hSLbMY2FJjzCe2jcvhEUtDmZMgCj6LYHLWfToyB1Auh",
  "key12": "LzJyzoKeEpKk84bWCtq7cCXpKmK8kANcF2rTvVqWctAuhLvHhSUa7xa5QfjfNA31vFLqWj3s6ZUtwqehMNoy6Uy",
  "key13": "4iUekCfdWdYKYJJKQFZukVUBvo2EAUtxndfzeUBb9kqB9jPRheci35uYBgpYGPyixaqk9uafoKdxcuoExsYmh1Qq",
  "key14": "3Ey5uYNr4Yn7w8KJLHtunykDUWEoX1hh9c1hUPFsm1aNxXVwNG6bbW78zjcCVzUHaVwoVrQNLiJBDiPjFsNgw6ze",
  "key15": "3ebYTAHcHRE8VwtwyKctpnS1cYnfKHhNxScLUrJ9cLBu9ydkJXVfGrsgEavSbDoSXnEHdBfFtKuwwBESNJZ1wrZs",
  "key16": "5X5fcXZHjzpABehVQv8KWFht96JWVHiDxxotxX3v5hue7yYu4DrtUoAMNd7mBFmntprX8GeXmU5Uz5td9TZorCpN",
  "key17": "2Ge2qHBHXhuKht8GgGYKZXshPyMozUxusUJgmCciLstPVEdCS7RFKzYJKHWmNGKfbmcTgYCLhibmQ2HXeMv2jkhA",
  "key18": "4PGTXZHPKg5oatv29aWRuCRkLQssWwECAu8rM6C4rXKXP17vGS41VZzjYp2WaPKcckWCKYTucJ1PSQs6DdzVXmKp",
  "key19": "wr5oMk2ncp2UhGbK4DtvhEcA6kAmCvZLJ1id2oy93DchjRnZGiGSUMoyUvhDV2BypDxAyk7XjxtmNuKqb1LTXzg",
  "key20": "2DGHvD6dExTtk8hBEyNimnYF9Pij53L6A2pYjs22Xv9eTUbNPkxiTaVL8casdGuaMGbtqzepvWzXoSJKJG6idZSV",
  "key21": "6464tmoutFgRHebBRNmLm72ZGuf3md8Hbs53GZSRJZ5KarvpfRb36UPkyEWeEgnGY8T6EuEAqExgH73SDjhytf8C",
  "key22": "3VFhVZqfaWJaxohKDeRVoWrND979K521ZpaWUV4BTpas3WmJYWHjXDvMHUVvFMDDFQPRa3evbjZVLr69hYhCgRDC",
  "key23": "25AJirmvGAWFn2J1FpKF31UjTb2BrcBJCQcnMe6T6NhjUjzLoCjfPztETmMLri4QyLMk14dETKJLDZGY1WJtSE1g",
  "key24": "2WEYCHNQNmGsrNDkJSyFkHm8wegywcs8mshYrj5GwzmSTdmcZ2f3YedLzzhRBh7fyNznbAaWdSqV9TkvYPVd7d6H",
  "key25": "d9TzFYujdftcG2XMr5enTFESjjeoafn2adXsMaeQz8jUVmBRSKGzepKeeL9wRCrrGmKALoC9TK7fkL1LoDJY3pW",
  "key26": "iFq13hLEpZwN8ReSndLyiSXKESD7BrkqGVozjesdNnKrA2YBCtKzWSVQADCHRBNEtLWNzmPPRRUodwa6HkfQcS4",
  "key27": "5Az3L1Qvpj1amqbcjU91LTMu8U3NfbP3rnZzFA32gE6tBHfNdrJdgJA931N2EiejRpVVGmJHZcQwVE84BEKooPwK",
  "key28": "7H4H8cfoSbsrSCe9A6MtshcsZoKgrzFgJNboNLWrevT4ZaRRBvRiGiwDRzs52srdFWA827AdW7VB7hHkxXQ31Mc",
  "key29": "BMwfwdk8vc8XPcUXuetCEUvUmSKoejTA1oZDZHcXuQwdAsNSwEhLgxWcQ3L8SHdAa48QsGMLjtDrrY8JiSjM2PK",
  "key30": "5JNN68NwNtnhhPfecjjNLrxJgD6ZLGVqY1wcwN6vW6hvbTQAkZ7YtUda98SrGw4vqSddttCjM2KBjQdBZvv6G6qr",
  "key31": "2RTjVu12oH9pniHWjEfaEqWJtdVPtWMxRH6t7exqbpSLRMvcJ56H5Kn38GLo5VkFHJVxytZ9SmqoboiufpGE4r3A",
  "key32": "3vQNzj6Jmwx2okcaHNjktSWWB5fsT14UDiDkwBBLrW6cF4TzbUjoayjvVKQQBe58DLWa7JSkLC9d2FUFEM7e3Xdi",
  "key33": "2s37E93GFQofxn6cfWzULfSW7LZT3dh8jsfaEDH4JReJi2BoM9uDX18bK7KLr2j1yaUhtjDEtn4vLFSKN6s6qH2b"
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
