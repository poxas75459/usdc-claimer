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
    "4qzDY8iZgyy3AkCBHVEpUzrsAR5ZYGYHdDsiNesmAo6qtUbakYjNaFfSYNjLGFNn5KWRWP5UEuLo5VR6chYXk9yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SsLC7qy8qmks7pCE6xVZNcMAVJkgmLu7YiXEuZsmth7vAUUbjtMXWdjQzMHvVJF1TD1coxjQXFtnNzZAujqacSb",
  "key1": "UWbsd6oNSx1UvPkg6UZ8X12hFcfaS2H9spmNFxQ81bcJr2vfWSZAwTZeDDXnkeovGxHeU1DNJ9cDeba5GzV6xsj",
  "key2": "2jDHEJN7XptTu5ZJUHcep9Rjkdq5Pba86V4pDgD7mNt7ET8DsYbQpjrj2cnExiVvNc8JSC1UjdStTqD39nskJRgQ",
  "key3": "2u583tgbSBb4VJe1VkDttCsfpfafwTHVo1vqZdAho4RWLvsMaA2xKLVzJCFPoqsFcBftzfXbVmLFZZoscLCEuyfP",
  "key4": "KUYhaadibjKV8wmDh4szETMaDJeHkym3YHaikQ1jtHreWhfkWy4Qtij2mA8XaAE5M75W3KkpHBdk5GNpBYtWFM9",
  "key5": "3DFqi4jiYEtcpz67P36eX5qL5mn4xJeLKXpbQ7rK6AFW7WrkZ7vLHyc9gxSJY2hAnv5rFUWtTaoDcPufa7UMrghR",
  "key6": "2UCxgopQTzVqBKk1dGBEe6CsFt2mZDYxKU8tbuUfgoX7dohDdwhoC1Bh4cUyR4kFSduZ2RHWTrE1jinCJ3ebf3tU",
  "key7": "39jwJEzLawD6JvLmx7umzTH4ebKZFNNL996oAjBwFtWPKZ4RxALvLit3EZeDZa5jcVbaexzZEeMcfAU8bYoVGezQ",
  "key8": "35EJ5BrjAZHdtWHm7A3DwRdZYbqiG9spowXqyBEMXZNixGTjq1dF2w8EgQFsZwyUWxqoYgxAMeoyi9PqxgDgTyzp",
  "key9": "49wtibb3JUg8tHhncD9SrcdFip3wvUFJr2GXwE6TAbNmj81zcKgGUNDyJivK5FQFZyoeSSR6M9UrQavEgtE1tJNU",
  "key10": "2dYUkJZAjL3mZah59WZtqFCsdXTQ5be8S1DtdXAXRdmXhijThbvSB2ogRxJBA29TBP4pJ4nDm5yNfWsMt9kppzX6",
  "key11": "5ywi7oFvbksmqjWZ8QsgnzfXC3GGJ8aeXNNYr4bYTE1fvCgCHxEuKPxkAoanZaYkRPAx9qU2KdF2a1MAtWxHVn6v",
  "key12": "GzUTBqwuc3VVMC4t5FQsmTg9KGCp42NWcCbn6F322dbcY5Snx7uxMPkiYiV6M89spqfwXySHiKcNSFYRnV1shxL",
  "key13": "57QbQHDftwQgc4QsHm55UMnyS5qdr1VVfiqdKeemSVt7iLuM7seA8jH6XoyiCokrAz8EU1U3rNr2xTjUNpPStCML",
  "key14": "2f6ynVPZKjUCSf1mxGGedVkgL6vFKjDv9apUU4djnnKkJkJhdSs5D3EjRXWiVnSyHbC9XSt7SNnkooHzyW6kp1c7",
  "key15": "4w7sYJEuMnX6uoX3DxRTYSLdqMb98WPJwL4cPaR665hVu185v4m3AjsALfs3jMATAC89girPREFGprRfiJ7m4ESQ",
  "key16": "4taHC1nUBanADZBFbeoLyd5q81tsJzdHnoNzi6XCNvA5NQDoccB4BU7UWh4TSwV7AfrM6n4es1RXf48Bg7g2z6xV",
  "key17": "3TBGHEknqkuoU61rNWHYuD8uLLzFPDezWoFT2b8tUkMtrTXrEE2nuadjpniEVXsNmAWbimcx8gakRVV9WJotqV7x",
  "key18": "sN7aYW9rk51QNSAjpwjG6JNCfpsrbpNnPP2wVqpQ6SJuDmD3THEh5QL26SX5GGJmqjCAmAcSEoHioC6JEKp9hy4",
  "key19": "4DEuMZGmovL1eSPoEXtbFPWfTXzXabfMrvoFKFPkzdKBymPyoceeFZmmov7jS5XdFSwQRfpUMu8VKLS4h7cJBw7H",
  "key20": "3r8Bsrnkh2nBDMexRX9iAYFGXmgNqJD1DhJRZ56PB9GsT7edHBz56mKJniu9ftLszznpPkLYzZJ7QAoZMX8ziYHG",
  "key21": "65jPobKdT47BdQRrHmN9JHnpkN5CPbbeX2MyCZDHf23RoGoWarZo5ZkhhuypZT2ZL2LfeRqYbqW4WqNp6kAKXYPi",
  "key22": "5vEHVo98KUCzDgbC3wonLoQ1b321fomjjd7AxzY7Bsn2LG2DhBJZeJQFcA3Z9W55SSYwPHTDvQ72eVqe5dD8Ysfh",
  "key23": "5JepTmoPc47JQYSvWYexyLH3e1PbYCGLqoBBrrkHBJi3q6m4JoWgeTzwb74k8bTZv78XeWtgR6iyPtEe56bybVj8",
  "key24": "5eY9qVat2KPuLbVdbSeuiVm3A6Hhw7kbaZKXXfvJNvh8awFwprrP8SG8sUhazT1vEs13i5KvLSirzpAg2HP1iYaX",
  "key25": "4La1994EeBTxRKx6W3fybV3SiYCLoivifGTGgFK7FmqxbdnuBw1rEGACtUmiEZVfazmXfVg3QmLZFsxCUcRx6YCY",
  "key26": "23KXYtX8WL1DBaHRCum5GmRG777Jzfn1ANjkEvPXVKtzMMU4mZo3riziyZocHbgr9v2eWtnyEExgJ2fMEmNNm9wH",
  "key27": "5LM7ACCN5EkKQnd3keuY2wdokEG76a9s9sC1j4WGnhHwz3BkCJSMhJwCQrEGxLsPKLDJ4GWKBqScXNP5CJueof2w"
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
