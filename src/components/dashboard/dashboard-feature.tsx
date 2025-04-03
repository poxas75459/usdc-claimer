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
    "3T7Nbhcqs4PHepPSsG7y7yhChDCR7ciJdgdqBK7FEHawpuEFB26djgYMVBpU5wsfi8o3oSUkouq381s5Tdvsyis8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeyBuQwMzXsgNZtdCYbBjzQq6UUfWhfYGzz6dkdqqFbdQLSiS2Lj4Zsh2mqWNmQdCeXpLKPDz3TnLzHFTENRjoS",
  "key1": "4rvAWyw6Gf4DrRc5X6CLPwMsmXzgSSK1g9NUYJ6DFT2KMkwYeW55McghM3t1yuAa8t6Ud75jKLkaKBhWdV2nnS7T",
  "key2": "abtmRbsCWwy2mNZKhwoCchVdMSEMy16xdQLb6StBH9KjzAJ5va2dAxFgmCmMjHvXUDGc1mWAHWU7PEZcr11dgee",
  "key3": "66hJLXnhJBv68Hg1PzNA4zsbJkdFDvqvMGazdmxafbmxs6Q24m3mDXoQPhBo8nxVpwiBe8TENCJD9mfZofPDuiTp",
  "key4": "5Kr2eRYi2TxyTieecAW9gNhQ7gPz92jQd8F721aSuEDDQNubPFrYHVkCeqH4GNRzEwfXmJwhiqjg6jn7q6s1GUhk",
  "key5": "2YJb623naY2SXvSgj8w2nrBjDPT7dA9d42mzQUTT82Qa8uXmX22LcbfUnMK7bU4Kp8Xm4EX52S2rSrvWZqbz2tSy",
  "key6": "5wTztjNJ8yZcB9Uf3mRfctLtJF91grUkN5LR9m5bKG6yhSiFD163A58Q5hYudLwtahq5uWLkVgBBHVxA4x1QUQTs",
  "key7": "28HwZVQEuJVUwrJFfWSihvkN7jPLBi5DTneYzejBWL9kcvdHGAsPPDh31LPLzUiTybBYJgPx7AhrYuzqZuDVDYg5",
  "key8": "2qLWJfoj7m361EgSMnQVBzjBiiSgUpT4yTsManweEmhw57oNL1Yrh5LgKxRX8xDwfpWAyfAGfPHV6YeGanahVNAy",
  "key9": "32J12cdyBgXNtrNYYxJjWnYBSRe58EXCzd1EKLotTuv7ry5NdEjumCreaBnVdSAun8vJDqXYJwp4cMTdaAMxfLit",
  "key10": "2YxFqGxzSeyQmxwGDUXXiGTm8NEiEfgcBy8xLQYMJFBkbdm9RqTRtNVExHfwLj8PdieiXezvfUwJeep89fHbpQBh",
  "key11": "3RGXJ7JHP3fuzkkkdq55iEWLPdDunKUGNWs9qC78GEfivYexbG7HyxnV8jTti597bAz5chz4ZQYj6cj8tHHFS2VT",
  "key12": "2kg3AeN2QogeJbB4QbkBXkrAUciYNqngSppbhYB6gvnX4hjDiFp9X7UZcnV3V59aTrAadDnRJovE7pu5KLXcKo7e",
  "key13": "qh2ZaPhUTFpBKiMj5yeBfQBW19z6ajnTEcp1qg9sweayTYHDZfa3AuCUsYnxGRgxaJ7g6D4tPUX7mqtspbNHEET",
  "key14": "3zs97mmAEDUAvcDdLvpBudLUaBxEymfPZaBiQjrZSDmWnE5QRDmmhoAeN6PDMnN3yEgWvXCc9gHWXAfXsDdHaXxK",
  "key15": "5AbrQ2DQabLUZYXu6SZnnLU2viFZ6FLXF7QhZngzMiUZDV8xMPSMaSTeixNnhHxiqA4We4EQqDave6hxpuVMzMn8",
  "key16": "5tjYCLU3r7zuhxY62Wes2gfLajmWUSxNraGSgsj3ec3E5Z3kqgkJzxmksMhzLJYJDq16F5M7DVdFcQkYkZPjK3ie",
  "key17": "2UTtsir3pXnmuvN6wQdUqqaPzqmg6vqGK5gF1cPxar1pGm4cZdjND1VsnoP5qKgpLP1MHgTy9VrLQQe3kJqMnkct",
  "key18": "4oms6mqD3oPAUrJz3KMFe28AZXbpvR7APwU6ZNz4HCXvttkZzVLF5BoFtjJ7yD5JFkXCf1yZJxejBxdFyNTMutq3",
  "key19": "5BmZvDJjaKrizB5QbNZDVWfcEq98AED7vSBDexbGLfoVaZAWTGWeywDDW8Z8Y57EV8v82LTp3g9JUHKYQu8YYbxQ",
  "key20": "5eSVFyggxLXHvEGEuFHm8EqVuAyy2npwsi9Av2ahx2xc2JFpkjqVBRKdgUkAxf51FVBrjbbSjGAt6ZH3Y5uWbcXV",
  "key21": "5Prm5aPEMZbi8uz9vNSgrRt4ezwtrk1E19q64VnJAKYV6LeNtn4qPLTqgRHeEJECA5Ryw8hWRbDtFuBaM5h5rrFU",
  "key22": "2YFBMFakTxWMASmr55g5Ae7Y8cMk4pwaBi43YeL9M2xsovxfEThXVpqf56LeymYbUVjZsYN62K72oGPMUMfDefzy",
  "key23": "3XVgkHYsxQdQqipC5EiAQmWi599uGBsM1jjcA4kDJB6fyUhh13x48SDkn625PfB4m5NgqzUXHMz7GdabSVr5nkxU",
  "key24": "2LKQV9W46PZS4deLvPPixGM5pftSFRfPbaYTHkmm7DohudU62XQ6mgZQNhj9WdjkZS8XBmTfFtpYE5tWah9ebjdz",
  "key25": "nJkopkYwhdq75V4fu4uTNm3zhrVzcBjAajuP3J32pdWGS7VYTyGJBtAwd7ecvSMMWuwCKUfZ9TNnyAJuv5BaBnp",
  "key26": "4inZTJH4Mcfkrzd9NmzNJcbKGEKMj7Hy1b4y2TkmnbrSiHdhjZigCr9MCRdBVJegovEt8BAkFWXhW4dBq47dn8Rp",
  "key27": "3WNtrhhjnPxN8NZ5LifNTGqWPkQ9yeWqWv2JUofe8W9XL7zZiQ9R8NnU9ad46kY8AbyabMVxYf8VUCyyZXREoF6L",
  "key28": "cZp58Mk8W5nNbkoQ7NyUpnfd3qM9mFfki34DWcgdf5MXGXFTP3s3ERX9QoYks8UZsEGZGhSKHAjSPHbATgaSekw",
  "key29": "3RiQrTWhabg8oqDme8b2fmdRPvEH6Sh3GraEtBYDxGrfPJdmHRkz2syE4TWjCChb6H5rq5xqoPhJvrEzLaA1Uzik",
  "key30": "38BWqaxqKtM5vFuHRUuaYDhdycBCrUZcYQm1753NszcSaVoEVogQsGjXQra9gNkS8k6rZGTeRmRe5g9bN7ByuZ2V",
  "key31": "52NgwShxBwpw1mWMBZWrzYu9Zf9GYn8qAxArUhzGLtFh74T1fLxrkS2KpFnjPpN72pKcpkTbXLjuVf5JbxNeEtNn",
  "key32": "2gorCG3Cvn8xngfUKsiQX86GqQemFabAoYVahazAZGLHkBzH8vK6V3zoYHcGMkJcKc1Aq8xgpKUrFyrVbLq2L1tn",
  "key33": "41sqnRtqgvnepjHPpojYPQ2KD44itXwvRArD8RMDMcoyxZuUu3MTpL8fQg6x2W7JZJeTscbTY1i9f5reoLDWzTwb",
  "key34": "5kztuYa4MTCWEgPGkwoHdwgiPZ49WSaxV2ie5fvrP3sXYEUPH2nSoJjM5ybMmh2ZjdPMYZTCz9dwa8YojLxLAmty",
  "key35": "26FnY6kWM7fDQHry4H71hdLRDFj7ixX45i6188syTyA2mez95jH6ryy5UHBw26hjGh665bhdt66pU8QK5bbFEUg4"
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
