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
    "3crzqdL41stWpv9duDWLwMjjzu4aXhQCTo5n6pbsYsRG9XidWJibjPZ17pT6xBJg6svwhHNBRr4ve8yX2bxjVNvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZbFue8MB9ybFxBeu955287nWMEC14UBQvPTFeJCH33RvVt8XeSXGWCHPceCRTstrBgTq2ycVqGmmoEDTirCA2m",
  "key1": "5PLZUBrxs7FT6BFCTFXDGJnxBWr7ig2XfxgE6pNz1XrUkQfbgazePTpkDFQjw7aoc6EAhH9V6deAVRHZY5f9F84U",
  "key2": "mETdvWDD72ywWNcgZhTtL5kCe7DH72AeK5CajGu5HVuiyLKqkPrvrFqJGwV5yQYj13kVynKUtDC182aXfLJrW33",
  "key3": "2d6sdbfLM15XzViomhu4AW8848aD6AGYG5Q2aMbcqWfxPutARHrZbwsJ4prxzA6oMyhgRZt4s5YEh9dcdqm4Xtxo",
  "key4": "3EqHnsamHYowugp1qgqFaLyzofqRng9BhQbvDbybKvGgUAHExctvQkH4id2M8FM7wp76jNgPyMbfer9ZNqAECURL",
  "key5": "3cwvxxJcwuAeLRNCu9W6qRJYMpqeNNQghwqqwpL2Rq1cpckvvHY89A657GZCSDTuNKo3bn2tVYn4Sn2RZu37UKE7",
  "key6": "59mqYeSL3zuMZkdjiWLu3NUb2u8hUmdiTyBFbZXU1Hde8fg8spvZWVX8Q1BTBmxwF7qgR6ptLhbDy4mHeiDS1eez",
  "key7": "2qnob9bJmJxh32Qw3oiaTYKZbdNUiwbodDcFhvdoM4vTQFHG1LmR2EGxncWHePGxTznuRxAaWv4hRJDuoZ9KSBxY",
  "key8": "48ZFjcwbsL6f6WxXySzQYCU7qLMgwhbdtgfP6FTPFTHot4q3vLuPqY1GDrvq3yVRCmS5W4c38NFdyH3ptMDS3jm8",
  "key9": "5nVmCCwBDHQcrZ9hjwWcvYtWXRoq8xUTLjPC67N599s5FGzkNo4fnoMoweEu1kdsHv4AJttu5SnUYaUmcEg66nwn",
  "key10": "2uCF4irMFvgCHGbgzv6yWm5t5ztYHVWWsE7U9EJvLrh25EchwMvFKFcsmQv5BXiJSrHxgc6RS2HRWsQfLBHQ9ANg",
  "key11": "2N5DiLWge1sTb3aMLVnmj3Y9UeABJH3JCAQNGeEmDd5DvWkdASkhsJJPsWjwuRmPk8bmf5JhHAkZXP7mJC3k7g5p",
  "key12": "3UYymPksxGEp2Am3rKswpPc7iyjoDBkZb2K4KE2PXVNQ8LU47pBdS7fZSgNXxz4yQrDeniQmjKmXCGipjux8K12B",
  "key13": "3D7TKYw22WiSZfrM7Tu4m49Ng77ukncWs6NcuxqSYPuuLuBdD8dirvU3uknd14qFA8wWqv6Wixc745BYvydiM5Hq",
  "key14": "4Stie4FtmJzXmFSJagp4KRYTMkVRFpFnykHyewAJ7mPQP9kXH9ye7voWcWmYCaWXwvUsz51dqSMWChp5soV7BdGg",
  "key15": "4pLKykg58UvGxCv7ADq1YmSEBaaRPvztbFiJxgnxiGBE467kAFWZ7bodRuw2hGFi3xy2QpGGRHHXyzL8vhkEHCGE",
  "key16": "4EEJLe4M76Y7714vGbQU4Lqb4ym3ecbzbTkqYzPawHMQKB5inPMFCXU36CR9q8CpYBRaVi8p25LzbdXXtJaKPEMh",
  "key17": "4tqthkP7mcbRi36STNU4wGtooZFStn7EZiojrHgLSfunQEkde1wE1r8Ep1d5m6tyUgEmV75ngkR83U5WmtfshkFY",
  "key18": "KbsvNLa5fPpskTap2kPeEJSyK8J2SQwKkk2HeY4Ja262cACowy86wG6XRsd7ULEmZpp5kUTxtw53XM69oh8r6c3",
  "key19": "5ttiU3WGLJXr5TyJJzTfo6332nKndTHb7dwfpcszvrvEfg6Cm9yNiTyDJHfbGwhhyXukdcz56U5fJXC3Wgs89HnS",
  "key20": "5dqnEoUmuQE3fo8hhgcuWj6FMFnsyL7vdBrTgWvEDpT65JR1AMempzCYbYWPCChf7YKe8Vz4cP5Mv3ixsrnmPLQV",
  "key21": "fhH5BqnugZFQBMz7sQMiMwhJghuZ32vLaCFobQ6xpT8vWwdENXWhh9pZBLHhvkPGQPa1Ft2KtB7juuKZ1NSFhQL",
  "key22": "2LC4TWtKdyWZ7LdZtGV2F9eEjqBF3M4rnG37nf7rdP2bVACL2CtzN2DStonx9YrHYpYB4v9MX2kjkZuZ76xpPvyY",
  "key23": "3q15RpenD1mNPwFhVSGfPVMhBLRdLbhHyoTCaWRyjwZVNxMSWa6tUS7fb79VnsHSbpaZewcUvsC6xAHUoSr2UD2h",
  "key24": "5KSxySrN33xam7JCfUEM1HbEMDZq52hp4wjkYyyhABmgwHSDG1hEs2devGipoBvyz5iBAXdwukshmctW5CiAjVpp",
  "key25": "3wvkpYYDVRd3i2mvRnYfYrKyR2PxVsEMi4YHNkjjKUgL8gp8csviX2h5LNv4GrHYHV3P2H3SDYfhZ8u5Vw6ogwma",
  "key26": "m5Fkn95r7ukF2MNLjNjxPHH39gGKoGw9zKdVSac6YgBx97U2V17BaP4BwATmGrtqSBcLjGU1okTbbscaPrWmRq5",
  "key27": "47pBWrJxD7f91Fepxu6QGTwzH1cdUjbURw4NHgVEHkCRavoecJPTTmMDcQStgnxCNJ7AkcWVmWGVi2booX8DgPZo",
  "key28": "3XJ7XcRF46kqxY3nFUJA9KkTXTPUt6WTMZWD3bTfxxRHKKSKwiXEnsyfNa76ubz2fsGN3Rer7PKcDUd7vhSHasxw",
  "key29": "4k8Kyziz6J57nzRxQcJNUvHLZTWjAKdvMxsu8CHwtRJ7KRNyb2BbiSLjBsJtihiUxswvioHM7pSsewM697LjHZAT",
  "key30": "5xWK4tymySveETxDg2CduQJixK3ANVbVQnrHZpaAf4sLPhNd93yDRk7MiDsScPzzKtxbqh6KpY8QabX8T9MUuqYq",
  "key31": "2SiyGGbqp6oYAhfB5pW1JU11hYDArSYLmkPgmyjHU2sZtpcMmdw9Pdh2xZQBrx1xrEKDaHN1RvEJkDte8Sp3fwnq",
  "key32": "2yKb19vm398ekJ1ZC3GJcqYHAtJgdixNi7QoWqGk7v4myo4S9V4MPtJZcQHmx5k7oBktUkrsFC4BtWmV7FRqQ7yY",
  "key33": "eamGbNm9bfZ53MQGJYDYKwjSKwpWNHZNgeaTMMWgBdLZRgRExVp4b4t1gNu1FszuBMCPro24qzo8k5nBqNvLdYo",
  "key34": "33rnd7eSxFrCkdZjr36xnjccNqKyrrT9nsMGPbJy1GXJqTTB92UVJtaiG2fDDbx7Kcv1WAgmd6wHwTW9APJyvPtm",
  "key35": "5sZCitCoBUyJhu3v5Kx8GTya789oiZa3LFEZ9iN5hAQ3zJTKG99DV4MigjfGAiyABxFHZ9PVMVV61pJFXRU6kRT7",
  "key36": "39hJjUZjZU8BR4oDTHxRsdSWGDxz5gg9zcLzvNqrWwvrMmgCgJMrDkmYzNF8X5L9C7pcUyuv1PR8Zg4qHNf5mqxr",
  "key37": "PgpCywgbA55RdB5WuCPmQHNsaapY4AmAysGLoJNXixWYYNYnL9Njr1NngWDRSts6oyoVfSH9fAfL5sCbCDMjLn2",
  "key38": "5Ru5z64xJrxhustpFiDvBFDgGUv9t1PQ7gfGuFFFgFeqVDT4XNuesDHpEregxnHio99C85LJm7qKF1MFKc8iimr4",
  "key39": "4A4KkBL7pDxSiAeVN3q3q97D6CXB3BVdcKLHuPbUgPvcvuPzahq2TRnYPquSFG97yQAmngz4L25sUgTTKqVtDUPf",
  "key40": "28Pzmd3NpEqJ1JjJcoAWQsn1ea8TAp1L6Jo5pw64KsDMCoaW7TMb713fPosHC8DnB8gmfvMWDaBDis78eTTFqkiy",
  "key41": "4ttFjGPq3k9fFNdSGnkvEd5nxdkstFf9NBAT82gm1zFzzHqDk15m9SucsVWPwHkYbrEBiwZ7Jz3w7Qq9BoCkq6eW",
  "key42": "2VMsHAe68A7WZdZ9rjcQP42SXReArJsBBUmaKV4spZLBb6i8LT5WSP6owDDWUyQmFTTg8TxfbyDM4oZDZLstNjBi",
  "key43": "4zyk7VGx2YQZrng17JbcArWr2dwNFaM5WFBD94QvcndNyu1RpnDmdRLi37f5SZEdYRdeqFNmx12fDmiV2JnFDrEM",
  "key44": "42snR8BThf8VnjvXzCyW8im3eR3An2HALDsbacwFamobLpKE86vgJFuH115cQcSFBU7Dc9ZYLGGCHZk1xrqZvqTw",
  "key45": "4sjKuSC5KEBf5VpjZGx4JnKD8RxSi2Frwg4waV2nSnHxzyACvxwBg5BwGxy2bdgftjCN3Jij1YN3pEb2dxvMpa6o",
  "key46": "2fFvd3e8DgvibKWjELesNLHJGGGxbkDpdbnuuiteWKLEPWPaf29nbt5WjzddTG4s2ZNfoVXWgrbUcrY56NL5XnnY",
  "key47": "2rJ3whwac72bXPmMGAojbauMnUqHagZ7BxSPH7xuvNpyvTBWnDoCWtjvuMq1Qb4yPPa9VhhkEUW2ihUmixM2PbA1",
  "key48": "5skt1bfRTZVMZapPBenz9Di6pg13MpGaNn6n6YSrhMwc1JWz5GwEYQQAmbiLWkrQyqDrcZt3dbLkQKinHmnnuG9o"
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
