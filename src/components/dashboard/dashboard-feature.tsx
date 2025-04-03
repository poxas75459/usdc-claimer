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
    "4nZGPysisPCXcdpHmt89JEUBgfVfJ1B3yjc3YEhgeQkviERooXh44wJe7FeqwQqzciQJj8EdgsGJrpetjF6b8rnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qdCFv12FZodNmLWfesuuE6Jt4d1g2Nr6nDuVHLQzhXnqSDrHkxtRQ8JK2MKHyi7PntzCvgqBHKuPRZd5jk7dVK5",
  "key1": "3ofaGP6fyzpLpvLYHCpFqADvC2DuistDALpttz2JncnWhJFedsiwD6p81ZCirjonXw8qEAuvwF2B3DPE6iRKvoeR",
  "key2": "2d6BS2CN2CzDSQLANFp3LaDcoaWv9GTyCcDwLU2FKoHwbNxBVM9ntmyRCXcd3TXRaZaxWNPCmXR5HuvXEtwwZCP",
  "key3": "5pcAaMsNArPEPK6b7jo2h9G5BSGz81nrsmVPQEo6S5kmX5JQsKg8FBHieJFpDmzVfd8itzK8QkgdrgRxra8zAWR7",
  "key4": "fZtLDMfejZ7wWqGYym9pk3nrTLAWroDmLvCV1qnsMJsR9uPR564vEz36FqiUcCUexzuyrtX7RwGUvWWLyRfEYQV",
  "key5": "3YUYUohqDJAmtvbncD3BYDTJaFJEApP3XGhxg6HQEKdnAbw4ZuAHAV6vU5VV1kuKXFjEU7XLrSEnz7ep7K1GRgRs",
  "key6": "qCkJxjhtzaqcZojzBTghADuJVJq9HJRgbQ1eyqZNo9axD3CUnBfHqE9KcQSW8nqWmzimJDeV96nTJytm8vMm8eF",
  "key7": "3ai6Q8DubN9F8XLvQJ1YpJ45y1tYdD8hiMRZMh6wRw6Etzagf4zv9BTYbhXZHdMkVhFNDvvDBxj7HHkVbLKk4gc6",
  "key8": "3cSZoMHK67Ubax61KEum5NFBjNQUttNpANPYGTej6siYa7fWtZjM9Hrs3gVw6X7wEhX7dSfi2Ex4DdocMMLM9kQM",
  "key9": "2v2nZJRaBLfCw56GzEogKbWoEeacihTg7MBy2FBJA6KzFP4THdruXqLNBn7MAEmkeyvR4u4zSX9rKaZYrvYUHn1i",
  "key10": "5Unmd7mcUbyavTXbYrhNhbJ9SnYRWvo3sHFe9rvGGWFvSm244ke166EEfrXyjFRBbsG5KYNBpsrsST827JMr28Zp",
  "key11": "3CPSB9zQB46HtfZYDFKjvpWvJy7DhTduXg41LW1sEM4Jj4WSG3RtewDRbDeED4o7eTDY14vFmZTPZefuoq4EZXSu",
  "key12": "3eNvHJjacHeaBTUQLBL1gp4avzCa4N15pHegHoH16nRE19fR6AJBFDLxU9KjCSeP34LxaWz1ULwVrjAFb4CKjaYv",
  "key13": "3e91bTrnpCpA3Ve8jsCNGkszynPsSVoGY2QtG21siwu5VNqi1CGskXu819BWs6nSbrrTc5s1v69iNJA3kjGNNRqt",
  "key14": "3HqZ5EdpnjxUkYW4Fi8bP8VFDxbiNJimSx2NVTNse9GjHvQmZ5FiSuq4QshTcgU4Ln19SZjbzG51JVyEfrTsPAR3",
  "key15": "2B6boU3eqUup7ijPFo8yj54FqWysGFa7UF3tMkxTGtkxyaq1Gynw4JhLbCtmUJcuyjuSWjcXmX38SQKgKRAFiJA1",
  "key16": "4umPPHgZx7NA4UayL4xEeuMPA1Cc3W6oCiGiwFJhJNAsbKnWS1a2RPZ4Z1kvWNXePepGTg4wMXDTGSNFeUuTxved",
  "key17": "2FBUjK1rKfiaVFLriq74y1h4LirPbAAAemK3ReDJ3fGaixqQ1wM4JoskpVdyGnc5yKyy6guqeJ17vA9i1gY5eccA",
  "key18": "5WqKQTNUGfnb6x9tsqxWUcbbgMx5BpUmJz7wXr1KprunzjA1CqjJiRr8JP94gETVhHdo4mw7Wsb7jLB1uqBWUcqU",
  "key19": "4T3g5XswjqbEX5RhFbbrUmoYsPLjaGZyv39Q6yrKYUVMovs2KANLwtCdj3c8vYpUpev5iUUcnELLEBGyRGQ7wDvi",
  "key20": "4FaYqk55K5LkxK8Gj7Z9wCUKShwrbkvHTDHZAatWVP9AtDC5knnprqw4YTWa3Z8Z6VV3Ya2d2A5wvcQmJYAnXgnB",
  "key21": "4uZeaCveKD5Hdx547LaArBRKZWzHoJS4QwM38LGS5E8fHvptRzFW9eYz6g6d78ndDNpFRamepWCGExm3GTRdpjPr",
  "key22": "5mJKN4jFtHybtvHgVi8dqHjRuDBqAEGYEPGNNAkwT6SwB1E5MgkP3hYbSYBZtHCdhr8vkRFTWSrECPQ9fPAeheUv",
  "key23": "4jnScMhUarowzxcTHk7ngqWzCevsktU96rHLL2brqiAYpUnGYPuayDPnJMNSuybgVsdV7FQdzEvFijHdDp8BNDWb",
  "key24": "2wt9ZQQMevBToMK7XGCRU9h69qKeDaifskTafeedkVEjP1cYrHP8HTFnRyQZUUVvYXZP8wCpEbTAV3fV55Nt2Zxa",
  "key25": "4K6EkRZB14ZW2Hs7vU745ZBoPv1rcHfcLkSmqz8dpAJZyXeELj8ZSWaHvqemqGhhdCg36noTvZ55VzShuQbQBAvf",
  "key26": "3umDWHQh9VfvcR8g7Zxn8pXFKzdLjhbmzE4P5vV2VGwzkszAST684qg6466dNbtQbF3SEk5guwgFe9G9TJVqeRGz",
  "key27": "64uY9q83RNW2jTmbeDE7XGeqsfFDpHipuCZkEHST63yHcT3deR25Liorpwtc94ykj2mHfDKfo4yydFf2JzcnzCq",
  "key28": "Ux9PwSjQxKSxqiPdMLBRgn9u2rQkjYPAuzTyoM5V9TRAmJ4qVdEjTivA42QSCRKHXEFot8UUHsugKyEeU47fjLT",
  "key29": "NFaFR9vSS8aDK9f4H7DXjRi1mrKmopadsjf75qZntiqP6QYp623Rf9X35J1fAvRdy1pafr3Z8KcBGKPEWMTh3zs",
  "key30": "2y75P9aSSZZQwxugVetLyhYJqpf1eufSYHjhSUT2gHpBXvPLnKnbzVnnwn5fRL2Bz3Vg6DHhW6a78PEzybfEarAt",
  "key31": "4NeaubDHqbXeCB8Nip7zyxMb4NTqUhAPMLFXeUpkc45x2n4jxSsHRmFscZt9qJPG4HpnhXBZo74ueeFG8WAmWcGo",
  "key32": "2NkZEBon8RXJgPreTL42EDjys95vq7KzTUEoWaxsDuv5NPgnTjMJx29XjoDzk43wx3BWR42my2qVjRA6uDskgdZ9",
  "key33": "3mjkmLfPrQyQmKpP7t9gjitUgekxJyA9qtxMWYwGYhkJSjYrNnVMEd36ZqTowtqSQ3miDGAxmeXJo2g4iRU7oaaz",
  "key34": "3mWSp8imwZfsQxoHu8bKNR4Yu3t81RBsVYFTRGPVt49qbTMU99kR9oSBA24ioJQM2Qa7aFjDowuM5RvzH34nCtR9",
  "key35": "TfCtQSwLU9iy1SaykooJoaQJWJ3jBE1y79jf3kXMm43YqisV6vowNCG41Kw58MsqjLPD7qRAJUJH5kUfxrsAtu3",
  "key36": "kc3upsmW1fxi42YjYzXFeUVh5opco3PhopanpWqekc5H29T38AZLVrQSKsq8wkBbtXGHRg9R1Awrmn7vLFfJysz",
  "key37": "5MpRcLtW6m1R2PStmzEyok6Y9Y7XkQXL2dRAFS3JYLfyPpv66Sa79x9Uk9vu1dgDQ7tmyxjN5gcHZEMhDkzbcceA",
  "key38": "5mkdqVoa93a53TWzRZxY4zkNJoqPNz5tdNDeVutR5hZ5u1NM1NcABXP4HpHq95TseSdxNtdrfV6cefWPBZLizhMX",
  "key39": "5YsbSJawpoYf9v7sEoh1u3XA3vDWZFuMsUsDutUm9DZnPjBffARbuBPXG7K61mQynRYGaWwq7TuedifjBB9QtQnZ",
  "key40": "2auYTv86Sw7Q66ZjZkg9927URgoPxhJk95NciyTFcEVBDUcQiWTpS9poMsF7cUQxaFztiEcSLxbgtGHhfK7bP6Tt",
  "key41": "RdxStugTMjHPdcunqjg16z4iBb11VYj8RuVo9cb3JiKJ5YfgQfjJb3JXqo3rp7e3EXbbtxcVQAGH3AYCJd527Tm",
  "key42": "4ML7PiopTzzLCmMkLGYp1CirVvv3MnLk63AzNgxzMCGTdd1SVQuPDh3Z34oac5Zhv8HpnRamfEKiP6X1UQUUkaKC",
  "key43": "54vrQPxjfXPRQazfou63zRn3XTas7TUVK8xEacFTVxoiVjfizJ2u1rLgTizb3g7waiB237kENkJ5NDmiw2B8vVEQ"
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
