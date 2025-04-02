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
    "44c93KtcJ8jKMb7Q2gcpaBwjwWFnm5876Fe52QLVxXyUuf39oufxGSWAjZKd43SWfeXmrVrBenRgPUUeAP4E1h4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsMhHcZgME1upi77rGxTu9HXDjPqSQ1ca2cGywFz2XDndc8AWz6nuo9x7d5yk7CDjBtZTsw9rEJPaCcrvr38otp",
  "key1": "5jngtwpRUxTWw6ehGNayXWekQKM4WW4JPnbsJCkwMLCwPpxWTN3qA2jsK31k88dgd9NQZ2uAvrNNCZLzRomijmHM",
  "key2": "3uW4HsxSfX9rbLf6BH6PcRv61HM9K6eFhXyLYyjXwbWfQBTUyAdteV8uSpifx3qu2Aaf93Ngx2hEKHWKBck8D6zJ",
  "key3": "3CcYp6szATwsbcsXHHKSshTT6xTrFtiE72RrJCWtwTMMVYprWL2F8qrH1BXx3B7ayPCk6og4ZK2UsF9HuZeBdLDS",
  "key4": "NPMz7zBBikU23aa7uiZGtgVqHfEDe9eNYva86xsBiEFLZoZABhf61MxSVp9RRWNBrvzuFr8eiY2UiUyQJsViAKF",
  "key5": "54YagDS1NLkpSJU8hHt55cr26n5TR8ABjs5T9NMxWRVJ3G2WHbs32A44LH1Kf1ZC1fcVtCta16gTvvpSxjYSxr3y",
  "key6": "3gW6VFpzCAXK4XTiUseCH2TQSA633FgZ3LEnEz8tEiuPZVFM8UePxy64jxwFvoBSy7JeHd5n9W3VFXS3WcrkGBXC",
  "key7": "4uzAtf9crgCrvFbZSAQtfyPtF6BRzZETuz5PXD3J5GJtibRZh1aF5v2eP8yf8aNKMV478KPbTwcaVVNsBcgE394C",
  "key8": "4APodDxTt5MkQsMzr4ds4eCFrGVLTBC5JRNtJi4foqD9n442C3iEe4B8LzMFGk4MUx8ymBJkHn9mVV89nNGjBLjD",
  "key9": "2E5u8NeLJsACwr2hN3UGpKWR7hbe5U7p7osGfVUwqCMDicmauPAD9CSpddvb9AxsEdeQqYGLp66mxvZAgLEhR3eE",
  "key10": "5EzZLuYMyiuwHRoW6vmQYNzvQELfZvP3N5QWKgPmvReqtPGogPnFHKcFFhmbzoyjNxybuYmsAmFJi9tumafBgwhv",
  "key11": "2UrDmwiAPq5u2wCdMu5zVmt9cnujwiMFKr2N18LnfBbjm4PDRtCJW1w57GN6uaNarARsspHGmrEN3G7jBbqQxhYk",
  "key12": "29cJzWR7zGEm7bvweQqf8XCNocNms5T9vrYSh1pWmHWmCUyRgTuFshbSFCPMR3ddbEBPx3uU9Kd4ao6b5EgmzT95",
  "key13": "3hDkzRwgywDS9g7vuhs7QRMXmaYf3tNEAztWCXgo97ygcKLRefWc7VNTCvPcaXfd2u6qspisCFS91HTPYZ8odHmQ",
  "key14": "3hxufj2zttpfCDgrvADGdxSDmcAA3P4PXFAnNhjNFjCchRyAMQsyg8re7MR3DTKfDqXQrHynZyEMsmTF9q1CTVnJ",
  "key15": "3ZdNVr3gQKQ4PGhhy5ytn7GzVuRAZGuFiuHEncEYF8BBi4grFUxrhPW8bkZiuatyxB8Rt6K5dqGLd2jM1Dx2nPLo",
  "key16": "J4rVyMz7Qg4PUitBE7kDPVBjVJtAoTc5rAEGmyGnmqk3Pfh7UZLvMea2yHUAzuzdYNvsKZxSfYh8ZwDbXrF2aJi",
  "key17": "5tZBgqmvXpDy9PFiNbNeaxC3nZWtoYtbKG1y1gwEnMREPYZd3g45Z5Lvqmyt2nUAtHfxXN3C8zVtpTh6TM8rXE44",
  "key18": "2rZ2vurWjHnWwqrD5Aqyu2LaKe6xRiseJCZwMczBx2mLGYKz7QGAcAQpRvWhGqgnoHd4EGUg2i7TE5cnf9AkEeoD",
  "key19": "3NRtDzTxtWx92CBRL3uTvBeKccp9U9Z71M2mGAdHpXsh26HdCVuiqVM4UBroikQ5Ju4T2JBZzSg9zhHVV7Jq8Zco",
  "key20": "3MHnko85sJTe3NRtzt2Sp7MNKmaqVE5EZC3tBxLNDG6SqN2uanPSJJutm5kRCeZgdcnUMui46UF89gqokjUZkSVQ",
  "key21": "j4MqogWMVCn2UodDaSA9MFubUi2S2mYZRCD3Pxya26Nxn6wAFK4PPwfFM8R4jy6iR37MtF2AgEfrWRanGTHJMBd",
  "key22": "3LdxA9dVgg7Gq97rkWvxLaWafcYSXZEBnYJ7fDM4TLK95JHMzURop1Zp8U3MXtMAybAX6kEFDF2f2hQxbXmgwBdQ",
  "key23": "4ezFaJBFqT6n9EfYefZgVSBLd4dNnF2mMj5se4GpMJHXJBbotDttF1pqyut8bD4cWwPSTAHCYjoYJdn7u4gAKW5m",
  "key24": "2DvoRpVhNBiTLtMHrezPMk1iicHkdfqQAzrzKCvJCwRxNyDUjRaCoyijRACnXWKpxM31fgy8QRFuJer3vT3TkjfA",
  "key25": "4ESBFSP87SBXr83UyYqa3yD2CGH55dHaVirTZ3JmAbwYRp2FKfa2DSfWpcmqCZshPwCkMngNYNG9GU7wXYEfTU4d",
  "key26": "59eSkabShmXnqqW8REKioPk8VvDjBF5wkiABmCGYf4d2KsvQZuKkGLXhLGoTEEnyx6LTRgDJo26FbTjDv47bYKKi"
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
