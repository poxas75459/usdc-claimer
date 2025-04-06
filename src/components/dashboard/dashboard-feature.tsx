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
    "3gAC46e4eYFTn3fvnBC7quxu5neLG9ANkhyhfksAQHSnjjJKjuSmGnCGDCR7Z9sr2rbQZhWsdLuYgQDGxir79uht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bbPsQiTHSVSvCz5DwFD4nDxfGoBpbsgxSvCxStMW9KEaKy1xzzTQiTH9d2KgzMFibG7mmo9C73wTAoekrDD1hX",
  "key1": "3B8ru51oDoGPwvK3XtoDSWi8wWK53figQp2QkSYGYGUWmbfSJrMNkkbdzoN8K3MqA3PcZXSJgVQU4BpVVQBh5evs",
  "key2": "4hC3Biy8vv1zkfwtHCs225A39sughz3hmjmivgJ6xdaNr86YwML7WBoXbXVkJxATiRLNWKmXA7BcbEPT4n85d6BA",
  "key3": "2DV6qpu5vUUtkKzX3P2BuP2qd6wckQp8JKHPekUmuh5yCxHfjFvDp9BPHSQU5FqepL3KD4KpFGDAgFhHv5X4sS24",
  "key4": "3JuX3dYBvNbVZXAh8kFv3xnt4gHvp2M8bTdGvYhiQ8GK1EFsW2i4GDqfDvCv6dvUYq5fvdg4MQ8yuLdKkhKsEiW1",
  "key5": "2G3T7tiPwTZtxG4NEzeYp7a7UDzPUL1o9fZ8UypDaXrYynAWcGGkn3AouovfWUUPKTYYqWrAdoLvCPmHiVjp9ReG",
  "key6": "4EiGkfdaECFxC5LsYgwBHMj4PDUM2FkqnBdP7MWcjgTKMmJf3rEt61ZWCDFHPi6eEBzBjW3zmD2KoJj2ZdF6pEZQ",
  "key7": "3WAFP6ajbj6ZyUNX8SWenPqYhEJoAc7RtHY1Rbo9CVPHZwfVdPr6Bpgk4eHQZE6THiMQ6eMAsXfb8oScKK9W3SQy",
  "key8": "Y83eUKYdzPcgrpzc8wR2utF8GgyNsy5RYxuo2ZEyFYDxPVdkUiN4r8yCHNm2rYxFss7xpnCjRE8RxB8wCXeXfyK",
  "key9": "2gWbLHN1Por9iYnEFX93N6akaXfgGq4CLMMvoXY68Dp4Lam2zC12Fb75YdWziyW639Tsmy3MqVvk8tv747C6zS5K",
  "key10": "4aSs8xfCg6g8gVD5wRPf9o23ePecqRv3UA8qYnHPnru1rL1y92QP7ZHGfFvx25uhq3sQEFXKCmPEtwYtL5Si2C68",
  "key11": "4yZQR1JHdkKKAUeiewyEqid6byHYtHTsAV384WJenEeYDerCgXdm1kyFbvsZjCngKkNBNNBhPEuVViUDA1wwY1v2",
  "key12": "YJLjBwVG88jehr4PYBzeAeAL9BY8v7LGb686hK8gN8c6FDmR5eyKRXgQjDKs6xKEH6yDqiRqysFsfU5HLE1knLU",
  "key13": "3un12DHosFcWmxHGbmgGoWvCuEwsUB1x3cvTpxcUCWTtq9KFzxKafXgVyht1V7ZVa1UqWvB8q8Rw7zVCoYK6mX2P",
  "key14": "4gWyd6N4jECUrB8Lc6Dqk3uw6nJP4mRUSRk6bSzCXXQLNT35GvXsA2oEsHupAjAAnqMLQoAKuHxNM4sF7bbSd3Bc",
  "key15": "3PELq2zpeQEh1ERNruJHHagZ7dX7orwbfrQAet5AApo8Xxqpdj5rFHCr6dtSahyzZxM257dDMwtZDtEdNpRCiZ8w",
  "key16": "5KTQT7Jjvj4S5DoTUWiAPVSjAo4nk3sJYtA2MjV4izJitZyF9rP3JCH4pqXbfArQwF1S6LmToJj2sM2KKYVuNQ4U",
  "key17": "3APXptPLZHc7AXtaV8PR8xSdqUjuaTHVKcjeau3K2yemovDqgnp4CjXCox5NVX5gs5dCuRpUyM6guDydmRe8tvgM",
  "key18": "65kYt3VjbWAGLgTSeUvf5fg5opLLgNW9draq9PPr8XaHE53sYn7xoyNDrYdEmLM47PKeGT2xqChj25wysxNnU3E8",
  "key19": "4oFYyaJ51DLcWLcCm38GLfKwFbBrfmBQuMJPX6zAvr4j48TmLgTMhhJhgKT7SVvbxgExJjW9A1EqN3wrBbrW5JKm",
  "key20": "5wd48jXrjjyzmJkHSiz74BaVbUmtWnXn8onpbyJ9HtykcJHbePnHiTeoup4hkn45ZwiZzSjQPHufzXDvUfsa5aug",
  "key21": "3S9bxzCx5KkDcfgGiuYQgCRPLgWsYJ5iit6rdSbBahzf2WtmPSeq21kVs6jPb5JVmLXzrKMjEytdpesXGPYZnSkJ",
  "key22": "5Z24Ymr7LEFDxjecKBhFCQNg874A2Pj4i6R2oRaLXDBkpSNrMUoEdURJVAWWt7vezy9cocd5KgAvCTcyBwEF41rV",
  "key23": "JEHP9oEoXJ1vv2XyZfdqofegnTt52oVUiAfU8GnrSktTUKmie84Vadz31T7fKYSptnhGbGSHr9FQFoqba8iNNP4",
  "key24": "2eLrhR4J2kyvEiy73V1nfsA8wmixLvDpPXM8LrkdwwxFyzySEJFoi9mpDb6WzUfKq9F5j8oKWPwi2Kr6uDhVvvq1",
  "key25": "URft68a2hAF2Jt97gvyvcVz8cZXQNKyAATiZNgX6ouozfgVUSHUJFWSGZRgCkryo8qeir3UmMDNwao2kidFz43b",
  "key26": "VdyojJLtbTWjpKafY7cUphfeJgztz8Tvd9W72zz471JFqSFJt9oYLAjpyeoHuBwkVJy4zP1xzPgE2V8tu71kESj",
  "key27": "2GaVN4H4d95HRRjxWm8rGZ1ow3NJFUfwd5YvfmqmFoBBJpU8jmcjGVKwwoq73udPiBuFp76GgspCqy9QyytU9fCj",
  "key28": "26UT13rcqAKM7QUH48YTKkf7eLNLxNX4K58wLQ617tTdTJEqDX8hFSUk1QscxG4ezLME6DqZQtx2pNo8J5P81DaM",
  "key29": "3gmTD1p797mH8bAPcwa5LcS5s5bdCLwD7ZVe6r85gUnjbUoUErdAbdYkPX4W4cxLzJocmqWp3BHb9NYdSZBNf7rE",
  "key30": "2M3VDkfhRnb6b1BZHh6uyck2RFvACL2Vqp5hpCAbuVHERd97Peq7vcGKjcTECT4Bt6JLGdZzK389MrHo49XYR85L",
  "key31": "2QKnDDARMegwpauPcy1b9nz3mi44N8ydaKqxTH86FeCyoDfDRZcrsBDcKe1BseRu5tufd6sWSK97Bax1R8a8CQuy",
  "key32": "2Usm11sDchuYKy7gaeEacQyVMqawj88unHe1zcWAwG3tqSiZJUmiSsgofkC5L7hgyYptJsfnuJiDiWQhnuKpyX1e",
  "key33": "5hKvQPEcv2ECUWzNi9ycRHxy37J3fY3iUQpBAbuTUZ8U6PLFiscB9ZojedwdG9VUEkMQwdZkDkUmmTetKBkQeJRm",
  "key34": "5Z38jbs5ztJoFtqZnusGR9xQ4oXPJ4TV7WG7kYquqWB3VwDTczM8H6uqVxN6uR2iuuhveExd2VKjhVGR61NG8zdY",
  "key35": "4CMPtzGnYNc8Ay4DWNQH3VrQxoUnhsADwCGZ7KSGytFCkDw1YsPKSpGCEhXiHTc7DJjFmQEJYiwY2BfyUMpPZzA1",
  "key36": "1trPseSw86uaGQuqgGELSoijFgBb7Xegwt5ic5yxsDfnXwHeuZubFSM3xsJGvWvcJkt5BvnyWHEw8VSyQnLax5g",
  "key37": "2p9tZTM83Z8v741YtnH71MuWen8SV42gBJL8SsvYKThjAsLpraZHGoPdZeGMChR2L8tqq1aQKi2DPghRTYAC6cFb",
  "key38": "LbEUJEAs32T54dcJLhKbq4qZsnKAfgKk4h7gPF5acmix8WYzeapLjNgnq8NtccQGYDWVwmGU76LggQU34UNiy2N",
  "key39": "63pPtQyCpxcK61DveHDvQBmsvA7fDEpbtJ7D2KaTx3GNRy41ZrrS4TE3ooE9FMu6Sb3nZg6Pkmns3L563zcXj5VM",
  "key40": "EjjxpHwhnXGWZ44FyvZdndZgb5YU1iAWAEDmscRc4nFmdKNTwNQa7bGSJuVZvDk89NNM5hyGopH998G8YYw9Fv7",
  "key41": "DEhmN8WH2USmY27mvuY9yMaWvggYXCSyju4ifxWF87Sr65fGGqBNuvFNysGXdmD9cxEBaZ6x3t745i5e9KxfCJV",
  "key42": "dkrB1RwtEvxPExCpptcuGQmEEqT3DqgoVRgdPByHYYhGzxWk49tqKWqVbeBgdfqrx4z2iyECD5BhfgU6NGRaMQo"
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
