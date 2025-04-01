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
    "2cyPg7DWq4tSsDwbx7Q2YzSmLJfPpKmojCzNo3gfjomy7iDPZKMvnvoDkESpuVnGwj7vZocKKvrTBm5A4TtwkVLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dY33X1rGF94x5rjizZCipdad2uAWrGs3Hb3BqgTVz8iCnDtjD66Rsefbtz4XQFmJzKpQJAqbN1gYr1zhUrKBR8F",
  "key1": "41VA2NAkXv8LR2tUTmLaqxFdsEk2EX8gVSeoeYfm6H88yaSow4nPXf1nqe6hp1Fr25frLT31A3DGgS7SwxTw64UE",
  "key2": "3XfA5F8Hg8sfynwvoj58YEHb1i2SZmt4mottFbHhkZoj34y67L8r1MqfbSwDLjcpTrmnHxGGSvmk4dAKiFFj2jaN",
  "key3": "5ZoiuwMzhHrSL22RffxpBXkpTe6Br1AzWGnnDchFptFetZLBEZyukik8dUdC9DUhDvQ62Q9kC7DMZ9KfEhTuckgY",
  "key4": "3FkWkrwSZzHwGP1b1TquwCwCNb4BRYkGCSYRNW57FzFDk4TUbiBtvxpwPxqmWmUAmxz9UmV9UrcmCWBMPbaRaTfL",
  "key5": "3wdytaXJFb9Ve5Suiv3VTzULVConckeWTobcHNp3PjL1fhtgDMweXHeeEztedBBTH2eHrUt8S7oyeY9T47wwrKWe",
  "key6": "5oSbjNe5BJCKNnwti5YVkN51YNhcPQvXP3LLurKXFSA7SFgv7cCUmXRknRPh1ETyP5yYehMzsPA3NbCgAdrFpQrg",
  "key7": "5cgbz9vwLvDpfhJuN2wBeRLMsvoXZX5Uur1c9E5HHuSZaagKahzcs3xvsLWTuCEx4Vsb9wn8hXZmAUgRg16Mfwy",
  "key8": "3VSL3MzKjY4HeyPPbfZ6SRxDD8BWKb61NTJTaofF2WLhMCKFZgpHk76iE2MaapZM2Vta1xAZPdXkQ6VXq9st6JYY",
  "key9": "5JEh3P3aDndJvGMYSHQ3ArP9Htv1rhy1A3os8UUVnMbuEExujwN8Z3zNFJxB1uE9E21Kgx9ruYcVVQf9Qw3A968u",
  "key10": "3Ke6pzeubrNe79v3nooVbPfZSW4xNPs1jxmayBbkwURwHNMYNxsoRAR7QAvruWaMEhPt6NP3RZFmPHBwaevHi9GN",
  "key11": "JMdTjTc6i6vph3SbXUq74bkmbayEVbAzh5U1Y3U3Rrw9nf8W6Psn5FnpBk4GYcNreo5AHXGVxdXVen9VR3AnvLE",
  "key12": "DntjaYmfEUiU8iX13dC5q5NsSMdVsMfBfDdmtfwkSAyUxjj5Bb5vqW3fqjiFVkwxJCE3i9efh2vdzRGN2663GXk",
  "key13": "hmSn3gRJAh3jBWVq4S8uw2YxM4tCYqg5ZiZCUoE3n4xWSUq4bn2ZPgqkZWpet28DHW7q34T7V2eBrTuyZ3hJ3ro",
  "key14": "2PHRvbtC3fwy92NorGhaH7cmp2F9NyHrCns3KBdeX3iWYj2AsNVR5qrguYw39ocorKMNZCif9YwnFX6euudqB3B3",
  "key15": "3XADZju6ubt2guHwWA6gMne8RNaC1L4HWw8RbvfzGiLLtqQ3cbVy9ESSpwp5Jn7seZSoSYwoqxLkH5oyhWFCUt5D",
  "key16": "ZJHUFnVmxYaHWeucKA3L2ncgFaUU46BdthiY5wFKvi2njTNPoVF3zHHaoCV5msZ7Kv8myf59G5GsU8Zptc8Nj44",
  "key17": "5Gz1nrs3TKsQ3gFLyGKPQETZheSaxMLXbQjhjnkoEza8KARzNcZLEQFueTyuQg88peFXgMgTAmPNjAFUNk45ptod",
  "key18": "2dRKvhifSxQYUrKm3UVpxNAQkSHuzkdwELtxcr2FP5hxXEGgT9EfSB7xCFHJFxNVVPMpW724A3d3zePwsteLESXG",
  "key19": "2oM9GUCVJ6nfpnh7iiht8NTfuB1SwxyZWL4uX2yYejSr7QtRQ1yJBBqEtqeEho4TsBFUxdo3RxeRPkTc92uHSyMb",
  "key20": "3CaVZhLBGJHVhdb4fZ7ktauX99M6qj5RSQJA8aFT6D1bQnpQug6NfcU7A88NAYCMU4LxsEMh5QgazCTT6WtrAqmj",
  "key21": "4v5tNbPjtsWoMYAviwXauuneByDaYhgaczQdXA5fFxYFbK8NQyUFWcjJ3aTK2cppaVd9xTjD1MfXJKETZ734X7y6",
  "key22": "63WXsKVXbs5bxTHUikagDfF99DvCW3GgctcmjKT1jWq86PWEqCXVFu8neA9zviPLDgeXMUNXhBRwqiCPuGfQRH9r",
  "key23": "34ruGoZP2prWvHwZtNbrgrCtaQ5i4rzGdxxkcZ663uaMtaMvRoAkr1qFTTs9YCZySMesGqjDXM2jEvgYSUwhzKdk",
  "key24": "3wbMdZDvQFWaDsenDmGPKXYWuSReUh447HNLBB8Qa6whXbxR1H338RXDCyYVKcvMLabUqT4C4vzoM74je74N1cHv",
  "key25": "3tRwCnLogogLaHE6bZwz9s8vcXZUhb6oLZs3bm8ewpWYzrYAujiVwNcDBLQkvwqPF5AyN48MumMHUPVJ1HUBeEbt",
  "key26": "23HSj6fLigfrPgwh6sR6vDM3WMcc3NVp6aaSo1KjXtYZTV8a5u6trrsiVy1biM1ViPBoxNwgDnFwUErK3J138UDo",
  "key27": "2T4V6mwFcjDinpcfhfXCHcHAuP9krHDcA3ghonaMNUALsY8FE4jEAieTjrKCSM4pgqZ6C4FjgMMzQ9RBFNiwCcPQ",
  "key28": "GvFjYRek1CrSKVtYu6jzRRzGk6P9y6zZmwA8Ns6dAa831FX5wCv3fVupLkbe2C3tn4WM21fMNFQZgi7rHMYjBVC",
  "key29": "67Nr7StsT5UXN85X9Sseh4LMWbXtXNLiziuwtGsSJFCDUN2oUfDCBXUoBqMV4Fc5Qu6tgUKbYEt3rXsp2pr2PmZu",
  "key30": "5X4Tjm9ni4b3GdY2oGb3XyjF2dPWWWMLG3VKe2pCuuKnQEocsoC87hXTrX5siYM7zn9if7JWFxuNDgToNLNPFSdg",
  "key31": "5HHzQ1JUncy76XepMNdMGj8mMAw6882F91VH3hvt9oENFan13dTEbvTRSYU7PFmRA2vyWR154LrHYahU91SEEFFj",
  "key32": "54poYFGKR47JnZ22kKB2HGWoEtkrt6D12nLp6UP6JCwqJ2EXDAY9zwYw42oZ1gq4RdtWjY2tJgm1KByYXgAWTE4R",
  "key33": "46inshFyyVbyeF4RSSio5fhLYVCiGkbCAPLNHt6YDa6mi8yt6Je5LfJG9pVBu7dhweyXjFAVZqYmq5Z6q3Xvj7m6",
  "key34": "65mPo8YWeew6kZPWXAtkxJKeRUqASTf8LfUCRxwabPrXYiTtSMjjLV2fHB2WdWuAxTEz9zRepksgZJ2hCijAfWxT"
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
