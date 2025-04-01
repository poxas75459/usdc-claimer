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
    "3kDFhgUBeTuGsZMTzeM94V8rRS2Pamhg3xHW4RJ6cqVLfNqwKvt4tDhzaLGXJmJLPLe9nH1TBiJnR9JorFrvHkb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pHNv82xfnE1GAjHtM9PxbAqKi1qGvwBdLXKZvsEZfrSmMoRLthzjRVFS8sRANBjZGVEEavpBs1BEktfknKHbNH",
  "key1": "2cSxy7jN6pqwZ4mTobiHCxwPQXaHiEmzWtQYiLFKETk3cEF9AQmJcmaHnNv1Bov8iqY3pGKfYUBkfshaTFeauoME",
  "key2": "5WGy65tghDzCfW5n57SA5zHin2Sk8hQAXyt63hFVNGZZdc3Nv8Mdv1RQSFuZKKB9po69ky1TPTDhxxwQ9eSZmGW",
  "key3": "2wvWyMAdb35VR5hKeb9UaBTtSv1DemCh66CjiLMNaT2mwdeGojswxCjiHXGAahYTDSA8ZK7MbycLxaFPvDtQLRSi",
  "key4": "5wNHprstkXqMkYcdAMcnfU3cjrEVHW1YtpUG8pCm4NfnHXLNvJqSrkHAqP9wskXs1MobqVpMpVFaty7mL83uoNQR",
  "key5": "3Vv4WMbmFvMgTeRWo7VQXctNJLDgjSvre44KWraBZ6Tomt2KjH7iRaEG2yXPxecQJrKn2RSXL5Tp1fYHURA5hNna",
  "key6": "tJDHZGtqJqucXYKySedttok8UpKRc1E2mEkh97DhLQb8y7W8NLVQovNyzMwFUvzU8FXAEhrxDCun3w1a3qWpE4E",
  "key7": "2AyXZqw9gT3QwoTia4Fy29wLRjZzGSBoGBQNzis3SdbMXuzcHrKXPzantBqxgtKb3ZNLTMpdFyxMHSyvsFbBNoh9",
  "key8": "5Px4pWV8ffws6ey417AjX4ttRyX9pTJtqE4T4WQh8mPREQsRjxUTJBESnK9LHB4Sp8y11AtEqK2xqq527LKFzU6c",
  "key9": "475HM7wCcSfWawMbN89wPNmBDdsQT5yxDm7hfucfky9brMTo1TBSw37H9gtK2K8GRyTSyLmdjP18vEvj6VQMJcqY",
  "key10": "2N81Krcf2Fu5Cre2TSqGVae6KUWBKy1ZmQvVgo5TXoVwkmBAvgp4JBumxAYRWBqJLh477vRWYHRBEesA8DjjaWwg",
  "key11": "4dupoFZcyfUid4Gwb7K1iiAXfExqznnxUahBAZXYZQtHSiiDXRuniNHVvuD9RgYak6Yrg4o5txCJfF1VPyRaRGWj",
  "key12": "2cWatYNHDs4HdZmmzXK1QXqWBgu9VKmifpmUGDpTgdraU92KyYtA7rK3d4wFKKGwEsV3P8Y3popAxthPxLH3NXNW",
  "key13": "5vk7UsN6ZHgFDgqnqE67aAHqCv64EKFLcMAuydNH7H4JbzcMoBFKeMB45MF77vmdm8gwnMeDTVG6SQNzhGGqWkz8",
  "key14": "5a2bVEHKWyBMYYJ5T9v8TUk3gvgcqHHGiSVLwTSUf7b4fHVBMbrrnCymaCQ4AmjPcqSEn43LaqVfHtUtMAHxw96n",
  "key15": "4ErgExwsy2uNed3aGMrkV3CvmGTpRxFE7sMA8r4P9kFV3rgED1hbGtiGSoQiRTra2N71AWDQmWjWuy86qWbCWDVr",
  "key16": "2UiUdCNY7L87eCv5QNigR65AXdr6RpYgCAfAEx8QPtK3c7oEfH2y5hQLrMt5yGgEw9LagDawRLjKtZoy6SqiYQe6",
  "key17": "3MToV5zi98dLQLSdwUBbjChe74ZmToZx7FAArf61apJTuuu4upKc8dydJq8ihPzHoJVCFfZtKYQVZ8VSJqnPoQB6",
  "key18": "P5qRejMcUvtHtvPPpJ1VoFovpykD5Kn1nbzdxPXatQbq1vo1H6SzPz2b6EYMAeeLyvKsG7N4ENraAWt1Grjn3a9",
  "key19": "4a9eMALabkb1JfxwLRRFRic7BBpHLXFyeCg1W8u8EGAqP5wcQQxEwVBDVr6MkDE8v5GX9iirVBvX3wyQ3Xr58qFU",
  "key20": "EUfbQVPHiU1SYKocGkHnLCC8rUMKPN4JaC9ou7wEeA289PEVpHmTrKmGL2hw8GhAbe9aNXC2NNSi6N6TBKVmAap",
  "key21": "4Gq4q1oxvvwwzGZwgp4yJej71M3W5GbBbxNXC1uhjQpWEU4wX9X7n5XZPzKCRBSegzdvnGJKL1qDz6CeZSdw4dtP",
  "key22": "4ou8FgP5RwoPvbpJJAaD8ifCr7EifYqkQLvacAtUR2tWMDtRuvQ9LA2CnF9pRE8bzgZh3P6Z23XFY1qvCeRoSnsP",
  "key23": "2hRh49LLvBkSyTWyxW8E9jivrd3ouG7WD8LcgxCAjb4T1DGkgAVd3VyeM1TEVkGc3MKYVJEauZYUnjFyox4ZvJ1P",
  "key24": "2ssU2MKvgSyHekKxuJNoKjLvXcnEomRsDvCuZMvEVKDCEaBod6rxCfiJ8N3jSJTGCLp8QKwy4s1ZdBeKvBVZFpGh",
  "key25": "3QYDFkVzC8z1yP2xnHpnrZSjRMjpZgv2yVa55zjokyPnqnWikUxMxHY1jeaAMbuY8kNBhgpGPP6HQ7ghNQ6MVR2j",
  "key26": "3qo8vSjzaG2KbL5jAmWa7fDyvGDat5NA6A3yvQiFZXq3DixMb1Nuo17babE7qkfhgX1EjiwWnQZABWJc27T4SuUU",
  "key27": "3hzeL1Qu6QzKKqKVy84UL97of1gyh3oSPDay4PwEHrrBFApkLW8fvN1XkMSKusGQsoHejv7DKRgkfY6XYYpwCk92",
  "key28": "3zL1aYvXujpDaNnCQCKarygkv7kjqzVqHWVxWjSMvhB8xChNFSNUUGE7rZ5meAKMCjh2pEy9qz56EhboY46BWrJ1",
  "key29": "4D3f5ZSKQbcYth1r2UxcPVpWF4TYUacfSzSz3W6vjeN2ZNo1KDL7dstg4DwRUYx1jcXQkd9LeRvhb4HaUmbhAdye",
  "key30": "5Mt68mD7ZNZ5dsLMeNXUgi4ttESFpm2WD19cYRJSMihocxeCskPdD9pXbBcrYbZg3WxuKFvW6HgDMt6kBAttBUsX",
  "key31": "3Fmzu3veKq4RstqWHXvu1Zj8zxqfDYmEkoQvjZrKsLSYRrZsKAdVfR4V94uhka4FN3CPE6mYoWT175HRgjBxGLAv",
  "key32": "3Wq1e3omaLGaG38gkTQEPR92U3mwMBXVV8fvawQUHPAJsVX8LTaBHRMbCJTy6hkpEbaXacqJdZBGCML8bmvvAX69",
  "key33": "4TihoCnQ9DeXwQvQczoiMzGGM7yMqHskmG3pe8e1SYgQtNZbQF3M7Rt46TvF1CH7kiSwEbs4Tgp5EaKNN6b6gLmS",
  "key34": "5nJaN2Jb2FZsb9Lf8MJFE8MWtjTDjqWpZkDe5vFeduXshKwdc7SAFi3RUBWXpntsZVVhLgKHDChe9ySMtsVNTmQ",
  "key35": "3VkcfeRvuTnueuKRe7ZuzUSBYERhqjQSkAmk9NMzekXvwLQKevNdMHNA9ZXk7NyDgVAMA9nZBhcyXXJK1mAa6dPF",
  "key36": "67KmuTAH3Z3UKSpZUsNVY1tadqgKHWadvGmKTVVrTaEgdATpJRtso3dG3nZitrfTiGw8X8Qm36ksh4UNG6mPEbT1",
  "key37": "4PiWgH1mprtpMPQMatkGKs79sDAhrHqpSeSmDisfVnQWAgwJeQDzbj16XVG1QHCszYDx5iL7zvDHMVgCVHypaj5i",
  "key38": "5SKhoj1LYVkkUR1f9XTNcYhTkpFahyb1Nh1oWmNv7oL7k3o5f9N18EwAqayMmUHHnNBdZgktWTYfwpPB2edLV4eZ",
  "key39": "2XoqbN1uHup5tv3cHRhTwwYbzY2Hk181u2UEdQNrS85MivoZkCSjCeVCUWAssBeAV3EJc7XzuVXErrS1mJx19wH9",
  "key40": "3UtQgjsX8Ym1HUvdf1XgZpCnC1zivaDXM14JQqw9HtnrS8zatoqt8zzTXi2SePWnbD7CoSFByHFcKqqyJjuyS7A8",
  "key41": "4DKzHXUbWYjg76KMsBBDn639CrGAZxPjsJ9yVKQHDFvbfR8zNazayxtNZvqJFqJEaTsW7zJGCGqdx8HEpiPLm8Ln"
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
