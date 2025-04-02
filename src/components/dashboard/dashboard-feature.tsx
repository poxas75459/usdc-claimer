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
    "4SFrUwzVz7WWFzn3w94RhBdkGjQrAow551TfUu3VKkM6W2CdPQiExjyw4MTXAD1JoBoT222iKhhBEkjKtvCuhpNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXDyyb9fdgvzf411yiwXXacftfMgydC8vxRF8dS73a98CAoyBc4fPgNG3YFPHGvwVK3wqGSgFtm2Ln4TzRnHvfs",
  "key1": "NPAVAJ1pNLLRM7otMXRjEkotMXK6aWfM1sq6pdmsZbFFM1X8ZPv5S1UYZz9K1hcc5JaV17augvhXSWKHYHGk2EW",
  "key2": "4XkoPbtFLxQatReemHTtHy2z1aFEiywuckrg99grT1kv6vwrCZCKhVdBSAe8gpmmqgeyiZvfAL1LxtV8YmQ3JmVC",
  "key3": "4McM1WsUhVcQkxcCVU4poSt5j1qatXnSqC58BCtnkv9dX36jeGqrEZzuMHkZDnNJya7p3Kdk54MdEBwvqCARkzWh",
  "key4": "5icgJfFXqW9rffpegDNnqgvgzaz4UxD926B88W6rDvrpoXoCmGVkvmQ1F1ARqrWW9gsFKkhxVbEMfMBWp2Xhiffy",
  "key5": "5FzP773tebS45JHpiHC1YEv8u14UPVy8jyEdYaFmVyfeP6zHDhocQ87jV3QH9hH5yKU3MpZ2Pxjs27yuY4jPAzzb",
  "key6": "3wypVjwt9kJSG6H5v3WxEQSPB6x1QqXt9d9p7ZF9RWwFjWd25iaww14MNNvkbSvWB5Sh7GghjcQwadXXZpctCojQ",
  "key7": "4KzGLcLmYFak3t13oCgAAmULJ6hzTBQZA3n5yAd4RJryqhEFzB6387328qLoARxu4CbfiZ4xX9g13xuRQKTfnW7h",
  "key8": "5WTeHCQ9hAVrizfp3jwwwWRj1Byjjup5Z1SNGWUTfSjsuP1RtzoBb5eU945ioM2cEtC1gFey5HyWYZfxqsPdU8YF",
  "key9": "373b5Ckxi4bVjbBfaqN4YDSHMSzrNFwnZusnaCDJwGcf1E6QqDyZpF616NXL4samHcSWF52eZKPrdU6X9tR2xseg",
  "key10": "4oX3AM376gFgyDEkU2J8BfU41M5aor45sYXqcQ32QJiKf7qe3FDU4FvXcFtvgKpR7NAX6rQoKpNFExa1jZf2MVDR",
  "key11": "4FcVCArfDthNPb4n8JUesZA5qM84RwEFnH13k8kD6osTMpkmTau1csjj42dVmDYCR4142hHVLzxnKpireKdQC8bX",
  "key12": "63a11muwSvL1Jf7LM23BJoJ7V7rYZsmaXuMcneQTJ7p1Tzr6v7qLNfU62zwqpyp25YLQSUpj7usQD8ZsAsx2Z9PH",
  "key13": "3iKo3pxDPqm9VXrGwbatMLMBXxnPenHbcbZzejVhpwMKq4JZLCZJQVnH8DQC9CN6aYJRnFkcuGNbg6sq7JwFF7QR",
  "key14": "4maVdApuMhRCXnqxkQz6tk4XPunKyVFN93yMVpa4fXNr2TMqZx6rZXsZewBH91qfqMz1rG3YxhcMQakNwVpJZt1",
  "key15": "2d9WEsYfSq6QqoawXtVMCtC8h3bKYU7DenFa8FgxWWsN9owofV4HE2UUxK5HvhTTaudwSvXRbyy88yuk5dhmEWUD",
  "key16": "5zjJc43iNghT1F1dcSn1aW3zHDMHp7nA15mh7e24vjGDGpG8wK8FngY1AtASCCURk1okLZ3vXSJaDJYvZpgD7FFP",
  "key17": "21rU6nEjpAzsMuj7CBqMNPupsu6C3sUvnGEBsL59fHBjM99MAFtrE4cygmbGubnEhvSqv2k5cjbiUgzQMWVjBM2N",
  "key18": "2nZmo7DjrH2nSZvWtDE9FTnDyMYEpxefXvHbQqMuw8nNh3nZxdSyJbCFsbVSaq7N9Y4kwE8Chg6igGqsBBq8HAYW",
  "key19": "5FWhbQCZYCTq4ETum91yo3twbJ7e77ZhcK5F3pgzqj6y8bFUFSipfXq4Y9b3hxr3mtAst2Qnx2GMVFUK7T3UtTK1",
  "key20": "N57rzVNWE8xC1JRmB1S7iUcqjt5td6V46bcewcVLu3mUiXGYgTKbp6AqzdVrAuMETGYRdqUbtXG6yQDTcUvWuau",
  "key21": "4eAK3a9GaQjchmPa3HxShMWdn1sNGhjy5pE5FrzL29AuWGkz7VggmH7RaTr485UA87rpKoRqwWuGxVrDHzJZcgv9",
  "key22": "5cxSNouEqidCULMESQMFszRDBCYYrXY8KeJEfB1UjQEi4y939ENkvqSa4yZamUjKwTRJLedNx7ny1KLMhrpBmsxo",
  "key23": "3BTjWpxSZbvPhazmZfhsfYAAw5AD43FhLzdTika1xeaFhtrGwHGX2zj9qiokUT7kE5F63Cwf8x6Em7LqLCuyDhBK",
  "key24": "igaPctwfj2Wg6PvDdRrzYSonniYKvFQdmeTbJGKNS3RisgeGDhrf6ondd4g6NZYb6DfaqcM7Y8yB3hF9hMkd5Zs",
  "key25": "2LgJcPPeU3sCx8PKLBZzahxLcSjBdsZBDmu3e2G2QzjVy1oWppCnXvgP6rjRWeLW6NX8JV6k5GVNzFRwW3ijTZjW",
  "key26": "57Z9zLJRoxdHtxZMEy1WwV1xJjYnhtMJYfCggG9hfrAk2ivaqM8W9kfjNDqXECa1SjYiqh4uxnoWCxgQCnxbf5Cb",
  "key27": "3qb48XPK9kzy4iCL4ksa8gkUpk69tFmwu8PYtvb3gDaxSagR4mcMiHWHZJfArNUyvtUwRAsYCHECKCjc1e8595HW",
  "key28": "5NjiJqMvshf4AahfrUeGphEcEVPzQrtHMSEf73qU5hDbSUKs1TRpWarR24SS58vPnY65freE2QBZj38kXbjfXw39",
  "key29": "5QjDqdBZYvjeP8LcompVZR6QpoQzdNH9PZXoH8fPxE2T6iTCKiwBgR3pD5q777VdMo5769BHEEoR3mvhsg2JvSSr",
  "key30": "4c3nCmidV1nh1Fnd5F5AAMhAKxtjEHcKr2ZZahoYNDU1MCoDCb7YuykhU2wzjAS3WNYAEUk5P4Ef5X7QHCcqqXhA",
  "key31": "525om6UoXDxDFV4tqkNtyKojqYt1u8ajGRSfYBxdwWSksXfGYHsvxS4xk1ZM4GAtaVoe4yKmfF6CJtyEsDNr6TTv",
  "key32": "43n9ZHuWDBHbAvMjSZNZs9DidGdffocp7B7vLuSCPvMZ8Zc2c3rWphwSPahdW9mV6T53iMRrSuaf5HhwqNSgZQkw",
  "key33": "eMXbmZdUVvSxXFFUqiRNgf5UigwvtNgnRXEnNmd2CCytxXEBJwwiwyrK7g8QiTE1jaCn6R2FCUF9BZPZrHrFEPk",
  "key34": "LyyL4i2v2SaHCzzCodSjEykKSwbdT25w2dF2dFSyui3pUKDkyofrQeHdSDYwA8wE7hZozpujrsGYRnSHLtFXa8P",
  "key35": "fJGV2Jbkx4Pyjpc3VaYwix5cRXsKndPrM7cPyZyRw6QiSrTMFqUZ1xR3w58Jx1ceEoRU5jgrray4w5NfWqjd8xi",
  "key36": "3XinxhgsKWnxR37tB7hekzKyJTvKwpdgFKnk1dPsiT2QdGJGMNMVE1wgziFkKoHeQKtB6LuBofa3JjTSUFRiM66H"
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
