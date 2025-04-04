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
    "2JZeCy9KJ76ZYout7gVXymrTrdN2pAKAryfhAAHV1sZkoPNne4KvjwE9NuYhfnxYB5buvsFrthgpQuFQiyuFpWKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HEhL6o3KzJn6Z1LPmoMDsVGaqLDNraVZFAXY5JtpdVVPxJ7rht9agXUb26vWNapqkN3vB8fqTWbSS3E8Xh8zpUb",
  "key1": "5GtNUMcRcyCUCHvnB6gPd3NRYEK5dLDmLqX4SHCfWmpXfEvXnotxWxUrTUEYyjjzNXAVUTswRfz7nRBYQSBHta4m",
  "key2": "2yH7N8cGkpCAmcmtuGgEemmWso8Ma4TP9cF5scGQ3Tyag2TffqL75XqBmRqW1dymLVwihB76MHe9soBkrN2sY9yW",
  "key3": "2vPwWnWZobsbXbxJ5TZ28LizgFpGSVadUESGrmnRSSPpa1mzpaJKuUAjQdCMDVcejyupK4XDxPcCU2YkE6csHAMp",
  "key4": "2rhkCXpvE5eNSquN85u56byRgARgzQJPoyGr8cuAhGKKXa5bEpCPVHgRsWQcTJRukPG2vkPK3xZ8TnMzAX5LLrJx",
  "key5": "2H29Wvsxmu32MFdpTz7sFmURAEPpMxqRrJ21T9Xx7v5NrTH1VyTtdu855a7usWeDLAfdxgb2ifDAdBEBDMv4f8H9",
  "key6": "PiVjk2qgGc3Bw5uVtYPZFBKGVr8j8idEzocHQEnJy299Ssu7Rnh5CfuYp9yKB1o2XamgZPBBzrjLn5yXEfRYads",
  "key7": "4UZFv32oZEKsfbK52fkfZWpxAGCFpxUbKzaXAAhUDxwaEHAvmHkk1tQzY5z3KZigKjjKri4oeFHQ9TApjLL6VwdK",
  "key8": "UiKUofhNR5TWiA25J58W7w4aeUeGBKbRGmJHKnJuyQubu6QbW3bePHmNMa7wSkAyY3gwHsHgWEuM2KTrdNR6Gs5",
  "key9": "3QmhZkJjnhcvJu2LVvBzYLRpoCotaCHCjCxfn3W8LVLExGBLSzVgpven8pmPMEHAJ5pNRxVAWM44itoh6zk2HftW",
  "key10": "QZkuwqtzrUqwdYkcnTnfgsiUJTgK2bvofjpDonj2VGy5NEhMgX2ZB1UCDF5iuRXjh7Z35Qod1fTbw6URAzALQM6",
  "key11": "4FrEp8BHXB21zvEo6Lx8oT5g7hvPGf8aEq21edqc5KfHfvRBkgk2xi1oJ7Pp4UAraPRU444XNfJDLbfJRLmwsPGc",
  "key12": "4gFYtR8K5mHXq32XPJUnpgf7FyBJwedMx4pc4yVWx24X9VoJrpW1RFSzU2pHP7cGYUfcn9fhubrK8EzTNatfjssp",
  "key13": "646E6dFEE8SChaAPQFWiBnCfdtzfo7ehtAGkKEvQA6PBtNWKdH3yBsjAuD3AL3fyUPN3YzqBMpaLH8Gx7S7YVEog",
  "key14": "5STEnYxvS88AdfZEdTNPcpij63mkefex9MZJVewAHm4w8QS73Fn8jmzEvbMzUHseWuqM1p9KjzwDxPZ2AxDWADXk",
  "key15": "4GQ3AETkmF2FiEMLvxxHkUbmrJaphQGfU9U1mZnm7kuBu6LQEeEaRDkF2ypjhh9fNayqWaQV8vuDgoZ3E8PdW8ym",
  "key16": "41QeqAxvgjyszKfDkXLuXS28LiydFqo8eUwg76vQhoH2xysboxk3AkXsBE6YHEWRGqsyKahTzZfnDEV2JbLhhyRd",
  "key17": "JGhansKrSBN3fbb6p5SaGbnQpF7zMHHNnKqom7ScGSQprVrdLwQ4y4njeho8RB76awbrnCaEWiXjDr2QuPCT1K6",
  "key18": "4MoxxmpEmQhYnRHwvCtNJtWQjUHJtScWYcKHiG4rkuF4MRyRVVMQbZiYxdyPFnx9x7A1cE62emdNM6zN9UMnAmD5",
  "key19": "5U4A5nkuHr4JGeT2RHDis515iSnkxrux3QU7VXT2hgWggAT5SaJPa9HqSxfyeutV6x7ZcsYvEz4c5k1XsWVNUXaE",
  "key20": "4CwDfycEiFTCspnLqV7RtsRFEhGu363DqmYWrZkudW1SyyMduWHsDV5QkTW7yXh6vH7KEKHtxBGZT3SszMGRaQT2",
  "key21": "4zbruhtveCJ2aE9cyK4swgQsANcHJ2Usaxz58uZGwkhwqdUaLaNhnn9asarEEetWunXqvUP1SwCWxLx3xcbWwLuq",
  "key22": "84UCFm9LpTm7uqjoAUCz69acQQsxx6yDGhy9DU95kNfK5LFqjS3NDXy94q15T1oMz3SFLTiDeb2x3nzLH3GQGtt",
  "key23": "3sVNZMuAfhanpTBxnbMa6Z14eQCv9ND4Z2nyBrFMJBYVqZk9vi3XNg7kTGMCRPL17nZG3AZCZT1mCH2H2UYSgs49",
  "key24": "47TnqG8fs1JA4i5GzgwRvegfTedrRVhDmnh2jKKg9DFLRbb8z5J7ZcUUzsn2ajGDaZ4FtaYxtqwrqBaxubXip3yM",
  "key25": "39q45EnPdweGtBK797PV48m6wF91bfgELHmv64Y8cqzY8tMbcc5m9c9ppai5AbDequvr7ELEEYTZyffygSvUB9aQ",
  "key26": "5bY2KspbjRf1SNnA2aG5wkCoM2687uEHKygLGkLVqQCzQrcX7ihq1HbFSyaWkTqwJ5SQWb37pYzrkTbZvDpK7oHZ",
  "key27": "2xwLzwXZYDctHA2k4REReptf6QvJS8TZTfVDPhqXezRr6jkKmBK9di8eHG2WfH1c21ZGo81e6z8J6icc8PxLZyFw",
  "key28": "3ui349NLru19QvfsaJ3v762Ae6vhgZewqSCPojAAdAknVW7bZrm2RYsBrUF7CMLUpn4L8wyLebThcEUEBWbpWMdz",
  "key29": "3LWgch64CBM3tbGXQ1jNUSzENHoDWdpXArkedxppZEQz1KMrJPxs2UzSedVspXCGbCLXsLcppgwWDSN9vZEJh4RV",
  "key30": "LwmwVQ1c8ewvt9MpjHf6uzjBC9XU6JVhV5eqVV5nZQKmdfYs3q5L2eEXaQXDsmYYbFWcYEP8VKerFUYn4cPhSis",
  "key31": "573vN8V46dMBLDb3qkP1yKpygSVEFvexHTPtxoMgx6CorLYBhcBoX9MNe9vHHJoKbWjZCB1ZjSn3qJxRyWYXc13H",
  "key32": "54yqqM1rvJQ8rYwSzixYWGDMYpdFfBBavRM7n91cgFwY5HUkEehr6VPgV8xUByeoaKXunCPQWByDujLMPzdxGk2J",
  "key33": "5fvN691UAbB4Zc2qxeX6VY89nqRrgskNc6eJd674BPZvE9YNR5hAQBkqRQRq7pJveJkkcb3XrrCUVJVQ2tZw2xWb",
  "key34": "5dwtf6AbBcagScNouUGMtzWvXk73n862H6VsX9VfKB5eHcQLuf1UwjD5mGXf29huJpvCFnyDKf75aMoJ9zjuf82h",
  "key35": "4Ch624mzJ1F2hDFoYkk3HXYzebumVfh1HS5GCxZkzgyNBzoQgNX4GWtjoi8UeKzboiGskop4RqxZvBNdnkR7ZuQH",
  "key36": "56SXoW9SLkTH3pgM669Fc9Qye7DH8NWWbXvw9KdCp26QZyu3FxakRJ5VLAx3dP9J2M9o6qsMJMwQaeY5r3fhvUTR",
  "key37": "2YvGNDEngiLoVVgwP9m4RVfSZwEM1LKo7s3fephPQyuGBSfxmyPSQARQz1XJ2xfzb2DB77nVSg9V62RSn5Y3dRUn",
  "key38": "28jEDFxNjkhYZLgRbmcfyRbxraLiuSnHNdm8grH2C8sCoT2YPa6WPZcbd8MkxVJ2wJc3s8Mm4Hia6Nu5zMf728cn",
  "key39": "661tqxiGUdJJSKLjcvWFxfXj4hFZ5vLHk5bEtX8VGAvkticwj9x2c84EmFCzoDQbp3keK5aLCkoxACbuNi8XNNbC",
  "key40": "2idEV32LCBshN9JXHuRpD54Yw2dDtJd5nvWwhqh7zrpiVricbBMSqaarmtf9m3yG7kfSNtAGbUfBBDT4FsZAJoif",
  "key41": "4vh3rvws9eEaef2hKZqnV85o66hEG7CGDYz4SmsBQk7i84rUHT7Xtdqs24TZTeJQsHbDiHRNkvTofwAwWcHaTbtr",
  "key42": "1x7m2hxcV6oNGmbGdjWJcNABwf29oWVwPRh8FcFzb1G4fumQ7RTitjpAN72eRUwV5Y3HPJqTHoCCaBCUgvjdXnt",
  "key43": "4HDcJd3rE746ZoiRSDjk67XivXUH34THrtccELLLkuF5zX37K2pRqXT7dAtDyf4tqzebN6m6mxm2LpRvsKW4MAaz",
  "key44": "2LuxPVGbymqtdSinANCRyuBUUcJfptsJyEGK6VV3eAErcq2TGss8FDr6iNYWpjJWQcXgj2gxGqV5mRF2mWw7eCpW",
  "key45": "3w1suoMRpwykgf22KM85bScFw8yc7J52UbiwR9op1qDbKj5L6YgLgmLuLaniQu8n6kpu2SuE9Pbs6Ni6YJyQAj3J",
  "key46": "3Z1V1dYi3RDgsxHi9w36X5HpEGxzrmR9PvyX89uMEQP6KZ9KVwCCHD2RBGL9mWtau12w9eyzvNz8GcDMSNKpbpFU",
  "key47": "5jqvBb6brAV1dMJHviMQpLyWsNkh9qysQop6bP7UNKgu9gdHM5ZU3yJs9Fnc8tgodT7MY8E2L2oTFAeVwkNMtDFY",
  "key48": "4FqHsJaF2Uksfq9eSGUkZU1UhdXjpWKACXjfD5cPzVxu9bFnUCJ5phMfwYXQi7Fa8nZLbc4aBwZ8bGVpR7xKNgqE"
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
