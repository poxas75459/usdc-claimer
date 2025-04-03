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
    "48dt8HJQN3NqJc4xUySDNQnCT7LdWeRDxBvmTcUsjhpSzJn7fgwKPLfK33D1i7yoWXW3886PoY8oCdmyrQh31Uyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWtGiprakk3Rc7yrc18TVqTduF1s3CzGNPopywP9WEzXFNqaB9EsYCSiXAhrJBqSM6czacKteDobqaRzX3hjgTJ",
  "key1": "T5JUZk1hQ9bjV6WydP9DMGpVKc7uRxPoJaomj7zCBHaSQVfADgNE5TbqJg6XDLu1gGbKuTgBRvkU7exKFfrHpG1",
  "key2": "BbTKRkxMZZHvpTtEshu2ZAWGz6hERCbA8TyghHC3jbNVMYBYV44FnBsgBkSGBT7udVLJ4ootS6xhCnqmAbQzsgt",
  "key3": "5jz5LiKYfcWRHwXLqff8E9MtRhMqepLrNsBEgwguhK2VFS4zRmLL5XsSEZijUAY5yHd4ZEapmjgh27T5Ra4RgAqe",
  "key4": "2ub7Xv86xLDLMadVu9SSSRhuC4ZqguodGksojNBvV9j33ZRbqDHEQEH5SkyrFmf8NTNYAtJc5Sg8xtPbh7PXrPsT",
  "key5": "5ERo1D3NXfxMA4783TXC2Zi6N5gNKQfoezPhizKXN9ngCT8eCTYDKi42mcQddfdyiyK3a9SgXF29G8noQhoULsH2",
  "key6": "2E4kCVBPtuS9waisVMYoHPh11Hpuhw7jYBPuQUGgQSn485BkCbFD4tUKgP3qq4cuXomYLyCWqQm6TefXbMvmL3KD",
  "key7": "5r6DAk4wPyC9YxQybGP9kPg8iS2yfZksk35frQETF1fFHLxCnacVTeYkwTysPxbKu6Bwq1cW8huSYJT2SqteHFnd",
  "key8": "2YrgmRL1jYSt25rsAkPFzG4YxidPMSy3ES5V52SxXRUU7THbRb7zrXLD5LVAgh4wARfusJtPhEYQdWZiuSAnebfM",
  "key9": "4U7tQE9qbZsrJbMNq4prVFQi462S8g3s4ipZEfX9ZV9oUWyttV67KN4kvhHWRuxzX9oCASAGHqoLrSw8aUW47pMa",
  "key10": "3x9eWd7tWiAHDEcnkQjs5fNPKMK5GVVENi6F8yvL5m4j8mbUJD8ZmuLesaATnMai7LyXrw8U7GMy7JnnnreGKMUB",
  "key11": "43pXtsqHXAuMZcJsru8p9qsbAZea6XucdJLzkx1diKD4t4jhnHDupJmb3eTcMntM1DYGWhst1BRDLpfGSG8b6enG",
  "key12": "2bAgS3iBiHxLLRzJn4ACK34VusfrvCUnFr26JpABs4osBMjfwrUXxzeNEfjcrydMLYSZmy4hRmpx8hRMaRhGzrnV",
  "key13": "3moXkB1ps8NSGA1zWtgqWFmvPBHsqNhV1PMD2RngK9hQVZQmoYRimFEg7UynqzUJLJQB6kiTg3vMteBcgJqbAwEa",
  "key14": "2eS3G436spXSZg25JPzPSj5ojhpxCgutSgLGQga1SaZqPppoxFzKsDs5eV4dtNzpuCjvQE7X26FuHyAiuq8NSiPk",
  "key15": "3NnNNis8t6Dacs3bwu2zo3G8eeTUscgL7xD5PT7vx4hCbeZcZoShe2arRvaa5V9SnUyNWkbDzBmhXs8xfJ5YcYTg",
  "key16": "XkpH9EwUmKm9KX99hiUgYBrV1UcTN1QZRRnR6jG6Ctd2d5RaCFFVAWqeLxDMfhRq9qcqQv5yRBUSmTWUdPXnczC",
  "key17": "3eyBQVcUvh19sjcc2uG56bEWG4SnB3cJSBbronJgXmFW1Qe6XEebmAuXSuMW5piXGGc1t3QBR8KD1Z6UVvVD8G22",
  "key18": "3Kz84UmK7kr4cvGydWME76ZXj14rEApB1pr7nKdq64GgsGAXFdZLAjfvzpPTzSetnBQXSN84cv8hokyXPs4xEEWv",
  "key19": "4jrebF9jxETomcCRjKmocwwSKecNpj2LfY4Jkqg91fM5o88RnKgBkXxbWbGvmqBbzzUqe3NTobmMk27RCQKSsQJi",
  "key20": "45jY1hnp1LgHHebrcb8y3EYGatXch2GCEEidwAgnbq7Km6ejUM3ttNRrxWhtV7z1HrqVyuSHNuHah96JprysvSff",
  "key21": "3GWjELBgYucYFti6RVmdBqGn415SicUUoTqKwDxqRAoeRRfAPWEYmdAh5Y98jcY84fLRP1b52r4nnvXpAkpXJrtq",
  "key22": "219e8sHCK83gGXjpRarAGTSax5sA3k7E3pocWSb9RpcMqgoEB3urN22onCWkKasuWiYyTA8PJHLqRpoksWh5zMiU",
  "key23": "5x3FY7pMcQvCTibRNU2G5jovyt3JsJ5v9Z6qNcMzNz8azZTaNNMzyvN1MBUt869TDPVCAWNUwg3XqrZNoddzQq5H",
  "key24": "4QQUyuB65T4eziDk63Cn6453baRE8krVMjGrw6JqnJdpfQvdAg133rHq1LJ6Q7cpe5HzMkgzpKyNityiisYByPHG",
  "key25": "5rQZ5U9ZGtJiqRCqetBFvvtfX9XfFH3ChuYPJmadHYFKQWiRcxLgr4T1m2Ft27e8m4uRhfRbTRaVXh56xDqupRNV",
  "key26": "27pT5DstL6LvM2PnFiQNMchWchRUDR9hrwuuf2dAx2Uqr6M4nVeoHvYGNUBSWpskktLWxw4fYKW1jhN5521ezuUF",
  "key27": "34pnSjBHvXASTN1hNu4kJZPPzzkMtjX4v7jKWVWHVikXpVHcpchwhvW7ro3sSNhRQ7kqfBNchKTp37tdvPz59jjk",
  "key28": "4hcDrxxpHzFQM7EwmtG8GJXuZJy7jxrGdTJEBcXtpN48GVxyhXjSaKwkJDtD6x5KrHQjwm5MedpyCduL3Uw3vXr6",
  "key29": "4jmoFpk8BhqjA2554NdzaaeRRFiZxRSAMaZCWHrTkfPMpKczhtyEyVymMQcYRBpK1Wo1AvcV3nNmAnvveKxLoNCF",
  "key30": "3dD1NyE7bZSWHiSh6zuJ5AdzRT92drLVZDmhoeEqS5BxdhB5VzsFqKARRGftED2jsBbDwdFeewfDuQS9vTggxzPt",
  "key31": "37UsnvnZz6A8yH1dF32XWASgiQqUFssPMhJyCUXxupjJnAJcPJe1Dqipbih52iLMrZEjocKDcrbfoXPSsVXpzqEh",
  "key32": "3hvdfn6Z4EW8UiubpPBA3mXAw1WKmZ49r5bkzH9CXWPWcx4Uz7rVMvGEC9p1GHQ3zGqruoJy4jMepRt6QdCjaSQ8",
  "key33": "NCHJ5kdwjvsjiHBhSjNyiZAjTVYvRipZ2rpX3mX1fjm5eL5t9nJLGjJWiJxsFco4dpNxvQofwqerUyhnVkzU7eD",
  "key34": "2hxwRGzsKEMCoRmSXoMEEN1t6KnRt6bYCQQKJjgy9efoVBcTHBFiidjrk2L19y34CF5Mpkc3Q1PCNNyy46PDy9wn",
  "key35": "3kGeFLPRBjeAq28vVAaUHdUbhy1rNX53uXcMeeT1e1V7RAz5wiCjK6v57qRrpZ3MaWzQSLaB7AQc7VTHexoJUTih",
  "key36": "4jZzTY91wAKi8c3d5Tu25RtsCL5BHL8QBR4E34K4W6ACoQj7Ge1CR86i9NEjvkKfEcskz7fCBfNTMKbdwSq5pfKH",
  "key37": "FmG8PuMg77GGym3oJ4sNcuNddAHu8A5x6kVzooLQfL7B4YNedMpEdjo9yzHiiKC81DbmCMuP9oHoum51KMUKGhC",
  "key38": "44ycSLAs16hpADP3b5Nx667zxAhWAefsqpVNqecd2C5TRwNyaxJxehWufqqSkyttKjBerPyEwhguBsWFekrTtEc",
  "key39": "4Rw9vyrM6kQZaDbSW4uLDiUKe2hvZs46wZTn2XWy5NJzRZqhDDjEDf93Yop3doARqWutDtT2HAxtoa8B6Hj4389r",
  "key40": "364DhzohbnY2adnHE3GvC8D3pvjZy8KHWQ6DbcZEpbbFRZiX6FAdBvY2uyeXZbqutJrUZ8Jo3ib41BAiC7Wy8UY7",
  "key41": "4awKdFDJSdLWgrppXC7agoQmHVNyoBfNsa13kJxYj4LtANwBrcMHaVmwoDBJbWs6A58iYx5VQB9PyC6Kf8J4uJNM",
  "key42": "59vBfkQCxTN3iTobgqF85wCQKh6Lmp15Am2uCBM7LTBuS8UTV9zGhtABmmwjM8dcMGyrNSjTGLqzTpKcTUAqCsLq",
  "key43": "oBWi8XXTNaGvWczzCfnafP49iAbp3c5Weq4GS4x7THfVR5YRnHdj8g4ap7soaeoK7EeYkMp1iZMN218qprmxSRW",
  "key44": "4mZfDnSpUZoLqwbhiXymipBbgVopRgYt8hX7ryVvTeeFTPa14qbe63T5j11pyiQ57AfnjaGrsYZ8DHEW7Fc4CER5"
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
