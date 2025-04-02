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
    "MiJnDY95hM7hs7yuaaezR2327NpM6WsoJ51o3po57dxeTHVjCFZZQxNU743Fh7EqgFVAwMK8JfJyKUAzzoiEQS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45KMGdQUvPsfB8YLHYCwoAqkApXmqpUN1fAjssdKbVPDtSnkH6xYkg93P5rWqJosGWyW8Uif5GwYzGQ45Ck1kgHR",
  "key1": "5Gp4RSVePeKQAY2HobAqTQuPJ9Tid7vBPfHWVNCkR8LjGbAGXsGz2aBuYYnnxfDFW4iv3Q2ExRa7BE4Bhkumsj54",
  "key2": "3nk1trHxHj7o1RkBWBvkVjbBbTwKA8HTF93W3cVCPeAMNAgwBT4VFhUWhSuZCg8NfcHV8Rs8GYUhHoV4NCncMxzr",
  "key3": "2HZB85BTHq7HhL3iEKCmStj8owmF9Vgx1X1H5J4qtowMh35oR4oitBQxupWYRiLiCqiFgenheVLqFDen4fQSigfW",
  "key4": "55QBWFixLdEeCV6zqX7b2tx6tvdUYnxtqWEvad1ZiDPWCGoSRvDcSByTP6KMpfMw88m2y9kSbBH86PqP1bCyPqkX",
  "key5": "29oEhHLVhrQb4n2NpnLy4unt9C8cuvNWV7qkzX2ownzaFrFLtz7tjFVA6Zt7AjR1898QPivKQyMH1HBdLjmF9JCZ",
  "key6": "c2WRJ6gDvaswpZAf3B6UP7gsdLxaXTNZ4eAaekZtKWMFd8Eo2q5MgZE67mHR3LbL46jfvAepooLK61hoe7AtbhC",
  "key7": "64hVeVyLwNySYZ27wV4FQQu4P63ZuHq2xMMxXxgXTpbyhNULx3cHpPcGvd4L1WRJ4zgPtDXQe98gmdKvWTCn6TF4",
  "key8": "21Kxy8vRDU7pCG3dMDKM4LtFndf9X3wLMRtAY8x8KZDTa6Uk8N52YwAMdAL5izAR8YEGZVjb3De13hxkgRusidf7",
  "key9": "3q2PqwPZ52q67nisbpm9G3EKA4r68GhBXMfRUjbeSyaAHJ8PeihbsMWS65ib7UjEM6ko1KrK7N2BAy2wsnoubjv1",
  "key10": "2fQVqLTfuEqKsC5VidQL4C7ctRBdEnbvfKCCxjqCXYTBdeDaExK5r2wfeZ9znxim84pmxx6yU8YvaUFBMMbtBoet",
  "key11": "5jCHJthc4W4N8UovWTNG3nR8R5wwaTfYZZezSKtoWawZMSMYg2ucDPnmoaryGt4grPTyX9iPX1e1StXefcjB1ihL",
  "key12": "3korwWot6LeEgSCH9pZC4ebuRF6WPQcTaiGQe6V4NmSAaPpWQargLd9UHVzbSyx6tk3R46GsU5gQDJTgWzkQ4yiM",
  "key13": "5x5vZhjUYkBX537Vd358u5QbvQrg35qSKXPYCTZwuYJ686mGkXULvbGPB3hB1rGRMuZgi9u11QnuHQ5wbWGQgUhQ",
  "key14": "65wPSFCaQ7YQQZoi7e5awNB34ahc5yFeikczcTNzyChSt8rC3nRvXdPYsiWtugEVCadZ3dj9hUUFWFABvjDPrQno",
  "key15": "zyrmHBPPsmdtDiqymqwgMQZ1Q9CLQRqvJBjcpxzFLURUzbB314a7En9ffAusA2RwkjmrZuFH2JSTbZJGpUyE17D",
  "key16": "kAn2pHKwe2JSaKjckA5gc7PAM9bJ8FoeCwW5TMrNZrLuHR8bCzrJjsvPJzhMLu426KY4Vtkx6kSVs1gh62rdhbZ",
  "key17": "5gbkb1mRLWqEcJy2QNFtFyjTWpkRxuHHM8eEAQvN7Gr7b3vqoKozBD3oecDquVhtv4qPvmedRT5FsjeDWTy7w85G",
  "key18": "Y1jqqiGwFxjT8E6ZFmy9SE2nngWAwMagDmDW2jQLhy6CP1eRXMHppeufncWXxjqYegRCJeNkHxNXVMxmja2MuPJ",
  "key19": "24kQ2RMQJaCTdsr5qGMjzUdbe82X7guYg1ELjbmtgD1KEAPYqCPthpMsEArMdi5cd8RKdtoizwzvsBugZ4GoEDSw",
  "key20": "5eRSzeAQB4DKEz3Y9T8kFRuE5NKcgtoaKUSdHs6H3eHdMXGiN6N1FyQtFhqRdc5qxAb7uMiuY1vFyk2ikzmwa3p8",
  "key21": "3vYH275mxvomxCojSotErrptkGD6kK21VeoML2c2gnuR1yNGf9zBjqE4xKuv1mJkbqyHREmfUnPDTC6F24RSrMok",
  "key22": "UfHW6Wqtp8uGsA9ggcjUaGoXeq6hg9ngLE5tUgnQmcdW61gY8wPUYySv8KDu8pVNMTwubBrFhykXffyKSjGjGeC",
  "key23": "5hGaDBu1jCCAk3D8Regysawo72bvY6DS5ZiwZNAUbbL4T3VJspiLekSwMFBxzi4k9Hs18HE5K5xYrMbbvQbAapcH",
  "key24": "4pR6NG6Lsc59pe5afHpaf6958LzC45sKaRRgLfFUFZu9PrMTZaYLagufZ1f8VCcCKwCpb7BSbcqXvCXPj9XqBWcF",
  "key25": "aeZZF9PQFf9NsRcXrBkixx92LzCwmoWAN2h48kX5NBZ7JLXtKpQwQVMfH13ThjagLP2GA4CFDBQEjo4XfaasKf4",
  "key26": "2vzJWuTBVZwcB9wvD5k6SxghZogd7owfV9GTKGNWCTWDz8prv5JV8YgbfMbuyxJU2wvTs2WsrPf5Na3WLaq7PZ7H",
  "key27": "2aYDejEgX9ErWsdqYxTQhdtrikT2qdjUcvA7LJqgZRxfe47jMqe5eiwbUrHekgE7WyHQsBG3Y5Pn7NPs7rbswdmR",
  "key28": "n5s2qGFmaxzmK1qv4LLPrsKdGU9W1Zqd1ZivfmWbnU9Whib3EcDbtrt8126mh4Cnzkh5UpZQFFGAuLQw4zZ1u6Z",
  "key29": "2176utLW3q6ModvmoZ5xS9T9S8XHezN5QXqvFFkdGYHyHzrofAUAHKKnSMv7i42gp9TkF6VGepszSHnFDB9zXLkJ",
  "key30": "51vX88GwGv7gnBNwuYQykMv3V4UENSekYh5uQLYtXxDuThDEgbBSzbo12P5HxmHynodUkrKPvbkH5J5zunSFPH9x",
  "key31": "5SimYRSj2V3PUxQYDoZazu2u1XMGL4a5aVgSbtKPYJEyrr2eUYf76QTFJtpAq1m9iW9nMAABmMr2MVDHvo8Earis",
  "key32": "3tpB4RiT2xC78ALKxuE4XgESRFsEwEM875WSkA21QyWUXS1aeNVAjwrbkXs3ofZHG842fPpq8NH7CrEgjb4F4eWV",
  "key33": "64qWa3auxfTnCHCdg2HvDHhu7fi1FBECdYF3YQZrqYTxRUrYZu6KWMvToz7GHWcD3YaSbTj2eCQyE9C21WqD27xm",
  "key34": "3PvjTXMW2vAG2y7Z1i7VczWCTW7qSaDm8H25J7N3ngED1Lo3GPmXXqTuPuRG6kn7kSqmeLJAQneMmMReUfD3FanU",
  "key35": "N2y4Htp8zLyYpgChMtHWVHx6ZoKJnWfN4naVYkWsYrFHXDRefHTbg6vHYP8d5a6CVoFxtLJ7huzjAEJQSzXVWr2",
  "key36": "4K9v425zu8H45V3gLmzmAFp3tat3NR72LzNxWwRNCK5t8YqZLYxtxRBN8gJQaDyrTAWF8AS1yuV22qvgyPm9ns65",
  "key37": "5EiDE8D3NgY7U73rN1CaSoUvHapaddQ121N28fZwoFxZWQATMUvvtvFqsXBwJiPNqhcCoUuJ4gF7nePAiNUs9CNJ",
  "key38": "5gR5hLTT7M2FdQmZsUvVLHyUQEp9BbdCJBQHVR7szZDxWuNM8VfV5DLUcgiin6uZYQQk1wzHKzRDFmdBivh3FfpY",
  "key39": "5fsYHYPQ9ygKBifVb4JVw5VB94qY2iS6JPW1iyLAg7LbU5RyokEphvqezocRAifoXXyUq2EcwbVGc2ZV49ag7Eto",
  "key40": "478e7Uk3XUJpqM9PWx7MRJ4cX8H8V4MoghexA3veSfUAudK5Uyct7xeofmXZtfCSHDf7ETCTah4So1918R8iUBd4",
  "key41": "2SKppjwv5Dzh9rzkpS2jjLpiiiTy4d9ZcZ2fBC8ANJ9uuV1GRZmZzZKqcNAawGDHw4krRzQML6551uP2TczyhNMB",
  "key42": "2ShPkyGzXS3iDVQ9UGLMEmECGuqxT8iqXzoaM3uHwsbwiqX4G2Qp6ypv98g2N2jB7d16rxTh8oJDo94SJyZuwRns"
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
