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
    "3Vvy4LpRt8753G4Sc1b7Dwc33vGwTLwW9mmfUVZKJcoC3AdXRibQXEGLR3umwQESHNNhov39qdnz97aThr3AjLMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EeBCUxdjYZpHfTzuowC94bMv8BvhJjqCKRWkg2tjsDa7V98UeexyYQpdpfgMJybqtUwyFCXaXwJJrRegay9dHhZ",
  "key1": "4fsKoiSpvGoW3bAk7uuS68qrPbNBCNN9NPxyRujV5Tcd9pPfyDkj274SgpJSCjEzw4BiFL9NZSZYWySAW9tpgeNo",
  "key2": "y1MLQh3JNmSPvd7Mrs2ShgkW1s9v5WSzMRxaocA2grUkqFEBZsvbg7ynYNhq3RaeNwLVTAJgYytEuLho3iAZt5Z",
  "key3": "JSZkWxmPwpvDFwzqap2GQeS4erCkit1uiEAAbxqW38RvdETHjikuvZQZHrKu5meNjGuGqyyS42qt1GXFWxDUBsw",
  "key4": "69zwDwTzKYiei472Q2wmTY3wtZh9mrT7SkjYE2fMcuVqzEJuSjUP87T3Ma4Lyk5DHdTsW2BcXPsBNq4NukmTJG7",
  "key5": "22EE6FzAVp8ETTSh6qFb7QToeZGPcSB41c4kMtBhRWShdZrVB9icbZfCaCukWDVoNXDD2RaV7EbXEncVVNVBo8Ga",
  "key6": "38xU3TE7Nm8epyXcup2Y98h1cMGn45mm766zs3dJzHkmZtKsz4qrG65MdjuFBULyPM3n7gowXDECchypnQxuZHsy",
  "key7": "xKhHdEmo7QVsf7rKNpa8ZDc482stvhtXTeb8LXbBtQG6L1EvBgVrbEPg6i4N5SxfvAC1qDXby4o6ivceM9nhDyB",
  "key8": "3Ce5BgBYxBPwm73ggVBipGjPMmUxfcNJLGgjixzu3X59wimcKyzPHeFjHm7UsyK8z1wkY3RAVuTToTJUTkViKxjS",
  "key9": "3gSTnBcap7DzLZhoVt2k33keMgvUMnXzs1yk7UmUHXYSo2i832tMVzzaUxzj5744LVBLgZTySVZ8gz6YuVzBFN32",
  "key10": "2Qe1zueYY8MwFSdFPoTBxepP98TYHwK2Za6MdDbKvjunEYNc5FGgxtg6g54W8hgY3tmYkCv53rLdk8cKbHWiTrbe",
  "key11": "5VAbo4iqB76gELHvtq4QmnwnN5jgW9FWNr2eUzRjnrXGpdCT72H7KqWM1SUwcqhdwSKrQGynMRNgXhZ4NF8gcYFH",
  "key12": "315oQFjZEWy2XrXuSZxfBTExkjRHyuxnFsrsH4Z4q8gbfPaLpxptYPEZreKuLePeMsC8Wj3eBjUpWZwLQrxGZmY3",
  "key13": "NSKWNGSaH1HZ6NpRbB5nRgzsAzKgZrZ8af3PnYELLuFMsE1bmZNLb7iPMEuBfccjqYdcVXX1ZoRcb4ZogjMBXJR",
  "key14": "zssBNvuZNEJbbVxt8gRqkDX9Zx8Er1mvxr2wZUdJe2djeM6Hzhiq2GnrfoA24xdmL7LAzuyWRAdmocajuq3eCDr",
  "key15": "5G1JZiQSMy1Eje1tRuzHmxen8sV21Ab5iaW4TaV7Qzv3VV9sC1vedTNZgrfBzxocqNRX5D4pMZTEsNPFpV6Niqag",
  "key16": "3dF5e9162ezoR7qBFEgJ1evnZpgdtmqg67niy4dfrPnJ5fNfhALQ3aMnG36qxTVP4U7aBm9xqtaVb1Zx5TTWozAt",
  "key17": "5weLDH3Yx7rUgtMan232r6WNsxwPjoontP5BwV7jqvRpqVg9FPwjm42T4RW2fPhm2H31gMMzaUTEmXAyouq5byD6",
  "key18": "54p1MnKPojACLnEpXfFkvZPkhU9KxNrLCCLwkvmwTugFygHG49qo1bN2HhbV6sybxnbNBUE6gx8e4tdpLDfnh35r",
  "key19": "4TJWZPU823NA4BnsDXY2nKNYJuudFpzyZKZaGvBFcw66BoGpJpymQQaXbu2D5V6xDqTtijdfZLoUpVwNWHWm8rB4",
  "key20": "2N4dSVHDp2CoG57F2cwwPSVyNYMrgCzfUr6DvdmoKfr1HXot9yXgp5ABJaZwan6igSs8JLb3Stpnax9rswc6GN4d",
  "key21": "KHrPwddHjNyA9HWb1TS2UpLnEYwbJyMKEH5S1C5KnPgcsPyaZGiT3oinBSwWaXE27qmS4sFqKFz997sdgHpMp4B",
  "key22": "37KTtDNThsArgJ3hQFzTFe1yDC3U54n5DFQRfAXKE5ma5mPKZ18qtNmoBmAot3KK6nvbaTJF4ADHP27mJtf63Vzq",
  "key23": "2EeTM6f9tm2cHhR3JAkMphGuY2uyMVToub8gyGGoBV4THSwPEJYWEnEMpjnT3LCqSvy7Ac7KrNuz76HotFkAdFGy",
  "key24": "55rJ4SxqVEuLyapAJL7rJ6ZT5eAPcSAvE4Wcg3VyqLDZ3zx4bY5RJkVXsL73AFc3cZBeajE7QQ8gxe4tKEWkUcSR",
  "key25": "61LU9PLhUXQ6Z7qY1Y2VK5NJVJMVDfkKP7i4xtJLUZiFVmZ1Q1KAT6Bvvi4WeJpDgohLw5P7zQmSJuUQtafTi3J8"
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
