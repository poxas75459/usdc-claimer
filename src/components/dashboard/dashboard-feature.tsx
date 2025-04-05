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
    "2UqSUGYRbnz3bQnBiTr6nhhddcBJQKEBqjmHjXiuf3sRgSJ1mvSLg96GNBjfMAgi6hb7WWBemkwac4nncsRfB6wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31E6EeLRH1sfbaafEq5EoekLcUe7aapTS2vun2BTzjCVeWnaANeCyPk2LgAP3Z65PsEFKdinRUztLn85XLY3JZwL",
  "key1": "2vC8FsWoWX9cmuCK7ipz9cEYNwXKRZG88Vo4XE3i8XQZ6HhYGPcbyzMEyk8YsjxgND6xZVVkWZcBHgrNR2BQEq7o",
  "key2": "31QhGNbwYcpLwrZMxGaFPhbnVwvVfmuuWnpQBNorw9bWBEb1EyagR6UJSzrp9fcgs4EWUBJLNnpwsebTun1vCdc1",
  "key3": "EyRohg4pC9zHvmHwUhnrgnJC1QURP6bqiX4cNrx57gr9PMRrMqJgau5obNdr1y6eMzLA9YxKiU7dTtkSGoPfRq4",
  "key4": "5Qqhutx8JePXmqoZ1TDMt6Kj7Pchgdf412Ws9bYt2BJSpk57neMe3AgWkjAvTwNC9BBBz4vQTDEL8ffrf9Eq2dfS",
  "key5": "5zm4D7CVh8cTLQiAVAvWHuexVjFQypqYaWzvJZKMJPeTURYC2HfqEEVCKHpiMq2UNXciZhfJLXxHS1Vp3Jz4TrmQ",
  "key6": "5Tij54eFXZnFFDqNLmazBdMtzLqjWWp8FrpdNvsWfTW4NUfjvVaH2AMu8Z1VPnpB8LfN6dN2kB9QYxDVH1FBfZL1",
  "key7": "4m7QCmyH7CgjFpmn7kGUWPkwBhj6mwPrH8Zm7wY4Qr14qGuh97Ur1moMR2ERV682ishg4bRJuG2LNHJMq7iqtyLX",
  "key8": "3CEPJTFmJizuxqw4n8L6ETmgQhQ3k28jD3bDvQ8WZ8t8CBbMDF7KF9As4nwwMgvYddRdRYgHZ8HyovTaQavsLK5F",
  "key9": "4KDucu9Cogi2REqkrbTCiXXewkia4p2k2ueJiCdYeYnJEQHSHNPefPLMLppTVFMVLkVGQdvDizxtHbCaRr1VCTDh",
  "key10": "ygtVGKw3iLgjvojFQjFWfUpf4WZQyBygMfDmDnV5qe2qKUWc9TFztvgvmW6msfY1MJqZXDRj2EQSs13Zeb5innW",
  "key11": "2EjxVPs1FYW32y5785DhTveUiDsrCPrBA1E6q3SqswcRrJeD2riGQ9ARcLrfmvZZWbaio9q7sfbsiqLhmYKUssJa",
  "key12": "4MmfxktL4QM2WLS8gdYMccPYGStnB7m7Ub7jvF7uv3xbSRR7oVLS3pgBABYDtEnZxmLCPhkPHKaJwTdSrBQ9Whb",
  "key13": "4B1iH5NAekRK4cyayRwVFs8K51q1HmtytoNKzivN3vAj79i8q3yXReDkXXF81hzEbyWBiaEYugxvDAWxJpKt4XCL",
  "key14": "2ejKm66H21BFzMbbQRLJMzzWM9X8vmR8KgyeCCXtmNTAi3CsUEWFFuBGfa6WDNzU9wAwZxz36gZQULTN3VBnmMuc",
  "key15": "5onYsJtdu6fPK6AtGXJzqc2ZScXUZbqWse93aCyQBFNNAZRjZvTCodLauPa57t3btBu3fLpRb9LMY21XA2pS3qKm",
  "key16": "4mRZUmWFkpCBwufqAKF9rSwhrTev7ZCidK7Pnkppght9DWyBbsDt9iTE6RGzH4Q4euqeRT7p1U7NjBXNoCdGhZvN",
  "key17": "3zhvDLYAQmqdaxLLGWCS5ZnpwepD2nDA1XGcqahxWFbSMaEhmqJtkkwL6aGsk1n5xeW7vjHa5TswvXXTqxL3eDVF",
  "key18": "UXMU7ACujxYh9gW4oCDvvHZemCJZBHm96mmQXz7G3gzKegmSnAvK4BBvUuwoUgHn7e8pt67w79GTZhtqaxdKDoo",
  "key19": "5iAnwFFjuCcBeZ83Lw9Dk9SHnPaSCWcNhFY6YE7sGMpeB3aCYM2v1L4MALWb8ZSK856EizJW7P5xufn1v4ZHqQb1",
  "key20": "KEyTzzSAEyZngq17TYeT2LZcreodohNX9Su12zJcizdq7pWtQDj6yQSzfDxUU5ByyqWvLzLz2xcRYPFQTmrYJFc",
  "key21": "XgEduAh9AcpRKPYuGCBxFwJfXah9yq6psxk1dnueWLkPeTvDEdy3xcz4dTEFHxWxLzmfhMwZo6u8XHV98gGS8CW",
  "key22": "5Z84P2CRKjVW6kNym5TgUDLHZ4B4PhzLbbQuvDrv1YsWYjvEt3jZfqeJFMpR5nbi59Ncu1kfSNGJAd5wRHesVCFY",
  "key23": "5ssnuk21y8QMdGDM7MUttZHsbFQPFKtMEFyW4QfhHgRLSETQqQFwKfxSrZ6XTL5qm4cDnrWkKnPQSWUrTHBgN4rQ",
  "key24": "2nfEHbG8W7bSnW6dYgXUchJh9ZxLUkPc7qxRuNMDXV2PEnMT7FkUaokTSyaK5uv3X5KDu4acBHTLNUDwikeWsxcs",
  "key25": "4e5xmhuT38kkYEggKrmXUaNNaQg6AuC9DE5VJwVVNWdbxYudHg4umJ1Q9SJjTT9ntaJDJnrh7zbe5FJe1jEcnS4G",
  "key26": "4JQw92E5bFGMNFKgqmPUwqZVuLh7fTxA5F2qBFkfHM172n4dbCaHr3puZXDKbLaA1ct2ory9jgUZzPBaQ5VLh9nZ"
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
