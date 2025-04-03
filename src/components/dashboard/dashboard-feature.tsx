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
    "dqKHFNxqCgG2BKEEAj4vcQw7GBWj6kUZs1AKeQrDQamWtsAya3RHAaHv9K9iUXTr56fWR94gdMi8hhwRKvxTnGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B37iJafEoP9NmQeE4oyqYcYP6DBEoDfgG8isxiSswkRkP6vFaDAr2wFsAXNy8t71TVtDVttXnKVdPbAu9RsTbPT",
  "key1": "42oRQ7vRdhcKCJezq6P7xzfNd3E65BVgYKiLfFvCUYSo3jmuHBg8yEAsoH3nHHvQpdWuihchkZS3iJeDBodXVwEU",
  "key2": "5pgtp568qiS7SvVgfHUEshHZkEvTvYoSn1W7YP3c3Hk2zpUTwat4xb2cUJJ5NVch6by1hDDHjuJSwsMRRBaM6V9b",
  "key3": "3ooWiQFmrTdVpamtVuUYgNCYASYZGgtwaUzjVaJufmHuk7FZpCWkrK32ybb5AD3GukeX8E5uErZGARi8dHLi2GzY",
  "key4": "PjVigoDwrk9KEPXi5y9cyXYMid9VSs7if7VsQzsjTEtjmcf7HZSis77cyYd6EKA2gy7BT76uZAqRx4tuybbCq8H",
  "key5": "22wLLJHvMHCkJTErZc6ZXXaW5SEhnNvV6AwrvfhbEa7YMLMnNz3hGuA6YuhCTcPLqBQXYK7W344NoYR8DV3gkkqy",
  "key6": "zkRcY5gQAFWQRsVFMLW1EA2CZupwFWuNyfAemsGbTygDHpzykJa5Ai5oxPzRcakcwRrj4c46vFcUL86r2Pc5q2c",
  "key7": "3TpUWCTD6Z5rhGQT8phwPj2X2XWSNxMS6x3fDMUDk1fU6JeTf26YqztP28fTVbLtpuhUEZvwHL3qjoQCP3J6zNwR",
  "key8": "33QivbxQ6p42TZVSDw7mgVfcb6Yyze1cpC1mGwUMuFMxWN6e2QtRopRjfvZqEbmGTVzdmsawBRQxfEUHjmZLtgAC",
  "key9": "4zqKgPLS6yH4iw7gFsK78hzaGPDs7oJi9a3ViaoHg7eFWLVx2MPvS9ir9WrNpj8tmJpEeVF9fc85qUiwqt2ZDtiv",
  "key10": "56FFqUbJJdswPNit9JVsJDCcq2ZGoVuYK9PZcUM1zvpr7ccxnUGXNVTzNinM4cp3owxfYYspnN8tNSmozAs8HLzA",
  "key11": "inT4wnJuTERnUAByU2FufPvkJ4rN3rNgvXWD48m1XqAB2wnyNUNPGvQRc8k2yduDhMN2C3nJkt6gLiQ4QsmHrKn",
  "key12": "Rkpem1bVvt9nam9aXMYpC1DYQGZ2xyGjZxdejDNXUzY3VVa2G5mT5DuMP4FHqAxKNE2VKjiiVMJJkGhp4CUzzvK",
  "key13": "4mWyVkZTEnmo4edmVggEJwCz5MFt27aAdG2UXBT5JwYyieVwx35G6h8sAueQGPiQtBnedFaqickzShaQS656hheP",
  "key14": "Tm7R1X9qNnh4vaHvqEjxEYfhZJNYRpPjKEeWZaaGENu84XV1PfAj8E7JhurTV4nhbAt9xmtUEg5Lkz8buqcmaRU",
  "key15": "hJLwZhRtGiwSVG29haNywtQAD8NAKn4wjFwup2M5ngMmx6yHh3w1PsRZgYpKKyXYEW3pSQmCKM3ByFsea8oUkb7",
  "key16": "7MxVgWH4xGEqcZh8QcYz9L81JBnfoDzQx6SiaYceGZAzTetPFYnY8ejCs1CH239hp9pXKd96AXDKvxQnfkpLCRi",
  "key17": "66JYPnmnttjqrjqkvwaQRnVvttJopXQHPNdrJJwf3MUKUTUF64A92V3bEaUEy8Gurow3jdZe6Z3iTkWHupz3Btz4",
  "key18": "31Y94pk1QspXiCLeKpVyKcqAxDtx1NKpGbmgu74j4avqX9SQgWSgDpbpyEVCQ747JWE5bkYHewF8FHF8sJPSwToL",
  "key19": "2b2eJhDZNyZUxFR8R9izBxTL3C7SqrAQ6hGEPAjbcW5rAjxNeERSTKaJPAEnT27ayaSiHwpheTqNCjbv55YXc45i",
  "key20": "rkzi99qVdiZvMCCTYk2cRZ2VU75q1B85SeTzobKxHyhzsdarcF5DiHRmqoX9sJjGNy13uSyYtpSwSYGEBb1uD1y",
  "key21": "4FA2eBcd7hpsTVcm41iGja4WQHkyfAzoiBenLYV9C1a5xg9cTVH8TnSR1AZQcXeiDPK8jTiGVAU8XpLcuHWayV1Q",
  "key22": "4Pehi1S8mK6X1RfFotaJn9gcCEsK3KogiQ7MDMYTw4jGEVHkTKVtoCGyHiLRA6sdN9Luynr3qDg86bR58fZ8i3nq",
  "key23": "4fUr45FRKKDffBxBZS2CydTqqKsGz6NPWMtosae27iWbGrCWh4k9hCkDNXyCkqUsdTfSHAxSeSgf3rauEFXYmXoh",
  "key24": "4z5S4QMLv6LeTdoNPCp7XbGBeWLq7nJrKgCWABXrUnUasxfHTbubojJAuU2H3FhuduMjSZVdjwpBzf67ieZ419Y3",
  "key25": "66ayz8mQ5pSrjDGbSEKKRz9CrSTQ8yrPDpfUPkQJM6VTUsrHh1vV2R6oaxMMhu7AYRXJU3xo92BJ5Jwj23yRVW6L",
  "key26": "2Q34iMVhhaXowN5P7rM4weVVoGwJF6nMD1x8tih13wHqRF4fGXrUS9B1ZzXL4e4B3gzUFU5J6K8H4JVZczB5UiDB",
  "key27": "4D1PwnuCNcF8GTuuwWWFgkrKzz6AZW9NW31YBf7r2xGsbdSjrmovMJyC1rH28poEkN3RHN7Egz59y7ASTp7eE22T",
  "key28": "533Vy6oMT623op6zrcfy87ZWwmwq27n7XdwAhAE6Zrni5X44Ah22YeXH9aRZFU83NwLZeswLU6e2c38UTrJJYY8d",
  "key29": "4G4bogLhfk6HcuN53iiYSdKgqChawpXMDDaqyd2ao2EYNjrBXgXzpFjTkcwxi9HAPWfu2tzhrbvPayMyR4Zgck6a",
  "key30": "ZEPXEpvt1CHSwVRGzfCShjRgso7PVwouWSHCyZ4Qi759MAofTyUJ3HTXu826YMdTAvdM6yzE1X5xGXrpnzmdyTP",
  "key31": "4s8zLRh2fZx97qC557CHDKcPekNKxZe8J8n35J1aeCR5ZVieTBLK1jbtYp9dsoaio7boBRYBXJJF93L661qiWnvS",
  "key32": "5zHUrjFTGpuVa1N7iaF1X8HrEi6orxdhVMQpSUdw8Mcg3oLEyacGH8oD8kVgnTZ9H8HvWaPeUPaXRETo8dihnDG4",
  "key33": "5jzgbDKxTJJ2ksvYkC33pvixTNge4dJpb7g2iJy7fKpMDDmMcAc6ownJ2gkqWiUYBbM1cqR7ixMixt9hUvUF6o5S",
  "key34": "66WSypB1FdXgmJ5k4JdLpckDDzLMD8bXBW3uPuecbR83cyyMUH2gccLg533JQ8rRtQzrdYrSFRuzqdyL7EuuSLnL",
  "key35": "3GwkJQ2VRGgfCWka53XuHDSAUGanQGWNWJkNDYa2JCxoK3pyUqmXaZkE7k1sGseJm7Koowznjyi3igBwYqjSpiBu",
  "key36": "NY1iYtpTPAGNiqCFYUHqzcmFTC9Ln74WziRgDFByti5H6dNGJVaogXSmETtisoSAcAgYtwJHGpHuYhQ9gg64h6p",
  "key37": "2EQPqXw5cjwnAEJeihyVvuUhfkbJAFZRarZniApg18BjCn9vWjQPDGtDibT8QiPZRMpe9X4aSvp93BNWPWThvJ7z",
  "key38": "5XMKRKjkuESFLWRpS5dwzTcCMv5wsb8pr8hG9jwcQDoq6frNGxTKvupgqiTWKxgCfBrN9rY7FL6NhcfzNnZ1nTKM",
  "key39": "3QLoSXCbuG4iPqcJ1LDjx9qA5Wo2YZ2F4LdRmYPDsVMVHKRY2gsenyH8Y29UJYq7UnwTFTR3yXcjAQXUzqL36Nu4",
  "key40": "2fLiieHgp7sys5hAscE2KTb7Fd8ZWajnJsrFpoDgvRGBJRdivDu8MjgzVmnQVwVS6tZfxNDiozJScdiGwj8zDeMX",
  "key41": "3qgAA7NPNWEEPkv8yoEojYnQ12P6DmnHtzHT6tiwqaMYqXU3Hh22yiYaxCptUZAxAqbCPbufQEcU3TMfzWrd3nvM",
  "key42": "2SqURNK3newkU7VuAqbmFVpZMekGHPagZJT21Lb5GfhMxW7djstXTyGGwm56FgaozbeFLTXCDQdp5YgB3CLc5JZ6",
  "key43": "CTdjdTVeu4Rms9H3AUKisj2ZKsMvYvigwrEtZH5UwATyhhTsz7HfZ1MR5qzysjzEufdisPai4UFjyaBA5931yju",
  "key44": "4nSbYKikTCSjCAnrZfEzsx6ndZYHdaEmFCoE2tQURhCa623moWEetUkg3AknRrVYUguPjdDKqBuRd7CW2aYFoEkV",
  "key45": "26tRxQVM2bNyb9fbTBgUrVFbP6FGHmmZjAzZV5ZVQYbGEBPBnfck7QMQV6vjXLx9aJTwmamxHA5RD4M5MfhVY9M5",
  "key46": "3WsCA2iH4RR7c6947DXNbvgGWi9vKD6FZU2f5tgffuwyecvXjiyUCJupcPjGZHmUeKdeHv4Yaq2tLjnbnxNXVjWa",
  "key47": "3CTjEjeBN9ioBZXsT5TJbGcz4NQatvt28GPuWt2WiyG4ZXdm2j57bMgEv77LqEn1kR7UbjmHjygbw6ptJHLTE3FS",
  "key48": "2mfXrADT92Z2rKtzLAJCc7znyBsLBTxg1FsY7i6fJz33Z2dZm6XxQwAwFCZ9oyPrpW5aARNH8DdbSj2Dw8dhqH5J",
  "key49": "4YrCgaqTEA1sv9ZvHjfPBSUvcgjzP6Km7EdAZVr4aeeCzAvx9zeK2wQu66quudjWRusjNvEr1y57Szf4AFvkz7Lp"
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
