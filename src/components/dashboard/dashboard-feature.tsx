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
    "2cwLCdR8XvVG2XgmiZwbxupNWFoXmSuSFc4X9jjZMVWCQkCnZENW2hU1qBcqdi5nQiBtXmQogqSPcT6yQSH2vVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQm5PW4QC4ACbHTREJD1XcyjYdjyphMT337dZScLL4RwDdKY31kSSU1E8txKCzKtzWLr6k79LK4pnmX8u2s5G2v",
  "key1": "4zxFLrvwhypDD42LNcpvUzrh1CNYVa6hJT4XTn3SaQfdJ2WkvX4qYmygfnaAj8CyHn82mLztdHy8V4cZJCxbEFsP",
  "key2": "1zRhdYcf1U9mLnenfpJV2PuBh65wzK2RGN2YhNdHmjaKJtMBCcfM9AKmRjF9dg7gLeKHwRyJkmMBGAWV74UUN35",
  "key3": "2hsGany8NJdJwk4fvW8BK2sCVxPXePBTWdEdHFFvwtBrdoqjzsRLRxoUBS6eXBEnWnzQizHkBWEAnj3A89kEd7L3",
  "key4": "MrLR7XA6jxWF8ZaQgH1hkt43Gb2uereNuCQowBJFpEf5uLA8Z5xmmodUfjpHKMek1vx86r1r7P35Pv7Y9SdGjco",
  "key5": "mZXCM2TSP6TSE5hmSXT74UXjZ8t5eLSxwouSFo9y3q3dcHqRgeLKNxPg2NsByGhuwJ2Mg6yQEQvBYsFjSjHLGzk",
  "key6": "4kB223UmXY7JrrvFn6qybRqEgMd92upsR8vknZPqABQvXqqAtEMMXBSVkjFRdQoeu5aVh5aeQu2TPqF9Nx2pZL5M",
  "key7": "31Mm3fzbgwv6VnLH2mKntXYrWsxTbBc7Wu3jwsf6ctuyuCZ7Y2pRpb3u6UKf7VaLvMSezTXkqALY5ZW6wRzooZpe",
  "key8": "4G3U2EZPQ7FxdJce6d7Fs2LLRr234TdHHwQ5tCs7rAc7x96eKuzVaMceJ3F8Tkj39ari9zDM6wYVENZa9XhVvthF",
  "key9": "4wbk7Vh1Lcv8YGQ3YRMpekCi73Bok7UfHBWS9mXD5zkcif3m3VoJXXDy9tpzZ7LoJQFND1Wb2977UuebN4gLY4Bi",
  "key10": "4SLZyG3LswBwA2ddeuYoFvaV5EtvE9csy79VDfSSC1k5hPxQwWFJSLqR2ZUryM7tDmt7ahLZYXYYzjz6kZ1H2pdp",
  "key11": "SzsCdEhtqp4EiQKxqC4KZUdwvwdMWYBQcmg313Zk5Hpzkv1EJ8tQN9xVLunZhXgYRf7JYAxuccteYxmdkXLBHVS",
  "key12": "D6z1usPUFqPor6JysGLNizDCEV8qztEivWWJn6VZkNj9XJmerR4k69JtBhsUXE9cSJSSgYr53N18hQcqM3Qnbgd",
  "key13": "xyTJiAJ857d3eUFvNgCgDKqbanESt7aYnYtao5AMyWoudmWyB5mG2M9s8mQ8SRMgq85pQGYZNhu85YroVTXWa2k",
  "key14": "3bYJ99y3arTmB8G3GyY6gwMuTVPRt8z3Luccxv8nFV853rPtyaookX1JnQ964PhkQUwJGD5RTVMxp77RujELa8tp",
  "key15": "3H1v9HjLFAebbWeXKk2PRzckg4kMBUUepgKqVTHhJ3zzNvnH7b66japCgVqgaNDhT3cmsWopAswuNpy3LmckivBX",
  "key16": "LWM9vkanv9PYLuzjZ6F7GN2GMkAaYCShV5c8koX7oPoHsN4w8xXzXMpeBaBUB3tuMVwY2DvHcnD8esvqbd79Spm",
  "key17": "ZKHj9ajqnsaskGUEVWLp1KHnAN93kxnsfxqgX2wux5nFXFATYgmELEV3R8tab5QcNGBL814SYETNf8ohsL9RJi8",
  "key18": "2vG3Fo6NoCRKeVygqJ41jCVmnmVe7oqJoMGM6R3nT8v7FMv8xHt71KATLkJh4QgiZBrvYqxRRSB1Kd33kT9iuJRF",
  "key19": "3emw5uwCHj5btZLthpyawyAwAJEc4WmTzx1FUs4HQZyf9jDpVJTyVoHt5yMuYzK7Yi5u8iEBeKCV8yKHnnRcAfdU",
  "key20": "u3jfWzFYM9KajBHFFLRzisRrdE5K2tsvkwrPCxLZxnxJRas3xuEn2ZfVT6QNPUV9rgemQtnaWb8gggV2hTqQ8XP",
  "key21": "3R8rZw2RUpLos48XpbHJGJhHFyCG6YhjegZbj8fMLb1ASi97BnJp6tb4YYsGxrBhBkbXwHRXdwf2GummH9vJQaKs",
  "key22": "H9roBoZkNYuToj9VEDxkL2SQzkotNbRE2gAE5HPRn77umxCPKRq3Rp7wCDhNSGMifE21xVVmGCLBCXdDTbcGm16",
  "key23": "4Tk7J3XRtTt3GczXfoaKtWW5fZApdWfaaVAZoryumko8LE6zw4KoES4UKXctGLXvGtu25QjPft9esrYD6s5BgNSH",
  "key24": "3UTjCzPSAiQhFG7aK6nnnNeHL3yBvTkjuVfC9mVSQjpKtMNLmswjeHLtxkf7R3ppGub5t7FnY2xEQrQ3vM2wcMFg",
  "key25": "5KLqxD4kfx563ouKwbSwanRDjmgHqv4D4hfWsMQUGKox2BR29NyGxrwzTonx2APexqPronFdpKesNWNZaukQiNrU",
  "key26": "4J5jwhatcZ74B9QubyB3KPyAc7moxrjUaznvovuyWzHu8zTw5yZKA4kAk3HY7b7ysHwkatx9nHWetDwYJfo2A14L",
  "key27": "23Z3XsvrNRqp2ATpaC6YnaPQB21gCcebEWyu8sE7RCd7bk5f89vyYnGE6FZuFwVLFM9EyXfm7ydbPanUoYiy7Fdz",
  "key28": "35xPAJbxJRsP3gdx4UjaGfVrNZy8v3tGndt5ibVtg7muJLn4gXDruTxtJ6YxXYvcUfokKappkcLKFuU8jo6zw7wo",
  "key29": "3eRiBQif2XN5ji3E4eUFn4CjAv5UR4GGmqsyuVaLiBEfffUs9hqjpD28vQfx7YtMoWuQnDtTiXqUMQLtXBGKjGN1"
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
