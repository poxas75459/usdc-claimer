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
    "25CF3eomim1JSk1b1Y1esC9y9fLARXBvAJ4HeuEJ5tBqAwCEyoDz18zTHW7uqHYPRuRVpfRLSowz5eCfFm8ZoQN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bWuTKNX42XqKQj1wM8KDnLhaznrtNC9WMtUYYLK9my5DoSZU1VesZoWYDnKUSCgSJ6JbmLiqvaa915KHzwhqQxE",
  "key1": "5qZ7yGtsKWxHp4rMLJXhnTrPGH5684suECJgcMj1RYMH63QvUwPDuq4XVg2fKCvgMLJJFQBX4AwQrMERHwq8cjeY",
  "key2": "3xmajfN2swboebWhquSzRWdyBzq6jnjzMB5fZeEzo9zWsBvppfVZcsbeoUiukuF7AeQsKGDxALrydVNzkwyQCATQ",
  "key3": "3EzYGbdgswaEdzuxrqiV4isEgyQXjUSpqAFduyDUm3LTSjCeCBnQqhy4TrVcehqjLUgjJDUbQJSMPq5reKKmtGii",
  "key4": "32Hq3TuA9UYKSbNf79h7JatvjmwmvwErwZ3Fr3RZGtJppdnHBTzkhtz5zZswVo8K31A3SDUL9GoXkqcijj2dSvuG",
  "key5": "5eoEB6QEZGzLZdFPtaAEdGZCarowrAXbzvhQY3ChZ5T6itrL7Yne66ky3ztWFN9SNggWWwHBNPkxEV615rkBZjMU",
  "key6": "32wyCZYj4XX1Tp1WHUgkDY8AxDdxt59T32fE15C2mkTsUCJW4PwAmh8KWsicR4bR9KvSbZmq42VhLQNih7HzEkWi",
  "key7": "3f217C22BzgRoGbMcpf9hseCQ1HcZrjyHB5x5WaWkyFmkAmq25shG36B6cuEkXThdP5cUMrJJ1fnC9F1bg8UaW3X",
  "key8": "5MmXhqD81zQDhXcFny4n1cugtDFu5L2RL7zffHoebTVk2gB6wcjef6C1PxMNzeN1WxfE463Zjfvk5mvzg5CFDLd4",
  "key9": "5eetUKpztYQkm7cux9UHJewY1v5HeurV2VRF1h3hzXshf5R6DZL9hJVvJSgMUsHm2FVdbFXzQMBhFgu4WnuK65rM",
  "key10": "5KfJfLnAWtT6dvekN1GtR3NqnggMRMVc2UC6HnygPLFt58JAWFp8PWmEbtzV3FrgYqf2UB1NaexC4bKcJHbeeoTp",
  "key11": "3EcAtizc1Ey1srbUsKRgQLS7VQKFF6CiKrQ1AmcE5fm3C7dGJHN4t6zqMUYSfo6f2WKb9YadJvz6cmJmmYvqZBYV",
  "key12": "3i1vo3m4NCaKU2sFtiGMAPgoyRZSFJdB4beJPooK6BybSKia88fEKr5JRPKDCMoN7NFVgrGo5ueTSmqAXD4aVmkr",
  "key13": "4DkwKDYC7obSJWv3qbjffW1u3JgkgcUTUDsLQMdzMrRXiDFRtZqueQChfKmEsNvG9PYZGCy6ZPdz7bPAv6AYC8Pf",
  "key14": "2s4GN7fW7bjvAcuQvNzmsJomUq4mPJtojjDsDvrMSYiebh8gtzuL6W2gGGMsZVapXJQhF4hqQkBuRTyXX7Sa7hT8",
  "key15": "3MD5ck8UhaUPzaq8LnbJUaHeVe19gYHXG5vuU2tnZ1wsfiXXmqeCvP4fVRJZdg2j6gCdchdvY2YNyFhGeddETrgV",
  "key16": "66wWphH8BnUtcFYUaMJiQ2PrUFNCvQh3NbEvrKEvJuV8HskATW8hTX7T9ziKJdYc6ZtPtfA1LYMqvaP8DZ1mubTC",
  "key17": "2feRPC8gk7Ckf8GtL5MpssTrJ56fZKvvLeF9xEBnwiVe13RKZW8wja53e2BuwyS5UtXm1fsfpn1Kkvd67Wv5Da2K",
  "key18": "5wxo7omAWjDHcXF6aq2Aezi1gY8AEK7VoruNexs7Tub3TYK7hccy6hkTBJB5q953gthcLwnxGUCm3K9GyPVc2K31",
  "key19": "vPfHzX3SJbe9KE9TUcun87XZGqGMzc6fL67FwzYetYYuuw6j9cwVGgEGfwU6GtmXsR3qHL4ijzaAFjb2MCp6s1h",
  "key20": "4RNCamiV4TWfUtq65ADDg5TNZN2BBNNYKdT3z4aWJVwuZDopsSrRgUFQ5heoXEM7srsnFQgyRZhbUpg3QJciuALx",
  "key21": "NDGkMVC7k7eBkyaNRp67u9DBy1zkkgKikpeexRuGsJiWyUyqQUecZGnUjajAs9QyPeNALLr9UT8z6mpZjpY44pW",
  "key22": "62bymg39r2mJsfjoMbpNhoKvYepKunkHscXfwQU2BkYW6HETiRodwuWKuzPaB3g1aHabta8ThMcxhFwrQZjqb1C6",
  "key23": "5VT7dsr6Ubr3D2cPbc64351h9yVj1vajkSJhJB2bazv9rKDefw762PGeCs8aushauBjjtXRZuugBPhc5cf8mho6M",
  "key24": "5ufZgvvDUuG8dbMpx1rLTmQuptrhWm3QkuyD3cCN34Wp9gJydUYdqE1HjR5JjSgVB6RiaEuLyeo7Q5oAo3SSYFeP",
  "key25": "3Uk71ergvQktN3bU1Gsa53sd8dqNnZ4d1Ku2YvmDXmxLHeVNZv4adsZGB17MBAhCJ1mNjznGrr48dKj3LZEdWrWy",
  "key26": "39hFBF6ipwfXNZyap7Jkjr9Trx5JoNmhxrTXkMA3jtztEtTNYPx2NEdSezcmMnvzCx1BmZMBNpJBQsshNGpdhbQo",
  "key27": "4JM5eL9Wu17MmoRpfxwCaWe7ktxV8Rv12f59kNat7Lhzdj8avPiYooAMJx867XW6wmnJyphM7rzYcscjcUsLxnUD",
  "key28": "4X9j5zRFuRmM1WNJwX1PnB73uKLK7XAEDPofaxcurtxNm9dVfzmWbNCTZj5sZiPL8AwReRZzJAq23sbUGA5e3KHm",
  "key29": "28euou7zMvi7XmbhWmJgzNtk9QViC4HTcz53hYBcnWuXoA4GWghzjE4v5xhLSZLJzb4EJwDmQ9DNbvjeKUJ582be",
  "key30": "21PvqrSFuLi74LoeBhDoZaYK9GYe8Z5EEnqpmhWJNtxKhGiX4vu2rywpWRanFNsCtVNKYjeTGxvGBDaXYxv1vXgx",
  "key31": "3AwpqWUpUPJgwsCgEYHsxdkVCWWbRg34Doiq3SdynmSjbV3L9dD4VWdj6p25RSrhH8eohVPDBHVfUCBoNuPB2V3h",
  "key32": "3of4Q7cJDLoULw156zzcZqurkKhURmjorrRsGyzTrbRoepdhWjD9ns8htsThdBmsx2HxwgF3etDWqpwsU32tT54M",
  "key33": "2DyH14v2V5WEHPRQU5gJzuvUY6fB4rNxf2QdnVfKXDoStZdupU4hBymZSpdLjwsz39a8WCyBe43fz9SvL1BovKfM",
  "key34": "WnKXUiBiTmNZDifYxTxAFCASZf7WpUYLvWUyoW7dPiMZHuKFjB1oWCjc7dqUo27LhFAa4TWJxVqKeKmpouXb6ii"
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
