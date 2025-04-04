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
    "2sXqFbdrbf8kBzAUHAp5dSqTViAumHzpcXvKMpRPkMFKkmn4kKTy7wj3xmMU4Wy5sa2gjpH7RAq3gFS8A8w6AVhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aey4DPay214PW17zbGKLc482YzuyTfMDRA2zQuGnZGHdTtKk4LnbmTtZzJTCoXCRywYBGTSEgDAaPWwGXLvwv4j",
  "key1": "4BS4kk5H15yEGiH9C5Ufg4Ym7Vy4TjtEqCnAjba6n1S993v46qysLfX1tqSvjGFNiFk3ESbrMQ2fK1CfkrWhoR23",
  "key2": "3NLcNstanu8ZWUX8iedMrhU18fNUzYL3WwmcedFZ9yyUzSFEQEENpC7v5rdYCHVNftGeNwQ6DLgPEAK1GTCNTu7M",
  "key3": "5zYeTsEXs37vpA8b6wmi2jBrz7iZkGabzbP5g3JEF5ghCwhr9z3YnDDJRFKpebmq2i97DYRh9iiQK3NxaF6zWXDN",
  "key4": "5xN2sGvuhFtqyDtPv4LnXNJ1K1DuTutuCFWg2D3ostu6seedGnd6rkucy3Wcry1UeB4BbMAkRQKQFMqzMPUegKs6",
  "key5": "2yWPZBJAn4VnKtgBBxhXSwamo3PSQDJCggmvsKYrXng3ckgLVjpatC3jhxuhJTH4tMHAiY7PzDxb3goQaHvQBYxK",
  "key6": "52CrNEuSzSfVtCcAbLybaxb71uPxHwcqYyhCRrMrJt1oSHrRzdveSFZrYxcF9jemryKCTnVYogSGVqRu6SdE479X",
  "key7": "5HwrQSt2BXnG9hdYLqiDLUUFNNJc5XPVNKX2gnwwgWLqk616FPmKdvSFpK4PdxusZP4QhvV4RA9E11jZnG9xaP5p",
  "key8": "2Giyex8GBtoT4gyzLkLQygvR4qcDMj5FmJsoPYdQV5K3aXvFQbS7XafCphENpy15TbfYHsTDoFfyYQicEVZveTak",
  "key9": "1zxFainY1DTKcFMJTuhWG9iycFJ1GJJTnkBfLTYX9vgf8PByyVYmC6zptx77fHEUqvwpdjbju6g1Sq3m1AULTpT",
  "key10": "2u9dm8ivFpBAcJrb89HSozfiAJLWDC1bxYuH9wquwZvSruTZ5apkjhkBqTA4d6xCdZZJjyNDdLUWYgaarwf2JGp7",
  "key11": "52DgMQqk5JKS4kk9tn5H2bBMFFept35U6rqyXs719eXELFNnwMfCYXkMd254i45yDM3jTdLKE2AfXbmmhQasvXy6",
  "key12": "4gMY3y9WbnFuUK9BisiXnw6T5Xv34MBtDmyCMUXdZaiwnnRtJxS63uKm82TeUG1R5nMKsJeKmKLRWjq9ZEuBpSPT",
  "key13": "4ZC6m5tu2zVCadsTkS2cu6T3WL7EgpNv7jK2eA3ZmBp93QLUCGXwVkg4eBbZLaYEVqxtaXztEd3gRJEa2fYAVrdm",
  "key14": "4rfxwg67JtkhzvfMsJydqBDMG1gcJgHpDCB1aaeqjksKXeDqQqxvRJ1E1uBkG68Tr5wiC85y9yudS3CiUmtqLWr",
  "key15": "t1sSrJ83bQJ8Xn4UGY2xwC26Zp11q5XoCRvrzJutsXFhUrn7JdgTxg2A86yQfG128eyDBKLPze3Pzxf2GHU7QVt",
  "key16": "3EY5Mnb7MzPd6xBg3B71T7GMuj7iojBifspYofT8g7gJsjrHS2PPg8mx6VHMkGTnwzhvxNvTXSGMH5NiMNwrCBEX",
  "key17": "2hfmx92ymuYUkADzjTffDwUaTQYsSHMLkEa5cim9P7DGJLe2sArtTfAaJhS2qBGA9c9mB8fLQ8iUZnKftZKHw26j",
  "key18": "4b98k9qYfaMLMGUSyKxzErTfgwsVTsUZrTaA8tGZNDYKAqyafWJDKoE6BQfAuVUomESdS4mEyjkkj4J5W9jbQ1VU",
  "key19": "2aLcyJciz9vRjxrtz226xLoPv9dUJuDyUJuRBJPKgNgqyZiVocdDvuNNg6DMmpcmVFJb67Eb1WbZAuTGqgC2SapF",
  "key20": "qfXw1Pe9Gh4N5gmrFJjmRBKpr3rSDMZPG35mcwQmseEtQ6YMh9wZZfyVYDNYy8ivNTd8KCo6BvuYBSjePy8HqL5",
  "key21": "32Hn4DazDcBNyaKxV1GQt1rYUymLJF71Vjd7XrZb5KvL9SnNofZizn1rXRasrMSLmiafe7tfBRz6vaQksQwnZfLQ",
  "key22": "3zMjKwRTRw3EdqbdKGjNXj51SgBYfgZvRPqBppDtwnXg5q7jXWStyxrRyDn65DiYPxAYvE4Xft9hUVnwJrGnDcbk",
  "key23": "4mfrxSFiTBNGeYzGfpmevButGA1yZa7xJYN9urEtS63zQ3HzGsrQV8CtFRFYVbf5aMYyewiQn2R5NVX22zdXfw6g",
  "key24": "5VLqjZGMk7Qmz4iokgVSuvyWcCkJckLtpuPR5UYWhS44iDcY4WWnf3fhWuSXBauh6VykjfWBGG2WuiTyDqWmafF1",
  "key25": "4LiGqtUNpWS2to3FoT4Xpj6fDrSwLvW2sAoJNCx7bo7A8iXRBdjDPEUMH6C6mRZBU7CptRpVYerMMvZQAYiATZHv",
  "key26": "sdGypniZ1N6USraKn6bS4gQX9P8RgsTu9Xzdv6PL1kqWGY7Acf5RHuMj3WiHupku3LMK5BAQuFGoraPNUwJ28yb",
  "key27": "4dVExJkLthg5oLATB8iysiS9ZLYhjo7u2G3YnaqzNm7VWHvhc62PaMTEYHkaEwBE8kb6fDKaMecSXsgWu7rkShio",
  "key28": "2dY9HUwF91VMCN3XjKzkNbeyqGHmRVeiYy5NAYnqrzmP9VQGZTujDeAFm5zcGgPEn2CSnmKDppQs7Yzkf52b95r",
  "key29": "58PrfTxkbmao6XrPtZWGWXUGKBKBDTQp5hfXYYwPkasqxH9U3F14HFfneyEGyi3aAFQQbDwTtKc8LguZiaUbv8ta",
  "key30": "2xLXqQ82HnQAnzPzyVXrseo4f4rnZjSS1bks84d1AtJ3LAcsd9d1N19Xk7ZwwS56NoZXrAvUNZCGBqB3x1xzBHU9",
  "key31": "swF4yJdNixio3tqEgrrksL8c98VcACzWbSWWhwRQdMCBLYxdwN48cduJbFdwR4RXtPbXUvsg9nineWEp8fQwJN4",
  "key32": "5q5G32ZmZqi9PrpAP2saDSb5vnKXQ2AVnzb9TvgNyDvza9hmWveTtMp3a7kDZiRzsHdDVLKdx6naooDSM4eE49hy",
  "key33": "4YrEhMeju34ibZL2HtofrmeGf5Cq6zfWokrMXKjfmGNM46CUQwukYbPrZgrPrwcvs9vmCMzXohL9JNTCBvypMzFz",
  "key34": "dg33FNydBcdhvxY8g3wnaY96FfVYv2yr5QP6kMVtBeWYpTYhU5NZ2K1SU7awmgFjyf5sXRraEE92JoqitJW79xt",
  "key35": "pzmJyYxQyVs4Hm5Xj1HkHJHREKRpzcJvfcSfoJkybCjjiB9627oJgR4zw3g3e3HAoQFiFnzJrD2RKj3jXPh1rRd",
  "key36": "27gjBVKG9DPirxaUidCWBaKEB1w4ojXTHEuYtmxsmEWmifCcNp3krMziQEdGJGZ5S6MZX643dGw6USd3ewHqyJrR",
  "key37": "4wAjwPyQekXJCU6U6XgGwz2nGAxn6UHoY5Vzsofcktu1PMCvVWVzYhGHoLzy8nepvxb9KzJfnC1r1miu2wLTZYw3",
  "key38": "3ViM7m5B4PVnJjm8CCnoQm4C6hRWZPfCpMUbT1GLwkuYhweG2PQtPWwCPDgxLq2EzMPTpBvBiochuVgJQZxyhtdy",
  "key39": "4FtEVYt9se2GJqgmedLei9tRRdXk21PuU6b7uans3KXZLrfoKN9hUUvtAk8WUGnUVbhKJCHHfLDhjPedNmBjhwV2",
  "key40": "2HbRYagFgaC9WohCPusJSh2KnwcLyMGsZigrP6qHh1Ct5hzJxVAtaSZ2DZpj1vRcBg8Z2xP7BtY9255853pDFrr4"
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
