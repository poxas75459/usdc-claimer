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
    "5aEKdqpsnkNETseZWJAXabgCro7oWhhRcwrXYW2uHNKpHqS5XvVECZqY8SngXpsLsL6dqjviz3gN9JoV5sLdo1zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ex8U5gr6AmkjPCzKvbsnshLGeKcmwBgia1tuev8VM1Cs224GGbCsNL2mFg1T3r2dQZXN5js4ErL25rWbS2qJGoU",
  "key1": "41tSKPi241psGRZMWrE2vZn4y55BdYHFyLUrPpx2eqAZLXaXR36Ndtzk2NLVPSRLyx4KmRP8o1dfnMpYNSEyyQBH",
  "key2": "hqXVrxsjWffPqm1e5o5rfpyvwimZ3P2zmcV79WDeiEekpBKg75W6PPDXkZhvbyeVLQrH9mkC1Yv1VDCz4m8L5v1",
  "key3": "2wwKp28jNM38GPbVCGmJHSwWpiVL1dMdCzhM4FKsHjD5VqWEZyVcARr3XqTKGZJEDg7MHGXraqdhT36WpjFGAjWR",
  "key4": "2jCa3vTusCx7vnRLQxJzMN884uWNrvuFbEByog3a5krwi7bd4cRF1wSHkf3uGC3L1zXCeMJ2ErSREpzz9VMTUY9C",
  "key5": "5Vp6hQwkAPxep5Fc55MVX6SEt2cYWbqe4vbw2Vb5Pxq4yJpRR2zyGT9A2VgK4AMCn5cnXCZrWYnD9FVZPYJ7GDwL",
  "key6": "S6RrKDduUJPG2WeQb6fV6JAC7UUMcW4cFiRCYS7gvqPHkDNTMbnm3c1T2o7wMbggkw7qBaAdjfdyCFsMCGR8xb2",
  "key7": "3hdPucc5s6uPBhkB55vcU68cdE46iXvy26gUsBwxMDAnGURM67MovqQVamPQJVs4yTL2BDV8yCAvZDFeTdeJ8HfS",
  "key8": "4ycJ1iK3thX3wkNpjeS7QqYteRyfcTzThBF7yMfANoUiAs3uARCrLZ6A85op39iBziyvXSP1EBzeXJ92HSgy1Q4b",
  "key9": "3WXwdTQ1zZr579ZfD8d8HsckfiVbHBuYN61VeX52EjGCBCChaEd1Xd4Lyj2gzKpvdGW87M7nquLSaZtPAH3SgfDB",
  "key10": "LZqniJ7dJMRPnFN81iWmRn6CC7R1cPHv3o2nb655ztDuhE6eu7qHJW7axsG2FE7dGutwnNpLJAmbs7NUhmGtBNi",
  "key11": "2DXBKDS8x8MPfKhgFzSB8NLwGf4RhSw8dWoxJn6BFBXN7id9WJWerkrCTy8GLscbBrRRX1d6GeVYnXBxxG4TMPHH",
  "key12": "3NgjvwxvJMMfEmrWW2yckWY1gBDGYdg6CY6BXTgawovWynBT5jNVyFRTL2ohn27QZUxKUbH96ogfLV7UTbwMitQH",
  "key13": "21iDGNUMcV1995XnrSRRCnaJU7V73trUh1NFGMCtD9GFpbiPH6Fo7XcQMYwMHgAjz6NMRUh3kAL8VTJ3EZqLpGE5",
  "key14": "5YQjkhSgS26mv9RmiShX1WKsU1HJL2njjvbCfq8LbWuaKZoJ9EoAejAs4Qe8TDjSHtuRyFCpFs932VZ4nCZfTaSq",
  "key15": "5ArbZHZ3WtXFx2KS5cwYpxrH1e2yECR9nxPMenkkDXcMV4yudYAzirUAqMoqy5X2yARioX1SZ789Qzpj7qwsMbrq",
  "key16": "4sTECoMmXw2dV4cKDz7QonqT48rt5ze7g3zWrRJFbvGuWGwWpZnhjb5JmuTaGRqkkbfhGphzGb5x9XbbuGb6qAc2",
  "key17": "45aqu7v4kWS7GyMfgydpFZaaPoZvC9NCS1V6BW7Z5NgCe5qhKqBWzDmQ3BvKZV5RnsagXr3CucHJLQhq529Qfnp5",
  "key18": "3qsYict6neaUybs2VHjFmFXtpc96rhVg4J9SraWT5YaJgEKkpZn1iqZiVkBmtdRvAfcJVgGDhoAwzqq9bzRVZaca",
  "key19": "gRWd2gceTimT3P1tw2gD2tNkGjtFCVZLYekupRTV7xeTMPxMV33pnrVKZZE41t4vNnVGMv9yxPajtqtrWGitPL5",
  "key20": "4cXVwBdS2PQTwzz4rFVA1kZRn3UqipPA4iRWfSJtTpac1uQjWZuLQd75udjqG7Pk8kCn7n5w1HAfza1LLUPPPEoR",
  "key21": "47Ft5z8gXC1S4b2uRy3WTdB3a2SrM6jsPY4epynDyE32dp3vwrXixbpDojg3RWLARA7bC7pDFWvYUq8e76fQG5JS",
  "key22": "2jqBQtYYDPCyxRhxKXSj2pJ2petYZgffPnY74wwkq8VLn9v84bRssB1ahAQVqDwEDfCQg2RBAc64JDJGhQZC55aD",
  "key23": "21r3cBfw1zx8aqvA5Anoe2QbiKuz1jJx4kvQDFrHJQAENUFqCtAZHyYADR464oZcR6hu26HMPoESP63hNvFJASg8",
  "key24": "2g6QFKdMDc9jXRF2whPoWD5czwvea3rKf9HeS4K7DL1yreqXB8AvtpFWwfBDACfC3JB7PWMUp8iAePVKDiowfXbd",
  "key25": "ptpn7ahMHA4VAf2oz9B6XuRDErX1bJbmBB79T2zoMdsMBABsTgxjPB29gL62BXTEVWABsVWwDyVFBL2HnpXYaGk",
  "key26": "2VU9wHmf1s27bHztDFAKUZcXcVaANgRjWCvnwCTer9sT6ohLYAd3HsDbV9nG3W7vi5BcPpW4M6Bkr12ssSMQaebb",
  "key27": "5j2ksYAF9ykYi8T5C5hHqrBMGVBiWjaRKTVVDx1xN7cLYWzhr7MWJHwzPE3epgcAJSJAuhrnJdXWmzrh3KccV17C",
  "key28": "2HtkmnyVwrUo93km56EKTNsi6brdZbTi4KbJGifi9hCTA1Ly1CDXFitdsXLoiosQjFeWqSms6FQ2K7QvDMtoJYSA",
  "key29": "4oD7aFJ87fqzXZsxsLDHTjGEgBM5EAeNLeGLJoU4Jbgn5mnSRv9sUdUud6ZW6eri1XWqNzM94vVNLQXrZCLF1WxD",
  "key30": "45FgpHjtBtTb9qNiJGTG4NTGHfJS5smh96QjLDhbXMc2cFgp9wcNEWKdna5PATtetGHVgE4r9z1e8MSQhLzdfX6S",
  "key31": "5tqhKAPNuBgGteJiXeNpGn4RrmtdL1F9BwCj4qcLqYgQ2ZSW8PysxyCCxkXqSUAHgYc49voVdmLryRY9xxkqjasa",
  "key32": "61WRHZVFWGFc8jfVQCHTP5EDKqf4xasd2rXMNHGxpVbBZroCHMT6i2HVnS7gw673r9bvwxE5neRKyzghb1Nj88J",
  "key33": "6DDkon6vL5fy1XuXCz4X9hP8kAPFCzqmELuyb7pt9SrHVxZTSz2BRgZVTuPgFx7oecP8aDu7Mfunt3GYtiFJsxj",
  "key34": "3YiP8f1XCb2ZitLAYuxAYJ4SDQbqoZMHecDJADSDe9f85S9YaqGeDB5prGqFDDnEPDsNhr2dju8LxwTHSHXsq9C7",
  "key35": "5vnLzPR4aMtGtPk47sQsG9aMLhuAYeTWzGEsNiKAFKDKk3pzd8mKcZDNDr1MM3KMv7EVVJWpHBVGmWBP7MUt9RWu",
  "key36": "33aYNJ7bRUZgxzjqaBjpBSkjZ3k93srKKubwgiHGUUs7oCW4mbo7SY1kHcsxkeBn4VjXfYTbwyEyyhrii5Kr68VQ",
  "key37": "5yo2U1eqceUdutRMqJsAChv7UWEi1LaYNCabLJTLhEF8dTgs9N4pH4f7CuZoqyo4ASiyidWgUpexRjArwuxYb1SD",
  "key38": "63D5rrgpZ3YU6ZMassiecK8ie7FGDbhepcyaZqVtULt1oR3LhJADWEhms3v3oADdrMDrhFxHkzZX2NVPo3Uk9k1q",
  "key39": "3FFUDnSgzLLAQdhFpHqCcmv8fQkvmAqkGiNTk3bKex65o4DzAmEPYKQBJdsm4R51eAmMvuKhMs74Qnb3QawhGGc2",
  "key40": "3JSEjMcE49ShgWmH5dtzWvkYapaLPKb3RL2tuFSxnzFhGHZFga7DTTSbo6qK2N585mp3PSLtM3ohjfZ2vR4DLLaR",
  "key41": "56JujUxuuJfwu7bJCb4UEoN17Bxwu3G1CR1reki5Qku2mrkgyYg1AEU1oPkqKzzPXGPTL7ZecytrnVc8adaXu4hq",
  "key42": "2eJ9KwQCEnTHjPRcwsqCNpReLafq7cAp2zV54oo683NviW7EELfgPpigtioWxqbdoiepCiNZKtzmM1hiJfRLRzQW",
  "key43": "WaFfU7ffZLnjvYtkY6Q4eSfiJ93rSxrR7n12BthmzWsgNFNdwcCfJxzQpNFsGvW7LzVVPcuWdCx4tERWuS9ApzT"
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
