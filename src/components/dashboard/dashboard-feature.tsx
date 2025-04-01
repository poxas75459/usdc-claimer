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
    "3jhw9WdG7trYGT5LYwL6K8tA8E7WeFdKWHf21iMRQKACwFx4NcEqPwF8sBcuGvDxUUvtnJTPUKA8E1xzvHdX1ruq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "583WLJnFkAss5vESq9bD9r3cNhEoHKStx6pBjfkuzmAAtpCNbHvaoKc53SsLvubJ8cV96fXFDsQPLtCmN3pACEXr",
  "key1": "Co1AWHqqMov8wXEqoTECMWawjYCu3pJ3FCY2D9HTi5VjvhkxKm9KpEfHc14HMY6aS1N4rrGrf1Gn2gDvDvdiBae",
  "key2": "2orQs3oTd1dbTyg11e64iwmo6upvG3TN4v2FfRwgjApCCvj3tPwVLNPH5At7cWSV6QkLAV76HHmwp6fJe6a5zhpg",
  "key3": "3ck1hUv33ambXL1HE79mbhpTsMv6e7QYpkvzkSr11JJmGsb8kVyS1ugoMAUKb2kCpovxLJtsaG8SoiBK1TVgSm79",
  "key4": "2eLA93pK7kMrAUmbBQ9DGGWVmSwse6vFq8jkA8whFL6pp7Vr5Wu233YtNh8pzLTeDr9hYAXLbdnrDoPELcrWhmBR",
  "key5": "4K6L9NrFRgNPQtitL3QuoAWpN3YrZid85XKWpMhJRzPMUU7rKFwf9cMJK3KUtVwiN1YP1Tj445hWnmXkDsgrirGD",
  "key6": "2kkPUKyFZcaEpi4yStGrWZfDmt6PRqp2Hnbqh9ZS8bZdCjYP2gMBuEt43w7jNWd2qV8XnWKrsE8hVCAVu7mZompP",
  "key7": "2CQ9McxeoP8YVZyUuJYNqNtT4r8PtwJk83cQLaCCRfzYbhayPsiSEjnjmcKy41uWPWsXKm3ZV7PkaxP4UXBt7Vyv",
  "key8": "fan75x46j1r78yAb7MyLfZsw7hXCqgkMBkHLSUAANZAb9XqkUhrX1ppwibwFqwKT2c8szSvaheGn4h6UzSPekMk",
  "key9": "5obj5pebZVsadw1Ze4rgnBQdxj4AqsPUms688fw6mj7VrsbiPDmWLpsTtMhMmrzCXw3pgnqNdPTdefRHXDWTYj9F",
  "key10": "G7ooKzmY8EMBscmY8j7Zkh8MJh8T2ducPZtUV62SEinPjzAqn5hKEgSesmQNs4YTD4HfRfgUhzGEkwL7LCB3hMT",
  "key11": "4aZi6f3VWsoqxuByQw3aCDDtxkNUgjKihDhhwENDoSBAvJwpVwBvMj5oibeNVacWGbBSdkdXvPVhdAKohdwZsZZw",
  "key12": "3i8ZM8XQRHEE6eS2fqWi8Dpz5UyiHJYUjHo81XjDuy5vx91o7Ab2oQFrvXMXjJD8aKdZpgyNzd3ZcWiDtqxWtWgG",
  "key13": "2QgtqPwTAzfjSnRj21zWwt5qhNhBwQhkLA2PEpdhAGLKmyYX1k9LkfdXNu6zJbJY4nbTwv5EcmBb4EDgUZXDoGFx",
  "key14": "5QriAWHVRxTSmaFk7Wu8TzVoMGE6vLvVyuVTz8y6ahxGa5pmboX2NacmVLEdn7zawg3e69LFUn8zD4w2FoV6Phyx",
  "key15": "59ocqxzVEDdx7M819ub9hxYxWEKNBgmRCmTCpNdodqdps1n9cuFtx5nK8vAFTw8ga7nZeFdAEFY5ZdP64dJqnv2g",
  "key16": "3trrfxcwLmZ4jCYK4KA8vpTcXgZQKKj4C13wNqvsB76yomUvUPfiHWDPBvfTMAZGDzEffjiGBr8j6RLi7pA9b7xB",
  "key17": "3bpvPsuRKv9cy98RQ91YQ8VarupbeToKE9FxZcVJGjBPm6JCGRmmUERkWU3EmYFZdE1gxDSfTtBGZhN9pXm7ixQi",
  "key18": "42dkgGAPoKpCZNQdZbP4QeoXwoF6N644t1QzobnvH1Kemn9Yqi6t5hYLN8vTEhBWKcKPmAFzZMsHQf1kyHa8Rn1L",
  "key19": "5sqoCP3YEzhhvLZxmU6KtSunc1XQkgAsm3mQc2WCgLqSPTC2Hio5iAzgzvyza8mvyFEbWMdCLicKngL2GaVAtjG6",
  "key20": "2vhRJQMKJggv8QvsdABmuwAosquqnHHSErALHyZRL34QXFfy9Xw3EdXjFK4TWUC9Q31UfW3rC1nADxaGmP8gzGyQ",
  "key21": "5jgP8jntFruKS4Ku5F22M4qzdbr6UCmFRNFPCMeRvsB9ffGvL529APVihWE7ppc8sL1GXeTzrq68PtYZdJ3vHZUG",
  "key22": "3ZBbQjRZXfgzSq8GoHAJZyd8YSwKU8PPq8HE6onKKUPaQapLdu4XnRtej3Bk97YTy6WXPy7Lrsvnnv4f4epRq5JD",
  "key23": "3okxyv8pbdHA6WYA3kH8xg4mS81Ny5oq1RXpEkZqxi9S4cZN3wvZgqYpbao6T3gKFkChigGg7X2ypJ92mmS6s3yh",
  "key24": "3QwQLxTtUdocPfr7vqx7ebrdVu88PZaooHx8o7qAj1DtrhcK8aUC6V61WSgBpeEsfLz8yWGGGzECSRThCYEaDYJa",
  "key25": "2nkwvPKGiCbJJ66fF7q3f1pP1yiogQ6qiGjHvBXqkg6K8q6u5YPuXbBRRBuENwj5KT8c95y5i4rsDdzWESDx9YTm",
  "key26": "31QoKGTRzx9R4ZdGMmLbSqjCnfmVyQ3MAB6Gaob56AynBW9roJiBFK6VG2uzNiEQDprNv7EYabvNe3tkSdt9KttV",
  "key27": "4wyLCgqjZL54FucVVsKNUGLxYpcwABxvN29UAmKLkMG1XKALgHSbTELsQdgPeLnKSSP8ZsY1CRtZ1wGFvt7W95DN"
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
