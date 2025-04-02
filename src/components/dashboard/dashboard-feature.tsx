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
    "31qJUD3H55jBmncwZZcFpravSW2drzQidyE5NsRA31jmdzf8gfnn3r6NtZAu6AgvADxD2Yc6hQp7JuAzyu6fA59G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GMWX2CfF9VUxtCPdjfsBR6YNVHDT9gNq23LghYazaqi3dA3vppTmbeiN9m52PtBS5Lg6y6Kw54r8ybY7ymMjMdN",
  "key1": "rWN2a1E9HNooNc3MXNBkpZvjTtwZHk4WN91fJBbHvPCwG2omJJ9brP85sfzTxM9PARzVzdSReHuBwkQG83L24jw",
  "key2": "JsAdGGsdmFtoeJFk43eoANtKVYK2fZY6CkfVr4CK4dAHsX2jA6ZPcA9NaYgdjUiQeqTPrsx4mqfwa1JvM5bpZ2P",
  "key3": "4C8iSfU8aQChg1QbKqVBq3UczDBYn5rkLiNXeoi21NC2ujQ12bajkoJYStTvzMfPh9xGwPcWZ3FVxMbWooJAS7zi",
  "key4": "2x5VXg4svUgJni4DdvTseVK7df5tVibtZd9mV5GBTwFnJ3o2WcuqT1NCNJxzHF58ydxEzerJ3SPPSUDswRsNdfwa",
  "key5": "36ZhsweK2TtJKZoYay3WhKjkVeQFBqx9sKhgSRW7SEo4ahyfRXQ9YmEdjLnRQeYq8hEaNhbXgR9dmXFpKmmMsuR",
  "key6": "wCGWfrCRtx2YkPbVXRB59wLgm8dTRgfS6Leyw6hQaj7CVamtyMwUhT1Tdhhz2fT2fDkuc9JzU8nBcbv7MPY4wBm",
  "key7": "2HajFrLY2tYCsNWaZ5xTUG85ejQa2SFxMv9WV5hhnwQFiKrWzdwSun1Dtwxxsqefwk3r3EofVzGVzxCu3gakNBGY",
  "key8": "4xpVJjXffh49qKSyY6fXtgLG1ccgNvznBqRtCToWkN5H7QtGMTCdrHtJabbpahbki61YyYZQcyssZdg3Rk64mS6S",
  "key9": "2RZACbMyCBBGVTbgn3s9Cn9N86XY3SKF3oxr9qiUpaAfTuH1DY4F2Ce1wL5mCYsy6Lkym4wGAXmZDdZX1WBrH3xj",
  "key10": "5zth4PLoMrKc8vzFwSkkaQZE94a77bwfoFovkGTR2WEExv9FBisHqSuVG7vajiEEzZYxriKyTbZc56kXmdQJW8GE",
  "key11": "5K5hGyQQ1LfQarHXuLUPkdvU8sNBJnDqLU8n8cVpfVz2mQb4BgWh7MqDERKdaTERB4VitC7ey2twjW7A3h2z22E7",
  "key12": "4M3jixs7ho3zKuoURYXL93p7fgAVNVwcdcBG24xxij6giVtTAVzTTgSDxyraVx5yBYaBiUes7MmUgZ1KoSPzqqqh",
  "key13": "KaUZrePPZVFG155EWSpPoimNTVp2DZSbTzogUMmtPnz224v1Lm6UGb7bbrxR5JHhiwAWCgHfDTnyx11mBJJb6w1",
  "key14": "5Xwp4ZKqpF2b5o7bfZvihDiMNEYxZ5V9fcT59jt4gvsJgvJ56vSv3ghTxK9otX6adDGDTHREcqAyq6F3Zo3SbNAx",
  "key15": "3rHp4e67tXxX6ywL2HdB33v4ZpHoE52cJjTHn4YAuBRpHgktVG1NN22vXDPoaVXqjRvGVNpZLab1mfnAXDzLL3kH",
  "key16": "66Ux4A9qSkdfrM8bqrTEsQaBVKaLQNJm7T1NR62Rfo21u4T4HvQPBfuW2Nidmhme52Sq8uFc7LBJ1jEEWnmKaZbg",
  "key17": "57iApM1fxTPPN8oBonZbZJExeKkjWkPqRpR3aWwd2TCnNANftDNFXGAaXRfMZmVyNDg1zBXP6HjkYPCFmTRnXzF2",
  "key18": "y1vNsWpGAMxNdoYpyqfGFng5jnaPvx23hNWDtELrKntWSeUqnL48EzHfZhDcdCggqmMkk5qjuUhpGAKvB8MnC2X",
  "key19": "3rqGgus4TnR77wzQuiAbxQff6R8iLZpqeM4n3EKkgZZnryTHp5mLxG5Dm57HVF7PAd1FNQioNfVv4S6KbvpaQyDR",
  "key20": "5qh8wQPLkiz2DRXFxMzy3kRMogq1FeYojrrcqaUdPSaH223DnNXJBtdmPEjjqZRrDysUYxjxmPnuz5jzbbcgS1Wj",
  "key21": "3ijMC8vVjVXm34McFVN4bfm3NZ3DWkYXdxADbjkkUECfce2MRiytYh1HdMonVEXJhgmSLaT6eYCVw8C4oXgsae17",
  "key22": "3K5o7fNThFygCb9RLgXVWJ2P2VGSqz43Yv8sEvEP7z9H6pGW2kANy13qwCTsda6BUz5HhhniWrn1yYnXp42Z8joX",
  "key23": "3iRoziLuQpJtFJCaiCWtyFhi1qNqiw7WNnTKFnn28K4hgaVuFt8EVoG2h4W6mJk8yZmTAGqQiYebedMJSYUK22VN",
  "key24": "PMktdxN5UuCuKetSBmuANYPkyrC93iZjbXYaB98BqeStutmb6LhBSWitu21B9VDqwfAJ6HtowBWLZYmaRhan8Uw",
  "key25": "3iCcgDYkyH8q1UzTykzbWSjitV2eZYhgp5rmBwCNBdWcJVwHMCY5uwMEictp7MA8YMqjUdgEFXgkvShstubbv3u1",
  "key26": "5xurHRHfK8S3MPhgcNieRn3cSw92H5v48ojGen7GD6FFFC5v4ixpqzMvR2AUqc4XbQFmeonbKnCtTGZNhXx3tmKX",
  "key27": "2kSiKByVQ3zKza6rtAVhFXWva6Akr2C4Nxy6xmKSq1Zr4mp3ZwdcKu4k6L5PP8UYSa1J2fA1wMrkG9s6Ji9S4GBF"
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
