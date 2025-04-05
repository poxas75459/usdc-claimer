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
    "iELAtysAUGvFC7CJFByFzhKTdat79E1HmUu1i7ndMP5nF3Ysq6BVJthEVRQ8VrtbApLT1LUTqMTNBi7Tk1qPd1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23qj9fzR6sxKMnUnVg2uZCTHutB1AUuPU77ZoeFyqwSybYgaiwVw58arGg5bopThSJ8DwEbsWNdDdWfnwm575TKK",
  "key1": "WxvyJvsT5UVtWzQcm65QMnUuHq2B4bXzKojMorRsdKBYyPyPDaAfEaLa9VZiw3d3VPspobKRjTiVsNwoKbxrNio",
  "key2": "qp36z239xvJVYKAon9sGBfSbF8QFHLKQomudwxfZeDQF4oqw9HNZeCDtJ2bM8NVvWVLgujQqY16rkohdRny5Gkr",
  "key3": "58ExW2ojvCZ4T4jj5sXwqNVGF5U1UK7UXFGzYoseKNNv8rMyJWhQkJkhSNwXz6PwHXEQWNL25sykPpYRXGfybiud",
  "key4": "5ZcGu2WLZ5Qudi4uNfJZenrzSvDugw6GptdbKi93jXLf39EL1ibvp4jGgSoCpqPMqz1pn7HJqUkZtXKLx22VtobA",
  "key5": "2wNmQ2XwRqjSfhLw7DrmrSYm4SCcd8oa1agKBfk7kWpUDMPMHU8Bu8YQqGCAi38gYFT4BtbWtH4iX4P3xLQEVjKH",
  "key6": "3YbYPSRPxjhDLrbPAL3WK1EFtc2HRBs2WNtcnStHfar6xVHK4iiGabvkqWeXfbWLsoX2YF8ifQePfZZiTh6BcE4T",
  "key7": "3NVgEz7YWF4BpPw137dqN3n5eL4ZhBu3h6ndgrTmS4PGjD4zr4NiQAkZYY9qMscm2oFffQRKLLne9SWaSdWikFr7",
  "key8": "4UrmWwYV1NJStPFwmUqo4hce3jRSL8HHkCbaMhXF34RLtPJuXiBPEpT23rWADmYrRqUGYsidezVhvZi6pvWbpJ33",
  "key9": "2eEkwwb2SRjttBBtiCoy7v3LSKWGakddGU95z4NE5NsUChpcUM53wU6qffL3CeZKVzrctmqRAhUH6K3x79nZPJSj",
  "key10": "4PJPzTZSaXmszQ2wmCAbtbBaaG6UF5ZqN6GYEumdKiqp1jYqqQn7bTvacA71MTChT6eLEzTzmhXpKBg2xvf2vWTx",
  "key11": "2TbPpduNc6ie59jvxN4aD3feNrf1dBTYwMXQkNWFQ9kkbJq5EMHudxmXpy4xmhBXikM9aJHJJjnxzSV8DTuF2f4",
  "key12": "669oUUS6n64HakTipxxui2roT5YuYqrZUb4nWctz84bFMMTYa2dRjj63sbzB5qY3gEAV9ZA8XAkPk7m31nj7Knih",
  "key13": "22o3dND5T4FnqLQwu2ev6nUVVz5Eyi3uZ6bSg5Dm1dziAZ1vpJNBoAoycZVnv7XSBHQszgqe5GwYtr76Ga1H3S1w",
  "key14": "3WkxP52vgGGcAGYJn6CEV3JXaKmpGEM3Y9XiheQiPyhUQmtTc257NEMo9pFarogneqcg8BCvYJc8opLGg9V2Wsdi",
  "key15": "2JYqzgpPg1hHN4QFr7tQteoNw23PdS7V8D5qSjGdFTmxrsVxwYi5ZdEZQGrcua6CDMwcimnMWsHznfWpKeymxB3E",
  "key16": "4rbkSBZuZQcHBCfbZxiCTsXVcjHQXokB6J6g8mmK3fQJmXxkWizLt6wipGgzt8u8kBcb8khF2FcZf78F61cpLaba",
  "key17": "4NTNUPn9umnahCeUMk5jo7S72vUtUMqLPb4LPHhShfxzkWeoCD8MM5DfTj9JcYAhqMLmxDg81z11ta2StLK4C6Pn",
  "key18": "4yQPd592VmRA5FeKo6rkRTMrQiHrDPDrorPRm14Jdi4UakDvq6NQhTW5cWHP8vDFmhWhp3DWGAxmZMrTAvQf2ipy",
  "key19": "5bQ6h7GYXnFCTFNcLb9mpiixviVZY11oBS6i8tu17iM4oAeQE33skPGoZvPco2UEmMTcC7MoknJo7Xfb4jvUxgtJ",
  "key20": "5hbsZ8fyErY5BnPjEFEVdmxzX56bfNTdQ5vhhNwSNwwWsKVp5DcnvbZ5Uy7yBxRxKd2VCcEYgBmGJj3XmFJmVa2k",
  "key21": "dwkHpkeeATwmgZXRhkxbB9R52mYxeMcd8gkNoY2tq54gw23Z4auyoxQrrtJHCtaxJfGzNDHrHh5tMLv74NnvVKX",
  "key22": "64CUwHF1ph8QgLGeDcS6Q9MqSSduJYioBqztTxqUFsG1BzmLXTjQhKpYRwatyYibEroT9PZAFrT75KKzn7VRH1vx",
  "key23": "2NkAKS8AcNd3vQFzwVfHpf1ZWQbDa7WBuGonZDHoPJDwUQty5AfyymxXoaxbkUxpgBU68cw9ha8y1AYzBEw5pZYW",
  "key24": "6TL13YNVqr9beUGYyvvkMsPYdmPwCn6dpAyqEGpjQ85UMh1aGbwt3m1dWLnQBEDFGLbNjV6TXN2bQYGAiWG1YxQ",
  "key25": "2VwSrmkivQbzohJHdijC1VpS5bAvzSizWysN36CYuxnfjMekBTMDA7hMavsKCSFZcZwPa3NEC9m8j35ZKpaQeoC",
  "key26": "28uerxWWsqtzVFy5zjQ73T6KReueLjZyaujJLxyi2E2jkMFP43YoPNpwAfLnsSDHfpHMEqurfioEvtULxeptzpad",
  "key27": "5QBJKs1WtYvWVJWXUVJb4Y4eFu5VZu7XR3Racq6gshroT3sZg6ZBBKRbdCYGEraDfzV1ed9vzMCSisGGotHV68m8",
  "key28": "5vmF4wMn4VNB16CJeTBBVxuFvw2Q23PvRwGo8rUYf9uEaMuZeS5ThzVfAgshb4sHMQn5anTsnGBCFqDB5JWUcoGA",
  "key29": "9nXfQLKbJUEMtBtSbpqAXQwMPoUK6nraMi4qsHwaNbzanVTS7S7XRRwuhShUAYmx65eE2i3giNM5ja5poDFqjhU"
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
