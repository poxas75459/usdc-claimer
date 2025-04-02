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
    "4R6iK2SBpM4grpoykQJeVVMTM2c2YeEEsHrb9ZcmhJWdiaJyJnubaKXeQDc4b2w9w9hP9YdwZL6nyjHPQZZ2FNr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R2nKd3pLEB6JHULV7KcL3uVff5GbVrWUfFJW2HGcprTpNLUBoPej592ZzSMgckaJLqMDBDZffgi9DuNBqbZN6QR",
  "key1": "wKCXABmiKQQiLoCs3THLGBr8jhh9xaJTK2sxB54J1y5o34bBPjmR724nEeS7HRYPtNE21wcq6FdAufnqJ8Z9hCj",
  "key2": "5r2THN2TZeGA5Dz5W9vLFsp653MLywSLGw4a3rKhvSN3nSnTCSWPZVtTHUcaCef2jNnMiEsUoh25ixXDKiVU1iYE",
  "key3": "4eKHvv2qp4AwF4YybBxa8eCxnzGEaBRxauns1BxhtFoVNYdBwudjJrdf7NyKcJqNWTbkoc5Sg9GQCycQ6hmrcwft",
  "key4": "48Efz4oj1MwUaaTNUtdrN1phjq9BvCZEw8W67rBJpwkrMxVQfqGQ75wvPjnHadERxeDZCJmjQAy7jXfTUXFZX5NY",
  "key5": "4XaKcDkwETRkCtGW6JSrPJetG8uV8ZNgDYtSEZ2ofCvSnSYeJ9EBerSAbm4amz6RzP7vcZEPhGa84bbWyxSzKqjP",
  "key6": "4Fm6uTHphBr76WijSg98xjEGfMTW7xWpGDNS1T9FvJsfyMo3ifTEbTuGNaJcBgMEeLoan71G81AKP5apr52k5Fe3",
  "key7": "45jFQ66aPHDvkPVMbLxgbXq1rWQMdfZgc4uk5yB6yHSC2u58t5L3yh1X5YoBxWjAjcv8xxTeEe6W8acuzCJnoHd5",
  "key8": "hTEK37VBjdmCsvAfPwUPZ6CYAqvWST6TFr3gr8K4VcNSLkemBjfjxFdJEu5La9kJG2upSB81z2AimDonZMoGpEo",
  "key9": "5sKzYdPvCUQ5ZRQcvMERqBmRybzQuRordgShaaVRVCfdsBeeaADLngiLgEqNb9mSQJijd4sXEqDNtQsAmcpdD3hX",
  "key10": "2uPpgc1QcjwB53o8Ye86jngRt8pSxfEuN4dJpSbA4gX84dGRNgvZYEotfYsuCaxreZTjGD7CFkk4KFUaTzSb5N3p",
  "key11": "5kzuPCtBux4YVE6UyC1XMu9XdYykLbM7KWwL693Xe12D8BiHQQJc8UGmfdd1svASYS8wkXti9dYS7PVrDdXU6QoR",
  "key12": "4YWoYyuzVP1u9ChEbgqV5US7812dS3qRnetuT5N57kepV6RwqXiAotvWwh37JEDDdjSMY2gBXW7sqrCPPTezHnhq",
  "key13": "2FdABsN9EEQXinTiMzXu2PhPbsuT359te5ormtisYPyxhF8KWvVyQ9ZV8fsUqWZYc5LxgxHuPmEoEkTybvJGj9zH",
  "key14": "3FtfEGP2DnGht4KG7BUKqNaEy99zEWqx7pCPj5vdszYxncEpppPfYcPkGJSxniNPc5oRpM97W7uQqAyWXNmzwGSv",
  "key15": "4rXrbZyLJCyWWuHwxrhrbLKvEYdMsAeUZUQ7AfJxCmaytHHbe6fMMhgMmEVtmgRPWSoUjKTF5jvyxHdTqyoB7RWP",
  "key16": "5pFJqDsmpYqWZwt22ceFhVfTteffbNUMXigEe5qEC2Q9XAshzfidJvKE5iX2YzJFKtWHpWyvMD9ZwMTDaupiTksQ",
  "key17": "4zfioTScwUqj2oM9nF7QABZ2dkME7wwJhHk6zKFHN3JacPwPuZm9DjKepHco7cmHu6rqwZa5bHFeqCZ5U4BN9BzB",
  "key18": "4Cwmackonb46Aa8V3KLaCH9ZQYLg6jJgVqhxA8woAEoGWqFFJjjhzYuN6dKpNKcteQgfjw31HZwf3kH8e7rk1XVH",
  "key19": "36pEo2NkTvT7CkVvC6PS8fXbBPMHcNA4KaaqvXLGqXWZbcA9foBcCRRoB9fheVbrtW5F4UjXVkn2ccvwkaVuF3p1",
  "key20": "2z4cWzp32T1ydsHfRvkP5s4bD9Yk7Kpit5Q4VeWwZNitAURA7cqZiugi4t8czbm92xhiYRzHrzdyNwsHs8DR18Y2",
  "key21": "4h8cjvUrhf735RLts1cZZAPrgeN9vrKNziT1E4Ls7E8bXMEGL2NLS9HQfQF3kPNsdMcUfpoC9Ct4zAKwaPYuwqWe",
  "key22": "4FGkpYcGMxFM8ugetAXnuxWqVFmpgjxQXF1UrGBNef7X9wXCnBfFjn4skS3uQEBdKXqvFqHmwXnZeu6f3AijzLWU",
  "key23": "4ThRgmjGFq94pijn4bZG7B1KqfHpuUGum5nUuRdiz8FWjhrRLDpaYFVr4tWvgPuHzmUaBMrY7xgqrX64NNaPL6VZ",
  "key24": "52dGyHfW95U1RvmGjRjL947atiKAp3ecYQh5YAodsD1zpybHgRFZ8qbt5mXxGEHZkhxek2yMonqA9mJR1cefrhrA",
  "key25": "2ZkUb6tx8bwyPCgvB2RFcMyyby6PsGYvFDXF1nf3mVkpi42abZqNB8qiHr3JZfqN3RsDnRiGbkbeoetQ7UubKbRL",
  "key26": "5uVVJbwFXtjNVFmEmnqioGoKwJcbnj4ESFJDteSMjMh8HVv8oWete478v8R9koDz1Bn6YNhQxHXKnD7p6C2inpCU",
  "key27": "2jFvgvNGse78UnuXqs4966R88Z5TG4iuFCB5ocSkREftCpJ5graqbT2oG4MM1FggLnNLeQcDAkyM81oSUBgLPQYN",
  "key28": "3wa6mRdXLUSLu32zwuM5AQFcbKgogrt2XoN9Nzsu24pNbmjFsH89gRU6ijHTzeiN3S5T9f8K6Rjgssj8dLwpdeV6",
  "key29": "bSCXSqDXtNcp1apYABA7jrJpWfNM1f7s1CsygtYmp1AfpaAJRKRXzzyQZKJTcdVWDTUN3PMECTygvn3yc1eHrnr",
  "key30": "2Fxq6JMEWb9PSMUMJUmA2gE8QDMdkMDpVjawVYP5cDkNDfnD5RwdjhEjA5mW4KHHGjZytdYcVSV8UVezQaPubTyj",
  "key31": "41owAzUtpc1vgMWBxczEQLs46whR1p9vAieSmRU7BTeDhSawDkxiriDSoXpvPGw2wWx4NjtQXty3tQqSDEUMT9Pa",
  "key32": "5KrELV55MPijEXMEU1UVjH1ThJWHjSpSApraf4TuJ1a1pycYRYWDsoJgKg2zxsVfwThytwd7PWbZfeVL2WDm7Pr",
  "key33": "3om9admZw3y7KRJKtfhoCgLxbZrC6TsbYoaeBW73VzqaromioNYoAaCqpQm2J2wWeELgamu42yppBZwCDmhNBdGV",
  "key34": "4BCy23R6SVaiTPznGL8ujuoGFwLuKGKcAiDfWajHFAd35P4TffLnE2zcDgSsWn9kKMB4vjvsgptZzgxSnzZgzmKj",
  "key35": "27T3ZUfXR2WVie8XyADUML6sX6whX3xQKWGb9s4wsC3eWt4hRdqapqeKew812pfoEP7LP3yu2SwTb8WgK3EfK2vD",
  "key36": "5WiqCKZz95VBqCzg4cvuaCt8Ca5n9ehboRLbnMEBGrCgguohyQRGBrEb13tGQJ7Zy6M7U13JkWywNYdCLU7HsAuf",
  "key37": "2VpWeHKfGnFZ8J2PVFZrSbCHrxDVB6gPFLdKDWL4PTyLZg6uaZfWxKhTu1AHiNAQspTLgTzhBoRE3AFj4sVAx4Vy",
  "key38": "b5tK4X8CNXVzb2jP4VoRF15GBPBAsjV4mFWkS92jjGejaUgWiyPFSB4ReqFVNgDQnaPAkG1oZVgWKvy2jAzWc1U",
  "key39": "4iFJozL9Z2uBycFuxXJkCrWaJvV2Y4MGPyz2SNBuTxJep69EMgx9X71PCC4yqAHw9j2YygANEaKC283MciD1mqum",
  "key40": "5ySkso2Xy93vmM2kHpb6oiR3tgsP2QK2ia1LfsGNovTQ2cP3uZfUy1LckZ55WpoykiesTn9Ps1zvduRpzdyR3cxR",
  "key41": "5qWaUW2FjNFBvz8SKC6fRHfyeU9mmjG34mXXdXjDapGd6xgGWvibk9m6mXk6TKCQDDZLPEYdccEU6dBJC5yXmnUN"
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
