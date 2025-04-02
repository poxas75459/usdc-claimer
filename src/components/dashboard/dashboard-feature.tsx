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
    "2ZUJ661sgj6yUu7mMMTtBQj9SCsH5feXDvLbazYtg7Fe93ikJuJGhLdRqN9anx4FJFg1TTPnKrx5HvoBSpRzQTnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CxdppPydBgjGNV6nhh8Xp8iY5LHh6LPeCuSnGCfFEtPCkF59yrQTpS2iytrbWDPdJSoTRoETvQoNntF8EutUhAY",
  "key1": "5jGfeNXwf13PUkaE6tSgTbspznZG2f6PsfYJQbEvCUMfzvmGKbakK1a2NwAu3nUmum8CXaqgQzgNc4KVTELu999V",
  "key2": "25TXj3A3grYBVro5qvSf8Dd9trSpJpydRXqhU94JXnbDvfqnU2xQMNMdasasrVr2fEGcjn9snzXZqGxDsBEWVAfr",
  "key3": "LoNKw2uQK7x4KKHGYzKE4LFLWs8WMnQgtQnggcL7BpmKHRTYA918N25WUvu4y9TdZcRdJCP8xRkBhFsjfEk9kb9",
  "key4": "4TvEU244N8ZzWtx2rZBHrGzFZaF414hCg5XkKfAyp7nwG4PRHbPiyj3qiZHtdsjEduQXMANN5AS62SiZrfSixQwQ",
  "key5": "3aKrcWBcwX7jstS5QrpvVVq3dFdFDY552WDwwoZqwtvkob4y7CD4hN5Hi3vMqZGP2G4nnj3CL4zhpZ1gvhMVcETo",
  "key6": "3xd1dNg91uFEuXKTGw2YfU3gKXvEJpsVBFo1zhYmhfuGaUuyEh4UkgQZa531Y4ZRt4aRSjL2to4DsZjKoycscMJK",
  "key7": "5ZTt66DrszATo6UXfpfbCfUx5B9waLro5GjuTcLtn4XFcwPvMh5eS8WUofWqDNZc8NczcRznCdwUSbg3bydh1VuZ",
  "key8": "2LbtEtioLiuKgdJkex8RidvCAHGtxzqSLxUxXTdmCvMvj6nUxrE8go6asT1UmG7csmtWUmyL3cZjdXN4BdZiZRRY",
  "key9": "2fxqTskhGTqetvxJFskvH4CShPPPEcNpWnyjssZuvCktrFCckTCNosg6gmMFgDPLhHc5qkc5t7gjaMNA66ynVcyu",
  "key10": "55do1ZAdDXNuaVg63UCb7GBEHuWaFWEmb7RKegX7DPoGC9mbYgsg42HR8ranMDECDMTFeGaujXmz9WdSCs7kBHE4",
  "key11": "3C5cVoWPD2nsmAVDe8Rc1FESwwnbW53aTgvn8QjnjQiDNMuPkKwpZ4q6cTeFnrod9m39WstjCEEbToLy3YjY4Zo6",
  "key12": "4W56FkN9AWF96Cqjz9qN4apHwy61oX7NaVMVBQTh87Xq1kqVAuFaVnkJXGCigqLADc5Wy6WVNLQbFFu3BzbFRK18",
  "key13": "5xrbRvAhsvyrQ2ie55HL3dYhad53KpX8q4onJxeJeJLbSFvr4G2GaN5xDinWus8kPAw614q72p6dAT1a5tZd8FJ4",
  "key14": "25yXoEPQW5fGQ4kBzckcU7JBbyGFqJa6Bo4fPVTLKQNPcS9YyAAi8gAH7pLGosmxfTUyiwgpYED3phtmURWpBwLG",
  "key15": "5pHTNAEzuaQgtSk1CdSVBCTTbkW2ZjQuyS5wCY6yvpWa5wyKT3gWyHsBtoDPUM4WmJpJqprVacMTwkt5XFgv2r8r",
  "key16": "2xfCs2Wr18wUKxRAqthw84waTPHSvv6L4xrEc8w8GGqESFkqJCDnPua4p72hRv42BMgDS4ckVnFgxKTG2DNqSCRa",
  "key17": "3pwPrn7FuC4NPgdpjmP4mSujGxeQw5GmN5CgM7mspx3gbzUmuSABowrc9efG5gSg3gGy7Vv1xiWifoD3U9iMrHz1",
  "key18": "2mEtRAPRf1XgCC4feWvUZCtZY92nYAq3dpED4T1Edh1mrUFv8zBjWbHYB5vcaWKTBqUiKhTsRoXFcvSu5ThwBULD",
  "key19": "43RASSWTL1CF96N1p5e8gA7oCoxz8NLvEqu4JiwFz3aXUB2mNP7i5kx9o8h23eYFz8PnijUUKBDfyBXiwdqeGDMP",
  "key20": "5pqP4nnAk3W5QckUKJVkCBcqXHJVUpjD1NyHWwt7AUpqw6KLSxaJeqn4ybPZg11MCvsWtbVYTJ2thVbwm9sp8jgv",
  "key21": "JDWVzzw7t3iz1cBVCVTpyhd5vZVMTv4r4yFZxzBzn3jRZ3MR7RaXrvSYCrrH1LQSsbFcoT2JMfLR9ovv4UWCqou",
  "key22": "3izgtkM8QHGx1pbcfjA1fotZiyWatREbUisBNzg55xAwhxPvYW7HhZNRseH8v1taLb39ECeh1RS3awKeGMEGB6RP",
  "key23": "hEBHqMTeDp6QUrzwdhc55Uh8Hyb7nWLtyZDDsYqtRqpQGQ8qhRm3hKKJtg9R7C12zvijk68G5ZG2Yfp7VFrpCjc",
  "key24": "38JE8jb7dLBTVqMubKEa43Kh2yxhiBAehztCYb5AydH2VzJ8U9bRvPW47PB9MSF9drBawqkjRFfEyTUWPHmpGkrS",
  "key25": "2VK2VfyL982YxBSqrpRoRAmG9yjCXoRNrCeuhFngouP4H4qSRCpW2sASREL892krZTQmNTuw1rSqFVACTYkbHtvg",
  "key26": "4NXd68wQrCH5WJwM41mTx5RPLqEoSW5SQnL6gWQGLJAe9S5RtidvzHNQDN4ZiJGazZChimMYERGEpA1yjd6MYSix",
  "key27": "3hP5REJtWxN3EiDXRJjxRizWAXA6XNmtaPAWvejezwDeEHmkJzzVbSwiLhxSc7bowhYAJf3j4nUxyoBTmgryjBZh",
  "key28": "LR2FpjdwYqyLfaHPSVLGPJDRYM5Bjz6A37yKGqxKddFb2A1JzXUbmbRLcGHwXiVyHbirPoeM1DCCjowBNh7fQFB",
  "key29": "5gES1DjxH4NMgBe7nupg8fxTHUr5H3tb5DAZQbJHMk3SJUsZ7ZzToTF5YxZKHFok2UqK99NYBK8HCecwbSy5QSwu",
  "key30": "5L2czCGJ9q8Ls1Zoc8gDcHDR9ZiQpLbgnaqTiB7qsuMtiffYfpm2iSCa2YkwAu9n9X6QZFoY9JNtd7BnH9vW1nBd",
  "key31": "mSYRbrsS4psXPTCSGTWeqzoMo3L2g98y9rQxBnKLHFziHAaj25Q73yQKoyACtbfrptJQ2Gaccq3qZwcX592RhCJ",
  "key32": "22up3UdmgG4jEKSJEJTHhn7eZ3QyCtWzG3SXVXsCTEjGE1vaLeFv3MMeXXca4UjyMhgogGcveK6ZRsBjLK259Ey4"
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
