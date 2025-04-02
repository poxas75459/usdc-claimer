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
    "2nkE5Z6BstLiiZze7KhdZHAqiJF3sPR8SnrvVfc4U2rUPNECQ94DJBySfzEAgXKC6U1SVnjbxiDKZi6VncecxKHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZDvYdkWRVEZvBUFz89xM2U1jfZeoNnh5guo12rWUQ1eoNtb8gTyZjw2JSA4rxqMqU13ERgop1WBHuDZZekXYHi",
  "key1": "3LAFFtAqsKDNba288Mj5ehrkyWxw72xhKBF3ci7qWLSWbrYd1nYvMSxD3rWSeu8vKkBZ2j1bpj5Ehg7Wx2HwFYoq",
  "key2": "5yWnv7Ftuq8rFCx48BcYaEP3bXWtJrnDiCucFEqqQcvtX5poGjQvkrRwAQeZvhuBb3R3thrq7N9gDJEaefvkoVfQ",
  "key3": "53C6HmXV1H5qJwSt2nggFKNXcDEyRRkrrXQBYPFrpTNaTfX7BXAmuLHVjJ7JBBknvPuVRRhWxGXtdMvdcujY3mtt",
  "key4": "2vMegY8w4CP2k26m4XFouwo6dEysrtg2fAVu7FZaDrshxE6D23kWjJYpciYCC9UdS5UsQ8XusJiKhP13CNRXqeGF",
  "key5": "2ifwJXF8zH5FGHKVM2oDpvjAndTFsxf97gncwjGLHwZTuWTagb1KmrYu8s1jeENfdSusCsdy1LAyeC3shwWgUsrZ",
  "key6": "5HGegcwjme51CkP9VsoxQRT4AJfCCZ6ynKhbAREp2ujyzd8XiaetEzr6jUvwJDHjyhpKPiovDjtQBcKvVLP3BeRo",
  "key7": "2uvHMNkS8HywNmV8Mob2phdBrvRiSYtpk5MXuTHLseHpCarMks42GUYeeby8qXX4cTn9TUFe2VBJ6g2fjBBQnHRV",
  "key8": "5gvPSuAdLe2NMEbfdtoNopsLJaVwDEMgyMvQTZNiggUxS7wbYnK4hWwcxVST2Wivyi4Bq5gW7AHNjVC6qqs8MpDX",
  "key9": "2CBdWX55P28Q8gYRg7F8jEL7EDWPnaVajsVQ2oFTntFXD3qkSQCk67K7WBavUUSM5MwfZ15nSpvQukvS9mAtFHty",
  "key10": "4PQgT99Ryubrae5Ayk3PoDt5ejQUh2E7wSmz4wf5p6GmLiNmKHzwUsFCPCc2mzGxqMJcBvYtxD974NUjZXeDhTdc",
  "key11": "FWnZNPwDuYBD9eRU8cvKjS1ijTDFRtMVC32zwnc7D7wVJAdXUfg3iLVaGG7Qr6UvHrT6aEo64E9iKkmRcFLfZSP",
  "key12": "2gHTmvbXgbCVm15oDbDSzCevSRKp1f9ouJzkEpKkwqSKtGpZXAaVPnxMjy1XhbxXFysBCA9VSLupgTPx86DhEkkd",
  "key13": "EQZbVsUZuNTvaSjr7AvgYK85zyvoKGQcG9YvaqRQigrAnzY3zrYDDAxwsXAc2sX9Hpv4nPhty2SzsCgqCKkQbbj",
  "key14": "5hFaGYx7NiudbTeewEr67Kf1uUdC2uRLecic1itXmdvPnkFbWHa3eSXHvEtusQ3t9NS7N8kZ7py2rP9P3rygvrpv",
  "key15": "2vKPeRktjYZE4WQRJNdfQs6qNARqXVKYVea89pWv1nVo1QdFvbJa4hzxv8Da9pJLcjoRve659XJfwpq6K2ySA3pc",
  "key16": "3i1JzD6JUDmnqD8HfyPt6ktxkeZmvGdW1GtLTtsUTH7JBWtTwwwMkkMdqeXv2CQTyAEfgeuW8kQey4TTTHJ8WVQZ",
  "key17": "3BzZUd26oU5YoVy3jo6vZa3nqC2Ypi6LpSp2YTf63Fo5M8TSCRjReph4scDtkSRvwRerTBbdDvWMkZyBQ1fsi1vD",
  "key18": "5ywEotHjKRFRNBTNNG5TSdWNMk7X6wE6RVTMSNX63m5xcpHAWfs1jCGDYVEoBWKMjDfhLaffTYhKMbDiAZqxQ3jV",
  "key19": "37oBHPhUVuUCiBDq3WfzbhgExG2fDL9Dq73TaT1jbK3TQZG9qjMj8t2sZHpUgZSk7fAQAg8dfEz8UySkQVawqbsW",
  "key20": "4DPKrYn2MJM5kAuZxU7FSWnDjYFBeT7UghgxM14fEmiCMaDQanpUkAY2aFX22FpoW7vh34cTZgysxAyoCSxUwpc7",
  "key21": "52Zd2fNjUk4CfbxNBPBPW3v1kUGVMvaM61iU2xSo8RVYx9yW3NvECqmUEh7UJFgj2s4SyeHrexbLs5KVjELKm2R6",
  "key22": "36CWWvBeX1NSuoz6zQgRP5FERyQMLL4iRZ5axseqkKPkzUDLDTPMTUr6eXTN3Kr9GGhXPPUx6eeh8WXSWxWm2geC",
  "key23": "5p4VGwQCxx2g9Psc4YH8FVqz2JiaqPMSBA8aGYHaamR4pXSEnNuZANv7tKZ4WaRug6mnA4Nh6vhCAcPv6PdAncwL",
  "key24": "Smv5tDB59C8crwEsgTMbPpikg6DpheoX65NKp5muxEXt6b49rgWGrnpMWHX1kcbFEXcNmFJg8S1YzZqDM8KdKZP",
  "key25": "2NkxBW7zqagnfArkMtCxeq51vAkjPQSY36G47x1S76PSMSyg28cU5yBsed59Ww6riDix3hwYWkvFRcv31G7H7V2B",
  "key26": "3X3a9Djg7Zx2ZRvQJ6U1pA3KF26gprVmNzYS7DUTAsDszYndd94BR3WKz3C9iSC5HnEftkh7PdewDmYqmqZB5SKY",
  "key27": "xBzi39hGXV9agWxLomEfS65ooELiR7gwLKSvXHW8mx5VEDHWMFXinQcfMF2tSvNe2gcEknPhrGWMuRDu923Yz48",
  "key28": "5MCPmN7DmyixR1R1Jp2hKyiew5LmaxnZLYXp3yUxBrpwfPFYPPZd1oDWeUn9sesAApuJdTRHCbZDhiZkQb2Zr1JY",
  "key29": "7rkUKsj7eJHx65PG7YMDbrSL3RZjw82te6VvkyV3UB6RqHNmLvmmgoorPe39Ltx1myPw1umBGbQxmSRr2sPZSpZ",
  "key30": "4G9PcgZS3uf24U7aMvVgdRVKFkcCLZrw4xkBQnBohkgB7ozk3gy1LeCgZHXqcEj9qM8bHyVqZQnupqXeDWAPM3M1",
  "key31": "39fsiidwod8at9RDKLQnP46T8VrndYM1iZTseH5GppPcu7gcMCosTpRsX87aDAu9455S5pJ1rLX3auiS9zQcbmeq",
  "key32": "4NhwzRTkV6d1ZY9YWxrbXgvwkaTZn2VjBUKakAKAAv8rPGCHkHyyE3MLFWEaduJyxcWV2tc4dg6b9Qtx2DMb9EQi",
  "key33": "V77k73toAAbUqLgDHCU4r97WaFzK3isyfQXWjFjgFCRuB9brVMf2ngZHC8y8tjKre7aHaNuNoNU5CpKvKb7KxVa",
  "key34": "nynnFhpUPshCYGEhTccKgbeiPDFqLDmUW1W8EskWvyVBGBEEqMDfwa28RpRdXALCtPdzRXU7cZ49DpGnHrHbJNQ",
  "key35": "35EZJMyHhnSmcFqinYKWb8hq4h6QVqwnnaeBpjQ2URsAmBMm5muNS4aWZdQoy6CfYXL29rFXrdB1qW7kXLn9CoNN"
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
