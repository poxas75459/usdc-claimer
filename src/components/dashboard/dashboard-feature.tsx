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
    "31woLjFk4AmkUfizfnHmXfjiQXrXRPtsTsMzR9p3Tcx5myLjtHD6ovUh5CDzmXe9RYifxLFuDBZKD4u9bLBP1GFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PrBejmTZB6vZQVav86njnuFF5uVK9aZW5BEqkWGPKyT2cWUCiPmLuLbyWD8sSn3UdzP56Won89SUUa52XxPqPp",
  "key1": "3XU2TbAEeohDKUyvMVVBTie5zM1M2qFvSNicaiUWcwPoGrHH6N3DMo7Fms8BnjxGQoxEvGfdQDqw2HavibVqV2Hv",
  "key2": "3VYzP7uZ9i1HabuHSsySCuYpNtdptQgWj3DGHXZkRRVvLKrBwNuipmUtSWmktXHJyx3a95DWCzK29NBpkC2hNz1W",
  "key3": "3Nf6YutwzoZQUzbisShCNwxo56TzqHrzXjw6seoxeXzd68kTHiAmBCapNmx3CAAtCeMJitdPi3debg96RXCWVpN3",
  "key4": "2ZsaMRhmeqDuRdPww6KDhhJqL2T4SAjQnZWRNYZbmxB6tAMJfzFtFr75gZu6h5ZnnTvCEPM2ktGad2D3ajZbrX8Z",
  "key5": "52ggApvqxA2XVBm33f8LFo6V3TmwWBkZx4zhGB62Yd9DX77xHvQhhfvTMxxGkZpkTi3XFaEYtjx4LwwDDm48RJsx",
  "key6": "3TCVP5kSPDHPvWmK5N9Dow5CzYNDGMWd1y2BjqVGCgQq469rcLNzNN722nStYv5d2sxEzz5XcLGd3DHPzd2So7yh",
  "key7": "89PE5B9fvwhoo3RHJXAjJazAtS9v932PbVniZd4JVV2K4WdnbNjjqsCkuXXUB5jFVrgY7J6un6nedJukqmmAY1e",
  "key8": "4S64Ethg7xbiZJnUMZtYX87gsqxcCsttV8fgUvMNcfoM2D8nzXMGu8nwWqj8TBUFXvPT3hrC6by4SzBAM4m4qTvX",
  "key9": "23EZXFBwhi7codKxwH2R2C7xATvKRJHq5bRJfDEm6MfxdPhb9MdwANyzuz5SrQMqGKp6WiGYhX7Gse8EqycuguwF",
  "key10": "3U9KdsbPtZWmZZKRip5oSBwNMc4MQKTg3AUVdhiVnnL7Rg7crjqJVNQYGpfFNmxhp6ii13GU6eUf3DmrdXRNfvrd",
  "key11": "4wTTCob3hDj1kQtGavhebGNRr2WtBvgcJUwUCkCQfXXVqsHusF2jScBoD2JWYpTuVAzJ14VTNZ6XG3pN3FvR49VQ",
  "key12": "5qJHstCUA7iH5vcHgUkaRxFvE4b2sT2QpHwdiXa77DsTKJCzR3z9qt3MxaVpj4N2LRcx4VMeyF1BdY6oVivy7Wjk",
  "key13": "gRdoj3eeNggbgCZYd2QkjhycZbD4fgLYTP1DAEtM2iZf6Ac9AKDEh3JtE4BoXKrreSLvbvP6aHf7F1ykMzexRmb",
  "key14": "4NMCSBxi2dS5wqKXsRixnNnSahoxPMJ8tmVSYvTu4xSvgW53ikDvHAwiaVWCoy7qGeF44waZZsZi3kpL6rWn1sfe",
  "key15": "53fjMUZPFFeAyvMG5bZpNtgHgA8LJauyg9qBYeRMZXBZmA6F7C4Vt6SzUiEe4n2zcnrxYVgsFj7mEfQYD18pfHhY",
  "key16": "2WBDssdvEpMcT2mmZvbXH1GkW3JZU4JXMJ1RDFWnZhPfNMgVKqwuJUdWkRsqHyJ33rdGMMg2iPK5TZTLf9gESGao",
  "key17": "2daBYAa47vNb78x7U41tBpVCmDcJQVmwx8B2rmXZtxoNH7AXEt3vjV8txjp1ffXW7bxa1HceQApUQPJzJn85ztnT",
  "key18": "3GQvcmGg7rV2Qc7Gs1FtAtySc7gPvKKSqAMKswdrsUCR9mARXcBnBEvzD6U9MR3akmdujAxnQcxxqMfx4zzD9Lwr",
  "key19": "3SZpMVWgMoFXpuRSf1ACHsZig4QuSLYTDiks9biF2gFMDRAKPBLky5cS1gRfxx8pQ7WZ41BuKXuJkjCKqtz6DG6e",
  "key20": "2wUAyPTc3pC2j4FmCcE1GsTuLmfRwmqhnVd2sXC1FcUSJCyzxMWCmc9pC73CXWHLzBC9vxpw6hENri8yNrwA96zA",
  "key21": "4cVwjdQoSxoGskKiFJgotCGcWThEb31gGSdN8Rg5Jp9d6nZyxvzn9EGmfUAFS9H1ruMZjuvGZBh3EQULYuGKFobb",
  "key22": "3K7hgv7EN5oBt7Z3fodSFT143Y97vPrBvQpap1nwfxsjX9oY2HVY2o1MDE4JxpPbK568W6Kg5wz4wAKFXkVzNEA3",
  "key23": "3n8uECfjc7AP8jEG52Lmeh5XAudh2sxHE28TCKpBAMuHhqhgC71hdQzGZxUMuvpy45rubvy2SrpZT7WZkBWc8eiK",
  "key24": "4ULFMntTno7JeYcVjNaSW66L7CDvXcbn5pSkP7R3ScN52wKC5REEQRHzZmKmTKr9TTRstroXd2ia6CGo538FKPTV",
  "key25": "2xQWWcRBBMHP4L2Vm2hj51eVFCJr8tNrcwCyD6Hkxx67v5mUR75t19wMqi33GtQmJftn77CGcSW29mtm9iUe5gnD",
  "key26": "5j7TzcuyonpcUdgkDFNVxsNAXtiAQmJznG6JRdMVwEJU4PGvFXcxbNSNRz5ds2bjghF1gcNrJ18kKdeWSNGmLvjz",
  "key27": "46C7YvvFBp74ntTN5iSPRoJePurQFmfcprG4ySoQN3B7iQjVaYZtcti41Umd7wTmPHEUgjmghRvL8Le8efMuiKgo",
  "key28": "4XL9tTFiFJizadbBzZqMmUAqgZA6HGyh43KQ7nbDgpZGUYnn1kUZAkSdMo5QWDn2NkqzAybeSMWGKB9RhmRFeMSR",
  "key29": "4MC5rRYq5TQg2sTgpqpmRHYnAbSnFeHGGMf4ssEjMEHsBA8twTzTNM3wE6gmtKf1rrCdyPxBEosVjtHS4Yejyyjv",
  "key30": "zznU5gTtdYQHvJyjqdB7z685SxYEydeCrgVNM195tc6xSzVW3jRZEz6xiRULmP4Ytc3WwubfaARjwUXwDkBgsdx",
  "key31": "3yrJ4TM6gdFAWDaFftrasXXxt2Y2fQK5FXQ7ihoQgoYWcuhHUMgHUEGZuQLGqHMoosmjfcAv15RsnVp2LxovbyHA",
  "key32": "3R8Uf6nh4yhxmJ7RGko1Day6Vw9T2jogRuHRGhHnTpbQWyspe8o6CWnU4iGgJrs7ikYDZJKARKC4eFX6CWKkHyqV"
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
