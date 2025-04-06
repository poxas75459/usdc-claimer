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
    "nw9RB84JSKPKjnyT4w5FPkRaN5HwD1miGHpX1hs4bjJVuESqE7u3RNZ2iCo4zQCxKYFj7GJsiDmprAwuvsSfbqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RuQDagi78m3CZCRQ3LRbWPXEtnKUDS9kL5eFPyhRj4cWcibLneUBNw2hsKAp9yX7vM5tKChmUFQaEFMcc7sb5Ay",
  "key1": "4GppSjD7YLxVJ3CGWPNGpmuGX7EJTGGHXWeWYxvtZitnj8PfqJADKNkfgPHVpsLfkcVD1UiR6JPjL5JUgD6X6ZNX",
  "key2": "2ieNW7mMtGbrjd7GJ3e9pFs2H1pCQCkNNacm1E3B8MAG8hxGj3LvmfxKvjbSMHdSuKwD8YyVf3gLGnwztgpvmxbX",
  "key3": "4twE322gGLUAKEtfNQ6Np57qZiCqRZ1RYRVeyDCPJdmfPvKsvL6m1CJanPhzbPawtVnWkdbfrUSdEEKUaSf8ZXFT",
  "key4": "ZfGhDq15Bu9vMFvhv9T3FUDwdMB6UVfmr7joJMEGewFmd4x48bmVWiAwVhnA6RhLb1yS9uuaYSVxtcygFmeE7uR",
  "key5": "4jPRRnz14ztb78Vnm8QuQ7E9jKjSKRxXDwsmKSYHVUWJ3fEi2UB6K4KjsjLePByfteybGKUg6GThgujKPrQ4WmbN",
  "key6": "5pQckpKbMsBP24bg7n7UovA7wTXegSVKAU3Kx3sX2VoeBMfhfaxSaqpZcWY97xXpvLidqNvr8GtozbdvzCXSmFpY",
  "key7": "4xjaC9fnWGtAwBdQbqj8MHE8G3rxhYJBnkfaf21r8DQZAM3aGpyGuvfeN5v828ecSSX9fXy8zaRDjVJ3oiu5qbZT",
  "key8": "RCEVWGsWdLWanFeuCyGWdAcfHnVDLFWK6u59zhdZYVwuacosAMb6zwvBWEkdmvH1cJHfNR8Jik91Uj7gcBEKgeQ",
  "key9": "3ygnaRGtZnToh2jG5z23k8EAyYMnRfeNzggUzreW7oapA6zbjqW4QASppvxb1LtGQiRnsPSERoMQA6rC2sWYnkSb",
  "key10": "3k6ppWRwXnYdq2z5jzFmkBtFQxkEA28EsuJ83VBUZ2xKuC8V96gaiM4cc9fVAhTbrcMyrLzMu9zeqqY6Nz7EVs5c",
  "key11": "5ogybvpeEGRdKvXUQ2TXq2vbfCr6P2XtJjBsyMamLqKVq6ctmHVjEfBdYDFwuZLxDUfQmMvvdj31cF43wfU79u8p",
  "key12": "34X5Z5J4wZM4UyTZN8kNoGvnb7DkUMdDeSwWXCdgQruMAgPdnVML4UfUEws4DUpPkXXicM97uaw6gtMPZzxt8hjd",
  "key13": "2gsygW6MEZs5FZL6cQbzkSAhzM7ndU2eJmyozrc8bk2F5VHqm2EHTbrEwBJbKZAtwKN5L6qqSmLp1dQ48dLYkxDE",
  "key14": "3DfQB8UAAgtyuBRXiQdN4ZLXQ2Ydjq7eVDLWWE3V1TnCF8dYJNeYoYxWFQandYE3awWiJjmxS5utBd4rvjedsDnN",
  "key15": "57jEZu6HFt9GrkL5MXhb9sQvxnfAtkFeHUPjbiDVF2jenuxXpkH5n2DBZEex394tKzbXNZcKm1bef4ytcBCW9xiM",
  "key16": "67AcFmSFfkJ6t2JWxgXHcXKXpRBd5EfByx3GdB3Vitymdpcbv3ZotPK6gdyYWMtPi9YHJbEUHTy6XKNebchFUdZQ",
  "key17": "2nhQ5cA57QzQZQNejvo89ivW3uv82mbfhyfEjpLqC7TLJe5pAST1qz67BR7kssB5dYe7q1xvJCue3jBiZxFE4TPE",
  "key18": "3FKTtArUvU6dbKstx2A14LLNcPSM5gCsikfJ72nwezX2GrkgjAtmwaRxSyPNTU3mifkT8KTydpXeXMmVkRC4TaHq",
  "key19": "22bNFRHFnMJQbsiBGUYWaqu2KLzVuyaHpXsRTFM55Y77mdJemxLQjgwSiAFNEzMGNTXZekorvTQ43R3K6MsdMCfU",
  "key20": "5djfHFV37yfqcKfF1JCbJeApFsw68ns1URKeTP7YCS6NnTH8hRY8xrLSd3ASZ4MoCNNcpLkGkoqZReRxW1iShQ6w",
  "key21": "2sToH2zesSEUQZsWPRSnQfiG7bgWJEx8MdfJGt76zcqxUgAbWunY1CDMWzcfbsHaAL1BvN49m7fib9XDmTHNpp6p",
  "key22": "3efJ8jQt9nJuLcxYZYU7KFLd8c4ndVpg7f5APWeLwXNB8oDXSwhRmekSByWvuEQqpuEj2CYZ3nxBv8aBUMiF8oTn",
  "key23": "3hVACjx9VEZbd1eRfmtXncajbJvYH1mEvJVRy29B1RHXo36Q6VfNeFymZpPmDHEDGC6S1vpcgSZhAih6chjpz8r4",
  "key24": "3BMwcUHEEjg3Eqdnr3r1jBKSnxnCe315Z14y5K63SEi1pE778GmqWpwTpdrc1YTr2jjT5w6FnnZT7ziRyQqbYT8D",
  "key25": "4v9acnZicu4KUm9vnvjowMYDMX4vNe6CF24MZoXcgzdPVWYYHkRvggpFuxJ9AqiCnzZ2gm8yNuGQStL2Qcec899p",
  "key26": "2kDc4Dz4V7Ma4mGQSkCMU7BM6e3D6Gb5PxuXaiQTTfqhMrpzHprheVY2JxqEej3shpbEbcfat7tjNwNA4RczF6Bi",
  "key27": "9ZMLvPgP2pUidgcb1sLdGz2mRsB65UGfmhPqnZJpn62ydTM8So8NqEVBc5v7aLY4bVWaUCNrZnBuiPoJRNrtA8J",
  "key28": "4M8pipSaWUqByRBJgkqv18M6LNh3brmACwKD9jF31qY1nbBQ6FhTtzHxZ4JA86CWuQ6D5NeZsf4DhetzK4aXGqcs",
  "key29": "3PEq2Ct6vjg4ExcVZ8uxY1aD5axdRmNmzgmcbwahV5gi6uD3VSbmeJL6N47QFf9Y2EkXZMScpttEoZHAsawMN7d1",
  "key30": "2TaVvjxpNWBZ4fWck31x2y8yXo8sT3E61XJhQPAP9cyfjDwkjiP8T4esDNeyLpdjoS9bfKeDsNT4osJ1M9ofuko1",
  "key31": "3qBdrQaQ2xNxhS3Xg7VQFjR88ffZYg9aJpmMhycEmDBdCGdPECB4hwWS8ZPK7fUUSJRdtM9NqsbHAmLBtX61jvEM",
  "key32": "CvhqMRqJpuWjgxc6hJvQ7VSkb96HtLQ9JKqrda8PLcbufM1gE81JRN3aekFepHSaUv5CF6h9i45bDRTCjuhSf5f",
  "key33": "5CvntfYX6ZJieDTGqQ5RjRJSpBYpyeKbypg2voV9UW4FEQQBjZHXBttx98YcLJpQXdCA6owgMH3uEC22n9FCRfhd",
  "key34": "4nv5hQ9uvzKxKN3B66pX2NspwE4gsYT4BJ8FDeSiEmNu4GFY7XRTgkbfmdscCs2DBCwZuNJuF1EpLX5WmMPoyWSv"
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
