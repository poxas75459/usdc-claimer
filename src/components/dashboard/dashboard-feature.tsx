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
    "3PXbXzZwWtdSq6CGyAMN6FkwsBF4Uq7rVSTwBnGoR1Neu9xD8g2o8xufRjReLrvseVdhUhaUi8FJkfA6uF3AD99H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2j87kzFV1aG8X4VHreuHpzG5xRD9sarF7x2DZbofmnvxXUKc2CZd7mAR2Vpiaedhns1ZmPZos5kLtcRYaHcPS7",
  "key1": "4TDRwDXMoUxkLZzijSAuSjDVvAW15yC3GGqNDQvUTH3sSdMC9aan1Et5byNeFSSqYVu8Z9yxy9mwaHawfiB4Hjkc",
  "key2": "svRCrxd3GTEJprgq4srswSr8LHwX8o9M5PBkEJhbnryw4jbdrgAYtLj8L6oY3A2ez1UpBXXNJZpHSJUUeF1swQf",
  "key3": "2Y7f8m6WCp3LCV4GhwyyDew1mRh3mrQrdHsu2VNiUoYcJFCgTuKeSicTFdRZGpyD7gw2KqNQRdFrgLpH3WsD5JPc",
  "key4": "4M93g3YbdmFKZJ9cdU2tQoXJaDwfQjWZF4u7rdWypMCgCCjsTzSivi53vdaRyrK5s1juis1q9fGMavcg89cgH5NM",
  "key5": "5LH7sa6ASL9iMjwTkh2cQcRKnzttpAFYLfaccjRVHcuss7ebU8qARZWz9zcjwYRcufYkkGsgkTtPpyaJCmEEKBbe",
  "key6": "5HvRWE8R3Y3WP7YDtt7XwbHAfLhB4gZ42UB1iNrtMoKSmToCt4gDNJHQ2BJyeR6emqUT9eW7iK9nBxMa47zPop78",
  "key7": "iwcYb8KNWBqgcf1AvrmgbhSciqNWmS7zPDmyPKNzR2dYg4XexqbnpTwePwReXaCQaWjfvx2outfbaBezGS7i8wD",
  "key8": "2g5MnPE3ka9yjMALrHVdz2CPmZq4ux9QDUrtmzz1t3NyWpQw93bCGsdynMQSeyGivusyLY378f41oahzHvT1Ntb7",
  "key9": "SaQtC92xQZQUmu3WnC5EZzYfYjo7etjwF1iv6rB6z5T3xoA8bfgKheHiE1NFexHLHsAHub99Qy4csqzajd1Bz6J",
  "key10": "g5hHGGV4NkMHncV9GQWh8bxSnTkJzk2MfsfzxAPkZBWhqg94JDRPcKuiHgfY7wGT1aUuxUgEXejhG65deCp4rgv",
  "key11": "3qPidpyifXXaCMwarxX8nNNAJxsNyrernwMp7j8zEVX2mPdQpegCMnQyDKib2BNLc1i3zyoGTYxT11TKVK98we7w",
  "key12": "5rRKz3MkomaHpEGry6QdwzkvQDA1Gw7Rn4ETw9rqCBCSPTMBC7dhRoMZE1wxD9aMwboZT6Xoh3ZjHAHTkv6WAkJM",
  "key13": "2yMCGyVbNZ69w2n1vafrPf1a26RRSyzGR5BKtMSqxPRzLhFLbLShg76BiY6Two4ed4FcS8GYihyZs5nFWKgpwoTC",
  "key14": "56trWnMDgMxPQp8yvkj8FEwA91ZXeAK9FWr86BJBzpAN3KJyRh8NRK2KHMiUF5dXngxDynmCfJGZdEJtWg33Wa8j",
  "key15": "2iq1bFf4eqTakhU61SzkhrGjLjM1o22AVYxJpuPcikqLVAChP1oZ7kAdCwRp3ZJrkx3sBBarUKJw4KHeVWsY56c3",
  "key16": "4ELQFXF7ieXRQq3Fue8faxNbWh2xnkRqTjVzn7pAmeUWsPzxeSRz6EchoPjfeDkZieAdmRKT7pF5tyqmXPRmSJw9",
  "key17": "BUL1eoCTC2zxxnnTkQC2TJMLabkr7DsVJ1qLgH5py87ktDvWWH5Rt1FLz2X5meo2tNpMWkkZJzQqiDZ11zxAH9d",
  "key18": "5WjHtpd2XLrzLkV46AV8hGt5duv4aq1phVnmwk3yDL5rZqHZupfSfZv3ecPi41jWfbntHRkvqdXbmbLq5TVSpX5Z",
  "key19": "3oFmk2Mghr3hRZgoepjQZX1HN2WHp8XGtMf8JTgHKhcMWYyRJMQYvNJEyvR2fL2zpzemvrYmiNKht3LjKVxErzFT",
  "key20": "5hRKGx98ebbcLAsgYqUiZPPMQpKuaNiNZ5HVk221M4mn8hV9sFJB4yVCzTN5fDdnSceZWvZtveZSA3HCaCawn5qK",
  "key21": "d9ryZDQ11zxDabFeueEx7sCWCD5aB65vB5bHNVvsieQe9HE1Aa7i6rAjfWxCsoBHU9ts1oMK25GWXt7EUc7N7Xd",
  "key22": "3DRqd7U9RMXgsTi4K6msgGo25j4P8sYar4QgC9bxBrLbaQsNDKErG6X9swNAKGHSsHvQiner5UhX9u7D7X7RjPYx",
  "key23": "2j96WgWjKN3DJCZsDhQyrWMePwLdai4Nf6g3j4HQFbxjrA82uFFHq8181LLKy9Nuk4JuioGmLp5zptYCyftQvuq8",
  "key24": "4h448tSvEm8KRqya8TGijNzmyUg3vTh7NZHUgRpRJVwdr6ks9fLxrupM47VmLW2X3uZNc1bzeP6BTYEczaJHuM7U",
  "key25": "AmnyoHEj3VU3PqL3zX9Q1YKpkWpqRtCt8x5VQ9uV4im1H4kSCJ7C2CgH16osdtQx4pR7HdLBEKbdHaubrFkrWae",
  "key26": "2UYM6HW11ka9KkMppLQoNVjUcMod4qpbMJxoJtf7hWHoHUfnGuH3GDKeXJxSSeNXhjFDRQvNxeK1MGRzWJixmJXV",
  "key27": "5tdt3yWWZJ85qiW1wjX5thk7xfkkWDXBtWYukZYFVAutsv1v5ob81e5TkSxxn78hrzyqpwcd6B8fbf1LfUTKcVTx",
  "key28": "5Ryx4HPRkgdJZNJaPyAynvvKoW7AeEpUgpt2qBTfmM4bwb54jB2PPXpa7VL7KsYfQxEP32F2vTq82j2Pqn82FCmC",
  "key29": "5E1YMUiZgS5XoQuK6SvdJ9z6FqMMV44hPuhWxBAB6UnT3pU99VFtFo2ie5C62bisLP7XJa4xEqoVEMscMJ1j7ZrS",
  "key30": "Kf1KEBctKK1vLPiWTGbrrE7WsZVeUbxEgLbTq2wV5DiWfUACi72KZHAGkLrjSNCZjaNjE7HSnPiG9RfjMpwzgb8",
  "key31": "4DeQY4ZPQw4JBvvDhDjSS5sC9UBq9Q5zaaTNYgvuse13q5tQYzhEkDsbTRAY3HWE7XmmSh2q2rRKd9XH27L8Mjua",
  "key32": "t7c3S6B4ZtSjpoisXx3cP8vVJ8b6PCFT3kZBsq1Cth7MEmFET4saimurL9E3edD4hqGrGnaUsbuZeH5SFGG2TxZ",
  "key33": "5fDSMFnhkh6hzhtBTUcXEsNjTZdMyyJjaerCJwLZpdfJASAvqFUyUyKqw42BFWFWaLsKCQyiB7bQjDX4Xon9oyE7",
  "key34": "3sB7N4qbZ1tid2jzxxeo7f98tHBb2bxPyXrhX3Ez43pHTYxGr8FBFNh7su5yXXtiTRkaJZarsH1qd2vLqPqdDqfr",
  "key35": "4fXJH788kcg8cHx4FZf31M3HLXdnxsHN69eKhrpCzXFw7tHjqwmqDCMtL6aMKQ6877dcPBmz7tYJwReRDGR1maQm",
  "key36": "4S9qVa9Wh2KSjPs6F3DdW7dHFNPzEUcErgRSnfmSL7EAi6jqhKkvE7bNLwQjWCP4Y3UNPyoJF7PiLkmytiRvZsaA",
  "key37": "56udgCZWYN2v5VANzcA7LbPLKvvg9b6PycUGMeESvkeh7oAENVTkX56NGwEEoasshuh5mitR5JJYUr43Y9xywrap",
  "key38": "TFTgJQczAtyzxSSULeghgXFBUW2bQgRG4cFDdhC2q4xtiSuQ9Ynyu42zwipqX2HVwpQvcgZfQmwfiDpV9qk6F42",
  "key39": "4zqiLG5u7FbebwFYhvUQ3vPKDwq1uQE4kWFTG4w5iU3e58j9kgBhoqNGBJHLpA6KnCkK1sd6db4VFD2BtNAYowe7",
  "key40": "37uMJbbP5qEHAPSUWiH3CM2QH7X1WNxVRHcgCecieReNHKHy4Z3TL9CE9hNhRiMPfohVM7EVCQamKMuETR6veLQ2",
  "key41": "2E2bFnDJJCXt7dTgPi2UfVhdeqzoiuXX7rHfHiQXbqepZgRBbGjSKHn3DzbfGL178vfSAHRUqKyYzbKXkpXoHGz7",
  "key42": "4aMngK4cxpqLPHC8qCXFP1Pt8F1neCs2uRvJJCGKHyHij5nu5e8bkeMoJQhjc7RaaBdmocFGXdfZMKiYCyGXbP9N"
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
