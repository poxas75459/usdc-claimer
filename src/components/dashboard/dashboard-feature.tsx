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
    "4BoXUtToUf7fmUDdViqQh7eM3ZGjAYZCA1wTWq4zgyZFxw3iapaufQ8YiGizWTjqjtJK38NnHjxBNEMrXuRQUXBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZsVL4i1i4jyVgDxhUrQKENi7KDuACHeBdS5QqVaJYvNSWtJLvVQi9jkgtHkoUuJV5zGsgRZDcyvms169duhJB4",
  "key1": "52qcXuV8ZiEqJFSMn7jjMzLpauT3qDZvzMLSbdCv8yPwnELyJ3AB8fsEWrQYu5rwtVEsyf7iR2qS7g7PUSTp4ekf",
  "key2": "66kvv8ZbePmRNnne9oVJvQZyfmvzahfAC6uwhFwmvLsfM7S7o18pCWd2hmXi9ndPccqgLfCcqX8SNGudowMnnDoC",
  "key3": "4GPkaNbTBYXBKMiwV3P6dY1pAXdv7ZJBfbKN3J38GfKgeqi8faRbHoKVLgd14a7Gh4z46Feh6a2dPhwRnCHSjxEp",
  "key4": "4z2xhKhaMdzcGsoeN1GvXv4vsonTgJeJRaoQFrDtRpjZt86TCCv1eWviQbrAbYZv6APbqrZekD44sDNcrR7YbQCP",
  "key5": "2a4pUtfjoohPdVViWPr5asibJVHKDeMTYNjVqpjhVVSu9wEqfC5TdBS7AJxSF3rPQ32VU8bu8TZJZhwfUg9gaS18",
  "key6": "HKsQMo3WUFLVCVnaZ5wZ4a6L844yJ1bKWgFqfHAZSrjCHBTpyThdu3fNyvjMdkrd41BFkdFrdFogRBdffHSoJNR",
  "key7": "3dCzTaduFx3Mnsa2zmnKEqFfMEbgTKdaKNC7cCkfwoMbeP2zxpEKoBHhrfRmGc3HeN8adwR2mESs3VpXVsaqYPfH",
  "key8": "362pbkEjukSFjwzpgNSphPUgnmAYvRegsNv8Seh254TXx3zrWZ68koDLKLj4VTTUWikmKtFbpmB1C2GnetF44m3d",
  "key9": "5zotSrUhJVR1UAy6y6t6HhQFRTgtcnEDJJxchq9eaj6o9u53jH5QXnNMZEpVaVGBRHvcYtWfAMCvf8fV76owSHhF",
  "key10": "57axVhjhqBHCyogGE1xvFU9rATcNzVaKCApRh2i8ibBaSc3pB8kfgSCi5E8RQv7UoncxLMjZ93NeaCLrXn91sXYJ",
  "key11": "48tAoAyjJTrvrQXCPmn7FMWEvPXbqnWEA1sh24irGFRbedHqMmfzuKTq7BgcJ4h2qi8CqGeVywoq24ejt7vjtxWZ",
  "key12": "5Hm6EEovYFDiBhQcJiLZCboRPAdzTPPTsLupiwC9ezUF8XjQNHinrnxB8zSCfyZSuDi3RN5Exki9bm8ZzehPG7nK",
  "key13": "4VnQMPruyK8fg2TTpX5s5E3XVRJWXWztKsQ3PWYzBuzwR9uJrGZZiN5F7AVAooCgCZ654i2TqPb9x8sqeGkw7PAT",
  "key14": "21zkeBVrPUmN6JQHv5aZMBTRnHXbzipYZJwC9dNGTZgQvqU6AJagQhpBTx7eVwcZiiFbuNwHTPcHiopPk5YLwDtq",
  "key15": "aptwgpwaZ3HaW6jWQmLDB9fUgzFC32zftrioUoS8xbk9d4XKWQcUCDAohsAH3WNQPFewshaoUKANPkhgBzTCUzA",
  "key16": "3PZ442UwE6kMxEkaGHSgXmnwMrY77LJ3ziUBkXRCbCDgD8YgvAJ5QNh6cAD5UZobhmSkUJiy5FUQE5aQrjFBHwr6",
  "key17": "4jHa3NHCyozsnynsZAUJB7fzh9ZhyWUcz8NSKmBy94Yaq7446joPiEyCeaFBHMmp3rNKt26g4Jyx3wG5561yxC8L",
  "key18": "5K45cqKZefdfyVCo2i9qAxGkmsv26wYPAoPPBX4Bp827CqakUM8cKqCVFZMR9BT5hs6YWGMyVsqwHizeiPw8RiSX",
  "key19": "4GbQFhdhGksFBVsDnRQ7avGDMrR3ZGsRA3qpZqLo1xrKHi5qDTgmExPyW7YzZnTPBQ5PWp2utLrM1GfDjYmjrsNX",
  "key20": "ucN1UVqUGJFdfuCaDQFiddLokdZsX8rpci8ZKeKxqkt2gjDA5y1HAxXeY4h9FsHfqy5wAjcDNotHKpC93jyuJP5",
  "key21": "3LV5fBDu4cUqswQuJWyz4ZRD7NW61KuDXuP6Fy6kgwtrNoabn2w6ktCvukyu4gLLjwnQ4iMEAY8hCYrEgLsTEyFW",
  "key22": "sQ4eV4D7AMnu6hZSMCVcp64PwVG9aoW8i9N1NXss4SjjH1KeXrw1tRuVCVuZE8j7BKxJ6X2XgWQjG5Ef5CvahdE",
  "key23": "reRqdZoFW7S2HykbDBpwkVHQoMjTvC72pRSTvLEGYzbvdcn6VdxoknQ9HTiR7bYzS3NbKdh74Q4oEZUsDSBQLj8",
  "key24": "3ci1x29mtoed2rPCTcyjhzJgkw3LemZdK8Pz2ALTtiLNCSsv8u88JdVxzzvoVYFKTT69XLDLAJ6k2TwTtXyUQmpB",
  "key25": "4xdriHZdpUuhSApKEZtRgcmn4kynxceNpwXufMjbpigUEDcCN2AcLDJpe5wwH7aBE6RoMzhTHgAKmnB2PTtdaVaK",
  "key26": "62xg21Z2sTgg35keVvXZZrUGHR8Y1mDHPP9aarc48J9WiDMW2Q2H6wnXMCEMt1cm9iik6HLMcPTbqwTszUWiKX6T"
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
