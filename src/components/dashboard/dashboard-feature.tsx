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
    "2DBz2FAbuMFxY2VVCB6s3QuQkE5cej6u2qCLLgxvtg1ryXUyTBeEK3CvYisyaVUbYvVfPS68bucFSjSKVHnrsbnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rVEhSG1bLoQ1ExMu4F4DyjnjWe1in1v2ZacKWHc7x9k6x2ooU2sq8682XppgzBgiy2QqzU8QvXbTGLfTqdwytau",
  "key1": "FMpXmjSY1nznjiSRJkq1U3bjm4LwNfn74BrzhT2NmTowoEM3JtoRk9uwy3nqu9UD9wz9k2eh22DLwKwESFgQyJH",
  "key2": "cgp8ZqY9sr1RE5MF4jN56B8UFAeh867ysDmH2kGdujVoYnvLeJd29frzjgHSjDr2P7HaHKpFyEtxYmtKMmR2hny",
  "key3": "WfWKMnpAPxp3CELssVY3NvFFfzyQdjGXro8NDRLMnGgoK9aBWLqgjtDPiMeGYy1yRbU6DxaSHyBLMtirfU2gZmi",
  "key4": "2i82Ar1TJJUyYh63dv6CbhrEQDxa4PQhiTA1Hn6gbF3XJef444Sjsovy2XPbegEvTA4QRNZjn1m9zJtDNn8T8du3",
  "key5": "kQ8zy8fSggQTR9cKAmvYg21udCiswMLL8XRDWNFVSZqKEkqdffTM61sqZRfkF3xX9UHm7h3oKNoRvP118Tcapif",
  "key6": "3CXNSPLQkFQUy29mu6TmMd2dnoHchM22MY4JMXHm7oi8zPTpXEmkogGs3MiRtAHpZctdG22AAVjt5GhoGm8sPQNJ",
  "key7": "45JSg6eEwJKXo9wqy3wsPLzMR5gLtNgndpPGwMPHduzNKXUsa3fPkYx2YtCBbMJ6GsLPdA6M3BZuBznaA7GEfmFT",
  "key8": "64gKvgtB8ZhNP7f2CFD618fGquJQSByK5H5qSgtkL9QGXBDPfYAFDHa4KApHWAaucZ5Ywk7p8z6fuzEu7hti8wo9",
  "key9": "2fKfgDiTLjzPKFCjboTUNGqf7jm2VTBYqMqD5xm1rZZCGkFamqckBrK5cjsfiBqRqSnH6i4LbF1YvCyt2vi29QSX",
  "key10": "mTgX8h1MUjtHtqXtHbDXBiQkkXkv16bj7dkQvTARKJZ1S33mFhq7HMPJYpKHHGzFmAVtQMiKyxYe4TPc1WoSjnm",
  "key11": "2dM1pgtdcL3vW1M2jTS3VxNpxtWFgR5boqEaQBTQGJuNYHBUjvk4jbu9iE9YJomE26xCKoCYoRTJ92VybEyGntdL",
  "key12": "52hY9QjtuWJpaTA5jED7T8eBV5UKPTaEeWK1KwMBswngXg7u1yrVicLfDp69LRmnbsDof431fBtBSUviWGW9HwhZ",
  "key13": "3cZP35wFvNm4oEjzsGGy2uQo5E7mUpCZ1qStwHkVES36NzStp2jpQVxUs63o52mh7mCmXETVVtPicaqDC7NNSFZm",
  "key14": "4wedRStWCN2PVnDPqRy68ZeuxSa2cLJFcjUSRWbUrEaRkT2tm4JA27ntFZyhKDLqkCKYLbPKCXTgYyhFGyQaJN2Z",
  "key15": "4rZcatntWxQU1N192vxw6TTFB3gaz936RRg4xK6KsKEsUmVF5F9znBtm6tV5SHSwLpy9m2sVntYGwHCDCMv37Gcb",
  "key16": "23FKhQsJHyAdd3dxZrv2ZQdfq2j72VWRmtRNVu4rqUU8gSX2XZdFHz278fjYvjaqJARWGVKCuQZYU5da4ynZ3tnP",
  "key17": "4DtQD7BG4cHWpXBKWbwXBcLBpWV9eam71EDvXFbVcXYNNBZ4oRu8B3YiskEByXU4VkFu2keSaFf4jTaEEQR8LW8E",
  "key18": "23HopcoGreD8zRWD1bdEJBRQbZ3dxNNLbbyehhT9N3rNt5t5mrJ73s19HJnzjdWBzJX75ftysmD2e78c49pwg169",
  "key19": "3YhneXicyEQFAGwm5rwnfAoQxSsTKsVQK4prpv46Mpr37vh2PaQ2iC5dPFWxKRKNrvTnU5n7yQFQ2xpSRHAQBsEd",
  "key20": "32K8iasGJ3qLEdKyaJH7WwqcUTHSYSA7XMVHZkQw9UEA4NpxvBCJ26qP8i3ru8YSPdWMmhAaMrqFiPAXysxW6SwA",
  "key21": "3y6QDmG3rD2fmApW8chu6Ym5TpahPHHDaiVyfQ8p4nbZcrffEk6AM7QEyNaMsLi7uLk55FjhmuRHH3rWkFCvdGbx",
  "key22": "2ZbFiiEFfutzvDVjGDK6yjeQ3G8XNzTaQ44FqDjN58aUsnhBJWgvXbP5cP8EiwNcyhpi4skRUvbB5p5C2kquEqs9",
  "key23": "52KwmyVxH1eTgXzbWDTSatMWmToSBdPagkHVV1iQsy2g45ZmZ9yxP28fjxGHmLdCC1CuKt2FcJ8XsXPxxPrrU7TC",
  "key24": "5J8R2Y5bDjsgFF2qB7Qn9yW39D4Girq6xBCopPEL7FtSsbBMAysJBP3cxtgTLSa2Dcxvhyv76G5qZu1LwtAUw7rD",
  "key25": "3MeWmbzx3NKYAqTCYHkGgfTLYU6UPMo1Z7ywYpHFtpShnc6vSLH1DQRaS14ZU3TD21LSULg6GsiTxyfiwv3QWyWv",
  "key26": "5uuQDZh6Skm12o9NDJtMw52rbHsB5FBNSPj9V1yNa9NAm3aY1VsAgbZ4PCQxQzJCx3hixDVm9EgeqyEgsPcpMzHk",
  "key27": "3vtW2E9EbfoVLXmNJSyMztcd8ystpLnUBZNqSy5SE5QibyTDar5FNLRRHmBNap88LKyH7H4CK2NjUjq2H2bhh7Qv",
  "key28": "21q468LgxdNQPmPUcoi7rZAqfDoLtD9HbHmEBR5gy6qxWktKkMwoBiScZvFaz3iH3V8MN6K8jG6iX16DKni21MBb",
  "key29": "2iKeg2T7PYbRaeF6jUbQA5REgsRgYbhrqcwDCKsCYpPCJaMeu5ts56pqCTeo2Ahn2fGbbQM8B3i7dUtz5CH8qavq",
  "key30": "1a8BGFPAGEoZsTKx4kkqZcjuHiqPboCPnwexz3NuMgfwQpMyPCdguyQFetRNuNTBNhvBH2pN1hRKyUzrLK1CBy9"
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
