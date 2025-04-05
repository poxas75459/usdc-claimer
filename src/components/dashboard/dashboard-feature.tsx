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
    "2JpE2CFSe9xeBW2zt6haDnsZAEKUR49iYBfUMNFC6zwHi3c4d7pRs98KmaPcTSxeo6YMqyKgWdH7LHrZo9T9HGaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222iSQU2LLtTiewRet5QuZLCtaeRCCf8evdUCy8WYtgRV8BpJ9K9uXEfN57JMe8ydfkSJV4C1yZiRayLHgKPJrqS",
  "key1": "UyFNdPSywNJdzX563SR14gRJB3SpkeyNR9KsBHuoT9D1TQyZ73UNhax9q27Jmg881xJCoywRTTDDW3PfyQd7Rc7",
  "key2": "5TURduPkGArYPpa2jKx6TZ6wxyGi6azypxbmap81SYL5ZYNynk4adFZvz71qxHfxPST8vyXrpNozzZ4hjU2aEJQo",
  "key3": "6422SZKCVVoAhEyKf3DUG81mVJ6tW1q2VVq6716WWe4KZfsuUoKvaZpwPmj1GF2herhx5MCsPQxhqHW9zsDMStEm",
  "key4": "2niE9ykTuzNNeesyXXA1tFD1TZps9nshVxEd3Rt1CoAzqo7JN1d7yYsWHyUV698M8kTj2m9D42SkECWMkkxrVQrr",
  "key5": "z1vERHv7V1RANLprk2KrWNnYPw9Dix76P2CgT2EfptTYsWqeNrPh8B8CWs8GyDoy2efboGheRJ3zojpdW9aGVeN",
  "key6": "2S9m9A26eQqViFYp3y7jakQRv8P6cQhWeJ4dGeTJKaTqgAac2vxzBtxSHtzx4H2cUZ5Aq8i2sprop6jnAdVMsHmZ",
  "key7": "3wK8vGmz2vpL732f56o3Sbe5E7EbgGoDE9F7JSsoYEVAd3eYaKk4KYmJpYewsfHGWMxghx8urVv3wTwJymoixPDN",
  "key8": "4KHobtoGwryfPgUacUtAcAV7jTMM7THNSx3ADshHd7SpDW9vkRUAam6aGvE65quTxpshnuHPuDaUJKJdTPzJ93Gh",
  "key9": "5oYRPC8P5kfqGtg83Ec6WgA8HV9DuoMpHQKgvQ4m5xk457iGmyc1rwsjw4xEzLhHGvP7fpsPvpYt7JZbkPfU7XUJ",
  "key10": "fugUbNdQ1q2vSokx99wwWgT7cycf2T8soMfSGSGQiUPmVB9ssKQ81pk7rwSg82iDtj4VZUpBGfL8T6EveKZTZvp",
  "key11": "4XmVK1GeJQtrnJbHFdJxuqVJu6ct32uzeQyXKk1ywf8Z8oK2JVDrY3S5dcX6WNNyTtneDdgJyuwPfYPUV77tEjdn",
  "key12": "Dt637wbcNs9NdCPNeZUDxoDNVKinwBzwPH92D8Gbhr6UmtdYbTLBmYMQGN4MxGd6jSEMxh9payDHvGKMaQ3iQJN",
  "key13": "Nk5MySirpeu2goF27TreMTarRZ8yDUvfzdfbdeRsdGUcDd1ZyAsQZYkgCSPnoEQvKQoGEULSRQUHFqkThEsf2hb",
  "key14": "3p7d8YBz5kjvhkAB3nbCn1tyuXWXcqu7eXyUBhC54FuZYtS8PGQeQgVBQ2a82hZM5pHvzAcG6NEG4MvtdhBZEkZb",
  "key15": "4ViJSeR3F9G2tvRAg75gznfSU9rSbSsftaMsRtZ5ha1c9UBYjBmTkyp3QHbE9kHQYeWFsntDA22R2HBkyvQQGZ48",
  "key16": "66pr9Z1E9buiGdQHG6FogagLRxxJeAMZTDrBsdxB8RHCit7G2PcT4HJomG8DBduHrgttKTAced4pxJ1rBpLU7d7E",
  "key17": "4RwaHCkLRZe8KwDt2fGWg8nMkUBN2MyzFE5M4AukcZF1iFow5oYNg9NyhEPUNrzzMWxQHryU94UmKiJnqDD1s5Ag",
  "key18": "5KfvJQWC1pwhqxHcdDZnNxkHxybn4wox5tLr8soioAMshnwJE6jQY8qh3f9ghsXiPPqbNgCJAgFf5Pa9KjjCxsiU",
  "key19": "5Z14CCpkgWnRHU5L2b5uHUAKQLT7kCGAV6odbHG55oR2hwLTjkBomXHW7Fjb2u7CuH6sh791xQGgEmxmmeu6mNF3",
  "key20": "5PuVWvG9Fo4tx93kVsQTcCTC12hqfvDZCtKEvNDFv16DVcR8Vk9g4Zqh5622m8uzjakXSSXqX8vUmDdHxrrHXR4N",
  "key21": "NssYVdKNj9Uh8mvj7e3QH2arrRmfrGpr544yVKqgy2R3YWLDzQnYetaR1HFaHbTi2gMpX5LBjZyaejZRKnxNZfr",
  "key22": "5zAo8X2wCJJHUVUzFCJ6HAxmQQp9NncJEf7tsZtG9KxPbDCm2rAn111KKTACNiCyspkKBy3rncUikuhnZqubJWgi",
  "key23": "hyUrdNVoQYXbrSoPWVb7zLG3atZbmFG2UAeSQ1Li7ea82vwHuBWCbDRPfU8bGWmdyY1duzvhcboKEe9LhmZrvbV",
  "key24": "4kfnkK9xKbhtn58xrfh8Afdjkek1mxxzZkCCjkXU9AWvMNwhNeFjHL8JQnYLmhFSq9iK78QuxuyP4V6rGUp33wpB",
  "key25": "2mjha4aRvAjqTBcQiqvVyKsCbdz1vFR7biPG9SJdtQdLECqeizBGWKoLB1a83PGkfRgvK7AKX1GL9hhDPA4V77Qf",
  "key26": "FWV316XHQkhfyKefpdYiCZZFLKEbNQmysHPEms3tu2gKu5c625gsXE2VZGQvT2gKVYkF8YyGkfz7BLpH3EGGd4Q",
  "key27": "3A9rqyxcBZhKSeFoRycNfSoq7myPb22LrH9VDkvG2GAFsWAR9aFf8WGneFyxHE2QEstK4BqkhpbTtxogFaVFpCXk",
  "key28": "4njnPs18HCUUWfDhk9MMZmsQJUvXYAkcN12aQRNVRX8B2BxEuLoL1wUwJcu9DR71bQk2KpCWEzUJmqdf1g2BPoaQ",
  "key29": "2WPYpkGsW3PDL64ZhZv1nS5yc1oDabhD2iUgbFPT51sC5SmPyuM9Ffvm9PgK4sYwdaowguexBzMhQgWXWDnvwDNz",
  "key30": "a4ecj2tHafEbU4Sw1VJC46SJxHr69g7ouVJ2nXoLNWTEAajEDX3gtUxjyKdsYspRCjAehV7Kd6PQtYZAnfe85Kc",
  "key31": "3U8NjR4VwUSF9asiPoutV4gkhndFBfb1S5MWMt9r2zvvGNqtQ2D5sQMtiLEpmf9FkqRjRSFSBfZjGFDJNU8bbyWh",
  "key32": "4j1Ac4QLfAXqhFhKiC4eqxjJAPT57pxsKvUbe59T4sUtWaCsL5BQEk6HeQK9ckkSxQ9dLo7YfdcwRW7uK9xfqMVq",
  "key33": "4PNXpifWxPAFBXbstnzJAcq3Jki4wRFd2cnBWnSDBLbbV7r5rRS4ihBWciuXcfekRxrcsUTCKazJr7K4iYrTD17y",
  "key34": "2JGK3iqBLQQc1N5GVDY7DuHMgsnsqpFe5TmYvx6gjoYZQjmj8rpGNZ2EkWPjSVWtrSmS3yEYKHEZ14VSJbZu82qU",
  "key35": "3qGBgX7qKJ2FxazaQ3SDNAXGWPiUzS5TuaAYRRy8NLj8inSTYjk4BJjXfMTyixvQDAnU4r2AcTTuTu4Xbkwi3yyH",
  "key36": "4ZykmFLCuXEnwKUN5hJVsfS3vBNbQkjLxQPvsfxVvjiMfbJapFiqiGgYY1LjDtLSxr1oxsB5h8CLiXgzSTcEV1Fj",
  "key37": "2PAigvjapsSJ6czSx7e25Gue21dqm3Y3t6jFdSfhhLbJKm3wDCnLeiAb2P3Y9V9aruKxe2Ux9FGaCSaQCvg8LfSz",
  "key38": "2fW9mHRjcngRWUEjoRPgzeScYR6m7G6i7JQjYi6zUG9ftWqFC74kA8vKfQT4SVYbP5vx5Se875EtFzypEPDcCEVE",
  "key39": "8YrWAPsJ82Lbbd1JY2jpr9aB9EaE9oYRbN8u7HPkuQK6ikKhZyjz5CGsFoCkJF4xT2x5ziQKuXHrUh3VjEtTefj",
  "key40": "3uHHDeQTCb8MQfqYb4sn7jou6kVPtiyhdFV1M8DRAPUNE9whZd1EpPnRghZHwUZh2LirGXHHAkpBS6qRDvZeQYuL",
  "key41": "5rSqjWLsHAgudjPUenEKs1jEzDwApnq1Q2Zuz7VJusmBQvRpYi85mHsLuhi3Ev8WzgvpTekV8m6ps9vCrWcqVvSw",
  "key42": "iUK43CRfq776tErv2oZYHLsK6UCHmwFPh7s3D6JURXZHKUExjTG6aFiEq6hh5VsLwDLYiHJqw6fMfRBkBrweQXa",
  "key43": "37bmBaVbguiKiGKpLecvmQGWTTbyMVawgrAxV2x7t5hAxyaTwRwLaUeweTvLodCnKEQtgrZdUDwT78iQzK4gyMhk",
  "key44": "5dDpd2qzbbvJj166CAnZLRGgLPVnBi2ZCZd5S4H4dg3RLb1JJhYLwWZMUX3dJhRm9qoNkmnm3T5h1jz3iPQFd1js",
  "key45": "2dujvCaMfRziUKSNR3w2FiCTFbYAYYb3frqYUpcVGMtMuYk8nLYXQ77QoP4fxp1qUvwbNxDu9qyuHJ616SYhKesd",
  "key46": "4y8QLcpZVWMmzQhCPjVQdCNHhE9Qi9BFvQDYm3cq87HLciR1oUcygfyWWYFW1dHcrYkwDcyithkpMugVibfrmup7",
  "key47": "2AmmNJmbhb9copDFPJdksNs8BTGG4rRnDL1j3K4rbn91VBR4wFuyyptBJowbbXFii8g2ULFr5HHLFT4E7wjGcFUZ"
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
