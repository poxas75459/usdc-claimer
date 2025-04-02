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
    "2iMAEKD28wx32qm8484F9Sj4b7zevjH2FnRgcuaCety8bUtYLUG9WgYRTLQKxXZjUeRKSySaeJ9ymXrfQSR5CiDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqMvPWAA1sCVz2F9CvjsWP5F24yqzYgTL1yu6xssJHKTe1Z8DYYgVo2B5jhvj4ai7Sipk6rbdaCYUx1tabE28dA",
  "key1": "31GWeRvLSf6iXwPqyVquXdTDivstpNyFjRczRj3do4GBHuY6NbsFceUZyyqUzDTJq4pjw3vM5XCzr62bvKScoJUS",
  "key2": "2q1q9Piw6ao9JzixkckpukCrFhU8XNvqNybufAFADmsLujhynvGe36uEHBHAomEgTemoqknHTEMkYMjPWKdUhM5t",
  "key3": "2cxuHti6yvHqjNeD3GBHDK8HU1DiZwerG73WcwaX4UP7vDDVDcn1UokMyQDW4tqrt1SotARsKAwzEAZknY21uBLY",
  "key4": "33tyb7mKLyLVu127gi1NoumkWr4ppGWGEreFM8rkUomibpyuAsKfNPnCzWeDJdCsRRdoZaLjdJze1nbXLYc6fmrC",
  "key5": "5XctEwAk2AcaLsPUA3CCMrBy2NRCm6y4tP1uu4LGoB3bFPtkBaijEGNpRTip72uX4pF4AWyZScJoXsuApeLMDkff",
  "key6": "2sdwEnNCixvHwiTZFjQtmS3phBVweJn8ZjQUSw5GThz4D9XsAT2Amfwxk4nSS5gQ3fQzYT98wTRW8UNcxSYy3taW",
  "key7": "4vp22Xc7RLa9in2x5EGztSQBie6QWKvoQKeL1zwNhv9WVraUiM6uXoKjzDbQWDQB4VEcSLt5fcvsQHYYqH7zGrGi",
  "key8": "iCSnodUdGJxqBLRJdFNC8ezBUmcGG7T5J1qMVKAyLTEwKest33ZhJPmTytwRgp622ZShF9dy5TPNJMTXRwNacq6",
  "key9": "Y6tyRpuFuuSsz21LNy6RUu2wkEogHfJKsBxVFvoeaqXmUZg7bQKGK3cgkxwu1GVz1ZUuvWXfmGEmffyp5w6PhSM",
  "key10": "4D9EGoK49JjSQq2iDDHFBpPycvPtVSE646RDqPtuumBDXtJYbNSez7WEEPVqCENuTv5DSCYmoxNgsRfmkqm1vqNz",
  "key11": "44zGxHn4E1hrB9faezXfuj68NGEzCjBpfkmU1nqFg9kQVb6yGvYZyAnmJQEXz82T6TrD9juewKitdqctDB6AQXXX",
  "key12": "5StD2cqJaAt3de3QAFWjHPDqb65LqkDM6maWaiGGW5dr5WefVxmwnVY2n1vZR3X7q5Se6brZjjbinVZfxWqJMf2b",
  "key13": "4iJCYQgeHWERdFyLtjcVUr3X241BWyuCc9FiwosanWPT96X12fRFjdrua5CJjm4KQmpeLay324j3awS4E5DES2oC",
  "key14": "3TKGhJ89n1R3FFYLuQEkJe7pu27bFhGkwzpwvkejYVFqXRy292dojh3qKpSsvdMfMFU2CaALifv7zjPdD7LxLi84",
  "key15": "9iybaEnUkvLe1X18Q86JqAneZRGUF5WCUNhQ2ojRdSZgqb4ak6ZB3CeAWdF1etGHCGB8XCRV8dspan6ivtvNdC6",
  "key16": "2FYtz9oq4xPmeWJv8gVu55EP8nAg2bofSXysEN16A6NLtq3AhwcngA39qureehCLLiYGcWkZh8BNgYgVybUFdMCd",
  "key17": "2LnG5Xi4Umq1gGB4PeY89hQ5sMpCZ88o3Lgq2Rs9aJwCsFZnstpE1mJTsUKju4rpDYH48DueZ1ENsHzyj15dWmp5",
  "key18": "2JUiVTUtqCtrzfhBW2s77WHvM5qQgL8zZHk1Kt4GZT9YnCnyZsEFwDPkjCKnUEu52FZ9i73aQpCdD9NRYUEUYmCg",
  "key19": "2o6qbZweXo851LiC5GAh4VZ1PgezNbj8XDwk6FGTVp1AypG53HGzFFTeU4hux693ABBBqbbSiPcniVUUZoMgq2Z5",
  "key20": "4aVi6b5KohBo3PvR8PKAamTEYNnmWkwxJ9owsv14Mc4WrfA59nbWXeyZTNxv5P3RETqoWPhrmr6JY5Y2Wzem5xae",
  "key21": "WMzgjzGjsdCyX4RMbrJChtxY9Xx16n6jKjNDhqxCciiZ74m5E9HYsdnVzNcPyKPhTXe2XkMEhn45B1ADhfaEgLC",
  "key22": "hh2hAPCLZXpr2R78eYDyPaF1Zi64mjNyLgmMFhPWiAurdFiNu1TdnZL4dcFB1UaCzzps8AiNLfJ53XaP23WER6c",
  "key23": "hynkjEtuj1ATUStRNt3atoSdideHm7nrz7XG2HXmm18EwtQNUHEWm5QHeCMsSppkKLViwPqPf1Z3ofPJJeEfnMs",
  "key24": "5JToHGBJnnjfcfB7tM62FwapuYRUWLBJVkdiAU4jfn6wBEV11tnXi1DvBjQ94XgWdSSWJ3294i136bHAV3KzvZEz",
  "key25": "2tXzwsC2G4UKhDW7QSeqv1XDikJ3xjdpY62iZG3LZWxcXQp9rpsenKwtriuyvqcnWuoLt3MyCt1GXMADCUz47t3o",
  "key26": "PpB3BHizkyXzhcEDrKhEbtG6QUH81PATLNrEMW8GhooUqsWdNHszZajkYaexiCRsRpgnd9FPkXUNuNA86xJrsPm",
  "key27": "2MaNfjh8urn9z7F5ztfXQhqwWVpQQpLFGSJXqKEiFk3HWoaRH42yMxECm2tQo8wP5WJYPDMQ3ZjA4DntmwEPBZth",
  "key28": "213rZqG35fRjzp7qvAmQxD6nDQu6dgAfZwg4zMWGyj688hKNQ5B3edPBtZ5B7bAVnWavtwMfWpxDuVbedVWBpHxG",
  "key29": "igv1HaYRDqX5jPKsmrQKH9bWeKxTsPZc4pXx8RyaZdzfgA7Se1r3YUn1Y2YMzxYLuuTHKQnyXFBxg87ohwjBcf4",
  "key30": "2E8f3QZ1BXm6bybopf83tXSsQoRbLhyXjZWH2UK6YwnwuvMkyTKBUgYdw7Erz8ByhWFgacP3GgKFubYBC9xNhfMV",
  "key31": "38R2kNhh8C8964rtVfsSoKB9indgLSqwNfDU88RU2nnLLZepbMdfvKc9pMQrfrs2skmx2tDeGWYSioBivo4yFzLq",
  "key32": "e6c3dCQNCZCKoNyhLRsey8vxSTkyWw3vH1cLYCJnP4qyiLYTJbRLhEjVvNT7ceFLj7bQZbWcLnTh1e8ECpisoRN",
  "key33": "5ANeHi49GnkRYHdev2zTwMQhtRkVQzGzs5aqv9ZGfUDVHwidnEbrwv27kmDPsBzbkUuz6BRxjAKbruR61i92uE2p",
  "key34": "3Up6UaLLcVW8BQ2TFrtQrgnnLYqY83MrjXXzV9bgZofXbz8Zhnh7MPnkePPZZrjQU2UNjwU1zPFpKWtjKA7S3AYg",
  "key35": "5ZVLQZpHWCYBr9rb2QVgvLd3xp3KYRTKUgorAURnSZSRg3QN4kHbQd1ArwTaVQSv949SJPaV4GkPwfD6hi3TAkEi",
  "key36": "3QFF1CxV1KfJ6j5dFDxotprcqRbLDwFaPK9mAzXLbvoJgzxvnxb4WwMDSF9krBFBde1aw3M5v4BndQodPu9RNHuU",
  "key37": "5FmYvkzC7aFZ96rxuz3XEcABbj3botzAwBRU8Zc2MRJr1cGeaLWnPLZDwUwzSPN1fwDC3w3FAovJqTCFaRvNqxeZ"
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
