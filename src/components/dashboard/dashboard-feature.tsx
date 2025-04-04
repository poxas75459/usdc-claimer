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
    "2oDYgFxhHpfJXWw2vmJVdQbqrettA4kf6g8FK9WNT2QdfBNg8QNzQUkZun1XBki1Grd2Fqj4ohbYd6S7qpkH2HU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8D77Adcsw1iztE1nzZ6yvZj18R3P1XDRLcHaSQLHsBaHzVWfnSJNfYLm1LhWFXknrh9J8LQnedXw5fewBnS7Qn",
  "key1": "2TY76SiVt5CQFotPFhbVGoYV1KnHYoQZLfSsLvcXkGZr1S2scP1ppdZEFgMrdnhSqeqhYachARq8wCE7oFAgXbRt",
  "key2": "3kqy1TKnxcje713b9xGP9UgSdtX9xvvv6KJXAnq9wBYi1QXLMTrBxTf214Zuej2fWjvsBpP3XtBLtSMYy3rmHGw5",
  "key3": "4DNVa3ieaLWsXuFLoTcnnWMCnaF4oeuasvcUkZHz3gkarDp7z1FpmDKLVYybZQE1kgQuY7yBsfqYV2QoEenKJkFH",
  "key4": "4dpimGa1vjY6tJpo2PWUfxf4Wh1j6ZjbFV5GL8V1jhFWU3Bo6PmS88WKYmJHsvW1LeBPY937BwMPKtq4z4VjAS5y",
  "key5": "5KgQBPRUFVXPZQXoGMqi9NMLEYGDB6GGFUhX4rm4QKG4nQUHpeAUNzhDez2u1EXQ8ctEkqWndnugqDTqGesABpaP",
  "key6": "5WXwva92A6H2ipwBqxEzFsifSzSiGuQbFYipNbaqGLUc6AhoUA9Ju7GkERg4ccdZME18cppjZxU3qxb8UARtXdGy",
  "key7": "47rkF6s4Cog6eL4x1Zjyfecyj2uDJNAyGtPnsoD7M2hySMyRPRYiMvpqYpT336ExsWUjuBqqsZtJy2E74G6syzWy",
  "key8": "63TXG21wtrA3i8CeVs9fUa3umh8L89QdsipcGVFFixQy1dW1j8XNY77DDqQZuKm3hqFSVBZJQKWR1kXg85zp2e4L",
  "key9": "4Cb7RkMLNxhFVfvT8iK1fScCUgpL8THpRvaMnmzB6BuZg5pD9uPiZJW3pooJyMx94jxBrFraDzii53JmNz1ZAGpr",
  "key10": "4ibYJqCbR2EwaQunvQa2pdsW1PBECpjrmFHrASjFB4FuRjimu9UQ7UaidaWkF5LqqQexCiUNdXxSTwo2qycHFeqA",
  "key11": "2coHFcB6kEvBNJvcPGfenqqMmJMnfvRwq8Ji7nUBkCoFNTodcPdSsfV8uxYZUxYNygrppmYGpxN9DyFniBFV9z8G",
  "key12": "5koFDYmwoFDgJf1EHCbNv8V2yF22hUK2gf2KKpKwoMoYN6NXYUGjob4YHiPwEskkXyaigSdbPt5xQMa4XYduCNAx",
  "key13": "3FqxQK9ooLFswQj5WRekyCRUz7L63Nk8fYavZHozsrwFUgYE47VppNmupakFY11Ws24J7ow3vcc6sy7crV7LMBeF",
  "key14": "5vyUwQPQpGqgsG9f74UAihBh7eETL467k3gkB8ypGijwhxrNFgAj5dy5MWztwT4AtUi8UiDNnoJm3kGSGboPMJRr",
  "key15": "5sUEuUiTRRkT51WKkbw3ubHi6ziYTzeQ4wo3vyuNpo7a67B2SeTyoHsvomdXaq7FUTpKH49Q2fFuWdcvmUQMWNQ2",
  "key16": "3zWpNWwm6L1EbtdVh6KLAV6owwMt3jpTLoCPsJZ6xwSyMhcb7k1kMWypVDB2viXUWSeXmLHJWR4tZ3NAmRyprc9a",
  "key17": "5yceioq8mULsRpSGpZU9rU5WrHVzt9XCpiU8KusmGHbHuCLKdvHVGvqaZJCfZycnVhxMMwLdinZq3uDLLn8UGZDR",
  "key18": "5Cp3rK9D1uTvQfvhCRUcR51eqjL6DwLoHCjgNDxg5VBYzoc3dNvxmGs16e1Lzq3ZbaKosdu8KoVSLSGPiPvfv8FK",
  "key19": "3KuFG7NyWr65qZM1jZfLbmaD9BDrbYZAQMeYwwVEuvHjisMJXmwpCQDqegQNABwaH2gGm9SwYLeGJhaUxoAhu3V",
  "key20": "4fDEQP48UckjpEFuo6ecg47nnKpwAnLKHMYNx4SV7zgAHHdWDDEXSr5c8fZuavFYCBWfRCXVBuFQFKEa5C8jTwW7",
  "key21": "3bzAynAryuvZpvDk53nmP2MhkgBBz2vdHC2SwdBfwtd9SSq6WEij4U5WLz7pE5H8pJHTtcuh1jDW1sNKf3HsyXVf",
  "key22": "2vJoy4pnaksYqF9DisKPb9QvA2Wnn1tkC8UTYhXrUmNd9s2qVXGjkXSy1TZTGDZGJPAiA3ZDHExsvSmzTvJRbndn",
  "key23": "2eStA6HuHQFmiH5f8cuHLU5FUh4MP3RsC8M9JqfFq3KRPPgSuCw3W9jVQhaCztSksDB6Pg2tY8hKg4hSiHHaEhAD",
  "key24": "cqejheovAthT4f7nSdoZMVxXCbL8zWnoa8P7BttEp69NFnzD9GFPaFVpzJXvnAjHngmCzg4Pz5LUihDyDcMNdeC",
  "key25": "54H1MUbPL9raLSckLb2SZqszqgfwkZkLNRyZRVTnARY3Tk9NAcy2K2Ap5rYHwn9wa6coNfXg6UyvUmaBLR1qhMM4",
  "key26": "5eVBQzBgo7kkrSr4ErCwq4EEMfFt6uvaY7tD1MdabPErpFzuZvkAc2R2eySxDarqDzswYJzAxA6cgaAMycgHvgiG",
  "key27": "2ynqV1xSrMRzfLsqejRDhcpqKyMZvJuDM44cAGwXjc93aFEWzxsDaJ6DRHmznKaZwzHiS4wcE3dz8pZA9n5a5imq",
  "key28": "3pk359KdToggBavHe5422XniXAL9z1LbsfPGSfg6gcUQaikfntYycUxCvRhHt8kxxThBwYtLWCHmxDPNEaFAH3N7",
  "key29": "2cnTJsCaNwacqB4K3TbLoqFf9mKPhjJobV2WPyek77YH1EA3HgU7FNZmGadRi4h6wNWKX7BrqJM6XQ77PFnyNCGH",
  "key30": "64FNyQBgWu52eYB3EedbVoQbt29Lr4c9bZERxfjVSwXwQ1NBTNBCWuTWLzPcBscBWLVcLcCZH3msYx3waMNQ161F",
  "key31": "4o4WRe8syYD1pdgPbu6cTpahsz9VKoTG5hw3frt1d8Hd93SQbsQXf5eJ8Tenudmvo5wNgQssZtQ9k9AXYjL6Gq7f",
  "key32": "5Y5N389tEN813vuG3UcCny37F49UhsY3quiSscGdkNcKKSqeku6zL2Giizs9f9VRwGrZeUYFianZpAzHtCNKALCJ",
  "key33": "4VB1AG1nUugcNv7R8ZV9vHqaWBMb54hZxq8QteLGkoZGoB3CWtNRhbtmdSkN1bwH8dRmLSmBMqMDxMbWNcwWEsVw",
  "key34": "4Dm4cLhsmEy38pTTNqjK6yeciCKuevKvUfgkTyYXVqxfrcY71eKwZihLMwFBaSxtfbdYz8fyzfmWRPv2XtfybFjQ",
  "key35": "6xQXiAiJwRxjWxaRu2dFQKnHPM5CnE546rEHEz9JXGyGwqMtJ6zMpoXBMo4YhdaXEXzMjCiqqRjo2AeqSCsYsfR",
  "key36": "2niSEKV7bGyoMNFubKuNRR7ZJC6DebudKdEY1MhrcUzS6EFoTFrAcBcZRMAebAQLNMKdcMdWJey21tKgznJnSPuE",
  "key37": "3Sj4NMinmQL69XT6cLZCCR1yFhnGQk6s5CA3kNdQVjQmEN4F4gM2wsC3p2UmioZJdg7iTsaGhNapmjCcskS1Gy3y",
  "key38": "2H9wqN3XY6NUEY4Xh1xkBLspjBoY2xKkruQmyoTQ47LBGZ3HxrPq1zDS8xSZeAvAYWNvfwk2ScEwx1XPb9K2DT6t",
  "key39": "2Sx6aRCwr5HPK8RZ9uDv5A2Z81BXTXRYfwEw8mWnGXo98Pcqp19xVjqB92BRJMZrQ843L2YX3ttAvf9aM8sVra5v",
  "key40": "4W7P5KNZ7jxbmEQN34i2wKWody8kJyu8qQRNbXj9PNv87C7VRTUzLJ1jzqBPYoNTSUXJnPFhZ5Qkr6XWLP57TJHh",
  "key41": "3mZVG6SuZnJxKNLZkxEiAB9wtcoN5BQPw6rH6hmHAyRdx3rZST7V6uFzZhZTqvYwHyvNkonMdYYED4FrgJ75Hzi7",
  "key42": "hFZnWsSWokap4oRwrjPebRrAhtEkwSVMLxFdnmLDVhcXv1Y7bS6KeSFyFzvxXMnBHtCXMMbBnwCj1UWzaDkC8qu",
  "key43": "UStQBmcTLuEDLC5azphQg6U5hus8CK29NknWW3fNwbFoenRpgxqFnTkWWRtj6kRza7bCgfBybgC7sRT7TqQnLyt",
  "key44": "2GzNp7URGdhRcsTF33cRxUFW9irVnVYG3FBKJu3nxAjcGBUK1X9Jqp7cKPs3HShsLbDKsDv2imDBkTG5SoLsfGEP",
  "key45": "2J4DbFUNNByzC726mdGM6ERbqY7mRRh8FZyrLY3mtXXwao2MBWSYghYVYkGNCegQG2kKGwWqTQXoWzPGA1BBfWWe",
  "key46": "23tbZgZ1NpHSWuWhyckCgUQFaf3fSmwTj37BhNSntMA8eZUAYtHbTgiA1MfERgmSJGjutWGqsMyPu32py1cHiJ49"
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
