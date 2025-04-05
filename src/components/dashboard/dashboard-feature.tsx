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
    "4YNYo6pdyCySfoKgDJzQvyMmp1ZGo5vFbsTfUgSfSmLWYPZJ5xurrsPsvgqsJTanj5grzUS7aQmz4h5rPGDmTpks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bRRkbeGHbB2QnaZ7fVhNVCeSugTsDK4DWzGtwAqXViQkCXJMAE5RqErVtnZq3KewfCkwhekmM2aTDzXYZ3WffUp",
  "key1": "4fE3zFZMt8GUhrFJMiKdFrM8HfNpomSbuRu1QQJAkEPZVBdzWS6RQUVuDuP6Damgh9uep8rvNcy9AToo9xixNRAu",
  "key2": "HQJSePsY76grU5WRLeBHEP7wKQ4k1GsgyN5Auw1KJU4FZZYktBdarVn32gT9GuNAkP41o7kKvK7p9aTNZDUjH6s",
  "key3": "3XSs4CcfgFgeyjrzDqTj78jULokFHEnMrKZDZTT6728wR1ivS4izdqJLp3ddEZWxcLVpgNsTi3etuzRjNgT69rxq",
  "key4": "3ioC2QhTU72DdeNmpYvtnbet9BVVesimEWYq57BkXnvSr2dE5TxHkDX9gXsAcRbZ6XK7s3P2k2pQC2QtMSBY4XyX",
  "key5": "2fe2UXSaTgY5M8mq1TnQdGrAJKNxV59udoQajJAy8soh8Pe23zRNr32UuKj3xE7FTEdtioNT7ri1iXPuPRsFzYva",
  "key6": "Ve2iTSvsYWox4Cz2nNFDSvvZqkESDiztzt3aXgKojoZMKjCmcW42tnwR7BnrrkgJE2kdA5gchQZvofbPjHzhMeD",
  "key7": "3hpUbMrKYxq3p29Y3VP1BfAhbA2y2vEdSJDivhWd8CGjcUxNmiXE25jFNP2aW3BKtqPoYm5bFHoLh7HrSUoKZ9D",
  "key8": "UnBywiLhrhfvua5niYnM1V5RFbufKRGJw7oHYwcBEED7zKtNEGKnTCwgb2iJFiqo53pS6rM3gom26D5KAr56Ak8",
  "key9": "4xwzbGgSBJmyAe2gfkA3e3qf7GG9MktJok5LgLVXCCAvsVSN26nDbDzAYg2ZL9MfZs7xzaMsafhzC1uZtag5FfLC",
  "key10": "5cysVxEEs179ujk33FDYJjwiN3DfwcwqdF5mfbzbk7WhZEBHKr4koJDV5YnrDeBKb1PqWaTe4qDAeuFaXpgjCMqR",
  "key11": "4FgxucPw4QrV4N5W3oYwYrqcA1mw3Enh3kXdSPpWLkLzVXxgzaVXtZwfAbY2Um3HsdpUvbJ6HDMLQqsmFe2CzKvz",
  "key12": "2TSZeERzG6Tzv8DQUNr2JekXJonfvQh6f5ezsZ3ejS3SYM83igYnnWHV446tKh4MCsU6pCr1RZZWWymFEURMT8FL",
  "key13": "5fqgyXXCPg4q65LqnCuHbT8VpWfen9UxjTZkW3zgwLfYjke8vhWfVGPCstP5UrMdty7hFYiVeVnYXGFcDMKB7916",
  "key14": "23aDZ6Bq2TFHrd5Tw7YkYkzbnpanKEFvesh1w4mMofz24pipYbiYt5KL8rgPtH7Psk7reQca72etJYs4v5rbZNAY",
  "key15": "3fa7MNj1zJ3i7fiu2hW6xzB3ftN9QRY2cEZQg5JHqTozJsGzK9XZkpGwn7L7Kq1TB9HYw5AP6HDoQA4vJQ7JSwwu",
  "key16": "4G946ssoGBRyCj1unyhriugL8jrjam8jvaGYCWHae8AXF1GnSCJsT9xG4bhB1VwxmE7ajJhmxtEb6Sv9UdmKHLS5",
  "key17": "2UQg6k4XKrFYp8yQhLvZojp6pDM8XKPHng4YdpTC9gJEWwbkmns9poLZLk6qXXdFMX8ZK88PAMRb8mPynbAeACYE",
  "key18": "2pUjJ7cSGfPUJ4GPZhXocMAtavHf5RqnvALci7f2CGkfdpB7YJLdbSwKkZ7KXtKLaC6PWU6qhEoyQ7Ubk241HxPU",
  "key19": "HtNfHts3XtJ2rAYy4wCdBpnwrzc36oLCQxVW6sw2WTpDqPHg3ikuwzCCiv7DPcv7JA4Wak9WS15cZjNUnq3aecT",
  "key20": "3s4w8LFMvzNefhbCVv9ENk3gvoHN3yStxrqF2DDLwtzR68x6xrNmgQaNisYCDtN28cqNqhdoXynT3z3rPepmGsQW",
  "key21": "41Vbis6P6kZRVm93h38F31YpibPerH5fKN89DYTUgaQa6tbKX7WToeM1rtysvppyqh4tXLAX8Jc2PmBR86sL52s",
  "key22": "AH5T9jcNzG72Z3gMqzeXv1vqrfqGjfm7Vh3QErQypNx4HaKazhrFMxCMyazdutaXmMLkEcNEUVviVCXT8beMEna",
  "key23": "4q92JnTQCLLkV7yACQaosUxSsSpM2itSQedTkNHFn4Xup8KeKTVWxy7GveXHeHKyugi4iRmQqcyqHTiPzqgNNkeA",
  "key24": "YTnHAbG15jRZki5iqZi4gERtGVAvRuPpGs5uwgVW9aWHfgtjPutgSwdZ7igy5qbNUHuAgqYarusVRTQFxPP5jwp",
  "key25": "5kNCbZnnotdY7m3fJLpgXHaNDkigvX5P1Xr66pT9AybPf7etca5vgY5mvLGWQCsn1tj8ZF6NhQrEuuBau33sppUF",
  "key26": "1QhvPfSKuCbHpNVhdbx4J1nHCWUvR7FdsbXXpeB4QFyNW4VbfyWSjySYKcD5kikq6add7ZyHX1sMN373F1Ubpr9",
  "key27": "eVDvkoL6FQ6MhpzvVvrQnMyshpf5HHh3Q5CG3KWW9CfVczPAvCTkqRcXSvfTruxfbTyxEbZp2cqi1oJoLLdiwyz",
  "key28": "5G8XgVPyn4HEKmcGb2Q4zh4XKDcy55He4YnaG5vp9jCSCBmk5Q4uzDyYSrrKnSKoHAL8FFCE7pGT4PhYHqdX7fbc",
  "key29": "2TBCgZB1pe51ZKknuuhJdQRekX4x2teo657AzSmTmNytvbTuz6DBL14DdFVasuzBJCToUgcTL33n92LNoATXW5po",
  "key30": "3d3uiG19kPvjtPWy274gFf3ZFydnbn2P5hRQJmrtHLJ6XfZfj12wMFeecbvNcYE9NnWNuff1u74Kfxjq4Y9gtwhV",
  "key31": "DCRJ6xmY6Nhh9rvHKsMesWBbF19HBqsqZR5thbvqEHe332rKS6Vk6de4G4gLiHpMMjUZgRe6ZbZAdRLQnQbTa6e",
  "key32": "3FJFtgcznpqrpF5ruSunMdmycji3T6CR2Fx7y1Q5MkQA3mxC6bn6rnXnxjhVQHzrwZLbrVC456H4BRZPZpib6Rrb",
  "key33": "2nYZEZrUcYNZAdpZBiaEufANESP8xTsad8nPTuWR75bnkkux2ujXTbkPUKkicDPgh5yVFtgE4r1y2L8ZL2c4tT58",
  "key34": "2ue5WTqnNBttGtdKhH9DeTdc4MjymL41XFxMxERDJkJhbE8pSi7fT7jgdowqCRoyWjbRfxStKTVYGU3ScHMLxwQY",
  "key35": "5HKCBRdFqSs9BLf3jDczuuESXcG8uNmSnhapB3kbHQF16FJJNaHd8iLTvsjeaXvvQGJSTTx2qDRSqYQb6AdM6Q69",
  "key36": "4qv4nNumcU9NnzK2fhYZQVffEj5kFffrApewoA4wb81sHpyiNE8t1m2KxFmtWbrhB1wjHPt8qcwAjEuJMCWDwrFD",
  "key37": "h1cEoTHurVffGUb2WUbz6ZSzbwgk1t9uanBh6xaTKsMksM8zxJmNEo69wiQKmLG6L1BvvgoUvLBz6PQYLXkutBL",
  "key38": "hyiyCibkZNBay5uEmssvkbj4YYVev11G49whH3sUgjwhTgLK2MLiJ9Gxau6WmP2nJvb3aVpTjNUgKY3iXNe5fMf",
  "key39": "3vtRcMGjdrGuaidMQX3dHhiEgeLMNnB2YcRRJ9qj8VUym7PknUs1ZqkxWGJ1oDFSr35pF76wQikTeWgqeyaknFoR",
  "key40": "5LMHy1k7YD3gfYEa5j5YjChbxUma1VZ4Ufwm6DPMfcRE2JsXzZUFnqBRDr8dNFXocXibWvZhgavvhDae4Wkfu6xP",
  "key41": "4toXCKmTqhdUDHRLnPUxVmQFfec3SE3h13sYpPrTTBCLvHDtbzmj3UqYE8sc4aB8yxwUmZs3T2K2nRHoXw6KrFsc",
  "key42": "4CVMaiLqUSD7cEGPqx7oHMzHjKDPfyFefa3Fe3DMrEFd6xZDmgt5CxK29fsto4HjLto4oTWL4512e4eR1WWu4VEe"
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
