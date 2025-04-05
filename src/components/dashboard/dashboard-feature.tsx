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
    "3e1SVGo3Gx8FsoEAAWo7d33jSEavFMoh6WiempRhvdSQ9GEQMGeNPPVZsXt76f6eDpUG6TiH35u8V8371nFqfdyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnjpoAxXn3KF7Hv6t5rk6Ec4jTPxumPAj4cWrJbUXCRD8bnG1TffhwwLVRR9waRWNdsHwntzP5otjhhmf5RhzVV",
  "key1": "5bKF3YbVEzADHXrjVvgNeiCWwvwkWh9dV34NiUJtj3SCDC4XD1pQoE1SNxVVFY99Myp2W5giYmBNPfRJPeso5QNu",
  "key2": "5j8oyiCutgor7ViYsp3oggim6E6brwkB5eUvNfMFkcZCztTk2DYr7uCr1KzYTvviGpD7GTTXYgrGp3bMU1AceXxJ",
  "key3": "5bLn7tZAbxtupikRoCKr9abLrpnzHJdiKU7nDwm8UHQm1mwHaRBubKrxeqLsEWhxrDsbTYpsvx7mm24JDnbUpwaF",
  "key4": "5cMWovhy6VD2jJ7Bhv3EmXvscgcP4ya9GjMqYG1X5e6NPfWDT9avqMWAfQ11ThJAXHySGL6GDbK4Tk2cBzphsr8P",
  "key5": "XHdhyvydjswjWAx9odcPa4zKUBdi9uiiPwVPYVRQGpZSDZDaDzr5QQcD84gF68nD6N2dQA1oMf7AVct4w9dN3BJ",
  "key6": "25F3tm1k7pTb988BWpJH8DBgNydKDq4GV2TX1N7k8HhvWsqMZ4dcp8ERGBSP9DqhYWKQD4h9TGPMDF5j1oSoDnY5",
  "key7": "3eibY5C5ci6VHAWBghTeqR1nwUNsk6MfYsBNhiMYStCkJTLHFJ2F82GmfkfczXvfg899FxfnKAUUS52oLgvzhYTr",
  "key8": "2oaaAxZp5wzxB74C1PEV7rHcvvraKi39DPjWbJDAbTe6bKuQ1Farx3wxw5iPK7DTh2PgqnajMHdTgct4FoJdd4H3",
  "key9": "5FjUkPEvVA1QjCoxiP2MbbwDr6F5oVxB2Rqdr5onZqfbNMaG6jwfrEQr7WsXTLxEFU2m8LP8Pxgjds6VRjJj4rC6",
  "key10": "4HNGPbgiEweA32LPFHfQMiL5KhHtno72E2azrqMMnPBAC8LkFysfF4rVmP2H8xr91toN5Dw2kedeU7SkPoG6VvDJ",
  "key11": "5LmdcizLRsd6S7iT8ccofJh3cpsX2HJoXewpwkKpQdjWhCmNzD4EFRcPXqTjtkTup8JGn6ncPcW2NsXNnCcBSv4b",
  "key12": "4TzpkTpN8FN7Xbg81jL4f3XWqCP8m17pKidHFUjR8h2g2c9iRkGmuT3aouVYAefzbqbnwtvT8CsMC9LLg7KsfnZi",
  "key13": "5p8KZoKBdfJpSogPCCY4b1Nx5zcUg72R81VD3QkyVCh6Sd9Uo9gD5cxdh2E2HZ2Tvpz9oEzg7i6q32kCQFbGSXHa",
  "key14": "3yxmJjUQfBrESnfw1rTfmU4SYvyMTbZorAXj5F8FvLmfTB99ys2WEVdUSH65biPHrYJD7vwY5tszVdr9xTFkZzdw",
  "key15": "5BMxtzUa3g1mUSxXxutzU6gJ8A5oQL6guBgJiGcfy5efy2rSAetwJ9PVjy2K884aU9gsN1rzvuVkz34wYgR4h76x",
  "key16": "3ZfQtgEAiTAvbTJwtPnFYLdYt1SyKLCCo2dXho2dnLfCoKeerqeocRh5nuSR9efBJmoXjAUv3E7uix1k5YCjckpv",
  "key17": "2oNzZKT5Nnqf4Tc4eoLdoqAG5yG68Adcj4V13iypKvVC7JxtTarVJuG9wYEcfmCmxBoSoQX7hBAKov45gTfNcn6W",
  "key18": "5BfL49dtsGuSivttUuQLzBG1Z1q6F37kPVX33GyfPHqHm77bbfMpHZU3i13xXF8oy1REVSrdbUTp9uXHsrVhasrM",
  "key19": "5VdYwzv4a4AgKVpF5mSY9zYBuFB2a2DxcAHmyitvsSJugwAJBm5uBD5H6eVqfjjFdjNyPVcCfyrbgiBwAUS3PMvT",
  "key20": "5P3BcgmV6So8zcrjRAzkqCue7MTkKoh4i3o959mjDMtH8CW3z4rjvYLfQwS9UKQhbbrUPnSVGC2cTp7s7XPh52kj",
  "key21": "1yEadaDXmtm6tYsPDj661FUDwhqztFJ3f8ekBvsBUdCktauMP5jVfq957WPDeDshXL8qe2A9gaZGwukHNxqhkqn",
  "key22": "5VcnDmfu8PjFYmMBrQBRNrSbvT1vXYyx7sRxmsK1Uky3iM9dSXLSpEgyCbveRbtVj6Npc4umosyj3JHibQz4thj6",
  "key23": "2pap3BGVzKCCEMDGHQEuPN1zqHDamRPiiqafZrC3Ljbp8xi9qHjFqGo1ExPfwrYAcGiRU4XCSCKQVbbUvzbuSF4m",
  "key24": "5dMPzhhCLZ79ZsCMXuPRBm836sWJgtaFh8w9uqVS9qE7UrsCXmcpM9DXJnGeSMhQztnLicuW5Tf7QUqKVJKqHKVV",
  "key25": "4pSGEzzZL5tj8P64x54ZvuunE7pY8trLWdH8WqXNNe7DeAFaUD4n6CGCef7vmZFboJyfbJFYBE4cMP2LaLcSWXN5",
  "key26": "31YUcRv2GMyVxZAZcFGwoTiACLnSdcUSXSZHASWq7cn4ZEYm7E67PWbCChXNvLqAZFeaF65ceeWPQgUG2c8KM6wN",
  "key27": "2b8Q6TbSyPYGka5cVJnXgCG8uEEw7WY1gmb3FfvMg7UaqEgGKgxWHfT9meRkMNhCspcki7nx6RLEK8B2rqBK1sdn",
  "key28": "2ZfTWGCD8Fv8qVJU6WEevg5yzwTzrKDAMEE3WhoaZ6taru8od7Bo5b98gqdqePqKrmwCBGA5z8KoMnEvv5UyDJs7"
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
