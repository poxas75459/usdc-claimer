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
    "39FkyLvFFUaweonNKTwPd41i61aw6Jk9dVje6vx2uhBFD9kVhwha58r97uLN6WFjBbjzETooNzEeCyKVYJzMBL1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hrc4rPeMotsY8fjqA754z6wswB5rSzTq84PxhGe76SnNjcYane9zcvAXqe8nkRrvxv7RXXwnuorKMfA5ngJnhMC",
  "key1": "5hDa1oSU2yDTgYMfJoep7MQBWc11iMgnLvSDaSxNzUuNEbX8eKKtEWTAyDyZbCogCedARXmoe5Ya91MfzLFJrAM6",
  "key2": "3uvpkNHRGod86yqVRD1U6pVRfPspTzz3t2QBgCHEVBNprQXTM7C82td8i5Lq79w8xTee7ZofGcHTe3czqyHQsytW",
  "key3": "2AofGUk438oNiccN4HXGUhcUCq6FgrFxKLRy9qgGTeNrGxnMu9ZNNnnKBHruBGuudU2MfTHuDHy4PWitrGG3xh2K",
  "key4": "1CoQFBZwQp9ooEJnyXwXXB734kXcDtbmRZZDsmXzzbFxwwwGnRqvmq5VWFzJgfNThYQCrh7NfGNxiJA6QhHwTua",
  "key5": "2DJv5WeJsHJ5dyWbtBtw5TsYT7irHDz9pKgipph6RNMH183EDVWDMkigztq2juDqWP61YMRLmmTUVavzpoL19oVG",
  "key6": "2pUtgTLazQ7nqabemJ7Z48ANdMZxAAQmoudPuZAVqnoUZEWJ1Fotj1anqH56z65xyB1Q9Vk6J5xisPGKrvQhuvRo",
  "key7": "4i17Sh2njY3dMyPymUrDgti8hQxZgUQNTiFiaLGKHJVKECaNj5EwTyZnFj6Zrp7PxL3AYs6rZtycY78gi9Wb9PH2",
  "key8": "4dCc3FNNtoa8BGZgKCq3QrVVKotzLtNnz3n7nHjn2dHCZj7jZQ5RYXgFHm4BKraLHvRj6m8suuFTksqkXACpFYCH",
  "key9": "EhqknGthaLEYs7btwXeu6UfLu3m85s49Seh1gCGGfzgJeSCcSzspVVFJCDPx6Yj5bTNGrgnD1uHwbKkSgG3cYk3",
  "key10": "2EW8i3hR3cVKz7CgsY8fzTriGcd9CsRx4JykwFKxLwbDzmnDwpMWfhFvxgJTz2Xdfkw8KdxG32tHDsy1qih4CjYm",
  "key11": "2wojD7v3Wx4PfwNA8MZ1jwnKyZNQxo68MUYtdB3SqY2aqCjVnPwytFn5pihh3SKGmqmt5TUQGMfqJwjRrfYtouiw",
  "key12": "5vB72aZUN92Ld7JmhqjtKx2antpJPfzAfYphkesHCJ7oUNcJggNDkaNSxM9yidn2ERLFGbgJf97eg8CNgWZBMzy1",
  "key13": "wPw1eTs8NZYzLt9GR7tS4axnRw2zFy7oTeAgn2jh5vZkYWEZEBrgy4d91yfwSrqLgupxJ9vkAa2ckr1ktPve62C",
  "key14": "4hAbNEXCnatRbyQwPcsYsgpzRWLpgptXXH2wpfKaA8r6yjpQySr942xKAm4TFhcWdBFvVWUAAXxQh2Qd4fAiQxuJ",
  "key15": "62bjn5313ju4ynXMNEyE3ppqcANRSTCzpnoDrypPRT5rfMX5sryF5oPPfkQhMXAjZgZ4zfTMJx6QLXF3VsM4Lk3t",
  "key16": "2y29W6L88J6fK6hyE2isNoctNt4R7ubrmvBFPjPcdF36RBmwEyixg6f6f8jiEsbTBktxGzUxNHquedbseujgbboc",
  "key17": "2Pvk4RsN79CkYG22oNetrtvMc4tpBN4uJP4qv5tDGCnzYL7EJTJQqUEpAKSaynxjMkyv1skrrYiCfar56vHu8WAJ",
  "key18": "2Aa2HQPcSYE357Nmrh8XesPX4bi8RspQ5q1iXFiK4bF9Wd6WkKYGSspgnJJTjJWkys5KtsiFzQ9AGxWko2FZi4rY",
  "key19": "5YhDyGXWfp3UunY2ttrbJm1VXqX8wLq48tVKhVt21ep3EHtrcnhA64c7tA9zYXY5brKdVVoiuPVVFDfiVYP1gGbf",
  "key20": "Qgv3DRAPFQ76aav6Q4zvNYVaiGBPqwNW8mbSGnRg1Pxd4Waba79VtKGcB2cVo7QjazSmFxrcdfX5YCySQC3EfF8",
  "key21": "44Sd91W8U1J8hoeZjq6NQ7ZJ9XJTHN4RWpboP2Nfz1LZF7tkBRoA4bjHSZDhZEDskNv5td3k5N6uybxwtgEp66ZC",
  "key22": "FbUE8RSUKMJx6Adp5BdpmVQNxBBECVUy8nkbnzckYwUmd7bLNu7uiLeA8aQgp6TjrgjXahJk8JYme7Xr6ZnRxBN",
  "key23": "g2fXxbpjiCrAiK1w7f5GPus9U9A5yzZGM6J5aeowaDXAEgcJmE6C74qCEuhgwLFimJ6Ka5XnEhEpBRQdVHKwAWd",
  "key24": "4m54h11UWSzEN4B3p2moV3D98yBdHys2LCoMMmHenatsiPKLzPSp6kuJ9JPK1jXoYuz8FUuapijvVXmb8q1BnvUo",
  "key25": "4E8xV4o9JZ1PNsQkHnZNkgsFN7ttaUmf4KHhbPrG3zJKDRMCU791jbrBCQzhpSBQYdAP2ywmM73vup9LnMLwMZmE",
  "key26": "5yC2rAquqtHbN6BK7DzFKA4KC1eV6zcCxk3LcAiYCCCXM22sbeVYMDWkJUaEWdwto2egR4jMrVdmpw7GfSo3ak4B",
  "key27": "5omqV3VtvK9sLFCRSde9pCtpRfRPzQc1Mw7r4RAyNmy3ERDY56u1ysSF6qgKaDd3jBf2VkJ7zNV9zKQ7Bcyvwiks",
  "key28": "2YWSKujkuKejE9aaCRRyLhaQFZF8AnFaehiKNsZVJHAThqB9wRHbMvj3Zwp9kutRUH1SoNBcuDrkVS4HDjwYcVdz",
  "key29": "3JJW1LnN6oz6UzTSNeVVDhV8HPxfgbrfJwzsq9meA2Ber6uDVTZ3LZGG1pQnpLWP8hnHHstXNovsPGS7EBg1a5my",
  "key30": "3SsgcLEXGXS9F7ppBVLCMF95G1Xio3nSnWRwCCsZ48TjivsxaZSyfGBjcouG255ofms16xY4KAkmUfh9b3rxZHP",
  "key31": "V9B41CeNdYw4FeFVV6jZPfMTeQXEH6rbtn7MkHrkbJyMf6GTy1UgrNuN3z8395hXjU3pKG1BFPvD4VKK1EPhagS"
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
