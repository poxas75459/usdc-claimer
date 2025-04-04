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
    "3FvAonN5yTBkE8VUPBegz9dsbqtgQuF7ud1FU2v9mzKejYaGXk7BBULLYDUQgQsYMNoQp2B59jUgWxwLJvc7vtng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMjmXmTwQaPx57PHZYeL5uZPF2pjQLkSLgPRCZ92zDfTY4dWQDcuDnX2nBa4ySZzBiWv3e61c9Vt9JE1wC2XJDi",
  "key1": "4JNCbH9aAzFkZ2wYbPuV1qMzCtPzXoc7MexmxTev1gYC8zia3axsFcG5d1tY6TkcNM3HnGWXaNGpR9Pxo5AU65aJ",
  "key2": "49yhAG2zMoNtz7jhC1yYcn2LH3hshT3geiihYxomchcEpPRkFeufi13ivvNURG8srgFmnUer4r2ARksbVdrr56Qb",
  "key3": "5D72pP1N5HJ4Bxh5esPNLV2vqQh8GGupXScbVhYZqC54NTinnMMs7NQRa53AmtXgvhL3rjKoddAFKhHKLSQK5FwF",
  "key4": "29RhV3JL2R7RmaPXkpFMo4CCph9voocJA3UbDeQpm4Y19yLTT1CF5M6y5EceECvG5ZvGbQJP7L7q53vU4FJUXWDa",
  "key5": "yMZZ8HQ3ShwMpfpSE8ScQ3nUSpSWwdQ5kfDo6QdZCkHgfEMw15woz8s5y5DHLDysksmwBuSjq7Dxm1fV259VF3Y",
  "key6": "4Lr3xsaqani3dURVLWwBYLsNV7iNzaR2vZwuzkCRsqc25SuVgjCp6uuCBHVTFfA9xcsrKW2FzE8wLFq7PWUftXNs",
  "key7": "2FssogrEmgzvUGPPEKzx9CwoeCNjjoZ1TRyZxk8TQAZnmg9kYnU3kFK5KuEbTGKNcmsbkQjT7voTPvwd8BAsRwto",
  "key8": "j7zcUDeyHPoAZ2DU1e8eWT3a5wf4PPyBpNmmCEVbfXN9jPBM2amnQU4S6N4PCUf522TfFCjioWYkJjgwG7HRKwt",
  "key9": "3QtZiL1LhR5gJxghVrquCK3CgW6Us4bevRgx7QhwndeJ8xFxQM53eNWQTjpAKxazNjRh2XBN3ooYyncmr31Yh1wJ",
  "key10": "2GtDi75SNAZgQFLyH6CMjJbqcYWBsVzYRPvmtxUVfxGduk6MdtASi3QNVKmQGDQ6JpKQbYMoLtqVAim6QU6QsVrE",
  "key11": "3bjv6sGxSPd3uzJEFTxBiVrTVGjDG1kipKYTqkWm185GMKDjMDti2X3a8Ei7wpWtnXNtxqunwjKEGSTe7iuk8wCx",
  "key12": "2oqFdvmRV5hSEA4MmsVmfZbgmuZQMZTjYHz2zfXdVmT1w9N4gZaQp2337rSVeUHd8QCHwh5e8p4WzYmXLNZ8TJtP",
  "key13": "61ENBFSWLCS3L2HbMi1NKzDRDDceQsqUtp9DSq9vdnM6A2PhwzTgakW9XqEvbZDhK15jbVQgY11gbJ4eK1bQcEzh",
  "key14": "61t2x4KW9h9n9jgiVobqCETPPUdBzsP1MJWapvA5jZrW3UTmo3mPfUFFW5W3RPESeuiRQVbjbAi8GmfiazcuSzyj",
  "key15": "32CV877P4s6y5XxnwiBKbDFjoarcMqU3rMnx8DLj5nvDipqgsJk5wGmscH2ZwDUkpNMx9jpb9pcR2SVXPkwYvaHz",
  "key16": "522r9L3aCDb6stUxx6YaHaaibEcwAKD9D6GmmMwLRF2C5Qzo5TvFVtZExYR7TDr2nwyLnNBmWL3D2AJSCMT2bqtW",
  "key17": "5fTQY7zYFfuhRXigYfLDwgMoBodFijYSYxtVCdfuYxWipG6NxezLmK9u6M3AwDuyBtiMVtJRYQ1qVXrCvmXWXkNY",
  "key18": "2NNYuHPTMXDmVGYqrJjhZWkTBqWd6Lk4MV2dgN81qNxtNhDy7diQvS3R11sLi71PCUChXYYiMFTZQ377NcUcqDyq",
  "key19": "5Dkrfc9UknSxtYdwAAtf3E11aUhPxyMjM6tCNGT86wiZcGnqYJnW9zsVY3JNRF7gssF2j9bBxaPos1D1o8VDGyg4",
  "key20": "3TLpi8pCD2JoMAo3v24QjgbABZtJvaNSS2KgURG2BmqaB5j93QYMgTJUAXz3tv6F7RJ9SEr7WUDFsvib2xKaDebU",
  "key21": "5eHYdcdeCe6zp3S5coC3ExcyEnCsrYFrXqQaMwkwqRK3Cnd1Qo6wiNaT2ScVJVfjdzZzdUfykULPh4emih1e2iy1",
  "key22": "9huazSQTbuWELqC8VqCtoSFwgik3Sz5jzVMtsG5GxVe4kgbPJs1HNs8GpvEqM47zhgbtdzwKqda5Yn8vfyRuJCH",
  "key23": "28kmkFLLTgFaHREZAPJaoYc9KMCiGu2xF5Snous4r5sqKW2kQscmdQ69dNDaWCh4zo3WFGeHaBNA64qQ36U1bwEH",
  "key24": "49SHyCg1MxbqzREK2eZNuweM4FMEETszhUiXrKZ84XNM27kDXSTvZ5rN3mjsmVL4wNT1ZuJ3ZyHHekjm7JQGcbAq",
  "key25": "sxo2qRtJuxkhnb9Lyiwj31jddUFk67qhHNt74iGPg4WUecjUMgdTUEEgB6utVzgxfLFXy5dHtv5eds1fzDRHxwm",
  "key26": "nsqxJt81tvKJAR9XbgUKzjEvQrdRaL3Lw7Gp1PfHHLs2fXXQU1uBDKaqVRtd5JWMRtxpMYxBQmSUTJJYdTdHkiT",
  "key27": "cnoVzZSjkfTNCsCvsibtM1PXy5PRWSDjSZopdqR39AXF5QutQkkpdUH1vQvRnj9hS8UeQZjTgFjjUUsB36ndfC5",
  "key28": "Wbzi91cuV94aFUbKMxq1juRd12XrCmQ2wGr1LKdRpu4Y865xT7Kn93y9QVdZLduttHqqDvnkXho9QrKwbp6EyP5",
  "key29": "2bFiGj1HmoBH17tQM4uua2N3vEuZ5LnsN6KNFnRcvunFgF2gbSbx8LFC3dKpqxY9tF5d3ZGiVZdu2msUYvmnQG6S",
  "key30": "3emrNtKdA1cLjdamoKHtof5P92f4wmkmsKSsnP8Wyb9KsqcLPusVydv7JV4Hj7oJMWWLVZNfmbCNzf6LFfW57KbS",
  "key31": "dw3g6vUap5cgiioZgihJKV3nRfAF2bf3QY96ijam4g2ePKnyVo7B2tAZ6Pk26Fu9E7psz4G4bcgcfugzBTEFo3e",
  "key32": "Zh4UhUkBCx2ndJwydin3h73hqd3fN1kEmurcm1SfGE5j4HBDHx2D9SDN4jvfptB2qo1sdpekTwKSoKujQeSRsWr",
  "key33": "2DG6KXns7T9QqssDVzW6ukDLCR9L1u3THwWRsnXwq7s2Abs563Du79iCyTBmuX6sYTAkmtniqbBqa7F7GVrQgm9e",
  "key34": "3u2WeHB8kJ99rNgbHizxR61NeYc3i2vn7gsnu8AUq6YzZN18GZCnWBXjmHTCLeNzsJbREhRVKJrKpW7oL94SYaV3",
  "key35": "46DPEfjFmMCR2C5jNAtBxa5u5VcPjSwWnGrp3qv3QS9q3L1SSXaKbwvsDYqm5nXxvty8AGsxrqzBNrcwKdJrSN7P",
  "key36": "3DFyBeXkWKBGsCBXUzAhSrwzr7siaiswJRDHtPuPfuKyDzX7UfbB6EXnRkJWUCmcZ79CVSy64NXJNwv6nWTzCvXY",
  "key37": "2gWwRZpdXRF4thAPq73VuXJvdNwuqz8T62sRbDktrXRjcxYULqJwBvQHwaQFHGSdL2ajfTv5py2Q7gqXsE2wBZRw",
  "key38": "xdftBnGY2kKMgdfGBMJwMq7TMfCQnndhN74g113MukVPMuTvYfU2AZBUv76zhspteSigyD3MmTSq73eYTC2ec1Q",
  "key39": "5RJWxhtoME4ZYMyrZDZMQuQam9xe3PPGCfu3AALT6f1pGC66gQ1dod2mrxvdpDVhEGLRUambCfdkE8gFhNdTRW2n"
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
