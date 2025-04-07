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
    "5E9LEAMcPgWzPvajx9CX21ovqzAr6DXfJ4zbEve8M3MiiejNiNLEmck2xe3YiWP2fgUVWQDAKobeBLvs5vuqQGgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnSNpaHrTNez2VBSs9WtpozTs2fdobzcJqHLHseG7He8MUhxUbcYk1AAe4jfpeE7V9yjLMchpyavqwdiF2A7Z9m",
  "key1": "3rJQaNygu2k2qMUggcgQJvmtcE45j8wa6TgdRVCL1nmavjtp5umihj8YqTU1kw1uTDaBLYTMuvjPFNCTnzneQRVH",
  "key2": "53XFvWL57VjV3hDLPEcX9rTBgofxE2WkQuTYyuSoYnAhGWbKzoLnUZx89Zv3NCnH148o3pfp9Vu8DXqssWrJzNwe",
  "key3": "gAC1gbQDScUVCVmBA6sk1nPPawEjk1cV6H3FcNMjp68JzPY17pkggArSEJUfzLqnoDb6tVBNPa1dS9PqUFgKhhD",
  "key4": "owvV9e4VV6my4gkZUWjCeDtPTPvfBTQFS36VCn3JdaGZoJxMamqdjiVWG4b2ikH6FEaqz1mQT68zJtQHrLA9DE2",
  "key5": "2XMsvKheXT9sjfWY4a4DjaZrkapusgkbT2jPs1k52kTZ9vPA5T6E5X1Yrkf92YXNsHzTV8VPNujq7WeVVzsG1jrh",
  "key6": "3r2j2zg1CqKUpvvnQbYqmg7cpdhLZPQDjW8ESqTViFGHjzL7A26tgwwJQZbaF5kBk9KxtfXZt3UdEh5DpruYvEoC",
  "key7": "3zTU19V7Ztf9JBohXpMjGWmmLiCuWyhvVUDiD23KpordWd1zpV45jKX3udaVsvBrar8EARfK4dyFGy4hdYKyRVPZ",
  "key8": "2NAGNmmAY8yL36aqsCSxvvK6LZrKzpRHdxYseCc948frnLmJovyjpH7rX6nL2AASoA6veks5brgc5BaR4hqmo6fQ",
  "key9": "2YJXHVrKxESbBdBfJAyRZd4xYdnFdcZRFLDEY5X1sswyBd28jvh8krWqwJX36YAcCUzuF2EsSqhB6jQuwLm7x7hZ",
  "key10": "3GqzHV2iu2fzyUZBMv6kLtvUdnxQ1XyCHpoU3pdY2pkxyscutB6NeUoyzy9ncAmJfigCLHmcEUCivn62aR2LYabV",
  "key11": "2gNi3YkQ28hqcMv2YmLmsfPyqrZDXxeFdRn8xXkWzAY9XSDqWKMXZyq9zzAAsxoXKc5DnudSW63Z6RVsZFqg7Bh8",
  "key12": "5jDzXgFCYfMTcC9of91hFkrwMTAaUvGqBmA6JTyPUFoSxBNq2fyTT8vyzxhNrV5XxBww68JggptKTdhesT2a3fw5",
  "key13": "57R1f7Qq5USWkD8u2AeSrfeDwur8K431QiREqoEp3p1MfU4oeyY66yMeyAoBgf2Nm9Zp5wRdRkeS6KB5WeEV2RaB",
  "key14": "4uEiuzQu7eko3Wo41VjGmkPqGJ2jQikq6T8z7Hn531sdYRZjdLNgrm6pTFqpAzfmWTJ6DzYthDC4s7kZpTj9jhZc",
  "key15": "5sopbMM1BZctzTDJuyxFVFBmHjqx8k15WZSjUiPoAPhTYWRSRBJajqNMYyy4Rs2MCjFQa3j6fCDK8YBbnTtKHMtL",
  "key16": "2orux8uyB3rNCwtQiqcjzV2qWkyN9fguHFDt9xe55wWmxzngHh1AuohW49JokVWhRZNfYJy525E12TQRuF9qZQck",
  "key17": "5cs6uiTsjpYw3RXdZQyktRYGohYwSJcr2nepp5sENiDpWsZ2HLTE1qe4Wm2yN4LQQLBB56T3UHWe8Vp4gQXXthrU",
  "key18": "D4zmRrEgD71jNTPfDhnm69dZpuSfatN9s5d6qsYvkm14A8fj89xHNT3ayo31rjrRL8j8qHTLuMkyhihdWbsozYQ",
  "key19": "jbgyCSx8AyyZ89KYDhKqZR5FdWT4QSeD9JfPAFTJS8SpDP6BV5wJzacQXQ6j3hWrELqqcowVSgHQdrS8aJsZpHB",
  "key20": "NePsMs4syjBycQaeQPVxoB1kpVLUK1Wf38YQjzVgYLgjuTaeZodYmHMR5PjGtT9qWZa4oZhuuhgt5hhZaoVoH4U",
  "key21": "4MPGXH7JKZwmPhgFZYXiuDswbco1e3VidZXPgCWfuSoX6duXbyFwB8ZpTKfoKmhCtcnEdRaQG5c3opxX7pafTxb1",
  "key22": "3otSCz2hLHPeHRdHHuFtVe65Ha7nB3G9ThiSxagYWqSda3sUDwppxrEAKBu9yUotquyNehY5vVj436ssCjhpnHTA",
  "key23": "3ZGiS8UTS1W6xDg6ciggYGALzgjqi7Xg2DnxWkdSL4ctuUnrJwPgjkoM5EY83m6FPEbsKhCdoe4wm5iCPCdrfLyU",
  "key24": "4FoZQRbKrm8nCLwW4z7WFrKwh3dAta22FhS2ztFTW8t8xKDnwdutuoozZqWu4xC87XGnBD3L9Zn4Spe3Cw2zjLom",
  "key25": "5EE3w8wEdGD8521o6xEQjWxXxHpjWoLCvnZoiGBiSEN3h2MHVoS5fSHxyxs9scNZpZctAkZv3xB5tJTWBSSfUEqE",
  "key26": "5APuh5wBkSLctYNsBZKSP3Uw51qE8WWzKFvmURSyipf2ZjvSjGB9brGNh4Y6TThTXkyaAnrg9UrYiXQaMvqE83cL",
  "key27": "3kCdEgVexzQdrc86BAtsXpXsWjoFMGpfAUcpzxmmirQaoiePKLa3X91B39FNFZWXb1TLT2vwCbbdVoKvZ1cRNYcc",
  "key28": "2aEA2Mjy7j3kYPKNY78teABxRF8irLqNPFrGRF4EvSrZRy7rGvfDWpyydgPL26eRhm6WzCFmwxr9kTK9vYnCS8NJ",
  "key29": "cRAZh5efYVfVfrPwSdFavzuEoYi1PPUs3pdXYkf7G49BQJShRxytQmZ44xj43hzMGtYBW53T9B5VFj9HDzAZePM",
  "key30": "3EmRbVMLhQfdBpU5ePibMDKyDTTHSAqec4jGYKhevb6a11RJEZRiGzBU5tYUHzBUr2wSnRLiud3MYzuWZrgNFA2M",
  "key31": "3Yz1bFGDEfYJt3heMwh7cMs9SX7pSRj4ckyibiX1rZzKtnCs5nvrcmcSPP2TbPMoyVaWsM8crdEKqK7rGqad3xRG",
  "key32": "4YLPBdsX6MdxEdj4X4TuDodYwMWdGUtVvCkhfgFxSKxAUeqmuKw5M3YhKtV1ca2vMz4og3Cuhvh6gX2ekRqcLi3a",
  "key33": "25Ys4616J1L8i2fqKcs8mCakDL54Ph5pMKLBk3BdA2vndj4Wa4g3pQzvnm6bfK7CLk18gRmpCqNC3oCQGt9bjXNF",
  "key34": "3y2gBysMhjbDj89bgQG34zAvJwZd8xMX66Bm8SGSAs6Lqq4nGQPepUhbs1AEn9FnPFuGQgzR3DziLFucd6quuAey",
  "key35": "5gdw3CKHFqButQsvJEtPUYRo6AtvshY1CTXdagieTkqRZcGKLdUpi38GFeiecBTtuLwYVVRVfpBwPCtjdCbKycPZ",
  "key36": "5AtkA2w4XP5spVm4KzwzHA6YPdrPUwK2s91cKoAUbDSRpioqR9vjg768TMSkAcQVkJaAmbtWpa68DYpx2mpxtvYE",
  "key37": "3sfGLDJgXncupogNAi3gBwVikq9Kr58FoUXusaR2KL9Gw6TVJmzBFvsXPy5kJDExQVwdjZnsR6jq6E48V3f4Pqi7",
  "key38": "5k57SeGGgYipZcZgcup8bnKhDrpMGUDGh6iYBHMNXsnRVYCXaqGbSkjiRVERfCNDesMatGS51e52ADWs9uw9sCok"
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
