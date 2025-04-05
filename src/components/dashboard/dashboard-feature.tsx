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
    "2ES2KqDCpxEwQoTWMJHZAkyWLxMcLSfisLZxwrXfFfr21jJKnJ7jD9XdGDvpM1TijoChMJeB1yfz75V35DAu1v8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJLgisE29C7M96CFPxXM49NV1J5XBkczAreN2AxwydrsabnTmF9ySmHsYKY6jGEtRA88CeDGFm5KVfQUGDqRTUK",
  "key1": "5HpzzYQAsDJEBXryzE3rr3oKHu4vWZvpkuMhaTdmyKYqL6QMNf1rfZDvCpw7i4PTUG8mRSjhSa88WJd8WRWJivqk",
  "key2": "5Hye9CzbMeVjGDjZL7qnxqYJzMtByDMi6bztmpzb4FtGjjT6Zt6ZMWfqgBdEeuYnWXoRFD5hBuWbZRsUguq5ZRnk",
  "key3": "4Q7B1A5CoMf7vT2La23hT6pnA96U6rGySh4iDmgnztcqKrj1LZA8VvC6dNZFM2JTA9jexZX7tf3W6s7hf2ePmE71",
  "key4": "4S15hh2iTpE7UWBscuQW7hg8xtmzxGcEstmNf18syqadPNEos8HwTqLHvcJvViown6anM7hUdgSkMKecBc9UsSuj",
  "key5": "Hbx5G92bFFbmzhvNMbFuyk5npJxNuvuRfv3wmGjkubHJZS3xe1xEHYwKvBc6K4d4evjSxUUJpoaHtnZHrcdVqGZ",
  "key6": "1BcFkrfPCiF8S2SWHcCaDxThLjDEQfAnwQ6hR1dnVfj5G2kZBmQaT2dbsqCcRTLwdmtNwoifYfQtW8UYW297VBo",
  "key7": "3sbWb4GcdSnXJV6Ntq5Ewp72krVUfNbiML6f3YZWY5MF2anmeQTAMxkn4NumnECWWpYUjfZqFAfBpz1zTXNE5NFG",
  "key8": "3XfsvrgqWiwvo6tLq8cR5exrUnYaZgdPF7wE46qyuZpvHAv5eiqgD4qtjkKegirmhHwmL8GZnTMmR2gLYWwmgzwo",
  "key9": "31eSLjy3idSZYowJ8GcPeE4ix7vfxnD8LfuRn2aerLKxHYXfgkF92G6X2JrTogD76yQKnVNJZ9QLmrNtf8HqhLge",
  "key10": "2Lm258x9ZWky1eN5SWPNm7doFWM5pXRnhrnvkBL7QwhsuobjtdW5o48rhHQe33UN7Uxp6FxzKtitvWcuzReCHjmd",
  "key11": "2zsY12zgCuedy8ANXarPurgJuxcXCN3fHfeJhNBsCsZxE4cVStZbzQJSjRj3Z9Eq8idDbp2YFJJtaMtgMLiq5gtB",
  "key12": "3siUkSNJMnDdhGEtPiY4A5UgqzjZi9gGaDH4SBM7uDRSbJVrerqfnUKubWgUxnM1F3eXCtVLUm1Ky6JXF8fsU2Zw",
  "key13": "3hnBAfv7J4JSeD5MyeUwZaa4YxhdGttarv5hJ33uUmqTc8nH1zhDUgUPo9eAPjdpb2wFpxNgANq5apZJjPjKVFHA",
  "key14": "5NAU7EFfB1jLq9mpReqnnJHkxDpvYPjaC33TNCfvRFBxnTDXfrBSMUz6T5PUNdNXSnzVfg5zJFiSWfTmaYCjFU2k",
  "key15": "3Kf6xQZLGfaFYzTKxivhAaD6s1R1pS7KBtMpT17e1XrDACHr6NLUwo3HcFTdYYxxbL32nUUa9LYXghVeaP5i4Lm2",
  "key16": "o7qSMzjAh6BqQBT3LUTs915QDk8yZRKPvACfwqNbZZJB4EhknMzfqwbgw33ty3BCRrfryzXpNaEFfFHWZyrcBoC",
  "key17": "3ZKqyfUtM1oSMtbgEqrwbqcoGkwt1BjFRgrUUXZ1d2XNgHdET2z7DRfsnC9GRdeDumRvmS3rMhsDzCEv4pct6pB9",
  "key18": "4NP3yqADbvyUX8h8pWxDmQYMK4T76H2AmuXbDXy7DW5nNXZfkGWZgYDsto1MbiSLT23FsdUivXYE6fVvV6EXqQf2",
  "key19": "4AmsRqAQcpUckX82A2QUtWGUaA1XkXgD5PgnErEPqqYoTJe85sQsUtX3Qr2rzjMw5uRmM5ArZNvhb6p1fqXzWiqb",
  "key20": "cu43nqoJ9nduecXDEJjsN8MGPXcga4Kcz4bzyNHP9ZrZHa2AqmQcDXhr1ukeYCiqDiQcXxvGhqBeSaiDio1cmfG",
  "key21": "4yMHhcge5xUSm8hhkWac78w1UqwhAt63otEPUhQLcswXbXC6LEXrL1u672VCN1LeUw2yrWMc78sUuMd5866BPCft",
  "key22": "4eFLNQxmZg4C8Sc8MLg7waC8L5KRWJ9bMxNLMUYNMW3F1Aozojimmtnf2X3n9iVmxQLFFDuEsdEbwdEDonDEAzdH",
  "key23": "5F9fSx8rnMDkqj64kUPASG958WES9u1d3VE2Z2R3DoiLm5DoqaJKPaN1gVKtbmUhpcwH4fjYGMHe5bhMj8t3xvjo",
  "key24": "631rU6kdcvH1Z6cRVs4bESjZSf87YRArsPDzJUghf7amqSCn7fofExACBR7sQea9iPEgnMFmoABzekCYSqPqJbwE",
  "key25": "4qS1Z49X7YzAXuix5hUKzWG48YDaBiTE6xoHwcEndPTPXYcjdhgg76vTUwZbBSJUxeaJm3m9xfNSLASJB6eApyQk",
  "key26": "4wBNvVCagCPqkEwisqwLoZE4rx4BS25oknwksXXT2KKui6ajJJDxd4ti4bt6QygY2KBeBMpL6FUmgX3kRHPiSN17",
  "key27": "34xLQjTPNCizoBKKN6F8Hfs94SYFABqgiMrHXFKk2qPEdJy7eG2wiyMVxc21LgyLpbHY5JF4YoHPZKhKessR2aZd",
  "key28": "552UDejK6jqpLSe6yiUoKENA61vGrj8h28PhCrPCm5T44bUtAkhC2zLikPUnCXbRoENKLZExax5ADxrCssiNZoPi",
  "key29": "4X5o1NdnHCTYBTRqGyijbSt2Td8Nkj588oJVwUBbmo2Lx4zJRnKdVV31QMjGrC4Bp1Jz4LpkKvpsxeG8uAaiUypT",
  "key30": "xWZA6daGNvee8WZzzM4LkjKsihKLxxs6DLBpksAg8sD9nG8UDNs28SSWNYTDehiwjb25D6quYLtWbEMQhorUB91",
  "key31": "UYd4FG2gEVJiJtK8yr6adZgXNMrGLh9wN6EkNmVRqRRZkw1TQhfyFRV1WUhMFyDoDqEvTAk9XrFkE3SAGkvEqKf",
  "key32": "5eo1UQzy5CG1NsRXHDEib3Ep3XL296jBwDs6ssbUHr49jfum5ccWfhR2xZp9Cc5HtPbnRDZ2smQxmjVPYFA4m9FF",
  "key33": "33PTVn3kAZmE8iv9URqeBwfUVhiFXzDC15xj3X6PzjU6ssgmdG3gKgLaR1GfF1EpPvRed7A1WmpSWh6hUd8p9qvY",
  "key34": "63YMjxL3AXMkqZWduFWcBayrMeJuoDTKE2kFiuUAAQYLwsZ9riCGuaPT8e9bg9DH7i5m7hSzFbFEE5TnCUFmZGPw",
  "key35": "5EkDdZ4hKptThoVCP4nrGNGQ5f6zN7RhhRiRPRnu32n8PpoidrmufDMHWYp3jZNuWv7KApdXcCCCsY72skRLaJL3",
  "key36": "fBjcwXu2Veic12AS6GkrRMYcwpgz1qigGmCEVJjWfZv2P7ry3eo3UKuB3CqZDVTWi23Rv42shz9RJF4KRj3FHAM",
  "key37": "5fsU9Tsi1X4aThTBEhunwkb5WC6M27ogDkwDU9fiRoULZHmfasg9jwjgBHZ6pUAyPqz8gemrL2YVdAysHsBagsKb",
  "key38": "584pcpS1XGNjCJzq5jUW8ZAkzoASJm4bn8icwiLFZRszHoKEP15oK36qHfpqeeGgVkbsoLWGQRyqzrJVcNaFpQTk",
  "key39": "5DE12u328GYzrp8k8jZnUCgfy3y1TTNYy66FqpjNqfsVY4inpwAnf1z6XqqckK3VzkpCThdyQWfTGHo85eHgBhjH",
  "key40": "3EZsTqYxacpDH5yYS582M6HAbwxDAhspG3esCTv7xM4Jj1ANPC7Ld95jE8mzeXrHPzoaTHpY1zpFGj4jVCzEzFRL",
  "key41": "2EBGmBjVZ2WqCjsoNHGZo7Z8KqVFXGugmAzc2L6PJjKkynrW5c1HLAatnrMzHDRefn1UpDQdPqFr3mwCvhhpmu1T",
  "key42": "3LNpFYDDXaH9mazBNrC2xs3rY5MzZT2zg4hgJZEna2cVitnetMabaVG4WTgDZavq4tpLACPUxiVJcCfhMK6SPuLa",
  "key43": "4Sf2YsWEuUHYJXfGL1Nxg8o8kFgUjFi43qDay7a2Xt32gzX1rXP98BwHpXNSriMfS5scoknoFhxwERVpw2TwcSHA",
  "key44": "4hT1EfeVFx8y1h9BvCTNbzswydS9Dt98hjDy97aYw1kfBoL8ty535b2kh5ZkD3Btsr6wi9ChKbPohiCKodAKRhjp",
  "key45": "nHioxuvetPjQ9z9sce42RuXsVGEyE6nWKsUMfbLQtTdj3Ptdrf3cbgX3o3JDW7ZnTc2VhZ25nvaBSKqxWEtMyUN"
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
