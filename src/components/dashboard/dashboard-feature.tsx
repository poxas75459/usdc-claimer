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
    "3X5GhwR9mLEDm8tdJtuynXTiqtuxtjnwovA31BvuJMHfxh6k1QkFYmtidFQ4yaiAhpYK9F8mWWZfmuj6zwMNJbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kEYATNe7bqJ8U2vfAqpff5xF6vtJsy6gLhXrRN3aYnE43CTEEPpdxnXwRYoBERWhouzTZmRs1Vms8akjUovbY3m",
  "key1": "4hhaEyb2oaHHrNSdchgBmekSh8usqRHCwWLs7iHgPwxzKyLdeYnPvvri6K7swrz3FouZEoLyHzJQfFShFCnsHic8",
  "key2": "5JH71vezz9rCZQ1gtnEnhmCFh6k9TtcYhntBbAvM6QGQisddakVcyW7dwM3YadrSquJiCg7beanhGMrTFMa5RwuY",
  "key3": "5w9Q6kKa3ZkVrzjRGKwNhwevFYzkiSJb3p4bA3L9enXpeZpCpAUzzsoxuN6u8ZvjrQESND1yN6RuFNZnG4j3EG71",
  "key4": "3BeYmk7QfesSmtTiJGUdcr2G4Pavn22rvrkskXuUhmrkn6uQSwUzNS28PSNdBNm9uXHtjbFp8r7TF5arwrWfqBVP",
  "key5": "5GQJSUmqegFNG8EsD9K6CZnbQsrWVqo7nDuzd7c3XseTkkM8D9zqahmJbfaxK1DRgz5uPXi24AFqPNeQqgkWnkBh",
  "key6": "38KJv9k5HdXJztVzaiDgfRpNnr3QaQrBBg8HRbKW5KoUY7gzpYRWu2XZXNHB1A15xWgJJf2jaFjRiyHSnt5y3B96",
  "key7": "52vuZdwB5EZkefa5ctt5Z1J6ECEXfDXPNQzzDGMwFoSAwRNz4PK5mrst6QfSTiatDCT6mJCJUpBEbh6qzGvAV6s9",
  "key8": "5qJV16muyvMbWFMBa1u11wBkevcwPshBTbXHZ5EVR24MRUgrxkDKqHdjr9xiLU8h4rhptMW6yT92CxwkiA62DeFt",
  "key9": "PoTNBtruvdEeHQDn1oTLvMkMUduqkTnMZXpHUm6hG3MQJwgjf38B9EpE2GVDwMUEz7A5PFYD3bbsqEWoQaZWiep",
  "key10": "2rshUHQ2q41QstiC4jYLkv7seHziHxYCF1AqKdHBoejvHk75y9HpxdF8tCezHwfkp3uydKgGVPAnUG3uHjvarAnD",
  "key11": "39Dg7xXr5HUSnyH28BHLNPc22Tq46U7J86yxh7NafX8jgtjheyEHqvo3gFwxmLx7E1F8RxnSMQiD8GNgQ4o2KvYQ",
  "key12": "4ooiV55ZSgGE6XAjpAX2srks19NN9MG2wUFEiEYeUXverS8aW3dFWGdmFLq2EjJYpJfJVbgEv9Kbx7bao2WbcnKU",
  "key13": "5bji3guVK7A5NrYy7jmuDEk5gDHGfW2P1S7jzVjh2hr9HBGceoqMBdcSRxwPwzHkMX6wcPu5uew9YeTuCicHPigw",
  "key14": "5g7Yni5TV6HYmhURKpgvEZFaffAoB2SUgDjBo74E7Gvo3ZwHnsJMmihNFN4GGej62K82QL9ngppYgBe3tN1TAL7Z",
  "key15": "QaWGCayrGshNGCKwmSWvAZL4mihByCe57nDjvC6cukknPntNqWoLmrDQjxudYBtF6NBmFokewCAXaYbB7EnWq4C",
  "key16": "aUxM7Qy1NP7WYqTBGvhKTjvBwFQ1vdcdie8Pv2fxEd7hVY1EmbZse5AxQVuAvwXspes1cnXgezvENJxPwhrErqW",
  "key17": "3Q94KxRqeFKduzVDAAfJb3bMp91Q6HwX2hW63BQfrnwK6g6U1yAxzRMv8cc54tAPRHkZk6v5kHtc64BUqE9aemnW",
  "key18": "2gC8fqV8r5DnnmhE16q96jqHCRDRgUgPtnxWjVS7YqBnaCybwF6W7UcE1p6yi7JMSP3PKocidStxGiiGzKUKxJvg",
  "key19": "4F7BJtPw43hvgtJpGaEKsFzJ9v64uAjvvjbz8xV4U47e92qAoQWECXaficpuxoLmnBmWjLHeJdw1egPsPBJTjYcU",
  "key20": "31jEmMnGf8dEK97nx7MU5dnA41bRScWQtDSFc54Dwjx5j1a2qvMGt5edTCoTez51qLRE7x3XyJcjishu4uPgFnh4",
  "key21": "5MeJimEiEiTp88mC7sCR5XCPAi6PEB8Ejsk73AKAgGwSRHtYmuEsZpzJFrjKJcnsMy5wQiY8CYDoNBACHjzcx1kt",
  "key22": "4cbtc9n2pJ5nqREMcYqah9H3hURYTQraFznRHfrE2PpJZVDTHzjHZ7UBWzJZijHod2rbWGjfdwoJrFQiDjunuf9E",
  "key23": "5WVpDzkkbWQtdkoqvLCjsmcU8kGbobNE8KZxPm2gwgCgSdFFru2pbbXo2kRycRjvdjDYrwC2LwXy6og51yGXUSn3",
  "key24": "L8YE6h1Y2JGX3g5gnZv9tpLFYkaj2FCLZ273JkZE8JTz7KwUpPwVKbePgFKM28uwHgKgstQHVmdxJpSYTvagzry",
  "key25": "5BiPmBRxG6vAWSAYzhQvLv6tAtkj9vfQgcbyuVmpULY7TfRpxWEFzxsffsW8wuN8twUZVHoubjWqVkiXTbXvLeVa",
  "key26": "3iwzavzj1ncfrDiN6Bu2u7r1z2CbzA8uxoS8TepCZVTTddHMawgwKLv66DVRYWWcKNpuatgPkGoLvh5DPvsFfGfp",
  "key27": "661roBQ4dNAQXFkD2pVWmMyNWaZf1G6xeosfoVPrPyEvvkQS8m46Bb2xjUB6E7VvTsSmvX8cD28TXJhQVY5cRSXn",
  "key28": "GVBBQMU6DaJVES9UCNc5HZWX55kCm6AJnozudttPqnn85PVd1dfaprNCaBrfXVuwdg2dCqxfHvej7SvuKRLDdVk",
  "key29": "jQUNtVGmT6u7SRx96BwrMeAhboojSf58yftg9U8raqSRFgcudehYWerSRkeGt4yW1RNQRcBWo7zo9bEbrYNCrcL",
  "key30": "26piAK8JecTrQdvNaGLBcn4wgbY5rQHq54VdWe7xgqsKHyQNf8SZuKMok9Ao7NsZ75rHGMFBaLU77HBw8N6tuoAq",
  "key31": "36vRECWKvLF8oyzpR2UTTBSHcsp4n5e4GhumW5qjxCCYQ19A8oayUAiZns37Lbr8SpxSACP6WRFtAgQq3q1fHMcG",
  "key32": "a1Nf6poBBqCUTttdD4rUy8SsN9wMJgKYvRPXyuobuctkbMhE3STPoxmvW6iE3i9fPChRXKd24EUcSeBp1MJenGh",
  "key33": "2poascCaeTXLJMy48muCZ2eTq9FVKDjeCS8G8K8hbBW7pPKmhSA35wMcdUudGeq2wW7PffRZcYqMsP74qzUpwry6",
  "key34": "2AvEKKFkWfA9xtsudvxFdbwZAiEb8osMwDMsvCCnzUKgarUKN4eVAGdbABKCGugdMfYdKv7iwzesDTcM9NkfJcG5",
  "key35": "5KeefDxWkgh5A5wTNuFcL11hcnpJaYXKZUwQRvZUCNHBcD9AagPQ6HmQKaR9amBXFYBLqiUTF2j4hd2yNcm6kPBk",
  "key36": "UzBJdgBfRr7gmsE5a8U8BXbLd2qYQJreg84kYdVojAR8fMtHcGq4ePtPb3Fscne9k9d8wv3jbTKZLtAKoJBPW5V",
  "key37": "45V3vHaZ3J2VSpe6M59BP5AESrux8KjiikhFm3pU8HyEi8Y4nN4tZd4PdREuf4MsRSkta9Cpc8riuVQEtYjxaETq",
  "key38": "5nDZPSRpEi7fHXPFH3pwt8U8M2kB1g528ZBSUvwCxKuXSy5Ln39DKXe6UeM73i4qknvmqchTJCgcAf8TEx38zyrb",
  "key39": "4ZY1AHF43ntdLck4p1bXUR4VpbrnT1ha31nfKUuo3mo6jri52AeKxx2TRcfbhFKPhFXCwLZwVEC25E2K13D2PNsd",
  "key40": "2VDTanPYiRMeFrVxYNpzQoUN6rkR5TdXWLnfNrFcVKMH3nM4rr3soE2qDDP91YB4mvJAVfP48KWwVnL9YF9QLkzx",
  "key41": "4CzgCEM7wcTfkcBG2ESQjUhLLrfY3s7L55VrCGiV6XdpkwRiLo7n4ezVAMfCg53988fkepwy85Liy2qRLbP68He7",
  "key42": "2amph9ApS43keRx5VGYoFzR5JNtw5vXUcZ9tpgFTfD4mbsP27rwiX3dxaTxLLSiWEbifQuNUGvDTzjEyCt8UpvPn",
  "key43": "24pEapxcZvrCaneg8uXUTD8kdNwiL1vwPvB1rWxTtCwaNi2TgfjRituPuFNNh7GK7b8JFXSDKDo4x4mfz7sCLP6c",
  "key44": "bGQDLrv2JyPEtwL4kq1gKykNfZMsA5xUzvWkgM8J5ZVLQ7LKMPKugHSyxQTDwC5mYzrc3LaK1Cmrf7PD1kyuSds",
  "key45": "2FrRH5zWoSH55YK9j9TVKLgzFHNWZXT1w96mzyW31oXgfrRg9UNAWKxgHP6hLaURVyS96BhVb8hWwbm2hV4dN7ie"
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
