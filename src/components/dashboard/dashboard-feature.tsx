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
    "3QBCsphjV6ViDHQyjTfiPtgDo4qJbZawSAp11MDW7r8mpaq4RC6DkAeTjfB6V1FQn4sBVaihJLXk3GvAYbs4jrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R6TpQUn4xwF4DNh2KF1Bt5ccXjfY3ZWxDH3jzcELzcXZZqW7b9CmKQD52CdsKHMtLUXBvMYcCdrULrt8uBFHGew",
  "key1": "59HD7c44ZX3SHT1BJLZVfawNFEEvWHeV2P1Jp2SfwgCvhzPjYTDR8WufRbTLnFmAyCXWt44RVazGVEjfXzVwCrw9",
  "key2": "2r9a7FQLsmAXRDRhkBx2mdFqujDqGh3jeiqvupotsKv2f9AHt8Mf4G4gjpj68BsTbsd4qeYUAnenRji6ThhbjrgC",
  "key3": "4QDPDZNqbuHm23PKT3WS78Nw1v1cwayuXDhszQRhf2Sjgp1nxr2uhR9S8W8mnKmgGBTrJZva6QeywUhaMYp3qT3g",
  "key4": "2LFJTi1JdABbxaqGtDy2xqSxgAdvFk5rtXuCCJcJUtV7uk9ecsEomkvMBsAWkWfHZHrx9vntkfJzgX5CvQpVxexA",
  "key5": "2tymzpCpDc6Dcgsm4avYU9WAHrCkPmKygYk5tKP8dc6YjZ6QgWcAGx8xrZfEHk7kw7PUgFkSQsG3h9bvG5mKpaQD",
  "key6": "5JKPHM1YyebAZPZLR3EirxNNk8staSCSeRz8x1VJxG1iHXQszm2yh6LwMvaj7az73YmKfzKdMqQYRJDUZ1UkEmig",
  "key7": "46iLcheq4LzsZ4pkqboJarkTtDZwNRvPCyUMRAimTCqZ2JraeXviawNPTxbJbmWzpPNKV94EKc3WdDiEVFPxWr7M",
  "key8": "b7qVFefGDFYzU25ZUA4EfnPFJdrPEGdbs4ztF6bgVvet9dEjZmLawuFuamsSaP2K39woSBuLV3NCDTNUZ1YsFLs",
  "key9": "5yg5wnioE2BttuT5QS6YEAKt4xtP45hY8BL1xHM5EGHW65hxQGe3M7opYuVUT5oE28WFiHKXBTUBennKfSTrKcKn",
  "key10": "4YTwBHEWVJCPW5syhscGc1gUN1CMqiiXp3AmNpNyFKfLFNqHFSgB5k6AqtPS3abrqpuismijB5awjTr5BrQXYCnz",
  "key11": "37GJQC51C3YoWqyTnfDU5crZE5NPVhJGoNJcepve8ssczhMECJ1WoHfttk8UNmgTbYFq19LHCbPeazr95tojYxWa",
  "key12": "4WjVjhoSuhAfyWF89CEnZqQzZaKdngNNdWb1GRpbcibJibtDNMwGLc8RAWFNhgxg5WkaUnjau9mnHz41yfxRWKdo",
  "key13": "4wS8o5hDqk8crpTQjECPK6UxHpFFdJmt13nFfydjHaJnW1YuqKfxGruAMSoAiZLuM1txwGygPdqdvgZ1pzEZxTiy",
  "key14": "sV9yV8YC7XBfsJMQGnmcbj1KSay64xuUuLgrzhsNTYJorsoW5R6ET971ypnGASxzzWW8D7fGrtkkJphX9kh1qTG",
  "key15": "2CuEaky5o3sQWcM17yfgLbW3MEpniRJnQyvo1nX4qvhH6N8QafvnmpcjiqBi5GU8cA2V9L7HDtb6eYyjAAxU3oKy",
  "key16": "3vMoWBUGiBnEdjWR7hhzgNjLYjcUQcerqR3XUH88Qii8p4ru9N5skPZxWWCYrEan2hg7LT8pbCLSJPwNAkWMVVfX",
  "key17": "3LGVgTJBJyss49bgG4Rxw3FJnQskoZXRATv3mfXW6ZCJXXHztswRkujmW9wefA8NjvJ6Mi1N86MucAA7UVjGHu7w",
  "key18": "3e2gDhMM1HnesUP7UjZB27TYtTMzP2sDuFnehn3dxsQMk7t3pEx57FQZd1WuXX719vtNXAPQfHPV16FQdYuvMYmd",
  "key19": "g8cc97K3MXHv6qohV3XcVgQfcocyzp8S5b8KjEb1KwW2TUzFEWmGv3tnnnrgRy1ihQALiKbfu5aJ7s5Tk4xtotG",
  "key20": "2Mg98tVwAHkBHGiboAFLoGFbsvFDvhkz88HTRqm1VFtuRCYstT7r9iCw1NG1U9ZthAoXRV9fCexmv1W5mcnnWn37",
  "key21": "5DKMyjutoxbWLxugNB1VT6V3hq9acXhkeNfirPUPU3utDi7BngjSnvmiWjp8YSL5aWMyrf7wy5rWrwDbQb8hhXbn",
  "key22": "SY25fGxKnNgnJFYqPUJcmKQWfU2kxFGp3W4bVVuzpKYKMnQWduWSp3B5XysTQQSNWp5MmbzFwUedabC5uRc5d2R",
  "key23": "rP2gN7ENGgVPxpfwtDSSAWpZ67HnFbv29Pa673kN6XRfFj9Tj8XzUg9XPzVNNQt9tcSBgboyQ5XopfGgiwEH4iy",
  "key24": "5ybGctL2Li39GG1DUFSZmA41HPG7iLmj6cfRjtXHe7ApTEodejgVmefZ2N25dFtbMkj4KYuEG5YcsgbpzK2mv1tj",
  "key25": "5UMnw6zdWWdKFDJMaw14DAcE1WpfvnVDToQiQiKUKdc5JBDjYHqi21bRHpo2VXcfL97i8Wgiuvs3XM2wBopabUnE",
  "key26": "2QZadxva4wpLxmHoZsNqAV9HPNSCKBs6nckP3yXmc3Lb3sL3qMyevVBzk7Q4iCenXZsVfzj2FMy2oSaFRxV894qh",
  "key27": "5nednJ2ZGqzodhCwTAQuYmFdF6ZwZWKgoKWtEUSJh6dpSrDv3kVjzoGmviLKUbwTzyCAdu8Mfhx5VC16RDT999Bp",
  "key28": "5VibcfZttwqiRbvDhw2BrpJZeC8GTzf47CT9PxU5dffMjwtdCQrUmQRMCUeqy6n86GLWHi34Mc4XZF995RUugCxb",
  "key29": "2MMrBHZnESjbVrBar58pkGuQDKBPUp4mDt9a8pARze3uXjHobCMnZgntN4fZjkR6xbH4KR1XhLGzQk7DkzDeCnt5",
  "key30": "AtSpVxCQ3P8cDazenK87oYh6poQ9MysJTaG1g6eAVFmi5beY9Uk5pwa9uXBoAVhMGBKcCSCuecaMpQ2EgGWAPJV",
  "key31": "2H6rstsQh4kUwAnSSkHiMEbZSKgzuYcNQgv1K799iCnDkh2VFnCqUTxkK4qzktNDeRmyiDJ6MXTJ4rEVF3TB1S9X",
  "key32": "2Cvqjx3wdWciGrmkjagax1cGjSMdYgPs4URMi2NW8GaPL4CtAkdvy27FLyp6DaPzJS8AJvSF2FKpAFvdaPSdUPZ5",
  "key33": "3UmsvoWHJv5BJ877gqY87FxVHrH6sYYZQHr3GwKQqT9kQ7qSsUwoFVNTPxceaoj7vYftom8YDEHDWTvCjzXprnXb",
  "key34": "3oJZXpJNemFbS7X9WCVXsuhjjGui4XP4A7oV4SwxrfqzsGnzb1qvEZniZwNsvf1GCQBkdaMDS7nbFvXjU4EdXeHm",
  "key35": "2uY6PGvvh8HqXh5viARdJPa3gtCkbP2t1Rvf6QWgJeNmGgkf15eqZG3LCF4ZZBmwNVxEM41RV9WBzgfbb3YJzcSc",
  "key36": "3rC36bW8T7c2odJsmupMYnaTNKMHkzTi2rHZ1A55Zd4dg5UCmGAQnAhKa9pqGNqa9m5TCEbefkiwRr4KxyHUosL4",
  "key37": "2jyyZcUbJraNNqxBCGsUC9PB2zyefJ8UmjNtyfoqbzGT11aZWvgYFq5Kvb5AeeKqR5GwXdzA5a3VjGP2do8BKUUv"
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
