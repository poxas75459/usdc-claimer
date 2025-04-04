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
    "4xrwUBatKzdK2UEgjiYTBpVFPoFdFungtrPVJTYLGbjJhbbFHyLoNEagXfNaSe7tdrQCVVJVpzGUqa3o9E65WbEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPvcChHjuSJ1ADXAmVVYdxiBvtqjdUssmxhnF4tJ5FTCU47iBp6k6hJAoQzdpY35WCL6URUkwE9DNos8A6oG1a",
  "key1": "5j3UJ111jyESk37Nf1oQarGkF2boPdxMJ1EKnLNLB1CMmTWWXHLESZ6YwPXwghg5C4y9rk647zWsTvFMHMVgGv1t",
  "key2": "29HZrnDWx4maRzAtjkPN7Eg6h5kjsuMoWWXW6yQAUXBuZmc2kskbH1vxsH8FDFbzCmK5TJhpse4k478giswSc3Zk",
  "key3": "3rGA7nPUAmF2TcTk4JF6JPpihANCJWH9zt7w9q5uog52uoihHrK2siZKVanHi8abjt1ggYgbvzzQ214Saxy8VNYk",
  "key4": "3xge7zdBdTuPXXSj62Cmf5wBmcSGNe4dMnK8kaYBmT3A2a29Cgw2UZKyp9bbRC5VUuUaGCo4cHM5qxDqxRVGygBM",
  "key5": "4Xu6o8AWjB44yRMUNBUPMWXi13GhJMpm4QBqkgU7ZQG58whBiwfCBUnhQNuML3yrXGqfz3bf9Eoooa5DpXvjxKGX",
  "key6": "397266mfF3GQFb7cpsxcUP17RzzaveoHpK44KbvfWCqVBVPXKSkG11xYycx2D5XQ9HgWPKS41HsKJL5egWUtXUjp",
  "key7": "VLCfG9NceGCmoXWES8U3yY7TwDauYemPRiSADSebHW8jHo1UP68Qfx5AVKkYb22Gb2XfyYkGN31L9xBsaBpuYLZ",
  "key8": "5JB342Wq8ZPT5272r51v51JR1RanAkaoW35oswjazygUspqfxohCRiKe9xDSggR5SRoYjUHZXpKsHG5KsCysynoq",
  "key9": "4aSnYHdmvbJN3hxS76WY1Te8xh9Hj8jJqTFqTRuSFcu9Y74qJCYaFFntK5wqTgPD9L35LtFzm6vRzCNYEmdMsyqG",
  "key10": "2Gmt3HJ3MuEZtHs7tuVBsTj43PiXa6YCRaLMuEpG7mfjgN1ezaGpraknWHfNMvQwkDWk1x6tuVpL37VfKqZMZRXG",
  "key11": "2PgF8rHtGcyRGc3M8HLuuHcnbViaNwENGG8bgoaXo4KcG4pNeSitpTd3EiakP5Wi8UULjE67zDa8XrTqaHhWDfsJ",
  "key12": "3xiGQqCyRDmj5vNb9ukkGhfdxiq8J7AWh3VmXTQS3VdVVF9XsJPouewccDNqK1pmusAaknc5TTMTDLfeYUiotZm3",
  "key13": "5h5TFEHvjJFbzcYxHfGqe3q6Ydb8FDa2NcTgadTD1UHyVbpkAA9iNrXWAaxtxtnXUL65qfjz452ZKRk82RScSGJh",
  "key14": "4TFfT92EzEERKTcN5aWXAZM3xavukhrTsdPuCeAa1dmrBaK1NEWG9X4gAZoVpuAY2dKiSao5MVbrq2XEemB5jhUs",
  "key15": "MfQgSA7GxbwGXX5iD4jEVV4ZXkML5qfQFbfpZ4br7WLVx1hhyNsd4HB3XmL6yNUN96tNP3FTL9cv36M847epaMz",
  "key16": "5ijU42c2xPqyxiG8m9CPUEzhQbfiNwvxW3RyLCeVBotyYK3HzsqWVuErF9NQXoT9Bb9sZiqxAUC8mpz2Le1SeS1s",
  "key17": "4SKpNdFjPj8XDkzGkuXRpgtW5o2WiTQswWVCbeC1G5iuhdRNdWP5YzhykwXGWC5fRbGAf4JzDeGKxCKS6LivGKUn",
  "key18": "3fYCvzfQk1RC6T2Gb8J1f2jjRh2xzN9Zv49i7JgxbTaPXk9YWLnvEfqD1dt4ksv9i9uTgtqNBbTSM7mxu9TViXG9",
  "key19": "4SKm9gcimFwkRYsVQKfSCXcNFwGhkswWDLyic22vE57VZ8YPT6vCmzRy1ZiJPwpDVBBjV4RtNXcZJdfu6rSEAtji",
  "key20": "5MWYWgNmSKmN9vmToa6Y54cfwqc6jHo4B9QRrGb6twyRaQTKCHM6UPDqAjwF8wZt65uhoGUizknNmteENgzGT5wd",
  "key21": "5aEjbJs6rUbgZu5NUPMpm7R4ymvx2CJzbiifwaqujR9FKtNd9Qyujza5zjANqLDWmB6tkVhnm7DmQD9PKgfqGvUP",
  "key22": "3EFhLeWomwuAxUaytEPg4EtQNyEMqQvjWzeE1SxTYNp6pwC22aqWGeDwz8HYsys42rWb6KWDiWoHQPgKDKUG9g4K",
  "key23": "4BmWnxAi1J2yJ5PEAZaVnEBES7Cn6v2uYazhXRhaWRtVUt1GzxN1cnH6cEhaM2MbZr58cbHhRhac4Qe9GGk31W8g",
  "key24": "3N9UYm4yzfRXkucBSJUque9K2cszo9GQNjoemDnfP67acru9WW6kiiubPHbk6a4r8CTLvt1ShtLi2fHRAg1X7HBm",
  "key25": "NCxyfPRH6RoGoGuYjXmsUSrx3zEZnYAmZjjzZdEPFvaVJfhyeAWhad2qtQMZgvzFVhTFJwYeWUDdngjyYdV6EVN",
  "key26": "23uuvu73ro7VKPfHWRyFoForfdr9TsDw9wpxyMVJmKK21PEbCPMuwMhKKuSbfHYoYGXe5xnZ9GCH5sgkqz9imRKx",
  "key27": "2ih6WLzmDJBnCU1uY2FCZymyymnaNekXzui6ztNjtEjJTmeQbkTEisBSRkQ1FLmNzLHLefWCGPpsPadG3g89sdFt",
  "key28": "5PG9ZyN5y7j3ioCjbJdqHEy858RJeVMvx338tQEy76QVPnBezGYhimiwaHpT5fxhJ79TvjybrY6bhHQXFv11JGrT",
  "key29": "4Et9uobyLQSGPNiv5Jpk7onXi9TUiL4TqFyXY52cjSiE5AgyC3kVyva7J9aRJkCwGjytJnufNJTghjVTzy8SWCwL",
  "key30": "q3Vja8zmUhgaQ8oQFoHwh9K7QPCvkCuS3LrmneYwd5roB5Sj8emfwsZdTzunrJupc7uLbLP51edw8d7eJ1ZjDry",
  "key31": "RpmYWBJo5opGDDsgabqgoTwADDBnbMduePhHMsxDpEfQ4RJFGWteYg32MpLRwaAMhFQLYTYHL6QWc6kCU5aJrAX"
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
