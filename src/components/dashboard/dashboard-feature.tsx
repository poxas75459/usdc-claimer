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
    "3SVFSDc83yJB25uQXEEaTTzS4dAGuEDb6zecBkDZ4kmtT664XdNaPu7uFgRVvvyB7pj6KigTCYBjW2QMbVTn47FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gerUvsFiPNddkNKbMB84wm9Fjtz3i7VnR85z9gLjfnLaeYhRsAyUHzahwbhAAdcukje3w7J8LvC1kTCWRMP9gpn",
  "key1": "2wieZFvwY8y9Bd8mwJi2Zp7WYuziQDX3xusTqVdYpCXKFFVmc5TdDeykPmmGLbDia3y36RV257B9t8VENCrsCfz9",
  "key2": "4KRDks3x8WiAC7SMzqxQViwzsZQjPudQLBMQwfsVVL9G5NzZQNatDUuWdvExHKgqYzRooR6ag6QBeNbpVkYtUoai",
  "key3": "5Jkv44NEYNKzQUhpJG96U4ZTFt7NTbwmymeQLJuYn5quhxqfPiRMa2umErnZN8TYkgxkmKBsxxHDFrpoEf1SggDT",
  "key4": "56Rd5mJi8H6eaJh73t2mSPep4GmrdQtkuZpS411m5KpQqcGMFUdJpHdyk2A4jeeNQyqjaFEDtNL2qV7rhz1wTNHa",
  "key5": "2udkW3UJBEiGX4dv4a3uhLmuEbZVbm7zT9bDxKGuwWZgVQaaAowhk3AtMHw4qNbZKimRbe6b61tuNRfjn1XgdiXG",
  "key6": "2yZc2miEHSs83FqjqTsWGg6Fhs1LZrBX9d5hpMkUi9QtJUofq15oDGDFzZ2rgVYaBSsB1LXstFGY6Kdyj34GNQNh",
  "key7": "5BPFKSmdB5vYawCVv6CtLs2WwM4p4y7dPBQ1wnEWM3u5gADFsE2SYvJMqgDaRFPRimoQyb9dsMs8fwaNotp7H8ma",
  "key8": "2a7EnmSzZ3FBCbYxrXr3AYbhAeermcSLR3LnHdCe1kqiuLFxT3B3G1e3fJt2RHPKZr2JS1GKjGFpDTBFK4eMr7Pm",
  "key9": "FVveRksqehyiAw3MC2RCsVNkaZVf2BTjTARi94xZgGwzGUU8Nwo5pYE7Qve7kCQdiJBVdkbNU6a8Gu1qrjnpyE6",
  "key10": "57jnx1N5bbn3zUC1jbXETm98ssZGVZBJ8bsjvNhoLvKAPL2VrQQV7nMAtY7ZvGpMfcK4i7uQvaYfFjEzbqWMKcKy",
  "key11": "2TDRDJ6pbVXqxY68JKpHQyKWXJFwGok7oeYzWa7UXNuUPPG1FGYxa3XCWsTL3VN2zXsiyyiaRVJuLovYUiXmt1qg",
  "key12": "j5rfjCCokGq2PneV1eiJaKCNAvv4pfafTsi7dPEiy7fZgZVjUzeH4cQcGhoQwrtuZw2zgN7u2WNAANXFy3Q2QEK",
  "key13": "5ibvBz7PMiLUB5dmUsTnABamAdx5NRLmC44b3iAzYbRN4zcnDujZkUDVU4nDZULcUqhEgzb42pjHMeiztN1bmSKc",
  "key14": "4ruNq76qC4SLLaruLSodoh3pzRVxdTyPSCXSUm3fepFdkficrKDBd3g83XokbU9xBgTbRkD2UH5j55SgdcbHE9DF",
  "key15": "3DWRSeq8EfQkNcYo2fqJANwjDLB7h4bowxQWuV8FZVY6uE84Ya2NGbfVRz9CWbWAQRmxUZ98pAo7P5kM4TzFpjgf",
  "key16": "2NvxqMQLVa42EPfdSdveispDb8RJMVZirBaepjGbK4gAKRq3UoBJcPw1uaZBuiTUm9ryCQNK1p258eS7woevyFtT",
  "key17": "4TbcdH5mMZ5SjZydTgUeAhjZQUGENfAb47KiE27CADsFhP8L1ysvu2xH83CfB6cLVeWDLxq81kLNhAiKuXgaC2Xz",
  "key18": "ospigY1n3pSZRU4JVrLbetDrmgYsboxoQmg7kn6ugDFwm4ep4pVq2rMWgocqxrLkyAb2WiArr5G5RUFQnNn7v9E",
  "key19": "4813bvjSu1xqtMWoa4dunRATJTL7mAESBuzuX67gE6hyfggaMJwREd93y9EAy2G2SmL52fxs78GM44276hDLeRNx",
  "key20": "3vDuqBJfLzLaKUW63Ss1tofvYifLUoAwGX38WqPXxup6YojBNp2hN71EeKq4QvVXnVoKzJe8pZ2NdZHx5t2oDRJV",
  "key21": "5rLs7vVJsGGRhdtSen4rhT3XuGKgxczGmRiFrawJ7QgE1HmiYqCgyAcfs7Yg9eu7LY3fLDTdTpsf1qv8uyYzNrfL",
  "key22": "27D6gWq2ZJUvZ8brKZPAse64chXVE5TDCKSxBBVzsfEQt6k7x1htUbKTgfjxuhsF39Jq98TcAPdcj88oYxyDMoxU",
  "key23": "5HjQPqTTs2bqD3DDXhiWiYCc5xLuo2WbC37b3DsgwjPQEbYEd73EELrEN2ae65HCVAhRG5WXRyrqCnQ231vP8Pk2",
  "key24": "eRbvseDXQF3oT2zzvaVFQzC1oMUwCCk91WF1x85HWvzFcu1BLbLzK9b1nUgmsq8nenCRxA9nYN5j8m7HB6QmL7D",
  "key25": "bFFMZTWrBmYyAamxnkhMpDcZf5KTzin2UnvoGRfDfqcU5ep71AytUYdviR927tSxhbq4uS7w96jAsS2smC8KH3Q",
  "key26": "2gqrqjPraf35pFLxVmeh9Ca5KKLqMwd6o8FYKzBzMNNyy3kg71nvnr7VHXfT4mKbZZkFMLXSnzD8vxU1d4fdnxpJ",
  "key27": "2XvVwCQ4t8NffLM3ESrKAr1YeDXpFE76mc7tiSskZHqPudHjgMdE2ExvcASLfSB7geew6j1z5JTutZdMLXy3UJff",
  "key28": "586MuNeVxWE1awfxmArXip6dgHpfMHuSyRkbkswK3Y6roKWVafyuowTSVymNpaeJU6zw36MrrQT4YJExAB2hSXWU",
  "key29": "3PKbjhgsg46Za7JWzZXyh3UMXxH1Q5f4WSrjeiQfaVEckRFxd9sPw3XCChpLsLYae4PaDf3Cn7BZLbetbNHDCH4U"
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
