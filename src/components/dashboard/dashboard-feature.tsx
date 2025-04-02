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
    "59iuY2KCafctYRs48wjDRVF95fdYkWqKZkWDb6RCbFLzYjbbAnRX9qYgVoMesniyWvK8kW8Esz5hK7s58G6epahe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xWrkUhccSWtNCAumz9ZQxDt6qwKUURq55kTseYCUwDp1L9zU28QyTkpCEWTnrPa5hwRYffvoP52bDbw7n6fJ7Ne",
  "key1": "55DAwwxJDtkrPLTXoRd59fYzQ1iG38S62y1csLe8MX3CtvASdKWUMnzqG4gc7py7Zv1fHH4LhfhoYj2LXbnWDSYJ",
  "key2": "4yMjApJpYk22STMWQviZkqqmeYaKk1Cp97V7DhEn6RvMFyZvnCtXrrrFuSGyBZ9fK8ZkNJD2qsYAwcVQRmWGbK6Y",
  "key3": "3N1oLXWWSF1TwLkm1ePaW4LzGsyowXHXjtq5JyKV4B3RzawQfznYhz7MLBceHG1aofXVEbSGspwFgFYyWWCL9q25",
  "key4": "WSEG36iPxPGGcm3LxgdQdjS8Y3ES8jkL1Bkcn2VT6VrQ6pk5pvEHcu7WBc1brNUqv3fTb4ATQ5KJmjajybsh1bd",
  "key5": "49xDArgXAC8e6CM6378QQfj1ZbuHj9Jhxz78i2VBkfzcEX8s9UBrJpztYgbhTQnvBummL7jHos5r4i1oJsqxX5t2",
  "key6": "35iBdr7iG248Yp5J2cUeTde84TsyzN7S5PzcP4TKutbYXDujfqqoDg7QLsJsvwYWYpboxie5SBfCmyQxf1Xxttb1",
  "key7": "35wBMM1NquNvA7meW9Md8HdYQV9oWGP5A6HWiR5eGgPWZRc882PKp3Tj9WDEVSaMkuechrn3FYRsiPGjeNHk7yxD",
  "key8": "3Jw2uHhmixCj2anoF52KMVTKiVXXYQWVBmgzv2w2JGFaYu3bCwGG6dAHQqKhCpnZa8kQXKdmkBMymmfNiEMNQ9me",
  "key9": "4DkB3Bxy8PkKP1ctvjkHiSq17EVmpzxTtL8NMwNoo3fcJC1Rd9xbqPBHcvhafQHKBBTe4t3dmVs6RkPKMvumDULv",
  "key10": "ZVpD7m71iHDcRfyiMe99XMGRzW1dEjBaErDggekUj2iPLAk3jf6jki38VbCfKaPWHHUWAsctkHnz1ua2FNAUp8Y",
  "key11": "2ZNsjGKWR6Xy4sMhfyJpp6H382XP4hwop1NyR8y38MSFZThW3VnJW4VazEGje5ctuBNHtnvmfz78Ak4U2gPCPHu8",
  "key12": "4LeGS41g2wzGt3PoJ4bFKQmk7mKRUEFfNTdPBAuqDejiE4ix54sQo8egu9HtRm3dY1qH46nwZQUun3hNEWQQr4jP",
  "key13": "4TR23p9CkmekEFTXDwXqB5tVTbq41nm7PvnQaubKWdrjYjpJLTzr5Kqairx1wwUBF9Za9zjLa8DzpS51ipxhS59R",
  "key14": "35S5cSCm9MeoaKEj1hZiamZ3cM9bZpihmizrRcd74fpUTxPG7vNj515JbCgYqG44gK1WCqW5EMTew6NRt3WCaVAZ",
  "key15": "R79JdmrfnQgbjwsBj1FaRVWVGjfn9EYP6xJFFr3eiDxyqkoZg1EMUGaCGsXHLhscNuYU7Vm3rEb3VRcy7Htntat",
  "key16": "51oQYpC5W4FzsppQWntK9TE8FqeoFaadxguFWB97WnLu2iyQSgUARSK1g5SsnUBjktACv48ebxc6ii9uHMBqc147",
  "key17": "6TDUropEK1M63xc1SEUURpxiBYwBpUTzuCcHxYkCdLKUGmzgoXMWApeo1NeS7FN1qsrxLZjEjaWDDwdP18x8mRp",
  "key18": "5uaFWmDDsLFQK3FQ9cPHpPpRoPhbnSvmt6JEwkSJ1TzPGpJ78ae1uKK3L6kitNTfXSTdhBNr3GF1kT1HwmcQpfgP",
  "key19": "hxZ6HYFcFcAYKmbJBsLYPw59zLWUayVpUPcXBNSrQgKXr4V3TjLeUopkxX84g6fvwzTEA6kEWnyy73eUuEQSzr3",
  "key20": "VULjeCQ34JJpBZuSeigeQvNZPP5FiLHG4kmE3bLnpnmPLCZ1r8Aaw4XSVxK2caRz16ZK2HHjESSUpHPcgYfcNXw",
  "key21": "gQLi4mdjfBN96Mk4zPLxd1cc5q7pTbCDHWh5KcENMT8CmWiFbGj65thgC8PLxd3WGZDmHvsMTJ4oT328F96Pgiz",
  "key22": "4C2RoZq2QozLGW83GVU8X2iS79W13eoSnerayjcjtrdeY5Xx8MjWbLc1QdvDFycgWko3gkgaKyesmka6QZf7xv3L",
  "key23": "5RYo2QvTyH4PLw7QjrnQ6a9jEAx2ci4n1AUSrMyN6RQXDVz4ZvciubyAnJkBNS2W7kVo9vm68MfnJxin3VW5jeC8",
  "key24": "4mGZLNq4sPuZi5sah91RLz49FrZvDPfKVQEFoZ2d1QJ7ufXAbwbodFryAAuEPtP4QJMZ62HAw6XehK5LG8JmRZD8",
  "key25": "3ZVRx5gaGC1LqTbBCcZjXNjhQPCgUQb6qzChgw2raDf3XTkLLDp9g3Yjt8NsjdbKSkEMX5ukd9aygStwQdMjMkN7",
  "key26": "4mZvzdpYvw58fgnh2Ezc8Us62NKtYxh3MEeSGew2CCU9N3M6CJNumtp4uLg4VhXV6J78noGEnUNu6LQcVgXvMzxU",
  "key27": "21wRNEivHaGsngqAVsbRrZ4zf5GjU56yJNym4NuPM9kdms6AY2UKkjKdPKgKhciA92A3LYg9xwtQK9jXN1FagUca"
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
