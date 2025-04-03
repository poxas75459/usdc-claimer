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
    "51fsZfH8bN1S94QFQDr9iqodkJpyRQUbTXp57XiSrM2nWk7DCT8Lfx11jHuHb9EwNmDYVW1gDbbNN2eaj8rkZKm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJsJ3FBP18ZsomoNDArXe8QtS3D8pSGrvvhbVQARS4SEvjsey2h84r1YHE8DhhY7Rdr17R4bPfuUeuc6CREtkYe",
  "key1": "56vpsu45nJZ4xJks54k55sPptTa9qidoiceiqjPGnM1eNPAR77vg4mpSjV3XCYUAtcZgNSMLK2zMmqq6X5DdeTJo",
  "key2": "2nhAsUKcD7iSeFMfVNnfjnn4HZAmwUs43EtYpNoozAt7HzroDZQV5bQ26KdguE4mLQS9TdV25um5MFrh8WmuytLC",
  "key3": "3FJvJkQRWreLqxkFFFXMajzvpVFLAMPe4Am3TMg5F8qeEf7nzwCNTRKps6ErsokPMP2htKfXtH9b4E5Vjhaf5JVJ",
  "key4": "5XiycMdU5f9n9kA4uBTqPjed53W6hBV2RfNXeEAbdF66XgmeKUCacDVAd52wmaAEQdUfbrc7sD8veERddhVo1CfH",
  "key5": "2cz2EPVojaRPXiZAfesKkMArq5a7k6vy1a4k8T2kawCYNFuMyCe7jXE3W9jb1aiRuvuD5rvW9PYq9FGtctfXW1kw",
  "key6": "5Lt2uodn5c9Q2BmfaSnWY6cv1GGRJpnyX86TcMgENuPvvZRg6vRqKVetsp8pYJVWCoNcDXXZdtDEofxKL8sPu8FB",
  "key7": "3SHR9NRPg1gh1cLX5qJ9VvhC5dm4vrCCKkJdXQcUKq4znsHJYhLfbFGWpFy8LsyDnaS7RtN2ELT51trjYkDBbcCB",
  "key8": "3o7ub7fW5UAanHsLWWrjqgUzKnogjyfeDkGuHF8gRQp48CjMuRgHMXELErieSV3vxvtpqdPPrNA1VQuvUKUJr8cM",
  "key9": "2cPhaxWWL7vevbJA87nxmNcXKmRwt5Jv5JaiT9GNnNYwHWCH8MqhojNce3nzQTNDKUc2AspFHbSb93R9BcoWebuf",
  "key10": "2oaeM2TXzCABNsyTjGwqtETSoYWs5gSYkZmk7bXDQH2vPt6KzSG31KpxSzsh11a33sDDrKrf67T2XSL9t2JytzBg",
  "key11": "3Ec5eJp9FHT3s2AFSSYRYU54hPKDZ3UP3XykLZo7Gp1E2ZGzWJ2h9QQ5rY4Rwmy9hLSMDELC7if1anxiMA63wDYS",
  "key12": "3rCrLygiAy5BSFarY2Fsk6Bia9MVNyqQTqhbuncothZgyB3PBSzeTCCwdDSztEG264gXEeJRYviYfhQ3VYMWbF1p",
  "key13": "7A7t9PoCT23dATvRJkTcyFQVBxaowtRSiARJNztU3hAhUZLax2xEDLuueo1AQjDNgC3D3ywKRuMvFsQRExxuQ1P",
  "key14": "3cMwgPPiMFAa9NgPPpgSm96cwUH6cov8MJJZjAPc5sK9sPWJvLaENsjN1iYcBtbCQsD5SGALye3D18ZPJNuXEPv8",
  "key15": "2fXKaWB2LTyxfKaA3GNC3xuWrp4kCsyFvVuRtMCwoshL78FEJZQYcuDB5YbDwRBrNZ3MZhdcsRzJqfkkzKveD6cr",
  "key16": "2PNFSBAriDk4hYnyyq1s8PH5ReN4YhC2FtkfQRM9g3GFs81oCDGxod9DvA85SfU3yLre5ytfhKFcruQtHNkjdvzS",
  "key17": "2mPQNMvibTfTxBs58DVo7sa4UECEghQdoUe3zazho4zQfQ1wo7ZCF4RZDJ3RUYcPdjpKEJjKLX9rZzeaSPdtRdXF",
  "key18": "2wuRaGyCSnjRsKwAr2EHrHQheE6pZNqvzgdNYyevrzGwF3Zw4PxEVf2qwVNinjKBCcnrmihMGYKtJzgiogRXofn7",
  "key19": "36j5VpR7RDeVwxVHcrkmBVrMNKb26sFnG2oJc4L2nRvUG1e2mZpx2WES4WtkTmFptq9TRoC3BnKGzN7NrYWkmVC5",
  "key20": "4mKGTN396toyuuP1yUqbX73tu43oJgMFSNwviyGas57YWc51tKLGA9vM2wq1uPpuZTw2XRQ1F1j5RCm1fefRxTcQ",
  "key21": "2QC3XcqFwJLe7CMsDwr2ENebFU93jWoqCj59eriZ5YqwerAwmXpPXcgCBpa31RJibxovHECEanV74ZWtTxjzrFmW",
  "key22": "2JVqvBAqNAtwyodonc4vkFfepzdKDj5P8uNDckCHB4MEJypZUXsgbkoiaDq3hc5Y9cVeaDPXqh6UbzDg1nAgPhDR",
  "key23": "3JTTXaNhjUUyRw7FYQCNV5SpiyKZScfKWdRYHGnsssEzT2jyT14azkfyTM2EcN5s9R4tRUnSbqKdSrgE8nJDQvEN",
  "key24": "4DMuchCFU8T7zySE4DgS3J9UtBhYVJbrHgjDW3vESnUW4QXuVDVUwHLCHNVAC6DgLbPpzsxWwMZ3AgSngPqmX7UF",
  "key25": "42jjJmzWheyqzqJpjWdSHqmBSUMVNofEwT3C4RmPRbDqik83b1FZCse5Z6qoU1FWGD964N9cLFwcQN5f7RifrsGu",
  "key26": "2kFApVUbLv8W8gAJT3war95JfuTxEQkdganayqZHdeRzwSbLZKSqVy34oZWWEo433q7brsjpUGViU5xxdf8jdT8n",
  "key27": "3TJjKnvyDRxBUGZ8PEM7T6ZtVcU8pDbyXncRc7ahhpgYN3zqH8iKjSoaRSHxoScZstmdz78ot9AwNiuqYs3eSNpo",
  "key28": "3QvPRimEnKrMBXLHh3QDHj6DHVSVHzkr7Eu1nhoEQU2aD9psTiSRQZwvUkNqm99gzvSGTsKZLVspsR9qL5FKxSpb",
  "key29": "WpRTdYoJ35rhqLBQpAsUtHwUd3vHtzwY69ruhytXJsodsA6HpxppZ6tW3juFM7zrc8Y4YQpdSrtzxpi78b6SPmL"
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
