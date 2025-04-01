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
    "nCcwPm2gRVJ644JySF9jAXNZFDcLoZrF366S8Mwvo7WtAV8bNB5BKqbdHwncLD4xmwvapxh19XfwRVN8n6Ds9ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vmu2yH87K7Y8fssR1PLdWmPiZK1XoYtj3HSXVVw3axfxWWqQUfdbyyxPoTahprpT8xmGnNZGjP4PuX15re5A2Js",
  "key1": "4wDHsNgE8pf7MGqhtdH7ZKF3n4KEc2B8HwpEEJ7AXfFqKKb1JissfmmQybFfhN58LkcL8KLBEi6AVAqHpxDPZfMA",
  "key2": "642RqjvbBNZfwDn3C5yrr8NguF3HCzGyHiodKfKgEmeXUYdtQNDNiXujkg1yzHi9i1qP4Kt9K5WnMXRxeoC7f6oA",
  "key3": "VzMD9NygSnHUoXvfaLUamC84439BRpVeKp7TYJJUXj14syo1uaB7zLuocno8zACA88Tw1LYEHrxQFiK3AV8LcKU",
  "key4": "39yXTcSLcxCgPkzRRKVLZpzr53FLnpArcndcTfiPVv8kdCcBSTMZxFtcTC8y784wwwoniZm2eSs8ndyRtaHwCaY",
  "key5": "3QKCTNnoYsRAcZnxMajun9Htvq5U9ENzJZuS7VBpdHZ6UPz6qFiw9KaTJV9YTsn5QygwCQcLNqieGPAdMQyShVip",
  "key6": "2Xq52FBncZZ4r7xXxWTdCAYwoV7squWuZEfq29hXbPVujJzEPG3gmiX7stmtMjyj2PMoS2kHR2ksTSk4nL7Brc1b",
  "key7": "4pfPnH5uAB8BJd42Cw2m6rRQPt4z3hqqqbXBj2vjNidiWEGtUvZZ3o2s1m6tSqMCamGkWEFadfq1x8UCcaf37ptC",
  "key8": "4WKc9JohGHGMy4EXLXhLPHU7kJ8iJK1H2vMzpUfFFMg4kefJnmLBHqEgA7cu7eyTgMZdZZpDM3CRgVQCB3w76y2o",
  "key9": "4xLMVmf1CbpHdc4mm3T2GFEQfiwMqVKKCSj7sTGUUKkLmjFnUeVimc4WyX4kKXuJpxmZP1G1zrQ4tGL6NTqU3quZ",
  "key10": "3UqDkYF4uSuN3FK8SBHH9EE5bGMVmNzZXdmE2jmPR1cMxnGgnYvvD82FFZer9herAXv8TgrTBCDAJfup61DZwnVE",
  "key11": "4mqEAZcowzop6P1QpD9U2DPGY2h2PL9hRkWadcsHwUdhvn7eaL6r3u8gRz3RqtVWf7BpRTxdCfjCTDx2onMvseKN",
  "key12": "2kGpCytQRdiS1pfVPwchF1FgSnk9fpHQJSphFQc6gKo1MpRwdye43XL4HnfGbh3NjnDWV1X1nZR5pCwmviSGNjg3",
  "key13": "2wFoyBmxP46wkLQmzkcjj7Lmj3sygJXeQwWsFGhsvKNjEVYeEXK62F4Jy9sFnbi2Re28Yev8mL2LKfkFLAdXeQpA",
  "key14": "3wTe8uL28HTgikrQGrf4KSxoEFSmJTRzNpq5jhsXnb9ujXcJohwBbw8mfJsJm48CfXZgm2EaNkkZeTDFhTRF1vyD",
  "key15": "3osRZoHCew6f85xzCCieVh247Wt8tLsxWBsDJxaUs7UqrVouaTboWxtJ8bS7Y9ErMPtFJqfDTUUagKqf3e6cfzFb",
  "key16": "3PHQJ2eK2BUiNESKR7PCsaATsxEh6c9sMoNBaqVkZ2q6mCgFJd7TzLoSR5BVjuzzUc5qQKdeR9YcWB4AYT9wqv7B",
  "key17": "WHzseUaYvg2DCy5jtqYkh2DQP1WoUnhLAgBYF1zgFbhw5Tp3Y4zYQc6AXWoH8TSji3BPJKtcF5b6DxhvNJahQSB",
  "key18": "tEJD1zN7qZrFBgbDSXkoaGF8KmSZZwUQvdKqT4ZUibK1HSMcM7Y3piZ7XLrYFoJS3Ms4tiT4JofrBgBZtJ3ehyx",
  "key19": "3ZZUjLjswPQdSJmQib2wkSkKMkEorUFhJ3iD8Tiiq41saekMnkUfmSygYyMsGsneKPwhoXTqPLFV6zAGtLx8Z5CB",
  "key20": "5brsWa54apHzzYcZ9KtB9iJhux3t46yjBSWXHBaB7fCFS3q6p9abYADnFqNiY1FcPCn85YrafRWV7ogNTUB8Yrf5",
  "key21": "3HA82fxND77TCKNcbSkDU7vd65ezWamqyq5ZrRwCrMpfySWstx8zyMWDte5bQJJJyofVYAMi5ZvGsbSudfp29geJ",
  "key22": "4fNQkcHQwYYVwAaJ52myupru16PcGfF9idFXUMJWdpMaPspxHR72bH1bdZ29Y1a5i6zFDgSDBra8qqEjiTUoQEzX",
  "key23": "4uRgVf8iUEUFbNnCov8KaBUvCq5T22QQBHt6mN3Fdin8LzBg9pHBvRh9UoBVdUTuC5TiFwt3ef5gcGzv6qFy9dah",
  "key24": "27cyCavZbaew4biXnpUy8C8Npa4WwGisWrtQwZ9RfbXUMKfYxW2gKxKJGaQCkgaLNf15784hCpu7UZRVkZhj8HFy",
  "key25": "32AVfn3erfroSr3QTbd7hqAws55UXFRPEE2rJEQLxJZVEroNGi4Jkjn6B6nWpYkjdbtpmbh9CS3dx6Y4cRuXzgHB",
  "key26": "4mihAFovK7injSwH5heGFu9dWJXFsquHjDtV16VthRB2QZ78Zq9FYnrXV9g1GHC2gQ5dq4dwJ2R8tLXNuMn6SHtb",
  "key27": "31rwYqkYwZmiRraBWecdPTy73SqiSFBwHcwhuRcZgYX246DeAY2ePVDsVqyTzsHHr7FwVgDghAbQBmsRAVtvDZdz",
  "key28": "2jFsks7VPUmejSrxmcvyYGihKBKpvgnxUpQHaY6ej5PnMCDjCMVZ3Fh3ZXH8grW231DHy9VkEAK9rNqAGFS1RgxC",
  "key29": "2JZ8z4WnjREGqypCKshxX4MMHHDgHoos3EFxWAsQSQHKa1SocR71icgBmxXfK4aJD261FyMkLnZauXTMijUCCw1s",
  "key30": "28CjwZJRi3f9ayXihWd4pYTmWW4pMHeVUZeY1euXehgEHbrdWV6ibyy46eLrSfDofEEPtwzeNkhVz2KM37heTZSP",
  "key31": "n1ELH5VKmZELvqPXL8zfXkSRcTRffSKDs2hAwKLgvoBG5x7BDv9ZS5223AHUdxtMjhy35fa1gxwSTkiLjSYouTH",
  "key32": "qxmhk2xWDpvGJHUCYZbfnU93hQ3S7g2cZeuqPQjMXvvG6Q9DSJ1tjVNKwjq516rW48X522q6USLZMh8aSkfHYJs"
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
