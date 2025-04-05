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
    "5nhMcnF5cMcCK6puJ8ytFYWsRwP4yqjCmCvodEBx849otR1tagyresYTGDyVQ348gooLijgfxv1CnSQ5GBhWe2Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23itvvo46zJsgBfwXzZQMkePp8zTA6TYiFxLR56zFw2dyA4qvg31qwsuZTqFWjcGjqhgdBSxLcCps2mVwE1gEF9r",
  "key1": "3PwC1ezBKE3da7HZdC6sadBK9CEeQy7VjrNZHra2tqhVrds3CXfk8WFZA2UfZMfG5UXJhZdCuGKHfPzv9m89i1eF",
  "key2": "gH6hLRYrhDD9SwGwMatXecyCEZHbMtRPhMAPXhzmncpqZ4C1sjhNYcnCnHhL6Bp7sBCuhzUv4uxvXWKkTypdaXS",
  "key3": "45JgaM9MFzmPv2X1BhhqXy73HrBjcNS7YBVzS1gwjbVsMn5jfJzimQQiE6U5Xf5n1ovWHDcXM1XUcfjSVTQ37eF9",
  "key4": "durxvZWL9yzLd12ffFB3Wa89xsWJYaPDGEzw88EeLLoxam2qpaXM1JeEDAyUYVnB5ASdN3NwyeM9BVXaNqRKRfp",
  "key5": "3xANdVtUnN3qBeshnBqRAHdxQTFG2xY2uqdAiVHS5whEwUB8vemk93vj1ztFVJc91ZeDQJCnud5gL8PsuzGqPGat",
  "key6": "4paiwLmHuRJQRwJazFSjZpmNygKSgLnABRoi3QgPAkY6DV7bdPTSyv5QCwCM7rdJNWwD3DiMJW4za2Mmf9LqtSSg",
  "key7": "2sXLY2y6dYgUEfH7vYLXW8NQpRcB3sfjkxZzJ6bah5BLAPCFi7BTBcTLCuV7ZBefKjoSuoMG4HutNsTVaYGYaJrs",
  "key8": "2MiAanJ2xKbJ7XsiVfxj69NZZFtrLSV9c5LkxGaTqCxJD5focHKYsC6wSpum6exAHwVoJ3L9QzcXpLBB8LeZpQbj",
  "key9": "1MRQGnGZ9bk67L6bUxR9PhnJgWng1UtVear2mF8uLbXgQNZ6dq5943DJtdj5bRj9T4vd2SWVuxAhuSLo2L3tJRA",
  "key10": "29RBdqpTfHUXocrU9vUkpnv4FmMj8XeJVzfp53Y58ChcuReYWM88iKQTAac7Z9WDwaCaBVpnxMsv565s8S71NfpG",
  "key11": "2R9MYvZaUdQKx2QmGeiFgQgWTBVCRG6umfpyafA2EtQqybmj6kc6vHWceuhxXYQHyRHm8ffLx62HwMyS37xnAArd",
  "key12": "TPh6T6HLCyxtWmSLmzNhcizAYDPbPEoTAyJ4LikDJrY6dgiDxUxJAycwWs6KG4nnteC7aKzvxY8bhjSgNhmKdaB",
  "key13": "4wFv3oa4cSaGCC98tHVy4nuUw3VzJJwHAyX26GQrGGgQtEJCdLGvNnK857CHiTfLfqqnUbJUB4BtBLtkvJTDwDfC",
  "key14": "v1hJHe6vWf8HKAETLtHsj3WdNwsw4Npbrs1xFkW3haHAgyAH6saoF6Kobgx8iqm7JGsaKWyvv36hKRFkFeCxM2x",
  "key15": "21zzkSMp6sKJifY42UF8gpGk4w1a4tYAA88nKQsNbkBeqBwJKmkZmMa75X7yJaYbu7K2sGE2CXuZTvz7KrVYXpvX",
  "key16": "5FnqGqC2NLnaSsBSnqA8YkCmb4bXADHbZzbtv9om51VTZt3xUhEdkTQwbi9nr1sTgeKxzeHwwyqnz78mRP3YDq57",
  "key17": "9NXsMZsu1seVmdyGFYtL45NR75cmPvBBuzL9xWBeX4h3ybtnUP4sgJja1zfVy13ULUKFJSMc67MuSjLbkcghAd7",
  "key18": "3F97Ff76urr8DeCHrHvpyF4dNT2CMHZo5n2mTtoMBBSN9AkWxFpKJPTdN3FY5eYYABGEjX5WBi1uFpQWLJ7FX3vb",
  "key19": "5Ke8W7adDqUq3YSS6Bst11BmYE1iHM8X1yWn7n1NHmauBMsdgU4aUvHqSkDDddf8WeNWGULmygNVKuaqqvFgKP7K",
  "key20": "2XBdw2c1Vu3Qrwzb3j2obdJwL76H2zFtBaN93jWcaba9gjDf419hHGikmLX77fMJvnf5VedC4d38jYtCBcRzPqyU",
  "key21": "2e5AwSP3keUFJwpSHqtunwmqTxs9W4XA1ruVWutsV4XJvE5i8WqCtj5HmAyRStwdPBdreXaKoA41nXFbshgf1na3",
  "key22": "4Hg9tuVNbbSc5wUy3rYycnN1jhrQHRjsJtdFByXMyyywqcdjQHZGWgRfmkQFGmzaDvb3BHWbZitchpXy7kozQCKk",
  "key23": "5gVhEmj3JdjUK9n5QpEoe82Fz4haEFDiK4LFmPgGjJsNBU5cKatKjJSzMYHJqLr65qHFCQ9rq6dmBhTzGpDXiRsj",
  "key24": "5NoaQ2KtDMrN28wMkgHceY8C4aQ75QcjcsbNd8AcPJnP8S1GFwHdCQLMuDP3qVFWPCbQH3UFDzNhyTw9PvL66Z6L",
  "key25": "4ZsQq9tD5V6jzsoCsxoJGkwNWie6eRipUpKcWQ491a8easVHcFL7aYvLBFN4He6wsoySrrXDSprCiPYhaG6Mb4Z5",
  "key26": "7n6JX3DY8ojaHzmgnKuZuVeX4QKPUUMZ14ziazFwX7uqkpsqTY5yjbteCyVST2wBJGmjF44XddWBcei78DC8h7S",
  "key27": "gdEYBAcdCw4RuLT3YcznYqnRA94YQ654pTtSb3KGqeXbtyfms4YHBRd2aUs1jeYjdGEVpazrUbciCcQ2NcFkqvV",
  "key28": "3xjacfMcxfNWvSP9D5u36T3dTbQXoXBxtTTDAynbeVnihhTGPyw5rePqV5JYpaNz8pxPB33pkyWa1155UePAgUT7",
  "key29": "s56XPsvQZaY9oAbiAQkNp6WU29wSchxZQ5NVyUgoCFmqepue2L4dTeBYbFdfbrPKEAZY1SHQW4keeEwsNjjqU7T",
  "key30": "4QcrFeT2L8T89f7dLhJ6WQyqdPZZYoiG4iRBnHkiD8rX2zEqHzEfAHU3BEp53sgRkcX1v1CHmiAU2aNgQGEryriQ",
  "key31": "4RHezH17t7CM9pRP7GTtCsH5hn2GqEFMuPoUjqE27JjSTVYE1oQc9MBFtMnvkuSmV7sbibp9a8zTvA6YpnhzU3Ne"
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
