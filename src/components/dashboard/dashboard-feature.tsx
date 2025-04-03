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
    "EHYmwpVY44dYV3b1en7sKUA84VCQwJkpcKnkt8pWrrFQZSkpZFZkoX3jaq9JVTX6Fu8UH7XspfpLDYabupcAmwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r3z2u3XXj12aeXrAWFZnf4eWBdjrHhXpf1tPWAPFGXw6hXG8FjVA77cFrALaDwoF3o8uwoY28vz6hi9fexDw4hL",
  "key1": "5Ej9iddHRgQV3Lv4QSE9oNWh6P4dL8oXQh4uCJ4tNy2NqvmBdCCsDE9X2Niz3oJSY6bNk9jddmvbEwwZ7He1tQD2",
  "key2": "CgjXFzoqpKJAHkHkJnsUMn9RWFGEd9dDxUsjpNJg6DrVkUHF3okdUYArmHLdAFhH7PJGm64sZiePASGDDC8s494",
  "key3": "5zLwfwP9kipGeNbtaWsoKmjUA4516fveyTJRS1K1DyE3cgJdstvbqJd14TqTgYPn8iDJ6WjZ4z66sc6i61gnz6At",
  "key4": "2ijyuo66wpQTyhXSUaP6aiB92KdLs7mbCefDK6XiStSfgioVmTbdkCWcNQpJ9iEPrKGaoVFvCp6woWPbwhVRSxyr",
  "key5": "36B7Sc7t3dB2r23FzTpDHPsmsUTwmmkRqvXexb6P2MeKM5Dzaqrf4ZyUF3H71C1HVoW4ULsVaB8jaiMV1bK3nBYK",
  "key6": "2SHDugB7JKbuwyzA5yyUg24qNKhJriB83cvatTDGkbQNS5D9cYaoEAV6mwwM1D68G8xRuEW4kJ3GNvkzDCgjK1ty",
  "key7": "5hz1G8CssJMVj3C8DVX1Dh9qMvZQsThWZ2KJu9BqU9Ap7koiFHu1YHpBqGmyMNdnhYZeRhKJXVeUWttGeacjVLQg",
  "key8": "22zhj3FeZ5un4wEcEWBYKTPriyz2VUsNiaAXCRgaXouQuUYMwfsHRP5HN6yq8y7dB3zCFgnnB7gg3vxPtPJBxdDq",
  "key9": "34gwBcat7MPwYZKaPVbfMiTWJd5ZTz5oQVacJwp5AyyEcTcw4TFySU6aCiWfv6g4YHqFYKAcJdJdqdNW1f8iuku4",
  "key10": "3fHbKZpadbZ1fuFZ2qKPazEnaT9LbxHiEFVZspQhe9sBhHcxPAToXdfgpgnctPtbPbkRrPpo9eQB4BiiUq8qmt7H",
  "key11": "3fSvHUDYwAParxGcVhoR3h9wcQ4PbLMdz3zuunfatZR8VGHaV6Lx9iVXq6uN7xjEj1B9YVYnuhL7iqQHKSY4W7KS",
  "key12": "3dM9rtELTge1vxAfTheD5h7jokbBBUgDThGygHrVfWmPtTJprFXfMdrMhBCTNAtDmnNfHTLj553iNKxVdRyZHhKs",
  "key13": "329U6HY5deSJ8s3Z7sgxehuUP3DpfCaXU4bSej2JGeQiLEEVXKWJLHBAH13NUBZBbNMU44BGa5zWCbjoJDskyRUZ",
  "key14": "3R8EJ9tZE9DdKNducBk1msNmksaYDvzcs3su3mbKXUJv8Dvvm5PFXzjqKvi4UAtvLx1wcYg2HNqwySYmNX3T93cg",
  "key15": "4WSaviTMNeQbDjbGgXiGeyp6sGe1d8BnRYdhKcxDFJxHdpqVuyx31aojXquiDjPzfN2YgLW6KPkK7ktAbZjvQeAB",
  "key16": "5ajksGrkH3ukyHh8KXzxNgqXbZG6gZFw2jJXGix7Bz93TDzT6YAPma8QpfeWbmZDAytjkDZs8aHcMf35a4iNKQme",
  "key17": "4fZ389aUJK12dCpTEGMwRXtKeYSkepCkNQ89MeDdnUVKe49QpugyJ6TVfi2GkweCQRLb8Wpvbu8jkyQukRUg4Ni5",
  "key18": "4XUg2AmfoZhbSAUHCP8Ad1kxGmxx9P8MuT2mx5qBa18XSBy9JdvpKz1J3w8yEBKGE8Vr6Nxt3cqtzhBsJhWrdiLW",
  "key19": "3j14U8qZTc4oiYydJ74H7dYyFYrzgcMuTBgRkfu1p83Kma4S66JFEopwfrMuvMkkmx7eDXPbeZdb82sFKxkvV14V",
  "key20": "5yzFGj2iErvwXnaH53hjNN9rXy1u1VQYZvPVvvgzQoeQxrscvPRb3SjKLGwyz9skDFqsu5iPFHVX8XAyh6Vob4cF",
  "key21": "3wh2eXR5vPqL8ixRD96ZQNvo33dcSo93eFd7W7Ye5nZ3gJVBxECK1QD2aq5etXd8hptq4iPRPepDSgSBnyeKUDLc",
  "key22": "48wCmCXTyzoibPGLoPiM8gFXyMHwLHD6YZ7VnRAbxFx63HAmC49QuEQPSM9xa9eYCU19ZoFDphpekRiHazyJEsx8",
  "key23": "4n2P81RGTqANVuf42LZSCvwZPeCq99wQg3QhpJjL3pYYaz5UD8ha77nNK21ucKe4PrYRfsDoiw8u6Wnov9mm5ZwT",
  "key24": "5NZzjy8rjNCoqBhQ26HAgpdp7DHtAehroQWxWZniVJ3qmyEWjZLdUif7aqgptw2vgsWrmuwkEheRMK7middm5dEA",
  "key25": "3tJBva3QE3fC65GhQFcDZbmpTvXXhP2kUBbzPAsEhh8HDQZtYQDs4fkg9ANxFcP9utCofXCVPtYrtGDuSAwnaxXW",
  "key26": "Hrtd4QY7WMkJmP5TXQUuJHeETf3Fr9kF1Q8AUjRNfa7bF6mzhA75aNwPsoshdj4iKszfwzZLGTWq4HNNZzTpzyN",
  "key27": "4Jije3jMb1cDLTTzyuNNVie7T8g9vzwgKPwsfaRcvgrUjXgXdkk44DaTYinn25oZPw5sc4tJG1jEuLvtMjN39feG",
  "key28": "4JPgRzmPf635JtjuuRApwWB1i5FyXdUCZu7zGsPka2pirz3Hwxic2m8tCLJQEw23KdfmQEMNi3AuEhWfkQNgXvGE",
  "key29": "3qyP922gDrhBk58x9pncckvUv4fua83ASeJvyv9TJuNBUeD47BF1TcpMQvbgcNAah3GoQiAx5ExfpLGydYzfx9X1",
  "key30": "5BTD6WGTTNDS9NQ8ZLooTn9Rp8uAA2XQapvUgSW5hCCoibA2akeWvzVx4HADbxDx32FcSx3WFeafvJk7MsFXjB5D",
  "key31": "666JrEd1veHXanXprw57hZHtr7R9pxNZZ9VKpiwgpbmDT73SrZTaCUiWPKcq6JY5i69dKPQG3bcsjBiFdrazKoHR",
  "key32": "4weRSbD8VSymyyoU63xpSJ841Y8LKbyZ1wabYsrxbpupngZ3iftcL2emyP7bc8RWqdHwUT1EMSrb9wpegRcTQM3X",
  "key33": "2RkdQuZavzTyeVU69192x4tx4WFM3dMC9LCbUARetCdEyuFwfoYKABX2xujm9MDrC8EJeAHmxJRPQ3EBYe92Wx6q",
  "key34": "5xgjryCKU4FnTwvjgvXr6dKoLTtmP2NAs5tRJvq8bfsw6svX3N9na4K1jGgEvuEA3EfCHPJGGnMwWk6ScAfXYXK3",
  "key35": "64ARGdXMLRp1HdLsWgDHXcASLHEqTwmoQ7GVTCNXuXECX4uyH3y7SxFmsuC58HmEip7AVbVcnUvqz99JYPqKahMU",
  "key36": "3CQHND2rfehpe8dyAgr4qxR57r7C6sxHks7aixr2oba5MKNZqDpk3vK8xxwG8rnS3ZAfw7SzoyPR2skeYbsYGC4R",
  "key37": "3SGtGbVgMdqyBRQCw9uLndWoRxfWs2KLYud1tAJkNK1UN8eqWRPvGi1syMUFp119PSDxCBYimVSeYGCAs2uLzZuC",
  "key38": "2QftewizboRUyW6CGT5xtUJez3isiGXjewafWy9p9Y2MF5pv3vBJoxqJMWfA7nCwbh2EmNXviJbaNJnKL3r5Je4j",
  "key39": "3Hc8x3rVRFci6TJzxSR3spmcSciBrm2Po4hj1kumanZSYrGo8sfLBgwwYTUYUCmnsJYEqsa5QDij8wJJbLb2Vsga",
  "key40": "5i7DpMs6SH9JUHxM5XuPaCJJ2RuNaKVwnq6gXLaBdkAm4wqQDhnpFm92pzxT2hAKuytSFkQwLr4uM6KdYcDswT1L",
  "key41": "4cpzobqY4HV6tebZrx1a1BgMvUF1A51XRaGDSgUVMsUQ8USnkCTZgVxKHKaS6p7F2pzdBknHVJVrttQ1TQXkZZRf",
  "key42": "5AzRtNyp6gY9aQhw9Kxz1ypDPZ72vyRNLbnZ1dineQMGutY8nezMf7RQXZnD9kz48xk9sbYP8HQBaXN5ZYbqPvXC"
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
