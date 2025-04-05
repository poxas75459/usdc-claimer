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
    "3ni6Wq6upDPK5QKnZCEVGF3LwR81kcXfMjkYejK772Bi4cPmxWkdChU7KpebpYcZQF2H7a1EbdnJBwpLfeXtW2x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7gd2rNJfCC5G4CH4UMvyEHdk1rWTEYH4jMY84PQ6tjsHJKJZp3GMcNSuAguvfW53WanKMaV3ujCCdvkkB2Atzg",
  "key1": "2HvNvtFxBFLFq4ZJjKrS6ratYyvU3BBonK5yvemi8zvaYafSNpRnSVC6s9dCPxNceUCT5Aiemc57Q3BH57vXmFwW",
  "key2": "4PeJQdLhxpo9XmTrVVwwVzff4G5rLtzbGzrTpjth82pUFzZCKhb81b8NwYMhhcS6BMv6AkHcWmtmguYRmQTtBjL9",
  "key3": "4o2qsMGdRnVh6rPwyEKGwDP5sS7EJfoPnJCSbkD7rZmjbvEsKYFLcz2sCK2Jk2yhrVafAjmjJkJDXFPrc1dm37ZD",
  "key4": "zZTRvTiHLGBvJhxtjd6iMX1r6fQsosRU6GwNYv1f1tmVmMeD54eaGCFZJ3G3SkzBRouS3LZhDqWP8NVLu5FAJV5",
  "key5": "26RqdCZMBJ5pWNx3NrYxhkHWZNoryNEsZucCp7VxkBcBZFUbkmWGWowH3d8ugHCWAExDL7ZueHiTuiADVvRaE2Nk",
  "key6": "2awvATaDz7yHc9xaM61qJ1gNrEhMn8cxdEzAM4voccXnekvinYpxwnd5hGN7aWhi4SYKXioxJ9G4aBurZkCUAETK",
  "key7": "5YLCpHErSbwHVxdCbgtgGGwo5aNp7Zyc9TSJEzXL6MUWCiv3ZPrkAesJ3fkUSYoXY1hr9bNEfDQ8UjpyJsEcqHsF",
  "key8": "4qvv6y8gxQpoH7LUeXJQots1mmyMUCoPEx1y4SmvnhTaigZYyCRJEHknPssyBHJ6ZQ4rKFbesZR4NhWNcXUQF3ER",
  "key9": "iPvbqPBcjaguMD4aT5TfezntbLnJoxsLv7AcyUyJkMgmq8pAoevENUsYTKedyNf9JoE5YVXEETPAHBKrMxnGGvW",
  "key10": "38cVZsmq8Wx3sKQhi79qccYYiAzQqs44NkjXJgXvC3L1V44vWQ6wqvTShj15J94dQs7yU6K4L6Dfiy74JiWSNucF",
  "key11": "5dM7rXXMMn7jtKAyzDNVzBf23WgjaWkaGW5AXxGTf1dAgoKNjftgx78hyWLbTnvetYzYYLUN9S5KBZ8ahRZPMgH1",
  "key12": "fXWgTCNrSNVdGDgpaGxzpUd4sD5B66CuKzfNmPzsx7b7Sc11wzqFf5QVXdYz84frsR8cSwkhJAqLH1GBE5rV5Pd",
  "key13": "44c38nqYVyyXiMtWx8NGNGLszrMsHN88YMjEFtaK9T1zwMbmYFjkgmSBUV35ZCegcmgDp4tVc9Ekt3vm2zk1djhd",
  "key14": "3RVXrmpbUFvvzZ7jtkvQufwPPDcbfsqWrwoJdXPcpAWTBif3mMgxLZWaeWppFEm73MbCrn2TBiGmrVTpr8AHgkf",
  "key15": "3qzrL2yrVBwXgDTLVRMqaigTYNQrJFC2Hsbf6X3jwMkySwWwYLULCo6AkLMTizsn4Uhp5xFGpCL664cukbmpRgEf",
  "key16": "4paQeuPDctcfhVP9xPbbpyf8TPLyiQU6ZzbkJeRkoadtn8iq4itKWxzZ89eEjshT3qdE4YjN44sxSUdfL2Spij5f",
  "key17": "2UxVmLdHGjEDDrk4r3qoCUCnB36kGHkwB9ZWhP2Ysec5kfC9p5FxMr41MiPKSGP4YhcpVwaBT5Xm5AWizEWNEWPH",
  "key18": "2SzRMXRpNWdh3d7xonpEdHYAACUc8aSmM9Y68EfXtoEnRQ3KVBE9V7PqWHm2FNirU3bVr91yLF5TxKhKTwCoUDXg",
  "key19": "627sdPg6Ygew874VhGCrGX5fKqbju3op65K4h5K7hLUfidqZiDzajHVpajoPhszNg8ssxziM7E9EndPjZ3puJfUA",
  "key20": "5ahzypiSRS6toYHyGyuKeYJ78trTevheZwBACziaLtYmLAFxS5fihjGsn1bhJ5wELuSa5rM8D3VNR9Q2Nkev61b2",
  "key21": "2t79jcLn4CvtNBuWXbsTgnVZcTeTKjAQP2YPQHmJxvcTvRh6Ms42zgmBQSGYhec3Zrawm5qzvE68tofSsJ4i4GJv",
  "key22": "7NME2iiYkX9qHCpuckJmHW7wVTZhDUTm1L7eD359HeSy1atgLtyBwxJ4yJLbWUafbiKAx4kaBQo5gVU2RrSqFbS",
  "key23": "5YtL61RzXQgKQPYFoxSeknf2Qn5yWdLotRJATXmpTNBnJXPc3aCr199wfuqHNdydzx2UecnCnGycKqBaAmFW6o5U",
  "key24": "3BbZj3WHd6qvAoaVK74vzLe7XRcReBXaDpr9RRuEeUPkp2pvaUsiG5vwm3a7jbZkJNrjeaCQDuY5Me2YYwKguX9S",
  "key25": "3fMxS1J6vvNQB5e9VC1ZhAf5NtWmeEy375x9H4952tAqRb298SewfbFCEAxPMv3nn9YMc4wPUKW5VDVuE469qFwH",
  "key26": "2NdzR9ePqGseKggy2udCdtJMs441Spp9snx1NWKH6bViACreK1RoJLcwibfdfPNzrwkWuzASfQPerx4FjTSEj6v9",
  "key27": "61Xp3tXPwYtX2MewEfRdoqC5H9WaFtiWG57SKqShMzpSjWbZCqXTcb16vb26NKRAp4AyVLULLYhoYfMW8KGacFYb",
  "key28": "5bN5Zc2FSaEWjDJdvRU2rzTrgdYctPmpmSCTynTjHACayCyDwv5DCyG7J7kCxuqQmFqxcRkwbg44Hefsh8XZY421",
  "key29": "4h6tmqvJtbyQDJaZ346PPfzR2ZkQH5JwfG8813pSztvXs1qdymht4phjLFyvixeazjVVhSGE9TbvaoDVp9tiRTVE",
  "key30": "4zcnedh5yoVKammgHciYUuCYus6EvLpycq6xaFaZgpt9FnXVktzsJVKesA19LqXcWvToxyGJQJG1uATovxKpLDz7",
  "key31": "okJPJ9AnUpLUfma4MiYkYscpEiLeTPnyMHjQJQ3Qvuu8P5bTWhfxrJitJfYg96YEX8wwuR5L5ijLzvFYPrM53qz",
  "key32": "4pbxa2ti22G2vhX7UF223MS95iZAs2CAJ6hiB2ghMKAfGjqQJwwmELgq6AVGPgxUVboCQdKYxawkfUrf7Pp8BG9e",
  "key33": "2xV25StKUj6DqJ86e5Wm9Dbyg77NgtHkCNazbmtjwPJZoihfxFYRoYEu25ShvL3qHpxXrWY46S8yLAJVEv7eR5wb",
  "key34": "35QGMEMvQYFnn8vm8aNLHTJbXd7B6pYFK63oConrg4BA2pDzT825cRSuiUpJHA8Lvk4uRb7LUUvMrrMpxCFQJAnd",
  "key35": "3kQLTtQ8b71MkUcfMMtVoX9L4ktGcBZbahqYFef2qt2Novgdc4wfkJnthqnBazfr4DueXgrSW7bkUZkKbnFEX1sq",
  "key36": "28wp3f6WVocpypgDrd7NgyL8Md8JrqNsx6wKjCEB9bberMtdMp8Sp13jV7HkgPRodiMi7q5miRBEFW57qkN2CtuP",
  "key37": "3P788sNPnBPA3386D8EAxzZu9Qd86pCQJBVmaQBxMWYEwaZagm5mrBVvZReSsxxgb7mms5DkEUaBaH24ij3YCHCS",
  "key38": "3Ajj1ihUpygrmrLqqMdjbsKnPwW2hNHbwPnz22jXqkehwVFU4zT6SrVeEZLmSEFFXros8dPm25NpE3gXR2nsNg6J",
  "key39": "TbJpVaQYzeyXEyQ4oMBbqqYgirdX4kzNnQvVkAWyeFFxTS8cPNQMhUezvcTShfpDdgqrMdAKZaSaQizBB1rq138",
  "key40": "4tYnzJpoGznZBkoyuNeTJ4DtMHLKRaGdZGREAdecGR4YwTQbKsLv3j1oiPbLQGKPLFV8QM9kQp8DhVn5y3XDazbq",
  "key41": "5EGkb1fPEqTWSuRLqn3FGPBnAbtLUbCnS4Y54wnv7AY32LTxijh3wkCPBewkqh9rBtdMnENJVeBrsQacWuWTuqty",
  "key42": "4FtVJxeWaFteD265ToAV1W8xz36oTDgu2bhALY6vivCk9BMbDzVMPSNXsJU7KsMozJHcn7YJ7XvT3FMiAVmGRGH"
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
