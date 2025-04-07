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
    "TjHw9xqyYueCN3gMxfPaepMGSypXYw2FV5PqnGi433BZM6JBJGpx6x7st8Zu6Qj59gqQ1GPhFZWyKLKp4NZgpvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAKJoTjojdeb3e3N2dgao7WTSrkheBHLax5PMC36xhE7hoxUJXNCpKfxn7aGyyUe7HFLL8agydAsoE6NDcPQx5U",
  "key1": "5YZgBVRfZ5Di9oumVw4nkgMsVmSwdzCdYHKn2J4Zr6NaAV4HHjJ8s4p9yPJp8R5RwWtCJevgoNZiYze7iN861WVf",
  "key2": "4TQW8miiiyHK7yQXsFcXvFPHaDaz14YLVgNLGrotT4ZBpLL35rSifSWM7jE9Un4LuqRUVgHogtqUz42735XErr5g",
  "key3": "3psJgSA54mhZvRXtyGHATh3bz57V8Rr2zTEg2SPFiXbcdbxtmxNKKKaWF1FUfzakf6QYFLbfzKDMLrpe1KhLEbtR",
  "key4": "3LkLSrFG1EX7HfXn9baRzvMSCdJnrhM5BEux5QermfM2MizHXFHEZ1VjoYEyhhEZiRqf2wbFx1KPjsCAFQXmwegC",
  "key5": "oLkJcFEj65nnCwaat3ZyQSNqxcs7eMQp1jKTUS7EtsVAXUjzZTtcrJpXbf2ibF3chG7QqMCPgJWeRN3vTuUA46P",
  "key6": "5Tp9mrnrnYbXUJiuECDGyNLNuxpwHNGSLp3LxyYAHXGpSMnRp8Cyw6yWy7rhHgeP8ZEnDEcePqv3DujeRS53jJAV",
  "key7": "61G3kA4qiyU523LdGWAMZtCZKsM6jhiYXHvw4D88TzrwqPLPBjwuoZAARp7oVVSAmtGnxohiUNzvTrnYXgX2WC4T",
  "key8": "jsvJPrFUMdJGmZK4Hjh1o6rnL3Pa6BiiuZkgXDudH2xQUgchywxw9EaLAty6udidFyKhsejLrEByN4ChWKq2CP5",
  "key9": "3Zw8AN5HssLQ1VQrD5nezAPVeepG5cZPti3ZiP8Yf7e8W6rQUozRbAdojvRUhCWyvcrnm1YCFxGcrZQzetB97cHv",
  "key10": "4xe2zMmSpWVnfAtGE64iGGJVLqbCvxECMQfdMoV43qAfsnMFCt1Tv7sAHoJtu914B496tFcACZ6foGQCj8ezFg5i",
  "key11": "2V9jvpFJhXpZVvojojinjpvt5hELBKNKncrv2irjEfXu9xGC2d1YPQ8mSnwRU9n1VJXg4zTcDb9hfZBQxktkXF5w",
  "key12": "2Coz7Bn7sACsoe4GrEQQPwyroxXxdFZycpmG9yj3ykx5tG62TwibLDt7eZ3GjtZQXFVRkGiDa25nV87JCoM4G5Gb",
  "key13": "XP9nwQSzcFHzp1Zu3B7p2BrMB1w8yWJh8KDdkG8syPAFtwpqpz54FYfF7rxy4xYFKHWAps4w6x8ZsFrkjLUXHdE",
  "key14": "5PkHD2JRhD452jqVfrgJws89n3AF2Q6kNwedPipJ1FHvVWX4jDRiA7wAJ1JYYgF1inXg3CzENfPkzSijcZiGFEG9",
  "key15": "3x8w5dHjEpbxYNBrjRwN4HwnaSnuSLsNp2RV7brUDCedSSG1Q7zDEToXAnNSCCxzc95Rr6NWqLHeQe7KVeU49xa",
  "key16": "4qCWor15DYnRDrhsKuciPEssPsz7hZVdkm6CKkY2GPPv49WPMr3RAKTzRRF1s9v1XNzxCKSyk7ti9rELgSvBhuQ4",
  "key17": "3KP5SW8mwnDRu4pw7t8MXqeELyktrfEBmX7DGPXQvsP1mExafqMpLv8TSi7Y9nEzzad57rVMBWBAjkRqKJ51w6Aj",
  "key18": "3zJdy3S8aAT2y34Wq7VpU8XnLh1xQHGvCGVunPq3PaEizwBKnyRDESgdMmmYrU4B5yPPsS5sq7UUAzkJRq77U3wB",
  "key19": "2fkJLQV1bnewP3J3PahMxmeZ9Pcg27Cs5gxKCYkk5CMosV65KH2ynC4zL5dRLkkUiAHQGWcQsi9cvLpvcgAe86Gh",
  "key20": "2kMN4Mu7gh1WLnm1g55ixEqCc4Xt55wkPYnxUTbE6oiYHQhxbfuEDYmYJe4qCtjgoa27gvLGJ9aJYqB6C72s3jAj",
  "key21": "5kvwajuDJ8ANULFGQFTP9P2TKpaXMx6a4rvZomFVPRmCiu738ZLzgQVtguXeMnCUvFRSt8D3PuhuMi2sNiQeqs1Z",
  "key22": "5fz5BBU5w46c17Y9GgrRU7Lqac8nb1rdxvGwiwhek4A7VmupWWkFezXCZ1FU7QXvpETUuS29hhbuvFpKDsq5LnEQ",
  "key23": "5kb17eUubk9Ayr7EA5g5tj9zrRHg4eqSfcbPKSKXpgCaPXymK9UaXTyJU7EBK2Y1cEoyWeSPkAFxHafs8h2nvsSa",
  "key24": "5Tto9DFVGPAX3SCVzxpsaDzeoTb2YAzoXtK1wXcazfrHFhWN2daCZhBrsymULSvGNtKiDbtARHiu9ZXz1UjTPkMo",
  "key25": "qFWfPcPma49fdF8BZPcQKNyoTwaRPmr3dAVBDpyeDVXRo5YaxcBQTLsoG7yP5RnR312H6PpZx8xzqCGYnqcFSbE",
  "key26": "g5SZA2cQ1BsjqkMYPoTt2kXaG2DJWSneYZJesgUYPjPjj8dSghAk2y9hFJvWubz1wjRrWqmnsumsmZPsTb9sVpZ",
  "key27": "3jWy7wsQQhGMvebUV77eNsnkqG86F3QN86NX1o74usvu34GHgcDQxF6tRtaiWTNdohxeTPudN7KMtJ24eqw9PDGB",
  "key28": "31gVmXgyqPSigaQaMhqkoB8PjU5jZGx2DNpwqGBDedrG1zWpLAKoAixSmWkZi4HEUWg3R6ihJphrxviZ8wURaMXU",
  "key29": "4BVueULHGEt9JH1RBWree2zv8QQvxUpP4gnLNd1APdYdjiY5W2HmVdof8ayNKFGV3sdhJxxZmaQU64yEd4qAzU2a",
  "key30": "y13p5bv2xWcXSgXanj14ELVZAnZG5YKXCvngKWDtBNQsqbLXVP9zd92M2V1qZh1wajKDj5SaHkRhcnf3Dq5NVQr",
  "key31": "28DCytzo9awRMQEfC9KvqgijJFQyL4BVthCABFVTqP66rykBzY25E3kqfytXbMp6XgqiTUUe3SZYbsNVZpgd6B4b",
  "key32": "2BG23P2ibisfBxxmG7oSGgxpdA2E7HiimGhRG6YgHKazs3cPJ1sNzwSmA2c4J8rgP564J8JkwL5t3pvUbqLCyjzt",
  "key33": "216zii3q6wxknzQK5JMVt1a33XJGsSX5wgNV6vUeG3NtjYvgw7iNhYE4wTeAsh9RcyQKgQKAzvF7ADFHNTWQSmzb",
  "key34": "TzKcKZyZ16VywHzMnkHFGQf2HwCugVamnop23oWJRt3WbeztGHmsg6B4MZPYiwbCg7JD98VuhJ86GC3HQtLrsRD",
  "key35": "4Y9bShhfaVEQaRdYoA71XzJNLZif4qAre5uPPFfC3xof6owrhPyprvQoQELohAL4Vw8zNay1Qod7cdgwyXWVAvDb",
  "key36": "3PQggB51heSm31uoxzHYvL7UHojCLYjVgsP86U7ZBQWpga8VnRVuAhvf67Shc3LVqMbdzmNaPAp1LpapSH2NtfRy",
  "key37": "2LL35WmJ83KFsLEY4s15UztZz4bCPh9TmmpFceSLxZd4J3BmhqCaDpzMsC3RAuMbryuFAnGvy7DtsoLJ6piFefR6",
  "key38": "x5U8Mq9GvLXiuixftsqF1Ja2nfS6FdqCRkuo24A2QspNiURYCxDR6HESYr7WXWs86ampbbJ9zrmfbnqmPE5eYaG",
  "key39": "5FLoPSjPPnDdnP6JmhK3s5NtStnyM4nwS2Ennmp74KtD9vqiTVJCcEggsroxGeHtLuLN62XnmYSzok1tJa4hYDCF",
  "key40": "3fxrs3Lv5JnS65Qkf3diUKfU5t2P2Y22sL5MW1T1R7479vYEGrdN2XGuk9oH1v2Y8m9mb7xA7GAfUPvMBfkRPx6h",
  "key41": "1M6AtwfQuodyLqBYQSNf43y6yWf5dyKXFVp5c1zL9QXoxXZ58dZojem9CBT3vTNhCeQ2PuXqFvPyAFYndBVEAZi",
  "key42": "CANQqat1yfo3U5Hr6gy6aN3Z83mvwY9jtgvfryzuJYTmsHMy7DGdiKPSTHz3R1kGHQuBWy5wdVZHNmMWG9xjJfs",
  "key43": "2LXjzCmR9uL7Pd3sXZmnJ26evGnwaoKNzzgKshVT9b64nqMEzyx8ocpBXUMX6SSQruSzz9wsLoMntLuexYaebQHP",
  "key44": "29g3ZrvCrD2wmKi2AkAjhe8VzQjZ9EbNSBtJF86Ayc2J7TPcyzB6hEpQBcEpq8GyZuHvuoEdVbRv4k5Mx6FgHFpd",
  "key45": "m9xgjtnKenJsmou1cLd6K3KpGbAEoWMY5h7Z3TaRYpMX2CKfsfWjdUcipz2aVtieqyJpsJqys3gN74NffTnhUAj",
  "key46": "5NvaBFyiPLLzPxWcfdxB81tKWn4bBU14XnGfqYfV8CCkurYrzzTen3QhU4juxXVi1NNpu4Upm47d9PcMMQdrdcgh",
  "key47": "4CDLUnG2y6QDVBKizWAu366qSUGi9ATDpLPoK2d9jwiZKYxevveBzDZyM8KGjuURBQwr4ACkdWCtiC2nyjQezbuX",
  "key48": "59bfLWQy1848PmXmS3wbfvaLK5gJeb4fs9rCS2mhvr8aDkuyxrwpX5yKJUC3B5KM3gRF8GmzPcmXH1gYqJ36egaz",
  "key49": "2rLQ2WzArw12um6brpDKCcRnMvPK88kw7nCqfPZyQ44ftjGTVxe66ghGyoDSHuRJjgTtt7CghKb37pVgpUBN7Khq"
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
