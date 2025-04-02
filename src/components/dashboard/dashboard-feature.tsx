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
    "3rYuX8usZjbaYUeHeuBFFQ1Xkx87A4tRNSHUUb4iVuokyRVXfArd3ZwdNVWqgfgo2KVPcE2z5khFX5EbFPgG1rqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LH7wWkBYY6eKrLsFZY3S5AP4kttx9PkYf9cKNCtaSHW2bWPaa6aChNRTfYAKziMuCDWCtSsMKYjbFmNKB8iqzQ7",
  "key1": "ksQvkyiuyfPeALz77r2v51NXGjEE5EXwyCSQiS4TGpQsspe6x3GXNS2AMtFa5zs2RHbhcR21q2jwZBNK57hsX9Z",
  "key2": "2aYFxUt6jJ7VHsDvUd5U8bKzEDXkZNUDK2fKFf1MbF1f87sM9vuLmx34Qw5ZtjEjDQ82E8Vz7Yv57cMNs25nwoQt",
  "key3": "VhWh4bUVZhqaBNx98xhonNxfGM5HmdtiSfzrWzb7KdSiXEFWajemMy7buKTZs4ks7fzvjPCDyPHr83To6MzWPDj",
  "key4": "fFbfHUPP2sqWY6eWsYE3U27ZDM1JbUFm6xBHqKGeddzM19xnyTLynSxb3ND6YN7iu11d8PpAGRzhhB4Hgh6KMAo",
  "key5": "4VqqCiAHXTToYmCPvVa5h9c62kNDMYxSreSkVEm1YogfgCRMCRkoFKZLqUuTruyFvwVB4QkmYTaVMUcaMhmEnoCu",
  "key6": "47yQkf8K4TQTRKsk5DGUWd3cCTrJwn5RZ3kiy6K4eSoNWh2UeiYMUKCeXVhoJ2mviMxiiQ4ADpmGHDsyrqghxu3s",
  "key7": "5cqmpzEBWURMG9d2fiEzseh5c7fXX7QYk56v1jDKzQkadwRuDWbrdz31vB5oyhwtFsuajCngrTNPcWzsEX2DiLGT",
  "key8": "AsySqFTjkpJVY8dKV6KD6nR4D6HJ7c4AcMaJ5eoFjizeW3dKJF3qh642xri2GJrCvhkpwAUXiq5eUJPRfAMQuD1",
  "key9": "Eg31u5EyHmYcoRWZ9PSJ75LEQaEy8S6HF6T6HvDx6rrAhKjExDQAsdwFFE7AdEUbJTBQDu4FPrDJnnKsy1uTA7h",
  "key10": "36dSs4CrzuL487wWnWBw1HmQTUH9NjxmJ2HF9NYbrWKPTn13pszJhkLq7d7u1Fp9B7PnfKZ7fn81Ep63yaa8Bjc",
  "key11": "5moPeCqqrp89ZmUhrSBSSRG4nCUYJYiGYaZ3hbJ9u1nCHWB7ryXQ35yVMRWuzsABsWojwnPfcU8fJg4DgPyZbfMB",
  "key12": "2wUkUiasLMAr78H5XCP7UbSjyCWC7ooyvEJYWpsCaaCXe53qXAG1b7k4MRikz2HCgBXovqFJPj9xxKJZGnpqAEN6",
  "key13": "2TzgQpUxS2Vb5Z6bp6Samr8ji7M672SUtvhdEyPNzSHD3s5g2ttzavtZe5bmmJtqo1J849f7VEXoe3jD1goAiGKT",
  "key14": "4Tcm7rQGaWvdKQmWZFGWdeCKf4QRrFWSS22ZN7w1yFvW1yae2RCdJ8fMGGqwMdxTc1uRWpFFSqqk8ZnpTkfYV6bx",
  "key15": "2wme6jE11pkvBqUJMMZvcboUR5b8xvJqktrUx3ER7FLT5UoTSNWEyNcoCtWMfr1tnxqeQh8i37sbyVaHtGC53TKc",
  "key16": "64JKQBrZo7g1LGZBhTWJQ2V2bbXY37ersrGaCkBJcZnwQH3U15prn5fkfNb3Dc4GUg5LqJ3TT7SddKgyXcukgRLV",
  "key17": "2yiX2tZHENr8JZQvKAJddadsGqxEiv4k1fr9PoUWpFprd5z7RsHoE3QwzkfFfrtR74fot3kMFY6QSSqVTjwh7Pq9",
  "key18": "5eUh6mJBVKLVjdo5EnaBenQXupi6ACojpRagmNUzd3jnXnaR4rXVrFqb9faDaDLwoyywJAbogD7tjvbEd1Kaoqjo",
  "key19": "5Ytyg5gvEyoKP5ibgWRmGeySxZ8juRxUBvNRDQ47Vqxhm5hkDUVvLAJXeRcPRCjj2vRWTe3j8LZjgpfPRsd2ksZm",
  "key20": "53kvk7kd2Z44P5yAAyAJcU217ufgK26sLBBuCsuRNhP4Q7pGeAMNm2WgoTu7eB5uRUP1dgXivK1Y2W36gTV6xzqn",
  "key21": "5e2s6e7MSerHex3mHUFF1uVt9wAj5sMkrAyEa5u2zeBKJS1XnYghh7RUTfwxXFNALgCQ7YwPFqbbGZCUzBykhAQ4",
  "key22": "2dapfS1xt84uPeLg6DiUXyjPPjiWr1BX389cy7D46PxKeP73Y46oDnJLCtrwuGqYhJiEhGid6zbZyqWTTK7WHEHd",
  "key23": "3RhjGQYPxBgLzhqc4JeAz3LFfw4ppXamwiNhmUw4QFtE7oxao8QT6Awft3xK1wNaDkNTbCSyEMbfqojZUipC9ET7",
  "key24": "5nQQBqJyHpjMtgMp6snbtEctjnj16FRFxfTqpVdsCVES16QWri6uoGATegiEquFdEwf9rnWCvaDLLxRMLFCgTUn2",
  "key25": "p1BrkisJqsNkeWbhHyeHNHVN7oXhiV25XF3EdYGcRz6av8pXsYVV6cn1ePMw2wchBF51PLK28uUNH2W7S4PUFDb",
  "key26": "5R5iH6pmBRAVnX95fvvhYCGYrGyX6hDJYqdsLwVvMD4JAKYxkBtKxfTt9FhKqG5xbyTFKkC8Ggvjf1njBL8AzLrt",
  "key27": "5PC7C3K92nqDWbBKNkwdBVwLvSxLrYAdcgvRcErmuk6U5yyTkofTBQzJF4JnS2sNYHmEvMosPdBsyJ8e26yrN4Cy"
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
