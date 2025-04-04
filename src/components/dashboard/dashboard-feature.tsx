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
    "2ZkvRjeGfEkwq2jAv1wj1g8kSu99FWS3cnWjvqpj3xV3mGoiTxUCbU66JfauTw1enXth5YWcYsPGfsYn3j5e3PR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3fGskY13ewdrkLH1KnfNoSMpdXXoiwbnpKUuLwQLaW5rd8FeQQ5Rs1paDyzKdEhDJhS2vcNxg3nvG5yb3JNwhX",
  "key1": "4MwPNUPbtF3Cdp3cDWxhFvXvXx4VeSymJiD3GhQDy6Jt5sw3U2ykggrUvdQ3Pd9D35a6cVTaKm4n3pGCMSLJrnbt",
  "key2": "22eZzGRaz1No1j6vfB2HWfKnmpip5Kx3rPYfQ6ujX2PD5bDeay8GVNw3BnVPWZXBmXzqBj2hMLqcXUBW4aXDC5Kj",
  "key3": "2Xm2JA6RNXoG7G9KWyz85sRWMLQijcgXUtmq7C6ip7ChdPFdhzn5wRdx71YFiUUWsksM7vv66RVzxsPFxzZzuopB",
  "key4": "3ETL34uN78ZtUC8Wmc8SPjhbrbNzhXXvQGEPcTPtd1G88FMJoeg23AyGdp9wFX2KTcoVhT1jm7K4Eu8tREsNeVbX",
  "key5": "46JXhpA2VqRcZiirafisjzcswNj64od1Xscgm4V2Phq1ZpmkXGa1Xup9Q8jxKGQDmQAbzKXyRnRFtQtcviziH23e",
  "key6": "3TArthFsbtXUuKTEgpNrb3ZFyfeUSGr1FStRJhHC7unVbhTVp2wN1uCg9RexTNxsFnCnYbgsVTV6EP6oxRGWwCK",
  "key7": "2WNh3sFKqwLkgDJhWLtT5bPkrKd7GyZXmqTPHJLdVfa193T92aitjPs42QpZgswDjxqSW8uCAgsA8ZBxpXZfRzmZ",
  "key8": "3F92M6N6SVbzyCsaNExoEd4bUcjcFgtLo4LbwR87F2u5env3frH7D7rxQwycNMrxfrJugzHESNNtD4rUmSEfe67A",
  "key9": "4j1wKPfuFZgnw4ESrCXqtgoLmyxHk6xUjRGQw42MDbeuAMuGDxDSS8krjDtwEigA5aHLVYunPp1cpuLdidrwwkbv",
  "key10": "4FbQppCriBHExDE7nzfxfkbzp4zoxssmpTmFnXhWpiohMxL2wVHnwnKtEVcyXB76WYxPk1nxynSc4oNT6QRKNyhE",
  "key11": "2AQyFNo3AL2kthWqCsxmyGVPirfeT9QTJbPZypFfPUue8nBcMkeRjZVzva69Cr4tQa8BxSD5R4uQMkgx2sD42p1V",
  "key12": "2y8KJeMtf2Agn3PGR7GC3dmHQbWRyy8KUVgZyKLqjTXGdRzsCkRET6KaMJqpgpbVDcsQqtvgSPd9UT8ikWQsiZzY",
  "key13": "56wqcabtAeaQ1akTLt4fQL9CNV4eXcer5b7vfE6KgmdiAbU3u55zdkY1jFSKcUpf7gEYtxkrkZGZjFsZMy1bnRGo",
  "key14": "5rm9xc415wodYRCpem2R9ZXonzAd5fwXAFdwyw1cALUyRTDsJ7a7H5kFLA45EfgjMnFbHLz5zjjxqgTnGLavoJEZ",
  "key15": "2uhD4d4YZGSsnhcUJq2uBTSZ6NDZH7s16cvzWd1BKvCp5omjLKCUSbBdRCMEdPUjrH2zgC6hp7t8rQNGbjwxJt5i",
  "key16": "221DJbg1p7koiSShoiFbNyj73yPXXiAuSKABZoFMq4cLy3Yy5hSbmwsYCxVhVAggPAZTRmXkSZnJE9Jdifo9UFyr",
  "key17": "4X658w3NLcjES2yWr2w7FsEyZryZ4jAaSKqwfnUNLbUXisTrKtoejTqjWZ8BQickgnviGuhnNCyLYchEVMu5sNZp",
  "key18": "4hQqFdMaYSF2upgQr4akLBJspBxNSyecsELnL5fpnYnu9EFfKZKw837L4MtNqNa4KFjJHeYnEjTmhrjWDtLLZhJz",
  "key19": "SZyFGAGmeZwsbR8uhSNnDnLS21zexjjkwsL2ovz9CPPY8Uv7vvpjuEL3E2F1AUx5eaqvW423gmPbD4eBX3qWB7s",
  "key20": "4pFQ3D54N9ZeDKC8PCdwbiy2AgtJNiXdNub1DLu7gLpZtetntvnKBEcVgVWhECcHRXMRYxVSCcNBjYdK4K2Wkano",
  "key21": "AB3gdivPNHRevApQ2XT887AheiYBgqJEVES2k2PtRmXfe22W9dW97qELGfb6o7fVfikmBdSfyGf65BXeLJrCy3U",
  "key22": "3L2yhFwF7qsG5rM99Bx7nB51MTcxHktA9sXyiGeqot7NCY8eqavnyb52nqxxxmGvRB9BWqn5KRcDtzSEQjaoy94m",
  "key23": "xC3sGrPqqHG6aTmh5t9Ado3sqguAPaeDcq5iMsCuw8JBfZzVmgUwJqbDWBQxKyQA6fzhNtjMemk2j7yMTuMEGbK",
  "key24": "32xnCzQrMCEqANKJn7HWfGfacPwwQ5SKEZDw3hsifmfN3gDb9bX7YEfwMSeMNS6bv9hBgZwjR8Pb36WozF3PN3ev",
  "key25": "2ciaS3hSjX2fuoume9iXHoM7sckPQUV5i7Rg3MzQjwdUcfZrPaaABns4NeBKgRSoL5nGyatdhXqzx5UEGQXJTXrb",
  "key26": "wo7mb21FkK8vu24kHaTSCMskQRiDQjxCqua7gvBoEqRrXCZDm4rJZG7gMhjc5EbARx8Ku1WYpaougTqfThR4L4C"
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
