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
    "3MbaaPRYc6tzx97FQbxCZq1j1WMBeYyT6gCTjdTZSYVXmhjHn4EJBormt8FXHVYRAZ5C98hza1zh8ZnoUUszKMpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLZUYuM1gdvXEtQCe3vFhkgzstbjiC3FDp1zDK5dbZtASR2w3zkPcViV7WobdhjB24LzfKDVEwKLzvS4NEnURFH",
  "key1": "4qsRZDfbQkhziKy8sCdDuknccXhTomveHowbbyevqdxERokvuF8CMKUyVvPmZ8EegoGQ8H6tJTeAUPeu5pGWQtJs",
  "key2": "4TbxSzN61SNr3SDXxZXkFW5QiJhZuxiKczuNdkaBTVr9N8N4F7P6WcUkpSJwEgETJDoJj3FbYMksvs1hDEzbwunM",
  "key3": "3UQL12zaTyHZzgSRqnTHhZBJstU7fjkDb7xLvqJwr6pYurPQoq2yqNpMJoNSzgu4Nxfu68EJu6RauagP7Um2BPrU",
  "key4": "5Ar98msEirSeYiBcnbCPyUvZs5SQqmzDneo4Pkkzw37daARGJycFgig2rJwkefmj4HeH5oebdqBKapydSkSN2XJR",
  "key5": "2rZEVVy1zeLJKoV7zHfubZ6bErEJ5vKx2Sp1cF2iHRxHwHYhvFp2QXkLHAJzLJtLSKmAbRF3QZA9DmV2AR8uJK5Z",
  "key6": "4xA3wGxBc4SZ5XeX6na5C8Kma6r4bJc5D1keB98onnJMfijmZA3sHxedoLFM2a9U1uBjTGLMPHwHTrT6YAWLeKk4",
  "key7": "HG6tST8JzYZSrtiKjEd2Wg5SiR9fUoyD4WzWm3fT8UqcGvQNAqgUex1Hh2Q3igd5HVw7BxjUnJdguEJkG6j1uP9",
  "key8": "5NgBq2yf6eNnQxUAp3cPeL6udqZhtRchy6KiynKeHZexnhRmK8mffsvoaJzJcRenNuSZxMHvjRxpq63G1ZEFUHp4",
  "key9": "2uWDPZvBn5CTZRqvxFipvDXqTg6fnpqy7ecs8o4jYMVyL5f1R4QBh5NNfsardYmc4t6bP1jKoPH9RWkJh4hsXGuu",
  "key10": "ZhTnEV8zARQ4c4VuX2CqX8DGWJ7si4dkpbHVyyChmHgqzWusZWoLbBxuvEh3t9SJVevBbQjaW3cWYRHyVBxP66s",
  "key11": "2dp4fHxVYk9HzakbTr3JScGaR73Z6Xha2W2auxsi3NMccVDAty9SNLg69P12JSWSpkZDyuRqiZCVkwRAR3he5cZp",
  "key12": "5vhrdA9bt4qcMAWN3gFztEKx7TfinRsN5C9RRoXiF9iUeDuM2Fv3ggNh71joK3S1SnNeWgmC78ysZhJLqfk92gUr",
  "key13": "34oM2WMQCYuHzm5NeGrrLYeCBnqZebkd8oXiAYRPW89dMB1cvPt1Ww5nvvTmSy3muFGsHsMLT5dqo4DdnxgJuWjW",
  "key14": "4oe59V8W2FKQqjvf7g3xxYeg5ycddW8yNNHS2A47iLrQ2KG7E6fYPoq7NvFvXoqtGQmjaFiWWFQA5S6st5rNfcFJ",
  "key15": "rdAAUkspZYocLREx5xxdCfN7wVNP5UF7Wwmt57r9mXXmkVZ7gNmMgz2VSQXSH5QtL2gQUYkcvx4pisvXCfeEqFa",
  "key16": "3nUwB4HENziBeWqyCp4riU4kVsE259Hjs5XqgiFxgAxMbCV2ZEN54ejVGDiJKoWj6x1BZBNEfPeUuoMqRgJfVFXb",
  "key17": "2LkGv8DZrMSh4Qh5dYt59pQU3xeaHDr2SijcRUkZcsKQJL3DXC3qyEGzjZo3W5BZkvtbec3Gotok6N9teBQ7neHn",
  "key18": "tx8AYt4U3YQgAT5fGaNSEpB29HRFPXiWDM6EC9UXvZpyRayWu7iHq1uLEv1groiM5aBi9xv17mMjUXSEGTerasz",
  "key19": "3zX9NDNzZVVPKkee1rsWdcnWFq9bu7x1tjda6ARVBEw2FS43D4bELrJpxmoYpKUECfHnzUvG24a9QSR9tUGz11yY",
  "key20": "41e2a6vmTnHe3QqwunN8SAqJaDQVis1VPG6tNqXNszJys3f5TRCqhLmbRuHs2aDHM1J4Z5dDVFsCcNoYcpzhMXpK",
  "key21": "3RCizGMYCbp3smCLiKMZpy5ob4zc8cEHuZNcSLA4L8UGVozLwNUrdGh1E8DhGjd4EKQ23sRdxnZdsj3XbDuJtkdo",
  "key22": "5Xv7YWk1VG7XpJ3xWEE7gnEGtX75NMa1g4QNziYUA1mMvgdSmXk8mR3pT93rYzfTs4o7v9reTVeH2x5fbeN6Awkj",
  "key23": "iUt1MfDpkj7HGMpZjupJbLgtFqZg8SimexdTuKH1wpgCTtF3uDxuPvs1ZP7S4ZCd9seEqxYFK7ZGjxwAKZj8zHY",
  "key24": "5inzKQpyf6xA6unoEHPmVeK4ZyVV3B8L7sqAHtpDtDy6tFmPrhfHvcmHFKw1VpsDy4cJhFVNHmpterHBUhHUKSGY",
  "key25": "2Mf4SNT6K5D9bvUPH1kY49RnmU58Ke4BnVaLmMtZXXpXQ2y5zro1fXkkMb4WQvErMNH3ViTgixTMetkjvRTvUsqF",
  "key26": "3PprKn77SP4Y48CqDTqcqSHy8ocWVyxunCkD3xLYW1iVZ4WQ1LbLnYjYsZNp33XZDbzmych2A8gZ49XD1fYN6m5j",
  "key27": "YbbWFbQYCDLKwbd53GYL7RhyMzeARE6LnT5BfCWTRyKCssrUhUTNkLfNcwWPYUnostr6yrd6mKyPuhAKtMZNHxv",
  "key28": "61oMxPe4ECVEpv6x5HFRJdVddfFECd78nPYNSZiDJEdxuQLviV3RVqaEFF38jY74HBzSqSYzuVtKCyy8S3GuZ4nN",
  "key29": "5GRfnjd6MJUkmtR1y9yetW3hYXpCBhJpCDnYQVHydYSdzE83YEEn3QXZx54bUM37TmbXSTP5ivUQNr2ACuXxYKMD"
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
