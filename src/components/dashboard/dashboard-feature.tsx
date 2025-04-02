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
    "y7MG3xBN9QMt43SjEzDPcXxuBqQZaaDTmnoGP9JDq9Pb3HtF92TR5LykGTMPs1wCVm2KYL8tY19gEY15RRA1kZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBTnyD8JsrhWdWAmqHTkNgmiyTEBH5yCcsKzjM9Us2BjxKMkEQdfaFkju4BJyRRAowr9KWedWo22965Lepx6cNX",
  "key1": "5A7mRb2RjohcZLULAy5SiHXz6pcyd2GSvLxc6ai7ar84Gd7qmMVGKWSaYqURnKY2rXRweAPZCjRLMhXQE9b5n9H5",
  "key2": "4Jeb9ZUE9FZD2kXXJoSAzbcFFFbdHQ3GV28bg6D6UABNkhiF2PV7PYJrVRQ9HdJcgZarU7VhrcTyFVnsUZza8KQz",
  "key3": "3C3JQT5PTDFvXSwoAQUesq7vrRfMrKsrm7EN22FbkN8BRU6eA694Meackai93mpUDBMB4H3jUVv9uLzmeQ5gUAxG",
  "key4": "2ht3jPQx8eUupERhrjwK4yYgDQymSoVRarrhFh88vngHK7V8R353edzDX4hXbTfcbcSJACiw57oRkVcrRXT8U7yv",
  "key5": "4MuMp2m36Evdm7ggeJ16FFK7TBQU6TGpp7uYHYMeCaatHkmvP53mYoGziqUBFT7BGw5oP48pvTDQq3xbBJxJS8Z4",
  "key6": "RGcYufQE14Tp67r8sw9eXnexiXFPrraGTeAEvYXTkbSCP9CN9PnEBYqM9qxbE6CvUfj4XuiGTRUbkpZEisHZGiZ",
  "key7": "4juMNDmJjyMSUppDYsf9DgDjzjTpZkuHj1nZNAEYFsZVUFG38rW22Q36oXfZGU4dF4w4zh3Mi3Zn6y83qrYqcpYV",
  "key8": "2xWuMNypKxaw4TD6wGZVXaRaQPKWhnsVPrmpGZEmdSc23jcUkd6KX2SZyVCPAuFXRB3upajjvEHZTpEsqznn6tji",
  "key9": "3zSFB3nL6TDnhrxLRsjAXpfDAsgrMRC29SyCpcjzwN3KaSi6Cmv114pCPU8v3Fwu7CVmUwLc9p5HnL2FURfJ2FGC",
  "key10": "DyrBDhuQokVnv3Qokvc9vjYe5cUfvvzuLW8v9CGseDqpkEDyDTCU6UdEDgPG14veYkh8gNhoqVaUvuv27xvnfgb",
  "key11": "2iWvgvRK3SJ445FJkvswgVEmmXhfcr4H2RViuPHwDqETCWVGmefYsNjMHkc9sgekk5H2UkP38frVpV3a9QzwD8Gg",
  "key12": "39zJFfSYcEte1PyuMCPwDySpUVyAS2hCjLPxTSwJ9MSkuSU6wXKK3j6ecpSN9FnsvkdPp2L6KqrBWXYRjFYMzP2a",
  "key13": "5Y7FUK658SxMvSnamW4no656nmDTkssUgbAVAX7rHQCWoCxhNXeugpTfyaqhG4Tjwfn8NiXoPhSQoynui9u6hNYM",
  "key14": "5r82mdMYmSU2gdZ6e4ZXYmP7cg9U7mo74pr1s6f28vxcKTNhdJ8jzcDxRajixzUPtuhcCwzF4HVgcv4bhkU39NjR",
  "key15": "9fo1wdtnYp9mKFunhmPCHmkVnjcHicM5GmuDf7bmFaAPqzWRrtscoDM5xHWMy5YvNvPZ4mr7tPCQzKU9TYT8RiF",
  "key16": "2qymf2Y7SaywUDmJC8eef5qrG89BEzGdVzw8hQFwrwWPj4cYGjDsKJKrqnvtBWcGa3wpMkkgV2Ws8sh4TAUFwY6o",
  "key17": "63GJGmg4psJCbpD4X5tniCAfkTfDXCQekHiznpLzDKixaU3Ut8naqUVxLAH2mgKrCLktNDoyuU1UYWjnTjPS7uAN",
  "key18": "3KUgrevDTUG1qU42HU5iuGa9QoYxRYKLtp5VJFjk4rYDDPU9CaDhvRDH7qSPFUXwHAD8pgycEEXjnvdDUKwxNfZd",
  "key19": "5s4o4ra1oNKmaeTpFo5uN7vtAvz3QRsPJ2yNbdBxVueAbNvyg3JkUMzvVWgvSNjHfLcJiazCgJ6EAYq1Pj5YCfLT",
  "key20": "5YZVNUs4HLU6Eva6A87ztYo1RztCTSmBd18voQhLJ4Qx7SCueK3rrD4gLsKRCg6MQEsUNGvtkurjZNX2idNTYQED",
  "key21": "4q8eMLVysJXik4jg1hZHbEQiRXEtneTSv1n1RWZY2VFcBvasdooGmJAqM8yyw7YbsWuYS46Vrmj2okEUZEMyQHxs",
  "key22": "mokbn72i2e9ty41FdeDjCSMrh2v3TDaEaw8XP7DkpMNKiMR5KeaTq92dkAFjz9btTXbihD1ob5vSiLjZD8nr9tj",
  "key23": "3EeUFxGpLWGN3KnFZKN9JCh6whz7dP9xnbnoUtF3RZPNtS3sWxLzSaXjdiWPoPELNRu9M58Ywq8ZF4WUz8uaYtXT",
  "key24": "3c75u9udYV1zGuwSyuAR4izuAGUNpNx9jffWcFgeDb8p1qsJgpngkVPCqfNqpNyhCJFWxFHBzq6PmBfPVRTvev9p",
  "key25": "5ziuQBLdZqKUZipjMxaAbFzHCLBguNv9ijNANbxDCkGzTgU5sdyLZZxKWcDydSUk3PqpVAGqrBnR9XPVyZReAhid",
  "key26": "2bxCUKrBGve5syaog7hJ9R9YfR7sjwTtessUNiteXubRTNE8C8k4BfuwTVvUp6deSzViAuv6Pcnf955D2WzSdQPT"
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
