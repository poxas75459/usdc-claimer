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
    "XYXai7jHdCB3XAfURimUx4cAsshfRj2fJRNYNK9bDGw5VTNC9zRgoytWzLFFyN4xQUKj2qBHTUUZD95zeLCFPRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wz1V9bnDaz1mC4s5MuzZsLeB8czGrs8LBspLFg2ePjQWA2J4ZCjhsbVmGK1QvTtEQbD4vRhgxXyjsT36XvVCSSd",
  "key1": "4vcdyVWcEGPPXca3DT9i9Lg3Yt9iXLUDtfdnHonvRFPdpSj27pFoMjZihPDXbSAwDm7oG7oVXVKddTg7m9NKWNa1",
  "key2": "3TeDSXbdL6vgCKNJU9Zn5bBoHjZVmjAyt2z1UxpT8BhqjoxxxE3deuc9KJCUBJX7DyLUjdyrxksXdMNNyCiz6huT",
  "key3": "5cPdZzuZ4oLgoJRG2cezF1diEwdzkQC6MFv5F4ZcysSmFtB9KbB5jvT1TVhFsxJZ4vLMReTtLDZokMkD1o4eVNt5",
  "key4": "5eZ3PJqipcrQGdy9YqmsN2gPqQmBkBTczvnmuLywe8nAbSykhpqdauPDWgwNz5UiPRPQWjSZYxCTf2ETJau2J6u9",
  "key5": "51e83dcKxMZys2SEmPJVJLAoFGmj5qFKZVDkympfngxihiAy12GrtgHewyDCbn3kNZ12oHQH3zLfvFZj78CXtQd6",
  "key6": "4DrBHE4wxkuYHoQMkZzsv6yJTFNmWEHXn41vwURz1hYzebB3WfiuVCYb4y9MT6AX14B74R51QkXnLc2uUvFi2fzt",
  "key7": "2mDbBKjfV2d3QgPzsRwgCVx1Xq24Qc5StDP2fw2isM8dn3KxgTft1eKy4CdAuo4oijkuZVw2ZxHvE4hFknGcovFH",
  "key8": "4XkEJZG8Kru9vRXLmvF3hRzobDFgnfWdewiEQaqjLGr3LoKMpZLzG1ctY3g8ZM4HThqTYxH2Top7KuijsGRArKYN",
  "key9": "4xeXwhjmUF2jjFp2eWLXHvtaDK1zBM6RT4wU1ymo4ysD8nky2YMPpr7CVTEZ48rB5487Sz9J4NR2KSZ53J6AoS2m",
  "key10": "5f8wh8L3YmhC55obajpVgGL1russdFeQB6e2VQQApNyh881MsT9STCzAT697U5z19GMJGCSkT1pd27QDhREEZsHS",
  "key11": "Cs71PK5vQu8g7PsA6pRTcnrssZXGesAojEwJjJC1qX6qqJYxJWagnBTbXAwFVwe4fVDCBGeXZf8Js4ysx2euHcV",
  "key12": "2qeZY3f4H4X8Eu2mRfFcEH7eVd1VWVtZuzN6fatqN1z4ArNtcXh4XnrfXypYJR6GBuxJuK6z2CNuq6SSyhDfv3UY",
  "key13": "wfdsLPxZX4UY5fHNUpMPDnEPhazENts8TbTNAeRcN5cx1YMgkRxKb655pX6RLNQseUfcjNSeepP9usMSze77SyW",
  "key14": "5GzDKu1QPHB1BUE6xXb9cEDjMGkBezaasAAq36uAH3zx57TBj4X38hJ82s58uhq2VbqbAiKqe28D8Rq1LoJRP8Gh",
  "key15": "5NbwT6tvyoyHeC6J1UKgnfwuTvWTiKdo3EwUAmKdVMsnhg8F4qdCiA35hCXyEpTmosCXvuaaicSu4URjgSR1AiZZ",
  "key16": "7mE9redxxwfQVtATQKdqchTL5C31w63fAMxV9wiASTFwmkfb4FkxNdngsLwdsfxMmr2AwFLK4Dyrxa6juWBhDpV",
  "key17": "4v7av8tASr4RMee95Xhor5vkJxoFSuZcVyDSChzLUiVmcXYthQSd99wNYq7xnLoTZd3bjVzWMgkNNEfF99VaqSb",
  "key18": "57ry96WhGGrWGuJSfvNsBnAua1UnoqWRJiwH23sV1y8QwhSGzv5HvUqB5yicNM8djLkmgV25GTULPJmE8WMX7Qre",
  "key19": "3PnU9tZjEM72Xg4D9wyRrUUrMtyZsA4D9FvrGR6WiSPLWyVrJPAuhhYgpTC3QiNsC3SYN7EWAKDcGBReEZXnMGoT",
  "key20": "411tZxfEjdi3xN6HFjWmngKVxDF4wByDWWy8osJiMqBp7yUv352ZWLZBQNRE319yg4H5RniZKRvBymv3dmbHSmqb",
  "key21": "34EL2WomHfEhh9tX1ThgSJgAYgeLcuGk9viLdN3M6FiRi1KQrQHSqC4aK1xeuWFFRrgEcwoQrMgpFvQZMHfiShUf",
  "key22": "5MFmdh6NqWVdkxvi32cLeh98DLwg9tR13rDR9AAKFLV93pLXBtUhTXi7jc9iU7g6hXMNaY8JbAmxqTxM4RwziH4M",
  "key23": "5FB7rHkoYr1aTGG8tpGb9k1PVoxvNPXJjT5ybNhhUHsaKD1eVxWFLVLjF2h7LMBLL2TMByKtzkTiGYEByBkmbBym",
  "key24": "zKm3ZeEXfMKXXTeMWnc1JVfvcPrTY8kykxr9apcrEaxcwBYeRbgm6tuuKaxkznWA8mvmj75hrrZ3nQCX9Qyn7HE",
  "key25": "DE9gFaT4FGuVJsYb3m4VTrqThzbGLFzhJRDEqU94bsUbKvoMeW7Mkte8FXPVtuwVZaweUqLNUMh7aLg6e1pFNit",
  "key26": "4SEeCgnLpCjqBG1vtvonnMYuWz5SQG4FK1vS5gA2MMtjZEkVwBKypHA8Ru5Cy3rLcqJzNoR2m5Zn619rxpxs2tsz",
  "key27": "3wd1tUf9KG7w8geFvgFk9HGVswa6aNqkxv9SKs9vJBP5g1tTBfYNk6Yf8tXDTuBGsKTXR4ud7pH7skiEZK7RnBRc",
  "key28": "4UFHsttbBZEqH7oV7bNB87PGHEcw9yZVifDRsCfeBYtQCpWauaGTBQxkgkw2u8t9SsWrrLZpGheCP3KbuciXyNU9",
  "key29": "2VectdtMfcDDzaYVL5aewrYjyZh3vDG472M9cmHiQ7m5sQATbbpECtrhsHYZwtZpQUh5efLhBpNNZEwBaSjY2rcC",
  "key30": "48iaCGdt6DdcJgZ49BgkzRyo9VkCgfvCL9ctgSVeYSsBWjR4ZPKo7cXkG6PsSCJ9S1GGiaL8rAdYxZnTmVe8Higx",
  "key31": "5xX34rCjKqFFGey4EuAaEhDAF3zRdyTRGHH4FzvTgzCmBevau9GRsmx7sf9KrrvKyr7Md3PKjmsV4J66FuB9h88U",
  "key32": "2qTJMht1wXfReczN2jXb2ge28HZZZzm69AJxG5V6LPgouYZ12X8iSKZTLGfaQoRgsMaCerX9fVzXN2Swdr9Vurti",
  "key33": "4qvsmLMeJZUu7TzNvFAQGVWy98hs9ZmV1hNJAaoNwrUJX1nWeASEd4wN92Qv59vp1ESeJFVpXKYGydhgm2A3ciuV",
  "key34": "4pQo8kSmQo9LCUquGudpVrc566QDLci29vpHE7kKPaPxdSbEsUNRqh2uapsV5w49canLAL1PDtUQRLenURSdJmQU",
  "key35": "5wzeEMzhCe5EY1jDhex8YQ7fDdLkJha8GVQMyLaHGZy6oHBZgQJstBHTEqkTxzyDuLupcmJ5tpiWSM67PUaCkyZw",
  "key36": "QDpQepBYPpSx6zyKpFbX3spWEtWy1cBc8y9D7JKzsa6ZH1c7pJBuiC9ypKJiRjn5rJwX71RMX1ovzhnJtE6RsCr",
  "key37": "3tjwLwNHN6U1CrkJfFacKUprzPUGteZXyjNGe6tVX8dWR6PFtDpFKbuGubgy5cbJLKhoYdDnvtXtYYDu7YG1ScGa",
  "key38": "3LXLHHMnCoMZsko5vD6uXU6vQQ2Fq8Ruj7F3TsGQxQ66KLvCWxXPtNN79zQ6zdqrmkeQg2Nh6iPFXpvU6iqGR8Jj",
  "key39": "2k9ysUs1tCesdTp7re6fjqGfzKTjHPNSUijpeT9XZRuJ9k5udjNQdi7KSiXNeW94WFnVfFRCEw4kY9BgGza7qLqk",
  "key40": "8YD6udHAb8rmwHhr7Co9k14QvnDMaTN7GM4M1VrTexUAJEdBgpeSqv3W6radt65obQxiAt1haArRmnnMkuSaVGN",
  "key41": "5Zba7UXmkBgHuxZcwoXVNgU6z9yF9xxKozjVda2KTnZxZjV6wqdjR5AoA7JfvdFhx6i83gJ48edJLHn52zBUCFV5"
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
