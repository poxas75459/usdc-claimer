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
    "3kkGaj62aCphxMSsBZjt6Kh5rMccFaUiXCcQBxHAjnSAiPb1B477okLeX7KGgnhRffUCSbGxWij7LSyhTC9cCQms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bjkYi5HdL8RzGwHQCAUoZPLQzTpry2LUsvPKZ6mjbKwreGxDEoMjHSzycohyrBxU2Xwaqu3Z68M872KqwgKz86A",
  "key1": "3WWuqLuJRX25qmSG95Dyfm7jMNSzDcnXR9mysCNyYvZodYRkBbbVgrD9kA1HuhF8zJdPZJeNnabpMw5ZQUSQE86b",
  "key2": "2Q9fj7mXsJdvarJKnfKEjS5Z7kULP3YbEufyehmCr3NrPuwgPV25Y7c3pTvkKV7V3ooE4t6KhN283ZFcYJXU34Mg",
  "key3": "3qeaR8yDhzjSwL4DYfzivhAFdYrnGVY8e9pV9Df736Noh3mDq7KybhycFsxLPAzUEPHZ6zXodyvTwyp279er6TD7",
  "key4": "4wsp83c2cQRc8JA76kW3EyxUvW3mBvShkU1NjyyPVyWZTEhFtbK6vTiziS6xjaDU94dGRkQ9VjuDSc2pJV9UF8VC",
  "key5": "uyd5rMrY1ocGLMjRLwyV58ffyLRX9gLLQy3M8Bsyei7NFFMWBspuy5RwhKPWf9R2HWGSEPE4x7Nc3zXmZESLcwC",
  "key6": "2KiPHNRdneMJ1U7JSd83wXuFL6yJih2iTz8FFCubenoweeRP1f4wXeJkaFAazKn5DfFRAops4Lu4rNE6zTKfjD8u",
  "key7": "61JjnKjHWT71xEqZNWs54YWQZGzPnjEoV3CndbHm2vEdqFjVEeN7XhUNQTMWgYQ4hvMx4FspeNhr7Mzgp6m29SXn",
  "key8": "saFHpHBRRhj9PW3E4SjzjpBQ5Kjg9LZtSgZV9WWDAX7i35AYBogpvo3BCxATLaZmaSchtASHPUfepwdTyDiz412",
  "key9": "N7Xv6XKbgTUsULGJVVygLYhtnzyLitVAvjMPqV3Gf4rAbaPAbLypgm1ruYU7w3dd5t9hHRdNaYUWGGtSxwZ7ENb",
  "key10": "3FzfWxwcs1xDYJCRWdHj7RhwztFGxtfFiZpreMt9XpcNatetk72B1ZSpfUGDhMzxXBmUS8AkAE4cgQNT4xHERr8Y",
  "key11": "FEGC2aevX1VvqVFvnwNGiNRFRjvg3iPXGoZvbPjbHMB8NemHzXE1vKvAKB7AfcdytXvpkM99umNse1A6pb2Gwxf",
  "key12": "2vbaDNQ2Xuehox5eDhM5sb87ddb8GS9J8ywqG2FkCYrg6Z6tPgqAu6DsvWAcVmZgW8hPeT5ih2UHBbejznTeADjV",
  "key13": "5NJyE8pN8i8xy3fb3MVthL3Y2aa8yiZdNiu7eAqe1sj2ESisERw1pY2JWQakm7nv3dDuWpLQkTGNWtVctaGCweZF",
  "key14": "5jgeh1BroH61Q4z6JTkbmFgQQ3TuUaH5YmPg6TaUw635CfKroSiTxkXr8DVmQ7N9iHnAwrSjED4Rq3r9p7F5piaw",
  "key15": "zQPpwpbrovbnfCQEDzBtNsb41Hf4ax29ysZHxHPHYgybsZqm9dHy4g1c5yCinfKkhVqjmUtWFL5EG27PSoB7CjJ",
  "key16": "5TrwUmd8Y5rmdbroBNR2DauNeUSQMopQdyjCFmNyWyQY3BREdSRCaNbYjBfeSPmERLNrMwN5BgeSVR4ZCA2fbFGE",
  "key17": "4viEoFhbRxX8eZnS43CN3SMfh9TWXn1a2aDkQqb9a7dk21BbqiPseTQeN3wE3hB4pTJJGwoEZEZ44ofrwupzUSqy",
  "key18": "4STEoMagdMDvDzRTHQoYxfCaRHqAPDDWTB6SeyekHd4dbgKF2WdjP99dNDACufhsNwaQog8uhERZb1d6SPNFgyDg",
  "key19": "ae998ZSHAqxqi1b4VHQPBfUbbNPVJ2qGdetx7UEQwnkx7QctUifuWm8LwNMusJDjzMBc7K97cWeZn4QuurmTqUq",
  "key20": "3QMHXMXVr4omJYfPPdg2deSuGh69Fxk46fXeojCd4dLMVEDmVQjJu7p9RQyw8bkfL2cdqAsKhYHFDzaxysvQVCdT",
  "key21": "yWuy4eLjyKQin1vzd7fN7P7Z6CBLWd4J8EeEKMJX9n5LKhFfVRoZTZi4oHoEZTdM2kCuuA45sHNjFERBbXv9B1k",
  "key22": "4fuSMB74VJ9yZk5rLpaJYXL34EY6mStNJ43WD4VpbvAheukceHeJgTs9qzzt2UHEiSZjkF4uthNPwMCM3UV3ufgX",
  "key23": "2jx4P7VxksYmVEudFQgXzoddsBVue52oPgFXNQDtYhgA6C3c3KeQnNrSCMcsoPnYjVJS5R6hoAvnsKxfKiDvBTAh",
  "key24": "aXnsRjReDj8WeQhEVF6453AEvmGnNuvNoutZjkr7rPvbVautAWbTNYQx9ffx6adMbeHdWkhkNmNMLd2WZNPRHgV",
  "key25": "RYQPmq5BFU2AEsW8D21VNQChgTvEB25s2fHnG7FkmnvKihCdsdca5inUT3wuBfpiJzZGSYyGkqnUzWcu814LjtT",
  "key26": "GW1jHZNuiYDjqjx9KGz49pd236aHrQJuarA6gcPEGyT3vXYrScynNnaGHwe4CPvxmBNQNYBTf6dWPCSCGPUyZju",
  "key27": "4Z2cPC1jL9itpDCHng99AhM7CCQ1GjJg7CtnFbtX1mdvRctiR9vWCjpVbtcE8K6amnTxhkgJJGKG8Zhrb4r5x26W",
  "key28": "2bcbg7uagRwLdkG1iFawh2riKGQ8ovy1vWjZgsra27xiATyVFcHuwMQug5NR6fJszqSerZS2vw8YRQC1sf6hrudA",
  "key29": "5qWNTjQdiA8LnwnPGKN7qYrXix4doXaxX52JbDzTuBtxfkk4qvGqZYik6X4BYcmf4JCJFg8J1NrJPPHmuDkwHUgZ",
  "key30": "5mwTSeCvstzGasa21ysToUKETNNvbTx7oZxVUTEuGVSMkQYu2zBQ1bj7WTNpuv1x9G4sDLikjKmieBnpzegGW8jM",
  "key31": "3QkCLQybSVRKC2YRXf1QTmvW2iEmyMXt8fCnMNm5f1typwnWFtGs9vuBc9fhZuMqeoXHXc8wCmBpPCd2Ea2B2bVg",
  "key32": "DZTwz1hjniZocerqKA9TVvXEc33vUGPXPTfKQW5mZzn6miuk37EcT7VtYMC3mTCeW8Y23qGsfmX2WgZgL2AoYQ9",
  "key33": "4L8BwjPp59zAcjhqXPBuSrsZYeQdu8h2L6T2vx4Z68vyA3bT6foxHh7oK7bRC9fMoyPQ5uxC35hR1JdkZHSFqRCY",
  "key34": "2rZCpMm3k4JciyefifgneQQKdp45xXX27eTQTaR5JqoyvuAF6mdKEQzh3twuntFMvLyDwKADKj1Lw9u5Yydk3qJt",
  "key35": "22xw3knyEVUYT3iECKyfbPQNJyt9p286y8HCP1c62naZKftT7utx5zWzdfzzdUBhoNsd24bsnwuzRZ9gnrj2bdqn",
  "key36": "5RmwyJieBV2boEpyNFyqy9MCHo182ShC8CvgXWATXRkq68t1LVNuAPhgKGmvHyaYGbnsu7DeHKRjqazvTSc2c67Q",
  "key37": "xxj2dziKj9AeiwMfQduxufsy7Bfi173DLPTUgEahVLcYQzwvvug7FKJPcKrezzCNBWdM7A6mn7qEMrf9eNqA2r2"
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
