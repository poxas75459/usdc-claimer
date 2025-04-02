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
    "2RyQfihrbBFqh7TSQgyDS1TfjBgqguFDa2nnNxkVkFx8HtFRQMCm5ZrqYo7ZNsf98HBRQnTWBhjvT9BmpM2wH92S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTPGaGGih42fht7Tmf6SbXcDthpAskcstpHSkSiAZnExA4YvD5duno64Rua2VK24eXd6AcAKpbuYF1veLQ9GtHQ",
  "key1": "3wxmixg6vtpZCYgH24vq72rNgaSRsq1pKLZd5HWnRo2YEJ5HLa8fCXfjKjjDFGVKCCUHFN96PRMnMiqgVX7ukf8a",
  "key2": "5vsDUh9yL1x4QfV5toavzbESdgLn25psDVBWEGkJoPBdGRzLLskopexJk2BS1wgzLTN3SAyxnH1rNGbJE3wg75xK",
  "key3": "4uq7Vu5ikDhWQgFPZYArRE74FmbQ8ikU1svUBt1RGzj1fEbM5oD8SzAmk2S2VZQmJKYFukWkUzFiHgVnkGGDdz64",
  "key4": "3JYH835ikeQZ8nfV24KxKVp3RY6jazvfuNbhQwk5sa6d7YKPdjQQ7QWx68bd64MBfKREQq7juMt9C75MCf8BkzaE",
  "key5": "3gGSSFqx5shoGi9D14bcc9Vd6KB2TKBQQnxvpNcE3xkEq2BteVnjeT9db2wMej7hbzwx7rLRZERCwUJui7Not1QW",
  "key6": "31g9Nw4WZdht9sNXnxEMyDowEERxMfhEFVCRU384stX6bAn9sGo78FMz5XvQyBFCaBT4xYCMWJrXV79JQtLLqJhG",
  "key7": "4t8fDeURXCzeUMS2xvWnpCgJ9rkJWpf1hGPrp7Bujqpg3TrbcJWCHBxrb6qMmDYAjfFfBvP4XCpsqzP5BktPqbZ3",
  "key8": "2JL3v7H1wu6MJZQXpSTvyqEAQZhSrbEK2EDfP77h2UjMe5THR3WeuHMvfQWRX9ZnT1FFgoooZtBWVhcXG8hhfnmC",
  "key9": "2sMqieGjvzWwTRdKmZYKsVccqoc5E3S42p3kzQVNPRPQaKAUh49q3Zhw9eoXZhcoL7oj6DhBBkvyeh4uDddkKQzk",
  "key10": "4RJTiW7AKWKmyriJthXim3RnwvVSGBF9uctPc2pQEd6BiTN9xfgSXg5RLGBmFANJPMRWzqmyaDfxrNDiZFzKHRfy",
  "key11": "3LBASsebFuZurVf8wTeT3pvXFHd8LKGeoLNd5hFUygeSHyczTmCrTiVoLDMAaohoD3jM44orbWohQsWTxbqSzz7b",
  "key12": "56WhiJnX27aY4fLJPCTU9Vm9Jmod8uNAyzidLumks4PoiX1ZtprTM82F2VoExq7d9se7LgeCezJ2dsTGJrELNTm2",
  "key13": "2HrY99NVFdy4sLuxMUeicLybuQ46D2ZHQfM4WZGJB2W6SQMwPPWtvQCHFuJHZ42XYYBYDZYoWof4WcDHeh7YXVyQ",
  "key14": "67jAVcXJdUaN2tsZeUenoUuQ2FHd4YQiRHr9FdtJGGncWJXoAfGH53prSBC985Tf8R6MqjSPTFnnJJGcDPBRihvs",
  "key15": "4ZQQU2aEJ7imavurrpBB89eeYcHuCqT97Eo4WX8NL5wdp1MHjMWhM21YMj8kFKKL7Rp42AVZZ3ZsStFQ1oQgrHis",
  "key16": "42JynZSRS7g1iJYY37XCfMF8pzYnBGCsH3hBtPXyTVviiNtxnzyxcNJAh6k3rT6haLws8VcmqeMkgVRzUZecAXdq",
  "key17": "4YuFfWevV6xW2Q9ZRweTCxWt9pCNgAWPrF63bRYsxR5Nim5AARpYCgq2WmdZXcbwADuSzY8RWYpek6zZtVioKSqh",
  "key18": "3cKUdj7fn8NRQBWmXb4ya7QprxzafiuTcZmXToWqWB8Vh6K19NYkjWbWHN9VipRrwNdtfW6E1ACAKzq4yuhsbAP2",
  "key19": "4z1aVihuo72KHTHqtsMNU9dngSqmVuAQfJHa5FtNqZXhUnfkXvfKThQYgEUNn3WyiC5az24H4YxKi6N5EK96nG8a",
  "key20": "3aX5pW5pmouxV41RieKAmvEuFy4yrdoYEmrgBpk28BapBj9D2KYUkcjTz5ahXHWW2KuoR4F9i6v9cjX2uUsmWA31",
  "key21": "3VHeocemGtUuFzfUKZwF8CcxEufTvPMFvSYqQGki7WbEmANuFzMU1LsYu4GBXiBVSCjhoNAcHJty2X7vGL6f2Lee",
  "key22": "2GKLBLhyzF5PHZTCgrEX8Pr665fk3kBUWTKujR6TGhcQHeSRomjN1XtuiYtmoyNk1VM8eScvaRXfDXKB3mNAQwpN",
  "key23": "4pf1JUXvwbqa5KvCLk7jP4T3yJT69J5p4aNMXyDqxcEXFbE9FiVQHo5xLaHMys5tijtqm5vzYHkgnUDWRJpBcwwW",
  "key24": "4gbjN8Xck8yBBCrViVEmbB64NBjPeAHiaTD49F2exBuFDGnrkwMzpdoSWG5jNC1vZ2TUGpzJm6woJNBvHF78AtHp",
  "key25": "3RjNY7TFo81zJAtz1JgvCXEQ39HZQ8LG4SpDThh18DwMi8x326xHF5zQRjiRxG43jT23M82V4hZ78bNBG5xZPa8e",
  "key26": "4vnQhXnQJ4EZueRHZ3TP9oShytXrGeA1A9Tfdnqe7NSyXgaSsoEef3tAZYrqCSi7uvNRzVTWCU8mnPYZewGM8uBt",
  "key27": "2CSdxKGwuUoZQMpdtFysMV1EGJHmBossZtSNcdzpmYvvhdrobMYCr6Hxggqizuugne89VwGvYXfD6znyQHbja6v8",
  "key28": "4XAZM6TosTXHfuyokMgRdB1QAgjP4bo3PzWzmReCwS2t5yRK3jzEbtwLTWcPmHPspz6j1Yz78AWv55xpJDfrcv1o"
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
