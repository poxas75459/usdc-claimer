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
    "5fKEqR9cubwnoBzDht6mCDxDBEVsKpuFgDLY18TjYoLnbRKhQ4CRQAvkXYb4nnTQLsGNP2VF7VvCMsew85m8MqDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGmgF81VrZHnMZ8DNmDjVii7R8pVm1bzN59jPheSXgmy8WiWsYUeanTBAwkzyhiH8b7f3Hb66V7bt6m8N2XaBCQ",
  "key1": "2UUrFa3E1qxuU3ze1Wsf8UJyCrCi39sLRVUC2uSe9S33qNnqFqHG75Jw2QF1yJnzEUQxnrMJLf3pBHapdsXZSAJw",
  "key2": "46a1RqQEWxTrYzvFrczKfcf4eXFLf6C3FxYnsbmSVeXphoDXcEMasytAesMr49hLWwxVV4MxuW41gGEMdSFNaf21",
  "key3": "4tV5FxKSYwvBtqbZDSWS4hZtmUNg6HCrkwJh5tVPxM9drJ34xnWxC7KjcPWfvXvLXp8YVwHFYcCNMrC1z6HhjTcN",
  "key4": "2GgSyqfTisikU72tov19dwPNH5MXs6CDVkL9FLva81Y5nxd1zpgm38r5CdfV5taejaZwSXeea6vXoNYPBmB4Es6E",
  "key5": "3Bx6fAsdHrHbnxpK5H4hBUho2oNMxkZEQSsEW1roRMWc3mboCE2SZtMNDUk2maefezFxwxBXweB4WSt8vpQDK6Yi",
  "key6": "5PLwDSc7pcyp29CVSx2vZrwccfDUtAvFhtCN39yiNce7VMY9y9irGjwg6kUH4jcqELNnBwrFFwJNerWQS7r5avvj",
  "key7": "3fqiBKFuJ6XuZXWfwnF22TDXST3STH7eGc3MKb84eY1S4dyQDkpzQwVHRuJTSsJJGNfCPg5jyMbHF8FgAQgVRhUU",
  "key8": "5T5h2ArbRVWrikFJcVy8KaysZcGpndsJa3gnc2agQweDuEE6bPpRHws1YF2dayv7ghEVovh1VfRvYP3vezCExDiz",
  "key9": "29TUZ7eHT9E2WK9h2vtd366U1DLwhpnb8yVfztFMRFowLYZtJ1nyvV42cs5573NvVMwYEFwfFxsSn9YpywcASr1Q",
  "key10": "65tGGtRo2CZfZ1FuHZ1h6iy2Sw1YdSFrBa2hD6WqRwZS5LMT7ZR9oNKULUSLPpTabboqvhRTrFXYRqwDCi6PbcqS",
  "key11": "3kbA81Ux3BBB2VwLVK7ee2F5XrfLdm9nSVb6H9fnUSi7hvnaBk7GWEjSitaM6HqwLe9idhiEzV2bnG742KpqB7bY",
  "key12": "4bMURD49gaVvL1A587tNhYtUhU2uZSgo2iJxXRmMzbjRhkXtTNG3KwLK8UsaWZK5LpGBu9z1E6AaV585ZdqnYDZe",
  "key13": "4k2N951rZVjUnwDGSTyeqAyDAsa3gdXyw2ZMAuNo89aAuWZNLa42E9FDvTyxxBq8Ur1fdW5daLVbC7gkGRaGm2uN",
  "key14": "4FAV49sSzK8a9H6jhxJphGiamxJU3YScPNSe8WUFrkFDNrofe3FSZH3JGKUhqYyoPUsxA9d1FsQCe8Xpp5s4qyu4",
  "key15": "DPoAH2SHreBDUsYKui9nADjjs7LR6uTHxSAq5BaNAjMPNkjgxL4YQdYKc2RTo7e6TdZo6SVbom8v5ZVveBwoRSK",
  "key16": "h9tXbGcb15ajg3pbKNYvCRcK5CUyy2CiU5iyttSH949D5WRKV3bnTQYkhQZfMEUqeuTjjEAwV3NDEXwQspNXUct",
  "key17": "3DPcje4wxvr537m7vNWtDLLaGGiz29ESiQQdhzi6PidWr9bsHPAYYpJayQoibJmcJ9DBrgiEYcyaiRW6u41gCwAB",
  "key18": "PntXYrN6kqKphtq5neujn3HboMew47qhEowvZkb6vNb1THBvzoSnSb63ao8iqBpuUDWVxVKyDqK1EFJ3Mni96TT",
  "key19": "2ta5CyJetwLd9gxLQZnj7TqDmszQCN6t1buT4PAWEgqwVZoKMbnW7fzYD7fq3Auq5nbGsnsoFZWnpb78q577Josc",
  "key20": "4RZFbV2WMbXkSYWZmHbBKYB2zuuBQRREJxhGWss2H666Jjiy6hJmmQ9yDAYzzqDXFvJRFU81b5YP2SPeR3HQQo7Y",
  "key21": "5V6WpUWCh5CtopJBLB6M3pA7vD78qgEwo289TPQ3Na9u5eBhWGnYgWY8S93E2URwq1JsK8cHvWxqQc2Chw9dAz6e",
  "key22": "2xL4K1c7xVAd32YjLBovoc66TYg5gZcePa3wkugrezLCwYWv2Kp4SS8ebkkJwvsYmEKaL2EQqeyZhErUVwduh7yB",
  "key23": "3xCmk2Xv9eJCRQZHa8Z9Bf6NWtGaz3U2DwSfQAxbvuyAnw6d53UkEz9euM4pJCgn7EKENUu4a797W8Qh52WkYMN6",
  "key24": "5PFGFuTUeLmB3Tp1qnYpxP5cZjmAo9YqzJQ5oMqCa6auX2Y14NUtdzbDx1Lz7DM8s27Fvd6hxECRbq2ErdrtjXSH",
  "key25": "4kHbWT5GpqdiR4onhxS28rAvzcCxxgryJp49d3Dznw6zw7GHRcQ4jfEL5UoM3XFnwMCsaPAJpwdxvEgTNUFHDDUd",
  "key26": "5zauAi4dgzBNJHzJBmcfUDWmBksCQZbUhAbY4R3DEYUvq8rTeXzmVFNvQD2DJXK37AZjVNvVdck55G4maYep3AZg",
  "key27": "3M8HdSUVoVWMRab7Zfov3kV9yA8GKbNvrgcDTogrvj6SHW5K9zZLLLqmQZu78MueGvTWDeJ2DoZtA7kWn2LcifZ2",
  "key28": "3j1Pa6DCmusfa592JEipFsXgoZw2Z8jWrZKZHLSoUGmruLspNfruhdyCxTYjBAjQFJiJCGp8NZFPTAXd1Ds3Knaq",
  "key29": "4CPSKCJ4NTDyB6Xh7DMvNBo5anF6s5Y9n39ZsdQ99Lbp87ET27P8K6kyHhf9ZjFUE5jfUtLBcGMGrXP7KrHwwT4a",
  "key30": "WNLK1r8kDgRYaHtU9gijPLQ6tEsssPzRPz45oxAto3XGfeNhMtM5zGeVDrnHah8SaotQfHDdW3eCNvqSmv389Nf",
  "key31": "67F7nvEQq2SpA6hHyRdh6DdxwLryi3dMkdo8yzW2h3o6S1Q3fRhcspa5QCU7HbnLRSqHoRys1ES9vh2jN928Zvsm",
  "key32": "iKLdxd9xoRbPSptdJLoUoFzngirwKnLrpcP8kFWrF6vLGQ8B7P3o4LV3268JS7QM2RFAXq9Z19WNHKAy71gcQTV",
  "key33": "596A7W1MqaHN9ctmYRTn49tfn3TijCrhK3MaTejpERuUxdxMqxREP9DobtoYTEoj5vS8HsfBq6Js3jDQiyHjmidM",
  "key34": "3fCKtAmWWcAnxvL2yMB3ym533vVEmW3ACMmXo4npUMPSNUpdiXLvzggEy1CXNLW5BHA6ga2iGUnGWJcmvbJ1MLJt",
  "key35": "4SgT2uAnpvga5EndaQFqi3WBEzf6MpqTv5SiGA14knDompGU1mCQdkoae3zinC1xmv6oJRrdNuXdvxHQyKautNRH",
  "key36": "2E9zeCu8GRECbPqojdFZzDZDj61rWi8knZ4wnQSRMVVcbJU8EHsU5ry8hN2Naw1usCK55uv1rN8jjKTxkC6hbWCw",
  "key37": "2fkfZjYaVd8MjfQeYWwRy2eQXNqkEUQ6sH7fxu7J4WE2YVGXJkigNc6RYB7oaWUi9Zq3Bt6XvUX6qcVBa6QGbiBH",
  "key38": "3UTtT7iPPE1aTzWciALsR2ZnAM6dptSmie2AKWu7Tvx6dWkTrmVmXrHLoxBcwr2DBuH13vmuSpjUg9Aw76LNxeMm",
  "key39": "64cQcznxx23knr9kLLj3SpSdfKG8FSLwfiEbjgNiKX8AUjwUtYPbtefWSzaFB1gimqVoEFjb6sntw1yuP8ZPEG5J",
  "key40": "4fo4Ci84S7ujqbCgGoXenh2g52epEVej6La6cMo23iaWg2HdLVurcfUSgiuXFCd3RvvmAxL9daWXPVD2KGpBqSA8",
  "key41": "3ETV6P8URPcJZJ4JRGxh7yewWE5vGx3MKiPtK9Wwxhq1aZAAWvhTiqfDpv2VptAnF8aiHqYW1CsxT5DKdiuz1EZ9",
  "key42": "4qBi2EoUR3JhiRo23Z6Po4tg2AGi8CBURt7YAjRKWvScmPksLL4tGazKKCZCh6PnDxNvcfu4tRoDQ1ysi3XmBJiG",
  "key43": "3xg6RYW2BQxer66ttSTkeK5FX9Y2JmV9XTEv4Fq8KcbZZZJAuxdR1dAn6NZLezAKyhom8jo7KXcvBTrmNTgkifrR",
  "key44": "5Mt3bztfx7fQkVSWU9KKYpwiFZj6SjbsMXgaKpYabs5JVG9QD9mXJk3WXPb3K1vaYWNUFQVANrRYX1RuSDt2zS67",
  "key45": "4tErMiW8g1SQAcCsTEvSuHcJjLHZ8KFK9CyGHiafhYEt7o5DYceWP2aW1DjNK3XcNQGRCUedi8RvX2PKhzSReaZf"
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
