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
    "5z9f1BP7dnSSRxdJoztvrtLKsaT152t4JX9ePXZAwW1HaF8yhvBDCGnRcKjmhhTYB54pt6ADWKbyLDzDKaXtKMTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yksgus4j9qbi1D8it4fr3N6VPsxZiQp3yubyFHUjhmZ5yeCjx3fQ97vGcdJpPXGUqnwZfjqym4tbGXFF3992TLe",
  "key1": "4RMZZbbknUCda2qwpqCPoouySLtjiR9RSsQPrYNgfGmSiafkK4SGT7dJ4a6997JRFSFM5HoRRsqaXpwyRganYmQf",
  "key2": "3rspMJ8wgUTMB9ov49WU6axhMMKurCBJqa7zAVurmmAtYkgyT4BEb2R7Uv1AqmTVUQpehQxEUVGhNLN43dSifjds",
  "key3": "3o1UDUtC83HCP7wnY13nBFcZRR2FqQcbMBNbEA3TJRugwfdq2ANjn64NMhj7JUtPXuQan3BAtSGvQi3troh7F7Jc",
  "key4": "5PVCtCa56S64XhcYMCBpDtYey8SzRoURGJfTQ19khhy5HZsXVrBEfaowhemjSrdZPJjydaVTyYwUXgp6BuNBE4gw",
  "key5": "4n1ovkN2UayCVSiWwneUSgJM7qBmqnNUatf9bRsE2etGg1tkQuqfMRn4rkoRjRCdELjiLfjLBnPziLfZp6MWzLMh",
  "key6": "56tnFTU3TUrH1E5yNmkgfhCkW3uDirpyHzZGasQSNdyzbErQaUHuiWMnp69FpGejfHz1x1W8eeG4Fw1D5nnQgjhS",
  "key7": "4ik1GMC9wJtLyFFv2i4PB8CagpA15BLDnSnwiNFBNojNVEjvUwh73qtU5syAoJk8D8axCdRz2NkcyamRRLMNUZF9",
  "key8": "4ofoJCX5Mac2XMnGEsnYXSbB45MK569GdrVRy9cz2akqJW1CtNrGLEvRMBvdXVJrouNzAQQhY8yYer2HoQFuqEyS",
  "key9": "3nVgJFSxpw5apobLns4Wm2fWvK9mpeYqgm2TUBMpSsPZB54HSYZwp9Rqun9DPFZ4JSMuymsfjA7pqR5VMDiRdygV",
  "key10": "aox8qtUBz8nJ2gBdC2N5aAUSh1JqD5ykzQnLVWpXUmuYrB3i133XJ4E2NUr5nZe79FeGQa9nXQKqTEa5H8TTgVQ",
  "key11": "5xyVqwdHSPDWy7tzq5vbyrKNqQwe4P4AVcd6gEMBxhLMR4BtD3SSmsYw9hQCMYsZGbqpAQuK2N9kAkjxdYX2UZ5y",
  "key12": "pmu37s4psGFzNnuqbtvd8fUxq3icKeH5D8CEGiEmJnKLAySWKUJNSbsNGJcc4W2ro8XefCJyWoj6kDvh8UKUxRo",
  "key13": "34dDMkPxzYb52FSAWXeUnqJ5QS8E3upgykZfu1dhw4UcpWmobks13fbYtxXYhhgSNBcpe8Z75yt2bSn58S2dFss4",
  "key14": "52WnHktbS97tPEQcopnz5KwpJnetbiQj1sbDCVsj7KbnU32f4PVKeah1WM2ZDKHx5cWSJd2MaDyo6RWAzA8kkosv",
  "key15": "bfwLrSakkPUdMJntH9TDHJnPD1zJgAdzR4LDoTVHMfHdHWN9Sdu2jhxk9Q7QHLxiHR9QvFwYrXaJ6ANqb86zpqH",
  "key16": "36CYsgV6ZVie8Fs6h36ZiNX468QDZrydFSoWsdM6fnLh2aDptaR9bCPBim2qxWAjQ3KjJxmBCB9c7WYo1xrq2doY",
  "key17": "m2vQDYSwfqde8YjNkSvsTX81Mya2QyNMT6Pfes8ahH5tr12Vjtd19oZLjBKwbysYctxYqAnrcef9xLrj8dHKJuq",
  "key18": "65aMMbgNw874cJaLfyyf4pAtQAiqFrgQyYd47NEBQDFP3FXWB8Mq1XebZt4ALFo8PCAvBWAcGMuaSRFamk3Ly1ie",
  "key19": "5tqQic2s5HmbHSLWq3FDk9erZpkj81Hrs9sjkkAmGA5GSDU2vDLNzBva5FhVzodJtFYg64dM4pZitA69EZ9xvMjy",
  "key20": "5waKDqeBJBDMQ1MEk5LAxxvrNhnn2vHjrmS5C4s5bv2RLqDpFdjSNQjWnTcztA9Bz5PqHSvtu1xMB53suku2ubPa",
  "key21": "61fKvChP1boythQd3QJhrvknPR5XRLzTGBfpdyRJMdaPHkdYsGZVhRUpcEvVrkmsWkSvUvipXVDpcgx7KENtvPA9",
  "key22": "5kpAzTaJkk9W3BvUSByqSHMyYFiDYE8kXCuZbWnBZFpqKXWEpSw8Rmf46cqPTYT6N76uFuDDk6RjqyxrZQgXMJyk",
  "key23": "16gwBpqj4gGp2hCaXS4ArAegErs4N1K83ay8SBtJYGTksDPTQZUixvzsJatFfLrmqw9wKZh7SVe3XHuWAdq2UpZ",
  "key24": "2eqPkmGW3st8eX7ta1sFXUsHVnBKCuPau2zFxPcmVftSP3VMvYoLnQsJxMKvT5XVnPq23MbMr6629t4fjuctEnC8",
  "key25": "36BFhkGUaGyQBhia371S3wXM7mVp53S7W2chAwMq66YhDMCfgEZ7f4T1wwZMHWKwTZeUPyeQKi8hg3nNWCZYgc4N",
  "key26": "QyAKUbeQmTAUWYaFfGcNVYz7Rru9WQdeRyP99KVJkdBeZDXcsQLW4xNDABgLhQddr7dEdbd8ktB9qTNDQuZDuEU",
  "key27": "TBA6hxaCaP7FpBKoNE1ZpEbDwmFYAUskULvkEBssCBMq8cHcAJkNwK3rNkk9PuU2xiZCq6TVSfu8dyRwnMVGh1x",
  "key28": "Wvuc2aRap5pisfVdaX3ZZtYQVAjedt5FjqDmrv5W92xNjatAfCU2JdzRuVnzerqkCPspUC993Ua2WEMv3qjrZtv",
  "key29": "3YyYg6CVwg5Ce46kpRGgmDvExg85jjxj3pQ3qU393zexXpsvjzh2dtywshqoiJSFDKAfSFyT39RJeVoKVstJLUVY",
  "key30": "3B2zznfR6ZAHUCR4GWzf6LX2fhr2TJnwArcACXBtYPueVmAytywt2VSgWRwPJUHkEkDFUWzE9o7y8MPexwBMp4jU",
  "key31": "2U6jbPSVgruffCoVUKhb4csy3huPzVKWrgdfyzeH1gZRcyDmN582LixGPg5613cTKUmAMekW12FLHE9tPA8Zcdg6",
  "key32": "eSecvXMjqtaoe6Qr9LaBz59JLXMi2yVJhW96HriX8BsCd4L56wtRkZvGnjdScp8GVLCkQWVKzmnPfovJDAtBpAf",
  "key33": "x3nkVHjFCW14kFrNnQH9Y8D1L9rEkXpjbfZ9YTGbhtLVHSHYdBbKLzdm5kGBPr3N7ShKA2GjbXrfytc6pScsa8h",
  "key34": "GvcjG5ncC2j7uzAsmTNDLVRWa4D1B19L8gapETrEgGFquuYEu2mqkhDKjKrQ23BXqyxNE1Q8tmPMfabzrqNumLb",
  "key35": "3aFmFtr22WcKjhBL4K1ADmdpkDg6TRXWH63hP5ztk5xKpTTGZTaXU1Jd7zAtgDdnBZXQgXnVcCADDsU3G8W4BFuF"
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
