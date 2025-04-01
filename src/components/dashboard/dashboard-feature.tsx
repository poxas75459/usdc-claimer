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
    "2zXyNSaRE4yERsJv1n5s26EtRmeL24BgypXsfJ6wTTpZrfaYLkULXvj2bgBVFMvMkTF1JLjxZvAS1xG5igHEbXYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iHQ8TeoTdoeEBwVzGaWZE3YpzeexQNCdamWZtnYxeaV1XnQVGUtEnQ1aRuH1K9HqfT8MsZTuBoyqJw8c7jAxg4Z",
  "key1": "5aDMSuViebEnZRAwHwBhPyJgqtRqngzjVWLdXpWoYG4siYvMeLZrx8XerdymV9zpv7VBTkLtFo3knaGKBthhwQKW",
  "key2": "3kkcZY5wY4LGVdwx3ma62ExQTuhVUMAGJnyWfneM4AHgXjXtcFvWFzsM7z3AvDfzT6cMhCoXMvJ1qMNSVVJxQ9Bt",
  "key3": "29QyQorDUBinTk4srB16mM49vAeit7eeKVoFHh2dvSUtnVakzo3auUzcvkrjhX4zWA32cB8tLxV6bAD4LnFUFkgz",
  "key4": "2RgNisF5m2eZ6J9u3KzMcEcCqjqeBAteJuunLXn77v97RwSiUR71NVioFyMkbuiLBVPw3UTuCMqoV5QiC4QRjFzC",
  "key5": "2UbrFkbxgV8j8QyEZcCY7AS1bAdo8D6gKXXf3obNDLZX43UshpvfBsrWK3YVybrufseGBkcaL15uMkkWDrwF2o2U",
  "key6": "2ae77zzE8nZ28L9rMjPgC6NH38t47iCzbC9Ke2yidiS47fMJSuTY9swA1FLF53g3wVMKeAZmJF6ddYVM7J2paYSi",
  "key7": "2rzPZbkofW6PQRa2q3bMri1kdXi2dNFwNkHQiZazPCN5w25DR4cMzEvMatEzzPmnuw1gLoLkBgNTWQuFcqBiLyrb",
  "key8": "fyKP1Sx24FPehrP3wq5cdrLkTgBErvbf5xd19VA6rHQEtAfUqbzvNVPnCSdTfbmcAxoDvcMxM3BJSaW6yd38sNP",
  "key9": "3E3oduPpAVxqQj99os4xGyi5LLoUvvrcs2KzYhgdNz72PFnpJESVWALVTxdMQUFbV4V91JUZpF6Z9UmSPrpQkKEs",
  "key10": "2xAAc83QdT76ERzCCyhRHBU41XWM1c4oRh7xR2b4ohtzfFLnzY1S9dAbXH23FsK9VApH71h4dbB4UztAvdQ3KpLp",
  "key11": "22cG6pZkHqoB2avt6Mt39aVUTB764BxNdwttTwu1N8m5ixxjod2weVXCA5UaY9RH1kC7B8Hw5ZFVPyow8YW9kMWf",
  "key12": "5yqksvgNmanRUqksZd8KaUNLjzKkPoCbtsja9aHWZEccanyV8naZCRQqaRr9JQtf5crNNKLdU2qdrvmgznz6whk6",
  "key13": "4JEHiFZ6xRLbXMXPZ9fQkLhwkhbq6KwnQsBL5eUNfLpRdLopeHzAi3a125xY5cmFJbNVp8zvFY2T8KbHJoydA7mB",
  "key14": "25nkYBFdjW5q6yat6wu4SDaaWAiqAog4KahH7mL5pwX6jdUsrvhiyWRWx2v2yuf74HytiKUECKUSQp85mz8SR87p",
  "key15": "5J5SidKT8JrEcKZzomY8MaBjaX8cjKHvc1k2GYzg9bSNuJAeEPz1QcaCautY9P7ZnG5WNPezoByeVcrzrowUU8cm",
  "key16": "3Hwb4prJrmjEjBW3xemFvtDoB8A5zFUjX9Zvmi2ZSeD4dzEB9f2vmYr88YzX3GssXyor1Lw9WKy3UWeWh5iaxksB",
  "key17": "HRHoVLPkeLTuEHEYFRu3eJvTs7Cum3PEPYPmWdvV9mc7w67R3k5BfiwJGDaNVeia9UsAFr9PzmQQST2DcARyiQy",
  "key18": "5JC3XAw45JNxATkUopWEaL6PjD6Kj32mk5mNuFxvz8zK4cFNwqgDDmaJ3EwBNGpTyf9SjbzehQ4siUuHcbYA3mX7",
  "key19": "2ZcZzLNiVJ3cGJF3TQbaGqXsuu8VWWhCbh1USFumMkzPdu59r7mzc7zY9KmMsjcxeaaQpLC5HWuQ6GbZBCwhPYBo",
  "key20": "2QJH7f69ZhLHFRGqvNt9qYbroau1KMhNfwrJVFS3SXaTVnVC8DkuAce2kRHsxG7FQckHikPZ9Qw9FyidaXHFzP3T",
  "key21": "26vpjaLaiAUvtr4rVcLRhs99vAo7ay2da61dTASTSAcLaq5BBYHJJuc79HG2gojEdyb35mVqH4j79NGYN6XwahXA",
  "key22": "433XZ7sSKky4qkwKrJqs7JeHnAocLGLeY6a36Xyzzt7y8PbXsE559xk6GJ9XKr8aTkjV5sZhP5pxcw9xsL17QSQ2",
  "key23": "WXugaMsyTPt8krgZ5iFeDTWr6fdBMobN9gEQcsP8JggwpvdJyDY1SJHPcbUNYxsAiZM4EMxio3qU146ZMhKwtMY",
  "key24": "37xg5kcX2NMYw7Ftiqu9wmnkCT5Azad9j1gDfaCquDCPcvhP2h74qbnRHmR7w93cHXncukQFWrpsy5treRHG7Avq",
  "key25": "2E2xd7ozppfxf8AzWjnjTukCWfdeRqqsZMKChviwDewEwyg3SwDCJjQ3uuaTCEyueVyZQD8jJBjhDqPjBBjA2f3G",
  "key26": "3HZwxxahZhtko2KbHeQg2MM4YxX9gNGsyjxEHnsH6TJugYv8K4YnVMb8XuRMj6LAftHYiQcakroqMRGDdjbUT9sx",
  "key27": "rXFchfRz3E5cmHc9DgW2p51A6MtgJBUHeVKSb5fiEKyHUqHBkHmyQbGPSqiDX83vHCh3inAam6gUKg6hGUp2pum",
  "key28": "35SMvSZ8q5S7YgLojBBPVuxj1QRxA63qegG75JXzjWxidgtCehN7xttUEfxCRrFAphAj6CnciN9t4YQ7opu8Jgau",
  "key29": "5HBQqyyZvmiqGGD9kaaVhRfprgNt8C7NDdRGjKMJcCTLG99MExWMM9FiMa1huVo9WA72N88pY61JNiQM1Ft3AdUT",
  "key30": "2h9pCox13eZFpJZzau4GyBvJakUJS7aniPDjCqoSGFsuQLJBQ1vrSKXnuobFFf4iRn7K384PXqgUSypSitVGhnF",
  "key31": "3fujLwVvYDAjioVA1jHnfyfuVG7vmXfSgwK1DtK4Df7qwa46uANHaX4oCCPigacAHQnzVT6MvwwfesE73nf5rX61"
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
