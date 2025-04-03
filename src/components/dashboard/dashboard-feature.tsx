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
    "3taAgzHmQoaop41Hkim4faeET18wLiMSH2rRdpsvLZ1VBSpq7f5oxmUCW3VtW4yXq7gDZXmaABpNpu3SsM6j5ioM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrP9aEMrfBu9ZGLjk72hBSLXa9qkvp3xXxLrTWa2vw1fp594fHZ8A7PyzycoW8xeD1YapxYjtC5qNwaqjAHRoCB",
  "key1": "31LgcFBRXgsZRMNpPpAQzbFuS62g4sVDtYTnn4Yg9nJSPwR4i8xeUkXsKZK5p4nF8VNTeXZ2qLQ7Sqi3a3upBS4z",
  "key2": "4WcRqYnoFMAuHLvzUNupe1hje2gM7uq4PwDNB2zneNAYH69zzq7GcnEVBVVqk3rX3WkRRsHqVtTuo8QWvnbdsXv9",
  "key3": "37kexMw4DReTxjfBzQth8DzusCy5kyhcRfwbn69YgNurkXBdSaUYc94cjFgSVcFwXGMoHDFk5ha4kE6oyerGyFtf",
  "key4": "3zqYkDo19vXk3deYjZ4pSshbP63KEFx3TCSMHWhtB8x8c4RohCBCiGKFZUFrQ6tJRi2r6VKDVVeuUwaVwqbAzGbX",
  "key5": "5S4ZU1w1pPXXvaiwPTiXWJku99dY1jkBDt9Uhy1Aj1jVjoKb2FAmTpjNJcQ29y2tKHdZwofbDdJSGniVJavSarJE",
  "key6": "2koa789MEf3k1ghEp1d9JzRCakvM6pMgoJ26gz4Jinrg2mqNwEBPNTdPmpVuirDLJSB716sRgYmgdsuuRoyfmYPn",
  "key7": "DwpgMGtWiTND4ycCjqSkPDwF8Ntf46qM4nHBbXPKXph8ZsNenQC4bY5bLo8YEjAcytRt9esHHo39MWXVoeA6Q8G",
  "key8": "5vanqUGzXUJaouprcskigxrwUVH7SPaeJbGXRirvoSkcEoSfmUJLAfBonH6SmA2E9sS4KweENwVQq4u5qtMenJKZ",
  "key9": "3nFFz9QZUJYFqv6u4ciT5srjuo5zD47h9iMFzPvX5FfzafyC79NWE81CzpUxoVQg9yRqDMudNWGbhYqVQDpGesU2",
  "key10": "4kGGLec6RRrXjcS6V5mYo1LBaGFA2XYDs4quVsKFP6AwTpwEMHc8LY6VUB54PSXn9c4uKAobFQgnWMbsg1RBJHS9",
  "key11": "5izRLTwYEBxDD5xrZWvtr9L88AzKAYf7FTXTDH3nY4bmfTE9jgdWngquTomyDcszspSmL4oEXwPveXN2P6hzzoCY",
  "key12": "28TrVqhgdup9fi39gCtd8gbmXMfeVib723L9f6gk2TH2yDoGexMQxcnKa1Sk69JYMmQ6rYkxgKK8YvwPzEQsP9Um",
  "key13": "25jAo9yX1dxSYNUVFsR3W3gJYH1dJcrN4xGcDvBy2KrAzs1w2U5Lue9W8essWXRxMQf8NHS2sHSvQ7BWsJYD1wsp",
  "key14": "3njRw2o4UcwxyPUf3aAsGLi8RGwdjLegEULQD4dV6SepatcvvrHNqCs3ptGeNy6cSmAYvB582v4iu7KgrMiSzz68",
  "key15": "CWmzU42akxzsBu2XDHbgg5mAjtErafUk5DhJ2QonkCy2DFn6na8UfgLQMNPXQPivpYRibgN3wSBAjkAj9K5YDyb",
  "key16": "5F7atSaq8EVRDB9Aw45B8VSiqar1gSQsBH4ZSVsng8Cw4bhdwvQ6y95MYgT4xEb6Hjv6myoPVWyEwZTnkUwP8SGj",
  "key17": "qe7VZ1wXED8ypdi4jwvQS2QskEfevabCSpkzZzqLYFBPRZHhUhWQkMFwNVjnKY4Zc4oZWGSKkuH8EBS2sKrG68w",
  "key18": "4xjEmaTkHCpZ1jh2uHj1C3AkHhazTyxmzT1SfscAp12vj3UW4YSHfekYKttC6u3Hb8KsyJvS17nuj6C2GFVEHHzY",
  "key19": "zBwmewpk6wdJi2ArDRYWndc8XPDGU1QxrS4YAdfQJzPPHBkHFDYBKuRfr59GnaqrUU4eLFJeYXBfQmKLdv8kkz7",
  "key20": "2dR79CHEPKQR87jcT2JArZ6QtHNHR2Ns1DA8r1XjmQzt33gxHqsJjrYY53dLGKtw1h9bCVQKGoC8CfnkHMiQZLyM",
  "key21": "5XmwURYQpjokp2fv4TTM53hUhDTgJnLfXyjPJUqDuHTzUdeJo7qdgxXgz7Bu7A945nokvVSBDYrLQCJXkfEL3y74",
  "key22": "1oewkTPy3eKgfYKSiMeKZN5JENVhxrM7mtNirb35FySJx8kij4Vkw7YRuiVrohDp9YiVdBG6Xc5ob3eVmkK9GTo",
  "key23": "3JbbbJFQGhTEXr4HeK2xGMNc5A5P7SBCfJ72T73dm3qZPbCdDMVHEmWcc8rr5Df4gPwSU7CDziqtHCEwVvLR18rL",
  "key24": "iZrpv8zjYkA3BeLKyQ1fwkiY8nS6a48ofJefYXQMdezLx4BaFQGaqFsaqJ8ojvR8zoRMKXExSwkFbGoZwhC7HXC",
  "key25": "3kw796dHpo4R2GQ2SqG6isuf6XJ7tNd76jeDF48EGdGkkUuQHqkzB9jEyRJbiDjnfcu6XvQzfP9oMXK5cpuLLU5m",
  "key26": "dMuPWgxgfxCM8mWV7DH3dcYDxKvdapMb5P9CGobGx8fT4zaeErvDNTyDQpkT49kZYmZ4Rm4n66N2M62KWUmZqSD",
  "key27": "qWjiYi5Bhw39iGmQ3yRKiFXDwXZFjpUtevaQLcuJxLZs4p2hJWc6tPQb8iLxFoZbAbuu7TZfS1oj5KPxUCGvG8N",
  "key28": "21r1EEUqG66Hko22X4YS7wjjEXfjXvsUvnhAnafVBKfdNEQfYRRPeRhX1Zxivuw27gjGqhYL8cXw9caGL1K5aUtc",
  "key29": "4t4WdXJ1Co9P5Z4zXKNuyRs4m7TU8kEJfiU2nfXh6uBkdYDuVb3UyrJjWbjYPKnViZDkdrvh7jdfN1uzZZABbE6w",
  "key30": "612aJGuvkfXNeG51FvGVvA8i3TikvXxKr6meKiFJzCAxyunJfEmHzgKAPKuCCzGSL1rcCBBbD2rMyP2a1qC1AY3s",
  "key31": "274bzxe8EZpM9C8HF38GcCtnA97N5qNYqTcRaVV1ZZ5UukxBLa8RTGteZnnk4fBoN953XCGVJRpAQk1N164PYFaJ",
  "key32": "43sEnRZ485vNmFQpoPVUCdGHWfh37X8srC68koN75KHSPtBxpiuggiaqm5WsxL1QUBDt8orztB73NMuovon51244",
  "key33": "42s6iK8qCKdLBaytbA6wypsipi2G4wDccBkbQgBK6nFPVeHHt7NHSsvKzGHKG2YK1kqBJ8m4xYkN6MvfEeowPtst",
  "key34": "5pVB59mHGsH7jYtYT7Et2sjXsL9rJkvspFP93RJzcRLqXFcq5AUBsqLESbAt2wZQAV7rSCeKAeBDgdLDAqafeC6h",
  "key35": "oK7iPjYkTsbc6phudnSPxjE8y2AWZNgt1MEj2xevtFs2j9E46vZ6iGQJFbjEdoZUhUfarfMfzbRYUS9M5HADqB4",
  "key36": "42nRHG6PzSjWfg4zhoU9BJg6sWrx36nDiSMq1S8v5Za5dU6G3xrZv8rKtHrgZa4E47rk5SyDYDVwLtYjEs4Lnqgy",
  "key37": "641ahg3zEQs5GwG6FGNchM1K95tESYciiDZoJuzK2eJAhnhbwJ1RTQY3kZ7YuS3BTPVfEFnhL2Gev5BmRynrw8Zo",
  "key38": "4KcGn78LgufQBVKb5w8P8jdHiuJpM9RFQpoziRZLGWwTKnHLeae1xQtfrrtEfvUmns1Ex8CWhhH7Jf3yt1sSDQtW",
  "key39": "4tCLNKPMmGXnSb65vUkXq8hJRN5s2sX18XW7muSF75bMrDA9BLJYV1pzvjHGXzdV3JYVXmi7JzSA17bGha5xoDFs",
  "key40": "5oy7j5XVFz94EsC5mnUX7q1U3jcy9sPhnD6VbYVuFSqWXyvtyhMVEzX7umegf6tDt4k7YA2HZGPYqnn7cPbx5gfa",
  "key41": "2qYVNCwyPZibY7D9dKNDGg3VqEdTNoTnuEh9JaN6yHjDrAEn1QunkF7fY98beqebafrQgrHWMq4VAW3Tbpi72qFE",
  "key42": "1L9AUFj1CtouiiMPrkV74cpzk7QRvDQCAKEbBZQn7Znp4NA26EXi4oiFyEii9X6XUPd2sJwaL1EeYycgcui6gWQ",
  "key43": "2xAci3A73WaMrVjXAhsffVit6PxRMTwhZdXMzhWrs5RR6ChPArFbsQnN6ehfdbH4G33MQYQrRLYfCAyKrrj96Dxi",
  "key44": "4i3HMBTvZPfEyfg49k9hRWZbfx2gpkKQF4SirQwowgWHrRdM31dgNJqhUyUa1vd83scUR9RrncwdqCuXb3Dehtra",
  "key45": "4jXuE33LQmPGCnk3pRatMkuydKXgY6ZwCGHvDuTsN3bZELhwkpfxYpXPNsuuhbX2EVgS3FXEeBkLkqTv8CPa1bPV",
  "key46": "2Edi82X9eDWVH98dCz4BxJcJzLUcmWbD4MXTAEW8kZXbWf9tJZyfDRqWkwheX8EmPgyyJYJ3kK7Jv9HUUfQHRnuM",
  "key47": "3y2wk6hVkc6FuYvXLgYvxKokUQDpk2vdZk8e59RXTneNxQPG3ExnF2KKzXJXoJeUmFXUtCVZsiZHbGmEs62Lm7bT",
  "key48": "67NGdC28yhAbw2XhGyiEv8D9ME5UXRWRQwnJmfPVgFKbGRXn27RDVvHJryXLJVYRwurdWJCRyXaUWVBF974aZzMn"
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
