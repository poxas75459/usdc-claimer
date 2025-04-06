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
    "2eGZVvYvBG87kM8PgLfuS93kWNdB2HhTdaRSFCEpaSivHhTk5sCo3YGdezHfCNysUVa32RaPV7RfKQSJf9XnUWoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xr5vC7PZdzBaYY29H9acWwuRzyBiNFu7inEKZCzDBwCUuj8cLVikPVUrxNQZU9XiKJV92UBuyMRcLoTb7W6rzJQ",
  "key1": "RM7FNwFHenwDeQ5TR6FjiG8FEJKY2qugqfpFkPFxZm8ePes6CiKJiKsLnRAhY2FHT9m7Hii3zvQrWSktKdQs9VQ",
  "key2": "2DLR89nkkBYeS3hTfo9TBFL1xKLafvtHWXqeoDGUtLW11wZqcEpqSiyRjoJ847iVxMJeBm4w7FXQPRqbBR8prmma",
  "key3": "5TJ8WMM5q6xJ16TsTDUQXLDEdSntASUciB4RKJBj2LGZYxtZbFNpkWqWMSU6kRHzLpMSRXfJpAY5gCEZto7F2L39",
  "key4": "Q6SmttsnCPFY4ELETALvw67VaXskx4hEYN3YPXqiBxcuXtEhVwBDiQr9ouprRZY31oYPXTELDXjYpAeRJEqXLYh",
  "key5": "xNbRpaFjq5ZP4AUyzM5cb1DrrEBETdqWaQwT3p7yFuhXc5PjRCeob6FMuNWBnNDdBDZWPk3amfxfipdqa9Dx9Ur",
  "key6": "2FEUTQ79HbNe1LWTfMNvBda7jagdMTfUadmPbh4QAuZEJSwo6vY2MineXBaH5iEYs5Le39NyrA6xf4t5fG7xCo6n",
  "key7": "4xM9sHtqdVd6CTpyxLLc9cpUBBaPxm8hRim9rXvDrSdRfWuHwKyh8wfJCLHNLj4jFxSFpDmRKE84Q1YGQyhoJaRA",
  "key8": "J2G9A6w8ZJLQ3EXEBL4MUqqAzq73BGiea75CNCa88HMVkuJXXznHVhpNSpYnYysJYGoscFGVYgA5iaUTGhnG5Hn",
  "key9": "4VUffps47XeHRX18PcjEr4TKzPLRufr67Np9zo7bgH7RUnmDLQVrNsPL6zpVoNu6KW1LKbYr7kV9NrYKf62w6CGQ",
  "key10": "SoQ6DKfXMNvWj34JYnJN6qv4V1NenYDoDxm3fgF6wShgxoUPooA8TQ3EYxArfwrVJaGr4MYMpZCwqnji9GEzgnC",
  "key11": "StZfxV5u8bLv8wGKkhBqkYY87HDpiNqUmmZuCNencrZmkZkSFzj5DWx1ocKWWwr6TkKNtNNubUPAuAmDom7XnMb",
  "key12": "2bpZNyAsLX9f8FQQeFshu8TcDQzcWKaqaKRT3uJMmbm3dra5dKuNtHeKA5QaCmnLEonnCcfMYA1dNKks7wi67XRa",
  "key13": "61zQUBtQEVZugMP9agDagjotdbLvEazr45uFNxpEnm13RJpfvY6b6vcdFarwKDE4MWsqZKNGzautTvFjdRsTv2bv",
  "key14": "2o9WUTsn3chofjMQMDzXWCbhTpyxV2o6eH7W2rfJe8TqiSvLKwwC7Wk1N119aUsGRxS4CPTBLqqHKhMZ12dN3M2F",
  "key15": "36QQYuNR37GmMgJjTE29xVgfy4Wey847jVp7QHTogD9PkhHeQYMC9ey7g9xfRRwiBgANXuAbB1WSVK79bizrj3GE",
  "key16": "4ZVTsYh9sUG6pgjZYh67wy8eMuEEYzGV96fG7rxDAkC956C9PEpkgi7mZ3KD1dGQVrWEV2LvQsRDUjV35XW5szy4",
  "key17": "4DeQPH2ZuLMbb3VURZmqPW9HgNjpU1i9Ez9Yxtr5DSuKbbyHNcEu91C4qvXAT23tGCk3xHbJMWVUMdm98vjBeoNw",
  "key18": "3GEv8en9Xycw7BCJtr9AfJmCivfbU1RFYXzBSVSt9Nj6icjcaygGnRRnx7gx1544SrU5WcGU1oARH5gj414zC4pi",
  "key19": "hwZ5LZYfu5JPSuWYfySidCBYU7tQjmp1XcH57pe3CED9kPDx82zdPLqH1gdMgLGfgi391Nmf62rji7LTmACtxcg",
  "key20": "qRsy1Hu96Gv2Hw9aRpq98Cudi9asqb6dTEsXdLSjmo2rVY8B77aFPMhWA4L4Q2sTtKyRUDupF8FNRQ39uv7xvXZ",
  "key21": "GnRxMWdcEN4NqsgLL4e7vLgLSGFLbCi8LKzMkPGC8jLf8RyL6VJSrHf5VyQoXv3pY9hpzv1sHoG99TTHHaNLR6Q",
  "key22": "2gy8estUaFwooQx6huEpWuQdcb34TFwk8HVyF5HNvSq6inkTvkMumByC2dJhJaeJAVjy9YN3QznrYBBZ1fpiHKn9",
  "key23": "2ewa9DfUzBYKXcBRtEpRMkuehqQ4u9ZZzgpCmabhUMctfQRoqhfzQ1GXzk47yhoTUtSXmpyfC9QgqL1b4Vyux82m",
  "key24": "5peMEVSM2dPv8UGbskaTHEAeJ7WhRyrYBmG5spFgfgG4bo12AuJR8pLSc64W5yic5oiaFNe5YujonaUujTyEpkfP",
  "key25": "2PKWvPyWeqE5x4TSQ1Je7sbWxDbDR3v5w4wKsu79bDDwsLGjmUupXrXMKAk4jxGKpNKMYJag6DNwMp3czQPPQPJt",
  "key26": "2FzjvkbFSg1wne1Metr1mRTnxJxiKkMyCbfAmF9LJv9vr2kTvihc34Vu1QjygE6RUBCCM75EZ6eaRozjuMuQLZzH",
  "key27": "4AS7tqqiGhWCjH1BmvM89LUo2ULJuLoKiT46cVDe9hTvfb1QvBPwSx8N33p7E7JXeBRPmK6dvaQZBEUwjmW7AhjN",
  "key28": "2kBkPV1bFeuYfuPVQoZ9pU2pnMwRaJqCmcSZDSKxn7ivSUYZ2aSCB8DJXgiycozeqZAcC79bmhm43QcuRFEdgQsL",
  "key29": "avhKAayQzcCUty1h63Tqs9gWVjmjnuRECxky5c7gZXmiZVEDwh9U5bA2A9mSC1ayuQZrMn75AWVvtgBR9ZCkZQs",
  "key30": "32P3aAokEAZtPgbb3cAnEgi6yTH1jJfSpdzXtGpdSSqcFswM9qATQKz5F4G51xB2cfdeqy87ytS2jewpbE3kwVjT",
  "key31": "664g8tZuFeqXvQdoFQasD75HsaaEmMAfha4ca7sUwiKHoz6xNx1LMzBTwtnH6pdXAyPJ9u7hU2NYGgohfTGpbYLF",
  "key32": "2pGpkcr6W8S3Apg9AaaxDHzoSmC7avy8PCyUFFquqZ4wkn7ydRhiniGU4M1LuXMZLm9tQP3YKNBptQPTymUyEKBS",
  "key33": "4aUdMcQTGdXVSeAKHvgWujtD4wuRFau271Ab7H8hYKLHcR9yMWnbMcG9XERtfuowFVDfQDst9fbtzHRhQDN3JHmH",
  "key34": "3dkXDY8wUNVmiqMe3Y1m5EqJ8m1PJRnb7uQhGaQWGpqveRm3f6mHLKGui8dNkWA76eGkoCK2jcp1qwm2GfPAtHee",
  "key35": "4XpBEEEi5akjrAaCnswtPAKAWCwEME2B718x51uM97kw6Wt4yFoWu7iim9oUyMg38BxkXPNcia4bxFnoC1YCmrCS",
  "key36": "5CKQwQSijvq4UH7NafgUfv869mYDDQNjMi42g5pAZ7vNP3UtiC8boBZtsLFHycZsY7x7kfkk98Kuu8eMJ8M88MuX",
  "key37": "2rcc4sB6xbVvwGCREGpKbbZirHEAvk4MsqcD4bhjVJbEP1jrd4CSyJSSvg7oNqGdsun6WNzS1L81nirKe9vqm3FC",
  "key38": "BYQhc4rHuvMhQcfUsJiBVe4yLa743eFQ6Csecfw5RsbTPdhdLsAk4Lc5cQPHmFcAs2VcsLVSE4tnf3pr4EmE2sE",
  "key39": "4rHR7VJuvkuQUUuLcwdspVEs72LoDPsiSzNC7tkUWBVSe5VgDr91rtGwjGYHpeRQodDqx3meVMLRAGUNZN3o6hPD",
  "key40": "qbPiECUQrEkRjSEGU21vbbgjhAtqZs6C7dbuXytyq2Z8eJmvnpRJ1bA5qWEX9KtCQL6PQ1GMZai7u9YJGH72AaJ",
  "key41": "J14PucTQQxiKCCqREtphZ9UyjX44KjppgqMoDg1UV2xVpdPk7fg9n54m56q8c5SVX8RHTKmFPib36JyZLAVP1sp",
  "key42": "4J2jg5exbAVGVCcXDUqiMp7iVdb59HrkHDfEoEmXqa4XxKoCSs9sDKkQvfmBT6ymgnrNqW2TmdJpJ5Msdhw8dE6w",
  "key43": "44zbhV9aaM9944R5c1CYQxoU79nXVsTFeGWhKP6KJJ4nKmjcYphQWjoTWCA8DXFSD5DuiM1TsJvJS52tgFoZtiqK",
  "key44": "sb1JnoFaHPJPA4RxTrPDHFqeMXDtHinRXYdxZLpHYMXrMLXdRJrtXXDcAfqe1gLJkaSm4zoez7awKNSWu23qGJZ"
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
