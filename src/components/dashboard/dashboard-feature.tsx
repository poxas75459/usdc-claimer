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
    "4XGgiZRiFUg64GvtnPWPZHYKoYhUJ4Pe5gxVbNZokbcfPpVYRdPsJojegLYgY97mNzLCaNPNjmdCuSvubZUfDXee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XKVEHba9t5Q4egWcrB1fcdpPWo1pwKoRWCZ6ewD2AiqzNNDCJ4d49MvgjBU3GxUUK6vHDaF2vkqBiiKWAWHUGSX",
  "key1": "5PoEE1YomGXyKCKHAFC6UqLtLt2kZBAHNgTigP3Q92stc9jxYvPpvvawaYrhnbyEYTX99XCfBvfshDyEeWE2uWXu",
  "key2": "48dxW3Y3Sq8B6Sr9Q9LtyMzpBXYrAwQbowZ8WtDLoH33tmGdKAeHVeM1BsRULX2VVqeVVwsz3tYV7qMN7BqRk4VE",
  "key3": "5RjAnUZJskm15nYQSDMzwL3UptoCn7FziRSANR71ZcGj1P6rUKnmjohFHTXCa63jtg2DyWU3GJ5WT5qv8kcVizHw",
  "key4": "4F7FDCwiUSKj8jn2r8mF9kELiPMK7inKaHzFY72FFVCj7n6P2TTyHvfY1YY5g3tZpaEdWmYQPK1rtrWbneipcihv",
  "key5": "24PQF2q61AEtJQF7v2vkBzhNfw1mbQqt2mXsQBL7QQGE5fv1hCPYGVKfLEPKNgbwbMPSAJmwuUZSM6MU2s95rmAA",
  "key6": "3bntRdudE5BnFriYaZvRB5H7HGyDMyE9X44x1LKMqZf9HpZtC6ppgMQuZkZbygwMcZxdR9PfthwUGWNeB4LHcVJ3",
  "key7": "4vG31PhUCZ3k6rNseNjh9v7vXjRZTRHdSYkjdXnHNi6XHf3BbrjAk9V3VH2WT8jiRKnJNovjzknmESUUPWUoTLNx",
  "key8": "2qLyUtyK8pLBTg8y3iJfsaESZ3A2JLmaZNUNXFUkSBuqhTyng6xEtpDRjNVF7xZvrL2a6Cc4GGB2HH95KEYqwqKn",
  "key9": "4ZyjCigG88YJtCRpGSPLTkWMTNoKkv7hudhPHigXZPSiWt8PXDHvPRtGDdtbaQdsje5MZnCv74yKpsyvZtURsVr6",
  "key10": "3yLNSLxbiUGkfKp7MuW7c2V87D3Zyf5LZ6hknJxBw73ktTuwLw92WuSjCYmpVgQtyTCsre2gVLPM2FJrvGkQegi2",
  "key11": "3sT94ao7zkXT9z17o3cpSZsZYsETBUKYg9x82wnmgDRvYRgC63GTLJofAojxKenUXZ6Heh2NgLgU817TeGzP1TcW",
  "key12": "2WEKWc1AvjKFJ2Mc3Yq7ahKnkdFkR5bkeAeheVJJpcmaBbaahWMVHY6azkLikp6iR4UNkjcSvTGboCUj6hbwUSdK",
  "key13": "34YqomyQQDgWuGAb4HS4P5rvzkjzZHaLRMJpNaJ2m8r5tYVpGHSW3wR92oMdRGM11aKKSUDpT7tsncWYiPzF1HnQ",
  "key14": "2ZDW4WUqrPNNKmBxd9QxsBUjSJnhJ8RvwNGT3JLsgNRoBQsvHYYG3J6dy61jLC8sxbfCvwwc2NvUGfnhBkzV3Eku",
  "key15": "25a6jRf9ZNPRdtwNzs3tem7Gxz5NnrKxYw1mpFdjt28Hpnp7ofacLGGzZgQ2Mrz6AHr4rHyVDQEpP35yvRSsZjuC",
  "key16": "uvpf9ztzx3ZNQ7GZPVLhjicT8XvveGPWx6twWo7ykkb9oZY876usdGnMgRHD1vaFESgV3TqnBMGFsuEMJhsYFyV",
  "key17": "248Gq6w2Y3DsQdw4VTXCyMgKKoy2PKsLsTbPV7VAPDnpJNHsNE3EZCCRA3V9BSJj7f2cuAKgWFVBuousBNn1GX3A",
  "key18": "4UP6uPED11y5cWWGS1QJ8Fpdn59f7Tjm6CJkXuZ5xT6iyxewVweHmYJaSmg2WdgDVe1KvZRQj8ijM9qDtLSXR5ah",
  "key19": "51AXtFTp8fdoJsLBgn9o2YXur5UZCsjUyk6YcHadQxcsnsYeuBEC9pjWx9bjXWoY98kdftoveDEhZvsY4ZkGsJVA",
  "key20": "3KH6P5ewfoCgmF84NsxmYcwVgi64fqqfSZYWyMa286RRhwNkrCJ52hrUFQo1TaQqGpDtPSHHuW7fdQog4rGtf67L",
  "key21": "4SfzpEY1cnmyFsuc6utCW1CEqHXrYMLVgKfN2Vnj32sDRQ9QYdSbUFQCfronvPk6TtJ8hcY1gvJEGudViQEHSUXh",
  "key22": "5DruAgN8eAYzHZj6YPv4WguNPAshfPmSv1MKeouosuCsbuc6X5ukRB9ygZpr92GHooDqu6ogorJH4QJkaJpKfSLg",
  "key23": "4uJJfZNa3ZHowGx4Qm3ATnW9rExCUZP5ngm7Lx7rygm2Nsp8BoxagLQykGMc84QDdh4sQ5yK9TcHmAeuzdtnZPLW",
  "key24": "5MRa5xjvZdSa4at8kbsmFRf2p3THndH81jgyAeM7eqBJHWGopFTED1JqnjjVYanZ6Y6fyptKU1pDBSSrkUnBbcUR",
  "key25": "XX6pMAVW9zgqwDEY4hjp7119nzN92pL8Qrkxdjzsy6wK9ZcEUQCW4KieFQxjBDNyDv94QEz1Tpg3wDSQ2FArufa",
  "key26": "4rwoejrADiQsorEbXSs2vWLuSj1W2o3WVdpcu3vzpQn9cfRiM1ig97v4wXH9aQy5sTAJHkBeDZ39TvvmqqM4yBMN",
  "key27": "5DxLbQanP5Z5aBLLjYNrBdhzSDkppfqSn9SuMQzEnFV7b1nr44TMCkuVVJP3G1geiSDx51eApaN9kF3hECJ1eVBy",
  "key28": "4RrDoTF7cGh3SvZDCEABMPkEgR7xyraPQ5xCtDzmg6qrQQTZ9sJt5bzqauTz6yAeLfTdoCaQraSHL6sRy5Gby4gw",
  "key29": "3Nkk5o2bzrxHAL2YWKTZHvrG3bjHMVkY6pqZVm1uRLGbwk5hEmEoe1qXdnqTJQywbuENQGTsYD1AEX4xLQEQENJe",
  "key30": "nsCXaRevyX5D4mZF1xyEWiv1R4mJuiYndi162W89ZoqF2eKQauJMfqF9egUqq6aqqMTpn8eZxGvUDmEZn6pczAy",
  "key31": "2HG61opkr7x1ZbiYCTahJJyN3RTANxBrXWTLWx79WwxujXbHJ8BsxWZcDin5Zq9Axg9UcfQ5pyeGNUshEWB1bKYG",
  "key32": "6mbtXTouYk9ZxU9hiMJcHW3rzrddZZbZG8E6MVwvGGxp4oSrTmx9nJadzWuAXgECSkQGQJwmE2LAxam463amxTz",
  "key33": "3ghdoHQsWC8ZvwUXdpDgmsHxPMmKRPNnvhbneCvkApDFZWhuLT8GqxyKqoviqYynDXU61omCcwdgk9x6584oBj7j",
  "key34": "4fjPzepiZqDT1XKjedgHzwVoW15dMDoa5bsFNLEgjUEgbcqFSdCpednhG4myU4HJ5Dj95RHe1vXfshwkdhpEwbn3",
  "key35": "5Zh83iGPe7gRZxPwCSddgQ6WqZ2zsMiS22RXe7Gr3NQm5w4jLnR4eXqXufwukv3rNgnYoYKnP9vRG71RFMWzMQ13",
  "key36": "4SYtXB9xEnoCMq6jXXdiD2e4wERbjeEmt21apg9SeodYtrxYs7ZbSrBwEQjr4AHtHtxgSW4RQgh82BCf2TJ8Empt",
  "key37": "568HQx87iPDeVqg3Qw3GHwDEYmxrHW16sfb9fAS2q9FeZz4ZyF1iBeoQ17hYpN4M5Sfi3MQbQ6XSZ3gZByKnuPsB",
  "key38": "ejcVg5MYT4CutTiXC4MFxC1f8mFj3Nrvx4igvy2BXiAPhuY8dkBEsLaNoktAKMREcdqBqnUdCpo1n1ZJDDL54qC",
  "key39": "2vXXwsKZSPM3Fm3ehdbcWtbNBu2SaCaBqCWbyYRJfTrMY7LkNJkxf5t1Q4HRLTkLTD5yQVW9m4hbNSPyF4cvER2g",
  "key40": "2Cyj4YYZPwRHZwVV6S4gjUGmEkQ1rvKibD8HLzSnNuNzUbmHHyCppMUy9mCvvvkJ8AGm6Lg9LkuuY11dDQagVhKN",
  "key41": "v2xjdGgyJf11Cpuow2emgWfGe4Fia3hTsrfxGeCdcRGgCQtznKGjo4B9QPCbLed9fnj2Nb8FompF5Bm2oHqHR73",
  "key42": "2zF6w6PmWD539YwDuLd8HEfkQpXXQSFJydwMn8jJ9fced9kUCupPwRd5SWxSLxRpZb35UmNZ2Un94VzqdE8vWgSA",
  "key43": "5QneWFXnZLd6Py2xMrS7dqjeoDw64yNZ52c1UDc1938D52sN9tw3SLzmFE2sxYjm4DmvQrfigLQ9QJWGkQQXT4MC",
  "key44": "5EPV9CPyUnKzRtiGcp84iD3GvyMkx18wHnheWPTGvmQXvH7NRokaYZ1BQkaQxGNbCKK387SsR6xaVoesSf8nuU8W"
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
