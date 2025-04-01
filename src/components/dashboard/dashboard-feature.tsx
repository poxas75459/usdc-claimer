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
    "3h3e4vW8M1EVKU7KDL7ou8LBDmXctFgVMm95gWsUffgxyXqTpv5hKn4TwRdLAMBPhHfUwEWhtXAy3HHpRQKd921L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gabDdX451ydE8UB2a54ZkccqZ7bNBJCmt5rgEudCtiJS8sj92BE6onRLFmK7Hp7fj34PLeVtDk6xcMqP23kUme2",
  "key1": "2AhCdkWJ8arfmmc1U77bvULpXtXnzTVvxF9KqBLs8ySRfsQ7eEhyypxYYNwKKC1VJXQU6zSEv5dGksgtJPBTqABr",
  "key2": "3JUwT5fSt3A1UmFxQZLrMGzWrzLzHtoHCUpNGQVrZmrcuFPt5vxvb1my1MbEXjAcvroUeXqeUrCK9hYhU9Kfw3Zg",
  "key3": "51AKR3WSheKcYbvZR8wXvUyafDoE4zpEHmzciEMZTdjUACmMqvAaErwvC6bTMVPWtXNeLLhhNukxh3J3DEUuUDSz",
  "key4": "dNT33JMriz4PZwF56CAAscLVV8U2KY8CELL48G9VEmBz4AFjFXVbXntuzCUouxGdDqfHRqAyGGHv5evBnYaH43f",
  "key5": "4YYCUrWb6Pp6r3WLmuVEDtF6bZtboysyMgSYP7qXTaGnK3fW3qYnVGCKZggEnEAKtMKLB8mQpz3EaQTawBZMa2bi",
  "key6": "3bPCfipDFY89FvYcWEf4Apjw4KvAWPmDtnQkqvw4h1nNeggPp4zXgTCCJMFKjRSBm6NXQpHNdyQ956Y53CoGBtUg",
  "key7": "foz2rU5qSBdb5WWqZKL8p8n6cgpPF98PcHcAVAUcsFRAtQqZ1p63yBhhbX1Ne2VZ757WKYZcnv5ddfGNGeP5Soi",
  "key8": "3ZbCKBKedP8rkcN9kLKwxyp2dr4MAvTCtJK1WusgUH6bgwzmpeTeYKTjMDggA5yajB1haMrk9VU6vP8DyV9busJa",
  "key9": "3sqy3zeHEcDC9g4pXJDgbaPNnz9w4wgq7eSFWLJUQE21qJJnX155cte3RFw1FcQbceBxShb7L12qRDivGA4bpaEv",
  "key10": "5u5w9wkNLost8uq4usbF6SB1eUbUeomEkZ7arLquqdM6xyfHsKDq3ZKBK7Pc6tcYXDz7NgvnE4GydPctxwsHmKtD",
  "key11": "d6Yv4y9amC6fPSSzTL25UJkGes42fp9LFuwAa43QAE6qSJ9Cs3jbpxASe47Jpou1GDhigNY1zHRrFSN4gUoD3uM",
  "key12": "3bi5WkAbqm5Kpe2zovtuPRgEgUtmX1evusk1hbXa9V1t6q735Pe35g6Pz3oECQssZ3rB33wKqCihnH7eoubLJhsP",
  "key13": "2zpMiyXCezBba3Y26eLqWEtpZaC76WR18habEniJX6F2dHkgoQnTeghJFiSq7Yfizxkti9HCTCMr5UJJfMkPMWG4",
  "key14": "2x99q8gPhcoakWhURKhJw2vi89XHKoD5UApd3YKRnrj4JZZwW9duDmT412Vq7wZCevqeJh6zX48GputB45CzPnzx",
  "key15": "4aA2bhzFZups5Xju1jrNgipKDCuNQ36wkdLBMM7FfTjhMQZgh1Z9igFo5UTxB1K5jxv516WJFaq3o8ozX9VJ8K6u",
  "key16": "3ZWXFAhhqmBky4QbKceTop1tzTd4MgZy1yFDrUrDsYmfzkKxyjfc9Qt6pFTVf6qmnHKHA73yEWsSPNCd8SbuTMxg",
  "key17": "44or3LhPJh9dkxMXbyowmfg21vPaJFrdmqmB2NDAQVgD6XzKVtWKjJLa691sFbdjyZFr4oGHqSng5aWh4tT7Pkic",
  "key18": "x61nk1dVyJmvEMA8FBRQbM2DuXgZevNjfu5kkppWYbw9W2dZKGhRv2vdtbnYeTD5w94J5oZjkLieGfyUibxGcNC",
  "key19": "67TomS5XAbatL2CjdPN1Kp5s88x1JZGbeqLcMr6cwG9QPkhGGtpQpvkt7mJXUxrWwXW7ycZJX58d7cQjn8eQu5fN",
  "key20": "iMN5B88azWjY2juuNZzUTj8pi8tucNVYfopZTnEB9iKS1duN2fQCeSU4YDGNeRXidGzH8An9wN5RAjhtpEzbwrL",
  "key21": "5TvHJcvZ9cU47MJmoc94tABfU7uso2VBMpuAEiEvu7U9WJb6HEoeYMhUaESNnpbB9iVFHDVTCEG5zUX751AqFW5M",
  "key22": "4dnHBxMhV3DDwGrk8eUcespjTmeCbNhuQ6m8mEKCZpoyF18JqTcRvTuYwLdVqsAKKVnn25ZWPWcsRHdxqa4FM7pa",
  "key23": "2ifqxtCnGs2PxpUoRz8CFCzSm2B4RhjSkYJjt335RSC13rEfztZRnmBu4G6K1gLQmpU7kgZZdeYtak7CJf62BFQD",
  "key24": "1kFyvsVucJ5WZdWi1KS7RY8zgAwLtgAZ7g2aQZek7dM5Mo1Zb982RpnNkoKJ4QP67kH7Zo3j4MrngJsJ8ZbU7Ph",
  "key25": "2xnAvPdBQYZpgMq8oevCe6hobnAvvoYiUjM9a5SteFe3orRojwxrE8BmDirQFqq7E4pMoTcJNopFzASzYTFXxVY7",
  "key26": "4DBRqzBmPzfDRQzYFhP1dvwbKztj8Nxg2kzSXLw67MmMgkh4HiXdtGJ5EdvtbGWDGi6gTY2ZrmhEv3ZfV1rm2vZT",
  "key27": "2Q9h2NGCQxb3ghZ4evWekokZ2GpgBgqs2QCL1HucxT7TgFBk2gLbJQehPprW72kw9xPV5cGjLm57Bhe8zQtisK8Z",
  "key28": "3nugrKXwd7aGYKgJguVTyV1eGdnkCVBT5VdhKpuGsqd1nDsJnDXZJ9pcrH1s7L2q1SWVDTT4b2du8uLKyKmfd9nj",
  "key29": "66sBfvSG1edE5S9Xp4BTGS9CJPAXZ5HZA19md5cdgc57gNNM9NdxdcyHm8V13BnzjGjriasGn1HkWyGSq1d9md8X",
  "key30": "2boAbZFUw3Ar8XvorUb2q6NSKo3PJcRyYjy3iwjT5vpUEwyRzdLUKhXZnJ21umGjinFCR3czLpuCEuYNTy2zQiKZ",
  "key31": "456U4GoKhsRE36WmuRVwGpmooycM1QHWcnMee34S7iF5B2t9amK4aHHGtuHoRY1q92HRe92nTF4CX725dSCZZdXT",
  "key32": "5D3Vj54gAtHX2cakJRbkx4qZUHoqSUF1Y1PbpUMSkqfFJByJDBd7T9DhTMDEmmCLCV1fiuCrguvs266PLggdH1N5",
  "key33": "kfvkwZMbxQDwb5QPpsGDYi6AQXCYSj9xjmPAAFzfqk55UYS8i4ammhBcTDSpn2JiEBFbJa62AeGQfc4awH59joW",
  "key34": "37y9GBC9wxwaD4M9bdU2TtVZvMoY2UXpKf6gpqxi4MVqXhDQpczYrpj9xrmUi6k633a8ywnLdCRwuFdm7cgbnr96",
  "key35": "2WULWD5ForQzSkA8iDLq6VNaujUzDAQtaLM5bpxKsmZPt5KJcynk8yCixDVikLfYQUvjPVt28FADigxjgjKFyUQF",
  "key36": "LKpkW3eYcd4G6SziANxrYMvYwcnRiaCwVFMZP1taKH8ue1eDxGCkXPGcrx78z6PkvoVMpppvgRQVzWYdVVcuxSn",
  "key37": "5iFBCGWXLqBWJgxEnbCMRw85CCDaaHY1ZD8QMC76J3NgWBvYDGhL5d29iek4jXQpU3aLUUe4LRPPXPkhmHvJuDbj"
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
