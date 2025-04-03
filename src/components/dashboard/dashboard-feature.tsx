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
    "3oc9X4wbMkbB9fS9VX8hWQUNSJ8KHAigJQ5xtukCVoEs2AvJCGKBismCcpzEYkKLHNT6qeu6KUqxdCfK59TMnCUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzWbethNL5A7X1jD3mXvXFXxg9RcN7Db2XfCsVobemxbxwrAD8NHLvSBp97cNHwMKGgwWwkCkDfswAk1hhdXsMr",
  "key1": "6HKftHrcaFv3ABz4ZpP5pctHAwVz9uErprpFYNTCBawv2xsfMCNC3UXXSuaY2o6zsa73FfkWmbNHfgansP74jNp",
  "key2": "35GBq1UwS5C1HyTzzp8UA3C3AHgDSho8ME9DK3cU1hKQhyJVydp8vLEXpU5s2GSk1PkFYqSUe5ZPZdWeTLZukpE2",
  "key3": "2PiGUQH1MbMkz23NYEPfKh84qj8MBFL83Z8uWGgg9ZSdrKB5YPHEBQLK3HuvyQCNBmKweYLGDWWQM4XpRt3jzUHa",
  "key4": "27FCEcgR5SeD8Eg1fGsxhHQjWdvaEfFd5nVU9C2K2FAod71qsDCC5nTuMFJ4wDUhMVXXHM25Duk2EMysvdphBrqZ",
  "key5": "4ARd5gebYJJRrSKs33A3dx2xgXd6rxhTnf6E8V7u5EeJ9YjXEaQNxq55zDNRg1DjBqndj11Xp3PTVENWRcZsfyyM",
  "key6": "5U3A658vbGvs8WEs7aZFeiws9LrhgdvxrPy3vSHFFofM11mnNdnuD5oGzTNu2CjH6Y2reJ8gKVLEdyF5Dy737sXG",
  "key7": "ZPdytNhFDx1aXzBreEDYoEnCKNcS29h551NBxjKRHrMp6JNN4s487rcUKSPsMvf8TCEs8EWeRWH2Yc6e5z9o9Gr",
  "key8": "63ePGVs2BXG99RbjJzuFgmg1X7UpPh9PrEWuNrzhRANzhREYdHfHC9V1hWEosV5cnMJvYBBL9wdzrSVyfios6fNi",
  "key9": "3ymCg61t4x3osWc4t6QNiy9Aa9mgJzBQmr46f3G3JgQ9YMxBHhNdAUUaqpRhJHFTpu7vMy1f2co3ugLXPrkKxgte",
  "key10": "4uVqc2tFJ3vkyF4HYAAiqmk44T91yQLECdkjaprWVQUUC5VRaewLpPYYmR3oywE15GyPpBzpvykg4mTPrS5Zt8Fw",
  "key11": "2kBcmUAc9GeNaeZqJyppr6fRmM1AqdKb6uoy6D2U97gp54XFNdMdS5H1T69uH4ALxmzWhXj7x5aA3XCG5FG8DbRP",
  "key12": "5aaCYSvSjPHTTgquRTAUK91wRgL8tfxdcewfxx4CjbCzJMTwaAYsvsgXUc6eeDZpSFCdUbVRLq6DyWG2iVP2UFBQ",
  "key13": "4fd3UqeJto1Va9SSV25Q5XkR3CvzFP82FvdDiE4NX6rA1mQ2naWX4fbCSgupNUBc4iqJULPGv81MWANBz7xKm8aK",
  "key14": "2TPSvp7iq2wA1z5rrJaWDbte3TDktWsYe4DKDf3ymHrh58HW7idHLn4BpdAL67GFWE99L4sLAE6W7oA2MnZhVmpt",
  "key15": "JxeoJ5PVKyf73cLsWVzDpP961P2SCAaG3L6BC1fMhycubmQAFAh2pEhzX7S9mwyMDueiFfFSeqCh2Zfo9EV3toj",
  "key16": "4uJazShMDrjjcnxHjcdmBahuKL7aLnC7SMvLo7D25t7j6MvsGkjxLwbYLoRRtdAJ5GfF5te7Dq5AEDNAQcnxJ24X",
  "key17": "2ztgcSuE9PKLr7ad7RYtaxWEfjX4yZ5c3ehKSFNmQEai475HiKQMMZuLe9JcMtqg7DuXDVCQStu4EWGimhJSgqE8",
  "key18": "msB3Nap4doAmAoFtzRMGrptHUJouGp8dcX2vckkRkqaUvUgo2UCDRzkZMdnhu6RE9tBwxhrz9UzbmCGNebjD1zU",
  "key19": "659sXDXE4n4DXLQe4FXmzW5m7q432wVcpBrFsvrshg32M4KcAY4tjfaCjChSqWoxsqPeZf9cgNYAVSAg4bCZCWmR",
  "key20": "PuawZV8eA8ycz1Da1Tdm6mnF6DKa3jpCg9oV7UKC3fvQcZpg56dtEU9eACeWdYwz4VwsZZFaEoVTK1T8o9k9PWm",
  "key21": "467piCUEhSFT6Kwkp7C2GFx5VX6t2fKkFayPYxNvQwYrHnQvhd5KvavraVfo8JAFsFHCyKQyfF6rWNQxMfCzyHVx",
  "key22": "2bdQdnqv78Em1k9GSK7u4tqQM2ybtpGtGNi7HUGV7GmJ8YZmUbD6GUrxqihjSQ63kNVpUjBNBywwfLYywVpwcfCm",
  "key23": "3hSGTKKvmbFCRrifeTthHTeUiVHsTbfKjnWi4vmDhuby8nJVZqJPvpHiqs99Eik9NywobcHQFLbqYUFb7gBWsspn",
  "key24": "4CMHwU4RtuY6UTmaXQRGaCnTREt4pCuV2wGv6tr62uLVLB4gEzcb4qLy9iF9nSgHA1RsGwCUbUrpQQurJEPHKpR",
  "key25": "3mvUx8mGyVt7nBAKh13Kyqppf3SHdMhJ3KbZ3LjXFRnvt5UQfXeh41D5XziAm1g2MsSAJxDv5c679DLzwyK9C7Tv",
  "key26": "2xhJQAyDq74FmhS5ic7d3yMZEfy88V1cfZo9u7T2YfgoHf9m2dsp6SdYkz1p9cPPsnjUyaExvXNnaXKKpSRb8vj"
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
