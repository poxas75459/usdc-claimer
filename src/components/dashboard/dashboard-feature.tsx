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
    "3gGrMJmWtyqSc8FcBWW31QMNBNeVEBmLS5BN31XGZZ5u6mAyoxUAZtVBpBFR5o4wwjrTuFzExHLe1mxVZ1xAggKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6395AEqU3qTbsTPS9u72WL72LCjKCtGn92JHWysMp26zyNfSANUUcFNL1UEAHwTs2tGpS9kYFagURnxeLgBVxLM1",
  "key1": "3n3CfBwbZPNH8iP48X83nyiLD9vQWAsSv7bj9oJ1wkQev1H9YcNxpZFAWbsmR7C64LWDraXHeierT7ppLLj8yECe",
  "key2": "SdVtStqp5C3ZpjiqgEzSWxR1VYmrCbv7kR7Rmj1jvNjn1wnz5LuhNjnDzWqTkAewZWuttfkPCEyd9ZArBTMK1Wb",
  "key3": "4QmjDAaH7o7nhGjes5iocwKz7Qqa4VaGVgZU8zHN7NsTrxYqR75msTgPAmuR9FKLvTjdj4MCZrR8rvJHGA2VQHkw",
  "key4": "2rGvMgMUXqTotEqgbppskD8EwW5PVPvTQgiwyfAkJPdjg7msooHt3i9cuFiJo4CAuhbqJXdn7NEZkbUcYrv4Ax1K",
  "key5": "FXUHiJPBPd47yXGY2a9DjyduTLxUdGTrwbcoaq26yudXb67D8AeFtzWBepmKAEpte8Frqt9QNBWqPrziuimxJui",
  "key6": "ihyRRGSnCH1yH7t9zcvc98GCX1adXdb58yAQ3p9zUriwZLeAugpxDXuCWyYqJKiRE8YYoCrCpihYZM3DHbTN77N",
  "key7": "3v8hcVzy6NwgXpJKQ7pGDgZxpMkzG9BWTfnN57PU3JSXo39hUFR7V65TbsbDvatfNkUF4wenioqGZzLeZtdYK7Ly",
  "key8": "2ShxtDCVByxzKdXVP2wAeGX51S7Z2yYs9CTxtTxdyBTas6zRXuWHWkGwh3kSBPDZGPWNSxNz7V3a1FgXKP8ratDR",
  "key9": "4VwyreEtr3euLmouw7jejirz8NtZ1V8q6MH3ezAfQ5KnTc7SMoargrzfsaaXy9An3TawmxbCbQ6MJiGzh3oiiUkW",
  "key10": "3NZSF8KQ2oZjn6bxR1EEAVipDD6mWwKTfTGBCKFZb4yHLDJ5Pa5XrbwveR3zVRFokewcadqGo9NsifMZwzDscczz",
  "key11": "2cEqdfsxJvVkbStxDCyEip3iMRdknkvD4HB1PpzKMMPMosDvBfGSWGpfQ5CKfgi2t5y8ExG1YTuf3nYmUnYvMrWw",
  "key12": "3o2HtX94Z34LEdefTW8i1SyxJeQnpMtrCVLroTM48WhHTVsBPdVsYzK9yuTNZhRM2XNZQfE235Ds9u1LKF2mrHb2",
  "key13": "5sDZ9JLZG186AUKwXXbZTDqZCJbE1HaAeDBv5ftatezPmfyZaii8LRoDtDn7rDdu7yp7zErdxsrjFPj1dRD5wxVa",
  "key14": "49pHHDwe4qQJRsdc7NJG8WE5wduL77RA4MJTKJHvLSnHJ5U5u3RBMm9h7h1yXfcJbEtgnVFebZeqU895euYQVxi5",
  "key15": "3kKjubmVCfLSRX4nCSrgbJQ23RHiK9dv2LfaiForrmbgbpX8fWb3T177NHeBQgJdYjVXR5RyAWkLTbsN3zkvG2d9",
  "key16": "3FQEKxiFRNn4o2tncEpiAE7JqNr1gRtVgGwwSy9rGnnQ62XF9EXbfSQfTMfjSi8BCJdDa9KDMyg7tNNVxK8EkhhV",
  "key17": "3hEAk3DsG2xukqDqF8zhB7EAVr4mrjqLFNJKW2Buh7UbqAdFwj1SKNhRjA24o5A5k6WrS65gSnaGeBaBaNjfL1Vs",
  "key18": "2xz7MvWVcbygULLNNenGvcgbSGMCJz3QJJH4SszzkHeDCX96vZ1ZKSJWWFk2c3YY2KhW4CziQQPbSXXJmvyAKcFq",
  "key19": "4nmkoz3i7UXqG31DdcFLvg2w5znj1RjuHKWbRtoDsT9xgr1F21TbXAPEcivezUfdRbCiLddULb9uX9uBR7Z4C13o",
  "key20": "3Tavy83Jj2NC4W6EeaxvthgdVrhSvivGiJMT6Efc3i4ub9Mt468zNTTPcdRMBZPkwWVHaUMWHaUeiBmCTa5Dztew",
  "key21": "4SzcaPsXE4vNYh5wiaNZVyjELq1mQgZ1aRhYmf9fmKj5M77DjrrZYdbK6pgZ7gdtFrLAADwskoirtiupzBxTTZcp",
  "key22": "bQ9RrXr8NRoBjh9Q4sbGaGxbsDHHbni5DR4UKt1XyqugKfk1kmnre1EarkyPmZzZPHxzx5bgFtQFp7oZFkHPrcj",
  "key23": "vkUgRLg3AxLM4SrJsXmTa1cQtm6ZezuxCGXksfG6AjpH2mH6T6CNN6FqbUgR6DwFTWRF1qmNWxLJTi9D3bfSKnh",
  "key24": "3WbE3bAgXreDjmjQNxdsvJfkLmWYjXV8xBw6YLrRdKs9B5fb3CvTyx7iEVstY8nqMKL9yRUqEvuLM91qXyetgty4",
  "key25": "3hDQcXaqr7Tn9hG1yJfy6KrCujCPXnx1H4BgkMUm2WxE7gS2ztvZDKGzmMzDiG2bQwWKJ6CX5MdiGFVEvrQpBpBC",
  "key26": "3CPmgG1KMDHMkd7LFHCpt6HZ8vPvB5hzaoyDZrqXTFxGovFxevrXomJMMp1iXpKPBhDrq4mFe4rf7Kvs2rgvGJK9",
  "key27": "5rkXCm4DhsSCBiyVvnmL721uSWmYpGw6cmYZnzMCirW4DrdkxgfCHufF5XDTksHFjayfCVW7gWAwdpDtibPvzC1K",
  "key28": "554nprf2VaQq4PEBzUCyPsid5sizpgAnXEKFa1Z96ZMGTmqKj9sEG4kjYs4Yr9owCX5TAAwoihNdSmHRqa6jhbsV",
  "key29": "123nAEGfvP8Ejj9QHm2tdZLGf1Mtk27x2kwZETdfkfn7BoaFuHcMR49URBC4PGEZPZu4igwj3KLZDRTGWuyCsiRK",
  "key30": "2KDXLCEyBd5xYxkg9jNHFK7yban3SUPoTVz1B9hGEATnAUT2P6vD5KZHVBvWJsEMWofH2ZQxm5vx1DQNTPqwG3r4",
  "key31": "3kbGihNKkkyWAjqRHDZYGpRKZy4ujFJXFmPxgAD5pvmWkgLU5dzViWV1ksrbn8YCk58CXksKyqc7BqTXY8W8Mteu",
  "key32": "FEpLVpcc2jvVTkss2Q2YJpGPLi4a8WWzkuQDwsZkhEUnf3orCawFTLXr373zPmsZAQB1CXGkd5wvoUaHjbE43Qu",
  "key33": "3P1one6YV2Smt5Qoy6FakbsDh5mM57c3MCtvFgifbvMVpESzqGwJS7sJfiZc2rNkk1VckrRcca4tGVmFLsfrqgXB",
  "key34": "5NiFCc4TZXLDwPV7xrQwjjr1zouoEKsBvraTJFhABwPvhwTuDxXcm9yAjp6Z5y39qyYZfh2DtZnCpG6pBq2qvYUt",
  "key35": "3e644q2fu5pJDzT4sYhmcw4gv4NRtqTvE2v6rmN15LvJ1166SYkfqJCyXo3DCKbmUmL3u12X3rVJMEc6hof8wtYT",
  "key36": "5J56g7rMwnPMPkDHCSYRRrQyVu13TUFtJXE46Ji1BauLef98d4cZKvrwav92t3LJE2yWFRG5amne8WwLSCdankH6",
  "key37": "34KD824Bgr9KJGwb92kkZexJX8BfXX96ZrpXpAFTrY27i3w7KLP1xDYwivP19XMBGLuae71fVykzbx8T1JGGVjY1",
  "key38": "3cjBkZuj8bzwDqn9oGKaHiMNUneXd91Wv9DaEmhQjEFEoA8Ur7mhy1diHKuHC7HpXBecqWLmEgSWEPa9PZaMhsoA",
  "key39": "3igAGPyRnmyneySVuFqQriT7toe8Tn7zqVexfdEy7sovwZraihWpsPSTXbtVE9vnmcFYGX7Q9E5uBaqcAUTbf1Un"
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
