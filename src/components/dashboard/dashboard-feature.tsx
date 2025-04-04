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
    "2pLnRyFXqYEM76WfBqrVjnWvD3VjdHrSsDPPMciGmoLY7VPUK4rgqtd58mu3uHNrjPpDrZ4UQa6bBwNoUeH2Lwet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64CA7wwBMJHn7A2i3BLFpu2yfDTHBrGoEoh582MnLzeknRtfrV6jmtjo8zVAYSa9jq4sFPjXPbyA6GFLTxvS5wN7",
  "key1": "5eRtASiXrWBAR38ZWpQjxhg37TA8okKsNbExk4YHwSA2iJRX37wa35qK35tcE74AxkAp65agtf5qZHk4YEy7MdHj",
  "key2": "28x8QPY1SB4nEG3mtxrGDp1H8VN7ac93PFp3oY4LSzKp92gWofbjeczWewLEqYLzeB6xFt1iFUG76ugtoyiskBLd",
  "key3": "58FREJzjFu4B6gfrEKBgqK5ibSGAWgWs4XSyKFwKxjEx9oPYJtKbtFhjArRccJA5a67ajxbtrKCLw1JGNxwqsWd2",
  "key4": "K36eUQKVW7dxxJ6Jd3SX2pY7DJCfekREoXyjuKRTJ49SDVvRc5ispq5KPVvJuSDhxejGLas5emKdVuC3VVLu7Kz",
  "key5": "35bY9c6cBTbC2NLSFP5Hw6fVzSashtAEzVBxmRQjYknJG4mS73jSHkg7DC9bwrg5G83T7w1fM87PL3ArLYAQrjxB",
  "key6": "4BciNhB9dbfZSXTK6aZ7uXF5sFqvNbRRm3tB3TvvQ81M9d9MVRMQCwoKiseDtAAfsbpaN3uqXJT3bVGi6BsGYe7s",
  "key7": "5wUbumQHTsW9XN7qd8dxSdTDzZhiussusUUypMBVeKoZPaNUiAERSeT1iMw4b9bmZ6Simk53YukUYK716PJ8EXvS",
  "key8": "Qfzvqs2UfjbjPJKGd8VhzTS8pdzXtwVrgNKozgZBt3XcvwiZiunATjzE3qy121vUDtb3WgZeNNhhs25KFNVGDu8",
  "key9": "4u2JaHeoykJu4KAswpUtRMaMUTkGCwnndrTvt5pmfZKznZFKMQDitiFEvBycnQtLK9EVqV5Y54dgNnLUZhDx8sWx",
  "key10": "4t6Lr3YCWopU7yHzy3YPCHrxni3tDivnTyoQd4LPPADT6JN9GkNMnNCysMhq8AQFsyemdme3vLqn4LFsoRKXnqmQ",
  "key11": "4EjqfeDhCzW8sNfuGQ4jjBrqw4jciGV1NGCduD38jxxrHWEJEmpseTy7H9McYmKmVet57Jy3k6HRePEJ38U9urLD",
  "key12": "5YXuCmd2cJBUBDX7dmufY9WtaPgCnfcCo4FoYtPfJSafsZkP3RUiUNFe365sP945fbD7JXHZbCNo1naFQoG21Ai6",
  "key13": "5jG3LPWsp9BTXZH2uQajhaabmaQNfbYmJDFjeQz7Kfa6dMg6P41uP325knL9U78wxdDg2iad8evVQamizfiQh8TU",
  "key14": "k813i4mA9RopK5d4XTrtpAzKfmP6V4dYE63wG3ZTQ1s9Va36pYmoKXaLcQo5ebLwHGMh4fqwhXaxJiUAB3eJEfi",
  "key15": "bvUrWQFCvXxCoUwAXzPrQ8bi4Ndci4sY3GSeaGm4WJKKfTinGG4VyyfUFQ7gebtSXHMLuqhNtxQnXS15Aydo3CD",
  "key16": "2KPickheRiB342chbY1nWMzUpwPaMpyrMQJauJ6LaCKDkadWgHx1eSP4cFZMAvWvAeMiZvkGjpRgurFHnDnHJEnH",
  "key17": "3N7m7qqYrjdWfXxmW6YEWywhLjQT3PvEFJZDpzWDr2E39DnaHkRLT2PqNUDpnVDB6LAbVPJNChVaWCSAigEa8k4M",
  "key18": "25sDjXapoUsjBoBqzKhuWSeiyVA44temwL2aHZnFgc8ZyEGEfc722YHp9DfovWEzyTBe6JpPbx1HCtzhp7XmsUBC",
  "key19": "5b2P5jSQaVk7yxVL4ixtCAic7GtjT1znmJKpUtNyG6nmWwULuQ5TM7329nyeoXnDu5NTPYC2PsrQYtoRvYZQKcRF",
  "key20": "4rmAbf1TfCDm9igvZHywpXT1hdhS6Bg4WGC7TiXjVWAmd5y4asHPbpvZiMbDPR7DZDfcibjEzT4Gbs3xEPtTtKGR",
  "key21": "4SvhF591NRKzabnM3EoPTTHv6BoEkxDpryBYQ4Kdjk2AbgCfxMmrJjdFfVbJwDRZDHSt7WjaxVmHMBpBCe67J7DA",
  "key22": "rfkAqdSyKPqTzKbbp7fxv9EvghTv38EmNQm9RDYh1ehs2TKxzNnmUqgTFSYMjXRS4ajWUCJxxMcF7JPGofe9JwB",
  "key23": "4WKX31TixGvAAFHyNSh2pL6PpEEHMhuCkxxsen5coTzEFhsVye7fA63g1moyJcBsLFzCHcw1c7nPJpFH1gBg5SdG",
  "key24": "2fDBeisQwWsSWBqVF2zxhz1G6ugtgknmTExSjTH3bjuCop3WvXDZfBkVrMDCNkP3q6YxUAwMzrdcu6K6SkiUYxPK",
  "key25": "539GMeiFV3geGxHWzKQdjAdJwh4TYyaRtycWqM89Q6e1xUWoYCu4fq3NdXbwFfieRut8Pto76txfT6YjzGThvAyM",
  "key26": "31AbHz5jynmQ5i9ZAEKKFZTNKxcZuKSjBf75earx5u5gsZwvAwakx4ciUi8iLT68jQu7SMhKhJmAxU2Aa2fcHYZ2",
  "key27": "3vM9bgbHYt4yMvbjD8qnYKTKkac4UksBxUHsvzxMKB4Tz5oLBZiuWREVg5Q37Fc4GRqA2Fqruych7X9ntp3k5o4a",
  "key28": "5p3CcoZePNzeHFq84s7z2dyyXydvNUDM4GKfajfqTqSUY4C1UiRbwP4HgdXhV4Jue94kPJAyGS5KRH53oYSZJ4mt",
  "key29": "2mJ6f4i6AUZKMyTcr64EP2GksUfBgiv5y76zWgfF8igzULB8KsqRoXmmmYmDQz4NVrpnCW8kgWNeNcvp1nVfq7wK",
  "key30": "2fRQvj21EXhArWTHnHVU1DTcPCFnPaL31fH8GM5axVF2xjHQwfUEwWnMYvMNgGizMvsPoHtK553AZjhFkHPTfm6P",
  "key31": "5QiPuTHQiKLdE7Ti62ShG2UYGSSVrtX56oVpt6rEsimMVM7N2qPrZJhB1kQTARZqF7KA367v2LaC11HPbTnCnfbn"
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
