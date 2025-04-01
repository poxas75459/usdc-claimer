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
    "9pjbHGSbo5WzRhbe7Xi7jZ66uATntTT1kKEhrkDgphr3v55we77MaYAfy5jC7fXdC5UNph5J3jAyiKXYeajaKNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKTMtrc74smNCi9LZJXiuWW2RcWQSLne6T6G3ZcTodxtbiMCNErcRDaaCo8BFrcawcf2Luxrph4oExDkvLT3Vc5",
  "key1": "518vUyi3doCSnVjPi8FjgSjeUfqG5vzVicG4hfouBRpH94UsTbRm65RyjJc33biDrUEr44GprLHnZTXr5sUPei9q",
  "key2": "5p7ERNwijfuBwU7Hv58HpGwfTLrhEwsgCB9RXTYw72p7QaCaLw2z7ys2VVvCAhgj2raVyuEGXe8fmdkzj9F9JK1F",
  "key3": "3R7xdnZcC3r6fXZ9qzhKnXW6sz4PvcKrG22i4XJUPcYkwsho5btm1oMLbwj1ThxGt9WJrawfUWXc3oHbYyNzmdFJ",
  "key4": "2hrcvh8vbAVvib6GbisjYXvNgdGgcpMKb58iCXxavXGwFPd4p1qMP3PyA6afnNjMqbGj41jc3Fgr8DwrWoCtVAfb",
  "key5": "5uJPgiYnxdFTEUfWcThQNcvBSuMjHs8wJpcYkAZJuATzFrXnFgMdpzpLcjkqqNXxULhajURxYsFXCz6kDAkQq6E5",
  "key6": "2gz4oAk9ZKFWuVypeStuuEbytcgxJcPCtJ2dBx8kDdjG4YAHfRwPWxwsfof3NGTtLwCuu9H3mCSJxmNjTGdakCSX",
  "key7": "3fWU1pULqziwGgdYJLZR3zEeMr1AQiYoam8ruq57xmNVZs4mam3sDGFtYs1dCG3Ycxs3SKgzutCpyaKh4YvgzYCx",
  "key8": "4txXtRzYPU65WGKEfdnMdDo4KxyXh6PWRj5pr5hrZUgJUUMW7y6xmu86YZef56cXLU7iXcqoDu7riMskN8zRbfDr",
  "key9": "34Gvjcmu47xyfZnFDYn5NivWtZ7xpvdeHTqhLH8CodbXigMCDu7Nh7BmEURC5oMy8Z4FaYDrBWrm3bDSEvWzeu44",
  "key10": "epWYDLrLqA4xwgxKmxHpUyLNJVttWiSFEuL3kqzZjwBS6jm2mCf7frndbvAYevRv965vntainanfxEt88wgp5gb",
  "key11": "iRjRMsK1N3LpuzgDQ7TesjRzkVMf37aAFhPw3u29BdrkEGypXULNhPmEPKhaLmRJymSR34QAma4pLCtdh6Zn383",
  "key12": "5aGGwVgoF6xoCJBAbhZTmVThovW1q5wCHhjocZoiBdarGGGmo5EwWfJA4ft6Hn35Lfc6uxuE6mZe6wNiLm9EgGaM",
  "key13": "2oxmEkcLtGgwLTwgZRiC7QVcZHxCqoFQqouyYbQdZoC1my8Z7FpmhmFxbzgq71b3Sd59NDee5xhm9MejkhKsx8Qw",
  "key14": "4hvc4pmpeZSsZDcHGsQ9qFUFWojfJdX5DoBJGr3BS1sQ5HtwsSGfHceTqwNrDfmits9XA2T36FFi89XPi4xvbsbJ",
  "key15": "5EtbcxaVDVCCS9a7mpwG1AbsDgz1s3heiTMWCj1xNZHELDxz14nuuNnD4CYq5ij1J1vNSRSLnrP9MPY4t6W1s6te",
  "key16": "3GgvNHvYLBG8nm4ELz4KodA6YyWVyPBSr6bccE5NsqLqmpSwxUm8mWDE4Jnd2NeiMhoLC1tnd8vwanKPwXfdxeSe",
  "key17": "3frQmuXAP7TZVonLDVrUqDL2VUUCowCJXvSEwWAec5kvhk6TbVnfGE9TtJftkLGfgopE8i78zGvBPjWGHim7qNsE",
  "key18": "4j9wq46Q5LzW2AZVqkQPfC9VeP5Ds2gse5yPCyDXABjpChBbqM4Gud6X6GJMfLZDW7usAvYgJ3CvdNVyad1jsjzt",
  "key19": "3oMQdy9BbG9w3H3tLQeNntgoScV3a2bUGADrJ56oa33JMhyy8ButDkPxqCBfUZpiYrzGdPCDg8eAnJUydzk6SrJ7",
  "key20": "2yW3t8k3VKHv2iNGa8Rrnw8HGCdYKkoqi76ceUaKNEBSxxMMa2yR5EEzLj5f27xj2kgftfNVKhheYwYxcKJ7cNV5",
  "key21": "ShDbeaWTNL1gGKc2g4NLP7jipZQJh3cr8SprXayzoBeFMsdJQjBhb18Z45BWsXDSv9b1wuXuof57GSjMpQaEQF4",
  "key22": "XRCKqyW6dt5e33gUMfJpwkMc8wML1ukkiVUnPC8CoKqgoxXCc6mqNztrHerhXwKQWJE6sLJhcPxgfHrHwN2dkY6",
  "key23": "56anxmG8xzrDZkj4TXKgMoJSbxVfamc7wgVkPWhg8AdWa1MkHTkg1swutGvJ97Z6CVNoWN1CM4kWKAuMpHxwur6u",
  "key24": "3hcdfyeXZ2rZSwp4SQYBHGFuNH6Y17QNGfuQj2beXY1zTx6vpF6zFxX62fAGvQVB6hQdFZzgPZtpteEymauAFMsd",
  "key25": "3dhYWaTQhCW8eBh64Pa5AsvxqQeNgvvd5MXWsuooS5XTEpx1RLuwBnpDFojtJLgPqeY3kY7LvShuxoD9dsqjNEJS",
  "key26": "3hfeEpUtjUPdbPbRoitvJrmRt9y7rygpxiGJsfUaLsiPujWnZh4F5Sdv1tLscReoALVvRMq5Rpp2MVH8rm7SJYeF",
  "key27": "4P4KypxyLk1yTRiMWVLSEPeWpBrRC52y7dFmguXLVbPRNku6Tjw72ssNnfWp1qz49iHUj9RXTKkCU5krZBauTDSA",
  "key28": "35FyWv8Eo7nGeAhHHxhpwg4AS5wdbqjrHAs5pefU1uNwN9XNnFMyEPF2PzzgjM2RqBf4brYzx6R4M2yEmoBNQYhx",
  "key29": "2FEiXkR1cjvxJbS3ZiRQDdnCugAXbin5tytF3MXoA2sAYC3btYp48sbLMHs7xqRwZuNkdZUuMAbadvg4uYaU9ka1",
  "key30": "23bGu7Tmv74dTMLu1S6kP1KmyYraMALGv3EADzzHBiRVF6tUth8LSygfBFU3mVvWBxJbJXX8qpUqmdfUXP1N5uLE",
  "key31": "2cM5iAHTUM9WGDzt25H9o7FLzrBYEYGxiBVNpfNijGcQyR2cNirqWcA4ynXvqXe7sWjan4mMA3Q622GrC5ZhKnKM",
  "key32": "54SF6zdhC1oXvakYfovBpxrsigkzC6uCSKzvHhN359633sKPJDs4FREDpaCuTqJkRvSPSx4c1gz8bepgbtfRW5vf",
  "key33": "5o73CjZQkMHW23cnMWsmDcuif1nQSF8kPmWHR9ZNigo538FqQ7AKqgDqLXDApR9JJby7ryZinK6LpxLLaijXgi4w"
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
