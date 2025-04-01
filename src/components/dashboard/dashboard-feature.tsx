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
    "5FZurEauYeUJrb7Sb3J94cv4ryyPBKEGrVXDM3ZPhP6Aiq82UYAaTNVMrhY37113DFcAFex6tXDodoX72LC2wFEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GvqNRiPB2USWmpZEcywAMwb5AfeM8ZU3zGnrKowAATW6cPj5aWqsMGKQRYDa4qRH5YiPwyWe4YpWQqkKC3E52Qu",
  "key1": "5CVm9QDyBYFYesKcQr7oHGzYCe7hytiUj6gTc1SHEoWBuFqvs2SkfZ7jMQgjsN8d59abnaiFkwgSDCKkQbZ2YRcX",
  "key2": "4aUvx7VLG2yPeWP8ErcjoUmktgsibLSYv4Ee29qZs3UMu2bagvcG1Pc4uXUppnLfkQLzhieRKxYPVW6gvcBjWXA3",
  "key3": "3M9X7A51DRvqQowY6HQGyfRZ8DYcK8cCH7eZpzbYhJU2V4XXrWPHbebuFLFU51Z4ypZwBdExfCFbi5M3VakhEWJt",
  "key4": "2Rz889rKF8rMvksoortkh8vg6chiWYPVTqC6CtFP1TXYJRhbcNmmN3G7VQmazXGziafhjKJfv1sFPBrA5iNUUztE",
  "key5": "26A8t8ziyTayejXHDGt3M4ywAMaYTw3i69w84P6VT4DB76QaeycdS5m1UvCzZHK46MZyXe1gy18sAQgbkyXW4QtV",
  "key6": "3vKF6sgWJHHLDMrFLXxWDU8zja8TgJ92YQ6eehP5NXxTcHYPqH8pFpEMTgfwGoJPDsvRKsBXn1Efx1kKGkD14sNp",
  "key7": "4jZxPbSpqBPBywvvePHM2RqJwWsCH5Hx3nKNBMfrXTrv23qtdXCb3zvn9Lv5w3vio7frCr7eWneMiH5jmbftPoxg",
  "key8": "4AzzSpTraViRw6yYuGDuktxa3RiCGKCQdmKJsrfQJMs7GfattNjWAhidHgxVS4yTWsStzTDbTRj75iCz25NXE8op",
  "key9": "4jM756jFSxVSomDDKDGd4qA1rM6Q2sPcyfaPJWhbjUVy2mkfE7uX8Mq61r8PmqxZwKowapYvxkvXnqfkkbhrEjxX",
  "key10": "38ka8yvgBq3QC6afSSTqUVfnfD7eLay4P7YmE3TAYvShg1XnxH7au4Kn2ZYa7jrHbQkGPn1X9Mpa3VAbfLmcET7P",
  "key11": "3612FsHLjf8UnpNHhf94NJECdzyLhR129VNtCkUmtXGMPqgsKRJbJCpkvvdQoFMBrM7BZ6nZEk6SgWpcCpr2TBFN",
  "key12": "4KVdtJ4VvxDUjM85R88zAGtnSptb5uryLn8wRuSgMh3CrXEVRY7aogGqrrzPKxYe6gwPYJU3Fi9mFAKyJb34DcDR",
  "key13": "3fBtFBtrjCb1Ae31SBg8dRVaDprW6W7MxtYZMiSTygHhU5sc8hsBDrfMxtx5Hz74cArcNe3fD7MKfeinYwPgKPE4",
  "key14": "Nf2bwcPNbEp9ZiQtgy1CvAASXSYe3yEiTfgeBd4wL2DbQqZ6ZdenpebFVTiPDkae7BiAqCSbuDxr6rmmVSVrJLe",
  "key15": "Uo3GtST7szAnib4GvUyctpz5paoc4K64wH17phDUVNRXj5tJiMptBN3RHLSyn4ZsLZ1oDxzXtJuVHbSQ7k7Lgnk",
  "key16": "DhBLq9AVBdt9BLK7Zo3HwBnRSZ3MsPMXjHPTovsBmPv652BYfDrLXjoo5ZVhLTAB9T2x667LyzCt5MJYwJh17f3",
  "key17": "3NTekJtxvE3c6zkvnb6DGdnY2LDcHjTWRo4m9gvDrUQDN8fFLbdB544NK9YCqNNBthh2XmYrqnLtHfvNMs7XpgG",
  "key18": "5eYk4SszUA8VTuafyprFgU5sfVMC5Ga6gZnNbFyG8nAZFQSTXezqAyMdkAANfUUFWuzCmukbqmynS9FCqeHxw2Vo",
  "key19": "2a98Bzf1DUqrQaQDzSUm7kS4wpFPebTSQzabbsyYAc7M5QqZEjFSDMbq6pwanYRwpwrL1pQbywPBwTswRdfRHqj6",
  "key20": "3k7ocHTSPH4U29r5wC1fkuFRsdESaXCA75Rg2QZY81WTh7yQSWFBGzm3Va77oFSspuMZsg6hnmU5R19mmPYx7AjQ",
  "key21": "23ZdBd4grS3PzDsqn6dFkPKScMwtnJNjVQbjHUW7rNxe2MpHZSFbixfvwz343zQRhL7weKj88SpnXMaxdF8jN2xC",
  "key22": "5SW7oX9V4JWKJABcRK5JMACVFUZgsTvyLx6owcaqrc7Sutu47JQ7mHsMQNcUvkfaJnoKdhBQc17eBVYJmurCMsou",
  "key23": "3L4nTZhyCeP1EKbSdCgkzCCgEEfwCW7KL8RfRzJer73sHhQdUg3Aqdu8g7iKrrePm8f9GmakPbkQKKkd1DSjWM6i",
  "key24": "LQH9txBZV3Pv13s2684VVaVKAV89VGqams6g4xQPfAEuiNA8QMUtf5M36SuYXFSFmPw5FhWUgXJw2mUgBuje6Kk",
  "key25": "62P9BgSRcCbM7qKAtwgU2UveDYwwWxtbrHjveEUWRuK5a9PiPkDjc7Hj1Jqm2fof6SJVZ2AjW8yFiUDouHQKqzQC",
  "key26": "2khhzkyp6MFRYiiJV5QPQF9EVBiwqTN3nnNZ66uepvAtecmXeCDjJJ8c58mH4fK4sqcJU4iHoxJJVsSdgx9pacrd",
  "key27": "2YuHqhUsdnLxj7cKRybENHQj5Krd367DweKYobiNVUDQXXDNEEEtVgU1duTgfUDvU4sK1DLxWHfefqQrVzvcfeXb",
  "key28": "1Cc8jfU1aRWG6zf3yCGx4BNnwA9V2Urkk1aNXaEcEu2jnjvUbcBxeHHiFyY8RA5zyLEcWVzoVweGzGfPAjmHBUj",
  "key29": "D19XvhcZXZ5wB2STvtvSkxqurNEzKj39XP61kyC3bJUmDJ9xkc496tKVF2gc51n6s1rBiYuYLyVUosD8PMAJbGM",
  "key30": "5sxiDfrAmMM96iEWsBY4tYbPZNd1Q3onLVLPG35mkCxnmJ3SJdtfnMh2wBwtdag2FqNSnMe8o6LYY2idFgEGvUW5",
  "key31": "3BYm6CuS5HhmhPM95fVzU1ynhGesHwqPbj5qFYn27SguLYPKSpaz6BnPob8pMUFKeTpgVsyB2c2uA8YGjNRc5wdV",
  "key32": "43e11esJMSA6H9v3tHJmerSXhzdHUKWVAapMzTW32GZ2wFqAMFDbXTDJwLSxwXV1Gw2Jobb2bdYH8JyzAmmE77CN",
  "key33": "53GFP1bJQvirh4SYe1T7rcwpwGVXBPfozKRMxViGyoi7cJqTqN9uDRftWuxA7kurq6ffgbYXg16Qghw3rYb3QWn5",
  "key34": "5w2CNKp5E9kciX3Ks3CDhUEq2Bu2H16kzts7tgwBrbpheFFYcq7kk2jrAztt21ndtqxZr1Yffdr2ms16mHFZCPXM",
  "key35": "jxYPrMf82XddanFH6cr4QVHtPehm273Dr8e1asNnwfLCacvXgUf4YcX1DXTFJJkG6CDS6RfaZxxgvCxvAiC1e4B",
  "key36": "fb4GrcPQ66jsdBY2x7yeq96uPfhQhg75RXhpG9BWKYdw4gfJ1JJyZS1tDmFesbXDTnwKeWho4XCidoxWmGfeSL5",
  "key37": "3k5xZpPXtDc2UrL5s8ucaaugmHLjVzt2ht1MVDFngjMuVYYu6wPRmX8PC7x9hK461S8WBSAaVWnYAGSHpoR8jaqe",
  "key38": "45C2aFQzhhY6gqtcNfNxzcsEHVLGEfpzkUJgj96ejC4NAT3SQv3n9JSAr7ZyUVoqzryevuES7bGUhtw7FHTzqdGD"
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
