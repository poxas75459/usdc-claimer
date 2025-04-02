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
    "43s5ygJAPdvKD4FJmhCTgsVBwZHLrMGTXwYP65Xncn8Y9KjpZ4ij6c7X7rbv2GiWEin5MpUp1NyCGCBjfqAEKRYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJ6YeqLue7JNhmMAv2vxauhyaGsSKTVDwv2q16TfunFdqLpfpXwuWsZsYr78x95krkN2Tmyb7vKXYXNyLWrKN4W",
  "key1": "w7zye4EgQSuKdNHGkmEhdPMBHnfFhAWPxrHVmuYwcrNiWTe6oE9QhhEJZtWnMgdssshGMGMtFvK1Vd2VbPBY5n6",
  "key2": "3w6tBNUqzKrij7DAJ7bcgMhmy6Zfg2b9YVXHgR1nG38LUaWTGxzcnFodaVe6mJVGaaqqK4YYTCN47rhohFeHQdrS",
  "key3": "63z6TBLH2Enocvdrb2EcvCh1PhNAbN67ygsu4rmLh9dr4vcXWmixS997PQLx8n4rN2hjJ11LPfJ6LbStPtmb6xNF",
  "key4": "2kospm8wm7Qbv2uCgyvLNSvnwjS55MWK1saJGpkbvky5hp8AwLMH3Lbiv9H56vNjBd1rnRgLunjGuBriVdx7JqDA",
  "key5": "5qtPLzFq4vNNVgGyzhjREp5YFWA6HG8FTFiikCfjHk1YfDan1M2dDU1AoFoPmr1LGvtoQarmSpYRCeoYSc3fEnka",
  "key6": "vBR2NemPmWDsjbNa8QU6Yyobtjyx5Kdhk3tD2q9NvaEQJy2hLhkPdYYmuxfU9Smro1nYH3GM81uzFYEc91HrfKy",
  "key7": "2sCvjf1aoUU35s9KoNszJ8hTKMgiNW7D16ggwjEVwi6VfiJx3U838Dpn1xXKFLarDDb6GshffGhwRMy8pjP8xKPR",
  "key8": "5p6HtTT6hSgcaG4V5jubTEBW6cHxwAK3m6EQimQMBq5hFV1ioSZXKsJ2gURaWMqLy4QhBfLGmsUm8viQCgx5zX1V",
  "key9": "2kN3PaoH8Gvy65HMLNziFAAEPFD4ukD7eC2udGsw7Njg1Psmo9pMQyMZoFDAgZH6artVqgTtzoWRAeYWbte9ZZGS",
  "key10": "2V7Fz8qrSyfkojydzsscWcax9vGNNmchMzttibUJUrEkcjkkvbWGDryw4V8do9UC1k63oy7hYoD3wQoNBZdKuizu",
  "key11": "5NEmHgyRzVrW4GNASEeHFxFqn1CkZMb2cA38f7DMtcVi8iNGDNwwzi82eaawmLpf2TZgKR6Dp1EYC4KcHu8xhT12",
  "key12": "4jVy1KR7HYEZLRQo4DpnAFyQY3R394oxTW6NKtuA4H2bzYnw8DMn3HPxuamJ9pTebpsWQiYKVXxq2fw5NhSFpMdk",
  "key13": "jJ7mLrmkEC78iwYJ6Sn7VrzkMGGUpwk54XXhZPwQCLd94672BAxMyUEHoUP35WrsocQeTYWow4VjPwFHEhBmM8Q",
  "key14": "4FdLnjmHPryG9JFn8w8x72bVMaPpLnVdZZGU3XU7i2UozHqAviGvZ4dehhex2L1vuJViibh1pQFgDj78wKWu1NPA",
  "key15": "5HroKdkBAX2uHVgso1VUvV7MtRSts23y7MW2zyMF96MprCQCkvtYXgozm8hz3bWrBuDC6pqNMz9kVzmmWjcqpmsX",
  "key16": "2wbAZ1ok7zRFfFoxY6iAXcDsrSNrG5CrUJqF6E4ybePHuC16tf1trBo96rieGu2sdk1YipNkU5Pn6LT1TeQFtLph",
  "key17": "3dxtRHjGQQBgKL68n8DuFqje4m3FooYzkpe44nVra62ZtDEKtuiQ2bQRdh8t1HR4kwW3d8Zo13SqS6ZHcMspK6fV",
  "key18": "3WtcDFJz86E7HBdfR2p5NZudMeFCwHzGYri2buKLSUmvQfnAYQjNdP4JWJbLo9yGP9sz4WuvL3A36t8RnPAMiqSi",
  "key19": "3EfzG8gCBE25AEaK6PFrdqWZpLxywue2N7wcnyKs93xSb7iiykqE93n6zSknU4mzMKBDfGTpUCqQJhfREAw6Yppr",
  "key20": "4QQM2Q9UxSR8EFC9NEZDKGBc5kxGRRpn1xYxEfB7qsGCWrNxzEvaL9bpijV8N8z286JkSykFruWjkjpWffSX9RiS",
  "key21": "NpYz15L88rwXKcxMRmsT6WfRyaaojGotAUn5L4H4vf8fbFiY6mNR1czMjPAi9av9LoG9qbnAggL2B7dG3yWij6j",
  "key22": "DXKuineaNSjM8rZchvf8B2Qcas2rwJd7K31iUrha1U7iXWD45h6tjSz3zFD4RceAD5V5CC6ao3mKk63QAxkv8G6",
  "key23": "2CTkVoJ5MpR3DQKCSq2vbRGi2wHEfGRa7q34RGye63wmBxzpuqu7F7qcDmq3ks9TwWdGdsYfK99qcCgiFsYPBEfy",
  "key24": "7Uxg8MPGmk8ZPUbZqTxVJwxWcsagfqGHUnmdpMX5gq6TBMWxcAHeHoq7eMRkmLiMX9ttwicD8rWeDkbTHeUs8UP",
  "key25": "4b2XGmoG3AiFm3vmt6waq8zzi5gvfvkpWJ6kqa8JTtmKBa7WWLZfiM2Y7dcYNmsWsHD3G9BwQSHSxX6KuLMZVuoQ",
  "key26": "3Ht1cHPkdNo3R7WLYWWFeF47TJ6naDHtq8WCEPWqagTuCwPZyEsBnAr3chXLhfj7o7N6wMVyuxWY3AEriagTrQjV",
  "key27": "4jWNEw4fs4oMC8L7FsCr1qkHQMchPtAkNwYyuQEKbk5tvAigE2xFe1kKn98SLKrgm9MHQbPBpPk2CPus3CxbmC68",
  "key28": "5NKAvhBaRxFawUFvxR9DRfw1cF6SmjXYNmFpqQMEhf8qVSAdznWqBrEJ6nCJ8yMghYkBZxRVo6JubHcVCLvjiYXp"
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
