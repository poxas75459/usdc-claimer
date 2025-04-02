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
    "3uJL1vjFQPbdQ5TmcTiBeNKaKqvkuJNSHMfxMMCg6RXPVKg4jcZzccZ7n86C2Dv69DZeUexC3B6PyJ1eDez6V64V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fWjrKjXgmzjpqaLx1TrcZE1PRdv2qUJiXSDdkJQ53wX5EzkqAnEbV49AE8CT1Zw5EcBuRzcPMah4DaRMUNyKjL",
  "key1": "5p7KHdv2e8mCW13Z1jpFX4r5ViZwEHvXbJ9m9CD2JGVfdzEtGJTLCNvsYSbwEr8dwFGNHCycxG2dokdrCurL3yz",
  "key2": "rf3oY565NZG6uqYN6eMDyXc7rjRejDPADFB9SoBjqu8pv7TuuxzSDcCsYA8uMDpqEiJHSmjWo7JEuTddoDZX5VG",
  "key3": "4xrjtUeffxKiefcb9KXyLCzk1kZetKJRv1w9PPv2ASyS8bNKHiiQbCxRwX5bW6cpxUnggDs7Hie9DyGChcez4wri",
  "key4": "2f1X5TKbLdScc7JGRg8LF5J8nE3YJAssSpMsF5RGrrDcWYsq1B8L1rTuF4hamgMAQyZGG9KSdbuG3V5XdVfD3H85",
  "key5": "4vhFtyDbp5tPeLU7zKvk45x8e7FtraTtmS8vwFFPmPraU91XiUtph5mhrW5gHLfo6njFWWJ28WNQdvurBqg5c7AT",
  "key6": "23bPLubrNZp3uYaJseRUkBW5uVRnv17yp1EzdumQu26561RcvoNoreM62DQNhHmYf42EByqB5TdoEdHDbjnosqcG",
  "key7": "bgzjBRu3Xqsmh4VzUhVN7bS3J7GDc2i3zuZHJovTezEpZ3Kw1FL4SsPPdd7ecK6NVkDz9WuVy65UP2tFfV85rt7",
  "key8": "kLXytLs75ka7N8KNddZEJ3fdJsnRVjz98N3r6AsQEXfKDShzST1o1RPScXvV2NcEN31DkjsaWrG3W1imfmmEhZc",
  "key9": "2NcA52zG2mfiWMCjMbZKimC5MxSGvS5rBLNApBh6174QB3djTGBFSM94TBmrATWjzXabr2E38X8kjGe3sooYSJtj",
  "key10": "wxPm3UBGXYuLbEjaYcmpSBGjfeVWZdWeULYDgtbfeDzt1AVYEjHVXki9rz7t9rE9NpFLcKwpstVmscRReDouun6",
  "key11": "59E2ZQiqY5ZbQr2kVYURdTnX4PWUji7uyWFj7SPFCFaetRmMWD1ty1ipttRFpKRYW2xudATg5jjRfKBYCjVMHMzK",
  "key12": "3LvYh55NEgDsHmJzNwc51DPqbZsTX84QkNgBp79vc7i6qBfZ8bKbPsLmf7dnoxeMTjk2Hfe1yt6U6izoN35mder8",
  "key13": "KaQ9zXXR7Wfs2fDHAqRwngqoHkxHZgqvBre6mZRMJ7JYChma6Pc28Wz78jjdULfGeCDBzyePT66dACcAgCEERgF",
  "key14": "2MSnv2sLzx8ZLAyrZ3gaaB8D2qvaasxasJ9uNotKRKbFFezFzzWxozhMZZi63Qwgg8MWQ74Xz631ndbX779Xabfu",
  "key15": "4GTcFKLM14yMoPFjcfRxPExyxP6qubdC5Cyhb9Vu4shSsDBbeLu9L3yAXzP7wkjm41QtpYhPDmijLJLgPHMayjf7",
  "key16": "k49htrtuNTPcEM5wa588qSTqhQXDQvWTjHSPoNSZ7abKoGuBAgFXz65Vnuq2Rb6Fat2jxncS16bTa4cT5PVBxM9",
  "key17": "4KS6iWVgHptob7UFmA2znKeQ1dYj5SLoLQMrCGnBMAfgKwKvsUZrhHnnXZSWn5hqsm56G4aVxBXswYgb4fic51Kc",
  "key18": "34F4PDREqKVL6TdLW3cq2aZdupZ2uPR4PRugfuvBMEbvCLo8TE8Wfzkov3Ss5F26fahtwvzVavWovr1SrNGK8o27",
  "key19": "4XmWk21xQaKCUQKkVqEZzhuCXo6gGbWTwnrVsTqSfmAHSfGRYPK33ywUPL9Wrgo3szZduF3QrApWcgK4PD6WvhdD",
  "key20": "2c8M3pgr7UzXc7SE6mCJj17QTn66uFHqGz4T1H82RB4gMXGWyhgE1iCqqwoHGo5461PENiwnx9H56tUsaXfUip1D",
  "key21": "3NzETbJWUAbMUKQyyzkCsDnXA3xH33rMxhzaLaPTHDQiDHogvEfFy4ogAK4NYbNvxDV6DPmJ1zyNrA7DZ8AFC3WW",
  "key22": "4oAfpxVzUzsGXoXL2sChoNAG4kvePHjsYVEgQz7tLCiJWL6GDihzf9cCME1d8fY6h6bn8mNNs9QbvapGhWduZCLc",
  "key23": "FzhStWvbjAdW9KhhoM73LFL6jJoSgo6SThdgsWDssMox8uyVJAnphQb65u24oPXGLudesQ3SyoHo1FNjTZ8DmkZ",
  "key24": "5Xm7fUeLBjbv5fdDA1MsUZ4gDaYhByLosFs7ux2W6x7PG22xQfSwdcyD54SteH2kRS2SCLJAEsic4m7umQCWdvFY",
  "key25": "a7dBYqkUAZCKikqKZpmjhMFt67RU2Xh3pd2ED1X5e2qRXGsdojP2T5dYpatikZEL9TSQMb7Fu7619wGtPaoWmC1",
  "key26": "64otuvHGUfWDn7GSgqtfwTrTYF626JF2GeZSqqndBe9TnC19UFUWchSU4T5FqShwKaqyTihjo9dRqJma8RFKKNb3",
  "key27": "3cVf19X57fSgDbdGnSZ6BRtJ9RdfLvcHjTz87HaAcgHDSBvwFdNNH8yKMjmqvovQyVimjzJGfQL2XfcqMRvAvw4q",
  "key28": "56gdbgxdSeXhQPsLSE6wvAQXMUq9BVQhZ2c6pWcM8LexL1pbSFq72HbKzmZ4d1rSTPatenJnHa3MU9uhWhCgj8Lp",
  "key29": "5n3NcmHWzWyA456Qw8UP92xpeHSP1ko5GucCYAo5q1Rgu35G45TPDq2dEZ8ASFfXG2yTmVCAGcVMbRzJX6Xqgk7t",
  "key30": "5vzXZTPC3NyZWyqEGBNDSSa1NHpVfAxsRTKf2tFC1xwgNTJTT2CnPuYP9vC5drBVhWC3kbNmKWcCNGwk9KpJAQGD",
  "key31": "54JBQbyytJYk6dWZkfsPY8YkAEN4XqQ8RyRK2xgfXBWNTvsNWjGaa5UTqGJXhMsKu2KVsv3F3Q19XtQWGvByARVE",
  "key32": "9oVsvZvGmXDBy3UJvbWtSFmsMSTYE87r4Dq7Uqxf47vuEEcWUoXPFABL1WzY2LbcZfzP886yjKa8USbywbrmowr",
  "key33": "25wSvqJ2a6J67zjR7yuS2jZ95pzMvpTmZMK85KpXRoqSiMy81VD5Mp45eSvMuKa4z1pnoHN8sddoWXAszK5ibCKX",
  "key34": "nGe5eeok62QjxUB381kVS5X92gNrXj8kfqQB62RHaQd6aDZRe6itzBFdWEJ4iaQisTPBqmvy6rsgLw5yAx9Hv1o",
  "key35": "4UmpFxFJ8NL4ZrevyEHet4ZzFg4WWYvhm2YicdZUNmQ9rjL4T4BBNnxixPikBbScfTE77rpb4SdpG5AEWYZdvNBC",
  "key36": "28nkitscQEqzaPAXDJzskQuMtU4qZSFTovVhANAzUVZ1Q8HzVDRswmtWBfoa83HBXCUeX4cYupMYeAneshVHTU5V",
  "key37": "Z1ih5tDUrZegiMfBxhtCzMVpU2zwU3aUBYNqemUmGtpB5YKXiwADwukqMSG52kecx4takAxrSdvdpXoBMJMsyw6",
  "key38": "2x3vnGcEsaPuV7aFRRo8trhQjKfKra7wMp3cVu2M8KRtCypY623KtNtZdTxoeWtBKP8yjgoMuZVa3KKky6o2kX1K",
  "key39": "4xrHipNNfwbWb6A3ZebrtfFF6DJVBGMTk4B2vx4bmaA2dw69e6wHoRZG5K14oNLBvYrSw6vjP7q7csrKyEaBNeej"
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
