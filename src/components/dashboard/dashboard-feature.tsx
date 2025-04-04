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
    "4VcVApsKCeYcucMSLPbxW4hM2yN71PdTFCkYbx75DiAjp2dRQBMo6TUretdmd3YbKvEnnyzdDVDh1vdA8wvbGoCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VtPmTyFwDH68pnc7ChbniyfH3BhAkDxWZesuRh9RbsCupSverE23VcKpLTixRkxcp6C458oc29yuyoGbZJzLXbt",
  "key1": "5454NY56cuLeS67GV8pufpXSy3RPFgtmq8XbsZjCQw3tTne6YgmJSCKrDkBCaSQS3dJz2eSnQ4aWvpqNDYg5KBXR",
  "key2": "pvfVHgj51SnT7DFUaV1bCdALpHL3Yxp8VmFiyn9Gqdjzse3YT9KDgK15yv9Aaz4WUAU2yaj8uDtapWU3yVkqF4p",
  "key3": "3iPEGo9qRUuaGBE8kBZUujbfqAN5j6L2UgdGjhb29YwGN4iMidnpadwecaBzHtoQQVFazBMxiGUYenKcftzviERo",
  "key4": "5adVXzLSF7kVfc5dZdSfV1ezR653HEnB2NUmJdG6ST91ZiyKuNJpbMVXo7iimRCx3aU5Ykourzey5tjwfW6FKZY4",
  "key5": "5qpfyNtYfanw32qDoNkvt8ggtjWUhCEqhcajLYNhJXdktgHCixL7AKrVomS7Q5qXpuFTPdNBMxdyPhVtGSEVgmEA",
  "key6": "4p5WToUcDUmeX1yG9bSBXLFgmdMnDAH5VkbPoH6RCz6jaUfe771VrSt72gbMKiZ54ND44D1AZvWzJ3arqvJQEawD",
  "key7": "4TqQGEWm3o2nyMJGwa59sgxERvUL2hfrpkQSBUtigUYZdkuhpjpP53BY2uma7TqNqfjiJkXAynLU1BHVSApdHohg",
  "key8": "3XH4NFBM6DXYmuwejJKT8towMwqTHe6sPMCZeaprvnzcUVFhmXQRwAsPeQMMYJs7TNRXNztyMPCacC2vQ8oagrUG",
  "key9": "5oN4CovyNjLdWcpK2b9UYGH6uiNY4StayQUPe5j5TuZcWwDQ2McqdiUrFwfEJ2HLLLgMp33hwzPCjNUN15YjBxeP",
  "key10": "3WSJZHzuzQwtLPdRpNpFS7SifGbMs9uVV6NQEZQGZ8KPH6y2EqQPKL5BRZX1Nqe2xmmTPaiCEqxiUPc16TrvvFYK",
  "key11": "54siBgDR82VSuGNqmMBCt4XKiVccxo3Y9f4F3MFHQBT3GDDUh6oM2To7q9u6phGgc7NEHjAUvH8Rdz4cVecXZGUH",
  "key12": "4KG3FxcQkDJ3YBzLfver7gr4XZqGivWLX1FzmDdvnR4bWZQMYTpJTt8wmT2uwYWGkKbSQqYfMoPSdubVxiYzwSbJ",
  "key13": "3tzhwdqJLSdQYjGTuTLofcJ6u5XgRkYL3zF1PZ8xmcbHNHBJjRKhczAuWPDpLb35UbRbe7tqGssECWQ5qsof4CaD",
  "key14": "2kC6WkWVbMMtEn5r4xxjp4BTRrwZCV6MLb8eWAUBLFFqni3f1CrVYXbobtxZu7DrcSGat2ap9oaPN9ASG1XZphYu",
  "key15": "555M6cM8iARYMehZy29Co6spfDRVfiY56VvXyScV8XsRuuPqc2rvhrHt6Z24VnmXVSiP2bqC6JVK16kzHpYJceum",
  "key16": "2fuBHvsGrpb7t29RFTuKBjQh4egCxUWbvbFjhzeQ4tsAuVzfHwtaN6zDgSzsGG5TgWw1t7yfvFZhth6pMRpKUxW4",
  "key17": "29QcchUVpBGu85cwumaezmmBvux5KSLeNg4V9CTgR36xVaoCzvGPYKXHrLthGJABBCGEXuV6hp3ZYeR9GZ2Gqyjp",
  "key18": "4N1GYLmuKmkufZ68Adnors2cuxZFtXBoLuucS566eXmEEZwHoZnrYEZUsogaGcBhcKJoKjXjf1L8pNoPbeAVdnDU",
  "key19": "67hY2YHBeq1rFvY8dLhbEstXgasVguqf1F1TnBuHBX87hmvsZgFstgmj47seDwxVW5vpEGZE7jshAhReBx3hGVk3",
  "key20": "3GfPqi131cGwJL5BtUNtKdyt1VnAzKcxUGG8BNizeJ4iJ6Nvj5jnG8rciQngH8GfZ5NCnnxYrPdLbUyvL3XdkSms",
  "key21": "3xB9ZQV1oNkiifTQ4EDbgieTL4CJpvRKm4Vv5NKvYoqctLjXyS5x6Pm6n3pcQRjHeuRcCtosX6ipvPBUDUi3XQ2N",
  "key22": "59x25TiVNJ8F85Y8vGvTdy1cQz9BQYoYniWpHadc4qJmPSBP3gRq2YaeoLpmQcKqutZ3GrXfrtkmLEKsPH9Mx3hG",
  "key23": "29oTLVGaS9is7KcQrUcZeLHXQxWa4VEouVGMxKnbkokfXYJQDhKAVQD1n8jsAg53LKhWkqH9e8sXGw52B7GE7hhu",
  "key24": "4VJEN91cFHb5BHMj8qjbiCgpwxPRidmXKRaK76g7Gy9o1a5CbhLGuRUFLLe7eTzyad6zxmUGJBatyjkWgkZwdGZm",
  "key25": "1ipo1hsKSe9T1FazEn6RqXZRunS2cavJt18jF5ptjSmj7k4Hmgpopij3X4szSdxtLP9upegRBEXoyqEALFPAJqj",
  "key26": "3e44xBiPEcf7w8KhTj3DoYfQwfWtpyzoHuMjhRponCuWH44VKsqDSf1N987mczK8bCDsjTTCNH4s8dwuPJcVphmE",
  "key27": "dsey7HQamTZYf6KkSQrHnzsGYvPXrTd1AcCFEkWUrZW2opdLJUZXQjKJVXWZc4gmJJpEnJy8Bb43fuytC6X25Xz",
  "key28": "4d9SMMHKKRhgzvQ8wy2HjX4wKXWarMo8WDLv2UZgsjasMLRNUKr9SwxbasyjPuW1ryYQGWdVzfUVp2iYGZuZ1B58",
  "key29": "4QySyHvfSAePDrR57My4EJoBBE9mQzrWcEKehH2Wcb9vQJNRVQXbRoPQT7Uvy1pYcxjNecgSPZiqXsQVGb4qDSVp",
  "key30": "5AjbQ6UCBtREcNReBL4weDGaD71df6StQWFLuW1sUBsumqPX3t3z6QaWkmKuottoS6sTUQ2HGpWehH6nT2fvrP9r",
  "key31": "3KsiftMoq5Yasm4vQD5noRtHabmGgTJAnR5WFmHdM4ekkvBTYHL1TAHcWyrGcCo2ZeviFEVesCUCgaQnmnegeunz"
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
