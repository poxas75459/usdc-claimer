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
    "n7ZzSDGP6yc9N38oyWhAdVuStyx4vek39rhQ4Dzr7K9a65YVHhrZ63iJXxjd9eBv93wTmbHgRNRKqYsHyxuhf76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQ2ZQe9MUmQCoMJf7x1JUotF1PHv65Avn2964JEfYxFpnenj6mibkyDmBVViJiF6qRjZvLP2xBUKsSLcXDRJSNd",
  "key1": "2tDiXTTcDjMUqEHMm8YGsUpw8Y58NEecYJwT7U4ZrkPxgS85guG5SpMN3KhKA2MZGafU3JmyMcZLsoq28Lvf4qAB",
  "key2": "2Q11i8nEpuziHooHrPE9yB1xKDRA1deFtcFm8B8JLxuz5m68xsXkuKprBtkZYJUhKqfFa6LFr1xAZ35KNTFqAoaK",
  "key3": "4CCf7p7vt6su44cRnNgHhmn6PsxcXCnkgY19HxS5tVuQ8GwNxnQGCASrfTBZJbjujj163MHCq3xDmnce4hE1zzbx",
  "key4": "4q72Qcftpwf63sFLmU54bhk5kokEvYNTY3KHZsqvBuTGWh59y4DU785zZ4nPMT6yhPNQKHcE797SH1QdgH5HZBSe",
  "key5": "KnBLRijuuX6u6q7QgednNax2YbBjo97yAZ1AWtSLYYq8rwUHZwRWLHZZrbZdP1Ve3KCif2zE9QUQefz1CmnwKXs",
  "key6": "3v2vWqJS5DbPXjAmCDrhJg67zWfDpomBbrM38VBb114LH2AKytGmodHj1RfhLQh7crFrP21f2raNfcSADxsWfyQt",
  "key7": "4MVBPMwVEkQEth8Sbnfdk62QMZRLhyBDS4efUsyF9WJXxsMDqMGao2tduUxxjTSfDPrUPSbZYvvXLZYof5dVfANS",
  "key8": "2Z4TCMUBipZbcfM921ibAXhTC4EH7A2CNKywDkZECizMnGwq6Hwhbr2HF6KfjwYwFQeFiQHYhYeuiE8ALQd5AfBX",
  "key9": "4LWnCgjkgtT2cqfVRMbrboAc5o9QSMq9RQ8X1Pt6HGuccyerEGd9d4mRQFWNHjCU9xeiBKH9aDmiJPhU8WP26yGT",
  "key10": "4zh1RyGRk6XM8KSTWYiQbZGYuS56qLhGAJFxu8LbNqznojqNhe7nFJBCdbxVBzeNUX3f7N5CVi4KQYgEfDVqn1Vk",
  "key11": "3SA8VwJ7mP3CunEWJrv5wKerfQgtQBgDmaFw1u8cqYMCsvdtdW4Gk56nfG5VvUutNNC42FpzkAqg2w8XRK92NMx5",
  "key12": "5jGcC3awef7ie9kT4jNeXZxCHCCTN2tNy9EGcQzNY3xzyEJsZsJeexqRzMjcuvYPi7YYEQJECCzwDZFKAunLEYgu",
  "key13": "3RxNK49391QvZgBk3GJHHf1x6VWUz1fmcv1om13bPc38Ay9kwJwvv9wTLtViHgmrnMA1RwjwHdLd2tzg1hC3MsYx",
  "key14": "5nQABvwMaJW2tjvnBidfrd6uifZE5dAF6xDpsJNjhfbbvhywpuRh22KQiqwJ8wvvVJKCd7gYu245SRmiPZKN5mbs",
  "key15": "48Y2GDqNByaTghHijxmGQyKL9cScBYCG7fYguYFuVXRHvigzX3un59wqSFqEqSaAdyZTphZAQFhgtMYizjTYXmb7",
  "key16": "3EJXoUvTrrwKDnCBhZiKC5KQRcY8qiVFMkyMd39hbV8awT2PWCsG4fzoZvrnJKEW1hfY7KivZVxYu5GHpZgXDT68",
  "key17": "2Dqe6JkdE4v4nndkV9sbP8yiQcj2qyepd47hpZJGQ7wQTjF8RRHemG3PxsAigqD86AbUEzvqY93A65b73gmy9DqR",
  "key18": "3d9LUeFY2CP8iu6x7AXNt2s1PVCVLz2H7SCDFnfJL23tcDk9mwGKkUyYK9Sv4nSRacZJDSud14FsbxmbFZpEM9FT",
  "key19": "554VkhXgUtqkFiAtRazAy5M7bzJuUtZrrXTzmQzF3JjG62a1rA2SZU2Atue78KH92YhpBZExhWNYZyg3XQWuWcLo",
  "key20": "2rcdEfRHkvUE48jBs1GAP1Z49ZLUzXXKMbqa6KqJzDJ75X1gQsUiLhgpygLKQnNM7B1WauxThV1iGuBy1XjsB1Cq",
  "key21": "358P9N4NmEcqsVh4bLoyTPPrwRu1Vt5f5yEfwpjrbNVZi9vh2aWfmKNdghS96veckmR5YsebkUAf4dxZWg2Fzqns",
  "key22": "2VieDtxMNT1xuEDcb7daVMRuGDitHTZdtHH36oHLG9qaWHpLAV5ANLLVLsCXBthxLuHFffkALKD9ryyUWYxMaaN3",
  "key23": "4dDXvRpUMqKgddjRBwX9wrGH31KBd1Re5kUWtXK2qSatp11Jj4gPNf6GDnHBi9C1dXMerQzE7zp3jyqFqtmxN9RJ",
  "key24": "o685jan93LKhx8Z6E3ZGxMoDqndkiStH7sX9jC4S3egoSopfhCkuuCm2KABA8KgBrQ1nFVwgnhN2zhqc4wwrrRQ",
  "key25": "4SDYpu6wGz8pvjndoS4sHxdeowZ3iK87t6nXtGJkSaYFb5BjD2egaw9UpUJZLAyPFAFz11cUVm4nHrafDmE5DmiQ",
  "key26": "4QHiddRy8WBBNjHkLYxSn1UnHD5JzrKUspb9h9KwNZtF8WuDToVQcTakd9GL3v12GHTMG7LLjKwMeQJXd34AqPhu",
  "key27": "47PPyVQ1GZsbs4taBvcLezHi1mbsNpgjAs4FkdiNNYH3cvbWGPAHFBZNx9Yq46ekWsB2MNBZ7PjMLXo6nGPeU9in",
  "key28": "47x2hY55Nvav6AjzW24j9fo44skDmvh3g1FXCsSR6njBwr8BiTFbqoJEq33ENyTNLFwyGWMQgBbAaJdzRswfHpY5",
  "key29": "TKDZ5rYEusC5g5uWjzyp4QJLeTwCsCXR5q13tVvYgaVQyuDAstpxhzgMsFZxRQyHz5TgRgDeYG7Bvm64vJMBgHq",
  "key30": "5mLxRrjfEZTZDrFx1sTrHPJDCTfLhBvaBazsTdvigMouf8VgPTmKRgXRAkgEsHcF5JMZ2rH2CzsQ8JLYooHWRbrJ",
  "key31": "efb1upa6FG7C4aQmZ2pcVMmMFx1xZuDGgU1KkBhCkSkHfsBxwm1y2ZE7F9MGSBSVJWH3KfXbDN1pcmUXV9F85ui",
  "key32": "552NPBbA66kPK1iofPBdPTbxadeEfs4iQcqeGfyBnFa6qqD7McnWEo6FJQwZuvmxF5WLPSkzekC42oAjA8q3n1Rc",
  "key33": "4p2GRrLD8qi1TD9gpdRKXZ8s2Mr6JKL8fktrNns4tyYjGKGgykkSKgzurvLw6UVMvNmCYmbZnDKik8UjZAarPL29",
  "key34": "45oaYZGJPdCmFUsnMZZ3ErzR4jtjJP1VMUTzCRrVPwpNA1H1ErjoNSuE4FF7AUW8jua5W2TiKZrDL9TVQAzuR2WC",
  "key35": "Zw7gwigDZwNjHXQq9FaPNYxV9BM3iRAXSuzBFJeMsfRgyqVQ4vk8kUc28SxNTXwSqBmoos7HKV8kzMh53c8zyT4",
  "key36": "25R1BJbKsKPCYBG5PKxXmWzfTgenCJ15hVNKF67aMKJn6FV8PymvYfjF6xP79375aNqgooXQdH9WskC33B5wcVYK",
  "key37": "2zJsCUSQxEuoTjRyZrHCDcwU19J4ZmUQunSBiUvjSRmJz9nwqmxteg3XNVBQDXKHAnsK25ZcfBqwR9TkTgJPkJUp",
  "key38": "4HyBZxQa5gUHa26XwVmAaNf3vM849p8SwzTopRrGVPdrLso4gGgV8P2uJFALZx6LU9feaATj2jo2yXEttyJ6cLqx"
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
