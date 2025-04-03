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
    "4LYUUPhJHGLTS5eDBbfojKyS183wPNeBZc7RkuLz6g61P6hCcaaPqPSr4ojwvok7MV92FHqjpyUQpq6EmDM9QSGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6meeSTbeLYH4tceNf2Soh4LTrKY8rq6dqCA8V9YKwxYJHCVhASaSPp7H5AspSVJrg1fNP1XM99ZnQL1bcidq4D",
  "key1": "Rvye8rLchjoG39V2QxiM2cXUSmDDizAudx4CWx68miX9vo7u8jD5mXnBaxwoHpTGZqRW2Pco8B8dDJF1aKtkqPv",
  "key2": "2EcQ6QjygT24MwrLeDmwTK4ypc86KmEH8xnh4jMS24y4RaLXNkdrz9hE6MJZ71cbSJWbLQqZM3uaScWHnPz3YBsD",
  "key3": "28tkkEyjiYRAg1Z2XGfifaihMtXhRsLH3JEs8Zy41jG6diNDBXb5YpZB7WswqbmwCnGsJegPvUYb5cRiKpHPprGv",
  "key4": "D8PpiaGY5gX9NtjE6Dpw1HmCWmhyhSy5bdtbtph3wmesasmaJLitHqy2nZWS2fJYjQ33TBqMpwgLXxigKm6UifT",
  "key5": "5L2kAzQhTyVt842kpUALJvM2nquB7YzaHhaHdWcbqFwW8xANjtdNcPSL31iXkyPxtSijFioisXwdviKXfjgooqn4",
  "key6": "5JyTAFFgmbQANNWfDhfs6homK29R5DqeimD4S9nqgRc7DmyYXVtoN8eYdJx6ZFwWHnyQTJci5o53iJNhfSGMebTB",
  "key7": "5YvmN5yYzGEtLN4ZAD3aePtxW1wJxbDn92pUSExifv3yaEcBkz1XXsKxKpK5VR1tcJpg1rJPydbNPVN5CreYcm7J",
  "key8": "66wVpWzQhzseeZrTVR9ZwaZwnUr2or5LZ9gGpAq4Snd2F3wn4b66PuZrsY9t479eb1Mi5EQ44R4adnbb2i4hqy3i",
  "key9": "5AQUc9i5oyg4vwUgEwy7A7Q3VuW5EymBxy6LRihrczPNZQVwLvVCPhPecxVsR4KsX5ArArmbJbR8WYTk1Qv8aw4D",
  "key10": "K7rVCtPEc8CYfgrEWZ7xswiAB5FpKhK7EtRM95MbMhCw4axioPVawzSUjPc2sMW8juB7g7JL6YARmBZvgRe5vpz",
  "key11": "5civumxYnGemYQDbwDVPLaoniTy27SXzQoitCEPgv4bD5EZEA9YgsCdG9eFhDwAh8FgN9Esh9pQimbSa8K3SpNNF",
  "key12": "4Pn43nh8tFfGjoMWY8KrssMXsJq9VBXfXkwnq4fXCUYryQCo64R5fXCe6jzGyhXq1LVr7wZEXMEEGzbCNFek4CcZ",
  "key13": "3YDwD4hboWtfREBnKifqqvzsiif8Vdtrs5F5ZQQvJzWRRMzVPmc5jCQu1973nGdAGi5hmH8sVSbyJ3y7T87n4bBq",
  "key14": "wLjW71t78x3iKJNtJuVRZkMzsSSMnSz4KBcCJh9YnXXRmWJ6pxVqWayA8v38sSGxjPtpJo4WM8Qo9Ev3Hf6f6MH",
  "key15": "2bUeDtHsz5KfCzY97eaGrLCTUdYYTn3xs5NeTsLzk8dYb6aPxskyUZksY6EDcMNNWzdfE1chZ8Ckj32opgXaY7PF",
  "key16": "3yoU1he6nkj6e7cawbdtoCWeuigGXTgboXbMQTq51zqQp84U95vhSq7XUsTYvw45p8NWCS11yhKHmUoofEfzcPLM",
  "key17": "zNmBk6ovXaZwiKygsKqsrcu2KbhqmmtJabdUZuHH9jDWXnRqxytUKUefJwnG9Yj5DzhodESrhKegtWRkKR1UxHE",
  "key18": "4RLyyvu32VijQabxaY2nR7BWU637nBy2pTjoGMLVZqBt2BDv7oaH6CXkPLfdV9496GnKwV5XjpepEKf15HWYiswd",
  "key19": "KesL6TmpQYTmeZ5XUrDV9jWp8ZCLYZvxsVcM4iTVtknvyG7qqeoSPBoNhsnjvQEG4W1md6KFjh9LCcAX9eAykwB",
  "key20": "5B9wEbDwcRkFTww5HgTkeFCCrmvwuDmcvsmU4UGwifRQsCMsA871mBaEcdPdeg9AbSbYPzQsU4xXfyHQ87YjekDs",
  "key21": "wbziSm9t41hUnKoTGDYMzGJVKXajavHQAoBbvxtoTw74UBWQePnw4fvnapTw5W7wbvCSgYHaeeD96xXumh3YcGv",
  "key22": "4fmDA1ppENwyrsV37Erucs6qekeXgUXYU7RjVsLRJwp6n98vxTjoyGsEfTp5gvkhUJBwQ9jwh5zbLByYiao8uLCp",
  "key23": "2e5dKuZgmAHojFj232VczcZY18BFY78gaMMmZpY367pFzorMSAWLD22Dxi3m6A3JonAtmnf6bCEp5BLrREGNzHjx",
  "key24": "3uEDb9A7fmmfeesE3LMg3ZoKsPkkoqYutjUHt6Gs7B3o9vd82sqGgVnHGkgJqqwB7yrQeGG8Hq3VLPuWLWBdF6oU",
  "key25": "4NsMYGvmGxUNseSLWf9aqtxhzgVCbRz2VzMpQMXE6EavQQhbRxdD3zjgfWXUbSmW9n5CQceJPERdomPwRPbabtzv",
  "key26": "2GT6dmH4NtxZoCLjTuNuDzNiGbkR7DynfN8FcbZ24NEvj7Rgb4AXG3ZBsWC5zhpL73rW63e1n5XKwmmVoMtBZNvu",
  "key27": "3jDiCf5Z9Yo7SJn7Shgh27eZxcDPqAEAbV46rGQub4AsnmtoW57U7fJpMvsR24dwwHuVmEdwcpbqXMrvoHPjfir2",
  "key28": "5RZNEKS2ZNcqCdPFrc1LMXCDB1VC7E2gducvgGvKtXkF49ApHJfdTvwHw1KyVBgfPyEwkbWDEmePB4GaHWuAJ47G",
  "key29": "5bBGgAJiPtnxVgAzEmSCjKtc1fA4owRxj1EEDudquHMqQvk5YHSVnzkPys5mHp1rQaMQQes1a3VVQXXTheHkkhTi",
  "key30": "f3bSXiTwC8RJF2mnsnZq7f8i2STqyxnF9smBWS9cUFT1EW5e4BEDXGzSX78DpZc8w5CmbHY8wp1M9LLKcnLcZXa",
  "key31": "3e26N79MXxjehkBvxhYg9FX1ZVMV59hW44VdzJ1fTMUCTEVbNAggu1NTTr8GS7Q1F94g9MxucDJYAWwtf97afJXL",
  "key32": "2oRCc6ETVNfrQERNb7vKgDKNgBnUmYry8GxJWTDpfyviMC4ZZnyeQwQVrdX1uMV9daNBiNxdYjvBoFE11BVf7MCe",
  "key33": "vKtLyufDgKmD6haJs8C78Drhh5cZ7acCn3eHbjfnRigUzVNedYuPUXC29niQ5JqCaXCzU2XrRttHSmwpxBwUC8m"
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
