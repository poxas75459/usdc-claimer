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
    "3oh1tCDeoVivLMZVqqASW6AmMtpfjfnwUx4c6KTmtavFShCkssziWHJVysx4SodxEfMeX8zvUpAwCS3jw5nJ9Rsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugcJFDviYX62BaKAaCCXy717Eifh4KYTZ8YSp4x7mRBN2FF9CuBosdq7cepiKB87fhojgCBa2SFK53Se6iYTmVB",
  "key1": "Z4LGofBB85L6uL5yJutGdYt29iB4e4TQhKT9TCabk8KvoVx7o8kGe3iRxyobzNFobUN2KjRqyoExch2rZ4Pb8gX",
  "key2": "3n4wWYtpcTctx728JdDaU3HH178mioSPKfLemau6KqLFwodwid7dAbeVXV4ovnf7PENtq3SasBSSAd4vgcTFJnAc",
  "key3": "3BdGUh1H9SpnrWVPwD4X9GgGbUzy64jZ5E9VrgEgtNVYH1aWg777nRzLwWJ914mQfbxacJ2y9aQihcWowbBWpJ5z",
  "key4": "2xLeTvXzfyUtKmcSgd2b8gNrUJT9EBHffzLHHCzF6KqJKrv3aW9Mab9FEuQrWPPJLbBrnCQz8Acnc38HG142RMHY",
  "key5": "ssqkNUBzHT2RoWQ7bBVhxZgiR8CrV4CzpkR786oLq1avTzAeC767AVbsLjLuoSA75sZcc5bcph3HdcuM8sYsGjS",
  "key6": "5uqHibeUASE3oPEURWz35n1FNXxbGas4rLaw6P2Po252WfjibxSsfudRq96jWFnHBFh8iyrX9TrAXUZKFzMuD7G5",
  "key7": "3L8y1CCzrMJGJ4kNnS79s8iFwsTka6o15r2qUW9s32mrVbW3qUk1tVS8zjfKU87EYHt7yKg4sZCz57mJV9KhPrym",
  "key8": "21sjbZK2p2DSREzkkCDEvq55GovpCxicMCB9m66MBLdufHFCkQYanJ1vNAqwfNPc6MTofDCCdqJqf7LhjV2Fm8w5",
  "key9": "4CB5Nmd67BZfPc5MzdNQj2VuqzJ48mCB6AvxxTvBiHeLkUpCsaXrvBiWf4nKVehitXFMCBTxARLwa75w7o9TT8mq",
  "key10": "2B58kWXk9e1xiP6BuNLXAJyiRRfd57cEdz7FuFpxhqo38Zt1DmFuFZEeyeQCzxqHEJDE4cJgsZxPfaPx7bxvpFT8",
  "key11": "4dufHLy8ueZmM8ZehaGrpuBp7h8U5G6kds6VBHUTKGcT6V3Tk9KsB5g95ddWm5JPR7RQ6U99FAqjhXhzehCkEjpN",
  "key12": "4YM1bRS9RHzqZo41fhdPyNfFB9ZMZRikcjXNwztj63QncTV3q6nD13vMSTkkK5xWRyAUuXi7HhC6d6XYRxGFY6H9",
  "key13": "5Tvo4ezD63Ko6u6Whui69TLUvpKTV6uwrkMsAfzEA9XZvPEtDQcxH9P54jtJCB3JRuyo72RBh4ktbYbXxrSdg6gr",
  "key14": "5msBjxSf52crb1oMfsC2QqEAwK5EEE1AqPYYtjFuYFpvjtuVSJUPoLCJUkj7g9sozyhnHoRdQorv55rB2ocV4H4f",
  "key15": "5X47r574iLCKrNmq5LLFCxCE4crFYmfyHQS1AANSfZ2nEg7xgtXGZqh1hUVgyk2atoXDG7rSUaUDtbAcDEDRmZqB",
  "key16": "4E44DLfwk6srMiwBfATGd3tjvhU383DHvqQtEAQvmf4193YRQhbz7YjXoTfhE3Rf2mUqQBhpE524sfFbwLE9R2Np",
  "key17": "5wSt7REc7QyyF6uRy6iYY2Y8fdJ9fSEAZeGZu8KrL5uqNNfQPQ2SH9AHidLjdLYGd58TMT91wtYKL9PZMYicNgA8",
  "key18": "2C63WHwwKX9oy4TweS3Bst2JnRe6urZ1tHRKWk6Wux1W7zfMPSzT645NPqB86VuGRxLQwqWQu75utQdGhHibUKis",
  "key19": "5LPYomhCMuE5xQckJKa1RNksUEexGwYuj6iDdvEB4o8Eq2ryKQXowM8jYEnG327vqtmCs1AkY4E7X5BRHUWvrXyE",
  "key20": "63LGZJ3TCATmx1dQvRnUgwKhKr8uU4VFHktatPhNSgWAPGxqeurkbh2yBnd5sp8MpQjgyhwwqqN6mwHEyHv45eni",
  "key21": "3FDR4GUW8p38JaDcu9QiRwCgn7P9eM7QNHWZTzKT8AGZwHzSd1Ty8tEBo67n3TYWgkvx2vH9FDscZr2RVx7ewxNi",
  "key22": "4XWhwt9G9cSLssCQYFWPnEyuMtZzULcYaQP3eRKKSoUKFR2GDBBQzgh9DTaxy9bEdP9CDrm71d2Gf7CPLNdaLSks",
  "key23": "57zi42GrU88K6BuMFuujob95yRUDXxyXMuiAX4poeU1bqZeEZxwBUhcCL8N14QBB4FaCv6xV5wyh6bEHYZoNjDe8",
  "key24": "Anqo2nCdtjTUsswZt6VK9dqTUcoPwgZ2zFbHiAovmgTcBGAeAhWy9v9p6zQrhKw3AM3gXDpQs2yo1apyHjo6Tuy",
  "key25": "4qbj1bC5Dofj7un2YxpMPbQ9UMpCxYc89bmsMjEmPahZopVXNcsK441WvnFKPLTkHZ5rbfgJHp6r92twZ6bnXf8u",
  "key26": "3RNvZWNWSg6AemAxMLi8q5BrAWuvNsYHXpUqFtftkCPHbCKg4fsrXg8vfzrNypJ73zG8Nux5XaLm2XmAAiHgimm1",
  "key27": "2rLkRJSK5w9CNCXq5kUidwDZUwPfVSji1DAVFbTQAd6mnMZgQ8FxNLnKMnRMfM31vAnjh85hPJQQummCyags5MwC",
  "key28": "7KrG1v3b4jiQ8gj6pSnVtEfu6Ufc2GqPfH1AaxmYg8hD5qq1YTw77zkDmDuyqPk7Y8mqv7s4X4CEPoVy8Xt57cg",
  "key29": "5AkWD77ojL8JKNfRUB6qjvb3cJefbbfV1kqc7Q3ktTuaHwrafSQAB9B8pM2rMutEvDpzae2zaoKKtaPG7RYSRwEL",
  "key30": "3et2b6wv7EGCEPQGAwJZnJQBPFZp4jGf13VAy6QKtFrMm7r3NbmnZSbByQo3N8eYjjD3BLTv74LEJiBZXah7b6E3",
  "key31": "3XAQ34cvNdwgzG6mmEGctd8SNYNwVjmaBWB4beGEhJTJgABCXgnepEP9BaS8BMPJHaF66fnCMbuEnWcZbYdR1TmW",
  "key32": "s9eqXrQWxuaXPosEcwqyqf8Ca57UreojY8Y3ou41RGdgDuqhKySaiR6ZhZgqKTag9iZkndXMwjhgGbuUdkETraZ",
  "key33": "5mABDYNVhb37JRPrfq7CiSNxnf2wBr2EBDMDCeRBe2AzuoNGmD2631V9HgKVA9qkG5JDPdcDP84cJgLmoULT9D4H",
  "key34": "3ZBuiY1GVzzAQPYhzSmdLYZgb3eAR5mLp23GbHqncmyLjHxBnki3148yEM3qQ4qzLF13V7NxHtv2rQjXDqwRH23z",
  "key35": "4JgEpJZcvMTPfSvvm1hATzQKFQNXic9w5Bo7vUKzECMJhUgsrFTxPotcjyh2E7GuoXAij6aU8TxRHKyNqxMt8Fv",
  "key36": "48MeLF7ysMus9cZz9fAHSwp8adsJNkF2UaQc6YYdQCP4LPAjQiAsWTn5HLM9r6BuAGmRZ2UJ8i46F8WTny6oYHXU",
  "key37": "36kpEUiFidsQ3t2ym5vkei3yNK1NTuY3z5P6c4LisGJTepmJxz9jVkg8ZsJUxBUmo9aKRQkmJekbR7CErx55QYwi",
  "key38": "s7i7V32LdR7yWm4xJrFj6V6wXRVHLwT57BnqVnQrJknMGWx5eHNBkqgrGeUHB6Wywyi5FkZcwiXyvVWS4w2qums",
  "key39": "5TeFRqeM1mho1CrXT9aPa4MUs5CJpsLTPdTWLtJt3iZnJeho2jjtcgMi4uny9gXA9NQb5xg8C8H5E7qkbt2dktsn",
  "key40": "5DLe2yUHBa46N9LxyoYpZaT6A4SCakxYtutwJHSbZRgXzEYiZ2UoKa7pGNoruL8Z21G5L5YzjZvo9PpV69svcRGa",
  "key41": "3eutrM8LwjJhnjgqvKV9JAgsT8h61Yvxiwz6ZXAUxmG4duwGisjymrzqjVxH5E89RPUwhgHiVGZLGVVMCJoUAkcR",
  "key42": "3ejqECMZASByw47cPfJuG17WnqcZqRv6uBg65BqeV9Pyv7gF7RtwvGMuRW3f74FUJTs5Pg6rcyGwogcEb1jTWHZS",
  "key43": "3B7H7CbAWMTMif7eF2LWmR7T18nbrn4zPazrk2hEPMS1otLqRxV1RMUvpdfwL8eYB32CNY7KVRJhKmn1pK2yLCUY",
  "key44": "4huXJ8FY6M8Bxe8TiREdH91vZkUhBGsYHfXvSAkPWF8yogVEgR4YsBEe4KQo2dsfsRE98bTrLirmNF3phX98ZF3x",
  "key45": "5aEddW5QHfhTdQFc89x8hELMn2xXi69g8LFE3LkNSzyCcHkHBM7ny6H3bgwnNRURGK4xSCmtgzaPQfMv8RLoqfW",
  "key46": "3Xb9M47o2UhASFaE4pgtbv17asM4XuYDZBdy1ixLmv83wcvg897FWWMdovPZ5nRsqaoWAseGvJxugA6zkcd1chob",
  "key47": "ynmajQ7PyrQAcdDyrzS8NDuzpvTpWq5bhF1LSEzSbHrqN1zQ2a8ovUDQqQHqbgoUhkzpKzyNibchnSLzuZ3gJFA",
  "key48": "34ChEgoAjyeFRreQz6xWYAYzVGSjNbADDezpEEh79ecfA7wNJfWDyL5u27Pg5FJqK7PLAVZFUAAvyrhHhgLFMWzS",
  "key49": "2GCHrfGpH6ZxPwtq4AQWDc4k4pkQN6ST2oRKA6MkVwNGdNo7ZPSUabLybmcnMRRv4Ef4ZjqW2AhtkJz6oBvUwkpa"
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
