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
    "5z3mnAip5bEGSSKAxV2DNHCGoyckZj3U1sCqeedp7mZU7RtqeSeyivDkT9LnTG2wpagLnsixzxi5aEn1MbhDXQQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WytNneR8r3p91TCDQ5josuNVGjiFjon9iWNSSoXrrskJw1ypPCcGgZQ3g7MVQxDYM4zMw89DwVXnoX13DRCJeyv",
  "key1": "2RCoo1c57mYRLao4R6ND1YGtRVV7uy9NBkWcuJjfwkmtMdXuzVwBVjQAXwsNjUJBknTNjwFyB9fzVG6TwNNskKwJ",
  "key2": "5HHXHRtXeNiBSWUtBfQUCrrsyReBNpAwJGZow7FUpmpL1VvZmREVAeaWDfpuww6CdgdFCeJ7gnPg8Jz3f4SYDbFE",
  "key3": "3ingqkTaQpo4QUEE2j8SkWDQD3vAfF9VELchJG96AwvPvTLpd5P3uLLZtQjtNEaZazTPiesoKTVPSQ1AxtDoQuGp",
  "key4": "32AHBaqnJxWeEr23rFUY58jtdwyZc7AL4DPCpMfKhNhUecP975BbrBVYQDzXAZXSPv6d4aVsJTFPSvLbEkTAhWma",
  "key5": "f8nBDYRodYLdBxTYqBxvFXTjjbQsf1nZrMVLJataPRzaV8EDJgRrrztQ1LvmL42Rz3XqvyFmVeXAcevYXrEGQdj",
  "key6": "5JsosgYvLGzS62pnh5kSZci3DYabGPfZQDz6XmAo4K65fdEvVtTFdrq67myTUfBxHRU8RAR2J27zJWGnppzCZVmd",
  "key7": "3hbPKFdBpfpbr6BKJcTZPfBKoxaDkYYyzLPmLST13iAaKbNvo3AeKqS7Ubw6vAZS9UVr1utD9JAScNiHuu13Sdz1",
  "key8": "28GafomxTH8jjS8VTcry5w6L93kYz4jSCTu6TCiW2R9XZ5RVThfuWsMgqPsb3uT4UmrvLWRhUCKdL3fudefFL4Vp",
  "key9": "cqYWmsToRXfipzbFjgtZVA9j221GjR6AfqCN11SjnjL9Cp7XFq9jGYXWLNwHFXFJHvAim38urcdMPXrLKAa39CZ",
  "key10": "2ZUWCAK3ZXpqT6KtbWE8SnnSuttqEdiXcRecqpaS5h1RDXYVA5ab9grGWtww4cXYwdm7UmoudJxxpGV46PcgfqXd",
  "key11": "47BwiQYj3EdbcdxA63WP4xUvE5yv3kYn4D2KU2d6vAtAjPBr8U3QfCEDA5CGKXEto9rnD7Zk1PdDs6eToeDeMMex",
  "key12": "3pPTcNtYoxEEQJT2mwLLTuVpwxssBtP5LoiiCkdrYs1hP3rTEWbwyVkhk3KCZTQonQMU3grx4CrTEdzTnq4mPuTN",
  "key13": "3W2y1LbWPnsm7mE4sHZLTmJX3FuSARNVfFFskQjhYkaKidqwK6nnRRyGMKjtD5B2eeo3uqDZwa7AJtbFrQQih18W",
  "key14": "3dWR1iirt8Mf7KHSo1GK1njYCRmU3q9R9NdDakGzSydiWgN7T31sXKyddotGxiouAZD615FtvbFk8TJJA3gpm4RU",
  "key15": "2vkQuCLBTY46RJVqF25jr7P43Y4Yeu8xzoKcSFpWHHKF4izXdThuxWbbsTwincLNm3MV2HGHm9eZfcczmSkSXdfA",
  "key16": "3ZEztwZEpLbxZHN4ZwWkVQNp9Lc9GGmM9erDSvUKKgShn9fNEaZfsGXLWhA6QodvUHeAFbbvmrNke9jNVsCD7WyZ",
  "key17": "Ut84SMbQSapywSSj2pnR8gCmqSnms23inBjYtTyjsGqT9J27F184S1PmySE2yXG8L8RUMe3bs6xmsQqtWfQZCpR",
  "key18": "4LdQrwz55W9wyuvMm7TwKUDqKVmEAD3bfaaMhMSy41EksWA4oqrts3tm7yUdw2oC93E2gaKD64XRyoF3w3v7aY9F",
  "key19": "5i4YCoXiuxfw7EQ5qt33XPNDMCB7RBCyWdpDfGuD2S9nLarTRbuXBS8kjxFnDxhSuLd4EdAGF5o5N75QcHKxyCmp",
  "key20": "4SnJhDgJ1uyH9oCpLGgEVitx6v4bTKW2bNq4XGdT9XM5fS4diftrowEX9Gj2vmE6v9p5b6wXKwK8zvG1tgxMTqxB",
  "key21": "5FK6ZNjBkz65eJyyENCAekvzBytWGzj8Bbk2jjLG2kpQ9PQZEXvnmCFAQv4dpcPJBdyrXT7uMr4DN8rUBHtG2s1B",
  "key22": "CBtK8CManCrzbo8qweBHeUU5C396vc8By188DiMh3ix7MUAA43WbyHAPtgqML5vrjXHwgniuXzoyCum9EA1eim5",
  "key23": "4w1ZR5bQ95MFNhhB6vF6dgoDL3NWyadbQGAQrcekYVt9qyJaG2k97pSqd1nR2253ykWw492C9BUZE6spcWNBH8hi",
  "key24": "kr2BhWjxtdwj8s9FSZHChHoRn8KXvujXeKVK5hxn3X3YhfDHXx3L81tdtpEpdEvAyz1f8MV44UwFZXtcTG3yAdL",
  "key25": "4dhh4JPDCHHyyBpp2eXy57UHN44FxyVDTyAKzS4LoUy9Yq2baDPTmLWRXXZnxy3bBkztQXBu85XumgcYoQEkhcFA",
  "key26": "35todvCJwwHHPTjLy2yc2eT3tyuPTaQMQUddVNqUcVpFUs7K4wNJUn1k9hbhVL55CpASi7hi1HUYPCyUmdzYmYbc",
  "key27": "5jGSecn2JYPXzBnskfKehWL5CY7VNrcuMWL7hpbKePab2RkecBGdhbTGxBkhY36DNW3HFKygtQq6EYAA4z9pvrmv",
  "key28": "4os8RGBBv8DvN3dnPqFzGn6xkczPVadno1SZyhr3r28S71ypFDXsEFHt1ToZw22HAdbABoE4rGiuSrPPfia3nXkd",
  "key29": "ysvsbn8KrzVRuBTRcEUeHQHqTKB7eU9Zby9VxiNV3FsxeToGWHFKUXroZSxSo3nHwCyyrisjc4TAa5b2gdJShYe",
  "key30": "37tKpfVtBrcp7eDQgme1qUpbBMATSeHvhf4ZgBUMsLg5xYnoWg3Y9g2rpTXqQuXh3AmjH4prfew5LUuMReD4dPcL",
  "key31": "2Ybdtxz3ntfdURqJ7ZcgW2C9B1d583Q2YUBrTtQXrpszHmnJ2XPkZAXMGVEQreMr4G7kyEETzdo8ZSrr8TRuqXfW",
  "key32": "3EVgFsA1DE4zprEKPwqRsvGqaceeWtTZx9Y7VAaFQuje9ySWXtmjUUnBxNxRxLPNYu28T2t2CzBQCVQqFiHhn6Vc",
  "key33": "3Hkgg4cBSoYkRDEaWVcHG9znzFK76dRcghw8MA9c6NJCo8jG7G7pm8KQh393GzJ5dqy2nBHswF4r9iGas4fQRTY1"
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
