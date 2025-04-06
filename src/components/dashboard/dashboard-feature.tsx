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
    "2vYsGNJJsCnGAJgEVg2hDCCXzPyWP4WPXuQ5bDgrvGb1CZhxfTHkZY8ASLa9YXUwY8BNksUDp89GPXKbRg6Ehuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fPbuiqcq6uMnE38sZ3ovSFGW4HgRXxJP19hFmw4tbGwGaxaXLVdGkCDRGCsd3qwAJHTSSa9vy7EtW3bxuBaDzFQ",
  "key1": "3chuibGymKSZ5rrUbgDH7KzN2WdMo3zBA3P1sawYGAaeYQewobELTDf5Tt6oomythPeCP35iQNb8zrvrjqkZ6cV7",
  "key2": "3mq4w3vnuS6PzoYWthRg7PgQ7coAj9eig52An7F7mwgDGCX3eK7oiZqTaDeqimbesm7p2Rvs4V3pzv6gBREZNXRK",
  "key3": "Qv9La862dvb9PJ34mGTuK3SS59RKbBJMzLUsDVKLE9E26JsvrtjCc1GZVmHtVP21NPGx1RRNSiLLuaHmmjMiWiy",
  "key4": "49GqPSbLMYm35ERXbesv2WF4Mq7icbM35Pk6rpgdwvpQKYkBVk4Zhc6Uy5ASSB9tvJd6wnADLn4VxJ4iCrYgQCsE",
  "key5": "3SPY7kaciWvyArhP41msdG8jLRTPRfnpoJAWMZuwSzJepvXAJLWotScq2VhJ3s6wT2x4EN9KP44uPVLHg3a3FcRR",
  "key6": "SnwrWRk3sfyxkrRncqmt7GpZbucTmCZX1coBpTLb7QoSK4L6cCFADPhgF4uZvorWrQmYrN9NSgEUnvaS6njbSXP",
  "key7": "4H49JJ3ciMzX4EhQWex2G6xR9LhzohnE2a7pbyVEQ4kP2Q48nCMUJRbaaG18cpjhuqxrsFCCWKjN5Wu2RUdJWn6H",
  "key8": "rq6DF1qFgE79aWMB6s2i6Fkq1YD2LCLK3RaSsiXju4NbwAFaUz4imELXvt5Gmtm91h766YthiCJkPovyZyURnSq",
  "key9": "5vm7NHXdjFyXijnF87uyLNLZRxeXjdw8zT1p23Keop4R3J1RNvqmydYQiHeo7VpNXoerg8oXMVWR3ATxnV8XGYGP",
  "key10": "2JhVQNNP1LQKCZwF8C3ZhaeR7WespfgBYHFBFAWj1NQrxaivwwXAR5MeV38kQEpgAn3dbRS7VKadQvw7a6du4j9r",
  "key11": "3hFANJBoC74gGbd78DNSkAz2SL9kKL1Lt89dY8aqHgPW9hCLmsMoaZKrZ7ngNnc78FgZZ6Jzr6yTtCTxDSHQupJy",
  "key12": "4hnvtvzfuqiCMT1ZKmpprCxzsaZrzPXA5gVQiQYiFZDrkihgTBR8CeN3oCf1i8oqVCCD2KdUcxWo9P9B89YaWcsW",
  "key13": "3GpzQ9WE92tLkLcN3PwNj14yPbGpxk1FjE5RmfXvovYcKwUvdPgDdyu2CyC7ngtAEcpAMfH61EAZsRU4h2xijMGv",
  "key14": "f3F2qwSUCZBjzzydYGkFdCiRB8WYnhCfCThadkuGsV6c31uuLZSBLvfST8r7KCKTxGx7yq8hN85tq4W5WjyeyRe",
  "key15": "5a2wPX2vssPKcsugT4fJa3UU3wD9YwkVon3eP22nAdjbM7inYnKCJwiRp1LkFnShxWp6S21QLsn5C9qsy2xRNii4",
  "key16": "5ZFDrL9o5HDvNhgr2dzx1tY3aRSzN8otkQBiNN1kMqXg3HwpxSYtMUVt2LSrjBhnQfZsDAKv3LLJT3A6MPpfWwLp",
  "key17": "2q6LJzHej5JzAoMyB3ixuLQxa8ArAyyPHVHqpXAEdKMrZxCFsxXKmiA1iuo7wDooMm43u4tAkYzxquRzwHAzMzdr",
  "key18": "3HhGkHAywtwMYfzSMtLj7hBg7XWbKjwsfJfjd1s3vxp6Q3iXaQGjNcwfV68HAgdgx1UNCHUdaLzTJV9QsWzSWbWt",
  "key19": "3fWmeijiiyGkyU78TGWzuBQrtk384b4HHwK1R1ZA8ricNuFerBp2f7GHdyFBB82tP98fNKn68HSzATMM2Eo33btr",
  "key20": "2ds3gnrgKHAHNYCjeHdZqoWwZ2VN4BuFrVHKYmsxnbKpt1j2EEV6Z51XuburjpSUMk4jaAwjNuKv8F7PXDVKejjE",
  "key21": "2urRd2ZA2VWXmnTKoQrNJgmLAJR43UpTw68ih9xe6kQCbbmfCqQAq5evwHRLnEBAwwsLGmtvz76drYcTXCwsxU6t",
  "key22": "42e7sLjARV31peSV2u4Sn8Hh18yLVATgWFDG1JgnQ5brfqgLWJvocUVcxiiNanU438NMTESjvATfAUGkA5d5cdLe",
  "key23": "3Sg53NE58auEjVekAQ1DNJZETjXYDjAr8gUnYz7mdm8Apf81NPkqHJssiASeK4UGwV5R7ZMrvvfnQJc5B7koEzCc",
  "key24": "39UiGs19fUPSSfSti3NsCWzDdZ6azPdYooQEsKVKFSToMwgfLxB5diEV2kS5FWqiQbdbDokD9PXCVZgsNw7oQokR",
  "key25": "5yW6E618m6tbScVvQ9B653xcUUabTmrrD6HBPaeJwYeAYBZhcXWYyukYkuRMiwuwhNGWhUXanHPUPCriqwHwucm9",
  "key26": "2UYevF6G87UAPxcGWXwSRsdDtxw1LfxHKzBw1xkArX8obtARrESbKBp24aPsS9o7E27cEDN1ayTA5Ao5vYPKW93k",
  "key27": "3tfPXm1W5Wv4xy3j87UtW1VwVo7WPW44ss58XcRcRnRptvxYqW3VWapKhg12SJ9vFvMNnnYTRuDEJCgLGP4XB2mB",
  "key28": "2vztynFYHctgKMXrLcH898zKprnhbD8r8VkCKKcg2nzeNJnWsxxtDu3uaPVkXr14UbF6v6tFMJmAA8ANLM1Aa7Ah",
  "key29": "4ADJrF3HY6C3ZZ93WVKWj5DJNrePgLEKyQcwFEwp5cxtFH7uHTWvWKpZYqmKnFVqJbJz9B7jjRXNJUFdzDzpsnYg",
  "key30": "NMaQmezLrnTVz7CZ5EVYmBnsMZEnkVsFZPYWkXuTH6wy543pVtXhDQwjAraA3Ez86vnX8auEA3qxEbk2REUmMZ6",
  "key31": "26tbvozURMmxc1mrHgnngZ5eYLh7o5RRQJsZF2cr42c2j6nnErkopUA9UAF1x8rJwh8GujpSPSbQgd9PYveusLww",
  "key32": "cozhvPEoGVfkb7H46XYv79oRKiwyxvgF1DsDtbwraadEpTx4Uq8CBDQtGeDt9Hi5AMLbb2JAexZVufjvRK8HyJX",
  "key33": "2FqrkzTRc6wGbzebB5doKDo8zHBksP7FmQ7V4ayYKmtLjFGonVhs6ERugkaDaR38r83Cw7xW2NcdNaGbYiMYECaK",
  "key34": "2MbYNTTYdBxN5JsC6ZGki6Pe5TxceEbPKzrgDiCsAn9wJwvHqKxJr3ggbS6eYMW59VzRTPVnKzizPQveWLVwbN2S",
  "key35": "4W4x4zSJw7M432ZnEFwpn9UCf5VmaeUz4jz4bLthZrEYXYbakzYkgN7NcMLBfuBx1C6jEcjkh5ECYceb9PXKPGWZ",
  "key36": "2ferPGwRWjAB5oeKHf7ZNkdCrqxSANRZQYEHak1uoEaSaFKNSrAmESkxa9gpMoXt4rw8k8xzWWpUtmj8ybhegJUY",
  "key37": "5CyHv3dcaBYxpJiq4Z2cTQjPzDcSzSUmMrNpbxUm8t9cgwvcRkWBmrD7j3VEx3rvJA3jLqEFjUcNPeoq7yM1zcRR",
  "key38": "54UUMiZKUxQLjsipqLyRtLfoRgEumdN3TAtHsnpvnggjpnMLj5PAfpBe6JhY7mwuhZDDJUapK2Qx8XNZESneKUzS",
  "key39": "2s9BuG14p1nqVANGM3Sqvo76ArpCB1nGB8Fmu6Pcc6qkzVLfpu8GvJ47cfQ6Sxt2z5ZX5vfG5wYVtqrm4RUNeUeP"
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
