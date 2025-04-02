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
    "5gRz57zzmd1ZcfKPtQ8ySDKR2gZYd3CGDYqguUcm9dCY21de156cjWaahyEGxFKVzJDeuEsKMCLb8qtiMipEekUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYqWbwW1PpXrtiUWmis2JpMXLLEVeSYZrZxYzyNLuYadLDn4zicD2rUxYxLSydKCK6tGT1YRHSzH5DtrUAFZVTx",
  "key1": "4SkDk7s7pAUtK4HGvrXcY75AxWSBoD2zryo91EjNtQYfEZoAdvGnRaDF3XmDiT4NgKCFq9tbBz9PV2f3bKoC8Ttv",
  "key2": "48SqUuHSZ6pYrBaNZijcUFquvcqVBLXLHKVEGnKdH5o6JmgR3S1sQydEMds7GvFmrH6aKg1ZekoUhPuy7ro1kero",
  "key3": "3PwfcpiRivdKTB5kFTRqAcEaCKcCLLFbvn4t5HaiAFm5iQtLsVr6zx1b7fR2DDPeYF1d9ZrUqT2farHKQkTArJbC",
  "key4": "JaSarQm7YM7aD7a82S3ahAALqHWjVm5wvPLMnhBAeHtXM4TNxNxfJhVxN5b4YZ86dv6xFmYQbafJfdZWa4vE1xD",
  "key5": "38JQN1cKycRNWUywXRj3mHmXYsLWf47Co1Y49R5VmGXNDKmkdf5d6gJs1XVfJoXJtLaUUe3ph6Shd2cG5o4c7L7s",
  "key6": "4ceeg2fNdqYyJrb25FwAAhRkFi2aH6v1ipDJVcwVaXE3nvNQHu7qWYCWHoAQ5tZgFGCjt7VVjgFad27X4LcMTsKa",
  "key7": "24SQTW9mtFgdWSeCsHdztEbAvhvhvk2U9wCmzAfo7EDj3vqU3n7q8ZLqJhEE1sdpmRtk6qhjME2Yd1pP2Cb6k7KL",
  "key8": "4eGhP1MEUCCAYunJhFKfePhoANG52BVKy7mFd3RiZwJGJMpw3EfjLBnLAbjZk5NAcNLDSWdEjeh4jBtwGffbd5Bd",
  "key9": "Wt1gEBJH1msZJqUKSxdRRdpfk8sMGnGcmtUm2ERLdtDgDgdwXi2F2cxMiwAjJfMwm1QiAtZYTzt258PcpsG68mK",
  "key10": "4aogeqyTVm3DTBFcLskwx7KHWF6YiuFwxJN3Gc9WCn4meb7mDTWBpT59Ed7VA4Pfgb2qr6UdHSuc7D4vDnH6JvkU",
  "key11": "4RrqkzTMmQbSeh4doJ4siSn47yjsiGQKL1VxsknXSda1S9th6o7V12BThH2sUBF3ogwuiQNx1ZBmv2ouGpxmzu4m",
  "key12": "3YgSyifBm8igvN5wJ8Dq7ZFn1jrxREEtP8ijBSYcgJyS6ecnKZn4ju6D12Qxavi2MST1yAecQsPiJ6YypyaNGMPC",
  "key13": "4ME5BN4wYG76xZY3USzfmVKifQhCkZanwcMZ4a1iDRhK7Wj3fvzut4fJeVDn2rDNg8chxKzsEV69jUJ3jmbyhFrk",
  "key14": "5AtfJdgLSxTJSu4KmsTVGen4SCG5A7TVTtyhnPSv11DsAb2xxSuyfwCSDiX2L1r9rGCbh8ZSeQCTGUCS1cGDBska",
  "key15": "3xyYxECAUKF9Aa5HYPLdD5YJA8xMyUA7X7FU2LPP7GPtn9MBD7CRBu2n83EWwjhNjmjsC7wV7VEST3JVt7BsnoAF",
  "key16": "47pWoJDZ3JtjUPxU5CAqY72T7g7wyjMwACXTb2ST4h7aFCjouVmQ21ZNpysUZDf8X2RVULgbBVH44FBPih41k8zG",
  "key17": "32rzygJeAhhCabdexiV7MtLQz4KWpTnsFAtztmAYJJQEDVoeC3bDHSZggtfssDwNkDULp3q2surPjsETFZXqEoSE",
  "key18": "2JsrXeSbosvbcri695eEQ6c7ZAa1MmoQSkW5CqpKx7VbxQFQDQ9oD2AqDryZGmdGCGHW3C2YVo178AgnCiUPtrZC",
  "key19": "5BpwAzdhnsugLhMcq2WY9AyCyUHztfhnChKJMwvUkZy6H1os8HPiPYb2v18PDGtUwYEZkPrtY3M9wEbBvgSJCZE5",
  "key20": "3MFtBREbLzY9J4X7GYtoDhmj1Eh9dfCdGi5BBYJc1TX5NRiS7zuxbgmrqyoXtx4pjkADYK71Aa4SJCWeVXSvXygj",
  "key21": "5aGDmmkjQmA9rtseGEHrCvE5CsiLEka2eZqPat6dnz5SnXPbW6j6eXvzLEzSLD8EKTtC3iHrnYZbzQEpwtqf9jZb",
  "key22": "WEhhW4Ut43N56RVDk6eGsy5GJj6NR9sEqgGpKn31GehrsgzXeZxjxZxoK2iBdtw8CmWZMhTs4Yvmne8t1awELRr",
  "key23": "61kWJsJQbXoh9BkWbTiRTJnvmuLx8H1gMskzSMxxdNX333cNzwsLMtjhzaPDDycGddrX2k9koaHMjx7DGfaxYt7U",
  "key24": "PTqaZN9sW2a2iZwySMRFfp1mE9hiLmpLfQXJYGfLbKMys8jDFGjSdYhKFowKo4pnAfw9d694zqAPG7vbUCRrBFg",
  "key25": "TiUJCxs9rsehAy8FfLhYqhVgd1yXH1hPT8kFcDB6KvLhpxo3eh33AAggtcdKjAN9ywZRykM5S2uje1Qt17FcB9P",
  "key26": "47Q2hY7oofe1zUdr4YSXwQNi5wDYo9jWBhAoUbn8AefwHJisvjoPyQLnuqpptUkoBrEabaDGiXpvMQXFHmPNTStD",
  "key27": "5sxXahFYYrfRhGZnuMGeabFsapurCrugjXX6iq3Roz8Bxct8TZdbwrnGPYYcHY4S43G389Cpb9ivKSUy5uVypGZF",
  "key28": "2rJfR3hLbWgTUsknzZ6vPZDeQnDgLhdCBe1pius1thxhrsaaceoUHKMZN6BPitwiA9V7jKrGn5VdP18xzft5CcBR"
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
