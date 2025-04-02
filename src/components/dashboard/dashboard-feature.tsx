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
    "4fp2huHe46qCzGVb8inLWc66jtKtQZ6RdKd8d9TkvQ1EmmiT11NTqvQyzPW9fT7yFP62QtH1mjduLpvSCHPyN8Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZA2HGHX97MMgkPxsk7H8Qs5FcuKQknKvrgedh2BmMh4w34TNAVkohdhP9FMo5qcToQoAZixhS2YSsN8BbAxHe7c",
  "key1": "3TJXU51MHkXK2wG3CBjTpbqNqbpJ9s9kzNEnvxzrvSW4QwpnbccGF5ePkocozdaWBa3oimL7oC58qFxfL7XJqWAh",
  "key2": "3yWtoRX3aVrLdYSFxESsPD2RN4jsfnRRvX8N9NMRpcecd9Y9MSNEaUpHiN8qUataajdYTQqcb4QJwzxYu6rkuJNQ",
  "key3": "3iNPGJpCnZA6Ctfds8j5M9RPxHXTaHfzamGi9cq7wVGPqXmSGNXewU5vnXh6t6aTCQCLBpCpimVMjyJmWrXUKTaC",
  "key4": "2Csf4TteRtFcwtv6UBEiBnARzare7BpwqWjZVa5sbt7igxGb3RgRSGUbuzUJmBYLqru2TJcGz3D6kjH5zKW2DMNe",
  "key5": "5YLaV4VwfLUPzusKVzqLrsv8vbM9gr72tGivZDt3JTWaVj3c8sBvRod9TPbavuiR9jsFZyY4exCHLn8ZYTw7TxSB",
  "key6": "2UxRn2mVn4da1pdXis34Dq7dmR9M5eKXbtfSsobF3jMrwso1kbDFyuopg12qTK7SXGdaiKgTwczbT2NKWwQ4u1uU",
  "key7": "651BsqnHn3vysj2LGUAUgpfJX9kr2g1VeyCF4jC91CLu7q5kDBCMSGgzq4uy1SANgRTkbF8TtZeM7WaRV8kMCKiY",
  "key8": "3mhpYEDfZ3UiAzoMkKNJ6zAw7gWJ2eUecoAmxYwuhYFiqJVWnA27b6hJ8ghuemPW5Lm2uJmPux3oVbeY7DPNHvZv",
  "key9": "WZqLuvqwbALgM1vXa78BDyVQyq8BLcUsz2fnxtndnSzPbS4y2ve4ncvdyAsqRr4c96aeaSh9kUr7Co4tbqQmhGk",
  "key10": "4F7k299ffv862NCD6YZUb4UiHSzdaFJjtNzC9H4UvqY9Yikb5DnRB4TnXGRbuyboVzbfiGLCngGqdeW4zyEs82a5",
  "key11": "TDSThS5WByKbAHCL4MMbxUafVj7C7pRq9GMFpzbz7jpCf1CjLkoEqAEK9yzyhwd8tgmtaqCRdg7RCriw4CBGpMp",
  "key12": "4h8jAiHs5V67Yt4MoKgk5FoVTW37722PqHPP3AfjYT65UacUu19BaQu2ECHc7r4jaewCL6sgodmyZ9tw5J3icuJd",
  "key13": "4h1gpyALTHfSzoXbLY2c3bYXgLvzMEKhkrHnCaT8cHDBhhbxpxWTBHFHLtcs8p4GpPHkqoXahjckX867tTBWx1nF",
  "key14": "336FNsB3avYnt8dQSBLiTXBmfWFtJoo8NW9WL384hQDRA6GbFZXudbjz7JqPK8sjPfzzH5DtfLU7MesBzvdKkWfi",
  "key15": "6fL9iN39aURTsd6YSoyseshApaW7YZexpmwp3VBPE1THnQKBQwK8vh7MxkzYGDFyDgc4bTjLzTWkYnmhoSFNGNP",
  "key16": "4Vr4iUKxrhiWRmAKF6RUgKbTKpkQiTQfxDU4j2nM8bb1cN9Y6rPYuFicoqDWgD1iwopj8vZT4FqUcfeHibCCGMQv",
  "key17": "4sinmbCeMJf8WQ7DAHgDm3AaJnFGCsM8qJcg96PCvcfnKhrVYAJU7bpftZJp8aMhetb2CnecMHq4FiuorVnjok9x",
  "key18": "2aL2eE6Y1REQzeT1zJMJWRbt5Ymd1TRsZKLuTNoiUxebfopgLxDdzzjHDZiDn8oTVCzbjBqrB6Y7jVqDFLmekvpg",
  "key19": "3F5vx9KAjKHrzpB5mkjpVpL5iBF45vjAJ4mKbhsSvm11raPwtUeKGaDxfdLKfFwvUH9zoKyEbGqD8uXg8TbN5SZL",
  "key20": "5wc6oAadwPE7jiEftQvqFRmMjG4eZXt7BaSwmbmhc5Jx9hsNiR3Rn5cTVxCyr5EY6JQgDiUKABNFgWiFtFGhvUwq",
  "key21": "3U7uNuxRLFZqzFzmP5GiokhUjAP7WPoSropmEWonfdb5f3jLg5DLmzeKov5XGNfT3CiDuwdn1DMDFUehFg9fPCas",
  "key22": "R8xZUhzp2k27PbCZ8ngC4ePa3zWR9mC8drfF8tpYMBSbX5vEB56ts9sGvH6b2utjRfSHtXob7j9NYpRhArYdXXN",
  "key23": "5ZzTKDHFQ3HKCektNbkgnT6BgwU8t1fQTgpDcRhQT135J7a9uuFE2TrYw6SrfJ6BPD3ghjM14JkgLFnqZAyCGfrr",
  "key24": "3yVRgTrnZPkQCJYHbieyRqKQ6UwZ1n9cyGikNhfVP1ejdXiQUU13wYFvZegRVK1D2RucQQH7pjegRhGm1z6GLNZ1",
  "key25": "3B47QEBAex1xF3QKBgQqAPXih3vCqRrxp2RMYdguPx27y6jCz2xMe1tsHsHkZhJP2zdKuQZpDphewLNAhZd1u8d5",
  "key26": "65uT6De3mYskpeNJDVUDN2DuKBiYt2teKYUctCpHpgyoQgS9vNGpf6adEogXkKZ5yfK4jWkBAX9UsLbuEWHuwz2Q",
  "key27": "4TfC6igoGe2XbZEnBLKhM8jPxpdLfbA5JYE6Wxob9yyMbvBNRcFiW21VaPYd182wvwnWXfKaSMTu3sD53L7PiaeT",
  "key28": "3fpwc6LNNFNKQTWPfKNxxuiQXccFSyVxKTXfR7qGX77d4p1Z7PysvCgSFkX1FAHdvtUbvBHcgX1jatX4PDnSLP1o",
  "key29": "38jr1MgJyUPEcADDcPzkNhuxuXPVhUBPS96JhGGaACM2BhUjCxNPHMjqDyCdpfUXuX5S6PMfDpThvozBTyDM6wAK",
  "key30": "4v5JkHzmGCqEjS37LTzdMcd44r45LD4qZaBHj2mPVCejuuRn7vnDBhsJTp1FSG7Z3ruZGXEBGw4kxwkpV64dDfbg",
  "key31": "2FeUKe1Ze4RbLoB2gttJHycZT5H6in3FLtkrPMTbVyS7r3EqPr33xq1HKTWFZQjQXEcFbBce9HoyLcv9VT37QXCm",
  "key32": "4Mh3hjUo7UAsTPv7GLofj7Z9aQGjF4oTR78T5mo6bbHR48HsMEA8d28RGr2qWv1NRDN3g25MKynZmKnxrGPy5rJa",
  "key33": "4LaXzjw7JuMV53aMRwQP1nnNwhgfnZm9GUApit6MDwaN6tR8db5Rh7WfxH1dxvYAhmPXejfLhj2zpEHUJiEkoz1Z",
  "key34": "2upPdsfTNC3uf9P6LMWL5KDh26BBuVT2EpeH8n6CX7qm9ESjS1zXSH5uvkaZkY8xj9rZ43Fb5dFFh4yvz6T3FuDu",
  "key35": "2S86AuLrLm3cqmgMdCjc6pLTvjwXz71LfauNmm68XKEaRVcQhU6cir2xh8qoBNJkYwEvhSqrSfnKuy75CNoWP2Kv",
  "key36": "56ro99s9EmkGwzdM7jMzytgis3ePzn9mSDE4Y2LjVSGbZpeKVsC7VEQzBqFHMd1ifxRSyek4spG5QvjiffCgsAxW",
  "key37": "54m7HBvH8oAR4ifnYLBGnn5Ji3Xnhv3HWASuhbnw9HGVfRZaPQoPqCVF7rYX1BLrNnZKaKjoNqEiKxJoYE6qJ5gR",
  "key38": "4YfwsbnWiAXWxW2ppm8RwrnY6roYw9HQFNtidrU3GMevajPt3mK1RPNTzakeMrJd11TTr1dFg3RLW63twhRpnLZt"
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
