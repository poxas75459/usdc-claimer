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
    "MuWHqMwvziCSaERszfM7F9ATnfHBnx7vXTCMeWyf5KU6Agg7gUN7wigxeTKzd95YoQxPtQqt5nSytnHDw95WM2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCEtpUaViCL2NMZKGcpBXZuFLWVigpCwqZxtUDH3AB3Mk2x2czWz5GkPxWCWM5ytjn4yDjqHepqoSSFV3dPRtTp",
  "key1": "61yby95uZAA6Td3e5cC3Kyu3cQ15tRiEdRaKT8xdp84D4ydYuKWRW7xydi1PChWg4QCWyjDnihBjTserwQaGkpj7",
  "key2": "3GNzQLmhnh94fb9NNFxNV579Xo5LreytcCDch2u2avtoQqDa2o53ab2YtvFHxdppbPAHKtXpTsQxAffqoJWfCsLL",
  "key3": "5PokmKkJniJnoFchGzSzSe8ZWdS2VqkvaLd49mXvknNzB6JfC7pQF17mZd1uHHnnHsLyvKGXQPNHAxkeGdhZh2V1",
  "key4": "NYUUFESdheq8dsrbhvVLbKqvrYf2GHmX35ravXYHYgyEEifQjxaDiPdwSXM7hBWgVsVx9kLCU1KSciZ7zMFBmQu",
  "key5": "3BjsQE3VZHCCj62p55FbrpJazvom1hRNvFzEmwXqVeQPeMmji71eWrCNeMcjZEuvKx3wRqZQeU5ieg9rb9qK5ACp",
  "key6": "3wFQV5XEFNejydF9PXTkazRV4QrTdX4tMU5wRK98nrgCm6FmHvMwfut41E3FFHTJVL9YJy7dH5QQNwA6UZC7nR44",
  "key7": "fQUExWVtXo1FeM1H9nein2nDrsF7WDt8dnJZsCQbveNbwZygMHtSypC4EejDAW5Er1ZQzvVcsbHbAHCVUE6CGJj",
  "key8": "5bZpJSf7xP17mTbtqneNyX61i8WhSDKtRxwrfaK5LgjK2ifvgW76GiVU6GG2f45Bo5ePn3KUv1o41Z3N1iC5N5gV",
  "key9": "3ZmDE7gwPM9hoxKNTnnPbgJ683HYwFFHt8vqwbw1AyQniMQxCurMBFySom3TG9UZkXpprYxPsx8hSCrnGStWp6oB",
  "key10": "2qExq8ujhvnLtYYq7iAo1toVv8HKHBq4S7V7sdFTBkXPyN2x1MhCCnHHsAM76qrS2fwjfBFRQtejnaF94PuX4bfv",
  "key11": "55xk9JhG31iz4UprGMTRY2M12wPakVLFMiS8q8aE2uy7onNXd23agFPUm8feDr8JLenYAhuz8MztUPuP9Vk2JVQq",
  "key12": "54SXRt9ernr5XFKYtx2dnyEnMLpQfsxVwzJzMFxc2LtAkroLYThaQHGfkcLvExxAXi4Sn6ju9AH624AEKJ95s9sT",
  "key13": "5GAmD7ULDKzPZgpAn7VmvUVKUgDubDxrYRGd4Y1wBse2pCnqBK5k4i17FtESYQ4GdAh2fQ4q3XKVbbvCk1vrii1x",
  "key14": "3TtJHmjA7QFVShzy2YbALpK3NdaXieo2HKcHm27Br34ywBcTipTv9RXu3CjJrpvN86diYTfCNBmrkmH5ox9pCCuP",
  "key15": "3W6KrVjJXBGqXitVqxCtqNUFHA3BHYy6wFQYkgaM71WSfQZMDJE2CKPgx8GxspyinKDefNBXx5hE5EZryRYxXkNy",
  "key16": "2xfoBFKa8LhjLw2iSkLJBvACbHZ27j3hGEfahEWXxZHhow8TMycj632Z1pCyNKDaouV7755jqqL3mgJRx1cMkUHy",
  "key17": "4G5ixHhAzu4jHnwwNx2jhs2K1Sqf52SJsDhYrpVPAZNaUFEFyPkinnRA3NjAwQe4yma5CcpEEVpDcVKP5buAREjV",
  "key18": "5QQDfxW3vrQjjReohy1v5SL4fezkCKG33NtjqRRtTXbHpwMddo2JKDUPVyafRab3RJRKx25Wo8cHGaZ7r5KBjRDK",
  "key19": "3ekzhPBMEeRB8QottTVuF6BpVutEf78WCnTfUouyTye6uxrpsg8VPpLC2eku7NJNkqAzU7XkFdhfeptkohVyrrDb",
  "key20": "3Q5XQP4gmk8eGopC1TwC7oZms6MWQuUqGkLbqoXEDrk8dtS1AyEJxdzjXGcqLcrtF2kHYnGE2CXybTsVo8mHvf2x",
  "key21": "g8LTvEhRrPSATzkBhNVqDgzHinYV2zeBAaxqnmMTxUadgrgUKJazD3XThje6KASSyDF7CgJF3umvFWfqmSMVHfw",
  "key22": "4mmdepccCKnvXzxKPWW1iaY5uXFg2ME53R13qWWznGaYKSrUmTtm97bXKfhHsVQG5HRcW2g5a7vSEK3MakaR8z1e",
  "key23": "55s7ifLBAY7byPkCFDGruM53ihqYTSse4S5NBw1hk9VaNEEpfQXqvQjEzYbvCEHYLnxCDzUWKgYTeYWFQVSidWhT",
  "key24": "3UW1BpjM7jLhXdfQJ9qm5Hwjw4a4YnRJmYwaZ3SN2G5desh43uBtitwCEHF5rEZJSqEzkNEg5fWuKxzb1KP7sXu9",
  "key25": "48XYMPSTPURQM2BwyXkmRr6hvyKNy4fdnGxT6F3SUr2w7Tr4cLGQuEna3zciUNrf2PDJTp2rz3h3XcawwoKUn4ZP",
  "key26": "583z3juVBHimnxTX76Vj9rUoZjkSuM274P46u9CPtaYzGGbCYcfXU1Z8uQEFd7eUvBojsvPpEmTXDY4m6UEQsG85",
  "key27": "3S34E7a6144nAKgyN5wvoFBU2nNFMtwWUf9Upeh6Cw6MHN7ZnAFbfXLStmxChT6zpA3S2WGmYGm4mFG3mZ8BvGvD",
  "key28": "3qu4ECd4jwKTygPtwL2PYcP16BHovPSX7ajnSqGEUqxqNqMLKb3TJUb2S1g3YYpQ1GFJTytMkSDEvcAjV9YLnbje",
  "key29": "3TC5mHfYQ5MZGvFCdbtiX8NZd87XyYS14ZDMkUCARRNi8kTA6t86AheRLNBARQakgXv5tKbAKVeGKcceBp3vCSHK",
  "key30": "4d4BJGiovZtvnQkbHi5h6UigUz7yZ6JXSej4EUCQ4cCCtygDHXJWe2U98hiQK5L5KWzJUjQmBP2UpKTKMC2g18z2",
  "key31": "4h1gG8kR1giV9R3ivTC1wUUL17TknpqRmogrinjJyjZMUJ5Qa74M7tZkLyEzaVPdXDESYaZtaf5Nr3vKsnkz6bDx",
  "key32": "4wnFzuJqPBmPxsWDNjPYCkyp9Hs6oiUgXtKGLXT56d5KiURRYUg6DD7AiF8yHbSfADVaVYjj5sXmigFyc5MXnaLb",
  "key33": "3oZazVZTkpFbug8ddnmyrHbUzmVwXdVYe7XUcwaRBp2FHpq7RmgzuVptMaYBxcD1V8mducsBk61idbom3etWFJ5h",
  "key34": "2twj1a3yGMWkEqNptGfqxFv8GEkKQKrjyHQrJUnisbJbknthvwjzBsR64csrNjkZByV9rpydD7JCoXxUkwSYw338",
  "key35": "sohxiWVWPKAFHnUeUnTxUKka9jL2XVzyhp7HaQ7QT5VinHqFwCAFE2SG8PepK4mM9Jh2t7EUYJkJoaRAYTCzYUe",
  "key36": "5egN2trgAgkw1wcAnxW1w1KYgqoMK1zKe5ngc1CdvxQLk52rtxP9hWhy3AAC8adCmHw36eztzPqVDzJu8Aspa3W7",
  "key37": "bDqBmT2ZCTYmu6VPpx6tT3Cq83Cer2rwtS9cNXfcW7QUmXCEX3jKcVBuU2KzzLwWAzsabctQ7MVp4UKJfPLpJ5i",
  "key38": "4Co8HbDbtaGnRs7LZsJdMAqPXGhBuSE7eQTvi4Y3q6Jjue65Zf2ik28Vt22hBoLp7kBCVhoQ1zeZ1xJ8CNvQxFoE",
  "key39": "5ex7mDRMzuiAFoiWjbAe9pbEUQChXfgNAib6EHqbDe13Bidt62rAiyGemCdvaqurJcvqQvn2F7HJYQjmgtShjWG",
  "key40": "2MANtNfdDjsTKYD7rQYRi2YiXj8FfwgXQUPEZFS2sHQovMp3xnKgbRTLoEkMVRmBRFSxLzoyXUU73jSqR3Y17SMW"
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
