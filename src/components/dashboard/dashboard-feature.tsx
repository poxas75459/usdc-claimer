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
    "3sQmpHPMfegcsrEkWfahhiwWdH5PHK3BheubieytyaNxohPfezrkvii5kfY83EFpnHr9cxdW5cvroGQ7fWfMcAEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kAW5SA36yckbtQ1uKyxMUCzM5JozELegw8nyL5jEgKwp7Eg6zdZS3uSp6oPRCagiG3KWkLYTX4CSZBBHjG3F7jc",
  "key1": "2Tu23cn86YGeEhVYGYMQqH8smwPDy3THc2uemP7PT4qQtnmmtGCVbfnCaBzmFDNxkTnn5FTqkTa6GGcxxorrXETR",
  "key2": "4aLtFV7gha3CXQJ5hijcHM6gHHHZiUuVq6Jk2BmBncwfZMY63dQ3ds31NGbfoTHyC3gX995EwCwMiQizwL82NBcs",
  "key3": "5RMLBvACcBRohQ5UATSoYoNvPz3jzTA8zGuDQgXHN8rUipQU9ffEX5dhKRVUzuHPSaytJvrZ1J6uMgyGqbgD3Cv6",
  "key4": "EBYa1t3b4vsQRqJ7PzW1Y2FSf2Z3TggKcG8h33FXoGMNVKfVz48Gh4CwBPwHCR2k4fKLUAVVpNU6YGjy3WT9qse",
  "key5": "2eQvh4j8Zuxy2qto8zWoX86iM74MJrNS5ztSS4CpddsHQc3LPqgCMnbFdGmLGaNMVJRPr7kFiVQVEhpHKbyxbeeW",
  "key6": "46rNScyBCFJcKU5iKZ26ioqXRbezrgvELgQa7ecW7sQEaqm5xQjR3Ymct3pqH1mBHrn8o5LooVUpPL399bTYh1Yf",
  "key7": "3XpW7YnseeaeKgQ7Abofi95B1iEHCgnp5R2ph8dU77uZPWnzpbPYv7tCHnSTNy8mmDgJmqAWpV5i4wxUT3bC3pJX",
  "key8": "3zQyt76KwoEunDC2qirY2NQUq3fh8wSyhg2CjucSZK8wZZEoKwrESgwF5fMKUSfw1rAKvyxVHvJwh9B6LEc8PkED",
  "key9": "33RdXrHZeAnRwqw5czRhbSR7ygiWcxvL3WLDinVtNxa5hjfat8UQuYEYzZTCa3hwJwwDVkzC1hHNXkHNVkSDQHGn",
  "key10": "2sz15jfkdYvzDSzV9z2ZZwjUKtHr2UZZ4FBae1ejS7wJqcJnZ86ZnYskpzw8heokgKvj9G625SggHELN76pJehvx",
  "key11": "3wVDpafxoszKfk4kGktEMveqPyViDgAAzembtwkcJrJqAPiRXyQP3nBPnA9EAjC1f5T6SAi8tjxsEva4BeUwyW8o",
  "key12": "614bdUhMQvfuSohxXC37989Pq8JXR9SzSRN2cVv2v3prkrZ6svuzekJUfQDp3DrwwaBbGMYmRuFhAg24yZvCc5Sz",
  "key13": "MX19Bhu3nMqQVhkY7kYTk1HcDxg6ZuuSMC28kA94zJ4STtz51BKJAwXyoPt7wAqtdR5xFwwxfKhHtgs84kdmbM8",
  "key14": "529PWuaxb5Ld8PTTz375h8ajQfk7bEoiEH25Krpmk2RN4KCZsqFwHeFvLGWWpDr2R4eQWDL1Y4XZJGLiY99fK6eP",
  "key15": "311GN1ZduMwK4GzDDVSsZCdoeFkh4VX5cycrPxagyzKU2qFet7yhawyBhhApXJVZB6D5LjLB47rmye7ns4nUJnbN",
  "key16": "BFRSoaX8z5jDQCN5QRwXFDwZgqbzFGM8t9fqmXkLJb61iKrSBajbVdUH3uvvKQfiiJFURZ6MABwyu1DmjepfmEm",
  "key17": "FSU9eexRd9HwGg2M9CXNGtVjccsW92DYaJbFrVUn2WixcWSYQHAQNX7X5eTYMBFYcDAmKy4okAvCLTqHVAmc8Ui",
  "key18": "2T2LoaFZA9dZgFn5ACB47GCWJu3d8awHV9MrEjxJnAEE2jMduFGMtEg6Rh13Bk6HSNiqcmcxTZ7pgqNHfJchy3gg",
  "key19": "5RvTupBdpknqL9emrVXsAZwgjSjzuFuScxU1zVCsLxsEumWNmPQngLVh6aExah41CgaVPS3uUE6Q2mHrofGdntyK",
  "key20": "9GJQphJ76WfKoBsRkDdmBdHiDeYMiVnuk8sCnzheARwr5axaKj3dZByzgcBdnUn8Yu1Qt2HH2CM74i82udZgxfJ",
  "key21": "4aKe6oad8nEj3u53LYquPiXPPPhjo5Ae8fZ8hh3ZSwMpyoSUcWgKjEjCvnJ73HvjhegdHzAvpsCB3UevUPwHuasR",
  "key22": "3jgh1yANTYmoRYXNb9ybKGGFJs1gtnH1PcL9LLHsh5roFmfZNK35yzFsyXrcs9w7u53JWY8Ap13FnEoUQsoBYXU7",
  "key23": "3ndDGwzp5DjAfAw2UXPc8NMCWk9vf7M23beVnyuyLTBNGTuQWtwyh9Me94NKxYxMqs8GLeT6RwKnL6b28egwMzBR",
  "key24": "413vDZUcYkShGQ4pDpFfSYZDwEoS9gqgm2wNjLE38XmiQsjd1ZUugg4PW3s48K5pAgGCdStApqQt7dEjmaFPm83v",
  "key25": "AHK1i5x9AThKe9DbEAFmJYjpaW98oFnCshomXj9JWWxRmqyFns7rQBt9hC7UdMm1HGF34PrVBi8JGWvvUMs3WSH",
  "key26": "3SWpCrjgnKUGmrGX1TmmZ4KMC5QmjpHEwn4puX6LBWnRHJ6t9RaWfr14zr7yxk8hnupau4aYFH4N7iYBFecHtu5Z",
  "key27": "4eYQeo7fxQCrYhfoS4RKSaCKLTiHWDiEZZFkpvgKiUEqRUVfQUh2t6cSDTTDoBerVZxtSpu9E8KxiJkvHY96DH7a",
  "key28": "5C8AXhSCEBPjhR7m3e69r146aKHYP2zvKv57n96ErMtTtNSyFPJgBa1vxSnDxKX3TMQjaom3dCfQvr5bkUNV6uz2",
  "key29": "5bxv3xzajHzf2pcmedAFcvoVEKtWoiwsUb4qC6s9uxA6BT4rnEpPSsW9h29Bm9eJ7qfVp7fCRn29HNyXimGxBac1",
  "key30": "3SRS5osGvmEXkskXxY4SeszxviZEf2AGhSTWuTm2BDAtCNPqBaTM5WqcH96kSC6Dui2JXZuhvCyiHATwCYuuNr2q",
  "key31": "442KsrB77kyJjjz6uG1LscJLCQn5nkXBWAUTTPBKCmR3yv7815T19gcLFRZr2M14zMduJ23ocEJPkiTiKUFVk1r1",
  "key32": "5k73ts2X1MY9yeu4E6vmQ9aRLSenP768G3ur3oJj7F6XmbLL3mQ4jPHqw3mC3sACU4ypNRrYoV4Eqw2eEi3jewrq",
  "key33": "3GL8Z6iScmQ67QFn4Esgz7WfQDtXjpimYopJrEDoDvWJKnvkvzgScKMXFddqaLvjGskYFCLzgxG49GnEM6gHLcS4",
  "key34": "4rY2Np7MPsEcY9Lb7fB3NeSiv1ZMneZH1pYSEWPQLBSe7XzTx9YGKEEEhk6dnLBKidXairfXubdoK9LwFjZjFdY1",
  "key35": "4x87P1h8VgmmUwBhMmdwtiUvH3TJBbQGKh8CofS6Ny4aWJL2MdFT8NRioxyzYgkXybwcTo8fC4gNn93Qgs1PDBM",
  "key36": "2P8CEC6rQnRGywBS1B12tpvUbHsn5EJoR78i7HLA2nJYeLFrtrYMSctqigfKscoonGcJmv7geJDQBMZr7wrbLami",
  "key37": "4wYxyzsXrvtFjd1k2iGWEgHWTaMvjN65LLKiQNVK3TKYbGm1Nutc5UDZcyS2HyTbbGUXLr4C73JEuGVpwQzFCQVq",
  "key38": "sKePLXKs9nK96vxCEXtsHD2F45HCRoLC1opN9rDwgCL4kd7mPsa9p6fmRm44J6xmxPPe9jPek4rbFzJXLxD9V2h",
  "key39": "3fqjyBYwfZ5351j7tm66v2vw5wn4m6Jgu1SevVgVHaZK7NFxnva9NcLSBvVqyLf8KuoZ6eq39KYeXVqHtRvAeUoQ",
  "key40": "2LapWdUMjSyF43nzQt8gRnoHSynAWM6viqQ3tMczcC8chwUN3aaw8ZqsmLqQrfGWjfs6fUPDtYcEhdLdnidjaJBz"
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
