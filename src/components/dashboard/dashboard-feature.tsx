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
    "4SWosetJfgCCEVPvVDfQjPBckDyWZCkQ7Emugvcq77CcqR9vZDrUh9e7eyabvUAa8TV2KFgbkcoUDe1aphy7QKG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ufui7x2rbzZphnErohiJ3eY9dnbf4Er3UPeF44GhJ7PzZ4xnuVij8fbF4ht11sm89dCwb5QZ1abYTSEEp76nkmS",
  "key1": "4Uq5aE32TS98JWyKH46XcoTCaEhGjab54XFjzsreq2Bzg5mj64gwUCHvkiAwdezQsCsf3pALPmAWYaynLCSSraCM",
  "key2": "2ktdiSTYu5ae4ZNqGywqkQijjxHaBqvqrvNkL9ZaDGEwfq4kJ5y72yVkYWh8FZzVcM6fV95u7UqMGctevGAg1F6i",
  "key3": "66F2UCE2hGbov6Vnq1r3UwNivgTQ4vpr54St34Bf8iF4yBrduWjR18ssCPHygueHH65S8Dbjhkuncb15NjsjkEqL",
  "key4": "65hoDU32pa9J1JLjbPdsSvVNNw2u5cSaoQKhyDxPEQzhXCkL6hZfF5t2s3ZQZxModKsjWgHesYKtJfZhQTMzWN6D",
  "key5": "5knWZR3kvUEXeFqbghSpQMAGXxSNmC3F2PwkQ9yTiCEkmJkjawChsNtHP2MG3nQqdBajdr7AYR789DxQnrouPfxj",
  "key6": "57v6J9mHX94pnMvthKRrrdGBP9TsELiMB27y3XaUocmcgqWrSvP44hudgyCGvGdYctNjCL98RLzcYizpnviU2tvo",
  "key7": "3qtCDc21tw2vWDUD6MvHym4iNZbf2NJ6Bantfo6VVsLR7XGm7w4chEnZoA5JBZu7reCzujPcFz66egXQDXipBwGK",
  "key8": "5SZfHKhuVeCEz48tpuQgPQ9bAdeYJtZKm4pQVbTzwWHoQpYyEYdUhobTgnE3DcMkW5mG9FHiMt6TzvBUK5UtykFn",
  "key9": "4c3DCqkViRTszHstpWWupbKdHy2bVp7YgyPW9q1rwc5PK8iB4Pd6yKavMYHSD9Z1VzSQCgpm1jB8R7cnDB3smD4f",
  "key10": "5gkfCuCVEZSWPQzokyY99axmahYtUNCuYY5KqyDNjAaP8f1i5N7bYnEaqeaNtfhNhmeWNRKBRegLyZp2wzDPKonk",
  "key11": "2cURgxWzQnSuUrHrpAauLHsSmdWtuVDPNfh9q7VGyB49E2oZfSmyQG17T1YU6NPCqeQ4Cn1Wp4h3d8udq4jFuBVL",
  "key12": "4e2DHKtxEfZatS5NPptEd5KQ6vcFwkXz7xFPJnPrvjycv21VRFxd5Jru19rrEFSkTGTbQWjyCCkuRKnfugeXqHnU",
  "key13": "2gcemUPXhbxGD6YWyzsUDHT72SpbwcgQQSKg71SABeMFTHpJhhcgaD98yt8YqxGhZrnTp6eLUj21bZjfC9jKGRV9",
  "key14": "2P5jc8Zhc6SBDai7N9Y4JWeC9CfsYuj283TBkq33XiMCJFGDZMiCtEP1suPPLM2XSBMHWxvTojFneWnq8vcvHZ6K",
  "key15": "itXVoGE76NVPMQDS4prEMczSWa38JSdzkza3TPEhxW6tCgPPR3xTSvy8FTQUJ5M94RYk7aAmoHH168CjJhPNP2J",
  "key16": "4Vm1vmquR7dWLmxdP2RcxKo3dbXg7JHN4rCyn2pe15zZQ3C7cxgsjtTKBhthDWohBA9MQrZGtRVCRKZC7K8Cjd6M",
  "key17": "24LZnvcXVBFaG1gf8AXV6rC6avLAfuReSWfLrBwhiTXkXpPBnNCiEzcdtvQRp6dts9BAGAziMHmuMC2adfrFRugp",
  "key18": "HYC2cqaLDptZrS1oxQeATmaYQWqdSb2Swgs8PNZd7QtTrNDfFHnAwrJ7X1FW6Q2cfGtP6i8ZaykdGMWXZxnvx1m",
  "key19": "5orLCFzHSywiWLXkLUAcUZgv8VLRyTQUDBL9WckB13eoHKmAZeEUkZVQeW9gykgTWvxKcsYLmK15tDEqUSqDXMzy",
  "key20": "5cRxUmfswoj3Yy893jsZcxNnyppx4CqRY1JRyevF4M3YeRk6mHkkAHA6drnemJGJSzs5VSkDA6LjLJ6QCjD6v4oH",
  "key21": "mSTE9ub3mFk8b6Vddc7MY5iLRQqmsYv138mBn9MD8sRFDzKrerQyEdZhWzbWvueGc2L139HTwN43x9MeH9b9BYS",
  "key22": "4UGLWcg5eRybtyzG8yYjaLcHnrGLKhPzoaFFasoiYyPfM4rRNHLs3RF953MZ73UP4oukLXHupZUyXCrnZvAAfEcc",
  "key23": "5akcemq5NiuNEwE3zB6XyLAuqnScHxkVVhCmsu7q7VYqG1oYw7qDA4B4qwvCHHZYQqgoVyx975kt9svtCnN9csNs",
  "key24": "3hc9ZCoQL34vRR7UcNiNhjXkwaUZNLJuQDpuKm8LxCnQsZXeNCSKmSi7XEs7mLLy9vtDinVvXSLGjb6w6m7oBBuB"
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
