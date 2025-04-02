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
    "xHBFcHQtmtPx8NwW89dCgRiNsNU9thBPYz3rQVBFRvHbL43d28aWVgFCZTdcKtGxxN6DG4wsJsfyopg3UG8eujC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RkL8eNsbHrAb1UAXuxgdfcB2Eoer24jtYyTmciuWL6NEWwakPAMn19AfXBQFbW3LYXzDr6T4qipgA2NeTyJbjQi",
  "key1": "4kroe6sqcKoBXGzCBMUm4XTmTfvxgTG73zKo5bSfRAbgzaNWFV6dRWfCsgd5qwxmPUsPn4B64wnYWBUtRfnkz6HF",
  "key2": "5F4WWDsB5TjTqpQctPt3Mf9WvDdij6niVcBiqN7yoYSPvpKMQ1GYodwcYguVAuF7AmusEUjKbLRjUjbPzuQFungR",
  "key3": "3ueWbfDuTnpyqDc7fepabmgn4jxcp5An8XoapCCxMzpHL91PTpLLcxXqY6bKvq8jyHALqgmoZQEc4MBwn4YCTMPn",
  "key4": "4wEKRjSxPEuayTSnYMq7Mezbe217vn9qzCWg5vzbgQE9Tc9rk6KJYKraNtfrcK7TqJrNGuDsMRTJzqJaxrfXEtTJ",
  "key5": "4yrjz8WGP3qr2SeSEskiM3F4jMRRcwE8vcEkog5ggsQ7MxYJJ8SqggjgfGA3d2rC9GmedxnAaDaqHkW2jKPK8rdA",
  "key6": "iEGoLEsmoJnkX3dcuZZj3E42ASJaMT2bojxPgrLt3MB8phyrnQXJVJ1dRaPiNkMpJ64qfGyVQSb4zUhjpr39VKR",
  "key7": "5ejfzsN6a8bLiUvmy9iPN8tnztR1S8fQnrBewVtMyhzhBCUWzv4kixDiWiTRnbXWBJkKMUiKs1YwZ71q3bwaJtAJ",
  "key8": "5L1hTWX8UG6hzbPsihv5GHwSGHHtR6sssSqNF4WmZnC23PwWh1BYwrHX9reztKz6K1oxWW9AtZ6e8ziGRwbAmTVz",
  "key9": "3jveN9X8KKT9rzYy48SN4Sm14ah89L7p2o3pKEvoJGDSKeVskxkrtdqcW3WcrnH9982nGSJzaR34Jf3cKspSD8cw",
  "key10": "2fWap3HEmsJqnhbTLJXuTasAfBQBoea6Mh8F46GvrnbpTDGHXSKBvPEzCWeYCJSP5iMAsc6eUpNK4q2jq15DNSbn",
  "key11": "5Hp7UhSyQMgu5fHmwwASzpu64quq5rA1MStDoE5HVfDVZRVuqogZJsdHhbS7KG6DWUHYMvD6U6e8u8xKwAHeCUti",
  "key12": "2qEA8uURnJuwJgLZA4sZYVhBcM3YBuHSCzk86mUUi61HNQhFHHZPPNv3DrBdtUbVsByCZAFUmQ4kpXB8jtzQFqqq",
  "key13": "4tg4F5UYgC9f8av9vn2vHZrePZ7Cz2RyEvdPWYBmCWzmdg4WfZsqGcW2ocAdfhdPSb84gP6ozXNHARQXBHbKrR9D",
  "key14": "3RC4VuW54CfXE46zuHzkZiiHHMgHX6WMdp1Bv5SsuXLkyPCpWMah5tX3KEjcgqT5wrah8wi6jgNe219DCcPL6txE",
  "key15": "3nKnjvX38kBcbjv87KtyfvPEqx6RC7EG5Chw4F3rVRoAseASi7zHPYpLymBNyR1HywYujKvD91iJNNaMHHZ4KfBB",
  "key16": "5eTJzVibRrFxxGKN8SWt6dr1bQUP9pD4VpjwytmpuPLp3niGsVGQ35na4GQb3r5BqDna6Ayf8dGVnKoAXtAcSWy1",
  "key17": "WN2kqkf6RTuroEMc23TGBrmCQq7DhasBJkJ8YA6RMTcwsSJohiJCwR5CTsBDUf4GVwSLH1NoeHFPMeiJtDJm9vS",
  "key18": "3eEy1bnV3kRC7xLDLfBove3Y8q5WZ2M7uuVW3FN7R5SND5Us9nirn9bu6yiLG8Bg4Grw2U9bTftMRzMR4RztCUhB",
  "key19": "5pjFbU7M3bdKKbAg3QBKogKq3M5h2UiTsU8MHskuhgGYFB7h4xa2Q2DtyshGwFzqWKuYTjmVQwu7cbwKytX5ujdz",
  "key20": "2uBBLLdDDtcJooBtWP9xsKv5U1JL7v3tHkqccE7cSZSWq2Qjsp8SzsG9253LG74F86HsGsi6JVAehttngJUiuYD8",
  "key21": "2fGty32eQTnDY52bJrbkKSnHX1xYicN9B7cGRiRU8Jdm9DCsSjcFTUHC95NXxCkaxwnRJJ1cUuiFRFzYgKjsHyQk",
  "key22": "5yuQKwGyBB4iJszDqeRXbLrxVoZZzKmYtgaAYQsZuM4y3Nf6Wk9pKDvBqDuNgD5YFkb2VqDDyz48BViddKRrQWr5",
  "key23": "3ADMg8v8t1PrNNQdtNNg7Tr77LP4VkvDuKtCh5T7mQkv1KREXYS112TeySKr3FzweyNTf8MLHVQ7z5VcjKvBdmLD",
  "key24": "5PLNBfWZw3pfhEEZktDJsXPMfjqtp7Chz4Y1GVsAadBTe3mLG82T5ijGP9881a4MdRwo7eAmGinrAoCtMu2QHyFy",
  "key25": "hpv1FyJp99X7XpvbbnuuHzDMRP6kEmcjmrNnW38VGdQ1LcZajfpS9W5zeXLbDrQfDT8BcM81Y2G81QHfJW5MZDm",
  "key26": "5WoRoL7bzcGLTjLmDFbwMHMS2jLpFKkeUrf36RESSg9corNXuwMVHVvW6EmB5RbHKfP7Hvf2b9wyQBSkqLjzJxSE",
  "key27": "5XbvpN9Y4tH3UNdjqV5Scpr2z4t1fGFuZeM6SuPf4bcjfZES8f6j778vt5nK1mFfPy2uhU14eti9U8msnTZL5hLp",
  "key28": "wC4xR1RyduHGF71nLgn1P85c4YkYmtJ8ZojEtFduyzZyKau36EmaaoUNPnpS5HNNJVk74ywu9kUhp7DvzopSAK9",
  "key29": "51cxTfAMYmeCt4bWcW9pneXUC4Dx7J9WAH6Fhuwo8mDN6fWF6ga41np1v1yK5XtJzqxQnaXaUb8TK1x2pzEUNEQ2",
  "key30": "2A5ipgqUtr4EsL39hfppDcmsEQPXfVGVUQjXhCjaWFFAbU6QPixMSQh6rLLjr3Z1KvWUdknHGcFraR8ikd8JVrmH"
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
