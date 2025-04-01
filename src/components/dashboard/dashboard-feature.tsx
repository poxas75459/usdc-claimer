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
    "2G72Yw8YUb2zxBmWaCAZqoFsPPQB2GwczRNawX7QvaE55sQkWPDW9eNs7uhkrzYukZX5VMABxFrSpGrSKMmmGFJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQMHwrC7WqBFa4mXkNLhUkET6PgdEUXCV5YtppDXUJ2uHawqQHFoS4kVsdGBYSAfhyqswpdtjiUnmxK7ZWdhGhi",
  "key1": "JiyRTN3rBe5N2mBjRZet2FeQbpqYgRG7CAx95igi1hVKZBXnGfEpGEmbWS57fxhm2yZyJbtBvrnHFbfEq86nYEE",
  "key2": "2i99VkH2u8QSdtpkrN8iKAas6rNLGaRdx9gvwuENuH9WsMGk1aeGUwVUCPgWRCMK42fKrxWTyC5x4dKsNyZNRaw6",
  "key3": "ePJD2wy2Asx8Hm2vLA4t5QcJLevzUoe1VucWbLfjK7S7MCJo4TAnGmUVdm6DK6P7xMB2hzavvmjyKcWizkGucDG",
  "key4": "3T4KeiHr8yDrfpX2sxLdK3DaZtGar69V2czrEgbC2nWm4icRWWa7wiHUYonmmcnsbxoLP34P4VyS5mUbZ2iTFfuA",
  "key5": "5M4aQCUVCbmoksAUeNsRdL2tcJGbZvzTk3pJDVBdoJgt5pMKfXByM8hzgJtx3M4J9UDx2WCh16Mj1UmHu9TqdaRV",
  "key6": "2761WeQxhwXLZyRDQZbeffJAAXou8sojesgJywrRZ53wwxejLT6xqdtbb7XhN2v94d6jmB987ijESLdjnEyabMai",
  "key7": "28Lis72CrgjFMHpLFB6cJVVE6geqLRyDWoL3t2A34NnHiTtQ9Hs5xd6L8H8R3R24a15TEAKNXy6actMSV6jwDUkN",
  "key8": "3zHe7KSeSQRD6EVNsb1yFnhuZ8vZmx98axmVFt5V8s5Ln4cgtdQgudQpi4sq12UT4HDVh6r8gz8AS3KVwpsah5YH",
  "key9": "8i4bdU5kANcNZeu1C3HR8q3jSmfZKharDWWGzjc26Z26vpuiidLqpB9dNYJvV5v79nYkRgjrvonkv1xAZRq4fPF",
  "key10": "4HxkmM14PTj6JBUozhu7w4svwvseW538r9bx11myYdoKVHbCTPyWW9pt9SkLX8o76sHXdoQzfRzRUzbs6y7ng8i7",
  "key11": "56ZJPcuJZFJsQRU3EjgfzyjSPd6FQ6iruG8SJ2T5rvd6yfFtvcYePdanAiXP7DB5jhq4mis5GWZH66zKxNoK1cf4",
  "key12": "3zKsHgnDRBtDaZkHrx4TyUQSYpoTm8W14zU8kuJ4zaTiSXmhnZGrGvp6g3njDGV7gmndm12KtTsr6HN97vhGrFzH",
  "key13": "DCUPArwAYhn9bP46Uw1Uos5Peq6hwB2zPPDvPeeD5hnWTPn1vusppKvDG3fZKKRenu3dWSSFN7QXQ25kv4G9CBk",
  "key14": "5qw6dNzQrPkTidnLN3NyLPmh5VRNPMJvH7cWu8hxSugBrs1f7TSGK1TNTefu7GXCzCpQ6ZouwRuwHdoWWzZWa6Nw",
  "key15": "Y1UsByRrp64Tmg8eNhqXdYJSjjKN5iPDcxoxv3G6DQCUQZoNY7JBbQVdCg94Am4veFSfpxSD7mLbrDMrzZtrTAz",
  "key16": "5hF6Rbf6xJcqR42Q9vQM3pSmXgzZXfAtq284eFvVgbGWrHUXZLz3e1YsxKDd26hNqLJwyvMQJZkadoDstvQTugkG",
  "key17": "4M2ugkfF43D3y36XfKsBUn89ongWHy6vwKUHJF3TnKZz5UVPiCxzs2sXKwQb6FgTXHsXYuMWsEKqYkDJKsNzYevs",
  "key18": "56PCs15EM8CzB1GpshdWUGSRrDAbuU4BRWpyb5M6aJCYUkJNigXt4o9dApK5s8sarAVGNvv6uEbdsj1Yqw9LMrQX",
  "key19": "3EDkcMQXhzvApH7XQHFHaXNw8DW2hpZ9Jx614WpMnn9UyAHgoqjTsm5GSmfsP17WbztrexwfF87gYc9o2i7rTVW8",
  "key20": "PXRLy4ddVYCBdHbFirorX5hMohKQir4bHyRKbqNYbfK2wJGrj5Ue1zXdozw3PT55JmEHrZPHvngWsapha83nNXS",
  "key21": "KeHBvq6UrPxkNUUGugQDnu96Rk8tC9bne2uY4UPBK92EubV57FkhPhX1hcSxqn7s1fZbTNT9oxSZUpZRb5pFzWK",
  "key22": "3qpCeWGev29iLmerpKbgUtVTz5aibP1VHQH25LeByAaRwgogrxo17rX3BHbp1x86dpYQGBMXSBsLf7DgVgsQRbdh",
  "key23": "53DMGbYfahstAYHscop4RUA1KMth7X6QRHo34T99RGZLxQW9X1u4MG95FW58Fncd2TLT3Q4hd4QBYn1iS6YKeW4V",
  "key24": "2GwrLUNsm4XqjnwazeHKhrKGdDsczXERnxr93vQZXVgrqBwZasVTohw9f5Yd2kzz2kJ5H86c5um2D5J3rtUS8o1d",
  "key25": "ezS6j36v35THYbKWKR61KFvXmycE2BgqLMBtYeE9XMk34H3FyNpYCK7wkgQ2axYEdDDaK9qbJZzbb7ZRNwkeR4s",
  "key26": "5XPP2Q6NavZUpFSRS5zbUTGWPa6Q6jLAw4dvZd1ZPGQN1QmeveEiXtWipgC9jTpw6reghwv2HpUvyhdB3uFgCCDk",
  "key27": "2HUn2LLJiwvg7qRN9mKUAV5AgBV127tWGsYC2FJRocDU4JQd9jqKdsbUnTZj5aHncSwhsx9kB2JHjsFTTx7TEfrQ",
  "key28": "5PiziQ5C8v268nBEQrTTJu7fSoZ2JaWQUh3z4Ph4Ws5ysMuLfrmNUvZsF4iSsYRswkXe87iVK4JiBxW2Np5gJyjd",
  "key29": "4dChDYhFnCWkWcSKWxn4kcsMJDTjhgi1wx9ZXG3uGmSWpfmhveHTcphPbXfYLfU7PqrnsuRCd8H11RTbKpyCUPas",
  "key30": "46QWGZfceF7wPkGNvMSPVeDfJ6pkmGCxcSiB9k1jiJSwkVhxxk28FPNBmabbpsxZRZH3evALzWBShsCHPy6ysjxK",
  "key31": "4b3x61BqBVNReLhR33YgqEjSci1TH4dtuwKbQJmKXxhNGQQb4aHEyHuH7MdfJEz3Z7PpYGdoa3Fs4rHCLxzB6m7c",
  "key32": "5RK1aaGMDL96xyhXdxo14v3oKo2f9iFRsbJCHQU1RuF4eE1cfZb4dQgXBHq4GwihZh82GUAYjHKJquVz6GgB3Xua",
  "key33": "fGiDcpZTb3D9uGYNQhutQWo1y9vq7bPC9NaASTkmQqSzr6HYctoBA7sEAKXofF1FeCNtgqpdnLLaktMMVLqpUCU",
  "key34": "31tpLJDjLRNakZhFFNzrW55P8inyoKf5AVyXJzjNMdwxjcTqZ9aaUf1M5weXQEXLDfRYgk5Vtv6aPa654ZPRyQbc",
  "key35": "41qqqF8xDkTqNKRzNaFYg8eQXLvHvfmPc1sBNmGXpqLMnZy42J9zDaH2KLkW7KoGshhocPEsLWBoAKC3mHzaonM6",
  "key36": "38DYDMN3oq7dESsbsvWokcdm1GbBuTgJQ4MARxCLzS5kJfesLkNug9VuRBC1jUvodNvcEVKmcPm362kdmLePdfgL",
  "key37": "5RFkZhsnjTG4qbsfJM8JL5xDJMZRePZyEmywkCRwREiFTgkuoCS6CMZs7DRSpYuo48VuxcrvDYemcWKK6mMrc2Lx"
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
