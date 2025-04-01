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
    "5YxpNRCho6BTEKYcRDfvBoLAGyqHneZMVBaJ7w1HeP17Y9oz5WAb62ruqHSRzD9ToKKuNdhT5LQ8BpUVeweixpvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqTGeH1EMdZwcNE7hiPGevDHqgCvLuNCLjv6Vm8YZKE2g3voUSkMggzPZL1Ui3JL6KN8aTonQkGFi5Cs4i5FHpP",
  "key1": "5sQqHHHMYEBKKfFe5HDpawXonZk4pcYuqZ7WFwPvYuuaCbgs7RkfoRroBazE1rJKF9wDYFd5EFf519sHntmLJFqn",
  "key2": "3ipb3ijGpoCkpLqSNC9KMSy2CAmW6CJohh6GopjumWLDqp3SEKkrse6ikZvaAjFuWmNhM5kxGZZdy2mezGXHE5mt",
  "key3": "wTV9bbFtn23hQHJNVBgchuTF7ennHjagocYG7mkjBMLVtqk4qsMNiEKE5Ddnhj4Qcsx4MwUe3DXKTeD2UAwitXF",
  "key4": "4jZuDbELD4HDy98k8PerLnRFCiLNzDv7vhxKt7VvdZF2WC6bs8JnDXvXAcaq7L2j8hxQQtYVZTfWLWaqubANPKB2",
  "key5": "3SDJNyeaMeLGtuqqSDQ7NkgABfZuNzjgbhEeGWdp7LoYDXdqjvaTMtLNJSrQmWGkvYZybMKezDHvHM8D4rkUF1wT",
  "key6": "2AcK6KKnWF7P6qcEvQHAUzsC82TYxE72Nrn9pKPPLCeiF5ta6mJSfiBw88cJamdhoY2V3gPPTEFdXbzRNyGbh261",
  "key7": "5Q8NbQebRGwNaTKA4Lb1CVvELTTLaD3XRdd69RAnMkdK5GgHdoCgKLped1LFdTWLfqhS1CEZU1nUbF1SfUwfhW6a",
  "key8": "5KGdNuMQqhUaZvb5jSSXvpWG5gwQAXypAZuDLzETityvDYvtcDehyqfmkMWJiwsVozsPVDNietQokMe6SFeFTeGG",
  "key9": "266EevKxGC6sKSJqLgaCWcHTgUXg6cUybJxciYgdo96jsEX5LTzSNSsBJvHaBwQzmcThCdYT6rc3NW1BsJEUNYK7",
  "key10": "4h67TZ6F5S4rapbv1sYb8naS1X8ZPZ8iYLsRX6dxFtpSdfFADMUxRVkhsc5yeoPi8kdDfdqT4yhEorhPdi6PzXKT",
  "key11": "VFNPpLKYNg1mGFH13KERYxwiU4nf6H4RcuX3G6196XAUkZSYUD4CJPCUFt6viruADerJXxZW58t7bG1w9yczmgA",
  "key12": "JNz5gzi8UQk5iEK7zgXZd7EPR5oQdPRn1oww9th5y1CLVTpyv27xi1uFWkM8Pey7QxXEbuZjM18BjxdF1vDCYm2",
  "key13": "4866ko2HUSnKB8BNHg8AfT8R6kp5tZF8rUHqqQxDVpYdq2yWWvkdLobCSf3No7yH7TRvaDEBuhSRYoUCdH8b11CQ",
  "key14": "5QKdJFtdxgV5xcpSo7QZCrH2Ee41rPb4BGh2iabUZqtvuToKVypDHHELc1cnLnwoV1C2W1UDWgDwWVykgzAWqUkm",
  "key15": "3m9P1mewQAdvyZ6yjnDW63v4A23G4iWsBnFxiyXeHS8tVkh4YD6YaBJdREx7xHKHwKWNKrLicKSCxKgwEBLLqbBV",
  "key16": "3CdhTsj4WJbTti4SWw8BtzixqD4fiuY8eJWPWENTEYQGxrg6SJosMTzvC8gnDMf16asTyjMYi98BSSBX5BrCymAk",
  "key17": "5Rum24KrcKQKHCL89aHV3LZZfb2YkwsPKaSjfdxMmWRQq7FkN3rsA2hfyNFVcLmXD26o42UshjoWj9MgpyfmtFws",
  "key18": "37YXoHWZDDoebUEriHS6vuwBdXbSFJzUQvfm1ASxBJSZdjoFk2xKyE4FZEqc6sAjCLwsb4ep6nFBUf9hjJ4P9bq6",
  "key19": "55DAkG9NxMhF3CmrPvC1Hfc7f51Kq1c5RgZK29tbM68BvLcgPAwZ53UC6XjYogfS4oPZE6mYRXa9apFgAy4neKGc",
  "key20": "5NxMqZ1ciXhqMbVy2BXuacbBfxwUKXtr8yRh2GjPCXxXTx8vmcoyF5RHk3m3zAB6fT3NMJcZhQLuZW1jCngudvfK",
  "key21": "2xFxehrEHJz6NXhnqfSj86fBo9ML1w3TD8eTLdSJ3hGeZB44FKNsG3PsvwaCYYwZXAZbMQ6yDVjeqxUWYqYThaxK",
  "key22": "2FWZhuGubRmVuKjwWVR5eJCr5CU45AWPayXcrV5UwP5TUSrcxZe1SW2vuqqWkvvMjS9VihJhefLKYh55kmyNxVaN",
  "key23": "2V2FxLztw7SaypugxBhdgDpDs4MudavnMkEgdpvvvBAi4EZDKK2hUkN5tRMGdvzdfBgRp4MR8mGUif9tuyR31k42",
  "key24": "X3k8qzVTnPbRwz1yaeYsh53dKHGFJq9qt6ffHH5AXh2xVGu4JTy95kB9QbC6wYWkbdaHn3DN2t3TETp9J2xxKK1",
  "key25": "nkGNHSbLvgnzm6skzCWh3ZhEXh1Gs3RydVTJYFSiheEqUqxpJN2ZU9fTNKbLy8Y5njAuksZX8HxWU58kmFmRuYR",
  "key26": "4XvXLGwUdN8DU57NH2kAFMDEy54yrQKAxuy5thUonDYrwsNB43RXVVDXmtqGz7Zh3UZGPUSHPcThxjnzEL1KVTKT",
  "key27": "2oTNt1YAPnnZGQbeh6su8ciPgDB7pm1mrPgfFRo4eYLPSxFSg5KT3sr89jgaR7CPrudmCDY3TPHbWJtSSwjyCDtU",
  "key28": "5qYZ7NoKsHKb95hDE8tPbT19SvaGeLY5uNzZUbkF5m2AcmFi191whHmXXWX4T6db7nQTB5DAVCxwwYqgf593A9sg",
  "key29": "hNgETrucwaLA757kxZvo3ES8gwaZwwZCdBtnTeigFmrvZQVFnfYVG4MJZWFicbk3v6nK67j3FPgoSznFzTWfzDe",
  "key30": "4i34ZkUF2qJnbGaKmHddcVtBKbhESNh2kaQSrya64a4o22dFvwXnADCCnThJXkpoFYRCEBwXCobt7rR5hPS8cpMY",
  "key31": "4UTtcJcF7tTLaCatgFiPDxj8J13thaJ4we843fDbDUPL7bbL1YX1PhUifanahRvQ3zawE9tchuXagjJF8gBobe2M",
  "key32": "m1acFbQKwrNscrAr2s2RVY3iqgsQCnP5D4B7oYTRu8AatEE5CY3R2ymkkB6gqmYBXgZtPquoJ9127dD7YQxXBGu",
  "key33": "3NWGf4xe2fmLemrnv4oLmEE9WNH1QF6MmqGEXnbppCYQrfGsm2o4hgypDTqPTEJbmArJXE3zCPBYDt53A8NSkGiF",
  "key34": "39YEYcrHL25o9BNJYXBgxWJSevLi3zC6AP857AXrJV2aMSb7WvTtcjFuLraKuJkUBy3oe1zhaVrf1bTNuFiu8Eem",
  "key35": "Cf2mMaUC16Ad4acjCWd9xjHsV2qPjqSFU7b9brEsCexyUG5Hry5bibYEZdh2fjw3ppYjLSFkpYWGwzTutFVyoer",
  "key36": "5eJCoECekN282QqnGVJW3qzGqfzLod6JQwCMJRg2tSNzg4QMkBSoTBL3RtzRnXxW6inFGSU8gmZtLERu5kqFmGee"
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
