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
    "3ncRX6bYVuHLcU4oQGvhMpfg8LsNa3sA2PPjgsai5e25JRMAiZvKLiZDAvrqW6z5342ntqbbZEyXt142GWNtEpTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KJXH6Camo9zAtY3jqzYeMAFgrgpUDFDpodjmMW1sBHkETXWoF9WgRdBJeHQX9H4Em2L1cfTEPS3mHYbXiVvDPQ3",
  "key1": "5aeESVxNLGhAiWXLMWoDHaFoZeAfPvU8gQaS2baSMBV7zvrdG6GTFHFW8W1Ci2kXGy8uFKumcq1jDMGHohmDT43e",
  "key2": "3MfqYDVRT7WS3wQzRp1PCpo3bbfFhN6RzJWZW27d39P9oJEAAEeBbyBZgKNFxtDU6tKo3tA6VZ6dKEVu44THWTbr",
  "key3": "o6oAZDkh3g1J9CwTkxD8Yz1vYw9ntZbsfP6SmyLLCDjzoSruRpYLyYdtRGbs8VLZzx2z4M1L9gH2dcZozFfepgy",
  "key4": "54guD19GneFRiR4nthirTWYvjpapULC2BHVAzru9TcaWdzBgFwBvnAxXHdvXtCjnjsZgWRDrFceLYpMKYPVLvLkm",
  "key5": "5KoxA1pLEX2LjdPGfYKxFNh1bDMVvSpa6P7oGkV77fw6cQ8PCcNMYbKqeJNCA7QWLSAXDhEpEkqGn68tjw7WVTAc",
  "key6": "2RuC1aU1tvFgy9LsNPLv9gTn3GxsoZ2PbePUpcdBensPViwqfLDZVa7rxPyZ4Xah73dZcoXusTxUPm9fwkKK53zL",
  "key7": "56BCPLE4ejRPweJ4vZCWUgMbbo3BvpwvNpXAUwC979HnCCLVnrNf6NCMgxzpxwouz9RZi8UdTwrAgy2LuZPk1mCN",
  "key8": "5QQtpswSms6DTnsjd9gUKc2S7iznmNgdNE9Vx2E5xJSiXzushzW1RiujWUV4f9kAQCocJ636Bpa9wkiz5QnJMbFJ",
  "key9": "2j5WPKTb3cSB6Uq48Q9uuvHXieehzvqsvYSC2zoCrMHZfAZUT4eBJ1bEvrFrDJzy6bnwbds9mUhai7PACKjKvi1U",
  "key10": "5ZWy3MtuAXwpnTYX9EgCn2wcD1TWaVZ9AGhtv2nL7uueAtjzuKwdYMDe8NAc6dpfDgarXRv55mKBfyJ2V35zieMQ",
  "key11": "4nRK7fFR9BjmLqNH7RR8fyjUhLF2UBqjBf9Yge85Fju57DXFAUE5hbQ4oNERrN5zF8UjzWPuigrzjq68jBYM9MWr",
  "key12": "4ABBEwmjgQoe6uTGeePWCCEC49PhZSmzVES4f7h3NJeM43UUoGbxtwXfLFHwAYCeZGAw6k12pGsWMYS4aX4z2Vrg",
  "key13": "59a8b8Ag2PkCt4nVTq3fnaAFK7SVj8KQJ3JxHZtjX2eGRGM3x2Dp9eod4n2BvgZ8QA8JGptsKVTwujsJeucK1ECQ",
  "key14": "2oGFWDBYHjysdccAzoEV1do7SRzTdZP8ZzDUTwwhgjTBqTi6KCTNc12uDkcMZcXCpLSqjoWbimHFzvvXoFyjgbMS",
  "key15": "4AuC6vTyC6WLsnUxZPXNAUtu3HMHXdwvh3aWJvaXZrbh8qAvfCLQ3ekEbt6ecQEk87DYoR8Ec9jn2aeaZb361LGf",
  "key16": "whKENpEEMPEyFfBT8K3udajbuGa93UKBEBV6NWAUg23o7B51WKnJnhu9JpGauFBNGB687ab5stQXeroqJxTqd4o",
  "key17": "2JfKT261YLvXeyapKzMS5AaBCont7AFb8NKgz1pTjyM6R1t3x2kbHVehkKC7i9Lo9Gd6BrYg7fP8EPJt8SfbcCLC",
  "key18": "5tdkzqUrfVoajCnRcx89BvuWV4haTVohnwELBNLAceuLwwxccvVqg92P8dfifq87fsfoVGyr3Uru8knKzxYiPJN5",
  "key19": "3D4wKPU8d5xS8uJEEB9nPuXhGFZrjLRYFCEsagWpn3y2dcDok32AGT1wCQquC4K8zrRoQQGAy7s2oGGyUobMM3Li",
  "key20": "hCt7zmDhk5EP9VSLmt5Ft1m67qk69AvjoDxkZpuMzbwDK4bJS3ThvoGyCkrSoXFZRVNnJooWEr1saQNN3zWJa52",
  "key21": "5ozEehhWa8Ar8aWKc1qoJz7SYuZT7piGZ2bCxWqPuYhkA7Gy36KL4VN6GgPga28rixANuYqc7UdJweE9VVu8ZxwN",
  "key22": "5356KwPVja74exj3p6xrTmGYWJA4fmKjtxmUAPJrh334bFErwDfL1FasQWXvHe4Rve8MWBL5zLnrTD2jmy8Nytcd",
  "key23": "7qj6Jpqu8GWicwsvs9XYCfFd4o9zXHpWNkse3hfAPJvH8JfT1TAGGqAWRdqUvh7sUPTZL9xYH1qZYHYaTJDaf4y",
  "key24": "odL6DJfmGEBgvnGNgWu2PZJ8UcsnRGa3PE1smNaSA5RHjon6B748KqS5ZXwvW2symwTTW6ZStaWykiNWBtDretM",
  "key25": "3YP3iDbQ5RzKfk6pFbmzL4tMqzwfqM1SKmmy4foizXMyPbvmj7VzUKnCqSnjCYnJ15Sh6Pa7nNg2FW9iEm9fqzcE",
  "key26": "5jmPZK4RVUyuns9C9pKe38bQRy92goE1qb1QnJLmVT6evQycM74BmNbhrPb2guXVRrb9hz6VnZ5dT443jPYqGzxz",
  "key27": "2iwE1GHwCQh6sgnXakkMVkDP6zLuDqacMMTXQ2jr4qwnM5kGqdhPW3pzRw9YZmRH6TpAtNj2NjWnAoHXKzm7xD9R",
  "key28": "34j3i5Vh6aJr9KwESmZqmfgzxxe5Hhzvc7jz6d4rp5UV3W4fmtv6Dq7Av8P38BMrJtCSVTFoZRpwjzbwyfViFGSh",
  "key29": "4Tz1K2cMyVXTkjVjpUB4ZhdV8SiZ7YFVMEmU5PhxBdarru1yehnjNe1NzsDiuFMZe1S9tESxCDnd489J13kZeYHt"
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
