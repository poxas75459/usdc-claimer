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
    "2siXWhPBWZ586mPbVD8N1FkzRRvxmGHzYR6gMFHtLhyHsiwJvWbVqHkreF8mMeHXDrxyxjQJgcLWCt7FjGJi1Go7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XtT9nnVtiNKpSZ8TdwDajkqr6PiuQtnpCY4XFiuJi6wyQunK7g1a1tgKkpdng3HokgvVL9MNG8ipEef7V4Pt5iU",
  "key1": "1hYsYcpfFFdjnR8v4UVUaQL37SvAJc4FyxgqwNuVrdY6iFHzevx19bRZmh5oiTwPZpacbaSnV93XYMPCFWMadmV",
  "key2": "ktDBQyFZhUZ9F6rkSq656Vt1RX68YftpsH356Rn5oo55kMaLi8LAUoeRiXwrBnDAjiKuMGD1UWoEoGTodZUuoHw",
  "key3": "2VTCGnniSpx3XwDGWykUc45shtoDbMngQcAvbUWv3xcuzN1uM8gfN91X39bJ9srz4UczrDzE3o4oeBWir5Q3gDBC",
  "key4": "XaSK8QA3bbAHosRHBXMjq19G2nLWYuyy8Sg1PJXZe4FNcXDpNsWKBYBrjwRyzWur6TAKzBgBzgCKrVt9CHfjukm",
  "key5": "vSi97Tzd1pDs5p3eFzuKP5LZJz9qPq74gjkYYx6TDn9YfhX1vRC6xweX5sSrLmynfUrAsgHuLhXZCh4JkuUjg98",
  "key6": "3reNbkGABYwaKgyUM8NMnA76oMic3ZPtWPXRKHD8gUfTbRZPbDuCm2Uk7HqWz1tt7qxb1SnZ3Tkmfb7Kbvt8zgz1",
  "key7": "p39gLqHv5JEiGC9aYYQ8vwDNoURhqkjEbkc4q7s41VdHmFRV68MMSUj6aGJbeyiZWe27YvUsiXwTEAefFNJFwbu",
  "key8": "3d9E8PgAUsbMKHTY5gLDnbYhUqsSCvZZMSXLdMZdgtaU9LaLmPU62JAe3DWysNAAS3Jb36zJM5ey4wA9YYvmqDtq",
  "key9": "41Nm3wmEPoarGFA5zRa3o3PoDofX9R5fJyBcST9GsJBber8NBWzyBgBPC7CPsA5RtwcAb7xF9aHPoiEHjSZpaRSN",
  "key10": "3zHzJ15yLUGSrvZoFzB45kzhwyha7WmyoDESyRPuQjzqupWh9Kz7SdLhkTmWhJeBufzYyADFnLFWtotWTyjRY3XM",
  "key11": "TsBAUzTDjXVWmCULfEfXXrEFHQw5QmAELPXYsHEXtZGULNbnnHvPELbd4Cj9Dck9AnNmYYLgSTJJa22jUxFR9rf",
  "key12": "4RvypFXhKgXB1RHWLLW5ZP9htR2xnwHSb8AFETwnEAsEhsnDj1J72WFN9AoQLr8Qz5QBHwZotjSgNojthSa8WZCM",
  "key13": "3twL21yGFKfxTj24siByigfTG7yPatiyL3tMGVZhVdz1Z3yGkG3xpkRqajtTiEgTBRD57BLtb89Znn5cLGkiJrrL",
  "key14": "2vqXA7WwJM7iR3mSUjCBMaoLSMSEph9jGBKyNGaMTfNg9hpNTuTFGgctQhZAf6c9EveAEEtpagRxobEFi7oZxJvN",
  "key15": "3SbvSpokNnqfkdiaRTBwbyad7SXdwuPV5dTp49gT4UQBFJnDQtnUXJs54wqy4LnxZD4DSCsWkdfP7ykHLTdYSm2M",
  "key16": "2iGUaPpJLi4HsMBowkVE3HuPq1Gk2HoQsUUyehhgTM1w7Nty1iEWbXjnFa1hQZ3dmLEBMypibtGeAc3Q4hMocp5N",
  "key17": "25hfbu5fXcwY5NsNdSMbrbdjkp3dE1fgZwqdrRjW3uDuioPFczMBjESJnbVuAKy95ny2ZNAWd6zK9ibnrsNLpXiB",
  "key18": "2dut7ejmTSFTb1NKcH58uhEEmwyp1Do1AGMwEfMyX3NmRBZz9yL4yZm8suwY1ZewKi66uDcPCCenx5x83WD2DXWY",
  "key19": "29W8t5fdu22YGDfbCL6WzZS4fbvqut2B9NqkuXVVc6bJxtiQASvC4GqbN6HMCEAfyAfRemYT5ZQw8bzP1Dk9LSep",
  "key20": "KytQfbf8XrK2gG8pHyVpFo218B4817d2RdDyMYwr3PWLwevPfaySB78761QDQ3eYG72jkPPR9c2eugY1oVqgVBP",
  "key21": "3TaCWJjyku43x48VDipeYzUG4AXooKNrAMMsbj2vv9sRw9jSSN1m1CKhNziA2ATMqcfwz44ivEnpj7bwQj7QocmQ",
  "key22": "29urNnxuGYs2iUwHQewAdHX3ZerZnya7ujvsCZXRMfRtBb2WbYKjiFmpHFmnGXMQGpTqg8kg3tMi9vxga9rufmeS",
  "key23": "4nopjZEGrMXUdreBCp1jhQ9K2q5ADSsVk1UvBqUt7m2bfi8CMCgdGKkhQF8atm1R3vLi9t71GXaBxq5gYDVJqW9Y",
  "key24": "4XWqNuNnLhtohyRuLP8xq6entVy5TkL51Dfmh9f4JAD61dHQrwprr4gG5TSAQycZ4gZGgv5wRPKQFNEj6yZTeSKC",
  "key25": "3SMuceEnA7M934vSGruvTEaMa93YxY54x2UUAzY9vDgZAtEkaqfFc7RVL8R1HXqpXUa3pEoPagojZrhgfJz6e4Ev",
  "key26": "MsZja9QzUtcLBpVpNesE3WxTcF5PNtnawVG3gHQ5X12Jkhhf9VozU1NEWMjBFRTyP6AZpPXhWiG8HcpB6TEYcUH",
  "key27": "4dZLUpW38okWpsBTU49nQb9foDy9C4jdmwJwf41tz1Z57mZzjebTYJ73F9B1HuWC5LJZXgYKQ265r4xaUEMi3u9Q",
  "key28": "5wt371SRhz1yuu6VaN4nUh78Dx2zW2dn2se2uAQBFsFq2YGefjcAp3Q6AYogYPH5GPR4iB8M4zHxbA3pFBwpEFsW",
  "key29": "54b1wZyW8PdYorQNMFZmLTHQLnzoGGRqU2jEFSrx7qYzvG7Kdoyj4V2aWdMts5wp9hMtvXwzH9QK6MoCqvcokSVc",
  "key30": "7yaN5xXYkXNBNKR9kqd8g5XDhg2CFZbR8AcXEyDU3DF5aKD1ekJ3MHi8Pv3s9L9oQ3wXdbWCi2uFY1tp4iQYtiB",
  "key31": "VDyPkLjqeMbbLWMB5A7g8gfqGLRNNDrjV7NL5n54aZji8ZQJ1izd5ztfqwRxPN7K4upyET6mQ9zz7F6iPsmqYKS",
  "key32": "5YUEySGsWo11kVLaZAbCRmjqvfD9S3k1mkEUqoZpAdC4PiG5oqWSC2co3H8Z7DP4wG8SSevAanmB4QiwCpoukTN9",
  "key33": "3MFruJpBuSZk3wT9xFVM2WETssw5egsgqw65An3QodmtWxDKjw98MWmJ35L6QgBN7UDTkyRo4pXmJbpKTQyn1SEe",
  "key34": "4W9BcobcBMVJT6xwaasSXSDG36mSnfkR5Wri3p28VHsgiksuZYc1t5BG8VbbRk9mirjWwA2GaUU5V2PBog43oerm",
  "key35": "3hisia8U3uDaXNMH1MW82cXJWYKrkUpWPE9o7DZLgDwavJBNReh1j9veQTj6KZU2Wjpn2CpizGPT3fyJ1zo4mgJ9",
  "key36": "3upMKq3w5NzmMZaJvfzHmym9wbQ7BXApqcnnCtwF4j3LdUPxif5V3TG9Qg5afKeX5Wr8wK3S6Rp1yLMhcVHSjrho",
  "key37": "5qVcyREwTXhhKGWmQwfMMa91kqF6vKFwm38xpyf9eEQEC6wxyzRhNCBx9sk6wngfzZMrRWazWVugMhUS3ziJn27L",
  "key38": "3iogwJ6a9x9vhgf39vZwHnFGDR3Wu8QGjFshwge7yw5a6oi2WM1DQubV1mGzWeErUjND5gQdMbQUBnTt8A41EiwR",
  "key39": "3ePT6qBEzCZSSvdVSnPE8Eu3GpapEHFTbMLvRcpGyVR38mWbtRr2mx43xxTkBQrnBm69tyFUsYQ1ELjpBhtS9DgF",
  "key40": "61uzeWYfsR5ZwKUBRnkSqkQ7vwsjJLvAMbkewXvnvbMxUqZhbcDeaSSaMu9RyRpc9c5JYa6BQqSjRL5FZoEqN8ty",
  "key41": "5UjAB1bbZd7U6bzcNH9sw3myi4tqJzitVMGDXaB55u8rTC1p1dpa4ufVDHdVqMcTdtqxdWjMmiu7nuLZXMxyfJwv",
  "key42": "4pse91z6N9939sumTkGRSuSSkPThbNz2xaV2vhMHmo4N6XCFeGoDWiJhJgrDT7vtjNM3Zf2konBYcJsob1qzZDG1",
  "key43": "FXApfZ5QHQK5ob5R1W7h9uqqAReoEZuDD5WPPTyHijQsLMvX9tfBnuPs9JB5rWriS1n3CwqwCcentHwHQ3CB6SK",
  "key44": "qgtQXACki3Q8psRKD12rE9L8uyuNCA97skw7fYEgmQw2PrPRDTuiRk3kfT6RXKpvjS4JFbbyfGayb6UtghXGdrk"
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
