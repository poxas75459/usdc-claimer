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
    "kp7xX9wqDJQ2rM5fNLPNjBKPQHodGvHxqg8hWDb72QatJp3PrbsoRDTPEjYjqVebCi9vpmeDBuvgPzNPwdGxx9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hvWy7vxRrdzvKuuhp9677VKu5N9N5rcHyDoX5EDTv29fkDPUPTUkXcpm6dcCr3CyfHdo7tdbjTG5UY3kVzUN2Yw",
  "key1": "NwbiqN9gKwUBodArcmWLHXnc5gcrGQh5XN8vkKPuD8np5vXZR5dVHCJEuKxdR3tyLw44FGkhw5Uovm93jY2QbFb",
  "key2": "4by2KBU1K1je4kDCAg32pYUVzfEq5UN1XdXedNjQFPoqGFKRLQ8qdjexjYcyXYVxaUDQAxvSkbxiDsuoho6j85Sq",
  "key3": "3PVWPyVvX6mATpieuDHP2NufC6rqDqEQUWQnutFEPmKhzfrvXVpmiKU1hsPk3uFMbfMyhdqdajghPMJRnA7UtRjU",
  "key4": "5qYZmL8xKg1omPAWtSg4Sxqp5CnjmqGVUr1wzCtFWwn3oq1UAM3zy67BBZGJME26VxQEipfv21ReU6VjXW6xQ21R",
  "key5": "3UuLSRofuRGxYnQ3bjabfUJRnLL8nh8KLNZVUdxhWziSqRX8u7SLCMRpKUcHjQQSq1KGaSyt94dF3EHgdbgN4SgZ",
  "key6": "4UK5qBV9edkNc1jtfPUe4czLw5VRrDbZLM8S6aUVVuvxpeDgVLpBrg7P9ppuNmQJJkAYwLG2rkem7P8CdL1Kfhme",
  "key7": "4FzHScLdqRN4g8V4vZpkNmGTn1gJpXdCM6L7zp6suTfFJ9X3ooFvfAAVsVPe6Uyif63jSVRn2p55atjcw4ACXeKE",
  "key8": "5DX63yTyxx6o5sd4sWEtHEbsi35bkQ77gWt4BvPR23x4V75efaksnGFaJspM8cWH8zgPtz3XBCBmhtbaCw5VWKvs",
  "key9": "VPYcxjVmjY4b3boc5JmtnhjZ4upYYuU8U964FKa4pT7E5NqHEV8UnyBEBFtTQWdWBgUDXXYSYxBJAseFuXS8dtQ",
  "key10": "5VckM7xgZdHyws3f47bzHqRtBvs6dupvJYXfhgjWTwceiczgWLQgC1tVQKiXziE32zmvd4Ntijpmz4WhCgy9HgsE",
  "key11": "65n5GDkaVknVVvCaTSweyg6hkoEaMJ2g5tDnQhmQidSQesfjMZqGcpeedKsLy9oPLuxXfwivG8MBmd77qpq38GRR",
  "key12": "3DKmKMoGDWser9j46FdX297xwdtNHVyi74Pvur8WUMgh9GcBUcss6o61SNcAx2uyU3BX2Cmg8AwD3xmXEnwhKzwK",
  "key13": "2Ut1w3BB9MfdyDgcmzHF3eo2B3ko1KJPwaPkrGhCBxirtNhmV9bjWnirf3iW7VjaJi55aKsVa4iQ5Ty29ez14yFB",
  "key14": "3XvHds31UxcLWphWfV6mos2o2yzicYuBs8WsjaktR3Fmrw33Bv7egBARJMe2aHxfmoxzhNNKJJjsmxA29EUBzAuG",
  "key15": "57BYcnAkpR5Syva1HNAVsd7UsrNcanMDmhVENugQV5BoHGTiTgzQuFepXUeRw8jtNcuCpkmJMwDvZwU7ArUXfype",
  "key16": "Soyu8gsXhC6mr8LN6oSNKyDu3Hfe8XSx4LgMJoDkuaKNsQwm28iAB51vi9cesyckeg6PjhHKXyNUWBcJvFoCtw2",
  "key17": "STx4qr1FkjWDZU6f8mFAG1sm4mb7BZGZQ9REn8ZcN2kLstnkVmGMqnGyquam4W87jaMEDQgTUgX7Qh3qPqnbD4m",
  "key18": "3yE6Eay8UikfGQR3pq6y71q9pxGyfumypsbNjKzd8xALmgK1Hy7rBTdTne8L4ToFZsybPJWZJAVX4C2D6g9K84f",
  "key19": "5dCi8dTX64oh5Jny1jp9HtQYMv5ZruWt1yMxQoJf8sPmu9THKmMbptQB2AGHexedBTkfVWeMFdfZz6Zv7yZsSYFZ",
  "key20": "3nAVwfa5T2JpPR1sdELGXQs88Wi5kvTBNcNy836YxMprz9AjYu359xpQgf6kwucuNab8k4j7g7PGQSW7KHys4nPQ",
  "key21": "5QFt9eHMWcXEEZ85pZ5s2ZxvVbGesPX7Pt76hczPRdzGwHKpstpDBt9onn6pkD6NuJ6HRGYFiEUcQC5d6GXDfGtb",
  "key22": "2MHZ5GiAhszFFDxaD9fx6gPgD2tjnv6B6EpyT6bNkpfgEVgVR3UhG5shZsrBjP3bGqd7txYHDAnoPhymT8tj7d4",
  "key23": "PezdStYhJZtmdiuhGxAvtdpKezjjYDZZ3rSEar8pHNV5NZ77d73PUTX25qZEa72UwLSmHqZ2UPGznsaNF5xAECV",
  "key24": "4Pyq3Twk9TZFNdVrAHStjiuTnQyrXZagruCDf6GepTkSt1evUpsGJkWd5f9AfYSh8HMnuiWJo7hfgsX7LHggKLys",
  "key25": "3Ecsnb3VhwVcTw2HbCsvvRvYU7QuhjeCDMHvzoTfmtQq1RvXdi1ngSb127tr9TuoVcDTG6TiN6KUJHd1qFAM84fQ",
  "key26": "ZTEr5NEN6Kh8z3699NzJQjRTXaAeh9HE957Gdz2SQ3biyjJ3fVpBU1HKp124pYjeXwR4KrdWcx2xRMJZa97Lged",
  "key27": "qrpV2R7XLjWkttVqWnau7aU9d8EdtcHxT8Xiomm3yKgqG3FvnQmDff4kFXAPpyjx2FLzLWAXyFMbe5Nk1qmnb6J",
  "key28": "5jecQMq1NQZQRcVnvDrhA8cFAwzaUhW9PvjiwHkaQefJh78Gnm6v49xhAmSw8vn5VAavw2tMetuxLfwNLTpGo1co",
  "key29": "BTVBpmcXMKSp6a5Pe1mzaipHrAhaHTKd6MD1Vdpnvk1impyKMM6HmhfX3S2r3cCh4dGbSxx1HxHFU1XFumexcMn",
  "key30": "43KpWtscmtdUSvARpThJqeyQmKzrFkDkWSV5g73k2HXtd8EWyrwFtfrFeSvCjMGLZZirLGt577uLN7vUucSqjMhF",
  "key31": "f85FvaVp6u9dy6fE2uZvBLv2RuaaUmtQQWW4Ts3L6fsj1MsdTXp7EXPAzLcqyJsfnoysJ5LiQZJes7GiqAkb8Nc",
  "key32": "4aNvPJ7Ua2RqfRxo8WrCu6KG4AtCR9QczWhvPj6p75CdcdJhJwgwU9eM8ma4wYoiZiwhuEPGDBjLqt6QH46a8thM",
  "key33": "aUU3iMkeqz9WoivuRdsuCrFK35kd1bRHqnTawdv3AXUJvc7nZbTkD16NhE9rni7B29cHEdMtCCn8kKNrk1sZj2V",
  "key34": "Vu99AUZne4cVb19EN5L8YNxh4QohrZKQ9xNJAtFKdHZjA2SGuxmkNFVq4s7oivZ3Fv2TW7Dz9CVgXU32uERWTaQ"
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
