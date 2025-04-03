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
    "4hhGh3dHtExGRs4D7L9XKFLRwD3WHZrsAPSoCZjBQBTbdYQdmwbsxFz65fqJoV5W3p2FB5ymgUmYPBUXojqQAMwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjb98cWZAbQkZGSHmM6ppo7arHc3SaVwFzrVmairkzxAodZ2cwA68m9eLNtU5JSAbxoow2UasuYoW8nzFqXEYQo",
  "key1": "539QUrFQH1G24LqqcXS2hEtTkQispstnhnvQPKCJ3rxp2SqbzyyFw3H5TwLG2a7fRFaeHKCvckXYHTLgqcSJM1hQ",
  "key2": "g1nnMihoB4s8KU32657t6WDUwrMThFXAMJJH2G1hynwyds2WSk23a85EXfkZcUZCT43Wt9PrWtALaUPmjvhDSW5",
  "key3": "4Z2kLxFuPhRzJEJzeawebGy7XMEpquZbrv6S5X1Xy6EAs4sgkqiEvx8KzYMYQbETvCLQ54LUFH1BA7F9JQUcM6Y9",
  "key4": "4eHmRLwT72SBvvnBAc7QwmfkxZFmiJfnzZKszCQ12N7AtbgphaN2v6r5w3tjVF9KeYGxquaPovbe3J71MppxrtrP",
  "key5": "KW9so7yVMPEtJA6pgmsCj3q4Mq4ipu7N7X5Z62hA3FKuWu5bZoBGP3Sz8z5TsnUeNCRxZKyMbHYLTGpqWcDeaRr",
  "key6": "38ouGUxfodhrRoBs6fUApLXKpDWw9FFKGrRmUy7zaNXXHxsDZZH5jGs36pwukWaEYYhhhJXvgPBUnKxJS6Bp8Ws",
  "key7": "67H4uSbBdvwQebjWsrMP85bsnFeSAq9Hz3mL3rcNhRsGxzHY5SpJz2rJXAJS2bptYk2TFMeJRTxgAZvZ3idnW1d1",
  "key8": "3MavMiuKBP5jje4MXX9sFmqiUdsj3f8hXscRfCPtZWpnw85GSTeUbz1e8NMarNkk8MEXPcz3AeQR2QoaoY7CME3S",
  "key9": "21tKmgTNg4argvPXcXNxMiL8AjghLBsRzbRvdCJ3opaj2gTYF55Yw9xq5A3S8PGpTUPWjWL4S8Z73GBf4RTPdKzG",
  "key10": "5tGCdz7xJ5dt4BS6TuQpgmFXVYeXxfRogcKiJikVqiB9fExJryUcghAkPTBJCNvSvB72WYMFqm86KQ1Qb9VAENHe",
  "key11": "zxG4zRg6cq72KK8RTGbDQ9MEafxHrVZq1VfuGxZpD1PPTVhHvoGyMDSh2EtTaBa7Zk6WCtEuo9eqa2apHiFaW96",
  "key12": "2du1vHHBukiAjVnLKiiea8NJ9MLENupMzEhXYNooAoCUJWSYnoTqLHaW6A5uDA4Dz73XmvN22aDCpFtk4JqzVQY3",
  "key13": "3YoTGyR5FDhd6rREs55macoitFSV9Mfhpc1Fdhun27kcV2VVaBNqWHsiNVM3cj1aiiABfxWdwT6Yj5AZWoA7x5qM",
  "key14": "2xCbp8wJbSDCGRqkwFfnMF4X1jPYhDdNTwUw2agCnu5EnDCNMZdYbuGs8U2yVoi5SWkGy9GhdGHXEvCfyKbagqTt",
  "key15": "2id3NAE2EbdDST8QwGRGajatbBEMbJoeTpKNzqRPohjwHRo93yHKL1LcNpWT8zitDoFvcwsQLyZyfvDvDgdNw8V6",
  "key16": "89n9VjmzuKXwMzgSkujHfSPnKVzEGtAoNBKCHEqJnC6tx46N6kFtDaUxjJPGFQY5jTrFRrBTQ2XF1Kr9bKM84XL",
  "key17": "4njdQVPwYvU4UFUCCtGTtBq28ivQFWt535pFv1SQ1y8utpdoAkkJPcRzKsHGGueJNXRPJ3f1chCX8Z1g1hLLXu2E",
  "key18": "5yU89RUhey5MKGmidU1q8mPRGavxgMdoC6KaNpETVhNBwC9vDUXnxdzF8fZe1YsUMqHWiSjEvigfcCH6QxyBVvcY",
  "key19": "2K4Lo8x2KtQTgD547e9x9P8kf77uDWwpg8CpLjjShtDuvHk9mJEQ5GBSCDBaFAmKw8cxXrjoKrrni633QNTVW1vQ",
  "key20": "dPKqynce6Mqe3AEbxMxbL6wa9v7SvVzEPi6eucVWacpt5mbKJ22vVwkLSBGHyWxQKuCRhPsiXjMjvcZd9LmHuo1",
  "key21": "58MNj8LgFUCjYt1icLkNjNqdwGLLPSguFdMTE8NhqaGz3UFXRNZXcwNdob7VzbC7us9wNhxBy5mbVngq1HVsLuBD",
  "key22": "4z9RedwxLcMmdy3E8mkczwuWwPB2xioL4dZkTw5v1RD9kAdrVgQBjhyhBoQ8knJeT2Hyj64AZLrMjcoRLxpBZQMq",
  "key23": "yP39kVwDRqRMEAGE9HZNhz3Ph5DqTTmXrEEXnSHWWy8vieyVQd2hNTEqgC7FE6mcnZyVPhC9VDzQk6JLmigxZsS",
  "key24": "4qYh3MsE6V362cmKV5pQqthJibrm39av2goPJvBePTfFpPwhBsExHzucfMRotBgHK3FY1WGnfHshHbrcZtYikgUA",
  "key25": "2pwzC88DTngQ3oXwwj75v7MCQGfvtmpzAM1xrRKgKboRB6FnWXWQtSRwUqAhKtjqcinVw8pB5kSDZaRvVN3ZFk2p",
  "key26": "5eRbtudWHSWKJP4rhgStEk72FCkcAiNwPx1JUdpMFRpQSW8QqxDG2c2yEBTm4y5JL4S6bAr5Hu7Q4sXAGNKspRLw",
  "key27": "3PJGniFjSJX3jYh3GLctx1MNyocyxTZLWTeqXBgJmsrt2WodDd8WSkuMn7SoXHH8oSyviLM6f3XAJA5QPwjSwXLd",
  "key28": "4MtKkaWGejfYLz2UGQB1KjeSMoWQfS3tnhaLj6NnkkvRAcyjRXQxsuovHEJYQz7M8eWW8Xvnrno3iTM25ppEfa1c",
  "key29": "3Cd9NivB4tj9X61yKkJh9abLPoDPx1buSiGGNa2Cf5WckArknrKgiXGT7xjLCBZMoDzVGEYLwpzX9u17oYqKcdnn"
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
