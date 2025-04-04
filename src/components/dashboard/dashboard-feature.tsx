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
    "2PGWDkWfkjzM8hmfNH9WUaYVZJYVvJY1kCZxQcSn9GpVV7FRggeH2DjTekqiiBtEWt3YvFzrqcwjjs9oWM7Sa9MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8dUPhAMV72h7WRSJeeBPNT47gG9ZVK6miem24ZxRdXt23MyV7dmqS8ddDxZApaHkdXpaWS1TKrPAJqTcCEV2s9",
  "key1": "25BcL4mNvTD5T1hEbqsuQPvsVc8PpKFeCyqjJx1bLheYF3AG2x7W9hvKeuFQS2qEWczesVd1aKRHqF4AfqeHwkix",
  "key2": "4YMjManAqeQ21jKrCa3BTYqHaFmQqG5kgLT8hYpGMGbk4GE9TwNeQM5J2ejLv7XEd1ZGvHprh5PgCDRdUMG7xHyg",
  "key3": "bqbhmU6khC7T57fTxi2P2UGf5dRQB4rwNnhLMNEizwMVJv1pBZMtXoK3XnjFMzJLfUhBvXKZbV1UsHwbconYfif",
  "key4": "5KWqqJz8NgoyaenkHv3UZbsWWFRw3isjKW5KrY2ZQQUx2jkkXE9jJt97f8UDCskosFkRD4Ckk88fA6e2p3w7xc4K",
  "key5": "2SQ1p77wwe2fAnTvrGeoVwaeDWS4EBWz5iQxRAisvtZk1uMHK4E2rZHuuaoqFrCc8GgR4JLD7pBW7nqVR44cKMav",
  "key6": "C3qrDxgnKejnVRG5LXMSQTxf2SWQ7Zm5um5FkCqRUJzfSPj6mM4CedS6p7KEUKhPPycPcsdNaTm9ddGrPZGmbNf",
  "key7": "2m11BbS2ehCaHiVfrjPicQfNvib3aexjn2PLcNbYmpHo5NsRPsHaefkh2Zr6bzeXrzgSYX9EK9by5UtYwTYmGtRq",
  "key8": "4tbnRkiqEYiWFXA7DRg6oFNCnpDcppaiiaJCGp7vWMUNKNY3SnjF3mzP5XkUmG4WAmWKgizDPs6LB1tELmzczHnm",
  "key9": "4EmxTKjLETWkoYNFTcsFVFB6jsnhsrMEZF1eDn8gPWLuJmyhQ2GGZYMdCvaugdDC7iznjLszD7DxcyDkunWjUc2i",
  "key10": "u8jwUd2XeA41GmRHBbrHHZ7yhc9DTiZGvKgK5dfyERki8fCTkpmRt2eyRdWrkhXTvWD21RPfruhymBgs5sa9J7T",
  "key11": "38rkjxHvLmgmp6xZxLG27GA7kNJHHgSqYS2ZJP6sVnh1gHJ8cprbGyqrK16tRCT2koxmX8rjSQLzb46sFKNcZMx",
  "key12": "2xqrMD1xJfTxRSVJciFoq8C9W5Uqd5hmGb6Cm9YjVNJaHyjXRyXwjNFeJ8PKH4ycTttP4BNtfT1ZkzfDJtb1DKUz",
  "key13": "3QwDKrwTGGQZDRj1przekkUbSKPBiDXaATWYzDv8WVqZsCFajnibySxxok5RziYYbtBVbisZpzBgyc9NuZQdwzYi",
  "key14": "3GsfCsSyzS8g4kFAXqEfqzLnRTzA2MiusVA4JbN6RAHBaXvnNowCT3caoZwsbUrRiPP4eopbUpwfpoQtGme2264D",
  "key15": "AwdUmQhmgrdnzBQU6a7NNAWL22ry9UZz7TdBzcq8SDP72jwrssATW8aKuNmHTft7sBJtV4HxHy1mCJBo4rSvV1b",
  "key16": "2M9w6sVqJDTLb35jJ8mZaguSebLQH7WbqvppqRhb9Fvmwxe6TeZWZ2zxiEdZuCA89xSqCeUcR5MdwV4VaCuT988q",
  "key17": "2QRzzjrXZotioM95Wb1jsNzAMjqzr6qAMAc7DngWDJgX2aMbL9xrfn6zsQ8WDotAq4RgqeK6EQHkWx94NmToZSyV",
  "key18": "ahnSyYsPndDydXXcBmuictEMfZrW5PEUq2nK6MW1svMvudnycfuFhPbmPajqCtwo2iGorFpthXuVMHENh2zyAuc",
  "key19": "akvkua3YPznLAf1BEBvEG1ztiCLuqnrPVe2R4HAQ12bH4EZngeeXQ4otehYB8u4D1hbJE2L8H9a33pVbidNzDCe",
  "key20": "4iDnj5EfdqPJ24Tbzk9h7BKNTK8FJFKtfFwdbwWVAGEjM93cRH8GGUe6y69ezSM4bwt7iYMLGS44Rwz9DUvKJbQi",
  "key21": "5nyEFGUmZpBMjjYgznJE42aZHCuomV1V7TA2hYWjiHUsBycxhCaRfQiAX1MhHCo5DPBisBtzBviNpKLpjV6T6ZzE",
  "key22": "4Qivqbg88HGNUtBVt27h53Mb3eLKYWZBJVZSMuehVhXyL3feCuhEPnrfDaLmRfkHtqRaKE72hrDZNfPNtbMhbZ9S",
  "key23": "3D1ECcNJLgGAYLNxvMrh5AFQknL2bELgiuFK7DsxhZ45qitQsHXL7uYNEJToshFgRhEDLVeDnAMxVxgNZFU4atSv",
  "key24": "6oMhcS1fHLUWrMGN1J8javepk6k5emJtcPgYGmY68Wib1T5ro3iJetvg4uXBjJHvAYk9ifBtGp1dTtY2HLGAvdV"
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
