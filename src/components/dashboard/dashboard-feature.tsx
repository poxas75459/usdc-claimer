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
    "5NJc8VZv2pWMmvLCnmGFdBHbemDGELg2zgu3H2wN1oAwp5EP6m5TCGvjoqVrvPnZZq6iwgT1gRHSBnzmpS8UiKp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrQ6JVNgg5LWChQ8KV2LQ5mAoSW1brCSRkEMuGnSNWbDPdhxwaPdFuDgsBwwcxQaeQTWfqiGGvvBSxouZwF36nz",
  "key1": "ear5pmMv98MaFdhK3VZ27fjbgUgVWUvunuh4VP8VXYf96ojKV14Sd1gFxZiZbAiDHVhbDyVT8SEC2gpR5M3Dncw",
  "key2": "hfwXvFgKPy3AKJXL8aHnmsQHDYXa4SkZFQYmuEG9dv764JGNTzHocvahcQbmy8pmHrELmNFGYp9CQBiV26mhqRk",
  "key3": "5Z5zpiHKVMwWErqexV34RvJci4a6k3Ldrp7H6SgcG6eGdiWnePehkuPdeseHS57CDZ66v9i8mYTtP49uKYvYUAZR",
  "key4": "NyJK4D4WaXYwvnErU9zrB4gVfZGk2HeHKMpXqf8HbWnkes8H1g1RoVfHpjkrEnqbfC68fGEdsnKcFuPJxoNKMVM",
  "key5": "3wnA8jkxUD875CVAiVoj7JcV1xWgpUK8AfZCgB2GDc1n75hkVbaVe7f6MYv5GRbRiyL7JAWeSinMJfHm1C1Xp9Jk",
  "key6": "3VHiMXx7q8QrxFPb6EW5ZTs2wEmpKh2YyWKJrRRxq5BwV6ZS8bKsdmFiK3L3Y7tE7jSDY1fk15ksNVmkj7tQFxoD",
  "key7": "5zjpXyChjLnN9eThCLGs4tzrxa3P365qyUgk8FNv2jeMp8bupzp5rJmNR6kUsnXJFhs1F5fYZzhVERvnGy16aoBx",
  "key8": "3R9rMHvB6913da78VJuXpYSc7ojbmvNkdoF4NFkHeVqpeDQjBuanQq76Ko2iAct546ABT2o7YgeXMWYnjxQiRfdW",
  "key9": "z4QA2caUEtECSx5N9veGwsVo7Kp8uYZHqQPfBZH4xn4xz7emg615yDu9M65Q9AvVGou46z3UfGswwcEGZY8vBoJ",
  "key10": "3swP54h9tcxSFzgSLKiPwtZdrBsFuHcxUiy7JSWuLZHt9ufP73vKSMx22hYZjT1rKRGjpY5DFAxWhAm2bHMxDYYj",
  "key11": "mYLyVxpbfukGKG597DuELC9DrSLCWiMwNK92sa9Ghw1688G68mxNZMz4HYZnehxdqY9XyYeDzfJN9F718seBmhC",
  "key12": "2uigyDtBfFfTKuF27XXZxdxLVno7enih9PnoK7XtaArUD7ihR5DyKW1hbHzuaCGfADA6fvhpHmy9GJzCrPB3az5X",
  "key13": "3F7o2QNXjJ4rAXn85S87PnPjqBRn8UFL1d8KCNE4AoBEKANjyFKKJnX4rHNfQLPWMBFqZ9JVVY9dkf6vVKs5JWHX",
  "key14": "5FB4ZLYHiWERNaZPiL7DdTLeE6qinfWW5d3VQcrVNtjixoguAkCguH2wdbi1DhTgVYHGrGQKM4XR5wVwm1ezoFNN",
  "key15": "soq6JZbfgQaACvDUmygN4zMFJMdtkSyefrmKdLuAJpLaQRRUG74ZAPgQ9RnywyDvR1XjTHUMd6R13GKv3oK2rSf",
  "key16": "4uczCKpkf7qN5TSB5Kxpcd1oDm95XQjrbQvn4jAVg89A4hnjvT6oidB8cnS6GgAPDDcpkVEqkqQHEzLuPg7KztLE",
  "key17": "5WP8vKG5bJXBEFtvVosxtNpZCBXV3dcZgVjJB9RRBQv1baPw6G3EyVmwnvdYn9gGskLvB6Z1CiwTWhptiyWhfstf",
  "key18": "5YWmZFg1enm8NwLNcM9rmp671RDZgmBJrUpxZccrCk17PJwBKFuoPnReSz5PjhRVKRLjb5m1JMo3RzrJSzhnrFKn",
  "key19": "2cKFzpHtiuY8w8umtH9pvgw3tSFX9UtbQJ86mRksLL6QWJdWCyibRCqLGaXKTuQPCqqBLCAXsm2zUNCL93htjzc4",
  "key20": "4q9kMLqLGJLgxa8kUaBiLAWsTBv4zcQaQkdfJrB3jNVXz4YqmZdRpP4uWnK8ozKJKvAbs6P6gwyC98NZ2byk8KDC",
  "key21": "3oDYBKXkDCNiGyXSfYgZXP2VeVv3YEXAHattYagLBA72RacXLAEmZWteba116HW4dPGQMxynUVRfCvg4EEfWqV3n",
  "key22": "4SihrYnJgXckGdq4M693CWhQ7RpFk6SSzGXRKzrKuWqTU1qDopX9LFDCRXx4d47Kved2xMQVt22DLJ8SaBStEoC2",
  "key23": "4u4WntZKdNJXceeKbMQYotnszMjHZNToU8vuKynUBove9c111aBRBphh1gFzyvjNzaiJXAHu5RdkvdeuZPJatjHh",
  "key24": "uZaA9CbhNWLGuCLPMzPfxtxbc8Vo3Xa3hSEcJtJQj8RgZVd5AsFuvWQKnefKMo26655Q9fk8yEY8CNZVpXxAvxu",
  "key25": "SM5Pvxp954L6PLpZdSV89Ry5QuKTjkFtjJrixd6x5KtMbZib8WJMjKZfaLWusL4yyXvuh6g6PeVaSF3NbG1ugXg",
  "key26": "38x7hMe9Ed7mWFWqsEu2vRNBBWm5fGtRsSh2ZtoQsmBZb8ffugeEcz6pcqUTrjmoVxskouP4j46UZ4GS7cqded8e",
  "key27": "hDZZbEzcoKLRV9qZnR4agtuQoJGqPvBVntrBkoohyJftGssuU6YgJ97DuM7RGQ5NPKij8sqB6XdzrF3s9ZDZQQt",
  "key28": "46PKbgRpVMYp9ywyV1yxciZAXbjkfVmFV9twAEs4P1Z3tyPuLnqYwGRMybnUHPYcAgkTDC6JisEj6V2n944iban2",
  "key29": "3Z7tpt2Ui14YiMwwWCbCRBgH8pT7cBgvXi2vZ4PUUa1Zb59HxRmppDRuQCF8b49rVS84ArTv6AXrg9ShgwPodJJp",
  "key30": "Hz3z5mxpbbSCbSdVzZb6mMCKgGDqZRz4r7EUi77xsXEXeFZD59MdSmg1GqnnCxjfS1G6kyct645MJNkB6YgKYBQ",
  "key31": "2DqbEH9i2qazduwcquDTwAnzmfDd4GtyHZdfNkHHX4cUATazv8LBDuu4VVYNZRhfvju1AhJtZtY6LjAGkMcskehB",
  "key32": "39eKMsupYDB93j98yeNMoZB5Hw79trGZ3UwUngFAyA8ecV2z6URfgJLguNChRuxvDoLXcLx9ote41hY1eSp59WGQ",
  "key33": "4CsgZ6QmaLzrgk9sxtuH7zEQDwK67EDievha3WedkQNUYNeoL5Co5DcB9ziKgB5AKhSER1ERtbaYh9w2xU5daLZ8",
  "key34": "2Ro9GQdFEhtfNFGZUvGaqBVggCJhT6S52y3DmNgbApomokAihFiVitSG6rYyvXvHxDfptYtUJEZXWGmfZ7nU87BF",
  "key35": "2bXGxZfRYkgeMR3RDDGQcpCpw46CPjGDEP9sREeoyzmNa1NB8j8Hp1W27ix5trnr3VqxkMGi3UPzWBQjH298hQSH",
  "key36": "2NufG3vDEo5zAF1JSXe9gpDaNDhF49JpnqPCngRzG8HBuaVLFtQWq4cbskaV3KjoDY9JYP6vfyXFHK87iRcxZEMG",
  "key37": "2Fk9RgWpzN6rCzyHBHScrTBjsy6esqwPYEBqWcv4j9FdjJow2YZ1d7x1iR5sBke8iwLH36xppQv919UwWHx9MZFP",
  "key38": "2uiqUvBm5edjxJ5cx5KSyEGDiHLCjCbT7YmGUaFtWHDVzTrTzRkRjQHVywShvouJ6iuJ97hEMxM2xvNGUv2WkHS",
  "key39": "TXCVPhZcjqs6eMcGNLFbDvxZcqAKrwB5mJK8ZsQbVazaQgMsPDimNmdvS5FtDaWTrQXAbT4oLJU8jo3JMyspjvh",
  "key40": "3jouNbQCeT1mCBQLAKpr8cpcqQqKoZYvzSjm4bptMXauGCLjLWrHgFysuchPAGjXDuzLVdM9TtrqHPe3UeRSLdCS",
  "key41": "qkBUEGQ6p81ERJ7AHk48L7fn6VBtQVpVXVtwhAQsi2uevcXkJmXk4Ktr3o8U5Zm1GBnqwKrNBBnppxNfRw6b6m4",
  "key42": "4RXwt3rEqWZLAEoZ5uyacRdHF5TPf4ryoJ7xZhAX4zVCfSfEK29XNq1YHmkLVwgU83sEQ1vdsCZVU4UyaQTssbxn",
  "key43": "57BjAabAe6cJGBKdGMS1fDDWqdpxcB5tg9i1VZPZyiTckWcsFLUaEfimEvNp6U8M4eS4uHKZRNkAvfHuJcy2HqtC",
  "key44": "4hPMEB3ndgzxqFD2JGxzRpZodAsFAmpjDGkgj5E7s91PJaEgSTP9VYhgQPdHBGuZDCN9mip4wgatJwN3o481tmdU",
  "key45": "24P5HXJh2LVezZq8QRW9sF7s84x9DtTry8uqQBEjFsZgbrw6dMQ5MEy7wcfoYyWGMPLgHXig3Py4ZZan92ZybpzZ",
  "key46": "5RBX5K8TxSH5rzbqqttVdQH5jaYofcgEBDsmjUPzQ99tYTWFeJ6kLb7rz79ZZu23w2txYYbZnwBKmpi6y4pExvAu"
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
