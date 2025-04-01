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
    "4JfRohHG48GRmp5nHjcVY3cB3uN78HQdN58uQna6zP8GNt8B1bqLJrg4RXvA9ndBYUi45eoKQJ5vw6AVkX4d68U3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4921JJGLAE4rrLVWKRrv9zWdyaoBrrLfiiyfezvgAGVC4EJGh8Y8smTN4nftMeP1Uw7kH9gVum3MRxbaTaB9jfuB",
  "key1": "22PWrEmyYUH9EmfmPoGdsfuwERGgEnE81uBU4MyrtfJBR9ZFmdhfVfEieDqzvisshegLWsCLZWquncP33gUC1sya",
  "key2": "4Lw9EQ4NDwuxrdUh1K8EoqDkhg8Y2auwkFFvWU4SNTTh8Vp5pADSfvNWPCPXmbUx85iWbuSVPNnaw1T4PTWi6qG2",
  "key3": "2NS5CCGD6kvi2tZy8eBujS11Ez463erV8bzEQ4yKezsHGMjAwLv2ubu1CM2GNRBRpzrDKnogX1HFGKb93ZZku3ic",
  "key4": "2Jq5bqE5AfDJzEownSnJF4aDu6pxBaVYmN6ZyYJkGNZGNs3WA5wHsvp7aYEuDfgYntRYgbjGbYYfxie4mUzUiEWw",
  "key5": "m6SoHcitxMMNyr3hfzFteNwgfo2qsQN86NwRVo8TnFRJYHNKXcWQ7wTqrcCZ8M7iyct1vuxLkDNy7b3KWyfFoKj",
  "key6": "2tgDkR4oaGaioW9VqJnoD1oeMgx34HfwriX4wPnWi1GFLLstBSyT81LT2j5o6VhhBdgPR1RFeXR8enj69EzLhvkg",
  "key7": "3z8A2c57ATLoVpAnL8sjKDouEsuuEoAbUJwHV2yQ2b54b3fqqiXfpd38acEc1cpf9wRZM8X6vMstduEXmv9pG2Eb",
  "key8": "2cKJU4qgUYKS5dC9F9ho8N7cj7tpos18nKeupjYYpnoc2zy54fRgU3CyMkMTiEUayQKRkPiPa978kCvS4wyXp5py",
  "key9": "S386BEcgq9sDAs65tEwDsXGBPWsMDLmDPFjyaFLfiQwZkHffriBCvPnGnLDBTZs3iutLJjLX89gbNCmjCzVnm5R",
  "key10": "5NiC37aPLLN5EEFic2gMW13HRqRKQnWM7XDWBfsLRZabxb1UfwuSbom5hhxQqgeNxQrLCpBYqAGQL74Mi4hty7Mv",
  "key11": "2XLhiBFbMPGNRWZEfdWCWCpxoUnAvEAdwzZiXC5PaGhQyGG4cQqP6tZA4pn8h4uCaJPbcEpwpo8CTpTe4PJDmNTP",
  "key12": "4XNEWxw9VyWEf2QikDEHg5mKZrx6mEZyeFD8hnzF5csNFxrgP6QmL8288vcsaEkHrj3nTPug3Py41NmWKHKwVBfE",
  "key13": "2L36JaVAZXTdpkTrWTzBrQgiTYR4NPNKx6me6SPWmR5VfC4MuxLgVaqGrRhQBppKvmLuH21TdaK3Ygxhx75ekoW1",
  "key14": "3buZ39ZBvrgz3RFTPyEBfqmrLqGa4gfTUMaVKqgPLekr71c8syThGKxMhvUw3MZdhoyHLSMiHkQqHhYfVjf5Qg3t",
  "key15": "3s3kW98K4JpF1CnDUHXHRTh36VwAAarzCmtCa24Z6SME8tcyNq9GpUJAqNPnE3bbfmatHcjgKtAaYGGxmAEus66J",
  "key16": "4dMKPKCMr7Xsa9Qhy9GJkNpnvB3tZMA8A7KemKSwBk9ZfHUywyK1ysn6i6GvRFWLRSg1YAqT55jAhUxoUpC83e9i",
  "key17": "2Z9hDCDHrAVBC2rcnXQt9FYTq2a91gkHko3wKfLZGA1ABEn4dF2MpYSBmWYQcFxb3wEkWmPUyK9goTihDEzgZmU2",
  "key18": "26enrDZZDXf1NqFPS4ZLLzp3UoWWZAbfq6nur9Qj4QnSyPPnoJ9VZXs2yB9rqJrt5JhjpuioA9yrMChJmpbUwmFZ",
  "key19": "2c2phctN618TErMQJia2a7xxNeNcMDAA1LcEeehTjcdVyjaeWyfQH1kcKWyRaFCAnFrmdqeR6UjY2ch78dTmcRHF",
  "key20": "5AQabznNd2VqB7sJeAyVb9b99G8pwUYoyohFbJU5xZUw9iTeEhWS1b1CWd4kbZwVurj7CYUVR1Pu6ANmRBJC4KRa",
  "key21": "4gQBzhHZVSC1oUX7gatr8bqBUjH5cg3iyBBNHtaGfvrMnVu9BZC2SiCurAF8hGcbKbLPNYAA2Wom1Go4oshxSVL2",
  "key22": "4LRWdeogCL5et1xYGcaRjYNRABoCwkrBNaVwm7PcctvHoJjGNpr55RFQoEccr5fcJ46pprU4fBqGFrBW6qDWsz6J",
  "key23": "BCfz2PBwBrTkpTLpRwgWH78kUTdaMaWwEcHtbmwTy3utjG5DJD5k8mjB717REMdaUaVwwMWNbb31nrRsw3JaKXH",
  "key24": "4GHFDfFjARLDiJYyy9gJeLYXcpGnHoc2gqdfEfaoTMDEdWy21gozCxnaofCEjyuGpiWZpgRe7MHr95VSHy5rUkpi",
  "key25": "4XCZFmEJgnkEqHiFdhudTq4FzgGGJ8M7aBB5T3XG55VgaSdpCthkGRRwQdAkfxgiBMDWAE4bsw4wwor4h9wvJDKe",
  "key26": "Tq8HByZdp4hwVGoWq4VB9ENsABs2qVDbhCJrghQko2oxKNGTYsXWdSas7ibdnz3eAV2aKdMHnPisHhuWWxEitzR",
  "key27": "2Lxamx3iEzLVBjM4JNbd3tEgJRUZC5Fo5zjSvZRpYqWoSByptBHVqMZ9FiYMhc8oMTxJhe83YrfoKdHRQnbhFSVm",
  "key28": "4Yoh1ZgHe4f58MiWgqJK85xVyJr4y5gptwh6NMBqKHQbjXDjgphMbn9VAuk1aSyisimH1Ue3r62MrtYeL65hKexD",
  "key29": "2VQwkgVdi8L1GnDhsdusD8WKDmp6ec4PRccgbKoFH1WzLVMceXEfXW9Tc24VhjcHyZADjpgpSYDSyhLsUxfuCFnK",
  "key30": "2fKCkvGZP1AVhJBQ6xrRR5ju951x7RaHBZ89Pdb6uYEyBYBBNeh589afKNU6quc7xUXfSfoSsFt8Kr9UjDYSM4Zq",
  "key31": "4tizgjcEoQ8Cn55cUtD2Kv96Xybhvr771sB4tFaavaEwMGV7sVES7ofiubWpDauQPzJ1R3g5jqAvrRKM6UXMoBWV",
  "key32": "3HGENxfc4FJPpFhprUygdbFRA58c3g8qSoofXuEfS8P7bN1ah2L2MUaYzinADdcgtyFbT5PsgzHbWY5WXr5aHrdr",
  "key33": "2uiYRUi6wqRJM8ztKtdtBvs8CQZCqLZ1L15TUqTW94CpCGY3SPPKiynWrNWWEACBRvpxxwTPjvqeTkAGLjBPygKt",
  "key34": "62YutTuh5ubgKEphHHBuyd72HAh7aC46BsifEicUc9tm6PLU9izK48hcxBeamdAdmdRKKshzDXGsgavxoSaViKdb",
  "key35": "2utoZgp9zp5sikUNfwMFkpHPmEgowLD9boPVLfCCsyyArmBWTYxZ1t3zPgGMcmCQ8SgViFYyDRA6jz1SzjsWfCwx",
  "key36": "mm2vqmd5hw8ZLs7ZpLC1LHTqs9CcNEDchyr3tj5dWSW4fpKegBQbjMavHi7CAgntYdc1UtuBKsdF7HRcGJaTrLd",
  "key37": "pKrN8cuNH56vHmFKWFoUs5ipgSKBWMyyacRhDjp2JiTXYtkwhEZvbSUq27mfaPm6aH1FTxm6ABCw2pETyFhpvR6",
  "key38": "2vGXikuMEEYBe5pBjuW2mjJVCTuTpKhznFHRLGBKbZshWNTmfm1NvrJjBrGgVi19DU1abeyYJw5y8VS2igrLBDxA",
  "key39": "5ddy2gAbr8dNsjKFNjf9z7c6k7KkXME19VyvQTeGZKts6Eg5ZKnax8Bwgj6jprcRs5WXB2yz7e8ENqiAV4mXQ8Lz",
  "key40": "2oNd9rMv7B5GZJycrPWrbp3poK1rxmYUnvKpG7d9QqquUUG334rNnvQJ5hxVFEtZAa3yPyiXrjyBUTXVy7WJBtHv",
  "key41": "4mrtfGkbhsRy6MX6dUn5mx4EdWRKDWJ8fZgnsKXNCu81VgNU3NpchFSB5okH8Sz5JzZohi16k5kXhJLCq1QiS23G",
  "key42": "5bLDzhktDsD5u1713MYXVeciHqCNYZju8zTgsRJapvx3whnqmw2CKAyvpo6xfxYmLX6eRD3dYDf62TNTiA1QeTcG",
  "key43": "5sFvxb7Ywv1VFtztVCGBh6Eaj7L64nfAzGc3G5oN2TFs6ySv1ESoWhoKyVtYEhKxHEi4fp8LuC33AZz9g1Fg4DdN",
  "key44": "3dT5nEusXHXP6VJ5QGmZcySd3jDFAeZMonHZgfEv7jyUAzmP2KYhPpmusMDJjrW5EeKWszsGtiC9yKeVS6GqYuKz",
  "key45": "5LWFJipuhmtqYCVSSr6ePKDdMuCYCionzWJSbbGJKmKPhv8JSTTFrnnszrWQF75HG4DCkaM72JGVFj52mwgsC7Vq",
  "key46": "35tp1ufFdKibXFdQkWzBRYHLr7ai17DusvwpTyei8r2M7EFi1PEQkbAn2dWKZTvmCygxW3eYgZ87DGCF1tGpTLMu",
  "key47": "5HQEwzE5Nq9hWPbc34pERiiE57jiYJ4gVFvR8PdCGCYH1pSjtewamotUx3QEXrSyTBjZ2yeSiyWssaDu6bvWKAX8",
  "key48": "7u1CxkoCY9JxWQhRifVLpUQDHgRu6MLAVN7Jr3AnBJSYx6DSk54JStWuTGtPavVcDdtQr4yoxeJMtcA8ykPVqnP",
  "key49": "2mZSBCvMndGqPdG2ZjYUztrK2gYTJv1WeHym4HG8oXPhCrNMRH4ooUtQrsVoFfqKfmLyEvfW3ZEaWqQMXj6x8bio"
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
