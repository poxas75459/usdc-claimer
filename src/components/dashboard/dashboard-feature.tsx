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
    "3QQKr2ya4UgrbnWnUPX6EULH6iSYH8ABLHAGCZN3PzpZ9gk1F7ygfZ5DdXWHzZh1GUoDySWacpptAKB4DaLjeEif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44TJsbA24HiHvQQvz7hNrXGG3qjPGr92jkWeGGgEpNPF7phE9PHdx2xmbrPgJFnFArt2S7n2iV4UgRf9K6Q6sDm4",
  "key1": "4S9MB34P7BGzmu6ieBMKnrArXRxrS1Mp5arejVaAj9xJMokL2ayjJfwjRNsdzMW158jupxPQN9Dzm2DutTXwWPHD",
  "key2": "2KpvyC8LcxRby64vgfFR1mQmZaQwFX2xbDepMMCDQhVDNSMHHwUehnhsF8Q2FkdrsTrCL84E5HLU7uYKepcb2Spq",
  "key3": "3iHqs9nvVhRunB1p3EU4UCehwjLK9TjTQKVZHdhExogobh8hNqZXzZgta56vDH2PGYWULA5DYMVBGqoawrMsEfTX",
  "key4": "4ydZXHtfytg5tCAuwKSSUNJ1Qw2gRUFHCLrSSvzruyLFXr6ub2tBNi6AQFQ2RPguY9J77vaQcFD1EBqt7BkQF1G5",
  "key5": "3TfmtnGxayCUa2M7WHRz1cQXLFTPFcviFCUhq5Y6JxMdCJKYWy3oUMTjV9hqfSmWmgrLUML4mvTpZQVpdWQAuXkW",
  "key6": "3eeF4wtSaCxJJCcax1XXxF6SvUtuStVDHk8kjCsLJ5xFjbUaB99a3aks8dGhLU9LwQgoeZAtjhsrm1HJ23ziUHhb",
  "key7": "5yRB9XxgwEru2eMPdKNYXhU9foi7q5cdstknfYK1hRjZxUWxu7mkuUnArVf96YKivu8rbJ7mQoVyhreWLefkRVdY",
  "key8": "BigfftZEGsk39zM7V5PySDRViBUWEkgMZLATUnZ3ai2iz5WZHeqWAsZZXBAD89igUXueoMHijGQij3zqzuPAqq8",
  "key9": "3Jq4QUZaVtGwLi9kTFEyKfMYXvedzkwvRts76NXg8gxeap1bmj2WNDNLgzSXVbQGAM8tKKW96Fxn3WGxMMSs3mwT",
  "key10": "4te8ZsURWYQx264BiQns93gadq9RENPYupLmnYfpRuarMWWSgbUXqYYq9DjDAYScDaVBtMdRdBTodhg6s8DDeJ54",
  "key11": "3HiUkSzdJZuwvFfeHTUhsFB3EwL6Jt63Ds9fRnh9D71bwchSxYJw1En9mriktdP8DFhYW26f4WJmdFNeu5YYkfx8",
  "key12": "3gAojsmFr4os9vTTK1EPcEvSoWSzXg3e5sqqRPCEgKKmwcBsyofTfHNDXBGVHP8Pi3KiPYAQzoLD85MjKoH7sycM",
  "key13": "5geatB9zgG2xR2ma9kczGcfQrGFCUMdr2Qdc6RtvbMLfLWCLXFqGWmo8M2ecfvBdYSyTTu8dfU51feWxjfyo8QjY",
  "key14": "4vFBbPLbDdh4TZmN4Ys3zgi8imBuEbkNdCsSiBMm3fhNpr99Nz4TRzgVt6nhMyn2kfum4eixhgadofuvS5xKTTao",
  "key15": "3fRJuzk53VaNMiZLY6g95NcAMVrAeSwanZVxU4Yapk75NcGkDBoUrM7gZYJctsXBi5HzxPGcigdsZc2RhSuwmEsZ",
  "key16": "51f5BqQHv3SGRrgLbfzuJUNo2FYsycgN1czukB7SiRmpoaNVvhmwmLSBkXg1H691ST4rVL61ZZkqtVxFTonDL9SA",
  "key17": "Z2mo5LKknTusTaxzDqeDXBZ7chFyjAQLZeHXDyDAWcediMgANZ2vqejrMxm1WqCqpAKYCgHiLujSLdgMo4gKHbm",
  "key18": "2ptNivLph7AC4cShmkPy9Dibc28w43Uk24b6Q2v9thcPcRaLaCVMTRV1UgqQGy1Xpu6GrH1pAE7ah6Fd4eNsvpxv",
  "key19": "54rrKf8JQWkNumrpPStkc4BWaue947tFLJdk3o3GMAFjz6Ey8CnbWvCaHJpKV8QieKBneD99E5qLEjaAADWn1a7B",
  "key20": "2mHDq9YZKt411bnZQDXfDS1RYn7bZ73D89e39DQS289chdRqVrwdMzDtJ1P4JJaxNdZA7WLp6eK5prCSxTC18PYv",
  "key21": "iqUonXPeXwwbzUcnR4KVt4gEfJZacAGyKRTG1Vecq3BztW51SdZSqNSSSLELsUc6DbSRG1q5UCjD9EgFF5ADgnS",
  "key22": "48BVXfPoY1CrsVicgDGG2dixsi4mYX9MowG5Z2rskySRuWZT8RGZkhjD5E8WYzAxQAxBpWeJieAVTegWGSNskLim",
  "key23": "2MWFu1sNfbfyacj8wtNh6o2Cs5As2AfUMXVE3DDdCussoX2XcP91UAJAewLfj5EgYrkGLDdR6ZWaaMGjnFMwBZd9",
  "key24": "JYYDF6Z2SM9hGuhvAhCmabqNfmFVcCb3w7noeGjEdfiH65U1E5pATUtTXhkjAPN6ZX1uFyAVNwKSraHXzQrN99Z",
  "key25": "5FdheDvdQeXS8fdinJ1C8WwadV2MxUzy7nkyZ3dMQ6qpPbnv62qGXZc9DDiUNsJtEjdHHwEnKQRuAVyjbTnnXQky",
  "key26": "m9E7opgE9sFFDhn9XRLj9kUHRByvVtXinJ3rkrMU2QWKb2BFGmBtNHtGY4xJiAVFYm5EuUi31Zjeci9Dwxx5rqN",
  "key27": "3M8LtY6BSn7dBNwFrDBVXh6MqwzEdJTQtZMvwBoV2R8pz5xaw7FiYrdgMhKNPqP9HBqTakWwZUd1ApY66fePjPMC",
  "key28": "3P9uY2FrCyFJxudXhdhUGQyKEVuGUxfxgZegzHbwC6Q9rgzezBPothUm3jbLZSAPgUSDmbZ88HpgBsLPvWBHjkGg",
  "key29": "92XE86yAKsEvEx3r5BGqPrU9q1muVsaEQGkXcgn7dRc2yu8qpR7BCk3E2Q2GxdsfJjYiWUbJUFx4WbN5WYNavzX",
  "key30": "2wbV2tT9Yi88oidaxegWKWxnzQuAj3PoMjZwei2SG1GcUD48XgG8VkkqCWGCRqyerXPHwXxnEYMgDG4cZ2pFGEcj",
  "key31": "3WNB6e61X5XULDe9GuygHtMPjPmKw873V5KsWV9xrX2MzCj3XMYboXChX9r8mwTEJctkQzGcd6NbZReqRqyit2QJ",
  "key32": "Kpwf7bZDYjDCbb4LPyCEU2n68FAVDxttazEWJv44kLk3Be7wMP2MYs9jG2irBp4Wgy2FAo91xfy3w4HeHdp3K54",
  "key33": "4RFUqveJiCp1VF3vxXJg6FQrFjem6waPY72AP5p8Z2691HWMaMyN3hQ8eAHfunCt86Z8z38mLf9K2JDWLquWq5Ak",
  "key34": "5g2T9exewigJvkijWV9RvSAuBnkeYfPLGRCbk9HjZLdZigXKm8UXRFXBUACit85731jtdcQkWaQaChYWcWdHhgwd",
  "key35": "5kCQSu2DjRXXnangAF1VCpwJekry7gwAVCZ9kwxbLmqK5osabvREtxwfDLkniUjEcceQJtwbjEi9qdLKSwb8qqYb",
  "key36": "4vEgxHiURt1aMkBR3LsKUFzhY7Y86UnhHL7hMSzLs2CLZsEhX5Ey7rvE2Z36XeTb6SaRdxubGdLyUNujRmcJnLXL",
  "key37": "4Hrc2XnQaE8ZCUXyEtdr2CCc1VBRi4bVSH4PaiBHuVBqZbFWmCioPYNaHF14zdNVkyjsnKNua8wQSjKgsDpWD1Xn"
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
