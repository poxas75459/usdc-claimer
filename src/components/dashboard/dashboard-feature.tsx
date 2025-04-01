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
    "V6bQUTCfqHDxkrxYBYmMDfsUYPrfLhgw4zGC22Z8kXJJVdFmoLaWZTdVSxGZPzBvj7hydLRJGCc8YMdkotQEhJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLr5r4fheMWLRWUdui333CMZEdEcEKjPdv17kzLBKAY1VciuUn63L8tHztGn9c3hmLSZLA5scZwvNAJCDgQNHBG",
  "key1": "2xfg6Pxkr9uJar2zX5GW9tyXQgGTFaH4GXZVoKABu6vynUMBLFBseCZSo3kj7Eh8VKa7mqRtFRe6ZxXMg1yvTRR7",
  "key2": "66Nd17L1oUd6jE4x7y9Y68sHqVBSjZyanbStQHY7Tc8jqrNcVC5AGgx6Y72s18FBUYD2FaaxYBxYHVpot8ucXd9A",
  "key3": "2CK1KXAG2n9QdDoorQVhQnCKXZxDns6DRxd3w5rJrDAwNtXMRaJuSCDfcNAqdkhVGBwj7B1XEv1hDkPAZsvncarG",
  "key4": "5dddALmDbw6fKzkbHypXjqtoUZ13ykJmBximd9FR3rTamPf2xd73nUeKTpoJ7aFhQ66gMMPg18a1xUrFQ7iwHcW",
  "key5": "4nJMcLmhCNarHVLy1KUoEdLaCVFmEp4gdpH8FNECm8aH5qzaRsSeYaCYuutVjLCcbibHbUYxrfH3QTEfgiMEmaeb",
  "key6": "5UPkMFYngXX2GTjHACZFF5J5bnpNtxnPfCyoYohLvihpxrrBgyUQgMjf9faH1Fs5YYXAPEX1PMC9CSpNwZ3e33vh",
  "key7": "3NpRCZieQrYZ5bE1YPY65yAhncqTTBZTuidQkUmEUU9VhD4FGwDAPhwDPZaVBZa5Gsd8rz4ptkppnAyLEnhKvBpx",
  "key8": "4M9QmN1YHFqaDdYr3B1kjtfsuxXZ9VU52dupvKfnVpj4r3Aq6wz6JWm7dyW6xbnPneqPg64qQMikFiMmnTBoNX2e",
  "key9": "2eF5nD3uAgDEFr41z8LgRT4pm8EuyFNeMXKGa5iY6F5UGaNLSD2h2Rrzti8YDuXsoWni527sTEATaNFa4WDdY4zn",
  "key10": "uZ1kZY1nTnSJGndSX7pgnVBgERiBPkmTdg3iq3nf5K6WfrTJNZ3cjv6GJkjXhP9VY9PTGZWqPU55nqZsA8iTewV",
  "key11": "22UdowEkWCerzBr25yxCLHzKQdtg3GNPLt5vHaTRt4zA1w6HhkPJDHPDxrYZgUQT6VJ3HbWmiqZgb1cWjacHdAjo",
  "key12": "5ALtvknFuSxmayDV4t7bYNqUvYqnvtQTcETKmdjQGRuFwRjuipLVBpf1nXYTQuHqQFMheZ6sbP2neM8DKA4qB263",
  "key13": "3LnJXvo2xGA7YUP3b5WDGZdMUSMqxhjaRxdrhyfdJhADaJAbHz52tr7QFFuVLQBMzcsiS7MSNHZ4YFzcNkUnmuGt",
  "key14": "3sk3UTwT12kQwQBeqeefdYi3j8fJRDNhKHH3JtPVRwuMajXU2Kod3waSLNwfhUPJkAmkvF8hc5EZqwAkXbmgdHNf",
  "key15": "3KExoHgukbqTGh2YcXYXhRfGpG7TNEoG7CtxJ6WYJ1G23Wp5jLNeQk8rA5JeQGdL7JG662tBYHcaZ695d5nGTxWi",
  "key16": "58fJksJ9sZYzWmf8AZfnYdyWwdypyK68XgwECkDKcTUUVJQLcCRpruQkcEU9b4QtMe5AzZEZYWpEYMgrNZ1B6udw",
  "key17": "2DVKCsxPGUBtz373n6y6Le7w7gkw9QJuRxVuaba5zwYDvN4hJXisx1finr1VVZN6ye5yLn8GWAoMTcD7xYRh8HtF",
  "key18": "3rWKw5W1aETyuzMWHk1wXccXcVgM3z6zHaFVXpRGhfUm19Dmgwwt4bcy2Bp6VCiLLBdEYjJn9fndZDASfqfH76P9",
  "key19": "3tJkePvQJUJpXPrYVXCW4FMTt8pAn6z15dw7gBd2pRfTAXGZ3y29kXQLUjKyjcfP85YRrfkqpVhMBL7NVBb22Rjc",
  "key20": "5bXdtcVeGBmGZypMdvZjpyECMitDhMcB8QSc6p4vEaKZXerBGhTaxf5L3fFUzmENxSTMJ5D7YxUDPggASMh6L8t1",
  "key21": "4rf1kWUvHC8mFecYxaZXVRSL4DYRVt5rSraMiG5y1NyA1jaLtTR9vPuBFAJaxtz61dfdZkrV466QpgMwpkVUrfA",
  "key22": "3iAoVaoEXZ9MSMvKzzqCks4UYiq8Ug4QGecJgk1YdWZBk4ha5kr217A6ciobjNSHtTzkzSJGo7qYnmmLEmVJky3b",
  "key23": "43iWsMA4gBTAgumzdAWc2dqqrDYBPi1Ciki9Z5QMkuhFahnDK3uEzxV5FcrWNWHDS3ZUASbx8iNcM1G2wD6wRXz",
  "key24": "5oXLQTgMu8CLharwN4S8x5UpE48Jrqmr12HCcRNs1buS74HG62B9YSyot1KHoQQ4XPbXCHr8rJpjnqJzbSjX3av7",
  "key25": "4VZ5zYZ4NDqNLAVYH7K1YVr1r3LpReuNpnc76ygbs9xvbRfrjNdZgC9XGVBhEqCY2yUJj9e2US8CHSDRUKTYiQ3Z",
  "key26": "2snv6DCiuDrbx3BiLupjk1xEdybbCMt48WwGMupt7SrwKK7dHA1McYrqTeztmHsMDqZ5Ma2GkPRZyXe69Vq7UEWa",
  "key27": "2sJgXXF853EgBZP44wj5jfV975LrCot6dJzgGcjj9nS6G2NLKYPobCe1h1zDbsUtmT8U68C9P13GjQCE5Cf2dD5L",
  "key28": "3HGvG4dFdkgfi5mNodnSHJikHZ34ddB175DFHqHvL9QF2HME7qmZVkNf9EQ3dUGDJ9aiQm7ybBYfT1kgQbxx3P5U",
  "key29": "3HC7AHFTazdvrnFUQPKcURZdecSd7ebPwNsrYR6pUcmQMv7RhNH7jEa8r48Yk2aNG26HF1cvHDfbkZF4bD8PbmUs",
  "key30": "4qjZqtU6pH2GqTEU7Hhc3yjDqNiH7cWUC8xWhRYGcNax68MoxnwqV34G88HQn73NMGVSPqp6bZ2r5Vxs7Gyfi4Dt",
  "key31": "3dZwz2PzR4g1jfCgi8KRsJLSgaZFoi2yLGm3aEZMbxy17Ed1Q1DFCEiyfucfeU9pBixxN7UA6GgqrVfctgaETa4k",
  "key32": "axT5PMk9zRGMXxwKkVTuC4ndagkHLcgF5RWnZudSo2t36CQGVARS1UJK3sbm7LBYFfeSYcgVVuGG55j8mWFms6Y",
  "key33": "5eyes7N31r4hXBj6cesU4EJMnCpfjGHRpeCokYF2GBKt9wgeuBv4BJchma7aWBdrBAUtHjDwxTtwMdPckGJDJvCb",
  "key34": "4ToXNTyV1QXBCKEpSYpBfqr9CoEgZq66QrRMFhZCH6jJWnv9tXUCaLwkheWL7rs6pN7GXYvDzNii73NHykcpnYxe",
  "key35": "51GxzrqsBWn442QXfaEjfFUJMpwDo22qMJZnpbVcuysEFExQ1Cum2KZLjxh7Xp8ywmG8SXLq5b2HgKotdk1Vh1LS",
  "key36": "4AtxxynpHzYBXznTL84H24iGjTEr7Q491ueifnjSvkZZRAHxWENfDpT1b7PxBUQXgSjp9DCAbEzjLPJawXSWLVdT",
  "key37": "2LmopiaV1zUUqxWdPXxFnxjeZedW2hozQB5jfY4rggU8isz9thjknXrEEgLySiKG1ATUbAmEpPcgZUekQRduDWJ1",
  "key38": "2LWDQ7VQHmfUBkTwRmmuhSg7rbLxK5P2HpD71D9RVraCi8aE3mwxNAM6BqxLsLL77ActSjnfTiFbL5bKSE8bnaqm",
  "key39": "5HkS8LYVWR6r3nUnw7m5JhYk6r4y8dCY8a9rripeoJgrGmYwFfALX4PcwtvSNFM1qR1sEyxaR2veWSv2jjh96Fz4",
  "key40": "22Te6ZhSLzATWM78GySdzEUFsKoZahrXR9oNSFMS2zFP7rrEEZLchL4Pme5brMiP3vFjkYC3KpfyPaFw44CfWm8h",
  "key41": "4XEZz4PNNwwFMEjZ16hM8P6rJut3hns1qwexJgU2r44u8ysNwTMLMava2fd3kYSKsuUspmriCvXVe4kSQ4Cs4ewm",
  "key42": "31K97e12ivzNP83RPucqAqLLCeyQV2dsc9BZrdahvPNd4E7128vt7r34UUy9AN7ihLP2AAQ4ViWrkapeJ9GviEvK",
  "key43": "2gbwY8j7xXSt4bMWmj2ZszoDGxeFQfKbTDQGTCZa5rdPxtEAXLs32YEN65sLouzHHWSN9VNVRW841CjisjHTv99B",
  "key44": "qc2JAxqvcfwohuJksfcSS8VqDJ5zS2WWAAf3QL29qxdRu4bTEPqHmL3Trrya6cDCHt2skpBePrxPySD9aziabg2",
  "key45": "bypZJRVFK7xKtZjMeZBXN6Djc6wu6cLxpH65s7YhkwSjJBjS6CGkoNouMcKJkBUaxbmkCFWQGoeD8FFtF7iZXWz",
  "key46": "4umdKia8pMJmWcvdWrekhXS5Shco11NBo9wLp2HRCMraMzZbGtKXkRjFDMspxoZ4CFFQDRec6ci5qva2mdBJMGnk",
  "key47": "19jEr2NyyGqL623qwgGtD61TnoJQXiKg7ZP8eBnV1SbnvZLp4DQfWfjc3yR696NZvZwksqfMXQzk6KJQ233HDb5",
  "key48": "6hh9MMKwvWDymTci25J4sCM6mmHMgM7SWu6QneiH9tWd7uS3AT6nPgay828uT3hhi7rzJkHTwbH6FTdVLZJyX3V"
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
