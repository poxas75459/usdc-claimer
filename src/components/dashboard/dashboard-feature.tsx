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
    "4ybVqNisdRLCNcEgj2yEqaYosLQ2kUiZ8dSF577Cy3Qirt6jiYCET8GsB2QaMv9gK4huGx7vjVQGYwJx7kG73Gpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhfVRrAWjwvdySfYQvF3RusW9f4GpQqsX53WNkbLUSzqC4rsbJiA4EAKP3XpDWDD5mGGymbByByfLQCVajaizNy",
  "key1": "3Kuo8LWrtTUJhFMz8B4JurUNqVjQXsjaXyfRpE6R8tqQDhd4U5T6TW1yTUn4KEF8UwXMsFWp2o22jcsBx9VQk7h8",
  "key2": "2933Uk55v8AGCjcd4ixyJ3p4tResghLays4FSKLJJ46EWAG7pDWpnhzWSy5RbF9rD1WMz9RQGQVK7kgkNEvxkMxx",
  "key3": "2XVwQXXSemmH8SC5szVSxHqB3k15KdFZkT9nhX9ALinZFLZUbdu8P8NSbfVN1WPN9kbSa3kZY3yACVFgRXkVD67v",
  "key4": "3gn3PxykKZSy7SYeE74QKdvCT5qwVHf3dxG8GWBHane3xL4mfLWRW9zW8jJS1igaTy7Y83unUpw94iGmHUfagHMH",
  "key5": "5DJMgHgzfWK8USkxjyQCGZsgqkSepkQXHAZM8HRZaaRsue8Ypqq9x7S1ioUmrzUfRrY9DqVSinvR6r9nmQTwx8cD",
  "key6": "37vKCKA5d5gme87WJS724FWCqpjfP9o5DEVAASEJqfk4pXuQabRxPUCFnL5uLofNnSSLEQxCerVGLQh2vZe5UWBz",
  "key7": "3ffd8537L6Kaag2bJgjTqFQNgydPhYMJ8gJCH64AcysUYfVYvtpBCyEaL3QeJ94hN6FHFemMD2uEnR2MvpEnyjik",
  "key8": "39gdug3vzxWGVnFSbwiCXXX6hvgkGR6BZti1zZSsmmyupeH69RYH1JVRDoUJQa7dppFTmecySgcgrhLEYkAhmNvV",
  "key9": "3mBnQDducgGSTZrwvJGR1Nv2xCeBkBUrTXjBzKdn7YDtxkZduhiZdrAnxUfsKG6PrcHKK1XoxJY8NPWqQCeoHYaQ",
  "key10": "4W4VRS3UCGPVpz3mXVMpC6ZPE2sQ2HjYKtSHw6bvrq4G8U7H1d3MyTe5uoEejA4DUAMrPcbxtvAQac3QSnkAMacV",
  "key11": "3qfPDpk8aUR2cBvA27dyhSxiCFqmbCZRn7wnwrey2LaDEP7QsDrSJSM6PfTuAgw6myyCz53H1EtVRmVuu5bGkLKV",
  "key12": "3iH1zD4Q5sE16UqBxfGNo6LEUN2RiEpfS5hyh2HkDp5Jj2Gr3ETYKo2suRAbac4JrsbXLYiTFCV7tcFXyK7f1uY2",
  "key13": "5Lb7dUZUTHHTB6apjt7dtZNjk2V6k8tvwqUYaEAhodkrcmMk6yLf9ca1neSy5RMEoxB47uzxHzsotVZJokQ78Q4e",
  "key14": "2Wq1CNYZm7S86J2ute16yX4aMoXaYNpuxbA3SWYrx3ocgSoKf9XxWkrz6UacDgi1RnsnmUxLVAxRay5fuNkamz2g",
  "key15": "53opMcsuk7xj4oJsicSbJs5fcDuob1Fvs12CA7nsU1Mi2BPGLyKQaqefZrK3PtHpUeADizJJk5uBHYiSrtMZkFDg",
  "key16": "5rCNupqzNKfB6X8kDompQvcxEJVxkDEXsdojknwsQ2qmieiH1rVDCekcpWYMZn1GD8H1X6vMhzg5ERdCaSTdnjbt",
  "key17": "4DCvjAyxEswXAHNQYQ5fTryP7xtf6eTnduDPK3zCmJdd5sUgXAGvrCRGomskdAYo27yS7Rnj1ePgvfvYgJw3QmW1",
  "key18": "2R8Xdtmyhotw7e5p1s5MuiygBSaS7tWY7uvZtYUabKZb2XNTgtkjQASPQkCvH1kTXBtH4yMisSWLwZy8G8LPu4D9",
  "key19": "2MXKPKZiQLJYn6JeqAwVM3qZS2BiDAsLxpUPzkDUUKngzwMAk7YPGREdNxX6zAWADBXyCQsw1ZLM8uBD7QFoYV6a",
  "key20": "2otckfzybkt44jmWS5m1zY1PQx6VTYU5A6V4LKYtN69gqrCqG2hdS7mPG9G1zmBhu7iDetUk1TEVMu1vuzFEhMd6",
  "key21": "37iRavKXiHZ81VMR44fHMfiqZRQqnCyBTgf5t7eRTSh4dRuNqadH8KwtG2oTGJ4V8pPPgEvgn3xojByjnhTvG2XR",
  "key22": "3kW3d79zermDG7oqeTZnwZqWMYrua5obRjsh7BwonHYfNqQnQAQ9XJ6oC3yqA6ZKh8YG1QLGZYgzrAJNGZDmfQzG",
  "key23": "3cnMLECHZN6iya714KqQ4wwTaJ774aNYiVxBUh1TB7UAbkABDddvNnYSMr3uw6tYidDUbmbRk1NJr3o1ZJYRiheE",
  "key24": "CHhKwEvCTrauYpBP9xo9A7dRGt4gZbHzW7GwKPKoaziEX6diBkkQvratXi9tA1YbDboLExtsXvzbAL751jW3hUh",
  "key25": "3XswcjXpHG82VpWR6vHx3En6qtQpjzMCp2ZywojGcfJLn5zRFD84Jr6M3tRMBKrgopHk8F1izbArEDnrdrJNirf",
  "key26": "5j1TBx6KqjLaq2vmGTziUCkQeKtm5QKsqje2uYWackciKRHJEkKfdqMsYVDGhpPq8G43UJJ6YinZtpd9B12SfBdz",
  "key27": "67Cr83wJW4YSADq4ztp7WFVuqxMisUhPjimGjw1RUkHeeg8kmBcfHBVhnqEPypN5Q2cnZvBQEbAMvHFdKV4Tx9sg",
  "key28": "FujCUWj5ULiQTF2cmhVJZo898Wg43mMZPZgyYgFFcbRTiikQkDnnSx7dkAuWgUEuSAMGoMvdkC2BqP7gAFbbrhX",
  "key29": "52G1zzBseT6dg6GGLLcumnmQkpfJRNXe3xLAJzvbEYDuYUKbP53EXdMJTAL9Gw6D1Fjt926DkNzNZwGL6unk7s3f",
  "key30": "3L1Rmyj9sStqe87oVDryk2eFVwf3dSWdNiHnAGuMdgxSGQsyqcXyoGJBt42MkZXxNk6ADRV8xM3iwTocZFgsmG25",
  "key31": "NAmBPikjhnBmoqfrjk4p5B8AXXNMYTgsNSUujLaw69pyvmbboE4vKhCQGVcRGVyBmGdmN88Sq9Betg1P4zFgVTH",
  "key32": "2UsCeiy6yptHv1HgmVbzkW2pdMMGdYCSz3Jp1hp7zKpyjNQbscZeBsX9LpKcyTEMJngHT9252cXfoko79xG4Aosz",
  "key33": "5FCCpQQ5JXzkTTqodqzab2tEDVTrhzSGBCaJBXvmjsBQjmicyRj9g35LexfqcPe3RuJ6146xTrLpde57XLNPjRtF",
  "key34": "2FM5Qnj87UTewUHgfY9SpEbxbWQMSDYMCaGPJUzCrTg8YR19c4AzNBd8ao1gWPqBf2t8eR76cCVDj727s1o1gVib",
  "key35": "2dRNbpcTvRW4ggYomjvbS48dxBwT7P1kkDAvM2krCYs3QJMDegQHpxzxFPzQLKFmWmaWstijBwmhbVKbabwGhhoV",
  "key36": "2tqEvjUa7unFDHFzyvvpMHbt1EM22WX7sVwuWeGyitP9J4qzgFvSKfHKPLuGjVcGViyZdrJWbGdX2KXdy52iSaoe",
  "key37": "3MgtKCV31k8x6GmR4dB2SHgBgMGZ6q8x3DBUhtbuYpuapYBDcZ12EQSBmCtzCZZp2K65fJMzd8jdv3ZXuDJUwnWq",
  "key38": "5nh18AzDVV2CBVZ6LtaBnVo74TKgfXFgbAZ35aFd5dXkM1ZS2WEwk2BdZ1WPG3MTH2xB4pLsHNzJwuXmCvh5uvWh",
  "key39": "4V6LRgpVEjwt4CYJ7q9bBdvKfNHJiCfmLB2hmJKvsRPhzpSKC5nHon4oWeRoHPSpmDYcmAvZTW6RrtmhP4yfV98R",
  "key40": "d63GJbfp5GYGPU2YEK5M6BGGjUzJSFe6CnkYbQb8gMuR7wpC1ngj7f2LJYPP9hRB4qny7C6svkjrZnYeaFAMNEv",
  "key41": "3NaJoiAut9CbcDQdH3FeCoKWcMdACbeMkf3FtyL6sHLuDAYoCSPGrpxkrXKvdKSCxV5u3mEY1u8UPhc7oZVUGghZ",
  "key42": "5vG3YGcFRRuk6bEUTmoDSMBts85RrcdJimxnP1CT2KWct4C3vqsnUcZctTAnTEZeEMaL2HK9GdAmyp8dLKjumn3A",
  "key43": "UX3KQNNFQFoChxebpT8x1gCEbFCpUMjnEL58ZsJhDNsWbViLJGDkHV7Cr5fk2fHmP3GVg9WfcrPvkkfvgrLeQC1",
  "key44": "54mACvHLjfbKgLYymmQLRTMkyCnqyWizbqC1HVtxdDLtc2k93WMKfSkSfqU7RUTrCwjfzt4xKSJ5Ao4KWcD6mAa1"
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
