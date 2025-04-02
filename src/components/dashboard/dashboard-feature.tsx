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
    "3mjeKXSLupamfL6NioDaYvBGBePR5UBs14UXUN7zc3P4runsLeyV36UrFst3pEfzwCBJ6t5GK8wSHfoHWjxT1ac1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3RabVXKvLKyt26byEYXcwbcaXkv2Cp8vpPCpiAEVCQH5QZGSb2YZxbeJogAug47cvk4LdY3k11LWgSXRzL6uH7",
  "key1": "Hzo5LzmSq66xHpbLt8DLmwPLSKi4if71HFbJcgWzCaoewsSSXVnHe2WuEVKy8w9DzhxGAiXNkzbx7HcXck8Mfdt",
  "key2": "4MGzTtagpaMyYy1pbPc6c7CbvLdqJF5mquKXXQXMDJEhQU2Zw1NLrWAL73AwvbW1fvCqcULNKryPSHv9pN71nVxE",
  "key3": "Guy8SDKDPwhZHP58vYFweMzinsudGQmeVNfK2zEHpyDBMDjL6LqTqWn18yEnhjYfnTrGttyxQLBQDPst5byQwQn",
  "key4": "33W2cohXP4ZNXfqPh8k8L7fZvTiLLW5zYfVGhwsnat53qFFVUCzEJnZbC58WLcuo1gJX88DbdJwxgV7AazyZz6a9",
  "key5": "4f9j37z6R5GfvhrAn8q8QpkQ6DCT5k1w1hV2f5P49c5FLYSsbs5sjgKsUEJzLnKvynY8GerwBTHs2Wm7ZPd62fRr",
  "key6": "4rKB9D8Giso3MLEUvfEvSx44vfFrbCWrFR3YQiZYYhxUjrhJmnBxai7HMo27YuFghkL1wyx41vb6gD7T9ibkAegr",
  "key7": "2ahP5wczG8hBtkqjVKh2vtZcWbbc14z48RWphT7u1pqMfbYVFjBKyNkVF1JE9YhizXyTBtkX49sdoQGQ5cVRdR7c",
  "key8": "yhMojuCX8urixoEnfAKARawBveT8PewXNrcL4JYw4V9cGgBpYDLFfDU1KiLM2EF6KtMFZkFi1CKYHZ41E1ZrvSj",
  "key9": "4YTHG1XaPGQvCsfhGgeAWymz9Za5Ru6ExVfvrzeiAaHn8BUNHD3j7fqXLRpCX9hCpMDjwQrL7x7ERTmrBWSna4xU",
  "key10": "2XwxDDkW7WchP6FhvCU6RJYFuz69FZWNNFLpBFFMaBzvnJW3cuVyE1SFNRj8GBDiGJRgfyFG5DnkUrSnbHBFSvJS",
  "key11": "3VttK5LfhigVq5jd5ozbM3yUDviNRdjNEaYronkNLetadxMSZorTCKsbr8C5cMuo1fyhsk9HzGax2Vy4mn91zMLx",
  "key12": "2pgSBKmbi831aEZaQpHS8GLtfXbqCiTDnvs8sTAZMan4Hd9io8Yud4kMh3mbajiNErACXZZCgg5UcYRfsk32iank",
  "key13": "QVH78xwqowe26cZB6yBkZueCoMoNxpj94yNmEGY4CneQuc7qau1oWrbYWCvbafbVFNuJdQFALbczpSXEPTkhfuy",
  "key14": "225pkkAnTSXSVPzspZprtAn7oAYG7FFZvzkp2zu5DPZHf74uJ8UShfQGgqZ5QsfhntaP3Ezifa1bsedpTbTCGGcM",
  "key15": "3oQ9L1n7W6ViJ8uFJXWb1hw3mjCSCkoQtccTHjz1u9TUYh1WR95KDSfMJ9qEGPqfxo3GmvFesxNT7rr8Mnanen1U",
  "key16": "5HjN1eMmYaojYxYHmP6AhC6p4bX4C7r8eRHiEGFZZLh3c6hDCfDxe7ezBs8s5odFYRNDhW2dTcTEj11xQEssQsUu",
  "key17": "S3k8a29A1pGpjFChJXVqMrTtRrPq4dC4VBmMzvoxKsf3yfWkMEVJWy7QXfCqZPsqRnutUcSXeyX9EqtK8UsTYwN",
  "key18": "2R4TruQuHQpn592NEsqutvsweyNK2QM9cDPk5eKZhBMRgiMttLsMB1TaQriiXBLP6hnSwAmB8z5FaStZmYMzwdok",
  "key19": "AL4uv4owL7s91bsVz95MP72fWoiEraznaCBzypeqgsYoobTsjAGWokfm8LwQioZYtDf7AoqwkDLq3ju9caMqvNT",
  "key20": "4iXnDvoErZ7d8cvUjuNNUf9Hpwz8vAWNgFu9QV3kc9TMmQfXJLJSMjjMxqacx2LLdoeoc7mkwwaQk9t8Wbih7Eyr",
  "key21": "2UpduKKSFSQUe9PaV34LVmUgZgEWWQ9KK8yXAfmfo4gQY94HPfxTpWgMqJqZCAmskjcWuzqbxynhcSqGiTcojMud",
  "key22": "46ReSncP5TEnA54n1aCGgAyGpT15tE82RVEMJsMmrZCduHw5R88TK773DoypXukGjxr8ztnVS8TKuLvMDmNVtbgt",
  "key23": "3yt3LJ8bm23ZyusRtwABVrqdyENiNu6m4Pnq1ymAj4eSvxYi29cojKfneYJuQGv71VotPodTE35G221uZA3ngwp9",
  "key24": "4ruCPv4Lp2rzXcF1DkDwGctDqPj16gEBE4G72ziLZmj8wEUJ55cuZcaybkRsWYBrEzX4d9EWPWcS8K1P6WoCAPis",
  "key25": "4TMf6hmZmdwUpmBVW8S8iS9bPkoxYtRE8bNbNpMWyvoCV44xkg6JKVtxZ5euuCudM8MfqPRnJKZDCY4Dy3ukVFmC",
  "key26": "C4in5RexwLdYS3yThUtUoUDMLgrV5gdT8TdWRc94usdqL9Z2KkD3QuMVGsaP5yubNmkQy1cCyiipZFaNzrWaUGm",
  "key27": "4Biudkk973rMnMHxB98AkXL2LTJKvJAEc3G9AZMAZS7vNQZewxfCEKWmGiULQZgub8SdAc15kdEU6wYXTCs68U4v",
  "key28": "UFHni58vb55ngUwgE78k2CvqYTCB9mLE9Mmyt7BqGoJsHF9gMcXYijXKD8DzhNLhfrfqSQzeLzE9A33QyiVXwii",
  "key29": "Evcc7Tx2Um6N1TxETaeHuZyUS53dcmprCwJod8RaUgBfZevd7PDtut4xxm6bfah4Yj1jAtJbDD9ZKBdoRnprFNr",
  "key30": "4rqbRX8nnzKCcr2JN72yBotAmwQqEyeYZhENCCYeD3efRomNPVv9JgxJongb1DkXqdLUspjdYgsJbhPKPJCtgiHo",
  "key31": "4WGN1aVh79B95fpXcRRsUrThHFg6NbxPYo8Pt8MWNhcRB2FEdVt6KpXs1mBYh1jGLrTxcGTbgvxbnz5TdongR8bS",
  "key32": "2RGt8xUpCQJuhQ72CYoo8Ej6DybFVQBwLVpydPqXXq8r5RAmwbibEDJXakGVgcoxUr7k5uXURvT9ufqHJMhaRjVj",
  "key33": "G13diUwixzssfgHDdfZKr8EK3iFSkQHXZbHduDsB3ALYtde1Bb3zfkFgcEPJUa6HG13tL3uDRC1qG3Au4T5sW3X",
  "key34": "4CtjioqAHzyZueWASWJR8TzLuayxpdxhmrivSUVuwYG7PpSQrBzA2WxLDr4cMbe4ab2qwcHVqeh2khLUawi8sCHa",
  "key35": "3Ay2iCnwP52gMDVeSqF6NgzcMFkoWz1LaUTNbv2WHPVvG57noJBN4XoBjTe9ixeg4XXMAsjFCtVKEATSvcv71p8x",
  "key36": "4jDEPAK31cd4GKRq3xsQbr5UeYNcVu5Z4VGoesnUuBLgmEmvnFjMEKJ1vx5wwEb2onUtBgeuU4XLqiqptT6gALy2",
  "key37": "2yFsJT7pxoQpWW9SWzHd8WX5au5pJMjsLejPCU98xpW5MafNqxpYCY6jxUeEubUd9YGwzC3V9UNFRcWVdfNhKLng"
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
