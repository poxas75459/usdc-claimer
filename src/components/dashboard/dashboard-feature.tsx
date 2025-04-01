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
    "3LqTjudEcj6iL9UAuncgPjemLzPWCNMtfAx8x5pudwMRUcEWvyaCNm4aXk4GCWqD4dubeUpudQXXD2BCWq3gG2hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yb1HZbW1Kcm36ofHsMLhsLHy98ksevFKk9trUAj5XLDSaaoU6kCkKFENPHodDtiYcf2aLXSGcLn6UMxAW2oyefK",
  "key1": "CdamNHXfvrWH3LqNSfF7gYpVxm9xoVvw1Nyk9zpQ4cbcyrXM2BijB866yqJk2pV7VzUB6niyAwJdNgkXTRP1Dgh",
  "key2": "QaU3HJthTbG2STyL2EJo3rxtGrUUMTpcnRNBQyQhZSYCJLrs5j6pbKVt5nRQ5xPxVkV7zfv6Qz6fpWyw5Z9gKUH",
  "key3": "gtqRGruXfRxHH6YgXpLvVrUTR1U3SAHGehPSvdQh6zYeu3rh5UErAt6HYkxw82eFi5NPa1w2ZP5bqAFqHJugxTj",
  "key4": "kSwJGmKMg7t3qxQNWyaQL6T7L2uJMrqfrmS9LCCD9zAuF1nRNxz9Xd7RVMcW88C3SkVnKcsS9b8DeEERZjGERzr",
  "key5": "3p9qvbprYjg78LxTfMk2LHqLzxppokgns7KeHMuf5V5JXvaBEw7TvMTvDpaCDq44iUMma7xE7weiS8CMm5xxxLp8",
  "key6": "35xXESoY2WLn3oYnpi4zcxTe45XWxyqsBC1MDXyhHAN7fDeUaACqRWUzvSk6fdL7G4Zi535kwVoDUBxtorPBCAbd",
  "key7": "4FBaNE5eQGH9yccnZ7GcUnB7PnZuCLejdgS2eaDKK81PW4gJtafGXMA45F9uWZdAAzDfYHJcaWkRiSXhhMCm9SBA",
  "key8": "2kFrMajwxyzMmYadM4hBEcwtHxgZUKK9GTRvSFXTgCVwjfcEEy3BQoVeSVdMdPuiPo7D58NtakjrUGLpdUM8dNJy",
  "key9": "QGGo65TapZnnALbmbqyK1YhwjfFhQnByY3bpVQSVbPu9yD5sjnuLTyD5gEJXjfRQTBgVAhpEc6mFckhM7fSGZA3",
  "key10": "34TXuAu5ePGVjHRZjgnkicSvbL3eKgk8B61KMTEDx5Cp42UH6y8MCfmUoP9SjqnzQo4wATRyfxGt2b2eZ6SdQdVn",
  "key11": "2AKNzVDST4PuxofwBxeAch3TXcCNMvH9YcQ7m8mtiLLGfPjiMmEz7sizjM3NXijD7B8EdZuLggxFKSfm5KpkU4n1",
  "key12": "368fAZ9vm5oMBvBNeoGAqnhDpNJVUxEt8wMF8M6dQEkwwUjHR7zY4B9R7xhg5zyLvCXYawcs7qZKBw9DUMgaKwxu",
  "key13": "4gXwrss11nvQrzNH5XNXRuqn7WVDVo6gXNZaAnpgoTeQbxDg13Cqbn32rWuNynifxaBe9YpM7jtQWjfrKwkugrtG",
  "key14": "5osYxTKZzkjREEwA9jyuVCA2NTEA9qZVGaapDTSyt6h6ePVBjvKUEzkVemFYYWfT9FadteKwaiyxK6oP1SikkhRU",
  "key15": "2Vipgah8qQnC2Kc7SMF8K18CjC7kkD1YLYQ256cqcu9z4DcVUUwnNZS826e9gbW2AmD2taZtwvYj8CL2LR9haDtD",
  "key16": "x6Tc8kHKWQzEdpRkjcxZ6xwnyxt6GsSGVuYEEQcjgPg7ZmJatvzKy222VGnwZdGg7wj514obNSZLzQjWgA3KCP8",
  "key17": "3Tfb2D9huCqA7cmx4NR1qofpbLcKYBdwn2YTDkaWbJEr9UosA1mVLPzURHTQX9vAToZZmwV1MowQPSvzS2f8EGiX",
  "key18": "3jykMfmBT7vRaVk21dcMmZXdWLdeMAnTeNfZzWUeuJcW6K1B2LBTeKcU2dXByHUQwZ3BGBRVEas2YEGCCzaiuMii",
  "key19": "23Xq3aeJtXHMe6fFWuygfF6q14HBNwvizwQmY9ACPBjunLzSUEMVZsSm9eydiGhNeRXL9y5pZ2THUUTt6RYYAA6Y",
  "key20": "6CPH9J41Vg332oL2Zyd71j6ue131yUUf5EHq4hWMToiHAEvQmrQzEgK1arzPBqzkgQNRF9FGa961Yy51UNQojp1",
  "key21": "5cpr4nsB1MDgxgeZwY78XToH2ADCi8FLn4R5FZeZr6bM9R8hHEA22y6XQ1tMDrfXh1ts36Qx3jpGtBiJXztMrZ8n",
  "key22": "5vn1AQ5q7NmkQhvDmA57XdEBGRqDWgbU91hbdpf4Jh3MwG893SMcZzumkWQwmtrrdwTwdQXYgbVuqFyqBtpDqHnu",
  "key23": "8yRKiDkRF2sBBTLXzn7Kbk1cXvL3pmyFLFWKXwC49fqeHEddmr5S28pqY5RpLCJUVBsmBNswujrDxRdqUWdduBX",
  "key24": "QGs7A3q4u6gL1SQMyMYPErCq3HfmJQwcnF2HNk9tJ9L4zqBhtDWVVJRPf9g62wej8R4vUWR6tTmXYZihxxRBomy"
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
