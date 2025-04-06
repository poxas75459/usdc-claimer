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
    "2EJkgGBRTBtZpctKqsiKdnruXqGKYxjFUeVUFk7j1KUvXwJ5eMvspEJ5gFpoLsUHbDNPFyRgh3jz5aPRyTcsRPAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSFhqfMWswMemKQ8TLXrfnYHT1aD5MxQ4LN2wxTSAvS23b4iCvtejKHfUdofUqrb6WoS33HPYMQTSuksFvmQ5sg",
  "key1": "2K16HUR7xPFATBtMsfweLLW8enk5xJRbQGfG454qymDk9ayDr44fefsQgFmJmsy8tjE7PgijFFzyrtSSzpWNhe52",
  "key2": "3KCPVDhsmZDhJdo4w8mq6Fdbv3TdtitnDnk2q4K5hV1n4cxRhq222945MMDB3HdDW7R1kgxt3Cexs6Zh8aUpW4HE",
  "key3": "41KRMPxEcjYbCe8cAJhcYCU3yV5QRJNo8mme9cAVynVRcV5d1DLEUMzigcQ4SJsuKxcW8M1gcZzri3Ee6qiCaPmg",
  "key4": "5Ggpo2dShVrg5JHavrvSTjZisHQyxr3ocFgYBoszZ3fNwYkyyYpY3P2bEUhwcmLZr6rCutu6FE7B5u5T3NVnaJ78",
  "key5": "mhg5pLr1tD1oUZauYRD4rC1vP15KT8yJf7pDKuvqj5vqVbbFPLm29bKYzSBqgtfTp9uyc5vGphH3p3LJB59HJTh",
  "key6": "2sEHHpqAW7rCfCA936MY81RkMMSHiFSjY913p5LieS7Xsb85bcB4gKUiPT3dqNeCkETNaTA8HJ6DHeVwkwCxdhqX",
  "key7": "4dyiCbGWL1WCMrYVzf2ahjZv9uBy1r8jPRXcdUq91pssGuxX3ibfc9jfhgq3sLcDEPKqP6bweVvDtXZnKfFDexwN",
  "key8": "H15TMeFyDemQh8cKgtaZcr4L3VRXV991oPD6Z2h9H2L84w2mMpwQrrzJFAkop2nAzNCqEfGBAG5qdeG9ZB5nCvp",
  "key9": "xyVBTLdztT6Jor7iFxZfFoKSZLwbkgzFUv5dUyzUkdPCgNVzo51Gfrusz2M64ugfu65dqtt6VpgfxVeqhSiWSH2",
  "key10": "5RSWVdL1Pv2j2e2FQ2mgrR9jtAYWgbyUAvzxpdHN5ii2WXGRz2sLFs5Nf8KuorZ6RwxXrrrN6APBSCX7MjdnG3b7",
  "key11": "318njzk2QHzcDqRVTRgYLn4k3ayKK7xADmVkfXFNc2riK2883xnDwBZUk5MNwPxCPKCXEKkVMAiWW84AuVWbYTsL",
  "key12": "3VNmh4fctrb6QzSwK72CdhCrmWSsKAFAVNaMYaK2dWkyDoZeQPHFVXkeN4U2V7iQHpYxM3dKmdUguij3qzYZaSHk",
  "key13": "2cE5XjfxDFT75HtDhEfD3bWSn2h84kEownwyT159x3paPznioQQqXvsZTm1eS86VVQB5TMecSyKmqYrgtVfVyMLs",
  "key14": "4ZXce5DDby8pnkPbYZwxwrFip4Sae2rbNbTn9sccrnRMS4NGcchMnQzE2tD35N6ZXHLrD2CJ5Hf61DdQJQ8qxoWa",
  "key15": "3FAx5g3G1U71F5bgZKVE93wBFLi8nVponbCxube3ZH8nb9AVV8CLsUD6UmtmLqHuQSnrg8nK5KSZ6n4u1Qd4t56s",
  "key16": "57eXj9mySgXY2MfqLkUywss2ChDiNYKiZHTh9rwYkhEZ1vXJoZaMoKyDeVdaerNELamTidFNs44b8qsfFttWLHsV",
  "key17": "5tVZRVbH2KziuEByCqDDQVtAoSrUsnTfz9cPVkjMvPdEFQg6ucqAdKByifdvyxVwzywExeMuijNZNfgdLUvDST1B",
  "key18": "3KvAAuMmPZARGABBhzgUZjfqTUtbNcFssBVZjVLRCT4MsrQpEMcFsdmitTTadP4dmpBPp84DPcxnLL7hnmHHoweE",
  "key19": "5fzaMqQG3spUXQCLt1F48tRTEDTLvZicfBtauQHkuSN2KtGRNZLssdsTHPMdFUcKgdVzgBJwqLmeucd7ZnH4FW5F",
  "key20": "4bgEeF31NyGFc9oN9t3S5rRbwZHGA3x4mmCMcNyVs5ja9tPATG4fEBmxL2STx5z2Nvk6bkY77YZiGx1fhd3bFmrb",
  "key21": "2NKBXCeEjNzS3k43XVGJafnVi5YLtV6Dt8wKdqovGzRxzaKhXVeELgrbW6zafHSPvPRKcycCJmB3Gxuam25SnzFj",
  "key22": "2G6YcXSWiSXdc5yLMUardVkRRZ4cSsRT6XeAXGFYDbq2573FpSP7eSxt6AAdntq1voNzpARKSut54opexmuf8XsV",
  "key23": "2C7Fnp9MY72b5VsQhTzJACybnkePD6E1ykbSzFKBPhA8XCWR8qF9MSPBa1ytYBBG4bSMaBBGucqF28ZhoUUaCkMe",
  "key24": "64bdRWbFoAkH9yPSZ3eduZ4HfCYt7227MKjHL1P8xqWBmHjbsQfYNQRWmxPwg4wRf61PLSEanPet8uohBKA5Uikq",
  "key25": "5adsMingg857TK1bYd4Ri4GABxZgX9a2tVZW52GWfo3PQNRoUqZsTPKSHUkCBTVnGgeEDdhL8Boj8xyaG76jDTxu",
  "key26": "mvaBMp2PQEKKAFtYyt7EuyqEBik9xo5Z5xw2ouaWifUY76TxeuufBEMqUxyT6DcJDPGxGumpzjQdwznfPhaj1mP",
  "key27": "41QP8GZumYw7wqUR6orjKfyQECgkmC34E6nHyLMAb6B49X9GgeoraLiASLLLW4PUYFQkf772QXfCLw7rWnPWYZie",
  "key28": "dHTEBdQKHzYJwTTicjFDUPmbEguNGboXLXp5HZUx3eLBnMxvUzgWDQGVUFAgPHLANwDrhQUd2wybQDvVf6zvdjo",
  "key29": "4TRdazph4TqookoBoFxzAqaV74im2GFBqgehHJui7dqov9g8vD4FibXNyQR9SRuLgufGyQs15uSSQUd4s3emcSPG",
  "key30": "3rXSeb49nbpuchK6CCxmpB6ECkxbJRCguwkmzKj1NnaxDTLMsX9t2osBWu8YJu6hNGH8frJGZqjRfCNQNysuzUU6",
  "key31": "2atVJ3BRyCBws3gk3b96dxNhqgaFz3qxfwF6SsBzbUjAzBGyZtvgzrc7aa89D9tzc6FpbeqbJqTxmr8HgVwTAaub",
  "key32": "Jv7mSBmZgVWgfL9szRRQcMkMdSt8YoFrCqj8pnzj6NwYUTmy6KXo3bkCo1eEGPemrjEGHZ4TjaPt5LYxtgRhv8X",
  "key33": "RaLruR72yMtTdcwWPb9A6ryChQat8gsqPKCMbQ8p2ij7MjfrpysC8PeVNpWrdG1yak2BA4DGRbCBMTXWPTZtWXj",
  "key34": "2cbNxeCJwidJsYo4k42aGjgRUxNn6YMWGXVHuKntX7FsxCqYNDkG9eBR4CY8jnrzNp2vwBFLUDxdQi2hRKki7cm3",
  "key35": "2NEZLLErzDDxmdUdsVAfCGf2cUP5QMLAwkjYDQcT7EygQAy5LEeGWvLcXRD5UwBkJ4hHg4VqcjmqTijSnofzXQBR",
  "key36": "4CfAf2rxoFCnxjpBuu8zdWGeHfduBSEeJP4hc4rX6fjZpWbJQd2Yrsbgw9G3mJ6EDwYkhSvHNUNFrd4LvBBE8XTY",
  "key37": "2Kh3kbAqpBpYviFyTz93yQ3ekBmAKybNmz6vJKg4VB56rZQKRCXHWU31QKVyZoZceE6HQfmmt54RsstDtGuT3q5h",
  "key38": "4Fc6hgiBHdqcTfUugn7A4JzTQYtissYktAjFj9CQdou9ZP3jL4NZuajttukhhyDoBU5Af25w7ws4P3ijsEqqVsFu",
  "key39": "64qSNMW8D6qSgUdhcLEvUaxCX37Xaf617f4EgVz9nKjnCyXfiAvEpncgZ4TXFxi1gVHLEvFyHnTpzHi3ifxHVyJQ",
  "key40": "5CMHaUtm1VsdKH3FBCuoqZ5JXsww6k7H3gaP2uwzfxQxvVXowCKb3V29xgHk5oHujrUXNV4wQNdS6sNW49Ln5xdN",
  "key41": "5qc1iXYY9SNWafcVYhKQjGqRWjhaRB8iqRg8aU2RzZYWMqR1dRbko1kpx4GpQDZjKMy6wk68FNVEje7AhstWuGjy"
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
