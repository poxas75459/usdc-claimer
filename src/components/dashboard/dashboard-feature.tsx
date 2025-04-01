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
    "3kygTrsejCdaLrXQhuG85pdWeqN2uJ6mcgQc8WszDPxvEaP3i5t9GVTdii7CHGtXgtqi3EAcHT5deyLZEWSJr6j8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "om6eWRGWBryWLvG7r17gtthZj39zZUQcmTzuKa5ePJqcAXgv1KUMum85k2XCg1VVeGmLBw96gaHr8BFMkxdBLrs",
  "key1": "2YnSyx7p1oQDuj3As1jLdwKH7qFpCffy3NviRT42iSRtViapRbUUPu7aHLmoguYfjPLuBH8rL1HpT44kVEy3CJP4",
  "key2": "wCVSs8Wbm7gcXPG218seT78BFwNDjtTUqWnDvNRJNbGssVx2RhNm7VViXFo8bHzqQyDwJEZZAfGbf7gE511t6Vw",
  "key3": "41mBVJVhLYG8LDtUVcFq9BG4TPzVAddQ7TMiamQnbdHyP9uz1EpppGgyF8PnYTYTsbTkm6WoQcYia8Wv67UjDvyq",
  "key4": "3Zhhfdk4RNMqF2KJQVo12bfstksmFRWgour2uXdaznTccfHhhJwDaxR5MujVmz3LhncsM2R8qc19EB6mYuXcaJDS",
  "key5": "2Czub6jmsrD2DHrrRdp2qNcW89fXdHGhXSTucqR9VDxL4wRzG9G44XiDisx6m9jegMeRX4B59YNCvWu2FhYuvN7r",
  "key6": "uUeGcK6fBnqPFpbSMVsjcjYt52cTuYfSZVnYdv6oyZRruFjDvx3aGjkrmd5pDSwAgVQDjhNWJ4u2SR7j7YSoi4Q",
  "key7": "2yiViKXF9RCK4kR4hgxn2FVxdA39K4UHTw8SrAGjvvvD65U51syudaKjo4ue1AaWhVEzQVqddytTZxjdpkzaM5Tm",
  "key8": "AGVwuZDeM3HtugH2P3gewfhui2C2waFjYeY1LxxPx8mAF8mgNgLoAYuU4zVJLGHAaTQHy4GX23ALmPHCYmgtJRn",
  "key9": "2CfoGjnExhpo4CyQ3GmdCLXUmBpEgvSM4naych8ofB2LhufP4MBmwYRN5fiUfYGxw6rddQS1jrViyxAc2iXb46wz",
  "key10": "jC9tfq5JtiSu1oDHWkGmsnBB7mRFZehy5NZUgjHXH2z6pnJqoFejhSYvQoX5WtgttQsayLicpqhkHzHeEXdxmD7",
  "key11": "2ahEXPLRi8tdoYRaaCco67a4FjstBmmYHtSDerpaTMGj6ucE5hB86ce991LWY5Qie9K41LiNGc1Ef9GBQLiiVb13",
  "key12": "2dvoJ97yqruuFRZE6QcaUD5TkG7KJNAhnv6sP15fxZmxypbDr4tNm9JSy3y9cPA64SNMkB2987gBr4RqAaTbQx2Q",
  "key13": "CsHFh25QbbUYC5ZrufseqxZbVnq9bPvbKM8ZbhvQGqmMYgz68LPLDNvrCiQcH13Ed4c5VqHmhsip16d4jwWoDo7",
  "key14": "bHvBKbBqjTMKofs7eFJF61ZVJJ9dsNrs4572KiPCkVyGivcPpbSmXFPshy4cFHHwrnFbdHVHnQqgZuFVjFNCFvK",
  "key15": "2Qp9EFdV56jeQk1piEDGrE6VKSXwYV2zhgiZK8L1fFXtWYbHkiokrx1KahPsbfczYFc1qbkZv1cpj3cbtNDJxaCt",
  "key16": "2tqFMius11SZQDLpaVFtLPdgdp5BdHTy9zCkTGLTXKRm7Kz7CA7Dj6diUsauk1VtrxxT9YfN1MGsqhcB5qNjyMZe",
  "key17": "49hZKGMW3SrLv5o9QaECyzaRGqhZvmmBWjgMu7FD4MyhfX5zjasagJn97m6EpkR5jTi1QAaAn3EUqU2e7WnAzYSg",
  "key18": "4XqzsZse2YZThJ7YzjyTJ8osjFU1UetMuanFDoPPbRyeAdrcd5UjfReHHfTK83eTkJeNtdy1EydbcMDHJsnyBTdW",
  "key19": "37bETLs7zNcdmq3qupYPyZrwXzZHPP1rBo81ALTsJRouGUwCzCbobB93D2GGk5bWjnqjTJEvmXAXgDABR7g5qHbM",
  "key20": "2SZ1JPmGkdZZcrB29zhYjw7L3H2LhFqZJfeENvsv221YkvvZMagTMg1XpkMA6V4tnpSWpQBGuuof6F3Nr6q8Ta5S",
  "key21": "2XwcLEmuzVrusavij3QFUuGfnHFyE2oAZMgQPYFZu7hs8HFtJaGF6CU1rwH9Ko9qaimEbxpxSTdwqHFkciVnowVH",
  "key22": "4ckQbKnUzdF9y46xZV3Yo3ErhmWHrZcsv7wcC6YxXLs8sy7YgZSH913itcpw4zjt8RfrBX9yETqMmLJTPWSCWtYp",
  "key23": "4weTiDcSwokw9bTiFCCUvAA4WCepgE1VaoZLtKm5GTMJPVgnspqsM1xsYLhzAuJ85JB9B2SaamXcYA7fERGwrauo",
  "key24": "zMyFGvmuLiVboe5qy5vGRqLWciQXgfbWZQgNmEFfd5Hb7DPGKAbL8SX29B3uLX86gZDRzE8YPCPx8rMe8HFHrhh",
  "key25": "4yHdqz34yJWtd5zB6sx3SgPYP4GtbsK6VNMebcNWbaDxX9uiZda3kJ7LXXeBSW43fAZCMB7NezJibp27stSvvs66",
  "key26": "5T1S4TNJaepYFoRcsyZMqL1xi7dHAHFPBNvaE4zmojsecVdVSLmJacoZmWrKULQj5h19iJG3JprQJYK8boaYTiEb",
  "key27": "2JPazAs3pQdpHewmYZnfQMCRKQdufggNPvwpJcN8UhtcWTK7CjaZuFqLcv8yStkQgZbmwxSfWhrn6xtoQWJVEtwo",
  "key28": "2eqDK7ZLyHKR1FVdMa3CYmK12r52ZtFX1f6Pd4xAw7xtQznjjmGGJQrf9egwvUBL1kWUqdgrtF3cNU9bj4hQ2BWe",
  "key29": "2DdqwzRZi8X8cU3V8ufrgr5y5kC6BZQACXP6CeqSZ64d72r7cGNazFsKpACmyiFTESXZkcJCqxpEdVw2qfj2h53W",
  "key30": "4RwPmttkpNrPmcs9ocx4YxsdKQHtNTL8N27gtS7bT4a7X38Z5tc5KRvUmGJYMPr3JfHPgv8MUS6FhWQoSE4DZeAZ",
  "key31": "4kWcCW6JnKZcfaToeK9YXia8Fi3iJx72Y2RTuGaMzGZGbVzsgUbw6pAgRxTevp1rVrquooABmZKeKX9uzBsy5nAo",
  "key32": "5ZAxXGuVs6GPG2EP4V8vELuNspMsTHE9wWDRymYAMA5tDSjPfNin9ey4dz4b4PRcR2AqKP7WqCd1LdSWhEhvSb3D",
  "key33": "kbYMxhURYjrRKFCdbLUmChgxEHDvytx7XLhAYmptAY8FPCjjTf6UsvAbCMNsvzVQcwAjsY9Kh55UAmoy5AJTFXv"
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
