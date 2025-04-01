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
    "5vEPLuRscQFP2gBgF343QtiuN67UkzFk15HAF5h1qcC8GkN2hpfYoArv7K6nShvN55VPnRP2NwaXZs92mzfRQ4SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ntqf8M6qojTkqEGKHphTXY22tR4TBBZpgcBhe5WAVMqf5PctLJd12vVv8Z3ch9yfEnGGTfM3Tjp5denarTeMKXX",
  "key1": "PVWw3r68SxXEPjBffqFU5N58XJP1WZ3zCJU2hHa49tgCcc3bM84uic4dk6iESuN6o6HjPDsPQVnwDvrovB46Gw8",
  "key2": "LGXHRszTz667CeZAkovnEN1Y4VT8cjD3YGw8VXJnwi9oHAPnqN1MMxk9ocnbSR92oaRdnSai6fsw6L9UwLHbUYj",
  "key3": "5aF6vXz5uFmiW8isrYM4Txf5VjRSngrHXUVjC4HBNAtJPxihLwei72DKZBvevzbup5Eaohvz9ByRJUkxHsnbtHaX",
  "key4": "4SpBnF1kYni8uKLhSPa5F7gkGeLUNXXNvP9kULXb1CrGRtMS26FptNUyP7weWMXS52og6qMzZri4wgC9wWg7E1Mj",
  "key5": "2CZH6XmM6gkucaKFWrevvPkmE34isnZHKbt8LUVcUwSfoJS3wmEejswpzvNEa6xStB3ENaC8BuutwEsw3quWAiWM",
  "key6": "5ErLmNzFWe7vsPYwdpz4tKPQW8H8TAfMJ8f1z91s8pi9pxPFzvWZomuEDwvHNDZj3YHjDDYsm6NVyxWkZ3rwV2GY",
  "key7": "46Wkxj4yu43A7QbWATFNvQxkRBms34rYW62LRwt7NNFZDuFgRUo5pmCZwTVY4XBbsNr9WNyRgfpSzAr2QwQFgzYd",
  "key8": "6jT7Kfv1cJHcN2HS7hZZyjD4MvtpoHuEh5s61Eb5yuRmN4fksm1rWALABfz1zNnrArf7wjEEhWNhs34unmoHYKv",
  "key9": "HH6EK7jx7Qy5vqhoezosLM1G2yxA5XNduBt2pqHMNRamRgGBmTBENMmsqZbXecTGQvRBxdhHVaRFgdnS2gP26yP",
  "key10": "jib9NBRjTUeJKyPgdY8UDWjCa7HyKA4nbssUJNTJM4uGFYYNus7uofER6AnuoTKdCkYJwzRtvFudaBDc8EQ9z8q",
  "key11": "5FxaYVC2nXrmHXisK48tVdUNnjGzQyNE4Msa8FzZZToANuHpBr4QPNU2negf4dgstg9ov1GDw85eyMFa5jCtqwJz",
  "key12": "4gKu6UDkHFMQaehM5bvVYPyrGEnTWsRD1isW1Jgk6m22iiZo8XFAinbuiYF5uiXBGLidT1x71rNPWFnCMntqiaGM",
  "key13": "396SpjVXswse3zFUukUv6BofUzbevqh6JZUsttazPMe56zPMgjJBv794eVLWUnFzk8Vdh1hZEKbiNAp1NXAoq1nh",
  "key14": "4WXeqr2G9Un7fqx1daA413zZDEWnYUbYjkzynBedJ7p7fvtGitkxYFcwr2wfpJK7ZJhPxAoDUKVJeEGHzSpcbjd8",
  "key15": "2oDsHg4Lm3TgYs9k9NSSLTTwQ2VvpRQjvznc7xBSKWuTsnsLQWZ3XhrvKpSjMGHZB9VLBYwFzNmTHJmPN77HpHSe",
  "key16": "58ksX7dzcu4BkFzvjqCoJfS2utvcEpuocxbWEW24ryNMusbErihQTGBg69xiFwUzSYYFkgyLcLoWJuN3PYRXXwjS",
  "key17": "4Zn5d8aSk5jRcNF3SiopmpZZZBbW9u65zRZ3SL2cTynScqP8yJLeHNPgVYyD3sh83pv7R9N6iUwMDKr58Ywq4jdS",
  "key18": "2Kajgd768WF2ckcRbGgrkqUGCsuPH9tPsZ1yDnbNmmWhjRcP2J4Q9vs2VchH2R19s8FEfznzo3MgibYkwg2d2um7",
  "key19": "2JQ1n6c27wL6QjKGaLB3rpPeu1AUeyDLKUnmd7Va1wYs1GMNMKLQv3PFEtRNBw7pmwf1HGzZnaiTZyPYyEgRkuBq",
  "key20": "4w67nd6nG224ZjViBkUAdKxex4T2pT3Xo9oMG8dByY3pdgUUSEAX7RFrPEZXBggQoE4H3o9E7Mou6qCBZv7VJAQa",
  "key21": "2Be6FgjrGNFvB3uWjiVQcTibUAfyWddQxQ9QnyEpqfc2APpwrjmwmcfQUArMUi28pfZXSwWxeyW7XSgfLYEgqQpU",
  "key22": "62fmTu9sgP4XgTivNGiKtrEiYtJCUTnkoC9uHAMExfraTa4GWARsvPG39SySzMvo1QBccTU4ktTXLKQiMnkv8dRP",
  "key23": "5N1q6Y4rPJ2dxJ4aVu6fmCKaBbe6GyVDe2PCRhkV3hkqwPtJEbhWr7b5opPxaAxps1FD2hBNrSySCuqYh3hdv3HX",
  "key24": "gGJhLLUsMfpPLfVcZNjWtjLUsK6gHXw6Hqf9cbXtnhM2VTtz1JHKVb5R4u3gtfTL7YSbXn4fA5VgzvWPu9wk888",
  "key25": "27QekgFLzkBmGVtu9URPbEDTuRVn2FVmvPAu8HUFH4bgLyWyAVxSbYMQbRfGJVpgcmCCgQaE5aM5NiuziCkhDXPx",
  "key26": "2pPH2gG3kpWHnPG1p3NQE2Q4ZvcLBZLmQ5mhRa2WBuGfZqaEWgsieCDgonNT2qKmYVVLSpjVreMhEuNwVdMkyh29",
  "key27": "f7GHGJb8FDACyyq1S8yCmQ35qcRZexRZoVMy93tP4zNVPZMxxxDi8Dex9jV3pthC2Bvk2ganCFKhoFUL3MYP71e",
  "key28": "3CqGFKpUHZvgR3PGYEjjP6xyfvka2SJeu4EfaQNDqnBZdnzo3ePbYVArjtmrgBSa7Vkh7mavep7ogCbFs2VkgLYf",
  "key29": "5inZ7PWvydV5ZFzSh8qgmUaSbSpE1WWWBmD1ozbhDvhSHsmw9PXBth8tJfDBWh5tNvQZPLHjBLyMKv1a2P4YprjS",
  "key30": "24Y6EtZE4X3HL9pCqQQRsxuaRuoaG8hHpcwLxmHjiR8JNF7jQ5Cck2Xzgb45dYbP5qiEVbyjUBVPSU5GcAtSmTiy",
  "key31": "4wCFEgFAZvQQxJb8rE27SvNSLfRCKpKt3xUadf6puLkEwkzeB4e3gvwk1xngZn7zbfXyJTMusuBqPV4LGkFwMjUz",
  "key32": "2w3UygkUoRmDiwXFeMzWicnFGjTdWYHU5HheRJLqJsvnPCx6khbtcoeRFZcKXWyJ9QgT1evchCiB81WgSdXd72La",
  "key33": "4bKZziFM66GzR7q5taqLW4RGGmGMiH87tjWZeATtsBXcY7xD3HExQA1E2JkwtgNvay3hE6ByQgG8fGVDWBsSftn9",
  "key34": "5VSBfF3cmqt871RmFJ8zJJtH7wSdvWGM4n9fRSyBbH1t6jLYkXUwqciZHc2NCnwaX2rBJ7dzE1SDhZBThcP14z2p",
  "key35": "tPdgTXmdPrH5F51GfsjtBqC3LXeciHsowvdmz2ZFvkK1atze4SUhhW3VzBSmmqhkQ5Su5QsxkBoSAxCmVn6Hn9z"
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
