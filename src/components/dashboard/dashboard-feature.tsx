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
    "2HsTLwguuv4BRon9WaSWNhCWrxR8wADi8M7bP2834UuKTa5hLUFXsVQRNwmD3VbW88qAoQFMZELQTBtXdaCtuEDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aPfcuXhVKKU8Xt4CJVa1vmsCwHEwWCNP7CkfUwsErqQrxh9v7xPSSbZPy8mrYrZMajj53dG9gTisN6hLhsgREwF",
  "key1": "Zg1tTouuP8cN3F7qqtbb2KspNXhiLYa373kUNew9dict64cx28NUGmNU81XyhLnuvCyUHFxhnDL8EEBwN2yrycd",
  "key2": "2V1seDoMg9Vwu8hUzt8udK5wvLA8FRjxVZ4eDt4rSAfG2CjKrLjPB3ZzxrHFd3LUddemcfby1uK8RZ12AkpyEDTm",
  "key3": "2XkQ36eV44D9UcUoiv9RXArAJ3E8mGuaSSkQ2oE5ox6BUi7UwzZcSob11JQ2hw72pbqPZAkvZtXgcGHmUffZ4KUm",
  "key4": "26JKx4b8YRdYosHP2F7oAM7SgiTEshkfkxohfth2CVveBkMu1DnpfRmGhPHiyeT6Qadpw2Xi1WH3NCx9mBroeNUn",
  "key5": "VU5MD7HdSoApLRs5wtrF4wE9nF5hnwc8kBvUQEkxsK9vcVBGkNdYduxrDAYqpQhxhZ1pdmAYvbqETw5cTYJjVVv",
  "key6": "3CkHEsgDzXiS5o1MiL4wJXA3wcdWRGRvVqkRGYmkoFErPZMGMA3AptAPnJiRjfbg6YvRd5YPdCsiVPjsVgcYGAiT",
  "key7": "3uuhcZiZajpi7wyAu4zauXBwWyR2m1KPvqyQELJc3U6huYvqeFXVC1oYWfwSkT5tjuCAe4aEvvPFykyjoqByKh67",
  "key8": "3xgSdhoeiSv6ztnmz9Kpmd1nn78xCYSq9yigydsQGXCQSwRJRuJ3fw42m92gF1iH293PbGPLQDNUenPbUS2wYcDV",
  "key9": "4J3kMyx1gbiJXL2oo1bGgHgXHxSc6sD1BhYZcqikuU89Krdu1cV6TGRKduBQdJs2jjJmSffzJq58HU13CPTRedV8",
  "key10": "xTqrjTahis7EfBx3UPMrdDB6Jx1fioMbjZ9dyi6xtztc5RZ4ZGcmx7qsDZekuMgpEFZFoMMc8qnQfhdwDftmVYx",
  "key11": "66ap2fkhZKqNAa3rWMVucHyZtT87r6H8vMDP3nfNMjwMXSFbLFRwBLdRJQnjPTAvDx2KgmPSvtMdQjCmuj21xHXf",
  "key12": "4xHHzas5XkyoS43LAn1dXyU5qGmGYFzcgx3fPP7ghqxan3P5CroRECNPXDSKgpen8e9xp6SUoLF7ta3g9Nn3LgD1",
  "key13": "b4kBXjY6qhUwVJKkuugNSzWLDdo2coCaPd57JXwV5t8JTsqWor2VSJJcamgWUTSY7jp7Z7PLzoXPg4mLfnWb5GL",
  "key14": "2GdX5yFUYSV72rTkgrUSa7xPW2PZa2TPgoyoKNkj3wHdjAWGQsE7edmBs7Cfrr48iRHBmsaL57XRV4SFgayJhD35",
  "key15": "41ifLSTeu3V5YqitbhpT27F1sY2C2AnQwX5QfsHKhG4S7FbS6A15XeksoqmEqLQPEZN8KcMKZMd8oB7aWPU97N1X",
  "key16": "8emxz4mxfQ5ZnH3fMDT2imRjpUQR88NhV486EV3s2EbZFHaKh7ciysFDb2EyTpjngZ2PB4siT4XQnD8gVNmuKsK",
  "key17": "Ajd9BQBBqufMYuvkedD4X8wmWbGqGoQUCqjWN9wcz6hJMHK7ivK3Xv9bWSZU8WFc3ZqAJT6ijGFCjdEGdQX9nvx",
  "key18": "3sffvssEsaiHn9xrXMeYB4zq6AaJBGicyREyJ9RsPeuaFoBShc4RZEGGJUv2YWomuKP2FaLwBxvaFButmibjYdtc",
  "key19": "jhi2j5P32VcbpuAM9bAETi39WFdBSG7Ar3dvp6v6HZsWwzzqfzR2R9Gs6Z9s96fFhhommBQnjXLQgPLfHENNuF9",
  "key20": "4TuUTQ5HV8XiKxd5GFRDt1pCAGx1KWhiNQCpzPeyhPy3u3SFPTua2byTKJc5jrCN5dZ1DPs9TZK2Mnb1Zs5sazrA",
  "key21": "4xvmC4sR2gBa3S6s2XJK24oEnQcRa9jpcGw834cUz72bEiMMwAUVMc92mpHaaLTLDB92Q3jFeT319GJ6h9zeqY8J",
  "key22": "2UWF4NWvccEQwFkHiJMAagHxF5LTXPCtvKwRQpUPgZXL6zLm1vnJ4TDqpwnXBXUtZN8xnxHSS53HNfPYYVCLdQQV",
  "key23": "uwE29U7yAYuSq7tgRX1wjdUbBpLsLtAM5TRzSqQz1skhQC2zw2KNxK68GRcfvgpFTsXcDFamgdgo6SDCqmS8d5F",
  "key24": "UhdMriWE7hVH7VYJeR4PtfEVxytURpeU3R3ms7LPnUkNv8Uwie2QKV6nU4gKrVbJM7b22qQPhwKuYHV7XtjNVPP",
  "key25": "L4oXUNd6TzHpkRYpFyZmjuEo9JrB46ouVTAuvFUnpRwPfCzncTmsed8SMA1BEeXHrgC3T5THuwnKKS1NhCeTnb5",
  "key26": "Dxidm5Xb8iAfU7fG4RKVuAmn7jvyt3MN8nFAf7QLAuNASPq6La2ByFfBe4Vd7FHRC3k6xWnMoqZvTzjWJGPttNu",
  "key27": "48rjKG31MoEQn1oKreXghWWmuCLZnea2Six2dvLMNDqAQAB2w6NybByY4rs3zk5Koknk7edxPa8rQNUduLqae7Nq",
  "key28": "4rK1M1oMapmqvfmRmedrgckKDX2URMqYuvMh9otkFtXgsSUvNPkfL8R9YhXXDVcwPg7gSRBhABZrSx6iLLKv4PBW",
  "key29": "3WMsiGACAHrCZwVPGr4ri6bcmiFzQYXjqqt7fM2mALMqTVhVL1VgU3AbRL8yqgmniKxXuZuxp3tM9Xh4SpgUsTEh",
  "key30": "2AT8ZaDz9dYFePwirNcm4pAs7mvRYqd7U2bQ2apawDFP2LioXbNhrGrDJdWAPyvyMCvyNhd4LVpTWB1C6TxqWABR"
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
