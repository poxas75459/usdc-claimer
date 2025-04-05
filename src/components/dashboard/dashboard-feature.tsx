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
    "4E3k1xFanM9wJ7fatp8125LTbvYyWcHM3oK9YyQBAo91ah82N3L5M6DQ6jCeDHXjC8dEcd7HeepH3zHw4pdKRBTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSLR7hz3jL1krDSZiXvrNv551nkciHdbmQ2GSQjZG3exWLjrKMGaLWste3FsxiPmE3KrvebXBNurFNYAhwokjuz",
  "key1": "3uFhmfW8MzzNJQMk3NourJ8AMZDevrdmm9Vjn4ZQEvEZ1VrF4PSrdfSkjxmUytKW5QXF1TLqpQsUpE5v2AdDSpm5",
  "key2": "2K7PkufoZ1CwGqFqEjgWBfNGfMFLWuhaz7CmrT6zaFLaX6dXf1sHmR8uwtDdBJcGvbKFYPKeNDKd1P7o6Nvfhg5V",
  "key3": "22ibKnVd7gAaMHxtnmQFfN2qhMpNxkg2c515FMWhGVLYrxnksucRd3qmXykxXaXhjHdTSS2w19zgkBcvHyti5eSj",
  "key4": "5c8yku5ZG3YKJFeBVTqtP5FYrYVn6BFwoHaYdtYzLGrsyjP5KmXXKpp3RGt1KvebCaParZzHL114Btxmtek6E1yo",
  "key5": "4MuQY2GZqzojFZMKhnHCH8z3jRjANHZwXwdV2ckHRRXuGsiDEX4eZX5cJXKmv7LQjogKRaPHQBkhWRP7byLFnXG4",
  "key6": "575rV9cSN1Cd3iEunzUjrc47a1AHSsYUfTRAbnHRsJPrtzUQCB4yaJRoAsixcf8Dnarp3ytDFqbDKWjAgGsvt8nL",
  "key7": "5zJtFqys46iW6vmBy9p4ZN7bBHm6jKYmK8u89JDCs2DHuPVDBHCBEpYJJhaXuUFZ13Loap3DrypRVoidgsRjANrP",
  "key8": "35uuauCS1Lb791VZCnLFz9e9zZcXzcfR2zKLsm8dDXBDjwBXjjedjivdeey9ZiupyipECXPDR4F44iTpT8z9RRAQ",
  "key9": "522Z5XCW249xNnWHu5tjaAMCXoW7nZsbUCro2i2k2ErihXQbcudR71r8Hn5PXhERCKMzu62PZYy2t5nLLthRE84R",
  "key10": "QZat99pV98cbkSraGWcES4qsejnQPn4SWjvvMbHXumwq5TNwASStVxa3sAfzHoujjDJEFmuRbADgj73L5s8UrnV",
  "key11": "3QmJVVMdNpFKK2NCsomTdvhWBLuy9esFQjUAjYUd5qgStBeycAZmZiEBBfcQhzr7N5h75XZiuc3CtVstFesbd7UM",
  "key12": "3iunSiyzD9MeihHQdiiYTVqmqT7kcUf4chL9cwFx8d5vt2Zg5XeEpGeVFws3yr8t1LUm9FtGZRCPEC2gp2wB6sxK",
  "key13": "2JjiWkGSSCPPtEa73Hk7QLLM4E6e5rZGTHXZo9CFDB7sANDdDgHZMkdbwCYR2gSorDjLKwRV8QyXkvqzxTdzAMEv",
  "key14": "24hfpUtFp9xinL9qBh9SAE7pv3hPPL2XB8X8ka4S29Ei6kyDQBcDxXHSf4A8p1FbE3xQATQyQUeg1MQHhn3x9hxc",
  "key15": "3Sankytm1GDEdDfwNUZeoPE47LpRvpaRmVV6h9uYnisFpCc3rL44YKJJSFU67ZCDLnpWkrtWpF9s2Q2Fd5f31ekG",
  "key16": "5RoVLLoWgNEG1AwhgFQ3Hv83PX1qmkpfuMhT4newUqkubTBmQfe8nQjyTevFtmfGUNgXRBGg61XqvTh8wKCzYYTe",
  "key17": "3tGBaMMfBsWMd4Lw5D93v926gNNo9g7dLQcnJsW113vDcBGyi3eZYSJ89C3EFvkZN6ut118WNB7WVTqe38Hd3S4E",
  "key18": "Pv1Ruhy1aFc9AGvEK58JnmP4PRa27T1W67ZmC7ELnHDGGdmw7uVgfRaSriAEpzWNMVwDA7VYRvvtGCEqobaeMsG",
  "key19": "2iEhas8CCQXiFTpEFZzLhkeCE2RYFjdmBEtwRhcJA159B9KgErx3pie8C6XBx6GWa6kCapbwGcL9XAAmBiTBZbEw",
  "key20": "7y9aTK2n9y1YVEnTzg2pTp5TkWFEZvSbgxWxKKyVCaWTmdSYWd8XVgvUHhT1J1FfB3ZNjNcLrZgfSD4tr3yZN2Y",
  "key21": "4VsruWEB25vRJjWLA7S4LikrkHkD4UbzitEbaQERFm3Cd7f2C8sFVQufKwsZmJN9v5GkGE9CHKKGcoFdUk5bzXEh",
  "key22": "2NqZPsDTaiaqLJwTK7sXAV5E9MZ8TYykiGHXcAwRfFGUDE6ZKQwK6ygKtdMdyfjL25BuvKEDAhZ1TCW7dEpW7C4n",
  "key23": "4oFaBDT3fFi7f6iritTz471YzBmkdH2VatbmjbmErGdk6UQs52QioSLcvyUjSTusK83FAQtoCDhx6chumRKXD5AN",
  "key24": "4twHwdXi4jT15j6DRUaDvDQz8ohH4TrpMnGrAxcuCgZcwKFS3SNJfGeQtwFdEKaCG5FB2EBtG78sU8EBprKyecZ6",
  "key25": "62KMBNz9WstynN1Ycw2fWrSYdqKK6LAAEXem6Nkfcd6QGdpfHQFokKREBLRvr5Kd9hxVF5uVJ2WqvDoiAKWHQ8is",
  "key26": "63Wt5QyBzpUoJgV6NaAyHDCubUP7F1pSTtjsFZ4Xx1dB1XkELUN7FZNhLHEadDg4KH4qAhNvCBydKMsjEoX8CNBQ",
  "key27": "32vCL9BkySBA8jisCiBw3aPPRVaecKTedBkZmSv3ANGzod1h4gXGVPr9dvSn2hPsa9NEH9Faq3J4bAj3yimMLpZH",
  "key28": "3YSmVSDXwBa21VfKT4b6SaWuAyHYRto1N5y65GExro7KaDVQxygPSBkXgJ5m4ftRZ4J62YixC7oCgBDjySRjGy2L",
  "key29": "5m71CB55ZhTTBc4pifG4o3KyQ82D7pbXFY4upJeEF6ykkFvSy5zQUApHBQQbPaAAXxCtgdEJV5F15P8NapKBW8Q8",
  "key30": "27RRgCGJ4NE6MwFRjoEfjwXRkDgGZfRiziWbFM6VvNgoewuseaBr6Q4kQGM4FzKzNmmG4NryMvMtVB9EHWuQVs5t",
  "key31": "4kEogzcGXTq9no5FrB9FFnnyAkqp1ioSZ1TFK8jzUYD2eaYMoBSeDJ14MXpjerceFcXjKbc98xi6HMHFA7Fi4BoJ",
  "key32": "3MUPBW7gbvieL1tHW8qWDbQoVYPH8mGcYeH4GLCkemgMhmc9XCtGeUmVy9T7rBWrq8RXtB3iaDHFSiqEDmwfeMpU",
  "key33": "aNEjWREfoD73puUFa2Hmze4ob5ofxsruk59w5DXTF1xqFSjJMqC4NKVTnbF4V2dsUwAg397p8ojihfuGJzoUHQE",
  "key34": "5DnfcrU1KsTHqdUJmctTA49RRZScdAuQpWbutHLPe5T5zrq6M33vk8VEmHzjZYWo3L9gTnHHBqYKzHNKKR6o18RQ",
  "key35": "3avmabh2iPsjmM6qXVVr9yhaFc9MqJBLX4sXAmHr1MmDVkH7zjmYM5fxYsfFWPuhrjbGCgPveEdmwbUFyqMteY4T",
  "key36": "4JZPCtZbiTs2kEzSbNcebYakX677kANE3nbpWFJerzXFGcs3quSgffvzvBBXNJXcJqVtmDzB1EZdqVDzQcuzju23",
  "key37": "2FeNDp178qjx4XPw11N7HwCrBNWQKd8gWZTNJiVkNsdFbSrJXXwHA5CUzTidMX7rsuYCuHR4VmxYEKyp4HBRqNG9",
  "key38": "3KnEgC3jgXFoZaM5opR3gk9UGoJBdYtde4HTAXhcNH68ViMU9DSFHM4jG9epyWnXwU2QrjBry1y9TVnd71Y6C9Pd",
  "key39": "3xtT69XUBekwhVZNd4YXBsCooZS2FxvmyRZBmBmtu9bBo1gRFMWFQJJMJuxwMFoWnhPGddWpv1w8EcZ6cAzywcBh",
  "key40": "65siUYQdYPS6PkmaQqn8Hj8A9NXMnFf5GNsso7KSRERzD9sF2hb5rTfPXoCwnE1GhamFw6MNrFQkQQf2EfzoYzMM",
  "key41": "4LFD7aEvFG3fGJ9pDa6b7TEiYzLBWApcKRyr18GmVgWAfnEwzn7eMLHsEWiEPFtoGvs8ztMU8FmRqNfmLWpg5Lkz",
  "key42": "49SGgMgBQuzRZXe6ahAKj8Ez7Jzu1pMTjAD4tnNXpRmQFuBHPzeAkxd93Eymdn1VQXWy8vc674DibTC9qXGbuF4F",
  "key43": "2qHbHdH5LeA5bpHTvvbZUHz8rFX5HShBWZetcrBF4ZgRCpX6vfEUhR6EPgXq6ZupnWS5YxC1XM4DQdV2cBP7rBe2",
  "key44": "5g7PNKAVgs3NtLMjtYpST125fXwQsUJZY6DiTCkxoDmYcQfMn13nLkNX4VbfVcCabMi2RbYinz529ktehxoNyQYF",
  "key45": "2JozGvbfSLtpXmX4iUdHg6XxqtS9Pm9XbQjLe6dCSDRv7Gzhed5iKp2XcyDDtw3LQ4ezhqMFwrmVpALw4pVDKdst",
  "key46": "4YxuzbaW6kCAfLCnm3DeaXVJVt9kgLBmwzioGrPpgXRrxZTzCfQN6m3uy3JJu5CARoX2MVMdK4XiRi7gQvTCdGLB",
  "key47": "49vWqxm5hz55MJpMcpXmFLofJ4wcoTDkcpJpYqG3Tje76TeFA6jmAt6JCXXxbDEkLbXURs7z85RJF8G79jgkMu57",
  "key48": "317r6AJHqHzGhRkFZ5sXaS1p8BKjnCwePZxrQ6T5hncZZPBuu3gSFA9KKgjjwrwhvQCPrMVuzKnrYwgRxBv8sXHS",
  "key49": "2K17jp99gti1A9em3N9aEPPeGwDu2M87j7xtVyGRG7JxuVPjYULytpdMmiWPXnid4sZ9M8Jr1xmxHb4qYMxUCNQS"
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
