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
    "4vkivznds95XTw4etmk3jTQqRsHAAZ5oWfVBaYfvYD9XTDLfYmhMz1QbPi87WhThHBpMTtrhRoSv1iydToxeNyLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sBQqd6XHgWYUBq24edR8LrqQsshee6EuKNPyeWTgA6ZPSUmTJKAstMJy3NUxTKJuEq7B641tXJufGtgh9Qq8Au",
  "key1": "48GKydm9bQZRENXRRBphAMVh6WdfYWsHh6nALW5KjSteDo63KW9v7ZYg7xWgfNbjBpyAoM3D1GQFKScYLvyAKrP4",
  "key2": "6ZC73pgr4KHUsgdtb1FJGSqveamB9tdtivA4NnYucpyLMZspbDLjMoDu4iuCMwfvxgcWrAJTM9KKtTtxfN9GKfc",
  "key3": "fhQzP6cWsr9gBEuxQE9APZSHUYTjW3ZihTTkb4x3tHjxDsr6JfH1m7PyTnBefd7BijRLa6Fc4w9oqmTUHdcrUQN",
  "key4": "4gySGa3UW79xbpm1J9mjRHQYVtZH6D8ecnDyyjeWBBEcqXvos3LpUVgSXbw7DQjSVbPSFFhNmGWQA9A3rut16xYD",
  "key5": "27tpNuV1XTr5xqhNaYrvroHRm5NzJA3Y9s4ytypQFHzKNASXDj9xhvXpMGoqGagqK3jP28FhvR1WdnX8eSHsyyV1",
  "key6": "4sVD1zzEHwQxj9bae2KRCqg1AaYbWWRvYJbAthUJb9tAYh2unComihTitbyYEkEWUoyprnJ1qFiu8UTbabvXgSeN",
  "key7": "26KQtNsiDAZQU9cgdrfrnHEJQrGeQXLhrsUvXfsskJshPUxZFbvNchKxrGzrhE2xMFYaarjAZ93d4ZFCFsU6DWNz",
  "key8": "2V7VZM9ursC1HixXs6bLrPswS2wNnnbRRYLwobSbnRuwAHhqhFp7oBVWhkNkDFaPvGzshETbUZQQhi7o3P69oXbt",
  "key9": "4amVbnkq9gmqyYa4QRoF44BhCavnyKTi4Ukw7N87AyTiFr2MxwTwRxcBcmQJgLSCoWCG31eyyydeApURwC8TTfeR",
  "key10": "2dKhZeCf3HkXQk4whP67XDZ9QnDUddzVdLPGm7ohSMkYwVohqEFNqQFjBWS7ZtZREAuv1ugdjrDqkLsmJi8Qcfph",
  "key11": "2WErqZ7YJJnRq6XqRPoLCzNXYprNEsc16pMVZsGMpnAB5XzzYzQVKB9Xhw9faErw7ZmWQHuXZKbre83duuiKcCHu",
  "key12": "4zM9bW21UNRfAykcKLVN8pWm9qXFAPYKGFt4qqAzgsX7KdAVwqMo6ETCBYPWkcv1tY7pkyuQT9HcnPgFVvotZea9",
  "key13": "aA1pFGJD7FkZuy36W5A9ufh6pJhUYuNddQtJcyNWc6LhyUAxVQMTAAUiRW7fYecyVyBThDcsvx1Ep9hXBH2r5u6",
  "key14": "3A8sUoqePVjJaMbcoCj3dQMbwjPHh6wG9e9j7eMoVPDm4e9SsLDcRsz9M9ECbXXK8zavpF35qybtfwsqw5ERmSLY",
  "key15": "3JJq3HqCJnifg2HmWoSeLpnYoUf3qStDbza3q5VFE4t56t6zy8nMZ8WwCF2b9kdxBzoLGqyvghiWWuygW3jjbXug",
  "key16": "5CgrkutAdwdfURzE4aAnbi9ACk4VZ4kkEhKzH1fuijVvbf3KrwHmqKU9pcpnAySMspnJXg9pceavyfsGHB1gZZ9J",
  "key17": "61a6N8xPBzzffGoem2fmAeJkGQfW7yLSB4thC8xqRoN5SJpdt1zSWT5SLRr2a3SW9H4sWx4SCdDGQRKUgVDxDpxy",
  "key18": "4XKrJmvcH9wmEzte7WBwAVMHJTbkENTu9HpZeBxEPeKK23UWC1mcSvX6q3LdfrNssh6V1N4tTp4urETADKu7cjmu",
  "key19": "4mD9kZYpcc7pcRWzpvNLCBrautJtAJrgdAbxxEoL93QKor1LiEZpGX446pNdg8onwfU7f7V8DCWV8gcb8CAcfXVq",
  "key20": "2Wf9q27A9QDhsMWqD83mUvQhypv1UHeRLR9n67yiNBqptkrfW2ZRFxcugLGfQJUNog67erhcS25B9hnXoQJQ86dV",
  "key21": "5Pf8yrQ4YA6wtvJFGZGo8nvcMgKLw1u98oTk335JxZkXqRCjWyMRVuTYrxXg9sMXwCcMLxiszoSuSijdxTytzGr9",
  "key22": "3cYd4TjH1TKnR9BmSyB6eEGJm64yfoBdiY2KxfN5nia1W7AqvBrHjvDQpSNJBKFppHJLSEg36hF2rVB4VNVs4FCy",
  "key23": "nDN3dXUdjTrcLzrFs6it85fHyXwyqv4dU8JGSM32FqXjQNFiCfm5PwGF4QP9qgwFByi4EFLdYKaFxKm1wpuHCff",
  "key24": "5o7Re2UrkMbjXGXW5TEx7z9BKTP3P8v4fCtgWMo7VUdyY1kE6ea498yHrYUfuw2ZJiL8um5NURVW25o8js8Rd3b2",
  "key25": "4zrJhDZjypAyivSA4ieizgohsRir8XUkdmexSQezyQ2WqgFUvTn77DHawNnrzDXpC6TVgierheFmghwkM3WCfQbe",
  "key26": "24zhgaeHcpdxffcxZn6LLZhrxxb838ykfYjjodnP8MmaP3REvd2HLoFczZ5WYCEZE12zFMyLmR3fuPeswYLDfSJ3",
  "key27": "3AevpNwMpdxX4btFD1Jns9qKAuVVu1JBzJe8wY3cG5eMUjMLu31BknnXqzReRhVcSidUUxNZKAF4918f2D9i3TSA",
  "key28": "3DDCPSsqBZgRJAkUeTJFGoAS8ac1jYf5FB9vJP65x4pr32i5nEpSE1oq1JpXwFmDrtfDb5kLPzdMNbFbWb285AWn",
  "key29": "5DczLAWpUFpe5ESdqxn73995nSjdd5G1DmSeeTCEUWfjjcA3GNtFmLQREUmyKty7LVNquzmzNsQk3xANAoBCnhUJ",
  "key30": "38T4Zoza1cdqm5buMworND5NLnz39ZPfiQryd4gYn1fxb2t8m7WrMos65WKU3jm9XDsZenzLVLtkWZ8aCtnfb91C",
  "key31": "Rsix4qG93EH5dGcATUsh7ExgmM58EMiEyLod3gcxcVVCYLRTTJaKNx4k81qAwGu6VJNCFKajJ73nQxMkn1F9zZe"
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
