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
    "NiDidqxh7iBNV5DAcb9amZX8EnynDPGFddT32FKxCwTGJKxUqTcWnZBYW4HQXxZu3vzqKsEZpXJhNNX4Mdqs3LW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocVCcv2JDYf89iB2eBQfAQoMzojWJzC3SRnD7zwdpnmAKLcQ8aWjrNkmWm55YBgHu3amZe7jdAVxUBWbtrx7VkR",
  "key1": "2VK6ar2hDdSgVNzgZ927jBpnXyAFQZePv3NgmjisCa4AgMhsoyufTrKimb2F6pQsRtLjSCb7qnBPdtV3pM9ZjoNi",
  "key2": "64JGj1efTfVK31eC67R1QiDMaW39yQwVussQC3VrWJ4Hy1jJuba2E3XnEWTErCcLe721yoep2SVEvXHqmu7x5RvK",
  "key3": "3rbaBf8L3AWFqboH5c7rXaRudfH3Pz8MiaxsUWfrCAzTpY4gbJzm1xLwVK4LampNAJ8Uv52EpeGCx8ZuKno11ybb",
  "key4": "5Rf2M84QQ1apWEPa6gs65RLba1AnfVKtv25ZYVctDQYpPXC1c4fryjjbiTBmm97czu5UbZVacpuuyqSznUXTspah",
  "key5": "5iPWB9wRHyDTGoVk98sVXohuABhMgTefb4zEgi1eVHXUbBYqsZCYMZp9QHgUK29AggnVwEKjjaZ7Xw5UDjJw5EKe",
  "key6": "2eueMSLDyubDnEFLHZv1N5oEAdsVvCMwnZg7u3r8VosmwQegffuUf48B3sr96vvaddHsZZKJ31MamCYWuQWBguVw",
  "key7": "4YkUhzLBbBmsbv5mk4MCNbvDD4Sbbqi1P5o2efewnYSCp4hoVe3iFE2zmzu7sVAwedzAFUmLgLVVQH162HBh9E9U",
  "key8": "3LeGAozfqVND7r6JWepkMT66dvgcYff1WEkr9EAr5VkEAUyACafjDenkVN9ehzi9SqYdysbqnaLzdHXsUTGvD95t",
  "key9": "4cGtLMhst92LXz2imiKcMyTACx9d2ghRBkzePa6o8jxmTeVPJ4axC7vZBB85auo4CzB9hngEQhCcHhAEn5cNGvpY",
  "key10": "2BEpVE47yRy8d8895jfEfwhGubozBAePsWzdHqxuVR3yRLLg4aNjtMLxiajziUSRKB51wxQDmHxyS15h3YgXusBf",
  "key11": "5XjvnQNFxyFD6Bkb7VPM5NcHoET4739CXUNe4wcapMb74CAomFad2bCUtyq7bVjFu6MekSmq1CfeWVyjCqeqCNCb",
  "key12": "5mqjnW8vLDTs3tz1DyanKmfPJTHfRLLftYe2Zn3oqpspAps2oKoMiDjgwtWZzRTnN5SrEt5X8z7K4w4Stovspq6C",
  "key13": "5HyeZA4iZoz27fBbLZWdeT2E8LV7huJSYQGew86gVbchFdrREUSXpNsV55FF2CfM5FhqVCeZNQG7bj7Tisy2xeJ7",
  "key14": "5Km67sFAEmfh46FKJqPWJzkk5MNEDDcbXxdfNkLgHPN2Gcnc2AibxbYzXpthquNax4txhXKapzuTKcedigyjPrEc",
  "key15": "o7uDgL39pSUy5Qrh1zXNCRkSTjHoLkAazjfpgGbUGXQyxCNbVKTEfr3NiKoSQZaumJn8fzf8xXUasM65hghJkau",
  "key16": "hZ2bUqYrQ54fTMuti6kwuH8EpMK8mq1M6ZvcuzV3pEn1bPDEB15PCy5AyWCuguPKbbn3ZCgRnTJpHNaKvye7Wxp",
  "key17": "da4CMBA3PGGaW8f5SJY882Y9MdQpG4exnRL92zQ45vNR8dfHJ8afipgXEJTbBM9JAePt8UwBWStSomzY73BPfUX",
  "key18": "2xrxgmiyGUjY1E62DgG7i1rHgBdbUewTxivzytU24YLsMFMBXtm4ZppLEDJ4VMB82RSS8rRyMFruAvTtxXJCngLR",
  "key19": "4DHR2FwQj4PypF9UtCDu51LShLrf4rMaLFAJBxThZstfduLVzq3hJvuLwq5k6bGHGTy7mVBHUU8mkWydL1RSBWRq",
  "key20": "29NFZxnqiNtwhQ9gkskdCeQoR5mqJGHJNcUxD1xN9tq1U3GujyMbe9zLadGnJy4pKArAUwwR8P9vtpuXe5cDUoti",
  "key21": "99ogxwPPvLtR1EqMgiVXdBPKeMFFb82ABc1QovuidC4JumBQAMbhioNBKjQ5rXYedhrc6eFTksbuyGi6dJ88dHC",
  "key22": "25AzTBgJP9tuo6SZw9FwzhpXh3Ee5PD7xo4kCdpQBBWfTBQ2oHnZwF57oq7ULTqQoGiCNMWLCK9mq4u5QViWxqvb",
  "key23": "iKbA2K2FpHL7AZFY5WRA6i2prcL6Amrtt4vwnGKhovb4uaZyKT6hZ2j975pg77rY8sSdHzjCwBdJ4QJZA5Pgbdu",
  "key24": "LqZRfGt8WJ9yZj56pHK5D9NiHsKtpP4DJodc5TVkJReEEvmTBW4ZoDh5PpsJig8UuwSojA7EbRQ54RudM5aWFYb",
  "key25": "4mwu5j4LJwj3t2dB7tCJ66T1jWd8g4kSAEKzyGfCGrLPdKZ5a8Av3f71ZV6VczVKGoF7L3huEYJC4UrXpxxJzrsp",
  "key26": "5yVE3jdUncoZn3KoWqoCzBD96rJJCaRoxSJiytyur6i13Xz2Di7WerxV21nCgS8fDzCUdhA7HLnjxQJFNYHgX7od",
  "key27": "Sytp2JYAATMETXW4ok9KNqAgqKLXHLjFX9zTksciWiXw7VW2UVwVHHcWE27ru1jbJLB5pyKEwmxoQQGjWtGZ8E3",
  "key28": "6346sH5WVzYcfBNvXuhFyQyW4g21vh3WUiUMk8mzqLzkd58NtS7D4b6986cGsS2PemA9kjGC7PK5ixEniTGaSSev",
  "key29": "49BMthujq5gVyp9Gk4BuZw3poYZxgVDQ9Vg1KBqJoywU966VxEZWjZeH4C2ubQENmesTE55nHhjxpoHAi3gcTnvq",
  "key30": "4idrzzLweGSdaH79J2vbFDaVgEViEvPk1X2cPrDFvBpCfgkHj2EuH15MZ9nWPMuMbReL6vYeoJTTLVbU6drZyK1S",
  "key31": "2RNng7iesToTVEoHBPBE61KquhxoS5wk3LJNH6KpeycVRvaobzK6bLNyPfcGjf5Dqw9vPLa2hVfBrRCHKMAUAqnD",
  "key32": "Vwwy85cQvwWobotXiEP4zwZBR3PnFBkRSy17NUnbJtQvWV3K3BigPUcMyvxCuxZcHg9t2bvrSUdEWKuQZLTfczf",
  "key33": "246QhpTsR3Ez2Z1pNXfNqqzijVZZt1ViiRvD5sxxRjaifJHhXd2oNESR6HQ663F9EWA7qc5jkmJ4rvqu8oAdfQrW",
  "key34": "JW16DHCYS6UskRN1v7MG2Gb16Gk32yH2Vzk2KqoJ53HKLTGqPqMLWPbdaTxvxKFQZET1dbSMP8Hu4cTXdKGd2pX"
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
