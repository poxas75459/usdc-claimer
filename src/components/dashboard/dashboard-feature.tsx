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
    "g1w6noQmSGtkhZ9bSuU68mNSPdMHzqXpjrAAKVH2Lbe14PZ4RS1MPDidcXeiDVD8efP91RhAbTBiheHHEGthrjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32MaEnPQDbr84oxu2erRWpQZHzp6gBAJzVggJDgCGvx1wXg4uPeA3eaRktpN7VNNKdkS2Ee5M5KkwaqHELWYGq63",
  "key1": "2VuunD6eGGt9SAqtQVS2bdQLAaiXmVnDaAhxqFsdonzwXURt1ED8ZP7W6zGndSb3Ac6ZuRg51H7DomdayQHXiqC8",
  "key2": "5Qxs84AZBttTpENLjamJyXYGCPPC3bCaE9fpiVMhuu63SuzdZnL4wzvjAiPsJaqVQKNEMth53916h12aoQsQc3md",
  "key3": "4AP7Hy7N6Ur85uVcpYYUE3jRWyikxoxo9h8BBzr8Ljm969i7SbJZ96WVqzCSUstKfkcx487i9BQscPVtTDcbdX83",
  "key4": "3BMYdWPDC8hrqnNXPnondxvymrteadWwX8CQVQWXqRMMbBYVYCeWefTRrxeFW3jdhLX3WEj5niqZU8U3G2n5PAvW",
  "key5": "3da3p6FgBjkJvQrELMmNVw5tv9wdRiHpHhNrjF6mVmDAbTV2zpzb3eAYRNRk745b7ViM4BKREDD8ZEeGWZtAvtE8",
  "key6": "5RyGfWh1eL3kS8gebQgnHSe5a4F5V5bWCvv4tnu2qoaNtBefGorCfMoVrsLNHvreZfCLrJRsRsrYcT3gnbuiTkiB",
  "key7": "27Y8jVSbiS8VcR3PzEpARN7ytjngL2AwFP5vo1YDTVFvP6LyExjmwYJd6jde9LChmESkuvmBYjwT1x4G1msTezsE",
  "key8": "5LE1njBDhTM9vh4pdRVmUXpGTx9odEndVg2BwH9XoJqTuFoUC2j9CUxenyGYBzNe9vjKiBtkGjRf1ei9bmrnyPfX",
  "key9": "5wEfjfGgkeHUnQGc1cPcdWZyLhLWrjaDv275J8PzNamEHjtVGHVZw8frwMEhvAhpzrVDRzgsru6bG1PQ57eRuHJW",
  "key10": "3eLaeABz5HkJW9uMHH6QnYDZDrDWFM22vE4WNWfvN7My5EJf56iwDwSgw5Tb7YKFaFFj9zHUn3ovV1KHsYo746Ti",
  "key11": "25zC4ieYP8SoxCPunJyYrgGHmaaMCFUEj9HCQkN37xHr4tcpgT1osMe5oMR99bVNSwVPLHYPR1jH1PvPu1jstd3P",
  "key12": "VvLXyRNqMxp5sGhX7riiWYs69CR1dv7r1ifuGGspj4fJfZE5qtLCCgEE371Fb4jCSk1erdCbQZVufudrHrGVne1",
  "key13": "F1VyEf8AoRcKK72hhrhB8vuxdQdHHtUpgkCJUzbTJ1aKGeSfptR2JB7fXAfvcE9tYN91aQqhNhg4t2XYPRJ81gE",
  "key14": "4kbE9dBTgSruA21TKbc9wWoBWQzLLBybi8Q4PAcYFVYFbKKP2gyRsYT8k27jidDPoLK8i47xbw6Aykw5f9itEC3A",
  "key15": "HkpptXEFUoDWL3ivTRb5x3n5MgmJ1B4vaH8mYaizJhQ1JojFZPNr95mTyuB88614QwLEYASV4p499LCc7MGCPvU",
  "key16": "66QJoyet7zp4Vy7E1NZpRWgjLXJA83uLDi63ccywRdTdfFb3zwbW8xoQncdnxTMbE9E42BJ5ZQwkd53ENMUWGP7k",
  "key17": "3GxqzvV6Yrk3NpiknjHpRvkL5FSZYEbw5wKhuCmPsjwMxvyPXbotAbrh3xs6LRrzTt8dtAYAgAUYJwmot6Urmdd9",
  "key18": "2X7nPAmr6opbXqmAi6cvtWaLXdJdCszUXF2gP5nnYNCEPCPmbYe1XhVp6fEmEsFm2A9c5dpiwLhaKeyME4hUqMXb",
  "key19": "3MouXtYQ1B8H1t33DXusskv5CMttdi3dL7MYc6bPxegttpk2GaPsUxPWWSRJxs6rpWp5FVs5q4v8u22GgmBxKEgc",
  "key20": "f9QsmPBAjvYHi37iRpddwsoMVFgVmYk8TSHAUGjWXPbF4Fu72oVLS3D2yqW5x5HtwNaFtFuAt6np7G4RCTcYvgW",
  "key21": "3C6EZZgZ134TZUsiwDf9dSDZ2rAJaz3xKB7mHV5EnUzrqQJofa28Wjrv4tf8ZnanndFS64wDoHZZjnAedvQS4HSu",
  "key22": "2CFPJQbq3ejhJaybnz5wsQsFYuAURpp89FyMQkysvGDgbZisWKwZhoNiSMnLSD2jdxKZZAxHNEPifwkCZKKWtpZq",
  "key23": "5gMAL9Mjwv7b4jn2LPeij96SG8Lmsi76TcaGda1sdVqxLibCE5Zd443BbjWcK1tpPad8N7Bpw97syWnmKsXricvS",
  "key24": "2UuWM3wpkskoVAiK9oKk6Gk3hpvfL63hEUMtzAFpVXuxw9RcRnxFUAqUQiJfTp48v3WKam6RcPWDoRQ9QyEh2TSo",
  "key25": "CZdyoSsYfxozde1FYysxmJ5m8xMtWthfRwwwu133JRpLBd43zXcXsWDHQys3z7TpNHQBXuR9pbZnLchjhVCCBW7",
  "key26": "4SJtQeFa3ufByfedjeibL6MZa6NkJRd5j5LSVZEjCDkmBKrTwTbNG7Gk74MGV77kr8E1uuc8DA8quEasGHDjRTp",
  "key27": "2snyxWQyVpKsemgtUG6trfesGAc1HCd9JRw3At5rgBsJd3aMej4T2ctwaBNjjSstD4MMn1boVN8ca6JSVcBCTN6S",
  "key28": "25AnwxKkeAYAyvUPdJBhzdpwrGq2m3NZdnaBQttdtr58h6QWsxFJ7DtaL74sWwDx7R5L11XfDC3rKwkiAAvTA3Ju",
  "key29": "HED33fpbjnpxzr5PaJtn4dMg2r23NDqNKEbhNppLumyVQq1jHdCg5uj9WKCDmCJsm4t6EsKQpNfn8KChMA7iAc2",
  "key30": "34isbyq819W1UKTXqN2DGTrXwYa5jk3VtVsv4RDzpXBQFszae8fdz8b575uy5w2v5LWXbYgFBeMGbXtchQqsJsrb",
  "key31": "47CFoyRuFdburnje3PCWGm1Gp4nRDgUtP3Gww2NLb4QHfJYDDq7yFE9ygBHRKJZa7MYMwQDsGodHbakrAQi1HjEd",
  "key32": "5uGTapE5AieH11NXHkkvh2KTLgopJ2aKBvjfrn2MsnMtXzZnMqB1B3ZV1xPukX1sYvSYw8jQa1sPkCDgkvnrQMsK",
  "key33": "35CVvG3QYJCE4oYu36nbJPQU9G7wYUzkiKt7oF3Bx1EcayukwjBEoC1XvUrEJMbTe5BRvuHSTh4Mdrn12whR7BLR",
  "key34": "35wTyY4pui1oawRaicn4Pz2LvnUXVGEtKVcCaE8Qngxz9i3iEijuV7uZsZQNg21Lz8jvkS9z6pzkAH3y4zrxvpvm",
  "key35": "AbtwBsgH2UpUg1uWia6K1W5VKnnBkUpKNKAQRzUkvwsUH1JuE96PfZnLnAPV34rT8hPGHVbWwphqRkw5d91KinC",
  "key36": "5FPXaiYSxgSFvfDachuXU2UfUGNMm5gGKzGoqLRPkgvjTBSBKYEMt1DiCbPkfacQL6QhTJLjsWLHTqnpXwZnhYnA",
  "key37": "64rrESjpBJDiwXQcCWrCes6wQSbuK9MxKe9984LeQk5jdbhWc94eAJfXpfbSsvqGVKaGGcUA8XduPgg6fRZaYRD3",
  "key38": "3TWVgrJNgVLjWnRqZRAs57GCoHzQgEgsaHG9NndHbWzTfhY27tXHsqqwrUsApXazuhvxoUwVV8BkUKVBCFdaTKKm",
  "key39": "24PmSmoq1mj4C9PgkWopYhqMfFRNoUWtyjEMdAQpM2WMqW5hN2KLrxN6PJ4YoH89ey59D5EBQiUhefPWvcLKRZFH",
  "key40": "44YqYvC67QLTSFyFZQsNQXfhe1kMWCwx7cffWGaQsCs4sqfhQEDJoFz8d26dNvZWNh5zQJqXNrj4cezRTwj6yrRj",
  "key41": "5m2wzMJCJvdiYcCG66cueAGMUaPaSZxgTRXXs2VcokvPStXFeTKvUeJMSDSzZfSW9mtghzkuaXGhthCrGaTFf1qg",
  "key42": "21MSQBZQYbWZRjgkzT26GUHAcak7hHZJrNrhwY6r4ueo14Yf6z5NQk22FL5tx9HQSvJKmVcxH4uz27uXnawhEUy6"
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
