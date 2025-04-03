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
    "4uMRgVYh2nxyRCxrBN2WYgY7cmptXm1umHt824d3kKXdWtEfPQxQpsn3wSxkGr4c6DVPVpvrtUmkgJKwDa7wXvU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUQUjfvDvKdZ6RwfwsQdfwEUjxUUzne2zsjwEjhmfRBe5Sm9EHaTo76qXz7bgNyD4QAPh4ZUaKxYfkeTfa4wTMC",
  "key1": "3nHdQs9i5DpsXFmimVwR5q6kC11LoVroa6hgfZSdsbTdHEVXzfiM19xUGBx66BuUwAG5i2JMrS4Q6MDhWk7GFhYV",
  "key2": "2MsQcFihKBbrb3Q3zt3q9ShbmxAkfvSzoHtgRUzENi6Edi6bSB4H9jAhU7XLS8CkXKeWqKVsYjwn3Ck8SS2GK4fD",
  "key3": "9szMSweYk7WtoM5KAkv9gBUkbnw7exRcvWHzk575nR3MHjrRZm8gE6nWhLnF53Hwo1CMKtwcftGWMu1BCRXWVyp",
  "key4": "337kzbhnVJkDXUPYBMN7j1xHnGisjAcFe4tthSwgJf6QUsbvtEBtqG2aQRjBxSoexhmswoGo6wWYcxe3ec9naRyi",
  "key5": "2hX1WbKWhy73rxAaQtRytGS5RS4JDTAUbwR9ZbERhcxVdAywaqCjGvQCY9pLD6yNX57TQAoSaJbs4RFiUGQseLmt",
  "key6": "4phGUvvP4EETxEGEHuD2BLzE6yUceiizpG7Q8AFnVxqAiK4JL8Er1ZDVNdxsXFpw8jqEMAQmnjKnSswShn7f2HvL",
  "key7": "3ejQ6DC3ozHiHN19dkj1nw3T1Xmr6PeLF2xMJVK1sKDmoqd8RZVo2fx79L6SqGhD1jW5nAoRmXmUptiMv6r98HTx",
  "key8": "2Hp7DHBq4gNNcCWkXTLyk3ad3RaMmRGMjYFQvSEspvWHAKmqeb3sLNrmKf3rk3GjEeyzNCURQBdsL3ney6z6XiJU",
  "key9": "3HeCtxcU8AvBu8w2ikZyby2NtGWdWxya95CHDnYRrtkA1BXvxdQ9V6mGAHbqKjZ5Yfz9z3pmp8KkeEabj6faGfSJ",
  "key10": "4aFN6Xfg2iV5UUd6Tr8QBNCo4cxKjyD1aFzjAu42h2r3L6uRYEE2wUW8BHAnmWVEt4nSFEYJp2D4nKqyJuyHeVMG",
  "key11": "Mm9FzDrW1qWfZqmU3oDa91b4koc9Q5y4t4xQ2s2AXuLBujfvjoxKmwcAdRx9tD3NMmrNsQo2eedJbrSpuEat1gf",
  "key12": "3FQEJzzSX1Pw347TumiNgAhRY1jvf2h6x49psvHm15JDP6HoJDAuAzEspreYsjG1HLVMuNS1vzPcLvbBNtGHWsaM",
  "key13": "4exgEZVCjPpP3NDLRJuEbXa5v4GrJWvnnVVDtQFFqP5kRWDtEmBE2msLcbPCm3VLNt8ApyrjGFJ81tVhKH5fpSEx",
  "key14": "3iBqaTQ3hStSf8mD6bDy6qauivx3N3rCMn9CGbSTEbfq9LDhJjktE982GSgyVv2Xvpi23dyvMQugjigPZeB5ffAw",
  "key15": "3v6r7bWSGujTbuR4Zy4t6APqvkUMGYk9ebhJQmQ8wrGZBRivuqrhpEJduHTwkL3qBTG2pVQ19dRvNdVDq6ySPErh",
  "key16": "2c7cQyKBa6oZdEXdCApHPucUFfH6r8HdKiPXsipQsS1vAdXRNbRwrtnTo2h2uzDQVL6UswLLCRmUEkWEc7ViQL7D",
  "key17": "4D39vgLz9SeUGNHuNBs915T4hM74artvfEbN1qf4uYeoGPFmVB433GxeeNqMfK2MuUMUSr4UScUBdTDFFpGDfBzi",
  "key18": "3bkRqAFeWZeucw4w4WXxSCMg34qHEE3xfydkJCw14pUzeNEFmQRgyXR662EeUKaLXdHmVf42YBD96peVoBKAB7PF",
  "key19": "4CjBjjC7c5gKDKtjLMZx1EYcHjbVQXodH5hfZioqt1yrPM76K1iaAKrEa1R9F1T7QJ6bfkh98ReaTwtXLSj4kTx2",
  "key20": "4T2PHXgt7Ty2pWekrcMGekJFyC89w6GbzaH62UmBYGaxJfqE1igzi4245iuyz4B2Z4qM3ZAQdtxz75823ijuu9e1",
  "key21": "5vzct9EHxjKL86Mqe58Xr4XEU8rbot1vJKieQwRD64AeXF7gfAbXbBBMscPCJhbvJrBLxAqahx5krWuovSz2W93F",
  "key22": "2R71LJgDycv2g5vmUE59tik5PMPdV1rC8592mKJFfxrzY6NWCztdRUZ7dhtarmhUnpLDSqBS4FeNMCDYTWusD3dy",
  "key23": "4g8mWzta3HVj8oDnn9qLUUcnBeNYdN38qfVVkeA1bE5o2CBnUPUwy472Ls6FbEMBT2ySHymKbWUUKXpwaFFXuyze",
  "key24": "5Y6HuzmNUVwdoL31HzZSfbLKERrTdeoeJu6ojny6wVD4krGwEdNUADNHptqr5Tdipq5NykTceVmbxYAH5NmNHZ9c",
  "key25": "4U4XrJGriHjDu6goBeKbUfiPcPG6VkoHqnRPMKUr9C8Jisi5mP1VjzdSVXLYwsiSExx2DRjbQDQVisd1cVDAJt5o"
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
