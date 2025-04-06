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
    "dGJLvZ8BZDbXzZ8Rqbq6RiM3joCiHccAGYwAew9FuJ8iQWXKqEMu27o3owA1zHLmMVvtz88YmM1PjmXwAftwt7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5idvZENzuQ2Jo3GhfMnXuNva3AoBpX1GpohjZhAmB7MZgGsKemG6GBa91RFxWKTXaDM1vnMvzwpnAKryvfPjTb",
  "key1": "2oDG6bGDVisBzg9mUDExn7zxz8zW2USgkWRJhQuBV2zu9892aTwrq5c8XUJ9n53rLi5PcPuw9GyjD4gat2SdNcCZ",
  "key2": "DYMLk7cFdxdSkdRTkUkBrvTvZJeMbkoMg3DKaWJ9aBjQTppZ2zaYjZB5tW4TGKSh3wGnXVB7h9kafMCvng126rD",
  "key3": "37hEshXXBM6Wr79VVLzgGqnxDb8WkrPr9qMjETGbD9k41JpjvjNr7zb9mnpea51UYcsPtMmkHx55KKZPPbZHE4hm",
  "key4": "3X367awr9warca1ELAVpRh31fpFRZBuXusEexK51AVaErDrsuWgmz6vkce4735W5VbSmPwtfqcGNZjmjDCLupBQW",
  "key5": "ZcrC4i19QniZZYncDq8KFgQoxw2mZ4jyyPGGkHYx14xg9PCM5GUQDYDhFCUhCSQYSyD8FdiZpftF8VYFTq1x9pq",
  "key6": "5wcwYoUxBcSmymzTzDDn624yLrueRi9cM338e8jGp65qjAVVDw15VHH4N3VWayWxgyT8pw5bu3EBe2CweLVPYDEm",
  "key7": "3QZPBkarfRjPF2AduKd6zu3pTAwBfoK7kd69FHRG6jcAwvEN4oV4iyiL3YwqVLu8MaMK3rdzuJX8fxwtRb3PBHt6",
  "key8": "36CTVBoszDan74YyQsn13ZWRbpkp3m8z2jVd7kuo99pfJDfGwm74RRYEQHhVgvs1XH1ELbsjVTT3GSiFvfKmBrvH",
  "key9": "5NTY4rMc2sBEZ9DCrDQDbsCUnXx4Hf4KujWp822XQj6bTfcUZpz8Q37ewjWmm4rXwq2Ce5VQx1ZSztzpKNrnGCC3",
  "key10": "5LmUPRm7W1hmajXChDcVjYBCDnVb5yetcQ4mGzKVm7GFe5d6eV191pwSEy84NAdiKCVLsJFnjyrY4TTmyCfnBQyR",
  "key11": "5Li3h62Q2Lng72KXRtJBonHpcZM5D5MYutbjESpdejKtBgjdEpQepWa2NgwLLFQ9byxDwHkHnvDHSCVDwZmNPMcn",
  "key12": "2HTBjxHcJMtthhGWsbayvt3JdsW99DntWssJe2eGYhsZ8UqGkZf5K4DLhFz8WNt35uouvrZuSqL21f4jxMeDB31S",
  "key13": "4LwgFbaR7bvz9AckJYiHDrDXU4WninESnPW23tHD5wKeKdhXAjEAFFhHF1ueiVfWsEXpaZQhxNowz3gBtFd11rHn",
  "key14": "2KR3jaxZEsNSX6j24wQ9ojusirXonzbUAoJT5xvHcdqTRVegSpHJYA7nxv3tEkiKY4SsNwZaMWkj63cnSPBAYrRr",
  "key15": "25fi9DUorduZA38hBp2GYz3k4HaRwvE5P4GQYTjERJsgLpaKLz7CuaFrY67MPYdanT2QNFdkUopeZYRiaXDmLDCQ",
  "key16": "2ojgA2w7ksQ9AwZkC5yJ4fPRwf9VaYN3YdvvWbJq7ixVrBdfPWCgJAgx7dWfzZCPc41SuFyoetMzCXESEPUxyBu1",
  "key17": "zkzTZ3JVRdbYmpptFZyX3F2teYKTS3RwfQTcdt8J4MPqYiLiBQn1QESWb9aV7z8TiuAiMC5ns1iXd3V9C4HB7wC",
  "key18": "3vRRTgu3jasFBQBsAuonguTEcjns3GVEMe2MZof3R3MhCu2JFNkkygnPQYvdLJ6yjo3SEVQUG5qcoLtzoWQPoGBv",
  "key19": "54igCPzYAyxCeZSE2XtsvYxDQHzd7pvzGUTuCrt3uci7c8UVZQWRjLh2VxjiXVuNJg93f36HCR43YwqCyhzvWByJ",
  "key20": "2Dy6i7XE42pMWEAsMUAooWnq9chuMKvmrFWxb2gcARbJKFyuZJna3341cHX8DvRUgFaoWGyqWEv2GnE2T57y7ohE",
  "key21": "2ymTSBihk9HBw4MSxZDhYCzpsBaWDsbDCvun9Ps4DcfFzoMqdBVFGsxWWP2ckyw421eBrNRun5z7KgsvNUACALS7",
  "key22": "5q4z7rQn3oqfpadrM3xsCPHsFe9Ys9kJtfZtwVtNNLq6hUc3JAKVB6iZU23A917HsrcFanYaX8CUdziTnWcfNUCo",
  "key23": "4xJWeJJRyDZo9No24Ku9V42YzaGbkNsJV9aBXV9CqGsNaKiH7QzUUJBjSmJucx6q4KCDpJ2oBZ11YgkmNN6tsfuq",
  "key24": "5Gw3FyL8YkNHjkoJsWJ6f5GNpmrbMXPE95exCE2QpQJc4CS64nLNSPHM44bYDoErTNjJbAx7hoAFbYTC5ixmS21S",
  "key25": "417jetPAtBE3U76u3LTDwekQbZRYtE5wEkKHzJxRBCGU1ZvUqxZzhbYBEQMP1vHbhqp98GoauoscfQNhrujRGzbM",
  "key26": "5cPkU8XHbrct3QB8nFBgpSYLgzCxwhiwB6Xa6sJ9RL1tFM2LcUhaegNRYWEmHvEgd4zaLRthYdJBvHNuLiNNHxbf",
  "key27": "4Kd4SsjZfrPdCwdkCT3c8GgueVYuo88boNBijCYzcMp2QyQQ11i65zsPNyj9RgMPHqDCKno7VxwcikYjJsLsez4A",
  "key28": "bD3xJZWwoMwwicXKeLvfuPXk8KXtvsEf8NPVrKW1HbgBHxfv6LzbVBjTre8UghP8FYDcK55TeUj28HJBZ8d6c2W",
  "key29": "5Nm9pzjCiBFvkU5JV8VaHsgKr9EU2TGHGHZrLs5rHUpG5Ya7vkowtHE31Y8mrv7B3WyzjLoffz4ACTsr6UkeqV2r",
  "key30": "2qgsoyUTRSmMNJJ23ankG5QV54UUgRR2ryXsJMNdSdaaA2ZUdb8nKzjZ6S5aVQHutsh1NG8PeTbMPQZ1azTjYLou",
  "key31": "A2tt115RSys8D9wdDAPHe8ezUxKqavUB19kp4JoYpSpFBqMoKHguB7R8oxr8uh3k3mmhVniyye1rAEyXDSGHZ5R",
  "key32": "C4fGW1hkzApa7rEyuQJxgP35WmX3LVt8cfq6XCs37zLdfvaaR8RBGse4Qs4NnEMycpTiGfNozNhDhjMaNnpp7uo",
  "key33": "5jUJGkLTbUJwF4B75yA5qTQrt8uwq9QZJjsAPBD3dVczPuoFrZ1VD13ddViczzWkyaVnWtEb2HS8ouYJJH53sBJH",
  "key34": "4dPBYuWFRuA33x5arpE5xiqPnBnARn5dHE6mvARVejQUvnXZXJpWcnEVbtvgPmh4NGFmi4Xy2GYJeypC6DjF4aQB",
  "key35": "56FnbrhTSf4cyim7bi6wZpLgsYESGTC4AUEFmDDcgv1t2rGswHryfnpMqdMjw9eCC23MEhqX5Wx595wnUJ5MbU1e",
  "key36": "3FqXf1YEdEKg2puEBbvTsw6mp3ntSkQ1kLQo3h2th3RMQT6rWUs1mxarNGAmtGkSV7tyZQG5QMcvn5pNUYLn5Ggx",
  "key37": "4f6xpfVu4qaYcqnNqMCJfVp1ZePp5KdkkSnja3nS2ZCBPUkBAhgvBCBu3eH5Li18R3yUa7JMiGcDrU2ruUX8tNB8",
  "key38": "2sJDq1ZuHhRB7UXBw8mKqFXNeZzdJ7AKATHKQiPxe1qoxXYzF5a3xs32Z5xXbgtLmR28aQsxJ6iy34AEphc8L9HM",
  "key39": "4S9zjxUa79JSnwcbCGBSjgQKGBJBB8HMktDSmcJCJpcrhckjGVDAydUxkSAg1xbhr51jtgZSyB1FKURtjkxMsuGw",
  "key40": "4qFxY1TR5XNztTvJmbuQUYS8T3KpUd2nBa1cFJgtjYVKn7QfXdbHJQiYSDj2tmnK9ND1frXR71VCtz65hCr6YcRg",
  "key41": "4PME5UYZGWz2KkgN4Zn2MXtv1mAKyX1yBAsFF8V8HkZo54GvUD7RYL6JAihigDPYPvjupzebyiER5BCpPCaChCbo",
  "key42": "3VuAV4ysd74fvdszQkUer8G3U1n3pHLpx7tPJLw7eQ5RAL8nvFi1zVntbkcvmrSqcVq8bj357qKo5dSsyZcfMhBy",
  "key43": "4LM9L95PXdFejLy6qc9RnkGc5vnBAa3uijJvV5j9HQbQjjezU5vMEzaHWfZRBYeofjGLWGyZdUNRswnoTZHSJfCc",
  "key44": "2XkNUefe94Uux5WWeEYWy3L1DKsvYKY8KVWjKQLacBtMHHDVyHx9BJS2kZNa26nbYMgRT1BMQKAQ7EezPHwHwzvt"
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
