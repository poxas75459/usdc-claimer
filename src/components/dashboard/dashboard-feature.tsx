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
    "4TUQwYubwG4hvjFEtvzZACNXnfMjZMX2Z1b7hsqoZyviEJzKCmi3GwozmGfz4rzZox7pdpS8RSaTrpsznNECa7rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cHMGBUiibkEzqw7xLFQK515zprM28aeU77NufYe9ncVSvJTzSTsY61trk6ydzK38PCdpSMNjWN6oqHjaFMTp8kN",
  "key1": "ePbA7BdDTUuJvYegwiKvXUhnA8oJ21DFUV48QiK3w3B3sWs4ndXYyfesn4bTErQgP8BL3157et2fYiRiRuEaFjQ",
  "key2": "SDDJLXczs3GbfbrasbBco1FBgM53td8QwrAxkE6vouMzceon21yXEtPJnWN4B117GquEw7Q9v69yzSHML7JS6pF",
  "key3": "39z91QkQ5LS3VCj3QY3Xio6MxeNYup27p7Cg4AxmuXDMQhAFgVMWW65NujjXPiPBNYSPEUi3xCmNg5mpzeWAe3tF",
  "key4": "5mDLFiLPC9iah4Eyjc56JAWBgmMLyZBb4m2HuwNUP128eAyCeHYAGZCjvMs1Jdr9DpqjfL3RspQhvs5BP5pniUMw",
  "key5": "35rQwmCzXBDWvfgubDtodhAmfFnvP7ZkR1sSdbpQ566G7QxcdmHhC4JBy8prLCJDM25icu65ZZEFLU395aXN5EXU",
  "key6": "2okrhSggkZX8DKDJNDcbWgtaZjVCPWaZqvHtHDwSGKWS82vWUQiDy5FJU9f4mUiqAqC7dbwXaR7B6r4zzN7bPaWL",
  "key7": "5Y2Tp3RpHiZ1hm17hoQAYcdzCSg3WcoeiHM5NbydaU6aHQ4EKMN6VnhD2Fx3ChEMBh5weXXGRCyZjTwhDrCBxVZP",
  "key8": "mdJsia2j5sFcpt3dhWFEmkpujNqbok5y8jy4Ts5DUF5LXcPUtmTets2wffwTWDsL1XmEJPnDHn2v7XbJqYqdFQZ",
  "key9": "4vE6mGMpTk7LWTJAuA7V9b59YB98cStzD3nQVhunSbWvBr71Cv1PwZi7iHYhmmAJsRPKyRXU4ZtuCFZbfRYa6Jzz",
  "key10": "25QPfzAcfMTjvs7uWUnEQpeUJA8RCTAvRV3SnXZo9AQYbJu8Gn4FckjPYRA7x2zWTVNAbtbPxnc1UrzWyKcC67bi",
  "key11": "64VW5WkqzVpxNFRgAGHhuNthWTVD1H9QZRPLEhpXSqbhWVWjVNBZxYi1rFFVrbShiqMUKHwk4SGS9q9dCCHk416j",
  "key12": "5ojpZmthmc9op78b24dPcpZ17249RpY4jcLGDWVapyDH7Agv2w9G5cHcnPmv941uqJpByvEXuaQzZjEmqkJT4Gxe",
  "key13": "2R1squ8XbphHrqNgvHRntJiunTVQ2JQUZNYViP8pAaGVvNvyCgfGMs847114gkSkEpzYHM6ZQnWB6hgw7YnDxRuf",
  "key14": "65hsXAC5L12Htvok9K2U6U5L9a8tefKhUEJgRg66ghJcuRwtTB673UdWgP6bqE1vSnwSRK2J9QtmNhuMgjcxqNrr",
  "key15": "47PCpAKJk28cJp4ybN2X8Ek469zVdsuAGy2656CdhTznwGjB6E8iCBL6dKRkLxMPorqNYg7oeJwTjUFNH8DL61Pw",
  "key16": "3xpy7TVcvnHC9kE7bVCkSQN6ERFeyBck3nsB6qCzMdDRQvQzo1FCNiTTM9ps4N85DH3pdhGnikDXLuToS6PjrGTC",
  "key17": "5q34XNdxUMMLb4N2QiVV3kp3DKhe9yAc5QNyKuqxrgndFEKDjPbs19fexneTVdpAjq4kKwrFGLmaniqk1Jb2xVWy",
  "key18": "8pX38LNccaXG78iCGyDNuaARGpqPRsVD4zRCNJFp844Y5owMnERMnjwL1qHxrhi698utH9aqH8J8HUGqyZb9nCm",
  "key19": "2SyuaENfTebfqv7aZts6JY18jXMc8i1EVCd35erQ3nG7g3B2wncBwPf9SpZD9E4253GFa5UCamZdLiLokuv9whee",
  "key20": "qoumpEB2kdECdPr3xtuhVSKmDMcveZWkFNpTTxNNakthJ5RXtA9oVL8AW55pnqqhJFjpRBdb2qbkUFU5LYpDAWH",
  "key21": "BK8BGJX7hH6zC27g4WZk9SP4Bb63CeS3sBzRW9rVWW6dGapiwsA4VciW1FTBnb6CtGwsGyZwJbqrz6s57EQmuJM",
  "key22": "5UQePwAG2Mqzj3aDBtF8uTdZNsQB2Mfu8MdjrZL6RNaEqZZuqSmGyz8Qj3WsMJkXbD4xqNimk9Lqm6hRbCM9ypgX",
  "key23": "Hy1T5q7VA8bMU4iXt2c8cXJgu2ay2NJvASs46dZ4LyLKAtLwugWjch7MJ3urFKk1rxEfxTQRASq4VAcXMgcDgro",
  "key24": "WH1CapzStPt5xP2u3V3xHdNzYWRZ9aCotyE9BiEYFRYdRrPdkbQpTdpiHLPRaSrnMS3JRWn8VdurqpP8SoN2EjR",
  "key25": "4sRwiSPAStMuWvAPbFSfR9kuJT33qUYQ95zDoHJ1jSHFfyyvFMz1zNkhTmMRR5Ud12AT2gPewiKwXfm8Aea3M6Hv",
  "key26": "3daQ8MZLdtpkWUJVPgj859yyHX6W5bjrf6zHN4Lmeyzn9UnAvuEgjYQCoPXwH9eyUAiaz3yPjoUitwbiM7VQAnyp",
  "key27": "2hfGCNc4zW6PP4pZNKiWdBEsX3a7MGHjWCNSx8HsPe3bNtwKAxx3PNWFEZrzQMvE7A9DUH1Ay5W9edDzYXCLpRN3",
  "key28": "3wP93Vu4FWCWfwoTNqvsUVw53muKEBo4tn73qaNjVHKoQ7k14pW15GZxp9h8keGRyYnR5y4X3Jt7mHBDaPrv4cZi",
  "key29": "4TMzBUtYg5foJ692QMc4bg8byTRpjJrDH54ZiAUnWrgHQyuEWW9ZXVz2MLX42ZJEzXwzTeEymH7LvAwEiHvPRnxZ",
  "key30": "3pXbjT4oobS8Wd7M1CviqenDUhsYrMMtDv3HDvVmQv9zoPjn49ErT56MHgXpgjJVnwHujHXCG4UAhJjs3u3WKvFn",
  "key31": "4iqh8gPJkKYepsS1im9gZYyv9U9kHppY8FDnfqadhqJwJ8Q5fD8R4sAszsBgfhxri4Ftj5YQvbmRaMbtHth77vDq",
  "key32": "27AJeatDNC9gFduiMYQcCgrQJgUnxMXgUE3aSTfm65vNX4ZHNbk6cp9ZBc5qerJyMPnBTdsvNYU9YboxvwgV4aCy",
  "key33": "3guYtSNivYiVsvyrQpeMiZF5Wvc8MrUo4mcrKpJF3ebE28iSAjjhWQsvsLooUdPRLTHxgkn9NizAaLWbTfZ3xww2",
  "key34": "GSytqLqxwcCZ2HVupfqvNNaJaM3rmpyN53MnY4wYYWVGrQ22BQZJ3bkegeWZ55GWbggN9iuPR6iGAZSaEBTAnPV",
  "key35": "NpYDdUVoKC1ZGe75bbNoz8wRumrqmnNwySrEF1rq851MPWakHQyRY6BwK12heUu4doEuQayh6JkmHnLTqr8SzsG",
  "key36": "1WHiSSxHnnoyNrU3NATCPqznmmeRXJXwSiyezhUz3Vheat5ezHoWoiNCLRiJuHjvDbsSdstariddWSHvu4J9hah",
  "key37": "4wsSjDro3Eb3vf4DGj2S3A8bszSGtL3gez4CwaaABf1drra27bPKyrnCzZ1T79WJP3XPfn2CtHpDcdKBeXr4rhU8",
  "key38": "5tG2zkQwbMGj8GZYEmiUZ9SEU8RTKUS5X7QmWUsJZqfjooEwaAgo1TxGAskdjAVVBA3qMmwyL3H5TXTx8gYcahiL",
  "key39": "4LwD7WWwcynUkzYAWLu5fs1B59EJiQaPSDQJKeKh2qH7EWRPqHeVG5L5crCNWZFDRptmEdTF9infmF1XkcPP66hv",
  "key40": "aYVLZ7R1cdDR1bJ1KwjXFhCiLm1gSCjXtdDDTxXiFzRv8D8i7hufJqcNuAYiLUYYSXWHNWkEh98PT3tkSqiypDY",
  "key41": "5pRYi5aionsqeckUiH7aWN3PwQu6i9dPzx4FsECev1WxpnV2MdwNebsfouFtvvMQqeijsexLEdz3pJ2sLe7YRUT5",
  "key42": "3ao6iFm8co1Ysspk8Qg6ZKdomPxF86eCeemwdAEQXzUxz2fCUZD59P3roi7p9J3DJyoKXmhoYf8RxNnkpgFmyr91",
  "key43": "2fCrtrrLoFxg3X7VKPdT1hvkefbZd7b538sj6YVbpC25ndoWrWK8ZjaFZkdsAMa5KWWkZheCKsKzrWKqPJvwfYpm",
  "key44": "hr1kCRJdz4od2J7Xj4d3jTKaVjykCRXTxtph43jVK1aPXymmAYdob3269wkdMSo9G6qLPRC76tzZzo4q6v5yfMj",
  "key45": "5qZpJzuGDWXaFBu8b1MkZt85yakLQDiao9fzzsjNAjaygWqnHVJfnNqSpzAFsLvRTEuVxT7eA6cxhLMq4WyrY9tY",
  "key46": "z4b4jhtELKQ2Jy9yDUskdTNZRkehhWMF3DrgBieZ6cseW4g2szbsvdkHXgYG5v1XTtzP4qiFD1N4wFAwv9ggKQD",
  "key47": "5B5zdRSD3LDaF9H8weHobCDeNmcFCqqj59GNQdJw1TBf99A8Asqj731DnTakbt1tuKYoWBXzxnLbTcGaRb6ZcwWN"
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
