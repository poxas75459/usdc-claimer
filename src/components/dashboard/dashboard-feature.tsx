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
    "CyCy1id1uoM6yA8D2FLUkaoSBJngB6iqmZdTmThTMoMpZiCgcyJERACSVY1qeUVCp7S6t4BrXByi7YyEKy6m6m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NLX5PMQFsMNVLqyaHe6tfcJqa7dxCmhQ6HuXK7Gtj2YAiyjCD3WcFQCZGgMThJczsbooUSRBMzNkLCez8kFNKiv",
  "key1": "2dWTVJwPfZa97f85U71wCaxWGefLMBR221UMGRGNCnuxevSA9sgFmhMe7yZQs1ybz98ZR2ya3hqQKKGmowvJCXze",
  "key2": "5jAfEax3d6X4kD9ZJWfhgoxxa5vjfU8XtyVz152DGEpJBNCFggudJK1dgHqsXD2zw45xZ5XdycXkDQtUUG3Eqsrf",
  "key3": "hP8oqu5xGH8aKwdifHWUQvc2skAdWfKcCrF1mm7c78z4kUJdy61had6nPTtsZF3DBSo1Kxpi6mxsdpMYWCFug6t",
  "key4": "5wh5KuQ65nYMu5FReLSRBBhNvaStVTmLmr2p4Vzx9D9eD3mUFAaFcgW4PNgg4qFGBNvTUTBvSdjBCjQzGNKPkt5b",
  "key5": "4MjodmFDWnoEqrwJsU3JBSWMjj9xYBUdGhdPE5xirBajh6PrBbz81cqUZPmA9E5NvwzH8xoDENVmLPSnjocQZoyG",
  "key6": "z94p8VEnfEi2ao8WZqnAURdkfrnPhoPgHST6gADBwFaFCchSeccoPLXgPc2URPtm9AAn69qVoQEuzfuZj5oqdD1",
  "key7": "3TBnEECG3cJghJsRcD557niLvScqRnV6jTAJeEiydSwNnbUkZbKVEgSzUg9NqiQSydrXZTtttzsGGqdUJ7kf5LPZ",
  "key8": "4TsqmghPL5wuXLSGaUc9P5ChrRshgLiHmY9rwFScnNqcxpeqQggCunRX3e3DWeMrEyuBBDweb7cC3XzFctv7AipJ",
  "key9": "3FNZKqBHcSbZk4U6R9e3xWFgL5wo4sg9DNMn6JfkNe78amdeap1cEYAvDLfyuhBHaQZw8q8suacJCAXfBuQafWpr",
  "key10": "4jDhPKfXe59WvBHXdLedkM72d5qaAHU9CTfi2HYn5L7NhqAhFJh9vrtpWjd4wdLyTpX3RMKtgRGvjKDSriigvqkU",
  "key11": "3HBHDnX4VY7MxDhpgMd2bHi6v32aUvXWHfDYhKjyuzoNNAb1AXGBpeeKB499vHHGrwH3U8PRUy8DPFmg8kNM2tWy",
  "key12": "4Bc9WgBo8GjfEhNmhRNExvnw3MtgzadeM9NYVspTd3MyBHQtNqKRCf7enKEo4QE9LzWMSfsY3XbUDNZG7vfVVvPr",
  "key13": "grPd3XsUYAFVukw1ggpV6Tai5fPsp1VS58LoQNM623vpL7StrZoY1QSQ9awkT3PRcmou95g2BQoBxn7NFqtq657",
  "key14": "618LchctGeWv3GqyniLWBFihKUokMsWT1q3ZnVNCi9A4Zr2hAtRrVB1MB3aeJkASrP76fzS4zaoxiPyGeitpjXXj",
  "key15": "p3x556QgoumBByVjeezvzhqvHy5M23M1NwtZdVhoU6LGUoikTBuX3YEnZmBC5jofzLhN3AamPjPeTq2S88ts46q",
  "key16": "3zZ9tSx2VLRLZdsfSzHMEU5Qk2c5geqUfRNt7E1WZRcRLRLTLYtS6Thia7fT2PS5svrGKNhgQ2mR5Sk7ooeAZ1U4",
  "key17": "49i2JZJb7StuV3v9T6UAK7GstezYg7sNezQ6dxpYxYi4qvMzdxaqGjBUbgEy4vXdgsfJa4Sqye6sXQdBQjfjf3P6",
  "key18": "DRe2xmmfqhGYZ4pUbtt6MyTVA6gh1fPZL8Q7M4d198x79ayKPdqYbhksYUbPXxTFogKxYpBZqCcdzEhxGcjutwa",
  "key19": "HqLQaqhyEQRHUVaRkdQeXKrUQpPPC1vJ9vhLUtYqdKKtVrk7EoeKZM2eLDHxgKj6Fqef4LJ5zjjWSXnjDbtsb2b",
  "key20": "4BKvzHWvJm9cYDEaEjQyfDpFhsxFwAJp6PRM3ufGyhSG8AGYT8Zrcad2CDyCnjbtitH4MaiLxULP499Zyumt3ndh",
  "key21": "i4KRkamBDxsidZqVX6DRbtFxi5jbCC4PSMoLHyo1oVLKBGEsFcuSXjsdKQQ547yVu9nRk2xthMFhGPEjT2tyKis",
  "key22": "5yXQzbr7nrTbbWWMC4yvDNaALQv76MtgcSxjxtqnQJBm7mvy96xCNkWxC4U4ws1t2reDt1oBqKyc4m1vfZ27PuCn",
  "key23": "4MJRRzoDzSCdmZz8kPwFVrjwztNRNoDeHoPrXnm54tWPKTRYZXBvKRmgF7mLaXu8abxqv5EkJhkfTpNxuY1K6x68",
  "key24": "5LE1DdGmPk4NrHYJoJ6dWEFxtWBSfh65gy39sdEqZURcRVc7xiYQ1F8Cw2eyrw9ePkbr9e89iTaWJcn3Mxr9eBLA"
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
