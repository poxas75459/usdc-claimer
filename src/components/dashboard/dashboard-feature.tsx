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
    "ULxyymtCJ1tNnkXmZ9qPvkSer6i9ir8oVx3PrBaS5tcZjR6L1P6BDPpbuzmNJdz6xNFzQf6uKahWR92rGoBg6CP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dmCGtBKiA1d99C2TUXLhgJPmKLuPDemX4yPY5t4rCubDaxUs1Fq4y9rpBxq1dy61sxyvXk8NzSefqoALLEbmR7N",
  "key1": "2MPzuviEnXM1hfaQfKTf2zejAJ5JvUZvr2MuV6qYS5a9Se6x9KzLJeZuvYDMk6DZXc3Ar37etscRe3YBgSwzhqXz",
  "key2": "4Mct8A2YqTpmr91hmUML3qiLhaTyAGayU5FUnivqALWsnZffvTpHw5x91EQp49jP3SAT1S7Ff3eaFXmLRx5RKqys",
  "key3": "2eYs4Fdv44nitYzu5XAQUBtYPSc39fuuKGi1BHNJn1fjqaEndgMgf6AkuDYihstq8AfcvDDPtGw4uqguTCyA1QKu",
  "key4": "4ZVtWeLSLNgDYbdAe7kjN4K156QADESQFJKBPyS81Kgd1DsrZzUGWndw5WP2ka72Uq2yoK4RSGJAEPDc7NfGez4Y",
  "key5": "4sHY2aWoA731NZ2GqaBm4kQioqaQsi3vcLFcXpebZQgDcPKJtt98GWepEYT21W6YfKiEypNkfq42vaHg9xFVmn69",
  "key6": "5wvcZgYMxzrDmbQ7LJoVi2jHJCsBxFVGWk3sbCMoyuf3rrHKUWFZ8gvHiE7ZiqtambhPp5AUQcix7fMcHsZNYNf1",
  "key7": "4sFPdmP9UHyu8M66d7wpymjc7yB54Eo5LUHbofFfuEE6k916CgpS5FbsToWLq27idfuBfMVj2TYqyYqVXbj1NYTh",
  "key8": "5nXnvjNsfBi9wWkFYcfcTzuoorf4qjxj13BXgUAHQJFPNkartTJxAfY6LRn9bNVwj2i8dnbiwkecTeQH1CUzTMJX",
  "key9": "5nxJRhKbLheQM6E9YrVJeti5BR1hic38pjj2y9VBptT1FptqiibDddFBGkamx1i8bSpwGfRpf7C6UuSwJn9Taxw6",
  "key10": "2rJi2AWvpbGn4VzjGhxfyiL4Kvj4kYkie3heAYxAcvjVBsN36H5q81ScGKUzJ2U3LQVvWTnCPcJUwc4rfiM3JHnR",
  "key11": "5xhSokBHstRwHTW4HHCbjXncx37bf4bPtxwSk2TVRxVBcndzh2spG8A95UhvvD9bhLfBeYaYUExF2BAixWYYqZsT",
  "key12": "2yGbK7AS1yxhmK7G2nj4YBm1FzrfqxQsefeHbVDHUyWBpx4taDpzDXd7VMY3t3iJMMGmfFQRsHRkoSaDvu9zB6m9",
  "key13": "45Lk5RUqRWbNizV37XNAmgzEfMX4yYPMYsHmUeTDqfdhj4XvJZhkpvv848HC6Rw1bjSjfL9vyCouQSE3yjqbyHKa",
  "key14": "32xYt1iixpdjyDXbbfK1k27UA4S8KPVq6gcf8rZTF7FYG3dKgfYyYXgMStcezb4A818ZhKtxXNr1zZqACCRqBvKw",
  "key15": "22wQeHTd2zt157pL9vGycTjTuN7kGL81Hz3RUFzdPbuF2xH8Tr5uj7pgwajmNpxuoUh4zD9FVw6oQxXCjLHCqym5",
  "key16": "5x6coi5MKUQvsivHJLjfbqnmMrVCcskjeFxvgMaWSEYbaXKcuTxHykqMMQ4P8uvemCUYGw9DCJLbFGHzycuzE7xV",
  "key17": "4x6rKr8WXx6a5h24QVhaTkaAZdf9zCGaFMXkVBEEK9vt7MoANRoPRj3Wu6JkCUkYp17rAokcKMX7hEamwyKNtcdb",
  "key18": "4yYXKCtqV1YEDJ8oFdfhPJbTmWKzoKf2AQYBdZNS5kW5h7Yv7kaX2BrW8MBymgHUYU2FEKgsfRK1FFSay7cLnxhH",
  "key19": "3tBJeRsi2zbG8pB1cs1MFQLPXe1eBubnesvRum9y5cyjywW9LucMRL6D9kx5XGnEWKwsY4jRUqWsZPAKEM2rWUkS",
  "key20": "38fVvYoxQ6DqER9WzseamvB37y2mBEzh33B58iBfcaL9widwY2VZ8JoAXrM2fheuB2uyrYSErxk2ruxc2T9HMUDN",
  "key21": "3C8qsFAkiutHwoDeKf3hf3bwmMu8fzmBZ6xHE2GBFSzbn9s8iT9V8NQeWaU3qXWXEpcbX1U56dPqj1cmncb34io8",
  "key22": "5TESiLsehXuKTokYjquVoKZUhUoqTsCVRC3xSA6dejVeD5TzBh8bLM3XVBzUR5ur6FtJNPSiCULCv9Ad8xKAH4hm",
  "key23": "VWPjKeAXmCXsQKLePD2ShCB6NqQhWsyKWczm32oqSU1upGF6cgNs2oTJAHpymFjXwrKk8H3mABAYjqVLAzBepr9",
  "key24": "2Pct1tForsU9mkaqFyhJDr7YRvgFmjo8aWXiGtiyRFAHxKyu2TPiU7zp4TtxeZVwKpGNVgQxkiEi1M9o1qJFb7oK",
  "key25": "4ypx4vd99VBgyDw25dHYmVgHn9dx5Hgczv8hJJRbxBcrYNgmtz1Y5XvW4gN1SMCerjgQZxHcbkpRVcegcsFrnAXL",
  "key26": "4XhyAYss8YkNt3RAZGZEykhhuFYeoiD6ULaB5psjmKBxzDHskTVMqSTsKe6Qq1H5L1JnEKzavq2Pn1ohppBFmkRT",
  "key27": "PeKKqpxETP1YeXha7JXMcqgqeceDZGc1xHzYrTPoPgs7BxvCxReaExNksecn5cLhzV6bKrxDv9Bv6cmJcY3E948",
  "key28": "28ZeVuNjCarfyWg1tpQ8zFHxTnA5NKaUW69Ck8vadrCgKuUwTy5hHAYMm5t3NXcZqdDboZgDTBXDSjcQdCtusJ2b",
  "key29": "3x5faPhQwJS8JfJ7GcpCz7FJQFWcc55rjUoPnecHsgw2P4VCrYPWNQ3RcoALwKwYraDoUnHMYtKXBcLCvQeb5qAt",
  "key30": "5RUXJ15ND1eKozq7kRF1GoDv14msM2CxFZWbRLWj842Yc6FyotRsm714bzw5c93i1kBb9JD8iMxsWjKN3eoLqyyd",
  "key31": "5ddQawZ7uUv4L9mhemiMZpM4LaioCBy7onExiko2tTDrx9ZhsCCHc1GuSK37b7nPg9aPSdryRkhvwoFFMv2DxM7v",
  "key32": "2wR311K7u6XA7sbhnmbnjwUMduiHvzE3TvyR7nNBpSn6VupZRtKkrNyJHvJmNJZPziFrJSaf9isZgyL5VvWQUBhm",
  "key33": "2QfSSnqJS2qRVaqMcH7w6SdGbW7dRt83SdBAmzN4kYGsP5j6Tk5kghRTXY6tCBTRbK7MiEhYArdvbovFHLGyNKry"
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
