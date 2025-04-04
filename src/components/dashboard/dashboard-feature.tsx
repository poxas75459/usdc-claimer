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
    "4nBDEjkiEhXBykTmm3RmNqZszZDAtyiv3uDigZpC5XAHdccbyH4H3DLtD9qyYfBNeGaLFWCidF6XupBosYvmr464"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55yoKnHAwxR5JdrMK4M4rSJTpwEh8QofXwmNuasF7xHa2gJz5y1Y6UtUK7hkMMEXnjs9s1BMiCixC4xuanh914po",
  "key1": "2gMHKKbKpuWKhWURH7sRkoqb9TgEVNBAtxE7SHLJ5aKg6JNRdGEKomcjakhPvFV2noPgY77S8k573TgLQXJj2L4Y",
  "key2": "2RRyDu6VLERkD1qt7bJHgAprJxwMsAiLjCjytGtkwYBt1umrw5TZumNzqPnxcnBHvi4Fbx1UCZYr2ss11ex5uvAH",
  "key3": "9NiWu1KGUtkeZDu5djvHRP6JXVayP9h2Kp4uUMhJJAWy2PQmxDThBwyZ9qfbyLjHAJ6NxhKpRSra7bJBCpp6Ka1",
  "key4": "2f7G9h3MUX6Y5ZaJyijrQd82D4ikqst3ydyLb6pePx8Xh18WdTLoyerCrbdMjyjdeg53ND9c4RQytaPJPANK4CDX",
  "key5": "ooTYkD7LM4eZRyZWn4To8YNKqbrHTEeRrQpKEcorAe8JXKzV8REXsARMqJUtB8cCrF79Bb6LpVca1hP5RTJ3Cvd",
  "key6": "aUCBcoykbeFEVBvguBUKaNccULZhyiRTtMnCLyneV1awUTY4zv4bvH28KSjcobdSFYR9jF1TL9HQpTMRGPM4YD8",
  "key7": "3c4Z3HsbVKaXTaD8r8SZekg6gYVoYTAKoRzknSCPvJVJiSrtpkNTALiLy47qqGSfzs5UjLqnHSVFJXAkUDSGeuE3",
  "key8": "5UgRq9Jzp4AHde1HYHiSWfNqbYqTToLx4xEaUS5jB3zoLkpxuLaHoHYSBoRQT3CkhTg5PcHyPU7ScMKK16sgeMir",
  "key9": "5YHqeKM7W3c1fJ9c7PfFsHZPg3fN4Y7knh4PABhpjwZhg5Z4S2ootrmrVn6ZAjeKufqTBkhk4mjwH1S56VknNBdA",
  "key10": "2duN9uLDPY6CkfKoKVrFTHeSfDp9ck2V6QzV67BV6rknVx2thveKMZesjRSiUZwNvjWiZoCdmxofrFnfvGYuU5wZ",
  "key11": "2E2amFBFTcNrPPxY3sWStfArwcEw4Hz7aF2rDuRmKcMg46k47wr4MRB1pJbprqdeL8Ydvvsm1G4LketuDtkGHiwj",
  "key12": "39HaXpxrjp4YD59KM6xC4LH2CbvMo9Uym8GpsPWLUgFZmZ3fcmQ81JUvtG6V8p6YSjUg9CiytCH6VKNw3gsMGadb",
  "key13": "5ePsiJ1tS6bzKMgFnTnguteDhSUnoV3CAfeGsY3i43s1QuJ3do9ForV7P9R9e6x8Q8DupD7b4cVY62HbhNHRcsCE",
  "key14": "2oVouCYQCavtYT2UryokQSGEvSnz7c4nxbUzpuibWhVyu4pLbSTUVvL6pa9fu7T66RPb5uG9iALWV9SjHNNVEV9q",
  "key15": "5w47T2NrQBdyVBPX95arFVE8dH8uAL3yVVhoJsxDKastzuLUqAMwrALX61LUMvePYRx61san6Czak7rXVMnsGqVC",
  "key16": "51DZKecwDhSpWDtxqKmQLEEHMu9rDUcrPXzxLRR2i7RMYMgqbNRPgyoPMepg64756LHzzefpsxzPDadeoAFb6tKs",
  "key17": "GkK1qQqtFfLuVQNyU5g1r76EPKZbksHMekWy6yZujWYrtsGivMuH6vya4AZGZxpm49pggoMAiK8tc4MTdSqdimo",
  "key18": "561otbpMkdYvSLhxhSnCd6Kv99WnWnvbXB5Wq6dkzy2rCV15NsGrhckiinKuUDnSytPVDd8t3MS1FwpGMs6vzBVX",
  "key19": "5wnD1qM9ruKk6Np54mHxKrit3rqLwCb7pwofvFQM2V2tX8fb9giKUbhELsgJAXkgWmV6nDSRfQtbBX3D8S1D4Kno",
  "key20": "5eUqsyRM53N8oBWXjXgFQFvR6GuwwsgCBF1nsnZ6hAWUEDEkQjWHbpyySRCVxuCDKtgSzhM8A55VkNBZjf9Beb8u",
  "key21": "K4BQNuxEqmSpU1Yzuyuy3HesaUU5We43cvY92DKYH7EtWrc83AkrLH8JWuV4pvXPAkgijLSjbycB5kHe3otDyVj",
  "key22": "4fQCBH3d6WHsK4LkMsDa4HktQJRxMz5CrPWjmewPGgvT74JZc6t1vDgo1E6NznktZfdA3XbfdQuirMeDhEctwtr",
  "key23": "4ZLiTCn3ySzeqygZszWHZH2p7j2NmTFJkMsGHHgBXCNr1uzJsDuR1KjX1pZ3B7M2HegsdVZL2zj6km3Cq4prs31P",
  "key24": "4kVTMisyDeJ1EoWoonqz8JvMe5P8gXCzRJSTujFmQHg2pZBcYHgNoe96GnGhfgs6hYnR5tb3mdoozuFrGDPSrwSs",
  "key25": "5PcCkbGH8KHnLyyi8PH5er74awgGL1iPaahZKSJfdhE9JAUhWPzXrAWEeuCvJYyb3kctcwsc31MLyBUtTXB8WBBt",
  "key26": "5zAL4JxJYUnwHy64iPPoQfrmUpeVEANVfbg1SyZTG7YdBM4WGT7HnpF56bQVFmtp5D3N6By3vMGw9UtW7TdgbhMi",
  "key27": "4F53KtzFQUfaAGdBbkqpV7gYARgHCh8NCCfRzxgPGCZ3QKfBLGYnd5HNwzYZ1axgfRf1AJ7vNMaysJsCv3NG5LPL",
  "key28": "5HFi1zTDjMBYmkMC79tToimoNF5KcGc2jT1W8sU86tnGcjE2g5MEhhNJGL9L8g6GKqw53jxBcYfVmzvMhZTPX647",
  "key29": "4tjj8TmMsYuaxC9HoEqTy65A3KaxZiMnYW3Ef8o3rrZ7eZUen2dsCYx2JVQ3aadk9nq2p8Vv3BHmRe5nepnouFhJ",
  "key30": "3qoSSZHngoo2hVKaZDcfU1Ddv1KYQSQKisn9ATvQoYDchF43QvA8HiFiSn8jfhrzZdcpNCeeSemHPgq76TddPxG9",
  "key31": "935hGh3nceyG5vWsiGE7kVXBZC2esBbny5gMB5eayXoXJALTFo1XD8jvmmwBxa1RDhkXAQjr6RxTcqwUxELPdRb",
  "key32": "3J77yZXZnFuiGkvveuyNtchTsgDyKRrTcmE53XUmRZvvYAiUGUwMtarqxHgd6VjbtSr5vUifMxFN4Uq4JromvQGP",
  "key33": "3TTqW8AXRRhQ7rHewXtRjMTNwtkSro7z5XmAseCZTjMDi8pW6DkbhyW7EWToA5JDhb5eNmoR8M6vpzmRR77Bzr2W"
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
