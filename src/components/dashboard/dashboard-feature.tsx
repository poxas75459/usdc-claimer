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
    "35occfAJqWRhYLYAft6jGP68LvKHoghH9CwZEm2gQp1cDksfRdSMZALUPZZKdJBcR1dpWduvg81LsNAULTmpoDfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L2sd415Y9Bie6Ae296sMpBC2jik6HPY4h6cEVUqojgCxPnzHYVoRVfBcbRyckpZtHUQAUcETD7uLRvowZUvMxm6",
  "key1": "4n6jAYfSDtK4FjHk3Eps9eB8RtffhGUKUtAxbRh2AxK8ftrzAjU1pHmvsj4qjVPiSGx4v5LTdJ91swrXizTuHPzh",
  "key2": "QfZuaBSRcbG925B94ZByA2dMP4WCPBt4VcaHCmwctuxBMmKZ2XTq78MMS8bP7exDSVKeRKLzwqi8iBT3A8tpMhG",
  "key3": "LFTNNVnq9cFUw61KSkSmJNPbT45ZokrBZ9YMQwPK6mi6upbwysNLpv5iPYVmMC9zTsRVAqux6Pt9mJfzxHbAxrE",
  "key4": "5NqcbjFbeYQz88AZZF1ugdy15duBEHYdSfffSuLgW8Z5ExkHEhuHnTMZZRfXaqwwo8jrXHKcJnkjGLHkYPCCtgB9",
  "key5": "2QSh92gH6QSTeeiyfsTsVYoJTxGgNTWhjCLdS8dbn4aYBytXPkxrTH7CDmLKBhXddiwVz5SMz8VCxP6LADtPHq1j",
  "key6": "4BLzugc4mgAUkAmRGc9RGPwKC51LL4p9KevLQqHQYfvf1iSFeALoFaiUr16ufgMCJ9FygU18fuEVg3zjFZrTbNag",
  "key7": "2crFLK3CX8vkGnfgQnCyAofdHJEW3oQtdZYSqXSsUVrEjdkNNLRX3oahCfjnjCKCuDsnPdRQvTRsht7aF3wFJyvY",
  "key8": "5MJs4ukzLXaL6rmvxNGsJYDFvy3HoiXVEsEdMTqstzVSvWfb63oSJEeTZsD1YzuykoaetsBWCVFjQgTUMCw11JsC",
  "key9": "3KnjztNqxkajZKQogWsdVFLGoAfaFuB1NDpUWkiVGAv63Pok9vePUtuu1LuBJGpVEM6wrSESeu598sJkzZBaxj2r",
  "key10": "2zUZaFpdjJtZ39vqkVWmcde1WbUEKDKQ88JnUovNyQoLaqroQ2JkTtLMGMXvbhpAtGcWAZJsqF4UHfcxFkv8ZzNg",
  "key11": "5HQ7W1nL4ArrFSZ611M4TvsRZR6caZbNcB4vHgagP6HCMG9zqgmTjnHEXHEtFxXqycYVavBU1xCtwWKLizJgTVqt",
  "key12": "2jtdyDscLTQBVCb2s2D43UaGDk63jWedP94f3PhaFFy9P4WVeqXwvrbXr3ouLo3A8LRzLi79GsRTc8nKRUbgesYJ",
  "key13": "2H2rRsJ2ZHSeCVxdsWhoFuL7ECoNMYF9pSE6bQVfZqfUWWzpSu7SK5syGmqqAEg3myj8kCubYQH1x3HG1vFgY3nV",
  "key14": "49FGhzKjfNq3KqtqtANgTTNUGW4KrWr6g5rfFE5D2TB97BGY2bLT6u9hqqtwtH2NDUu44mdbycGWEyD4PHmZEEUr",
  "key15": "njPWW6GgVkH9jBQH1WuFsKte4J18sw3efBJChjJPb6ZZPHsPS5meMeuygDS1LY9LVcx1kqkCtonwTo2AoVXMwXg",
  "key16": "3SbDex59T3W7PhPoJyayWftMqBvajSxMFY61qjYfU3yDiBtxfqbzVZAsoZgQT7dG1m2jiry5SfkFwSmMKDdS1T11",
  "key17": "5w8to7Zi2w1NLCzxdVX5P9f2HktTNTnypR9Rta3YsNn58n9vnpdKn7MbDEh7GpQqTYPuZD6h1GX49M5JdBtgonWW",
  "key18": "XJyUHhq9fHf8w1fqnKneKdetFZUvVLw4ru8KwWV85kkKJdNJ9G4hjsAqNdgYWM7MRxG47evCLjr3RFkz7rarFf2",
  "key19": "5nh5ViBDXooQUnzfeqS29zGP8oufMbhDZEkZGEML7CcvLaSXqqYndjz5pbSifvDJZSNjU2eg2ibz2kkhxXMPnXZL",
  "key20": "5GaLf6DMSiVQdbmFVxYJEEjRyXJ3kdVGVXmg54bK4Xr3CR81uRgRC25szQuiWztMXgjXRtL9b11ibKhXPq8kCSr5",
  "key21": "ehXrja3K66MisSeVVnDDcQxcN1qZ6cb2iq9AaWf9yyocEBdppiJdSMCBhEpMQ3wdwgxya6KFFzRLYx2JvH6Cksf",
  "key22": "3AMRf62zsoAwTSnVRRU41x15qtH2Ya9Q9ebTMTeyim4ehLzTMwJfvDgEn1M3gi5U5YDUcwRxRQJHKdrtMrzf9WvH",
  "key23": "2PWc4T7C4tV1sCaZQK8DjmiPteLGycff4j3LcFsFxrzWU9crfjesY6p8QM7C6w13BaCuEkLb9EMxF24qJ7AWSN6",
  "key24": "628vfL8tH8qSqVvYXdmJARGmXNanmGUH4xsMx1iTgY6eubmJwukYWHvuq7wxspCQQZxmQSL2DqV1yj4U6HBkoDy4",
  "key25": "2DBZkvEEkr2ByeDmnM5WmP7CCtVL2B6K7sDxA91nUn5ALeUhj3uW9DWi2yFZsCzZmAh1Z1c4hnfdAJD871RUvWXt",
  "key26": "5m2GndG2EPYNQW8vV1rb487LVWdy9JoTiVq2UTBNHjBHB2ktWbDKtEdsF61ZfDpk4tt6EatffoekHyydWZpVbmV6",
  "key27": "63VQVgyH1SzY63ChZAVkjHNpw5NFych6gHmaNGJV6cK6QeLXb3s1eyk8AaV7Mwvwiu2T6cA4uadLcCgBbqQCNZKp",
  "key28": "2yADXZ3R4UNtHF8Kt4Aq49SUBstwCfyEc9Pm3PXFLV8oLZaXEuknVEKHtvmMXfzNPntp8BNJUTbbHrRGFRPypq1g",
  "key29": "5r64jP2ubV7fMGziNiTTn98z7bmCuhdDBep5Y985UZ2p2ptTLgKCAH9er2UeDBTmmGW42V94ZG4U614xdDCCdkGq",
  "key30": "4kuUx1iSDb7SrzwnEqE4bJ7oXuHBsuebPkhwut7h8K3nRqjdTuyYoGqRpEKioVMaxwyW4msPkud62r4VnCXQVfx2",
  "key31": "66fQnGQRoA7RAY1a8SLSUJ3P5hrrCfA2y2DmJoU18Nz8mZdkdst43J8ZtR2C6Ccs31b1e3KdMWQ1N1NNf2gkPpno",
  "key32": "vz6YTpzekaZ9nunH2fNQSBkyEFx33YQKwEEUv4qyDRC6NnCG9e4BWj2U6Fa1VtNihzgaHEwkzvgiKuJ757YG91W",
  "key33": "4axhpY1XTdmu4g2bcY4uTdjqbDyyZuKhhsdpc8nkue9YAiGPvYPdUv2Mm6LNDgPXpygRgsdeNpjQeZ7KUgm5eBNC",
  "key34": "3CHb4y1Kd483RKNumSfM7ApYhEvHHRtumPmGQBe3BPALjn3xQZYGSE33sphBnAwmUmueu8GxEs3GK97bBQEoCtjU",
  "key35": "R2n3frEh3aKh9cjfzHGCPMRJB5iKfB5RFSwKSHde1fHV2fEd5XWpRJZ32bKM7Ynkmxea21acHgec9jShJWkQeRU",
  "key36": "67GFy5j5bJ7GC8JNWjBed8Bj5un7wz1TGgDRocdGFWsSznYjJUnB8jD2VLxW1UVEiawF7Lricmnf2v4gzH7usoqL",
  "key37": "5F9t71mrtTLtBATrgvbDVXhzgNXCNBxdzkU7BzzVmLPwp8rSAj9n4cbGAsmacZB1G4cYtt18ip1g1fscvGfyUrko"
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
