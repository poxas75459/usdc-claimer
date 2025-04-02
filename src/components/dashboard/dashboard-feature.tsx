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
    "52tNHn1UHTNNkRhLoQUYPR2xrdQKAWyvTVL7qXssdUWPc7vnRSKDv2fnuhykVtNhEpcs1m5jDjMYaWA1ZnR2owob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5ifgoHSfyuze9axnmir55yXZfZpF2R5AFCY8UVpmsG3BVQ15uvZgKgSTzX8gtLtMxZb8WaUfrrtA3ZJzvmSEfa",
  "key1": "5weSVaN3hVRkhQiB7VsyMWBS12TuBrCj9rWadWCeNWLyksaVaoPYohGcwEJcnVgRn741QXbsPKJohGXCScb728K5",
  "key2": "5Jtr7mRExRQ6kBsNvAbaP85iSeiAUPwFniFGQXWgEAU4tEeTLKFRTwS7CSPLFxbJi1Nvwj8DmSp2zjTcgq1Zk6gR",
  "key3": "3dbKk9PJRdWwPX48FiU5YbDd2BnJ5gbiFSvtAhxHe4py7TXqhotCuhWVaLWr2LxVf1LYdHW3Vacr2KqWG1862CyE",
  "key4": "2jvZtvnWe4cNpAoNsX7y6JPjXnuJ7Jfy19wHa9A27M2kLDP2tEvwCoyeveqXBMxMdbHgFBzTEUWPXRF9xhvYujHT",
  "key5": "2VuKdymurhjBxT99CXgMMf3TRTehXXix2WMKVL6iECcrD7ucdTG9Jvpczg2gvFenqeZriSShBYJrmVRUPaEj31g5",
  "key6": "21pvpnWTCYVBuTWV7tvYCMBbL7oeuHspZKXQ78p3KmFRUmbydkVUbc1jRf4RLXq6r2BAEuCG1TgMVZCMVRBV5HtW",
  "key7": "2odfz5BDwiKRMdgxy8WyjH4T65CmamJkMC2Fd4U14DcU8XT6JwuKDZG6mdSfcPH8GH6RzW8YwFVddXxoZrtMriyk",
  "key8": "3ce9GUtMzpcQbT7KzeXpEqvfURmWoDXje8kjosDUESnrhuZQiiFSPzvUF1vMAVyXDhswyYFuvEeY5cAm5Suhs6xx",
  "key9": "4hAazULA5MhKkSJUGCzy2fgTtPJujNf9dQvXhHuqzadvNhcUeeCviUAiwEU1Y7yTTZa5na2bisErHqhUhg49Vk6J",
  "key10": "4wgMKmeo6gfsdiFrKqs9ivJpB2doTYm3qPm75LXC9ThH544DdYfyEWPJrpLrMiZ4KRfKCpacrC5GTatUQWjuawuf",
  "key11": "5BhcbAW8bTVBNdBZGXXMavAuYh796vkLMFyS1Cf7fYhWeJKnX1juQS9RhX434YTtAyK2m9ysXVWKcgDbUtzsGAVq",
  "key12": "g6tDbJwNYgk3gqLXuqfXY1o18jM1Wp1FASxNj1GKnaGNehmYDyHCWHWQxr4Y64VSwpFpHY7Q2YwUjo1KnZ25eJc",
  "key13": "3opthBD5ZVvJiXVtFNxFrRsGn62MtkUL4dwPoTkoqHA9JqrEb5VCYrQpenVG52Eoh63gm8vgrxytvYuDLn9pkbuG",
  "key14": "5AUQMCPsZsr9Kr2He9D3hsN9sJz6XiLC47rcbHBySiZquykwQGxL3yUYvmVRPUr2w8uscxr18VbLCW36RpZibdhn",
  "key15": "KYqe3Ru3PyaJmfu6eJiuVT9gTTvrCEcLnvqWQuz7ts6WREdJTvQveBDWJq4nmBb7BgJBP66wf4eAeJataCTZ7kY",
  "key16": "55TtTcJKcmDz68BqvNDjU3ppJZSa2VafbRyvXaSikLfqYasL7pnJCamZNDwMKGKHaPLUi4HtPqbEQvbbMGsDMhR3",
  "key17": "2zZHkpvybAEVHNDtjbmiZiLF42LPPPx5TSfvjXxt85ypYt8fP7xC5JH2WdvqSzt86mPFCXrQS16HS13k55HChHjm",
  "key18": "44ErV9wN64eWBYXBjpDEeYvSC46UTZYy6atVBp9XBEzjbCE1porsxcv8LU3fytXagSbVAHH4uDhtTXSKqbRoejQ2",
  "key19": "4Uoh8aeesEgZYsyqeRew8vcuNfgrsJeSzWLJMQWA3yo9rTaZa9ZeetG2iQBq2yXkw7j2ZKPsufdTsKiRVXwEqJc2",
  "key20": "24BveTzKUMW5XMMH8ENm8HGuMnTtHC8TZppsGadyp4cr4mAr4aTPHpFkj3fNESmEwbEtKurTvojTB7yFBuCBvZrB",
  "key21": "55Ra2UgmhMQwC8NNUw7tKHUxv1HRooPePhH4MuM7LqasxiMDj6dSNrXoBc8cm8KZN5xg63PjZvdfFAfqiDrWfFwY",
  "key22": "5x1Kr9GSp1PrVndJ2LeEGxTL2nQVa1ozeH7khm5hYMNoHwUnfULnbbp2BqZ3MgsYYU6HsfkkPRVgffFBjbt6y3jf",
  "key23": "HQgLh5Jygn73VHJuYQZ52zppcHGEtPtPYzU5e7sxdKycnism1p1ZPeHbgPZtzGUy28pckGJoQ4aFKensvaf1STF",
  "key24": "25hnQCrDGQMYKYqKbPwgLsWd5gJQoscUbESstT2dKRjYwNJsipmckhZBAe3orDD8WCCN1FV83AMBZdTRaVhAcRYg",
  "key25": "62YJDZpcKPbDYfQKjUbxVwDFAAHrWeVfSJeyPRNqv8KVpPRsBG9JxfgTARgVvabLoUUcC6U7PwYx4H1nMmBZ3eZ3",
  "key26": "MWx8xJsH6UM5Pyn1dQ8TUTkMPcuMJemPhSYwzuGNRq8xmcurwLtTrf7WDLuVC15pYtTvYPRqP35Wst4VooxU59M",
  "key27": "4nMvJjixSHG6UBaPfzvmA5fCQeELrN1ohPV9nMzQt27FZPT3qriqE1iKQAqtb1JqzjSypFAusMbveR7Dd9gMPKEG",
  "key28": "rbKoMzSnVLgcEokVgCnL78t1enrU2BkbCXLUkjNogNR7yvLweEo7SZZoDmupx3M5RLMbLdXVdPNaTaDtryQRC16",
  "key29": "3HTBgZKyJ5WkF6sqk16gVuQr379Gen8ENNT41EybNFReB49D5ABVk83mxxjZAGXPsTZZpDhqPwATfZaHqoqDRWsr",
  "key30": "zrEE69nfq89hZDE2HAn2T2sXDTvr7ZFeKuwELjqjMuPpVmF2SBn999vgfxgvTevGHJRyoP8E164CVCnUXM1Hsze",
  "key31": "3iupTnbTHMToafYr1uRueV1tKLrcsNyZoGpQH71hqFb8qgeJ8SSypMckMf4ppJSu4oG4XqwCop2pURfCWU1ZZGMh"
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
