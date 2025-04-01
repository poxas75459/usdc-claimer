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
    "3qMcJAueV5tdxDpQoyNTUJXmzo8TJ1KJgJmhm8SQgEaMK6cYtHen7DQBFoGiUUdJz2cFZ1wyytrm3i5x64nsE3QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FooJ3HjpD3y8p2DgMCopudRVDnxuyQZmpa4ZTgCGs3EZuHDQvG3cHsqRWwziV8cJ6EcnwtT4GJyKWP8N4GGTenj",
  "key1": "4nWhT1iqTJCxCBKkfjoxsQka9vhgr6BBHnw2zX3xhMjAFxnSR8kuwu7EKHn6qr6aMjgbW9rg2eFdHaQynV9nX1Pr",
  "key2": "3kFPuHNZdTXFjdeP3QgassYR37GjVfu9dCsrikimFWETFBQxJA9UPQEpF6FrpyWUtMhjVNLw2YBWwFqSsVzWowSw",
  "key3": "28exX2BUbAoYSKWHFnZhFiCLmuxwu3e4v6VDYZWNiaQWMFF6GfNSaynxT1GRUjMT1MevBRtxDnJSB7RYMvri9aij",
  "key4": "27WAyZQsMQM28uZLhYEWXs4aB1g6dEbvBY2bH9CQAhT5qFkHuedv1i3jkTxgw5aazQJ4jSUyE6xQkPBA5GRRwA3i",
  "key5": "3HF3MNswpQobXkLvNDXdDCjwGAbGyaU3vT1viNqjBdQ8PZynBGmZGop7HN51yghZv7RNz1Cyz1muwY4czWK3dTsE",
  "key6": "34cJyPwuFsPSTbnTYktkozgEBJdgxaVvJUtXshHxqpQZtMdMr9SaYp79iXdViAM9393G2iRdZLz3Cicf6ysi9NXq",
  "key7": "tuKcujkhCuGXx7Px9SReqeCt9oK6XfgLwqDWuvrdVQUXEMEtb3NRr8GMR6uyG1G8SFbYoDZaKE5LPQeh7yv11tc",
  "key8": "4Pma5maNgaeJsJ4yjCgHGTpNpxwbWErBpw291bjmdgE9YK6bEFSoV8eU9BoTHt35iK6y343wj3qR65yG2MhTzH2i",
  "key9": "41yRCGDJCaQfr9HeoEpnGeGZr6Jt7utaHm62imHSLL7gvL88aLLKKdwqFApz4RkoLk3nEshAyTDiPfpMnhArKLPZ",
  "key10": "2wD7ZFEHCmD2XCESJmKdBFzS3vVGjN7tfzWNpeCzruBU8WkSCxccqhchqJvZCG1bed6YNFoYsihZEzocXHjupUgH",
  "key11": "5KQ8j36jwHng4Nk9mr1oMd4NgR4uTdaGurWgm8Y1Hk7Xph3eULFQWZhgTMZwQfs5aJBacQSuWKaCBRqhmLijpWdT",
  "key12": "2st3Wca41AqeRZ6pScLRxgvxhUtrQokPFAYRpRvEapaVKxrwctUpWB1F1U44nchHN92LGJy8KioMAS3tjMswWx5S",
  "key13": "2Nbr55stkPgSXpd4iNtZNQty5HPEB6jECGKKWBM9RGwwqAz8mAeM3hnUwBjNEBcCxAaGiE583AxbN1pbXwQcYX1r",
  "key14": "3RpKcMZVmW1zbuoy9MELQVAbbo5jnQhpWq4i11Zk4U9A9onk2Wkrs78svD6nncevNH7eeoFaBcHp4LT3ZybdDW93",
  "key15": "66MyVm2tu6RqaiuhQL4xp5ar4jdpErFQYPpDAWou79NAHqhiq5EbhsiHFgGorhABnMU4Wsm2BFmick67vGv91N9J",
  "key16": "NdjzJpT9qmWwim1k5G2M9CJDtB9o85w7XYrYyteqMiVoPajJdpFy1hxQujUmLkj6tep22MUkdER5P8EyDdSMu7h",
  "key17": "3PZqAEcwBFYNArz16JtQPZkvM9zJ2SnsjcBeef4m4nrEu5bowU6FDRMgLnRc6wURJqFuiGJ6TsBuj1NK6tsqTHhE",
  "key18": "5k3EREFvWzsrRXFdHC8H4px5NaAkfEqpjuPHfvRLQrVGBm6W8sLqYFg6WvLxFpPFE6THPMCp4FvvXUf17QydWE2p",
  "key19": "66gq5P5d4c7nRA4gnAnJgbq2eJUCoPf1Xn1BH6hocDQm3dSBqohaBoVARyj91xoFwTSgFYQw3eLMPYG31EiCckbm",
  "key20": "46WnKNdVUEVLJ8aqB8rdSAdbzm7boevfryQ8dXL2o85yRKt7uRgjarKLG4Rj44VF3dXW4tw83zeiQwqDbqrF2Bhj",
  "key21": "5cx3XNGRkADZHk4T3xK1moANj5ny2b57QmkPxzB6YhEWEUrcyz3Z5PQphxXs8ByGA86vJsRjfEyWTSiraER2hRGm",
  "key22": "55srm3vDAGJJPPJD3PgPUwvjyD1zKqS5FGa8YQHSiutHuaKxrxZRkFCqk9U9i96Xz52cqXgS83YrPkf5jSXUR5kU",
  "key23": "4LWbczMqkcyiVSN8bo2z3xfR9dzqeL84wTuxatytRZ9kQGufNPRe3axpW98KbiyadMznPLXbR6k4NJrK6TtbA8oM",
  "key24": "4bMVKKueRUZ4DjZa6hDkiyAkAcMXN3P3ze1ZFNzhvEK3Yb4AvBDQco7hXD5prDfNbGgMJX1G599QmzV3f81VsHir",
  "key25": "2aP3gFtwz5zJJpHJ2bEjHtRAvENv8XGS37EfurSE26tQHLCC1zutSx9PiuyVVnxUxHpnRdjAzfn11vFVD9dHQfoq",
  "key26": "5W8HDQeue9ABXheWteDwbbnzbYpEEG4sde9ewf1Yqa8KArFxUtbMp9N8WFbHZkpL1TgsHMPLRuBhbahqG8VZYReu",
  "key27": "46wUTXUQDAnaKBfH9TtuPDnjDJ1ECfunPQy2t7pFp9Z8KsvrhyktibS6FDgEzWtH53dzpsMMnYLJDgBeeqTWSDc9",
  "key28": "3fhvyEbxmBxHUrtzLUmEBHv1PFVogNjSDJb7X4Nio6BGfNPrUmiZVNR91SRm7SPCGztA2jpB2BN6Dbre6ZGDM1Wi",
  "key29": "3KpyrcgaiEEXqRyMg9nTQDRJ2AfWQUosfh4w6jY6zUDC8RDzcPXjjXfm9gD1n92ugKCz44w9PRe1w4aun5raZmwu",
  "key30": "5TjNrSm6RBntQfj7pJH5rVsUfv14yWGBaeLUMee752HejnyiiPx5DKUw3QysmQw55sEUkeJENQq3zPkVW84B12Ua",
  "key31": "64p9mgzSFtuUTfxDhSCVAM4s4DgsRaTc2Vjzvx16NacKWRuqibEwKMSerFLy1zhmS27VmHYY16FXWsaz72AgXFzc",
  "key32": "VLYasUNvRcgAgmAKmu7hNUMAJb8hqqtLmGfFrQzGFAQXCXeTwhnPxW6679AmvRNkiEgSt7Z6SDRW1nCeGrjn1vS",
  "key33": "3gDH4oz7TUFuNqaUHq4oDCeAW4XXexagbDnB6U6w4tK9vsLDwK7vFinq97JP76H6PBLCYJXRLovrnLHGQdzFxmPV",
  "key34": "yosqUWRfms1Y9UgJAyffWCi5YJa2sfZ7pFsYwPcVNfc5JYY5iq4miug7W4BkSrp6QcrXJ5m6zArK9cEmMLV8e2w",
  "key35": "5FgtT7nLvKYn9jfkcM4RLkYAhtatSi35MHnsqJn9Jnwu62CjutKFYMmiTgyRgu1wW3VJyf2qtYpmvPGkigrWnoz2",
  "key36": "DeimMYaT4DvRLQK4bnVz739ZumBwMqfgwG4BJsjDe6PT5C9es5xxPB6HHSwZZrPDPXsnMCTud8TEJqbPGYJMvCj",
  "key37": "2UzgfvfyrcfgFuA9M5rjBzipwym7R2vFA34AiDqiAB5L2uLHeWuUMQsJwNs6HmWwkA134fciRmDDWUHe3Lty5o5m",
  "key38": "59yP8z7MHTXu2f8wbGLcydoqqGehrHNUMQea8EUJhHmCPdEzomu6EtYzBJDTHo8pcHsW9uWdLtNV9n2QtMkBXYJF",
  "key39": "47uc1qzua1hoUTG6AtnLT9hFpKkohrdfEHKR2Y2vsPwni7y5yQKEXV5GjmH2NKXnsWhxadxXmjP68r6M977yYuUu",
  "key40": "tNG2K4fFBWwUVYHaBm7LPQy8wRwMAMYc5qzuB3mpeWqxrQ29iLRjvogHEdBu5gXPNa3bwoaEoZCamXpYye4BdwT",
  "key41": "WRrfksqqiEg19qxdqxVdtHGKf4vAzDeypw7zCs7hLRcfA49dRJ967dN4SrqsHWPegimaJg1NSpU3tM7iGWyAE1S",
  "key42": "E6kD48VF68VUDB4crnwrAwJEZDEbao6ssbFeyMwyYC8cfqBRXYyf2WYJuB7F7UY8J1rLgMJVPj6wmavckWxg51d",
  "key43": "4K3u7VMvXRd35qcEtduZ5DzfZBdzHQ4Vz9D3E4EsBtSdkn3dX8PFgTj4yebmjXhoKVCf2agHqhm32XXXZQtVnDX9"
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
