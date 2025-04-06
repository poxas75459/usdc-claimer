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
    "3mCMkxR5mAotvwB7Uw4RmtzuqmZHdyRCRJr4pCMHKZ8iHfC7hXhj74XW697PPqf8LR2fUVYAwbHickSWNdjkdJMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435eXHSvoRDgJMJSko79cjU2kNT27VC14zN6vK68kyWkskUSepXJHZxzLqRPpao98TN97mo1ugYdyJULC7Rx46uX",
  "key1": "51SBBCaQD3wEVzFP5LtdzXgG1323cDuBYCqCCPRMDZhL5kb5eW28hofpLGEKYVpnQ1PCEUk597Nc928smzHXSHTi",
  "key2": "4otq7c9SDgMG7Bm3r8eq6xQSupeknaXoKCT63ucgz8neoP8rZvMZvvFAb7q18zBaVRJEVKNN4yaxJxCkJMWp26qg",
  "key3": "5hAcopxXCWUttbmHKg4HoSuvT38rfAWEmQKRWdzNsXNzwYWVw1G8nK5qjgY3atso6Wv9N18A5aoC2ijDVwd7vRxw",
  "key4": "2qKcE22Fc9K31NpsvSQxYEZCVHNoGUVaQMDnsuUFzDDRKr7KcKPdbZF7pEckJvQAJCBQ3FmHwTFnNhYu2qPdU54n",
  "key5": "PSgf4KLJzLWoMNNVyCDYmH5qmJev2eKGC63UdP42arGKU4ajJMXe6zEB8H1EmR8rAD619htbBUHSp8VgYw95RUD",
  "key6": "29mqEGtBWc5vt7BztygsTFa2JdTussFQx8LmSdcVXhuPD1ozFBYf45bvcYv4x8SUWLttEppuuZgUNFEC8jHpDib4",
  "key7": "5BdoLokp8Z7tE7FQww1cUckYgegCwu22Xc28KzGGco5PiPvqmHJxpNGHdf317QzU5YC2ZZgKAm95bPz1U4yTd11N",
  "key8": "5zx5D5PayVaG53ma137vkjtUHmWwN64KbyyfBMZp1vtJkvk8sZdLxrEBSMQg3nvqkTTHXKG9rSB6Jj9Nym7L7dUv",
  "key9": "4amezwzx55cZZHJWn5pfia6hZrYjfqqizy7sVfvfti9EkrimKxL6TNk1LLcvHz8urMQoZfziddSrcjd6HHbYE5vq",
  "key10": "4stXESeQGfT7RUbpLeVxELkGhRusgMsnjGNdydUfqBHyRBJsLtnn1f49Ktao91qnW2LBys6MnwcPdzjf2HVyrGKz",
  "key11": "2bQfyBRGGQbcB9EVy5CTdzky4AfUb5jHy3dSdWArEs4RfXYSW9vnAuQxjX1Wqcqx9ysX8M962A7quZX7GdsxsGse",
  "key12": "3EVLzzTYtMSoxiwp17MibNZ9rrzcqRdcEgQJDhekubp8znVVrYA4pFRoCQqFusmVYnjB1Ea9jTiT1i3M2bGHWJZh",
  "key13": "54pWGb9FtbDopC3vkXGMD62q26zvndADDBCTFjR5Qfm1qfvvHpbrT78YVpxzCDGca2Z35bqpHQymkuLENhQyCmiZ",
  "key14": "31cAEx6CKupexieTNkWSmKu56fW2bNrahm73dFUZPNxj2DwVcu5NjK65ZPzDznqv3rtBtkdycNPyoopYX3ruMNuH",
  "key15": "4CL1wdUAWHQKHJhENUBT9iVAcUfiaiej1cRSDYK5NdsUHatn5Kf7i3hxLuewgRQb3Wh1rTBxAqBhW3AHGg4mAJGS",
  "key16": "3MGQ5QjbxAG88TVsapLLUvP9WnLfficSCP2uS9JxRQpyrxMJnQ4W4tCB7Auvhu68azvcHRFRgr6SqzFzWJ4xzonp",
  "key17": "4Ubsv4eqy9F3pYTyJxEL1su2edYr4zZNqFjxCH6aQh3qbBLVd7CxYmUK86Pd4nrj1BUZHT6TUkAVRYG8f6MTrwW5",
  "key18": "bp2yAsuqw1fuaTMxbyipQUzRuqdtHWQFN7ypVE86K7t5rv9QQ9q3tMVC8nWHLZ8Us4BLwaptoPxwD29e2MDukXm",
  "key19": "FxAxswRRtGd8i2MZc1wQ9LVN5GVQHNCHeStC7uuKK71HRLUSzya8uK6B9LKEdJeQ2XiffzwVKat6mAFZdKs1J9r",
  "key20": "3XDpm7A3NSMsqZw72h9iRPoLKcPCZ6x64fkyFMTJQPXdsQ2ogA1d3QGyYxcDhDdY1DC6VAS1JWmYpV7CF5VPfMqx",
  "key21": "rxVB29DNJnV5cU5ZU58o2e4qUkvP1LTtxA2Si7JXBHYX12okLR8YcPEHii5fttyAqXLizuMh7bHhEgRLhKiwT8W",
  "key22": "5c39E92YmNYR5XsdsFchRAuVaJsqpEhRmT4j72mn3byABGoRuaY7BFCDXkNRvagExeU4SbQKLywLZp29Ej8kb7o",
  "key23": "2q9y9mgFipxiSpn6xrcrK2rywMQfkAgT8rkTGcWXfdLK9QfvS9sx7F6nKcnPvondTUggk12RRuM2BZEiZ1JkLUTX",
  "key24": "J4aDg9mU6zvtKR2dVFrExgQfqVra7Q5BgKu5hYyz6vCecBy9c1Hkt543r2SwB9Dy5uZrA4YepUkVkcvx4rrppfq",
  "key25": "5S7Ld6WttFqNHkg9KkF9HTvh1rPAQtnDpL6SBrYB7zPc1DKhNyk9GJ1SSFmHpw2dXYjUNzdYNtkUSPRsKPLos7Py",
  "key26": "7YWLFBxmU9NYhnXxsAqq4xDGzsuarkN1ynMKYYgQmMMZZQ4dUfVnFFPVh3nrZofdKbcpdQmXDkr1f2vUkM5J9cr",
  "key27": "npTht1xQrrt1pUe3GUXefVMqYB4UhS7TK4kkRob7NkEhaKmXvynySE6CY7YYw11qEcRyQHuyDosnatsP1NjBqRy",
  "key28": "uL7Ddj78hw7c565KPqnGjQ2aeKWL6ZQ1jhSmJjnJdKvcsxjcEATNxL6rTwHrmLTrk1xV3digPMZ9VfKDNCit96X",
  "key29": "ky6cfaatByUL9uXfLsbg477ACfWMkf2ke2CXxdcacBTN3MRBVzBjQLM5nvfm8Usm8xRJbNfXrSdfBu1285Jbd2w",
  "key30": "2seS5v2EV68VrV41mjm1xqvfKKZqhsNRf7yCmMnDgoRGRmM6GAgrK2c9RaD7omRQR9cnrWNzhJpsRn2eY8ZrC7UB"
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
