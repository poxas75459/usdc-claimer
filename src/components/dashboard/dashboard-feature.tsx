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
    "5bgFTUBGf9VYDRRZYNK5Jfs3RaV6dGssjBbS6SPksGHycQHNcBeV2gdgxHEncqCLapjkRpQUXMCC6E3wvawb5BxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27M8b6QMfLk1DgwdjKbNq3Hu3Mero2pYumh8GyPxBDyzSRg8WrqNUZemPac5SBhAb2Fb9HHjpyQ2yMGk1tTpYvgv",
  "key1": "2dE5tYs1KMrPixyVkGWP9A9GLKaFNGS9nQSy2T14Ls3L27fYFYb7zgTg33N8tquxEJrYpNZcVqYzDvLAYZBy8YMW",
  "key2": "4tYRKbevdZnjkv96gt8j2g33cg2rf3sqDuYYQceVef7tBk9M49qyT2UP8zwUrAxQZAfgKJFjB7D13jy7Dmtq3dRT",
  "key3": "4gjY88H6CiDmZdPNokjgXv4nFKjyXxM7woKdo2QCF28UxVP5MRTB84Ab9q9bfykZ4k9V2R6XM2gQrnS4Qv4Sguov",
  "key4": "2ufrCrw38DJKLyDE6T7XVZwJQfLTy4Bm6xLQL3bnLzUVg7WqhXrtXnzPkPpaxMPEtNqaPUnHuz32rpbfmqeyKLia",
  "key5": "4pHyG9A5dkU2iuUwetw5uGdrMJSzbdxD9j6abnVJQnRXMmyvRZTPxyEucUyKLq19YKzpKf4TSa2tjo4WY46XCWzy",
  "key6": "64U32oBCBPSPE1GXAu635qfWCMc9VEeZH4gGAU9b3viREoHxynkpRHUaaPyj1gTQEs5faFxVUGiotEybwxquKpVF",
  "key7": "5kyAgiWcaMN5oVsNi2GNnoKer3RvFLB7F4Agtbcd3mgCsmNQG3RYHuBffsYTjUViNnwajAULL5jd5Xtswukwim12",
  "key8": "626LUMngD3FSkQV9hLenjGvHwY9bYsUNvTyyQuYqpj1LHYfrz5f8mACnjsB8rCK222cuYZp1SCzbtooRjxRymXCg",
  "key9": "4yv1Vm6T2tu9ZroecAyZ5X51g6ZTdkGZpPZ5WBE7xkDMiuZr7Qi6kQMZZpNhTmGwhrrAHb6XFSHB2hWxUnGQQL7Y",
  "key10": "ZaoWE1QQ6ay66Ducx9hNjt8rPURSrvaHkSqb2QDz37Mbyt43pveasDeXF1V8X7PbAEGMwFYEmFtBYbQSt1aTkHK",
  "key11": "5ErES4RP8qcQAUQfGEgYfuzt91K8Yq55NNxntzp2EyFu4HWbBgT4GoMAo5tsWfcbrbN2GQKzweQgPuwBJdE1YHZH",
  "key12": "2WqNXmbCu3hQM7CzS4NMBkt8tt8AS4VbjU2V3bfaDbaYN5oYxzCfJbPPukAo8g8hs4tbAPu7G1jFqq8Xu6RwABKS",
  "key13": "3pjp7xvkYztGhMrx1w8oRJpvXPFzASSefWHe5C8yB1nn3qWwLqwKQ9a7BUEQpyFmFWkc9aqQgRqYHmiqX79pUfdG",
  "key14": "3dXxp3yEybecKy9hFeDb2B8bfXv4EFwtm8gFsieda9Hvz9STv9wDF38pb9TEFaEZ6vNQtvd58xJoPzbLxyxMcF3H",
  "key15": "4RHe3iQh4e4NaMJr9RpHndqWfPfAxkNGGNFwo25jVUNJsWeCSz2UG9SuFxWWaFTBS6gRbrQFc1wG5QmKahxFqhJk",
  "key16": "3a13tFT8wp4RV9TGbMGsB7M7qehNdqqfCRWJpCtd7RQUp3ZYxmi5UvhG18TmDU2XtyqehMLaca1o49nPzYJFFJ9E",
  "key17": "2jHS3HT269k4baQwdwGnj3E4XCH2Aci5BDLiVfUCuxghe9CmDbagYyYWjnLtGXx7CwFCeXBVzEfMQ5jeF4GCDDwM",
  "key18": "3CMkveJRrzC57rGSqVs85TjX4dqboUBrhZ75xx4e7caB3VB84BUvKJfjMHevvJzWTyaMPF37qn9DcBKdwUrH68Va",
  "key19": "46xf3SGAjq4ENSH5PG1bRk3V6MJcPS1aHYab7c9aASKmBotrG67keAJhNSFyGy3AWB3treR1aQmq9m1EaSpXPaEW",
  "key20": "4HcekXdPr1rTsVNiLitKnxbb9wepv4pPGj4bVdfqQuG18xZ8Zb9imQuGo1dDbsLafhwtA8R1WtrrtMCiWhUt63jE",
  "key21": "5QPMxfSVqpp8bs7wBYEUeWyhxHLPofNnFSw6MCX39w2a9KtCazXv1RXWhfUMApHCnX9ZxR2N14EGvN2mfbZPUznF",
  "key22": "5f43esLYcbbkZj4u4BNXPySB4WJDJF37Lhm3EvhTPfcamfNyNRtUZ3PPNS6mXrTmMQMDw5NDv3BWzKo89EMwfKZi",
  "key23": "4RueKy1KtYzkKAZgM5ma9bEZ4eKgjDcLcxYRUgZaf49kjYAdGBBFUCbgRGUMA3rtJf9e6NF2312xggKLckDK4B4a",
  "key24": "2UDNeYjnPjtoZQ9LohznMAn9in9Uu2bZSjmUuzRhN19tfwit4twZyDRPhasVWQTsMsiADLB6kawqSWPwSL2c1RSK"
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
