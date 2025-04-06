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
    "29iorBcUBDn7ijqSTa8zrSLVviBDL3odBJwr2JKM94bienSLFryRVHgWD5iFkLGYMvPcQWLspx5CF92v1xFWYN7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9xMpFzU7uy21wWwf7jhadErGyDKqcnn1rMxRmEwJP3aR1x4m7pPsmb4xmX4TW8k9o2c8hra8N6rmYJDjap5fhy",
  "key1": "2r5nXE3DhH29sKh66iRHsGeKWWDjG3rSCu8tFWGZz4WrQAFTwXbEMJ6QAGRwionFCpzkULnDUmRgLXAwiU19cPVn",
  "key2": "3jjtLVwdQi7giJQ89gnftQDKsPgfVUWKr9v3JS41BPLt184hAjEK5JTcAMTgSkhDwz64rp9nroPXyee8ypAyA6xL",
  "key3": "4cNz5VmP9YcAg2mcvfAE3aaYAbmZK7P2L1YEXzDZ4WG1y5iUWKL8TQ3bGST2KYddpkRs7z7CeTLPehaDWrHJGpu3",
  "key4": "3kDAxAe634UcUxudmntwNh9H27MkN4PmtsA2GhSEEnP8upFe2Qgy398pfdSEPrLzAm8xpHv22p2iGGtNZAvrcrZc",
  "key5": "3v1BiYgz3C3SxY9jw6DVDDjjQ8VLNjCHewyvoYgd253XwVZULpjSDgdbsgPhuSzjJyKmKQ8YqW5WZ74jJmAvg5LE",
  "key6": "3nQwshXeihiPdprgZuAE49yLUvMokKzntUuyB1EsYU6MYkVUEJuPWTagHpm4Qk69zhtPpUp2MmjKvJUhPhEJrDd6",
  "key7": "wvrKycpcT76Ub2CE32KMzeBQebA34YccMBbwW5K6ghc8D4YfgsBYa61B53k4YTnRDVaGqiuBBoprY7545e5XhSs",
  "key8": "2VE6dNGtMhyiQ6LYpeW9gn6cAh9wJGrn2gQA168MRxtHDvKXFdymHK3hh2L876vxLfuk63EgRLx3z2gNPFHw8nvH",
  "key9": "5X3ci3nW6jHA4cZvCUgbJMxkBPRomvPJYbqi2eooodokcs1HSQXzeTcojoRqruHPf6sg72dreVqHPs75tVr7DTtZ",
  "key10": "45Q9dy2m6hRdU7vfWjZvHxNrDRAGmSda1JMcTSfoPfTCMotRj4dpHaWZFQRBtmqcsBjeseAM1s7xCfPFKwjxDKq8",
  "key11": "k9pEZxX1D34C9CNQ4Jf31SgPFi2oCXGtvdWcM1xkwdPMMZWTYKERTpdMUoBQ56sh94yuLtWxCCpfkLBzUXEBjah",
  "key12": "4hGtj6NktiFe3NZ5UTcFjENw2gKh9QPdeU2CiDVgmbBJNUh9CrVTcz7uxrmENZNtzUoNBEGAixK5Q2qQHRhG22Kf",
  "key13": "23RoKFHY4SMYuaitPSUbWqUpZJeDrypkbEbUdL3W44vUVuNKfMdkkMHcohDeTu274VNuddP7Lysk1Lw2wb2FWj6y",
  "key14": "6UFQtkBijK3NbUUpZ98dRRGwMuQbAWcJrxFnoWZdzafbTE2vXtiEuQc8L741YhiWhv6kdPZaRfpSRY66zdVsDeK",
  "key15": "55ofMJ7tuWpjCxLNTRHD6d5dHzvPHGETks213aFCC6QvWUdLBP6AtEhVAF1eWN165CBkb43QR6wVzioHaLUi4wY8",
  "key16": "4yUJpDFiUs1XZk7GV8Nwcchd3iUGiS7vekUYKU9ccdwnq4ZkjxK6Eabfwb2KhsS9WwwL4JypSNa1YRvU3pehqkZT",
  "key17": "3cxt7T1sxLkwTgXUmp2cwewJPmUCGCWtFFygCAbwwVkP661bjUnHQ7qcmk4RzQqaK3Z4PQjB8EVZkpU4SfTp48xr",
  "key18": "5E28AJ6wLivkrqHw3jxfnDkT9xRjwSvYQbTzZDAXibtPuLcjGqzfW9ZVqHkPc7YzXr7ujYzNu81rQyDaHGYtffkN",
  "key19": "4jePsjswW23b2nj1m3xPVY5kFHZtcPFwRN15Z9BwC6TUaiF9aw21DqAxD33o6jKBqBYieww9uoh1nAku6mWwDNj6",
  "key20": "2nbRETWWGz5iQ4PMoJPESf6bppVEZPnajoVHGBp9LqBi9UVM98FoCxumKWNp8iRTK8DCKK7mhhNJJ6RV13wRGGpC",
  "key21": "dCNnRaDz2cyMoGfWh2Q6wibDuTpofsz3kWoovyhWvH33uwHUsuwG1GnjHsAfeWZutzPubynGJP4uGERpbNJDu63",
  "key22": "5QRbPQob9eLLxbQmqTmqoyFYFqWHLcMS7fA3pBddadtYqHwQnKPfrYXUMRdsA95gMEaoFh5UV8dPtxKpMMFC2bCm",
  "key23": "39hS3h4DpL9oaDuCMWNe8ekqJTPpuJJsqh7FK7iGvQVThwHTJ5jFKWAGgVVGBuqLyxhBYr5JZRPRUtsE8ruZxyXM",
  "key24": "5JkRwi8s38nzaaypyYBfrULLz11cvWn67jRJhhBtbf1eByucvnBwyp5qvswfPo6V3CzcKJpPiBaNMVPJAMu9LiR5",
  "key25": "kHikWa8Cq3W7gsM5iFbaAJikFj2erojPkZ5bFDvQMpHqgHASqb3eNVbSNYrvDw7gxAJA7h8uJj8Z9YZTooD2xsv",
  "key26": "kJMFvA8BognAb7YU8N7ufNKjLPGVQtmy6U1YY1TY1wTUJheZa1mfYapCcovxZJm4FiPCtz4nr4n7oVAeHhSKpLJ",
  "key27": "549EV1c9izaqP8RvChLPb7b65i3Ef4g1B13EbGbiA2bZ9CxPv1vYB8MLBUxNCfpeiooh7fT6EVAoHHEao4LLfzk9",
  "key28": "2JR1Zr8CgvgqX6bTeGcqCmCPXr4BxmMC6vV2d6Q84oaMKmLuvhAFXTop2C5GpKEJVMHd6Q7c7Tq8NYzjEFuQZ4XY",
  "key29": "1J9AGTsKXuTP7vedVSu9NrMdDRUZXufhpeuTUP5rzMBx4FRJCDRk8cziCaDm6aEaZ9SDgzSJrxbGxvCZNJCe7T1",
  "key30": "32kpHCTjp39THcDw3CP112MhGum39U5ntkJXyqmtnLYeeZgetv9LevcbdAwmRczHNgNvU2jNDY3dxqS6iuESqLhT",
  "key31": "5zH43aAUwkFhNeEjDayUNTJ2qPR2vBmbDZgoCSaPeQbt2RfVFNzNrQg4LUV4PyZ2jcztgueYB9zzXwg2K1yxAtS7",
  "key32": "6248LcQbCYhKAxu9oCVbpq5LD1E731QDpxee525PmZVeKTjNLLPgHFhELHmWguPqT3y57v63RtRiFmwxThR17Hz6",
  "key33": "3dHDLrFVsNCa8wAkd4cvLFmjh6yTJN6XoLBz3q7qerMb4tZYU1pgexXeAznM4zeyFGptZP8fAjskXVh9ntv7Xrzf",
  "key34": "2tqsk3jbVo1ECzPpTnQXjPxnbT78SmGDUjB3jFWaxb2LQ27GG487wR4o47Ha6Lkw1bdUfyuNKzZtUWveKBfMdeAA",
  "key35": "5PuJAGxYA34DRQTTtx6ezk5ej4YV5PZyUr5uu4UA2d3KPiCUYmSkPzZ3iiRv7U8ZD3BtrBHg82UcSr7EFv4qAxJt",
  "key36": "4RfxDqGiHffgiNfSiwWkSrFqPh71xaiUFZgqPQKqn3PPwQeXdcB2E39cSAQuFjmrVSpdPuufTZpMsDCb567WKaRe",
  "key37": "55DSyZgw7eAXmNB7xGRAVU6Nv7YLUWgDi1zqWp7F3zJhmLroRbNasptSiRzSiykstATtveGQXamofUD5saextoso",
  "key38": "2KrgsaQaajZXodTyN7vf2q5YGmJJQJaf9t2PQeze5h3FGwEBPY2azJr9GrZWEAsrGtWoZgqS59dXJorYyhxddLqj",
  "key39": "4urng3CMp3RdVRwLqCFQ3vXbUPcm3Z1RtMFZ4cfJMcRoM5WQGDLQQ64DhfC93ngsfH4aYKbDtBJ3hCd457zJdsNz",
  "key40": "2243Mdfu6fG6kGCNp7TJuZghmAi9FF7fe6Ppeu5Ds7AaB5xjgxuCFmhzyGzH9fC6zrg6HAvzNfjnEENYsKP1oQik",
  "key41": "2s7xwmLFKq1nLAeurbuLJyCQazXKHyRd6Gyo36zcqWSsJkvxREEX6NtizLLsbKfLLrRxs1W9xw4xH9PWxGR58UdZ",
  "key42": "4HBKPG3CxfBfJ6Lz762M6nraDqVmHT2TNW7ZcfCeGD2WoQAMf9D6LAQ2ki5pTWQHBuhKJ4GbKypdsjUv1at6Mpcr",
  "key43": "4A9ztssLqnk1xi24SofhqPAhmF5oLLBKnfn8XiUwEz3Lna9DBWXutVwj7n99bAobMCCur4q1YWW6Dvj4wa7kruz7",
  "key44": "3NEvNS8a6HLfQMpGyF4HE6e97df3dRLfsJU3trxfCSnxG9uMQ7xy8eBXJtEyKm1oBnab1n3S2ND887Z51yC783Bj",
  "key45": "2KsZVpmeiJYZP2PuQ8XzHfzcbYm3BS121HraULPfQxJwE8jJVvmbG8eSjfMtyvivGKDMjwtx9iF7w6Az5DSas9cR",
  "key46": "57CsnVYy5LknzjPhZ5anTXTzLMFvArwUuks1mvbxADm7qnJaPcUfBWsJWzQzYbVeGmHyKMsCn7QW4qoREVAGsTZp",
  "key47": "3SAC1Ndru7F7nEbCTu5LSKKxDJ4k9eQLRRCaBfckNyAwrnR9vVRdmRext9RneErnckUm5b26C2E5gn1myJaPKs7k",
  "key48": "5XNELbakAbCpmej1d2ApyaDwuBr4zY8Q46mWvNQtnWdbVBLF2Pheec3ufnUvZ2oPPHUHxhwmG9jRyFZxX44QVpRL"
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
