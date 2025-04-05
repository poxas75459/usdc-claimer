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
    "5xSbHTuEq8ge1nT4WMF5hqDg5uHN5w4C7kim7qrtY95RRt7XjH9tu3WePPYyEnTkk2DyCYck2f2tt8k5QPMEJkxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pv3M6BHL9rdd9MWxmJ7FeqX2fwK1295kocRFLN9Ht8skrVrqRiBsy4KjLZEQCPUCz3rHMJVWzArBmuvCLWPNxQe",
  "key1": "5LXYiqEzNDojNbQA2tGVM6k3VpW2npbc8c1smwMLiGuLW7pub7mqqdcZXW6R5vy7niS4s3KGb1SYWpwvRZs9kCM7",
  "key2": "3yA1Gieae9i7rewHGbqSUpNTVSNM7xz4VoJJ9Eyr5JvgzDNqSiiaCADDJWUGG1oJKSUS2pzfhpQauzns6ZNa7DZv",
  "key3": "pYbiQ27bWf67TymQpM4snW5WhwVmwwuiMzzR2cgRgbKEQ8TEtGsVgrmmvFjYX6ocWtSnHqKAEMsiou5FgsDkErm",
  "key4": "VdwZb72FU3uVHrgoA8kZLqgYSVxKBvsNtabdnftnQgrbhbtn6bVPKh5iTdHrib9LNKWzA2gASKd3uyGqgBxngXE",
  "key5": "3zdhkV2krarJPMuGEZ6VTYY6i4gbdzyHGpnst7JFLCMr86FxTTQ1CkYQAJoGJepDA192pem3QfuWL1wUJCo5BnWv",
  "key6": "3ZBAH3FLDZPiWPrPnaCHtXDKgD4JgdWAfZq45EEQzAtzF261MUg2Lh4waveYiZThoTSCAhFrcfCUu6ePZZ3cQFbP",
  "key7": "5ym42ayWXNyqS52CgwReCAPHEx7eUz6ZMiNXDEfhSxDP9BHK53y4SLjpETD57cEr5tnNSm9pGkMQ8mCu4uqqM3hF",
  "key8": "1w8XuFtkfzFuC8koFFrbFAq5fb2L3JnKf5iW2SGvp3GjBGwSwGvuqV9bDQHUf3JPNBy5fFTLzNqJ75KP8KAFd5k",
  "key9": "2rBagCjHuUv3n825BiojTeJvmp3gNgs6jbQbimWm7X1GTVyYKY15qdwoL4DA6AJKL7NqeLTBNFmnfLLMiu2Bicyq",
  "key10": "2RtMvfEWnwZSBHoWZx2X31eeXN1DFVzHCqRvgzQVQrJmUcGnP3SmEUakitbcshfZQfBcNbV1NqGnPyostN2rUtjQ",
  "key11": "5bJoaPkm5SoxEzWdbhurvFzUuWUJ7ir2GM2G6eHS5h5xQaCrFRdXTPtURaiF7HLLhx66ndrLdD5kAnBntFkPkGui",
  "key12": "3afWL8hAMcvEkivhWud4WZcdYDWyuZaEWeJrhdQSysHzPRnc9y2MCqNPRU6377M6w8htiN45fTqmD4o5F4DpvWVJ",
  "key13": "4G5oNW1Qcjda3AmYVQGcTC3kGZkX39hS9eWwKmDe6Pn3BrkxvXTucmSWRfm9651CSYgS8RvZJNyqoi5MuChaYPap",
  "key14": "42iGPYR2MdjjRp2PgLRFGsVv8njMgy1wAwjK4Uk9ssj3RjoAfU8vyskAR8hyxgRsaLwS4MCYqdY2CCderNPdGQ5M",
  "key15": "4Dko41QnTAUVH6D92kaZQANhVwqPhC7ujjUyqzBzF254bedRpJJy7QJkbxkaModRQnTfAVtSW2yMN1tLZU8zW2EB",
  "key16": "34Ek2SHMKih45pDUHGe7fgSDfhmYWmnqvcNekLE9XBRovDTijk7uZmGGKeHqQ7AeDpopNw8kMXjCVhE5XGLgy1Nw",
  "key17": "3Gp9pWMq5Nh9ni8iS1hFbeAuFbAW7rcfBtnTzVkUsCucX4L9jj5TrCwW33s1Md1pSAtM4ikxFNz3snVnXLUYxpBk",
  "key18": "5VMx928MKcy6YsYGs7VnytbtARh9Au5Vdr27h22uYVLMGSWvENVYdrGsc6jzjyVWcNw5Lj7XLk1TsnL1EA2atPYN",
  "key19": "4Kgini66tRCt5eNrUGZf2Y2F44UTMeTf8ZSdXLJEBvyutmA25cSAXdZ4b6uUNfR6fR3PscSEJmYwKdx9sns6efhk",
  "key20": "3N4sRyEiyTaaB8AMmpCZD74mnKPPieQJixWke1ANuo2d2Y1RZY5WwHktJeAtokKJQZ4f7QcaneawbtdGJyGseStJ",
  "key21": "5QTFhyQvSBmWSvGqFHRm188mYAnAPrprDfCmp9CQwt5t2tfeuse13U92vUz4ZnbPzFhguncW1e6nNzxzPfpsTGVw",
  "key22": "49TV8bXhMvxXVPKUYkUSuEDBxHZUB4zGg8BU6nwj2gWmTidHyBoV56Q1suS8SBJF7FSmzmJ43fr82up2AbBsGV2a",
  "key23": "5N1cJMCx1jcnbDwj44pKkNFnNXjpdDCex7aCMoWU1uKpaQzrPkwNDxMjfZ7ZDr6Qf4qdv3kCUBfEN1gHDngwLQ3p",
  "key24": "4LB41zRa77JRJYfEJ5eC9MrL6xJqyUiRCarRQ91ozZUCUJnfYRjNdyFNcsiaqNkczcoomfMtNANpUdMWYT4ohhbj",
  "key25": "3UFh1fohuKj9heeVfUudiMz6piKpkLRHjXBm5ZgcZeueYPcPXmBSsVBsCVqbbp44DF2n5qB2efoQp8NipU7jZAK",
  "key26": "418CCmRqTKi6ZMuasL97EZAq8CmFEBEv3YxNjKKXRGN3JJzYa5WfY3pv4B8KJwAw6iTWiY4a6Drs9qGQjXh1bUz7",
  "key27": "581mLxJ1MmryuKsDqciZ8by6cykPxRdj5DhmQXvm8QWUv4TwaQGGSu1A48ix7byGBVqpM2t48EKB4u38gV1ohBiZ",
  "key28": "4YRpNHcibHmz46bKaHUPnZF2peZQ87L3qaynmWbTYyjXYnJjNw61UxGa5DBTuDQzPhQcgwgqXzaZ2t8dT1wvFUvt",
  "key29": "5QwrXspX1vUTsTwRvBaw1qYRgAP2zYknB2562Lmjibw5UJqiDDdr6MYhQehQvVR84RchnHgVtq33nX586hYqg7gF",
  "key30": "2X6SM6yX4rFy8bGSiFr1hFxfAxWM5NJSk44RR13dmrNkhCWmmZt9miKMcMrxNch9ChqGgJ38DGaJQyeTtc1d2nSn",
  "key31": "5KA6CLXs3fQKpVfAh6cvzrco5Qi5Yd8DbmspTy9ywkoGZS9pLDm97xJ1kaTKESZt6S416dTddBvEtD4adno2KAfb",
  "key32": "KxD3waPnBmVjGPgPw4gSS8fjw8hB7RtSXEdx3TdfERGPTEkgn2d1nUctSXyRomPnAATZHY8qQejk2EG74Zqv2HP",
  "key33": "2CoKTtVPS2PgwpyV1uEsRoUBT1Sp6DpV6zDxsJ7DYsoEcvnGMLZE5W7k8VyZSbcqiRAgouMhXuG6SUyvGPfnpZqY",
  "key34": "msifpXZGJEcRo4EN8ZYa2eG5H1mAJrxJmRNQZLD2kUM6sWfMPLyA35H5RdLBQjMsXx4MD2NPdYL9DgEG3TkZPNK",
  "key35": "288PxuSp3AUvC3eMkqjhyWez2HgJxByqcSdttaDWHfxZ3kVmCeCMGnLss2XR695Wc89Em9fEDChEQEgrWxUHM6RW",
  "key36": "eFqtRukFm8ofLxuc939A2PtC5iqmkcdeq6HPitaqz7LYAvDfMuyF9YitRsjKiegRB8cdYakuzU1xZp8rXLG94y2",
  "key37": "KTAcScLVfNgoswQhsAo25A7i13HRvbwmfb9EpcfyD4GnuxPPUneoELXsqRNhkRrHv8WKVVSPCEh5HvowRvGxD1W",
  "key38": "5aMEsMQuWhkEp5n26K25oYrc2gbuMSNKJzvgrYh5gd66JMDEETWtstww3fwAy93sL8Fqdx6NTepQArAUEZ12cJvW",
  "key39": "3R4Cuta9eiARWPHanRtRVczdenLGocJy83TLn5FXvfMiuZCbzu1CSx9QDb67X4jqwdAzXrfX8igRo8LJcLcjdzzm",
  "key40": "2bDAPNHRYnXADzsyam7k9pXBAx4bQCcbDSgzHrrm8Zff19vG1Meu7MwqphRsrDEdd2AzGGhATEhLiNjZUvXjBLht",
  "key41": "kFFxPmCbXRb8BA1RaNzZ3cnSCh8Y3L2rMUUZ69yHvrWYkxGpVjnoFugdwQdjiqTVoiDSWffg1BfyRw1zrREVnNV",
  "key42": "4y9UR6UxZcSEMMJoe5cSXFFnKYYDjx9wQk42pCrYbQDNwFhmYPudbw1ssm1FtWRVyg2nkdaWt8h62rXZiGma1JqT",
  "key43": "3EcAsAmsH55DTfMjCJ3iStpyWTwQsYRhTd16i9eyNfqYCrz1fCVUADZMZiMLW1yCknjUtJ8qU1jYjDy36Rchc1r4",
  "key44": "22sqbmQPKwrdCc81YXCy72ayjhg2uRfAv1RR36vkVGF6vkmYiFULUxZK3B2AzhoDaMbKNrJQ7WA94iPmH1f45WKz",
  "key45": "N2a7ykcgsF7jVMGYtsfbfuESYharABxWyGVcgeCoY67U7mtd5nd4ijsmF2ugNvwH73VLrwoJbypgVkcjJGmUynR",
  "key46": "3VDw2Dd8GU5kxazPPZSqHnaKd8SFtvqhzcVkwdbqawGrrEoW9AgnCcJ87GdXjpii4miHTLURyXjHno8MXRnudXEM",
  "key47": "2GENvRjiQH7ZMFJwZzhuehMXTBP6X5UDN2ZofBUTZHp3MNdWBKAV5whGQzzdb1Tu5AHcoEuwR17dZRN5vYHxsaUT",
  "key48": "2REijPuce77UaAm1FU4DaHP6WqSinK2ye8SbNr4dk3ZAqb7RvVjWD2iuFk4bq1SrFJdkna8p9Mh2PSCdksGkfxAH",
  "key49": "2wdhMngXwa4175MgSDhooAyRwoYM7WA3YdNfNrDdZgrEH8412jhESd8KbBaqog7APXKxMmfn3iQZeNAHECgwtdpP"
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
