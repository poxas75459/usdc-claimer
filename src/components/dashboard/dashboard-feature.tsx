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
    "RBdJ8wVKfw5SpbhFrjuPn9vefqKoHiRSjVWa1LV1FDYQS96Btcq51zDLt1oq4f9NVyL9rZGGFQV8AYjS4d8jBE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jzGJp8EUzgy673hHEv7pGmqHjbGcHXx5VUnVQCbtwWej8dcxqvqGDLPt1uXjPCBtuTCAR7bjNoayN1jhYXBQEKD",
  "key1": "2SzpDeAnTPLQeS2uYbTQV5JnTGLCn593efRTX8YgFcTRhumnotsr2e8hsViW24HATivW6qCado3MxdASqxmEGvyA",
  "key2": "5fgyDQ5JvsK8rYU1pm3CNsT9cKJ1N54tj3KkZ9K4W5BMsLudRKyAcqrfHZhyFBBBMDJUf9BgLrv5cNCYP8FKCZ1A",
  "key3": "HYgavENwsM7jwyMBNWtacZNKcmefoBx6YFM5QkNhYGQeDHtSs97zVGxxfUP7Fpaeonvxigjec2qWJ3pn9F8mrXD",
  "key4": "5zJmJiwJuxG181p5bMwz4WMMZe2UdeQVdq6aXv5iB12oWMUkRZZTG3fKUiiEMvBjqeV1QmA98xf43BH6J23FgkYn",
  "key5": "2LkoRQNYpUz1p1jFjuUY6w9x6JEo8nxuwm8j9XX3jbJLktbJS1KhQFGRtaS564PMG9gCzUoviwJsMRFTCFJE73wQ",
  "key6": "31LFZ6J7HeYYcZY4gRRuWybKHa8bcnFkxczJoBF9tsXgxf6R56qYLNYTmzdYiJUFE24iaVQV6DdRW3FfsLEuxR6T",
  "key7": "F7MdR4CEcXV95UxJKKU42R8gfiq6powEryUPzNWopnWmaK3Gixgy8dXpwWhqPH35kYXiCHyaRi7AgocGC1cTptn",
  "key8": "4hp9whTrvKt2S45tcvd74LvUo1rNTGgqHnxnrtrvyyCpajcLLHWkFw8UofZiLos8Pe4MmBbFMa4dysCoGRJPoLRM",
  "key9": "38VB8R6ChNFbrjdLyvbtLXRwNBYHtCyLUtnzr8iyZS3KPSwqLDn2C2mpHNUAkqqewXCNLnvPqJv2Zgo8Q6zubqyE",
  "key10": "2pB31ccWndYDwFMeHX6b5BceS7gPb7ESRvJcEazFEKPG8ab7vzoPvGRKAfuoc41GsoVuoAKhkKPWb4u33UQeWzXc",
  "key11": "2XZAUxgGXKASH51aEwn6Vj2cxJZpZ3yL59Qed5cXkAsCMhGpZHAbapJeoTEgXoeN5TnT6NVjhuETcTNwDT4P29Lg",
  "key12": "ZQ54Bgby5gn4TwCVDwVUGzGn9m86fN4wxddMdZG1eThL7qLU7nodFg2E7yvQwYu3RX3y46aDh7dTPeuzXfkipi5",
  "key13": "2MCYdBcQMVNh7MwN9YbGrmWM7j2r3cdmHXaSD7sH6bdWBHmnA3x9pT5sUMakbZKeCSMNzLHrW71piEU7YFZuuiJ",
  "key14": "3HzVN6h65SfEDc6WQvCGUo4Ee7bTYzDFidBiBTjf9afqWkiLohQ7arJ6Gf8XHM5qKyrmwvJhWtZUg7GVmosF7pBA",
  "key15": "516N211c5x3yXma1SkZUE4XUSwjDt8iAWWMs6J7wypTsx3tJSjym2jMRrdCxdShVv7EfJZPyPwN3EnVrPXsnNRUm",
  "key16": "crS6Sb5zzE24jV7JnAMi3ycuWGPxWKbB3JeZpSZUmJTdyAr38xhX7ULXh3Vf1U47Wmvhs6RCyhPxu96FX7eSLCy",
  "key17": "2xpMTXqKHsCV69k1iq9MP8NbXGEqU9ndxVkeU5ThweyZemkEkQa3cbVJYAENMojBJWtyHx7fKnNiZwwbgacwYd8K",
  "key18": "2ZvVyNcmMb2za8xU2Ga2KgoGQxghaNAkBRAD4KEqxndSoci3xxgbY7kJCDGsEEWppiKgpxudrAr4KA4UgQ4QQaHV",
  "key19": "5xiXkE6CPMiq1N334k4CX8SkrTkvLLTcCy3XbDxZb4YnpkwVGBJyKGgWGEoHxnrdjHpv9MEtoVdfPLTKj4yrYJt8",
  "key20": "5yuwB5tu2zhg2xv9RJQMfuunB5xwDXrEB8DPM6rnPMqFzMJeWvDXVCZWghnCDv8kc7ahQkXSrW1hprGC5tYkPWGr",
  "key21": "rVy4T7rjbNnAVncJ1CHardPWaWejJjFBsh9456cQqwVGdkMQ5anYds8AeQpX6ARqiyYTMMw6LW9ujjmkuRMBw5Z",
  "key22": "4K2txEYZGcS9YNzZkA2T5awDAUacgoTbXZNLjQ5m7m5QkwCLyecp8LxCKPywoekxQXfQGMmJbSsBHa37ATQ6wLtY",
  "key23": "5soxdhtkMjHdxAATfefx95KiswEwnPCvdUL7LYThcjycTcijPhywyjT2gyD6XX5g8iVLUGftaRF4ummgX9hc4xCP",
  "key24": "5WQvkqws9z55cBas2j6gy2c9afJjJytyiGE2fegZUmEaHWTerQ7xYXXc6yfD35qoNforfdLX4cj4g8gKVS2FHH5b",
  "key25": "4RfJP7qSfbd6c27xgQUQntsXEdAnSz43mxQQxUDVwDEm9RSGK5CLBazP9DsRxfQcCiggvs7MvGMV4xDpJRbd7iwp",
  "key26": "TaUc7FUyyaaLp3dSUqiHHXHfaZMbBpXaLu3x14hP25AbR6YiRgRb9pRUC4FjaTvrsb9Wcq98WhW3gRMpGUThVF2",
  "key27": "wJdoZWmzUCR9D3R1KVUiz2ibu7MQrZMSkSfShUvhZeMEGLqxXBrLtwsrppqkZaE866aneQ4WHgvuvn96ijBQ6pt",
  "key28": "5vNh19dKNW9o8qz5yikMpu1iLrLuDfWzpn9x6ytDozkeoCJvEX9sduVNCqK62sJZryvpogp72AwCDB3BcZU2aPVK",
  "key29": "39B1pYCo8Mq9GGw5HugqvcpkRLctKtRySVNQt2X5yhgWg7mtzuFswV8ra8XP2oA54P9qyjVdEnZDwG1x2nY8PkhS",
  "key30": "c93PHJYYfBgQHKJ4rrPtXGAEPmH62HEijXFAQNvbM4HMdDzRUrf7uiMYZp3G3zNKsFwPjzDooYmYVxSsZZCJ4mu",
  "key31": "5j1FvY3iLTD77qunJwiBqSTLhaX7Xz5MUSbesEubXcPHYKZ1GeptPwQTwrWKyAdbGqu3ZwBsBK89L9YSCMPkFDUF",
  "key32": "kqqP2GUKh5ydhVxR7VJL19fMSMg7gVBJk7ftuGtWG2vV77bTv7W3pAj97MNK5LuJysA73imwMndAhiiWyZMY8ro",
  "key33": "BjgaDJ5H23xZ23vXH49YKVscpbpDDu6fx8C1Tu16xmLFBRH6ygHXdSeBA5ASy61Mte133hYhmz3VW2X58yYYg86",
  "key34": "3CEREaguFbR3oKT7v1KiwJX6i9iHmZnQ5yXJXugLxbz9MaT4x9Kse32PTfASxze87jrh9rSrxdV3HdycgfUzhYRF",
  "key35": "66Xwv4of4ChTEcNcNmHdsrAvW4v2M3poxQobWJw8TKfJnoXj8779HaqxUkrtvZPNoaXJT1JUrtYJWGtwKSKNx48X",
  "key36": "Le2ezJR2ta8FgATVf36zcS4KhGTFfqsVzDJZgUizQ61WnTckaZSb5sJWtXYJVrv7nQmXgTL6jwCLJJPVHmDsbYG",
  "key37": "MwSGs9PAHP6m5GVbSSQKjBihqwdCVerPRo1WGyYBEm6JkAhg2UUX7d4MHAfRhTP5rfAnFbRwhSFJ89tb41qnGtU",
  "key38": "Djh2GVhLKK4otCYswBTZEGkrWbtciUxZEHJhQF7ggL3Xk7X5QTs42fRxt4PYobbeYGHKxTfrwd3MYMHMJSHsAnb"
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
