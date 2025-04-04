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
    "5CF3fdxfP5UFYxTjRy865Ub4BPPTQorTmZp2QfLyLbaHS2Lxd883yPM6druwwpk12nuGdtQSZbFVFZRKc2bTAcUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGaCdyNFFbTFfVskBFruPfwD7CqbjYi8sX6EDFXKYJ3tiBhDDGzrPsb95ez53NcWT5asKxMndpaDCbP3fEpqsak",
  "key1": "2ysnXaGoh7Y8SUNyTTcJtYXNFMk7kvFh3DHZfUqrk9noPsF4zCzoDX6LxNWBRZFhRT1MfpWiBU2SpBxH4D4wgcmH",
  "key2": "2pyqueBnJrtvSmYHxFQYKtPyjHXdcHn3aywHMLgcokbxunVoStt139JMj5mLrjs7Z3CCB3yxeru74syeoJt29q84",
  "key3": "tqhWrLmzgb6r81nVgqtApB6uKe4t4jexVNfTPc2ZTtxdTe8KZpXoJ78dc74Z54pgS649o3Zrwekh8aHP7Y6in25",
  "key4": "M6QRnGmZ3BvseZs3oaovf5Hjyafq9wQMT17nMQPfQzUPrLqWHy82A6MtcY7ZK33DuhNSu7PiJtJJWFG2d6yB9Zd",
  "key5": "2AJaJeXVhh13uP2nqYdv4x7ksR9LTA1XSoSaqkSbQZV2YKUG66BgtFr8xgVKUKbJBoedsXdr8aZhrubNMR1yH1tQ",
  "key6": "SkfrJ1guLs2pyqYJd35iEMi3bDXcf5j5nHEZe2vvhxrtpsk5sGwT5f6bb2JFNZMgPp6AEzaLgw2Xuh5HkvBFvaC",
  "key7": "j2BrNVq6gqVnLcjr6q3seP8iYZLTkfQfasEZAePsCgz9TcsCpvUp2rTP4rN6pAmbyTy73RD371bHPi7m8XBDozg",
  "key8": "4k3Xkd7tqoC9oqMBqvTettZNJkGdKfNBSxRAgh2QNDG1DELwY2VxxysTJ3ExmnDTC8Af9dva5YUSXE4uNaKPQh56",
  "key9": "28MNMAUgjfNU1kqbUnHiZeBTz4sffSDg1TZVTTbT3AoRQiYd7y5eeszU9zUT2TGg5fiFQvsfcjX6xJz9FkKL2VqQ",
  "key10": "oxy1fKpo1uwWdjyF7bmb3Z83qg3UYM4YmXEUnk99pemDw5WVm5rD62NeHTFJCgJNfS24Wrqssg3vEb5wTXbEiGu",
  "key11": "GRnqWzAu6SMLtZza5dEgwGSFdT27i2yh9pwj9GawHktv7FGwoNthhdZdfA7pG8bg6kQ4AecmopQpUgv5Eni1mjN",
  "key12": "53giAmmM85a8HkSjY4CGAspwqaaV5x1Njha3VgRhZFVNKRMVMaoJTNLLrUWEkDksr3UJfE9ev5v4CKu6i78moyVf",
  "key13": "2qeLhCxjzcWBWGzCgTfVitDTDHo4EuLhM9WEeKDzaQs7SS8YdvdhyiAJcDRxve1rXviPVJKWAXUxrRFjmEHcDJnR",
  "key14": "XBbdwM4fcuXnhuaLDQphupkVNygBNrDwnT72NN3cpUj5MhzHP5H6qofazakHGMrZW3LofSpro2nCq8g1MaksrVA",
  "key15": "3jsz4CwdMJzpN9ucb26gekfEYxRkJknwasAwb4cRRnML3zWm2g3znxnzsVkLxjd46agNKzo4duQifJ2Zd11jA7pd",
  "key16": "4ZmSTHhxVnkEPHRf4183rAyKVeSgYbEDwrY9vQqD9aKQYhhJysiiB3KiULWKPoS5699Cc568E4JNsKAMi1XgCv7x",
  "key17": "4NDSyVx897wVNDXnojqfNV1ANn2j3a1VvNeNCjjyfeS71VN1dazqJcGBX22r6sHQ7jkZ18eHSseCd7QfoxymyChL",
  "key18": "2tbm9wAbVsdVGrTrpvAKLxQC1YSNeZ7TnoqeK4MEoD1rYVLgbNnL8m28mjJwENZMtUyabJZjF2gxUQJdGrQ2WBEs",
  "key19": "nWsm3qboZ1bVooVMr2TuE84SL4aU5PqVH92smppLPdZESrvvuLBBjTyeygshpGr71zZQgYmTZpporTiAGTUGyUu",
  "key20": "5VeARnFb4dWyRLmFR31EBNDeBggsn7a9ihYwsbGndfhvzvxuVG3R3xYUS9etDwsc3iZxbWgP86dQQ2tdLpAu4hue",
  "key21": "3TgeTfsa5BbVKVP3rG6CdapTCARcpDCoqbHFPTiHDuDZhe9cigJLq94d5u2CiCgki3QTFcxxM7oBKNjM1rstqjv1",
  "key22": "4PTiQEknXEZU7K6yTQYXgrnp3ceLvwd4ag49Zr42wGWhKcVihCiu7P1nPc4mA1j7ufEto8caG7owqDoCp5Qed3od",
  "key23": "2x3gHBnKuAz89fZVuh6j4euvzqAdRp3NpEKhzruYHLgKFoXAXSWyMSeLWuEWLcaQAvySH6gFQMcFZVVd3ktEUb4c",
  "key24": "2mwBmP9TpzPe46duQw4BxUD1YrgtoRciHhLyzhNA4efhQbBpcsqSqVTA8zY47H9udueKYCvejevYX6b8NMF5BYjH",
  "key25": "S2g5tHbbLMjC9rNnkugEwNDT7hfuRtvmCd8bw7Tz1jnXgnUtPs4GWt6pkrcjwDaCe2yYotuXRQHoPavxwvXRLXg",
  "key26": "2ZukzggHhpt2srM9xQC77TETtauHpxukxDLY2uCMyhJ4ETYq6z14eTta6HLmW91cQdg7EFypLy18PSsok1zDnBqz",
  "key27": "2UiH8ot9iY1RNupiQmwwtjtqdwzL7myZwu2AMiMo2ctrjeKQCuWYbAPg1crbVDEqY5bPbd9TQtgLyGH9xfTw1Qj7",
  "key28": "5BSUz2WnebUJfGKwS1WQNs5NxVCasRaH8v77rmwKtSsULuMfYytSHLmd5scGoZ7vG556pQe9eRPkvFsFswPPu3VK",
  "key29": "49n5ZJGUFo7Wv6T44GwkA5MpQhnk83PXwLbJk3CkfcREWzWuLT7VxBnLrkLaR6AXy77vMKz6w3YNgdahHyPKaZW9",
  "key30": "5fsmwyUtZBvnYrRAboeHA4aEupmDAQ4SsEkaoz5eBrec81CWgNhFQ3X9AqJWAajkLYdKsxKtTXcskEAbtnZLPZeZ"
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
