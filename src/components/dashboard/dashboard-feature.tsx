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
    "qj5SVL6tPH2xqsKsBnTSJwFx3pPrytVByup2SXKLBMCEgUm3SozRC3yRjgjrNgEqZWMExSmk57ecoquegHiGpPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GFNxYfzTRqnoJrVSR4d8WxJHqgdbwC9ThHBsQAcVqvFqojAGUMAWSeHBky9UxZNEHbbEh2D466349pVVUWqba6M",
  "key1": "2eq5LD2fojnToqZUunGcC1ig5TVyZEFC46TB3bH1kvgkeE4fTadwT4s8BLyRmoapaMdDKLXRz33comYXiyqTXsjb",
  "key2": "67dRYFFmA56RxtjAiAUUp7tgWUokvcPwg91fyigsxwquzfkZwBupwJbnyYVmQXffbY3oG97Gcm2SVex4nXt7GqSk",
  "key3": "3BqXTzm1FKoTfG8N8ThP9HavMnGK1xKmQSNcHhGvJTF4pGb2rtDf4gHtsmEV9vmemz7cpADmP97AVbWqFNKNWagx",
  "key4": "55cy8ghpXwMe16KaDwRznZU6d4tywjQs5aajXjvEudXvKkAe45jrr2DLX53Qtc6LzHbbdVFgZCxPTQkLWCVwdFE5",
  "key5": "5x9ikTPr3QsFuVv3vb8N645jtAr5Enn5sS5UNQuXqHTR2Xx5LeUMXaWXd4q42nHJ7qyhLFSg6LWXJr8hUhxK9zMp",
  "key6": "soGJvvNq66rH8m62espKXNHRAULQ2nZ4BDF7dxp3qHcQUZYnFsod7qxB869rxJaJuDfzxfZNuis3DV7CsNXVdh1",
  "key7": "XRNbou9sUVFcCtT42bqSyRNsTmLwXgAeYPkCVe1Q9yLrMMvABUyk1bXXdjDDNfFXUixf7wstr9QzS2EyMuxQbpM",
  "key8": "VMd24JSTGU7NpTW6zU2XYi96bkRGf5ssc4s4iDxnZcCyM98T3vijVBTQhUSHrdAAnq9tisGTAHuJ6acqLefNmFj",
  "key9": "3xQJMRL3jwxz6yu59zFmDRSqh4pM9iY3U8uvJPs2d1RXn7MXyqTKhWZz2yaESkwLDiKo23ziEziQZ3scpQsRBo4u",
  "key10": "2EfPmLiSDQakoWtwgKV4XX3FYxekgeS5nS7F3Z3UYDnq8anChFqyBWrsFGk3pwVWKs9znnghhbAP46c1G4YTQ42w",
  "key11": "okCbbaPzyth4oXs8bnahtGHj9saXf5GYKrF6XkLB2odyg5NoLmCzizoYEaKPcXjSpKi17ngeja74Vbn8PySCCHK",
  "key12": "2BNFo33XMu96YdQ7JWF8zPUkMvMJ5VdQdutKiZqpP1qJGnuPZEpQXeyfoQfDa7qdHdBrgZxSmXdwSDA422NL5Tgr",
  "key13": "2fLLxYAyYKEBV6wmoxyNJ6q5uuawoRWx3TLoVPbvrQAEQwPYc2n1asE6H5peLZGHgekpPk68vfNrRso2jyCxm4YX",
  "key14": "56AdRcXmSNnEkTa7teBc71tSe1uCoBmX3EY2VNgo16GSx7paNgGEqG2S5PG2aPA9snipgbZrtaHiRAJ7gBaGmAhh",
  "key15": "3CDAc5Z5agEEiqrW4svBymkm5LXGFRS1VKeE5jKJJJV4HUYKVXruNEjdacwK7ktSAcVfRrUJZzKrMSjSegDBJq6F",
  "key16": "3pYr5jU8xAA3w1gEvJNzEbR2VfA9H6uSDAMUkYieabjctpU1uVuYAZAqAnbWHQv7wAY4GauJ6LX3QEaYFm8BFJfb",
  "key17": "339a74WmPHH2q1k7goQfFr6hxaAx34mGMuLoNetP9vvc7sUfkr8H5LJbmQ4eiULTQME7hZNfauG8h4VuFsM6UDqf",
  "key18": "4nveehikHzBNTVrqBgZkh6izxbmny4bjUeUCNnMGY5YB9XDLnHm7g3x1zBg5tFtiHtsA69aVrpycAehAw4g8EUgf",
  "key19": "51QuBJ74hgocB621okLt3uG9Zprf2S91oSnXFCeeLGrVfzYnjTCXNe2X6omyDanLg2c59gk4ibMgekFfibnd6qRm",
  "key20": "4piaHAuFCQu5s1j7Z6cEgPfwQq7dfuFzPpunEBbxyTTup6iA6YguwpsYXzJ885RyuTV72gDCnTnrZqoHQ2REDcFf",
  "key21": "3iiSdVHdC8xavX9Lusnh2eKDHynpAjN4nwXE8dvZk5QWmnAdVMwVraTiBqAwUAaobGJEqhCGYUXfujeTk2nFyoXQ",
  "key22": "4B4ssGekbRK7cattpeiH7ySPSUjr1FoEFqK36Q8x9DzZZ9XhDuTdms2uoPDbUYriZ8WwGehn5V9xCShxv58qyWR3",
  "key23": "3j9Zb1zfJqW6t9VA6pKuqabXxtdnYmo5CPxaa5PMoSLsnwmUGdgiK5himQrSXe6DXvBF9GyZNgaKk2mzUQPLi2mc",
  "key24": "XU8687ZUNV8Q3wMDEE4q5mxpkhDSnCQgHJuGqFZUWW8n1oUmgEwVdLEhCwz9UDy6yAVKULQaigFCC13NVHV7bfM",
  "key25": "5X1VM9ZKodZscvVZ6GozjZf7M1LmsYurnoaBpgVpbWzg63q2p6kc2HZWboX9pf9bgYcFW83K7ujTzC2CjDoG9eRx",
  "key26": "3iKYFaSYMpV5UtMRfcYBWyyPzZ2ArALZfQpscrubfupTDVCmWBs3YKqztYCgZXNDyVPV1XNBdhC2a4EtJAVkkR3",
  "key27": "5qqUbsdYyRhP9roXCRse1NvW4BLLjgJm3nMGxdhs2f69ejXCazK2YkYc48Z3nRjwMYSt6hTtSWLpAXWw8G1LDgG8",
  "key28": "3YSWmkLNLNJDef8HpihxnVRsukgvJqiq39W9PV1kWX4HYRJgWEgRg1ecjbLuxahGhF9UjqLGZE2tj6AHLLu8zgM8",
  "key29": "3g9mHkszoTqgZqvgGqPZ8N2BnY11czhGsmS2y77cNEkq6SoTbUbC1yRgYK7ezf44QX1b5NJSdfLWiFo68C3m9ozU",
  "key30": "4bJ7Ru8xZ4VdojBAyMqmLzwdacW4skCpqrvUPzdjtdP2HfUtmsaN33o1adJUCiBQ9u89GcV4VnvVoMDUtMjsZAaq",
  "key31": "41gdJuDk8Ay6NkifwLjafGdrFBoxLZ8SStXjNfQK96P9SAHenvZ5TS85fpA3oGMMjR1DBwU3r1B3AQTMjA9tHELe",
  "key32": "4toiCrk2f26azRy6MZ2gYjjf2tKXoWduVQa8xLWACYpzXWzYVSJChkLNEV3vBeZc5s1JzHcEzJXbisLhHof176XL",
  "key33": "4y2PGaNtH7RonVQYTDCHSseYVHs2CmnMZVDvH7f3G8io48akpymWzExkjPkidPGuSqKvMJA8DAsnezhY8k4pCHpb",
  "key34": "22yrgCtxA72oeYwXt2AqHxqLhC7MiYGTCbQimZHkNHhfmZoBaLvX1jDtPgZp3tiyEX2dtvtFYNUbc5vtCMfGS2Z4",
  "key35": "3pGqFNmUyL4z1mR7pYBgtDSn1fnq5Rm7TeMYEAiPHvt8GnHJbpLYXLdzrvNiAwMaiW1HDz84sEg8EMgLYNSmM1WT",
  "key36": "3ab8ccAptB2aZ3jcCNuMMhSZg8ALG8okm8sWeJtH61jM33pQ8meAdnAWTnxVNnSMSmoSRwNtySE4H3tktvXT5fqV",
  "key37": "mxVJfr56rTkytmqcYFFf6dyj7agDFVzH3ypqVQ99Xo9kbHLJHqGifw8144kLdJVrXVpzVgZfgz7bD7ho2Xrt3h4",
  "key38": "5B2dAKYueQGnAnd6nzYad21Utys9koFo3kd9P1AWWiBwJSytoe9U3Ff68WvX5y3vRk4yDGyzCzK1ozTxjtqVk6VE",
  "key39": "2467kb9MDBrDnfnMLXd8xPSUzk3fBgFJEfwiQBbQG3L5RfRYKXcdFmRUF8PftNcuaC1JesWg18RQe9UBjPhp76af",
  "key40": "38fxSDWoivic6vLkZoi5MShLWT6UtwZEyYbJZeg7cKWBRphbTrLuMxZfFva2yjTowyHD8oheqAKsyLLt3Hhe1QvQ",
  "key41": "2npDPSY7LJjPB3BzSQ1jSjWB6ZBft7uRhwAn3AXusAR1imnSHivAVetQD6KL7Mbd9We7bQ2224W9NZnpGyhbci8D",
  "key42": "4PZdnaqz8zcex9Z5naW7Q2yfAvNwpDTGDBg8QvAq9ka5MUn56wDbLAdAXbAZWmf6a26qV9behquJcbo9RgG1ZCwr",
  "key43": "kTk8iTXr5AAHUpEoU6q8ZRv8PztyVxmZVpcUQ7G79JncTQFkqtJzxpqLAPaRNZPYHZP6woExFQUxZcLbQb5dfUD",
  "key44": "5CGCuVoZRogJsaJG3HufHdwK1V5XVP7yFZds4aw1dgGazhiiA55NfDfnZCocJmdc8ztRAGNt2RXY2BCG7xXh1zVN",
  "key45": "27NuGS7UVPSb8KMSGZrgKXRttMVMfYh3ypuLGUfskWZXWS69fj4T4fmx24m9QdQnzka5MSXCzdcvezE2wgyNoVB3",
  "key46": "4LTGygfKos8g6MrDHC2wXkg9QfJJ1aZHu3TwrMdxgA5P8pXYm5Fic2u7ZtPb1D2AcRiCvQAnZzSmwXvE22RNnrrv"
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
