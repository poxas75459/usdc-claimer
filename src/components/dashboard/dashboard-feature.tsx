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
    "34o9xfDALQBtyfXksZ1Vf46QTTa6iDxiunQeXuHDEMukR4BcrzKWTWqiJ2tNWCHuJ92AaP1GgXqM3izDrW4Jyarn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZYuWEtLoQEwvNdAqMQFfEaMWhPohXEFn7XmUTCzxSeAnAytPz3PuPf96Zn31bA5bGe7fzsjSxy7oEsuauPHy3j",
  "key1": "5TrqNP4myqHbxVU1VmNSXoERLtLYbo6xmLKo6mYkgDXqHmbDRnYJKMBPJznMUpnX4tTnMTCN5FMgHJR8XAcTRJEa",
  "key2": "2PZbQHCKfGTAqAdUxSmTbb3q1w9yyyjmWSBuDZmF1XKFECxq1NRxWXcqrdB2nn9XLDeX7XdBGLuuBMtrtRrqCEcR",
  "key3": "KEfGArHPwFgXaV2TMVeLisoeq3njqZRym8N7rVHoVQnaeF5MbGFcyxnTnuNwmd7cMsJER5em3Fe4tfZuHoLzdzG",
  "key4": "HQmCVY6Cxn53NQS3JUxZX6rvMRzFXsEvxrzeYyk8oWRVNxrtGSPgjajGu8JQYryPXe55oeLn8QdxWmAe9R4dJRA",
  "key5": "3nBBXsbGqQEKL6NiPv3WXagmE1M1VCAowjWpsotsWdF9SGd9NhiXvN6PiJrDPuYoaXqmVuheb5fzRq1zcDvXVH53",
  "key6": "3NaPiLSguPo28STjBbcYxPL335fSmaSCG8r4LTPSzQ7Lpu8NHvofjmyZBTXenjLoCFvxDk39BxCRZrkB32YVyo6p",
  "key7": "4nBKRBJDznGuRX6S97ygJZdG5ZPtTkPf9ZBAAoxq8EvyuYUq2gfR7Nu5RdPvPWUgWU3mHfG3Cvbr3Ufjw82qmbzG",
  "key8": "5ePrivr1APdoHAt5pDWcSpA7WfLfMTitzTLdAimJUjfYV7RDhHsnXAspYXVuZZWz1eWqV3ovpBHdmHW35M5WWUmR",
  "key9": "ShhwUpn77kFyThV8UHsG8wTsFmGQZoGqMXsCnKseNRMVA2CrzQdPxrDGXYCD2urkH1hrEMtxmDRoDVj3bWpVjoJ",
  "key10": "4jiqa9LKh19Cs46Mte4KFqnabNPNfdRGk8FuZxgs3a3KvsjnNtFpYht1EtghSMJfhDJumMwCZdMLaL7f6djXirme",
  "key11": "2w1MGCWkJ2HrnnRsgxtwkTWQPnrScMhZZhBr3X5HBixnihcPq4ARTsq99Har1x6KLW23Ao5kSpE7XQFmuZi8pNC4",
  "key12": "5MbXo3hVnhy61KKhoFFEAheu5KZgdEdTfBJpFTDPFh4ZUeZpTUVmETquRQGKY8Dqo1Lsab3xR2XepcAPjoJtfSh7",
  "key13": "3jxWoNchg54TZrAZbZR4CkpzBkJsDU5svCE7P9Vvqi7fpRNa9UYZyStPN7tYETnxAQ9kCikShw9k3qLwf5QCPpaC",
  "key14": "5KzcMiFFtnbzJWjRYmXzRdwZvbrHC45Eor2sg1aQ7H51qYMVfw7esUMqXP3SThKQQEyZzs9fSdBNg2AA5xXt5JSB",
  "key15": "5vQcniSYLwRaxbwPfxC8KGA2Ep1mp1SSA1ygvGVct284B8TH7p9iy8uQFPPLpeTtSKApiK3ewZtQorvzhgasK6sr",
  "key16": "5vJWFF7X8JTeRX9yPHEfoZgLyxv36AU6UQBSWrnYDVfFpCTs3kPAAnecUZiePdq9Jip85DQhEknTXpFjiJs94omE",
  "key17": "66xGReD63LraBJrLs5trTeJXTohdjVnZrNwwyjs1bVAuTPMnTcvRf3zdevzsK6AwyLJtYY4pxpHs52CVhSHzMCRH",
  "key18": "c5Bi13jcMcYHkz8tMRWyx2Cw6V4wrNvmo8gG9AwSdphiCwuVEgVP8LTnrZUiWHH7MvrFTKiPydTwNrtfAXPw3yB",
  "key19": "3ooibpPQQREeHWRwhjv57wABXdUeLpfAK3RfWgsmyAZ9U835vBPy3ojZfZZtAyGoF4qWGT5s6mk8udsqmiQBvSHB",
  "key20": "5bvYdjq136RiD8Vwn4ddiNUVdLhiJR4188qm4S8PaEKC6zH9nsqajrSzz2RTuJkSy2ZqoGFzi2SVVPMe2pwxSqNb",
  "key21": "5Zsn6DtnMpyuY5h1FRjiD3rErg7Q3aqZdrgFCw4n4p4ijTUzmYQCxdUgSzCaCJPPujjwx43jGHnwC8uyzhJcycWc",
  "key22": "285ZoXYcLkUoATDxGqUo48UDvpxjZav25DZ7QVu8HcUZrnU48E1st8HxPsU7SorGNkuSn7mMa7aUyQ3cYNzp5m16",
  "key23": "5FioCEFN6vDyKM8PpXktAPW8oW77EHZV2JCtB1WjuufngywM9fp463atMv5NvMTe8oXhCQjp1DQUoieuYaHFsDX9",
  "key24": "4JzW7AqUJRMpPQHoWeDuZbiTFZZYv3zB9dH5vPiPfnqGr4vsMVDuCrue4jKTWRAR2rg5PjTDCXrvffo3Tt12pMFS",
  "key25": "4Gu95PkhjJzyBX123X3CATkDQkmdJFiTpRZa2xH6kN1E5B8uAiQ2c14ZPRXsJw6Ae8HYT7AHyH6pJgHLd3vR9mCH"
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
