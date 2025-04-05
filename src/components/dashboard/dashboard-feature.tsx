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
    "41EDPKB9R5fTYoCfT15x8RY94rmsuqrugmWg929HgRXCtLnvz1k8zqVXcWed4ButARDjBpPkpVd3EEVfRxdTdmDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xet4nGzLvokcs3DS8QgfENaoHziLFHwHDkd8ek4BmWCr5qHbMN61mHzegy3kyHzqFZ5Nu5NDF4Asm1VkRStX7rA",
  "key1": "2bdA4zxwoQBH1QnumSJrmZRSZBbxh3btDiUPJvLRMtFMJQztQf3L22pHQjC3fyhE6aoxrQwgSD4UXUgQavszckze",
  "key2": "5M5WnQYJK7bRHN6vXcEbDg6ubkYm8q7bSGAKchZEUkuu3SCpKErP6TZWWaHrCeSsmJ7QnxUuk7Ca8FtLXRYBbBx7",
  "key3": "4cAw9yievVUv4XLytdJm5gFv7XYUiXSFw4or51e4NBnjsK4poKqPNbtKCN48TtMM2S1rd8PFXCbXyRpFmzRPSz8v",
  "key4": "2ouS4jEc1ka3KaTrHh35HvwWxKt3fXmEC6hnEEFZxyVWDHFPhycLFBCKe83wZnUYFcZoyuYhYonLc2V3MoJ31fHn",
  "key5": "XwTd22EvcV7jYcDdNotzd9pZ5XJ6b9KPTYckhLKZ85ErRE1qZPk9Xw8NStBPzAdkknPB8s56EVHnhemz1h4ZATY",
  "key6": "4y42iVB6kAiS7vvKbBtRWeZQU1rYAmKmMEzuNprL3omGg8YqtHZ4VyRTgbbkxwrsSiaKpsoQCyWUaZnq7snpAPoh",
  "key7": "5NQAMgeqKdkdQtekpRYCKgVT96VR73qh9ESQdVoeGf588S4K6Hu11ZSV3zk9ihyv89mV8ViuKCKNKbP1TEqDqES5",
  "key8": "312TboY6ANtcvQ2SpaWWTSzUCkxUHGEXVNgbzU9Afegm1hb4iZv8oU5HWun96oC2YSxwLD7FEVhbKAxt7UGtt1xB",
  "key9": "q3oRXLxbm4ifciPGmVJzDvoLdzA5azFt9URVWQkEVcc7VnyoeAfPLP6tpiE9uyf4ULcjjqUbamsja6XaHriARWw",
  "key10": "4rWDhLXxqh6W8Jf1KJ9wkaUZqHQgMNgZL9BGo4tciHdshTveQD8GsemkpttoBcF4PggFBozRpSDxaR9UoaoNPwpa",
  "key11": "zBaX1L16XTXTnGaKvKntoBz562L6L638t5hwTuNYPu8qEduMqKmbKHQzXx7JTVsrbQTa4Cymtr9atr1LAj7bs5Z",
  "key12": "5t6aGNCiyX5PUtTKDZS3KnVmoFdjy3KKky73LVZ4MbuBiuWqAiJDjFSyDaNhNVU6FU57B5mPozTmfKTcj6qbsPB6",
  "key13": "3zcNjvS4zgH3XWqtnpYJ6RdXuZm9oNFperW2kgbYwPB3PYZR2HE3jeEY8CrxYGxKJ66RWTiG1kNymXLDXp7wsTBF",
  "key14": "5TG8PpVPXn2Fb1uLYGZnEkwYBr4DPZvu6WK3cSCUMUNPv8zrhUFAiNQVNs3RVAVF5bE54zDjXPZih653HD2GtsEB",
  "key15": "451e5L7DezNh7GrWBQrufu1H24xn551mH3RyEmeWitmgHG8pWH3m2XCowngB3UXebUZAmoRt5JuhKvyVoFAxWPWG",
  "key16": "59MBJuoTSSAtAeYS8eT85ViHP4BC6LLKX1URbMDPWTDYkHGhLFLj47FFFAtffXaQnLSnW1o7N2doVYHzu52fMon1",
  "key17": "AJfLMax7SPzCTvPdq3maobcx4vm4nFY9ReHEZE56ycpKr3g3mtFxHgFozJdmHhTpegTFqBkG4VggCWUgfV4Ks7V",
  "key18": "wAC4mMXgcmQCrRjKyiFQmXndKtFFQ3eMVW1YbZ8nG5ha4ZWRhn2t2Qwsqa5UHYYH6VsUtTEF2zw5QV14ojjrpiv",
  "key19": "kJ17vCq2S4KhTuppD32K1FFqvCsgqrPfqi2coLuKJVqBzNp4cmQSJuwAEET8kEUwzN65JMzjrjBBYKDLyJEAHeo",
  "key20": "422KsArmcrPmf9ppXgPVsUvmGw1TugkVkXYfypjwkwkNTFpjAjzby6y623jgRknnVkCSohxk2H1DuuRbzmSxtXny",
  "key21": "GZBxpCCXbsiBSLtGc731oGbnYPTK5CM7woMbEagH9zaJ8yuLZcEiQEtWXhvWA5By638Wixw6Vf5AqBU28Jpb3TN",
  "key22": "2WUkJts7DaMtkC7cSZcNwgqyhvzLATUNM4vsr5hfz6zo1Fg1quBPvMd2TnUMPBgwHjLX761FpmpWq9hR5sJZJtLh",
  "key23": "21hT9mWXKugpLbJFXZs7S7zPZYdEkiDUvzeNag1bPrv8W4uG5k3Agkuvbj26DRBk8VpnSkrNcS8FenQvnp5nxu9a",
  "key24": "BhxGBFAkZ8YbTSa6JGTXNzqxX4vuTV9ujVWh1iG4zS4VPjdVWwKz2eHVC2fdRni1udu9Hq3EY33FCXGho7Me5hB",
  "key25": "u46hDqAnfEoe9zDDhibejQ5KASDUkThpRXFTp1GhMpabXeQkJfaDTjya86C1X5EPjr89tu8rqwxGNSEvrmbj4Uy",
  "key26": "32ADUdisHnhAc8LVgLWfxdsrh7iGUzineMZM34LaPtzuzjzwnMX2m3gwCzgR7AkX5PUoehVF7nCZWeeoL1xXqSE3",
  "key27": "43EgiTChqcwmjCBTTobsKh7PoLJgtnxtnvZFXWFjJNFstxEjeHqwqqsx7K4cWzMdFqciYuo8TbERCsjGq9cpkx74",
  "key28": "AUXAziUVRTLVYWKxJhvHCDroBR73hThBfQp6gkq5whiZ65qDDMTMr64cXmuemijfnPCtMHJnmtE7bz5qHakRv7P",
  "key29": "42WEt2bjSDeBAdCYP1nGnDCM8bst5Z3N4DahhCFdW5j8QXCkpdijkPUBoAyRw1CDcpPNkeZYRcs4EqrqmnosgSVw",
  "key30": "5WUje8M69WKCBzztTsjmgEuCmZMtX6LPwvatNCkSdCqTXqMtv5Ra8NwUs2NXcakDgXUoaC5neN1bQ1D2M4TdnFX2",
  "key31": "4ppoJiot93nRYBevs7RgL8XHHJDmx8uRaFGZKzbfoyuG7H8yZwU9sJqHD78RjD3QbM8tiyXB6dMvRMYrMhzwJBUS",
  "key32": "fg5QzfLhgw6YJDHQe4Wy1KRZqs8FB6XadMiYbdC56gry724XNiMWZEb1WDB9d6rYBhpGTMZRDFyq6a67HUAatxv",
  "key33": "2SCSAnwKGnvFd8n1dNPihY9XkZ7kiKwZza9RGXoMWvXkNKqffBSZ2J1qdL6rKc8ocTJhdHyXUzu6c5AN9HKXHd8L",
  "key34": "2gA9jKvku1wm45eRpsG11FUXWzi7do44JfUk8Xn1oaGp1RbMsBhKhfxQKKREuWjgDFw7Z9ptye5eoPXi4YqNUvsT",
  "key35": "33wKbziF9n8RwYTcnKizvoo4qUd31YFBa8vtUAZpEFXmo9V6wzPu1qrRpYipyCLnP1mzH9D9H6GuzyWEd8sDVd5N",
  "key36": "5vvFQtyn5Sy7SRzqJJUbcMPizx2wpXraR46UyakkVrtQTyWyun5R2BrtU2MJSaYqK83xD79RsCPPoAgx63ZqynkL",
  "key37": "3HoobWGNhtpwfHsjCbmsfi5G5BX8PmQNjSLkDJbvEZpArcs4fJWyL4VfDfToKvHdjmVRx7AtQReHAHWarmqjKLBt",
  "key38": "vu39yLuM9Nc5cMnkGd1bnP82SYbewVc8uek4pf7u4EfPAWBop46FXeY42Pohg9UnX3xzv6FBmD5Lu6U31T4uRCF"
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
