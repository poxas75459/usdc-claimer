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
    "2z7QnstZrgg1PfDHYRUvGkDGWD52aCbgE1s25bRS8H4kM24vf66DM2AiyNny1B449qwaHs174kF9zHfWEPFHRAjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXdAw78mrRrmqvXoNRfuotyKadAhTwjEeNPVSysHfZdgk4nxyukmtbjj4NWrLHVnPDdbLhetzoLdumSZbdBcWVt",
  "key1": "5pCeea7EmHh4xrQwnJviK4puVqWh5JiP1rbnEQXZaDhQJpGsW8cZKFMMoFJsb7GdctUvraT2pk3NBU2DBWiYu88W",
  "key2": "2PiDnHofxRr823rgCiHubTGatrRvv8ZQCwbXgZay6FjFipF8G7tnJ9rrsrkp7nDEgThef2XK4Jkf5PgDQVfouwia",
  "key3": "4MF9LjaGNgDLpFskgJn4DAseUMxV1YTbzSGt5yvecKoGbanGaoBT7m7EZ9auP6EKsJ8WDdvPm4YEFMSx7xJ74BYh",
  "key4": "LnGeRv9KqbaeH5EntVUTiUmthw7fqKe6UExwiemsnD7aB2EfFjkw9HSx8k51yGs3bbvKPKdW3iwGdYUoCLmQuBi",
  "key5": "2nwHhhF4eNpuESjHWkKbwuzxkNyMVpCQdXng6bwa4QExaMXrv85ogh8WZkSMM15RLQQYhFXSHJf4XK3ohJU8A2W3",
  "key6": "47CUUH8icXALZQS9C7RRyFWC5kmgvFY3DHRcebsFuSyhvPv99Hm3PPT5uXrNxQaxzo3sWKRZPnRjQzye3PwuVEHv",
  "key7": "39LVP4GUFjuR1oswGdW83pH9s7KAMDSykC8jLLgzBDWFrFT8v9fCg5AdXCrX2NtESHPKfbkkUezXpVKTCrYMc9Tg",
  "key8": "5GJ7iRax6XWwf8sG47kK788e9xo6dtZPhLXTyMdJHbvR9EAVELM6qetYa9msZyxnqTzB5HuHMHWP58eTNjQYhYhq",
  "key9": "BzyMksLvEnUtS4UXxDj97moKt5gqwJ1Am3i1ASFApmwFXcJrKnz1UhyyCnzL8uy6SC36qU6BZdwSVsg3AjFkA89",
  "key10": "4zhA6sRzPyJCEXzrqfmu6TAZMC2NzZYDZ6a5hGVe85nAqfDiBQTsxeyxfvq9RVxGmQzFRTtm7L2wSgifugz29uAT",
  "key11": "2ZJmD7fNGCXXRBsgpnuvpZVWt3ETMaQtVU8JszcEug8TPBF19UA2Fa2scUqVHaHFPhgDZ949ssAgpWbLiy5eEAAc",
  "key12": "5g43RxASLphDagLAkVmd4c5uDUzZcFsKWr5VCpD8ezSuEC4AU2bEvhXcBJhn6gj8ovZE2Q8qmKydzeK9mE84xjic",
  "key13": "gT5UzZ1jSGcKBHAWJvwtRPUcWJSXbpR8B52HR6CmsBDWT7mgdDndBZZ7m93PZpEzDgG1s4ZoYCQinHPVTWeeSf5",
  "key14": "3EVmbGDs1qvsBXo7Z1MYmsRVNSNumhWpYMv5J5CBsWGNp5xdaP2Mc8EwkqV7Jydt9E7CRHPHKgNc4x7HQYkDnwfw",
  "key15": "keAUmtHmPCLYj47wavSarfEvL3EWNfjeb4fxebzzajhigBkL7TyWQYcGrBUHJAu5vYDzgsiHrUF3N4e76BZZMmE",
  "key16": "2Jh7dtQscmVfwH5bGQf4FEaykYuMpbXYGKB9ywYZ7jJmcxZW7ZnfduZRWGdkM5afZcjmmjWkLDHNTfSoP5M1hmBo",
  "key17": "2EAzzv2XirvgCLNnQjq7aNJx91SL9bRi8WZv2nYmzrcimBGycki2M3Gpjg9btZoQmyoRxKpStsXP5VtAHAfuX9V1",
  "key18": "7aUJw1bWAJKhTi4Hs5LEu42wqJ8qGkDrUsN3KY4wjdm4MoU5YqEuULD68ApiezFGsgXZb1q2QWdc2WhtPWG4cvL",
  "key19": "2kmYLuLPFin9wefQWe1Brz9x8v8PqVgn7CgQq5BGngf7GwNearA23TRKR1BbP7hASU44sw8CLKVmqMUrGQ6oeKdn",
  "key20": "4AsyZmPQVkZgWJA9HVxgMFyk9zwfYVaGfs6Z5Tu2vp1G6fqG8BKsc6Hu43wuc2U5rVWG1Pkc8nSYdDP82ZjVJC2D",
  "key21": "3YtcXnEDpau4H5pjGqiiHnbNJVoG6CEiFbVFgWotGRm8TepWuQ4fnPQbe7T9zBBeGSnfBgri5QrBpAhZ7XJJaLYs",
  "key22": "2eWuXfe7e1bxAPXj5TPd4rHgfRzAjSwMHi2ZZTwbBHTjw9ehjtyq7gMucZ1hyk72PGY8ngXDhPSUAe9xG8ih2DFe",
  "key23": "5beVWUQcgvGzd4HyurxydW3DqAWzLtcSixZoRBoCkF1j8cojfji2A1kFsgKkfecvWJa4zkGWLCLT8yyJ1K5eNgXK",
  "key24": "3cr5N4Mh5EVuviYBvtM36q9naGq1unN5qzjCxvHJusyEogXnxR13qA1caebwRMQRPKxu2qPu7sgCQPHSLTCCta3L",
  "key25": "4DTV2Niteqkv8SpYzkFSRWiPSBaEpNcnxDZErA6jDz7Lu6xRzbee7fELs1aYXH6vhqJ1We4twJa8AeajRJMkTzz1",
  "key26": "5pYtE2iedG4HpUfa2wPxdcBLgb29tVCdQSXBeihCfuR8p79dPCfjUvbXqdbxsVvnyvtbsPM3eTwVX563r9XVDqE9",
  "key27": "5ZAz6Zaz9SoXbLWGxV3GkPSqmjRcKJLUG1pbokq7gCveuFNY6P5iy5wxwMEtkJoKLBcs35KXbTqwvPcXxgQHDh4p",
  "key28": "3g3mBoeGyaSTLRdcj5S4AsHDjGU24ndE1nmSCHwoA55K5X6QCNTatDD8DciK9HpES5VNBdeQfsjn5xjRPgkVefsW",
  "key29": "xSY7gqS1jmPAYV6oAj86aGHzktmkuQCmRMTXNNEAVmA3wLS6aerW8BKN48FBB9Cf5x5K3WGBTbf5DC4SMVQ6fxr",
  "key30": "bXdxsu2X6L5SSwXkgGgjLk32RxmJpbDyivwDUCkPtei8dLgWnjYAuTt4BFjK2M1V4NESfBQLgddrkXzQyV7hvi2",
  "key31": "vBdyLbiMTAUSF8UzdwbD44vMs8fi7hMRKGRwsiEyAMLjNz98i3GrdtoJ6ddHSuX1TjNKzJcByYqUUCeeSRNXJrr",
  "key32": "4sp5VA9LxN5JWnUJT6ijBxgQsThj3788ef1XdZP4pWS7FcehJ9R5qzdDWyKY8hSKg7TJ1hpqfQGJqELfTiSYbHPk"
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
