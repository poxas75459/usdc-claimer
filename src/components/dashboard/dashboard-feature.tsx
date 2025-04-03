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
    "61Yi2c3U2G9cKxL2JKumQ5FjwKZUUcb8td1X2QkqDJTHW4n3N1AUjTTL2CkL2z4b7GbDz7XoH6Y4ks33LcToiXAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pcJ136vbaK7khZFDePBnqrSSD4H61oe32p2kG5zb1k8g3vmRGKK5HMoixC1xvRi1jpaUxZ3UYREy9b8XAa7z1kF",
  "key1": "2tHgPiLNgZKAewY7vnjmcgJDaVrJU2Vbf1PYdeLw3CihhCGiCWYdSJDudR1Q1JZNUZavbL2gXHfYmN8CGPaA5qzT",
  "key2": "42ifimXnExRRoaGForR98mUxD77eK95JFcHTkBkfEADNnzZCN1VVLhHZjqiWDTGWNjHD6o61pQpxikeWvDhzDYRi",
  "key3": "4ttUWLbM7Q9XtPNMVMJyahwWCduqjbvXrzfSscfBErPeRoX9FvJ5tT3Gp8tWnWtexoW4Pd52ue6nDpoMpKJ5RX42",
  "key4": "5XgzhBfgULjsQj1SfkstEcvX6DJ65ApmgYZAQzfM6pKApMgVpHaP5jnWgjx3f3GGhGDzSyy2h8MpMVfjumfK6ivh",
  "key5": "5nLYx8ut8kf2xfYTiQxMYJ9VHA4TAndRnTBYpdibWPPdKgDDe9PXvsWqCrNQ8PxJt8xrA76Bz2XLs1GUtBwHpUcR",
  "key6": "4zJKnELY7nFQimomzGhY4tzNTBqshgEwGWgnubFFH8b8vqKTBm61ZUbYSkhTdYSiaUKBcaH5sZCyPgJV8qb9U2tB",
  "key7": "2bFvPf8wFaqZo2fRBL1Drzb71qmCxAUD6zgfP5zezzCEyRynvjrvrdJQt9oFe47mPXaq11CwJ7zPkHRcETchMeZy",
  "key8": "2CLnJqyoXjZMCzSPJaDVxDd7ihKYhUoKb4jMMTce3X1wQhR9L5XXyb9KGRdXRrnskH1pHWQVhhyPSuGXDZFVBrcz",
  "key9": "4tXY3q8HQJHfGuE2mav7bnypGiryfT8yXqAreuG1dtDEMqsSL2vgvC1CyHKLc6sS17MNgzDv4TCEfYRpGanrC6HE",
  "key10": "4tbnJijDpaWxoueGEGzd5R85RLr35vkguQGA9cL8ehjEgRcVJ8N6F4vnnArKN1N8fC49zo5P9vyTek1mmaXTxiBD",
  "key11": "5MfD2pTrb2JMFQHxyorSpWN8vaw1WGayRy6XiYZqbX3QofHYFrDkSxgKd1bPVJrn4JRzgLfmFVXLVkXrxEVgoB1F",
  "key12": "4eALDodu5QcVsGXYW6h5e3jzh2wDWCWWd9sqE91GqzbRbpuBa81V2ZMcF6WV5bWYh9kFsp7kCQqS4dx7EedhXJG5",
  "key13": "3fUfgnQNttkW3pjs6UkSLkcNJnGHs16p3a1rt45n6gfGE6cweZNgtLsdMF3zZZpf3pKtrrF3moTnsLtP16GnMBcj",
  "key14": "2FeArAdWi24QYxg5Ur3PFvPmjrV4KqnwR1bAdjHvy6VSwfpm1nFsPbgtbhYaqiZcaMra4RjE48gtGU5b9Mi8jisE",
  "key15": "31iymheFHMtUUds8hsFeFj31EVYaKNCuX57uhLjmf6oriNdiAx3Ean7EkbxXW7o82TErVUvipH9hMy8oFvxVWa2p",
  "key16": "5meFecEMBrLDwkdGTdV2RNbXGkwJTyakw3K2SwY6yCuqY6xaufCnt3iDH4Zjf86yPMR6pGQSqUujVNbz12fCN7zR",
  "key17": "4yT2k9KUqLTK16XvwsignrLZjYW2Q6QRUkV5YxQRrGArsBJS2s868tgSvMGzfuHbok5cT3CghNWcS8TNDjVk6MYy",
  "key18": "2D9uMEVcGGmPW7cnVUa9CQMfVcnwfeSnMzpgeNiLHChymMd3gazGTCoMNC6R8Ah1YTwqJiuhNNVBZXWSr6K1kbyV",
  "key19": "2XsTF69vnHoWDk6rp1F4Ar2iHmRh6kWANfZKwEWtu1Hr1FhbAjotvKtiwZUBhDvpg3uTmCMS9C7pxXVuy2YmTdy8",
  "key20": "4epcgsKoyMEaEWXzrTC67jkh4y3Pk1Drhja1T6ZRbAB4zdyveFAkT2onB7W3hM1W4MpoCkDmLT9LJht4gTYHagqG",
  "key21": "4zytfnmCE43Jmt47AzD6w1oAmC6xTXreTQSuS624e7U3ozkymfYfEUyKSHmHeL2wUJEQqAhLnYzkYabp85xLNK2C",
  "key22": "27bwNJLV7fcWC4XRk5mr7sqn35kUSECAJFLBKq7sNRkxDQMopr5yzppTNgmm8mMx8Kag61TYPiFrak1McMCVfh1d",
  "key23": "3xc73CNspHKVBeCNZ1KAA6fSgEmRKrbn2nDG3Xu4N12mW8BXbM189gJNgkcUcxfP2f9uKHjJf12s7hWgfsnnLa8k",
  "key24": "6hCdfR2RcJFD2NhxFUFtG2DS9NXFpSmVhLfLYb95SYYuiNpnoz5Qo6SVGr5yRyL3hERf4GjCYTCihxTBGpVfnz6",
  "key25": "4WfEiBnjjFmquDZYWaC9XYr2EPjKshmQffYn9gBcR9euxh3k48WTpr8FdvcccX1Ds4higZHVLk4tLrYWwJY9kdeC",
  "key26": "pciHtHUcqhG3np1q5EeHAqppipkM81ffqxECfH1xxrhzq4K6uEJLWRfnUL83vrcNwXkp2ZqDhA7gYVyEq7zAbtC",
  "key27": "2cN5nAxpo6a5BpAtQgZ4Ud223ty99CEcpPdsZ8LzMkW1G5NFQVQnNEc3XpmGJhSvocoLLKXGA4ueeaCevK3Up2Zi",
  "key28": "4ucq9WhPzyghas3XJ9XhiFynQgF61qrCi7EYJzZCetqpq45jSrLpe6ErbbTbo4gEzPX8e4pvA31ufFKLgdktmpJH",
  "key29": "4R619eb7Urt1UQNcNWe2n8LMbuvZrnWLDvtdUpaKGHkmir6WGJBKfSkzzQSUhLBRa2oUe6i4CiaibdNzXdxK3SNU",
  "key30": "5Va2k8m4eLoKEKP726g5fyGQWyoWBnVD1ZXvxdDQ2rodx6V6Y8cWCWmgxoHrjwgG2qLQYZx3Jie21sM9w13ko756",
  "key31": "5K9tM87oik6m5bRXUe4uoFURVq4TcxRUdBFSBqC6AiFf42Nt3fPLabrW3J2EBzi7zxCr1KQE7BcmptRUdu1f4nmc",
  "key32": "4oHkY6NW5bYJESDUFR3QuHcmxWsPuVaKLrNpKmeTsjcZWF1eCnVCiwLvykEj8npwPyZCE8hYPhPwYuwoztkittfa",
  "key33": "gJDhoMLbXynYJ43awNQ1FfxNVhWMQs63cvuJEw2nRY3Q2cqZn6xpZswC6bHLFCjgMXUUQmeZuxZgKMfVYP4SoDv",
  "key34": "3QhVYNGuic5JFvUKZVBgjGjSo2ZsnBXTrsEgnLjHguaafcZAN6R8URyTzqUBKKwyJMxF9RMz1pKRK4vrywtmLH8n",
  "key35": "2sDmPEsu5DJArz19jjnPaPBRaXVrYn1cMbWVThHvaqyLjmzs1ZiPT4qRLJdKS8w3f5opm8DuYk3rT9toDmyA3gn6",
  "key36": "2boRiHHtNBbX2Pmj132LEaxkzsYWZv1mUtpRKfXEyauqgXX9B2tbP9RRv2SK493JjNPF4HQarbsC6LpiuyjrpZR7",
  "key37": "2cwZwzUCyrxMXWvywMTeEf2EzNuaeRih62DnCJt6pP568tC5ZBryBXsG57VLXeXCjqSzL2YhY5nudjGSR1e64CB4",
  "key38": "47si87qDs5YQuX6Wv33x4C8VB1UL2vtyTXxvDnYwQuN2z134hGtp82UD7L5Z3QLjjW8Qe9EQKNGEd5Gd3djMVJtP",
  "key39": "5NUdvG8BYDSKxU2RgZ2WAHAQHSEw93PZxFDRscyEPfwKnVHwdkWzYJEEzmNHdYDAR2d5HUTrRuWe9yD5EEbHf8Rz",
  "key40": "4d9v7MhxmY3hxVYXdmaDmdAcBd2WHPy5cceDkVCa7rmyVbjsatNKiPbs7VUzqnWdwrdimcpEtxXeFPtxX2Jqacz5"
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
