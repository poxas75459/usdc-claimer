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
    "3QDXkwa4SQUa5L8x5mz9QvHzwDUwLj71Cv5Y7o38AhUE3fYgc5cLz3tP3xZtcQQ1tsPzDghnjh6ed7NdXvFr5oW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pH31NQrhBYS7kXgNx3XAhTUymfD7pjZY6jjGseoSoMbJHm7Hv7ckGAXTwswYaCtDeBJuxbhfeWxx6puyUrmYeAJ",
  "key1": "2Yrd5HPT8Ecp2FwTfQP2BRYLAB5r4GBUPbJ9tEiTTZwvmzMAiRns4FNRUbwmMbXtjoY2EjsKQ2DziX5fWQnP7vXA",
  "key2": "4wcHRFTRf8y9PU6H82NqEAECpGGduandeWPDaMPtiBXMfQ3ZqqGraxqgpuR3PVNNJqUZUtCiedn2SKZbB9Kz43h7",
  "key3": "iGddqytzoYXGyXgdjPpsa8KTpzjo9m3MLh6dZhAHw7HymQyFQHCpH6UusX1ioNeALhq5uYymoBEMuwBPZ6hnGmt",
  "key4": "2zv1LrbqGsAGu8wbfxspgMRyKN79Bos6tJmvEnZBni1RwEWvgMEJ3ggCPDdjYrEB6eT1w7b9p6vmH1nBEk7PN6oq",
  "key5": "3CmctKYk2nuJtVa5FitaCvndY5g8KCszQuwvzkLkqrzCvhL2k9wDRiArKKiPXwBxBEc6iGqnN2ztMDi9f4UJTySr",
  "key6": "3z4pzdnVTdJHcpU1rGi4m2ttBm4aYzzf78iwoSvpXtJxD73S9iAHdR5ZiCN5RjFsrdPHz3mnFPUHi2FwHviZFBbf",
  "key7": "5Rt2XA1ysfu86a78PQKbaAwv5QZ9XnbLmRk9SFt3Uo2MARJ9dqeGT4aDXGvsucm4uzbA1tsXvSC69Q81CTSkDbFm",
  "key8": "5J9NQhf7khhtF1GMVNbsVgr8Z4MsWno6Vmn3F6SrtYkhCMbSRAv268mEhWeVAHn4DgFCxQdN4biJbtZCjWY2FSEY",
  "key9": "3ZZG9gW4HCaK3TNuDuho4kzFKT5GkxuyWtoHewARFprAFHpptMyu7uRfLTLSxYjosyrTZJm5cH7C1DP7R7PheDgq",
  "key10": "2UtrzNGi8Ew11u2k7zQ9F1Z29B2S5eyXM98SvsZwpVTaJh25EfAGHFK9xyyx42UGomm2zcGGyVogwr1c9hioLJas",
  "key11": "3JzAFViRUvd4xJwoKDcrhQWSmc4M7pHpDBM6zp648ZdeYPecvKq5K1JpFrDLsXaFgHNdYJtHUzBhua7BZtn5HEEB",
  "key12": "2zNmDvVur88JZaz26XL97bNfgckRdWkSDoFX9wu2YwRnNPH7mLNQPTZsXf9CpLBbbPgmeFL5SE3dsvNjvSgoDB9S",
  "key13": "3GYaN9ePx6RiuHhexHS2W9dUF7KJ3iNSXVMvPovfkBnVHPfV7fNPzhTk8V8YQMWpAtPtvWYNJboHmpG8aLF4XhUd",
  "key14": "4KoAz86HoHTi45MhTj3hSrk8AtX6VFnNkbPoSgTZvPNNf2twsRxDzCRYvshganS247UUCMG32WbBqGkba9mBe3xg",
  "key15": "4z49JruAAzaWstfqgfVCjqFrJmJEYDYn4GovbrFzi4erozQQnwtQXXaWo2FWBpQ68Y78Tq9zJiChR6HzLC7Dah7R",
  "key16": "39iRRz9p8W4MdfbDTWztiBscAXAi4k8FPPG7vRoQQB1jDNtDmPVk5hsqugzeGR6BvpF1jEfv7dJAfRQiGREesRYs",
  "key17": "3kowt59gJ7FQZisRM5KVSLTJH65JvqM3FtXjHrXwxUXwRVQKXzEo1bQ6QwJUM1Xzwg9yCZ8jC5a8BfKtGUMY5ama",
  "key18": "2TqpMhpgacjR5PZEZxHbLZGRqMsWZuJYtUmbXUaUMQNzkcUYFigmzTsuADgL1Dzk6YPKeCqYG2JxA5vtFiVmaMru",
  "key19": "2A8AoXDGwdfjuU5hwcQg9CPf18AwNDpMiRMvnUd4hBmp2Dh1b3jZCVsyp8o4iyPccT1NS9Gk24GsqE8szPnV22zF",
  "key20": "3DUBt61FHZCyUaSzNvzYTbCdVhcNfQCR2zgUprUzMVANGc828pHbFNeZCKc1Vym3mohhgtah5dF68i4G3k7KdUhY",
  "key21": "5JwEeNLZZAfDCHYTQz5YMr9BL5XCSxW6DeSx7VnY5uwrCqpPXknj82s1hokvnASqCMamR66qCCYiaUuqionpoz4j",
  "key22": "4zeA1FimwTvSqfgHj8zVZ8nDMQBAVw7MF4cJLAnw1Mpr8CfXehZxpPKuVff7o67S92JEtodintZjqhLLvhexQyhk",
  "key23": "3LQ47R57n5vQrmzEH1hbNfiGU7D1m9kzh6fGE5ZCvCuQkzZVLr7FbpKny2ZxqxeK276vh5xGxWD6Ai2GqYgJoMyv",
  "key24": "2yowMTWVFsrFNbo8GthJJCvpgJV9eTaEnD4pBKRHX46oxJ6zw2BCAhi9VyMeEYu1zQGETJUCadktzSzHy7Zb8Ctr",
  "key25": "R9EkVeYSCBaf7SozZyfL4c2DLrb9hNvXjQdbzANneSDX7cB7LH8T8KZjXwMRFTK1iQpHBtSudCDbz74cr6EpPmZ",
  "key26": "5Eg45f6Nnqj8mg6TYNK2LZkMkksdoFVzpCeo3bahTbJr5MJcXN5zMEJ7QzQ6z4Q8UNdi3xHncFvTL8pv8WT6ADM8",
  "key27": "3mHDxqJv58LmoajjpvUS9X6VzPQhdN7gZXytDfhed1x87Wc6JqPrAJjiBkQiHxMGa5EF2YWnpetaz55WkYCbcDwT",
  "key28": "2XTPhWDQ1r9wGb5eXaWyfR21waAQDnEApFcQGWMNGJBisd1eLtYBH23yz5BFWUxANxU1B3r4drfdX5Eo8Loga7zA",
  "key29": "2PZCtCrF2fFNULvWd811sRdhTs2qCAFdvnKqMT4pHoGF7UUtcs6bbrGVYwWdiWSTWjVTetuwFWwwLR21KcVg8PNt",
  "key30": "5vGTa79fxTnAPVErZ7UhiVesJA7uLoVXDicpVTYMGUaFvkQ1AcHqJCTj2UUDShf7YDeFR71WEQmioZX3pA6rJFac",
  "key31": "nLPZLoxDJq7hT8k55JMEyktxwY6thFNPu8hdJ3wkqFcQVsZ8vF9moLubNXnBsMnMMKufRkRXekxe7rbTQgqzo5M",
  "key32": "2ZM88GazWgy7L2Y1Ue5rWFsmhBPqQUsjcPZ6vkiDUmLp3dKregP5pY6Mwoxd3yHBuNa1LYg77sQdk1LEY9dcdh8f",
  "key33": "211RZUofQLituxyZYwjyQQbhi4zaiaJ8ZAdpX2ZKWh3PMrfQbGdSA917BhfnafGcAzPwoMVHCDLa19UhnwpAJQzQ",
  "key34": "4gvcvgWiVSkL17D6CE82vqj5tNrkSPyvcj6unsymFsUh3Yc5oeM2TLRxQQzdTE2JgvxgamDXhwd5BX1XtY8tQsBL",
  "key35": "5uQFmW6pvo9VUN9tgugf9XwPNA5UTsKf6bvip1CsDX2RJp9Zs9nHXSEp7Nv3AtJMH5H5b7f3Cm4RLWsZ5DP3aUC",
  "key36": "4RuEGZTkwgFFYPJH9KExKKALW8pbxoiEBSM6uVdeYAzSE4NAeBDzzzSh3BHVXfDEJ8ahWp3nCJKRVKHXE8SSYz1K",
  "key37": "4wGfh4eDvELzRq18xnJv9XrnnZ2oJfhKpShq1dUufbimECcQBGXHaPWNH8MJRzqqDEC2zxCuwK13thoXVkdnyQHg",
  "key38": "4UNo41fCC2pQkTgynvSNMFaMyvDHrihr17eCeV8PswipN17AXY6uKbu7jyr3xNPchPfLfHtCdRVccNionmnJ2uXo",
  "key39": "okG12X2UCoXWYd9TKBQViCmDVuBrEpnyo3MWqh8qY11CsbfbnmBmmpTnojzFER4eEST36YhmBeFVcXfKobY5TxT",
  "key40": "54HjoDXmgakXs94yUz2eG4rJ9Y2NeobdoWqDuVaGKYEenVaxihrWG2Tp6N9HLhNhNPfdbyczXkEsCW3PCCyLSLNj",
  "key41": "5q8FCnpG5x3uHGsAttXKYM9vUuvbju4iYUqBwwaUeAFXNFD7Tc1jV55aJs3y3n2ewvqS6CLDeD4LwsCNqH8U4JpJ",
  "key42": "3RXV2UcsQ1SaaijuydNzQ23L6cYG6XBCDgkN5Xf2BFmao9XSwPKvPYdMUeDYYhzVz3pvRT1Pzf4TmsBCmmGMrV9F",
  "key43": "fiSGXJhzYxXcKmCkanau2pvsa8MMjd6Vsj9nzZ63iksocje7Eh8keEM2a8ZxQSx98EkHZEArpoKhKCRhGK6SoCc",
  "key44": "2o2QCEmDKr9qzL86NhpKEuNUK71LgkJgvJpin4v9SE884r31UUrcV1LmFEPchQPKqFJvnNLcgMZxgB6dJ6am5yKw",
  "key45": "5nyqtSP9gN2z4gifwCnpVBguvzEXdtTPU6WkC1KeovKyUypaqcd3GWk5Zju5q7niDCQoLtkboTMEHFAZec2yKRtL"
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
