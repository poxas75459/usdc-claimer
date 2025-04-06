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
    "qjpphU1CD7r5nZ3wkkmresqXwxkBg9jKbgBkLGkkHLCYNF5NgM5vxn2WWaZhTP5jyrA7HNXVVqiF4gkzD4vDQfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gazk2g1bNumyfC3sQqBxyTAkusBaU6ka6c4pJJEPoo7cyT3HiV3y5Djd2LvmagKVjoV1K9SG6Wh3i4VXrefMPXX",
  "key1": "4ArcJtMj9waWKhWr95HrCEwMYVdcK1gSoKwZkdi5nCjma4kyZhcg6caAiQ6VGK81wKuWEgH5T8PWTu5SA18ksKBF",
  "key2": "4FoScQwyP38W3Vu5SwX4DeoGmqusfWEEWDfywN5X6vBnohghqQud4GkudWHth5692NSV1qYwYSeojXDjhEDqub4B",
  "key3": "KsJf3Vynjr8BzAiCpkgyMGMpJGHHK2HpoL9HL8GXb9s3JnZA8uTFfqrwVonpTY3ZZUZcqLMFwF2mUcHkMW6ZRyS",
  "key4": "4JmKtZ52XSUP7KVHALRNCs3Q8Zwkmdj32nmvcfe9WaFMcRFdSF87cyw6JYNWj3XQNYT2xFK7KHHvCtUg6hPkqabJ",
  "key5": "5aPWfy4RtcCAMe8kTCytpgXzraA43YFXWgU9YX9S42qrDkdhFJqpMGihYT6eoQNzA4kvvVgUsthB1gopJDoy4TGG",
  "key6": "47ZSzr3ACgPCXmRRFXmhCrL9WLmX6G9rrogzbGGbThxnaDKmNB8cLeTw3gMNe1T4z3Uf4rVWeScxSHagci9zys4a",
  "key7": "38UVDvHhf4qeDreuUN99KnqYeHEt9JoySV2HT6enP9JWDWZgx65JsCRFry3U2Vkr6DFji585E18t3txc995oCCsS",
  "key8": "S8QMGaFeZ2PLDfsWsaxDCVj9Ybft5rZr4ajbVCbZoAsumk85LUEnqtqEgTSrh5WHbYSSCu7E5PhCEGBeWf8k8Re",
  "key9": "aCczQcYbWjB1Qty1CkUcjD6tAdvSjL9UZpR88CWbZRDbkNrkHoQRXmpYJsVJFN6ueNiMRy7pNPFwyW8uRKkJRAp",
  "key10": "3rnX19EaGStktbwTmJCkB8H76b5HGVEiCyakKULPmMKtQfwm9M4icdtbGFZziWxrQsR3G2AS4Y6irMEY3tG3sng8",
  "key11": "38Q7Utc4Fgn4tTsTUGmxPFqp5KnocoyRhy7eLYDv5uo5i9UtMMrwUiGNnZx9tvFt8h4xn3erkfBwHbXBJk944CMf",
  "key12": "4ThK5vU63nmjVXpAdJ2d6XdhezNR8ShGVJk2HcsFTQjt24hBu29QDUWtqxHGWrcwRzubgBRGrbXnLWuXxJ6RPDzs",
  "key13": "2VeiRC2pPkKdrECjqHFRsk3vesddSFQo1dJE5ktvVrfnRoZJoZnjs9q9rvs8cHrto9MKQAmzjY4dRjg7XzKUtmCk",
  "key14": "5dAEjRhKtbQG85KKg4x2xfACGo6NLuqm4N5nf41TNx86tiSJrDsgX9hKcD9ic3monXUS4T3XVaTskQbnqbP7ogeW",
  "key15": "5Kf9FfG3QBNBj8enegCQoUwFajCKxhCdSbRSqE9cxPRRmt9JJUm5bFsjpkfDeYLTyJRGCr7T6Q3wLt1pkp3NRPEP",
  "key16": "5p96P7SV6N6zBHUDr9AKni66fi6k7YxzHzRp9NnicyrNaZFWB5FgfeSjZeM5hrDtwYsQqLom3wnmsc1rXGViduAb",
  "key17": "51Y1cj3AaXE7NSXMbX9CGSqMoJmC5CYZ7SSdLiKEELTvrXtbvc9kZ1x6Hum72DyF12FJpTd4bZxFkF697EWoS6Et",
  "key18": "4dvKSdj6V3TcWVncuvHWbme5ty7yEr2wEVjbMGDx88w1JghKZTv75stbVPNVGoQEJMGLf2etKWoY5mEZ2kUbtK1A",
  "key19": "33yWfBNNakW1tQyoC3V52Z82BRC91UBtV4fed7Yjbh4EU5gq9Ztk8sH7GwdfGbBUUwreEF2rQB9Uo3E7bHjp9mKc",
  "key20": "4ABgA5yP3cWHsKN6hAUkLApHkmgwKkmNVFaPzfQ2DAAakqS7XC3r565aLLpWbnwCfr6DwU1nZfrHTMhzYRwq3E2v",
  "key21": "QW1emmwPAGhG7zmJBz6JZrrJgNpxooDkNiCWoNgapZ7YpJGrMxqYNMyKeR6EmsieJLmjuMFaTG9LEZB2PkzdN4u",
  "key22": "3hfcCfjbuZPndaVqQLwXGbRKgE96X2AbFqQgBhXudp8icfB1fAfoGD5FKJ8BtMsAkkMmw1wkQxnADTtANXjdAxYg",
  "key23": "31ZHn1eTwtuomH88diiSez7Hv139VNVKjAvaR131a9g5ixfG13xEbY4eMZH9prnNmu67XuJhtT6xVtio1eKrhtNP",
  "key24": "2UEm2F927seeriH6AYpESUYYVeEkEzejk9EBqUZ2AW3hkMBnznnm2SGZQ4q4oeFkWV8shPqS9HhJCVP1BAV2XHQV",
  "key25": "5GshA1CTZw8iL2AFB8Hi4pv2TJWd54xiYhFEhWMz5QyfrtHYHzRYkAVBiGn5PjK1jzfjYgpkfBaJXiaB7dECMF1n",
  "key26": "34e1QBraon7ECfWtr5GG6cDN3xboMdDBNuwtQs9jLJMy8tajpFAuHg6SfCpatC4AwBYkzzZxciAYvx5va5rw9EuJ",
  "key27": "5HrCMfvvdp7QGR7Ptb8hM5w7tPTTvytSQZ8pBXnCFo7Aev3r9MqaS89Y3yaSf3DRuqUCRiXzDduC6uPfWtZRojT9",
  "key28": "phtBYuY7LZ1wTvGNvUr7neEPbk5AyL1ftsP6WhPWkxxgS4rxTNPJKCBBJn1UqRxfWy48wPxFb1U4EUwAZzhJuub",
  "key29": "245SwdpnRai6h3Apg7DR5ZuN3y3GDPL8NbBLFPpkf5ZG3zm5qh189rRXymaBDmXMmWu4ECYHuQfKjabNeWVhDYsH",
  "key30": "4ze2JmURG1VYMspkntsZJsh157dLQooycGAqYQa6a8enAQPmwAC4E4Hh5xXAUU55uqNed1dXkkqs9UDcHAqRYVkw",
  "key31": "4G2B44ajjzZK8m6Duc5ns7vjbfshSjwhyodD8FNuLg9q8gNQZXZHWgFKSRKH38Qw5jKwyQraVw82teR4pzMcTCti",
  "key32": "3ofD7tKWyyJvBkcsgVgMFRA6CGdfgv2M7e15hHg3n9DVUKHo4F881VmPywH4AdAoxz5rztVuk1UipZCnRQpRkjoz",
  "key33": "2JYWK1ws3YaTXNe1drzhPgapkmMQeQ9tcR9iuRWuBReoG2B2Jv9RiZ1itzdVNvpsNJ19dUPBT1HN4qSMhApM65Az",
  "key34": "3U5oHJLKgt9pwYCuzaA62vQq5UfJ2TD2o4S8VQLcDxXNPhy33SbC1RZaFs2UefinkB4yowLG8year23T65PWiDPn",
  "key35": "4nCo4if41xiHPKULPsRC48VanpVpY6Z67p6hKbefpZjd8cwZACkaQuMGeMFqW2y6zXUHNZikNxPCTiij6ar9pBPF",
  "key36": "4kNR1TzendjFquMCyvGZZ3qFTv8ee1fagBJqo6iFFxXRDbGeqntoguPLwdEZ3qMPVrvATX7R8XsWCdV2mENmWu2j",
  "key37": "5VagUnPromdcfBk8iVA6XBfNiqQogQamX9ee8wooXbmtBkPQ6ymkSuiUHZB3jBiwRH583XgpDoC9AKNt6KeLf6pL",
  "key38": "2npr26hUFp9qhWYeWGriQC7FAkEWsL5L9vDD6K5Mt9CapJ82sPYgvBFHGXKXriRQBZfj93aeUhKY1oqneNC3Fqe2",
  "key39": "2TdA4FAt5abLSp7mFp65A7N2Aba44X9qUAdshgj7D35TJ6RrgMTJBkbm1KRgJD1AC5anRiHzAzmLNAFkQ4prEEY1",
  "key40": "2uEvFiZvSusaUtkmvgbnUbSSZ3LqyJAnGG2GepmjDneD2jnQVJyFQ5Cg6H1pXVJUZDWquuU4XmdL1jcamXjpZctc",
  "key41": "2wwp679Ry3PQ1x667BxXnPY4n9sQ8R9Xa3YeQd4M56BaZDyEXPvezEMVkzz1tthqDqBcq5ZQLnbhm7Pnrd9HgXjZ"
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
