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
    "5S5FHmj11F2p6jZCUBGNaSSsxQokABBRyhthayHD9MoUxXpGXEj8M8B1UFKAaaR1ENjoewoPDSSbxucjiG97QcfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrW15Q7o7AfeudtWsQwRhGhy2ZRN5SvdEyb6y9ZcAGNyR6kamgN1iAVBSvUvfJV7c6EzduacTyXveb8pQCCxdsQ",
  "key1": "27tmjm7T3Y3xnto9ACQpH2SxETBFfooQCTPja1dxD5EPyoViQdh5LCLW9TagdGqenXmYJz4YiaHyfNBcuwtSibgN",
  "key2": "dsSMY7ZtCeJedzh1zVg7C7NUghnb9BpjY6eSuTUis9PCNmMceum3YhEfoocrWLbVs2fUpLXWV3WKnNgV69yvqk3",
  "key3": "49uca3sVrhXwiRdC197SS2jWkAYWvA5nscyB7nuqt5a66C7VTTch1X3a5VGPxrxpiwTnb3gFMea6P3s5DNswH1pt",
  "key4": "2SQr2zZemAx1wXW4Lsvq7Hog6cx469LxPLfV8rRmge2WPmCsajaQ9pgWZSkjyDimAQmqG9oaRhVZrLRF1c2em1Xm",
  "key5": "31oHtYyeizve7oXWmo7wSk7g3V2e6wrhVVvGgG8gVmK8d6tmhHmXbPJ3EZyvZ2byvnqiiUS29RXL4zS7RNfaG4Bg",
  "key6": "3VRDj2RGCkeMMM7k31yYnWteDuNCoVqU6QF91inGbXhGxQ2y6DfAcabzbQThxRe7whZUBf5qLT7yEtC8Mv47E6wZ",
  "key7": "2sbwmS98CM2r6y7w7tn8MJUQDFyn9HQnCJU53mCQ9ZB7VGG8NVhqjt5jfELdhgWV4uX99exn9wEV2YBxpZkqrk3H",
  "key8": "4iN9bsEcBpTLQpP1f7FhCdAHQexTQxFP3sbksQjogbvPLsPVnoUSRKiPuC92stmiRWYntvEBaYGvY2ccUbpzPHR9",
  "key9": "2oiwucaySPRY8fVwuR2gF3HJJ2GYeZQYHaoWqv1BDsvHymi1FFJF3CV3Q6NKVYhaWxaGZbKGmkhRaZTYbDd48Hu4",
  "key10": "KZdjGTaM2G45j2v1PxYUJbuCBJNkoZPjNHezR4eeXYNCXq5cJ9TLC4xEuuRcWQLrzjGgkGeGSh62a5HstACUs4x",
  "key11": "3UsqoA48dgYFvMcaDWhU28kH7aYHMLkmkEDnbeLtxSwERPWMgNiEHd8ug5mtd1phhnifdmRjnRrLdgcxXmD9N5bn",
  "key12": "2yvJJwJc2YiTad9pHFPvGUsFcMaYgK4gviBNqHsCEQ7rqZKi3P6EJzv2nXULnuKt32Gg2Q6m1HPvU2LXp9pbajf6",
  "key13": "35ueaifbUAQP4gUFECG37pfktZvmtZ6WQKmRgZqMig21gFaXtPaDjRYCUEZ1ARqhoDzA6NAwxDVUperwaheewJxK",
  "key14": "3JjwwzsMVvfFbdQV7i3gVg19bf47Jz1MXZCyd9NnT6HiKiGdX5BZcLBbqaYPSvF2yBPfpZvFFuhZxU9Bm7Jfs2fJ",
  "key15": "5sMr2WzZQCRwqPLzBjcVhrECYZtLNdnBPAJ7tWXrZbrpBYNZwbENuv7sRbAtCYYAAtWhhnzpdygMkVVFYK8aj7JK",
  "key16": "4fpSREYMrCKv82XBWLp3taB9ue5Rypu9MDKz13rUEbusRgyiR9ygRWZ3rBDKHM3bsm6MwzRU5orCSmLQXzvoVnYR",
  "key17": "2DND9mSPRQ7FSrSWCZZHGiJyUvSZhakxj3R1MVQvpXppcp3FLMoeEF9UFktGq6veXKzLGyPkJJGh6SzVHmMndKRp",
  "key18": "3GAowsbW1dLUiWD14X2suYZBAt8pet8LwPZ6yG7uzPJRX3bGH4rqccbZAvBzXSzRBC9ppyLLu8d3T8qhBmwAFzf5",
  "key19": "5kLM6yYerhn8tGhG6mbQdRebDYgsFd6BCQdp1PgD24yVt3bgAGEGYkBuDgv4LJ5BSSKNZKAd6yEEPs5Zkx1ymbVM",
  "key20": "4HnB6rje7kg7WZhP3vMc1CVGyqZwGMW8bR4q5EgzLnTJejiNAWVVcoU7nZyxwTE7C4Uutp6jEGKCE5qaULZKBmir",
  "key21": "47517hao4noZfqijH3jL22Cs6wcRNXu4d91L4ftb8bDaMC8iM4ER2WiDKbSM5bb2ddyXfG3suFum6x7gx7QSLsCd",
  "key22": "W5rWDoVDk9BaYWZxzNELZTepGnYj87oUWPMuhFAJGTLndWN7NdT21mF8Mw8ntfZR9kUQrLo1DTegXQgPkipLYQR",
  "key23": "97NyxhLPUQXmfSCN6PuVuDQ2SX6vfAU55wBNvx8TjW5Vw9aicc4YW1cmC9EwiYF1Zq6oDWXzahrNZK4odtSarv3",
  "key24": "4Bg6KSBu88SqZNE6vVRGud3ECoHG6yzacjfcnMckqLTFyfqv6vyQ64nvLkKzGFMamphRX3z7PgXAR7iBNocPgq2x",
  "key25": "3rH4UfBRuyq2fkyLtgbtyc8p5c3JPuvLGux7Tk4hqH4T3LCGxPUTteSaxmPX7PUXoyW3Tu24YvWaBYRsgmiNMAik",
  "key26": "3d8DMbd5BaibFAU2DLXPfxnT1E323CEX6Ubn5DcpgSD6dPLmdGwCreQ1rg6rVwubB3557q9UrMgHwNvZ1wJ9sDKX",
  "key27": "56sEA9ESWtBhA4Lpc1fTnBn7k1VQAUwcf5A8NdC66moi1qCiLuWSGjSRWJgXbvLquhAfU3iytjT7rc6njmWchtyb",
  "key28": "382QQatLDMMMEbeTEYLtWRmBetY21otsazkN9nvDdQPLyqsXKaLaDFo5TBWUMpwejNZab91HCUExn39Y48wJoRrz",
  "key29": "5NECGcZzXSJuttWF1CKLexc8ma7zFTUAfEcUEtz9QPzcUAWVPLy6AM9jNsCpxHZbYFZNbxoc7S6jy7ech2ob1KuE",
  "key30": "4kLW5mFCGW2rXPxmbfAVRroSw5mhn3ZpFJvKyEEgHKSZwNMcQgxBCyqUbExjoUgfgkKnw7o13h6nHxVTodsX8K9M",
  "key31": "5fkgcx8Si2w4tYaJB7nLo7eVJR6QwD49uwEEYZY9WjHCz985dhXFsaiTtMBhPsxYosPvv3zjArHiYmKsuRnGrvS6",
  "key32": "f9GPwuaAZXoc4FTDWGWEzaT2iXcXNcBru1GzLP6wAwszA75c1JVG4fH6bP4dVws6b977V6G46AuRMp34VXxJw9D",
  "key33": "5N96KJ42n1H7wDYntntGKJVxN64H5qvYusswg4GtGGoqTiT5i8aLPkedpq2efCGxYSmaNED4Jvxa4g24dAvJ1jW9",
  "key34": "3fgtTFJwrJeu3DqqEtVtoGtGUcmDCCWgh9kcadNDNrpMJqGUW71SmyXrQpVrWPCUaf38Ye5eULTf3X7776ZHspju",
  "key35": "5CRCAEZFHm3QymW1a3j2fb4ajKTkiSKhgV6gkSJbfRxhSK2pVRrJ56htZpE4DheVtANhHpRb8XWNt8yYr3ganGgN",
  "key36": "2sNqE4KoaGC6UkGxFpFARgKRX2yrsRJxZeDcSQGhnstWZb6MhWiC9N7k8rfxtbhvMYLsvYzKgGDzww8uQLnTJKaB",
  "key37": "4tKi1jy5wwiAXnMxREEuGncnqaTkwU8cZ77tr8t11wRnTzerLFt26uL6z61eCCQatRroSjKKjQ1Jd1HpHerDEHu9",
  "key38": "5cn4887RFmgA72NWtQ69CLa3BnM2SRmv5N24QxY6Md2YodLE4QSQJcQutUB5ANDBQeogvoe4avNBuVMM6KRqZbXp",
  "key39": "2PitN8dhV94rMTVC6UDVUdizmJsYsXav95uXf9RpiqphZqxENJVqUHwAR7NVw8J87yaNWK7wrETdVwFHE6AhUUDs",
  "key40": "4nFGYXPuMUzu1ULJxme5knmAvBo6VuzUNrpKHyxnpjhhtpWJxMhkzmauuwUXMSRQ7bhSWv3yQvfkiKgGGDpFmWyh",
  "key41": "24Nwbnyk6f4c1cA4FvQqioJDHRiKM5w6QqhHfMCeEPWs1z6KZYSyN8ZJvXZqhYCWFKZioFRMEwxBnvNJ22HGSstU",
  "key42": "42sfZLfdPjWexwHaqk6z81mA8BA9ZUWozkjWsFE5BacSCLVpZHyTpnRniVR8gfgzMeugTp1ystVAZZxwRXodZmhT",
  "key43": "3ky6Z9vpgPEo7Utwc4oAABa4erDm1tBSfdBgajnbJr5dgFUtWWd73gw9E7puNywxdiWkqh2LUdayq3WypMjN2Gbe"
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
