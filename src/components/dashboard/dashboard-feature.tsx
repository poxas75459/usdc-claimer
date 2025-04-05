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
    "9QPCw2UztoWkzPWCcPCiVMoH5yZB7sQxmXMmjFkQno89dbWHacPZx96jNF4bqnwRfxjt5ViMwDsRNzHuz1wm5Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AmGuGzBe1zbDZCdJST7mV7PmCQfUMEgTfVXspxZz2J3dVG86vMrv7MCidT1PWR1MYHwfmzDUuwjAyJSMAyCov7g",
  "key1": "3y3iFb9UwG7wMnpHYGvWS7gMenxwBfHSN2YoobZqCSSibZcbuSYnsoUbeaQbLRi2zrn1xm9sxKmd9XJK5HThC3vv",
  "key2": "5rBAfbGC8QrKPfZ1TDf3RY3cYApnajrR3DEFc46JDyQ7WYVsPxuYMcep4eEiei9eNiiYvHTFwbmZUWCJB8oKjAwc",
  "key3": "4jmctRFgU5oKpCCDG1RRnkZYuxxs9avp3q28gBeAb14vDka5qevfDQcC5fUry4ePxmSgkTjsYCLfa2PRRZH91D7b",
  "key4": "p9KBywxJTDgNemwiGFPvyTUtDJ5xeWFwaR4BQ5Cpherw38SVCpGkgxmGK2vnY1H9TMFRQxFEiQpPMB9iz9WwyQd",
  "key5": "5tn9BLpPErmCFuPxijyET1aG3efviHJYXsKFu8iEKwVxxdndA5Kj4567xhJewxWdSQExVrB8ZwKUXw6idyoVHd4a",
  "key6": "xtF5U5ybsu5JH47X7AtDZTByZzaWqEtKmYh1hEWQS8KNEH5a6Z75BMnwmR3s61yy4EQ6G8PrC6BYqjYG77xRm9f",
  "key7": "3wAqvtau7Gqghhu7L2ANZr7QvGGBewLVHkFDZCXMaRQGFQHmcQEAUEB78DkbGVLr3f1rXYvnXcJiKVBvz6x9vdhT",
  "key8": "24TrJUeXBERbAMQcMybhdGcpaA7Fg6gMQJXS3FSgEvuRoyMu1B9Ki6QBiSs9kWiBKB4M8BMyYWiBep4yAr85GKnW",
  "key9": "54aWiBtMm9SYnT1LnaMYtYsAjE7HR5jaHA2r8shZyWcNw6JB8Dh8wAGzrVXX6RgSib5Eg7j2TrWi2U3mmth1PEZ",
  "key10": "2X76xN5chZUfVAN5h8BTf4TeqNw6QcK6PTTiyREdSPCUe2PhqykME2JTw1M96kx4WaianNAeiN9FVuoPHu4Y3pBR",
  "key11": "2ZoufKueZ4shNYop5BSbAWb6a7gTCoQaLVeRvUm2AKqE9cSBdNDE9ShSPz8WJsRzsEE82zSzP243uinTkdXnscu6",
  "key12": "4MzZkKU9waiTrofHH5L1s2u6JYiAYTAyL47oBuPx8anpkuStZV2UMNtZpHiQBAswUVeFwavreSce3sARYntCABh2",
  "key13": "3FaZBcqhxgbhGQLfxYYLBjvQ3BNBuYok89Wtq9NhdwQSF4Pp8xnAaPPomySHPZbVXuxUCqcxidmTJjEKWrtg4jYF",
  "key14": "4AwgytjWh4D9JFDMHQZtkP5eMkXJy3p5JD2Xd9ZRWeJ67pz1DqVBS5PNbcsAKcP5dNVi4qHptG8iNr6WSGLMuiK6",
  "key15": "gUZVZTKtqxE7LVPcpFqrbHVNzVvdSwfsatrvcP1xC8VKKLF1XTmdwzKbJoJUvx4ExYX46ke2k8TozLKTb4tsgmq",
  "key16": "4rCSakUhHFAGqektiWZAX59MQLo7NGNDs2seaRS46KTsDguFzX28GdwRp7m9i6Qgy3BZ7RV53pyEHQxPNsyHY9Qd",
  "key17": "wxLqgsq5KVVaaDcpv2DgZZZ7QwV9YPBimngjfT8htPDggvyoaaPbH9wQ4hCFoqWwiXBKAzHAmKF1V54tZFwznCM",
  "key18": "2XjUzGvqFscfzEvRJH8ooQJe5hqdm8nQsKbF2tpWvuy3GVNAYBA5mJUpLqjv2EQ9rtcMkT7Cn6rsYmeNLts6u13t",
  "key19": "3MoadsLmMq6vBGL1Gut8ez3n6NbQ9rYErptiXW6y8UkuoXH2ygCjxvDK9F6UjSDBCosDqcSasNpWD5Ea7V6b9nex",
  "key20": "38iNyWrDjyTLHTAKH2zW1PSBoCrZtVdoYYfVkU6FBHpE33MTRfMJ1gebwbFANuT8RyY3tccbNaYyKR4cNzeVLqep",
  "key21": "38ye5WrmPhPnLhJ94gSr6jhnAQDBULcdUZWcB9w2kSw3bDCi9f37fRVsCkuhfFa6DL643Ba3154M9q1v3ViV7HUS",
  "key22": "2yxjQn73wKL9TW9yyEvzV63B3d3LiLPoEQEhoq9gzMWmYHVBc4f7vPT6SHNt3ZLr38aojCyYU54UA9DWWk76rJix",
  "key23": "2cGH1QpgyvgiHSucTobMbYJgcZTsW57Kjvynvu9FUhX2Sd9SBcVT9tCx2obamMpeMVp4EvLNeVHy6MQH6f8xZLUx",
  "key24": "VHUEa5d6oE27MFvybzhqPNNt46GhTWUmVzYrUfNhLcHps33uqT5XU8gvbX2t19qR74G65wRf2ZUQXzcVa8mUUZD",
  "key25": "51maTWSyyQtmhSLdTNQNXSKkdNqDZJa4Vkm8J1yjuQ2JQBnFaEMXFMfVxLGumCGsh6zCMSDDXuuhUxk6T4kL2bff",
  "key26": "3KGx5BS7FLnEYLa2R98TXSVFXXDXxbxpd2PFZ1QfLmfYByacyc9Zb6rSKWoHJa96Cyk1w5yGg11Mv13tnSrJPF3f",
  "key27": "4UJvpcSXQ4aY7U3MW7FoxLaaKJDQS7P1mgaWdkdhKfYRU9qeY8hYKpkyRu9TPmeCi1YCjNayb82curKY1MVVG29H",
  "key28": "2NsvoaXH8FB9tV4VwrJkwAU198kKegZJsxCbzwmayPAttrm83dov6xJo4U6GMmHGUoZC6hdKqk5pmutZDz38KoXZ",
  "key29": "4WuacL3QYBqPkYksMR3cAkicqqvFp88f7PLmMT12g1QVfwKvmmrQQ7WEAkvbrHXLEgrehedbXseS1Tc8QdvYq14T",
  "key30": "4rXjENNANY3oZTFEdRSgQCafizTLgVu1hRqp4QCsCiBkpSFg3ytpH4JhP2BvzEbJakH69opKY64DiPybeSPXjoPt",
  "key31": "4evRfqDEAv7avwTYpRcFihPKWZ4D65b9nyBWg57J72MXCnnXd6RVD1kNZTGAf2NGUVQDusaxpEChEVgmn7C1PKRw",
  "key32": "3S4N9VjwwuF6UmykUHwqYCEinh41jHJpNP5jJo6GH9mugJT4ndtxFim5Poayw97xfh2qgisAamS473S7sCVqA8UV",
  "key33": "QGEfGt5yE4Hvg6uDSxa8sPDqKCwaMz6tHEZnazLmDfwhgSCmDQCLkYSBRJ7RrdSJYY3fsbaGdb3yjndLTNDTvC4",
  "key34": "3uczQFQCPRhJtCC5nSDvQF5j1xbBPS3KUsKCXSkVwqsemUBrnaBqLiJSyw24Yr5TLNNWyh9ufHEQMN6ScyFTaXzE",
  "key35": "pwNdaZX1HTvVu83JGMarVyAnmzdZPYUzQiKdCm9BGQhbJkoeSsWGuGcTt2AMwhe1UqJ9cu5iFgCNDhjUmNj6azp",
  "key36": "33Xt9EsNVyUdeJk3mAKS8snbYjRryimvdXJBoBtNnx7LUD7u7zpnRUGPz2D5s78iE3vyw8LcndurAdDLuE1CMq7q",
  "key37": "5UJXbwe2WDGBFAHwckpYVk9HLtxzs1QwLSQyw5NMuw8iMh6xGN6gaMUHjhocRn9TUfUm3Cv3diNmFeP4Gycrdi9F",
  "key38": "3nDSMhGM29wAswwF6moxnKNqqNkuPWQUh6pFKK2V1ECGQ7S8MeNnUxwXvmCDSw5PPe32Z4zn1vgJPRywsMSQsTK4",
  "key39": "38Jh9uNWJseLgbdTwKj91BXJQbezR3jt7wz7cS7ZCxjHghBeNG8dPoqDNdkTSLt8ehzEQtsrEXwWMsZdKXJ3FaBt",
  "key40": "CdPvhPCYdRvGonEvkCyGARjAUhrqMEpG5cRsdp9TdzS5k8EYGWrmpdANzeUxNEyuDP1GEqgVnTuMRZgeJUpAhnB",
  "key41": "2n864nZaSS35wuXfvE1Qnk7yXyyqPuTKtNX7fWrcbD1e6R6P6KwfYBtQX4ZGvQyEYafnq2MgpQ4JkQGmWL2Fu2pA",
  "key42": "5xfF3jAcdGWSKxwsZX7iUeUFM2M4whB3D5hGL9hMUZCMDmr7oSFdeqmegkykpzy9YrXGEYFCxkcjcNKDobAXXC6J",
  "key43": "3J2zTfy1r3aw4qaKmy9NLJejDSqZM7Dhn7mfxS37ivqVgsJGEo793X1DvDregWKfh6RC17nZdNeYrFoqv9AsydFg",
  "key44": "3rWdK4RShB5u3w6aGcqKGKuw1i9VheGfRU9tGXSTTDmHo77gHRyV8VgK7HgZejzkFYnauYTZsDGyLF2sBscUgAFW",
  "key45": "26581DpRtzEz9AMzoENkDrzRBxUnwmYkr7hzJ9wk9YJHC7xk8jcQ39LqQmftq5pf6hMNcoamGzsCBYBm3pd18m9e"
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
