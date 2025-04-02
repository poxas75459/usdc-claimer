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
    "4mxmKoZxj98dkZ8hS4XonqDwWQTEdKJP4MkwfvGikWnmBeVBM195ByByacySudLecjThTQsu1P5paW1cxZaPiZ3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eyDb3GjqSdec64kEyRv2nTrvSUPgU3KM3KqJa5N7AtU5mGa2k4MZzYySxeBssdjYsSyyeTBWBqn65w569fvZAF8",
  "key1": "2swXatrGEpKctdpsJqo2WXym7XQtFVLpXE8DKGQDPVcGo3LxkDUiPn2MRuMSsTPUVDyAM1HFZn2QFNpcmzAfWJap",
  "key2": "cbHxDhbtUEipfDVEWCGBGXiWCSTV7fKinfYfc1s53KvAE2xQFL7ZHgq4xEZUCT6mjEpSvj5fDiQYWGjrGYy1biP",
  "key3": "4H7N8ukgEdhexW1qkdNtssj5sVkFQg3x6SASXXUYVpws4JuZDpj58WM6xijTBC3tgVvUWcToQmWrYLRFAAm8r3Tn",
  "key4": "3fWApXD8pqpbQcv6crZLJX7d7wd9SDLszpVeXAdQZ2uiKEKncUeccaeHxXnxhsra9MZ99e7edvDWnmseJwxBe4no",
  "key5": "4ffxA7J7Sn73CzEh1YoMWtvQatJUbr8E1TcybsipGJBU71StJyjb8ZGSJ33zKzZNxVHEPV5cyEu48muSCb9yain2",
  "key6": "2yb42Thn6a567v2CyisNnWGn7iZgck1UobTa89c7cgdVcJWattHhiZoSYs8TGo5Xsx2HFbt6LkuJA9RhjxpV3aMU",
  "key7": "4F23521wZkvyQ31xpKm7BofcPecS7gzx87iq2uxjTMVxukao3RskY37EqR4ePhZ9ToFAqfaN1sK79uPnJkWMm925",
  "key8": "4YWGKTS5BHM9qEU9WC5dRSBpBYNzztYtVnbb8TFvZ7JfKvTiAsigDrYUFwpLkJ86TeLd8ZhGUtoaatwYR9NhCQ9X",
  "key9": "2pBnMfN3xLPycUojSQmtsPEX5SNvBLZpdprkERQ7FiLTBFGj64j5v5uwRJqQvPiBySL5ByJEmUQrw29bNf2RYSgL",
  "key10": "31FJizQs9HGsoZYW1bigWEaUUjeykc1Mv111XLK7zKWLoj6iXPMqdgxhLXnx3Y6savmzxCVHXi5jV25ZvcZrF9sS",
  "key11": "4k3GxqDmiJ2uj2WFEJAgLR7fKVTecoaC1v2g3V6RZAzthrawTLv5JUFjJnBdztCapeWVjJ9Fm8jWeeTWqFG2c1PA",
  "key12": "h9dssMh8wrZoojM8NXNBg9DuoJsd93Wr2XhqqbgCowYJ7aLuVHmVLTxDKLD5rURF2YKhemp8TcWVaRTeDRx4ohV",
  "key13": "2vzbBsqkwLbUh3S1X5MrjZG46wh4UKDhiQyzABtw37BhgrFrCVJrbtRtcimUhhYKXMKnT4VaEyfvCJW4UUkgTu9Q",
  "key14": "2rMGsH5ZrM9wdRcN5gyTpQeV9aiLLnTvUtCSqS7RTY5azF8bbZ6E7mEoXdc18t9ywxWY58pVyide126Gzv9FsKjW",
  "key15": "pJoU7QUBJ8jSfKzHDCDpL8BsCGtZ9bwDjCoSnoudAtqV4dBWHuLyrpMiRCw6W3kNEefFYJQTKDV6t9BMfpKY9iK",
  "key16": "4gyMPMRU4GymihzSrfQX1A3ZcT81sZe2nhmskps5Zvu9uYnLYaZms2R5YGibK2NASMMvviMaPwHkcFTF1V32QCFK",
  "key17": "5WUBZqyuMUVCvy8Y5aizEDQzxRKvx4zVXqpgFvL6g68wKk2dFHRdKC2MUnD4aBRFyxdxHovSBZrcMTnv5M8eisQg",
  "key18": "3XsrH8gPbh538GpRyBKSGzRC6KpHVQQK5RMB6NtGUTX93ywDTmsX24Qykh4rggDu2HQVMoDZeAVMMohYzGQXubJ9",
  "key19": "48ZWAKHJumVTQsCPQRvzVGG2iRc4A8nqRQfTsxJDfxAiQ26QCy1UZqH7GLFY2RZ5L5K2xiedy4r5ufoogkWJdDGd",
  "key20": "2n4cwkDrPcseHHTVyniVAfxFtSwYCZbJ2UuaMNZirpVDDNYz22obqyna8apzahLREpto4pQyMgdC8t7B94q5bmeV",
  "key21": "2CwudEAnaGqsqi7qGXEYBhHX4kGnLEZyvv8P2zmhHarXQsMkeZpPQkCEgxqvgnNGhvRJAQKZ42Vj9WzWc2z3VJUV",
  "key22": "2FLzaHLMKQaqbey8yd4kdMhnEFbaoUvetinZ8jNsGRRk5Wgr8oAGUc2TNpc1VXtbj5UepHvzTd1p32btyqpmazzp",
  "key23": "4wb1AMB2ov2TWEQAqmfuimpciBfwEY5GtDUSfMGQcpYPn6w1bvK58oWZYnATyPL6ZBcPYwiswqXgjz1ruT7dmcub",
  "key24": "3LxHNLVpkJCiKabeNUDWwesUbbfZpMj8FgCz3FKbciZe9NKZLNTryPg8AYJ8ii5ap7Pk3cCbcUbWyMf9vTz31tCi",
  "key25": "47VrnnmMN1ir1B7eewXZJqE3c9M6CdYfv5hrXcSEx9WZxJYg5ftaBzV7UEGzEAsiqhTM3AfHjeg8YG2rXLz8CtPE",
  "key26": "5rkdkoNVxNArKWMz6nXzodtzWEMztLo78SCkEQDa9NAUNpfqbzsHZ2zmePG1L19YmMtv9ch2nHcU5MPi8o8sfnnW",
  "key27": "b5rbg69jTa5mjjEs6kfF9yiqmHJgCwDNiEBsrLpqDjVnoxGjiPUssibyxRKMiUoZ7tccxacLnatNXes4DiqNAvx",
  "key28": "3DsVAFtY2aJgFYmpreetqWbgiHR9N2Pn7FsnYvGRp8dxH26tz7ZxuND1YKNUrj6ZAp3636Bmw4ramuiPnaqEMrCH",
  "key29": "41zbP4KKheJ8L3Ut3z4BvZjNzHxM3FuhbWMr17xvrW9DKKfqPbY6xs1Am9FM1rvoYZoW1hWwpMHjwC15Yh3yEAMF",
  "key30": "2krLtUL6oMc4ERbqZNWpR6fCf9UA8rjdbxYQyxSbfeK8xNH7h6b6xxkpQJ3FjDzYvUUFTDb1Xnx1duXjWMqnSSVY",
  "key31": "4rZTuU2NxnrxyQ7ZVKGYskyWsKmcgjtMfUWMJnMuvqnRPTxN25GoqGzGeutSvirx4eFFqb8icaoPL25MqR82jcAg",
  "key32": "3qN7DzdqJvWeQ4QxCXLTSuirujmkZ6Qeom7MkiAtzHX8mxhtyhLLjMcrZqhzSzErf5Akk8dPkNJcSbBmSArWXhCd",
  "key33": "439b59uWvsPZXtpEXW8B28q7wz6QZZGCyYnToq3BVuKkzRJA49UuWZj2YS1YxceBN58NjbwxXXdrC8RBFmT3RXTX"
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
