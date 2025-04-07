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
    "T4rQPU5odcoCf3DwVsHE2dYxeZvvpYB8zkwAmXCDDzs3iaLJRSkCCvvaZMyDt7ToaV3XFmKehVsZ59RMzsB8P51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xKoWh7mFcxxqgTJW9AKEvyY57xxqcdR3RgTHNKb8ww3f5QgRVBMNbVXocfh5WCbh7XXTZBeCGH7Mj6AH5H945nm",
  "key1": "2qtznzd4hZ9vReQgSdBezvkj4LgVtUzcQ9pRrgGpnccDHKwusemSK2c5hk4nFm6PRzEu3J4h8BMNg7cT4KB7DjCv",
  "key2": "P4LVJnzQxcrLHw6UZtqpNFwAe64UyAesW8qnKyYvSt7vPeKWpu8y7HqkR7jV5yBNxy1VrEeM8B4z6E9nr6z6SL5",
  "key3": "5552a5Ry3FSWJ5J3NuEYGg5qPKCSV2D3rp4QvqkcCNatV7AXEiqdQhE5jDdwe8uk63ewyD3arMBh4YBu5aetPU6e",
  "key4": "5qGc9wMtNhEDVGhKAsbjgo4idtwf18q96MG2wy5n7TwSLDyw27FJyxxmC2QPxq4rmGwxLvR3GfqXWN2sU5FNHBan",
  "key5": "2XheBA2Wxq2WV36PA6UXN99g5CBkr6AswQjoGUiPcasvJW5GrdkKEAbQ6urSSiBGKimCcFXzcsaXaZRsWmHbEwt9",
  "key6": "2Rp7wm9wHSjy893eKrPnyncfzPGjDjbALtzJhPy4nhgUbPAcz6wCoRtYMvHLfTyq9PU9Nwi12GbpjyAxZsqJvnNn",
  "key7": "tqA961vbbfcL9yaXss3thMp8n7nRto46zQZU4kqY2gz7gr6Z7XtMnNz2sTK6jqxUSgB1Qn4dCr86E4xr5k5sDdh",
  "key8": "4utA2CcV3hS1JaDDrTaL4yDiQMWAf3vLFHx3KpwFSxPa365V81ZpStucFzhiKDv4xbxWm5HwoteEk9fsRYXvBP5K",
  "key9": "3PGwoHMwn6hX9ff3i9gofPnhCvioxBMRQUoduqNcsZz8eZTDx4gFEb696uwYJ9zT2i9266QMZYkDB4h5TsvVAbrY",
  "key10": "5SngoMSiB6pbv2CWQmD44NnDKP1mR7DF6yKXpGgcNhGjG9K6R74scYTnpL8en9bqErdYMkHjnQtWfHNnGbETN45r",
  "key11": "HKkJ2LUS5RUy4XnPXeQB8rAxJQ93KS3T4bvDP2VUMDVz8umv19D93zo7ohj3LDfe4pUtiDnLyxS9p47vHHEmsKf",
  "key12": "4YmnJjQrTXzBfopsM62W1KYay2s5PxxkgRcZ8XJ5YM1sLXPxvQVb7Rk8GqrU9eCTwgmgyBzKAc9YYXGFXaY1T8wU",
  "key13": "2rRJhDSVgjnwcBM3vpJBYkpatfHZDqaDkwiesboc9ByfHBhpUvf8smNkCaouYCP6QGyJpinBVB2H1WadUZumf3Pw",
  "key14": "4AFZ8cdLf4zSGBdmUT9HwQXQcHswwVM6mf9WfWqNvejt9DFKS5w9rFfAWNGFkrbdWpMPBXZrkG4H9GmKmQkEvpRf",
  "key15": "xevfj32p2Y71V7J32qwveLrgc9BEoantxUUQX82dspcsXHX4RccQy2u394Uzgep6bsuAH1GEmNi3zoLJf5pbSfq",
  "key16": "5gY34juXr6g6pxG1hFooG9Hcxwzrz3X5GkT4BPjDLcewmVKSBncEjupZPbq1dLbzfcpZ6fCUVbnBPJ87m8eUzDZd",
  "key17": "5Locbjpt4HnQDnPAJNJBSAwscf12oUZXYuRiFJt89x2s1Kv33C9piYvyNHSPXSpWpEuceif6XFEF3AcidLeWnSZ3",
  "key18": "3x5whoEAJQ94Gpatc2fuTVKe2CwxjuzQnMe5KAfzm5Ys6G1yM2rw9MNXCpTpXJ2tfJQGTNxZ8GrGf6EqEuXQpHhb",
  "key19": "34Q4hcVv8z4NL4jjpmUmkbuKBYCNuxvofiQxNqayKiy4yKiECYDfUfbUJnkWVnm4RwYtb3xkJWnR5Etavj8MTtCC",
  "key20": "2msqbjLvxhy9AcY9gVj4A21DBptnhPpdmsgZZ8CeCRPxLX1UJLxrWKTRhrjhhdQhLMsSSLuQayqpVxJALbg3c16T",
  "key21": "4bLSy7R8Y8TamUxpezLA3y4sWFJr8BWkqyGtLrMYGuJ4GVMHKgk9oJAH4BcCNU6jLnogRuhaa6jUUUw7JZ4N7igQ",
  "key22": "4uNRAtz4KwJWfZqpeUTW4Xvm4nafKXNpQu9uDcMYpUFjmiQQLhYbN5YwDanyQoPHCfKMnLzxczk1gcern2dcwvZt",
  "key23": "5FWqSqMtu61EKuPm7iDVCuk4W91tuQRTveJvBYbmXzishDb6gcpXqtN493QANU51dxLRu3FNbgxSAjLU4pbJ2mhs",
  "key24": "KvQdjjoByFK78hrEF7hXVwjRnxymDgb1jwvfy77fQtu2vC6KmvzpvVB1akue8tqGgovuxzRXrcoqdkLsAuqtmf8",
  "key25": "23ZFrxsv7i1QLPX81wpUmZ7rETDCgVLMVNrKjVTi7w8YNLhky8FxaXc9eLs9CFF3CNKBLZHYXfs49FexNvkUB4F3",
  "key26": "x6wye9M5ouieiHncYXfq6gJMnDqe6AYDrPcm2qL3GH5DVKQQPrfW8KDYFj7a8wHQTDLPCYRWNE9Stq7mKndvsmV",
  "key27": "5TakX3NDByVkqQosDXnLiizwi2kY5gYrYtYhn4se8z2G9zwg5Ct2zMjWyRsLZGaChXh2p8wTf6PdENyCqdbjY7VR",
  "key28": "2xNGMNJXBQVzAUPXwrwxaB2BUaSfSNEpNVVzxnZkxgAdqe93e2BAVRDfNFaz8evMrax9CBpMDtX5cTUf5AJYfQ8G",
  "key29": "rL1q8YXfTShRbiarmoJsvSYQVNTpRnwy5JYzYPttRyn2hD7XaYvMRStYMGx1VfhcWToJMjfn6RCrx1nyKoCeZ7c",
  "key30": "7DETfF46PgmWyff9MwXzPGBBKAXQGjirNfAToFnoYLd5WJ3gsqJ1wPwFsPb3ctYwXJ7yCRZJWkWqfkQxcF6MH5F",
  "key31": "5Gjbh3RkKJ58RYishU6ARvNEQEXaRDVX3Eo5i1813diuCBaY5g1r2ySaPdbzGbKFFdMvYSFSgQUyzhPSGnjhmXGj",
  "key32": "3rfXdkNXXYtDaCn3EUGMfYv3DtaXcWLh28FR6nJKXnu7PxEapNC9GK7u7noVdfV6jqKfmG5HJQAmspPnjirZp7og",
  "key33": "2qFENat22Hj8iWUdEmB6FJQvyT1YEHcK5a2hL2jK8coZjEPx1qrmGdpzSPvk23CwE8KhNX8MvQGRbiAz8bPaWoVm",
  "key34": "Q6vuTu8vgPLDnrHxQBDCWKp7wzTzyBbthV47WyoibiVFqAqvcqium3N5A8B3SET53AzU2HMbJHvihsx7yGsgzzP",
  "key35": "2BcXGpPhDZZcmv88isLD2mK9R1U9BWYqi1C4kAYUTezVuFfakeuK44U9PzbKd6o2n4RUDqCdNGjd2G7dPmjDkv6F",
  "key36": "3biKfoEbMThrf33NF3p4zLFw2v5t8DQUeWNU5X1R3C7bocm7KJ6KF2WVxcmeathQV7Qr8korp5f4YwP2nAktBiF4",
  "key37": "34J9cnR9nakHAM1pqNeKnSz1VWPCWBLSe9wUsoZNJYVs7TaL3hA83SEvipzsha1JnY7cLrBvA79vY9e2QYNkuPHd",
  "key38": "3oo9Dqt5pNpcMYXGc9axyRoV5ferFKqDcyNZLnef3V75EqEpYBLrNBZrdeSPuc2nnPBdMNQZcxBdY6vnkETRkQVT",
  "key39": "4WWY4Rzy3CSAZ4gGxv33b5Qyi718jFpV2LATZxmLSbWypsNdAJbtpj5qs6K9dmPy2uHqNPf6W47RZiEteTwFRuHM",
  "key40": "61663bBJk3isuaq1KYhRcoYpjqy9hQnt4Pj2d176ueYSVxQrtHVVQoPqj7Wsv2opsC9P74xRfFcERJHstrxwN9CP",
  "key41": "5RndCHtUaoaNxPY1EUYVmyx96vtMKuRas16TobMDGFSaAgpLCj2U3rLmnX4VyqoLTTwPANciyD74bZ5M1tyamfAn",
  "key42": "2VqWaKc7wQRHDkco5XhYLZ6hsNH2WVfw3Q85U3JtZ7ragPVasdjCp4x1NocvHoRbEqZ4Y2943wazYL2raMxXsXGp",
  "key43": "29iFY2QDRZwuZDY7VYfYHRranCJS7J6EH8H8dzyskVr88AUscLPUd5MQ3wvpv74N3YABKoH665esgzeoHpex8mqS",
  "key44": "3qAet8SkvpvRwasiMmEdamp7gwRN9yJ2iHejZbepaURaYzJtfcXDeRzPEgFmjyGCcXg2kphg8BwZrqJAWoBXxr8o"
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
