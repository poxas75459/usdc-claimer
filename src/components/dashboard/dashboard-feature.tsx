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
    "4HwdEdexqhRep3vzYqoGQirAUsYM5xgCqFErUAUrs9n81TtguXHWuQ1sd3DrWMPRw8ywhYJHFSGNEHfDF5LTTjNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ujdLh9mhWbazSKRvyTeChWhfQfwNfLwVMt2pDRbZSq46Fg83q1vmbGehmYAgqicCXBjAFdyasXgEsWfCsm2HePq",
  "key1": "3FDQ2on1CRXrkkc9FsVhmb8Y4YEN2xqfM316h9Ar7WTLP7aq1CJe2ehj3AsPMNCPPm1E2Z18WPUHoM5z2ATrxf7",
  "key2": "4EHnfEpUFi5YjGeq7jHeGDT7a4Txb1Cgr7BoqPtqBqjuELag4pyvNGRh4TLppj3aYwTZufX46h2AY5bntWyvSXR3",
  "key3": "3ZDKBKVcT21ByaFStsSdnTvyNJgYYWfDaZ596NPQAW1tDBAbhDAMLtu4uRQDqYaPBV9bkEad8WYS6X6c67qaaUrr",
  "key4": "4RQo4H87R5ujBZzGiK8B53xjCAsqwBWcXnfY5pj6S6YggvyVDPb7QR4Mc9jLAgGR8QzYZbcG7FeHCvC4qJQAEith",
  "key5": "2nWsnw4DsMDzchQ7BFsRNRE98RNkP3pzHLmSFbxp8zMu2RUo5gqwJTwqtQ9YE3jtWKgS5EjE143cJocGVHqVSy2X",
  "key6": "2ziiozra9QoPHTUEc9kFRHt46LUopWYubLfsSa8JjTJoE5QgyuRc5FZDwCFeYsQc4jBPFQMpQweHqEnSPAHYBN1T",
  "key7": "3FqJhqni5SXLoQDT9WZwqUJ8zM1humj1bvzhzou9DeQNRa9DZXmayExc9ndnjbp9oggGmHwBWUZmsY2oXPrSqX2k",
  "key8": "5P5dArtqkZthmK6zbudpG96qEyQmwk75DKhehtKmyNWwdycexbykHDqY16MccqenhYpzffTf12pfWJ4qfeib9ESP",
  "key9": "3vvU6bFC41AbHtP7PrxzA6NrQisw2USxNgEx16BBTtHi22ksVHJbSovytCVPx6Q7sdozHBbbWBt7C2BX6Nub4WLy",
  "key10": "mo3BsSyqCBub3HKm4dQ4xULXRdoFUAo9crYDVCw47SgeGKqjAw7yGpG7rfNZ95rhtwtYzVywHKkJPvmcDAmXb5j",
  "key11": "yZtn395nD2gnHyymEzEG39t1Ekxiy6N5iR3Wkh5JQRnVHhd42k9VhoqskoP3LvkUf8bvkzy8SDkurWKUwnPb8ru",
  "key12": "42HPrVrC4Cu2ppjvhC58e7dHkvz648mtDQ7TVqX26JdH6hVGmkg7kqFH7mqqezGNwEewk36HAyixhBxfmi7NnQwL",
  "key13": "QHE1SZV6WJhaNTQKSEkgM68odNdk7QX8kZgyetsqPXxw1gYUoUPw5FxV7wg79hHMxHr8x6annzRAw9iZA7GQfNQ",
  "key14": "5JcwY5kDQNiAkBCUVu3s4GPnYyJBNF9pvs7Zj32asqRmG5RDh6ybC3Z7n34AscHq118VAXUisCLEKNqGqPg43b7i",
  "key15": "4mxCUU2YJcNmTCM7UZnHRGnFUPPgCNiys6nYaL2wQYHkafpGHz5kJAAiTGmccTpDUPsuLXpZn3J5HroMZVMDZGvq",
  "key16": "3a8RToRdsXNPbpg5kTL6qeC9hqoKXqbBh7pyqxn3ji9aDqs6DZbJbfPjbmemBqa3rxaKS8CNbaJZEMJj4G5TvSWu",
  "key17": "25EnUyvZQ8fj41JjecXFgeUTmbX5nfrVk1bhXf5dSrHZMtoq6sJNaU3ugHHmJzU1snX3U7Xisxv9wzkmaau6kcW1",
  "key18": "4vYfejMZMqCGhzPnoQbZ4akqTJT3crUdrtjhofCiuihn3rSZYfeA5KzcV4gsDLAhPi5Jbqe2SGBcwwaKGqKYKWEa",
  "key19": "BWDHNt6gVYAnvW1QJ4yWfKRzjmhRmMV4MzpTVkcrUWXyrMnPkNg224mWDF5LbuSDJF38FFEcan9eGPmEgtJLWum",
  "key20": "3U33eKn1AshVX3NKSwvqskxYLKY7uVrj8RLFmf2P8SGUBrfcgmxG58ZPrERLpMce8zifWafJSM18dWNioxB1w8Cb",
  "key21": "27atLu8W47Egm65f8gTCus8r6eR8gxxtgQv9kVmsaudmHdESSK1XPvjJeC8o9fNC5BKC3VJso9GMhb2Tg7kzfQg2",
  "key22": "4WPnQE75u7AS2F837Gi46YUcpWvH8EQtXPdGHwvLvasMtCShjWzdaXbEFhBijfm6hywD15BAFeBki3DccCpwuSaw",
  "key23": "2Fiwv9FmDYY7sR9kznz6jQ48e3QHHiPRk73SumLrkJAaBfGDVRqThxV3Q3mzAUC3NTquNTu1DyCgx2RVJauFCZjA",
  "key24": "5FoZJJ8TKMQVveJCTUdMtS4AYgczZBgXqDCK7BJDL7Hq8z3tvqwsNbSUU5TJAMddon4YwRg8nXNC9UibM7VMZU54",
  "key25": "3YYkSGJbTatjmE6AJ6zPv2eLDZhfuxYPg9XemxVNRFzsCiAQ5WiYESDgswb8eLGVwA8dDJmSN5Y5mv5zMu7pZvnU",
  "key26": "ke3ZJTLNaQwWL4PNdne1rH4wR9uZQp4sHK1dFB4xhxowxh2BJ7LEFNXrMHZY1KFyZ5YV87Y8hhBpgrMUgorfCJq",
  "key27": "5A1ycEgqtY26Jgu9HgJ9kN2AFBymGceSJFQBeG9RYYhNiM33jrN7tUqmDi3bMurb8wae21wrvGNSZTqFqbERZj1U",
  "key28": "4k1kyqbNchaT7nnmw6p6teTMByYLdhbF54mnBwDRQJQsjF8AHYnwywDBhJiF4PpWwEyqEJ7cZoGAta2jjvWZjRMu",
  "key29": "3pEsChLQUWbmjn1hEENwbBSRastm3iSVfPevns3sQuxnr8JqBcWEyttzFu2HrTc9CMRG55eCywXszw5wrRNrpZiQ",
  "key30": "5FVYSVDXyxdxkUDiZwYb41WmaMLbCZqBKpxajdPqPsidZ8FhfKJyaPaq1YKVZYaPiqGmqij1CkVv2K8wBLSNSsGS",
  "key31": "3Six7jXQh618NMGs1CHBbDax8D8iLivXJYDDJsyx6xWatCG9dyuEjWYBaCPAhipKhJZMNc5Sg8UxxgFi9rECBgo7",
  "key32": "3QgdZfRtZnRqEsejpaRbwoLZBYwP2qHESNgWQdBtrnmC9h9WmTyJ2LDRzwkPiNVpVZ1vqNNp3T2sAo7Te4Sm4opQ",
  "key33": "3tbKsfbLRAANcFShsMAxzoD275xCVvEVcBVfaMNo38bS7UzZBrQANaiSQ5jqU38uamw3QgauB83oTjMRaXik2Jvg",
  "key34": "2wumKaYg6VXo7L8hrfrizgAgbugJaN1Fjiaco3hoUiRADJjvotT7Kt3t3GpRnQJdGUVvVakWqfMt2hEhTZ4xdZ3b",
  "key35": "yhdoPN7FhhdoXGQu5B8qnD3SwnpjBifxiNpxZ6dxUq6im1SYVyTHjfJiXezLK4jTTw7AuDrrLyfUisKAFWF2orf",
  "key36": "KJj6jMs6n4yH66E2dAb9sbCeKHcofAqjPKVmxb8pH66FV3eVfdSLRXmUDatpg75HKfS5ouXCX6H3jRHTUyg5eoM",
  "key37": "4DaxURM5oHuA46thzEF7by2qDEHdj3CT8jAQwyqdFvKtYRc98fbhP8bhyRAjZWFcypdtCqnq9uc1Ujbu1dWxKEdb",
  "key38": "36cdLUELor4M3KUEWJJCtENQsoxPQ1H34ZoMbbJyLJi8CS98iP6dUnTPEgdbTEhy6unjk5t27bYrTEmPLNRshxQs",
  "key39": "3mooyUL3kUzQpykF3Zgh7ADEsXv5YgSk9ndu2ethcbWcjUNWdRRASuYJKykdtTGA754Q8o68eF1PAvY8TY7NnTHT",
  "key40": "5xVGt1hHsnuJ5fjYEJ3AopP2iBiXjus5FeS8DRe6E1qiZGEmH7JQbYMbmRbSFQ2PCdTEt6Jbvxw1nKdQ1uaxAGuc",
  "key41": "2UuoVqcTo55GC5oHubqF4HiCyPQfHhwmxsZkCvHBQXxafKX9d73zpujaZ5Y4Ro4vYe7t3Z6G9rJzANDzSgSedCLs",
  "key42": "XXs8thTDq327ZYDNMeV2j12J9Laq7GcyAJeCbVgWEufCzweAGSd5NVmnGJxoE1seJ1mXLNEoa4mcsY8NUZuqMyX",
  "key43": "rL3y2ZZSYKKh86787uAFhh1hUsSX7pdXfi7nqorW5NCeB7xMFPNn2JuDPMFgB8KTWDaiLYBHjSjwuNrKGDKM5zd",
  "key44": "4jnPRCWCSfpaZ2pDAvXaUGjZAPrJ72cexiCd74DaE341uvFhTN1QqzuvgUxC8xwuE85HevoxqZKT2Max2aRj9N3D",
  "key45": "66X63WM5RtDDBd4bEHZ5erc2Ntpe3zf7EUSKbU36c7eCo4mBgNV1cdwAQfe6g7aXxWVg63iZJtrgLS7exabLsLdT"
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
