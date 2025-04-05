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
    "NHkTfNsgXXF4yyxHAKpn7N8YR1XMGftLLPKbhPEFFCqo2EAsJotXg8kxdBpiqFUXB2BCEMKkQeG2GzqjNwgBcnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iPZfYzLbN3WKCT8htsLTNrqK6bUBcSMDyTBUy3o9m6Th2MMfchyn4xzsisg7KzEQmLagMPuwfoH6yv71qLz2qqJ",
  "key1": "5Hoczi4KLBnY89P3THUwgjwEkB6L39ekmmYwckVdu91v1aJLTp6URXQASiAaXYwcQNGjdjkdm6kG31PRVtZyrNxX",
  "key2": "4DVzL9z16ER3QdbrRahU2kZ5DJgAcuQLtQzCLL3mMQ4zvxKUEQH6R7rjeAWGHS1ApTTMFyAH1DB5R5W2pchx2xDR",
  "key3": "224YdjH8PRzG4UwejNveGLWc3vNwTVdYjq5Xp74pT2pNZekP2U2Q83AiaLD9nPhMUePD2NRhPiFctXST4XZHhUs8",
  "key4": "4nzmxUTBPTBMuafHwpT78iyQJoN7WtcD9Enqz3agdW3dBc6X7yPhuBuswBvKTj7Uh6j8ZB5Uz5Aqud9WtEuupYJB",
  "key5": "2bToBsNKGS1ie2orvPCie95VLvN81SAyxwByJpyFXFp626FZ6SyCXQQd1wgsAevkXSHJLdY271AF9syUfnNKn3NG",
  "key6": "3UpnuvgZkCaCCycCA6M1r8UHJC6NsFYSgJQqqrXJhhSefj6NBm2ymxBzPnNkearxmEenh4dPAULmBUPoW3NQgjto",
  "key7": "55UNKezKSvSvsLwHawceKRCKnjWsWu3ScHXDNtnheC8j19qsyrbGhCELgUUYESDtZxbf1SSq3U1aEc2bSQ7aUJ4z",
  "key8": "G2LQk79mP81KgsjzZ5rXqzy6nT33uJePLtH5artkjKCPzPhdyFw2NTEK8bU165P6VetEQiQYQYBv64GB3TmeLp1",
  "key9": "2VPgCECtrkYWGNApXGy8wngF7Pc2jsECFUy3PeJo4Pu9ZH3dERBB5qP7MFYzzZYQCqrffDVHs4LPMCRBMCJ9AtPU",
  "key10": "2cViWqrv5Detc3gQcTMNJkS4R8gYs5ZUZn584dp4pDzyg5ExzpcyMGNX1cxvREw1Yk4gKDsP5hcHhBmPPTJdJZkV",
  "key11": "2TWvfnr29wd8yFsbz9MF5q9VLsE9vHEsKgWjc8tqYHLq8WBE6qAenkasnR2YvZmGV7M9Go1HN1MK8mnhoWbvrAdx",
  "key12": "3goGBpYcSk7isDVmyn3XhE2jSukNuCvzTV8vMCijuZE67RGzVrGpnGkd4mmyR5Hu1xmgUrGDpy7rQ1QWDov64pnY",
  "key13": "2BcJuxiSsnr7Wk1SrDgghjk3ogXEeSYpo5hEb9aYUh7Jk8iNaSSWraq4EisaLKUSMfGxDcgWdy6iaFWhG6rzdj5j",
  "key14": "5RaK6pxj64CHMm5toEe8cCB7uaGjfGyF26CxEPAshGqqwTm1nZo5b6wcp7qBY7WbPhud49wGv5mhWPKPUrHxEYBr",
  "key15": "2Z6ZHGyRjPbDMfn45HDdZNehyJ9ET95UUP7nBNCWd4CMjLno16tir38hkjLxEgknee8SCSTBLgxf2dEibUHitckz",
  "key16": "3aReyEoUTZuUiu9imUSYfHbTx2u1ZRq2Qo24kqDKDmuYBiMq9cpK7GRfwB5xey4wYH3CrNHgdVeR6mPLeouKDU7y",
  "key17": "2T39y9h2PnMGdpYADbnbsZunUjna9wTxTAr6L8JhXQNNmVoQgNs96j6moNhptU1F3XjDVYhz2UUcJUa7ugCLW7HK",
  "key18": "3dAe1BPTHEaz3GNdxkZBowxzcaTz9LGyj5e1Ye5vV1MAYMgWwhF2XSZRvWY8LXEKHB8qB8x8fH9GwobTUrofGye4",
  "key19": "3f58HQSPehTPqfHnMvrZhu48M1cQGDa4LWRa7J1GHhkaCCWBrUCxg8MYVJtfCHhidwmXKZY9BNEFnNzJxB5p4ntz",
  "key20": "nhFy7zS5xZU4NUYcrq4kMSrk7wAkhYFrRJucUueoG4Wm4XM4FczaAxEY1hbaDDbcTXv8kmxVVoa4BAAjBBNdJh6",
  "key21": "CyPyRdBhZPZ1aD5tLSPXdRFQFzTxZvpqkyewo83HC5s7yistaDrBo3wad38Aid6tPiWJoQH9VnRHVWY6hCsdxUm",
  "key22": "4RCPygZL9pcbpJWDh9HQe2dnopu3YnNZti1rJDAQhk5eUgpFATrVg4Rkcxz9jbgK5BGYwPz8umkTbGupR3X6JWij",
  "key23": "4JYtpmPXWp7G1EDvj4CPmd1Q9NFxQ2p4czGYAKPthPHGiH1zXWHfiD1N4BLNCBDMVV2UBZUmicbSTaChzQFXNzDs",
  "key24": "5hmmBNdpx2rATN3JpRnbvdN8KvqqGGoZqBzjReEfxZMtbtr91rdKuKpKxqFHF12NFk3oLmFivZiX86iFav5dSHCt",
  "key25": "2xWhzhUZAafnnpGbbEircqujp2vTzw9FEsyRWqqeUJyyQCugKFTtD9P7hqrMgfaxGpNNEBvsuijKRxMgcSQRa6e5",
  "key26": "53baBAi46PLLvzCNJGe8BUfhQG6gKWAwMTJwSe5gYdLV7oyHDQthk7j2VNxptz7iw6QXf2mvSBALTCaUKCKBpyRu",
  "key27": "BneZigQueJTB8geB64pVQkEWQUUMHFyBzmmvdo8cAd3V9t1RXwwS6B1ZbJHsYea39mbP13dzY29nvVbBmYo3guw"
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
