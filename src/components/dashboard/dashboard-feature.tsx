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
    "56FDPdgHAPk7bEEdE7iL3HoPA72dT1ihdF7FGCaHhdcyZruRB6tenbN148FN3w3K7TWpMb1i8m2E1F7eMoMPpUmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DbaLD3n838wwmKuCqRjeXQX29hQJp1kTuawJjMUeCQEKEpSWhtgHwddDgWbGNYe3VpGeW1c1zDW4sne9Kcvje4E",
  "key1": "2jioLCv1SouVoCvHoJU1VijhQRHfMV6DB71qioYJMKud7onk8HYCZioK1JKsRezzxNXfacm23mSqs37DEiW3kc4f",
  "key2": "3yPEfMDL3xMeZq8P2GKXWHVKPBbix1vJbYBMdpQRoM4PajeTMYfywxpbCtXyG1EAzJqwJvL7tEHf9MEpXmywCihd",
  "key3": "26Ut34DWh6CLkESKrS6uXPN3rZGAt4XJP1r2xtmw7ZUKKg2HH5SQX3CMT2NpY7sXTQzmZHDj3Hi8K3jNSRx6nDMS",
  "key4": "4hgvTwP9RgFHjcnqKHvuoucnsfLCf4ckex3HSJjBLzhmxYTwkgDuSrDPkvwGCkhNHU3LPsGpBR75sqeNCmMM4Ed4",
  "key5": "2ngyCU4bYhmiaBeZ2wC21z7PynP2dgLanSxTSCHoZR7ZgywwVR6QYQA1xnzbGphY1CKh125HatxnEKMW8THD7h4N",
  "key6": "352kTsJ8rqzjwqCrmCk63UpK2Mnk4NccetPSqvRC1nb6naZcG7wxTd1xzTNS1byAx8SMuJuyTKBpViKSfhyFfycw",
  "key7": "2gx9kskCWkqZx4iKsRgfa4BPy33Jbrna1vDSUe8CewHRquKKgEFLT3oiZi1DityWuAJCqJGJtm3fB3yMduCxrqGJ",
  "key8": "382yM2Yt3t1YHjtfR3tsrZxDsP3Kjn8152K2gX4NSEBkPXzEzEkcjrqxtjJ4HkAEJ5sL2oTzRwjNiH2bNy9H2ZUr",
  "key9": "26y9LooMRCr9DWKP8c9eureRXGhmuiiJ9H1NNhW6CdP5tYpQfof5xLgrUyBNDpeY4d55eMFTAejCAwbBM3TS2Sfv",
  "key10": "FescVihS6dw76zEH15eDk5Xt8P2drKG7Lc4nTNuuwoXF76cC7Egxu6Q97QhJH2jQuPy41GJRCVWtMs25CUdU3TS",
  "key11": "2yRt9ZXvScv4PUYgcBSQnVJ4tqvZVtLEyPhwcJ1T8fqwqJJj91Yg1i452EJugW1WPHWsMwvzTFvPnWNBV1QBSeif",
  "key12": "3zhzEqPQHy8xPxeVXJLnwyraC9KnBxoRVxMiWiZjfLb7SwraZgKfqjSD6xNuqr5P1LMC5heqn1NQKau9gamrUpik",
  "key13": "64P39iuWuaDRZQqSCGBEujpGEBxdE9pVoAfhN2ocFNeheHtxJAT8QyKCgcGSKBqFfztzbsrRehEudeHhXsWDtbWy",
  "key14": "2ALnzkqyyojKtP22t9cTrLRHYRQD1VAGdqh346o8wh2yujNAsGPs8R4R7YvJv9dUbNakDNtGMPTKJMnmFLLwXsBn",
  "key15": "41P2jsVfikd34MNDoeUbcbh6LUjQnrYiswzZNBHNy7MCVT3h1X1GXmbMmzFjzifN194FYa5moF2cdigJno4ea2rt",
  "key16": "nitJpdFDAMnMMeiPidgntTULYeKnnqjNJ6KvbiTpQzNuk7knY6B7MZnnunJ3fpqxfBxanx42n4UapQH6cByDLn9",
  "key17": "4FEUAkoozvZdgrEDmmeKuWe7jvh3fiSbN3XbaNPzCwvBy9Mq3AKFwdz87DYnK6fLW3h5HA5eGwqGMxxJQ4Tioeqe",
  "key18": "2SHHrycdkU8JZJHhKc3857xYxsK34Jyw18gs6UDhUn7u1RxWLnmW6g8GMR5NQNEmGnktiS9uwY65QXFhTKGtazUt",
  "key19": "GdD41541P5EuVhri6rEuHCdVog4f8Zm1s2hAJYpartErhRYBXmV1C8t2A7kxUTQ6aRV42QP4dcRPSgTvLK5cUXq",
  "key20": "5SekvcU1rgFoJeuHHULqHyphsukCxHfptZwNRnrmwoghmxyJBREvDqhawjq9TMcvQ5jQo1CZidwBth4GNmivuXPu",
  "key21": "3EvTDia7RcMKN6gecr5vXwnKqwF9nyFajXm4uQVS9Ugjdpzj6G3UibcNvCGJqNi2f3RGEf5MbB1Fm2jcnTaPwXLs",
  "key22": "2J5gyZPYz6PXrRSjPsQEj16piepWVF3PPbTNBNg67pg8Ka1mZUuvd2B2VfqN5E7m5ndPucusE2sBbAYWp34snyTu",
  "key23": "46NBS9Kf13kMM5jS3GULJrzVHwySbqbLLV8ELBgAQMeuGpvhCUbJR9EVbaNSWQZ123rkKipsHYTWDC4RRn8DKKrj",
  "key24": "3xLfFeZksES9eTTBNcJ5VFPQzA5qn8UzgHp2bjWhkqXtXw88ZccfbYEKFytuw6w1uTtqufDv9yL2nwRDkdKa7696",
  "key25": "5nhUEawWTcpatQ54FVMDwVa1dsX6KhGSXFhLwXsBgoPCUnzouh3mahek3zpP8JPKca5f1fefqhtpuYst9et74rDp",
  "key26": "2RXGXaTc1xT8Apcd57NGNhugN8aJQcLi2fmqnnRVF4xxs84p572twMLqicrqqaLxXT6jwKReVUHLCpmPSfzzzfM4"
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
