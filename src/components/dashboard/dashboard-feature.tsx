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
    "5aeD4d3vZzVo73hHrtAMmEVYiiR7F3Unm2R5QP4bLSsUsLomY5xRLHxFkHAewTD2TjekkVwnDeiZu2EmQht9Y9Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNSyZU3vGuEwjRLtGS9stxwnrTuqoBDXs5pBTBiwEhwAUNiUTwxvopiv7trVpkK751umBx3hx5eyRMWTngck2Hg",
  "key1": "4Mvhhi7CZLAp9kPNMQLQ3BPBGRpEpcbPQ1AXapomDVLJsUJ13pnTzi4wYHsptMRyWe2WhdV4Lq8KaNAanhbgN6jk",
  "key2": "2PxoqWpV9mH4LhMD6j19GbmnwFFFv4DEFKSh1cGozCHu5GSBZ5DBeLFLbA9tNDGJx3Bgu4aDa3EG8Ro1SxhSUvSh",
  "key3": "4aPhSjNmbozWLDjiAtFYCrzrW3svFXjCuuvTpNBgZrJCURQTfwkDmrkrPsG5s5HyaBnD2NEbRmRbJeBAPWyoj3jJ",
  "key4": "4ef8DCygVPjx3xnC3VjM8vu17dzLCtWSB2ErY4owWw42f2da6DnYR9ooecGsabt8e8Yunrz9YKDooJJMuxvHmEVi",
  "key5": "4tCUm8NwiJyS1anPjMdAMm3r86QRUFnVFCVXPtyEAWuee3rh44SeoGK44CkdH9hVLR1fp3mvhe2zaexSuJSV7ckG",
  "key6": "N2P8dqPkv6QRh8UGgApVeaWEcwKB83fMXsmU7bpHnPvsUJ3Uh7d2N4fCENm36CEEXSGPXVCXMrUWCEqB9AfitXm",
  "key7": "61RtQH5wT1nEE4N5WvdQNAHktsErDb67WaSti7u4TRXqv4fAMfiQAUJnGRXPpwxegNy6LXw9FVgjosmrcMJiNS4k",
  "key8": "hcj1MtyKGcf72Wcz3Ct6wJ2zUFAJHwVbtg5cYTqJnA2HTsjFMJ5tTnpUBR91X4Eg4bXZ9Cp9x9EHjV9yzKG3rDJ",
  "key9": "2DLxPobQJwcdu2vKep5dxEHQnCuSX14szWBB6ahMYAviECtS42WGxVyQ6fES4DHchvy5Lt5RTRrX19ydGCbUyUhs",
  "key10": "wNZL17jBH1TNdY8prX2DEtygug1knzUFhzJXp55ptLm17g9xQgYD3XEsmwPe4zZgXkxQZQxZrXrFJhd5FuGaKQY",
  "key11": "5Djy2skqryuGpU3JSN59EEaPJG2iJLgn6hnsJYcWy4DBDPk8nhnmKkckiZzER4DRxEPVfb1aafXiGevd1CSibKHg",
  "key12": "5C5FWdiWwhvXDym6KG8WWKbaC34c6Jri5nEZ1L53YkJeBWdX56KHUAP5X6igUZChBjhG5WAj2SostA1uk2vfXxqi",
  "key13": "3Rv7CTSJFZh73gLS8ekdPjdoyHMPmhkU646jTSqe9coRB6qVUKEgcjt4pjqBS4DxKoP5r7gHb91nem9bQobkaypP",
  "key14": "4keMzK5H9CtNU6aSpTx3AUwuArbuoRk8Gb35njvxtadVHEX8g2qEC5oF1yKjhqE7mUA4dxTxz8eNpfqdm8DmiUG6",
  "key15": "2MsqVvTEssMgM7znW6mGZz5JvSsLqxHhMGBiknieYU5QLxAFtXJN1dqTiuXu5tnWXtFnZQP5tuHiftS2vZ4SiCWU",
  "key16": "3v3Fv6TDnU9UbRcvp9K8Pve9ypKNJDEDbSdjnonup1obdkUg6hmu4bk1hz6aMu16Yn9Ug6fHPbLa4DP317h56AJo",
  "key17": "4nAJovXEjy7cHhR2h3jg7X8D3cUrCaE9G7rpdPtAUH6hkWoyBWNeotP95x1G34pPUhczLxmGy9FgXdscvrgnk8EJ",
  "key18": "33bvEAJkhJ3LJjf81Enm6x3SyWAcyyMw2G9FedK3YiH67XDPn3fPhWefieAe8Dk5zSYPpCbKWrswXco2EdVgeEGv",
  "key19": "579bTfisYJbWLvDmSbbBmai2ffW5PPkbyskJDDt8pjptFpog7yVdssDm65EThsjS3weUkcCe9dCLDeN16QWfLQMS",
  "key20": "4thr4j7jDCBuoxTQn62mCxfvqtA39WNE7VLbZ1WxkUv2wgm6ArGS46KWrbJ4zFVsf39GXwQFymkrJb169wLES4oT",
  "key21": "3EudRY74NSGPDc4fSvfRXmXfwy7Gukf2TroqWAZq7kM9zmX3f1j6p4SPCPCoxQdh84ZfCMWQPGbF5FgK6a4KmyTp",
  "key22": "3Rej5n2EDNstbye1zAdhPLk6o1rNwmXK9YXkZYxP9H5B2mMjuTjGkK1Nh9wRvTSgFHBePD6Qdy54ryCh8UqCpmNV",
  "key23": "389xBwVwnqiY72fsk2E4twabNGUh5TUAZJz7aL3ARDLUYwYcFduUJ7SMskFdpuCWgKM5dcmegDPmhcbu9WLAnYFe",
  "key24": "5gf47XfgD29scczAASuUptiCGXknj91vcc1nBD9GPdwSQL85LNAQEcGEygFyQnaErngt6PeBEQ4aNauunLytVpA7",
  "key25": "5HbMh5iYzJjdnvDQkDBpUnDyAk5dhLD4CLyJed5qfRGC6LrNBJQdLNaKKfRhArjUdM4Kiz2yhjJW66UCVUd7jGYk",
  "key26": "5SCqB2pVb2gkrCgbekUx2KwtGvQdLGjohgYrAN9gNQ2GqsGZjYAtVsP4GDKa8wc2j2f1g18CDThzERtahKpJMw5G",
  "key27": "5ja19PeKUFCLvDh13xPcQbs2HFMHVyk9mu6rk4aH7J89rWycRbmRQfYPeBbWniudQoPHEawUNmcF7cBZSL2CRsDy",
  "key28": "5sZGzRGVQwAuuKAZno1Wv2qKgMocbgqHhpWSe3PCtdrEfLgAw6HZNimuLR3xeX5cspEAv3zTsKmFBA2kYeU8wxMH",
  "key29": "3mA4Q4TACVFsZfEm9kfG2hbcfAM6LEEWkXgfFAz3AWmW5ZH4K4KEk68AwznDxT7EGSkKQajGDHbXDdFDsXJr8yXa",
  "key30": "3LcVRWy1t2idGYQRCSFnuhG8QUq6Y7Bq8vFScdPqycGHLL7xg2AzHLm87YAfkzxhiUTf76ohA3Zgb7fES1m4DJAt"
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
