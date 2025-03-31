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
    "3rz3n4aybmKfMz6s3bjg5Jyo5mbFoU3ycHLNRJMwWY4FqFjujdvcytsZ4Ma3TZNeBYzn97EENTXaTdcaact6YqLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e8frRLyeKfMS1KBAjBkgD7ZuTKd6qeSvNDzqN8ywwhawYBxJWj19pRH1VhvHaeJvAFugY4vPSvLqiEeS3U79nsy",
  "key1": "5emyaaCEbQ7fgqYYh8N4vPkkjGnt83Z7k33itLVirNpRQD2V9kvitABJvDCcF7KoEeDYHyhvrGkKn28xGpyMNfxX",
  "key2": "5zd1PNDz3Fmm2e1mFt5ypSBiyju7T3uMVNv6XxyLfGeXEpPbfAB1S4hdNDPRWnD81TVNpcmsHksWKvouaeyzRtdP",
  "key3": "3iDFBzDLdqZrut8hMBnwtDD8n4yaKyGxKGkZGRF6SfUcU4aczPzgMgkpnonUvQoQHMwn9bCHfd34Q1b3EsKj9CR5",
  "key4": "4vMQPQq3FR8iyNSRVfcLGEW14bk2bM49nZcpDYthSKHZE1zAAxswkpfi4mE897WpXXKfXsWfWwPkUDvbJkmRTMFZ",
  "key5": "5Ti47DtAVDKaaVdgv9LxZBBjs4Nv3vZ8y7ctVTaSQ9rbxpcKGM4Ad23Jxx6tedacGZyLif4c7uTtrdaLJJ3Cpsrr",
  "key6": "bNvv95bTKhwAXgDAvsaXBDpToT8p17CM4YQnsKB3Q8za7NQLYw77W5jag87kRpzNqFJajDSwYhZqQEfH1xJtGjz",
  "key7": "rk6ARPhZYzDeRPmtwb1mDUPvYD7qkbyexxfGkw7kWrRRPgetAMRHeAFs8imx2H6asynu14xiGgNpEADUS5FiUmo",
  "key8": "5exaB4sSk6THQCg7gjrMxHJ7brFfSEBJknzqxQNTCnvd8XiJxRwAPTpmLUZYDabJGRYFQZtmJ9brfggtsfXajHd1",
  "key9": "2tbBwy1aYfsXU9uk5TeCFge2wcAH9ZtYKa631kCPbiSsfsniYqQ4E256gYEkt7Uyn7m3qBbKnammiaXqx4XVyF5P",
  "key10": "26YtUrgKQ2XCBGgNu4gwKZ8RPf8NNUWaLEAqKa1v739xFoEtDXfPputFvM7jUBc7EvtQ7kPABwJjVp8ufje6ndzd",
  "key11": "32nRMxqQnQYxYaN5DdeNCVTWNoKZJkWARBGwk2QdsYJab62SPGxMnXjQZhfq4pCs49YM7zTt3h4ngTRHvquJGfzL",
  "key12": "8aWpJ9xUJ6tWAQwJxWYwHf3KTKzsDuLhxhRdvHED91yEBqjomGsrxcisZz89aopsBmJGEUCj7Cwdir1DteVi1s5",
  "key13": "61pxzsgyCXMdf9wHcdw5EKJDkeKHpjYKx5ZDwsHYqDAZVK5YxJReuEiRfBdADrwM3C7A69v3ErHhYD6reJ5QJ8Ep",
  "key14": "3nrvMz3USXXR3R1SiQsetMb3CKBBfzED8kv5QMgjFdL1mG3dFtvmbPfNJRjZHjGzZfXqYxciHQ2gZhoHt2EkLWJf",
  "key15": "jRJ9sFcT6mStTo5xg8VPdd5S7yTyJquLJSDsohweeiwxKLzLaaDM6QuXSHTGkpH9LUUybPCRCtmVyUY4n8Keu2N",
  "key16": "5ZuWkB4WPLT35xCUKdgJ7xpVyikSp1avpj4rhnWWfy1aCTaYgcxp8BT9kugcYUhENmYPjY5ho2BP1yUgaWvvF4ym",
  "key17": "2yCst3f9wxKgSy6Ze5XG3ikyxro83yipTvuqrsN4M8hTrw9qyq1PZP3sAicuKxCybcPTTU8iLqwTW7De9yVvEBd4",
  "key18": "2HJaZBmcCGwHUbmuzhKeN1GxwQpjVESNLrxSK6kyhUG2cnNJF5RvNtrAw6DGtPdZzBg4mSmpCEm68sT2rxj4BqKD",
  "key19": "2LzLWSCVQHZ14LTrszUFuHk5Sk5rAv5fwHvey3D6D68tMk4fEVeTcXeKVsMQC8tErL6LY1vJ7GqjZiTMn9KEobPU",
  "key20": "5Q5zkEiEH5AMQr6aF3WYVKLNuMPrRqUGRHYPofpaJMVpCS4TtRSVvJzFJCKSfe7EEjioBs5Ypu6znKVW1KJBq8Z6",
  "key21": "4feWbW1q5vaXHo4fHrwQFQZoybLsBJAtTPQ7MGfM3vB4caMHeqcUDzWCXstjioGtbsZg7gZ518Qk4FR2uS5QWHND",
  "key22": "5TDyXgEfnKfkhNxk51V1qq3Ed9cxcaj5B98uoioHuMvrrbWVwKFLHEd37ZALLWJEGtPSmbprtEEVXo74AS1UhRHn",
  "key23": "5iqSzaTfyucMd6PfrG1Yp5iJGr5ZRK1u4tzNZhCgCezQR9pwWkProatYTRD9cg4tTsp9Gfz5DJPwWomeCPhe1gmd",
  "key24": "5Z43XjTVmMqiSXZY2hJPheo8Yq6Z8gyvyRHjVrj1kiatwv7bpGcbLyx3q5VBkppMZtUCRFJ2BPzqHG8rQmF7QsdA",
  "key25": "238YeU8euuhBS3HTTdcX5g5xgCAwyzUtrL1846CdbU671syMETWB88Jzvq45RVH6EVPxjn1Ev8GVhUhxfEVCcT8o",
  "key26": "3fhef2oQZCijabufxJ2TA2ad27cLeXtU3ySPvXWhX2jmnWvmMc1dCNN8X35P85Khub1zckMLaZYV3Q91EJh4gfd6",
  "key27": "3NKHT1LQCvZovNBMa3E7rortLkNgxZKBdbLYNmAMmb4pzCdtSJZWJqaMW27ViW2ojN63BChNYECeocBV9v94AuTe",
  "key28": "5g7uRiUQMuPmv6ev2TgnksiJr7wTk1sm7KWH13J77p3ox6ccwvqs6sVUTPxAtfN5ahDaxVkBGZfk1j8pkxQ8mR8t",
  "key29": "3wKAuvp4Dhq9EGtNkrTFeRwaLAKtpnAtYBWQ2aBeVCbChJsYnhghhDHJtoQk8gAeZeTD4hUiDxBdkNcFq2Nz3iHb",
  "key30": "4Fwga79PBXCLNAL9PNRjZKr3NoStHE3Znn7TGDQR9ZM3SShEi8uyXLfkYDPwQ9x5vSWHnNZXEzCq5E9FHTRnf69P",
  "key31": "HrtvvUKgDxcD3tUiogvDZMNHarBsRJgpEssMKy66BPj1d88RGnC4uTWgTC8trzJdEZBQHxa8qazUUGo9WirqyeU",
  "key32": "3k7vuUyUCqSbtDua1PuyMmBhDWMzYKtNEL29aXNjNBoDkHAWp8PENkuiFG1JiPB1rRijNJ5sFmwJdhT7tVifKAcu",
  "key33": "2rsjv7SeRPMy8SuVzEf5EtxcyLKCtAbLrHoVAW4MmYxegESkJ9CP6GdNrwYeQGG12k8hgYAvHQf4wAzsDMGySVKg",
  "key34": "65paSS7qAWPdUB7DnVsmGb5wpjBp3MBDPseEFrmbChUNUbxENN8VRYK3PAN1RAL5j8AEsdJBE9JhtzB4gDtKqNEd",
  "key35": "3nu6E2MRq8ipuLosaSr9AfxHRzcwLckpMkX2Adr6hpHqg1w5y4c3A7cmy7xDzReepsQ1H1y7ojRM2P7Eomzx5vfW",
  "key36": "5hCcRbCja6zmiXb9an9d22gDudTLoiatGwmp6J1fTSjRovkwSz8CezB5e9Y2LGcZEZksbk2BXnPXb7DUPT5HHnd5",
  "key37": "3Sy3QvtCGoWrapUaGbH51aMfTNQo5hfLYFSxWNauxKasywRZuEqvnrLiMpn9cibn9RzGoJvgidPD6NEHfJNeEjmw",
  "key38": "3Gbd1tFXr6EsAVrNtjBrRsTk4a7xiB8KvLpqierNVsWYnUpeMkskED19tRWfbqkpfq3LCz5ivAceJkrZGzidNmf8",
  "key39": "4K6ybBGzuSMzmDpx1Q9hxrpRdPCTmjCtZv8joWtBhhmZWHU73zQ5M3vUqoPX1RkU12MhcNypfeumd1xe9YJ73LUt",
  "key40": "5ni6w5PTihfLSRyHax1NiNjNkXbZVs4acoxbcznEKsqG5mAm6hTZVqQcWTSGLJAcL2caqUWyeYHCqgyTk2rUT5e",
  "key41": "5RTg9bvfSqthSEVamQKZYLKEpEE6K6Nb6FLBa3tJgqqhWhppPp7bpHDEc5LsaB3W8gQ8ojHszaNtPh8r5xeYhNBS",
  "key42": "4vLzfH4TYrjZk4qwAwneii3KPFEQ76gwdRUipKvHLFgCCuwfRAWirvv1ws4HqQwxTDLMnb6wSD885dSxGx32kfvR",
  "key43": "4bMPB3ZmT4hQMh5B8Kuye3Xu2GtbchzV5RAbZuD1DWADARhE4rHbfQfvKeqxJ5S9XyGzQTStpYMKNahVb8ZENmvn",
  "key44": "4XyDAtS7535oYbQMEdrnzXPs1W9jqPR2yRB2pr4NWmDZgzviA7fRsab5RwuCdbRm3CjkKS2mGyGqAN616iCiAXsM",
  "key45": "9NRRWZHqvkS4KmrfqXhAE96urMJ9f9PZ2VCcVc1H6UxtxuFqUmybmXx9dRUbYq6XD6ECtuUWw3aFHQwYBbUpcTH",
  "key46": "pAHzYfbUDwE7cv6sSLCPBd6ogRdg2jgK2hM21du6GJyv3FQnMuM4tYwAShy7xxWKPAWcFpvntb2gv9SS1w733PX",
  "key47": "5dkRcbH5g99wa4AN5mT9L4vLmSsycwfNJwegyDnKKVyXQnCPF4KYQcg1MWVBBjPgLhqcd4DLm8ngvnix6ezfMhiW"
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
