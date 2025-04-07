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
    "5TVbQNayYdhBmLm5A63Cm8BX8iGNXQfJz4XNe5eWrggiL4efLw3tNE819wumSU1zgkwuokKckGbtjbTAaNwMB6t6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5dH3tnSgTSR7k4ApvUXXoBz7M2ZjMCHp64sR6J7aX6wqf95w3eJTqPphw5QLcZrVbT2ksjuVypSrGzV4MvCbR5",
  "key1": "4kcoUKS6KsF1HYdiuAzziS9F7f1TxsFD9i2i42Gk71GzEGhpWfTbFUrk6eHxgsgCeMHC483MEJDTBVTuayLT1A2X",
  "key2": "3GuDdWzCcVe23Ay9mNL9crPRxb88cisMZgvQVLxyrs3LmSq4AiFoSu4DRQGigdiSDGTi7xGmQHDXnPvv5vvsfntY",
  "key3": "52tgtB4yjP46Li3mqzqcXdTJYUMuc9TJgG4vXb3QgFo6gVq9zxKSJvbpE73zycsnMwLUgBZMXQYiq4dyntUaRXXY",
  "key4": "3ceKBE896aKnmVT9yeBeDR2iE1hBQj4gnh9nUPni5GS4JuoYDLMwyQjkngjjFyJ9Y4eShZNRPt8KSRHi1SSYLUjx",
  "key5": "2TdgGKLXwEhLpPBpYtc4UXBX2pn666gctRQn7wixioKhRge3Y51QaZZM6Kt7TVTiArnN2xMfHCyQhyjCakGfo2Vd",
  "key6": "3LrnHtrQBah4aohN6ayJURAQKCEpMHKMqkdaPFuDMucfvWqVmTAoRzBxorAfpsAkjypnqq58uBNxxEo8MNYQ3KXG",
  "key7": "4uEtzFbo41YvfjpCy4iHe6zGW6VYP9WrPb7yPV2rtFGvdSAgRaF6kDz4xqLgpBT5YvJnnvmP17nwXEcwYfDDyj8D",
  "key8": "UtsYdJnkECrzsF4qkQDZjgay93PeQU9VM6qRZ6Y4VFG3ctCH7QKrNd9BdLZmwVrjd2ryMEPz8tzSkpSbFNn7r1F",
  "key9": "5GMGp3TFMyQKLtmNRYGUuqz6qDcMnDG6kPgyz5kSP4UF3WPwcWD7xHidbcMWbMGxhPqtedmfW1HFc1WXzUiwRRE5",
  "key10": "3S8fhXbnaUAPGzHMR9h3n5HLgsee2XKjwppeLziZgnuwz1ykKkUA3LDdsbfzY75dXussMNe1MUfBv1t8BT788ciF",
  "key11": "4EdcD9Acinrn2KWGMxDXTispxvigtrMb9eWZJzyzNDUhJR9YA1CNiUeTSWy8Z4LRC25PT2ikcBvwccDdt6rBY4uF",
  "key12": "2QptKgusCJBhaz3XWMLm6dyFSrBMSXsc5ChfSKD5cYVAzZYcW2nsaWDxw27qJfPJB8jTJAnFj49cT8QqdYTkLfaY",
  "key13": "4iku62EYjuGRWp3AAmb4ULA78zrkBxsEFMTciT2Bm5yfR85TwDN31F6Nb1nCqMNGAEvDChL6g86jmMBu2PvasyPp",
  "key14": "5toyF3R3e8Xnn8K8PvtyvcqVJKyFngK9exfMnbL8rfccpL8RHB7FCpixS6epS434cWg1XVsy5kuL5K2XxFjTghyd",
  "key15": "3PDomjADSEY9umVuxfuJnMBY3G4HvGoksMe2SebxcW6mx3pWr7NrRgwtCxyZ71nxxiExKUg2NrKZttyd3GMkSyc7",
  "key16": "48LWsGQaFQZT5T5JX9ffvkasSJoTcvhGHp58nrzPD4aPF7o2DuHX5zQi8jf5KYzMVFH4m2otcui2peWgsohKqJCW",
  "key17": "4EMDid5nDXky5si1a5VjP9uYwz2vEmzqvtU9p5VV5LoSowh6YL2vUZngxGRUmG5V8T1N2oYELuKeYavTTswVKLeV",
  "key18": "3KqX71detM4D2MLzCq3H6B5Ve9BdmSFCe1kQJh8T9NfHxi7n9RRoWFKRio69R4tmG9QGpA2egeLGHdczpPWJWLWd",
  "key19": "3mmpwC7YZ4EabvTmtX66FmQGFiRe2EHdBNXL6nR2aWJvVGY41iKjM3eLqjupD2RNMS4pq8qZbWvfbp6MaNn3bQWQ",
  "key20": "KkMKdX2iDiLABPtf1erxhMUPo8HUGikYxAD1tvpasFTgCTW3SCbhYPGJKjVWzjiCLBrimAEbhZPpQLNceCaCNYg",
  "key21": "LiqzBiSptjtc7GA2Rz2EC4URCABhhPFob8GRi4mbrKRnkM3vp6gKACYuHpvFqwALQK4ELWgka6y4oP4hEmW77v3",
  "key22": "5oSRryoEoV3Dsi5b3VbdDt5zVWVFVQ2hZsx4E1qeGJ9iFfNx86k4FRLVuqWD2Ei4ZmaxL7ASLZD7RGwUFdKVUt5H",
  "key23": "5h9cJSFwWMrsTyRrrAs765LEE86Y258GbZTdRHmcZvAgJvtKNsSR4oGeNnYn94YBkpHygzFRL7965M5RLRv82RNB",
  "key24": "NuhAjHxPygJLpCQWWYKYhJjgKB2biv4zoxbF1BNyaNabS8r1PMktTh5JZwu6jDZNykzD7UWDeD3sTy6671zsBjv",
  "key25": "4s1jbgS9ZG7d5jYoJqmehxmUUwkEd8zQRNpC2AjpPXY6Ry4cqhRBgYgyWMspi98kYXhKHpUxUPSsbL3xXnBTjQMv",
  "key26": "3G4SkpJTeBLXUoMMSdpQ63o9ympUcirGdWmvg1qwHKzqCJWhBWEUF64tcs5KHWCDAppNDuBK4wcuThaLDw6re94Q",
  "key27": "4N2qjrESWQM327fw1JZMKM6TcSSuw2HePNKppoiUjF9njAdMUeehaUEgPQS1uGoQMznMmP98t9cqeNrYcpf9pvFt"
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
