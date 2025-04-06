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
    "hD5CpfsF4KfRrjA6amP3ZUEdgrhnC9Vvtu1tWkD6CYYZgqnGiiAz2hd2RKJxJ37gZxZazER2L1NwN4r7DJCVj1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WLUL5jpgejua4mYmFtBStBXJxaVqbmb3E2EC1Jc2oK9oaxZZMFnwjy2tWgkanT2eNfC1VXPEFUvWTY6KLR4rq2q",
  "key1": "DngZv8Yi4rHUq2SAzwXmjyv8z64461wYk5cdNrsnpHZ7X6uFxcMZ7fQ3oW4CzcLxk53gSmPe2Tr8SQKXkSe1FAE",
  "key2": "4W6EVWEx2YkLwLdWsZC456Muvwi1VJzHnLdfspiybrs4E2JbMxA6Fgfb9CC7jVkjFUzfJVsrKXht9fjV6VxU6VY",
  "key3": "4jkniFypbu4ssHgWtCWPVSfyRHueCQ1yTd8iRsZg4PAqdsUfvuRbQeaRfKpzBDXtGpfDmPsTkY8CHD8bgxj9RdGa",
  "key4": "56K4zoawuDj3BbXC1wujBxULaYfw5PKRQqhgDmgJbc1WQixEGMVV9Y1Y3ucs5HkL9AZZpLuongiwQk9ga9TdbXXT",
  "key5": "3zkLbGf11P8ypSEQ89kBoBp8DX85ofGCZq5iiYT7Cz8uYDoVyT2skKPzqvNsKaaDEgG5piE6eZnegH4jVLre2k4u",
  "key6": "4M7ohxKQtshoxymTXjBykPF5JsMbBfZZEL75ErK3u1bYZNBJ3nNzF7KecUQ9kehikibR6gdeM3HrnN6uesBc5M4J",
  "key7": "zi6aaYqviXVyrPibSjijvUjDUj5cjWwJpVkwZixYqe6t3jZQKoGCK9hHViLsVJJwYoYtTpLNJTXbaqK9aVsszDr",
  "key8": "pRXo6gzYw5ZsTWhP7FCuBtDjtVbFCMzQv94x8mG2c36RbujPE4gs9fGs7RQF3vDKVV43JSMmPZQvJ3it9jYDzWS",
  "key9": "262a1ffCxnd9ju8UYVBC1Wc5iVSnkVAMByTQz65yvYRtKuvgTzftv7K6cBSYP69VbfqBPswV4BtRCiQzmqobD6eS",
  "key10": "3ao1pLHaabu3j895E5okWA7D7P4vHTHiYALtSzZZ1CRng3g6dM8ajZzYpf3uj1eQo2vQ78Z1UDYUX4Uns7XFn5MT",
  "key11": "4Perbs8AEahyNV9fiMQpagFC1bGhxv5ZZyhJMYFm3aRUgxJRiaMG58kLELBgFiu622VnT8odFaCr5Ru8TGQcrzc5",
  "key12": "28heevAVdq1i18j1Sm4KKnVPbXi55Kr6EK64D5N69xf2TRpfxAbg2PnEcXcQ8nEZo2gmVjfVaG1vvFfqRhuRXZny",
  "key13": "4Ry6th6mnTgLCcTS6aA5oYxaBv7gfJoebHCiYiWELYB4eJeNsZWwVSRq2mnLYngU2hUtLDUZWTg9pKhrsF65jieG",
  "key14": "2qwQBv76vHGjVn9ygLXWpXiTpZmXhCVkTE1UPw29yz2Z2FctubHszvpLwrCU369oCP7B4BUhtAwLhiQiDBBLSqe2",
  "key15": "3egX3KLgfSDJZVF4YCv3hQovsLYRSxY8BE1pFUW2yLuViuWF9AVik69zmvhGQ61BiMYaKsa1CLBhqwQR1nCC1MZ2",
  "key16": "Vr1zeLDFhoaBXurwGstYp9XRiyGFxnPsg6S9JRXZYthMqAiGGkHNTgchMxE2ES3veeTv4JumX2uEYESRjCGBHhk",
  "key17": "3hEdQeuZLWHXsFjwBTbaf47po9YMCzDyLgGZuaMwhWurUzZ81v68313u2W9K3dVTa8QidVdKv786yTMfEmHwTGmb",
  "key18": "u61cqKp39Gy2JL6aDVWGr2xTBMfEqew2rj4Zt3eABHXdDNnhHZnGAZr7jVRFwJ1jh9nhzv8gqHqYddJBt27cbxd",
  "key19": "3XMAUWBhTgbH2Z8a7TvRQBgMkfEf4zHeK2FtGxaMBPQqB5kJFDAQEanYz412Lpw1Xz1FnLhGKnLZud72fndXkcCZ",
  "key20": "27Y6R6bLMWVidD5rEjepRH4uqdoEFQWwLqVRmuqUskcDkhE6WW55iDvmc7VxTywfMGZmFvu4rfMPyZLsypmTGbRr",
  "key21": "544kyC15LMKeKyupvN5PfAfW46YPxqHDg88xnNsVP6Y9TbiUkGLtEcZajgnp8Ex12VuiHVJyLwb75hL8nY7tCHcT",
  "key22": "5suycHuqBBAotMz9XosndX8vw54s8yqHWhBHZSRdhKdzGVLzfYarQ2DaiM6hNdqxcuSQ44PVgtA1MLHrLVk8n6wv",
  "key23": "2F5qxzdaKutYEZ3gHNCRNvYoLLvRDjMchCbBfo52A88ZYhDF7QumSubX2UVgfwnbGbXxhJ1Axxfu7Cqm9sermW1M",
  "key24": "5maQ1Dkg75dEh6z4DZCjQ3HjYPMLKwYdLjKVXrCPWMw3ZgZTfy8y2k4sKiH64sfEa3fb6mAMdEMgt1PMx4v7vfxF",
  "key25": "2EpkCrGkWe4Dm89ajFfbb75Rf76izKsWJyoM2RS4EUohevNfhG3RSpwkpcWq2tmremXBwxGHjbizTKd5hJNazkyT",
  "key26": "5t6ENmntkrFuESDaMEuGp7DpnvyWYk93MMuM4V6Z2ucb2Q3gdJ7fKbEtsRvsKEmhy4TBDUMuEywFaCAKkBysrmPm",
  "key27": "4dT63VjCcTB8tftwtXh1PYmKveoGSNCLkDvkigr2B5gKpSwjwGRF7oP4mnUgmEapnbfRRivC8B5jWhVpeuju2ZGm",
  "key28": "3ztxM5G9wTXLU7G5rdvY6j7yz8iVveQzjA2pojnLwC9YahM6ifsUehERbvRKgg1ky1CbHRQEyC25xuwKfiGbx8P9",
  "key29": "5gceHqe1FNYcbWRXjSqpvdN3GQoxYSuT8AsgabRKYRG5bnz5cZGRoKpd3zMXbsAuTeMTwjA49NssM3xKwaf1GqKj",
  "key30": "znmiHxk7BpfXSreSA4qyHrV3Rq2g6yqFuTzSHBDotXKLeqbJmuA82NAJtyCDpiDZy69a64Nb1hzBTo5BJS2BG98",
  "key31": "4Fom2HZR1Nji11xainvjjmb11FKt7t3FotGGSx4MqCBa6h66Th8w6Efd1WGNLfUzCsRqYKbP54meaqNb7DCpQHtA",
  "key32": "4aePKeKYKxMfHZ5apeDe9GyB4krgPC6Pmkyy26RJytYj5PvD2vKbRPuoM88YwrN19TNATc6JNNgM9YNzwqYLfT7b",
  "key33": "5voLxkQq2mJbEHns8Q6KNMBcGGK4dMxsJAeykAnRWS9BziZ8imiJgcPNGCcN37h6N7yaesamVd21Ebm1YuKfK97H",
  "key34": "4rKYjBPhmqWT38Li6qs8g1dBRhNpHYswS2uAEbZBo5kf1hjK3PKowec5Sg16u8UejbakEywJ4f6ETdoEGsKGFw76",
  "key35": "RckwvVpTzH4Hh2iNRwQvTwty9a8F4qCnH9gcodgQkxJwbsLbSjB6ftM3dmNPHAJr9tkT3r2EEfzfFMWbag1CDx2",
  "key36": "3cGZL9EpyLtKzaJNiuAbSo2Twu7415RaL2N99dmepJRaVWKThi7MESw2wrMV3cT5YLrVUjMN97Lo1k9zArMVnNBK",
  "key37": "45yizvMXZbzey2rGPSehLsmRnDkcULuFjrAr3BuEA67UQU79sVSq4DsRpae3NGAKeXuUQVe1d4YP3VmKPyeFBjy",
  "key38": "61QUhBQc1ip8o89rUpmK9Rv5HQxko761ivc3juZvherszJwaZAtmmXsfde9xvjsT75hXqFwgxz7HCtdoTNtLjCX1",
  "key39": "2Aew5PsRf7mwXM3hpB745uJDBMbrHN9qS1ikLXWXF7Lmp1M8ekyZSqanuoTBuL5C9s6KQBiRBYtBFDm9iRkiXnv9",
  "key40": "3RrDHk3tn95ovLkDFG4xoKGtc2xJVHyLuCV4nZCjxf99iPhyTfdW426VhHRWzcae5G2Yu4E3JUSZdmcr5hNcHgkw"
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
