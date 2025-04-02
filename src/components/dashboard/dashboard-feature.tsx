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
    "2ZEeUcPS5yNyPfPYgFJK2aZfyY3oHjPqXScLRwH4D8WpncsBJ9PQwgVxoM1RZFbrP5vNxwdpZ53GvjzTnsU4kUwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWSwREehsp45bsNSuji3YCa9Nx16BhKztppY9dQPEKexZHPb6dHhbuffqeTRvUN9cd7zxLjGHvN7k6K11E4Ws4b",
  "key1": "2PuYCm2futYQ8Zr2XadGevHa8tjYk7BfxdMPMQUUFhAdRPsTzQY2JXjBrNKrvJaRn1VSxNbgcaWqubN6Fuh2Cfmd",
  "key2": "25Gvhr8KVGMc8GJBSeRvk8PurW82mdxDeZjzpescVLa57boUm5D5qcBk62FG1RZX9p3b74hazmjLpWNj4yF94xNu",
  "key3": "4vUgA2ks5MmewBXM4UKC5kZMFwcbead3s7nKGoxeubtmZFiouo6sV4T8hJMuf3xTdFGsxQP1oQiiHpqpscZV78fk",
  "key4": "5s1HvPVU3fLSbTiPFpwpdHnjnw6aDFq1ksVucv8jLF5fS7obDPTFG1oqtjAqixoYU3mifSsjcaX8XkVUidUAuubz",
  "key5": "2NGFzQcytgVgYbkAdLJUvKgwPHeAWexemsV9fP2m24zeCXqx2AcGeWfJv96kvnpJTjRFpUVsCuZzfETo9MEMJhv9",
  "key6": "5Cm8tWBBrKN3HmCvcgVpwjNLzE6kgiGmyPq5Lp82VcDoRWsnBufaFfVkUAC5Rso8qcR1ZMdmWYePdUha36vvuR7e",
  "key7": "3eXrYBL4jTMo7tQni9dZyKQRCdPrWi83cfKKJyHPhZ1XFD5BXKhfkBJ8MkZWfzZxLXFhPQcbwbGzggH1xnMu5vvm",
  "key8": "cFL2D4hcHCqpp96HuAuUxg22xoeaZskNAtJEwVB6YvTMToAjvyL4kSeKqy1B337Gxr3FbFELdZAxxjeMT38uNaN",
  "key9": "2MLD3zLfUNKfwoAptYDFnnEvZVp1YMx3vcnXFCfxB3ZR9xt6LYcwQWtqQW3A2KkoDcyFUKJ2jDDiaEx4En77oi8x",
  "key10": "5dMsfkBNePJeaYNtrnbBLF1GpA3eQJA25FaR6L88Acj1EEYysWFsWhyYcCupAJzb92ESE5aaubQibUFa7gR9dxKB",
  "key11": "BWCF6oGE57CE9mtDM2Mmum9wKLkX7z9a4QqbPsbfD98vBCkDaS2GX1JUbBfzLVM7eXCAYSf26xnVNWz7TUrjtEE",
  "key12": "4kZc1FoRdht7BxdYex8DtJrhmGZk5bGSiMRi3RyFMgsbiiDPP6ZEvpQoCvRDb4Ag6g8Wn3BsMZs4eVs1q8mTAJT4",
  "key13": "4PvRJFnecALnQoMyTm9nPjjiqr4o1SSq9SapGLYdiA8RgqpPvR8f8PCTju4iUX8N23aapAZqcGZ6dnwuCAydjNSp",
  "key14": "4bT6zimEsUQmubNxuTE7Nvy1FRz1qNG6b7Q3eeUnFLiyfTbJQAP4AwzMXet28a9BTQAyWRt2kb5ReHzKnHPcRtn9",
  "key15": "4M2bbhSTu5ipyvfvQ8LbTEzmy1fiDar3GKm1dWmSQK14XBu4AR25wxauXsSXPNqMsgycwJ2E5vPK1p4EzNMNKaR7",
  "key16": "HjycYUrs3tHHWdJM6LYx9vkQS56PhZEiPHBQ9EBhrBWh7Sggqipg7hNMQ34ogrGgEmtF54nj5pZ8EymBWMfemc8",
  "key17": "3wA8ovMtAvzGWpwgK9Q6eX1B6vT2xYyyWrAzR76GAzvdAXEPBhyqMpE8E4tE7mjPafUP9Jtiy2PDHJNEGLZ3Z6AJ",
  "key18": "3uYbJAw8qBi2NfyszH76Bo2wUKX9n51R7qj3hfuNioVL5FHGXxWvWQuxZysLvR4uzvgY4FmQQAe7GwsbT5TfWNFp",
  "key19": "UzApp34UFSyXYwTTa9L8NzHEpAEcMtPUCRQKDbnhxFSzhtS6FmreJuLKB972wPVLF7o5QHNQYuEREh61cqD1sTd",
  "key20": "5W4498UwrX5vK5mUx7tDMmbqmGEV4ZaTwEE6d4BiDVka2RPyCqrzFUXDvEZMHux3x1n3N5qWXMfwbK6aFZuZdgFZ",
  "key21": "52u4gEnty27vUdADfCiG3hV163kVKSQD4gJic1YYkLJ63yBw53N2Xwpiz3RBUSNgmNzJxbLSpiC4G4EC8goQvKhR",
  "key22": "5wv7fCsLH393bMCfSCtnj55hdsLRoDDvtdSY5xRVqMT9y9C3iqTtKMdkNV7fTnMcf5ihHNbsEMjKqDzjXWEaN7RF",
  "key23": "5jAAeUKJ5tiaKov6NjRkGsnf15nB5QRcxLeueSxmc91dFTTrYBL5uJyEMbqZdKUuUQLvDuxyutVhzJ75qgpA79yj",
  "key24": "4aC34QdewDM6638CkzzAAzUeBomUsudsTkUivo7NgYm517b3QjXGxhfRy4VJNhcgVy4oQY61aeqC7Zfj7sHeLD4L",
  "key25": "5w7PJBpS4d3gxPDqWgK6mcKZCgXPXeqKW1jfjASw7EGQBSbhcGz7SRFek7WWG3H5mpVgcs4KcUkZviDwWs6BthB6",
  "key26": "5nrnCYCzqMhkj6zfRMLrrzGnJXnbTEn91LiqvUeouYbwTMhekZ92Z8HH5WGU74pKHZ5kMPQrEKCz8KKJoZiqTx5J",
  "key27": "2NJxNr3PNAUMjCZUfgLB3owCJGiUysFA2gDTN77i5M5Co6EhUv7ULj6hhHrr16YZabMNM9nRevGPHxmTDA5ZX2J3",
  "key28": "2TtXkq3D8MeMxdpP6CZC8GvGvquzZjdEGVPoYZ2DhFfBsMPkrKSKNZM4A3aC2AMG3wpxwHA7Aqst4vTSfuLSLcPr",
  "key29": "23qgSwDhLSYcfZcH4udzwT7WgVVsv6oCPST1qhAUNyTnvbpzA4hsycJua8NPEPdDkP38naGxrKdBsRQQT2dzz656",
  "key30": "5zgXwR4NSust9RLFkzqjqAYUFyvvemAeBNmLPsm5DjczFdXsLQQ3dFxdNiBj5ig27qYEN6xSAGVhKjdSUzWuaTuY",
  "key31": "4pwWA5ZKPR2GvBdB3xzhaMBxmCG9LG9kckJ9cGFqRZkHnYuvYCAS1iNjpb43QLygH4ks8EPovwvSBzxm1aLc4MHT",
  "key32": "mkDpGPtwH14GgKNyEYXZ237eVgHomy3vvDenMgBYt2sp7c1qyStKgZicsCJQTysppZ74BvNEQFLPk9LZYoj6Q26",
  "key33": "Q98tZL33UScBKUekyd82FkXAbpEQp9ypSgZ2GafW7QZiy3sJEiQWWErGVqNN6DBc36DKzhhwjoaR9nz8ZLjmoMZ",
  "key34": "4Bdx9koTtaoGAqnAjgszC1SG3CWUQFnDp5atonhSY6JGT5jJd9xCVnMEkgPqxvk2RcosUQ9W8QHsDGFEizHrtwLw",
  "key35": "4ZASfAeALJyRpPAijfZC65P9LZ7WeaaeKqJHfWSuTv82gZrojpcrdBykfZaikKHXjzxdRTadCys1ht7vJScKnPag"
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
