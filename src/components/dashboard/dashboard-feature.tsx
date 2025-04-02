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
    "3rcBBbY6LAZAZNSXfSM8CY1d5Bz2yaYtayQNYasEt2Qf4iRrd1a1m8mgw2uHshXrrhyMcKBPj5sJohNFMGLfoSED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5JZTweP5B84wGm6fyuDDqjLGfZBVgs99eBS5m8zGbu9TfucnJ9kUVyfhifnCv9xDnk7ZF74qMhuj68HGQW8Z5j",
  "key1": "2Qppy1zCLoUmuaiytYeQiHRT7XjgS1gZadBqnhK1E1jVP48SEGuM1u1JdqJpR8sQRbFTsyaJSwL2T3yinsnPm3U1",
  "key2": "4DFoqFbwFWaGdbpNU4xokTkit9Pk7zrniZHyKAaWVLWZwkBPGNboDjeWQd1B6V36azQdDt1GaAjowjRPXHfZPT95",
  "key3": "oJJe4g7nkgwkPMsizdB2mwSePZC4srXxVwuPTmF5wntiT1eFDnmF7eCStDM1RRV2PJUE2rXYnKUG3GnmCKPvDkQ",
  "key4": "5CaBJpbPVhH3K6qSix27r21xu72rmcPcnaqBr5d89jXbRU9LWCqFuBQdGRMkAw9Wyqp87jiFnGmVmb4GUaXxyLpx",
  "key5": "2HbpeC7UKgFqRAxdagKJHF53zwRdLmiEX6V8CmipHxVLWdmPGjEk1uhLXb6y7S5STeohjoXSBDHpRvD1BDCcGMkW",
  "key6": "4HYscEtaKkwpo37ivH3CLEUCh21fsm1xM62j1e8aEacVH5vSyqkifGJSf7KmY7ph7pU1cyrU8f9yiXbkXoCF8nuM",
  "key7": "9FsSuutJGUFLmoTefxc1XqZdPkkJr4aSkqP8gyFUw5mhoEDqspdyuDzTXQghFnMNy4mDDKVYN9PTFPw6LqWbiPo",
  "key8": "2hfpnsugk76oVueV4P5UF1oUwsKChBTnSb6FSz3htoCqN8ujje99MqHSEFMsQRoGYPzVDQ6LMu3b2cqcGXicfni8",
  "key9": "hoEkXSyuMhkbudcknbYkVUJ7H6dPhp6eJGpV8Ph2izz1aNKvKF9UCgkdT9xfKBwfdQVB89XA3smJNvT2pMWiyz3",
  "key10": "21kiHwdoeq2vQQfrabWcZcH7cYHhdAsBefKzPNbAiqzCqSwW65BFmZay5Xpf2UdDE3UGKh7kgDrkHYtn9k6KZzEW",
  "key11": "2fHNJG8VPEbgMfkxgQjAZrzsbWCYzGKnct8wiup5cK6RXZkePAttRm9WR5k3zKwZekiA1m5Qoftpwwqr49xyw4P1",
  "key12": "j62fmsyXFSnDXJ4qZLddm2jB8tLc1Kg9Z6o7953gM4p52jVwsNn5XGymcZUjaTHJbYgnvqYayWHSQqDewCcM7bd",
  "key13": "2qqQjn9zN8VXximTgU1LCLwH9c3TWU8vSWaWBTP5M9LhXHjb42JtwN3iQehNMuJhaj4EmLhWUb16LM2y41mEyoMA",
  "key14": "61q9UJHgpdT4h4YdEVPjfd6dnyPAYwVecnHYWrLXzshY4Qt89dayFGDXDNxZ7F6HWiMATkA64Wtq5iJbmdN5yrxh",
  "key15": "SjuPi7ULqCMim4SzCrVJbsjuuQQ7MiHfpJgGa6UpLbJ6ABdMzLgUZRXzjqp6qe5q89LtgKgKvjkCS2W2YUkBctD",
  "key16": "2PfVHoK6Bcezv4rKqwRccwP9LaWSV1gtakVBqDmNnQrBBdaJn5cwu9n7LwfKXoTqndyNWWRqSR5FYk6tLfDQiKEZ",
  "key17": "KxRw53Uxc4PrtwsfCMhANTVZqPy3YHeaKeJC2hz1UJ9L9b6TAxsRHuSz28hDpB7Fp6hKzFsm4PpKHz8SbHUuUX6",
  "key18": "32ExZSXXrfXht5Ng9eGfnLxWo2HxotzoieA7GVNnT2fReXdh27fhVfyQSpkL3akJ3cL3BhD8aCCwNZtnunEojtpx",
  "key19": "4oncCXH9J4jLwUBM8VSgDkJXrc8sZMksYtZjdJ5v2KF73VRtCFj7SeRmcGS74ThzQPE9egcZXoWEAmVV8xCyQBrb",
  "key20": "5rPvkwLQ3DMNmJchTdnUFhWGvDQt98Ro64uCqAnHLf2NwpfTLxF6TJRfTyGdeYFU1m7vmBTvUvKryqyZAhZC4BmB",
  "key21": "MCh26zGwMTxspd7d7Cyjyz6HeFLctp1hyw4J44QCNfD9VHBVrwQPkYo6jAQLYCmUyr2Y8MB84Cek5NZ1ikpeUx1",
  "key22": "wq1SYkC7kcLzSyQGgeJqThHCFNrgErtQf1ZB13NgM1sZXPTJxu266McT2XQFuK618xnHmnREdJVkgxfCa19C2En",
  "key23": "4JJfybZ814H5kHNzQkt35EyJjff2L2faG2o6hhJj4Xc9svn3CqGKu78MeukatXsytTGZkWbDunYSvwqJaUvjDLRH",
  "key24": "2QWNWV9uQcsitjXBm4yqwLahzpR7BQJb782kshvUEDc6ZHGvFsc2mxrVrRUWzW63h8PukWDCBdh5onnRDKEuksLU",
  "key25": "3ZxEE7iQoUVyJFmEHsMSE3ZmwBGwymPXqDRTzq1E5EyPcPnZy5UVfZpJAeVVJRhMja8HZv4ARcQfp4qjeykKCca8",
  "key26": "2V6Ahwpyr3Km6rVUkKT47heHUmb54Urfd7wQvCdZqtvwWZqJZiBoHPy8Bbz6EEsng7xGYuMMETeYubt3RWHgmpDF",
  "key27": "BuMuXa2mrgeKio36xDJhmdRN2d7wmiFo68S57qbTAmNNscbCGXNiAk3D4qDx4BqHR5o9Y2VgnVVvzKJHfT8yAiG",
  "key28": "4KcqtWSyBrDsnND3GsSawFMkz3sTDXgCUtnifRM6YGRHprkrsL4FZLCf5JveYXkfQMreXBcE5KuJDm9ttHnkgeo8",
  "key29": "iueQZH95XFFAWe9iMsm8qeK1LH1a5vLFx3weGnszymVrrN9JPPWbv4rp5b8sqUaY5FyRntS4fjMBGaU7JTg7efS",
  "key30": "3xkrejxsT9dXhn1pzv66iRs2PUAeZ9F71AjZh8zN1RceRMdMu3jBEt7xzxD9k8s82p5giBFNot53mHWTcJbAXMsJ",
  "key31": "35y5TurPNQHJVQnktoU7BjpP9GzM2bpPCPfqXQyVCdSaixYNJyjguroUTg8ukLjCSoX4c4HRb67GFERTX75NqZS8",
  "key32": "3nwGnBLQVQLVLGuED95gov4e3RATQ7ZWFeDTqqjY2zkF5ygKNXsPVQBSSEoxbJwLRMw4SPuyWmQJjNzdH5jUYCEE",
  "key33": "2httB7U5C7ijXaJnkanWA2E44b9nyxHTZXnhSMTz76egPG8RFx2YnXdME7kDAVD2EFWo4Yrve6EywrH4MHnFQEGn",
  "key34": "5DoVPFXm6zP61zseyNVf67PS9aTCoXuhSD5gHmARyibw1ndvFN2UGDy2RcKjwmAxSHJSJH9ScoXYenbws7P5YMLw",
  "key35": "4GvNyT95qnQZ8yF5AzBXPCkmc3aadHE2vrRNFKLbwQYs9kmCAQM5Y4h9CZrTBv11ntJESxSwjjDJhC8WdLLcSng1",
  "key36": "5zxGFsjnj32EtQebVmj99aMNJhr15z7E9ChnHZC58s8eD1mTYA1CD9eJbkutuumPyN6pBH99UqrrNQddXFhjfqaM",
  "key37": "4yrvEXWL4okUfc64U2zHG1Q1CEnXHA8QJyZ8FgHtUhDJuztjDop3Z1dJAHo2HGDSjNt2q3v3jHUikRfEMJxwLnGq",
  "key38": "1P8xCRaLtHuLK1Nb3XHdwV5NYNn97PghsDXnGiLgkpUQ6MrmknpR1usaf8dpkU3TArT23Sq7bWGA82j57ui6W8Y",
  "key39": "2Jz1nojTiSbGo1wVKSpKuemU9zYHHa8xhcM42fZrRrBawWGiCvyzjNuwfh9iMv4vHnCNL9EbGAc1iokPT2oiHY3t",
  "key40": "5oT6KkPkBsUHa8T5bQJg4KuWmnvhBJKktUsfDfNSTUVoipSB8HNYy5qWM3V3cPxNdhES7vVhxAViUFbjYU3dNF1K",
  "key41": "e7Tb2TLHToMZGAZQD1HMZDcgTZdhG3aLMQmxKqaYuHs8LZmogFsL41aRS7waLcnnnPmHZExzd4tBKzNwHLvy2pf",
  "key42": "3reQaKpp1HiGGyKzoiRajWfTJfLpJ9oUy1YJuFMPucDA16PAkNPb4uH5RL7DR6ZP4b77S65uA1hDj3BYJZniq7py",
  "key43": "3k5BnrvuzZXf2zH3uQkjHHyRPEmfBS2Wcp1Y1psgFnwzgWxxerNSDUW4B2sshJ22ZQup8bLvSxtnFWwDeVcxe9Sp",
  "key44": "2Adj7dNKsuA6DeHnXxPcATbBkmywmCtKMBTGua7E3hcmXZBSYWfMqVds5Mq6yGrXJ6ddGDQrUqDeCNNAmWtZoBeo",
  "key45": "2U9sJwrURUsX22QfuiCTS2TzvrDEuCYnLLPEZ7AwNgtBJjxzMjxkqGuc9GjXm5iLcAMvuL6U4LhD4J4dZha1GXtB",
  "key46": "NviKk8kkQ4E19QzpBZ1z4kP1G2ZZ4EwSaJjyvL1VidZDkCBGq2FUUJA61jwzeDMkCWP1H33nh52k27swi16r5tJ",
  "key47": "5RuEtQkzPMm5Q5VRSfkZHZ4SQVVwSZ21RBqV6M1N4cJKCCaXfbDAei2Lk7sR5juZXfH3pEzbnfr4oFnqRPtwsNth"
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
