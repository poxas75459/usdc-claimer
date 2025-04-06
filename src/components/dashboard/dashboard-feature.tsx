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
    "4YcHK2umzL7ZZK2Rh2izU7VXW6NSAHmgdNvGTAx2xkkTR3kupxd7UQX4sw32x5yzGDh9sFugnHi7fDv7BPS7J5c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdKBK7K8zrnz2BGKP52Mm2Ng9QEHJTv2oVJbs6PjrvDkGjs3g5PxZMXXjrTDYnNYMiHwoXphgzfqhju6BpRzbhK",
  "key1": "d1gzSvJP2oznGyW75gkJJq6bnsXfWHtAt1HeXuPWu1AMcdGgDWHYY5gdWYA6akD2MpyTKkbE4YdMvBsuZeCdKs5",
  "key2": "2BXEU5Z2UW9pdurdeyDNi2qXsqnEDFr5mnMCSeKJyVR9nHD2P1rfPL7RZykvM6tCMfCc1SMywQpzb8UhGURV3XsS",
  "key3": "2dieh3NfAEqF25DEjgfPNuErFigSvuZxcYTdPLLgEBnD6eBoc18Sa9X2NcPbcVy5MaM6cjYobTG3ihb57a1Z467t",
  "key4": "PoT8D7n9b9pEy5iNy6wHjPNdtF798nAB1r1AoLQXeeuWgVSqFi7Lxmt5JVWpxDboHcsbtbjdNpr7FjEMKkC5oHk",
  "key5": "3EJpzDAchRX16TPXPWBzhwZom4HWcHmA8jnXPoyaXpP3KBhSy8Yu7WJMqrYDTortdVYHouZnUtQEPE89THAHc5vY",
  "key6": "41tNp8kQUfWWonAQcTJzL8gS2ttSbtpMJeRkvUMcvaqy5dxaCVbbDehEmxUFfmft8LNeJY4P4PQaRpnwx2zpzMum",
  "key7": "3UQShfERQRAj1hyDqFmSKupaNvskCzzPFWw7aVjVtQqn7C4Y2WUSKe6TqDz9Xq3wZS5gdYfBkhzBRGkWxBvxHVzs",
  "key8": "28dd5iBuL151FLa8469hkB9Y7bDzxpN4UroJ3NgbcxMa6cgKVKAMQ9Gn6FRRscyEapoHz7FgvNjdiRdsSLvVbNLr",
  "key9": "AsLhgn8jPFA5RfvNb5RdXn1gpBqw5mZr81329R4tATEeb81JSfAvAyecMgFSMoNKVdUMgAaCq31TiJnb6bYchGp",
  "key10": "53tbxk57o5xCjCFEnCsd6LRcth7bcQWvsGjmfcSsdwWUTjsk2UfFp1VdrmmqPznresFjEi1SDWjyGjodj5yEnjEz",
  "key11": "2F4CCFgfqWgeHgV6R9LU3AGCNCzez6WExHPqEtc6sKrevpKjQQJQDNF5tARgK5XVFi1bBi3eQARWBkF8bYmpBt4u",
  "key12": "4APymSQx7jSLPmFGZE1R36yqP5T1Nn34zoV8ph1JLW1yAGn8Gj14nQ7fdLZ6n5XcZahgw5Mpg1nej2LrGf8Sr9kB",
  "key13": "vTEYbPyJrKRPcP2r2ckVrSSborxbdyRcjj2E5zq91t8JkHVnayaNakh3iCBSqgWTeu9g1THCLVnidrZn1v2C9VQ",
  "key14": "4HKP2McKrMPBJguAuc3zFoU8qJoz33CQ5X6RPqoifHFxizkAUmmrvZybL7YYgvyVrJp11ZtvqWLcp9cQfUnzjCmW",
  "key15": "5oxS6jci5ELSBYbxwFx3z2G7RXsc4mK3w5h5wB1MTsHJH1DnR8xR9i63CT66nNZtkX5XgCaGvk4HYP9d245G4opv",
  "key16": "37GETjSCR2DTk6vbFdfzjgK4NEqVf9VwkrTGt1krgyB4fTSgGKLq9C7WSrFhXF3KWpBnFQspmEyvGKAQcUgxTHaE",
  "key17": "37sjsyn1wS7giq9Rn7LhohP6C3Ses34K7z363ajXPUB97FqpPw36rc26CpWotPFcFveroDyYVNwJFEEJkztLUyF4",
  "key18": "2yeKLHqLyTM6GVTRWSZM7HsXSrUzUjQvPMmcHJWxELeiCYpPYBKjmD97JJo7PLNPg57fpyP8rGGbFtVCS58tt2i",
  "key19": "4asxeGAKe5uxdj1Mf6ncurnFamKv78BKJLywpx6FNPXvm9y6cbP8LEfc8FPUXQupg3rgze9YLmRy1MF4sNfNu6cH",
  "key20": "3iaw8utwWw2anY6LHbp8ghYrBRQvVExuu9DfctdwCRUfgqcXX8tcA9fpDACC8rNzrhwfqW7EG8FAwtRfsB9CGQb4",
  "key21": "2jrdWAik3bKzF7i6vbponBpJDsYfmtuFtMZ8KZewWtwbMwLoGEpDGRj2kBSbucXWGfJHb1wkPUHWt87yQp9XbC9s",
  "key22": "4LD4EG1nEpa7mcSgrZEuWGwmNDvd2VmY6KcEMewq8NPn7GSns77Yzywu9YtX3RTfodFSfFheuMBugbxn9GVzUnhA",
  "key23": "fGzGNc8YafKJSdMucWJn5RFk811yn1EnuFdNBzpsfTWq5ZXXKEZRrZw8kz8WfpZeoATf75qU7whk7QuVTPy2CVH",
  "key24": "428pU8HgLGhsNvz11VuZeyLmvLMaUFkPx4ipYHGPb1KBEribjBgR88KoNNqCZoJokSXKNCxJ6HkTSiNi23wJCLaL",
  "key25": "5Khz4nPBZrVSW9KNES8p1F8VmkvtXbcFVMCJPBquLQGKMwwMe7NQ9imhQryenvJneLbgZUi8ttEYT1iewC2sbvRH",
  "key26": "4eBV33B6AzGpXYt8FJayxfi3WmJgk5ragiS93CZDh7j8yMvPVoK91g6G9NNijgLJkYtCf1ZpQR6NPhCVnsPgsEsF",
  "key27": "3QhijzRhdjZQdaRWyPMQAjszJhQqxWkM46f5L1UvW88eaWtTWDNydKpq9oHDrJXULY7Pw2FBY2xv2aLQE2tFtoLP",
  "key28": "2jAtpScE1EH8kNb3hgWt4XzcHv96Zq7PDdAEqXqHHiRHmExLumtGdG1n356B3Svg96h2KAz9f1EwYHwFYJsVGJMu",
  "key29": "4hzZYPcqFgugbEjEzhE71PfRous3ftV1ryDAPGRFNAVxr7KSbFUrJxBWe9uCGLRfmHprvifTTuhWNVUufg9iUeZK",
  "key30": "21JnHHyTr3xfeGUQFWB7ChhyyXv3a1roDBpjKKCqmoPD9KZAhL4P8jtywPZsp5qaroAwkp9ffQ1jrSrh4A8wDBhs",
  "key31": "J5wHW9FKY6c7mNbnUqFJj5pnhdaYK83LtAr7AArLcWuTUJLt4WTd6jeLspRkbGWaHGujb7NwvV8zr3DJeek5ruP",
  "key32": "4onaT6aYLGWEsCNxHRLsaPtc3a9JvTW2iTvAhVZkJmNRJiEvvcaXsyNsswzZP4esLz3zzVdEeymGG3uYQqE5M1mo",
  "key33": "2wtrWj27QazPzpMqkXj7628mwH6svVXDTYYzA9tjyzuV2vcoXXYC7uwF2NmRQUNxtnk1XYkaTNexm6WUQ1LN7Fcm",
  "key34": "2JBjU7HFP7aATottesvcAczFxaZPT2f5Gho7dv8kq21GMXYudM5ZBCeUQhqKMCoHDj7nujGMfgKoYS3UkYfoGRap"
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
