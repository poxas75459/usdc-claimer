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
    "52nJYeMNgBn1RQcCi33YPSsJRTutiecCw9nUQn1qnkUA1g7sqxab1YVY6hkGsLwMSYXj64JTzBqv7L1oazadm3Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8rsn94W7JFXeVmdbGKq1KwMb3XVFhPkNr3BiPsAQbP8JPgGuB9QFyvxdUCSUZnG5YUZVGP5599e9iSZdYrzS1Kp",
  "key1": "5WPVHwAvy79rvqrV1YpUsU1p2ybdFR9p5DeykauRFvLPgeyh5e5ZW1XBHPuPyZFvwABp6DcuHQsfZdbcW7CVgyrX",
  "key2": "27JAJm5wb2NzEkc1TXSdKsaTgTy8Z3d3nhF1ArqTy3673exNfXSMhxNuYiH2ckvNDzUxh9TE9LJXeRrDZ1i1cXfJ",
  "key3": "2mMh9ZELJAbHDFZ6L7zeJZSzDqytncNjNvkp5hQLZLSMM2eCcR3iRNJexQ7EoCrKAyP9XJpgrABqiHZWhQ2v2yKS",
  "key4": "tBHNinxieD2rCCboG87pssY3zGmRjAwh57C5aTb9UhUtkBHpxpxZR6NLe5BYnuuVJgtdCqLYxDK25jzh2JUYmLm",
  "key5": "3PLK1QiJW5UsxDZDJ3n7Sj52U2gNSrZGQ2xyqfVSzi51mz7CTmaQajYJwcGc27oQhKNjitrpGT5yxeeXKqgH7U2N",
  "key6": "2L34WYRfm48ev49dW4fmxdrAyLnEE6tw7x1z58F2J3vAfQEkHGg2jAkKVcdFcLU3PKSmYqv85qf6VBQ82CXRHN1W",
  "key7": "VCpLXsULFDTFxznw7mZXNFH3Xj9hZ2nKDRneTCs9pkR1nfKVt5hvZvmG1ijevCZjxhWwFYBnjZZKhnVH3DZMgzg",
  "key8": "3N3jhPCCeRjh4psvnpZz3H58uTrVu3NtmH38UeZ4HJgGokc5iKYzDEyT3wDV22JB1FEWnkb19hEsZBBFUy4YKRZR",
  "key9": "5uxXfbCCY3zpWoWRnBr9WL9AN2eASSVnySU4CtHnjPBqiv9PSTxMwjkKtTQaYFvLk69FTbTZHLMXDJLTcmsuDwfD",
  "key10": "5TwJqG2bzu27imwyXG7G5b2A6tNboSBruNhXmZNhDdJHoMBXyA4WZrMLLsbtz9byaP8E2FDt6g9y1gp7Qy3fHj2P",
  "key11": "zCEHncSNE7DcTQu2tnsQ4fNiSHTfeKAaebtQHwpa678FdhaW75AuywaqntyMvxBaF8CdLqPZc1aD68tjFZ56cQV",
  "key12": "44AZB75Mh8sN7xSZWmgskkdiLF6pGpFjA3sHYFST36TK7NE3ZdwKCUDnbWhQhZjVZGPq71DZpgus6C2XcCWsuWx6",
  "key13": "41ohFwyUVtJYZ5W2sttm1ZXiJWoLYaibufCCDXNtFtAfybv949ZGLZnejn8xuKXGJJiufNrGYnF6hpd3Fdpejfwe",
  "key14": "55h5bGXpeYeY7XUHDrybgHMdBd3WdyLmKp76orgo1pReFNj8pb2WtKsaGufMeN8t5jkAM3C1FbB9vPmjEqnsny8s",
  "key15": "3hpVLJr91y4MFXCz3bQEEJefSgKvsJVy1fLQK59UfgojavGtbn3WsJ83Mh7Jc8RygfwvWG3afhUdeWG5X3WmXkxd",
  "key16": "2HtmN7m1C4cSQYDTK5zpvmgNZnakYVi97SZQm1p61SBLouEFuUvmPqWgYWxsX1QsarkfKVXTU4kF6fp1duWQ3Pod",
  "key17": "yCfzxbxLruqfSqfnawxdFoLuaSi3LgKTbxTDrqzwsyxre65R7eK9HYN1DrQ9kBKVrzTCqT3bRbBrAmDVKsDoQmn",
  "key18": "4GQSrnXsxd3tDHHBrWy6gyhN2ahzkJq3zJMPUkT9rqiBF7VjVvDSQrx9TPYCHKDpxWHXWYJ9jK5Rcrn5GAKvFYQQ",
  "key19": "6acpkxmsLm5xBxBXuW3j7seZ29XCfn7eTT7rsXCP7f4cuJ4qrCubFq2W5EFr8PczJn9XPfT5LTAuPaRWhaYMVXt",
  "key20": "fMrdh6VRGdZXaFkDqTeiRDFjCmdpq75By4WmMZ2KXWJTwsHxuP1NbG9n64izmzHugnkpK8pwDeV3c5LKEsKqqqF",
  "key21": "3gh6PD4t4SN8TuEQgf86Tbv9iKsrHTau2ok5zQmmp3DxhyBmEPhAGr43cS38jg1oLZibMUpMChwNYxguTHqW8Z2h",
  "key22": "5XhpYgZwPSsuXTe4r6nNBMTusAr5Q3JQbebJCuRJmsowEjwGhMq7HRE2EKbVerfxHysuEzZCNbqidst6qoN2FX7y",
  "key23": "4rNWcphACDbJNCYpnsmUCtrJUJZhXnjq32uCcFv2HtB6B4PsrgNDe5GYcBz9YcPdTHCY6mWFFNbRe7nzx7xWikZD",
  "key24": "27ky92AFFL7kokUtkv6iZb77VHDRQ3fNhkovD33GwHLvDfBwXasGDiVhSuAFFBYy6n58VAbbDwRwqdNNdj2GjWoh",
  "key25": "CTcLfbajGS22rdupkuSreYSWwZi7qLKGrJkzks7Vt1juwgA4unbu6fcQ25iRZHaa6X5pNFrRB2w2CanTzzC2eHK",
  "key26": "4mcgd54s3QzA2XpbxaXxPnWmR4TrMzQqGMw4d2jdYmboqWnsSXWPeEQ4BzgmRtbGgQASyfDh9G47FTBmxEyKaLVf"
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
