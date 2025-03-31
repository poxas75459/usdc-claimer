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
    "3RGiyUnp1NmSM9aaNE9GR1kjEMn4r5gdbMhQr2Nfh32q7DtRbcZc1cMQQkkJngZHp9MsyaBa7Yu3ZyqMzwbDJwdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EUTqxV28dFf3MPwwbvnAEoCPk7x1FVgraQ2GS6trEYKSoziYL64H1tbBZCNSehff6gz7BQesEasdAbjDjXiVdjv",
  "key1": "4n3FhWm41pca2ccpbAYypUawBFGSEsq2LV8sbXDQmKtnYspCHcHmrKGX1UGrP7rhCPG3if9LijFH2xvV59CT4fQb",
  "key2": "4T9NWQry8Q7UdyATcrE7251BnmG61Wdp8KpSv1rCd3hwLyYW2vDfpL4tZykoP3YRdwnZ3ecvNauG1gLoeADPGE1g",
  "key3": "eYoLwg8vKHKxYagtsaaxu1RUH83Ddb8Xni7QzvRxQHRWsBoZj2FjY3jfPj7mmK1EFcKr5VeNojgdnpCy4cy8CPi",
  "key4": "fDmP2SsQRfbyCDcBzKe7Wict6c3ELG4Tg7ELCjpyejBKKaTR1beMm44PqL7YYm7ghqBCE13QY9348wFQ9J8nZgN",
  "key5": "29ofm9nSF63NGcGY3fTNxdhcadXX1HEWieWkNsokMVAwWaRsbWJ5y5kAVW1LP6pevdQkuEenTu8tRuXF4qtgDUnB",
  "key6": "3VToM1t4FYHrt1Hh2NHT6zgL73uUDhuXTah2jiXNMHRid9X5XTpvfDRPEsykfKBDGjoxJSuagkuy2boQr9DA8U5X",
  "key7": "3SdeZk3QQnSYRh7gwh9HfjxCNnouNKaVuVrQ1bJdBYuBHazFHxhUKbFFhS4ZQdQtKNfkUoHM46Yf7umvpBUUew58",
  "key8": "n6AiCVSL5j2K5484dnZA6untrN5ykgYwZji5f8MXwBBVwfGmXFRhoDZuck1MArsa9MGYkzKQ7VUvfsEwz8qY9DX",
  "key9": "5Qx3TKMRWYBzM4w8vrd5rXfDyGDmB5it3oEBsztbwodqjuiwqtdZjFht15TVbKeeDgTDk1nP56jgMAwbxPrMCZFP",
  "key10": "h3D89ufDpqwUiyD81rhig5fWbF78CKL8nhUKPsdCc31j8NMzZ6eNcCpRzT28dRiv8WqdFhspz8RrTzGEPhTJJh3",
  "key11": "2rjAwb9mYjUc4CqRQqbZUbNUVWQxQoqM8nZkF4VtZmNZ6r8H36FP16qECBe4ZoEEBKWwZEiFFLWMueEtnshJccZP",
  "key12": "ipNuets5nhPpc5fQP76sT3qBa9UkyXbrNmwUA3HrmTFuQcSryknMP4hxdgRSmmdAYF2W115MoYHXzPhZJTcrPVj",
  "key13": "3QuyqJwEaJhBKPXZjCgmxu6oF3mK444GLxrPmsj9qnuZoq6E2A83xBWWXmZcBXd95U2LvvtgLTh6GdvMc9FhTgqk",
  "key14": "5dHHhEKnYHDeF7wpUqmYA7g63Miw8sicaJ2DPVMwU8Ve5FfXP2iymrtWrcWq2jumhZtcaHE8hn5e4n1HQtRu5tXG",
  "key15": "4Lz3MAVc8o1JHQG4KXtLXVfCL1HjzJcKvK1fxoarA71mX5FBsbH9uiswWMtKGD1Y7ndqzHV2MiiBzv5GyT8Ri8vt",
  "key16": "2pcJcoTXonhwAXjA9Be2qQXKiauQxuZ6QDXhxEXemLPEcCzdVmaszqaZFpJtaP7NLB77Jo1Fj6n4uoEuhZ1Zwac6",
  "key17": "4Yo8wNNMUA1XNt1ijJGPGvskD1pyMoNTmNjWoEdXa52EuZTVAuX9fZo2DDAezjx7ea1kmTYHcjYjBJRuCm7N3yyC",
  "key18": "27nR6VzE2kXBY6jvhgi5mRke87JF4WixrMrCSoxYpBjRJAiUaxvwubnfnYH95fVD66XghxQgW54LSbVXdYAUaSNE",
  "key19": "4c39vs8CWmDDzELvhFCR4p79wqkuGxNGdJqAUy9KLH62vMpDWAPGMmeMj1rH8M6bkJzH2JfgqUSAgqnCtd18Pdpe",
  "key20": "3YsVAunEkWHB9g5P1xmymPxLuhcorR1EEUbDY9thhgYpVMsufBM2Fz4DrrYPZpboBw9NWhg6m7w46mQ9FfnRxDjX",
  "key21": "24kDZuEk63phgq7nAysccJq8cxPLsPG5HF5EYB3QEggd9fBNmemeaNtEYM6mCvhXo3nG45DUeCSvH1LSEjcgHfGv",
  "key22": "4BaxcKn5Wug3N8QyxkWdGSokrrvWPVjFtK9idaqSfLfcsY1h7KxbappDdsqsZC2pxNT4BSaf3oHjtddvcp6JERj8",
  "key23": "4rsh7f67whRHgVxZGJtBgxzgzJkLBsvwDi1P1HeQjxVm46QmaLKvT3VRFSb1z3gGqB2C5gQhbRHWqGq3KxqnRzQv",
  "key24": "2jtKVweFrKEoMDbLMu5dcXbZU1n9FBYZ8z6eA3R4Bbb787XH7Md4uZRwRHNj98msGgisT71RBUXiPqr35sFnKyXD",
  "key25": "8VjCRy2kGBqCAtRyiaoVcjNLskUToD7eDGjygZ3FAN9kPXYwHo9ENj7wFCifU7Q4G2LkjHxEZ1VXwhre36Dxb8p",
  "key26": "4NsCjCKx6g17rrBxVNbdUutQdjpFTUBDHnZ3unDXhnNQKLk9sBWHPFbDm3jGaJoeYDL27saoRQxFS55ydeUvoZYa",
  "key27": "ASJSHosyfxX5T2NPXKD1Yt6S1zUSqTJwRwvjMHbb3uEbr6YefeCm4Y2emWbm1BdMbJmcVDdSE9PhyT3CyHtvuMJ",
  "key28": "3aLV365Asxu8b81iTPTmUAQE8dbCfjT1fbGdsZPgsM4YwzJyk8apapVnxd1gpGsp3bY5RA6PFZg2swQnLAcnv73z",
  "key29": "23d4GxptXXKGzcpsbcDr3ZreX8wuCpGXdcEwRRs5LsS9AjRxS2dpsrfxNs4Zs5KXLi33ugs3qAmsmnokDVbMSv39",
  "key30": "31Vu8gtes8oEg1qvvdMDNWgEkUpaeFoKWjVAAUBmAYKE4wEtSGJfaiBhKG7HxEnF46xnWhruQqjLqYRW8YwCe9pT",
  "key31": "3BMhzxuKmNSbYASsew2EQc8fm2sqAbmaS2AY6HETRNCZbHBxm5kiPXAN9RmhgtjYMZuLjVGnDAPa9fGMSy5va47K",
  "key32": "p288xJnRge2Qvhg3QXCN3HBCmuTzPTLfqztF7fXNH9x37ESLfUSC7bKmC2SbcuqhMtEUPXWALPRiUf9jM6chBiU",
  "key33": "3thExo2ZCgmctXFuKoU5nt9cLEoHGjZTEX2q9xtEDTH4s2yPNfKKJJGNS2jbYjuMxqx9SZT2pGezJkWD5jPgcHLy",
  "key34": "6MaAbCET58ovXhTSMAyjrxQJss6ymxsPraBNZoADHvQEy9SdDfJMUZYMV1kqfSnvAi6AGUXSDaUoqX9R7UggmnV",
  "key35": "31zVdFTnTwAZgYNEdrChMcSJL5YCWE4NJq9VJEHWwjJJRsc8YcqaV2rnS2GwZn9CNjoDpcnx1xbtmZEyrHh8WMoi",
  "key36": "f1MM3QE4za7EVjYR6wGccBeuhTNPunkBhgPmo1iCVPf9ATA5f2Gt5Z3LacjnVArVYJqEsRzsrwDNowae3hn1jLV",
  "key37": "3ju89sMMdCSnkhDobzUvHDHjoyZ1PPe6q1DbF3jFK2UsLvz2qbnygvSvjUfL7FtdNWpSr4EuzXVFmBDXPDirLrXG",
  "key38": "33CvqatbUMkju55KQi4VAxFzUaK5GWV4LYuzkwBUjYqaYwLHwdcDeTqRNXznmtPsHzt4nCBGThqgimXBU9jcNxxW",
  "key39": "2SgFPPVM6TuzNaC7fvzivV3RWjwTUrBCFn9kkS2CdG2gYysx4DP4xEaAzUANYK9AbcbLwtiNRwkk7R9CSntUfVe2"
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
