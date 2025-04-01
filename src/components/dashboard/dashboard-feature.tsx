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
    "3UnEfq2MM2rLnXFSphCze6M9k3c3RU2h6ZdZpHDoU9kTL9GegVHrQ3x1bHwcWz1HxG65Ft5rC73Yj7hAACEdDrKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rC6HJr1tAydwkyJNPTrFLN2KXDwkqsVLLYbqyLaDZzXfJ9Am2zX2HJY1dQKVMTF7rw8j1UemUtvKUz4V5JpAU9j",
  "key1": "3rkj3btNM8rgZC4bFVicc5mpTF7o82UGBaj97m5XZnu8Q43ZEiZW2qrVBJAN3CuxqGFQ8iGrUNcE2EsNnCjuQK9n",
  "key2": "3xtFU48v6qwaPac8buvH92oEn25bwZ3zSjbtMr2CfQTtEjhyRpQ1vKs1DtySyE4HEUiBAe5PEQ4QVNzNkoPKy8xT",
  "key3": "2ui1dMLPdLYuD4ZR9fh67onEZGBM84m2iEzot3AU5eDNgmTnEW7xfsAXvHLUTZX5z77tt3T5yBqKfurHex1FpCtq",
  "key4": "5wVHif1KELVFkFPaCeKQ4SzLdQTF7eCQ5X2KXZum534PKusRudrsi74y2AHr6xcMisMQxaTbwG5G8b24AenwoyMa",
  "key5": "4f2vPnNyudYzWVbCjVoQ8ocn2MLoQoFZw8BvTTtmv18bLHVnjhhc63PLLMEVsXNcEsMfj5S45VWpz2h53sovbZqv",
  "key6": "5v3vGxgQkFkf99CTUeBCHVsjEseX7iDRgtKJRUyaqn5mEZZ7eo46XoAb8z8ZxSQQagiU7cykY9MVARuLL3TegsmF",
  "key7": "2BCKiwx1VAa2mQF8UhWmCahEbX6A4f9xGYjN9SUPWz7R8j3xJPQnj48Azseu3tU5B31Db8gKqyFfyVS7dKKfcDjq",
  "key8": "3iNf6fnjCVWwpwGfdXvJDjfgHr3gX66v8atYBuUGa5mZgEGn8mu67jAvLXaa7TTMWGyRCSvK1ZLiSSoSChSjSEzj",
  "key9": "453rUxXoTws4nCyAT68UcDnthYSRmQaup8LpNo6E5dHQuVuVG5mqLQLikm6io2fVVy3tbdvRkfGEeUq1LMb7xTeH",
  "key10": "2Gp8D4yvVkj64JAMTvDHEMFstJyRogJvAPxmkzfCyNeqw7CMhEdJmpgw5Pb5Wo5egKBmspnFJx4XxqMKBD3iicws",
  "key11": "2SXNW9DVsra5vWMJWsb69ZcEtKmLSD6iWbaLT18R4z9w6zD8NhgiZvKtQEGHhmLKxYDNJ7VbdNjicqEATto1V52i",
  "key12": "3au6dA5uz8zkfDJVsYrAr6gvBLeeUFr7hP4X1hPKAhtnQX6GtNHQaHVHYg8z4rafLWnnHNKYi6sJWDQ8stWgTi59",
  "key13": "2YHUZ787CkK4RyVPnZzv7modrPH67p5cERziiJfmg8f3fdd6zgwxDYvkt6Y6GEp6RrQ6zEvfm7NBztQ9YhRc6yaw",
  "key14": "2xyDyoL5iJqQChcbKwuZc8Beeiy8exip9YNd3DdVyp1W81UJ29q4GbicB3dZ9kpgrMMoLEKXBxtRsKpQkLB6HYq7",
  "key15": "XX83Y6nrWFWLgEqwaFdr5PmLRE2YGSaJUK4wWVkpPLfUmPKkepFFrqbord6PoLDiPayezKiNTfZz477tLprrJsr",
  "key16": "5epTgNe4FYPg1VaYsQUJQa9zPmRbsfSyfX1j3FrmJvHAkyMgWYnwtEhy8QjTGqed4FS3tcbnqPa2hgAgeW1Yv296",
  "key17": "4ub8CwPqmF79Wuzgss8XJfs3QJ2pe7GPeueegoFQbg2zo3kNw7or65cnMPXdWDdCFnB8Nmfy4sxKY3qjNrhNxoNX",
  "key18": "5WybGgyMNMd1WZXRGm5i1wmw33Kz2WnkR28Lwhw1KidoAMhatz8zF5BEgnE47pM6aXKDdpn7FCZxPQhWj4qxo8Pc",
  "key19": "4JPBNTzY4jnQeUPp5nTH9xQ49jGJbuKDWSKuewdd5oky18aZ4S9ow63yTardbSibWFWZDY7uvBxM8tD7rFGtR5Qk",
  "key20": "3nuUXzj3QjnMCUpDvg3ETPyZfqaA3MLGHUudPMTFfxFa333BDMP4PEFB6Q76M8TpaJc9Xr48EaNtDpXr3nQeFmtW",
  "key21": "pBDhvX3H8Ga3rFUtjsBW8Ax9LhWqpTVUm3pvaoNxNygW73ECYWikNggn9THqCFmMeAjjaA2afSMw3gPRpiDKi1f",
  "key22": "3SMxxPJ4ycwDKpEXun1gXZ2ABSGaQr9jDzK4E4VQAtrDszQ4tWhKyLYpg4HUjDNCdibLbpM6TkkpQznBSzMty1SM",
  "key23": "2kiTptrCkriLHn83bQSsFpVcmf4AMdiFqsvbVTCc4fAx2S89bcjL7G1zg81zCFmLnVbiwWGXgSwMQNjBiYAmup73",
  "key24": "4YceJshdDhD3T6ErNvjnAjj7joVByi5drsCH41F9CL8PhZTeZZg26eW4Fi4B9q1qT3n9Qsp7UifyGFkamKKcicam",
  "key25": "59VAs13nemMqTCfsZU35dpvXpfMS63n83EJTLNRLLbUfzmap6AsraV3nseYAJ1tfzM27UwiFwXMZxbzHAHjYAh2T",
  "key26": "2pnuww4HX27xzR9keYyhKqcs4ieNqP4DgdC1UFu89A7mhPZCM4JZj2mC5HMS6kiDAQDrNCmKgJ49fLH9EDZAQuoj",
  "key27": "5zikGqSoxrWKE9PYdJa8F7khcazqLdfrFQfbcc9TTi6mJPuG7yEtUUFxCaJryJo9QeRkEPgEdLuvQPiroVKMCtek",
  "key28": "4wg8tNpVir2hD8PwujDGgQgkxcvfkPh89ggSgoxSwN8PjhFFShYkNmqTFTzMHwveUhPNdf7k9A6z44vhG3MZZsLj",
  "key29": "2DwrwEf7SCCZ7zMi94FNR76pXkHfhqAk2o1ja2eJ8kiidRvnRQCuHEwnju93EhKXAbghhLrQQBv7zxH9TRjyfy6m",
  "key30": "4F8CZo1egrQJsEGDFegPvspFPohBRE7JvYGjuA9SY6HrJZxE7LpbMSevj39VuUmpwV4xEdhABdpAiKsAMmJVYYkx",
  "key31": "LeR3cAbbhN7g1z6Hi9SJKKrXCpLsirjLqugjRv8FUAAAw4VybEqy47enYKZZ7wUt4QEwPtbxUq8hTg5HWtgw6DH",
  "key32": "47AVnvWwqx6k3sG2b5La1twz5KRiDNahwWffa7kKHHzS1Pc28gA7mh4NuRipmuxkpUGsTrR22cGNfvrCRWzphzzU",
  "key33": "4TExs128hATYLYSqRjimvkoHwKikviWcoLav8EtJRXrSKCwtm7bbkKbofNJva6brSbDqen9upzo16jdp9NCJH1np",
  "key34": "115GpMZwNLtLRQWWxSZBbRzSCiXzgEKwGtc6otmRwxiabRmndVP5iyhLR3un13W1kZF23i8JbcnCqDPukuS2AMA",
  "key35": "5H6tXRGneDStsdYaUPdPzAAksNEMnfstQRZy2kNFNPcbUYC9hbgXdFXRRgRjupQfVNS2zqkChxJdmDuPJhYt9vYu",
  "key36": "3CBGtBKrnwkYmK498JKWcvt3wKhK3JYNF8EoamgjZ4E7L3Y7tsXmG5AyMaVYGHXRv4c8b2qsV7P57sDA65n2ybuL",
  "key37": "5Q57e2DF4xikwWiS7qkqfV6Vaf4Xywge8GRRHQcbFfoabpntmw1pbLQQnXB1P7cFypfA2h9wYE4phd4k48aFZvbV",
  "key38": "2EyTNdSDgAcQhrT98XJvDwABq6zYt916xQyssZVd4wXRGE9L6XBmi3eHt58jR96WiKtPnvPExbCBZeNrFbkPwwjV",
  "key39": "okL8Ggj6r7tiggBF3FvCKPfiuEpofQUMN8c2ipNEFYYGagtTE6SQNWidrZUqqm85LFmWsnSnZEtbuE5Jr5g9KoF",
  "key40": "48nkt3PQh24daRNpCoLrEu4dLjo7erj9ZCRYbwgHwxAc1e3aUy9cCvnqYPnonsa2rxojX8PfuJZfWrx2oAJmZfY9",
  "key41": "vuggSHRCkm33CQPWuJoRnCzAYhdUWU7zrbmRpADMkpXSHZkoNKfPoDRoncF8WtkVoNNed3HvhTQnsq2td4nuEzh",
  "key42": "2gPRE8EKkjA2jYaVVtJZwEWcCp9GgXSpwexAxQiJpLQzmT1VCj5tPybw4nvpG6dbtYRuZnNSZpKAZwYDMcnrEJwB",
  "key43": "3RuGSdcMZx4jN3cHZeDEUfZza1VkTwMqL84VybZBooPdj6K3npEDXEVjAXKRzX7PcrPS6eFQPjgLCtmjczTvDkEJ",
  "key44": "5TyXT885grQeW7tX2WvDwN4xSysxZ8z4HHV4a8g1tDHXBoB9fKsF6wWDqbsU6dreCx4e2qQPokmT6JgXb27iHann",
  "key45": "3TWkTUjWf3xW89nQZAb8ujsmC1HxVy6JSGxJZ8QNBHkmskTFmx97CLaFaqZL8cFmGkxAiZEVbXDWzMBfx9uMRVT9",
  "key46": "2fT3oo3A1TktVwcZY5ijpu8wQKB5NJ6rC3XbfwiTtq1R5UFkhywrStK15A8N8porch6YymkGxunNEnDkgZxTibD9"
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
