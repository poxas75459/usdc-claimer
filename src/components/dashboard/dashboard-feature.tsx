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
    "4kYyognAgfiXRYRuEMdHXVzSfxX3cUKzyr8pyPZ91WiM6xSfuksMrMUWsj7dUGDZecVu929vRfACY9oSHmxctYdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXVYXNwPmq6i2cwWNryfRU6QBi8KD6kJHS47yQF7QUAdvQ3iHtwEtFHk9ov7MRRe4CXGAUgD3kZTAmBkDmjLdQb",
  "key1": "3VtLxYYSEmAQYV44BCVMUQ9ZsaFNXuRgpMjQKuFfBHvqQ1rrwv1MQzcUrgasGdrjk4MFS9vGbeY1jp9H876xrzuJ",
  "key2": "63LpRirJc73S1BwycmPS2DAe5XD6wTPaFRkB9VNVMk7kzsFBZZTc9DTAAmjFL2ZmAcTqnfj6437WaQMEoRzBXTZj",
  "key3": "4YA1XVgk5qwhwZFbYBwUuFN2fpFtUJb8F9ihbXfX6HrZNxvi7Qwjp4WGFDoien1HjJz3XdVHqZJxvXZjGzjMjFDn",
  "key4": "3PeQh9FtVzRsirfpUMBCkKRJLKGTWsVpVJSHBJod5j5YZaJBv2CiydT3FNQkgsESArCHbzWMrFMuKYzpL9rJMFLN",
  "key5": "3Vq9hbbjtPA5fRNwQZmPrDXcb8sygdkKfFTkNnmaDDH18c7NKk9W28zdAH14pz93yrzk9wd8NBaXZr4iUXnoAMVX",
  "key6": "3pTpcvpNMHZWYfPWEMWienJ4UkhESsfLjy7jk7ZPAozjVXMNdr14f4H6kxjqF86Bf76X2LUEMoWHrZJEFhXPRYjN",
  "key7": "HqDsURGqeuvb54hUgPiMJQzt7sdczqH48KfFkZXEupA17xZ7J5zvdRW114K1JvBSnKGWpJKfiHbzZXktoy4sDXA",
  "key8": "32KkV7ojfYWxPRp5PUuBKW6wQ82SJqoybY2sQbRYrzzSPZNXauGaujM6uVAeqg78oBBSy45xyMbeSx1tz3bAH38b",
  "key9": "Fn8NtjY54pKbNLuBPcL2vaDq53HDkwe72XJECLxa7RSUgJbDhXTJTGbLy9LjCqyJqTiaYhZ9hA2NPXs3Bhh7ekP",
  "key10": "TNAyHtX8vaJjA2q4CsWVrvX7h6wACZcbS1BZAYMYpec6CjjMUPYKBnnYWdZpP26ztqJhkRRppGoLcvuh4necozR",
  "key11": "2JBKUwTdoS98g97tEmRCN6KTRh1kvZYNtPkUKZefRVLZwc82Yuc3w4GsSLud4Jr5nePa5xhsumbzwUVdxvDA47xH",
  "key12": "w4doV3LFrNs4cPsBy1xCKK6J7LboaTqstkWfyWCnvhS9cNPUs98c9YxZPQN61LwrdGQStnzKtsPXG2tuL37HoC9",
  "key13": "UvMoSucQv7QgfFwtvPhBYTMe47Ta5iVzmhKcdYkiNprcym5b7GVC3Bd93x2fCxc8mDLfzfvTU7MpaY42uAstjyS",
  "key14": "5CmtaN4z8jVU6oUut8zqjiFMx1AiUvKAEhNJHi6gQT44KXQfopoLRdqpeRoAG1xtjYEsDYrFB6jAK8ewMf1WJth5",
  "key15": "3NYKnn6hFemkP6w32w3eoz4n3nmUnpRsJFuDpHNwQUTbEUtQStkCR1rvT6RL1zHyWKwz5kpLJTKguQyzhHrtaU6Y",
  "key16": "5kspFC5g1mRTJAXURoUt8sgwU1BFD2Nmoz2tf3aL5MBj5qu2J2ffaprQ4HTwJpvJYMLpHRn1NuEENszaazMDvnGj",
  "key17": "3cgbaD1YHCt1YQWSdA4n619cttDYAsMAhJoP1RMEnqiBEmdvhA3D6uUHJMepLMFyQDyFrttae1TaHZ1J8Fwnb8u3",
  "key18": "47Kaa52s9crjQBkrXA3gLsyTnsqujHJ7vhBkNge3tEaTFDCAsb8eEz7JtM7ueuCNW6bwU7UNnu6B32id6Pr4RbKX",
  "key19": "5TQHrtsmw7YvEagtBoEXKHwmKCS7BUEGfZkpq4eyVm8J4Z9XWA5Xo6TjowNL7ZgUMh27q4EFxz7GWPLPFY5AsEdv",
  "key20": "2sLwGdKLBNMrvm3RP67gmGquFzEurEXof9fPmbSSPyfZMKDV96G3c5eEAxZY1mnYkYgxnLeWMb7cPgJGF4Bt6Em2",
  "key21": "2KsC17MWRUZr8Dj3huSrkUmZCGFPg4FfjAwGDCYrGYrfGuMyPDcV6Q81YzX25wxZJxK84CbXWW82VpPnQsKEGP6U",
  "key22": "5gmJK87aTjVPRBwU5FDtJdwkoaUHn5iNFmiwnC8oaKYwd8KdAU9WQUAM45S7Y2xuAQegTv3uPb7xnL3zPUqD7JuG",
  "key23": "2FcgXmMNggdfAKgVmPCGgKoMVcMuDoP6ys96Pgm3rzaSZxAPAMh17zRUze23VQQV4CooNCVPPotXL1PphiWy73BM",
  "key24": "5hiUvfhu6UVnAeoqwEYsu2CDwBB99pJoQ5xUcqkUm7t1hBWCdPFsuDAKdaiz1s3LqrC1hyEAeEE2BJ7NgEDHqQFq",
  "key25": "4gWRgmn9sAxotcxLTTqsWrd7qzsKxqinHPiKq4Jb7eFPt3QuZmTDAVWsaoigysGsEEKDz2ztenLds1ygxX1d1LBJ",
  "key26": "4YgmdWof79T5WrSriFs92FN749jfwjNz5QKNkyBRANjPyTnuk4RF7CY1honvNJRABJuFE85ZtB6KW4LdmxSJ2Xnu",
  "key27": "4aSzwC1Q3DdmbQLnvEy15s9Tf8taqQL9CsXSxcU5dhYbUBPokwpkTdXMYbFAPKKhozTq7EXEkvff4dGG1e4NaHgV",
  "key28": "37MfM8yZHBPjSrATyoZuHdxY56aG5nSt8UaEDWcMWAfN6esaviJs19pgGRTrN65k5qraCP2rbV4T4GMnkiYvbiwy",
  "key29": "2gtWwJSVWv8fsKgvBP8zU9SfVkoV2E7QLpHxd2cxUDFcbb2mgPqjMUyuAyhBUGbJifeGB7Cm9GGcw4E2jEjcbAcp",
  "key30": "3S2YJzKtzTZJkXnBeqbALSVqw92JHLfBfyS1s8ZvomJvPkXuHSiDSdLBmWreyQjZvkLn4jczRXC3yQmib14LWwGy",
  "key31": "37Y5c1EnjU3HJNRGjXZ2895LJCprC31QveV98sGRhNLC52LjpGt9RR84rfycsCR5jgUNT5kwwJqty3SCU1zjmyqz",
  "key32": "4WPQGVhZAkDaFfCVNhSiHvqLBWou9UEM59PdRwZ6RBesxVmUvHEgUVdfmEd4jFpFYviRcfsx8hXJFuqY2gG1e2WQ",
  "key33": "3e8Vf9UdJR6WD9saZset8j2YaQjDCf9zMcRsQATWU2JmY49yixz4JHh3ugaMyvsa1NVLkd3nuqKgHUWiekDha1ar",
  "key34": "279cFB8pnsFiTuzFM9aaXXWfXgCkmEe4CWZovaCRtsg7VWytBxFNLWMSA1cUJAnYM4vHThZxJc3NW22H5fzsdo2h",
  "key35": "2UFUFwmtVQY3ZnjnjTpVnQ2xfUbrTxzGZePZgqkLctNrZceZZScmYqjjA3hqivTd2oJXwJeDSx8J95ABdbRKMpD9",
  "key36": "33hzGRNce9QonN6BhxFscw5aKzttaKfB5prKQSpKrpZ6hVx8dhUkyZEgm7k6Y4shSrPZTaqtFrqDxBoEmrDkMjHn",
  "key37": "3ArcMWed2cihvFy2vQFQSJQi57xKoATzygWuq79ArpJHPb2VzBXTubsA8sna7PFogAwpNynP89jYjgfRL5K9ECKn",
  "key38": "27a98GiRw5UYvpFmTDTUnk42TM8W4enJS7AYxeVzWG4LCGXr6T5aQGAfRNmdJ5MiVt6incCSWoH16xUsSq59e7Nh",
  "key39": "34bGDgrRjv9WuDybtHyB6gJa5uTHkvJnwrfs3nWxmoX6hcbuLmEZxgoQ3RtY91MJo6JCyejYUf5ib4hLu1U2yCoa",
  "key40": "zqBTa4R4JjrrT2oeRDmQKZwz2G9FCWBgFMU6B96mYFpBd6vHV2dm1zhkABDFq2SfsLBzN8c4YZ4sSWQVU4BfCv2",
  "key41": "4Qk6LNC6hcASctFnzi2nJjTVcP8CDtHWQm19mVDuH6dq6a1DcvFvdhmiBMvgrCG6ac6CSYLoZ1dG9xVSLKTDyMa6",
  "key42": "2tzSA2JsgqhqgF8WSxBNqENX3b4rWFsSU1Eq7HKat2NPtoyKX9DYBqj6GUxSgNggU96MZAKXBKY7Huvb17dRobQQ",
  "key43": "fnvV3RMvD5yqWYesTXNYSvngZDPDA1kXZBabFAjQnHN5yyhYka4FCSE1trzKrvqN2Fp1Kwdfu7qEEqKDM8Trrxy"
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
