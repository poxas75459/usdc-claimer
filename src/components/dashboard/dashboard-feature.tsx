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
    "5qivVbLpQY62mAsVdJ9XoXstkUAFygf2ByPMVwkKeG74i1BZo2SERezqd93mWg4Dbqjddd5tATorgtoMb6D8NYN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMUYQmNiPqUkKZwFryA2PozjW4CwRkCypeqbooZkn37df8FDxDkssiezdfNMW37fSfAFECVPM459mSevd4oAd4c",
  "key1": "5fYR7TMYHCCH9CoLBURwvmFqsNjm2usAHDLLaQmPA8xvCY96VnsiNLNEsfT54uZLsig1DL6hnx3wzZktb3hDh1vx",
  "key2": "4Ucq8jAev2PEBP7v54b7MHQXXK38GdFxonsJyDr7BA7gp2NDHuztfMD3MrsEBPAGCcCNAATfwFhCHxGAfBeLAsHT",
  "key3": "fNUz6wH3SJ5Zad755mv8LvxdVm9RRqoVeUtZAx2kF7ajWWtP9GX288RQXjydf4LGfd8FPzwNm429SCKZ989iAPy",
  "key4": "5FhnCSd2xUDgAhGgmfzPi68NoT8aSKE5LqqQLiigTSJFTsg8YzfZKSZk2xCHamSkmRT7FJwnU23DFLu4dseWhxJW",
  "key5": "5HzqgrYrWDPzHzcyXv8xWVsmbqa7WYTTS3TeDiMwnqiFqri5xsZ6W3UAHJShdk7B1A1oft4aLaLoVhGyWr8g9PKL",
  "key6": "3g9Bn9U9FqXKR398AY8niTq5pB2rCRKUNU2kwthrB68TYs7CEY3ysZtUEVymeHLevpxVBdrbx1jMXNQiE9qMHKVM",
  "key7": "5uqq4MjgEk2oowLNJphhq9oqejQN9UpzM5ExTK8bqkoftgAbYm2Rmcjyapn6WRMi6CT2mgNyTBeBwS4LoGiHTy6x",
  "key8": "CbQebSkM6r6LWAtjKAiHrh1YY9LDfEa2whXn3uXSZxYKdxrPnwgjP8zGvxZ2BgqSDq6Usp9W4B9vn8B6A6KXzNi",
  "key9": "51L6topbqUt4feFahh6oWEpSr63bF4ADiND98A6RTb1cF5TpSCUR3hzNbCRAATWqDSDyMmFKXmzZ21HhwFj75ZDk",
  "key10": "3S3YG9pM7zadFHMP6zEmp4fZxusrXY6wDHYrfDWYgRsznb6W7eqPjJ59brvWRhPALScFjaVT2mtqSA8C95s4P4DA",
  "key11": "5UgeGKFD3S57K1PkD3Euz1VqkKCGBg2zhPQj2HSMZ5aNdyUGRWcLYaxK236rX37yveRQthfiikVBqDmZYigHpg66",
  "key12": "5ymv97Ji83yUSt2U1LqhcSgBrSKsWDx11kw6Vma1xWBfaekELxFL1HWE2RzXdVaSnn9QNFT8tvcB6adMnp1AhsDp",
  "key13": "2hGHech31rpe8Hka197ieio3fFUMwXQTgbRVX8sRsYPjJTD9cHQRep2tphyQ4Dzj7tv1bH2UdgTpMnW3WndEKdaT",
  "key14": "2qy9c8LCUprjJjTQHEzEVN4aMFt2S8EDQyFxbPPnQJK4NtVJdhswJcF9Hk7S4tpzsf6onRHhNw8acAqoujUPVCSo",
  "key15": "31AYgrJSF4wfpDgaCQGuB7C5BUhbW1NUqtdUPytRjLd7PDkUZGiwu8nxf9F4YGJDgDUueRgAnAAFsAuQWeREoPdV",
  "key16": "5axtmmVDzbEf2iN7twfNndTuCra3C2eBFZdqLMT6KGjTkmPzLr6gkDeNLDtNPW3aGfUoN8ErJGXG2A5KBfjiobGn",
  "key17": "49dinVTwsQxjHZDRGa52bZfE6LWH3hECaStRTpj5w2UASKS8iDbXqhvV94ADbjax3QBeywNYFH6tmcD4V4L3Vhze",
  "key18": "2eaMThpjvTPTPnMafp2cH4DGa6UbCkdJhZE4diAvpVdsWvJAJ4dzJCjU6CqqxY19rGDVPKMzWD3Mui8S5CCgNKSN",
  "key19": "3aThm5zFVbqSpa5BuEDAb5CRquK1VBXrzcAjmpR4xP71BYt9MXzMiQihXJbuL1tq71Sp39CTzP1upoA1Hr6EqeiB",
  "key20": "2e9jLo7C4DnoUTBDVqf9n53C6kdthyt76NnJh9LCvCP4nbdPwRnRpq34SbLnFEEffX7qyLgiMGx6yDRyUCteWcTY",
  "key21": "3VXQCFk4uvKqVAyKDjtEbJm3jaFSsTxccnRmNwXRWqhNVw8ZqiQbh8bzC9oJ9cr6SdU3wBFD35RpFTLJ3LpFjWv3",
  "key22": "L8Vo6qEMZgJR3atw6PwbJiyyRcz1ruMYwLoc2A2eYjNFo95n9prAysenKhvNhgBfCemEMLZvsEwrvAxF9F8JskE",
  "key23": "3hMrx1gqEfuuvwK8kyXwHZzGHAuXi176JN3f8ESy5n8hjtcbsEJeyK86w8gQRnTp1ZgQUXUCK8NRoLgCRtqBrTNk",
  "key24": "5bP1zZpxmf6xP6LEKYcEzM6UMfBTFVSRxZQ1wV9x9WFzWkQSDswX5JWYeXbyHfkpiTKyrrA4CeJPk8Q4c4UScoq5",
  "key25": "4XsvErUnJbHpNcJ4272vJd1sQCkjCuZvetCrCjmMWpSwaKNDPJpJmHwaEBkJ59MSqSxfHytYss4yBwuHJZW8zshZ",
  "key26": "2sRRKoskQVGGwHNj5TU5jydG8u5ARc2cKC5saWmuUVT6sim85jUmJvmyGzKSzfzGkjhfNcwpoydspEV8s8LYYY7y",
  "key27": "2WrYFMopocC4AhMM23j1srL2pTHuDrSjfyeYx63qfNQstKcuJhiVsDceEQEmiSFXi9vhsfbZUCwc2mvmNYhtTAwg",
  "key28": "3hjTv9BcXZkNMRCJa4wVWPKFEEDznWLg5AKHTnR7VYXz3Py74SfS24khQ5Jq6z2bKasguPZ43W8MaMiXsbxQUvbo",
  "key29": "2WVj3cKHHZCTAhftUeQV3LB1y7RJX4qKFQarkeKB6qRhFNTbXMibqt4cjLemR2NwoDGenF3VTEBBa4befUPR1QkB",
  "key30": "TWdr1aCQrViegJsa5QMX3gatt8yxPo9BX2bk5dDUQRckyWAE3EC5yVdjgm6Btwd6gUotY1tTEGt7kxqPHzJhBbv",
  "key31": "2DM3r8A627ouoNi477eXb8iU1TrFwSgYHZjTAVyVbGH2ZfHon3x1nZ4Qh8nyswnzvDqFdmM9TBCGPBienKV4z452",
  "key32": "23Ppv8D3ZxDQKtLvEXtPwjJhtywgyninUYy4evtEtrnLAqYdaeMSUmMER3BM15e3SasMBFN6dvMqJSBBASqq82NH",
  "key33": "vddfjuNm3sVnym86br6LZbVr9hoWz5BMUvzHKirWNHFMGQfrqeDPrPvt2TGV7GvZZsrbdJ8qRbwZwzE37d4fwVf",
  "key34": "gostX7Rxkzuit7f7aiRFBX5wHaz15SmUaPL9A1SkAdnJhFAfjs6PUbWArtUkjggHffbpUS13auvHEEzhW3w87FV",
  "key35": "iU6YPAH58FrP8ZQQAjY34FynyJogi372UMxoPFYCRESFLxttzmUCvK2MpV7pDDkUtMGCZxYSuhWCoJ3vwLqC8Ef",
  "key36": "4BMp3BFaJycG5mA7NCHXyjTbYnGFCpA8EAZaiuYbRejbKGVcyp92dfQMMY9EhvYmhJGL38R1wx7rFugsGwKr9HXX"
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
