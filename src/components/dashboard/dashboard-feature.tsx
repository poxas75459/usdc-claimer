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
    "4H9TsJ5rAXrbE9wiSwYUtCtFzDztEc61K1xhRNGQKCTRr5tJpkTS14dNumup9mmETERjnmxMdPfkdGfLHELv2j3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYyy3kpDV1F5hPGuDUXgBUW4ihJWtXWZfArn89yXc7xDXUhQcjkYfuPE5fdZ2dqaZD2cy9fRxQHhhKkBKPVsXDi",
  "key1": "DcBvv7YsTsq1NAkpTg6izetsUkep2Z7kwGpLGU5W7TDin8KxocFj9ewdN8p3zRUEf1S2gxiXtELSQ4mygb1GGVH",
  "key2": "5iS7u5cbgD1bjCSYB21H2Dgz1hd3ryuSDcjiNqY4XNqJYoLjBdX5qmDKyTr4Xb9Ecg5djJ3pmWSXB7Gqnswjbpxh",
  "key3": "3brQHCydmCo4itfVzgg4xffRffPTsGNr6whGhWWaoczbpNz859deDN7u2ueojDN3itxQaqAYhCXxWK6tTgMFEEgj",
  "key4": "219C8dJF6pzkfsDE5oaGdpoBxoUthtunsigiwPfJJqVuc9QsSYJuR8ipvztEB6SefdkJKdDZtSyB97eK9RwH66HE",
  "key5": "5BPMm8BZ1UXG93m4MAV9dF8thhxtH8vtSy91obasMkABuFTk4QtgszZHsGCaAh34sPkRGF55u7X4B6WWTUoE4JWn",
  "key6": "3RsNiLrpZAo28gUoR3PBGc8GWdqxEmyZT5crRQJtk1tcx3FAvFU4KaQaT4ime8BPNHFrJ3BniJHMMLjozHJqFY4f",
  "key7": "33JQjYijCxviomACbAezaZYeztzBvo4jxXn4Koo7XWHtv4WrtFHq8R1xwqn3VppRKz9DKTPU7jMX9Po6hRhBhSJt",
  "key8": "SvWA3qzW4qJH9VMPKPpA1igWZMVmQAzwiYhra7o7thkSTdvyyjoLxhgD2YhSD1Y8VU3Qtk2JriW6SkYfDvMyc27",
  "key9": "5UG6YWCwT4ipk3NxRrs2KU4FuH345pVQeuE7kGCcCvyaDXpDnPRMXf81DpzHptQiLAUUP9NMSnFWAiVhiHbZEWsE",
  "key10": "6hUsPNpMj8kUHTekuwsrttAexPU2Gkd9Fm3sdKUfTdtHHVzU1XczDmXs8gQZjswRkePheE8m4tCRrU1duGyzF4e",
  "key11": "5SYS4EA5fqKB4AymAFiA7G2uAJojfgQA6DgvciKn9GYc8vy8cFizeX4oX6u7wdcziXT6d4BS6SECciWU3sWS2Mth",
  "key12": "5ac5c1doaJhQqM7DVrULyPiAzZLGJ75cjzU1KZN1WyTaMRbd5tq5HRdqvheYdm2tPpi8JJFqLRdNKV3Vr3Q5DfBU",
  "key13": "2SWuesoDoUtZKLeU6GoF3JiN1nDScB2e73noo9fS4QKQ149Js5i8n7FQg7xBaxdNpXUiB5KYBo9xJ4JWu6LWtKTk",
  "key14": "3uZxrMGdxfW2YeFYvLhc5iVQro8W6qpVr4Tq7CgcR36qQLv2Xrcc2v18twWpgc3ar4pH9PEmPGxfaQY1fuc4iva6",
  "key15": "2aKcr6wmGsDYnaT8Xfd3zUcCuKCqca8KCrtEzj9ViQ9qLEgxtZ3cZStwUE1HV9qfZaLAyFDd99ou71t9zuCUTV5c",
  "key16": "3mH8yP6aLU8PsekyoudWVhG9SE25M4jF1GF3TBakJd2seaQx75NbjHzJoEaa7fdsBHv86fa3smkH6MZ7RnTzUmEd",
  "key17": "2mPsANpGeepTJWfCaSUhU4omr17GixS7HdR5gsoVu9G86Ca68GForqKTBqv8pJ8PaxbuYbkytHmzwhtxz1o627Kh",
  "key18": "4rC3YxrXTBQDhS23pThK3guNx8raYvUKnznQ4Zq4MeP3jioPJveUW2fYdsRLxJWVdMBEyKD4LENMisxFxXGquVrY",
  "key19": "5vj2P5D11EA3xDy311BbaLVnhH1brGsi5yynEbmfFus9HeR8DEGKqpbWG8kS3XCM2jhyLJZSvCFq5iV4JAvGDNRs",
  "key20": "3rTPrptYfynknGPJEs6rqepSZYpTXtNfasSJY4hcJX6SCrT8tLbCMu9QHDZSJG53BiySvRWov3uh8Hp7tPz85LHz",
  "key21": "khkku1hMGDq5zgh4UpK46DPWfupGti4Wew6LeJixJMzjK1vaGE5dcdiiHNvkgTzGE1XadVe4DN8yH6kTLvzuTUo",
  "key22": "315a98rmh1yWQe3CjKpu6S2ZckorLDjPVY195iQ8MJ8jar7WxjXxUnVsRy7mmbLcDmcs8K9Y8jJFDaM18eqsL4Pi",
  "key23": "37m9KsZAb8QPppzNYSwaRuhc23j1nGJvbCTHBz12b7jo3f2Ev4r9TMF9EF2kBKPMXRAAbcUZz737fCMgFRbcFSb5",
  "key24": "4zidK64paYRnFQzJnCsUdBZ2UQLD7TL1LwipJsfPomyCkc85UEYemUJRAxj7hXWVqZEKBf765FdyMPv6gbHF4GN5",
  "key25": "3U9qu14EjcYiz8W7tDLRamwomz6t8xTBGAgFsrsDNVJyRgVZJfjA2hx4EMXvvgZjkeK6iwhdwWL1sKV1yEd8JYcN",
  "key26": "SDN3zwKphVpemjiRmevpsVz94YDoMhvgMDNECo8XdLN631WTgrtfvZeugvV5kbTSdwXTr3v4jdxiaDCcSwWyqCZ",
  "key27": "4fjjhCvDL33i3wHT6AHC8gGF5XEbkFMPYvpV4yh3axXGN7B7wYiiRW8xWwYUqcNmRnuPc87RDHBJqtUsTJyjPFjL",
  "key28": "3b6hiLC8X54ZyRjbY8M5bqDSUCG662MRSdu2SdAuE3RzGWZfqCrtnWpv5G8gSyvSRCRfpeANcAkB16AsfT7F5TBJ",
  "key29": "4ejAeG5KooNPisvR8pjQaop9DfncqXRt9MG5RQLjSfZ78kTTqaeaMQN3YmhoCz79FZrD95q6daVwEVHQQVdXGmzz",
  "key30": "2782jBieLZ5QngQ8jrz1yEtJSgQcoKPUJVUbg9MesvocRCTaUdjXt6PWZDSdXXZDaCEg2J1U2sAqv2Bfvh2GsQjB",
  "key31": "5Qt3PTFkpG4bM33bthiXJo6wyyYj3ZzY1PGbbDeVy1ApGMZbLdy9L1qz5sFE59bqbRG9nLAB6jWh68T13uqrJD9F",
  "key32": "5vvDxC9nbRT7aCRVf8oVwNASyrtECrppHPbgE8kS7NrzhmHxUMgGxBzfS4cnVLdaWDYh9RXBGv2KZjxTT2rTL953",
  "key33": "2xMSvoQx6BDwNcnJAacb8zHJP9r2Bs4dQtMoZrYsEnPhEge59tEbFjwGdsLmb3gZiHyLKPtwPBHtgEFvm5YymBzc"
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
