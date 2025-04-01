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
    "4YQdr5CG8b6cadPnzYERAHXVtDA7MZj36WKLh43NqF99NWco2tEKjfiUm9CnmxLsG763FNm7HF4MPDRYJMR5bwbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mr477uwvyYZXfo1EWzxZkfVgmMmkMFfexV8dztvpD46sc2GaegdgYZRDTMT8dk7uQcP4rWKXhxdtCpimfBDMnPo",
  "key1": "4Q2C4pasbuQqKDU6TvUCjheXdUMq5FP9MqbuoQrDy6ezZhwPaQPUzrxoW81afTpvAKRSqELsy4hLUTLkf2MF5oPL",
  "key2": "2xC6jGDi1DrzGNdEVV42oBkJeCMnG4zHuhJKdLZajYD1eVPUGhdkbNWwHeAvwyA71kQn9mxZyPr2fZAxM3UPmoq7",
  "key3": "58QLGM5XyqdUVBCaxbt2qDoS45yjJCN2WYxvmR4pvyuV5hoojF2dSkAd4PUEF1Eo6AEv54AQM14w8Z8JGWbNCZUR",
  "key4": "jKrrkvZLhigs2nqHHtfCfHbLsQUaXKq1JUPNW6do9ayN2sx5EN7ds6kic43yKSf8JEhbb8UD5kibPvj5qYhCFdp",
  "key5": "2RseHxJejz6kaTSowXmypJMEtAXxdzwqjpP2VcQj1D21jHbdFyFHR5GoCcGcM8nQk6m96Af5bSzuDHR5a6vPD1Si",
  "key6": "53kZzXP6s8b8gCujMF6eUrZDfQsT81YgSkmNGHSaXbREYddDUa8uNqVGF2KY225PsUXEKo7EFwVashW96KEGvM9W",
  "key7": "3esDD3FuUB2wqHb2EeMVxAeWXxLwc1yDU6cK5UUZ6fsMEAmFVPPd5KPh5diSUEez1Xp2ee5iQfZVobKcknMgx56P",
  "key8": "3FHNBw6Ydm84TbTvDHhZX9T7qsyuHrFmTrJXZvBJo6DvhVAis1wWzzP3WFT74rMurTogXqUp7eNeqnczCyMbVqAB",
  "key9": "XRaiRtjBK2KtXrBD8z9LE4dRLUibRJ72ZyWJh1KnaXbb94C7VAwjSiRu2QTvp7UGQghxjrUzQQTFStG7DuUecsG",
  "key10": "3JnSXZGqma2PCbQTnJuV2khDah28CH8W567KvZpQYwCy5D6kv2c6HBLN6xTjjEBKafUS7Jj7wr7nwsRHC3VFTBWG",
  "key11": "4MP8WTscZHptR1VXrJrnZYvSzaHzUr7oyydBg7E8M61BEL8zP6FcCZbbacZ4pRcX2imi1xxVU8DCNgtpbgNTKiBZ",
  "key12": "5jZxN6YPmwifKBpjt1guJ8yHWy499G7k2qXzSHXGWmV7QYH4YJKHjZ9k1uNGkC4TK4odpteWds9BmNmQ6QEHGanx",
  "key13": "3uNJcysVwCmkudxA1sRw6EKBeHTGDnzZS3Z5MHmJTW1fdCsjRQJ1dXR1imbxnCirW2xmaXWGeFmDjVuyZKCgCCqN",
  "key14": "5TQHgtnriHt4KTmEoE3i13ygrjRr3XdwuesdC4oMXPgNHEVocctX3RihdX3txdGzsk65DJZy5pjJPwDtuUze5DRQ",
  "key15": "3a8vnZkVxyogMXz7gw8ZNSyj8JyBsQpEgYZDza96cZu72yQasJTmk8NTTveyrhqv2aAvwqzaKBubSAoJuPDzYNpQ",
  "key16": "2LEToURoXWYnMUZoedRjxdVEKpMsjHsLMVACdBncVxTf6Tn6LhqCgMZzAh5rmU4K5isPz5tbF6AzmiJZDJdCBq26",
  "key17": "31XPQrY8LBRNhLfwqYswyiH6GmXazWfNa5BBNc6ioeZN5U4dy5Bsw3EPAK9gdLAArh1oewTQaSiwMGvyGDcu9Thc",
  "key18": "5X8FJuSnuNyfEqmRbSNz886ZVa5KeQ4iuiR8x5qjU7hdQB7DrYyLyFT2qSRReVXVxE9Dqestj8vPWPU46VS6X7sL",
  "key19": "3YKiHuwKDjvTWjkKyS6HHe56usNJ4nCh8y965n5vqkUXSTTWXWEkXkELkYDkpsnKe7PeM8UejTKLxwGxnt5jgVGx",
  "key20": "4knACffHjiMAAtRmhVntFReA2PmUcFC5aGqrJzGK5ZQy2un7g7CZhNvJdxWVSdFYuXMLKbYduVLDri3SwDU4CAF6",
  "key21": "3ahQoKjWTLdjKHTWNHaAZMsic8rfarGeiQnBqQ1mDYgqeXHd17KZzzkCWgmco4ZygZC4xw4pPTsKeqnRoGiKwaPY",
  "key22": "2sM8cJu78MELaUjTUNUPz992QBgLi87g2FkKbrrRAMkYDVmtvT5wE3cWrQeK7GicW6fNjURcrM8cQa8annqZcFZG",
  "key23": "27E67wDHjHoYZMtdPV5apY5EUV58GmTLdmD2B6aAwrYCgthGpgndHzdiZKe3jwudQCJjP3wKZVLNET5MkZ6xwEaC",
  "key24": "4PPmjDPxHYeo2mQgTLBChib3thJvgQu45CJrHSiisK6VFRwEspZ1UhKBLwzK3sPVhV6GMWp5GW1wX7RbM5Ga7aEr",
  "key25": "42YcPtY1wMyDehXyCj1589xXGVuDGeVMesReGQSFDYB7UG5ZTd7XVMNWHL6cy9zzu3egUVEBoiMqrLuXJQxFi2nw",
  "key26": "4BqwB6Gfyrg6txZQKuKQyBq6NFCqqZqfRqLPaT4KN8EQtapDyMKUNaaiKDafZTAE9o2hJPDXX8Up17tBJJMfPMPE",
  "key27": "zSW3M7i5PGijcAfnWDWuLsxNWACZhajHdFeGzjHbfwur1EESHzuntjVWLqf6Xd8GE5tapfXoPaCntJw1Tn3n8tX",
  "key28": "5xYfSZu9zCgjKHHgg88ZE5Rn9M8M5RbZhBabbeYCLx8pi8ZfYDZS2279UynBRAYAjB7YGxNDWkfG2SUEJid4U2LB",
  "key29": "2stdvvuJR3WkyTeaiLkzVSyiknq6MBEwKgcy7ynA9VEzc3z7dnu9rY2GwEQ1ef47k2MVV5SWX4Zf1eh17PxbFQXL",
  "key30": "2RPmb51qB8fUJgKrH2YmMadFbHVNZ3ib7N6jPw3aae8xsX9WkgQM7Pn3ceAkThcGh1ZWzTxo1iLw2WDCqVedMAwn",
  "key31": "XzPpLduGtz5X6Q2LmbFd7QHzKtQL8mbwVENhgBypPH8kK5fa7bWqvvMoWeZ6JRza28bAUXeUbF2AF9QgUCxsxCa",
  "key32": "xzJ12UHoPboqVZy14Yn2hnjaq77fJ5tZREeDksoZ3gjiHLZPhQ1r7AZUiDKb8aQ8ixqTuVdRBiqDYR3eXa4QX2J",
  "key33": "45M3UjCNFcscPvywAEfeDXUvzmReFD6dv7LuhZMthYodX8EeJn52PxWfHKcXuU3r9N8HG7Zq5CRuQSNc5FcU4oV8",
  "key34": "3zji7tmfrR5Pmt9MPPHToRZdEEGCVN83HxcRBD2NMVCjd7f2XHVCqi5vYYiBPcEt4WCpzJNKWDHzBHjYhgvm5y14",
  "key35": "4sDnCcEzPYs8wBK4dg5KnSwcrQ5P5YNHSecQXS9W35Co439VsMQuyAtdN32vYTz6FVJR7Skbp2SQMsuDwgsBUxgs",
  "key36": "34YmQNmJQRkdAxUDkKqFvGnN459qgTmduDN8DSuVjSQgGSYGHojRf2m31NK861pKb3MyfsDxQUegUdZtvAUWUHLa",
  "key37": "2qzmav4cosvaDt86BTsyVqeaCNxiutZhBvXHf2bALMtBvRvtZQvSn8Hr5ruP9ybwRBQ2npxySM9ATnqLHwHHKRCi",
  "key38": "4q4FEcsB2cFVGHfZKfabCosXMxTyxmajLQW3Ux3xoWZMUaRiR1kiCUsheZmy4QK29QE8fmogEMcdZtebu3bqN4d8",
  "key39": "3wiEGKg9BXDpxxhU62AHdfqU6UveX8o7y83Teby5MXGJ7EbAfB21hsbFv8fcCPAC8LA8nvRikuY1NLdpR7a4MuxU",
  "key40": "3GyDT4Sy6eDpqs8pcb1ygCbKFUPhU9pLncoXTX8AY2XZirHGjd8XRZk6kJR4AtPkbhXyQpSBccAbEKesz816jD8Q",
  "key41": "3GfXdePjNjvwm7Ua6CmbtR7SFdbW1LHpmB1z3ppphRFNt65xZd6NnpMmVfnpQq1i2Bde7gp9DvYsMnBGTNjavBXo",
  "key42": "ycAVjQZUZPVt7frqB1MDUNw8THwVNcWfAFbZve7WLp6Fr4o7zvZp8JL5GpySDeX6BjXXtPPMkzgfe3jeo1cfiC2",
  "key43": "48ps2F1z65BsCrMdJkJKdK8md6R1i3TPe1xZ5KUwcKcNrPJtawE3VRkUD3baaYkLp2ZMUZ6a2UDsmWakY5jD5NJo",
  "key44": "xnKiEcC1pCXeeT8VFfqGa3wCoVqUpftrbq7dCGMXS9fzNcHRXq6qgL7a3qAfkJPpF2RjRgVFSsCFMqnf8gxE1gK",
  "key45": "35pzBKKwB9FJdHyeJRNSdUV3uvskKGG1dnCtmB211xrviKwnhkjzWUo9gq2DeikLP2rBahwM8Kjh793tq31LEZi8",
  "key46": "62Sx524S33Ggx422aZ5VjHwJKUZiCTEAXq13uZ4sxoW4t2deUkgSdvLmfnXJFF6EBKsQX1K4JH74v5aPCQwUZi1c",
  "key47": "4GDGNNG3EHqmxdmtUPXAPUEq9VTXu2e9auhjsNFDmnJBdViELgXCc8DNW1fpuuHeQaUqxAzmoBfN3tjWFyFhZWfC",
  "key48": "3QWVF2kJCJPjdbyfou7g8ezWYEc3zT57fy2cEPKKwEbZrZAnBeLMmJGYGjjr1iND2Wt8gSh9EVu93CQVgdrJfq4v",
  "key49": "36dQcBxVJbPAi7191tRJe6Zh7uej3LaJBjLW8HmzQjnhm4YqPRTAgLVq41Zrdn53MHhGDY8DXWDjwt1bx8J4d5Lx"
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
