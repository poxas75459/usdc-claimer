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
    "5yjwnwNzmxibtaa3qSeRNPtwU2vBYfCaCbzkGTcZxxukd9vU6XEsWTniUmgmvghkhjuh4zGjv8q1Yeoyz5xhgQ9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YG49uELGucqEFXjacMRg5SWtMp4nJSrvFnMUvXjnm6cuhg89kuXkSejLLXKstAeTLkAvLFaryUvSwxubE7JncR6",
  "key1": "65psQMFqGnqcCLKttoEmgeAsockcpBhFaMaBeQFtT52cMHXJZqpCkg4vLXKqFDJ8VpdCr6np4AL4WnjnAf2GWhWn",
  "key2": "XcHsticBmBPGE8AoEEF5xtjZyaTmo1HemR8e1i8m1g1NiXRtb9uEwggDiZaAKjtpDd5B9qK8rXfoRFjCuSqQTBj",
  "key3": "4x48VU1TDia4kq5HTrMrmh53QwWLnfNwhpsAw1qEr4rUu1Yy9qtZ3x1iabiGL7ohPuBPf3wQYvSPAvpR8x6uzHYK",
  "key4": "3X1tBhHPvX9MZtrgzDVw3vNXqsf7Q1h1bNUnxQ9BagCj2hdKQadqZpvWeFvrdMjuqs4ErGAU6a7jWPoekrLkTDcN",
  "key5": "5vJtQFSotxj5XF5WLdkVmernbmY81mtSzyncpiSdfb4NG7minvhrYwu4TF8osojUb3RM19JYjgQv5uHjo9gobxPy",
  "key6": "32gmiNjbzUq3VCnwrN5XtmLRBXWTPmsQgjidawR1h53TNw7cdZzx1eFv7bQr3fAd5x8y6tWAtgM1d6HsfG73tZrj",
  "key7": "3mbFNNnTHzVE7h1wbUynrPyjTn27gRiUPmdLxXf1nnCViMgVu6Th8ZsQDAMMxA5r5UWdPyzLyiTHriYr9aV3mVLX",
  "key8": "4d7KCRdJ3p1i25XxRd2q3ivBMeBCiPGrsMdjshSVU1hDesQcWgD637dvfwXEQjd1JZQzcZxJxbsXKpytUJhzubtF",
  "key9": "sZoDorKszbNwafYiqVrpL15mEg7xPLnCbGqfVoDuT6ZKn4GbuKiENR9XHYezMtK8vzuSqZhGASzACBy1bXqhEWg",
  "key10": "djUXrkbNggE5Nh1XTCFuXMEi51r1KfUghhK5MqYn7zUhyTSw2X96U8iKewViJNNyshYZEVoGbcGCBBHWGuXe297",
  "key11": "3WPQrfmUjtR9jb92FAFdxnX5f9k4dFDT9nX2bQ3Rm1LKErb5mLzfeZ5Lpd5No35NUUrPvQDLmMqX1U4Tk1zD5uhX",
  "key12": "okivGLJ7TLZsFFHxy2cTLphi8FtSqBtnDqFkV2bF1a7syjnZ3phmqFYUoXjHfxSKnikXdmMKg9PAXCB6nibSukN",
  "key13": "4s9Q2o72WvJYj91MuvvTBWEY2QFDaVVWiAxshajT1uKFYPbFYNFkiACPb9ygGqapxpM1T24jjLqyQUb2Y2cMFNgc",
  "key14": "PoVhp1p8frKjZsZikAhY2TymHuG2EsFEHfZGUep4Swe15puM2EBkGvVjJaEER4QLCJjdww2kEtqM18cyG7ZYRBC",
  "key15": "4zVkiBRBoGJtqzq5gpZbYkXgB39dx5CyaWL5AycQ7h6E6eeKgHfJkG5t9S9HViPBPcw3oMfyeAgfhtBGqSPraF8n",
  "key16": "3pcBn29Mz8wzJV1o7SwrjTJZeaiKDftXR89JjHPX4DkSDSL99GgY4CEti1AzLZspg8vL89b3g3dVwBUWmnXcs2jD",
  "key17": "X5Z9tUdHuZUvcGuQuh1kA5fdtBcd2Urf9Fnec2icwEkG6Sb6NoHugkHiggLFcb1YWEtpmiCxXBmn43QHf6CF8hw",
  "key18": "2Etx2rwrojsnVvfgw9Y7k4kK6RVEMiYFKck4Jvrqx5P3MihYuYQK69meaQ3WutK3SZk7f2hyvgp5k7g3EHDJC71v",
  "key19": "4G1h1tzPvQnXbX2V8M4m4XF6XGUKpcJAy9TL9NNmBeHKUYERXGGh7mZrAkioDqMd5Pw62aHgXJwYbmgf16UiLT4R",
  "key20": "H2gKh4xvqQwThQ2CZR5k87FK75fVRzAhGJsg8f4rAofhUnDzEFkNZvAjBENBypHgEcQxNbEQCUHiYK957kJfTr1",
  "key21": "4kPmLM1tba9SyygGPxy1yhRJVd6BigGH2MXuwxmJrN86oMz5qaYGFZph59iiUCkkFfXY1KHY8PsRLFiz6qtKcNJA",
  "key22": "iy9ga7ANVF3TkSGoyEq5nSSizP9s5xFggG8wshvo6cZcds4VqPq3rTrZpeaqaTw9REaEK9Yy6zKw6hC5K7owoWo",
  "key23": "49TJWK1DnGGm2J6zQTpMs2gSq8CkccnQjGcstvvdNZHTHuX6w9StwxBmzzRtxNSLwqAQyiKGFPw4vSVPZn4fiCJ",
  "key24": "5pPtxjjNRpcr5orfp6QuPmbzaHCHf8dBckiNR9RCVyWfx49PCfnZm3gRRBcArjfM2DiMJYDhvj8geJ4qy5fZdAvc",
  "key25": "5yGfCYjAdU7yBmFxEBr4yHXxN2KBpvkhSqtvNDpkWZdFxG8qXvoJo2CPusYRYybFBmcKUZQwn5H6fHUSvnced3W8",
  "key26": "4Mze4HMG8pakVvgnv2u7Goyg2aSk4qAoxRsFdQ8XV6qauqm86rZsevBuSugnAnkmPQuhmoD2bQ5csdNSZgWTvzND"
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
