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
    "3WjNmffhsAehwMNvuqRHFTocdfkAqdkKNF5mUgPhrspAgiAfqreLvrWAVuC7VfhUGfEzzHE7ccNEUqr16yxvMuoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvUKXozG3PmnuUowuyirG1KBbEYzbqmkYEyUcxheL5x8YmD4mDkprhUVWsKAH4YMp6F7hYqZx6rpLWFV8qyTyfc",
  "key1": "3WJ9NsSmAUYAhkPuMrxiWDXKPFRB9vByFcz3RtfCBhNquuwmWSWozujBTTMq4q91GbkJFdAW6MjL9RVg7kHZqiZj",
  "key2": "28JeQFnaRdrg7yeA2ii86TexeHexqJCsTZEUaeKxq3oMPxfAPCXRoxiq29gi93MXQc2LL66NZvCQRZmA6EU25WAW",
  "key3": "62bVVWxiKaVBgkiHAfeit2PoL2x8bGGVV5K6cjYbPMvYeYHbEzp36Mewkn5kSXLTcw5edorcujCb8JDrPTA1Y8SA",
  "key4": "2faRTk1wsrnm6Hdb2qVKrG9a7sYDX2evLduJFKEFqmZUgkgKrLVE7zuyVGT9TrKx4YixANcJKYb2GhCtmnNb9uAq",
  "key5": "54jBdjbaL2JfsV5F1WtJvmsK8dpu5KVkDA8CatWyJavX6nTm5EJuJ5wLs8tK9JDeWT9r1Ago1s1TsusYWj1e5QpB",
  "key6": "3UUSKFuRnwwVM5Zs1nSAaRMD1uNc4KnPABB5w7FNyied59pGqfNthVznuiBLtWG6XAk3UEP6XGBMoDpyRbLevn5t",
  "key7": "Ti6fsFwRfw6Y5fFmRUu8Ad1VRQduxiCtsaMWvEyzqaAYgKipvTT15qGkNqPKGiB7BzsZCrobALwfixBW8wDawYR",
  "key8": "2ngUBk7bvpdU8KK3tKBSunTcpmoPk3SrvVQotz7pxV1QJkzcbpRc814dGPFCrN7PLfcLSnxFJQKqkUeJ64qZuYy1",
  "key9": "jtVHFF4SKsxTJ2enhVC5g1sNymRDn8kAezKpyu1pZ5PqSXstUxqGQzKvBQ9Mggb17JvqQ16FRzoyDtwtsRjwjXi",
  "key10": "5LXiGJefHxYRsmMk8UBniTDErVXHgUkruQkNjtJcBoFaL6C6XN8sKP8uqVQQSu4cqBo94kpyn4VkEQPYKaQmjSms",
  "key11": "39eqcNBBUf4GAs4VLY64ST8KxiH6AB7CyorsRgkfqMRUGrEo59m9QSqXdJB6Qd9jDmSW2GvDoAbi85HnHAQWYbXv",
  "key12": "3pnVMGpdGAuEwhbyECZQcGea1LfWe5Xp6szuF4849jLDYZANXX79hMxpdDh88PvBzbehbc3MpZJPKWiycB8i2XMq",
  "key13": "5eobtWsH1mGxvQPo1u1bL7kDt2rGeQfhD9T9gP3X4Kys97suhCKpob3vpfv3gForsp4qr8PsoGB8yXVa5U6mEDxb",
  "key14": "5U3kEbkjSjQbxY6z96RFKkiVzz5btGiavZCpmfvKdsvrdj1SSJdkotf6RzJu3pALoWafKsdjcGhTg7zLYtTLF6oA",
  "key15": "47vLq2fGjBv6s7DMj4Uyfwt9viR49h9ajZRHHnX22TLUVmD6DvBFpmcLYFKNvujPu5qCpHzwgeCFn1TJez6tJiSc",
  "key16": "2QSsWpbGd8WDr5V2bhfSasaceEbuT3mAg2ia6gnLqmtRLBPt1xWma15chTvQyupiJdqDbPFJ5HLwkdnyYXWczoTF",
  "key17": "mfsZzHuW815UyL5CJza1NBvFLD9yxqVnXLtu5LvFcMwepoYdTKA22bbG7e9oJqMVMgKqxTe1Zrwx4d9VjvF6fs3",
  "key18": "3f6kwqGWADBmqWiEiiTEdxNCvC75qTrSeDSfJGkgBXT9XaN2rSKw6RQZLDEXJoDcmzcYz38RzvV4bDXSfGhEcLGU",
  "key19": "4utaBiBWj19TUuVnyXgVzx2GFrM41qbXSEVt5fpD1reT6spgjpusX9FmPXX7u1SWio8vJdQBz2acFy5kWheBfyuj",
  "key20": "2sJxCV2vCKErKmzTiQb9MWMaUPaFZSiYjrLmUmH3smxTYCvEEUpnECQ82Zxak7kF5uSVzupQfh5uwz21RjgjLqGG",
  "key21": "3hf6zmmhL8WMx3nSZuf3D65xNu99YgLhDjHQdCrSNajYmKdNXQAWiKwxvXoxiukXskyY1bmaGhD6YFVFRYeE7VNy",
  "key22": "4tH4FrhVZs3AKtmMDqBmkV1q5Z8PJgtKxUYK1BzaA9dXiyQ4ggZB3VfrZ7RLf6YjGCLG6bkwK7hkcpVnHJStdTo9",
  "key23": "3ciVq2ntcrpFGXyoXwVvHygucLgKg3X3uBbHDujjzjTPzaLVMwZCAf5ZbsFHEFDq5rL5cXpvJBoaTfkCFZ9jkgs8",
  "key24": "3J3sisDGk5a2yWDB39gvqjx2Y96mDdkDAuVNEQgTRFYWcoUbdL8SdecasqRfvtLQ2yEPyCAztsCaKTUCeo2PyYFk",
  "key25": "49SBaRRZ8qreSih9JsETGUBnQUzbiSQhLkwuFP1yqUpAkjHxSsiB1u2HjhxqgSsoBJ7hpQW8ubLsZpPVq5t7Jr63",
  "key26": "5BpXcA4u6d6QtBZrBVerRLG1Ug3nbMi7nofZasmaj5grAWFSuqptdydmZ3K3DD599jqa5hvW5HZYtikrrrSbfezD",
  "key27": "315cyq5Ej4ZF8NccnWAAz29iBHQpE7Y2jL9ZYqnAFynz4i8LLKAXAE38owwiMCfLNsBdQJ29zwkjD8K9UNsTsjTY",
  "key28": "3PMDmYAEsVvU6eBe3Nx5e4SBGZGEvEduDneZ8U2F32yUPZw5dYSqokpLr1qrNttSxBSULdBp8aMGm7rxm6p1UnU1",
  "key29": "5CFAHPkiHGdwDsSKfSTS4HeW8Aagx1vXxwTxg393f3eKMyCRhrYKTvYFt65BWebUWSTs4ti6FJctVakBLdTgavjY",
  "key30": "5Y3dzCPL52x3qASbPDGahmu6tgB2QSjj2d3vHvbsrESVJ3jGFCU4NbF2epqMJMPTj2a84Yxfkndryrp7mTHrLkcr",
  "key31": "2Hc4xciZt1NNfEJJEiPBHeXN17eqXgzLHh4pTeRvMViDDmEMGET9446QENDV7AaAUZYvKgaBPe4cLKpXJeaRc4sr",
  "key32": "3NdVE1HNN2iHMqPVajYsvYkeWsirdUCaqVaVukdrpJeavnuNZwcvcsi9TnTjxXJ9Ht1cW8YVMmoNR8D2RBdbpzR3",
  "key33": "5qi6U5Gs9uFyfP8w5HS9yR814NT6amXGmHiGtVncPthieeZSH5bcgCWmcSuF6EvHPycp6E2EpwXyCN9Wadm8d44V",
  "key34": "38pQNPv7qoU8ruW1Ct36m6J7omx5YLpi3XPuynBUmWF2iMXurpegV3xzJesRXsPCjZff8bvB14nJoEPrtsn4PW6K",
  "key35": "398FWFd8MvCEuKNShsZGYKoHgFXDesXVWTvLDNnVrZYPxTfS6RfgJyvukK4uXNUfzM73PCA5uydCc71mj412Xe73",
  "key36": "5czzMnzur5S6Paatn987PbXovryzQGQJGT8545dqsNtqSQJtFk1FdJc6qohLBgmzzgQKNaq8btTc3P6W4L14KSMn",
  "key37": "4s7xa8AdizNMmsm3JtTZ7EATva6GTrtVa8TNi7wfdVPbxEzN2oSSQ29UaJuuKryaaB1pumymgXXkczxXqvYU35H3",
  "key38": "2CzKEUyUf1qFnMvwZNCWiLL6E2aALUwRsHMSPViLzcGs45L7fZQLz4H9isYBgzCdom8DkcEHy9R68km1ZoYbc5hw",
  "key39": "3wLv4ERM6GphC3YYKkjuDRFtgh2X7S4UsoMc135bw2Zqo3CWJeqRi89SdTUfRXj84DibqaUWcNDvpQNMq6DzcWEK",
  "key40": "4pTJAFtyLGsrjW7WJc9Ytu5cVpxpNJEFrcwCuMNTC4CfcJGVKg86xH6EN3HgSbkfwrQBcgqekwWsBGmZnWekocB9",
  "key41": "4NZwQC9K9mGdjYgufeiLH3kEDWth1yFVdCBM21zDcgD3nsSXsgACUauNPHhyUZj4JqDufmF1ssHwwY3iTTvXkMyZ",
  "key42": "R4RdsniqSZy6Ng2dJAgBneXvwGB3qHhHVBbzmFz2cFyjse8Na3ELnhyFVkKYU2opHuPgVHGbdPJVSr7L4SMyAje",
  "key43": "2dwRjsutjPgc2f2e6uJr9wAcQCnbaTRJ21uu3TLwRF7HPf2Frt1Sh7APt8oTgPPWXsUPvaykBuSMJ9ARR6fajpfh",
  "key44": "3TMBGNjFWKMgo7eWTHuiMsdkwVJcKbbbeAAUH42ECvDPSQmMhRTxgtzXu4bZkfm7aNi6GyYJMcRy4DVAB5oPeU1Z",
  "key45": "5ZEcHeL8Lj5QXA7NB5kAV9hyBbNwiZJZnoLY24DCwYJgu18RytaE4jzwXKZukuTrS2xqR5oRrrpyVgVriHi2MUri",
  "key46": "2ksEjR2QdSkEBSL8NgeSgSjUu9cmdT6a7EQzm2KV8EMGr2Xu5cMXaA7Mh11zx6jDbe15AkWZKzUcvs1Gh5ex1aLe",
  "key47": "4RjsdRKh133mAQBJejchpSVz7PtmbxPz2FT9YBW52pNnK6DcaxJd25NiNBy7FVtN8RAYuTARKZE3KDBoT78KeDid"
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
