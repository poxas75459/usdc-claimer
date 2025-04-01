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
    "3VwxdVUzALNmM59uCBiCefxBHKLd1bqWChqCFY3yjdkbUGGsWP4n9vmeCuAsAAWziRXS8J8mueiU8EDagu8NdmwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyLGjdK6Mp62WGEgVyqQvzSG49d9QM2KXR5KBenpUQY9ywgtKSb8CPFVGZCueBvDqdv2FwCByA9DxCpmtLXrzeD",
  "key1": "5fsD7fZa5QooW6GYkHikQ2WwGsQEgxqYKxadR7NjuWKj2J8Ax1iChaotckTyRMGX42WjitbG41wzFtEo8PbmE4cC",
  "key2": "4oZAAbbfgKB45sHSRejJz4mXQzNEEeNCaLiZ52cRkcms9FevoSYgcwpEpUEpoaqQpAx5RD5z8vK7QW7ZZ32QoyFC",
  "key3": "4Tw5x2GGudu1BURo5tQQXtgiaQz97XmnT4of3x7c6m255VbgAQ9uNQvjzKVnHCuneXKGVJAGrL6yvB1ku8avVucM",
  "key4": "5vBkT9h68HFJwR41VDAjJK6YZVpDQKuC6Qk9iEWCygNHXK3Z6mcyJJdHStuZbY26hUn3Lozp5TMrKZxC6HpXEPgN",
  "key5": "5yiPD2qC7Zkjy268Tgix9PGQCMofERbo2XZ2GjgyfZka63F2oxMFK7uAsuVTeXywd1cLnpT6VRxu5h7z5cjkG166",
  "key6": "4XsZ8MRwitsSYzY3pcRa5RH2d23ETzy4bX48tr3R3ycEBmEcpobMahUZMr4yVj11huHE9saDmg5LMXRQcCJXhutJ",
  "key7": "UgpTnBTuNfCU5j7KEZaF26HoKcGH791ef9envqR8XBK1eHq1BxVuNih5gAdVmpy1bfS9poZgG7WHiJtijjRR9bL",
  "key8": "5JwX1GWSvw5NCZBj77Wq3HKDT1m6CPNJEiRRRx7FC6AA7qvF9VqnTwB3xHNtgLhhzFBpvJMXrRhTc9C8p4A4GTo4",
  "key9": "4ZT2vKLaUHMpztDvneK6AWMrhPdvghftvqpfjxwQ5mRD4sQxXbcBj43cUbicD4nm7JN2BAnYwQ5Dow9yi638xJ6e",
  "key10": "4acZ7txctTjSkN3Xtai9ustABHASPkQ2WYWQrqEjd7HzTSDxJ5hi7LQEdqvTLsJMSC4Ez338RRcCGnv3ArhHoVN9",
  "key11": "Sb4wnY4EpUbM42zdmLMUkEVsEyp2mXdZxwo5hPFZzuiVpjvcXb5oqFoKoXeeFPCSUeJhVELhXUcKLVCNZGx4Px4",
  "key12": "5cUQNy8CswKrkQcpoDD7oc7BuPrtYc9WaF7DSPr19QHC7MbTbz73wxnkCm8uAjixFi6oBrAbkvAkJb74Un3C7bUD",
  "key13": "5MnrpRP3NbZYdy1zotVMmav8rNwYXjERwTivo1xWs61ZAMn3Z1ULbTUAnaRqPYRJPZfCh9rhgY2X1ndmkLnDB3px",
  "key14": "4jPgiBGTfMyGo2Mf4wN7Ajtj2xDWTcVPYL8XyNHZcQ1vPEyw3FR5AnNhtQDtPAM3mztBR5rAysHpFLqbgWbfTpYG",
  "key15": "3SmSupgB7qU9Mt1c4iGuSBihn2FprE9URaobGPh2Fc6dt39CdBYGtKuYqKGEzSbKMws3PsCxuBnuWLUd67hCRJ3T",
  "key16": "3XA7cfKjV999DMmbf4TMeDCHpZ2cwPoJa3oZGEriKNNd5mcCuhzWCQXnW1ydC4GRvaT9U5UkJkwxQwqx1TVKgXnS",
  "key17": "3uAmba4d7N6X4pcNf2AXaVbq9SitJnLHx24kURNQkt53Z5QDDsYGmqjUwz2PiEs5oCnguRHWB4ffvbV5rEJ8w44r",
  "key18": "5K1cSoUMioSkjBL9eXYNQy6KzDw94MJL2Ao92AnguWVA2GzJyX8DcKjz9ESgSw1DsVFQ4V4eZckz2mg3gHEhmrP6",
  "key19": "3VWm4mCczuCKjpgUeVJ2LRWo2883GP5GwFkDePuXsUaP32ngM2a6pMtK2Yb5jUXfyqxtpKUy25AohEaxkVr5NtuM",
  "key20": "5BbE5vwRjYntKtAeKw8pa6hhUumHQHXWDb1vfQ2yqsSBrYktasZwBZVv91U41pkD32DLaq2DNPav5BLeMsiycxXL",
  "key21": "GiasYReetnMkEKtmqbT33SdRxBvtK7jeGYT9oKDHCsWCyLYqEDirJzJBMH8jz78nUtNnUVeXU1roEcT3VBG2Fgh",
  "key22": "WLpaRZXeHcakYyrXBsU4gtTivZNyqKM2vRuDGw89d1tfSfDuRTFR1pL7WUyzt5GEKUnSuE3ppjf7zLATBrq9DDC",
  "key23": "38Mb6dFFX5H1sReaAmVVLZtGVNmJ4Nwvf1ny5Dr6fN5PnaQapeofBEqjfhBSrANL918cDEUx2AnU3tTwAjCUqcCH",
  "key24": "3TmGnHWyZ9QACJq8fweXJsanEEY9bN5d99X8bXWJYkhGJgK4U42Q5btRyAfyj45JwUr6KSftDB5QAsGtiJgBv1GL",
  "key25": "2s642X9vcYpKFpiF8f4iWKjRkHFZJjUno9h8GJu1hwF4hutGpDrGvQGDAHNKxwr6FTVCnaSkpxvrzuND51acQedK",
  "key26": "JTQ2peaLhFZB8pxcXf9WSmMdEc2CKPdeUrDDdk8o1gdyakogwv2Gm83Hw53ZD7gZw3LahGrbDtGR4JpVN3SEV9S",
  "key27": "2R6rAx1wkw54qhzcMqHVqrQp2tbwJL2cyYFJnnpkDihHPbf9aewKVHmsBSh47xjdfkHowWDijwUxoLjz58bzf9ct",
  "key28": "4FFxqa4GLUZPGPwhZHdAuKevuE6ZvZEaFHbdbtnM1MRib8UtxPsS8yA6Ya2XjKHo7m3GUUA7dxT8GZqj1p6WZB5p",
  "key29": "4BHE81XYr1wKtF4VCjFmGa2oifWrcZz4CvTZNsor1bmsGxtFBd2i4kLLxcw6XoSmeTTpvnqC23dB2mUaXduPAKLQ",
  "key30": "2JHwFAPEJFdS642TJRr8XMFHDmDMDYy5RZ77NRipskFupbDCB18kvgXt4ieDxLsUm3qxTq8sNHFq9pU2HrMLE2z7",
  "key31": "2HVCwJoZFoDWbojmEK1YeWe41RzR8ocLxQWcFdRKyi5UCpBMThdQwWbghJ2yY5nTDtTEaGcGXAEr5mqWFkNMVbH7",
  "key32": "2VRxVk4JGSosmxGr3WCvUXdDmTxZj88JKvQQFtuRQWeRD5WSMmJPmhaFAUrK63AoLtn6bbKKsrUQQt9bKAactjGt",
  "key33": "4QnaVuTn9SiB3PYgxncyw3nVvxxbcsTdkChxvQMiwCrm1DeoadxhccKYpUuDXmRqMoSqrxgZ1M8DW7Pg9bWWAMvH",
  "key34": "4dAf6xF55u2oNkKCrB5BwNBVpvdApxmQ2H8yRjmmg4LwppeULo2fVFnhibQghZM6JvaYeXNrf6ksk6tuuGgbv1Kn",
  "key35": "4uFmGE67DX54Fkmv4QHVbpHitGmvA5NmQHteuWQiv7aKsjUXsJCnWfGp33jbNAaQK8fXT2sE9JFAwyKybH9ujhk7",
  "key36": "4a78ECyQGuWRyT2HHSmiL8KHt8qGGCoTequbHsi3GHHRDdGS8FgQCXUxBBq4uNeRjyjm63HWUXi2ArxjV8UyX6t7",
  "key37": "3RmPQfUMYi1Z7AvFxiKo1k7XVLacbc7n3NStqpM9JMpC4iv5LD4CoYUQ1ZQWEtLoku9mMsYb4Wztjh6AusxdqrDv",
  "key38": "4WkStUK2p4Ry1G8odqhp2muhGxX75Z6DgzgwmtfGWuXGye6GgaZEz7dCoLCQP4GvqHnHVkN3f1v6CGZEVBnheKhJ",
  "key39": "5U7PhoeNXLJ19s3kWbvPxBJWpGBQgZpoSNBWBudDxvET9vAsZVdP9v97tL4kMiotwAerDmv2KEi8vqdT7bqdpkLp",
  "key40": "57CR8hjD5evHhDkk5k4XuT8owauHuL6HTCn4ESmJTn3psvP3S6XASvVAeZrxQJ4wawnNQDZ3KeHSgAkvdNuUHdmi",
  "key41": "3VLEec7zH8T5zSKPqBJPhrWdZz5eHbXem9cwqHmSPuRFsqqUVtA59jTNyCXQewQp29EAJ8hCyNDn7KaoZTtoZGNq",
  "key42": "31RKhyjsswFpkMQNFAKgwvVvxEbFxmY6e8wZkykfeVasZoPZzTgZBjrKef4NqpWRssmVPHPUs8BLbWHDhWCeBCyA",
  "key43": "UyndbpBLNsEQXCPdhs4zr2qWapnPoo85ZJkokXKs4kzeUe6baSp49FXuAyxJaBbqvqnQ4coL3UcVnA9g59tLcdj",
  "key44": "HKHsGqh3Jtg4HWGfQtELXb8nggyGXUY1XBykF3Wzyqshxxh2JDAbkvDkqxVZTMeN3tb7rKDLAhkmbBXFvCZQZzn",
  "key45": "ocYTw6F4JYGyFfN2ynQkLo37oDHAZCgrZAUU5dNkhmgqvENBMidp8SPBcwcUhbVaVCh3ivCNChANBfmMY2ibW5n",
  "key46": "4fV9x3rZwVGkSfdpd4FHkWaWPCu5Eb3BNMbksXqWVmkERDM6xg5GDqTWSTWxjGWasAGSFGTVkpYXMuU7zLLjDAwA",
  "key47": "4XQL3DihQyTRt9LubdxcuWVksxk3WCMoXgK1aL8bANHPYQWF9WALtWghrjcstgefqdowp6Qy4e4e6KPUyZauvse8",
  "key48": "5WYGgVmkyo2Czd2GdY12LT5fSYab3GSJqSY3sbBBB7G7Mn9AnjDurfMASvDXAGvND6JbgnitcKxj6PciwgSjxmu3"
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
