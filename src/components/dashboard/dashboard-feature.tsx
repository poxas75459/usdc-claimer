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
    "61PfKJdFvxytQ5rB9H4sQ6UuwczzN7KAxTa8LjKLwujnYsyFRXmEwA1gs2j7GCA89XoJZThbPDL7xUNoDBrSzRiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnvTEZk63Nr56kxnQxnbcg5X2xCuQFjxajumZsYAKG8ezdesVKiZRJCAJPHck9mnUEZSrHo8VhA2xH8GSiWWsb5",
  "key1": "2GkxGfSp5oZJbdagDi8qu75nVJcYL7bWkUCBB7w1y9jtyvkeYQUeFWtrfk9Qh6Kxf14bNCXZyLM32bZmHSDXYdyX",
  "key2": "2ftECp6zS7z69AfhdFTLBQpG3xXPHHLUKKi1jRiSHuZ5xNTMgyruD3xRkU7QpoyAGfoezmBrRai8kvPCxoELWL8Y",
  "key3": "5NXf9bC5kmCze9DXRUi9N3JAZ8wf288mn2Nn5WS2gpKUxz43oxM3VinH6Z5eM7LjaacH8AtLor1ifteYQfag1S8F",
  "key4": "4NDuvndyg6FEfUUR8v58p2UMNnEXUQshsL9XWKkPTWXVjt4KYtZEPvSuc91SEWrBnYp7wuSCChTBXSe7ZqkmqYW8",
  "key5": "4WbZUWhEZ5XQFyHp2X86Wa7a2iNSzETmppVMN9JABBgdbrYZy1MhckcwxHWuAEkGSCgvZ1PYcjMtzWp897raevx5",
  "key6": "5gPzyKGJLDP4dyZsQ8UG8pysCHoiLiygoTMiZ2ktqrzx6bMbwujG9j1mGKSFT2mP59K9pNxXmEyCC89ZeTfr2yRi",
  "key7": "2bm4BJCTyKCgV7Kxz2kCF6eJG52SsWUfznb1d5Yh9NobutsErSo7FEYK1QUNFSXNZg2AvdDiFWgwiJh7AnSYXCYC",
  "key8": "24ngqkVtgEkQntAhRremYF8xxzoV6ZZ81udRw92UwwKS3pjPzm9e2vLVb2nzikJNTR37v7MYBpVmsTqpnHAZ2YKB",
  "key9": "2bjrpuYX7U9bzfMn7pjETtX6pofRvvwVKkevgA85UGgd78EJrLUZgUc1SqUKfbQBa8vH4NX9K5KmcvKmTPsEVcaJ",
  "key10": "2SHJ3ArT3HQvQzGQNm88BVFqhHzr1j76xRvsNrq1xZ2Ruk16NDvPjsKFzW3Kve1U4XudNuXR9YVipTCZauBmJtsK",
  "key11": "4ysK4mPDyCf7xrFG3Fdi1DYXtbWEwr3pjdgoj6VYw9wGRrLwk5Nmu9zBTaqos42TrHXbd3AkpdLq75Q3kdhriy3E",
  "key12": "t6LHyoBjqTrJczcVmGANPrZPJrEkStSUrbf2uFo8hY5ZshRNc4euBEaAg994fufgdfndjkKnHXESyHQZS81w5uj",
  "key13": "RAxEWVhVpW6rvKLVdm8kxvbLnTaTcodFed4UDGQU2KXV7Ydfiybn3yTkj193EwXoA7xgVxzjAFWonARKY8P9BV5",
  "key14": "MFFjaVSQK8PAdvDJqYmAj7tGQRnoFC5Xs5nYoXcqJVEDV2cjd5oBjBYD4evqya1TRetqhezBfuGJnDQGvXyzFm1",
  "key15": "4tcy9vHm998KDxS5KYtLyPUpt7tb1krp6hBzbd77e6ZcSg9HSw2ZxYDHhKKz5fsnq8T793zn6XzfCv94ipJdfRu5",
  "key16": "tWxznjLWzu1h6U9GjQXmj1xYUweyw2RnS6jH9JqJMHm32Hsw4KAvmS1fqGq4vEP7kZvtoHVmoi9wjgrNMdBSh9h",
  "key17": "2VNLyveJE1TvkPLsSPh2bf8voBww4wC5iPyw1dWN5iWjRGoM5tTMWuTmo3P6ZsrRQSDgNbGjYxwVioSBGjXqkbz8",
  "key18": "2NP2Yk6Pf6n4QW8ANvJBf3xFygDVKpGWko7QeyUWCnKS18zbmnH7ysubfjaKc6YMiMzNkdkG8ZdhRKF5okjUb9Mc",
  "key19": "3oHwY479oKgPkFn9hRDaWcSgPXJZHDgqVaSj2d7Z4R1nHQsGKfB2EpDQmGDi9pRJCpn5fzBWcorjs2sP9WgjXBXF",
  "key20": "61hKH9me5QtQwKhu6tkNakVXiA8r4rhu9i2u8FmueCt36Dw2cv6sCGeJhb7JDBkYqXcsLipmjKLG7nYbR8XgyBu6",
  "key21": "3i39dNeq9WwtWyfm5kek3EscZMbvZvQD9oc8Gc6ZkuHnXwnN528stivopytoZkFMm5JmVuTVQTifJnMNNYAzgSKE",
  "key22": "6hq5HJiZqNY61TZm9SPss6mhEN1FRWgiieeFMCcBUhtJfLz78AXEPkQ5EsQqtP3b1qUP54pMxo3aZ6Q858zp5nr",
  "key23": "3v9eqjMT8KNFyksQG51UuTVvEgjZSExHxGqKaCQZHGDqrFtUwV5tBkHRmgyt4xpGa8jb2RaSYeLUHVE2vFir4D2d",
  "key24": "2JG28AsVttAf7HsZhx24v7m8e7TiUi5rZ2JCHLHvmBDxKgtiiAFLgyXKwZeA9APFDkAm3g9hZXD9EdGKtCYioeFx",
  "key25": "3R8yJzYkFeBu88vuWN1kXP2QJWrEjHr28CDsSNqgNmFoQXRMzFxr5bPMokBqUE92Jxt3bae8Cgb5pFmv1dFAkYo6",
  "key26": "5WSy317pwqf6mXNRPqWL3WwBz4UEzYLys1ereb8JVJ1AFvCdmPizsnpynQU2wFQNPQU9Dg1N43P55vFHF2k9jRSf",
  "key27": "5uZknhWCstMSmdbE4pcWAq2RSuykA7wbSSdQ6BKS2ZxDxLHpBUmKQE9QYxBpJ9pnVLSRzUcAyEbQjb4fkNskLrpq",
  "key28": "D2VShDQYaAgDUhEr7q6BeB6NSs4kkwCZfKMDi8egE3pnYYuQcRgMHoq3phEbMC74vTpzFDrv4sG6ZwgvPBMTysC",
  "key29": "251rUPo2xFtp2HxTcoHcSdshj6YMX9YBCQvaJ21etoD5Lup5hyfhVNEGCWv52myjNcGxo5HaYLivfCGv8itEGC3E",
  "key30": "3UrNxTjhnAbrNegEPn5ShJsfLErCDs8fhwUeAxQXYopabTDkTkyBSDpzuG1jATqYhyWRXX9tDsiuYojNxaAT73qV",
  "key31": "3RvpNfvWEg7efacAfYzFSeF9e2MkmFM1jZZarXcDZ3iyv3hMMCPoDDzXPEk51qcqcYqDxD7BRr3rYHL4herA4yFL",
  "key32": "5u2J1v6ACaPfBmNFHtvaMybg1ZEjDXBwURNoXMrL1qkwvZqJLgPbq1TvmiyrTfsoKV4wXJ2XNKkVVZeAnxp7g5oa",
  "key33": "2mdtxCAWgdDNy6uzj1v54p25praMAH8n4GEsciHmfFjWLbSpjGsSfPPZA5JjSFDyC7AUEsnBnb33TN97ifQusB81"
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
