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
    "4stGnMKmX4LJoH1cveNmdbgorFRuxG5zLH7GvZaSK1n5oVDkaWWSeQvDHJeUfmdRfGRogPbxFxv215ZV3wer376x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3E245hbpbX4CjHuRfnQaiSmvjchk7EapgPWmnidtK1tGJ3EyWrZ1vooDr8JsBVRZi61Xe69ZH3skhcDC4RppsT",
  "key1": "3wbLLGc43pLy5bDeUsQ4HLf3MdU6GdDLeuDVxfe7cLyvKpAHzssADkRrTA8MaGw6m5JyoFbAD5RgVfLWvosDC3VM",
  "key2": "4GEpv5ov4yMgH4GGGhznQ3NWhDk53thZjUtKAqng4Wk7LdZLbhLcLuWQBchF5JXReNyU2tKDgbyZY33FejJDSD7H",
  "key3": "Jqbt935kuoLY8noALN73z46Hb9aBdqJLxZzxVRXbWRctGydJPCLAjLbn1knsrpKnnAQ3SwT42HKeqX1w1YYZGKN",
  "key4": "4fqf3K1mB7ktN93cM8HMVN3zdjCkqkubaYSpdGsAvumUejy5cCvwv8aUXTSu2To4UEWhuowh8yUB28sN8E2gUXqF",
  "key5": "2GfiEUhLGiFPxrqtgzAc2XP1jvu5JbrGitrnun3GvANvTD2y8hZ3wfgczDeqo6NrXaUajEtdPytQ2B9oMWBUpVJS",
  "key6": "EeUPdbSDLFiF1hvvN8LLZjVQLEHpscA1B2JnSdR8tKptefPKmWkpevfhAiKLq9AzWnFpVctTMio6KKPwjM2HXKp",
  "key7": "5nyCCtRs1mx7xHeywLhUp6X4xNW3khCa3jWN8qk5rB6KsVfntEmEJcPS8u4uta3Y3ziwp5EZEAVz8KJSgw6yiuRY",
  "key8": "aGBUxVQMBSAJw9z9LTbb3iXM847ye8KhEdPzroTBFUBn62Ry5BE6BnUxUipL2ddhrHRwsHGPfcfp2yp8u8in6os",
  "key9": "23YjAM8nnkFhkAPUfasWQa34mBaseARcppcv6hZf1ginuPyF9ucRy1w4jwJLuvBLU6XRMR4oyr3xwsKdEcDBUURz",
  "key10": "2dhdqpyrzQNut3TQHxFNsQFjRCTtkBgJa4N7zBmgE9cgMrG2mQbq2UPjeh9vNXofjC5e5fBJMJuUsJtHAsfbX8KW",
  "key11": "2yBaRBAHqNfe9uwR5eHDTUr8nFP35kmhQcWj5CVpVbreUGDBafnGFGY7ohbkwouBbpH3WYdofvv36nK4YxKYz7yj",
  "key12": "PqZygZ7Yz7XamAWj7wPXUrrJ5yL6QCbbhQXa462PhQwyNxWMTLuWcnhcGjJ4hnan8CFchYmPmXyLBkpQwwH5h1K",
  "key13": "25sH4Bmh6UiLSJ8kUYvYcY1CsL5mDMixqy8Dk97N97LeBUXZEhhi7g9xTpU9Gq95GWbamZwZyHoSmtjCi3smTKKL",
  "key14": "2myxaDZuthxDM6RTeTtzC8Xn9bSXnt3yNJeDqVxv8BqFc1AL7BWjmCw93kSfZLtvpG77MxDH1eHrAWZMmQKm6rkP",
  "key15": "3gMPzLBKPezxx3SEhFsM5s27pHkyTNdxv9qbWX7NgNcKwfhWK5ik6n9xgQS3RXJB2p9opFU9AxT8monDcHziSLCj",
  "key16": "4PwutEqQuMp5jFQosAVyVitALo2o3Eo9B4tGyzEGTrFZojTe7JCmBWooW7qT2RTz218E5nJeTNyBc9DP4d5KRWcc",
  "key17": "4CwHT7k57q2TnnuPivxUmHUcEtZyrL95eRf5SyV6fWmhX2rCEwh7grnkPSsJK74y9xtAwcssAwsnhqztwpMiBVeh",
  "key18": "4UFLiFt6WSUGsvp2rbTvrujCUYgfVGjFrbv37SzvTzoRqUDh3ZqdRFJ2NhrHQYcKtP4tk6Bm5jniYKbHE6DfGG45",
  "key19": "49hCXnX94ESTQCBSWa747gBWkG7t2oyXLi9WfFJPBft74QB3ctFcoQp2RPKGjQyeE2WXzvWeUpnxGZaYcixukTvR",
  "key20": "5SnoojAdTXd4Ah98oEMUpggt3R63rdiyNTJU4kNjoy2oeG8f5Ry9snnhjpB8N6ziLXZzbDznDGLN48z6dAHSYi1d",
  "key21": "2faPcBkoZyHKAQE8vPugzSthKz6V7YRH3BMXyposUj8iqXerdB97LQGUsZ29N7Yv5ecfvcXtq1Sh3AH2xcdiGvHE",
  "key22": "2XFP8qFaLcm7UozjyPCFAWhe3MRaQAP5RZbh73zoV7vCHqECz3mN9aw19AiCZmrwU2PojNARKHPpHQY3h6j7dzSR",
  "key23": "avx1kLYHd1q67vYxEHTW2uzKQuYStYYbprhE9oauzPQr1mPNP33Hpj1XLuHAH7wGttoHYoiE8AUZFVKJmBQM6LS",
  "key24": "D5gxdCG6GTheQFqTaqBWqtr3EyfZwtXU5LuXkhYYNuYDgekyqiJQ1AfKBswCrjT1Uy88wYDf8GUxFcCKeanhR14",
  "key25": "VDThQ5WvM5Dr7wGHX3Z8jXoduoRcLestYxegXE6d1n4tGGXSKuhB2H9xYeJce1Ei4iy26KFrgjBXqrvM68EtuWm",
  "key26": "3EAZj19MR561gGu2Yti1Z4TFZBXDEdK8mYsa7QpymJsoBmpm2x1Z3xLmJk3pHR7ymG78iYoZMMPHaSJ5p7hKbK9N",
  "key27": "29Y9jsQYUZ9YzcTKaRiSWRedfYryVjSpauhykMM9DKiz8vHiXh6SfsW9KgSDQ1WapWHBkyE6diU26QWYqWUQCrYP",
  "key28": "4E61DuoZGA2CaLEpmjqe1PXhpVcisB7DFLwtc1GN9ZpLBua1YDeDncsCU6wkzejBgKECxfdV4hcpssZqqmF9rDKi",
  "key29": "3BctR13L7nv1xFFGyKAESs38vh4h4AUCu2jmQgqm5PKwUn2V9xo4ANLUtfS6XJ3N1ctfGR3q2mh5HmqaqxF1MpUq"
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
