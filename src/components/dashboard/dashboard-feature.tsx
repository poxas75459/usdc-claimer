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
    "5km6765PA1whFLfTR8iy5YQPkTa3dZnMkBcgz8YmMhTyVtu2Lz575zz9Jm7kJEUyX5bggLh9bc46WQLVdu4ycFj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFetHH2S4mrowo4PGCACVCPDaSAK2bEHLtCbeCmrhTnDdzCRwdMnJdyBAMep4W25T7WbLLojTkgyChFUUNhNFUw",
  "key1": "4XUi9d6aZm8me7wRpLMNh9ifLXXsXeJ9FacGwUiDt2SSs6u9dqzCjveDndKYjmFw1gvZqXaCNuYhDuSfRvt7hsYX",
  "key2": "fBf1BX74bQdsaA6ZAEhcfqYHXCCiX1KCov5QF32PtK1BPy3ESpGiGgrwSwZ6UjZbwZeg7vCh2CGWtVXprrpJQAx",
  "key3": "36RMN9B8jFQU59bRSR8PuGgVsGcjKo1vu2V9xkEVG1qEQncbCEHPRnPUAnE93Bh9D8WG5B1hvgRfXBZMQxgZhqhG",
  "key4": "2Fh3perMoXkfzu7vdoLs4B72gM3SQx4rjG7NFEzPoAeyu8BvMoNZAGaj9QNXpE4DU4Q4CGD6oYkC3eX2uom5cVSa",
  "key5": "4cnEBLGhva4eNNaBDYsjX4UX79Cm1V2KtZa9Ljn9jcHg1snbfKRWEj7xnC6vsQdj7SmV8arxCYWeVMDmfM9kRzW7",
  "key6": "2ybNCqL5qyk2NAVbtoWFDS7SpfpkJyUjduSj8a25M8qCTyAumqJg2vkjqdJPSQrAJfiEoQhT7V8SQZgLDm3kALpF",
  "key7": "5Sii2yePXn9GgtwD9a2MF4ytKFbtg99oXzBkVGdoeJ8SveN8UXdJcGMg17DkbjzxXrmLKxEp2myKt1eDK8TdrGz1",
  "key8": "4sJZWHj7MBprJ3f9UdjNrUAkuUHdYkHmzAs6hgtfrJ3cViGzxwQ5BS6PC8sxxVP2UW4VeXbedXde4sHB8TfRMBx9",
  "key9": "zEVj1t7dDp9SGDYhuYNEWQvr4b7SiRLfDcyjoRuDRqQF7fVuTkCdhmyTa2SJeZUXMASnQQPjFBwhz9gq9sjnxcv",
  "key10": "4ms8dQ49ptwSyMK4h3oZuqP9pbm9drpzaa5DFgsXB8TcMKPJYZaVxEBLXqS9Z3aYETYZ2jqeLgbHVggyznDG98W6",
  "key11": "126rChZgbEDvicqN4D3oiC8tM1G29zKxBMuAYpjHvwd6ssX3x2D8yxuDMVM5G5B3s5hAf671gXHXhzW5aHruHq5i",
  "key12": "HVUV8iJRmxLahRNAjDTSn2qxjgMAvyC91wzXnq4Heorw8mAA4m61oPG2QfLx7UwZq1Uz2obqvaM1giXaaXwtwzc",
  "key13": "5LRnwhiCLTeYybdoEGR6y6ktnGWfzaTPYsZkkbq7xXPApyLFjuw36uafvgH7rz2STo86zjcaCtgoFcLkgsC8eNuU",
  "key14": "4zsXUYy8TFrfArXc75Jhyz4zyaZbwAYDJhHiiBLyT4iVrMe2qXjqfmeJapYgzMDSQFNNg8ZFRXcXd6wB8ADxbV3c",
  "key15": "3FPPfFgMSZatoGBZqZ3E1MTd3gbzm8SwVeL6DzR1XDpemcwqvtMDn1L1U3PXf9Rj9Uyw7Prv4Z3nbY7vDN1hZfKp",
  "key16": "4dcc1KN4fcibe1c8dTs9GvbXMWuq2t5HAZcZguXyZUnVEZVbfQjjS6G9wqvjQXzC9PQ7893VhSUk7UWmXkfMbH9v",
  "key17": "B9xhgM7azzNd2CoB2cFDanHZz6mP9sLVqbH2ARmG8GZciEnHYxPYTL28SZxkAVrRas9c5M7JKcHto3Cg7jT5VUq",
  "key18": "WuLjfZd8eTd61CqWkFuuvmWwJeKGfiwkSMC9rm1sHREBv2sCjmzEQVfK4kiGsnEpTtBodjguGw6M3FcD7mi4w8t",
  "key19": "4jMCSdNwhQ7ErQMTSwH4ZrySScgU8k5tD84R8sFvYCqhphD24SjBHfFfgoDNnzHedKqwzuC26Kgvs7WRdWdVyLUz",
  "key20": "2TTFgDUX7vUzBB4qQzAw5wqFk5WMvv4dPDc9BcoNnpN24q8fk2UaKDziFJySyN7ffBmNf1VsdRSp8muMZosRhrtT",
  "key21": "wkDWimBnniT9rcbo4ThC5YzkLzUWgNvjtSR84D8rY2EvFJ49kBy1BcjidZCgBPSsE1PJvJEUVqJ6KvFhGwcXQPX",
  "key22": "31sHK3FY7GdiWoTcZDHbfxoUmZo1s91mzVeAcvXVhdJyfEfFv72HtdjFCuqtp8RTxn2e1KRbxT3h3CRMPTUJMx6k",
  "key23": "pSHeZ4UxMgP7db8cCatMZoTSaMdBt3vSQr25ogeERwfSiw29W6AhwVk5mELAoHjDjrmpnYiJkPzhfG95zTMKdeU",
  "key24": "4Mn3xg85Vc9YZMqzZJNTmHJd61tYhKhfU7f9zXpZFiZYpf4MBSi6m5t2HkNnZxrBRUjsJgSDmW5LdRaWNrERTom5",
  "key25": "3xRf1nVA6rE6fGbFgSnQk92gzubMFBM8RPhi2Mf4WRyrCpRhLrVixzwmjyiFLFkgpAmJBJ3yXxnt7xPXadr8PB4p",
  "key26": "2V3MQ9BPP7mQ36i3fMkMPcwuAKEM9tgYDm5wr3oPh7WLn8LRWhi6BpBfwazCiQRjhSwQVz6rV5YLq8LRzGfRh9zp",
  "key27": "56HHHA7iCpemNrLzVz4ERfiTdzn4Sp2vhuZcS58bs9xT4Lf8nuGx9YxSyEeFWJbPt3fWx1iq1pwd3WXtzQiLYXGa",
  "key28": "5yVGFTmyFimQnu3oTHs2Q1gMzuqv4TSwjhMoMquKpYrMdjP7FbLp9WNxEdmqSANjxre4RSpbXyzkiqCf4KqT1gQD",
  "key29": "5CXagWPAEgjYNyJQo59z8BmnDwvmbDqeCMDcJpKAikTNXZfyEDfGd9KeXrHHn6K7ZkEPA39stEZuBt1WaZiwXdPY",
  "key30": "5kgbPTgkJ3YkT9GHGk9mNHTNXjAqEUSLKJghd6onrrNE8f49Vub9LnHdvj5Va8emfirq84ETj7g8vSNBvkpxYfms"
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
