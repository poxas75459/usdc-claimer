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
    "4xyXCuzmTpHwLgrpHu3QuZ8DiXqJRGwdnDHdKJFERco7jgJEmYAvvjtW2jk8GMcncw2wufsDLmVsE3Lec3zp3LVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HfNWy2Q9MFmF14KGWPDyYKtAio7tYwtcTwkotWcuDSsxzf9jX7NqCr1neFphyqQLZaVzYvWLyBJwzCncRym4Rs3",
  "key1": "2sJKntMbwxYcme33hrJqQno9vsNsCBjUtEpSU8rP6YnKzpvk2o5hDCgF648PdNY6PCbPb39ey6n4frEBcuVMBY4F",
  "key2": "4FTckpfVRgMxkFARHa8p2vdapBRu2bbRbfgtZBRMVKmJcJFAmSFBEyEsqhSeEFGDptWwfHQKKkRokbQKPBcLqVCV",
  "key3": "2j5GQk8dZJvpgqdckDSUWkhSQRZ8SkGihJaGDMZU7fS87tbZ1fHHTNi2hYwBpeY7A9ADCncYcW54WrMetJmmTBkR",
  "key4": "3Cj5iiYUzpzsKLpnQRMptt3zqbiRAF3Vsy9KcBZd974KuAx5w8PjPPFE6cfwoaBFYTTBiVd3nJixdPhpSxRevUum",
  "key5": "43EBQrxhhD6cY65ihcQo52CvVMDSpgnuxm5rxQngZARxdhY6UZ16K3g5EsLBAKjxyWKQuDUqbwWB12vRg8EUHNRs",
  "key6": "2fFqg2U5S5hDt4R3nepTGxhHFwTywWmMnZYjNszTLgwMVeZdg7hie4Tx4uzUs6zHEE5ywSUf3k9huBpH6Txx5QwF",
  "key7": "4smWvmofDfmqchN6btgErR1fcS8gSvXSYxxfuSHJ3M1p2nfcgJeVReJSC8n9vDujpac2w9DYWzK8su7P91foqf9U",
  "key8": "3W52wp83vtTCUwtBUaUvURFuVZ26ZSRgNCea4mQSNDudNowweNsjc8PFUGyF8ayAnnTPQTsavJZCdCioLrGdCzgM",
  "key9": "2NUQf6q8uLDwvBkJERG6ajH71WSerN62JiXqwbhDAGsD5rRtgQdtKy5v62sEXZSvnpCED56B759QSEXkfhyQyic4",
  "key10": "2BE5vtWcwr7TtdcsLKxL82HrNAU9EbDYeKHz9wfqnQbCRrrKp448GRvr1HMaHRXFQCnrMFfAbVqf4Pjg3CLfGPYk",
  "key11": "4zox5bj8APPkKnBJq1cbbnPdbNJyhzXw6N7v4TqkdHLkDKd3ACTohVzU8zguMRxAGEoEeD8N8LLrWZboF4ZGkZ52",
  "key12": "42bDvTRLdekgSu1JCBCvnrbtEo7JfAhuWYUK41ApEJb4p9Jm4wAc2jFhprXmJjQCEj7mF6ZBi4XDJKXkhMEEk3iy",
  "key13": "F2ifRisiQSWFAfLEmd8spM3JgJwj4doB5i1VrCPdVyQHgPvbkapnFtznGX84Pwda5Vt1mg8pv98dVFRXwJRYgzE",
  "key14": "sx7qdShjpPU3xTegKYVAQeXc4A6RBURtcJ7nc4xiBHu5VBX5YeNnYez9PahkVW1jVCMoCF5iNMDL3Y17X9FfxEW",
  "key15": "47pGnPD6LjJmPMdBTUwyRwa3YewsFzBq9uoAnpTLVtd1VEkkhfpRkZo7RLx4tTvXDVyEWv21d7Y1PRj8iSQzixu8",
  "key16": "3P5KR9T3nUsoUWEEFjXY88QZVyRsQ1xNAbj8TEfaLDyHK5ZuQKCgEHuWM3782GdcTNkDMaK61VGySTQWVvLgoqcA",
  "key17": "4c3QmQTYRfMgVg6Sur3E2p6tqcxgyMRoLtbqZJCuLGwWXG3tjWEMTEqAagGFwcg4R66BPqHCE2ca1668jkxZ8zDG",
  "key18": "2Ca7Kkg3U1TsDdcRVKpqAubsDQMJXpwqVi5PNf2pCMDBy6ASm36ZFD7mrb2myprWHX5PjMehAtXmdX8JNsPYM1W5",
  "key19": "2cVZP5rggCeWBAV11bCHDCKCCikbpDbCWzPSUp8vzf35SFLbxdUDmLvtuoUGtZfXXQbLmnpxnSUaQuTnNhCovGpg",
  "key20": "iSbkUh9JydP3mN8syuS57NJZ32pwuTXv7ymmG1qk2BRh6ouNrdxrRKH2Pc5jtPcuPqtAHyzcKhzdGhfSk7mYMKj",
  "key21": "YJXWEX7Xnt3ZTyKKrUYsGzv6NqvfAwgfoZkTmXdUqUAq3GroAnAFTpaE2LeVKMQ8JLBqYvE3utLxHqB8ehgup7h",
  "key22": "4SWyCFj87bvzfKjyHDRTasvaeSFhdsGBSdrqEGxA5qHP1FFqow3hb6c6WRqXKWAdtkbGpmxCR4S8ZXHjyZKVKwXX",
  "key23": "2duFT8Zh329dhzo3cepg35tvG1sqcMQJHRioCXRu7x14pHZkEqKMujgYT7uvtq5idMFtee7NY5Rw3hgx99kiPSHa",
  "key24": "5E8XwmYxa68QD3pp9BGMpt8Tve4WjUY2jFMuXZnUuUUFtmCo5ZrfWXdV3iBxopn8zKpwsirnL4AMncdvfsq74vBi",
  "key25": "W7tUPmopJ6rZ5mhrAaQJj9NQyZRvBMh18LsEc9J8os9hrBKwRYr21qyMirQaBVTGCavY9bFLZZjCW5NoDaZippZ",
  "key26": "63GQDUDry2hcsuEEAyAijgsNpQzE4iAuuf2EKn8iGhB62ZmSr3j8y5Pcm3oBsRVzDhv6Rurd7ohMQRAjFKTmMr58",
  "key27": "44s2NZriW2KR2kkJp3TRp5WtaU8SDCRDktbKmDfQXXPKuQ7ae6qwhxHbFT3Q9zZsfPWbCQskqMoXFf3Mk6EvaEeE",
  "key28": "2CvGvSvDCuNfvrRQL3VNeGgJQ9qAiVnaENFmvJXszuqiHAnrXAcyhYH9RFHnhD5UAWJaEYSci93BMANwjNENt9Hn",
  "key29": "2VvuHb32tDidCBiwTkWsKPj8bhYuYT8gEHuU6ZRwiJUwmJ2rnqoYCnjpy6URVGK5yAt4Cynvr8UVGAH89EpxL9y8",
  "key30": "2HHZP3pxFi1GfaAaZu5ZbHECXVpNAnHvxWwZ1u5bJq19EyCMfPNcuAMHU6y7ikPWZ3X9jUZwVJcfpFCt9yrH3SHn",
  "key31": "5brrTR3XQyBanRzN5h4iZqeY3qWP8LpK5rJyniba8pqezPEwm3cfgGENAAbmisser87kH1MnCf6B5mtRd6wtZauz",
  "key32": "42qASrxC7Gc3h3JTqD5azsr2nwrY5ARhatcYWiCEetw79dcZ6QKLdKh9xPKjBFVVizPh7YTt7QgHEjTNGzRtvpYc",
  "key33": "65TeZNu6iS1mg1NAjvrj4wwQpE1jcj2A7oyjiMihyTrvw2i1Noz7Zp3j3t4UaxPchEian4MUMqsCjYyAWq6HxYwu",
  "key34": "JXg7FyUv1x9fkG6aLNDB1Ta63spdXTdMAs8RCovfsWFrKTMz6mNthxSaC41rmHGevezWyo88kXThCjRo2CGSPhj",
  "key35": "SP8K9hfMojbJtWB6tx3iWE2cB4xsi9vBFJW5VBd6A4kVpjGJjDw1bcZvSyJcsaJHxoMQ9LUyr79EKzhG4A1Wawm",
  "key36": "fnrnabTdoGK9YmXy6mdeCN8qWmLkwYaF91hzngU5595F2dUWnYGQqZAkKjDMSFD54sGKiBG1eRUksM1JKDTWsda",
  "key37": "5PnStgNhYegcTZRQptEWoqCWbffUET9BmtPaAupYJ6aeiQDb8oK1WEuHzMAoWuvuNF8tEJ4FAvTp3i234fMvsood"
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
