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
    "YQCSigKhrot6eFtfPBVGCcTL2DrmZtNXN5nxDFfT6f8nVxvKjPTNaGVawMiWXAsrLxnTNK61UWD2d77vK7DyH7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LKZ7VvcK5cVmr1Rhh7kKHiqkKWgj3DHgivRP4Jb77cvvjaHHNXeXJPcTXrU8EP2rrwL9sAC3KA1YFYTZujHhRn",
  "key1": "xnfJJjnJvatTyXj8rHpnDVR9eKGKwzvQgnWWHxTkNV1pGvsfs4bfgJx4ZixNqfDZqwYf2jsCHJ732s44NnysBzn",
  "key2": "2zy1aa7JbXHzWjtTsLiqtFwS9cJF47DKTq6pHcptu7BdMcCgZ26CSE6F5um86zikmEP513J1Y4gryBaAwJCekycB",
  "key3": "3tA1UivjfDLUhgHBoQmD2uk96aBSLwFzCawjbFA1x5rz4CC6XLWgFh8mN2nQDi2rid12hvoEkgMHZ3EkvLGZtaRF",
  "key4": "Jp1DmwgA3AinVYELp5RLq8FgLmYn9kwHrzL6sUkowE56cY77v8GhHzdHVv4aQrrQNSxDqpsDYztSkjseobBP7DQ",
  "key5": "2r95jfqB7MGVCdkjC5XQsSMKyVibBx7HFZ6tL2K3LL9xNyyJP3DWzMeW5B1PNawK6EBi2yZdMy1YBtnk9nFXHfjP",
  "key6": "3GYFDPevPEPp91s7JcDKkwBaBR4CsdZZ82gKZJMjkD8bNYcobFFMRhonEmzw5171L5GRMh3L7WkgVyBQrECASnp1",
  "key7": "3tvjfNJ2k5AcMt7nrBgoQ4VkWNLYvws34pqyueAtmo3rDj8cTjqkHryHEAAEn4TX3qft7ivW2PexcX82YeEiwaxc",
  "key8": "3c3mHNR5MjWYM7TZq93yzSGDGjXzYt87fPQdTWxDeEYgexjHZptEzvob74uZ9a1f8ZTQmHkBg2nFnSewfbPoso7U",
  "key9": "3KKnJRgRi8f9tWzV1jKiHgK2AkirrDoHpLFYBt6bHnKeBzb78FYv7FwT9KPHeUWtzxGjvVzPf5DbgjQsVDBvAVBm",
  "key10": "3LBAUTHN5sjHK7wyr7SfVdfQKRPFJ5KiK3Ma1n2fkji4uvXcaFnseM8P1vv2Hipd2HT6oF2CXF9sHiLwsn3eN5jh",
  "key11": "2Km25wdEhKGR1jrUdkPqyg2eUHqHu9krhfiUStbyU3S4FkdbuPdDxFmFNr1MuBRzcNSnTjsdcEdAD23MVhzJs7j9",
  "key12": "4RERUuX4w9rwLQgkd9ZvQiS2M9xmW2U7fpyjV54eFZgC9vrYyuuEnsG86vRew8sdJFeUxk8G63dYuLXZ7H9MP5Fy",
  "key13": "pmzyAn9wHmMVT5i2Tm5bYD9YyU3Pcftf5kqMds7nRGTs6mwAPbR6JdsAcPmvLa5NHv7B1GXrgXbFRaUJ1v6etDG",
  "key14": "4mcrHitsZTdeG4smzixmEzxPQUpvE5j2RScW2PMGc4gX5HU4fFjhXedsaYYP7BSVjRMiESvTE7NNVuEhkQRRDnfc",
  "key15": "66XA9beLEY7z7Wx4LwCqcqC486rmgiBh4wfxzGZnE4ckdcoZFnq569x25fDPRKzdGzdFJoFpqhANmQ9os8FNCps5",
  "key16": "27Y6PkkJGd8vQmeyLZcDvN9LjigqS89dYDzdGPaAueTiAdD7kmJ9RAAoLBuZoyurg5tqKi6ALxf1kFv76AAM5Ud8",
  "key17": "4rewQ4jtgr21CtYma7SdHBEGXMzBKBpz1E9QYCccCb5564BncVjpJbLs9MmGBJ81QTBvRnm3H6YUz6Vb6Kds2ieK",
  "key18": "4MzU1QqWpr1dBgkNztpZhxanTcChXBcYYHc2bJy5DwNXWnGP1LJs5MDZo62yMPJ7WECEg1rwjhgcshJ48FqRfNo2",
  "key19": "iydh3KYysfXaQTBZfoXtWim1pp6UsBD2NUSx2xAjNCPJxQvetehumMgX4JW5hW6wVa5YYRkNRFEPiXLjvv4oXJR",
  "key20": "5D8Mbm6WgeLq5N2a57wccqbfy3H7XSrpyeCSY2QnrEaZhrtgd3wm7ZsWePeGshTncFi8WuhVZcnxLpmmVb36ALHV",
  "key21": "2Sj4MfaBAL4FWD4CbygUawp9TVfemC4Z891VTDy6UYBe6fiL67UQtfnKpi6Cz576q5TSEYWge3BQ7ixtY6YdCJdT",
  "key22": "4kqef5z8XFynt7HAuBxEv7mz4mBX9gzj4rYV2fngV6girt2VvqffDKuP22xJMJ1gZTqYvnSdeW2vUaFzQxAfetkh",
  "key23": "41GkT8w9KshTttfFsk3HYEFKo3Eq81aovMV6X1kUSMSXVdAbj66M5znzEC9Tq1T28dbKwLN4EmegpgttsmT3bwQs",
  "key24": "52Qv672ZoQe4FguC5A8gC5Cicqn7DtvkiELmf92QsKiEjHvecVLYUbBaz3yYmKNyh2JwamkM2ce6VnWsJEM7dd4k",
  "key25": "2CKHoiMiLphFQDkm9qvGhbPcgRTFY3NYmA4BqjWm76nyPqfvDJULDX5gXDgf1GepQnNpKas6p6NBjCZAETwaMrKN",
  "key26": "4VQkT3QFenMnsqoimwfUCxoasYyWARNrXLUpc98VcXiAYufsLofNZTkuP3esxMf4YL92AEbh6FzhSbeTvKK2pxGt",
  "key27": "3BrLRxKagYDthScyz5kJbsoRGLMei4avNEGAEVAtCDw9nLp39rhGftcoQLfLaTqPWwDzZ7HBSv42SDcMhQz3FGRM",
  "key28": "VtbgErxibEj8pcJRAFSXkTQ4wrJsyJ6DXPe2qDr8f57YqRYFGHFYinrw5irQhapvaQpG7ba5nnFJUJ3EbuX1QkL",
  "key29": "kutZQ4Aoji2ek3odQtpeVQ4PfFfbQ48ngXVUmNwPcHuB3kzUR9kHRq4hHEwYZkyo83PwtZDyepJGJ4yywfJx1UR",
  "key30": "mfmJihQwAH38PdAge7V5wLyNpSPiQDMPYRHiJHMXYfAMB6vph9ifcaGjqNPYyv1oiyTiUpQazubbryXCcb82uAn",
  "key31": "5nuc83bYTwwmbSovbvEjoaFhvJBZniwQegKhVwmDZtGrJJWzvo71uVSGjWsQdDkSANYB2Tu86SLc3CC282NL75RN",
  "key32": "5YB4tPAsdTpUecVR6SWhc4d1yDcLe2kPhoDpQAakaAnHah3i7YfyxVqLvWd1KoVoAWCZEajTnCayf5S7K28tqSXw",
  "key33": "4T5yQJRNUK6kz2vCSpe9e9uxGsabB8wGrR9SJjPnQPJtLA5Gy4u9ZNQ8XSWhGXfwij2JnY9wtE1i9wzFCUAMUABs"
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
