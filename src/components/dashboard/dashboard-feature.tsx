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
    "4nFJTa8qHm5rC7Pm1hVVRWzvsHtjhvS1j9PeJfL9DmouLvQBv2ESJsiRzLqEGs2FYYmdjq7TZa74mPwKE4twuPyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REK6Zp1hzsBfXEbUpeyvhSR2KMzhK722zogkRe1GgHDN2K4bJvop1ENKqgsjpqwtmpyahqbRHE7HYsJzH1f9B36",
  "key1": "3JwYwhWi7KNEBKQDCTj7u1KYcGkNEA4ibFf3ek6z4DeC3MQpgusUcdTjoiZXbYfCK4d237PpErDa8oWrLDbE81sN",
  "key2": "5atwp2bZgPCXTvCSvodw3avw5QgcTqgzek5cTqBRo5DLu5uwqFpd9cCF7QMah1BprSRZwFBeo796o8z8Y9hzx3PA",
  "key3": "4Aqi7ye6MZk3UebmkPH3AUXxPojh3vij9Z7FKVLES6jzPacr1KM2ZWsTPQALuXXzApoBPMsL8P8xsPp17zWgcE7G",
  "key4": "4FEjMne2jwFbmztRjK1WCTkMJDSmGNnBaD1C5817cJCSFeV7Egko6ayxFy4ct253tWF8ZnN4pxkvy43Y7EBC5Zhe",
  "key5": "5PiqFkiRFTioFaX5XJh15zWKmKoARCouAfPwcGKfdrYUYhyYECN4rMWd2BVtRGMUSYVi2TU37HsHKkAfb3bema1a",
  "key6": "QBPKbJAxds2TN99PmbTm3qPzq1SBwAQenyuTdThbTW11vLdrUf67W9UZMPffXXNUZTTzmTyrGEgpndGRbHfu38d",
  "key7": "28kZH2i8bD9gSQE237EzMzQdK1VR3Au29CGXsHpZuYoNVHnatZUzBoavJW1F8EzsMcbo7x3U88zCWxqprwxRVa2H",
  "key8": "5JmBzmwgS4DEyzYdcTWuCvyq4YGzKLsjKQriiEocJzRdjtNxPmjufD2HHe4RjFE67o97d28ccA9CK5c64KifLb5u",
  "key9": "3S9Cb5NAzHYjQmsTPkiaeR7zLjJnhBenMpiWh6SF52Udc5xX9DL23mvs7X2i1dRPgJPHby23dXkcqHx81yoz7sTr",
  "key10": "3ao2Z2MaUacp9oV6vJpmS5tnhpvqoTfjn19UaTen7xTQzpqgdCgRwZpMFbN3HWBDQ8e1Cags3zmzNHwUmD5fkNUn",
  "key11": "bRXXSunafvLuN6YBFWRmbFuFs61CDvjYb7meeB8YDzQvuVuxA5bbHuhSX6aQDWQotyG4WJKvwcMxYG7nqCaMEnN",
  "key12": "sJDuWJZBnzZxUHNPJwuMDWc5FHo4t8bD6W1YLzevGcSgX3aoaZ4FJcijB9EJavrNea2jeJf5XamFvYQHNrgCKZZ",
  "key13": "2PwPLk4cEcTFCh9oRcYWjaMt68TmXzXBBbSsd5sgBgSrr2jUuxJYWYBTzoNurqtJi4jgDdGRzmN31R6MSuc7tWJc",
  "key14": "2VSuETs1gpRHaiqG4EwdT6MPHxFhGvuupk2YJM1XxhDXpKAKhRyy6MByRkWA83E7dLS6vV7XZS48ePtvLZTuKUdw",
  "key15": "57xzkptiNe3xq5todJmcFX6SanSyVcHNTx5oZpGzjKWtvaZPc5XiD66rjyyZZVsZgWvbEnrP3mGe8K3g47KDTUe8",
  "key16": "2ZZn4FW9EyFxJLuXmkiFDGfsjhkjUurYVWZyctZsgAnPQbymtjCepMzx18RXtVAJ9sFUFRuCu2AoECnAwbArxDps",
  "key17": "y6uKzii1CsW51iPNDVkfLL8oucMEEvMdMCnuTnRNM22MtC6NrwNebEGot6txRo4wSHGvUJ4VzsBgNVBpwx7ZA7Y",
  "key18": "3LzSv8HNkQxw8tcPkoagxY69x5RhAakpNeuUhjenAT2URiJjJNjyeh2vdH2c8gTEfQQw2iZsXkYK8FMd34nB71Us",
  "key19": "4ffwHKqmwjBeDRMBPNaKnPyz34A5yhHmL4mD1BcHNAYajKt4iQf9dY8uSNLxrt1vatYnFP4bFeiak71iR5K3P1VP",
  "key20": "59uT9NCx6r7AYWrRSab1h9DESoVQJZWY7De8UKZ1qwiYvHmJbBnpv8AQTBY6NfgSfUQb2hcmdogYs6d86HR8gLVL",
  "key21": "22aZaHz7ZUBy6nvt62GU7RpFVeUhE8RrWcZx1A7dK47fzewJcvB4uvkD8KSughD1tYj784U2L41Lp93c4EEVxESx",
  "key22": "322y5rs7VL7JCxQ3FpWkcXuRxsxSiPMvGijNmRAhRbUA9FkE73XyeSijTR7BXsMYHjrP4of9geZ8TMjUWbKQsYMc",
  "key23": "3apjnVjzysEDJSt1WPSa49RDda8rFRyaTbfSvRAi8JDGZRKN2hZtQojqqeda9335kX4Rt3fARAob8nCPsf5ywkfe",
  "key24": "3WNyEW64gdniqfqDjGyELCfsMoYeumqR7SpkeViERJ3445SUjpuZqbHZLB6ZDfrtxhuY9M9ERPUoZ4rLSptjjdm6",
  "key25": "2mJ64jH6Kai9tQ4TTnQkqzkA6VwK3umcv1wkdFW4jdjoVdvwnLYh53D11gvn2YjARbELJVJyLwnzMUKdyKwuoJdp",
  "key26": "A6tWVLZFwZxP7A5W58wg76V44t9PdxP4mh1QLf1aGddzdN8zxRvEi5AswSEHZ9BGUfNvGmbYYTbMUJx7GvyEfqL",
  "key27": "4mXRKLWCsYcPEu5Kk5R3ZMD7Y3KrCrwQkNq14M4GWfKwGcV6eWCW7QhGQRCUo1AKMvRFoYnKsKGGUycZwFQ3vP6N",
  "key28": "2mpWY9SHDGE91H6UXdc6SNCUhVRA2DPY1QnnaSzcyzDzo8QwC3tfpjMsSUbpP4y4ZCoHJkZG3nT1bGom9Qw399k1",
  "key29": "4xo76tDB3Ga7A5rf2Jn128hhkJXcM15iqnq1vQeYaDJKuXo9RoNkY4UnPjzvTXZzkgk2i85KogkjtRX4SV9Lfsb7",
  "key30": "kFJTeEEQLYkyGFyqN3w6woqeWgDshhwcpHKC2LhqQ5iUXz2hxowoBcnzWSiuf17ueyBEJvRf6sFegMZrNEWW2CA",
  "key31": "34pLjeS2SVFbUeK75LMfjQp2Xwjfy1Q7FZoafjhdEkJhQabpYcSNdtyHVusQyiwQvwkTuN2Z8bW9zYnEGYRQaxNw",
  "key32": "4JMkd4xeGA4z1WnABRu8dFZQACCs3273CLWgPVkDX8dNPMQYMaMZ7rCnsqvJ9MaF2HTbG4MJa7UoynFgvfZFg83u",
  "key33": "2f4wnKCa44h7i3tkdPSiiCNQGDfCpMMxJMty9qbAbNjjNFHonzKSuCKGurfTtgx5XVs42dtZZAD7scw8uVQ7KpcA",
  "key34": "4v3BJCeefhXfMBWdhKCFq68ZHaDEvX5upJn1ycDGqyvh4FdrVvkyKrZx6wdFbnf3P9T6QetuSDKrAbF1y2BVWHcC",
  "key35": "3QH5uAXPJ4o9kwhPkYtJtTsjrpzjxfN4KMBBRjmR1ohQjGaTUvm8Wv1V1EgndygyQ5nTVDeYHQMvRouj5pNA7ufB",
  "key36": "hhqsHq3mQrat2GPBTgt7FezSucV3SZXd1ocCMLRkSakZaApfJXVBKUP27NgCvwcbLdaCYGJRS5YtuLXQ7N9m38T",
  "key37": "32dioK1LBMQc7X61ZaWiixRvJmK5F9cHGnVzZStpCZYvpMYiPAqisrR489SsQGupybVycAzB57i7RH9A7PUCJN3W",
  "key38": "2XsRvSBYvAkwyXhgKj92w5qFRyW9Huby83p5QHvN8EYqfdTABEnCMYf6z8FLuQ5bNc3cmnU3kNa9XtfYbMBHmG6a",
  "key39": "2tepfeUcxGn3dAzrLHwD9QTPAApuzJ6nVTuLnBEN4FJsxRAtLwMtDwxJNAPxHVnTezmxYhbWj7BWyCbWD3ZDahf7",
  "key40": "3ytrfV4K8bM4DZJpdoGy4hZqBPzjUp3C82ke3rjVi6FpjBt8Tiyjpygi5eVNxEnoCuMAUmq8ccZ3xhXrHLkMV9hq"
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
