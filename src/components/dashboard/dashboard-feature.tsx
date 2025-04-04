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
    "4HaLSP5k3CqTGt2A5DuJ8KaqW6YQ6oqd6xLUMTxotZ9sVcTJXGuDeBHAv5hRoCtkBppqnWvxZmEm29bRDb6b7fV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1saktF2jtMQt75Kjy9FaxgG1oTzz7Fhrk7yz7Dpftk1nVEGZn96JCDFH23pjfA6vWFFARa9muRNz9FPDAxYYhY",
  "key1": "2HUyGaNM9ntS28RJFy81XSM25X1rdKyjzU5pRTGTTc1jUL5bawNckcSozWh2h21WF4MGVrjvXRVfVDuSXf1nbJwF",
  "key2": "4wK5QdPHaWQEnEnkrCHKbsMti78jKd82HrhChienF74jJtyA7nLT11gnjTbEU2wrzUGd1wZ5HdxbnxQm6riqUFmf",
  "key3": "2avMNPxBaoDNujjBGV2grwQyA9aL5h39p5yA67883sZZgxxfkYHHUkGNZEtRJqsiM4gXVS5iLnFkTqiakDhP3hjE",
  "key4": "4rwexUbQSNB7qzzgdaporS7bqgWFspHpYomT2kB6ygAAo2PqCM4JLm5Aj1qSgqg9Ykv287a27ZbhLAG38Jd7YJaB",
  "key5": "4vTi5wJwEvEv99mE8XMUtdgWLd8QR8XRwfXRqy7JEKboV3nePqhtQa1WwLuafVk4Yc45RTmKKURw1uZ5jLEXcRgB",
  "key6": "5LWUx5g7iWcXXeLSJCPG9cexgPAEBAsULcz1467or5K43aKwNUDLb7yjuJG4qV2rQgSrVUdZSb5yzNxL9NedMKy4",
  "key7": "2p8UFWnyHRieJUo9hzfargRvshbeVJYG1E2s2BzNH5rfAo9k32KkKmJQpkV7KcUYaoWqYsBscvorzuTX6DJuuiaK",
  "key8": "gj68vRjXZkvHZUXdfk3dhM67SKh7AFEzT7hqYRy6ixdMEWcDgzqYxCRjmHYBwTS2bD1HQKdig4u746pxSf7AghA",
  "key9": "5ffGLzhzAe8g2CNxPbWWBSC6ynpxxv157uRXyja96dQjhZzSy2t3YY7K1S3M2foqJ3bopgPESAaPPW5XwgMP6A6N",
  "key10": "dbwKV94uJSoKacEum1P9VnCZBK4i2Pz2NjwasVq4ySk2hyLjiu5GzC4VC95pkrPx5v4VFVfiRMpjAqNumv4hmaA",
  "key11": "44bhz62zrDm2u4F8D1zjdakLKh1GVohq6xKENscCpEhKB7zotDTKquPGNvT2JupnjQ7pm5H2sJgjbX1X5nyiAgzs",
  "key12": "VrMe8Z8Teq5Zc7c7watvdYphaJTfKuJ8W9tKJVU3jvwhkYNTSJwQ9MXsTAt6SAzdqYSvYhj1HyGrLhZ59Zd9oQn",
  "key13": "38G6xRfxTRHmMD5KzfQ7FEM5ygTjGM587wQhdqtnDHYacqivBEt2fUnowXhHasgupoc2yJp9fFgLYnPhSXGS8yow",
  "key14": "2WZS8vvT44XVvTt7NzAtz3Ri6dfBYdxjLtvmkHjroVGm4vBZ8ZxtvtHZcu8J4KBWQbaZv2dsD9w4imSmmdqaQaP",
  "key15": "4EHNCfDkGJ1TUeK2Qdg5428bpR4HpLnPUL3GRUufx9dutYYXLkWMDortXokLx8DzU7d4UpeDURGUWxqCbsVWbc2x",
  "key16": "3N6ikhDsKPaunQ4gdmQ9CGmKUUdytBaLtSJE5iXAffcrE2ekMHfJMo8AxrAYinPuVs869G1UJZ3rC3kzCT33hRNc",
  "key17": "67rWYkqTVGQUysMoyFgxaZVdAN9BUcEPtj1Yt3ijLdW9CFhGL3hy2989VU5f2SxMLP45yYqdEDvSvbiK5uJEtZ9C",
  "key18": "4Ecgh7vkBMrTMeFxq9ZW7MWbRjAEBrTcr27T6T8fcgavTfF1uX1b79tNWmhXv8F2uyEbWYb5G4BySWxmtrD4d5Lh",
  "key19": "4GSnshi6Rv29dowQqb7Ge4mJuNU9Qe16tMiQZXRDezFvKPjmPEM89RedDcpFuHw4uNztBWa3tAk9AaDST4k3nc2b",
  "key20": "3JPEp91oegaQHtQcJCttUjddg6JZtniFNfacPoeudvVpbJYYHviMee1yaFQAhYAorc5cQtWJcYLxrnPPZ4eX5tsN",
  "key21": "hyMnTpkPVnvCF3CDcLHMimXC1wttu1pXuVM3i9U89CHXTsZNoSRPGnqJ6nzdjxjRTTm1JrgTstx8h6XFQjSpWbN",
  "key22": "5aUL1i4jeDEDWj8mh3rmH33onhknMDaoAEdF2x4Xn2cWG6FMV6Z4MZzQazE94EM6YNmgnUY8NJwsvqu8DGKEXMwL",
  "key23": "64fBAsYzKwUKrUnubDUYm8jP5wYpj67mzZE5u6HwfKquTuamrpeDCpoH7PLYbcVhLme65FdAyaMmVnTRD6CMAd7k",
  "key24": "2h7dbyzWxYbN3Du2UwwadcAbs1WQSuinC4AXcChgkU4wadCBDumiujJo142ZRXLX1a1pZh3WdgZAwfh2q3Gqvk18",
  "key25": "4ZWqohG6usAxxmUXJoFwtER5S1fmDnAbi2PofivAU3zDjADyn8JA65AH3QcT4fLPSrAoxd786rioQonp9K9ut2Ti",
  "key26": "2pw9nsyMmMfb5YBRifbaErCSK9qkVH3z5jxNgX2zg36sTWXygZH6PykVjBVLZhEs2DZ4T449r8uHYGL99WjULS7Y",
  "key27": "2x4PCNxHQdShA4nCiWvoPn9kNaBigvbbQKS4k6o7XLZ9Jaw3wwgZFceikj1T78iPLaPaQqbivScgpkavXiPGSdsn",
  "key28": "3rHqqtzRaMoVdM5wPHYrbtQAB1K5vtLGyJA12zxyUABjSgVWb91m9SgenE1h1Rq4d3HsV6HsgDLWRscAbsU9Nr31",
  "key29": "aiADPbBTBc1eEVhYpwH3eoJ3sAH5jLjvYpAm2kZ8YFvMefbE1vqN7PfG3FdxYFM5GpU29QdfxrnUbMoxe8cBo6V",
  "key30": "38RjrwkV9y6bXesMeiETGT3ikGtQB7ENhewME2K7M6miShHox5JjBQJH5y3ESPpsbyVaJ3pZfFKVaZ9pQNZqDyh6",
  "key31": "2XHvEYTqZpj86D3kyatBFKph6JaVccbwQw85V7weFWqEAgPuaMwBzzCD595FB5ZoeNNgsUnPeQs29ev8MPsjUT5W",
  "key32": "2A6HiBqBJnZNkxbuAX3QZcmpM15mnjCtpf1LkGdDX7rVUZDbmhrxd2MsKzWC3UckuuUxWfs9PC4KDm3A4YSZF3C2"
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
