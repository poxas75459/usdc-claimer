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
    "5SVPcNtZ5ZTpN2mDzhUfFFd4GimhgE93HC61g76hDiTjy5mGcJpchphv3kZKNHbopoSCMCbSN2Uu9FHMAACChyQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzypShhtLUc6TyYXn81osBDm7txj2FdPf3zETxphyhQ8TcWVLJtDhyDjpkAZXapBaJGS2i1vzQz6n5BdrnEvECo",
  "key1": "2Yw7B5bgYkRvqZ5Qv8b7TrMcRmzjv88knFyLeekrB7Qf2dMYrL3a363crGc6gr1oRA7mktf6kzUUsd7GHk6WAj9U",
  "key2": "2jCkjjrWbPt6DPu9whB1kyKLXMkReyVKd24yJJ9R4gp9QnYX3CkuMsYRRC1PC3f2vKK6XwT1FDNZ6VJycmY2CxjU",
  "key3": "537q3f3BQqbLRUm3TNFvP1TTeTDkb2ekzT7pUg7v8ouppVhxaKgi5SpNUHC2hGP1rcW3r3H3r6RjqfrAgg1oCHUF",
  "key4": "3xZwC71QC5vwqi6UBBwe56AtnvjwqxHWnuhbAVytdgmbASXnJ16ZkwV5UUftAUq6GeN8hviuBmohNNzYknKRR4hY",
  "key5": "2axxkQi4fzytFRei4N8D6R2GrKnYc7qaHHJ96KBJbJrkjRfEksxsKv3YEMApjvLeTqaz9ziVXd6NwGS1G9eXHjNa",
  "key6": "5FoD2beeW2QXc6otuYE8UgTy4c6YqjEJbrojAoedeq83gaGVosHWDKidTagWf6UB5CDXmhwG7E8MmoqUs9qdqAg9",
  "key7": "HxyUaK6x1z7hc3UHZW8quQqTXCP1QR2z1nEVRzZr2bsY18SRwc4kmT3JaLHxRQmC9vZHLHEbGZQJx6wUaVVwZeL",
  "key8": "5mCRPpnnvZto2ytaMQQ9BNeZARjddGUWtj6FPZ83QpdFcMbiErocYKZ1v14DupJ2z31bpfJFRs9iQaHoz5ALnKqq",
  "key9": "xahZF1R9ZnnreiJxtsYCBi1Ek2ZdZuC2cw4bK3p88NoUSaPXktDaUpsMfmXxptzm1SbeKociNp1a895tk1mddNd",
  "key10": "26wU3DMBYo8XUFZvdh7epJPUAiLS1v2tBqBHQ59Caqtabi3awWBCNpdFDDfrzB1BwY2nwe2vYRdvnk6fJXhAAWPj",
  "key11": "3BS2ahUFsc6TiKaWHpoumKdrHyp17K59XdDQDbuAHP6jFAPifeQsXNKPwtneLX2jn225V8DZ3uXMZzKHcbTPgG7k",
  "key12": "2LrUBkHqhkYX76tnpJeh8W2f8thJyYXjxTPphoSkKQoaExcFHAdzFUQff3DEBmxqYtmCNj9v5JQvS31Ac7EBRYAY",
  "key13": "2jv8QF6BZFALzhAuJwzr3VXjcfN4ZkaVvzhDpR6hgFfhZWFZw64C5ZB59XdRHZ2Af6xepUJs4xUYi8QfEJhUbyZy",
  "key14": "XNdN7Zt9CwLA3Q66g1yoaK3ShgkYodU2fEEPy11kt8UNcmuHkwmh9sVciyPnVjGWUtTLC8dAW2SM1XquEz6QcwU",
  "key15": "3UzLzBoRJvkGAbzB2eiwrCAg6CKu6wdquSvbEDfAZxeSnRpGNBtKuDr7qLHpojkneWgbGFkjSKDhbum3VyDQWybQ",
  "key16": "5Y5mLpLymP1srcLDFWjkbLnVd8wfShzo6UAkX8oYvyzimwVD9ZcuGw7ErgnppWjVUrDG5ygTAyhFiHxkHXg4s7Hu",
  "key17": "5fXbyyghP25uN9quC8hraqoLAUEdr1duCex2AjSnUtyEKvnDStdytZ1TgkcK44EDQ4USJmyEoQX4SEzDS69FbpkK",
  "key18": "43kWGqTLEL14BAqLT8fqtAJ5WbrHhafw3VvexP8NsRcnprZTAf98eKctvQXWNMJArhP51eey4qoL75oB3MsuxHjD",
  "key19": "5CymwLAAYTZFv3YeMfYX9rCmGjkvwB1msXXjmZHpF8wrbAcePQvnPrp2YeYLHvrQ7PirFyJo1ZZNM99W7WZh9uXV",
  "key20": "5RDrwNWntDypsfVh7gsR8ENrxJ8b9kv4VhrY3hzQYwoPTjxvnmPjWig6AcjCBWrUgKdvnq93cHrjzhkv5KxiytKJ",
  "key21": "fJ61Xzg5TRUxqH2qJrBswznwe28vFkZa9CUK2fD8mjhih1xcQL3i6UKp47HNa37K2RjgZtP31AKLCo42XXHQ7CY",
  "key22": "2Cco9BKmomZajwBno4cokbd2nJAdXoi5wBZLpZFEFwVJ15CExT1HBYAf4bSyRU4wESPsxkYxxV81auY3F4Fk1Cnc",
  "key23": "3AgPFBg89FsRX4osCSR34ZHj8uUsJxFbQFzYhBVVZt6KQ1Ej35WQ9qGfMnkyqqaJqWwrx55BnPPWf5v6oD7pvBWJ",
  "key24": "5FRCTixFeY4SiGfic7uATaNXNadQpRYY78fagCDhudyeiXZU8JBCtH97ntyub1rk2T5VPemzdPf2UqC5ioL6nn6d",
  "key25": "4us9Puw7cGyxkYyw1vUP7CA6WoNhM7dGaGWLmyGr1mk1n7zM5fkJwNk8A1AByRCJF8DRaQA3UDudw8VNqWCh6wgN",
  "key26": "4YHmJSMwzP7dfz63bR6Fe12jvd5fZRiASXy1rkfJ8Mwju2gdaRWUN7YvhoM7b9safDtwWpRTm3dspHoaA3RV7mKK",
  "key27": "5N9FCgNjEUsLu21HTcC5nGoaRzQXWsNHGVyNMoNdmEJ13rKwCR7Ytjx5LnAhukBneirjqkd2wFpcTuCmdgC1ympN"
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
