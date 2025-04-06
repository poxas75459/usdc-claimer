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
    "3z46PtWfEM6P94zBpFsFW9Yd3LYjvGhwqdnL4LnxuBjuWmNZ81d8Sh7F4C3bRCwkc9n8u2DdXVmUHK8wSBsmLNow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBmWz35SdXKKnuHofm7xNQNAp1r2BW236TsrFEswbY2iLisgW8d73r2m73vJmk9PdHkfh1Ttd29dkHFkVnUR46F",
  "key1": "3T3epXfrwhMfDnVJZiTseZTjW51emarrVb3AiKgZaobdVT4gcXhtA2Jbehj5Pgof9xA38bb6TBhZyV9RRuKbwtZu",
  "key2": "52fQUGzBqZYN3V3pGTdTAL9WHiwqxCnaK8zynG7pHk6cb3J5bKTnx1gcZiT6KApr8yTajrrZHkCbkzY1nnjPVDqK",
  "key3": "fTUPgKTqiJVSPKsn6kbZVBQhhPLUTcdGLJcu98tF6CZmbcdUxSxA4oiq8uekmmdAzLc1TPEkQuZMvcWWmYQCjNx",
  "key4": "35RxkRM9xbeNNDvkPxNJvdtyGsAeRxMdWJAnTh8zJ5xNxeEmxzDnPq3jQktEvtK97y34mggfUxpUautCYMXBu1U3",
  "key5": "5ktKvKD2qzTFS8q8f3Bywm67YcDVkVaxfs14VDcQCeT4wGTXtU1zdhqfkutZBmfftRmcstmXjsueTcC3oGPSXkCe",
  "key6": "57hNHaCBc9GRM7w454AZKTitwg2zV7pVaVyQiT4hjHfwknN7t8aK7VVekLBHtqjf5zUTKAv8svkcFo1q3SU2h57C",
  "key7": "4GvUSKCLtYcReBkBgzctAMv4nsM3eQNZbAgAwB9AP4N9FAe4yFRTvongGn1KfLvQ5HpoqPimPozYAnoG9g1vkXqq",
  "key8": "556nSsSgqEVpLGzW4D6DoKHQxn44fmr4atiMBntuei3k7RY3YSJwEAVhnsECfDvRYqiMGbgH6jTUWmupmw4q1WHw",
  "key9": "42j2LjDQcWzrcNRQ5VmAHqEqV4iKEk6HJWZawvhzaAWMGfDYXtmKuBcybPdLAsKzfUHkSf1NbqAiEG8jf3REedZe",
  "key10": "3DNccUs9Wi226dA8NsepnSavDJh7hKTyKNxiVA9PKeUxi5RcFS5e6sQwQTJjMrQ4rJK3SDBnPEyjtEfRRFYsQfxo",
  "key11": "3qMetiyKGADdnut17LLr3qsS2rhnynGPHBkvUGuWRhTcAkfsubtteGZqBuRFTvicxYMiWXGESSERGKhMkxiAZaj4",
  "key12": "3tG9f24dnMXRbbjWdzRESkvAi28CifPQS1pELmbTaJu9j3u7r9F1EWu3Jw6BZYTwq5jZhSVXxxak5E5h3vnMjmJG",
  "key13": "3VEerEp16GaKoArX4zQWfgBZ1m2qD7HLuF9JdPNp7c1QjhhWt8onN44WaKMUtewDRipXHsNk6toRHTPXJZ1qwS5e",
  "key14": "4sUxThGhQCmw3w6UWkoTPDLkdMSg1agCumdcYLwfSPGozKBQFf6FDYyqUTaX1t5YhQQbToVbvk4p7BAbe7d8Ab9Z",
  "key15": "5P4jjNAtQnf5QrLfQPjcREvPQaLkBGRn8qGyiDYEDvmZW2YFGe4TcqekwKW9Rtu8EULhXTvxny59XsN8X39c8bbt",
  "key16": "5kfCiqqRNseXiP1yYEdVNaDzvR8YN5ZXiDM7VBswc6NHoZeDAQgELsYLg31YzPQQB82MDwPscM4cABrAjMPX2h57",
  "key17": "4Si1kNT8o7eapnsjaC3UZuS2PARbUEozQ6NmPdMKdhcZRExaE3jRCGVZRKQEuNXabGcVcWjVh6aYviAGZXHf4jmj",
  "key18": "2Pd4c7jttRVb3SBXWG3irygL28uZ2N3hn7D72yHGwzSZWHQFCDGytUrYzptEeW2RkSvohYCbhmDxMVKRYm6HV8v4",
  "key19": "2ZhcUgkED5RsuYmehJBrkfzyRFmHJBUkm7XXkq6EErD9xRrYC89HRePJeUNKRnoXFnest1ENMwNfCYFCQVN3W5Mg",
  "key20": "5G5VVhGzSsRw8fpAoFkH9wsuJ4emybHUxWtwC8c7RGHgpGNbuNSPpFYxFNWR2jGWnLPKoRGAjDs9oY5MjEmpPLPu",
  "key21": "W8ZWFXyHPtrFe9kFEoFENgWj3ZAN8koEA3fZfgBq7fqqUX7afgrpvfLe9PnY16zhKws8j5i3DKR26kWYmKhwdNi",
  "key22": "2Zs7PUtTGYk9FB2JvasvzsYhMCwEmktm1ug7aAGNzkr6wBsYPscZZ8BJF4LxFuh4t7QYHurKhqSHhrheD5wgxXtY",
  "key23": "24CR4YazR7PjUBFpRogrppWLnEcdfitRYKG1eNnMq9QXJUaVFCBEba84r2mDHZX3RPxMPVBukGVk7fEckyQaUVJV",
  "key24": "3yRWuLwTJp7pH4jZ7GpSH4Txzay8iKuBkzJ2E2kYpNdiEwsJrJDmV6773s73D9Aa6hy29eCGuh9nWdiBg8T6PA67",
  "key25": "5pPx3jsixnadcaPvh7UxADsRxcR6SpAojJqMtzjjvQBQhPQURPtbpKKU9sTiFcVKSLB74v1dXYqjFP6rNYeVns5K",
  "key26": "48bztMLhNP4ArMnjiFXpagS8gDs9G8hxmHYzDdMhxRNj9AWy1BDBgzLEcL8FjeJ4oicnjNxb61UmqBkh9tvrKtqw",
  "key27": "4dNQp4PxfcQrxsWGbE1CZKK6gqVKzXtkPwa4JSuiriVRf7kh2PzAKz4ALWyJUB44UQKofax1irHb9pyp27YU4mbF",
  "key28": "VJ7vVBjAafYDYbLpCzzv6SWSNkhZjDfCW8hWHeqKYTD5Z6Ae2ykRSwDMhZUgaq9o3s5ww2uAzqkEFynRnxTPsAy",
  "key29": "kuWKWC4kmMRMyUL5BQ3fukNvnVnRnPstPCxxx7YsBqf87peTGnq6rk79QgEkkUXWy2JwYEirHWa29ydqF9r2zAt",
  "key30": "29XV7LBDejhQLQ4y3TR9yNxY1XyxS1PKGNc9AgC9LKaMAELJ41EKprKRrzL8sBVqWnw7zs1yUFNzLk4aTdfY7DC3",
  "key31": "QHSiMNEyjwnHXovHQwpcZcZaWzDHrUjFmpGYxE96encmSsPD9is9U2jJ7y9zBWG7epeTnVQo1X2WKDtCcw84ceW",
  "key32": "3sAQrj5TQCcB65EnVVDYDgJ1wgxNk425BeqyViFdbdUwsBAW2cgwZXsvRqktdbohPWMLvm1U73fG23vNZWRBLKX2",
  "key33": "K1eJvg93K8jDbmX7pmb7mpEfwL9Ev12svR41sN5PhpdUioKL4P2VdAbxYcCh2PSJP1pDHFdt1VFoE23GRhPmpvK",
  "key34": "5sbNSy6pGjwULP3p3LCTC6xqDojp9wux9nQ1Z6Q4oDrQD8jvyQVq7Kazz1sp6Ygst3KcSGyAUqQdyebJavM9W6sX",
  "key35": "4bL7gbJmvtdt9MFSxs4uGEXtYNUs1rPJLTVCpEYAwu7WwY4dpohi27SpuLqc1MZ6aSH3XaVtVmaNRDZdjWy9NS9A",
  "key36": "5UPPPQ2ESZtc5L9rJuWxs2GnHtQc27Su7CJAihChUgR7BTy7m4WT5Pp4ukWhPeKvzu1zDLwgsy6NSQnShe7AqHAr",
  "key37": "2H4vWscgH9azzbzeZ2JVNW1opWCERwU7hseTmRPs1mWFNpouFEQwbkwrgnUneXDBdMTaD9azmHeoiu5mfQWmRxi5",
  "key38": "VA7YczZVwuzUtbeLhcMXiLN8DUymemn7A5noEeArA5kx1uDgrBFWuTgrqbndVqchUWArx3CQa3gcwPPeDLAJN6U",
  "key39": "s65bG4DYhLVzxKwsz6bzFkCm7vQknmYdLZnLMrHe76uZhfU6TKhKFFnczLarNaZQR7crjq7TRQVrijY9vcGw55P",
  "key40": "2j4xh7i6wgaoy6WNpAjZrS4ioS3RZDjK1XWWnBDeRZ5JWn35ZrUGiFdZLgdnoxwJs8A4af94ekhTo33QbbnLU8oa",
  "key41": "3sfwjb8t58NVG5BaBhCLCmU2R5UYXv18oyFuPAZVqEYLZJPbZupD1VB7NLLpcKujQg7qDGY59JBAnY5xRMCAmpaH",
  "key42": "2AgMH3QtmGRdF6ByfvhEeKF8hC8tt2uAAEm7eeAyyPy72V5EYXeMoaHnymzn7A9zBceBdGzAPox42vABW5sjnmbj",
  "key43": "2b7zcfhBiM7jTwLgGba21vcCVuh5yVv5zabxHA6ThtQzkHV5a2VYbeaVzgwkBEjXc2ouGJ3wpLzr8F67VnDRaKF5",
  "key44": "3gqyo5pgVWGNCBJQkSGx7WZCqcWxPszsnDsCvfDuhz6qbzKNrRQXYsDpfTzidUscrco8cxyebvJUcLu5YoSnCnAG",
  "key45": "5cqbEmkbkz8yQ2MKBD4Pft9atApDPxR1U7ZssqEp1mmMNcJsqCFvzDLBp6qdi5oR7P7kFo9arz6E64gCdc6TjJbH",
  "key46": "5aLrMon1FLPCX98kYhUsVs7VYTdJKUvBz53intVTwdVGzdbg15unDMXmZfZKrWer7V34rDboge7PdgDtgb5uieHy",
  "key47": "4Mc3cZufyXPvbre6VnicCWk2qs1uXu3PhWWCjhsj8yvut7qsdxeRrm9yzz9Lt7VfsqXSig62D4CpRRtddLmHKspy",
  "key48": "4YKVhxiJeeXLKxWrRcUubLmRoQXgwES3k8swyzYEQ8ZAmAhNHm5j1TLHBLkV2fT2P1YNxGQ9J9YbaduoF3iForph",
  "key49": "m9a27BAtZJuFQZSHuFX8FPw6EUycXerZo1jLn7a6cLW9PidAWQGzpmi2hC2AAEJeWt8bRa4h1UQwCFW19vCgeDn"
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
