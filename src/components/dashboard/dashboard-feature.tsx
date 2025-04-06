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
    "4oZWj2T1STy3dB8FeTtg6f5r5sBNFgSWVKSSnFdu9gPfq4GXzMQgXJL2pDRWDGUhdLGmBB4TFRW89pke9EmfhZty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uks3W4NYvnJe1NvYwsb5eySNyEFtLh9izdRBUHWkCh6mR76ddRzRKqgvH4Y9hca3rhCNYgXgBdQDSPNq1LBFvYG",
  "key1": "3ayuFPKpAvJMzKtajijyuex7Xs2thjCGigXJGqSZYLmpFg7GPBVEjpuTJifa2tJWJ5uFBpRjmBFMr5UfE4owcAej",
  "key2": "2574886kngU612eettbXq3vPoZE7T2tbX26wBfEFARQYucXqJLT6Ujdfc9E3z2MLVcSDmMq5VLSHv7gvCDdvg1tb",
  "key3": "4Ln5P6gNrJR2rGFSxBNipB3oBcK2L5qARDeA9jBawxDdEu2ptWan2BHdp9DaP3o5RdarvAAa2qRaiJtfGtbaGRgR",
  "key4": "4UtFauujd76GwbqqUqDNbS8Bxnz7MtFL1XeePPW3GmZYPC5vw7PS5mhwa2za9vhiZQ7q6QoEUzEeqQcW3QBargBF",
  "key5": "4qZd4bCZKfYq9DsPb3ANVrrs7P3rPSvJojt8h6yMQSDs6KaDFCTLjbS4N7ALd9XjMYo13WWrVtUPa68fXH2yBqLs",
  "key6": "3DUDijLqB1oQTSx95hF3zU9nC8zobETMbaBh4Ai9ZGaoJKGjJsVv7phD5G1Japfnq8RgBusNm2ko2GQFtFfNSDtE",
  "key7": "2ymLty5T8hzQdRG2WhCLTbdrDFudww7hb1J35Ktrxebs7A4xQETUfGrEZbVeac1ibr2MTAGPApLkiXw74NwsExAm",
  "key8": "2s1GBjKdcDddGKi4Xggb9sAx8dkonasPwMJEDRRWXne6ao1bjZjSDqg9aQ5T7QTsgphjLQRExo7SZ3Cy1xG6G9CF",
  "key9": "3xbfyDNhK1jFhAV7JqGtawRuLuAueFQuVU7XdB9yMwXDYNpWKacKjEwqAhEXHV4ytQDQJjtPh31FAftbC8xuhNV4",
  "key10": "3y8tS7ePq95Vw12Hx8usK6ZKT6Lr7N6VcrNipiBGeSuH2vZdCzzACFRRLneHQKRrsvVAjZ93ZX9CcHXAkf6ksh6m",
  "key11": "3w1hXUtobcQkFEHk1Dbjrm5p4fWThzrzncgdPQtiy9v9dtmYUZdWNtGKZrM2Qbp7ejgRtv9ZEzc6hAG37grAHrVk",
  "key12": "2qvvcXLr2H6y2YmZT6nM4po3Baha43TdUUoeQvNE5rUohi6isDm5mNvbyfmTN4Gta5R64L88w7EG4CvVqG739PMB",
  "key13": "e32RAXzw2ShSzzgUDhWkBsW7x8KpFumqZhcE2JYcg2nZbUFNKSMwgEMabR1p9FEwtXbXBd5R59Xd7vUstweKZf9",
  "key14": "3kWiDtS8BozCPqNNVQc1qZo2zHpydvWxAPeM277dsF64KHQWCiMGgjLXoEkp96QJJygWJdxUUJpoqHp6YVC8fRoF",
  "key15": "4iecybAMgnCLHj7zJA2FMpu1cfe8thMWAMmXakpLe8Bo4Qwh3qXPH2FxWNGyjDZ43fxq5m5iPyP9uGmv9NNEc3R1",
  "key16": "2VsRYQ5VrTMvicoobTRQnAULJXzwR46WNecLaJYT4wD2JcbujfminKQnWGGjdPJ41JHEHcgKmXpjybUJma9siiau",
  "key17": "4qryEcdEiUBmAptjpz6Rkx7UD5yykRkix6X1azxae21HqydY4wm8V6rZkobMnqtwyMVZCNJ8AY9vrjb3ynYTzdGB",
  "key18": "2NNmEsnvhHRgoT6awYEHsmZZt4Wwtxk3Qb8JGQm9HFF2XuRKntZiCip15i8dLjvuqirNxWv9mejYbine3SAx5php",
  "key19": "3gAaHYcNsqgWWq53Y9cBDMMDHxnqbrF2cANLDQ7SGAAxw8jKKWGp7KHoj21BAnCq84MTXtwcsktbqL9JuffXqS5R",
  "key20": "5dmaA2EC81mXmnvhWZsxST2dQUtnSQhNAESixGd4LGhJR5dkCfxWqPFxoJWj8UNweMsYtTuz2zFy8D4SkBSEP6QS",
  "key21": "24KyS66Y67Aq1eezivH8RBCZKw1ogkCYTuLhWSnKdv6setASx2Ceuns7pkBYWGpTB1wUuD6vDJW1R8sXqusneWiK",
  "key22": "5DB9a6LkA7RmRQLDJq5DBv8Ukg679HK6PWamxxLH1v7a7Sz1eaPvWgM1cst5torfjS3h6ZVEkDfWGFowNus1i6pb",
  "key23": "3Fr4qnufNAmEMVf424TtpADmM9NFs9EEsCBiYPpieGnT9GWRFMB6C5tvpd4M83RAASNECxqYtS2PVb2cPmSD5sDH",
  "key24": "8Whd5jtUQJawqnxFaqmWu1m9DKbAjDH3xvK2p99TQfkyu2W2r7V46C2aZQmzoTmJrSw4N51Q93Ry1LpLkxySxoA",
  "key25": "49nGDtYUpHXkxnSmzVfnhSzHaScccvRTVQYg42BUST3J5RhyBXYYf7aNuCYwDdVQSkyJdMP7Y7ryVCM1Qgd8o1vs",
  "key26": "2wCBaFqGMSqcoZHQqivoMCXeMawnSeCCAx39DLEjTAiVPLEwhZJz1WkBUSQ1DuMztqTx7D7u6Rv5bfyDY4ZtRp65",
  "key27": "3CDrJFMw1h9qw3oBqnASU9tNDfAzREdqbdLHm9SdC6AkskxHwiL1hoyXy6CaqxHywg5t3c71xWb1e2fz9u8gewLY",
  "key28": "64npS88EVdQPbbMxNAi7WgrxpvS9reTo2xEg4BDs5jyT8CCjRm1AVe385NMCwZsbKhVMrVfd5MT2AqG43VC5HMKr",
  "key29": "33PZCkU6kQGRRsmLKu3AcK14MmXQmL6syGnBVTdaVrmy79ruBtCUf3iEyZG8oPUQVSHeKNYAjaMrceDfWadZh1JH",
  "key30": "5J4Cw6YKDFVnSPu4tGAaKwgwf2YTtD2j3ushUQ3Z4ZPqT2Cv6ePwdSX2xw2xSmisJRt3BkszqeMPPyssC7tkTLyK",
  "key31": "2MuEmuU8eqbM3V8AMeKn5ojFgHYgZzJLyBvpa8KvdtdYynH4MBRVJsLDU9YnTkN2iiwxRgG7pYQesVcVJsyZ8J5D",
  "key32": "5D8FZs1fco1uyS2t3XKCBePYNbfCTdpnXWsXGBiE5LTFKPtAoeZVHFKzzdgxkVmz1rSFCSnCRFijnNVUEu1NstS9",
  "key33": "9SbHZrdroBpjLGxwP8guiYv9m7ofw9xHD8HcJTVdfEGTAXdDq6NERQ67y2gFTCrpHiCUL6qYLmPvwEmvjrTcgKe",
  "key34": "4HN3vC5DhxV3FAgtaUuSMBQEhrjTKdn1pRPtdn7KqF1MWndX2ozFv6B2ZBomdmDeTuQ31m9S9NryDJ9Se3WHCbcv",
  "key35": "3dh8gYAJzuUrW2LiibF5KB2DKXv6s2bYEdSTHsJFWje351TsgjG83UQWX2r2rhsnpMWowC1FWjpShBHoDcQGx3zP",
  "key36": "SR3cCdpS9nXqGNLAMek1UjW5UcZEqjGsMzb9bTA9pJALCC31yJcvqFwHon6RF1zqBzS4TWN4kxwAyBVHXTumyPg",
  "key37": "5CxjuRCnoZN2EfKjh3Ty38pkMfX8xJtjvWfpFpJnsqWKG5bcA7VZUQjaaYjSNoBgEdCdBiZrbeE8BfDAjexfGvCv",
  "key38": "4B2PtxvDh3sef8TLV1sREU5Jd8VtYjwPHhymH8aEYFVPV56d2NBYvtf9k4XjZempdpvHTnwMqdMRv2J7ENL4CDjX",
  "key39": "3HEAR8a38wQvmThx776Ztuoe3XvKoecZA4DYYEptZB37jgvrion2CN4B15Wdw6V8KDcAK6KRkb1eGmkjdirpsMED",
  "key40": "5shYoCVtobd7vJRxHVghvLi6kYiHwqrsGQxoea9ZamWKoiGYsbrpun7oxPrFTvSCva9WKcCGVJy5qjDRV8FNsgBy",
  "key41": "5xy964ajMnwiAbpQuEtTPBbZQBxaAraJ2LqeEesnzuSwFRoFmTRhGQY7gHHQgZfBVqLQmkE5fiW5qvfTqNsUZjn2",
  "key42": "5NSRnDSBJAzPSidD2GydZ7QikFDp3LudMdghVEViLgA41Xi1LijXfCEi3ewrWRfeN5CN5r8SSWQYqke9pGq1aaL4"
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
