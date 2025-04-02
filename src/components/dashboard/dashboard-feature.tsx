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
    "3gGHS5N6rytckqS7WLwBfgnFtSoFPzw4A22ksL1nh8PakQTFSuqgButXcXdb6vRaSBCgxF4dAfeLzKfGCmEHYW1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBLQfZnUmKDqS9rLQ9WGThBmJ7omr6V6YqFsCzeMfNLGgBsTdaULWWyHu5ENdv2DCNKtvmLe4mZVvvGcSM4i176",
  "key1": "2o6p3hdibvpVDwkh4n2NUa92Bdfubtj7udcVZVD6pvKdngnTacYZ6GDCZkvSd8DXMGgqQtQQjRrXdVY94BT4Ny7T",
  "key2": "3dJdXxD41kwrHW6U7sLmJHuCXfsNqRyLMixTnzkaAo5LAnmZm1hvzj93gD3Yk8XcvaySDm58nwNLLU9JbnT4g4ix",
  "key3": "3fwB65TabofcTdy9YHNGMhTuyJmwmBwJzCjieo4hD9sqUV5GDV79KbbGYCm1Npk4S5j4zL1u75F45aPKQzXtic2J",
  "key4": "26dqSVDcu4YXL6EQngqHeEPdKAheV4junE1sbrpxwYxzj5JSNeYo3jUpoeic2TbnBdCtRjjCTvL7QSUPMBNWTtDD",
  "key5": "3SGfmrEAKYhmPCNooBwb5CSp6SxJfgPwaWLNAFGdKr3GaVSVKcAPjbzDwGf84cDuWkAKHGALA1Ax8YPm8PG45Rn1",
  "key6": "4NGjdx1HxhGCSnsBG5gxafodF45nihwRNMWspoqjCGiJ5AEjkmTDmG2i8g5bisK4V8BTXqvxQuES75GAVG14GbNx",
  "key7": "zVeTC1esQGGsaE5HP5y4g25qEBv85VE21zEEoHVxGUN3MnQFi3dz6H9SiLAsJkTmuVttTWTfd2ZuRqJAkWkhjUc",
  "key8": "2eY6V55LNr5arnC9wheBBAV9xet2GyJYTPinefgMffqsLa8PedQtf9haY5JhMNJDvQjaC5A5i6toJLLCGMZMcvKU",
  "key9": "5aC7kjMkqz1fZUcPhaKC1Ldw6JLh5K7dw7VBz6bEZoJGWYmuHkL4tJBDwrEjxh8hLvJZzn7NgdiDH6hwFNGLByQ2",
  "key10": "3jVuAqmgCbkStN2y5fLnWFfuWB43qYyhcpqGHnCVKNhry3jU72jjw8uhG2vNxUeUriVGwG5TPzxnwQfSBTHbBQic",
  "key11": "56eBdw3HiEhJ5ddmR1M9g6PaLwE5jM19WhxKyFZsuuG5VUfGVcZqjLCcTYaTgZYrdUh7W6cdSzoy3KJDEaSiCqNU",
  "key12": "4THQwtHYcfaZNCZa8k141eQpJ88gdMhpWs8uD5BNHUG4Tzew78bv8mFByUa5KKqr2jjmYSYHBQdDoJyqYVZga8u9",
  "key13": "2nsv9Cx8ikfSVM5yCP8gC2YKUcsXSyum9rx52VLAU6zpv3dDdpVcfn3woex39EizJobWNb8oZkFe2LUFancc8gZZ",
  "key14": "3pN2WPJpuTxfoYA75oCuJu5xA7bSbfPbJvrX4PNcR1mmwFc4skdGYf27DgkVjH7rDmHMCpoXH1tdYxQdnfTBkfaZ",
  "key15": "2zGnrs5r8rDKb9LbQMsYxsQefD1KVwmUfmYVAX8YJgp56QmTiZTfcamqdzj5tGWFHCQs6xiLCv4hwnyfWr52XxNU",
  "key16": "2TWGvUY4xu96aqJNfL5SEEnnqYxLndyhcvJyeFbyPMJRHyEip3mNx2cEFm6JAw711QMT8KzNnX92UABRn4ju49h3",
  "key17": "4q99c32KbPojQ27kL8hFmjgzEQhAw5LnvLrmFi2FZjUbnUyz2oZTjRPYZWTpRoqnL5PmjD2YWa6RT9razqam35Uf",
  "key18": "5HutBQYDe8iLCmqtcXpCv84dp2pLwmmDvjEvYsba7V5niZGuH1Xw4kRqGmWGidJvAhiRCjnxvwvcpYA6SShKYNwz",
  "key19": "4UQizpUoAVnUMovBYgZTwbnFyUaBBb4uTW2HiUUJNZnyTbZqN38TgT8bF9TJpenPkMmVdChMUT3QwVM4gDZaSSyM",
  "key20": "58R5jBJtdzKFj5WJxgyuZ564z1seFjUFuGvaoTCrA6ZkwhjehxJa26JkjvyMhoFGvMRuyecx8UgQHwqwnHuk6Pru",
  "key21": "Ak9npkSN6d1aVGCv1WVWgk8TAErDkLzpWZmZxM69Ss3iBi9aQfBudqhsYbePA7XjUpt3RFmXBf7yNHezbjzsxYt",
  "key22": "4kvgyTbDG7gp7ZaxN5EJcr7pn84Vcjp9h1SSkYxUSP57JDTNBThgFoXTUuHs4M9KSQXZGqRRZqBe8u54sWtTnJD1",
  "key23": "3Wvov57UdeNKykWjXZwnhQsRoxT7aa2LGGiStuXo2KMbUgdpAGvyRAZqQa8sKhYq7sFGv42B3w4MdbTJv8tvVqoe",
  "key24": "2pU5h7edyC8ZkEJh5DwofyfP1QmBuWpytB8xrWtV5MPfwDsB8FE69v6c8T1q1wHv9S9KpBfs7W5tjuakiSeZWNAS",
  "key25": "1SF9itkkSzCpTQWdbwgUWytUMgpnWsh6YxAL9ZNZJ5daYuVpiPsf3kbohipk7rh4SBHk4Qd5jmAiuVw6V1HK2y7",
  "key26": "4tLLTaizMXkHjJimwcEQD2Sf94iGeipybFg9H33kFoEDEd4gYhFh5nvUpWTJDkC4pLU2snRsyhU44pcpc1BtNdyy",
  "key27": "eyPFM8xwK88WqKMGct7tCxidhhbLVbLncEB8Y62PUHNYgavqM8yg6WAgXZdVwMZyngTG3bcT8cAAuHSSycgHPky",
  "key28": "3QHMpurSADQYcywwPAbaLTB9fQUJmrCWbZzYcyxWxRNFZQzdYWaxfsv9RpRhinGao1h8xbZAtjw792VwMhyQCSxd",
  "key29": "5MZTgnYPe7HQD3W3eG7uWXZFZcC4GsD6RZZDS8vawfSD2JRqQigyHdw6kHQBc5eBZmyvcyRMDZYYAMaD5ZYupFRs",
  "key30": "3xvFnxhwdb2v9b6UBk71WKVXKhWpHEpX9PLYXVrYNJ7Zvh2EA6knnyAMBPSrFEAmjfnvD9kYqc9Jg2bV7xbYEJ6o",
  "key31": "5Xb5ujVa2E1RM4ktczd7Mj189AxZPnpRwQQC5qWFpDMCTV2YAq5fzbT7n4rsnjvJCVH6r5RmWgKVsiekpouLp6Pi",
  "key32": "4RuRX582zwYBNcaWU27cyHrtHrtCjbjGw2ym7N99gztARnCMtyqttxazfFH8N7izv3AsuyTjquEjae2pcXHL5Wi7"
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
