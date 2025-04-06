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
    "XzWjcx8yY8JhAMy2p2ysefnUf8ekSkHDyrpLBfUpHWkRpbMhxwCmNJeApmivVXxABMRRBitfSQXEfCSkW7LtYki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owCCwy7qgkMcomu7Vh3SVELLGr4uKP28ZGhPZYqA5fKrU2HUFSS1FgJDynV9m8MUubBTD2rnop51SdpTszSUP42",
  "key1": "3peF5zEAu2sA6Zfw7ccBhBTAv7nyhqBS7nZA3omdMYaJ3ozXrBj8vxDXewZ2FDr5w2hEAn7jBU8obR6mfo1ALAU9",
  "key2": "5VSom8K9fPKAxUh3qTrsQps2AStH7eTWPcGgKpTssMGsycZbBBAN3gHh6VuRroYZJiH2c2WxikimMdWbykv7ttu6",
  "key3": "2fwZZ1PAZ8ALh3zA8PFxwyd78GmhNLfe9LwN8D4nHYs5ZJ6Eo8fy9HaMrhJCS7T7Pm4WL9VRSGUMcx456yjuv6aH",
  "key4": "4RCw7i2Pbdnkmce3jWUatR5b3UdnLXJsqQpRV8xcUS1C9FPeKeaL25HFfjEPYx8gZep3fNgpyvQwUiUndb4SZ2Nb",
  "key5": "QBWptQgLmpCnb9DVgujZf2coAJQ3XxTssTxsQyZHk43mgC2SKyg9yxA3CbHZfuuawLecdJcyaxf8ZfN1QYAd98s",
  "key6": "3ffPAACgsmsJ6htomfNAAmAkrZREfH5urpvcTPaLTMZuSqj8cpxnihrvoJ5ioumaN21EbVgfhmcyruQignB5meJD",
  "key7": "3fKhcXf4gRPmzEQez49nKzCDNk3gB61C8mybrBXm6dGh393CvDFjeumUrLxEqNjqJKndjRdPVxJXQbCYa5ACQBDq",
  "key8": "yu1Jkt7jHQR3xe5HiVkxVeYnNHdP6jktM6B5oSFCu1gjMRZL5Xa1rY3py7X4orzonxmLAuvCoVsDJe3wB79DXCx",
  "key9": "4AhzSBtzF7DfZe6LNEGjbY49kCQHHoU8xYrzba7a6b28GRpKj3PmoGsyY2c9UKWX9xAb29rs3jZh3ZRSbTrL3ouR",
  "key10": "4cNwgEoYo8Bt4VGPS1eJzWi21Yrp1dMCQxB7aiEQQ54pwrq29okbVAKPYRHqGcU1hTJrN5pEPrQck3KJC43rE1To",
  "key11": "33UBnDky1awYHffVaWJdHubKFGeB9G15Ris2a1Kuba2cufTJTcdDR8TsHWoKwEDvRsjyBfQkYHX6kJW65ut5MV6q",
  "key12": "26j1hs4WdZrB5o7xidqheJJrCqLD7XAeDJfvBkYUR4LgftBV6u7AZvYgWT8kE4TxtZMDva2Bu9dtZyhVmNR6fqux",
  "key13": "3ehDJS9s2X11Se3yLtCp6nGDtpM1kxbRa52NQbQ1MZNeHpArF5M2kLbUp2dGsiWSDUZ9fivXHY1iYbgUDV94Qrzi",
  "key14": "3MRp7mgDv4aYs1zodg575EYN6gkwsQYrCYvYwvJKjZbsps1xG9LBFGezuCdnespJjDNQZCktmY4s8zk322LSth2q",
  "key15": "2DwEB3Xx579fdNrttAXmynkj9ox3Wx1Y3x7z3VTq6fwGwndeTMC8LgQVf7t3itmSPu9cLQA1gvmyQUJTCHC2TWQa",
  "key16": "5YYE4yDuLUtsz9bCKv2xWbWURurtJ6qGLau45FumAjvCZWRLrYB78DdpKNpx3QDkhzH7iuF3u6yCUA5DRiaZkCdN",
  "key17": "5jCsbRpdW8hy91eyhWqwCdanyQgsZbhMvbdoWBVwespx8Yvx6Y5sfCWA7vaJ9vF5jHkKUUbzFE28RpKXZZg5W8wK",
  "key18": "46x2ZNpom3dqamWLjfgbYG7e2n8BcLAsyj7iPfXaXtCXcSLAmLHheFVzxPZmnHRe5qAPSYGh2hZvUZa8RiHpTryd",
  "key19": "2znbqRmQF1DxdBwg7zp5EDb88HLD1n1gf82SanATgMC2EHW1WR1zpKMwKKHsdHvhVgXAPksx3QL7WbKwvmYGT5iV",
  "key20": "4SxAM2JE1PthdweUNP6vipgPqXE5MysMN4pakzEBQHkttx9oH9gCfwif7odjUerUenRVVpB8xXqKDkDGEejcNQgH",
  "key21": "52aQmCKqxX1xPBVrN1vR19iWWCMHkesfBm472rZQGvwY1o3k4yDZtVwrDLJPxosxsiGraSN9tsxhpEqSBJ93RDYR",
  "key22": "4STe4qYq1C5boUtvefv7TEDGMtgcVXV81JM6PLJUGi6AUPRsFXPHR7mohUPzazzN6KWvVugC7jA9pjGwRDZZNEXi",
  "key23": "2oEfaeRzWp1kMM9sdRpuri7qAD4MMsDaZfmci2vGp5ZGpaV3FkR817hrSYp3gN6CFhigiToEbXLVhj6Nt2z8vKDg",
  "key24": "3LJx9Wn96ibByBFCCS7Papt7PN9gaNZTvKvfabMLJLLLFfGCACMT5dwhQNhX51J4LrupEdtwoHzqg1GoyevhaNJQ",
  "key25": "4cqUxyaaZJFMMDroiDFT4ornkq1JxHYxinftotPFRb4DiwvAeGh5mqncEdWW8TqF19cweLBmiPkvEJuaQD9VjK78",
  "key26": "4Cubz2q5AhBGojNBggdonPGE6J5sMErxAJSt2Ea8ozPG3K22dWRkssWMNhDufwuLW11sxdAEj5aSvFE6ECv18QwB",
  "key27": "4qLPt2F1aEitr6scuHSYTm5aQABZLGhE7XmG4gaPRqegFdJj4xU66RKBTWHqMGZTZDME23wdF4RsK7HZz2EUv7Vd",
  "key28": "eFhCFDea616iiWiH4paUhp7hrvair31oSzRpbV55E8SLH5QDgtGKGFG3wbbBG8vuFNoiVN2ZD2iaxvh8fdDw57j",
  "key29": "489BiLWsHZCavFkXPKEvSBjuJtyZymi5KUfJySuD21wKvxdFrkpBjDHxGmD69GpuacpD9seu3fYd7Uu18bWnDoZS",
  "key30": "43Hn8Zvk7Ffo9qTwvWdeWoEgg7zWbs3pzWhVfHeawHXXwMuC6mfiF94gQMDi6Biqqs2MRE7QgQrJp6JRpLFTGfwZ",
  "key31": "nYSVEeNqdAP89hegWAv9rHPwQdHM9295rTU36XPppqYrTskUHHTKaAc8BGeRYfnp5QA1Bt2gBuDLbQsUQUwSoY8",
  "key32": "3HTJFznUk1crrxeoCi7YMEHnkQyRBQSLzfBgUBfgFEMQZxFujx4gKxydNLMmC8ucw9vAtjhjnA2N3SjL113e7C4V",
  "key33": "2nyDKt78pg59TJApQQEg8h7pZYoztr3X3Y25BVHqETdkSz5w6pwiHg1cM6z8V9QtvBgU9NKGLhCgrKasbhRQR177",
  "key34": "s2omHpw7wcesVvKadJnMnkTAENpDtrZB72dxp97u3vr4Xqp3oteS2aT6ymMXetNGqZRihMceoWvYA7HJZtEJuDG",
  "key35": "5CvPGmsKi9kJDfE45G8e4V6PynLDwnD4JfFhEQMkRXEcG12p6Hy3xA538jtU8JdjCxujhsYiPPs8su6UNfWDs9YR",
  "key36": "3Tn2uZ2RCKb4FAmsiyzeWv5gun22SdWefW96yC8QG4gnb3AEiAFaCBATxvXPZk3Jqh4SEscezBD5ivAPygCxcZw8",
  "key37": "322URamCBbaUzthWfsoJxPYYN8GnTwQpkFfxF4EUvxDavfv15wfhm3GCMKCJcsAWR5yQZEc9XMgdvnqdgnkW7Yon",
  "key38": "3TirHPNt1oVcBepDrtttyQ6ew3jCoMu9RL62jP93jhRerPm3goj2x18S1AxUTRohbMMRNjc8bHGC2YExfKDiMswM",
  "key39": "2jg84zfsweBL3zxqnD7Z2Ct7jN7Ak3r1E9x92fUtBgA2pGFxVUevYVuXSbRKKjStfZqbdRiVziAgrzKP97iiz4TV",
  "key40": "iCFY6zuKZ3FNPEKRUMjQd1EzSWXxv8qWQBPjyqfbRszHc5UcnRTcS4fGAyHYpHMnLXrWEKJJU4oofYC5S1o2E6k",
  "key41": "5L3by7sNrm8rPzpvm5TKHzYPjNsA52R1oqtZveCburYEFXFRP7iR6KknKdBzhyGyUeKbzzF28ox3SXP7fDaL4npH",
  "key42": "5rW4jYrLCq1tcW1rKhmUaZmYFCV9v9zTtNjxzLiCLxm6nbibFerEsTf5gtoaMehywi3RNXk1CbBmMuu5jDWBQMCp",
  "key43": "3Q5Dwb9eAkJxdfj5AhJC2bL4pqKBEHytfemBrHJKxGMkeXkFCQWu79bC4CfxfJgMkXK6VkMGL5hqU5sw5hL1CjVN",
  "key44": "5tGBEzrHtjNBr7ZwtwCaBGRZDEFyxDK9V8ZcgdRb85rMiqnV174q6SKVchaQ3x3TmDVefk7kBVEfQi2qmW93mXNt"
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
