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
    "57or4df6PzEqVRtMAxQjxSeo5qwppmeLqKCxkYHx3KSxtp8t5mzW4py56vXB6MPJgXM1i6hbQqhhTWba2duAzZvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYgCVHek4muGySd7KP1TeBfSz2zMA5foHBbfkmXUuFxAvn8cbMjR627qpKkxJ59iy8zb9TTHmhhnjA14ADvoibZ",
  "key1": "5c7h6kCZYRafMpqckF6Z9gcMztD2LNdjyGp8jwvTvJtQCsYuFnSUmrsSwWMY6A4DZkZS3zK66xd6krRQLapaRvdJ",
  "key2": "3qbeZeFYMi4SAakJEfHbf9XRDWVfJ9dixcshZhoFf6rq57VZPqb1BNRGz1K3SwC3xXjU96YWsWihG9yraSJ36C7z",
  "key3": "2sAn7ip8kj63svHf5MmTt9boVogyDXdNzyNLLKQYoJrtFzdaqPbEaHysPh5LFu5yq8RRaE2PuhL9SCpKAqW6xCeM",
  "key4": "zdwNN3Np5qnKB3WmGKkyDg2kwQeKChKJgUnh92irEsTtPcEKsf1ZAvLmEh4F9YM4APHXttQNw34RmY9zwUcbt2n",
  "key5": "5eJUmJfpHuiFvThaL8KTBv5jhrAZrHVkDWKGkwjNRUJ3W4vcHaxNEJaeuD1mqDqG19hj87vGoHpBULsjPSy29hMA",
  "key6": "5dFtDN8QvmdUapzDkBw9r1ahhwV2Yj9o1aMAMffEf2JgDtNWQFXXqk9zkg4ARX32yx5MmgnrBEyi8L1fuQvviZk8",
  "key7": "27A7v4i862mSm4NBaJBNF51TZufxCE3h9CQXitCodfq1bSeSsXUNGRQMCQHDJrKxphVvK5Vec7hUjZnccm7wTBW5",
  "key8": "367SjZs7j3tndFZcGjGdesyvP8gEquiqKGbtwxVd9DPWyxrK5iwsnbdGoXHCdG8zJD6DNSKzw8tjXZEMUDom2f9F",
  "key9": "4ZZgYGovqQFkc3KxKYArEmixYMjY8NQC1WHTwVTFe16kbqnCjoubsQrHDXi42oto4gzLroL14GP3SmbohxdHfGKm",
  "key10": "33Enk8hzfpA9tJmdQiryjdvfzZYkjNR98WRknB6VVB4y8oZpKAmorszDJNU4BKpCPWvL7dWX4WGzSmgsCKQ5jVz",
  "key11": "3QFHd2aZt9nw1UUvb9tahXdfRtQXFKvYTNaMNr5fHoCv3p7HkWviKny73krkHFYHHbmc1CXZGkS91q1ZWmJupMwM",
  "key12": "jfo4UnDpTQZu1y2Pv6i7Tiab2jefFer9ckUSxwGofa5wg11BnCtKy8dNKrhuif9gB3VERWVRCeCfyVLGUBMdrm7",
  "key13": "3UpxyXHJYErN8uCLFXQ3VUW7YcY7GCDXp1QGQJzZNc5YMHZmCdbwurWsuTJJeeiNBGFPipDxprUY4vaHK2EzMWda",
  "key14": "243dzvyJoaXD16XftVQLwA9zr68KQMB3fnnjmHQbkLPEcpwyHnLNgjEfaL4KJj7zms6G3bUmGou3B7ez6aBVUn2T",
  "key15": "3ZzswBRXsquo4z2efoYHT7iQd38kFgJ3rhQGZFzH2gHi3FaQManjFqpfthCEcRZNmHxE3NMSFJnFEDqHY33Vsap7",
  "key16": "226orkg1WqiZfy3gmkYa8x3fU8MVZuRakgB5XNmA5qnbSVCkC1pxeQqGUc14u9e5ye3MAFFWBzCY3TSFQAHYxfET",
  "key17": "62dTDS4QsQwJ1gFCvdi37SRua3umSq3mhcrEUFcsqZfWXw1oukNQXmGYEJUCtsp5QvfKktTun93azx9HRxXB3rWk",
  "key18": "3asFetbHgzFVG9EnJoRfdXCTDgvK4drqVRQJZqrqkarGQYowZBCy5tfwET2Um1omVz2ziQvukpqYdzMLzBxGMvbL",
  "key19": "4ANGHDKZyWLzea1fN9Y8UBsjBgU1JXodqyA2JkbVYpTTztygt9YA4wXCapEix9Pq73Ur9LGLpCTb923iygpLmBCS",
  "key20": "YGWquDcrXyGsoSvp1bfDPntSPyeEzogiGJJuwCK2Fy1XMNuPvWe5JtSC5sx9hze1gEvfBsoG2sdKU6PT7er6YbH",
  "key21": "44Qcan3hU4V5GZzaDr3NJud2MChxdMq2uqVat4yM36Jg9BeUvHNSigfgKwYgxZ7FstobATF9Ed546W1jh7xbUQjn",
  "key22": "LTT3tLtL8GFh9KVqd62mBj4cHXDsGq9TpHD6HiZBdYb6k4P29UheBaK87knrdzZXeYahdj2PXTtM1A6j2SYZGaZ",
  "key23": "bvgth6sD9TNW4BPtphfzZBuxNytLk5UyfhgcJ8upvpVp2hSURDcEZgP351AYXMa4TpdvGcuvA41W25e8tzjLwGi",
  "key24": "4KxRrac7UEtF7oV6wwYVPPGYryQd2pHH8PcNa1rm1e9y1eYGLZWcyaneq7cPads64NgVadNucERcTTiJM6iszSH5",
  "key25": "UL9XTUYvv8qzWtN3p5yn7QBJ5s8oWsDnX3kzBXES7KTKakQV722WAMzPX3NsPseFCYfN4HuW8JNGCpMqjzWBc1G",
  "key26": "2enm1d9Gc6JCyqRGFR9qvyyANP9oDAzHidebjBfsomGZ6bBvKkCDsvAS1zazEMNm4JQGmw1QB7ncquEoyV8qMaqd",
  "key27": "4NrKThksRFvQM3bqUahT6chKqC2cMKfRJnX2gwbFbKBhx1dPAYUVPTSwPbXKRaKUuEgnBM7bzzLsZZRmmwMnxKk1",
  "key28": "667TmdyosRo9NpCJEeu6G9Xrvkb4vR68isJbQvQnsEVE6apNHLvmN7ikAV2FChWWQcKcGvPxsRNwJQTHmMKye8dn",
  "key29": "4qG1CuNaEAeVWkCmDcGj9GvRJxkqph3X1aasc7oCUmYzJRRnRaK4CNW3QU5hzLWDJ1CmxUh4gyGbGSYFrijHP4qi",
  "key30": "5DnCa1Kdo3BJJYHES3SR6xK6LEPZyC4BToFNhQnY5Qn9hM9PKQ5WT5Th1MbqxS4QGnmShuDxVUWgFdMieVr7VDyT",
  "key31": "3q5d3SWNvWzoEYqrYwJiVqmRyNGt4V1LigEb8amuNBu7AkY8wfac5HeKrxvLDL2koDzFv8bTANikHzp67pSwkVqN",
  "key32": "57qubckp2yknnVnpQnu5m1dxdKFm2U4RHK8uEQpx4JNKpFumpNFQoCE6mcXmymST5PRiBeLs9EN98jBt3PvMu2SW",
  "key33": "5PJSXx6FFDW8y4Jx14jgmskrqZ71Su8rndx3WrWz6E97zEQucQWJ7JDE54x6W8dyhG7GphHjmEMv8JMu4S1ss2aT",
  "key34": "va4mCCnB1BoaE51gxYuzNGj78coivwEU65GomUXznXodTcV2cCsEfKG1n57aN7qaLPAwzexLRDH1Eemqs8e43FL",
  "key35": "5etYxzekJ2FecJcYtoUxhLvWVTf8nmKEKTwiW3wE44TPHTXYPdbcUQXKLQqynyXmCEXHx8Sjt7vGneopsxg6vfoB",
  "key36": "HgWr7LQS2qvQGCgnDhsFhpDV1iYB49eAmwQxD9ii5yXrbxdCxoRa4BmBYCff4qztYaiawFaV6H3HCefgdkSV8Pe",
  "key37": "2hwrGZCuM3TyBZWdtmKaEpTxmm1EqvyxPDrMnq4GzxzAfWwagVPu78fPdMwjQ8yUGG6QFKhWB1WgGkaFprgDAVDM",
  "key38": "4XZMA3ciVkQemc36qby2pg2teqAmezHqf1q7mgkpATwNm1ASBxSQAAsXXtPjjxRiygeniWATkPn68wpQy4t8BUDK",
  "key39": "2xEbtubpNT2kKfvcsZcY4QM89aEqjUCxx5sfbG1qu6xg3JNtk346Yqv8KDu8oMXcu9BkoipKGCbQgBFA8XX5RSun",
  "key40": "2SBnzHNB7PyMWXJau2TEk9fQMeuczqdVuZkCHpCaRS7SmwV3HxMFWscG84nxMWJ4QdxXCSobC3h16taNs4VfYtwx"
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
