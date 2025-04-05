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
    "2katEWjcwxFEotsHRvBrf2hYuBVkG4dPHGBBEYMzHEu4EqzqqkR5SujQvZgwcfLMx7ycnnRPu33uZXZrNm3yAkM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGEKMToopiWBna7TyHRq5keZ5JPyw3z1TGjf9PNVG76vWW5Vy4QEYZkSFJtA96CqaSA8dzYgJsVukZwQYP2u7Fu",
  "key1": "5jEhVYzxiEjNXs4bVNHDBeV6HxEm5W17JRJ8HJhBa9vfd7rH6tzfCaaNZzGsyUnqnSMvmo82dynYvjppxbtjuG3y",
  "key2": "4JKGuqu1jw4WGqkgvX33g5M4zPELUKeKzjJcPCqPmTH3g24frhZ4veoanRZmg7DaL7ZUwhske9jyNdgwxBruKoit",
  "key3": "67ijeEddW5yYfCh5FCVaUmRwrSw7zzSdC4THJ8jo5L49LfDNrMbP5hrxTkj3ZYaV3feoe9TstRo7b3qXeYT4LGUH",
  "key4": "3s1dM41ELtdeqzft5BTvucGJmnGBiVEbAKGEZuqvjzscvL25wRhQxJVA7KyWWZ6R3FFdi1qz1CAz3mJ38qAbTmQs",
  "key5": "5ZwQMCWHrVHbqKKagxT94DDr6fjtntswuZKkS9eeq8D4bbZViQtyCNMNSLa8qUcMz96JUCsBSoL9AtgprYwTEhJf",
  "key6": "2Tw6DV5jPwfjPxBsErosTDFgoDFZd6U2ZrnoeypvwSXgyMnQzNBaY1WgPJGMUcE2cmHrq5dR2iPXit2JrGQkQyAC",
  "key7": "55TQZeBNa2W7B5yLdAdUpG4e3eXP7nGMXeuhKgTBQHuYeRozB1Fd1AD5VC7xssMxStnf3TBiaDVJrMcGNXTeGQdk",
  "key8": "3GYPP3vexRnZWX1eupkWuhq8kD6oApoK61tGg6AhypT5q6XxyZzmiwF1rwJB3aUZv3FzE9tWdASmnE6CCsXNFQE",
  "key9": "5FFLDGYsxJyckQUhQ4Lyc8iD8VbjSxb3DmVk3bDT7f2BzHDhcnv4YHDZUiAswhn9D1KekdoaKMJvMURFSxFX1YiY",
  "key10": "348VsKgo8eVFCVFjzjpVEL7EwK9m5dpioZD8B3JEoEQbKhPEvUfapAjRq8ydUkKBk5B45wcNjbCfvAg32263QDkf",
  "key11": "4SG3fTG5yAa6cwjFpecrwBsUfwfRb8RdWTGwyu3En7eXubFUKvQyeVmpiYL3LLwsD8NZrPAFKPJgUKobLMdqx19k",
  "key12": "54nYMzC4DSiqrD7pbL61jjo1mXS5YCQHLxnTztD3VU24eBqRa2mfjwmXWF2tK9fbvtWrtUQpLScS5Ej7RCd4aVtu",
  "key13": "5rkijnUpHLGYDtkhNcQLCM6bHZ3KDPFFcuGs1Rn5Bu184jmJ3v8GtRCSUazndVaryyNinaAxVJbAdN62dQBYQKe7",
  "key14": "4ob9mvHYwfN63PLCDKtRBWupNHnV3ZgN5xUZb19MYkhqJJHiN2m1ztE4qkVLmygKVdXN9vr8G2LfSNGpwejTS1N6",
  "key15": "2NnezNdMuEqZSchSsvifbtuFfGRSd6th8picTTCkyQRu5kp9rYcZ16fQti7DyNAjFZrBHVEvT5zCBvKKP39aeeNw",
  "key16": "2C3Z6m8MV4ZNJY5MhAuTNNgsZLETbFumZkKAWMn22uWYFfXoxfTxzHpQqDjo6KizDdZjerZy2s6RLMHbsAVz9gkQ",
  "key17": "25pUEJR4whFzRz3eDsLeWXnGM2zMmB591abNPQSMJTCYmmYvsdbP72vDFtgSxY73d1c8tkTEMWnziBEg2YQSayQj",
  "key18": "3kv6GXAgPLjhu2E9vcV14X1vdn3znVrNNxGAm46TF6CeJor2LGX58AicYQRTgME4k3AZbpi33kFUdTrNk2hoxid2",
  "key19": "3HrZCZBWpbHGEPR9Yfz7iWnW7CWqAcCPYaqrDBB6xqCPG18KsMYe3qLcEiTNEstCvU8vAZsH5vqeFNwUxgvRfyGV",
  "key20": "6352uCNL7Yqs2kWLd1SzK4Q4aAv9p5riu2kZk6R3c3MUaQ7agrrJU9U9BKfgJd3tTJ5kDqasUrQfJ85D86cxfMMT",
  "key21": "4XfGJhdCbueaQaKpDCQomwP7WB4GCpXYjWsx5gbUdMrWTsZ2bQq9ZT2rBkd7rKcai5xGMZ6k31qRi9PjbTtfWRY6",
  "key22": "37YXK3P4M3HyoqdX2dv4BAJ9qX4nVWKfzC2C2AgiaPrRhxnuareVZpf2MvLMW8xttoLmB9JbWb4sj6hHAnjogdhu",
  "key23": "2N37LrAq4PGwGu7LGwEjYQpNpaRMMmddi3YJg6kooMx4FSkiadJon84wZ5Uwk5o6jxPTDZjqzE1QS25i1m67rJHz",
  "key24": "2CEVy3iZZpGTbwnPqkDJK6UrryMA4t7WVKKR66Msa1dCyz23E4NhsoU1U7xW1CPJ7kAmhLk2ymCLUFokUimBsi1p",
  "key25": "2MSaGTV4EKCRFeJSqL2t6u4weJMmisiSzCjxbg9ykJ7HP2W1K2myNmtC6qx4bCzTyP6ekUhXwQuhXh15sLEXCWLk",
  "key26": "nrADWeoUKwi1tXCCLfeQVT2MJTk9DAQYLxmoqsQo3pHfQ1RbVLQyAEM2omGu7hmbNXkzWQemfKEMD5SNieeonLu",
  "key27": "Ho4WUwj394RwLW9XiPydNR26uusqgTmNPbsu7ZBaP2TKyrRJC2ZFVEPPiMhUSArJunDKLNje8j6X2EAEmLzmiyV",
  "key28": "5SL6j42XFn1xAtLJEMTNxrkgTNGs1wUqguhRdkJuHeAyV7v3bPX37XrS4JHoVUsU3gHpgZzvUBSGoMdxhUfzo8Fz",
  "key29": "4tUaYUFkpSGNzDmhmsaBTFWgGVABz3qgVWaeBRa6UyZ9AX1rNxsTZe1fpD6fJ6Zeg7AZjixnNPikBEcSziHKNUqA",
  "key30": "2BK6fwRsUWg3LkaVS3Zz5zuoBSVcZfZYT9af2Lh14CaoN6BdHEUp6ubLS3PMcG4A4dRpgtqxgwAS8KgKhemYHtCf",
  "key31": "3hARvUSS9QzPddZbWzMxBJDrw26yHqEMJQWYj8jFJMW68uWemkrkiRym4yWGMTfvvsrKWhBrfWmfuUcvbRXSq16v",
  "key32": "2U9MamCyN7etqNcmjAKLyDSRWxAaNHZQywRnEuDxhf4Y2YvjMZpLkzQiHtttAYwL4cn8koXfJ69obVDU7rxuZrWt"
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
