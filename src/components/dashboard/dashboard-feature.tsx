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
    "vpc97CaYuS4R5xdAopChkCNiyYBkmniDzcX7FfbJsxA7rdpRwGGwL7hWErJr1wycxkgGk8FgTSW5cnkmByhgVaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FU7s6e57wyFcCB4rJfsbgf8nWnvWeiSHvxBd3eQpouHVswEPCWMnb8UWF2PbZRdHmQW67CRX3Z8Yb9XFCopzfcT",
  "key1": "5jBhTjtSx5CV4koRaBcauzDEZLzjp8wP5irznsbKg6aDCr8wxWJBib12Z5QDxFBYoD7vTENPmc1WFwzfunHQXiNN",
  "key2": "47MQGm9dksYPzk83cYcmnv1Pw4qD6UWwSBuT9kAdcEegwPxwJd5VKZ8s2w79LDZPNk6uzwRBSDn3xtHZJ9XcCZVJ",
  "key3": "24fakAsDfQ5NEXLfF9uUWpGSgMydswzAtp2EMRKJaoxXa9iARTasnR9ESoKGi7tHkfTQTckRkmgv8Z1RhuKCgocH",
  "key4": "4pPj8x2JgmKWrgC5b45L1155f8zXY8pYu2g2BDoZo5AqYbH7dwmwAHNyD2Wmid9NHGgvEzH3XbErLrjpKF21Gd4P",
  "key5": "391p7DQ9SW88dbkzDVuWvtrxPcuDDoZU7tkRERtaXCS4ERzfr3nhr4LUajjJ6Czsm2D2mxnV7FngXutZBsSdxYAj",
  "key6": "5xMH29KCwKswZZFFMVDrREZqTNhtbRhEHaxnsUezSZRRdDtiWCnTcVDRg8icEJgUZCZk6KMjq7Tnx5LyTE4GunSZ",
  "key7": "45uQou8SWYUX5yzp4huPDhUJyaNoTDVNeERhH5s4EjA4aCBJVFGovgHHEHw3Y6s7Zbh4BTo5VFuZ5HK7TfBNCQcP",
  "key8": "2HKkRshBM2HQz5cRa9Vkf1o6EgBkFhvT5J89revkvUj4rxZvBD4qZ7SvXoh6GM51vDxB5td8vaJ4pn9HM6XnnPEE",
  "key9": "JvvVYTLCJa89KGhDwVuhMo9AibF7EkvrLCW1Gt91utmHzoeYP3FjQs5YtNuN4hwET1cow21A1Nxxg39S6VZWnvo",
  "key10": "57xTAsUu3e5aYyKKh3jkQvVZs9FdJNQ7uE1xPHg72iUYvRxiP99LvBjkeqrFsLkjzVJth2FwwWBrqmiNKNRL9sJ5",
  "key11": "i9hWLdyYqhyCRFCtGZQHmPstEcCYrtntxQqYva44WYWhEv223XzWemttoycSnYgRMgAEm2SciZKandRHSKW3QF1",
  "key12": "2CP3jVwqf8ExcB27kEEQhGAf3mFEPUagrrmzz3JgXQD7m91KK95hwnDvNjZj7QqLtTi1Nm2WY1gTyx6cgEN2GU6o",
  "key13": "44vqL9T3iTuRvqyhHjte1Q4eEKdMZZbi3GVPts3TXwJt7p1y3Bz6MuNQEyiYyh5o15mSdYb1r9xWhmoxD1EKQWoZ",
  "key14": "31T7gkZTnsxLnm4V7n5XztudjbAx7oNq2g92Sp32g2vCgnDNH9maHGsRqkvXPcKyM4KJmj4XSRv1BxP2mTxtTd7Z",
  "key15": "2BaymTV2sfV64g3Ber3SNow5LPCSE7uTLa2HuuLge8B9k5HLVU8WnVc2KjBNA1nmL3Ej25hsHTFMpsPvmV7iT9g9",
  "key16": "5S2NmEvQPwPvEnHsSFF9jsv8vLjwnJ8GeHRzz3stVnV1bb6EXzSoBwF4AwmiZxuDUbEmCVQhi84BLjDGRWR4nGVJ",
  "key17": "57LKRfDuVytpFabVGcsy9L7RpKEeFbA9VuS3TXVB7vT5Jb7i6tgxT5xFeL14a4Zza9ZowFhKaRPCfvkDhjKqA6nv",
  "key18": "3cFKU3eaCWfw6bZoYL5iPjb6sivhqUjk8GpA923T7kBuWEqEv8kBMVi1HgH9iCtNXHXwksKcA6HoiWE71ztVgJWz",
  "key19": "3QyAkEnwTpAdKfz1J2Z6k2wAx5M5eeF3y6SqaQD32wb6qR2wbMpghLbNJQdnwUGEVuSzLpJhzNnapBhLC8rdRCow",
  "key20": "5pxd62FKLEwH4owQoTCt8ZtM68B4LW6DBLfiQh3tw9pEEesA9eGwGGGqKontEpSWJYaatcjhs9q2fjkkEWAp874c",
  "key21": "3ApHeyNvLcH4WRzRztumcbvSkWKvaLinEMcXa9nhKYBSRd5KSjAo4WWcdNu6RN5qM4HfptBLxCLwC23V9NARE2xT",
  "key22": "3FHmhFFLB55j9ztLQymWaErNPXUXAm82wvQJSG9C1BKMe7HDnDwpQ9TPthF1aLN6v7oFLHS9DqpsM2a9FScA6YrY",
  "key23": "22eESU9o473s3K1hsQ2rLCju56nexDJjq9vrf5SBAcnDmFdfgnP2abMkrQ6GUAdpA3VpYKrGpiGubkqB75VGazmM",
  "key24": "voV5iyV8tVkDFiZkhuRvunZfA9STFcpbyUozURo37C3Pa78Wbkszy2g35wiK5owMT3PRfwEaUu9J2sgwuUUtALA",
  "key25": "45n1wy2dcPi8KHnGAcu92ajNGLks9UoP7ejwmk9exuqfQ5217vE4GkyGEcBwwmdBrATiPqu2Np9X7Qqavkvuybwi",
  "key26": "bp7Z7TJTi5Jwg5QtvNfp1mNgT9Dc3uZUcUgMcudTJjtS54oYzsUR9R26BXX6NBUj1yE39DExfiC9wvmuUDUU96P",
  "key27": "A8b1YSnmgvHdk2YreK34U7sMYvRXvnZGEDs9R7kGtd4u4hLQCMmG8kuF1WDL5hSFQEKgX7Uq5SUeErRUxnVaqr5",
  "key28": "4itPjkbxjVUK5PfAnwjBWLn3Cfktv5rt2MQ67kCnmhS93FZanYrtS13epRJKdXhUiYqw7nhmSSTBLdmyXmUs1omZ",
  "key29": "2oX3nscqhJiV8N6HtRh4q6hhBRQTCWNDnGMS2kQSzQsYGbqGP4YTUKB6ydAHKF4G3Qspy2D2f3vnNZ5zH9G35oHo",
  "key30": "2UAUZjWVNaamRK6tGbD16Y9a38Z7emRPUnurczUZ1MR3hujK4L2GRUKiVXH1L2QX2mZVZG9KQpPYVjGF2aP6EGZt",
  "key31": "3G4Gs8gNYbicjCoCCH7EqbBvrWNtMGw3ond1YJfgAHi8mpvAsTEk4qaLzya4KxcbpAh2sKyaXQbpUYRKHcwFtTUc",
  "key32": "ZShcQXBLmwWUBRw6vbFETa4Snt1fhF6h5VKLaa1HW8qEpTP33A4YuyjCQJ9tnER7hgzfiX5FW5u1z1BGUuiinZa",
  "key33": "4VDi7rAwHfhtPvTchdiKE2tGrQ8BzFe1NtBv4ZB3S5Q8GicgFeGEUxKLqbvnK9PorbZ8f6fZKEYteF1E8gWnWZBV",
  "key34": "3aF14372oJifwg1Tgm2dM47hPcsV6WZGyBiZCWZqLb9AL6wXxBUKAoStsAHiRH6oDBEQpzhxx8JTqmvvSrHorH8h",
  "key35": "4XMau9fnx6vuoWgZyDstQsBxhDcisVeApHvbtGjqEspnDkGHJgcewKjrzBwMTiKo7Ks4HUDa9z1M9VmubdFEFBth",
  "key36": "2sgawPafRJQyQ1KndYjGsu7HTmUjMweXAcGBC68brputGdDJcqzbkyMFc3Md3fbkcva3q6VjuqEFTMcLYXPSi7Ak",
  "key37": "3vPiq4ND1btfNSfMgxH7UZYw6HaY3Hnv8but6tUHYLmXzk8Mbzp4ZDfhQk7qgrX6eBqccNBDf6MjgToNhrfNqCn2",
  "key38": "4Ec9vQuwR4GiWiemcGDdNEjLSCofvtVP13LkABgtYJsREsEs9gBdzncLzW5xd4aEBvW2EQPdB1pVYajy5SZ92ruQ",
  "key39": "JS4pWtvTYp8yKkh5iaH1Uhh49SbyaSdh2JaySiPJRVEtTSBfvQChS1QbdQTodApxz1hwAHNmSYCFHBxD9mic4nZ",
  "key40": "62Vh1z3q3Y3KL3iuoRx8UWjxA485pM4NraUWKB2utHyb3rsqiR8P3YnXriR2vhZVQ6Y7fBKLH3jYHChP1H14roTA",
  "key41": "4GNUk4iUxicYzFRPFjnN9iot1vjSXVBYefE12hAPuiw14ApAQb6PnWG9NbiynMm6BJCU458ULAm6JWNhMzB2Uoau",
  "key42": "2WRXMxo7UNMKMFX3cHA5F4Haj5eb87j8Vk1xRE16eanbcvpA674gkuVzorQudEognG18Cy8ANYfHgakJaZx8ycno",
  "key43": "3X2owDfwqC5YyXupk79w5GDwkMCZHhix52kbgcNPiiAxC5b5hejPu4scG4mTCG2GXGZ4UUwLYWnjp9YMjFYVagoc",
  "key44": "2p7Po63Tmfg8qoCUdsX5V2cKwPWebx3r3RBFb2n4LeWPANad2tfzAjBJ7ApJTtV7Q7njWPaBA7BsEXLCeHYXRFzd",
  "key45": "4pEzQndfT1QYh74ViQAWKzKvBE2RVtps3384c8852et9GxCQTg6gL1rntfqWrr6C5nMgVnZWPdgak4Mza6Jpovik"
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
