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
    "4Wm62TTTzRAurqeiN4o4gPkz3w9vcmxcND48FuZRcwHf41rK9ae2N8P9aGTo9CJL7mESVbUrt1Mbvh6FQdudzv4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QS6Eq4BYvWmuZoqSbS89Xs4vH4uC3VB4pSTiq4P5r6AmmC8e64FpUagnYxUCsZWSkuhCzZurvnbr7Xv468sWFSQ",
  "key1": "3ifAsxWW81CxcYNt69D8ER1X28QNSDQ1Az14NVuTdxMnqpLHudwZ9zpy3g9XAvnayNTw693erxhQEUWBcWn5cJzx",
  "key2": "5f6UAVPqTGAjKHLwPGYefnRbjCqhZR4e7L1Honx67DCavZd7MK9R8DaBCXtKzCBTsm2ER6gmHJSCGnLZj9zadwX3",
  "key3": "3SGhw7wLMr7Lz9XXYRszn5xFS67zes2A22qBUXhxiu1LWKcntQWmNJTtPXBt4wnKp3Faha5YuWJgmRbioBGn4w6n",
  "key4": "5EWiLKQPbNj4zhn2FCxwYfoWBTa5ssK3BzFf9Vzj14vH6Vr2tJ1EAt3tyoh7pLinXViTVxoi14ALb1p2pgrsNJrC",
  "key5": "gWnDhizR4TzyBnx1m1Ns2CqWNKXK9P2ZHkwEJuLgqGUUJCRf3ekKm4iJ5PwK51yMcMCZE2JBdr6TBGZNdjfuXGG",
  "key6": "4bt1KY9mWpgBoKzYPTq5EBzGTqBHiagHRnzVqTkECGDj2M4LQpXjm1qRwY3XnkXvYXB5ks1NTzLQYLWXKG1ZG5BW",
  "key7": "5xQQJ8nF2yoxShmfFt9sWTUdA3rVCNi8x6hGsMQKxFk2fY1V7rNZdDfQw4Yod5ZQQgG4vUbEqCak3b9gNWVVp8du",
  "key8": "3fYr2yZ3kFfUpo3Vk79b9z84mYp52kyh3yigHudq3py7wmJXvmv2nugQTgCrbq7VGBpe2fnCenrP3VTQV112SBeY",
  "key9": "3WZLCXPRUFRTorpHLVC6A8EzWi4kKpwLAy11iS7PmUABjd5yg8VVgUjDd6dkFUMYjYoHG7TrDYNjyXz4EKQBUWnf",
  "key10": "599oVT3aVeB9U4xwRxqoeyn4YrkQfrY4pJcrCsAv3nPNyvsDDCBAKVZTdANo1pp5jawUHg5bjgttbu7WVpCmHAHt",
  "key11": "3CDwvYyTiWGcoqFmf8YJBZY2g1pJQoPjoPnxmafwTDe1bbFoegmTLe2DwisFPjWfsLoUnBWUU2JBDW8Yj76m4Y7y",
  "key12": "xQKeyZk5zfd5iuSbxBbsy91ur1aXwmnc74s9abXi46RCuswf67jZzqo2au4KWjqFZGvxriUmpC7Qq7W4R5AWLvh",
  "key13": "27rH9Kuf4GzyFeKs2BG1WWxepKEr5TMEeidKPpTBu63sphDRfvvYVCcxmpjXwUXW1MmS8TEMmExYfrS3xE7ssSoy",
  "key14": "nFAV27V3iDynYsBENopz76JgpUbZ9bsLNnun2JEJNJkZorbAQrh3y18n2QouopwvbxDKsfb1MC4Ua6GqXGG862S",
  "key15": "3VkUrxJMNKcS8wLRdeJM3gLjYw6k3dCFG97zTwQxhX1WVX8xJVX8w8JwEQ76YQsYtYKFnyAmFeNGMNsNzcVPn93v",
  "key16": "43YcM4xf6zEa2cuYsoE2fTCHRHYTH5e2nxPhYzG2bh1TnY6HoVSHFjJvAZwptLQdtP4NWgVgoQmPrp1AyN2uQLvx",
  "key17": "3ecCynm3wyerkDoZJ2uZCs29hk1ihHLmVHYyMtfKGRVQ1MzXyGKeZNzwZ5kpUFyMoYJFo83HjroWZXqh9CamatcB",
  "key18": "j5CafL81H31P6BZDBHxwGu5ktG8RLVFEf5NnCHibCv3z5kAma4qduAAZkT4MzhY8W7VYJoELQYwLfSos2RvnqvD",
  "key19": "4tXLKzHzHmeAEYuBMtCSKx5gqtG7FzQ6xAGxCZg7dGqH7Jq9AdodHrqHBUE1QexETNsAwX4xXmADU4yboVbm2Y42",
  "key20": "27sBZiNwc6A6cCKBDWJD4xGuz2zSg41cFuP5q7mzZKoEYfUxGL6F2mUueBt4AnmssAZZfa59uYCUFKvprXFe9nip",
  "key21": "4sUyDjGc2PMaVCyppG3uSnDKWnDMzmagqdtD3PYCaEBzKbcNSz7Ecv6TkDdD6ehgGFbHx4hCSb6ikzeEYaMfVaTs",
  "key22": "2otM9dkgP2b6RMbA7UnfijdGz8LuWoNCRLLDgoJTSVYQLmPPozTQb7QCPMzZc8ecWVG3EVT7PtcQPEAcKSKqdK2n",
  "key23": "3MJ21NrYkqU9tZGixoHPehKZ9n42ijqfqHAHGYAdQ2DuvjmSYsGPYycfodjKK6b2hrhyaB32rCTJ7QEVkYcwfyzz",
  "key24": "37WjFZ7vL1DFSQBsPBQ3DC1oFcDTTKYR8Bzyz2Z8JQLsxnHBC39eDfhis6sKvcp7ZYHVyyYRLhDRBBGzFG2qPYSB",
  "key25": "5omN1YAJ8nnc8fq7QWfvtYMhAHdnNV6TrMKi7zjGs6h8pPrsCJfoHAXvX7XY7QzaKsNeifer9xqQkN1d7742wSyM",
  "key26": "2wurQmpD3QQCbEgkA6p8doFTNZWiKirTV5NfvEZzEDdNwdgYhaFMMsQiSnsAU1SgDCcKzXcHVFXBExyt432yP37L",
  "key27": "36wR3oaccVXamQZc3DrsPYcd3vN1PfG7JezRzLbRShTo3UekPDN6DMJk5ASSVvZncK58nPmaJSPs3eBZFrXedHUA",
  "key28": "Y2bpBx7qJapF6j8s5RZNgSYgcYLdHmrvMUEfQAEqgzMJVQ8VM62wthKrCnCbdxkQTFMyuXUQargNF7NMyvfi8jC",
  "key29": "5THFFFHpTMhfMDDDqjW2h9RuvnZEKokzx6ugDKpD95Ftm8KcMNiH2ZMhfipW3c4VwXzxroS6grez1zWJtBdJaTFq",
  "key30": "aA8KxKSQeaqfttAi4EeenJZ8NX4eEpSd5ndK6VhoUYhbWnqAiKaPFrVw97gn2qfvkzCebkNq7arqB3XhJR5qvHX",
  "key31": "4rHxcgjmAbco8fF726P8mD4NoK4zmN8VG4fzgaoScWEH8NQbaC5cdkMRv9N55pqTzB5nLPpQfmicn2dSjqcMMvPq",
  "key32": "3VmtGaEnXuYSmLmtarugHnLkgyQsQso1iHzK3ryUbsk4FgY1jaP4g6x3hBpoHbdB6EJy99cgo3DqsWYWPjChKmYS",
  "key33": "4mRYwYNb2Vi92jdgWN4hXckfYuKY2R8wfxRUczajmquTeW4vmdLrS5QWmpUS2SsRrtfuPRmhEp6yACPhB4Jhga14",
  "key34": "47wEaHznnHvaS6cbBH2f6vhYwtGE5dbS7s4nYFqAQPCSr1vpg2ceq1MiE2JFFDLjSBB4wZY1fdUq5kb5S8XWdHb7",
  "key35": "vtZuPSvUnQxT1QTuNAePsEREAAjekY1iDF5tnD2syjwtFnE3o99fKUi9PmFDEzWAbSPMNeFoLBpF13Xi4mtAJGJ",
  "key36": "kcjejcTzt9jM7RFk6BWmXC688bNE2RLDDLesbVgWJRy9bPDD9BzjcaNpR2zyaY4MCATgi217Q9mCsCTEWPL2GYm",
  "key37": "3Jqv3QAXFEJSx8YxE5wRN7YLDSZmfq12NWNyrF7ZhfwNQ7rj7BJmYCVnBaZicKTuaia19G8dp579fyQ9v3rkVvEW",
  "key38": "2sbDec58nXZyH6vyDasaUueXX6Do66Ry4Qgc2DUgiPTLEhnbBrUQDMuLf52fb33b4WYy81xbvbGNyxUdkBQDJN3y",
  "key39": "41fj3JbhAusaT3fMwRsnFpqccUDJgKDqynuu8pwCNp2fR8gLGxeYoT9H8LEYqdR8YnbfydnbPRgBqWZvRLjXDyyn",
  "key40": "2vTrcUaAjALKg92SkXLC4GcFzgM4NbxoAUFm4vkvYmQiRpY2h7T5JQTzUVx7kvw8ipHoLEdFHEHRRnDdzgfGTH1S",
  "key41": "As6WtDJayd4pBdG5fG8i9LCPjiNtpqYBxTiwX743SSmfgQmz6JhRAKrdVGZvb3paLoyh7bPt4smJxtUdAMzWZZ4",
  "key42": "2ASPd81UZVVj3eoxPgPncuVSyDTKn4SGugyWKHh9HVRN7HfDjTQCkUZb82wffdKk5m9xbugKhchPvnZSrXWmxig2"
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
