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
    "MKsrFQsi7e54KtotHjaxq3FJmAhWRQFxVNDRcPKNVpoSDexNzMK4jTGVJQeADtPEZSS5ZR5zHxGpKzC39snLogZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egEsL2uEWWyH4S5VqKd8NXjYAixL2pLVJaCiUErEHMtZKDhMQPpyvH5q28EHpuxCs23jmZdDAQPdovu12CBbBRz",
  "key1": "3hJu28pAa7DinAyvVNMrHvgcJjwG1km7T8RT3nE5r3fRyqJEi5GnmaWYv7eyWCoacrKXHvZGbvx7Vm77MyRZV4Q3",
  "key2": "54q6ViUwBm8hGD96kywuob9goxcmCgoiuHNHSxKmaBaMu1D4TAQJwuTt8k9matRCbjH5sibvJKJgAC2PvCMB4WEn",
  "key3": "2aknqPiz45ebrcwWKxRGVsV7bd3c5WVifT6ZkqVJ1i7HbKLQM32kpoLQfS1RAUBxkf21SAtbbxfFmDDvKUvFdnAP",
  "key4": "5qUju1AeDy57eukfavmKD7hqoo6Z8DMfuhgxQEUgPcZv56hxBrfKbijSiYiatMBJ4W5omSFMULfFtjRji4C22Mys",
  "key5": "2a5tgeWaCzzqbEP7P6Gfu3pqEFRDpxPF4w92bpqzsDvRqcZcnvfmDSX4YTQ8huEsZKwooKSTFWWd6GdkPFty9tU",
  "key6": "36Tjoj8sqZ5ZCPV2RDPQLAS2hg1mXpsSdVSRQQuy291pjXNiKn2o2a6DhM4cUdH6qzkUn9wbyiAuifSQmA25DD6p",
  "key7": "123i2kZrj7QzVtSZYM7BbXv4wyjKb95ncmG9EexChbiZGBqYX4nLs1oP22Ax9C2pLtmxY3kXeWRNgwNvSqyLa8K2",
  "key8": "5sgJFAaLtYvuZoeooqtFHzXcjSzboa8x47eG1FN6BGCPYrf5irvTZBZRWrhqEBmedwD4abY57Vsai9UeumwV2tG6",
  "key9": "GwGV83EFWYg5fRRfyenMPqUm57aHwWx79EkSD7qHyc6D81iHPs2uKLXFxQzuuKKoQM1EKAqn1A9vcVpHbPkf6jm",
  "key10": "5aDd2Mc6yhttDEaU5ghRMQXQUweoWF1cfMETT9CTfG1ihhujeZA7rJVRfhT7DH7NBK5HMCCAfvXW4V4SSF2rRD83",
  "key11": "5846U23Aycr7yNeroAtHMazCVVntcdY2XQb7VQBqgvyrWDWtUJpW8KLhNMuVRw7BNhfoe4q3y7enm9XQ9YCR1fLE",
  "key12": "3zcJajzV6xgpWHAe3Uu94LWWRpbq5RWnpC2nYFDm96rQ3mpVqsGyytsDJss2ce4Xu9A3xwNqsdJ4LnwPaEvL36mv",
  "key13": "4JNQLJLZFJ2ouXoqghEdSAcmrYgrBVnmQcrVDZRfm1pCVfL9B5HqXwGEizwwpEpxLN3BHHk1o1MdkReqxoLekmSa",
  "key14": "41PLK6RunJeYeUE4NWEgLXffDobAzj9KGdPYwAxwd4kaHTFoHHz2znRNoxJmnFtxfZMDkNkEZQj7DTV9F8289j8Q",
  "key15": "2FTJJDZkH17LMZNvqRRa2Nvapma3Cr2gogHdXVsEqdemsJuwFhd847TU4od7tL9nGVjixMBDmspvLyGocMwJdS9J",
  "key16": "5H8yWvrgzbZhsCKfcr9aG1sgDeHzhhbzHCUEDvF2odAhxBG63TqKARha4QxLWRVdpXtTe8TRxHWiHJQeUwSmMPqM",
  "key17": "jX9bcs9sHvjSExsVdfN3a53TgzUPTXW7hBgC8bkNnxSH9yCrZD4XX7eWLUMXMTd1BUiHzyQL1pchRtBV6m4SCav",
  "key18": "567sGPZuGZH3Gk2tkioQThYRsjNR7K4YbtWg4zFffKufuoiSeXp3FaK3Yit4yb2tscLC6xC5rWhxh4wZMLMhhoR8",
  "key19": "4BfA9AUpd23LoRTRBBi8yBKqN9v9X54HTknFCZbZ9tmFKUqi4ZHqhgZxTZmv47RcVx7Dg35ohDiKDZhRDNTF9mdr",
  "key20": "4u5Smi1Zty7hVETYrDSLvdm2TfH3TyRGmeFZPu5XNMxSwkdgqJSCZuq6JnE3KZihrCNnHyNJK8nmeG9o2CAtSUaU",
  "key21": "4Roacbf5i1HzwkyFij4oR1twGiKLnQsgtumAG2kqiXpB4VsUW5KPzoLyZEQE8qZCtZbcKzqzn16tRK1dDvvWk15f",
  "key22": "2nTWT96Nwagxd6rmoYtQsPfb272URz2N1bRK1pxxovQR9vwefEFqtVxYS86NETHJiSh4JVupojUVqb5QHohfZ6ih",
  "key23": "5WAUNsEHEi464D1yoJvDbj2moPxkh7gkLkSYQYoSQYuD9ppjGtKBB21yWnuHqjDtCkSienvvBYwQxVbFeb5rsLmz",
  "key24": "3165hZJDxVtmrAduoWZvDnjgioNejhm2jHjyNzqVokE6kgq2wP2zXYXk4Rjzn6QWqEyVuwGfNKryvKbYr5CPXGvK",
  "key25": "3cH5bvUqGUc6yPCtvUBAnFnCM87VuY8DZDRjtjoru9JYjYV9wQhyLnzBbjaZQBceA5ekMRXbUPm3JRw9PAeYUH9a",
  "key26": "5hBDCXT2esG74j9R7m66e1ZAuT4MGdbZ6qFP55ZtEG1Et4DAYtJ5HCeC34hkGto5H7vJebfB2n12GM8bFr5zQSga",
  "key27": "5sr3PL9cJHTvkQEoJT4Fb6JPVFUiqUsLxuJ82JycrNjh7GYX1Jv2h7SPurg2UbHWvhLAWANSuJ4ek2fFeuFgHGGb"
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
