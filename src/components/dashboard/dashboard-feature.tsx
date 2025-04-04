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
    "6P8cbg1vXdgWm7LvjMnTRZBkqUf4uBorrzMzgrWwCHrcPQ2aeLJV4YjXaAGg12vmx5aepxr6SYUcqJjfpSd9u6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AvsdCADB85BxNn5nz43WspBVwtmnVSVH1Amw5JppqjKpmVDNj5sUbyJZT8tpBqYUqqEfWCcVxisYshch2grxdMb",
  "key1": "4MX7ZnZWeBA96sUqv9a66kuPVk8KgJX6xzeeqCHTvtpuTKHuTGeBBCHiuYWvxBp6DKWuku1AuDWN7C56pw6smP3c",
  "key2": "3uD6GvbFYQCKUwKqBenMLMQj8ypUjSQfEq6S12oHSY1jsCA1DQ64S6uycE845An3sx1rMYqi3eN9HTFRvXC8QGvj",
  "key3": "4VDmx6U2mVa8w5RjXoEfvbhAkUeXs3B3j1mmynUcjrpjR1KkTZHDu5nnnbQg6N9kfp2gcjiafQrgBtFaSu7aitma",
  "key4": "2C2QbgaedLXDTF413D9Nxv7CHrv99ezTqhJDQNyx69ejYDEz1MxhxZB6DxCFW2CqSn9GHzW8LjCakiq3SGSBdBma",
  "key5": "3REpEVL8jJnyWRY6gH3X1x5CheQZrHnjsipKCcXMyza7Qb5WV8BaVEz1NmoCkjHXB7Xs9GTJ8sxiKAnjJvsq1tfW",
  "key6": "2m4LCrR6SYeibi6e5eYHXXPrHKnepCytswEiNfPm4Jm72hR6RSFwQ7HCgCDUVFtmiMCdn96qHiVMuKFxw1hP4sAY",
  "key7": "2uFi4XrWsntn4SENRxL1uwq69HfNraUcZLWuaRk7XzGh8cC4t6LiXCkMktDbNsWghQF9docAxVAPC4ZZPbqQkNgo",
  "key8": "5Z6HT8Fc3BrqYvK7LVpfSxcoYKD5mGef5ZrYSFt6nNRhSo5vroBT2WHGFvxSnw4EczvhQBzTUFg7fYnLY9L1RRGw",
  "key9": "4AJ8FhGBRuqf7u8nwwjsSrsGPvEK5xwkwHC7PTYGowZxVr49CbsDwNmgFMy9iALaAk5AYSSJXeSzswNMgaFBmnwB",
  "key10": "2JYf6AEneXcuPYNAmLsaM4xKbG7gugUKnYGn9PJgqejYUy3DC4Wc21JYocMsPV3hBRxWaWfyHJ69ZsD3T5f9juZf",
  "key11": "2nY622ACzmWPkKgTgr87hcWoYZ3M3ddTRfJRQd34vBywvAmr4Egkp1naSbuYLPKjGbNZAWfbqTYnv4duXo8cVnzC",
  "key12": "5gPpkcPDUfo8VGowEkJt9QRHJcb5vvBtyczZmLt5cZk8n9GQpQw9ajJc7GQc5kbtd1PNBMMFN5V8G91wwcifnY48",
  "key13": "gE3gD67BVtvCMpTZhXQhnU5T131dLjWPq3gJ4hU8SGzPVR1VyqxhQ4aWbL2BpFP1WZjZMkkWvjifT1KNXFaChDB",
  "key14": "2p77Ce3KkHR83Wov4JzmGUM3tQ2tmXC9vq3YafCfUJa4BBV7PuS26QJ9dwhTcrxitFhTKHSeXXfp7Y1vhJ9HDjof",
  "key15": "2SV6RKBCaDP6zdyDGnYKQ5bmptGYhBCFrXKCW6cd7DVGHZ8kDor5knV6dKEcYNgBBmHVQYF9QNjJo1r5Wobeqqnk",
  "key16": "2esidhocKJRqQzaqCyJSpt7EAKky7r3CDc2XyRJqXmGaky6K67dg5EfdENqEAdMawhx9FhWKoZWmSugN51YYbUca",
  "key17": "c8Baeit2X7wcshpyZNsFkscSVHYH8QjzqpXG9SJAcPpwTyyZYtzPiDU5WmGwyo5FFC44s8uTQ3LXHWVH3tcr9TC",
  "key18": "5Nt3ZAN2fWvtERpSJBevjuzqxRj4VCmhe6juVjssQaW5uMi9xxLA9bFqB34D8m5VAddyCtDNoCnDHhw7zdUFrLeQ",
  "key19": "44EEDmURC4nsinhjCdKoVEtwKhccXBmSzs8SSKMMT18GUcVUEokSE8YcyCrrtWhKZayYTFR5VRXgWor2QkJLd4nx",
  "key20": "q5EGhagwhyNrr3TqH2QbjZ8ogxoCie6KwnPprxV5pehzRwm6Ww4Sh4LqvX1ppopR8Ctb5UE6EJHULQgz35BRDku",
  "key21": "5djjWuouwVJjwmP1br6SZ1qmPCLF6QwsKVPQVK1MDfC7mDL8b7qEGdPRkuCkZMZYurxikvcNh6aufrxLyX9gsYMN",
  "key22": "ERH8T6NdcaUta7Kd9EYgwvznvNUpfHB1CwfiyPwKnpwZqSktXknVm5YhWjvoh7oRzyNgvGwTxMoaRLDGQ5BSA9e",
  "key23": "Duoyrdppz3C3dknHUCu6zusDwVDGALsu6y6TVv7BZywh8LTdjnZe3bGMxLR5UaH7Kw9mAA3Y6V69RAWVMcF1Tv2",
  "key24": "a3dC42kt49iyQ9S4g9fE1S125BjXrm8t9oP3BJFSB6jp8JGxxf1fnkSjrZCuDzR8PcZEFE4q6VrXzJR6rbBxAcj",
  "key25": "2PAus5KAdnZhNjijthFwJLgLi6qN35g6oHp2wLvRY5BpEX3VnUpUnpyYrApCr29XTuW1f73UPU1StJKxQKGyQMEE",
  "key26": "2UMBndqHsZQ5zBFNiQG5k5Ue3EwLD9ijZEqEM8LKRayqy3jKkrkAST69DNHjG7bNpRrercP2jk1SoJTD8ghqAdwq",
  "key27": "4fLZAGdk3gvZBrsqXXk9TeT8RCkNa9B1bbAmCak5xDpfBkVr1N5scUQp2qkHrUHKGTo2Y3puLhYmsX13BhWtZaBh",
  "key28": "3BYhXHZraHCQq8ZwVd5cLMgHtGEi7dRFgPBZiMtJv6Qn4v5nMuRUTyzjFWCdkYapDUk86WVx6B5Gfnig7WArSfLS",
  "key29": "42so9S9kkVVjQCTUcU3BicJ5p4aHapnRExoRtGemVFz3e75aeJC8bMVQ8nYdkM71bhVGtYJN1tfhwSbPzg2Lusq3",
  "key30": "4FSaiFeC4hXduocgwR3dt1n3DEi2jSgat1QdLiassQqiQNbGTrRC9nxYu7Fxr73qKAAtKZeeEw7g5U6QNU85GXjv"
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
