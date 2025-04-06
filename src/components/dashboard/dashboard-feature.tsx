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
    "2TSZYbdVqE4xofJwgEQgixgZ4ZFGTrWkuzdJ3zXtbewdXt4Bhunc8ia2is8cpu4Kz8xC4PzkkBwwK6E9VQZAN82V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48TEPFucKqKzrDtV9pKttn6QJ83SMLRf9T8oNFtTmnAWQLYjgTGPUv8qMrN8V4gdYPAsc1gv9HXGbKEzQiGU5HGR",
  "key1": "4XeqqeKgeijCQ1WUdcqAK8m7XMEBqQrbV2kSfVfimtHV4x9ThbaR4YJD924scENV2uCR2Lmqu1dKzvDwwk6mns3f",
  "key2": "nMRjKnDX4Hci6fiWkst9piPBtyytQKeBzjm4PDi6r5ZSKmwKSG2pQJ7a4XsAPC51tb53vwksXF4sqND8WN4UEnU",
  "key3": "21yk2EAtTDuH2Sij2EziFfjsepb59wuKegnawgUdoSHe6R5pD1h63istwJXxMPVFsgKP5XU4AQf9j1tRcHZ26bAR",
  "key4": "2N4QPgmztwHPMF1TC2eCa3K5ta2tfYdYXKwsmWB6pVq24N7HiRSHaaMHgQorqXaheFQy5G27VM2P5viMk2Mpjoqm",
  "key5": "FSEErj3Qzj4jbZbT8LSqFvTKHifxbaRLATK7VCmXwa398AA1nmjCqrhUMqCKGKyD1S5EpCSfQZZ8PT2AjtpSS3W",
  "key6": "EUg9jbSwmnMUSxjU764bcqtLzZ6s4Bb5pvVdZYGnBn3aq5AKafnZAp1RDc4FMoaExyKdaBAEQRmMs46gsGKA8Ra",
  "key7": "5r185U88MYG5itFrgEkeDPBMAHSHGNoeLqL6vrDUabtxRArMHSuryjLBLWcx86yPvSGTGcgcBpVH7khdzwmeouSB",
  "key8": "4F1bNPuwXegaM189uW5nFDMG1piUAedWMzfxMD6ZLf6d1gTvTJns1oCHotZSG7Qp4oPy6VAZVdeQmG4jVp9Wtr2j",
  "key9": "yv88QzXAfhViwDihA2zy9cxRvsWUaGwgt7ubP1iS3aoa365xRVSGhNL47NArqkMeVPmCsDxRbQQseSSLUQZHuUU",
  "key10": "2rYsku7eoxGhkfJXkUjTbS16bc2uWaaQnLnr9LzWEn2wpo1WQgMmipuPFRnPUg19vi2LzSsk8Ha3zVde1AUqQFtX",
  "key11": "4GeuPPjSb3fEduWUGZxq16tgxyYGijoCZhRTLWrhuMrxorZ8sGVhxr4GXy3qLTrur5rMgNpVSyZc7ZEAkoX1Psbf",
  "key12": "5U7SCj8bjnMiHB8enxj5L3mDzm6NUKVR1vi6i47nASkdZN9nvT9znRNKiBZQKgfMsUw1jyhWZ1MQJaRwyD3DyZLn",
  "key13": "5qDwsyA5REeLJKbNvrMz3kfrQ7D4WhhMnbxMiV25Somb8WPNpPtw5j38zG1sRL3ihTjzLQyuZtC5f7jtrBMFv9in",
  "key14": "4feYbv8k2CU4UWiVrLh5uQRq6uMCGxL8obQJhBdBssM7mZFzQ2xuoc74JoR6FMBxuxe1V2ZC1w4jgHCzg7RH6pBS",
  "key15": "Y2kECQyFcnrhytABPUy5geX9zuTDyTNuRCFhfLEo1HVWGkasMnuwftGAuXPbdeufC3XduS3HChrU7F7TsJdLVLS",
  "key16": "2ZxRy2Ysk6oAnSSbFg1MohZf3MAev42k3T6qhsqNAE1yQa4RM5kALGYF9u7JhG5x6cwCk1KEZYuMSihaGRuLe8aR",
  "key17": "L2E6xBDvUWebhyHzengxzHPhHqqH2TrPEYdE8z5e8huKtbBQSiAoEbtE29i75BkXNXYMzErvWzyYce2PywAobq9",
  "key18": "3xaUdfHwkWx9bzqZqHgkRgRaCkBvwKTwETUSMdu7XycTPRuiWBXgnutFRgS3PEbCrcnv6NHMZs2EjzuWKNdsXicq",
  "key19": "23TExqCYWV9xnhP8aGENi2ZjAZmPXSVmwNfmm8cLLTJK3kAFXvaEQnUrBRMHWdjtsQaSnshuZEEPWd7sxvaQoyxF",
  "key20": "4fgiSX8NzP59NSgbRRZo7LXcByLu3HEetydji5Hk8aQNzwkKBXCRstA8J9G3EEqBmjQmm3RpjCPvwvWMPEq2pRZu",
  "key21": "4bbZPPrCC52yxsXQm7N2WZspjdjMNy2hrBQGRnx2Lw7QJbHw76wcK9ejsEbdAwSyg3GP5GQGVydq6bBqBSLn5UME",
  "key22": "29jKj3PSk1wP2gxa9BSmRjgxmofsbdPmb8Ry7PxzrABDJSX8MzRc1hPz9LAgdR9AVXN62axmJnW6x3jFF2xf5XsR",
  "key23": "2JW1x6CGLWfcC3KYF1Ngkp3m4hnGpmZQmBQQg6mkuzcVN9KPzhRD6A7gwWwvwaWCfnapYGVVnY19HZzsoEMZTdbU",
  "key24": "6YsxUSxkEjPcZNNMiWMWHaX9srhCXGGms1MWNwCVj1XknXc7UgkydWpGiSPYMHcdBAJ7YGvMgnELwiCnTu9eETv",
  "key25": "5SN3xCv41f3ijzT3LKNvryP1kHLT8QPMowGtyKtU5RNfiUSqjiwgKfLTkf1RojFYUvPtZBLSGxZmg7jxLgJtwgAY",
  "key26": "3RancevGbY5c1FMo1t2jNstSxmUJdAP7mBGgbR5U4YuKuAmG9Eawahx4q7AoeLwuaCD5bkTkkAzc9KPbGH2TXpBQ",
  "key27": "2ms7XMt73JKd8nqXKaVdULqdAaSh354aRStELyE5rDb59bpxvxvdxbCMn84R7mndt7qLE6SKQN8UH2kC2Rfb9vCL",
  "key28": "3PT2h4WGrRJAy9VTn2rxHk3FC1aLdHJa2kebFL23ZTK5ChfbvjqmgHs3Ya79SZwV4JRAUgn87S9r6Kbv9RE8KA6X",
  "key29": "3HDqRhz4WQhZE9MJEKTqp1Kv8cudMji2TXoMuiyyCT1Mk8UPVcPtqurxMgSSsFh1CcRr26mAoV4Lgz6v98HuvKWh",
  "key30": "3eJ4K6EVzYpa32ifUNbVQJdx4iBMJ8Nm4rUmpKr9yLseGENwQS28CB6MPGH7bzzPcLQvH9bFXAFihk2xE4UdDUCf",
  "key31": "41jDBsu3DboqY3KQU52mCu52FPkVXEJ5ugoR1cP2P8DDwJnGf8Brd7ymeDKt2Ku61b4Df7oyKeaWCRKRFWambPG9",
  "key32": "3sPm7CJYB9ymntt9nBxai45LBFsRAWsa4qr8eLoPFQLSCgRRgAcVvc8xBS7zMHHGEQM1ytvDBxFdeajmz31CoiEV",
  "key33": "526nCvbaWJZEBzxJ8c63jKtu6L66fWWQTLrs6p1nYktTDpxHgf3FubWHB5YBDGcz8jhXetHpUV52234siR63xN1D",
  "key34": "5eYC3zLGmDXbHABiBjPa8WEm76sci7EiFDFXzZzDGAnLuddsyDqSwZnVMcezdxfuZsrmECxynDuvWB3UQiwthR3U",
  "key35": "5MWAi6XCm1XpSzUESXYYfbEnPqXSAPW9ZUiCpvmgypyYrMtTzJg1uccnSR2aRvTH8yRauY2E3P3dLAtN9kjGN8yV",
  "key36": "56za1P7C8AYwmDbaAKkPNJa3Ng4ThsJEprFGJhhhd5prB1KLijqXRWigpySHPag1BALnqtg757Q7ouxKxx6WEwaA",
  "key37": "5o73xJ6ERPY7Kj9FFp5v7gyZhnHPshGFwCDEKpB2eJwGn9EvbLC63ND1DhGtvk9ziszdYi4QRt7Awn4FBjML2DZW",
  "key38": "2j9ouag1yxvCd8so6gXx17bxs7hJ7VQTzq36q1biv4cqYwYiKiv3YRMrarjMokvfh5jpz1uDcNjfTWtK19XPi6Ca",
  "key39": "4Toft9F5Lse3pjdnVYHQ6i9bRaHFXjLZFsPazYXdrvjYEszRec1zwvFabRJwMBnYaWpB4ecesDY4xGyDMVCVsmmt",
  "key40": "3GWoX5QuyVvNj9q7oy9fRgSXZFUdBKMKo4imcMExXhytcHgkvMNapXHFysWAr4MNcUdSWrzSceYiNN11Cd4qzm6T",
  "key41": "3Yfw1GDXRCvCpnajVgYHyMp5RjVf16F16S4XX8Z6ZdSYn4G53ERhbJSdDYTaLS2BDStekZaS258zWLAGHEgA2HYa",
  "key42": "4GSJcdnPpXhgcpqJj9TmQrdh1raQFKcfjt8c2mgDLTcJ2FkEPFietbC35buivV2UoTpf3DWs2FNiXu1wtxLKkCPK",
  "key43": "4vxCgoWbWwCQ7ExABM9fyXDUWLh1KLE58N3Lhf3tR8zD8oHofekQwSAX9pjLkpfotVZNWbDwfXySo7ygDnqnK7CU",
  "key44": "5WLq3RhQk16CQNAcYWaynGcj5tGanJPZvZkirTitW4D4Ja6rw7bRaa8rWnYM7Lo8UspobFRFju2BKyVKzEXs5RfM"
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
