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
    "5DJz6XC7fhvHK56NAP6QenLzFK45KHSNWHUHgDB79vNUSAq5Xy6scp9geg4sDhDCUYihFM55smy2FvXLcucbosuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uTVe13iAmSzzkCY9TmtCRXqfbo4u5vsVbMwbsE2F69y27g4mzA8HiEi81Gg4XNLxNhYEnGTAf5rTvoGL1goksav",
  "key1": "2wP6BA29s73FF2iSJMxc68dgMsNsfCDRGtneHmK1XJPXa7oymBs9bTvxitdHztnqMy4HrKRbB7bodow6tiCVuKpx",
  "key2": "52w919nkV7gKjd2xFa65dmChv79jTFixt2MbLZcZgTdfSCPqerdGonmf3y1wAaHB9aUCvRqYxaYLEM9bioogCwGS",
  "key3": "5uBekhpmjsCTVkpoCkjBu3YRyUHzQMWU66wh1iVLmLBnr3RNMzR4VppFJRUGxNbrtEWm6Jo2WTgwqySNdTLYHdRK",
  "key4": "N2QZGwXihSmaHvf6FHhyMabfADMVDVeppfZJcWHtdTsaeNNR4LbmT6gVWc7ZS6tFxixQL7VoiK14xhHVvV4wrUh",
  "key5": "4KFDvYm1iFgDYSoEb59i29cNLQHdEH1vG95mVVL79m3XuWMhNys3mvoijVBFZztaJm6Cq4NwkUoBegzdgEce7s8Q",
  "key6": "3yiv9EdWaAwQuAyDPrtKKA35PuikErkVT2GCn91c7mxHPKBfRkWEdqwpEnmZvxuRbMYM5Pw2xGZ7t4ijWmDFMwmo",
  "key7": "5wfWj185n1K5g85b8VNQmEsuidecNKECvKjKd4Cx2CVq2omjBzgoTJrLYrx4wFW7hWKDbJqajNFRhD5vaJVwba5J",
  "key8": "4wF9QrWBCUFqth1cH6vmLRZuhsujwXt66xgHvv2WLDb5rBw67Nvu1nx8M5rYYgQszC6hkzCNSW4HwczDUXrrFB3Z",
  "key9": "PQdB9gUpok2cSDGQQgNbGpQCsEGaJtdb1wTYNEUtVBR8jmhYJbXY3vLEDzPpFMShsGWYrYv73WrfaEXjvcUkrbJ",
  "key10": "3RGHkMm3tmXdV5p3Dpy4HPLYN79kTVPpd3Cnp3ddYvKvKVZYqADrM4jef5HPkvmSnJmjhG4nBEtZxFMtvvFnJAPS",
  "key11": "2cwMkJn2rEUYuXog97odS2mDY3ACUyNQ59bZ38fjjffV2GwH5Xj4w8nieEgmCmHcTjtAx6otVoVHtvULW51Sq3pf",
  "key12": "52uiFDoWT19FVVXYen1urK14maXxjEQk5yJ6QhL8fT6qype5vGH6z9baqznPQcf4d7zwBczG9mVe2ehHmmifGf8E",
  "key13": "3qZMK7kY7PPhG964NcdjsWp48PUWzaHhm1idBF4nEMj8ZnnL22giQaucZXv6w9G3vHm883mvztcCSgYDj7MtAZVn",
  "key14": "37mKGRBq7Cdd7MaF3b5c5BP1bTrQJrRiFCMxKw56edHjiqK3bNQDBWEqtBwoQcGKPv8nkKr9Meg44jp7tzSur2m9",
  "key15": "64C3uwbi45hLUDJ8Uggf8bekyCWi9mfiC4JegzL7g8pJxqbkJitduKU2TXM9kWx23b3pY1Lv7tCnR7GVxTTnSzdW",
  "key16": "4jVMCkGw6enuqrjEBMhf46UsUc2w97oqCsKtqcajHtiiuJqEi1XQLuvkvWHwZ4CQkeDH1TxDMfdRPfZS4eyHxDnQ",
  "key17": "4pcP8Mk8Cm6LCGapVxonjy1xE4MQkRCv9rzXQcD8zJZZVRvfvPGCRxqykbMZbTiPJoBzVhLNyVsVHaKPhmjHgDyG",
  "key18": "2fJwVP464KiMsaYg99Cmp3epZEK5asLKCVUo5P6MXjfjusmi4wLZxR4UBkXentP6fYHptxAsZ3nYcuu9gSG676US",
  "key19": "k85VgGdu6nrzj62MBjrjP4yYTUzKkqPFTaqfJM4pUVV3UvzimK3cK79HHs3koFzttmoWXYZyynN3UuvdbuaM5fP",
  "key20": "5DCTQbNcu1cdGrPYe45nY67JkWQJu6Uk3kNZVg8ncznP4msexHMbKpgv97ibjSkaGbY25vFoh1VC4v7RrJftXeJx",
  "key21": "4X9wi1F64PFitf4jq5cRiFYAquV8WtWpZnwkotfsugNYS3gTuYx1B6qWcNuLDoqD6LJ1y4utvCMofz5vejiYA8F4",
  "key22": "DrDrJBWFZ28Swio9GbSqb7VxvnGcMx14sVsgnGPRG1dxTExPTpbEscbuFbHpURW6hZgVfeTbuw3pvC6nzr24R8u",
  "key23": "2GXK4oLqbvv5mqmbi8rjZPNkBEtCjX9e56sNeFd7LiBpRQx9YMnLefUggxvFAtPRqJUhr4Uhc3EfapQZNQ44Jg7g",
  "key24": "y1Aatt8uczCT4Np5GVzyoUFJTvJV9Wh8w8EoA6ZbXtv7vJ6WtpyChkGpMHtVNhcdM1zWR4znzYErxWmk1B67jdy",
  "key25": "4opEkPQUJofZZrEmbVrrNsEBiZaAVV4TYs2GgGCrec1i38m4kkzm6Vh54gHqihjgGLwyCkVQjeCCqc1QsFPyfaNt",
  "key26": "5vFmLBz4GGHe6ovFXwzmP2dwmrQNqcpd2pExEPTK1VuWxvrCkLLbTXKW47pPDhG3NxK5bgZJVav8VVkh18Pc1GxR"
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
