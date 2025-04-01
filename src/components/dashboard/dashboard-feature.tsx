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
    "5URBodLe5h7ECSXGvDMVbWfVdbSE5jVSxJeYRJdwUKs5fEqACZtRFoKUTT6ZUidMkYfH3Rf6WNjuHjeUPA5ywRyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V664EGP45WJMM81GfaaUKgc4U3fbJzi58YSzRkZKBJnroxwREHeqZxjSLgunHgZQCGu2JC7PKKtDF8Z6ydFfkm7",
  "key1": "wPimLR3xcUq5HM62eCUkwxd2YeiCDWyFwxYRvNRoT9RsuA2jkaxfof1VH5pibpfe7aV7yFxA4LhXs1XyEguAyft",
  "key2": "5ytEPNVeJ5os9zgwSFLR6SHMbugpT1LQTmEkvKmcRwBcWhvpMrvtg8NJjH3G5bd8ZaHKTztfFuTjsLvRRjzAz4Sx",
  "key3": "3LZ4XWWXfJLAmizQW3v8gRqSmDbjTruw1QeGsFGrnPk4ZPxefjmT3kuh46CpA99qNKjDa1ZmeBFHQSP8PxbcYCoi",
  "key4": "5sv6YwiHZsvd24ZG1XfE29NjcihJhWoRGU1AckNkVvDwbziJ9SajBECm4VDsLv3JQdVkAm8x4AxmgkTvsF3PZN8D",
  "key5": "25s11mZ1Gd9iBAvQRQpjTNhMRputZ4HKFGV4Fpsev1EUKLdFEfPKsc9SKk97bM9Vctux9vLysXT54qDcndkDEGJT",
  "key6": "sTs1npm882jkJfKwv3AmjfVCQht1B5vQxmHmmDHBChys12tqtDZ5bWL7zzmmVwAxUjkAK7EG2tU791fNDFCuwcK",
  "key7": "6493BfTQzbmFY1C2Neuv2q427LQiKDyxCadkPFVqTm1Hcv11rGJmEQ7tQpNCZDx9Zh6KfMLvmVwQJaREExp7pGPV",
  "key8": "2GvyCx3RK6Qx34GcYAUK5yu8JnQM1TzLEHJRUURqcpdnPVdbK4f7QqcV25rjhRDPVsiK7KVy8XSKCBW3uP2EYH8s",
  "key9": "4ngxUyu7NY7cSPCLVxbf2dtP5PJ9682Xs8dEc2fFuU8SiR32u2FvBcB4iLTt6EgWEYxXmMtEaMbda1D2LZjNYLoJ",
  "key10": "3iuYYqt867nyPgwMyFhQ9XwKeCEfbiJrgHH8porX61wtrvU8ZL5JiFq4VJCYbuKFYYUmU7Cgf7K6L55DRgE4sGGK",
  "key11": "3H3uFUgkQCuXHZzaXT1sMihqhxY71VChhTVRry7QY9bCYZoLp6CrFPVppZdCCfU3MSQjAeaEAuL365xNRDXDfWnW",
  "key12": "Lhi8yx7ZLzvntwt3xe5HAapbkCF2AFxdBPWnkuX38eZwXTib9T8q3wDcNJdX4CnBnwSg5Wh61XxBy1gq4iFW1si",
  "key13": "4RzG63xhJUcpgyZDVc1L3Zmsz6sAtwVBbCR9HnpWswGfGzTS7im1VHRSwX3wPBmDZthYDQ982uaiTuNfJwqDKzVM",
  "key14": "61oFPfAKYayaCkDgomWcd59SMZHqBMoBYzmYew684sHWzo2bSyn6mHxy654PBeXZXVnVy2fweC19Zgap4kapFdb",
  "key15": "2bPbFVX7FRLcPfSm5F6NnqLwBiJ7SQHLWUeFtqsuvSP2HKs2mcZc6H6jtaoAVzLk9WXMd4b5fv5NPEicfQff5qTp",
  "key16": "651qrwXdKWHphwsWEwwSHXLmdG3A1qGgmwbCE5TqENSUm8G8V6dLvx2acab17yNPt2JatsM6ffcgA36zyVPhbZBD",
  "key17": "4NtFFuZUjQKfoLUYHsXZDKKX1Bcvtrguuxzt1VuRaHSbCHoGgaKjuU8peh5ffGQxs9wn95ej5THmgHGXrBPZKHZR",
  "key18": "3EY4TcpoEY8faZgv484ZBtjX7SikkaQGmePWw8VGXtaRyoResQdxWmpa1zmVecWeqNgn192bHkAY4iJSUZ1hbS6o",
  "key19": "3MMn9Hx3r9xerUs3tg3v2d1Y7hTLdz7xLU37MRcgCpvHt6NENzNTcJWHVFo15zgCXodsQ2aJDZqtHCE8kDpAn5k7",
  "key20": "2s4tzzEoSN1DuWx8ZSU1ZVNfzQXb5T2rMpwzJCJvzo6kfkDkYHCXEM7RGuNTuzGnxufX8X5B53XFP2RMQJTiY975",
  "key21": "4EiD3vHgqBS3RzbpqKbYUE8YPnttyoaXr3Nh17AWCyccqXLES6t8iR4RYTzh5GmdrzcifoazNutvQSWsUZXhhjMj",
  "key22": "5NQ5R6PEqeSNAqSs1hGaMogoFaPW5sjbV3PQnU1Meqg9yRyGiugR5eYTZmeDfAqKW6BqTqw3Ek8sp7SS9gYj3F7g",
  "key23": "LBEDhsvRn2Lbz2JceJWUwf85MEmFr4BYo2XCzqPkwfs81YZu3rEZZHJx2VitDz2V3cq4r1wAFNBaQ2q4gH83XR1",
  "key24": "5t7tfs1CrEfDzKojpCLf2Gagw5bmKw4AeM92omw4f7VwvMVMTRGpAjo4jsTbgVotL6PW46kWoBKtJUoT49e6PYmt",
  "key25": "3oh23rYJAPJnMS39bjeDgcva9Jk5w4YmPfraqjsppSqTGHxQ6TC8q4n5oDv9rPsBfi8a7LFoUPtgChudhHGpUpkY",
  "key26": "5jEqDhyMGoeMqZ4oEh64PBJb5Pgb8cv8R62edUPpKMXsTBZTgpU4QyyW9igrm3xnpvksuHwrxrRwouy5Rz2rJmDb",
  "key27": "299LHuhJa1NmM6gHQ71bQM4gU7LcfqJYFr8c119dBiyCgrKtTjoRHxnfQz35PTxmwQTAEfPF9x2FdqKmt5ZJAAwS",
  "key28": "2NqTreb8wX39CrWb74QPzss1veMzdVmtSJZQDJFwKurzMpMaQDWYCGZzP7ux74Xc8f5svBzSmP5H5hWTtGSXEq6A",
  "key29": "4wV3dR2D3HgGPw1egYXNG4KMpZXFkGK1AY7EePrHCWvZj18TmuMdNapHcjcyhfnbB6XgfmnkdvtKPVxGMFqa3Zkr",
  "key30": "3BFfVVe6DEHqjPobCY6FGxmM8mk62C4j93fV8p9BQS8VnwRjB16xGBCewgbs4SRSt1ih3qoBdCPRMu3DMr2RWG9G",
  "key31": "5HVcMWtYHkdZoDsPQ2SSsYHALotaMSs2AjKftccZyKcqo3rLcfvbkAdKcJRvkNrvEM8onsBdDEpwqKMRjBr8igt1",
  "key32": "2dWLnL8uobFpvCU4Dp8k8WboR64sqwGVKBd1e5o3fVSruiGAkXBwhSWBFVkrrKg6WNrsaFnc5uHPmQ2LCg9qDcYy",
  "key33": "632uKsin3agXRnYSgYjGkR1k5NNELRXM1Ue7AWBSxA8SF73QarnH5EtuZ6JNrQwxPVt1EgjDCfSWzsqq22MQo6Tj",
  "key34": "ZsAAdM8GcnDsJNu3iUjHgkfJ45vchxVbH74Pc3YXAUeBNZF6pp1gnafDdRJBbHqEaK86hx7kWWg9i1ufvoSc6TA",
  "key35": "4EUpBPPeqXJ9fGpe2mcnkn2URbHP6ZnsDKG7dum5bfJRbA3NunhMMxfzweupy4rhenPjYUYrSB1WJQoC8uDbZHPf",
  "key36": "2bKmaeawf1xZxc3p1nnwHnkBBRgqa6o6Tq3iAxuCHGAnAb3e2y59KdEdgEHMNnKYQ3Pqwj9X2BuRcK1cmgj5Dbh1",
  "key37": "vcsQ93ZR1qFqG3sKYLSFXR2JWryN2iq7BPbC63BPo7DBrjeCdj4bFek4S9JDj7PJ45zrwpqf7nm2kkEUePCMTtV",
  "key38": "nRASZRJk7nNcFBCqZaPBcXbThQhXtiZt11gZxCtBdEK7Yb8pSS4RYDYqBrck1cModSQWhMYiuH6dqRLFJgmApPy",
  "key39": "62GbivRCnY2T7qp33AVFvMzphhyYWao4GQxQyWY48aq6yS4i8Cptb15XUb8DTURRR2XZafzRJyhFavmQU2J9t7EW",
  "key40": "5sac5kkUUtHPqudMC6G5TYefDBxeLHxA7w8f72iXGEaRH9SK3VeZaVufcpAs1evsrruLNmzSeKjpbF6U3ECzx262",
  "key41": "32pvcLG5cpHatSHEPvqgTWNccuZ14WSdF9z83ASFMPeKfNX4STxi8jX2gzpegh64iqgkWLfiDgQAzcp6SujiGaYd",
  "key42": "2YzeeujTYUJkRUU4aVE2aPpqY4i2p8Sk3mt3zyCRBAos41DmmxpN2Nq7x5K8rQ3TZM6TUfkz4ncdbzmFDLH7sufa",
  "key43": "4yW8YMEsZhRJUW6cu9Dkanvs7tqEqmvquRMGUt5RrsES5Av6Vyrr3WPK9So7ao77pR8ps2JusBXGZYPLpmQgXCrC",
  "key44": "2477WtiiU6q8nmzJQRjaehsTbHLetDVRdrvbhP3hdeNSgzXLBXk6WFkMF411tQdv6QJ3E3Kg85sH19AU8qchMMVE",
  "key45": "5hgoMvin7AbrT21gyRT8iKtnN6S9NrEEAMZT83wLddj4QssFVoCqAhzyxoKNHmJP3S8b77zVmUR94HeD9wgGstf7"
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
