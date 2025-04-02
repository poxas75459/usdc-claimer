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
    "2EzecAmLavqnnBhHMEA9ssixENRiXjroyRdhy76r6T252YQbFk3xLdLqmZD7DMpaMjB12Vv8F77BfuqPKNYrRTKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWxiUBPXESDdDBS11wbEFnXXdEpWunvjhJHa4uLccw5MuRa74iuvPWLqGrKHsf9hoB3m88YdvpimgdcFJKxDrY9",
  "key1": "3eVwBFhuFmK4UZVbJsxj4LWXC2xZM5WdjppgmHPDdv2v7a4bARybNU5SS81k7eS9yPL52UR4CAQtsiCLPqxpawst",
  "key2": "F48ZcoiyehhddW8iWqJnNAyosuFJxVKwxDZq4PTYpH4hSjbx7PvAknNZmHCCwpuHh7BhiXTL9rgWxWRW98ijWpd",
  "key3": "AuYfH1bG1RpnfieSu9snspdoVa5x6h8sDy4QMuVeBKcuMuMY8ikZwTFT6rGd1ZZLFBUue9WG6c8whSjjdxokBeQ",
  "key4": "2ofMYHh1ceqkJ2PZ8eBoDhiSKyCCjHZvie7uxwxncRJJS65kH1RSz4TZ7nzWkDPvAe5BMbmEDjqNBWFJeaEWN476",
  "key5": "yn8XzpCXugfuwDDj34box3RraJDwxh2DAyiBT4AaqYFBS4CDeY5QjAeGYiigmzf9uA4p4VdwK7dXqxDR1B81chk",
  "key6": "ookzTP9KwhHKhp6PuM3gATZ7mu2vXALfMDHPzpfPcz5EYcT49sA2GshZDMEndipb24g6TF5BY921VJTFpAo8nPG",
  "key7": "47i1kZykuxHvPNQpjNgtc3iQ3XeynPxEaNhQxZ4gRK8sg3NNwNkiDcA5eaaRuWD6TCLuc7ijw1SHfE19NawTaY3r",
  "key8": "5yPnP2KjceEPaGLXiUMYHjVwkBK2dgXK2zhuoDDke6LXt19KJkENLuZuHxyGfeqY1jhK8GQknwFwvg6cRErjx4hX",
  "key9": "4MwDyubxSLfZCx9xKZMmyPUHAGWKoLutam8MjjReSbZYH7DCrCF8JRXS1bfPYebD8L7v4jhE1w48KwofthhQExS4",
  "key10": "5jFSPPsNHygERtHRSYZ1GZUEntHBv7s2txfV988o9edDbErGEYx3dSGYwnnPVg256XueGfriwXE63mr43Q8pqcE5",
  "key11": "3hsXRwpMhAAM15irPT1ZQLDP96x7idfKh1tsUwATFt1vQBWH5inwa2sTfp54nq5mdLbZa7wssUXDpv5CHVKVbEmU",
  "key12": "5rEx3i9bQr7rZ3nabg1puPND4f3D5FfJnTW2cx9iLZTCMqzDbCDCJXegq6jJeoxaBBdaWwgVN2pj1GYVXysyjghb",
  "key13": "3jrAdL3pwLJXetjNZvP7ScJNHgNbjGvo1RL5Qa9zfxYE4tvXdAPaEeZMo6Kww5PnJkhG2MLhognQiLhZ3oLfCrNY",
  "key14": "3UEPQqxHrtfufKMAyAmYbr1swWuaqJxKauTXeDgaxHeH6dNeVPzUq7XzTbDYWpgg3Qfe18CXc4o6Lm714gAXnXho",
  "key15": "22LCesKxo1adYY8NmuAw4aSSib1P5mZqE3fhVsERPDRmatjDZtb8jMv6FJsLPbDa8wjAjYLc6AfxpDsGSx4YmQPM",
  "key16": "5nESunsriFvSJYhacCiX7yLZWnJJbYcaRcy2DSZWCDFcvLBYKpUwzTd83KiqZuRkc4GRLfGRuMJUTqf9AJya22Xn",
  "key17": "2cqoBZ5Ue46howkw74F7xdcAE3g7XzVdoLeg8gBJKcVREQtDmGMAFow2q4sJKwpD38nTKs45xL4tFMCfgBDC9emM",
  "key18": "VuGjinYs95U65NUBYNPq3MDFuj75jwFw3J8jfQonbf8cr3CTFaWBQ588ADCH2TtFKAv1j4w5h1kXzXRuDrdrXFG",
  "key19": "2FWnw2Ge6aW5c6b4MdGC1NHvJe6WGUxnCH2ogcHjK8aswfoAYRM7i4xkNY13QpZhSUF8hYNAvThM4FudptCF1n2W",
  "key20": "3jiEqCDxqBsDejHCWCQ5i1QoJNiYkQ5oG2QZcBw8MdHPNQ4HMkphFHkQ79ek8Ujzf3oVdNyJYow4EDRE6k52V2xQ",
  "key21": "2cguAv4FedVnjijAgmYMKybbH29Ph1ZDpja9HNQ7o7nMwUwErwLmX94bLpjb88fHTFCdT7hhBh1H9oHcG8MqMQkw",
  "key22": "5b128hAoJCjdj2mdF6he7qBPZWJRYgpo6m1htKL5abPdufkWx5PNhF8sQm97xqx5dusvvH5gT4WKdFXPuypUrtdR",
  "key23": "2Toe9P9sUzfQx4y2B5drv85ZoTP2BrizsdsYopt9p2UXMxpuHzSk17ZJ2M8wGuYXHvnydZqxKKKkHgJ8ck2EfvZF",
  "key24": "3xvPYyGLoEKziS21JT4TXniwUyYo9ssFVGHaArAgUcsvsX3QAY5k2T4H7PiEb2pQPWqcpCqWqKY9yaLEchvXjVfT",
  "key25": "17KNe37wW6sk4JPCzgVBf7KtAf9ECXhYnufZ5k4jmtkeDpbfyyMe432PAEJGZ6MtDp4aEtAbjBmRokRoroWJEzE",
  "key26": "3fFnKco3epBwKzWMdCpzQKoGVjqZAzBsFNMYGUGERuLVcFGgkaNmV8ct5SqLkcZbRDB2XrnuSATK54jqYGQfZkhu",
  "key27": "4ZUw7BimfNzqP6DTgHeXikwzuaHeUyDkx5KPt7MoeVLfTGpVmAGtDJCudWoU3Fzw6ERedNvWweBmz7FYnHu4uwHz",
  "key28": "3cZD6EaECcgaprfgYjXNpS6TVkFzjNs4TJz8qHyTxSZKbbpBbvEN3mJi1RaUgmjwvRP5AeTLqq1ZWJYURP7yfRZE",
  "key29": "2t96krKs46vdPCdbYZ6YmaXK8NLvdpiB1V279dwkvbB5dwNfrAUtLsCBT1xvkfs1dDtCJ6wDjgkkTDCMB9VKHTds",
  "key30": "5Lrt9CKBZQZa2DEdWwVSmZ9pU9sYHooPxExCDm47oH7dWt9Z2EbxNMCNycnNG1twTa9PSUg54PXeUPUqqzdfLw6A",
  "key31": "5KEkPzetxFAYCoxoQ95uHsWsCXJwwqPxGY9Z4EXhHdCZW3HYaxg2g7bGP1iJ2hVD6CVcVUP5eE4q9C8x2SNt9As8",
  "key32": "3ZJ4jSV6wNyyrm2RhYjcX68vuo7Hw1udCpZyKUfMqVc7dWm3nwpZsZYm7ghVvxfuxJfPidxQeCNjRipVQi87Ftjw",
  "key33": "2hSgSS3LBdPzVm8pWN66KmQW98zKWdrrbuXmW14hEVrqMfAZkruTSKNfvo5HRNS2kEYpAKExq5DQYXuG9MyFwLmw",
  "key34": "3MzgGiz4p9r73UPinYYvdqY9dxTPue3L5P71sxLVjGt9yCAoD9XM4YF86AD4XradJnpEtfa8d2APgLfmcLvLVmXD",
  "key35": "5jt7FY1k1AhrHrmrnxzkQGPahtVnRrNEvtR9EqXGe9KHTCEv1fYjQb8xi6pZcTwAMMNktfwevozbv4WGDUm7Hy2o"
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
