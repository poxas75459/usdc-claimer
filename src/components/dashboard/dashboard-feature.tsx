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
    "2hPgwKkcJW3XXHpNa5L1sfRMADZQkQ2gkzjvXyaGHMuKckd9C75swT6VtQKqLHJXW2RuTgTLUFEzB7DCR4i3zLmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTQ9zgv1eNiHAz872Meywxw6QGEDaw4nQgwFCXf288XwkUcoom5CSKbFKLa4Mc5QecQEQg7JM7vFPBWqD2hrM3w",
  "key1": "27GSc2yEZBKNcxHydTcNz9KeQVjmQjp1JEeeHohG6rc1xbLfAkzBiR3Pz8HpVUsMg6SHUxASpEQ5QpWaZTkFYkG3",
  "key2": "31qmADUUSxfNnjHcu9jzh9PFUHjioXYPtXX9iAAb5cQKRvUryBxqyqG2ot7Ck9nt5F7v87NzRVNZv944sPb2ZyGP",
  "key3": "2VrtWV5QpoYRtChikvpoKRk5tt6HV7QSy285R97AmERHxCYtqzPvbt7WKM52aZowJsnoUfTzZQapivPasExBnwcT",
  "key4": "3HpCCx5Rm1NepjGa6YrT5wQ9nzqxh9jDeiM8DBvVecxDY436u7QHcFTyzfFFgaqs1j6T8CPp42pbSWXhUoYazLs9",
  "key5": "3BgiGQyyxx5xLrXAhZasibtTtPbFmP3LFCemuyxP1PKeMRBuZXeWAnC9ThMH6o22ZKMh4F7VtLmcYxfFcwM1Dky8",
  "key6": "3oFADkpdnqa4dm2PQQfq77uDT7Fdi4UyXYcUALbYSg238UZ3GCnMSgnf6xWKsZGy8TsPDuzo9d5J4F16wmr6nVNG",
  "key7": "18NFszEBRUqTDWDdV2qRMbsZTJSHbn7SuMRBYVjuT2pwm2JunnPUQdka878bitVhHqi1SJ4DMSDmkYCjumLQWtX",
  "key8": "2zZ88izavY1Mh6GnBuvc4jM1pwvhWQtBWXUoMdMkNXj9SHaLTzscR9RhA8tFWV7CHBoNQPxUYpVgfH6tGrVW65c4",
  "key9": "5Ajv9Z18RqHzEt6caahWUwkcTpks1CuevXsS8oHaENNv3dZzw9NrPjTaTHNMPySceGjqi9QK4KoR1e4CS9k7fdXT",
  "key10": "42TzxToRDYpZdRRptbChJ9KbpiJUWWiiW9parbELcMUScEDguB1RsUzufNNeNqAzWwfBtL9VWiXaeefGRc7VkK4J",
  "key11": "3WwfyDQGFRGkrR5AdZXfEURsRxMr23RGkVehWdQch4KRhaGNfcZHqWXLpWEoe4gApFz6nRtSr2igArvwqNnmqdd",
  "key12": "5kGsfrRyF157M1WSs6y7Wq49mkJPyFX4uaztPWmR33MSeFfkRHwA6BSzFcAnAcRjGez3vacEuJs6Jn2cfkamQQQ5",
  "key13": "hpTYiANnfqRMQekwGaV7yc7iBnMSFibyzRrKfh2mqMhDrxXfD8wSQv2ZZAADdHW2mFL9uD4eWrSCMTqfNyixBHG",
  "key14": "2vvTDoeCKWTfAx94WQJfwfAE8eaBNTEgYccddBfB11tfUwPSdoqtadRcLBvS28N8391qE6teNaEGUjAG8Nqibz6w",
  "key15": "3GTwt3zgw1rhbS4abchzEkoX7Lb53GGaQeXXqr4R64AJr3FvFRS2pZ6S9M1t6wSpvYFkFU2XhvNewXEohPRLgoNq",
  "key16": "RtGxpxcCRGA7BW5St2ZrnrYmTypm5V8x2uQhA3K8nnB79dWto1q9nYsb2VNrq4Az22DyvsS8WDn5zQw3KuvCwmm",
  "key17": "4BMU9fAJ77HXTFvafuAufMRJsapUr3kpSGLNFS5J9j8NbDgrmrGe3Uz9zRcsCXjDHBSN1WEithBEj6HTVGghdWNe",
  "key18": "3HrsZ1TwsLBgmjCdwwFJyP4tiCZLDWUL7aAycP6ftxuovGq3rE2MYttg2ckY1Cgd38xiNg5hTJr1tbsTangyakH3",
  "key19": "2LS5cpBbbYL58zCJpu127BiXrUFzmYvgg7yVh43b38RECxgtmZcb6vRxVMQZPxiwrUbHUWKRJ1tA57mrFDd37swz",
  "key20": "4q4aG2LVNvVTPZVQmM3WswaUHhLx2gcX7xY5FEB91U8Kg3H8YpV9JrE8j2cWaiYHDnJy2XmnjRhfoYCNkB2iyzGa",
  "key21": "37NgWqEed34zJ8xqhTUYasBYYRNbjnvwSNTvWT8RPxv9KpqeEq1xqiUDHAf3mZPEjoeCYohe7ACPSJLnua8s49Ld",
  "key22": "4p3SaJjfExFUJ8Z9dpfeF67XwL4mE4AkPEdieaNHwsnJ6JVcE59MXvCuygY57AeiKKrLQayndaaVos256vjU1r8r",
  "key23": "28D9xc7uuaExhJY2URY3nvukmjwMHeW1zQ41xxprRQTCF2C6SYDsDY7r7iFUBuxMMZZeeDgA8RLHpocip6B3moRA",
  "key24": "4uawiGpHe4hQckNAdxcmkMFxukVT4rHy2ksXSJ8JEn91K2UvH4oeT6JqcmzYb4nY3GFDqBi6iRM3cLy8Eq9CuNP1",
  "key25": "HZAGsGMsuQLSCCG7B2eytrwEAXfhzCE5Ttub4rFc3gZjqMZfG2kN4UxNUGMnoDjASg3noxbxgc2fwrCCKe1Eomd",
  "key26": "qBzpNsmYsaoG82fVF3tVmRZMfnGcctZSZCjcHe7VgeU9CCz2R9AJ1e6jjGAsChYMBRVE95usGWDThb2gQGvDmXK",
  "key27": "eSHHm12Xuo2Bd7uCDT9E8fVipVY63PmKYE71gA4pr7x2bAXByQUAdKbbXnoGKvVBVoQLhczKVcZEivQkyTGyh96",
  "key28": "jarRPb3wxZFJJB6scq9xX2iMW9TCRiLntVDQpoKYE11SqcLKtrXkLghWDdChhzc8tzgF4hp433HMM7Rk2TzAFDp",
  "key29": "5nVdfe3QJJfJpCWxraPxpMK2jSweQ7G8JyfsrQggqivRkqPCaJTZDNWr1Byh4QwMXHhcwz8Q97E3TUdpJa8ouRGV",
  "key30": "YHQyZsLNwps6iQzAqSEGx1LZU5iXMXqLm9JjgxK4ZqG1ZPyVadzghzLB2zfhnDhePWCigiaW1gWLkWB2eKZ4GJe",
  "key31": "2HmAahfT7PXgUC1YDd4upA2gRzujVEkXFijnkDGqa2gHzHe8zG5WVLk2jM1MPXd5TN6mJC79P3Ns3RtB7WMeetYV",
  "key32": "2wFzRDorrvBja9xJAm4m4BchCw5oGArhW1uEgMw2jS9DqMMXYYpmxsZEM1uMujVhkGdT5tk8Xh4tjQoPwVK2FmiA",
  "key33": "3aKd78MdqkDL2zhccYu1Z1U8qp43b7nN8td7G8v4LU2T3NzD7SByyZappm9b2WTxHuytWo39qeQrkCYRC6Pm4v1i"
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
