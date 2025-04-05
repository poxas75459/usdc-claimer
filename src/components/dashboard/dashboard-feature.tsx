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
    "3Xc3fJCrEd5UjyunfsDNWaVqinB23cDuEXRBQHDf8U8kPx9TEtGha39XXfwhSPCMA3TDsUFWauBaZKqXqrNpFWvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWEVYdqiGAqyJnKkmNoELy5vryFpb5SJDrueRT7eAYhhmhMtoownHRAoKcF5SSvE6B6TDmmvZfWGDgks1rzAaT2",
  "key1": "3Xs8qJkJNkruV7hT55FB63ir4VkEHtiJTad7XBMTBwMmHNE9rg6DGSBCJmRbQi7fbY7v1oA3PP9uwVCVGYSYcfga",
  "key2": "2DxmQnhbP1feeenoKiyKGLEMHF54fpSYzM9LWpEbsgdYXKwgFGYZAGoCaqP6x848z9xuWJPfGDCdJE8vex2FDzhw",
  "key3": "2e93tkGXDCSsM6ozBf1jGJWKHvUtuPg6fj7xV8kz12TCNnYgfsCsh1wEnpj1Zw6tZcki2Rnxh9j1eg9wRzHd8FKg",
  "key4": "3dmWdzm71VgPVovL1eQS8C5q1nzooQBr4MrcuFcgyzv116Bt55h3ZAYy2xduANHcCYhmVDyWNFLyXJDwnwPTmyVq",
  "key5": "5SyVAb2fwrikv1Fd9bLT5cjbAn7bJu7apYUKZFTdpkx1GRgYPYHPgmP3binEKQ1GaM4qwccdH1cKBoA5czZrdWtz",
  "key6": "3TrViasMQTJb8tGu8Yp8VeXyKfy4GC48HT2YEUWgnx6YS89ZfQAgVvwETfFy9JAycEYxGnp5s6Vnh2SqmExNwXXe",
  "key7": "iCUUxKbH7rDRYftgbKrPzBeekm7MtXjktb8VL6HYTVGa6xzfvgCgrhh8wJRBCVNnVHNeKTsehFCsdFrXiupo3nY",
  "key8": "34d4Bzt1kXWCEkeDTP1kLzKwAzCaac65nfdM3bY1HpqywanD66EWaYqrKnB2VaGJCSkdxJ6VewZSWUiaQZKEuJao",
  "key9": "2zxmyASqqidr61eKHLrbDYsPYERZhELdpPHCCBaAF9wD9yzQA6fwQhDD6au572nh8VNdM9NdwnSFrLU7vLyyi9a3",
  "key10": "Hgeivmt7hkuK71GKrMdHPXuCXRpaziqXE8QfhBqdJuDkofwcmTjUyGLw17tYaniwwAcqah9hZRCkDxqg65M3rsA",
  "key11": "24KvN6DYQMQR7ochQBJGa6a3GHdzCs2XtCCZmznEFrSbWbGfUw8nLSTr5PrhybUzkcGisQPa7DZ1pecyRjSYFiNR",
  "key12": "3vKPnQ2YkCYvf47x2tL4QLGwhpgf2mh6Bp9nmqg4pqPU57ZTtZhRr8tbg3iC3nMyyjfvaakYfKxooe5vpeHs8e4d",
  "key13": "4p9vzPhWbAqAET2W4yxp4C6c37YzydZ1YQ6onvvCfKRcJqb7MiYyds5q96EmMoSKu4HP3hZ9qtwmJawfq85tEGje",
  "key14": "CtcJnU75xuNVsr8e9YrDzs3zTi6kiV5Hyh5KCxt8QV46taeEeUVGdFh59J1nkc3kcCBhwUYnGHdTAicL7fPxjgr",
  "key15": "3dnvcQorwrnkdEwmxCE4EE5oZw54TRj1TYF4aWVAeTbBnY5jrn2Lb15zZgcH4tonRwVV2P7X7CxpxtcqSthtJTh2",
  "key16": "tecY2nuWQbDw4XZYTPj6nbe7PVTxhm3RJrmyZb8LKGoKQL6hXztmHtpQyEAFQ9186oYoNSUqWiWp3F4Tt2Ds1vx",
  "key17": "2mh937Mb4hK4ykfmHV1eiUi3GU7PomPo7GEtJWZ4CKjt82jHPwT4SB1gcGxKjgWoKqFyRZLo5YFY6fG7PiwpNDWi",
  "key18": "VZctPgqs9wi4LE6i1QqPBTRqPMjNR9uszAoqHQYYqZXo5btdoLEqR1ZQ6uX494TZJfAZVPFPKCso5ZWEGbiEYVc",
  "key19": "4XBPiVXWfA719QrmWkT7nDeHfoLmqMmstJiEt2hMtkvDwiqGeue1WdfuPmJ4Aig1PtwZ2N2e1BLHPPuiE6ixPFdw",
  "key20": "4ueduLJJ1KZN9aG6VevGarF8Us9DYELU9oTwZigjgfWmACfB2zSbmfxa9k62euVBcRXDn4CewGzdKq8LL1EMp2SL",
  "key21": "2VNMP7LhE3erR4SdvJADZzs5AeJdbSA1Wwi167SRxvxKP1PA5L3EjiH8bwFr2UDR2VpN67q44jNJ5SzgERawbo9y",
  "key22": "2vSS5CnyGVqWRQBpVS4MF7j6fTfsSh5xCnxgo9KAjSASPiNZMzQQbk5zVR7f3fnBe17KCSbatb9RrspGpikSZfnJ",
  "key23": "2hXBAshGUwr7JhnKLBZE6P4fSBVrU4NmjrDNtcQWrv6hqzwbPC9FHr3ZwpRL3iqjKfNP9p1ahFQhZ7g1VYZRKS15",
  "key24": "41KADvDv8n53D2VVVkPr2ZzjPWuu4BFXSSAj8bA6rbsArXPCwGZ9euDmhsPKajkv4Ja6oMM7wJM4nrUpFEmoxnp1",
  "key25": "3BzQtQHSwtUqxBvNGAdXymVoYupTmAFvdqwvuC86nsv7XMhDWqDW6APUAnNkabKGGx4Z5aUp9inehkVNWdgKybky",
  "key26": "2US7fApcxUxJPVQXbzqyKspMWDKvkVXRTvhtsc1ipgxj2UaHGRGcjTtiXKpK5c1SHAE5LtAkxgXDcA2CoyMNqRkn",
  "key27": "5zD3MmmxJm5P2qY7Fe4NZ9s8kQtfJ1mnoYnueG5bj8UDubhBZMQKoe3AbKgGzQAgiCxT9kFkKTa96ABwwCMsoQHE",
  "key28": "2C5bVjmmh9xViGsumxaikfMazEMpur4jLF8xVvnD9zZ5LWg4s3oLy9KJbXUCnhpAQAtJ7CJA9ADjh9G64bHdQsv4",
  "key29": "3Lqj4YuZQFBPnJmY4YmnTDwrzFXur3fcvnPgFWS9XQekXmQs7xQ1HwRXo6wSEX8NzJozkGq72cZ7DK9FR3bUwgZo",
  "key30": "fRzWMVsyR1J3ZUTUVzeos3Cfv4WCrXXeYpsu3XCMx6vD1eo9nj3rrhDW3ELKiXRacAhuqxTqtGg3mPY11UKxRpR",
  "key31": "4Y7rExoPq29AZgDRwx1w1aQFUUmaczHNf86xTuUYxKKWs4uwAjbQs6yRFSNMQJTyzfpiaz5JqEF8GddMXSVhUEG4",
  "key32": "5QXewVzPE6FwJHN2WuX51NhntLQZdk795vbmU4FT1Ryt1o49X8Np229pbHFXnf5yVjo1XjYRKinBbKyghFiMU3YV",
  "key33": "2HjM8jyp7RioejT383fAARjjeoqsQRR1Mb3iW7ady6VT9XdDhTtmhHauYN1S1oVEfxFdUtj9b8Q6qcvbsuUmRTJt",
  "key34": "64H95sqbF2YM9KjZbwbzCpYvmkyYekaeoV3ZD5iAdC3gv7PYiqm2yKFxgfaLy2pzKCpfriPpJBfWjDCt7BfkUWgC",
  "key35": "3K2QdfRu7UU8xs9TJRTGDU5LDnEkd5xSDk5VDJbdDH8poqrzbfWpt2mf7SFxPxHBPg2g8xBmuuuZFcJh4PYwkxAX",
  "key36": "2ubaYUnxEyhV7aaVqEWfavASsoub1sCkBLz6Gsq6kJmCQfUvv1uMq6TjNA5ngxK44VDukMTmkM1T2LsFXRfeHpJs",
  "key37": "5Wj5WAEKQ8WWfxVLwxd1VuV349xFDPHQFrY12TEocwFgj5aVDU4egZZCYwdd2SY2oMQFSXCszkvpF3YR6dBubuEE",
  "key38": "66cDuVpxY98xQewkbYA9EMuMCAQeaXJfbrjCDiiNwptRC4SxypWv37NdWd3ASyLYJkKqaw6TXMuzUXJ8QvXrbqK8"
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
