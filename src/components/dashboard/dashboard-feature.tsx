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
    "4MuDvHLQyDKTFdXhv81mHXU3byM7cvj96GauREqQCggDoFVq5vCYnxevfhHwx6mnBrv4Upw2TJASomyCjL3wV5oc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bj7H82eMh2CcoadEcc9auAuG4x1WdgAy2ksXUzsyXcoXESZ7uir2jdA4EGWSVi8JtGpoh1MJXeB97Su2xrXngSz",
  "key1": "5cFfa8AuhkmWVfpbAcMeQs18syZUmYqVSzSMfPQNLREDe41uaDZxuDzS9yg1mpyNskYgm6VKH2LAeQTsRTL8zDGo",
  "key2": "3GuHz5bFqrRCZ9MyempH8p4C7dR8fLS5qEMHw1eAhKkYCUhzT8qW4MZMQyeGQYweXrvuuucsnZWUia1qYBT5bnwP",
  "key3": "RBezzTtqSpp6Q5j2tkLhhA5KUVTzyjMKJ5qzvoPXJdcCuaSP1ryiwWze79kweeL8sVQLMTditKufsrN8jAybQww",
  "key4": "v6WfuJAH9wjFEqo8tLrWXrxkjTctvYyScpLJvt8RSu1z19y9hfeJAjsSTpJkoXz7TPSfe4TatBMj8R8GCYwANzV",
  "key5": "nWNJDXPC7o5nJzK8aZXFGp9gK5h9Dwj5pR9q23xXij7SeSq5Wf9WCVsnN3xaXhXKCvEzsiTnuJW88uc8JCQMvDo",
  "key6": "5zdvtcS4JFrzsbX2trFFc6i7KBH99JPC5CgALAmg74ww9bQhsGixjouhRFsZoYqbrHq2e7wjYkL8HNaZQGsmDY8C",
  "key7": "5yTTAYRy7RatK9w5MYLobQ54t6gpK1KUn4mai6rk4x3Zf6pmFSfn69pACacPDaHj4nuD1NMo28BhhiVuLodgmFGN",
  "key8": "2shx6xEGyaBsHQnzfcN5Hixr3oxFMWPiCmafJ16r1DdTcNAzM16a729yUBxhoF4ygrUDgBbqnk8R3KyGMoHBLmVq",
  "key9": "2AKEUzTqfPJkWyzWFpebQMVmkcXVfJ5c186jy2yRc6jMFooMbznovKcd6F6KLXpdauRvSa3uYmtu2ZrLB6bfxnMx",
  "key10": "4WUTwQj8iN3nNTgQnFWpLfZPMhk3DcMcUijHbYVnqDrHziwqZ2RSTvxkdHCGqjpCb4hEZWujZ6cndkTjmXWDJFNg",
  "key11": "5bsFJE1XN1b7QjJf9vN97UrmujYoxZWRDUCyJqTxUm2kjUtvtmopPtyfmBUaFHNr2ew6LYQjE39xaG8LNMw18BuR",
  "key12": "61GMC1NpMnopzUobiyN9s474aj9sKcX7ni6Eo33A9fNDDsnNXRfRksfiQ4XR8GHzmgRuNhCxyqFbk6k8dGc1J8CA",
  "key13": "2Rey2ypMcQw6P566R89LSFjWPei8GMFkonmhtzbxjXQzwNMBCTJt7dAqQudeEtipiSa5X9Fm4kcKLRkPSdungaGN",
  "key14": "2xAhRXwsXH2uFsisnksZGuhoWZUKyeY3S8MaA7AztJtmWgwxpoHSLo35ffeyjg5Ay1P9ZFu5x3j7Kx6JfCr6G4MG",
  "key15": "5fnmbis14fc4UN4jZpKqsJB4s2cVoXMZRdRnAMTxj5XcHUf49EmTVTjjZ5YrNEmhJNBZNREKreFpPBALaEQ2MY7x",
  "key16": "36vCFctEzY4CPpwqwyX6TgrNuSPoBCvkXJSpQzoQg4e7vKPTBt9U7EzvEgdZ7tghCJKSCjt96WvtNx3vqzEtDZi5",
  "key17": "fdHuJexUYZEwCV6VkRLw6kRbS3Jv9wUFZrvNsk8QZzFsBr3WRQazhmX7XMmMQTgvS5P99eHaVjKWi1jr6bmQ22N",
  "key18": "2Q84VfieRyWdWwV3HJYix9bGNdp8jvd57JGHSMxJEbZPNHvvn8B3jsadEXQ74vMFfccvKH71M9veaTfxzqVW3eNk",
  "key19": "4grPBmPCKzta3zB1Uo7VjqzrrZzxB6x1urcTLJafXAtaVbb9sH4CRZPEbjD2NKcWAs8niSHYh2LeDQmyqmu6ABSi",
  "key20": "5u4FUKG5dDNeJjqqN7T4Ac7mABDA2h12nNCsjgTkuj65WNNRRBzed9hMdPugCy36qiDqJUZGqKB6BKNSsKRK3XVB",
  "key21": "4UBgGWwzB8JtZngdhYno9PYvaD9tRq4Xi75oH28ShiYDQEGtFeYBLhK1SEpD6L1Hh2e2ty3gZb4UkaNUGqV5uabu",
  "key22": "2SK5T7C983Mdf2gVLUSU6jw96crX4od6cXsjbKbcypijuJ4AVZYnJYbhaizizWwTCFQAQhtdo4WxbAmgGNv1xbAe",
  "key23": "4ggmvHXoCcG9r6UTpsjb2SHWF1gEozHBizvPDxhjKRJqEbbhPx5XvmMom8yD6YpxNT4fH8RdDZX5Gs9T3yzLK5U",
  "key24": "3jECy82YLrvs8K9xezJmZ9HKoYw4vbMerj28sLR839oRPhSKKrPQeDtpMTpVbtdv6TEMENYLunauQvYqnoFtewc6",
  "key25": "4vQGrMZKHiztWpiHEbvQJqNZzGew1VY15AUrTJQS2oAzRMHDVEke1wX8vHd7g73y9cP4UKJmWNnk5GLDQjmVxY32",
  "key26": "3uZyirVdJXqqNuaMmNyNJCPgDHYeZfMks2qJZhwwN1UwFiTxxgQdsssRSrdb48sSnkKYytjEd8Q8Sk6k5LxwFRaw",
  "key27": "fQoRoWVKM5XMGMMj65LDyYVTRvkSBTsCHN2F7d8icxTquVanEuNauugFvgawmdACAaNzo4VnDDFXTAPT8rkwe3V",
  "key28": "5kWN7jtFTBaymbrwuvGLGQ91phsVSgLKYxAHSxTvGGLPVeZtLdjdvKLT4iwq4jMcdysZ5aLEq6JhSFff34wKZwue",
  "key29": "3hjhpuhgjcyjkvc5MzdL7WTRCXG85oduFNCuDdSrnqQJeaSB1DdnwEDUGjn21xoGRbpg89PesfchWsRyHUNUrtJa",
  "key30": "5ypH8P5qVkcSVxDo7WXn3GRr1X3Aqzkqn2nUbTiomaAtY53N69ZXZh1KQSBhcvYBqtyTcK1qpgpLxPXttXyhKqeT",
  "key31": "52gvhsk4jkAXvGxELefi4t9BUbigCs5FBMJF78RavpfyMSdr8k4QF4gtk12uV4jTuriEoe7XUb6jRX5v9Aub22Vc",
  "key32": "5xGhdiDBvLN7TTsG9faZkfN4BfL9YU5U4UzjLRUV7JnF311g7fYwjMdMZpUpELABBPuNQksJHcCEudzVEHiRkrUh",
  "key33": "4c8Q4YzWkGgP4cFBE1anNGhayJLtKfUiec2mfq22xnAkBa6G8eYZs9aaTtP9xbdBfHcG21F4t7vnMBXcPDwimFWZ",
  "key34": "2sCQ2unAYdRzVHo5jEWXVPLmmusYoUre4RnJT6JTM3jihpJiScMxvBD6wXCM2bZ21TRA2QeryuKseGKut4CezNUK"
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
