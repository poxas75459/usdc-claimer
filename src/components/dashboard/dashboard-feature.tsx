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
    "45XK5B3CVjcRF1ABXhb312cQWuCs2ynuptwjX8hQMpMrSLpSVJ7XUdyXym717NCbjUM6pjEPM9qjH4eBz2C54EaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5HVAKQR9FmpRi92KoYSAtQRjfAeZm9NcKoAgcgMrBTsdrb5gTqM37VcwQkewiiEPX8NSGivp2VPpzG8zfsvLAq",
  "key1": "3fYr4NaW5rfNe6Fq68y5GTbhvwRNcHibjKonmkRjCjwtbStqJ5LVkA3kK1XTBbcH6f6vgiiVFkqjVKWypHXfKjQ4",
  "key2": "pttez2BjZJex6EzsADgEfKi5tUpWZLuVZLhWXSYUPQJWvJSpRB8TXyy8W2NFTn6oBmiQqjPNiv9eoHXZDrBvfnc",
  "key3": "GcAGg6s1Hrc9oa1tkkBTzaEH17kaKY9qy13r7YqdZPWPdjCzBTm7urnvvLsxBKSH3tPcit4uJEUV5jvf69VYQNo",
  "key4": "wYibj1jT4JYDBeeTpsMeQSn9V61vxR5vqhxyF4y3a7EsWfChDdmGKKveHHQZJSpV7jfcSkLjGgrGD6WuwSYC9wk",
  "key5": "4aQWjbUp6N2pi2pP61gh3JkUJ3rk6KEzabACpYQ55vMFogGMbMi2KYCnpBb272ZtkaesbWm65fWm1xAGL8Mu16j3",
  "key6": "wPbzAqhw3DZNSNJQDYnepa9C5tcp6TBuu2shBb2e76QzjPxnJSpaGGkLPLz3E171L3reRNjt9hqcWMw9S6GcPDS",
  "key7": "kWEBt1USj1aGa53FQQDf3JuyB49awGLjxhjM39mNRpu4upHkJu7sS3cDkWYAbGxMzi6NumV43z7Y4PSxTGoVnF2",
  "key8": "FzKykMKt7PQTfxNwjP2UQVh8d55kxkBg9BS6AiDKPCycD7j2S3tbvyfeENB9apDqiinoYYgjxwSZMha2qQdWDhY",
  "key9": "3m6mtVUUKRxrkosoZg552DevQ4WREJk3W6y1hMNbfcWwNvv7r1cvYiWu9E6pe8waFHiVAjtmvYd21SSU3tA9cfsE",
  "key10": "4TryPkjP89CeLvNKRYoCk3RNK2nmjjfcNu9b7T8EWnrc5J6f4jt34jRkgAuHJQyYtiuWSHDmcX3coCbKgCrC8Rc1",
  "key11": "LYvqDh6R3JqTET4rpidYsDY2DfamupsNbH31231oe6c8q1wkkiW4Tw8Jrq5SoptXYESsS17Kck6eBTStw6m1UtU",
  "key12": "3KhnfEA6fmjSYVqaXbmkoMJeE61JGDeGPb4hvwJMdpuWWsZQhYezYU3aWXA4wFAu6p2MrrgjZbu91E5EjqWaaN42",
  "key13": "5r5GXPbc9aRoH4vY9GTCJuELBQVxU7uTS9WvDmDZK6sG8i96tLgHbTP5dFhtc6iYzjDJmLq5tedUDD9PNooQWP4f",
  "key14": "m6ZS8HrhpAStXeJ1WtgLgYLyPD5M59USzCYZRLsknuHtjpQrGeXM8TwsWtD3Fdgs2LUUumBKKfGHCNbW5TZDWcD",
  "key15": "2KA5grUKbcYkoscoZYkLQRphQpiejJxNwsRoTsptKN1fpV7QRyrqPjog4Rt8pRryMXh6LUBN1nwePFWoLBVcYrf3",
  "key16": "2mYU6nqaQYQ8t3jRzpMEUzrxQqigpZmrBc1bDG5iLxxb1oDwMGSQQ4QZnb6HXDUUJuUCe5bUUyPV63dd4kmCad8v",
  "key17": "4bngKn7Qt3g1HHHLekWZknFzmJefoVt6H6r5SemnzNZeoFZ9uXT9yy3Sqt36HrCH6VCsCRoL8ace6VRkCqQ6sBkg",
  "key18": "4F9RGUMn8Eh8iY8TUawigJ35Nydz6ubmxJzBdCHeUpnKgyVvureH41p3gc3RkLwruGcFYMpi34UZSBCbPMjxYJy6",
  "key19": "2tBUmsRXJuiGV1dMQrQTF4Jbp8ZbU9CnYBLVsDx6WK9CTWK3kyVbBVWcJaw3dTr36C3c9wC1HmF2hcUmjm7xKZiD",
  "key20": "aZcK6qD5DVjCEza2T29UdAxS5np2RAy92mK391Hm5h1yj6v9Y64DL22atYvTBNPGv7sAc5a1JhjHKcgLQwLr6Sq",
  "key21": "2rFYyRLGoJucmwtx52j8oG1N2Y3TU6Tz2LPRaDNUUzcyD4p7Y7Z8C5dFEXWeRJAfCWweZCiY1KLYuHgp3X5HNVQn",
  "key22": "662bUA5nhQuRAeXEvF5sMphzMdQC2XJ6Ta73aqpfad1rkhqe2xDiF3ffh1SeobjZ1ZaVDb5tWtbG3fqfmXdjr6aq",
  "key23": "2afY5xcG8uxxM5MQco3Q55iQesi2gYqhecb1SvX77JnFyafKfumjkfXVw6WnmStKhvD33PGsTa3NexDKYrnYRnXc",
  "key24": "3iTjvgu2vG3MWFaLHWaxdahBX29PTPUtXQomsxMek72T2zmbkMR84B3mrEySLK57GkG9UE3PM1yAMvysaXVku9rD",
  "key25": "5Xhcc8weAYnCAyvwPLnDRB3RodqJavAHecM5B6LcfxJqwsEcF9YfAiv8K1sqD7oHMYrcUh8rHPNxgQZAvnGrBqoC",
  "key26": "224gj3HyqXSDg6krJinUSCqajEQVJKmcTdzwng8uYhVtbBA4ZdB1MB58eppPR6puz7LNwT3ep55ZRkJ6owG645wT",
  "key27": "47sWoSnBuQXUraN9FqfMrQDni4g3Bjbazxx1LFbfPZgYhTXb88C4Dxf63fzzTPYrtCYpmTG3Vw73B2trCDDgNLJ6",
  "key28": "2HnNwhV4AZpDuXdYMsewhWRG6oEzos6ZohL2GQjWJXf7DGeTMmoWg3SbsC2xMr3siwS2S2Qf5KWieU5w9m7KD6v3",
  "key29": "LpXMACpZJUC2tzCcY4CxJmstUSvF4hq3rW1Zhus1bmFXqbjLc7V54QpHrwgSF31S7Phwkze4xppyybXvdxEq15L",
  "key30": "HaKNukVFJRwWnAmN91uuYXUpPLaE6z8UT7dW1zSRqvwAuVzi5YRXSCbyryVvBgcHqKaYpz5eDkEKvcvzXFpmrS3",
  "key31": "3CiNoz47fSoEFsSUAFymSwMjspRiuJ5gwWqEdJGBaTU6VEkBi2MJcgRvHBBZgk6eMrGMr9o3uhf1v8aN7vX8M1MW"
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
