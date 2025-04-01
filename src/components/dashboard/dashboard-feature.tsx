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
    "WKnvHyeE2Mduz1NvCi6497obo3UnPpxDnXtPPtrgV9hhQmyQQbSMg6jFXEeVWLGe5EutqZj5qFUfB9mfSGBkY6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipWF3SSqsbLrXmx4Pfvdqbb1oXCZLemUacMERhTRSWs8aAK6LaMLQrMAdC5YQvyENQ7eeh3D5aQQeS1wZzEa9cm",
  "key1": "54c6rnji68xDhtpsuCb7W7pb45XHBX1uL5shvDE8w9xiAb1NVCMzaA8b54K5mjyQueVvV9bDFGeVTeHfdCmqnPib",
  "key2": "2RyzaFSARawt1uBSrvL5mcHzA9TU6GqkU36KoDRmqNdackuJJLmEwtTExG9P1AqaSYTwGYf9sy4zxRS8Npjv8E2p",
  "key3": "jkgSUcxMRPvTcYMbtWgWx2G2bsqjDM4WX3q76nSzDMBXcEQwa3JKkVSqtbuUdJAqcZdXvg8Wh2upUQPRyUHzp2J",
  "key4": "4ajKHg4pfWq9NMMFNKYXnS2KARMFR7DTrY7rcmb3u6Bywk9jvJWpjf97oMVxmFSZgKP51kc3yTEAQjtLfjv8b1Gb",
  "key5": "3DzFRw8w5EDWG8K5V33x8wocyUJKiEsXf9YW3pn4XXrer5zfmgYrzaeFWNcXX6DQfqjCCeETfcfwoYNkLRFCy8zD",
  "key6": "BB6sj7DcjqrgVfoqRfJ4nF83LhAotQ4GMApKqoQqVGVxhGJKceZLUCpTNDtv55Wg5B5TyE47AfofvKBqic3nF6L",
  "key7": "3PZQCKLcCd6xFgenWNa6yjvmpdpviez7j1gaBz4AGhcjffts8YZToKFzYxY6nRXLU4ad5tRLgbXgkjXtsFyT1QJ5",
  "key8": "8BqGGDnYQ6KbbG8CgUeRwWwUvg9pPNq445B4peHtZuutCPHVXUrfbH3KCcbXuEEyqQCNhhD9Dv9xSKrRxK6LmVu",
  "key9": "63Y8t5ho8NJB5YTBTVYm52zQ3ejXMuMn7uFFXPYY7it7zWVbDV33o13qTPH6aZibqGABkKkqaUZa6GyZajV7s2nd",
  "key10": "2zjVtaGMeJimgdh3eVCkDZR9YKCXEbMwxTXQLBqm6ZANHaQrcJPxArosSws3QMwNortfZNPpVCnNSCTXtQPb1TrZ",
  "key11": "fLbaK4nEdNsDbkQmBEn5UTH4vPwqqv75Ds7ZfjrmWhLXVxYXCEwYRoS8kMwDD9eq7KpssThbQ1CaEU5CJqAHnbW",
  "key12": "2TkG4YpJjzuJVRorYLGJePV7GRGyiq4Fmrof4Y2XBm1sbFuS2UHLnmnrN4HwMWAw7WDoozqiX8yR7c4aFCKpYaa9",
  "key13": "5zruyrqyTTVPVqizfeGLZ6ZLyvhgxoEHFfKj22eMQoYA1Q3zMqrc2PqAXty3zYS9cbrsyqsegXmRWbpBxngPkF7h",
  "key14": "K1ka7QpkwMrM6nUBe4SyxwJpiDJ4ZwxHSw3qfwVXXDn5YguTPoFajDTysUM2grtpVkABWo8B6q4Vt7mWc7BmKha",
  "key15": "3m2rDZ1ci4b4zRLHbdQ5bX7F4AwTUbwU8gCRdfvC2bN3wqC7sWVSfZux63YGu7y5Vcg7P4soCeQJUzbhqezCsNP9",
  "key16": "khMsiLzjkriDwh28xYn4h8W944TUAeUyXFQSBJ2gyfMyDUkNzEXy8EK23J3ivVcGuf4ufSgi5fKnMQiLuKEv8LZ",
  "key17": "5jA9d3cQx6xd7bqPHxgpCLsyifaCWuJ9fzy3Mhjj8pQvWa9YAYbyvL6X8PsnMgCbpeJ4SDkKf83ZNNGNKvZLVafL",
  "key18": "5fW3dfWtov9UPh7XscFtHy2HhGTwLhwnjhms9X4LLydw39gfTSpxjaAxZR8JAdb4BMmN3bhFkFtFCB2NRGRB5cE1",
  "key19": "2XAZ4fybjw96kqj5JzdzBqp859hpdeH1VgiYwdi3G8rvPTozNqRsKXT2MVw5cSfwwXPX3tdLEX67HP8Yn58gvTiE",
  "key20": "3hCgFnjvnGyggFfJM7n8KeMuYuNFZKebcyodfguLP9Nc2NQKnqjYpLCpBuvTyq481dEuVnJyCZNR7LMXb25A7Jiu",
  "key21": "64Vrq3q2cWc7bpP1erm7yQpX85gpbg3KAhZE63UMvqFnfwtVfshYxJUZgZkuKu66kZaRLn6eH48zf6ETeZPx5S9m",
  "key22": "3PJpWjoYpNSbwVQzTg9vvRzjgv1Eap36xnoV3gFeV3TK8te6vypS4e6GvsjbcReUuo8ZdBVRqMmLjvB7TdQneW51",
  "key23": "4gL4U4y1XRDQFuELW8nHxsywsXZrRKKVEsm6sZ1Bih2XW1P411Q5suCSZJ4izXhnFUAtWvkraGwAeM7Vf4kmbmjr",
  "key24": "35gNzjrt7o13tVhWNUDnFMsMPoRdi4na2f6afAj31eyCgvj9tADLisYkYXa3tWjjz4yBfpeEZAtpgG73pkrWcCzn",
  "key25": "31ZNNVQkEXF4wuETbzPrmzaeKXRCu5NGAvJ7JCBLCBmqa2X1XuZpRXMZMj4pAzwXV9xoeH4WF8imu52KwTd7uL6C",
  "key26": "KLYyRzvAZuEwuBPEHPRiryY3d4FqYVnq3K14bzqWikAqWzuE1TswzqEWpoCLpdqpX7Y5bfcKVbz22oHU2fjvW9G",
  "key27": "yAQsnLNnXRbWD3nt3V8xvJ3SjPsgpwjKAiWWa5MnJdUC4PJk6vEA1apojUixnG9gR85VSR3dTYxhJw1CiqKpYx7"
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
