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
    "MBjHPDhfKDjNFuFGNiTxR6JkmHXti4JGVa9rPvqHdznWs5djZxZr79KarSaWgQUBdphG52J1zKaMc4ggrVzXtx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EN2XZfVkNo4jiJfemTtewxXyjqHPEp8DWTR8tUnhrs1kUur8F1BWDLs8okGS8cQENYi9ky98qhkgHZ1qvpB2b56",
  "key1": "2Acb4DhtnDgS5sZSDnkomyF982ohTAc21R6TTc4qmnqXbWAnY3LpB6rsBM6T7ghFpMsw5gWUhLeVRa74c8jgoWfS",
  "key2": "49tAoAn58nSNaJaZnra51askMFfEkoC5sSWsVVsiGn3v4vKMFD2pUyf6UggmoNuBwj69oxZcka5wYDtiUp9H3yLX",
  "key3": "34PfuYvd2DobwSECCvczkujqKD5g5ZDSFLAsrnGM1MoFvozbQGvr1CmNgkKbQrzzwyMHJ5ETeSBPBZ3JZFkyzyDM",
  "key4": "v3MW3AFB6nC3rqBduBT662ph9asbtDzYH7sQpzAmqMxH9e8FFkC3142GrRbYhxPxEgUzc1AdFYy3SVXkiayYVyY",
  "key5": "2YPB7M5UgTEa6wwUi1qmk3CihVhNge1bgkbzDVKtN8Gk1A88FDgcCmKHghRNUcmvtrsCpvVXKB9vFvrz8UwhaqPP",
  "key6": "3RLm7pDgxEzMuUqfgaJqXrBwLcC65M2ogtWxsvecHBrCDKd4V135bSZqHZinVc6rKLFow39iMP2Zs2aqu43KFZ2c",
  "key7": "4tZBjWyqZoNH4HF7HqfEtPiMzEhWENQqE3vzzEpcgwDeUysDHvirYhMKVoGvuhENjbYHFHcXEqB2X7Pg4FtKt1Fr",
  "key8": "475W2Q3wfNoVkLPwwFaTDsV9JHHpsKAu56UKuAATWwtLEDJmx2V4CiF32KVQ2t7XaeneYWo4yJUhG31Q9tPQQwGv",
  "key9": "57Xzsmg7Bfzf375VgGJoCk6r76ey8Lqv69CYVnGeMGvpiTgCyekY4acHcPHgpmGA62oe5uopq3TrUbgniuw5kLAP",
  "key10": "4msWTzDCrEuVtjpTnz3mTtyPe5EMfzE3bwx8ZGmxunFM4WwRyH68Ttdac23hrQxxDWUt5rSYcwhko4P4SRM2Yfd",
  "key11": "2gmQ1AgBdsAwQqBKoip8z14eaCpXB1Tg8D48BVSkUQxY5wRSe9XUjQRaMcDwhNhDz31wREDAxLRRMm173c517R7D",
  "key12": "3ComvoNUYL3jX7Uujc4YZ7L7KVHEB6Triruc4yb4LB9mdepuDxfm5pv6m4WaX7VgGgXup8zyzokFDbe972RpDTpe",
  "key13": "2udbDM9oX93MWUgy6tkxU7kUQnk8kNHE9GvVWG9SWEM1xvKAWpawMnbpKPeXzzTbnmy2BCLq3AaEbFNWK146hEFp",
  "key14": "49Xovhm1r6VdDeYtmkAjAWqBQ15UYK7QyWHVvbiXXuA8DWDcASXsLw6bQhGFkRndwiFqVEZzNxX4oTkRbsyKBeNK",
  "key15": "4MfeFAGpp8i3ngi5k5PxSwwgamKbHzMogSunQtTzjp2bi5pe6EtfkPT86XeJKpDVxSFgitqmqLnzgZY1cEfpLZkF",
  "key16": "VKfPcP388EX9oGeREdjbAcMc1VxeXpRZCJR9nxbXMdggx1Sbm7t5FtZWBasjCRZJyUqwh2EKrZkd2FV7WUcBzCg",
  "key17": "DkMCFU6urCYJP8L1jFDMwwuF27wmSheUt9gqCqjt3qoT594wEq3E79J6DvnvDJAytxWvM3qzYJFTPYD8Rd4F133",
  "key18": "PbQshjFsueBJoo2KVeezjLWngQwB9R1ZZ4y1t3tBAwpoC421txD69iN4pRdNiLDTLfLSTx1LPTukN53MSYGyh5Q",
  "key19": "4q4QLjbjT1uPMvLvexG5AWQ3W6hMcxoK32kvPwXn44NjGbnZZyyfyCrEg6Tjp8VJHehdg4Si8wxdMArRJc5sqJAj",
  "key20": "55r8US5i8BGvewZpzDMH871pC75PJhyVhWPAwdyW3R6EpUYDmSYrj5ai24PMkRpAsgKS97L3i9tnqAJiDf8gatxz",
  "key21": "SrJYCYikcips9tY8HtHYpKZW2UsYbmDhYivV5AULXeXxGu6DXL2eNXHUYj3QvFoPXbYi4o3s6BxmNHFLCdGs5A7",
  "key22": "337GKhwJcW2HWbsdiNbB9L9rjS2cykUEL4K7wR1DwvvzayAdqgf1JnXmxmy4agA361jSZ1SyehmXg4dD82khAfdJ",
  "key23": "2iXvVhhTFzaWbAeL4Xs8KgiMmbCr1Y85rwD2povWJDC5EBZFCr6yxx8fiNe3VjYx4F8zktwtKirjDMK9Hy6X4UnG",
  "key24": "q16NywbXo9NCFiq7J8MKfDsyFYi15XzvvJ6VKJoauB6d43Ps6qBhjZrhN2b77wHGahP8aSMZSpbe5yDEBXnF2NK"
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
