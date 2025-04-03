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
    "3Xgx8TEKuQC3CqMCw3eKNt3KFya66W6xopNB1XnWwH4kVUk2aw1MoLq8nmHirC5m7FVb37oHe5rhMZevrZes6LrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQLvVJBginZXj2sDSfyaY8vpeQ4gKg5ftebvFshr7P4HshJwyNetaQq6yD8ofm8KEV3ryi4agNw5tTgAZ2SuzUA",
  "key1": "A93x3avuwMjoBHXsp2t2vyQMLv6c57pCiW4TcQ97Xh2MqC6nTYvpEAgBd9WGDEtygzMQq4RCo8MMGE4jM2R3cmd",
  "key2": "Dz4E5TTPuVVSEWiEfDrADnKgZLL9eCBSXxea7bRo3HYaEznMq9HTMpTLeCgu2FrpJabFPJn5hZwCDzZXWPG3JHb",
  "key3": "5hEebQ28GWTnYLJ9A66KrkxMGQ87VgLV4SanxFKwTA3ecDbgcSKgroPHDNt9oUggJi4ZXo8TDh2E4ZfYVLKY5R4S",
  "key4": "65UUU9RV44dxhYKRXPZ5fwtL3zDS6ivmGWsScucfJyEYUi6KPQ4ivY12x7W2qe4h6G4wwjzSeSu59MdzrMiVvD87",
  "key5": "2pECt9JTrEQNPRBdaPhPucVkUsdxbe4XMw88ot5xg9gPHdprX91M1WvXewdHgSW3PxrrrJWC3dVguUcA3qhQt3o4",
  "key6": "3MbXwK7coS3HspGviUYMRZL2x8DCvqbrTujmNiUYNv4ZiTWgv6hNKiMrNYAJvRVzKcHbfT5636AwCEfaRVkbEP2d",
  "key7": "GiycirYfjWj9wEuf4pQ4caeVDJbx5M5GuRLogPzvEBTU4JVHQ9F8Z2gPDQJZA8KZP3tYNgFfg5dxamn2uaKNdRJ",
  "key8": "5wueqR4f1msRHRM1nnBBbHeTaVg4mwbYHjnXfTsT3QDmRTnMRzTtteBZmAaaoWKLQFeBa4D4dB9SNrkriS7oobsw",
  "key9": "2gTqjCygUrJJUdVUiV6K4CvAbKbeAy1e8ZoWL2G443SoVqCs7kGhsrv92e6ra5573ANPuMyauQwusBtGAkBGQWSR",
  "key10": "267mWg1y3tEKS9mpqxoHmbsRrShZdru2DBro7c4z5qEAQf6KAfn5eHA2NXNmwTs1yY72hz3atDeUCjiT7PC56Yub",
  "key11": "36MyGTFDHv1HLbbsFefn28Se5cKmUUuJnURuyRG2B3cVRGPXzZ7VBd1ZAiLP3ajdmg2AMZvkNQioCyhYrBDcqzBF",
  "key12": "XXAvnyJJJ2xiVpAZAYWrrHLv9ydp2e4P9wSSTPq9r1erbqo4UfUaavtSha6a5zXPFDxmEJYU5aGr4QAAjPRSsdK",
  "key13": "62ovY68ymcLYNUXzsyE657JtGwhPtuhnKRgny6DfQijyLXfzw5UUmurCng6WuRrhXLHWRYg6bZv1dqFvoDhoGxEG",
  "key14": "ELuwpyRXTGxH896JH96DrnsoFPfByMxMfAc6yNvFwdibfavvNBuYVFooZkz7ybMZNHhtpEFZT7G826NfTZXUuff",
  "key15": "2gL2CafMHdE2f7mta7XbdocTqBgczG9enp7wq1RHXcWHXdtSbnutj2tLUzVEg1z9aRz7NEBP5hwarckrBjAsjwa9",
  "key16": "5SMwh3eQ1hBZPA9wn6nfcEqcubDHjSQmT4RAkmJ1XhiEkdrLeQVm16S9NTEUuzQEADj9GucD4c3hgogtKxP9ojVH",
  "key17": "27aZ2DPjSUCKdE12EZuD6FpmtEb2S6vvYw4udzLoCNX5LXnP7MTzcDRYbyJWA1zrJUsu2JqKVWmwUBMepMPbJTww",
  "key18": "1U9hGcWUP8jrsmP81CHYYv2sun1Vmw7BBRSWFGFAjrWugRVEnj67qdLCNqC6SZV5oEvkdcNGj5pguCbW2R5ite4",
  "key19": "eXLpj9CQYXyDjpdyaxw2MLRgZ1EUGkVxPEmbacrtdcertFxDxtNPMJ3zdC2aVYbeaP2EdW8DCaH8jr8Ph4xF3qa",
  "key20": "3vWmV4k8PwPrijvLfH5F2YC4dhTvau7U8tWDUAT5pH7DpBf8NHTSEcD2bFCQh9yjnmtzsyU73JGSq6sYJu7AJF32",
  "key21": "4tTGedAXWFEwvJwyLRdj1mocURSLaz7LJVwyd2pWMQGXaD8z84t5zC6xn54XCZCCmiJm1HCqSEvBnTUtSo8xjc9S",
  "key22": "3vNHCiGwVkDvAq34vYYk8h4QfULrRH5kmGXkYWafCCgh6PijW7Jj8TGjT84kcYh98C8hgSr4t9T8d1pWEnw6eRcY",
  "key23": "27n1jNQFcda3UJQiXMkHhThjUN3iwJZk9sBQzsCN5eG9fmN8qwpcsoCHL3mTTNYtTEfKgMHVBHWvW2Ww4B18vG16",
  "key24": "5UEiKzBNtmZ7GrnMcvLKRvTLFWLu6AcpmDMms8HV8jjAtUJJwvMAUxxrBjsWpJvMFy8ct1YZhteKmRUFUCZDX3L5",
  "key25": "xLhMU9u5YqaXJFXJ9VvYGzgH7yKhw9NxcpTPE793XgTK1GMs4nmQihe8oym1nMV4iwpYqAt4BTrQw3uCPkwSn3B",
  "key26": "4oBUmjaHhcV99kKzavxYHJHQXghq9ZLfSmg4j5AieGRBQagTdfEfc9YTF7C4N4AmKzT4QeZd1TfbhKwFXDcdEv2v",
  "key27": "4VoJMbwqBpcBp7Jp5egXhjM9J2jcy1wdfugmtduqZWR1LjrcbJpPYe2hDEGuzY1mzS2sWKwszkbbF4HWXHQuF8Yy",
  "key28": "2c11EBdqkZapJgEmKs3uwK3Fay2dyAGKkWdoVPoDB5jRSFUASPJYf4YhBdV1aPJTPCQVMmQEe6DzqcoJLDR3yDYM",
  "key29": "3mMRAhRqJ7JpEvJ81PE9vgnixNCkuZyyaYZoceabsj1e6LxE2JXKRpe5pd6U2by93Eoke3cnqZLGo5wgadMqaDt1",
  "key30": "3xj1vEFun6NcyUi1SDv86i9eUbYE7dcqLEohQjMysYKt7rozQebKM6MpwdBd2XjBQyr4ewRB3WHwpG5ti4FzZ1us",
  "key31": "64Pq6AGBeF7FZsSwPbPmwmcsv6F4347AcEinP85qdWM8BPDCGhq1QmdfnDiBG9WuGVGZjkd5vBpef9VeM1edsGB3"
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
