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
    "3S75ToCuQT6Ux742AqVQrWFSDPJcPhSaTN1nfzQFoxohTcbBPoPADYKvNvda64qg9YX6EgTLyemXfNQwDmSozuEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YCeAd5d5uam1AT3L2UMxuTdNWMua8XNB5seTdnyYVCVrmVZscu6jbzdTsCnpt5j9CRyC9YhgGK95dLrtSJ2UgbR",
  "key1": "49am34mYoFq9HXNxrYaL52wxi76Md1Ur122JPfXwQG5f5j84b8naGKejXK1timeqHHwyjCen6ZSv4LkgrCs8oHYF",
  "key2": "2cqpQ5DbyhYjdDYVoBbo8q7XcAkQGbpABwQ1rDNeG1Yv4mjVbpv6Yun48fX3fkcUsguHjdAztLtdD35RfsBA1VPV",
  "key3": "3mv8TyWCEW636c9tJKthe8SBsJ7oUagq65JqNrV2BYAwkg59ymFeVhbC2tWBZL4KmdxSUgSSriWvfEuafKBt3p6E",
  "key4": "B6DjefRsbBZeCGJYk5UaZhRXe4cwVHqERz8UWB7j3JoYortdPjMja9jma5QRkUuZWUniSraE4MeBsKoMwnNBQPp",
  "key5": "3ykeJ22CmtNiYvYKo3T14M5BncN2v2Wcv1MpKKwebB6xYkYYuSmh2wfJe5b7Qc3FNXHWATSwucr6jYqwdJ24zHWK",
  "key6": "2Xmfdj6i39sTZRaa2LSe2YnkfFvqVpMTc7L5i2JQ9FD1vtk82tp4YYcZ8ASZnEfrdgaPiV3AkV1EkDvnanGmsHKt",
  "key7": "4JS5NAQcf2dgvhxfh2gvvYz5wAm49uTeRpEk8Kw27nvZrJsp8PW6j5n8GyTodhPU5UppZC2SDJKqFPTy2FVPWQPR",
  "key8": "42DVVTHLCvJPbroCN6SBNYhttmutw6yiYvHSQWjXomRyifbHDgcbaE4eejAc5bWPkC7bjhgv5Ry1muhBUqnkd7M2",
  "key9": "2KBLRn2hUkGqHo24V5G5BcV8tPabAhoNLVnWvSVpynDUNGjGZ348s1WeSsuKY6CnCSBnsP8zKWRiTq2xepwrYBtH",
  "key10": "4cPh7G4cfA88krywSGnNJMweaRGAP4KjhuMbD1G9bKFexnehB1BWEfjQJM4GD2gtfsaxtxWQK93jFfWY7eHzHdsk",
  "key11": "2yC4Vhq3JhWCgt9NkicEqTMkXSsybDmY1e1kSdCmkbNsnauKCF1nUG3jGTkkKDK4mddeBZZiuvfpULDXupfk94a8",
  "key12": "5FzqWpkuW1YfsZu26678rNYHhWwm1ospHPgMbN6BfdUe4tn2XhRz9zsVMjUWYb7d9MmGRxPDNcwtHm7e2KgFiuG6",
  "key13": "648TUYzm7nVwd2B48KMywVVJVqN3F1LGKfS1zuJ7Dnx8XSEeXmHhh9gdadfuZSQUKRSmyibN1GQr8ER5c2FEX5Bi",
  "key14": "52MR2NB1vGx5PbRVmVMsbdxagWbyejR1PHNX3GLFfcpxrqqkDJJ2zKndSEUEuBdvYRZA1SyGsq4y6bGfaeGgEcbp",
  "key15": "4yvFyEs61kUHmreLFevEYn3qEi515Sf37ns7Ej7yUfAUKK6jjrt8xhZMTPkUwoz8RBUEjtdkgdkveiAZwYHVatw5",
  "key16": "3fgjAF5TgkBTKP7vGKBdacw5njCbX6wCiJRppn7BqXbJVEdBfDNGJFAnXhLfhSa9jahyAEgCAWkcDtBwXxyfuPN7",
  "key17": "5DzCSgCs1SK2AiuN3vbjGReLJ77LkwPhJW1wPz7aacNTqtHvvNNKYLNntq8fNaj5rqzEpCgWewyeGzoywMEn3a6Z",
  "key18": "WWQf6fj76b9JQobTwS25XLsPEkGitf5fapg95Bz2ThsA9uDLc6VJEbnkxiztCwy7sLQLBwRWsW71h2eGPSdK65E",
  "key19": "4ZRZ9vocvPg2Jfpdm3VQrh4LKy8YeR5XMntdPvRfb4rawvWGeUcTLjbDvBbfNBt3NJC98Jr3FEMtApuU9i1fRgPJ",
  "key20": "2NZwpxBCp8b676V1RLVvibLx4d3ijZZpQbsBhGdbr1LLKhoRmY2ciMqi4FXXpHfc27pXDBkf4zjzSZe4fqKvG2Gd",
  "key21": "2ACfKojXQBLgtBMKdb9mGexYEbewbPDtVdggUTmXShkPPe4LUKFVWZfA71WkV4R6aFjwD2xGS965si64apWywzRq",
  "key22": "4ooJrXswTRQ6unmQxP7qsWnADzWqwGXmhihGgj4xqTRWk5zBu32LbZM25csPFZKPRMWv8G6n9A8zLv9G9Jybnfi4",
  "key23": "5Z4tQ5AYWvHTZRVF7QaTRAUfSuqEPa45bojAaschWJYy4YjroC4X6K6brLzHPBiNGZNYFGKorw6Am2ddpB5rwY42",
  "key24": "4A9yXJvgpq8vTdpw1GKGN28NRV5aaWGKUUCPkrGrS2LTtzNWb5tDv3JnPdQhCoQLTVhMNmzFugdux7crcFrxEUjr",
  "key25": "4wbvRhhfNVz7CmiW3vUdc15cLKEQV38RU1wVWW7eLfRiYazSknjhNZY9ug1x5NxjRSAFBrMUGhrHNheBUARddLVH",
  "key26": "4tM9mYCisN4hzvvBRMTmHzNgpFXzrmTVJP785stTBzJpmGqFirhVntbhYrng6wt3QARd7fwY2nNEYwvLyq3NbHLp",
  "key27": "4CFKWxKDBmPsJVfPsE72xfxcoc1aBzcQk4jyVmoF6WBmTUusQTMJTNSA4GghWTKf4JAdZE9DCsM3uZhB9fGfyD1e",
  "key28": "GjThUwXu7ZhynfGCxJx3qjRTnxW6WEmxqXLfMFp7RAh5Wo9FNBqqUDfHxQcpiyvNtCvC2L4uipiZn1FJ3bhWoqq",
  "key29": "2x6soXbwcUoeYAUCPVZRXQ8rZXMMpx8Q1XpJUpg4BbditjtmGsfPigPqXy5rcyLCJMcAnue482okiiPicipygiA3",
  "key30": "5poM1bZrYmrdYQdaQybnd2VwHA7RDz9GBRSKom4X74ME4kydPW4u995mUBgE212nq6ZAbeeQZ8CdKzwVqaoDgZWz",
  "key31": "5LryYTtybQBgfRGH5zphsCD2JRx4fbBHJ2AK2aqm6evvffwWf7evqYHMmwJBTuQ4hcSkEzR333bTcpEUqDwnow8a",
  "key32": "3nunm3uTN8uhvbcNxA3V4hfZ3ZktGEjfMXnDrQco64erq8msrX1XGx1zwrXsiqSaChHKuVHu1obr7AyE3Xxmu1ad",
  "key33": "2Aif2PZJgHrgeaGnRYmnATsb4Y9Q3J5fta6vu3oqS2FdZ21P8A3qNdqBjmHVcjVqDEnwji3E3yPgMBWukX1NpHUe",
  "key34": "3mudd4xMm8dTJyHuLTTGpGfniibCtHc7AW3KTf8GWXqkt8hdi9TzPjFwrnA1hur8AqkPPzNa85TeUuqLVZQ1FcXJ",
  "key35": "4UB966o138JkCBiSp5uBxZgnyeie3dHdPwXR3E1Gznd3h38Us2KBztGBAx7H7naUFA4sEcFCGo2ytBP8fKyBKsNP",
  "key36": "kpMkXtsbt27Pjyz786Z5Cni1xRQEHpdGvts8jc2uwsqsJnoSSTvrqxRjEMvsjZmW74fanHurduWvvUPppan3f8M",
  "key37": "3Lc17GagaX2JsqwcRj91J8Jgdk9f8GRycxYeGJxMsEPGJVm55ExVepmYf9v44gicWVAJBLUKEd8KoVGdymfTDZHo",
  "key38": "28hMNBMYooUvvNL8B5Eorkq7UuGfdY7zcJDe3q3e4ieKQp9MPdhsjJK9dwM9UJnj9vYrUGJhAyiJURhZ2UCSS4Gv",
  "key39": "4zwEmEC5J2A7sCsKYtnyjcpz31BaexcCYFDzkdWimaFCmibkZR6U33kWfPmJsggMAtRuhWQBXQHvP7D8jiyz6Fix",
  "key40": "215fTe4PrS9E1x9V2JiFpEQQfmf3UcXUNkHmGZetANVVxyP44Qs51kar2SytysBMJ3DTJrKZgnZhR8sfpK6UFSjP",
  "key41": "2k68jofA7jtyvPeq1KaafjqEXkDqmpKhhfMPuhaygeyPGtcfbQUfy9u4AC3zWbpyeHMU6VgJmNoXUUxVi9N7mKkv",
  "key42": "51JbHGLtciLDB4yQkubx2K43TMc8t7tr3KB6vyhAjn6ZU8nwWuprFPJTAXR2VWtRuZhDNCv5KTLEFGUjPUXJ5nK3"
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
