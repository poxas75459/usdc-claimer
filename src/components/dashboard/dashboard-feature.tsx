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
    "pVeey1UV87EkkDdKvxUcCPACjYQmtKjsCByKgWTUvhRA5NYcZVeDUGsFKMPCGjECrr9SQdEQb7SpB4EFucpsJTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQfcWh74rJdry691WpWMuqnVNCC7sHAnRamNH71gy5Wh8oyEZt7ttVmijjbc1QYwMPTjqQApHoAc8EcdrZ51x5u",
  "key1": "4jdw22Lb7Wd59f2cpLsHNNsD6ne3LbApYjE6sMTEVT4gZaqgN5rZEzFQeHSMt6JLZr2sGovaawPfUgQ5mCd4BYUz",
  "key2": "Dm6SPRWdDMvXpXsEqkp3kDHgsNLASFTmXWEq5cPJHXHhti8r4mpsP2KrBGQjhpjqcNR8tkncHnZgvspqtvqN47r",
  "key3": "2ZjAqEMyNGXrE9gc6HZEdhmtjxmQcF23Hpvxst1VBL5P8Yppqmrh34sXiRy1fFFoX1K5JVBsAoyKBNmqAxGSDRfq",
  "key4": "3M7ayojiQARNydiZE3FYQP9rLs115PJgVNsPSnv8X4RUtHReDra8JJAmkydDtnc2fpvM8Mrs5vbX6LGAzqXedoU4",
  "key5": "5QuLHy9boMN3cUK7KKrRxrY4hgWRarE6qRQd8NSG1365fWw3r8CLun5o9yw5zvN61QZAhD5pGW5oWJqrzCow3gL7",
  "key6": "zyfQwwv7Zs6kALzTq3MK4xkYoiAjDFVaaQqVdSFSse4ws8cxymnjRqQcaZfAqMM1rej6Haf2Uo8mbtZ8zCMbuaU",
  "key7": "59ZodoeRtnpdWKpUJApvQCWiApZmySmGAHYLWARRATyZTBayo91MLUa3EnFP85r2bSQ6NtkmvLUd62fCccYHRAUs",
  "key8": "2Me8Q4b5kBaXXEHxVjJe2X3XNyhHnYQt1j1WqpRBA5xxcX8BCjVFacL2VdTgr8mdSK82gcp9DiYTwwu1UFgzUqsB",
  "key9": "4sWjDDbYEEmhpwXBhsrZkgWSkRBC6f88fC8extP4bsh8qZVyrMnnzNnJzLqccf7fDtnSaohFXiaLc7qecnQMXvUq",
  "key10": "473sYrEjkXRSo7LUAKQQM2zmt3rbJarPUyAVWg9LMBYd4WProHFA99hghdVgXauSPJpxQmZ1rL48Vgp2Hz1c3BgP",
  "key11": "34FG2x8TJpKfHYucRXxBaSRbPZTEwJfQtUzeLbat8Wpv7VozmA9Y5rtd274wUGXSxoCJ7qn59WgWa8tPfA7t9e6E",
  "key12": "287Akb7uvDFcdhqjBoYg8QViAWwtToHUEcwv1Wghn57C6H1P5WXgutjo5Bar1fQkzARNydpj7Jp99jbrodBZYAkk",
  "key13": "MMC8DyZ3jE9iqmmV6miQp2JkBX4rmST7TwXXeFsK2xfuZ9HLRWJQcAp8eJYD31mYhEvVGa8eHErKFZmijaZa9RW",
  "key14": "2hK33ZJi8pETkwuNMquPA6Eeqb3xzMFqyv2dN4mJpBEGoBSK7AebUiiiCRM3qwyKUczEo9kUe4RF6ZStCnjYyM74",
  "key15": "ZP7kQgR3UzWCD3U83UQdy89x4NwzzxVBepqE8KT5LWGjMpupZ9qDLg6X36or4b6YPcaVk9DgZDCFi6fppZ6AK69",
  "key16": "YiJB4iC1CyiAM61PLWaU14tdFki3um8dU8Gdqn1aNMcYB2NApUuCqoy2nTqgXjTQMqioKYDWWGu5eYv5BgJLJHz",
  "key17": "5DeswQR2PVJvxqtyNYMXbNd5QTMn6igkSCB7KvwjpHEZngPMSEf3xJsjVV1FgdNrqgySbJHsWcFbwNC4RZpsaV3z",
  "key18": "48Qc4HRLtVJ1DW1BirGpBrcpTDKdgvSbrXkvQimAJnMkrqWQULMfhRspVrQqJsjXqqNV6562KHSgdpLRjKyEvxWd",
  "key19": "5YMzz2e148tceqhXHGu6qtEExJ1CARjzEJYVu9mdA7R1sY3HxH3Z9aEcw4MmNrKE4gf9ztNbQcqWrYH5wmghUv8i",
  "key20": "3a5HXNJrKL5nviNg9o51RB21T6Srfm6sqhmuzi4DCKM5ixJYGGdDPT3TiGQPzm12pkUPkV7vn2gw8NHcGvWT7Dpi",
  "key21": "5ixVCkubpCtniJHx65S5Nhp5Khrf4jAvibhVfWxgvmQVqxTQyHQ2froLsGEeKoK2v9546uZcwku6aYnhvU3TN6JZ",
  "key22": "zu9DKFC6iN86KL7RXvyzr9eCnMm1p7BHxnhxJBPZ39vN7Y6gqUBdPBnP3qJozBbCL3w2qcH2TJHamYSh37zPy4Y",
  "key23": "4vAY7iri4XHtZUwzM1PoRCbGqbuAb1PzBhBbJUiLxd3Up7Gw5EqW2bL3EebhbgSUsVg5L4DEvds8ni1LrWpqhdAz",
  "key24": "2NuXT7oYPqQmyvmvwDVjRqowJZGPGV5WCxGrqJyhbgKfsUCv5eHD1L7o1ekgwP49uLB1GGgthGizkbRaZcD9eurh",
  "key25": "3FWU5K8mPkBtX29ovaBM6zNRRq4pVuwuRGSWYNPqPBeuyC92Efme9AZJnb9pf2uDjwzx2AomzEGkRe3B8mvh3yma",
  "key26": "2VPqfUFrAw2M8nMicdbnHSw2R6xxwPdMTx2EapLBSPT2oA2YYk25o36L4TgiMP6261eH5nkyuTN492ENQbed2axu",
  "key27": "5KZUaCss6EQChJHszweo6g9Z4iUBLZMP69v6MmSei7GRn7ZxncZxhcz6EVWHh6JY3H9dH6HXjuYGZYNEJoSzGhVo",
  "key28": "2taV22QoSNQxfCmATtUCWhtq9RXWzdM4PeM4pwTxX8CnQB12WPFVCFphGqjRvAj2spuxpLxoMXThYi6TwQ5KWgJC",
  "key29": "M6D1djREgPv4M3FDx3JuiJca4tXQiDvQ6438WRrGYcUNiyqGJ8TppPjrps6yJZ13WAovLAeuszi7TZMUKdByVmL",
  "key30": "5s7yPnwZUWVp1NBM1fcoZJxQeZGkueYRax3vs8Q1M7sgvFgarUdWJyf9aTh5wWnRgngcyKCUjH2EsDFknDZWFxex",
  "key31": "66onZT72JtrwhYgQTyhoeWppLYRM13u4yqVKQGNU8xMYkD7XHUjmjUQUU3frvnqL36EeZKPpU8zsUJ4CbGBBsExM",
  "key32": "4RM2kLFg2Pjvy4Z2xHbyDq1JKLuyp2GAzpvxHpd8N5p7YccF39EqcWEM2aoQQEMFFTwh3XGos1rchC7Mm883HgYm",
  "key33": "3Ec2qBvSMwSW9k3x1edBxuh3sX13tuQK6peSEo3DoJEkPzmJHH8toTDPXaN9eAi5hQzKiTxAFrJGdqxVuHH7gktY",
  "key34": "28xX81XZpAHDf5Ux2JBPj9X1GfmrMSQa3oSqX1mhnUwxH7nqD1aSWzxgvwNWmBdJuTEBKu2Ea8WeUWbaX7v6wEvE",
  "key35": "2mUh2JUnRaGWh75Hipy6V8SKjLpSMXngEghvUyFe7w2uR3PGcyHTKvvdYyHfg7SnaTep13bpEoS9bYqT8KrLAqkZ",
  "key36": "3KqFWYMF47FYm4terLhAWnzdu5zq6CNeWFNRot9VSyF3EzeZLBBB2gvur4s3sstU8fp219XdhpS4MX54w6v1K2CC",
  "key37": "2KJPHLRNoY55Grc4Tm1k7g347kPBWaGATUrZabhaKTAVBAmKjTwjH5Lp1XRFrHRsC5VJwF6Hv6NzcVPeyjn77VRk",
  "key38": "2yitBHtCCoywDF92h3t3cP94unyXz43NwfyZpirdD7CE4ZBVBG3ZUW7iurHuKxNxUG2QaZtnkTbLut4dS6DvqBvt"
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
