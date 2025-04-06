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
    "4tHpkuoHPXHfNKjTbYB1rBNvewRFVbNYboedRs9ue8afuzaoNLZ97WpnzH1VNUdbHajAPYJsUfiikZ2zGzh2dJSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gks172gRtEb2RWsf31P62SuJe6t2cmDWFGybHhaDAbzyzQxRd9Hpr5WUs6LHrjRsXmQPD4fyQPB7wv3Ri8jvghi",
  "key1": "4K2HJ8KCTBFJUcgkWieeQuGb89VZfRYgxbSuABeE89Wi4U72ayCJVaaJ53V313eD9gZ5HNUcCHh3ULaJuVnPTz5",
  "key2": "2VWW28eSyLGHbZZtJ5oyoo6RLgNqU36pcpubZVkihjTbAGZvJ9oaECU3cP8hq6RRrWTEFV8PRwHCK9oaYWifxi2k",
  "key3": "2LgSzeAANrG7Qssneg5ehWEs2WW4fkYE53Uz6n6vHHoXuATgKsyTG7LrZmyeUVdgF4zp3gXekZAdEBPMe8DuyGoh",
  "key4": "2QiRoq6c7khNoKGxYAre7X7YDxAVjHNZWbx28tJx58ENNhJMkQtU2goGiGAfyFsLYt2YRPVVPrFmE5zfYXzemZoM",
  "key5": "3mMbfjjadEWxD163RJMHjbrN8C5rff5kzLAubpwKFptNJrTkrAuT2m8Aj6NDTioMVd1b4RGS8VVnQKhFhri7eAjb",
  "key6": "51sD9wMdNoEhzxw1sWAbiSDWKbyeBr3tye59U96L9FLyAv3tMyUcwgt62FYg4dQP1GmdANirPmr98V1mLtUx7gJk",
  "key7": "aQSdAHJ5UYPackgTeKvjSBa1RVsob2UB84wUWFSgJZKbR3wpprxaSi6oPJtxiHDaWCBDZsMWF7bowTjzdyHAn9j",
  "key8": "5hRkfGq4Bpx6yMzhfcbrvkZQLUdgQocMUMZN1Uvmzg1cMAXUQ79sce6aWWA2zJJ6Zp7KuZyG723ab4aMjF2odPzq",
  "key9": "2qZnyuXNuH8r9EYCntoVkmwispEpn3VdPAQXW4g1Kufqt544TA9HaGDtf15rp2Kpei6aSrhfZ8y9uE2gPhzgX34H",
  "key10": "4hZZNrvqqeAshCCoHRBNQD8mg4vBi596UtWKzcrWMLEA5fp8RsXcheRrQtLSeaR82taHznoTDF3agmzKyiBS3rWQ",
  "key11": "2eGuBUtojSnQreXLnjttVsXVqQdhPoTCou6rLPbQYRLKNx5wDzvcmAqFF73qBFzik8QRiRFLgxTHHTPdu5dZNNH8",
  "key12": "5sbfuBqm43Tk92xb3fy8BZMzqkZBP7CXDoWQNfooDT8B799iaQitsZRQwkpJydMvP3AM46U1SqREdJgeAhWm1do2",
  "key13": "yboRn2p8GjLaFSLzLXGY86BDY3rn16DEs8Ld5ZjuyAaLLay3TeSpRt1kzwn623gAUNX5L2hakBj3jJhmcXnSaKX",
  "key14": "31ntMLQeHEGCNGP9oinwSYUdh5tTHdNMW1vznuchbYtVxJgeGoPh3qxmJY5c9uPNDUMyjEfPuHJRaM6WuH8fp1UR",
  "key15": "47yYSBTYRbofyJJyyM9ysQYXn2pj6w2FNLwvSqm6sLpy9ErV6X2kfmjxFfvWXWrJCWcrFZcMGMk6JyP1U8Nor1v4",
  "key16": "3ndu3dHBAkhQkkuFoSFQSPaRfi22bYQYdiMMpFT8L7gcRtmt7Rv6THCJA4F6kr9kvZpfnXAxjCVrLWTKVLHfxaHE",
  "key17": "5aZv8Ss2mGq4LD5QYiRR3V3qZxYNNRYZivuN5R2uiz8qBCHh4ZikJdzRsMugFNdCGUXuN93WagQJ5Sw4Np9pZmRj",
  "key18": "36cTVHkQSJLCbkbyfn4h1gThZRU9SKvB7RfCrTyETXYzMZJtWtmySUZac4MXjzFXKsLD5qezDNj8JVoEFnxwXZS9",
  "key19": "5qaBG7mkRHARxfaAYg5AKjfPMdt4sWPueqdSJttjyZ2fPocyFdHvq4L8vTrwKSAvUyvTxERYjSGGwtCycNeb87kw",
  "key20": "67ojX3BrFXerACJTfnSWtrtrdwFkW72zQfyrDnhiCnYc7GRMTUaJi8HXSTDMoEmxtEboLMhFkfFJ5syEPAPwJJXG",
  "key21": "3rLsgHFZbLhk2bT3y5Gqu8cppo48ui7VZAhr564mhZQ3U9Vr7gcA1qAMXmh6pdunxWVBdTiJ6JooiYxcFCU2VEvj",
  "key22": "5PL81EvhriwV3bWCuvTkQameFFyASDJKvxpNP77H4ahW61pJS6fZwHemxKXFyb5mXe4h6AxqTSrySEb9xbgC9z7B",
  "key23": "5k6SreJQV95HSghcGMmbs1ZF1kC1bbmKCBM4MzhUpvozrGoD39WGMLf6t7KiVwRJ1YwszM3uQbkWg9YRTCmSZcN3",
  "key24": "2Gb87CdoMC3UukUkJfF99xELyHLNh7h7XNRz5XNz1D74CvBh93VkGae8J8g7rcaeCjWVNWnhyzX7xM6Hh3JNuq2C",
  "key25": "3kXMHhc6LWDhntnPqSrEUtUYhYXTyWQJaFPDx3xu3w1Y1zX8M71JDYFx3dnRpFw7pBV4355vRzk2exTH1c77K377",
  "key26": "eBBpnVBYq6z1G1mVcG6we94dqSGjYTir5M7MN4P9bugrXijchspEV4g43PVa4Rxpf9M9Up86ZXqVz2k7rQAyuZY",
  "key27": "2HdywUeiDFrBAsELicgxxWzSFTdyd1P6DJ4fUBwjEHhHLrBepjkU6ZNDLvBY7HjtahvUfbnyjmGZjPojSDmuqYc3",
  "key28": "4K4Zod7G9Q6xQJGkMdc8kFNEQmu6hLMpnQmdhxcDfqsVHKjpFj31oiG8XVsvaVc3H1X4dh661UNgsRJtfUCXsG4d",
  "key29": "5stAFH7eKAHd3YzzxWSFakMaBJhG4GuhRxVjynkRp7VTnG8A1mfRWodmJUn2sHUDarr4vaN69Yx7G4umCEsP9uTo",
  "key30": "gmDWZUoyBCrdhoGeJNjSTKnx3yYfgRPAUa7sScJiyzMZLfNrV3MquuVxBmGkc9TAAXAnKexVM62NTPVX9rFMEso"
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
