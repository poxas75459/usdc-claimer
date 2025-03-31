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
    "38Ax1FeL4SEgt6Z5RjN1XkjT4aCEMSnbecPSeFFrwHNaUGMpRZtMEZfKeJ3wFPgCK5ZWQRCmQPdBEBgy2tn3zhfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxWdzLiQL5Fnt8x6mXEarB5sQwhhEsFzhGJtN84Bdntgrdm4RvSPcFAqmyAzwTTjLLAvFnR1Tf3au9onD6n9vrj",
  "key1": "pW4yv51nG9nYWf8GJxd3kdfabVbvA4h7qTfL985PER4rYvURHXpb81uX2Y6jYrDLPV4uoAjRrMVUtNFkaiWMKXz",
  "key2": "JQuUoGYXzVNCJS2671WAcmc7xpiJbeLtnfTBRyR9wPz1aT2k94hNAV71Gds4SbsGxXEiosuViHsUQHzcoLKRozY",
  "key3": "4juim5jVSnbVRRDqDAWJtTTvCrsJSZ64Qg55SmN1MUuao2W223XFK39D2Dh3bV5AN478dShx39Nfay24AFRb9bwb",
  "key4": "5pm1uqbye8tsQUpGutrXSU6sxycewoBbQSEHv1pRPMj2HYYgBGt9x7DjQXN2MGP8MnuxdNDs49YGaXj1nwfr92Ui",
  "key5": "d6Hab9csNzgkybdcyZ4o2HkW9DexKvcymwEJCMuEkPBChE2cM5Pp7UP4UoEcxgRzLUkWqHwHKQUFQF6mtcAA92V",
  "key6": "3TfNPkEYGV9XPTyr1psFU2xf6DNM6m745RvG3r7vuehiDtcTGHJ4udUWawJuaeVwo5dMFZsMi1tFZGykrEpWGLSJ",
  "key7": "3b3NZFJGKzbxbe4JumjbwGddGnSs8ncwzUYdJUMpr9wBPMrnqQ8Jzugsw7tePqeP3jsRk8gg1SBgrYrnQuqFWyhp",
  "key8": "5JXPjU1NtcDnrQyQRF2ska53ctLHxvRB43aFb7g4uYYGEfL8MSS1MfvZqASPpCLASzxnESHZpaFJ6k6broLDrD23",
  "key9": "64QrqCMNeaxAWYeXVgY2h2VsDHR8KSGgg2j33R9rDbum3Tr9CahV2spUyQmf5UJYnusE4mtZTmk4ykVXjJJUGE3F",
  "key10": "2782pkpe2EEXDb6VQgsStuxLXepc7vRzjomeyVoyfyAKvX8oSJHejSKdgfEqPifUYq8KEnbNs2WhY4WAEbShLpy7",
  "key11": "aLLLmSZsjbUGbZXaiNkvTgMmaMF5vuBJJvDDE8XAyjzHHS4UKgDSAVwG2YxvhQ4zcNboC52zjVhUBzTj1oBhqoP",
  "key12": "5489opDquhZSRwV32987K85hkKmRKYtURwShurXU4HEU13KEXGCemTAs9wKWcM3q8ib8CrivA79xRtP35Qk3NDwv",
  "key13": "2RBvmL3T8LHNYW5oseFqBBPtTn21VvtLAxEjsRzUGytk47A5gdEahNiVeFpZ19AmRmcsXppVvShj21WF3q6iCdui",
  "key14": "4RTpgohkFrpu7LYcQJ8Gis8rMuBiX8ASa31eKwrDo5cWkB9b6ia7DiMuShUmWJk4w2FmazPMWtnmpLdTci6pm1AR",
  "key15": "r78Pmy8rSuVXepkMBhgd5sxx8cDoChrm5K7amQ531mUzjZAp9wZ5uQukaj3DsxYeXpbBYfEb7cRFbgjfx3K1vny",
  "key16": "2NdY5zDSLS9A78HJYhTZ95LVm6HviyLf3MkYwhwfvWo2WtKVReD1RsDmdenYPqLoUQ2cCzpWibnxoAFobf1Vr9va",
  "key17": "565o6VGLwsTBzgW5dVM2hT6eR91qdCZEhd1j3xKrtEhZuEEaeK6Ap36NQd6bc3kPvBuEz9fDuBxePNUWJfYVHZUq",
  "key18": "4F4bWiWuHQSsKE1qffP2beWZhfEZ2ti6ZGo93VG7ATmUVvkXD7SwHDWF2aRomMxHjgrYMT6t8uVJ3krxD8o8iBv4",
  "key19": "3UrsK4TSrso4cAQZ8unjAAxYuceQy1HLoUzR85Ts7U6jVCxLc7Hx8wxgKBSAmozoQPUyVBzmD6vdSdwomfqsHT55",
  "key20": "5bEWbzYFawRYuCNFLvBfmSqJuWfznaycq1pmgtHWSCfUEmNC2Pu1bp1wAz8WkhkhFNQv6EaDQrmFU35H83JgTz6s",
  "key21": "AS4FmJe9RMA7ZEW5Wcwo29qBY8Y7dgbteKVkHKVc3mLsyEeK9E6gXhFakRRr8PtG1SzSQN7fJqRXbhbFPezspAx",
  "key22": "2amHm2XSMwou8pdRNBo8GwyPzs7GWNwdYUJAMySDAabWYQXt7215W7Ubktk8exUbCp1tuMVK8TKHmEEsnXyR3hoL",
  "key23": "3D4ky15MkKUxDgYQSKJR7jeAeksYG44FqtBVskv3WcJib87w1pCza8xtLVsf1bjZ5DgQB7ZWAUnHfTk47hmvzyET",
  "key24": "4jA5PRsYXYdDSvetFZTkKxsP88MmZ8XdP7wqu1ye8N32JjDUxYB28CUwN9rvJwfQShKwwKQi7DqgcQ2JokhL85zA",
  "key25": "4NoJdzd6eStbBZ6jZmY8eBUfVtTLoG5KWh3uSMv3Eycjxet9D6TNirAkAkHcsoLi3536b1z6eZ9pLfzstKE5eNN2",
  "key26": "qCv2961sJBa6qCPtoFGJafLqUr14kfkMn5UNGMkyY6t92vMWgj2s9c9RqWKPVGdt1wtdfbB6dHUvLSzcKr2SRT8",
  "key27": "3fDq6FqPEesB2bZ4u3ds5pukPabCMj5eHZKgMBBtpwYHRGf5BdScZQ5gqhNyKUkMRvMTm71rnU9Dkz8dgsh4cYkY",
  "key28": "3SwLbEhZ7AC5TTJk2tGNhxsjeF11F7Hhf54hcKjYmEyv7eKWQDVSTjvhr4qdfFaCDQccYd92coMHxuvAddqR2Dr7",
  "key29": "2wyjzjvXaYL7mKt3DD4TqTPh86R6cAtpLjWaB31Ck1ruWP9JmtDepvpKk8hdpa43DQWCPLoifsWJJGcg6yBijBTX",
  "key30": "2FXyYBUmekpvqQVoiRkEFS1ZzwUidNEE1WDFWriCqyvoA9NYjVSq7sLxDpgVLU2jAfJ5BHwTdjnbuZyLiffKzBfr",
  "key31": "645hJSMpxW3MjLcDXpELyTacyJp4VZMfe6VdtBH8E2iyCuvWs6moNCzYSHeMEvfmRqwMpkc5RkBAFZaNRCSKBBqL",
  "key32": "2BpskP8pPwqhsG66NFk5uo1MudUouYwJwz2aNijfqNCeSYJhJTsd59g7QbzUnDN92EoJx6XpsAtMCgGfwA5rVXDC",
  "key33": "3K9QdAmfRRCqH5aoiteNjBs31VZsYj8U2tNrjUbYzMLhFFEPVRe7K81GHTNVoXi1JoKcPtH3bQiF4B2vhWUiqHHi",
  "key34": "61kPZz6q67Y4J4AUAS8LnNUMDkiUbzte3w8hYmRLgvCJTGUzioGiWhtj9jqEuCvmTu58TiDcCzp9Put7W4H61qtV",
  "key35": "yYx9RqLnUjVSGXMPaWS5eMM64pn4pLbmJypkqjL1QYytLbEX3EoQsTq3aMyZssByYmCX5KgCrJ2jhhBUeeoFeGH",
  "key36": "2DFzRbRxzB5fLRmcCz8VGciBERxXHcToHMawaBjYAcairSiu15orEoe6yiqv2dQV5oioef3HfXr8yiLqx2mDyYyb",
  "key37": "5z93kS6V5GcgzHVMAjRcKCjkWr4NKp6NEdbyJCpxvcLCjaggvX4GwQ8KyDwPXkVU9ChitMjcgCTC4LeWNphuAkQK",
  "key38": "4hE5f7usYXk4TDNUuaPtxrs6ULE9yMRGPkMSuTfSqFLPqS1AH3qUMu27Cjw1VoHoH6eLuRf1C4qRcr6QyJbJQEBg",
  "key39": "FHvhyNXb3ZhTb2McJyioZCijd2MBL9cRJfWtS5zwGth9H2zcdbCeQGcYo6eHHzDo9ugSEk8ZNVK32JHs5b9hTdo",
  "key40": "2pVekd7ZDMEKTxbaWoyoyJzGetiKRgwzisiCRiPVpssShYuLRczrehYiyR2U7GBrXuq7RRzobtN11Z2DJTdVTJDT",
  "key41": "5vVLLzhgzd2DP5H7Ln9vdnA6YCu6SNi7sBYGd64xptupzvzXCD3M329Fp6XwEVHf6WKH9XMSQHnvVakWwdwupDX9",
  "key42": "A7rDKhQK4oE1n1dSmoy6oL2RcvwA3NKgwsxmbu3t2GA6iaTXQU5sQGZMYTUbhe2CfCSZFtSMSgNdkqn6Cqbp2oe",
  "key43": "4Srkhh6m92ccHUjpgvR8T8i8hvqtDw1SChAUtNHKuggFQ3QVZ8R6oiCUTFFsJryZ1tYcpmVFqLcDZjFaNiXvwiby",
  "key44": "4B6E7Pr6dSuMc3Q7UFE2taNU2RN1PwLmV6wEBKekrdX4nyFDQUBf6haUCc9z5hXNjgdwk5uBiX1hH3A6AvtUzB94",
  "key45": "2ufdCzCUUVG114YJ784igTZLMyetyPmVjYksyipRmYCXSPq3kxTjv89gwbmr4ydKvwktRyijWCDfYsfYjnecJwzn",
  "key46": "dZSXdf5LAhArVekCJohNxugAB4LamSg1LnF68ZUirbDAV3SisLfEgqxMwYKB5JRyw8Lk6Dmxe6VuyWngQwThiMG",
  "key47": "ThCNpPSv9ZhgCpS5VB4pbrCUMg52mzrwghaGhah5hm4tDYRiv293kc6xEFnUyFQqsvW3irEGYjFGxFTvGn2oKHs"
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
