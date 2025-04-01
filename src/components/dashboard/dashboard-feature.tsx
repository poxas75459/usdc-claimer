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
    "67hNnbhhLejbJwLiYwmYiZGR69sRA7rys2DwHpaAHQd6k8YK8uCySgtqeHo8EFoNvLXyvMap5onzTJjRhoGQ9qPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKo5HMMLr2cvJRNarSHGq78oZNAXJX5pjqhgnF74jAwraxoT8j3AWmMTv6D5bZjenztkwmMXGGBgvz5Mco8sicQ",
  "key1": "3rfgoJt9jAS9TgmgqaxcEesgavyyxads7rE1XXtsYWNPRujcQrBywg5VtskXPjLk5JggBKBidLqL54zVbHT9cPZe",
  "key2": "3YUj4kto7p73RrFC2fuMFusFmWYL9AF9HQGwyErqHEU8ocBF2Vv5nqAqaE4EtynL8sy2aTHAnNSUe4aNbv8CjLaP",
  "key3": "56TWqy3vsTYdFuwsWrES9cbvYPT9SMQHsAZtH8j2VrWHiDuohpvr44V7qXLD6oLRE5gYPh5yCksp6XunCJ7XASjy",
  "key4": "2wXExFsK75G8B8oMYBxmxJXUXk9QFR5MgRZmEP7FPYURTzNy3AZLNcR3vhKwpa9wd9g5MAjauyr8EiuQwUyPx2oA",
  "key5": "5Bifu4yNMu1EoBaVwAZWokFyk9qTCT4tDja6M7YAJ18uFSNpHhS1Wg2xAUxJnQp2jAANSCGAt6sU51D6aQRV2iVu",
  "key6": "3pG4UcgzGaC3PKSnoGYHJNd3g3mker4Wu2pA4mw5gV6QSACJ6mfwAP5dbxQqbAvgDjc977MMWe8d7J1Vg2gzARXu",
  "key7": "2cZXzxuhEknnKVPD5bHi9iao5oL7gu5VshxjhHE69GESc4y5w9JMXKdavSENG9NmA2LjsutyoYg1Hs9BJYsPWqaX",
  "key8": "Vey2wca87EpsH5pcfQ3s28zwd1RFcDDV4dBSZFy33bRzY56uaGSebYwAnHkw5VJ8LYtjyXQam2B2SRgxdwDYAsZ",
  "key9": "JKSuLWrUtZcbhSGUWv46kDjuf15DWoKLDZsRFxxZ8G6RRGkumEuzaMNsAoLnScvkvFDH7XSLugHPmnH12W2qs3Q",
  "key10": "4v5P2Kkps3g7CpMJun2AiKfUeyLfaUjMyyesXoiU72xtAFaYnFFxpTFgEkDoycFi9zDsxWC2kHBsNisqtb7dfKsW",
  "key11": "2dXU4DPTfMjsAoVdnTt39wRAjK1sNBwpYE7xjWLDEf1kAFY34w8vXma5ynfDctoz17KCXN1jALN8ePHm5KtMQ9CM",
  "key12": "47mfFMs9y9hsN7SFsD9uQ8TfEt5gDnkgezW4MLRhjq8SH8nQnx2fFRiYhyBVCtpfKFEYY5Z8dtCL3tEFdhGb4EVq",
  "key13": "2HsZzZsrRn8YMhuwQphP3mv2xLYnbEr6vMUZN2bask4F7L75jWg7pdbeqebCYThj617bUCoRbSugi3amqz4kVxyg",
  "key14": "3qX1MXznTgy2epSVEn4qSfXu191b4aTBxYkJZHJhsap4CaRGsrLBBumxe5pJHyX4FaRVn7B8X4RjYKMKFxB4m6SA",
  "key15": "4yj4HLwqPRkTsUrbJfiCwPfZwEi3YqzY2zLQhvfNnS27hqcJvM7ieam4HFeWkrVjk4x7Mqwyw67iAGJrgRitEAWG",
  "key16": "4TZ7mWzQtF32YyermWFySDNXVuqG2i8djEyGKqB1bGZTLuXgvM2ax5KSdm2ykGtNLNDcWHCtKb8jgBFc6Tb5K4U",
  "key17": "4tFA94g3H1o17HdDfPczypZq2hqxZXeWvmqpAw4jvwtfiqWQj6EDR2Em31GecYfuVmRcya3L8CdLumdY3D4Kr2pM",
  "key18": "5UZASF1BLVLwqbgxia4BmjUfmk2yttDLTA2DBT1fzqGNUd9rVeYLJYvL5pbhPQrbUGxjKBZ6M65zjrD7zao8C5qh",
  "key19": "5QhevQ3o2qNJJi4QxrbmN5RsnxZupPca5QfbJuAPU9AHfMYwzG3Ee5mBF4fVHg6x7HaP3hKSdf1sL12FYeLhkiVV",
  "key20": "471bDoLj5u34nkahdzxa28e24TVKCGVFLDgKM9HBQ9uagUi2EtKbZqVeRpCG2ENMtaGwJxzap5FCZPRNsjKdmPE3",
  "key21": "2aQC7FtTB6mSbAkaYs7h1rydMSHEVubAaP9ac37Jrn7H6cz3vLgtN7TsHeWko1y4cTsKWonvraR8bTNjf7G9pKaz",
  "key22": "46zgQ42FcXhFqg8dZ1uy8aCsJ4ax8Patzaf41H9aVjBt7aPyEQJF8yx2GLzcNybNfpgBoZTDFThvTKM3TrJsCYmN",
  "key23": "5wsedorkM1KcZgA33yRraub2gzXMDZoStkohHsBfkrDttKr5zP4AJ9En5UeGNLaSTFfbuUk8UjvdkvjTHJrG4ufX",
  "key24": "5u6VDndtPpjrryCZzhV2rHY7caktEmu5hnto82XxqcHrvBEA71brWE1BqkCkYCRN8HxnaQexLWrd5Uye7HNGQwHu",
  "key25": "ntWyze3yqLNRyMiL3zLpGBfKH8oxHRbxJpyK3tgQwCg7PwwWMaeNnEGFxPC6zMasQRzdWuinxvFyz3gLjygJXkW",
  "key26": "2ob7qwLniSABNXUwQe4LEfDx8FXEhm3sNTEsTomu9xAZU9eh8BfGoMo56qZ9pEEoXKt45XqveQ1dzR9BRzYSqeSH",
  "key27": "NwNtHjow9WLKEVgdoGDLKxw89oB5SU8rKC7YEYrGpNhCkxQEuqrwGKPLoT3aocAkpqeFAYKBvY8G15xT8Lz1Sev",
  "key28": "3baPQXpjDgefSMwgyPi4zRFJYM16eKQDFEAG4B9mkAsuHto6KaBNUaYQ7uejCqY9moHgu2zYsxKpKaMA4RtMeSKo",
  "key29": "2Bta2XqwKdFj4cJbdAZWwh4urJUqfYciPr44fz5JVY2JkfDJTMgTjQaCouAAE8dnjegRCf6ius4Rb6QJhgBPSSw2",
  "key30": "45HneJ6jMxR27CrBaPvZWevNhxiRxnvTcnMbS39FWVEgypTG47nGk2uV21uHRRwzaARsJyJXQCCg7eswEbnHq9fa",
  "key31": "2rR1MS9mmAo1fcrgRqFhMurrHo5zYa7W1Dw2rxKtYgwiBTbAsrKsrN6pPJbvyPAgz8b9T118KwbBkDM6JryASvHK",
  "key32": "5K7LuFRCGm5VudmMUkxwsBVrFPJbAsz1Ro9341nqhETVFn3cvzRq2LDzpbZtxmdzFmeeZuoikcQGD5D31YuLCRLM",
  "key33": "6SuK1zVQZCY4bJjZnihBkKaJLYBckpPWbBrvDCGzE11dr4Wc4KCUvAka8eWE8UPN3NsUMKRtSwvBdUfD1XcQ9xp",
  "key34": "4mJqWZR3GQTFGLKSZr2TPRqrgqp8N6NgEvAyVLawhWbRxvR3bHSWU69i2M3EXDgNwdVnGLvSikYUK11EWwQRYmTX",
  "key35": "4wFByjeSGCkdFmSts6Rp6xLq6diqTsX65NUoJu63cUVrzs2eaFCxFmTdaMXL5B3vuDFqPgVbHxWVB8a8GFGDYYM8"
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
