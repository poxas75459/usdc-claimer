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
    "3cEMx7UHPxoNMFTQox6inD9AhyBySiPDzQ1qe4Nj3eBtAxEBbdpZ2Nra2Hz5VMWyYMLcjns4v3eCLLamznJ7Hd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sBHuTYiE9eevfEAtArJ52DPyAyKvWFDmnaSSCPBDTqh7YAF2N9EBp192Tq8ZJjtehxtynyLZ2zmQ53yw8xcKpCH",
  "key1": "3RiHnQhVBksmqUV35tenSwuGV3dviRXdXJXf7MuEf5ueiTt3uNaXPp3zXj4CBctLEZ4WnQgwFPLPtztBT9oMYR7y",
  "key2": "2wsx3PLjgbFvM8pEjPhoZ7927p3R9sySv5wcbkqVwX2USfWZSYDqczM2HQjhmsM5tpSy2UwUM5nboDeHE8FYgNbD",
  "key3": "5VMBR6UN7fY2oC1Njha1DGVMZYCrG1jzT1GmFrEXg9oA2S3Lghcf7UiCuxUn58AcNtqcFW51tTbHdmF8tBvH3yKE",
  "key4": "44ZUMGMX4iUiN8jQ8JHKLP814od6UN7pNkaifbkf6ikRweoB72nw2Mcb3dN5CTrePtq17bRbPPPb26ti25Li73hC",
  "key5": "61eDC1YMapbGfTiQYCvioeB6aMdQ7YV8ZcNmzZVDYYdcJV8UkcoW5nvyfMp2L7DEXhvX41CqEe2S3Lth7riyTnm2",
  "key6": "5PGy6PbJNzqaoUn1mwCHHtYpoBYY9ahPoYuAD64iqxPqScWX3cgE8t6xhjfizDAUhmHaByQhS2JznihbMXtQhDVx",
  "key7": "32LD3TAxGBupvVgLxiutvPgFp7qk2ZhBRwMUs3NrH4iNyiZejm67JESfVa1QYQDfzSVSthgN8Mg8ofNcUCxQ3yer",
  "key8": "4jEW5S6kUy2cJK3MPQnovpMzxR2hoLVnpXojU4iUW2RZYMJRjtAMK7FGt5q2LWa1xb3AWMzReskNarHvrHtPPFAP",
  "key9": "HrbBMihYa1qHpkiMvB3Pkc63vndXu2mERrJo1ezkrQuWMoEkehLzWw6s9PuRZgwcyGUAcXyXSv23DeEmJwXgx96",
  "key10": "5vxBCYLV4CyphAVU6MSFqPAdgwyJK1gEnbq42Gq8hVnTcDg1KcGQX47Bdc3rZweoEgNo7NaEcDw8pTFJcX31omFE",
  "key11": "3racZhbynSzMzT8YcowRwxfQmps9wzNeia23nELvawaWdzzWQ59ZMvMMG1peKeQeb2wsaepgqeLDyrjDx2A8wfg7",
  "key12": "43tPwEQya8Tm2Bk79EC7GiSZy4roET13WXppwurDsVf2xmEf5oWwYY4WBNiqLcGorw28Xu63eFSzrF5orinCBVCZ",
  "key13": "5mtGt9LhmzisB1hXQD6TgkJSd14xKMz64d9itM8dpUD4xxdhotv85XCCnvteVppCdT5LMW6fZDmk67rwRqH3dVSS",
  "key14": "437B37MdJ2G2BfaMkrufpKS56JwTcYo9V93QmVhAib3nLS4FC1U1BkDQU9ZNwBBEATuzZASz8qMLnwMLybnP1whd",
  "key15": "5e7UwiAMK1v25PyuBGVWySZX1GDfgoCJ5zpvS5bmPNoGrrdov1g8igqbMYYMxWppVnXn4jY6i7DYbwn7QQrD1Jjq",
  "key16": "22ABAvmRM2n443uShR45q2fPP9EL5MZGoygCpebPW4DyoAiz5r7TzPB2hVzMDdWrvUhjqR98JT8jT5CEoz8jrsJ9",
  "key17": "5RMAMNrcE1MweNyTroA6rFYvPzL6AFfmgjWhArn1E56o953gdBdfBhGckt6nirakZLLPNfisThv5QSM5qdCrkCN9",
  "key18": "JEx7DeRKVPXLrGQfybBp8rjBUEaeVRHLvEj6Hc8ZXLLxyWnL9iLD85Fz3qufZ8rs3Pqqdpxmkzs91fuwDfpk6Vp",
  "key19": "49y6z9ZB26TX1v6Ck5MdwXtxomDM16S46qBJZACKJSihFMrDop6X1gsTB5a4EeZ42XF6zoj6CsDh2uxdytc6QJ8d",
  "key20": "jPFmLEWP9dkgSBhckC8jyXHYRwgrCNrNry3UBWGftaHsEPdYkYxxNCDNkYnSoMwcZ1Q6DvbccBLBPZLy44Z1UC5",
  "key21": "5fR5ynVKUPshzyRXsHnkj67T6KjFoCwYe8mLUiPHq8A1NLDLUoDrV1crRgrV99MLeewkH4ciC6kv4Y9MZy6Q3zos",
  "key22": "4aEn9ZcvvY9YUkyVHQZtrhHVdzrQTrZDfBSE2rdA8PyVdvhENUPoQ4J62b8eMkabScaWpZsunE7aYVG3fPg416zz",
  "key23": "53ZXqxFpCL1NCx75eG9pFH17ZafkNzrhzTv8YmdEcfu2XXjHuezYBRPxcgM3MKTujwXEdBoGGBUcVTtQVxxJ2pFz",
  "key24": "DRmwYwNyzrvb1DNpT2a72dL5Xj9BRw6Mp6RGvwrNpHf8TMwy7mumb6MdGahin1smDF3XNqdnXRkie8MG96CCNSY",
  "key25": "447ZNjGggBiaA6vUzLBiDhUK1LFrsxeP9rao8sGmQMTuVUHoaMgpRMQWp7y2A1jaoW3y8TQh1n6G5b81dyeDheeW",
  "key26": "2vPCxJiuqQDxgSfF58jG9S4RqNhEo4wUx4zgXGmeCQwwCz3PXQAdSK7g6EMa5Dx3Via5Qw13WreKSAjcYemrn9hq",
  "key27": "3S7mw1ccGxRJ2pFG3Cd388QbbQ5FZpWY6kc3qzF5Cx41FDYRSo3LdfBfonJqu8BaAEuykqTycV6MmHbs16bHUajz",
  "key28": "Ud4HewRZSP8yHP3VrAjbMEkMBnrpppaLBYNY2pvjFefESVNKfTPq6ywtgrCfUuo3V6ohcRJyCxVjDEdkpELx1sL",
  "key29": "3D4DJz8bvY25gSMevsnfNy5fdfhZg34E8eEfM9wb8nPYBtbwvNDcowsY7uAmt4RSDdYLLKAFnjSwvv5KvqDKE5TJ",
  "key30": "9iRUjrxV71ixTxeNQLqGUqeLhhAtavfrMMsGBXLPqUnvv5tUh2cvYFfJx65HG4r4mBEf4Kj2T2ztTKKVVfaMyA1",
  "key31": "55YNmwuHtjJWD6ArGsiisX3Y5HeBhZZXKHzknh8YD5Ujc5UwwE9c9CZ8GjRabQUGdqqyb4CPdudqZw3f8M3CfKtD",
  "key32": "2z8rSfokJo9N45XkWBWg11J72nbLiyfgYxa5t7mAWU1NBVXM2hTgRxx3V9tR7XhdBUH856hoNrGj8NKq33uf6oCj",
  "key33": "4k2rpd2B3QDttJb7maT9XuKPjcPPQ7ErXiJ57Woxgo2uPtW3kEnovsrqW4LQVv5FhdTEFB4fhcmfKpvLMtjqK41D",
  "key34": "5SHDzitN3ZkHKG47ciiFFbwdCBtccXXuRq4GAKH6ZZxoj9rcnC3guDJaNvXLvWnYJRMqZnZDizejHFBQ4vhY4wVE",
  "key35": "37eiMQ2EjtTG3qbvoymnyVR1xjbnVbQjJiWeh7GYt8bDp7S9jWdCBuR9eiQDymmFTMYtu4aGUHjwAJ1KccfxpMRV",
  "key36": "VodYdS72MRsZ2dTQnxmfBnCp6PKKVN8YcUqfaMPbykxvBNPRcgofF2p8EKQbzHkQ4NFrAxwCjXaXnm4FxxJcXTW",
  "key37": "2zgYsUdbSgbJdbtbnXDMEru9PAvkNNXwppzLUDdcQHrtxzTAXHdmeb6NFxpTKUXVSBeBYRpFJZS2zCdNVbC9kVRV",
  "key38": "2YHdbMVXjHpfNhLLQG74WePZtjmYv2DrJ6R6zX2NeGoc8FHKCg6hiwDHjxpk9QMm7Sr8Q5TSsEb9k9JuebmcQXC7",
  "key39": "2tAJVqedE4jcZuHa5XBE8U49Kry4ow9G3e3sGx6VP35xHj8fHLBB3fMMCxZug1JUe3WTUajPkbggsYhVGg4uqKva"
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
