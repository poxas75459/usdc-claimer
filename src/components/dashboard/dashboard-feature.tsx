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
    "3J2FtWuwa1GroCgQeLymu5rE4xaVq7WHBzEs69H2CHRPp5Tz5UNfRwtURxXhKLqdMtuKQ2SJmSzyM86S1YoKjckr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uLwxZUS112UNYdirJCfBnDYkkgm5SiPCoxUksTUf3tohwEo3izHKtowGF7kgQtW9BN9iT1zPL77TJxEWYxmQgdX",
  "key1": "3avgrWoVLZNoNcWDfQdgwiBQxMX6bC8diLwRC9xHUW9w6u2FrjvQPcAUEhnHqjsdYVzmUWtNsSivVy9opZQtWZQk",
  "key2": "4x8g1ui3gcBZkarwcho7UKRLuj3NGtkEqNMqGKnVqX7eJ5K6iENuGERtYfJuzikA6TYsdSxnQzh3JFFkUF6Xq7Vn",
  "key3": "2jJ6pGc76nJmFaGBfLnWTEUFaPDZ4Pw3QYbx94ZnXBWqppHRookJV1bn4p82ZgpV5wyvU6n5xzNrDFn2rrGDPudj",
  "key4": "34PRsBnAHAvZY27WWYCrTeGgHCezCM6BTTegVh6okSAjjMmv77Ex75y6eiApt98dL2UAyh7KGmc7TBheYdyxRxQg",
  "key5": "RPf4z5qkSVNHt7EAzTYmjoq1B7AzfcwEAqBhtVxdNYTbRhfUvTh4bqGo7Kopw4Xc6vNDHxufSXi1dH1cu1fkHUN",
  "key6": "2N83An2jYg1ZoHMjBnF1v8mCfHkJzKUrmbwCybkyJM9nwDxxfsaEXD8aH6q4LakDig7cxAJ8DZdNpD7N1xDd3GqH",
  "key7": "4Pq2w2BXJ57p3PQBzssXh6tddKMmSqExRrxQdvfz7PLYaB2XsadbPpLBnAPJoH6rPDeBF7cDD45RuiKvbYZby4ke",
  "key8": "4d9CwjTdSPAeuhJeZMmW1NRFVHtKDY3gcwoXpGMtoveCZVaHbBtLRthycEFqFGag2pZEa1VfBg88PFbm7rGShwng",
  "key9": "X9CQNKdoSUCzYEwt8jGBGQygkz8j4SQCHLrak4Pn4CB4R4U4mbFj7HzfjSV8JRpRoiUGqTYrwFLE1jAVFycd1Dk",
  "key10": "DMx75ErBLSd1APEwurB7QW49EVh4END6HLDGjTdhuJVmq5f8q9KgAYqfXbRGmutzoqMHbsKkYzcVck91BXXR1Ep",
  "key11": "GzVsSbxjotTusvv1e7RH7M4oYGXYJuijAJnYn6ajdcVT7PXzByWeDSMsm76AFDHMR5sAER8KbQDqCZC8EETqjGV",
  "key12": "4Gz2n3zTthmQCrkPPuGGfUorhfnmzmhPXKeBZoEDjUSdjhhusSsbimU88eiWcKzAz9JULLfkefmW1dn1CWDK16dw",
  "key13": "2dQah8kPVNZQ7UtifQy8MCWpgLfvMmS7rutbsbqi7MRHBtxLJqdbQRrJpbceurmC5vWuuRVp8DvhYJZgGdnvaHHd",
  "key14": "2NcZ98L7MjPgZc8vtSMVf6CdcRcwuequveq2g4DXXPuft8it8dAKjppkc6ERuVf2YNDMXiqK7Dmg1TrWziozYbpj",
  "key15": "5vLSidD9sd5fgt3QZDsRYf1Xx8UtwfaGJgaScVmuKHZgvugUcz3K5EnPAnqYyRzuM5Tcrs9PpNYsATHESMYyVYQ7",
  "key16": "3afGNNfXG7ocNFZR311U2fYqQP5SEjU6p63VypYNYLgf2oC3CoxyRsyR2DSPfnvYr1VPLyxszzRzXMHtgpq4LFbS",
  "key17": "2reMUWHvvVh1KxeccvMmLh6XgWec1duNb81VYXbkNb97h4zoinh4psrZHodwHMX656unHhy4iXssmqx4EQtYPLRo",
  "key18": "5G6sDAvX9kyeBieCb7BDdJeJ9xEDAXepjvURXe9jqKhmEyjvQ7hWU7XzvA3m9hxc2sJjXM7yFdgTrG7zDgTBNMRu",
  "key19": "dZc3vNt4CqUopHixfqcBDMSXwhVEbeqMnLVVkXyiszSA5jRqnK9o6ftg2ZQNFviqWq3ouL8sCpRATv6oYp2Chfv",
  "key20": "1c2EEkauhr6N4sRsMYjXTzzQfF3xo6vr78a4KYhJUGuDYrXTgsdvXacesVuN4facBX4gNdz7pF1aDdBxg1MAAvc",
  "key21": "3oBtQLTVNdNaM3p7cAnsvTdMmhSky34ojVLatwjpYVEXrEK6Y5Fq4C45iUjE6Ti9NMubEQoUPps8zMoA5Y5seNVe",
  "key22": "dwmj1XpjAT9DDuos2c4jYa6tsfdCZLWFb61oRQCXjsjAN8pDKWa1aVz6w7k5TqTkSeiKBDiD4JgMc2ZBRN3V23D",
  "key23": "22Xhqco6u3K9LsYZdPpgBwXK97Fv9QxpXunHQBvBC7Kwe6zNj1jBdKDeQ2hEoG9hcVHDCVjuWKqPXQGUU38XkYrq",
  "key24": "5s8jawucBK3pE3urmgGHw6n7XmHXS1Axm1XvYvphaWKWRUwo26UPHiyvgsCnZdGpWFxiZB6TPYKv3yK1vfieXJHk",
  "key25": "47Wp3XNwcFZAwRp1ieJoyj1HTs2dyBBcbo1RKpB5ZKP1PGHJrAwAW6UvcUJ8MWabYjWFaNAjruhht4pVR89XmxoH"
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
