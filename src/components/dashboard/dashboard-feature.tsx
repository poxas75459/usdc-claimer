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
    "3qg6SecPbvmviddUr21UAKhsef2tSct5zZeWUmMMD8D4NEw12X2BTidedTQ72EuVhBP1ogP7PSG3DeK18sQKVRPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34zL4QbrD2CjNisfNscugRSxMiq8ZNrut7HLHHSWe4cH1QP1LjCxdcvsZHkvBwBcBz5pbrf3sv3vhjrZWtMq5ZPV",
  "key1": "4KUSysXqroKcfLV94sEHxpHUMU5HDHYjsYR9oE92zzZTbQu7D9gw5xvmioXV25WTvPy1FnwRMyg6xKr7gUJyA9bV",
  "key2": "PmRKAaNxWSheaN4VWJH2R9QQH8PRx1T5o3PK7fj5YVh7QJp2HkCWrci7sbCoapsGhHAbyjJzBMQvDdTonHRhrE2",
  "key3": "4KvCVKuadLpVoZ4KsJwoJFzjzaUme6i6cic54dVPvZT46coPzcVdRJKA6m6b3DnY2twXTZBjYE7gNLXV7dovPQ72",
  "key4": "59F9NtJDSzWDqNq49svouQmcEsjA1LzjcEot6GYWSqfdJst6xtLjC16NZ62G2SRVU9e8Xcr4Viim4NSfh3eKhrhy",
  "key5": "5Xygt6uPcK6o4sZuTJ8ynMbW2K6LbybvAiUB1QparDoRNTSsENCEnbEGSmDAbTj5KsV55Kiicz7iLHa2trm7teh4",
  "key6": "36CdjPvMyn8MMpo9YnFJiWYaa1js31WcCc2XkDcnShSeWn5NLk8oxgqYRvvcocno5LRZQvfQcUTQygEPHzzwpPoH",
  "key7": "3LZta2ZPsUowpFrMU17bbNMz1vczfYkcoWS8bcjmTCmYsU67eEXEEd3NPE2VdfRvTDKhRFsFBgXb6mDQJvvos7Bi",
  "key8": "aGR2qtfe9QVQ4HanVPCeLWWx5PitpZASZYsSv6TR47NEkHkfyLowq8UeUrbrjCzEsNUMCgGXrhwwJ3FWU5FbvRi",
  "key9": "4JkSBuvw22oUkutqBsMpYoM7Du21hPE9G6ZKev9jKSQNBDySBN1JWK8CdtCi45Q3nX4tqFZ3wgyegURcqyTDwrsZ",
  "key10": "4hiXQRpwmTa7g2GxJ2rXd5jWX96tXmRBK6JJPP77du66FanRQTNFz9FFEWRPGkXAdtCV1xfv298cYPxFSJPAh4rt",
  "key11": "mMv3CSbjSwaqmW8y799bTkHy3qvuMRh9Z28zCmfgzyUHeDd9DuD36CH6C8XwNeTiAAnxCtrdv7cfL1msgQagT5J",
  "key12": "54nmSVy3jphe1BGzX6ob99rF1Cuc7E5ZLoSsdYE1Lb6P6FQJnibU63thjNJ8XkEQeuUbAab4YfMxu8ZEsddQ1zn8",
  "key13": "4iff8Rw2Nuhk35oUCRjt5o8211YZMdhfCeoWWyPKbJyxfS8pkDWRtAUSPptZZdY8cTvUj66Avc8jv72RySYWf96z",
  "key14": "5FoE5MNGoT6ChuTx1BhS4uaMWoeEHbC5iQNFTB53Ga23UR4vEGfL7LfYCY8k4enb7PKRZynwgZMz2BzyLGBQpSf4",
  "key15": "39qbokYrUijFy9Lm9fPQofTkfaJ96LDZeeZ3zvBLbCk81D1bv4j7oAb1yydsgacG9KrcvMa2ihEWPRw6xG4c5GZ",
  "key16": "27UHXZxE3aDkpVyg2QdyjdCspvjykonsfEBaWJWsr6b4Le73JnZXS1WEaPbgx6GTRToSFpA4YcEG1znSjnHNGKa3",
  "key17": "3qyEEBFcckQzs4s2vD4CrpxKHtQ4JN8FkobPgF7g5JY8VqctgBJyKKx5RtZcXqsrSsXtRDBNbnFM1SKa5rZpZLks",
  "key18": "26HXU8qFQDsMyReRKFhid2v1Ffi5LuHNN2qKWhjtpCx2qdKEavzQwRecNEZYm7KJQYCWef6H4LYHCmGRYbqkSi3v",
  "key19": "26QknYmga3ua3HwFd7LXQjFZ5Vv1absCQwk2NDWXhDtHyBJkjg2eKiWbd8LNc4eh8DRbyGjuTwX7MY11ctiubQBd",
  "key20": "3EP4xiyeHRSnmZ32yn8opAB1EVZb84FJP1kUodRCuaqR7pMNaLYJC7okrGrnLyNXy88DecuehRALySq2KeH59Lt9",
  "key21": "58iL9wxqL92LSbEceHyZm4JdeCXqRXGmxJBYmMnsrPu4FJ4iLpSZsEh218P74vthxMLPG5NCL9RHhuh6Xbcow5ry",
  "key22": "56ujJqySzT7aTgtEoUJi4qxyxJdLNrGzi9vbVMvhCkZr5ZosdxAZC8xBC3uGX2C2QsxiL7hD1XMom6aRzJMSnUt",
  "key23": "D7b2xABRbrbSH5hbofgyS58Jfhvcyv343XSAkEnZCU9xtPzrzHBMxNWzLrtpnS7TKP1TymFA3mMZCVKUgwtvdrd",
  "key24": "2qTci9i3qC5jVKeJcK8bJtQ3bSHpCA7KL4Dcp84R63S7GZMEsdU78rqnHkivUprbnY9vpWxxdVXjjF3QSizFqHwp",
  "key25": "3ufYqkTdY75t1b4AYHYsbghT5Tn4CJmh2ZQPmBSrRFv6mAoaLwj3FxZ1f1DtYcpm3FcpM4Sx3eQw5xdxQcceZnfJ",
  "key26": "k3NLH4QVb4VJp2YAP7uhwMEpkPZf19QCdam8kbNwzETtRCmhys5stZA8Pk5A8PianZNGZiP3JcPs7389hcsRUa3",
  "key27": "28j2JmiyadifNXYDQL7b3L1w1TRW9aaLUhN4zJzeQVZshLYb7RrZz8tGiqPf3CDsRMq25WazadhQhx9Vd8SxwoZB",
  "key28": "4osSZDEEijj2Hyws8GuZjBdmYxUgmdxg1dwV8TMPsBPqFZZ5MUWfyWz3eotNW24PQ8o78u7rjz7GbrTLCkBfKFFA",
  "key29": "yZ6fVEEviLuK3Q4x9P5Fu81NiDHi2osLR9B6TgDZGNaPJ6jf3cYePyBNoZNv8j2fRqgusDbgaLFKZxPCtUdks43",
  "key30": "6JaoKDSE3fEbDUHPWw32qe7avKgnPLGqt5fgD64AJkKwS9hVhbjXmF5J8qupyCNvPKrjrwgHm5mi7SmPdPesXKL",
  "key31": "2wxVC1bLZyE6n9kpp1ciNdNb9Ma2GErTaWDZyCtbW8KqcpGoKj6PaTNQZGg7Df4cC3xZi3BgeJTRQDbEuNTDXKtt",
  "key32": "3bvpLdESBBVEoqRQ24PNWHsb4MmwC63ja84f5nCrkF79dHZTFsUm2Y21VVQq4SXPZV9MWCn5ADsNhoUPfeNVrVH4",
  "key33": "PKBfm9SQjBHrxRHMKQ3PtWrbKwkvegvhuRFaEQu9ZtKdw96zEzbYjNmnXEdbYVYBQ95bbBgKC9S7eu6pYoXvVfC",
  "key34": "5mU8jzPJx9pZM9rJz7TJRRH8iKk6UCKqBqiwyaWhnPW3neNNvaKNF6YWGHriEf1Q9hUCVi6j7vLSeGEbac55LFWK",
  "key35": "k8ZRogRGK31SmtGNJh2tQmTcSSY7TMxU7aGZQMcDKSWmxAkVGGFQSW24hSEHrTHY96zg33KGABvkMtDDCyovjSk",
  "key36": "c8uZTCpqxZ9WV9AF5qfffzZRv124CoD2guqyoNKZ4ychvn6DFxPGUF9zuLoCCwHbH5aH2H4xsm6DB6wJufDxg4v",
  "key37": "2Yc6yGfJsjfJxvvC3aj8gN7xSmvtpRRgzp88XszS3ANe7NcUh8wAq4HEane9oYrcQ6Wb6aup1CVMuRUJc2MqnLDe",
  "key38": "31rXfdi1DAXXjSTgT9kYempVoHoUNpjTvatv74tknVpdhwtUxMhfWHaubgNWpWvfgxLSqPmjx1acmopNu7SxzDmk",
  "key39": "4FdmrTUdaBFcXfnXUqZMUWZHCtXy5pm42Sci1vP7wQX5ijGv6KiKt3TCWkSfxVsoTv1L7mX81GQq3p3ySvrPMLAh",
  "key40": "2uhez1VyS8FaQoKro9Cj9wBBF5vAgt36eEf5553ZAUDRp3A7nq1N1DDtCHgHjnxpJy6cVAanoes5f5kefU586Dtf",
  "key41": "5UmtQh7zsCVAp7EKcCbdekTaMPBSkwRPMTp7XsrTd6a9Pe8E8u6eXbrBxj7uUo8nuXw4JYS218cp5voX15n2HAin",
  "key42": "516a3Xn3YGcGmC49pwpbCup3mXEzn5xsGrrJscrxSAvGmrEcb7NcAp2962JbmpoZhTpsuSXnC74UBxVzaJAGjYWJ",
  "key43": "48QcbxQKyEjGc3dcK81wGAdijCc9q6ZcA9AeyTcNaZmNVZniMDdGuMHrJhp2QpX1WX3bXbMd3Zn6F1GeMM8TLkLY",
  "key44": "4K8AAqdy3MmLa9gmbaJP6nk5FSRJyX7bfawxtJPYipKfYDptBWvvtkaRt2oE2NTTkYbJJh581zg9wTpm41kD8WeR"
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
