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
    "2Tbf4ZawpcmYH5J33JXS48enba862q3saBBZYUF444WfAZA2FHDQZCkm6TXGGKmQ7QFUxvdbKquDW5Rn2ox8yGJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "443uvxpm9GPsXbc2KxWycQrP5e1jPZncz7bVWtXSuW4rk7xJGyBZyFLhFTMDSt5LyCXM3Qz6wNX4pNdSQ6SjMrmE",
  "key1": "2ro1HSptAW87gPFD6jR3sHYJqQ6taGergyMG71HM6a8vqPghpiyyCmC8yYtYguvmk71bcYCcyTHmcPrLQPRDabAa",
  "key2": "5Q7SiqbxrYg2VqiVoe6WHx3esBaQBJLkPFD9tBJ9SMtv5VJT4HCjZ2qJqV5i7MqWnTpLbBEMXKDuAitDEBo1n63f",
  "key3": "5YDVWWKoETa38uJohGTFgghALhe4vknGrNeaFBDk8mFMfwEwa3ifUyYpA1G2bXmZ8MVYPrQX7Zd5GEaJn3HTRJNP",
  "key4": "2oTRdSG8zG83EKEXToRoE3ZZmRZgMkyb8nSFmFtfkuYFpwwvNa9MigWapGgprJVyy4Awkcts3nf1becnfF7cb29j",
  "key5": "4XcP7VJGFSRiigg97zA7As7URip2EdsdNJCeJZtbg13cke9t4AP5W4sJYs3aCiFCceUxD3QaDms8VEz1SV4KY6RT",
  "key6": "m7jRxRc9qFAo5Sa8Pggjr9mZc2csx22FJy79459XDcXhJshuWmoPHP4xwze6DqRUBKwy7ijHpUA32ZxKmXHHfTB",
  "key7": "5gM6BGBESwydXiw8C4nb946NKytMqSX6aMAmbzPUv2RtdB6gjv2WTFfd3YY6d6RsvBRVwfV9owkgyxEQP1b2NS48",
  "key8": "37JXa9Mz8xAPWpTLcaVaUSjyakTep1mATcDYe12CBQDttowRYm4P5ZxWpXB1YyCe5FSM6hUurtjvXea9iD5zPYoz",
  "key9": "mrht7k1xjW6yjukhX9TRAGvauzCysaue1aYgpzg2D9su4byk41kydvVUQax4zRgrrugGkD2x4ECQthYiN4rDtBh",
  "key10": "3pbkAbqXwzyACTqhVPg8CovLDvLrJaG7jDgPvpYvuj2NNi64LbPjhHeMt8x8XaFNc6Mz6nGPj2bnLEXaM55K7eD9",
  "key11": "4Jp4JbS2ftGv8xJUFhAk9WH37BFKq3WHhBBsCNDUxa8a7U2fp3XRHmCLhsLTqx6W9Dj8DnmgMZDmHFPunQtJo87n",
  "key12": "5sb63tpXd4oS9pqFMxmEDKK6rNEunhTtfux3XA49jvWG9VxTMSvqKRZhtJLvoKhEbwGVDBQg5HYCTBZzC9DDd8xN",
  "key13": "4vjrd4x9dbbed8sF5uVy7Jeucu51iGr1h673pn5vJ2KyTybiTVXPpjdzYoYzofdtbcaXz2yVHiJfahTA4FA1ZbKd",
  "key14": "gEX5J1RDqVnt8C9FzkZeUZ48ZfjM7o94TpwAh3i4qsNKP4UtZpVc3fiDg1Z6gXWezP9Ehe7e1JVwGzuLscF56Ca",
  "key15": "86v38NvSuqknAdiZpz4gts5XQK5aJDLkbKpahMnnyDgWzTYfrdKAd2vop2bLcC9fsFvTo1AzMVr5i56R4xfujbV",
  "key16": "3AXxZUKfAPVk6m9qNZZcFca476EkJc8GSskSoYjQirTU6CjEjbsiZokMaSkxc8zviKcJFMuUfdd1YDpGgucyYPiU",
  "key17": "5DnwuxFiJPnZgsHEFuxmpeNPtzW3PbYhb4P2JrZFRkSnUVg62sxGsTSeKss4uTxBUBmQ4Uvrm15DRA2ZR72YfwC7",
  "key18": "NbAj5YhTsg1dYw6FejLjHX8aEanAZi6LFHvrXCWZAN9ojYbnWwXEFRYJRD7C8BpFpW53YuMc6UioaBLxfmdXpDX",
  "key19": "57fDRjS2zQ53jKnFCeZNSvPMhuu1XZCecuAkMz3ytoLMS9zE8oJ2jEmq7pEyWdsxt7KyWwVAv3gkNUneVRKsuR8k",
  "key20": "4kNXgtJdydBLoEjyZijLoAkSdYzFuLM55Z81KmQvyFGL5dRExRsqmqKca8dS27JuAx1gwHwaea4GbZVLpFpPrP5Y",
  "key21": "3eGUDDa7ESaYMAn9ZY4cUBDCEM5q5WdvaJrvEHQD3K8P1BT8cZPc9NiniKcyEwnmvYvmNC1LfAXyFuv3KzHMvwXf",
  "key22": "6bEfeCcm7tUwhKiqHa5HtLKirpDLL6E6FnnEJy6ivwGvudGRAUrYBrXTTzDn3du7uncWzFKkFUNT3bdgHt3iDq5",
  "key23": "3twxho4ur1X6Dd2o8iREmfJgYBPdVb8osWcSrGaYi7zfKd2Bv7LUzAw3MP78XLp92XSbWyFtaiqyJkRu8PZdSEtL",
  "key24": "3ppx1aoi5wRCzPv4agfvwqz6RkFA678eGxQT8baoCanKKviD6rdm1Ruhga8VvdpYrdcU2WtuR4jNniio8e6VdcwC",
  "key25": "5gua49Yxh3oC8Bjn5YU2KNc2E9ovqD3FvrooPyKCJW3XhWSDUAtjKjVxoriaVxD6dvteuJSqGT4DW9hbp63Tu2Ld",
  "key26": "3YWkC1EtLewDoovx7D232ngGg81rmphGi2kxjd6VZoM33rGhjD6x8WzvBizJXLC2Dkr1GeddG26feuqDvMo8zkPq",
  "key27": "2BUoAD94gsdieiTHvxFapqR8FscYTh7Gdu2fnKpWwUcAvZvs2sHcqRtnZDs3y6mjJnxboEvPFBqQ3Dvq2Wthpch9",
  "key28": "3THrwJFq2iFfevnp9CBCY7YGHoDMsprXa2PYjQ69YQoP9NkXKyQmeLzgE84apUWdTbYQEyUvZS6gMWuxhQaJ3Ck1",
  "key29": "2dDb5HpyArf5RAMMr7YEBBBqRq3ThfTa13qx1uwzepEh4gu1MevTVr2GnF1H7pU4UMfV2jUFPJesnKyvPUVwPp9J",
  "key30": "4EqzceabcjCDD6iQoPGzSqBsWQokTmHDUd5jePdTuzvuKbHmhRkMhGu1uuuVGsWBYcXRqp3HAXiRToxhYd4ieWbU",
  "key31": "5XMgQr1KYvDBq2EuMMJQ5J13i9rmHFQC1NTcS2TstESFmJ7zx7Tai7B7rUyM6r2Ti7GEF6ibLwfF64Mstu1GFeh5",
  "key32": "2565r3KxeXzZq7cY48SSQCApypbXF6jkYj19hCg4LSkkbwGoooKc9brmc6Zp15B5A56U1B8bCivx2V4XkwdMcw9A",
  "key33": "3RMk3W8PGDTWTGxnDPCEkXVLeJGLajurKHZnkX4k6L2zQtKf9AY64hS7ikypHApSmCioKQw6xGVwp26UpKFrFMeU",
  "key34": "5k5fi4cwuAGBcUUe8hMmt6LvFRG2wVFzHaz9pwgnNW5idTZcooQX81aXrGT341sSG6rtYSLHZjjVqkW31ns6tkwS",
  "key35": "3xT5K7C6aaLQ7bvo35sZKWo6N1uqr9RUt8HnjS6P17Bg3XZbLMmvsLtPXjLNAmEvx7BjFbxK38mc1ex6MidPzYxN",
  "key36": "3dPY4dK3hR4GA7tfVaKtD3VefdvcJo9o9aqdB69KHhuEaQwRZjzDfcDoBHuMva1Qc4TvrW2K3Ca9iomChNFA1sGt",
  "key37": "5frxqPhT9EkcHgihHv7HTo66BRk5vxegLdXr4HhbCVk4ZrTSvfBeCHadXdQe44YmDdA2DDkh9eEbDzJRNtEuouWU",
  "key38": "5yyeMz6FhkEZ67ULhnyfs95x5LwTeWfttFRjGwaDgHcPxP1zHDytWesyCDGNoJGo2xHeUynxcEqHa1EHB4K4eaHN",
  "key39": "2nMB5M3Mo4ooypAFRC2Az9CbVGboRUPr7kHTcN4V3ECyHbf6ykqAKjnnD2tPZawd5C84iXb6BEc6EDCtDZjwE6dm",
  "key40": "GpEfRkngyv7R9EZVFgLN3Gajbiee3mPGKT2mA3K2tFTWiCod6MHsHMovBtj1qo2ciUMKgyTFDBwm82srJm7zWei",
  "key41": "4KMopkYk6jN3RKY7LcpJPp5DhL3pTpbwnn646SmPP7fnsM8HPRcQfaGxiMvVVmWst1YDVSjzbaQ395xq7inM8wzu",
  "key42": "dbnT1gydxDwexDUiitcA3X6uGcPoxpq73bUZCLG4pJfUaokpxp7dE38HgjFuttdyb8f3Qxwoou8GKTt26GnSJfq",
  "key43": "2bsJ3h6UuGg5E64MABN9nAss52ZUxDLzLnNJD7VP7w4ked1CnYFqqSuy9kbJbtwtFrcbe28NmH1DNj4WhsERtxQD",
  "key44": "oUqMXPF7NKZxWa6wXhfqoy1asg7Jr7tdPCD9q7DUVzhBCfBihsXLuqRFt234cC7osDYdCbqK5CREbxCujHmUJXu"
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
