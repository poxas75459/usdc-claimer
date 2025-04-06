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
    "J85AvG3knTKcL2MVKdaJnCyG4kn7hfXj8hfTNkhomsHmCQd3ez7JUixqyMg1vn82KVuYQHFPPAPBACvacGCdHxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PForZWDTUvstqij15jyTfxy2V544pJwyDa8fDN1uBTrmojh13dt76yyQsn99AzT2ZUvBtMDvEpWHJjzuZRsFy4f",
  "key1": "3k7zNuL488vUsjBjnLPjmFgFkLJKnPG9Z4fdbeGn2yFjtnU6YvRnqEZFEUDA3kkd7eJmDVu4t4E26Qv93wiYXmRb",
  "key2": "55QYerrhxYbiFVKavLtdw1mRq6r7vrkU6h79Rg42ps2TkGW3uRRHZMZtf7wbwJ2NSap4C4K4JXHq4cSjZaGH1bcz",
  "key3": "5UMb6p95FquTyrntWhy2pnDfUjXofpSA1AgHdDWexvsTc8niHGPoxWE35bNsQKGo5AyQBootSXBgnbehsAuzc1ZQ",
  "key4": "2Lk71TRq6vGmdyXxuCGmrmzqLM6HuXEZVMVSDuZXi4BKQ6e2vmMembgeYFYCFtDYf1S64AQqn8mjDGgxUZFGgXs4",
  "key5": "5ZEF92tu4vHDEBT5eGbnRFJkRWipKbEs5hJ7J6SUuxVvwV94CiiVLTc5bynaR4qVs4QwzDk1Rtmn8bQpRjSQuZTc",
  "key6": "5ZguZ7Wp3QXZnregfXBHiywzDGcRURivyiA9SQNbKS9ta5zf4yEmyQ5CmFFFdtxexEFNTEkPSH52vVKFtQnwoWzc",
  "key7": "5Q6eGbmMH8TaAgiXKSzrYTSDpzNYx7fYMnAxap76ptDrc1d1ch4xYoKf4mUXM1usEySWZSAMhMS3mNZD3kxiCnNL",
  "key8": "iCjX44GnKFNmHiC7M562xPRP1UACabQgaR39iGV9oNDd8NficHZdJt6eZ548ghHmpPkzUmh5cuyvTSFykWJzNm9",
  "key9": "5reSREP76HZ9eHM1Updtm9KkQ9ogJXNA7URwYgeH9ha19aZp7XxK9BvUx9JPhJBwZvxRC6PkQ4Xc6WXiX8s3jYEx",
  "key10": "4kZ43gL1hE4m66CD8ywZJd5jxGt1vT4ACet7NKtsgmPeCkrXhsALjNGtEsyxN4TyKDKYUAerzP4jHeZoU2uo2myS",
  "key11": "4cMKT8S9oAte1RsdeKKjfnbUU4BQW8LZLguaRzzo72s5b8Ak7DSyQcLvNymWMB3ShDvEchHfRafokvrY8StnwTdm",
  "key12": "4H6ZXtr5KvxxfwMbrroN3VvQeWAxkHpUp4hZ7966WmYcWnPdgk3Ke3wTugrKF9e4UWZWyoUJi6VkqdJzT1LfqyRF",
  "key13": "47mPADUWNwm5MbG22aQi6zqRbca2bvaRB8ZMyHMx6GzGhgFgk9MATPxsLAFggUZD894mSonydn11mEUCgUCZxHp3",
  "key14": "28paJRvR5VewzRqny22AQbZ9MqMYZ8dBCyKweQe6CrjstQZAwV74RxSLSUw69JTc4CkHynsf6N4bTJXuCux8sECD",
  "key15": "5itdkNSiAneETW3yqSV5j6gSMnfMJjeJ9XfBVH8eWcquppqUJszhmT8a2v4RuihGJFK8emRNGnUHKaFbqb9t6VaG",
  "key16": "2KiGSJW4QdoDYqjo9EhXocYmAthcA3nYFzoN1xtcBa4SMNjwGUZZ4aTLn4J3KysenNdGTRzZof6TLDZtgFvK8VMs",
  "key17": "4JBVppdevTsuBw4yKxSk8NLK2P2mcPrpDhHmXgXmRwuXow8pYxowgjFDSiHfHMzdRCX7phx1m1wPNiyjhBSLjhui",
  "key18": "2spLUm9LK7FuMvMjWkfZJUy9MD3BNHwBet8J6H2C64kuJ3o5iy77kKa9Rs6q18ath9mTcjYPXbi2r9EU8to5VhMt",
  "key19": "3kFBT4f4TR3QBt5MvGJ35ViLMpSnH9RPjvZM35oCqDYvtSNcuJEH9LSUw1jz4vRKduucppz9sRub3rM97fioWkNT",
  "key20": "54udY9KxNDYULkAeEGakSxUy6XXzLo4PSsJ2S8BwdiuWpu9d4XStQSvrnkRHxjDfWu5eGGhdbSLHtZXiFrapFDmy",
  "key21": "fTWKhaE9HpMv2DbzkbZxfMF8v6Pn3phy3jUT6qqqit2b5h7WcZkMi6Cmag8YuNWaiysSCoNdnMVUfQ2eUR4Qi2Q",
  "key22": "4SuSkrU6Nb7pXxnXUw4jpwe6RpfKCEyzmyrzN7SHs4jtsUbaQLeBYvoqbkA5j5EWa64YnVxBXMehBuZPpi6W1qkH",
  "key23": "52BiBvxwbzFVJetZrn2shhYyFSA3d8244SxLbs62VjuQCzRH9NCj9xUr41MR5jdfDLqQwMyFRchGJmCgE5oaP9i8",
  "key24": "32Yxm5RmvhXaKZ283QGFeL2hRRfR7GdXXxydUc4zQk83UdoD2hUucBknZsaorJymLUBd9rL2jof23wgDfrTKpg93",
  "key25": "V9YuTJXVU5QxGQzGbf6mZmJtZ9ziAHwZY4oLQzNCUancWDtNAX58sXPQ8b1yryozeGzYndMcrnHaFHeZNAzwcuf",
  "key26": "JPqVAMmFx481iSSPnh1cmrxu38dEGaDTMymcVmQK7CFXyZsJeRQf1HEkLHYNwiY3Xa1R6SKNfzMS6EFwGgHv4FN",
  "key27": "ADWRccxy9nmbUZnDwYtDJc39dF2e4RjtovhqckGFEjKJDSXmYGTjCEtecqf62ZL4jkFCs7xpHD8j8aQbcKENMFC",
  "key28": "5WVFHdUy32AwrpT35EWhtUBXgAsuxMYWcmSJbZbJe6Pi3VrboUsERqZgSQmQN6sSLgvqYWhjm4o98L4NYYxxAoBf",
  "key29": "3rHTbP37b9wtM1eyEuoFbyG425yqbQp5TzBymmcKcbPZid1rZGgQ6DuSs35pxc5c77wymfqGYEbFZpwnARoFXbcQ",
  "key30": "3daPyD98AmtAve8GRMCygxzgrASnSGtbrNtFoavDAvUYjVoPvERWuigH3AByUfq67NfcrWDEMRUviG43tW7Dq3Xj",
  "key31": "4EDNEFA7tuvr3yzsKsYWGYSnqoZyEtdTiLkrVRgPDaXEXvddjB6RP4a5BbjfBnf5FEiYZ9q3QMyHL57m4EHyitNb",
  "key32": "4sZuE3YTpncx1ubKFE1hwuZzXSwWgVL1CENwZNuuTfDgkwa6fzQTjebKy64cciLkCFcfxjcE8asidmLKY9piQpgV",
  "key33": "PsNvswChQawEhuLNEr2gRt3ATKBsLa3HheMHY9bTdSz5o4MrG6tfPzi6NSC73pNRFzgYH771yCtwoqvnLCpNbzQ",
  "key34": "3Ztobj9maa2J6uhVJTjcf49hzSNPUNncbmuCrYvxveDahyr7TCtBQBLJs7f4Vcej19feujngcpLmGp2GXnCJELUK",
  "key35": "3zYhC7Rm7vWbYFpKNGKb8xy7QfiLDPvkrHTRbLmzFXXmUENxbtB5mrjCPNqsZxJGgVL3bFkT2pGTG69Nk9La6Pnb",
  "key36": "2ed1gdNejccroecR45vYA2XeZeV9Zrp1R21nLY2kvxfVXPDMqmTWo8Tyi4FMLk7heiY1oK7T4qmQ4KUih48AiP3z",
  "key37": "1tMdzpcv1ZPGdhuCyRwQvqUh3yu5GLgffe6dS76HR5b5zFrYXCEj5XkELi1jQJ94aizmCPAZKeY3M5NZsG8tKQT",
  "key38": "5bj4QqAyyN7cnTbT3r7sU5GNR6kteN8nnGQNHNQwfRrS8ij8pnNfkAseU4ZL5Q1uv1pZ9189CUcHXwpYdLkXCvP4",
  "key39": "R7AC6cVkwr6QcndCiUi8f36RfNUzzqVZ6ksAsuUtsZhzQet785AL5FHtuPv8VqRdj8Di2s7swJVBubv1z9aFVCz",
  "key40": "4K4gH6q2PFAuznJ83JXcYvzs3rq51V1qdGZ96WigGK7m9xvC1QiKveNVQAjKAqWQ2nW1VKhxQSMFsC34brsBj3NF",
  "key41": "RM9oQ1HnSkF6TDKskPmjRbRNouoTQNwBbYvafHm7SRiohqz3DoJ5pnAzzTvbq1cMTxDy8UFFivwTEY71x8LsN6P"
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
