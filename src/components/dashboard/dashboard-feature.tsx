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
    "53knWfDRNq76k4Rz1W12AG2wgSjiDeBDY7Hak7eiUGANZvch79EYK8r4freBBtaJTbp7j3yTNotBWWjgnYdjeLEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DZ6TQnJwGRYaLT9jSVbEN5axwL6dHzc6jtramyJGg5qUDTJ2ND2ujkVTvSgR68G8nSGaddyDVjhJyuookHjnFc",
  "key1": "THu1RbZkb9cmWxH6mSi6MH67T5HtNnDR4bWshv8ura9qcXDChBfWxVaJkrrtTsgkZ8WcUUju8xXDuUGdnSXX7u8",
  "key2": "5H8xtaXcgsAW9ZbDKn8pTsmzfK6989jyDWULjmp2xs47t5TqeVi3agdNFqzJzxw8n4qhpZaNVq47bzgbsnArYPKJ",
  "key3": "2q5X9sQawCS8nhF7WMnQFRG1mwwmEvkp4LyJ9VrsiRwiCemgbdLNy1qbPdhLybwysjEgmdwvDm84VsnPMJVA7Qfs",
  "key4": "2y6nEFusScYwCHzgWixA1t3LfFiPTajDyeTomu2wowhxcMcBVUKCejBzux1NJYsHsJu1kLssuEpZX1xeM5j27LA5",
  "key5": "S95sYDuKfMRb21gcteRCCHaFt9VvaCHEeM9mMUXFM5FwQ4HDqkQABmGF9hopU2MRuxbQxKTGLgMKCzZsg2cbbzn",
  "key6": "5pw18ihmuo9qAnaQvHjQGVvSS8KwKkhAAbjBkQBUKLNbWZB1RDkUi32uB3xj71Qx7DDHZAkYfneSXi5yF4uGnuda",
  "key7": "38zQg1FVmur85FLrVEgxN9NQyeR4bL3FGHcWit3gRy1g9B1v9wq3KgR5zwcoBue27oLk6k5ZeJaf8ntqMa1GbQYL",
  "key8": "MtH7G1NUSiu9XA6t3Wo39NcUhE3GLJN6PahTrAd9xmANXV6sgeAT9nG41zgzc9yc3hdyQV7VXWtiw2RfGeEQXTD",
  "key9": "3iMhp6baJ2wLHvmdRy8jT9ZXCTKA1qPLyCwWMNtxtiRJeBYHJD1k7hmHgXXWDicrp6XVqkNi7bH8JMrpMPsL8w9G",
  "key10": "3pKggjUAoY7f39LxrFNH9xY9E71oeR7YV9JzAdaYT6KuKCDQgbCCXBTWWTaTmDS2zeuY7sFbNJn6DhyjZnxq4sYh",
  "key11": "2pZTPyT9vHdhGaeA93gErU93KRy1CDZWffuPpH5s58w2cMgKkWFDsdw2V7mhipZhGgJZN6nYdqRk48E2kGjqBYpz",
  "key12": "5b8FUEiWxu6M1kP88rsLxLi85DQvLxr5N9JR7MqznzPxt6qFAU8XWRcYYznHj373ZozytkR4KAFrwJRUvnJn66QF",
  "key13": "3zenvxFQnEoAiGVmKJ2H8X7WkptcPg3QMuQunBFWhuPz6fVFqUjLdpqKJByykpLSCiCx1WGRT32DAJe9LUMmxDpr",
  "key14": "444RJQeNot3TUENuKtgtnUpTCsYKoAnLAmwTPfdaiucJX1rM7bn2ZDFw52eCQjMRCnDSbYtJaoAUBoLCjU3W7Cx5",
  "key15": "46XfDYKqv4iCogJpaFFfVLXbapBbLXyN13H3i4BEJg3a2ed2SPccRPnLEoGBhcw6ZxYs9KD7KmLZ8oKNtiYkQ7JZ",
  "key16": "5xm3MXQYgS5Mtbet3smBjiwd3dKzT1oJJkFzM8idSFoLpbszeKQYcRCQev1K2aQtu4uwFSaxua1Awkw5vwhx5VfS",
  "key17": "2MFbJ6rRpi9VL4HFW7WchVUJibBLbbzB69bps34DnWEk7evEyt3FBPvuX3bcxJrqs5LnXHwbwpRT7v2bjwxELAim",
  "key18": "WnAkHBetEHgDfMZmRwNCVyXB5q5GgWDhfhdWB8FBtQNrF2PgwquKPytFmhd9ijLrCciuBzEwJqskyfYh7divT8j",
  "key19": "4hB8FS5FLNUtq53HC5gMD7YVqpYW4Be6BXxQVk1oHxiJuhXoh5ZRB9VXv2L6VXUDC87PMpYUYGLziRSCLrrsZAqN",
  "key20": "4usZ16N1uaLA4sXgbrh3ewHqjdPh2DeN7sUmbNhVQVKhU81YoebJ5r1adse59QUwKGLAEBxKkd3W4wmfdk3hBdLL",
  "key21": "4VuxHyVUpfZsEWWhJY2PjdtujNrkDMaWvSvgWXi4sow19p829DUsfrLB1GQpti2XkAovvDWdGTJTcyFxgaZVUbpA",
  "key22": "4wSPNJf9y7FkBvF1KJf5bFkUu6VDCbXAAKfnNuGQtH7norL9FfY5nypwSTZRqDoeK8ZjHw4fdxsHSTXMb4nUXFXs",
  "key23": "5ApVmdQXes5VR5RgSLa533er6AM5A45DtmSPrURL7nsbK8iUYwMdwYFE3ZWyuCjyRCG3McPw9WjpRk2uuE5LW7s6",
  "key24": "57Qrr5GdAKGQvwa5ceQrqVPBC5bwR81QCtJ8za7hyZVUVaadTcJBowPeTCzgZGaNtfcRSLcqKvvAxj2nyspfQD4c",
  "key25": "4fRom8ZcJN7qn9hZ6wHuykMKttwbXZZgKDgxtzxdWNBWN2HcrNHsZoSsM463oL8qnsEtvhYVA6VDMx2ZpBaYyeV2",
  "key26": "3JbjibEYFrzMphQeXmfUAS66NJj3DZ3yLsVH2uTUaYnLuzPnwMnFCkPrpYsVC25xvMA4y3GLorC4115qrNruA1BU",
  "key27": "3tuYpY7hVuKxhK9LjmkkghBamhXiezfUGRL53X9D6QHHuuNfFDSf2aHAc2qnsRftkycVNJ4hdkxJdMEF7kuV6RkK",
  "key28": "2wYe45HFuKeUhDE9GAZVbiWKFTQaxnzzfG4gef7vRS4rRgqceNtCE34ysS3pBTuFeMmZiq1L9TchsCYuhb9h98cf",
  "key29": "37T8JYr3jVnmB4Rib7PXyNNCVkBxNmKQBsaLB1dvRcW33nUmx9ReBVnjGyC3bBLSD3y5g3F4F5hfEayqRRDbW3YQ",
  "key30": "4Y3JP1sERbDNEiUfReAPHwUNjphya5mbETAGAq1mHXE27s6rcwJUvCXQ6Z3BpsxGfNd2ZefRoDgyHgGfb7jxSTnc",
  "key31": "8ZXMNs36M1Uh3AJjSLNaG7Egc4Y9vhkS3zb7iQrwfEE5pJ1P1xP7t4Zy9bUPkpeRu4DUCmofmUad5YYZwDJp6ta",
  "key32": "5dGijMiRYs7coBY8tBp7cSgbJ6kE3yGjYLZrKf5tCEX6QaopcnwGqcVNMADM17qKyb5AWF9khrBDnvpjMxG6xfgJ",
  "key33": "3p45Ci49rk56YXakfppnWKjXJXjbCJJVcRxirzCrqGeAqomdScunuuoyDLMVxLz9F3nJXYPEfeDHaB9eSMUzzQey",
  "key34": "35uejoLJrhbcKm45A5x5y3oYParn58VWmeXyGutWeNXrhnEVsH3zoZvu93dTMXSngrjXHuKfPUqWC4sTG298JJcn",
  "key35": "3PRS9cPF8yY8Ps1ULuyE1USw7LTzUXumjhrNwqp6CAYev57Xu8pkoRb1ntEk4SWpunE9ShNV3YCjJqm3VXsop7fe",
  "key36": "2Ki33rsgaJjNdqsownXFodvQqWV7v8vyS349csaUUwQKZCYS13edPLocU3f5pLznWdfrxj8ehWkApKsqYrduqotA",
  "key37": "2MCqggu7Dcs7SFhjgqByxqqmL43XP36VnPipCb1yrHtuFsLwMVGtD72m1QiJjoEc2jL4oP8Dw2CXqRVCZem4imfz",
  "key38": "4KWzdhGavJzsJLbFuHVNSc5172eZdTyxMq3GV4MgxM8uPQREUUa1ojQSdsoqfYEiiEyaEtz3ABnCeZeBvgfWhBkj",
  "key39": "TAurmgKppf2aA6jnM95X6EU8X3BamGZgj471zRXdUGEBYa62a7YpwXRT9jvzy7abhYVh6BEoA5dVF6X6dWqcsT7",
  "key40": "4emZBUcFYNVyqvmtrT3821eD1VV3pTL3p1pDDoX3pncPEotaStFf9AjLH33VfcAGB2kh6LyaV31rqVbJvYVq8JJF",
  "key41": "5U7JQuQatYcS3qVS5G6iWS7E4wZHQ3mGX61pFFcWfBPWLwk8rs2qApt7pffRUqXFvZu1j5yek54KZkAZ6kZh9gMD",
  "key42": "2bPLky6NHnSGdbR4pLreGzhMtuux7hKD7KVSftrtH39Y4715Xm9NXcWzwwizt6z9BFee25SNJjZJdmtUPxnJMedZ",
  "key43": "5cGnTQi92s7TRjCcWHTrgfksvisq9zBqKAVTbDY7qhUDccnBtK4JxNvWgK8rJ7utEUfGHXyYjCpAiTPjbzsqSAgq",
  "key44": "5YbUgVXJMS55ujuiPh5qp49U14PZ7r9mpLNJsg2EDAdJDofRDjaFNeRx3vmBHn25bPiqu7os6WEzUx9MWDbCQGsN",
  "key45": "52FE6PbP6aZc9WBCnK36qFjQnQMznGJWENXVb9VYcSA6N4CquvS1RVA7i359qJm696saMPtYC7tLn9nAVfBasaA7",
  "key46": "5m3tRtCnpNDNJW8rNXCYUEaVxTNpCRh2k6BEEph9qfL8fbm3Vam3x3UBot8jpkYCGpvb7zMdUTJZRrQiMPdYrtk7",
  "key47": "mRqNPA9Ubt6mT8syurUW2zrAPc7QViJCtyycQJVjXr43ZEsqJfHWEjpwyGhr6pqEn3XJyDTxzPbTCrhoLqDHgcz",
  "key48": "4WXysY4zFqGRHwLvsH34noga6tFbd6azK88YaLwukq3q9eBqP78dL61QLxBumijMWLTPcFnVKmFNvuf2KdMZWzw8",
  "key49": "4tauxwb4yh4Hw89kaRz23GXoeibTEfJPjTypZSJRhePTRDDEYx7LhDSWV2PcJbzwH48QrcqKEFFCJaVUwhKA8Edh"
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
