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
    "578MZ9zKdhRdGgovfFZ39iY2DFgN1gjAVkVnydRDPjNeYDhVS47DfbSmkhHFpopx3FqMcsSNSEjGkY9fkuSXQk4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43H37QiLNDpkCTGzwFwpdoB2DuwATxJzcveeEpWXVaE2BnKNNY9rQNQ5xb9J4eLckCXgQNzKUcfrHej7EzDf1BNN",
  "key1": "ioK3tL3gmVWSohy1ANZkQzc2Ntgem13YD9df95cMYQ2a8BDwKqkZt9siBzvY44ypFNCP2rZq8D24eqCCVhb5Aps",
  "key2": "hc5ENvANHrrhKR1AfBrzrqAu7ZDr3Ha9buMmPWtg9GrcyRjAkTngNEC2MBYu8ezHZpxU6pkNv5jPYb1Xohy7LmA",
  "key3": "5LePcS7wmHffMg5oM27e5bNBR8J3GmGtwatBpZ6DxUKVMYT7QJNXmF3gRmsKmDz18sY9odn5uQ9QvJHZ2Nh6Yxau",
  "key4": "2Zzrgwbc9H578HhPypQ11Gyod8zraizzTdt1VQBV2xsCo67JhF4h6wSA68UDTdF7BzLz9CrT9TwU5p5vCeLusdNd",
  "key5": "2kABs2CSJ7SqkDvjfYPqCfy9KU6fwQUg2yng8k5tKDtnzufT6aacpxtd7iANTrAk6fzBkRswvQv9GESjg6D35Rcb",
  "key6": "vKnD2ABdw46UZZwAPZQ4i8bf8xemMQVV712LHyLpqRXmys7zZ19oauSzk3trcg1ncSoKwbeKN9bsHhFHsdEgWhF",
  "key7": "5AxQn6tYF6EEtZv5GHT61S8fi4kGPFwJUZdj7BNdj6kwEbuZU8k5ztkkPwaMdnVxs3US2PErrtGF7C5hg8Y6J3wW",
  "key8": "3wNEsFhvag3eAY2iLKE9YYbmtM1BiBPGYFWf8G6oyPrig8mSzDGeHzEWzcU96AR6fpqon2WpR1SFcGWERS7ExnUq",
  "key9": "4GWy4QS395pU2Dc4vBaJAC63f8z95QvE8ZmKGGDyaG6H2EemJU7ajJuhn8C1Q9brLCDBL9MJyXuecK4Qz3SXVdZz",
  "key10": "5YH5nTj8b18HqXx569AuTH9QW8mCKTdC8QXeq9xHVaCKPrikcPEww2W5Kg7xUXvtBMjWu14e8p66swnEEPHKntHW",
  "key11": "27R67CNHJiaZVdY9uMeyuSMba7j3zAA7YgvMBTNR9TiYGw4ZLiBSCUVh7GqgcCtYeq8NmPiq8CAUKpxM5z6MzTT5",
  "key12": "466jkwWt1qhm1T6GeMhrUEX6AppG4tsL7jgx9jUS2rGsA9JxXixiKLPys42e9yFXhbzk1KREp86HGCn6yTcvZiny",
  "key13": "3qvGKs3XqibCaXXmnyMjyZwCC9ix1p32et8BHjpiogmgQD3jLg92dDmgWX2DWwBAtcLViL6hnUT1cVMVTeNC3Wgb",
  "key14": "5269W3pSPM42vzLrzoxnh7U8SKEP8bLdUCXnvUexjEmSkR35TTTWnjm69pQh4ti54pgjeHinRaHnLp7EUPWLQ5QZ",
  "key15": "2TpjXChM75kqt5tajzy4J6myNrBwsbtni5iAjaesN15WWcG3mUdYiEx6nQCa56xytnAS5KiMA7AuSf8ourygr6mi",
  "key16": "34HKGoMgNnmGFmFcfstRyMGoF5ZPceZrXMLoQ5gfh5PTdLcFv9rm8RTjEaSHiK3USWMyz2RGcZPmYHRLztx7P2L3",
  "key17": "52sSfu3wfy97MyYWFWvbfg59M7s5i5UcPasUmrnKL5Rxp1ehncbWkksVePFJYxNKw453FNpZEsRNhNgvYHxba75C",
  "key18": "2ZXJ7wuoMM6h1RzTqTvvtLZ6sRMufRBtyvKFMFE7qehDjUByAQbjdhvbSgsWbkD66LWTit3Lh4jaFFBT7TmXhAG",
  "key19": "2wP6heALpCGAZySp6Ut7y5zRyg6iEPoXQTyrCsN5hkSmwcuMfPxhhjbMGQdZyJMmeXL7AQBpkgLNhp52YhE9FayY",
  "key20": "4fNfmpKohj4vvXXL9j28PTnhEvk96tm88DtAP8iiUnoQ4CHCGYMoCfpWc995GS19YBLAVfjyr1E1msJ79zdJt7Hg",
  "key21": "3U7FMbcHo1zaeruT4k9ws2ya8HJWSCGcxGLoNzF4kad2cUenwGRqWgS7y4JNQ2RanYLFQRygWf9c8sN72hpnDd6Y",
  "key22": "4KZvvG6PrJWoQpYTK6qFQ3Ps6AjdHayVuZ3wceqqZxSJKwfHBJb3Zff5QcaRfnPicwMso67EPnbh4a8BBqXp4NAU",
  "key23": "59NeHiMQFsofyKH5KkZcKepTjUqQs6BVBAmMM27iERozadQ1yawWq65FSFx7vcNJ6W9Y5QoSirDoLkViv3PHL4x3",
  "key24": "48x96SPxDcGfJdV7GBMcy2npbvz2GwwXorF8XQ9gfWvTy8JQsSvX5fnUAtUzT7BUQcz9zrPJ43z4nS19mZfLhMap",
  "key25": "4UBn3KtvAcET8b9UzENpxxP8fiuUqih6Vsu96oUHWnBPHn6hnJ4bN1WHo8NNWX3BiCz6FQakUirKHVYZSdcmhsnL"
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
