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
    "3rvq3DSLBgS1myc8qQ1hSkqTh1CBjzytepHYT6yvYMqer4HKfEUKv4XY9TBDQTSxkRDFiV3BEZqb9Y2SmGyfk2BD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HnXawNEBg6rsuFiZsBs4RN8heoyDWYWUj3ezLKP5AMk3kfrd1gLGKbAsmowGyKMVLkUZT6tn1CSse5sFPdQaz8g",
  "key1": "M1EBgGt1ZqMLnzgPbTfgBamjm78vwjjvfuYbsjFhcLgb1Qtrjk46bBRaaGjxivAUguwNQ95bxKpaqghphv687DS",
  "key2": "3A1ddLAAKmHqWoy4JQPjN1XVYfnvmmSWNHRgiGLBNSLBp9CD7qAbggYHE5ezrkms5hhDD5ihUad6SiYpLDe8bKkG",
  "key3": "5wskGNVFERYkdrhYjoMuW87wBiDFr7fwUiL5wVFFUcJzL6MrZh3F7U63Bkp46pEmiq5TpqZyvwBPY8wqAzniWytV",
  "key4": "Ehpiuv7GcmBYaJtWA47Y77Te3HL1jP1vPm3XcyFSgSFqGqcTxkqCR9ZM1PoEn9xx7VAzW6RtS33g2YQJwHZkR92",
  "key5": "xxkoPZmPMvL5rBXtDxPyp8KLinJNshkzHCWhSwxxu8JegHqC9FQau3GHX3fC7FhvV1kdJzhdYrUkbrt66MQgvxc",
  "key6": "5XWJaqEwSk2oEwbwCEDQaZqUbsCyhm79fkh4VQ1HSnMdaHo7ws9896VEGL3HM2g8mHrE6wGxykNUA1GjauqYV3Dw",
  "key7": "t9UhyWo1bHJPsHHHoBB1YL3rFxKFxVDYh6SdBziibDAspxcdboH8iu2gUdfDSSz6H4kW7XffZT76vA484F9Gnnq",
  "key8": "3HYBdHFvr7w3X3DfaR7BrCoMF84FxFoM7WYHLFvaQeaRKmQKm7uUY4a45FXCYHsQiAfB8TjN4np5ETT4oAADdkGs",
  "key9": "54aEuiYCyaysJnDHhVUjuTWyjGkMvWY6AXJSZ4K9djMy7UJRzifBehrje6uxM1xVn1vLsH9hMReL5Qzz6EP1tHsv",
  "key10": "4mbjCJ8EdNp2Gf6vvWefehBmPVAM24DmKY3JLPxt2jisXTAqDMxEhmKGBWLG9GZ5ijfz2A4ytPhQp2ziXxG6hxLi",
  "key11": "4hpitim8vJVnhEwXodk58B4UQy8EgKM5oLadVtahswX6StHQicqxnDq4eFhGawACcxQmE5T7SsaDMpbvyudHvoMj",
  "key12": "2uv6HbRyV98BfWykdRU5tq4Maac3V8RPcTXriwQ7VRWMJmvfGTPxetMA8R7P8bbhEfWXqP5k2HVF2H3vG7s35han",
  "key13": "23LSvq4JtVzhf9eAEEa5D1RbVYa9Ss7ewzaJpeiSsNsfUAhYLJmMMpyMgweQak7FNmKmkUhMNvx5GgfET6qvkzvQ",
  "key14": "2Xtcmw7QvBVfWme3EAqQPbXBz9UgbWVVyqdcDgndpaZgdUF65ph5EJ1wb18PXq6MqyTjBwRAh7Yj6z3d7vcU2SGo",
  "key15": "36qsF7tENmJ6RUo6mur1KVJ8Gz2PfP2YLNorSNgbWT3z73e2CTTvCTvS8jq2J7SovfckCPJyXUb9W5h21SyeBiok",
  "key16": "xYmo1CxxVpK2u5B5WRfGFqYqXSAukY4YJhuoCKMpVp9LG6YUQf4f2953WSxx8NbNXHZrKS8UFRgu1Yo1AsB4cNh",
  "key17": "3Apx33CXGchQnLH7E8PsgnnEGmnXgKjg8GqKH4zjsxLwbLdb65TWP6HVY6UqkfSo6d6VxxnaMz4vbMd3bjCqpAqY",
  "key18": "497hwFvBaJKL7DFLsLRkexoNs7NpDQ5FinkhtGQ1kFhtHBUXRZYznQ67vDG5tzGNqjTtTMExbHwpVqHWbCNCFVe6",
  "key19": "5C8a92cE3EF8KX95S6JrYyVejuFpze5eEiT8MyFTNK5eEerNNtegw2DDcxHDX9BtPfRPqQ1YmRQdqsDBW3uoysL6",
  "key20": "4HfBFVqqcvwFC4nThY3TnZHz17mw5B3cWa2qupfAXiZSQrFvcY7dsAKyqgjyV3PYQYjMviujqZU3opbbrMTZkh6d",
  "key21": "qvfSd7TCFTegAAauCSgWhurQ3SHzGoKrdUQP3koma9yGc9BK4in8JyT5iHQGou2bxJS5xCegwD6j9mv9wgfqa9k",
  "key22": "4RWYxvvX2zgRiFR3BHTN867RxhKyk7dGC2uU1mb3kt6b1uy4FkXhfBACD1MpMc7oD86RXzJoT4WfyUnxfsHFKPyU",
  "key23": "5wJevkZKpnAxNysAG3nrSJx6ZgDfRZHDm2aANDEauXrsx5bpjkoi2n6FYBRBD5e4dyR3on3dzEUFUzZcWH6JHiQv",
  "key24": "5Nty2ye2KnrY5tc8Hmwwcr5Fq2CVMqhPFwsq1d9KJXpztqQhemQNfKjtj2v9Zt299tw4xVzhNu7je6wpErzBfoYy",
  "key25": "6Hf7x3MAZPyqsQsB85D5qaBCg7KEpRCy94uWuuaNczz77VdU4Hgr11sZfcaivYWBQejoMR5e2XCj2PKi33vecuo",
  "key26": "2jstzJ5A9Lm53FZ738rLMRizNeZaiCf5dVs5LS55FTXmweZ2HoeNW1rWfpSrgUX8RCEvBJdNJQH9choGGBhL4AkD",
  "key27": "3rogDjXsP6QEQpcF94bjBa9G8hyyUHU6FtZCqBnVMJegByi27JT2MJmifX5p6oSRvfLzQcF7ZdjEFgVX2USvrfVw",
  "key28": "4tEx794sC9tZZcyEZjbf1DXA5Mf6JAcvP5u57CdSJBUK9TjCj6QhzQqJX8L1W5uywve4U4owzkoxceGVjvKypb43",
  "key29": "4wt4eh4V4JL2HgbKeXKDZ6YzvwNQugLE9ugLCe5wuoBAqMHz4ssRZe5i5WWxxSjDAaTDkzU8DnUAi3W9ZHr4i1iX",
  "key30": "217J3ZHLJejPEzVvds6qVneA3UKchhmYE6XSLdkxb1mByiyRWaegkcUdg69AyBEKQRiRSi2SJWc7xQ3MixjznAB7",
  "key31": "43LSHEYrYxHgVQVt9L1mV3CWRzpWpaEUWWj6xcT8NfDe5YrotdWaJp1j3rB7RUhSXH6ejzTNfsC9ADXm2eKYjheD",
  "key32": "4JSGoLmDtiXzBZS4D4sxJJnE12nG2uh5g42cJHjm1eUdZ85NMpfknCPwhxiMv5chvVszMPDMk8QXqimQbdwxAeBg",
  "key33": "T9A1WE8g5WvujsVYwHJYzS43Nu2CGCk6cipXHVjEEebEosb93ehZgVWSSqKELshhrHdJeNxxZdykR8YaPEQKdTJ",
  "key34": "2CkzoVFXakRRDciNRHwcq3qG5HUWzQ2pfmN1FP3wSaSuctqeid2DgYuSX1akHBegzsk8EjefT26DHbyCqaxeWGbR",
  "key35": "5ntxfBjgN8dmiPF7QsL6EU4zjdjHEZgVgrcpNuY7TMypPJvHK4SzepoEXoJ8btjtAasKNJzuEmhtXhQ7soYS7BJE",
  "key36": "gT29oYXJsHY7GjYbo38aKCuteSDBzUtBTnZJeEL3J1Lqn8SrACTCs7pxMVJdogrBZmpMYQQq9HSnieyJFrZhLSH",
  "key37": "4FRhCsCi8c2fTBve9ZL1uCfi38GZbLsCayjQjpBe4k4SPN8FqocmeFZNzN9r282n4Jwc19bXKPAn5ECsGhERKYX5",
  "key38": "5yYH8kdz1JmxWsp2MdfaJT16arEr5fthAXC9UeMV5tSY8uzLKunJD4pAz25GVSKQq44qzU9r49UqMsZkwncbHmxC",
  "key39": "5mMyc7LkaGdB1QEFtTDsykecedTTKHPnUWzyWfoBgbqWXQYYVGA1oHaYtGksZM1yGFFvVRMTnnpnHpQqCbWtGX6j",
  "key40": "5iLnLZsa8j7HyCEfGnrTR4MmpCPEmbCo4bsmjashGp9ufZoo1M97Lw4MqsHN3PvCGimwvu4j2p74gni5UbqHf7Co",
  "key41": "24fZQTQ52akjmzdZgH96npDT6iU81a3tvQ8oBdS2jkRc6KcHcLCEA9Gh9zHBEPkBcb9df1Uq8zkFSay9shzjrn5o",
  "key42": "67JEGmudavjVQDD2kusjLiFrPDpLG5pujnL5nwtJqwcRrHCKKPdeMfb3qC9bwN6d2NKjuErVXmHFfY9xXyJ8Pby1"
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
