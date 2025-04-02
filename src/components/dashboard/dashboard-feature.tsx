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
    "5uzbzrATMVgQQkpRuGXjbJPwRYiUXjEzfVz9UpWkZbgg9JcRZt4RHhqvdxzMz4B9A2SzJMiW5NByCbsFu93qQ83n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asE2tDfiBnEn5w9hfcUAUtRnnke2hbaaxLE5owcQt8UzJ2KGEMpRiCTh68Nmnfou5arXDLPe1HWfKaAv8VeyfhP",
  "key1": "63vgDVAhk3LodwEQJmHbUWEtM8JNsJw5moKUv5mtgCQRySfRstMLxxnoaXrh2W2HSiS5WmajcreRYAJUCggRhxWK",
  "key2": "4ctKFuH1BkVrGQQVFTrV3HdTcyCfCe7Y9ikhfwi6oZrF8XVuY8EJU1vPFJTdTbW2sshb6gcKVYpQy5sWXezcbQ5t",
  "key3": "63UrvPMnhRsDRQf6yDqGdLo8U72GbaV1Rm8cwzFNjc1mg77FB6QGiAWeSXR1ARZSyMM2p9Kmh5Uok14EdUy9K8Kx",
  "key4": "aJ2iooS17vSkCmZtWWPhvNFR2QcU91uxAmujVeih7LVnQrAY2cv41AVfk9FRUfY27jfhjUfH3Gf6W6irpZvpZ47",
  "key5": "49pC3nhq9RuP3DeokMr7gQKsboSEaLXuyCFphJ6X8MnX9FuMBXuN7VuFtiDzv38NU2yger8uuiEHAkxaLYgRxXRg",
  "key6": "5oQsyDY7afzbBHVBcMNntmwCimoPkYkFiWm4qovs34FWqcDW12cRq8q23TdQPfcAgDmcYd4Ef8uTFiNzK11BVZjD",
  "key7": "5EhirPUFw2UwSNfuwZv5oP3XsVPaoWZu7U9sgaxPMy6myUVtqHcHSinzxG7BiVeaBuqNxafYE1Yhw9sZrj8GSiSP",
  "key8": "32za2g7GLxiEukwm4JXWTM7pUDJTnKzJxypzssZSJAcZvb4KLLm7e74HcfPDh8vqGVodzRpe8FiXqc7u64JWVrsN",
  "key9": "4mDNxiGLmBgFgtMWw5L9TnEzatkGA22akX31zsrBqjveUXBrJrbrvnwC96VxSgupLYWq5oP9XjMMXXeVNuhSixgQ",
  "key10": "aRrmzgjoULhaGyoj6KpgP2bZLokhPyhihvXyVuZpLd46hB1auazfFnKQCTQ2sMmkHzxC4WgN46AfHazBTjGbg71",
  "key11": "2Zv3BCKPcYbW7NyPYy7mj6u3i5FccHNmeDRGnvfpsGssReAADGypUihh7x4eb1iKiggqSi4kNxd27mQ75BrGVX8c",
  "key12": "3sbEaNGdUj5CThLrsujTVweGf5HP8no5N3b6h8Z3oXMjXfUChtDW4q6DXg8ch9P9shtj5ZyGJoTLnfeAZzQVja5N",
  "key13": "2TuRCJwwwfYVCvFGfpoV4zhxvDapGgrA8rENnnMXz1d1ejKAYQD51QjVvMLLEQCxp9Gyqz8eDu1RoB447ZSrFSJL",
  "key14": "43wAaBRXGKCNsYEhaPUJimzWsXS6UZPNz749Qee8y68rsWfLDDXjqK5qVgRsQFvKUibdPTatoucmYH73y4s6SdeP",
  "key15": "5gGMgxsmhKgVXp3XsE35h2Q7G2xq8wHPXR5jP4xQppB6SyRcYeh2yhP24ZBzhyRmbiaehf72fdKEtbhMJfm2uNKp",
  "key16": "5MzgQB1RvRtqj6L4w2931xRofmYKW9G6h3K9mBQ24dfvgfhT6UTjgDDY26xS7xTj93YuFusNbr3Skde2JBbbBCVa",
  "key17": "4Y5AUz1uTMqbSjr1YLDt1NAnXNHJh5xFPwFAU2zMbNALPUTa3miJm8KbpJBDJzHKeb7KQfAVjaeqH5RANhv7GWEo",
  "key18": "5sGhnU7HRQ8dogpBHsnkFs9n4LRzUgApkXiXM4wGpFKtm2qGXd9HJyaL6AWPAhdf3dEVPKMd5uM6D19TUY7rHfSY",
  "key19": "5NKEDMep3bLiTiPnmKr26np5MQSsARKENaNuMEXNeKauAxYQou5jstZeLRWhrKoJF8V9cbXr3xU46QG9gvCX7rjk",
  "key20": "2ZLQZSe2BRqgVU7xXNGwgrivErmJY8mhgVtbeAUSzW4bxj9qnMJ3diiWtxTPq9rfnekK2pJjRr14GSB5JkmhiEMe",
  "key21": "33wzmKvRNHyg4Y2gnG7q1UzZYAugyMZstk7EZXJ6rrqoXuc5RgHFukG5kykyDeMAbKPNmNRHiCk4XT8SYL6AVeBX",
  "key22": "4yjLTXTUkLB5SeYyGXEcWPQrvNuaYmPPX92mi8RD5Yuji5HZWEfcjGgWfKNa93psaHp4Atx3vYq4DLjavVBfGUxq",
  "key23": "23HV9fUymYU3dDZ9dnjiy79cjzgSETc4eyQ2QqbzziyPqUpgGqUhQVG5YyveDUj3hTSpBwdepYVdr6ws4WC8E6qy",
  "key24": "5nVA9wbD7gBBGeh7VQh3yhZ2ynHod3URrgRvj1qb5bSLCiaesXkL3HRCFqMQv2oG31V6mJQgbyyEYqY4kGEa3E26",
  "key25": "5V8HPCkJdg8NGcwDYnysSi2UqZ6UC6mFbD2MkKBTLdMfsrFywAgJxHLoPgGnbawzuTbWBADwvMvhrxpKmWbcQnkT",
  "key26": "4VXp1JXzrPA8m3hosrRjeLwX1wBSMi5iENQnC594g6m6TCLo1xAHRaW1CR2UuYxWYqymHCVrjmZHs6xrXi1QEDVg",
  "key27": "5U8isTrzcxsYfVEaijKUsCKbvLhgaoYxi1EBvg8Gi6gNdrjg19Vgcd66U9b4AEe3tmAsTxjj953SZBymbg4A2JwB",
  "key28": "2uoTS3znjY1fQkCrnFmQWChimyf3cX6XKCXrFnvcCnKFm2wQhTKvRM4zDvUGcDsXUxkx4EgWz93ms94wokbJaw7B",
  "key29": "iLNNF7oBwxbmRHqJBz5aSFMLektUFZhF8TpqvbC9hz448M6gUjpq6RNKUGYm7RFi8d6o5Wppr9vYngqC4hZWZXe",
  "key30": "322B852CQpnnX6LbPGBF36pxtUfPY9qWNgPZWe4xz5Ni5ysPDszRxZAcdDpHQhrMf9MnRMLbRCkrX58KM2ZfAPJx",
  "key31": "kzzd63Eq2TdxPHoJS6EACJwghoLtV8bDEted4EyNmt2LzSXL1AF9A4H4VrHJsKCTog8XVgZYjpbF5auuiX9p2Gr",
  "key32": "4ciPASz66uvrT9ySweMxLFP6ktfWMeahaS4p2xLRdLBYLSPshAtYqdiU7N9gK3g1KSiEfj9t7Amjpya1YBcsHbmc",
  "key33": "4ko2gkpNKtZUHWs89J8BsETVfGaUk2VFzeZmNhYoZUjsDuvvAhfhQChXW8danxX2zBYtGmwWbyL1EWaeeFLSgwMe",
  "key34": "51NJPp2joHKa1o26z6uwUa6gotpRhrtNdGv514pXsudvfaDgWgzRmiifyCM88rJYisfjyRnPWJkePbzx2FnNiJkD"
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
