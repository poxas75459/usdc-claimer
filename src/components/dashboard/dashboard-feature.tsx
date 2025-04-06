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
    "3yPdgcpRSyV4MxoVevdg6q5pynQmbsWyy9RAS7sQF1xM7hHu9erwUVxrVq2xJ33dE4neNFN3oNpDu5tPbTJ7vPNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHn8K7Z5twXc5djMgVYLSLujPBufhVDjYVQctUJPHUHexJTCvtcrHc57NuhtxeZAWYGqGy8DhiHwLinHBe6Xme7",
  "key1": "3vCFkUXs1Tfjq5uLQzsKksJS2ypBYzMgPho7jegzstEgwecczapy6EPKJ4bGTo3TmRGobspSFgQqQM35VezjEfJ7",
  "key2": "3jPXrE3DLJB694sgRcLRVr4BDnV6X9UWmBem38urKcf33CgW7tDXVERM5vv5QPzpgTSugU3JoMhhm1FoT57YHHP4",
  "key3": "bk1qF4BZq6UYVaGA6KvoamaU8P1Msrrgk9KfuDqwGJrEHhU2zzwHhkDkhKy75id9BLm51SmRTuBebzif12Cgq73",
  "key4": "2Mrh6Pw94oKJsySwMA7SnfmAZAyXBx1wzFNUt1VVvRnr2QriCF3VvfgQacYYaztp6nRALAZDiSjJQGMs3rhVCc5U",
  "key5": "2t7MzoN4oQfhtU7WqRYLTsAK7T11RLczg1rZTJrrUYGrypfR4hU6zKDsfxuRmJwc2XZ5ibQYJNMm1NVcqU7fecfG",
  "key6": "5BtgswkB4KNseW4ZhCYdA1Hh5ifZcgK4ezQTFXDVVHGNgZEZ8iqthKnwhCV6JkfbhBdTg8HpbDZpZu7ZV25UHYm",
  "key7": "2KpHfYRR26vjW1fLjBCqXXdPNmt17MFf7cMwwA5mfzpWu7KZ3uUhpeJLkibct76jMUQLtLEG21Rbau4GQdEYWLEi",
  "key8": "2BZcVHZdmWsq9rykmRf5FqFrxr3iAJ55jA3F1KF2R8hkk3BzGhQmkkZ2UXMC2qhUyrDcgdgEaArZEtRwPjQuYLkF",
  "key9": "4MSceRHmLwSY1MKmbFdHCBrhg1dcBQo3pjdARk3p5KUdfWGoNpSuENtipwBv1TNyHeLLEmKrFXSvCtwjXWvCTtzZ",
  "key10": "3LQcGvLGtKEzyggn5opibvQzQSBHHE2jZfUndEetTXCCheQS51SVceWH5FAhAEEH6c9W6vrJRn7ZqGk8u7TSQg1t",
  "key11": "vNFdnppqyd5T5zd4nZ4dczjiTVjfXPtnaB6efJ7vMFXdjhTMTgQZ6FGJk8qXGmjkXQzR6XNKpTokvHq1EScEX6r",
  "key12": "5JJx9LVQ7w4Tt3Rd5QY6NEdFFWpUJz7akbRkPMS3jLUP347HHjgb2nUuSmMbXSP7L3cuXnktywXFnJ76nQcKScG",
  "key13": "uMqiD2AVoqqFMFEy9ex1LH3NpXCfWywvi7cARrH8YE7p4auXV4CFJgPhiiQ6pfXoRxkUQmHAKaHX4sxTKWFPSG1",
  "key14": "4pFnX4pchyXq1VssPAeqRrxjJj6zRUi6jawVMssbFUXxzqcRp4EiAmUUi1oN9yiPPXfLC37gnPUDy6NS1sZ2Yhd4",
  "key15": "4jSnm7Z3d2oKv6wX3YLaxQ22tK8vAKRQfGDDnorXrzTNSrw7kwtZnjT1JyikYeoeB2EuVJ8s2mL4Upmq16TSywA1",
  "key16": "66ETgyD9AmCfC1aD6UAJvwYDQiguGGxdMNZoKYczyo9UvzCaG68eJQFPMUyxJmmmwCycM3M17oA7u5ncQa7LX8Cm",
  "key17": "APzzoJ68TYWgCuWK8eBKGp4iiAo3rvvFTyzJ4vngGA5L7P3GHM17FBiaEnCxBSCmAaKPRbCPvK9RqcvW5VouNL9",
  "key18": "JaJmx7P8vS8LTg5oXfyzTcEGtS6zm7RPRdbwHLomipJJgwSdCxos7ZVAZYiJZeJppVnDar47iTJfFJ36r1TXbXy",
  "key19": "22UfjYfSGAZKRQQJspxgt7uZqFQXBWFhscybjmG6YPmqunjUN6MwyGjvb7t4byNvZ1uvGXLFZv562uJ75FVrFApi",
  "key20": "2S3c7DGMbRTqg4k3w5MztnNczSYbPtQeFwQKUgJDRf9dkkS39WwBRHDkcJniNaPGxsLRuQYXz9yRKUNNeL9DCYa8",
  "key21": "2EcVZnJHd6QRR6aAxvwK9hFUB5iQ3bvEWzhUmBeWrtfsgkNisUsahXTDDfd9zmz8UJxbYbDeoxWxNhf6VmWXa8R1",
  "key22": "3Bvy2MGWQuNFmWTN86reUSFAGZyhuK3aZCYPEVCh4GoX5apiQ1PeFFZZf5QKfxNQaxDehD3qisDz73CES69qmhbx",
  "key23": "kDxtbXT4Ffvfb4YwrowytXZGkVqmRQ9KYQyUaKi2uBEorryZnURozeSy4HhDPoT3Wfz5sQh2WDBfZt97Y5wALeA",
  "key24": "4zvB8MhhUdDfD8zA2FPAjgg8UC5CGYmZHjrAYW5nnbdBNNwxveneAyd8tbjHFWQawTLQP7No8mszWmE9VEXTqCTD",
  "key25": "3MaDsCt3Y64CtnPuxZp5iKSv3ee18jcA6eYarPU4uht722t1ryC3UvpXzaMw3uodSZkmQA9Z1Svjg9W1kABDKvjb",
  "key26": "24mLxHqZpDtKbikc5oUHDtSKQsRzLXQ6tQwQhVuFjAqfBBK42Msii228rxHCrfuQJkNneXdGkEdaAndgTkD9q6Tw",
  "key27": "2s4wzmMbKJBsVRAPcv5gDAgAHRAiFkzanp52xdrzYioJP6gHh8CSztewZqBWJS57ufizbtFHryF52nSwmYT2jB9h",
  "key28": "o8gGfwwHrZvc7sfUCLToVaqr5CPkHUJ5eYRAYjgnSSFdB7um8yAQVn4aL1sXZW3UiAeCazT9RFw5q2GBXb7yeb4",
  "key29": "4NuSbw6uNwGdFhLAt9WZpadw5dEJJ5GsRuVERr684Xrhgti9Uy4z5v95AxB3i8YnpLEasdEbJy7i8coisaHMmVBg",
  "key30": "4wtMmCKn7KzwjsB5m7HdPJmzNxVTPPhN4PffkMxGCrfqtisbPyVkE6bAMPFiixQLToXeh9ST656gNDJTesXY6CE7",
  "key31": "5azpK5ebfs6GD3qWbnSKH6DVwGnWBSirjMkQSSJbXJAfjirJHHDzrLMYd3uQGbdrSb76yKeHJ3FbQRbPKHk5XePH",
  "key32": "5MJa2PvzMZyfsZsoyV1hirBTECNQk4JpS1tEzh36zRJMX4pyfTe1tgLBoeNmvGoAG22nWiey9xismkYF1H9mC1AG",
  "key33": "2aFvtepEwQ2349NeSZXbyz3isVEVm9Eg6eZXMEvZCeBv1Cs7kRZbUwyK3vjjcHQF6kPm9y7JEuGMYwe26MoUpjQK",
  "key34": "3ai5JdpcuQfPG9Gbb1q3gvnFgnQawBxoVYiVNvvtJ6n4z7AmEaa1zP9JwL5w2sHQ4TQwLwSdcuWP6UZWkDfTVeWQ",
  "key35": "C1nWTG17d3rX22FihhFYyNoKQ7Rb56Xi9zhjj8CSjympxcCJM5bkz4Me5EzYSsNHML2GrRErKJKP1bghNKAsiFd",
  "key36": "2CcNDArRokWo9VMcc3xig4fD1qq2jYJUWNWh1JMgdg1dmLHEQ1VscNQ8X1DgTRdeZeHjvQgNjdQxDKWKXgEpsUiE",
  "key37": "62GqkMjB576zhFNamwUiFydhectA25VA1XouQDyoYujJ8AYRRNmyuBda82LS3tD3M7GhyHGqvzForkbaPWCb2ujY",
  "key38": "59gmdBWSGyxprebYx7hrN17nhVoxJd3rdoJnaz12LXiLg3xWWUbtegUP35Tt8jEaSfXbuiAUuPuHHmjw6xJqGHJU",
  "key39": "3GBvWJKozZ4QjHstpAE2G2ACRZgphd3y4cuoz8BB3KtbktXRm6k9xQVHfaRTwnDeeAMUd23vQ94biWH9SBvydCom",
  "key40": "2MyL3pfhKazwNwGQ4HDmxVin27Z2NHFUBAapHtA26Fs1aKCngeg7C1KwK2wiJSZVgnRcKPvTgKHJnygcMC8DE774",
  "key41": "5mpuEVsHCFymYTENZB3iW7KGMgobdvDCv8pNpeVkHnEBKnoBEGSLcod68UkGCKxGZh9NExv7Qc6TZS7HPyV8ZtFj",
  "key42": "2DPvB5SKgK1XjpHkzWBUX2yU8Afvjqu7pEycirEHWwC8oGRv8FD3vAM8SGS5nz6WS7FhFVNwc6m1pR7B16DNHPPY",
  "key43": "3YqPcLefWgRnCcQaDibzdt3mh7Yrv7qzxup1YnDE6cMXnS8ahP8gvi1hdQasT3za4jw6HHz7H2EnNFrRSSw7dXDx",
  "key44": "2khx44rKtGLKjs1wMXLYNdmQY2183heJA17QQKjzVKH6akT4YZCCJdkw8qXEuiXixd8UKVo8x1trQZYoCD3sAQrR",
  "key45": "5aQMRxugLKQyjWEqM5Zz4NdTVy9m3DoMR6YKP1mu3qhAWrh7HHsJxDUfeQyfbFkbQ4QnyvJWFzL1qQvfcgeViqJa"
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
