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
    "HA7Bc8ESQrQdvEYrj4yB3kr3PYDJHNsFVJ3tVX13vBvGgtHDBHQz275YBwQPZT53yafgJEAwt5jndWiXWBwVc3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eBC1JhmJMBBqziTvnhEkX2chRRxujhDkzFwBsm5kzhgiVXqQhkAnKjA4cHvNHT2EPLhXrkHxs4XH3M9JHqnPmKn",
  "key1": "21JA3zhANc7m1hje1wPEVTqi4MjDwv2rXXn2xmY76gevpRNmkTC3ECRV1njuKnvYW2vxae3eD71RbxKpqhNP6NHS",
  "key2": "3MPiAcCbUusUHaBbds1qHbcZQTZZVoKDGoQ3HDX4sjg4MUZnDpXpSerjkyshsCKaM1LG8LDrP4bcErJxvwbQ8KKQ",
  "key3": "2dNPgqHUsA45E6USZ7BHkXaH3DWpXbRXmGXanMnLWpm7uTtvVw4jXctL8FntawWFuokkDtNHCGW3x3SZzw21SUz5",
  "key4": "2xirxMaBAa9puuhMNEFedTKvbNrsjTBNQhdrnj2PubYxYqwiELrCu7Jy1AU56Xj3eUPAYjHNAH1p7e9eXpMLsuxh",
  "key5": "4kjz1KhhhNPsfeTRkqKhdXxdwNvqNBk95iNJ4d73RoBhXKShdywH6L5ipTpYGMFXqTwSVTaF61rovT5D3RVKqHWJ",
  "key6": "65mbSvsipbGLtwihMtfJDHr4gJbAxMuRD7UCDLtm6cy26cHS8Z8t6gQhgYoYvoXhmQvrNuQohCoENBDwsha2u1XL",
  "key7": "4Yhoi38S1PM14waeyfJwntSuzghsfVUpvpFXYLfPiGYymqrXtsDWow3QhhqfkrMJYhiARTY647wu2u7kBW2px7JU",
  "key8": "43Kade3MwKv7BAoHNQyytfn3iMm9JatrDGQRswCvWnitqVh5xUqMH2hS8ZvX1xo3Do5ndn7WAyHj8TjncM4JVex",
  "key9": "5krgWxZVSSdKyJhGJw7LcqGC3QT1zVUrTeU1pJpD2F5ddcJ3RxKmhTwMiDsHV7V4N4AXbbmjHYQqHbejhyhx8pCJ",
  "key10": "5SqhaoqTDwXPSpoipPcpdby6A5S45fsrLd3jm8Daj3h3oDYemje4e15rAMNRYEDLHwnuaqzgBefGgwbEiKFu5oqf",
  "key11": "6d3GkdgQWcJryqq3f55eEJ9gM6zRmT3cU6MfLsNFhbiz9czSAzgeu4Gf2Kn3PUK5AUZ4TQ3R24jn1hG2MgfDzWj",
  "key12": "3agU4eH61Sq13hP8PaPF6HtzGfYM1kasKRhL6KeNQwgfvCXVoRaHU3e5Wbo7gfMUWkoyXYwwLAFuUUsQd7VrYvkU",
  "key13": "Ub9cPJcPDdM5RspfQEXq6AWGUUi75LsPUSQxGXPYeEQYhHgtLJ3MqFDrKPKWU8914vGHJQ3T8EwQNgNrRdMVFTs",
  "key14": "et7jHaNgP3AongwzGty7DDa99Pb7oBLt3Nqstbv5uT9MQ3W8hNKLrcZwfntgRGDCgCytzM9FJ4a2qTDC4vbVfJn",
  "key15": "5sR5HNPKhzpZUmdyMffZfk2fUghQrmJhCG1ZqrjrzCzGMikD87C13pKvS3VGhfPVzomgkomwf4BZtMsmUcQJ4GEh",
  "key16": "3WUWdasQeC6jKprApwXU54V4dkynfUJpYmzqbrSigHn3xJEnP8Pj2gKTwVn5Wi32sF3MVKXLcR2gZn1iX2Dh2pVU",
  "key17": "5SwfdBmEVKqwVoLabb81n5L4dVH4QApE6rSNaMUUtBvYKJUxjW3jwB4x6YUwccryaDetpDp9YkWbnFtaJmFGc2qn",
  "key18": "3HJHd3tKxixx8uKS2yN6rHsYiyirqDDMp2DazgQEgadTk92CGbw2sFGLmpdVe2i7m1UPnPDA38KxQBZpKAgHtHr4",
  "key19": "2nYSNWosPphBLrP6SsfScjW9Km2pqa8aStbGFfbeGeBLZwv4iwnrb3CK8ZKcxPfhCRznQAdsnwoMXnZyJicHpAne",
  "key20": "4CmC6MTQwYdUEA1D85vstrcXcskVapzmopnoBb3MAw333QznKGwAQTD3Rw61DLXrEPXQpkPwH1Vt9SNHPN9uk8QK",
  "key21": "5f1AyjHTwThAnhkEpLZaYLFEH5PhuyGqPtVQtNa5gDEMKwS5bbF8Rm5DospRXW2LqhTCq6o2979BihFzqbM589QC",
  "key22": "4UazcUB2cw63iuSC1FVXLB23f8RBqtSZ1L9Dw5VEFaQYEYk59THHGGwGvH4fRcf5GAMtoWzqmQpWsJJzsUAuVSew",
  "key23": "24FV5ryFfVmr1LqvmqcUQbixZuNaKka4PLmu5xZuWopURfArXKPsYAd7FWcZGoQb59nWVxDV1ZMcjBz8pgnZBJZq",
  "key24": "2tDqfK24ndfpSZPYpd9omXU55CpyhnKBv5Vjkh15Z1u9rha8dSwvLrSHfZXduXsSbkuDgzupzDE4fM2qvXEbpkDx",
  "key25": "2X7Drdxdxt1j64jeVNLs64T3FR7NLnFw1wjwD5PwmdZMS6wpmioH15tRCuNkoikBwkUcKdZZ7x5RyhmWuYUxNtW8",
  "key26": "47Nn4mAxFrYpsMXBY2exGrNe46Zm8CMUMEgiwmjegHbKW9tCu87vGascfrAc3nG8Xu4aXG2HcDcDgCsk8psBtXAF",
  "key27": "3pfzo2QAmLiNs2sUWZoAai6eecwLoDzyGa5iZLrrheWV48LSduvr1VH1iQTp3UgEqTynPTGZ4hYVn9GnMsMDoQJv",
  "key28": "pme1tRxmDRbwBPv5YDRkpDSU95rn6fievf5KmHmdgD13tQinGfbpH7Hct63TsmXutZWgzkBV1rjdSfzLvx4b66A",
  "key29": "3DYv4iVgxA1FASUeCcmRWK7AAYB98MQyVEemhmDVzZuxWgyZJFy1y3VsCtxFAYLBi2N5NdBQ9yhYajUqLT7kFQ3n",
  "key30": "KYgm1PrAbqkfwWEUeczQMCCiM9F5vp69NjbHHUYfjWMg1A1BoFeHJUwpxDUgGf9of8atuT33mHDNeeD4gx7A9mf",
  "key31": "WtDLJnSwb57EfHHZKWL1K6QZeYUfpGa8hvYm4C1bdxbfpRcPDR5aiCyckdNRceTBxVMRhGrwJFWbwML69KfUHV7",
  "key32": "5q1jD7U5iyzjo3oQ3LnabFnbSNkawMtVXJJMMjJtSLDBymx1Ei9rEM5hogiaGBUXCNkS4mr8g8Hd29ouDRWqeLDR"
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
