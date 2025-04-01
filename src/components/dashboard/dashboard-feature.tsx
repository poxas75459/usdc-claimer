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
    "3mnp7DHEq5fvSE8jaxhJTmHTC5CQ4ckwA5WRpwg9s7PVt3gdjSus81GWrLmhjCZiKMEbhA1tH4PtwWJdW6YKGuk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35n8WAiMKnUgWYJ24JspdPZKWXzQMyoW8AMh9NhWUJthepF2yGhX93JvJyv37T8vMJCLjeGVuw8xsebit6pCE1fL",
  "key1": "48VoGdNRA7pCGoAtYeRPeUEWgRf6HWU9Af2PtTg8AWDuC6z2FXLPHacdSvsJncLU6AhJHFCcfuS5uR4JoGdnihrG",
  "key2": "3vDGWMxDeARgd4NYZY4K7QUUGy4f7Ec7TifVdEaintUbRqcZX8XHR2S1pvHmd29iMjwLrUthRqCmdXRCWVNgQLYw",
  "key3": "66Dbj5rJgx32bMSEHGfnP7qmsaCLjwDQgNVEpPfhD22JePWTzoe1vNbDY49HQtCy3Fufd4J39ep9CwaguabovHwi",
  "key4": "fgq9UNE5pdx5MTJTAENEEiajbCHWBx1UdWn3TN3UDdNsmAmnyRwj9JU3cC1a6BcXLVatPQCbRnCj6SAtjpKuYqF",
  "key5": "55fPC8gq3mp1qH4CnoeWDB6uPQ91KZDhYpQr7iS8Hn3Go9phCiQNgery6T4PjLWnBnC1hpwBaSJtUVbjg6LwVu2X",
  "key6": "27KEuUNvuPi12PF18R4ihwJPRuyPXFn767ACa2RiHc9dY76NLHB3FgZGz6zSbpAV99rmKFCzQXzqG43MPzrV1L6s",
  "key7": "3tUfgPydHTg8XVzMRHnoWiqNE4o4uDSL4SkdeGBDzmP2hJ1P4Uf6pN7X4DW3Bnrpe2DQ522WQtoKzYpjAn42gwct",
  "key8": "283KBx4cNKTwfZSQqBSmQEF2F8FF1umpCUSy2GTHtqXFU21jCFBbukpd8iJq5E2nY5F5PhVE5ebf3qSufpQVv4c3",
  "key9": "Gzh1MDDDYg6SiQstoba62Hoink6ZJCxLoGiB7S2U32Q4jZ2xdfFz8EVjShCfKZbGgcVFa5NxwrfPcvsm4aFkU2V",
  "key10": "5thL7JXjizS5Eaj5NHdyvrWns1R5vbVzxLBgNpUNYLmLZF83mGVUfDn7eFCzKZ2N32ypnrSPPHNW7hyXHJdMFtaP",
  "key11": "45KWE29JYXc3RnY2ffC7e1dBPWZYzC29Jq27883i577XdZeuPHKLpaTFQ28UvKvjxKMsU27FPQSUyEU3skZUeXsr",
  "key12": "3HR7p7kuu6bWn9V9PhZp2aQuK5mqnpjZH48Lufn967HXykyTuSxv9AXKra7dDzt8cZ32frA22CHjHmedSxkRbpr",
  "key13": "3teM98g7ttr71pcVnFc68xL9tyRgeEm6iBFVbzH9L5CZTrmSh4xDX41ptddbavXn6eey1BTB7DpsayvHyFD696zE",
  "key14": "41VsMGrKL86Y3sHD5PZRSUjRRCEwPQvUqJaeriW2P2rWbrLatfFcftboi8mACj8vE9udeoUXkkrtquYcpaWpBEMf",
  "key15": "834nJf7gCLVxiaMmJVP8ViACbSQLdDiz7RYQNzgn8CM5FFJeMiWAEaYMUceyoKesmtHCKsGUan43Fv13oEpbBpn",
  "key16": "2M3fLPkffQvcFby4c97nQcZDTRWyuS73G6aj8cHE6eTAnX9AZg2R9nH8YcuRFzUBPyQMsFautNiNCx8ppjF1pgbG",
  "key17": "4YbdeXdpfgHm1hQNFxfkBPcxiDhsfjrDJ5RRWgPawbYhD2APVEixrs2DsH55aVJSt5JEwBDGJa8fjFePvobHunnP",
  "key18": "35JZXc8o6pzhCR48Qa71tMbiiLHDYVeuygrYk5a24weT9S29bmP81T5FTkH6ALmVSvzLfKQkLZqf85TK5MpXc7xu",
  "key19": "3WsXPnjbmjw6w2kfQcus75zEEQ16iYmaWw4zn7H2aMFBRcfdn4SaN4bENFohU31y66PiPLhSdhcqejp9EkAiCBNX",
  "key20": "uNDrWAiTx5KxD7B7BFZGgLstEZumAw31y3XsgjGy7zwZi28xwVNcpzPRfB8e4xMs58iChcAtVnPohVjAEMT5bTG",
  "key21": "2Z3XgugoyXoAz6fN4nXGjZEJ54BBB3mbvamD1oZX5FAzEPYoFg36brdeNWmogfuwtAtGUVLmQt7RyTXnR4VFZHjK",
  "key22": "3Wcn5shcEnzdh6cm7YrQU7XGbtJrVJ2Nc9N41NeXxsQsvSoWxxZ1MvvG2q1HNuq7niopfJFzFJc5pxBNTtx2UX5H",
  "key23": "4najtefarudoQF9TpaoXZniBqG1yX7TJhZH26aUGFjV3WeAwStVkjH4VeewCJ5bvQqBZdPWUE4uyGDyt2qQrqYKu",
  "key24": "2jU21XEsuycCv3muuJwEDE7ViqqE8DZ2aDU9aZUbXechamfuS5G5vf8GzceJ63eh6CSdZVAKHfeEWhbNdiirZncT",
  "key25": "2XuzoRVgsEzwhvWrBM2YJad9QxgqtXebktVf3u7CGKy3UctRKsD5DEGLLYXz9n9Fc7mZHaV7bArJrjUwr8E9FHEb"
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
