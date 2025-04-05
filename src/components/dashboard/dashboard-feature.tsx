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
    "2ryWQsKewZkyCEevRUkPVmDU8sTFX5oYQanNihZphBsNmXCZ75uZMpVaZKtZHZ5fiEjCnugX6gJJNpo4X3jq1x9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2shbjT37KrcfbCrVRrRDGURze3QigHuyE1iaeEfkC7x9gHmz1Si72KwKJJkC2WUTkK6PWEDZHDocWYu2vPWCggGU",
  "key1": "hSeAorHhb4hqHRHX6jmF9iHCjhFqAiK7ETxMdgXPAaZ3ryy9oVafYyaRkM8v4Jssr4rqjbRQtfrHTuJr1uRBtr9",
  "key2": "VvJfdvanqLSrN1JW1AwvmEzekMyRBBnbXwNihEcfhQNHGbnBFfK82SjDH2vRyBGDZLXw3AW9dE6vruH94Vs6fKZ",
  "key3": "2ez8UpTMUn9hcphwzNRScU9XRzmVPqrv4V1WAxVJ3vWpGSyLBLfCztMJziq2dxVGFcWZ7d1tUzMxLPQidpyUtcc9",
  "key4": "8fsCURCL5QANV856dr6F3C34ywuoLZtS6pqTeWJXGvJvRbuzUZWMdFrVfN9xKZbF5zSLWZoSFVvm3iUJiKHUwAj",
  "key5": "5e2VkcvTzdc2jPWkHBzuWZLg5HWovEvyiUH2N92ZgwGEeT773jEFj1yhJ5qcMxLzGmrurtobjDbyenfpnHLY3rmq",
  "key6": "5goSPSDUTZChtQXSj6Bf8F8JaYyL5QNkHQXD7bpb48QdQzurfwEHDnC76GRw175x4jA8iWgfRy8FUh7YFGyarcGQ",
  "key7": "cK4iiMVhJZnFx9JNe9buM9zm95SAcHXhczFW5Yz624XU6QKUSzW6kWhbH2Y3TjGFAbwD2Hq3MUCSBv1eTtVjeWW",
  "key8": "2V8oTX1xaUfWjQrvBD9wWbwPSidFMpDB4uzzY3Asu1bdhGX62RQ9X1Aammt9fgyqfXhpq19WCZnuod8scfQFP79B",
  "key9": "2NuoerZw9x4RyrNftdo89qxqtZvbrDBJLPBdRqfE3rBqzgZe5BbD4txSgsJmf7wXg5Kfk1z5jw817vFaAhhJGPGG",
  "key10": "3qVAXx6kgBhqYY2ufxm4JNTkeUgL7755EfJgRmemEHPZLHZvwPZALNRYKbvz6Qa2eKi2CfWYTEJGBC5CBSrjEGJK",
  "key11": "4LnhRmZbDj1SbahCBEXTaVZcubtHFXPPDp8dp7PfZ6zNhh9NTx4pGMoVJ2QPP4DY5t9QUjJ9WjnWmBn3chTkBU9F",
  "key12": "5WPuACGaKpVqBLUuokcmbrsr6yuT8hELC4HpYQwvSoNBPjNuuobpn3wCQhMzNNVVEiksD139XbvLHQK8pxhi7TEz",
  "key13": "5my8bPZsPUZyPTgLNW7McfqYkk5HbkRW9kFo8xiRbXmj4gtfsNEzw4cAb791KzTqGFGz2mVob3bPoJfvbHmnQjTp",
  "key14": "5E9W8tCufCqxVmofjNPRirVSD48ssD4b8dxGVEHkykMmbvZpps5Dp1zNDtevmAq56cmADmf6tc5R9P5LFu8MLHhR",
  "key15": "3dVybr2mj4z6yPGe9x1ZzA8ZUKydJV5yf9uX97Tthi58n3mbgxmZyvuJuzzEj9zf2i6SFHSUnBjP3pc26MxJ5HZP",
  "key16": "36zzgEwqdChXL4ybaWbBY1NauKpR5PjNCTTrq5AzAWZnEmvQAgHoRYfsAQydvVGGAwrwDncopotBdK8S8qGdHm7Z",
  "key17": "5yhqnDwoZZgLgQQEChGPhyJdYG3qPcTdN3vpDaUSMrPvF2aQnnVrPf4eWM7B9iy5THSBhY6oJSKVLYSd223uN6G2",
  "key18": "2mgAqrbMYhh68iWgneybsZeWwozjXWtBgsgm9dy9rtCKU8qS391BKdwEFyjZdbVDHd9Rr5VGFLxDRhktDE4u9gio",
  "key19": "4n8Dqx2gycX5Z2ajnLfobwiKKEdA4gDjT5dsaSqoo6vrLu8wEHhQrDrVDGejYXAzpw7RpEQHoBSPiM8A96UWUDLg",
  "key20": "5mnDdrgjiMThFKy2CjmWbkfXycpxz7A4VKfLJia1KNUaWPF9kwbWJ9cAwZuRBGuy8QCVSo9UDtmW7S8U9k5wvqz3",
  "key21": "2XX1zsFUma1gZnqfVqqHEqmYR286cSF51YgbsN2qeJNkEogxAnjeEa2GdTv5EJc3PnASZN2nnFZ6sZ2XNaCPLQv9",
  "key22": "VU6rZNBLbFaGw1jGMatpL1mrEsZMSzyKJ5rPAP9p62XnnUKF7FbuMA9UntdPo1MnATkCjdWLgzXo7vJxw2CtjKF",
  "key23": "26zwq2ymqJc4EK4UEAPWuAbuWhTAk2gj3AVRNhwqmZnWAvFYAnLxPg6XHoUPQd4fKdPhWjHn3fQbBX3vhrFsQ2MF",
  "key24": "rWqmgLJL1UkfHS3T8hwhTx1bkampTKukn62367HhMXGFauU1xNvYZ7Z9f4PwdFB9SF7kxFrtPdicBNpDhphbC4y",
  "key25": "5emuVvotocusHzRTCgK9NFiihDetR1rjPGPoVF3H4tPsCWZacMYfetNnQcsBqA6Uu31nR3xtEkvWcWNPN3BcB2GT",
  "key26": "5guurTvcXotA49A7K5p9JKy8p3eZN4fh3Qxqrt3SSq4zM7MTFQi8ykD9pYKPvnwtFHTZV35WiiiQnXAh5SFN4XPU",
  "key27": "4CWRyTJ4SrUjgBr4f4Z46hwvvQ99W3eMzjvN2sXwusDdhkMCpNug34zgyucyKRmnZzEggkfMQPDnkxosVje8Zj4C",
  "key28": "514U1WfkeiPxb1wL4NWuGjG9MAj8pVKJnSKMzrudndKNkciM9UntqLLkqfTkWcn6R2zU1HfR3KHJucMXcUAe33mH",
  "key29": "3u8WV3JRNSftZeefkeSqbcm6wwCAMdYeuGESkXhw62qUhQWoptM7eybsUWqvSxnjVyr9FfQuvGNkRjVjvn4cT2zq",
  "key30": "39SFiKV3peXN6mHnLMdVBLbhNZ6AMyfFQnZjTQJPQUpLBm3nhoYd38vkRg5HvdjUPxcCmN8R7PCNpowFQaL2YTTi",
  "key31": "FU8QMzDy393Zu4oiVR1EuKdYvAMxB2QakzEQ7Vmg2rsugWqbN8wsXbp6vrwnQUuTBQbggd2qccdMR1BcbxutVX4",
  "key32": "3KskNkj5RBxBbX7P67tXHqtPTGpdWwgpybcPerg4M6ofBhK4UyrjZzRd9i2nJoMLKzm9W6zYF8Aez2rcLM7GHAs3",
  "key33": "2TRL9h4gbbVSdhCJvz4B95v4euqAMsEQQg9PQ5TV2Csv2FnwqWTGBPi2tNCAeXkX3HY43yGRp8A6ovG3EmFjzRjv",
  "key34": "36pfmDGuB5aQ55GEFTnaJxYZqAubYtGQFBLf7qr3pdR378d51HvuLEDyaEcL16gZW3s63CWwSK7tsY1XpxnJiLt8",
  "key35": "4CuqzAuQUkhrAkK1F8UPyV2agBYbbKhN9Rjabxk3uWExBF41DsnjFmQt5LPTAWn7p8ypLyjHJ8FRdT3137aZvPD2",
  "key36": "UHpzoU1kZFKz3yPgtYpozh7qQuNrVc3W4e2kX5MHotaFrLU8Rs13Fu9xcYUp5HcknTe3bUAX8zo8oYf4p6FGfYv",
  "key37": "2cH6TkwNfsXTUuXStb7VEbUbhFwLwvTT2xhvXn55fPV2p5cAby98E4pmyWW5oRDdhwWXS8ZGESLFeBNk4ZTifboZ"
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
