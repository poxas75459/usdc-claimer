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
    "3nWVyMM8wCzPHvUFeLNSViEK8qmqTfLbR9TJHDPrXL8pG9pX9z8cyMqGidsEuRQDsn3exHJva6N7hHWgtzxpTXyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PtGc9xQ87GUUXFK7FKDvFdkCT5fyBPnSMJQS9P8cVR3fXmD3ypzDynKdUJkhtq4a66pYo44ztQjx9D6QqE48oNN",
  "key1": "5d1TiCCAWZSABpHQccK9jC1ScQZHAgQ3gZ5JTKHBm1jNu4zbp1FHhKYSGUtBuRKEqFx4HCcypMVxLwSNy2qzprE",
  "key2": "2zZypfE2UP1wr1VoY56DewK9AHf48CeCq2m11jRvp4N7P7kX9f2vLFRt8JNbqdTptTEdpBtPZZFsFecJyz3CafPW",
  "key3": "2uQj2U6TFTwE1LgCDNj8jAEpvmSGj4dk6GGowAcgohqcrpqVCfonbg6kFmXmJ1Xn8cjVtKScSQcXnHvtsP3XBdEE",
  "key4": "3RSy8gkts6TMiGGiaJG61BvvWpGFYZpbQ4oDi3juydzV8SCUuTYXyLjWeY4kNfvMXBCasMsGfXD5xviCbv3gWWQF",
  "key5": "3CZnnraYGtAkWVNRVMjXYXS9Fmhy5JvYhrkDydL6rFFkpmx71GmZpmoQNYVtUuCeMqPgqvtqeqexwDLCWBiKwWgK",
  "key6": "4FSdfgtaoRzxqm5ccyCNgv4U1sNZJrVR61KLkewfu3rAWibQbboJm1VJ6ct4P8XJAmWFdD82xFyWSu3GCDvtQWaD",
  "key7": "2t6eabTECs3YiXPdh3qYrjwCe3eL4U3bQSix6iiTxm2YRs32nkuzCe6NJf1KU7XvmagkRmeqSoVAUQ4Cbgfc7MGn",
  "key8": "3YrphtGxd1bwYurMBcNT2AYsVo3NEugzLsoxGRuQq3tN94yqFX18xEuq3T5dNCsDCrZipgdQ4kg6HGanZL6oHJUV",
  "key9": "4nteet84befaXxgNd4W6jDPsdX75Ac3Yx1ygxuUtZVv8mh9rUtKoyfK1sC9XA8xtPjWBcUFPXq2Tx5ojFtbVFEmQ",
  "key10": "5UGNuWkqdnhhkFWcJxyrHEQL8nVbVNNqX1XzRQM9irwey8EQ1jpZ4Fc4EMXj3giLWhKkf5ghQkyrbxrzzyRK1iBQ",
  "key11": "3ssMePcDozsNX1Q8tLsrsZZgZ8TwahPMbdNmatQk2KjeTFfEvanhMt5SgUefdRUFm5A59YDnZTBCFMSFXCui9Pof",
  "key12": "4y5KdzxdmJVfarh5vQos8UC6WCnA81xDGMWxyujHRy23SDN4w1bjFTz2eseRdtC8MYJ6XjJMcqX5Mpsx6ATeQFk5",
  "key13": "5u8mqym35rEdt9cSVzEUh2ycpsdoR6vyH6yRE3cXn8mhMnzHPxF5EuJaAwP1GGFuHQKGyJxqtjwGzmWrUUXDKgmP",
  "key14": "3puvdHJVQopn8Tw6DK35BcSW7srrsKUG6Gg6HCAE96dNJzfHeihKiyCEHtMk1bVMVzGYSQd76uzmXhy1sTyQBetx",
  "key15": "3MebbPsEbnkWS92MW2dPq8t6DuWALm2R69niEvi3rJkauXhSGrUAme8sM4YQvANTxgQzvTBFmeWLEYbYrBYPSzcZ",
  "key16": "4CPgL1atBKbSnAA84svmryE95HXDccNc4UuWZfNdhp3s5fgPamp8yYHH7cEuDhw7naVCn3mMv5CTsJGSZqjv7yz1",
  "key17": "41cN6EU2W3agAw4uPhTqYmXSiVU2twJFHN66aKUgMZAF5nsW5caWRH4yqWNc3S7xaWCV8FhCAgkYBVr3hrUJcsvx",
  "key18": "61iTRRY368yJDQH2djyAA2gMJuHpWqdfRntvDgeahifqfsD9aigH4mApscwDfUFowQ8S88GRBxCj4ACYNyier855",
  "key19": "AL1UtruKCpnRB2P3cdxEsSCWKTrPGqsr4F571c3u6m4vcoyMT26VxWu9uUXtFBVEKX9HxKyvpV3u7keC7XQAHb4",
  "key20": "4VxmrRe9pfxsAW9SZ8PmU4nB6hMX4SjG3VLWRiaVNhPfVNdwhWuDfWeNgCNBaaUnKKKa1rvuTGXQmX6RdcW3Rwnb",
  "key21": "5z7fCsiwhjNTtFFPeVEpEUUfCwJN3cpcXdvS9x3UKRphKEtwfhwiBhDgcqFFRzdjCwUdybcJBrMFvj8xckvTWscK",
  "key22": "3vtGDZMPwzqndVxZ3bAgzJjiXXJLvxrKris89B5rbEEPdp6MYcJhwqgGW8bRwJhGKNwzHBjZ1qgsWPKzh6Sicc2X",
  "key23": "3hd971EG3YVdYeuUZmX56iFB8Ta6BJ7Be2qKGxM63QfB6JR92tuKQduVWG8WYRKSSxTfD5M3fxYkRzvLvMgMaXs7",
  "key24": "5SzWjqLuAjQCyDepjTNZXhTNrbBeTMQF9ti7UE9xXBMYHJwFPJFLg326Bt9dzny1m7Rs1keU6eA21CrqxBDXN88e",
  "key25": "5qjJe2AhAL8yH3MCZKUj6Q9a9MVvfkErWFG1VcbjvTPpv9Vf5hJ5tjL6fJB178VpbaRATjFCoGHaY4qpcrzKbfEQ",
  "key26": "2icMLje1ChHoS3fXaK4gjxABHytZ1GYt2fAxJvpCqVdyof7cYYiTneDzDitwB7hQqHn8bVWxhwBMoQahjqSHYxhr",
  "key27": "41mjeofRDrfLznvSsPD3JsWQQLTx6FwaTEVKLgFmGMq4m8KnJoQJd1bsirtbXghcbcgjzE9RJ436QyhChVGXuofe",
  "key28": "4tax5jF4nsaYnhf5yhLXuCnWFi5bQrswDqF8eZdV9E8ZUdS6eih5gbdy2Y4Z2thnaM3wYAgB1NgyfYMjgbzs3zCt",
  "key29": "4ExFbk5mAVWhXo6wejMnVoxrVMLGgFWMK8CcgHrakL9t9DVoW2DjV86xtLU3dhE5W7SMyCAt3o94JR2KGc6cD6SG",
  "key30": "PSpX3doQc589JduSBCMXtv6oCayYQmYYHDz1XyBjmcSeJnK5gpHKiW79evSvyiUeWghKFpNWW3tEZGafy3y7atc",
  "key31": "7TUE9nUkXx1pWx33ozJbuuavn3q9FDNeZsaY3z2JDbKt5U81pJRxZwyMsyR3ogYpdpHNyfJ52RBVA5eMyA7kfpG"
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
