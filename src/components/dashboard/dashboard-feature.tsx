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
    "5WNXjbhYRpzk8s5znsq1GopZPrxRrf87WC84mtEhF2w14xuz6iz2BQJCHTj1Qr7LbzEjdZWDLwLC3bw15edHR5f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqxPnRiTTdzQT4aFU5NY1AtHoZiL1uCxU9Mi9X1Lr7uo6kkoZZ5hPafBQmyMtVcX4ydKR57LSqHeTZ3x3R91Zoe",
  "key1": "3cWqxd1ej3AHL9shFsKviPNy8Uses3jMEC8eEqk4LC9uuAWb5NWXrHGZJq1rhoYYHew6PJSv5T2fZpyDWrkDoCkS",
  "key2": "3KA6MP2acnw9gbyPkaU8YAV446ZMfHiqmWwpddQGQYttceghCrtahApWbfTHAi8p2rskHdBB6U8VN6kELoGwUgiN",
  "key3": "5ZmcBo43uUbTk2XvmXrXkafph8pUKEUXVj5AKUptSjtH4neLo7M3LdkznHeYbEEAppYrBQwAqt3rG7Xf4eJDeuAh",
  "key4": "46RH3CqgQa2yuwan7xLEa3uj3PUp3uU5qCc3dRd8wgU5euMz8x9dpGzBfpVTTb1HX81Mjy7hCCXkUMqt2NxZR4XW",
  "key5": "s5rhNhGHHhVQF2VDQhHCV2virNRmSGv1yAWhNn5mN5D5JR7LCoNJodzD92wmwkahtbWoYet135s2ZbNNQQCoNmd",
  "key6": "5NysRAkGF9faHx4y5jGv8Cd5gb4EQHDfp9gkASvCTV5ioBThFtgDghZna6m5JjmHEKLKCW43Yq1XbvqYkxB3didQ",
  "key7": "3iV3Z7TBb2aiFghSqytyh4hQxSXLFPqKS3PFNQQ5ek36eV9E4p7p1AmjiNcoYrp4rTJNcJTjFq7E2iSUVJT8JqjN",
  "key8": "Se87Spv2AJBZ4juaLfz89qXZ49L6fbv3VWpVmhiXcgqMejzT6wyWXW6N4uzTP3GHiCzDrFPhbrM9UjLk2LBT2iE",
  "key9": "66kLk3hnADahivKqSQ1XnwYqsgfh7MbgcUbFnFNEV4218d3MLav8EDv22atQGpBykoT4WaZtxFtMQGNgg8XQEhm2",
  "key10": "61E3tRxb5w9MPnMZ6tEgja8jE4wtqZBNAmD1hD122Tmy2CZckDzeB7Nkq6hFA4wfdAy3G8GST4p1pg1yV9TFCtkn",
  "key11": "3vCtRaaTxmLgsUL239FW1jBZBhCsMtr4f5uYjmwahieQNqTyY1RdxuDmuwtBx8YijdDexAsf3kpkuN4XhdaRrvKn",
  "key12": "2bnKGQaxxDX5VN1tAWTjWVP4fU2ZLi5FRUyG1P4bJdxVT8Ty9MPQjqTzVf6Px7D6vroZBmaxfsyzNqfy8KeNtx4L",
  "key13": "28mKeAQ2j8QH8vMQsp5gYSnNJvseoQKgfce8mAcT4jSAKLm1hjRwh3qKCL3bVQuga8PASdaoaqZo7vU7bjhZgpSc",
  "key14": "2igRL3go2CjoNKoqWyRWrpxBJWUYR5sfhpQSvgdsK2j7By1Muo4YVs3z8fwcbGBDGT9Xv6R186wBotKK313YqxHC",
  "key15": "4BpvGw3Xe8gKbweqohCaaKyHoBUPbAtSUPBn3ykh8X6sHKv3Vfp9epYSSxorvytrV9KRvZ5HjVikB1cCDoMAU8u8",
  "key16": "33tUYkRfekryv5Qsh9KcmvtqZX1nUWj8cGFAWSnKZBoATiEVB77ZCQVZ7Yuk5hVMLiT7MeDnaMtySQEsdTjyWz4n",
  "key17": "ADbgZfVatJWgwESqifAnzpLKTJ5rJse59VhV7xxtfr6cHkeAdNUCs2zpdmSAxWDnJvVzRGP5XRgRyBViP3pgVER",
  "key18": "3C8keExL8VUDEZL7DSdGe9NyKgpX43Wo1HPWV7jK2wdBfmJBT2Uv29MwnNXFD2QdcDAUyuwjYMjEQXAezG4Sx15c",
  "key19": "LGMv1NRPyaombNq4vMAaRrbdMg7jt7NT6Dcb9ee5BGNiSHh7ptv4x8FZbEq1B5vutd9M293th58M71KjHYCtCdq",
  "key20": "27tRjoNoWAejYzcr3CorF26k5af666P61WbcLcf5JREBvPGHboHHAs7xvdMY7fUtKr9LFjuHywH28TKjiuPhN8N4",
  "key21": "29viLTy8cR3MSTvnUDpZE7r1tvSHSnrF4eWzZc4945ki9vcyG4WXwRddXDnSG7Vz3WZY8aZvyRpPwhCn9RLNC1Ak",
  "key22": "3v8vTaaS1Dz9Vnq9RJMQdm7rA7dTYX5Tq57885Kk9tZTaxmNbdget2ykMkNxMHmDVFjig8Fuoidwn37Psx2fy1XX",
  "key23": "LXy8n8aBdQr5Q2D9zf96eQHUGjSLMawxWh4UhE5V8v1AyEQQSp1wd7hw8ygFoWX3sZ4dZBS8xSaLzo6KqodxkeV",
  "key24": "29yuB8x4tAT5b8a7cUHypX43HnNpRKCDmt2r1htM6vLs5ziL8VZk8pCXX3cAd3UW1AweGJwprzC6SxoB4XdRUmrC",
  "key25": "2gvg1nbHhRRQCh4tWPM6kZ3F2s52fwRwcQhv9BKuwyZerQs5DqKmtHJXeRW1KMi45L42zAzfc9B66PN48PmWHky4",
  "key26": "5hLeFcRjojiZF5ubqcecR6KPf5EB3RPV51MF7mzTks4mGdrMeVvdn3PMBjULYQkTcjyyH2JFuiYs7vZWgTYaSWV8",
  "key27": "SinbXYcmTN8pUgYTWiSN94mwxzg7Sipv4VAxsnMfxQUCNaYSgyWkZDYFtvHpBjVKhSjgvH6NU1Wr7oxy7wfKtRC",
  "key28": "67V5aZRTQwfMKj1zY3yTma3P2kr1HVdvR24k7BNoJP5srSnP8Epd8N3YyAjwy1aUt5BN3ksCi3CpfeMtdDSEhuUf",
  "key29": "3gm4i9tNJKonG2Ucjzgk7aNhEk1dGhA3bV9AKNT3pYGwkFiXNgHcMKNTYhmeEP4bmVXvf8K4PNiJrGM3hGKsArsD",
  "key30": "7NbpQR8C8DtQKztVYtaxRLRpi4fN2fDLNFfMdjKf9Uiefzegx6HqhVU21bgr5x6Z1zxHThG3ofhYTwNZisqptLC",
  "key31": "2z6G89MBteUAcrKnYN6m2QHGCUPW7hdwzRurzRMVTd4pHsHwpeDdaHkZsHM2a5UziuHcNdHnxm7vtMebJveVybLy",
  "key32": "3m1VGPExYsCNVhM2FapprEGtff1EdZijLdz9RZDz6GsDTUnzd9AsxiJ4ZspZuqvs5TBnPfz4shj5pDwskdTBqi2T",
  "key33": "66TRbm4BKc9VgEf7jMyPauGGxCAFwCpH7Wfi8UHyVa9ZpyNPXuJHVWx3uWJFsmw1NtsKhiYMXmSZraKavNeYKric",
  "key34": "AwQ2mvcsf8wcP4e6t65kFH4SgBF7HFRWw8hZooTp7NbX2quyJiyqQZVgX1br77R4CCDvfVRD6Gucy44wCCPrgS6"
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
