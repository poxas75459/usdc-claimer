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
    "djzHnhdugSTF7RzUJerBPLAHZvDyLkJEq6AweqmZadEXv3MPqwS4NUQPBjxhtfisZPZZiKPCi41RdgfoNZr14aZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyUC19wBwSG5w3FCAcUxuticuScXy8cgveuK8uBUuGXigSKMppmoyxCxV7ha7NvvLfVBgjjbzXifbGNJ3iG8kQ4",
  "key1": "29uvnypJ5henjZ3Sk1PHSqZJt6vMxkC6fZjZw2o2hJSDVrU8P77aRMzX4x3nLbuGGdGBSQFrjtZVbc8MZPFuyrsv",
  "key2": "2iuHtkk12cEsjp1WjNSHGcYvM8b9h8KUSxiNmsfuXyd8rF5M4XcSeh2DN9AkSBGzSW2oBSMMBtQReRYNQ75f3UKr",
  "key3": "4YSeHSpEyCpxakC5qtrnyLh1ZDyNnmrybTzGe1VfopNpg46ZkEAaZnYiTqfWvKphqb3sW8ZYtf9KCsQyyX6DnDVr",
  "key4": "5cdA5qRtfAxWfApEGs3o9X8wnrXYJM8mezRRmWbs8RStAW3n44Ss9j8w59mDxCuRQzMnDurtPYjChS4poob9ru14",
  "key5": "4MKEgQN9qUL8qYBN3SATHMWzGV4ZiRqdAv89u97NxXk3ix8MC3SFcFiWN3fgqp2yHRvJGX2ypv2DgeKEz4yzKCAf",
  "key6": "MsvcDg94nsrHY5Vq7CBn8BkfBGAGVK1qH8XaS7rGYKoQJJWVdMH8m9oc8XP8NLUn2fbGMcivcqjbzscFB4g7cW7",
  "key7": "fk1ZCVWoLMK4bZ9eq5hkuv2uhuksESkhmsHy4kRUPxiPrNziTybbztmKh2fpSDJ8N5Cheb54KXdq2PyaGDnNkdD",
  "key8": "3mEcMt13z1NUPDC2zkpx82FuzaPtcaf1YjfBUm9xcpFhKhWb8g8KBcSLJYqxntTMwudEqMtWzzABDyUk5CGVyPPs",
  "key9": "3gdykP2xeJfbd9qD9BrwckqvAVPJwUWMoi4VnEYhQNBy97MEjwCHoSGbmjBZXXvptmLRqncrKNiH6aLx4do7LorJ",
  "key10": "2K6Py9sVQi99Kooftm3XRFLVCRZ4ENYCHF92EwM17JAvUjUiwrgVX4cgYAunWz58oFE1kdwg3e7BUQjGkjgeEoA7",
  "key11": "5h5ewSYB1oKv8m99nRYkkwhAzr9RqSf8FGU9KuNaUEXRw1mh8oqeqAyDWsXWeqbucfc12vLznSEdLwSyuLfTQzsi",
  "key12": "4eZuxPADiQ4RRHqPZ6GqkPSKdiZ2syQy3hk2KsNf5HDHQJC7EiXaRym9waPQxrvHkmrheN8dtgjXR51SLEMEFej2",
  "key13": "5YREU8uwBuFY3YsW8W8pD9q9LqMXB9apSLx94bGDMuFpVwgFNcx1CN9WXG5ZryNbTNooadtms5gDkMR2iZrmQdhB",
  "key14": "d2hciwcuAM2ABVRqsB1RsFPcsCXX1KkdHzohXpmmm5cPApYjZ7TBzahjrExPQTdahQK1uQX8jKBX6wLdDaSHnp2",
  "key15": "4RmJzrQDtvDkUQY1MJEAopHvgsgpRYr2dBmrXqS2QhYCwWoTLRgrifTyGYV5bACTYA48rKKFRZuMroE1ZtSPZcku",
  "key16": "5HQjovKe1dyR4hNrJDd3JRkgbTnwZMugcuP2wQQGRZBu6ejD1f8aX7RCdwQshnHqHBXSaaQfpUtGs3Fc2oeX7GnA",
  "key17": "KEerZJoxdftiTe6LC8mpA2LKSYPFNDAE1mHF34x66eRibeJ1iRhw5i8fX6gS9pQYTr6bmk1RtY1MHpQnV9fsfiE",
  "key18": "3EH4cTnLZHyA9MfCMrnSK7iaa74i1qj6c1EGP7BYP9EZrQKUndzRD4uuxcvznPk9qoVT9GvCDNCtTd9XpJo2gds2",
  "key19": "3657JBZMsDZugsRLhu23bYqFKKuHAeAM8bPKyDT6cx1M1U4EW5QcmMhAfou7gsZyNY4E5NnPc753FQVb1t97fhX3",
  "key20": "YPQvFwmPxhWwyJrtKJxS4aU8VVVD9jMVy5gL8CSwLaBcR32HtTDDU8bMJuZN2c6PGiE1He5pi7ycC47EK8DMT3h",
  "key21": "53v3R15vz2NWfwfLs95yC61bfN5x5idvxTa6qw7UHqCf8rGstEG1JombtxfHfreuEa9yp2C1peH8Y5txhRHuTE2T",
  "key22": "4LMBk5Y86FQCPv52b6nW2YxrqzzxsHznfUAar8sMMU94gh6V7Zfd5GxduGwYEduMsr5YF4dHT2w4BvPt3z2ACRtF",
  "key23": "2mL8V1WXz6gVtAwPkpMD483ski3j7ZVZPDVwTLqCDZdTfmbnj7PZqKWi7tRaLB9NMuTdCKachqp28Du8wzarhRtN",
  "key24": "LCCtTHGCkgLBQgWcKhhAox8ZFcdDGDSQ8WErkSwoxXSvEX3uTLR6XEsBe3SufH87tchT58GJek2Pb52QJNDiCwP",
  "key25": "5aCWzYNhB5WjbPgiXdpghkbrC4tEZRBcQVfYd7vhz56ef39bVtKJ7B4Ya2a3VYvDADCH8eWmC88GD1XfxExWC4y5",
  "key26": "BrUwXsgeE7duHRH1QXtPmHEFHdFuuizQNvZVQgEUedKLeBcn5HL6gG12P4HA3iSEL8SAFzjwDyY5X8WHJwXNSG6",
  "key27": "Q7AXgmcunsju1dhjjfpnESjZb8kJdvM8mDWmXZp9UQMZct5yPx3hdhabrd5mnxVBJoZesyjYSqyMugS9WfmMV7E",
  "key28": "64qBQqusgsVBF8GXMmvckEn6mqr1jXPiZ6WBK1GuwyKEBZAzY4jeUH5p2VajkVhj4qTZKeiS5y69ira5ua83HUTW",
  "key29": "4VbHRZ3nW85UDoHRsbuH3v4sG5ETLZUMY44CyvE1VfVQeU7gggK97rhjTXXq1WxXvGDDLWWL83JMaNoEeMH29WAR",
  "key30": "4GR8Raf8dmnAZTAXE3pVK5cb2FgaTd2jG9rKWJLGQ7xdxxK1SpCBKJmVk2xtUrP3xEiQzXLsVk1MHePXSvDW5nQq",
  "key31": "4kuxxq9xUFapMFYPZfoaE5qjmgaifS5FoP5ZBkREhbeJcEw1NBaUWaKrKrXZn8Hq2zMRoGAbWRSJxhB87w5Dn1bY",
  "key32": "4sRMuoCyjPCixqeh3cD2g7VAtx9yRZ9vdvssmHLy1VK6w87uhwwSZsguyAExi3vxNUinBJ3BAoz56oLFaHYoLvgc",
  "key33": "4rK3UUSzMJaZN58xusveR6xa3whvCafxbhEnZpWJE2Z2cQ7e9Arik2At46yuxoLiaqiVJrTXMNKH5A3KojCBhAKa",
  "key34": "5wPRu2iPLEcFY7769B3NbrmtQrhEkDYqvG7ssH3M59qGpx7rZmZXtgzYmrWcdAWaoxpFc3rH1UVdgJNqadJirvz2"
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
