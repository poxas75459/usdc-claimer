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
    "4iUd7vD6nCtyPpA3j3TKuSDbT5bDYikidCg2zUqiBiGvaofNK1y4j4kTTk7hKmCYzxqriHG4CuUc734TsmUFTMk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kocVQ9EFDQ8gvFvcStwypm3csB2RneqCGT77wF76QE3pNhASv8PtrbKHYVjJxMAMtttMbDhuhd183uPdGc2vqEL",
  "key1": "iVqHZRXvvfiFaJf8v2RQXRGr3FnHSGJnMMFUZ4sUAx9Co4rtSMR1rAGLz1FHSrS7sv2sy6HH3yviKKcpHDnMwdy",
  "key2": "49i7EidqUVAqKAdyKczmSGWGBDuwgWAy4AqjmNvZtAMWgDWMhD33M5Si63KPSaPGkdhD6etq7tm9jMkDwzknNqyP",
  "key3": "4JdNT66jv8kjQVe8xDTJm9LE8KSYbymB6r8B6J651AWE5F31m8rM1SwAPTL8BzeZJnztgYpFka3UgoV24ayQySzh",
  "key4": "5CgD7FgfjBp1b4Y967qpYSnscwVF8jACauRoBaniFxrA14MQAFLoqAFBB8Jh3M5c126JpjzPJBhF6wGRJ7e1biRA",
  "key5": "3KXejndbkDEgN8btkXZdp3KPex5uFaEMDETYhcaC1ABdLeXrfTCZsnvQHzmZV1b24W39JDoXUo2ZsBP2cS7ZNU8E",
  "key6": "2F98YJnEvDRQ1sZzJT9Hn3JCSwq3LsE2KCX2gMc6BaPATdhoSAFGkopNPW8jrCq3iWzJKdkxBkipjZ38oYe9dFJX",
  "key7": "4JSD9LZWN3tLpCo77YXR31kNugFegP1JXmSnFtXvdTHVMSpmkELMVXbbfgVT88dKU2Po2tttTvHnFrnpmXcaiz5E",
  "key8": "2RmboPn9Pyxz5JR4h2iGQ446NRP93hoauTT1LKyrY56HtSpdGJoVkoRiurDMn83dpHZCPXhP2LF6SzrWo2heuP9a",
  "key9": "6GX8fKUa5m6nFoQtmJLQjMTsupZemzp2dzPto8EH6hdy8xvi4MVgPvpCPkPtwBU1ra9HnbdJT1FWGhSaduy97NR",
  "key10": "4wvMoFutrTnDaZx2yMg8XuMZ1pW3bFnbvLhQ7AatjD4D6uhfyJja9VjixdShzd9bithhfXNrCoA7QxhBczg2RbX7",
  "key11": "3xQVcdA61wgntRTKtaCaeC6oKJTKH95eYEWnXKVbn4FrwHMdVFjUGT5EJpnjbCFH3pxAcbBckXoKPQiBUfwvWk3h",
  "key12": "2YztvjkYvLVi2WoNhYytyhELtgrqJLDrLPwcQ1vuWM4Zduup3ThrLQR7Ym8KpzrRawLSbWwQMmUhDQNV5vkQgrhR",
  "key13": "4PNsFXvyVCC56GGgio3EenWWqixRXa6iNCqueyBuLnTrynKBg3dUsuoXf22ZfqJQkwGTjsHJrfC9StPb7NvGuPG4",
  "key14": "3r8Tkzc4B7VbTaQE9sKYM4uM3qFPAabCAKvwU493JjgbXBTy8XKEGx5uDq5basURJRwKTJzbQpKaQWaXZ4UkgBo2",
  "key15": "5R3JDrD4M68JKVCvkmyk1BjRzySbyytMM3HGMkEUrFK2xYiVrTVi98Jea9vxYy3pJ82pfS4FE6gDTK3HxAB9iVUY",
  "key16": "4Kd1ndJAmEHbTGxsGbZGaLaVnewqGCgq2NAZs1jEz4EuPdT9zR4s9AnQMFcpUncKocp6Cdr1ksT4s5svKG6gkNFr",
  "key17": "2cUFzcCUFyoxgNEoEpZdMqmEe2UTF294W5gZeU8GVuJURoPi2tpH8YAT6K9C5tbB8eujx3GjzvVwWgscFGYQEUDU",
  "key18": "bzhKroh5eQtrkm5shd6ZbyRBDdyr12N9RtQ6uGDm87mCa4yQahMMbBdQg2Fc7CWPKikdieNEog3SgUsPgWuFRvv",
  "key19": "5w2YfUvPCirwXNxzoc8fVj5u2BdW7gUNk8fVdyi5Smo3chNDpz9xJz3XZ2PB9tYVUp7Bte6dYAzTTHGNu7vREcJd",
  "key20": "3DRMLQwJjgNPzpN65DNKVmqTDFWsfpQtUB7Lwh2CwTwMtZpuF9cqCmNXSvTHXeXfio4FSsnr6Kk5ihgSwMvdEKwu",
  "key21": "5XCBgrruYpz9Kka7fy1VwFWvTxdsyGqqmnCqA19Yz6j6L9cfgJUCVdxehXgdtx9ZAV6hvXc8Nm7BCPHMbwCTNGQJ",
  "key22": "4JAzTxMC8vv2JAW9xA9VVykNaYFUvqwxsKqATLPwaq4UC8puWY39Y2bzRSboXqhgnceSZMpNWEnDfySB5Pdnoy4j",
  "key23": "3m6wPKcRcvPKCsYRHxejZhNkoeNhsVhoF2s5K1EFMuvmp2nNYT9qfzjd2ZvCeT2aXndoy58GefMw5VU3JkLjFzqV",
  "key24": "5syjgv2Syi2amcFZxXboQ9Rj9zPbkBRSpixQUQo8fiWkoZhLbfZtKLKg7QnqiYf9nKnkeAyhPQjC8yMkxRds7RK5",
  "key25": "7wNmD2sKuiRExgZ7sRY6smLMgDw5onmgpbk28ULNFVcM47uby81HEP34bQEyRa8LECoB7K3Lyt5LF2HQqceDcRH",
  "key26": "42H9xcpj1iR7SWzf7PED2xt8c4UZWTWTQJkT8TBYAcXipkjiBHJrgbMUgAU57sbR56MTDcceATefActUbVgLbNq3",
  "key27": "4wjFF9XYzJhAHyEBT4rjG9dSE6wruSWpAcSxm1FZL9XuxPCtNSvSrh23SuFgUrCASxRBoUtvTpF2Tapks7cSagGb",
  "key28": "2zMGvhnp6rKpUNuwqtihYFpLqNEvWrkUFjG2i2CftzjdymRV1YQFu7Aisy3Es4BnBe9RVmdGg3tBEw7WynGKKoPw",
  "key29": "5oEvTmAo4sdDxN3AAdkQ5WdTz9BfoUE5dzqHQrqENcK8ZTktR9hqRRGFGF7NAsRH2T9wdrkxqSnn838qFCkaPSru",
  "key30": "5FEYQejBsP3owovXUfobtmig9KJybQNXQSXhnWhaSXeAwrDfLosMmdx7RB27Te54Xw76GEtXCdK9SCS9u2tVn765",
  "key31": "2CEZ1dmqPRgwq42PyukL1RKdHBSxiBKP7Fj3NEVch3h8N25yz7upDCCA3SHSDHaM8fvynbmMwDDsxG6Y5pzME44B",
  "key32": "4aE8dqLptnMuQXxx1r5ETj4QqCbjGtKF942ehfe8FvJxCCvbLKuYbkjBnpaBsYGSwKaY4XuyMp5J2QySxG6rA5ug",
  "key33": "61qika27fQAUokmUXZe8fgBFVcpCR1f4zgA6i6qETNNV2nf7p6FKAYtNEVVZw66XBH9JUDNpDi2HkCm5BZ6yu5au",
  "key34": "55zjatZ6Rd7UHEdfyUi8ou1XPZZg6xdzDh4szCU7iBQZ3rwH4fKPaNs7ghQgi6QPQ7LLgPhLs42d9mee5Ck1gZT3",
  "key35": "4chthoj3YA9LHGzTaKpDVHbZtJRfzSy59fc7JykZMPEyZf6d2zeMbehTHnVFNwz47YzXFPAJErGgWtUaQMRDFpoP",
  "key36": "2PY2QCPLkNVxKAgBzCAx3Nkb9hYPKG7oaaPGFUsaSH2PecRg9h3c7qrUbSMoWfhKeziUBt9H8zgmZTkr97xzHseM",
  "key37": "WapQ2yQeN9sEkfFf7m1DeSBwjxvELELztUs4wL4o8wAqdEBz7RjFj2nYrrFtHem6pTp5ELWuxBSdZduz1Vecum5",
  "key38": "4FaYHhm9yKsggj57JAu5NZpvHwgbuyrrsjvmFK42u8pY6CR5vKFmahLAndkBPkBZyi7CDefhuifU2pWjR564aEfV",
  "key39": "4ADLH2q6n45u5wx3Kqk2P7wdp82k2YTbpHPrZ4jZjVKPLHna73ad9ZiexzNDpbqh4po4i3StD1ZzRr51vWE4nvix",
  "key40": "4Wz8FvSXgysgW1YTj4LaJ5JWaaNrxg5eeJqDoB6jxzbXs7TBXaqpodnj4XQGjJVrZHyygCrP36jYuZ9ARsvvxfyb",
  "key41": "9peQZioaSoGZVyeKdc3yHdwTzLetwJRHfymWPvvxRGDRbnZrBCiSjZDFDL4gq1rMbCZ7pAh3vRJPpUq5GuTvNia",
  "key42": "2JuACjHasXnoZypYyzRBL1gWzFeKAiwtU1TEpLLhuWWfW4eXeySktVPB5nWa5B9ijqt3iQm7rdPtbbC2TfV784hu",
  "key43": "5VjRCnvSPkeREvvZDFVqLuMSSufnfeHMbaiQgmBiT8wmp6PTPevTERKXoMXJZtvYr4VUfEu7PsV48Gg3LQfkWrki",
  "key44": "2fcjeHNfpyTrKPvDXZPys2nXQMG6AkiaBuU7CpfvTaHJ5KS5aXwfbTBKydbQsEEjESC29QYvW1CfVgvXZQYW3vzK",
  "key45": "wU6uKWXeS5HLxt7RmpoHavNqJvJ4YGQ8dSt82a5jyWMzchiMCH9KFWHzhsYgo3YowU13dxiQx167tR8CMzyk8BE"
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
