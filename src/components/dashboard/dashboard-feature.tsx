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
    "44vYwsKdyRZpxPbjroNrZ9uADzdJURdtfkrjsA343x3pQj1Zbo7haFwoWMJRwzTaGSXV6xG1zRWQBJpK6D6XB7tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6PP3qkijE8W84ZYbHgiGiqjseEwjagsBYvy9DqHWyc8Hb6BKRah4kmU2twqcXVtbc4ZmhwRcZnL6ZktanimqiBx",
  "key1": "4S78CHWPefGTCVMvbc8vsrzDWqKjEF6go2f4jrStDCC2a7JFVUgF6BXhgQ8ywsCeX9k4S8rvyTTgkXp2GhZ75HdS",
  "key2": "5htCSofHtRSsLmpmHX9UZVEB39ekgUvYu6PG3zwm5YEqKHzQ12QBJHo7ifKsRcb1bDGBWrwJ3EMXWcVb5BTC8Bzq",
  "key3": "ciuvnMDamuMZjckYyB1xJoGdHg5Md5B5UcwkzDQW5T6qbeYy2QrXgNEHRPk4vjkn3kKF8AABWq76hygFGeZWRiZ",
  "key4": "4YBLQEwTcd4SVSHc9zTG2r2irvXpsr1Zw1KdYrtbMaEFPXwcrnzNhptkcwQo6nDVSdxJSabSh5o3rwG49SU8uxVw",
  "key5": "65L7UMQjHYi933go7s7yB1xu7sdHmgm1nL9cWi5GyCs64ofT1wZbj9w6dokgcu52aVzF3hzPa3WruyDXAyyBRxjL",
  "key6": "wiP6Aqkdbqw9cf2K9BvNp75vTYzG39jKEMJNF2bM8zu6TEdeG3NhSVvAfxsEYKLrgyPib6PDbaVrydHk86d8g3P",
  "key7": "LUzjMGUBV7cynbnAgdoXSZZuvMT4xdNtTusP4eP8rk2UL3UGwG8nhiaobBftfrBAa9BYFftgdpujXM694dvbtey",
  "key8": "3nRHVmq1bDrc2puqZaoom17cyz4EfumU9XWPs4F7rysGhjA8jfpkwmQzGAeJ2kZp5DK8kZow6hJBzMDstmwU7TgX",
  "key9": "48tvcaJ7Uv1jTfZmHLwqESAQ1rWKTr4QAr2oCP5XoT69NUPWpqsY86yJynpzj8N4WNJgbkcjh12UoTdFHqNZ3vY1",
  "key10": "5WBVoeZuLwJHTcxv3ReqfWrYrEtYaEychdB2pCmTL4AfP2dknKPxBKvnKUvLsqRTJoJaE9Fk3Bd88PfwNkGVJzZe",
  "key11": "mcLuZNEB3J3gWX8zpQaXq8hDj6dxGCKuvo6ngQqwFmj2UfjVPwmwrYgK3PUxdSSc19PK6DWRfnE4XRMcvjLBN3h",
  "key12": "5VsMNza3RX8pmt8AfKc4PMBwT5Z4D5Cu5H8WmU3gPL42V8rc51EhN94Y5cobCrz53475mAR7RhoHwXj6gAKGcwoA",
  "key13": "4RzPJ9ZgjwkJh5JGAd3krmbqtJe4fXZ4DrPu94qk7i7bGQoWvtjD4Kj5L9gBrg9Ra9L6Nst5zH3eWvgNVsPL2q99",
  "key14": "52BfYpj5j4wUkRosx7BgzDfAj96uTcAGvPm2E8BNYKbYGEx397MQMDAtWxYF1x1jpvdus2febYL4oJdJD3mh32co",
  "key15": "3r3yioNFqn9gz5iJC6GqjtyJ1oJZrG9NHd1SmWdnUXQ8DLo5eUTzr14cz7rAdYjGEgkpqNwLhM3U1KGhG9afV1z7",
  "key16": "5A7536pPPcJRh6WD8WqL39uDLvrcCdccRagJJgtsT4RWgZkej1z3jFt1A7VU5KNGVeo6iMWkhcFCnxD5fDHyzgRA",
  "key17": "ifeQWZysNsh2pjAGsNvpbaqgGSJPMkvPma49suggTLpK8FuQg7tS78SWkor4swBjHH9MqL2XDSqj1nQtNSZB4yV",
  "key18": "5qrCKbHEGRX3rgCtqgGsi7f66kwwbniZoEVtyjVuHCr3cGF7wGQEXBFEi8KEh9BBqLseZQ4uJbhtReVdonpiaHSo",
  "key19": "VfpQ9hpvW7GAumM8b53nv36geDVhJcMZmVLLzBnRbcMgE7MMHgwseaBDkwiRVvXayc8t996hoW2XSzjhf6SaeAR",
  "key20": "537mZm5PAaCZKKz7phx5uKZd5gQDhoA1g1GCfwWew7btZXQSRcDt8eeY8k7G2QvAaMHcog2SPT38RKQry7xnu3xT",
  "key21": "3crMFg2258WETpn2MUF519WuyU34bCWuXTZeXAUnEEUyEhLLzWoWG3hvZ7j9VuCSvurgc4Cyk2y4qnNjgm4oJytv",
  "key22": "4CHMEqfsqzqrLYkyALE5hhJSp6qZiiSNHTACmxxXup5p386GaaCskHXCwNp2UBypxUBFNVy5NGmMCcvpY54xK7mg",
  "key23": "3nwcUd8ZnofHyReV1u2JgqL71BgzfArEXWzb6FYtCYKEDokLUURdLk4oHQJxBF2ouNVgD2hJBtJYxSYgr1s4yXwZ",
  "key24": "5cCHybY4vadgf2C9cXSmKLx3bgdmgYF1vivkXbMDVDW8vwh2kfFhQA5T3EMsDVy5iB5hhk4VzsgA49VipUJeg2C8",
  "key25": "2cuSy1dccvmCpy4gTAPdTbodu1zu4vibZYKzx9ApT5koUVhpArcBh4tG68JhoPHjzTtu5stxdix22Ewxc8fo7nZd",
  "key26": "5tmkqCRYkLsDwnEuF5dj8HWRa681QGegQvEW8LVHHo46LMFaaaM7kPZyo5SRCDFpVq4Wn5o1jUDPJzvv5AJyEnCJ",
  "key27": "4UBzcegEMuiJPhhCecwQ9f4vs1L4HhmJ6DzX5g58JxdKGd9EiWCyWn4y19BULSwYkaiPLXx81Q8Z2nEYKrdLTv5T",
  "key28": "54w9EvxxSoqeoaCwwGiA4pnp2Um75ge1Tt1C8VEdewnaBXtFUsDp22VmxLXjGpE8dsxBU3aB43k6zszqZ94hxS8P",
  "key29": "216c3Netf8D1umfUKYiT8VtvKp6wT1pvDEmSZ1cCRHhCAm1NWMu4k28XvUKzrQWYGeVvkUjQKb5cxvjbEBc8sRzs",
  "key30": "252X7QsoL2pwa1TSdcNzECJ5fJLSF1YRHAJDmcny4tT71XbG3LjvYuxQxVMHJJBvNzQ7ufEEXeurCNdZh9D2BPJY",
  "key31": "3nixMik9KNeHycSFfTphoAsriYTZ1t3YhcbGiN3nLgAsd355axcmnTWdbQBpQ7LRAjh5oaUJ7z8bhrZCYrCeSeh5",
  "key32": "56gGCc8urVd8iE5p2u8kXuSnfDPssPCCnfEtLGsDKShzc5NA3C3dyDB9YNbsrkpHX7MnECKq2i4P8j7CPMZZTub8",
  "key33": "2FSZVeFBuCa7yshWSp6FNk3VWA4o6iCjXB78QAGff23K6yHuFU367B4xbE5KcBJBTDxN11umGdd1LvCqAs8FSMhX",
  "key34": "TvRP4M5Bsz3jK7ejfRjB1r6iKafNiyzxpATdM53bvweJeU2xVk1iriHfcfgq92BBoeuWxpxqqiEXMYDjD1uUZFy",
  "key35": "38MUUgxyuBizNKW2TLZwZBQYzJV9qQawUEdjstYiu73CwJUwWuRQAGi7RJNsm3zVhtuXwWD9pdDWkfZLjzx1hKhc",
  "key36": "4HQ9ZC14UqS6qR5qmd7LsrCZQzyo8nPWzDo4ToFQ4zAQHvxkefscFoXtZ4ugxdKSVTnPLMpmnoofdYktQ6KJfRHn",
  "key37": "A5VcGUPdvCmc194qYwb4jov7KiCS8MdGBq9PJg8iEV6yVtBqbkgHP3av69gcQbckQyRcjoEoprAxBmGgVHSTTXN",
  "key38": "5eYmLGr3uZhbaDci5zDuBRQEAvDguP6vGpkz1dAo21db5pFQWDUZs6QYm8ffrTFfmPfWVjzy6gww3jCHsDe3y1uJ",
  "key39": "twcNiuPPGGa4od5YWBij2bXKKnXRciYmeavZdt5Swm4FpJQRFg4cgKnc1i84T2Q8q5pFNZyoUv4RESuUoHJ1rae",
  "key40": "4Tjgy3Gf6gyrxCRnXsNNeZxf8NpoxA7bG5cd1LD2xxY2dH8abMHGrwZwdpsDDs41v2GmF5yNAFqmrvxdTx1FPY5K",
  "key41": "4zSQNLGNMEbbTdgKyYBTxrqB1wzyiGt3y9kV2wq771CDECJ6ZTouKTnuqL5zLoiDbGZ3NpGsS1oFyqyMmdumUc6K",
  "key42": "EsrWeTx6zeZekWBMyEPTL8rtSTBTYfHPo2k6JR9iUKpWf5bN8K7rSHSTtycHEp38sFfcVGmznpsaUnUZN1Wq3wJ",
  "key43": "d57oLUg9fYcxSgXxD4e4iYf8h4qUK3ZSjvqQekWZBSn8xfPfZpETvY4B1G6vPW9p4efkuj8NSQuHGnDrqnNKFTN",
  "key44": "2XG2ebp1e7GB4ZRLf5vKD9n63njQ5NdZgQZFrVtBJec9y3iyEFJaZL17ekRSdMijPXaJC4hLmq86oq3mKQN6xBXz",
  "key45": "3x2XTyiehL8C2Yy1x61UQZ4xNnmD61c4RmcSXvQwiX842ruuwkgFv4QSJ9axVSWfatd2hMLB31B8nX7PgvZ8JTtx",
  "key46": "4qZENpkx6NZ4thvRPtWMiYqBfW2KLE5r1m9TQZPGBb82vb8JwP73swX7HS6ueseXBWn3stEgga4YVFf32onh9fEC",
  "key47": "3rEBxSwVzm1seNsRyHhzCLCL7pQ9CBVADV2pPceKEqk3DUHgLQxdUTh8nLM9V9ESJdN8aWZ2u3qTfAhGFLkfbdZj",
  "key48": "3yXuSo88Qei4JvA12y2Kbx28ArXFQ6B4K7B8QRn4QWGXp14BWXkGTG2uK5AGrmNDqLYx1LmvmfYsjX2yJmUiE3hH",
  "key49": "KavPT66mo6WnyTTwpi2JP1UKrdpChmx5tvxLE1cDQ7HcytTLuYNHdZ6FXf4G8hrRNqXvmqivGKDsLjRsmfjtZte"
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
