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
    "3TR9JJoVmygv1zw7DTMwWgMzxZvukLE1jTpmJ6pa74nnnGexPtKUGpoiWEgUaXpoXSYQr4KYEnc74JV36JFVoNF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzJ8Jg42NdFva4qPyohnrjA6JuiQW12YeLMLRUb5uqPwNBHYbWQSECakm5qBS3W1ndMKuiMM3TE8G37FyGjFWPG",
  "key1": "5pJp1gkS57Fmo2NncnhdfUUWAtyFQioGfPHUTkK187vAy7VvPqWSHDjbx7qXRKsAk2obAqhgF6EWKZCi62JBo7oA",
  "key2": "5sEVJ2tF2KvSt5dP8Adv74ZuJt4uD5YmEfZieobPhohcw3h55R9f6x6Z8aY7NdNVZLrGFqguaNXvrF2AJiLYy476",
  "key3": "2DN4pQSpURZf9cmzR2BZqXnDstUPWR6C7ZNTB3i2Uq5mEou16UYRi5uVWuJ9ybVRBFPx5hTQjxLBqLhun9LXYeGc",
  "key4": "3sia5z1wKaGzpvpV4NxWRQfnCjXVhMJCye8YH1c7qKqcWmRv9GwMtPLoAbv6QZnW8UGZTrQJZZwYJT8peP3cQnoS",
  "key5": "3dMALEsNVm5KLdM45vh6mVJq9sSH9ifyNzbatwSMUXPnJdqGd99MPX4oYsGF6ZA3jiWAj5THENWy369jYmMHLpqb",
  "key6": "2ZZPjtnyCr5n8kvUZQRiBeV8WB9kEB7MqSsoDTANbg12xcKSm7skWETD37gp1o23ws4avffBwJB3ZfkG7DydRAmE",
  "key7": "34pQgUhnjaueQhBFpRCNS2RVWvF1WT8ipYCjSX3dvDRGthPbJ7CYLrvE7uPKjrH47NNG9jHjWgDFRz9vM7WEdFZj",
  "key8": "ND5rheEuEMWjohFZjrhwaXKdtHZWFMGBbH46su4ZPmEpmCaQWCDUmBzF82sXV7vuZLJ7ZeDTV8esua7puoxK98C",
  "key9": "NWc3agTUm352ZR4VrWKXotzvctAUYF583EFajUfGTDqoeN7wDZzEAAhU2nQa63nkoBDTgLfJrnvUi2a8yPdwp21",
  "key10": "37Uz23vZhjyg6tLQSBbydHiukw3ehpcHtEerH3i2ew3QWMf1U7g6DiKtGVhiNLuaMbc4oVznakWiMi2iB7gtJQaH",
  "key11": "GaFpvjL3X1F192gwLTxNMYLAkvRDex8n4YhrGBh6SKq3tsoBVcyczk9EFoTcX6W3v88GGFmohky2mDb3w3hTaQr",
  "key12": "4iGMqVzV1Kd3bGps6cE2JbrXd4WKXpGzrCpCixa5tWe4YxNDHmEtuuPq8BaVUoaNSBhUUgC1vDtSxv3ydUJtkDaF",
  "key13": "2bnGaMhVNMCGFsooakNq4kQddxXgDT4uLpV3kiCD3i3Ph55DP4vk2HtZkxQAHxHyye7qwTisHHEkyam5DLxjuZd9",
  "key14": "3ExGVUtb3TBd1nVXHZnx7RC6NpnaR1aqLy6XpPXX1w4D7XJDXjsEfteKvMoWennixqFdAFgPU931LyEfqJzeoo5s",
  "key15": "3RQqjG7FU4DYLRjyEuLaUTvgfUKhWupY4r9gaC9VNdwecr8FmatW5Cf84DTwBVnauVSc37Fdjr3sEHwvDgx2KCBj",
  "key16": "2PHWJijk8vdiWk5YYWPnqfFCaNLB5kWk1PmTBHEWsbeJBdsMXKRFuks7VDVHhBhYd3nM8k9msB6Gv63MfqdgpK2d",
  "key17": "4fjSGisQ8a4Ps5dowyY5HnRfY5S1tgRZThjAogHtHqzSJz6SGpci9umoRSYsMNGXTUodhPvNAU15FSn5svb3hQof",
  "key18": "4gNewVfzBWh8SCi7gb8ZNa72cmJXb2MWFYL2ALavgHatGXoFr1aFCP2PnfHZPDmNtcS9m3KvacAe2cEYci2qR8US",
  "key19": "kH2cyHwLXRQutTAEgmM9faDYigEETK843UUADJT3ak95Evpxj9V2NHRBmv7AYva6B8DJ8o2D4oEEDpLwUenDQmc",
  "key20": "452kXYKfmahjMX6qqFzZrGDrPcPcUqTJ9DvVB9mCnAR6XbZgRMqssfEN16my66aJA8YQ4wKCXG2zB6jADDomFie",
  "key21": "2gVHEYH3gxqbxXtp79m4URSzgvPaRDWvF5Ji69QEeiUJK7SHKGYqPY1VdDzwmzjxNw6KP6MN2kQPzpJbUNpDuZLW",
  "key22": "22f4RXG1zxbyxD9FujKbhU3ZSAPUwTt7PEBcGpCLGQW4NEjozo37iJy9yCBVkMuMsDPLCXH5BDEHsUsR6DMS2FaV",
  "key23": "4QJhfCfj3G8EhrVxb1gzWEikf9ZY2H6DVyYHCYEYoxtK2oMeCYsG4osu9d9GjJFNMKU7Unnw8afmjiqwtds87T7P",
  "key24": "3rXyzE91cKzSqoyCLJACsxuJq2wgpvsYqt3rZZcmrjShZJ37XuU93oZbdDFgdyJLxu2hDwch363jYiQA223rR4dD",
  "key25": "49yBTgPMBKja7mTTRWpgRxbE74JG4zcr1JjEB7JbTUZhrjJogKgTae5Cnv3x4g7vCw5CULzqKgBoeToXajGnTzar",
  "key26": "3vrvTRa75TSL7NKKQ45RoWArpWTFsN3pBDSZfzGyeveBf8EDyKMyguYdUnYeymk9y6icq5gLPNuj5Dr8z9ZVhmsE",
  "key27": "8gnPBsBGx33fnis9QJDFiH582dF74tT7J4onZFjLU6tww3VohB6D2NeRLnmU19KSgB3EB3hZCbuhWJFicbSYer6",
  "key28": "5o3LuE8o5uxyqS3ZmRf4HPBNmntT858tz9tGp2ZLiYQkgCJXtVQhi1U4qZXAedpPVjzbjz4QhFGTLEi22Nvz5PT7",
  "key29": "31wSHZj6Ey94Gora7nUDdQa8ub23rsfuvWRZQW3zzWu6gMcv17pf4yhdSbFB6XhQNmpt2vBQ7yzKK5872BCdn3sE",
  "key30": "4U14PtsaJdA91SRLvvZ1MgCEbzACnfYxKGCHPK1gphRTniZ624UdDwDjengeKTN9qRVaWggaRwK2wfFMicopU6xc",
  "key31": "2wdwKSuAUyPKa2CEgPhoY6eV6iTKMnuDyZnvhRweF6dkw7vAoNjD9s6UkqdKxmUY9KkGgQ7buVc4yoG9AuhNsxUW",
  "key32": "2CdBYa7kpmDcCN6DfsmEzzicgBZHTJ5zr6dQ8Tsh7iga4aG6ww9gnCPqKgyQpdvq2xKmptfZFtQbf5xGhhH1CpZo",
  "key33": "5pPKQzQe299nzTssKm4Y3L5WtzwkKguZXzVQZYkxpky3BfQthrx1nJQrterMg1ZioYqQBckA2DeejimcTLDjSMzm",
  "key34": "2idMXyQLkXe7dj2qFWiZTQTenE9VCBDWjrmL4Y4ePPbGxjY9QoWjB1R2CtxEwRZWeFaQzpmBJ9QRbQuiWKy2q9Ve",
  "key35": "3ea4GoSDeJSeP39CKRZBWPVWvxheJrXuyPZxpmDJ3D6xUK8X5teU45Mw4Dzqmr52r5UV11zXoSiFHpNS79VgzFEp",
  "key36": "5GnDcwTyZpTFtDx4CacA5Ctnu7vwPHWnE3Zs56iCDwSLtjWd5LiU4pMWCgLXZCXEbUY8SSctZirXky6vMR5USnNc",
  "key37": "35tbWNWX7FP9pFueToBUXqtutiTpDcxkzTJ7UVNPT6wmosy4PWjYSJnMnqY4srsPVu4XaxFfM1tJQ33bHWtKZStH",
  "key38": "4EwH5ohzbEWy24sAF6AqRJvQV8KSYnV1NEYE5xQVE1yvgK46tx1erHH2E2EywsD1rC6ZQWxVPCvWu5d4iUKYxTt4",
  "key39": "4gvvm3ZGSjPQ9tKogrE5nvHdaXvfWSAP8rdLys9TyMLYmqxtnU2qH3ZAZxYkWFcPxQtvD2KMwLiQttL6FKtmHfNL",
  "key40": "7ge5TNBhozDtivvHs5Ui7nDJnA9ozsUXmFH8ifG5HDE5qFqoxpfiH51737vDLHyscGFRSx4b4wx5R2etnaRmbb3",
  "key41": "3YjAi689kzwvZPPo3xhiMER2eTfWGanodXfcAF351shjozVwGDN74NsLHniRHQSiEPeJZCUeRNyw2jQTkBaiwEFK",
  "key42": "5KYwVjeGFntTenrTExrtuWhP9NXZCXvWcSvj5TxVSt8kj83vDDWqVY4ixyoTfgKxXTbJFBWt1bcR7ynAatCTN6TZ",
  "key43": "7y93a2RyHyB6JYLA9Hxq2tW8pvNcQWMFhpSPMKZ65tC7Ty9f9kAyeGBGsyiMmxJdz3FM3HXyzKQSZH5y8dykBH3",
  "key44": "5hB4EFoqs9hYH9KAqHEQUcNJqHWToGToMJFUoMCEGgAHV8xqDnMq4sPceYhWMeTbXNizeinduQQfvbGg62heV1Rv",
  "key45": "VhVpoJN2VUGGHK5eZJYQwKbFGcjRqspLx8iZ1cai9o41aLcKiY3YMFNKybWoBrWe6evW3Pjaa53ZdGFu9Stvgo5"
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
