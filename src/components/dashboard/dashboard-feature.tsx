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
    "2KC8NRWqrP21z1cKumTunhJZwwnK1n1cYbnHecMonzDomJ41NKpmC83hiMraLXcVfefe4rfQAX9f8Zpj1WU2rhFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgftbD671zTyUrTsUwuLhrPs9G1BHK738nr1tfgcP8wkLpNkjzkAebYbsCyPgmsHL3LDZxJeWjDGdDyW182TBYx",
  "key1": "5M8q1u5NFaqmf2oXEjFqz9nazqNZBXAghxHuwsGkiia59iCNnX4Qk5zCETbhxj42V3sajFm5VpcynUQqefeHTPFx",
  "key2": "2nXt7pHdXFVXYmz73626z8gFSEMQkZ7GQRgdfF6d4hdBuqsAw1NS9mYzjhZzVP6uNPJrAP1PKzXjZrEnNLWniQC3",
  "key3": "4usG8J62VuXJuoWBDt2pPmApC4KEbfUc7zVtUVEgYZG6uaTcKYpTFY2wFqvmFECzXbyxYMa2hKgNPRXQnWpytnnn",
  "key4": "3dqnSjmaahtmVR9kveQnMQwnBMVw1cETGhKjPbVkuHTYAyXC2FiLSnwAPX5P71WjYffUPkgszriLsVKt6XYxSS3q",
  "key5": "uMHSKPuyR8TDq5qWZW1BLqbwMrKSAwhsPP8WLLNycHN2pK53FwgBCEWvNFKDEhQF6i6f3a7rhAb9tVidFkKQded",
  "key6": "3QcFGAbYq22UJmx48KgANLv9u1JE9q53aEpfHHnYe5BQZ44m26c22CYLhquTKAL5MQRVdUMiTPKu7v26KQoFZtai",
  "key7": "4t6YSYgqjVfRFg1qPUJZoVevd7ioix16n3qVr9yZy1Txkq2skmZQDN3dEjpah36LRGHPmp4jaC8nG4MBubhtvch6",
  "key8": "5kMHBd2EeZddfSVoKp82BC74zsynW22vzScuj46AiQ3FUSk3TTYtGbVKABAFZAqt8gwVCYneiqR4xheJtXn5nSRE",
  "key9": "GwHqzKAJQqTKk69DA1Q3gFB7WjgirbzUQTy2tQSc5d3xwXfXuQNNGeJqRKPFiHBCDnaCjxJQK68mEm5ufAA1Gt5",
  "key10": "5BEBgDRMxaVjig381w1aGktey3exGXM2PzTtefZmHGHJrSu2NepVqLXW7fp9dygy2BG4AB65d2CzXas7Q3dXy7Qk",
  "key11": "uPmMyKCqHH6PgJrvtwewMSfCX8RHqNteMgqGWPDJT3sBgaMjvVsgWtzwRLVSdpPxUhvBdBRDiTPKLUAMKM5ZHNH",
  "key12": "3zqrxBMgcpr3tjDNY5uR8vMi9DdXBRXmXv6usRdo6QCqg3ydFoKQxnAydVwa1gPBJV5D3NGyeVxPfjF44gaeQwyE",
  "key13": "2LHQ9m7nDggUPvhqviLU974SsEEEo64DBZmv6Vutm16fuvbM7xr2H2Wf4djZqWHiLVYQqELcKCYR2wLBewL8jpe1",
  "key14": "tGF8RdKXPFkMpmgnNSjkze8J3HmYo2ZVap9i6UukfadpnsJXyCBRH18yvbgthwm7rpuC3kAhNrV6XWM1gWqwMDx",
  "key15": "3fbqSHj3QmbQJvx78KhjHyuGbc1FZDBb2iFr71faAL4MtjecpEEvptLXTiLghCchpBkLkXeaiLfke62PUHMXp4xD",
  "key16": "274tMpGkbPUAVNpuHn5dfsj4AyU49cUdHEiwCpDng5zwrDX3rLYw5m4QmK5Jk9FnnsS23vEeVzkGPkrZcTMzHGq6",
  "key17": "Z8PSCB3GCzLQ87udMfkd8iLP8vWCs2PFzfxWfWaD7t3LdtvXgGPsSDrHBEFrA25qdXWYY5CaM9krpMukyttH6AZ",
  "key18": "4sdMDS2NzBpgB9dGyG3bnfcXJTwXMswydp2zPFrtA8T7gF9DxdrWwv2QacrotvWLnNSkpyG26LafxAGuMaWs7NEu",
  "key19": "2w999iiC32fzt48Y3qR7NJ6HvFMG5FQoLqKAqsQagxARULWnE2EnujEGmrgNJrRJ6Wqcgbw85vc5XWMogFF4LtGq",
  "key20": "5dBoo7gJkqp1mEFDz1LUuwFLARADkai4c99orHY9e5Ns333ZkVUHngwQtFJzf7jqkZLc8DEU2DTffgURqK6VTAAS",
  "key21": "5g9XSu9XJDvZ4rwVahtqSxx7z3vyjyMTnE4sVBHR6Qf5HKtmbQuV4AY7SYoQFy2PhqcTPXZrxpF8yjEMVvDjjWGr",
  "key22": "5275YE7qLUMsbRm9kfFmVPzmRGHqge2qG4fKzqNQ2P8AcEycbdrBGf5sJjnHCubgqmxLkiZRzxHeT1hR49rtrjwS",
  "key23": "65phpvZzw3JEbYAVX9tcYzGjPo2KxhyV2TE2cJBZXezmWcpb4owwuYbiWGS6e7tUxwUfPxj9m245HTtK9SLJtyqf",
  "key24": "2nq4Y68dLjejVg3dGktfTDgwY3Y25fh8bpJJTgxW8zmb6crc5ow7MSFEGUojNSEuR2EZEtKUcvGDpBkgidXuAitm",
  "key25": "3tJ7weQHpeVpLWHCeaekRigJRz5Hv2bfLy14DjfZPJxoqtwhtvbTRgPNRkCmQpPAo9zWgsdFBcB72uFGivvytbmX",
  "key26": "4GLp4769hahtUn3r9aoufaHs5qribcjaGk3PDt1YH59awmepraL4FFbBSstkTBeDUQaHEdwYWk3mZZf5CmZ22SgJ",
  "key27": "5a2nJ212osWURBD1pTaSoTKT4KxJbzrFhQaWh6HfYD4epcRbwjBPUcag6anfgGsP7SCSS5wsjjnee3Tk8xmTGNJp",
  "key28": "4xhH6DGrQqCeKAdPiwisn185FXJY57LHFeTqnzFapmf8hc75ZWhfFUkknDJVgACLyZjRkGDyjdioqUf7pTsTDnaS",
  "key29": "5bZwgCcBfkNC69Y3pwCKnKDwNSUwvF2skNsvN359jF2GAp7UwCUPVvGJTXNSvy82PAXBMjQ9inzdiSJCC7bCKaSS",
  "key30": "44vYmUAJCEHgnUR1Ji5sHdg5Q7mDkp2Bx8Y7f4iGNcZvNzZD8rK87KuiYuSwNhm9hXuWPtP5k6AmVyxao8LNKv2U",
  "key31": "4t8949XAB9ufXbdCp7rEpQjzVa8XwbjuJdLwXgQh52Ad9YXyES6QsygnDj8p7sVyTLSGNGUAvyqCkt6pmxW644cd",
  "key32": "rvMkiKXvqaWLWpzmbudJVhc3GZAaju8L6MNYZmdkyF4u6jpMv12zFfsEg7HSkepGg83BsZ2ayEUFfP7i92MNEXk",
  "key33": "49PodSMYRXtMG2UhEEAEWxX9LTDCSfvyBGTLEhGKurwAkUFFknU5AeVfiJuEUg3iW1nF3gWW3D78TUyrCLZHEjPX",
  "key34": "Rn7Dvj6QHnTvYUYaLDoumSFAJSDNkLMLZnQ6BzZqH8raNMs7kRQbTA4K6iRkaworkz1DpjWdAmUTL1Ayixpz6zn",
  "key35": "3rmKiMCtSdrvvS6gj5x278FTqUrwPG3QvmZfDNWg5x1DPksFrcjCS1sC4uKthLP8qhac3h4iNMJZp2MHabwkBLc",
  "key36": "3zKUzdutBAudAyY2DcyfUjFFiU4xEKPcwTZeau2yAuzY8jxrzxMvHXTcdMp7y7Y7CUqo58y6cwgrcHRH4VesW4s2",
  "key37": "4B7iSnhiiDx3LUMCgGUfjhEdaHwzG8HDhUaHMkZi2f6pb7Jr7mxefruLHo6vFyfs8XeTE9W6MuJhfX6SLe7LrP9c",
  "key38": "4JiXeEPxtcKeSFpdaEJ6qPSkMJYSQD682p1GwsXe3nKNGcaLh79McFcsvjjkxN6witejybKaT251qcgupmxgtezM",
  "key39": "2C9qGwptFniKCjHGKNpAPsKHYTCzfCB8iSA4LmXn4CDRweaUo9cUdSfco9RPvE4ZyzaMPbCBA9YfnDYodDEiYtgy",
  "key40": "4iVqpXuKtPeG2KvMv1X8AtAXZZDEJYNzENTQyofzbvZ5JzVTAQs3gv23EKwTje8YuZhv5cvkXVmfqEEDZ8t8FbUe",
  "key41": "2vaTUYK19vupxQYUhUqFmtNT9EHQKvGdiVkmZTc2uFcagfUCrYJpXtzK7eHVnVYEyoS7hJbDQcGaGxKAq5g2YXuc",
  "key42": "gfyq1XwSeN5jBZhKK36hKC2UhaaQvdYZvqqgd5Vbhz1oYDi9c2Jxur69V6QLSXe2poCWGnV8zkWwU6h5ZzXzs35"
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
