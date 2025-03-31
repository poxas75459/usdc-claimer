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
    "4ccatnFX2JKAqh15uxvUMUcQcGUzy4Ls87kGM5VEM3LU4DWxeirF8VLKWQKFYXqoiuuxv5vCNWSPZrwHJCKSpurk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qcucTcWv9PbognCGq92JUkSqMxgTkENXMtF2GxprSkbV2hiseiVuNpahGuUu6TbFNLFDjoPvDTBjHvhmbGTrYP3",
  "key1": "2vNLTMbnJyKSWU9guHivKGonVanpXd1U2ZukKdAysNwngdPSUoaGAJnLFgAfZJceictDVWskGfH1fjA6ao1r6vo7",
  "key2": "CYmLjeEiMfM7fcPMmvckx3J3hHP9r2LCCRc9SaGUJdci9F6zA4MEBsQKDVnTBDD3GRVqs1csW5ku3RSKey6i52D",
  "key3": "w3B6145QogJacnxL8jyrWSFHkHQxjwERJdEAq5fD1LBq7E9rzoUYwUTjzd2WJis6Sun4HbDNQDBa7fQB1CsFy18",
  "key4": "3T9agA1jrcaqWvom5FGBcaf5WgGsonqsANqQX8i4wJCN7siD6YjX1fzgsjQfrakCpfq7dCqL98uxw5UsjHXNacC7",
  "key5": "4SHBvTQLZ9qbMNss97G4RwkRDy7nVDECTsAZt1Vbusg9BdcmaaaZeUzRCRdm9vymF8GVs5DbqLGNc8W958xexf3t",
  "key6": "61g5yToshNLY543zCjHpk4Ugj8vu4iUadz4dAjpvcFXaHA4AZ6yD98ykwYRGJmoDTshEWZHtXRQmAhG85GjwtDA4",
  "key7": "5zZbhWV5LPztt8eG5Ve13ks5oPtmr3wqggRsP21ZxddTeJR6EyMFLn9qsEpTdj9ZZfEWkfKUqrdPouJn8kxUzYsN",
  "key8": "3SCipzXNZNY36EbiCDrGEk6mR22ioi4wQugayegPMiaTuNsz3YoJGS99dGH5DbREYDsobHnpZv6Be8wMKaUzuEdD",
  "key9": "3Hvq5Xe3967E5ytzPwYKpTN22ZDJbf9kJDMb2DwJ1qJUkJnPQx1qPCeKNzKT6WyrVfUNgzZnNTzxvLQV2tHYgWje",
  "key10": "vTMWkaRJVeVaRxV7rYoDPtg9HZSAqkFCNBivMfSCSgm2Jz5N6XuLWbsqiSqQ6Sxdnt43Zs9T1L8rfmEvKUhxyhJ",
  "key11": "4j3EmatRFMTfjiEA6WV8MzUpCbUen1d8rKPHWpZ6m9dMvN4ZJjUhdvZRTFqktMzZjM1u86YH6gwN8HTUAQJeBjBG",
  "key12": "DkB9Xu6vfxeqXisrS4UjJ4HjWUhmXvaMut1QhfnK8W8X71BEmjm86svY1y4wtTW3PXzwJT7Ts49EpUx7UvptAeU",
  "key13": "5fF4VbWKPPAiSCrgqiPJtGZYWicR4HV9DeKgKNmun2Xt8xC3fyG4hCjFTuQnwmSTBE2dCRXq11SbXhvyqhEN6yLR",
  "key14": "35TeEm2Dcr2HW7Cttu6pjAnmA1C3m1qvPe34qDg1YRhMkDYpZerv8GDKaWD2Es8oEEuznu81Qa5kUQZpNsTcWSJi",
  "key15": "JpqGHhNN3GtA8wo1EvFke49LFMTKp8fBVKZQ5yuZmdkfrQHNR6xoShs5D1W9JyQXdtcVBMUmHscj3cC9b3B5tvZ",
  "key16": "R8u1pJvHRvHhu6s7kHdK9FMDkUuuY2v2TXvQzTnND7wSu8cSrkKV2qsqesSb4gi3qicyNcKLcV8iBczudM9ibyd",
  "key17": "4kdmzunyFEm2YM6BghwbXuPxTjqYzP17AWH5pqMm6zX2iqCoiNxtafsEREb922e7xQqMp7KfPfZWzNsdhrmLMhLM",
  "key18": "35AdYudyb557fsU98pZLFPQd52QrTyZWnw6qdMzwPbVdF2rics1fpwQAFyGw2wrJ9JRwG2hSGX7gYg1fHtSoWVtu",
  "key19": "4P7j98ApGR2vBViV1NKXtpgi8Uiun9Bvfxu7iZuaXenVEWygWhYNmU2GDTLzPUjAJX5uUDTQuYRtwXn7gTUzJWyV",
  "key20": "RpCa6qctC9YAPmhCGqpMJytcHosJQ9gzMynLNCAn1HhyBiVNEDbPrPFojTNfR6hcXtMvDpregBQS4f2zt5tD5uN",
  "key21": "5goqEcykBJVxTU5AnuaLqMgaMDnn4XVBXXDeeoMqsyrSqbTd1Ut5Th3BBPjH8m6EsnS8r92xnzryUFe6xCzQXtjN",
  "key22": "3fDQQ92zxdPbRQANLXJdiAGPwbNczPJeXdBftKtVWGWo4Zh62kGUXunynzDnXBSfXYXMeskB9uD8hxTEe5uaNdVc",
  "key23": "4tdLJZqE6ajPeVuGHgQzbc7Ly4kDpGheU8WkWd7rYxFU8C6APumtLfvsUJfrvrcS6QKzL96TG3gzwpZcViMQ5r8z",
  "key24": "87xLCD84U3o8EpUqUKFB5cQhiCJse9soxfJFM1B5APCPXcD6B3cuEANrUfFNj7bLXCP6aU4M65LDCn57EyvtFVo",
  "key25": "2LWEKqKBCVMmRjQpKZ6SuwLYjTDXDfGuL4HUUtsrijBzAaBQuBBMZZDEBcLaSek8YjfAYKo93ficqAJK63oaDe42",
  "key26": "2536pAKkkmbTmVJiFqE5JwKSNdTDj3D3jhBGjzLqvqXDeDV6sRKU84EuSjrNxvFGaDHdvWFvLrZ9rgURdnRDM3rW",
  "key27": "3wWRLPq65EBV1uBCQ2g9bypNoFrkpVeWUHtbS4VpaojMQWZfmRaqxcjfmKMC9u6NanVCi741DtyS2dRwXtpKdrDW",
  "key28": "4sYMj4aSA4tz2KjAHPGeZLhEzUkttc2QPoR2gtqyv8m4WS8s7U2G5wJYwA7GfCgCG1R3vHbkr98W331sRyHpDHMU",
  "key29": "39V9q5agwJhzZ7PZ98wDLjb72j1zwwCk1ngrQ59Rz5ccfYsArnFVcLYqwSyBVJ2q7uj3qHNs3QuvBoamtVF7XT82",
  "key30": "sEU4MS8BPNzhfYcy3KEdCBtmVXnHTZmBRUQ8TCpX8EWY1KnL6r4986T35dfwdQ443gx8VwKDTsEXSMwVN9vyHsD",
  "key31": "54DxWmDkXyV7xrMK4g42EBQeGuS4E3udhg6mugdg8A4d9AmvBebEPMKo7ah2xDzvVm3xW8nqcRfABnjjTVNHmKqg",
  "key32": "3acz2afpvhsfY5iw2togFahae2Xh7WNJFf3CA5GtQnZxvQ4G7vzvgrc4FieTT7KKomzKscyWeoiVssC694B96RHE",
  "key33": "52auu5wqwjmfndMeG6hJDn8UhBP9AuJXJP9m8DASsyuG4SRm9mUqcJvLX7MYSQmb5CYAaPFYMwKcV1aZyS5YB3py",
  "key34": "37D4Yu6h4NH1Eew8gAwP6VH3CBNAX3NEKqAqCmkg3D9rTnj1XDBxe1xdNN3H2eEkzFxBLBoBPSAa9ZmSGjDkKwUq",
  "key35": "2eDvDKJA4c1Dwcoev1NdjRkrN9BipWupyYWF79tp3kW8ge6VtuxmKxN2XXsK1rstAnhNfmi1LzThFET7aAj9qmAy",
  "key36": "3CqKLKPgU6Y5DoYFdzqB3kUSNchkkRc3KTVLUvv8sFawXaUsQna1hMyAM9amiLhCyPcQQRRonDDgivLVHbUTMEGd",
  "key37": "2KRqPFCHdiXFg1dcVcXbUDPiZ5QEuPHgMRHpicS2CvZgezphP328fo42iNuP5gdTC1WWikwrK56jaQ7Q5JUukdNC",
  "key38": "3xSUUgaW1SamwUySg4ERnyBnUirqKYCxvWs6xmBd9vYgwkHHGPXGqb4QMXjo9T8ET4BpvUW3B1157dMtmf89AdKF",
  "key39": "5fmJxqFodniGhWtVcQh3T6pQ2JRehbNUpDDwda9PUjitzA1vpyK5Ew1KYVP2Ris1Q3g5KfQYG8sDWMqpWeSASHDM",
  "key40": "3b7iMT6JgMAXw2S2i1AjfyKCV1Fp9TWA2tdVotf7mXZLUPxyMuqQwFDoN5Syy7nLJcu4p1Tmru56xTfGvvGSyWcP"
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
