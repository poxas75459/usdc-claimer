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
    "tuGprvruFKd9LwXVzwYLD9Fm9n3ELyLUCKCn4QremLguWFqCbndSGzb7oSGMKr7YXzkxwx4PMdjcEur2PanLYc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPGvECyEuavtNnbpDKbV4FEXbTzBNcd9czDmtzwTDksNxsrjtCxDWgZ558EGUd6UcJUtDJUQzn23ggifBEN79Fv",
  "key1": "379qkH5pfkaHb3ndksuBs9gBtpZsvMxiXNjWBxQStALjwqEtwCo6TCzWCbZtZpFPjpdwd4Cj7UnMdkLkMW7ZZ4Gd",
  "key2": "4DtxGNhnHyKGTqGRYXsBzXDW4MSm4nnUXRS2Bttmg4hdu3gmd6dfq73ULuMv5SYVgppf7n8S3WJKSPYeYWvRmeCz",
  "key3": "5VwL2eh7CxyZMqXRH579afAaodT2TAQpyhm6s6Eq5JTR78CJyAR71eM76pEkao6C1V2pD2SucraHQ2kyk7yFmy7t",
  "key4": "2bShj8KKvMwHHLpy58vGAMtbmp7gUAQEXVMsKQztrmLzurcj2QXTtkcResiUfJHx2S4FQ2cxs8SFe6XnZr1hTY5m",
  "key5": "3Z873JYrbsZQWVckGr26J8Hhvd4uxC1FatRiqM3wuJEBLTr164n6EBKPR6kCvdZdBMC1dmZeSDMPbNGeVp4duKAc",
  "key6": "4f48ovfdyQao1jpaSEP2dvNU7ZTHzRsDS7mPs158yEM879k3S8aEMpqWMyF5XZWJ4ou3RvH9cYvgmwkxqJdxy731",
  "key7": "3EFdMXhcwqhYVkDucChLLBzEQtLcUbje6LQHsXfmcn8Gt6q18ed9Nxkxzuo8GxEh8KVCyhutdZts8JLTBfJAK6LC",
  "key8": "5aWJ4an4KbDRZo69vVUtr5mApRYRDkPw3TXSVUhgaWGT4bS28fgatjXBRUWuqJCBtofsM2yX8EsE3XFqvFcs25yE",
  "key9": "5aps3SBYag4K3i476NbKkugxY9UaujiFsJ3CFBVRu6n76g6NniXtdCgkwrfFmeKq3c1H1Q3696NAcpcgFrBLzRjW",
  "key10": "CVHqfC8M65P8Ldp6F3HVAnZv9wQUgkAssJGSo5JSnhwaAMkhaGcU4W3ouvm3SCZKxEDRvg3Q9BPTizdGkwiXfnV",
  "key11": "4U8FKvde2PLcYPjX4cwTqVmoVAV3ihHP3p9wPYzh38PUsAWs8nuy9jXhFNZPBkotdQngr8Jsuhc12Uhf1bCc8qNL",
  "key12": "2y7oP783bymNXr2opYaWsTuKysA8Px7V9WZVc7CQpni2htddBkvExHi712vpGheFQRkMx4dADxqCP8XtE6MxqEmA",
  "key13": "YmFPeNevzdEDa5AYGJ6N1dZ2vWX8T4qobMwngdJMf7M8ApQiEqTvrybrti9XHae86ZfpkedKZFMiwZUvN4kRYZW",
  "key14": "3dbRrgJGbqZbafc16uPVLdVSWWQmftP2uRTvbDrrstgrfwwwwXUBry8eRNcUGELE4DZzQ8PDCNoQBAoqUrEJ68py",
  "key15": "3EcWngUNKytrC5TkGZjiKHPVGWfcS6rS74bRSfZxic4Krn1eM3qCNVHE6Qae5uX9uwfSZxbr51TCNv1r1C4LHHfc",
  "key16": "2i4xndUJnjc1NUoFpupvebjZWYMB6VzXP7mXEUyJHgKy5Ka65CwLYTsXomtYWHA4U4eh2Za6jGj1Gtvt1jfsCd5P",
  "key17": "iNRVFgJC4e9yc9xVV8ocy4KLAFH6xQswyan97EAgumGnigvseCqQvc1u2f3J6zWsLqwFL3ushAdo4tqRwQ9Xdoi",
  "key18": "499kZMZNs2CxZdjTsQM6vvuDYSTqKyroXnab9NYbq9v55dqDpT1ZRksSNjsJgCAphYqSF4T2ar9LUZ7BJrjmXDCS",
  "key19": "4MEy3V9V28qKgZqVm6FGskb1w4nPLYBpuqQ2EM3wh1sRrHUGfW3kdr9ZDupzqgf8fVE1yEc17ESAsxKZPiYsEKsg",
  "key20": "4wpYn1WtQS1kdETR4TWuZ81u6PC8xrM7tc55YfHXsz2jX6qYaQvEY7vMjHeYT9jxvU2zDkUSmJLfSYygid3F8GEk",
  "key21": "N4vhNHCV3HmZNFqhs8V9g8cpScDsKQuf7hSfEroz9xV3FqqhV4pryeFKHPRTA2rX53bUcoDZoaGfJx65ZPk65Hr",
  "key22": "5hWkPdqY95AMH4h3Pst8pbEQPiohctTHAWX66HHfxuqxM8TdRzdoQxogkgHMm5bqzJyyHnyFtozuyGfbMuLiig2j",
  "key23": "4RJDbc9LLhqbemsLXhe6zZjzysMQp8n69rMCFj78un92NDbGyXBoszyA2WDsD1Eb5jmPs5nMJNSLT7gU5uBFqSdi",
  "key24": "33AWr8ujjUvmmi9W2Jvm469niPNfDbAmkCAEbUJYvxAH9Vuyxa9ySXi4629huw4u2rbiNuuG2FgF18iB3ZT8YNf4",
  "key25": "6Er5Lfq53w7nRcyHJmEGM8DoYn6rw1FowuS1B4CjeC3cQwDNPp3jndiUXKhnceypvctLjdEvaFsW7ha4pnrz6oy",
  "key26": "44Goj65Vi119w4XjajhtgWesBqgHbZHqC24sAPgN5EnAphwHzxv6AXGiYRMXfpBPi5TsFcPibFbB6o5YoK6tBvo8",
  "key27": "2Y9XyqZw66FRAz5FE6QSEEXFNnkKqSNXvJWbGJ7H9y2AK24jHkkjyS6maHpWjtJzeo7PqrtmamQexeoyGTMNErXD",
  "key28": "SpTTaXkqCSTnPDLKHG3H2PBkeDtuTNoRY5Y69UR3GDRLNhcAoY1gz3hQrkzXxyFQCZQQzn4XAqxnProixv7JZ5k"
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
