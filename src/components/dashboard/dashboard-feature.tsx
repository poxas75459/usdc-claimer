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
    "4QbcWKmR9FssYuD4Lp7CUGVa7YKiKLWBkAHfMwXmJ4PqTAyK1H31tWfjF34ZDZES6b2KxxtdszpkrMEkLmLLbq78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdWfsLMW9jeki3cVuuDUvKXicnNNSFJCzgwH6czmPVCp5EycvD59jkqWedFR4iERZvtuMbryweZU2sLfc5nUGKi",
  "key1": "5o8scgmhuAPEktgCZFZsvKKJw8k5fXi8Hq2eWMWW1FmXZH5SBiJ8nnjgD7QGEFqhugwEoRowZXq4RMyP3J1g8ze4",
  "key2": "3As75NfGeT6NzSZE6eB778HHaySiDtQzwdhHCPrvVWy1itmUDM5DD2DDtbsExu4r5jtFAn88EAXpidSB43gngcza",
  "key3": "4i9kZ5dn8nbQEQgso6HVKCGGA2up1obPjLm2w8jojXgDnhr5QSi7bYPdXsCD1YyRcNPZguFrom6FanGxUfbtyh37",
  "key4": "5u4DLXpRuygYRC299bRntnxdgJ5KRuHpABTiiC1B2PbTdAbuztMQ8u3Ni1XhgxvHZXrMKyYwXj9xHxsd7xigbYmL",
  "key5": "4FmXJ3iR84DM8XSfkMXkLafLE8UJsjL6adLskV64GRDv7BtP1EodjEVPSqgSc7G1VRkacjTbhYGFt6B5ohmPk35f",
  "key6": "4GXJfEwvnvtTiVzdjMV7RZb8mX4iZvPWQuDdbTdLKBoBuFokBgRgqrhScquwACADHk2gtqjwjKn2ZXRgX1NNLoZh",
  "key7": "39Ca3fWfYSvf855tLSCaRZYFRBG5JPiAJU1aqP79AqcqWzSLWwTfb5UNFFFyH9B3K21QPDhzqc4m62XWhRZanGgJ",
  "key8": "2kqGweJK1AYYC3jH3vCZkrpfc43aEd3mHGEnd2HBGEAmxte2vYgkex1nt4dNp7Kauq1LLxVwXV7mtsrrpkcUiT3L",
  "key9": "cG8n9aaTnscHWAhP8Fb9AU526pPemeyrDjxfrRYhN49JpWWuM6xRESPWG28fmH6TRLHwzaFMSBKPyYZp42nVd8q",
  "key10": "34GzLnsCYtiikfsmPxnCs9c3cnsuDV4apuXxkCuTxD8Cit9t8Xkh7A7eRS7aDg8tmJVG5PWWykWQXWzXUKirjmGN",
  "key11": "sLxeq8MCR3Uqwn5CmGXtsxcwHsxgXCi1kiD8VvRQpRPmnHfdap13Bbm1y8XEzCETkM2B2dsTv62KXSAWdVWWSnu",
  "key12": "66Bd2HrTFKuMdTL7WEtDoLh25bJfbcXocuHwYwNh51KkxZ6qhE8BnEvZ5W4JKPgMMsaR5qm2DEnSBamhANumVXF6",
  "key13": "3F6UtuxkpVxcu726uDXifXwzWo72dKW54fR3opYs2qLMyFHRTZ8nWDTnbrHa8b9aqkHaGQ9DBewHcGYfBZd57JCt",
  "key14": "3YNCgM5Z93naCPkiyz8WQiBy3Luca4Eq1pNJAmWMVAyzwVRno4XsNEYnCnT8XPaUhvnHe3ZPEmvvybvdkjJhBcxw",
  "key15": "4MMs1qtgajjmfxFCcpfn9nArqpW1Dtdc7zSRr8T2vNY3TpRXwEJ3b6jnNv2CPNrM8jwc25SJDNFnkfM16ExD7JVF",
  "key16": "2zitc5A8PEq9pUTjWnaMSmBNntRadTUDg2XhweNRfX98La7N7nDU7NVnbcxJ2miaewy2f9V4762utsLic35MDjFj",
  "key17": "Yddp4oYbvwMEX432b5y82vRM2Wnk5vTLywCEmFmBRgtnkMjeLiFDzqD6L2v1yynLsF3EHhdbRqvD4bgD34JVFVC",
  "key18": "5s7n5qYrDEijGJZAheW29eYVccxgkBfS5XkWzXmNVaDJKyzGC98v14EEPf3zhmyXqjhMFGo9XjYRpBJuomM5wYRU",
  "key19": "F4ZQpbeMgpwHKHosvFwVodKMWGejjxCTwXtuvhBY4gkCKM9a8ELcuaXET7qPtiPGktW3wZ2PjmWKBcZYNTP4Ytg",
  "key20": "iXfT6tiXEGdz3wnxA5bsKbmvLKTdoxNgeceKuntLQFxDZcekkhPtoug4noe3L4ZWeBJ2GRCiLRUczu14FJiJ61K",
  "key21": "56UMsEJK2GCDzbopU6waKyC1zgTZsKWJvsjaE9v3JVcEVkU2yGESxiDCTqauq2CYkeArgZMMcpDqaVZ6em8nunDx",
  "key22": "3Mxp6gvQp9nYwFGz78zyUjeTGEaqNGQ5fHuGwEedou3oEMcEDHjZUPtAJou2MPVxkNG58BENij6QU8ruU9VDSvPx",
  "key23": "2ynxt1V7A3tUpZeYfEEhBd9hmU9s85wbP3nbj6LzuDamU5DT6V7uryaUebFdnTE4D9qP3KyfHnsGXzLkCTE4esej",
  "key24": "4doe4EzcFSvTTXoUK3fcXThKsAoZhzZMLYMsxqwjq24BhFddmjjGeS3QkGmXvjFBMh6tn5izDFSmYq5xX8h8rfR5",
  "key25": "3Zj46A6cyAfW8CKxgwdsZQS5zWotQS3GBF7Bmnjh2wP5sB3Abwe1VcVC6BrErR6ZfRFZcwo5ta7aaxwoBQfeb9PM",
  "key26": "5B9DAgjAVrXQ7j31afvuA8rfz1qyxvxrzpjUuzMXLM2uX3jfFUZz4zSBNj4s6CrC9thxZQndj89h4ozTRrm2KepW",
  "key27": "3ydLNQWGeUUZyCKGSXcDHeMZMQANqXrYNF3qVQGYWtZpdq17VYEdMJ69HYkMjfDJGPp4UMaABdh3in98vqCiFg2K",
  "key28": "poi1S2yigZN68yy9V1aGkFxGASdPrLkHLBxm1t8oHVhijg73Ef6HBdbQKPbwSMgSo6kQAJ7TjLBynpGSbVbsaVJ",
  "key29": "4arMEzWwrRNS3JtUA6hqn3u3bsj3A9nHxuWDhtu7eFe9rbhsAQFwWJhkNpXaRczYN5Zg2uPSqNo5RTmYhdExZixZ",
  "key30": "4F1JNBABSCNwBGeHZJA5yzBZNBu3AE6t3aediiFG83X9yQEYcYsgdRfN5GZNfHPfQbTUsHRf8qc8XKFunfsmXYDL",
  "key31": "4Zn5qE6iiTb52AWEBjnN596wNqFDY8zUXZsv7x7u8UwHMMtYSNNWYiGewRtHdRmGRpZmSPxmiSyMeaLxCfWHadVF",
  "key32": "2Ha27GvoqsTX8n5kX76nQr8cRcE3rRLWEmFbgYRJAkEgTa5T31Kjiv4XAi4nyoEkJ5qSGbEkYRDSp2bMnAgYAcrU",
  "key33": "TQWYz43PGE2PLdd1RwkVKYQQ4884wARH8xYjtnPy42WHAJo1M7eGJcfB4CEjbYEngxro1TkCii2eSFyauaHkGdy",
  "key34": "84MJjocKeU5nfeV8KAq8RFpzNXR7NBxP8ycUJP9GizGzj6GSYP7mnAZ6ZpvuFjzdmABRYehb78SkSPna3f7QCNn",
  "key35": "2YMXAQErYEDMjcmp4pRHtYpVsWkm95d1Konmh1ZMzcpEfHoJSmAWzBPTPfYaK2NPQH2JQmF1vrgDGDgiTviwzyXE",
  "key36": "4CL315vNizvisK1MCBS9EahwYGq32RTTmoD6Fn9Q9tGKm6Xe2fg5AKut87FwNt9hftmJprTAe7421uWfjDwn245n",
  "key37": "3inGYeF4K8W6y6odiakzfrmvuKVSDBdNqdJT42jVCR4UCYUF1ygfTYKsHcJcx2GPznQa7qfA49vzMyAMjcPA4SPc",
  "key38": "36iK9CJfExV8cZ1nwyEzAZ4QetsgQWJ2W2Xv8vwfQ8dDCXHQxrvfHqS6rSNvahfgJ9BqZtSKboMEZNYxPtTSeTci",
  "key39": "2Ard2upLKiYC3KRcxEesQeye7efSqNUxp9pSK7JVYdVpJwk8UCurSaFRgc9yrHMmiLxdJLgkdA5pSP1BvPnQha4p",
  "key40": "2P143QQpNHvkdEnWicx6KYsD7EN1FjyZyhMbTYuDjYyvhk1TQKE7MydC8ipG6hWogeGGdW9fLvw9HLMpUS9F7jdr",
  "key41": "y8rHKtF4Qpm6dXkZELoem8Ee4JwUuECMPpgEoXxJhVDbu1oyQVGZpFgnPUB5zLo4vRQvDy99vpGwYxLHMnCFAYV",
  "key42": "5D9mX5U9NBpnZ4AzdxqWe6G6R7rx9u9QC8miVGzzb7dUsx6X9cE3ykXJG4Kxsgps4TMxyXdTN8geHwJnjc6kso64",
  "key43": "3k6SYu7EVR4sojsuB4SGLLUsYM2c7d3BEuB7dukGaG8ZoyTKVytJCXZbXoJw6hfWp4NJ5bcfMnvp3rdhxCH6vSRd"
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
