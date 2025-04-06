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
    "5GrjVtk1Dir9sz1XFH5guAjr9YxLksN7ESmhUDxN4TGnTbePFCuVioHMpK1aVzNp5tmueXwixGx511ATboZvvmiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUKJ3j5Y3wg81mZ8oQS3kUZQAor8BXA7fte76LDdoCRuMMyZau6VRkMpRLkFgTBKZj8r5qw89yWyeQ9G59arpPj",
  "key1": "NKYun9VBSyDjXRGQNXy4USCuemv7Z36sotZQVm1C5VeRaou7gGsMCRiZaNJxdaou6K65HZF9gQ43yopcADrJSzg",
  "key2": "66aCRY6zZRzeS7fhDEd36PA5pzCKSDH1aNVwn5xdi5sYRbkXdBEpbJGc5xmFVGuTYhhPnJGXDLeVjX6iA96sRnH",
  "key3": "2etqatz6gqeBV5XXXazVHHyxEEPfp1VRP9AcuveAwY5Fd79b9JqhCjYr2bAPyetTFHtVcmKkzHGwbhxqLeXTSjvZ",
  "key4": "25m6fwRANqFg5eLG8YnXBqAuNwNnEUj3WWuArPMrAA9vvLuVo1fT1XFYyKPhyKmZmrPURnMk2mWkehAGMauSgN2A",
  "key5": "5STVUXP6z64yyD22nHNMz6bF6ZRTshGkMYTqmA5mrtC23XRjj56bxm6h3qcJ6x4jForimgkTeh4ViHYPKKr8tSX5",
  "key6": "4pb43yCURSPkQ6wBJEKVCCxR2LxKxvAYhLGTRE7JZvTMCws2N52QbUHJ9qErdNQTZFUYih1Vq6UV42RZyTXAxwRS",
  "key7": "282CsL5mJMTEFLHvSzaC77X1G4D3ssYGW4ySrL8zvHRof8bsZQgg6ZKNyXvccMXsofpnXpoN3sTQ11sBmAaouESs",
  "key8": "5z6DvNjYYLzRLmrsjieZbeoyZWxE7wrn24KzAKWurgi1KQmHntdzuDzVw47wFQ2JpYsNekxJVZ96NDkzuyzR4Fdf",
  "key9": "2sr3rmbE5NLJyx6MpxsbLPMANrxqtbuvjXVgFLGBhBXWvCFW5Eyj5QfewPDHq4GFprohEgZYQ1Lkv1JS5xoBRh8K",
  "key10": "3tfMmzJT7Kvs936w5DTj6uURDkRnLNM81iTE7MdSTDmKApr2rss4Mc312zZYhYK8Jkk1qWkMYktnDm2QHkJjhGeH",
  "key11": "5BwEiH1TP1oswzUKjHxczWzJft8xkz27VGLFmKEYD2dpdDZMkj38vky7fpUT3EQEYKtFgaQgnEPv3LQbfNnYHZi1",
  "key12": "3L9GVHBV9qqVRf8EYq36dcHT3HZd9tokvGZVvMeWdADuwGZXwT7wZ1w9uD53SAeMBu18CmUHv73o8Zz6uNfQyk35",
  "key13": "25cTfz4Yn5GLcxEDxBfqoju4zSKyVmaf895PjEY79W3XSuhBYFs8dr8qzeGGzokvFfdCsbiUbSK8kvMbekFnYPVU",
  "key14": "5eWSvPER68Vxe5QsnXtQB1YZ2aRw7e8VbSENDPqqD2VQ8eHiXybB2FWnDRiqXsCpm78vnupEdgTxPH1vHo7DmzVw",
  "key15": "3RuTxfzDhWczxrf9rmnNgd1zhgrbKtRJ8AyU3FNmFw35QQKi5BY11PDrKkbLb3yk7x27d2JALoZXAbatAm6hDSvw",
  "key16": "eJAJJy7X7XvPih6BwMRaULYBDkeJ1Vvktec1yiK7yUsQ8tZoNuhGwjfhP62xh68nwvt9fYFEWspiSyidfh3otMn",
  "key17": "SMkk2gNaBEUmsZ6orNveSunR4zgymcMZ3u6HVp8q3oxckG4HdnFDzfgrnKvSvEDxVqWmc9vWehpCJZuhw3URTbq",
  "key18": "fa4MUXn4FzJEZDA5bUxbL59kXcaQvUScpMKLtsRNHknPVuhf7fe63MbkShTonXXCs7Vq74RiH532sxuCaVaMggJ",
  "key19": "5E728dyGvaJBJZVhH3jLBJy7YCvj9ogW1QnfFaaofMNfPJBWtydF4w7X7issHyCPkCwtidx9sNJzAFLWG9XUCSuj",
  "key20": "3hwa9AfoyTjcwaGvCCPpAx9p8KJLwhRe413quD4erW2uVbHu6sERuuVMUufE24QujcS1U4gR3Nk7ziMJdgd88Eot",
  "key21": "5gDSKmwJSpmZQEb1pJ7RbHw3S91ZAVqsmznBaa8BMaSuNf7JjWzgTAXkHKuQfZoqAr8MJsBCqYEaobCFFY4dcmPS",
  "key22": "chZq8ypApie6SQRBrcVXZHbUi7t27BWvgZnCrgxkr4yanWY1ZQfxQTNPNAAx4zAqz7n5CzXvzQoQDirtLZrRR1d",
  "key23": "5wGQvgiGWMDtCV3KVvjNdW2r3gnNH7EMNYa5EoxiiXtYxot2E2UoZzSSMkr1LhKiiWrVvobbwZvbW7C6rKQo827C",
  "key24": "3RhPYRe7x1xvm4weVSKx1TE6MhFgvTou3zYLSg49cpiUBGfFzHwAWn81V4wKAy47kVNDToPwvo1ZvTAsH1fdberF",
  "key25": "4AEzKGfkncHy5P6LsvYk9AGWR5KgA16iZxVwxGDumebMiExbMbkzKTG9S1Lr1bFy737C2ZC1YL8ACr4aVM57xPxJ",
  "key26": "3KsWB33NkN4NqikzSrr8YjiJjSErUDzMXLQMZh59LfrpQbKNNYeh6n7YeQUE2R1kZxbmFARcGtZeqZZTsFL54NyU",
  "key27": "4osHHndt3TzDvLucD447W7GEpq3Lj1YneoqEwVtVmiYw87KE4eGP6JgmNPnmvsGGA3XiKeRMpWkSmCvg6Pr7XzNr",
  "key28": "33sW1LnL8PBGNL2jeePpbfHaWUgeDVzrXbAJMmkSfXRzRQDsdjrqqcafLkrr4ygKeJ8Vo9PcLXfzBGHeqGuBWBas",
  "key29": "USKrbhSYdLCRof6MpkuLZWHFz4hxZyhLnnfhPSWWxk4qSm1Q3LtQgM46m2TrasLvWwT7LuBqw4PxKysrMyM2Er5",
  "key30": "Aw8A2m6jJyZRh6YGFgFRUqRFkhFMr4RrGJ3kGxujZxAxJgDYpbNyDQoWDKp4Yj5tAhyw3riMtBt72Mdq2zutYdD",
  "key31": "3RypcbLrjacXkFLuZeHtbhZAVyLxowBZTfH95NZRbaTWR8tu39urSKrg5sGBuEFBjVzistAHBf6GRVWhWvMAseYg",
  "key32": "35UDkHQ2yZV69h4HXN5qQ25wvmn6FdEVAYGMFCBA6Guw6b4E5EhwDc1ZNYihYHESsJnJAFxj99xdcYTAqNmUgfiU",
  "key33": "4Zw361oFDJuRb1ZhFYrz4EK3nCLRr2TtBJhjUqoSWvYZtPQkvZtsWyeTuhjUfMowbLQ6opKwRHNaw4JSTFL1ycgj",
  "key34": "5TZ38owFbhjGaAQjGMzznxWv5TnXBvsAaXm7nVduGx2FK1ubTmb26pyfnkiXvu9quJ2U8LCncVc2j7EizXu7VKAm",
  "key35": "2hYH5AnuTQTsYx3oSC99BDjYJRBv9J5US9SkWXvysnnKscZpmgvFbbbojqvXrmeR47piMv42Yji8avavrMbqdEeo",
  "key36": "EpSs9wBY3WaPS6ryZNGuuHeHcR4jvkmLFWK2Kt9M5Zq4nb7KKYAP3XY6fJ2xT4d8urSAFTsRssEmvE8XWSv3Hda",
  "key37": "4Jtnk1sMdzygPaJDQSighrJT58GgW1tu346JteMJTxwzLNMAoCroyAhPXjYCL5m2SohDYCUJEttbGaHYZHnrT3LM",
  "key38": "4x8qG2ePBAFUkwKRcB4Ln3q9EAeaPUazumSU1LJXhaphMXWAZsSwdFZ4tJR2d54sVuRwimBmP3H87E6bAQHqFPgV",
  "key39": "5H4YvrHSz3QvBmdedTZkwTKKy3Do66cazgzZq417Vjhtuso73hMi1RpNWzTGDHdwjzYxydTUHGafXakJo1BZFm11",
  "key40": "3cHz2wuSAsJqbe66Pktua1mwiTtBFgknkZskPtJHg7VkAknvDVMGpEmm2rh87LzAAz1NtENL8NsZhQk3sbLEuN4p",
  "key41": "65UyH2XZxKWd4xVnaLCn2V459mDPGWMhxUY4rh3pM558nFeJTVbMgcEMgYDWG8S9fqtF5M78WYHLq5rJae9ktoLJ",
  "key42": "2umRmp43FiRWXcpT3iVDcxEfdzMvjfmMyDLYzSj5gWV6aq2VpekhobQTwBnvbjrAqquknEFU9TPhrKhWGZayBE19",
  "key43": "4e5vk9X8DxUhmC3PNB5AcEp3a8AzXTLCGvCa8VAhWDjXurYYgAKvJD57RTSuQArEG51snEh9yNX4opFsPgpmfTGv",
  "key44": "4iGaA4KhxjnfKm3ES7aidfkJ11kXZ7p4Z29mLGpTTmAFcg2xPkJWAjMsDtBCaiS4fQPbK8PidgoDrfYvTx9NJejq",
  "key45": "5nzx3eCjhviymhB28LP3W5VZZuozaPpDM8ES8CQoaa4vEJR6rnnK1UbCfMxjpkYHQbNsdRFHgGYsdxrWHfvakw4X",
  "key46": "2QGh9t1JJZEqPQG1mTxuaaLbkPW1H4g8YKB8d5rRXCWRvUYs5fPnFbwycbmPKv3ebirofVuojb6rue54CSzcZbHd"
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
