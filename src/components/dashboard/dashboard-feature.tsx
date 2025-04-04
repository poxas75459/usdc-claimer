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
    "4VsFf81Co1wj6drKCQn3igLhcPiBori5gvQDiVJ4xhwfgM8WqPRpuJer1xCR9JwPvpHV786cu9pBEM2RAUNdXSxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TUWnqg9wyyXakbnAKPnWN33ctWoLqgy2u4A4mKiqgVv7SEnxi6kCfEVoVusAsHvox5avuMp9X8q1EW1KtUZXUjb",
  "key1": "cGTauTZX5wNiu5okWAU481aSEBs8dCFFwYyyeiJnknzbADnGUN3JBp27qtaUMFeBNyHFJbNJom2EvosFRGWUD12",
  "key2": "3jhRVzU6ufzhAujHPG2FwnLaLBJQF2gUjAMbJR4fVrUsXDxsrCcYyi2GsMThduk4p7PSZB3sLz9Q2mFHiik9wc7y",
  "key3": "4wdsCRvKNSxua2JRuvE9pXpG4dzKv9e4tf8WMuuSzCRU1rTKHrhjTi3AmkFWksvV7MssCqcP4eSK7D2yGBhJ6J4S",
  "key4": "58DUP9AQHKaVt97tVF2H6conZj3mA9ipU1nbRE7kwtoVaj7hQqjjhHaUd2r7E2QzwD9cT1zw48k8xY31hrWBGfY5",
  "key5": "2Ph9PPVV3psczkLRKqG4uj9EPNytqoQUV3yViycDnG1hbJohwSsQhYz5wfydyB7XkSKeVWLZz9zhGfrYmYdzRdoY",
  "key6": "2Qs8iwq312uJ7P3HgkPGLAR9RmSWFQakaPBAHcQXqk9KRkeMA3jbCbswkKLU1wwHNUjQrL8b7SN8QvwzknAdCKRz",
  "key7": "3xu4c3HaMqz4vGMypxmdmxf916ho9A5ADVDfFs9tjJZZPgwuF1HeeDmHUxtxvfmjQiuoGcJ1QPBoyYstQujUci65",
  "key8": "4VbWS3G81F6Z3VAtW5Uo1hnuGhG6Na1uegPyLTHJiJnr1Q1v4PF1kSj5DPaKJ9aBK5vMkUAWH97sXsiF5HtgMVdS",
  "key9": "2yiCBXekxwiGvGU7KDp3bpNLSmtLjAk4ZmFSYB2gapUTK446PSQ9mNR4XJRMSTFYucv9U7vXdpnd9fo5jGZTmqD4",
  "key10": "4cGctNDgJqyBiyE5rHjvkqnLcphrFVJ1rVX4yr1gWZXxy7Q7gKn7m3eLtv55nhY3kqHQ8VTBfdfNMkzCkvHcWG3U",
  "key11": "Vf8JVFNyF1jnGnNUu92PeVqJWopXrwqTabF72M5fMpiufXCzUrBLJBaHxRndphQQGktWf8RaTvUAVwRzsCeZTfA",
  "key12": "4BRQdRd71RmRCkDWyQBEEZTBGesnLXCGPgyWwpXkCLk3npr2iVLzwHZZg4Z9PKr5xMppXvk7upakyXw6tEJNxaoK",
  "key13": "3c8bhpzHChSEVguMxWRwN4b72kMhvgQjgeFwKdcTsKbfzEz6t9iuCaquTUELT119WxeJYFj5TBDyrV9nvPLBTk9Z",
  "key14": "oPvpHiLJ6ah2EAP8GGiGLG4x7h2i3LK4Xw2Jm6NuPfVwkGg1cKQ2sd5KJwUhNfRWYwc8ikMRuZMUY8K7kHGdAj6",
  "key15": "3rWThVkwsU7BXaTg3rqncQ256T1vjJd1TD91DRUWQCeXtJHWKckV142GeYKb8vpmYcMMXKkdzvjMch6gaHPX8AF3",
  "key16": "5562Se4EvhWmh6RpGJ3zEw6id8fJ3jWKSsDqrabm54FtZkyXnikdDUxJtVKTBoWc25bEhiN1ivGFSd8uc19cVbBR",
  "key17": "VnKPBTNc13BVop1SdXqsntxPhcfWt6sJvEL2g1RrEqScRCF8AspF2KEhpkknrG1b6s6rok66Bp1YFnL79Vo9Ehg",
  "key18": "2rBsTL6SUMhF6wsPAZLgjTAt4miuZhPtRwNmZsYx4x2DpCXXF5o3f3BwqCVgv139T46pWa8KgjA5KBwZCbgbu53n",
  "key19": "3GMpa8deNf6C5Ewko4k4PXLvTdRwdGBJatFWdj1sNgFbh7j8ku2LFgS4vFYzNKp6GPeD6amBpDuH6pyWL2hxy4Tz",
  "key20": "5TVKKTbxTn2MDvHeHkrC3dCUkNLS14AMJA81HK7oMs3HG4odFciXcNT3fMtpXfMTQhufnMMG9ajRnDDfYgbPgx4N",
  "key21": "pPPnNRGECsG7yLGYHt7acHe2at4RgLFsmidH8zf3M5K8tpBcUH39ZgVnYALPo8XmZyP32wrhAn3tzrjHDoHipUf",
  "key22": "dLZNH5dHwsEGCAFBs4SXdKfbdaPqgRvKnRmDEM3LbgjH7r9isMxoD9a8ETsq1bSxUUT7B6HkKtVXoEBakJTBL4c",
  "key23": "4pSU18yDV29WxuCTEPZVFwKQEnGC2WjiisF2qqPFXLhgF7TJd63fctJ1KDwC5UL4pTCnLX4p5oUbyzgJww2ngjbP",
  "key24": "3p7LcrxLqtBiFQeMWd4JCxeWikAScRbBXzsva8ZnpE6biKmvRaXaNhvbQJmHEWvCqRC7GY5DxLCm5RBYca9dtdGz",
  "key25": "mkisKm5GBh19Yr3aP6Lw2zvCT2wso2QZPTZjgXbuHJSe9Xj3t7AUvvy1ZwPvf7toMa9BFaq9zsJcnBo2oCPJxtV",
  "key26": "aDbeQudAMqo6YfvJBT6PKUMAMSfTiMjtJDLWWTDFxMoRx8Sr5CKZRYqy4intpYrLBxqMUXvgNRtL85y8MRVDBuK",
  "key27": "vbTjBdvbXc6CrD4cGqXgLWhpZHxHCkZ2XjR25MavQCoxHVndTkHHrK6g1UXoddF2mGVypA8MH4yYTT6mjZTGG3F",
  "key28": "3fLWLu81XdEgm8pcYYp79BkXKJQ6YHz2JCqFPtA4LVidgndMCykaTysY1xRXgwH1fN26bP3RthLz69yBVUNsSbjr",
  "key29": "dFo8taopeZNDPw5Y8pDxoJNVRPDfGoH3TvUKq36ZirCYicBXNQfz6h11ckr7B2Ts9WgVv3MWAAGSmRbniwomtyK",
  "key30": "511xGiRASCJtSzTwLGmuzAyza2eLHic13KyKnXBeQWxa3ZHZSDKk7h5ELbYEwr16yQoe9cGW9Yaa7TVqaZvnU9H4",
  "key31": "33XS4ynxraGyiAYhcpysFyyodJvxCsWMSVAqCeBULb6cgw3hJQ96YCdq8Dak6vsaCMMD6gCfAG1cDRKUKJepbnj7",
  "key32": "3DZv8gdjUBoyS7zA2e7XNMqcJazmz5TCciELNN9AyK6Zd8qnFHNH3BCMdKCEimo3WWvNp46pMay3adJgVJLVG8HY",
  "key33": "42hoG8ZE38YPz41LTSbwa6YAnStTrMh7ro9tqA5nKcuAjJbsmQZ5dFpk4Nob1i9HCU5Nfa7WCZiYJuD76L9tJVyS",
  "key34": "sNHsGAHvWpHghkXAN1YcQn5NW3ZdyfUvbYYJk5M6rHePmFMyRRhjmVsSrTdFbxt6RhPq53FwzrSoi2c4tQtsWFz",
  "key35": "34g4bApGXxCj38eVQqk3oRVCA3Tf1zYSBwSqLT9Fdn1irEgJ9Y2ek4NgbuVK2yioVLD3rdu25vEGcknfXkho6R4o",
  "key36": "3gf4jDkQMNVFbuHx6gxRgaTJ1cg8w7ATh6ga2jyvBztbezsaiQHqCqiPwhbb5iVgqA4dbU2kkU6KE3AsiXf6sNbz",
  "key37": "hmKMA3hV7tgzUUDXaf6aiSB7AVPFG5Wnn9LLrQtriBpS34tqwwjiqbd57shntG4AaKNSVRxGnrLA7KvsLMrKWck",
  "key38": "3H8979CwSHAXhxnpyANoQX5cCehzZ9yjXLv5eSvxwxpxuq6EmVWCPb2Jyn4JR2Uy3aFLBMp98SCdqh2jJ9MoGJPW",
  "key39": "5eGopvuHaXnu1tgM5t4VsQYBvVQygdYKhtQVQ7vMwHqJmoZRbFpP4jCWY4eRi1bRV7tgRZv88ocyLvFnZMY7PwaA"
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
