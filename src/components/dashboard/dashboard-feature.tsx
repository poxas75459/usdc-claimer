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
    "3NKyDLYX6wGsQgYxHWMx5CDU73hUSGpgkLoxkq6766NhPiZTAP9YmgFHPhXjzCy3XSXaLra6eZwCTq4dzVLatPD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8PdM45PFhK3kzUtTcB7uhHEHK9SQwpXevopH3baYaBFs6WkibZvUsrDms2KZgWsSw1VHEcWFHhc1RBePvGn2ot",
  "key1": "5H3zsZNTgP2bNdreotm3newy3ey4P78iFLTEg28YAGsqkG2yF37dx9HrXdh84iZPSzKESRTXfReQoQKfxHcKqjnz",
  "key2": "3RFHXC3uRVJhju8zFjCL7uWtVXzz13wfdCZjLF9d7c8jsNC8FzDzEqNPQjkm53h5gCqpLvrSECWf2MqUdh4897em",
  "key3": "5RfbjGoKTHrp5LxUGyFWWpSKZweGWm8M2637NRrGo8BAX9KzzjtMKXfBtGZh5B359WW5ig6g78BtHSzHBdx3dxCu",
  "key4": "2FuTfBs6gUdwJWwRC2in5V6X3Q14EJoTjCh6Ke2cK9qiJiwbsn3AWa6TQGPHF3d7DRQ7KEEvi1SfgnNjz4pEzE6F",
  "key5": "a7obG7w8JUdATFYuCGp3WtZoTzKd38QMbofnFwNPNMzMbwpKNTVw4yjgSM7M3y6xWsfiFv9tyLvLrX9FVUSsNtG",
  "key6": "5DSfWttPjeozJFZha66LvWELJUEv6ytaLeL34q9SQvti1RdbH377mUS2JEXvt5qeEYpJMEpiwKhdrUuqPSGWZW6B",
  "key7": "5d26uUAyQvhbUSPYLCbYnALdZKRYaxTECjQYhHdqaPD9WLTmzUSTv96kn9kZAuUuAFbxwLWGMyS2RHJFnnLNHoSt",
  "key8": "3tM5dTQyupdhwex4TYerZa7ttP4rKuFScCj7t1VL2Ud7CbppknX8w25RXFixRcCxztvs2QTcSKcqibU1WndrL36v",
  "key9": "5o1TN9LudUdgZ9WJVBUNvHc3f36ibx1ZQz7asgdW39sv5y8PRCcTfqig8pLv95ne7DYjKTWHqQhxDvhBae2nBwXu",
  "key10": "58gm84SHQmBZ8h7Geubt9F12N7d3eKfSfK6nTxmrF8UckPg5ZGRbZ1EsAhRC9X8EWcHcNihjHmQ2bcPT6qZf9Txc",
  "key11": "3r9H4iHMUQ9N2APx8UCqgL89nHdgSkpcQsScgPKw2WcSYrNp3j7auXb4UWHtKnRuFi1QZbmoxBRgFKdCybvjzE41",
  "key12": "SQrQaxAPRyz3hps6JcysXjMhSqrJaQu9LMGPCMotmxg677VmDyUh2rSZV8Ko5jEcDUQ21npG5LuXen6aDcBZEoy",
  "key13": "4mtXRhSme2tTCadaNkVgAfu5RkzKUCK3kUeTSDUpidAJnxBwj3NjSuhkchNabLSYxbmkptSyhnNsH8K8ReKXUK6F",
  "key14": "9CKjBhng5tj9Riucdu7ezpLQAJrWRUFykb8hrfLHy436dnVtGuMehBcKProfX9vZ3Y8d8P826BU2UKPCpbTAm51",
  "key15": "3vKsc7gBiKwTLcgnh6Yjo6m4Xn3Rn622Bno21DSN9ASxTkvd6q2PxpgPZQwCMZbQbZ1UC1fEepPwnrTqohCQiXLA",
  "key16": "4p1Gmm4As9e4E6WdNE4i2CLwNvGbHzVbthQj6qdZhkgHPDMuFEw3hcZ6Yz532s5j8LKF8mDsRcxqDtLcuJ199AFA",
  "key17": "3PiyB2txZBYRBNhC19VY5QPWNtf3fuSgoPjHV2cyLPtCa9pGRKnng2NZrESq3Z3zJvZZdEGjkQ8d38z5iPVHFNXu",
  "key18": "3CXE2q5zyvgCsRRvkWMW8FJWAokUq9nbt69weHKGJ8xwnwaiWAPTaA6vEB7Fu7Rz7BU46Yebuf5FjZBhDxQkEBeU",
  "key19": "3tDeXg3vSFenWZHto4X329oUJTm7qGj9YN6eKiwXLUCWDsDySYt8wuymccRpCHzSYtMWN5Zf7QmnbZRj4bRGmHUt",
  "key20": "4EoL5SeY7qhYZoeq17dcHoYX8K7sDd7jeK16um8pGkq5HPa6Zz9XvJbhHsT7fR2PAEvfx9ciGzdnvkPYFoYUd7fX",
  "key21": "34EiaGpkGmwXHr5STUfmLL8da3BrSAciYVbEE3pUCZqLhjU7dRPdczYyqNh7Lp5LfnGhsXrLKoG7WpaNtTkb45Bi",
  "key22": "5VLrjnymUbyQ94nqdf141Ymk45YWN7okVc4u57b841hKUqkWpKMG8ieZUZHXJ975YF8qcnN76oVE3M59ggcewmKC",
  "key23": "5SntkEoWC8VdkHRynzbqnJxyiQX1rSVmyP5kEGNPnVEnUzDGvWMRW6iRY27XkvkjvPUHpRZhuyxRn6gMd3Poa2G",
  "key24": "HCKAkHzhB7LjNYDXsuv84yETgxdeF35iW8qQaadNhseYUqssjE1Qq7iziTWavN89hhJY5hXjHkdY5vJnu1BLCbY",
  "key25": "4BfWb8N3q1yYGcb9E64LsnTYzSFYy5cosz3jhUzCk2LUKC56YVTVm1JxSEwJQXVb743QZw8RYeDPcTrPtVkpMmmm",
  "key26": "pkGrrDcJSxuUeNeWYvk7sJY9b8UVHUqiXZhuSEPZ5TiswpFEsqsSqTtdLxJHAXjBBgGpgTQze5JFdEqvu5ADnJL",
  "key27": "upzcMa1XAdBv6JfcjwLSQQibWfCStEma5m8iGKtq17gAfUMVG5mdUu4BtJSNEuiAwE232pvH6QsVkgyT46ttaA1"
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
