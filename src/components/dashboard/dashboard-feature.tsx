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
    "4XNaTEDBVzGZDjFGJfHzhEsfZYrsX9rnAPvDk3um4Vw6apTw9YknsE9EpqpeH7kUMZuAwaKrcb3eLBggzkGqASLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYrFAMsqTr3yfFgZjDRjaB58PMf4Cu47b7TBVBNMPHVKrwesYAFdN1kXtjB8phjYxgG1MSnwfaTNjXrntNmuE3y",
  "key1": "hkx5JEu26ob8gpw5xiMoEMiw7C8FMoJQKQAx2mUixKqB5QGMAB67pscs5cgHr1Jep5mbo4GkHVWah1bkcn1fkeP",
  "key2": "3GmeSzykVNr1UGEGTbvzHU6RBBbfps28JiZ7CqriyAJJ3LuzUb4rVJ3xyB8o8F26eTQmqhGEcHnRvdCQNzNj3mq7",
  "key3": "3kAWYdt7tLZNytpuMbhgSZgv1Dw27jt2ea7ASvG6yhBgPgJyrpUwC36cgLSS8T634pbQxqnsHvVfeEuZiBpaUpkn",
  "key4": "3AQ3mPcK1zhKgMv9yfVmstjF4BxvdzrHwmkhuKuA4YPd7ebNeWx6HLFqGXPmTouvEEgh6SiEodNKPPmM1cH2M8rn",
  "key5": "innPfneeJHzG8LKUyEu8r8SRmSWWpHQB24FiB8fGEEB2RsdorFMbcvZtqE1uvYkDiNSUKymqUuouv4S3PaGbZPw",
  "key6": "2g1jVCbm15gnaS14Vno7CnXX3Ys27LGcdkf6RATZLvk22yVeGT2S6kUtnoktLbxgmUr6JN1chXR1SvXxSj36ECf9",
  "key7": "6o3qYCVhPZWqR1WRALhY3WkvnsmMFdkumuKnVfwRxhTBceE14CPfBNWQg85pdKaPFAMjbUYBpwyUW6SpPewYiGG",
  "key8": "4jEfhxtSG4dUi5Lb5vSYFoWgNwEAgDwuCrzfM4SiFmyKtdZdqe3GEvhd1vBEUKGFn7Xan28y4Hd78kGeXUBnDBDR",
  "key9": "2ssTVuPWGoSjzFJMjhtgo46R3ewbKCGAZ4MifXD3LLNtLsiq4n1LbKbDZCgAK2tVEG1XWng9hnqoLvueDGJFqUtB",
  "key10": "2rkE7RDtnA1b4eD16oLQUymLQNR4F2um2JdHF6WBgy7Sfakse1xnGGSEYj29Ym9FXF9Drq6Cw2txRBFjVzi6tLj4",
  "key11": "4tyq2ikmchsrvtesnHSqDLDfov97jX7XQgx7uw1YuVdzEGZDMhmYrwL9n6ev5SQmGt6PTFPujHrCz4a1ZXzw37AY",
  "key12": "2arjAvz5qYwZMTDLhYQv62HXU68A3nQEb4QRJ9Hhyy6HdsW3Rrz4NHDoKm13Nj5N1KT8aVavr8SHek86bLnoPjeG",
  "key13": "hLDBrq3imG63XaodvJwtydFP1byziXgwfpRu29YUyPFTGanYjjSBqrdEarJNymGvfCyr5it6KWov7AYPEd6P9cQ",
  "key14": "39fD3q3LGCaBSxjfF1KHdZb6GD2ZS3WdE4du5nqLXKBqbxEfEPN5E7qak1W8HiLoF5yXFTTvsxYxJcDFesx3uuZo",
  "key15": "3Aa5DEiiTiub9wo5nXYuZDNm9YJ8c237ZU6PDGzCtezgRU7Hdx7ccbToGs6UarDmmU8gsfUB26Km4FssYVAK9JCm",
  "key16": "3WCN77Qmn97sn4kq65VCKiEXgoAXyuKKiVEB721NJBNeVj8y9Ep5qgwADJDHdn2M54isjvq1ajrwKFKKiXs8eTLP",
  "key17": "gT2KiexsHH6F11LgwRCvXLZ37rw6aCkYcepMUXBbpJrwbf6hpRubjsmruuZ6bQv391geXShM2ft4JxMy541Un7j",
  "key18": "2GXQLNTMZjJ5r2CqAPouQk9Q6svHzMHjCvopqqwe82AerARe46iaAtFj71KeNrzpMDDQTvjYGbZcwuA3LuPy8eR5",
  "key19": "4W5ca3ADEdkuuNV37aY2QC1CHZQhoysigoRJk3AVJNMyoUmZHsHcVrLk7g5euBVHvRBqPoZFWUWCScG6241kF8W7",
  "key20": "4QPWxUs4b9NgktrpEizTCJSgypEE3b2q3R5CnF7Um8eTmNJEEL4HK3fZp9Ezzzpqcf8fm5EdLXqnhuMBkqYC6qdn",
  "key21": "3opN7jZZrLyz1U9GdxKwqwzFEfkNKw4LaZuwRjJCBG1jUbEXfJ5qptCHVdAozGn1djpnbzU5SNDfWe8ohuwC63Sa",
  "key22": "5irbSmKn2AXzJ2ntSCJnPq4mDb5jpKQtQm9NpkDY469HdSRMd84RySzJCjXb2SxwD3sUNtE1ivQ326KZ7E48cqMW",
  "key23": "24Uxv6nx3nAbHT8HBTXSu6KBHwPbFVa8gPuNSg2Rvru3FNiZ2j6HQZBxvEEJbzsSGngX9ysyYTRdPHzCtXUpS4u2",
  "key24": "4Ji1ya3hDPDNDiow6sjVHjKoxqetj79jbT3S6XMaLpGEQmadXzTy7QxV6b8fUHE4qFL8R8syAAUoytUKbpG9RTQD",
  "key25": "psmyd8qPMNdu2Kr6RpnUgWmNoQUV54nmkTCjckVCPSMCFa9JdPYuLTtwEiT9ojiXFV4Fa7QcfCvEDeLHxeVTZXU",
  "key26": "5JUVxS7VwVDjDbNHw57Ke3QBx7tWGmKjUcQxjHT8LKy8ZtKmtxeuhtcFQ5z6nLyLrnwgaKHjTG7sSW35boK2zCKA",
  "key27": "5ARXTk7f3YNbxjPVQiaimzKq2mUKZ4qT2Y8VSBjuLN9Jwinct9efyubGU9oBHFfuE24x5ff6Qh93Du1SGCCqGWd6",
  "key28": "4GFqTV8Jpm8pKYLUXoBfdmJaSWhHogDqFp46e2uJQL21uN51FV7u4RtjpLe3h2w8HXoEztL4cJ3oXaFFEay3Wozs",
  "key29": "3rRKdTEEXJcbYaAL3vmTr5B597mbPgWhQ5iEtPLmD87pr6S1BZa2Lde9NzpowuUhX1mM2nMsax2okuBQb7AhT8BU",
  "key30": "4AwHzc6sLXAABWDZVRaj5gRL6tf9YnLav18DyGdXrFhCVHktFrfpeYgi56Z9hiyRScY2DjDW39vPcaNn8s4AgsTA",
  "key31": "3WNqFmzWKi7bdPnrgC9ETSekvHfxaNJgBuNtMnoST7mRLrq8xkpcmPajAF1h1FM6hgJpvA2ynjru4PN8HUDQKWq2",
  "key32": "2uHUdqNGrRdjg4aNRUQsDLHVDqEfV9rndMeS72zipdC7oFNmnw1ft4YKiUvdyqiWFqAYR6ha9DWnVX2Ady5mX6qV",
  "key33": "5cNrw7q8y42TAG4CfQYbKZDjEtYRiG26DVNQMhm1pycV5AboypzRYaTXfNioPLa9GrpzRyEkkqJV3qEYQFEdSfAs",
  "key34": "3CNafVkVebp3CZgfcJDswNc4Rv1Diptkj2G8i2gcVYPVnAL9HyR4zrX2Uaw9mAg5eMm5Cvno9RCiEYWwBygu3Ntd",
  "key35": "39NXNn8SJuFtQxzZ6PgPR8A1m1B5RnwPxtNJwz4XaGFtiGdGZw8ND4yiRw6Xxs85P4kQdhWVw88G8eJEyadr1cRr",
  "key36": "2oFYmE2eetBxC4DHDeBCFGY1YYhDFBqVJhpU9SWh3M8iSDp2mf6q48zBSy8Bu49eLJVVGU4FQaGGbiM4XxUKh7tS",
  "key37": "2aAUnsJbHu7BRbYPHtSXmd2caNFE7yM1KQKMSYLjWwV1wkxWjukySGi6eSD1sxayfce8diKvEJyxHz8JQGryT7nG",
  "key38": "2bQ7GCSAjU9Pi9qsWQSuvncXezfUbLScoU9VN6XJLmtdty4DMRJWL1MdS3EBXgurJMZMZ2xXAsL8DWGzArdPXQ6A",
  "key39": "4Rqm6GPdWk5osGmDUqiRkp9jRd95znjUMoBxCE4YVEosLrjwgffXHa8XhMUrkMvyd9sbNWMP8vgSW8SWDmyvVc2n"
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
