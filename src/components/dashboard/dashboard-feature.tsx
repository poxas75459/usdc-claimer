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
    "5NsmC46LYG5Dz6NAVDgfKUz2ZJKU5fE2wB9CkWoTpBVDsCA3ELWzFiHShPz83xgu3FKNQ2Bh6CnGFJMzxKHzdBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bApHhCXqJMUCpBrcrqYRXPC5DGKwwbJkjwqYyxNzh6qAtL7m6wQ9aEf7AFnre3nVCCAmyF4hcJXws9Y31xQSYTv",
  "key1": "63MnPJpdBC7T2v9ebkyLDtNdawpwAnFzytKqfnLZutLCG4Xkc3fHdy8Kvk8i4QeLQcPXVUSgmVWSNRuknGnhCubF",
  "key2": "DeeKGuE93PpThdjFebLtvd44LMp7hLxxnjB4wbb4QqKaXhNotbtdw9t6JMYQbrYxE4Qbkt1hveDf4isjrDvHPYj",
  "key3": "5qmgmsRd36C92VysPjFyj7iw6h5nx5y7cyNPXvdizFV4fZ5uf6HoWWVQ63JX8VHiZ6nMdkM1ZH1YCwJ3JFpKVhex",
  "key4": "ZYcgsTsmJJwbLMBoaRpaWBcvPNjoxVEAUqsS8QHkbxTpvYwLrBGtvVQJJyfXZeJt4mEoXZkFbGrQ3oGDVKSdmoT",
  "key5": "Xrw2YC8uzSZRsRCGDgJzYT31D4ndN2AFUgSXHXToWTmxcQxaGdsuN3v86ejsJg1YFmujnh8hZaHCmjJUghXW1sJ",
  "key6": "37cTp2N2cUNNHDcFyWqUUBtad5JyAm21Yka3nQcjCsbNkqoXSrgYu6r8MKx8M6TZkHQh8Cdxyf33AdbqANjhaLc9",
  "key7": "5v3MpzpTPg5UARUovdri3BMMnorPyLoPGKVvUMjEMcgzuys9EHTscDia9nfZJBF7ruXRcv8bwYv62A9oE5HGYkjx",
  "key8": "5XQu9pPfAGKvFahhWrKrvWToi85Gb8vvNrLj5yuKTh3PSmf8nYhGqCyZ9X53Fj5hryWw3FvjnhemrLjRNnrgU94p",
  "key9": "5uTfuUT2F9PQeUoYzxyPSwGEMo6v4sgHjkDvupp6hFHh8UQvzoRUeMoUcQbxqxMh87kYAW8ATkV7A6KtbnXo7y2v",
  "key10": "3xjGHdTRXSgoCzZbqArbb7o7sUb2vEXGFMmoFTv1KcAFPLrpaxLWuWLmAxhuZtMwfewkCyEUbQk4atsXu1DAZWQP",
  "key11": "5NTZabLGrA5p7Qtyz3korcMRFasG2A9a7sH5Y65xGrkoe1bxxR9GibyeaJcdafjUAVVoC7WtJj4BsynnxPi9EVjd",
  "key12": "TK5fBducvjiffawpfJU93m6ZjkJCcGGbgtbb8RByp1sSz9GW9Bfam9hWEPVnTAgFXNFJwbEGJ2zNQBpnDWBYno3",
  "key13": "4CJohamcEFxaPuSX5hzBUzAQzzmdtYLMg65jQ2LaAXKCtDzsPaBEZrJLmSteJiP8AoPiiHmqPu67BmvTvzpTrHit",
  "key14": "3T6kxdTh4N1MWzx72ZLRHR6gVhexMjEMW4VdZcMcXQ1S59TiQLNE9AfpTvg2qDrdGLTd6fBnZ3CgeHrVaH7KMnVw",
  "key15": "5c11XoYF5KUv5PoB1dtxoP8o2RP8nFmZ4SKqN8rdbuUU4hq97jHKdsiq75LTfcCZEamTvmpHx637CDTnrAZvvvm9",
  "key16": "x4LKBXhotBF426RAma5jZfAJDVPDf4dukm2X3knaisGgo1zkyVHMp8KKKXdFDCHy21bPvFdHMqXXyZm47BJmjZz",
  "key17": "2xcQrs3HM3BVmQYytvNmTiENdH7yfiAEdBrMHjcMxBteAyF1iz5n6EWJ9ERnk2Rcx2z5NoVpzH1QSC3FuwX2LdK3",
  "key18": "uKDpvFnLNkr4ecpeYrwz8ZUxNi1j1Ur73ve7DfHxgf3QFv14Hr1Y1CHyTP34imWtvqJJEeUQjoguWG7WQ3sFoSU",
  "key19": "xufCKTpUic2SEVn9r3SF82PFDJuHcwCYUbLUakFhcToJNFtWdiBckLEqPBdNXkXqGhaKVv72S7DuoaNv1SBccHL",
  "key20": "3RpMQdQdUvyyvA4vLADsZpNvAB6Pp8DueHgxZH24QmNByKYUZhXUYsAWLLcmCk2MQpFQre1z5DiVuWXxfgQAXiLW",
  "key21": "3WqeA9TLUmVbvv3DVeCefJGxPPebXh5UJvqXuPm6LSAsmsnk3tnE671bVeevdZzWdAAxMGz6iScB5bbMBJPmmDey",
  "key22": "5LEnQmYRUEakcVBt8DMxuq63ynfqSmnr56gogkCxtHhzCW2J4iStPD1HEmMfCFBU3tiykfhL9B96a6moPE3Yxq2o",
  "key23": "XQzhBDsXJkbitcBa2K1zXNPZq66yUh26NPwWg8Xcgkqjqc59uqjWr5Cnr2SDnnAhfZw1HZTgB52LZ4CZz3Y3ab6",
  "key24": "2uK2fWHxwnkTzcQTbzMMcKgUwSjKshn6rybbEnBhM1bbZGjXg3yw5e21uuX6RXjnjaaQMYjG1vrKF9cTGLxMWyFb",
  "key25": "hYM63xYd3tKF33YJToWP98uFUQGoN2VLxM4LpKFP1JTt3deRxaPk57AkYGA45sYfHLAuxjpgrf3BjzM8NwmoyTa",
  "key26": "2e8cZbmbuWqKYPUNbJSPSo7CrLkLuTrvYBuRyEvGJZHbaag42vDWNzjcc1n7FkNo2BQBzoP8T7E6zSqEecNQ6G47",
  "key27": "5BYyYt8TrqB3LWSHW69X8KWvanmQ6ZBWMvhsgRLT823R2gkuW1W6tvMnfhe9E8t1e7hCht9RmvGXHYWJ3xTXsku9",
  "key28": "3UkQn7oqAseNFgvnMvcCaaF4sU4MznQsz3HD6nAptn3KXjMVtTtavJYbwAgjAk5wtqk5n2srytxzAZAczxkXGkuf",
  "key29": "616RDKRL76id56u8Vs9PL1gHF2AbUvikCrRfgpmKeP4H4tsDpoaH6Y8PpMkse8RUS9S4RXCnFRFqF8Wn4cKtdsJR",
  "key30": "yjJfoqhgsgYCeg85DWjhrJ7qnKZJULv9Zkij1xcBeZhj88GLXJd9fEiXCg4ESEum71E8SwFQ5Zy2zQXzT7jcCqB",
  "key31": "3vfWfkPdrEXJdXWubRmT5d7tcyfYZWTNKiXMi1z82Y14SVQAiv6wCSZiy8zM1GU7FfHVWhi297Chk9JnEVkfwZUg",
  "key32": "2fYjoYxEBbVxGQkn5gf4CwypvwsUNhGnYzxdVXU1V9eYfWJEudmCq7kdnjKmMnZyuGzr26SztnSEe2b5G21yhrxG",
  "key33": "61winEEKPaZYJFCHjDsoutVz5jWxDuUhvT1SgsD1yM58NRJyNN3EvPhnyaQe1rSyzk6d61FoQAdVxyNYscYw2F2",
  "key34": "3LZL1uncf7JqZ6LneY8EPbXUBW3YqV5e8g89UHxQUnh9PefBDdxJ8BSz5qBHC4VjH4BUpVTxT2FNGeixLv5cACxS",
  "key35": "5PAUHw1nkvbuyKfP9pR2NDFdonmqWaN4HGMKk1QHNGhcVr6ypEKe3dSKLU6LkjvjJR7wfED86FtZktnZcK26Vx8X",
  "key36": "3jftubvQhshuxx86tidtYjkaSeFjpAytvxazqsGBZ2Q8RRLo4GTd59S8bkfKpQjZnbtQwLs1RnHvvcHSKc4zeBn2",
  "key37": "28XRKHbuN72ZR9uZAzK1yDtRkJ1ir9QkzUDzzgBY2NS6PkfNXBaSL2i9zkduMHqzkBAij47qZzbgEvMMmRoDjdMD",
  "key38": "22RcGS7hScEigavzNR9rjLNPa6SKbXJxsLJPa4poE9VmzNmiSnrNmDncHbG5CfJu1EReYaDPhwSj7kNpxGhHM3fc",
  "key39": "2vN7U6Y8Es241pK8qEw8ZrRAUVnTp3qzHvEFfxn4jc13xpTRLAtfsM1zn7VFEVUskq6WWD1FYZk3bqE9Woet9Q7G",
  "key40": "4SUfrJLaiR6FHowz2gRmYLAPLakYWkwL4scQcqjPdeSBzpmXWZVwbfzDdmTtRnH6B9LufyUjvRhtHurTkc71RvSA",
  "key41": "5LWLNedrNu2vsTJngcsobY4JFFawAzybcNC5EMARVjeRUNq7po7DptMrkBqQxhGo4xGzWVPGamBB8u8GwEeeSHVm",
  "key42": "22sy1qV17hJumRwRZZ1RoQ3AsZ8sMDJv1QRpK8P3Xtsp5SMdoJnTA3SSSigtj441nhposcezm25ZHvUiHCDDy31S",
  "key43": "aGZqrvjZAAc7kfyco9vm3nPjGDFJ5xZ2rEZKSZuB4Vf9jHXMjhHpciwAMG9duoBd5NLmwGNfnWmSTaNRdX1xtVC",
  "key44": "2LypEyNoESXvuCHLUYhBV2JWDUD3RPYb6BnEqwxRdGE8DYHkYMS8nJUHND3ZkZruGUXZb8mZ1U9Ksn1X6Gkb2muk",
  "key45": "4NSfS6DzxeLeJ9PhPyQV1yBijHVHyrENHXZHevUsiskYWW3bpNhY9MhRjqFpXkfiLGkBmED1Rb6v44iZ6Bp2ZnJj",
  "key46": "4BMj9CYUSBptT1a6t8p4n9oMAcfJANcNbEn9UE6aps1kwxazx9poWK2XiZyPaRVXvJSBpwt2E5mTwigx1GUcVxyb",
  "key47": "3TNJvuYrFHSy6ddKRcGB65q3NQV3FkYQ91BqLtaEALtG6dgAt6TQbQVDTbSoDrSnLGtChbnV2BzbBcERdVwUoPTJ"
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
