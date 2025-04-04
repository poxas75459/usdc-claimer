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
    "4VmbZxMdAcwEtFrjfr1DXTYe87kJsL3BaKLmk9K69N8E5vSN2wJP6C9hryoqnuUyoQ3yvcBmtLWcNQBuiLgvS3T4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AbLFCZrgyzbApfp5j1Qbf3LbiPxabfRf5PkC8x6SiPjBk8MW5aiSQQC93SBBoAcnPaBMNCfefgptyTxy4YybqAg",
  "key1": "5maet9tbf8RXqnWxqEKSPjw9S4cDSGoT545npfcdzBLygHMdrWkfzmUmF7EytzHtD5BTytvN8sxq8LXogNoCiB8d",
  "key2": "pE5T47ibBVCGxBJCSKZbuNc9wtUwr3oGLGxFeSgyqz2UEwr5QMyn7fm3tBzjMFt8L8DvRnYj7Xg5WzwA6D8xkDK",
  "key3": "3S6yC137Ge6htiTJngsCSEhCq9Tcp3XPwyp6ogNzAgN48gtuxJEUn3hXVK2N93p7nVsmZXW1GaLc6ugTZQAvNGfU",
  "key4": "5vyH9kmX27vW8U1FkbchYJKFhcJDBL3ZmtuHh5FxaX6JxSBCFbtpvhSBF9WuNsU8bc8ZzAxhere1djNfYk2F9izt",
  "key5": "3nB7r2g6SuZdhobppusuWVGAGRWmEjjwFWpShn7eHo2nhe2mRgs8t8WfZ5oK4AW5qMpSBs5jmUUPzu2w5aJKVxzg",
  "key6": "2LLwJYxRvH2VQLiYx6KMPXs2cspRVMJrA61QZY2Y3y7qS5S6cGpcupajcEMJwRGHhspDuc4PeeRCpZWdQjxiAsUr",
  "key7": "5WRmnHEtx2bMNdyT2BztfqDS6PwZYbTQN3j1wsuoVdtsajyFw28qQQ6fDAW1ed7cwxF6gEikdTYfdpLDxTwjCz7r",
  "key8": "2fKdn5dkbcwpcCSqAfVzp6ioBeGWb57nrYio4oydwXhWGgq3mbLyqChxawRqfQZLEzJanxkC2Fhpg1jZ3kiQHab7",
  "key9": "2E6aMd7KvrT2RUnieedJYJw4CJJR3kNGryKzMjTvxSN2VPUCvih3smqe36iHpWUoiZNbjNe3TfWBmiaUmBiWJGKD",
  "key10": "21egQZGJZncS3zFLsvSSH5iZSxPYW9MK4Bh6w97Ppme5JNWDnpeB9QyCPnZpQtdqiC2V6Yrfvh7uX9waZhEwEt9z",
  "key11": "3Sw3MZ1n3oukxZ9VxVYzEqaB2ZGg1EPk6xjPUfRUMF1hSQfvFrUAMK3SKTLEShUH6cnSBmt1qs5wK6dub8TmTwpS",
  "key12": "5YwhqH9866KG727mJKZVkapKJWGHBVLsWoJXt2uQdZ3pzLjxz6sbbNsNQ64q38o5VZV9QnoYaMKhP8yRLPq24KLe",
  "key13": "4QVmToGUpw2L981khxZfQn2N5oBFeH3gnr7sANv7rK2aXrsna4GXdRfZuiNxxgrhNHKvhYanxw3ASTAnh7aZFZGy",
  "key14": "22mHEZzsjKzBRfFX9qmyytMqgd2PsZ1XH2c6F2GhhfdcM7yVt8x6Z93EFVEKZC1cJR7cmGVrojDa3YpWGJJhuBCY",
  "key15": "2NA7NPi3Qu33YotdkkydpafaexKmdde3kXuCg6QD8uPhbGxoPCVK5xDkZYSW8ExKhXrj9DQVm1jY3B5zkaukDLTH",
  "key16": "2Nasm2ffHJtpsaoKd8xFvnS6GJQPvpx62yU3V9io8dXpmpraRdeMKiHUoT4c5MAox7ugE3eZ5WgWTA4KU6xEFYE4",
  "key17": "2nKs3F4CzRKRPsnj8Ejkp2AB4QzFqVweai7TJa6P56ByN7Tv3isTVk7KM5G95jSn62rDtykak96jRXAU9JdbsELQ",
  "key18": "2jgmvrwc5AgMKWu7iDATjgsBNC2Enqg4GbwtdixwiqujspASThmcGYiFCtgeccQSgSt2riH7szCE7NfxDXYdFwMa",
  "key19": "21nZkmqPNFPjQ2KzxKmEyVe8RW7gAA3ZtNbWkCspywLnHnrCyjo8rutA5huYh8yBvU74LDZhZWfxsgmEq7qCvmV8",
  "key20": "4kWTv4JTAQEvo8yXnieWkv6njg9Q5n64MsB6xrErKCTjpadbvL7ctKs4VzNRh8bdjJDKVGjZ5teouTSecxsa8zhi",
  "key21": "T2ZKRznxeFq9Wj6BnzQB8vrPGiveTm1je2t7vCTkRfPCT6dtzzR9RA5jEGsPaiqFgaPEkMmK1ukoxoKPxtipB4g",
  "key22": "SiZgLHYGc2M6dxdFCQNmrJHq1KBZUog9jRhhZUeN5VdvRm22amtuFVbN9hAByeS41oQQeMRDMe2BEjfctvPbYoQ",
  "key23": "2MRnAKFBpau2XUGfkXJbi7SH5XSGFzbPfCD1zghfRjbfhY4nCKoYwMQiMwFZLkLsQJgKmB4si2d59fpg9tQ1Xqk4",
  "key24": "2CLkZ2n2zwhB25BE5TE3j8MtTGpuwSg1b7oyMCaVcbYtHeuBDoTqrLUEdwWczDQGxU535PerntnuezgNqsKfhEsy",
  "key25": "5BLRP2TWNeiyE691DRfukGMw7NjKVw7ZzcK1GDwPMYEzvCYEt9eakiEsuFxwodC2MHZz6Uh4Pm3d9swgf6pp25fG",
  "key26": "4kHz6SJDgrvmL5TxLhJaEmS52ZcWQPWwCZC262uU6uR55GpDb5fWC5nGRiTvytxQSbjkWGYucfrkd7PxiYrk3QTj",
  "key27": "2mkvMhG6KinW9Qw5JynuFhMoopiwprJTjJgNXgWAL5rfDa5C7aQZ8zLeR5TPs52L5tJzWTXpAL2byJH7DUrHy17J",
  "key28": "MkmJjeFr6igvU6KKsvpH11LytakxYUHBUHfBHkRJ36xt7NqFStLdogrDNbZdXeVtURBUKnqAfj2WupU31MDG4BH",
  "key29": "4uGEmSCfWya3L2N3BGhgvfHCCLfALRPtB8qLrmw363ni6Cj98rHPQ1eHH9XxpTM1z3oGiZrpHSnRJDANjeX9dG5J",
  "key30": "3Qjns4E2vibPUCs7Zoi2M4unymx3X5MvXfQBvg3K4su2uNaobsdsa7zLcKiSNqnmzKHAc2QVH1tqtUQf5Z7E4nb9",
  "key31": "5xfGQZM4eU6pRGYgnhE1currAN37DRt7a21GNhTh3syoVanG95z5zij1MnsaQwZrLL8LCkPQii6yNXvBvow2xadp",
  "key32": "5MLRqRczvCn2Wm8hGYZUn64pRmQcErd1xXuvyJNtrpkmqyW2Y9xjdJn5UtW19qqCYCAawjNDzRjvyNvgJHro6Kmz",
  "key33": "5cy36vnxu4ULpcnDXZ1xRD2Mzx3jRUjEzUwepSwx4PCFsdMbvh5GpDXYXXqa8dR14dwsiXBaownRZCbJuTTotEjF",
  "key34": "28bCG99qm6WoJfp5YYrmX44r8LFgtRAVCWfN8jkNVSWxAepinzngKZDKRbwA4KpmfTokzq6NBEoeTz4NsyQeaiSs",
  "key35": "5jAiTfXZDYfJaf38W6D1B8BUDv2zTGGaxP2S2B9bJ8RaqnWgzCLhSxXRMRjHZUP3ct4GeK5VX5apFpMaUTQMMdnF",
  "key36": "4mwGgRiYpaoRSs7Eurh5wU9NnYzP5o6g5CsT6xWKRXEXLyBtNBjsK83NLsXDkN9sAhz1txCNUtExU9uV33tXMBoL",
  "key37": "3ihkhEg8Kigx8rVhQRWbugbSQqw53DxZcP1oxqsJ535a9MbByu8NZiEpgPfCQnehZbKa5QDBQjMPhrheXqCDahAn",
  "key38": "T7HqhR7E34LqghuMhe2KELps4o1JATpfoEsPLspgG971qfr5oFSSuRbHYgn2MfK5XDffE83JmX54RZfxDaFGBrn"
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
