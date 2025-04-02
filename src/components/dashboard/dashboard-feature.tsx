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
    "2UE8NaaaQWXPZcbXhNbqY2M8n8AtzDvY3NBcSuf5sTnqqipF5XzwZT4WzBAjJNkDc6z1g2n3dKKNnBTCFEJrDWW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVJUQv9ia1ZBRmHDxx6Zvy6EW3kfUDZCFPBgkLcDM27uA88kAC5Leax2m9xWxV1daehHXF9beJaSEd2qJ98AQrC",
  "key1": "xGGamwNUuYa6JuvcBiAqbuJmt5an9rxH4nGy8AHftQsfHCqKt8iBgCUYgCpi3HQLzVnSFdrQB4yXBbuPtVH9YKn",
  "key2": "26cbWyeDXkuoDQAhnpP9AW9q9HxhuCM4EDj3hpc55zDwDHFB3dirz8oWNA6EXzTxKpA4LTXNGJesNS445S4T1sVZ",
  "key3": "3HPdrBbtcZo16vPE8zPa8P7vqSsTAGs8vwUeWto9uLAtqZZ9JG4UT2Tf4ooDEhCAHrbnPVJHKyswe7ifiK4687ut",
  "key4": "aJn3GnneawbB9tpr2nexzE9nSDsd8gnAmn1hTRp71DD5jZqXpJY8T6aH7MEE7AD5sWtFBfZqt2zY2tovnveFfvC",
  "key5": "5WxJ7vnEDYg8EKmv92PWQFNWtEnPRSUGfSPf1YprHTHWyemcUSEL68iod9xAvdG8Wjoo3bRTk5WoecX7DGd6G9yV",
  "key6": "5NVqfitVtmHfVzAVJNM1isDMWAd5hzEnJQe6r7oky5pYKcqJVC6UQcofLR8GFfumiMTGXLgXKegsQDvaP1Pe2xBB",
  "key7": "3RiUJuTTVdyxiHWSntZrwb4KG9k7iUt7UFkALgSdbMeiBuz9Ma9kPYhjdN5eRm8SygsXARLz3KwQZS5v2bk4briw",
  "key8": "2AQnaKyG5Lc9qFkPuw4WRqWS7NoF6C2RRztbsaNEVas7LchcX43MdCf1BMoEKGrs8cuF3ZgUwmuhWU8o7nBbYzwk",
  "key9": "d5EwMYZQNabdkokXiyQ7H64aXPZY7NUUy5NnVTXNMoPeoQQoq8UskGp1NJX4yxVEpd4dTJtV56XK9HoGCSPawQn",
  "key10": "3KQKpR4wrN3waynnigbUs7smYYU565jNBgaz6zRQgr8dhBXAjTrSxBMGsNpHJibT3NYv5yXRAb1nMMctRWm7pZqS",
  "key11": "65Cwh2puN3MwS3JZYWKDySqVdFzXRVxBPgbNVoeAk9JmzPhWfL23feX3dB8xrbwWLnqR3igtnK5jzQGkoi4mHGmz",
  "key12": "5VR3RpGRQ3uUcKrLGUJyBM8Gh9uLoXCph5oM5FjguEtcuzUbfr13btjuyehm62xV3JgTehJLgNeNgt6GvvyN7465",
  "key13": "uKHSbrkuKzWKNTS1nspL7tjomp7vXXdLWcbpXAvArFJcBCNjptJiuTEvrain4rfjaRoAm3m2FbN5B36uoL73Xmt",
  "key14": "5uxYFd5wmH2AZm4opMHVxGqwBgD1EDJpAPyVeEBooHjrP7BMgNeDyKjpeNW3siijxceyA7t3PLdAgijjm2RVquvN",
  "key15": "5eVTrwtNvypjUmiBLZRCmNGEQCfpZhmLddtGoLbJVezZ1sj1riaNdipS2SZaQymDR6f1CJcnXx37mRantYAaKcw",
  "key16": "4GkNBTxMWTWmpvB4Vo6CcgAVrCfJAFBGRPdA6r9mGShFtM373cbFLACkDuXmRhJQMwwyAQVeyge4MaFtKkSSqzgc",
  "key17": "3A7zLHQw2KsSd7YrVzuaAaKwb4w3ta7mwvBGDQVnau6hnjerU5izYtP3keB88LYSYZBrPDH2md36Qj1VvRvTLHyK",
  "key18": "5jDnxXB2JpxxNFD2yaaZ3W5wnPAJjGyjKrA27AjT6w1RWoURzACtLLbGadXTfGSSfZwxxSgNWQyKdyJAUyTFHwW9",
  "key19": "41YuC4VEv1XCkTn3kGSh5X5F4hgCVy1ctj1pqXVhzMqxSLr7B4YrxyyBBZZqPG93muiFdXD7BZPNrznd7KeQ31bj",
  "key20": "63X1157JwWGBJeWJhWc1aERELKwvxkbUVcWfxGE4aMZ4SWLV76sSiPCfi9C6aFQDfPiwV22Jqkj73jf9ntNcWMRw",
  "key21": "5NGF8eptLqAhQYVbrHHht3UaKB7FVo3VRLap59wArkPScBA2cAB4UWHAqvtGuLWM4GwpWWPRrcLLAC4ZMj2k6c9j",
  "key22": "4mf6VhTWugPYznMFi6Rg1wteyhsqRPkQSGyw97r8aSXZzbtBjHRN3LNBfQh29xmVYTehbdR1SkeCjZdh2CkQQsHP",
  "key23": "65t6jb3bNVksJQwUpHju3Kcvv1KJSRpQLZDNSd8vTuAnW5CKuu5b3pmGe9Hy4oXUQshjvxRQH9UXSDzDrNf5jBFc",
  "key24": "AHiRX8kLan2EUE5L3DrNRSCQewzgLyus5BW5TvxMPzr8ZiB5RdasLj3i1y1hVgPbjAXRDMhStMCeFs9mT8BEfvr",
  "key25": "2rBY7HsDfenEb3CZyhyy1ioidvvFXujiNZtfYB6MyJzmVtzmAvwSKtKkp4haYapS7Gze6rbutidk2WgbC1ikqgpi",
  "key26": "25TwaAcKeLPBkAHnXo2XGMs56LJuWHQMGmWQbq8HCGdmcQ9x5Ws2zYhVwqTV5isFih8VtF5N4jWhJdqJzZy1BndF",
  "key27": "4dCDuWWuv2ewBU1Xt9S5Szy53rm9DUqqEW9qwPVH8B5EwvvmV6fQSgi88ouu5ZXV6QdeyMggR1yEo7WqEKiWDnQB",
  "key28": "4xStPu6qN7yadh77ZrTEyR8MqJEMpo4WJHEPdp9NDP68oK854Z3YuMJyX4UpBWYb1iSQDaDkzCS3AWR3FAHs4RX8",
  "key29": "3XC9iqxSJYYQPqh7WnuBrXdshoMwq9zm1HxRpkEaB8QEUg6CLVA3TsmJC6V2dLR7TEJn86m1GxQTfHAQnQfJUYEV",
  "key30": "4Y8ziDzDP3e83NuqNiKMPbwzUm5KCwVzUReNSn5YY28PUZZyJwizWriUcm1dAEMTyn5xG3uuWS31Gywzr58mv9e1",
  "key31": "Z89DypcPCMMS41Q3VsiiJCcXc9R64Th8irwYv2dTKWzUqi1SWwMAaNrLbqdgXZwY7rxzq2uo9KNgJQdd1jbEvhY",
  "key32": "3fHwfTsM6i9UNfX89aWjHJbK9H5LCTNifaAWEB1qjUM7LzBF6UDKA6JMPECHKgDfbNap429WtYdBQGQhNFUXhe8N",
  "key33": "4Z1QENkoNQWdQ9Kghp1wx4si1AKgp96BdqptC9TLKQMcENHU8wHbLiUhHcqa9YLf3Tsf4Mm1x3obu5uHy4F9HNB4",
  "key34": "2TwqFQwcsbcF7E9RXRJc4JRVoXuFBzK3ufputa3bMn1uX7RkWo9EGJCptkBLoSA3hC94eXBVj3btztxUzypF8jjW",
  "key35": "oF3FGWH5mpdG7jMpdTuP4yN4ggJhLsidwbjBLJWXxqrds8axTy9UxBo8mU2sUspRCNNbATeuSMQUWg3wUM1wJHe",
  "key36": "4x92zfaSq65WaHct4By6L9ZSdCkS2WU3aar8vLp2Kvkx4DqTfgunbQcozGDZf4Ndgs37arpmM7irCR9Y6x37NvQq",
  "key37": "4coBWeHyVCvsQoKRtYRuyZiuPLv4hga1T9LGMUrjC349rDNwBbUcMJeCbN5bzmcYZrJSPZ2qzq5noLzAWj7oFkis",
  "key38": "twsDCrBZm7pGTwNPnR6jAi8PZeDHoyTM8MheYmuPMwYkHRdB7xKz5FGxcjxwStcTETxAQuryxKF38MaxCR6PNsh",
  "key39": "3M7C2uWEMGiPM5SRXQ3jNSxLUhRoYpeqTG8Q8HP4KrRwTcNy6n3WndmoZ99aNVG4u3GM1G4agrpsY96BRNTz68sK",
  "key40": "62UCVsW2c9wpjNXSo7ZfXMhrsSR66UveXN8Jyk7ak97RxKuh2XmGi89o6ui29DoXB2TXGiPeqnt2uFhmZb5agKve",
  "key41": "4493cNxhcuZYwT1RaWwZL85r61CD8vkXjsJAXxAvayshCsN4LKLUvfrkn4VHHNQ3cEpjsHEnjd5tsfcievr7Y6rF",
  "key42": "Xi2CkrEHHrZFpSBy4tEorAjx9xqkAfSX4BrHg5L7BNYJ74CHEha4nbfZ5fuHH9J2kiZuf6JaaMVdhebV8NwJygR",
  "key43": "2xhsW6rZJ34NMpaiB5QwpSH3Zx9vfN5y6qZmyRH6Q1EiP9VpY7VAeXycytcScXyi6CAc3vfkHPd4kjBqnCjTsALq",
  "key44": "NkrFSseYRq2oCARkwzEWiGFdLukfg732zgPLiAAqAEREKFmvnT6dsiFNzBeHb4NZF6KjoSo4cvCjsDEj3Gstjrc",
  "key45": "5sEWsdSqmNHX5AUURqDmj1PAWQcdnX555LRA889qCE1Zq95jENacPCAyiQ18tZtWdaQhPkmZey8P6Psr6eQRPbCG",
  "key46": "52Gt5AoLsv5nfnLLW8HLh1mnJm2o45D8xoboiPyaQ31ewJUB3vuKJsmwUnbTKxDG6am9uxrVpXRLTMLwwxKMz9br"
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
