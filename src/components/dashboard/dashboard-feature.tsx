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
    "4jZeVDVcQ9CvvRbrWnkvGN7FLKYrbkXcQtJwzRd14pCkjYYQYmxSdXBDjdp5jh2U3fTYDsvTyinHyhgQ8ySAU9B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stKBhmWQ7z5xGrYXjHt7hPB6wUGUPXWZCqpc1aLXafSqJcNWVfEK6qbkcW7ZCUMH8os68sYg4TfxEgtg77seMUZ",
  "key1": "4jQmGqBD7nQj8mMAEiyQgwiZuwS2oAh14nQSgLcbE1tJbyk7U1crvQSsEPbASP4Nn37m6rZA6kfvCkCdJXW3f3mu",
  "key2": "u4F8xzWtEPCzSN5uARYLC4tN3RgAUg8iVJ6SDz5z9xcaa1cZzMVq9E2hiZiTjoBVXwAtx69WZd2Hn6u2omvFXbp",
  "key3": "1B91mpRd72vdWgbHg4u3LDTHY9qfssbav5BvTz7vMpjWQWPy8PwPhdAG7X2ZCqXmF2gq7KfUnuUo6G7LHUawMUZ",
  "key4": "4hHRWY95RMgNJSZ1eBhzVLdZ8mKUuStDgh8r5osd5D7mB7tXLvsEEbLxZhoqrg4kWymdXzCRwxt1wpA8EW1izdnT",
  "key5": "2mjiGrXiswbP4p4XDjP2sv23rVgYnR9Lzpxj8ACedyn2jWBjeuqfeFuBPSceJx1P5rMCKzM4Z1Az1iQjnvSoQLKH",
  "key6": "3RabeTPVzqSg7JSZ4x8rrjMo83MAMwysTYsRR9R8yp2VbkRbTCUbovdg85F8Hqv45TeF7GAGfBPdGFFKFbWSEekt",
  "key7": "KhimzgFLta4opRmfkJnAmLRG1k7SXsz6mNx4Lfz56wUBi22r2KfzbsZvJuAGBW9WW5XG1BuuPdjbRAbgn8BxwZL",
  "key8": "4TN7dEQwg4waPzK76bguigrCzm1fChCQUXukChvGCWMCRFdhXUfy2HZDaSo9WkHthNV2wTfVido36nZQAsaMQwup",
  "key9": "585apd6wpvTXgSeHiJWs5x6FBvMpFurZoVGvErfzLCurUK55X7a8YsDF3F1QdNdsNSz5De5RZFPBTmTdc2dtUtEo",
  "key10": "5bmftehTZP3WP1PqaG8yM5wJPsygAdKjuaPbyC72zYSEUCYJ8T4fvdZ816RD4WsJkW4zqHPdWJWVVY3eVU8CkekK",
  "key11": "3ec3mwu3EEWq7B5MXDjcqGg1HZDJ4u7mPN4XrnT4CiQDkYWU5XwhmXpAjGQXPLvLBoBkqC5Cq9LjFgnbuzwnhWW",
  "key12": "2BZbzTu9UEB6dvE4byhxfaTTPXASkj2FmDMe1iNCk3ycfhBMVBmJBW6waf6i3F8YCQTx3tm4v2m57jzS7nZAPKJK",
  "key13": "5Eebogod3at9Qx7HYLbb6JeUbQ2QFk5GGWhZmwsHXHNdzbL1M1V7cnDh9kvST3XPnqhaPwZRcPBhcsac6igShqoC",
  "key14": "64ZprV9pnMn6hDheuSj5JVjwbcMYDeue4VWoqW6Ezu5bFguN5QBU829MyhjczV3Sai8poagkXHkvZSwax2KDbWyQ",
  "key15": "4p6vSfqkQjZ33EW7SzoTFdzepqGK4gc6KtwwK6CeoYCoHmibBf6UYswo2ZmBgyQRtZzdZPoXZSuuTVFCeb7Y83ZS",
  "key16": "E6rJ1NM6Grf5k4EymbuKTco7NfFd6g9oYaWHxoQEZXaJsxYxRejJerKANStY1mbjwwr3XTQLdFVPB6EY4pNV3UA",
  "key17": "3YS3wFcud1U7Fq8NVThfBZZLJY8v774cQgoLQPBAHKtp6HjYEHiApraDTARuvxjbR4BbWGvwG4gSTqLrCJtt3cj1",
  "key18": "CZqfQ8o5yfT8gG177K61bgnxsF57ZfUB94fGQC2taRbjNqtwED8bnpCtF4NJwm6zfoQDMozyevWHFJigqwmyyna",
  "key19": "5wL9NXrn4eh4qZmtfavpQ4i8UZRgxgdqRgVtmf67WrUFMsR4JFeyfYtuRtfYoavj8wSGNALK65r6rtEJksp2SKdH",
  "key20": "26ho1GgDcrZHNzTCQd32KnJym2Mi1ubyAHTRnJp2dyJuV3iUz1MvTm6FjzyCustVcK4WJkmXV9vJxxmFqys5s3NP",
  "key21": "5rsy7k9Wk2XUyQ6Qm6gPnSiBvGFB49zw1K41GnGhXWkGPWe7zegquiq7dGupCoUCY6afBsK78xLBpTaq69wHevFY",
  "key22": "2yY9UL4VYgSMT2RLdvuZFJyGHzUVBT3qf5xGQdbWdDPyWKd9dGJkmhDVkQM12eNe6EEUnDVKMs7SEGup3tVCTKAo",
  "key23": "3Y3yyQwdhrJSN8H5U7S9vUZ7ZkLkZsjLwyDsPMMU8dNgkvTNkWhv4MzJHRfLc6mQWHPFWKBDpuV9YtUDBUUgCQJg",
  "key24": "2fyFuotjDbAnJQUbG196bMvo987fg62wL5XuzN4dLrKMDmwaqesbZtsts1AaDniY9jhXRAFwUy9WUFgMptqntsrf",
  "key25": "5sr9sBiMLfEaYMmDJ2g4FrfiSUVfMSDMdLDrVWeYPVjz3WwAbb9aYZtffqDRi82hxM8VMJvC9LnapjvBszn6esdJ",
  "key26": "3hdQozMYxJD8w4JkBbhwqBoyAecrvxTh1FwV4WuHierMpnYhTKef6chvasrf3ih7YY2QdWDEF94t8KEBR7fNhGhV",
  "key27": "2fQUSPXbkk9zYyatsnnfF2Ut93sHrBMUnoBXJeJ2jrvQbFrSJcLtibx8KwWtm8fyR1eTS9cNSGNMRUmZvF5RxYEb",
  "key28": "64tv2dqZXoLKvcxP95ex7C63WSsMEqVw5aLKu1chWcxVzXjXwzRq3ZBdL3umP7tSceaEw2oA4qVGv5dDaLphC9eg",
  "key29": "4xw3tnbxNtL1xEbBx3Wr7FywFCpon5yFiXYbygsHmkspJpjf3WSS8ntqMDRh5UKFiNqydFfWENLCfqLC66PNnYp7",
  "key30": "28FKN7tEK6TTMjo8VnNrARjhC2UW9UR9J2g7hnDGtDmAgPNDHKgeEGBqVk425MFGCpwfkRk7sju8LaHPC8o7pcqJ",
  "key31": "2vcNqh3tMHjQ5GSrwMYtxPXG8NSwhHaXYcpzSkgVPTXdy867CDjKxbT6sQuXvED8JuxxyLe4tTkTB5DwsBmSvcny",
  "key32": "d1dcrbrcsPfGjdZWsuyo8ZXBsnhpznCyjs6ZkAXAdD6aF9tojFCu5B4DTJp1PWSBemZy9LYBSaq2RfG4WEnqRSv",
  "key33": "2bZjkGk7keo6etsmeiU5iCp62zftwWDgqboyfB9NLybr2JjaWfvUuMtCF7kAFRY9R1g2RYDREQKXgZ9uM58jBL9u",
  "key34": "5upNq6quDeYgkYKGKgdfkbehKMrnT995nXciqeuk3ipk2n5r5P2QgMuyrzd3wFS6GoNpFcvCajyNhgfVcsLr4CaJ",
  "key35": "2co4Vzk1iSDHX9ozrmxwCfxZHJzzJKr6mmUxWrfVvhZQzRcskzfdxDTEw1BuygxLE6bNDThC4nFsvLfejcUSsoCP",
  "key36": "48YLDfYexTbokmsjsfjdKEfXpRBb3R4o6fmxN55dnkApP6Gej18dMxhnDRKYbLC7mKoEPooA7GrUcSYad2JSVCdK",
  "key37": "3EDoKF2P8znz9UKHghtRXLJHqXF11TJebm2KnptaPj1cAyqDghp8ByDLB9E5fWgj5N3REBX867QbU5vDfXf8xm33"
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
