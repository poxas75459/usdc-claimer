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
    "3k1h7yw3v5LGpfP8p9roVqoiAqh6CzeqV9Fhdopj7BQfy38hkWhxRuj6TB3J31xdoKZJMmvTHnArKxPWFe8Kiamd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzJPkGwLaeJKEB58uR8er51F6bzYEDpioFSk1o7jLpu6Ao3CiFmUK3p3acwoSK6rgMdANMAnNxWR3shNSCViVkB",
  "key1": "5n4ERd8sbPK8iK5Sm6KgUmhgXVpPCu8NJ4z3U7DKYQuAMNfDGSbhcz6dqvp2v1CxweTxBrk3SXEQkdzrJUkXoQrE",
  "key2": "5qrBAQBtf2G9BWckKmaWjUygzSsjM686Rnb11YmCnnsaKX2nwws9rFfnE2ebMCXCUPAZuXbPQ5o43vE1zTLQAVEY",
  "key3": "4rejQshv12KWJaH1ajhCNp4X1pNP6KAav7SetBxRx9G517egdTwpG2fxNGTnVUaSpyKX4Wd6Wyrbk7VMwEnqarab",
  "key4": "iNGUkFFfB7zHcxAip9rRhP6f4tZc8ysRycrmEpcBFyN6q7B61L9r5P5LCKHrF4cUie9VTuBxciQYHzX7uhKgA4E",
  "key5": "35CiYbfvTjYmdNDLuZK1DHSPJxPgqnXMewptnayqNgJgqT3UyG7xguNGPTdhgJwMNwebHgW7yVQHYuJ5H8u8VCxv",
  "key6": "47njm2XVeYL8fjxABAKJYsoGg9yDzFmQp8LeDdYrbWHUAfJfBygh6MXwUb5X5Uc43Fgb3WwzDdhhjYrsPTvJ5CPH",
  "key7": "4uq1SXtkLMMdsJ4bAAhW9Kfpah6oXxvXEuJNmYYyKcVALRE1d5HwatuAyzB3xNVYrvwJgRwaEvRxPWJUnUbcQbrk",
  "key8": "5xS7vRx7THq96h2y7MG8oYjLATUqUvmyefKdYeFta4jXWSXLAtZLdRvhWjRVU7NKUTx7KZToXvThHNhNErByeH4B",
  "key9": "xC9zPtUuueNRabaWt19f9opVfm86ELfKLLq5zuaxRGh6BES1ty75xLkvz2pXk5MrsxkB4mVS5iLE298tiwebd8x",
  "key10": "42cALYRVphSGYxHLU2gUrDzco4JRUcTsS3MZJSV4h8Pe3aBLE6rJhcxL1kVE3nJgRbsrD6W5DkwsULaFqgZ6ev5w",
  "key11": "TDYwdEDYmXh1SQd1fyP2MyfVu4qban3ugvxSXMvu4pRA4NBGSUt1M4L7VtEYj1WtNxr6JcUzDekQUBwWU9hMMr7",
  "key12": "2c8qMbUGnPL5rkDpWqaCmeucp3pYKpZt4LFFsLAW6TxGoGtyFYbpVYh63jodPWqxpSrtqaEsfGF7L6snEtEsnLZq",
  "key13": "37Zdesnfn4zkBmUymzShXZgibxj8YAbiV67zFiKTVq2K94hqJFG2NajuxnJgd14tzt16BMrXgRuDAL4n4vZ9UKvp",
  "key14": "2AyZDUJanJz18NH2LGwtykwcgjFyHVPHiduuodkNiGzeaWNrPVHSd5CiPQmcYp3fGvCTjnZtu5FTaxuzrVLjNkNi",
  "key15": "YRW6v8ApW7xNVw8w5UY5yKqQzbtsRRRdAGsc9hk6Psbo2ZoGTHZJKV13qYwd4pQZdGFyrixgiDb71SyJnnt473q",
  "key16": "5nWiFxvasFfpbzxGG6PAbbtB5HsgSxix1KVqZSKSV5HY1iXv8p4Ghq5kfWWBtJLpGSciSe2LcNanutNTNQy6MPU6",
  "key17": "vuJFWvgF3p5iLjBdKCnB866xGBazJzfi7rpzhrFQ2VJYTUzEvTPYTGc85FHHfTFpijJcLURdHw1PKd7CQoiMqkX",
  "key18": "BBZ8EqiomdR2JbZAPCYzkKWeduaMQ2K7grpVvo9QWpE8jN79FqhALhcbrPcoZMo6iMhRPYgqXfXhrMJvGMVhDpR",
  "key19": "FBuwZ5nCJ69WFxbtrKNQwLbzqkreowNdro65URPscRCt6iqT73hxHQWk92UorEAApi7sbGqpnyabDT1yRWtMPgJ",
  "key20": "4LxSRpoazFbsA9s5Ekt7X8L3LDUYEDEVhURyHRNxbBfHn9MDkPN8QSPX1G3qNnwhVam5XrTbWKBtMgSXzSJVaXA2",
  "key21": "AmXAEn36e9bPTdsEtMiE7MLrYWupyvchphDcPmLoe4E1sS9vpGius65cDJ2Wakopv9DZqiv5QQTJoCAAQqYtY7H",
  "key22": "2AUucJ3NNBRfNxLycYQSQzxkEw4aPP9H4mczUKeyUUGBnKaHmuwYo6ffvX5nWEXzKaSgcTTkeE5N3CaFXu3JXkED",
  "key23": "4xvZqhT4qJXQb18Zq7533xtRoyUMokFb5FK5GNCT2cTMJg1oiqXnG1foRe16vbT1DRGGyoKy55afGZAUQvk9FZww",
  "key24": "2NyW6r6cSYm7Jb5TfKR7XXTYNwhJLTbJ7mniuEsNZ3q151ZuqXZ8s5GjxPYskAsKT5dvKcF9kfW9BStSuMj5gXUH",
  "key25": "4UySpL7oCmhoaj6FBYmWbRWUXCBMcF7gTyAHGRCNXAPwVUMErUtPnoXRCYus8xQgb62FSCcMBbA8PcrZUcGcjmLo",
  "key26": "5MjmH9Kz1ZFXrWKJ1yaNyni1z82KgJhM57GSugLDN7J95UF6Cg5ZNgcFF8atwdYhutC8met8jDa7YzYyuvjEoBcJ",
  "key27": "3Rv6owWiGFMwbSTXdEML8NfryGTEh1yLFKsHMJDVZVtsBLRtDCRw19DshxJvEpPmMQ7FWP8p5zDR5MZLPeWHbVQH",
  "key28": "4EVBEPyQkNowmRAByLerefVGsRG7cUa4L7KSphNHUjC53RdfCaHQ96VFFM4MHbD72K6yRdtRqdeDHNbTk18hiqUN",
  "key29": "5LsEayxv5D7zTQyscwuQuTS7SDPFDsXwkwaHBEgzwkHT1WuwdgHbyfJuDvX3ENX1wKBzw4xNjUcNSvujuaTd2dyh",
  "key30": "3GYXBXTEdDQmgfM9hQscKMADr8L7jyReAu6UbnPUdsHmXUKdm2JLEb9DntbhDdjnX6aJEFnAWoSZxymowKXpBM5a",
  "key31": "raF3GUcmrNbCWEgNVSLpSjcqPe2MigKgygq8xfR9ABwgDmxZuLRa55UAQEiwK2zLxwBse8NRxpwmQuGDcLZ5HV9",
  "key32": "371FTesiuiiCiRvcAQF2WD2rMMiyevDXtpFhsUi76sAvzoZaMet5zrKZ2JhFxVUiS7Dps3VWtSC3roF6WPLCEhN3",
  "key33": "VJwvvxw9DC8RPkXeWE1A3rFDjpgLF7aksPPB5fCF4NDUCbNUJFZpfkJRQJ7ZXkW8SShzMdNyTDkocrG7zC9pKLn",
  "key34": "32BEjJ1vLaJba4cRRm5AHLHS7FyGXonRNNTnZaf9kKtzci7AkpvLvUdNZRpetR6SXJ4KhxidAp1DcGS8hobgd7HL",
  "key35": "4pgjN4Mb4sKHRQWvN9EHWqZz5eKy5oeLhbrGPb9BeN87qMytb5doudy4XvCVGm1dLVPnANKDBuduAADN1vB1trEW"
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
