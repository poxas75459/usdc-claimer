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
    "5yrc2KJwuuFJz9bqw7XPNZuxKuKMrE5YG5CHi6oZAJ8pUAn9UmYZGwsfHZcgpZkquYsze8E6KREqF4qbPbSH1bqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVJhB2bnCCMToXHzKxiTfhHwr43ocvF3tHRRxJwkceHc1tWKPJfPqNHbsRoqKwDhJujtychauwUMqZmEuzvcN1N",
  "key1": "XWy2g3MStYpw8BiBAYsC1MKr26E3FEeHZhruWfhmwsNZES66xmyBhVpX4NQifSJcH4fNPMFLnYG1pcmiSGtLw9Z",
  "key2": "4JFg7nfsmCg2RhwoVjx1AxMUyhjZm7N8jhiuTnhEuyvtyRYiRNVFmDaLRPqQh2RfofYTYq1Fs4MSXrgkqFHJRd2X",
  "key3": "yswx62CYX5mwEmbu98UHuxmnGAPTycW7tpxgSAL47gQzmJYWqpjtuNu4Ay3MBSe4JnHRHhQzzV4nz3G8Wo7EUn6",
  "key4": "2GNooivvux7s9d7aSBiRzgZuEhdbWk5hM1dYKpbLtuc9hn78V71bMLzWBnLmXEbJwixikHbMxv9J65Aj3FFxfhHh",
  "key5": "2La6vEBDBrL1dxkMeZQ87r9dvQzUV3knn4dgFC7twRYS7Jp53VsJ2rvpPqqzqZQGho1ya3fyUUQBGuCSndDms98W",
  "key6": "RTT73DARKm4WhnKtNVT7ms7ZsNfBq8g4BYsZAv6ZvkMwY7badpPXawKJ1s157aTB498FmTFX5otFe78q126UEM3",
  "key7": "266whBvVYtxfDMXvAXCxR1bXfT8p9JHNpaXghuGeEY7jzUyH4PhttjxpeffQ5Hu39EFoo3ETLzUTbgX6caxgFvEZ",
  "key8": "2oBeFNnzPQnmFTN76XQYHCx9pmPfD1WGpwwnJSerrnHPfJHYov8vStW6JrUM2NgzKYerjWa3j9t3Xycrn7ZbuEmR",
  "key9": "2yDbzgFrkPmGyp5mRezHn9nbCiKJ3cZxB2s1cCQ2zdMumXDfWLV3oTffcmPvLEx9ymr4AVjGTM4Qg6cE44voH4PL",
  "key10": "5iu9Rwb8cUNSTHLvEtDmZfpMXdvuYgh7UcP2CGLofPY8jqnbpL2sShaJWpRbpXprFS1CoPKAGpumuVLyKQyiGgaG",
  "key11": "61cuXYAyfdhPYM5zVT6bCF653CLp5oW6tyzPLKg664DhZsML7ukC8ta9S5sSSHxwCXwLFAhPr6QrFoFparvuyzka",
  "key12": "g2Ea63mYMXieaBCaREYxfTyjegrRnpgzAZHdi22ccDi2ebsDF4ywCLeTmZzsumj6Hg1dptYW1hxaGhWnkJsSxnA",
  "key13": "SR5gM7VvMPwwrt8vr9GHBiuLLTBTpciTMTxgyDEwUvbuHPBZfR24duUiiMd22i7UqJGB2iED4hKtit7YT1tMPH4",
  "key14": "5pMUJVA2pvw8fAqiupC67ArPvzkY79tGzJYSG4i8KmapAho5nVNBSzqgcyV3afSvWCeXgkh153LuiM75itHX5J63",
  "key15": "5CjLoTJKTeq4JVDSPSjgeXSYDk39FjfZQath3j17pi2QkbCKy9TUtG1fVMC7rgfJCiVjk6ZjeKPdgQfXB6voTBME",
  "key16": "3tZ7MM9wrLede5ZdEZD2S9LQCSSQeEuLJeV3U45K9euFTC8YJFZiwAGnvBrMSVjgPzVpvRMz55zYU3PF7R8zncks",
  "key17": "5xpoApjztEKu5daR9xzRK3hWSVRTFoPZsDCDtLu3qdytvpvmNLhHmoEnQHF9fHKURijmzXbriahW78p9uwL1MSjD",
  "key18": "2vg2F2o7NRgF2y9boYFhEWNtbVfRfeyT8BrnZBcGxipa2hHMYr28SZzhzzgiQbzmm24FJQmA3NQh7bQWj3NLENUu",
  "key19": "4dYbNDrPpHqHkS7DY3yrk73fG5jhSSGJkTHAdT37wt3tYMuhsYVc7XEXgYcvUGuMVsDYnzCY32xNb5HxiQrq5Ckj",
  "key20": "BQN9t85c8pPCiqbvFnGoEbMru82C2qNQtRRDcpELAhqbXkvwP81c8JswwK28Xm2WDuwxJJWaWPrrnRxLYBroR5c",
  "key21": "4fYhacjgGV4dokcffg47Fx2Tu5XuNUka86MpJN4cxa2ZUd2AM5WyJUxfNBNKnTmkTjcKM6F4XApwzH9Jj7swLjC1",
  "key22": "xDYSeZa8tE7EE4dtzeCz31ytK82oNuTp36dGm3WLBL6poXLKMwFD8R7tDL46gXd9BGg9AdTCufAYFwhZE2MPmb3",
  "key23": "4cyWed193oKDPSZgYxZkLvqmtDZQKjxMs4retihe8y9Sgi5ymvfCjGvBzN6Hsu7fcjbRPjYmqGkGntuVQ6mn58kf",
  "key24": "5ocGdoNBgjvEkFfcA8xPtuF1MPgWQLdWWMGCZ3R6WhDDdUiwChFPJigHTU42kCVML7Aru4mWsmGUVcyUXrQoNeZF",
  "key25": "3FnfzTHVPTkenFCZLQifbNHzDCaFFPv3ceRMdxDzGAcY8tBhnxDYSR6suBppLP5v6oGfQSZhgQ5nVDnDaBj1RpXp",
  "key26": "2BNmnbMhxofyGnwPMgxxP5DjNgdUVGLwEUASvRPnz1hGDo7SD23i17qSgBDQFQLVyiZzB1vQCbMrxTAuFNP2azNV",
  "key27": "a55fuz6domPMLfdvjdVb3NvNodtMNCubReYjm2GK12UpTnJ3P35R8HtQ6uJkpjxUyneqsmAcUTCTtmgV9rypqLr",
  "key28": "4RFoGtD1WNzKwgfjjXP2jHL7VwCmK4oWSuwq2rMNp6CL2A1j2kJXXNBZygGQntFTj7vVtQZmxXYiCUcTfXFLn9VL",
  "key29": "2D89HP3UPPRZAHxR4pfhJarzz24WyskoBNcB6sDrttVZhXpwfbTNTsdL3S5ePjBrRXMbmQn54EQnbP7Wu5j7CBAD",
  "key30": "3TthikBPA6vVU544KQ5R6n1MKoBEXaYrhNujuxUCuh8tFwCE3rEPFqnVMhwnKHK8QMLb83xH82EuofheS6Z65DyT",
  "key31": "4knHCZFiuxjtqvLi2ThhMhaBBLpcPACbHCQjHxF2twJP2Fkf9GsaMzqKVgaxhfFNG6ocMy7NgQnLioSGiWeSJ4fh",
  "key32": "35aoLFvpJyE24LWfScZbkzM67GPX154j1aoyioSMLFTdEyW9UzvqvKeRR5eESGikoWdL2sd5MyptZNVLfi2in3fy",
  "key33": "4au9FSiX998vUSi16eD3LZADrGqLk4M5z7CD7L8HjSNtgqEDVoMEXaQ9ubNnR3as2xNnNh4VYHCe3FjCeHZDhbEq",
  "key34": "3cGKJ1nWfxdQ6aTR3hAmCMWMa4MyJrc8F69rHTbcKda3q7nb9utgY6SCrc9hBsz71V5Dz7bdrrgWGDcM2nyxg5ww",
  "key35": "4tm5cjFUDiV9nswcg6LG4q94xd5ySXvLJZfXKx4B7SVdA1VAVdBgQRkCijSi2tFdEAb8N6RXfJ2j3tXxTmU1gKGz",
  "key36": "53erP5SD4VVehDg2GfAomKU6HXe8DMLBEVzeZHx8F4BhLRgKz1H6VHs7RRPgBYo4wvrZkupz6FaFxgtFM3x4dBNP",
  "key37": "559t7YkFSiWoq4S93EWRK1FMp8uWNJqewiT7GhHzAYfKTFz5YoaoQabzKNoBt5AP637LhaS2XMGR21DfpWLT1HQ1",
  "key38": "zwx1mUU3sJfgE3G2RYUMW9EgRLXRnMZYaw9GPF4CoRrKLQTKsoowtVcPLdZxV4qrrsSdSLVCbNwz3HWCNf39NFU",
  "key39": "3uYCRD9JFbtbLmjQzTXYE6kuJqKqCNiNjnEhK2HX9nGQ4tRuVo9fxD9eeaMh9AZHdgZBYGo4GTEU2V3wVReYQxbD",
  "key40": "4ApfFNKi2Yhen7Jmd21RHR1ApecLrvb9jEhTh8hkdmCrDVjPg2i7ho1XYUmK6TXzDvNuKEKqqHptSgnsLpvzbFt7",
  "key41": "3ZJMfRy2Nw8VDsifb74wzpXK4M3JJuZqWoC2ue41faMoz9nbYKG8Evk4PejyrPeELT3z925YFuWJJsDLTjvRMtur",
  "key42": "32F1mZJdEVSr7EBER7RXAfTwSNPyh1HKy4uh4a1QWjdB1kRzRHeLGDoQfjvfWerKPWMdrrU7jJx51muQKWydLsQF",
  "key43": "5QYSM5ok1AisBRtQNNCXa1tsdkLC6ERowUtpShWc9hEt6khq6ED95kn6dx89sEoydEX8pVeJ5M64o24YPjdgMSxG",
  "key44": "5PQSZ43HP7qfJGUSUdTAK5YuMhcQTzb9FiTvZfPPADHTFL9voq9azZ2ANEMkDJi4Ktco9N2aC5K2BmY7q7479VFk"
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
