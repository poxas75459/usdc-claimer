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
    "5Jh4anQKbPqvVJLpBoFMSB3tCZbKPezuBhjo2uEKXbc8f3Wku38sEjJU2fSCGAKB3E5PvmRJC3cWVFKdptReQake"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNa2Yg5nLxagxfiisE7Jvnd9ng3d9JiaQTvzy2BZupCp5uMKX9twSuNo6xyHbVCkoZpuhWEM4pat1Srzmy8ypJu",
  "key1": "BW3yXkMeLXyjVp1xH8LSK9Z1wBZFEcuo9uJPWgwbdH4wuF42JHhnWaHKiDVSFP4zP6nHsEKaTVNanBqSRLkwPYW",
  "key2": "2XT3YpAQjzuyAkKY7vp2s1koFWmo9bZSfzN4rcAY9rhNueaHPREriLXx3DB3ygSDb5WxjgJdepfzZH5ecSZdS5sJ",
  "key3": "5dh8mHUv35KvETUztfnAqsx9Fk2PAssXUPnB2svzBzsvpdjdZEj37ySL26vXH5hzuS5y7Myssm12RoE1gwzMJi3j",
  "key4": "4uTStdqZvqE82BAcffQ4eJtiRGVXWcD6yumsp9En6yEyBQSEByR24idiKwcDtrq3X8BJw4KEZxPeRUbrQcg5gUpS",
  "key5": "6XkSWsCu7HmxvqFFJypk8e2bU9DCRiPLmXbJQiy16j26YrmzQwyLUZg743FgFahqxkY2mahk8gfLB269cLmQM38",
  "key6": "4QFEmK9wxkfnXCgrBGX5omwACmRPNBrGY8BSGv34iAbYLNvNtkRzvxz4frWUge3cJhgtsjyzWF2W2py37nxbGmPx",
  "key7": "61WERxzz7Q1K6Q1Z8VYDbeVoeQYEdfEByZrREFti2ZELvovVHskkNRy4gtyhH6MTQ6bPj3pB33L3QDjHtfuop7Gz",
  "key8": "5zQw8kRL9mJmpJgCVp643Lwy8zdmFkidisiDr8tMPad5hFJcQZ5ChQhVuTH4ArqZX6SCh6jiJyweJtpWXLRHaNZ6",
  "key9": "3xZoJgrtAKKFoQpGMwRZ7zSigcBVeYpnUbwmmPDHE871QFDp662NFtJSWqC4snLPxYqyo3TTTLLdUdLq1T8n5zvv",
  "key10": "4jk46wHebrnuKuFn7hqpoTfdGCLDyZhVSrfrnt7gXk6qDW5XXjLVtuXNMFRThEKvEYTXGGmcL8beie6UAEhiz6oL",
  "key11": "315TUQxPedXesQsMeJFrRX8yhsbrmhnZoGV9Z753XZWrvcYQ4QhHpYfEectgZ3qEbQJG4KCpVJUmS9Jsj9gas3A",
  "key12": "1p9AJqf8pnQkJ9r8i3rQfqNvKbet2aMeW6eQGg8EGQgcdqZWFYBRGEpvbSWPwMTHEmA8yFy4AsvzJvUhDTgm8hE",
  "key13": "63jXzmLpQLv8vAP7TqTeVcPJHA6TFXczZ6PUEyxSHKRQDtHCPH1fKpMsSZz3qC2mRF3refYdbfMqvApWyFjxPKUJ",
  "key14": "36jHJk9Rihu1PTPKnKyQy69nPcUnjZiQ7R85ydRscGWvNZ66gHn4v8A3eiuLyAF6U8KSDb15JZLJyT9BUr6ErHSQ",
  "key15": "43qA9NPdAT2xB4KunBJXAvsodqYA9jPpfJhEUjrQ4DosuJ2kWBttxgVtBTKzRdHeFZ6eEbgywtQn879mHNJH2fjZ",
  "key16": "6M9YgQkdtj6bwFrKwzMRy9c6V6P1d1rByqqoDvBSi3faHPQtphTYQdSd7nB4dPiAXtVcQjxcSyUeySL94gWGGsh",
  "key17": "2ZJb9nXo1XeRR8qtRUXwd4jmgibEmggoyhDc3PTWCTR5YXvCVUkLWoJDv8ZZ5Zvbv598hhfCp28DLhuJ5VBxVqwN",
  "key18": "4JiTXivS2XakLDAbZvSoaf87EnP1CpBnEdCocCi9U5JkMhtcA4qH4VqQzwRivpbfTkQKCobwCkpDg667ya2CL9JD",
  "key19": "4LomYw6vRAWnuCTubYo9oijQpo4qWEA92Lm8GsCYpijdD6TXZqytCRmuLiYs74MKsDMjPWifuh35wUqFLFHNNd7D",
  "key20": "3S687QZGXzgFXMSTa3e3FYFwV3RMdkdYqtLzb7qcH16J2g8bnu5dRiLeXKw2dJMzb8koeNTHtE9E6mhSmzhMzEK7",
  "key21": "iSFsPEZMbAyYseJUbcMmmgUud3EhzqJQFWJFej988LvZ5gZqRmRxXaYiGJpX4mdsgU1bok8fGAYMzCTSDesXxCd",
  "key22": "4WBAaedzDgajrguS42ht92D1u6iBwiYUdaYEcFqedDhRPmCuYWSndak5GeC5MwfrzAieussczDDyqGSxw9z6dVVC",
  "key23": "Zaabarkm4mB2xGN2P2tjAfSymCzd61FzLVLxYySAagxGT6qQvFME8ytw8WZAiJENx5fr5ZBKWzjxAc9QJcTcES2",
  "key24": "rEm3rZG9AP2d4YRcDNkRKdcEb9VN3ouxhLagWHtDj9yRXu9PvDEAhN97uQXESoW8EDaosZWBXjjaHWrdBxDRAUe",
  "key25": "4EbdJhoRExsmHUB8hLUkMaX8kMZLP2V5GyJd1B2qesWCttJo1r28b6d7fgcpg9NTLV6cPg2EjKML6dcXaV7hP6c2",
  "key26": "gh7c1g8gfhgwcnDaEtvhHnLYqqAqUsRjHzhSqLu4qJLwLzeaPmNTLCKZVmmK5hppw6AMqfoMWRv6X6syZ6oDTSU"
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
