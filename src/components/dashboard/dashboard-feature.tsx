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
    "4LQaduzjCznCuixADehxGz3vv7JdVTdA9FuswEbNZQoDW8gJBb7NSfmmUh2nErzk81FKrXVP9cHPrZoxTx217tKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QaXTmKs793fwKGfziSgG25TgJDVuFNrJ7jvUxvjjXSVbPw1SvricsTuxMaEq2UUg47qUD6wW6nBHp7vLYJ4hzuX",
  "key1": "5t8JrnBBPHYzvb6Pkw2W4fbfiaGha5fGsn9R9iLSPvBWe6yh919BE4vBXGhSaJkLrNTSU4FfUkhU4siGvCy1BAEM",
  "key2": "2JNsbrjK2nWVwWNiz1SyJ893EWbxvo9TVtD6RpSCZUHb6LwTagv8nhgBbujPdVWTQ8xAopMvhmRALEiDHTPcwpfN",
  "key3": "2qU7amMTTzJCXx6ZC53utASwWx14RDJJ8w96D6GBWoLfTX9v8KSZmB2UPYg6rD8FHc333BhgaZ8JkJXYXXMbs89R",
  "key4": "2nSXM7jHD7rnyzMEvrZUXTpcjyn8Zd8WrtfT4oFJWKfndkKB8yHd6qPDsqDejdzYkWgrgjtUUz4HVhiXAX4219iR",
  "key5": "DZBb3SGk6duvUUcMxu35UhasMGu4jHrMTdC8QAeTR7UuNwH93ThudgLVzRBJwYHoPvp6d3y3eZbWD3Q7WPYLV4F",
  "key6": "LVeCuW9LgLvnVaAGYYFJp4DVkNT5vk6RnMijpKWmV2kBy8EsNNY3LuAMwrjG7k1cWff6rqNYd4VVrGGsSG8nZv1",
  "key7": "5FqqARXBQ9N8HpjHEVdhuCRDE5ixfaUSfmhZrUumyvvPc617E5ZDkYupayWGrjiPY6pqk5NghXrKY38ig5mghYHT",
  "key8": "xxXWZp3tV8U59ZaYgGLgRUaZcYEY4wXS95Ad3x7c5cgYBa8Eua5gvXvuFstA3JuAZ7MbRPkTMLgbc1xTTZV7pTt",
  "key9": "5CGciTEyDK1vqfQxNvV7wtVidbBGYRQSBW9gPpjGTj17ubYg13wWddBA4sEmLehFAhwrK916K7Qh5YeiYK53Xc5d",
  "key10": "4gyPyBd6rnGeAMP6rsMzBYGQfMfbXAwPaAk26RZqF7JN8mTzcZixQidM952CcFUXGfHt1fnsqK3TvqhNYwePsQCo",
  "key11": "5Mzy9rYuZ3AxA2TVuo26Uu3BesuiY8QyLyez6TwHFzn622vjB1YaQNnaow63MKWzb3Ufisker8pUGRFtisz9KpKp",
  "key12": "5uCM4JDayQd53QZFwrPu77uaDJRiPAL7hjCvPSbgcuidedWXdHvvsSqDmzCemWWuPJkL4N8auhq8HSt7dAGjTWea",
  "key13": "Hua9PqgX8PLs3GF49ztAR1yuWtG6U9JcN6jAzL24mDvdwqAwAr21zZimYUYQ8YU5AojBzxHK8wUrVELLASv5RhP",
  "key14": "4eiF43WciCjchYjaZ9cjb882BLzmRAmpWiHPP4dfrnJBsakAzDgoy6AqqVgbBpdMBJfoYiSpYntrRfbFCc7hxQCe",
  "key15": "zZtPUkgwPcT2aTVdu8BFZPDrAZH75wfnt7ZYDSR6xY6JRev21d1fm2AWJMnGNwmFN5rSEXQboPi5w1QPnH9Y7E1",
  "key16": "3ScYrnsS64j7nec6M4GSsgjXY2K9PhWrqkD4h5P6uD1E6bq67XWr14dAuaQxQEFADxEd23abxSu4nj6WpbEccxQ1",
  "key17": "3wcdiBPkgYEFMxAGReBYbbvafd1s5tghVSfASmoVQ1ErxDvZ5Ning2stKhTr3Rnqqk3FFPZuoGTizG8b1BeYhW1Y",
  "key18": "51GbjRfTmGWgPX2p73WkagTmXqme7kbi19BaWTFnwJPogfDp4sUxNvhpSPQqneUbYRby7SfTHYF1FvWHBC7XNjW",
  "key19": "3T6Hn9HKq8GYNggDv5ETh8Y3DWmiVFBuWMSe3531c7RP6EVkimk6EYLF6gpQXRZR7KDUFF4q1TtPvDbCMk5qUCo8",
  "key20": "E6VUtRDb3BHQUQHthemCiSSzh3stCwzjRqD3QwXFrrnLixowVK81xcMEKW3NafgxLNtiTZcRigL1ekSwBmsRoyV",
  "key21": "3154HnAgpFpuDG6SvoyYeP2oDvDddr7qMLHs1Y85SgS6o2xQYSyFqdUrVR8tf4WeAm3HYgaAo712c4zaw8j9UJPM",
  "key22": "5eKFjwGFLy9zeLgpYZ9g7FmvnU1JCLFesdsiN3T685LHFvjZWDwWssomqBFmN67bRzzL9d1TLWy1BmZosf2S4eNX",
  "key23": "4yQSSC8Ngn3ogHA59bH2BZ1d6EQdMFqDNR5nABoT9oeHxtAZJkzrReL9G1qENVxtUzbeBcRAh44NEo896G7q4tYK",
  "key24": "2oXDo8s4nc8ktt5CPe7SgjUbH5XtuYiBcenh9p918A9yfRU1tMG3dagmNRHz2awnTCkEEAp2qFM6YWtWuYJukLv8",
  "key25": "4khTZ92jScfBnP5StBEiwo3e9cYWDMtpSLdPhQ5nERvQYcHJ9av5n8Nyw3qLBNk6PvwR5XxHab8t9BCnENbYyaKr",
  "key26": "XddjZgFPj5kdyot6fhAvCm1YJBhdhuRqzHpj6H7UXfBAr3iaps5n8QjrHCtieA5Mye9TCZJjZntDyiwjfpxXiRo",
  "key27": "32wdymsLN3ewux9UHuKxknr4Yd6Fbs28FJn5ksFXuxXqSNw2cD2zpFUs22EVp83LvyrMm4CvGYpNje2RinUxZ9FK",
  "key28": "bXSQj7n7aTLn37mxUphcxTDwb5ecEwuDMTQ7iydCxwkcZ2u1uBWjtbT9c6ugGCurZuMixy9MFsXk156aHqsfdJm",
  "key29": "4EajeL19sg8t7a71YUiFDtnXAsH2ZHWUHxFYn6N9rkM7btecMPJ3BpFMZdTyXizDeVBYv8jkL1adZZfDyb3un2SY",
  "key30": "5ftvAHjXRkgQdUVgqg5opTrFhrVcaNB5nyqyTt5UTxVGhAJEby2phS6KFLeBCdAYm1pnTLBxNFEwuvWocxA9SMJp",
  "key31": "4NvyEqkWpme3AeRvqohmEPp65dxMBsZwWBfbWPKSj1xnXpx2WUpVesh1tcPsxTcgPxWjA5TtnyEM487BCRbQhCmZ",
  "key32": "2ntr3SBS9hqD4JPTuCPW1PnppxALNggf6KKcVGBC85sUhZxRf5FaT6Un5daKcSDa66PKMXRSLfgLniWBKv1p23D7",
  "key33": "2MAmj3YQNMQiazkRvmJTqEUonWnRU4o4zH6qHQxd23MLU5osNjaXrssSuGhC1pymGQZ59nuERWsBtkss3mo26AV2",
  "key34": "5w6TsHCozV5QKuUyoyhhXgpNpp579PVBLxXmSjfVmDFy2mvPEfbV2qTT3NS2EtkgsfsDNt4JMa3tud5onr32374M",
  "key35": "2nxuMJeCcfLP4zfkGURuy8qW4gRDnasm7T6sm3GgYhCgUfnreggm9eY5XC8MzPjN1A3hZDNiarXTX8CnrafT3niN"
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
