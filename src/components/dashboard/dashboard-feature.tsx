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
    "5zHGYkg3tLv6xsWoE5FwGauhgdw2NF9ts93mgzcyLVbM3uuSbAjA6cSNhPQcijBTrLtd5QY1Q5r59rrPb2RubL8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTghLvTjtPK1LWfa6f3r3njBpn7zn8SBfVC14KcgwtpyKbXrWyUK9g5q7dxYpeDzMawkG5a1yBDzqGcpe1VGLpN",
  "key1": "3vsUcAmNmiG5xDMane49pZY1Rf19NAULYkVM4JgJEL738fMKQgfTW5r7HQUVVY6qdfZhePvXBRs3T2xfqMHTLNr3",
  "key2": "5VXWoQ5cAo57Y2R52sjWTTe2ciA8JPbGYnpmAU4ZzXFr5Bky91XyNLUJnRY3yVBfHXqYEUnrh1K1HSmuMdu33xpP",
  "key3": "28arFbrC2htsyNs5TnSkNKogcjaNFAKgaPwQHziWBNGs5wGGispskqbk513btzXTmY5sFi47fNp5it8CYHq1xQdh",
  "key4": "2sjV796tU2JVu8CnpEvAciY48KbWzA5YxoqHqmJiKA7NVfZy2MgGSQpXHGRmeeFK6amSCDmhHQZK2hasXKmTcoXJ",
  "key5": "5mk4AJE3zsuWmM5hd3Hw6s5LEWnXHX4whBRTdiUTsZacE6a9pxaQttXUcxiQqZNshqcM6bh5nC4LQQDjSTKNwPMu",
  "key6": "aU8Dg4TJSe8PosGmR2DpWNrkhU3ot3mB1jjdEmrdkeTaoA9HRFtazrHbqgVXP7ktn7YVVLEV27pFkNKN4SkkX3a",
  "key7": "3ji4KEBBhaYyKzXtFjQFyC8RWFaN4ju5qko8gGsom4cgzhfChs3R4rwvAnD7JWdHew6DyZcKpGB3bwjoG7neDvfB",
  "key8": "4hczREisJq1SYbMkRPFiPGbSY4XzVG71t7UoWqsTydKc7RRLGXHGevDUJj17CgFtpbbFgLdqCKeVxXGxJSCBZQtL",
  "key9": "3AkDotMwUk8vMYZBArshYDnAqW9XagPnYuaVfXWePH4oRdXVVemL4Q26LKJ1JSKS18NRKxeVmGwL1VrZ99gMswij",
  "key10": "2dHzkCxGo2bsdHmDjzBbeVScJe11BBvhVgm4dF8EXzkq1LJSsjkG6VhnfPaGrvFdiUMoRjococ481aaK2jhgtDqB",
  "key11": "qNkhERSRTEiTGT2bYXbw3paVntfTrZUt5QsFxFKQsFnUvJbzt7VX1CkXjLq9WDoBvEu9VbqKBYUJfnZ1hkp9PGY",
  "key12": "51fhz4v3DVctHTgpEUCnKNMRSqnA8UMNqob35yxKACArN29418GTnCvWtMhEbvfXofGwuqwerD72aJ4tyxS8fndZ",
  "key13": "rN5gtcaF5cf3wyJTVTL5GrdYaq5RgnmiChbhCBKYt8nF1ZQpeLnsQ2a7kkvGDRuSRWSSFGMyN7hCXyGsR22hH4g",
  "key14": "5Y9Wq7Ev3tDxVqHArzBCGMPZLFom7qVx3xxyvAxe41udb9mF6veSTgvquEadkRqBtRXnh7NA7gfedjm29EdzGss4",
  "key15": "4bPUvZV1Vy2h9uW8sj2GAwKCxWAe2tZQ9zGXfk9Emd3ZNegJpRyRg34aeESGArQUNTGfvyeiRCjpbQYt5DrzUz5J",
  "key16": "5Goubvbnecx2Lx7caE8b1M4eu3SgUZ9HbhDAruZdUNqmsBfUFzjF42HkoGr1d2efD8y4AnEf5cJQrX359tYsgpen",
  "key17": "aZBzrn7cVesjWhubCBuQjTNPiVi6Puv6zixXZP1B4byKghUZAGeAU4PQxzM4nxxkT5c9FAehDgnk5kTPHPU3Ybe",
  "key18": "32GzorJwTsxNwxuypVpPtEJtSn7MfxUAAA75MCS5XuepMneEzF9bCAtaiiZtb5qVgFapNnNRyg3Zd5w1td55rRvA",
  "key19": "2ukvLeVRK4BtRf7tfhTALGAXQv9htwGdNb9PuCZgJAd64NxW5i8C8v7SUTdzirvo2XmtV4jTAJsSUCxuyJZRT4An",
  "key20": "4TGszWjs5me6hDHEK6cQVQBCxFBW9qX9FhYLbwXvjSpyyMPfBEGMCGt6sJqSYrpf16UrLEDggB7pGbxCF3X5rjAk",
  "key21": "2tR1c6ozxpRsyTnFtZrUQHdN3qBhpXnhKFymx4WCsL8oDmYpYwMkMNjfVReZVuWbYEHH7gxXP34hoGGNHn1ig7HX",
  "key22": "3d8YGbwDvNZGwFnhisiYs8jTZtmj2XHeVuC6V1fSKhr5NuqQunZZrL99qZzK6JNb5FVixM4qr7DSBwkE2dNrDLht",
  "key23": "4NAsSMuP69JPw237THopnQW5Xpyw6CndcarjaMgXgaPSeeHH6otLHrQThw36eKbEsXcC5anRncu5PeW3rk52KxNd",
  "key24": "4gQgfjST8DJnDxt29FPSwS4kehjxKGBXhwDhKLTcvbgpRqJed7hCrNETN677X1UDypcmre5ZMRN7HY6e8Vdep5ET",
  "key25": "3Ljq7g2xFWp6sF57Lui5RVSNsckRrCkjzVDZVPzsKKZM4GCcv6E7QnzjeGqBV2CxEnaAhBAzsNXdrH4QzCxYqvCw",
  "key26": "3PRQ6ukKHnf8gag5z24x2dzFUUSBCqHoKdvviR1DvJ9cn8gSoiszmLtstgTyQLY8znSFYhu5fS1RhioiQPyDsGJ5",
  "key27": "23TKH4D7kecykMDRSyoBoEQBzwJBVDFhTbh9MVPs7namdYqt3ZquoSLHNcBP7Km1EAg7v2MwXfRP2hc5wVWzD9Vf",
  "key28": "5KUqZnPpk2imGjWVzNmvinAmdJEhqDofDRoVyVyVXk3HXznSxyx6ZQZGrrkuTFaEzd8kGZueGvnDmzPqcvRebS9v",
  "key29": "5MVzukatd37mBmpYJt1SLf5eNT4qdMPUTpvHfy4TmxkWbkcwG2DP5XW6YMtmgdivQBiDdLHnvHjTo4LSEswfwpt1",
  "key30": "3ANTiN8AHfK2dV8A1UnLSmtwU3PGzb3Qp8MLefrsTGjsx2L1WuJiF5GGjSNCkWHq44LZ5EorzF4kHgpKs9DWSg3C"
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
