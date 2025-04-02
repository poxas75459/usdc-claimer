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
    "35KbCHcs1WVetKsmrQc5BGCXSH4wZ1yhYo3PSWNWZ7S3XqFtbB1toePQrV4fGozbpcxC9nSY6tKmotABwyk1nyL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyzoMUurLrtMMJTK18AetdTPmVJkJ2e4xVUG8vPTKk4DDnGXeRV1P4DT2Psj6oib9XmrKprhU1A12wJar8UcJ5Z",
  "key1": "34htEKrk3iYgfFfEuyH8nRp5F59XhoixRD34qYkrXVkDmdcEQtUiZ9iwyRowjMtMfU5CGtRPoMWqYmeXa7E2nB6d",
  "key2": "5yw7KMK4hS5xTJXH8AwhdRXfciztKpGzP1y3Nx2UF21FvmmekN6HxBMyjS79KYpyEzpZd7huzQt5FUfnbfePyk49",
  "key3": "286F5TATpBYTvCaydrHDxXtbKeu8M2MrRQNREoUnmjRjbxR7z5HCGNjwy2n5ydAnj5CXa3ew7C3hQtZfUASJFMiF",
  "key4": "67nHT8TZ3D5ChgnzHKkmxWasUs9cnSNu5bjunULA8EzDzzLTyw78EyM2EcxcaL5a3R7iC6C2j5BHPmJewRtY97VX",
  "key5": "2JvFuiZKUvJYC9FTT4L6aZQkGEGBgLYasYY2p55vK16ktjAXySs8df6Vs12LmDo1UJ5TfcHwpiqgBxBxdzqViWQd",
  "key6": "3ULeHAGrF8wwZRkHUVRgqMS7fYNCSC2ijCRX1zBeeY3SWDnK1vQnr7QdAHoXEoKdc9JpER5L1XhcQme86DhxMLSk",
  "key7": "3GnrAA7oKBu251azEjcmT3DT6hM1gLHoazRxBSXgcs8VhfUyhNRj63ymZnBSjWqGNeg2QmE8t4256qTgvwN1GbpV",
  "key8": "4vzXyUrLTmp3MhxTRf7to6ygH8tQ3si8gXbu8QEKnVW49hGXeCDmfzSZCT6ukiiV1M74GUoZgBAqahcUPSZ78R2S",
  "key9": "61hRoJ7eTGadkfpx8WpF3ujCEGbgnjg2j1WGLog6bRpWRKCXLJDXEfsXXZwEStTTC7NiX29SixNCMTvubKHzxdiK",
  "key10": "3pqutdNj7eZJT37Ms6kRhFkibohPFFbkTjampzwyKKDCdpBuP3DeUAA4TMBGxshXsQKxteJbpQXRmm51BT5v7M1v",
  "key11": "t5MdmcWXe2NeDhTzeoUDtsGAFeU66kewPDWrCb2d14UoCCCkK866RkNXjvxoczLc5GAqVsHJx5Fc11WrqnzGp7b",
  "key12": "43Buv2xS2gkA3mAWMHtivZe3zSk3ouzr5gsDmXjucZqLv69syYt8vSdhAPMdixnk3htkbgpTpfkZQFG3LnW6BWjM",
  "key13": "27AFqHNp6vCjBt1ySXmociCgVGkut6QQgi9qn1XURyDhtZtns3Z21pJBhtu8tjfAYMS6WpoLLuYX98aW5NWjLSd5",
  "key14": "65twwDToB11r3YQ4z7KJHhReAxc36S5MAbWNRZsCPeWeNfu7ruVERdNCqyy4JABtMNmhEC6PLsa3my9BdS3U2RhS",
  "key15": "3cu62zreZwt6YiDo1AgYfg4GHDTGpzdo563XQYCLKdptFr1WJBLgsvtQgUrrspt6q3Koqykbpk2fjLD1rzLys7wZ",
  "key16": "2LZqRxfnD1Ym4idHQw33PXNSfjjtfJq2VL1HmjaJT1j9AjcXR52rCGML8be8ce7QDEdVHh9zSnuvBWxgMiUN3oTn",
  "key17": "3djsGgjFwxCyfKaKskxWP9wFrmLe4aEVudtfY5YpNDxkc4Xrdybt64219q6xxhnP5CUEqijebb3Rq8Yrbp3cfEJ5",
  "key18": "5KFur8TWqVDwz1Hdt7Zq5QfiGrtnqK4eS1QFLxubfz6mKpEWdTeEt6i2LyhEWNehymUveGpafWAygomao4Nn5mrM",
  "key19": "3Cz9D12uXW2xzX2CvmYUwzFNo7ALuqEsPaDXn6jCZAJArZWfipKtFLXBGFfmjLEGLtCzimdxdu5hS3VYYAexbNNn",
  "key20": "2QDGBMEcx1F2TrT4ZVYP3Fa8yP8Q7XD5eZXHtXAsoP5S2ivoEz45Y8UvvWzcQtHzCabP6a3NzTHDa5vPyg6jadVv",
  "key21": "426frSLvJ3Wnv77ZxtNUvxvXNk2y7S4Vf2XgE3RBuTg17dkQ46JBoCHtHrTzWNz4smmeQ5H12KDEqDcyNX3CEMiD",
  "key22": "4CZuV5wrpy9gDa4VSVNu57aVHnd1Unof6eAN2hkXsARr7zZcMHmU1RwTZ8ErEyG1CwP61u8XHaBTGzwz6H5VWR3L",
  "key23": "4gtJAxxmy54fTua3ore4xYGP7XaRFVf6RVZVNeCVG22toNV4wdPahBL1BXGTcL7FTBAn9V9SRAiCJKLMJd3iDjTY",
  "key24": "CcavoxnH9587et3Cm16jSzt4bYMgaXbXjkoNSrjQRjDR5TrMrQQb6bsU8hReMVc8i1na5ABdUQHLkRUM64XGVcB",
  "key25": "5V4rvZEdficQ1Q7DDeSt166H9NZQnVBdKs43s5F85rqEDQEE5HTbsi9C2djoKUD9NPqdbZsaEF9t5cqbX1qU78tE",
  "key26": "5dQg6HkjJoW7Ud5R59gzMcPC1M8sWmH3rtYpjYrzyagBW6H523UDhH2v831BjoZkPY3Tnf3CcQHKcDvShQNVN4i1",
  "key27": "5oVV6gDAAjAn9LThyHxYXmZgAi79WVKeqtcaKrcSQiAuryvoUNT9XRRnoRJkFsAdW581rzrdBHRo4f4xUzzDwYnL",
  "key28": "4UUaNVZAX8dGG55h3Jd9mN85XSx54YurwcDUGKfzEXdraaECQHTnMBKWNKB2iaviU7v4wHbEVDTvKhkb1SeYoN8h",
  "key29": "42cuvgQoeUYPNnTu1JbhSKU8Po5wfGefdPMcRQeUbrZBMbHDMkbEiXJ3asaFQYvuUZZRKkC3XTFrGoYzLFo8bGbW",
  "key30": "5Ve5k4CbZ6Rj6Qf5xGxGuTCimQVepaCrQMhDqwcutWbfupwaT5xQRfGT3KqUuzQCcWHyNXvhJxz4fV2i17HHun6u"
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
