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
    "4P6HCuXLJS3cmBFxRutMZpMmopVPMRWJk7UCywjcUP8bLT2dKtnGZg5B2HGZsTSzdRHPqKDLpCNsEJn2UEhHD7sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79dgk3nqkoHQu9HRvB147buYBcWGqGbftWdCApUAdKhSmLcDjJzEJWq8cUGH4xdgEf1Pctjc68Sk7Jus22Sdu8E",
  "key1": "653MXDVaqt5cfNbJ1F3EU1z5hbEe8DGCWXKcLREPgdaQu4uwMC4gcoATa3dg4FpmCZxUZuoqDWpVxLPZ3RPs2si7",
  "key2": "4mJ4pURuNNyQU7FnAJDm72biM7UjnRSYQDUtaa7swqy5pw1rwMDXoCk3BNKv4Xr1GNG7mtdwRDQK6KWWrYKM4NJu",
  "key3": "rsjyoLmfs1Nz3znJ2J56QNPhxB5Uc79nLVVnuurQzRdTh1sQmpzQyhfZWMeUZ5fTCrxFtEw6pPpgPi4S9Upy7Pt",
  "key4": "5RvBZYDRKve726SpKSCbuSVq5AJcoAeEEm2QVNrknW8Ju7p3CCx6DetnZv78L8nwfvWja1kKg2xVKyh784ozD3qT",
  "key5": "PP5sg1RUNzLUqdZocZ15K4ksrgb7jVScK5jcqEgMit68aoQjmn64gjRTBEPqU4CRAN4jUWJLvQbivuiAbB41SQr",
  "key6": "5hfD3uwK5BRPJE3hNXffsZdHe6rv96R5Zc8nxV8wPJWG7PCs6dzC1hPVhR8GNo92cNzasE9dkhwBxhMwMCXQxvD9",
  "key7": "3oZau7N2Zk3rLn5pSG9VvbBPz5HwkrUz2dGonksZPYHMB6ytq2p6oWoQFQPAGjcbaeLRkGmVSqMkg6SQnarhv76j",
  "key8": "3SpygTrcNEAEdFAyM8DGnu3zMkftF6iGty5KBAMknSTDWbDxd9pDQ33cxYF3YtYmWxsQQ1DZxBrRLMaCTVmaFoh3",
  "key9": "ZNSryDgXarJWaVtFjqohs1uGSU8yRDR2HZ1hZ7pxMKaRtvWUJG4AkQqSFSk531u426x7Y6i4uU7pPARjmabEXYW",
  "key10": "5VChoFBJ4kDBJ1FmWErfy2TxYYWuervmy2XHVYpVktkLS3SKKoYSP68nR6yN5HvL7Fh8yzV5Zf5T9WmovZ6tNfj8",
  "key11": "5fyWUm1nogKFtMENBv2nxZRygaUK1LdEjegFzbWmTq1bqpiLC8uwjiWdDQ5igaftqJXRUnkgMpYF9VEJPYh2vDCm",
  "key12": "N4uRfqKF97hCfdDBufasFwwH61q5ZTmru7LHcyxooePcqzM6jmLbJB3R7FojtTXebBSMjvDFNKb2K9MjK4iUBzW",
  "key13": "2MBae3x8g8z894hoByXNuLLayLDQBExou5FLra7Ds5GaCsApgK2sxNTNibRfRfKgnKMnuEoE6fwktzKE8BiKGWTR",
  "key14": "2CfRt9szRRXZhKANhyEvqoTy3iCp7rtV7EkwFwRjS62Gpj3V8edzERnXHJ86rvguGjoBJUHrWtTHhEixCZw3wZdJ",
  "key15": "3mxd45BwVDWBc1HjT5KVbWbcdAJZFuSVFJjyXGLivG8ppQdtCFpkXvZP9CCydrxDgKWKhTDhdZPmnh86eg6W9Cjr",
  "key16": "5aeGdLii3CXAXp9z9CEhUjhkLJxyqvg7ocNEmocWndeFjtaACS7gceyXVckkrKtLEv9DWqCiB1wZWrVcfLVUT67N",
  "key17": "cGa9u4fJqDWasZ4enSKG3hhtroLaEAFqFRvDDDRdmwuyuiNYDfzppJCpiwZFPV7DwTxM4uRcNZZnuDCE5sKeCqB",
  "key18": "2YrpoALHGsNnZs8mL9wn1TwfqC36JsBQUttW1fMQizDdWqXgCMcJHdCpxs2hpe2AF4FJWek7RtTtfq7sCaD55sbq",
  "key19": "587qYhN98d88neBuAKXtiFqb19EVqmpX3GN2yWdeYgt1kkWv43RJMrMMg7xoVYhhZqUEErh5Pe4BBpaPXUi4LZTd",
  "key20": "3YkhCuoVxm3EifPrCasXmcPnmH4i2oJWnK94s7kTYUpjza8UkU6GvgA7ec1A6z6dnboc7ypzrRzwZsQaguPCPtpE",
  "key21": "3tnLutpQUZP8ws3uLiFTLBVdfZkYf3DH8HppgHK74QnH3vLJQCweQp2m633MNvw5VRPQS7Vac2a8HeKBPnAPSScB",
  "key22": "4DGcjcMs7E8RUbTwj2uA78sK6m2dbxCX1eoC3G5MzkBaN68yhquhEYKeyboVxEWtqiRW7HkTeCbKefbT2x8rubRQ",
  "key23": "2reVcdBBUhJfZ47akBKfeBdBqgEUYiq5Bvk6TYjTEimYvFbPunY9MtL8STSpQf7Tm4CixhPofedDyDvEWesG9GRJ",
  "key24": "4hM3vPT1mxuMsVzQy732yCCJ5GR2Z9xPRJPf5VmGSrFs4D4kGiEdFJyHbs8951zeG2HioVBEtiWfXHUfefYvC53w",
  "key25": "4KoUHsXFBRCBdQJtVQueSSYHWj4eBicsoZTsfhto6bHuUecNqYx3X3esB63xkrXDXFoPWeT7aXZL4tz1QSs88vGg",
  "key26": "4HcoipzMLGc9DjdC3qXP1czxkbb1ikPdnmwsKqxA2koxUXWxKvFtnu1mKymKXN4wyrrFPxxn1QtzBdp9YmAcHVyR",
  "key27": "3xLwHbxbY7zdkcQ1yJrK7DHHLFYgzXuhUB57R6u8nv3dY19BpKVecHvYYBcfp7hnmzqBFXa7PiQgxrYyrvvNBLa3",
  "key28": "5no3gycsTzZaBGouiqq6gytRD7QdZHv7N9CL6FhEQv8GnvxqTWSoxvFecuw4oXc9XjkTgxTfqzitHXHjVgQNn954",
  "key29": "4Lgz58dGjPK9b4g1RiQvNVZ3UnWsdredkHUFUhtyVVLmKgHXa2dZqDgc4zbgv6xq3fLXTF7fQUzxyJ78J7rMXLxt",
  "key30": "2ZAhyyTmdsfqSDRgQPDooiW2GXgKR4wZfVHZYMvrauHhwZAzgWYtruejy93o16EfRPkeiXXjVksLMBPpNKdz6b66",
  "key31": "21eyMe4A6dfTeqC9XzfJ9tg3JabeKFQs8PdrxdYJJcWnEDZmhR27iCjQ5qkBSsCiE3uvCgoRsTVk9cXkCvqPM2bD",
  "key32": "5sShjsNJBPMoUkaLPepzK35dYby5B8r7Ly9EBrmsP3K2YPSXFGW6qNACWZLZYkToG6RG9ZUWPM864XUSMRb7zy9x",
  "key33": "5e1cu5D6vaFNgiWpkBtXYF3qAZSA65GXmWt9qBQh39pwxn7m4SpC1DrMJJ6jGpeC4itHhMj9EDyJ6SFqwgwUjhFj",
  "key34": "sbNMJcoKeHPZkAUGu2NWLV9mqvm7WGwYC8ZCQtzFjAP6ArGMZfQQnLZfHo7juhdrdNap3ovwHJhweb98UidmDCj",
  "key35": "52xH5JV5XB2yZDkX33nubtDAH4S8vjwyZofiAqvWqA2AZ8yasSRwToF8C7yMpYpaaXmgaip9RFhMWhPcMsCxLk2Y",
  "key36": "4KphnseZZrEtiz51nDoUJVEaE6MLKniujWNqoq34f491wDj1yTQ16cxWoWgXvFZCcdx6XcE2KZQacmXE2nUKAsyf",
  "key37": "3PHaTtnqNmee9PsaRqE2ZhEXLKpcYiP4u9VUecpLFo5to5LJqmeHEL1jEmvE4dVA3ighKNEwdKStp9niH6a3FZ8J",
  "key38": "NCQ5hjmNYJsymgvoUjk4J9uPWSQgQgs8nYrBLm9WvwrVm45r4VPG6trisWTFDfVD4aoAYfARm4wPfZR5Lzbq8EW",
  "key39": "3XB1Z5eC25QQRaoRCWPg99u19XUromhpAj7Sb3d6syssg6Yz2bNdf6wXtpTmy1HpGkknThW25eDN9A7aYHCxTca4",
  "key40": "5GYNY92a4D1uKKupj3J1GWYV7JDLPWLHN1kvvuYzQoLMgYeb3uKmsnKSypp4iAWFucAH126rh93zaVtU7K3TaDP7",
  "key41": "46pBfSjZmpheN32k6m56Hj8PBFotKKEuJWnGX8NVvPKXAN4k3ftbjDAFJmuXCx1r654KB6Eqg4gQ3wXK1TogiNpc",
  "key42": "cM8EEvqonqwjtRMBdt1zKWJBZjwNBwm9W19tbDhsLgxTmCSt7aaUk72ui4ftt6YVCNcCKsTSQYTz7fke4177YNy",
  "key43": "5S9dNCx4TBKFC6NFdaBsHH3dpVmrUC5ryXuYC2cWdPrX4LHAc2AcpA1xt7xWpWB46j5d7qimwAL8L1AYePa5bYgP",
  "key44": "45EyiX87oxcmHVwB9d61XtPaKDZ6psynn49jimV7S5z6thPnytWS6hsNsBk571kgX92pxUCNJFTGG8775NR54S4f",
  "key45": "5waqo8MYkvGb1Jf5PJTeuSxKywPaKEtok8FTd3hWRtxLyogJm2bJcbVG44b733Ax3CF32zg6Q9u5iTZFgYJgnHwi",
  "key46": "NKHjz8ZJeTP3EEn4XycJ8Q9TRscL75oeRzWWpXQr5TcEuds2ZfyrK8efrDjquZgQTqRKk1LhHNrsEWu6QKfr2fD",
  "key47": "NuYrBVowttjfijqjbePjs9JeEwMcA8KzhP3PTZiiNNj7nJiZhb7h91rxUhPrGH5HRyCjUQqUGCVSaczWDjTGR97",
  "key48": "4hSKbvgNaQdhegoNvchxVJG3UDepbx1MesXk4R6jqsB2HTZ11xCVoP7eQegZ33P8RRNpQw8rUgB6TG9C5jw6tb6J"
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
