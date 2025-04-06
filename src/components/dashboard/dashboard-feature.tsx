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
    "5LHGDyge5VURCkkfQmGGR77MFdtSeJBLv94UhTKZkQYzFuYEU2Pk4TLZcQRYkW7SzPUyGNziTDyxwSqjUCfmJQDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJKbB3iKwhACRzBQTHndqEnft2o23QoHzTSFcMYGHynNwGdQGFhVjGaPwsHKCHCLnsG73rFRXwZ5ggyTMNFu3zY",
  "key1": "5Fan1zbijM6gpzAyUvbBbYUJBQJenYfmRMj6bPnbPuEiRc843Xg5uLD7PCvBjZK3u5YNwvX5MQgQdNecZ1kexary",
  "key2": "fYoXqqu9Le1upxMQXF9K5PrzwHnLMN54HscpM6eU9cakvbTS4dSJLre38Jj4nzBKQRJ1W9QEr4HN3Yf87K6cqcK",
  "key3": "3pcygtZYwWbocTtacRHDgfMtmZDNTTJcpXj5xd7Sj9ycT4kjX1KVLMkdMPNFPyUSd43okuoUCSZ8CBk137JANzJo",
  "key4": "4n7QJitHkQRhEGawdWKVQA5nbrB4YF7xyana4M85JH2UAtyEHPkbi52PQDSutJAJ8sk61J2o2hDBWJv7gdUPJ2np",
  "key5": "3wNWk398ddbKqJp7KDgVwbQKsRaNFdaHix2ta57ngryGSAbT4easVuWNcGvv6PGVjiD6TUJzBNC7ntvZSXkeV7JP",
  "key6": "33fie3fTnNLD8M7SCHZbxtm395qku3ZBPBoWGJmtbmfptpGQyYSP9uprXBFoSmCHek36AGqY54XLoMJifmkP1sEi",
  "key7": "53zdiK1NMC8p3vjZqUTxKdF1AK4v9zGCaz8ohwbAKFuYopDip7E81nPtfYSxhEc98zSpsYeGPSsQWCtfJPwijhUX",
  "key8": "5S88tj4ArxfoQA8TAvxsz1VTajbx5VmQeoNGGkFFK71hkg27ve4D1QTTBxBn6r2w82LUq7AdGZEpeVaHHvD9Qi4X",
  "key9": "2MsEMxjDK6RSUpncQYm2k8kvm9r8pG2VnC2sAszTnmGrx8GEWPCLHbGTTsjtzr4cpu8vWDr9pdM5pW1FKreNJBjk",
  "key10": "3Bgn2jxzKspk1kkmrY6EmvJTemyRUBCYv6s7X4CaKiMuVANeDo3KeLqp2dDFR97vE6io8szaVNrENK5vL9e6ZeKF",
  "key11": "47JMdyQYBA9PHYp1EuBE8oim2nk81KkyjP8prhsKbZT41FZhhQatnJ1ynHyF1JRdKeWnfquTVZEb9xmbvSbtmAei",
  "key12": "5iiPY5Kifg571SXygU2QDKvGd6WgM5TyiNkUHWNGokVxUAfsF1VM12e6PQrTJ1wH9h3SK9hxZhYqMTNA22dKedwR",
  "key13": "54z9LWCQMt1NqYsUDJBXksFowY9ARuJD2KdgucvB1j9Et3EgK3bHiXrGmDSxrQPLoZjXnFB8gZ6suiKj7TP8Gb3o",
  "key14": "3xUMtcoenGyexrFMHeeqYu2ND98hyGbBkL3aW9zoF8SeBsiNLvsAiPFL5xV7sYDk3sfzzJhvaUNYuyRcaATJFSxN",
  "key15": "4vvt6V7P22zTTnBio8CSLqaMVH51s37iRXC9FZi82KRNrLFTAoenTXSmDDid1dDPTJ1cwnwJjW2rabfEzM6cobwn",
  "key16": "tFExsvB67ohd2MZvyxAJjdTdSsP4mZEefaH6WsxrknAijW5Ti9QTgdBs55pZhQYeGVH72iRgjkjGGfmH4SdmEEx",
  "key17": "3PVLTjbx7dffkjGGQk6sthZzczCVmiCmi9xZRmqP3r4ZXHPw1JADY3g5QuowzkqZShLaJKEVZ1g32fD7eLfunydx",
  "key18": "5ZmdBefS4hh3eh2VWbJqUNUVgudh6yeMzDJBiRkPzddtDdE3Fd37C7cw4J7QjtPFt2HUeTqbwJMY848LzNFUNWXc",
  "key19": "3fkdAQWcoo6pGzDKYPd7Tr41q5c314N4XQq4y6mzqx82Ffei6S66mvoHKJyCt7DV2TUdsx11vNKJ8E5Xq9ZpJ4QT",
  "key20": "3GtgEi1mVkPrjxpgX7WQsS6yNLupezYxsC23TXHQK982krTFq46JT7z5n9bSRYKWpi8qyohrnt1cigUiYGV4t8e1",
  "key21": "4gztJgLy2tyGTMbCQMu3XmoaadWsBUA1Hp4ADNKJGHn6veozmb3M6Gh6c55mzpYFc8F7hVc9vPq2MtnDQCnnttFA",
  "key22": "aFNKFYMqa58PT2imHjw6i7sYhMcYfjgrjDxxfFaJHapJVnWptR2xX4UHe2CybovnQ9GGQmnDsnotD5o62a3ScUA",
  "key23": "sHxnyq4dSUhsEkp2EsbNC4arCh15MBmxpbknNsGFNTJMoJBzMemoP9f9swauWct5YER8Ch2D6SATiCvCj1yrK6F",
  "key24": "XwxWehXiTKs1dabzrZ997AVJZKSopVwUFNhxpNWbmUpf7vdzakC4hviKaHGkK8kXCtXYrYW3GKHX5CqEakGHfFN",
  "key25": "2FS88SrqPNk47uRBmnu7HkmxVYDd6YaA5rbCeBggvo1uFzgkaesC7uwFfqWZ7McpfNbxcGjrSHMHTJMR4vR6aDhr",
  "key26": "3DxJMko2DkRd77nUDj5jBYerrYfL7yW3fAq7UXZbiXG8S8L2ysz8RYotTtQHAcMn4GmX84iwo8ces4vY5nvShEku",
  "key27": "4NEvP4Gax1hqDUXpUkLEYu2kgmkaYAYMaLBpU4DNQ55m1mWN7kSBRWu3uty4DmU6KJtsEQu12Bd6D8b6vC7DPoKG",
  "key28": "5cf2RyeJJMKN2UTKYm9V2BbjMvNqe2ScuGCKJJDEhCdZfobQ2r6uAa6rNvCAnYVvuCxHXtAZfdsGLZP1S8pXekCT",
  "key29": "4LNVXofqDUK9aBybPzrQ3JGGAbhiTjuR6wwMVxx1UXrbqvJCwyqCfZxpKeXsqUXUf7WXguNv4DFxPcdPMywsQBhw",
  "key30": "53DvBkJzUQdDJMVd74NGfF8aQHF7jakrToarChAgVeviWrTuBF8ZJmKVSTvc1PtwgbQA6C5WPUfKr8Y69H3Pz8A",
  "key31": "b3FFa5bH3LisHiNbcyn2Y4oZbYpvWKYPaqtF43pBAC7Fy8zyvL5vKohG6pyrLTXY2W75Zs99SkA7qGwk5TtH9ZV",
  "key32": "2RhHSqqvbfRXR27k2PkSYc6zFTVFYpFiMh3bdEeu7XdRAwuNVXvdL3LEDosaEvDouzdgB1zroTL31RqTZXBUYyg8",
  "key33": "4SBTvvScwR2nQytPxoszXhB359o2ERJywfo25sUZrLjNwx3NsTRaMtbNNh3geys3dJ1kQ2SexoXeJhyjC3aXYJGE",
  "key34": "4doLrjqyxj3Ynu4ovUiSWoWaYNzwqBFZCGUmn3yhoKZc8EjmMteq16N8GrfvwBM2bBxL9aUNhqntTmKp3upmcAG4",
  "key35": "sdg9KrXx6uVDCEy5vb7dvQkgvpDuUwPZaz1XQuMs12NxLfXKaAkehNMCvw1zh2WTXivbFhpdugRb4CagmvJaLQi",
  "key36": "3SQFxY1t58NYH9chXESkpMMPvwaKVYSqSRr4EEun1iW1QcRguFVQVNxiBW97EqQy7zEWNS4ectkRAFA2e44WvSg8",
  "key37": "5zPTfR64uEnS8h5SDk46fGJUBaxVXr7JzRvD4P5UCmp4zTbT5eVCuFsyUpBCtT1JPoYENB1tTFDk3sSKT7DKojsZ",
  "key38": "8ZU1r58XrWZxMkMrT5Eez7ViJBNBqvAdanePnQLhcGyLpjbDAytcSpPUrAB3cYXkVi9pvRpPpY5zfVcJh9J3sNZ",
  "key39": "5k345p8eHc1CnCMUVgF8v6oeHwbcawU4tEGpxsCa22PeRzqEScAf9B3gzvHz2ybXNoQjvhTsZPYN1yDopLwPL8qG",
  "key40": "54HfDYLTeHYDjzVeXuSt1ti1pMUbnGnYxdEQAViYFGuU8xw3HXwhmTjVRSCJzAfQddXsstkW1YhfML8poki4ni5J",
  "key41": "5iWCr227fkM4mCzKAwC8TUY3r9qD3EwvpAygpyPH5AgPgEErvdJtnH2CsLwa9mcxgM7zP5vNR2mF2rc1APyXTfZG",
  "key42": "2v4H3GTKd1543it6BxTXZJhQg1Ejh2Z3gg3k59Vhh9xFP9b4BUsCcNzvzGa8sTjL7AZZaYRa8mHDTF4GYLvj6Xe8",
  "key43": "2Nmdd3Qesjb9qraRuGqoJeTBMTUXK3yLT6xKu3wo31xbzQKwWFaVo7SJL4gSoHPpdmCPvvaNgL2aSrgrCTT5ToxD",
  "key44": "2SYhXaRS8WgTvGu2mWnQiJdJroW29qHkLCzz4NLDi9U5HycdqdUxaQSDeARD2gcrwZ6gSwjogNnjGFTTjz5fAqkw"
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
