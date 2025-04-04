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
    "gWVkEvqX2LzE3hWGrRLjFbihy5an6QXC4x2ffYsCdxgYZcy3szvz6XtPoEFRKmafa7SrunXTZ6SYgfrCJJ7RPm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LeX7RbHBaCSVEzboHPXTMPWF9sc9WNRbanqA4CpDPYhFSTA1vonpQ2tSEM2pe2MMGhuG3VSKQgpsNatxqqrxf61",
  "key1": "234b3qmHfxcyADdf1ZvFVWHPpqq7PhbhCSCRrT4Pac6jccUN7e5MBCRG2foZzKEUNK6wpDXC4td1XqcKYywcMryq",
  "key2": "5JTmhbB89yoYEkrf6bHQCPrJjJKeXR8rChsCNJky9n83TzZs2C9SacuBDm9EQKk5fz1jbtD8ZKkfLmNbnYTyi5jK",
  "key3": "3n5hZWG7zNseNcYS1ipYyoU8KvvKaohEfiedTBkEHovnrcYMRUXHVpZDA4KxGn9divPuVYXnfHzNDcpTxFAMHekn",
  "key4": "4CBMe9811RBuUMfMB5Skkn5aUhKzwZTs26sRtqBPd5ZNtMvMEXecB3J5v4HPMj3awJauJT2yf9rapeAxY5h85zmm",
  "key5": "kDf7erfZ4vgqtzxk4Vs21y6WL8idq2bc4ceCyGLQQBVmtJocLEBabvYSeAeM7RkbKRTshJa28jYMLDPNFpntnMR",
  "key6": "5Q4ifX3cEz5hzo6dUJaGv4nNwHZFtamUWgo1V5zLCiq6yrcSK7GBEu2PfXCJ8U44pSDBhor4iDVxhChJtdbD3m4w",
  "key7": "2ydJQsm1oN7EshjZFcBd6HtTZd8hdk1YJrDBFYtF57eDuKrfQMgTB3HWBCrzvaQzDLJKtjhhkcrGQN8b6k1MJerQ",
  "key8": "2uQYUQbCRxB4wXiQHpCg4gUSeK5857H1Px2geLtR8XU2QoBGnkkzWZquWH6tAvr3xbWhuJdYBVecEyMY5qEAqcWi",
  "key9": "5kXB9bknvEs9jMyPrPMmKuCxHN51fYSpjKz3cnukaE9AbmtZ3xhCkzExurrizdw9t1KSmVv67XhaJAHQ75c8CMz6",
  "key10": "5hzsfcBmXJ8AgMn4qPo6bn4qEjKNiRAJhavBNayZVcSFkBcnp6p7def9FwdCTFJZDrMRNRYkBf4oZykrGmWwFtss",
  "key11": "5UovGB85LNX41FkoUVnZCx59642k1jtECe6Rb2s1BWpFatPU4kR7sygt8AiHnsaab2qNcdHfhYqnspjB5D45Y6iF",
  "key12": "53t2FSEfjtbiMMYcUFWiirGpy1CErkjR3Ww2vVWS6vrCbMVSfJjV2DvX4g1CgnpGhjuL9RC5SztPxSmFKCKkV2Pb",
  "key13": "5koqZ5eywPG2DdNxeLyXtAKuvTr1mSDjUdciLSHbJVnrFXzMh6YTH7Jdayheh1XPrPeqM68cnp1zqYZCeijSsfNJ",
  "key14": "5Mzcbka3rUDwkqw51AqojYFKsU1qUtTuadEeKQcS9p1bmAEGJTSvMTnYEwiCVGR5YSmeCSvUsucNLWfvUxQNgsVp",
  "key15": "2b75TnTCKuuq5dSbCaR2uGfqHUqWE23Ur2hc57V9aiiZ8uMJ7M8wKaVydUT8rDSJfocod6i3rv8C8hKR1dZVC1qA",
  "key16": "37gSB7ZqXMoS5wYaYzYfhxqmEnxKGjhyort7X61ZHLCZrLz5PuFSn5kmCLDLknUvyuDGtGZX3sbg3P2C15bSs7aM",
  "key17": "4no7SxAURrap21PGrnC3oMitz6cZu2Vr2D6Vqc4gNEZj71U5gZYTswFkMfxc7ceeRPY6YQyajZTEqPyYviCww5ZN",
  "key18": "34FnexjosPbc8DgNLBL2oxbfyrKTEre4aYDj63EpRc3iWz61jAQiWABeptn26hTMutMwGDt16ZFSGTwd1eZQVRbN",
  "key19": "2DKafbtfUcgUPVKcnDfebt5HWXL6HQPMmb4kBrGfTPGThW5jDqExag9Pr3HRp8iu1uERwxGDfmYRBNeybqvYxyMp",
  "key20": "TsuDkgYNx1QkR9N1sQXBQUBFjS9cUPvwEe85BWXDb8aa7pk4tUYrLQDJfyJBYVm3EbFtwR4uTHRTC5v4jVDno4g",
  "key21": "A23FPFMezByHLf9jYGMSCJK5nHepiDfovrct6btpNDjAycc8jrnvqcyzhwAKnzNejn9FqEwAjaavU5y3iVqSkHq",
  "key22": "5ndVwTsK4qPu5PscBcNL5Rf4MbhotFTGRgJvsAQHEVwcoS455NUAprGutsUtvx58cbjZ9EFaiNBVETgeWssz1ta5",
  "key23": "5uTQBssRb59MBsf8QQD8mPyKXXB2iwtWLD5GNtyaJhbD8kTeviMN3PBy7iRztzW6XALZaoqUbDXDtTtPXfHSzzhc",
  "key24": "5oZ5QHku9gdfs3pJwRGq45f3p9XEVLRzPoutLQNFLbxNLAw9x4NfFjXWCurAPTwjw29xSuQCzYqMVyLes5gsp4Py",
  "key25": "2eenusjdEyH3n4XcDChVHhevsm53Z2gqiBPAy3hB7ohGfcjzxd9ekRFQt6vt6yvvMgc8YcRJ2CjVChuHRqRVByyv",
  "key26": "otTRCLtVLrfvqZtgb66Zna39ACmkfSEA1BHQfyhirnh1ardMnYnWAsqmUgYs1Wx1qnKF6T3i7PPuwT2qWmWwPwd",
  "key27": "42GwLrCJFgiR9NcrdvioUeRPKN8ibYGCrsAhomMcuwCwmUTb2SV8FDyxiCACCXhV48QU481DHjfB2S9g1WQPaPLd",
  "key28": "31KnTJSEzZXzX98sgQWABgPQeiqvbrioceuj6oZ9C7VPqWmTTzRCx9aFtfYEHb31Dncvse2Sbqx6e9sZLGt2heXp",
  "key29": "2nqkPQyXtFL1WerLtwMWwFDJwLycGxCGhasUqywNCbJmrL4S54GeneWjXporkwJ7L6wPT3qDpb4Kf6hoz1QqCnov",
  "key30": "3ij2GwfFnwEVNFZAGJVJWBGScAAq5myvjYyf4yKcue3kczhECKQiUZaWdU1agzBEAMsoHjivzRievjrPnG87LbtW"
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
