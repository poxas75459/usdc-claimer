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
    "3PdxGXc39ScTSERZN2uxBh1fe3n3wuK48gtHNkCEw3Q6mMMGzRuXpafpFrdV1YCWyD7gJ8kUrPitArNYTfrVap7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcTq47wShMR8tEtT4ryYNsc1UvLm1aM8zZ1DBvv34RiaRb7kXkf2qvBWuWcGNx195UafytEAqmn4ugUhVqD5qxB",
  "key1": "2KD8jFmYoUbjkAKkAbYvFYLkJYCEGxW5JECDuDfXoQZppbxGchHmGj5kodq1r4dPKF64W9uWe2utjvy9uXncyPjR",
  "key2": "BESibUyDYutQBjDEY6153yFALUnPpLaBBBFuLn2FqG1erGvhWQtjN3G9LTRt9be9K2ZLUcdaYbvQXtJkr8W2bXc",
  "key3": "7uq3TKnKmwfWvCsEXJCUUYTubpd5sB7RcQrAM529phEguNWZPcExmMRVZdFAgMy7yUegWEpYZrnMuqDd4fvjF9K",
  "key4": "3BdewE7ZkwrkBbnqLtcNZn7pCoSZ3UoGpKqmDReiEd8Pk6jx9ZPQQRf24oNPB5C7YQpUvirKycaadMFSS3DhJ16e",
  "key5": "4nRNF5X5qoW2kYEaPvZnZAdjqELH2QsSBvLJeXQc487tFG3FAgu3p6RYvmSMnESfeRhF1x2w4GewdmGAVQNbiNty",
  "key6": "31qDvtuXY1KjbhK6mbHGUDCfVL4Dez5rx7zuKpPFYqt4XjjdALtkJGmYbMBErCA93WnXYBwe137EgmQnGAKZ3BpT",
  "key7": "2ehcBtHTA6wayfKXmR7E1y89oQ1csvd3Gq9ZzAzN6UNGX3aJsP1Gdjptv9aYuHjRBa7TWVH2gaTSHC6sov6rHEfS",
  "key8": "2nMTztHML4ja9qwu4r99nNhmd5dKsiCRVAxBXnfzHZXca6pKCMXkL7EbiJWk7qn6Rnp19pDckqBNDMJLt7CqdYL8",
  "key9": "5dgZjUT8VsPJv7J7zGkTxso312MBTVZAxSzcNsrdQ63GswLficYyQkEUAsme7LE3rktM4JhMuKc7JCfvgXf1uJYE",
  "key10": "Cs8h34irUHJoWS3q4G1x2NAJuZJjLQofEnA5BT5W1dbGa95o3Keq7meFpC6CJsoUwVh3NK3csWiyfT3VpES5QbR",
  "key11": "WC3WGwGCCBTUFwfAAVnsCGauFa8PYn5xkTgPYMsAU82ZPnSbbnHeubZ7ZkAE9o2qmFgmAU185R5aAZyyLjCTdXC",
  "key12": "4CBj22nRCELVNpyYKzwcGwRbMCjAdp4C3kssZTnYdPgU3DVEbUeZN8jGnPrY7qnUvBPmgNXtnTHfUq46ZPKRN4WY",
  "key13": "25BNrbK98MscSwex54vUN1tqdmeHPArM2XEiTbdJVr1Ge56smEHpQwY5vSTUfTr4piEvFeGp16Y87YMCU2CdiuTv",
  "key14": "5PWUFBdVkTrAuonVYb2FXfWKm11X6MiqL8hVYZPZKSmtVZGRyTs6Ss6k2gjfNjcicJBdXmUB9WrZdFofpqxo544i",
  "key15": "3tA3a3jN24qV6QJcbBQwd8wiesJUgcQQkujPMmtNKhDpA93hbhAdvuFLvNVhMSFgMQ7LrEdqBtFKfHzGPZPBpUQK",
  "key16": "4QFos5qUTqzDCsYmvoa6Y5M8kmaGtpypifFUV217DJC5e6ep4X7k62CHJ9PgT5BynK2JZNxAf4s5WWmBJScW9Fzq",
  "key17": "3rKCSdrWwwL3LpYuqMmH8wcEFZbC1qLRxLYteh22xHpnKxMwqfDopZ7PwDruncXipdKCAqwURUTjVqn24W3dL3RM",
  "key18": "2fykwFsMEDV4BekKxZnd25DN4JA5VQK5P78aaoJCkAnFYPdVgMP8tcX7yt7BB7nwRL4ik7wrCdEUEJQKGfCxyrEc",
  "key19": "C91E4c7d1YC45JyVH14Hd21BJ82xKRgTNwFrQUcTxSYcXM1ZjUoLAgFYiSkKB2KzmPSfqBuaPtxEMeNtRCwpQie",
  "key20": "3KUY8jLrVXN6EiuzUV2NTmnuNoa5FjYqidD3nsj4jaUMLo4y9VzaUQ2thKLaTSBqeoQQQnLG2uZcNLgQ7aAWAXCC",
  "key21": "2KW9VahGQntMtAmYpULYKZJFPZcpckVVJ3cPY8QaCR7tJ4KjoEHAT9rTfpP6YnqztiAh9ok6MKVEvHcCQYo6T2ss",
  "key22": "3eNZjX4EYiroqtYaggDLMMvTj2m3Wjxxhkvwq7YW4s7B9p66ziwXQWkFQBjXmdEg9JNoBARMb6112wGSRr4NXsyK",
  "key23": "3u9Qy4SjgraaxAnnre2kHhdcf2HEVvQh1m9g7MPQvZpdeGqjGwt9hqSfBobnzzZP48HeJXK5kBsi7G8zdSMLwxfJ",
  "key24": "uKxPxNiFCczA5A2471KBCeDTMzMZeBBg5ETQCK39tY6cQCdPKCm6GhLPZ5dbscw929wGPExyTVvWVrn14fsBmuG",
  "key25": "3ms3wZ1ewHACFH1TqR7apWudDnbLKtDWqd4fqtvgLjseMFrDzDyVbGS6j1WjEhR7rw8kMk7XzoQQ5YFCHBRw9jZ",
  "key26": "2ujTL2bynyDnNZuJMRk1eQ9dTvAx5Rngp3nev6s98FwfhB2qnXmCgMXuT8MBpd9ZcUfQpM2Sdm6U2PRHPJXUYFfz",
  "key27": "NvKNp125a4jyEBUWgHYjxPm17WCdgMbNGGUCxh9CKdvE3z8VcooUVizJh7KmKxtabuLjMTnQVNjRddy5VE4nnWv",
  "key28": "pDGdHmzbdpDpKhzJfAq6qeFVGbZE6VPGkX6ThUsHdaz37wA9t4wdkDRQChX8fJBoCa9Pv4SewAv9YH86TZE4Vai",
  "key29": "3LTezrCSEKNwoKsFtqrRm3qiyT5sKedD3urtT2THkmk3sGvW1nq7kq1EwrbQea27Qfk5Ska7AKcUgG1ykzQjApse",
  "key30": "2s9dsEsrK2RRX51iortaHrv4chY9RUsk9BtrZD8tfToC5tF1JPErjyUKFTfapqz1UnMrH4gn7zUrD3juSPtAYqWe",
  "key31": "3BKYN8QAUZUhipdwDwPTFjLvqVq8kJFAa5c4VUi3c55yDwio6SqAtawPtW9aagYeTqp7sNWrJ4jbAsTkr6z4Qifa",
  "key32": "2LxFL5QXPc3up8U9Wj2BjFXf2FYGmwLjRPgwEPSzbRq4cdb4C1tBsVvVGDhaZtPsfQDPn3Xti4sxZWHgfD3Ziv2d",
  "key33": "ee3AsZULxJouLVDYobUD1Cq2UEVPSjezv44zxX98m4nxgC7KpSutTgKBKCqE8wkxhbPYrMeUMGHBKaC17QxipfC",
  "key34": "2WohBaGst6rzNnvRtXT7LiFJUKG8pP1bGLxx9pDqkJ11Jg5t8FYyZRitmGUAtrRZxUfPqMkyDyTA8EVFZ1wZAios",
  "key35": "4gu1Ntgock9mQdJ11dfuyWgJ4KKsFDgdVszjGy53UoQN8Bvcw1uRXhXh32CKauSycoUFg5maLyGBnQDEMd25PpAJ",
  "key36": "VkbgJQfnnxayjmYVAVx3SEvBpoU21BKbjgNEZweai12hHW4hEYrcZPpj3kjWzrFkSAcVhW9QxKvt9cC1jpKyvcp",
  "key37": "55VuEv3BxeGiSxPnxBKjrKoRhibDcr4XrSCxVjTkeGzyLgs9XHtJBctx9Qs1gJdwNxuEChLzj4A666uCgd7o7Vb8",
  "key38": "4Jf3DbCXwhbp5fHnFFb1tkfjUV6WwhCnCdX4CiQYJ9e9P6dFXcBKi9L6nNrPh1jSwNmmBwoFDHqeTE9ZgULEtmzE",
  "key39": "5pPPXuBAUtT6T8aiinWNqk4FRv1noZeo9UyXyqUMLRf134Bo9MGwhwvgzXYk6NJmwALy72gWitf2xHBHUe4WkysM",
  "key40": "2YcgWxrGFffQmGmmp6BS1UjzqCxDV3fuGsYdZejskAZcwxBu131uEPt5LEmnsmWcqRMuGhfdhXNSgeZmKLrqow2Y",
  "key41": "3CSjKZ1qVSbLt6KDM8kBXbJSRfhpMkgJZvq1jsYukbvFoYGPeX8byHuiwL33oQiKd7VmNkqKaF6q1Gk5VwKYSUzF",
  "key42": "5QzrRhgxGP1qPy8wbof9xoLXc6s5UJsMWSQ3nWv5VdM5V4oUmxBPiUDmSpf1S9uyzUmMXTzAN9enkz2gGkwEZKGt",
  "key43": "4AjdisB7yWzkSMQVnZ7s5i4yiiabzujoMQQcvaptRtbaSoi12ua7uYW2C11nq34XFb5nvLH6hPnH2DddykqPYcwG",
  "key44": "2PAH2H5VNpBDwaqyhPkDqqK843HQy1KzuignTDX1XKuYsf7qHj4JgH9cPzpEvRerahdWPXFpAf6HopkAeTq67uVG",
  "key45": "2Nxf39Bp3dD6VUYhPCtH8eyNFfBBnNxmgngBHtra2EesSBG9GMCkVipbQ1Nah7u32ZZ8xwSLYPS2KFWyjsHJnPG5",
  "key46": "3vca11AdtDpmCt9fqahLo1mtbQcNRpkUEZonwyzXUwtBNvriEs56mgLq1yTcHAHjdYb6MJGbsSvxczCShpPfMaWu",
  "key47": "4C9oZuf3YnQ4MAEbwb1hhpjVpgujSoMkFNBai8mNy8hF4Te4p68rYF9gpjkFqnEU8rsM3SuZzMwkxfNtRaxb53mY"
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
