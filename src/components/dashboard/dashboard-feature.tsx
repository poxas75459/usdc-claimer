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
    "34b4EU8rvRP9sZYmJ9z59HaLXk1BikCjFjhLLddAuQrjoqUJiu1BADyLhGmUuGmX7KEm6WuCzPL78bjv5Yts1Prh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iMpL4SdUah2DGpqUhTR3kXidBizohpvtMJSU8VPUoMaysAnspRCb9oDBSYxXpUKfnYrrpB8rh6HUgdgFyCXyjH1",
  "key1": "5sqpVtSPpLrwy7gaBjkQZTb3Y1M6id5QEQAL9TsxAHYWxK7y7Ag9WGo6hrdhptpy7BiZTCoqDjucrhK7xBUofJuF",
  "key2": "3Hfj1M49J59KGXZ8QgoEggRtde1umJd1JjrrBjz6tapPSGPxp57URrjgRiquv4JYsRNLtgPPfCSNTxojViY9hNzh",
  "key3": "Zruvnvut6FQUQmBERhoeAeZgGHjKxe4DnsMS4jqad19rLu93mFpjKJ5KARqepYLwJAXTzwdEzrskA8AFdtA6Cdy",
  "key4": "3o6z6FAufCsPNwfUKqz8UhZxhtR88TGfx1Cy5TNcAYexc3icdueHWy7R9u8kZddpQFDxn3HMoCEsvQZ3rmc81hpo",
  "key5": "21nbvmmYiacGGe86yXBE48rfUVTS4VsqGAeB3DJDxpZnMstwei3JRU2BDQtNyR585pxcDgqBokduyPuZvrXSt3HE",
  "key6": "2Aijv4S6LBEkiPM2yiWYiTkULusEdvBPCn7vZnP59ZK6TFumbwmsghXYFnnbADrLaQExFeiY1zSoVYEc7xx1xE1T",
  "key7": "527u7avg9aFFM1mMhpBJTkNQ8f1h3dSZ62TWHv6qqQQuRhuReJbYFXHxZQQZA9XuCcUtANxoFXTJPjutFNNbPgw",
  "key8": "Sb86KKXsi4XoeDd3vzvya8MDcUxtNkjE7oeqngzkwNBAHGKs7o6QpAEACGvhNmiH7YvX9zBkaWULtsjKnSiQgin",
  "key9": "9DkC9R6DAFoyk29qjo7unYuns9JYMnPFJwdxvjNBcf1UEJxr1Abh1iom4KHS8U86RXtBJjoedCFNkqgkFZPVqfw",
  "key10": "4NyXmUpofc6zm1urEjb5UE6sNvXQdLvWjLfxjGU5kwpXwjShWrbq5JPjKFq8DBwBBRwhPPkKecKtdYr6ERFUH75A",
  "key11": "5NTaPJtDxZppCGhNqBHm2SrqbtKjXxxLt9zC7YocvdDsKrLDDrQJYv4t4RtSg9Ruex3Cu9Rjdk3z9J2g7TySftaV",
  "key12": "3K2xDZoamk5q2L4YgxikxU5Yffimh2xsRVpQCdSvAdDLa32cLUuDKKsG3Kyhy4GPtZWHsQ6jJZweuJpmyaxAk1DW",
  "key13": "2NxXiio7epe4Z1Dc6hLppKgFqFReXAujyxqPUxbjmoenobU2YrCZHdyMSHAmT2xQiqHPmkjgXoafHiGYN9TLP8xm",
  "key14": "4MQdZpK1vT8maDnEw8KMYgtduARbvQZq2C569teZsrVMCAGt2TH1sUapjuaCPeJzNNRSpyFRGjbdCUu6hV8L2ni1",
  "key15": "dA2nuMydNAjHi4DeW3i1au9k9YnRA97qe9Grum9UdoSSD8ivAnXWbTqXNGTEwzVP8Zbx4TLcHtPaowy7cz3xrtS",
  "key16": "3rPtmLPx9TiZVG7R51UcVY6iZ52ZBHKGfdiv32j4C977CXaA2oDdRAcTJHWLpkn9ajcRs7CHKKRKHd7DD8m7XSoG",
  "key17": "3ZbRWws4myyy3DURkijqgqQtUrkNSMzPgcPkzaXUbGe5ZCei9mrAHtU4nBbixvqWvYFL4tVggdDn3XgdtKNXuQBz",
  "key18": "4jtGhJqAvYwDpLt9NJpyEu9AVjMDFwyoA83dJ4EKYoxz67jKnKoVjZ8AoCgAMTTyCxKop2fUnM7cm6i5TuVTPVos",
  "key19": "5poQz7e2nJV2araGQfjKkaGbbyjzX57S2a43aRwdiYqvi7ZSdjSvCcGzx8sjrgDqkbmJCm8tgRwq4drYWXCZcDSL",
  "key20": "3XDm4hRznt8ufyowogtbskqW11kye7n7JMMQT7Sd7GvDyfYyuWBfCwru1GVeNHsuQF9ymTgRjZrPmqtQJfVb1idF",
  "key21": "4gTpsrfPWNcH2nEiELYFYrHffbre26VF3VDN7eSMGUPxqcUaKszCWdv13AYhp9VkFvEFa3CdhCexk8ACGi1bVMDo",
  "key22": "ehzCNn1Hvf7gHWtJGwrAnR8JEjCXwRxwNwDYrSfGumg8aagZRMSVJ24Jiq2YxejymchjgUm9Kym88XogxvLa6Kt",
  "key23": "5DEDCeJH7sSNumrUtbYwJPLnBkQe6ogLA771Tv3AhSu67pj2NYoBPQX6FB2mybhCAgJso4nyttRGvcsS3zp39BBP",
  "key24": "3ANaTaKNvRZTw8iFnmXDTGPMb4q4pLJGH863J3wq8fisqC842pVHmeVxGWWc64eHqF6hNMiV6svkDXSW56PUWnJg"
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
