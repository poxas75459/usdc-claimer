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
    "5mKqhnjb73ttaj1qav8t8evEn51nJYnqVXwtUCXCpAffF54a1V8B2PN7XMcoUkWiRrYLHL79tDFi1wRRuc1eAyjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eEpTndFuakkgkuWriMsPRGWDz2bnUG4xtD4yWBkuU8BjsxczV68TGYV5uRoJf6DPxvNenWEhye7XquJp89XSoun",
  "key1": "46F2rXFKQzJMrcF8iEDdEa9nKw2mnEXi6QAnn3tmrv9rbDG6HSHJyBft5M4TTy3o7p6e5Lecbbn2tjV94YeD2nG2",
  "key2": "3jn8UmPbos51KoWJFwnUAnF7BCzBcfGWkBWUvsYQc7KU4LuCzrnrRtijHWXw75Qgg7VWPbFQP9UpntRFPkw55MzD",
  "key3": "ihF8GSJUnptwNnrhscXjm712uTkTLGdFFH1XHMD2hyYB8UsC3Ps8pmvuAjMTGPLVeGunqotuJ2oxnC2ufWGbYBZ",
  "key4": "td5K7dwKk3ChV6sZdwRr2wYLUN95PJW4brybh8frSDzNmQ1YCpzMStDXRrqWnUsR2e751tZQXN3FHCAJCsprh1t",
  "key5": "2t2ZBAiEjNvFFz3mmJkxMBcJDyHo6Ucza7TQx2kW6CWYBZkNSFWBMKmsY3DjEmcRDXHZ2yCiyxtRBupyGBMEqbGB",
  "key6": "3AHYZYHzKX6ZSqMxiz6wdSVkC7BFE12mEUK1r2EC3QZsv7GLcSYc1DSb2Vifmh8tJqxHyxzV2QTBGXXBnB4Me9FW",
  "key7": "5D3nHZxRgEsWLPeLW5Wvj4McDzP9LTpGRAHRehU8woy956b4vo3ekXGx9wcx3QWV7Eu2RhkcCq7efekPwvNpUnWt",
  "key8": "2zm4evqAD4sSdJC8b2JtTjrg2xYcikwhmZzQamLtdFYHHMGxajHoex9VGiGTz6AAJDu6EzZSgu6nZemNQV9aQmzA",
  "key9": "4K53uX4M2Kzx8Zcj2hNF3Bu4Aisnb9iJxM1yTWZQFsqQhSHJN4Yickbbsd7KEUUQxxVUwrLVQ34DFHQRuAQvBpRC",
  "key10": "5zy8uxB2DQPuDh3amiPTP8C23qN97HF3r2b8eY2aCkSTikDhKhRCoHwjfHLBSZJWT4DdzUNbBXdGp9sKeNhQZVYn",
  "key11": "54hjKak1T7xMtmXpeQrG8J1PYB8VnFAXpV2Ao6CYnPuf7tNMGimiwydbcLkUBLXetFjwyA6bKcpgQVy5ZgCxwHCG",
  "key12": "2PJ527FUVqPAfSLWAkjtYtNWiTQYk1jJmQGhKXkoaK16Ha92tMJHboeD1C29yKYEyZgFhqvjrSd92Q65EiD6wdPx",
  "key13": "pLCDZD2xNh54SCmSjeL4mxaFT93Y4PMNZxrHsYML1MJ4BUL8bfRM2ewFM2dxChSpyNogAbgS675tbCzuG9yX6a2",
  "key14": "2w7uFkxfvvCx5m63uDcTvZ1ncoXDtwVQmHC1sfMYnKZqFtpzvx1PeDhzXPBqvS6Egv6PBcTAv1nKdsscWsMmvFxb",
  "key15": "3UdWsqze47j9TTk4qpTAm2KScKZZx5yfp7rBzKTecex9sj5GfZTtP8wdUf85v2my4T8SLvnznb4LGJ4z3sMYToma",
  "key16": "4qN79MdEETaWX15NQ7VbmJ9hRgSEUJHxmssu6WTEYcZ5dVyP2f1wLFqSQKA29mBYLzBH6pFJsddmWv5jf2beYeWo",
  "key17": "3L5DTHjYkGdntN1nnyMZY2H6g9PWUYbdbYacGWZ4jk7Q11p2ez6532VskGQn2gAAX3y2prGhQkFVcoRMjKFqyRmV",
  "key18": "4zyQpW16hPBNDTnSYDxZZoPaESMAx9Rxi9iCbdMQZHE8ocktG74M5qaBqcJ7XzfmR5mvpGQZihLM7wLWJGX6ecGJ",
  "key19": "5KkRg85fYvxZCGhTd3pH2CCqLEo2XJMJR1A31w9amj5gGY68d1JxnuCCmAHAPYmaPkZEbmZ5u9qq5DKw8huEuEEM",
  "key20": "3smm9wiMqEHrFqtkd9NBaE9f5N4m2H32FoxVb9Dxi2xF6NjYohBDdYxzPs8NSvUUfnLxsK9EWZdsWQCb9QayGCaQ",
  "key21": "T2DbhintZ1rNLigdoSa5A9gqQmC8XiBDj7LWKQqg1aeRRpoWdZ2McfBC3L1qbHurw3ABrWepG6HD2SMTqKTAnwN",
  "key22": "5xbAeoSzg8oRmWTamdhjcqW2PkxmMXZtzDhnEksaHghGBgPDJTpwVmHVmNUsUrysvuZ8d1g1idydkVumKn57XCv1",
  "key23": "2wfrNsmHZji8UxVBEZsxiTMGKpL591Qp3uEbSLEoQbL4fZnTBURUyiu1nA2ykkGK2PkoAoCz4NP6v16sNwzMQzUy",
  "key24": "317XiKtuD6VVr9cYua9FJbzCCJqfR9Jq65ZNR8P3e3PJSPFL4gMwiJ43YHxbUsNbNmQewdbmMKXGFCroGxUFVzqh",
  "key25": "3y4QaimXxmReQWLiHZd5PnX8dLKhxFod5Z9sE36gJPLJZu8VRxyGDVXAFXGkbf9z8GDQh3iJXrH8mAn2PYoGQBKi",
  "key26": "5KrL9fZaia5dVVY7mjfe7thY6d31fgEN1BVidaFfPj67yS26b5ncXB71ekJWfizn8AAyiSBBesy9PH8N9XFKczik",
  "key27": "2pcHj8LAQ2xPgmK66dfJJwkgqH5bzRnKiLjMiN7bmg54q9d8H5c5hfJgt6ntL9S3wNiJoa2TbGtymCW6R8qZVXQt",
  "key28": "3EndS96waehQyehV4x782mejNtpmSPpt2fgmT6ismTmX1y7kKtrqtRFTo9NcefruZxy3veYBXT21p4i7WYEqojnG",
  "key29": "46685AmpifXbxWbDBMFUWkqL96B5a5sqMAAHcZALXqjJfjfcPKuToUg2hZY9dhJNA8BnzdWQ3tRJLsg4LUqmjUda",
  "key30": "42ZiJ7ziUubkbLh9Ha8LV4uJFLxdrvwGwmpNR1wpPgUugFR2PbSXvstpAE3xdpnRYHoHTsHMhv3QE9V4MjpnCUKX",
  "key31": "2t3LMSAdSYZ68fMvjhofhY2Avts4RdZLvCrYVHqxmNa9j73dPTApPgisH7pNawtkKi421PqHWgoPykq8vtbxMuco",
  "key32": "2mrMN6nYsMX4x6vHpAxXV7B7BdiLY6ATTrHXU6MYnZ1JGmGTgDDPjNta3q5vTE2YwNboNQ5X1VAbiW7PPptrUkCV",
  "key33": "2HvPTPeh5TD86F5211kyGuZFJSRrryPy8r9MFccysqKzZedr5iRAZCNJS2sqRaRKsiNxkyYGCDJxE29Nd3UwcqYv",
  "key34": "25MXN4Re4nTh3ZgbnBdqfMK9XuCs9it82NCYvBnUDojhB2oCbEiEjA98jdK8uc297CLXj5ZsUxvGpE9N4KYvUygT",
  "key35": "2QNgeNGdThtiZfP5hiha8KFeNp2VXQ7QfZU2Z348RV5v46Cypn6dPBjYWMivGX2tPzTuDAbDcJ39q3hTnhog9Z3j",
  "key36": "5J4zmJtr38BenVpCsS8bchVxZgjXtAmZwjeuAV9biCrHfEMbXxF3QVHa4EXpiuujPzqVc8LdgYGYU7uqoaLwee6u",
  "key37": "5vVgzpftxQh37eUQ1ngbgUBtksrRUxPruPjcEUBw1EQFbbgaT4Rkpe62AHoDpTzMVioPukREJHubVtAfG681wPeg",
  "key38": "4d4ELoFRNzR15YFy1oWY4hCmsrpGSyw6rUHH96UVNCDTFzDTMxDhdgJxTWkeFxR3J584BKSzjfXLhC4xiu36mLku",
  "key39": "2AsdLSV1hR4CwPtVyzbyDLLnHG3ZmdpEdxsjtE7xEJgTZEEYwKi2UQ7U77gA8rsADSMwTLr5gQwCDNnSdtQu2C85",
  "key40": "4sF5dsJgzc3MzeKTTHKMa4MirPa48m4FygEbTuskTc3oEQhsGx7hfCYst5Qn5nSsGFpF8HhFtv1GGoVQuEKcSGct",
  "key41": "5ZixJbuHkWZKVXoZ7o4hAisDGpeeueNWnn6AMxFo18vxchAhab7B8bRNQCNik2NgpUcGa5HU12ebfJdooYzuWHNF",
  "key42": "34WsJgvgzmPWS8UoNLMPTQjJLbiVEFgywhjRsg3VudyrYiWqxu29AE3kH7qGfVHVRf6faUn7x9k5QYqzbkiaLJiE",
  "key43": "5VqtSa4SX5qyEfcdk7Yo5PsWrQUvrRAMiBeWcfvbFtKftw3jiscd3b1S5k2buQFRZoa3jYU2jqbUVUZStxvXCh2J",
  "key44": "4jynyVrfGme5TNnFZuhbMpqCZyob24XFbMTJNhCEf3YPabZdvp5u1JUTMjyFNAvgqynQvA8ZHtjXaHbkPgjZzh7M",
  "key45": "4nKFimhjHB9NoKP7YRVRR3SsRosVKisLe3gWkvyCCFJkxib4zywuQPznvLL4C873uAk2qDouDhHTAz3KWiDX79h4",
  "key46": "48didpaADkPTCyFpRpQF3e8rtA3iqDYkqEyqJxgeaWMishdvsMbM27nssiGrEawCrq6Ua1JqsdgzQtArTuxbyWFp",
  "key47": "UKTHDandcvkUtzCQTY4dywnkVQdvi3HuGFhXS1MZPfBGGuEM1SseQxrG96vYf5Q9apf74Zgo7RymKzLoaYQNWDj",
  "key48": "25wS7L9ZYhG5MPw8puDaZZqeu53kE1Yf3eVxBzWnqsD3MY3JKVY8SDi4n9ZqgFtvM6JTuxcf3cfaimwPMbLxgTiy"
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
