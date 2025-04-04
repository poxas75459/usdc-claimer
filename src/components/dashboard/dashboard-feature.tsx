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
    "25cnU61Dr8vLqWpqWxanT86YC7zzqVLRkdN3RWDHyhfGUmrwB9sLz7bJyTxb5Rc1drT5fgp486oi3oYNB44ZQ4hF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hrTgF9QCUapD92xS2N1yWJCytvtkqhsDjx1oeJBw2LGTuZ8btXaHJzGyzGFHGrpo1D4aXV3EXidyya11hYmDQDf",
  "key1": "2zXoEiAACEPjeJZXAVWyKvBPdQBHhxADoJDuoCWxRQhxNUchXoHbUngPk3G5mKcdRLsTfzUnM1pp8ARFn1dBCmou",
  "key2": "5s5DHabqThKgbxxEoVa1Q3FPYT9uAyGabiTDFgijsJFwkYArsoMLt6E5LriLqrQ8JZrWrfpDCmK2sZ82HwSpxRh4",
  "key3": "5wunDvBv2GjWJPjNA1iwztS2fVNfewHzaXJNjmYD9gZsW9RRsf3tiAohHkiuxXfS138kGPLMsBvbgY8SG4QygMCF",
  "key4": "TzHFJjgTVJN5xP6vFo59vhxH4PNEgEgFCXK6g6BxgiC2J14BL3dzWXPhHyq5WNvuS3W4PQZGy6GTWFYEs6WKDEr",
  "key5": "5H9EhHekLAT5UpVoLLLzN4qPtzctS3CxaNhFEsBG8k3hG9Uexvbe7kQmtnuyNg3PdpLYUqDhjwk2ZbsgcaECJBTj",
  "key6": "5jgTa7GguTq537cgmEHASjFGH52YqUYDcY6H7hameTBrsPNwZRnBfRw7Fx7yGvJVKY3ikeqm63SiXNYQusFfjUQ4",
  "key7": "3XD8kneUzbzkmSWJxKCoB3NCZZvJ6nrjx2LpFHTD1aLvSqXX76tqYDdEwRyxNpdjcDuViEJfy4urHWQGGtbGPspP",
  "key8": "5hFEU5bSGHdT3MT29QjjGC5Nj1ziciYi7etezMQ4zLGRDL6Xd93NQL9SFKZRKrm6qYNtApDuW33GbioTdxgwKFBW",
  "key9": "3mMNJbCV8ZdV5EVk1x5pXtLj9KnyoWizEjDvqyHZZGUEAYeH3654A8taR91vj2RoQ2ZZGfEbU4BwnFb3iBhRhh84",
  "key10": "2YS6EQy3QJHUoUNPXdBguPt9cMyr7RogetwH7s7VKbTgcT2UVJJXZYGLEdiky66qS6VwufnmFRHdF8o3XyQofAEr",
  "key11": "4GsAfpXkRtCB9dQJjW4iiPLwuDTCN1M6Vyb97GELPMEpSCRLqTPajnVFQatKutwQuzZbW5iYMUkmYzt6XkRu8zzG",
  "key12": "4pKnYhtQKBfuUCWM3xzPDqduxkJCwpUu6u9KQ9zPv7imMnTp1RoKZFeiyp9cpvWRQAKMRjvLo9DZ2AzfUkQ64TvT",
  "key13": "5ty5xrk76w9d944uPjafNZS4CrMmith4S3jGKo4YPKNLd2VZXmC5qNMvZUeZ51wsSnhpjUzeqMryH8fTtsThXpeA",
  "key14": "RRFN8sdTsYgscxpX5BiQAjHT9AtLWL7Mj4Cfkf3kWyU6vPoPFCaTFaERA74ULYVq1NJrfr8FRduYzc4pXkGasgs",
  "key15": "GrB1cjVoLyLNsPA9NvhaD3NBUTrAP3dS5vWShhd2dccoSwEWCgXWjbukevfLvJ874LJTB9QkxxspNF1xPrHNv8k",
  "key16": "4gnD5sbmHpf8BAae8hPy8ZK5wznUACQK44WeaRQZSboihYEHcqaN993kk45MDUFCqjCe4KEoZwd3Qif85RhB7zjD",
  "key17": "3xd69rr14AM4t7iiXK4zsGos2Vzq744DrjzH2yn8kqd26vmFbDyZ7kj8TZkWsTG173SumrZGXuLqJmM68Wg4ayVU",
  "key18": "Y9pUckt66g7WHhXafj6BgsF4DEUt3J2RzVZs5EJKb32MuQBK8NwRo776dwPxkxRyrgNNZYK5e9gcNQJMTomJmtM",
  "key19": "4M5UtmhfQfxGHdnaa9CnNAxK9GNxeHSJkykjZDhnchHhFCuy4oYjM42atCaUf5sXzh2N4uHhJmfZ3TxbX9joqtrG",
  "key20": "5jSygcD7BBXhRW6SMWJhyCopVrzDkoLHQpmoP6ZbJAfyrWnEZxhcvasFKLZDGWCDYi7aa9htsTSETd39zS6XH4B7",
  "key21": "5PCm3NEvVPcyzWMFMBK797yE1bfsdqArdrLHUGPvg9gb6x8qm6xMHur9hJCB2wb3E3fVRVjpRXMDnMydBfuiuHQk",
  "key22": "23tFbDN28TaYFmNpiqpEzwhetCxkXbNXpLvCMgfVt7CkacwpfJ9Z989JftgBAG1UcqshMzYY9cCKErd4vKgwRfPZ",
  "key23": "4SZKDcdmrvXpgcJ1nW4d4C8ZPCZohN41fFEVashJH5c1HC7qu5H82hRxnsKfcsE8nu2dH32DrFfBgAbWQmzMYfDe",
  "key24": "21Qguau8QMnPC6ztUMKU9FfheDAi6LE8WskX9izbJ3ubVw2H3wh2ns6gmbBvZNMnTXBGC3uuCKAFe8NubaeKgRoi",
  "key25": "56MzVAoxSUDnbLo6tXGsPGXAfnhFZTxz8gsBuTXveM2ahGcG9M4FCxtriVcjxzePD5kHnjHNsUHbyHh9Ymku3usQ",
  "key26": "MhcJoif9KtWPDqrHhz1A7bZmz49p2Ddixk7oQnnLeViuW6mEMQNnoUAqhWXpr1HjzQB2cjN7eTsFEcJXvZdkZ3R",
  "key27": "Ht4xhwFRv5wYJ3HMPgADB8dKYSbtRp2fawzenZph5jXFm1wsMkvT6suBbKTbrJ25Cb4yEeNtbDndQbYaLp8JzHY",
  "key28": "9ZwuWJDTvcrZvaPGrQcgizFQGSzhjn6dCJYdjTZVc1dAnkgon9UjoAX2XmayTtfxdFP8g1kxZAFwHJtYJ5Ve8NP",
  "key29": "4EkWEPPpMjmaF2fgw9uibgnA2faJzyNYBxEcVbYTmRiTB9S7NaonRFBmK8TLEQn7VGZq5Qd1nX3BrWHrnwk5bjk4",
  "key30": "5rtUrmr8VrXfZiwe7efaxLAJKhS1kThk7XNhCCd7Etcxui1vBe9WdYmpvujQT868kL9fVt5CuhW1ymcUu5KVqiV3",
  "key31": "5gAwn334L8isJj95ngQSfBWsCmSqA2KLd72iHEBHeDwqzhh32HmXaEMYhtup5We4BVqs8fCKfpHf6suV4LNqp5qY",
  "key32": "2UZ8u6Lczc8mQj1gtDnS19LtQgayFPaAHmS44U6VDj2qgwSQ9dtNS76Kn9uZBMCVBrLWRtPKefVozDkHbEQpB5X8",
  "key33": "4GBM3Mr4d1LPbLhxW1ivuC51V8xQFQJ9ggJ4yqak15ou1doB57mQnrpKhG3iVV2AKiMFAHvFqomJ6ghETnk2Jgor",
  "key34": "5DxKK3oLhzwq1FZykKCjQ4UVNBTvL1yXMoQk99Fid5otiYWbRBaw9HyGwujUXXqZHGtbKtrSEE1xGdjgohgMYWiN",
  "key35": "bYEn6oqi7wLzVsGsz3EWqKU8WChXQd2zVfjJDDmVZ2ddc81DbGoYbkPD44XwwgNuBieGdK5kYEufZv43aFMYiLs",
  "key36": "4mh1uu6V77mZb3fBhusGa1qZTKs6muwtgKAjMxwLJjDe3D7Da9PProGPBCiPZarmmip9EMzQworLy6RCdRB1WAW5",
  "key37": "AwF1bY3xwNsfPWqVmg854SXFEedcaEjdsN18TK2cbbGLHo1Jsc2a6eanffioyigxs8BSqBJbwrtYoLJs4xPPsT6",
  "key38": "4YJFTcaBMUHENPSXDofJFZ6zvc5SF43JwXzqof7YCQ8o36YC1PjWickEKokSkMLgEpjpaUY636xGfBNsRTWotPjK",
  "key39": "3xBaBHDcCwoGA5ETN3hJbYXdGs3S7C9Btgak2rUz4yt8rGtDPpkE8rBwqLA1WgV9zqtiWm8oDpMkykDGQPsn6JBe"
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
