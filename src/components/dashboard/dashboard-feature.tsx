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
    "veJzQCYu2Qj5aXknDqvzcqDMnyMZohhGr1a4tJSY7rjw7M9raFKYYHHJ1soTph6c2ikCSJMWZYP4j3gHdZ4Vwaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSCgfBR3ek4doTehu9x28AuwrEao1U6jTMpAyrad4x9mJSDbmVC5FvVhw1oygB8NQKzk8W4bqi2fxPa4mENWKxe",
  "key1": "4JbAjsqrJ4fB4Lh9sX4tXhdqNAfznW2sWmaLh27TWLsKfqSJApRiPxtijGo2M6dXsVZAJMzGEW4VQrc4NR5AoQjx",
  "key2": "oKAjPnnwJKQPWXZArDTkMnC7AKZZnSLvE3ff8JLPuaz5CFh6QJFQDt3YY8tB9F9qRia1LWgPhgkBnxf86rboAfS",
  "key3": "34CRCzzDoPtgYGAzMjrW81qAGnptqLn6shecb7X9yWB6FZLGKgQ1rZyUbdM7XNFvg5WAY6v8PnounqMJRE541h79",
  "key4": "ajbKuYzwQWMRmcSbTN2C6aZ1uXaM62SzVXnBLeeX9QxK4bMBfH3TkMfVULp36T1zvkf1Jifp8VXgs7ycpwj8DVK",
  "key5": "gug42uC1KL5sBMfNnmGVQ321rZxZYnG86EazNgztJGEFj6uF54mSVzsLeNYg1xrYjSAB3vTpZFd68zLFYZhk79E",
  "key6": "sDjvsxZ9SWzLujG5aREKaqf8MYahc7V8GQkwVaj43D896e4PQc6Q9d2Gj2oHtHvWmwDBkDwYmF87CbLC7qozec5",
  "key7": "64b2U8wBwhJyhq8uj585uHsVVqd6z9Hoe99vLuS4MJUTRaa61apwNoWwR9Riq4PYhzhkG5dUY9yj9hAPWHLFsxEq",
  "key8": "3vibjAMesovK4JnLmrQiMyd1BYjGVCmg34hMG5jyhC5XXCKwHj8gimbUqNQcB9M731rKNpcpeA83z16QcqCj1jfy",
  "key9": "5DdovWSJbh9ppnRgMKcRv6cFE5m54FhkvuJvirnFBhGg1wpa3xLfRvZCDLynqXprKWNHNZZBhwWiHh3RZj3YZ5Uq",
  "key10": "5dFHBfzvJExibfLJFxGonpoRLyqg7qb1waphR1td1U1RKbfZX4aTyseXhs3Q2HGxex2YVvnx9houf1nb4jvs4caA",
  "key11": "2gbEr9psUd966U9aXXQA5i1q3XTHRfLC8pbkWJP44SCSjvDSvZPrhDt1HsUF9rZdd4NW35grDrXkvCkwCVG3MF3s",
  "key12": "4z12AVWtvhRinfJ1YixY4c3ykDEx5LM6GaFUPCEZMhTyWTsdmnFAxKgjH3Dh8jEwEQyCw2yG2U87YpyMw6vNKRxa",
  "key13": "5QL6zQfAi1odJB5koPRgmtixo3qZ4AEsGzQkzgucSB6fo9yT1UmjYkJHBuWLAfJTMGjuZJdvnAmR3VfXsLgGvNJp",
  "key14": "GNwatdxEb5kxpCz1QL8fXktzZaJwBkgFQnV6hc1x21aPKAmLe5kZa8b4JQGTok4g23R3E9qZM3qWz5e9dchUTrW",
  "key15": "2dkZy6zrYrrivCLuMuwE4fhTaEDuocTXbRGmnDX8aRjU7TH2zAhft5hsnmVddN6TJsRmQynvhDDahGzAdnq4rV8x",
  "key16": "53XnFZFKehkvUzkGSRssghjBSYu4MGi7VMp2Au7BHUwqCAEgG9gVRSxGHRt1q6zGmJCRhvwhFsL9ZjW7c69rEtEy",
  "key17": "53Edbfq72fGxtfWmXmPBZAo35jBQQ2irMFGhS5MpNjNNPn9HhkLMjCdFuJQpG4HuNvTQvMUeZfHzMsuaGCP7JLX7",
  "key18": "TL8jyPkTjFUL7Bv5xthZccBM7EZU6DDKaD4XDKDAvW6fKCyPu5kMQ3cdJoU2XWZdwpi7hnzTwJSa2Vh1m2zQ1Aj",
  "key19": "5TX2ytAouSpDTpiwCgTp483GNmydZNnACptYGazHyedk4hDNjzRbHkVJGVf76cznkptyJ6QMj3gXtLXKctmrBKS",
  "key20": "WsD5Xdkyp8USpS7FfecHChFQFAFrJtji6SwwyLJdidsuZMGugB5ppMGqqxfE81w4hUNdxfMGBLLSiMTq14xULpF",
  "key21": "bZy1Yvc4MjKR18S9XLZ42qMgB8hjYpm9JQBfAqibCtADj545MrtB2cu72X6esCKciFeqwj2dFebpNwseRd8gzU2",
  "key22": "2NRJfn7PAEMkJLYK3y3RLRgYWcALe6NAz84yiC7nXVPtqWmf8x53a7eRQyQKeZFyX6Np21HByqDuf7kLFLhS37eK",
  "key23": "2A2MgG7pqZtmfKM2L2f6rrQfQjKEQMyXgo8N1LUBKSwV7WQeP3jmYwCuzan3LsYPAxxzgKDvt5iztaKHUdzBkWC1",
  "key24": "4zYXJM9PwCzwPNi7x7Ak7JDAsPNRAYN4LaPsUj1KMPRZSZt9tpT1hLuPNNxatP3sDTNugtBjFWwayrUgfUaZSzgQ",
  "key25": "5opaksSmbBRS3gfR7pwZ9cHVpMwHqsVAzgidCbVdanct5KMEta2GAm97sUAWPE4S745YKwxTYhPP1RyyzohLbuko",
  "key26": "3ksuo9B5BFair2944agbhHVDxmGzLd6xgM4MELFWLuCKjNaRDqhgsHmX3VPWLoGBGuBy8htgjmVs9rVwxTchn67G",
  "key27": "2XAJqX1cgSN7hojR5Ag5onxH4CZw5qUwR2Yj6jJHR1kYECcJp5y9zhWchrfNDYo5RnbqyJfts5N2JkVpwKDnG1aQ",
  "key28": "3jHi9n1KJjwQdTVMp8dxWQwmbK7KtnAJPiNX3RkNAfyano7imx1sR7XPkSTuqyjaQxaUMwK4BVBFHaQq2SgmCNQE",
  "key29": "32QSphYx9TqpnPXHEyGdsqxLMiuAfaZFs8E3bYkxJDSPYW1zK5i4kavYU5Faat4ajsfTzsgKza398PTsGzgjDaQM",
  "key30": "3BdxgLF6aUj6tLF5A4L9Ca2cUucusnUHB2fXnhxpFXU821M7CmQuPcDa3iaoyX296uLKqznuGksT1bD9ZN1KAT8C",
  "key31": "3Cvj6BGirciZJ7b4hYejB7ev8JDhQKho5fmB7M4dggYLrsEKtMUFLBncd755txAN53NE3MtKebUzWznjg2WGrrhf",
  "key32": "48ANqJvTGMMNjN7xfPsnDrPnzPB4GqfeMcfiK3t3Fy4H1c2uSQBUJR7eXguRuJA46UpPZDbuSH4kAEtUUSEc1dLc",
  "key33": "2naAMRBUqgyRPCSHQUwP5vmdL6dgep1fATcAC2yNddUk4GMt8xcGFZdorPyPVS5NDY4XkLyND9XDRacD9CAtJvGB",
  "key34": "5ETznJxAnUtb3BPRvt9mhoJ1733fg68RkC3TjWvVXxaKE6bnunBf28qKcnuSEGMdXBw8ZjweG2F6RKqaWBeRM1hd"
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
