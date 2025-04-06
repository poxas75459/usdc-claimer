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
    "21gjXUqx24LtE4ZzcfEmhN7KMgQKvw78m5oTZjEXs86UWaJdadmUFZDpAQRhpxokyK2rLaTGX4y5XWPFXnFCTM3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkvz9rRcPj9Re71SaoPzuGW6CayW6APbdzBSNYpkfAGSEAUBZizw6GhNS8noeVrxjuF5LN6XSh1GMnLvQcK1eTF",
  "key1": "32RLCGnZStpHJtqEboBwGhNJthD5R3W7SaKUuv6P6v4K8DGdCYdhQewN9M1VJ5xPrFLaxMFBwgV7J7SeFJ3psFU1",
  "key2": "5dMCb4jbrHc4eg5ZTk2kaCghaTtturmXBcXeKhhBe7UDmWjLxyotYsJzYiz2NM6nSz1QmmZL3RWTDP6RK8MGfpka",
  "key3": "3HozFsMQvWnoeFdc87BnRyxUaUSEEkqJch6Pu7XWoNAVKs6zkcpVm1XS4BKisjJ3KPChFnmnY2xhsJRX6dxAHpEo",
  "key4": "27ixFbf3qCd7pt6Vr9fofpCvdqjCYnt8m233x9kAENeHYn96k26ZLev2LAB8Q2cMQBwRyi9WMQVX3kkRP1bF59Tt",
  "key5": "4uLs4fyC2cmpjQbPT3LYwfb5sShQakgswJ9uHcXH8dNv57qYsF4k2rF6ewEkGDTMGFaZYwWFB8GhPQQuZVjEbSpU",
  "key6": "3Wqam3sKE4rUWCjBy8bcpLVYeUZCW7ALWDg8UWVPvJ6HJH2KUFBmU9nzN7JaaKfAt1RgSnpurd8stdwVnGrbkiBm",
  "key7": "2x8toNFwuj1j9GLZ4o4vUyHHavgwFJgksKg8d77yGkKVfxn8zSuARhgFtgK4bZYQqqxo1iGDmsiJrzj9bsPfe9uY",
  "key8": "5b8aLkadGkyWaJZJnoogtRtUPeXGdajxG8zMYRTw1kzionNCDHdwuzspzuXY3oV5ovCiwm3fzEJ1q1mR5uijrjzU",
  "key9": "3nHG6o6X99zqxYJ316tk65JXvt3vctjekZ4BYxSGTc9S3J5aNZXoFUTvEQCn2LGiFT4NdtK3YDFSwsk4FnX9uzz3",
  "key10": "rM1h5gLSxpy87PFgCRPaS2d46kQF6zbTZsCLaFL13MGAcnpCYkd1TBspmCjkj9c3HTqLpiFY45ZS68RQUoPToAu",
  "key11": "32tF73RN2omZYUc2AoAAzJHRe8H2BThsL8JmaJRvarSpfo1eQXpn4rH2a8LWJ6bkjn4eh1jtsvW9Qmc5wqbJwN5D",
  "key12": "Pg6B2Z8n65pYt25RJTEbCmW5oUeeywkRJ1p7pomvjQY7ndFEs5uMCVcbzkKFUA5krQURRWwx4rgfP3k2CaFP9Fa",
  "key13": "49gsqDHfWvGpSe4rfw2WDCSk3y4PddjH7a74jXxntrCwcmFv3413usByKDvMkdzVSR3TkU9rSGdQU7ns1axgVbo1",
  "key14": "2SbUeuhsM5XZhVfgwmDX5C12dXfpsSqqdQ7odjwUgEgzAe7QGBhU65VVQ9LXZy9FPFdUr6fRh2WLvPW3v7MZLXEa",
  "key15": "3u1VcHRYxEhwUbe7edsejMP6N7h9wkgwD26KsAmKXXeJDahkXngFU5UsuBSgegxgwMfVAJjXCyM32gKfL7hBvnUt",
  "key16": "5H9ucRRZbkF6ncBsM8aKGsiJjYQN64ZKUASQBbsBcez3hNvwc53X2fmSLzRsioDms6zCwdZYdDKtMyMtUgkZRw1j",
  "key17": "4Q383pt3KSBwqtBhYce5pBFgyEhWoMR3U2dX5SGVTsV9jSr3VnRmyU9gAjKAambZLNBozvgDXStCZoZYP1eA5GqQ",
  "key18": "36MdpgZf7ADbSBf6tePKnd7zA8jkLWqjGsciGaT3ZJomLd6MQeAZYESkXzPfepU9gjMGyGrzQb98SiyThdd7dgQe",
  "key19": "ah86R6xS9kLVVo6uicQqPQwcMTpNvx1ggDDwZKcW1dqLwc1YrvQGLsyLjqGCJxgfxky9DW3DyFdqVHMHUfDujfP",
  "key20": "4xn28BvSwxpScTgDAKERM7MAS8ZXrAtiU3UJVKVPezafHENvuoJkVi3tg4QsXuWMbiQZQhEbbQ6zYMtdkc3AE7Uh",
  "key21": "GXBVN8aZaizCBtrcgrpPBiovB5WjZXLy4dhUhWm1svVPfVBkXhhqs9ZfAXsDQExmEMEjBbtMHjmMdDVKRG5Hdo2",
  "key22": "2YGkwtmFpExdfeKs1MCSGQjXqiirBfzxjGkxU89EoLpQFnQ9ZeLa5Stijw1frLCejvE9G9trAsmyD88NzJcnQMGb",
  "key23": "5GbD6W4aFGPt7GS1DL6TsM2VXNWoivUducSeErWDVAsSWMqu25zeYUPVdHXtwtBByxXCLmh6SQKu3xBPEvDMauj7",
  "key24": "2R5qKQhG8UzxTBV3ukSGU8BNba1HJ66WGjEHdRR4CVBoScji3767YmYnbedaZB8QkSr4hpZArydotY2FJgTT25Vw",
  "key25": "4p6VyugR4CHUGcRkzAqha1ELamUdNKoWKkHyK4H2pf73wfDMLJ4HutvthPeyLtiveMgLFpXi7CJMtFqTaRKv2PkH",
  "key26": "BEW53aYWUwBWCmEkqGgWQyFhQ6upefBfVzwgji8WqznZzS9mAv1N39X5EeiBYyaVFk2ZfT4oDVD78cznPyGnZup",
  "key27": "4jutwkHmWtrvFGGLLojSt4RvpBYXceFqjLFrDP6PNhbRcHTVL1TVGHFy7gKNbRrqnqsYDypgdLvCCccNyg5oN4J7",
  "key28": "4iNd2d3LwKDnpTZX8w7rN38F6gtbZMpBvTiDHzgGd9dmgCQLkuLcHcf7Ar6qYQfLREuW1i5QUGd26VVro3RbZ16Y",
  "key29": "2gP1KgLgt68YjQnN9KzaNNS8vNSUhmn8WEwPp4thxfgSP8EoUovp94ou5ZmUwmH1XqzNNs75o3JSdeF6cCnXeGvU",
  "key30": "4Kteg5Mnvpxi4jNC94tqZDJUuUYc5a5UQQbiyW6Xc1yCsuhSYkwZGWuAjEXqGsRV54w19V9WSq1EHsAfPQhvDTqS",
  "key31": "bsZG1Cwg3QMZgLmaWKUk6883LDABsKJbcovpL6XJjjsbrt2tMWXt8bd7EtjufefmCnzhRofrBAmqz5LWFgamJ9E",
  "key32": "4VpYucYJgKAgxmrNiBoAbqZf537VW37sJiXG1bEVPAHERw9NibcXxGNmhdipb8DeBH5QrGFTRfaANrnCp2TL9LeQ",
  "key33": "358jdQ1FgCLHFvGEA54FcSsF1k6rDhgHWJ8gwLgPcVm8U4CwKAzJ6ndJ2rsY42XZnPZto4Whc9WjsQYANJXSPqUb",
  "key34": "4FUgaW8zrdU4yv9eaCyUpsZ4ekWggm3Mwfe5DinbTz6ezEFqMx9b623SJ3ESgZ3X2Jc12fGWw7MTNdtxynzABHK9",
  "key35": "3L1pcoKRpV1vXRGA91Yam7c7WNg9fg1HzyoT4oFFJYQHYovbUm9XUTp2U4WK6tbxmdadQQy2tYGm2jEgsFUdHpRu"
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
