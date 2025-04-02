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
    "3BaJPKMpMHg4Fg9xX4G4m93LeemEGiib4RcbAvN3P1fqfQcrjegVquCHRdw4xPGKtjKiEk7Fyt3ZtZENiU9a9Vs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZyEvs1KUdARZqsMEYWbNt3ToZN2TGpTa6fEMTYfGVnC5bnqvAn8EroNGdaA5d3L7PFgqiomEqR5bUS5M28wGYzG",
  "key1": "3oGP59yVHWKxNgaNiKtBa2PeFPBrvWD1yWCYAxidfUxm6LWBfSmHfsZDA6NVxFPzBdjPRNz517vDvaH2HL5Y2EVr",
  "key2": "39UT2PcYDdfmMCNpoRCwmcSa6sZjdrtxU41ktHXjZHU3uW38dzJezTaBaiJi361ygE23x8MyxfashPxcFJpZTXW2",
  "key3": "2Jo86bNFczQedwx2uNnyeRbsNFuR8uVnHzg5JtsVV8hTk3f5vE88swDn3nwYHosZSo8yPkFSEad6ttyJ2ZPvqa6W",
  "key4": "2SLTUsrGofj2JmiqkymHqSee6Yj4gfdoqvC7KhwQLGB5Udgr3Di5pNHLSovzYcNeiRs8NgiMpv7V3PAo5HqvhcSk",
  "key5": "3fkbnSBk3gq4hYn6Ms7cHckwcehP6BZDRLp4vBajtr8HgSkCYZvBHr3RJDajmFvXXqhWiho13SrvX9BKAUSP3uuj",
  "key6": "ab2X1ReRR2gRVqFx2rZuuvw5xYFLS9SheksmpXUhv2sCx9hFSoSjj7YUT3zc3ksTWCqYruaHh4KdqgSzkuxb85G",
  "key7": "23ZGTRkCnRViDF12XVXSsypuJ9yKmKhZhCcn5JVjkhSoGZ11iTeXiFQNsUzbEAF4c4HSHxcunvd5zRDvMzSL3byq",
  "key8": "5PES6h14g4hRBehbbr9kUR4c4apCjnR1VsFyvVVEp4V7L9yUpwuEa4DtSiMWF9aARDa2iKEpADDv1cV4UYkEAbyE",
  "key9": "5gpGDMFeXc7s11BvzdQWHSqE7pkfzNLsfDv3eTQshJCBPfZKfaTSH8jzEpaYSN2kTscPLeBKfKHBMBS8mD8552T5",
  "key10": "3pNEpKMwW4XAUFmaXifLYLpTU3U2WxmrSNtugpTpRD5t4VCpTJfrPqjDvmuyPHvgo6iHCuLy1koZFGTvzveG5Bnh",
  "key11": "56dm7rZR6Sjfo2hyVN9AC1PvStM2oScAtadPn1JZGRBdQMPhA1bD2S4jQfhBayPg7D8eioQTidmfU1gjJ4M8aWXr",
  "key12": "3Ekwp2r3btLuZd84YD5RFMmTUEVx3dUcx85TrzdvQN27QrkJSTDvKhzgrKxqenuibNjuM7B96P6c6Ch1dW6kotB3",
  "key13": "5LFrNv1FnWgdfths48ADg7QmGXc5FYvwAmmikyTcz21JNYzdkADBxtrUYeBM4f4E1eD1UKghQ4B6QrYwRG4s8ZuY",
  "key14": "5t9KUBTU9QEZiu54KaLxr2iEpYKDq9CaTXJgfQDeRfRkaTeYvymM7aFvm3YJjEnC9jutGAsh6JEnrV8YHrzTsHs9",
  "key15": "2oKM3vRZj41J3qxfxkBDF6Mp1KMH877qKfxZ4oNJHrM7Q9eiSEoLDRWLGKdi8f79Tz6q9AreU2auQzaQmYcQKYa7",
  "key16": "3anf5XT2o2rvwtZWzTMtZs9JH1kVT9oCEfwEc8eA1kfX3fv4Qt23swjucgF6UMc5uVcR9Vg6MKqfSaKSseFjJiKC",
  "key17": "347XNkSg15zNBie56f6Z6BHhUvgzmRFgLnuAAThLt6K8BNwhPsJctAUL16inJTjGek7YZsxaYf6v8mwbhvrmGmd8",
  "key18": "5ijr3wjQ2jVrSfYoFxg6pH5ePF2FP3vEC5bv2b23kmh9HBpbX3u4BpxWQgY8ozxdXSqAAyF7i96fTA2P5A1CFyPQ",
  "key19": "4jMRTKC5hLisXPYURE52vxYV8L2oxTkNnqK8pS1Nw8qCSXdYGTy1AeRqd8aDiTUCXRBGsGBkZEuCJybJumopastx",
  "key20": "5yVp9XYt8s3dvdSdrda5GZ4qHk4aj1nzz5HgQXwFvWDzWuqZ3hVYsMXdcBKfeuUASCDuuyCc6ngW5EFuKs3ZUdFs",
  "key21": "5vzCGZ3Wf9V2w16h3vtAdchsm6dUbg8uxp14LrU3DYCFm9wN2CwedJGbiZTGW9WaBmU8USV6cXZMf4BquwDUd6be",
  "key22": "3RpxapSVAR6diEhGE1ckkCNnmjwnok3tBWbETNqoHrYwJYyrYH7qvUMidXXVKUFmdnu85AFxjKvDhsagPcV8rYMS",
  "key23": "4turEK9zJHRMiwahXKZCVN1praYiGEg6otnYzQcA9y8zgM7Nk9eEY23Yy4EUtiS2VQiMp8k2sHjKhDrCUoJnKiy9",
  "key24": "64MYPXXPLUghBRf1Tts8rpjJqBdErPCWG3kTq9toHdK2mdRDw6cKHtxb8wfc1RvGSLs3uFbYPE8jsJmv6jimf73e",
  "key25": "2c5fMD8xBiXjfYo77bcyfbqi7HoMBFubti3MKFUnYzJKJCvL2Qmc22r3jvY2DjoBk8AEa8ypccKnNo6Ug89YVFyT",
  "key26": "2KS6RzkKi78PkDj4kypq6izavfG9jZe8SgykeRontsdd71nqosz2MgSXWFTbJ1cvkbFRGFme6syXXndsVg73MHfG",
  "key27": "3ZhU2nQhnpYdA6tkdZnQo5dpfzYV62U98mFBLjCUjEc5yajt1rZeJrrK4Ae4FKXZS6iSBp5JAJnHwuYtt5o79uws",
  "key28": "ZqeRbHUxgaSwEnuxRtZ7e3xECzapgrrDSxBBWkKrmtj9sqGs2q1H6LfVCZBXGju8vccXcUgA3B1wBF2kd5XHZnv",
  "key29": "45SsHUiaxFaEWwj3uE3cFSjri8KVnAwCJ6iyWo6hV7xpyRkk1abH6vYrRqvfPNFemcWmSHhBeTMjWMzRe76B7hUF",
  "key30": "aFd51sjv3e7PyLse7mHSENx5AhviQ5oqPKAnaNJU3VACkRkVEMDA7zuyhac7YxDEXsyG3hS6ev9uccc2v7qBovc",
  "key31": "2gfjtp78iFrgsS1trP49grhJdJJ79j1ZW4nrX1MtHvLfH5Zq8addcoKgG4ydj7eWMoHgJAjyxDk6VhpWWLomyH6w",
  "key32": "3v8yHXRAPdYk4foB6oPAouZ98DtyBMDoGXYAp4f876qQJqaxsECmekMV8MN9KMGECK14xRfnD3iihFSR69sZb7DR",
  "key33": "A3gtANSbPZh4u3FRfGMununUx8KHrF1XuYjnqoRHGUqy4nvgzHJEUEHC1ysBJ6TCZ2RgXj8r1KxjPTZaXcbfWK1",
  "key34": "xkYoZYH1YT8kWaxYJ9zuKAYCiBSsMZneyG4TGVrzGAtduXk2h1FJLouc7x8EYcfPEceiycyF5j1dbfZyurqS2J3"
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
