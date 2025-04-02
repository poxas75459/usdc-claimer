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
    "3ki8vo75h8rYhRtKCR7wbkeP2STfbF4CX6qu6NPV9TyN51KEucsHT4Rry6GyqvWkazM89zSHBDvEVdELRD3yeK5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62E8cXEhGNeGDVL9vgFwuZ8shxpGcQ1b7c4UrojqFAebuUcHSLGM92i9gAj9AaCQ75jJHjGr2DDvZHPmK487SmKF",
  "key1": "29vSQQt9tjkdyqRJnTZQwMG2aymEETtdMpi4EShLmBpm988mc7QNJEcDFVqs4BL93rqC37PdSGgn4F4CM5iUWvKq",
  "key2": "xXq4tzpH8UxHj44pmrWXhcuFkuZAzEHwEpjukqqEXDvEiaTvE1jsJcQpzpKyv6mcodqKb6RySG27aXZsfY97kzx",
  "key3": "4qDDnNjMtfsk9cnhSxpbtuFJWKWLkbgVzTyNaYymBjTH5f1kiHGUiFHKQXbKnEYAc94gx7KF4jjg534FNv9z3XFm",
  "key4": "3jk2rfpjx7ck5CR2yG6N5GGRSTpghyCViwUhUJsy3zqPcCdexh8sCAmdnXBPJrZTtiCxqKhqCRrrizHbGYo1tv4P",
  "key5": "4yDJ5QoyYRYTwE79Yxy8fxjGcpyWSkaeLMDNvHUH9hrJJFGbvBfBrwJ9P1qyiG7nVGQXTEgr4aCGVTMzft7sy6A2",
  "key6": "Yb5uhzcrwLq44LKqfgBg3jXa3Vig8B87YiVZmHLGteH6aqtZRTqWVgNRDdSoXU2QvssbvKKHCDfWsrvHyuAz6Zf",
  "key7": "5WxiZaTYCzbGH36RF7QBwf9pd7QLdLSqMik3fBG5euaD8xxBWYRB7xgbT5RmNPq4uprhXW8Zz9zYgGAg9FQoNmqP",
  "key8": "3r9VYzFFMJHhcWKR3uSNhiKGdHhbK8ReS1Qqii3PpqxBm4UdRaq6B44ARLL1T1daZXvd3kWdo5VF6fRhYdwZHtBB",
  "key9": "2Znt33LfyZfpoz629kjgDxhtAgt9NMkfbkWLHFt28FFA2nvU1GA4F7Lq8e6wmqHteFogSjL5zw6AY8KhKUkdu88b",
  "key10": "2fgjJu24aUqPLmh4L5Xy82TCrxEGUaWUT7swR6h8jwEG2nPzP7fDq9WETUBQUnroAWESYvTJkvyKFVKCT7Wo4C6U",
  "key11": "auw97fGw3aN8z3ZCg5MQMumJ2dXmVDaQ1SByv3Eanb7i7EDtZnBCBmtw5Eth46s9cM56DMYj2SoE5qqNu6yawfw",
  "key12": "2gm5wBLNNavjZfiUkFCkcbkkFQithPoFptW5tEQ8xSupq2ZxGcS5zS2UZbuvupJ2xuJcVp8kBuJbYiRYkmTN7C7H",
  "key13": "bgK9wUZr337UNqRN6WmerHEk4c1my2jEkHra27mna1rEEDbs5B5oNmnPp1tdBhKPtnUh935h1TtgXksqS4mApeK",
  "key14": "2wQqivMq2NLSDyeLHyxEokgSBT4hxj46jbyFtoVYi3cpAhMuN4wag5e7TXU72bgZ9FesuRDus3VvFW7CjAMNChz4",
  "key15": "28BqHD3Kne9p1HiuHChm6C6pBoJiKnUPgdr3cCNmerJDGmwnMugMuE8FhekNFewpMB4FmLt9nnvK55Ad2tiohYty",
  "key16": "5SR4WkFryaTuQnYREp72GV9sYWvLpTQBguW5pTkdjJQP6dvMfuz7Pjo4S8U9fBncHtEo9cSWybPn6GECDDRxyAQq",
  "key17": "3ERRGqweRF6gniZCoaQ7VuysaXzkgJo4btcnEorbY6KSKKbEBv5qhXPazCgi2sW8yDHUQrDPbvk8JRvyPeyWJXq4",
  "key18": "3eaBqmNwZ37uW24hV7DxU8KEhoRRTjTkHwmPuCoeGinSPqMCxZ6caewY4SuMsa6VrSK9zKfFC2dysBWPnHcFGFYf",
  "key19": "4g62KZnfuM47tiuendrS8LDqMXZCBdgJXa6MbxUvLmLsV14BoSpeTDC8Lu2eJ51aW6PpUSM8YxmYBGqgcg4FUS9p",
  "key20": "2EGQ8NDTGMipvjS1KFe6Wsczx3Pg1sMxm5k4y7aMg6K5BaJqmkEq4dxohGUTjJjx7rCj3oFMHswrPhJzUKhYvu88",
  "key21": "cm2JnreEYFtvaPYPEQTvRAZRnMHA1WHGYpZuhKTwcx8cFo59EUjrEcDtUGAV9AM6gpoH6YitPkMrqbjihe1zrko",
  "key22": "3knWzEuDv7KQfNEpTK2YN4M8zWVCU6g2HtPop1iZ1R6aRWRGMXzFEMU9j1rVGhmh9TawtWCqUf2PhJ6iaSvKmyEz",
  "key23": "2WUvSCq73qKQ2T3D6QPZ8JWEREvkgqbFA9wCmoU8HBtCr2mQRAhJmFfZF6mbZfkXQM9VAQTiVrD78QJCNf32w3rF",
  "key24": "28BaWGLwHbMAnv2hg9CGzVEUTLKBCyXbEAxovrc3nmZo31VPuHi7AhKugwAgTqpaRs9hhmWUCdJhfkf3AtTJis1Q",
  "key25": "2rAUGdL3wron7vu2mmGTPGxvGsWsRPdTCA9PQWWMEfyg77pV76hV6L4GMiTsrPSZoEEmdpVRUTmuHYdsMaQ1E5Fg",
  "key26": "5kKNtJiJHQ2hB7AThdLDCBgM6mGTL4kgmDpWEwsQkGc7CdRKgrbKB6ZV8KgwUheQE2GFKFXGADymFqgpZz1xsMvw",
  "key27": "jynZbcFa7w4WXmvndKZJLjqpicYJxaQQve4i4n73Gs2BantmS62T939sYh8meWG2c3B66uMgWnqseZ1haS2bNVV",
  "key28": "5WpX6xkQXTkrjDGxZ3McCfTRsRkqjz5xi3aJMjSp8XxbV9yeZnyihUGBMA7mMMU7NWvfzBmgFQLHgLWTLF6pvtP7",
  "key29": "3gRRuNE4gp1J57D3LABX5ms7ra3AA7SoXgc4W2aJP85UgxcBJs7noxtQAnoEfkkwVWsejR9TTEGsSR69e3rC7ckF",
  "key30": "4GF3iBRAVB8THQWT13PJW8rAXCQr2DFr6RvNhcXa8QANGkMoU14FXFT4RZx28smWtDK8Y44u26d3zw5AUweBULuU",
  "key31": "3RDmYwcUSdCLVRd2LTKbaVnuwJS2EzoJmCHPF7jQFNuBA8eM6KN3JLFBetCqQjLJw2KygCqKqLXwRdwyTQt2r7VQ",
  "key32": "2afBdkJy8NoWgAJUiXd21EPqwuy1LhtHDHbGNgAmstVCgw6bhCCdVContwLBj7GJ2ieNeBjWBQnL2UtsmVkvqg34",
  "key33": "AWxe89bx4LM6yLjTEFLkwjhgTESCNvsdF94YdPWQ29coMAoBRkfEYkKVDFXaoiCBcSNRatMTzy4cmsCdvuvCip7",
  "key34": "3BUkG5w1AotBQ7cs7JsnAeQRRrn1Hjz6Zht6mwAnnTpmsXJSgEuR9HX7gEAycD3apfTcqwTNGbDs3uYAJK1arAsy",
  "key35": "3d6Gj5TRsBYpym9wfGNHRqtckrMD2PmaKqfUNAR1x2xygToX8jGTH5wWhQrCfdLMavtabRi8D2gadAAh6pLLpBJH",
  "key36": "5AjdbRDFNbCxYf46vFa5AkuCoWgDhkGQjBhJ9VmkFmbhn1YYgVWfvAYzmBbhmKFBMxq11uGEoTxc2zEet5cxQrXj",
  "key37": "RBpYchpWFxREYHCWLpUdA37T1Dz2dN42FXCALkfZSK1ziZSaM61xmXxDo1fuJXn7mLATjHxQWnHCTkBkCM16PqZ",
  "key38": "5vKoz2MAVwWq7awcwX6YngXYtmCTrhtzVkSzHF9KSidTa6qZhUu1o3v7GhRfuMGyPqrhDzmTYMerXtpP7BKHsoLF",
  "key39": "ai11dzRVF2C5gB6TM9fQZbfEBKT3jHWTSD1NnnXapRnZQtT6uDb4Kkkpv52cXGDvC4CPv9AT88kLPmYKuZnrNJa",
  "key40": "2HamPWatScgDBiQudqkuKgDPB5avVDPNoFqF44QfxPhGuVevUQn3iDGX4exJAmUTVpoDb28ytBSFcyvnuHLcscCf",
  "key41": "5iYWKVA871NKHaSR655Ui8u8UncvkCpSLRcrDkHbUFqPi8VN83y9HsyRR1VmHM5tUgfs1f7tR3WeJrS54ucM45R",
  "key42": "2ZJ6DgNRgXsWN4RwcsyN6hukXKHjxAH8B2DGeAWbbW3zUUKjHUNgobvpRwcvcgWyYPufaTLTU4k9SF3QFnhU5CYg",
  "key43": "679k1moywhVo8y2WPQYatFdxyH2fkMj8eg3Tt4F3UbznX7D9bGLrgMTNMeyiU4noSGm4n6HUHNqPcKzw1C6kthGU",
  "key44": "3FoHKvzvcL459Y1yNu4o2FecFByAHbmpmG4Jv339SYpLqjuMZEiVMJ37Bt4AuA51qmX1tQ5pJS6npJ6EWrbMhi5v"
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
