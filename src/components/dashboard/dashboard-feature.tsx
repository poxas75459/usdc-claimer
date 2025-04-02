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
    "3JXaVzvDhBYtXRertGukZA5GoGLdT7NcAjCga4tYHR9YaPvi4Q2dxjEBhuTF5n7Gqm4MQq1x9ta8tnYDq8csg6RC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGZot3ZZmkNLMXuBL9EHzoSCFwryQtcYAS8dikSx82318JkcvfzrTWNpuyy25o73Dkvd2CSDimxxJw91c9Hc52Z",
  "key1": "EQAgZDdsxMdLH1Kd8iRVE63cj8yyd6EniM4jKAb9UA4Nnj3z55eMnh2XCths9gM9FfVKEezx4Z2tUVmAyy6rBP3",
  "key2": "TSom3cVKR1ozN2dDXvyspRVfMhhCaJR72ZZFBYyHG5aQmF9ahvvV8DbFbdZa16pM3EBZJ3N1zUpFwfVxic84jBQ",
  "key3": "3Rfvgx1PYntoGjMMXGpeydwfQUjv99tWaLBec14kM26q113zrubxLdXKtfeVf4PDMNj931LAafoEKvhDGyJMUbsA",
  "key4": "tLw6BWzVVL3Kyygb6QSqs2CWJPfsBK3U8RH17K9nqxZ5f7aWtmHL1NcKteXGkNnjT5N4P9CZth729kXp8ZTjKga",
  "key5": "53rHKEfiYDKubaZhMyRM3uDH6UTLGBhcbPm5ogHTEK4BbdfaT6hfMx7pnRpd6jARCGATSyD91zeutKZf8j5cJV5r",
  "key6": "2ATLCxdGwN2K2oU1k22yfp2uwUdASbVeLzHNbuMgaVTgf76B9b5DD1jUgoL7NqbwyMC3TZ2fpddmEHbXfMEMVaUr",
  "key7": "5QeshFs6AtBDVJochu1rVaFkQzx3SbMGxtNwLBkFiXikmqRrMHdKtDKac1Gy7jnJ664WguBUdjUni43VW9KvbDWv",
  "key8": "5zagoC2YdWTMQQtansmfkhcFyoSsAR7pDLt44WpZ15gzVcbGFNZVFFS4ztUV6CMcbQjduzjsLmzuYtSjywHTYQtK",
  "key9": "5DKXoWBB4PVsYHhUrK1Frr326dJvR4rTht55mve9FRVHuG9bPFhxG1B5kFNhrCNMTkgyQtYfcXPkFEf1aEkNeaAz",
  "key10": "2Xmfiw1rmNNNN3A9gmZ1q71QRNUe8DcC3PrJGdA7s8x1SZ5UihsCKXoTENqxxfPP48q66NxM1vwLY3RHi3HYzmCE",
  "key11": "3YstHbidGt3AgVWCVdQy8iA4epE5evdkyECXWWAG9hoywAQo7XrjYes3apC6DCXrRdBfuLiC1Gf8NiHHy5c9zWt7",
  "key12": "2YUe35jXtqksymc4sdMNhf8b2DuMrJTtaoW13dMicEwyKyPFnhgS6MWb3NZQhPuJkyDnVMwqVxhC85JbLiRrnUqh",
  "key13": "SpYN2WpJaJJbioPDHaApxWiBoUaz3YD4EsEhNi8aAEBXtP2p4aw7jVBRxRFLqozQ45YWWo1ctxtTe3nyGLMQ9ws",
  "key14": "2o4oGwVvXAzmM9SqvKCP3E3Rpx29hCSYL798pYp8QhAFWGF6FMBWGkxBFoHMEsWs8sCX3JD7xfpuAowZk8hxUnmT",
  "key15": "3HtQDPuaa6kPhyqvui8veLyhPfmB4dckAgngThwVFWBcFzXW6LLC2P4QiQ8YKmkS7EsyPqywsDMkrbKrN4Tf6nGd",
  "key16": "KncvfoZu8ENoYBR6LcVa4QwGiRTgVsW3C6xrxpCP3DVvzEDr3AcTv5cfJdXiBaZ4YJo3oxAyYJ2wzMTBN22KsRv",
  "key17": "5uGs2ZseyxBy8NsxujmjZRsbdf7wVSiCWtqBTQbR3dmFCeDCmjTeXCqpY72Lb1itNn1XZhDtkqocWKmRj2CRmAxk",
  "key18": "62pZL4xu2v9nY7HkrshTKxFixM7bm8jdtTqYUKSTLX1FKJgihhGiRUf9m84pdQquToDfh8aehKHeudqNGghNtopX",
  "key19": "3bgMAjA8FSWQBLRXHeyTykTy9L3WV9hXGCDMZnrRGLJKQraFzPrVonK3tkiv2xqCj6MBtHqvB5LmGmkspsvRfyRR",
  "key20": "2dvbfcH3nYFVnsnHrvcRMJV5uHKDyqSkWqzjLneeAmWTjcRAKPjgFW5NGHgdKQZRJ11oxVxQWV5K4UdpZR8PVaLo",
  "key21": "58qwGosJNji8vnveYUR1qJ6cHQhuBZckJqrMk1ELJgSWJZvg9tFDAecXGam4Rby3nmEZMsA8pMhiMf7M7ZYZWShX",
  "key22": "4U32c8SqpfX2xSXcaSmNyrKk4FQBYsLZPxViHMqEwa9BkjCAdD4NeyDxzAuWqtFP25EzxVQqJrZn9idEon6VA8G2",
  "key23": "2DCffHCZyZHrTrcJtiDxTUsjGiD1RfAqsg6NvwvTQZqdTfagQdRgAD8iNNrk3tpHqomHU4Hzn8KYWxfUTwNeSxea",
  "key24": "66qzQEQok8D2ZNwULKgaeLFCCYW9Z96brnScqnY1u1o4Vbuf6SoLybeukt3MYrrEPgdzMsBrRnw2VTNKaUa2UHjv",
  "key25": "4yiD4x3qfHCSf1CKcXjVmCsQEvVBhC48E1964Gi6g2FPz5efYBC9EsP4LXGD3UqzYjqd6Zo1ndZnCHBHPeex44A5",
  "key26": "56A9Mnt81GAfTLtD1kitgZi1sFtsk6tERcWeFpVbQtvm2z6KwDLGDia9UiVPD6FkFyjMSdUy2v2rUEBrrQwLNeXs",
  "key27": "5FWewmYBdrUQQpThSZvowY1Lmp3yhDGehfjcEXqy2YphPjo3xyTtiSQx7L83ZgcoNNuLFsK1n75oRvaPYhCDTzsk",
  "key28": "4UNadcfTnKjUTk5KK6TUxWAVRoQDZF2pE383mggVg7SFX7G4CZfHBA6JkqfCUtoREeLE2GyzzGVzT3URk2CPuxZd",
  "key29": "3wxwJAY5tpQruhiMYUQpHC4mG9ssjgW9QcCZFTcAy5SKAiZS66av16ZKBC8moGVcymN2quvXYNPc4XbZK9pyPvsr",
  "key30": "3BAhhRwSfBdAT27Dk2r9AaZXSeH5AfiEXXemgoKB4mutPci1HCL3SRBywL1tyyGvsb5ZR5XZggWhKGvLeFxVzhyY",
  "key31": "4YvpfstXQDn5S2BVKDkgg7P51KvfnZgJVz22UgXAPRG92p1CFimJEf8ko15B5QB6Ek9HQmeqGRpx7zPzydACK7HG",
  "key32": "42THnAxZ1BLw8Xa1SvEyCdpsv4hf3HUTnto1Q2QGEt3mcBSWqhyfpUdARupx1RgNwukitNuR1HZ4azNqAtWApjhV"
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
