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
    "RUtzRquyV5iVVfPFxKKg49FFf1nv2jFzqDoBu2Ws4GydBJfLmCU6Go9YotEpWQhNWesnJm86M498LL6skKVznsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tr3NywKrdHrgq9ayDngXMTijj4mVDUvCw2Wt2rCUm6wfG6A2DxzpVghg4bHbAgBFFa5UmpAcHDjJJuCMuJ7Ecco",
  "key1": "VyQk7568hVKcutfxQExo7fFibZfKPbg9YzhZU55nkHv8hHWzZE85K8SEKKrh45kCRYKH5NZ3b1YR6NXZY1vVh6H",
  "key2": "itir7caRWVj4c2tzt7ayfaB3W2AYvFZ5iShTwugvxD49mrg9CH646HeqrNnmUSZusMm19HJF5pZVMqpDp4AhJkE",
  "key3": "CMuFaSGCeSnjDqCQ1KTKKtQXVdwjvGGbyJFmK6zaz4ogSiaBWgCv8FAhjjukVULgSi8suMHag2oNJ52oGtfCVUH",
  "key4": "3zincjXcxgX6DonawW3ku3Vput1sZKYxrMsyKJqQAbpL27Naf7RTkBtguQvahnELaoJJxXBipdpYwgZDVqKz9zxe",
  "key5": "CxKMYF6wGgYWarQgw4C7XUNteAvMDMYTHacsZx7nah8k1TLy2dy9iURuNx9N4f74qXxR3nSah6eNatcMR8VbaFM",
  "key6": "a6hXeo7XhR2tkZDGQ659KioP2dgEbUZ1oGptryWd8244YNqugvSgzwertqemWbH8BxUCUAWAEshBsKvfFQncGDy",
  "key7": "2apbqPZ4aEMXrx6wun4RSo76BMp7g3hKmFoPkokTBDwoxpDkjpMdPEEaihNG6Azc2eQEgUVQqNgVP3EKNWur8ubQ",
  "key8": "57CEksBpPCW8kQyZhgRUw1z5FYdZvmhgZUVk4WusxFjAUAaEywE8Z97q7YZeiDprNAg9c88JwqEadEXfExg3dSo1",
  "key9": "3pbPvPaxqwiVGAcmfvQduskx3nfJm1gfNrsnEeNBXZibNpxeK8yZoNEJorT2ejBthJXDuNWSWNjTeC6Xu3p9n2Vd",
  "key10": "4MZxEUAK51o536PYjuvLAFGJr3ubmTeQzkCHepKD2Wa5NkKwRL3jzp7PPUa15vXWnwDNMpBo93Z7v8pLJ1ffjcKW",
  "key11": "56NAGb3a34cYsXZCcvhruDvLKqqRBuzoGCtQ7ZqxiGK97rRuTfbPCo4Hj8L4Brsqhd4emNorw9u4GJ27o2dJ3fso",
  "key12": "YsZRD7uU6EqKin4coh9VwapxGoFeALZBt1qhqBTtxi5dtbpQiasHkGPs1By9zCNMPSWRboe3PvDLdZsHtCaCfP8",
  "key13": "54DScG5ECtgyPTNT1sZtxZ8Z2zVjQJRXkS8uaUKnftfjPrexLNzPGE8VUEzDeSCJN2qQEivvKrNt2Jrdrq7e2FxK",
  "key14": "2AMR3z5kBL1xz2rikaGxNkvHyTPrKcbPjzeeJEP1JP3daja3yfTYLAvUapQEK9yvNSFRytwpcWuhtKSowQfjAC71",
  "key15": "2rGMsyX4f2oZDrDXUcNuXuSFxjZE1NJZFKvFt3ZcQo9Pxh1PXHUYgMzjdJ5AM4wA65nWfnoZT4TzLDPjAHWMQ7uT",
  "key16": "3TZWQeXf3gf9NexBhKYeugKgt2GRcQms1R9LgvgA18UVjPi9ydxRPsiL1C8Rj1z69UV9Vnw7RSCRBJejZRWR2DNs",
  "key17": "4L8jTfjtVkQMrSna3tBCZAoyFqSSSiq1Nq7irbDXtHaF52naFs1GWA8zQwtgLtfwjeSuJMKmQhNpnfnmZTgvRzgB",
  "key18": "4A28ESFmurWpHiLFBSbwxF4tovmNw1oRziV2wgoHCXiikV1fK3sN1BAHMQu2ZUX6pH2iKuWdwXfzAUvVZVEk6E75",
  "key19": "58EapcXeTEt2VwASogwRWLzFCwQCTfENdo9RTspL8N7QdTLe5zfxnDniXJgBCdZDehHppEbK9CpdefF6HUcvrPoR",
  "key20": "5gQMTGnL6C5ystQMiNWh5EhfTP19d2gw5tBak8Ngc46Q1Fr4wcWDaiGo5BBNvNV566xkRuQAJxVk8VYTAgCLKStY",
  "key21": "3BUzDQmo6zEVcLy8bqUbWugUSutDKXE7NrAWQZxr7Z7dx17CvuEdhhFr1vgcXS7sF5mEW6YFo5NeEcq88HAwMuzV",
  "key22": "3Nj5qLa92xoHrxSfA6pXoZ3RNEpY7trtck3hnh7FsG8CvbRkiDwW3qEboaaQK22s1Rq4cxvZbs72PY1v9NR7EWSW",
  "key23": "4TVkZSuADfcUFkZsXweHqYRJCDfwtCYiweH9xydeKsFmL5UcedTNnmzLiHnbw2VGq6w5xHd2xfygYsY1XtWu5PmY",
  "key24": "67VF9cGXSMPKfP9HxnDuAuWSuCUo2duZbE6FGGf6WEvZusjnjZgSrC5xZ9wnw2i8rxTZmwd9bn7biYBRf7sKejkM",
  "key25": "2KKXWkukjtrXfUHrYt89rwguJnomr7NbeiPAJXW5bYnMxzyNAPS8SjGVvTKTTaVq5TUp881zrTsynjmK8PbhcjJL",
  "key26": "358Zd3PSGxsDwRYSpgup3m6sX7ToBAHL8Eds4vk3dKfoekmH5wvG1CFnQEf4YnypHhgtbzYvfxqckeAjiYh2a8mt",
  "key27": "QRR1xQ7dRYo7J4LiwbiBkmg7t3ZC2gfQLhHiC48fSHPnSZ1f3EbpRY3VuuchtNWUiYYKQA2oL9a1CzCu4iHREdw",
  "key28": "2tRAJkh2VesjxeX4sAAAmQ6f2CPXxkbBeMJxZiaURispDg7XyRW8BsAZrTvgowmnbLDygepziM27ZphxBNBYTTBR",
  "key29": "5tXYkctm8PXdXA2H8f1KVs8FMEgs2uUiZCTBeBikfViZqBvGG28e6mAHs7zsDjmQg8L8FJe6F58NEY3oKtUwCn1W",
  "key30": "5maHM5qF79UCA1hES6xY76SUHEdERTUjCXVganqLsVkkGdTDZooeUCvPQ82DsS5cyLAV4HcbeHYeYfUhTLME7Hoh",
  "key31": "22RKKbQtePP6aVVmQiyhhkopJbU8dMzzTnCD55C6p1ciEuSEZqHmTmVQJLyNJFT4smbQTfMWB2yxmkSqfhgdFoNK",
  "key32": "5RGZ6kwUFmhYa6AazH3WatXL9Fe3hTj9N3xxaZKwLd81WgQvLxjGTDY3EeetDpTacQTRjzKxAmqmwngmhx4Hr67J",
  "key33": "2uK2PPC1WEr2uhjBUY9baaEYSiMegRYgwiqK1Jt6mAx66LCZAGGu2EnrLWDjdTf3fob2eg7fZktJ5F9rD4zTE5H2",
  "key34": "2GgCNJWZjeuCzq5hTRoJ1aBssvPUJFCPPnhFbSweRSPGADLu9U7F93Us5DBU8oeiJpC9we8eeQ7woDFSsqK5aREt",
  "key35": "2PjrMXTjVoDgmce71WYa2mtbSASeGRAxBxYf4FV5XnFZaa2tQxVNWAGtctkHp9WCDf7PbmFmUYxpkcN6nXzevQzS",
  "key36": "3dacez8CuUouSviAUVRG4tUpbCUeZGeXgNEPjxdD4CN7QNzYue4aokYgMS2wKwpZ6HBvYGT2vBR9j65YgAqWj1DU"
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
