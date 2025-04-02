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
    "3Nb6Va8mNJHkKAV7pyBac734pSxBYUpheKxXS4CbsJiY3So9vVu5iL3HY1KW1LcKBQZkhYqi6iwT6RJpdmmNjzsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUCfbVoyPWh1kzVAYHrNsjmV5kELoy4fJ5YWjhr8JiJHzNtJ3oL1rKLNUJbhExSfsSDesq2MVssBK34duaamUqw",
  "key1": "27xAt519agVxJ3JxVnExFHKm6FstPVKiW9VzyH2vJ2Nab6RGrcBgSFdnyyAbHHxY35DDA9tAcHA3RXMv1yk9Hwpr",
  "key2": "4AuydPTfEkEqmuFRHgSzdSKg73pTrpUhoULzv9Xbaj1tfMQ4MFCJh9eVX3iPmncvgCyhF4H7uUMWFpZo13FHGCgP",
  "key3": "2cejyyyZxR9tRynAReXGeQBNFqZkq4axxYiRnotiocTdr2TzS7RBW9KWaKQqsTpaLbvo51SCPoZVDjSmWiMwYsju",
  "key4": "U5SAZFTyZxQUfdco5GPyLqyp48SY7GcsQekqdTJNMyG8CYPSmh12JwVkq5BtWCqb32eBVyy2A2j5jc4rkqQvctW",
  "key5": "2ibWtZaguH3rDwSbmtW4iz3jtstBxZoKGHFCDTnUo3LoEfYYqsyJb9Zbg1dyvEtvZofFRYz4aStfmJVT8Q7LVmvX",
  "key6": "3GTHRzPWjawDdeiwkPuzc2CtzCT1eJAE1queyZJxBM5DdeCxtdUSez5aLLgAxiQ6K4rgZDwr6heUTFVomSMKgSed",
  "key7": "2jj71X6AHTvbE8btTVQ785LMkhXRzRE3tjnsNXVddkrKmQiHkJfx79AAkjnHpv3BNWWVANovgjt9CFp3vMUtjwuN",
  "key8": "3xRdFEkGTMHGvEXgs36NK6KimutRmrjkdrjASzo5kVqr3GxiUStdgBzkSY6u8McgEFd4Tp64u5cD7jsRAdwayizp",
  "key9": "59GcjTVTB25GH8htPKp7qDsR9F7c8HwVmFyPw1PL4nAYgRyvZWDH7cN7Q85S85Hjs6xgRcWcdjarM9qyK6qYhcA7",
  "key10": "2EXPqbyExLn17dH73XKi7ud1GB73MB3LmyRqpHfPkYLjZHBtQXNpYW51K8obTWmVpUhfMUpZJBbhHu3pZnK5ABju",
  "key11": "5WVYcK4zLgWggjezd1txbALFXyi1ESxNGQfKNQvM2xRevab9MYVqzNkTNdPVx84chYXZTYt3ku4FQLDwfPZXk2op",
  "key12": "2zDrESBFAS642zDgtxaqjwLWKfQs2rvavbGGjEZUMS77ZyKdBfjiZyLHg2VtYhVhyFoDYEV4tzd2z7nj5vcrP7RQ",
  "key13": "3Lh65Z1bZEmiRjmEabJk2js1SFgA4d31E3D6WmTpZYQXBpSHxuKspobZ3CpdThJqpHsikse7M268igYYPsnWENbC",
  "key14": "3Bgm6LBNdAbCWRgnp7XsiqFpXktxEk6tMgiQpqLaigupdCqpsTypwzeVou7TRv3fmtqcKCcCpZ8LSmZGn6WyJMg5",
  "key15": "3HDydTTbgB1hnUaDJaygNVYRhymeHoAWnaKq9CZ9UAB6qhG8ctkZBbGNtUvV9DsL2c3pEL9j7G1hDQwP7ER5D2Gz",
  "key16": "2S4WtuZFqJWCredWF5rWsYCp2VwYoGcaEDxtpBa9CG86GvW2UTk5N2QxgMUiTF27qiE4186tgtjfjyL48T63B75F",
  "key17": "56CdnNm1sLzXPS9Zt3FbAY3dBtDoP3hy8QNckwrYweCNwy53rEvz9Xr6SaCHDXo1LBTb6k8pSvqZ2zCmPYEJMmKx",
  "key18": "4BNJmg6WiC4NwSmXAn5BvSeBUtUczk6PwAGte3hXijJFaWavqZEAtNkf9iEMagKzSdaN12bE1geKzv9LK92FSBAX",
  "key19": "524BXST7iuXYnZAtQVwvVwdTNDxDKrmkm8dGWTxxVCyvC9d37RnU3MPxFzptZTawVwNLDCGaNtYToeV9EYL7Ukr8",
  "key20": "6et8uH4qXizp9GJaJM8Puzagx2HhLDg8KoVoqS1xsn6WZwaGbe7yyYBFASchhf7coFbhvmhDvB5X1JazW79d6GC",
  "key21": "2KYNuhE7UhKAWzDTgzWbMXnkAiYPuE9kA5yGuweNdaaw5KrrvjvkoGDrEyFQNNz63UZRQdi7FPbEEfjh36UYHYy9",
  "key22": "46g87vnMF9siwUqNJYZFJPwWqfojLuyYrFsF6diCYcrrmqGRRLWU5LM23oVi5ZDFCACDaseubf7Laq7BAR8ghQk1",
  "key23": "53AvRwNVY3ThSNtc76TTRBYrkUC17naPfL3iyyFUJjeQiAcR8MQ81ptL2Jrc3N1E8vkWUCY4BeBE9nhSgCJuEzYw",
  "key24": "61nxDfL2c3gEabjnLoFxLshmcCTCTJRttZwAkWnCD5HuofeGrwdSt8D7wJe5DdDDb9v9H2EmYPy4jfUyaDVLL7r6",
  "key25": "2cpMTRfxAf2moQ7WacJ3pCM8wsQGND8JEGdx5oqb36tfFkjGREoCmJprttjXT5F5jARCJtvbsAX9DdKeH6PGFw2o"
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
