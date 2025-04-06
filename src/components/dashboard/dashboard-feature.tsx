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
    "2hGtfvrLj4CCcsbaNyWtbSSVtmybCAkCU9oaubTta2hYCRfNx2oiw11K2bga4yVfyT21xCE34LeQitQCPu3TijNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJcb1QE6AhKidUzJwWAK6J2EA67x7taSWB5GSEQLay1UbW5Ez1hGQxctUiwe7naFVtDMQnqXgowEAhZYC9r8dTB",
  "key1": "5x5cX7vqyUnMuKbsdGp7UhAShx8FSG8gG3L98cyF1dc3Udh7ioAEsziuvMkbzTJiP2hc3ECuod6e7nkirMxumfWQ",
  "key2": "2mGWxFXyNfCPu6U2FU4pyY1DEdCuLD5ydaTuXKWD6Ti5ZWL2uLxmwvtPXHkgpma3RK14rKeGrY83hN5cPEtsAH2x",
  "key3": "2RGn6fS3cWr1RGVhJgufhCtsAgbtms65aC9kDjSk2NHPATpsjMRzoMXYThmmPTdJmeQnxs6ekA2iQGg3d5ub4x8V",
  "key4": "4fhmKvYBuq6TumHwfKg8RTB5NimdkzJD4PjhY5UDrjucB8netVHnFoGq8WQU875eL7UHKZA5vyddgYZ5Zr6Fd12y",
  "key5": "o1vpXh4CeTZ5APuSPFbystNP4Pn6urVB3yQmSCkVB6ByPJ2KfLdD9ZrT9ZeC7dCFnVBdJjXXhgMeiV4fbzZ4zCa",
  "key6": "45Z4XyMTCz4nZws33DvZi94AtxapS77CUmggYW4gDAwfNS9Y88sj3mJxEivPyQZX43sWRYwzSZRVFLTWUP6SjqKx",
  "key7": "27xcjCLDKcTf4ji3e4fp43mAkQQZ6Mp3ZDqSmgMZXc7hgDcPfi9HHAkAMgCZpdYWyc1RQyGuMYTsehtgQ3QqTHtq",
  "key8": "4xLUhPFkZfEspeXr48KGEvyHmtEh3eZERSdJxUbUEvmhrbPWSmnj7fzBeK3Ubo8VarGsXcfppcbZDtgym8rdvwYN",
  "key9": "4e3PcjdP3BjejhgcRPsf5jJfXi5LAcK68FZoem5thbo8fNXwV1crGrH1QVV5UH6MikyGzX2csqKaTgjTuFe4WLmN",
  "key10": "3sgNxbVJbS98hiv8M8iso8VkgSMMpuwTRSXenkWi2cDi1P3YYz8JvmmjX4GknDTiqgTgjVg2MEvatzxV2UQ2Lmdk",
  "key11": "3yJqXE6P3pMFw29XqGaLY83cSz9gbfqwZkM4aWxnL4fEbW4qUowjb4AmkC1E38SRvtZFYSjmAmnosLDbgSyK6bf7",
  "key12": "5NxxwWpgeTVuRRPzjc5gBHQQpU4fyEAjsNa21wNRDchr6c1f77z14fSj1mJoWUsnXx7DaLx8kqqo7P8BZ8HiHSjR",
  "key13": "2ycKZFfUUsX55jqEpsRPKvXBJyf9F4TJt37bKkj8tLSmU4wjXeLEKRMaBX1mWN7SuEWTZA1Kex7TAEn5GQY6XCDm",
  "key14": "3h6HX5qn4KJ6BQdpq8DX1XHUjL76z6qX8V2fx235tkWPgm7pm5seiAct4yj2HyXUM4q8FbSHdodSwURrUBK5r5cs",
  "key15": "39PZcPzj7XRPEF5YzoGV7mNQUuKeRCVFUyyKk5CgiFsu19aVrx7ySeBtYCcVu8JSZ8AHTLgRtT2QCrWz7eZ4yrgN",
  "key16": "UwqLu8EKRS9kM3F2qUwMiBpdAYiFBeJRQ31oTsUTJi8GJVzUtGWwnprf8s1ibuw7eu6cV6n57gC1FbA5ZLBi5ng",
  "key17": "4A9Uf3K5xcAG2vVUQkB8vEYoNugxRQt3x8qxc4R1mijGDGcVyPEjsJf6J2x8ArWRT6xutXUjjJjHtUCiWgjVFzyM",
  "key18": "2EQhh3N5B9g2sHdnTwLiHHZJRSN9CMdGfchYPkcBK7wGSDVnUVSWz1JCZJJgkTUbCEFKNLeeZGgQwzejhFi3ceKM",
  "key19": "yehv4Vk5J2TPgmJzmSrxFd9ikzgPV9WeHb7h58vfYgtoPiMGk2q597PdwVYJR1LMQR1RBm4aZJG1xFAowWfEkgP",
  "key20": "qXK1qAhbKQE2R3BqRaYPn4k9oHMUdD4eVuVq4oKLn6mgo9HkywcJ22X9jC91oE38Am6vdpTWHNKZrCvf1KYfBrG",
  "key21": "4PmW6XDctcZiqEfaHp5HCqeF4mteqfs3HYaL9VT6nGjxGeVZRsbLcM63cwiCHzsoWCSB5rKEBeYaKgoBKGQsZ4T",
  "key22": "36Y58XJo8MM6aTPsQUbgNkpQERZumnuMKb9RzpFCi7PxsiqYcExGua3CEHXt9dgAZwvWmEu3T3TLnCDfrh1XSj4f",
  "key23": "62s7c5DrmLGGvBSmFvwdLwVnYXX4CCSuoFs6tmp814nFQWgULjHcH6UTVP5VJZYDkBqK84JSXH9FFSKCaBwYL2jT",
  "key24": "5MSSrEqfTsuytxDu4ZpQuEForCD7hM3CHpdTy7vUJKZfXz6UUc9XCK5FSgprjmhXxw8ZiwDuoMEE7PQSNFMLVzqA",
  "key25": "KrXs5qHw1QQu19pzV3SNTCBxpPeTbonvdHzwus5ZZgWt82GJer6baoToSkYFavdBWXp8k3EqpNo3i9yxkctcdqE",
  "key26": "49MqPevs5g1Dc1Sh4ufL2vfyAmFTeVKhv9FYV9BUmdZqyhRut6ktLKjARtdXRXRnEVUmTotEwiZXU13KCrVQnzrR",
  "key27": "3BrfGbyCtFVKEGfwywQMjTYbEkcCzQYvWCNLcszaNM28BLKoyL4k7QRQ2AHGZqgwRCEJtKcTw5k4WkDRT4pyrfie",
  "key28": "2zemba1iCZBtYUjRFKnDcxdsj8kvrdUh9fwxExaV9ynsA8AHuWRq1VotCc5cu51BpSjoGXkUpwGB2H9GJ2x4iTQp"
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
