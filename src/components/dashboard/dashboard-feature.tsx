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
    "4ALvnPb5xKL58aofZacRzL61kNAtzFQXztrSJ6MWfLyCL9jSLw8eVbM2xiGkCfjjC5u9JFJNQbnDtdXESYGpFyUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LouAK7q27aJkBCe8chpcaK5aRadpLo1kSJcsiD3vtwEgS216wj3oPvKC2u45ShzJEQ9f9VzTHTJ8YTEnYEWw1cw",
  "key1": "2s5Y1R5cDVm3JTnxmWk8QcSziz9u884Vj7u1S7Wk16WnUfUDadNkSyeAtjJG6vzdvwAkob2GJ5aDKqErAdx7kzuu",
  "key2": "3qukmPVGErU27fiWnLtuZdooGy6Pt2xLaQpdJbsAcvZCpKPWXn5eBHkACrCmuata3sRhmSbpSnT8eVMwXLU1hFoC",
  "key3": "4acrrxCveCAwq8mo6isdrbxxPTLMfLop9a58LhRhFs9MP6bKwjY8Nwnnt7MNLpF3L4XdpxJhxyW4Qyb8Uk1RMFbq",
  "key4": "442bnUTR3hTBx897ZRPuHQSS79VcXjSYyuLfVMjCW5DpmSJUzPpcxHhyAj6dhgUaAWeSc7Y6NRsJ1u4QdgwX8mfR",
  "key5": "545gAvcMXHy6jpCPjnF4Fyp9P2aZE2qGCcNGsvg66FtTzUG3yx4aXiRRtdAWWkto7r1FS3mf2LBy2JNYF4JZuf2L",
  "key6": "38Sjt3pPivsVx7P8zCL3TNeehBdE9QZsy2K3jmpZ3i7E4bBRfSZrMuQ7BxJptJAHrnLudHUo9onEkgbgHYGFr63H",
  "key7": "5mGi4n2gpJqNzRezeTFdtxKuJfCUWZRym6rFV315LL1SN1eM88y4T56boyoEiCANPdaLz9Cx7EYy8mzr1Gv4DZNQ",
  "key8": "3gAfuGvw6onhn9FAgpFLRx5A6rjpue1aTeJkY4RqNiitGtC9mQLCD3r3Rcv2cz1RovTjfkrEa3c4pFvZ3TSVdCbE",
  "key9": "3mTHseHeVnNkHnFqDaQDB2iRbNK2MzjUXNiMaaW9CyrcvsvJEvLxk4hfzVJWVpwTZMJQw54rwbpqJXu8JVTF6n5m",
  "key10": "3Bfi5BQkjhiV4H5NuzfuMkc1kSs4PbDHQdhhWua5fyF7pTdqe4BpW3DubNL4Q9iF9HktiupZN6GGLK14twDmgqGf",
  "key11": "46CFhUk6zKKzjHMwXRJDLqmRXU34yJSmmMDnvkySo6Ry6FAHfcFEXHa2fQS9XgfUGtHXk49ixk5SSmXyPsd5nCc8",
  "key12": "4AwhqtLFpR8Qz7Hv5Tmyn34iihaNCDeyptNNC68yeh4fSmBxA1oVef3YKeuKKJCnWF6TeF2LXGM5QYBjPm47nnN5",
  "key13": "5VnAMDQ75sEezcBJzV7KkffHLSvjYRRk5SMA3ExXE2BmC859sECcH5aFtzQkwF74t4ZQAo7nbgPnmaaUsRs9ergD",
  "key14": "ZgvQhVAtqdkUh7UBbj2PLj3XkZHB3iJ9xhjTNc65o6FoofgrpDpsdGNyKbn6teW2MoPgqaG2ESGusdYgNKKXn66",
  "key15": "2prwL8gVmvVbNL8CYV1U9QHsGQMk9J2FqRi62y5X4wPcyusp3NevVEiHicAu4jiEPudGQqhw6He9bgGsmF2cKCkj",
  "key16": "5oKQERz8gS8ZyrxmXE2uKNmizaArmx161f3kfF7uVYsUacGX6tD9aYgfqhAvqYk1Eq4SssKuQw2pKU3JzXG67cCC",
  "key17": "5UHpZCWWuWoN8kwGCdSz9EUVM26Vh9kGWzT75kWGVPFezgxmJqr9wEQ2Pych3auiykww2xjvCxRRkdmnYbr8cywk",
  "key18": "58UufLfPeD3tiqdi7cYEhpf8XJTemLbbgTQX5kZnAQ3FM5kqcfAMPmSDVkm3L8YJrA5961Wb9FEVRc6QSRudGz1N",
  "key19": "yj52pq1o3oDhEr6T7abczHe7VAyiYAG9LHbvt7zXce9KRyCAEZBFLoQksGxYt9D5tN7yZtFehJ91JKeL4JCBQv4",
  "key20": "2swvvJ66djDzj75tTPR9o172tgYCEGYGuisudNd46rwCjc16N7wxoc7XfB3vnwQcXzddfswYeGiRQdcf6GMHbSWL",
  "key21": "3ChAaqZsZS992kYu3FNes7nZbZWywuf2bj3Bux2DWbPKstkygT1DHdCmZJvt3ke6tw3ZS1sgFa8s12CuHQGzmifj",
  "key22": "42gUQZ1MCxnds1bosfGdJ32VbLjMNdpfRSzHDxh781a68E7ZH424154kfXmEVmbZ9jAFFS388pVQbBLRr9VevotK",
  "key23": "2fMtjz6965rGnJNqnmsMZAqNhoHMhgftnSRqar9jmNu8tCKZicYLj2mjX7NzjVFvWAgxL5n2H7AW1Yo9fL4dL72K",
  "key24": "2krif4SfemtvdS96Up8JFPsDJuiyMuVFtWujuuoJBFKD9mGAzEqB2Yg4MUh6vHa665ZZ2eCUxyqGuTU6Xo3Hwniz",
  "key25": "LUXsie4BzUDUMJT71EgSBpCWemVrYTpiMqiBpvUpvhzHK4z4CiS9swmSmJEEBJL2oxxxatsPBG46XbpgB5F3zm1",
  "key26": "2rnZfvUnay6WUaQry9bj3F9RPHocNWEd8RuvXHgiWUfUVENf73E29pCeTBMBXWosijM66mUKehRWMooHpiRG6Yye",
  "key27": "EG73MeU3e1EakLtCxkwnzKqtnjGJHW4qVs8jmcoGKMvrLVZD2U5EsYrs4j5AVXnbgFYHHQEXtWUNtZQdH9tKt84",
  "key28": "4cwynG4UsQ5gz2mQtZTYnUzTJGcbki7soNWGnC4n7F2bhb3DgEYak4c1Fn1U1EJDXS38M2ZPuv1P92ouPYAm2pwU"
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
