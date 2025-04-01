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
    "jNPPuMU9eT8ybKff2hiYTrB6vTd7DZsW3XBQs9nbd1vwmTRJsvszz4ihKVNqqrQbtKr39hz4x9roedRwSs8aBvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjD2REgBn56T2fGmNzmBKMEe4WUJbwCrFHCmqPH1uyHLV8KhAoTq8Dq8de26o2SBEde5K6baVTFSAo44jVpcJvH",
  "key1": "56BLB9gfRmMUr7o7DuPFbHGn2G3n6ai8biCT8BEhyBqN9ueoGeaM6QdJ7tVeZSbteiDhirnb9zJGAZf6DxLEzU67",
  "key2": "83Vrnv5Xxp8MJRBmMBPpe2KGDnsPRQ69aii22qSy62eiRG5mjSscaYGRhNvPHqTvJDDGLbMDNN6wn8kWbaAuNSc",
  "key3": "46zgvjDug5jWuNGxCXXeUFeUMsggw3m6vafWcKzC8ehmFrp2X7Xro7d89fwYAA9Sb1pGdehoyGpWPwUPUNneUvbF",
  "key4": "3zXuCLFMxsEVXgJEQJWmY3vGrKsCMeVkHcS79nmcGji8mW57V6TVhY3gtv9sZy3dtrtXUPRkwhPkcXRkfPBRafT7",
  "key5": "2YXhsjQVnVVPayQsPZdRrivgmN47BvMv5bXvHQoGv9oRpdaU8gH9qNP7UsuzcXx366LMLFt5XxHhK623133wZ6BC",
  "key6": "64YCPjGzqKi2sANMTrFu2cpqStzrGmFERYUXNiZpXuPgCw1yFDa8Ghi7NV7ySrsxj1jikDYHnUf4C1EsvQFSe92k",
  "key7": "ExGsrn72pRM7LdN81iWhVEVghsUp4wqnoDv6kF8TBW5HN7goBzAdNd7gEJYeu6SoMRbRAnZj2rHiGcChdNCNkHU",
  "key8": "4cxqT2trDibTXEtVSkwnxQ6FTdhvFoGZGCUhxmHodTmGjRmdwdXKLWQAXhkJBmwB3MExmZxjc6ACNuRcayhu5Ga",
  "key9": "xJyWWadzdwrepGEAKMDrdLX2AXBDiDJfjucrLp17sfGVXovEmQxJzKZA5YKRJ1rVeNP6GQqX7w4PFtpLSt1yLVR",
  "key10": "5HqPzBd99PFFJa4BTjTE1x2hNKh1uNfByLrT1qYqWDTCbL6CB8AdrMo7mC4jnGG9Xkjk1segeTgtwnvUXVnrcCiZ",
  "key11": "mKjGNvyWzzuQ1SK589dd2TiM81KDgkegV1oLBRSmnAur9i2W3xumy3WRNWgBBKKyRUoumesBt6BNSvgJSMfJTvu",
  "key12": "31rm1cvQwqw1u6kMKR8XKEdnzaStaW3sXGWcRHmDYjyqbfAiMXLnfJgZ2srcFs8Jdv8tSkKSZCisa2NjJmt4Jowm",
  "key13": "3kRQ1P8HhjDe7bSarH9d7bK68h8VKm3pUpBcu9YWec2v7bB6zeuXWAibUDSbVsY4bVGL7frC8qGpfXozAJfy5Ko6",
  "key14": "4Tr8XfGbtNo9uWsMDE7jraCWgZW4V1FtyZS4r2ucY6K5sA8DXMQLUiFeZyaKcQD6L52EJuMKerbmuoo61bCSA9Dd",
  "key15": "5849S1kQ4eueGdGkRDDAGNdysmaaxkXRaFZPpVoNiAwgHZm8aRGTJACVe2Q4QtfzUr5S7iCnkhHvaBKNB22N4adG",
  "key16": "2oA6biPSHLNjs7cRkNpet5eGHa4QBk4j56a7AYJ9RvSmb5JCViQVs3qriwnVynUr3WG3JGknYTNYBbF1GB99EFYL",
  "key17": "4Xs6eMSq4KHakAA38iHbqWMDHnXXvf3RpxY8CUDLJcq3i8xn6bjop8Wpuvic426qjedBNQGteB8VGshJzM4deibQ",
  "key18": "4FtD6xVcsmya4LGc6yqdrb5G4zXh517u8QY8LrzbUQ5VBTdDiB1jmgBFXHkbVysDJzcTkyiScaLh9cW5R1dRKevq",
  "key19": "3i9KWTALPjHpZE5JdCYjycyzEnUy2vQaVLDjSx2PWas6wrsECmjR548T8cjM4RJN6tuJZm87duPKp9W4KWKSQjjA",
  "key20": "2k3Ya6eca366jkKenWHjP6RdoPe9cTKrNLZRpbyX1nkaSUMKdT3HEm2bCWKraKgu4Ro7DbiLpkd4iZdP2Ev3YnXD",
  "key21": "4Z5TYEUG5w4zLVqdASAjG8VPmtZJ4cg2otfCnBJzhGsduXtTey3SU4C5KYErbdvV9Bpeicw62Ui1gua49PfKFLe6",
  "key22": "2VcYCppQVA6gHxDn9txLZtEtWX4pCDeiuFw2e5cu7qfGejpDbrm4iVqQh2YiAULQrRe48GZ2DvQwg1YA2XdBQgjb",
  "key23": "2mz1cfuZPd4PRs8KNY1T9P7Ps6qCQ444a7Vswpj1Djd84dSNsYBysWopyr52TSNDajmsEHaNxJSKqrWCo7h9oAb8",
  "key24": "58aYPDxHoR9ex1VAidh9mBrby72MhYHH8UcVJbuHMqE2reowKiGjRFtDWvAoyceDQDo18xdhzqaScHZuDu3yXfN2",
  "key25": "4bcxbD8J3ja39g9dYkSWZrY5oDp7yGRZohBa3PKXL7awYcU75oFWtzWqf83JkfKmMdZSkewgG3kGxjPzz5a1rzEo",
  "key26": "42GLppHPufSHqCgoNrWmEXHUVP3V5hUUquJUqdThexxCoAUTD6PfVbbDavSQikVrHvaXgXE9rJJzGQXFZoicRYAw",
  "key27": "2vqF12kTGx1ZuefQoAqbgu4eqmhNbg7N7P9gqtd4V3Crpp59vU55xnA4CTmizmcrrdkeXFqHAiCTxtZtCuCggSgs",
  "key28": "4W2Eket63MEpnzRSqNQt5hdyov18tnToLHK8UyQqSdfF7XkziJFdCP5M23Z9BiYPjZWM5g4aMbzYuSwtYkYMt2NK",
  "key29": "2SQ2U8Tptiwo9iyT4WNFic67qDZktxux6YmxGRFrRe7w5VqbQWC1fh2L2eVrxi8Q3r3AG2oyoLyaWfYxM27LL82F"
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
