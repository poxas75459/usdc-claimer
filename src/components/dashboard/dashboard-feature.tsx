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
    "wwidtryLjixApZ5LuRsyKxgSqMfYYLWC2hhERP4fxakHbMJkExE3Aon5eWJ1vKkoaRoC8i4NCDYTJzviakLeVPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELZwvSMxKHZRu6SBQYq8YVfsX9p2NEfeVqmU6BmHurFiNtdecSSrhuUhLBWQsz6RgJNNxEcXp8fy1MCXGf5cnni",
  "key1": "4W3unvCmeZkm6EmyZaJPapBE391gTKX3TSmNUdm74xW7zQVvejRck8ZxykSDYXaBZFHnBggk2SJSTErvAWEC8ENJ",
  "key2": "3KqRi4NxUz95ghfvQ1eQy1bRPArpVaqKxhwfsg3yDU7bDeLb2auWLwKFtQkbLuSBMveujC8hHRQ6ZZDjDW7FqWMh",
  "key3": "oUR1HMF7d24E8NXeuVCGBiT3K4cJzrNEyaWPUE5QfPJUVMg36ckPkMMU4De1DnJh5pe3fQvdLvDJs3ZdNNwtUhz",
  "key4": "4x22YsN2dGsP4zodu6Sq1CrTZaMyCEgJwWzsE3WaPqWGWr4fs1wTS4dxU5MA3oXPNhYikZpjQupGCdoGfGNY6UPQ",
  "key5": "3CvR6xKHFGx8EkFz11osXNrBhSnvH9i41bi7SKoAnjSq6QDocFUk5xJrXTiGTkJAbSAWAksAb5JFKDqH7WQP6p2L",
  "key6": "4exvFSd5KkAvtzCUgtitypfLpuhBjjT5iTcCt6khWmbiv786qvrgpuCjktrkpmf3XHQjpukfMR2aq15aMtb4bUxY",
  "key7": "2HQh43HRHza3223ZCAAAG4b5AHDaA8shuPMfmcjPAhZbXRroErrMcJabcUUEUn5ENkakAcM2rakt8aDQHj1Lyu7p",
  "key8": "dLiAzpkKhJSn3pDLVuAbMHWEvqnmpQeKvav5zh1v7q3rmWvLTnSTqZxv6yRySBS8D4ThKNfimBDwukb1sCkuwoM",
  "key9": "3B44FCBbHox91CL9qZYtTmxRn698mKwix6z81nAWj6Nat7bXNtKx8C2B9W8wvwPw9dVd2JoKvaGySG4btJFYxnr7",
  "key10": "4PWqx3cSc9dDYdc2UV5VW9x25WwYCRXgBBVJ7bdSgqiZW9yFivATaRi1eYnXNzgUTJE7wKaSDzR8G34s6c8hUrWA",
  "key11": "238JHCFbjvHiDQ7DKT3U3D1DZXKJsJ983ZTHnctdvZwerT8pqVjvRFY1C6W67vdbF54oBZ4HwZj7CNN8CzoX2qn6",
  "key12": "57ibEy7qpFDaNDRxwCujAXXttSWu67wnZQbR5yJWkPsBDB7mkQNVUcpwb7C7XzEcMmVbWqNLhLWwLxf7RNxBLqc8",
  "key13": "5o2GejiPr2b7VozWY1ks717RvhQLk3VHzHCM6W15myAfs3VbUsipyUDbLDGPyJhAMs1Ed1ZJeN7D1hnEznmUfktT",
  "key14": "3D7MApcguhj86u24AbCNTnsnA3ui8RxjaFyWPkY2sjWVhjvzq7qepdq5G1PqpHexcL51RihUvv9R2UuywUNTrVHM",
  "key15": "5qDkZSvaA6h3SQUovKzjgaFrefMd1XASKzBVvoP4n53Em9kvrBjsvh5cHq3BijSNnfFMkGyuF6ubHHByEbVyqsnT",
  "key16": "3R7Bhjk8psarFTE6r5mxE86USkjxdPsEjAzA6BvWxMyMoXJK8eUZgMY3duRUsG9j77kqLaLt5SSrf1r3BMcgnBdj",
  "key17": "5cNBE44nA7qGMforB58ArSe6Dou6vyd6npVGoTjewucXb3W4kCNyxrSWXXZ3PmRynnMKFT6NUHZaYtACZiYUqvkx",
  "key18": "5ma4xmznKQ414WBwR6tabikrhbfpiC4LACthVUZBXV14pMXQ7Lccf3xWN3T899Swoyz8MegeZafffEKLDh3aTnW8",
  "key19": "38grHbcTuRSWRgRDHzaMQbYGGu7b5cvxSD2vuuG38jY8MjE791HQXiKCfnY3SNTSrpdaqPRJJeKjXbwMWw8ew2g4",
  "key20": "5xmjbYaNRG5J8JkYvxrSBidwpLkMRygvuXgm9enTuUFcGDoTjMXLsKDsKhceCLAvWtD8G8ZnUg4uYXDKSLWa2mHc",
  "key21": "4738sVZRjKzyVrBMm96FfTyJrnC2GX797kTMYTtKediGPzCs1xFebvZqbXHAYPw5SZWEY7dEUhHQEWEf2rCosNzi",
  "key22": "4T7BDT62CmDbciXYyX8maMzGQ86UywP223LGnfybBXQ31sLSdodQGbhtTiLBnLK1ksPfPnMMrMn8dHp9DJrX6Ghi",
  "key23": "5wiedp1ESSxVenTPcqGGYUJ9NFVaPEA9tbMES1dePpuCtji12EgqTFgL6HQ71rCC2KFu1DZo3TnzMHXJiAgPxSqm",
  "key24": "31n3cEyHpuJ6Wob5C4mdQMH4NVgzyifaAeXMRf9fvKqXCakxdAnCj4h1bFWdbriGKCRQ2jqK92F96Am5VMephudi",
  "key25": "3p2FVcseGuD4EfTQvgzrmY5Q5F8Bz5byyqnb6Rc4SsvLp3hnLrxQgTertxjZNXYRLhpGqQB1VHEnRTHAE83vEwcX",
  "key26": "4qmKu5e7BTBe844J9SWF5pmUicSwVdWQfCRUWVwBGKuV9wpFtKpU3fFdJuUhq5orS9ZaG2SNdT74mdsu13U4882A",
  "key27": "2Xen5TVm4U9pqjE6dqrMP5k6qwuZpoBEo1ExJa9omMBH2UmZdNyHVmih9K2swiKP2DEDhzTpXiRppkUFgxXbvAHL",
  "key28": "5a2jdcXqBw7sWWxVsq6WHoyXFsRsBkVcy9APc4L3cS2wevTKBrnQ4mrsrEynnZi84K6HuuKWekAYDUvjNBqH8itT"
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
