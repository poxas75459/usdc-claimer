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
    "64vpmVWzgqhVCjcDRGbaozmHcXcEB31Mte6bWtsZQYNzwbfca8fg9GUwvncc6QZHheE3o3Cp7DXwmSqBU9hTvjfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gGkn2pR4vfdLxaBUTJ684MXEvjKeqCcwyAwZk76U4mgdopvLyWA8E3hXVGopCW3ieNwjBqsTbb8Nst3ejknbgUJ",
  "key1": "45NfN17H5z568CPMyXW6zt8ZcftSMNZC5rtTFwDqghEXJZENc4c9bxubkf4SpW3RMqgYnUBrxC7U23SUxHq9Mht9",
  "key2": "gSY8ZrwQtr876vxCd6mmYPEot5WrH97sc1KppJ7drHsqagEVoQ3FJBTY5ZtZL6CS2RzjxyhjW8NgRDAKSckSjn7",
  "key3": "4NP1ukmJSwgBrxhaSK4dvZMZgZXYRubkBtATPzCGNDcsENzpNqXx3jvkYk8VW6Hri7DwcDwps7qTEgN2QL5WgRQJ",
  "key4": "3kucgdM43rM4mzJaTeP7n5caEiXUa1qYLsixaxcWymXyyUnfNxoxysy1s7GPNofET7eFhxmvx31vFzGiCUP7xgBY",
  "key5": "8xsXDszmM3oMrStPrGBjRWKAtcLD6DyCLTd9kVmcGmHv7UPFBfVLBWU7n23DKnnGrjNgKgveXtQPAoJspmpvpry",
  "key6": "5sZTqP3LbsggpDf994viL2HbRW22LP9A7tBZNBTcSrxKEpKjs2zCnnxzkbJLgCARpt9fRrKxd3N8d7TfrCBKCjhK",
  "key7": "4sgwUD4x7Qmtu7NNusBC67q1e6tLxQbFEo9QK8uUkqCDbLhUtjH6NuSfNMHUjbaiJymvwXTR6Ee2HhRgsZBaysrA",
  "key8": "uTMBR98aFRNBQcFWofn5jiefnm3dLgfTNjPGtFNQBRYqJPeXUPFHptkMWQRRxsskptH8ECKvTUQvp4D9Jm4chQ4",
  "key9": "2yyqDBz1q4HXJqNaX2APCoM2SARqBFEy3vnnBcU5zauxoRicwuxu7SRpMDDHDN4vKVR8WH9qgzSeGH4ZVShJrZMW",
  "key10": "2fLSB26NLUUy72iDocHms31rLegeeiJW9wVL5kxRNfmb3W8KW7c6U8DERW6z3NZ7pkQ9ta9BCnuomgxeniE3Gjgw",
  "key11": "44YZzKK1G4wGLzCuRS8aZpM98QpBt9isuo5YsbJjrmbnUrP9iZ6iwoiuNCnu1bPedQTsEeJcdRyfjFjrR2udfnAt",
  "key12": "4Ky7aTD2KVzw4as4CUsmSaBimprJ47q8acNpM3CgjNH2ksS46L8P1ajQE9JRSfT6tqNkENQ44AsjTybfrdHbcJoY",
  "key13": "4533UZcLGwUtVzro4HTWPMc16eQobtWme64bKJmawqZ7Kg2bt2cp7e4Tn5gYHbNJTLVTrLYVuYts31iwu2RuAvQr",
  "key14": "44dwKHSgekztwkwM35V6bmBTg31Yqn6Ye6EpbYJMmcg6pTNc93T5AucXnXnxH4rxjcuPCU2KCYi1edj9tYm8xkcF",
  "key15": "55uBmy21AGH2bUx2qjYZ58uCz7YSeU68HeDr3qkfHyHa9vPWuUvDYr4BQQdviRpCeJr8hQvqNdxnT49YnJXr9efi",
  "key16": "3o5rxemdsYmQTAhUnpp6hsW3JmgbKjL8LUVLJHSm5pF1fV7oLW98wCgvv1rNzj2KyWYVheVJVuNZq5kpXnspA4bz",
  "key17": "5EJ6Fo1ZkVAf6SZCEr2FzLnRvcF8wvoGkTCHKjfzVKmzHd6ro6jGLcRsUb4dYWgkgtMPGbG4cC4hMa3tYfaYMgca",
  "key18": "2eRho32XhC8NdTeAgsDT5vjF2arvMhgwWDv9vcM7crB4Z1JF1r6TdAHw1vSpHpGa84CJA7R3J7NY1qaWtQ3MQDmS",
  "key19": "imQFdcRLi62M3cxNiUgWHbsshpZX3n5v51BThYoyrymutTKaEMMhEniwxvvbEZ592VJUiLuDMvfwx3zJnefQpg3",
  "key20": "3gusJ6Ua7hEEHeDmvbnWfiextTS8QAyQjr2cvsWD9PYgNU3iJMp6LZp1RX69a9MaZ1dwALbdjW4JWTu1SDwSVKZU",
  "key21": "5v28hrTcpYu479Zw7d8ubkvP887vtzZg6LLnCrcYSndXxRFDHfGXFbtbZSn9PQoYDP314nr3x2EU5S99k9pmrKzN",
  "key22": "QMwodTdxxb8nwC27zk9jq9KXmtBSbsmKtrpedjadNNg6Tj9dZYNk9cJeGE64sm4XV4Fp9FMdDcwSdzXYaHekNfV",
  "key23": "4jgaUnz9DBwGVvTcHCP6fZCqpCDip1xMGjz6rwxH3XayqBAho4pYLMkBHvSnS7v2hAC1K5q6iuePckja4iPecGhe",
  "key24": "EAocXDGseBBikQjejCPXq7C1uGyi6VCCMz1Yi94HxRpGF7cQu47Y86VDezs2jkc64NFJ7TFs6Z6gsFL4LGEhn9D",
  "key25": "3JFDiW8LBTBUF1s7w9c8avnpwUJXrisg7BVrkR3cwkEYZhsHS61AvxSg9Jds656UXb7CQKZMF5ZJ6Nw5GeaBz7sR",
  "key26": "5w9pTtpxGWUiFuLaYBfoTBoPxrq8kBX55fZqJq2qoyqRuAegW2C1UidEQEypyWq7tmexzJTu2M2DqPYmpzuEidMW",
  "key27": "41VTeXbwxeoefZ3R43U9uAo7Eb1qQHEMzsHbDZs6e16g8diTF5HBKKbQpwZLsAYPSEeKHbCKSbLW8YYSS7j8RzJC",
  "key28": "3QJQ5T93WRK3zRRejmjhP6RCvfVatRM7ytbQDS5mzpWjULphZGrHjpzAqEyLFpncCFFR4a6ZSABfME1nNASUA2La",
  "key29": "654GWEhvLCZZkunQc1QYqk7DRa3gcFc5296VZCH1ucRJCZoxHkpDgniDsrD1igENSEJdUyudHPRLJBdVsV8p9oJh",
  "key30": "5uiNJ9RHmZy9T29YpRYiBYJeTRYoGcFHMhhVbqLRCbR6BBotmTbneWGxKj8RyXE1CC1XXspPkFGe8kWfTYNHLFZJ",
  "key31": "61JReBrmmCQbbBfS8VCMq4nk3Dz2fG7sZHuyTqFNtAEfe2TE9ZMmgUHVMDKoMwz3P3iJ2hkHbm58zm2ZsJxrfTaN",
  "key32": "3y7e5raJUWN8znYuGidUXnpexHNHUFESGgXxH8KWsXeFjYbbzcNwtMpMJL6zve7baGe7G9NrPrrNpBocwaGiAmKV",
  "key33": "NVpXeMcgesp5VaK3C8Cbj9FZxnxgkkh8YE5evNpQuocvBkfLE7c5Rs47FDUmQFPRUDmZgDuLe4iYB9fUFRPvBZs",
  "key34": "4UGUhtHp7EYJ112RPkRqLe1QcmKAEHm7CSXYf2E2p6dJqrXoci19XyGEmr73XpHLZwpQuudGWF6NtVhofBrbdefq",
  "key35": "585Gzr7ia4fty5BJisQsdY4dfvEV81FgEBbtHzzQ3Ltrj89wdpjMTtmn3miuSRas5vZfE5ZFxPU85JWSrbs3y6Uv",
  "key36": "4cCQGeqdFh2idKwoHUQVnPwa5c69vZkYXokeGWiE1pKyteZJdr2jNnefdGcKrFbzsr4oNxBFS3NB2D7UM9GDunnc",
  "key37": "591uE7vz2x43njKiEkhb4nzShVuwnAFM5Ec8r6sMBcrAifgNqkbnCEEWtfYoioZzcrPqLDNdJAVcrhiD5foMBBWv",
  "key38": "AurrYPgFahrisKNxehbfPkE3Tpwjgh9FDFy224KPALPev1mRW9VjJZxJXoaBoq1wXcFG5E4Rj6bejhKAcwAZMTr"
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
