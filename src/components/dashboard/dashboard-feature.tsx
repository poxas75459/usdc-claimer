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
    "UQMd4vYGNfV6pU8F3G8WhFYScn6VoRB6z9YKB2dNcGkJHc5u1FTvsyLGhFuAaNk85kHXJHYZE9HwZ7YE7aL38ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZKJ2eRhPcXi8kTmXPLY5vUEqR6bfJp43P1uMkn6BRD9bdJHxLVPX2DdmcEVGjev3uhEkT7AsVXztUR9jEiHiDeD",
  "key1": "2cTRpEL1e6h2Jb7wczr44dKwLUKRPsfBQPBTdZxnGWfp6DCVbPxVkUFLNVz8PdrK8knbLZfFPEYD57SiVuziuQdB",
  "key2": "2njiiuzmtAku7SND1c6peLMYEa3fRUWL5tztGWRaj2zquFBn5bxbTkn4nf3W4oPZzvT2UyL33dwcDcwrFR28UpyE",
  "key3": "4gRZYzFPWXWrjJyDSMWVxwnhaak9CCK8AeyytSrjJdiMRCPv8qkeNS5PiBVy57PtkRxcKvX9J3G9DNJEzthVCAV9",
  "key4": "3j84CEAZyB4ss7m8HcDE2Mp6GhXAFgMbCej8pkMVk6x88aZogqfKYvxvxzSjncZoQ2X6FHnZ2vBnF63vE5nJaUyp",
  "key5": "5PcBYiWYEAzxj5NLDnGgkyfq3BecB4KrrUrmr1J4ffEavRFGxmwv5GF3K4xTsDph8Bn89FcRJ4S3FhveZuk5y1Zt",
  "key6": "EV1iEBqYRkmAtPiTAqs8gusp62Dw2bzwQfyxSTJATtZCYa2ard2Es5odKyoEsgKwmEhtWewpPHHFaWqG7cistTR",
  "key7": "H8adtYuefM2vDFi44wrpC9KxPQYB3SGDSDzRXpv4UosQDZnrqQwCxNyo2z9zczAzjwcb8Ymzpv8mZbJwvSVS5rD",
  "key8": "229kfZmgCMLBhcjTedpggyzFHL8Ahp1h4Dv9Yt2rnMBZQmBVx6W4B3VeoZghB8XzZvhNLXjZacQnjVMbWK8Xgdj4",
  "key9": "5BCpXjafRYYkHRPqJDrYUWHYUiemijKn2LBrN8fW4CNoXyduFjUoT7AzhCx7bRZAxeBj4kRYdAwks4pm1CdkktQq",
  "key10": "4CmofRbRaNEoQum7jEqp9Wjk3XzK7zvq2DKe8Vnr4wVA3q4MvUYhWbsrkAX5VfM9NpY9MEUMoovnx9XxJuLFBNcq",
  "key11": "KGWdMADqJX1UM4nuwckrUrWTtZxoJXcAB9QF4FZPpXRZd2vmUXpp6eD53adxkPt1wEdCHW2SpruusUHo1dsLXVk",
  "key12": "59NSUS36dQuD5fncLgkLw8Vp5QEhkeucRoSpZHTYozd7hQjfCLFhjHyKdKWoJLdNZW37rxJtHziVGvKDUMfMbuip",
  "key13": "4sCd61N6gqqgvZ4coSn82VKuAxSZCQKizUR2oo7Unt9EGiNcanBdqKjCBpRvLNrxvbCj5kJVhn32L4TjpoZePVdk",
  "key14": "5PUMTYEtA6a6mqnZ5XQXwT1Gx2i8Srurba7oWjbHmz5T3X2wYPcTxEb8dU9eRF49GkvcXLoFYHJZzXU2vC7Wb4je",
  "key15": "3drXrjEndvFqH6H6bH8BM1R3bXXmiJpQB4cN1pAL8WB8LAHCK6j8pzwzYctbeJuCbGpvmiAoGU4wXvPzYnegHdpA",
  "key16": "wGHx1TSVU59xZy2xN2fQYN9fp2gLzuFa8cujxrckJjQKfcqGBUrkGkso7DHAvNHUPLFVfzRFSdehmPbsSQwdhtC",
  "key17": "svr4foX7Ab9Bc5YT6vqPrhRGNYPrivFN3v3AK6LzLJ4xfTWDxvybzGxuhNrUYHaJrXcXpoP8jaTSHm3B7bUGCMP",
  "key18": "4Hr2zVdMm1CC2UU3stMLdp73E7nzdzG5ie9YAyNXZwvsSpRgdVCZqqKtTofQrNMFE7HyiKgwtX2RjBzD4Qmwxfqz",
  "key19": "2eHwbWKUTKGcmfDY9wnscNmi8k6eQLUDiFtzPFhX2sLVA3oYF6ea7jirTvdJVCiEgt7YZ1RKThXVvysvmvaz426f",
  "key20": "53XzEqjKNMFmt4HiGzD8yjHrFt2QSe76NJbWbJkSpX5e4vA69yQ2Pm85m1K3qKoxH9hecb9opuX99yN9U6nggUAe",
  "key21": "5daxyhN1CfZyw4GRevQtmQEoobmSgyyUHPyYfZSmDdfa4UpaZQqpKpBNHVBWXEe64kpKEATrNqaqQXauyKX7fVh5",
  "key22": "5aXQB2ynUEsL8TijEtg62EbP2AtH81Aw2TKXkELD79uiBhgXhbF7hqpxTa3us67hzQVjqPjv3HxNWRYGFQKA5gqQ",
  "key23": "3aW62VLCjdctHmtc8rETw1CshUBagcBZJcT6W3oUDH3FkEyXgi9YRzJQ37umaUeEwBbRY2zNB5pgw8jqHz5MPinG",
  "key24": "5bH5vaYN29ihhJS6qhLQ5tczskNbjnEFskwL7k2joc9V8dT2b7fQKZnUtH9fvB2JxLVdmfE6HiWcn7eN2oqRDiit",
  "key25": "2EDaP3SaFZrVALr48z9he3TPH9cJmvsUSYmGXaYqT6mDhW9nLEa4nRw44rSzQgCPLy1DFgpSXTHUVyZPRaDZemBo",
  "key26": "2gqXbk25TdCxG5WCT9t8aQFBhXArP1iutv5Bu3xL5G41c6bt1wxdGTwaJjv5T9QgY3FVN8aGRQAk7VzL3nx9DW8j",
  "key27": "2CGJRUQguTQM6fTioVr2n6LxG8j1cG7PZs8EWM1xbwi6MtmW9nD1eaLGh8dN5441VTvSzxBK8w4TdDW8NsvRAQDE",
  "key28": "ML1JoxczvApXCL2R37SQ91WyY9BfhLpTgapeV2cwCW1btS5QHbv1yHaHYUSTTae7WJmZY99wYQmdM1vyA9QfpCy",
  "key29": "4Eb8Urdc7PSTzXzuwPfQRBDj42F3n7oT2iWoi3eNXn2yoPppRzLJtgTrQuYZDJMN2J7seL11N8HiS3g5FMWyCm8q",
  "key30": "4jnKR2WbnDWiecQU6RTiV7BQjed4d2sNMfgAj22U7e9ke63QSxcPWDAruBHrLS3Tbsuj3Git9thrrrfQv1J6SFDN",
  "key31": "vawAG9Fv9aH4ve5GYK7Bx6osa9ZPbkzQoHYu4YV8bqvjf6mBMPzhtq8kdpdFEihaFUAq8sexKiXyFjMT1MGM3yq"
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
