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
    "3HzHURMJuGBGq7GHvzypygqacHCYMUBmNxsbyZ2tZaJ7oLDdkZGgpymHKKW3LM7Ap3GbpTkKWWe6tWeiSxpA9js9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w1vFGUz6rAPEpTnBtEkP9mGcCiYAPiWZYaqBfe4QvPMFg3wRnCetyjAa1o3oyk7AvbroxFR49QBWKVRkU6QCKP9",
  "key1": "4d9UCW86xcxYFCNe7KXsPKBuPYeTzQGFcZ9Ywz5PmytUzkgK94C2w8rSbc2ZihF7CLczMQVRL4pS6QoDwhyLfrmR",
  "key2": "5QHk9VhjK6nBLAezLa2bsJ6oRAVRpC7qRAQt6CcfrWMB4fizqJ9v1HoNnhmV4B2EcT6AibPjh2CEJciCbMDZrmux",
  "key3": "3xFA5EDZ3Dpia6GAZvDEqvdZS9jUWPc9JbBFCRv2fnJ2qmmFNtpnMcf9AxstTNB7v42HvuRFSw2gpTGbUQ5SYxjz",
  "key4": "2vjm9XQWL67xixHe1pBjKAcFfQLb1ixNNhSgEX696LAFXC2Y49Q9P3wBZJ4uRJSXKM26pirZ2v6JhCdfnWAuFgnH",
  "key5": "4Na6HmDUS4oJRsYwc2F8fDUUqiSVQgfritExL62j4jJ3i6UjfembRWBNe4nm97imZQawVbrqEoc3ZoTevohkWJPp",
  "key6": "5zznBYvtDQNdnnVz9un9ZECvmhH2VgcWvTCY5rAEXQZXHjmrbGiv38T7VLQUJWsGo9BfeY2AqgZDrNDG3x9dfL9j",
  "key7": "NdKueLykaTYjZvcUYTr5qPk1NB7WDrm1Rfr5RKfeC3HAgmbrH1Khcm9ZmXzAZxfPHksCayRVXuM8sE2ffyvevfy",
  "key8": "4HSQAz9tYsEMyhSwFpwN3uDFWyx6PSMqMTPqabMQfLNyBr7ycmJ1cvAxWW8FAxawZeLEy28jQATKiEQR3ZsazNTf",
  "key9": "1oiyzFciiwBws6mjojua1MpHkJwmMnZVH9FhsFfaXV6ggyVrmi14gfZbytLkVVSNNEVq5kikDazikmgZgoZiPGr",
  "key10": "5ykbBYATLwtEk6P3tBUhWCRMna92HtiTrTXBzCXV8sAz86PJ132Kq2HX3vRQRgv41aAkJpHuZgATCjwms5wV85Jw",
  "key11": "5CaQrgg1aXcEeYbEi3M9pS8AEvWpHcCxE3FPFbeXvGRfS4NywLvUFGdCvxrmfnhq1K9dVUoQuXwutrTFkitMAmpV",
  "key12": "38ayh4nbqiJ7PzTDGpvTdNK9WjEMaPy2WWGhP1Kh6FTZbhw4rTcKV1FrjhRBE2EZKN2oJspvAvSAakq6gpVYRi6B",
  "key13": "3iV2sR4u2vwocRJF3yWKhcFmTGpKxXyTPyjn48P62Z7HGNBqgj3DfpetPA5ftgdMfjPDi1PdLpXubSdCAhRGXoAB",
  "key14": "2qLgXcXobFYf5C6NBxBjFPpqejrnAyjMNgEspU2eMbyprNfv5uz3iiPQQ3gLz2MnfM1ps9uzgXAbzTrBeQSPSse8",
  "key15": "2o2ZKga3koUdXEPemV9PCerzy2zJFwyjK2NWTJzj3Yb5ykd9N5Yv1Pf4b7ugu3uGVma2io7wHet74ff1PuezW93H",
  "key16": "FrrxyFSXvK6tRzYoCcNSJBAFBJVa4nphZTFQ3oYvw83Joz1xWBsp2UC1r67ymKwYrPTWvhHH16fpcdrabitnjNC",
  "key17": "53eLNZRjpye2TMPkf6gJowBmHSSgLrs8q9S7Sc5moBNwQABPp7DmDaoniYVd5eeazUkw5r2n6grny4KzfqtmpRVQ",
  "key18": "4tgfYyywVpigrA5KgvAxYJ4WcM6SVXVDcMJmXMzfnBTLB1LRR6EveYpmkYGhdYcbwLuXgW7c11oGurU7xaLDQMhd",
  "key19": "5wZDQdXhJxWu3AkFf2cvF5b8nhccvWfeMonG9QLVULqBx3HWTUMSM4c8M8rVb7a5udWZLSNYv6gxTczxtj1eySjC",
  "key20": "Ch6P2p8E2V8FhZbu4JXkUhw85ffGTM1zpWN6kKptFEyh419zV6eyVZtgc1cSUbKBN7hBmigZ1SUtk5KXBKMk6Tu",
  "key21": "5TGp8BfPi4nDgDjLMQPDJDYv4YUciE9yg126vLYozp7UudAVoLHBsD2bPYe2ZnvVdCXxETQhJCVUnPNVkwKktp44",
  "key22": "3Mpm3sbH2UJgrMLpe3QwkxrMGKRkEVDwYNXBs11msoVPNfLua12UGAuRT5SD75rVmLHizgDq6d4oW66CMs1431sa",
  "key23": "HZ1qZsHejmxYi3ibQ3tinukuAgUWTMyrmjEQVkoZBLwrKakeZsHNQALEK4ZGiBJy1NjCGBs7UsAYXQkyBncLW4U",
  "key24": "5RneRHo88iQZcAaLGvXsPQcQDf1iFAxUwDnE7uhbLcZdYe39EFR6whEwDMCXR2t4Ftct2tsfx6YQzNX1QdEpbDqo",
  "key25": "4PtNi6TiJa8qpmDrM9rCyMqT1eMpmpCc3US4M9yvT74Gksd2GgmasedQumLjWdV7SPW76z7rw6D2FxG16Ju7iGEh",
  "key26": "4uj6ZeVqEaZrtbgMQLHj6Eibgf25mi1ZNZNhYsg1HuDv4GgX9LQdqSn8rSDTpDueCJnfrzJqtHZpA4JDA71Fhiva",
  "key27": "5zChPR3wKoLjDGMsVkHeRbz4k4pJQ7AkuT29VjATMX5jAERAEAMevym5nS31FcVeAGG6Ktea8XwPaDSvJAQBxcpo",
  "key28": "2zY36pz3WqnwPYkomaL9rJATaMY6BsfvAyWb1bqY1hdJsMTZrjQPy85AMr45yuNUjWq3JVCG9VHZWKBm9ZS7Bwdc",
  "key29": "51bJBn4rh2oE9kY4b2tMc7YC31Q2R4TpzwNxZgj5cE9r4TF48LQEp3k9A8NXhc4kjFNoDAJH1GBpw4Yvdqwa6y7G",
  "key30": "4whpN3LCnXH6HG5UXk34Uyohhp8TcbPoDPQNvrc8NwuCLqSjArQNvGoKb7SRq2myDtmgVd1gFJuFCjS3QjjUj3Fs",
  "key31": "2yAAc2MRAfnG7twfeariAdXhpfLMf1jDT5Q5zqFYVHUTWia7cpxnBV9U1XemHytvHd73EGrb8DtgDd1h2NcdPZra",
  "key32": "5wPdEWL8d8werENLL7zTd8xLgXErHUBGe6FdWEFTmAAN8Msvs6BqacsJn94ffrDx5RSHE5H56Ub1HsVVaVjPottj",
  "key33": "3MuJsfrtH89wXLTFPxVywUXfUjMGyMDAthVhmu4HUKUrUPh4ZbDY8jQH2HYUBBdE1eBhTyMuEvVWqTBroSVxx87x",
  "key34": "2t6ZNVm9EWZML7SALg3h43VfaoARYtrFQcSgJDgmj26yNB9E2dTe34kTBaDsehKVP48zph5uNV6DFrm4YLSarAyN",
  "key35": "4ws5PVLh9X7pD3okhsXBbX3niKDSZUvv2sHgYwyFk2iPkVZNXDauSGx5ofTkDPzHSShqZR1RckbuJAtCosgPaeDA",
  "key36": "3rx9z6SaQeon94Kd45CM3Dk3TH6NypxtexZDxseTvXmMgvyAz47RPXfUeFgXz7gaSPH14onmrHrUQe465PzkrLJi",
  "key37": "4yUQNRz28gmZBHmZSiAPFgSJ8yoYUBrHhQoEYANGrBLGZHys79PDy9SmeRURmbCtGnALKW7JmRuBUBmX38jS9ZAV",
  "key38": "5vLC8ESJSwYDkm2eRb3MgQKigiSUAPBFt4Ep8it2CqghX5u3dG2hpos978kMyTCCymy6P3vHegysZWr1xNsJWuQA",
  "key39": "5VqiqYK7ixqdeTEo1us3h2uwcbwtCNyn7JsNFGA5qobbZewr3QyobYBrPUg9RNJG9wwGPTcBvP6XEeRC2NgvVA1d",
  "key40": "2ScVekWKDUCokf21A9yZFE9zppUbSG2ZminvgdKZfgogRQAHw1E5DwUHfKpPvFWjpFYp9zf7be6m8wgyf397x4j1",
  "key41": "4gEXVt1Tze95sUQYWcbGpVmmP4XRE8BgL2nQDc8qEaeRzkhd5yUp2fTZAw8TXapNCsCi4YEoaho3z959CrTzrXF9",
  "key42": "46RN6YunnQEEvZjrTbyPzjRSaBcW2o9Qi8N3kDFaNBhoWT76eRcKnv6uZNjoG4HJUAvDgKfUHNsqjqg9psrbTAm3",
  "key43": "33Lf44QBPhWqo84cHtcj9kDbHepDLXLpBrRVFvfjqsmZBjbtHBiyeM5aBhKReba6bx6zkNGBuKGUpUt4dUs1ZCNj"
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
