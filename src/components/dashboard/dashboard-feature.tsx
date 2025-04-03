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
    "2DQNv2m83rAxEGKuoQNhYE7rGsy5UkMNBNYXsdku5NraL9ty54H6yevK4N36u1HZPQVkTomHhPKT8nmWoX9H4u2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QacSBkyuQsYSYdaGa5Nz2ZmuoQu5NYj4tGzMbF7Dur6SkatLMpCtUgJ6hAPWECbWu3DzuYDynZsfqWkCjwQAS5Z",
  "key1": "GtbsuMUhHUvFqp1rhoN4Tb3VsYnVVyCFp6WYnwMXosfjTb2FX37nPnagteoJ1wVMy1r9cE3W6AAwMZenFBeUw1Y",
  "key2": "kpoyzjKMk2qk1r2LXkgCxBWEKXqASJw5hiMq6P9bw5SUm2tjXnjY6vUT1EccX53vr1rKjoJG6updwH6KyH8anMG",
  "key3": "PmWezbBaU4zw2woVsaxC59AWv4KFxfeuJw33LH4U66LDgaYaXDiTRJ3UUscETeeuHRiU2S65dbhHnQxZ5TsFqGo",
  "key4": "4nLh6uL4anbgmGosm8FNKWKSpFTgHsEeu3wYKzvaRhXeD17AxvgyfycBvk76Z6qC13TVFdZmsdLb2rPCuLso37oe",
  "key5": "4tTerWHMGMuCaSV87RdGQfZfmCxNhnAEkqeTUKNpxWKSABcja7ds4r8twKE6SyjDywMMAA1pJeRkDpCXHpMwLdee",
  "key6": "5npEUiW83E94i36HCvZn1dqgnykuVQ4JkgYThtSHT99VXyuvD7rLeKb8crYzHyc2mQxpHJtvfUiq3HGeBGjKFUV3",
  "key7": "2jHpzHcYQiXeeseUcLoJEm5XmWyiwzHvB3GPVzx1xjNY5qHXjfV2bwkXBH5ry5xP7brwfQTaBywfrHmwWPPbmjZn",
  "key8": "3WLN2qAet2imykQDLyejrWLy4QbP6F7Vg6um9wzJa1MpEcwb5W2DERYxTi4M1oZHYxYkCU4sVypco2WZ6CpaHUAm",
  "key9": "29FatbJfKDv7ZY7gYZTNcvNniFeA1HEPBN9RLAYkstYXFMCzNiky51d7nS41pZXP9c92E8bEVtrYSSSvo5nGTb4d",
  "key10": "8s3r6Cb3M6VZgH1MDmgBnaShDzJMR7FE26ska6QfToeafJLnGiPzxNMALSZtxyBwxL3bSFEWavSXN4KXAUqStHN",
  "key11": "L4dchsh5mBAPrtTCPNuCeHtrvn2ojVHZvsEQM6N7nGPSYQQbtAhfwZVcV46S88HvSgkrMsDJX4Gea9nXr9PSxMk",
  "key12": "3Dw6D654bqpt9XmEjJehsXVUq4HTJdRtK3XrFE255kWbkTxAjJtcg2DupzVQbSvPnTNUA6tmZhPDLqiUEeYJ5Ftn",
  "key13": "PJtpiWihyDZmBuh9jX474axbZBTrVo3WRKFBtFGLm4x19akwQM5mEQUvMjm4oRJvALwgtMpv4WtWZzopK2h8qGN",
  "key14": "3yQgYRtzPG6wCTi9Fr6149YPDnysARxjnJL5TSHLT6W52tUq1NBL5eVMMCpe8UnZhrYM4T7K66Z7MRJTwNCpjkNv",
  "key15": "5EeuaMiUk6UpuUmipu9xeP781bVu93JbTDSZEaLGiXXD5BihknGQt7367osDpQ4A7DPC1fobaVZY4wiHZmQgoQ8q",
  "key16": "4zsnaUQVf4f622Vyn4KGHzmMgukhKdm5w8Zc5SPkAmugvBVXBkbzk9XELKAvcxtY1Ez8zJiM7XVS2RXc6ANT2feS",
  "key17": "5aknjakyYRkMJMfJavAMi2mjRiqQ17ytYdsBfbXvK2qdnkY47ehur6uVt6fHSZBtynNyWuoq3A11sgPxPZkoZ5gJ",
  "key18": "2hxN2Qirj6T2BZjo9H8hxpgvktyKLsSCdG6wpZqik9xTK99YkC48Fb2hhkUxwDV7ddoo4AaxzgRqwxuDT9oMT3Y4",
  "key19": "4xEcB4y56uxvHtCKn2bL6g7sTkEGMkTkFgernfihUXrBWntqdU2bo2bie5yjjcBKr1x5jBV6Y6UW8zZta6GyT3sX",
  "key20": "3N857KE1uSPqW9SGzPGwzHmc1FWzzRvHUDroeGWofWWqWW3tERN9bR9m3U9NcLUbku8cCVbUxU6DaMmcLuC5Hw4X",
  "key21": "kb5DtqZtCTt6vc8WCd6eEug7AkmnSM9tELHKut2gRpG1LHp32gsMFYaVZoUouAsLpXCpXYNFDmYGpj9jyqL3LVc",
  "key22": "Ct4xLgRpv4Ka2c31ZvSpbvSuYCH4PBY7UwEYNcmTd23wg4uDGzaEJd737HQtUvKhf1jR8gufwdyGhBgnFb9HNXo",
  "key23": "2ZnS5UT9JZYNGZpYXw2ERC2RjApnzziKQz7jjpXSrDTpqDjiXAvHDpYLWcVoyncC7FRunteRQjQBmRQcPibALHfr",
  "key24": "3yCdCL9nqUHKeqYVQDfBQoAf8LBNuY1KwuNSbi4xR6LYMjKDSuGKEHcLhFW3QfiKnUDnYx64e3PSS7CQ2WhE3A2C",
  "key25": "3SomBtn5bN95rKgG5ziaDxXoiJ5GJ4UrZy2B4axH8qxUzvdH5FMGK1nBNCFzX5WNnVjguBsgrKqHmNYraKipWYAy",
  "key26": "JeRMZQwce4hzCTmPGCPLhfzqkkcHEBqt5hwMNk7Vto5KM6KQnod6qW1e9vZHCU4yMTpL8mjwmfZX5HYtVwPa585",
  "key27": "26qnbKB3SqaXN3TX2YbitSa9K7FGpeKUhrGv6Boq4rPMYmpz2HfL1QFJUgy4YkYMqvndupbuy6M3e3j97dH7F4dH",
  "key28": "ZdQrHoEvuPEaTgg3BnCGQhuMsfy69tukkoGtBzFyXiGrRBnkVSHTeJrXSnyCjrwXfEZs9eqThguJxymCVW1698B",
  "key29": "3otMVJNDC8x6NLxMHBRciXqnddFg6GsK9y24UjzD4rqHEmqS4uecwJBMNhM4wN8RiBxcy6S9TsWtZ4fyDAH6dYTo",
  "key30": "66o7PRSBf2CYeSkdyD4a54oZE5DXDXy8um4uMSvMSWmX1YhKk4iUooMVmSxJcrqp4KQpAjYehGL3hTPPs7fe8obK",
  "key31": "jLjkaQKSNUfHohUiPHDwSq63LV6sMxS3N6fCeEtHej7WTXbpU6sVtfFh7XB9UApexysB4mr2XMHUj9MA8CRTB4j",
  "key32": "NdbvYkyDe42KaPiKhNvoSKvTrgEqw8kyfAaeDn9hhb9Qm7JqP88DxfYkMNsnu2nUv9CPWaiVUc4CBMvErre59RW",
  "key33": "rkrVH2MahNGgid9AajrnrqgPZVKTw4Vh6GjqbQswZDRQa9x19bs9rquyxcX86detrHcLcBc66rbWQKDM7KhAQPu",
  "key34": "4BY35sKkWGz8RqFud5MpTukmV45ariLAVEoymr8g4vH6yNfKEWb5j2sr5Gvd8HtFXkEjdEhpTXos9nzsM7HFxdHr"
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
