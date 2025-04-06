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
    "51vZe24YoAYrpHLPdQswtLYtYmC1sp8h2zdbPz2QCen2ArAyro5i4gWCUshBdsFJwCpUryvLjxJ1P4C92uAqMqWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1mfG67XTtJmn3fDgHvWB73G4utU2Wf6neZSiT3Mjnfo4prD8Acr324htoE4zaPBD2ZXuty1HvDTQwMNsk3SErq",
  "key1": "5mcaowBuBc2EusRcNT7nVubaGKnJ8ZCw7bLF3c36Q5ThYU9h1JnB18nHDv61SFw8xa1EWECjrFvt3pLQMnkK87f3",
  "key2": "3yBx2ij7ADxu13CVpfuC88wVCU5pEu6F3BLB44ENcU4E8xBspadmppzSxcgUhpDXLkpKHVQaoQ3RiDAc3b4L9APF",
  "key3": "3XoZJeJYjLVc72evxQ47opf5VmFToebGoq9FeBaj3VZXWHzQJXdxS7Q9hfM8qadHYwkPPdCzncc4zk2EtwaaUN76",
  "key4": "4kvtSRRvwtWjmunqZHCm6L1AAMJX1UC9CxPUDJKRWfYU1u5k6EyQiH9aUJ4FXXFbCR5HjbSuZVM8MRjK4JzVB73v",
  "key5": "4F2YtRztUVNPWgh72CxEFwfnR26tcdSpgDe9fhr53yhXMao8pNjxuR294KfjUEmx1hc3CoP74pYGXyezCN9dr9GM",
  "key6": "3PzizJ4yTCSmagBKVDH2F8ueAqhRxrMhtvCftH2PZphGwQXZ3Md46DE9FJVTzcndF44V6RWYZhjAGF7PKJEMoadd",
  "key7": "5qowqfth8a4ZcBHy9v2PFN4DJCwDaHUZogZXEZxfbwNxrasUAXhYz4cNjG67Ad649UNHss8DkaAq87cVZmXGctvY",
  "key8": "4skDSc1KDYrYFxT7DwTA57XDh2yehjm9D4XkYcjDj9gTZN9CykfXNNmHDy5qLEKujdwt99iBE3r4PtkYae9efPom",
  "key9": "eLmjuMEAcEmYKaJ5trvn8PHGHLwv7J9iZnn2qWsHXvHAyDw872hFth4CL8psPyw5W6XrnimtzGwMYKNRjEG4XYw",
  "key10": "jxg39ULJVrpx5HfokWJYdJrLEnaPsgEEG3WwXJah66wyPDS4qN9Uks5S2PUSLjvY4C4o9z3EiC3QBZa7gvqWeg3",
  "key11": "3WVn4mpZWTn8niodac7tg3PKtkgUvRGuawmwfPszKYigm6x49NiFn1VXpP7iPULHTErqeJXwGpXbwzDkR9H3uDx3",
  "key12": "64wRQfzVyxpUor4ejHmLSuy2BaZREwfUMtwrjT5Wb21G4mET2qRKHfsnh3xzEHhsS13LB1WHWvSbYHBQmgMtAmqC",
  "key13": "2UJ1yFMCBv2ujHxVzR8PikHgYTXbihtNCHfBZWdP7eJgokoZLhfaFedDGct3ESsaPt7UbBtFrW2cXq9LrPtZNifu",
  "key14": "4AdQLfZakLPyp1pY3hH48YmGnL7RYX11dAekYZxLqbGePhAhreMbquUE2vTARK9HNhVH8pe2Qkyq51jSXZvW1fJF",
  "key15": "2n7NH2LSKqLBiiKAbpyzEHHm9t3pq5ULRnHoD4hbcKu45YsvLb224PH3XG3ASmyQvBYELAjHTgapwt7LbJ9atEjR",
  "key16": "EUfDKvxnEVKzfhtZ4ncBezEHmmYyShmEmgxaWg6JkEsvTMTBiGSeWY4gwTPQK9CpK7HqiCx2QwcBAFjsT7YK7qs",
  "key17": "KiJfu61EsQrjtXRNeVTCrYuKAsdPu9mnNJMz3gNQLcBezV5giyv1CaYG7jX7UyKkdqAAEZjNuxznFY81sEFPRfH",
  "key18": "UBMMkCvKtJabpTaknRLRQQuM4ixKT5TgFTWGJwYP69ap55WRL6Anj2GV4XbroqPtwyzHzjrvHKPoENNqB5C843C",
  "key19": "frLWweQEJJHviyyfNc9nFELyRaue5iHTLN3AbjFtBKsCyybN5VL8YCbQ2sUj5anFxdSYfS8BZwUdjmVaFUi3d9h",
  "key20": "4sC5t9LBY9aBJywCLxniEW5Ut1iL8ievHRM5JLfgBCBRrGGbzgC2JkRathZhcVd8TnWitW9BbaVD8TrfKWiaAcM5",
  "key21": "QaW22zm2jQNs98Q4xHjrRFJYGq6Wg5vw26hD3Mcz8HZCAo9m9RvDdtnmcHTfAcs3dPu7ogh84pcenFF1T36itbg",
  "key22": "3GXLru5LoM5Miu9Ad1RLSA5TymzSU4cpzrWzRC9i8rLhYdkNQNzC2n2NZ1DjGh1eWDgp3rmKTh9moj7yT9tRcpR",
  "key23": "2S3beiY6zdERwAQcBoCQ5aTyPx6i7wsV6AsnR3jfJe9uJZd2ayNj4Cfxigo5E2tnYYZBsow1SMLbg8ToW1AB9VCv",
  "key24": "3xUNvxDGHArfk4XBPis9FWZrSwD2cW92Q5YgZQAd4KVb1kLWZbyhbjM6zDRQZ9CuT5coCcMWksViy3kjttDrnZhr",
  "key25": "4B7GPvP8L1voFZQS4VhXsBqr7RFGixWocHUQ21MNmrV1eknSRAqpDsuhc4kJpHWVy5Af1sr4CLp4WipomGMFfgdy",
  "key26": "5iFB76tkmqNRYsunuor3KezstehKb4vdzCyAkntWErwJhmyD1CnDDJT3EK3it4kXKCetkgHGfXWK3vR6fwko12qP",
  "key27": "2XtcU4KeMxHMCwNRNUrcuwS9NocMZMAqgBvrcDahqc6se3U9Ykqd8KvE6NEbNsrBYWv5BimpbGrq1eJ5F1FfwVbu",
  "key28": "4g9GGAqeMWYj5PJA11xbDFRPWrqccAghthQg2WcQyJzUTTNoCKng3LYmKnJSJEvXv3hxAQT88A5D7ySBqkF3x3Gf",
  "key29": "3qRjDeo38SiSeFJ5Aj6ryuYCvnsHoAJKGmCGpi6fp1GjZ4VzGFxe44aUDb8Pija68ViTk25Bw62cxZqU8TsR4hVi",
  "key30": "PA3pEZYWqAxR9JN1kMwDFHc5FCkhfVtDYRvkRgMUuh34PKzEAhYsqgUZW5dtrmMEfozC3pxKVCDw42QC1fTv8sr"
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
