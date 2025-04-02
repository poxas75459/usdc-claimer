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
    "4H4ErcwTU8SrXpkMvNWJCqYoPMVv2bwJBhgWYA8c7VQobS3PkwbmzwcZn4aQHYL2sBk8RNhK1qPsTetCFrnJDcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaGq5bC6J9xceLKjNQJRKV7SKTtZPoVLmhkmsbuunAKDD8vcAZBGEXVtrdzRhnSSnoNTUhFmH9DnQtqQmvWGVQg",
  "key1": "4MdCUuw1aGN1tEZ4H9DbwzbNoAduXb2GtLZmFmZAX4PyfrTEgLN7nd4mg7CeF9f59n21ntFXXvEgtz5aa36t5G8f",
  "key2": "3uZkttzENqfUtQt4FicPcsN6NLQ1aYKn1XUoKCwmdzDP5RZLsj51n59HXfznYGGg5bxWS86A1nJokdZ9czdEw4vX",
  "key3": "5MV28QkVRxCbKq6DQVJvndTbeGFpH7wMRjKRTrMA59wAXPHa1emVa4UgEwQtcgkCYdTaR2Y8B8v5Wp74uEUM4LGe",
  "key4": "hLgXaSNaJPRviZQUvJXSD5g6LGsAmC6TuHRkwK3jb6ZrPR1AsTvnzqS3HGwEt9Fivb5itNB4e4kjDrEYdTAVjsg",
  "key5": "4u9sct67FWS6GNY7XNdk5iJ6UQU2PftYjpqhxy2mcqVoQFF2yiCE76PpuE2zegraLASTbrfGUQ1UZLQ4CeuXYZbM",
  "key6": "3ZBm4u4A4Gtcs796oExnLA4iPRfGNgDyqmzkEmxBR77UEUmPC4NpdKhdKCfyYUpYfYwf8ftWc4WdgkHXfLvACJAL",
  "key7": "35VR7giCwZERPpcbecurBb4uiagPhDRGwhWxGVhD51RvQJQjV3GZg5XFrNjP4K9941u5FFn8qqE2v7DdU8wE9Ckr",
  "key8": "2e1nSnuoPQQqNZAUWhPnJFA1rXRfEq2vqdMyek5io8xtq88EurpLHFbqJ5bVW8MNFh1o1NMfYZDs5HHDtEe3HH1L",
  "key9": "5rJ3JuFvDgBtbCS2hDxT9ooCDPvZuLx4YuiJEunshpPUucbx55j7yLGaEqs6rNyeZso8jafhvx2jP5Z9aNuS3L1K",
  "key10": "25BEhQuhXnJ85mWkx8nc6HLjEHDXrBEqct3v6122XsRCVjwkaaydrbkYqKuHaoBf4Bw5AHXXbg2qWtSSYz4tBLED",
  "key11": "316EmWjCmWsLHdQJ7Ay7gRHjgnWyJVwnR8Rb3yc3sWh6VKjDDzGV3QtCnk9wbYQwFYktToWqMSrV8FqCDcEtx11J",
  "key12": "4VmHQyVC9LXGg3ZtVzm4bJaymazsbEPrdW1wqzkYZNzERpBQstKvrji4ZCTqn6D2ZtxyzcmkqBCBYKj5erBgL4kv",
  "key13": "4oyyekPrLuBC9an1sYo4fLud6MxApHxoB3gtsRxZp6HVC9JazAcbtqPXY8cd8jYPcRNqjK9wXcDjuw4XEQoVubNi",
  "key14": "5pzRJW2dpayRVXYrpa6fqPMKwsuEMzE89Lwmvwbn4cZXV5dNogS5C1cvyTCXbaTCXEmEwfXLfNj5AzAxZNhjdi3P",
  "key15": "2YugTvJDY6HnwEVhR6YuQ2AJ4BnUTEVyruutNknD5fVqxy3w6GhSQoVdQGfQgH15H5E6qjf1B1SZqHYBeQ9d6vZT",
  "key16": "2QGwA6T136yca1WZCX418EcXEX1msqqaLKcJZ7FNA9YAqB1m1Bad4zEDpmvDsQUEnMinC5zAwipr7iHHzQqS84D1",
  "key17": "5TEpazH2phsvDLQ4krgYpEbSUEDEHwPWnu4V6B5Ly5JE1k6sBqyKKtfcT9bNRMxieho2Q7XRg6ADYZCrjqF4p8xA",
  "key18": "3jZepb1bXHTekXrJNtTBZu6xET9eDkhajh53dwvt5FJUjFr11sCvQCZWD174XqbAHPSQhodTgVv9rJbgmxmVwigf",
  "key19": "KJubq15TQwNVPpmFtqEB1w1kFruY4aBpvBfikWkDqQjv6ecB3ycdEdpShzhDYabzfb774B26FwALNUoq8bgzaxG",
  "key20": "2GE3MJC8ZTZxwrueekmEd6mVKE3xAVE4kiUD6aKWRiwyZKPqCKnQzB1fGvtVnhk9Syzj5bfwiqcdQVwSqUgqptWh",
  "key21": "pYSpFD9w9P76emSG8sp9D7ptkEJrA3R31jQqwyqZ4p7Vkp9QeWdrLXbUgSwrj8V9CigW9obGiH2KxyZVsV2RCHk",
  "key22": "29hYXxvhvDSXVDWXdAvuRVvJbGSAWeSqKuVML3TMYPdGQPcaTK37TFeUSGZAGqjZktWjphxAtMWVs9SC2YCe7pQ3",
  "key23": "2PKyrffcihrotAAka1wyutLj6FMbEKHobuSRjoLYfKEtYfZKVz1A3A2sgrQFhjXWaCrumqzXddp6MdnpfXdDokDN",
  "key24": "3BXmMzgeBM1p6wwDpKiRWBTUfVQdD3ehTyHGo7E5Etk8BXw3HCvR15kZc5mRi2J1E2xjxey6ZirFthzhcUrDEyNQ",
  "key25": "3hP1sYDDUZrcUPKuNdXR6cpFyzaY4JrT17MktmKN4BK5SF4yUcFxeXsvXTRBb62KCnC1pMhPLmdRTJCTZgokH5pV",
  "key26": "4o2QyGbsArSLu6MAqYLkdLcTcbKCVDiRJ6xGNjipstbYUAZiCLLxKMkdFtBiqhpHUjzXsMvnQL7KwCCu4oZQtu5T",
  "key27": "5Huer1xcfqns4eEbavVLkAhyfREgmfqHAiaywNicUiPfXXtb78FhMwrZXjCTQfy4ayuGzuw9Uzx6nZ8YS6mwTjZF",
  "key28": "2V6R8LD4xNuAspB1b8oMDfLajAdYCxHehoqjo1k2JVCbZYtym7syEo3t9peZkMVu1oz6kxhkXu4RhcDQtx6rxzhV",
  "key29": "3jeph6GgeoCh5BsypZE1nSBX5ddXvjonQ8J7KPWKrU78b5nTbeVPSMwmsfhBMnbYXRRuXmrRFFh1BWM8pCLWmd3U",
  "key30": "5CvdfPyFK31G9vAEi79cqr8isCywpxuSBESZmFLHngPpzyt32oELCn4KZUso1cMAd5VMEZEgGL6fEQkkAEACT1L2",
  "key31": "2dV38grMga4ZDcaCBm6Qw8oUgGM4X2CBAZToBNAiumSv7jGLF3o9TxxLKN7Akhrv41fNkAABjZoKnKjGPT9LipeC",
  "key32": "3D6dSccK4sCSgZn1RqjZugCT1kNY2SoScUgaEeN4eVSL8mJmXAiFCt4g9u17Vs2ZRA8PrPD6V4NPzAfzZj581pwZ"
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
