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
    "psV1LsXtxkedi4Tk7kCmpsAgn1DAW1zQgteBzFXeL1UJ5RFV53HAe5tzrvEiDd2WHnPkhf8n1U87iUGppVF5DCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qu13Urtjg22stpBnUzm9TcgW8L1C3KV1T5wYEDV8CGB9DcVakSNHA8bNpqovpcTcjEFarysB45iqAParpEBQNUp",
  "key1": "28194mNVgMme1DFD8Ej1u3YdPYrF528EZxrxnnSREYRc4V6nRV81FGSS1KvDXthsSqBdVXTsExYmsTTXDgEcCCA6",
  "key2": "2x6LHuxHN9mEniEzgMRNMPgYNb9oh4YS2ojv4qNWzrRYmkLrtXtZuqn7UUvAZAW7z32fDVPvfz3hfyUbHUAg8yy2",
  "key3": "4ENyzPkLXpjLSdmriLEEjyHxCb413JDKkCkeztMz2R9yyKwxgswuBpDr4h1AGWo528Ra4fjhoQ4wPVdYe3GXyEHP",
  "key4": "3Wp5oVLAdZa2LYsGGndDMAh21s3Vt9wx7Lc9DBH7ba5gYjdfbXbFXSE4nfz5TCMiMtFvxkx1VzKJ3c9XNJ8ibT5b",
  "key5": "2zaW6r9Vd1xSL2aM7gCExjF3Q4mFhLoiphYxAu929VQFhP487c4j6FHvoB1Wb1w7iHe83tiywq8wtU9UWnS4dU5w",
  "key6": "25hub2Xh3QUWtaFJKVv5wZa9Qzus7nendLBH7QbWdK8yecyNRnWzR7KWbhG2emhDckNwhTcuK87BRUVewCGnHjGV",
  "key7": "2MkqEVe8K1yRDc2NBYsyNKsB8jf3KUJt3oQimHKmhqugRgnBJ9qYAwWvZz6R9v4JkcBkXN5TcnonYi4Z8FfDtjKV",
  "key8": "5Umm2S9M2uvw1q9sSPAkEkt2HAqT5feAfroRAj8xjpYZFWvx9fi6ei78xQtbLdwGDABTu9hPiFevEtJyCHy8y5Db",
  "key9": "5yr3SuSuaPRQnRt8EALx8ZZzmcWU3Zaj7W4jUnBoUdDL7aFGqpruZKQ7CqFtvLEVNAwf1rJiFJCHSHzTWUNs5dig",
  "key10": "2hYpTJVuaUM6UjUkabWLEoBCJMa3hHFA6WXhAH7rUpRDDQDwpusMVyxz29PiRpDME9JhGz5XUHDrLt5RMtZPWgCE",
  "key11": "5vpXnH6xqwLeTVPTXne6XXMhmyD88nNJGT7uSpqvkrvUFuBEJGYi3tasPZkP6JbfczJkf82RX4w6VHorH6vbfddY",
  "key12": "nNTtGdTvGUmqkK54e7xYE7SRLsUzcWaBoJymbzMWtSATwwwHPQwD4tAQBWAaLXeDeJ9aHyN7YikCoYtBkP1AbBd",
  "key13": "5MX3DWHrdjMKoYadDMfgpAaX3oF9vunHaBzohSK2VFALaCNFQZfRPKboTpPzrEFkmDpBX5mcsecBcQkj6aUSkQwH",
  "key14": "5MTp4bKTL1wo48qnjrx1eaAhL233XmfopkgbAbNnwEeD7RWQAjbPd5QvLRReGZw5X1drNJsivt3RfGvQjF9i1bnt",
  "key15": "5bUCcjUzA19biXuuo6aFFXPrFaAjPUWndDygQJ4dhP2hiMeEz8iq7SMjXHo8AtDCN5mkNxZiZEbXkBh1oA9dLPHL",
  "key16": "61WhsAzGLbHTtPyvqLHiUPKbDXj1x5gfbRaoF9SNzP6UCz7SMqmcHYi2tLddcht1REp68bAjMqAAsrSq63aBXwK2",
  "key17": "67fCS2mawBEysQcPtcGEWbzdLd8SKABwDhW2iWgi4PsGbbTSDg5VNKmA1DUbStBi4wD8oELhyzetSsWMHPiCjvHP",
  "key18": "3waMknRNpKFkapfq8zuFN3PWQogQ29bG3CEbqHvxpbEJBWkf2bWigf1ousLSHvWsbsGhAucfNjK2PgZfzGMnyTeU",
  "key19": "66yBRxt13cmPT5RNfVHmnsCJU2wAySxVGvh941Ed1GXbBZn5QELh3ZZTEuwV6X62m4FUCsRzGgCJYVVsbmryW3a",
  "key20": "3P87hp3xCU3JyMtQiqz7DjSf2fce8jmpie3p9AX1nnr2P7rDbPFhebnKQ3XkYGAfCmcd6gb1tCvmeW9P9zuhy5Jj",
  "key21": "5Cbj5t6BZUrUaHMs8UXBUEu5P3ucfXEK4uTBJxxCfDmF3Tit46hygCPnkcG7b9DEA1ybDHckHCwGgS1Qh7RUDwja",
  "key22": "22LrWbV2uHn8aVjxEaiPYNo7dwAwYWnPxkpgAGtjfRSzXvszLjs8iESUDuzEcJPdMK3iQTrb7y462CzokbQe8NpX",
  "key23": "3PaFkGqWhEqC84TMYCNBVaQikCpod7YW9wQ5ifrPjHQAcrtEetciXZBDco55fiLYAU3isg5UJN5FwDyVfJqhKv7i",
  "key24": "3edsgd1wetLPbz1zEtxDbtvZN81mKu482kqyc47k8ERcA6nAmeiJSjASSwZ8pDacVsf5Wih6r7uXnxYQAW7Sqmpm",
  "key25": "3dKQdQXERcU6MfZnzRUdUBbCKDGkoPThn5tKhmB5zvMvKfwJEvqHCffZHwrYiLZsAUCxBfo4mKHyisVMHqCeZe6o",
  "key26": "5zN11tJzzGHBRvGB7Bn6BkaHSY2xMRk66vEhwnNSenpYK96uoHV97TiZvc1JK74yCnzVEw69yeVMTLRgedc5VmRn",
  "key27": "5kSwNqV91uLbYppYSjdEk8NuYGuoEPonLFrHzLBx3sfG2JqPaWszzBdyfNjo2Lw9qekSjCVj2ERGJdnd26Y8SrAh",
  "key28": "5JhD6bugq1fWxbejJCSiuXTP4y114zUkP8WpD9ojnoTvEBammJYr8LDFdTTscGV8CJ5LHKRNx4k9pPJquJVTZrT8",
  "key29": "4M5VXCNF3ZXtqw4FLZaYgh52dodr4mauncG9CzeiRqPLgByFYAiqe8dmgsdFzZpf5gntLRYTo1bHnnad3r2UxzhR"
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
