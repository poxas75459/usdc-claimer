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
    "2w6QtpV9xcZHFfwdF72xCmQNKunSsEHBeFHeXm6TJQCFZbhfuVUTU53DhoiMX58N4tHL89G58swUeP5fnj31Rrgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mx3KW6vkmGkL9LoNiZBQbP7DoV5scc7U5VWCC5mY4owMjwLX1MoBRvWGBYpyqSsTao1R2LBTrQvjLU9wfZs7j6N",
  "key1": "45n7CfuWLaeYfqHMNdUBEuWX8SjH6i5D7RYsMf8xQ8fJCC5rS5NnLVmEuob7oLj9RACzkS6k4W1o7bN2s4vVPGiR",
  "key2": "8BHJgJSYFaQoyGEkKk7ZtnvVu9nmk5Tp8Mbb6jMQQ9diRK2TjfLNJqLpbFrLUFQUPJhytNJNBAygKz2xt2MRuHj",
  "key3": "P6t6e3xRQ5jEt17ZyLwJi7MEPh5oo6f9NjMJ2BPXCLV6sk4hCBYYscmiiNFx2EGfV2HVBczoe281j1RYqjY8FSr",
  "key4": "5qnQ7W8cRUsLYq14FADNTeWkypqpEgAiM3bFZgAwCFKaVxQyokvfNUrYPWzMG2MwyfM1nrrLBb6F7kVgWF7QE58R",
  "key5": "D7TNKAHT4VMXC9qSk5GTf3mQyTUhTAnHgmHNXwtpE2gnj5Ch22GCXqv2FvYkXkd5DhxMpDuq9NWf4jmiVuGPE4J",
  "key6": "41HXgyKeXHnjpn28RFNLr5jeE1DXwRkKzURdWnSf9c5FAy3L8Gjd4qSzwPtAmuuWdaXqQfpd2KF7Ztt6aBBeLX7x",
  "key7": "R7iqT5b1ChbjDWtVvwU7qMqsUknKoDkU4Pw6CGB23Xt9pvbib4U5SAi8ZXBQ7YYESv5GCY4oxMjc2imJToXbQnk",
  "key8": "4JcneL7hf5NmFLBeDsRrzLvguSdn9J9BobW9eG5Uhh1ANzPKL95fT5Ua1gXivWuxb47dDwtvvAk3Zmg3yqjvaQ7c",
  "key9": "2yJF513hrwvn25mngAHS9NwarF1yS3rTbE8FdUXkvBQjqi16wsssMpGu6i1pcLcQvXzqEw13cv2SrGXY1f4BR6ey",
  "key10": "udWU1Tnkc3ZdWEtFcmh59aRJrNiTiVuvvHs3P3FLf9GU1XXvhiDgZypMa1L958TCi4arUre56sqesYcFUPSRuDq",
  "key11": "5kazW2oJH6FuNw6Pru6NQuuWcRPV4kc28SKo4MCUEGcKjhGxiRosWpNtSqEyZcqEV45Ync8Cpc2EdZvpqzsdtczm",
  "key12": "5tEgigUNAAM9ABqq9xpPG95Ra2H4cBnr3khJf7zmXddq3PsDtaVenSuFm5DgzgK9qXr7kTWUfTrjucdiRcLQ5ZZU",
  "key13": "QqtXw9zTVbzDGrTstkoyxkckJjH6kMa3KXAZrBHGeeeuvgjV4Vm22pavS5uxzaDdwLA9DqwBSPqM78skN6vo5km",
  "key14": "41sTs6pGA18W1wZM8nKrrBXMyPZLqUunmpP7tvUmRS2v5Shmf9Yxh9k2LezKs68D36jK6XhqgdgNLtEwhPCgVNnP",
  "key15": "3oQVPv1WfqF8snef1h4vHGvNxBBBHQ4ZuC3hG1hapjhFtndD6b3CuksZCmHbtyMvXLL1D9TSmq4EgHWJGZfbKvqS",
  "key16": "3Z7j96LD2edKXgE1Zv8tGWrraq1bUetZcAS4xXMwvbc574t4ZwK2j53QV9tnoWpTxyfxTDt1B5T1BPKpUGJvQfYQ",
  "key17": "457dg6eWZHtx3rJgbd4cxpjUcPiBjn8ej6hTjJC5dpcMWYmprEMd185detvSFb1jNYiXaGMmpNLhtWNokgXS8HqQ",
  "key18": "3UTUw4YPqfM536zFxPKMfk53iSi6DtVe3mXwtj5KefTGZphCUGMKLDnpY5n3ih4Je5KSTVTaEU6RS8hSpiqK6NLS",
  "key19": "4CHc47tZt8ZSyuSiLQBHBt3Ga1urvR6Sd9xMQ3dKFDqmseNBb2rHJFuHe9bhGoy5ur1qQPEVgYs4uUwo9RiJdQyz",
  "key20": "pBkhjE51zCaWx46k4FK23NQjKEzjov3ryn9LNX4FBkWMKr3wecMZxZ1oDHegrgzK8Ah7ctLgiuSDyZEfUmnkonH",
  "key21": "4DtTzbABrNuPF7qregjPdCrqeC34uP53fZXnR9GgYR2D1U5HUsWA6eo8V1nsKUqw33DASjQT28nKXtTJ6L21v2by",
  "key22": "5KKniEoD2SdbkgpAfUiR3Jy21X7xwfFTAEou6w93WQRANAoDfbggogJgznNQ73Q9HjADjPHtdFVinMyEmTCM6Ypk",
  "key23": "5pF12Ab4VkFHFJvGg1R7pBaqjeDjJJfcz3iF15XARdjKZZYFZkJ4S3URV9PsynTo186SCLdJ2LBh5Pz6SnKsG63W",
  "key24": "3xQHspB5TMkB2vFH9ucYy6MGNaQE8nq9ugVc4Wnz4rp7BavN8kKNgPfYDg4dL8X4V5LeeZnhQeQ1orV2NZNMVZUk",
  "key25": "3nCFCnBQSyPnJwnFj1Jkt3Dwa1QquyQk3bGhbxVejbMEgQxSATpczb2MQPnwLyX5HLrC7T7rkrwHJp3P58F7tdF2",
  "key26": "2YDKy3Vjv1bbDgkpoSgaRy7u7V1a6hu5hFEobQ4xW1KRRuXZAquf2RRx2Bz4Ygd2nEsJSdRTjRH5KgwqCnhX8wQY",
  "key27": "4Kd9wsAKWPQmpfL3EdAMVNDMFvaTU3g5acWgU15HyEFydCqkcJBcNxkAjUoNTHm6rzvNZEwv11c2vjyqjUu5oJkr",
  "key28": "2pSZEp49bMpNy3A3GJZWQqtu5YXcT7w2tCV3pBAKQvjUj9vvKdkHbtA6mWNGvHMRb1o8qYqHon3a7592v4j1Z4Hc",
  "key29": "49kvkcWKvnV4JJEKtxumbcuctiezAUKs9Tjp1CgDShiLourpjK8JmMr48aZHbvtPCY4KNyydCAJKCW8f4BDNvYmZ",
  "key30": "53kfbHsKbq8ZFVfAbUpWV2TXi12WHEMQnvLgBudYS7jmhQGjSrfRu5p3tXt2m3rJj6CygcqyrsBNCcGH4QCyU15G",
  "key31": "wzwfR8f75uuXp4ef15uWU1Q3BthvCigHm5hTQszVg6QE8G6Amxadm42Jn81ghg5kE9eBNEr77EpeMQiWZL5L3kk",
  "key32": "4k36Ay96VWgApxdu8SEVyJ42NQf77rLsNpkcterJdTpTC4hXptbxH2Abxxow2RZY35kWNJdfpaFrBAcszDWwssFo",
  "key33": "3UctrMuAAtiuKm7Xtz5vChAM1bFM3xuWtAMUPVg8AgMLbjuBs23MCnqf9xu7q24wVcDcmh9Bw6rKkbXycFz7tfMg",
  "key34": "2cJEkRxB3DUU6uFC6XRxrwJKWnnt9VHP5tpTazRvEB3bmnDKn3K8B7QBxKLNaSAQZp8cFigJJU5xeoURXuzM2gqD",
  "key35": "4KBEghDryRMv2NAzrEE3dWfkLbQsaGWVnG1puUqRRJtXTyvCUE9mbgrumcVb1v3JyqQ4yzEMH5C94TAjrNXvUpc8",
  "key36": "3gNdoN2JtS1TGRzkuctfQHqnniZP2EjPWkedJ9FWfwS4VUYzU9rnwm2viYTouNvLUSHWUNDrDfmjeQ8P1ccPsxMP",
  "key37": "2WgPd3z6LELJBETDfwLhQJoCEyEYUaCfoyTrJXd31dfBJsxK2e5da7xaQToPwUmeBf8yKvsizkGFtfk8LahgtrM3",
  "key38": "3ZSjFMQB374fPA571EcjCrveEoMob1iskEZytsTPg73BQAY6uCyaV9c3mTgMM8bcVTLLdzrC9ood8uvH9jP9MyzH",
  "key39": "2k4i3dQeWqEsontZ6AVUAnWU7mpqwRT5ZdtGzLPiM8n4SA2ar8mvpiLEt2XoFP7fQZghvQL2meBiZkFguWxK7NGz",
  "key40": "XdQFyGVax5qxbnWdj5DCZJtyQx7cdkKNu2Xas5VWqhho8bDWSXm79QeS3rWC1KRbN9a6JS1mMCwFaKnXzZ8RcUA"
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
