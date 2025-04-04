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
    "YCMoHD6b7Hrn2xZpksvCJLXd9rx6EuyguaxTQyqLPxLkzemC4NnHpZofWrc9Pz8uEXrZspvBRD9SmGLi9c5iMAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtFGAPKcrY95Mu8vzgVAwZBEDDtKVcWvvXpRQFAYrbYf5CGJTYZjPWjbnHoz2Qmdk8j2DWL9Uce7vjumG3TZ1iS",
  "key1": "2NAjR5J7E1zU3ckJhsC4HM5zyd8cd4j3SKzFd9mioaWRL1EAfQriFLp9fsvQE9ReHC14b4gfGGrc9dGjKd82z3Zj",
  "key2": "61u4J8Wgi6VYMEMKRMfifh3xQiHfQ19xypnp8DyMkZBmHuwafvDhcr7RqaPnf8RVoB4ueuqbFwUXEMLnoxaC9EU4",
  "key3": "46DZsrECwxxfwpehzfkW6RS3DopRThLrBxWwFyjNYpwmX4TPrcF6xxnNsoUXHLdEoCQ4wDqu44Yg1Lpj8mqLn1ZA",
  "key4": "5dEN4BsPwuSh6HKZCW7Dvae8SGqRtCENDLEAJLxcPC2KqBeEBzdxQCbqT3zMdUbFB7s6FS7sFCrqKRmwsru9LLpu",
  "key5": "2DwekVNbtNoHctbC1aXX8g2zYTtjDdfGyikQkDX99z6y4ybSkFYgDCnkFH1dt1MBCy3k774zaUAYv3hSxd2eBxc5",
  "key6": "3HHERfT7p7X1m2TbGi2jUhCjHgxV1H9JfsuWQgRkHNSbzd3knkRCYN2BkGtdpMP69UwTLm2bjRQmd6DRDF7XNpoh",
  "key7": "471gsyW9sx7RPmqC1xQhK8K84KDkaqCjwpABLnBTL4DFkTDfGcoF39oBcXQZzuoSngJhcm5iycX1f4sCBVRazp7a",
  "key8": "5frw8SaJb5NRSqs8RtRvbhjJmdQqzAxQNNnzgsPEMkGjwgP3ki2RsEBSF5LsRbJyRT81BaqMD4Uuh7VcAj27tHT8",
  "key9": "56ef8vLV5VdVpr5UpBbWhaKbu56YFzULQC4PK2c3JQdYAPqwNf4HV2YxT3n7jSJp8KoLZhcQKQyJQwWNXmhKQGuK",
  "key10": "4fezKgiHHYzMkcUb1aaJpiumm9QSmzxw387pmo97eYRz8qxMGTo1ZwCBmUBFUQrq36eFN7rCAm7J15mB9pRx3ZHx",
  "key11": "6517SV2XfzkxHVvnS741SixoYNUtTZCyifL3gbv3Vue3XvpidqF1XU6iCNquEf5QXQF8zEHpFjAasMZhrHkWcm9C",
  "key12": "5yQWpj4Mjuc4JJeQNMtboy1yXqYQU2vuPWE6rgFhHHGHWnpJziKr11t5NZu32rhdoHPFS92ea1nuhFqrd3hr9UzJ",
  "key13": "5UsBdsAzqxYFvAm4NUM999D7KMqHwwNqQAvR5Rb29p4do6pd1tungeF5gaBqJmyt5gVxwpFy8YkmJ37VVmizM9n5",
  "key14": "3y71AHdxWAMNTyKWsSTuVouXYq5xeBQuJL4MXbqLZfViBGfS3qZ7WrAf3VJ7HCXF92ckuGsJUUwtEE8Z167kYSuF",
  "key15": "m1ezc7soaZLn3EVSMwtDiapVvQrXEqc5sCyo13gC5Lk6KXzTuUBqcrMXNK3ZpT3yRDRHCDLu5W2f9pNKSYzpmHw",
  "key16": "QJnHyPD86M31uPzmPDiJHMtT1oUzTNqrYAJLxTM64mCv7Y8SQbH1KwZ343yrxFTj6ZBUNCY13oqtL6zxHcXwqKd",
  "key17": "4ZoF7L1sXQrevYASXKd893HtHsp7uHwQRpSbQkjpiw43JMxNcrgymrJHce7cpCVmHstyG7SCBJqyvdmbcAWHwgAY",
  "key18": "5wmbke7UCB7HvgCvVzWsi1tFEwhdXbnMwnyHhoAw8kRWznEWWEjNvQmkxi2GEx6sJdRuc97b2M4VBkYYUSMBExMe",
  "key19": "2DeGQALmYBNzk5bA3NSy2SaKDnHPCZeyh45sFBnJ87wFaZzR7NHbvFN767w1EzgX29AUEHhhihzS3krobQksoRij",
  "key20": "26te3JKSL9xqz9trYP9cBHH5n5Rrw9vwvg89SRcX3RXG4T3qgTsN9zYPyS3FiCkjwiE4HPWMFD6RJUvmYUXh6dDv",
  "key21": "5cZ9iWUrkqEbcGfDU6GqydNNeGBMstSxr9AsUBdTVjKVnhpXi51Us69pnfczciWvESjoYQ77isfjJ3rSxoN4c5iQ",
  "key22": "42GMwcJW6TvcYtHNr2YXMqDAaePW5BBTUnTk2vrUu3uaU7mHw5PRM3NTWaUVm9SUU2VvMFJMVyT7NdUufc27HJ9m",
  "key23": "5auA7Btgm7izzi43Bk52JyJQrCR9z9QJs2paMJfHtrJzRe4kTwUzceh2YgBPYYgxfsPfj9iHJdtCw8DZR9EuvDos",
  "key24": "2QB15tisqNP6kMWJ1LPqSF5yuKji2F2oDjtEmnfpDfNAoKS5sxZrqSeGDiGT7jmNwGZSrHS3nMNrRLKAg5ms4SEC",
  "key25": "sP8Vhf6c4iH9qKuyyrTiPFCrLsgknWsP9953J9Xo6rb7zAr41X9DaksB1T8QV1L3iv7NEG5zXo7SXmcT35QH6qN",
  "key26": "3aM1ezAJULjVktKYzrfnWdQDYKwHxR8goxKSU9hcjSnfr1B6YZr9FrvJofvuAHBWDVc4xN6qzMrGmtL41DP1HnBM",
  "key27": "2snMiiErx3qriExeSLeM5d15k9trjBAZfhWA9k87qCaJB7XaJPmD2yAgyEnaVqqpDiA7P9yUExSg2eJxmkKqRLh6",
  "key28": "3Xu5x5R2jPUaSEiF5xmH78B1ZSG4PKgsLDwgk3GYyVLrYnNNqKNBnzRBSVmjua8LqskHJYcWgYhgKU8aN6wGfV6F",
  "key29": "s8BfMjVLTxPFkS4bFauVF4wwg7afi4uMnVp7yWKzXw7zGmV4FT1kxASfBGSW6ojXhL345ruUkyhVnqpecM6axUN",
  "key30": "3r3u9Su7U4UqoUfZ1FBgibqvro67G22feT6vQqMC42dMCipC1eNSKAMA5wamK3g4hTK87MrjGWa7oK1SmHoyPKCz",
  "key31": "5JhnLMA7E1Ds9DLAzhQndKAhqGYNydL4CVstiYs3BasfSJvNzHz59h894CAfnxKQNtKca8DxH6fgy1hkqEDLqHR3",
  "key32": "5Frkr97mN9RRKC88RVFHcUeoapmGU4FtqPREpn5YziAQKevEEPztbkbXY4zLjq5pJ3415ZmkGQMSbkzQgpfwuvQ6",
  "key33": "3vMH88iauuH5yjNRLYWGZomtb75yufr8aewzPPHLwLAqjBiJfeeXLSZ8GNVcxqwbZCJF1PLZCVWcn2p9Dv5PhvvD",
  "key34": "483n4db1wa9pXFwTcs4zCwPWiCgbQURKJZTS1PSSC2A7qzHtkbUsbLsJChYNmdP91vDv8xnXQtZtXw7rh3rcKTUm",
  "key35": "3gcJoKYHvdh2SYrk2g3CiUKvWw3qmP3WSBWHTxsRsVJ5Rbd8hCxojeSiWXhxAEMGiw6dHRqTqWpvcSrShYmtebfD",
  "key36": "4xu41tUPDpeMvfP841YW1WN6edBXqHxcH2PsjcB628bHKugomTTTZ8DaSHknjfYN88aEPUXnkmGPS7kvsy9zm4ek",
  "key37": "3UKyuFRnj7KB7nKCkF1MMS2TkbAbnyLZDJmEa5uY2HgMQhy57SwqNVagQwrL2T4QHe4gVrpZp1vF6AzKk3QWPpWW",
  "key38": "2E6ZhF74G5KASxsFtdcAMgUT5eof87iDbsKFBnXVF53YjGsf2TYjqx93j8aCrHYiq2MDRwu2cYsqkHBQLDkTKKxs",
  "key39": "Ke5A2ivPc4SjRTP21mD2RpCKrj9uj1hAaoje3BnrFVZyohjga8zbrNXraCzdQsrRcombzPoKYLCkJ9PYd5oAbvB",
  "key40": "3LEq4cYBouiXLMUx7AUQ6B72uFshjQemy1HhBqEfZ8x6HPcMSaBakZeqX1QH1YYJrqSaymWXTjfLBPeidofExueY",
  "key41": "P8cdQmc3H6iHXp2URBSMLWtmoukoAy5UCXPBAnySGggqgAoZxNuAMxcnMGWSdobysKvEQwRvdj5o1LG8p4SLRiK",
  "key42": "4ZiGs1ff8UaE5fhQUYqKAzMid85qwhtCCtDt6K48hq7a8wpduNR5c5wxyjnXviAez2S7immxxkPkutByN3Ru6aU3",
  "key43": "5F7shRoGWwgNVRS364VhxQA5QpWecyrgWABofs927VKu4PrAh7LviaGzesnB3UveGmHBaLFpYpaxqAnQumVuXpog",
  "key44": "xBScy1x3FJWmymKeZKswYGbmfTYMA12EvZP8ky1cQpyfWGU2bNrjnT3bqtXn6Mz8pQkBuBYQdqxzquB5WArQdPa",
  "key45": "5Pr4xofHXFJCZqBs4giXYBLoekSTx59wxJBCYScrVgzEXz7ei5Tj7PgzavLwFF8oAJcezWgaMSDTJQ6AfGf1JjRM"
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
