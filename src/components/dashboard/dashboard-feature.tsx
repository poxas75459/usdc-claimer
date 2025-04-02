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
    "3DnDf9K1ZRpJDBwuN4Mm8wt2CZyMx8CEQRdFzqNJ2R543crLMrYPUV6VPosgDPjW3ZKScjcPcA5qZx9yjcxq7TLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4LFgY3hEaUfCkWfWQniFUFJTtsnjLZkGq5PZoFeULPgf1sjYGfsBsEgXVRX6SrZYVccKwRAY1Mpy4mgJAEN5Rt",
  "key1": "DW6htUNwD1fV1jw5YFPFcsHPAfpSBkF3m21SaRonk2HomRw2JuXo7tExyQh1BbW2vYzc43YAokfensiyDMHhnC6",
  "key2": "2wCpiicq6PHd3SubNdnZzK7KJA7CEYycbVUFWz6c252d1Mh6mpx56efzePpNqfAjT2uQMzuzh32mURRhbKwcYidX",
  "key3": "2h2e5sAs5PKrcbmKbTxFN2YzxbD5URKX7CDYWyxLuVMzu5smPJsgrF2dGYv4GDyPSZJhj5eRwHDs9VRFjcXYUHp1",
  "key4": "4drFznJUE3mV7oF1GkoFt6wSyEBV1aX13HaufWPaFGyT2G8CL9EkJnoB45nnfN6N7Ef9GX9HqjytardGEnydV3Ju",
  "key5": "HZpukrRxcGc4DBKUVuRCNCz3BNGVtJFacsRsgbXoriBHwFMQwGbRBpJWZkv4cBZN7DYAtH1SFpHS7J1XzndYeZJ",
  "key6": "5o5jsWRLsSsk1KLkJntUJGNkLYsfaMABNwjhJi8kGNis64B8AVX3SZDba8T4Uh9AoqUuEVSS9t8myqc9YWuzTebb",
  "key7": "5WrFkiuSBcac4QPFy4Rv1YxhtT5GxjQfE9YpvKCdRfE6V7W2mpTiW4f3DuKtnNBvUxo5G8Q4wHR5PzFke3aEbHhQ",
  "key8": "21qSENvLjrR43hnBgTN9oZNNYxRQEKXoHgqqBAYb5cipVn1Z2QpbYFZPyQYxyBAJe91PfwUXJCej5RZhfEBJGnhv",
  "key9": "3MpCwayqnEYQj4z2f8B6ASheDYAEBjy1FhDUfnJGQmWtrjpPX1MAUYNyGSpaYLACaCmigs7vPSosLdFQUetVNNe9",
  "key10": "ChmLY8iLC7eNHtYTR419Fqn39cojjJiD9japDQ5ctVHqgbDaSQ7g8F6PV5VHC5ipSVMPEQJ3YuYZuxsNAhsMa6P",
  "key11": "4wUxmnL5EgRmeFMAjEFWHbx7ZEd5xPpGCctd6vUYW2xQTu97TDdc9yxCxZZrHtk7Bn8zxwyT1ck6fPcuHAhEDtxF",
  "key12": "2xfQDpWduav8uhBLv21LBiQAyj26oaPjT1jhWX8rSekKbAh7Hu3VaudmdRuLXggbvLdkvcvWtSTDMVvgx9V9gE6C",
  "key13": "38cy2D1tVtkvSaG2bXHZuVmtx7RsZEKKkZcLqoz4URmSzQMfPwCMVG2ZdgnKcQCHQ6oES5odZVvgUPKMvP5jJyBj",
  "key14": "2BpBBmAkFnoR755DVDNkBZg4jqFFKinEMThbsSPNtE2PMo2AxgzkLT8mers4QfCftkrAMrbX9sWYqbLA4qL4csQS",
  "key15": "3U9ZxJNnnBjNhNGta54FKnJAorx98ekexMnRrnkxKwRanDH4A6wQGL8UJiCeYRm6ijpiWrg2Wn5tQqXysz49r2NK",
  "key16": "4cdqY2wfR4HUK5wQtuiQpQ9oss8GZYfkwQ6ADtkD61z4hZfajQiTgCEEo14M1a48LdEzwhdTNwcQvMTdZETzDLof",
  "key17": "3hmgqqezkPe1aEFydSf2WmVyzDGPR8jQEma8kE8oUfntBM7689Qzy7QVQHZQgwoPoJBzdeXoSSu1f6eZWm4xjBy5",
  "key18": "56dncCypythpzLVexnNL8PdpuRg2FnyXwcXkhcU2yPPL3UPT5DbGptkj6EbYvQz9zb3e6N8F7xSMea5N1CTW27pn",
  "key19": "27p8xmdVFz5gMwZcYs53y4bdoQsxZp8FkL65UY6pc46TgDSxxHRMfEDVTqKLHcM57rnWKN4bmMBabUhqipBvv9p8",
  "key20": "43qFFvWLqLpNAmHC7AgP2EPAA9WPfbT3jPgbtWY7JmK2FkWbM9DaJnswkjr3urhm6JNjfYcrfHvAm6WWD4EnnELX",
  "key21": "7ChDsrEmm9EDLWfy8GwAnzPcvMKLRrhXw7dFuB8py2o4e3yoLorWWuibdNBAArf7MvmbYuSJPfyjMSXRq14f7zJ",
  "key22": "b1ehPzeNJswtgN2BhngKLMGSKXnHtoj7iSQsESrnqkidHpyPzyX6Lw6xLjdCvXkcYmDe6XbrwYrfYwVnDaLCSLa",
  "key23": "2f6MusX3hhP6twUDv6kiimHe1mceC9bDiTctgj7xBn3xjrbEC8esb7KdKtpqyxxuuWfDnZpZiKssv9syLC2YXWDQ",
  "key24": "2SXdUPf4VED681XFJGUGh2MhocWkVQXTEwcbY7zi2QW6Kk2mhBffFbyTCJusVnxmcFV4F8QgqSCDRBhscGKbiRXq",
  "key25": "FTVMF8fUbaMAYkQiGUkLrQFEhFnRnTETXTtQtkcmArpMRumWzLpJFj2mLQpMu7CNEvhmK2rH83j6EUf2P5kinP1",
  "key26": "2Yt6aqzELg2yEZyW1dc7wgVBXa6kiyhomggz1iaGikSB4TNdqaTeazCMxwUq79iz7oyHUjSqwkFSyHDt2MR77Ehr",
  "key27": "5ng16omwrpgDAPaWPxgsFVh7oVm3SwuTh1i5La7h2YFPKTEmAqs5BcnCqAL3c3CKCZMZpsfRCoNwXCakBmsxKCQo",
  "key28": "a6qWEWnZpMEGco6RLN5AVpXY6Y9EEz7dKwP9q22AFvZqgfZfW38aUtxnv8B3m4xvjVVUFVgKV8XpR58WrfHY5Pj",
  "key29": "2ATSNTHrZRwVcWZdjjBUVjGir4SGGV5dv3EPjBsqSizUpvnzXahhNaSzC5aKzPZiHdKw7TgL3K4eCb8XS8bf7Eg8",
  "key30": "yMJ4vfgd9meeu9ebnoff7ijAprgwKXWLmvgn6o5TeNsSRHiaq4Q1P9Fchof7sg1vzZCq5dmh5wK4N7E3cr73PMK",
  "key31": "1ZB8V7DGiKHkihKmz692pnP5ZrfoGbT8H71zVBQEYLp5gSmzLTmMEfu73AZi4p3VEEvgHjPSTTnM1QV7mEpkpFm",
  "key32": "4fWYMgcDFyZ9vL1dLeQ1TxCskWRfayk7pCNNf9FRLqYzntysXh6r9HJKGV6hX8RGmPY7DvLzhGxMav1EQx8JBdAw",
  "key33": "2Yi7QuAYxEPEfXe6KyMixLzsptYe2BvGM1SUkYhvVVwbEhawuxXN6dEmsCi554rL4buU9Wa7oc18BNEGNKmW1saq",
  "key34": "431GMFPWv5sFytfmhMhSWBp82fuwyLWiWgE2b2VbjnasDwuDwXAUT6LnnT8qZaaVTZ1wsxjrVUS6CtDHcXH8AFF7",
  "key35": "3Dg41Mkwj6sjLNZ6ioxX6f6beHk21QAyzbVR3vf5Tn6Di5kuKL6aWX4BbasRJLbRNy3U9uNZxyrLBzLj4PYGnLyi",
  "key36": "3tJwkEYmiKVHZrWSVMfAmAQajgGwNarRuFUxZbRs6fJeF2EAbxbjtvgcHjwvdxC8HHqMX17pGsZnwLSCP9m3Zyhb",
  "key37": "5efRj7bo92Gb4YQqBiWL6B7UrDDCihvEoKpubhRL65PPkCUPiv5mE36BLgcSV1JBGJZiaBKFjm6k1HA79XFciMgU",
  "key38": "3Gjd5pZzypByvyYR8qwKecF5WZe2JVgppFaVAhhtndokLo49WKWyw1ngyZe1nMQCsmRYFmyJhFx8bpi3uJbCxUzg"
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
