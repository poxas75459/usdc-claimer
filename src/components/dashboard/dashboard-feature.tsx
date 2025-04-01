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
    "4xCpdZ9Ybh8uyHnjATyAuLRi2uDeKptewfFeUmz9JoK5c68AQ3yhpsUYBsevDZbFfrZbE2QCzmHXAKuv63d26FjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMWdWLQ5gw3WHsoAUGCYM94Daq3FcH4q5ju1jLqGdHHHaickEMESqLs7WK5RRcHsGQpueWvWTJTnqQ1JkmpKqYM",
  "key1": "54MM1tE9J7cf8gcicpdCuxvfmmnu5N6fhwx3HQK9kDJe5g2rjN4Bf27TtfzhXTQ9ShwgQKbhPy9NjLY54LP7Qysj",
  "key2": "4uq6mgccnhDTvMRaGN5rqBpdHwUrVbchQfiEZ46s3hWNm7syC7pbDPXKDNFJ5NNjSRVkLCTY4P4VzB3cXkBHuFKb",
  "key3": "5nLqPdcUfQcPV3uGURDt2TADMKqZRuhm6xFAocvnT1SQMTEaMD1g7ZMeYD3dydGsqC3z85y8VV1S3pZT36tWHvu",
  "key4": "2ySc3wFEaUfehy4iuSs3zvfkUuJ3KqPLehoP9nSL2f1VXfXVkrvsCSNz4yoRBdfGi7w43ayugCeuv1XRKbhLBapr",
  "key5": "4kdzcFikjtb2LQppd1nGUoRj1r2WRPXM66VUSypwLps2bYHpnoSAYoF7VnNY3ivKkSTB1qpBVR1DtMLVqZmH85Xm",
  "key6": "3tzK9brn4jHtYnVG2nh9sFRhXNvqykEepjFCe87j8yXTkwpmNvKgyk4oW58Yjw8Rpc83m3rZfEZx5a1XuwTNgXkk",
  "key7": "H9gFPAKgCVniLo9jC1f8tQ9KCwrrESCPoroSQkTqARRCEXvH6sSsGmdvjh7cxAFKb4XdsSz9bqVQ9uVMP14Zqht",
  "key8": "Z9CahZiYtz6dmBKxtcT9iXTCrAZLtjmuocGXXfB3X9nRykCrZWXJHap31LGiLb1CbwrfTpyY4PwkpvKfNjAB72W",
  "key9": "kQjR7FubQngjRLKTWEzKMC8HKukV4ZE5QCb5j6xh3b3DvRVAHfBkhpMxg8C1qkGCbBwZLKnq9szsr51R1rU5PPj",
  "key10": "4hDQq9kcL5t4x8TSbCTwS35Jzrk9RL58SrZLNCrsNSbh692prRsCWBvGvRsVCnT65nGpcCKaVb5qhtpi1o54hC5E",
  "key11": "2U1gqPLj9uGz4tLzDcu2VbjLkL6FiW3bBwNhsZ1NQRCaHVC85bYRg3CLAuCVr2StNgkSdjWfZwZtY9JsYiajMhgn",
  "key12": "RgkpidB5JLLVVT3TECiE7659iReWscvtcrRKfhuAJ5hwN7H3hn9WDseFvYJNyyqCd25ygvbRvwYNtzc4zt1BvMK",
  "key13": "66971qs3gCyamYaKZYyWUNUkp9QzBovuvtvs8Mm7JDtqgEPFmyTExcozrsVY4SZyRfrbCH7dvbuKyjqMLMPTumvM",
  "key14": "KcgNyR2hgBrT77vHgf1WBftgbX34C5HK611Zznyrru7yySDZsH5Ejbkg1fdbEwqg4KoKnYpXuwCSVBgA33Q4eMW",
  "key15": "59sSjxrZSjh9M84dukSXkRC5SBTVyfT8grQhm3U5rvYQp5EqaiKn7ouJPNrrHwgD9SadKaGcxhrsDgAtC36wVN8w",
  "key16": "GW7zzqnUeGfCtSu1QnnUtdmvMtByNpi4QsSfMMYYyCGCwUW2ELN53Y3YB3XSch9v5VXTpEZJSStFX5KMQTvRw5L",
  "key17": "RVdHhNEoLsHvS6r2NtUA9AhRyqTmizWoMFn2XHRgnBVcc9UMoVCWtUKjFB8mSBSHgDRTdfwPp3uhRrQchXZ1RJL",
  "key18": "4zweHMNKGVArjupbz6bC2N7TRjWeyPrtb3V1jG9T98BS2mTKx9w1RngWBwNPchvPhKSaPmUZ5DMRbnVkjjyAEj2t",
  "key19": "5fFhTr8fEckQ5Bv9FivRtZq278ajKvn8XA9XVncpcf9QCLMXneWZEZ2K6fPazJDPCyMFZRaSwHKqFg95kCEXqP1G",
  "key20": "RrKmH3FcuQRW5c4CWqfFuokybuk4Nivy5TKGzm6pbuNrPitPkT4JU2uYn3yMpUvhBXxW6b8NEivu2aW3ipA9Nnd",
  "key21": "uHNAy1fd1ymwCbHZPpo7mt4dvgkDLrFuWkt5WZs5ZcfjPwjCsyAip9wmATzGiJDdiHyE9acS88L13fXDkPRQ9gX",
  "key22": "62EmUpgRCLXHDuQCmGN1sV5LMMDAUpKJ9N2Q6CG32F4g7QJ5rDU4UFNarUjdyx68oh5uWZZoGdTZcLK4bTPWMhjU",
  "key23": "5edcsh7Yq33rx4pxVNABztbsGEHGGwSfki5vEae2nUTBhyH5kpwMyxPSFRo8KmXbG6QKCVbnDp1QrTiZHNHv7s5r",
  "key24": "4a8wWQusmbdWRcRGj27hbHBpW7LjpcHFbnDHGzBAiFsWZtYcfpxX5XzCLFmv827NBBdf3Vux5xuzz7WnTNW7MJBP",
  "key25": "5UsroMtxYZ8FYk4pDQ5gU9sR1Md6PmAeZ3hspGkQndZUJ5gqBPDFiSy6ZuunYBm4hZjQXG8LidwbPhu7sFLsUvDj",
  "key26": "4LkxvPYVoXuLGkf5TYGVMsdoeztuNMku9SC3Kfb2fngg1tkFbizoUgKzd1BrRDczC3CLb2ZpcRvi9g758YrqgpsY",
  "key27": "46QUdafTRjtUTNKn7B7fPuWw49a9s1Z3wMvhQsSNxc6fyoFzcP12U71SuFVTANQ1A4KNEqXHEjxRBDUBWbE5zDRL",
  "key28": "y4NgTU6fYksxCXmZrMQKDaJrE5hrBjxnxLWsj5EUqz1zYVQZYinLHSQ9C8Dp2YVJuyu4ZEb98VvrBQ5FfmErowT"
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
