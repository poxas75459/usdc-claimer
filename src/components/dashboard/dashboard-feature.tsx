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
    "4qnixULkzPKMckPkDnRhFcwbr2bsEEJqNr9EE15Pthp5JZWkZcT4cEoffLcDjcgM2mumwbMeD7jRyFNrgBFyFemD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TiwQhgua85PtUWUDQ3znefJueh7xUtP8jAwVVEMtfRChGcuK7zygw8AUovDkfuBU2rniLiW9qmPgSG5RS8zY8YG",
  "key1": "4nCfn2yZKPVpUFqNQ1RwCwUYAi5BUFgV4wp3h2emc5yNAkpprxwpy3JyB1yRb4ctSy3zLp5dbd6dT9LXzr37uXWc",
  "key2": "3ABcrfAE5aMQSaxbuA42PrKmoNjea6b8EAXgJjmwCEZep1iABogJGMSJJrf7c74iwmQX6k4dG91BrRbecJwhwx7n",
  "key3": "oiyVggyLSPGUMMyCHsTTJR8hzszAXNsZgbfp8vXcLcmQKkd6MLTzSb85khekZDtC1tWnjoL1JkFXHseuxxU528A",
  "key4": "2p417ag1i7tPS667qbAMvcvtkKPp4AH9VJDFEkUZ87XZ41uA4UnTBw3xT3hL27Xmh3DoNDcSsQUUXp1iqM7XeLmA",
  "key5": "3QZH8wpb5tQZ7dyVoeW9feePr8byTpYVetqkUDRoMKUvMMEhHhBCLAxKmBgCeb5U8m4sQyHmDRBSBAYCMDiGWnvM",
  "key6": "3Z7zfUetmNqdf2Ede6JxExMy4c8D7EXdzvjsHNdCgKW7Vua1mkFUf9f4hmmudRRbZHaoce2RMYA7fuDKNTs19bMP",
  "key7": "5bmTwzygPMfgNRvsoSWKaWVF2z7dWE3p4RkxvnNYrmbiUaLGdDKTJrakZGqQAHNwFYTmymW7wQ1HcZXbBvdZPmEn",
  "key8": "5zgvFLZXGkqecmhmiLGKxALrDNaV8YGuatdzBPWKJ6Jrpvs6SqZGjrHdyseZ4kXJhW1Lj7HNzQdkXMEuniGW6vXe",
  "key9": "Wko4iamz9iiienik9YxWF4hZ4uUQYVy5RcJQf4fjimUjc8b9Ty5UEWoXLfQWsGiux5MWnUB4xLo1yJWKrEPYi1B",
  "key10": "UAUBGVTvq4sZxUGNambxcpWkVL2RrsS8yzHbaUiKQ3PKXdCaArLYAkcdsMgkBpkCu7bxJwVPKBXcgaVheSy7Myf",
  "key11": "2HZdpCUUJoWYxUvXxF1S4wzU7yYxMLxSYnTokbrjzuNVGFPnCwp1mfPJTcRGA8ER9jK9tNmuE8rq4cStZRFitXX6",
  "key12": "39wvGQHGf17zAjTpKhDH7dvhRFjVQWDABitobUT9R7Pn53D7cgKgw2c5Yze3mtzrufiYnoJJ2Zk32RaPQJ1EMkc4",
  "key13": "2chkLXFmGdZjBNJgK3AwjZDgpN68wKSYsJ5dqB81fV9NBozuyWAsThPUX9yoZkwV3xF79cqzUK2WtytAnPjNGvnJ",
  "key14": "2G15VRch4upw4Nbz3c62bdgFc4QM11yTqRErzac12padcV7W1VPYURuXkyDDxhFS2JhXfhSoE9Z2MohMbcpjJ8hr",
  "key15": "287BCGQYcsCEDE1j9py9W7sQRVPypmU25xVvxM9B1gKpSAnLAF9iRf4pU7sEWMsuh8sQbtPLuXgfAWHor9xEDjHX",
  "key16": "1oZBdj84TEXqPpjN4DwBkSXToTuma4VyurHHq48iEjmufuv1u7eT8QMZXe8zYJ2JrzbeFkRS8hb4a8uop7oVhTx",
  "key17": "25VXGvpxZgcSHEjjVAQSQtqv8qFnyMzfAYpT4ZrmkK2YELq1h2JcmvtK11xthbS3qkqpopGeXCdf6EnC2QneFt9g",
  "key18": "2aRxGhAw68jH74HZv5DrNg1hCJnHd75XLdwJrxet1P1ybjm9hTqLF3q5yMjAVdzggRyzW7zzPm2M1L3PZTUSYyhR",
  "key19": "5tTVFwKFhjuGdZJnGHzLNaCRKd4qVtvkfew1sdxTwAxRd3YFRMFfQYLRWKj5SyDQGnn8E6AZUbk2Pes47FBAEjF5",
  "key20": "4EkvAroRtzsdu3ZjnMH5yxVzxuUU4EBaAGBU7hznAfAvqcKFHAkTwoq9ZFtvvpU73ggKgfqBDqzikumwP8eJbRGU",
  "key21": "4jMqoKrVDnNxrqnZ9bR34CEihhqe4Hc1adfoJJGUfEdUDH6xePGDPwjdqu8UadPcPXiovneRupYim8jvT7VB43Cp",
  "key22": "5SBnHCi9QNMBTb1XETd36ZEdQ4J4HCuS5toM7DQ29jWtaMLMts9bAHAMY56GtpAkxvGzoiZv5fWNKTYNt58E4gRr",
  "key23": "4Mm53j1FbbUaPTfn7nhGq7XdrDP4MYZRhvhA5VSunSpnVpbjdNzX5cQS6gRMgWEnGUNfa8dTxHhVJrRUsYqMKkwK",
  "key24": "4BTcyvD7C6SBxU5vqFHE2S5TenVDSbfoHxaBLX5VfFwisfcqFXCqWp5H1ifWHpeaQxnYu6Sd1AVxFUvKYjJgxAuW",
  "key25": "5czJazrkv9nVmXfwUKPQryHufmq6eAMMc7EhqtbgCM95svVPi8imF1eaffnTdY11tJheDno7zWYHNt5T9nRkmBja",
  "key26": "2HTjCP4Ex3LKkNudFRVQLDazXxQrUNqFicfWm6PxsDSFU6Rxakyow7iVmsDQZSzfJngmsZjFTT6ETiDN8aFx6bd6",
  "key27": "5Fo3gWURwWgGBA7ZY1wn7GEn3Lmh979s16MBm1UKQ7yxRncHj45Lwp2Md5zg1GECP9qARckQVzQ8K5dLCSqZBN1J",
  "key28": "5mcbH9TeT8VffTHJf8cWhNzDfRQieWxzYmg2ue5xjhBEtsqRPV1gNuA6DQZyXNr1NnamojMFxCKrhD3KzCoV3dto",
  "key29": "2hjbufLWLjFzEwhWqeZG26rGTjnrGRF7mHhRPpKPxtEgh3wKUwquUPmT6VLUWrqHUYoHarohcaChAHYwW9p2k7UN",
  "key30": "3bCTHtZPf163JqzQccN1Egmky94qoxp2oQkNyrg98ZKmw43Lx6MUJBwe4FzPRpLQL7Lzb8o78LdPbcXL2xKyanPy",
  "key31": "2DgHZVxgKGm3FaTqXULwSGS3iTMePukCJiqTTXiy1iLgApEemY2QELpN1uibiE9TsRQzXYFbUgktMCSa43UtpwXU",
  "key32": "JPKhZBeLxBDhrav1a8RdGQNGLAsWjvt7gCvLRppRsKsXV1CviP5DE4Df7Zx23iGiRyFmEi96gCpHiQQEJ3NMZPi",
  "key33": "EXRWSJAZ7b3snzdTJhaiKfNbosmS87zYzufi8muDMbyXjQYTrcwh8dvaucPV7Mb3eHpMx29d7aHpjbxFP33iaxz",
  "key34": "4mb7BfYSDwREWtt1fEgSTYrVCcYedFfVRdbvdDzMFX2qvGJZgYtBuZTzf1VY7WKyXGoUKPmy2DJAqvU8v797bYiK",
  "key35": "63r4wGCBPY9WTN6Ct1kNij1P1oPxZBVospTrSG7hFSbLzhaDa7m6GiEuMBcBbEr6JgFvbiTAzba4wiER8hMcB98B",
  "key36": "af4AFpMrofzqcna4fYDsfFqAQfwMDK2119m8e4gNqhU4RKDEQeekCzLRRd91j2PLgB85SUzY4CbcLyNw7bo9U6u",
  "key37": "43qE2XreS7VuAujpsJGNCW5Syqhc5LdeTChN6nwah3eTMDHxpxRaYETR4q65wANE7aK5B2kFD8858bG4iKVBcmGt",
  "key38": "fqom5i8THJRQaDr8FWpFSuP52fbG1xBJLdQrPw5x7oq3Ejypah37GGxt5EZeMjjqG8q9uH6x6Jvp9krB11UPP4j",
  "key39": "3LrCZGparvaikuMMsS1Z9pBynG1WiPELebKovRVyqa4gUAu6BPY9W2gQwrnGo3HhgvFoACEAzpSDqvZUwCqFQReX",
  "key40": "3pq8YeRDj39NBnNHSnVHE1fk8rKUV8CaSCVuV5e4XmC5y69BYDR4aBhnhL8aqdsgq1vpaQBf5yUbdHfX2Kjr9VAw"
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
