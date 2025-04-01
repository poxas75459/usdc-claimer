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
    "C1Qoxb8WsjTAbLriaat8hxUSV3YThQetaeTrrnKQYdh66iNFBXCeppbdZEbPYwo2njuvAyDb536DGZ4kauXRgQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41sLNgRedELpLenFgSAS6mN5pFS4x1tnazvTyAfcUhNkE7LRFU4X7i9a6K9G618UZSUAqEjg6yUKHwy98gZ7Ncer",
  "key1": "4Ai5rFjd3jJKxf2QLZqeoPzvxEFhF3zdGDJkeL3RixiJ1nCqSVfEBjsH2E45dryCHGWpitT3QHnX76WqLdMoUDWe",
  "key2": "5Lb16KtjFiktypexbZtj61bchdoBgSEwXZfm8iBjZXYg2212CZGk9y6RFy4aJ5JrxwaL6jGTbqA8JH4mkF2hMHPN",
  "key3": "GMkX49C5SzZemcMXrngx3aZuzCLQQ9XfgomvtvxZRZwt2qve5ZK3vep72JdXWRwD3tcHssEo7Gj6hqa5rGaPEYS",
  "key4": "c7BTQkmkf4cnfAU7ucLF7NN6zXVxDxYqRQ4k8mu832o9qpGypikAmeaQgb6iiVqvN4mLHPHgVTx3RScJ4RVVu27",
  "key5": "YHySbFfpJhdvzqsM9MrG8zzeUeT3KNVPTP84zdrzBmKnYtGwuUvJxn3bB2T1zyh39PgcghbCV74mTPYLd8XsdrW",
  "key6": "eRaDUQf6kPFVWGfXd38SLjFKxAk4Ue9qQv7rNqymtKF4PzjHxVgu9BT9cEsbEbDQyjqXgnsaPcrLjMAPwaGGYvQ",
  "key7": "62ynP43SLURdcmQ1F9r4m2mVGmD7iCh5XU5mSwu4cVkR1wZ9o25hkCkBaRDEdhD46DJjnbxYAHe32vuZjsJHu1fk",
  "key8": "61qBFxJYmRnWpc9nWVMdCVmByPpKmzbSraPyodgMWG9GR9jkMRjat6AZe5BhRNbvPA5PTTS3hxJb41ELZQKC8ce6",
  "key9": "5mS644kKySKFVCzZBbiLaVNoKu7YXEa857VEcDWoenpP1YdpJ1xG1oc36iZh8Ng6y9E1b2NY3Dx9j2AZFzCXXndv",
  "key10": "4e8d9nSXo6FRe6W6N16LMm61QueztKCiCFGLq5KU6bT1aMfVHjaEXZ3rKLsBCsXAMEetnTamMn1Ngbh8nKW6GbyB",
  "key11": "25u1rot1nkT988HFCyTH58VFy1iHAAf4amDLmh4WavQqQWoKoRckfTKoNqZfWE3CBFEW1oE6omtpg3yobgCYsrd1",
  "key12": "4SbW3L5gLpNASEy6G8JpWUggmiTbsvt6aS3jcbkLbbE5M1cWFVqW4uQf9UMD6582V3z4JSz53NmCu553Tcrg2DrM",
  "key13": "SSEXz3srtEGN3cfPRYpiJSEHKdSVVnkv8BngfXsc5oghMgiofsTymRscAm9LP2ZPCd8hdFWS9JUgUZerCvFnY7W",
  "key14": "2UFRPN93xUMydZEQ4UqkxVsTu784SSFfQ8dYFZ7Q5hGw5Unj4EwqqKK7HzKfXQak9CYQyLErs6kZzbvUgGsrAcwC",
  "key15": "29tkLo6NGfD4TSc13WR8jixy1DAeissbQgP6o7BareQ9Hwk59L1RrYbJbPQR8CDJK2UC9vaGCmsCF414hmBFPnbq",
  "key16": "2Lhe5XwHpjVyhMMNBA1x2SAYLjBo1SQEEcn9EvEva944nnrD2i7jZBdahhg9uSCKXS5ngoSTmVPC2AdxK8oKuv4V",
  "key17": "3TsDFsyrj5azRSk2sfzAtQEKzw7EjbtXazKr29dRYPipcsUjLZUbhgrRhRnKwXpsY9uFZhjEBAeagLZEmE7RRS5T",
  "key18": "2PYPAATxpBgCTpRZpdi8ZvSSkc58pMmsWuR79SeVBHGYM4kXN3C18yTkKJHHXD8YSnX4F3Tvb3WbcKHBt1Kad39B",
  "key19": "23VsYn9Gn2GC2nxuzBqnoJYwjjjWKpPd492sMMnRf5kEPoCJpjaTk9U1tdfKDcu8WxNQxJEUjjsk1tJyQt86DCFt",
  "key20": "4tDyw8jHhA9zjmQM6eP5jqMxGeBUkiMhR9x5VDrsEBFVNrv9W51tr1ARM9RXGxUkvGxdat4wdmDEvqKKEmSKNFBH",
  "key21": "K76vY7nMVbSecYz4jszXk6SzMVT9rpbCb1qLAQ6fY49hKnBaMeNfUGDyfT3gBR6hf2jVTRGRQrkniscJkipMhqN",
  "key22": "BEE5M5iqsU3s6EzyFEW9boUtyV5ajXZ5LouqYqfe5xERYu62TpTfzqFSX2JX3v6ADpJBWV7jPQSseipypZAnV1W",
  "key23": "5Wz6ivWM5btang64vMbpapQjY4a5kHpKZAUohMGWTR2BYGVSnjaFSFQyPnYHmWH5FASJYmQSJBrivnA3t2taEEAa",
  "key24": "2qsE6iU6H2sLb3A4sfsAVRRWRpi9ATK696Wxx6tCwWxCuqabEmFNUq1WHRnEA8dt4LBdsdwwJEYkrrDRKJE5zybT"
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
