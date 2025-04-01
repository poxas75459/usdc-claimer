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
    "5pTjoHj12AEvgQp76GBixHgHZfzfQoaSmqrnDALy4wAjCjhmf7AwU6VuoKsj6V6LH5SMDXh6z5iwh58N3XRtEAtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499Y6xSA58f9BChuV8q4d4J5GXkhbunYVxLDytnvidAwJShQXEgbT5MiT8HjaaMiDX5ohfnH5EdWdwhugNYmXwPr",
  "key1": "2yCZf82vFmPWWVMuNzjDfCZG5NLqyz7RHqGf1seRn3bjgGE1Srn4bcYvyXvnMNAvEmupxH5hVnzkpSviSmq5MZua",
  "key2": "4MYx1Zn4qr1K5Y8mPmjddwiHCwrZy9kkohpShxNDJ4SjwmhvkF2J6JiyVGTL1WQHirNqjdqyLDPghjJtCWuiAGpt",
  "key3": "34a2NwJG3o2aJudQrmMGNkQxJDdsvbbwjXtSZqvcpCYQPGbqdbosbzjbnJEWq7mcn2uKVVkxBEQxyRUrbRtVri67",
  "key4": "CS47SWoagyHCZVyEmRavaWmMo12yBfvCmZwndjFrE7UNfy6o3WNvoassnQQ1C7iz75ZBwL76rgbGkqKDG2zqau7",
  "key5": "2Tw2Z8GG2qfNDmBtxfi51w8nAjCja4dMdm4vMudHpBZXi6jqUtRTuMi1YaPyCX5vGbgk8gne4RN2mwZB7yyLR9Gn",
  "key6": "5Nqb8we2gceLk4dy6aVbhuyiFGXt1oi9L5wtcbc2HvZ9hGv7QHx6z7hgoXGQrCkoBjxgakikEb6PVMUdfc4Kz24e",
  "key7": "21pZSb5h4fGfCMuAFbnTL912p4K7ymeqSsw7Wcr9uiq2XiMbztdLzeUYFbhJc7jMDd1GUh6kMGTsDVrqEaxjb1fA",
  "key8": "2QkTxCFXRMZbYtFc4DJkuspABZZESzZds9dwZscDS6H9YDZizjrHrQeph33f7v3W76fJCshKZ3SV39rCeSmmnAVZ",
  "key9": "LxXKLnUAWACXsm4iqCmw2Ts5cgWsuCGCYKtMNPwsvZRwZ2vF3K3ft4TJfcZ7cXMfwSwLpxsQ77urwuMbb3o3Rcw",
  "key10": "4B1SfdeuZJ8HmisSmjUAbNdpDxAD745u4UKZqvncWLHyPmzgqmwNiCYDy4u2AwdWL99hVuvGquoLQceK1VYad7qR",
  "key11": "2cjWTiMT5FzzBg1ruH2oCXRrefd6o8Ph53BvcGW7Wv4FQ376mRpF1aZbjdmxKCuS3GxYchrhCFhKySMNfJmFRcTh",
  "key12": "4doz1P17ddNuEjaeaVypiFT5dTP5TSgJDqWGnMrMA3a5QDj31oPZNtBht9mmoneAUDJtqskVsPbHNbHsqfRyEeqG",
  "key13": "76qNMuZwLfhHg6dFv3NJAZ792Td1J8E9UoYC8gYwwKLHbFDfkN2MhkKKmimuk6SThue7hwXKXZhQCfhVTDKe7u8",
  "key14": "5xaEY8ZPiw3m9d4reaG9TewVgo1efJpdLnHMKitMPkfB2HFixZPeECHTD68sA5VQEZ6bqqY4Z2KJDttvragcNkHp",
  "key15": "26qJ52rRru1FC74TtWFe5usc5j2RjU8o2PvGV78MGiw3VqpZArLWjA1iEhb6YruFAeUHqZFLDFnKdim2RsNaM23s",
  "key16": "26efQtHpi1puWrN9gCgfMmDdjnGiggzvSFYmd6qjtZ8148QVJBvVEuwrAdJGpLNbeMBt2mapsj6DJWRt91MyWGPa",
  "key17": "3cxWQy9MjZcaBHv2UK5AiMfkMuvV5WhEo8g9THqUEywaMMHKfwEfv7NyH5zvF9KA28ucjXKaFkLSsk4EkYCdPE2M",
  "key18": "3Nj1TCYBtBdx3oM1Sb3UKqRAhu3gjt42HRMkrzc8ruadjPt1Tw9xS3AcfRQs6gauUvGFoRDL9VadKNZh2MrusJdb",
  "key19": "54TSNfc3VkzEEfRpUkXjLUgLJRkmNpSz7kkrEFBvG1HNJuY5kNExRqNmttGYUqXemYXaqiXUA4ujCyUt4KB4j35X",
  "key20": "4PYak3gzzoR1eEVgjEwA3o24XEUCfCHcHCwnjboQDRqMTVaMdZPMvPHoNNYrJJXpNfFunKnYTPpxtx96P8jKA8mw",
  "key21": "5Lz2RbN6sELcKp47W5MmsebQZZTQhJBAzj6HjBD6RdGD6t5i8PtFDKfxcjveJphYJZH1qAkVSzu4XZDDi8j6s6ew",
  "key22": "8SEcXvyVPyKwZ8e6eHEFtpwo8V1pDXN1XLcSjXzFvndZ2WUpufJGVwHQUdB7eL5r4gfrfRLWEomnmSam7AvX9f9",
  "key23": "3dVjDQA7uKDGeycZVyos1TjX8MVsM5fAtJfjzCtRMzT7ebSJQxih2X7nGaXNUP8sW4RemfFW9wqV7tK3tXgioUir",
  "key24": "4q9AgSifZphw8KXPtFXFqC5WHfemyjEYzMwXmGED1SRQYrJHHJpLHMBhVvBqUmoNs9qYijttstZjTgHWT7ozF6PK",
  "key25": "3DxKS586YZt4uYNvfj4MnL7t2HJ7MqAwG7aTsFq9KjSinKdWdUGZr4xBsbEuUDZLqm2A1LWmGPxxMGgVhYk11rHw",
  "key26": "61fi4ExhqvTRcVXZKW5RvsjoBESTDB6rHJyVJAFq8BYXbwdK9FRAdJUJTF9kxgK66Qgb83uo6Tndq19evPHydJ7p",
  "key27": "5vvBMPx3RbTxXEirK9vMK1ZQZjVT7cQS8SarvaMuYtsbuBSwKtnGVPxJ4aDdGkVwvi5cEPaTpt1WjPSy5iBmME6M",
  "key28": "23uLL5etNKTmQdch9dCsLUtNqdGfoLTv3XpiBZ38t71ve2XBq3wfzCGgTFDJz48ENb5MH9wsNgBGH1dPLY5j2Kij",
  "key29": "5qZZm4dVxx2Za7UHx6WBrPUPHjzZ4S9UCyZhteNAQW1gR5e9HpMvGgQcaqSSow5nCiNFfwPpEp2KSt5TQka7Rvvn",
  "key30": "62rwK3MNZ5PeM8uqq52pexCk9FkVSpR5nxUrsGtSod3s5FhUHdWMASkVDcpSAqGe2oEjrkrpDTHiJ9vvYs4FcyMi",
  "key31": "49x6p3aT1nPQwRU2kz9q4r81nba6ypxSTuGKmns2kte67rgFzY9s32KoXaXf7Pxq6by1vquBHfjjUCqrgT5drBeF",
  "key32": "4oNyxjdDWPNs5dYQn9xK4pqsUJALDTXAMXdygxLzDc2tvSwuTNg3fn4wYMBzNVCcdRx35Vp3Go4T9akpGXZioDTA",
  "key33": "22ENdCJ1kixkgKqbx7aYpbBxTeWoHFmZGsfLvF9MeeYoCurz8bXnKaLqvUBZ9JaGu2ZMV4yzdVs7dtrGv9VjADAF",
  "key34": "vi28MjxHYyaYzzVPxv24cLUAqdohx1UeCjMePdQxSmDgCKKYrJYdoFKEkB8rRkxKHQ6DQtqmYvrTQLKFQqSXBme",
  "key35": "4QjN2BTaSoNJJaKKGMKijayFbfLPPWWthwQR5vWx92gWzuw8uS4xJtR8DmJSwhBPa74NzaCwLRCS55fVd6ifxkbz",
  "key36": "3zmKtBSje452fHX7PP3Ag1m1jiAZ8Y3xJHCyTNXEyzTNT2DSgF2irhXo4zrVtA9HBXAFyPzmo6qMWc5g6kVw1CXf",
  "key37": "3xxNYVkN1nXVTUKbtZqdnuWY2cgmGFBdcPa3zUSQgfY2P7DeBqmbvdwmj4cFnaBqRiAoJbPginxkaginAgFoxTCm",
  "key38": "4BMXwCVkVNXEx97UVxFkoA1R6yuCNQDUgZeiUdWMZxBh9GvKEJmWfcKhFT6wFLLnTLWBcLPn7G9annXYr4QYoMLJ"
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
