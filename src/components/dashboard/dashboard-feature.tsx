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
    "4PdPJu2D5oyxBTmsmd8txackdBdfawXHPM2fc45K88CCoAHeVX9dzrLCYtGBsXZGh86rXiVdjcmPLjdVBe4NLJ5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yvUdgBQXKy7L8Vru3VQpZB1CWRuFF1kx7jr6BR417BrKvMgaAM2id35Gje1iAan1yYHzNxoTVWpwCHBThZRo5RL",
  "key1": "2nMFDDHaiw6cEoXtADApA3FadxoggEVPNQNvyyNo5u7Haon3wxuBtBeuS6z4jatkknojjnnM3gVpEvZF487MSu5r",
  "key2": "4cBKNsDeFXvWPf2s7cmMquinSKJUvp9pxa2UjudoPGMo5xJY6z9gm33rr5LgZRSqnfw596JG2p9ZCQw5Cj9n5MrZ",
  "key3": "2kAXwppRsVzujwG5vhbRus56oju7Lfe2rVE28NquPJ58Nz4Y7i3cEERNjnxGxaffpj2zkjcVAzrf934tbxEA5Qt5",
  "key4": "LxkQ7TaGH1Re1rywJLkVnERkwT5pn13qt7btkTRFywxkdXyq9BDeaZaPSaf9pJNsdMM22cGsMxymKjRNWrLeJwq",
  "key5": "2ntsx4B2p1UnbqD6hE1WATVXxCKaRm5X436H7UNZEBYgbX6f3T5en87Zy3rTXoenAdsb6pXZ7fXKagsdWmmcRJxY",
  "key6": "5eczUtJTAa4VTkXHnd4XVQWzUC94Y9MH5eamseqdghXBMDfEVytwQpNvCPxCJNvynjyq1PL282E1YaKwve7LH5Hi",
  "key7": "ieWDKZe959ecvX5dRkyRcJwBLZFUj7FTGngL7zL1wAzUJvwuDe5qUkzHVEgpJGCfvftkEnvNWqchoq6eDzbnwRY",
  "key8": "jVYZJY4wLu6vBcXYwdiEQxHao2f2cDjomVtkK4a5niYpZtQCNUWT6ZLAokHgLYAt4WQz3bdBoR1GZcSfr8YfVgn",
  "key9": "3ekMdiMHouMjBmcFsVWH5HV4FRZe2KsQxaeBUvpPoQgCLvs8dJiSusquaACx1X2SautJXzD3JyDmK3SeYrA9D7A2",
  "key10": "44HipJfoE4w3k6uN3R22d5QvLDTzEjPLzudus4a9XMYyKuUHEcR8ZZYgv8rtaw9j1HJAgutjDF6e5XvugNkVyRcz",
  "key11": "2ueywVVipiBQDC9iY1dPvSaQSTuzApzkjYra2NJEMv5ftAdRtmYuE85BorRk773UByUXMXkUYVBscHcNnvH5gB2H",
  "key12": "3xe1kYSxzN7xemxFgh1zNgWsVfnigiP6ZcYzfkhAx2qREbLqj5ZLjC3sCsK5LXPWJQqZkHAMEWx57ntM5bwHfn7q",
  "key13": "2EEiJSJ4MjzxyTW1V647Fb7ayqzTAat2EQXQs2vbZsJwYy6hxtXfsgZQt5FmfeyLztjK5XY84DLrVezfVpGsd8pP",
  "key14": "6cya4Yn9i6g667gbKV6hMV6mq5duuQUAnsNTnKkBQGfuUvDED6qaKMGYkPc5tKFFE2E2KvNz8PrsHhA18pDCAF1",
  "key15": "c9vBYkf1LY55moVhKoUZYz1hfQyGxHbrKYQ1UfMQJoWjTkGinE25KfYxwEVwxzNBKUrsZbTzXRaLwmSuQmNsX8z",
  "key16": "58SQij3Qn8EAAKNbVuezawMt8KVAez1a5cBgdDKEShGLiVVnFmniebkUqNTNQF9nt8K1PMDWyBYhfMqRXmhkQT1T",
  "key17": "eLfeS1hyBf6LkNteR4i5wDVoeQRjCimh4HyweTxHNy5YEr9EeCe5QRZPU5UHtStsnYGYRvRq1JqC9T6PPLAm3Js",
  "key18": "3br4cKpxKG1giaa5bWvFiJcVvp3Wosa8Qk3u7mZUqKDPCeV9H3nnUn2u6gWfFQJRMPYNHZUKCYJkKwAwUgCpNEZH",
  "key19": "3sWMGHtwvg7rX5mcG541unQLrFzaKHpmYuiosk91J86BGdSifBwJw293TYRkCcEJ2jBRxtEzrUFtrb6MHfgRiBT3",
  "key20": "4CoUKB4n226m17F3ZsmHLoVPjmewcDVKN7aPpAhkPTBB5hKXs5BM49HpbAnopW9xXZFLu4WqcyFHzYZt4eYELVsz",
  "key21": "4xJLBsPeJLgHZcvTPor822jjf8TWLCZTTVwkb3nmEYyW3gi7RmCuUhSQoUonA2tpWss7vKwNZjBBi5BfT9TimAtH",
  "key22": "5xpme1Yxu9JCibmj9Ps5cePrQXZ3sPQMN72HdJd1wJGheejJYo9cy8cx3rFnN6vv3mvF5EjCUwYa3w6fRRR6tKj5",
  "key23": "2KtaJnFVDcrujJ7L52sVS5jRFMbtMHgfh4etpx3jo19kertvLd3pgtZrZ5jn4QpXvkZzzL6ad3L9WJWrAvedr9Wq",
  "key24": "4kJgWr3SYxB9wQBSpwWw6Fi8WX1VkMnDCK2E6PxryDV9UfkJVGy8rBwv46AZNCumEJTLuYyxdw7758SHibdZmztj",
  "key25": "3Wdq4FgiyauyU84KV3DsYbxsWo9xPoEj7yMq67UR1rUkVvWBA8irfZS64dVtu3RGLWqWc2dfTWex6M7x7Nxwipmm",
  "key26": "2GUtL74kjbAQErWfYq18Gh57pEapNTmbCTHjqWxu36ZbxEtbRMQJGAVL5jkrcFyBNy2T2zHMaNt97AgVYKLkQEdX",
  "key27": "5dAFyDSYj9dVxBw9eVZN9vJbm4jDzwcsXM1qgsSXR65kikvTbPKZdcZ1dAUYJb9yZqY6aakrggyohpyBSGwWZXJR",
  "key28": "3GMECFf4QSUCSBn3zBfv7poeBibWR82C6QkhpCRkNsCap4BzShrekWF6uoWV2ZPXtTAaT8SWxnK8xdqbWWhMKbax",
  "key29": "5CdMLABLG3JtfCxCSd4vEchLJy57ghDhgENwYrnL4PW9HvL2mZf7xpueQtrV3azoktZby4UP83mheZYzezYtwJNZ",
  "key30": "5fHzjYUDTriXMR71dG1wGfNE3gHtejxznRqZxgtfZ1Z6w73m6kvw9mTn5VY3x91vqwC2NYAryZ7r1y8EFeD4TNQT",
  "key31": "4EkAeUQDzrPBhR4f8wkbwcJDbobNhJWMaSLgvjqNuf8VfSji7R9hzv23MbZYJE26RoRDXbqhw6MoLnT2rDCLAWFA",
  "key32": "7UG5ZZBPi3GykAKird8nK5DggKGuA5LAgfzkXt4h8XR5bTkr5CamQX4YBDqFnR9rQD1JG5HnwMhnys3ZdAWdYcv",
  "key33": "3QLb5yUeJ4sGakZYNvNcFHQQADDQzNQ4zZakqhcEvZfEHXKzvSFAiXhM7AmeFbRKNbmDJMNSdtVo1YbtsSYEHZwt"
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
