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
    "62GVGXPDZyAjbc6YJcBLFyjZUfX5tfescxZEQkY15ieL3FS7bingkQabhh1GGxgmUfRQM33SeNwBe3HN1q7wXVu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tiyzD4wuxKasXkDkVaogXkJ2rDNCRdPcwYnNZdqjvAUodeSjB4d2TXJSND3Myeg6VMUfLcyoowQfb7hA5RnJ37X",
  "key1": "2AU6E5wivKPXPX4ro57jNHcbwsZAe3VxbPFNqBT8jXmgVb2sMMU4nYCMJZVyw359Z8Z1Liha4jrRfvs6rMcdvh1P",
  "key2": "3PiHyJrnTuP554tDsgprDWhyibETfi4WTJukjtrScVsrDNmmbPdAchphHe23hMZNbiUqXeCEQxwy4C6UASDV3T5s",
  "key3": "25rEvrSE8sg9p8uJPBj3gbYwLomnKxi6J7ctbVCb8W8o2mftjhXUNdYkBERWFLmVwWvvKKYbnJujY4XjYv1mDAkz",
  "key4": "5buZqzYuiZa7o1diegj42PRbf3u6NMU1JaJfWhMDpE57HcYBiNvGddJb12EXyD3ZqCcvFxdS72dps42ZipG69j6E",
  "key5": "4RK7iCK37GrPqaeG3PWtjkFy39v1BaykdYAdg36WdmcxwECYevVDKMGryZ32fhQzZmqrDDVVHLKGvfYJTsWfsp6Y",
  "key6": "4Vhstg6UMwgx1AqJgS5c2ThcymCuPFSK9grZo4atCJKpJmZQ4pCbKjjd9r6EWNocrbPqULVWK13AL5vtXb8UUAWX",
  "key7": "5gpaFN62AMriXSUHUMUQSa9ow9sTaWYQjUxinm4g1gqes9hYb1US9BTNfm9upguT1fhgcVFDZdHB4QTBv7mVJ9fS",
  "key8": "o6AkG45cBJrxMiBqo7wPgzjZu4b3EDGNAtS49tPaN3Nxq1ErVTNUsVDfF4ht2j6WnyVFvriZNgjdn6bDdBsKZhT",
  "key9": "41CCxsdNP23pvgrH66WkSCYGFNrPB6wBZyikbcWt6RW4o5NH81f7oTZoKRW9A5qZ4uvGzUM1PQ9SWc6tfe7JB9p",
  "key10": "2ZmmGN66KtxNrc7JmkqZLaXTMqLA9M5FyESyqPzS7rs1MkR84wMoe6KPwehMDfiPFE9czWJejhjAtnjtMzfKNtBK",
  "key11": "xxSy2UGkErzkdbnMCALYQTRbqBWanWdiAVAxx6Jp86EPSytPaRzPT69Lue2RVnDLL9WSctkL4vu5GcMMeYeS3sm",
  "key12": "4HYhbTQtoeX7njWqAATJGDeWHmUq5f618N8R9LBGfmNBosoM3kBYYWE7vqzbSxxj9DjoruHXm8xXd2Emvfk2U1NP",
  "key13": "5Eg9k47eM1Hgx9KaWyyhmsdiDPE7gjWBiaSWwbVGCgcZBXhmPCrkoJKBVgbsbEHYwP3JgYWYLaqe4fwBr2nGJGxa",
  "key14": "3S2hAeK4jLUvodqAf2a1rbhs5Y7WF1wjR9WPLkA3AipF9V2ra4VS4dr5uR25qLuSNPxKWZeDiPhzRmibp6nRVysA",
  "key15": "wxKusbBpWsUXmkgp9bz8ThDL8pTs4o74mhrnWvTjXwGP8JKqNx4qcCfKt599jeD9GvEQwwHqNu8cYrpfqhc4eut",
  "key16": "5Uh1ETaYVu1NTm8zu4pV5TEupQJt2HU1UTSr3TovRuJn2eHumUCj654NfT6GLjSh97pQeLR9QRd4x63C67eC8SwX",
  "key17": "59GvA1LCu7r64BdxLuGdL1wcmoXRLJn2PManMCKdaVrdefbf63HvRJUvpneX4k51M5EMtCuFyH6hPo94eMVwT3hp",
  "key18": "akwJapaHNMVBNkp142MEJbwUq7PLsUwgpgCFyJrJyJpYtHRgyUzxdJCgj6XKWFCFDwcp3W2V5TgEGRkg7V7Jbtm",
  "key19": "yVv7aWRWPpNKq2TtdeJB87eYC6suBfNhXD7X8WAC9kCJN6BdaCrSRfjSbrbVCe5s7mYazgEv59Uf5SvARmSmFAg",
  "key20": "5C1qcUyxr17QN4hns9mheJuFbQjVwsgaZYQSAdbZhCDWB5LZcDje5o2KsWTfKT68KW55aPEL3ECUTgDBxyig9FeJ",
  "key21": "5cSPRpMSobgrAdWL56Tz2Sb1FFNb2AxQmTvF7HZzRYQCnaJHBbJ1m6xq7RFmMXsPCFXD9fy7hPJd424KvjyyVMpf",
  "key22": "532hXgEabMzYVhUqpsieXWTbBva3nHo37oBrSApvHnbwJngLADSVqgwwAZgeEMX7hCB8sDwmxzmLbS78Atstj2uT",
  "key23": "5mafa3FpgrkLpwW6GEWLSYhvUU1CWCxCZNmXzpzEXQ55xBeUoBqitPmd1VSnYnEeC9gE7d4mXYZeoUk2yhftNBw6",
  "key24": "TUDFnnkX8ptQ2Nq6VrJXVZTHMHyekUXnB2p7vUp92v9xNo46faJw6E1kVdQ23TJyucyoKHQipG2kv4NmzJQHnNg",
  "key25": "2SbZyRA8fEYpXDVfPzuqviNVTgqyZdasEyGZEFaJg1z2pP2je9fNsV9scmdPDPJAjGXtv16pkhnq7ZXDCS2utZ5W",
  "key26": "493nBziUPtuwHL8JhyB3d2CWip3yWdqkFDSAAd8R3HDxiMNQXPDoMcQ6WguyGPw16SQ79LcogxR7ZxjM4z2nujyn",
  "key27": "5c2qKJupjpNMCw7CjuSHW4Vx6JJC7XSr74R986Ckk4qUCP7YdRc1Cv1PLvnaBHwuRvsp7TXGvFmDv22gK21k4ngN",
  "key28": "2YAWw8EXWLwh7tSBhkxjjjQv27CTuspJmg2bVMxc6AEHucyK3snfZcjZZ1eF876As5XCaoaZT8KNERV167v3vFpv",
  "key29": "4FvnR5GTscNVguTsYybbRFW1zkwvcW7C7iem8JwwuJDLapsn3MTkaxfGfGCbdY1pXjR519uGyCgKZTrqxghf1yKv",
  "key30": "4TFtnMPDL83JBpLutuDCK1EQe5rJ5q5J7L8MJZnQCR9V7GnGd8suzDBjmskM8hgnrY9eLeyrRiFHFUnbGgyModBi",
  "key31": "4121KuxziEjqMvzRDo5BsDdXvLNEUEnqZsMWhE2UT7VrVTa2F51D1LeUfC64udCLkB74gKpMBLKiUnsWDTf9j1XS"
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
