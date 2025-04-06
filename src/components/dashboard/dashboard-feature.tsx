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
    "5Ch8FQkomVyn1cxJDnbt777tspQRwyZ73uxTEVF3MGmMJLLzW1VmCnZXufyiZ8p2MW3hTTX4EGpX5YuJGCSBXLTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qGvQbx9Jv7jkLhswf6kAJxvUwaqegMkJvUJKMzcT3L6EpvaUsr5G4ya1eXTLqWN39chb1S7vm746mcdVp7nLZEw",
  "key1": "BLWzHFfPyqKPPZU1QRaELPpkFqNtPXwXfX5h4UF9FDYsTR9qe6VPpP7KgULBwLPxLVJhXdFFeZTLVCeB5Km9Kvm",
  "key2": "4DvSimR6oQetr7yDmWYDo6xDgSUZYrxtzT3Mp4rHxSYMNtvmLoh1LGDF5H2K7eyh39Swi8cB5mC6zxn3Ey4kv3bS",
  "key3": "5fgjXdXmnMcyCKdnFVzQamc9KNdpSzA84ZDbyJS5xwjSsni69Q4G1TCzcrtPvXpm1YDaX3dKpVkig4mzT5ZqYmxZ",
  "key4": "3xuCXgAR5fua9ybA5AbmA6JKfUu4Tp1Bbbvh83DXL19L6ymUU69sh1v4hQXiSb23Gh4AnDRTKgSpbAmJa6DuwF1C",
  "key5": "3yky1ccQNuceep4mP6RTJeZTYrJwnMCUMAgZrGo9YAt2vAY9jKCriBprpM5DuhtSq5bf6KDQsodDExQ5YUQnnKXm",
  "key6": "XFYCAEbiWE49ELeL1keC8q8E8KxCVYKCfFnrUSGGMWeLkXG5eQxEerq2ehVEEm9ub7WoUNyWUUqx6X38eXgxe2k",
  "key7": "51fYVh3eUGJPzwpRQz7vuG61X9SDoSKjLfyV2MWBBPHUbKcXeovenGVMgfQkPBVyDGpsseFDcyfMXAz5Um63yNJj",
  "key8": "26m9J3wU6M7y6EfiZoVbdnFyhqaXMGGXNF5v9yhdTnNhiPfmPdEbnS6QeoGb79CCMjQGQ7N1fRt4PwY6uuFX5QZU",
  "key9": "4tBV1YgbsB7SXTrbaRVsR6GEUEmaiuf6hantoxFtLdD2pbCgb6DaPhD66qDcfWmJfcvqFYg2GwLg7dAXUydeZrPc",
  "key10": "4RnXBVHY8BcAvB5hwKpHGRY4jSZd7ueL4mEqDFRRekqgQUrUL1HDNF5Dr9144i4HM1Xmv8N4DU9mu1oz8V9Ur9Md",
  "key11": "T7aiSoXGJudKJ6J6XhN4QAAYzqne1FMRpsWmh83DKhcSnQJeF933kLmVKiTBjFAhTYFPACtT1ZGFqvmRVNNC4mu",
  "key12": "4y9Zo2sne12Cib2Tsewsw5rvegG5ULJoQ3wCib81cB1vYi2i3A9Lc1J6Ke2xhKguH2q46rB8AGBXr8MY5St1MWz8",
  "key13": "3Jj1HqxbLYJDkv5Hi7GAyGeDwzEu86MNsbTxPurLYfuQex7MGLansCQZZi9LSRwdbhiP7RzeZ1uhvxJihJFjtbfo",
  "key14": "3NzLyyios95jqW92g5BSrAj2GGQsNpZD5XJb9FLgLvrf3gFrmsNwnxPpVz8NH3vtGe4JUoZgb1arnZTE1uDS9V75",
  "key15": "2osiLEsRG9RcKDjAoXMBxpU2S4XDtWFupbpA8WvwHDZhq2DWUWCL5aGoVX5aPVnoU5ZC6ySNvde8TBKhFiD6SFRH",
  "key16": "3zaSxTikzdWzhG139HppuBqQtuoMeNWQsVTk8H3a7f7Tqb41VtXsPkvJhsbK6FvKPCJC6mkHq6VeuxEm7QqwZwYA",
  "key17": "2Mot1ggWBLyLdNMgStuWT87tu2Xr95KJPfAnfLmr5kDU37Gq3BXRPNvf1G8Vt98A647xZ4rrCAS5AheYDc7N1H9W",
  "key18": "5UKnUWHoxFUWJ5dNScxGC8DfLsf7b38AZ5YtKauiRKZfhknxPyzhoT5qu8vG26kZkBDf5tjpEbL17YkBxtZBH7Ch",
  "key19": "5S3hGXqUJzAMcrhfd67Wb8GAAHNwxPPVkm6jho2SrGpUfF9Xf1mSp3YNAfNFyRH4A71y2dkBshCJyJUFmUy3ErrF",
  "key20": "4SCNX6Loky3jn9MMDx89peVSzrjEjBy6yxh5YQM1XStW2Q7PWYa5KPfLeR9VesVpKwcMtKCtzKGinSiduypP83ez",
  "key21": "4QDMM95cb3uXr6gbkcivZ6oZMkXLrNy4N1Z2akTu5GuFNTCafBsgUXGQWDD4NoVPEkLQG5yxDHGEVYin1xW1yKqN",
  "key22": "4nMt1sMNRZQJtmkpRMuizKtQBDUZJxZQokBARinoM1QJ6vZdfDMz21rNC3HPFcKBF9LYsY1Z4Y9syzTXRsGYu3i1",
  "key23": "3aLsrAWZtryyGZTHJ9sXycRM6JdDMUx4GftKXmLXeHcRXA1EMVbvVbEcAe5JyCYP65DWcW6o2qSq1CKiUKy1Ec6K",
  "key24": "diV9m6L3A4PGKwSaNhNjpp4pYMEG6FkHLVKaGRQ5NiCRAeZKDBp7NjUowqKbBQKyrxHpQ4vxXzMs4JfpzRQ4WjE",
  "key25": "4wCxdunUva8WSAruJ9qU7kyoxCcVumSnYyDtiKjFSZ9CtWtPek2AzXAuQXj5hGXtEfbMxkJHzs9xzNYAUF2UcYs8",
  "key26": "5HYA5kcm5D8ytDtUoNyJUSB64C9kaRDxS1QkfraW4gZPU7Fq4Z2neSHUMWr2demnHp8XtV5XWWVnYS3YWFasdsrS",
  "key27": "2gb4ZB8SP44wgpa66VPAafHCAddrPheekerE48szKKKRR4EK2M2XzuSV34ajdCyYbKSQYncSDPU4SgczN37g3UDr",
  "key28": "SHjUpikECqpBUPSSN6tR3A8GoFXzEqYoNkHx4U7iZgRDmWFLAooexGffW5nGek5fnjYHzprHWAKtL6gXbLSecTx",
  "key29": "2xcuZGdJDYTb2xwc4DuNJiAQKHHMeEwPu1sA391nbLeVGdk9DE7RfzRfW5sAW324BwZMDatNnuFJKLC9Jacrnx89",
  "key30": "4EAsNnCQtf4uVCWNwQc1uc7zThGNoZYHLs1uaAKKUeZFcn55TJ6KDfrGjw34ogZbQtq58C9baZtbzv6Ki2RyJTeV"
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
