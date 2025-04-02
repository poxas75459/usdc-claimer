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
    "2wqJZWJ7xQotKSA8bsTkZN1a6bax2Paa27HRVi6263NDqAt1UHfUJcWiszAg5tSyus5DBHgeuNd6pcEhZaLA1ScE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QeEsNkxPBMhMJqrmNWM4XvNrrEzsjqEbVb3RYTkH7ce36DxHbDeFtAyNQjNzTk9DpHZEqFSbUKVuCeHCZ2jzyVK",
  "key1": "4jgJQxci1UMxb4bJviv8vCcjY1vh1sQixYPFTmQcbktPQ4ngXg5rkVuDSu2BbUBcRXncALUo1aDUC29g8Di88BMW",
  "key2": "5r6FBd6ymEHwWCxwqmGx4wHBTSMJUf6E7Mw2v12vzjn3R3WZ13DXnfWi6NsK2CzAamAw657Yfon5FRqn2DqjBwYp",
  "key3": "XbDgeuut3XytsEnWiiSmNhFmronwso81WZBWX4kiFx7Ce1xGMCkvATXrq9PfVvoSfqw1v25bDXvr1Pdxdx2MVTA",
  "key4": "4ptecYn7mQXKVhzTAzagYJZA9Np4sZV4jMjndRfYu2XPoMsrGHZBNdprsYPb4G2L6hWAv7r3ZNxrV66YkJgiCTWp",
  "key5": "2MBmFFXZU7sJaDo4XLDfusJVTnXZRmDA3NLAtCzXJRigp6WZg48vuuKv4nuHdzF6FJYv5d2QPkjQpN2fjxGDh2GP",
  "key6": "4azLCUwNeWaZtsG38v3f4Y3YxsUT9TjAk34D212zRzS6t3Nx5A2fitH5BGDvxNjggAMtNnAfnxoX2Bh9SgTx5kEm",
  "key7": "42sDmjKVSGuwmeMt3adXPc9oS1F6H9G748PXEn2TWXm1n1SjtxRF1giUGKFTmni1Tkwf25Bcpg9Cgsq2h7Ba33FB",
  "key8": "4xmjFWW9Pba6AJuqtEokFFan8JdMMxuiQcQEGFn93Ay2drzSuaNyU1aHyqtxBzmKPv6Ea8avoSrhBafaActXC5G2",
  "key9": "3CkVN3iEw2i4rdHfhZRLhauuBoZ7RxLZCh7nog5peCP2QFSZX2QgpZ4GAQyD8JfG1GqiRFLjQYzPMBTvmRDZ1YBw",
  "key10": "524iLa9n9sU5GsQJkPiAoajxEqEXTLscjNiZti2TxrgXnKh7RooxNJ7DcMZV2WBMdM3pjfCuDZEbfYFicw4GtW64",
  "key11": "3QVhfy8zNnSswjQo92pT2jizhSBF4fZCsGXkWZ1fEEEa1fv3NGMwj1w2X1QFGuKnXPA5MS5gHikBcMBT85r2mAj6",
  "key12": "2zdGofydnAVp1R2LswrGHysrsGnZetVj6ctW9oRp66rFP9koYiD9osdoR6YKkj5BUHLXKRsZuxTXxg4gTZ54wRjJ",
  "key13": "5WPmxxjigDpbuG1BAzjG8ed1yP9Azd1H2MNQFi8VS1fsQXabYH3DFjAt7dwtN8vNLX81C8VHYrR5vwkQEFjDLcRj",
  "key14": "2LakLHjrGXuoEhN4YVY6r1ruDKt8yjkb4T31C2YabfC3VtCEDvAxe5m1RkGZboWgzcAcxWMb9PUN7hvkPptESofQ",
  "key15": "2V91GMhGxNzo2rcExdEeQ2rr4JyhmTJGts2vgFjGzUhwab7PbjvpaMCP7QLGw1RXeyFzPoto5Pxm5JBVfxwecVCy",
  "key16": "5owDdSvZD47tfwxVFyYB99bxpYPUHgSMeBkLSW9hzEDc6oHe2XErY28CrbAuCj7phVhfPH3EZxbG9GSPPx8ibPH7",
  "key17": "5Ch8Rawaw1jBXDCZHvHX9BtVc2PWQXUx9wAfXyJbng3Lf1sAvTvbNNKRTQ3qtcpHmts7fUtjq8ovHuPWWX4NhB6x",
  "key18": "4MUqXV8wJpCo2fkhy6dwBgWFUTiFuMTznR4cLpR47RFxAfJbba7czGVjYgqgMNXtE1Yp38NKzdZiPRdkXJ1YGGdn",
  "key19": "qW5HHjKkXC4SrbXfb4EeTwdFfJK2nX9JeZ4Nh3q6MTbg6p759KKNTECJE8fnDgU1yit4BuwYoSyutHm3RxYyhwd",
  "key20": "4jGMUSvbCRFyhr5fsYWjCqvuH5zZQkvvhQtXGgWLYngBMa1fR2jSYwHssdgbykMaSccwLD1bbNYpq4cx4p6xL6Pj",
  "key21": "5tvruDZBwmtR1r1DsuBEUpwXy3hvWwssxDTHa4opgK4GixWEJcwvDZJXSkWGojzHJ6SUWqn5w4a7Z5eAHDkhT7NU",
  "key22": "5rHQuiD31xdg2Sq1rTTBhUuawfAFuXSDCUKsPmF9pfCKTQ9AxozdkBK9tVd7tmSa6bfUvUmPZDetgb2HNypYDJQ8",
  "key23": "54CUPuRQ1rwQVRppDQRguV9i7k9NzYqahS9HFQ4ywebvK4bEMByvAVzJe4KHpEKLZjHWeDA6mjej7SZmh75Dm43N",
  "key24": "3fynVB5hsrZmrCPpuWNmmEwF1Bsf7znsJnZiAtQHKGz6tKheeaiCDEU7CvDRoBySk1oLuiPtMwcYUwJ5jWfe8E9s",
  "key25": "47aLqCPWb5fhAmv2Y6gVvhWneR2rDuDCp88EAfY4fLyybfrpGPLgWUXTpvDAFYrZ663bTgUibssU6RdXutMirqUz",
  "key26": "2wmR1EQmk46daYZd8ogDa7rx6QQCigiGrGTDXRU2ce3GUv6LQpnGTw9cwibdzMESwqPxZVEo8gNRaRmRmHiKTz29",
  "key27": "5LzDwMe93zvk6MXWHcdehrs5sH2v2KBeQdXKqNtU1Dcqpist648LbCuBjYoCq9NSfwCkUiX7hvjc38ypmDdBWZT8",
  "key28": "jmSZts4CiNganUdx4LKPF6aBWcrpYePkfdCoXRR2vCjU61NWbmLq58biPTshfG91z6dnndP3K7U5wA4QF5inN6P",
  "key29": "5f5jT5ce67zpyrHrThscwbc2W88wKDosuUwDkQFLKxUmhbYReaqcWMo5GJ5xJuFDMTR4VvxQ8w9MB5tvdKUnayjt",
  "key30": "3FXgCzSKxRRHsG28DygjeooAsqbGmUaBVPCoEefw4hArQAcoofHD2e6QZGDqyb4xQMtru4rVadKXeFnu8Lg1jh7S",
  "key31": "29m3YzX5dABon5JZF5aryqrT1HTVwpj6Gk2UQf5fBabVpKadnxnoFFB8MXFEzdVs4LJ2xcuik7gDkru9d5YfSGcj",
  "key32": "471Y6R4cGpjLNfVA1vVwJTbz5PaFyfv6QqnTXvUMSPhKfRmZ5E7jsyjJRBa33AB6yTDXEux2w5pnPjozGS428gMC",
  "key33": "3RRp8ZBwRF8biT2X3gyV5ifL4zJqu47SQfxNvCY4HWEr6TywaFU5fmfifxUoDwV6NVjGRHK7UiWSML3quMEbftsB",
  "key34": "65ncBm5yE3Xmof2cPVyqJkGznHWncNLaMaj6mMJPqTq9pr8618hjXwp1tm5Ppm8b1CVxsuKBREPFf7uHenXntmMb",
  "key35": "iurYTtyVJkESXZQ5wYFj2vhyNhv4g4LPY5hiNjERt5JsM8LaZboM3uANCCcHSNpVWtTwurTwSc8nokp6QgMy1Bp",
  "key36": "2CN3UN3e8HkRPpqWFqf6Ss2G7pF8nBD5q4aKFPjJuMWpcd7656zFDKQw1XeRp7Xvf5mpiVJpKp3jZic7HYZV9zyu",
  "key37": "96JZB8FRtfoaPCbsg6srpAy9osUQAsxgn6V8D3Sh9Lg3aBwbxBfX5U3689683jjGPgW5hJzCKiqvdy2ZCEyncR7",
  "key38": "55pVeTf1tHfkFQjfCthTDrCVyRSiSWbhCttyqR4wWtMPEGr4ahFghogBziNMHEZWswPqtDxwnaxxDyxdyJFkkBAf",
  "key39": "3hvSXs3FjayKS9PCKa9ezMh94NVPx4fjyy9NWkadMTMnw4cT5aFLbXv8jwsmDiin5mFpw1X89ao9HZu9oCMk1VSL",
  "key40": "5ngRbVPXNsejCywNKLYjk3Q3rkX21hPvPYPMCcqZ14f1MjcKVAmgBADzwtyz8GFx6mUzJppyuGZxC2PZYdHss95F",
  "key41": "33iLpiH7i82yRDoJrVDNpWrsJEGwzZ5qJQHfbkLThQmE9HmRv4pU6BHJH8EKLr2TsQF8UnKsuaw6bC8GE2tjD1ef",
  "key42": "5P6P4LTDKsQUMYoF2Pi8sYgWzP3gt7eDC1vyCNkXrx4SPMkJJFAvFGowc3m2tmHUNndp17t8w6FaNKRJWRPw98Nq",
  "key43": "3uBx8yBBQ5EXH6VDzDHDmXgvjYDkv1iha3r8XLTXnNRajxzUdUmvqWDrozMAsPFCekyyjc1hXBfRZYafYeL9X1Wk",
  "key44": "2FGpkjc7aL8MxUxDCDTKv512dE8e9qkf9BjyQihSnhBwwnfb3raVU5f4fqSDpQFHSp9D9mJuXcWv6kPkZdJe4BNB",
  "key45": "5b3AYAYLWYyN3gxWHf748gVDKeLdwiMqV2LaNibSULqR8AmVJhCQTFT9w6qQrNBpdY2ya5XyhU7Y4t7TbUvaZMBa",
  "key46": "bsMCbj6Y4dCkd4BPp7uoSPUQ4ZUpPH2AkFFT4q5qkgWpKQXs2V3Wehgb6xNoxcASiqHAEFa6K4o1MhpekeTVnTc",
  "key47": "5aQJEkeES9cLUWuLfm45ic867gT1qQT1Yj74L9GZFxNY8mNNt5Y9e68eckhbPowWgRHvJApMyPYrx14oGbkftLUF",
  "key48": "4uNdR7LD5sRJ983tvcDbMrbfLD7t4TG9T63t8LXWgL6sAJz7pQbokLpEvyY86tVszYrrCWJa7UTSGLhhhCsoGcNK"
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
