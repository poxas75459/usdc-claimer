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
    "4UGeE3MDLkiTUG18YTq4wWSGE9g2HkiPPiMGvpP3ML8KNmER38qdf6ZwXZgLwo9W4zFLZXYCGqv4sJW1oXkNnU7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xdj5VBfpnsrXdzJDKeXa6tqv7Aa82Fg3gn8HiSV3Rexm6F84C4uo25L24CfbNQ7Vi4tcoWzqkHun6UUdwAjoB3x",
  "key1": "4CPxuEmn3Aa5HGim35mYUQBnUV66VfsRyX9zpjLSmhvtTACBvy2HcJHbuHhc5AboG2sypY1EA55oXuXwvbD7wbhk",
  "key2": "4zRSNxYgGsr4CMKpGsC3WCqQEPqNzBjxKdfgRZLhQaTdE7tjCBS7GWpbxwB89o4KJSKn7Cb4EaTuJasfZroBAfxt",
  "key3": "3Jbd4CWAc6ZmRcA199Y8RQLn3hHUTNby1rzJwoSmSVEQWwYeToXAS58cny4qZrnaR6gejjgoyJr4ZYg68KM4UKZa",
  "key4": "5zEBACvqK6L9GS3QvYzpPnNsdaqqmnGJGhjp2kDTY5k2y9zc17i7CqKEP535WRXTjfeWQQV85ffAo3sxD3BFUMmH",
  "key5": "41fJWWgFayqz7rgbvUiGE61gB3HiMZ1ZGhx2EGimULg73RNx16tYRwoDchCMthN53j4E3QMA6zhYazv7uk2xPyKo",
  "key6": "E12ikMZoXNFU6JZKGqk2if1mJSnamu2BhNnQ4JK1dMwXqAEKg5BY8TnH6U7KomeiQGBv26dqGmDuV1Lsf6MJWP4",
  "key7": "5KDW1ARgnjL65ooMq1daiMcWxpYncuiMjW6uPFYriKTzkBnZjVRU6BxJ2UNBBDe3kuoZSBPLWTJ5FjvPXYe592Gu",
  "key8": "NT6M3ro2gditzdgiaNxSD29mst584n2Q5vEBH7j1cid9dFgpmupxhX6xYjvnt8cYJbRX1kFNRszDsY8qnoijv7k",
  "key9": "3UqcT72rXEKu5Fsz4r3Wek5NHvchGgdd8Je6iYaQtz8q2Qsr2iMrUwj1yDEMGfAVpdQ6JPhAxTTk41mxscnEjf55",
  "key10": "3GKLbrQh83Lw7D891ocJ9pK9gNveHxTExmTTZWKmpogSKkrRT1bv7FaYrNk6RMDMsauGzXY3vKNKU5NNm3dbW4Ur",
  "key11": "2yNpSAgqFfiKWvn4KoHc9sxgfBESTg4YxtSmQt44DVCEmqPFfMGAW2byaQEiiJbHjWZxiN7BZLwiDiuzyzqnacGz",
  "key12": "4Ym8tWReaaiGdgUmqP14N6rEsZ5x2L5yxcZdj8GHvhtw523XiHwxaqqyxXyfG9Tbg5Yea52a7uv173Ej9nKrVTpc",
  "key13": "2wKjZHcCKxgtv9eGwfdAf6wW7ZVbCMYSAebKrWRVDaaoeKB8Ye8gjG8SQS5TvuMBPExEz8nzKdNwvt89dBmw5ZZH",
  "key14": "5LYidZHZrHF1UvxSpuvWTeHTHkMwLPqdVog2VsGCEdSker3oWj5pwiUA3t4U22SqZuXNP8SeQnD1cfjUVbQ9a7Ae",
  "key15": "3PUJaQDUjoFv7Hp4F8NCcHMDVYzj7tWX1zxktgMFrcZYx542mTaG7xoSHD2YjFbtv14A5GpcWwgkjRHHPSpiANRq",
  "key16": "5Z543EiFpaEw3HtiieQD2GEwtCA8whBupkrsHsPhm5PQTUgAfmc99N8pCdGkJqUPeDfGVSCttEjh28RjHm5zBxhG",
  "key17": "5WrggDPFGPGqtTQ42ku5bNfxGBqhHXadHR3yXe2oTjtwJQqJfJfxau6yjGg9Ao4VufAVG9JN5hzQ2TG47dNoMEPt",
  "key18": "2bpHdkWb5aDxrW2BnC5xn3xVuREz1SAq8WaKVjaWuTJMSTNGunq8uhfComWyitZGK9BwAJ6sH8kRit56UpHePkLn",
  "key19": "2Yry3sLQUaXMrHEBjA5cChkhFJdHkeUQ9sBQu7EFJUxmsXe8N83b8y99Ddceo1g7x3bQZM5M81PhzK8o4T9brxex",
  "key20": "UHe1w62fiYWqbBUxFaMu1RZZAoZhK8Ky1dnZJdk19QYzw7j4GVDDut1822svuSDM9BWX26JRpsCZzPhYHLoBeuu",
  "key21": "3NKE3k52k8wuAe3sXz7uBd5sHDp7aWyAXG7Fn9aWDBLy5LCURc2bLebv2yarZyGToTq3Rejwi6R12iWvE3kuHCpP",
  "key22": "3Gz1NyzQhGeVXDhUhQPgWwDXsJTqEwzoVyXXNS6sdUBDofkoLRDNU41V4MVGRfawdDek4aiB8i64juk2whae7SzM",
  "key23": "j27pUSb54tYJgKTxqkyQzG2kW3i8YLgdSuVP7G7JJYuAGv6APXfehUueDDsP37j2hkiJfAeiDKmk5zcGsv7Np3s",
  "key24": "4ZztASWUCgaAnCWuLtviNTZcCBytHxVdcfTaNJQD5VdaxLhsHUj9vk4YV1tuazBb76a6EQeNFbCEDSNn5rPHNvbd",
  "key25": "3Fm9pGEWz32xGEHAJs6oK1cXXfitrvvyGpmt4FSzYEPtvan6fHeHmbVtjMqmvLTaVpAchiWsP1FsWVh88K1iko1Y",
  "key26": "MEePJTWj8Vmkutc4LadogWTPn95h9LuXvB5svycQNz7oznRUzRw3VbZjKsCk4LFWHPVjcJwTc9JV35zpxNGxf41",
  "key27": "66Jc3kCtepaHPngiEKVAWB1PaZ6YrRX8hb8AEGgDB7Zg6Dfn8rjETEhbK4xbrS4fUho8vXZHe8Aov8SCzN6qQuhy",
  "key28": "4nAwSN36QW2kuhuvXfgFxXdj4WTKSZX8GN747WnFhXPoAF43vA2LJoNhuAjonEg5TpbvE2RkCo7JBSP3ChpBdFFN",
  "key29": "2WaKUEpJkD6cYnFa4VBjGLXvHUe723PTGhVU3Et5Q5EucnotZk6KSL5aqiKtaogsBib6Qn1V1RvbnwPxXmghXJzn"
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
