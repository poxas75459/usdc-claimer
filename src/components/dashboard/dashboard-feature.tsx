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
    "5RzqKNnQ572ZRgnvzzc7Dcr3328pjCYXCb8smArj5j6FXYneSZ9xGE4ysMpmPPkkpWwVwJ5Mw65oZVA4CmhZUKit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dyp46EE1pHT3g5idroWhR5XhtAJvZk3SjtMHua2NLqZFD5G4eD5fbkijEejLeE1KT1Rt8CdiKvQFFmPbfuFoSRj",
  "key1": "5oKdTRSRDrFKhNaD1nPoy4qGko16kRshyc58zPv61GFHgHvYuKTaMpHCbupHmjwkzHtVw8diEf6NCbdjBdWyZf5W",
  "key2": "3oC1tuByRvLs5RGJgMcTXLBNe2nQpKRfcBzgdGKAirBL6xznze7o3Y9W1caJmfPwu5jYCFEicMCX2aHY9G9on5mn",
  "key3": "4kmmmr16nAtMaUpnbB7aCtx7AymSp2AdcAGLkhvyS2FGpTPEfqLhKe9Y8wn35QehpmaN2HnuhfvRC4uMNhJw4piU",
  "key4": "2LeJPnEsgAydzyDwpY4fJ7LHUVt6NwHmcuav4U3sPedv6MPPg8MtpfGpKgiS9GkVNQUZKy61EG25SXrofbW4JKRe",
  "key5": "5hsqCwZYCNiN5Rst6BrrrJevLsFZ64Uq931oJP2SS4dZ8ohrMgBRrCye48xVAChLfRiPKggrgv4xQDB76geXmP38",
  "key6": "3P53bgEnuKoKYfSTvuD85xo6d5HVLq4a7MQPxC58DjMfQXkBeehw35SFXwJRsdEV5sBGzkSDxvZCjqKF6y6FMthM",
  "key7": "5HxXSmY4xYGFNZpJLBkYPTTACrQ7kRCHvzaBzYhzfQpZ9TifMnn8GxWWsQkAyy5MUQrk9Bdr5PeDSdDJCSFGXSL2",
  "key8": "2m3TSqcz5EN7G1bJbkRoKCU2paZ4sjRz8191dHTC75rfqbPaSHkLgV1jfU8y679zyCx3CdWeSq4pktDAzdfhthEb",
  "key9": "H1DHmhFzTexQqwEciWTi8RStvrX2eQY2ACLfbgTS8pF75RBBnCJmnBpGz1LX7A6ZHwzEZ6smmigGaGfXKHLvHNU",
  "key10": "4QfhXAjcy2o1CNG39Nra6hpQFHcGEXsYhP18WUxuGdxrk3LehAPZVpZU9jFHrvYgDG6zco3MrBBdEoxQbzQ8DYLH",
  "key11": "4v5qzCkg6V8o33LpuvZUrHzAHNgeq44SPGGvLUtm1qhbYT3TNRS1mJXgbczu38NysfrcMkxcXXEzh8Jup7oR8ugz",
  "key12": "3A6sNfP7CC5SFHZPFpuXUdnf3Ch8UbHwu23NkmTLTEKLiUYqqJfCFcJ3chZrsypST11pXwNkXyUvfpjacuUD8rdB",
  "key13": "rSQRM7RX36ZSg8vmoexCQLaGpyFxzg9UedZrrqTHFR33qAfB3XsFWv1pUPm4jNPdsJhNVuhXhWx7WSvfsf9ZQRU",
  "key14": "uVYSYfBJFgZS9xa9pbninccRCmfyp11U2RhP4gZvZTACs14HRAJBDTzShpkHeNUsJKP6BycUSPjnggD2fNBEUvJ",
  "key15": "5NhFccJqDBaPVNCAWNmbGE5iMuEajeHs8aFXYh9SvxJFq1A4FiT6rCPSo2iULehduXvzkDWQDtGSs8CZ5cXnrfjH",
  "key16": "2FDxWBkSM5f8eVuERKrpn8Ty8vBCNxDeHr3yyp5TouN9GFRWw3hnUZfKGWHw44dKmkpYkUpWLY9WpKLKfBzL9B7e",
  "key17": "4nrugJJEqyvmsCx4A4DFWxYwVXugLvjAeWwVLpwkudyavhqhh24ckSRrQYTrMT31b8nmEYuMDnw7eaCY6SZApNUw",
  "key18": "ZrKgh2ewFVJ9D1b9yGcq3xo7ast6zrRTy4XCP4vQZs3Xe9B2QbrqznMqx9zx3FySUkC4bWKM5WG6PC49G38cysy",
  "key19": "o8VnnPMkusy3m4F5JZJrNB98x3AACKAe189zYYQFFaVUr1zJbCveAVWbmE5c45esoPZQUgck253Hk8EXqcAtpZu",
  "key20": "5ANKgaRheceZWFhytQRtongQpaBb814iu4SuxKmTXqbrLUygBuvbTQYQSEP559BwDPdQYaEJZV2CwJ54kPq2eV7Z",
  "key21": "5rBWptQqjkUZxbFte1RAQZbPNNqc3NhpySpUx5AvUihhPwSuvRPVDRdV88HdM6DGg1afGw7ebVipMSiUekDgK5eG",
  "key22": "2WzMmZzYeYEXr5hUys3oFgouJUGefXbbpGSrPBQC6RmzuGgqkACms5w3cztbjaxsnvcxy8aEYmUsx32wtFW8hrZa",
  "key23": "4GXG8Ja4JgWUFCe5wAWghN9eGrZKdazT4p1Q1kQ18MNoiVSQjUfKPpB6cZkBPKJGcQsB4yujKLsPh8him35cZCt7",
  "key24": "5WWB457Mwtt6cAgERnmgypkvPt2Jq3rqkxUpgJzBiE9RyvwXToRmTMGLZY6sShxnYc7SXnVcRXreqj2CREdcvaPN",
  "key25": "4hSVyxBFDdYKemsUd4N1wycm83qHMqvyP4fXECbJapNETf5NBmwcdwG2emMpiVpaksdEd5cGbCEPfuXtSR1mj8sD",
  "key26": "4P57odZxtUL6qBxMoWEHvun7Krzz3HaXYNvszmMfvySvYoSNQFDNaaUUsWLzy3wH2kyG4C4FRbdyLa8ihnr3Uxwf",
  "key27": "Lpi7UBit274nvyK3Rot6wNpd2CQeL1hr7wxmCSxEkbTfCGtT6FUaywPFKWdeLYc2xiE4B6ukEB2D4vtyprk3chZ",
  "key28": "25BnR8t551kAwvXvYH7o43RepKFfknBVCMYdwTS1h8Xk98vnFnyECn47kfKPbYnrqyLnMHXxQbTPQYBPHrH4TD73",
  "key29": "5xe9kt5eFWWM6A2sXWQLzZEb4JotscczwcEszhvoni81PhKMyPx6mwCKGVXTB2S75STPYagcBG9Sz6yvERym6C44",
  "key30": "3PduRfHjNM1cHGGH4y91JgJzefmkuRyh9xpicoTWyPyBAQU6PePveHZvkwPtn7JHuLRKbaLD66jaCom7F6XA8bgc",
  "key31": "58Psq6NY3U2sgf163531c6PJJWFNFZYNn1yTwmJbsbG99DJSVoP17kEQHXz7Rntca7xu9e7vX9yEmToxwXvtPByo",
  "key32": "61HFvf5x6mz1H6hxDAQ4uNKopA8C9RKJwM5Jezu5xY5oJdTaVLPVDKScrVs8TgvMrqgyvDQJfdjt1HvmYN2BAEsp",
  "key33": "bCHYhex2pPjvAnDr51Wy9WdZzy4fKXjb95aJn28ubmesfuqsshKx5UKh3k7ram11Xh33yp8ZN4zCufQMaXkmN1F",
  "key34": "E5pDroiFrc4jtPXxRrTxgxReoRah6VXiGmqPkXJ8TBfxoftwyJ4fLXZTfaasKJ7voYgzcutBsD7evh1tJBJc6HU",
  "key35": "2tzisd2M9yTmGngpdpKGZF3dbHGsS1JRQj1ZxwZwuTzMjyhvFqgbRiac7eeMdb3scRDoJFtHX7uDU8d9s9cd9n1n",
  "key36": "2ukMBfdZaV7Gca2xyTXYEeZJ3Le5uCZkgANHzcYaQYJU1JTTHTgK1hoUy4mPrfH7w7bvzoEmMp1DiqSarRcZDJuh",
  "key37": "2XfX2xRgp3N9LkjMxXCW8Nk4S3brExYtXEkPtmHrpN1PU1gDvxSDnxEermrDKguSBnfqXYhXYagvAzTu6RP3iiLx"
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
