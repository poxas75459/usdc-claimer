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
    "2QGLQtCrjVsn64bpGj8YRdyvGXgpqfpEYCtrJUZ9WvDaQeaXzmk3L331NmApAypgrWkG7eYvGphGTRsVbi8qJ48L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPNtNfWwUVKEeLQf6D8kXAs4BmoCVhXv7YrJSnU6Ne5nLyJaFLbSqNiWiU8iY3cKaTzfKQXRd71zHFTag6Qdcfv",
  "key1": "4mvcPcFK7qMrS3Mfc5XaRNeFGeie3xsxcHAHusEghpWgYxdkPXHcFEykmUwneDe93tYHdAhAbB38D5KYwcAYuyL6",
  "key2": "5JtNCfUUQZGvUh265qp2h29VYLvkdE5Xn2rAc4h6dSKFq9mZ39yrtMsgcwCRk7dbXNNN9Ptr3voY5W6f55nps74K",
  "key3": "CEf2REQxRvE5JqoUy9B5zhXUZPxY9EehPpE2nCwVLPDscNsmVzrMiBXNfx2aRsGYcrVAnWA8Y1dQ3jPxoEzNMfq",
  "key4": "14XBSj28HkgKKoYE3BNPZq2zYy5SL47TZeve8MUaJRJrPA9mK1gBpmLXHDjYkYYpHDKjFE5474WNyRh8KbBouBq",
  "key5": "46g6JFHiuXTwQZWbJvBRbx1d4TUfzuhpiyakgjzTxfQzwZ1QvUW79Vd6f4Rr3KRG5QLdug9h1v1vgHfrXafEdAbb",
  "key6": "gwfMGDjjoMvFCs92PoWbJj62hkNJWrvUbm3ng2a1gW4eVNZ886aQUDvjiA8b97rrgU5GfmSkQEwe6vSJ6RteZ1P",
  "key7": "5znyazrw6Ujfx1TvG7cTZ6swXgTy9o7sMLucfrLauUFk8E8SEhcsiLE2VPur9myRfrBpVCmpNkih3THr5omwcb1M",
  "key8": "2dxyBfxcko6ERFNMQkVaTjxR4vcCWk65qxudpRQYsHYDew1Ma2hKEPHLRP32yigw7vVXHCvLhmyMwZEK4rhLEqhb",
  "key9": "5RqYn1dfQEtuMw8ymsEAu9kwd75ghmT8GnnJ5vEDUHRF2vy78w9jxtT5jNgFB9oSUrKEAZZet98fc6GBsEJ3Mkuo",
  "key10": "3hLZwUNSSzDyMynoG1An4zQUeAACoAuZYQSc5PVisMsPnrMPRbBrUnb2H8BBjZ2Sx7Qf4oL18w1qUG8Rvku31woV",
  "key11": "61BtPS3tiLkpZe1mGzjMoq2JQBtyjk2UdvJyc2WjszRoJGde38RudyGqA4Es9RkSH9b1fwCWnMZXhA8nKyqFmYVq",
  "key12": "5Lc6cczgtkvgRoid8JRjvWnvSMuQU4nV2oygMKGvKkVKinWoojz1sd5Csd3XyejwbrpcWRW5Kzunxg4kzu6R4dEK",
  "key13": "4duCJEANSS36yzcfQqgVDKHRUV96my3HBL8LQWhBX5V4gFriiZwyis1Erc2MgniC8yaUUbeuQCJ33xwxgnGzjKQs",
  "key14": "AzoGUnKHTd4uHGLFzgsBUEBMVgRdW2pPae7uaQWhsZQ6wxVwe2ooMfLrBAMo9Le4GbBWhGMPno8u4PmCPd3XMh9",
  "key15": "4b7aTgDThuc83hpZDeqg5hYJz972TQ6oEySgMxiUVnGoe8F7mvB6LvmuDkq2AZvg2nTtqw6a4JKxCtwrjNKDhb4k",
  "key16": "5Lf17JSGtKwQn56Qs6p4x4buMQpixaB3ChShcVFVjeSf8EQNKdkf5sRhVzvpuAoZVCU8FUcqPXZ6P1LRDtjWpYgQ",
  "key17": "34y9ingDkg4fnCTDCBTAJ8AVQQZvvJ52jTLFo21q9Pbp6NirUQdYqRSBsvtpWr4JfDJpqxUmu1QjyMUysKtjVfra",
  "key18": "2xfphpcxVe1MvTfoh12Xo4qBSA8ncneYgnmPZKwfvX4AXDDEs8cjSHBnoJ9S49oM4qqbW3fwBY1wT8wL84APZmtH",
  "key19": "63pMTBw7Bjaq2Ye15nVxdV4UeSBp5H36hiNoa53J5xLigZXupRaUfeCKGtxDiXJPQfs1Fjmvt61CyCpzVuFntVQH",
  "key20": "BoGDRgV6av27zXwXZSvRT7DG9Sg3aHTj4kETHEjsuGowQ5XsEfcpyWpN4L9qXsdahwx6cuytLcohphHNV3NoQUT",
  "key21": "z5Fuf9GaojZvzd6wMN3HqWHJ4RmTue6E63v6ZKwGP2NJeEHxhHr5kaVTUR5PtbA4JLMKJt561UGQkfVz5SW8Syg",
  "key22": "2r9d3T4S1JFxmd6HWmhRTQZEDGSRTPu3rPi2t8VmAY7xXhCysqRGVvutGhDnUX2eMTVSh1JzBTdMSigKh2UjVLhg",
  "key23": "5UDvVtb7r6WjGaYpB1Db7hoepFc2txrimxRySPgvp3qdJ1oWt4BRWwrXEdmCfVS8aymexMEvbHi4T6389BDw8QiA",
  "key24": "5y9aPUVEKWFddiN966ZuKGA4wgsDqNT3U1AzoPYzY2DJbwPLAt7ifVEP2yX78eL6xzyr6fZPeTyihbFrKwJ9WV3W",
  "key25": "52wgsLGuX4wgtEnSd7mApQ7snxA9N9wEmjmJhFh9GiwW4unCE9cC9ehqxWFtiFThPS7fg9UpHnapXUjTtiDajhDn",
  "key26": "3SUMfX2nEC8WnPSTDcSkM5dfoYFh5pd1scCPrgiD5Ju2i6kw5xMbkxwQHEUer7weKtduh48k7Qygv3erfAgNeH8d",
  "key27": "31CQ8H1L9gupUW3HPm6H3L3QTCrPErVKZiSF6wX2WhYWA1mdtP14iLZhwg2ViaaXThVyZryCLXxuihd5UMJjCK59",
  "key28": "3QDPLmqQNFzPw32sujHanfnbHb1bH9WpPhk4RNE6PrwFWUCovnkpXRtmskSaeJnf4Q5LxvWiJuXhvaWruq3hoAmm",
  "key29": "2dNBaJobBAqgSeBdGnk64t55hnofBAKyr5mL1BZ44TdZx7CrPJzmu2UTnNNnL5yaXnwdchzeBhnL4pfyAoxcvLjw"
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
