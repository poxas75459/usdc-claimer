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
    "2bkT1HJcdiqkU5VGUE2ASYe3nv33Tn2AK2db9oW6CbHcet4T5RZqXpowtvWMT53huy9UD6FnPHkq6qF8Pmptpsz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZJq2wPbyRcLWH3MkK1cb8fdU9NB8AjnEDisesRiBtrSG9DUWADzDmBu8bufqghqpd2xiXQiKJWUkTetkKwYesRQ",
  "key1": "4f7YsPjKFDgYkPq4gPAnySGffbzBLbAg858BbbeVpy7eN1KGW3GGUixKqRo2N7ypisXsCSYgPUCPZeddR4oKnymH",
  "key2": "1aBpKNDFf8dPJoRVg5NPwfgkgSxGom85nhmhsyeohCAPhn2GFNVVdJtw2aJhDmTp2tSW2WgEB2H2oTLrD8kbYwA",
  "key3": "2rgDTp4poBemsrLybXrNjbUfhwpua7GiRsu8uKHnDsE44iowYNuUtAvNwFn1eghEyAYeM6bZXCGvLXrux2UPdxSE",
  "key4": "43HFXBMMbCnLWGFbvazy4gjsbAwPUir6ZSzPNgHcrpeF4B5sNc7VLu2FHMazuw3VVkAciKxzjcy3jENeXEKm9fAd",
  "key5": "5SMmQ6vuqG7SstJ9r9K4hheeM9vfsDwnuGUmccDkmEdMfBLD67yL2rPAppisbysba215QaNMQxovBjuGzo7YPdst",
  "key6": "LtNoowd8vbRNqqQHQA81bsgnjcEhckfAGBwubfzkRHD5G1Kw9YFgjp552VaS8q4FMzC5byHQES4XxUyJKPiJBMg",
  "key7": "4EBfhZZyCTTZhsMi3j4f8KeKd7FczK5CHEPjYFdZMRjBp6vMSeWsJhVBM2w3aj4Kp1XCCCuZhBLxkwGipAbqHz97",
  "key8": "3N8Mp4Cr7v8evCNRrpKnPfviUqjqdHffT6dRpbDzE2F5DurCnTKR5BFNGmzG8Z1MWKQP1a2FC13rhPkaJBrKGF3H",
  "key9": "QsVL8hSDBuvRWdQ12Cjfqo21U3PFNxw2LW6GPTWGGjLt2dWAX62XDW25FdbcJ66NNds5Ma9F9wnhMuDDBFympYC",
  "key10": "2H9idJj3NUhoFbNX8kyacTiMtXYoDfa3EVAGmSAUvxog3XtFVe6u6dbD37p8h8jZmRnGs9QVZSFwz7vEBvBbUeib",
  "key11": "NeVQNkby1Nu3nhZ1Vjb2yqD2LXkfnvAYZd3CG2J29hdDyZSjJ45vvWfsdNLCvULwdTMCuDYR3v7PEmRpJFXuM7K",
  "key12": "5pnagPPrBmiyEc82zPe3muMZ2xrWLgcBVCQB5EGiWatRGK8wtYqaFSMyo6z4dKEazG8crxpDFGqfhyjixEJpPHAo",
  "key13": "4WBmasASjEe9ds3TCbg8A9fYNEe7dLxAeFt3DoKtZU49vqbBeGs3m8UVZLCTqsQNcjZVRpKmBi375PwAJR2YSdF8",
  "key14": "29meVDB2mqh8CZxPQxQ4L7uoD3Xf5GsG75595qNUkdQaTRMekY5ZFSxHoYMkv2tvqSw9fVMfSKx9JnbbxaLQdhy8",
  "key15": "5mjju49KwPVYJyBbPJXf2Qi8yWhUr4BHo4eiuJL3KdUZceiX8CHMptJvsNG7kh7wtpETzt3wVvukfEWM9qWwSR1E",
  "key16": "3vEb1x7R4NEz1HLSSug4neAr81MYbfYAE4dg4Bf2uwBEzbB8SxeC6WYMUpyhdf4bcEfZRdM8pyhqDcJcrwnPLvq1",
  "key17": "nYm2z5EP6yNkn6YL3WR7JpxyFzrWcy8W9roJH8d939S3AwqFnoNppSE4JraNBcfD4t5b4PBrFGiTRywKnbj1vbE",
  "key18": "5qfAvzhPoAZrGgeBHn2k2kKrdV57REineE59fdvEacuqsidEpbANcobdzrwEK7fKT2bFb7ycoChViZv3N6yFduVY",
  "key19": "3Wenk5mPncpc62ikZB1TkLnGvGcn5EukqGk6NCTQWwSpixPvYMAKABvxz5QBUmXrN8XRrKYCa868mgmTLf3MU9ds",
  "key20": "23wcF1cFqiHpPPcNfFkDn4rkYWTfhqqm4iMqfBBVTQ9rnyyeGa7t8cTqaFKFzXvqq6QQVs6XQxArMMHkSCpdnVfG",
  "key21": "4Vw8bMyC58xzp8kwWMtAMpNdyNf7R1bDd5rXKRiwddjhSYfRihpgyyC34TqVjJwLG3u19zjZWrGksvWKBc477YYy",
  "key22": "467nkjJZpzpQe4L61ZpRXwCDxJy8dsPFMSe8zNfx68yRyECGoqw3FcWVxpbsp5cu847cUUMcfme52aKinfPbSXfu",
  "key23": "43vKTZ666eoU6kE5K96QZLssZqRKKtRrLBcK5KL2gLG4mvYt9UwteFRvfAJna1mXyCwJmwDLsdTFXV7mCmWmxfnV",
  "key24": "4hFFTkfRGjfF4iXjdgiwvRCx89DaFPWWnSY8GT45kLrgSHU32k74N8VonSjBtng67EzEGyMAU9QWE7gJRW3wkSkM",
  "key25": "2ueh6f6UMgwUfZuLPRDj5Y8cSJ7oRuf5VCr6ZMoTpfWynj9sgB1nq8hM8majqHEfiKZgxwcJNVo8ZKVoAtLnCRLK",
  "key26": "3cgwQz4Pg1gYEoqbuDzrXnHRKSL7nfxzrQf8VD8yq8wrBebC5WMFNmxs5chdRsLqGwpdPe9BkrLHDkXRFUsx4Rpn",
  "key27": "4G4vaz9J4iC6PuwwzPQ1DRgVJSmMoDD1csWib5uoVLbAKkFzvSZzwTXEgZTw2WRapjPkuspeCvqgDs7Kp1io9RKT",
  "key28": "rup2jxfMTtmiDiYxAjoXKXm65AE6jycW2N3bViP6P8YRi4MCjnxmNe4Zr1dEC8xMSE52amoGyfGPwqis4Cwd3nb",
  "key29": "5yJbpuQs4JvYW5rZTm1Pqp3s375wTw3hUCv3ASb2uxmxnag33Q8u4W294AzfK6HdRaiGe1SNGeoB448CUKqGRJC3",
  "key30": "5qsfQ9yQb4s7D7rbyZGP18S3kstY7fFdLCGxsV72gEMw1Qk2xNHVnxzc4pVwco15go6mun6aWGFFcPtsJ5mcBptK",
  "key31": "2JD3D3vbjmkX436vW5gaH6sutXBSsgGFRSM7ttQnC6uB24W9XEzaKxzaLG9VawcuvWvvrP1toH7QCtiHZ9QYcug7",
  "key32": "2jorVwSuV2Yw5aw18zqRcyNM1mgQHn4Q88CiVvPKNJ1zefkPcdCPu4hrAEXNa5DEvmc7oDAwQMTYY472fr8pYTu7"
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
