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
    "5MqYpQ7DSwXWYaZYVewVQiQ1BxQrAATfToD2N99V3DQDU7rfm3UYmqcdZsMrVVd2mufj6fpV91switSsDd46c9RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sG5JvP2g8ZvUYijrhBSMn6i4fNpRAzyKSjMosx4qmshojXFgEX83hHjMaZAZM4S3AN62ZAsnrVpHJaKmBncbHzE",
  "key1": "4bDzHTFzcZiRaiZ5acmZHiKLD34UW1LedEBVXLfaow1fNxkq1XxBrxs2Yxw6PUenJ9PVuRPPFSAVxRZWQKGWX9hY",
  "key2": "5UpF9yg1bEfvqE4RZBgsgu1LCWCHfkXV1LMm6EikCLkCbQ7febAsKgqgnyT8X8sq5MWvLyfgYdHD5d1oxXbr2Frs",
  "key3": "4PDsMVyystUEz54UUU6eXhSFSVFv5rVicnnv2aAyWLzzVSsk8wjh3z4qh5CC36dGZ4WK1jNkRinaKVBAwzncUXPt",
  "key4": "3dtwhp9zgwvS2f86QRo7cgfmAvN85bn4Z617MmPZnQm5fipj5tK23g1qSvnJMCxNNKNgMCd4nsqCbRzSm1amqoJZ",
  "key5": "4fKEZvNSXbqG3KtcDHonPLHzzkpMcNL56ZK1xe5zyrRCoUi8udzoNvEkYkGpJyPSXJpPmk1pHFBmWdnSBAJMKN8N",
  "key6": "5ghbGu3LfjK3kWhA44BysApsXvRNyKyF9JYJm3S2RLg4fkTnkddmF72AN9vBR7CCsEn2kvuehiwcoRxwQ7p82fTz",
  "key7": "qQ9hjrHsNPiR4v9EKwB372Mxa7faBQAhpwYKrLDNsxP8nkZuPS5gxxYzaAtF76m48i8uD8x4py7oZk9y69A7ffB",
  "key8": "d6hSG87yqTyabBqvkkmfCzKpV4wbogaJj8B6GhKdQ2R6dNF5CRBpKC4eJa7WZr9WW6WfBdi14dLH78SULtvcJ13",
  "key9": "2rnBBjneCN7cLuVQpzCwdiR8E6wviq1q4ddPbBwWAyzdkg58VgyP2JNHEGP3BEbPLenHJoNicvTDw2cftZcMQv1S",
  "key10": "2GS1mzXNqPTEFbDpRyzk2ykjoJVe6RKo9D7kP5p33nZHgr8riSZayQe42AtGUba5dANHvEXH5TcapM3EF1YfTpb6",
  "key11": "2mUjxwwWgmAotSGjLut6bwwceCvn9ehyc3QCc6ci8RZtcoV9UE8b9UXyFhJ6yzfY5mSdNLCezVTuzy2QcD3myj3x",
  "key12": "4mYeKvc1e8EaeVXxrUm1CUzkBv1CBVbVq62LMn5KVFawtKZtXRvsp3q9LL4tf6PRYiJVU3c5gE6CC92Fmzk1vpgR",
  "key13": "5Q4NXCaSiFY6cS8sP1UyvyFaqjMhUr2UiR1x7pSRmWxuwV3FgzGyGbspJf4a35Hva71JSm5FwPDuCyQvXFqNFMek",
  "key14": "4ZomsUxzQ1aN6oPUVzNwZc7B16wysaTKUiDDG9NarujfSWacs4Lxpw7XFSHDVVgU9i2pTYw8Siri2mGdBU9xD19p",
  "key15": "2Wgm9tqWcdCVsqcRhZcyX6eBdFGDuQQqQULWZzTD381R1n2CuYrjko7VkLg1neSTHhFqGpoVS3o2tR4a5S1UzCgn",
  "key16": "235uDPicLwrRAnrCxJVzMeMHcspUhxkv8fmMLahUW36Vh5hk2mw4CAq7wwNDuwuEDARDMyfwa3nme2oErTHggiuh",
  "key17": "4rFfhuFoNL5xYXWRqAPhSCGjELXqA7oBEsvfeUQVMKe7QhFbSHGYGSj4NHjyAmkbBdKzzoCuGopkiFxQrZU5SkFw",
  "key18": "8TaivKWQBujXCBdss7fsgFcKdAskQ1cMph7Kqw2MdX66oeiACazhqJGLmVpjC9yQRRdwN6dSM1gg3h55Gzp89vq",
  "key19": "4n8nb2KGMhvXRH4WESe7ywTRMwzxXQHmyjb6tU14TzaWPvAHbrF4kg6RmjQdNU87tih1gSFEeRvSRQikiL76k7K3",
  "key20": "23U2GrB8sYBRPnbuTkaqGiPJ53SQYcMHesYCe3GxxFfCU5A9Mddvx6DdxjfELJGGR4sgGcHZKoTf6Tqe5k4ENck4",
  "key21": "5zZDJvkJXJrox2T4iQ59FZkcKjpxVBPRgwK8E5qnmNqurBt8UMtqvTx71XxjBuWc9ShNUdq82p2EprhrSTu2YBLo",
  "key22": "5JryHN357zhCYbaHx4M8KATpunCKSz2zeELz4gXaxpDjCBcQ3RdnrBGj88QmH73Lac4YEWQgi1i6C3yfK9pTuWBN",
  "key23": "4tJukQCvZxXXtcKX2xNYKcraFraPAogKnA2WqjLEdv6L2uP6yv22LC4TruwKGQ1VNfbUir8Hp7R5oxfMzpsSq3Dq",
  "key24": "4Apzwcibm3ryT2gkXcwcy8BPETgD8JSd6Kyb7GNm1TuNy4xMhdS4kbvzY89uJEPiwx1KpS7i7REpUYhgTvyY3ACD",
  "key25": "4ryFm6QF9sNVaEvPdsCaevjEVYrnYEhmw7a2Cogb9ZXGN4HoYMH1J22CYs9mVSrY8f5LUkVKyEK3hBePAZfWwGb1",
  "key26": "37JaNcEmGSxXdiZXWWQBbBGL2QfwBDQDMWGJZnJMSFkNBb2rPCaaHuqXQsG3zDW1FUddB8jRV39BgZtqnn8acdwu",
  "key27": "4U52WyrdnyHVWQB9P26yzsioGuseHuWKESX9QEQ1S3WSndag73NDurGQcNYXgr5hug5Y1kD7QDHNKfcygW8VY66v",
  "key28": "Fu3rdSe5vfk47zgjGznL1RNLQ3S3hTZ5pGPFp7WEDZJA92tcevRgCNMzqURDXG6ug9omfPYPdtFvtrwfzsHmTmp",
  "key29": "5KaVABkmNh4B1NPktwKcuha6XLsZdT4236rmMQBQhwuUSoHWhLbUhQCGdKv2k7VuSgG6j1StenbjMQFAchtcxLAj",
  "key30": "2H78hZQRf81AEAzeF2YK7brzYtYfdJ2aRNLTRJPsS7g7gGXtxGtjKfTht39AHkMHTn2MuaUjtFoGh7CULmhtFoW9"
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
