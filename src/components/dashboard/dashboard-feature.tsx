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
    "4rSGH7fwPn9hjR7bLJZEtDeww87yQs6jGktak95mBHGPfodbQ23QxJWUQ7Akdbrs6icMhvjc7wfz6xgpXeENpqoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Z92L5pPmdZNDYxtkUt32oUtBesc1uRetu1zJr3ECspb8eQriymn6BqQM84QdwDhga5VbzZEXQcMu1EZJ8AtJm6",
  "key1": "fE2cPaBFqTpKVxHJDwqmBWtFAKC1MyDKyuPMV2tJWjSEZzxzaYmNsox2UjPVEhTrnJCtwf8ZbMGzyckdeUCdsaZ",
  "key2": "4zcRGJGDMnZVTPEJaYsn9NN1y9uvrxjVFxhZwNYy4XpngeT76cyRDiD3uHyYFeBhzYXapoTY3RCXR4cVakgPnqX9",
  "key3": "2SNAxSPDQ9Zcar5HvoyxiHkUBKsx6sbmKHCs222HpkJYYSYuichrCvTBs8pNQp5VTRyzfu2ohdxPq6AmgMbXyNF9",
  "key4": "31VqEaGfJKGQ2Gyq4mZQoUeYqLqDhmtaqM3PMDxgiN4tCoAdBiKv1UBMXopP72FmHrjkDZmNN5nwGr1GYFg8DsZw",
  "key5": "3FrAs9tphvtfCuVckiVH7548bJg57JYkXXM8pQ8dqKbqHSUsogoXZ4dszr6kwDkdCyvX1m4h8e8CeUCicuEqGcE2",
  "key6": "NQ9drYVL5y1L7dMsJcmFwCQxQkvn9Ku8r5EmZ9q9Bs4eS1UdP4auXTnb87VH6Nwq6wpv8VFXcufbZWomRzh5pRM",
  "key7": "3uK7ZfPHKcM4ZBU91j1i5ZrPa8HuYRL6yk3hdnQwLdbNKHTH3rMTh96vSYXJTM7VoGHZE7kTmTPxUCko6bcuP8cF",
  "key8": "xPP8Pa7yh5mUEsrnrgtVbYgdSNFQbMizjCRzLekNnzFHyvpWvPvgg6FPEVKFQYtLgb44WNfrNtrmxUp6QuGMBrS",
  "key9": "3Z7KScj2cGek6Whp5GfVFnz6bwqiGBXaghzUhHHyPPDKotTCnAakiriwp6prpn3vabFLCZZHyk1DhhQfZN9HhuWa",
  "key10": "5SP71YY7GCiMVL2xaC2Eipms1xQjdc7B395zXWZnK8BTj3NhcRzXxN8c7UHuzTqfDjARyjgo5rgTrDbeANP3urh7",
  "key11": "3yvUEMfD6cTy74g4qSrNS1rji684JzHqiCFAHMaX1GSaGXmJhSbsd8gzmmqnvvhto4cZzJ6Pv5RrDmk757i2qhbU",
  "key12": "4V7pg6a7QnufEgHxuSDBkL9g5bx5ekKQX7D1rr9sPNKMcAjefAS4eF5fUQt91jsfvZbtxTjA3Cd8ixSfzq2evxH2",
  "key13": "3YFQRDKeXawWsSwa58paC9pjbPt8UYKrTLv247r3YL2URYuHTuhrgGosbtLxB8xzop4A67Z4sxzMzfnaRkiijU5",
  "key14": "5sCwT3BzyGUPC98xynN886DxL72Dwa7mmrEoE5hwZUeJnuoawSYK81W3CvLf1Z829nYfGeqenHtnahh231FMZj5B",
  "key15": "6565t3P92j9aCAbYEggfxCJfrkvNnujS4dhrn6csuu4o3AgjUZZp1C3chmnwyMKtfNgfhPPEf5rgnN5E2PXjdtZf",
  "key16": "5j4c9saLRdfGzaBj62UAr4DeEci5KRkjSyknffNJMX1dwsfXD6Py3poZJ2vShdDP1L3uc7Vj2VGzCPbbaZGtBx6Q",
  "key17": "FdhBUQxcZv9t2QqCZ6q6R9mFYmFKMuYamfSbnE4sKU5GMML9TLudfqpTNYwQbRnajEcSM5CHdwsQdT57Bp3K8EQ",
  "key18": "45stCBythBet1VioVmoKxBzK7w2xJeJTxrGkq81uCL5nHqYGB2kVRz4px2PV9UjT8QxhfWf6ZSEEP79Lj4y9urXQ",
  "key19": "2qreKiPUGKnXd5Yoeed3q96tWNLYb5rw55U1FaX8EcbAKcwotGwtS1kyhBPa4rnQkS3RexSND3tKEMfnUFFydVaa",
  "key20": "3JHCkSRHGu3BQFJNDrh9uZoUG8RoXSpphsY9V4dWnZBaYY5wJKmQ21hspcjnEEbpoGgQr7b9reFB2HsAp4BSTrow",
  "key21": "3V7KULyqnERaz5d7fz6f5SWwX7ro624WKybZPNpUbxSb8o4XXHC5Bowt8DXuCBg4NGhfin64J4A8coMXjXieHyLn",
  "key22": "2NNnhC1DjGQ5SA1rswVPepfcXekSZQgBvCnawFEuMNMTiDzav7gXrpN5ksvXuTF3utJfbbGYEB2iHFzJpdzFyB9Q",
  "key23": "65xnwxD5qfgJYPxbagSzJF7Kysx98aBGedDyTDJEEWBUiJ2qF7WmdtB5gLqbMDUf86fEqqKxg3N6mv2MrSeT7VG6",
  "key24": "HNdoWReoEcVmdGrR3wqc1SfwrWxFdobkGrgxi3N3RRc862Fv7DDcjLTLudMwRaJ46xBeutAFsva3MJsqjSW5MPg",
  "key25": "2hk9emSvXw19WwBX1vyBUgET6WuusCb7xYk56EKU2Kgkx6fhTkCzvhAfkkZFN28VBs6hV7c6dU1WoSE8tV25YcUM",
  "key26": "27at3Ggi2F8oir14QgixvCh2EFqDFz5uTnfGmnZCMtmdgfGqsFPpqcisLMxiissJv6EkBLfrHSqmFQe1YZNCzyad",
  "key27": "4BmWsLRGCJ5xRgHz9eHkvhHv4xngffWyu4BEn1T8Yebsfkiniu6wNZaE2x2VBHopserqfeoXG38EAEKTXXJgrW4S",
  "key28": "2ow88FG8U7t9po4MK4J37DU3BJV513MvGzWHffoGfT72mtS4UW2iS9BVuFPH972JDWKatQSskf67qS75iw1HHzPg",
  "key29": "43gCi43bYpqLromC5BPzwoqAAPM7QHTL6FFvGxfTY8p2h9XKTYYMEmXfnF3Kx8RnPpKqo7RqdWFi46Drvso5DpEy",
  "key30": "2Tdwq29UAskAsBgPZwuGQgmmUpLrVgrMivBtmvL1iXNLwxUmqJTBHSk2GEtDFrA8Rn2dsjnZ2mtH3JpfV7aueQSa",
  "key31": "8A4WnDVGeUvMUaMqS1SvnURFTTKJ7yPigTwvQRquELknjGs6HB5v1XY6CJBd8SbdditL2hp8Jo8RMQipswWWCiC",
  "key32": "QLgsdwfyWFUBMEbZ1jxpp7gLVLPNUgbykYtAhAFto3tHhNRy4ggB9KvVKanZYe2WEZz5EcopbXf8XfJEpuhahaq",
  "key33": "22YFNyyHDqHhJDYH65WXgviodK9sPbDBf2FPbvDar8Es714vJHPB1jTj8WNZ25EwmEoRqr8f3kmY3YgeNMT1mfwG",
  "key34": "5M7fR96jfEe9Fft98hWZnH2jxFLYwoMZMuEBC6zCHwLDhWu6uobuqXyLAVuBxkqWwKyFAqx11x9FooGx4yqoZ2rb",
  "key35": "5UVyyGW9sfpUtW4gDyP75A4FpL4T8UJNEEAxaVk9gMkacdFDRYnhGFUkwzWWfH5aeVaPvH9qDXzGe7F1R5b2RusG",
  "key36": "5e9wizMTksZoFT2vHXajXbxYdQS17RGTTevxEzCDXQ8gUqENxt6XFp9s3GJ36TgEMCffQhoDRNmwWjUjnrVxmyz8",
  "key37": "4YRotA3k4gS5WJ34AAi1BwsfaJ3vjbaJQedzUwKj6pxCYWKTZwBxgmVSQSc2Ms4QhDX1xVvANZzkkL5qK17goKf5"
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
