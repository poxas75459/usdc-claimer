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
    "t2SQsV9UMoUd8FVf44FpaCgPt7JDSAgxAoNB7C3rngvqzonBtuzfJjKzqUZzGsbJDW1C47bjAh3rSpSD5NVCha5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RMgWqHWfSo4BEUBJLrAH7FVx6GmLJ5HHqJrq8FVZaxxAs886JHBRWjhDxC8ZT3mPBPnc9qFkt17JwZ9ngf7ZsbQ",
  "key1": "673cUwmscYHc3XxnvNTGUryXcQ7xkG2Soitq5DvwwcYcrrKzo4Baz6kXT7Z83Wwm8MWbLzhHozjQAYRASgsbz5ca",
  "key2": "2AM6x3jk1phEMyZPQzjaoCHW1AgyCgtZBpn3wbo54xXJ29bnQTycvJBbvoYgaP63hHtwHRFy6BrjM5Cdw15ppgqx",
  "key3": "3iyRQgr8wMjzexvgLVriHSWNdw4SLTSSjChDF19ZEBsq5oLutA94wxYr7opnpZXndAL3gmTix8WVvQnmApfWA6Be",
  "key4": "CsXTw47vKFEP2aKHnPekV1oJCJ4CiA1oHwpvsVhKrgKWgG6WsoC9jcgBLQR37iToXMPk9U2NgkEjL1MCP9NewM8",
  "key5": "2VdHBxiHQFHH2bqK8txvYPrTeRMpAK5btgrqsDLL1Hrq8qS6Z5YQPFLsEm3Taqt3XpUaXZ5YC5NTiUkj4qotC5c2",
  "key6": "3GhpXGoGQqPDe8nBwQ3ZMef3dLMugianK1evHjQUfwpQDCYBwPdzbMLFN3r6s5ES4Z8YwLtqdQ8ecz6jRwFhGnhF",
  "key7": "4h1xaEP3CPmM5A2xaRmo5qzFSLeUKFpRnn1iWiGqRE1xR8nEHYE9c4HCv1vfX85mh78aSY8uv9ao7bFjvAvidT61",
  "key8": "2n69vQMdk7k9A2dQ1jJytRwutxJCr9jVuQZmvAptufTLCtYATdYhigSwq2ry6kmYAcyCm5qy4oD2fUpxr2YxviLt",
  "key9": "38YDLT1cu6WzigEe6v8i4W52TgNiPhccZbfdjSYHT5B5CR4ZFzdFfDTXrm3J3RKsRUe2cmDK96GUezAL6JLuhvoP",
  "key10": "5AzBowL5J7WYv7xW5n7FDvSSXjUqe6wVpCDFzqyHMpczqqrLcdjsKXaQJZdqt4mPFh77TF6niHvhyiSJjbUB84n",
  "key11": "5DcEiuu4QZrpactPfLeub54boogouTx2wZjMHzYygq13PtjvAjA4EjqH2ZeCV7aypZrRAG78CgYnBg8FwFnuEmaf",
  "key12": "43KhDv1Z59Jzk4dxGzZkNxGviUnPcNm5CYx1DwmKSLrzYiSsp7ubZdhUzvNKEe6UgRi72LtL4q3Hn6XFmkM9ADx",
  "key13": "3gXhf5gukDrW99jpAxm2v4Dzt4hLp5AwR3ybyRwR1ndUFSZDVbDq9Ujf3UAFVa6Dq4H5J5FhaAY3qdemEmGZg1yj",
  "key14": "2pmGoFGdard1ygmxsyEnX4mgcRhuw5HitbRRMpAPVSP4UsYHc2MXAM4ikSrokg933YeSsfkFJ1feQRc9V51CUYCQ",
  "key15": "4XP2wq4zHuE43RdN9XHAEddh3xjjSaeofs7BpYfNDdepmHfWwyPyLV3RwCNz4VzoEsHGD5fMNeUJiv2e5XSqcRCb",
  "key16": "2PJT8QJ4jRzXrMnYE4CFNsCNZtZnP5AkGe3o8YQPLqXbvF2cRjkhd1fR3JMEk2KAm475cw2spsjoJvvHSaGCPC7s",
  "key17": "4R2NkmqNtPMQ1cyJaeAwDwonmLvqtz6kw89RCAwn1B91y57V61xUv2CtpL6fw5bBXCVcgCp33D9bShQknK52yxPV",
  "key18": "3TkW3nJeBe8Pd8oVs2LDKy52WgyAGRjHEd8c6Es996eqaqFgN6C4cCzzmciMmCP52zP7oPSHaG48yN6Ffrq3dDVW",
  "key19": "4zf22xnwcTbzoLNkfBzVEUZiBfqkKMA47SWSY1qekwGhcSKA7N4buDpUNx2BqkypapYt5RDNRWuyLeFsvrQWDqZU",
  "key20": "3yzxQHSu175Q1eSXYe5u6ZPQKRGxuiG4Hgdbniii4fi4VzL5qiYri6MRZyyram6r4dfvdsZ7K4AbGc1dJuk42Es9",
  "key21": "3ApxMYQWCf6eonAnQvFjfTPJdiJubQKqXn9pq9rQf3jTYGMtn4ycswduoTvSobUCxF7eegG741Ece6otGx5Ba4t6",
  "key22": "2CGsHKFJNqN5oVstjrYVmZ1Mi5ufvJmsFCYNDYKP3babDYz5njjvHQxCY7Td9FVqe1ydJThjMq8o39Y8gWzrFjHq",
  "key23": "vUDNA48VAmVMgsMpRZ6mjvSewxdkYTaAQg5Cj6S2XNc7RuJXRYtnocpoYPfyiDTSDgvmGcQk3hpZBg7TKgUtSui",
  "key24": "4iCo4xzm7H3ThJEzm9gFUPzAP1U7XGMSNjypbD2xhxaiCVPADjs9ECKZpnJv6dqA2undfWM1hMFL4r8SMSidv2YR",
  "key25": "LRkkWkiFUTUi9XeSU9hbEbgo9k9fEijmTzgURYfMTR4AjUAUnUKXvWj4qSknEXAdosjA9cL7NieSnrmoNHM431o",
  "key26": "5aa7NvWzQRoUh8Qi6PAi6oWK4BpuJfchu3n5QvYajsg3oj67E2T6dUFnNg3kFYyaQ6LEVBmrroL6y2FwxYPA3LVK"
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
