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
    "3GeXmZbo331cnKMwnZG2qAr99XFndKzwFQbLG6ESZUH9dPyorzLakZnX71sLpbs3F1VuYgW71JQGyqKgWQgCoawh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSGKm8dN8R5sznPmZVcgkMV78vjbdwkXG9XiaCc2GtPHdpFHZZEncHxtfmiMysF9hBG8GREDVXzTvJGCerdmJ4y",
  "key1": "45ZNkyfqSpmSTMY5q1wMv8aQ5H55cMdVJPFVrm9b51unHm3CcypX5mcT8cdWiDAWrWurvShiV1Cs5DfKua62WyUg",
  "key2": "3Ekj5BWQz72boimZC3rHJeSfi8yvvUrrdcnBvDgNrjA1q6s9PExdvm2XxLQaTUhi1mk4TooeqBWUZBHRAaEpvZmk",
  "key3": "38mamaeXG1gdCYo3rDnzyqNscZs5osnZf2adRFk7uPuNxbiqEQsGzxXsZahieqVBm1zig3Vp3Qne8cTNK8xrNq4i",
  "key4": "2w5ibhR1C5HydRsxRDFfgkxV7nPVpcxR49GMtTjNfiokb7fQ4CUfrdQqGnsgbguTQBEtrTnuGmZJGNVRDVrQbwTZ",
  "key5": "2e8QrfbusfPUEa6kSM42AXsc2UUYaJdcM7fLH9dEBkh3GLD2rq97ceKBYUrnfL41MtwjR5B67iCDf4qGDogoRb9S",
  "key6": "4wHAnc1VAQAAUpKAYzfAQMVCFNXLLHUkPPwPCYpnatrRUpjov8hSszBXpDvjznLnPuQzFpnbxCNytUH3hPDrdCyy",
  "key7": "5GRrQcWsKgma9gyk4383HndHNfxkgReNzWhMKp7JM7yy7RbYkwEjEVmkm3NhJ3KxCUP656Dz9JCvYfDMpMaTkZrV",
  "key8": "4921gwbMvHSTyo3prD2QzbGUYv46AvgH9cwAH9GNJn53RuARSAgWNseYcgsvg2L2x8eSgqSXgvgu9zFvZ2cdTY1M",
  "key9": "2qn8kbQRskagvEoxrJ3caejtHShE2bhzRAfieur1E57Xn9eiyUyidbq2NA9PGbjEyFY9MiVwjcsQaPh2fP9oKGmj",
  "key10": "5n2y7ogzRQmKiGvR5BjKtsbTdeZjtb1okCqLnJPMbgfnJSsTmzXkqecGQQbqwVExWDnVdbFyEMJzRQzRi4xsdedQ",
  "key11": "3aqSCRdWRBHHeBbTWaZMW9PDYTsq5ea9uUk7Wyt98oXxXdSWwwMH3wZGauBZTj7XU2PZfRKjyVQzVianD8dqdUYS",
  "key12": "2vKQdFB7msSupaYJo7Q2yAA57KGFR9oM1SusiPKTpw6WDygE7kHoZCaC6BH4uPRzTmmjW1fDktpa1YUipoDKPDNe",
  "key13": "5qEsPEuSQwEAXBjcpsCp18LkPWj8UF5kGuigszTbTMmm1sGXGbsh65YEvoJE1x7C2H6BkMC2CW5NCawXJ91b5tHZ",
  "key14": "3mrGRyz2EWBEDctFX7AoEaRg84LuKYJwEeeCXwbPB21VnvTtSNzcwDBWqNKcjdvxcUYmgEuZW1w1KYzU3d6vCHSU",
  "key15": "4bcFcwnMjAVathHDTe5v2FMv8Q57dh9G1iUXKkYfXvMb9f1A8MAWrAKK6891zs9oEY17486GPHJAcGWZ4yqVJa5P",
  "key16": "2pjzbTFFH3akyoEfNiBnTxi1GU4FGp14NSyhtGdR9vhA9hzZMX377mdgEJ5BPJTP4gXrzjy3JNDigjPxjmeR13VP",
  "key17": "2B9VS6bb9okA1ZHKWkr3jLT4zbthTfdmyNMrwmx2edwVXhDfu1EgfkJS9sWH2Kp2UNhumHrxrPn157rAyyZqHM8G",
  "key18": "5j2oegXJ2usmnhNNhXmR5F7F7phUAtHmgMDBWUpRfjXfHmEnP4t5XYAzZD4bDS99ZrrwK7tw949gjLodmLepdA6j",
  "key19": "3cWBziMHdytt8BXqg2nRe31FmiZbdyhZ7JAhjHNYzTyMJmLcrHTS6J5SdzUBsvBgviQwRZZhQM22SZcKhZjiGFFW",
  "key20": "4eYNtLSmKfwANDRv9QiajKmH7J9fC7Dh9tbKAAuZj5meotCBL6E7eKC1NQ5qDWAYUYERs7FLkCLT2wswVsJMvHF7",
  "key21": "giQciq4XY7cNBknhzPewtNJCaoBgbJQR3QKgRrvdoSVu1kBeovQX63xzAKX4iq5DjtWMTgBqL6RJafXAZcYA2mn",
  "key22": "3C1hBWdWbsQRcXjQMRTNbJhCWKV6HSpugwz7L4n9rTcrQcddZ2Trh4AbKuGiqkXgqiPAnsLbmzzAnKkk6N7sua86",
  "key23": "32rFHHYidBJ1oXoXoHJwuKDquggCX1qq8ZY3vu86WX9CnCnjTR3xDNvRFNS9EMc5meX5NHuRYiZA69LzQ21jysPW",
  "key24": "5ixQuTJjjEJTv6NxQ8tjkZD6wBonEfJ1mqjZXM5qJxQggTmqp9RKaT3ayXuSoS6Fx67C6ubqdPtUU5FuweVFzgtp",
  "key25": "5QkcYvfPGtChPTzRbJVUgfAeFkp1YtFrx41XHotimgtySuttqWAzipuNeKQt26h5aFrFnaHPQkT9V8TQ6WWg2qCM",
  "key26": "4rQ1SYgErna3JX5583MsHRpHMAy2HUxPdDbfAJdb31AQGLfentLH8dfb1AoPgYKTe7KvNhjFeCA6jDeLmLJ5mVYc",
  "key27": "eBz2ZLj7U9THMQDimLiHHfsiA9tuetdbpY3s5LpTokk3rMMqMBmddcrhUq8dKH6GUAgzweBPBY2v4a6Do2tsqtV",
  "key28": "4gFmL4VcWn64truZ3QmyAKUy4YfNPaKKBrcxwYM2ekU5Hj64yhkjECXXLkRC9jMFzoyxjJUw4Z8wmDh6roSgcvaD",
  "key29": "3dXiCS3oYsfZxMXUZEL4ZJu5m9TioxKParKxvy3Dc3S6F5eHPu5aa9s9AA9biDMkqDffeGPXsZMZzkTdBpPrYBzS",
  "key30": "5SeEX922w2pEaXNmTa2b61MGUmYRXtfmejGWKZgagyJYWB43Nc6xnruspHK6SWF9TCNdquxUG2wspTZmCGZmBf8c",
  "key31": "2P5x37xW1t6JFo3E7nbZUfG5w7xCZoXLwdXDGYAYehHyJ6zfbLM8sJq3YeLU5JHtPvXSenQWTndyJ4HCSmyZqmKp",
  "key32": "4LqjceMKVwLg3hGP5MsT21Fmo9oKWpgtdBGb1rMai4U3dMmkMuJHuqn7QsycZvn4wJspdSHutrVPHDGmqZtEb2AV",
  "key33": "UurpdHxE29oTFhBSuSsKMKpyPogW5QpLXTMLY9VPX17QeasuLiYHiJ1VntW3bNqa7nxNVQL9QLE7CXFDFnALJkv",
  "key34": "2ReSQR4j7GkGeP7fPUCPZAx8YEhij9fjtuWGHo46n4wmFxwQrboSsLYMQYnWtN6wAfbDuVp9Ln34uFKzbati4vED",
  "key35": "1BNmjxqAeWQ956ZmJFiYKhMcVuzH1sGxnD6kMxsn19XW3SiAg44HccJjR57Tui9BoHhGffa3hz3fkHfCZUViuCJ",
  "key36": "5t14LYdGMr1XY5UKYoAL1rX1mHpii6AThvE6TE77MpDkMjz4Sa8uWpP1w1PZyYfzcnAMij6oecUnzyQDab3b8waU",
  "key37": "3QBJA5cBZQeUYwKyzBGk3yKftxUDVrYVJnwyxA2jpALVZtR2LBAFwpXNU5CoEqA3KehnqdzDPfnebLzLPgFxjGrv",
  "key38": "2wB67RvS8N6NqojLqFyEDXHrHZrb4qLah47Ws3oArVoLcU4NEobWY5488YDyFUZqsTVA8cAicvAXCMU6FPyoKiaV",
  "key39": "4HM4w8sxowiayyuimkMLh36GaAzJGV4aT8JBkXHiR5hY7gnh6b3T9qL43fEW6JHWXu6DsU8TsH1qqvonMwjuWh4v",
  "key40": "2eXnNMttxNTRJiFRopV8ALMAKeMvAuKd9RHfPT3bpqMBCMdiERvV63Yy8W89B4b6thE8HpL59soJYY3HQo1sHt62",
  "key41": "5FeWhHwYnDkrDze9coP2L1TDZ5F83sDCKGb3Hpsf4g8MH1Ggv7B929VjKmethzhH5ksNSoRox2g21yN4evWc8yET",
  "key42": "dPHf39P6av2Y38YExEdLJRiVJtUG8Bt1ERaEgZTyjD4DxaCT2EWyWymz7j8Wks6eAAtUuLyHD6bcEF8HwdLzQUU",
  "key43": "4JUtm4JNno9JEcgfwxbwqJgPLRuk2eWnudh6fCrejcESSuBhrUc5dPEqAGwbRczh2ux2oMDsQapXZ9WpEeEAFHPT",
  "key44": "4k9voGvSFRA4D8nPGDgMqVxzhjWjM6rFyZfX88WUtohDLbPpj5AdruthycqjNHtZXBYsQpeH4E4GTQ6Kg5PbEbdK",
  "key45": "3JnDofPxXXWJPEsbF7xmZxzo3fyLaGSV8mFh2hzcbqLsKpkUkAdWyEJKWNcRAfDgRuqe7mihAMW82WyPcg6C7r6k",
  "key46": "5zi5BxgxzH8g6szDAEqsT7sy9oZ6jtNbDj5vKwWjjPE2k1gAER3riNvDG6ibPp2iUANfdrnEToBNUfcNrmhqDivj",
  "key47": "3PPhAX1WFWuVtGm1jMB1cPbx62AVn4a31oPwSLLN2s1L5wvj2zn4q5wh69GFKrPygBLdb5mZXoB1jaqSs2psc9yU",
  "key48": "3m4eDpC5RgEuktQVUfSbQTiCmMqo5wmaScRuQ9qZn3tbcxkWq1FgpWfSS3Qcc4gcsLwXh6sewEu94un5Dgimx22J"
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
