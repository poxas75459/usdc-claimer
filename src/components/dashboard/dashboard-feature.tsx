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
    "4TzkDAya1dPGEzp9iKsDQANDKdPpYckbBRb8XdqJxWoMwZCbyMYJNWhLtcmHkimJhQEwi5vYYe5EZQCMn28vNYRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NuWUz9sUKT8quDzo44tWDrMeEnyHF8GoDshDxuSBUr7iWDtnQEiuadb1mRZxwc688nsZRipSWBGCuA9fQj9uAPi",
  "key1": "47wy55YvsqwtkwCF56D5r4kYQQ7ps5eZgfzF2Lfnx1Kn6w7nUw7u8oN1v5gyiSC4642q3Wdzn9s4N4nerr9SseCr",
  "key2": "gf2LxRU6sxMm5YNh8E81X4yn7hPkANcguUFDACaJwXXnLPoiDXuy9hikJ222gPdtCTn68RUeojaDY48hN4SM7Nj",
  "key3": "3Xs7Y8Kv2vy6JMBufP4U6bWEPohoKnq5idYTifbSWf3JFsLPh3sVrS6rkofG9yHzKv5KRXrPcfUp8TZUSBBbDo8s",
  "key4": "KMnRNXRGJnzy6Fyeahr64kZPV6S4NGJ1uHnTgLst983XLBzrscE8jP83fA175R2rx1Cc8F5ptasiusN8UnghBCR",
  "key5": "3p3J2H2B5764m67zbkczbnHruLNZY3FmH9oKAkvhsD2FFPV17iqyZbDmjrNB9A9fxh7bcLzaeALyUas3a9h6JoPa",
  "key6": "5mQLtyyXYjQQwsKRQNqngmx5kTfURMY99nEGdvVZeKKt5K39AJGDnoknsuhkSNLaodw1tADUjWiu6qNUuZypwAKZ",
  "key7": "3LDFM3MkCk3ZiftEWEVWq3rV3Q8PdPCUb5uadC6U64yAXnHSPVigJMipP3bQSW8siCn7QMyDWoxUzNRejSeoiYLS",
  "key8": "4tkXgCTzxeQskT8AaKnqokGjVXHUxBUAvnD4Tf6LcMwSCrJWP6ARB1RPps5aZQvseK59qWeF3n3HdyfGAyg7hEhb",
  "key9": "2A4Dvx5T8QtqDcAgRsz2u3XHrcVHV7szmdjMaXtcLAPbmtu3VcAkD1hGw9nf5fsnfLzWJL7YpmbyCjZke1VFPuQM",
  "key10": "5Qq6ZqRLVpaKwXs9xFzMzYGYVWnCCMRrKUVg8pY5GCwR2EpUovvvsMoHyrzBAguse84oTaEC1PjJ9CrhbMZx814r",
  "key11": "XaTGcxMzunavaKybzw7aZcM5Wt6SBumcFhi9UKpSJ4APwXNvMEZyhX4sqEGgTaByEXAuN9sokaueRC2eoN5jrF2",
  "key12": "2ZDnmwDf5CpPDpLBb41qcPF1fiNvNy9BNuQPEc4tsiMjhFRs8i1GwzT3WcFFyCYcrjFU6LRL8dQD5ZewpwphGMVf",
  "key13": "4y6MJi8KdTperts7p6ucuSK1T4pZuiGFpa67GmR8YhMJYifVtwCS1avnoYcponmEhUF92PDBhjbm8siLCKLy7EJ5",
  "key14": "32PRLdZ5o9Qq7o6WpZPCrJfJdVjQmDv2eFhr5YjAhff2LGpPnqDebiZcaPNACucoi9yQgT86zYqFqnXZxkNS5GGw",
  "key15": "wUUV4oacN2eNJCNcAJHxNcuWCyrZw1bxetbXDoaKA8dQDmA15m9bQHMQ85bF4U5AQ8ENT6Wy3xZCefFqqVczViC",
  "key16": "5ipr4YbG1dgcj939caSAZvqNgiXf7i7exyY9s77qPad3VhWt9ihsWrEnj9rwFiqGP5Y6NMx6yUofQuwFwAV46iDW",
  "key17": "CUsNSz2Ex8hDF2gMLxEdXv9KCyMwbLK7Bj9rgLYrRCRPedy5cbewix5vCkVS2PoV1Mwxk7uGRhYfYvU7wWZTky8",
  "key18": "4fRoiBk8ZTmQTf1qC3R8c6VVc5kFXyib8Ert9oA8rF3uwZS8qHJ2SeDwR46ozxiHMW6H9yc3CsGr1sgyhmtT3Jt3",
  "key19": "8VKR2ahaoycx89PhFapSUp9TEQaZZDg58LR1mBvVzPEGMtJruquis1qDA58BbBNq25HBJSURFVzRJJKaiT7rNxW",
  "key20": "eYyhQgDrQetx9dmJc1P1fFqB9Rko8uryzRGydiH1cABjRw5KryUghfCg1jjrB3C67y32RtV3D88BT7oAmJ4uHg8",
  "key21": "4HZDrNthtMGdP69gkEXvHgw9G2SSQgGNgKNAxPSjBeco7VhTyqnfUueef8kXoaEkwca8eFoubRhcKupop89Hezpf",
  "key22": "2aV1emY5EUKDZ6YFdJ9EKhQerTCRFH76S5pt9Yz6M7tyB74MbXS2m3tstdsS2PWJMVZEbfSiHcNBFsLcs4ohzk5N",
  "key23": "5fk4jFVSjLLczh4rqtwubR4tVJzPJ6w7PD1jTbQEy65cqu441cjSmPANJUhnHcBeSdPxvTJQM1aogdTb6GfPFEbd",
  "key24": "3JntVDyAoFgAfrWjVdCfzbfVNnaA26YStPLMtLYtXeNMp1dZEPRFvaPghvJ6s2pZJHeMszWKR25FMATXfdrCzxRb",
  "key25": "5PiAhdesZutvW2jUjaFX5mCNxWmXCiCBbetvAigYWCoXaGbWjfnQ7D8ag74RSVKVnqSQcs18DyfiDMXshmarh99W",
  "key26": "3jKa83Dbs4RSSmaYVvPLwgFYA5ft64CojJPVB6x3oSnUf4f9eCEoSp77U7xu9ZQ5eRjLQ8BhRG2TMX32fsTuXgTf",
  "key27": "5zqZLBVA9dk7qZzyuTwRd1R22NuBBrPwP6grpMi2AaLHZukbhZ7rnVEhTaNgCkULKKzafKGdKf9d4KcowjQxSFdt",
  "key28": "3xxyY25Qn6H65a9zJdPD1Pc9JY5KafA6TFi9upAnBXswx5tZE4zQ5ek1jJn2xZtt2cPPYtw1zKjTVx1SbEMAr3TN",
  "key29": "5DTKLaVzd7Jt8AuCGGNRQuJYfzoNY9fbCuUHyCRQrUSKb3kwGHEjzGrefMyq2SDc7m79PJ6vJrHPb7N3sJ42vugx",
  "key30": "3VMpVjczK8QaJRNbwrv2eRRTNQPY1gWAHG7k8UrSUxuzhmetSeLp41Yg6SmPetv2MCYxCgTsaHdWoqrpgNyq1hEt",
  "key31": "5FB8Zpxn3hqV6qd5RDADV8RKJ2KRF4jSdQDCWHAzLhMcqBBufVY5693cCHU9pEtSs6KVC77kRx4SBrg4jxFVVFzW",
  "key32": "5KeA33Ushj8xjzprkzkLwNbL13fRR98zTUwxZdY6DBq4Loi7BAeu25xNCaxS772ozFdpEREDZcaMAUbpmsLZ97oq",
  "key33": "4e6SDyh6GPrsFw8PsXnKhrcgSG1PG668WeSaibfq7c2cD1fduXrQYANUkJZX4CcMFLpBjKPRz8NQxKQRLkGbqCXz",
  "key34": "3HbvaTtZU8daNN6ezGtrJuf9QtyM4HS4Y9B4ktaRhUsG896eUqonsTrH6AK9DX3cFRoZAmDyzdThipavfpPk9C9x",
  "key35": "2Fn1DqTeqgK8YcrSBGSox6U4CxY6M3mAwtjRPEDHhmy7qgyUyHMUdBjL22aKNYoW2ofZ33U4LXumwdsWY4AVg5WW",
  "key36": "41kRLctXYPnfPReZxayAN65bjME3o84DdXXMwJVx6B797Zjk3LfyLd7EzJCh42TVGDqgXkFVeinLUfzRBofhfgyf",
  "key37": "3mjM3N3N9KnM7FrXPWN8NpaQUEtBpouHxqcUMSEnEnnceK9Rock6RX2wHzFCk863873BmyMWo3LqbMQMhUJUu2z4",
  "key38": "2CEzG9L58sfusnk8quKFFBLp7zrvvS6CGZozUoc1ov8Tetf1mKynhecih1CvNCK9zHMUmJfACnJ7dHYYinC4Tztv",
  "key39": "2BEiEXsucgTRoRY9K1W3M7EvjhbPw1UAn2C9C4WdtDTVb51TahuL5ECX9mKfKeM4Z5XpghfRHam6CHC6zsvF92V",
  "key40": "49GVZNDQB75PCaPLRht1yup1HZXmkNPvhMoj5vgNUwEJpcvUwkfqan8heqD4LDvcpwUqyqknRw9HW6KeN9zGLZCJ",
  "key41": "zhesgwHVH4yvXqEzeQGkZ8M1AFmHbYudJw255jPQFz75QcpY8YMTuEccNY4iy3dh4JmP59F5Capvr1AS1YgVfjQ"
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
