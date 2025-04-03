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
    "4vboBh3tomvzEMjiJPMsDwXNEFJZvkxrtXGqbfYQ23vTc8356P4yjimHqXNAhPHHSJBY7ctFaJk7k2RjHauPRATS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LtMn1hqugMMJkGWoJZmcqusEyGsDiMnXxeUauMEw46mkJXw8BKsBErE7n2VGVhDdhMVNmUXMfC7Lpm7ntL2RiW5",
  "key1": "3i6xeRPmJgWawNFiM9py8s3c7dSeDAEKb5o8eiN7yfpjMwkWWBgTzC9xyX7U8xp6wCHoQk1yxgnNtVhtByr3D6Y7",
  "key2": "v2yCgKbjzZ37AJkcKtS69zHxYXPtuyuCW8A7RF9kre1mrhGZn7grAXPxu3iDVXjhCc5fc46YkP3K3EDg4LTAVhU",
  "key3": "2LYefwD1pgAeEsTadWcThwCJvizUUYHvqxHBheWSzFJpfTH6UiNFWSvdH8sPCuUFUy7PHuotTKuFVurgZXvKtBcQ",
  "key4": "399QSqkoVo3mmVHsoDCXxwTGHquPXt5LGdVcQwMH3KnnyD7NWigrR7jWEu7eY7PwB8XuW2aJDYEnuQ1MS9dCETMD",
  "key5": "4huuvzog5Hzvz71KdEWPosNJbsETfXESCJspHt4CeFPB5emnkuCYLZm9KWoPahTMT3dWuJMk7hncJwQPkjacyWRy",
  "key6": "5ZP9TNHAkinCkKMo7hnBMFuBzbQurxEKmm7eoC9KBGnkuyMBeyHhLXS9hfrci9NPLEoWotbxpVTpdVdHHVwFWarg",
  "key7": "5FJx3Qg53nfsf6mC62FvEFe75VVxWhfUnpqqjQnK4mB9fVEwGsSvhJLtVPc1HtVJMkTqst9UGeLCYyukzWcXCLXC",
  "key8": "v4JowENpXFnFkjAn8SUj6BFrp85P6Hv5gmmjFzgK6vD4yGpqrLvrEpu12S6WQVaZjyx1oi2JP7Tk4aziPnz6JHQ",
  "key9": "kj496HdSQr66xnDvcWvEcBxxBdqp4zCethbCvxpADwGvH1iQWCTdt52ZEdY3DYegHzLo85jtGdEXkBciwF5StBf",
  "key10": "5pdDAY64YFjQYYn7t13nV2oGE9fNU7NESJXNXjm3pFQfgsYLQfFCFs7nzaamDRonszS76NwmW1YLcWyfKuBtBZWU",
  "key11": "2aCnVLxQVsRWFKVyRRTvaC73pHQsZqGA6ysVzcpQtk5MyFkxMYaZRGSyeSv1iwtNQtmpP9G6DU8mxkQMBfND4YU7",
  "key12": "672RPZR3NeDWTg2SyywC1UTzv7mpmaPVQwTFJGbTGTcz4nPMJq3jQvYuCSghRCSxpKaJfZa3AuStLaJwyL5KTMFj",
  "key13": "2DsCgsQqdjPBwwf543yejFE6egN6Yr2Vn3unRhQkhJ2GzyD72zrCH5ND7ZcQ3GF3ofavpEY42eBVmDGhz6P81m7y",
  "key14": "4uKru1jwF8zwsddrBPGzuUiLsYdihP98SePizDvj3uZ9uFBbMnJ5ZWarnAjs41etroakriAbzDgjyxMn5SEXiKHs",
  "key15": "3Naar3TVibNa5aYTLEhDTPKfbKxxGJdsuBgDmdGNUxPGod3ec9dNpCvKi5qhxAUiCWwttSogT4KrzHEWB1y6yszA",
  "key16": "BPujiWz2ripBoU26ezWsUrZ9LLnVYk6vAxuUy1ky7pyJbtgXhSXpG3zXcbRrga6sgzisTT86wcE8azPS8kbiWjD",
  "key17": "4p77Yb92YoyzYb2Vie6jVHAJNuBudtfVwfQBypRXAa9g64rdhvFxVHNNUxMhhsUhca4TJ9qs8PSwP6TzPxYskUeB",
  "key18": "2HE622KPoCKXZS7uAb3Hif1TaaNGsrrP7CjRYSqQNby3xFKzBdmoRGUrVw58wXWYadRyyoAihraGM4ZGRPyWthQ",
  "key19": "2Lb7EPbCfuXkfS6JqtHZfFwZsft4dfDfFQkgXXGioLDb5nsqG1QHUo2UEMmHSAuggZSwc6V1bmeLg3SoUU56NWPk",
  "key20": "4d4xDo6fWWmvTC83EfQw1gmtQaM1ppMjzK7gj21KxBTaocSPkqZCSR9SdSR8679uPnRNrMpoJyEfd624RTH8kTsg",
  "key21": "35mQYKdTHKAPxzvSDQATSrSToYsJwqCfHEqQffDWz2VU5u8Z7JmHvJu3yZPek5aQeXnwtc8CJ7KQ8HVTpAEUimZc",
  "key22": "2yHdTkdZTcVfmhr4rYHSABNdqPFXQCujUtSwkjsmhR8pF4BsxZdkEafhyRavb9yDHsZGZFYcoyEgZ4uunfvtkuSD",
  "key23": "2Z7x9guXdMA2RpV84Ti7N4QANdPxdrBeHd32iXWx4yvnFFyxVW7YoHzcFMBVTBVB5WSBnysfqBDFC7RvCAbc7paY",
  "key24": "5jHqT3U7BKbwMNprZwwmgDTPqTgf7Yni7UAaYHJQY4fmkj43fFb9yA8WAeDbSqFPR1TnwMFT2ha1FWkU6NJmzmcj",
  "key25": "3EX65YCUpDNc6nsP3QDMmN1hEC2wSXs6FRYHvw2P2C2ub8b2uQAc8JJKHFtAFapp1frPvv4b736Hd4ANuGE573JH",
  "key26": "498kwTh5bDMhQ3wRGKtyjycoxQYib6mxMHan5yPNMBbmnoNZf2qeaaEB7p5PPwSEzeYwsQksFEmZNqAE81r4HygT",
  "key27": "65STRmSQBST3hqTo5kEef2zTfZJBPCp94qWQqb5FbYA1P5bVcEGtFUBccgn6xCmQPn6kWo1AGUFPK4ozd3U1xMk7",
  "key28": "zHtARoqaBX8FfdaGGXnpK9DKtiDU9BEKhKVRTmnPcb1oWbJGCbCW8ebYKMTg7pVFS2RyL1m1fk1JC9wZHkuVWMi",
  "key29": "61DBFcL2aoTQ2Z3kurJbTcyEsMsGNCpWFM9pTFTBea3XrMoh3xBJNtXFhjyQJe6PQDbWBKhB8SeaS1qpfwGEUDLA"
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
