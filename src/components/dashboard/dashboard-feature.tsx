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
    "211tLsoNmKFWMbAhkKJV8QpsL9esphXFYr19jD3waCHj6z79idmdNK2gvk4ovaKGXEJQNavcR94hjwan8bCsCJPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45RUQLCMPFymebWzZ8hbY8sF8afyS79DUEAF6XoN2JxPHq9SMueTEH9TNBPvBdMDU4Din35i2MCEUyPwsmvbLJ3A",
  "key1": "2xMTC5roStwBwrqTdELrCj65xnjDEPw2otJCGhdciJaoa5BzRQeZFKbGG15fBEdiatYqb7QXBdLYtcxPRCPZMUkj",
  "key2": "5mDKUS8f42mxPHw1gMGGXpFbpc5xWwgv86vEc1XyntFFyHjD5w5qYiRB2BFeWqna9obzmbwt87SVvWQhzKgAg7Lg",
  "key3": "2ck3xCAw7JhSyA5KBWDfb4TP4z9CvWFTfVXpaqFx5Nms5Gr5WJvoEsQDWSJzTAbhsiEN24YL1XP79K3dLfuQfWCf",
  "key4": "cSXHo2HGJndK1E7fDKRKXwojZN9rVEJHnLZn5imTSF7a9xqPNRjNaSnyB1x1p52SxbCdyepV6X9h1Fa5fhNLmLa",
  "key5": "44m3wPvxEVDc5ETJrtA3CWJp64B5oiKDfzyqKZxKiMuB6ch5ZCjGDnaAxWEvY7XtCEZpvjbhSL8D6FkDpsmR6LRk",
  "key6": "5Xyn9xdDBvUCcGwZuzKV3fEjUidAUPg9ZKC3aFfsSFg9JjqTVE2z5o4FjAPHnrLZ3cEUn7QkKbEUiE4pyQ6WyjV4",
  "key7": "3NmEYWfBzr5RyBGaxP6RjK1LzEZJ9MJEK1BiE1FA725XHYcF6LKPt6kmePNSidvjGefSLms4WTuc45JgTKBnVstF",
  "key8": "3Jas6RrSzPnHPTvsUkRUCwBTz6ZEMRtmABy3kcgwXTLpvx8dDFPQrAqaWZNZkumfcM9kShx9riRNC3aVxh3wHjMf",
  "key9": "361oxf76S2YovZb78R3E21VDgcJ2vnhPBX5jL39Mn5HV2TGNgAquNZ9rXFDG2nqzZwM9Usp7Tpwy1hnjMzSzYGDh",
  "key10": "FfJcFqdnA2uPg3McqbFHMuzEUk6wRmo2SXL3PBqfcNr7yhdfKVQUXmwyrH2f7BN7FH1bAZmDAzf4BsJzJvAyKvq",
  "key11": "4NU6vYwVZbZzY7TB5GwhGgyYithAfbqeF46qbfDfHjSQtphNpJC2cmxnWDDKtnWNjRUjX2oemCQqi5Q49nF1Rg17",
  "key12": "4YVJAtjqPyaWm1ptWe2FEo4KG2AFS7Zw3k5LuCnC8UHEZegUvdrdXe6foNzTweAP5Z5qim5JsbTRyP2QHHRnFtLT",
  "key13": "5NtFAbBHWzUwoh2xfeh3VLnvg2QFvx5fdWK6ugLYx91DJ1UAhZjMTL9aLEceitJ5mpF4AA37hEiyJkws1nNwzEap",
  "key14": "3QAfJbbok5CeHmVyvUvnkaF8mgZDM9NRh18eWwodGbbwyGoeMfS1tJLYZiJmvT1Z4mpHJ1b5QEZYRLUtDqYSUZPg",
  "key15": "2wGQXrZYeqgL7KddGmaYqCLQJ1cqbMypHrL4Ubes5kfzrJeBuJJW8jp2K78oqyRX8mwZ3C4UpQNMKTT7fbbTvz8",
  "key16": "3rXQhgxLHdXycimQWWsTNNqrbabmPHi3gBpMZhKy3jt2CAo1om3RrqmFu85cJRjvbt6aAoksAMCfJfXv9wZXBYHD",
  "key17": "4839EHcjyQwAitmCUGiGzHWgRCzWAeQqQKjb4fwSEZJ1xUfkgJWWT1KTebutbkFxPdC8txgNnfWB7b65Uhb2gQnv",
  "key18": "edWPmmpyGmTXpGcvdH63YYPujnW7azUVfUZoQZHsjt7xh88C98HggvrAGRz2NStJPS8zPQZ2W2Mkmw1qR58VEQT",
  "key19": "2BnoDqFo13AmqZ1FirsEarurBbNgeDf4DXvyeVmuQDmpxTRLLzFZZPUCBfgr6S6GR1TcFgefjVMF4tvUHubU12Xq",
  "key20": "5iBoWsC7RQinigXqeBMQw6odv2gWDCHXwRgjYEpAsb5yGWyTAvE1VTGgzqkMv9SH9ZnDEf1kU8J5znsH8hvAWuKD",
  "key21": "2oA7arioPNNdq5X6nkBk7WB9y1rhvcjtNgYYYpyk215wfXDjRyhy2dTuBRpwrUkxGxoHEwt6miQBQAR13WQnUukE",
  "key22": "2j5Dy4immVHJ8R3EJwEjZAd7dQezvJDpSpKyC2xRyqarxD6QQoEMnbBRnSUjTFeXyPaJesPZF3bNBtNfTunhRM8S",
  "key23": "2aksuThRUY28GSXYqh1ZZ1zvqZ1j5QiVypZroFqzG126T5xWpMdkF8HD7opjyrvRukddMfPJ8mh555bVmrYBy3Vp",
  "key24": "3LzGuLGWgdA1qE2w2s1V3Miw2ParySzBZcF528sRmoCZ85pgtV1jTz3v8tfEfMr7wmkXq5hL57N4EoQBJfwdQrLp",
  "key25": "4A6DavqJtSnYHyB68H3edFM3sfZ7LeGNFYd6Z1UcJGZFCduvVWhS2WSnLtxMcTuE5Yc52XnDu5astoEfHVZX4usw",
  "key26": "5Qv22Pf9uhiiWmwW54PpBbc1DFnXW4SA6Cw4ugVXQTZMWTgPqF7xhifVuQeVxvs73SjNkgShE6UhfrkJDWAFZtG5",
  "key27": "24KfHeWdbTSX6NKVU1wSbDugWSHafdscAVEWUstqvm4SAmYGumcm3QPBULcDQruwwEVLcjoCvgFMNbrmWtujvVBV",
  "key28": "3urx38fX2j1cyhUa24pv3iWdtHTEs9xfa29GSDv9pMVoeSMSfUjZqD925nuFYqQDCWqUSXeUKUejN78qnMEBujeb",
  "key29": "4vfF5Hmtpo2Xq2kdQAHKagbgVvm1J5mAZHccRvaTyqn2wMRZRrekYBP6Ht1fcv6D7B729Kv9LWpPZ2WrAgqt9Rv4",
  "key30": "5AXiU5GD9Vv61Fr3C6imrL48kiRgaFKy81KgfCEuJ1FmWigFSs58gNgr9BHkV48E799GDnJLjYkZz65YLrd3fTxG",
  "key31": "5uB5JL1jMeFFWweTu5Jmw4DHXA2T6ocy7UMBsqzUzckHVYXhNRKtobfeJgJbYqtDCa91emuLvJLRQWycMugt2YS",
  "key32": "4q19oNE7nJ5Y4ATc23vaZdgoq1nErjx52nkDXZbT5ZoCggNgApgt4u6k1CqLkth34NhKqm4VA81L49dcbcDfG2hH",
  "key33": "48xbcvHYfncygxiXSXhBTKVsD8NnFtiYpcC2q33JhqgZQTbAMqkmSYtkN2CiBY9t7t3EStsqoA4KsMY5Vz2uhixJ",
  "key34": "61skGu6hk1gpCJH9yfwhQozJt62A2x4WXLVFpzmiy8EDFd5Ao8V9w9PCdPKQCCDKg6mQYNZoH3xB2S8z9vmhkFfT",
  "key35": "2Z4jW5RwGeUzT72Ee5JkfJpCiJnVjZuf3BwpjRG7jUweTHRtu149B1HMkgJrfSUip1QAFAy1Fri5rtzsrgs2FSGy",
  "key36": "5yDyky7N7QrvqiDH5Kh3zCW53fKh5hZyP1RbnHUJKjtMzYCCGFqkM5qKSyyQZeDXx4Wc4e44hc9qzEnsCuHfjbKL",
  "key37": "2pdEfy3snetgdpPUs8vggRX6giNVyUWgwbGsB4cCzTZy3ftxPtxahQNNWkcc2yMbGCUsaRzYMpjXcf9Z4Dy6xGQx"
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
