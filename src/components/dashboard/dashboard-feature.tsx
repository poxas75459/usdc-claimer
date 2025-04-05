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
    "4F5JJ62NnJHRuG9jzktLEgikaxjB3wQZ6aeTWGaMCbsUt6etYPv7NmQTbDMxLeK9WJzbpAy59avuz2XRjd7hyjR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q47F8NKKZdBembL1Vkra12MwdcLeGtqaf9KbXvrVr9j3Jcr5QoKTNqJm27UcXAj6XieeHASqsRbqEhX9GNnFqbY",
  "key1": "2vrbhgqxFbx7SJMRCnoYUh3FzDKohSxEUoSX3d66kTpE9tTJUvYbbdGC1kMf4HsorkwBPjBu7SmsAczxSAHixgG1",
  "key2": "226UHpeW1qUDJyN1YBtgMRqNXrsdejaPwwuQwqtRgQP1dBfxr5oFnLAEZS3DcjxoNamARkhMcFeQBtGa4JdUTdrJ",
  "key3": "23MRcZ6kFDAMhLUVgks9jNhFmvrJXSj363N8a5hSFzBsKczQXCxVGdzfoGBZtqGk4FarFucsY2Xt7VLvHkdDx4JE",
  "key4": "5Ar8EH8UaXy8DskBX4hduPdc4tyHVXJwKLf5sSTprScGbmqLM3LKLwPhhtYdZStHVkuB63wmEZP2fkJenMPjiJjG",
  "key5": "25shHHeUqa2EZVNW7YY8yxxVSXuDdnjojEnLHJ5vjnV5UWyvWk7NjC3WYEpshQn9r3W3XXR39tmoHrU5bYRwHHyq",
  "key6": "22Ds11uY2rMDcSnX7NAaMiP2uAr9i5Xep4VEpatn2i2ETDpGnUvZw9ay1dX4GYPgAyYFaeizdg9rQKS9LhitE8rr",
  "key7": "otYKsLMEqco8JdwPnW7rXHZS4wC1G6tXo4RPCneCtsi2F2mGe12gdh5q94Wmj2w8QXMG8Fk18aci2hrnPdSxsB5",
  "key8": "GEsNjcixNaN6e92EJrptRHMALa3uEjLmKwBvDaC7BAzE2Bw1i3UyPcWhXGA2DMh5GwqUVSjGibtsuVsi1eVWrxM",
  "key9": "zHjQdGYRTt2B2CDUWtRYqPoErqPyZiJjreCTMjSYYfXrLQCd95cpXZetVdMqHoNoqjkToxSDBfwGdRVvBtr5JnK",
  "key10": "3wNRtiPk96Jwqxty2K5hbFeAbzjggaRZb9LtNtrsgnezpkdPuS3GUatStM4rmHYTSxFP8bihVVwMvUNJDqecruwy",
  "key11": "2JxYJPDVTZZDXvYbTcY8iZeq85dRtHaw7JuSBRqHPky1EmLjQze7FzZttPQanwvyozBhJ3NGEJcFEUC6R7gzzT21",
  "key12": "5MKZYxV4jAKEa9PXJi6RhNYwCfMD86RHxGUECzngzJW5qVEFXo4UbTPqhS6m8CeAHiK8JCGfA2N4BBJcmwN1JjSu",
  "key13": "2Zjnjwg1Fme21UFa86dGzmDeCmQunLaLkMLzTYD2zYWo71Vwnzzx58FEMu412CViuqsjX6M7HuaECJdzaFPgsZmR",
  "key14": "22PYhH2MvHQbjYD2nh6QJZCz9o3ws5wqpuLZ98VboaRBmyeL3b1BMb3A81zWjnERZ67jN4s2U4QXjvGAh6sue9t2",
  "key15": "2Bt7SJvT3UMGmVn6UuUZZPUb5os76ttQPYYnkBN5csMryBN8EZAJ4pXbBRmY3k16v2J1hXw93PjTZLF2ADaEhu4z",
  "key16": "2pn7mySpZvi2nnkFPw5wP8TJu4jmGQ6VmraMzaJvgQYFL6DLsp7PLUDjojhvdFsQMPRT4h7SL2qUgL4x1qs465u8",
  "key17": "2NXDQ7Fuz4bUJrvUdkgBrjx9CokXH7sDwG21mxsL6fnjhHYiBhkAYPYhFe1MPE3XzsoHPdztDL3GFKbiet7hBBCW",
  "key18": "5khsNBpdXmajtp6zupB7yeHkfH5jJHCW3fYJ2hGRvLpzgiRRrPvjWW3dwnkoYNSgNd5ZxAVC7EHo73gZ1JDA6g1b",
  "key19": "5JZNaxVABxab4j3zuqbCCDFpuZUSQksBT2UDkjYue9tVWjvuYGUAPaAxq4TD3GVFxEbG5P1rv6c9rdk1VNMFPBBH",
  "key20": "T99qeohvJdSCpWtWpp3S8TH2twYWPa5wLXsQFpqqFTGC7wxQ7eDQEvmnU3pf44CR7gDpBMbVUKPmeqH3y877iS2",
  "key21": "5PMeKU8GsZTZaeCnHTH2E8CPpUz9qdG3azusZwJr31UvfDmaJZxbb6YoTG8BUn1afHQ4U8BKdmazmkA3gNcEFjQq",
  "key22": "2AiQmDYZ4e5dSNJJFAkPdT2Dm9dKJuS5uKpjivhnJ9QJqJh3WBUWCFb1bwQjp8KHqDR6Gy1v9Dv3eqBSEmjhagEz",
  "key23": "5ZWZEyZy57NaCWKmUVwcghEEo5B5uTsPkoS3WdGBwTNaJAGbBuGhPpBVUVm6tMrmCWAfEW92GrnBbYVdccS7psgj",
  "key24": "4fGGaefRixtMiG2yJ7T8mANyLmmEs8gmRsJfMiRFT329UyxNYmRVFjxLEQvqRC5BUqTVDkx3EB7bMuhk5HCaFvrS",
  "key25": "r4okvJ4TsVAR7r6h4zHWxL4vAsDsa9Rh7HBbSQFiKRhzMAxhwBS8msPCG7pQoqs6jkyjVjpcTV7QAHEaSFqK62h",
  "key26": "cxg5GDnXTMTzSZgYmmD26B2cDdsJEzzpUQonsmNBcLKfbMAHTCF69o1KiEx9Zg2HRZfsRkMN2qSMZJFGGrjQ3jh",
  "key27": "4BQPGRhfhCFSsTvxK1rbm7B55jLjBE7LswHmiApppF4Nxp39EHDGLi12iuwGxA8wSGhv5QjrHNFT5Kxg5dfkgaFM",
  "key28": "3FawCKhhzxfe9KPpUzhAL2ucSF4xjJudmMRD6H757HjiUnqhg7Cx7eV4hZW8EW2cSXE7VwsooNB6VmqTjy78uSNb"
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
