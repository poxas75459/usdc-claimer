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
    "5mQ8bqJPNgH9zQjaLYu1dPYBuKZcci9RKGiEp51kpSYPqDUYNLqCjbQPqphYJaJw6j8iyMKnLiaXsAxbdbLXPhHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25n9HjiyiXhXvgGPnZCbsZRHNMyg52qFqtkHHTM11GtbGih969wErvH3ouWvg2uzYKQDxSWUAmHPeVPyscH6vEZD",
  "key1": "2dmgFzaJsMWx7Nb4VqxJuZrtf887r7bcPp2j3bsaKpbWaDt3kWLJkbS6EDfhDs97BNr2tafWcAYkeZs9hGvxEJq8",
  "key2": "5rM54Gw9gMBv5w7bnZo9auryGdKXEtDVN5Vq1b2GELsvH7uV4s2wJHS4ttigZdwqkr7ioA2C8yX5hQaCNdvuXYE9",
  "key3": "3qVtk491NnCHDQWHTrk3k2taLffJCa3fxr8sbTwj3KdaVLV91SaycWAZgnTcu737afZGuKM8mSVXjdsc1jibkohN",
  "key4": "5N1pJ1JqfuS1R8htAXUywumBs8rhdeHRjKbbDZ2R3ygAxYt5BiTX3rqWNV1xDELfXt6BsA9qmQ5ytEHUAguGGWFg",
  "key5": "U4ENrsyCHexyJttDg2S6gtpnnKA22LWTGZWzAEZAXJbsDAmWaqCDfg36ik9fU1VY4PEw9CGSGxh3ygb3Veodku2",
  "key6": "4EuCp4P8prTXiVVQhsfE2R7sVTNvGrP6djrNRWEhKBkP7qg9qNjo58Vf5f49umoCfJBE8KXgZJEhVUcdrexVMDHZ",
  "key7": "2J7J1wqbFoyXEN6x6XfZ5PcTKasbJLxTKDC8GFiJ4iy2psNQyfUxj6jozxj5Fr9sq5apmPYQ4JDmCVm4C9ByKvgY",
  "key8": "4jCijjsLAZxpJZFUm5bwDDSFFi7nVqyeBn83KudEz9BK7vSRVxkcbt9Uxu2kN1oDQHDn2mMBsqSmaqvSuziUiT2u",
  "key9": "5EKg76JBGG3KmnASuwvSeDYB9E8ktvtrQg1KczFx3LQcf2ii3aGXE81bQh7b2S67b4oMree7DqfpGihpS4kYMM1r",
  "key10": "4i94htiFVSMDyqV3arpMBe8B1zSXMr6BaFZ9PJcJbMUsr7aatJkkMVK1McRrCsvVsEcJ7B6x8FmvoUwvrf313Zrq",
  "key11": "2ueVvXKwfnuJmn9T8qiFk7xysGQ1HNfsES5EGJjQwxdhLm8R5efQumUyzz8daZRxyDrL8MqD998YPDFPeB4gTxes",
  "key12": "mUxTwAHfnZc7WmGLR4s3SgE1mbMfKk8wxBnq4XoGTsbuxYyLz1zZ8ftjqmRqgHtghCaHp95aigxVse9kcV8EFy2",
  "key13": "4pYy6GQoDR7vX5AoLxbTTSNnu9kiAHjFF38vjtnSBVvddZuyBT2VqK7zuxjT4wKAMXkH9q4i37riK7oPP8SVwW4e",
  "key14": "5LPSsGA3wXvbzbTgshsDZBKgAEKK5hMbU3WRDVau3YmBhsrRiBdLzsyGxjdNo4JGa8gW7CyvSBGrgNLD7ojjiiJV",
  "key15": "42Sdyo8ReddaPV7e4HGe4v53YevwHNpMd9Pt3ew9sU5tdWL26myZzb4m87k9V2KgXmoDGaVXzETtMMteqThCoxs9",
  "key16": "52J7cUzoUsuNC8HN3qkUpRABAi16JZybgCog59C9ZeFVBFFVTEjKAAjboSmzao4ZryTcbDgxW7TypSJ8aQhPpWgy",
  "key17": "562bf2JtLyCnKE1nwXCvQHGQmuDEMToURNb8ZFoZovqzLZ1Z6382RrY5HuuyL2G8mPbT8cXTR8diSusZWK3LshFR",
  "key18": "W6mTKHWa1FoKTG2PVjBE58wNd4afDHvVfSUp6eUu548iiYXfYB4T9vtLeegrFJpoXyrundKPgUwpDkpx2qTxaKk",
  "key19": "3CW7o2GXubrqCAivS6PDh29MJGLfhChFmvzJdLyF59sssnhQ1MtTCX4VHK6VK7h1N8s8VLY39gwHRJbKK74YdYmx",
  "key20": "gX5ZEpegKqWCKUZNTEF8tQ74noSACWLrfUM6YyqL9ECZNySR3VSsbzxd1iPVDLHijC3KJxa8VdUkjCXxs14zC4s",
  "key21": "3XB9RBvdJgPVeXrqaAFbMmkxWV5nBNtGVaoa3bwdXRJmhdzj3SdjiuWw9TxDgpJ3mo8NLnk2u4PuyvuQBgZtBLZY",
  "key22": "5bze3ELLQaTmyWB75GAphKRmBvhH14jnpRHXzAXbLNAFVLHaMpwgBEiswhFoGGT3YwMdhif78XriUUZhPGw3SQTP",
  "key23": "uBYLUGHTmGLrEi99KDWepAZDWASyc2tZY5hK8nbCNca4xVvjcXmR4qpQnCCpe9XrJZdNUxLtDYw7gKu1ARdqRQz",
  "key24": "2tqbyeBEMwvPpHS7PxnxRn1FSszRmQYFNhaj86GVD3CiE3jsUcotYDDeKbSaBsKcRtvd4jGu4FCAhQQvrbCtaxb2",
  "key25": "2wSintKNxwHhEBYshP6DFMveq1pcU8CBLNu8Tvx8AJkjafSZaVg6KNfYxqK5BCUAZNZ2bnwn9UyW5sXDHypgS81F",
  "key26": "5fGj9X247x3kFHn1S1hhQrkaRd1Ynmv1iQaAm1964rcHnpK32Wjp6tLfB4hGQuDQXVDNqTHKGoT2XbJbPaDvmDwH",
  "key27": "3nGfGFCGotqpDkq7Q3dBJJS1rodKC6sinmNYhKdMEn3yoDSqdzcmrUHyAyEJMzd8VwrhCJu6DYYZosgUbWfaNqcz",
  "key28": "fZL4JSQKySS3aSZxbrRar66CXCYRzHe1yF4bxWg3719RJeTU4QWtHvoRVjkdZod9G9b5GuyJdiUzFHL8MmJ478X",
  "key29": "4NFfKBzVn75ZUZ8cbJT3s13DLe5aTH1C2yQShe2g5SvHQ7hi8eu13aT67BuqNAdKp4GGDU1bFeg1CDWnjwYHhYk3",
  "key30": "3f4rPGexLEijstXvRiZks7gJM2h6sQrJ5VtbM1fRxF7ZoBHjbse2hDoGby2miBXc2LGuKWQATenAdNjnUuctyiBx",
  "key31": "mEWDuxtp2ReEx5LLVXVETdxBGprMDo8YZoWMao4hJwgbRTW894ThzCgycwBCuEWstfgwwyqWg3Dk254UnmhScBo",
  "key32": "3S7LgBKPob25q1MMyTr98t2FuRdXQA9uYEpnGLH5Zh15fSff3btFmSTffXGvDzM3864aTGNrHgg6rQzYHRrNvGQL",
  "key33": "2FEdvqgUo5vBuunW2xBXqVavfDVhy9gRMQPDvo7UoWLz2w7LZpVjePLjA2tCa4yRcQqYEvXaCK2voDgkvNEmZxoL",
  "key34": "4hGTjMmv3zKL2N6qrXacBXecHnG3zLH7om1gwzijSw895xEKmS6BFcMy2DFDCCn7dgwXTbsKuvwLrBhSeAB9PwvY",
  "key35": "2FH9TS9odzxCzHBwL3u3sg4bkXjBuAABkwAr4ujAFvWTcHzUctEX6yMozrn1eLGghgvqrRkNspPJ7yNmgi5RsEGu",
  "key36": "Mi4s5vFiRU8y79Dx9boqXJaKJcng79fUmsFWMJvJGV7gTyWszeSHc4aUBjJgwKExdLpwm46EnC8bHgJ7PW4mRn2",
  "key37": "41BrWW7npgrhm38psSfGCstpeo7KjZ1rbLZAAZEeSyPZ4t57vcoEcf8tEmrb8nbysRN6VTR3D6aJff74duPJ9EmF",
  "key38": "3jLqTCXhyZ8AanTadG6U6bbDBkHP3YDCGKcqSP4SWYE5PFrLP7WLSv668pRMJk6U29RQuMDyDwfDW2or2aaBP3zV",
  "key39": "4onsaNCM8TVMR4wk3eS3ARepexC3mXb9GsWXu5xFA5j1wLxy7KMS5q2MfngZQfohdzZu5LeJgbbjXqndW2F2p9Zo",
  "key40": "3n2x8v6iGkHkpPnka75bESqW5AqymRKnX9jdyBeehmwewHdbRfqeaiV6rdsTMJginnczWuS9tTvrT2dG2SBio5HG"
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
