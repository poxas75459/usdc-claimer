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
    "381LkKazmvnYVSi5dnpDM9oCD3FRxvAt4GHCdKEe41CMBmWZWcBig6tFAHBcQLhVHSRYxo1CKqYq4X7CjskaBGyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42z6aKHVeBSv5yngFKDcyvAvwEsd5dNU23j93azvFTssHvPC1s3wcmpbnLHudA4nH7UvBSsLcuDMAWfssCGMhcwV",
  "key1": "5WS2bQwSMU9XPMCFvye6AJvRdmSTy1aQg2ZR8qcKB4PPs6VA7xSusC6Lxsk38NtBfWc1XwHYZfozPJmZLdkcKHDC",
  "key2": "4ExfyVCr99tUsgeDm4V2EpGV2JweGHY9Nw7wyRMTPhLjUPxeqvQnzuA3BUqLFqgaZCu4jTFnW7BpAJEaqvLpMj5P",
  "key3": "3EnEfpDsWjLRNXEWgHvwQKKDPtBUWjF9RsfdiFR1WLd2jGsqztS5nC9oEjngnvoPFxkWiXkxK8YpjGnuBgpJnLRC",
  "key4": "5QwCzRNdvM18CHay16VVXLjLPE4pkbudE4dSkkwngoiiUMgcMA5iCooXefzb4nTSXFqPQX9eL1YZ7DJbJXQWuS6G",
  "key5": "5AdeUBWLVpR6d4cWbTdv3p7iALW6u8kShvY8bvGHmbMVmjMFcsMV4DiYx5a4KPjK8pqBeJKX8VAsz4HC38sMMpLm",
  "key6": "2iaXJNWq7AQPCjeE6QQW7dHjnGCfjGXUGzDUtYJDvsi5gvp9TJnHTbuG1EKK7fPtxRDYfjGg5ufav51XNPDqaMXj",
  "key7": "q1QQ2ep2R9wYGuMqNwcxLjgNRk6V4nD92ZHkP898n99Y3wjEt4ESy3st7AkwbSinHQcD1Yd5JgcuDLaPhTqsKHZ",
  "key8": "2vV76mWkkm48EkkbXdgzdjXMLwYxd7EPQfU9QT5N7yRxxLBdhqh1CAdvv84Qjpz2Qyjeu8eprQLaE9hRoo9uZGoN",
  "key9": "5s7XQAHBfqD1DoiTJvPEx4teh4XrQPFgRjyVxvpewAHM8gywHuzziQPvRVBzAwRPjdWtZPpMEPKjeU5ULCRhkPWY",
  "key10": "3GbvgajcBMptVN4gsPQwuH2aX4uT8tpmkhdQNZk4t8PuzWsacRYefYKLafR3FBBRHurEZqVp9AAA8fUFZ9NfBBSz",
  "key11": "4DhMjHUwmjyA2TCpN9zzCVVTiMcHfDN5vaeBYdQe73S9HuEsjL4RFLRyMGz4a4fFnjmkTfpBbUqwjtJijAfbjT9E",
  "key12": "43ofKrFYqYBEzdxAx7ceA2jQLmWUtgemeYJzWBcDnGa6KiRgBz77829eqNBZWhB2v1ZYoV96sXpGFJdqSnbNvaJx",
  "key13": "3bqF6dXtf5XsJuNDdy5AqAQgHY4mSNaYjD9f9XW6k2Sb34aQrdfowCDdEx8cpw6pVxuvhfVTtW3DZYwfhWiy2Xks",
  "key14": "5d4EQRvpEtWQKZgxyZm7wSp3j5ap2QK8KHDrtheLPpqueew2p6H4pBdAf9fwPDM3LQ9PrMDJ1TfRk3nXtB5dF9S7",
  "key15": "418ThfdhQsejLqwRf8w4sBN2JAEGVg7wJQuHkXKPbnd4pkL7uW5j47RJFNFN636Qg7HxTzkwkgDv15UBSjW19fC4",
  "key16": "iDWJgB6X4xJLBCos9vux8ZCS6SsY9bHW9xdpUx5KegktNj2ud8nFqAjFuZAuWb9Yasdv2zmV5KcqkrefKmL8npm",
  "key17": "5PSbw1MPVeoRnLi5yxxeweREybjQdtQwYDZHq8dUZNSYJkoVrBrYAYLbn8eBmRQRYXagQFNcV6qMFrQ4SB6RfCrZ",
  "key18": "2UDxizKiH1u1Yt6fnyQWzG6RnmAMBYkjzwtyA26YRkZ6CzdZ83EELyTMzGYvJKs1XEHVkkoXNTvfLqyroR4Go6tQ",
  "key19": "3d7mf9h8ukLcQew2Uz9va78fM8mVfuoUFtcFmmkRgy83smG8L8ED3qDvsJUavi98ARuUrNw6p19e8AKzwZnYFZdd",
  "key20": "bTbukn5JiTizLJDKDFTdLa22hffYMu7ERV1XDGYsztZKqGhZNBMFLar5vbS8KyFbMk4GxorZUXiyCAARRUBUjZZ",
  "key21": "4BLBpvNV78z2EmfyMMAhBczBotqFwpkaPwsTB7o4ApGopLKV8LAVJzBoCcNpBNBgZ8eoXqNaLChU1PFKFw5mMFvS",
  "key22": "481mvGY49xv2ftR8VkM8iDtEFfMUqnNa9X7JQDnrBhgZ4LNM2MqF37T7VtNptaQwSD1N54EMDnfdC1R1PvpNLcZB",
  "key23": "3UTj5HHyQFTJ4ThsHTkL9RKjvJsUS1Sfpt1Qzb81xNfbZtoZbMndyPS9kY7W9ypRpSpG5zsFgDmhQ9FR9dZ9gi2t",
  "key24": "5MKWB8dj4qLWcsnwUy6rVCBRVvdFJyg164Vtt47Vxd2mu6VLTQHgosCz5Bx99RNhrqSTfCcVBrWVJJGHUibTxWQa",
  "key25": "2CyhsTBdFAicaWqhMcB55zd9YZc7LsCHmB842tJdgbPW7htRrrBE5JPPFwFGZDbgkj32KnRjFC8byHBb7VSPE5ci",
  "key26": "3biP5egVbq5FqrNQAn4obKh7oA6NfGsbDsTMfE8FigFXTB6iH5ySyNBwc6g9MKJZbpNSCafEXT5Nujho2vY2KnwQ",
  "key27": "2hG3XUW4Arr6gnM3eu844MaGf8gsGL5r96NH4u7Epc9XDiKUoXBdyHFaWGQ7rjC2KcQCNuMvBWKZBsGM5k8JCk2E",
  "key28": "4cgPDSfMUkxJCdttCsnW3gVuoBgNf9x8FjereFzcUPGgESvMY9vgiP4qYBAPiohiquuEfU8MeGKMaU4zSpYhP2FC",
  "key29": "3gNrojGU324TPS6DkbFbwY1ZV9CCUsBjbXJjfeEN1fDuicsyGseGwuhYvSRP1PHgunf7sFA9pnk2Q9vAHEPFWYDk",
  "key30": "7N31PmgqgmQmV5A5fMx9jvTP4d4WMHJ72RNXrtoKmYQxAS2FH6W2g4XPpmqxYtDathEDdYYC9s7eDCgiFx2n3iZ",
  "key31": "3D6sToCMTH4aqVzsxbvqXXUvWxgymWAB5itTRY1iJDYkwKcd8z82nFs7shvXwTuwV4zGrxBnmiJecrKLjU46xDkg",
  "key32": "3v27QYfpDhW69uPnunXMSNuc9gVSEodKrEKrnDiUdKBcKFmT3auktCiir3xma2SXWHNetriucqwoPdJDKhfwZ7hz",
  "key33": "nZRbJHMJkkyFn9pKusDzNcbv1CUJibP3Db122PWMZZ5NqxVV3oNj9Po3FvgkC54LyWAziZMK6FCSeU3QVVRs2BB",
  "key34": "3MRPpuaYN9aiWbGjvnrShg458mhV9NpS8aKza1sVaLUf3B14E6Qmc5Nas7E6F1xxZFe9GMSPA5sdJ4RBAt6aW4KY",
  "key35": "5n47FUthxXnwxXbk4A3kMZpd6FQTMmFJwqaKRA59JBJA5tNb6DQBj695BPMyMb7sgGZLu8WUJ6afHhpjJ87v78eX",
  "key36": "JPt9e9rPmXYsnn5x6g4h8YZ3P3bGDF5ECqNdLCtsxGGunr9YxGbDgGoWSpmL9LtPEGprXp9t1pbeToGziMVnvX3",
  "key37": "27D7kgnrk3JaeY3rBqWRZQ5vKqWpaR1rWYReoqpkMwmVSD9FGYR2ggUw2ACrSfqrvMi9KpurLezcCHtN5iETrU1v",
  "key38": "2YQkZz1J4Zw3azNSPfPEaZ8CdYiMPhte5pRyNkqv5g5rVMKkm7sZvuexRcg6XRtk3P6TaSp5dVsT72PxTs6t1Kg4",
  "key39": "3q5EWRAyHMYnygRD5kcmF2cMmRM3XceHYNQTZcwRpfpi6a3pQNkchDCgLd3NYpo6wfmpiYPrJ7YpHR8GmsPzc73z",
  "key40": "48HJ4n7uDL2MWjTTc74hu3M43LsfEQFJsDtpt7T6A9MDTXdRLVceD53KjJ8kLu9efwLG9PtBGGt7GypZqMXNqBgs",
  "key41": "mQQrur2XhS5PYyXqdvxQWzkBgpr42mvp7ovBNuCN5QS6Y5cenZojbRwqn7zcBQ79Bhb1hJkNyjfY3tZnxyz3k3p"
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
