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
    "5fZwh957wB6s3cwj65kgcfArbFP8bAH3JSbgn6Uw2pahNSHnjak6B8iekTsN2AQfqhxBordwvC4FaFgLCneFDwqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22X4QM3cmngECJTGzHV57hod9Y2f1xMyZJJfSW6765UJsCc87QaJWdtZsPqujX8wo68XofjKnG1EyZ6eAdWuNvMk",
  "key1": "61PT3YwNUASQ5SS4Qp83zEJCFicPYAw9MHNvGmXLYysnLJBB9pUwcp5jcv5E3Hz537yitPfzDnJ4aGWcA3ZZE5NL",
  "key2": "2NE345969aCNkrFosRF6cLo57o44CuUSY8b82DewtgCx8vz2vtQhN9vEepZ97eQKJW86ReQLBxVa46GJos9wJU58",
  "key3": "45jwnSJReLPmh3czMANAZbBbXm9iMuNJJMmMHxpaHdiSYebRo47K3YZGcDBeM9Wf8yrm7wbiBF6PRnk6PquuDj9u",
  "key4": "45fvAa8HNFn7e5DY6E6LNkMmMVcPSALgw4pkpMzQWwSw2EnzEDs4BZefkGqY52yFV1jDHShrpWaEamMZU6Q3mPyi",
  "key5": "4GVc2nwVYwhRYDvKiyEoJe2kUyx7ZuJPjmR3VNYydTTAnXre9bKk4kMXSn41c2czsJ9LgziB2oknTSeEmWbCVtWT",
  "key6": "3HQT7ybzLRKtAuo6HMCV3VbTuzewsEBYQnQfTJYFDttNRi93w4FPwiZxA8KUT9FCJHeq3fZe1kWPBty3t8zbJbX5",
  "key7": "3wwvYgxJgZPgz3rKTQ5N9AFvmxDYVbvwKrfQP2d99vuCTwBn8Y4JkZa4q388UMwEp7UjvgVgZJWSnhdyqSR2DcFc",
  "key8": "BGhEcgxU9wTxVFHck3XtGaYmdBPSQ1JJDZmgnziaz5poDpaM6QnWYmDN7SVcNwMNQGPNaBy9N5NeSFuxocwzgre",
  "key9": "3J3j4xGq9FbiVM5JoBMLiqgTPwrKVwbAWUsYgq4Xsycqv5ic8cktdsUpAGXLSnmPsmJgn5gPY3W2sqYqyNeH9W8v",
  "key10": "ioGvS5CWFWUvGu34RDCnmiZWkNjbuPxGFhL16uTje4FSCChM5HGmULtt5dTWv5sWsweDXcdDdFuNe9Cq6eyS1pt",
  "key11": "5nhGPieyTHqGdcwYBfBV4VPYp5BdJ8evMDE32KNhSccNXMYdjqbFmoHVbaXQ7WQGmzpuFchgM9e1TUokyw392o4i",
  "key12": "45WLpwG6LVwxvRkZhsXiqhdChwH33yUV6zncoG3VGAVsqDNGyAzFZEzrcnRB75W6eWGgeaLHoAKtFqwiSNti9C6R",
  "key13": "3ZZc9MdKtG6VDrafzWb3xFcKtADFxNRuqb4oUH7pibALtnNq35xceD2nxGmsgYQbZfXTxi7fZvr9grLKyju9dTPD",
  "key14": "9eVt4ye3ByTXhtdTMNhx5JKLoMdqiLszHCdBrGKWQACgh2uK4HihhJN193jkT7WJQf5stxeuMEVj7td2xz7MC2C",
  "key15": "3MDB194T6R8nWaSrzUnak5ViEeM5t1aSLJYTWNaBrTVo2Ur3aAuSC8gX4kTRRBzUpk1DDpWxtLhsG5RrinuH6NZ7",
  "key16": "ahbDdp2JL2F3qbqQrPFJ6dijcwR9qNWan46HKuaShphVGfBc8SnMvHzU7ja3K8ta79ZLLuzjXpfatPyys1xaFXc",
  "key17": "3D2wCiFxKAg4d2DTcgDeZgVUUFdggFWYh422HAvwJShGLQd6yB1sVH2wDk9iB93Bzuuc69TNeiZQRQemxRs5kZMX",
  "key18": "5e2cfLqwqj6P9RE8dHE9B9MnUC3EQD8AzuqmFuxEmxC5q74B799S5Yv1PiTRrTmN1GWBxM65kZmHsvz8orRdDNW6",
  "key19": "5gitAvVoGNUomqpU2apUAANWJvRtwXLHM1inLhRgYaRgEqcxPCaqhDUCS4yVHyhpTUiTf1PCT7rm8v1wiYpXNwPC",
  "key20": "eN5xmFDQwry1NrezzEHEgEFoTqVahTLAa8SeJbaKUGHPRe3hgGkgXhec6QaVsnJqgonAy3PZd6b83B2X4ZBT1He",
  "key21": "5ZrSV8dCVpAnmYK3dfvpTCKkdY4Y5AV3mhq2xRuWif7Gj3mZu4da3EhzKXcjLQGJvKagiXXdUFVxd7dPC3XtBZMu",
  "key22": "49x3ZJFkVVvcQhjqfCgYbvdukuhe79kBDhTz1JftaEBPqXjRczFYYv1jJB1CQc1kKfTCStmmLghZ3ZmNYLFkrBay",
  "key23": "4LemCktJy7S1n96bx7NuMKpGYtTMrLUAKACf2jqLyzWdWG1yXVPgMMXSYKaKrB1HWyzgZzCGfTkkaWxzdmgwSQFF",
  "key24": "dfqrUqDkcbgAfVvwZqKR2QGBR2rPF6wVTGVXE1EXtuxULwN3d4rbtBcBjeuF3EprqacQju845g3R4mBUzk4H2cr",
  "key25": "VDKzmXk5A6DSukfZxswBuu5Pns5Qtpg91GBjpwY8MSGyaPiSP7zYGxW7FBsiG1ixCfoaZL12RrvdhR4SpAC6pxh",
  "key26": "2PywM8WPs1gUnzQNxbL8uWzasehmBEYeicdNNib7YP7pmWEiY36ERynB9o2zWK3GQKuGjYQZb6zurtPz4EvhbYvS",
  "key27": "3HEkvx3uie6R53biBD11tbhMuCLxdXUsgohLinmS3G8cYF1CUEaw9BWwFya8XqPZ6ENGtdZ4jBsCNwSjekacuHR5",
  "key28": "5KkraU5W3u5aiPPfc9Z4uoQj1GVFP5WcnRVbLxLPtZRFiJb4Sf83YjxUaeE2nh4s7Q1Kjjwk2kYdhDxoJDgvwojd"
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
