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
    "2Ez9b8BZhaoXYpQ4Lcg44Gv2f4GqR9U29wE3f1Dm4c11oKKMmzYZRR1jiNhTxjoE47AkDyMGU1W77C2R6LbXTo46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euLw4q3knPLduYcjca9dQZ17XuaADvLWbDrpAf1f4VcsRbhtAPfamB51M3sfvT2RR42QhaP3kJrcKoEHSm8Sv3K",
  "key1": "5QGRH2cVtBYGoPrwUnpWRmPkFgWp5GvyYny4bS55msWyiYXERBsrSQNXDASwjYy4Du3byYjkqPwBXq2y39ER14xp",
  "key2": "3cJ6fRv2z5rzJbFFhzopp7VDf3QWDt5zMybbVYJuHUAmwstiaYxDGytjgzAHR8UdGUgUGbAUXwjSvHSouM6DyJvK",
  "key3": "4iPaF79kYBes2ocoa38KvJHGMfUaEejEcpyFfwy5yNKwiWeSLgPag4brttrD9Agjn3mDnJUh9tssN8kR82XbTt73",
  "key4": "2K3UkcJJqe9CxyM3pv71zn8HnekRADBPvRoFkytAEbDvU6naHo4D4oeLLLk4tQsNF5wwhuER3RDqXv43DPKsVE3w",
  "key5": "4zHgAPsX7s1mQC1BUNxmWeSpRqumai1aDTcsfJHmZ5F5UEW1HEK7dFj6grsmeLfZymQtMDQzd8sfZ5pi27pfH6fB",
  "key6": "2BH5L75XwFLHETrHNd4jGa6oFgEHF69LoWjgNgNgmzwHmjSnR81f3pEMEvcrVD8Rm7DHX5AADmN5i7S7VoJuCUGC",
  "key7": "5FS56Q9MuYGSnjY8mNdFpvsrBG3HEQ5bfn7YtoNzfYqDNUykzGLUHBPtcvE4DrjPAALgjQVrEuTuNteQyqAxYqJq",
  "key8": "VRPgfFqDZb1wrCTDQrm1w323RVpa3peva3rV2srFKhN3W3Q75StAWv3n4h69SzLffjhPztCMfjToHqqsW8jqBhp",
  "key9": "MHNfuCMGD6hsDsUi6PV26bCQxkF2LVQmLPJJzHcncgGhGqwzfNgKpEPeLdCxADDr7HYgV6GnrsvicrmYmTJoCmC",
  "key10": "4tZ7xPkrWZkumT8mDRhGDTkJDkBNkwfQyQoEhVXppbcYR75x2JzbiLHSzdaPrVGnMzUBjJumK1cnt6rTtrby51KF",
  "key11": "5TbSVbcn2oT1nN51uyJs6cmZ7uCH7qzyHegCMPFTe83vnRXV7sxuu7mHSCtthSQyoGLqHTWZSePTYSTYcW9n7U6m",
  "key12": "2BjrPki57CoHqsGyzQ9MdAgcEHGU2uFVDJqbGT1YxN9xD3J9Kb6zWXN7GEmjU5bXpwZNDbyNhSCHGaULH9KBNbLp",
  "key13": "59bjeq2SHnVUrge34gA1ZN2x3pLMT8EQeifPAu9ytyFcvwmTkBDT1ZnexMzMx7UxNNdDSayP4SeW55ndS96HpZKg",
  "key14": "vtVTjwzd2ska4FB5P6pseqTnUiFJTHqnjp6RfeLhyNybZVwEdF5NuQGjZk2SFfSzbCYtCYrHGq2XURYo4QYKfC2",
  "key15": "2fd5GoVwzCn2XoTPnHdrzxHRJPeNEqZVVLik25PBk9TFQBu8Kq7RH6Pgr3FXjCHQe5UW58AS9F5kNmGCxBigi2Ex",
  "key16": "ZvGd1rNKzrxp2fiBBp7BerLsLDfVXVKKBLrF717bnNY8NS6joUezi7RFAT8T9Cg7JHGHK2kVdpfn81aFmJCjuHr",
  "key17": "25zmDqMrU9ggGWaJca489ZmKNSZQ5bkUReXsdA2DDLVwFqJnawdF3CWirSiyZX73zL9ZCdadGW4WPpyiYHMZtFes",
  "key18": "9vmb9SwRn9T8g7QRNJo3ZBbTXftiCsJR23TZ4EZ5B3KVRasYNYbuRwuePHS7bpjDFDSJQKMuEVunx3HszYa7V2N",
  "key19": "NviZKgs5ixdoeXigUxiiqnjd34ssQn1GMB48zMrUsPXuwMaiTJZzUVDGFnHCbQTyaLkzrEHdEWTnaPvWRnM71ib",
  "key20": "7HQRHJk714Qs6zyjoK2gFst7syfULRehvZTySyDTDoAXU5Bz5aKfYZQm2DFNWZjAs7SthvbygjdrB4XXXDCBHHh",
  "key21": "2aePqefonMmqLJ4E1PSqznd6f1MzzjgZGy5k54bx2nwe8ZwWF95STigstgSBYeWh78CpvENJqsAAcV9MKBNqeDfB",
  "key22": "35rzrv6HV4iWAoATxxBFa8H23Af4Z7cj3hWk3dqE9gS1KcGM5C8CkEo3bCi5DmcbV1KnZpSMvEsPW5MJNRQo7nm9",
  "key23": "3T227AhVi5p7aS2dqtPtFFZcCz8UVKDrWVTzXJR9NihStoVEYto9s8d8d4i22Q4BE7ci521qCBmRUcb7rL848oCz",
  "key24": "5bdZr7PxQwGRTPEEtxk7bAn5sg4joGKQ7m2cQfuRurzqPemU6PBVPNTMjfLBYtaSCGFuWYZusiHi6PPHunWy19uc",
  "key25": "5SN7zHs93MnU8JEe149Jx5bKPYSWYuP1fWkxqyn739J2UjFaCRP3N3KeALwXjv2aHYrSy8D4NR9BnkieXqZxdCYe",
  "key26": "5ZcQJ3Ynu6rmj9EzkUXHn7nWGnDaEYgzQmkKaJdVJKssaDnFstUZGStVdikotQSRxxppkxTM2QHn5vzSBCWjadWj",
  "key27": "2Xy6bVE5yn5jkaWAD3B1JeWRn3HfYvYxZZTZFYfjC9Q8MaEqXQYubB3uR1UfDkTssGPjKqjoeAe2H4hwxAh1okhS",
  "key28": "5PmcMsWr9RCYEqUKH5b8nErcWWyaKCTvNbeVBC2WikULxdqyjuYkNsB6dzAUWBcYRunjvddqy6YwNt4AxbGY3BUc",
  "key29": "6DrXuSmnnAWNj8nqJvA3pX9L8kyeFfWaTncXh65FRBYpUU7LgsTfKUKbb8iV9gxMgJ1s9Cg4KkTHfivtAzwHRWq",
  "key30": "2n9nBfTY8T3VnXryYX5YbYtGNq4HZgAUfikU7VX4iu7xCDvRaEGUW9xPZAM8n9HZfFRZ6QTVWvi1DN8CTdvg5qGF",
  "key31": "521i2AcBQwNf74ZbWin8WhaBSMQers1zgADAKnFocJRGdSHLsWXcPWw92kfp3XpnX1f17fYVsjhZ2uhzfjVsPQQH",
  "key32": "2ehbM22xi6qSUZ35ma3w9d1a5otrKheefWPfSkUCHTrGpiRjh2XqfSxVVBSR2Qr5aHxrNao2dCLykKqp8g2YUszZ",
  "key33": "3eQ5jLPGBSx5x99AykTD4KvfvXdQSFUFkM4XPbepfGQaJABm5EZCU2eicUSphiyyVmV9oytki32qQagsLhBZFSLW",
  "key34": "7ZwA8A7G3yNAhBYhY8v8tEg5hdQpLRF5NFNHWaWHi1FuZj3nRTijWHUReT7i2VAqd6jGUmn2vxkKYyC2HmyaZdB",
  "key35": "3ox61Y4rvcPSJptEtvqWmPUHdf2hWF38ZrFsnP9RXuRtN1jGU6rYuvRqF2DSMn18di98pe5oiPaHguKHfWUKxvRZ",
  "key36": "4gqKXX6T3NehyqPeteAe74CP6r85BnwnEjS6zHoDnP6mFouYrq2atCKbfKKje9KQySnPf1F7xSabpY6EVzTwc6Dv",
  "key37": "5Nw72vEvSdKQaUJrJRWwNmraFJrLbr3WZhfDtBGumB15QxShpH7s1BHkXmu9SmPQzDdens2dFZc7cxd8gjFZWEPe",
  "key38": "onKbJUJEe3KGrrbz2keT28odqZfqr2k667MRRvV4e5RRQhYrRXbKey99sV57pF3odt3XqJVpMAbQJ3E5kcRGtKi",
  "key39": "4ZtTe1Z4bTNMY7cqYYxHoBzjMZxBtEeMckVE3GuLxQSmLhauUedVCcePELtUBEoBebrdQSTtVYNnox4JjBXm23ao"
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
