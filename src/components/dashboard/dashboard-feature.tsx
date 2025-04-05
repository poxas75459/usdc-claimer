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
    "ReAhyszTY6DDTMiG1JXedpn9qwXDftqK6dt5k7ztt8MA1cAbgPPGCoCJU8r1i2U3ASbZcd7Gfv8v4LmWYPrWsV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSLSPa5M5TvbkA6B8yKCaLmdS9yPiE6o5ETn93quxeB7PWRH4qtckjCJZWgDrLgLum1KWKwc1ZNWuzN2sD4siTS",
  "key1": "3SFnwE2VgziSpDkXGzTqZMH8mXsUQkDYodUMe8YaRfx4kpsCJZcGKufpSmUqQBFGVTansqHowa7TbXGrPsJDVsog",
  "key2": "4xtpHfe4QULdQgpWPeP9HLahmt59urzhBQ14798KupwzXR1CuQMNbeBaYEKcykNMvd8Cj5Vu7kxxRYva2JqBk4GA",
  "key3": "3Mm7dKhBtMHWefjGNsYLL1gkmBrtr7wHjWn6c5xyH2ZP924JDXc66UnUkhdpyNvtyAM7V7jHzjGn8PRxaEA5sP2v",
  "key4": "2tWvehvTdHG52m4J6snu2m1oWSTMZxa8CEdFfMGRTJwz4sTnQYwvpSu8MzySH3Wja1gNaTFrqfBLEQEjCoofJWDS",
  "key5": "2pVgJ57bbsJKsMFfZzjKMdonJ7VgBBmQeU6fGNhg8TGFrvFmymteJXbxWZJ82mihwfhV5AUWV7HpcXVEE5BAwFnG",
  "key6": "3aCagyok14gd6haq8y144LMxBqcv56kmmc2m1kXPU6dAj1GvAm4fccNNH7baJjaFdv6UBk9A7PRKkaPFyccDMD4a",
  "key7": "U1oZXAoYPDmTkU1b1DwzMu5EJnySuN6ytsDUbU1pqc8pMExYwCk1DHZeUR75phEvkB98D7G2JhWa1vyM5m7ZxNS",
  "key8": "zEWiMqwbYfdnegKDyjErTbGX88XUMGh7iJiST3R4o9LN1paAAWCLq5DgTgQEjoH9f5LiVuYkcqRvKts53gfPEc8",
  "key9": "3fLyjgruHHb9mBu1LtSdPuUezUe43oc2hF1yTWMMNRb9wSTgKcgKnDUH79RmTdNV47q16DgMSH8FmAFbaA6DpEJT",
  "key10": "5PHT5uoUFTH7aLs6hKJAW73nT6U9wRWpHokwvtpFszFht2QuYZg3bg6P39f1kPDqTeyerfQDDDUuFqWBx2muvTEM",
  "key11": "5abzGcpvwLHTMFNWDExSEnEAwbwHvcELvaRQjqevPMJk46shqf9PhtgfN39NPbKeaqxBuVGo6RAmoy2QsfCp7k59",
  "key12": "5UVwFMCURKdftbSPqCzCQGkHUXze1Wj9mMYQ9pghHVSbhVcovp9PArVQGRsWkxKA3aaSnLfrpfw3QGfQrqRCm5Ta",
  "key13": "4dmT43YEyavd6p3e4tLd344BZ9F6Rvr6PLz3mmi69EMZYCEXcNUSZmfTGH1AYSBuNun4Zyq24gzVLuUUaJTyJFYL",
  "key14": "3eD7VWEsY51VNSLMGycRcVAPnB6utKQMbkSYPP7SoEE9u4cGDXaJLdFDGF1wqhmjkVUzvTf72TuiVPtdraaoB6HY",
  "key15": "5HpUtUpo5bNLqv6R6YYZLsWRQqF3xi1xJmiDhagaWUxu5Wme8Nwnfc2LjZEdnuvTdFYdvUSdCHoRFcNsPvSyUJ6x",
  "key16": "46Bv5KcUZyB9Atic2B1mZbGijAaFHs7zmCYf8ZFuZ2hpHCdeqZ61KzUmGUZCKZhxvMJZgGTJXTkbUwrGUSopguNc",
  "key17": "5AfkmNdfFjy9sqxYS5Z2eZYFHj1EjnmRpedT7fmR3MgcUytEpDHZqYFQdGgf64TwkcBsRPPuWkvqxmFJEZUyq5M9",
  "key18": "3BgFFjmnYZmc41Tke1jwQwB3mRPSAGQCvH7Hx2KTSpmxgu59o5egqiSHEg9VU1VuDhW5PFPk9LCZnX7pAdULQevk",
  "key19": "3YeLtM5E1uDkASoNZuhco9efQTBFAyNC2BpT5QQGd5XoB1hBZAcDKK1GuZLkU2jsX6vfrYdw7rf2ht3iQeevUWwX",
  "key20": "rUpvssu8d8mXdHYhzDfNiaKqSspvjANWr1A1WZNfbnXLjuGPSwZBr2Yd83vUfmBxGTvDafHwUxAc5dzEnRCNejK",
  "key21": "4EiHszMdDv2gnqMJRn4fDSeBs2FQXqgE5oZqmPuseGqs6BULS2aPwzBmLjWqaUQDFw8WAnqQ5Lr6JbBMoHCeLEfW",
  "key22": "hYuo8uqiHhheVMKGYiF8TLsJnkCuPkdkh5d8EaKMw8pTY6pvqb9Vysq5MBogRyYX41Brh8ANSoVeHr8EjeWyT4J",
  "key23": "4wygx6G9ZMmFhaa8rk4Gi4WNVp28LojL5XumiDYV1zCkQiB8j6q1pjRucEC8frDceG6jyk93GPeqt63m19JF38zv",
  "key24": "dgmXhXXxBaxj7hSqXERYfcBWdyuKrsvobsF6LUG9XHnxpcET51Uxt3L94W4YrutnTyuzVNUrnr4XQXo8rezWtf6",
  "key25": "3vzvPud2T8aYPTq827siG5b23kPdhB3kNWmHAtWNHEjc1fy8ff9Xz5HFstWMH9HSM75x53YsybojobWJYzKFUz7A",
  "key26": "3GDMVLiCfCE4HFmv9wkC5JgpPhe5Z9ZPBSPLKjirRqjbytYswVEWnarw3dsgTrBFgsnvBm8sS4Mvxtgdr2NnMR4r",
  "key27": "3jVHqbtgpk6YJHJkj8gYQrcaa6wV4vgqNvAGAxNDZuqNQCA4sGsr1WBntqnAiubfz8NyTp8io8ygz6RLz5tkAGqV",
  "key28": "5CbLhTx5iUaX3CeDeFm2Rq67dodb12PmDK58eZKS4ZaovYXcSWa7Y6x8QtGadwCAoY4sabmoRogVjTyv6AEbuW6E",
  "key29": "3QqKoi35Gq3vL8dMaQFrNJwUZPuspptdERX5WPBcurYP7UH64e6Cd2YkNfiDzwcrvphJ6ppNRHtc5oxLBK2b6NyL",
  "key30": "56txC25gV6Dr589bi3RPu1f2F7bsbBjLWiyhVQjdpsesE3oeynhXdcAvNQwvPEySfF3YZQWsom828EvDScHG7c3M",
  "key31": "2z5377PgofLiTZpjTVnW4Qh5zJUH3fDfgo81FpZrs811JLjT7QVA4rga7EN8rSjJqg2UNxNc38NyZPrkfrcRTWw2",
  "key32": "3QMfJyxE7P4mzWKqa1MjUeLrU32X1GRFbbXJ2ya6v1NgQokndTADRc8yNKNUqGQNP9E5t2yR1jtBeVd7bWFx5QVJ",
  "key33": "3GwudpxviBBh8mnvbBtAjJjHEm6iFwCAysMp3h5vmaANiTqb7p2Gw3dV2kKsV11pCD29gmFTg1GM4i4scEm2GJrx",
  "key34": "SSxogJCHZfRxSEBvn3A3YfCP7eNZ7pfTUKbw15iBxzMZiwQfsAbr7iFAMSbxmn4PiWkUobmsSaiTt8nYrHKgBrJ",
  "key35": "5qUVDwbyPfQQTr2kgxRE6xSqCoknTa6gGRGoSVF8vmwgzk6pKPWkoszChJeihE8qxeETTAfQc7F2hA8gfj1r7GwA",
  "key36": "21ayLGK2hReNVrZpq2K2TYPbACJHkJP2rfmy6zSrLUJ8rknoVTeu1WNtbG2EsFdVEr66vxuL2Xd3dsTShaEXRbVc",
  "key37": "3q5QZN6umemp2Cv1gJ3ToYMZ5ADKGzP6q17djdSPBiFwtz2ENtLxrm6KTGreitgKuFKTvWwGWnyTCA73iReQNa6W",
  "key38": "34XQXyW4tQNALFJsnjh98q8owg6zn5ztW2kj32bao1duynoqLJyDw6AUDtLPz5Qe5GizGc8dtivbusxjBE4ZoAtT"
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
