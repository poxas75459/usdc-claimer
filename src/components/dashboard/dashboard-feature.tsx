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
    "49WEonpofrtwXqypsDjDB35M6QrVkAYYjMzbkeVUZDyaDPDi5AXTccovKzniCyMjRP46bLzg9JrvDvAYbppmhAZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnsfruYXykyf1XgSmoojw5vQf9i262PmeZssexWEvuf81Up9kA5HMJsBfvMTa8K3HHo7ekRaQpKdSxFEhFKhRQp",
  "key1": "35As7MGFE4eoNEVtXiqvz88r7XPK63DDpQCt88LfcgR9Ubm9njkWb2SwyCspuyHT8diktcurrV9Egnfb6dDnGgED",
  "key2": "39sWxabY6ADEWXLA9vfs8AULNKJ5JHwKFpGgNVxanG3RyMiC7kq2BAtWHJuorSoypgfSevgcMskWdbyCPb3mzeyn",
  "key3": "42K1xq1e6Gn3VsHVbq8UYBdNeP7yB2tQCpGZ2opxvWyktQgnNrRiu1aKN5H6kmNYevMBk4asUSVLkgw2DCUjyw7y",
  "key4": "cr6JoWAEKvV7pVip3KVKNaTGfH3jWYxQiuVs6N8FkE7tf35fQQbyoxasvzbJCqDUmJ4aesrLbq5oj29Xdc9jBYv",
  "key5": "3KPWRdqgXt9pE8WrA58jLyqVRqRe9rUFX351SCmf5eKgKhCK97XzU1STUD44EpbRhfcZup1LeGvUAdYfDrTyqid4",
  "key6": "5zm4btkSmeooRC7z4oAS3xdarpZWwXGQGKbupFq4hoZmSEA59dvTGvNDARkPXyKUbiuDySTxZZeSTfBCTgaCW8FW",
  "key7": "3yaFN58JJfk1Z81XCTtNrqzTidnSsz4BKSUjZAFqcVQJrSJuAU1wXJMGsPhEaPnVm9FL1MNLWyu9dVV4B9B7zMEP",
  "key8": "2gFveTEKg1ConE2AgK9qzvxL6jdntUXUerTUEnsfd6fj2cF2AcJ88PJTd33Gb5zqmGJieFLAbg8QrCNQySG6NCTy",
  "key9": "5thZsyjnqVaYGDi2Nfw9yX5YqHLzRwFD6XonRhqS568THoVxkifw68FPiy7HBYSmKk1zxC9QT6Dz1L4V8KHo4sNM",
  "key10": "5NVQNs2ZqQPwvbuuTidT1ot8KjvwZPDtiYrgTBNC2fqagdLpVTKp3LnjMCQom2G3AaUcQY8RobpQsuwps4FQWogB",
  "key11": "5khfxJ6et56oKwnmKeTuncTmfGWBD15ASdeKErSDLxLMVM23mk86h8dHGF1oU4A2FobvdxsTXwrrXvuyz3RdS2ss",
  "key12": "5JXBhwdwMwrHfvECQBcaDcDdztvSFQd8i5f8Wm24yYqcQjzXY8oZBkHdRrfMFCZnTEoo9ZCa9ZbW5vmTg3N7KT57",
  "key13": "41j66Yw1EeryAhoXkfXbotEAoZhV1qWJTC76dQvbc2ATyxjwrdiRwqKviXscq23dyx2QmS33UWnmUnptYXTPxLL9",
  "key14": "29JKNsVNpYv3RLeaTmAdRAHnttmbb5fJ3D7Hv3V2pmFa8rkAYLyugyT2bv8Qt4uPTdSQmjJCuC35iZ1VzBpULK7Q",
  "key15": "yGFmY8U27BrZSYDPKoKMQfjpXXLPC8cLtq83WJT1ibTK7jXNHCdzM3NPi2oLhcc2ypp5G2L5Mn71HaExAwRzFKb",
  "key16": "3W8oyxspcgULgh8ucnr4U1xWADs6m8CpvrQxh53EHHvuvBzQh9xp7fHBmEjn1W7fRxa9S5Jkntf7PHhqqhiTRPvx",
  "key17": "4LQigSeAPWFUgoyqH3k257QHa4cHi9qEnZjNaF71iqXodK9UafPoeJxw9koahdyTup9fwo2y3u3QvKJ5xT2cyypM",
  "key18": "4wN5Cyi2ZyFMabA2eLv8ZUKQ83MLSCfkNy6wR5FCoFmnzxAFiQqWNQiKSzsWzzdYHX2Q6ejmYZ9iS1DNxinHegM3",
  "key19": "2hSuzRHeGEg9qMGumJxenD9XxVjeXUigAXK4am8mD7QH4sp4T87kYez7N4JA31dYNHWNUhEPX8DMoqrS1m2YYJE2",
  "key20": "3D3UtGQkhuBpZ5FXZLX94Sd5X5EWCZQ86LMzfYzVBdBLvHFcwLmg1WzKMtNvxERq2iTkHv999Wp9NqEJgp55Gwkw",
  "key21": "4SvrjVGC2oZpWef4w3mb7UYmHZ5VLNaVeVrUF3ziiccoWhpFvsvCWg28xBY64uz9egeZiutgDiEpr8bcbphSnW2k",
  "key22": "27ppLHTn7CoS29gZDFLXYtjAtpjidePafMuxxv2u869c9xBq4AEjhZyvhyTaNNNRtspgpfEBVr6q6C1NgxM2NqyA",
  "key23": "5k3WbK8Cb96s6m6F2D7A58Mbq1ZP5HhDoVZnWFCusFftnjMnNuTcJnqCnJMrxeP6Z8YWKX9khSSeK3uDyetMDGRr",
  "key24": "rFp4Sq4SNhuw42RZx6HJhkDFnMYbGkxN48jePhCav5j9Z8cUASaTCTNnURv4SuExuzx5zS5KHtzpxzU2D1ceZHW",
  "key25": "4FjYPvdghrUmFBkTdCfMKD46sp7P6ZP3aNrSuuiDvQzwCLLYQqjnwJqyLJpNYQahXWdiLJRrfyQ4XG4qLRSz8Zhx",
  "key26": "3fnpZadFnrensLnCVNQ3XV1RSMM1x7fwq9Z78sQW2zr89EdXHYZNhBdCKTZUNQaozdYvZrwwHLAt3tbNcd5Nx2qX",
  "key27": "4ZCTn52uaBboifxDqe3Rvn72Pt2jC8jNXYUiHZFJuNL5SjEpk2bSBAqpPJCmU6rJ4pZJWXKoU7fn2Muz7zUsuXWo",
  "key28": "35d26HVLHfqnCfjiLK6nNNvbRzLnQPwFX1Ch8TFqFqgRDftACtb7jWNzawptjoUxB9BQaHo5zYsnipmxBkUw3N4m",
  "key29": "3ZxpRXTfWask8yt9qfvVSUqQhs1MmrEEuA4KG7FcuXpaYfcyxYFV3BNzjRrQ1Czofru1gyDjoiA5p7TiD1aLcAoJ",
  "key30": "2PmanKvyXLBq5MdSocZ8qewMYgdZHGg3RMh57hHmpGfLpUGoVopd9uDcBecX6Zdqj6PJyfsuJ9PyU4EYJXfmBjif",
  "key31": "CKJCGcBfrjqdr3NLHtWa7VrWkMSmsB9QLk4MqTT5WcxhQWmJjQUEvwLkjAGdkaiduTWBzD1eumHL7ecDTMUkUtP",
  "key32": "2D5DG3WKqCkKFtvMoi7QT18byYYc2hK8cPtc2U7osv1G79MgVtB8H1tya3qkKfMHiXJTasjURRZrV5jzqeW7LtnA",
  "key33": "5PQiTrgrbSLkDMYWn4DyMPJRb7MEoNyYDrhQAJe1WoKHqHF1gN4T7SCGkaZcyVj8yxYvsXuUWMtCGWzoPADcqB3J",
  "key34": "5t86QzBY475k8mD9AeaV1XCcyJMZJ11EVC7MH5urt3isYkzUNbDAkip2cZU4CJkoUiMBMNGQ9UBcQb9VbUaaNfHP",
  "key35": "99vMDCTy9NnE13UBCjiJXXMisU9DT723CVD16jAEHLJHzQR2RiMTjEFwx4L6usPGbdbBmH6MfxteYECkJi8Dzbu",
  "key36": "62b7uznpBDrCrvrftG7UYWA3BWw4GWVbRKbvz9PA4hwVxVJWR2nP6ofVKag5bknXQkXJFRCDuNBWJzyYNF44XAqk",
  "key37": "MjcLbuk3W5aPiAuKGDpFqEzw3QKDzDTkxB9voHCAVv4ZAftk9XRioCvZ5bTLZ5x74xrdLdD7F2VAdJoqs7ND7vc",
  "key38": "63Uq19UtbpRJ5xQHDnwk5GZMAAriyj7jbF2fsJkdJqKrSUjF9HH85d1AeJL55dCvqUR9oCwywkDsQPj1J1zX7BDu",
  "key39": "3tBbnVZ7X11wSo8TJnms2TicwXo5JtoGXyvNobdFN1b8rdWG9SYqFZ5G8f5CdtBoJ8VnQbv4aD42yvztMon7yAkG",
  "key40": "timsw4rsFd6JfSt19pmAHJfJiHnPKUtr9Y95sRM7YzXMzJAoqaaKRnsAEYSxeoDXYujLH4aH8sE9jwFMCyuZtLQ",
  "key41": "5hdGbEL6Cp9bzpPBeYiUL7oXZ1gt6fkBZrpicBzK71mikdYxsi3WfcW47ayoAVJcVWuixtz8zrX5i2shPNcJ4KPC",
  "key42": "UNLsAKPc3ui9cCqXvKPrwzfju3vinxGZntdZo5sxdWpCDyKPwwHwC9iEB4TMYvWM1UMKy232ZjfpbP3AiSg36MS",
  "key43": "2vxH8XdevqPRmTznvNjhKDmF5dv7GhqYVvwNshgoosinxjuMjEPMufRRKWg48Rf963ZwEnczfhJC1soUQ1ga6bV3",
  "key44": "RzUsFHbLMEmugML2PURPCmE1BoxKgB2LN9PJHjAzwYHWWCmtwGi8x23io8LWt1Dy1SfakLxZ7Vpexbnqpfu7ACY",
  "key45": "zfjyVfWRRtdLfTMHCvJQivmXGXfgKu4jrDhxxP3Ft9k9i1xGZM3fYf2fx1ti1N1qSPvy6sNjm18z5osqL976tA5",
  "key46": "34qSebqf814fQs8RUxSLcdgsSEL14DpvYxAvsZa7a93eVXJPjWksr1n16QLEsCSkvFnykykoDiyKXvZpmZTBs9Dh",
  "key47": "64Pw9EscHFjLUBXbJEoa4KiLMKcFt857vmpDvivGYaETh24o2WcdPwk8EBKC3RbZDyjbVNSakWPBMroaoWZeDVUM",
  "key48": "v1WwSgEetCw5n65AkuLCXfobNHpH7fDTL3g2Nr5AfDbPxbNzW52Xrxm2CMSrTmemSfAAKKeLdAEDiEzNR8Avd6d",
  "key49": "5DpgbXHL1AyM1fToF5jKZMyAqkWZ7Pyp6Gv2wEiBSyV5a5qDH56To5BwY1E6qQ1AEhXHg54MNEamLFYmGokcWiuY"
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
