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
    "5VZyUszUbnJYECzUQVt6LqZdyU7zgcEv4gNn1z4HnWXsqb173Cqg3VkNYmN7u7EweGRRGddWCWSJ5563dn2rzQtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ceH8hcgiXpRTUJSpmmzmSrsB3NZFemEh9rRe1bS48NBiHvz1cx2i5AaQFwtu752LKjDmahWrGPFG387JfHGZZK",
  "key1": "5FhwKBf8snoMarfQyW2G1KZVde7r9PhFcBqG4QTkabv2H2zwWHGdJrZnciK7CtDvJk9r7GzGdKUamLskwoRFScmP",
  "key2": "2MNmkfug8S26yBBtmjWQY94FwSH8DYk2w16thdk59aF9xzdR97isrBEAVbatwVjtuwBebBo2zHHqtkvFsAZkNdgB",
  "key3": "5m3jtUZ1Emxh2c7bRftiMAXqrycWUbVpHgyxBaZnKg2ifamBFps8t8PH97y6i6EGvkTQ8taqoZUP4Pcb8k8jQeUt",
  "key4": "5bP5ZzKue3be4NVczsfyhEEQ4U5VkhJqvmgu9AxEpGN6QqtsLTThCMCC5427QgFY5opd5QrrWHP4qzSQufBRCYqt",
  "key5": "41NE1HXTBbktGESXsmdWCJNCG1cb8c8XN9h1N7xW3c3WqXzhQjEaMgrXtonchU2fB6VzZJhixUhpMMKNwmVyAmgE",
  "key6": "86RJB8PoMMURDRYSsEM2Ld6RwPzoE8uuF3tbzH1GDqF7W6kwu5Kb3gSDvPLp1TMNCxzRLiNi8KZarLvvWyNtvkF",
  "key7": "5GCpRBsNfictz5da4ip3LUEd4cQBv7gkH8heAgj9b6EJK7mrExwbDtMCpNqoWNC4yaDDuMQ4Do1uj2M63PiY3jU6",
  "key8": "66dkTzkv525MmYQAQdpSQYyzHLiVMNT9zj28XmPcwEMzgtF6DVv3hU4M6AyrvFVdLie3iZcUhHKySPhsqJgsMf4A",
  "key9": "3Z1p38N9ejex5Av1z4hdTEKwDXGdk87SR28PHPQWywfi79ErfdtGkRTQAKg1wN512qyLDXHBymWksecK8anvLwfZ",
  "key10": "3vFrjoUthK2ieAY5sBMyerTFoY2aWFiE6fzpnihniqAC2XBPdtPsztga49vnURvrAKcgfEB3aUXvTA3CkETrhC75",
  "key11": "56SpnfrsXmVTsNK5xKvM5iEi5btepapkRq7vumKtfNaFqqruSGaWYojaRgGevgEYzP6UQ2dSL5TneB6BPuQ1kZE4",
  "key12": "4fMn1buA4tRbXmc6z1EMRaPhAviZJjZLvEddEWFCZi6HW2D7Pe8i5FQMegnT4p6D1wpEN3MdtRu1Lbt236Db8VtC",
  "key13": "2tcL46RpcgDFuxbrR9NjiALaBPQShmTkXcRkEGN7JsQAqTqJJxjk8fVWg3KGJ6tazUcXG5H6Ni5WbwqSbgvPfuvK",
  "key14": "3F6ik6baDPBZZLeK44ocyNQQpYWm8wbExvgfKr7XoHhkftXwPzXqhAjghJpajaXf4jjzjrL56DEX218V53oEpCZQ",
  "key15": "4GYVRPRYWjZ4Jdm5dzHW72N399Fd6mnHMk1VFUusS5spyjJaE2JAa1aXLBkrwnjgzBTgyq2GC7DuDapPGB8QLsA6",
  "key16": "Vd5ssCbArjgexj8Fe4LgyrTi4VnhDLv53UzqyKsefEGYUBNnUTU5QQ7m4rRaLSgV9C4PzfNkMmeKqFxzDHVKumS",
  "key17": "48jke2r9vQ8s72NLqRaPDMTFx9t7sScXgN7CpujxsDBNkphbNJNGADD6qfd64zrUJ5vkw4FvP9oSr3WNyWkKZ7tv",
  "key18": "4rrYAVmwMS23bTR2KCbcku6nep2HLZKoR4DUH2SpJet6binFrG7tbrzd1ubzBMbVyRnt4z17hHvQdG3yF3tgxNwp",
  "key19": "917NYt1xzH5ncgr7mgqznvhHpkVZuV2ar9d9eEejhnKF1CGB8TaDwKPMMf1uUbRzQT3bf29vz3LnyQBhuKWf2ug",
  "key20": "2cPGHbcfCniZQRP4S73frfKGTKbAJvdKResCE3tFx38VVmuPRntXyWgmrmRJwWbgRwbhnvVYE2NC1juBjLPPsbT3",
  "key21": "duatPmWNb17B9fjA1wUeJXXExaN7NtyN2UjLLQfuf65oFjvpWBoSor6zgmMeM9Ts2dBcnoDHnnBzgoNsJQC7cMH",
  "key22": "2HhxA4s3GsUZp4WNzZWUN917wLZ5rE9w2nJzUjTDtG4squ6ZNcbNcF5eqm98J5ShxZcqw6JSqQtq9RjjrW1e5aBo",
  "key23": "5m7KZRTDLUEwLF7fTBv2E5EjtmHSKUhxC6PBRzxPXPDwhE3QS4bUpZzjxLrtxqdANFNDATbmJSuqVHMMi2t6E4Rq",
  "key24": "57mnqjH9shXfCZQ7MekG1LyM4fLzGXPU8ToZg1WfTfaCz3VwqRXwEqfysgStYsLVgmbKn6UDgvqCPQbgKEynavz4",
  "key25": "4cPwsJMYbsxv8UC9Wb9yd2CP5NNdaHrzNHKyRuYsP1Es8a3J4B536UD58xuHNepxZLNEQGVjnUSEjSEaodPRazFL"
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
