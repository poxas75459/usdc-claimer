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
    "5PEL97g7fHFEUnTibJvSM1FL7u2co8qq2AytFDAdxtspA1AxHiuLxuypbhrknnhfJhs8ZfaWSAi8xLz1btD4yaS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KeWbx7Xk3ZB2CRmfkT5Dm5qw4PKbrDxujPKqqWhhyUWwTUJjxdJjeXYFN69zWu11d1kaJMM6mU7xB2kDsVkDpn",
  "key1": "2nx2WSjUtE8ssWLhWrpmEiLfePKV5TzBgWi2bMRL1TqfBdsDUWaRJ9yHCBqh9WgBfjTaouRoQKCe2Ddmt16Tku7h",
  "key2": "5B61FFy442E3uhTw1aJKFmN2xHAmNFHmZFDUQ5z28ib1gQvCxQCSooasgJwgyAWcmUKvrHBx8Z354GFCnWz7Emnu",
  "key3": "31sCbrM3AoL8Taf5x71ZSRxuknewrd8sHwHdxwZGRiczDdHAS4yLgjd7Sg7tEne35359zup153wZK7vfQTzoi94w",
  "key4": "3U8VhKE2Zzns2QYfVu4g7u2QSMt41moWQQQ6tZPw7SiQH3dczcaxWwwumRemjTMmfKkPqhSz6skWQg9VuHNs192w",
  "key5": "3awjEuLcQAkVzLZVSdQjNcxgszi6Ei2ADmshpY9JGKGp8q2ea3KwffwF9XUf8DryWHfE9sPRRQy1n2RCfVokMBne",
  "key6": "4xBBeQ2E1T58GXA3zByzDfiEKm5UyDjbvF8SxaTz5XoVy3qEAaStahzzzpSrD11p2Cs9kK8jYLkM88BXD1qSeHdb",
  "key7": "4o59n2jzJGeEr3GtzoU5ULzAqPtXtBXYKX8r8PbtLRL9ZvFvUAiMZdvZM46y6DQRk8gfDh9wmpLtni3CiCvLYt5L",
  "key8": "3GLgjr9Z2DGxQpuuA7dKDv5TNvc8W351exCTat8TJtSQTSn7xzEoqRkkggrM2XA7pKQ9rzFRgZkozbFRPrwPgCvU",
  "key9": "3Et7kSo5XeLf5iGwkK1DJcZpaD31G6mFGE69RQ4zqwtc41d5kEkFqc12bokuWoMc2vd8UXAgVMJrBVWAKbFW6Gf6",
  "key10": "5XZRQXYcQjCVtUqJ3yBPsvVj25dGZWmLNF1rXxwcX1e22tUBJuazdx1zhdNXHmjcFWvj4stZuvZUADjsMuz864nE",
  "key11": "5ZnsQRK1WZZHqiaVP2WDzp4Yids5gWpJZg2fuuGuzCpHDqdy93nKCbazJf5Mko5NHMhrmouKGZnePUbpKHE6HiAw",
  "key12": "3tKWDJipf1oS9voYkCepSmZdtdXT3o7hu7XaPqnRnDfhMhvBYkH6g8zuppYmzacTS2iAEa3VzEtQpybhZPY1Erju",
  "key13": "4Zuk5Xcczj3EqaLYkUM7ETsxqozBj4cNzPky6EfwrxqMzJqKn6XJA7QACXYSaEdyRM9JXNnG1QsFiyL2tokMriLE",
  "key14": "5AY2H1fAAQo35UGro5367SMDjmp9WPz9CnsYK6K7z4ZCWVEfFUQc6WaE9dQViLouKWSW3SH7PYUt9Lv4hLTvqU97",
  "key15": "8UDbxm5MYfuERUqx93yGHvNDVWdd7rzMRYgY2JtnJuMCpMs8SHzAus2n3CFnfq5dXYbtYLRc4LPBC4kDdb4DWTH",
  "key16": "RUmwSNwystBR9BhzZyM2be4FVahC1tM2tdzPp9G1kFFDaj8SRAtTAmbUoDaG2VHmxFwLkrToujGjLBi5XEdcoSo",
  "key17": "3PQcVsYivtBeVCgwrPmpyHsx7sJKmF7QTGmkq9T7eXEVqSsFufn6Xe99G5sv2Gron53pPZHe8N2Fjj2GsqhRitdw",
  "key18": "xfzx1wuPmFqzSoUtrzVbvGZG5mmncbFq4gsbpNHnXBuHr8HoS9eLyREBgtcrRuqjy5kijCoscmyuytD9geBB7Tq",
  "key19": "2Ge66tcBAoXqqo4aywKxwSQDo1UXyxK87fT1r5pBincsJrhDv7boBYPkRW4GHK3DEULC9N6ncaizuhZGgGgf72Wa",
  "key20": "2Mfd7vaNjDUFdWTuBsC7eG77VBEatZcaTFQ1WQruiEBo9pJHKcU2kS5ceoTu2hVw1n3ktPixmQfHBRKnEWjH8St8",
  "key21": "5KKyWNKstUPgorMn8ScxRL1jKknCkCvT2ACzr5VwptJiAE2MVSWWRsTxVYPnYQKLhDHC85sjUM87mqH4rqD2MUuS",
  "key22": "j29x4iDubUkPhENF4zGsBKbFNXdxiZCvryqK9aaedoLjmrzxs2vkmLDaAELiyjY6EvsgvvVcnwg61PdMaRNaFfA",
  "key23": "PXc1iNxNSeRbeMGPYHFfkwNrGzv5n8zAayxiY335UsfGSdnQcAUfADWgNqnBEAgfqAt2zoBp4ZiSmE9BPkckSnS",
  "key24": "32cL1tMnBFeTkSTtZ5Mro3xA7xGNCE3cDrZsFw9G879qGtDbTKX6yLFEBwyT3JS89T9fTtPkPrVAd5n4m769rfkS",
  "key25": "WDuigYvYer8ZRNG7azpSGQhsyHScDKSJQJiWUwhbMYezpUhjmVKQAuxHP1pawNLafW2xa1ryT436U3x5HrF4T8e",
  "key26": "3f43kYKwzppWrkp5rUs3Dtec22YgXiLcdJgqoaEKZaHfiP9QH3eBG1MXRLbuqjPCpquyTV5Xh4kEqg3tgUmu4aS4",
  "key27": "5jCVMUpTbkTUyPFdFZDAQCY49q9PyXPDBfpexKGQKkf743ZbggQScA2PUZ94vfNhaTpH7aYLHu5JRtcgCBsbgFXU",
  "key28": "3Qt5xeASfWvq7hVjY9gdUnWF6hQgrGrrd1ep58dLENEMuhKp1wHFG7wXXTCSe6pCLgVHZT2adEmVWHXxn3Ykx3Qu",
  "key29": "2DaXiS41PzMiAfe8bX3ZXa7b4S9dYwRikR5Bg3PWgv7dqSHMsgQtwyKj2e69kmTTQ1PJ3ZYtTCzfKtHa33Q144qR",
  "key30": "5RzvVZkusggKHYFZfwEFS7tzHB7kciWkwBCeHESkwyzqKVyfHg2wKQpbbFAXzr8ciAYR5TuumbM5rG72TS2gmXQZ",
  "key31": "ih72DN191FAjNnehKZAf1kcpn6XY9jJ5p2DdWpPFpMtUS8125Jgi5opz2RYPfv86ZT47n5kypvW2DwZT4ENthnM",
  "key32": "2t6os6ALHixnGBbLDr7iW8sAjiPDaU9P6PZg9q4eRboQ19KzWB4Ro44r6KYq7JeZXkSxUnYoHzDBQUGB9V21wK4X",
  "key33": "2wvdGtg5SHSHeoZXpBJt8nFDcMt7BbFd4NgUKWEgTNjEj1Tm9rgH6EiBykfw9uBqcBq33NYuQcPfQFj2xjMzQTNC",
  "key34": "2qFAGLQHayWJkkdYpkEQdi79B1vjeaN1bRfA3sHz2wpTVFbp52QrgggoJGt1zmKThPLBvGkvsiYZrb7pRKDfpq2r",
  "key35": "5Y2fS5GvLdPJEupGoBQJgsQJA3S2cWcXeqE2FSoFhoqnVT6rCVcCWWeQtetQ2H9YqkTi4vDkxKFKUqjPEdg6rVb",
  "key36": "2ciLieFxzaNoDtjJj9sDHbjX9RjkPS1yanuDXUEb1dMBaB9KXF61Y3AB8ze1WYy1K7z9hgrfYtD4sKhnroSKK5Fw"
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
