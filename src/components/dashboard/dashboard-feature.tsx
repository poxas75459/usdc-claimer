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
    "5yXpQugY8YceoDKbtkymuW4KvK8dfBajUPRp3vycHYgZCakp7FjZ6aW31fuKihi4TDjo6TGhtTTD2g6kFUGzgBRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Dc85EbNDcDZBfa8CGf1pV8LQjCXu2uQKnLGfoyYk7rVRVWPX2G1brH6Ju5yVPhpG8hQbwXvikLt2vE3Qs5pE6M",
  "key1": "3Gy415adjqDKBiYSqjuwv5W7J5WUpYiBXvU67XKAHnRnbgKYqc1Daqbj39mjVqvDFu76caLKNnNY9zAB9TATCZu",
  "key2": "2ncGsz7n3K6VmD3cfuccfVjTc3AonsfFcsLSH1jwqedq65XwmqABuTUpRuyCrFyQs84i82HkHekg3fnp3jEh8f4v",
  "key3": "3SMnWb5GmcRF3oq8pKDzy34Ea8tXx9wvDvbhP5nciMjMPSyPi5NpCoYBmpKFwBVg9CTLex9Zr8dX5cJYhURzoRK2",
  "key4": "3RVztqDrnwkKvXcKR1yoKf1s8fpA3uQPqP4idESMhn8z8bC3DbvCAYW13N6hhYpM4jTaUQMPNy8ZczxibaECH6S5",
  "key5": "67YuQVsp4kebGiBQQWgN9V9ChDYz4ZVXJQiszxm8jGgt4BBVXAG2ewFiEMNYkykzgxFyqcqt6bjYPuXQBpYgh9fF",
  "key6": "2zvQJKsYA3LepZd9WcwRuezkGmceEnWFhv2ukd5EN1jY3mLiZDSZpkfHymen1hcEQqpYYGPbydeDPq9xLHUrmL4W",
  "key7": "GctgojgPLHmKV1vLPSuAJDbuSR8RkFinnkmZFQk92fPJAfH34kGwED3e54F6ctuX2evTB3gnLFixWtJhqWkNgLb",
  "key8": "4P5SBf1Utoss3r7NTdYwrq2F2X53nvfagP5YExGpN4ceRxUcoUZewxygt1jtXPhe3uirfWFXquSkTkb4yQq7oQok",
  "key9": "3VfBY4xvmAiWWuxooYkWfRWtxCKWqiuBPsCH87Z9i4ta6bHohaA3ELM3hsKXYV4ffehctTF2PiJ3QNc6gbSERtqn",
  "key10": "4i4NsvD6emBwBce5ZNDvf1eEpSAjvXQTXEQ959EbEKhTqPnUE3qyJpUGPKJNxNsGjuMAUwSXq4qDgPAv7r23Ab7a",
  "key11": "476daW7wRhmwC2mv2qUeYjED84JikkEYMbqfaybNDngryW7juUZ5VKksduhDFvC8GbNiBrfVGndvzPNknoqaP2nS",
  "key12": "N56Xdm8hXFwGcWzdRc9wBhQsGppXnS5xFdirbVaEpmKbNyveRtZZ1CLhsqRgg74SviXgvBXQQCiqWoGz5Sf624C",
  "key13": "52nqoT77T4pj5UQ9VjFMDuJ1CjtPAZ5zAFcWEQhgNdQxcWEtvNVFaojauMWWU3oy4X4sqBuNBXFQVHH3VoiY7sgP",
  "key14": "jtmg2yZwRwXeWmUvTRKWs1pF6tWYHLbRVtmCP7EDuFX4gZKK5Tyn2tAGpJwrDPzMexVdvo6hKZT3SNJp3VEkCBZ",
  "key15": "ZJk9u96fWJpNTobcPMy1CAXrLdorn1cmxi2hprvA6rqZZ9N4JDgjSMX6VtE9xCs5kjqp5kktxkDMKuw8m1w5FVo",
  "key16": "CXGGe1bMrSFZdzAbMzuXxa4FGh9xZVdCQ9jm5vpop7x8k2yg7qJmd8MuVzGTt4AiV5x4TjMNUu2JnngcrG4BVqL",
  "key17": "4dGjS92XgDGKLReWhHoqFKhSrpaDVwG8nETPJLwbnrY1UEy9f132P6HWGvVug317zj7DKyjAENE74FWoF1N44oBb",
  "key18": "2kBZsKRdedZcCJYG4pkN2uDbDR9RkdDFWbZAWGYPVLH6xGXr3TuPE51RKVeMfJ6VTVxuU2nXkXnDpgGGSGTohVpo",
  "key19": "2WvTejfMoK2GHB96kdsk4KzfBN8kAsUu9CfhUPUuKGPF9RriQrsF5bFwfuEtTsm5thRA2YQcF4J2cLUeHkGHR3Tx",
  "key20": "2A29or7YC8ogZp8sLCUk1QyoTG256WfXbf6UmbwKiRCrpd1ByTyaLKRoiMsYdty3EtAfrHRuoNmSdDqCWJfNnn4p",
  "key21": "2yJrhAWjDfyyXktbKiW3MpBgf2zjuiVczSgv54SU3cZdTGjfH7GDjEL2AptNfVLoJNvjnqbvEUsbQ8zNxXPBt69P",
  "key22": "4EwSpM3zvT6j324KjRiR8HbvFCguZa2AL8HayLEB6hhUhoL13PPEJGAv5AvikVyoMhdjF4jtEb1YHMz4rCsbJ4qv",
  "key23": "4sTRD6J4T9HdbNmqA1nNA2P2hPXNq1b8FDd669ZcxLjmcXxPHSGuz5HRfBKhXktejRo12XKgLiSw9csjhRDSd6gb",
  "key24": "u7hCvBxtjKE4FQRDkNYiuRbC3ja6YxrL3ZNqBQvsRerRG5sMgJW9nT6jN59FKTq1vJaehTJENcKFSct9r2pDsNy",
  "key25": "54E6pPViC9PGStpUweNfZ8LqvY4pAB7pzB2GqBnPUyhrGfLUnEpZFSQrqZT4mSU4EoKkkG3hBAN2KrQJo8DeFsdj",
  "key26": "2QsKdPwBgReThxW6rAhtfLPG8CGcBjsreVt4DRy6C2jugJm3vAWU3jzucLMMjkEbQF8Zt3ifinLeW8nv2k7gXuTA",
  "key27": "2haDYfLihNnvSPbjBkg13jSyyZyL9cjonqwAohoL19yaWsK66E1LNLTWkDQkZpqtjmZTtwHcVCziVWJ3rNjTfJvL",
  "key28": "26ocywJrbPgup32pGvFWWEybDCjC45LBpEmP1nKnsHCwsUMC3SAVJk98AgTfXRVdgE5u2hRVdpBbyXoL8XjUqxrT",
  "key29": "4m2FjbDNsaDUSTzFfN7FYZfe3ucsNhXUarA3LFNReRovrasU7aLwkN4tfJSHSWL6RwzziUDWpj4ZV8A6aogbWug9",
  "key30": "28DpL7MmhUMc1YvNG6LfR4kq1BGL8sqytr9FwRkYL2GXFPxS62MB1KjpWwySWjfKn4t1ADPvoJeNEKdxTU5Q42hG",
  "key31": "44C7S35S1oWJpN95gVjvHiiCT6Wqn1msB3RAYWiXBiEdyaJ1krSeWbT6cAsxrCg9oVsHrHSSqvWNUzWmDasnoAzN",
  "key32": "4cUCBNHBFhC78Q2igsVwK5DifQ6FWDDwa75d79ebarQqBf2ufFVFqaGBLeLWgDFFvBtYntwseKTLfoaBJTpBgKPS"
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
