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
    "4F9KiWBa2dnsYoHgTsdH1mUuvzpS5KKVqA5UuKPqMSyd4t91xEBiBUH7j2sPfNpgEMc8wa2Mrhp46wYVBdAuqdA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZP6aiyqiEUDvHUGDwXZiEw34k9oksRYQUye6nqrxzau9G4cntKsxU8e1zAXxKK54tDrmhYo4N5TtvUg1NB36VJT",
  "key1": "2bPrStdprKq7S5kyYFyQ4XpR3wNXqePMFzoMdKitHd1xLmRpNccveDLdkW97RQN3N2h6qrNN9HhfS5iKLrQikNDr",
  "key2": "3W9p4ByXAFPr7C2D4eCzgrBhrk1grd1bFrRZ5upXzfXxMUkAuimkgzotCv47TRft9JvzR2VUfdPq6Dz2E3YrEu6Y",
  "key3": "4HTeX8YQXpPn2PD1eRXRFDovfeP39KRm4UVSttjrUSwThYtxiqKzfNCNbZnBFNshA9G6YvTu7c9bKB2zN1xL9mF3",
  "key4": "3kynoVoAgnmKMVo2iWPTqnkRUbYE2TzXWuwJqw2m1QaRgnzrseRzNC41bwBJ6Sz6GUPbpWqrCjsKK9QbqZAmBppp",
  "key5": "54gTdqGN2xTyxj7mr6wMwzvdXRGsfdxeYdNKGqjDiWVHWBTBTky8VNsv1m1e5GormLqCuProWU8qB7VKJ7ArEs5k",
  "key6": "4JbqhtoihgksVTpSbvfdUx6YMNrAmrHQzCNyUCxhwTbvoET7yfG42MY6ghkpMy3xsGjjXP3RMzDxr2UGFNJj8e9Z",
  "key7": "4bTQgyi9yTQxGveGZMeGHVAkQwrnZ9rSTQMBFCzncAKCVuadnAGp5nD615RTtB3C8jKqFEEAdXstvSv672NPBSHc",
  "key8": "tex9RUVCSCzejXLBwCtpcENEvN3FTXyzMj5SUWbujEeGsoPmQ1LNuukkEtZGe2dtdZQCkqAZUhjxunsdB2jHRDz",
  "key9": "4uKNG9JNKQSdYiUqnmJJwjbfJnTaBjA28hq19UGiy4eyBLWm1DNZ79X6REzxEYKaBUunQBksZw1QKZcwxSSArcwf",
  "key10": "3tMRhvdJYKcFse68XBGkVg7aKx4HcbzvgertCXCoaAufN2U4Bn7362SP1ZNgqkQ7a2QHtqM42DS1mgPdKWws17eA",
  "key11": "3Hoa57yedCMAovfpvHH13NH8zw9tAJ2iXqfzM1ivBK4VV8pjcS8zshp3Y3GYKFoVtxtvBPWj4gR18h8NL5Nz3FXq",
  "key12": "KWDo3e28cqZamv97XZ7ZxkJrtTj5kDoDvCPVxsweU1WTPymFCE6vXog8yy9FKGhtFDSLkJmtExTf42qofFRdgox",
  "key13": "3jBrZXprXt6aAmyw4bWmvJ1ARTsrhEuuWSBPPSifP1bRCvMsXteumVACBXRaT9spBiB1k6EzmBvjv2uQJwPLnBmH",
  "key14": "5gHXegu2kCAn63YEjwQj4vuBweU4FL8FUeVpRzMR9kpjmejKNbH1wjeUWoopL2DGz2164GaZfpHkK7Dwqq3WCB7Q",
  "key15": "333oEzNitbSMHURnpfxcBerQgb3i4dHrfwHskQf2HT9JipuKYGQpvevAM2wLDncrSFXHT51yA7eA4BdvftBxpcmW",
  "key16": "3jbyD2F6GgvmRrD5qXxxpRJrp3135wx9MsGvrndFMZYbP1jVVVdtwz1GWJw6BPqGrW15GWMoSGDPcMAZQrUSoypa",
  "key17": "5JuP3zurGXRBzSGVnTemVPZVeLZqu4QW9vSfjMd3rNCmAwfE2wpdHeri3MPf3btnDeM1uZ6tBZnoz2A24f4yx1mg",
  "key18": "3otDszGKdtS5FsYnsdZsM5NRNQyWjTdKXnD7LuZ7TPBTrTsCjAcK3y29C5EPXbEMCPoNan4JWLJ36dmaohu1KBbp",
  "key19": "4C6t3uEKzuvp6qc8u2DqhHHzYE9xeeY5vaSqu5dAe6Y6UWicf7NdzoR425PBYyE4eFWk6fv4J1ZquPsyRS6nRHPj",
  "key20": "pzqQ5m28ZZYE7qMvgKHqDLPD2z5TY1mDigFTZYe5oTfkU7zWNsy5qv9nn3H9A2W8EAGy5AA3Xb5QhgHjjSin1C1",
  "key21": "EfigE286xfHgPRvrDNQyhdcEoLDnt5JwkW3bWWBdbd6X86vVEAPdCvfgNs716t2gkEC3X3myxdnbm4rFx1meJAt",
  "key22": "7yA4rpmkYHu5Kg3SfkJA7eJpZbbz5PbTGr5uVVjHgao3qThQ74rVvhXmh5Pk7M66gjU8iaSYRaidAhuYySphTh4",
  "key23": "2XPoVAVeaq8yTeSPhTHcHuFE7SHKr48gwwqTCtFCga4uE1JzEuJW2kzjDJhTWL2dUfzvCH6QTzQ62MSyAwd8MK1t",
  "key24": "nNSiG49v53tY62J28wDoyKguknamGaK3aAAsbzGfwQeChEZk1CQkTT3Pw15me5LSXBiTLSHWNLn7JYsVBZhqaia",
  "key25": "5aHzqSW58j3vAxSpPj5egShpXtnTy38waeSYHV1haPt8r3uC4Ki8wzCkKtRvdnGcj3nSSFwDN45JMzxJ3yXdGRgn",
  "key26": "2oshxtJ9B4vZ4UMUguBeDd32oApKZeYLosWEjAohJHouWRVt34o2g4vfTiFoFj2LbBBeZtbikCmrXE8Y9KhAb6pC",
  "key27": "5NvqGrX4v9updGW9dsbvBCn6vN3MpqoKETM4Y44sRzJx935iRE31aqNVvCeTpTq94VuRp67adaygNHgtm7osyttR",
  "key28": "uzx5m2ZvKxejPUXKo6ZWWRY7wjDsL3wABjsAr5JTZAXBWotBWNqbADo5Fro1kn38dXDb8ycQZHNjDrtfj5rEKQK",
  "key29": "5zCGN1mauT8TcoWbawQ3kmR1VDwCjH81sUhwis8FUid1onNyf2V47zm2BUkjHc6wLKEA3rJXKYEXb6sy75PTmAb9",
  "key30": "3ZMqF1K6fAfGjHufAWHnc6xVinEr7BnuHiUXmJzJWJd9h9FRWejRa7VEVPjjzzRD1eAW6EdDKgu9XV4FoyTSRXVQ",
  "key31": "5MXZBVJvTLt3ytfoo2pSevfVDohDb5v7zjMZjZeEz8DrrQ8UtWRYVJ4mgYjGwjc61sjXkmcr1etQPu5v9YDTdGc4",
  "key32": "5fDc3ToXSZmyVujLRZJozsyAGZmyGuf4JMqyZr7xnahTJob5SRXHcE9jtLMQxexE5vdbLhv3WvKupbZ4xqHAejGJ",
  "key33": "CEnPE124WbWphxwA1Fqt8LuotKegoHmyt2H22xcahiDr72jiMcQvD7a7iXqcy8QxRpfA1cS8h4CpyLYdbGzWdVg",
  "key34": "2GNAcxZ1LfccYTgigo418SsvpUrDoS9wszo1v42Rp5Ai9AHM57nCprAFZerchHZEYXHV7aUKH8HM4dChF6jTLkrs"
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
