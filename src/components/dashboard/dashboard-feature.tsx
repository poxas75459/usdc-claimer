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
    "3DRq5pTjBTp3rtqPP7GxVDvvpX85SmSb98deBBEyQxgTrLuRJFGyYxrymw3Jv2ctgTfwCuiU8zXMwbtPnXcfKksa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eS1ESTF3NXtupWTAh1d3tmLXxJvwkj9F52YRqSiZcwjwh47yP5TgoaTjPBvf4S5vL4qNWrcX3gLyDhxCSoxeEfb",
  "key1": "3ajdva26NTY3RaxGA5kopteJGppAuD4ABcjepK74a7q12x2JNSnQKo8jJDoeyMWthK7PtwbNgARrCmjJK5tLs246",
  "key2": "4KYetLFJMiRrFRX4PWxnsuyCfx7sX4LmMPT9R7j6rjkMhJ73fGQ3G5js7qCoyEvumL5zpRLZSdLgKSXVH9Q8m6XK",
  "key3": "3nQfbiLcXCUr38vmAhxTrcSVk6pm1hHqUhgzcPd5hbQVA3zBo9M1TPqQXqQeyn1t4BM8Uc75JjTFECiYs2VDRimD",
  "key4": "2xqf2sURPs3VUT5yfouZFxg9ecjcCmSgzFLdbiJgUdaChp6whmn7qqbUiRRpqUY3dFwFQjYaexfCGag2mtfkHKDv",
  "key5": "3faxhaQnBGtSMqYGcFL7BAonsfbSrgszRqMHXaaUGm1EiCHuzw6zc944ZBoR7GsnF9nTywEpqtHhoq7TEPk71ZKJ",
  "key6": "sFWD1HkKtnFv2bgVfEjCvP47pVc68ocDhaTz6p7h3qiM3Rfn8RnFPP3PU1ejrJ8tFp5Qt1Fi6G21QSf2fXBEjdp",
  "key7": "2Xop31ThLHdPPmDMzaMX9AuTkM2JC4BteH1o7TXkZyVPsoADjKM7fP7Qt66CwYZqK41HmyvLW6p87LY5XnWcMbwq",
  "key8": "RYEPfCAXEth7oRN7XiS7RApfUUykcQ5pGw9arvehKibPiuyPi1GJFMEAMU8HLu5KDgasnTUJGGXhq7yApJA46EU",
  "key9": "hi1PLp2Axr84b2aMkrf66GQcXkpDWYh5HUCvdUX7z2FJnXrRVL8NN2qDTrRmveLExsrJhMgnwkTSvquoT7m7yK6",
  "key10": "5hJn9VCESvrBAoYcB9bdfL96PWBDayS9UZP3YMAzay8qLpAYg6fnYAhdZrArNVqgUBN3kGEHU5TrMhUa9yqWWywz",
  "key11": "5DPa9EgDNJ4TdHKYfhxSRJo8LnWmnf6gudJi8vbEXsBWXqr4p6sWZoBKs22Ci2BBMyPcE5mTHUzL2kCwWAdYqQFA",
  "key12": "4GtkMZ3n4HwsbWYPWun9H1aMDVYhpWawenLZp46tg1tqavvcLZ2pKYzED1q9vwf2FQHecanA5EY9pWR5zyH9UARH",
  "key13": "AmZ9jSkFeedEZrQ67RhsodrcNeZbK6ES26RHHuxUUvadyLiP2yJRY5TFWRfGxyiRxqeETUec8njNzhvAkM5zwi8",
  "key14": "49io5FoCdtBYyNMxYbg4iDEw4q9HGGg1uorXsHEGmW3g4pzVvysErPKPru8F8PRR1YxWPoexodkA5vAqjW5ApUaV",
  "key15": "5iE2rMmX9JCsqJZ42UoZQo1Td7VmWiGKTuPB7ayKrnsxh8wHcKbV9N9WGfjx9ZVcF2s6rz1StNfG5S29tVvE7R8u",
  "key16": "2SjwsXVffg9yJKvNCyn1Tg6kruQ6nBiWmibEfW9RbuuxJFBjVnf5WCuaKar3outqBs8dEmEEibbMVrL1uQWpxi2y",
  "key17": "ZrLcoyqWwavU9oFunwTqUoijUVABTbHYenZLLUZF5m6WqwoJ9rgveJboiMtTrpXkKXPwCNoZ8e9z5CHAg8j5ePG",
  "key18": "4mgsVK1FKPLGdv9apZpXKcusPD9zEoXs4Cq4PBDZYqEDTFqpXrF9SW24SaTNvUz174nxDvNR5VbpnxRYHyRjhRTg",
  "key19": "2rWCy1skTuiyYoYABy8QYTnBzgQTzu41f12CCSMUVRy6dZbDeUUGTUwaG5hRhMq3ivynmVbzDKV7xnaHtnLQuGmH",
  "key20": "4eqj6xLsNseyVSXDUXZBk2X1CxHQh7te3atqngnqVUxkdb5aNqNgwCvNcdjv52QJ6rWVRzLeJrkinztTQ187SUWU",
  "key21": "2KFMFmYh6YoGr9CAy8wo3RL17VLnWHgCHGLubZ5X3bbH8EdqHuhCmo63CRLhu9ASExEHrzjwCS8jt8Gw2cMLzVBt",
  "key22": "233zvRgcwJTtf5BiHWymnzkNVGptjyvNwcuxCgPc1Acj26LGWFRTzqAvesc9TXDkMtUHxrmBuG7pasHaRJYyhjnM",
  "key23": "2vMb35KMVNDx3vvUSiYtX3mudMRRAEs1zgeDJnf3xB3Kv4sZ5mRNV9iAag1BaC6yP7YqTDkb3fqhFJowri6tpWhp",
  "key24": "2wWELviHGDERS6zyL1EPsWDgTuWDBBJGCxgFTdKyacQ3U8SaYG37wVUdK125ZEkYkRaV9gHTA2pxvL8VjKBqLEPN",
  "key25": "2x3EDKioMb5mmgkAtnLasgsjJV7DiG2D4qpAGAv2z1Kq7xsjhb9HZ1SNdB5gvFCdqUtL5E5Z5YXmGz9DANE6H2i1",
  "key26": "4MqmRyYsXYxRxScYAyQgVoN1q9tbj8WoZip2DU5n66ckhh1gapXnDMBYktvbkBEHxKxpLujMzezRvUQnpuVSpZE8",
  "key27": "3suGEAibGp6gw884v3jq1NktZMPEXn6RnZbNXhHT7G8G3AaVmxdsYKsNg7mL5PkDeLxYffHmvQpMpEykaSQEdj9T",
  "key28": "4d9xE5JMaNQ8TJWncQyKcgV4U6DmQdoux9nEj8ukkdSKqLE7DQhwzTfcYso6NVNo6A3eBiNEYuSB5PKQhgLmYUTH",
  "key29": "2FS1HtgmUn75caK1EkDkSN1fXmsNtUywA4rPiZqcb8BesHaBjtqdCpihPd2C2Cc8J3LNyKqA2NvSfbxFQrgQ6cXV",
  "key30": "2YQ9M7HaSg5hV22PxSP7VMf1bdk4w5tkwzpcKiUwJnPDrHFUB3pbgyxTifVTptjc4MhjHLmiw4Dn4nnwbiZ9mxnp",
  "key31": "5r9XCNnMZi78YxE3ApcEAop6vrxPc5NNSDKbztqGJjUfAXJ2XXcmaptdobpodigCCn7eVf6ERtq9PuPocBsK2Xmg",
  "key32": "3eE3fwa9YNipDgKwLaXxu9tZe8ouz2eYmQnLKYKascTLRQWhdrvG5wbbY34hepESSHpVSFrUFbQRJreCgqQrdLPo",
  "key33": "4J47gp6G3sczuFDJqd3EmUoAg7wHMXg8LZnCaPRDfYLP1wcvYsVc75NrGXGDZrifUJZ2Q8pWN7HKgqAGmb1Y9Dwu"
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
