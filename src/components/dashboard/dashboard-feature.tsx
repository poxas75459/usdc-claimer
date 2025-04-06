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
    "37wsgCPdxDtDCHJfTefJxH7FRVYNjiF9FNRXmgF6X5EjpkQggG1qZnVfhBN3hGYzd2JxKgPzcvdRXSn9HTVhxgrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yzdWV5KjcCewjmiAq6xjeSDH8VoYuvFtcEUh9ZzSLG46RepF9Buho1P614f9m62nBrAEt6XhSwi3cDz2E7g7qbj",
  "key1": "WSV5g8Ksu7NbaAQ7mvAzdCk1dAnHn2H9n1ceJWTQng4Zwnm2cQkEuZ4SySxxzoPgpxZvS7n5hPSwmF2zRgdAWve",
  "key2": "u179VPkq6QcQV9xyxyA8953nRZguT2Wsj6X3J5LZgsnFKJaYfzyXZE5EQEgHH1R6sQvvAftoJccYz9kr2gQyYFZ",
  "key3": "2bwcftBBhfzCcrKMNMWex77GmFUcwqEW493aL6i5iZ4e6Ke2ScREY11v4Kqz4eqsN8UKweJVeFUw7Rz7rXJWSPzL",
  "key4": "3WHszpUM6aYkn1oifSHjwSyjj6C2zxwZxrxgsjwpH394N2EHGmKXRXSeRfDtYfaJiDDShmpCUPkjvYEoE76ZDhr",
  "key5": "2EFFzvmmdnf65tfnreFc9U1tBeThBR9omt3WRNVWJqDTFGQbygiCQvzQX65tHd5sKatNZT9Tqy2cNBjZWuwjoXDr",
  "key6": "65V7ZhZwWLvKY9dnCmE8UD3ANf6xaNejJ4gFybadCPXizKbjWL1bSKP3fSPKu4r4bjr4UH9pq44Rknwbm4S4t5AN",
  "key7": "4rUA6BJC7oqA7nAn5vTR5oemgZ5vAHUYdGKFxhJMVsYSmo2nch6J2gSpCuf5FvQavjWJZkjybs6p19CjhZwKbDbd",
  "key8": "3yKxyhDTsoCpNPJXmi8bPwpNG3kZE1DJYKPYjfGc1aV3T5u916DdpnETLoFJx8a1CLPHVWhD1EC4GuebfC6Bs6ds",
  "key9": "3pdwSbxUAfk2GXznvYSh6NLhTpuTwck7X4Km21173N7G4L6YVx47dBmNp48mpDnEQcnNm68o5ZPkbcsT8j5M7MdE",
  "key10": "3HTuE4nv6Zqxut3QF7a7EYdxRjHxfK5igbfgbwMMH6KZfHSA4tYp3tnfQnMR8daPosmCfeXZ8t5sgiLvwKe4WUCy",
  "key11": "3mfmv9WUQotWNhjmFbCsqg1jY9sDa7VP82Zx69meMcfPDgi5eoaKq6ypHDuMZd5uLWLfY9ewqRZzWF97ueRzPxeN",
  "key12": "4mgP4CbaoRQX8uzsiasdnN2rV6fPsFkf8n4VHWAdK1Dv8UMKeXuRZGcDZBqshdKkdDzUNFuz4rSyNiUdHymsr6Ma",
  "key13": "3vJ6AwMgHrDUb3veV6eqp6jRNi1YFpqZCYxkpG8UJgPqHKk86AiQR2S8ZsSbYNgKoHGdFo4GjynBB8Q5QdHT5qDy",
  "key14": "5gsu4y3btgJxGSmyGJa4w6Jzx5whEMqRZeNKPUpQWy3fCcTDf1XyNjRWs7i6LSuLciQR3V58f69HZXXcE9PLBsBL",
  "key15": "cFdBy1EzDHJwqaaCddvvmaWrqqaZn5pj1oWKpV9ssfZf3JkaJpYsRZfEGbvnDT5WJpVxz2TKqkM7gGD1AZymu9r",
  "key16": "4hyNxq1V82EALkx3n5SFd7wnUNYXx7y27uemwgYzNYvBdBze9ZHDsFYkdfuXc6DgCdqBmQf6aBRxFmPzwtEPRdmi",
  "key17": "5xRnvmEGL7hXmuyCpMU2dQXffuJVFpuyESy7QXtLXpbDy975FBodWwx9ystSBVSByghgpqA1bNrr6oS36qF9HFbn",
  "key18": "2wiw9BHbHk7dQw24x1PJE42ABYEZJ1h3p6pRbYSNcNhHTQsqVemn9PZPkmwSuEFrnEcEHxWwZceMiTQDo1nvFwc5",
  "key19": "5LVki6NnsoB8SrjPiqUoStBcuxG21Nkxy9wmY9wTLdcprWhP6XmYf5vx7i68njStJaWHgmEgf2z2e1qawkiN3sFs",
  "key20": "3NppLS9Kehgv9LyGiS3q8YwGadZYWqPbSK3Dbqngg5WnGmmX578SUiGEdoY5cBjKKYmDgMoRfUAbsX59U9dcLn6w",
  "key21": "3JRAgmEEZaMPj74dg7pqpxkgDg88f7y9Upyyh7Cah1aEFzaaP9gM6LxWgeLNMCY9za8YVnLvv677bFTQ4ycpJaBt",
  "key22": "4DKPY7znkt9vRScL6hCx7PQGSncZC2sfqpkTkQyHisNBNkBZWJtowZ7HfWMAwximxpFhu7GuiPVFPJZduJJF1her",
  "key23": "62cJEoxp7cEgnTqu6G3p7CKKySQNcJPpb5VDCjq2c3q4NSbhaVnyY64RusFtYgzk99XFacm2BQFE5UJ2uCC8EKTb",
  "key24": "2AW94dhGeLxDQ3xow2Wt9CG3nC9KhkoMFwCDJbCPUAthvgrVBwDhoBpBhUo2TgfrLTNZEQb3H2FNp3tDBCsGsYrP",
  "key25": "2BgQsfnKJAEbVRroKX6pahL639PbhAfS5TpfJd4vaTz9FcZhmJwLvVfECsXHGvQwQehiFNdrgiRtysDDtWQnozKs",
  "key26": "5SQsWr7w1nNLqRLVPN97zhj246DMzgYsBWz9xuSUFCGwNYML4ScjfuD8gVgfg8D4DPyXjJCYPscQBGNoREggWH4y",
  "key27": "5amAoVbUueF7ArnDwX4XNozMQUBgcvYuzzuUxmRecLzgffh8eJUmZDVhkBtyQf7FarPvYRE5xZu5HohknEGukxJT",
  "key28": "51Xx9GnQNLDbGgetHXyzGwMrtgAsEgEFFNmFHEzcbFoDn4NWPa3XERpQzvaDZdXpSdKnmuBWV1KFaikWhQVXZ1EC",
  "key29": "5BnJvLYHhZDVvoPULr3Au2zhTHxH3VHfvJHkMwLFVBaUUG5TcCYGdzQ7obvaM8ady2D6oHmyz2KS898mzyRjRo9c",
  "key30": "ozo84D1erG7Q4jMho51jEUnoseJHDmz2kES2rNxxQUAxa8jjhCMzrpAHapREWGdWiiPSDfMShDsSAViJXZZkzVr",
  "key31": "4ou6J3vE2C4zWX6NaNecS9tbyTBmsoD6ju1TGRgJ1TcpBeiyRn4Kvb36hmZk3mZJFuA1kyXeyNnb5sAxbiHfjbnK",
  "key32": "4FaH89JMj9UUuACUrKon774fcuFr1GexqJpQYD6ey3fPz52o3H9sXspPyXRLVMSWTJmUbeuTPE7ZgpoT21wWVJFq",
  "key33": "5hrc1zQQ8212dYPPXSXKsE7rLq8UJWyZmikn3HxofPhaZYX9ac6eJAQABizf8ow71L659CwJYLPDcQ5R4RsGaycv",
  "key34": "56B5w8S159vbuhvLFk1YJ1dvFPAxeo5skf9vv3TmkNht5Uu7tpLJeor6u9mjatmAQnrF5rPeCBU8Rbprzf7yUmLz",
  "key35": "5ZfgLa9N1y8NmVN6o6xKnMHSWC8HdPoAdnsfzpyyifPYCXj2wkSZSSNo8wNC7b6MFW5Yp14hVHz7PgvTRMxfVmWM",
  "key36": "3AoR25TXRhchW6a7nG4Z1qasfQZuHQuQ2su2CSeUGFz2e4VVFCM4QG2W1WQvMnG3fetrb8sHzp3wYVfWyobTjK4V",
  "key37": "zEJVB54wwSkQUuqGxfyYejaMVZnGyFT3gmad5hS9NLy5HHp4VaZTmUcdFiH95dRQ3F2MWCN1tqcZDW3AaqMmRdj"
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
