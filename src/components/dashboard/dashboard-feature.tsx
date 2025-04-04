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
    "2YALu85USmiYiXJFhY2aoyokuwM3YstpUndXLqeBR45bvW7ogp9efuW34pwsvsg5MmDafjauVR5ai27mp6rrg5uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aatWu2jJBVLqzsTutVkToEfZFA72NQPmj2NC9rhxfD1CtVdEGFhwgdPqwHa25JQWE27U4oxVScBJNiF1s5swy75",
  "key1": "3392kXUzewDBdvgc5mV2JumsuZ6BjM1FotDyKyKvnL6WkAsofmucZdK1PxfXDwtNuDz7hCdBC2Hm5yUMuTn2rho5",
  "key2": "5Czqh4M4CmkurdVa9e3wA4e1WTzRCjWPM4eVwb2JvRkvfqMB2bkoiRJBK6KaPqDhsaHc6KpMgJA6nqZrByprTQJ3",
  "key3": "3P4aTzxYNRqSBiSzLpfjgL78xApfYukSdx6QNDnZCLqEeR46UJtNG1HjnFrmSAMKhoBkXtsqusL5LXJKZbLS4sNA",
  "key4": "3JL671JvMTvUTc9m65rwMsUsbMjsVz9pVGtSBiuBbKWTB5w6uCzXDUqNkUQbVg2gjCDB9Uo1VJzY3hsWK8rezY9T",
  "key5": "3WsuPhV6wK7qWmU4rgBH8HZsKSiHG9SrW4yP1J38AxEo5zLHaUuWDB92ucZmkUvyXtaB1ieK7dDp3iBGXDndoh5r",
  "key6": "38vvFPVtFn2pnP78EgQ9Xo63x6VBKaGLtmX7NW8PUVax3PZ16cbvBP3NDYt8iyKbrEQhHDJ93ghrsqz1ZhLiMRqC",
  "key7": "4uC9Q6DpFkoJ1RdKUspvBKcPNzCMnZBbJK9R6Lqoa7jYMEPgW8aQH6d54RWsFusQZ6mp6stZ1Jewtza62Mqgr7xu",
  "key8": "2XQK6UfT97RNGAXB3BBDmDErdXidFnbZNciBhacZFSZa2TQLpUgNMSB7EtjpctW9R1K252ta2fRUqcuoe4GyEaNc",
  "key9": "UAY98XB6s9iY29Qxsbnw8bj8sg3BpCE3EKvVU8oYdHkQYHLa28UmAkDuhWwSH1xEWSJKtjZsTMh38CXPAnwHZ2o",
  "key10": "3fHgPJsTPrK2RSiWkppP3stP7BZb9HCerwc3Kg9NU7dhXiW2Tztt2ZZzJ2dgcEtUBb5rgvbzAuVEGJSh8bHaydcf",
  "key11": "4Dho7BXWhTKYWQ9vXpCtyrugarL6xRayGiQrbpit7dK6xXhhRTaQLvgtwDNg2v8SpZJSQZPVj67viDEnTAs2KMbe",
  "key12": "4AWYWKVdzFyatFKbiHLtVyTddbXf1Foqh5k2tDM19kq8q1A2GUviCAapZPD2KNiyeAASkWtFia55VygWjKR9PQJY",
  "key13": "2Wu92C5R3U4dyVP4Le4DQKgdNUYbG5YrbVLEkqCDRopy5EdRv2UmRf8SKM8d9WjWBFowhGzSEwH9WwXmdsyFKviG",
  "key14": "5Nrs5DFG4Xx6MHqLmGd7BBJq8KxSZHKph1TqzdGzjL4ZaerznXn9vbESxYeciRXSqmtP5VWegWgh9k6oLSqaRE1j",
  "key15": "5uh8Po9rMAhTf7oXm1v1UudkiuffAg3tQYtMuZ6nAHT8QMXfF4236h9yPJUfyrX5DEykffQq5nuo6decyaTpJq7t",
  "key16": "fnnA1nejG7N8bTYTaqhJnubnvgjFSAnw1SsGYaVPUEndzdrPRdh1PVp2LBXHdCMTysQzm9RnKk3UxyS8DFAh8co",
  "key17": "2ZAQwhVx6Ar3DUyoMFjAFevKiBAnhxJYR2WvmwDxURJrMsV2eT1scnQTh8N5UBKyThfhuMfGg9WRwocTCKBvbPqF",
  "key18": "2W8ad7n4RiQ2ds7pUmtBMTZZQ23sCVkJnHtYPcxJ63Heop3GmKNDTKq6yu4jAwVVyJcBrxnPsXkm9xdnzaCcvbHw",
  "key19": "5Tkkps7A3rbXycvataW5PdeaxBdn6MWoM1RhaGW8JyjxMvUGoAfjDCGKuxLjWMaPeM8aFt78M2BwCEzE5KjYLhjA",
  "key20": "3j2ojbw3YTAaG3FNbed368Asvzkz1bU6KwreLV8mxtC5YiDBrKHATeo92pdsvBXsLgMsm2gjrEQFafx53TDgF5Ym",
  "key21": "2dJZyvdjXqpgJvoNQzWRb7yyyj7qZVX9NcZbHazxdZVFDXcBJBortaZEV7g4reEd1qJgmTTDYNMVJ3czKbG7x85j",
  "key22": "5tfQvbaNPGt3ZZK9YN13qsNR5jLqpVt3Fwq94cXM8XC9N5BoRfSF94gbEi8s2eXnvCtG4kQ7RWncstGYtt9K9k4L",
  "key23": "3F1LL279cNvrpR7QPjzm1GTUV3YCK8K8Z8J9V2voTVsNRCoGhkV7TpySUbTpuDZLn4mc9CNiZ7KNNWHL3HrF6H97",
  "key24": "3hFawYsePYy2eNc2EgCueh8QoRiLrWxCiMEzLgDFvTDWbpauwYNyK4t1BfVqZQPHubW3APbjYQsoN1YzJyySEvqR",
  "key25": "3gMi71BXGL9FveEJS1FTj5Z5kQStz5hnGUzwPnAEgpuitHTHqP9WfdNhmTLW6ZBAnUrvg5i6Nd2ouFGgWe6KX1h3",
  "key26": "3YjEk2i8sVYM9kzfUEwQi3xcSuBMuA9CY3WEaWDNeX6dQzv8fqjtGSimT4R1uSVvj28JjDmUgLpqQb6UmKJaZBua",
  "key27": "5P1ZeacJzXB1X2N1Z1Zv6Hz3vFis9cbzg8L4ncsPWHpbS3BNQWskC5M2iusZvsMRDEgNgDtrqcyBrrNHy5aykw44",
  "key28": "3D3nq5tWaCMrd7znMjjksAGkPeC6csB2cRjND7Ke3HRYUhhh9xRgndjAADipsuGaAEPxEazZG6Sph92S1E1gwHa1",
  "key29": "34NoXx7LeWaBMYaQq2SCASQs4xWdXmCreMFxhfsfnR455kqrJvoWwi2pTUuxpN2vwMKXowdG1SrTW3k7axPggCzg",
  "key30": "4gawz2kVYD72aVhwKmjDzctrLvkL3sDctfXxPpUqwnudnra5mZoxjE47uCg6N1khbSY8TY41vnZxFwXZLSXXd6jy",
  "key31": "Rxjv5KmC2vvbhRbbACUXc8DQZEyengU1WFt6Uitr6wRMj92nosUTM51miwyQyFRpZwTKNZ24GhiRJdKFbQeGE8N",
  "key32": "5vBYaDAfBcTJb5dp57QVLALqRYgLLPEHDTwy8C7vmhvz5RunnsKJYJ29QkLFJvggrGEkt7dqFEB3dGwaS51W3Djh",
  "key33": "2VXVVKMJEgTMmMH16mhoGxVqxEkCxQAHuU4PR7Euha4eWYrCnVfWNEv4EtfnJ3kemr31PowKqnBUxyoVPW8yTWSk",
  "key34": "4nh2dtebBx9EGoY5nUTwQYYQtVCZEnRLQNiLKNFeN3Fd3yjHkx4b7A9zAtd6S6bSsQ3o7ubyZq3asTdPG4sJWu1i",
  "key35": "AB8swtKQhvHV8QB5va4TRMhiHncadbnf7z5GBQXyCjuEbfCm8TFmi5BAtKQYujay4hbXn8K53dJHhQ3zreoqXji",
  "key36": "4uKWCFMjc9eat4ncZWbsxWDj3K5jKWeQhdeJBAAAPuwLzxtgEW3Wp3N47sV9pa2vRi8vVtToJrCXAx1z1VKqT2vW",
  "key37": "Us9K8RP2uMABp9avHWQBuTrgh1ictxLjwBrRNReWSWtQv2mRw5zkpYd7Vq981JXyn4picimYzfGW4YEizNHAUpc",
  "key38": "5CfAgkCiqm74f6uf1qt7Ura6PNfY5iSVf8Ddy8ge7Gcr8gkQF3my9nj4HZNQpjpp1mWCEPAMXH242XLZhuBd8mY6",
  "key39": "61hLR3fpPJKwtcXoMBZ2gfqCta2gCE8ZXU7yrsC2FdhhVgT6JyUcKyTp74ajXc54KWaHwYUGeQJy3xuXricHfE62",
  "key40": "3eGcoi1zg1n9pNrkUcxNED5jyM2GRzQiYVM8CkEUXg29fCeeykxY9iWYUfpnnLErKUt8WWy8XAtdAQj6sRg7hZbj",
  "key41": "476MJpTCPnuBFFx4JqQQtM6zT525TB5K5YdyS6b8h649RCjAPPGvFTgB6SYHLADYoZavyjNZzWWgJcLQWfDDaFoL",
  "key42": "2UkknGhNfUDauCwRVwwSogMbwhgt137RpLNRjYofhjtfetPcWSKZVrZFmpRe7BPJDPTpZGWtGQNYox4At6bn5rR2",
  "key43": "2T3wvSjBf4ShbVVMoy61TTB9rGtPmaLvpaEZ56GCWdBx3h8zHhHZjrumGarSUfg951bZjyeV8Eeci7Y4LeSfWjCa",
  "key44": "52b1Xm3hr9oWxW6XkwVaRERLDHMDdjFDK6fAyCvuLN27DUsr9fH3T8TndgmtaWAc2krDDoP6TnUAd3jWA9CYNnim",
  "key45": "3KAi2umVRWSc7oibSssyKvPaxmFSWfbTQ9LuANRYWTKmmwpJj24qaMgP4kqkLHXhDk5ezeYcBAGeh5PsY56csQxp"
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
