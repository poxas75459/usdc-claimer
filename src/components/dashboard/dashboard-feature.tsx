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
    "4B5keauLrDQNrMRm6D172ESm1JkBAkqW9L7fA9LS5Q4fRWt7HdzLhMvkwePWh1hASrGyJqTAdqrqcq55WLVvvYeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YVJYKRWCFpqDA1i27WnSUFgukuTeqNYmuXmeNYaUDfP9suxc7ujSueLvjeobP7wjmYov7qGsPkCpawUdJdLmiiD",
  "key1": "3AMUMCM2b6PVsgTjJTNu47dbYFKamK4KcaFnydcd6UZqxxHoWiLuPKgwmVYG9dD2uocjat7zag6wRM5vDi2RBXKK",
  "key2": "4ZJsh8G6Y1Swz2rY9KRCoGzoD6S5vtcjDhHvynYyuWV7UQpmvJkHukYwwGZJkFUmxVUNMzQcJ82tjHni4kZ9SHmQ",
  "key3": "2zCqXqt3mRyi7QPzxTjcbatbimuQd9zEZTWvVpucnpqY7T9htfXpHu7rSdyseXhbqkHwW7Lw2Fjf1GHJGvaxgjtr",
  "key4": "5EDfG7Y3vtiEzdZhaSJ5L1GatrHjzje8F5H9KCVWZaQncNGkCctTNSY2bMF3wu3p97hNoBDmwrtsxxQbZ4tj73kp",
  "key5": "442WYLe53utX7NxB1TWiAD8AVRDozyCG46oo1dgUtSLYnLuwxCNjTpqAAeauKMeNpkpb219xa5KraphWA47vCpWr",
  "key6": "4u1qGjWZdksKMg4HMLEoByPqPea373wBUW5B2jRpJQ4GsjNbBPW5Ebe8WiasJV4REkVaZCVsQseXoPznhhuhr4ac",
  "key7": "54sWfRT4cRfBhB6zpbJhCkjn15Aumnt6XHbSeVr55j42m2UwGefftKmLwMDkr8osT8t6Be3A6EjnzN96TkvaER6h",
  "key8": "4kEjEVF6xSfJVTgRUqK7pCFaYujnTPLhkHApqbMB8o2Yq7xDYUbYE7kTyPssiU36VjEEmdLtqinjQp7hW15D3ef5",
  "key9": "4JyLv3uSrkZLMAsmpZmFCcG4x1XZ4HRTciHY3ZuV4NUDwJRcvGMob4J5pUNiwdkWufGhE5hH1i3eaTevcLeYGrxk",
  "key10": "2ssdXgejHmyjv3RXs5s9WEsKvWMtHdV9ztXFv4NNRuxSDSgjHVaN6rvsCAv5Yb8VNBqxePqcSrT4oSNkZH8WcQwZ",
  "key11": "5pEBGaddqeqRwLBzZ7qNaQg322MumojB1ThwsKmebi5VFPbTYpHy4VRYt8zL5L5q1Dt2jo5ytX4i5JRmWGKyxtRZ",
  "key12": "5kpFZzAYMzfHmHNsJtwDac9TEC3CmvEcELNJU1UM2wexVC7Ze3EXqmqpMJ3ANqRTrWbRwphC4g8eyYkRfUr6Enum",
  "key13": "3LqNgtjAPNwtb1oXa4CxLu9DFkY6wBHnboZNoHErQSQLdHLxx1E8Mm8zn6K3gd4cmrvmYf7eKJ9FoE192vZpCS78",
  "key14": "5JVPHESz69gxnSBQFKjoHUMNowk4VkwdUDYwkdyvz1o5hRzC8kVsjRCYAWdMk8rHm3hv8femQzPRApQN3Ex6oATr",
  "key15": "yKRA65nEfq2KvEjHeCyGp8okqXQARpeHwwZBNgxAVUy9NEyinLkNERcVzCqRCBYwzQgup5FWSiNYqHQEn5uRFe3",
  "key16": "5jCtySpA8NYySdPwSL3zkqMRXUHnVXUL7yGm7DBXnAazpL93fPQiXevx7rDFSw4jtFFm63941aSFcGJ8xFehYGiZ",
  "key17": "5X5w2zet9aYs1TsXFNiMgN2ak3dH6M8FjWcVZWE2EQrQcRMrT2aimzWeEhyxmYbXdRGijZyKUuLsyeX922q7KRFW",
  "key18": "5gesSYDeREpMM3jTYo82dPyTaDtcWVcmw4XpJQhxA8szuEySWep247xKp9sNuPFshWxBPFpF2swc4QMBKMrMdwLA",
  "key19": "5a415Y9fo6MGtkTRpusckPZRiTeWDek6ugPMXaR5fF9w8ZVM2nUEZ2STQJkyaA2a6zhA7bYduaPBNE5gLWmyTFrL",
  "key20": "5AgLPKFht3YJR3z8r3krCiRxsYdrXpR6RXChfydsXT7dPsLWukXhGDMMj7cxXjAsxzgSUqvFzFFjxYoeXQRAPbCy",
  "key21": "HcE6ZyqFhQVuVEBuk9gvZJ4EehE16TiCXXsmhxacbHtqmmmYJFXVveNHf5bkCtmvk82DVtN9xUZJQSQbXLnqEfA",
  "key22": "5DYb6tz3FCafNK8qht86BpEBowP5s6r2bJuVZbQZH6nGA5QwNq9ZWhXGpoopXG8WVKDGF5YnmsAQPfqeiv9tozVx",
  "key23": "4qMNyg4jKix5roVHq3BKi7wKnkDdGsqxZb2Jt9FjYb6eBnKxs9YneyNAG6Rw4XHeUtZfnDJyrvFd2xv4fwwSKYsH",
  "key24": "5prLQBkRmtygyhBvU579xBCxHRWDbxS6HPdfV7Ag345V86KLz1dCwUUwpxatok2mzEgm4czvn6j1Qo41CoUxKhwQ",
  "key25": "4cqxhb4iN8n9bG15t65XTGDwbRS7sFALmTR9oo2r9weFtAYwYVub9HroZJJq4vzYW1YgwqzWxowJXZApGppqRg4m",
  "key26": "2jA4YTjLarQcCfPPBqJLdmCcVGKBBSoSX3UF8daYvFkvps3iqXtKjMNKYpjQB8icRf6ERbZ75iaPqAHWkRLjiCqS",
  "key27": "279uMELLqEgdeNmhJmrKCPkLwkEqXLxHX1xFXUFfyAQAoLKs12aMqLoiD9JUAN8VXYhp8J8KYUCARhUEeJhWpVFq",
  "key28": "qySTSsqmkavGQ2itG64wShozXWWFDb13x7WWNC2MuUi99BqbNto39RnpSY71ruAyx1ERt5ExVbRtuUB8k7TPqTw",
  "key29": "EfnQeok4aCXGCJknsSax5AfY2jjYqzc21ZVoFf2E5axpTiTeVGZxN3z2NQUmh4RkLt89ydsBJiXFhtkjNHJ9K8e",
  "key30": "394sFAPTyn9FZ7CSUGt4ewyTiCiWDAnTVQq9f2jFen5AAphUxYTdB8uJdd9T1jX2FejYtkEpTwDdDLkdXNyYwsRj",
  "key31": "5us4HLTJbostkDYezypY18KggRFKwwfK4hC1747ZfUkF1yE8YJffi43vkmm2N85aTUigN7hrxZQvzyWGcNEfww6F",
  "key32": "46TEFxmKgeFJLpgZZsFTh9RKhnDdU3mbX9GzMi63CJGvCF1SsUZ8DKqWRZF13Qapwy8r75Ad9MeyLR7dpX1J3G8E",
  "key33": "5Phnk8h2Gbedf41PhZxkgRgPy4KSYoVUZp6eSfjA7VBXQwQYSMJRx3LiQHKiHQ7zNRVWE5CSrqhVLqJTtsNWKyaV",
  "key34": "5Av1BvFCc3N7KsPxC9PreG6pzATqy4wg5JqCA8zfYAuNJGqbNmFsQKuCANwYDzAHvrWBzabpYivWaKjLCgqHh74j",
  "key35": "4KTH7hy6nt9Kag9KCj4W6LsqGPkcKeAhVXfPEBbXNj26LNtaAJggMoF2zHEBxwxXD9tP2TTHfPdsCM1hsGhEo1iv",
  "key36": "2QahoJzMCLDmCUkFSxtBns5M8qRstydPbbW4nR3x8TkuS9KWznnGHR6Bo8sMrgNSVpXfmgGN4KpY6hLnxS5qeMXb",
  "key37": "3xMVW5mE9yULZ6JoAJNMgvEKSezk9n8tPUPmJHTzsQqw1GhvgKfRcZTj8ACy1Zhkn9ch4T495p5FszAAzPFnoMMH"
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
