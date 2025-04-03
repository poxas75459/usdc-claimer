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
    "3ysd5nccVqunhyW5VtEd5hKr5ehUGxqEmQMVBjBRhYfmE4dLjdgoqPco2ah34NDhZRmid7U9snE6hLHmcom7R75H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pG5PDKpNUmDKFJXGhmwHK6vQHiTX8L6Fy8uGAvWdrisJHWTB2rxW12AnqRLcwYudzEXX9indMLVvPssyYJUfZj",
  "key1": "3E99Ur9RCjYmNWcMCugnJFfL2QZKsjLWkqgj9h9YdsdY4Rc2BcSgs4wPYbeLFGSuLqvxr2hXsJs9dedf5qVpK6dq",
  "key2": "4EyCYLR5Mu1hS9EH3vxMeanyVgttDQYT7W3cVP6dhDHXGCqHQ3j8r9pKbMFemjSZ1MFhexpYBKh3afKyDPeQ7F5d",
  "key3": "54f8K2BZEqpTHLctqmF3nX2ULP2Cif1znYpJQbshwkvtjYvbR6Fud1Wv2M76dMNWrwAaFsddmAWWdAJ2obzyvQp1",
  "key4": "4vRznu617JBHrtceimyXob7SpHBikCLZxn4AZf34TLFQQqvyPJZcifJsGBBWmFYThsCsjkNb7kf64RM5dF4jV73R",
  "key5": "gXd5TP76v6dXnapnSPs9B8YCcybuVu2Fb1xQ9a8zhKKcwJbMFBbTFGNKyS7h51avkBpfUGGptTEW2t7LxPNjKth",
  "key6": "63SY4rEkBeBQNQdKkV5zSwpmLNG98nRNqGFmgt28CVifQyT3uUNvLdmHuzxEwvpt6ecYmGUDV3nZB9JLLrcvVZna",
  "key7": "61eJFaDcVkfm9FPDB1taRcCUbYkNGfM5wnvMUyW7izrHMdKRkMprZQysj5X9fLtToHhZU8z6rYj74Rf8HP68mxbM",
  "key8": "gDuYE8kawYCXFimg7MxfVXv5CKAbg3r56J6QVitf7zYRrR5p3DpVU5Fv381nXcbpNLt1RbKU8g4ysw6A2wShM7w",
  "key9": "pV4NVoQe5GWAhahy1qA8N8RpLtXTgfJEsVWDUcLQWTh2BNLuGVFSb36LWPujZrZDN1iQYJsEaGy6tBzaGmiVAYL",
  "key10": "346fd1hgvuV2GL2DcJS7hd8sevXyFcNx4b99R1iBvjwRCyNuQ2CfhmtRDvxJQHEQh2uZLXqEoC2iW4g87dRZXLp6",
  "key11": "qqfQMi5GWeYuvVNN6JMZDKaLpnzbp1QvgDXW2iRUQFd3D8bu3zpzAB6K76C7N3GvXD7ghFpCSsKzA3YCSkVMrrm",
  "key12": "3bkwbygHdgb5wEDkgvsbK8ZsVBtaWvkfWW5dh27eJLj5QuvdCFMWJzng6j9h6hSN8zcjoik9sywsmuGzCz5SJ4HJ",
  "key13": "3jejVU3xvo7CytdY3ksXA3SQQpWZWJokJi4XfTi8uXVKCJcUpavAaLSgypLnoRPR3mQNHXkA2XawWvA6xMNcDBxo",
  "key14": "1ZSqf4QwpNvG9GZZdcuxM1T9zcR5LPMotNQEznmJ4PNPGJrPxirH1szxKw6NypJMfrYpLizVobQUqoB34teKGKq",
  "key15": "595w6mzFUhmwkrhQzUqUG5zbvgjs9hFA4jwGBu4fBWqdwt9rR3eFD81GLCJVtwKDuG5PdraBG3aV9CxXws3zXU8g",
  "key16": "3q42vruiWpYRP4orHd8JtMt2GrXCU1Tsfx39kkNRL3tjjTpTPRX7bH1RiUgTsTMpHm38thCV4VGuLx1CtYnQSfB6",
  "key17": "KAqWjgubmmHUqGoUPBppbddS14wfQS3sfT1rHQ7gRGdXpmPt7ofdaHDRyf5bE8BPxNwoXyDsXa7u4FErDni5h8S",
  "key18": "4H4L3FqEvWLeZtpWyVkzKwpPEYhxyqpegPXCLbDCP77wqmNasGjRh7FzBjsjNkVTg19yASotEubFK5HkSuBQ2Ujr",
  "key19": "4CD5xzn4nFqiyqMqakV87UC1GXBXfxotVhyjKWytnuznMuJz1aMtBYrTZyRNp5EVmfMtNVHusrszgdTsMekx112R",
  "key20": "5v8wPd6TP54qf4hkCCWb73wq5Fs7TgxUKMQX99KKYfdfLpqMr8RGuNsKv2pzya44TaWRpnGmHNXDwfGj5BqRSbfA",
  "key21": "2w2GnJ3XHUnp2S9QdEBetzRXvRkqKXqfWfDNuY7A9aebxHaCbxyt4FVYRHFgFzpVqmB3Hxx5d1u5Th2iQ7qXNUfw",
  "key22": "3nBjz4R4PYa7kPm2hyKdSeD6xCDpfsifZX9sZCba1tvKMsjupzaAzZwNxinThhtFeMEJHHvmnC14uxJQ2vRGXR2k",
  "key23": "4GZTkPhaD4iu4Yfgb15ruhPLWAQJiMiv93xU92bYQsQvfYsrvSTTrua4Dk3UHipuwKs32bGeL7Vat9dsQrZHCAS8",
  "key24": "2fAaYrkvjaeafmvVqjTpzK1yXCoanBJTePZgNS1AEKiy7vrZ61X3JXbDcAtEgAyaDUmBED1vUnyJH6GJxjU3asiu",
  "key25": "5MVHB3HjkxXgS4hAfphy4yLWFYKZQKCoRqtUzcnMZNbJNioQNJLhf18DaYgUJUSEpwCEMeh7D17sDBvApvAgqUqM",
  "key26": "5vusQrW4CYRpysK6Hahwpz8WLQANyRvt7Sckhs8pkUvY6uKhsstKVFUPbffNhaYL4yJcTnRpyHVhr9EDtTYCMMDC",
  "key27": "2ChwAGFvFiLyJwtzzBC8apb9Es4ts2hGXCXVnAV2cjCRZGmttcRZf88tTwvY4WURy3gxV194LnMJg3bjAj48vMNZ",
  "key28": "2LEovTd4WjQN1NeKSMvTs3hFYwDJ4EPvF6pq6Zcey51eAam8QG4twpEsrBidwQFv2Sg4i4uctb3VGwqq2ztRUeR3",
  "key29": "5jBn87hAwFnEZFuRoLDSQskngMFFZ7BJLgcyyi1jHh7Vp4CZ9boRBbQC4df4GCTwQ3r89PAMoMoHgT757c4aLUup",
  "key30": "vTUHMmeNdswM9cmfxpwKCEyyUu4xj7VeEprnYLXX6ZHo3piszTxV9c8wddumENogYfozb6uAx5T8AQeTt73g97c",
  "key31": "2L4wgRrFmD54y4uDBRowztYp37bNbSumuzMnNJYbtpvLhUu4crm2gzLEfRZMopo6PgiPUaQQaD8qe9fbHPuvha17",
  "key32": "BTtvKtZZYPTQKSfYWptE9o2xpBE7CEW7hHD2D6nyGKzUXhgK6HQ5sinTw3X4D9gMuaAn7TncG1uc72sFTmbcfmr",
  "key33": "AdkpuDvuEVjizju7t5CQ4wYpkieauSVBiWxHXshehbFnFC5AKcAjBX8QujhEXSNYWi4ivZk8HX2PQdsjf2XMBSw",
  "key34": "41nKPB7WbHRaf9jnhYCDw8JfvcKXUJgouKgSATsvkjjQbF6Csfbn9Ma5KJJVgqGAQWpzYv6zYMvtJhwxDVhvfG7H",
  "key35": "JuJE4Mq4PYbTwnSFkMDCfzLVCuw5qtzDAzwWmdP96CUezYDLiKvbkExmGEVsdgtCoGdoz433BKN59yPBX2YDfyC",
  "key36": "3MzYhASXjfpNrak1boXgwkBEkzkAQ5DZcWJ9Tz42MA1mKdVcYar5EvC6vDoLfe9vZZJsbf2yzbNm9s3NfhT549W3",
  "key37": "2xySTpWfk7p5ouBzxkUjtLkz8oApNwE8cEFizD45hLtJY8C2z8hhLL93EBG5WWrcU4oSshPNAkU1su6S57eyDLNA",
  "key38": "28gNCyKnoBmc4nLAQdSj6GceJq9DFWJZ5SJUVpP3xMiQrihjadXQgS1NqaxVdDLuet9YERiqoXdEz6BNDPefYrJH",
  "key39": "2j759JcTcGmS1RTqMeDmtmFH4sMN933rmgwvkffE754kHuqj7mH9x3PVUHgy43aiQUBdxcuMZjg6Bs48bYh8F6hS",
  "key40": "4N9nNQ6DYzUExswxpgHAK7f6jWKhrUBxZVrshS6q9x5XPEcFv2uE7JEZkYyF2FPXPCNpG9wTbUqgH2tProoAiW7K",
  "key41": "5NvDeo8pPeeFrNLgP8pC4T3xt1T4sax1tGHbKVB9344LXwT62kijv9axFakRvZk94ZhgJcc4kywfbbzzQWVwNQSW",
  "key42": "2Gi3A8R9q1Y54N7jNo686YcNgEm4rfztu6AatVCVaHTzVvPQdP76AM9f5S9Prn1YfNMpZ36spMBNtFLa2yMe8J5w",
  "key43": "2mcx6vstzZLSZeESn5Hucbv8qfrgFPiRThi2XubHdrVWKRXFunpaDiZbzXu4CYd3KRFHsqFLTyP6jXwhXa3Jw5nF",
  "key44": "xW6cLXH8aCBQqrWPKvpMCgNzTaqfC7J9jpsTVwWF7CvBEtm7medB5HhSM6eyiYd5iWonb49ifuoPzmzUPgTE9PX",
  "key45": "5dVzoXraNL9Mb7gWefhb98vp7MRTFS9MwmfQCxPJaUS5xq4SNQGkzWLqjV9PH5fipsGU5Mu8B5VLSZ9GMXFKTpYE",
  "key46": "2PPCrTd6rNPT2NLz1XHNsMGG5fqVkHjDpjJxYRwxXsP6mzoXUpCJq8vDXCCjgajUtX3Cacup1oJTWxaHjoiB62Px",
  "key47": "52i14zMWNsJFH9pzjZB2ypNHbH8bAAEwyHivyM1mB9BXJgzN8x53N2yxHmenCdhS71JkSH6BGvofGnHU4U31kT1h"
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
