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
    "mk4eozGMPyjzw1HWMmeZpUcE8FykjfYvWFF4KiHPRDkAp7X34vzZxdkD5tnCvo668wrqZTPs4FQTcNdeh9u4UP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KsNGh1biDbckRQcXCdzWVBxdTHkFvTesmNu97SV3UChqWhWdQRhLTUCwUzLzQCoVtpmbYkrRbySJCzQzTnu2zwh",
  "key1": "5G6X7dG1wogge5X6TJrqyGc3JZCSWWiTt4PFT3hT3gaGcwYbqgKpHH3DThdyFSbXEkbADRKWiXBJJZ78ZMqLXcwt",
  "key2": "2EhbGF1QodJzLuThiyNuhZBt8JSVMeLKQRuxU1WnJiZr4fnozk8BcRNvHpHhuVYR64W9WGjoNqCDrUwZNu34zNpf",
  "key3": "42qasVfnz7cXnX81svZNkcwoj6wJR5LcY5esZAWvkDSU11iVR1G7YVm6YQUuqGdvcETVJfm9EsVCHTbst1s2mzMH",
  "key4": "2PCXxEs5hhDVahtvpfyDfbWZYGTe3P2d6w7F7E3n3CWL9GMbWYFF9dB2nmyvuwzL8DuorGsaNf152EghmEgmNnw6",
  "key5": "4M4QyJh2YQ659AcmBmtzybjsh5p2zm5WhkeZgxWYydBvLy3MgMC8dKm8DxptW7KtokLFYZV7NvNEchM2p1tNmQuJ",
  "key6": "4PbZMjwWVNYsPbXhrDyWaGzKjpjEaF36P9wUFUXw7dXdaaWdGRWL3koteqvk5ycCoSHq9qjtDxQQmgTfSsBtfyLx",
  "key7": "5oZU1Bu7xnZicXwCXgGSbV5gjxZxNTuArDVXPNtvyhq8u2JGLHH63oTNpd6yejNS7TauwYJboTkwRjQWSFt64Mg8",
  "key8": "5naFX3RkNuvQjzsBsSG9ps7fZxPQPnjnF4m2DNatPsUJU7V3ZR3hQ3uipyoJi7BqP2F1YASaDyyLsisSqGiHN43W",
  "key9": "41v2GGeM5bNjFxzEkK87XAbmvNJrkAxdfyyf2MDLutGpXh81rQRC4Qk9meL5yppJ3wMcgtsoxSzytV4fVJVXCfs5",
  "key10": "3gpLmzTrsfZURZthRQWcfrA7CWBRknQwvZowZ4utsYKnDYzDa3EJnwbjczkrxnNVd13kwM4q3PBbriDM1Qxtkc8Y",
  "key11": "3KabB65xU1GayJ3r6a5mv95a89RCqeKyj3qqxS9oN6KTVfinBVcKaJTtprGD6C4WG7pAun4kgCvtY8dCEUzheDcp",
  "key12": "5B6C6zEM45J9Au24Ug3qz58tHKr9FXPVDck6CNGBezDKcdSvmLKExauKhSpykcfZMpswzMhsks6EEdthNSv5YSVV",
  "key13": "2a6eaKqnFzKZNjiXjxR2P7VcUqidY21h1Py7d4BEGLZyboQqtzHDZt5CNjD9UdLmJNmpMtrrcDWuECovAQtEvSHY",
  "key14": "emxpiZUky4Rfff1Ddq95Gx7gNUzEakm9J8iXvW6pp6jeUPEfDggRMVwtZ7kridV2TCaHN2ugCvxJJ6kSJnPUGis",
  "key15": "ua5yi6AUu4r5UH1xynV6AoZvEBjtEqxeZbzaqKyP8KfFJcYjFGW4DgAty1u2bP5FGUrfVNwMAvXj4BVeBECWiLc",
  "key16": "pnY53f6M4Du6EwAffmSZpZCypfargDzsCxfevHFJhE2VH483nmVbd4wL1972N9qH7zUih7Xinc5ngYjG8Tm7hYy",
  "key17": "5movpwJzazJRTgEeCtNnd96H9uF2V3GRHRm6fo4Q2HTYYzb4uccD4frK758HbQX7Yu4MkD13Et3WGHYHrjupjUBS",
  "key18": "5AdrTknpKKMLSWcTssWoecxKyhRYhpasv8E9RxXi4Wz9i4cjiNvFK9qNy1YkRWAkPrdEVwNmgD9poLkY1cDZTxJ5",
  "key19": "5nZxP3sTiz5tNezCVDnE6LfPTp2EMYsTWzoZ3F262Ywzpz4XzfowggWVZjRguAChToosappmzhvfN1nkS8QbyNLR",
  "key20": "SsAezhbZAupTZMMRGf2rpbdvJx8ireDmB54m4bg7gWGrAhbTtRM8nTzmdv5xzRT7NkC9298KdAzqenQWWCbYpC4",
  "key21": "Kaj6ZvYnwoF5KZBrhEwv3dABQp5d4AQuQHNnA8bkmGD5y3ZfG1ZDHXXVuG3iKJThTjrhfLRQXJ6N9MUCFrkq9pD",
  "key22": "2io5TG5qNp8hfhsVcpiU82CdvyAtFZ3tYWENmqPBs5SyvMPGeNCkYTdLECS3bo9TfWsy7h53LLNYACHwfkeM2tsX",
  "key23": "3QpmjwxQki4BY4AcQrF2M48yQEVvKAhZro1hdkk7WRU1fMXsaR2b3wriuzfVNcBCgwBviTxZuUFCpPqwcZ78hm11",
  "key24": "4phV2dG59nR979fZhVGG2LdUJfuDkJ2JdR5MXfBZ7wMupRrGtoLSyzv4JL11XDCxXF4fpkbZwwnjkXPhzXZw69gA",
  "key25": "4D2LKxm6jYkBZ29WppQivvcN8YA1Dy3PhVmJMWH31GcBS4oc4UcAq2V4b3MExaJZ5LZvetQ3s292Sm4SLp2VE7Cm",
  "key26": "54EXUN3Yo3en8aCdS9igvXdCLHT1Wo9QbgB37ebrryeXPRy1raAbYXGX6S6887tcNdygi5KJiqc19gsHbTAQgQjV",
  "key27": "gHweko8RnxvE9h6cNjm2fDvqXHvcLigTiQdxaZ5iKFUdRWs7rBMhZYGHutjVtTvm8PadKiqKPw9jBRjCffTuAwj",
  "key28": "37SqVzr1VHUSYNbghF6SgMXnP5pvS3RaeQWpQqMSVgKnijaabHqhtnGDyBF9npVR2EkTeUXzsFk3WN2EVdJL7Utu",
  "key29": "53budw7PBPHPSg9vPwaSL8wdxk6k4JMZEJZZ3yhQARQhaVqYQyXshj1T171ttwgEzTRLohehjFdMF5gDRZC4B7Z8"
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
