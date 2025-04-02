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
    "5KUJBbhPdHPUWsooLQBhepywGKtzfBZve25vNbnWmxoNBGHEez1BgACNT8Z19bMTNaqK14XYRotaEbXtNmN2vHJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoBNdY7penbsSq9J2PVawsKK37cLEkLXFXxverrepv6ZafpQicJCsUpdKSQV8p1hZ3CMTvbpvZEPZsFnATfmwJa",
  "key1": "2jDvjVoqb8s1mK8nyPVafLf9dCg14L5hhWwV9RFDRBBTpMjmhYnP4yNJKe5UYiFvsB23aivh5QGMCS4NXVrDzHBJ",
  "key2": "23XEpMnGkjwpqaMJ4kvd7GM72sEBkNiZiiSgEKcKu75C1R7Zoedm8RTp7osYWAsL4khU9tJAY2rErMqURp9nXyuz",
  "key3": "taUgb6FM5dq9RyFuwch1Yptdswm99nkDKfHKDjrYTqxxsRcBP2YY88tfpZeYKKweSa3UYGNFhS2QWuPq4iA5YXR",
  "key4": "4skLXj2qDxwXqZuXMKXhXEcurydMyRazmNcWDwAWWuYkc2qXKSpDbvN8TdtwSwDs55bw8PcUgPGNzqj219NTim3D",
  "key5": "2Vz2kB9NCmc3w6biFb8AYUi6fk33u3V3qhUum5XSyck9KYTs1p5GWWHhT9nMyZE22Un3sJwXFSP5fq1VabqcSQWC",
  "key6": "MusdMG7y9U8bmqjYzw2u4ptARRQeacvA3Hq8rt1Ffn3sNoCwcZ2poTvMJXkiGEJHYMe4w7bpjsZVxam1pH77LKY",
  "key7": "2TL5qU5DohTKR3QME3e7q8mpVuYHThqJoqfKjNqjJ9eNk3Brpkd9xay91LRGBRpAkuKestpLoKBCQF4QBvSBJhkS",
  "key8": "Nd7W12D5QscxQvxJBkGs66GZAaMjJWDfoeoNzfQXVVTwkfCtGQYZfcyzAfJiAZNaZ3vAD7F7D7QRWyzgqXcPeYq",
  "key9": "4jTNuNAePP3u9umL8s2jtqwmF5dsazaFvr9E8A2BjvD1mx7N5nF3o1vBYaRe8mjH83Gs1kN3GinFvS8A4edovkyS",
  "key10": "4uzQhnw8Vr9TDuZ9QzvTc7u2armtAsDjmvpuHFAGrSt7dDscLomFSX9yDs39YBYSk77mDKfERCLxgWgVXz2DEpHS",
  "key11": "61dsy1XVTMsEULFndD8nkccrpTmccWJHrSWfhGFRCq7eHDukEAJ3G1qSQmSXNe1nhY6LABN9id4C1gbMQSkMfFnA",
  "key12": "4wYF5rPH6S6NxtwS651XnRTvmsXB4qQHv28Sp66qNHz29TwhSVsVbvGhi4JdFUsFJaXbK5NXNr8pMC6rDYSgF3Aa",
  "key13": "2nj7Z8MkREQRMcJ7BSzMzo4cttbk7Da47QNd9CoobYfBB8gYDxMQjH9LSdVGtGGnTudWAr6kzYxsF3385K2UTcdp",
  "key14": "5id67uYFVU4Tvcp4uuErq7sKCjX18a3UqruGeF2afvhj9eachKY8qXqskzYXFHAeLjK7VDwH983WZ8639PpbQgrW",
  "key15": "2ajuHxrxHju2CyDQ48hQjGvdAhW2na6spYd1GeANopBVD6Mv3jcFcpbD4AQA7BUvUeoBWgNTkwfPdj2EXcpQ4g4c",
  "key16": "gw3mSM4sWNPFhCZUnrDPsaxfxBfjLdvw7QtRskzJYHUF6QahGRiRrxUKy8NbTJG3m8AtFfwPhgk6WawHtCRzVQj",
  "key17": "4p3mbAWHDwC198idFMaftUazresFiUgfobdoFYToRV7ngTFhPEt2AnVPbJh8eKToLDqNiQ9SLFbZJh2wAFyR5VHq",
  "key18": "4Bcj1dpL1FTnMwKHHLV4b9Vs2tm5T9ik2wGyxewBYnLaG77Jm9or48MFLbpGrqMkQHJ1pCmE1ghgpWunw6bivByX",
  "key19": "5WxK5Z7jYgwbE3s2dzyBFmv8ChucF6ZF7mRYZcnDVpGtJpY6Jrafi9BByJYKKygiXzpucFPEuFy8jeFmghcb6hSR",
  "key20": "3r4GwahMwFYRUbWSKntVqrNfpUBQcPcpwX9GopXheFm1YSBvxWuxdcqc6TSmVM5oMMQb67Rtek5h4qd6QNKZEssC",
  "key21": "5dUPxUffVEoYmDdSgvzfSA2fSqhb1rR4xtxHoMDU48LCzNTWoxmszyeYe5GzHkhLWjL2udgsKwZAJdJPvShoVZ4P",
  "key22": "5ZKrpEgDtq5ywQ4TafiUQkwVAW3CSRYrRCDAkZfMdbY6ivi77CntiQcw57EcPSJiV62jtgExh2XM3Gdnq68CNFT4",
  "key23": "2fd7XJvzXA59Z3HKw5MyvoR3eH4RwE5Pm2HbH8KBHXTjxHj3xAZ1GDUv91m9MTT7UQ1Tyi5JmmxWXm4RxtBESmz8",
  "key24": "2jMcTF6PAwWGa6ie6B2DguChRP4cawTaQ8vngCLFoVCDy8gjwE86mqjPPWFyqz4Ug4do9sdfnyjvR1vsmrnq6XjY",
  "key25": "35DDfqXQiG35S19mmXiU6uTkr1wxVs6SJv77myxseg6rQrBCzczhYgzupHCqPjWUGWKHCFK7N4zoxcieN2V5CNAk",
  "key26": "Zp8dhmcPWxLNAyNFux1xeWEdMV7bpRh41kjf16JeiXVGLYac1Egg7VxEHzjxwXpnKYM2YC1gZasQ9DwLaF87tPZ",
  "key27": "3qtrNmzRxQM6ECyYCJHYSa1N4E1VLNzC2zcXtNjyemNQ4qUmaKE4qMgRdcPqjzErXqufR5cwiwKANeeoZKjtHP7v",
  "key28": "5L3BaCd8GtXR5dXzZpTASk7XgFAHSt5xCTzMc8mKur6soQWnZjNPaaHwvGBqGkhzUgNJHJgLkgmUvPhGf6C4QEtT",
  "key29": "5tfnVPmD5KPt9hptBXHu36FmkL3c5SeszDFKMS986Ni4PC6y8gsmyYZRWBsBvjouh8haLRCdDWijU2UKSBiQFoHr"
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
