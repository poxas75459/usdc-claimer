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
    "3Z6ykLuUgwFsP2ccC1vQDCxtb9SmeXr6FcqoiGzwE7DMxCcJyhH53kJ3GAXtFfLqUy9gybRETC9ajQE8wHJ1bs9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMQuYpukHiGVunxez8LpNJkUpWwwbxVpb5eHUryCw8kXDRps32arRN9kEeqVaVNwJWxfiksXJWBfKbJp4uMZwp5",
  "key1": "3v7VoRy1CC3qpBGagv1gS8ajgDR6STpUf3EgbYAvfak4RMRqqQdR72HGsQv9pM9KQ7cnAWTSqp1Vvk2wzoKiqKua",
  "key2": "4mz1kfzpJp1RK7jFYNZJ4YCocH6Kbvqy26NcpnoiMdxBeQqm36mmggG9egLxQ2xdzd5MXsGQeBE4TiBWPEhCXECE",
  "key3": "6AszkXZo99x1RnyM5rvtMaSMoHf6tDJTpwPZHpPSm5aBBmvjzVwj5L3KVedDeLAo2u6XKqBPNNiDxRZqkFKGzWz",
  "key4": "2jwiaAtY6Jv2TAP3cjwMrDZcsfqGti4ubrd1tdEhzoRHG3y8AMXy1RcQ9DsiXZNTab2kXU5RzfRMQ7UtNWz5q156",
  "key5": "9fVc16d4C6vsvkiDDa47QpBLjkQ9pxSGhCPSmm25yPZxVsYTKFynBsDaeonc4Gj5rpdMgPBvjoQTdbBzbnSqA56",
  "key6": "2TGBeKmrUEafjbfsheJDnrrAod6btxKvHBMSrt3MaNiNrbPu9eMuZK6LPcFZ3URTntcfa4QASuas1tN2UMD2Zizo",
  "key7": "4XgkyixBi2GV256yEGKSkKKfEGTFo4E8daH7VGajsnugo1ZsQ2ZKGFuDi2bxCTKnVwX38q87V3bRSEHjKmhqY9Wk",
  "key8": "14N7EbRM4yN5qru82xPaDzWaDouyFBSnD3yYx8AdHJJBksXNSjHw6HhVZaT4xE4nYC4toBBZPpbZdLyqwhLv733",
  "key9": "voaa1s3QzfXNsDjLLq4bscpYHSK5RB52meWcjhTkRngyqGUZ25ygqYt6jdQStdgonNcdpW9KQzaF1gxFLmtthtN",
  "key10": "3KmFLHv5615M68Ykmd3EdMSf5uATMyEstJsKeQYt7snuRLL2dVLUNwkK7NfQUQGrFUMa44zJWDa7fAw2w2PwT1xQ",
  "key11": "3oSmpyZGpL7rfDZrvzYE9uq7hU1Uij7SmNfyuzV3ZXTtfxEnJTgZ8JYnfYBh5AG3HWcNNaSeD8jc3GBLwF4uPyz5",
  "key12": "5Ny8XphusVJTmP2nwDsvq9T7ZG4Ci2D8Bug5YZx8mdCCvoiF9EB1uRRPqRuwPLxVTC7KCYMWjm2Uman9H8vDNUX1",
  "key13": "2VNAqsXNKjsmRBvKWc9yzTs8aSWu4DQfJArtfBewGuJXDY2SxFnzCQLm8f7vziqeKRU1L9o5xxNmkA2qbhbVV6rV",
  "key14": "2VcCkPpyyryagtoxH912vLgGw1gqG4nTDUJEoBR8CKuHSZDzft1qSa1RuirUbr4hCPYnBVSu5nGxfizcSoqNPTBS",
  "key15": "43Mz3LXExJw9bkGvNa35gno4953AycKBEuRrt2k59uitojfkvth4b1wbAFxcwTPAbAX1EnGSrq8MyztFRiXoZerg",
  "key16": "5e6aFfgDYtcqY7FospJJL21tFCrx5SVJNhpXrR1kioxd83H2AMJbGw4Mm8D1HqjKgGzpGeaMQhZGVakkwD91A9LE",
  "key17": "5qzAb7KPsgrvr53NxKx5rY764jVRD9PFgZCqSqaS4iSxxY8jQ4PmKKnVvnujH5UFLLugiGUX8i6kfc9R77R9nDyy",
  "key18": "ywfHqUzPhbimub6JsvszUa6iHEtyd5sbNiJdiMNb11S5JvRtuWBQkFVCSx8V2xhqTGbAvCoctuR6hV7S23YifQt",
  "key19": "gz1Ng49LBgzjiAgsfdPmguRzytejYNAwuYm7xcCK4SnSMEd9mZ96Dh76zUacUwazsb2AKfjSDQUo6EosaPwrBXk",
  "key20": "3bxh88uXjmkK9ETntCdcFHTkthZw56x4wLfyD9weh12agdQQXc8babV17DEgDFDZg4xN3Cx6kX292gBmgBrRg3JQ",
  "key21": "21gyaTcZovUdtYWWtiMBQHc3DdqZDqphHhHYgxvXSLEbDjwJFEejYaqdYVS7ptFT2kiPqxp3aSX5fbyhzssSzJYj",
  "key22": "48vKyZUkeeKwSqttr4TYXKzEDnyobFBwKGgc3Hxt1daFwjqoQkm5La8tcBDn2YetzHnD7ACc3xxPKBFBTeK8to7E",
  "key23": "47kDQ1MRzUUjGjDJyT1SqNzqQSuSh9tru6XkzhVgXwpBNjNFpWDCfZq5AyeuxYEPw9BVeSPTbJ6v89Q7wVyV7cV6",
  "key24": "3ET3uipyR2Ro94MMcgencfxgPsU46cXZ6ApMbpTWQikV7PzkayLiPaEALroxS6EDZ1B8HYSjz7xxf3kZ1UcXo9uh",
  "key25": "3csLemVP2Fs9jxNXg2vjeKHdE75Hj8vn3hBk5SS4atpGKbDdjBmLqnBkYNJ1m2RyMtMSmtA6aSAmdk1YgT8dvk76",
  "key26": "2x6QCx4HQ1hDXbcuvoifaam84GUvozd16GMHfYucqMBzqfru8s34jThmtQPMNYXgXEyDwt9QTREb5hBdBuV8zBNP",
  "key27": "2EjJWkVXQtAffAYf8rtG5ykRLQuG8y9wWbasU97du6ht7oXN5UxtxDJJh8386yZsf8oH17kcZ5t2bEYmyH3GUYsV"
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
