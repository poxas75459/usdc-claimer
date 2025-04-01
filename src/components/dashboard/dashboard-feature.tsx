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
    "2UB1oN5oV3RHTvAP6DrQo1AWgjZ3UQ7ybMNw5hPLZcCoKd37LQYhqEyVopiuPL2eSW1F9KPQqLQco6YDMZJe2osL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUFungGHq8xLh5xTKEDcn31Wb4ChmbJmY7PXHqvpimktmA5diJvYTJSgxrrQY4yx5jESyuayV7MFqKccKBN77pb",
  "key1": "2eKvQRPPqeKUY3boPpmeCR9k9i24eiWuMLTFh23poNx5wE4udGah2boLLxA8FWaJ1B4nhRosCsRnLDoRqnJY76s5",
  "key2": "66JdwPTKM7GkyC7wmfdd8JgP7xSbFScQC9gLwy7htLZg8N6vbnGGM7dFZRmJdMummskGhaDiwekYF6eaZgFxKCxs",
  "key3": "2Jzjb61ECgkqQW3T4YZgatGHWuG4z8e7sBBKB83vbWDp9XNUn6NNXVnfh7eSsii5e3PqCjmDLuSNuLtV9gUH5jRE",
  "key4": "24Q4Cz1vF4STJXMb66tJxQ68JQZwEUzfGG5vqTQASH1mW3YRs6wL1unMPnvcoXAU6by9tEqEJhzjvKrHjnugSUyZ",
  "key5": "F4De5p1jEdKEjVUMvQWirkPqCFC39krXJVDsdm6BevE5BWk2qKBp6GTpCmM2t6CnxPR53m5zBLzADbqPzMspfPt",
  "key6": "xMrws4JHmaKxKk6f35kVacLQAL9J7mR5WPuDXNP28gZvDoZbFxu6YgxRh76mnhHbWCrKoGkot2fswAVwWw39JbU",
  "key7": "2wGa3xa7absbCc9ytMEKL1dzvcAMRjQeziMkxrQUushY1XsBDcuaVDR6c6Z8ArhcQNuJEik2KRgRvwZohKynKZKV",
  "key8": "5GGAS44Bj8VPphecPZK8thHXqtZr81Kj4B2pyfbXhm4HNbcxX58mZ19qqBLnNxkcKx7LCwu7BX5Nech6JxRGoumG",
  "key9": "tpeiMpWmehsPAtv945F4uYvjLcuYST1GpLTiKq5bA1XHCKJs61JnWhKx2X8sDgRWgL821kbz4NxVtrPjtzmzjrg",
  "key10": "RkgMAJUvEKmLZ6EvcoNk3scXtifFP4ySJ8bMsL5sa9iyDHgBqDaixf5h49mQcmZQJgULWnTgkmkM73BJQ1rzR9h",
  "key11": "5PpkKd8itrCHMR5jR2psxxpn4apVptiKWBxDTESfLhyEY8EPJWdcb1QRZigkN3E7orkD3UjBVMzci3A8e2gTmMHF",
  "key12": "5ffguHcRkfmre8oMDUi8pT4TvDiJCNniJCSiAUpka5Drhp8bkxggC1RfhV4sywWzhM2Y9u3GmQQhT6fEwGKcfUcD",
  "key13": "mdBPGzAxrPpwGscQmQHDxM17F7Raow2E5i4vGyJDqKor9HnSSWVEbriyE1rZwnBaJfG7jcs5HQuRDB1YXG9r3kJ",
  "key14": "ZjiRso6DyTv2TL2cHSDkBbjXsveMacTNebe4i7c2i3Vi7DPf8q8yRF3aex1tSDFQ8AybYnxsrSn3ekktKhK7b3J",
  "key15": "3jsreupqc9pTLXSSZ5G5gcPFJhvixyKRyvX2eGL3cxyk73JobDvzMeejYxtemJbdofJHCZjWnNVMxzNEmfjVFtXL",
  "key16": "5U1LanAuuT6HMz8XCNXj1Ne6kYvjzGHDgirhYuwMKfTbT32FLL5EBjRMknXmxcnewrfBYgcnN4E1fchdocYB6Dek",
  "key17": "34imrEAR6E6XCk8s6XTNLVNuaRWmemYiMKHHFh7d6J7kQaLmQSHQmKXfkcKNweEsU7PBrtKBowQpVsLhtUpJVKAi",
  "key18": "3socc2rJU3wSYJpNjcgUKEVeMa46jYSnKAMLN2cfspbm27Ahr2YtNnHvWiJMJo8BQJ2B4R2jt7J6sLAAZEcnCMCr",
  "key19": "4q3vcZQpqfgkRw7tXv4TBCzVoVWeuE38XisewNstiyUrQfUkdbmUbp9Ks4yjf2ws1GdSdAkB9FZgabe47qfEJZUB",
  "key20": "644PN1tE5ospJneKtsbS6YzpjYjx1q5n834xCTfzHxpYTCUUnPGwJU9sTt3WpQZhiY5MaQn1ZwTPbp6D15rnVmmM",
  "key21": "22qBLRgxUfd4aoJdDDfP5r49mHdGAa5rbEct54GJ2aFqRxip4Pegu6BT8iXXeD6ja6hqaKDKDYCycX1xs63Y3FBq",
  "key22": "zgW8JY5eH4v4zKoyD3PjAdTJHhPHiLqePNFmvwo9VY9U3AJJRiXhFHtLmmk1PmkhaBtuaVctgYPP6AxxhCP4UC8",
  "key23": "2h9x6ErKaPgf2ZjiUdn6s4N7PBnqv83ywexLyUvYNtzTGeRPN7BfaD6WgWdy1HS7cboxxmTkrwdAfuJAxrMcXDRA",
  "key24": "3uPbsj5MNgaTEcT6WKGhJyeac8WKnpR1jVcEZs5fCbMwmSQrQ9QtnmWpKqty2Qus9AuLyPwFtjfAFhnMtaJFDroW",
  "key25": "3WCweNKJ8cbaqdode3i5cSmghATxy6htWmBAbJbpTqXysGnyqBusA9GjYZ3oNjwTtbejim6L8kXB7w2npGkLsTX3"
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
