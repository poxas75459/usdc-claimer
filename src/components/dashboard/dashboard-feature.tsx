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
    "3xciRhwYuqp1PnAAxzKj4f5bdJbiP9CpBftQMtrFhDJ36PeVWXJAo4orNY7jHS88VjxpZAownwtReyjbsxWUDxXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PhH333LdtqvFDFHduHXUz9Te9K1xM4UjCMKtXXETVkopAZQpAngvNSXzrxp63sEgCzeKDkiRB2jKMn1eVS9zcrU",
  "key1": "gzyWnYvmonvx7udvhTTRmRxg5KcjH8ACU68csPWgfL65oUn7WNCtSZDH85MN5ZWtavRyHnskBgU2HqM3fthTrYi",
  "key2": "5gwLqtoNP6fgXGUjuzjf86rhJnpnNhEkEckCgrwMz7K9XhUf52H51fa7kpq111T1qqrTniUFxHKyYTcVsxzgTfGz",
  "key3": "2HrQvHjCfZ5kqkn348YT9AnheZbU1ZfnhgByPX43ixd54CXgYmMFYe9yBN1xKv4tGdzs9n6siMftSgzi47GAM5g6",
  "key4": "453yw2umvzkXWRXuwb6pQNAfZxrfE4B1P9Uh1oiwMHdAqVZtaBEj7kLDB7hnMxUxYsXXB22NGed5ojTHuiH2ZQ1A",
  "key5": "QnydXtkdkdf867pQTdE342YwhHuVj6JnpXADua3fVMcpX4Rzsupvfv4VAEa7RSFgpELv1aMnD3eu4ejzrExPhGd",
  "key6": "569nCj2ZQbAhjYSLTMswV16krrZCHaEPgcjyQoTi9TBrJMCGujLAgwF9DBUPRJPNtr1XpyBDhZs754rJhKhRFB4F",
  "key7": "3FBTx16DXPghbr67R1b7x4zhKZBvJpVPdEt1YQSjM7JYVCSFf9v5uw9rdZDm4EaHjdg79kVWf3TYPCBpaUiUw6bA",
  "key8": "gsm3rxk9mmfpzymzLY9C4eNLs7NDJyNoc5rok7Hcmq7s5fz73eabjeVu55dp7drZ4qjLgt1bub4ZKcRBrRQoRUs",
  "key9": "4rfMAyULMG1rK2Hmxv46V9XfvN7E9hzeYf4vqE6XiPsggMWHXvf5JUCbWebkLgnnfgQK7NTudaFbW5Tv9zQaoqHj",
  "key10": "WgPe1nC7hG9xv3XADZCwSpf6EeeaNJw9mw75EiYSfR64HN7PTF28Pg1JXWr9GVy1eyBeiFJiAqbRjYgXPDHJzKp",
  "key11": "5K9ZB7PKdNcXGrvJZSRo2kRTQCyniwPKJ5v6i3qchKG2TqCbSYbufeVz4Bfy5pbYVdr2ekKV6RbYxXNKygXYyVMe",
  "key12": "3J3KrP6G4ASvYgbx727KtJBsNa8wg8gE9zccKprPrAg4X5yRCyKTH66KraPJRhhxstBSVZktGotzB4PKWzUQ82Vm",
  "key13": "2G6wAZeGdXxMHa8z4XMs8sRfuRtia1ffbrc1btfaabMR2s7KpeWViJRiHTuuXSAoggnXZob1ktGxg4mJZQUwYLh6",
  "key14": "4N7EAzcxWKAVeE96iGh2G7vX8cvnLpZX5CmYod2dctATdsuwMbZamvhzHq4d4kG9erR733goq96ELRqs15u6wX5",
  "key15": "3yEECK4XnMvmkAQo5S69keCDCdpgVdLiW19AkHbNDxkKPsqZqRr6Nw5m4waPTu6wk5zGHdriCLE4oQ8X9b7BKmL7",
  "key16": "RhDdSP1fDxG2NbH4SFkDBLa2Juvtmd9zefcT18wKsxMH3uHwMAmWPo8nUXEEp9EahFPjiWv61zVHCjdeV9GVBDi",
  "key17": "5gXQaX7MSbccSwrrXVbFEtVKHH3jChaCVrEyXctCuGGDjTJSTRPuPPFAbc4CswtRCSCqLq8GpCMvpPTEaxgAqEHN",
  "key18": "2X3M5oUEBq3uMiGnVRAZ7L8GcYT24pd5nKFA4o83hgs4yff8BeQQByTnZtifTguU55LRFQDVtz2g2gc5Y1oyyJMr",
  "key19": "5RpQUvF7E7SLjzE9xy5y2axD9m7onfXtFFHbpEW57kFbid6Ln3uuxCp3Q5q3tiYvCpFxrKJwAE1Azw5eQ5FXPdUa",
  "key20": "35yw5qWr4KBiJueiHXt7DEZyouYbdKbjWZ4EYCLUc3WmzYBYLGTbLGdnEgNy2ee5CnaeWF6nHwDLXZzhUA2khnNj",
  "key21": "54j8ctxWxeV5h4PFAiTrMSxrR6GjtLMBBxqeMCqVC1GXk3t3Nw9mp8WTjSihQEVX5sZu6wVWzVBtuJEhWWuYFi74",
  "key22": "bCDU6r3XFnXT63McvWngmxauioinPB1Z18rQG1JH679eMKHppfBmyee1W31wiALaaF42yS9GzeiTPGuvHTp1okH",
  "key23": "4NmauVe2B5mhkgSKRtN6EeQSxesMFt4a1S9sNxdPd2xbWuxtCwbfe34hwqLmuQasGsSgiBCWb2SAK8b959FDvV5d",
  "key24": "3Cti7hpYShEVAGE1kibEeq27Hr3JNuMFfD5YRgGytu54Rt63ivyJFQbgz3ayN9XetDbDTaqn7D4SbCnsNQTvYxFw",
  "key25": "2un6idtMtGYBSkUwmQGL13xYh96WyPwsUzSaVdSKbyvksFUPpbGFdPsev72GWCWQWBEdjdRtUzW1if4AK4eiLLGa",
  "key26": "4tWdSEL8npteyN2sUekezNgRtdTz9QwqatuvgXeAExE4ThYW3G6c3pjUeFpZd2GaNGqkmeQj8DxWh6PGokrd7b9b"
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
