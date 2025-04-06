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
    "bBEr9hvB7d2WCUVY6Xfi4z951KgKhEaEATiLgyr5BzNNQmoVQiVH1p6EVDcgzuwcNmAF1838sm27LYvLHhDkdRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wJU7tUXyntSpz6r8JETBcctHGiD33UCuMSGfixQJLdWnnCdNSis6qsVJyfCQ6AivGejHLZL5UUSW8R4dDQBicmU",
  "key1": "3XKaRkgRpGpzd9jhdsJb2uibVsGwGiuUrMd8nFKwMu3aWwrswmC7vZyCV7FmvTBwpUd1v54CQeb4od49WhEvcLbX",
  "key2": "mAaLY2LwdxHrYvwt1mYa27wqdxueZLDdfXE2uQMKBAbEy6ioGPYTr89FCn53m2Vw5vyCt2zbHnPZTUBxWeFVyZ7",
  "key3": "3e8pEVE4dTYrF15LeWSCNV7kNxxymWfnY9HPArP1FbC3Js4Y29zJvDe3bQz5TnhdqsdbCKwxYeyyNKQhuSeHNfMS",
  "key4": "63Tx7ZcLkgz8Hr7vgrTD9p3oFZxbEHDgCtcUoMcvAE3u2PruRYLDqaivkMv8sm7tajWciSbYLi4AiN9FhoMATuvt",
  "key5": "4Yi8Heu5PZTd8XH6UC9pTh5feiLWCnM1aPXU4dCSFsi9q7b3SzerA2daXZ7i4XqdapkJQXNAA6fuE6CMHt15rPHb",
  "key6": "4mS4kFV13PFJJjyA7PzX5Gt7poKJB5nzVJnJDsukA5uz6TNCuiFvmPcHDiQaYcCb2LQQMVfU2B7oVVbysJYQFVK",
  "key7": "4jHhuZcUa264t5BTNLc5PowK8BdzDqfWEHSbaCrgQaWEuCcqtb2actzCNCcZn6SrJ9GBrbZPBQXtXqJsYM8Pwiuz",
  "key8": "3NnsfLoqai8dwdN5N274zutkAFn5Z8xrCDAKdk7Gp5wCY1EiQVc9UxifxUfduFbPTBsXTQy63fsMUWwng5uUvqQj",
  "key9": "2HYKBSs4txywVKdQEtUwh2cK8fQUSKapLQ52mfSV4EAFz2LHfV1bzZZwBr1wmDQBaAyY82mznbPeRUPDuyygRQpi",
  "key10": "28oMG7J1d3ugoHBTT7sQtZ3zDNfknesFTMfbJj9TR6yBDgW8mMjGmjMZ5pngW5cnAZujSGqybLBjZob8Z2xmjHjo",
  "key11": "4X5Cw9gDmbV7ZWyjTdtJjfGf9dLCmFQzPnt1Z7RGgceEGZURDm85yACnwX6nupsUWKLtmmAS69GhtUrt5KvXqAfK",
  "key12": "qFfzoRZYtSynQmbvHL5TeC98KgJrWv2Pcs1oVrHbcVZM79ia24SS3Ce1r1QRbJEPgJ6g52Xstkw1KArwu8hiv8v",
  "key13": "5yUkknVKnswFDyDiUhCgXVDBZQUdJpSDo9Zx8dVMbdETw2miYTAuxDCiU4CgAT9LZFjLTuA7tEjVmReiepSvpiCj",
  "key14": "hescxfxSsKayk9zo8f5NLAFhKfmxH5R4mvLJkBgSFC4daC8R9D8JfgagkT3ju84L8Ei7P8a9AsumN4aDrMX4o5W",
  "key15": "4epeVRJugjShake5poTdzUepoxivgYt19cXKWjJp5myN5kXcN5XQGRZG59wLZ1M6ouGsbYC2m5sF1WFoktmGNpRy",
  "key16": "5axvNUSjEpk6FkfjirrnVFQtiYL1vmevAk8eoDVVTdR6R1A3fcJ7W2DcVJsEg4DcWV5ju4SZsUuxLbHmK35vGPsf",
  "key17": "y8ZV67xqJH7adxotkh3FbeBaTzKwFx6EZ9Lp2kYqbo5K8KiVqRu7RiLDHWqCEvzJiFWLuQDtPAApp7HUp5tTekv",
  "key18": "5UpvUnDG9MKsJQh6iwPwY67uAWpKKuVHtSJrkEYPjpgeA96S7TGM2wkf8GgkZfrybTjn3hAdZ2CvhW8hUkS3mzrc",
  "key19": "4y2YRkuf5Hhw7w6oTHUj8UUxHNdibazL1cPJndeBAPPocjPtfwuheTzKDDD8LXfgXa144agbaTcfSxtddFcQeL3T",
  "key20": "3Fq6UrdFbm7khbT6h2PNgNXCnaE7SPxyEJMoqz9975D1LciRZXpRm8HvieYoeiuP47FL6jdfVhWX9SpjHNLELsXD",
  "key21": "X3r3bmGMrbCvG62n3ZvzYTUL5CFFG6J9YGrXktiXdWzjFLnXo4sWw2wnjMFodLHdn1CKHjCGKmWEq1EWMYrvjVY",
  "key22": "2cnMSqVoY6Hz8Ub3EtyV78QaPNh353p1ZByDa8My6FjSMRDbBg7JuNsGkYUrBJUSNyLCfF2s97dVYuh25TKVBXFh",
  "key23": "4eZDc8zxnuYpTPxauuttssQQfwNmBxzbDUbU52tK9nAz6N9WacbkKP5upkv2Hu8JLrq1QBcRm7CEJogHAw96R5zt",
  "key24": "2xwxatcvwdW9G5fG8asTMZWAveFLeeDVfRoQJsBBWSNpyeKbKq5FGiwgt75G9N2L6s9Fq3KcRVu9HFpb5VdkhJck",
  "key25": "2zZE1vFUspJBHSp5GCVovVzhHt1W26VPJodrgjPjqa64qYN2fR8AUpF8QyrFwdChCAGWRXVzuhJA4F56ff5nN6uG",
  "key26": "34D6RC1T1o7jD9ZbkKMUXUAqx7nxr6V3KmebEuGz39wGA1rFxEjNyH4M1js9BLdyRwkPbhocTe79FNuNZRZg4owV",
  "key27": "3ikG1amh7xzKiDyUqFppEAThbUsaZGVtgJcRhe5EBFyfqpeTsQS1v1XT4RCDnxthhJFDSC3HhPxDUEhTzZyZcGFU",
  "key28": "34W8r7MGKo1cbn9GGWifggicaSj6SrXrk1AYd9XpTs1Dwr73tv6Xwb6fd4KjLPpoVKMHWHoQJ7DF9hWdTtqHMajZ",
  "key29": "5r9hnrkH5Uu8A6r7BQdeCn9FQGqVhUSAbzdXhrgubCRcq3jB5reoKhx1D3k5f4iX4SVVf1KW2844Bxn4BpdQws8o",
  "key30": "2rt7jU9iMrysQz1gTYcSwYhwGPiyQWh2LBe3n4c8RX8h2qDPfkuubU9NjCK8v976N2Sooj99KFgH9tKyDZKXcWWq",
  "key31": "4z29odn4AMoR9SHD19nyRT8g8HYdjUcEPdcpy3vyiQpxWwZxNTwWPWPhUCpXEKSBP9ra6qSkiVs3LgCZcZ8W236M",
  "key32": "31hrNdyYNwhcG8uvGbVn3eBFSwxtSMesq5rrKg9SuPPpR3zhtCGqYTRVV6SvpG7G9dLjgjidd4BCbXNyqCakXwMk",
  "key33": "HdkSbr9kNqNmuhjGe4F6SeNNwjSf4RFngf5HUmfu3wEwyrq7ZFkGik9j8zwF4nT9tqSyPWrUVpAX57HNFRLrCrq",
  "key34": "5H7SBPL7yy27UU4n6gK3ET26B6FWV3zuDs4Q31yyiGUm8CC9HXXsmjyhX83gvCy3yiMKzYwkw9ipUMKHbQEPySuE",
  "key35": "3pQgxApgjAfP3VbDTBhp6T4wty6eBLQJ3aG8ZYz6aQVV3sv66KTsDVzAYFnD8ccBKvBjnzK6mrGcpMhuYr1nqsSx",
  "key36": "36H2uQkY9JYNvEeuMVLdnWUTD1jVCXdNhsVwSNpK46yLFcpoLZ3AcLDq5PjjJpDSkUj1NpqVfLxXCtGbx9ekYw1g",
  "key37": "4repqftW5ChMtX3RNXqyy7ehNfNK3yqW8LMFAJBp8FV8jDp8Y1mNSG6AM47iP79iBHphU4gtjg8Nkwmtm18GkWGA",
  "key38": "5VN4ztwFaJTHnz8WN9uuTYyo4kkNgwsUjr4DbwW3a5yRq5NWC76GvpZ9JyACbkgF57hAnuGLZ2Sz5zBKiex5BwG9",
  "key39": "3uw1GgEbJafB41XBDNvdPfdyDzKXTK1nEmi8FFE3vSMCSD23EX2o72fsc9tHaehdnUyPuv9pGRcD8Uvdc8cyEgTV",
  "key40": "54ixB74mfH784jC7nAppLNCs5Lv1hCNparR7g3bwiepGM8sMugUKtp83y4xzEPqsHzwAXeZZDLPEaCX5LajjJKk9",
  "key41": "2EdU9Qoy7MZAmLwaBxNhM9K4rkg66hKMAxAXYVFhB85R2poSsFp1SuMrd1UCaqb2xDSQWhnAUMkNNLbUWeLXhhM7",
  "key42": "2t7TSioim1sYxyhLpQEcQUmf47HcLfAhEZDBJ73RSF46kxETqLQKGWWmrmheQfnFa5HK1u7RzYM7fSCfnfGDYXRu"
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
