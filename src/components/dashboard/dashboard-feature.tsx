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
    "55Ji8fodB5n5YVBQocxqS6rGHvGeg8n3UWRVmggs9vYnDPR9LgvFdjs2RFomsRj8TXDaB2m4zpx5PhtyUXCE6LeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DdHmPvWUwgUrb5s1LGkEKbc6wJDKiMUT59bRVP8RnFaYDJM3EbNsZmdZ1enMi7TjmFbYkjRhwPZcbGTAJZiB9Tu",
  "key1": "L25sXwbDcJcJpKRetXSH2JYUsZ8VgfKwbdZzW5exoCACDE9peuAjneJeCyCxEJKC4fJoYqz6R4YEa3Bt8vH1uSU",
  "key2": "3jSBovym1ShXdwg61gJgcQW8pguhjMeQtPkMjpjE4AXc5VtpySzyFp57qa1v2uYqk1xTiQW6j9xVQk4MnPBwy5vH",
  "key3": "2RC7K5hQmfRnATEo9LbMwPJVUyypGp1edZTnPjkQcDjKDSG81mUSYtkuSMFfbuwbKLZNG7XQYVNto5ZY5GjjgEKE",
  "key4": "5hi7T7BcKhBFbrVt1ZDyCwcaNvdniTtya5xSGpkfFLN5EVRwXsB4X3qyvFWBvfCfJSQfLX2c5xR9g6MXSHcdqAdF",
  "key5": "3UbrfmPXbEzpk5TtkZaknkodfWQA6EerHvssPpfRwqyNPY8bcXAhrRzqx5gYgmFFA9rvhZP1pdpBNQ7nDVtZs4tB",
  "key6": "2jqztJAK7aUzCVKxbzNQa53vpUEGryKjDwpq9WVXdhECyD2NnyNj1jqfYKSac7zbrMkzjwLJr99dH38A5jY5fPrN",
  "key7": "4rnRPEHjRtmehGdw72s1kFmEgYNNXZMcrozKePNj7w8PLRp171KXJuCxpiPQZKngZgw4doVCduHisw7By8K3AjPi",
  "key8": "4HcJJU6htrpnLKt4WTqHzuAmiCKhf4HRLY8DwpSoGko37LQjnNpvQgbE3SiAGFySdwmy9Sk4PSKYLSdzosgvZfRS",
  "key9": "3vmTcSXSQdjYs8ME6vMMmrBbSgpun28QsSvywLKiWbyPFMypuD755q8MrPXyEJjUHWc5M8gj1iAbhfoNkfadx6Nx",
  "key10": "5NuC1bQdViLksZKkhFfqKZtwwKmjbmDHHxCB7enUnNivaSUgyQRCjHWoicEZ29uzRWhBXMYtc7GCt8pftfKjLhrd",
  "key11": "3mpKzah7VPoQANNMbLModTRxdgYgTbk2aTRdGyqfQRtgGtgjdAE243G4epGdMk2Vg5HFQTTDDsvmDjh5aNGMWhkD",
  "key12": "4HxLFjxStywWfMFSghg2Bie1N7hjhXtzmyyNkyA685MJizAG7yZxUY8gTRxfz2T4B7bD1WksccKFVN6Sycg4xhre",
  "key13": "2MB6bxdrWzX2iMwa17ie4kQovGUwdCBsZmf2fAxv7w5RwSnPZqkh3HWpzfGed2L5SwTx2Rmce6FHPPhfqkKSsk8y",
  "key14": "47gLBbsasHA4VWijjJ2qGEa73qq4ZurANCWz6UznaSVhsmQXdQEGJaVcppJ4mQJQgeiyMVNx8nGAmkGHjLVkNUci",
  "key15": "5Yjds4ccCcyt4tH7EzJemT49BhiD9g2Vfud9c8ZvSwtdUYf1RCBSen9LfR78ZMNPPGvSHYfyQ46yKjuykBrkzm69",
  "key16": "hqLZZkuYSU2f2NpKaegbsa9bwLLA36Wjd3bAEGxDeybC9TeiCJhibLQWNgV641ZxitpEjRz49LvubdZiqbBXcRN",
  "key17": "4spGsJNe81srMpynfRRWdEJj9dvTWNhCv9MJ5uDELxJ1ExiAy6JJxhoqiGYRajkDvzW24SUXYHSC6DEzH5XizZML",
  "key18": "5CkxYk2JuRkHwSqVe5wQ4pCyaLJkie6S7gAfyNewqgPNg886mgCQyEcjtmc7A57SFXn2WRkQGd1bBDHx6UkjUZUQ",
  "key19": "3mEdoHYD46KPpvVuaumq6aqPyk44eXDmj9YM6nzBJjPwp9goezB6BdK5KvUhVcEhzUJT4upTjcGrK3e2JTjiyJKG",
  "key20": "3oGnxhzg7wx7SWHw77WH8bzYbodNpCyTt3GkyDToaJ66sK8GANt67Q97H7CYhEebZTMmozCLTdZnKe9hBwXTFpcY",
  "key21": "5ZaBuWMSdHJv6cAjQKxrvCTzxPp6fWxv6joERgYhDVig5yYPotTcxNk3AzyEQWBsaLXk6km2RPWVWh6jjm1b2WoU",
  "key22": "3yTbFxtBVufNHzRQAfjxvgJh6AcyfzUA1Zd8rYfjrYMfqUHFhqX7tT7bZNABXz51GyGb35Mm55QRd5BoEFu75KvH",
  "key23": "5Zz5KR57X1ZUSAi5e8xyg999yoK1xwk9nQPm3CLa3UgN4W6rBnZNarpkwbyftcbPjxSujTZvjLGXmGa7DHTqjmBh",
  "key24": "47dxo6VYTfj1yJ921WUvyakqMQzojMVy1Ai8Ra35xWHwuCtucQ56PFbEKV2AZvZrKpSHUUV79nfAWosYJgNUPUb7",
  "key25": "5erFvAkk9bS1t3Z6k5eqMbRbRhFeno15DS4KnXnqySzA5VHNgqDLPjkkLJ6EWxxbhGCJuaue5NLaruf4pTburYsc",
  "key26": "2XnCou16w5V6Y1WUmbcCmmeFbjTepNG2sZHNyNnczMESYbE4DAWYfHwzmk9BVSp7GxT5QzsxzhSe4V1wtiSPUbP5",
  "key27": "3T2sJJbsZN4m7q1KzR3kGj7k2NcvH52K4Fh3b6V2UzVvYrLjbGz82HQ1faJ3ZYPG8CkP7MaxKVc29CfoFSbbaJpp",
  "key28": "3QDfhMbrEFwoFVNFzf5hNvaUB64MNWiFAhhRWofRsRmCGnh4nrXLpKKtpcdTqN6ggCjBsjCtSLwdxVEJCbJMuoWg",
  "key29": "3fMtoHvzVovH3shLmywg51Pcv8XTeqboh2D1NkZMhKs5bC7R7v8sZBqCUNX1E58S8i5qZyABWgmuYUrVbE9niAb2",
  "key30": "3ZANNzkjaFQe6TWoMoWwuJ1eKwLejeFvSCV7fqkLFpp8mzW23sJqCWzrD5owWoeDoBqyHC5MBA38qzvrZd7KQAFL",
  "key31": "zfwy3KQDXkMJes4BtKPSiA3Cf687q9FKxBmCSyiSomfqMhEuiXNnLidhhHg1LV7RbiKq9fbebKaSKGcZ8ULiYk3",
  "key32": "3hN9WsB5qmXgkSAtzGSm7TiW1qWR1y9vGHwkz51tdMvS9Tc4VxeuxiwDAD6Qp3LcsLP5oPmPmBnw4FACZe3pmM7N",
  "key33": "2SWWyMMJSM47gMausUuDmD8iEAr8A1fr1vbneCquucWnzzsmqCC6a2b5SYXHp6QCH5Lc3Z2nbx7GXWfiunHF38AA",
  "key34": "5RHryESooKVR627GWwLTiRr1FXQn54uAWpwk69EsLrgoZD2CG3LF6j3xheAua82sXUHnQtcm6w7Au2ZNw9an8h3f",
  "key35": "2rGAfYNcoPHaRvBvMxV5xzrjstkCrWtyGFPpU5GAbFbNdXTix6m3pngFCteuVyDQEMi9Jnij6V3CcDZ457MMpwuQ",
  "key36": "vViDpdyvfXZYfKAi9v93H8qvu769KCiyRT9q2vDnGxhFZ5FYW4WRSkiS7XrikTDfcr3Fs89exM2aqinh1oRUoyj",
  "key37": "5K1NjZFKLb9sJKVCzKoLhkDjjQtUL7TGnkWEFdhSanepAiYMRvwZvor2PVzFoWgT85F3oMrcHtmSQwKjQQy4WfKF",
  "key38": "7qSnnZsa1kd4gv5MWE4ShE8EY1kH9nEsSovfwtTNqYq4hDUZQbo6cDrKNY8QjT4ATCRtxD8eWrvX5f8LR759XWD",
  "key39": "AgoH5igmx7HRrkMghPfaVfwnqXuFd54Yauj7vncH9vrNp257gbeCSkfWi7xNgso8XcBV7idi8oEEqYUcGCnXqfz",
  "key40": "4oqK6ibkqm69PjjCuzpjguEYBye3bk3iiqVBeiyVEBGTVNvu6U4njaDA4MjQYQbVUNAvpwyiBD2VokBqDD8KLbhR",
  "key41": "2Ej2b29sQkS39sphG5WgoZMLtvYJXLLTTkgDDYmhsp9SrFSVFQTAAap4nHUpQYaC8gBDiFFxmUZKUzybxFPLRgmF",
  "key42": "548r9y1ugFVEgZYNzsZ253XrmqVXzziS3FuPtJpGYKyPFqU4psxxioLPkzWfmBZomcKp1cQhiN9ASXNWA3hnsJ8q",
  "key43": "4zpqj7gv5YC5t1VdVSKMygk11BzWCD36T8ucHPhVxuZgAxm3N22zFuxU48M2YYSFMHdkPLTdHn2EXENZ6kWmaocn",
  "key44": "V3SNe6hwwG5YUMppXimwME4o8Z2d77PmTZNHz55799VJufpUtNMq25W1eyCEt4HQRECRZkvghjHTHBBbK5rLxmG",
  "key45": "2YZ9GZH7JBontdd2TDLYwDnvRmYFYrNXk4NqNTQocyyRx5BRctTNECtY3M4WVik6ErSAr6njY6X3tYJDuDcLmH9S",
  "key46": "2wQqtUxNZGqpDZJ8y5GD4JQvNEof3gPTKDQxoydr14b45Gq7viBt1icadYNXi4Ef3tqrV2qbebUrqk6H9BPwogx4"
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
