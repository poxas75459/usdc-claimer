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
    "5P95kSajaFP2CSHBtf8isFeot5Q64jG9ZJrB5b8S7Q7eHXYY17UXG2QptugpABfYvjVyerGXaU66wQhTuurAGb4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474ox8oeQBUEe8WAnBjhTKEKgzeRRPe55wjfFXsRDAz8HZC4KJ6aza6UD6vZED8wc3cAnLc2D61oWJTvgMds1814",
  "key1": "3iF2XtEbPviamew7Xg1QNfr8RoRVfzE2QwbSs3VuwiFt9HV5Jr3NDnNphiGoQfdw1EPAnrjR3QpqKcdgueyoU3qB",
  "key2": "34PcuKC28DLTwJDEPzByyyL1eHYqui4uBE9QGd1yjeWw2TiTLPB5rBevJ6j1SydfQ7dHuxeFEDF5hVhEZFNfJo7b",
  "key3": "EjuvpDQfTr87NXmeHSqB7DxHnqUckvkdSrAyyyzuki1J6PbNUnH8ZoNn4REieLVK7NgNu5xSAysgU9nN3TRS7Db",
  "key4": "4AjTSxVt3eXoQWEbqcdHTPjcgYLAewqDCq9X1gGTBPKpXzUascZJ55F5R7V5YZkm3JidNE5ckENUB4Xg4CQbPr13",
  "key5": "f9mUDaD2hfhvg9DdmsZkfjUmVnSdzTGdgnpYHhShWvt9tsPUHvjNN7c6iPfNZpJmXuTR9m3jottKxJ1QGBgvBuo",
  "key6": "3HzwWdeBcE2dPpQe9ZgghjtA7rQLKst4i4rbzHRq8TXfFTW5zKM3RfhBwda1HR2Vem42HzFDuRJdskq6J7DxB3cq",
  "key7": "51Bg5BC2bN8PouVz7SHc3AoQzGvbDhgwabW7TZb6727fPQttWWau166dh7KnZxL7w73vte6tra7bmS1F1Penj77N",
  "key8": "3DjoAMaeYsWW2Bczh5igr4KbesberXxJw4mN5MJkStbm1sQCndVXcXs2hPbbhARLbMmyNqpEji9kjMDN6n4oYwCg",
  "key9": "571mQL9pcNMPuLEjZSadkbHacT2jRjwxpM983p8AAR4cJkxofFo9LDGXQqiV3a8x3UAzi5LuVohX1uQvriWsRQTe",
  "key10": "QF2QHwkGfrVHdLdr8zA7T1DfjqgvfN8Tj2kWPVf7aFqSfmToSFJjSw4SiAyjMV77JpbMzwFAWZnNSxP5XBEczVQ",
  "key11": "DGiexzvkdZraaJxhz9BMwUeqf4t38fv2aSx4uJzNq3kKoSmZF4L3YsS2ARok6Ww4TS6PKUx6QXxFJcBQ9QNsvmA",
  "key12": "36Yu12t7qmz84k8QZ6jwhejRLLLskmKPCeb3aaxb2QHBZHrdF9pbTj3gDg43ky3JFn9Ura9SRaBnGg46N7CvWvwt",
  "key13": "swp4ZiHkSj1eDxrCtecfaQh2YUkuUpbvxgwrYPkJhoWFXNbpT9bVusGMH1HcR6ekVhxXRgGTJr65ioDAQsAmjds",
  "key14": "TWdcmsqu2FxyNa2HJUUZhut8dq8xLMez3ZdLJMvHaPb6qX3AsnrN3GCofpgHkfCHM2PekQwUCQVfHUPvycdMaXk",
  "key15": "3tKvQq3W4E7WnEjEfuCCB5hnbLc32wQwSbXjJfHoKxSEBRL461efpnR2moWz256jfMBtRh6sbKntno9wbAmmMYLf",
  "key16": "JZVRDDztenANS5jkVXKX7Rje58xrYpSkFXLNmwCeM2e9nj9KVrf4hfgULxUuGSJ1T2F3w9iW3RV7BtVF5JwC2Kt",
  "key17": "2uiyT5F27yWkL7aiTbTeqmXY2MTWn2Hv8m8ofWvujAdqfXktBnU8J5uKjHkYEmmj2xYamLs2kbaunPd8h4BR1eob",
  "key18": "4LNjJJ1kac7Aw5gxjeM3zoiAawQb6HUUBD6K6LxJPRk1QD9h7nD2rhBbEokKDHJGBP2W3SJ3xAQyccaNcvesqWXq",
  "key19": "5SvB6ne7RmPKaKqdsnPvgBVSkA2fXJN22wpGfaQ6XcQVS8dGx6wqWyZ3j5VFRwsVv7ULweEQNT6HrDkgmxZtWpvM",
  "key20": "kpecXruGqSWMbWVoF8M9HzsvSHPfujK84sbf8xipiEzekcABvHQZ2GLLsWPNPyN6s8TFwpernbPDsGYZ3rax15W",
  "key21": "xRghAABmakacygdkUyXUXe6A2ZPsRk3UbH3LEbW1xZqjTK8EFNWDy5DhBRRGQdD9ED4krPsJZavjF6ZDBNKYzip",
  "key22": "2GrUr9zNwQaCxf1qfRvMgCsWrJXc1uRwXLZUipFCuXsedjKrGTJTY7ApXf5JmMLvguVMZNLW4XNEvZPUKjVdM1q3",
  "key23": "2eakGDwxeNy8D6HjyULZgKpefjbKcpZ682VSuezYadxeEjothbkUh5VW7j6fGuawzopJV4qEkKKQ7JDYdaaaVRfT",
  "key24": "3rAwen6sMyyfY8BaGjvNi67jzUKXTYErHwuUEFMJgoMvhNzcdbF3tmw9swDmsNGRzLjKeM4nUmXSuAxDiLkqYYfG",
  "key25": "2ga4oPtbzEjt32e1gcjdhwAFFr2MeyTLBJqsAvx3rbkjLBMzcLvsAdViAtWiCfdpvFg59uUWpqtxDZANeLai1pCT",
  "key26": "5jJg5ozGnKH963pFVC9UvhbLW5r8AH9vHsQ4ZxAoGUaShs3v2fJ5FAjMbHzTSr39iBgy3s3t8Lmbbek4iiWETbzm",
  "key27": "5YMGzLjJ7KsbGxVwmaTgMGKqMss4Cg6VV9aRZUoMHE21mnhEADP7e1BkS3C3EmEfBevmkxPxQDf1oziGJNZyrc7W",
  "key28": "3WfUkvQaQ813caDVqhzifT4uv3zhVcuxgaG8DgtSEYE2h5mmdxTAYciSLpczGtG1HNkRqnfxXYUWRRYcpeM7okrz",
  "key29": "3BQgrAtB7omqtchCHGjNu53KpesPthZv1FBUc1ZWiKLZ7Wt9kkB4BWUUY5yxvkxR9PNVcZEbtFhBE67LLV2AhQia",
  "key30": "2iRXHMarvdWoYjk9xKvKDBcC2QdqKrUc4X9DKfz7gmoVHNEyiaqHUE8WieTxD1phMzRUT5ueHLsTngWRLXoMKQdr",
  "key31": "A71b3aTfpmzF57adLh2rtiJwYoEK6eNPiCb9wSTEC2hqf5fCXf3h844eSkoMnjzFAaK4EbQNxMUqwdJvVkkyYZc",
  "key32": "ccQ4KawQz1MTwU3n5hs6uREbmujt9c4yTSuZfaiabwfKtnHm3efZpRkWwt77YA7YPZrfC1saYc4vVfKFZ8Unh2w",
  "key33": "45cVmfrQ58MNFYNx8eSnYyo6dSpkWLHputtmf2B8Gcafi1cjgjnajWWuYwHpHbEuv3eX1Z9gkWjtEX5bBjfU2pQp",
  "key34": "W1vepHwv5u27yo8GMdgZoHvbUWZHyYe5EzaK1tf48fK3rRCwioN88srxUA3p9yP8m5quss9XFziWZHTpcsJnqCo",
  "key35": "3Gu5S4J8Mytr6hywDRn738tJuEJUmNGKFhLYfv7F3jh4EZAT7TaVMKtKiAbBWZjQwtUtkp7UjvzhJqVKtCeyUTfi",
  "key36": "34FtGNzhkC16oiVZBe2ax4fc5N1qQ2oNE1TPbSRPVWJqbwSodCnoM7DVkjYAMAHHLXu8qiVrmXSA8b9PAv7G62VF",
  "key37": "4kUdzDH2s8UX6UvH8V6T51p16us1R4YyiSCZuiEMcSWD8CjnZe5v6VxSTNtL8auBLqGPooCqCo54CGtxMRcWNtaY",
  "key38": "24mAmi9wtpeQyygUuaakLe7JXn5gs68GbXSaJSkzRbfmikz3WWX8vHyopYjvwnG3V4K3HkVDNRLoMCakqmxNVhQw",
  "key39": "5UKY89jRoihXxqkaH696it4gNf1jahmNxtoCd8k6dmLwBoyrfbLqyc2u3tkWkRWnPm12z4fm1jAdC19kBohkxyRn"
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
