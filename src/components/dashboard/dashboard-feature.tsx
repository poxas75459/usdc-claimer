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
    "2dipKFwtPAFrKC4JkYKUYyqrXKHaQ2EYvVDG4yN6GfF1aWJFbZzW61tPWA7BSmzEtfJF87CkbnG3Nw58hZnNdn2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgLfQ1Q9PkS9SZZL24iekQapbvwcXDzYEZb3sys1wnuzchhLMBKb9BUrveShPCBJpNwkh2Cd1fR7LHtXeRgSA5q",
  "key1": "2oMnnmecbbpCeFoRkmYf8X1q1B845z5hgwyghuJcvgjRTDLJZK8A4KCVfgMPHFiaF68tiZpXxJvxoxEPukd2bS2H",
  "key2": "2pAgyKGYoG413j29pHRnb4kyMWgdrKzoUsGHYE1rijCGpix53QzCn7ahyQoQN3xCGYBVPkntMrtTNxL7xyC9NqRA",
  "key3": "2sjBxSv7njb36sVfKvZSLXfqvHvas2BN2qQxaSgUSQ3JbdjbMhWmdW8zEFHqAAkYDf9rtj2WmcbMGusHFM6gD9bb",
  "key4": "3MTL8s5eDbJC3xBz5gkbMdBKrFFDWe2BMeJWh3uT1xRQSwnSvSag49DQ5NA3MeSWFRRheaoTKCohzTsLVAAStrmc",
  "key5": "2KJfQhnqzGK3cGFS4MenZ9oAypMsKT6wJAn8eQgny1zjLB26cw2LxDNGPkL5mDg7Drkw3Zi2DFLqLphVB4D4AhVy",
  "key6": "Y89odJ5xgueH7m99TnjiJ6Mf45NCct1ZhHnqG5gVNS27VKtbh8LD17SE6pq8JUps59hQxG5ojVjXSU2jHUuyV7R",
  "key7": "3EbvMFBMyCVuvWyRzVwSa5k4JAv1yknVe2PP4BWYbGsJhGpJ6qTon2ov3yS3uz7ovbTwxqfekG3wvwKfPjMmc2Vh",
  "key8": "4SEZVtpNk1Es8T7ARzuJQPztf5fab9ApMEacCo8TKmxSG85LSWXxLtDMN9KKcQ1scVc4vHpu4DL7vGbZB9dUZm5a",
  "key9": "d91v5yA9jwL6dZSiu2Q8wVYqidYL9QCLHZm2stDzNCD7v7tFAVBEpTvDJmba7Y8WzkWzWSmNT6GTFSTFNzRF8KM",
  "key10": "4xFqDWLemoLWYCP2AVPKP2cH7boiAbySU7Lm8YezFsRukRLcNzLmfF6CEzjxfeGrLUCantzP92yZwLuqSkWwLAiS",
  "key11": "5yzijhxmhEKooE9miQFVhoLzUnhwDRcfzAnwdpWB8GANhaHDhKPBqiGNCbPmvYYNgd69oNbmbewkqS4QYE95k4Dv",
  "key12": "KQ58nkKd14i4pyJZu2LTLbvLdb1SYWEoonTsHowwZFP8nAMPBAYvhC7bNqQbqcKP3dVj74XL1EDuq7e3padg8az",
  "key13": "3YUK2ALpZJh1AiE9daMKuQUNj9gYQHf8quGuUkUgd4YdNbqgwky2Ur1Z5WranGDjepB8gqgJWJY9M1rtiWPjAzo3",
  "key14": "5vqeeAoaRREio4amTPqz4aG6syZbp6U5xxt198rpVwhaT6S9xANkaULvtaXFFcUgiBcn1xMFcagqj7594Kqw2WDk",
  "key15": "D5HjLPpfWmrE6spCi61EvJA39UJXhWroi4QL18TNjYYPmNPTjtJCpVqTntApCnUC3pfoPaTregZ7hFkWaeDr1z2",
  "key16": "o4aD3jhRv3FyrTgqRZysF7W16Mr6sM92fiMAViVLPvdepvcTHd3rCEr6oHCnzGVb5wZ61Gf2h9dbpnA4efbqA1o",
  "key17": "5b6cnu487NdqYUeGGtgV85P87U1a1PtnVuRm736i6XYaHWdG5Hv9xotQpgg2PMmjFNsL9pcpmkdoZJ9Tz2HHAb1A",
  "key18": "3wHc3DEXpxMxux3US1yzrbTHTXmMEh4UytwPUvkFUsnsT1E1HFBwTamSD36NFCxg5LWT5vfZKwi8VjELNWZrui4F",
  "key19": "21Y5C9JVuUjSXdJs84EAp4LMwnaL32De2ivWTB4DLrvbnanH1tSHZrzio64snnLELABAczdivwN8pFeZU4Cpdctw",
  "key20": "5baRuDYCGBYxtN1CHXmNAuwsA3dJExEzSCQLYgZQjJEmHMsJZqDeanWbGES7p5YZbhb8Lxc2mcfr2ht5u4rZc9oh",
  "key21": "5UXkw91PnwXTgLhJ3Ws8NARKdD3ZM7opQokcoETpsqTx6JKvNZ4HrHa5Kd6kmUXze7PdKcafEVvqZcHsZ4GcKTDL",
  "key22": "31qcr7gNiuEvmFyrr4BwMQPXhiGFK5v5gRACuffEUzZn25jziGGJ3x4peciYNA9bmKkggn4zgMMLhDX7M6Ancu4H",
  "key23": "SBNekpr8SSnXU8YCNTedgJUPbpfYvL1qyVE1bcTFNTfj2o2Mg9yp5ZxtVKq6A5y4jqBdamsm5AuYShjjfThX5V1",
  "key24": "5CPqoRU3PnSEhSRB2hjGRkJM8AkJViD5pKj1m6Miv3HLJfG38ceKZBAycGjxH2QSxDv2mE7xu6oWoNRRtYeZ6roG",
  "key25": "3aj2qmRjJfRTHDJCJFNw9H51emRE8mdRspcus7QAVWMKFi24HFyiHLmbhrsv3hTF2VHvhLWsvToK2MDxdu8oSsro",
  "key26": "516D9xYgGihG8ikzRanm22mvXTYNDJia9FwaCHnJ9TMh957T32RMuCFE1qcRWWNxieJ8u3fd5CaVRKABRvU6i3Bc",
  "key27": "4usbRfsZ9W5t1V4weTWdap7NrJTxNXXKbUMmU9Zu9jCjN8gDqAMUWPJ6ET8cUMrQyMMsyXpHd5KWKWxFx9Y2mp6t",
  "key28": "4thbZn3Xc2tkfQ7yZqPtEzFwkZPax1yPQBifmsNZskyp9TPd5QrqyccSGFLMPdqtnBCa271bAxL273cJHfnHAmvD",
  "key29": "28kuuPCcZiJR4Vtsh7nkYmeJ8ptFF6gACrkkYuhfkUUDByDEkJwxhnyZxLmcDQcXinTo2VvDcA4zjZaHVpw16Mcu",
  "key30": "5RqsHg4b7U3wsWAMAMS4mRKgFKT9XXCJqn2Yn1ydq3j3HWWMwF3TLHXYSx4CM6Y1EqAvJUV9vqbhM8KJ9wEFP93C",
  "key31": "2KEd8XtEeFdECAJJggUZeLQyHEUYh3RGzpDHfR3YNX1PS669CKeqViC8tXtYY8ciTubTZuPoozLNnKKrdQMKAvgU",
  "key32": "23xCzU8YtqKcmPMGyNiyyV9NnLjGAAWnjrfGUpcH8Uv5g1NB9b6NYvvbiJtfSdP3iPYiEBKfsDopXWJmBM98u9Yd",
  "key33": "2ynHYa36AicHmFZb19NABvpimJsDXWZFS1HAdJjWZCV4B5F6JU345przBKobn84kXF9C1p3mistp7U1zjKxeBpdn",
  "key34": "3uWkSCSFxfLGcsPtb9NVzuay4HLpAofPuWmS9eLdJM9qG1QXjAZbApn78p7DREowyjX375V4dw1qT3Ekeyz9d8ny"
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
