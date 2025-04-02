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
    "4NDaPHmrGeMtnMRVrpaoCLKSTHZAUHWuxBfboCaK9y7WsmVLW6SsE9CS8q58gGCdt5wocm7a9q7MBabhVK4LNn85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z1rScPR1m97fYX6AxGcjLzpahc2vXsaH32VYo3Ek2T6JoDYuxZyJd8ni9H6QVudDkoTh7DLhgX3wgygX7NxBfsn",
  "key1": "WAh3XY3CxBSBvwEmMAUSTKDeaneLHMX6RNVtLDmXNSWeSr31hwG7yf8hcPsW8fRzPcmtctgUsFRDf6ec9Ymrs9d",
  "key2": "2zsHo3NcFxrZAsBHWkpNJ1j2TL6HYzTxhkn6Ngp3xrTe1yQW3zuhhtopKiikXTRDCHh2hBTkhGNHmbP5bkFy8orz",
  "key3": "2LuHUsUuHqmtmNRik2b7Tpy62YBKTPxKPTgpPFSJE3AjhanDpRah27eS39U4sFvi8R8eaPzppGQESXMFw66wtH2X",
  "key4": "3AnzoA7F5aGyZ9bCe43rtqWgwfG9XorymrQVoit1uz3HhwvRQLQ9Zn6L2BmuhSRrVywbhydTXSKUrahMKS1jXBP3",
  "key5": "2gKzxSjsEELxMFpXNfaix1F4daJMbR1WLzXi7FzaWqQZp15WWygRHJdhfLbswGxWPJWwH9uv5kr1twUc8Kq16Z5q",
  "key6": "af3ij8hhGGyiC4q39EqFzxJ1kWaho3LEaHyMfc1NTdVkhDEHxj6M5JaoJ8QYrNi19BJq5JtMvh7zyfBn8VSMHwf",
  "key7": "2g7oyDQCpn5PhPqroPR3wPGmUSGLbgrsP7pU6X33C1DRhXWL9ESUr3zELQkdiPWQ32GEASurwMo75W9GALACi3wy",
  "key8": "5PeStHkR2QVyvS4NFniz9VNJV9BX7aTpmjtaff4wGj7YuJiA5JnqwC4wuuuuLdt3mGexsmy5k3eRAPDuZ4BHjCMu",
  "key9": "2FNYW1AEH1YVDGEQKbTcvFA5UW7rFxV3Km8VjjxowQKmDdMk3WoiVSqJjE8EpkxRxANwtMsvmvhjuptug43JuPrP",
  "key10": "26yYGyUzR6kH67Gcn7BsPLmgzYtzRyEGS5HJT6DSUPx91DVAu3aHFjLQZU7au2hWY3pprpih6uv46eN6LHeLDkNU",
  "key11": "29zkY2kH5gpjfZfSuLVf5hNjoRN6XqHecYwtgw6donc2E9tMXLNU4cGfG1dCnHDih2mLiyiynff6wzemSj42Kbs5",
  "key12": "2Dmw3dqnNiRBph3aaXgfaUQ3KtWxhXHA9jZd1eFKXBb3nLzSWoSQeJCPdXWeqzf7Qc3ucob9QryXCR1Af7WMYjAG",
  "key13": "3hCeRxkHfy2b6ifuKyNLkChiBEjEi4213m6vejUDqV6QxYqgA4Lxu5LacnC5amwYetfcKkdyUMdp7qXD9exTTRgi",
  "key14": "2Kg7Tq3urdQFGhK24v6FFb449w4qP5pT6sw4GrhqdqdPMGUNpMvJmAsnvZSMoAPspCczvKpjtoY8zpAS2CTBoKLA",
  "key15": "2iT2EmEW2TZrMWFGBFAvXzBBHSxtV2pn6UtUtzdEAfXfBrJn9BjgympgEa8m9C8dCEEfNHwuKi3Z8z1c4NVN4GCf",
  "key16": "32hh7j72wNcaydoSxw1vNxZ3RWp2WB2siKe2naPp4BK1GXxCSCnRS8H7Yy54DDtmFRgWN8k2XDzbkjg8H84MXCEJ",
  "key17": "4dxpVXc7AoBWQJ4QSkrrWPXbvT88kiNBrqhMUnCBVFuhwkbM2JvPLvCzZPvHYLuaD7GHAwoTMQFtTnoEfodG9GS7",
  "key18": "2HS9qRszneLpbPcjfgcG8DKofPt8xFHhSprDKKGaH8Qr7vMmRxHixmGqg6CEX1ngqfyXDDn7qzybCxoXznSZ32B6",
  "key19": "5tjyWqzPFw9wDgg44YofgVf2Dnt2ixgkdKeqAwkSXJidpkap8CcNbhCG5F6oS5BL63Lk77pU46XwXifMYQ9wbTHE",
  "key20": "59hvxVjYwVmceLNM591NSmZ8VeHoz3vJ9xegEh1xkUi9uGg3aVgWmGb1pnAb8ZiD5f64eBQozK2EvVyM6riAu1Lm",
  "key21": "5phD3sz73HDnyLFm3rkSo8cbnik7ymWe7BrxUbA3RxATzy53nEC3xZqBy6Ba7GZoxxakV44N91EE8KzMsvwB7r5y",
  "key22": "4wezUtamZpHYpmcKuRizyrP1ovbAjDbF9Sy8F8gtNuwEBg7QFuX4nxeFzoFMYa988Crb2bSbr5FkF4DQQZSMd33B",
  "key23": "5wq1aikWU63D4rFhqrKLKBAD6YUCM9e7d537iohjAW54ZTKMugcf9guqQvj31vPVKhcyx3eyxgzZwKLMH2fTEFw3",
  "key24": "5BF8iZDQkKtcx92snqQCy9E6QKiDdiKuPgT4ib8FKCJGn3zgtSoe5EpAJdfuzWMvidnu78JPxc2ToLAA1A38suN2",
  "key25": "3n6pq6cZhnSeuvdqZ3yQKd9joSFPNvRzMpZg6NvjfDV5HVvDLMKBUw3zXrwBCbbUqZDi4BxERKgftkTqUyZ7SprV",
  "key26": "4B14P7AbgCFwncM1tkA3mSjXkqSoZg8vC33ZpZcU2Ew95W7hkJ8JeqrSp4E4zrFcdzw4BR1e7TYRmgySMxXYhUQy",
  "key27": "QeXF7bFVpjhoie7bowKrkoUXFY1D3gAn4q8EFCcHpJGPpVkdNM4aHt4CbnbX3Ay66e3ebXeLL3iRnSwnHjUB7Ks",
  "key28": "63Qegr4sTG6Sd11VnLCrYmzHCuNzps7ZnL8ifSAzAjTmfZDcDpUdVRsXP1sxJLZ6CymkKFcBJhHRpWo1MSRQ44Hc"
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
