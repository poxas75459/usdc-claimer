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
    "26HVakNjDRTVqUPzmsTd4bVhDUojXWK4okTax5VKvii6Lxb5izTMxf3eCrJrejKTQf82oiKAE48P4stAsNE4Esda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSwWec3NEDmzHbmodz5Z7B35NNHo2vqUtJrHbadM1FLRHfsrf6wQmKPpPUZwGeaMZSQKxtPP1uYroMMainszDNg",
  "key1": "2i2Vo28HgG32TSD8pKcKgicMySmP4uWsLp3ViZxJm3ArWSArWxEpnuCUQHrs9MUv3Zh3vc5jrqwAioUTXJPyTaJz",
  "key2": "3FqhcnqZd2iTxqjJgda7TjFd6jYPKLsvzmakF45HH9Vf5iGaLjNX2riHqrqhyRA7e6g1G9VeAXnDi6gjSN8G9LXB",
  "key3": "2b5wMU98gjh8BmnrwA3ienZXQ2oAoTuDazYh6x5PfzwK3sQQXDSFrdkKE92zmFwFN9oBdFDmgiUZLvpzaDb2rhkh",
  "key4": "kKfEzz52Faq4gUr2wb4TeZca2Cxngq6kdqaMuGND6dYB2NzB9fcNuM8Tso47Q65oqtjYkqB3j7XdH6LEnBDTjK8",
  "key5": "2gupF4LMBJ3MMkcsSWKbH8qn3oPBfz852m8KqBNv3tw69GfknmdaYt3wuF3cYHabzoVLxWNfU4ksH7q88odxHGNZ",
  "key6": "2bMHtU8Q7JmP6GDZMwL1rM7b3yD1aNCTLKttCk5qiy5BdFULWm9fJpsPANY33BQADm1FNjBdmpSRUv3m9DotMsNw",
  "key7": "557KcKqNkkTAvpczXz71pTSQdTFQ2oN8xfHSJ1zmATg53iHctkpM9ku1An7x2SVndBQY9PBmZrMdvitDv4faZD1K",
  "key8": "tKskPug1VVb3fJvhtT4uW5hQdGgHmNb2KJ59jho4DWAZmJGVE2Jqt5USWfftfb8ARHHat38dqQnBLg3Se4GBvSM",
  "key9": "58gJWLBwqYSnWafQkgSfn7KDzx22SrTfGTrJEuZUvpo1ybkicL1Sm3oZwkvimYZY7hvhfRmGJ9ySYWgGWcxtZ5J5",
  "key10": "q9MA2Q8KdxBG84dSWAuFcKk8Xq5KH8ZYpuWxHBZrtrAdSyiB1q3xuWbkPFed43XCCx8SVTmKiHUqs5LUeqqMFhT",
  "key11": "2Nwm6Awy1izs136SMBhiQ88V8ShRhwk4Vuhp6hGVgLVFFMvfwxi2ovRVaiYTdDjeYgpsBDx3Yps8SaFGrvhE4Yf2",
  "key12": "4agTnYWNmbYfX76Yps34QVt21qaWcqdQyQ1Q5JfXDWzseGemFgxLoxYpdQnaCqbJxn58vjmrVApL8DfuDcXSKUGq",
  "key13": "4bxAk1QA8GnGJ32sYiCK87HndLeQK7AxmLWXtHCokgo3uJwGQiXGop3K2az4iTvwKpSGk4Yqo1RHpRXC8fhtavyX",
  "key14": "aQDUZa937Hb2vututcyehoeGoBYStqTkH7oj8ZUfBfuajLAj2ZaHKBaeEtTkWpXgNNdhtRBPfmuhwMKTnunykJP",
  "key15": "5ihrWDHoTLHXM4ZFu9oGHH3u1AoZidw5W9ZRV4w5gNzrRTmJsnq6iht7UVvoPr9KYoZ3zgtsAUFfcuSNCs59guXr",
  "key16": "sbwiHxYBtHK6BxeVpe9cfwod5KsEPV4ieKo7PAPdpeDKRweJFgvFY1X5csYcTofpswr5dD78HQHuowBwPThTyvG",
  "key17": "4qpfEnocVmy6Lw2iZ1hYdXLRQJwTkz9MjvzCZtLN5WwfiB5HtS5XQEVVPrg9C9KzkSmLFg1fdDHqypTYtgWbMN2",
  "key18": "2BLjJTxL1nBFvX5z14DsfRiv9kVF2z5QbKabgq3Z9imVvsEUJGnt9KnAqKMYij1ZJfpDpv7ZP2bKbQDxiXuJgH3n",
  "key19": "h8ufBctuYJmjrDshwYK3kvatHb26X9K9oU9AJU6NRZCu1JpswWJw5ESX8GrkjimshBCt5Rw8SiWSaAhFNWHwrpb",
  "key20": "pvxrpTKzzYBh13EkiPVb7je2JPTGP6DyDUxLx5C8o5pqsYfDkFAeJCgS3xCTTP4xeYBFhxiekLR1fC8n8B4bVpK",
  "key21": "4dAyG7xYURUVRD8WPumnmfTWN8DUdNo4fUSJqjW1KV1FKEgAqetYWAGLiYkdSPo8UfUi2ZPwXp6bWjFyVX92uZ8t",
  "key22": "2dF7TNaAdLdD5By1iNziP3MZh7RtC2ip6iMTe9Wnf1AuHS7ZPwUubwSZ8uxaapsL3VvDBBHeYQUmpJCZ4mUwTDSn",
  "key23": "PQA11DkNQhzqorq1GzDYg6hwoHbrvhCec6Z1i8ZNXQA4Lpk22kNEF9eA7qpWusBpqEWru4YK65soHgBPQnsxVCc",
  "key24": "2kehsuzjtPZMtJZ6c6Pps6neQC8WsJYbriWQVkfYfXk812RX3nzZQyeH28GpuQHvqxfkRrjVsjqSQBy8ncdfrK2w",
  "key25": "SupJAiWyPuDXqqcdzLBxjXqs5eJTeVK8Dxf9Grckqqy4xqE7EkR3GMNx1Vu6y62NBRsfpkQVLf4TyxM8joGXcC4",
  "key26": "37h4z9NhdbzZkPjrigzpVKy257NzSqWQm4JbTAN198XnpP7cSqmaPvyiwVv9qijm3iKSCApijCetZbtYsvKxPdkC",
  "key27": "EqWybAUmvA48bz8MFGyGjuZdYcR2JKcwrBsgKhDqW8rdvjice7mMiw96c1QBmXRPGWbxvvqh4yaTLiAieuzyVLK",
  "key28": "3o2Cvyt8XWsuhccEqLQ8CV3RUYdsGndWswCLvrZdR8TvJjKvguv5mu4PgLZT1u2xJCn3zYhyj2FoN5W1QAyzqEuE"
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
