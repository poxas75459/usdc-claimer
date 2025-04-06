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
    "3JmweAr3kN8RRktkvUrtW2o4XF25xuAR2BTevG8MCscZht9zQHWH1QHCbv2WDAYGnHRawLDTNZZ5zMzAoxaV68fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RuBJjKBGxJdyqRxsg8qXvFNgugqSzEsKRQr5DgsARU3H8cfXEW6LiDwhBntrZvdnnsbaTjz8ng5uwc7xSC8CEm8",
  "key1": "ZHJAJjyxUVYtzL3d4DQNangtsLLYenCezutTTjc8Vmomvxse7qojhueRuuins1cu2natWc71wAFUnrtZMPNGwyg",
  "key2": "2X6imL3Vjwsj3PnH4bqJmbZmMC9kNzrsZVcSTRtX1HfmJiapJs5s8AA4ThiJnTmHYhjZvyDExwfK4cR7yu9LVumo",
  "key3": "2Wh73mqgcYCWCQkzBYADBYcPre92eeWkp7EmfXfetNZErQyyFk5HBekF53gkqYkTPifH49aQhFmG9Ne2YCZTbNP6",
  "key4": "2GJXS7a4stqxEvf9VT5XhuHQnPu5hpQvTgSfjkQVnfe7i6Hx78yGj3NgkC14pmGj5pzP4kBDtuSK2CDcooonBwm5",
  "key5": "3L9QXuPRP16MdMpVNTU5WaTJbaKBrMTk8VH5JxCPBwT5BzvXUJKMqKMRcSfxTDpVcfrmEVyVhSWTiWc4pP1o4rcD",
  "key6": "3NxN1JGZ3BEQLVmm6vnvcS9kd5roHs2pBeZq8SsPyHedvZhrBKXJt6cRkYkNawEHxztCVABvbs9AtTSS19sJCtsk",
  "key7": "DUuE5m59pTmHuAtxQnLg9UFufccgw9jMGqD2JFdrdd4h1xf5ARqGiNTUPTNf3ovzKx3WJ1kieDEGyqH826494oQ",
  "key8": "4f8ojW1DE5gF2TPyb87UhW3d3DCy5YBMH995zJy6KB5M1MYDukSpn2LDcaKz6sgDbQZu8w9prwjQUovXJx86vABz",
  "key9": "4BE1yM8XBxe1Aa8nvbohdhLYDEovoMwrcKsDVRzwxz9xAwad5YjxG6d8EjUGuWnF6wi6xYxUAFTsNzcfftJzXEKM",
  "key10": "4Dw31TmA6cDMB3ab8T23tKBtGFViTxM6gECAuBxXrTTL46fhV7nQaakW49y6ii2DRjru1B7BmGjZE9Sfa7GDAucp",
  "key11": "3cvVSdXtibKHq3z2FEvaNhK1zhRrRSh3UY947G1FeVoivKCbR1kXShTxoRCtUT3tdYAwAk11mQuk12JnqdtFm7L7",
  "key12": "3TH7CdLBra3HWeBwJcF1pxSnX4jRn1Sxhe2jrQPBXpQ3gsc842dyUqZJeBjt1xRQgU2MDV1pXt6zmfaroBMWnm9K",
  "key13": "43pJQc4RNKRwRTQ6aY8e4ZYyAkT1A8Tei8jBcvVruQJHsSiLrnCP6tVzLgcaSY6gxAg6dpryieoJTDCkHHETk9Lu",
  "key14": "4keiNtzNPP79vrSkQuejGpAd4WDN4EmH9ouwuZYSm1GYz22eudkveT2qL5DtNYmz7NrCWiTL8jJvG7dDktoHPEXK",
  "key15": "5zaeVcNnHZqutwfiwdA2QDhviGFTJ6f117LBaMH9mghrpyo5JkptAxUUoakU34ZDv9dqeTdrxxJSQCLKX8mtfmj7",
  "key16": "DF723wjxm2Y3kEcvAnXPVnz4WuY866SJZ9MaxdUtsi6UJWLaCDP4dZKV53Y9enuvqZAVES4yPkHCi4tZwqn9GGS",
  "key17": "5bkJkTHR1Am1a6DNmfpFwdTNQK57v7YANyyViHMi1zW6akhEm3k3dZmGGYxpCmJSoQmS18M984dQ44hdkKr59puJ",
  "key18": "3QH9mWUAGkQDZgQW3jn2EBcNNnWkLvDCkQzzbuGNvWEqq6ZpjPvY54aQLteWrwKvwbsTR27CxYPFNDojyqFJuH83",
  "key19": "324f5ftndRrrhFf7aFtfF6y6JvtoaFyn2VEDwx8quSctQ1Cxyv97jBprmQUtWvE7rRuvuwr2RBZDjLbt7tDjfJHA",
  "key20": "4bEYGe8KvyonZFkbchcEDZJcAan9NvUS3T5nw7XzotQqFPhXehcjSNQiCZm7xejQ8W4pBzUJXSvGb7GaayZRG67M",
  "key21": "4KaMwYsqeCoQPXJWZe3pgQ9HyegGgYH4JdSEbWUNwB1PnNLwftsJKErN7XJCWfWv1nnLE3LENP5oWSZSQYpAyPfa",
  "key22": "2bxWYPqkuoWeHBHUWZVRMDShZHVRXW7LqitY56KvGoNrVUw5qFSpgrKgNcKVK7QdjCnnSt18aspdHUc2w5Y2RHSb",
  "key23": "614PwnHoz9dT8VeE86NUaXVVB1FnupkGiVTMwUGhMKWp5PSdjEq6UQw2NFLuq2SXzVNtNDEYt7kFMWFvPBbr5NNq",
  "key24": "5EeWq43KN4rxDcdvrZpQMU5QiQrJJ9DeUzrUyv5t1mu7ecpnha22aqi8CLZW3EjXkaK3gNEFieJBurvGmViFkEWd"
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
