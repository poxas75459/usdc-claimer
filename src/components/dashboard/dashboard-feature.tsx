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
    "5tCQpgUNJgcj328oxd9yxybkRGERaBJNHGeCxHaX91y9zXAnEQ7vJZUkG5k7MRDP3wn4WpV5iGP28sYU3RCb2s6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63C2wQvdFf12Jpih4S2SE6byfETxEyUbYdfoqGZawrULLzgsesorKZE2k37vH3neprJbCi1kHDYZYhRu3ZyTU9h9",
  "key1": "dD6C4zdEqQ6mwefGRfWk5aJJjbqAXKRw7kMcN2VAERNMRbTz4ZjWXF9NEU1Hdgi1PbBRS8FV4b5vBRv4LULvLGP",
  "key2": "hpmJwL5pBz2HvpZYxE6nzehfZywA6p4GgX86pRnqBiNX9jUYJ3wYVETg2bx91AqspwuGGe3ZBqzsXfWHjCYiY6U",
  "key3": "4heMMyXDB8JNEXzju345bce3MFusURvLdhhdTavAXsvG4u4Bb2EBJjzzYauvtxJav7HCH8c6hrHKCYPtY4YYSH1Z",
  "key4": "5Ux7qgw1gX49tBZit49qFrzi36Zzw8cc7gWBVRwaDuvixX5CCCA5GZtXdHXkds9d63MisLJjcRFSbEEQEqxbrALW",
  "key5": "5RVNKRhmV1zXpqGzzoyuS4mRy4KGtRYzuxTmjAYz8XLEpxgRB9BaHdU4Bg9FCqovsJbPZS8qPWEDyhbG3Adm3DxC",
  "key6": "51k56nCaakj4qyG1WG9pjYvyY2gDsQu6Zbw934yc3EEFyVYzKSGomFBDKMn4oa3sazfgvvJx842Ufw5uF6qHGAG",
  "key7": "2dMET133Ca4HW2MALiCqTYvntJptnU9jhqCuNF7tjPLi9C83ygDvCAExJ1a9WdubunuCEAE2dfyZmdAoxcorKezC",
  "key8": "2jb66X8xNpSyUgDivUtNqAsaYHQYu61VrdNaScdqYMi23WJvh1twBac4XQk3gfwcELSjY4da5WVw4HV8FFBBbytW",
  "key9": "1YbVY9j9Nd7RBQ2WqZNfEMH8aoEmJo5Kia8edWXTRwqT1HNxd79mBn3WVxs2Zn6VBcSxxUevrtG229URLACYiz4",
  "key10": "5gVQzvwVpbss2hjH8q9y58u2yGUiDncugNDU4Knwx5MkYQ8z28F9DLY1NVGAFtc3GfTfVPb1zJV3bQqxUXYSYgiu",
  "key11": "3j7xpg7en4mEJ7ZcA8NjSMFivDvrdnTUuzaS6bb1riMxbG4JweXQc2venxBnKUPEQFRjJq16C5AGWx3GCTCeWbfD",
  "key12": "5HSDEv1R29fCPBS7Y6UG1Z8BhX3yjX23PqP3EMxDt4wCunctGX6UHVqkv9YGUk758kUAJ5taPh3zv3TNCYRorZGY",
  "key13": "5myr3LCXKRjfwBYx3HNrDKheRjnMPGG3Gj8zL5VYcus6ZG9JZmYrf88t5edQZcf1PU8K1bTWL8HKaJrzCnwtVd3q",
  "key14": "534FxLb8NKSn455bFpXv7ZobSBEu5XY8wRc5THr6B3MnhfjRpwNrAjox6dnFHrH2tN1rHn6GMpzpcSmjEmwR7ZET",
  "key15": "5uUPbZStZ317A7piDXMWPjjqHc7rLMW6sDYFn6VDGJBqmZCgeCtMXhRDo6z3UG8r6HCgQt4oLCE9GeDYME3dRevS",
  "key16": "3PWfuev2XMZxek9i8e41dfGygLdCmjJYpCefpP2gmZf5fpnu1yKgMvKtocCjwFgNsV5LBTrsNLq6xEfTELcjoTFY",
  "key17": "2ndHkRMFJxxSi6ZFThETZoQCnQoMQYNuKapkGBYfeQKCZvfgB6EYFhToQvohUJxEbPakS1kKgN3wPEh1t9HKK2CP",
  "key18": "2iZgJEyahWVEmm5ivEMo5JSNGUP9EwqM4AerRaNzvVqDK7AyCf4P1WYVyB3cRYnggpDjcGQ1t3xjbhvFzmwiQdLQ",
  "key19": "2cghrVtWAhfYHMuYH6rmCgSssLfQZphj2PWQobn6wxhUHUuRa4gq7MTbMP6d6qhShuVSjzCbuNyh1bPJouQSuvuH",
  "key20": "EgYfAqzFCVjCpjWNGJytNZcTuPtr79Ak4AYHwBSfypvDHp56JBxtvri5xxf9jareai9kbLi3tdufXBugipjE6qW",
  "key21": "ucKEtUeJ1TZhfeGBhs39eDoL5oSwJnJ1L7wUNAogACGjpvgeW6w1KtRhGiMUxZPe8VkG3Wetyi9FPcu1L29ADyT",
  "key22": "3HjA6XDtWDrd3jRFoExbpm2XXCScD6Vvuvk1GnU6V1imFqYVntuWYJFW2fzKMESAPKtxZoVD1hDu41mGZ2oDh9JF",
  "key23": "4yBNgrrSBDnZazk2LGg14tcFx4q9zGQTiHCyyq83g3xqV6BEApfRkiBukHVkEmSr2uAMhiw5LYtZV5KK125qS13X",
  "key24": "48bSw8iuVVBa3PUx9Gv23qWSp6oG9cHnw8j4ukcuWfZESs9FdyfSWudqYAHQKjLJWqzBxVKVzEFd83zUMNz9pe33",
  "key25": "78K6mmQGYQtCLUNTEQAHNBH5jYYHdECwcowzevyS57rR8jQuGcFgX22gHqpwCk2kYCS2WTdMthanc5H8UKnJgqu",
  "key26": "28brxQJU9kh5mnLMxd1gTFCx4HHZd5ZXHWrjVa2PYtKhZY9EGurWjV5VhbreF5b1XtbH6AWeY5gQGH2TJxyQ46ao",
  "key27": "4wXMPxuSN5CyQSHbK5RQfiCmt1YfjFYTE3SrkqKFrQFpMScJGY2vkHegSMHkzzhYjLHvzSDF9ebNNGjTDi11m8WG",
  "key28": "3BoPMFjFgvbmEgX2sEQwPQzpx4fPFPj7rnVzsViFX5AbcZc1b1vJ748hs77h869E4KAeW3fHVeZzoRY2B2wJd7FW",
  "key29": "2rAvbtN1fk3NEGTNsEubH48v8gCsMWpbFhGqRvtfTErpjEoFxXU2R9nmbyhAYy2hk4WTWSv8vNuRpRNt1qGHNV93",
  "key30": "2inFMKhpQ2dnCJMKNtT1wsv11AuwJPwrmVV8SXPSCK4qu21Ur47E6apBRAMzQceX5kpDohr2Kxz2a1DLkJyNFqGW",
  "key31": "3VMFeQut1HYeZbzvC6FbFZJPcXWUKeXMAeRVJZvkcKHMDZSAHbMJ98uX3BbDTcSpZQerWssQfKmfsx1qjNDfggqX",
  "key32": "5hPHbzJfB2sNAMZBJmP4o4jWMW9Gr3my3Sccsnd5NCGDDA57LVyj6ogNKWYQgYaSF6avonpv8QVaCQMVMTtv9HEh",
  "key33": "4ycivVwH6v2CGfiD7LYAyGanJgdKS3dHAW2mRFHAUqmVqepC6uNis6Da5mGUVeFAwMEahpedZLXUitS6nHw8PznY",
  "key34": "5ggc25bGGBTMUTJ2dC6LWwpXdJvjs1Q396or1qsoK2PufDsDXjAgPWEPCA9JuihqH7cG6HicA6erut5C9FLy8ezr",
  "key35": "N1S55kq1X6APNiQyN25Uqg2imkxkqFjPRcZt4vEdZBMS1AVy4LFfN8uhANLi9PAacFxxm316ipCtDmTeDeW6j2b",
  "key36": "2PucLet4hAfaMxyZJZwrW7J7RxrkhdjBmKR6js6SJH523EWqsVWDxKTtiSq4TwTNYnff4FAM1fcCbCDoR4P7ZBYm",
  "key37": "4b5mYp3txarKVWbEQCc93ZjxazwjcjLzwmzSreCp79eMsB3fUj5L7gNrZMY93PKG9nRDF4M8GrNpnNRcGRq1eRTj",
  "key38": "3oXrxzQye32fTdsGGVU6sR6YQDuCuXjUHU5qHW8SMM7imCgyeAG53fLEjnUhBixxgm8XQVeKnY2ac6a5kBRqHjfB",
  "key39": "4ZUzZ96W24afpwiugzqaFGbDDuSxL7xnuLMNL4F4s1T3vVdpG6BgQF3phXDUvjpxGWjHBHf3BKj4wn5nYy3n5v7G",
  "key40": "4RS6WmVo5y9XoDW2EqLuJQQQZCjh2UaoidMmreTmdWibivb5xmS7oacu1T7G94w9iLLfYxV1jFJVgCeSdzF2VG5z",
  "key41": "5SMeMYtMgxqDT3MQCbzhNbVJaNF3vH4ZFpNqC4GbDzfmUwFvLakEYrj8FjNjwU6wPVsvSR6sw1nZPkJtoZ7YJK3j",
  "key42": "3Wnjhqqt44H4LTJMcbG6mgE4oS4LtBQyCPowjDT64FVfsZn61HKFd9hghTywNdGtwSk93AKLYJDMfg8hHLJ1qXJJ",
  "key43": "37RKuimr6qk5GAViwErLmbpmg77rpxYTjTevJHqsaDH8o7dvNG3NcgqXYZhzgnbUyLMfT9oVpXBm9eWfbj1minVf",
  "key44": "5Mnm91utCw8d4HuTCPA8Zvmg8edafSvtwan9woGwJxX3eNLwuCaSfygQbZJNmrgGrCPfhB6tqF7KfpV4fC5z3UcU",
  "key45": "29vx7KNrg4eFBFL4uKAzGJiQhqyFNxW7gdrXNTRqhFkwqj8mHY1WSG5CEDNjVgL1hf1zFA5CjsirdqYTsJdTMsmo",
  "key46": "tcxfBvJTEX4wGigAwKhQL8C7YuksCWcKTaBGLz4iFz2PR6UWLsjfoqSfZBcnZsUEhYb5wXv65gsAp3DaYxbu7Th",
  "key47": "31MuynuMwtXzC9WSnUYgusjBzEpqoLLc19qZx91cz8WAEUeCkwhr4nrRXwrfthhw347gsgk5ttR9rTWXkDHenJpE",
  "key48": "3ence4D292YuUebB6EP6XfzXnq2D1LJZ9b2msikWKjf8n4MFPxNrmQB5GPD6WmfkdJmTeXYByRJJ8sd9PU6sUuzL"
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
