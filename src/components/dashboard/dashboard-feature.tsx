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
    "4UnssTrTgEumN5Yz9G3R4EN7Uj2foGXpsFeuE6ihXobCq2gHbM9FZtmgcNY9zM37UDVYeAdiJH2sgKcdb6FtYsB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ceumpqvFtuCWyeaUVcDyn9vHk3NxzrheiZ4XnjMfVmX4pz6vsvEQqT61F5GkSZ4HqiRVg8fszgFxWSpXNvv57KH",
  "key1": "D73nTHsZcweJK4cBoi9gNRtfm1x1q7eeLpjBnjboF7ruaDkU8osr6MSvfUPK9foouxQj39HAKBjPfugmA3h5NyW",
  "key2": "2q96MHKuMwGX5wXRiAdCebSPbLUikDpwWH5i39fucxgwvMCbPwxNp4VH21Z1MMpBgnPKAzMBZTozJy6ECKXVezCj",
  "key3": "5jtdFqwskGfSBHfA1qX3VuL9SnrErCbZoDK7gtJ3YB1S336BA4UzTg59FYxanqhN5drJP9YtEq2nyh8nmojPYyQc",
  "key4": "5yHYZSciiFegX6SgPRbLCCchiC2dh1wrVCADBh4PoZ82thW7ZbsgHUeLw8ubyUKUCLoK8BsGzZcNmrbbfYEQL5Gn",
  "key5": "3aWe7Qp98Pjy1uA6Rxb1rBQyD5vVo1WUzufJ1QLHBpNCtbQQ4zJSxCTU7zHweEeZFtZzqreTYMAQ7Y9uMmr3BA1K",
  "key6": "3ErE3sKRdZPpdJsA8NdWyosrNh8VnMiS19QCSPw8WMPFVQoYu3D49L5BLWc8DaU59FYSpA7R7P2KCsewjnjZFEcM",
  "key7": "4KNgihSb3oQk2rqmPHWbxWunuKMjw4xHhDV8mfFTYiytTo6kma7PDg8nSyRJ2p9zhLJPubVS4wrLGkVZypGb4nyb",
  "key8": "2Q6TZshpRcSGVd3uv58rN3w42fcVwqNJ3Nc8PK2eY33pEF3bBAAoHvvAApvsVBWtsd98mrC22c3hKyfi4PsKdGLG",
  "key9": "5GQKAogNrFyzFdRsk95jUhMK6HSFvT4f4yNULjRJLKmuFNjvqwPA14tJmnqEJw5a7LAZZsxavsL3FVMpaDMaVFF5",
  "key10": "2yrLbdqiUjC8xgSgaf7GrvUBVckpKUZACzvLY8SceRKUZ8PE8ofTHCq9T8BMEyTtvsBZKrL9FkLuRywp1g1vmyB7",
  "key11": "33vYMSrJ9KE5uDb3JA3weLL1AThKU7Rvxovaq8zU2grZ2DY3b8pJxscjyxMuFfN8KW5p8LbDQ8mUKAN1wnRAfyEa",
  "key12": "5xFCX4WEdHLcvET6FxUnRYC8ZSVnfhFRGXX8kg38GNuenKBxRrprQj89LXDd2ZneyVC1vGjGjdGsNvhtVNv3i5qb",
  "key13": "sxj8WzBp5zSzELhh5Xi9BQfBL9H6CDJk4C5TNAZgrBuadM4FfxUfk8yhMZArjJph7r6azKpJ6hV5fPFfE8RJNhN",
  "key14": "3WL9z5JryxEynZM7hn2RmCcVuAQEn1YtQTzakHwH7zzjeAy2MQHua1mzFbU2u9SBNBX3CoXGrPpojJLT4kZgNRGp",
  "key15": "5x2i4DvoGk9zigpDsprjXGSZiRMmbArNXnytKsbP2eoANdNeazLNqZzsocbPFyxH4uB8mHrk3j7grpyBNdK3CpbV",
  "key16": "5bkc7Sju38kmCA5NoyGuZiBofd5RLeWtgdYCkoAyapdj8XHRkQYst5B4Pcai3Rk3JTyNGURoGqMWCtibhXzi8NhS",
  "key17": "2FhtWqJ9H35uef84MMXWvkEPgmBPUESVry8y41kRzZMy7g86vRbdzCTpx9KUpDZfzVjjYStEPHR7hVTPab1AZrFx",
  "key18": "3bhH1mzyqCmYu5HKBTvujYVjKbc6EPT6Mcg1kgPj4n9x7MPdQ3SW3fej9JL5sKHr8exS8A28txtaTjbqx5TDFDs3",
  "key19": "2ChY2jYmMnmT8rXv8bXh2zjuoBfdfLYEdY9KbeUpodvsUnVptc2iSRNNgSqMRgUmfhCqpNHMp136SkG82aQEuvnB",
  "key20": "2oWEupt2UuzfeQ6dugeYsSeczVcgDWPhuRcMtXovgnCH2goGBAv8MmftXY8ouPNzUn8yuBXLGGc4hrpjwrvkD4Gx",
  "key21": "5wzkxdJ2oKHWBC8SRHxkwkkYPu8fHbvhnc2TpzE42H7zRXD7sCzatqsG7nCMWnngv8rsEu9RjLjEWyMjWrskQFwa",
  "key22": "3FRzZi3KAspACezpmhYf1aTEZc64fYBCvZN4Me7FNWSbmteUvt9yVsbX46HJYyBXPMmuADGPcVTnVPKLmgwwEoZj",
  "key23": "5MgNfbTnAVsuS27DJdSJVQ7o1xL9F25A6B5MnENGXJzQBP4jaT99j7sqp7vCZpE8WnPGoHxWiKa8wLEbHzeHBbpv",
  "key24": "2u5Xfahic4vGXzhhHsrjEg1eGbrA76hsYoeAqETXyDTNLt7ux1Sa1Ar9NwG2qPArqA81WbXqiyUy6RPLdEbAac4s",
  "key25": "Vnw98V7qpLQ3eaVqi3zL6vzmVUEZBdmGwctopUEDKoDrc9dbUXzRNjrfPPDg9TqCTH6pk4pc17e5AAAfq7QKw3h",
  "key26": "ssxPDL3jzG3QCY5iGu8pVxK5eoXx8vBpuLQGHNFwpcjpWHecDQVLBdmVKgYQgLKkAXokWcTqsYndwcPxD2ieTmj",
  "key27": "67pGyW2X5TfgbRri3uJiUEtfijq87d77PoweTsq4t7e5rBVhDgDWrWNw3NbcqRKMJzFB9uc1V6AVvor7rvGKHK6U",
  "key28": "3rUeBQwuHLeumu5vihAhBLHouA2AiiuiZnNWRzmGw38EAJMw5bhSLDUeNetxzxeM1QUcuzA7d2YWgGznfUf26f36"
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
