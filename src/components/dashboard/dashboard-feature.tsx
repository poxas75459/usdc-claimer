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
    "5pjt4ihmRy5aW3HrZvUC9ei77ipJhczfxhXrfUj3mGpxLJhr5BdhtQRsV7c6gnsT39nBT36zhpsbx6WkbxAk5X24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WPDPDsxcviJFkszTHrGP3wAX5X8Vs5cpMLATKJhzZWSV6gnAhdLHnDY7aVubLmE5azv3RunPFYvBscewUBA9PMD",
  "key1": "45CsqYp5Bd5km6kajE54dxdSVpbkKjyS4evD3cApUDkj35xwBF1rL9XCfmwUk6E35WRqFga6eNEiveUCpWC9ZENN",
  "key2": "wub2sZBBeFWBVSjazbVGLyuLJoxar4eCcNipzDQLpUwYDzH2bLvHodgNV6zhXGzFhRFbWDzJwDMjZp7DbcywUHM",
  "key3": "5f9ujry1h86hC4jhoFeUk91yaCY1iof8cJgUH9BbtawYF9r5zdViGhfHswYtnwjwhH1fSS2emHo33h3kxyu2X5v8",
  "key4": "524cSkF9eQLET5REtRJfYwDSSZGBu6CnB1Jg68vWaAW8ApDEwC8aucTMWjnn5c8mPcf221VrDpeKANcx1ZuCdZQv",
  "key5": "5WwLChUwjcjdpxsgLjXWgYDXojJz49MZAnoiJVptTiPqeXrsjCigvnwG2TtTkVnMsCkW5AoJWqkvNpJ9ZdLBqX9T",
  "key6": "nQF3UC1cbhBYgXoHpmDtYoN4Sit5fyCPHDGZvXJwhT8V6xtpsaQJ6N6DGx88nNS54b27tb4Noy6yt37uAbL5DSC",
  "key7": "tySeSm7uGtLYbhJjeFoYc6fNACywzBteCUK5aUNwZwawQLN4eeYL1ez8XVyib35UDgmBHywjvULwhbUzs4neY5i",
  "key8": "54WotpTHuz3onfU9hjzDMw1esX8m6kYsyYDaJUBaMYkqUgbPq5vCvANjNUwEL4j7WvVh6nVuZUNE4G69Gu723eCR",
  "key9": "3TWVxRWAhces5nvGjgsrSwJGFUWzxYxwkf6GneCM69C9eaEuYo9ps3LwfST98QgZbLjsQgRY3HFmtbAhsTAuqiV3",
  "key10": "3BeNjH9DgaAmUvtERquing6pc1eHiFbf9nB2S3fEvChUUPPEaspepKkdAeg8QTM2J8KkZshgVVrKGTRREToEHSuS",
  "key11": "2s1Kx8i189GXEUgN6UfC6Vcf9zT154xPXCdpaAuaSF7CjncgrpLv7EyALHtY7wHAKVK1P6DwaAX5h5vdif9eHQiJ",
  "key12": "64KZTerHt7nMPRfr2qDFQKFuy4gSnM38VAsmeVHPFehcMzrQH4yeM4LxXnw7tnq8kEKNvuL2TR4qVXfZmY3ocS8U",
  "key13": "59hVRTZvh78fs37AeAFUfsqbK97LjQWuNQBsxAvbarKEK1XcV9GpC82LZwAX16DfRyi6dt1f7s2okoJLwqDPRYH3",
  "key14": "56hSb6waix57SLbB4QVYU5HXFUuCP3t2S5wPoLb6uySss3e2pMGBUSw6KeFbi7xt52pEumzzRcWgGVVGHXJ1Y7QL",
  "key15": "5fBvGndeg5CNfgQkpnPu3y93z2PiBxfyxwYLS2dtWb2Sg18HHR4D73jqf2Lp4Z86LTZTXRFhw9Lq1b1VxYzqq95X",
  "key16": "67SKdE29jqNUsN6HkDWrpCSgNWtY6knWTzLCUpbsTrdXjN6G49rTc4R3Vxgc5vKwVyWWKvUYYJ1msjb9FssingGE",
  "key17": "eYUxJdYKzDLya7T4FatLKG2ZNMSZkajAubmyLv328xmV8uEfhD93SS7FJ2Ck38g6b4jirupiG2F95QNRtk786kv",
  "key18": "4P716DJgFNHqWRTUZCR2YmkLfZn1fu38HFtVwkMajaVyx2TGDjeTpuQDmf1SCvWvJEuvJGvDPovLhCTtKKYniia4",
  "key19": "5mwbCiBAc4CX2KUafobem4LUXUEvoHif9wL2jEa66bswT9gPjsozZa4H9XFTrSAEPcSpxPwXuEawU1awe9S5Vgth",
  "key20": "4fWqKePLmo8SZgAqdghomo2Evk4sJ4VtXakSpNJEx9y36wzSsEfdfMn5PDgK1NYkfJQMsX8MToCWtchCG1NnjAsq",
  "key21": "2WGqUaa15ZrtCoRgFERwuVLeb9kwUGHXZAM8RBftjnuZbgiVgQcjBQZuzxCbFguPHx1bxyVzRQXbDXoXBd1jLyMm",
  "key22": "2Bi7WyAGXFWbNJKQc9uEB8DR39uy5xu3z35zuwXQgz8HJoLQngAy4YbiiqJ28NJ3oJF6ynjcCkg7A2nFMg8GG8Pv",
  "key23": "2fQPpYsi43M7ViJWApJGCtHiYkSbsCPgedLcpu8T9YHh18YBXgSoDovTv2tKcD4UvadCfDT6Spk5FDiJo9TNxZc6",
  "key24": "RDc9FdfQYaYt7GfTArxCduV2LcvjByoYArBjjr5fqz6PGST1wY3K2v5b5BuLT8jU7WSKsqHWh4tv5dGZ1meuoEB",
  "key25": "3mAfX2RPehdiNGuth11F7EttZgid44hSbFkLJXsdiYBtdG5PMkCdUSBtRrKXw1VLZFmgmNQ4Begb6saQbtnQGatM",
  "key26": "23GMdN7g6N757wsJXVf2eSf214fqqF4H7kCa534uz1DuGkYJBTHq44YXRjgBA6yXhSeWXpSTsLBCx16HBum3oMCS",
  "key27": "4mvvxS96hEwN3jpuHFa9PW8LCsbJ4srWzukCi8Dgt2TTx9Zg18nv3VUoSjnJx12EYT84MyVzCTTi4z12QsvgxJyE",
  "key28": "3JVcDngz4v1aJso2BKwJsJMrmDqXeQrbvhGJQsafMdRThohRVSyxtAUtwvTyGuyMM359ynqLKeCS1UGa9DB5c8H4",
  "key29": "5AQBczVjq8B8dRPkigcdhe8mWoEX9gyvkRuEL18Chf96pAuHi25Yss3XKTD2uA1jiGFQF4uArFevie4sfBa52Hh4",
  "key30": "3YUXbSDxCGw9yvjNL6RCsDyyrqwWCrphyrNnUMzdGwRJ9KGFUiQPmY6uo4FLkNomXibM2jhP76xJg2KeEE9i4rU1",
  "key31": "2oGgid4pvwpjhjDShP6kM6sDPoAjBRaUi5xWzq8xdsK6ciKMbDomhE91iXCakvR83iGGMRvJ182kZ9dcrSxVLB8F",
  "key32": "9SFy2ET2eEgvHnsgMRKiURreusZY5r2e6vzGuE9NXz8mgbJHnfW4LDzZ5KQq3GpLfbpU4rt3sHs1KbaPH2KqEeB",
  "key33": "2nvXnsMjw1etQcRXfNFHcHxo7qYtRwmkjxTR7sAGhPQKQZVCw83bc3kD1y7j6YS2wi4BzGjuAj95EEMTUygomJgo"
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
