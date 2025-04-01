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
    "4LPJLtYsFNYrdSCZxMT6cqrKfGAh4Ym8Uoz4d46Fb7AXcZoo3MGwCZFgoom7ZmdeTKWBSVv4AbUt7CNvRv7nkfB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a1zxtLkKSJ4fEVxWFVV1RiPhfAjw4my1aBVo59LbYPU7cUSfQuLe93m6sZu14qZkJqPxVRXfYty1SwzEHuEkn4x",
  "key1": "4wFn8Zs2npUQ5f45Ckt8wL9fxwNAoxZqT28sA7bbfaiiyVx2Juckz7a7SoB48ViGYnWK4MuEUzYFeFMvUB9jhuq6",
  "key2": "3FoFDCmvrJ8WyDLzy9nimYno1Gpida3uJgKsWiEJu4G2tbCHV4KRmc5QL5EaLfo4v456Tjwm6PdQEErM4mQqbB3Q",
  "key3": "3aCQZePoz8rhAQ5idDiuvUBnsh6hURqjCDdg5rPQAo5SD5655AWrUpTYdVGCBHKFDRkVjAYscN8XHqqTMDHcdEPe",
  "key4": "3ruAdBDrYDNMSheEaY3n66d8chxKcpMoQDxthGCzm6nuBLM4Z8feyYGrGvNS4eMvVCXFFpZdMuHrT41DY7U5y9mW",
  "key5": "43HShawQtimgbTn7ugcGnxwmed2cDNCJXV2VraUzs2xzXN6T6FuSLPs57Rc3mmSkDd5CDyRAe6UHvPGtze6He8wo",
  "key6": "5YBAoHbQPHq1E2pUZysszFDGG1wSAXUjggvzn8KYBpiU98pY5V4irhMBdZPd5zcXfXttRLxaVY1m5Dv7gqxJ5RDD",
  "key7": "3WkU9pR2RX1cu9BVgzoTX1nPYSWy3purGCWkgFYk8paD6H6JmKuR75hVwjohBMh98tCW9e7ziYLiNfHMPRuA6B9y",
  "key8": "3cGbPeWbQ6ENFLLDR6NZ56RTCJfdaTH2Z2YBAbo5AQXeHZYhdfM1BMkrpH2w2dev8snGozfEGnSnoyS7xqsyo8vg",
  "key9": "5WrRBX7bQ2N5umny2KUwwgGqpP6GaEz1u29QKEVSwUezAcUU8TeWnBivxwRHi1Mko3UkSNac8MFVNSPzQ3x31RtF",
  "key10": "3nLm66tTHuMXiTdJDKPn6FPSgEmfeSiFNGejTpB1r3YQfPXik8e1nkDQWnkqj8hHqPgKwvEpoVsGNejSUmhMULYH",
  "key11": "45jdBoxafdF52hWdg4vuEhfvVQeanK7a7Ug4jKm7xdVVN8VzJZvy8b8MxVJ62GGAaMDUUbT5m6Y5FhEiYBtkADGo",
  "key12": "KSns4mxKVXBk1NbD9qT534YmWz3EyG8G4vdvh3568ksujipcBQUNQ7ntuFUx5ViiGj3Kzc7rb1mGHymYNHB3gZ7",
  "key13": "3Ux6PbKyErbVXqgELtdebvNnkDcsL6YasX6KvyKnEbyLM5hLRPJtEwybQp3K1VWAWsvND8HEz43MY5t5srHQFNPf",
  "key14": "3BfmMgTkxoss4SaesKHXmJ4piR8dQ4X9LMTCQ4dL2ZvoC6q4pnrpREZA1At6FkGmR31EgdCiuJ4Qkq9xiabdpwLg",
  "key15": "U8kt6vdxdajLHiuVq1zgZPh8WBcqnHebn9gnyLczSRmcKVPxt7rURy4mnh1onrjzxziRjgyb5MRm3a5RpAMiYrY",
  "key16": "2CjeMCVFHEcSivCmzbZnbzTMvJaJa1QsaxBaeMnLLchyUc7Fmzg1cHQdQCzhJiyUfVzc2GV7Dnm7krCyrMYas1nM",
  "key17": "4iLPLxUF8jxva4fQ7TmuYCoqUYnS4ZLWppWnqYFVxMEFUyV9CmFhQhVTMJ6zrDVUaWhSZ92hNdPGbQJ1TTSUFAYo",
  "key18": "2LN3ensxdcj2D8rBtvmntHU3UGRBBxp67SyR2Bm5rgMZdB8aS2e3K6Ay4u5dQMN7LfmaM3JWeAw8wqsnrwJq1oFL",
  "key19": "5PLEoBsSTNLiqpeGBhvXDoK9xLQqAKFW6z7cPKD7b4fnGqfpYSpqQwr3skSHtrEoie6CPuw1Pv4RSKSftKXJzPvW",
  "key20": "35q7wjR9JK3ihU324jS85xPXedz3CtyPbaGJpRUXtxvuCJSMrF898NzKotB2F6JgNdFDSqfJGGuTHoQ4NN2Xaq9x",
  "key21": "3gZob4ejqm1YCswFv5EsZpdtJFBc1Btbpcben28jYZkA6hjwGiGJipB8jsVHRNi2H6XWYsgnncPWqnrUStJCaHBt",
  "key22": "4punkZWK4Z3XLwQireB16TFT2fYdxRzmj8CAfR8tusPQvsnzRTxj7yt85tPin7fu7zaxavB4jsGjGaYDtgTKQuE9",
  "key23": "3oKsA6VcVeMxbrTQy1UACEdvpQ49tZuR1eaKgvYTms8hECYeVgwaP4jW4AJYQq9DQfYyNLnB7mCzLB5ScZU79ftW",
  "key24": "6EyyDVgfyjJJYuVp2F5s1471dG4QwgoYAJrixLLSUuiRpU37w6LQfsFCiiJ92eg2ZZZrPpU2LLMeofj2eRUBDh1",
  "key25": "2muwJp6P84UDNRuMi1XbACup7VCfkE2YDoQpHSyXLENR6hANuT7H7RWPAb41844ZyG4TS9e8chYmuTStDNQVQysv",
  "key26": "MZ3E6zn16fVHv7yNXzwdwiWXLK1FkGKR73ucJWHGp4EEn2jgBSsuShNsaCpwnJyzw9oTXyJ3UDG1Ts1rW7qatLq",
  "key27": "2DCqTbmnQA52LnksrTnHe9xn6xSmefTHctjEfx2z9eVUJG7twb9VGBtkZZvAhCyQRzcr5ncjvGsgenc68EgAdiVm",
  "key28": "n4G22bJjtAKnHU8UNN5pThjngXgDb9PoEp8WuDAYDLrs3k7E3o8bVocwKgqpF1guKxB3AMkS4gyHRe4KMKgFdu9",
  "key29": "315BHrdgyDKG98U7anRYhK2G2F66pMU33ibzxSUoEPEFJSnSjyCYCSUATeEtC8ULcnitHeNfKmB7MWUSreWCuox6",
  "key30": "4xopBRZNvqjvV4x7c8bjJwpwgLJpUpQaNaLMfSw8iA5djCFbT7LepeHAVJh6o4C21bcd2pKpuonxToxN7NACyAQ4",
  "key31": "3DXLLHFrtiVPrqF9aBFPcAxLEhES7FRQ5SdLRPce5g39X1Y9eaRcBFSRCu6vMwG9ocYiHuJD2nxaW4XfUMktNTGy",
  "key32": "47xBXxdsLrvpbX1bv6zgdSNrnwYCic9J9Emk1XR2dfeEyJowp78xLd11uMyzVVzdFEgXiHVgbXcdw8va5LaGApQj",
  "key33": "44dTCJTcj7Vz1gT6Bqg9mkvtQyiwxaNiU5q2uitgCuh5RHkrUKvBENioc2QkJEsaSfkjMfEsXUbh4pvDhxxRwJWD",
  "key34": "QhvBjBQTEZUqSD688Aq9BApr4j5VtoCxSXimA1CDo1DciyNQYYqnJXv8HaDkNTx1PHUALnN7oz5zEoQM6xiG1AF",
  "key35": "EseTP1YV8hjo1WX59oUB43U7H29YUbFStPY8uM97gBauXDWB8Jb8ciR7fBuzDbYoQZkGq93wtiRD1LjgbNHVFwX",
  "key36": "363v2Pf6Hoqt447j2sZuJJse1Qzgyna8m4pXtSN26Aqd7mGDG8MhfJW3eGiBtSvT9oooyPbCBGd9ksztPdrYXR5E",
  "key37": "286MZGhhBR6db12AT4nQK1GHnrLvSes9VSmJqyzgjx4bJ4d9WEhymoKNkN3kmLjms5yRH8aKwwws7Ra7MNow7ryA",
  "key38": "3zp57KDcsvTFn4pofzKf69DTyDbWigYiHheThGPuxj9ypMhXPauNu4UEr8tvWXmXbXvYgmweGh3xCq9k3gGocQcr",
  "key39": "KagrNJM3A5yVc2Ywqq1y6hHD9rdH44yvTV6BxnNpWgaRp4izvitW9icEVPdudm5h57SyHq3QHThivrsCWkUwGNd",
  "key40": "3SPPPWQsAKXhRzfTFe88djnYuUAafWbEa7RNbNAWJzL6wcq8vhdA7jr1BCR1V5FufNGafCbiHEhfU5nTdqvraGe",
  "key41": "5KLsV7SmpjhrBVuEcjN4Zkup4NGPTwy8bLGwnWV8TN6Mg3f7Nyubnd2QbZ51EKuRvyqeM9yEYd3ZyDVo42RevY1C",
  "key42": "YUo9YE9uyRQYdA1uY9bW3pA4RfSQE9FPjRGAfxUsAnwtdPwi7MfSnvzD68GJtkJbxN2wNkFWgYUn5d616BRqUUT",
  "key43": "3PF5HGyXiTcXNjr2yd2pdNR1r4eVEu4zAunVJb6YBqmizxoJ3xh9NcUXQ2p61RfeJfBcozicnwmARrnYgeqJUbE8",
  "key44": "3RaYpJDweJ9wKBBDtzviZkXLzmknTrUbgAK71TsMdqs51qozkmCvBJvXrzmVaisE7mFpyD1svZYThzDA4byjaHPL",
  "key45": "e8qydNF9w65w36QeEFj7uxszSVzHLnbEJhu6YUdxqPVBoavKevLQoyMRz6Ys6Rt1BKxxq5eBEDHmriJ3AdDfWNU",
  "key46": "4GYrNFe7y2Es53eqkXmvuW1Yj7xFJLVnJCU9qPg94a2y6pbueox76oWnrFiGy41FmXq8CJM7r4hmiGMwjzZWykj7",
  "key47": "4TN8dRw11yfXpM5ohezaZEo6omFbvSZdnRzetDWKhin3PgLZTsswCgJkxxD4vzNquCTjPDRfMA2duLVrsVmMMsWz"
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
