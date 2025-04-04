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
    "418ZCcwtkyPRf9dhKLUYYcbxzcmkYZaZTrmL6UueEtegyY9zu3YdoMdShWH6uunfvW3LAR5iyT5WqK3yVopX99RG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FENC6jeetsBEU5JLgdgqyAh6L222Sfcpvoc2fyq57PYpomWDHrRTxCeNYkhYVv4aktUdEsPLKyrEFFu4e9bRnjo",
  "key1": "3tL8WykjLvKGv2TUtQib6Sj3z416VAgRFgsGom8fzcpdaiDJSQzNyDEpfF2WJogvbsrRWGwra5QLaDsXJWj8psSU",
  "key2": "3qNcpjZih6JFmj1eftvR4viTCte2L3HS9sc8vTor3j18Ha76Wj4S6HKnEGuXNuhMA8KYoe6z8uVgAP3AAdtAhEJK",
  "key3": "2K9kYBZ45hqZRtgJbBAvYKNpdXFxGCBtykU3u6nL3M92FYE3wHyr2V34QkjC5zD3iHAsXfvYWPSvu32zad56FtJ",
  "key4": "4p8bu4SG4b4aedmzW4TpDAobsLJqtYfJZLD6xBRkz4mKREses8B93qxoB9C4EYC1VHreHQ8z9M1dVVxvbV6seUP5",
  "key5": "5QG5rJPoNTt9tZpKAgGAyuX5pfcf7MHHyJ8skh3aU2ysAMid6g48jjyt74J9vm6qZnRfDysb47nSJToRuv8f5EAK",
  "key6": "4cYtmW9ZSU4okiFpQGpgkogyFnARNvyBJS9CHmuSa1Qmb1P5DuQdFBWJQkdeCRSVFNP5x6LbsmLvMBeQ7PSZWR9r",
  "key7": "3JTfeUE4WNjipWMXEytADBnxofbB5TDgcz3ts8dTHbW8oM8A7PPU7vkk8fXCQpSBuxuWopgQGyKpYsCyUMzpfMvh",
  "key8": "3c5PAPGauHNDQpcqGbNY3XQNJXUWxvdiVXyn2LVPc5yb1R9GvjRmDHeRX9m7jH2E66Z9QtDzq96vKwa2AR7e2irg",
  "key9": "4pXoiffLJRzJCmXWcq2Naf8kVBeecWHY58UeNafo2vYNvKEjKfuQbwYgjaJbH7uomyQoYhKw4d5LzxsyRD2udAJc",
  "key10": "5wGNuExWdE3DTaf1oanQAd2kgSbMfmVWvyAg8XgsL6XDueMd8Gq1qh1mz6frcebBUce6uZG3584L2KiQCrzF5FP5",
  "key11": "3j3GwQpzBAyJZpiuxKG6WzJPqbBXCdzk8ZHsJnuEdkSfVt4Dw58RYQZrYaMaGdumiBiH62izgYTZGqiNuRtUo1jD",
  "key12": "5psqFNgfwN2sphsSYpJjxFXS5euSf9stYDAsG8MRkeASLbch8arReUoYJnnyJWPTuUe6AqG3oB1UDHHptQGcL68m",
  "key13": "3ib5ibdcFxT1qT3H14pVExFEDTjbiNgTZKLDVTU3xrdb3BMT3YkZ8mB3wnVdpAzyUMSX9phUChG9qbAMte9fDui9",
  "key14": "3H1ziEGFzfsUxJxF5YD6wVREYD41S62RJC9i32XVR9Uj8nykZy4uKaFHeYvYWcS1kCCizMKT87PY2WBdD6cJgmAC",
  "key15": "PfR1vunWZaw4NL7csjhXj8zpDaqfBaNFBvTdnH5EgtTPasrvZ7smUKFwbArVh6aE7jhVKqDxEsstuFRNQurRkqD",
  "key16": "5mMHFk5qg7g6RvACtaQyf54x4yPYLA7AWN72Mw1EDWBKWzwD6b9LtzVZCzVk4dgLZsdzk3VWGnQ173aDGRvBRYCd",
  "key17": "4Wr3PjU9bCYTDUiQWks7MfSGU86rxH3zpzq6c2pXzeCLjPbYdDPBFX4znSjuEZiLYGJ3dCZToP1SZtUVJPp43aNd",
  "key18": "qjMHSG6WaWHAeYPtUM5yWMDVbuMhiWhEeZeWFxYHNB5Vxjy4aXtGm2Q6bt6D9kNLUv1Pj7LS7D1o2KNDRuXUAgH",
  "key19": "29b6iuX5XSPzrxnskGeVd2Z26KLN9YMq7SAdVrLtiEgPpLiAvFPyo2ABY68C4wVMDLPrmkRJCHoBo17GRjtHE7Un",
  "key20": "4Wq9SDXTBjMqqJeuNZFrTf2xManpoGEAMsAy37MgtJfMSpSaCzG3aeiLAxSq4rpAoJ1i2sT3AbaxtuSnyCpuyAaj",
  "key21": "2F1N3YfLdPbjM8ftWFr3ykKiarfPNuPJYV5bNwcA4EnYXW7q6wxCJZQCK4Qur7psqj7ycxCikcoac1PEFu2NEekL",
  "key22": "KLiD8rSPGPHk6JdreiMedNNBWhU7KjHv4XEx5vhLLFN7HzFbNbVbjRjNYuuKzSTVEa1uoEtF4rWQvTBMxc6poXZ",
  "key23": "38ugD1YcdxQ1w2uzaKbsz5vfD36zoorxRa8sw5owBASZvZe1vMTCW74iqJc6uYpGuNuJ3k1famwdcGmwBwCQoTxt",
  "key24": "4ZSsdTm6WdNZhQwcFFUyWkrCed5CQW2Po7AnqSAXiRKU7N2u33LbNsMfUFSvS4eQVM4R1x4nwJr1BUrVCRLuSd2q",
  "key25": "TFDp4JNCfdAYiJ4yjnuMQ8qN9fFgQyPuPfpotXuXPQRfKDTPsHQXWQXxSdEPnQScJfFFWf6LoeM3VjmCRpHScef",
  "key26": "3tsPhx3BmM7LhM8ZYpLVnuQCCnGiqaNw64EYMoscJ4vWDYHXzmsQ2bhqjPMqWF3kDb1q259QwiafF9MgtZuB62SP",
  "key27": "2oCX4Xj3s9ggHVhWbUCe8f4LikPxg7g19auNpCPPMRXYJkNf6juVFAjJhJZRaSJptkFUFvV3BjyfktCDKK8uHMne",
  "key28": "3x189Evj4XgEiLmQUDsNYxqLKmK3wovD9xt87atKWLDnVnj1MrethmvFFHiHiFrFGKh3kYsMLyyxfkuy3H8zt1bi",
  "key29": "4kix4Xj5JPVajzPamya9tpW8BW7DbZp2tQE6YRD3yLt1kBG5prZ6dGHLwEM6nSSa8Nd3JyfqmEHVWsJ1pBwq7aJD",
  "key30": "R9wS2Qzv8Ratibwro4ewRUpFBepg6zcmJXvxJKfNmo42cRt3n2ocM64h7LqsS9ZXrmEeJ27n61oWVbNKutmxTBh",
  "key31": "3oozEzZN6NUxdw89Gt6G6WUgHYAq4EeWEmavug1BcDbUWanFsyVjq1Zwij5xMoLaoEzj7Du8QoTZdQeNM86zURBf",
  "key32": "23GM1wDubJXFTnRqZW2Lo2UzaiNBTE1g6jG3EEdB6JJD8P8zAtdNL5yvm84YNV8HLMxQXcwbBYBctpgG1HcKa72x",
  "key33": "4GsifHEuwKTj5KvCEbJayRRQ7D6SHBD5npfuqG5DhgyFahNGe2kzSEkvGXkBPQcC9zVEWk9JVgobpVXkjDRZjjPd",
  "key34": "2WDTwFc5Nwc5pp14EPRfAQWSXuuboBL4kjozMQqw2nKrNgfwknuYKpfzFLruBamDyZ3CbEKJJvqCtiScLuerSNGd",
  "key35": "4PknqEDU57KoUqbLDSKqop14oy7Zzjr3dm3ZEh5CQppfhUYhCu9TWDnhrNgFbfWmECTqEhKtVPDM4Goy4ZSz5oHT",
  "key36": "2QxuJDVzTdZm2izjpXNbkBjFkuLCu953qwUTceQifcNQ7WSqc9cvPpfRcHpBg2ehnbq1gjUAPnpYupoFtgdXyB91",
  "key37": "2QmEkSy1Yw3wtEykqi6uhvaWEGeLyv8eSd4c3PhLMaKgAjeXpSGuSBZQii4hZ2P1kpGkwbz7XCfDUfxbabbbLsCc",
  "key38": "2RH8devh7G4N4amGX8vjTYqfjL5eBiGuVh54xUxXsiXz8HAeCiwUWkvNuKf2QQforWzQStJeQUPKFBJBAah5iaia",
  "key39": "3TWBre4gwdt7v78MPtThs6RkQvq2hhXX3G6dSVYz6WtJANpRrYphA69xMyb8JhvgxLbkmdNWY6JqD6ggyvFcs4nw",
  "key40": "4WFb4VEkYVJWGPA5CUm1muZmQu6USYXJyfVLKF7Qkq637VNGEw6mRMeXwe7XcgPXJ53RSvGjFD9gqccD8ThFR7xp",
  "key41": "2rYYeUNKc96poMB1Q9tVbXeWhMs55HNwwr2KqrN23a7ph5f1T2cbKFetX2iNJCykyqkJV28PzCnyvxWkiqKJUTL1",
  "key42": "67ZGitcUef54QJ8KbYassE2og5MSLQP5c4Ye9yV26QmDRU7gigx1tsZtz7FVF3keedWystk581FrrPQLHxGR3zHV",
  "key43": "oZPoU5AkwWbdit2N8Y2GL6UfyiNzvfFfSZw6NgnuVwLEWaekXNrpX8xwUBhVFKHYDm6Nf1x2GKcdBz3C1k4YXDt"
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
