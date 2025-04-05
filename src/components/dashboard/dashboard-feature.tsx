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
    "jZxSJB1kXvChFjT2rfmJaxR6enPxTgHqBfYU2ZG5dD8AVP4Q8H16LjEv55iw5CQozd99ANXsfvpsE87dXBbuCXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pVMy12o7ka3jCJmZEnMg6ivHV2g7SHp5TkQKk7xd2YsJ7yi7M88Eb5Y6Dve8VNyWPy7Tg77syqP3CoAxHH62oSE",
  "key1": "3wak4qidqtzd8ngKZ7c89TsVEeEjcxEL3wxn9gD9BeKzidmsUo6iufLYZA2A3X9YwC7TTRwB3zyd1JpbDX98rLUY",
  "key2": "21r4eixnEta8uGpy5Co9xiTaSHhAzYzMNNvgCC2QPJRhaBrg7gRR1FxNH4jtvNVdNoo1mpiox487CwEXnTxu7sog",
  "key3": "2QfDFx9ZBCYNtuxJswEYeg6hc7K3QQ2uWk3na4xv4hgvxxVeNZX7fw58NnswdvjpHAziu6f32H9hVMPURHKg9i4A",
  "key4": "zz5Gu8QMPm5Tp5hAadhP3rcQihkMameY99Y9KhaQYVRjCp57jyE2GT5eJLKe42Wmj6KZ36JaK8mL5TLrwHUpBzV",
  "key5": "2P1MFvcmaGWyVxtreJF7xEBskuT6g6txnofsoC51qfhvxypFXXWjF9iWBDAdv9rNWoiy7NFHPQGzGqnwC1n4pY3",
  "key6": "VTUaoUMHtKchhAphwVvfCKP4HzficFc6ZxkCUWTxqVeFuWzzZbyAyVxd4gfWRbwT6M1yaCuLdHxWh9T63PjhHUb",
  "key7": "2umFVJPy8cCzvt5f47bUb1FBhSxZbYeJbpvGdfiwZnds4XigTVgZdUeD8xT8oxPhhPsuVsGHrJHgKwEwBxTeB6Wf",
  "key8": "3e9sZ2XPqvPKPWLdQtYpPd7BXTbhD7vXQPkT9inzqpb76BG4zseWgMAo6H4bYdd7PyQ7oNrs6mm7cS2MBwyFSoFi",
  "key9": "3xh6JAQB6uc16jaF3X72R51WJLqjQ2t8yS4QKZzZnrPiyuMocUHce44XrnPfuPhN6HTfNTqiwgu5q8qrJaSrZRvQ",
  "key10": "4kQTy49iG3uzp4WWVzhxjhvDiEUjiE3pijw6sBimKBbEvYCbzXg9zC7o1iXqjsmnE1sibz8JozRc6uQkEZ4Kuhyh",
  "key11": "3jGL4RSMtSkN7QiDE3tEBs6UhGbKfKK6DMDwbLoA6qBTZyFDAt21VUUsvXqqjFTqJVZwWQLgroQe1Df4yw3u2MaU",
  "key12": "3FVrF3pSqCxDCtYmFiB8ibnA2peohuMbfMgnbCxdXTbdQTP9ZVULAeWQUj5hDrW6yXoVuxg6ZFdMHDzqWio2HCgb",
  "key13": "4wviZguercJE2QeSRsjJ8VQpV8dixwoDPsecvRm1bHi1a9L5DGPZZc3ENWZtTBhvz5TaJEkhUpgJYtnUHyT1UGzc",
  "key14": "4LmmLe2yZdEZd2vosAh6eVZfDju3oQYwpnJ5V1Uod3xtuuHkQcCmkErWkE8qXxJ7mDhueLqNKAc2974uU15kvKJw",
  "key15": "GDUkc8GWkUF9BqbBJCDnFhxqCoACDj8ErLm7gDk8oGyxh2wmT4UstDoiDcPR9ZHQsJZwRYMEeVQV64N7y1LqVK5",
  "key16": "toDnkZguvZMSfPMeW26xMipc9Sut16EbfkpFWFuD7hAatMM6eDrNEuXRHCkWGjKbFgDn2LyYzgp9xWGGZRZVo5x",
  "key17": "vGmPYQJPaWRmRMcAcpcU159PbFGHpu3cohYh1Xfw7LazVnQJ2HtMLVQaa8Z3P6Kq8SBiwMwEvVAr9qWbonm7Q6w",
  "key18": "5CYvzAZfDeFp9twfRfvsFsvwkktXDe9HtoQmfaWcNfReT8EAq4pRMQt4TnjwYtS5gkbs6xRzGePf22vbjAqLpCft",
  "key19": "4Fq8XjFj1TqQHGMuYUdKJzJ2ekGyw17mgdWx2aQaw7NB8j2i9BdmZVrDFLvN2TCVUMBfBPQeZVWVSrJKXUsAPfN7",
  "key20": "2cUK2CBTYJpHCKJg63GwLnQ73bT2ZUZmny1uz1sT831kE9W1BhypvvbCZU8i6mQBCzSGG5HKDMi293yQR4PfCgE7",
  "key21": "bmusSUCiCmn4C3F5xmh2otSJqzbBc938isPmSYa6nyJYEiNPhV2KSihoBkHD7BFf7pJNSMaaRoRuFKBExTjYDFi",
  "key22": "2v6rr1KzaqajdH8AA7BdxdS7rLDf8ovK5hUfHzYt4TH7fhMR32SmuVEohjw97RWGRLcJ5WvNKjLfS8pQFNKQzMdg",
  "key23": "Whrrk6evocSCvjLzaLXwxBwgRqHrQDdnkJXacrowNaJKiYzkeNgmGp2CXHHXyHo3J7UHGEECKTgJMEFeoj1Jxuz",
  "key24": "4QuCmtnc8RooftMkSMCakLUW5UB5nZb5svAtuVZTePc2xueU6mAGdcjVhs3HRNzrceu2h4E43dRiaoeZNoUCTCw2",
  "key25": "4XjtoRk2vajGNmDuxBDPx8DMQrGQk4YL1FmnVNqLRQ9HkmJo8cyu9eY4TkWWiR7a9MLHdQbFksWn5PbU8B3d3qtJ",
  "key26": "2mNKsgmNTfnvbXNQbezrCCAR7u4Do3yfpRgr31U9jEuKKvNHF9PpX2fzKSW9SQkaMQz3QCAtSum51xH3MaV4RPCW",
  "key27": "2ggk1SPE9PWkNeCRuaHoLpg5gdourZbzN764KLZodRHKVaKWfQeepvUpoUEodhKBkSKM3r364sizjzkGAXcZzzB7",
  "key28": "33CdkcFv7gCJNmB7KJPzULiBw3wjLFTFjPs5CZ8GmvmWRfegzoD8zzNSqMtfBAGhWzpCpbzQp6aveeQ5BfXAaaax",
  "key29": "3oy8aiB7iVmYx3rGsG61k4xDjqc9mJKa83UbABPmLvwZGcE9pNEWrtwm9tAquFfrM1gjfXEQrgk7VXUhsCB58ouE",
  "key30": "314DAaRrixwPvWZAmXtEVBoxN8KTYVkLBRsD9bcxkdUZLpz8oLMrAixW66QxJtH1BUJzhJsropws3D9JFJQVDycZ",
  "key31": "2nPkWU1ufhmqzEM3qwg58TQubp8R46KvqKusGx6PfB9m2eUw1EPi8BY79M5aDCyTovZ1Gdn4SiZvRo5Pbo6sddYT",
  "key32": "2NQebTwnauTzSfzskRctz4wDbj6oNQga81enDa8TfHY5nzuMj7NLUmJ1ArrdByqXBeTTM7mYwTxNdfwj1C5PatFP",
  "key33": "49DkxkZuaDEyYxxg8xYbjo9kGeG5QLCx9rb5wCtHhMEZ9EdSoLesvQaqt7cCuWxz6XUY1gyr9B9edWQuz8E9nuao",
  "key34": "5ZrLWzJafWA4c9ag4hpHSddrjfjdWk4GAMusZmrznsWkKBLoyJxtULMm7WpUzMHpPy1hGb6bK32gueciKRUxyqZW",
  "key35": "62APzxqsugdbcrtaz916peUNv6Nxoo37iYFwgz5WC8rxUx3wA2eRBTPDyziGwdVXMkd1wdzD6Ce75Vg4Wd1Xt4e3",
  "key36": "4T5UPASauDen67sA6pf2y9oc6mQdWN3YMKKbMSGmwr1tYqtGQRJB6c9k3dTqmJDBk3FTAvuqqUbp4q9dt8UZoC9b",
  "key37": "4tRmvdXGdRBuTp2uAsMXZm9bC5vpmj9tD4mjp91P3BaXYZDHhu7nUJgspgJL82sAsSNCuLADfR9etArVQq1ZSfgN",
  "key38": "fSBXHwJfNt9zQkheK7N2F3d2DmxPcbcsyys1KWeet2RAfrcvy56FdJxfeMWggHht4AmtvoEVct9HwqbegwWafU6",
  "key39": "65KRu36wH7oZDH2LWaGMgLYJgBWreeacjEFgpPkozkPzds6dwuQaW9ZpJf6t9PSDdPuoJbz6xt2sCR5S7i8PfQkV",
  "key40": "5vCwch5wmprWEzMj9Hyea92ZZKifiRp8QabWDqfRhEbFoFFnoBSRXhyFKeSLqJNsjivaRnmQPW3q8NAeKQ5zPTRS",
  "key41": "2md1z8oTvmruMNt4SxkYQokEPuMRPSgVQ3oTxLAQjx1FuX7YYRtt5aHC7Gc4wkjEZBPXnvtyQEeKnhLnqs3cmTtm",
  "key42": "5WNAZBhw6BpbLuV268ZkUDv8rV8bkBxEue4g53z8cF4AhYk2mMoQLHdiTm1wp4BpjhfqVtU1oELwXNHJVx5EyfX8",
  "key43": "64GMpURfgc7uYignrYYPyAhpcSr7vDKuaUfJV1FMbXSJmZaNtUU1Hgid6K91bUGnDsqBpZrSiJPUaNRTPAgT6fna",
  "key44": "5F8c28ZDoWrjyVwR1ubUuuJG7Y6piVtjB3yZxKPeNc4PMsCNvuN1Ns6Z8cJNkvK1daiFZPa1MpV7vQdgvk4VS37y",
  "key45": "4taRgHVzVbmUtVaz1BHYRFiqrsW3KPTNkAA7p5SvDa9ifcPriwG5S4fZZkRKBm4VPQKLtzmDmJkXUmx32GVxVQ4h",
  "key46": "4yvLcXbJ2cGbLp2EmrR1QDLJZkeqJyXNFcc85UEo9Brw68FGjMFvPwnmWBG4ePBcjRhQZMphjm2bEE39hFUN9ncR",
  "key47": "2a9DVoqYbTHyZH8kEJucZ3UpNXxAFYk6BoVdVf9sXtcPnaYQjXizetzyEdBYXDnPnpb7CRoECGrqG1qdMiTW8Yo"
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
