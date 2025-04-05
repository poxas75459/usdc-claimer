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
    "21PQPJJ5eXVjnXhFqu3GRSuc2eK5WExTZBFacJ2MdXjyRhuwyQ8VzCHc3b8Z3VW7aSp8T91ePdcGiZ1LkodKfyQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A88tw2HRxhho7ZcCT6NmjocsK9HEgDxnrPfD1wrmCUhULH9Jj4GkSqp8s7jbMRNB4qLaDDZtwYpkA4esXPmWZGQ",
  "key1": "3mjZEpyaG9DVuWYnu8Tg8dhK4xwVnWHKHwZveVXNJfBnoR8Av1ckjbZN7msGX2bWwzKXA8tGBuzRwoJeojJbsoKR",
  "key2": "4NVdXuWbxyAtBB9W6reiRX4Wst2S3KLQ67AcvKiV81ReVyVzEvCakEihiD4QTc2bJreUpUHRNY6tdU12GtcW3cPj",
  "key3": "5fULyYNhAbuwqhCVpEQRUtBGbPKVqzJaemLtfo74MEkFDkwkxq83BSHs1hiGpfvFxXpdAgdddLBEHnQD4kGhEbNS",
  "key4": "9SMQAJGJrFh1mSLDpvAW4Nv8ccyGQ5f2b5mKUVAnL3sYoTYkuymxYRd2MTmmh5yob9vqEfZXWR7FvMCXyrz4DhP",
  "key5": "41oFdR9yTt4HG3w5D3Ha5q5qDGNTHBvcos12cDBBuwVNoRq8Leu68ELYgMARADnVVD3LEokYCWfcxmd2muaodajE",
  "key6": "4uMV7DqeEm5dsbqmfUTpM6P5j9fuL1weDUfNyCfp2JJpCt6phv5u8zQAbRDAJDzjceL2UrAi3qSi1hvDZG6i98DC",
  "key7": "4XWmXH6ZANuapo6nJ3P66yq2SYrNgqeTBrJ68cPGzUTqv4HaVHbGxpymdQ9RptSshxUP3gh5WagScw7wH4hmt5XZ",
  "key8": "3ftSeesq2zL7m9vJn8wSCcNbzUfeAVtrFMYEYk74z9kHb94brtyw8VFAsptXSHV3T5HTpUh3XD4hrjneXHTXFmBv",
  "key9": "5My2SzpFePqhDykjc2dMy8hbdYVfHFADpmznmfETRKpQUAixxUUv1n3pNfporLq5VG4XMPMH4meg3oN7Wz8kdPm7",
  "key10": "2sgogTfMGktKbjewnUsRaksj4hZXhsKSa1jtms2tz3FKKiiCWxKTSCVSz27UWsw1aYfXHrDhG2TpozU2tNoNvVAd",
  "key11": "3wSiGv2kCix1tYb6BB5WtiWXLFqvfFCzXoVH6TQaHCedMrQCsP76JiXJcKrKauS5inbhzXf4gmwU7o8xS6nnmCKJ",
  "key12": "3zxPXZqwTiTZipYx6hS1PXSCQ5GcqJDmMcbE4KfJFACW8BHswuAFnRuwEWdFgDD1N2ec5Rh7qystrfT8Hhk9Vse4",
  "key13": "3r9jMLK2rZuydRfY1Qmd9DTHgKokskpQ2utR9vcdypqr58xRqpjLx7Q9m6sVbiLP6S6CkEApvgUkh1a2fUKwhPxj",
  "key14": "5DeNCChv4i8teJSppCz9k9UDonr98Vbwsk32wnb3S91K51jB9rxtRdwhyxKL9Mtyhudre7Tji9KzQvfnbehELkUT",
  "key15": "5sf9rV6hhhPFezRxUmDTJh72trNwjvnV8oo5Jdwg1jNdrJRBHjS5gv5W1exfiu21zQxafT6eSAEpaSVPaTLk5aZj",
  "key16": "hUPN9JDqaP3z3AEmqR7Hf5geDb92gZZFkTvwdzAQKhnaHqBFMwPQdbNNga9NC1b4NagzsQ6tr8beU1VAnh476XJ",
  "key17": "fmMcDAGANUcZkVvvHAKkKn5aMjvLj4uRnedt2Ta2xTy8hSKXuu4ZeG8JUY5T2gFPq8wxpTMV6TFe8exBN7zpHGW",
  "key18": "3nQgaqgsZXqqLgAcceoy9hfTQu1Z8WLmhjPufSyzasgU24QJMKbayLrRmxe6amQuf9EUq6RTzxzNt5etFJckKdm2",
  "key19": "2U49CQxJf9eNcZMvLpixDTGzjfPcvTGc29UdphrYyyVFZUeL6CeKCi6g88APYpyh4xpb54xUa6jSDuX2fWZpWt7G",
  "key20": "3wRxUthphEe2jr95jcdfudkke4Susi1YyeNw7NYnp8jWvASsN552HvbmTZUkmHLgoLkq3tfe5WZur2k2i6MjCfyc",
  "key21": "3L68jznQgWNZWiqb653nBJXZsynYGrij8fLUFGP64borDDkwT7H7YPF4RMRDhX155ku7fEeQfzeJCkA6jMcYTwMS",
  "key22": "2pZjpG9g6XNB2CXjNAriSVQNBcbXcMk6zyzh85RCfxRbhC7ePzhEjdSaTFX9bRcqCYNct4YNwR717uawPfakWzXK",
  "key23": "3ePV3YDCqGr7h8qhiVAHH6uw6R4SvqNjD6i4c3ZFndR66gYZ28wnprUELDjk4PYfYVZCvbZ9R8WR7fHmgBNggnwN",
  "key24": "5AL7jzwvmngcvTRmTaJRTckY7xEapAa1i5HspeGobFudSbfBER6ChvEtnkkQxwA3LBUBdvNyH5dUiEHFSqyxhcvQ",
  "key25": "216BBnPn3tekv2bWTSQEMdFFUtGTqpfMGiBa2VkK49tYkqukvv1ashTPet6NqBXF8Kt58YWN8XUAVWFvKHBP1kig",
  "key26": "3AVCJUtPQuaA4tGnKg3ACrDmDwo37CRwNQWnNRjUyZsUiM9NbKLE878G22AQwoAFMnkFWdwgPfQ5oR4FCAB6FdXj",
  "key27": "nkyGB7xg3nYmGRq84qnFiFvW9A5NBMS2yRfukqJ9BLpT2gNPmr8nrGGJgP5UxaBgBYyh63QC2mu269AzMyAAZvG",
  "key28": "3o41saAPCJS6fFvvar7G3CEdRzFgEwGeKYNsLoCzouz1TNzmjzu4hwZR7fFf7DmDaTnGJSf4FGQ6erw8GyyV3Nmi"
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
