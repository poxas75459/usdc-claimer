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
    "qP9b2eMRN3kgeDdfEUJGhtd86ed2jRx1YMFcGNJLxzZhs9z9WoKAXVRKwygv7thDFqm3LPwbabjBLdE9nMytd2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUDsAejPdDuVAUj96fHq11syC5HBCcAeWDoXyamopYQ1KVEUSqQXUVxa18ChkYYXWABLneo35rdJuuyQSEzdF5c",
  "key1": "4LQ9ZgDvSgh12DHUgSDfU1TS19fCwrYEF4KfojvJDqQ8Eh6rcEwcD3RJ1SDYU7TWFiqHYrxb27Ds73vtPkHeRQqP",
  "key2": "38GfUYnaMhf8UeK6Qabeqd5stP2A3w5ssX9op6FzTGmg3BDrfSo6ttn8KzFyhqHFFLNDGjQ2aF8ma1MSPuAZ1tXK",
  "key3": "dE6BAKvPLTeJQF5gjVSMoLnpiacu8iVFFyZJ2uV4ivadim2e8SCzNwxqH194z3UER1tS6FWHhgeLr2KiExm1jRM",
  "key4": "2ARZggu39GwbameWNAvZ4tqEc9iArxDQ55dhBJvrE6vWuaGmrv2NpAsDBSdsn1nTRHQaQfcmdAbuQofusA35knwz",
  "key5": "2ACskvsWkFcyJpZHCB66TQVccQRueL2kz3bJWaiBUE5rcaMTUBfs1gdQimZy7LTHFtjieaRPPkZLxengR4AfLTf2",
  "key6": "4H6HmrRkPQxGA4dEJU6xVeQ4CpQnedVZqbA6TjzdpAAYJBAzUxH6epGVt3FQVkViTRVojojghJFLYCHuZjS6Wks2",
  "key7": "SmSXk1Zuay3jB3TEmcwUkTo9bbVqk7EAo8BqGXcrhP2xhXXubsJa3pkTQPX9j4hgxsxKZ38xPe7qTz1pyNSg1Bn",
  "key8": "2GRaY9TTL2gPDUXE4tzqXH1K7ssYQhkmvDGnHvQZRCavjzBXbhzhvD2JibNreN2Wx22qshVYBBMWPTpVTzDDpcTT",
  "key9": "48qQuXJiy99MkfjfV91FjfmEarkTj7dawMywCE4XpXp4PWgpCSz8Uk15pgnq2yYgEeT6o65RqHT54RzXs7KVtYUt",
  "key10": "3xg8uUzUdHzFKS3qXW8ierbTCgAY45nNmzYQeQGuKyJ9xpfaapCX5atU89N4ZfxdhYMbHmP8rjyKTVbYCezmiqDE",
  "key11": "4PAdxoH5HxVnb9kvu9GXoudioxgMjz2Rn2WTQbTSXqtdzZRwKsfC6Z1c3c4yR43dJm8ZVKSSD1LWEcPLKkVne2PJ",
  "key12": "2SiLGS4t4f4PLkAqfE8BDPz5YbxEapxuJBbMzjn8Lpd7kGvvZ9Ft2YRUCJrbr5oZwVqPTdwafeD15AjENNWnV6gF",
  "key13": "5jcq7uPGDv4TnKkx19DeFNsnwX5xbrBD8i3KKz6xmvKGJt9kYHPLi3E8jcd8FkxtQJLgb5PSNFtv8BUMRvgBnQJ7",
  "key14": "Z3RxsGG844qq7GxBsfYCsYa5xUhHVh5NZRTi6sntrn1sPF8rjUCHqrTkW6M5BsgpUDXHPnkrQCrRDrACXt56Enn",
  "key15": "qJGfiW4uEU5TH3pLA78R7iBHVFWQBxBitv7t31A4Asc699hpXZX85scruqCS9fALptZzJ4kxrEZ1qwdhorzMcnY",
  "key16": "3bm7drRHhqpvQ745w3atLyyj81329KJwEgDarC7yjyYSWs1BvpjkksMEfoP5eEJtkdLCeHQjjnbPcQ5YEsympE6b",
  "key17": "4f1swxxKVqXV1Q8vUqsGyTaaa41pNQ2GdpRtNj7zMWZYPofwNAfwXVnmQKdd2E5HHkAcFzx6T7bxtwgBZX5euxrJ",
  "key18": "3KgikBjzwxJ7uX2Zfr2sMZJCGQKCLZ6XbsqHj159xDdh1rgDvEdkirnCXbHLT3WubJ4xG7388NDor4CEuyyuZxmw",
  "key19": "qoHHkLNkX5nvvpRFzbb2jk7HuwqrRVte7Gc5nUGaKLvDVcCNwGTzZhosTKyU6SU6jueyV5KzG6HqraYgZgpbphF",
  "key20": "56ipoWH1vLCQ2ceE5KugyvKpchh9skQrXpdiJ7C8kRfxLbS9E7SXFmYg5eTmxhtkLFHRpNijYEo8AFsmB4ZXNbn4",
  "key21": "53SHLD3BMBpCdQehrEAtdSfvaZGVLLgdwZrzivSe6gC9YLUfayESmAxfPWuqzLaXy2U6jGaGocS1F6RMbRYGt8QQ",
  "key22": "3HqJpXkdeE5rQLjRJGpUgjLBBKDY8sUx9Tzgxzt69rSePZmB9g13M5VhS8NU1ruvHG5GXwPHsQ6e6Wgt37eqi23L",
  "key23": "4K4hcPsdoSVvwBLNGiqpK8mbz94SAANEurx9jB8VFVh73HZgyDoaeXgvgRmtSxdQKuLaeUysKD6BtYg9cKUwACQn",
  "key24": "593swWMZZA2vx44KzKupuC4n8jdF1dSarPKSpbUjA61hkkTuRxCveKcEfV3AQy7D8SNdY8je8FyZCsspfUuQhXdT",
  "key25": "2XS2DUvEDCb6RjDEM3wna9h97CbM69oDX6nDzeLUKVKnYSBeVzmZi8PJqzrvgkENby53FYfA7cWHBkJJUwVZqKyw",
  "key26": "4JbXLk5iZzpzXLXsTkNRfNB2fE4VuA792TJ8PrDjSDCcdfu8dWzWGThS7Bk8ZhBkp4Nvpyz6dFbp3Dt2SuGGTJHK",
  "key27": "4dqegA4gtEfheBz1qsu72wmfTYPDj8wo7MPswDnC7nmnEAQiXVRAqXjBemghircYLAqZ1qdYvduWzwX57Hv1so6G",
  "key28": "29ea8z5wQcuHpzJDS8E9LGb8xNfPSL4EcSbeSpcBiqvtYuqvCZjCCGwjbyRv67psedfw3HpW2i8WxF65e4U4uf8y",
  "key29": "5vpPE9DQPgGYBcYXqERd1ksK7s1cU7V8EAdcxA3PPt6JYWC4DdUg24BDEQbChfBsxVTF3iz7enZWrPZQwusj4rY7",
  "key30": "4A7M1w3rXPASswMRoM5Ukae63tsVEpcjUxhScyQxfdUDvJ21BCGtVPCEyTqJBDdqA4SpK2EogygzxPvGXxv1qytM",
  "key31": "2sj42BSkZtxc2Vgdj5beDCSxm1Cq8ki2BQoJxjuhXMExe2tnBYZb71odAahhfqZM6YN32S1xh7FzgDXJMQg7GJib",
  "key32": "57idkzJbCQrL8boDjDrYCT7Q7iXG3hqr1S9gd1PwVVc39Q4r6Bq4Ef6W27kfgRxfiGZtNB489JQReWKqjbFo3e5J",
  "key33": "67M9eq1PeCm8925y1oBPg5VGFGLL2tN2ydqw92Ec7YB9SMcbSTCG56fYDvxUU4rWLAqqNkrZQqjbM9evTQ6okKQj",
  "key34": "4kCb5TLWHXH3k9PVjTwhgSwuc2FsNk4zmuisUinsvKunSYnwcujbg9yKTpaZWorY9B5XSpq2STvtKJ82NeM9z2jU",
  "key35": "2WZHH3rSdPaqcKbj4wwuWcYiVzK4d4qBrhJvm4KGge4QzT2cpcicCEEPX7LJ2Z31EPoX1Miqo8Mpkv12YexQuGwn",
  "key36": "3s2oW7ENcRr8LCkMNcCEJPYmVpwB6KyDnxMW7bujVKujPHp4kimQjR6dDyrQCdZjRtDfximCaisjFndyNE31pAMz",
  "key37": "5yk7cqECTKgu6ocEqaVXGfvUqid8KVUVpqb9ofgPERWTuUPFYPd6vVB724ofALjsATYdxkSLqsxZ6SQk9sHc32pf",
  "key38": "21Ys3KijjDyhP2oeM4HfzTDU2GXWfQaVHgRHHqkt9yXBYGb9ChB3Pc9k3qKheioZjfrWAFZu7t6sKknmoBrAFn6g"
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
