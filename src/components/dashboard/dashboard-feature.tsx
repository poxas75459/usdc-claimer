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
    "2NwT6i9sZ17Rt1rGs6ekEt4v1uEUHXmzehaYNzSmS24G1aADPi7FYoWf6HAJq8E493TLhnEDbEzCQU9V1KDPi7L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4hbhR1cCAdPDzgcaVy6yg4bxycCmzr4aB6buXCrcWQDewAmC4bNApzmZj81GUxFTjzu6RgztnHuy3QVhEALqMp",
  "key1": "2NNvsGgUtN39SNk6e5mnhNyB6prsT4CMpE24fcxDS8WzxtrbQi9HZoZCjwDNJVh2GcpdB8RhizqoHY1iY7fPnVjz",
  "key2": "xGSFsrA7tTi5LqBm467UcX9XwGTwuKxzea8XBbfAdGbGqiXwE17cnRZNsWCjBgwPzVH8cyC4RkppGRn1kXBmFqa",
  "key3": "4gD6kQh8JxNRSjz7wpz4nr1J5XypkiPB7VcNPUHiK8N5QWSzzVxfJGdU3ygASzk24UACKfRrm2bx9NcopP4gb3dA",
  "key4": "4pEnWx1BSLwoiCLHTywYUFtPiFYqWWKP7ZPMfJpVSEBSmmS7h4Wo825P36BjwAf85wxHiHcQ1jiVC4jXWcnnMPoH",
  "key5": "5g4q3aReRDzhS3f5QNE9tzeYjwUPyVZ9n78rVNK5GSJvm6fLXCPDdiEMMjXMSbzEJp7sZE2gE9NPrhRTRFZ3a6EM",
  "key6": "4YmEiPajBar1iz6aL5dnaFxXwhPaMq8UugZPkpZMLc9MCuY91hWX9wQDTMtcoGCKG32PqiX5uSwXs53TCE8U7JdW",
  "key7": "3EACdGTqx98LB3kxC4FhKaRsyiKLg66HXs1jrEdaJtc5edZXVqb4dZGea2gP9yb711Q8GYe2Y53raLLCcJfi92ME",
  "key8": "5RhNNC2ReH9E6ZE6ryC8gSUiPCm4ZM9ZxyhLn3ShcpUyWF9MFcBDFoS9s9996K7yGtsvd1H2AddgyGUwUarde8S6",
  "key9": "2Kznzh39jn3xfD4DkwF15cfnvFQfiAQaGDnTAe45WfhQ9sg2VyJJ5U2gc1kCSKhv9enLLW9dmbikjrVhHsbgCP33",
  "key10": "4FodVyGahDBQFSe1EfVZ8pFanzwY7xMsFHfj9ZFaHRT5GifcswL7ztEUjRmjZ4Tmpsqdq9Lj4uiJTqKdA9wDtxyY",
  "key11": "2XdHVqBrgyTzGLDwLLnw67k8XyAca4XgeKFaXwNT88TJhGUfmqfsd6bNPZd6vxSv4YPFWM3ZPFvwBrB3Rv5HjFUG",
  "key12": "4n8jdUTxYFUqc7DTZkUQR18b66yfRE3A7iTDGxiNKYxJzekGi61nnWZJVE52Yy3FuM4m2Tg3XrMWthpfSGvF43PH",
  "key13": "njTuFuD4aKnjkcwhVnPVLQaJ6ihdUMHc6485JcaWYYAJzkAE62xLbTXSQxrVc8rDV5Wxf8kaE2Tf7pWaaDpqkWB",
  "key14": "4dZPfhCgEFap2EzLvQdCkL9dx1YGKBqjzHmceZGjBpjeekTmRKJbeZdgHU6W4zVjQ5QFka2AZWEuo2j1kcN1ByHY",
  "key15": "66h1jEHWDR6JnJ32rs9b14JMzsEVABfESTDwSnhN5fQVYxZKQNwN83ipLtqar5pdhqzzthioSvDZN6wHUcLMek2o",
  "key16": "3U1wVr2XPnc2eetfPEL9hSdG4LFCcgeZWB59StJz3m33uQyQGxC13BizqTUvNMivmPML9SCxeUZHwxPJFThoGZD4",
  "key17": "4xGwKHE1tX8k4qnWHVKVpGLeRRC12x8GBm4C5j4CMgQj7c3uHNyoBuTkMpKPB2TjAkK9NyNZLERoukqK1RoVd3NT",
  "key18": "4bDwV6jw9tpTQxzTkrnk7KDc6EBB3VT5QUJkbEMcpNFxs4k2nnnDfQeJndQTkig4tR5JdBQhLgJ4CxrhcBbNf6hN",
  "key19": "4emqE5xr8oYVz5Uo6ans5aRdPmEbV8tudNwZnMSzo8EjgFewgAEknSCAgmNzLrDacveqP5QvHXBFQrWboqhauhz1",
  "key20": "3757UPky3gbk59sGqaRZWQ95ZijCr2MsHdr9JPqwB71odCNd9hRPDsT1cr7td2JcbDLNrfsiUW6bzprqCEQxcXtt",
  "key21": "5ckZpf4JxYJHiUzhKt8zthhzVXB4kbHxJQd34BSxmto57b6b5N7VNXesNpJDSpJq87gz7FNZGYh5nu9xDafZRHCK",
  "key22": "58KFZBFsMjAeFzj4pdsZGx4HzkmW4DykahPSk38nhXAQQtLzrpLTyKZLAfSTaLxTHKYAkjG9G4JFTnhJi68rkALg",
  "key23": "42KqQfkgzuk2gxiyDDGaPMUxuYwmPjvJLh7GPaeUbUb2pd4KZqcb1JBATtVa6N43k9YNEF4GH2tuB9usNHmdhcDi",
  "key24": "5q675u3ur5q1kUiBkFLfLVhmxv6mZRiwEPCpHPEa9CmozBWPNCvW8VAjYZBLgxm9GADU5chtEQVDF9KWE7DWfjyf",
  "key25": "2RrXLsdjdd9HRLw5cmrC9sRYP48Rgu5VmrRdhGnjwThaRKgkG7mBTHCqbd8z7egAyEmas3jrRCBV5Gc9feRrMuSb",
  "key26": "eMmqni6SFpbaNjDmPQA8astkvS9fqbk2YqckLJtwtj1ThCiiR3viWGfZCFD5m9osA46XPf4n9vwhEZaj2JgEHi5",
  "key27": "2XiHvRuoHSSnxuAYKT7S3mdT6KhmRQXrhRjQDu2mStx33d8UaWocA5y8jVkbmb2Gh7ULVaYP3L4Um35X5onmGUKr",
  "key28": "3v9iuNXAcg7sL5h5H1uu33vKP7P2t2Mu8SZ1jgHuVcvgmiiTKfTHKhAqHRMSiVbPm16kwziHTowhsophnydbadc5",
  "key29": "3MLRw9ajYgcQPV7yXw8tNvpWTCHmWa9VMLywotvL5KXquo8ruXLGRFCVcHGRC5rA9XpWGgtEhknyw9r5jqdgd1PW",
  "key30": "615HM6p31YuUA4zvgHmP7QuCHxZWdH2URSvMDprKxcqxX2a4mhqhxfooDa3sj9qkuDU6LE6VTm8Pb2wTnuh5WYiA",
  "key31": "2Rii5tVojE1K3Nk4fJSPRByDjHUqMMHUAXzbABrg1F1DEdcUNQQmTk3HR4cZs9hGtVu2153n2L6D6AZv8KoRiydj",
  "key32": "4mFF9XBc4UHRjhsiyHtZNWBWKoQa4cHX7ciePXyX4KaLc1mDaVfnuZo3UBg79xLCnsfFVFaYxpu11TXfrJ6m6SAx",
  "key33": "GECfZNLkxth1J5mAUH1AgNH7QoVvBK5JmJPNb1CyHhbfN3B5Lu5RREe6R7q63dNPLMnETswsQbS93QsAduLYaGy",
  "key34": "2Uy5en7KrZper5U9ddmd7MNtpSJnSvqV29L1zFMS6YvCE9mR9djG5idozD4hRWmC5pP37ymkenvkcuVVZrsPj9sK",
  "key35": "3QMePL9hDs38D9Re3wTfAEUQMA1Qi5STqsB4KZSvrsM5Hee5Ka8ETJGiDGC8umwVjzGdKWv5LcfWzrMrrXNtoRvi",
  "key36": "5SAWnifRwV7FtCtMhGD7tFKhNXztRrTS3Mh38K9a1m83QFXVCaTAm4QrbazjFAZsrJ9UQEcgtkshfqVXMKijBx5A",
  "key37": "pf9NBf74E1GphYtKLxT5UTaCVzM6m4gyVRc8bDDJpD4K85XBQqqAcmp9Rsv3vjgRBbmPmqCjPurifwizjJALU7U",
  "key38": "rVibkJnbvH8iZxSRTM1cpuzgtpQiWJEgRqZduHfK27BFWGLv5ZdQERpyEXwgXBdvKsuMNJHXM6ajtLg1Mbcp9JR",
  "key39": "rvALfmGjSv73WebkGJ1xYEPcfMEJjkANGAwSjbPaGjBrxJUitfsgNYKkBEHpBZZHCH3LVds8sS6E8HgS9fjGQvE",
  "key40": "FS4rgsVohX9S49VTtdxfB3mG5hG2UbuasokXs8dddPmtvg1BEpLeeGf7wNHQ6JC26FA7W5mTZwHWG3wcQqL2gAr",
  "key41": "5vGhRdAt5MtiSnv5jT2d76MqU1cFgGUjS2oSPBzhpR7kBHH4ZXaWKPWb3zRePChWbqXNRZupmHkUoCsfJttoH89c",
  "key42": "2xTBBqoRT1PeMigyiWv13b6D8udy2hsFUP3H732UtTPrkeSMMUvw3rX2xexg8zTdjyHJBdoqkX9GbwkTFdJ698BQ"
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
