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
    "2Jo9JjEmV6sXs6izfUhEnA2ecKA4GgcVbbodW46xmPdgPPmP9tJygDz9n6UyWmSxf7UmmtJ7CnrK65Vse19ngUvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1Jskiry2BeDXYe5y9hXqbN6vawKsvikHmWPRsdmruZMm4WwWoWUYsawk2PirXMW1dDi7rHFrqyY81R4fqxWoJb",
  "key1": "j1BTVRtJVBdSYZ3UaMMEuoZH8FMPsQYGjZZQa6tJ5PMumfG1E3ekY1VFzGbaG3QUopm1un8Hc3GiuCj9uSSvead",
  "key2": "2rHofroodojW4XR6giHumtN9J43psG9BPoAZaUBRaawWkXM8vKuQHfsebDg1HRPdn9ymtax7jtgC3rvP6BPpjJUe",
  "key3": "4GCdrfv7tYgh5oeBPx3tvsWNzSCEWHNyD5qjghSZHbJqPh9DEopJjA8mqAdWbJxxpdxSmNuX7dWFckjfetCQabs7",
  "key4": "3GuaTdC2AsFJFVSHa62DaxngJbnmChW89WSGLSkkQnchDi8eWQpoU4R6sPnrNd6PGXEwMqDqyrpiGnPwpacVRMdG",
  "key5": "4fMAfou5DT88VamRsLdLbM72qAqLTBRzo45Jk1okxjzqRPosMenexDWa4j8fbnseTpAgG3HBD2doynVaLCeqexup",
  "key6": "5XN68wXdotZTDvhDNwkmb5iZvFTtLmrBcaaBVBBKJDPkqGdWyvzpBBKeStrtYnWGkagJYmkba3ZB1jQ2iKeUfS4s",
  "key7": "2yqs51mmRFEXYJdEooiiLbS3M785J7m9W7eWZgzwQuRsCYq9ZDGzvQUaUudHyh7488NeLM6zgfPnNjBur7h7jL43",
  "key8": "5xkvJr5DP8se1dy7Ux5ozs5LDkbeyG6991dmBJ79aRkWK1fBoz3gSgDVUuEivCN7uK2xVeb55taEMkigGDHn9UMq",
  "key9": "3EWNGpA8vfRKehJjV7mjQoe4TbpNEK6q6JFTtqWa8D9MtfckcvCL7jPj4y1sVVEZ1xLk1eeXpZc6S54YYpbc9Vj",
  "key10": "mY4v3QSvwa8k2w36kBsZVuNiGy2xHaNaazHbpbAht127WgyeDp3JXWzxAvQ2meY1UxGRjKfi4obEhNYFJSxbt8Q",
  "key11": "UhJKC2m1RdvcLfJLpPV4KwcJ4V2gfxwspQi6LREQTX1Eg38SVuiXsq9VdFxdRv37yhDiHSGkVtMmSxgYM29JEmd",
  "key12": "2gJwWbVmyey7Rujzx7LNm1uBAhM2Q3TvbYgQAuCGtZ9gGs78a5kBTPXTaotKqUpjfATf2DUySdtzgwQxPsQpJRxx",
  "key13": "4x3zv4RuQPgU83HWqiP3WWmnnYHmeEhD4WLxR3JKuRM7ScSt7EDCdW34YcyGa9dk8Jqnpoq2igcw382nLuXRUA94",
  "key14": "2nNHc1AMqWwssXLtzfsoYRbQiq2zXhjnxoeB1THfUshSYyUvTbwyHgDfEy2HNrZnbVTnZpThxe3Ge8APt1NTFZLA",
  "key15": "2pjPRhHqRQNeBZ9me1KVEeyPLcyMMzWjeXgUrwHUtrGvFZkAVDTwqNJALJ5vnvHgCB7NmXrEr3AYWn4Ghut7Vjse",
  "key16": "KemULmMUhNyZTVu7f2D1rsG12p9tUxUM9Bhv1nrSiTaxq74Wt2FGEimcCWJxRAUBQ8NzDJBbGFh7mXXBJMLRb1o",
  "key17": "2ku4MRphdmVjqhurK1SApUB24XB1PTjA2trd6PfUz9phxC1xNVVy8T8RCkpN4e9G2qfvSNvKaoKzqTYVuBPLU5Ev",
  "key18": "2qGGg3MZ3epay2u7mmjZ1GbQ8U6LFEWSht7PrjWomBroqzQR9EnTsk63vWvUrLAiiG7m2aR6KUhukXg4iCZiQB7k",
  "key19": "uAQ9kbiebEpan6RxiQRBnw8qBfjcEyvWuXs1SrujgfAL9jFzSzDnPzctmqqw573AYzS81V26zn2uPsBHpbmtwc2",
  "key20": "QJm8kwiXMGyqNdTW3NF2uxCE3BazxPCuRS57fioiKyU5krSABe9qGAZgXmPAfJ5MrAVHdKuukguG1KoofmrTKWX",
  "key21": "3s2UdGGHuor2DhZgTPmpoYnpRujvvUAzmX3yoozbLF4oLc56WbDUAgYGP6oUbWWoQkhPu9MWfniVWTLyRUmDKaHW",
  "key22": "4Qg9QK5GBZzwwi1pSM21rguHpUFEBNpg7HKevUzx1C7BrzKr7qv1TiPeV5vRvuxJD7BWoXZHoEeTBAaDumeUwZXA",
  "key23": "3JgQdrPEKU4JhqJTUWGXf8HqaSwyuZb3wabJcnH5Q6f9NrA3y2k5WYkzqTNiWZ2QmStLQxKqzUd4roXGVbtsmeXW",
  "key24": "5RXjevVxRik388XX48c8tqyvdD8jizfQJYzRh6hWeASQiaTtUmwyc1SzfVQus6uQadXRpwkzQCk1hd1eyq9qUiks",
  "key25": "2vEoFFjs7yHZ4F37BUK2yi1Bvzi4DuEmFpPMVWxLUsmrP6TTzhoS1H91VbzCGB9AGhCFMscmNDEGWdRWs7dfnMm1",
  "key26": "3WEiaMkNfqxdAW58xMQTKaJGGRWsWXmjFUA3gXjcRPEVUoc7RQGNTmxo6GWRVC2CQ3eFHkMiLwVtqV9wKX5HoyA7",
  "key27": "55qNtsHBPeFKrVjfZgz8W5eWE2m8jTBhp15GwGaCGnqrRYNTRjJyj5vxWLqLJgVT473VFCiaoKbX73GUWtYyYaty",
  "key28": "4tDaYywrZDSBNzj87z3RCnUdNRdBSbssx418YLSFxQezdemFYKgMshFw94PwfTKWSKP4akYK1d5153jtERopnuij",
  "key29": "2b3vu2w8exnEPmq3DXQY8LGKrzDyF1aTqqXx2GF3AcSUn6RGx6pkQBsA1EH7GaDMY6acx4qHtHXef5WPe16WeziC",
  "key30": "41aeLJEWXqeAvhPE4esYAExZPdZWg6aQdi2GG59tdQEJf2W5sz4wifndZcSBXwcS52bBmnkLPuWdp6vjc9nZvxNk",
  "key31": "59573D5H6eeCytviPir2y5V8k7eLEi6bHqdHGN3VuyXcVNfm5LDSVwxNbezfisNTizt6cheY6c4256ygsdieSvPW",
  "key32": "5iekUTgZbiwznmMb9Dm1LgdVundGfnGNiJYv2M9T4KAmzUDakEkqzrbTbAmgYHcYwhVu5MAmABSHpg4ShwBahCnU",
  "key33": "3YWSxtZW6tC7teyEJppwrB6ok7kATwUPJBeZ4qfC1cDfrkM3JyjCZQfrWcN8xLD1J3VgesVLMxBBZZhbhc2DeET5",
  "key34": "rvQwEV8NWtZaFhky7fY2JrZeCCb4T3SBDavUhipj8JxdRKopzKq6yH4CxMRUmiMPZSkvVvuKEyc9sws9w7z9PHn",
  "key35": "3ynNZc28FiS3vu522cbuXSjFFN63RPxMwPEB1nxqQf6vAz2c9yADJ7t8c6ecTaiU5BbPgeiVLRNA8DpRfnS8HoXN",
  "key36": "3Mjcgvz566TTJvC7XCf7ecisK77dY42JyLucgsVD28HtHKqwb8mBRrUjazVGKk4crM6atpPwKsbs95QoU5RjqNNC",
  "key37": "2iw2SpDCmG66KmdrfgXfmx5tkY57z8oH9Q5vNSLSESjo7TXo465TiwoGL6WggJ1LhZe1Tuj1nvAi18WAjpMuxuio",
  "key38": "4VGESH3v2QDdmm7Xww1bhhXtKtcPb4qMqTHyRJYAYiRJs2Bsv8AUwrt1Sv4YtPDEibmDw7BAqSARX81tAzGCwUV8",
  "key39": "gwUxjJ2at3ANWwrJgApwPraPTVeWppjNzUZSWRRVDumVKabNLhgonddzZa13mnUjmWqH62VNaRnZCUVYD4DWyiA",
  "key40": "6w7nuXU7fV3u2JfVe9TuAtusL4h9kuX9deXr1BoyjRrcN88bkcL89qjheESAVHm1vYVAkmNSqGsHL76DM4LyuSt",
  "key41": "2jH7av1oswjLmDRb4PafeLeRT2K9uvgKeoZGh6wbs6avGbe6vxqxdyRHDqyCADaHMCPqmXfmHrzqrGzRCbdi4Vid",
  "key42": "4u8QFpMf9nXNRn7X5ZoxCZMJ3ZaTRrXktRvgiGz7pnGTFsD75Z4UKSNFB8i4UkFS6AffatpYWSW3zU1Qc2FErA45",
  "key43": "3eesBVetAvYnUKteBdejj1s6c8dQ3yu5FaatCrz7vxyZD1KB6EgmYEAzuU1cTs4RLKWL23DpoBmzYkkm6GwqJ8Dk",
  "key44": "4Y4qtopLAJ1574tZtm4w9FreNDdEE4MFR6Z6GRkYz4orjF6enzV977nAqkbFrhBBxXafHykf9mCvatiuDMw8h53o"
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
