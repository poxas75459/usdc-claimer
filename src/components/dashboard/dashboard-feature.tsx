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
    "64RwUmWUbr87ua2fqMaBcGFwQ28fa3a3XLfbVvinHiTiF8xipegGpBMpKTrraqAQZKCm6kpTE5zAmuUDeJ567Fk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfzXyBrghotrxdemterRnYZnbc1WXBWiFHbhgrohepZyK7Q9VvGZmcLe7H7EyN9VLoi2UkwyKFSN5GPs7gVQAh4",
  "key1": "PRMBxqvcqTaq6mfB2uFVscLEGhcHJnfNCw7BMWc7cAStrApfxtQXioMmsJDsBMroPbGWUz2iDaGe8tmD6Kxou8m",
  "key2": "2HaUeWiQu95b4UQsNRH418DVD4TLEB3XJWGXMm9X5icTM7ucrnCQXjVixmZdNoihVVr8Cx8hu6M4kmPsjzvUcyp9",
  "key3": "gSPWX2VDyPXZYAmTArv6qjLNCH2jf37Dr8K9DnZ4ko65TmfhFARKxjGWb4EGvLDGQ7t9Nub4TzJ33aVLKay6WAJ",
  "key4": "3MhrqwbFsF8QRXojQmuW4tyHmnWJwApWD1n1WWyouBBDQD4DkSAWw4WfSbjvFzcYNVoAuiqvhkFBeQZKGedLUaia",
  "key5": "2gK4UsK9o6sukVKsBD2WiQ3JpS4WjV9kkVqyEoDdPgdYcWYgtjByzu1nCxgi6wGbhgwMdeztk5Gaz9qyWpgcRSs1",
  "key6": "255xDnPYJXC5FQGgNa1o5e3GfrjMKq7U9gFxznRRHRxBXPaha3Cjkwgz1WHumhTbPwD6naYruV6dFz9C7xyrQdYM",
  "key7": "3g8fxVPMYwjNze5LEP3vCYzTWhV9hT1AEscBDAoVMxuEt42o45thBbzM9WpeZALzHoe1Ynfrsj7nvquxkwkFYB1h",
  "key8": "4n3DnoT3i7A1LpsnTHKp4xxNSEMebWv86nZEU3iSYx43spi6i5X8p67tyLT88PYCGs3zXJFHyeWpi92G3roZNt3p",
  "key9": "21TEUbHXyaVu4EqqnB7yav2hntDDfK4uPXg1rLzdQ4L9mFDu6MwpGn93VjSbH5Xfu13kvKmgix35tU61hkTQafFz",
  "key10": "r3RWgjsCCiC2AMaLcXzxEi3GKYPgpUU6hnbtppZPBiyePxnTQpPpBYGnD1jhgdG7CQB22Rv3nN4m2JFhT4tGZUq",
  "key11": "4hzzy6fTDbLVwExcX2iTxzLw9z1Vpme2RJqiJV8rbzNj2ooCY9S1ZB7ooUJ8xeAnVEdFqPVB63MV8WHySF5sS6KY",
  "key12": "GpKKJZZ6TcM3PhQozWock9BSipQj6dLV44qbQr96NcCSsXCaf2rWUvryssSbUPiDSVzGe8kg5iev3hacoeyCQkW",
  "key13": "4jBFdk44jPcgVAwsdUhATR5y72W8CHjxTBhMkckqREYyDjPzBcrfcmewUFkXM6f8ZCrusfTmCeGV3625eq2zHWTF",
  "key14": "3m2hZoY28MCgQZdAbah9T4qhUaWMhD4RKeNJkERA4KbZwjKWFwjFqvUKUmvvZHFCWZnuuKJtJ5LgNru5AivjN53v",
  "key15": "cwCFKHW2WSZSnFncnSn1WEWLoRHcwHNW9s1cmdpN5ywcPBkHu5LAQtoSEY7B3A8gFHkuTDiP76vLotC51MWUNxB",
  "key16": "2kmxd39R5jJFZKvWq9PtCfvza2g2gHRN3daWgEUqps7XqnnjRZLQb6cVngw47wngLWy4HA8TjFNV59UGYakpdED4",
  "key17": "4YfFQngtRRqhBdgpFm9HgUbZvkBy25tW9ddLeF5A1pV4tr1aRZqLtpoPrmssrbFcwUmPneLE1JkC7hhaGDcCUaef",
  "key18": "3UJmpiAqg3uQoP9DykaU9nLF6NNPcPjnLWK3NnCieLBgaKEPkXMaWLfg348VuFJNwJjp11BqFA7rNpXTD3aZp7xg",
  "key19": "3gwjLabm6hAB57EazCWMPujQab5pZJk2reQNP1X2woVGMwkudKoDLZUBGQmxoqH6URvUDRP9L6dZsCh7yrUuLgFX",
  "key20": "26D1iZaeBrpMEBHRaXfNHZoxvR1ej6aaidovrC8ar8BU2xvdLZK8WGVXWAe5vokuHbneFLdDa45sVuqB52TCa7U5",
  "key21": "43uVhRJqj7X3sFxRL6vNLSW7zqtSq8DG9hxZRm2s3sttkzaxxbRgs7r2Vr8ELPUwGTUseXv6hRCdA54Cm96jHnxW",
  "key22": "44PBRSoSPBAMuN88dho62bHECfEFfvE7oG3q7yNTY2Ao3uhR7FDV513y2mY6fepjEQ5536t1Ecaibbutp9KybKVq",
  "key23": "5XjTDuxutoJ77eLieuCkTWGQ5nKk8H6qLXv9fhMdZGmckM1Z1P84vpE3fTfMgvR1nLYny1wanDihP9gmuM8W3Uca",
  "key24": "5qvpgj9KVw9Q2675WDzSmQvn4hLjLxrKoCVVkyo8Qxg45fAhmnHkbfmDt3ZZri9SHDm1WwjxGD1bPRwGQdcUgr3Z",
  "key25": "522LS1hacjwASRiMSUo95SzbG5oSG4kjJjA72sYo1dnhF9HSqMwFbhWLw7SnFcE32pqD9ieMb69YFmP6w2G7Kygj",
  "key26": "4y8b2ykPfB87eHVzYycE9VQj8wM3gdmQnJG3gecGdbTyvgAQYCP3WcGujX2QSgtEdypcukjfJP8gp6myhv9B1QSG",
  "key27": "gxAf4shicWd6mS4QrrFVFq1m87A3PkbSLCzzH9MZfWhH5h5cWf9WrWN1iVdSV7yjCitX8A5Xv32atSonhAEdixQ",
  "key28": "2nFmbjuAULa9u2YdGWC1DZQjtXGpL1LrgqcW8QNhYpppMvMqSGGJQSd8DqzpHqxnKiB44HM8NcEnCi37E5Gueiy4",
  "key29": "3UCxgNGRgGgjjZ7XqW4sJqJJ3RyMEz5GcHDywSED1ksc2PoCqtxbXVQvBnquuwvWrznP5RPvrHD9Ukwr1FUJCYRD",
  "key30": "2n9BHMTeYuQA8gD8oEx4vqeW8JQ4TbCH9AETozQN7aGioh85811dqq2hZM6ioQg2XxrRJn66uz4vCaCgPs7fpTzk",
  "key31": "2kWEwA8BDNStmpyPMuSHJHpZ6dzoFPHigHzzysNFVbq1ZPLY3ejpoQwGT2iSf6nPoeAXnNUdEU3KoGWuGUHNURqT"
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
