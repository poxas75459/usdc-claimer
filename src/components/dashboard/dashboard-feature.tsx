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
    "66fFLKvvVu11k8x5ugA2YVhF2Vbo7oMoKe5n9z8h58zWhfZ8ahqUS5sVH142er8MmtifzfJYFoB9hxTEcKq84SaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jc1j3rQNpFSKTCETTu5TSyCCPtbST1T679pB5tUsKFFN64R2WWNk2Ft9yLtZr7R8RcETSEcLE8Lt4TTGpd2vDbZ",
  "key1": "5GzGo5x3gt7xzUGPNzhrwisLG9MZUnRun3r2npzrPhVDNFnNhaTTKCsubuxzZJL72NZYvj2GpGESnKe16zFyJS9D",
  "key2": "PJx32P5LrZREq2ru8WUKx9wAPxrwvoxhiaheUibCN4SLfpU5VJvvXRt5A7Nu8Cp3iLo6SfN2ajELVjuTBmaugVG",
  "key3": "3ptYC226u3pxv7KLtfTtmSAUZHccQYB4EgCaFJkjC7NiMTpS4whjketMXi7GYEJRFA5R6LMrsC69ze7voJvxjBf6",
  "key4": "4LPF9L9QQmnhhqTiQHU6uz6Xsa1aJEjioWoKaprM4F7J2oHt8iPMhBt2pCg3TukoqNtv691cNkTiFmQFLa2gHEzM",
  "key5": "48tZ71M6bkW5g4i8ngPxe2bo5hj8gHbxTtyBwPwe4HRDH44zHn3i8aJqNDGkPQ3xFF1Da5fWjqP7FaosRrDHCNTe",
  "key6": "5RJdixrQQS9tVDq8CvGTunhKp64mGh18gT8vZhbXUxUdtgJgtF5oLtjgDU2zJUMYHyZDj5QcvS63M2gtmikPzLVU",
  "key7": "57q34aaoLrLAtQ5pFnsXxYFcvDa9tFxfh7vafhnXX6Uauwg2zpWKmTyfcEypCEyBtD7a8xNXZ7z6XPGAqvH2iYg5",
  "key8": "55Ay4sF8szSFjqAUBaqgaXL793FEsBVEhwUAJFzpyVe78MipqaRgwU1SNpZUL7kZPjJGhsBVLRwFaBaDPpfU5bg5",
  "key9": "CwadB6YNuWvbkt3WQ4a7DisKH3SK2ew46P66U6RYaqvDDw13LXH9F6U5dwfZgVtpoUwFajWywxusq5m9W3HdBdT",
  "key10": "4YAvMvGV4DyXaj7W1jZfGpUyATAMcoMUA3UaBrAdCWznc5aVRJaHX2ZGHKa7tTmWdjgstJjpQj7ahrnNKszDGaub",
  "key11": "8UdZf9ndgens9zrjNrQkXjGH2TTUKWguHEyQHNegDpNEth21jRKPi23oZrhdUHNe1GKXQ1m6GeZnmX1aQPGijEj",
  "key12": "2Sejgnc1Vy6jJnx7CmH8t6wn4ox4nTr54Vn887mq5rbsRf2vn98NQF3Cch48KuAQUq6zNkkKfB4ZpxvhdT5Tzm5u",
  "key13": "56u79buXQtZWPJSWwjvjWfvtWiHPfKidGSTd9WSbBRsWYLDK5t3SdTvr3Xvz1hEUSp6LCa95PSPGG1v3R9FAWjCN",
  "key14": "3DEi1hj4ddUJdq5WuXRw4Q3bcEvA1XyD7Jvppsijqnyxta9PJLzsPpXGN2opHSPSwffzywtW6Ah3vqqxYPHVKqoT",
  "key15": "215qSBXKTchoeQattgjJbBopDGsfp3T7A2cKz2zf3RYzML8VX7zmEtUhcMeJtHfMq2utS7P3WYAAdwJKYBayNft4",
  "key16": "5c8Rwx8ey1UJeHPtyD68TZpUPMdt3FqsyoEPYzvPai1EBxbDA1XS4d6SsYsedMXtbBva5fbfq7reHCHu1c6aFua4",
  "key17": "61cgjPcuEo7x7fNZanBjN4DSzXyeShBgPVakLhFEAZyQhv6JuR7ApDpNiYT5G1igAQnmtEjys5ZnPUncdCYSr27E",
  "key18": "2yRemXZcq8PczBXXkbpMf15RiJo3s9AndEWkaXwLvZdMNT4StQoRPvkm7G41JkcPkVBrRQ2qsk1Q1jBLMvxBbsTG",
  "key19": "2zvyc3EquFGM59ZHtSp4usFVNkotdQiKu1QS22AbNE1GVYJFAnP7LTWpfDuECfgZ38aHxev22SamMXw5i4YWBujV",
  "key20": "2hqyNKRqsYmTx2kTCdoLhLTgs8incqF2qZiFn1a9co5hEwBiVwj7f5ja2gv8ddrUw824CuXPmF5MMua6VKAhqpKD",
  "key21": "5Xqz8ixCFve7WGVzeR9fJq9xTr1DCi4YMwQp8haBzFkwXwwV8u2S6HFnGgUkHZsacuVi7LeMw6HQtPMEJg7mdgw1",
  "key22": "HhmghJTPaGM46cVdXbf9NUJ1bEu95fngP9Q6ezcrWZpkDSJAzSbZX2sQCBsoAjwYx2xa1kypQSWRGz6jq95JpAG",
  "key23": "5MunTRr4c6f2PJrJ65T9eT83TpSFWxxqNSJDNKUwa9Nvxbv4FzLo7exzqXfJFBVhe8Nx7fAix6fBHqevZ6XFe3nf",
  "key24": "4RwaNo1NWEhe4XEuUMCdR1pXHtiCteru4rbh5hSY5ifnpcpVTAoUxcX9f9bM4gQ7NQYoAGRpJzS8CwHpbepUF7yD",
  "key25": "62kWfM8BrVKjrxXmaWbhPwaUgSEtSsvPKaahU6dVHSR2ohWvqi6LQkSQ6X4bkQNR6bBkiUimUy4Pm15f7fpfymKL",
  "key26": "P8pbJRdvabms9NRMTu1TfMh96EqRUDFVgoJKPP54k5ms884VVZxiDpiEA99JCd25v7dqUCsn5LNnTjQKRp6eyUY",
  "key27": "5FAfBv9beZ65W1P95zMEDW189TyFdAJSMCfoc3Gj5viuPtPQiS9tzsfMi7fwdN1mnKn4DbHSp9YrfjykABzH5QZn",
  "key28": "4NgJiapJWCzkSjV3mkKDfjQtMc5zmhXnDLpdJku6R6rc6wwJUkGksPnCgACoz39X1jk361AaAj9LCypWmKEQxMHM",
  "key29": "472vUo2kJgPqsKHCGLCyeSzYtYqGL7GjtFzwHhPqvn7YPTY9aXrdH8auw1bX7TYe42d8aeUatiCy3DhS8ZpRUXW",
  "key30": "2q3vXJMPV4MdTmCne8cjXJagiCWv3tMc2Q717P3Leh6eF32mSS6NATrfASp7jmKW4uGUSeWvHzABs4EF9doYvmqC"
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
