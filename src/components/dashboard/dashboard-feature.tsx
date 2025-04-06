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
    "4N3dWTzDWUHpmDS1TeYbuCWVtTA5Fc5NxAY8EWR527LafSB4AHhogUNJbKiF9ZqQZQ2eXjvfUKD6ecCfk3RLGDxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyq9JaAvwX7D6wPXwHtgEwwZEjScffSjrs7X6DwJT7G3JgFzh4LDBjBFJg6joBHcWFZWp49cxGQGPJWfoEgJDVT",
  "key1": "3LwcW8f85msLS2esRoXTqJNRDGNZ2tevaj8d1zWGPuKMLD8RtATFQTJaVLEK85hS4AURXgUpykKGawYjxBAMvAAp",
  "key2": "5hNYnFzdfgot3BZ3Hnt4njmaEPMBd9uig6mAAyLDdwJwYfcnLVWa5PcfSB2VgT1hKxQ9Ubf32rBJjJVmSx4g1mcY",
  "key3": "4vG6f7rBQ3cYEGLTzvDnsbrtnkfnoggCeQK9dpaF1dhmTLGecQ8ENwQy5SpTDKLANLkJRTXpxRcAT8SkrE7npvCm",
  "key4": "24nrWCDsx14kN8URPJkzuQ1L1eYxWaWuD39u6eoLNubdwi7Mt7FgoXKg2vbCP12mwNTS4eTaimNEChpfGjrGw2Wf",
  "key5": "3KiTF3iR34AUi9Cav6b5D1gvNZRm3sBjZXTFZbgDBZATWw2j2LvD55rLNmcCUuhinoiVEuo4Lm4EUN1KpHgaY5Xw",
  "key6": "51mA7s4JELTbJMUGYFtU6Ny82cY93Tjo5PuJpRiXCaEnavheqqCw18gy5Vs813L1JeSwCWxuTymMRb9hbQDqXgsb",
  "key7": "3cgKPuZQWqZ6QKuqb6nP7aryPA1tDvHyTpP3jhVYtZnVpBMggQpvNWNqTnFWkrLNiHHV3iyKqwWRV832LJHTk4yo",
  "key8": "4QGddn37Vyjfo7xE5i8hHDSVDomjiXj44wmv5STJYmRq3LuCk2Ge3fi8BrTvdHccSugPeXe8ZFfqciPppEmPNYTY",
  "key9": "3EVo1Yz71VnNV3rQKXPG4kbybfhpMeZ1nzWdVqW5UdRezHR2h6KFiX2pTCV9RqmhDrj4JZLEPtRGt2bU2NoWpoeR",
  "key10": "2XCU8LRUZRCfojHyvMiL648uVhzKuQ6Uj88KAXoJZ3DaahEZi3RpnVTcTpes1ygjcXbzZb3uUzcBbCqvPotDFs2o",
  "key11": "61q45s9prPG1e6Z1sG7yCgMWu8TFv7r9rHZCzXb1Y4Ym2Rx1RXsX64y2Q6zx2QzouqTpiW8CwqjGCteR24oB4uXt",
  "key12": "4hmNF1yEu11BE6wvTwUkwF1o4chAQ3FfQq4zvJ85V4obSsDEiTkydixuzGSJLFMSgk9Uwf142V27pDdXBj2XdwY1",
  "key13": "2HHkkJRCpojPJabLGnVbCCDwnBc73YToSceocPZ1Kvxm9MmmHdRGPtFLxZ6qxhZJEnFwdG5nnfSXc7jpRSeFPGZa",
  "key14": "RotnWGqqnxBF9FcSP6NSukQUHtKy4nk3WsDA6xAqTQoR6HuJtqWSx46wpTxmupshsx3X9THrm5KK6aRhDiZkvcY",
  "key15": "5RxvD2gptGFcNSs71k5bUkR3yxXxGUkjjuQYMzmMbHf3M3FZKXT74w7RhWXTXUvZJUkitS4hnmZwjCnj6L2jJHBA",
  "key16": "5RcdDHvF2gMnZ4go3L5ao57wc9kGi4yc8BZPkm81y1Awk8AQzzEeZXk6L4iCstaV2JEiwwB3vFfeH9VDrrLSfZxz",
  "key17": "61cqFXy2FqeBxemeRRvg2iqCKVBLCJ5PR5LrBU5k5U1eh8Gbt8N4aiCbpSPsdao8ArB5htDzrQJrD1ppEzq34Jrh",
  "key18": "45Lxg7hT5NBMRYHZxqsqypTi2NTs8mAgbwsFQHkZrtmaz895NAaEginKHhd9xAXJfFXESBztKBNQVGyykf9UN6mo",
  "key19": "3iy4GujqixDVfd4FT62AUzfoTKPXTZJF6QLV1YqSukRviWbMFEid15heN6aqmYnTpxariZ8xMXxhmfgWnBbyHeUL",
  "key20": "9pBrWdDCC3X7WLPxErcNhpUYtxTYiLdj6xGQV1sFm8TYbcK2aPa6PM1UBHF5shDNcz339UnMhUAgM1AY9D3RWhx",
  "key21": "37fsDcRo5MSWANsJaFPrMSchps93TAuE1mqZZYN6QGQt3kj5ETKDB3dHTFJj8KJdt8MvBbZpZPaM1dMDtpoJrxEb",
  "key22": "4UCzn5WocAbXrpR69pNRjSDgBbTkxPhLe1nFZBfmpk6sbr8PJYDGNLqdJipa9wiN2fSLVnfa984JHN5Fj4adRTLt",
  "key23": "2Uu9ty1naxyYJyS19iApukvywstMEuYpKQqEnawKVzPjsrHxfvfNehJMnsMUXAY6EMBZn6Nre8VaFDFZS7XPiE4p",
  "key24": "4nbQKsewmz8pX8cGdGzGPa1LHrYbVWfuboginS9oALEtV3AACYqDNfwmJGJiVq2PE2kN9zA3QLPaHaD6PXWmjxTL",
  "key25": "2PYMgwV5WdTihsUiN1G73cGJ1g8qW4TYFv6As2rGLK4r64BPsgH1tUzSP7wHL1FNF5Z1rAjGTu6myxpduL7JiF5X",
  "key26": "Jaoh5Vpvcsu565sXomzbch98j42FiViuRYoNvRnSTVVKA11QCGsWCyhdJADbtyyhbW5nmXcHC4FZUgyxJy9jdXt",
  "key27": "32EsQScNHFSuNipx8LRgYoac2LB8GE5Zb8EopKTa9zBAwenktkvZAS8ejkp652quesBRGhDVBRGziAsstXSfHZjn",
  "key28": "1ah1zPjmbiV7bbD4hjEP8acb6tpNEvVEQ9E6XQUTCtXX2X6eXycLatkrK6ws9VJLPRCXyfBTAbtwxog811qUJCs",
  "key29": "4XmCgNtHKbLD36MxyLGtCVAwoQ74A8DtmzpV7asAEb2nd5XNUPdjPzXZNrubH9kFZ8rGAAdW19sMntnt6xyRvUdU",
  "key30": "4n4Lo7gpnfpCXFuHxTP8FzXDup6KxjaFgdG8SF9pMEhSqCyf7wEENFKx95egYMkV4vXWjftN3UEZntFydw4zHhAS",
  "key31": "mogC7sooHGTXEkBMus7U6CviPkELPSx5uWfpvzmf6MhizTxESSKFubKYJ3dKEyS9KqQiYQ3A81wMW23kgijJQAQ",
  "key32": "CpUGJ945p3D7xHT5vb9VofD9Vi7FecWddcp9EcPd4Lth4GQ6AT5DNKAucBFppSfFDYTuQ6ELf2yPmQ2ahtmbam2",
  "key33": "27LyU3hwprkVGZx7rE8s6fb4YXWyw3DScnyKgqyDXyKqXQBJT87BjYpWtjj6yRGnhDDNUFWQjQ6QyvDjswWDwj9K",
  "key34": "2oUyYHtoBDcgq2Gs2xjAFZiqa5NJbR7teeMQL9suF4DGWGfVfSFxFCAz64SoZM1pjaCSaFULJAVryoN9SSV2dBtD",
  "key35": "XWupAjGvMke5wzJpot4rcS65hm11FmDc5kTquNEnuMDLvZUVVZ7KNVPRjMwKGYoSEzZQQPwPcFafiTDxhmzw6dn",
  "key36": "5vrZw7BEHWei7WiAVejQx7cBN2RCynQDGgstCEskAdzX36EmbwebxHPTkB8gWeX5DugRRVJFAiBzD4kbLLDkYB4y",
  "key37": "YNx1x4ko84ZWmfWsG9mJXgdYoDMsGT8toSHYY3UbDEthZXgqtWXaTrTu5PzjnY8NFgix173TSwRSk8E244Ze175"
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
