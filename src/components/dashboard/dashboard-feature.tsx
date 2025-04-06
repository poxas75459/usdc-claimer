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
    "2bgGoLb7p5zxkUuPGRgM5cLCaN3GRrYwRtoH2tfiXSGdmmfvcB6Jdxe5jPRe5rN2yuqT6vH6UA61dba1gykt2UVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhvUUhoKFZ7QDXGYvEy5pFKp9cSWDMXBkv7kftzdXXmKQTLYqWSFxtSBaWuDwJAknbSTM4tfEHVAjb6i3P8adcv",
  "key1": "527YVDT7heejXQmEyrV1scP21bzk6UBZ31nSU6sm87HiRHzdrhBLgcvJVCzexPmaTwHYXL6cRiTDF2NJpBKce4MY",
  "key2": "T6CM8zcCeN8xjYge93rxGUan8DWwcoCfVAKvghDRXiR98MD6Fnu3ZTLG4oepSD5cFCLukwUzkKbbrQN7avBYpcV",
  "key3": "b3UyJ7cgFQ5JEmgSnbk95siWaGivDr5SNF7WWEop71zx5pBHVYSJk1FijHSRTVYa4BSaWpuw8nVXeyRWHtXM2tK",
  "key4": "5Uwk9mfRMwjXiqx5djwQTaX49PnpgptaahTHnamKHS52hEnE5fqghVhP7v3p6HA8nVPTFY3Qub34AW3sz5nKir9T",
  "key5": "3pZe4hi8XCx1hVwriZJ6eZtYaCTzNawbUjb9eDdgWNAtfDZDd6t6UfREfkYLBFEpWkxvQw9nbdsdTGrzRSkGFqyM",
  "key6": "yp9L773XPPotLKTXSkCAyMbG12ZWrmmk4FxRaErTGoGJzLRqo1TUwHomq8x5MshxxNZ5omFEVERJinkaPcfAoqp",
  "key7": "3SjkY8UMRGhH2yCYVFBCUM3TrbJiMLefb4WSC5j6dEg6upFEJyP5nKj7cC9TMjTVzwJ3ttAoXgnp2AahsHQv3kaF",
  "key8": "2vSTsWq59BMQ8P7JnBsXYASn738ZPzQcH3KSjxT4QJsQn8WJALYQgfEu9dCyMQKdDcUBuX74mY2fq5JzzASCJd7g",
  "key9": "2V1ZVTWU62PmSbM9nNyrnfJYtQMgHLf1sWA5VCE1e8LpoET5RTgU55EpfYGx2Ed21cmjEtXBkVuq1xg4eJX55hgp",
  "key10": "4VEXdXQ4ACZ8mdHnQBtvAtTVNTUvaazoxBzscSiiJFr3KPSimjAKdNp8BtsQEGSwq5yprgkSQnW4BipemRkv3AuT",
  "key11": "4Cc2pnTHaWgqmo2KLFA4DGVFLDbRGspcMMmaZExm2bYMGLzrWimX6ZvjFiXYYJqFzn65b1gDeGX5kxhjcDWJrR38",
  "key12": "5Vvc7FgftPekesVrDcuyRY9A2aeHZVgVAw7X9jNgzapUXLsFVfdatRoquLo61Uov8QL8deu6sJmfJdDQDKxHctsC",
  "key13": "2xwgKWmVRNNEZ8sBPB6iQ6hJaJmZdzpgAi5ujxHsE1tD3Yf222V4RgjhXTvbPape8tnTu8vnHeEAPbBRb7DuUJ3p",
  "key14": "2s5TeRYvZhdDA2UGt77Aqo3FZ8zops9orDwyJ61W9h5yprAVx62KDhY49cpE9kZceaSdLUtT4pWZW7XZfFTezVyD",
  "key15": "JpPTDCW938tEkzjG35sCanANdnqtoRtGcLsjj9rjiMn8v5ydtm2PLS4jkNj6QkryNBuTfGtZYATbMfn8XJ8XXot",
  "key16": "2d76HPkZhBAafApYE9JHA1y6HsDDc6v7QcwyLLZtSwS7A8ByRrYaFMVBpgeyD4sa52uj3viRPSxFAj3vF7W98wJV",
  "key17": "2mAWE4RuUWFd7wPWDVjymrmWvMt3qQZ5fcLEr1zLVQRt1LRbCzwTRJtu9qhZZSss6SyqvyPi4nP23tnh3xoJMCKV",
  "key18": "3cP298GjRXwyvizARRDzS7Yki3zfJSMW8XWqYY5kG158fR9ze5DiVhWK4QGgRZpDHiqUbNqKSJL8ehShqUtHdPP8",
  "key19": "4avfNwj7Hr2x7QxxWjfVZcJQ6BBSG1adf3jnyQVABr1dzTPp4VGVyEFsya2Dm2ekmkcHPkKyaFRQm5DhDzc6D3LG",
  "key20": "3C75UwgYXjNmKhEc8ryu5qKcEfY4Mnhn6TsMeSkYqWppZvo2bnEW1jwVUdP2go4rGbcYU7Q3Aga4BRVegWjQ6LiD",
  "key21": "wRSVfNcAHhgTxZPqQRji2oTts9huj2UfCydsjn3CJYTeqErhrSvp7xHoy8HudiGTnZt2ZXXySC4GmfHCu4USX7n",
  "key22": "4XmkRpL4wCVRxdXLpWeC5nDWiyXaLvMQEuefbUEPJhR3KzX6MEHSQ5fyyD7yjeUCTSrVvyfLdh52dnG9nxBWWJYL",
  "key23": "4H1RU8z6TfiQucUqeJKCi2fTog2DZ4WBRT2MDg99jCXSdJYBb96hipsb6iapPVMSAMiQpzVmwiDbx6RdyU87VfFy",
  "key24": "5UURat75KeUTkCTcPqkzJXcwMWkzF6h1CV3dA2JhvmzxGWkWyYCUrBQZWHqeAgVhfzfimv64WnQwrZijFPrxB14e",
  "key25": "2z6xbgVxtABd8d6DvUjACT7P7Asu4qwteSxH643Me8UAGMDiRuwcuWhULkzchxHwJtsvMfPWWcuQzuPgS1scAc7e",
  "key26": "5MDaxq83LEAPNBnj62gxdC5GzPCx1iJqDVB2zrEX6fDGxEYsjdyUJbzzJZYEAz6ZUocFfWEZotBaYoDJENcSioyd",
  "key27": "3vUgkNXNY9eu6G6xVBriLBZQY1CCP3en7Xikf95juWmnd9EmpzUDtpqVWHCcuXcbRU4ddbh9vBTMy1DR4wHKqEZm",
  "key28": "3M87gUJrBJYjvYzP6isGjWmsCwEjZ5a5kYgZ8oFLYa6qVcpyCMPmW8FVxQrKE1bsoiZKiY7eFkmWFaiWSFBF2YGH",
  "key29": "3WbrjNdnzKwTR82K3LzsRJpcrsiobke8gvk66nrp79446ZEbXYbhX27MoM8mgyTPaGwJ7FeRn9LxKiw1q2NtuEYP",
  "key30": "2ykMaUqdbyGR3hSuc4ABR2eyTty5AGqHtnVNxB26dziq7oHnEqemKuuZD2ag1qsaWP2NAPijtrbRoSVRK4xqmqWw",
  "key31": "3m9PNxnBu1kMBWk6mnEMzykHUfdpSTovVmqob1PZMNVcs4iFpJoPBDcmsZUHeaV8i6DMT4LTfKg6xiVgfF5nUzSm",
  "key32": "5m3dtnoWEFmoHrS4mq6xkWyhS6W5gqAcQnR4DW3zDCR5YEBg7Vx47pC1xb3wJUicdKqkLhvdF33ULkp5JuThzKku",
  "key33": "4TcNve4S681HEtwh5mkfY6aCHTpkzKMDx54j7wBcSvkSsc91He6xac9uVKjHKUw1CmzSTXLUxSm2Kk4wLYuKDEXs",
  "key34": "hgCugAxGvFGrA6yYQ9hEY9aqPZMn8KXzjEc6LS8vG2nmM7Zg4ZuikQARabG6yS4NzhgCj4RqkBMeNcnYNrBZ23q",
  "key35": "yoxMABhGupcJpukdcT4HnTbEmbWZzYZFwnMwm9MxcyfsH9LBzYGhbCi6N6MVzWDcWYN646mM4qZuTGWrqBt8eHt",
  "key36": "KTipypssBVs5RCEC4FjkaRcKgyMkj78sDSg7eeTSvhzYJjTvuQV8CmJKHTpTzEkv6bnkZF4CsDnyS8fXDX69wMZ",
  "key37": "5ScZ3MB8tHrJGW59tzJ715XW4gt4yyGjVm4EQNrntV3jE1kVRauqk7vqDxnVPpEZiDzuhUREGzbuXL5D8h2StFu1",
  "key38": "4rGb8Ti9QeXG4Lc89gyHnESG92rXzyLiLz5hC89muedmJpLJykiLM7MQyuR6drqdQZjsVrQr1soB6U5HMLhuKhJs",
  "key39": "5nsSmwemoU8ytn9CyFtJwRUMAFPkw4hCkYQY5HgQ2CDXMGWtzgHLFopBzs4d4ss1LHQVvL4ZYxLm3cvBMR6S5CmJ",
  "key40": "Qzxk4Q6NoeUg2CJsxf5VzDdbk6LsJv4Vpe2zt4evg6WWVaXHyozEbVsyiJDtjPCEGxcf3CymJKQP5AaLL91LtXG",
  "key41": "3Hd2g3MK1PaZhYnCmcWQYueHcKgL9cxcWJ7T5saKPQ5fa7hDkN76FPAPnajvD8QKU8XJqa6K7TpN3Lff9WVBhEw6",
  "key42": "noe4fszhaWvbmCV7XvacbxShjaLg2g9eJ5hc7A77ke5TZPrQBwvL3BzUdbqhz19hwUvnPNmA5vKTQm5tqfxNhij",
  "key43": "2Ahea4g2jLWr7zEUo119cngcvQpiLXGoBRz1tjzZGMEQQYNuRsv4zFuftwo3nLKRpf8nseFonbnfgh6A2HuD6but",
  "key44": "1ed2CXBwR9wZeeR1KdzPGrPURmg76fW6ojraGUc9SkyBuFJVX472GBpZqcUt3yqTuEHqa4gAdM5jmWxkwSGBpoa",
  "key45": "2fvWnB19JJb5MxmNfVJrLFqSM4Xi5XXBNKWALdUSz2GZDnnMppcVWYUS5DmEBonmwudK5dxx5aL2SBmjXtoTHKiz",
  "key46": "62bEu9JGDXAWKtBuYr51P3su8v1xF5pGEs5MXAXpvLi6Gt8wP7D6c8vc18PebhpisYy3W2F5pXrLRNLpnx4b9qTK",
  "key47": "2FwJP8nXD3wu7MM46Lh9qpTmQkYnnfeSH74cB9tUpbPK1HfPo3rHgbGs95rYe2mjD9nAphPNBSAhQxRUGbCbBi9G"
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
