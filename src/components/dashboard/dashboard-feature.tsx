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
    "5SBEwRJSmgrjBGcP3f2nwmTQWZEvUjfm3XcDp25T4odk4vM843gQ3p9wG2CqgeRjLDnLD5PfvroabZBgToYc2Gs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TEXgcbwqGCRreJ1Qu5sgus2sAW2xcq8sKU2F4YX89GsVSzrCsbVD6vnaN7DLZZngTJyajpka79EFrUxqQ8NXSaM",
  "key1": "CpZ1hNCWaZWLLzJV2duFcgKRnKjLPWXV6PaMvysBD1hdGjMy6w1NXV3rJPWSSjWfCTFnotJacKdGQLG14TrXHkY",
  "key2": "4oNj132K5TMKhQeAL7mYLn4bTRHatecgtn87Wb75UJatF3VzWwjKxWSUmyvUve4NCzek7nemCQivfFFNF9YhHsBS",
  "key3": "5BmKoz1sUuyQg3keszCvPL8ZR3F3MDkLvVscsbi3E15rVbusboQKrGT4S3W2tEmQLVfuB3Xik37ygVQBReXMaQvM",
  "key4": "3W35FsCD35DeeWnJvLpsayFyfuA6GUjkyJMfYZF7e7GquNTgfKgtVprCUPZpc1KHyfuKv5BLxoTsPeYEfFQUGptq",
  "key5": "4p4LQhpcbPRTk2Rp7ypunGhb7S7VXKyyyMp377Qxd9aETDdGTDeHt53Dw5RRM4Nu6UU5B43ksyKBsxbQCaFtqdBk",
  "key6": "5H1QdMeq1CCtB3hfmz7W7Zqtc25orH3nJ8F6wRXrQkmp6unsAqjmHUCB9V1ythnT2tcpEDoWGvSo5MtqFTLbQewr",
  "key7": "2nBoqot4kT4EwjLxLkL6TpJiUVduPxXd3mgBQkz9MB96bK63WUNdedvqgD7Y75YkWVjGuum4a2VHMTCQmD8asbGh",
  "key8": "3624mLheE9JbJ1JAE46cE4ohjBXfViwWWY5QX2HGtVYzDZt4MzeVrqoMkKp9t2J7j4mcw46eUuGyYx7RLDeZk1jc",
  "key9": "TBMfkqKVj1LQHeca6i3LsGZbEBwPx7JyHG5wFgGqPZnL9FbjnDbrLkX4YHLFK4u72zKN45T8WJkFEhHYu5EVaER",
  "key10": "4p6cpEJ3sodx9Rr8oqR4zeeokK934hp5wBYxPeAGaUcTZn9RkAaGriZcqNKDSKgVnxuHbEVFgzRDkT8paxGUn4iW",
  "key11": "4Nmv446ZqwfxLMzpNSH6SoKvSHGMgqfHii1ew3omsMFTbyAZUqEeAmpsUZ6AKhskGaaMv1bGvo5vtQHo7HiXvPe1",
  "key12": "21fBSzSuHnjjsMVU6tQE5qJmobtg1vkkJLqbGjRVwHTL1KQLySckchXAgbiKi8KVHhxcwTLdN78KhpiHUezaRJvd",
  "key13": "299J2CN6nLc8fjY5nJZ61ivabNwGMXmQwuDNTBFc55d3QXmkPYcp4nNdFK44fG8amCwhYGzecpSzisN6nALHyUoV",
  "key14": "3Wob1tQbSNYYSZ4jkHFGfdx5JUk5mfCRSDvwit3NijbA1bdPyzjRccZTumpCsKhDMb79ozD8XVtcGrnqjwoG7cM2",
  "key15": "5Er22noaFewD5jP19PLYvk47caUDS84Axiq94aZM4CQFW7sJRkt8dmb8ejV3qbjpckx2C8xs8acrhn7hZmSM4j7i",
  "key16": "4xaCyNQ5c7YATqYQYdotfkw797AHTdKm9RUagrPug4S3v1dqJMeKqPr98RL5ykqvuCFChoaWz3g97Pyc5gBDhn1z",
  "key17": "ovAwLuXTUVeXNxpcDAkaeqPhPanVzYCDv6kWqnVVEhNDNertdHAiHt74fRXJYnrKQYVRXG4a7bn6tpq99ePTEkv",
  "key18": "3UcpQiXEW4zLYiPsKTesPuRa8os9aTXPpQ9Sj48nSactDvYfLgDdF14gbJpPHXC7G2E21dpChEVTDMes6zVLXh9i",
  "key19": "3ZLALc3SiST4XT4h4NtKEDTiA6VhoDgLS88eCuexnbojmZk8r6e4zoAcmRnrg76VYi181WrnyDAucftEtNB9Pg6W",
  "key20": "5EAbBYMguQTE97oGvkFsaxp8wk47jKnB4G3yBttnkmshfM1vwstp1v4BJdoaUmHk1c1s9QzFQCrJX4VzA3AUT4Vx",
  "key21": "472Z528mHnjR4Y8m4H4rQyJCRF1MNtkqsqbvXuW1xUrKFrSPgfjKZ2DF7LxT3iGwSnsJQT89fp3vqXKVCKMLtYwF",
  "key22": "4d71DDMfh6AEThni71611PnGcQqzgxgNhVR5WbvjwtZSVdmbe9uyJe2yQmnZAUjU6pBsnS5CWZJA39aTLjEEjcXg",
  "key23": "5i6dAxVZ5CzJ1ZsVcTX1cz78dfN9TyTKpsHRqB8j9wCYMiBKhGkTtbAZK9uZm2rd2nUd74LyVVBEsx6HSxsQ35Wj",
  "key24": "3dAoHmEFjHXyYPVexFZXHB8k9Lo3wfigNgH1MEQ2Yt4mHr4XZc1dQU5mRLNxaQ93irGipuh9PA3v9RWBoqyVrF1h",
  "key25": "ufuhq5PwKJ34XqJU28TWhKCvEzJiT6mN8sL1jNdAAQ2RaJMg69FD3SXxuh5XCcr2Z8Y8fesoBc8jebQygSoGRc7",
  "key26": "5zywJ1qtVSL2jcpfKF8hdAsfS1TqoSDBjW3aAY2Zab8g4Z5CvikcKy44gPF5L8bsbvi7d5cCCN5XcFGM4w5WxqGs",
  "key27": "55RDuLqeGoQcAqAaZuX4TuARGFgDymCBJquYLJ3EWhGZdPrcSR9MXC18xX6Jie8BVExq4k2VT1bEQ4Mq9fCmLD71",
  "key28": "5gLAf8nSrMbtrebafD4ZtL38fVLdD7DRAX5KMWRGhadUfSTfQbzpMM8bxEnBj8Pa49w9xfvGqV1ct5zc3dt8SZYh",
  "key29": "3osdMqQSGmzY5FHxLuUqF8DwBALUYdqd11mnedX2wWLnL3GWToUR4EV7NyGdm82TcpacBmTaxczPgVzigcSWptid",
  "key30": "5pTqqQwUXdM9bT1TzsUXrZf7rGVyc7QUnPjWLugf7GHB39fD3hyXhgNiioRp2f49T5Hxby6dvzSF6pgGveC23pbn",
  "key31": "3aQ7MNgD1frSU164paUwUSusvW4QGBVj8FrBs91HDCgp8NR8d98Ptpw9DnboWrypG9Jd1q2d1TB4zFdu5cPrxCHg",
  "key32": "3QN97eojv1d53WMni2rJQYm3mjZhj21fZ5ARcsd2gbMjoWY8e6P6ZxY1tfCYAwkxQaxnmUmLFmBHHC8RgZPDszme",
  "key33": "5MSCTenmAgYeCp9hCvQ421cL2hdFENXCGwcUTDVg7v2iH7F9mouXgBFNNHV4rEQvTtGnEhwFAGQYHSPygZNZjgNH",
  "key34": "5simxbfbZ6RckdCjtAA4R3zQUc9TL35CT9zECeccas3jHcuMqZKyKF4hTa5vmNYti2T6iEUZJHAeWfjKed5hNPNR",
  "key35": "5yLeLjjNARU2PNFZzABo6jSKWwRdvG4uZjLc4U9NBj4RLJycv1yxBpxNV4PJn16A27ans9x7XkTvmCiYBfmjJCkF",
  "key36": "3Zf1DeBgNyyLNUGzqkhCPuSff9VhXjp2x3KVbydYopoXJaHj5ASkkMrVRPLNXGmH6eLUdGBiR1bfagwYpBYuZ9bN",
  "key37": "27fuxEPCbJ8eeH3ZSRft4tUHYQE2dXA8zQnRL9LmmsZJrSLzj4ozAxpGLW2hXNccmsj3a5k13U9e5QVscE9ENuBQ",
  "key38": "4XyMTcL3vzdixVPpwAL5QoZj5caLFYmR8KEpxLbUu6UnEJW9osxZbmwWgvpohBT2atkcjqZCP64inWMwFLxjxg8D",
  "key39": "4W7DzitfjzmXE9hkp154dD6zgKR8k3af6u1Ndhw5yZdkqZAh9efoiA3WvG3uoPgSNvUzPvDxTS15EZgBo9pGhu6Z",
  "key40": "3jfXjXvosB4sVRGgjZsjjdM7YGsbdHyBsmHcKg7jpXbWgyLXUv1QsaxwX9SkeNWPDKnGC6HVoQRu2AfZgSvmwbmA",
  "key41": "29JGaYH88MeJB8cGZWxWTrx4LzyKinb1X5ZzAV62fqL8qx83Ebs2pKBJpw2rn4DJm26zogXkL3EfF5Mw96hqDBBF",
  "key42": "2b88zon6FgcPV4xgMnb3JFQVvuteA8aH4giNhvUpcp5VEFh3yDrvq2Rpf8s1yrN3PunY5n71RMsdvsLUr8W5mBKn",
  "key43": "4Hh9XVc3UWP2ZPswjJ3wt6mxYhdjniptCtUQMFmEJ3cMYpm3dJrbBa58URiGAK1BtR2SJpNhNRV3Sevrpq7u8XMa",
  "key44": "4DGTHSoSe6Qg1dhGBkue4YFL8uR3YPq62W4t6y37VUqC8ZZn7iSGiHD7fWKYZUt8vJpSUoA1WZk2EMQDR8patNHa",
  "key45": "4iPgwqnm6DftmgWEtrL5hfZr65is4hJPSr2trWu1i2eZJR2jvnVa8JKPNw3xFbTHovXX1SKrca3q9qZdkCXfMqpk",
  "key46": "Thi4Qupx7rKeCvJW8NUg7Y3EFbhAXNx1HKraohXGvoVEo3G1GZZxtP5gBmQgb83yUkXyNj5Tvn1jrTeEXcps3ky",
  "key47": "2XXGhF9NcV3KqXebKF6oXYXjhSZ1NGpcJb2HXVrdqd1k8NX2vcnRiQyfGeELB2hE12dgeT2kDtptnPuCM1caFzKP"
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
