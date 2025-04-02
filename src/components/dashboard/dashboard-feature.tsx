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
    "Wk4CSCXcxs3wBhnZGLSdWXcfdXCRBDWf916pqmLWLGSm7w99e2gWHMDZ7zBgNa874ZoFTBuaGJEAGnKCKcEaYBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EcDL9nosDhknZpnEm2KYWZWWr4kkRPmKb4vohknYpaANCnqN4tT9eeiix1ZHFSfAJMeM3ch67rgoeow13f3soEo",
  "key1": "4dCrpHuJ3e8VFWP7vMM8KjKfCvEwEzPYGVjpv4HMvYoKep7C3kSxsT2dXDgqDBicJBrhdDTUZN4gJ7r4gBtznkHo",
  "key2": "2vzAzyJo3LzSnp66svwWvWshcTUSZU3tfKofFpDEeV4T6eGrnfdwJpT5Lk9qk25swA6AeiKE2uvSdw8ffuynLo5N",
  "key3": "2jV3iQDr9qAxFTUc5VaYwxEMc83UhsqB1jxDTbcApBpM4aHEAdV5DiZtAYXyta18Tb16ftDxsRxqeHGHyfAjF6bM",
  "key4": "2zXnuLLGdKoHaGLo7jSY4nFf4M1hJmapPCAdvsbLhSdXjU85p6c332u25uNPudcTwjsdxvCnJk3u6ggaYm9iXr1E",
  "key5": "27WC3i5qq6KmSBf44mjPQ59nPPcHxiT5KQDisFSbzytZA9gArTvadccp2fvCTWXtnDrzTWLbkMqGeK1o5pdCMCew",
  "key6": "5Ffy6fSxXn5HNT3K3br7Kfnkn651vfBPouknDBHUTVgf6Eu28tNuE3Biv4BcRo22dRYbDsdtmTCseEorg2JXs1Zd",
  "key7": "3hKAerTNwizSn4DpowvSJMppyWCJYLvj7rrM7cFZmr7NrgGPo3u2ET5rPGuvdxweaVQ1qdcaKkbdg9qXZdHYY93b",
  "key8": "4K1yYqg6zoAhrVYSNjSkXAJDtrQygGCB1SS97wYdUh4QZ96mCJ7z6gSJ7pzrmtmYcYmze1mCyRes86QP55sKHKLV",
  "key9": "moyguk2RCqdnAXmK52uWUPjVB2aMGxpNPquRY6wnzYDEBvXvRdQcoASJdWeqYEk97JRr57fPJQoU4sf5b675dUn",
  "key10": "3DSouGUSxmCjWh4d3bc5mhxfMJGkvevNqqc6DjudrUZhNxmmjCM9KZ2D9aAkohfh9fEhvMUzxQzxexTkSnW1rxAx",
  "key11": "4yswdWtpXdKfbiCT49zGNXvf2zA8gxYgycQcD13xWU6fjBZSy2yDbwQzNm13M68qR4f3Q2Q9QRMtgd5yLCn5pr75",
  "key12": "ge4aR4DgTZe8usWoKBamQzPzJuiVJwdGs18ZmtcsqTNrVVSaZVkdRkDLsnHAgWZWRWTW6azNDMaVdftBeQTjQ3j",
  "key13": "5ogGNbhWMmD918L7jrHDiw3AzFXNsKaQcEyp3uww8vfZqaFJGT9BGjqZUwADmH2PGZiCk851XrUV7jHYMrQ9Y54v",
  "key14": "4CjFYi9M4bPUnDcYtFPzyokpzof8mSAdP1iYyeBvCAhKcUoTBVbd6y9ytXEFyXsfqoNykUQ6f1umaCstca3kNoes",
  "key15": "d1FwMRzK9bB1mg1NCnWqhWp1Q6iKrLgYiHCuHkhNwBtdp7WJ6CxKdkgKDd272CcPZj5eKatPVWecG86PHAGWoz2",
  "key16": "37Q5afbb6EG2tztyR35BwhumG15WsmUVq3M59zwzmEHwk9DhHuorYQxuQyabVHWtPfDjT61pzANtwhJykNZar4tn",
  "key17": "3gdzS7TbzvffRrxndsxCDjXxhmWnCutunHfzqRdBApgkPQ1hgauZToniCsKPujfSD86xo5nUFX3hivFQ5bKgEMC1",
  "key18": "3fRa6rjNVie5hqaBkr1WuBwRb6yfsScEZ1TfAcvTz7HghP2WroHbLu4qG2MZ5FyWFgCoYqnsajqruSAJ9RHBDMhJ",
  "key19": "2mTqmwyYxjhZuaiwavWqguKKEeqxWPAT7K9EyRHYnQ4tokjdVuSwXqAtBEyvAjKhnmubFUmWidQFak4oyaE3weGb",
  "key20": "26Fkoujv1JpfD3KPyighc1g2ZdtF1iTmYSVtoZsd8WDjNSDLNKxNYWfBYcBC5NaYmjNs4BVE6apKwyeDRQicL5TC",
  "key21": "6v8YmoH51GreG8KDK3hboa6XsK4bLSULmoqCwxeZ2UyCNTcak1x37tqixXs6Jq6WxAqqat8HBNvyg4dnq79jBr7",
  "key22": "3iY2AJBq6cdJWovhGHeKgGRsZxiDCwPervmeNQZa56vCWf4zYBSztopgBP2oAPpEvEinGGvtqTsksnd5cYSP7hWH",
  "key23": "5bysC436K5XFjHhFqwZZqjdS6jVrKySSHrPrWcvw1C5ZPBxqe5hzfPuJQPQhbP25ihmgJDNTqCyQbKy4ccQ7YgMU",
  "key24": "2wyTguBv2FbYt2xp8yybMyHwoiqGqNkSEKDmS7UQriNGxbscRJvQPXyBdC1ksDvLtvGcktEsNU9kKWfyY5iz9AJB",
  "key25": "2n2e4EHdJXxxHfgMfhJBY4PpZdEUTmjjeP6iRKPpfAqT2BWLEpSZ9GeSCYavpYzhPbw688Kp2NYTfDkh9BD3Lrjq",
  "key26": "5M1y5YCEzC7tPA79MswuhFYHn2qr4qjfiMhZWne4PWwTt5RJCUmq7hgm7qXefy8q1xDnzKUwkptSsTsXyV7hmxjx"
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
