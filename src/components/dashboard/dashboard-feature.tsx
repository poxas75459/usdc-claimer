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
    "2QZNzs2LkVtVZwxyb7h3ZtPivuBNxp6Qdh9JvcFcyXGiaKszsbmNKWTsM88KWYeUqWiUC2JbDRQ6qiQa5VjtmDex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DKE3WVK7VKMxXLZXjvnZgeFN3qK6RUyHzRh9gJoTUQevdaPzruNvwAwQJYbVN5buXe8GrbEaP3NkX5URCPfqe7Q",
  "key1": "24rZ6QbViJAWD9Z1C1ZwJMsMS5ZpxHt1eVvBEYeYXJizNuYHTtogQC2Mwqe86SwaUq18CoWHCuoU9gCvRSAhYRL2",
  "key2": "2NwSQ99fPDG4AQGRJyWPe2pL9GVPjMtxxVVR13U4vv5SiVX96bfrr58fen8hbuY63F1DSTJQgayjpzwSDnwuRUkF",
  "key3": "2AHqkLqkk8AK6y24mW2RLKG8egcXKgTqVPttZqvMvk1LXXgcpfASZjBL8yXCfA85s6xab3kERQGCuwT35vEQnuSx",
  "key4": "5JUTcJDnktGK8hnqRBGZLREyV2BYKLEz76WbLuxiSSiYHp9FC1dmcLX31zG6aShyjv51dVc6xGbUwhWP68si2deK",
  "key5": "4cCEqbi7rU31xbQVVuLqKVKLw8s2rRpEjRE5CUN5ysLc6J1LAU8SnTWNT7wP1s4tmrZPshGUd2sz1WkfeD8m7qYZ",
  "key6": "5pejh8VbjNF7N7EAFkFMFAXg37NNGnsHcH9BLfyeLMKSJqFzwi2THgCLr1z8wcH56UjCPQwg8vkA4Ymko5tu2J3",
  "key7": "5kzGD9EnMHeA3xSoNyXdqKy71iMsN6hHH1BcLExkV13nj7wJ9VUD5zffcyfLQ5oYZC4Vz4Dq9tmExjkybv1RXvdD",
  "key8": "Jy67z3nC6YbknVxZs64sJjhTQ4LYFd1FPiJ44X3TWRdofgqTLosLBNDmWCNJyZxawrHHeaXQy2vzM5RemhN6gNT",
  "key9": "49A6WhAEkyJVcA6x4ovEdy8d3qGeejVBCe5MZS41xuo6vRbuU31zVZiq4f2BTKAgTZEgDjZTaJMLW1qY28zUvUep",
  "key10": "4fgSkh3RwQF9txWKxseMufrP4jxPh8dbNeUiWiiRqSm1sbcxazZVt2FCp4YcYvk5pMGekCBkCBhfwxG7pUpKXtgD",
  "key11": "3A7oxe9FV7uphccALoodfBFh2eBgfUDngUcZwEFpUtYV4Jvdsm8B8Jd4ZKT5ByjaQp3iwF39TXnQ7co8a1RoRgh4",
  "key12": "3RqFsz3NLTWoHYhH648AKABp3JPwqPmEHx8WRqR9FYdRAi44RPViFD4TJkhAMmSHsmWGE2yEF7rLTGM7Pkt5UHnn",
  "key13": "4citEU3VUZtY4KdjiusebATV7GXUxzcdmr8TufR1UYs2C9oduZhEtxHfie2EHMZy1dpiZ9quvjwXfWGWeBBnbaDA",
  "key14": "4wsBvKVCez6hQk59qYqpQwmJ3ZRSCJ9qgZpRuVqX8jWr1sVxGp4DQjCGj5W8fo3E9CCnkM1wzySyYmDH8vJJiZ12",
  "key15": "2sFdLzwn9KCSLiRB1ySB9TbhNkzAkBiF5JSXBUhwK1u2YJmtB1rWoJoAi1A3Fz6oJvBkqCCEyWvFGZrQNaSkcFTn",
  "key16": "31RbwX4RKkPTtuWUtHTVhvFdLpP8a32wCnJV7H8QRVFCHt1daZwb4CJmojJQipYCJ2seP8dv8uFKUNbnRoE2gPMz",
  "key17": "3SyU7Vg3VCCCtXGNssteGugQkSwV4ZC7o93KWiKF2npNwhCJzY8Y91P8sGKAH9AZdnKnviUSh3eoHJqRR2PZZeVP",
  "key18": "54TTnDYTYXVYTzJBqcEwFdQHXaib8XG529HhNTw6fs4SirCd1GCtckgeAgm2iA6aeUFsacBWJB2dXbgTfkVMP9gr",
  "key19": "4nZ4P9mRUN1LfhRpiN8naAp1snRjhHV8WADXv1eB6wJ5JemkXv3JPiEmbQoYhWfVU4BLpWNLkGKHURxtdwRvxRz8",
  "key20": "wyA9UzXZvB7G2U3srCHhW5bTc3EYaEpHwiPc9DUR1vybHGSY4vCSPXgsTDh7dnr6D8ikerG9KgnTMFNwvWoCcRc",
  "key21": "5AJL42WbqCGKDDx1aiZ6B4nhtUzGcQ8RoBZwjUHCYago8BmaUXuVtCaEqMGZF2dirTAZxV41CKMLeMF8mAvjwdLw",
  "key22": "3dRwCvnLmBiTz8DKxhWkwDcebK1HCi83zWwUe8bYWABScaYCSt27ffC4iqPw8qcmkBL25jTNJCdAbU56WUsK7yXo",
  "key23": "3ZRf1hK32iExR6FHBvc7R3XLMuzzBYn3iiE1txECN6ExNmMJ4bvfrWFwx2cPNLsSZBWJtLLPjVTrv2kTNvtpNiqV",
  "key24": "4kB1oCusd3a9gNCD1HVvTPJ5ikWVU2unsZ4c4Ma4iVhmHJgbEndJD88NXDGjcWcp5ujnYPMH76CKnAWnE8rtXbnr",
  "key25": "58QxZzsbiJ4A4u2FGU38Qg2bugLXHVm7NG6bn36vhDYtd7W212GLGpshxDXihjpWvdAMPTeS1eVCA38oG7LDhYZG",
  "key26": "62anRHhisHgup1bCaWDY2kZZvH7SqUpVCA6z654Ha6Zej4c8aZif6x28NoPPAP1xNryPEsTBN1Go3SjWPmA3m9fu",
  "key27": "3NX5Si6iuoy3uWNEbNQNvCyUBrUpNHZExP4nA1EzeWXa9RtJbkWBKe8pWr8GDDKB3Kvu1quMqZZAESytdNWFKX8R",
  "key28": "3ZTUwed5w3srBpDs6xnzU9Dfa6mtCxxr4pC6AD9HTsNzLbF8PcYpe895W8yHZYgePeDsUdwvR3SnVpUzxYgfai2h",
  "key29": "5gkq7zw4G4er76kaEF7iBX8ZpZzxrwr8S23631cVai1A6eHCe8FGPyf6ZZXUucuMZiErGBv3KyRDKKihzQhJxPK3",
  "key30": "2G5yQHLxXtuvmzfVLBS9KTKJFYpVkkn68Cnu3AX6kGrpU6Dv3jESJU6RStGb2V9rPnqwBJcwWBxjD7JVACxAeZHU",
  "key31": "46jTno6eaFXxwyDSXSn28nZhqieZ2LQAXPg15Bv1DvBxhXYyY4k4nqi6ZzvpyyhzWEMeJEDxaZxJoW9k7jyjPiyV",
  "key32": "3jbdFcWNkiZ7Uy1oNfgovC6SJ72a47JGbvrFfMNYnsdNjEeSJL2Qx7sYeDfgwQRXWTRxfRMysjVZe4Sze2w2ibXz",
  "key33": "PoSWkrkki9PhzvhvWpLLnTtqQ8PNnfB9pHFXdxNDrU2Amcmtcot8dPaxwYdy4kcPGJoibL6U4KSYZo9eTg3z66b"
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
