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
    "ZZi3s65rVSajsxiwQz9T7pyjMUHb6QeKT52WyXfXrhwD35CixApgDcSx3Y7DLVGWAMHN9mvxxSS8JSt7A8t66z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZnMqeJC2sBvkuqDJEdpf5Ly2b7sRpRmDD21DVEB9dNhAj29TTZEpdyFwSdJJu3WzTt6RhoE9By6hAMrkgKgxCYB",
  "key1": "5g11iV88hDUthtdYAZ9JkuMWBYHVof21uWZwGmdpzWSVv7bR4VQ2TqqtLeogBBVejKz7NdXddxDMEVgvKbfB3A3G",
  "key2": "3traMFBuHNBF1TzUkcXBTJWf2HeEpw8cGcu1TG464Qse2xX3UGQsoBNheVWRqzdnegxxeiuZZZMN65EzLWWuc9v7",
  "key3": "3VpWGzno8ofeq8kNcEBLyEVQX8LUnLsKAyibTMic1yuZAXomZkgZgnPzjQET3Txq8t2Rq3DJQSuhPGjWUynNMQmZ",
  "key4": "3cHnxbiwYSHPUSS15WUQej5bGUwRFVQ4yV6rqxeGQKx2QJEMaoxFda7HW4m7bS6TiGHvyVD1ejyZuqa5KW9ULCJ5",
  "key5": "4WK5KrFwVzxAVpV1ekLWEi4wBxRVP75E9KRTzJxin82zznnnjbjGE9Q1ynnRuuQX5v2JuFEL5PaF9iP8jB5gYMMs",
  "key6": "4aKaAbHAPLzPkuzMUXBBFKNzLC4zayBEoNgFQu2aCDTGh8s6AGB7JpTcUS5T7PjhzYCB8rr43ut7EWUFfrJ8rmLX",
  "key7": "LkWCUaCSGDxyhoopUJx5x2ETcR8utEEXgiY3UWjJm11tY84HFx56wCkZ5vxuccRQi9UUxLbekK7kth6Bn3S1bFS",
  "key8": "2UMpWmgRmMvtyhn3U7t6JXgCMpe2Ay9y7JsZYfsf1fP3SeWTCoJaVzfdsjxoia64L6K6zFu8wqK34WZ7CLU13h2A",
  "key9": "35DvxbS1d2we1pQKTnz3EdCvsi5SG4vnvckR8fsLnd6MWCDKkLCy5RXHf3FbwpTwdVWkT5W7SY8nxmWmaefkGtLc",
  "key10": "4aV14cVDauJfxWt7zzwjD3tY4GD5o9Wj4QVAkjPT7Ey2Cw3ZFz75NZpAdwaCZbW5hvQRYYC6xu2U4sV65L68ukZz",
  "key11": "4jgbZUG9vhYi6R8Wsxe7kAd1ieBGXnbYoQJEJ6i9VBxUyR2RNnjV8q9TJ1Fhq8q35cRo6DW6Qgjmm9uSD3Ces5MQ",
  "key12": "33t6PDxbybU48Y6MyjkCucDq3opvgPLoDKQ5eLvv9UC51XYr5PLEgX8kHggbN6wvGhJsNGkFKc8ZYF7B6VKQAuhf",
  "key13": "3oRvC1B35gEMGsNgoe2LVnqb8TrNiXgELkbniJn39HVGpXYdfvuKbbCNuEqkp1ckdzLUtNWgAMxk1Mw4pBwut76z",
  "key14": "5a5Ju5y7fnYGKRW9AUMZss45PcJYR6WhNji2ThWe46H4mAASPKFarHt1gxZcFfzZ4UutE92iFVpyLXEyQsozAYpT",
  "key15": "4EdNkTYqoCaqLoZM3rZzkD3g73YggYFaAn42r8pUNu78SWcjry8NJdTpXsYLANvBF5MuWNGRoCWcehjMf6KJ5SF",
  "key16": "4RZAnezJinfdABzAn7zmscbrqmSk2sdksBcH4PfoJeMNEj1HtnEcHWsNmDiGf7nKW4PgpguqAZ4Zzi5TC38anTZe",
  "key17": "3WiudmbcxHhkJKqRqY8CRzi2aus5geH5nh1uAMWb6o8ohKTQBTERF9Qq9rPdxeh3y65kcaku4Mscvv8cZRYPtX9i",
  "key18": "3oy33JYS1i29UsUiCPQSZmxwNZPMmFa6hzgXKvPpV7xDWKB47tc2UveVXvpYvWfcrpBoHcgNrmY1HdjTnjMwDDKk",
  "key19": "3oG7dVwZZnVv8nFFcVzygRohH3cjeK7Yu3Nr56oPtj5wcWTJi77PcrCUj9hYEA3o3aw8vpys7g5BQSxktPS9Z6Fw",
  "key20": "3cKRP9mummvvWq1gFKbUDWpBDdZvYLvzZk2eDdczfWJ6xFqBneBfMZ672tSmkm8oobZdWEULXpMV7xtegWAmfoNW",
  "key21": "3YFNNEs5eR9SnvMkUeSkFGYQKg7UQrV9m9iV349gzwqjbYj4pju7wC3bXMRwkmpsmjGUP8H6KAwswvnoNTi9vLG8",
  "key22": "594XxVH9bkqbtPuZeejH7UkL61QVqKZcSJs7CneQ3VysMj6fuao9EHqpweAwS64fRyirxnFrPmfk2qgi36owWKsb",
  "key23": "4mzS6Jzv4irE3KrjPm8poeGLuQMckqLZzJesgrpq2fH6pYpwKued4xepDkvDbFjgaVb48K9R7EoSWRNJ3FZjAcVd",
  "key24": "2rZB18w1WBGY6ua9hCtWVf21Mguw6s2puVcQFq7SQ1roWB1Dz88AZVnwm3UuGTdxpHYjJ4ykUzu4HnZcT7BMwcJQ",
  "key25": "5M8JPUTJtP7xar2HnP1NvyWGShCpUkDrj4D9wV23xdi6iH48UQmQiSs1z1LedzQz6xXCFHwSfpLciRs9jjMPuHgR",
  "key26": "2aasV6y3T5W3FMCbRReQMsvA34jPmuyi6snzgCYBPJHrFqW6FdUb5UNKJQpkct1JndQup1LFDF1Rph35gH8XM692",
  "key27": "tLWWxqudFwXpsQA8a5VA9SfndCvj3vaez2eqXWACYUHMtoPWn2dBbKUzZwbHEpAXhEXfE1CA8rXB8pEe1hRQCUf",
  "key28": "3gcjLZhHjYzurbSDNkSsfGKnq5wXe3kyzRr9MocVp7mQ7v4dpQQ7stxth9hikdBcLP4ST2mqkCNtGr126AU95GF"
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
