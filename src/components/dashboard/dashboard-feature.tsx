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
    "4qDVhojhso5CZTpabFp75DvdPfQb2gahW62P6zBMzBSaWac2Qosvuot6FUGQtXJFiUq4kSxrM2Ss4JKT3tPJfueN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifdgRRpz9F9M14R9LKt18Q445EUMhQRftQkUvozdUPHoCtbTzbBD5QmZBWrGPf5GrqPco2sHgsQPFtLdb6ScM2r",
  "key1": "26ekbGK15bNfoctvY4bCFFUrewADdsLWrEHMFZV6YsYv6ZrLxs5TvhBxEp9dNDvKDNi1mpquwAMn37uQygBaNztY",
  "key2": "2N4Q5HqNu6L2WYs8PMW4yu4xbGCKzcKZ4qQrugdks9DvJi2JhP29UXuvfGG96jbfaP52vzunnS4DaeHfqoUemFAu",
  "key3": "EMYngefnEcpeZHHRr2UqaL9eniqi8Y9AVQfPAHcATVQ5NBnLPtuQXyxfdh5h7sVVBb1mSHFoeVuavf9aBq13mar",
  "key4": "5qwtEN2LymyXRxcips9Ya4HSC1gkFa8idXwFMkfbtT1v9uyZCjzJz8NwajEJQ3cGPbMXQiKeiQ7gCbJVzEBwLKei",
  "key5": "4gKkBNVADjapBkKp2UTBE52djQi4oxTmBQSbkfEuHYbScJQkAVmpoSGiRmKTjgmi9E7BQKVQGCdzHu5QzEBbUpNN",
  "key6": "boho7F2rsXTUzyevtopyJ8xGUEte2u9Nyx6vz1JDQ1AbEW1HKPf7ZbzvuZ41nurmVdmR5Q6TkhxLzsuum4hF6o4",
  "key7": "4P2dWv1A8dpiR77WsaukF9m88Q2hT9L2ccrwFhfym4ZRGmLsmYNJ6S4zstFmy3D46Hpvy6VQaSZ2NWgPJ4DbdJCs",
  "key8": "4ogX3upGGg2qTmV8gFav4Xz4JdFVFbFzKucSgdwThukMarN91M6CTZ9vjcU4o4dkMZuVaDaeCJTw4fKnbu4DN9ew",
  "key9": "4zMuHA1z19SDJb5XaKhFPea51exJ3hTWRf7EWtLQPx57h6KfKjaK8bF1P7GgYeQBdzUqtgETNM4NB9DTyztC45WH",
  "key10": "3DBG3tWHsoeB1DHjvVmtrUX8SyzHXxoLGF4QU9RyD1khZPJvRXkdgbcLjkdimgNMEKrBmcWpjAARxMpTGpqNawAS",
  "key11": "23oqWcdQXvp19B56dJBCtdVBrdr4dpfhvtFJhBPtre6YjX139xYUt3HhxUGBihAhtTHodaUTPsh6k4Gt5ERk6Kt3",
  "key12": "2QghHpNBsm6r19GPykdkxDDTE4zchTUUQvptRNiFv3HYmGgMQB7nup1PreSCfy3VUPyqucTEvbk1NuNymzp362qz",
  "key13": "4Nk2Ps97RJDqcCFsnbjWVryfktHrr2ivnfgfjgAHxYaZN8hiRDed1UxFapN5DrYpCZ7uxsAnyMpGYQiDqxwnqjPa",
  "key14": "KTeQGGB1vufKmQ2kCxFLYrCWwcb8ba4S5BxaYF4usoQLyjjmSBJ8A9SNceqQqZfMF1yCb7x2ZXECnTiYpTojYn6",
  "key15": "2b7qtypHn5ZtJtLYiFmQLg4fNLYqXZJE2mtoui559i64bHqhbEr95hLQu3pYdMs3Ju2e21o2jy58sbLXkQ1goUBU",
  "key16": "4j6NGVmFytgKSJNz5TrLYGXaq8xXAiJAz9qsBE9vrLyFUkRx71q6UKABu5ztn5hR1hSQBEGR5XsxnVY1VV7Ykozd",
  "key17": "C9aj54kY3YDEAR1NJLUPu23siasuDMkC8Q9j6hAUZNdPBCyNzyfkivc2kT7HEzB5eKvLTr2wqnkGJaLyt7ckMAW",
  "key18": "2Nb1qmcK1GhNgwpnjmkEQJrb6LUNaWCs31MtM8xTEQnbhcY5zwBqHK5CZHRENd1JizoAULSW29iH5dwqxeWJFvSq",
  "key19": "3s6iaobKhAPCcNSNMG8yRPJhPN2E4N3D26E3PRcEgs1kKaPndpzj5ELprF92v9PMnwXqxRodw12bvxqcXjCvyeXT",
  "key20": "4TFcYVojYJL2QSr4QH6Sw1Tv69Enu9MhuedDrMEDXQKexH9n9bkT9E7xbjqYvZuB6fjkBVsb36bTBt6Bx7UBBjzQ",
  "key21": "61iLFZmyu6LroEmvVTWkMEh2PEXPHMH8ppquiGouGqbMtDFNvPn7tPGL5CkPTCteoeem29LBim9TVaz9FpBr4sNy",
  "key22": "66cPNwiyZpjjB2pyxnMxPSVRDfCYkAfC51YC2XdY6gMKxdCiBzPyU9sKEqEEvBFvEHVzeggcncnNzQXLCTPfajKx",
  "key23": "53btKdCeTT2giXMezJdx1Bk2Yp8zujicJWZ7cxMS5XZJnx3KoAS4woA8XRkido14uHLE3sRdh27aEZnsqwCfRB3f",
  "key24": "5Hoovd19x7UVrdr6mM4ReE3VHn6hBFf41Fv6qxBjuJYUNR2Yw2wWSX5E81RpicTFg2SELmdiBKehwmSXRhZXv9dC",
  "key25": "4rwWU3F7h6HizPwYA7EK68QNyfBr4zWyppUU7MdvEUdeqa4tL15P2N31afyxn2vK1T53uvPrHD9YEaWf6UJb4HBx",
  "key26": "5NHvrHRAJdHToLf5wVkUf7j3PkT53rFU5XiXXJ9Nh3uDoMWwCvBMTT9uwPXWuhcUNWkzxPbr9tZdDPWYQHemDUJC",
  "key27": "4Hq8edxoyoamWFR5FumBi9LTNbazW2d2xEcj96pUuYnZx4zW7vP4jYPJ4WiCJMbYotAvQU6d4zuX5jJBhE1heh1q",
  "key28": "Pa6xDCYAQQyG2bp2oh6UPSHsxXmCqgrmWuat5wMt56Bf6HUGfYzac6AEb1sqhiYWKwZh6SVFNf3CDcLFyRmaCvz",
  "key29": "4mP1A6fo7SkT9KNmCZR7tum3fgNogJMrL43PimiCvP3iksmuYSE4wQBHSX7TuyGPbJP76EF3wMNmavVyHYgLM1QH",
  "key30": "5EEHNSNpxrGCFDCg8xcVH6eeEjbjNrQ4jadAwJfeJC9pMoU5fX4s2kufxJei7UoQxXfcm9Z4NBYCwoz64URzcp87",
  "key31": "MYcRkxD1RsST926skP4bspkUsdnAFrv8V7oXk9LQjFny3xyM2FfpWjpQfnW9qrdJ9BidfzpnuK51zagwwuZczNt",
  "key32": "5hVTWtj7rodeCTJWaDvqLZczf8hRcRZVGtbLAAeyLsW9Z3uBmoeMyq2taLpG8SboUNXHVexWPxDKLADqVT9gv9Jp",
  "key33": "2DU1ogG8JHu1JkRCSdmwnuvRQpd9viF9ksUJPPHxupkgZhsuLD8CEYKSP7BddvwyLG6Xuc7CXGYK92ETytfPQmvG",
  "key34": "5okmFENMEgYbmdz2P3cFMDMgB6pgv3PfnThUmw5ajdJmZjNAMRfAM8uc4LG4BErqWdnsFARHUZh3cxtUUxVJCrwh",
  "key35": "5yrkbQnvZkCsPftc5d5KvTpHWjMhvXK2DMDDQckDAKatvoRZe79DvBCBMXRBD7Qwg8eMNyQPinaB9Bc1HjznXa3K",
  "key36": "31jZNojitYMLsUKUba4LJwk8pNDiAvpx5zKCPTZXrWh6ejVBTtvcxScheSbW6VcLAdjFU1n4hsgTkLmLUnQ6bTHW",
  "key37": "2abyZFHnYyTEVKr2rSj66RsZBHKeWJj4NaUApWa5p7hAuVLfbUiJHkm8tUnxWj11iNBfLTJ8tHSzP81KCDy3QXKr",
  "key38": "3PcPEdZDHaZayHk6nCgBu7aMZMqdjAG2tY77ehCoGqf9HvWEd9fmM3hGe18ZLf1zaW6rN8D9Y6k6HnK8igG7Ej7F"
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
