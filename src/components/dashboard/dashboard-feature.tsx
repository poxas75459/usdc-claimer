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
    "5GKhdy23UmKjBSpr2Q4mjauYw3YGAzrRJ6w2UP1xboQMqg6gdcz69xnd8uxVuShKg4tQX5jMH2tdv2QrdETKnwgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PgzczbC1s8LbMEuKCodLe5A68CJqGyy192xzZZ42DVU1nABEp1kNQDnYJkVQ2kQHat3qMMP2icDhmokqJYpPWAR",
  "key1": "QkdmgLdy6SuxPDRUAZMKs41smwvXxVxaMErZrkVsphgts51q4zdZpbrAqwWko3KhQ7C2TnzUsZ94wZpMoxxiA5F",
  "key2": "HjeAi9RuxDwkFpUx3fHTT1oWjKHgZ49BJkFLiNG13uh2geSedfJqmrxkjEB6DdvoS4ohh4MrfKFvSr6hBC17JYa",
  "key3": "JPfdSRThAKLGYcRwz6wtDGjYneAnHoTp9EjBGt3whnWv1ZtfbFcNuyzNHub7XoBys56FxncEU3AxmrbdWfD8sKp",
  "key4": "2T8JGTfenh8N6e2wtnJzvFWSSJmX6QZDTa4TeBfDTxs8CUkw6sJtn1kUL2NamzaeEGmwp4nLwJMjZr4SLiirgnn7",
  "key5": "MjCUgExPs8NKDXwsGbmLrBpnvgMnvDHkXPqFftBAS7ZwrvZJvYBEnsxVrQ4qfyPQ7hUoaJ8t6J7xuiWx4nXQLVk",
  "key6": "A6FTSdbVxJsJezVDEKBgtnozQTeqVr6JV8HHXeYDfimqWNB8cXTmdhN1L8GxPCWssKTmVj4jtrLLnMZ6FwJvbcb",
  "key7": "5bBSW5d3FoxEUfr2APLd9ALTMxeRj2KEabQQy6pkPqNWmTZaW39Q44njAdvxRJTBGYbh1WL8smczK2yzLGJ8a7LF",
  "key8": "2HXAGWSFMerv9pUvsVrBkMiZaWYfiXQ35U8ZjwxJy8rid3uchiC7wKT5dcR7d5EkJEhrvqmKSY4BzXdDe2MspkFk",
  "key9": "5TcUyAvrGqyZddhn2V3BKZEotJsjDktG5VUMga3R17bnnujnGrQKuqoy2QF5oJMNJ2Csn9pRqa7g1SE2biYJMz7e",
  "key10": "27cPJ6ZXGkphAYUMn7Z8AKbFM5xPtSuUpcFoJ4Ux2Rj2cJbVDpak9Wi7DGyafMZqVjTDYzrYoBcivvLpQDCA6kan",
  "key11": "5aXVsStgZuAJMLf93Q75Gb3YaNuh3rTJ1h3A2NMmdxGFFRZKcp1n5D9gYpDSUjfsVehiNG5EqkmTMJuDwtYXJxGt",
  "key12": "4pB7iBnDBGgv66L2ZDZR34mUdczRNeV2JMkmBRqWkbsWS9MdngdLYCx5sYeMmE3EYPKDPmagfnd3ybKToKppPeJa",
  "key13": "2J7JCm1q8s6rQ8kgsyWNV3VA44iLoUEzGe7Hh8RyJDHpmkmmg9J1Mrb83RtTGR4tkPeo9kWGY5bpunJB2PALxjdy",
  "key14": "2wNUeXvXUmZ8A8S5KzFGmEza989T9KHwSG4E7zLT4oMfMJwaiioAiNCatyrjToKh5vezgMKgTqVJcJQgngkEfMN7",
  "key15": "4i2424DX19rZ9N3Yj2TsGqFwb1wZqfC2B1fkZCh3Gvd5momVQpPZe7EUonGTEDAhpPD9k6hfjAprDUWvfE3meoXM",
  "key16": "2MwYLLcVcs3NiWtZ7kYRjbr5fPWJTmEXPPD3dmeNSD6oPEfSi6FiFXaEXJTDbkp45VhLPx5WppfdjKDQQAWAAzFB",
  "key17": "X1SNjh5bfMGU8UR9cfKFE9yC3nWyMPSQ6qEpL5DruZHdGEcPUZqtKvY5MDdQs8oT6hwGRe9pmeMpF4LPmUcot4o",
  "key18": "2hdsiACo6MuHGnaFDfkXjNCybFKFdqowi6TBM65Dus268NKQZv2J8M65thjvio4sWoLbRjqZWzsVKBD3X9N2qCpp",
  "key19": "3Gh3A8JbrF9esWBYdpJHa48o6W3vJ2dYHx58YMVz2DCxxWjPv8wDLsGosGzYxRpSnDR2HD8fTQR9Wjj3VR9LGMgY",
  "key20": "2KnszAb1SwX2zva7JiQ8GP6KvRbNKb4QK18iVcta8BiEsUGBTQ1MDbmtMTD2rLQcgWDohcS9YsbzuAAJte4GLDp4",
  "key21": "2YVeVuiQsU8ztsWkaSGCXBvt3wWtDXjMzFekg2TjvprZH21xS4md9et8ePkugPUQacqm2LvUtpjd25StcPeww9ae",
  "key22": "32Zuyr4z9pKjUHFJpZ3LKiZzrAsLtZ4zV6pPerQoWT7kNedo6KokBzLG3ZiZnnuQHB27JwUfcETN9fVDLVT7v2jc",
  "key23": "447CX2HyxXpvehk78UAwnm6bBt55XZhmooZjo5pCEB3eR2ZpnY86BhZH2zJ6J4tdLtANvfTSPvV4SdGTUuFfz2g9",
  "key24": "5gWERSxEPzWC2ynHvzZ2kxd3GdNCjQy42GRJwTivETKiA4sJpu75ECvCupZ9Ydv9SKAcpFB1SEZnQVJ8o4i4K6Dz",
  "key25": "3WBb5fVxSkB1HAjTsyrasbfZ9XzCNMbkWucZk7t23Du8pmwyyE63AxjtSC2xaJp4K1yRHjbErjNzcab7eSZS3byM",
  "key26": "5rUYjMcAT3LNTFdFMhaxRccGiX3wjoknhN6rZcpvDhdjjzTvhLPBsddJMjL2ceDCQNcGc5gWHNKxxL93A8R6ZzkW",
  "key27": "vWqUM5iJMxX8zLmtN1PR7fsw5n7Fuy75LUUrC8LAKc8vvE96EmjvxTYA6NCmEQvpQ7BpV2XMiJyAWTMhFxxn1SV",
  "key28": "2f75C55f9ZnQUGb4dMj7C3vymobW7BWzV3tLFbPosbLfLrr1JGXdGnjjmBXLuZnkxLvgzVVMppifa3uuHaxfesC8",
  "key29": "3SVka9qAqMrwBPMEJJ6RzR5Lg2STHo7mwYiqbTLR3UMPwXac3uvmgtHjbTim4sajJ4AW2on8MnDYtYPJJXcQy5hw",
  "key30": "ouSPotDDSkhhbjQ3JyAFvuLgvQnqCcaqjLqxpvXWZBUfm2WDBMUQ6JctHMLfsbpB7gGtqN5D2DWxd2UzNyz16mw",
  "key31": "5j2kWxSFfh57HUkCVe8V3ZnqPyfsHipPpu265JjL9ncPgBZoXobzU47ikukdpYZCDY4Z8rcimBXG7FACeYPLzzVK",
  "key32": "zN1pVGnm62aaVYhJdZNADrFdbVGDguEFBKLVivVhqEXFxpcxAXh2C2gpNtendjQ23omN8x5YHiQoRZD2cZgqcTT",
  "key33": "3ABQv35apgnHLTCswsHHLDsrezkF8AZsGkKmb6rCet9AhvbXfXqp1kmWwWTsR6fPg8ABmUGKwVQZgMQPtzhyWAkg",
  "key34": "26G36p3ST7kvZz3QQpS84TZHeVC3GiZZ8LokMXEB2HMRrAgaHFf7VzqYbdMMUHWjGH3jty7MgpnqEjDYfX4YHNsH",
  "key35": "V315FgfGk1CXKaVUwh7rZsiCnht1suRL9mGqysAyfsAd8PPuevEs9Etkd7V4Tk2P2bG5jSCDXzqPzBrjPZ3vxM7",
  "key36": "4FjvDaSqHkDCPvZbGpUeGGzWA8ZLFQxzYWYqo6DEq5Ba29K73ZhBJA6kRgx8d3TyHuYPUDmnYnSUobyxbkUQnwRs",
  "key37": "k81m3tiVaovDu66HkUr2CmZPGAHGTKJ6kZSxkRDfyudR5MBcRg9ECYHPuy8BEeCauuGnBzmY56Z8XwjwQEFdKHD",
  "key38": "4Hd1EJUuRvPtSwGzZnGR2ZJwyo8BNsk43JDoLqtWGaATEC3955M3EyxCgFii8i5Xf3tF2X8LUEsZUKHk6MgAHQZ1",
  "key39": "5qNuEvTAEJNwxUGpQJMMrHGd6CSb5dyrjxwxyjzeYGDhaxSUozr6XgLj2NeFcTQosxeSzzvEXUgJERtD25Hs5eBR",
  "key40": "2F3AdqP2TH5PJSrvtAiu2YX3SpBTK9GxaEi6FoPJBHhLxNLHGAV1PsLxxFvyGnUGHaXuuBxy6akSALXB2Tbkxnju",
  "key41": "2dtRRrzMRYzDiYQnNrXHSeJa9o9ZLgYWaR1GYvNBF7KWnqYaTKf8pSpDj5aW5AJdpQzs9rDQaEnpfEeYDi73jLw",
  "key42": "4h6dXerSb8xfWST5zjABt8AuZHNz5aUFqdiGUDe8gc4bJ27nfk6D2AyAGypMLLUm1pPkDyBsmNnBSTZ5iDgQHder",
  "key43": "ZXbbbGsymAuxxSArdnH1Hz2JVGiqz7rSgSx51AtbzZE5aZmq7oAEY1q52cwC8fQALy2uT1fGi84DETmRdv7CEpz",
  "key44": "2CJLorDyMX4AYhGD4SdKFru4sgFwdhoGQD8Bp2ByfiDH37xYrhYxVphaeYkCHSiAdyksUSS3RoMjN7AjvZLBijYe",
  "key45": "5A1A2Yoaj6BsArMR7eYrnh1gSTgdNbYm2uLa65DNigj32wS1cYmEBzuyQyUXe2TsWQkQiDByv35UQbVEsgBueQCx",
  "key46": "4yaJHifx5fJgMMNfQN9huwiwRJE5TjoGP67c1JDbTZBAU3RziXzE2cr7r7imWPsN5F1VXGdU19F5aUnDj9aiAmJV",
  "key47": "3tpvss6H5uZgKCcPJbgvAkQwZvRStc414TvKMgDkP2srfa3n8kWyDy8yRj3rigFMdcxobeQVCW1hY46pV1diuEAg",
  "key48": "3cv2xaC7ULw2hiynvZjqCAgmDvqoHbn6DLwGoGajLTvM3bA1zN4pRUmx1t5yCcJzWs852bgiVHctZiaW15n6VZGB",
  "key49": "51sAsMEiHZbaSqUxCy5kTzwLMbBSocTrsUDd1hghDKbp5f5QiDhuHAhq32RsnTeKXEK57HLbPrGkYzBCxzBXXcK7"
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
