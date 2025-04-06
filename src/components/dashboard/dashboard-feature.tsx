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
    "2ofkCCCv1HMRTWqWQgi2vLNUK5yGc9FUZWY8SUCpko7XKEp5RGQ2CGKpSZpqjV3pBHyJX1mebrdfgju6kiNXCe4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P92WSh1rvR3EPNw2qrpRX1aai3kPSCv29eZp42sqtFdfqJmK2TZx6Sj2ywrFkSgTHVJMx43DMTkTHzHy71j21BD",
  "key1": "4fSTcdy9JWUa6QbhGWGPQtsSsm2DxE9rAJuKxcNSCAAqWMuKzPwuvPwpX3jhNpjsfWkpCTkZ1U94yZgKjhUpsF4B",
  "key2": "4u96rgorTNi4FBtJ4o6kXF6g2qnVBioUEtq1S1te4Hq14V5Nywbd8JyKGW6QpfFja2PCSS5KS3k7Z4SPAzJamiwZ",
  "key3": "2HbQnD97VYLBRcBMmA6k2zKTpebZiy2tUiXGwHd2Hbrzr5j3GpTwaQnuST8vQQYD7or6kMSKmNHj2GAxWx2r2A1x",
  "key4": "3NUQJzBGAP31pVbTBV91YBjnKmkfR1oAN6urtApsLnqi3b4E1EnCdxq7fU1TxWsN2SdssQPs6v5W12jrfA45iXiC",
  "key5": "213VwBjBa5qepGsZJELiAnUsZamB2r973pADPad8jK7R3s2qZ3fm1YygVUGFJyvR3nAn8KTibT6VLswDDAuxNcKb",
  "key6": "uULiK5GspccV9HuSzAb4mSEQU5GWfKXTMUhbX9SdmpoJAuGgJKA8qxoT4PyRdbDRmJRsQ5MDmXAEqsQyE7c3VZh",
  "key7": "4VzyBnJyFqt42Eaf5G7i96ryRVht7VGzskWCYKxqWPmP9HMpmPzZeuwMqXzy1cxKW92NEQatgWwcG3e3TQP4eoFK",
  "key8": "2hgb7kFsu4ey7dU8qznjY51F59d3LGrbtHkedeMAmX53zv3TghrbfHH8SVb2prZMwUsv71WnJyZQrQ3iUZ1CPETm",
  "key9": "21f4x6D7aVRnQ59YucFCDPcM2SLckkTghzzyu1nbuPeZwvvzdDokpmBxoRykejFYPGLDtaM5m5LxnnoXqqyRqw6r",
  "key10": "3FvD19YqGMnM6H8oYLKChjerxN6tVhFTu5ppkvxYi4Sy26jVn1vDdWM2VQFcUbRR1KmWwt5FTfkRQ1wxrbnsjYMG",
  "key11": "4MHNJNVwUduMtG3ySuupG1uqpjXXK7CoEXeA7H2j148Va5VDJ2tgdcMdBMUbD5MnZkoXKQiDAHhhct9fAJxYjXpC",
  "key12": "2wd1ZRXjZa9kwHL2DepHWTYw4eH76Xn1YJq7w9iV71NXy8WuubGF2YxM46fkqWuy9d2GJrEofSbiCEKSDQVcgeLx",
  "key13": "61UF9eJE5Um4ooiq3dshe7sCjpDqvhAFG55eTTHx27rDGfDCCJVwSbBn9jYX4gWVMTahrFmASrF7bL2ovVuCX7Qc",
  "key14": "61tkLnYbnevozmztpv6TrvCV2GjPUzFrNS8y2PkVqm8QTkJ6APc2ccxZfkkyt2o1LghJVEVi4jYhZdaY8pkq4UxW",
  "key15": "4wsxGw954oUobd5jpKzjqA7PnP3J68FZQFMv4FvCTHS3vD4woRMLcpq4cAf6P1aCUu4E1p4QPysG2WaW3pQe6oUt",
  "key16": "4zvuwwBe8LfQftZPLwhHmsrZXspHEoPBu4g7kSUbTG6X2MzXHyRU35snnTfBLX7fBQnSHk6MAJuaMyNviQqqcXNt",
  "key17": "zB84Qr7aTWyzmLSMAexkdKLAf5gnRHNGLUNuC3c6CFCbvajgyPb4zVGSUuscWi9ipZj3qh4GyLyzkyRD3c6uYfB",
  "key18": "5dykXRqCZzfw2f5WxUrGu7K4WWc6Zm19Vm9qNwtUpNFnRBsd7spFXkJBo2AysF4qTM5X5oqeaYvAJ1BUrXmDGsVz",
  "key19": "BVG1A3X5Mrgjc5RAyNR5Z6297neAPVCdYPVHe5qH1eNRhEKkLADtCBeXBpwfrkE3nxFp6GnUfbibu19Tc53uCdT",
  "key20": "2yXFiEpamc1gm9AZtqZcC3mtb914bxU1ZS8n3BcDYjtpWKn5yDcu7mYdtJRtcyWj2AcodsKr4ockLcUaJ12LZL6t",
  "key21": "5V12du5bCjVYx8QndmcQyv8JA17WyPabsTfAb7GpHABzjM9gaCCQiyt7D2kaMpMgw9ASR4J4osgK3Le1GexKQEUx",
  "key22": "5j5imyYqWUd7Fb4TEhmugjLsCoSg72hhzr4AZKq9E8hTnSEk7oKtNRjqJAHN5ULniUWCD7m1JjU6jZggmmQHew4X",
  "key23": "5QEMqCxJezZcLSBTLRQU7xiWvNeutShmQa6FC73B7TLqEVfoKCxSUU2ZLenS2UjD27VPchU3Y415LcnewkjqNbAb",
  "key24": "5gm9Hwz1ko37tN15NaaCA3QdVmDrtatktMMRzajQU7XaoPMWS6eewAYwX4rmNzjyMq1Qe4FNu2xmJqBGTZrsuKkU",
  "key25": "46iRhGMnrTj2pXA7jXx53jq96uo3gAZyagu9URbz4tNZVYa36tTKtRbtzquvoQRNMAD5gCvX7yCLeBDfK6HzWD1b",
  "key26": "24rdRxxoT75vV44EktdZszSPeYNVwrt4beLyDPJsHwVbAWVtazD7ZgBzdFqE8KuMUx2c1LngqGZui6wtYNfVd1FF",
  "key27": "4qirRzeNVe7N63Z6Q5MBWWDMKGsUYZkjH18NRCMTpnYvD4v9iTmmMKoToHRA46h6KrY1xKYN7LmdpSErCsWmsa1Q",
  "key28": "4pkNnZLXetS8XP9JJTMK7vvQUX9rjY2NXhNZT6JFVyiqFeSk4aUroNaoVEzDQrnKPrL2VLaPGT39DyBbPxBAe8XC",
  "key29": "2vw8tcfpHMimV2SW28B4AD69UYZuiMussXNdUPFYsPFk8jPyyJEs2W3PwhtcfuYum9M2i7Mw7C22RAXrv4q5cNav",
  "key30": "3jb6XdJcEfxJNhtZk3kGordZ7HfdWJCjrcEnJBHy9DJzX3NrVy9HZhjt5zVXSKwXdtUFxS97wFEZnCaBVShCG5Rj",
  "key31": "4UU1jSn43h8yfjRZq6j5sJDCB4eQf4itEpsaraUhbGmHEmXZeqL9VaZY8APXxb23P6HqVv2gvytXRXrLmBxWgWvn",
  "key32": "4acL3momzPqraJjGwT9yJrpV7ahEGA8jiLwez6uLk6MabGtmvpVG8QUtEn6nkKczJojXKz94YnLLDcYbMg4EBHwx",
  "key33": "3wv8WigjSsQQ7FRX7YQvgMm7xHfj5MNknpcCPv2Yukdpbh2bNCdZG76RZrA8E6vtAjsgSKrofFY5PbvTbnaYb5iw",
  "key34": "4gDPmURTjK4ChwEu2HmPn1eJcwrBjPmvsViG8CVex7v4qVaqJrqHNDweunWodPC7S5RcP7N84VosWKMDD7vsS85k",
  "key35": "5BC7Fagrv5a4Wr6WhGXdhLEAnrhjeB2XFv4qUit7Gxk9uSusW5nxG5YqHpU6Ed2TtQsQCe9eFxPHpHrtgdLhiaMq",
  "key36": "TdZL6xPw63685xXAMW8r6mZ2Lfg6KTBBHTfvUBWMjYWoCiKESkLR1jF1Np6sAYtW9yzJBiyt9pKev7XhHo6soRv",
  "key37": "2SmAz3CUq6r5V6PymDku3aKAviPNB8fKAewJ4ko9hykaVbLwZxbGW1Zsdx7pwEYcWoCCx9fopJfMUavpPTCpAewt"
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
