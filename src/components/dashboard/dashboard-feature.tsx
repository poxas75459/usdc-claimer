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
    "52cRUAwgkCJpJRzQHA1KYVwCN5eVXgzgNStb785XumadtVxK8N96tMtzpUJxoRxVf6gZcxmvSHPC76CZkBinmY3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6463wsJ3HvRnim7aBxBoXTeawetiY56dBM4h2rbxUdtLdDNGJoEwnUcirfHHp5SaCrGaFEWuDFZx2ZqoPEkJzV",
  "key1": "HBWKyJeYenwU7EeUXmDgCZkWQZjHP7LtHttCxFTftLY32tE5WtucChNZfwxo2xTBMD1Wt3vC3PHYnfYQRqSPj5n",
  "key2": "MMjSCEEF3j2v5qdixFmwuERurmx4vwhFLeLYk48s1tza3d4TQ5zarQk5UC6jj4dFLJzLCSXzRbxbYU9DiYrTRT7",
  "key3": "2t4yprw4RvmaDVr9wsEdeKJRttiV4CB66ACXjTQ21JNp4j56bQokJNHR6BDLWgNMLJN3GCBfrmm7ZAwnSX7bCNEy",
  "key4": "vvwJa5jcAQXxAKUf8k7kGm5cCoTsDdjg3afWKmv76LAyfcyJNL2qJ2JVGZr89Z8zKQdMd9gCxzahAAS3NrNWHfe",
  "key5": "2YRnpaGujN5w7fng1ES632iqhgzbMV4sEdfprU29EFuxQbZYs8MPn79qrPRhMN1rbE7ispf2hM5XrFURVfQYgk6c",
  "key6": "2MMW2cGn2aek39LLQX5xpYMbg9Q5uYZ4G59WroVLePG9Vgi4swf4HR4jmDwBfrEEZ3Y37z2CS716WhPstRrTELu1",
  "key7": "4mpNifckk736ASHarKJSoN5NRW43tRXM7b6zUKoMpKtR9bzpn7kTcDEQsMyNXWN1Jf1dC9DBF815cWUVDRY3oc72",
  "key8": "28dXu1yEwytLhiwj8rzPa7Z8XDy3eDH6TCWMBZghypkWLj8QYx9dPWKXcKi3xzCJYRWHqasoTQ8ZgSoBNFFQaVsC",
  "key9": "pQYsqBigHJZKN24bwsw6u8m6hTC4YdAAPW7QGEcpJEimv9vgPzkiGB64XSt8WhqSeRTCsUzJFj7e12CRQttAJ7u",
  "key10": "5PrjXJ4Yik8hMd1yohNJWTSnDyAjKkuEUz442fSAqRJPLzmJuaoByq3Guf3PKhVDvKhxLKnS5mTkYjYJRN2kVFST",
  "key11": "2o3XQAUFuiQaembF1LUax2wUrarc1ktXtyF6oeR9CoSpDqX768KJyDm7kSvvuedp3zjVQcXwPh4mDSmFXzqv4Kxp",
  "key12": "5cVcQVd4Gz6fJTSckkYFUz22nd2oiFFtXLcXow68qXXT8LWWPXL1jR2EfiUL2YVBx4U69ac7hcKzM6z1PTQFzi3E",
  "key13": "4d46Fot16ymQPCvDbzkeGyQBNPCrJtDgiQX4W7JetcGbvmU4GKgZXeYY8Sxrx7uGNcLc9eoXVaTTcYMduiarE5j5",
  "key14": "2keYuYcH7GugA1LnVQN1Y6F37F8gEovhhRLvquJXLSTJzNTp1u984neRRSCxHbX7T8HH6gfF96tye3Hak1ay4R4e",
  "key15": "4ejphKg7i9t3mFxuREHfetjaiJXyZnhvkpefBJRV73tR8ymGWei4XYi68oXFpAtwTNiDTkgVmyXY5MGRTM4q4GYb",
  "key16": "U1mBHdr4VRxMaxaSbsGgTNHA3giDpQypakgbxAHbB1y5fWjqZQXVS2TEKrX8NzqsoNX5EdjysodcckLkws6cmRP",
  "key17": "UyBNA8uQ86wo2nyNBF9zkR1V4RcD62evqgoCKVbG3pycBDefDuA6no8nGaQRATtZhSBoGYKoL1Pk2TLNRNUDDR1",
  "key18": "2CmvwpxPtRnFzsQjS8Ceo6D5S48Lsirt78knQyaTZLHJGsGLQoMyzijAaG1pKaJ7QBqLcouhp6NiAXNvr4eEpzzU",
  "key19": "3yTWcJ38xXqMeSXtB5rdSCLVEDCgeddeEV7anEpRqK5SGQCZ9NnSENHLrEaYfB5yCvA3twL9RJX6LCt7aChA8nWJ",
  "key20": "43Rgf225uDHaKpFAr2BsyX4DWkZLn2pzDQh11F7YKr9CNhkwZ1Nj11ZkLwSPTKgXuyzzq2mBCAC95eNfPfP6f7jv",
  "key21": "3Z9s39EQazcBjTjfknoWCPCS6exsp55miSKjXqpGMCwWesdKx9Sx5Fi7eVySeuvtx2kpYbkcdwVMxrw3qkCb224w",
  "key22": "3mZEkm6uk9Jnv19M1foaZFtP5FiKRnhBKGvKC6kcpd1pPqBpZWFwzSi9pWuVR3YsH6G1yotS4ggVUWBfyrKDrNXH",
  "key23": "2dPMeu2SssaUL5eqRKh5vcSYL6WyY55LvmPT8saxuXQA7Dd9bSYZjmRz8eBvcL5jmFydiBSFmEnhV6uTGNuvrFTq",
  "key24": "5zakiP96hzfQLDGhupGKto5uCXF8myVqKF2qe5rUzgQBH1P2AMafh33hZe5fkpBT8t4NFez86QxMiKn83YrwW6rd",
  "key25": "57U2LKUeMP7bzgz2C6UmnjBsyR1THVF5ZtF5V2rYcPjzE8H6Ut2hj3eg5zdhdAmMFhkLWndqgzMYyDX4BoutnnRj",
  "key26": "4xXH4g9DqrpnhP38BBzB8Nws3ixv2HnBoWEL7GNjnXbf6qmWx3Jp1ZwMNQHkSEqUDT8xsT6stVrZmKz66amPWJJd",
  "key27": "5v4uJXnEU2e4rWXRUFXg5NpnxdbdmJBZ54uYP711yHJtzWp1v4mofZY4drVjVMEH2kcTpysX4A9rt3XabpxyS9m1",
  "key28": "5gWRuW5EBPBkxgXhAvG37AFekwLxJS43ZfKM1ihghuQcuxwdT5BEvM9EQpQNU5aF6GEYSzsrQq2iaD4DszLZgvMT",
  "key29": "4MHwEg3Sgs2bgSdNWFXaitYurf9e2AEJPCYFpAsPPRs6jr33Gc154CMiXPhWJD7Y1oS45Z7ZQN3Ps2AudWZ6B5Gx"
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
