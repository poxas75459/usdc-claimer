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
    "cw8tZLdZPhgupywV4dyw32CBCjvkrQHp1aJXu34xJjmedtvxKE9u4vrCcV6ppNZUYQnriJiXufQd6n4iDJXKkpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfKT9RrbEewu6qxxa595yCJHosMsAgBJQqBMCAeoRwYgrvfCPqhc2Cwf7pAjJjL3xSmhnVnviauxcimdyiZMWez",
  "key1": "5WGXF8Kn5PLoJKPCQZ1yXjv1XtdxUCbPiPaE5BLJsU629e1nrH6gXqmNoMURQSB94aJ9g8kSunoVvUNqQg9pwJvR",
  "key2": "XePCxiSKi3Y9z7XQYcPwU24oLX1nkBT2QGhCuBfSp4k5MF1mubyriEhBLKj6opoUp7MZB7BxfcxijXZvihQbSDa",
  "key3": "2oUrgcL7cuinEkGuK2RJ4jhtJuZf32VDzZQrPRisyWCLJFRv6BUD1zkeD3DeE4kqfDUAMopUJr1vP5iXxoze2pBb",
  "key4": "3mubyiQn2oygjYM7ACGdqCy8uR5hcahwTkN5d9DTrkjgYbg4Fsj9bBHLmoNymsKHHmCDzKWbWqkv5WkgPD94Tz3g",
  "key5": "4T5RzQZj5zpxfY7DVkfnvJJp1dDajJkaK4fuU2NStijVmEeV1qpvfyQJe2G4X5k8MpnowSPy5stgVHgP8ARDJNMp",
  "key6": "3Vbwzf9mrZFnyir1HiYthYZUDyjN7zEzbQqdAjKg6AZv87kNPnZ6wtfJfdD8Cy2MJqMhz4So22EP5eYiuPKKpAzZ",
  "key7": "4QSb1m5eHSFnvbsD5kWn89GDWHS2WdNrh2P5eKJsZHTuQES8NKXJcPuLvVCYLC2KMt6LWvqyGGaFVH9eTf2ZFxnc",
  "key8": "gw4R9wnoKN88C5ySWpbJNzrPVmyyAHFKGH8wDRxK7shVPWwZZgzkesfmzQTHXDy21dqSFQpJnpRQEnK6YtHuT5F",
  "key9": "aVuMqG6fg5zbJSM9WxkEqvFcfSeArYCA2ywpc8UKF4V7phdajxVNdXT3uhvuiRt2PLjLMaEZ5uNwHTdYGoqHq7G",
  "key10": "5irDRyjCEanb1xLSB3JdtNYYsSiJWzcN9rZtckduvYniPwuVUHup6WcQbAqanaN67EaQxNpEgzJ5PWZ6ARvYTgoa",
  "key11": "oVdzDCxESTh1xY3urdYnehEbyDTaXgYff28msXKAWrwVpCPHSTWqcuADY6tLZAm2g9fY2KqUQRvhdQ71xUJZEFR",
  "key12": "2doWqqmTNQm5bzZJ4Q56oyC1FVBcLt9wG1NfUtAKe2Rhi4bZ4mZhmBo7m7n3T9gRL4YbAHT8MRuJKg7zcjK6cYiB",
  "key13": "3pjsXFFqPXp9UjTF1g5K5KVAWh5eYMj9gPBigv5Q9fs9kyzadB9RqvHcCDRv3KGKKysngB25RcWMHpaoNCPT8Qad",
  "key14": "4yUGoXCCTkmD22fHms6WgY9PsZmR6XFR5iLgdpDVpDBwJXbqqfFnSENNWHsZ6k2CZPT8Y33tVQbHa1tQwBKiZyzL",
  "key15": "3adn9gbZUa3Gg4kAKbzf7j3BTaYbwQWbHSjCVfmXbNBNNRHgbm1bMbsBGT67sitg9HGunY6QS13m4LWM1EWfuY1R",
  "key16": "375iFDrRd9Fvju2N3t89XpBY3RqzoYp8bMnCrDM42mDeGPRfWHwoozyaY74EKDYgQPXU9ux7grDep6vypS4JL9rT",
  "key17": "xQgYghBoBmLZ5EduKgG8niyN1zoxnebHQYePxWsa7hNGCbEkA26LAZD4asCiHGxvmvJrpY6f2DgrCrqz9r64pAi",
  "key18": "kGDBM3syHzHWGRgtzjvpGSdeYTSTDws9CbCqnKSYQkBnFp1Q4Bxnt9e7wh8rsx3AVDNbkFSWtjZ3zmHsFsJaRA4",
  "key19": "2E7ZrRwVoyzvAsEV6RtmjUF3tbEYz4C3AZRCBNLhRh9PceJuvnAm4GPk36jJdxN1vBuCR4h6xTdf1i6RBFi1h7CL",
  "key20": "9nwYQKDLvhgz8kXnGJRjFvXkmtQbBmTPnQjRHYFTyaCtrqYHwGUqk4skkkmZ4aZMhW8mgipLCErSvUXdsKn5GnP",
  "key21": "5WyECPy3QQ3CqgciQTGchBqrEj1TWjmaeuRyVSgY5C2X6ZzBShv5VWhZkamgDsZk6bxaDQR2wT1AyT1oqPiDA8rz",
  "key22": "386eS7gAZV9gyyLHUFJMsLD9oLJVbkpSCq2DMf7nYbph43jczfAGnxP5a4xNA6U2Q1xCcfTBKaauMaRXVcB1ekeM",
  "key23": "3ZncvsJikxb9rNDt8qZxRCTHfjiwK2i4dE7G7uJEvV9woCpjH4pCMsy887AqwT5tKHNBPjoCXv8wwt3uxbHtPsoZ",
  "key24": "43Ch9617nzQtxn91rprJ3KM6ns3DQkjAw3ijmMnCbvLdPGV1Xyfsykjg2Vai63Asrp5DtWZCMmMiX1Z9sn3hzBVx",
  "key25": "5nz5N8sr9XYGfQm6YtsiSYtiaAmdjvY64HkrygPFTQB1ZXdBCEuzNGEmcQQTPntisRaJ3JVSpvPo3aqXovgSRvRi",
  "key26": "2eeYmke8DUzGavDFTu78hagKHpYZmShrrkqnS42CRXVmTjU3JQ6MHdBW2pzoPaQYeQdoaVWWqUj5HByqiZPktLwm",
  "key27": "2Roa6KdKHzqv6ZRxYLEvezwkbvhs7F2uoGd1yaNmmhb77pRhmJoM6hW4pLRELu89YL6bg13vNEXjrHjJ8AjQtgbF",
  "key28": "2TNfTxumcdGZSxgfESyFCMNcE33WxwNZXz2g78w9omFHCdzFiM6c6Li9qyNwEgAbzL7cGmf2q5zmtrZvhfaoCXkZ",
  "key29": "5JQYCYcovjjvWuhN9ctb9TRyFSu5GntFXrRMUvFYehaYxRJdzbqWkUog7y9kHucjK11wF5FWSqYV58Npa1b8xJu6",
  "key30": "2gZaMXcKjmbi2Khm3S7XiMuuwBpeSeSUJKRbZ1jsdnQXjnk5J4CPSKxVpMk8G5jmRMqgqickb3MLwNCGMR7SbAAx",
  "key31": "pQeL9d1bAxYqUNcaDw65uG9GonqTLxHVcmuQyoQM5ULY3H7MVPe2xbaaB8jVPtKok3LChw1ddXJPwqLFEQBMKgM",
  "key32": "3iLMVkw8vn2jw1YR8pnsUVZPN1FLksFC3VmXUJEtFTPWRFxPxiUmmTY1JNpSf7nfAs5K2JLEZdaADgDGEmbQUR1A",
  "key33": "z6jZR8mHe4xpLtyGD5uTyBYaZwsoGbFSQQhCY9JWx7aByvi3A1FUCuwwJwxD2GouDx4G1Wkrn5UkxiNaMaJEzku",
  "key34": "4Bdgpn4KgFnwPN1zr3uPk8Qiyi9iBFycqpv8h39jW6UDWX8WbJQy5jMsznZqVdZgCcnk9HQTo7e6cspiNnc5HwRv",
  "key35": "46YC9TZpt9G3hsWkZH4NVB4AKrdFg9G4y1TY1KNgk7qLVoeRECeKvMmMfbooE4da8DH1hxzLNPsAvDSNMVzKK6X3",
  "key36": "in3APFToHTJ51Zt6HbMzHZNPGeBk5ULfNyQonFoKi2PQ4eP6HFcRLPoVievCpMpFCS3WBfaReomHQEkH9w9tthK",
  "key37": "26xx4or4VmpfqvKVqQokzheT7fT59RM7D5yHT2YMRGiTqoivH4vzc1ucC5VvFiSVyzq9cCPv5SgyLjwXjsVBZDzN",
  "key38": "5fuVffcPvrQpWhV1vRhdVWLP93FeuZeVRjdRyr1httCpaViYiubxwuLsx517bTiymhd1J3jLkHhPrB2ZMFa2T4M2",
  "key39": "5ZDq8VT2MVc8nMs3FY8g4uEybnMsbuBeyWP94QMXnErVDggYwuHsVYGUSpom4BGWDisRZrLaEovgPNzDppmVMR8e",
  "key40": "4dzzGUCgUmrVJDpjqwRMxaj5NYiePfzqxoqsTk5KiQLu2H1W7hpdeQMz1ohh9sVpK4YWumo5BqE93DyRAaHizdKF",
  "key41": "5FZXitxpgs45u5tdKZNSrq3YM1KVhLty2rKG8PqnzwTFFUu2mMM4Br3KsUZArTr7NoJFKM9AemsARjZyjLG63pjp",
  "key42": "HAu1qgvRhcLradf4xug7fmHexkge7t6m72s2yMYxGGq7Cd825MeCEUkJsi3SVgmW6goBqdmzigfHoUyt8KC3g4P",
  "key43": "22oLtAYBJ59hcyN9WxzezXMM9S9VcfkpynxbLyKpB7FyLVjXH3kfuW7hEw4dLBz8zJqpuPFYBdqVXUCKmYzXzwgx",
  "key44": "22QPpo9xsrbRRghF9ivZta2u8CnzY7Z6fFEFPcex15SHB8sQQoT4fSCJpKgPdvGw7fn9MobE73r5XiD79Lz6UJun",
  "key45": "5ZL4n1k6TxZkqHCmQBELcrK8finyyHPn9cjiN35tgbjZUSHQnLEoHGZNhjBPtJmRvvWRCyhXnf6ugQoHLEJnU2qQ",
  "key46": "FPusEtNZaMw9GdnohvMwQRkCVGKsu1p6yRgqR48jgSsgE8zTfm3aKh4eT89xKBnVg3yHi9wcXwpp5ATk28TNyNf",
  "key47": "4n1UskNkphmg4KuFzDNgrd88opQQvE4mbEyB4dptWm37E1n5fUgyj8CbU2rDgxVE9CAyUAABrDiALaJNiR1binVi",
  "key48": "gKc8ksCF67kRDNhynrXjGUtUzCX8Eh12Mudzy6ZGh1T5Cu4XF8zDW578c5RBwPSsZYpk3fhtQSX3X1WG3mDuxyb",
  "key49": "2BSBUUJVDgF3upS9hfY725Ni9J671YonVJWqk7G32ZrnCDCo5cJzAStriZi54mt7uAoe4EBBridL9w8DbULbFe6c"
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
