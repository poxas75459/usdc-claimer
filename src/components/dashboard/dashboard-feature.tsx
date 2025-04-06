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
    "3R5z5WU1rrmC6WVskppwowBipFTFYvAkHXs1UWore4mVayyBSruyqZWSaDEpb2spb4FazGdqQ8jkhajTSNXEBXWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8iYtRbQnmH9GmjbFHCdKCQaGBnthzpskMkNSj19BGAMbFF4EWHLhJLYTHPSYXJNcoqxHbWMbUTaxeQKaFQHd94",
  "key1": "5oymEpw7v2fhVYB4dnEv99coHHKj9bvKrSmYkMDzBDx8Kf7ndMJE6G3G3hHFkbkZp2a2hLPE1gfSCnp5ibnMvYTG",
  "key2": "8zVx7SC2K6jTNMuLJRqhqdHiEh5HX3F17zd6T9PaRCLyAQYqZXfx8cv7iG8maMNx1uigA1DNRtGij935f1oLc9x",
  "key3": "5QE9bSYdsQUxavZefRh1PXtXBtvWwfLqSVY66TQWh9YdBUoKQerxA5RTuJLQNu72QGoAK9ZKkmeTwjgd8RTUWg2M",
  "key4": "3RGr9z25Yv98d1nHY5bGPL5jvrQayFLyN6oJVpn7k8rMUGMMAScXw1rsNvU753fuxUB5gcDNqtCFCXNaPK52NqA8",
  "key5": "ygYj9bdmHrGvjqvVnKPaWLrbzpuQV5mgvYVid5XWAgadch1kF5qsYRY2qR6zxPuDiXC4ZgfoKC73u7wHtGtKo84",
  "key6": "5qTL33FkWqmajKzRLL6sG2n1usy7T2bDUQTEzhspsDvQzRj4dLMMmmZQokQ4FDVsBu4K7n6CPPr2XLM7XhekciZT",
  "key7": "3TCVpTbZSdisqdBCyMGdy5vhPoqTAJc3Uq878vz1HWYqZvEwkobbNR34KUps5V7jjrDsYNCYXvkyT3MVD4cwPTJp",
  "key8": "48o95vNn3Gyj8kiWUiJd4U4pV7t5v7CoLCrF8NbW3AjqcbJ5rR27cmfFdHDjpEXtncFZpWSCB6HRtZ7V2hdKLgoS",
  "key9": "65ch6XWfqPW9svMy1rjpdEwrzQbhcR24RLDXXt5khDnqi8k6zsRzLuWaR1cd6ZfsusR4XhFaVjDyrxJ9emLqhYvh",
  "key10": "2f1xBLmK1evtyYjBLamC3xPMeAyLCBFuDktcm8SDSAfHoj4dmKyV4awRTRaAnXpbSs2ryV9UXHTfQSwXXaYC7Azi",
  "key11": "4ACmwfedEQNaL3C1AUqdM5YGLUr1KYh78uzFEgGyB9kHrLgS8bM15HUYRTXsXTe27EFToR1VjNg3N56S8Spm1gF5",
  "key12": "569prxmWnXSFLHg2is1RKuSagCeZZL3jUZD1i4BkDkJ2AXigfJnHhLoDZJCFzAc1bhfpPvSfTrrSbZLeQwDotnex",
  "key13": "33c9JppmY1cjesYpE7qmpYpYA2cS4wFmW1sFbVDHgfc5zrg3dDkPaVsLVRWJjLSVdiQYRhTfLFhC9TD8TDBXPwkN",
  "key14": "L9W9i3giGdDijk72TABmZMeGswpKkU7dAhFL73zR2KXNrSjKMYhQ98bpS2wj9aDjjiDUrwaaBm3bnaRFXLEXFwG",
  "key15": "2Db4Ucid49GzPNCKCxN65rvKTKc2oj2EMdYQ9jcSs7Pb4uh4isHjpamhUGjKC71yiXaYTFqVV2xcrd7siHATFSZr",
  "key16": "5GCpucsDzC8JB5FhNESRsid5XcxpvGAEvkkvPW4TwfdtCysfhTZtjNxHpHiicWvry6b2MpsA7Gfxd2rPhi446BpP",
  "key17": "4TTgyrhVqxg7kJtbGAZF2MEcqxKpQZixujGJJMCGUKs37Yuh3FEjspSgxrHzQhVo7uQvcotSFXWfaHx5FbX9gncC",
  "key18": "3yetEe3u7uwcHbt6M5uq9AirdgkPeoxW3xsBvAPmHQuTKTgrP29bzwxECEf7yALNGMwU5Ajz9pk5BJDZNR26xt7d",
  "key19": "3ZCkCiAqFC8V78prVpcEPY6gYQ8YpN9RL4LPgBG57jtCQ8tYRhKw6EhhadiikuFBkGArvUpBxoh5rVWN8hCCTF2w",
  "key20": "4yak7qAfyRBJpfnAHkP1oV7BmH9RqkjRyVEU4bVdj1xMcqSssF2h5bsUYYoLe5pA6s1WAENP1fDmLCNPRoMQBovf",
  "key21": "4KrN9PySxadQ77ycpcde7rLKmqXJYH5ShL3KEqPMSawup2KYnN3FPvdbEAowwS6e3aRGUqaKeQNa5XGqQm4TicLF",
  "key22": "5qr7G6qEdJPovUHNcuXNLZvVcfGLVEcSdSW26Aq8n3Ar1XfB8uDteD3iui5NunLVdtVdfn8ACHzvAx2C2R98FMhp",
  "key23": "2J47G3Qg3Y7NLKyb9Q9mMfgCwRfy1hvuTq7kkLh6XToeuqUgo8MaWSRbMs8wT9FbxYvnmW8eF59c2Ckw8h8L9dBz",
  "key24": "231nfXuii85XhnAeqyvXxNRQyodY6GgnsgxPAvMheW19qPuf1yqQAyFzNJfF73u1LUhqQFscKbxWuyp7rM8sFFPA",
  "key25": "3QVGG5kgrRRR2LMkehZQCpdBuqFzQoSWskYyGntc5x5sWyKvchgfi99m1Yzb7nM1oiSzdkRdcaF4DdwvHHRekmsB",
  "key26": "5TsCANpqhrLf7kKdfwzjbG7qsQcsdbtr3XWvoGLkKw6GVpvsk6n7T4DdoSFf9ViM3HuQay5zaay57ZpFnTem9qZT",
  "key27": "2pgy6V91kyW4LVwLWXh66xUaBVneviFtivR3MkPVEDAKK9zDXz4N74txc5k3LaRHnnMkp2WQmYg6tztgvNQscv6V",
  "key28": "3BQQs1uyqjH5j7V8hLAbpkF4q3Csk3T5VZgMpg6PSo1zjd5m8Rq7z3LxzK7YVZWp5TwgSxsvBNJgW76TmjuzCZQ7",
  "key29": "2EGVLkQuWYwnkGqUnewYpXDAqgJVxnUdpamNKeXFSmkCT2qGtdd3qCu39GDrw3M3STEzFmdgRjMeWaSjtPoERnpU",
  "key30": "2MFcGJ6oAyqVUCy9evFJ4CuTDoDeg1gyMAXfaMwWU2rLY4LWHqYBvE5HmxaoRssmbNi9ypzM1ewyPGUNKinwiZxn",
  "key31": "2SKf3aFriuFRnwXRLEwGFtg57wmQQRUGpjcdqBkQAkCo9fJSobB1XTtEVKCqmSUcg9ENEqLHLHQCbdenFjLqDLeM",
  "key32": "2zA7DQNhzfD1Do6s2z4Ee4ihw46SGzZZYepRzrxZxDpfVX9FuEofbdcb2F9bMj2ajSyHxB8T9TpcK39ESLMnZjas",
  "key33": "38XgkdcB6qYdvQ588ehVPkiZ1isiUFfYQ6JwN1xHVJak755Ef3Ro9N5pe71zbJjh1K5zTxoz9MxFPkQckcc9wxJv",
  "key34": "4Tzc8Jrq9bPwzZT53PR9BMZB9v5s7YsEVykm6o2uycEG3ZhCHFzUN4jZPBfuiuBgNdgdftreXvhSrPpLDZDuu7Mo",
  "key35": "4KRRmeJFK1eEwWAMNpCcu11dt3tc8cGZP5QTVzFV8G6EhCZC9pBmWeR4dvJGvx9xbsXGrdEeSeumDgE72pAbqzkp",
  "key36": "4PStePYpyLnoNhuszUpVcoWcCr4gBpWenFZq4uyDT6DvRDfnujv9BdQzmkxsid4QQZXXrVAGyS9NeHpRWqKkFR53",
  "key37": "EnFqJGc8WQ79GNKT1Zck7XtEDJMAXn7CehpPNvWCRvu3GeSA38dQS9NTFqkBTNmS56EBQ7Exp4ZsvzrzFQw5QTy",
  "key38": "4CGBTUqAbJbUpFT7YGqedmdzoQc95ywxJvaureNzcMJpB7M97uFftt1NaB1RH9ruzW8D8UFbBHAwn5QzeQbVfYit",
  "key39": "Lrt5A52tzfZvMLLDU4TjxMYaCn393iXW12NA2yq9xGssTy2ntoKTZGuuhuw3rNyN1vzMymWkBYb9esQbCWyfVRy",
  "key40": "2aaomRonFFFVww7NccEcAw7bUyPAnen6KndR1s8pSqgn5fWpFSpYf1Qv1mHbEqQcuvWfWUxaWJmHvKQ9fap2FXHn",
  "key41": "5GX63hhzNxWumaZkXqb44UFNj6aYb3M76zDXaBhG6ywqb6HY413CtoEuiZ4GvabfzGJqynDmFS4oHVLKuXMWD2qu"
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
