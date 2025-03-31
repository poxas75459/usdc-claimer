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
    "5MGhxX7YzyTGPnH7SdxeYbPMUodYYQtTmwotBsouybp3Dz8MZy9oyzVjsnvj4Nc7vsFMXyGapDvT2P8SSzRCfuwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YrPUcuQ8f1PDnuqccdFi8nvcMANuCKSxwakEGc4EVmMZLpjDo8hdkAaA7gXRXfxmM3krkATdMrmuHDbhCaNQZMk",
  "key1": "27pBukWHuMz3HJ3RgG99kyQNbiFHniBGSkpHwWe3n8m7CmsdqtVE2CjtWCT5z9bHD8afYCNCjheq383wxsBZ4Rvz",
  "key2": "2hEQA9H8vxyPf4jSRPHPPsxBrdmRiqXbbS2ovptqoqQzSZVWYLWmAgi1QneJnTayPWB355fAY1rFVH9Urstc4eDx",
  "key3": "2eoV17MH4A2LU3J2yKHnNvABWu5Lea2BAuQ9XKNStWmZ3a8HFqfHKocPCcBVtP1km71Rp6mwi4PE8bbhQfWwAG54",
  "key4": "256oUUJ7PVUj6X6Zr1aKs4wd5qLYmp5Aj4eSFXyJfbRmAz26yBwiCTkYoM385hHRsmpgzbkFkwCcSPoJfwAZxBqA",
  "key5": "5Xjq2xcrxdZKARhdAbZRGwxxT6gKriX7K7byqJUFTyWVq7TteFZnRJhb6pP8di9ux9RcYEzVvDTczTGBU7PLySL4",
  "key6": "57Q6tHLERGGw8E3QgZC6acbfibVCyvFg9BJzcZ16Z96HX8iX1fjNLcr2P74XrsezyXmK8gSEFXBHG2fLLHsD6Zbp",
  "key7": "2xmQcfMF6e4B5DgxuEtZeksndLx2qAZGK4ZaY5qN4k1ut9dnLWHZVuwFZpAf7aNAsPYtghQ1nBUgNMpXMZeXLWFr",
  "key8": "3FjNfEzyUzxrQiySbaCLBRJVdbB8szyzS8oTZWbJK9vLYrDGgj3KEC936mgsBp2thbTXRmQFRhkG4HX6NGaUESmQ",
  "key9": "2bfaoiWf9GTNEbTH8WqnmD79NrhPb2Ufo7rWDSYyeT6DFbvmxaWsuM252SQ4ENiVQc4vFy5ZXzbJGiDU9NKEkys8",
  "key10": "2YgnN8nc8VnXPwpKQXPtVFJSBHUVcijLrrS36XHzzzGZEytqWC3iWaLHQ3D4H7dhTShEwBbduC1F8kmvV77zJLWk",
  "key11": "ju4uLt59SAbuMKkaoFJHmsWa823ti1kAHDvdZHQ5CqvtxBkUtc2bpAK6kymu1h9JZijSpWm2b3NY6SZuNdydQCr",
  "key12": "aVMMyRmSCfttB3djUcn8jcZ6oBbRoDzKUFMfNJxdWdaYaDavaJAv9Ach6VJZFLkAwRdaMN4Zn715uJ3AdxBU8RK",
  "key13": "SQR54J6xXNYBTT5URggP5xbezi99cyLX4SADWfT1pFHMHoumzdwnxcsprA9Prbq8g5x6Ag5ZjfFxkRsjQzgdKQX",
  "key14": "j3Uh86qrNGYyzXyWRW7sxeFBtonU95wZB3EKh4XY1RTvy768ivUVxoxf3oys4ywLJDxGWfxp4cV5UAwbeKSyNpT",
  "key15": "3nGgGqEUCQHdo2HaM2S2ML8CFEFeoM8qHznpDKodW6UeYqyRCkpwdyTUiRiQMXWmaiXDgHtxUBvzCf4bLfGuS9aq",
  "key16": "5vhJGQHePLb8ihJMwVctok5VY5vPEUhKh9WseUhaKLnarYyBGq7m825gR759MMS9tMHSoZNwhZAU5B9sQe9uvE5P",
  "key17": "32c5gWjQwyVLCtvQp1vmNTDWFWu8zvYk9j1LEFGFBCFcrqSBu4qSYWUvEPfMjvn4TvGmmEu6sWW66BJz6N9KJyBX",
  "key18": "5AhmtrqKXtoAho7hebyQKaHfPAKc7ekXodbdk9WVHfMm7BNctKyX4s7MnDrvb5U4eaJ8nMMk5BqQVQcJ76yGzYre",
  "key19": "5X8ktUdhY3WqfdyBHLP9hxmyFRKWyKxxBzHKsSZUmX2Sh1NStdQyWAD1otopUXrZSM3b3hFbgKMCRAxhxN7sfrTP",
  "key20": "2jt8gv2wSQD6bGMcRwpqKJdVBVz4s72uy48tK6HLMn6iQrErN6pPwkrvWqgzvVLdn81TjizkXHkqMGNXaNArBv33",
  "key21": "5JCmkZbmLkcVfwekVLkUMZPPKpEp1TpQVF5F3JgSePThhSVsfadrqHsfT1DY7REhPYt8vM3Hi8shChM32wccirxs",
  "key22": "5qub7vczLD2SrggSgfXuY6u7GjcGkT18Gtw1y9cqPT3wrJsWBFS69f1mDbwTo8C4DXGn67feBxoEvaurhRpGSGx3",
  "key23": "osbVoeQmk71nmTVExxEwARg7VXv1q1y9qPPQ9NSn6XYANZbho9n2TTb36mXD5TzHZvdW9aeDAQv7tgqo2Y5u7YK",
  "key24": "48zytz1sA76heifwkKiuNpyuuXCdpvDQ2dDxbYqvASWNxb5A92W3RbiGcoyqQTVTrjm2ATWUNMD1KA2hkwNmRyud",
  "key25": "2Zs1j8rSavPsWdqwvUby6Hvytqwku2ZhKYVSspFVTnV2qmmTfqvwjyUwb16su8AttCTJx2JquiggH8HQZ8UTKoCR",
  "key26": "4RodBkBnnTMAURxjDntNY9nUUARrNvfyrs9DXmRK12vfEqWhwWP2KbHNoPFUh485kaCjiNHyZHspt3MXRtRHwBs3",
  "key27": "2JQTgqZNPtaK9N9Wyy8QkGVW1RMBSYrS2iHsU3r72dJyDuNPorFHRrRvpvfetzLKMFsW5fAMwBjMYPatPFr4Zfv7",
  "key28": "22Cc5BLKhJcxt4Y7AF5Bn7YLDBG5zJj2XkFKS9ivWwCT2z2AGuuUNe7TU2u4EHT5LdyiU8SZF4kMSDKwDPRNSmm2",
  "key29": "2TXhc6AdewEnog46BrX9AmNDMFsVNunND7W9P6RAjj6NZWDcdZeWiutVM3LAaUFgp4hTSXGaTmdpCUndT9UJP63a",
  "key30": "5wHs1YurdmN5DgfUnQVxadQ63dPassezWDok5KKwwTNXhRavbgaEY7NxCFMhXbWfz9ZHrd2TAqWrsNtXhTFjyofD",
  "key31": "3773Ma5Lh5HNmZ7TeM1kgx77J4NJgvcPox7APz6gbPcLh4YkVak2DmkEBULMvGpGwNxvNCPBsmjpmXhiJPTSyTia",
  "key32": "cTnmcUGY1HTYFJkqpEWsLtfm8brpUz2N9n5ePRqenqxgtutZyRJ9KYSPtiiqSTUsCsJ36UYgitWpRT6HKsm9LAb",
  "key33": "3eA6weAWPREf8VHqQgBjherLtq2K366yu6WxGQxcfSRn8abE2ebtcvFDbYrj65ULDk1aivu1rfkvBh9tSantQPtv",
  "key34": "h5C13Cdat1tLNgUvpiwzgmGwmU7wqnHgzaLC8diRvHKNEM5KDDqHwvdCzRDmuuYqdvt5saiqbP7yWtS8GN4DDYa",
  "key35": "2q6FRxNLwbWhDHKQko6gv3NZ5Lbwx1KHgLntSfUEUXyQHJNoGhh9aBZcB2KpnbNKU64TGDC8cJPi932DHLfnzrz5",
  "key36": "wLzB6cKLTDKE9RUEeYo4ynvTYFPwmc12zRtDaK1czzwX9xnP7AKxFy4TptYHdrDnVpNyZLNVuykEaEbDBecnQ7W",
  "key37": "3qm9LAeAV8PEzTpjy9191g9eGc52X6kcykgmoEEqpkjBNqbXGptXoN7cZ14GUvECjczziLABGbmXLFtVekaPmfkw",
  "key38": "gTg78cFRn1ieuDeyU6Bwc9ET4nZwmhkk5Z5PEYJ1C57f3ncE589qzkzUAxjvg3jd7GqRcAzFbwPHyBwwaJb9F4o",
  "key39": "5ar3DyHzbs2znhXgtLzE3MvExKhEAxrD5rM46H5dMRiNU9DSh4VT9EVm5hmbznuKkwV8VcrgAN3PMBs3WAkQXLog",
  "key40": "QTJyQ13eZwP612UxdLQfMiyEBKsKEuz9LaMkT1CmL8dYnX4yFEzn7q8SswkbPeCAjA94oFeqvEH87wvXLi2ADz9"
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
