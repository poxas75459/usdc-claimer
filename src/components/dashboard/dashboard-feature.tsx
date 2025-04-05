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
    "2A16fsfE3Q89E4pK5iXs9vSwrtc4JyySF6m76JpdJtTe3qew1roQEuydtu1gMNQmZA5GAG34ZSqtSDrR2dHtSJYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CFLPmfbWiPbtH4R8JngwYwX7tTNay6Hk23w3DYqEWRMxDgWrWTGUtK7McgKLwh8T1jx8BueYYDxNVwZgwuer8kZ",
  "key1": "2wAma5TygkyPuudhCj6ENfEbW1w4wm5Q1cYNpWAdmLkYGEKTtrsRTaQ3ccbpnLfmTUXFJpikfkdJmVKsNEuajbgh",
  "key2": "3YC9C4byn23aNwx47pnAyjm1yeHhqr8DyJ5U7V7sx2c69WirsjXPpwQmg4UNMoosSao24Ftq2qeTSCSX8oZA2stc",
  "key3": "9P31TuwpWLLCDAV2G16fASHB9f4F3C49J8NhkbCcFmWrb2uvicY8HLweGD5NceYq2dZAYSqdcaTTeASg8iFDa84",
  "key4": "5BcrHN8NkSH4T5ZGSbRaUxwC9J6ehbjNungajDGZdNC2xAKgoWgjHPbFprcsdoDkrXgPsQSSXGteZ2erjTNyUtoP",
  "key5": "4uwXZXFqrvR4BGruwmmqPUracmNzXNVP77WvGzYEM3V1PsdxnsA1UcxWXDGGazpMEbUo6dhwsXqXTuNbLFBnxswY",
  "key6": "32rfmbSN1dKQspamFEQqYkvnuA42xsLhNLGHtdtLrC4QkfEjNpcz6ukDeX2EzuRhvnLfCHZS9kFXDgjMFUQZ8K82",
  "key7": "3bio6LTwSby7N1BoHg5kyAqfanw8ZnBgNRmLU75TPajodWiLTo1ERESWicWHQpBkUkYYru9QeaLeRc66GhN5wesh",
  "key8": "4Fk3wzPRyf6gGqmfnpZfN7ttyM7qVLULHjubwNtexHtp6wR8bnMyJJGDBXozr34Xd44RKK77GHopqifNAVC6Ddnv",
  "key9": "g8yaNJSKRbpHVnnF9J29L7yhb43hkpTnxkivT5cLYosXNVzoT7d1NTGfy4z5rxLiGeRU1jP9JuAci74od4a6LG6",
  "key10": "3Dmt8jvmSJmmNL2DgPNygH1BDk255JYL2LH8dn8iTLj9enUWhqYz2uLeQhonCkV7AAtMCGHBoCqT1yoodVBgVw7U",
  "key11": "4YbxTsYehByq4NTvWS4CxdV3iV1QqTWLUC7SubRKfmhQ9NvunXV9EUE3yeSjaRoMCFuCyuu8ynQ7f6AQzjBP9XxG",
  "key12": "6CSczKjPdkuSLUBqdCBV4R5PAMCAsomo7px1VKpmmxKhpF5ifdkYdhueE9QWgmDBmczGoqyeYBDePdZHnHpvPJV",
  "key13": "5xuMVQzB9ZXUDNtBD5oEB2fiCJzgTZxyktSHHYYsGbWxjyvrxEegqrHgXwxabPhntmFjUvdpRkSytP2XUf65wtwi",
  "key14": "4AW2uqm1xeNLHXecefGqm97hBFBgeH4xYHujgaLsyaUGhyPeXhYWDe8DwRt6UmRAxFn7UwEKGN5uzwpXqzMgSC78",
  "key15": "4Vpae6TLCgkdetHQJipF59heork1peaNPND4NUM714ZDo2Tg2cUuP2Eu89WDsR5G2atGvMjw85xdCYarXqMv9Q5x",
  "key16": "52eksdXRjDcytqmZaRguSuLtDHvXdirigzCcCJj2um1JMtnDJACTpu5oNk5aaJmVbT4U28oWwU649ANrB665nTTo",
  "key17": "4wHSFHjtrhA1davJ3VCJZuJvy1DNP2QxiZdxBSCd8ETtjJWo1B4QJfp1edZaNcXpKmNDXLkWWfttHyyKRTtHZyw6",
  "key18": "2zWHaV1TzcQwXzEHMWn8YNRCot7TYwCzNYeHq84r4FV41H9RQz4hEH2cFFKhZPKG4GZQqRwfPTw9xSTraA2MrZbo",
  "key19": "8jrV9miTxVUyWQMj3RNwgMaXRZbWurTCDjAYPMubB4x2iroZvGpT3E1mhgqP8ueHPFYWYYREdDFgYE1n11L7UWx",
  "key20": "3KFzekBziHVpXhB6K8S6jf15XibYNyLHHMsG7wQN9Yc3tg4jyUF7xCM2FaZSQ1BGRvAyFvuW7dEDvXdPtgmJTEGq",
  "key21": "2ouKxmeFEYxeagGFBozwhVNMWbGzikqYWNczP4r8KNQ67CGQrA8efwDrGCS31MBcouaX39ibCabEnaCLXf73xnna",
  "key22": "4a8aTY1c8otCpti1nwqB686e44tMqqNRbSRq7K4Aqbox6sVAAqQjehbpJSDfPNzA1tXfaB46BdKmaDJwbzi7Xc7y",
  "key23": "sTw3up1oTP8KwRah4t1z4fxrfYYjKz51R3cMTHCAyUxjFPdH5beWopiMDc8RnipR3RygNf9pRSCXn5q3Q6JUncE",
  "key24": "2MP1kRDihLmeGxep2AiFVPPhAP6REBEG8TBEpDEJJY9Gwe1QZnB7NDM59XxWy9FYiGxEegtEPRBPZyAmJeKhP86j",
  "key25": "4QGzqkhYBAcfoTmKao7mjgS7mfnvMAPppAahkWQHzsvMPXr9Wkf3MPUjD45ZDDwxC4fdj4gzbErdPXzpDyHjHJc3",
  "key26": "5SLkBzZc53spCUVVUuH2owrnHrbbkVxqXyZ9skErbV1V36CCdbrkTM5XeFHXSgTTjSoAFGGiGoLVrMfLVbU9rsfE",
  "key27": "5bQ8sekRdnyQm2SaY3LjoVC8keD7kPqTfYacHQnUvbqX1zrFtHqGRHSQhShRhFiRgGDWkNmPHGwQqzAfjcUmKzLK",
  "key28": "55CFgVuag9mnLmxuvxVKEavHrkwjUZN9aQRLFNvhZnYx8REFY27Mh5cXz3AP9DboJVNELmC3irHAqcsNwhAgmDE9",
  "key29": "4q3yQ2GthuX9iuVaXVuvEP2s4jD2pWGmymapLjMMbSf754fFNm9RVMUeomVFS5uRz1AvdoXggeHPW5NF1BMv2Z4m",
  "key30": "3reDxrzFhwcQ4k3zkodeopPrctSA5X3wn76FnUrroEKKACR424mi3EKByz8NGh4BpGh6e8RTAgy5HSADkfR2vddM",
  "key31": "2rmhBMY7SZw2A2umwaqqMgQurwYJhrTiJ991vxfvfx94ojvKKKMTj5yH1ccC71BrMo4boc8qoGsZfJy4xaBBxqmb",
  "key32": "3aVG3WRBRK6GMhNa7HkwcoLaj1t1RPqb89pXt7rZt8GAufZA6jnZLG19jM7WwT6Ftu3tuCshSHeGh87qqo1WsLLZ",
  "key33": "3jYS7YJQwMPeQDQX1TTwgyUu2tkSacfT2FH5Nh9EtAeX8AvU9nDYcPEUsDeBzdhwoJGRcUXTFWq2As7rU5duRaet",
  "key34": "4bt8Tw2E6idc5Y8KQpB5kANx4JkTcysPbTpZAkunzMjSbWyPwyc93nujcvnVp1zCupcY6sP93BKTXZyLQ4uWwuoL",
  "key35": "3TaLCsAgpRA5tjREB44xN2hHayZWHRcJprv2h96ZgKxiFx47hNZDg1DvsQnwQrqkufxnaVM3szPNZh7D7MvDKCE9",
  "key36": "JjCGQTdFG2gJwL7obxvXWtuHmFQCCehZ2ZQK3G1qJBr16XrZ1adzweXRVsVn56nBETiTayg9JWvrrz2vg9zQUWL",
  "key37": "5MRc9fVGAu5wG456fEBHNioedwjfwmMHHHcyDRsTaCjtuzHhgmwUcJBQcjYRHcCHbzR9Yt38mWM8w5wZP94hqWbV",
  "key38": "53hXSkSgNHTfBHrCnMMq2vFrydgYMKBdjhmzSTktRcxgKHfRX6kCxoX6SfbZeQWGdRW7wPfi4QLitfUfRy9Rcpyv",
  "key39": "HFuA7G8AVjNhsjVH3j914m5Aaqq7zsThGa9jd8Uy9WG4d7CNzv9uaQ5B7R9QmQT9X27cJ28EuQGbcF9HsuZNTzP",
  "key40": "5wj9nb3QCQtCXnv4WFHMLqt34kj8u18L3zgfrpdQiRmm6YgMHLA3adb7GPHc6wJw6yufxPB68Be8v6g5NkvKgsyo",
  "key41": "5uPRpfW87MVNF8CadWT5c3YMxiTDQF9BTy3VQxP4pxgVxpV6QzHMPbSe1GZgXxaTzmZKD6Sfs9B8qZkDoXXf8UBN"
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
