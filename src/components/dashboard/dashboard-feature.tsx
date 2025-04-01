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
    "hrrfn6K2PHrnEAQV33syafhtNpmTpkku7qXZ6MmypyoHMpdAMgwMQrJjkSz3YSoLosrYo6gRixuWtsdRLfEBgHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5yQXMr3TD7xKdNWsTqFfTryZzSKZk8PG49uDfERcbySExAjrsCLvgVVA1MkrRRZtjSW4okusPWsHMfnKKYXJc4",
  "key1": "U1aqTvJoUaf1UNqP6qfQmpK7qcdUK81ckxZMYTihBV3WCqpWmm5X5HcRkTHMKQniwWwin4BvCuigLnpLJaKAXAe",
  "key2": "63cWzHBpLR8jsKn3s4C9jqY4h3gXnJuEDRQE6ZuakoYKiymByLqRCSqv5dH7YZtsJhnkCcDZCi8jUUcjW2zAxowq",
  "key3": "5UKnve8ayy98UYoRKJvhgVU76toTJPasekRespcX56QGAJugV2HMFrYF8DCPmyqD2bBLcWCamBjueUtcrcefhQPL",
  "key4": "bTt5KioacFpUu1ywTLuNPMvPWrreZdTpvmC43ee7vt9tDRSz7zmwePRvrz6ehwUT2TZSBXxovSjTNFs8oNNc7bd",
  "key5": "4SVvsEKFMU8Q5qG4nNWWu7CekcLwUoPN44WScLvi1hAcn12HkJWahJfjrwCsKe8Dz8KTfY3F1wURiD6RfQx8GmdJ",
  "key6": "CXv2MzuAUggWsLmUfyS8E1imKC6HiELBYSguWboa3JcZURM4oELqyoB8wpm66q13Mg5iXSz81g6ZTJjQVd4mB7x",
  "key7": "2BHVvpCaHKk8ed39crrq1uue1kjthm7RxQJhfTpTtoJvXn6yhJpjT1fcfikqPu2w6ajZKof2Ae12ufaxzgV8uVZx",
  "key8": "2kHAmPCsuyTAyGZAvsokynAgvuq7wUxqjaiQyAPrNFtRMHJ8SVHjBkbzmor7QUD5Gav66JE2R2zWTyXbhHjnGTm9",
  "key9": "4BtKGRbfW5cDQm6CDtfKDMoVsCWvMj1SBNZ2EydzcW1zDBp3aBx7kkaNVfj7tnd7p6ebEZqq3tUJsJAcue8PHgh7",
  "key10": "2zW9G8JDzaK4vZpyT6nTvp5uxmMB4oQcH5JBrXSGrtkrWKyX9zxvzcvm6oc1Kvo2FXJwbjRiQvdf2edzLZtKtZxJ",
  "key11": "5fdys7BV6ZGXYWPZsgHDo5HSthTZawk4VazikvvxAdPMQQbFxj9uYQetU4jDTfBfEmNKaWnBbCbDTvywbxe4phB3",
  "key12": "2kC2mbJMYgZf1uApeUxyB4QTcMXDVfHBdEg4vMLAH3BAfqbjo3tAYo6noeDhcEjRf8P2Ry4SkZHtRS66FjthA1VS",
  "key13": "haFyRiPc78w6nyEze2jSVTa859rSLaYh4voZ7humwDGTRQiqGQYt6k1RGvzjkFtEsTWFRWavz2yXiH5dpabd8BH",
  "key14": "44MLLFYyf9jrnkb4YazhRhNjDMxcbWWEA5caio52VRBt2TZF6UaZPQehCUqoLv23M3Y8XkQv4Lwjzou21XUKz85L",
  "key15": "LFkPEWwUfR93yw2qKpojPkoGQBv1nZvL2dvTS8gzE8rQdirUh7HXAC1oTCqRgiNHbgxnVz2rSoEi6apW2SjBVC2",
  "key16": "5c1ZDQaHdhQ8zqCYa2x9WKfzDbw2rfXHVcfbBybYw9Kd1jiLHL17SWNNE162FUYTz9hSGgsPWd3TDGz2Ha5WQ8qE",
  "key17": "24FCFeez7JozyA6zGPSEMJgZcSyG27LGhoRcQ5siKjkEbFCtjEWpAddwCmZsrj2A42C8eqnKo8hcM4jBcyohEc8g",
  "key18": "4CtHsvWARQf3nGoAD5uC2Tpiu49TnLHhPodPsUkXhHMz3opFzufxTTc6ngTcacJ2DTs67YVuHJ3KeLVSxmX9SJ3M",
  "key19": "21AzUBS23pxieBSrmEQ1iBVsvgZw97wAyLVVzDXVfgi6jKNf3WfxnoGMohVM7k2HPHxR8MRC9tfxjndyR3oYbyFR",
  "key20": "5QTGUAxi2yWJehPYEsNSffzXehnWkE1RMHeMNuWEjJthwcNfbRDBcw6zMg6z1iuhrXZLGPjZmWbyTRnCsFFsKD12",
  "key21": "2L6v4XgQZ2G28kZTDdqejwf27MgrwrVdNfF4WdmaUBF1rW1A3BEipTupHvLCVzkFZCjgnpDsWiPxQUFCfeLNPbVg",
  "key22": "3inHYRaiTeeDQVV7nqTNVAAbZ75qk3egyEsrVkAnhZ8cDZLdq748D8CYjzHv7yL8vsWVPYFgqWTUDbegSbqzDNV7",
  "key23": "mKftonMpy18XAMECSqy585rucYZkv4rqf8WV4bDsTN8oNaxfQcgs8uWS2bcsnQC8aWw6yt6Tm2o4BVefZYDffbb",
  "key24": "3RU8WisqTyR3tBWRtfd3X8Meqngzbvp2W2BCbpiKAZCU5QCTXSfn7MCHbREx6WeDWbL35yG2DPxV3b8iA76cu4k8",
  "key25": "4gsBLiaTcTr6f3bLHCwXEFfdhBcm5AocZRSZQgivEGd4ewQnhHwQg7SwAv214spnkTNt5JaCUpEHQXBsEZjzLzce",
  "key26": "z3v72PjSwdhVsuMPxuDg8kfS3twMhzLMjTiSeGbRAhNmrk6yHpwL8LCSsiw1zNomv8wepbbAgin8p2TTpzWnn1x",
  "key27": "2MSDRooxdUZzNkRGQsVKyZZcAaPMyPmTWtryFkHwK9gkD3B5y9wQcuUcmb4sDYjFJKzzdrvUq4tGmJbBBgAz3T5Y"
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
