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
    "2f4QAtEX999jibhSQrAET1T5cnq7rU3vbm3MAiCmbKxAywDDTQV69zujiRhqP1aWEgWx3sSgwwbfErD27vhWHojw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dGDZoCUcENTWYbx49Wxpo1SDiswAz4Xobt5MwgPruNt2dJ8TiXcYrN9GRZ9BEBVaqMhTmjEtns3UbeTfoS1kCbH",
  "key1": "33GBt966G5HavV6nUf8msMfMPv4kamCYdTk6UFDEt9aZemBQ2puroGCttxGP9ThXymh4t33W3vvgR8ZCZNmCjhfG",
  "key2": "NDv518wRof2ubuUFrmuvow5u6k2oZk1VnhdgPXSU4hguRrCuh3oCqBtkT1XhK6wDRtLqEhEnmLbUJ9dDpWNDD4U",
  "key3": "62aM3rSKBrqcYrx7xHUkSaaCoPBYf4PeCMhVyGgMwvTCT4VeenQHtQnoFudc1wfGLKHJ6BFrbkBFcSsCUj1v5oa1",
  "key4": "223V3qE9pZVYY4FCySk98KU5K3NFCRH29mac3HEjCtDXEZNPmwWQrHCTMdsqhBC6WDuigq6tFTbgJoBDVroy6DKk",
  "key5": "pmKAmSFUstLm3TDYPSUhkmcJSeZnN71UYAM9LcxV38kHJndJoYcgYUdhgzYjLQU3dBQiRz9UDFixyaTnNdoSFpy",
  "key6": "5NAjSX2QZT8RGXvmfqMTW89wAzoC4rh6zHJTyRdRXuxWbmMY1bTFZebMXKkJPXn7bjE9u6aFmWYoLQtFvJtXxhv",
  "key7": "3p83C7beZVjjYKBKEoyAspmwsoD1XVDjgjW56DH8awnpQ8o9nJGabRSRWW76cbxoEUMragB9NPBJbXS7aq1cWNRF",
  "key8": "5D4PCzt3stGPWNniSJabtYQAt3ZVSQ6CxPMC5NaC1AZ4KdfQU7CLHK4ppPm3eJEd7Zuom47LD8TVQ8d96HRX4FfG",
  "key9": "4hWm2yiHK96JdPKxpkZLeBNaBPHkMa3tHvG6QRzEcK7cmfFUAWaLpn6knvLuegrEMxD43K7aBp82hr8HkPP2nCfC",
  "key10": "5CUL6M4DYmmhP4FDMQv6En4r9jjYHZAscXr7Dyf3ybETyySgU24P9GCQRZ1mPgizQjrpw21AfgQCtKFdm74Lvph3",
  "key11": "5nuXC2fynShLusBABBVKsFw7LLVPw6uHqp9NnmAt5WRHWus5jyuZMgCvaag95AjQJ1U3r8AjiQVETadLB4vjfGqb",
  "key12": "2JgPh8WVDjKdWfYLSLuZBGSHkX14uGrBrzMgT4ZfPLAETzKrUTxHUo9B4MiNoTGzwq4RWP5nT2NcAAiNWFdh4JkS",
  "key13": "5hXu9TNGCrz4qiLkq7xk2hSjvWoh4xxNd2ES4LJVKxfH12RQGgkN3QXHd5rGQRmTWixtWoPHYm381YvoWZviUzSC",
  "key14": "4AuHcAse5bS3FLLsadqtJS1kxuAhq1wqebttWLBCkE4XsdD6geaWbAFeenxQbbFDU7QT1mhgTzS9F4aS6S874DxM",
  "key15": "62YTMs4QVWm8FyZ8GdZprsbphwYxBUhZZJKcXrLGf9xfkcbjfgsVLG8Wn6TfqrRcRHFCdjEwjRfuwHsEMbUDCCHi",
  "key16": "33MwExiZy5SQEWbMkag8PzkNveYTHHWam9HK42DpzhdCLDQBdecg1QV78fSm1jDPhqsebnqzuAb4jbwQkebtBsB5",
  "key17": "2AoHZArnvB7UsW3a2fNrwyYwPamxVvVmWrHePNAMQAEouZkm3HmsqinxETPVyNonqyq8n3Dq3JG2e1Tdk5pSNZCh",
  "key18": "4Yp3oYsYqHAKzKyikVgGNuADRiDqxQSoyEvKQfRMcnCa1HpFbN5c1FTdFqjfxVptpydzaJ8U2mQ2jdbZDZ9nhi66",
  "key19": "2ZXnT5STTwh6BrzFPyWLdmxyUZSdSdT5ZWHKUifWzbvXbnmPmGR98sD3N7aMaRwfzMjXUXRjXnYfSCK873vze8zm",
  "key20": "91VJdHG7cs2cb5sn9FiBBajgMv9o9wXvQoXP3qc5kJQBhwW3vPU5i7zWHM6AiwM6tMxuHrSvvxQZvTgn8ns8De2",
  "key21": "59zCXzjcn2Jy6Riuq4kEPWwzojWdVPQEnqHxQo5zSFYUUja23hsjFLJnWppDiZzApHg6aVtXqLNDSJBYCMLP831B",
  "key22": "2G2DTd1f3tvSG1fvrrq9F5dRUSVeD4wFxAC26VpfqDWQXhTyUSx8tYJR6u1gsTgCA2F688p7dgUj8iFpaemgc6ff",
  "key23": "3Pmh1m88CwAiTGY7ZVXX8nAfhryB5CYxNfBKqUs8LW2NENcC4Sx9SpWYzmVvLf3aZ3kjJMCYAGCVVstFwZDoN7zH",
  "key24": "4gugvgeSfYxKALCyjgdEZbWNWzH1xeVRkubcqwWgPfv7kzwECa3nBD3bVSqUCdxoFp6u2hgdVXsu7URneiJfzsqS",
  "key25": "4QmydjtQhLjYyUr57CYTyP8byt7wVqxvrrQuht5NQycxASaVLpVb5vdGH7CBc7rajzfmBjxDAoFNYd14nQwA9Xf3",
  "key26": "2iRWFDRnRZ5SscJUihJnS9YsVYCuxdEd94qnBqNLwB4qSWMcNQXQmEnPP17gVmXBqWp6bPBZSgJY1wD4sMvvw72w",
  "key27": "2eNopFrMZrCoC5UvJTez3QkxTeR88cSWhV6fmM2DbiLfZLjZDB3wZvZvprTpm1my6hdqGW4zHhzBZPX5994UoQrB",
  "key28": "3s1wxKCGPy2hNHeN3pafxVj54tu8VaxRAnx8vcjXPfZ4RJu5QvEGPgDGxokxsuTwnxGJgsWT4JXkYV5SFqXyEg2n",
  "key29": "5reCXvGdYCj18ns3mkiSvFtjuza6V4KGyk5mufJVNJAbj4o3n7Hqx7Z8kNntotN4NXYTvEgh3mEduFsc8PQ66EBJ",
  "key30": "3m3R66oxu22SzYsCcTWX98zZowwacgPRbfo7qEwNnioNVECRHKXbVeCqFNvwgNh96vxJPjd7uiLyAXteDX2y9N79",
  "key31": "2hKXzU88Pha2Vtn8WrMtskRSDKcsGUf6uSecMBdUrvPfTPD7w2ekJ2hv359QeSap6VzvZPDvMcFKXNpR37nin9ZD"
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
