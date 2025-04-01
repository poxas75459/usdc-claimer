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
    "4SmPCi1dWfA6H2HD4WUADuC5LVuFH8MBtVP5cUrjDKKyB5Qv8WKVUDCCJFWaRxbrf4G7GbfKgMJxQhjiTDjomyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xA9NJ711FJXKutz5ibtEQqtW5jxXRUY1f8aVSXunaQxoTyiDBg6HAMD83XqudhY19pFZyvwdhRhCDMZsZLHtcD3",
  "key1": "2uAZDNtXgL46ktuSkVnrRLU19CZqzcQkwoSZSrgsnkUzpjsMhai2AWWKZ7Xyr7DjUM2G8KeAXfLgbVyci21fCmqc",
  "key2": "AWUHzUzKWVRRw4EJN1xvmKnG1xk363rn4QyXLViqty5Dykv7X1UN9E5Pe5HhY45hHY9prDnGuzcw2753uu9P7gx",
  "key3": "Mig22y93dQMjDJKJNZdi5AokcJtrM9W6EkwvQ8f2VcYvFAsqEMbhjBFn8kfv9BemyMaYJuvTZ7En3BaTH8gExPr",
  "key4": "MPAK9xDX1uXs8p3htA1gH1amjkLH698Z76A1WT8diixurC4hqGKeVtPnmWgbbqde7p5UU29CNcLCoQ3xnAc4rLR",
  "key5": "5ZyHo2u8s2gwJgTcvuXy5FLmypSAtYDdtBUWWYvdEuwdywZeygRoLbNNHpD4bCZNETHdYGVCTdqGrUzccm4jVyvd",
  "key6": "5jVriS25S4BxgfZvb1V52UDCJzTuSz4yAeqaSNf8jJj2aoZWoAbAVEQTdg7norvhuKn8CFuicRiHwceBAZZePzWd",
  "key7": "2FPVq3ejBkhPwMJKy7a814NS2tqjXNgoogkAz1DyyUScT9czZGLNoEiS3QxRpSJR6Kbe9fKWDjbUwaKGJTF4RqZF",
  "key8": "4VoFL3P6kUtMcSzCHHjMSk92V25kpjzfHc9h8bfzfri1RhyGwtE75xtx7j13ZdTY7xWR2TYND4GHeq17Rwfh5H1H",
  "key9": "5MNFu3R8JW3CudVrZVni5wAdAx2kwohMy5mnnnDFbB9hEZtd7QJhZsvxRf9pF29K17YMbRMD2ZrD3wwouLuB68HH",
  "key10": "4fG4SsVrDqbonNTYM2mV4zKZ1W4tRxw2xSRqc1sejZoGZ56C7tn8ua7dMccLkjbwPZbjKH4Wk9xVwMnhDdJBQsBx",
  "key11": "4EMnF4tRfKLmrony7yjfN7SNqapwYFeZNb6vTRLGnfra1vtMAar6fWAMLaXkiqKPVqi5zNLMgPmWA55nRa85L5Tw",
  "key12": "4j9KAcHjyMj6WYEkeLYp2d3we3mm8cpK5jxugg3vZThS44vRS1CFwiGDVqpdAr9ShHRE4uMU15CRbFmfYdx75xm3",
  "key13": "5KDLrVEAx4qeaHspL4NkEeWXhBG12i51qnfP7aBBipVhvuxa8Rhb4MntYDQGSFwdQRpU3ZRYZjQR4ZMBm6Hw2TMV",
  "key14": "31GhxAVTH1tU77DzquTjsBkkxJuBn1YFQefUfsibLGGXqtWxMrA8dxKWCgCqs16STUjfdQ6gFzJo2ZMgbouLrkUr",
  "key15": "3knntTXgbu3MjAJt7ANDERieKsgyYKiFswzHvC9MtC2ouShEuGemJDTeuQdug1FbRmCdFN5wYqdnV9jBuiw7A7K1",
  "key16": "3M9n8g2KNWAGMXrjHLQyXj7nJLFHDj63vZmzZcGhmDTjyRVHwwJuPyocgbiaMW7FM5qkdqgN88z5svZSWhc2CXbw",
  "key17": "3ouo1QNmUhFF7TAurVe2XbgTseTeiBdK18z6vwJnHJBx3niw1hytVEhu1uREg6RuSH3uGz6TB9MhJk9LkuRwUUxq",
  "key18": "6339pnXSKak5g1nrzGGyHcQTYK4RDpmSRjePG5Su4kkrWv35fEKm5umvATdyWAyQFkvUFcNVymFgnrX6EYdahbeD",
  "key19": "5HT2Nf4Uyg7qFfxyP8rpkspHTY82vNVnKkmye2wtjy5d5KnRjZxE5Am3zA2GbPAhcGWuTKNvDzPgNqwhY44tXB4G",
  "key20": "5f72VZuTH6sY24igkj2RbS55oj2QTmQP9AG9zTVD74CAHvPho9iobWpbFeHmnZDdkqb4wcbr8g4ztAuBbZUgzVPn",
  "key21": "5zaPr7CYaTwv5MKQUWWfrZr6LFJ274xAF6qt4eYVEqiGMR8sxuPVdHoQxhRh4RScBnsX8hoc8TH6wzVjgXJcZyZD",
  "key22": "2vJhN16QV2BsvRMhiuCQBkDpLBGJtRpUR9KhL2GTAGuez24M3x6bXgF8V3ShLZVsEDa4sgSXC5xoJYucenqTy91E",
  "key23": "jJkex45xxVNUFscCcdknrnD4hwRNf4V4ZuFkqQpQU4BN9XTKeQVAuCfWB5s5ibt9FupPCafTFFRhwZ24utQWGG9",
  "key24": "3kKSqVrJLihJP6nZbgKgFwtTUJWQBbL42KS7UPSrhxzcuoaRXCPWvRU5MPGLS37bL3eMK7Z11obrDPJxdHJb8s75",
  "key25": "5RAaMvs4DW6YSuAaeH4vdvzQWhqtw1tYYxJP8pdFZTRHQGDdMqH8gqbxtfubn93fVQJaRtwoGkjY8jxQEXVZD42S",
  "key26": "2w7yAjNAoicgKf6wTSF2xnwtKzqsytPAi3SSLuApQeFzLMfs5pPwzRM2kJh4sg5rw5s2CPUh5sP2sSue9beJc4Pb",
  "key27": "2HmsVqCjcFWEwvdJQbwz33kBBNceZKF1xoaT6XFxGohzaKEzZHCCC79RF2r13RSoUMqcp7wFYmEoMGuwkLkfgCDP",
  "key28": "3jVvpVEr2NKrUgwjRQEcb4kcoTiBt8T8houquj9oH3p46ZPDgur9Tq9qE2kmEkJ3EGUi6H5kNFr7J9Eu193dw4Fc",
  "key29": "4TqHdZKQ4psG1wQAXAWTBgamT8ddqW76o81oRTZLNxCtTbJweknZrCAhABHA6aruKyV67EfSRtnqFRg6sVhq5rCF",
  "key30": "2UqhdZdn99HRLR8v9zs1xFmujodRpa2eg4bRpDoK7pz34iBR8DxL7odQ559CbxdRJgSmPAfNqC2mTTiphFPwstJJ",
  "key31": "2rozrHXDF84FdJjSYVNG11FRBRBzKNpynE6TjpTt1THc5TRFXWt4TiEX7m8BJY6yQXqzSBNrrXdfs4Yb2nWL8gVi",
  "key32": "2gWoKVdxUgRxtppJ8KN1AZbB2PdmhyNuB2pXNVhfRg4zgXF2MERaiAjoAaUQWsK1KyFdsQ99KNQcCvPRHYYCzraK",
  "key33": "W2CoProyiybWFEh2HXiBFKpzPEwZpx9vfJ9LtoCZVJ5sgD5qQijzAeEksA1Mdc3dACFYugUEWfz92ncUsKpWseU",
  "key34": "52mDL8z85a3RQ3KWETvqmK2mTeSuUL6uNP6HtqcAzUkZVHfccSaWKPoUdizwrWpTEzaEvYJYvDNy61N7pqkgW5TB",
  "key35": "4ForpEKp1thMN4a2LbMUz6EdYigiDNJfiX6GjXHe7FB17igsbfHJHg6xCz1sCtvCJMqbsjBVrAGTbpRXApWGKwTi",
  "key36": "3ruxbuHuBvJoFCpFaoFJfJ6ZAyUKf8Uwr2Rp6ERh8K8KPn8bMQzoQbjaSsVUPdbrVmvctjDshmrojsWSQA7HJ6ze",
  "key37": "peZCiqQ1nWwcoNNMdEwUzJs7Yt5XtSGKEogCq3wciMFYrqNPZex4jZgo5jHZhTe5Ntb1Z9Z6GXdpDXcCkyDc5rD",
  "key38": "yAEc3Geo5sDFMPLHMbAvdQpAjQQgKoKuEp8JbeEri6CsZ2ZMhrBw1KtEYtaeZPFyPS6qDMyqsY3pDRBmfxexKyv",
  "key39": "5smd3H2NZo9YDB6XTrzghDsMjDu7UG4QWN339HDoPZFQwAnG88bjvp4nh8QYSG3QbWwCKmoUdbpg7SieDmb68gAx",
  "key40": "3gUBcEH6qq9mAgghEiezWcvFjJF2MXUAtTDtTXvVMaX8wLriuPNcVpiGCKd9ETQMeiUdFbzgKXRgDghatrsGbxEk",
  "key41": "eJkagAECE3a23PHFCzkQUcKc7rHXq4f2qKuj5g2MfMM6QjLj9hEnKBxVnJjKEZjPWJf5QowpCZs4cVoUirgZF7y",
  "key42": "2aExiK5RfTXkBFCfAkH7SRvo1CDqTVMnktE9Z3KcJ9TrXhCjrL1Tc75Kc1bJeJkEGHZiQnqZ4pXw5tvGGD4D225o"
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
