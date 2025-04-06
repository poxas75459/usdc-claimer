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
    "59hXtaJC5W1YN4k7QzrAxgQSQS4LzyYPXB7EoXURK8yhdcy4uenvCGjWToHBXEyxQkcuSPymHyEHZecuZCVywW6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNKAgrsHer5ZnAxzscVCbTwNdmquAAiopSEXpir6nn1KDZSS3BWqFYPkSQiiFPbmUrncrpNXiLMjPvpaeXgZWev",
  "key1": "4BokWgjCXXP7qFybCPKhofKUsFZwLphfDMGnuW6KpeU8ybxkwLqSYApY2JXdpTqc7V3pjs3QTjQh2CWdonwdw1BE",
  "key2": "62aq2MZNiMTWhZzDxKFhyvbCzxaSAF95iQrd68gn7PovSDXfL6ZqvnVEVvonAbQMNEiYDgbC9BtjZ4ZpPoNd59EF",
  "key3": "2LKQ6Y2S5w766kPFJrGwsnmHP8cnygyQ5yynH4PJZJAUwTMizcp225M5wm8JiCdjKLSZ2cvqHQ7mt6MbQPVaPx7q",
  "key4": "3q7Pz3R19SreY5RZ6gEqNJ5786BW7NBfX14e2EzMM1NuKAeFYUBVHJG36Ccr9AUYtkSzjeZg2f4Jb2ZoF26dZ626",
  "key5": "3cDGLwJZuZ3dhYf8Cax4qcdNCw8cEjKUzATnxkeJEy7Exty9yRt7XoD63UpNzvewRduG2aEgb7hj4MhADpyyu7A5",
  "key6": "2MWopm13ksk5LC3CQXiPdHLTgez7GmyqZzTMhwmQUnTJqcKwpptTaT94XRia71KSTWXeP8NtH4AqiNf45EWhGo2m",
  "key7": "2K6VSnMdc8sw6ZBLtKYrVVQ3feYE54zuzU9bscPnxvnCwzcghvR3hp9FZZKmhjp8TDPRePJCp3JfbpVQ2oFEbeZt",
  "key8": "3QMorsBvZTWrjGva7NzNQNKVGNVs378jrZQrfCnFZu51dTBz55o1hgGCH3Fj6b2iRXbr4kgXjWbFbVHRKdxzA78g",
  "key9": "4aEky2AhqASV3hGr9hjkPvY4bWbXkwbv4vqYpuopstaSPwAMKQVDEXjdf4kPHuqsPaVzBrf1vJWJhWuqmik5nk1B",
  "key10": "24wboNLzigaK81CBJQDAaNsKjkvwPmwxKAZDHPWs748ySj3Nh6DU3aimmzy3bo8QhLDeJQuhUkXdKrqcTnBahHv8",
  "key11": "6kzeARg3BA8D2vE9GPs9Goa6L7AYCBBmNNEEpYH6PSudrkk6en4S6ojQnnvQ29XGoETK6ucWUTch2GDjtf5u8op",
  "key12": "xLSq3yvuzgsWDN1Yp57rYERcShfmixvUsNLd2aRK7cLepMecBSm5oAn2PvF6wSjhuHnirnoufCq8EMJeYYJCT4w",
  "key13": "DeSn74CVza1wXjPgL4cKKqBNjNEKC8tmGEJ3j6NzgTrtUPcUUqM5hdtAAt35e2CEdte4Xk7zfN71TjPfstUvYXZ",
  "key14": "4VpmpqUY8Svs3UUEjJE1SLR7pkFDHBcwbP49x2AFiMbwWZiiLuBA1AADTEiAyKhEYphKZwhv9dbSNxkop6pVWjeA",
  "key15": "2Jz2RiDwbHzxfWjvUb4rBgTHgbBfoMeUWbYUw4pnc4knu4J5cG1VEep1sESCWGXLMPgiPhoeLk7ZUv6YeYDKuDuf",
  "key16": "3Axw6pg9FDJZk3pvefpMhPmkd7g8j6ZMsP8Cr2KBhBNPJzYwPVeG9D66LrjJK5cPyF1r8GkJ3VySzQAKVnuC6VPL",
  "key17": "3UDuWCT1nVa4ZPJ8jbS4yChxbAmVKuDPkUj2uoThaGu99Vz8z18bpS8xsaYLoq7ZrgXHsPBDSPPhXHgEg49JkSCG",
  "key18": "3D1dBtZdMeP5UAaTkbCqxyrxmoRC9jXxKT6JDyPynb4CFEaWNqWn9zUiaf1moSGr6cMNcjrnbW4KzaVj34wLE2st",
  "key19": "5q5KL49gp5fCRrztFJAevKX9GMpsM4Gqbgf6hzgEviVQddppR2sgjpNQHxkzHJBZiywRv4K6CsPgV2f3XspXDT9A",
  "key20": "3kAswSWSonEqUysLyxMYxd3vwAJyfPDL8sdinV32iTm1mX6faoJvejK2zFnGV44nMdNZsxYtDnRZ2jGSB6oJy5Ed",
  "key21": "xuqXze8pE1ndFRtN8A2aUbYFgWf9HSSE3zQNTCoj17aW3j41cZ5HUAwvt26AS5CwyrRidGBucxRF3axxe4WKbG1",
  "key22": "4G1N5WfxchZptUNczgTKeBeUZy8wKmuXPvNQ3RWcp3peRJRquYvdxNRoqVQBM5TQEmjT3DJGH4vptuQG3g2gz7s4",
  "key23": "2vjZxYBNBkCNfV44crkeZ37EA5tV6eVieCPXMjRbd45jcm9y7aZcYADzjw2BacnNmGegMnZE32S4f9eyfWtBrZ4F",
  "key24": "2fQTDNMXHjhGhHJwGueVFrqjMPyFncm7Q36926XTKnWrqzNjyq5aouqjbmERHX7VGxmSdz7o4nnKraYu7aGZaosn",
  "key25": "3sKB5mdCJLnmTDa4RsLL3LfFjFGGVqm3HXPvwysdA6ybB3yrMgEs3W67kCXYdhj1fEFm8ayyUwS17Zm4P3pfsJqr",
  "key26": "xEjFXm4zAMUkKAkpZQNee2geuCPZkFBGhR95v1LHzEK1DxZbcniLR6wqk18rTJNGAmomvZ9M8VRzrNTPMV7dK5s",
  "key27": "2GfqpNC6WKcxXPYvUyktqdntRawg1otXun7WT9zkekQYcKuBUyJ4m24UkRmiD85TfKdGv9ufrXBi7DzrMGSo6aDw",
  "key28": "313FSnwCd6sdDpszHCzSUndsrtRspRHiTTm7VjPbNxKZCvcQ7c6M12oc2Wj8C4SGQUxvQkjfa5TUFem5yDm8EmbK",
  "key29": "4sRsrg7yTVAZ3MSpq9ZARhyZi3EPqfxZe7B4yaNxVYKEWtsSxs4MnPhvx4AzTmbDqJZtUudjgpZjBnRvY2z8CPNE"
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
