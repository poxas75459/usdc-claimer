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
    "38XFWCGAwsFafGGkRKtB5pNK2jifFxExR7ozBeKj9Qs4PCSaTZVaZ9WQVyLBCy18FgAqctBr6jVEZ9siSygpjADw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3VjaCRuJcHu5o7TAgdciymuZzAdXKJLg52BubhY1Y6ETfN8rTSzpwQKiASmmqZHsFZtUTvqMg4hghbyWNLVTqF",
  "key1": "d35e6Kgcg7i5LrWmdaX9aJfJya69S7u6aWY2k8ZGGECkV3PeeNCQB6zQAw6FNDHhZ3PUGDHAKCWDTveuTgLNJF4",
  "key2": "4ipDZjZ2fezqKYQt7AH2CvN8CxHb9bh8XDY29ddwRXzgdc2xtJbfQz46gGtuFjUydjJLa4LywvB54cQypaNdoTo3",
  "key3": "36tvq6Y47MFcp9nS1ReueyUNr9muJLJRCDMAiYvk5m7kiD4asjGk6Aku9zG2924SrL8rR1U7umXsLrnL2GJRrMW9",
  "key4": "eupwsFnYJhrnH7e5ZGk7kcVKZ4oNANtaDgrQ27buwQx59svWSpzQbzaAPaM9nKQsr4EAwDtHmA9MYknpZTPQr6k",
  "key5": "23DunAYZBJn66GYLjsVZxL7mPiHhP9hu562UBS5VUGAxYEytm6B8mBDsmqFdWgrjP15sV2EWyG17WGrQBbQXeruB",
  "key6": "zH21zBh2J7AFcsmkT4Ebq9PMDcvtaLHYvpwyPi9PcyzG3XT1CHPpgbaEdZ3WdmM4XJjeTfQXRkyJ3pYJHaCRYcY",
  "key7": "477GebymoQsF8G4RaSMRDGwhKvBHtY9xnN8awubmYZ7q2RrU8LoEA3xccceVMSQuFq9RxXumN2yMwZKLgr6EFydD",
  "key8": "3QaZJGaP4CeBtiFgVRcRiA3sGZzoY5vJftVzxjHbKM5XEZ6vxJDDx759f9wYAF3k7SzKXptRzqZLpz9oh4PjNLs7",
  "key9": "46JvcbcuF3VTgvgdv4RoXGPYFi85MTkVaYyvjzSf68z6w76gkwDyAkDNKmuR18HeaYtEyX7Akt4znH9dYRQYdH7t",
  "key10": "545F4gsiUQW3Q1ovvqmYaEiEsEUStUxUGs1dNGD5NXH32Ak3PrY1PjpSijGtmPyqpwkqP7Vg6ECkojn1nMrhUrYC",
  "key11": "4wdoS39GfJPuCdAZFzofTjhKkuouZYFENw1FwfXVyoeZH92GrA1WGw4CiZ54UgZvoSEsPvqZr4ukkd9PdDLjnZiy",
  "key12": "dM1GLgwTbiy4G1FsZFvpmrrFV9aPYzHYdBZ4VV7MrB3ZMGKJgN18mYRd1LQTYNDNLrhAaE9eBpT2pjzUJ3fjRMt",
  "key13": "639ssTUz3qkJgAv8KuyUy8octXmDAEjDUKE5yFN5XDdRVmiBEFeQxT6se23tcFuRxBQUya3kubB5DNhdDjAHMLbz",
  "key14": "4qJSScYW3rr1EpdD5wMzJyMoLmPw3m3HGucrkC3UB9jarCbS5NCzP4ovzgarKhUyct64K5ohZkqssE9XGBT5k2Cq",
  "key15": "3PzVfUufnKnfhKcnG4aqoeSafUCQwtuMTz5si1vb15s5vjucErpHAjg8FqThfYC9T3pxCe44S8gdwPAhwtuZKiMM",
  "key16": "4KYvjyz4uCqsyNsDvEoXecD7Q83MwN4NUZxVWYXHzCYnke5EJt5XhZpw12Fm3yKvf5n7Hb7u957iHGrBDR6tFscp",
  "key17": "rFBJeNNrtfFS7ZhY6s6mVsu4iFtLYFBnCTyUQkP211GvVdKz2xEeh1iyDdxns4d4P2aDHUvhBSYoRpRCDhBVHtn",
  "key18": "3cyRMtQAo6q2qQop41AkLTrqvSDoX3Xcq2a1qCtbExupP5MHW5Qy71LgumE3qiysYWnvCMxqsH4HnzkgEPgBPJ8",
  "key19": "LD1D5vU17qvv8vpiQiywfGbazJnjZVVkXAPtrvBMHNCzoiyL1pwb46U3t9QTj2D8Zm51VUYKJkWkbCf8G7dMSEk",
  "key20": "TeJhkUaqUhEFGoJjmv83Q6eMrpRrGVSbmWmoysFg8dm12BhsEfqKYK2gwPiZ2krdEYGS3eVGXALC1jBPo5KHMvE",
  "key21": "2ng3xWqSzs7Hj5JEGX2qh5M2ogoUdVn8H4bqZWBWbCQbWhrKFGQJYsLwZ8bsy8GGyaZA2zVsAcCDcfURVYFjMvE3",
  "key22": "61utgK8buk881qBbzQp7xHKG6viztYgEyfqCidvqDWMnQhMdAj1rwDXwZvYRrcp6eLFhqFp94hj9LFSaCPVsftQK",
  "key23": "6195Z3cBAFS2on5EftVead5DSwX2pcNsJop4CPKpM4HfpnJtEfaeNq6nuYt96DGuTH1VfxW1C6ajcxD1q5NA4SZS",
  "key24": "4op63vyEnPPT9N8q1Be6yHmWLuYiSUq1AN4mYsyTGjgg8FNLBfZS34Xgfa4zGqKXXsJikwaZxwWiQ4rHHGS6yuHa",
  "key25": "3zcmTb6F8bETmf3pRNUJ4fS8qmUthxyJj7fnSWLDq2eyqi7idCaqLxnf4J3Hoi9N1vNx8peMP9WZBSoZ5ZDoNZAe",
  "key26": "NVHAtSZB44ps9pZWJqzkaBUXwtniqGpFsUS4pD3y5iBiWvNTcK6GiJv3E27SfF5rFD9DcvG43mF8aNWyesPFmMD",
  "key27": "38mPT3E5gud1zEbh6oX4XLv1QvP4cPawLgJCTCTqaH6sQdrq9RRXGiP8CezMDgAhoVMsUYfkggvZaH4FF1tUZe86",
  "key28": "3DWtPZNFWbkzPxYMk6hvysCqD6fofPhz6fRYe7JnzNiHbEsgPSwD6sjCUbmUPHq5YdrLJ115ShULNjMs2AQ6rxJJ",
  "key29": "5ha2WVonHiGaufkXcG75iPiKbsy57C3Qi73pVWoFXfq6THajQpnvpaAbroemE3NZrToFmCvNWYwVJmRfqWxpBJNK",
  "key30": "5HvZQt3QeSyZ2nA7hwDeNmeBHanwvMae5uD1TvZSoqeWQjmgASpug4NCL3TzYEbiCHmchuiaQYkbFWFRGep3xBnU",
  "key31": "3EfwKSAkUssRCZBgcf6qR846mPvohZsaUyHxXpmyBPxuzLGCMzRE7EWnU4CPrmJS1cJcj7atPdQUoSGQoQaEHhMD"
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
