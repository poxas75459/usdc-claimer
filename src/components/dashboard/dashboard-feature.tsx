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
    "43YNxqxeCzXeCCmnRhTC97iQXowp1dCywJ8xCYB5aj43dwEAwoYP22dNC3j2PEYXvdXrrT4tUZXrQ1FXheckA5QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29NNx9zYT5334AS2jTkdxQvYCdxyaZFPBak9TKJW2Mxp4D5C6kYNr5BYEC1proJadD9g1YAtGLnuRDiiMZRJdydC",
  "key1": "236JtFv5hTL42XBoU8DfxdxrE73n4VD6LShrXpcS2zuco4qbbEhJTWToYgmkxYrgsvU8W173nwXYZwUACgWjMKLG",
  "key2": "53zUMHZidHDFB2qbNf6Zaga7Mr5nA4DMq9RP7xGwqXtV43imrwRGTYxxyEtSBi28Ya5nha6RfgdZ74H1TNfbjWLU",
  "key3": "gkqd6KfzjnvqiUUhcHzvABvpTTr97VAVZaUfg5rUYbNcALuVNgnRxzMS3bT11ZyDXpq8n6cZ7uv4r5W9Kn7UDyf",
  "key4": "5L78MukZTsxw9y2WAS6jv5XDDnzBhARtjkk99Ba7WJbRe58JWtDt5myTf4ww26jmsFBupzAgJKcrm9xBc15SWvJ",
  "key5": "4N66CDYVQ1aemfFFhqJGBma2ZZ77kEiNmFqsVduxape4hQ76vjf4PD5D5bDJrQjKF4HQqbbPeDUiAZgzUwnibTWf",
  "key6": "4YupamNCiqEBaFX9eCuDb7Ux5YvCaxrckGin1SpZ9LG5Ju5cNZ5VAujDrgGEa7RJQUigDrUJXiX8Vsrq3N3hDkY4",
  "key7": "4UwZcY4zL4sWgZSwhBeFPXftSUYtEC5qEQyNSM6Ls1Q8daqREwp6QseFTM6DuFTmb7ZXh3VwgXcxd8GgiUa7sJvk",
  "key8": "4JTsfmk5Ashwh7aSmcpx2y1qeVX1yMwC5YBm7Zv1uTr4KnstLKUaDbg2AzPWcK5fdfBzmLCU1q8znidaTM9hQkTG",
  "key9": "vD64XAyvybeqx1Lhb9KJ5co3cinCqkeFM3CGaQyKNya8Z4gWUiKsyLf2eBDM6weDN6dosB4sNjFc8PzbsbXsBSQ",
  "key10": "QEiE3KtNfwedFs8rc6riPcazWNb8Vh9pyWNbDNmA32VL2usuv3SwE9AH8xC12vFbL6EdmMkkQB1dyzfetbYazRF",
  "key11": "4S6F2fPyG14bfpBCuNKxJd5CMeC2SQUHN68zJTnzzYP85uT3uTVmP8xev4j6xFyrsbq5VV1J9BbVkYjMAFCThWw2",
  "key12": "5tJTJ7hcwAzFKR3faRoR52TaiYajPzVrW4WYL1JoJzgbLSxC5QCUxsKMwW31rJPdse882D6yCLrDVTc5kz2nATkx",
  "key13": "2SsVRc1pL9cer94j6YRpGS4mrjyj1XsLNMx7SWJqGkL1jCFwYcgMjNsMMhb8J6n8DGJsqgo7zbHSRJzATLFfYy4N",
  "key14": "5oAMBFH1qopFt2kUwnp5WyZNqXR2tXEA2rcAXtkDJP7ckp6aFXhPEbay6SEE8mddndH2oqe9EcHWoTRKgZrUx7yj",
  "key15": "2NQEs5a7VpqjuAqCqThUPRmMvCFhZvwoEHKxexAJ8aTYRyeYoNS7cLj9TYVj1EFR69W5xPbS7ZmzncaAkosjQLei",
  "key16": "3S26S7hTAtGtCJK7Sn1rGqaSqEBr5YjBZbVDCRRtoU7vLTPC1F5BgymcsUBNvnYkQkYMvGZ36YvZLBnJ74KFMzx6",
  "key17": "2zUw2f89Sd1sANcgL6GVAuAST2wT6zkisRnEziMZscZWvRkxuBpWznP1yRAfbRSJ5y8asZXBvhTAZYWpWjYkcyJ3",
  "key18": "3xcGMsW33eyfoyyxs7WXeLhSrZmrJau6t8rvCw9oiX3NJV9FyuvtAaL3MRHVXxZJQDk1TbEnHrvHCxPHkd2haqqf",
  "key19": "2kiBLua4oscDBZspFs62vGdhiasvLdMYcy6GXJSR8n81fdwyuzvfzsq9Hk4qNTknqc64MjrBZA3cvS4qgb2cycLQ",
  "key20": "4Kd33sRerG7hceAJFhdnN1WjxgUD43utweSSio3ycTYJCLXSNfFpFzwbYsuCToZpNnLD9Lh7P3LDsBRtvYVsoH72",
  "key21": "5RMETrcbiCxzZTM2HQAkSda26cLEPwnFw4rhH1WWDRizQp8vb4b5qRaL2wYYPjEj7U5DUqVVT9ZXqQTwL2HQDyQv",
  "key22": "2JQNcF8CvdhhubkGydwHCyAZYfW7BRieXRugUfL6ft3mZagKW36AzcuQLBqKz4chQX6RFdiVUvHfdwKzi3uAunkS",
  "key23": "2umJb2TqaPi6QKPJ6ACN4oY2VfkRyckUcSo4WGNBhic9Lang1se7d2ufTuS6fWV1j9knTytmTv4NuRNhLpRzfbqD",
  "key24": "gKyTyHHf4BAergFab78PgmEYtoVKnrZqZ7vaKFGdm2L2pBFqZVwaj7WXWmdU7ZtZxn1BZ3EkSrbUNyGu9FJycd8",
  "key25": "2ZMMnFuMQpnXWzeoKZa4HPmxMdfBbb9s4mow4uA3UtxFtY6eqGAorDENkrnEiDSECkQ32DZmEPp5x3B9zB4JUhS",
  "key26": "2iZpUpL1w11E7ER7wxakJ8c2tvHcnSJpwjarFb11DqoVfw6vGRLVjAUANeSJrZCoZN2U5m3c36na61jVFynB8C79",
  "key27": "3Ynpe34WscqwbCGPE1gVB7XAihbte3CC6BA7xWyu1RNSt7xHNC1LyLUibtDxZm6TgxD8CTsDW6BqFUu6p2CdE2YP",
  "key28": "BuucnM8Y2JZUP1iSF4WqseQs2iKGLvRGi5p4zSNokgpGCyrc548TD1RvtxejgBgCEHytGwW4RhJvNh3pGAoytdy",
  "key29": "zsxRWYTZNs5uvHnTFpNTY8bTsKTAGbP8W31jn45JGUomXMwrnr4qTXJGF7kx8PHTvW8xqpsYh5sp9LcNBuwY7Fw"
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
