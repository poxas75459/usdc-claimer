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
    "3WeM54PyqoRfMKw2NJ44WSZ9yq1VSYHhnpLCtiTcXBHeUsgHWfLvNy3yxhspfAWHgcWk1hsZCsPVf5ynZTztzwiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TBF9zaExN9zMzTMQLwfwBMCpMHoGEPyhmF9yxQWjkSAyDaf46XNGCsrTCmHb9vGyEGEHQJ2niaXwmLkhMaNDJJk",
  "key1": "66eSt78mSSfZ3ZkVgYEDjjHjofwUbBUgiYocwNKetYBnuiiaPXu5tmYxDtyCDEXVVD7ami9TcbdjfgmCv11WqpB8",
  "key2": "3dhF9fx9oxpDLJif91A3kLMpfcxXcjzLPaFSACnZjWdKSCzovSVqM7sL4qf5LxDMQnph1LNnGzzLDWmSNL5w47td",
  "key3": "3TjbJzt3qd2sMcj1hmmjfo3BTWnTHSnBYDNjpstvVJDo5tAjjUTxc5sjn4VVVEfhpZQR1mGShDfbsososMpvsxMU",
  "key4": "65cnLLFZGKbtDX3si7p5eNMcEczubTYhgrf9U8ouSuzF6xhpa3baDX6Xcad9z6zMrChQNpuyYyFPWDFc31otW4AH",
  "key5": "2e4WshoLxJzB6xYcgqcSJPeZECqoFWwtFPjYC8izEyMhzvPG4ujKH8kcWTwxZZJfbCXiXzoX4rp99mLk4VGLcEtB",
  "key6": "2HncAehpJjVGeK9PF6PLARWL3oyawH9N6okQbCfN4xud8ivyt1BfXZeLBH7bkeKnFaTFiaeaqosYmzVXxLSWBDTx",
  "key7": "5PQj7KyzqFVSuJjA9xGfqhW6gJj4yN3YJcGGy7c5PY1m6iLLuXFDjCRsbSqkgUX7qHSydyArsTpiGFEDGv2zc8E1",
  "key8": "2rUngfhFovEWSiLQB8cF5Vjto2YdsVVbjAdhiK4AVaPQcSaCUBtEihxh58zawU2aMAdLNQxPdocYpCdq2x5fU8yJ",
  "key9": "2KHSzt39mUR4wLTVk1yqNYJB8FEWxhqdE8L2xDkCjpRBN35xjyppR8aAMn1PTj7DpjsNw9v3vpMWzb57uVcKdpmL",
  "key10": "4jUVDMwAm4YN6Mc5anHUonTPLzBRWwhxCjg4sZ33e43B6Bza7mfQEjQuh9eZfcQmDy8omZ6hVFKzpmtQxkkw51po",
  "key11": "4QgTZEbCqGP7ySoGYMuF5Z9AMj3dWUSFNo7AHLRKYXx49mNu49KNHR2SpfkSZYvqNjX2BUT2FnRcB6tFXmKXyMRw",
  "key12": "58XeqsPKWx2VsgNQJ6iEF85DPHp4118D8ZJNp9LgEuEHX9DHHY8RELQk8invqfJCLTkkFfsiJ5vYhB4bpyXV7oQb",
  "key13": "BLt3vkfb3ZoUjr7iXqvRjFdWodvB5HbtBofZWAx8atwL96eF54A6kLFeY7BgqJr7aGcG8ovVzGFqfmb6QphnT1Q",
  "key14": "5wpRu2p1priMNL1b17k4YBj85LY76GGNX8MPKhFsabuvNZMTieecGYdiz8Wb1EfpKTUTy7EBSbz3nr8TyAgvnieW",
  "key15": "i6PnyZwyrc4BwdYdkjrBncYUQuFyVfwQLL1szgNXVbACEr7ZEpFSrrbXwrhHp9oJYDibw7MwLPTVZkGFoVtkJ8Z",
  "key16": "5wGNEpafNK8qUwb1neTV4BWND8gWUfg3kMTzpKevGwcx5jiqcjCtmSenhS9iPbu35NE5RNVvyfXFR5StNvDmm8Mj",
  "key17": "5LsChM46W8RRmDwYDGqHuPcFbdGHGYdav5ojvt5PyGLLz6rVRA4Y2FQBRKp3N4jNnnpc5zNcG3k1YG6A1eD4iyFi",
  "key18": "5e546Naknjbhqg8eesj2mh7pgJhwJqW89mK9UE4QLeLdWezetVqR6qWYnNfhKvnAiUgFLxXBfRH48yoPayQCwvYi",
  "key19": "MsCmaHCa64CFxWuiqcjZNaauUUfYy2dSy5AkEmRd6oyTpsmSkUqftjVXCrW4tNntLBPyP2ZP5zuj1S5o69nKwBE",
  "key20": "36G4oymU2iMazZKVSPfB8chbKGneRuHMWXiFevoFxFraGB4uXeHAyivn6NTRLsui9J4LvwCApk2LWSoQjVa6y29K",
  "key21": "2jnCuiuS2jGwyxkiUNZ9hBABAAYhadZi1xpxkpbEmaGj4zdJdQk2m9V6s4e4HjJQHTrSdPnpSsR6hFzcNxC65N97",
  "key22": "5Kbcu2aR9tZABx227nHJhdZ1q5hpBjBJq44kc4JdZ4V6admXMavX9wfYr7EZMXp6JTRuQ4Bi6tJheNzN4pjZXJx7",
  "key23": "4h7Umgvi4sUFu2YV7b1wSXTXwrGopMzGpGtWEuPJvo467RtPr5LRtnwHP7GBybEh8RaH88mvMxPu9vi3HsgLVN4Z",
  "key24": "4fzieYzMNiWTMWbuTGtJLNreeZ1YR36n53mqdLYuytDULURQrpBfhVu1nXFwqMfWX9d9643zVAH7cWG4Qa8Gg5RA",
  "key25": "2zjGdm36Lq8kbyxW5mNNr7zWEB1UTRBVf8JvGEtN8YcBbtQrV7aeN8tdmn8vJSzQgzDsosnWJmQQP5Fh9voyYVd4",
  "key26": "2a9riy7fc6oS2xH1XyDtteWF4bAZLCDs5Mkswh2CHxqyFN6eLq3yxUvbfNMmiYLKoMgLJYfMtmjyGRUw2Ctk78Qp",
  "key27": "4oNdH7Wmnmj3BsotNUGbXKmWCc8gzRAgLZZp6pV54UMR1UFbA91qnXeNm43E2iVVzCawbd32YWzLdaWqwMtjfNug",
  "key28": "5KCw4mz87F6BvfJKmyXnrt5sqE6Ns6EyM4FPCJeJrZvACfjkUYQDDQdSXoD4Gro7UEXeLiBpNDipHVW6qUqxwELm",
  "key29": "5vEihx2DrXBRFQbTq6mWxBdHyCQHtEsvYXrtkbHiBTzojGYCJg84P2purwfdEVbvGAkwShQtLywiiiAaEds6eS95",
  "key30": "TtaHfsLFVvSLS8x5zFwjhZ2qRLJE559o3178UqbeDF9GC1LZuLvQEUGE3kHzeUAbEXzVD1RbnVBkJkoQrCRyiTS",
  "key31": "5t27cxSLyRMbWxzjpqja7AJ16UURFv5cfFQKyUz62wyqjaA8x3RnSp5HkXC5kS34Ji9vtSLamAjyxwQZ3kSm171L",
  "key32": "d9SboLcaE7V3Vn7BGSaQxpDqux5f1eCTEpyEaqTRPi9uAHNhs5XWJY3ejSSEQgoHBP3qx6Sr3iGAfVSrs6yVBKe",
  "key33": "5mBx6FYvsFLt7NFHiuhhXWLdkRbTgj1jM4rH6hEtCng3sViBr8c1qz3QW92Yk8iGxJexT73swTeZxuQ2P8mezXHx",
  "key34": "3KLMZS6UQrE7y2P7qXcJycD5Lm2ygKEsYpfqhD4c7kwxCX6YX6fBr6t5Kipokd3qhEcnLEAqG7tviXznYTCdbT9w",
  "key35": "5W8hfPfY7CQQn9i9Bg4XF4jFzzbAGQEwSvAQB3e7aLnDX5CxpseeDYSJ1KaSrC2SWjiLjbivzvLABUhuFJwWckQc",
  "key36": "5HMDpnUcGPv3HxQ65DNc5Bi9fLHEqHKyum8R89CzSra1npz8BiV3HfiwdGoNAEvWviiQsyJuDFYv1oUDvDYX8AGL",
  "key37": "DCGUYertG6wh7weVjsdtxwec1xXb8MwxeCf3GDi9KQeztA4kRok2ATYhgcLsD6VmXHQVjcUviUhHT1NHG5jRa5x",
  "key38": "33b2tXNG3YFoD77TR859jJZuDDvjDJheKws4A662vzgQ6Lq1LgXCugP93S6xsktmg16cW9StRP1e9trY3uyGNxYu",
  "key39": "oTmrnkoJe4PsNDAuBdqNHooirv5N3ut8THVrUvm7z1PUy2VNoQxQFc6Sb8DTdYnjTb3PB2JPHspB4bWKwfxfyH9",
  "key40": "46havdSjfCp6KNFYKXUZEduzzvYZjVPSw5oHmNkDg5xjqSnWfWu52jofxLyKYaMZ85zxU9cCNYdahUGfb165pnaW",
  "key41": "3SCrE4SHc4mSB1LRsHint4DdCnBcebLdwC9Wwth6BeKYGAPEPtgYAHCDtJvVNR8UNZN3hQm1ofT27gpt1TeHNPLA",
  "key42": "3A37jTaA7B2fPbg372Gyi51fpXbGn23BV4Yn6Md5m2N9XZVvtwxkNHCh77BRpgnTWRGcQfz3FSugf7ovBSSpPdP5",
  "key43": "5m6StrUwpmbCQiKAi5hXr8iYW8MD78WTkUioTcSa2kThqQRb7tiJgVuG5g3hEdneb22defrF4pZCmonFPXGEKeZy",
  "key44": "39qjoTBknrsAgvYNRnWoYfhG3cGxgJUTDhFAFXQYCbXFN78yacC9e1EvnrFZ1b6eoWznFoVpiJ4gDrLQq6SojikS",
  "key45": "3xkRXtayuTfoT8Q5gQbAHhELWP71FJQFBfdbfuWzBd1q9VfDnAr66aXnyLmm5kS2uBszkA5sh6MeXy3yTcifv43Q"
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
