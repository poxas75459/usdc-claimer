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
    "3qcJ3W6kpjuPsSLbY9cV1yuj72dpP2XVYPhKLveGqChBwHgWdFutTrb1XAajLJcJD1dTEaCyvEnyUUdYhCujskao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5EfRfMYCRgDA7W4Yaot2gw3f2247rqwKZ9jtvSjyr4YbWTbaJ8L36uoVehj3aLaz8bGipMiiRBCKezMHGjBj5o",
  "key1": "2yhUPm6pG7DpzHxvFCgG5wARUBspQFp6fVvFpusLqS9NbhrK68BpWXSXw5aJPuQRrVjmTyvKfDZQEMabxKq5T1Xd",
  "key2": "ATfiuXWMkxc8Z73ZXTVJbsiNFoGw2VkwayC61UTvFKbn3jjijLXiJtfhdWXBqnDcuEWPuraYEw1kSgpcjxQR7SA",
  "key3": "4yrd5GZam6k8gmE5YUNcKhNFowcMshfLYw4aX1Uby3aZJBA9sLzB85nv9xvsFPWQEUqsZvogt8ce5JQ5EQHCz56m",
  "key4": "3Y8NiX2cChCkv4BREcLw3c6GRNJKFkah9a6aHhgFSm6HWY1BcG9tetUJr9sR2MpcBfCLGLdivXSkh944h1qC6BYH",
  "key5": "4ufTSnqLWEt1hXneizvkb5a8HVD5MsBkW5EJMXP6JvpvuFJCPhZjjTg6tbKtKvZDjSs2dKdwDgYaYjFa9iM5JhRQ",
  "key6": "4a3NsgykGSRYsTBDWfUDqEQv15kHUXsEAn9qUMfARurmbKeGgQ1WmEVm6MhDj2YmAYabH7zYSm1SR8nSAPkG5EM9",
  "key7": "34epEsSrSK5VYoAnPrmTpmxDbJYvjrAjdhdAwCFjySj5hhRVXWAkCmEriMTaifPCRcsN2ZYTPdHnp5MZNwPJXjAW",
  "key8": "5kGxzcR3uUTrh6uQuhGyfBYAVqzR7tu9QEUb7CvfhHfoG5kcLiXe2L3ZgiG25mpRYK4urderwXBWtwajHx21A1GP",
  "key9": "EmzFDEtdLZakBRpsGfDTiScoCAyb6PFZ5zbE8MHZSiH5GTQtqRz1UgrktYPrMnAoDVo42sLAr7P92LrDSwcN1Wr",
  "key10": "FxLS9JtceBti6tzHWXooUmRr85BEWaX7xpHVLFdANJkmJH9GQeg9Ckfr4iFAPxgS5uWhE23fGF8RAsmG1e4kDcS",
  "key11": "22LJLtS3wkrJ77xsRVWQTw9SdheyRFAwMWSwSTzdJiiXxz5HhYG84eNDZhdNGpv1E9LuFBqb9y9hsGeRDzx7fKxM",
  "key12": "2TiZq9DeGcg84qRe3sR3ifrN9hH53KRqq3EYxC5rTAKFAnzqF1gDhAnATKYd1WYHQQrpKHuPh35f35Q1HrAjuvWS",
  "key13": "5jAy4TavFLp9ERrU4gVSnfSTjr9R46wKxVrVY1rAXUkxdgznGrx1ZhTnUbULyXzaPccdB62dLCk5LaL3J5d6z3aS",
  "key14": "oPDdhaVbgPTnNizvhBW5xo2gBqzCXPBwdPom9rkWr3sDj5pdbRp7NbahLfeWEDmBBhyrMhDjyiW1Hy7DLN4zHP8",
  "key15": "2EBfjJXaywoZzVhBErw85zphptfFmU2T746MVjhfJwodxUSCcfbLkhaxUBYaoa5AAicuqcTTv9s7vTGz5He9wxHQ",
  "key16": "2QVRoiCk44W7kh81XogbbGFjdrSS4TrC7hTARaLUR5bWe7c1Hxbzj5ZGhbLvjjrYApwLYC1XgF6Vk8vXg6XxA2jG",
  "key17": "4zVF7WLAT2mvgbBG71QQohuHAs2hurHsvBtEPcrBiWQm1SfPWst545bagfgJLsne2kW273vjrAonxupCTdaBkb9y",
  "key18": "3vrZhrMWS2JpLZZXoKvQgv48vfQWH7U3uetz5dYToLoXfUe6S11LAGQjwxSRTgHo1kzxqzvf3BoXfGManP7jaodT",
  "key19": "5heyxnp13s3utfnditbs6WWC7K4HjFThA2BYWpu9zuGBbkBr7y3CDm25b2NyS6fFntY8jzUf9koji9SAPieS1xKa",
  "key20": "3m7uCHeUD8FT8yPxf5wintLSPeVMabvfEiSWvn8ZyQzrTiJD3pFsf8g3SnMJnHeLWfsKYKCh1Z8XzNFkpA8QvgWA",
  "key21": "5mNY4Vxt93GgqUhJwT2RCN3pACBWHRCU6kcVA86RbYYRPyMuGsw7TADWpdpDsPy72kWNd3SAeFF4Gn2zj7QFFe8w",
  "key22": "2PzNpYiDkxsYCHiEqnvznxVJDDvsUjzLZK5nG7sxcJGKkEkZFKFHt7GLhMaRyQH4NvH9iU2zAnDjsp3eckLZkBLf",
  "key23": "5w4Vnq8pNQ8LLPs6GmmgPwt5ef6HhpSahgQj2f4pJV1mrSgPnPHbYu5JJXrcbkt75tHVEb3yA3ftEF9kzMJTtXtM",
  "key24": "39nc87yfmHLuePdHqzjd5fcj5avEVHBM2ASTkvsqVTtGLwHTjmF1QqWXmnd5aDrftg4tSU9TqAMP8vsSWLCyakeQ",
  "key25": "C1EnHVWDSMbW6thg9VJQVfUChhHVFZTHbefoQNFRrow39B25fLqFBdGr4Z17od4E8KrwEYJzdK2mRLtZazqcb88",
  "key26": "51dSMU92wJca8Ro8uY9a7qRVea75o51x5PGUpBW5nedftXgyNMYGkW62Bgxw6WatUmb3Jx4rRnmdJGgdWg4w7AH1",
  "key27": "4pBFc7Koc42z5dJbNwe9yNnig9mDwvsnh36gGvKQB2rVorvnYCkvp6uwSpysRK6YCrKy25H3fsupXpUoTMFyFtvH",
  "key28": "4xVwySfeDtUczp6KPwFLtE3J6iKJJcG4ZukHm21GVwsAM98Var35PZEXW5rMd6gaNQffvhqJDtGNy54SszQn8VGi",
  "key29": "2LfYbtcrDRJAUoSfE5QYfSRPZ43F4ALaFyFip3c878PviCstnBZeoSz19FZNPh4goQtAHNJTJ85iGvPmwT2CnQTF",
  "key30": "28MhhHuPMitDVhJw5FMWuiLxmmVuATVUaraFdHAfbemrPFxoPUyGZ8LJAzqj79EBBb8bWaMy5ttLahcezDi5rnHT",
  "key31": "3Bnj8qrCKCiAkqoTys3rMMnyBZ4mbRpdaoxYXNa1T21huD1WzjQS8xvUcifZSqYeaksr72Hgxu7GPyEX5kh2TC7C",
  "key32": "zf8Nrtdm8EngoqZeinWpFqAkbwHhGEMQQ4u8aLhEzodddrxsSFWQa2GW5dUYoKMVyMXTFq6LPwQP4YLMEsU9vES"
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
