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
    "HjTvg3SQmvjQgq2Y7uKcn2botP1TySwihieos39fL62d2oqma4kwT9ji7UKCnpYpCzeasCy9bX4nvQ7Y9w9eJiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FMBzdHVDWhhcCecKdgbCSybAzpfRYbP6pZ5WBz3vKWGuYE1B3kqudmWkfmXPcE7q79hmNNsKUZTo5nEpqcaoZHD",
  "key1": "625GkUQUbecBS5XVbgX4demVrKowJe5KWtwtYjmWf61bmS6eubVSUs66rHTADFoJNdNZYF6UnsceVrrTYURw4Wui",
  "key2": "49gynPbiaYBaHJVSMCyQGWQeHUByWyQDhUujFYPeTr7rpb16JKcKtmNW8cuyZjJrkxdFH5G6uLoYZF5VC6QfDqsf",
  "key3": "2VMWgNx5oBJ1YrdwGRfGGMGmgro2jt2RAXm1CaqagksSAqq6msNJjU89kncmNSRH3wgqFVtLGyNVrh6ENEaCbBqe",
  "key4": "4JuRzhq2BZ9azzk7vsvbLHgGeWyHq3Q4AHy66cf5aQNuWu85FHy693Lx6DhRXTVP3kyvqdEVddZE1khe2Gek9wr",
  "key5": "4oupJqCLrfSgJmpAo9JGFPUx8PexaLhk74Uzs1fiGddY7gmExmxQwJbAuRa1cjmtzxiom71unSbScQpFBytpQs2b",
  "key6": "RsKCzVjjfUwPaEjhdTW2T9RkCUpweFQnGHsd2ou5ZH1zCtQW9SzLWU17CxBBFN3TbubtXDg4xb84144pqwNsorX",
  "key7": "3d8Uth3VJ6iBiusUVPWJVT2FFUFcFjL5DGCjVjRY7bqgQtPPDdCuvUDJzwAWmd2GysoDFxXyXg15wXvjAemnUrPd",
  "key8": "qfUqXqLXrNZVeMXCgyibAYDaKzoa3afqoFzPCgPm53yuvLZyfWsBZ4gBQAuSqHetJzcGdCN8UrGQxZ2Np8bAfSa",
  "key9": "3QLo6KRRUEwsYy1Ci7RrRgSuG7V6TuSm9A7U65PBAvDeBG2wDakqJoBQaXWiXSaRKPRYNYcb3iQhAoENFuGrZzsA",
  "key10": "vfaFjx7s7Kdw8Kua4hhuL14VBxZDxnJ2oNjdeXdX7FU7Za9qhVXneLFNNDFT8fTFhPr8tPbLZLMN8rn1ZpnR5UD",
  "key11": "4BSxd2Z5ZNKcy3S9LNgcB9n6kYnEmwKDkeuaspjcUGwReURufBFa26z5yNhZBzUAFwDzu2LuNGDSn5XAiCCWGr6b",
  "key12": "44KPGQNqhzTfxU3M9FHfTUQKwWQvjhdpRXBZ7358QbShLCnzqfBzPnuLw7gov9WGe2s2Xi9kTp1Z9pCbLYcbHD4N",
  "key13": "3fdstyymmQ8f88stdE4znHXN1kPpXsVUyXQjLoxWupKKyLndVvbP7qMynQhKx5s7vLeq1Fnowy3CouWsMAhSWuP5",
  "key14": "4yez3Hkqvht6Dg2Rsfdy8wRLGR7TRrL7BtzWHU4hRaCnKKVAGGa6R9Xe4fwGpECZBmpB3jkzA4RbugeCD6LGLJVV",
  "key15": "2B7J1aRgs6QFU5q11cNCLtz8r2wWggCEdRLja9FzLoHpqRKefQbG8F4AFQFSqcAnXSrz8Kno6XZ6NiJLyf74hPRV",
  "key16": "5TyNUnTRvQFXSmvYPS9y8Q11oxLL2hDHLmS1DnYR8cMoqyX9MCLb86MF49Lt9CgoyEYXfXCif9noQGXeUmmxGDVu",
  "key17": "CsEVjnzGg1Joir1vD5bG9S88pvLRSZLCkEj4WetYKHBiVTrjCR3JNi3KfWA5SaUd1XpnsvXdmYEDkFTGXwfuT6J",
  "key18": "4tkRU4UyPTDhia8bhT7UEN6vsrE22JsGkwYy7qj73MieSCGqNiYhAJWKT89VyEVFq6o1ETfr9i9sfCDYcY9bfrr7",
  "key19": "5e7NowpnVECFGvyNsh9TQ7ymcstMaeM2D1m3PuBUxWoCoG1CpudzE8kWogEsuhRrKLorfdUejUNR9pE6PhcKNvLz",
  "key20": "4TrihazKitrNKkrTgJu6woLEYkE8KC8V9UGeHpYgM17a5RRL8AoUzwXeuDUgZz8jRSX3usik2jW2xjaBaE5DMffw",
  "key21": "4L22skXDgBe6zwaTDdN4T8mHHhGn3qxa8gxTe9MkhnH33AGNrdqZ37Kepodr4A4BLLbgJf8hSCFCsCWwXHdvpkQc",
  "key22": "44BF1QTdj39vvrXiVwkPhf6dZLE5nxKCVugbB9wQuPtiygdnighn2cehtvB4e1K3uRoH3GrVR7EGeqGSh6sF1rdL",
  "key23": "2vpJ8mcDVDFvXDjR27cA2PGnDnLHYT9L5vevxERuR7eqp7GoLEdkr6FFTAnAS74SVHMqLfsqTRW6MVpHATdTaQEm",
  "key24": "2Ljek9bD5iu4Yp1zbQJa1VbuLsT2hqAKgYiEaeBWRrKGLGNJvboTSuFdTw1jbWwrkdCYh5sLwBDaEqkkBRepQ4J6",
  "key25": "4NJGhsJejG19ifeRRAk94ubYauVr5j1aDoG5di5bNuDTVmy98YdYT1uk88NbTnyTdEqvnwidroV3zivYw5SfF5me",
  "key26": "MwoLUWRn5FvxfFZawuXfHP4bVo2JmEjbMoixcp7ntoD6uLMXLDf44LxZeL53S7tawFrg5VSvWHg5CASDhdo7ivy",
  "key27": "bs6qkuDqvxs7GQR4nh5yQUCUJ6yi8hswYHdwirpRn5v3fbP3xsmxj42LVJT6jEtkTFQhk755A18tiqFA7iJhp1y",
  "key28": "42Z7yyjSs2tjmVKR4bXoH5dfkg7kXLWnpDzpfaHYx7vQSRrFyukBKB4m1J1a9C8p9pC5xK31Jn97NayT7ekKAppZ",
  "key29": "4Qt3tMK8WB3uaJDYds6427gyyQsweBQw2BUc9nZqkHYM2BoPANsNCMqbwV8tpLXKfqXFd9Zb1pj9YwenWSzSQNb",
  "key30": "55fs79QvUX1yY4LLeqmrrTRBELwJT298wD8G3rTMRmxedwGYueFdiFqL7g2J3tvmjj4xB3YmmwoQA5CePqEjwrVf",
  "key31": "2PC3oqbHfWJtRyzoJGnpZFgK9bmRduo1VQ7EWYhrWyGP46x4A5iW2KKfJm5bQMDk4kTU2fC9dR2jeiAExH5hQfSB",
  "key32": "5agKjMxjEHhRSaWCqGT1rN1Vx3bKEPDKFz821eLxMAkekgCVSiHNWicRQZvyK2e1cJpmvPGTcbRHW2QUsfaZ9GxK",
  "key33": "2yAxoGBeYmBF3L3YmqL7A8UUQt8nFMAXg9nooqqvxTipFGXmr43h2xFV2NEGo1c1o51zF5R9fKQCs818MuiMRxyZ",
  "key34": "2JWuHBcdZonirGdtMBbpSAUnCy4zfsrGiuhLTn3qJMZ3xri1FpNWENko1oKku7UrWirkzk6ppCyCMoLhkyZbrJFN",
  "key35": "kg3AXohQ3p31hz8ZKQXY7crnFAe4vNjoAfdKuC6AEuPknQMNCWaXztJzQPsMmxHHieuQcfpc8urMJuhPWqzswPN",
  "key36": "3ixHNWBA9gHQHjqCvjeF7zJ6Do1uv311oeiCd2kK48EC7Pe66xrNiZUCGwMByyotBBWPit92XqT5Hx4iPAdepKSe",
  "key37": "FXCntQeoTTa1LZ2DjH4zznvtK1NxffAqGbej1ATaWaBXeFkbTyLj6NFrjHSG4HWSsthK9XQF4X4BHsA4RoECjSA",
  "key38": "aJTLifpXhcdL4zjkVNsKpgkRqFhc2MGpzi97iHmQuwqoje3nB2pWYpTX1N1MKVjaZv8nxd69NevUJZfrA8c2mvg",
  "key39": "5ye8QZz1yKqShqjQED4D2vDs2ypCRKzC5wsFCrA9Y4rJ24GoV89PY1ETBc1znLUtZUV7e2eqRhVoMUtyvtEUtX8D",
  "key40": "5yYygiyGiNwhvcRXEaBfvnA95fyMBWvKFbTawvNPUokPwEhsZJuowrpzn4Yy1VncwMWyyCpdM5ugzmi57bNhkA6V"
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
