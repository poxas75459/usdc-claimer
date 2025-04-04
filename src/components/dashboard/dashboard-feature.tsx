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
    "4hRAStrUFWBQbaRNCevxhxUtUijBH3LWAeRAJrEUdy1g9uXvi8X8CPX3cDDkqDY4NkvrgywdGaVUzWbXRnRCAzt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTTxnw8XW2HQEZnuuT97URkAueiVcsmexmAyymu2dCqMkZq8YrPyUeg927zhvbKzd9RFraLn76Yb6a7ScaR6243",
  "key1": "Wwj1zF42yarKNFKmmnANDtKPTxBtVsgf5R9pM3zGNQCSWYJfzYipwAtXT51LEKxKzUa1ayFRGU3xi29H3qTrJWW",
  "key2": "3iX4rc2Aicaggt7kNEHWsbe8UxsnnqGnEaH1aqkx82A32KaqWU1nEUFRJnayrNoUmUUaX62ZXNWjMdchSMoD7zs",
  "key3": "45pdC1JWGHh5mzQziPWNyZYoGgGF48H8WLXTE8DZkRwYr4RHzMUEgdJAcFMR8M6zZytTeN1pYGTXYeUbXjfSCaBR",
  "key4": "3GKxCX5dpRrjDfaP3whNs4oYRoZeUrrgPfsW5VvK42KHsYbtCThdtxym7h4qqdJCPAsqNqAZu6L8NWbybDs6tfmB",
  "key5": "41eFjzjGhP6QGUzaSXXFU78FheHTXojibeRBGVKEqRL6tVKebF8XJq6CdsR1h33jcp1Vc3jPepJ9yMGB4m4oYCXf",
  "key6": "3WrW1DPDy9PBQv2eHZtbZwQxaoYuxt8qAYXkShEKoxErJ2k3smnU6jsYn5fvwyzPtujnBHtwqyZztnWJMmpEiSjj",
  "key7": "65e3oHPBKRsRGwVh4bncPTDLYS17D2Dt6LLgbxHkU5whNtXtjf5K3h8DuvLqPGhKZ9KAtVqGCd8a4Vs9MSsr5Njv",
  "key8": "3xibgAKomDXbXeMJy7MWgGaQarESet1XgiYRGdacLsGm2BekxoRXMwRrUrwKq4szWrdwHuP878Wotc8niombrbzy",
  "key9": "d8mXaEgSCjuXJNrmKCk36Y8i1ZviCYVnjoafCo18toEo8gPjVpVhdmW1u8mv1zWio5Ka4pwyRTQY51u6Kar6g9P",
  "key10": "2rHNQb3qA3my2qu6w3HhbXeeXU3i3nzSDfMUfRMNha6e6BxiTozbA3ThEhGCTpv8wwBudfdpcWBQkjuAaEs3kDpH",
  "key11": "B4p1aMLMA9tL6h864Vr1oD8ogsKYofUbYECuWzvcSNHpfDgP81eC5WUB7Txx5uDtf7hJMChhjhKLMkdEKzXjyd1",
  "key12": "mdSgd5VduiDHwzNqftWmjdK4YYKNqcAqSy9aBXAE6buCRUxGFmmsiFF1y77Rj7rAtKSXXVoXR5zjtr62iaMMqLb",
  "key13": "5DKWpQqcMLDCAV27GwqipdXWepdCg95xdwb5vsyG8NcG3QsGSPxBLB1MdTKgvEzaACZ3rMYAEuCaafBJR1rcEHv2",
  "key14": "1gBnjSqSWbkL8jLomcYMfgS3DetzSYMbKPKLGGt2W5L4EFxL1iTeNxCKCva1VjuYW8Xumsy22d5qqmujAjTgrFs",
  "key15": "cKqpvM8r1GKfPpS4VAFuut42vPZZnPbkNSYvbac656rm1RXQEucU2A5FbXkVxjXnzXSQkmyHbVMn9nXik2ap3a7",
  "key16": "5H8gbZ4py52MyUYFyxLVfocQHt25o3KemrRUSB6TPEveJCtcMSX69n8Wp1GjknGxKWMsjxk6STKi98q3YpcbpTzi",
  "key17": "63Q36NyjKnQhJZhaP4DmQf585TohbvRi6TDNiF9Wa3xs9q4niVQatcDDmcEqnXWyGZcfF1R6Wohn6HgteSfNYCiH",
  "key18": "5uQdDpJ3y6v8HoghTdYqTKD4cpyFxVJaJvaP7KGhpjF2yhu8SBW1BzoGKYLQKRLv1nHVhJt5ZZScYudiJzEM7zQZ",
  "key19": "5Esfsavq9sxwpHL7jh7HVE5EfiBcXgNjTmPZYGkxeGLNg2FWsf6wa5S1hjrruuwddVp5gRwMFqjs8pwco16Y64fe",
  "key20": "455aXopCrjnCMw2vGhrva7dqqWGxYMnfMsscCCXdqBxts6tYnGfSSJXkhFDJtDCaga43CgnRt6G4mGLtjXffvd7a",
  "key21": "45UBMymD83FL2F4Wvne6V1A3LZ5uUVFhjKPkiQaXv5mywaH2hrZjMRRc1unW4cJLvKLx4GJzzVKYqXavYyaHqMa8",
  "key22": "3DDZeQeqyUTakaxmWTGqPgthSSbZLhm6sJya53gdpSESykKFs3DqDmKvXeHxhGvwxk9jirVXi8ecqgWZumsjwEVQ",
  "key23": "5DLakA89uQRBuY7UbGMBeQfgkR13aVPkMSaU648V1Sc1bVanAJWw5bjGuG2yQDvxFNRLDBhEpHQeCryhH1A2heQ2",
  "key24": "dE4rdtEJz9TFFby7V6baZ78XNDCmSXAXGiowCDGquGaqW4MpdgnEkhsD2zfzGdkrbG4Z5pdA8MTq3CP54WEHx3x"
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
