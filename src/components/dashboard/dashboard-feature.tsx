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
    "63aKoiWRpzRt3BWbhoEVbvaJjsd8CQJksSyzQA6XyNLeeCNKa3UftHs1WhTc7sNB8vjVAvsgZY7uZsaXCgS35a9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ishAU7euncxkMfX3fpQkwbTrngXsAD65WftWSDPwEJH4PyZHeikQZqKZ1G14r2NutZrmtKZB1bh6xoxtBvjHMA3",
  "key1": "3pjcjuATkPp5wKSKYaS3xQD4ZuTDR4uXL8xEsetSSDMKB7hqMiqXzQonVsXfexP4vXstCFUKQAeWUCh78SBhAgN3",
  "key2": "24pNBZ8FjqowwjMAHhx7ricyKXWUmhb3QmUFPRhmLQVBs5hUaYefdCLsbBNvYuPf6jS9TTk3H8yUsFK8ChsBj7FM",
  "key3": "5efLhpmEpi7B4xjXTuHhpNPvMXzjR2DxAdGwLVFWfdymZGbWfaL45veFt1cEawnEam7Fj3ivn4HotvnUnrimLt2y",
  "key4": "49LV3YF96PYjLFEVkCJgvMrfUt8FYYu9W6VU9K9UvzFvCApsVQWSCURA6NpZD3sQ1a52kQhd7fmSdZ8KNuXrxm5E",
  "key5": "UVycJT5qipxsna14vjvR65qpimVV7e4PtLEwVzL6dimsmiSLHoxCWxGTogK4qcnLQ8oe3Fe5Ln3DtJARQhgHfqB",
  "key6": "27oA6ULkUQcr99vX32noKSk2gt3MuquvQddbywPqL3ZNwpipiUPxFEiicRj8tNw27Adt7yo2SX7dkda8UzfWGFvj",
  "key7": "4w6Lk8v5ACPt72hgT5kHvoEjQqCdAuRgn2hQBa1tBSJ4s5pTNsUh9ELbmtKogoRTPjZQ159fxXM3JkodUAQ8437g",
  "key8": "66A2rU9GLw11eQow1KpAYnEtbtMdmd4WCD8H67ByhvaXAbAJYTTNi2dKtoFrxhub4WFDx18fQhTV3ggCUwHqiBC1",
  "key9": "5w88AYvP5mNSYHrWTfjyShGVAqGYBytDo9675qM1GBPTaBQaks7MsTQz2QufGV8dt3WYjpjGi24ZXLYZ52tVh7FK",
  "key10": "5YJbiPrh7ctF5hbdvsrotb7wGtVrqbwykxfS7BrvcwbViu49tgiE9tZoo5jvq1aDYBjSUhi9FZdrcdxJvKfkNpPp",
  "key11": "3SS5NwCjtCmPLge2w3CWYPNDwnYgQekb7xhDs95TMPuiEa1w87y2Do94YSUw1yZ2xU7R6xSbbWoY4iUdCyF3usj5",
  "key12": "4HKrgrWv6WXMXByus9kkoH9npzbi3cR1FjTL8Bn22YbSNz2vEjmM2sz8r9cbJTfW5rgQ7TJeobC7rBSDfc3ePPQJ",
  "key13": "zQwxjDo27PqS9ZWvDaUXd8FYbs3FbW5LvSFKbbZV9gtmsq4FzXi8cuePLcJkmhEEHkhXhjGkS5gE4zGy2jWcy3h",
  "key14": "4axZRaT6MaiyMbbQKJzdcFFhWWNSiJDmWczktTx2M8iv9p1xeQ4CCGBqhdkYDLCxYFuXrggF8iWAVf6F5Vw6mDo3",
  "key15": "4FXsXCMyXPAnBDMBZqFGZimHk4ReYzuu5LiPFUAaZXSoZnSG2LNBCyew2wEHmtvnV5y9BQHcaymnsKTdW1ACVaRr",
  "key16": "5x3sBJfbTAs8vipq9GJrhrc5WLcX8VR6dqFoiQRYKqcd4mNwoUhqed7gYUvVM1XUuksdHcDsKGtYBE493FEwiMyc",
  "key17": "4dWQF1A7ufm3whYVzHgGC9qwcqopzZWjib5aNJSyEQaPnXfpTGTncRKbEbM2RYuS4JUsGK56sRGHhmhCgeXtjmiY",
  "key18": "2xFeZ3qJ8wA3vuXA7jufCoSm4HmphRgSSv9CiZ5Btk7pdXuTWx6MDTqRfdrBFuWmgCk8v55yBS94DGp4gMoUuVut",
  "key19": "vGjjsuVnGgrNH5B4gsXHyqxRwQCaPoGQXBNLzd3o4Xa8NevJ5aHEECmMcs6Zi7jiXxSwNhG3gL2g3iVQqaiUg3y",
  "key20": "4E8LoRDpj4ULJVKrVB5MFNtQsdenpCbCeM6Hqi8KYuu86UNeWDf13mU4F2wBqMadRKV37tLvAc241MEnHZQDebLr",
  "key21": "4e8PcG4vwNVbbztERnmqxaAdwgEGZHar7phoEumPzbsSh3xibgZsQ2qmJfdcwXmdrwykkxUbfM2huat2f5yEFP89",
  "key22": "4VK2fNNtb7RrLBMqEzxmgTP5rrNsVEh9hbpV4tUZ3pWNfLVe56CxDAYk1A2faDLwaghdJb4RJ1zxFdDJZxrRxLMn",
  "key23": "4TxLeyddE3WiSrCZLfUL6Frvd3YwAjktKTx4eJihPah9JvqCnCD8tH19p61URgR6oZ2pz5PdcM3Q4xCa5GZe6nxx",
  "key24": "qmDEXnz63ukXpbs93Ho8FHtdMgJHAaLs7D3BxyMHHjtNnhfXVy6zjY4623pxuE3DgQ6dSWVo4g8RSjbX58Nz6H5",
  "key25": "44mzkE3dYErmRS9ixg3tCWBQo5xw3EZVi6gS8SiYqaKNWHhwEci1zEZdpQLtHKZePoe1wTkRJmQqJNs5ejgMLkpf",
  "key26": "4Mq54fciAfvXNhWGgBMSjajgcLBwQrwwS7FeFWeJ73Z4krfCutTL77H6PD8mPcQw354pabSxgCE8ZfRBdjymmwb1",
  "key27": "FpzbQuAdTbpic9z4R7RwfC5j75cF8JLRV3Sdt73GAFK1mVWNLnUVRCPNfJgDeckbxnQfK7oCeXZwAhUeEU8JBuK",
  "key28": "4cdGpPqDMXKhQ5EqF6hGiH76QdVSdVXLtppLZqB6hp3tKoVhtLEStA95FfHjtdwdeNR1ZXfgxL3xZkQvFiE2Hrit",
  "key29": "kub594yBoCXR74QXt6nmNHGNgFj5rcTbLANMZhzbC1mUCP47s2MaQQxf12aHqpCVek19hZj2GTjBeugXs3erL8Y"
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
