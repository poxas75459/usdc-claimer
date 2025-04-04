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
    "XfFjHV3xPWzxraUri5LNrZXvLb9fSyoRkM5qGCKxPEcr58bBfH8LggGuMmhyz8TZiPvieQTzSDRf3nKWwTBNprJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTayBEPgxaCXbHFJ9rKFG1GER3KN1ETYGUtnCKTAsmF1zpLVpX5jPaDJMpjRgqHD4Mqv4eUcrGM9RXCe6Vsu2QL",
  "key1": "2YjeNU5W7L86JN4aM5AtZffSvNWhgWk4Qi1NHPHuzjcgD2ahnXYnYgF12YMV1JdUwNprZ96fw9mLrGXhnR4VDMf4",
  "key2": "3TVK2WCf7mxFARGzYj9D9rNiFx9WxQMgGFPWYUXiUTbngHc146xBMoaf89yE4cFc7gTQUsrA9MueEMbqgCVeecG8",
  "key3": "5RVxjvrrLGpoXosatP87QxTgpEaC96z3kJX4FRXYeMCkTtY2aPuQszj3KCJmTuUm9DjPH3sHs6S2NiC7fsXU9k49",
  "key4": "5evhTJ327qZA1cpvhHLSHm4YFkR34K3HTGekdp5Ady1Ln8k4JdcQRSVnDUmjNWsczbVs5Wbwey2sBftunifTX2PY",
  "key5": "2PEhqouBpej5YW1BqVj4VB9q3h9yZa3twk7DwiNhfonhEsv5rQxp1Q6DjgwwY7Kj9JsbF7nN5xK1KKwhmB9daxfH",
  "key6": "2sZhQfhC1Q6rUUHWcHjtHm7QnLAukEBy9Z18cZU18LA58o92DEVse48RuDMRTWNQtkPW3CTEDfyiT1fcwXUPruGx",
  "key7": "2VsNmZVTNn6A2mixFfipzMWJFVT2Pi6PdntALkUs8hXYPPAdBrKXv15Eo57P2QU4oyu5n6PPQo8Bekn65qBQCj3S",
  "key8": "3oLwAYxuyFPqks7NaLWx15emAhfjShNjmfas22vvzZT9XTVZtjrKppxU5tTZeptd8RRznV4tgG2kmqbegsXBcsvG",
  "key9": "4vqWGy86TT7utgt5qeKFnVjnZGfF9TUtJ6XYbDqeQtiY3ABqVr4wSxH1vwtCYZWrDUHmXqWecft2JzHB8VHviR2b",
  "key10": "2BqWy8wayMB4SzLPGCugLTMmdDr5fnec7Uv4D7cP8Gcwn8p9G7r5FL1Po8sGjTJo6GK1RRJSctuBjnWH586mz4pQ",
  "key11": "5VKLPEFztUJEa3pcvg9tTAXnGRRYH8vXfUeAjmVN6iBDKaU8jDKoAAfaML2eYerhij3S9sWCuvFDrX1FW2v2npdE",
  "key12": "5YQ2cioBGx3F1jxsmwFpd2he5cqpXWHcDsD1iWovnfTnGEcs67gqcxWj2efJRB1QZmgQobU1EJNkAfHq3QrANqC7",
  "key13": "4uSjbmFVcf3V1UYiyKmpm2igNbdXkmiB7H396CkS3isGHDzEVaZqGFgqsyTapjk5UYoUGLBbKfLsYapD1UGFt3wZ",
  "key14": "2GLAgC4ZYeNyGaknoPpSV9tPyGsuGNcqAtDFmsoVsooRDiUz8vs1Da7yS4RJ4tRbZoqhz1EL6JrJ6K5tiaX4TscZ",
  "key15": "5iASmiUT1SALNWvFGEbD1m5R2mMAzaeBfckWmA6zAv4wkCT9CdurEvP6fiF3AphR3ZuwRiKxDZH1hFSwZ9TNsyB9",
  "key16": "3ZyqhWSgivgFSEbVjwcGbnDU7JzoYSMisp8Tjy4BoFj9wt59qtt8RqAiQ77QPAHwWjfztoi73LFK7mHpjCAajXx",
  "key17": "64WwW2YXM7b81vyW6zw4itofihTSYUsE5cujJDUnJaLLExuyKgQLwZ2tfibtFmPMeCvirj29Z4MfWdUCD3do16yc",
  "key18": "33wgByxuFQts3G4tWtQHnw5yK5j6vWcWZeDknbZ8RQV9FhXm5ASrD2mMgu2XzyypY58FPWaZuVFfUoegYugdSpDp",
  "key19": "5GEYAFWr6XMS8x5TfzPtmDHPCKdhgHZ8zKdmpYBBBZETUBemtLaKdsFUWfbhUziLLyKYrSuyAkxMg7Yi96zC2g2Y",
  "key20": "2NocAUQjzcWnqcAX2GceK4kRkHmhYFVhiJyLb4ohqYQVcsZ25rqiLS4Y3RcL64h7e3Vk7XKRGfLJp8ySS8fqTrjR",
  "key21": "NT49CMBrsCYsXkVSxLUiiwdeTmHEYBv8PFAd4vhRwkeoWxF9921996KvUePiEpErZYXgzZUvsPKNihyev2KYEi4",
  "key22": "3uRMhVNz6TPccAGM3B2WWAh7VqmenifSgSiE5NRLecUpSADCBQDNwonVMpEVwHAoD6NdJPjXGjtRcFuYcrJd3tki",
  "key23": "2LfKuBiqocXoW39qiAX1HZrFCa8bHRNUg1vRyS433s9ZyzAfhqD8Ur3MAxAs22dvQxZR6tVo3yStJnPbgEcnAtfG",
  "key24": "3eYPwgHJ2PHTXgHQWQpFFRYMD9F1udehEbWUnrPH6varp8C2YnxhhfnkaNojnLHbNKiigeBLWTQcL7ZNvhQHXsta",
  "key25": "4qxWJYPuPRrLfmR3Y84R4CXXDhGYWv5nR2P7dTErcMS5HVZmBiJvvRqma2DvpobLSqZkq3ZCzo6dJaChNcXx61Gc",
  "key26": "348tdruuqqeeV1wiJrZTnd9MEGHes1kbgspM9rAGSUvDrp3f1eFKgEuKn1a2uFKZdo1U2deNvchHmoTLo9cax6PY",
  "key27": "4WP27nGQwj2yV4rccmqtrKvcuHqVQAsVz6cdxptUcoxAPGQSKkVnHNo6eJYYk5tNKvkuYdiEvTkydD61Szp98msS",
  "key28": "BikbMomA1h8hHPYongKgoULveNRoeA36QuqNuMnufacwWEhE9ji1EL9AAgvMGmvMxDYHQFuoMY5Ga379Xn4SWJH",
  "key29": "3ZPeuF2Y5HubDEMuW6enwfMTuFEZSZRVi21tdWJutvxSoNWfesucjYmZU72dombC572HxyiQjVdagwbV7FWfsbAC",
  "key30": "56jmJJBMjhmSwwji6J7zGRD2ewwSmaF6xS7o8t1eHeuqA68BULfma7HVJWxyW3ARvvheRdmrHJVpdj94ZwN6rj5h",
  "key31": "3Z4qfLHnbhEyVaLrE9hXt1j6QQ9VfrrN96hJwZtKEBSB1L6X698Yqm1ALUZ4Y56WFs64FwDZrRiyLxgPVwijEPGG",
  "key32": "GEWxAEspSZPdCfZBLRgicSaeaETeeg97LZYdHDWPfUU2FbnFxv1hJGYm5dJnKKaJAQH1y2aHnkrrUNs6unaVn8p",
  "key33": "3aSwmM3SXppxZAvnjUSoaXTYqSrLdgV4jRHNEALW13FKKReEUpASdZBZ2f9PybCdCA1EcKA36SUBCdZed3KGNYBx",
  "key34": "3aDvPE1w48sjhRQ7qpBwHE3Dck1XUTLSuS4GBFpcPTp2mtZKKfWDnosac5UpCcQDQ8pqk5zTnk5Wv8ifAzKP3gBP",
  "key35": "5R1fDRfn1sPNvvhKVFWRaVE2hQb3U1BV1yXALHdmRAPGa6H6THgVnrHSgzQ8MEdpSMwxY9xQCymetKRVVR54HX7k",
  "key36": "K2nzcmtd7EoMfKmRx5EQSdqYBpTd4gBLCpMqsiJCyqpp2wkpuDC5cMFMrQKvXvfjNchb8VAvWuX7ArPdDE9tLCM",
  "key37": "JCmH2WK4NdhG7QSDkDS6Mfx2oBPpWeZCRWL2fTQZVNnpH83271JHeT3KyqFp1YjqvVa91p1QCUHnPzdT4Szow8z",
  "key38": "3VChsE4gZogbeZ1ESH1bKxFS9ebcf4SX3x3bwm9s2YaZYAvHgo6F7ujaJaKDXwAkEY5d9v8LAo5hHkT6uGAqrSN8",
  "key39": "Xe95hbkjm9bo83GRw1JStixsdfpbj2mvGMKQTsU3qAw9oHSM83eDBCJCdMmxUjk367EoVg9oYwoA6kVeUx4kN3D",
  "key40": "4aKCkDZLPpTJiYGaPjAuPj65AXdT1FFwnPdXSkCwiXqesysxhPotRaMNHYSj5gNyJaPyQ5ChtBjcXMSKFd9dk7AN",
  "key41": "4aev2qYxAmDPpzupAywopDznnqCTDqQWeuVPUFtKidq4Rbu4vM4uMzRjRv26Xrdu91zuQdBsFKGLjFKy9PNLNFhS",
  "key42": "65amuTr649TcSovdabd56hhqM67hCfopsR65ATJmxYAPKwbt8ENsL86tgfK3Ebh3xDyRbPwtZrUu6rVZ7kKnGNyu",
  "key43": "3JBrE98gEcGrdUMTTNHUTotqEuSan19QXwzcYH3D1w5AiPeKnyfiW9kyvnrxw2DrSqg9EiJWVLzWSTitSVSdpt9T",
  "key44": "5sdQm2y5ex42LZ98WTgctzUVLCs5Dvf6FpK1GkKxZMEJ79FykBzoMBBXH69vygX4UeuBdwguoorUo4uApRRYcWAx",
  "key45": "3QpeGqrcQPTTwqQ5oHz4r45Lc9Zzx8RD5czTe1tW34EBmBYgwAELyBnyMeuhzTLP38vaTyH8U8BjqkLBVQhXcQRZ",
  "key46": "241gwXP5Wz3tw5cahGXUtjyf4YKGcR8NRgqSaZrHNaigk7HjrMg95TYKRZ6CAEWVvNJMAFJxB3DSXARXcJwP2kNj",
  "key47": "5ZMD71t1dyp4Pf3NBGH4z5x6ehJmdJtiVcF2GNxYPBMZKvFXaph2VBjotMbL7HGCDxT9mWyoGHzaMEX41B7LfT5w",
  "key48": "cGnxoSv1hLfQLY47f2eK5NoJDQyyfheCxHacQNHgnGDrG263c9JQwNGJFFaBs2sLS3jjEWhGmcfuAo9vTBT1EEh"
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
