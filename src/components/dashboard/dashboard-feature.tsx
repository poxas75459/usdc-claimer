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
    "5Rd7QGam1hxCad7znFw5vex7TWKg1StfxGWAGwsj316mnrzUudBah8w8SUVNtzf9cRK3buipThdgWV69v7rD5F5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPkEP6KFJ9fNMddANNRAuJD4m3mC2tTnby4921mweM7BEReMQdKRg59umPTzCVyVkSeuW7VEiyFaLQYnzSLYpyn",
  "key1": "29DPxGa7ob7uJSe6uLa9kN67SHStXF5q4UVDTjX4Acvx2Ti2KQUPoWxbtynJ6ZSa1YikKbZRBSYmhfru3anop45W",
  "key2": "LYgqvnxXZWdeykNNoznhmYmiKojwDhCpz8ACs5KGQ8VkRnxhZhzJHqTsPAQQJokqpp6GpoZQ8D1f4grJN5Vv14G",
  "key3": "3JyeBPpRj4qZjyrDaLtqoau6jhErJQ5BZqAjdcwAjistYBU5N5szYuu2eMX33B6vWccqAWdfUoydCGZswhhcuuWg",
  "key4": "24ieuPUwbwY84kwozBosz2KUav6d9L5tLCsFgA2LkgmWVGBmSrK7g8hYxkcSCecAUUCv8rQdPAf9sof4UDewdAgk",
  "key5": "29g4iPhk9vRhqFMSF3xatxP9iwqZCxUhSajsLrT4wCQ6f69VkFkTY5vzuY9qARu3UyiPTC4eq63AumsRaHaK5FgX",
  "key6": "32ksTdQgNzQaUV4MoraJtPwpKHkrATG7aA8wwafhn7RMerE7ZYMVevzysrUzGCRe6mnx4poEDnWUQjPSimPa2XMa",
  "key7": "42B7QzCHBYcbSNzXdzQGQview2FfhyXrtYJCQFUjS7Mo8pp8v6zG3xnjoqTkec8eDxJNDDV65QWN8GciH5zjQvWF",
  "key8": "W9SDzf5NJtMQTnAEbsD2FtagbzW56HB4cdhGkRrUxNgfFy7hZzyTQ54jTiih1Ar4SSRJ6Uoo92vk8o1RUYydfQd",
  "key9": "5u8eAQmefBRxp38gV2eyUkyQd8YBsy4W64VeeV66HYKu7dp5GN7WkmZRJrEgMKaqCASF4v4PKaetbKM6rLmDPJxy",
  "key10": "3e51obSkZsXqoeJiMdXe7V3xJ7r2zg2WnCrXgrVD1BGPQDHBwVQJrw7RBtQz6zG7G5zeewsABfDg2VFDjEdng8v2",
  "key11": "2KShbpdHAfosu124ZQ7ucDKydsMLwNaGNNDxBHMHro6z9z5A41tVeSxygrWgTpRJ8wqEPLqLSXfaXJcGTsaWgwmn",
  "key12": "5FGp6cfRRhi2BAM5Zg2LYps74p1TncsiMbG4NNAQNh4sqXjPBgpui4YEk88Wh2SVDfi2b7mimHwRBp6eTKuN1mUg",
  "key13": "5XQt1t1mDCiafvFBaoSJ99ASeL9h39cStMioFDeXh1SsGmZUTfncYspTCRyHsWDFH7XNhVWLvQVoBWfeVS3EGtg9",
  "key14": "4wwLNS7NWq8ngVSUDXGnZZvwr2rrbNwKrvmbBRfQ3t7zFuHkZVqSNQwNx7yATyE5rpawVY94eUjHu25E8YCzBFpd",
  "key15": "3X1r9ydfVyBnHw7YZ9nqcU2vXHi1pKb2QB8NHpe4LwuFk5CRVwvx1j7AhQByUqTJ21g73mygfRondYHfLtWtshxE",
  "key16": "4DYh3xmBXVjoXRJd7pwncmpQAWHQjfhb3DcAxz49z4CJ8sAchisFCqBWk3KfX6ihZKdBqqbD9S6Zx4RLzunX2ofp",
  "key17": "64XDqtBW5SPV32W4ssqTbWcgE4vd6prFEoM1ehgyxNGkQYmzHbzyY4fnAynJHji2XBX9cTsYZvW1Pbi5e9eHtdE4",
  "key18": "2iSuEZ6KRRkPoHQ1Z91gLa9epXo1WfQ2e7zeQFLtM3LsiYw7Riy4hCaV1pbpy7G9ppMw3vXqvKDZkHAiWo5aZnTc",
  "key19": "3x3hXiVBqycerjsxuPdB7631wjecA1ZifuaAzKsH9FZqRXXgfVKhhi1WzQPV6x1mgTkLPmUtyR2QsToUwR6ZVZtM",
  "key20": "Mv7G9dQonRujRq9rUXu536X4h3993dyNeV4icRBkTsgddVeVBkrRYCARjLL1rTjs231ASNmrjgQTYnoz1Y6xgsz",
  "key21": "unY8z56EbiEWZVaSTc3Y1cwAm6YZE8XkzFzYZgYSrEn7gPKSFX7vi4iuCqVXXKdHjGW6H1g8PMSfoyXPVK1BJ1e",
  "key22": "4ERjE249LU9N76n6u3PL9VvJ8dty1mJ1fWBJQBh9D3mSqnYukwAukFZgD8TGknr4AvxUaLHEYyXR3dQHBQn6c5Kr",
  "key23": "65bXV1jvwhZ9LL41mcxNADA79b3ESxM8AjtCfnhBhPWGFJBsroyE5go6pxcTYLNKnx8cNkFtyhgKQwiNPVjaHGzJ",
  "key24": "g236Pn9pJdnSjPVdacnQFj7VnMYjtxt1R6V7dZAirxo2yBtyK151U4DMKaChvyp6yVuxGNoCsHchjSBvuTRB9hh",
  "key25": "5hEkGHXeFxTDwGgkiMJGaNYvK6g3xYYsTFGdEM2JwGSa2CGnYgZadQu7ok4egAcXNqaJfqSWBj5amxFZtRx9YRQN",
  "key26": "5LerFSL4VMrPwfT3v3UhvJTaMzjtHj27TtcTcPqBM4e8M91WsKcpjYk8wKqYbX2pL7YB8ws5RrNvmJvQtdfPtmma",
  "key27": "2HJaEuWHs3SVSJAT8d3gseZqngpyNnor8syN2kb5eQ1vJ76Sjs2vANhRzr3p4zfX2fm85Poap8dc4XoWrnAk6WX1",
  "key28": "5BhYRM5XN4bVmmzrHauCzFeAZSdLr6bJeyxfAUGz699pggJtaCpSTbSWFHPsubDhWzAwUjmr4DmG6KXGTyNx5bHa",
  "key29": "3XnjhsM1K51rt6DVTMipguw9RyM9FsezRk9vQgc9bBumf68vac6BjzpfjBQaTj8CbBfQpLMVrmRWxVb61zMbR1ha",
  "key30": "5Z8UZL7QooWkjMWVpYs3JEdjv4MfYxNFsiaerKdR2vk7XB9iBYTtazXEhWb8hJ7oLjjjgaLReucSh3FJufz9EDYm",
  "key31": "xKuwrUPrXRF4yeJcgFfzEcEWnfAXe6ZwpyGn4SNZHEY1LbpLYwgvZh9vEhjAPGGd8VRLAnoqPJFZiKnT1CThJck",
  "key32": "32LrJo5FJrqGtFxvXGepDKthSck1Ley5ZerAsSuQkMqdvEKzzCkwmzXwf58icBr6bduAhSU5PuFc6msNSYbF3DHw",
  "key33": "5gKdtgyVo3uofcmdRr4Z5wFRSCttQFiuCncLot8uhpLh6YjiZ7sUTAsKY7GNGLDMF8TNXdSE5jnk4BP6i1z6fMSm"
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
