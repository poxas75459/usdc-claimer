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
    "2uzqtFiLLpadjZgMKFfvurLs4hpjnftwfEsY6TD7Yf3GGWxPFdiuGHBmkvQNE6mXD24gjaWuXuMPFRgpxGnwcuBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPG81XyMgU4gN5gHnFoaic8jqp1QbnMprbhdQXFEc17AxZDDJ9QVQosjnfU4R2N3SQHHpCcFyyx6ELuPgLy6BYD",
  "key1": "41kJnZ8UDkvgvMkpjhu7Gfj2RCEYEx72acakCuK6wkptVbJb5zuHmukkfvpAzJPsuYyeUmYwRenDB3jtjJ8XH2HA",
  "key2": "qTtGrTFgm48nxdjTWiye91ogFBbz8jMGwiDRFVLtFFp87L1QPB55aKDpEnB5orN5w9fUugHAWrndUJN9XbhwEfe",
  "key3": "4WedmAKLtBQ6MQYSX71Ak6ThLyqEXoYRTSdWrKpgu8rBJv7BHaoPLGXnuqxsBSx8uBm6LM8CBp5CBdt3Jw16Y2mj",
  "key4": "3TsMAeaEjUWh29EfXp8R7Jk3a6zjLuvtMJdQMJAixGNkaUPUKFUUTP2BUGNPTUg7BJhPP1cKyuHpfWdPE1weDvzG",
  "key5": "5Wy5PbmVGWcWnxsRRe4ktNQWWcMUKCGhP6KmxaUq3n9HLRWsS6fkso4xvb3htR7npgMq68mfepKdDZw3h7msB2bn",
  "key6": "619SoLBkmDL2HMkgpZoQVKkukxyJQzgMqtGhtXcYRzKVWDgN9nqy8wBaq49UXQzYf9WdAWKzxia13LdTRqFeZWcT",
  "key7": "5jAhy9H9g8xB5Xo6sybLWqU5gBbL2rwWYbSLeXqC3xU4xtTPynXQs8WfhPFGgKRNApaYc3fsGwJznsS12oCM4rio",
  "key8": "4ktzavaA385UQGAFrKs6AJcdQ8yccZupAMN2yJN2DLiqKW7qgYAEaYBh1yUFCbfhCearFiErkF4nCaJoJyqcCr14",
  "key9": "4U7K8QMgRg25v9Ueojq3cx5bfrYFCHksyXgPTyDrM6CZLz1J66aY1ukJqbovpFyYNWR7y26fq7ZNVGTPufBTvNFn",
  "key10": "51c5FYw13NkKVz5aV53QpdPYxoiYFpr4FFtN7NHbKpJ7mUzmKDhoMUDc9vCBmFjeCZWJb3WUr2iQJ8RYKaierW7V",
  "key11": "5tNw9gV8VHpUCUHm7Sqp3GuKEyJ39FvCuAyzeXcjDErNN3PeJMVkkrvYnrYUUhWbRtq8FA9Z97iKHsSZ7mW6GFHN",
  "key12": "4pK5m3H1VgYsZGCpi2jnc4dxb9g95gVDnucmsvCkVLuZNUzovnnbfXiVKx5UFqSLEfAbR5vrFNE5qoQjFpvEoKNJ",
  "key13": "5EbSDnkDyBsUTiYjXKVGD8tGMVrnJWRxNvFEfZuy4w1BToYuZyoCYtpCJ4hLwb6X4iQHjFaq5gpiBLY8h68sqyKw",
  "key14": "4ggBv3eacD93suzry95E2eUPqgKKsn2jVUTsF3g76461dzTgrdY8m3m4YTW5JwGK53MRVQdaFpFBYAEqdCbATvYp",
  "key15": "3cmBE2My6kdsejgJ9pgtKTaEzWNQGyNAQQTW2myXZJpddvYNKZwBLqVTBG6yRZ4uZiiq81KJii8eHsC4EycHdnj1",
  "key16": "5S5U8dAkFmo8uQfpMW5ecCVsdXj8UCGoCPz8u18zys8auMX6LfRa4ePxXCngc4U6K7CbRkGcqtCapaM9tTHA3FAM",
  "key17": "2SGY4TSUmxeAHAudjjhvcT3AADjzEazMoSULn6eGvsdFegvS63ESxdVVdXMkPcdzcqyYtVVpgzcTP6V3dm2BEuWp",
  "key18": "41FwZSpPswu5A7V6Bw6tQLXH3LWuEWQbAxAtnoNRyvJJVTteZ13pSdRoei9PnEK2md279cUjvgM8FkUebfKppkCn",
  "key19": "4zXFy9v2ArDZJi5294DnyJCWyzAKEU2BtLg68WJdsDmAsbVPqiyVzvoHxR2htTn2fL13wXw5znMuagb6hB43scPf",
  "key20": "4DKYMtoSG67U1h5wqKxWd6icm2WdFYWSnWpqa8TDPg65krbJZL4kiCaTZxafieAMFSET2tAQx9phxDQpxWSytwsi",
  "key21": "3RzDY3b6dwPsQrSTHxKbNWk2xp5PFXEFDKFd52etUoqKhEdjijSzMKWyq8MfNW1VwT3dq4JEptpyrYSKjGwKz4Zp",
  "key22": "27ZqGeQHdpWcdtbN3TMTiQzJCXa8ohtuoeo43cmvNjQMm6gnLVvVV97eNyECXXmxsKSbkozBWLJyX2NtwKzNKgCQ",
  "key23": "21NwCAJ7sH8mWP62GqPeT7tsF9CrJY3hQEDC279eubFqGeCrSE7xX7tSjvy9pm9qqfT1h5NYjzd2sRXaJTa4qj1J",
  "key24": "4Xmv8nY1hpoWyEAoCdZ2TPZorHkDt9aUpf3iYcz4YJvMsVbVg45zCxeLmEir3ufwrXmL6sNKRWAPzZkt1q5Wns6J",
  "key25": "291n9SJEEnsYH9D3y62kh95jHMyEaFqZdsagoDSVvR5pE57cf8n5evfVH3zTZq6zPMcgBKzty7cYfzkM4Fp8R5Wk",
  "key26": "2vK21dN3bh2zETp6XEGxHaq8hWNXd5wBoPU2ea3huygeZUN3Aem3CqqGv2TsUWsYbqyrBgFDGfJgdnEJ9dFe3m3",
  "key27": "3yKJqhHzSd1kT3kme5zD2Bt72hHMcfq4oadespQq8CDJteeM6fbYeMJnPBcz45YoeYoDdfBK3KVPFZoi5c4H42wB",
  "key28": "3umzSFuJ2ZhA2ZRgrYHzN6E7BPcgY9QCz1CqyPwdBpRqgBXCC5sbqRGNscKEKMrfG6T4WmMQeWVQ7K4A6WYxTfGf",
  "key29": "5ys9U6AA5hdsyBuXrLR5VL6bpe4uDBoqySyRNxNGrPvV92EC3LAgYGEKUmh6f5kAYy6HCaShcdAxKBHwBX7ZmQn5",
  "key30": "4CLJstDxGrBBKd7oEV24o19MZg6D9Hs1n1WtvajifvhPxkHLbaL2Ktz93S3BptUWfQvc9tW8WzcpmpeJqKuxUuiT"
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
