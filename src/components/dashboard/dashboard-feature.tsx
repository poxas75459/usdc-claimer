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
    "sKz1P3yZSZy5zVzQdw1h6rW2qYSaFfuF9fVZAtfZNVaxqTHX9VsLtzv5MWc75vd5mf3hipx6X39QqgioNCYxAD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64gruDvHiJdNSf4JEEE6sprpkJeExmd7T2pYqd4W2aLvgWgQrLUVNAZKxgeAt27wgWzHVqg1YeZ36b4ECTJ1rZHQ",
  "key1": "QzhvfBF5b51MsQMakJcmdAgaoF5Wa9s7qMhkSEn9B8PdMdshYiC7XCptqiTyxJphnADvf14xBg1ody2Z8WGQPYF",
  "key2": "o3dR82EcfX4j4SEfVVW4orFMtjHnTHTmrCiA5tVwAeP742teMcsoDoNqmaYimK4civtJsMHhvyUD5yqV8YJ5ZNv",
  "key3": "vLPPcB7Jer95eWadKrSxkRDRE3Jq93DZZhYWVuATwdJZiy9cChwScCf5326Pa2xpxRWJT1HdqLXtWFMRn1BvVLP",
  "key4": "2quko1ivDNzTDvhHgjbs1QeuHMZ2nA8QEnXh5a7DsgUZpW9hAq4cXBDe6By2q9Z8V9Mt7j1tRfHiXXxSV4P6772e",
  "key5": "511H4ELmESXpSNfwiHRA47VPqjZ1apXubRaozD76je3eyjVasd7d9ewMbir2QYx3ZcmXP2YJxiZdxDkGP2uhMzqH",
  "key6": "Z8bd788R5wRvdYdhu22HJrEh52tuttVFUWEHkjkHyfW24Dfadr5ctcmUyijoEpCBXeNBe9AbpcLsCkELnojLdB3",
  "key7": "4xE6bffqrvPc1LquMkATRcw6chESQFhnNpvFfondoZE2GWoGdgADkSJ9zrTLTjdANB1xDyvWhh4RSfAsyLy7siNJ",
  "key8": "5X45DTTZfhoo4eHQpibUhTFohhutoywVCNqZoHF2qseGHrviaxd1L6RHV5DGvxHPKvQWvd8Wda5si4Vfd18z6VLj",
  "key9": "jARDqj7PuVEtwiRjf9sRu5BRnxp2tnUpzjFd9rkw5qLbTVcio7TsFa4xJYng4BwBnnvcTZzdyiuFPwvVyR6gZBN",
  "key10": "4ANMkjn8d2o7J4JYGQceVFtSZ1n9Zu2TVEdpvwUbtihpySyt8rfy2xjfpqPe9yhJ2csp4dLVndDGTVDKVSrfrkMn",
  "key11": "38pzTSCQyGhWSNcy7hvnhdcUiBGDsm1aFattz2j6xragdkeDLEddgrzqJutrswb4cg9TiALiCBRCiWVeAWgwk9fJ",
  "key12": "nje1rrq4TzjJYqHPJ95gXJpmNy5SLqECiTSvPapBNc5EiiRAA19xbEkaiscUwizNojHCe9Z5K8vbbsMsScW3QBh",
  "key13": "LWZhdWDSGwfJxBVw322TvRP6GWACi2KG963cEocBWNE2L6YorTuCwGDtdaiA5ULdyPRiTce8eWNYew2WGWwhsMf",
  "key14": "5Jc2zp6ADt6sSDRA8D8QKuGWniG52gaz5TXhLVfnjNVbqVSGrEo31aJk9JnpgttUGRJiJcrzTWE3Ls417QZfKKRW",
  "key15": "43kUBEeuNefNTEEcdf5tqqcfWeJRdfkoVRqvZWhksRDNiqCX82t7e4MirDXRKAArsVvTr8yuhrsTSSXdpqBGgEjB",
  "key16": "2ytCT2przv7DyLgCGQkVvf364AS5FJwmposxchjS14PTKHqQAqnGPPJdvMYA3wMrWiZ2QqFxi9Sw6ZkCUitbDmij",
  "key17": "2T421ydkv81MajWzTDQEcSyaBQ9esab2vK6V3LWgn72rwqfohTJUEPVkF2ndmxQAzNogjzHyRMxHwiXVjDWMEZRG",
  "key18": "2KBxHZeFrUXrhR27mRZX42Ap8ku36wGiusytgQaCRZScLdd96FzH7uUp28a8QMyMe7bhobRTpBPguwHz9ihT3JdV",
  "key19": "45xzExAwyQZse3dEZr7zHzVprrzWrCiFqnULoxX9pdN7kjR2JdJx4De7DLmHy4ZZx674QSxK9yajd6eKdEp24CFS",
  "key20": "4MgA6kS2ZzVRety7BXB47tDcjkVuYFr1J7fCxCmw3iavrAaqsz1wT4yCWYBWidY37g1TfMW6J91hxMRagzsGjuQ3",
  "key21": "34aHVYQs9s5LfMgvpnuqjnTK1d8BMJKZyuQXZUTE4X6yaVCrqX1Zr5s4HqxSLG15wjG2SzS5E3FACJrnXGeeknSh",
  "key22": "3icafgUqZZBuPRcCck8646LfuycxsaaoCnzuY86jrV8FvVuHAzBbdD848AHDeHsy5n5bzXGC7F8B58RnES7QAb94",
  "key23": "REL82KbKkzbPrqet1MhCyG7LzRPMmoEX9rM4hGb7Fk1tx6dWXK3r7m7Qx4vmSdCSP4rxqxhxUz77U15TrVZAHx1",
  "key24": "3ig5kPp7jPPrLodGYNkuVcfxxjNVuQhgUWkf6gV4V2JeSMNfUCUdwrihcrVv61ZaUWYweR4odgZUhhuRwro99E9i",
  "key25": "vbqM5TtSpBKijppD3DbzAPSb6t9DSPceGNMax7ga5cBeLC8xYGcuVALX2LjoHT7YoZ3AgpB6s7hB7XS8VByfRTw",
  "key26": "3ybwHboYon72qTMdDku2xFgWwXL2S7K7UzAMsFSn3U9uH2DrAspxWAWYoVNH92YjB2QPCcCnP79wiKSY9UKAj84a",
  "key27": "4vDVpLw7S6Wm4aVcj53ic6VkJaz6gvuHQwANFyYQVcfbhrQYH1nkeB8nW8ZWHWCZP4f1QvJqQVHQiBRiTBzrKra8",
  "key28": "58XhfLGfvaGtG47MDbC3fEAw6N6Lz1u9nYmtabx7YqPZ7hnAav9KUZyHh7LnF7PyKEy2Y3gmgNqq9C8vM5WpErCe",
  "key29": "3NhZRS2YX1X7RqYwVpCunJFgT65YuTjXYGM5yPJTD4dFe5XMDv2vbSNtgRS5FhgJdjrtgDfDPy1EGG5QeFMCj94i",
  "key30": "LKo9gBMg6tD9mrx25KU9ZvPGv29VKPmeWKtyQdTVvMzcH5PQBZxzpoHJwqUvGrHN8w5gvCB7F2G62iwUmMCi8Kf",
  "key31": "5xsvmsrMSHFw8CdyimiycHQ3f5YUsrnnqun3wFE2UdzKEBXHtyDV1vvP4jwPTS5x5m5PJgm2Ges28mK6uhmhZhkv",
  "key32": "5fKPPApTvuvgiZ32EP43dZquhMYr71VRXJivuh84qrVAM8WEt6VTtxuJxfU6rg4RpjNRWA7gQQRELkYojnDHa7oQ",
  "key33": "5zqnkZehpUDMaAq2sSoUkdeNsTCAViiFwscrWNVUfqkqg5oXTuPpbKThDPxBP1Yt2fkCim5vNCRPy1VotCRzxACT",
  "key34": "4BTRRR6fdQL2srdJ4p14GHeSNSi73W9W8NeBFt2w7acQaBQDJFdSrUztncDEW6XWV84xkgu3rm5WKtQ4V8Dufzsi",
  "key35": "3ojDD58jBtVEPnCoRceuCd57SBS2p74yZjm6EPPHGDA5e4We24JhzcgGKvY7PneGmjqkcxfjZRsrxM1XQPfY3rAU",
  "key36": "5YfQJANg3MMmzZrzcvEyEWHmCW8NUx829TWebgaEvPtQDAgmhGJjrLFGMEToD25h12T67SjXF5sHjtMT1kj3dTzu",
  "key37": "5daLVaYfh68YJoMExiP4mWhBL92BXgJKeFkn5w5WbrDBFZzTAMzqsXLtTJqNfkkcr7zhVKh7S6Mqr1Wxc1T9RvNz",
  "key38": "2FwLPWEJ4bYdy6xHgJ3ce8Biv3asbhJ3SEJvRLioMrNBuGZm85Fy9jWXZuKLkNPS4B6Hf6nERWrSCZBiqL7rDzy4",
  "key39": "3Sa7x9Nh5iaz3X2twkQZ3qjPYXrQiAX2RcEsAbgUQ5UWgKJ76DbW4PiWUW8sRidvExfBqoLPknB8sJRpKQv4VbVj",
  "key40": "2QfPhbtwy8AzTSyEES8x4M7VardekcmkBHyPJAt3dDc1FD1KHkiX4Byfr6CyQ3pkJ6qRQvcuWUKHVMj2qPjCV8RD"
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
