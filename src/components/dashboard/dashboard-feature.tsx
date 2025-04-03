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
    "5awTCfJGAohn1ZKyzdTVTNefpnK9EDctjBASRBonbxfYXkJZKjCMn8hm1sK6Hg1pMRDATo4YuBVm4M76KZN7h1iQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2772ZWyd7kn5CKp95aEpkF1Apjw71DeSzqeTZN6gf9WDQNSH6owFcrXBWcdyFRWsSqcqUs87wvp4Sm8U4UxS2C",
  "key1": "2XwiEKyNkzmau8cKoBZML4VpKMKVvST3QtmFtPUcUsH4NnqVR32gbdUdjP9a8HdyGVjk18iYCnTpocRp7wMVyW5q",
  "key2": "2MsPgeGSAJyVcvwDZCLtj5Z93zWdvsBiJux7kAZvSj1pedbFsuEDkykJfmereXi7AazoPWroPioEa2g2uVkyeLdp",
  "key3": "3fT6THvyQyZjT9FBzNFxazvLjRoAxadRtc2wKwx1rDVMPsQjkrHZpEg1Rf1ngcVkgoLftMhd5UNE7kTgtVrgdRrx",
  "key4": "2nFxvN9rGvc2RZmBZiXE9cGZdwijY2bKNeuTBq2wyZLoeoPPNrX27pb6HD139Ur5k8cWn7RmxMzkfk4tUvPqjbmx",
  "key5": "kPruRhNryB2TZzgs5iLrtMELGbXNLJayxh1H1Lv4suvawRYnGr9887FEtLjgCjgRGo1os9P4746159ajxwztmLV",
  "key6": "4AHFK9sHqJteaDoMaSZ8w8mXwQEBKyM6ntLAP9JrfHsD7WkUpZHARXGycnu7YM8R1CgXMKPDKSiaKhaVB5fNmQmM",
  "key7": "3VwpFkjoR7q62nXhjcFNF4bsgPNVqXa8BJGuYGp44bBhtPUKMgmF2jRLT2M31pAK3jxKkc31LuTq5d7bKu53Xb4v",
  "key8": "NbnbkzTUZzHDAHedekstoJ78Zh5iHd4Douu277xFVm37wDb2PJayEnsfErzEKi2ymTvdLLTHwwvWsA8UnVyhjkj",
  "key9": "3kS2DR1UiWitX24UdD5Rs5S5jDMKJJm9jdHsAZDPoNNWFTixW3EEM77WdwGp52zpnLT1UHxN9bRaheih2hfevrJz",
  "key10": "CYvsnAqHPwCmtD8Gnrnk97Hpu7cgc3akhFjDZAmCMQauMdprL1xcw3htCK37x75ynevaNtvWbkNMsZzd4KNa677",
  "key11": "53RM8hrP7p7hRBfyzzAR5V3x3spjaJYpAkMadafu9vey2A9AQYnYhRYYM1NNEBBBuEi648NL3DYJKRrRyGvBRuor",
  "key12": "3YUfwXaQ7tpYXyW2qBZKY5SzYJm52TZRjfp8JZ4s8hK4op2iBg1TeN6aLsQM8AsyyJmAsDwsHF52y3KLxRyQQefd",
  "key13": "dQwY4c5TEErVjeBjNe2xVmtAmaAzggbbiTrbXTkUruqgQ6RtygV8R61mfNmVdcwF4Vzq9fKBh153zhsSCsNFX14",
  "key14": "2TwU3TRSeee63eRM6XERr6xFAHqHBbcLoh1pz3oQmm8xR8DTXHCmUQhowhDA8hQLVNWYvTm5VQjS8bk4RFxCPCpH",
  "key15": "3ix72dyDRSjocD8z6tDAfCsuzcbbDA2fCjhfhKxxCLrUEXPZgrpKws8Qux7JBGRhxf7pLMwN79pa2YaxdZgv5jge",
  "key16": "2aGGPok3p1hQK6ySsbT4deXoaKoPfThKrGgPEkdTewwN4YSgGke3fXqxFnxytJo5vLdiQMW6ePUmrU6tjCkZLzz",
  "key17": "4fwALUaJKJG4inMEhJmcL9yH9LTVCqwXg63mfZpN5hSggdquYXBRvsxK4AWq6AyM8k6D4zctYsF3G9dw4FyWt1j2",
  "key18": "5dppXDH8zUuwoMSLZvt9Caum8djJ4TZSGDeRmjq535ow4Xtm4a1EotTTni9MiQS2ySe4t3zZzmAGNyTjnbhoqZaJ",
  "key19": "4Nxw7U1p3vMoBytC3FLhaNk7iXKasXz2CoXyfznNnuATT4ZhAfh18okSUT7hy9LFWB1daMTY6n62QeW6PUDbxRzm",
  "key20": "4k5ph4NJGsVXirtQ2q4Z1M2xF7i6WESLwdLAGBkdykT8ZFGmWzUURweRNd8zi31bG5ECgphZJYFKXFE6jTHG9DY6",
  "key21": "4qxwZxXK9i32woU8yRWQG5oVtP8HoSgwf6oBp97uBWwCg9Gz3vfJfzqoUGocHpdQR5Yx2ynUJouT2F4n8HKYDaKL",
  "key22": "5hprAMy4fBCS2BrHZVMzJGxvgEZNrbxvEdWmofM4RbmWkCpurudWPJUn11WksBsc7oaVbkUEcNQnKAUPJg5yVQzF",
  "key23": "2pihvtqDj6rLRpg2ET4eXpvGWB9WpXBB9MG4ApZJNRUg397zeYvjMk4A9V8wz5KB4DBkdNdcG6devFA8MviJw9Wp",
  "key24": "2WujrktWMM5BcFetgdTMruYnK2hamanC5wyhhASKhiG4rVwEegPDUgs95dY2QT6nqr7zg3SWabXMyFp1XorhA8u9"
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
