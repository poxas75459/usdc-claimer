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
    "2eAzZqMqgTEVm98PpqaTWAsvWPb7mvP79jVHEyZxDBfnryEJGhoasAfpnGRFBM4CsxYEi6JKqT8jpmEaYuK9YKQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bgyguZMUhDTDPu7UZwDCR6amMjhLsW4PV4HDWBDt2YP4TsLmaLR92dH223LK71x61thMkfnQixjLhAajRCCJJbT",
  "key1": "4jhcVTYVtGLruhKPwuRv93EFdRp4pEiCGbNo14hXhVthEGc9VEGWGEQsKVjZQUyGzVua7WAQWS4KknJwm2gGpbyD",
  "key2": "4sNysEF3iLFqB5UgM9eUqs1GcmJT5Er8jMx4B3xqmcQSdQk1yrW6dWoo3Xcu8TwWiTcChQJ8yZ5iVDzLzu7ZnXZL",
  "key3": "2YkzvZBGxKn8KWzM8bSv4VaYgSjGjSEnMc4DRovkbwwma4FuCEm49v7eoMshTZLXXwpd2d8aeFWjGaqvxrEUfAHw",
  "key4": "prDTMeMovV5buL2MWHmuKqqhxKPtqukW4CA1FjsaAtyppfJJ2izMLBB3hNcN4hnz4zeSzGDxGFgqg9RCTnqcbqE",
  "key5": "4ssh9KZrhLBheVHMQny2BYywHVe67AoUJPCErBeTVLrBaXdC9FE11E6S85wwDRVopeYtugn9NKZQXSxpa66d8MFp",
  "key6": "3uJXgigs92QcWBMwKzsYqPzqu7fJBf388BvYzMREBN2x7Nqc3HXk3GwVL1GJ7k93q1GBBtTUMz6KKp6CzBnyEPRg",
  "key7": "3PFW8kMRY6NyyAmV4DghxzWLaZAocStdk29ED6gmae3TkvbFMWnt4Hr4Dm6kSWpQ1oh7HNkVSZjvREhjc27bfBt2",
  "key8": "5qocNiyRmXeb62nbf9FoXdN6XaBzCWnYhsAqHHGgCFWk58ziCpQJU9rFhcd1v9zkWri2ChwK2R27qET9a5b5Bb1i",
  "key9": "3Z9dEL7GvLr6cL6rUnUdZDrkkeaRNadq8CREdf5j5FFGp27LZSVxtoxgWrYujvZbFqEwFfTNUGdfRSKodZKYcLJZ",
  "key10": "4v3gCiRG3CLmCY72FYS3nr68mGvDEK6KxmhQq1KK1YxJWvxbjECjXtx6e7N737wjC9AH7mzByPp8ENNGJpBMhA77",
  "key11": "62gKdsUck7V86hrZCHaCTByg14vWjSVi5tSVSaEWb8s9bZUK6E8NdmjaDgPjuMMPEHCmHvQ7ZUsqeZXHUcVBstZh",
  "key12": "5fyYKpC6ALA8YeM4QmgtDiVyYAgcg4eWxdP8kiBdZ8nfsMK8hUoLYPEgUmmjRx8L87eJjWGuqTWwftRBtLhCqYpH",
  "key13": "5Yyeujrpg9ajiHQQRKmHXZAkzWkxC4MLc61z9dmcuG95MXsFfW67VNz62CtF8PmGcAiBwKBFFRxAAWEccuC1UCqA",
  "key14": "3DRfAYh8jtkLnikQtGpgfMf2PUDxvbSiix9NLZ8w7vkeQEC3tKWZMs4HWSJ63QayezwfC5Ct2NNGp3BTMbFVFBj9",
  "key15": "2eJfmrjkNvsJEFneY6AeY6anj1xyHiPdjJB2Wc5Xx2W3oSndoc7zqwA5C6zdZ8Mmisk8FsrWP7ZcAfJbTsgWot1U",
  "key16": "3ABgCCTHjdnijA2oNTi6X3Neg2WnG2625QHyT5YQKJRMimrj9YTEP1r3SAkRf37S8yfiN6XLcWmK7JZiVZtz7Lr3",
  "key17": "5Yk9SPHfEQGBHTX4uVuF75NZt9cTzHt3YZCZAYpFQ3oZPwzW8wwfm6cniHCQtc2P5UZGPJJYLx2QSbYVZEZRY27p",
  "key18": "Zre5dz2pMsAKgm5qFb7uf5GZCboiJhq7hU7kittKRXkc32nYyahL6wWLmqHJBfSRDxvKbofcE1eqLXKAb791pzH",
  "key19": "EkJYodRBNneJcBJNdQD6BoN69XsPHGoy3of7r45XkjAA2C76qMynDNRhcUGMKMP9kRSqo5MqbMZttazHPxfwQi2",
  "key20": "3VtpssaohfW7d8JCDpqyY1YDovp9naT7ck2axKndBd5QDRYrSbPJmibwUANzZBBX9EkDUXoqbi6wBGTw5VxpyhkW",
  "key21": "5CjpReH4pkhdzULsHhvR4Rdr7z7WYixSkkHhSdhwoH7exgchqtG9V6TiAfPQMRgj92mi9xkGskGCkuJuAtUAHov1",
  "key22": "39UGRWeS91zYaEynVbzS8TvBbJxJjCgT6x8jybN2nZEwywqrKVJvDtnfrLPyUprBLeFWZvDvtze7f7LKSZcs6P3x",
  "key23": "5GyHF85f1BogTixb4VLNUybF4m26odjr1pd8z31WXu4WvbPZhxwK2KTb9dyu5KJ5t1cyaSSvd9r2SSwmSWSR2EBA",
  "key24": "5FQERYrPEJ2mFFALDAydVfpmsLmkPPVnHw7sRJqgHsg7MBzfxtzBPAEJAjfriBkVWQFUcJBQUuBTr6HHhQNPrLw9",
  "key25": "cyFWv7XNWRyfvynF48fkyVR7hPJJ8RrXQbFpU6WoZrLQ5TE9NAc5Q7ZJuckYJXPn3rqYb4QwtdSpxUdDEsQgzhr",
  "key26": "2TnbGNDRPgAPX4RRqAvjhFf6EVvarHeffaD61RNqpW5LSGhcL66iVDhYAWf3ET9p5NsJ1zEumFJbvfNwAfrAiWkN",
  "key27": "37YGgfhXsMEr8vs5QZEGpajyKP9WzF2adz3fciPuTZrpELUgyFktyHeR6RmaHHQWmgoyYmWiUkSqeCiLFfvxzEUw",
  "key28": "5EMqA9BrBpNfi6TMuzjjUfE7oume1BPHMtunExPGAkLf3Yksdy5ARjDrwe4vCh35JpBJ8GPXr4p9XkD9yzuReRRe",
  "key29": "4xfwK4q3smepwdkBd8s7T6bPyjpaHUWu9Barvx51LfLzEvNnaebA7vWMk58TPbmqcuC2bS7CXEpooFmVkKf9s6PJ",
  "key30": "3n7Yqqtao1VSE1omiQPD4wFmzoCq1zxZMeCXuDa62supSA8L1AR6a6FxoVJpivzQUNFfxFMUqi6qcrUsLZjLp7RA",
  "key31": "3dy7omUk6AWM8tsT9nmqGRmfUzskzY4DfZk9H7iX9AfMV8eWL6D156ibKVumZAWMAVE77ow6XbSMXzrTfwGjKpWi",
  "key32": "yABLGzCCpKpqcMrdEYM2MsAkhWiHXss5YBVEEByAeFGFvkm8gzDfRjUU5iudsPffuy6ETGLs76at8k1E42BPFfb",
  "key33": "3Q5mRSdaYDgrArnobaNGUjpRwY2zKmewPBx7gw2gCAvJB2Tg8qehgT2vcXkcncwPn3JQBY9T4Y3hQU23pLX9uPVY",
  "key34": "2wQLnDaoKwm8VCgFyQuwFS3V9HQo3k22piby3unGGNZkeAec6TgaTwdUDb7VaWW7NK649j6ZPR5qpbBSWKD9UMZA",
  "key35": "4h3S46hjJ4Uz4UJPMzYkkJwaRRhHFvPScLpYWSyKdReT2uteZ6kkd6kMu7MZttp9RHSBzXbMdXSv7QDhfpErMtCF",
  "key36": "35nanPXXL3wgLp4i5CAiRGS97MkMydq8bYbDGkufJ9dhUw5zgaDvKqvoCvjXWaYFzChP2JNdjbCVa9HcWM3teoZ2",
  "key37": "5JHaPtphaapRgNxY2HFUc4bWceVw6uc13BvUCmojcGeMrcar4acvJwKc2QAHhHLFBnk6rhz5s2gnCNvoELcaaJYB"
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
