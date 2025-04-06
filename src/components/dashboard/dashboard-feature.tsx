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
    "47Jo9eKsHPKibrUwScvBmX7GMADCkvNH5ig3WCBPqAqHmvu7de2GkWcvmy4TiB33cfrSdtfR6j3J1gSLFtxb4s47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMsi3t9tFRmThZXVn63VzcKEqWZrUnKcV5g7ox8H5Ln7LwTPTCpEM6TiJkaBz6i36GVMibYzxrvHgm4Kksj5jU8",
  "key1": "62urayxESAcNEiYUY1CuZ5P6HPuUghUhnkgTufZeudvXeKDM5Z9zuHy9k3sgaU6HQzPQfxXRnBuMS6tzgJwFtaJK",
  "key2": "5mLfQrfXhHxaGTVxxsRqM9JJgqJTut5nYAC65bDwsi2daQWeR2L5JxaBehJEec4Uhte2BmX5iRmqM2sw6Qj4tFr",
  "key3": "3ocSLmzL5iVdmKghN1umtfFT3FkKD7RiiRjGxhtZs9ZRszvrRVGC6pxCvGSdCWhck8Q4ssUXdR1UbaaZu2FoMynK",
  "key4": "2QHJ183pBCNctzETDEUtRUUgSo3aT3xL3MhNmbpNeUNgQWz9HHxnZ3KQQXPd9wT2jZfHeSzn5xoAX3cRibFYYscb",
  "key5": "2oP178bc8LgtvAhTSQkvgHmuyhydt8N4QRzcZCkD4U8YqsWCPXagC9C7etM9GKLic6c9UaxikPNN4Gnw5boF7hCD",
  "key6": "2qqGZzzehLr2P6Y9KTbsWvyqgxfDfy4mQeTkPh1JYWjwqrHMqKhkUvhLuWsK5WVXHoP1x1FrZb6ZECAACZmHLBZL",
  "key7": "UEyTNQ3U76ixinhir5HfsbHkbWAWDuvsriphNMRP6hJoyhsoYHzCrf4WY54FXjDy78GTj4GercEGzAugwZJLsFw",
  "key8": "4TQD6vrG43o1MR8RFszZ7tMPftoycbzWhzpAwd4tRGdncVVDQP5ycAoYzEmsxmjD4Wms3jU96UL4HDZYUcYEroQc",
  "key9": "5rkynQVZLHvL67eSqwC9YiFw9UpbTB4CwK2ZGCMU2YTfVNzbKS5ZiqrznWy4ynvqfagBAtqZmqB8SsNaowYXQMuk",
  "key10": "t2YJjFdXnimiLSazYQmYmj3SAY3DPg6jdakFw4Rg3fmzz1LKB6pM3UrnKkBwDCPaJg6SA9hw2mCcAHhcGqKsNNF",
  "key11": "5ULCPWF6odhFkzuTkDyrrg9hPNAQf5nLscHTSqBj7kCPyDpNyinj4Ru9Q3F4W39LQcnWpFAEyaGvQGziu2BonmYh",
  "key12": "2qXDiDc7prg3en9t495bSxdXzP76cpUdTWRGzJqYTuWSeQ8H2nHkcLxXjXyim7CQDkUDtY3EsKDJG6pGuYqhGHUF",
  "key13": "3huknENXM3Mz5pSQ9VW3iLi39NvRM89Mm5AUCJ3RGSWuiwVSwTfead2YhvGGctYYL67MpTSZJPQyWiKfHAq7LPY2",
  "key14": "5SG4AiQeipNdZyZetqQqpu6MDdijSsgfXt5t6BiZ3KPZ68njXyZz8YXNFLXKWCNHTq1os2oPxgmcqGcoj6DLX5M4",
  "key15": "3U9n7uWXbSkNh2LEcYx8rnSdiw2P1TH6iDWWG3iTfU4mzAxhn7Ly6iFzkeCmo2LGRaoVwniGHGxABaJ5ve33S5v3",
  "key16": "5qNe8k9BUZpQJycFom7Cz8jYFyxCF6UEeQmKfa95xwmbXxzqENiWsrHiNk8s2GzxX2352Bu9mm66qrU3UPSjP6fp",
  "key17": "2rg4UbZ9MSVMS7sTb2sdhjuWBCZtp71Dh9CndWpSNrzWEAGT1PuQyC97wH4BDAE8AZJ6fdSecddJNByg28xGqn7v",
  "key18": "62XCnHzkwUHQu5SNvjx8ArY2cHgLMAN5gGK1kKkiLDGmRfzwp9eM9tmhNamHFEedyrHVi4MRDaEk5dGYDhjmnQRV",
  "key19": "3DKqWFuPAFrVAqvCPybrKBxqWotMHNFD6LR95DZdXSyGqjr2qBAHF51Zo9BtKGh4BjK4N2vCybNFcpavnSZJMjfs",
  "key20": "vK7KwxWYKP3NkYaBFEF6AMj4jyyrUqgAkzawQTmv4jYzF6DHgDfcb7wUoXQZo7SqzDphnv2boX36SJ8bRdZQMau",
  "key21": "4tcgZfdLL8ZvTNXrM8x8dXkfQWYxqxHSkfwcn1EKzJTRp8DhNLRxsegk7T1PtD5CPLQcVTSDjDsQqe1KDzxKyYUk",
  "key22": "2HJfQ4oQSqu5wHJSTRY3zxy5DehZewaEkz4uBz3B5GachfQsaKEAWxieopXg9p41EnmkWLSFrtJ6kLBzA2bEnPFR",
  "key23": "4528bMxRnPahxhgLEBQHk9ZAwLEeCqFEawYozN7jULtMMVacMou98oWRVe9DQLhUNcnnHGZ5Fjc3LqLA12oAnw47",
  "key24": "GUXHH5EohLmf8r2SehY16oqp9TtkyyNDGKBr9XAk1PVJ7yHb2SPGE8p1QHx76q8QiCGJUxqoYAR6LPMwrBp8Wgg",
  "key25": "26iCUn3TGxPUdF8WvgnQ2xzeB53MnUjV4Y8TpLLFobb3tkjVt4chXq2Ft2NtsahVtSaQ4HSvyuMvH5d5SWg8iT5X",
  "key26": "gXugSRbWeVj3WCbW9c8YiVcrTQcFnh9TjW7pDvy65Jmm3zevD7p59No34SZPdWwYDnh41ih9RVsAokYoWtNCoBz",
  "key27": "2R1iaM8z7mdW6fnqSoeGSfBbC7CB8KAaQfPrnKuJVSJNyBWow7vo9JAoyG7x3D85iZyaRNpSiNmARZujocABnWYm",
  "key28": "5R7oyyuyPbbW2z1gXrizG9hKaprmtHM9WdbbnjzXPoH3GZuWoRjvHL47YdkQ3RP2EpHJcHqXCuuZ93hZQd6hHihg",
  "key29": "4W5xHP9vzJDTaE5RhuDotesz7ewPJbF3pbsGiMccanWPzeoYSgg44XypAezX1EJQHJMpmGe35qHUDpFVpARfMUc8",
  "key30": "kQAb9K4Y374x9zPDe16DLyqhxZXmuJc43wwZ8U9T2kTUkPUMRWBxaH1BrWMy3G5Qqb2fNoXH62sKdy4QJLYRNB3",
  "key31": "3RLmkxaiwem9NRvUNCLGxhu86RsKfARgJCYcmEvmr8QkY1MJvKQ4s6iRWArpMSQpA751XVf4tVTxrwmYuLgoDStH",
  "key32": "2mviVUgNfv1fqRqiWn66TCumAq31cvKxQwzsg8dddWWjsQic3zfypNLskPmW8MPs34upihSF4ishubeNV86DYgQe",
  "key33": "48xXfB1oMBnX9ArqVcQYiENw4PLEZuSqfo58nr9CRD94jdyS5Y4UsPKtb7AdUkhRcr4yf1ev9mJUC5cdotPuMxdJ",
  "key34": "3rn37G9cDcBCUwvNSWDFXPfvVgwRBq5ceT3LUDAFb83uXMw5NExAv6wifj7FYpvEq1dNkejTZzG75R9ecP6UHStq",
  "key35": "2F8WDXKXrRdiyEvdp3FZeicFT77SETCzJ9dndQmB1XRNSxfggLfZMVUhgHfNaQdkpR5ePLgy5QhqMw3yLsLYsrNL",
  "key36": "39xuQH4HESVZTGUdc8AwCcNFVvpgckjNNkkR14YYvZJ292ceb9tDq4j7y7qc2a214TcEy2MXxyc3izW8k8aVPf3w",
  "key37": "2JzgomeFSKaLNMysFJ2ehYgjqwCV2ihW1i79xRnECP5DeUcuYsNZB2TesuRwyf5vFMnoKhKDcyV1tTracSgV1SxS",
  "key38": "4oM6AnEV4bALDR1wLmTrHnmzmiTqiEgoDYWKCmbmyVW2mkVBXAQn2dkDKrk9tqXtwEA72p5ZEZVMmPxjNKQaSTcF",
  "key39": "KD2vyEZyZeT1YJV5FXrvoTT2twPAv8gGjGP9mpe7m5oWoHTnSYuhkn7owzQ4xP38L8HFHQbbjFucrb3LVRX8Afk",
  "key40": "3jYy4eYmMWfTfjbRdro5MG7bYxe6hmJ5FYExVRBQpjKzB5zm4aX4tHagngeAmBXL6XgrqzpNhMxNNy5fasg2K5rH",
  "key41": "tWPiJs99LvH7KQuZG4PcKUAc6oFKThnKEPSB7iDYtMWAtn5Y9wj8RyPa5JggWyaBFTy9z8LW2fzfWYaR328Qzdi",
  "key42": "373HxNYrQ9LHPkZR5ZBu1YQnev5S2gx14kAUQ8etp2uheBPrzaFVMo4MzqWQxnFkSG3YaZsQ8Loqf6dCRGq7w41Z"
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
