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
    "5GYS6hG9WCSPuZjvrxzLQon2U9PFBnYQMMkNp1XvPWcbQqugNqS1mNBausfsqtYqkPxUBWjvmrZJAyZ8goYB9LgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8bnxzDyjGzMswFU2mdAwJNrqEPh6qVxTCqikSKFdxcLu2YdLgScADdbgPUXhUmjGL5P3bxhGi4jFEBFFBy5Vqv",
  "key1": "2awc4osL8demT6ehMeKWessDTqjDMJqkhoYqDvX5RqViB19X6LA1C22W6Dw8NdTpFq1vWDCNGbAPc2EdgKaV9bWS",
  "key2": "4d4QsZMmC9Wmq4Qo83Sx1JBdYp4mVYUyvEx6byAJ81HsbCunmQkuFjJkuSaBpRBzG2cf28eutt2oUMcjStvjZ3b8",
  "key3": "2JrnPEKZ1wZLzW54zjMmhEhgTcNJ5vQxofUoSP8fEXKHdMZKvefk2FiRsFoUMecoA4MSqQGPuHWzgyboFdCdgXRd",
  "key4": "2TTfGBQ1GJXEyc3JwMa38RNcy8GbKDusoVHxFYucu9oHKP8Wwxy44Y4XPwgnhh2LmhTZ5NJkyGgjBBDorJoGQ5Hx",
  "key5": "2R7rGcE4ziVVGyzws6PNzJC3BeJLJVNLX7h5eZGSr97xyBp3GkjWRDdX4SBYkBBmMthacs8bDkiuowhpvLYWQQ3a",
  "key6": "WerWyjpBhVo8MaJxPu2rxL3XDAF2wkeFyqVH9LLV8LPFkNCwXLrZ3LQzhMfhxCJrDQGPrrpaznGLFcemVKcYy9Z",
  "key7": "3hkoEwHnR3BhfNNNcagyFeVhoseh3Tf8CCLQ7N8KUiRYx88bX8aLCMwqRQyrHjg2LPL1Mc5FEenNAV1SUufL3G2y",
  "key8": "3Ng6QjHoKjqLnUjxKYopiFErrZcvz8CKwu71wrrsn9RTna4Gk3BYEaSeGmXSanE4ERrXc5CUyGT4mhbLVCAVkikN",
  "key9": "2hFecKJx5kRRMmponQvv7qEfxnzps9CwsLCc8JkHcLnttCgNpodnUbDnDWH97UCJjtLLJzDKEJMSnWQKwYs5Fa1j",
  "key10": "RktYmnrA8rpX2eFvavAgDEbEMKNUHTmyd35UbrYvi9fa46b3ieBE6DyBj4JqoZMmy23xLDyRbWEjyJ1R4tpRp4P",
  "key11": "5rRpjevQVbhpbTDnovBhyJXT4fGmvKkbfVtnfevnBAnFF1c34qJ8uavAkS2PzP7kEbMctGQh14EaV2zWDUg41Ukp",
  "key12": "24AZKQ9FocKibuuWEzXH1nutrV3z9omWwnnoqs8YSmTwHPrKD2nR2gQoHFEHrwnsockZR9RBGropGXWBnSaUhC7s",
  "key13": "q2rkFupxQqvKjaUz9qygKHowRswfDgaKDUKpWTqvzoMBqFtbqT739cqSERxUniMXtZGi65oevYhJSGabdDW8wwT",
  "key14": "4MgWwLZumWYN4vYixB6AkvvHhYJkiQEa4goBDrsu8vNQwui71scAUNc4ziw2nK7kcnDdGzqaJP2bPAhsfEeN1bPq",
  "key15": "3hT7S6ZsLCkhjHEFqgMUKGxtJe2MRgq3VjqUcME5jbZJahwq2wGEM7xcvatrRENCr1n3MUqiMaRENtWUdyfMYWV6",
  "key16": "NHo8sfvtSZE28CbtiueDw9ydfNdEZDQs5CcNAqdEUtBN1bFbD4P1dXtQXcg8m34znY9ES3L6vk9eyQPuWsQCdtV",
  "key17": "2rRzs6Xp1peUcbbU3pXjJdDMNwCU67xqATT332CCLo7jtCHAr58ak8kAc9B8QVmS7U8KBDDe5R5Z5UtN8mbCDNTq",
  "key18": "5QVdSHX1DLhYf6t1fXrZ4hcn2aaYe1ZQciR6b4tjkEPYpjMm4weUmHHbaM245PQCLDhbqou29NWe3K2M6wC9dn2d",
  "key19": "4Txp6EA62cVsERUDvdUB49iuTabHYVeNfMZfDXmRMwAsub8RvyhVTo5QJAR9XA9QgbaFRkfRcpbkdPwmhP5BKABe",
  "key20": "5DobE6mx9u6GdS5FMHy61emKx27LNRJaBFvxwdQ3qSWoAEsSuUjXz9BrN1t1GtJfqpjh12rXfs9cHrpgp9yLC2Bw",
  "key21": "4NiT4rww9EQqP3WjtBuWdxFAcsvqaqs4yvLrfLwtPeK9CS6VBshbEGovmYxrRkoBUjm7jnKykvtML2CMivc6jGLu",
  "key22": "5nA3KJdPNGHeHmMnHLnrGpQRqJUaALj9GuqmnCCHcxpdpzDKhzW3CNSCRAvXdfEvcrb4tmv8qnj331hbWzJ5D9jV",
  "key23": "3LnyhMWRKBWzzDt7bia328TRjNZJ6fp6zPpPxhU8njpgiJi3Ge78n54r4Qf8oKKEB98K6mRfE9tTeLRzBgCxSVfX",
  "key24": "4fMpX1ykHHx5Vgr6PJhJ5qybqM6SqUtjrVVoNqMq5um7ZL1GNpk91imabRjEmoiZRfvWQTPHDtmtPuegS9x4zDpQ",
  "key25": "3WrgUEXZ5asB5NMuN9qpyFVYgWGD16geb98XiU4U77JCMujomV8c3o2cHpvL8rhyVd82iZLXLfMHdcCZ2wUCBe2p",
  "key26": "ZsvH68KUFRM6NBbukkhUbngbG5HTS7nzTa8R63jK3wUduFarfuLUhgu73mTSdGH1MRFiULgyq5WjXR6zrURppr8",
  "key27": "2WkBJXXPqTMe1um7vQaqtdWHvB3aiVugMSdjRKRAdPPo9GP5aS8ZY8XLcPQeGkrRtNfxD1dT7S6LtWq1GjBd3GVF",
  "key28": "3nCssz1eM3AhEzwJUbw7eD3ufo9SSxazYtdwNCfeNeDyohZjuQ14e7LJmgbNG1QNZm3cQaYNL9jB9ZVaQQnY846q",
  "key29": "3trFKHsWDfqYnymYbhJWdaEFj6kP7E5kGmTLkN45xg2pFUJDspjtCnK5XUNncY8jN8D9UNoeXYa3u2cSaNuEE1ga",
  "key30": "5gUNPVUvE6u6aU2HdhHXKoj12axaMg2Zeky4dA3hcJvFsj5c4eX1qQK3jJeH5fnGFe26RuK6v2mHEuW7kPWscifJ",
  "key31": "5XzLnzsgr4R8rTYNrsKQioWrEVVmqNBvgREVfXTJu4p5u56jPrtxMGMvTAwUiR6RVpf9w7kTy9jqrH9Ry5Fqw8Ua",
  "key32": "5ybBb9Ee6QyThURuz38ZNFCNmKds5TMch4pGfpyULromq9BEWEXMZWLhHKMvJ8YTBT2edghCggo5qNcJHLjUPcwN",
  "key33": "33dkJfydnRhRYTMf1AGtSMnbzT94oAqwqXShVyHxfbgb1FnxdY4dFE2vQqeCoATHqaXZmonyhVvdo5qJEiNfcWet",
  "key34": "27VoDrHqRr7j882oMAKYibhbetFtFhfaq5rfTUHf3Ga1kGGqDHqor5Nx3aYh7USfeV9GdtK4krRqGrM2ubgpCMpJ",
  "key35": "Ynn7FWUEEB5Fcke1T2Wi7NWS2czq2owTfcsLJi9kVn5da1FCyu7eeJXYwRitzcZekWv63jejeJ943iXn9e6369n",
  "key36": "qaQHnjgKxFGDqQAyE8HRaqNERAWncDRhfQKA41q4rAFmYKsELjcwHpUE6zQHRZkSy3xmwQBYM1cTgtHQ8sgEmg8",
  "key37": "P3J3My8RhNR8WS36n8eoJeNDBb2738VBzHQnm4Nvx6AKoxY6LPnp59Gto6W3x1KYHPB9ZTE41gvzpbWPB2SYrmd",
  "key38": "3vQ9BHcEDQUSXFCewjVNu7UyyPPK2VdoR3FgTRoiczQBG8kaSDTkryMzPerfTCpA9P6ME6EK47niqwbmmbBoww8J",
  "key39": "3QDkZMh3MjrEcdwTHhP42hwHZyg9tUEUeavPDof88eWU7Ed4nZkti3T19QLpPGVg9JL1EtjiHpWVVBVPBYndaVug",
  "key40": "5VubZLSN5yn1xX8EvYSKjahQE7C8oCVuQUAo6wHgqBSRLtaWDGME4JxsP4ZTCRRkdW2FeuSawCrwpfYfCcMHKA8E",
  "key41": "2WPYnd8hY6A4VzGrvf6yn8ZYcZVCw42jaPwaXhgi4tPFtURWXtiL4tqDZnus32hKKA14v43cGfMTZd81U3AhK4sj",
  "key42": "2rNuxB4GxwfdhUT8ZSRcmomWTt7CtNxRdNMdvH7PZFLKeb2bT22YvcvnvspaSf5gQJQWSYQ77pmAUNGYQkBkwj4L"
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
