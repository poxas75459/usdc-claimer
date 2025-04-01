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
    "gAK5ZMQof5Dahe6DL8yddw18Tic5DAZFgBWuMq3hg3SL3MFvEjRQVkvjnzhv8yVi5TFegShvsV5dTN566LMTCFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gBYh51bEE4ho8B3aXuuSy2KZZCcQtZqY3v6n42bQpXHgTaDE735pvC5NnQLcQrYANrNoPVrYuksnafDUi4biE9c",
  "key1": "2ascU5uKN2qv42SagY75iMNGdztEb6Zh4mJh398QSQdDCrcuQ1n66d9caLUDJk6BSTWzMJNKN2XeQUjENGTexkYR",
  "key2": "btAknaxBoRsWedxc3A8nsKq3qGkDPyunagsn4fTtBzFunEq4borzW8hWXoE8KpSTbWCYyBp57FVcgX7Xe6noTvT",
  "key3": "exc4qTAhFRzz5LmT8fSzGWCBsDf3wwJ9Kbce8dY2h1RCte9ko3fgz9dMG6w12LVhq3hakxpLvqEVmBTBLejyLyw",
  "key4": "3T217HFJwjMhmsbcjSsc4yDVakyu8LGdbHFgvPuy6sY84q18CRxXJrfiUHpXqouXaEhF3PvzBuW6whfuPM3d8Ncp",
  "key5": "4oLqyuvbLwpGZFCByD7VDQKg8WQmVHpNyn3qgf5Ruqp55XKcQP8KrYDHfT23dJ8zkRbMy9Db13LvuyjUoV4jnNpN",
  "key6": "4NDEESw1jt3qX8xydvoXiNRy2pWer6vHyiX8Y5vWj5bvpeCnaPCpy8SZjG8h9QtokvCHgdEnwig35ipZw33GSx5b",
  "key7": "4KkksR4eCqGAdgMoQx2gi7YHTdsRifG3iP1Qzpr7yVmV2QZrpMdWL5URWr2QPHYyPA6iHvCErWF3QsqNNMKK9Tyn",
  "key8": "3ByG31aKhek6BKjJKE6qKkhC7yJWdKvcPfsQNp9pqDatAhsxwHNeYVJPrypADwh4Hip391zjp7o6z8kC2ydTfjTQ",
  "key9": "HbEddemzos5MfB7aYNZcHfxn14Bt1nd9nmEwYmazU97EfbJVuJ7zkuDaYabLYbj12jcevDQeVbvuzdKPELymgQ2",
  "key10": "VVir5APAyaNABDvpRNgfMETBESK6szKLGkNnj1YY7K9PuHNf6SDEAhLnE1mrzsivaAz3U2nrezCY2PPgdiRFzun",
  "key11": "3ZS1FUnKEwaLpPigNVKoCr8VLQhkjL7oVw3LHjvkwGVtiKTgzBRfXAZGV61tGUDtivGDgHg76uGH9pETDpV9f1iJ",
  "key12": "3p59AupsDa8Z3pEWz7kNbwXATQhj5YFNNTLuWnkexH7owaFYrbk4n9aTzok5knruhMsHqpGvPECa6DCJNJQMG1ND",
  "key13": "3hxKjVAomgRxrcyAbEjRoEeiyRu1bebdGNaaEDmpGo1ctovoSQoy3BxL7dadfm5pQcs3HpD3rSQUNQFQ89snNKU",
  "key14": "45S95HckF1SvtmgJ18gPbP4AGiwr3HrHgxAGKFxKs2LdpcGVtpgwgLbCzhfaARbKWT9UdPb7dfVN4y4pVDv7Kt9g",
  "key15": "5tLidXBQLeQExaCY4gedVkRWtUAoCL8ce7YpuKcR6UM5mipNeZ8mwRQXRYJJdXbwzch4UYdQCifqhrrpunWn4ZQn",
  "key16": "65YnvXtKboeLXcrHeXAtc8kas2xjfkNgXLEDdEA6GaivgRztJegbsEv7N4JcST3mTDqC8q9bNuwLL4u1N5ERvzbK",
  "key17": "2DVP57UQGwgdidav8wK5VUiUVrVeuY6odhX7h6CVxQXZPF5HPaZvEcpSB7jqTNYPWa3tNgdK6i7nuXLoELbu2SUf",
  "key18": "MBZkEv8MucNn8gEHZiaT5XKhRQEZ2SQBgJfmboGpjc4eUU37nYLgmjqYawu9dz1aUBvFFwg2Ter4PkPL3iPArjy",
  "key19": "3yUQHkKBau2TfCb85Pa1UydJgbwM7fpso6QwaSHUXZSDMuCRNuoDVF3CsRZih7xh8rFYCmqVutrp4fYfV7ZKb7hn",
  "key20": "5uqT2NSt3hPjh9EVAhCTQe6ZhJmvYCDnHYC5aamSan1RvENeR5VXUbBnfnrGAXBmYYvop5qV6PvznMVB8NswpEEN",
  "key21": "2fDn3cBex6iMLeix8fxQ9vnunW7GTPWtJGSTGVWKMauYbEXdszFvsi6vhHi6c4fi4cv5Jvqpfda8gfUdsReZbK4W",
  "key22": "4hprG8zhSdmchDwpbbDyZv2p7FchMkyFaXmR7oZrnuiZku1eq3zeRvVxeun57eeMukZ7cre4b9xBEHqCeDRub3eR",
  "key23": "4H3nejpHfMkEAy3N9YRs38m8E46j6yYkMEfZpeuuYacaAgcNgdxjzftmnZ9ahDJuRrK8kyvXpfN6P5DTz8NhdoMH",
  "key24": "2KuQR8wCPSPswWoUtpSQcDt1Kmn7v6Vm4b5TN8kr8FYf2wQEJkfRMTepYrCq24VUZAjtGQFyLhzfVk4FfMBPHs73",
  "key25": "5QrdGCyaNsSgC6q3TU58SnwDrxq56WjWGTvbNcXtiQtN7VuuSeAANa3esDsVvUnAmhmeQo9GH1D9fnXKzWGvAejF",
  "key26": "4pGjsDQL2ZHTTUWoNE4HbHYs4bCH2VbUyagXBTXGV3PTu9GvWQaX1Yc2NxwByV2b8sBuW1xKtW3rGeYJrqGJ5jPd",
  "key27": "Dd15uosWpM4Ps8PAWsHkd6qsy1gXMYA1o94eE6wg9BnfT1WPs37NWv2scZBqBDuubD49iSXktTSWbVRmeRRLqWP",
  "key28": "26ETna5RdCsgVUhFAuxDdNA7gdUQ1L5XxPUrDJ242Rjfoz9aXFT4B6S2g3bbPiReNuz2Lmu3MLonNPtXR8pMs7TF",
  "key29": "5Gx9PCf7J2hQN4hyRskoNZSdpBaz4oUWv67YbVanihgxtthmAxcrKxuXGeBM3RGxxCfVTYczttT4BwcRpeJ9YHx4",
  "key30": "5ne6qyDEJLQMReifNf4VPWUFKFatfeGKuF75WK3HEoLZW2BnUBzAHqmMZ4MK4Mai6uFi851815RjRAcEGmPd2ecR",
  "key31": "48sioc1RRn2LhGfoePLpfZjm2mKLPFHCS5KNCgbMsYj2XwNKyW1ZjQZ6Nt9WcNhVur4zjjZhsTDhURAuSQsrntac",
  "key32": "55tQZ6Ww1E8TwcZXTZmQbfQt1n2i9nKUttjSxxrpo5JmjnVFDijzzgwSA6GyvgRNrRepXjXp7SpXcS7bJsJFsY9r",
  "key33": "5VjcwN8718iSdoRwV8Rzchtif3i7vpBJYnQm29ratxFHUUeLempBnde2oHUd66WaEMyoEC794bYEFqzs2g3mk5cf",
  "key34": "2rUtgHE7drAxmDpBcbkyvKv3e5ys6pHHHEgWgJJy81oKP9w27epvntdFqM6bvTSTKtLomto95jAcNuDquYnZxj19"
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
