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
    "VAS5thZQBVVhJWC5a2pHYnUa58o2wHJXXyKTG2QsLvDafNcPCX74g6o1ugKcKCt8yhQQcchNJQkrxbjHmpd4DmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d4cvJPShDnfQh2MviH9jv2gJ8GhgxxGbKhkKymgVTpnswdHzN2K3U2H4dBNPN9YDxfZLi1crBboosG48jbr75LY",
  "key1": "3T533yvoGHGgCGiC25oiUwp2HagQom5CxFV3gG4Rc89KsVD893noerFUSSkBEdQYE56kCfT3rXvjKYH6Ni35m3SA",
  "key2": "2NdhH6MAGq4BXq2jNo9g8snnTMZpGV4bZJaC5yXgt97x9UAY4pbfig4n8ftkjJVUhEJ8Uhq9M2ZinWrmAjfTfBxz",
  "key3": "r9wshhWJjVF2ZDPRUtJmWjJc4gDoed1Bb6ZxpjdfUknmAvj67qheDwNcVDj6WHJ3icFN2NnUsk2inB5xBgnXK1j",
  "key4": "NXwJiFejZDLr9R3p9unFP5E3VqiPuAxrYCYdb1j74qUK7e7mRYrgRcwe5f9U8DLReBT8Hd5A9SKQN1VtGLmqjH2",
  "key5": "fZ1BYedbdZtWxpAppHDvQc8Q1QkRDDLxVY9kQP1EXy7F2Xe6RQ96MuULCabLi3NvnUmZp5eCQ4FffhLo3cioDUt",
  "key6": "4VMfN261wUtqHViHctF8pwsnWxrVLiDMio4ZbpAVXNEhjYqQCCDYjk4e94bWv715u8ptJrjrf3qgcEQG4tSWeM6s",
  "key7": "23YyfyxfyfG2RGJFdKzNdAtXYbP2FZqguq5tvK6UgvudnjSeGJQc7cFcA4VWkn34KtRVjfDduhJKypriYEYbLYrC",
  "key8": "2tNJwSHqzHxqMQ1bUNMvtB21W2AjQytj65iq8srZFn3dzADYQZQSkGVWLmQNqCV4ibrfw912hfhbzkGZ4MS6y9LK",
  "key9": "57JSgws3LDMgQSEbBBFH1J5e4K6b2tzRCWhQEJuiJpkwYYZe38Y1eTn4jenqmGKmbjWP3QRg9tYJQQJZFdzDC6th",
  "key10": "2KBuqfZpPEWkftoKEJD89kNy1u51woWD5smuwjCFdPqRa9PToWTxNzXdDYTNG88pT5V35rU4muJjii9BPpJGSdma",
  "key11": "5fV8ogN8miAjyTbM9yS4x8jpVHXZ9Bx2auGuMmuCPaLa7MvjPWnJFmX5c6h5ewszxt4Sd9GD9XLoxUZbEePUBshf",
  "key12": "5NGSv3Uokkk2FBH7ncdP8XkgMpPenWeRp7mAgnm37XjurHG5zNX1tSpWNwwrm2zekQ4Jc9rJpbJz5rKmxV7Zxd7C",
  "key13": "4H5ANpLc4MmQ16qcicVup3yQ2yQhfoXU9YpcvnDui7mYfMJnEtgb45pHTyqxdJhpXbJrdRnLEuJRnCnMn1pvuJQq",
  "key14": "z5TgxQUGEGwsgcP7sYVsuoNHP1wRbwkvNQC9qcMP5zaKxdGxyzdRhZbBg7qP6QAeqZa1ArTAALkDPz2vPhjHiCT",
  "key15": "5cxPbUFR35oL7MqRxu9YxZHeBuH4c74p8soE1CXszqBZX4HSNXbDiDHuEZka1X5379qpmzPyCPnnneRA86g5fSav",
  "key16": "2ykLakJNxCYbyL4ztmwQ1BsDWsqbv67WrLN7t4tH7Yck9jbZCJBVBgY6YmmXoSzwYJGK11zYVtQNSkD31ih6DS3u",
  "key17": "5ZfRdDkjwj2UKRPvRRqP3kkgTYg7W2EuLTvUzjUqDWupNtHoxVc71itNmuMzvXbgNPGiJGebB7qLNA1qwZy7VGcH",
  "key18": "4hxXAuaUMPR8jTHZhD2PDY5aUomXTvisKpfF6odtjyQNyRPsysuh2H95sYCsJ6jfXxgCGQ9cGWZBZXpxmneDBP9s",
  "key19": "5Yosr2SsR4VMJZzuaboVqBQPNHsr34ca4DKrB39NJ5SwJL2i9QrX3cn6FpjKbSrmQFqgkeqgg7vE5RYNaRi1wHq",
  "key20": "3Ls3KCTnxdo1XGzXtrocBX5YGvec9P8ZRvYB8ZWjLWFUz4bvgwt2oBFunRWzDCmYpuZerSkUAyXhyLHW4pD3K645",
  "key21": "2rjfbfWufTyx7GPnmsw5YpfuBGRR9vK1aGsoymqhJviuJ49AwTvSCjK9R8Wvmn97HKefiyk1HupqjWoHvUC4mh5R",
  "key22": "3jbkD8Te5vETxd7UpBRSnSict4uw6p4ZmM3X41gUawAopuXCVwpg7dfCs9qVXrsUCCfcvYSYYKoskg1XJTNkfotJ",
  "key23": "dA9tekc1mm5BgEZv9TyjRm4fqKCwEEcdrPja9d24vPsJmfpve2XBn74hRhJebzMojZv41C6ELkcEWvDAvTWJpZo",
  "key24": "4GJVtgxpCQBE7dS2ZMpCwF84vEkQBubmRWhXRTuH9qeUhRBEX8pudeofdE8CfoaJNvYQXqoTP8i5xYNaoHMVERMw"
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
