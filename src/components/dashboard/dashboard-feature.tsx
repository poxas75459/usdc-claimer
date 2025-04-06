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
    "5KtMaQBAKHb5YCgWAHxZeCC1Uk55qA7EVL4U4QUfEptQXVommPV7ikaLoCBbGR4urri4YGkoaTFqW42Vp25qv44i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xv8g1a1jqHR16KNsTB5oHsezrkXMmrPUXP5fPtUpZEgpASdhXknZF2gqu2xegoDRDj7XaC1ikWMtwvG7rov9rQq",
  "key1": "7XPy97FK3w7hPpFfzYqdBKEoq3yhGZKAPqhsm4kbWh89hTboCr7Cxb9QgLK782rJQvrhRC3Tkh2B3xHYPs1GfuW",
  "key2": "559CEcprHVv5sBR438TCmHwLHZJUzUvHoPMkhz8HbN4ygvxU4rQzgjYBbfRtRLGtxxpQ8bE1hoybjjbeVvKWnGYp",
  "key3": "4hL7LfePaqKRwbKAtnvL5ia2oTtdSr6QctzP7C2DHY6zUrzCYqz8pKciZZaPfQM6SiZqgChv4mxxqrrAM76Ed46h",
  "key4": "k6JFrjYw7GuehZWPYwktJdWu66BkUxsycNK8Mj9qtknxWgwXrBN2EYbK37oPfc3A6ViMY1iLsV1nB6n5a5KfyU6",
  "key5": "2XXoeHGtcUYpgniGSuPHXVRoM9bGQuWjNBAr2UVH6HmciU4QsUGgzpuJdVLSvzt1Vj3fQpfRrKKQvCepxk6zPuG4",
  "key6": "4W6s6wyY4qz7KPEmmnaqPAnre4hK8zvKLhateSr9u1GKnC3MYG3NKikX8c5nFAmvcangxGv9My514FQZD5BA6EP7",
  "key7": "2XDHjkEudoR6qYY4n8DL3hfT439cq4rmEfxeegF8d1UnHk2N6tRLPAq1JgizuVGhhJdq9EJHWo7rjFnxTcsQawvU",
  "key8": "58FBowzxtfVZivpqc395AdvCsWos5rA4nmp9LA2Gogy6DYemYJPMqtpMhbsETgh9Aa1p8rJa42jDxnT4ekNAgB3C",
  "key9": "4N82XFCMHfMLu2UaRWuiR9RFDem9z7bmZXs2oNsznzmK6GKnV24pieLMXgiNJgHpp51fpLFzfVs8p4rgN7zW8VjW",
  "key10": "5PJHEm9d9gpqD8otLrwSqYKUvWbrCnXqvoGUQjo4sk18iQML8Ju5NrWWDZMGNPZ2gsinEupNoT232PJR3x4Jb3am",
  "key11": "VsV96ccEGkS3xY3hPxTDtBCgFj9XCwEU6PFbifQGczpKva1eWzqHBwoTb1NnBUCBjbaq1FpJYwnEv3XSMKhmSDG",
  "key12": "2XL4vgnAeJ1qxVvKRyoob69eCbxSty1RtNNZBowcFWFCggemrw1hfppyWRXEHpyM1bcjkBx2pmQrtXBqT7Bw16yU",
  "key13": "3Ug6hymYuPzY3PmUS22uEsXr8JbHdDPtXRL8N1dYzyZDqnbi6RRNwbzroKJUjsZfRPHt3uqbtkMi2qt34kXmH4ma",
  "key14": "fKtahYNPWDAkNcihJu1FiGqo9fTtWozcqHPrVuxjKb2LZdndQTum3PZqCgpc9KckN1gKd6tzr53nfduFYrKjEGJ",
  "key15": "53KiwCzcz9J1VeN1GKf8sJehf7KU1YAAehoA7y8cvPPy27vHkt4UjbFgeyrzgYSceamABrvrze9ymnnu6wmoDzHi",
  "key16": "2Wgicu4HWuy5g8LejB1Z9BCYBw2HvVGp6FL3GEs2Xkzuzhh7t5sveDqYnHf69ZgeMEWaVJd7hrz8wY7agSBWSZMd",
  "key17": "3aVx9xuxqzZK592KfLLf9ubrSeLuRjmV3iRJeG1tXcSFeDpMzSf6LeMqn8andCdV6XaWWaxLBcCTrK5UgdZbk7iX",
  "key18": "45XvnuBSoy2i7ConVE26fnbU2zDhQmDaHuAizk7zU6YiPHTDqjvAPzJmte9J9Y5b5nhVt1t7b7XUMUYUQFeVUxYE",
  "key19": "519wWJWdGkGeVbLLqRKdJx9b7eyiJCD2GB8ky7vJhWJTcswgezzxcktNhDXMUu7kWVHR8qKxeYyJKjWrigUVRuCj",
  "key20": "5a2Y242VeDyr4apmnKsaDpB1JnTqjhGyP86Yd2k65YoTp5xFBj5PowcNcKSZKzTgn9kSHfa3MaVTraiAJcECzv2",
  "key21": "5ktdRtbx5FSF3j6BmYEexPXb15hVUHKZFP81tjsi4XySHtdHMTnNfsbB4og5YNkTn5jBsAqPzwSwAm6ZRZGLt58i",
  "key22": "b9uCMyntrVt1LcihNtBw3EY6X4fZNfrxZkE9cEuBo6ssArhfwz1ipxSSKqVHyivC9WYpQ6JtVwPxE4bMKRwb9MZ",
  "key23": "57RX3Y4ivaD7Sqj3Ag9yzigTAY9SpQAZPvLnCPJWpGYY8G4j5oyK71n9pinGDjDgjDWGFbnALuQ8YrBbd2Wuc9UV",
  "key24": "5S9ZN37aBwkxz6SqF52iJE5h3cbtrFaJQ3zm3PmPV2erc66k21ApRur3VtBxgFkdxRA5fSUc5j7vUq2Zwp7cmKJy",
  "key25": "5WcBXp9yUBw7c8qkmzmGzm2ch5KUgRTWWEabcDAgbTBAFZtAdZqDUMsywYQiv3zZ9aF8B5Gw1BtSxVH9pyQnR7mL",
  "key26": "fC3wDvmZ7V3J5G6eWz6qCpK2Fy8dMGEHEwztKahkoVmD2Cnrn9UMhXAvre6bbakBsDxUZkKCibJUTYYy1zPJPqe",
  "key27": "2iVS2bozNa9PbBxNo6hLs7wD6XPrj1LLzFwF6NXvBcQmx9FH2mti3yGxrEXqHGoAtfmZ6sFtQN4ExCKyyWxXdmt",
  "key28": "2Zgt9VubByZkB85t5VCQVyqEvtzSoZev2CHkYfNeZDjR75PLciPzvzXey4biPq7XVMsmFeLqPRePneqxoxApRRA5",
  "key29": "4fZBx5eGd5FoLKpPcB1T1tV5dxrRrD5HwAPStdHnC8KDvJ8oJvtWgQwg2r2bAqYciu99iBPoY8FN5JuEY8SUjbdc",
  "key30": "Qw7ufejehEwP4iEagfJqDkN6Dh8hzCRqJ5eDdaaRBjD1xk1LNjn3cnmVbAqSzVgBkZ8dDkomGFq7UUgTgfapJFB",
  "key31": "4QBXeykUfyBxjjrwmyjvhxt8rB4WkSVVXiYS6nBSdq6N8oVVe2boFpUNZb4fQmZ62S4cHdGYfLuyMB6CWEnZr5VC",
  "key32": "5HBQcEmyHmuPSbF4Jx6Wpc4KawyNmNcaFAJV6rG5yH5W75J3gDHkwzP9VYaNY5pu5tRgTUnGAQgsEzHPhVjbb2F",
  "key33": "2DpDWuq4i55EPY9uFjihvgUMNsZBPAjvakrCbBmZBN3PqQxj1nbuygC7TxSzQPP53nKii13iY7bc5cuH1N2YDejH",
  "key34": "kUZk9KwPXcTnEFNfuxi6T7mKZWnvcxR2wQCeU4Q5vi3woJTM2o6CepYPNPQQH4yWnWPMSa919jxTkai73JoFYBZ",
  "key35": "57HykBFXgXZ6BHFiLezY9AtafYGBA3WRQgRwyzYazAreKiCB7u3bms28rD7kV1cXz3Wq6VtWhhbzzw7QhLr2Uyb9",
  "key36": "272U4DvekrXnNFaM7KQjB6BJmrJWSRejrNN8spewyVt9LMbzgPX4qyAuLRvMFoqPZzmwCYKpd6Y6XfbKknUTYFdN",
  "key37": "4WaMxvqnqQGzRZTpGdCA6XLJvEDcnVbEvSfwcM3xSgtaaE47UQTEssA49akJHyAkkTD7HwJ5qJQJzneRyb2LLDpZ",
  "key38": "AKMPQPn5fPEQHZXbj2QzKKTGRUtybvn2zActh8bkjBfQ6y7azBLwTxQNK69apAMMqfCWvKTEKDv8iKG7UMBL2QH",
  "key39": "51Ep6AejREs8PgyRdcTSUD538aHm37RPBvZDDByW39pdpTngqx7B6qztkyKDzZprVQD4oxY5gbAswji5WoHeJ4X3",
  "key40": "4HYLyb2AWbAFwuTsRM5N4F6qYHyRtRQTqbKENzV8keSpk5EA2Q2bk9vF2m9nmnXkoqefa9JC9EGW7Lrc28au1gR4",
  "key41": "2gxQLiYnRX4z2sxvt8fsMEJJtdBbc1VEt9BBSqUUsaTVrUBViZ6AYUmCSccLqUwzNeoksanSDjPrg1MTeyRmXar5",
  "key42": "LhjCQRUZmMFuMHUh6uHPQRbVRhYCgpcpC4VmzoaZ64RBeEBBQC7FTF18qQfy2FWNLjXKsyopANbAb8q1oTWhbb6",
  "key43": "8f258dHMgFWhEe3aaXinDLNVcV1VssHZxJYqY4H2maf7w3EmfYb2iyaNzfhLCMyGYXege9AJnxojEEQzGxabhc8"
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
