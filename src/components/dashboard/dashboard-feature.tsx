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
    "3i8twWo2CvsGD8xnTDe88xnsRzLCUvj7Ujfimjn45AwyGz6beGWfhTJ6Rw7ktJobrskhmktQ8o8RM1cbmE51EYMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAjvv3DotgqCT3iiSmQ44UUn7tbv5G2B1RZqAj872Y2jWkTzDdTwHpad4Qp2H7f5i1gz45H7EmQAkRq8pm2G8j7",
  "key1": "4MHdN22yJyBScJncCHD1YmuTVDVouddErDcsaaGsvHznhDrVPQYnGBMmLUNBX71m4TNxPUwgjSxrtfBvBbMjPipi",
  "key2": "9dJSQkgJMncm6cTAb92UCbmcbRzWa1hj5q4DXyxKxPPrC6Er1vbgpbRusSAjiFzXut2nfN66TrRgLDKyCM1rmEh",
  "key3": "4xMdRGfNMVXMxbUHZ3TXcfcBEzfwGSDpz2gYBBwEA1NCNFX3YDmMkJjyUqanokYTjkvFnSY3nyJarz8zAASB8XCm",
  "key4": "2CKGHZUnst86brGTy58iHr3wA8Fk7SzWTRu1t7NX9Hqce8RMDTusyaFbH2ys91FxPgYseeC1XiaEQhnE43PDe93o",
  "key5": "5yKTyLs8QkSXNL4v3KtTH9Chy96ozwgfQXr6Si1JCvSbTza4tWgEXxU1ZAxGSbuMjXVh3t26Syja9QrusP5wMNbz",
  "key6": "3SVVU7Z2cZxEza7WMnEPnRPUCAiBC5MF4dwpZatABhnC3vynG711aqYBQ4ZEaiJcZAcBxe1aSmiXJwdXv4MNxXaQ",
  "key7": "yrcGyDRvzYMzGzdNP4fSwJVHHFMR6aGTBtPzyGkBFozziG3jMG2cfhFoqG9amyHWsWfdQ7EsTQc6K9jxVWya3Kw",
  "key8": "wRS8PkDWutLsg9gnng326QHdUv59xpp34ewfwxVvcdDgii1a6eBHoGVHpdggkwgfSnyDnRp2uTBzozCwmhsAia8",
  "key9": "DrSotABUsFZ9nhMtpZFBEceaKVXEKu9VTDqjxSFPd21fjAcF1zistJFKxg5BtRV3RJPCwQb2WhYPPNqm6EhK5VU",
  "key10": "kwzwQCTERMz9EBpftQKEGu6HzcDqXBbnKfaFHoBM4KLTFPVEEebQdJHeL3KPKao5zfwFKnLPSKRtEpv6EEBDCKL",
  "key11": "4xUxx6Akyfb9wPw4eMUX8FsEWjJWZXRe2yV61M6m16ZGmmntuKjhsvwxL6g6gypHJcQHp7UpEfKdVVPTSeRPxGEL",
  "key12": "2BePVWQqTVFUz1iTZ5u1ZozhCkbG71nDUFsoYC88h4KgVhmrScYQAVXkB6MLNXnxwLd4vtivWJV8UCBjrXJi94Lj",
  "key13": "4s8g3PzK2S8ncM3ZgVFsg6nadps3BWpffWUfSSZhcnFFCfYszTohtxmcMLa8qrGhpGhXFYvujxBy8SFCR3X4tjdP",
  "key14": "4FNFC8ERJHUqpM5RkKqYsgwsYmES4XB5LbtK8og8dcjtmDB1eawMhzuwg1NXECQSKUUJwKQpAzA5SjiN3szid7Pc",
  "key15": "HeJz9i1tFj4ye9ftAASKpsX5dtusoLjoYj3fSw6ZXnWu5CGQd4JR6kYz8zmBN1FdB6spBgtHUoLVNs3QcZ7ZDXK",
  "key16": "2pv98pFaBc4hCAD1fARNDSRyoDHfM1YjbezPZ8m9UbVXs26WKgR9JcAxFjhFuwo6gyEbpsSv3jXSdyoeSqxMNeeX",
  "key17": "2vYnLCXWHAUX5p8AhkwGSWdPxVkE2Hou7ZRhu6YdeFQQ3spgX4uwjW9VRhHKTo9gaJojEiK9FaqZFRLEiSerKEv",
  "key18": "27vSNevCg3PMHxYYxPS1hyMyKNk3Za2MxXFTnKYFQCzxQcq5UL3GSRAR6JX47HygfPsJY3mNji3FouhoubJ6YQXU",
  "key19": "43GChMiBub5WKcuZVeH4Y4ZWSLwpNYFMYVcqG1QiPsHVtAM6NYTLLQRJCfKKiu6CbPyNrc2BGe21E3rZe1CXoaS9",
  "key20": "3KPyEHk6payks8cKG3W73gXMMVc24K6NTbUVq81PcNRreJXHSZZF4qRg52cxtKgwKoZtEkrBfyJGza4febRVczp4",
  "key21": "j1TnHZVoaaFaY7AiMxL2o1JSCEeU7gagGxDJmp36HJTRz5amEeSwTH2ERmzXv46EZhhggyWo5aowtn98SqNZLpT",
  "key22": "2ncaGGVmbQhAnqWQayoe5LXEeLRg2D6kd9bdTq2S9ZMs4rtKSfCyqKemHntvpUULosDKphGpfkvLKguRHWPawpGA",
  "key23": "46zFqxTKc8ZtKkeQUohZKT4FdB4upyouC9TF6fNvbWMwovgWr8Qm15bm2svg93dvzcZmBkCqu3Csc5XuFTFNqJqD",
  "key24": "3vhFViCHAKyUKCRK4ZiXS7JWwoUrf2E5K5Dz7NEEKkyJSTWB5zS6HeR86147Zkfv6T3gXYL51qgKveCLv4LiBBjA",
  "key25": "2SPHTbspwMEb7WgeQPXp7onDiuAYpV94PfnZGcDBWdkK9K7mwUs6BU2NoMJcsH1avMwDNqkUvDq4XAiv7VjqXnie",
  "key26": "2xJ2ZKFjX6HmPm1VoFVpz36Exa8dsSAhTwCBRwJsFNmVcE94moQMwEZyGKZPxLgbvfTCqHqJnVbQagFPAcZCcWBz"
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
