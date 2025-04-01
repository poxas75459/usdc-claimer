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
    "2u295McydFYMgG6AwpkMKEiUkMxeaWQm6cxVRWDHaBnJUPRGJ8oZG6Efo9vJrmT4uZFRXdvA6ppJGqzu9zUAhntz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9CFbpe597Q4YjDo26LgoDpWCBXsiqaMrYNtQksk52qfow5tggUN47P5AS1jmpUYh1NcQCdNnvw1Fs4r37CAseY7",
  "key1": "5TVuYYjUwMeKZ9bRsMVHknh4MPLtkxg4XVYw2UUhDNB2g2J2SydN4poz7Tf3GjugbrhScuSGVp8usKJURqyqeDSw",
  "key2": "5DNSHfNzuXFpHJFDuQinwtK2dNrB9iJUzinQnBJsHSiXRtxNQci4MVGcudUBBv8aE5Yw4JtG1RAmhUxXf89kbGKV",
  "key3": "4RQYuKFLeWn6cYGTbS7JT4etWHUAej1EMQGAbGdJxBRhKyRqxNMT3yomo24M9zj2MVJJdRCoZscMqzJDWf3TgKJz",
  "key4": "jAV3oHQ3F7PW9d2J1YAWv6zm6EVi5jVFxapZNrAmZ7q1QW7RxozQwBWwk6WCBS7PobacRAsLzLuAAUMKDj7iS2K",
  "key5": "2QGYy5NdbQfVz4fWvPtLWUtsuDfwd2BDYpf1U8x2A2KfpCznmqzfCKxZsWFkoV1txd2ch5wBFxVcE6hh6Baqm3CP",
  "key6": "BurDZEz2Ecq35qPLLGN4scxsUQXWD3WjFvRnsFdzqtsjV5WMzA2dsM9ujVMp63swGxbCPN8r6aeoGvjyodVH8Jt",
  "key7": "2ELHjc4rVEGjbTmxT7yhENNTaTBSWd6mYacGtWWpmFwrUddVKVYKQsC68mWexciLMG98sNYo8A9NCJLhJjnzcUF7",
  "key8": "iWA85hFFKioXBePZGNKa8fcwp5RUmXMLnuvQ6UnzvCKYBWz266GLtah1fpE2coVMpQStbMvGPnDN2ZGf8dBPnkF",
  "key9": "2jbpPYPFyFKTE6xRikxWhAJS61DkePcfiY1sm4so4Zwfy8JqKnH3wrEiYuoVbgYuab1bXmWoTXRACeJ9jDgxu8Aw",
  "key10": "44XWQvRQLEgn7uskjtveYKMGMyZKLcu2AYv2JYSvUV1bz9bUytDtG5wPCs4CE9KkDYsKJvHCgtvZKB7xcUVJx8rq",
  "key11": "8ufr6HGrFHq17pFM63cx397jGN6Sr26RFVtHrnnFD2yAP2bZi35jptSexc7VxdCRrAs48MN4mwqXqYAQ3PhaRBr",
  "key12": "47DVcqRbuumv1mH4qddLprh572yhV777kFpngen9zGYjvnBwBSF4MacDpgD9cSka89z6Kz5L11jRDvWL2Pq17chw",
  "key13": "RQrvUF429UVKHTMLPLHAByVXkphTUSjAAN4RMXBcLZExQTPvgtQj9Bt1aq3FTDJxhzNa65RMESsD5jYHTGyNacD",
  "key14": "5noTWA43Ghi7d2ngoUDSSsfDVnxnFAAZ4UWa2kaiohq7a1LMTFv5KfmahbdiWRnqgiZsWihR8bvKYWF7tzRYbULT",
  "key15": "42mn27EhQBAxnJbwRVhUHw8fYuXvA9KKT43jQ3vdYATfjyU1AoyFxZp3rmrPFVZghV3XRLbskGP9Q4nsKNsmGRA1",
  "key16": "nuSy9eAUprG3iNJtqdN3jrBrecLSW7gwMLiDS2wazVWiX4t9o4UL4VdTMJGHJzxyQWarqkq4VaRhkoEzvvtMVxB",
  "key17": "46QaRDCP4PinFAS32q9A5rCqG9pUbezJhMPoGCPjRSmwAxMUj9urKPrwixwdMByPuSQubWWZRzKXhUUxsKzL3Uid",
  "key18": "p8oNPbHfXHwxGt1xYWmonRBTk9ZweoLbX8xgPXH6Qisbe8LUJ4VnUbdNHNzn9i5UKAaxuhudJUdosSUVZxHNwWX",
  "key19": "3YaQuNS8j1cB4zZFADZfNLygZ31DfYfTWgjb4cQyyPYHPuB8Djmeu5dLvQC9oLksyn5n4XQ7jzbgTGeouKzeAaz9",
  "key20": "2qhRJUJcGqjkLVuGs8zx7JwELmyFnDQVrxFykauHBTZkSoW4gEduhTQsz63jd7pTmh3ncr3jpQfgGfx23LmTqdZ1",
  "key21": "4TLs6hGJdjZX7GiRoErrxSfY9YHVvuM9GNs7iet6b9WozF1ttf8MXAe7pGxKe52i1PRPD6YrtP5XhCKAAfeFVBFn",
  "key22": "36XxCfxJ1dppGqwa7odeQQkw4ckpoEPxDUbdcxvAgtTpNNZbNfyCbuNQHah4Y7SWV7W7DjpQK7C4hxgmTj77sMdt",
  "key23": "4dNoSmeh8UqqW3jbTArdzsZLs3ey57t9FCpxQxBMNjR36s2r9vtYUGfYPytYSGSLZSjexzo2Ltq5MRF9nNDh8g1j",
  "key24": "3i6YVWYAVQKGgnp8W73AB3NXzdYon4EAaNWzn1feycZ26MBJKrDq7mCBHmYt1MeWC1FFePWZrD8MuTzFFuZrfXju",
  "key25": "4ipzJBP8BQeQLeaY5sPXH19eERXfodTvHbU3fQ6mHjFNqGx4v8EG6Cu9S4esz3TZUgWrNyW96jm5QtZ1BakXeacc",
  "key26": "se5p488rHemTQiLSCvzPC9MQEW3iTALsoSEBgEL94m1im2hVUSW3HcZyjb7LAZeGRNemmCgDbyBRCymhG4wKjrW",
  "key27": "4hv5f79HxYazSoBKsKbE9cctYbChiTHXtxKAN7um2mYShee5wReuSRBWMD5QnNhEvFj2JZLiYfTFvi3CmTmmsSkX",
  "key28": "3gJh41DDeHM6zUUJiYUvgagJVyPrmaqjXsVQguwmfVhXAaRz2mNPaMtctc2jwiKPNuXJBxYspcL8ZjxPUWwy26Ne",
  "key29": "2uTaD3WJ4dGDmBj76A2JEVak7ipAEjPVZZGSgY9eNB3wBY5iy6Xqq1EgfA683pudAVt2zUrxnrmbfX6Gbj84Jkj4",
  "key30": "53nHZp7nyxLYkqYxUK1hrG6xdj8yFW8qUsvCtxFKZeFg25ZcjKc6Qy6bfo7KTYGkgPaB2kk2fq4WURexjhw8oxRH",
  "key31": "2W5mPrE7VfbKjT4epxufcvAMAL9Q8Vg2kuu72mjxL8yDYvMwRQMTW3gK9KYYyoa82Zohfy2jjAEJ7gvRYfBWQd5t",
  "key32": "9MH8kqoXe5MHfVdUNecLq253BPyUEPgo8EqvZUpr9q7WkV6SYsEdP1BPjcKx1bsXoXtm5KuLvKixaP3DjaEA5Pb",
  "key33": "5e1b9yvLg1h4AQ4GmmekWbzNDzFuVUGgzdVBBpbxXTceA7zatrzdy5671irrCCQuhxrjSaj44G48HHoeaPReaoPb",
  "key34": "nxQYnNv9VW5qWX1abGJX2LmRaLYgmEjvkzTCQF3xKcaB3jTpDDgjhMfBZDc5YqQcSWxngKw3zAfJHiydg3SsJLi",
  "key35": "3rCyR7ndnzD2Szir9yg9jX2s7u8wR7udDb6neudoSkZfkYCaxCVuu4VfdCdH9htQ1MFZBaS9SWZ3uXFG5T27MwiL",
  "key36": "2jpbyZ7EByNimW9JxVAwpQBemfjVPLAgWWhrh8SBxeRB1dgBf6pxvAvj4MuhmLp3J9Xndzh2TCwJB4ibaYxT55bu",
  "key37": "4n4QvjGnXD4x8uHRr6Efq8tugZcQUMsShh4DWhUTgWmxre4qrjxJVjxiBE3WKrMbHRry7XWsFGfgb2A7NEdPCePu",
  "key38": "2rsqgwiEnZWp3kLz5AcSEAfkvAgE59QxCcpqMXHhy2EdKdwxiRHBGDQR6jKBNbirAecX2MiRjVFzxX6dKF92Th85",
  "key39": "qvn4rNBU8rtE2srNVpnddj7XykjJNuvsWjQ4dfJwk2SY9GZyZzfh2J6vDc4DqNithT7t9drspiWLWRis5tFihWY",
  "key40": "3akwWqvw9MqLDrSjK811YD4ueUcupvN9jymygPKcr4Nc8H4mizLVnVg4DGyaXwMMia33SscjT7WaZ3AH2ipiEFyB",
  "key41": "4wURUqaU7tCzo1AU3vbbVkiF8NFSmak8XzgKtJAHAFiUKbyGiKsQYbdWQi2MK6eFqpYDD6gX7Ez5frzcBkYeKsmb",
  "key42": "3EZttohuBJwacS7bBbzSfZCnrNPB9qMTQ44Ni4C7aGZt1EsbUn4uB1HxyeTqq2k17x3znspAn4czpzNsC5uityzh",
  "key43": "2b5JRUrqB5C45SeySPuDzTJ8Yz9zihMLyqxsR38JFz6c6StSU7oUx3dd8hPNN8D4fZuE5bnJDirnc4TgsM8DApyn"
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
