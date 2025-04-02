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
    "4VcuJfXeMfNDzJtchZWe8xb9ZicbXenDMWfUnkuXZHkrCbki4YHLmxbZexH4yQNXTFoXHbQL5ocPqv52amxD92V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3srQaPRSUcj3Bano6FdP2eQ9HpL1yDnsPa3JVmiUj86UxEyjAFr2sCWVRpSUvDMx45qkktD8YbVsvFZd5VaF85Xa",
  "key1": "2EUPpjoLPdVkP8yhCkgmf3rLoQK4monjw3Gvn43bTukSG3kLxSfaRNawxxTfDu4g9YmWUiK4g2KpB7K9h3UzaQzK",
  "key2": "2YB4u5itKMDDTVjxPsufnreQjXgsu9ytn5aDhfxu55yY1ZTR7eGgkHQwinTWYD2AY3i5QoGMpvC4G3QjyDNT7F18",
  "key3": "5nJ2gXRPe2qYNVHbzCTjDKnGA3RWKmtskbZxUqtnHGdFR8gRXviV2Wj3s5rgvJyxYMgtJg2ELXBSA6VA6EifM7jB",
  "key4": "5whTvMArsfGgGfxL6nnkahpHYVFZJ5tB3dV3zjSAKd5EiGY3exMAJXMKbK258x8b4VH48kuJB9PT8hAuH1eMiEdN",
  "key5": "3h3B2ccCuhAqECQ8f9PKP2qtB7JsRigak6kPfs9SnxvMrNUXkgems7c6HHh1DrSD9hYzoLP4HGChmKNELokFJq7F",
  "key6": "2QjLvR4en13DvG7SaP9P54V8qNrrk2UehCj6SMxehNYAR5y58aGpAWo4Tr2UvxeFc59Ngo4ctbM8Dtm2uZGGRyU5",
  "key7": "4N1DmJT5Vu124hUokThh6yi5NbuC2YV2JxEDLavof6enYChuCy2ttr79napLqjs3qSGLaGAm1fkp2TZ9yYPVTJX6",
  "key8": "61zoTZi2QkTRFS9PDvHYp1EEQ7ufXZU5qvw58wXNy7ZuHsFcxWgu36Gxm8Qcg9G8Nf3yNDzjdm2q7Mw9ZwXthJna",
  "key9": "gYDbygCQYmk2YKPvVUwPMkS7Wz5595wdeQpw5Nh3PszuzMK8LEsZHsfH5AKTVbzy4irnPN2uJRC7kCrQGRAAqAy",
  "key10": "5xPeJ411gDnWxqSSesAQc3Rs9cWDFfWWUszGFnDiLwz76GGAz7v9UCTe5CSjT3osn5964jpAretqcUUs7krVr6oU",
  "key11": "Mwds2hg7959Hi8ZCf8DYSkFgooXU9iRKCn5EnThXNwKWBNnRjMAxEY3MxMuhbvCA7ag9WrgA6wFprLDsdiXcRSN",
  "key12": "2inESgd1psZ91fUeaQVroFvTjqW39PdXQsgqcZLyUuhrarVTxJA7GxHab7sG63KzV7WuEVQgvGPpZ95JdWJrNWPL",
  "key13": "49BS79atRjZLEitGU5E9srRzv8325WY3KHzHv8wY3n6HPphSYc5ztKA6cxpCWJ1BwyVuJ4bA9Co7WRiEFoNr6kbL",
  "key14": "5w1pZf6Vj9QbZRd2GhSd9nwwCZXFo7WjdjRU49fKUU4wuQmAkuKkro8T3AG6ufaL6QYRcNJPFbfxRGUbEH671jTb",
  "key15": "3jaW6KFKEe555fZVziNN9gk41XU3QMQ5HYd4KEaXiGowQGvjSxZJojLfMfbSohibiZbTtnm1DmVNTxCUWhJEUaQo",
  "key16": "533g3emCTi2xoutwDHpCEssRayMnJXJQFrwEjdrjHauVwgg3Vo4sj56SPzeVRZhLQrkMJnfmC8ktCAnnpyerU8tz",
  "key17": "3bKUe6x1EtHMkUU1YuAiWNPpwAUmYGeF2rdUZrM5ksA7fesYVq7TygtxN2VNfp6UURn933LkdF6xNZjmfSWFRMyq",
  "key18": "3sJtjNgQSdbnWnJ7BH1vBc2S5HMj66y3y1GfT7VmK2Gdh2uy9BaVyveHMoFUqiExNJ1tcJMcMiC9JQtXar5HVTrL",
  "key19": "9cr3sm6TJjDxjLpqw2BLFg7byNNC8H3kHBuZfvxzPSjNXvFYz6JPgKvHsdb1mSnLkAEne4oU6cTNiMNznMJBj4W",
  "key20": "4Xe8yCBfjGpaRmY4wkVTsJaGR8DSYvxpp7ssdovRVx7sT6NPDju38r8pvRUzYa7bwxAXDUXodovRmynpeaAjTFqz",
  "key21": "46v2QtdxS2gMQ7vU9AGabfEaP6y3JTKM4Xa2TnWadSMMPvBegDPfATdb3Sx6G3cjt4p7Uesa7nyfD9oDTaqioKqM",
  "key22": "3jqqvpC4HLJDF3xdA4WttWjZNd1PN3FTgfpHcbqMpWEEoGME4UNgiRUmXoAvRkVeyvHC2pF3sP9LLq8BaNPZhgz3",
  "key23": "KUTp5FXQDLPci7q4hpbzLp5EhdCxMzHdmoYVQC4Th9A3nxTsZdkR7JySUT7h8xjPhJGwhXkZUREtuLFbmUGyRr6",
  "key24": "3Znn7gUecxU81YZwKfjao9Krf32MmGWZgo9UQhEbocprqiTuef3ZjGmHhXg9E9RdSXw1gK8hRXmgsteisMbRHLye",
  "key25": "3NnhHU14EpkHNKszb2E31RxRXfsnxkRv5AfeB1nNNYenR69ZZuMPp38fBjRYmdgoz1QoSVgcuMYj7oH7iMX8yTd2",
  "key26": "2XwQRHjyJ81387HkkntxQ5qZN9sg9iTas2q1j6FnBen22Lv9gwrL7UHsHCkF7ea6oF5WLR1KazPjJV8SgSv8yH7g",
  "key27": "2ta6HEAWrBq4cC5XB2MpdvxLuUSiLTFtJUVEAdVvXZRXJmBCkgCRWpEWnHnrpv2nKM9paW268XnrmFzge5uJ4nc7",
  "key28": "3LFBiSe49HAtzLUGTN9pcwDZCkQ5WKkt9Lqn4rBcxKU81iG3HZL56vEZ6kG7MQHW7XHv6GPZ6hrvGDe9m3af2WX2",
  "key29": "3bJCNh7QBaWzXoKZ3NLNGWEzig6Mt4HhscN1DewhUTKqTQwAfm2edPjoYahUep2V7Ti25PdAzVfCdwmrW9JMMNZu"
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
