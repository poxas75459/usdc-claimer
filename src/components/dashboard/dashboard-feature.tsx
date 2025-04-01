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
    "4VKxTEpLj8X9TvvKBVg3syECwbJqnqVsWRh8HWQm9NX6nDSzhoNgENhjqFQ41ND7jAj7iS6ZF89sBoYmSUp8B8Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QtEX28zFKC7ZksQGeVmPc4Hun5EFrgkN9PaEjLKfMP7R4Xk7VTYi89FVXcSv6XMEpJFC37sWju2mAfKUCLtxYs",
  "key1": "sFiVAPv7pkUr699zRMgVBgiTXwB9eJ9W3CvWjAvqCiDhrViEtN3xw8F9GoPq5dtXzekH4Luzo9JzPpPrEsN5MpR",
  "key2": "2FKSYdM79g9gS5WhFVELZi5sXKxgzeyZ8TJPdDsTLGEMrxdgXQTxPPbGf4ZAYhEsVAPk8voyEjVPQfcNyBRHBC2o",
  "key3": "4kyGBT5NUUTZ8yYhHxet9e7K8aPhsueQ8vcTKKj2gm7aecdD1pmyjgs6tnHXxhX9mMU2XdsswmyrCNJUNQ2Y1Q5U",
  "key4": "5WiX2VKFUF5saT7yWZBH7qPn61YJefP23hHbgqmw3fohc3jKBRZYqE234sG4syAs4LarFoWvfu5GvHXtHCzu2oyf",
  "key5": "8kChuLrzAKfV3kVeNwzGBrEFvD9hHHpXSoNEPP2MGUeEy9VGjdoqDBNvoAxXggkfap2GBvM8tkFVtsor9ek9VrR",
  "key6": "4tCHftpBVtnsrJzbrKdrYoFrJPc8mW4MmpotaNEY1BwSz7oZVHENb4Z5Begi9FrfaujriLUfTgSoW6ZB3XQDWbd3",
  "key7": "2t1qkCJ3LZ57LBgMVTkLnMMigou8rL11W8uS26dWVVZa7UwoG7zgdRfSyF4AxxRojGhjHYpSx2WWVa9HyMeMGjoc",
  "key8": "5yJ1voXitFT9rkcteac52ZAoW5aqtncrRdbNJeJHbErYac4BVN78p1VnLBTX5AttebH6Rko97jsQU3SV6UFDkXon",
  "key9": "4EnYpsUcYfYaJJu7fBsJPQt7TWk6r8qCE85kgyevjzygH3b5iNzqzEMYATPs33tNo6AEXmzgoQi6XV435qdBLvxR",
  "key10": "2hrKeyWrtw2Wb4qfPg8uiQZmt5bScSWRK8hWm18GWBQeyWkvKjAo1wzCszpzeFsKdHJf9pnrVhHQBbi4zN29rhM3",
  "key11": "2U2kQVxxpF8FspttU9XepxonignhaFHoq8mtgDvpMzAyW8F4UKyBD77kTose4BLtQfQpaGjyoobgRhQ54JvVx39V",
  "key12": "wdbs47CgdF5AaMqfTrUKeQb6MnrYJwbTanXT5ZbJtwpRLzEgLszJUUD8k743Xp6jUrWMUzPgcVWBH72eAgruZUF",
  "key13": "3m2voEP96B5ZbE9B7FqtnUCDXTfb84SnbfdpRoqCmmJq8vqTnhLYhyN3ucy4s5aCcwknbDxrVXYZdcKqbLAwKwGi",
  "key14": "5Jyh5GrxM1NgocvKDgUqnwfrcR1tPsKvfKMaoj2ezRrbBtApBjidfJake2mmf8oemC1EKZWpiUTeWSC3fWNPwymH",
  "key15": "Sx5KVAR44jZYoVSqHHys248wT2xKYrAByPok21La65aZvngq2moB3xR9nqzVQ78QrqCGpGhpWWkkkeFjBFbqdyr",
  "key16": "4tXnBR8f9DnqjFAYTS3vvqdkDtG3rsPQuvnGHKSp4cJpWuEVm98ra2rBg4zxU5GshB4oRDvyqMcKNoozRdjxdcgX",
  "key17": "c6k1mM7Hr9VGSQQf925f3wyT7GZgZsExWZRFUTmZdcD54aEFmcpYzDJi7iBmqPwkVN32ajF1hQEnX4PkPm6NwcC",
  "key18": "qEmSdXxr7wKhGuF7Jnq4Zdr16izgH2z8EfHs7qVozauTZRSzU6WPoB9mrWQk8eyR4phWzXLZF9pnfLEQnVToHdo",
  "key19": "4STSTGrjguN9WEcetUpJDyr7eCv1vgAyKGKs4ikhxoK1BuDdRT3SgsUxm2CFUFnpGgikREHEJQLdApw8iwmBJ2VY",
  "key20": "5CJGVuKMhVSRTNK1tQ75G3qyGaBkxBnuAkMSroRcS6UuW7zQJswEPJu6KRkhHzoSNWcpknVnfZXDwcF72dKS5LUZ",
  "key21": "5AdP7TPWyc9Zjqj3P2eZ86bjvjzQz8HNyDEynNgCaJBWiyW2LeMSgEZdn5fFpztcD4pCs8Cs1N3hEvRCi1KmfHzo",
  "key22": "3NA7AqWQY2utmpq22ZF5snqzxG5kEE38nBXqyMKvkHec2j7J74m5gTFczGp4wZDFSDMqoK6xyJmoSdMZCSW6vv14",
  "key23": "53GYf7znttiNmeRz8mHA29iGyrFaULUgzFnpQV6yzcST3LPea3M7WazPuPA5jUA14ZP9gHPmNVMvsrXLqdXgwHZ8",
  "key24": "CdxQAkUusVdixz88dgktx5eif1aJsZnjMDEUvP1bfZep6xgScWB63t66kGCw1e3aWBDKhuQLQ5HtzhTN6pM4ZoZ",
  "key25": "hbPsmhdxgTq88rnq4CKCGBtZKccLpV8MGtBm4M5vwNpeGzkWyButyotWeyNR9tDYG5kb32vQdYoz61t5nrutpQu",
  "key26": "5PzCXFJStXC9jDAxPzvtgwwCJEQr78J3vixCMDccDSZdeRHJJqoHd69XUTQA2wx5a3QKpugXpJxb2hFQEXS4oPbe",
  "key27": "3fpjTYH1gTAiuDuqqfbAyvWvkspMMNNH9b5ds3HRNgPeBnDnYeRXV2hdk67acPrBkXmDdtouJEpGTsZgend7hWuA",
  "key28": "421DhFLWAh8715i1mF7gkZKYtHeFPUoWL8J3znKENchHxPdHh2sMe9wxucMTE8pGzt9yKp2KMGtBhMz6DYp2KSRH",
  "key29": "Vf9VAL87SW4hmxoZhMPeBN6f6RaKVhuH22KB6Fy2DCDroYxKGGzCQFRtm7WkXY1R9zwcLigbpL8VZBPZ4YhPQsR",
  "key30": "g8ZZw5T7DMGXPQaNCC3HtY3iP5EDYy93fBq7sT7yv7WSy12gHMPY3GUa8U3nbvisA6dzwj4GwyaNybZ1hqtw8FM",
  "key31": "5MCGuEzyUjipD2h7ppPTqo9FZA85mB5q3fcvrvV1CV61TqZBfyzpEL6wPJDrphoyynr6WWK8miwadG1acHNc3se1",
  "key32": "49St8NUTvPSNfz2PhnsMbiyWu9LmqVypVfzGoGKDgM1EnLSdnGJ3HMAqJPeNShWLgyk39jt6AQ9GCXMNZQuEAtKF",
  "key33": "sH9obvdxedQZbCn4ML7kHv6hFa4WU7Kff6j6PWQKuGt53JKzdPhCP7vezfUVEHkUknGTPMqYwAZHM1Sxygxo26V",
  "key34": "65HaYQ2knMsSWQsQ3tSLfQ15gb2FzH7ih991uAxGX9x1cx5hqTgVR1s1uHR1AgQz1H79DUSeGq65hySC1EuUE7gS"
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
